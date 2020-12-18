'use strict';
export const url = 'https://openapi.alipay.com/gateway.do';
export const devUrl = 'https://openapi.alipaydev.com/gateway.do';

export const historyApi: string[] = [
  // 历史接口 api
  'alipay.offline.market.shop.public.unbind', // 商家门店解绑服务窗接口
  'alipay.mobile.public.message.custom.send', // 异步单发消息
  'alipay.mobile.public.menu.update', // 更新菜单
  'alipay.mobile.public.message.single.send', // 单发模板消息
  'alipay.mobile.public.qrcode.create', // 生成带参数的二维码
  'alipay.mobile.public.follow.list', // 获取关注者列表
  'alipay.mobile.public.shortlink.create', // 服务窗短链自主生成接口
  'alipay.mobile.public.menu.add', // 创建菜单
  'alipay.mobile.public.info.query', // 服务窗基础信息查询接口
  'alipay.mobile.public.template.message.get', // 模板消息领取接口
  // 'alipay.platform.userid.get', // 根据OpenId获取UserId
  'alipay.user.userinfo.share', // 支付宝钱包用户信息共享
  // 'alipay.fund.trans.toaccount.transfer', // 单笔转账到支付宝账户接口
  'alipay.mobile.shake.user.query', // 查询握手用户信息接口

  // 支付 api
  'ant.merchant.expand.indirect.image.upload', // 图片上传

  // 营销 api
  'alipay.promorulecenter.rule.analyze', // 营销规则分析

  // 生活号（原服务窗）api
  'alipay.open.public.life.agent.create', // isv代创建生活号接口

  // 芝麻信用 api
  'zhima.merchant.closeloop.data.upload', // 批量数据传入
  'zhima.data.batch.feedback', // 批量数据反馈服务
  'zhima.merchant.logo.image.upload', // 信用服务商户logo图片上传

  // 工具类 api
  'alipay.system.oauth.token', // 换取授权访问令牌
  'monitor.heartbeat.syn', // 验签接口

  // 生活缴费 api
  'alipay.ebpp.bill.get', // 查询账单
  'alipay.ebpp.bill.add', // 创建账单
  'alipay.ebpp.pdeduct.sign.cancel', // 缴费直连代扣取消签约
  'alipay.ebpp.pdeduct.bill.pay.status', // 缴费直连代扣订单支付状态查询
  'alipay.ebpp.pdeduct.pay', // 公共事业缴费直连代扣扣款支付接口
  'alipay.ebpp.pdeduct.sign.add', // 缴费直连代扣签约

  // 开放生态 api
  'alipay.open.sp.image.upload', // 图片上传接口
  'alipay.open.app.api.field.apply', // 申请获取接口用户敏感信息字段
];
// 公共参数
export const publistParams: string[] = [
  'app_id',
  'method',
  'format',
  'charset',
  'sign_type',
  'sign',
  'timestamp',
  'version',
  'notify_url',
  'return_url',
  'app_auth_token',
  'other_params',
  'privateKey',
  'publicKey',
];

// 公共参数
export interface IAlipayPublic {
  app_id: string;
  sign_type?: string;
  privateKey: Buffer;
  publicKey: Buffer;
  sandbox?: boolean; // 是否启用沙箱 默认false 不启用
}
// 加密参数
export interface Isign {
  encode: string;
  unencode: string;
}
