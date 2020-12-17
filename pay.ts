'use strict';
import Alipay from './index';
import {IAlipayPublic, IWapPay} from './lib/config';

class Pay extends Alipay {
  constructor(params: IAlipayPublic) {
    super(params);
  }
  // 重写父类方法
  public callback_check(params: object): boolean {
    return super.callback_check(params);
  }
  // alipay.trade.wap.pay(手机网站支付接口2.0)
  public async wap_pay(params: IWapPay): Promise<string> {
    const pay_url = this.init('alipay.trade.wap.pay', params);
    return pay_url;
  }
}

export = Pay;
