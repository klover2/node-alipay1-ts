'use strict';
// alipay 接口主入口
import crypto from 'crypto';
import {IAlipayPublic, url, devUrl, historyApi, publistParams, Isign} from './lib/config';
import {getNowFormatDate} from './lib/util';
class Alipay {
  private app_id: string; // 支付宝分配给开发者的应用ID
  private readonly format = 'JSON'; // 仅支持JSON
  private readonly charset = 'UTF-8'; // 请求使用的编码格式，如utf-8,gbk,gb2312等
  private sign_type: string; // 商户生成签名字符串所使用的签名算法类型，目前支持RSA2和RSA，推荐使用RSA2
  private readonly version = '1.0'; // 调用的接口版本，固定为：1.0
  private sandbox = false; // 是否启用沙箱 默认false 不启用

  private method = ''; // 接口名称
  private return_url = ''; // HTTP/HTTPS开头字符串 回调地址
  private timestamp = ''; // 发送请求的时间，格式"yyyy-MM-dd HH:mm:ss"
  private notify_url = ''; // 支付宝服务器主动通知商户服务器里指定的页面http/https路径。
  private app_auth_token = '';
  private auth_token = '';

  private other_params: object = {}; // 请求参数的集合，最大长度不限，除公共参数外所有请求参数都必须放在这个参数中传递，具体参照各产品快速接入文档

  private publicKey: Buffer; // 公钥
  private privateKey: Buffer; // 密钥
  constructor(params: IAlipayPublic) {
    this.app_id = params.app_id;
    this.sign_type = params.sign_type || 'RSA2';
    this.sandbox = params.sandbox || false;
    this.publicKey = params.publicKey;
    this.privateKey = params.privateKey;
  }
  // 所以接口参数处理
  public allApi(method: string, params: object): string {
    return this.init(method, params);
  }
  // 回调校验
  public callback_check(_params: any | object): boolean {
    if (!(_params instanceof Object)) throw new Error('传入参数不是object类型');
    // 不能加上'sign', 'sign_type' 才能验证签名通过
    const unencode = Object.keys(_params)
      .filter(function (key) {
        return !['sign', 'sign_type'].includes(key);
      })
      .sort()
      .map(function (key) {
        return key + '=' + _params[key];
      })
      .join('&');

    const signType = _params['sign_type'] || this.sign_type;
    const sign = _params['sign'] || '';
    return this.publicKeySign(unencode, sign, signType);
  }
  protected init(method: string, params: any): string {
    if (!method) throw new Error('缺少接口名称method');

    this.method = method || '';
    this.notify_url = params.notify_url || '';
    this.return_url = params.return_url || '';
    this.timestamp = params.timestamp || getNowFormatDate();
    this.app_auth_token = params.app_auth_token || '';
    this.auth_token = params.auth_token || '';

    const ret: Isign = this.dealParams(params);

    // 加密
    const sign: string = this.privateKeySign(ret.unencode, this.sign_type);
    const parameter = `${ret.encode}&sign=${encodeURIComponent(sign)}`;
    return this.isSandbox(parameter);
  }
  // 环境判断
  private isSandbox(params: string) {
    return `${this.sandbox ? devUrl : url}?${params}`;
  }
  // 请求参数处理
  private dealParams(params: any): Isign {
    const map: any = {};
    for (const key in params) {
      if (!!params[key] && !publistParams.includes(key)) {
        map[key] = params[key];
      }
    }

    // 使用历史接口
    if (historyApi.includes(this.method)) {
      this.other_params = {
        ...map,
      };
    } else {
      this.other_params = {
        biz_content: JSON.stringify(map),
      };
    }

    const _params: any = {
      app_id: this.app_id,
      method: this.method,
      format: this.format,
      charset: this.charset,
      sign_type: this.sign_type.toUpperCase(),
      timestamp: this.timestamp,
      version: this.version,
      ...(this.notify_url && {notify_url: this.notify_url}),
      ...(this.return_url && {return_url: this.return_url}),
      ...(this.app_auth_token && {app_auth_token: this.app_auth_token}),
      ...(this.auth_token && {auth_token: this.auth_token}),
      sign: '',
      ...this.other_params,
    };

    const encode = Object.keys(_params)
      .filter(function (key) {
        return !['sign'].includes(key);
      })
      .sort()
      .map(function (key) {
        return key + '=' + encodeURIComponent(_params[key]);
      })
      .join('&');
    const unencode = Object.keys(_params)
      .filter(function (key) {
        return !['sign'].includes(key);
      })
      .sort()
      .map(function (key) {
        return key + '=' + _params[key];
      })
      .join('&');
    return {unencode, encode};
  }
  // 秘钥加密 处理
  private privateKeySign(querystring: string, sign_type: string): string {
    if (!this.privateKey) throw new Error('缺少秘钥');

    let sign;
    if (sign_type.toUpperCase() === 'RSA') {
      sign = crypto.createSign('RSA-SHA1');
    } else if (sign_type.toUpperCase() === 'RSA2') {
      sign = crypto.createSign('RSA-SHA256');
    } else {
      throw new Error('请传入正确的签名方式，sign_type：' + sign_type);
    }
    sign.update(querystring);
    return sign.sign(this.privateKey, 'base64');
  }
  // 公钥加密 处理
  private publicKeySign(querystring: string, sign: string, sign_type: string): boolean {
    if (!this.privateKey) throw new Error('缺少公钥');

    let verify;
    if (sign_type.toUpperCase() === 'RSA2') {
      verify = crypto.createVerify('RSA-SHA256');
    } else if (sign_type.toUpperCase() === 'RSA') {
      verify = crypto.createVerify('RSA-SHA1');
    } else {
      throw new Error('请传入正确的签名方式，sign_type：' + sign_type);
    }
    verify.update(querystring);
    return verify.verify(this.publicKey, sign, 'base64');
  }
}
export = Alipay;
