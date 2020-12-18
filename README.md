## 介绍
`node-alipay1` 用typescript封装而成，支持async await 语法。可以在js 中和 ts 中使用，使用require 或者 import 导入。本npm包进行了参数处理、加密、验签，让使用者更加简单使用。
## 安装
`yarn add node-alipay1` 或者 `npm i node-alipay1 --save`
## 使用
```bash
const Alipay = require('node-alipay1') 或者 import Alipay from 'node-alipay1'

const alipay = new Alipay({
  app_id: '2014072300007148',
  privateKey: fs.readFileSync(__dirname + '/private_key.pem'),
  publicKey: fs.readFileSync(__dirname + '/public_key.pem'),
  sign_type: 'RSA',
  sandbox: false,
});
```
* 参数介绍

|参数|是否必填|介绍|
|-|-|-|
|app_id|是|支付宝分配给开发者的应用ID|
|privateKey|是|支付宝秘钥|
|publicKey|是|支付宝公钥|
|sign_type|否|商户生成签名字符串所使用的签名算法类型，目前支持RSA2和RSA，推荐使用RSA2 和生成证书使用的签名方式有关|
|sandbox|否|是否启用沙箱模式 默认false 不启用|

* 方法介绍

|方法名称|作用|
|-|-|
|allApi|支持支付宝所有接口并且进行参数处理返回`https://openapi.alipay.com/gateway.do?...`|
|callback_check|回调签名验证|

* 方法使用介绍
1. `allApi`
```bash
// method 接口名称
// params 包括支付宝当前接口请求参数 + 当前接口公共参数中的（notify_url,notify_url,timestamp,app_auth_token）
// 按照支付宝接口说明文档 非必须参数可以不填
// let url = alipay.allApi(method, params)
```
使用如下
```bash
let url = alipay.allApi('alipay.trade.wap.pay', {
notify_url: '', // 回调通知 可以不填
notify_url： '', // HTTP/HTTPS开头字符串 可以不填
timestamp: '2014-07-24 03:07:50' // 	发送请求的时间，格式"yyyy-MM-dd HH:mm:ss" 可以不填
app_auth_token： ''，// 详见应用授权概述 可以不填

// 请求参数 如下（请求参数中可选可以不填）
subject： '大乐透', 
out_trade_no: '70501111111S001111119',
total_amount: 0.01,
quit_url: 'http://www.taobao.com/product/113714.html',
product_code: 'QUICK_WAP_WAY'
})
```
其他接口 使用如上

2. `callback_check`
支付宝支付成功回调
```bash
// params 回调返回的所有参数
const result = alipay.callback_check(params); 
// result = true 验签成功
```

只需要支付请看: `https://blog.csdn.net/weixin_43110609/article/details/111361082`

## 文档
[支付宝文档](https://opendocs.alipay.com/apis/api_1/alipay.trade.wap.pay?scene=common)