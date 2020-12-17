'use strict';
/**
 * 接口介绍
 */
export enum Ealipay {
  // 支付 api https://opendocs.alipay.com/apis/api_1/alipay.trade.pay
  'alipay.trade.pay', // 统一收单交易支付接口
  'alipay.trade.precreate', // 统一收单线下交易预创建
  'alipay.trade.app.pay', // app支付接口2.0
  'alipay.trade.wap.pay', // 手机网站支付接口2.0
  'alipay.trade.page.pay', // 统一收单下单并支付页面接口
  'alipay.trade.create', // 统一收单交易创建接口
  'alipay.trade.query', // 统一收单线下交易查询
  'alipay.trade.cancel', // 统一收单交易撤销接口
  'alipay.trade.close', // 统一收单交易关闭接口
  'alipay.trade.refund', // 统一收单交易退款接口
  'alipay.trade.page.refund', // 统一收单退款页面接口
  'alipay.trade.fastpay.refund.query', // 统一收单交易退款查询
  'alipay.trade.order.settle', // 统一收单交易结算接口
  'alipay.fund.auth.order.freeze', // 资金授权冻结接口
  'alipay.trade.orderinfo.sync', // 支付宝订单信息同步接口
  'alipay.trade.advance.consult', // 订单咨询服务
  'koubei.trade.order.aggregate.consult', // 聚合支付订单咨询服务
  'alipay.pcredit.huabei.auth.settle.apply', // 花芝轻会员结算申请
  'alipay.commerce.transport.nfccard.send', // NFC用户卡信息同步
  'alipay.data.dataservice.ad.data.query', // 广告投放数据查询
  'alipay.commerce.air.callcenter.trade.apply', // 航司电话订票待申请接口
  'mybank.payment.trade.order.create', // 网商银行全渠道收单业务订单创建
  'koubei.trade.order.precreate', // 口碑订单预下单
  'koubei.trade.itemorder.buy', // 口碑商品交易购买接口
  'koubei.trade.order.consult', // 口碑订单预咨询
  'koubei.trade.itemorder.refund', // 口碑商品交易退货接口
  'koubei.trade.itemorder.query', // 口碑商品交易查询接口
  'koubei.trade.ticket.ticketcode.send', // 码商发码成功回调接口
  'koubei.trade.ticket.ticketcode.delay', // 口碑凭证延期接口
  'koubei.trade.ticket.ticketcode.query', // 口碑凭证码查询
  'koubei.trade.ticket.ticketcode.cancel', // 口碑凭证码撤销核销
  'ant.merchant.expand.indirect.isv.modify', // 间连渠道服务商商户信息补全接口
  'ant.merchant.expand.indirect.image.upload', // 图片上传
  'ant.merchant.expand.shop.modify', // 修改蚂蚁店铺
  'ant.merchant.expand.shop.create', // 蚂蚁店铺创建
  'ant.merchant.expand.shop.consult', // 蚂蚁店铺创建咨询
  'ant.merchant.expand.order.query', // 商户申请单查询
  'ant.merchant.expand.shop.query', // 店铺查询接口
  'ant.merchant.expand.shop.close', // 蚂蚁店铺关闭
  'alipay.commerce.operation.gamemarketing.benefit.apply', // 申请权益发放
  'alipay.commerce.operation.gamemarketing.benefit.verify', // 权益核销
  'alipay.trade.repaybill.query', // 还款账单查询
  'alipay.fund.trans.page.pay', // 资金转账页面支付接口
  'ant.merchant.expand.shop.page.query', // 店铺分页查询接口

  // 会员 api https://opendocs.alipay.com/apis/api_2/alipay.user.info.share
  'alipay.user.info.share', // 支付宝会员授权信息查询接口
  'alipay.user.certify.open.initialize', // 身份认证初始化服务
  'alipay.user.certify.open.certify', // 身份认证开始认证
  'alipay.user.certify.open.query', // 身份认证记录查询
  'alipay.user.agreement.page.sign', // 支付宝个人协议页面签约接口
  'alipay.user.agreement.unsign', // 支付宝个人代扣协议解约接口
  'alipay.user.agreement.query', // 支付宝个人代扣协议查询接口
  'alipay.user.agreement.executionplan.modify', // 周期性扣款协议执行计划修改接口
  'alipay.user.agreement.transfer', // 协议由普通通用代扣协议产品转移到周期扣协议产品
  'alipay.user.twostage.common.use', // 通用当面付二阶段接口
  'alipay.user.auth.zhimaorg.identity.apply', // 芝麻企业征信基于身份的协议授权
  'alipay.user.charity.recordexist.query', // 查询是否在支付宝公益捐赠的接口
  'alipay.user.alipaypoint.send', // 集分宝发放接口
  'koubei.member.data.isv.create', // isv 会员CRM数据回流
  'alipay.user.family.archive.query', // 查询家人信息档案(选人授权)组件已选的家人档案信息
  'alipay.user.family.archive.initialize', // 初始化家人信息档案(选人授权)组件
  'alipay.user.certdoc.certverify.preconsult', // 实名证件信息比对验证预咨询
  'alipay.user.certdoc.certverify.consult', // 实名证件信息比对验证咨询

