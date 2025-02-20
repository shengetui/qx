// 2024-06-11 20:58 大麦
const url = $request.url;
if (!$response.body) $done({});
let body = $response.body;

try {
console.log(body)
  body = JSON.parse(body )
  body.data.result = JSON.parse(body.data.result )

  for (let item of  body.data.result.perform.skuList) {
    item.status='1'
    item.frontEndstatus='1'
    item.mq='4'
    item.salableQuantity='10'
    item.skuSalable='true'
    item.buyPermission='true'
    item.priceName='99'

    item.clickable='true'
    item.tags=[]

    item.mktPromotionTips=""
    delete item.tips
    delete item.otherTag
    delete item
  }
  // body.data.result = JSON.stringify(body.data.result )
  body.data.result = ""
  $notify('大麦', '', `---------正常返回-------------`+JSON.stringify(body));


  $done({ body:body });
}catch (e) {

  $notify('大麦', '', `---------有错误-------------`+e);

  console.log('---------有错误-------------')
  $done({ body: body });
}

