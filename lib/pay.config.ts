'use strict';
// 业务扩展参数
interface IExtendParams {
  sys_service_provider_id?: string;
  hb_fq_num?: string;
  hb_fq_seller_percent?: string;
  industry_reflux_info?: string;
  card_type?: string;
}
// 外部指定买家
interface IExtUserInfo {
  name?: string;
  mobile?: string;
  cert_type?: string;
  cert_no?: string;
  min_age?: string;
  fix_buyer?: string;
  need_check_info?: string;
}
// 商品信息
interface IGoodsDetail {
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
  timestamp?: string;
  app_auth_token?: string;

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
// alipay.trade.query(统一收单线下交易查询)
interface IQuery {
  timestamp?: string;
  app_auth_token?: string;

  org_pid?: string;
  query_options?: String[];
}
export interface IQuery1 extends IQuery {
  out_trade_no: string;
  trade_no?: string;
}
export interface IQuery2 extends IQuery {
  out_trade_no?: string;
  trade_no: string;
}
// alipay.trade.close(统一收单交易关闭接口)
interface IClose {
  timestamp?: string;
  app_auth_token?: string;
  notify_url?: string;

  operator_id?: string;
}
export interface IClose1 extends IClose {
  out_trade_no: string;
  trade_no?: string;
}
export interface IClose2 extends IClose {
  out_trade_no?: string;
  trade_no: string;
}
// alipay.trade.refund(统一收单交易退款接口)
export interface IRefundRoyaltyParameters {
  royalty_type?: string;
  trans_out?: string;
  trans_out_type?: string;
  trans_in_type?: string;
  trans_in: string;
  amount?: number;
  amount_percentage?: number;
  desc?: string;
}
interface IRefund {
  timestamp?: string;
  app_auth_token?: string;

  refund_amount: number;
  refund_currency?: string;
  refund_reason?: string;
  out_request_no: string;
  operator_id?: string;
  store_id?: string;
  terminal_id?: string;
  goods_detail?: IGoodsDetail[];
  refund_royalty_parameters?: IRefundRoyaltyParameters[];
  org_pid?: string;
  query_options?: string[];
}
export interface IRefund1 extends IRefund {
  out_trade_no?: string;
  trade_no: string;
}
export interface IRefund2 extends IRefund {
  out_trade_no: string;
  trade_no?: string;
}
// alipay.trade.fastpay.refund.query(统一收单交易退款查询)
interface IRefundQuery {
  timestamp?: string;
  app_auth_token?: string;

  out_request_no: string;
  org_pid?: string;
  query_options?: string[];
}

export interface IRefundQuery1 extends IRefundQuery {
  out_trade_no?: string;
  trade_no: string;
}
export interface IRefundQuery2 extends IRefundQuery {
  out_trade_no: string;
  trade_no?: string;
}