  // 店铺 api https://opendocs.alipay.com/apis/api_3/alipay.offline.market.shop.modify
  'alipay.offline.market.shop.modify', // 修改门店信息
  'alipay.offline.market.shop.category.query', // 门店类目配置查询接口
  'alipay.offline.market.shop.querydetail', // 查询单个门店信息接口
  'alipay.offline.market.applyorder.batchquery', // 业务流水批量查询接口
  'alipay.offline.market.shop.create', // 创建门店信息
  'alipay.offline.material.image.upload', // 上传门店照片和视频接口
  'alipay.offline.market.shop.discount.query', // 店铺优惠查询
  'ant.merchant.expand.merchant.storelist.query', // 商户外部门店查询接口
  'koubei.catering.crowdgroup.condition.set', // 口碑智慧餐厅精准营销用户人群分组操作接口
  'koubei.merchant.kbdevice.dispenser.query', // 取餐柜所有单元格详情查询
  'koubei.merchant.kbdevice.devices.batchquery', // 查询门店下设备列表
  'alipay.offline.market.shop.summary.batchquery', // 门店摘要信息批量查询接口
  'alipay.offline.market.shop.batchquery', // 查询商户的门店编号列表
  'alipay.open.servicemarket.order.notify', // 服务市场商户确认订购通知
  'alipay.merchant.iot.device.verify', // IoT设备绑定校验
  'alipay.merchant.iot.device.query', // IoT设备绑定关系查询
  'alipay.merchant.iot.device.bind', // IoT设备绑定门店

  // 营销 api https://opendocs.alipay.com/apis/api_5/koubei.marketing.campaign.recruit.shop.query
  'koubei.marketing.campaign.recruit.shop.query', // 招商门店分页查询接口
  'alipay.marketing.card.delete', // 会员卡删卡
  'koubei.marketing.campaign.activity.batchquery', // 口碑营销活动列表查询
  'koubei.marketing.campaign.activity.modify', // 活动修改接口
  'koubei.marketing.campaign.activity.query', // 活动详情查询
  'alipay.marketing.tool.fengdie.template.query', // 查询当前用户可用的模板列表
  'alipay.marketing.tool.fengdie.activity.query', // 查询H5应用详情
  'alipay.marketing.tool.fengdie.activity.create', // 创建H5应用
  'alipay.marketing.tool.fengdie.editor.query', // 唤起凤蝶H5应用的编辑器
  'koubei.marketing.data.trade.habbit.query', // 商户会员交易习惯查询接口
  'koubei.marketing.data.dishdiagnose.batchquery', // 根据菜品类型查询菜品数据
  'koubei.marketing.data.dishdiagnosetype.batchquery', // 菜品类型查询
  'alipay.marketing.campaign.cash.trigger', // 触发现金红包活动
  'alipay.marketing.campaign.cash.status.modify', // 更改现金活动状态
  'alipay.marketing.campaign.cash.list.query', // 现金活动列表查询
  'alipay.marketing.campaign.cash.detail.query', // 现金活动详情查询
  'alipay.marketing.card.update', // 会员卡更新
  'koubei.marketing.data.message.deliver', // 一键营销商家中心PUSH消息接口
  'koubei.marketing.campaign.activity.offline', // 活动下架接口
  'alipay.marketing.card.benefit.modify', // 会员卡模板外部权益修改
  'alipay.marketing.card.benefit.delete', // 会员卡模板外部权益删除
  'alipay.marketing.card.benefit.query', // 会员卡模板外部权益查询
  'alipay.marketing.cashlessvoucher.template.modify', // 无资金券模板修改接口
  'alipay.marketing.voucher.query', // 券查询
  'alipay.marketing.cashlessvoucher.template.create', // 无资金券模板创建接口
  'alipay.marketing.userule.pid.query', // 商户使用场景规则PID查询
  'alipay.marketing.exchangevoucher.use', // 兑换券使用接口
  'alipay.marketing.voucher.templatelist.query', // 查询券模板列表
  'alipay.marketing.voucher.list.query', // 查询券列表
  'alipay.marketing.voucher.template.delete', // 删除券模板
  'alipay.marketing.cashvoucher.template.modify', // 修改券模板
  'alipay.marketing.card.activateform.query', // 查询用户提交的会员卡表单信息
  'alipay.marketing.cashvoucher.template.create', // 创建资金券模板
  'alipay.marketing.campaign.cash.create', // 创建现金活动
  'alipay.marketing.card.template.modify', // 会员卡模板修改
  'alipay.marketing.card.formtemplate.set', // 会员卡开卡表单模板配置
  'alipay.marketing.card.activateurl.apply', // 获取会员卡领卡投放链接
  'alipay.marketing.voucher.stock.use', // 外部商户券码券核销
  // 'koubei.trade.order.consult', // 口碑订单预咨询
  'alipay.open.app.mini.templatemessage.send', // 小程序发送模板消息
  'koubei.marketing.campaign.user.asset.query', // 用户口碑优惠资产查询接口
  'alipay.marketing.card.benefit.create', // 会员卡模板外部权益创建
  'alipay.open.app.qrcode.create', // 小程序生成推广二维码接口
  'alipay.marketing.card.template.batchquery', // 会员卡模板批量查询
  'alipay.marketing.facetoface.decode.use', // 当面付付款码解码
  'alipay.commerce.lottery.present.send', // 商家给用户赠送彩票
  'alipay.commerce.lottery.presentlist.query', // 查询调用者指定时间范围内的彩票赠送列表
  'alipay.commerce.lottery.typelist.query', // 查询可用彩种列表
  'alipay.marketing.card.template.query', // 会员卡模板查询接口
  'alipay.marketing.tool.fengdie.space.create', // 创建云凤蝶空间
  'koubei.marketing.data.mall.shopitems.query', // 商圈门店以及门店下面优惠券商品信息
  'koubei.marketing.data.nearmall.query', // 周边商圈查询
  'alipay.promorulecenter.rule.analyze', // 营销规则分析
  'alipay.marketing.campaign.discount.budget.create', // 营销立减活动预算创建
  'alipay.marketing.campaign.discount.budget.append', // 营销立减活动预算追加
  'koubei.trade.ticket.ticketcode.sync', // 口碑凭证码同步
  'alipay.marketing.card.query', // 会员卡查询
  'koubei.marketing.campaign.activity.create', // 活动创建接口
  'alipay.marketing.voucher.templatedetail.query', // 查询模板详情
  'alipay.marketing.card.open', // 会员卡开卡
  'alipay.marketing.exchangevoucher.template.create', // 兑换券模板创建接口
  'koubei.trade.ticket.ticketcode.use', // 口碑凭证码核销
  'alipay.marketing.card.template.create', // 会员卡模板创建
  'alipay.marketing.card.consume.sync', // 会员卡消费记录同步
  'alipay.marketing.cashitemvoucher.template.create', // 有资金单品券创建
  'alipay.marketing.voucher.send', // 发券接口
  'alipay.pay.app.marketing.consult', // 商户前置营销内容咨询接口
  'alipay.eco.rebate.balance.send', // 更新可领取的集分宝余额
  'alipay.eco.rebate.balance.query', // 查询商品的返利集分宝信息

