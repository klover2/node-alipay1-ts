'use strict';
export const url = 'https://openapi.alipay.com/gateway.do';
export const devUrl = 'https://openapi.alipaydev.com/gateway.do';

// 历史接口
export const historyApi: string[] = [
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
  'alipay.platform.userid.get', // 根据OpenId获取UserId
  'alipay.user.userinfo.share', // 支付宝钱包用户信息共享
  'alipay.fund.trans.toaccount.transfer', // 单笔转账到支付宝账户接口
  'alipay.mobile.shake.user.query', // 查询握手用户信息接口
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
  'app_auth_token',
  'other_params',
];

// 公共参数
export interface IAlipayPublic {
  app_id: string;
  sign_type?: string;
  timestamp: string;
  app_auth_token?: string;
  privateKey: Buffer;
  sandbox?: boolean; // 是否启用沙箱 默认false 不启用
}
// 加密参数
export interface Isign {
  encode: string;
  unencode: string;
}

// 业务扩展参数
export interface IExtendParams {
  sys_service_provider_id?: string;
  hb_fq_num?: string;
  hb_fq_seller_percent?: string;
  industry_reflux_info?: string;
  card_type?: string;
}
// 外部指定买家
export interface IExtUserInfo {
  name?: string;
  mobile?: string;
  cert_type?: string;
  cert_no?: string;
  min_age?: string;
  fix_buyer?: string;
  need_check_info?: string;
}
// 商品信息
export interface IGoodsDetail {
  goods_id: string;
  alipay_goods_id?: string;
  goods_name: string;
  quantity: number;
  price: number;
  goods_category?: string;
  categories_tree?: string;
  body?: string;
  show_url?: string;
  specified_channel?: string;
  business_params?: string;
}

// 手机网站支付接口2.0 请求参数
export interface IWapPay {
  return_url?: string;
  notify_url?: string;
  body?: string;
  subject: string;
  out_trade_no: string;
  timeout_express?: string;
  time_expire?: string;
  total_amount: number;
  auth_token?: string;
  goods_type?: string;
  quit_url: string;
  passback_params?: string;
  product_code: string;
  promo_params?: string;
  extend_params?: IExtendParams;
  merchant_order_no?: string;
  enable_pay_channels?: string;
  disable_pay_channels?: string;
  store_id?: string;
  goods_detail?: IGoodsDetail[];
  specified_channel?: string;
  business_params?: string;
  ext_user_info?: IExtUserInfo;
}
