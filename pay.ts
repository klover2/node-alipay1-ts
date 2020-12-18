'use strict';
import Alipay from './index';
import {IAlipayPublic} from './lib/config';
import {
  IWapPay,
  IQuery1,
  IQuery2,
  IClose1,
  IClose2,
  IRefund1,
  IRefund2,
  IRefundQuery1,
  IRefundQuery2,
  IPrecreate,
  IAppPay,
} from './lib/pay.config';
import superagent from 'superagent';

class Pay extends Alipay {
  constructor(params: IAlipayPublic) {
    super(params);
  }
  // 重写父类方法
  public callback_check(params: object): boolean {
    return super.callback_check(params);
  }
  // alipay.trade.wap.pay(手机网站支付接口2.0) h5支付
  public async wap_pay(params: IWapPay): Promise<string> {
    const url = this.init('alipay.trade.wap.pay', params);
    return url;
  }
  // alipay.trade.precreate(统一收单线下交易预创建) 扫码支付
  public async precreate(params: IPrecreate): Promise<string> {
    const url = this.init('alipay.trade.precreate', params);
    return url;
  }
  // alipay.trade.app.pay(app支付接口2.0)
  public async app_pay(params: IAppPay): Promise<string> {
    const url = this.init('alipay.trade.app.pay', params);
    return url;
  }
  // alipay.trade.query(统一收单线下交易查询)
  public async query(params: IQuery1 | IQuery2): Promise<object> {
    const url = this.init('alipay.trade.query', params);
    const result = await superagent.get(url);
    return JSON.parse(result.text);
  }
  // alipay.trade.close(统一收单交易关闭接口)
  public async close(params: IClose2 | IClose1): Promise<object> {
    const url = this.init('alipay.trade.close', params);
    const result = await superagent.get(url);
    return JSON.parse(result.text);
  }
  // alipay.trade.refund(统一收单交易退款接口)
  public async refund(params: IRefund1 | IRefund2): Promise<object> {
    const url = this.init('alipay.trade.refund', params);
    const result = await superagent.get(url);
    return JSON.parse(result.text);
  }
  // alipay.trade.fastpay.refund.query(统一收单交易退款查询)
  public async refund_query(params: IRefundQuery1 | IRefundQuery2): Promise<object> {
    const url = this.init('alipay.trade.fastpay.refund.query', params);
    const result = await superagent.get(url);
    return JSON.parse(result.text);
  }
}

export = Pay;