  // 生活号（原服务窗）api https://opendocs.alipay.com/apis/api_6/alipay.open.public.account.reset
  'alipay.open.public.account.reset', // 重新设置绑定商家会员号
  'alipay.open.public.follow.batchquery', // 获取关注者列表
  'alipay.open.public.qrcode.create', // 带参推广二维码接口
  'alipay.open.public.account.query', // 查询绑定商户会员号
  'alipay.open.public.account.delete', // 解除绑定商户会员号
  'alipay.open.public.life.label.modify', // 标签修改接口
  'alipay.open.public.life.label.batchquery', // 标签批量查询接口
  'alipay.open.public.matchuser.label.delete', // 用户取消标签接口
  'alipay.open.public.menu.batchquery', // 菜单列表查询接口
  'alipay.open.public.personalized.menu.delete', // 个性化菜单删除
  'alipay.open.public.personalized.extension.delete', // 扩展区删除接口
  'alipay.open.public.life.label.create', // 创建标签接口
  'alipay.open.public.account.create', // 添加绑定商户会员号
  'alipay.open.public.shortlink.create', // 服务窗短链自主生成接口
  'alipay.open.public.matchuser.label.create', // 用户打标接口
  'alipay.open.public.message.total.send', // 群发消息
  'alipay.open.public.message.custom.send', // 异步单发消息
  'alipay.open.public.menu.modify', // 默认菜单更新接口
  'alipay.open.public.personalized.menu.create', // 个性化菜单创建
  'alipay.open.public.menu.create', // 默认菜单创建接口
  'alipay.open.public.personalized.extension.create', // 个性化扩展区创建接口
  'alipay.open.public.group.batchquery', // 查询用户分组列表
  'alipay.open.public.group.modify', // 用户分组修改接口
  'alipay.open.public.group.delete', // 用户分组删除接口
  'alipay.open.public.message.group.send', // 分组消息发送接口
  'alipay.open.public.group.create', // 用户分组创建接口
  'alipay.open.public.group.crowd.query', // 人群数量查询
  'alipay.open.public.personalized.extension.batchquery', // 扩展区批量查询接口
  'alipay.open.public.default.extension.create', // 默认扩展区创建接口
  'alipay.open.public.life.label.delete', // 标签删除接口
  'alipay.open.public.life.agentcreate.query', // isv代创建生活号申请状态查询接口
  'alipay.open.public.life.debark.apply', // 下架生活号
  'alipay.open.public.life.aboard.apply', // 上架生活号
  'alipay.open.public.setting.category.query', // 生活号查询行业设置接口
  'alipay.open.public.message.query', // 生活号查询已发送消息接口
  'alipay.open.public.life.msg.recall', // 生活号消息撤回接口
  'alipay.open.public.info.query', // 生活号基础信息查询接口
  'alipay.open.public.life.agent.create', // isv代创建生活号接口
  'alipay.open.public.template.message.industry.modify', // 模板消息行业设置修改接口
  'alipay.open.public.user.follow.query', // 查询用户是否已经关注了生活号
  'alipay.open.public.advert.modify', // 生活号广告位修改接口
  'alipay.open.public.advert.create', // 生活号广告位添加接口
  'alipay.open.public.advert.batchquery', // 生活号广告位查询接口
  'alipay.open.public.advert.delete', // 生活号广告位删除接口
  'alipay.fund.studentloan.repay.query', // 国开行助学贷款还款计划查询接口
  'alipay.open.public.topic.create', // 营销位添加接口
  'alipay.open.public.topic.modify', // 营销位修改接口
  'alipay.open.public.topic.delete', // 营销位删除接口
  'alipay.open.public.topic.batchquery', // 营销位查询接口
  'alipay.open.public.singlearticle.data.batchquery', // 图文分析-按文章查询数据接口
  'alipay.open.public.user.data.batchquery', // 用户分析数据查询接口
  'alipay.open.public.articlesummary.data.batchquery', // 图文分析-按时间查询数据接口
  'alipay.open.public.menu.data.batchquery', // 菜单分析数据查询接口
  'alipay.open.public.info.modify', // 生活号基础信息修改接口
  'alipay.open.public.payee.bind.create', // 添加收款账号接口
  'alipay.open.public.payee.bind.delete', // 解绑收款账号接口
  'alipay.open.public.message.content.create', // 创建图文消息内容接口
  'alipay.open.public.message.content.modify', // 更新图文消息内容接口
  'alipay.ebpp.pdeduct.sign.validate', // 缴费直连代扣签约前置校验
  'alipay.open.public.message.single.send', // 单发模板消息
  'alipay.open.public.template.message.add', // 组合消息模板领取接口
  'alipay.open.public.message.preview.send', // 预览消息发送接口
  'alipay.open.public.contact.follow.batchquery', // 查询服务窗联系人关注列表
  'alipay.open.public.personalized.advert.create', // 生活号个性化广告位添加接口

