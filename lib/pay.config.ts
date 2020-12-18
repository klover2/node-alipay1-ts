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
// alipay.trade.precreate(统一收单线下交易预创建) 扫码支付
interface ISettleInfo {
  settle_detail_infos: IsettleDetailInfos[];
  settle_period_time?: string;
}
interface IsettleDetailInfos {
  IsettleDetailInfos: string;
  trans_in: string;
  summary_dimension?: string;
  settle_entity_id?: string;
  settle_entity_type?: string;
  amount: number;
}
interface IBusinessParams {
  campus_card?: string;
  card_type?: string;
  actual_order_time?: string;
}
export interface IPrecreate {
  notify_url?: string;
  timestamp?: string;
  app_auth_token?: string;

  out_trade_no: string;
  seller_id?: string;
  total_amount: number;
  discountable_amount?: number;
  subject: string;
  goods_detail?: IGoodsDetail[];
  body?: string;
  product_code?: string;
  operator_id?: string;
  store_id?: string;
  disable_pay_channels?: string;
  enable_pay_channels?: string;
  terminal_id?: string;
  extend_params?: IExtendParams;
  timeout_express?: string;
  settle_info?: ISettleInfo;
  merchant_order_no?: string;
  business_params?: IBusinessParams;
  qr_code_timeout_express?: string;
}
// alipay.trade.app.pay(app支付接口2.0)
interface ISignParams {
  personal_product_code: string;
  sign_scene: string;
  external_agreement_no?: string;
  external_logon_id?: string;
  access_params: IAccessParams;
  sub_merchant?: ISignMerchant;
  period_rule_params?: IPeriodRuleParams;
  sign_notify_url?: string;
}
interface IAccessParams {
  channel: string;
}
interface ISignMerchant {
  sub_merchant_id?: string;
  sub_merchant_name?: string;
  sub_merchant_service_name?: string;
  sub_merchant_service_description?: string;
}
interface IPeriodRuleParams {
  period_type: string;
  period: number;
  execute_time: string;
  single_amount: number;
  total_amount?: number;
  total_payments?: number;
}
export interface IAppPay {
  return_url?: string;
  timestamp?: string;
  notify_url?: string;
  app_auth_token?: string;

  timeout_express?: string;
  total_amount: number;
  product_code?: string;
  body?: string;
  subject: string;
  out_trade_no: string;
  time_expire?: string;
  goods_type?: string;
  promo_params?: string;
  passback_params?: string;
  extend_params?: IExtendParams;
  merchant_order_no?: string;
  enable_pay_channels?: string;
  store_id?: string;
  specified_channel?: string;
  disable_pay_channels?: string;
  goods_detail?: IGoodsDetail[];
  ext_user_info: IExtUserInfo;
  business_params?: string;
  agreement_sign_params?: ISignParams;
}