  // 芝麻信用 api https://opendocs.alipay.com/apis/api_8/zhima.merchant.order.rent.modify
  'zhima.merchant.order.rent.modify', // 信用借还订单修改接口
  'zhima.merchant.borrow.entity.upload', // 信用借还借用实体数据上传接口
  'zhima.merchant.order.rent.cancel', // 信用借还订单撤销
  'zhima.merchant.order.rent.complete', // 信用借还订单完结
  'zhima.merchant.order.rent.query', // 信用借还订单查询
  'zhima.merchant.data.upload.initialize', // 芝麻数据传入初始化
  'zhima.merchant.single.data.upload', // 单条数据传入
  'zhima.merchant.closeloop.data.upload', // 批量数据传入
  'zhima.merchant.order.rent.create', // 信用借还订单创建(页面)
  'zhima.data.batch.feedback', // 批量数据反馈服务
  'zhima.data.feedbackurl.query', // 获取数据反馈模板
  'zhima.auth.info.authquery', // 授权查询
  'zhima.customer.ep.certification.initialize', // 企业认证初始化
  'zhima.customer.ep.certification.certify', // 企业认证引导(页面接口)
  'zhima.customer.ep.certification.query', // 企业认证查询服务
  'zhima.customer.contract.initialize', // 芝麻可信电子合约初始化
  'zhima.credit.ep.scene.rating.query', // 芝麻企业信用评估订单查询
  'zhima.credit.ep.scene.rating.initialize', // 芝麻企业信用信用评估初始化
  'zhima.credit.ep.scene.fulfillment.sync', // 信用服务履约同步
  'zhima.credit.ep.scene.agreement.use', // 加入信用服务
  'zhima.credit.ep.scene.rating.apply', // 芝麻企业信用信用评估申请（页面接口）
  'zhima.credit.ep.scene.agreement.cancel', // 取消信用服务
  'zhima.credit.ep.scene.fulfillmentlist.sync', // 信用服务履约同步(批量)
  'zhima.merchant.creditservice.detail.create', // 芝麻信用信用服务创建
  'zhima.merchant.creditservice.detail.modify', // 芝麻信用信用服务版本修改
  'zhima.merchant.logo.image.upload', // 信用服务商户logo图片上传
  'zhima.merchant.creditservice.detail.query', // 芝麻信用信用服务详情查询
  'zhima.data.state.data.sync', // 芝麻业务状态数据同步接口
  'zhima.merchant.contract.quick.create', // 芝麻约定快速发约接口
  'zhima.merchant.contract.onoffer.query', // 芝麻约定按发约单号查询合约接口
  'zhima.merchant.contract.offer.modify', // 芝麻约定发约单修改接口
  'zhima.merchant.contract.common.confirm', // 芝麻约定应约接口
  'zhima.merchant.contract.common.query', // 芝麻约定合约查询接口
  'zhima.merchant.contract.common.cancel', // 合约取消接口
  'zhima.merchant.contract.page.query', // 合约信息分页查询
  'zhima.customer.contract.detail.query', // 约定详情查询
  'zhima.customer.behavior.sync', // 芝麻约定行为反馈
  'zhima.credit.pe.zmgo.cumulation.sync', // 芝麻go用户数据回传
  'zhima.customer.contract.accept.create', // 约定应约接口

  // 工具类 api https://opendocs.alipay.com/apis/api_9/alipay.user.info.auth
  'alipay.user.info.auth', // 用户登陆授权
  'alipay.system.oauth.token', // 换取授权访问令牌
  'alipay.open.auth.token.app', // 换取应用授权令牌
  'alipay.open.auth.token.app.query', // 查询某个应用授权AppAuthToken的授权信息
  'alipay.open.app.alipaycert.download', // 应用支付宝公钥证书下载
  'monitor.heartbeat.syn', // 验签接口
  'alipay.open.app.message.topic.subscribe', // 订阅消息主题
  'alipay.open.app.message.subscription.modify', // 变更订阅关系属性
  'alipay.open.app.message.subscription.query', // 查询消息订阅关系
  'alipay.open.app.message.topic.unsubscribe', // 取消消息订阅关系
  'alipay.offline.market.reporterror.create', // 上报线下服务异常
  'koubei.member.data.oauth.query', // 口碑业务授权令牌查询

  // 风险控制 api https://opendocs.alipay.com/apis/api_13/alipay.security.risk.rainscore.query
  'alipay.security.risk.rainscore.query', // “蚁盾”风险评分服务
  'ssdata.dataservice.risk.rainscore.query', // 蚁盾风险评分服务上数版
  'alipay.security.risk.customerrisk.query', // 商户风险服务输出
  'alipay.security.risk.customerrisk.send', // 商户数据同步

  // 服务市场 api https://opendocs.alipay.com/apis/api_14/alipay.open.servicemarket.order.accept
  'alipay.open.servicemarket.order.accept', // 服务商接单操作
  'alipay.open.servicemarket.order.item.complete', // 服务商完成订单内单个明细实施项
  'alipay.open.servicemarket.order.item.confirm', // 服务商代商家确认实施完成
  'alipay.open.servicemarket.commodity.shop.offline', // 门店插件下架操作
  'alipay.open.servicemarket.order.reject', // 服务商拒绝接单
  'alipay.open.servicemarket.order.item.cancel', // 服务订单明细实施项单项取消
  'alipay.open.servicemarket.order.query', // 订购插件订单明细查询
  'alipay.open.servicemarket.commodity.shop.online', // 门店插件上架操作

  // 账务 api https://opendocs.alipay.com/apis/api_15/alipay.data.dataservice.bill.downloadurl.query
  'alipay.data.dataservice.bill.downloadurl.query', // 查询对账单下载地址
  'alipay.data.bill.ereceipt.query', // 查询电子回单状态(incubating)
  'alipay.data.bill.ereceipt.apply', // 申请电子回单(incubating)

  // 生活缴费 api https://opendocs.alipay.com/apis/api_18/alipay.ebpp.bill.get
  'alipay.ebpp.bill.get', // 查询账单
  'alipay.ebpp.bill.add', // 创建账单
  'alipay.ebpp.pdeduct.sign.query', // 直连代扣协议查询接口
  'alipay.ebpp.pdeduct.sign.cancel', // 缴费直连代扣取消签约
  'alipay.ebpp.pdeduct.bill.pay.status', // 缴费直连代扣订单支付状态查询
  'alipay.ebpp.pdeduct.pay', // 公共事业缴费直连代扣扣款支付接口
  'alipay.ebpp.pdeduct.sign.add', // 缴费直连代扣签约

  // 车主服务 api https://opendocs.alipay.com/apis/api_19/alipay.eco.mycar.parking.order.sync
  'alipay.eco.mycar.parking.order.sync', // 订单同步接口
  'alipay.eco.mycar.parking.exitinfo.sync', // 车辆驶出接口
  'alipay.eco.mycar.parking.enterinfo.sync', // 车辆驶入接口
  'alipay.eco.mycar.parking.vehicle.query', // 车牌查询接口
  'alipay.eco.mycar.parking.order.update', // 订单更新接口
  'alipay.eco.mycar.parking.config.query', // ISV系统配置查询接口
  'alipay.eco.mycar.parking.config.set', // 停车ISV系统配置接口
  'alipay.eco.mycar.parking.parkinglotinfo.update', // 修改停车场信息
  'alipay.eco.mycar.parking.parkinglotinfo.query', // 停车场信息查询
  'alipay.eco.mycar.parking.spaceinfo.sync', // 停车场车位信息同步
  'alipay.eco.mycar.parking.chargeinfo.sync', // 停车场价格信息同步
  'alipay.eco.mycar.parking.parkinglotinfo.create', // 录入停车场信息
  'alipay.eco.mycar.parking.order.refund', // 停车代扣退款接口
  'alipay.eco.mycar.parking.order.pay', // 停车缴费代扣接口API
  'alipay.eco.mycar.trade.order.query', // 交易订单查询接口
  'alipay.eco.mycar.parking.agreement.query', // 车牌代扣状态查询API

  // 数据服务 api https://opendocs.alipay.com/apis/api_23/alipay.offline.provider.dish.query
  'alipay.offline.provider.dish.query', // 口碑菜品热度查询
  'koubei.marketing.campaign.crowd.create', // 营销活动人群组规则创建接口
  'koubei.marketing.campaign.crowd.batchquery', // 营销活动人群组规则列表分页查询接口
  'koubei.marketing.campaign.crowd.detail.query', // 营销活动人群组规则详情查询接口
  'koubei.marketing.campaign.crowd.modify', // 营销活动人群组规则修改接口
  'koubei.marketing.campaign.crowd.delete', // 营销活动人群组规则删除接口
  'koubei.marketing.data.indicator.query', // 口碑商户经营数据查询接口
  'koubei.marketing.campaign.tags.query', // 商户会员标签列表查询接口
  'koubei.marketing.campaign.crowd.count', // 营销活动人群组人数统计接口
  'alipay.offline.provider.shopaction.record', // isv 回传的商户操作行为信息调用接口
  'alipay.offline.provider.useraction.record', // isv 回传的用户操作行为信息调用接口
  'ssdata.dataservice.risk.offlinevars.query', // 离线变量查询

  // 教育服务 api https://opendocs.alipay.com/apis/api_34/alipay.eco.edu.kt.billing.query
  'alipay.eco.edu.kt.billing.query', // 缴费账单查询
  'alipay.eco.edu.kt.student.modify', // 学生信息更新
  'alipay.eco.edu.kt.schoolinfo.modify', // 教育缴费学校信息录入接口
  'alipay.eco.edu.kt.billing.modify', // 教育缴费账单状态同步接口
  'alipay.eco.edu.kt.student.query', // 学生信息查询
  'alipay.eco.edu.kt.parent.query', // 查询学生家长状态接口
  'alipay.eco.edu.kt.zftschool.modify', // 教育缴费学校直付通进件接口
  'alipay.eco.edu.kt.zftschool.query', // 教育缴费直付通进件结果查询接口
  'alipay.eco.edu.kt.downloadurl.query', // 教育缴费直付通对账单下载接口
  'alipay.eco.edu.kt.billing.send', // 教育缴费账单发送接口
  'alipay.commerce.educate.authenticate.campuscard.create', // 高校ISV认证信息同步
  'alipay.commerce.educate.tuitioncode.pagedata.send', // 学费码支付页面数据录入
  'alipay.commerce.educate.tuitioncode.orderdetail.query', // 学费码账单详情查询接口
  'alipay.commerce.educate.tuitioncode.apply.send', // 学费码申请
  'alipay.commerce.educate.facepay.apply', // 人脸开通支付申请
  'alipay.commerce.educate.facepay.close', // 人脸关闭支付申请
  'alipay.commerce.educate.tuitioncode.orders.query', // 学费码订单查询

  // 卡券 api https://opendocs.alipay.com/apis/api_24/alipay.pass.instance.update
  'alipay.pass.instance.update', // 卡券实例更新接口
  'koubei.marketing.tool.points.update', // 更新卡集点
  'alipay.pass.template.add', // 卡券模板创建接口
  'alipay.pass.template.update', // 卡券模板更新接口
  'koubei.marketing.tool.prizesend.auth', // 发券授权
  'koubei.marketing.tool.points.query', // 集点查询
  'alipay.pass.instance.add', // 卡券实例发放接口
  'alipay.user.pass.instancebatch.add', // 卡券实例批量发放接口

  // 广告 api https://opendocs.alipay.com/apis/api_25/alipay.marketing.cdp.advertise.operate
  'alipay.marketing.cdp.advertise.operate', // 操作广告接口
  'alipay.marketing.cdp.advertise.modify', // 修改广告接口
  'alipay.marketing.cdp.advertise.query', // 查询广告接口
  'alipay.marketing.cdp.advertise.create', // 创建广告接口
  'alipay.data.dataservice.ad.online', // 广告启用API
  'alipay.data.dataservice.ad.offline', // 广告暂停API
  'alipay.data.dataservice.ad.userbalance.offline', // 投放账户余额下线
  'alipay.data.dataservice.ad.userbalance.online', // 投放账户余额上线
  'alipay.data.dataservice.ad.principal.query', // 查询商家信息
  'alipay.data.dataservice.ad.principal.createormodify', // 新增/修改商家
  'alipay.data.dataservice.ad.creative.query', // 查询创意详情
  'alipay.data.dataservice.ad.creative.batchquery', // 查询创意列表
  'alipay.data.dataservice.ad.plan.query', // 查询计划
  'alipay.data.dataservice.ad.group.query', // 查询单元
  'alipay.data.dataservice.ad.group.createormodify', // 创建/修改单元
  'alipay.data.dataservice.ad.plan.createormodify', // 创建/修改计划
  'alipay.data.dataservice.ad.creative.createormodify', // 新增或修改创意
  'alipay.data.dataservice.ad.user.create', // 投放账户开户
  'alipay.data.dataservice.ad.principal.consult', // 二方商家获取签约地址
  'alipay.data.dataservice.ad.promotepage.query', // 查询留资页列表
  'alipay.data.dataservice.ad.promotepagestatistic.query', // 查询留资页统计信息
  'alipay.data.dataservice.ad.principal.checkavailable', // 查询商家签约状态
  'alipay.data.dataservice.ad.principaldmp.set', // 商户人群设置
  'alipay.data.dataservice.ad.principaldmp.sync', // 商户人群同步

  // 资金 api https://opendocs.alipay.com/apis/api_28/alipay.fund.trans.uni.transfer
  'alipay.fund.trans.uni.transfer', // 单笔转账接口
  'alipay.fund.trans.order.query', // 查询转账订单接口
  'alipay.fund.account.query', // 支付宝资金账户资产查询接口
  'alipay.fund.trans.common.query', // 转账业务单据查询接口
  'alipay.fund.trans.refund', // 资金退回接口
  // 'alipay.fund.auth.order.freeze', // 资金授权冻结接口
  'alipay.fund.auth.order.voucher.create', // 资金授权发码接口
  'alipay.fund.auth.order.app.freeze', // 线上资金授权冻结接口
  'alipay.fund.auth.order.unfreeze', // 资金授权解冻接口
  'alipay.fund.auth.operation.detail.query', // 资金授权操作查询接口
  'alipay.fund.auth.operation.cancel', // 资金授权撤销接口
  'alipay.fund.batch.create', // 批次下单接口
  'alipay.fund.batch.close', // 批量转账关单接口
  'alipay.fund.batch.detail.query', // 批量转账明细查询接口
  'alipay.fund.trans.app.pay', // 现金红包无线支付接口

  // 地铁购票 api https://opendocs.alipay.com/apis/api_32/alipay.commerce.cityfacilitator.voucher.refund
  'alipay.commerce.cityfacilitator.voucher.refund', // 地铁购票发码退款
  'alipay.commerce.cityfacilitator.voucher.batchquery', // 地铁购票订单批量查询
  'alipay.commerce.cityfacilitator.station.query', // 地铁购票站点数据查询
  'alipay.commerce.cityfacilitator.voucher.generate', // 地铁购票核销码发码

  // 电子发票 api https://opendocs.alipay.com/apis/api_36/alipay.ebpp.invoice.title.list.get
  'alipay.ebpp.invoice.title.list.get', // 获取指定用户所有的有效抬头列表
  'alipay.ebpp.invoice.info.send', // 发票信息回传接口（新版）
  'alipay.ebpp.invoice.title.dynamic.get', // 根据动态码查询发票抬头
  'alipay.ebpp.invoice.apply.result.sync', // ISV向支付宝同步发票申请结果
  'alipay.ebpp.invoice.auth.unsign', // 发票授权关系解约
  'alipay.ebpp.invoice.sync.simple.send', // 简单模式发票回传接口
  'alipay.ebpp.invoice.merchantlist.enter.apply', // 商户批量入驻申请接口
  'alipay.ebpp.invoice.merchant.enterstatus.query', // 商户入驻流程状态查询
  'alipay.ebpp.invoice.file.output.query', // 获取电子发票原文件
  'alipay.ebpp.invoice.detail.output.query', // 获取发票详细信息
  'alipay.ebpp.invoice.taxno.batchquery', // 获取指定企业的发票要素列表
  'alipay.ebpp.invoice.list.expense.sync', // 报销状态批量同步开放接口
  'alipay.ebpp.invoice.expense.progress.sync', // 发票报销处理进度同步
  'alipay.commerce.iot.receipt.send', // 电子小票信息发送接口
  'alipay.ebpp.invoice.sycn', // 发票信息同步至支付宝
  'alipay.ebpp.invoice.einvpackage.query', // 查询用户发票包的明细信息
  'alipay.ebpp.invoice.isvtoken.reim.apply', // 获取报销授权令牌
  'alipay.ebpp.invoice.applystatus.query', // 根据外部订单号查询开票状态

  // 理财 api https://opendocs.alipay.com/apis/api_38/mybank.finance.yulibao.capital.ransom
  'mybank.finance.yulibao.capital.ransom', // 余利宝赎回
  'mybank.finance.yulibao.account.query', // 余利宝账户和收益查询
  'mybank.finance.yulibao.trans.history.query', // 余利宝历史交易查询
  'mybank.finance.yulibao.capital.purchase', // 余利宝申购
  'mybank.finance.yulibao.price.query', // 查询余利宝行情信息（七日年化收益率、万份收益金额）

  // 开放生态 api https://opendocs.alipay.com/apis/api_35/koubei.craftsman.data.provider.modify
  'koubei.craftsman.data.provider.modify', // 修改手艺人信息接口
  'koubei.craftsman.data.provider.batchquery', // 批量查询手艺人信息接口
  'koubei.craftsman.data.work.create', // 创建手艺人作品接口
  'koubei.craftsman.data.work.batchquery', // 批量查询手艺人作品接口
  'koubei.craftsman.data.work.delete', // 删除手艺人作品信息接口
  'koubei.craftsman.data.work.modify', // 修改手艺人作品接口
  'koubei.craftsman.data.provider.create', // 创建手艺人接口
  'alipay.open.operation.bizfee.activity.apply', // 优惠活动申请
  'alipay.open.auth.app.aes.set', // 授权应用aes密钥设置
  'alipay.open.auth.app.aes.get', // 授权应用aes密钥查询
  'mybank.credit.user.open.certify.certify', // 用户身份认证开始认证
  'mybank.credit.user.system.oauth.query', // 授权码换取授权令牌
  'mybank.credit.user.certify.open.query', // 商户身份认证记录查询
  'mybank.credit.user.info.share.query', // 授权令牌换取用户授权身份信息
  'mybank.credit.user.open.certify.initialize', // 用户身份认证初始化
  'alipay.open.app.api.field.query', // 用户信息申请记录查询
  'alipay.open.sp.blueseaactivity.modify', // 服务商返佣活动申请单修改
  'alipay.open.sp.blueseaactivity.create', // 服务商返佣活动报名申请
  'alipay.open.sp.blueseaactivity.query', // 服务商返佣活动申请单详情查询
  'alipay.open.sp.image.upload', // 图片上传接口
  'alipay.open.sp.operation.apply', // 向商户发起代运营操作
  'alipay.open.sp.operation.qrcode.query', // 查询代运营授权或者账号绑定二维码
  'alipay.open.sp.operation.result.query', // 查询服务商代运营操作结果
  'alipay.open.app.api.query', // 查询应用可申请的接口出参敏感字段列表
  'alipay.open.app.api.scene.query', // 查询接口字段使用场景
  'alipay.open.app.api.field.apply', // 申请获取接口用户敏感信息字段

  // 服务商消息 api https://opendocs.alipay.com/apis/01ebii
  'alipay.open.sp.blueseaactivity.changed', // 服务商返佣活动申请单结果通知

  // 小程序 api https://opendocs.alipay.com/mini/api/vzt2xm

  // 历史 api https://opendocs.alipay.com/apis/api_33/alipay.offline.market.shop.public.unbind
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

  // 智能服务 api https://opendocs.alipay.com/apis/01dmgf
  'alipay.iservice.ccm.service.close', // 关闭租户开通的isv服务接口
  'alipay.iservice.ccm.isv.initialize', // ccm isv注册接口
  'alipay.iservice.ccm.service.initialize', // isv服务初始化接口
  'alipay.iservice.ccm.service.buy', // 租户开通isv服务接口
  'alipay.iservice.ccm.sw.knowledge.modify', // 知识库问答管理
  'alipay.iservice.ccm.agent.schedulelog.query', // 查询客服状态变更流水日志
  'alipay.iservice.itask.merchant.record.sync', // 三方商户对接智能助理
  'alipay.iservice.ccm.function.query', // 列出所有的功能点
  'alipay.iservice.ccm.agent.create', // 新增客服接口
  'alipay.iservice.ccm.agent.get', // 查询客服详情
  'alipay.iservice.ccm.agent.delete', // 删除客服接口
  'alipay.iservice.ccm.agent.modify', // 更新客服接口
  'alipay.iservice.ccm.instance.query', // 列出所有的租户实例（数据权限）
  'alipay.iservice.ccm.agent.query', // 客服查询接口
  'alipay.iservice.ccm.role.create', // 创建角色
  'alipay.iservice.ccm.role.get', // 获取角色详情
  'alipay.iservice.ccm.instance.get', // 查询单个租户实例（数据权限）
  'alipay.iservice.ccm.role.page.query', // 分页查询角色
  'alipay.iservice.ccm.role.modify', // 更新角色
  'alipay.iservice.ccm.instance.create', // 创建租户实例
  'alipay.iservice.ccm.role.delete', // 删除角色
  'alipay.iservice.ccm.servicerecord.create', // 创建服务记录
  'alipay.iservice.ccm.servicerecord.modify', // 变更服务记录
}
