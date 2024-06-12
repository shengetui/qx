// 2024-06-11 20:58 大麦

const url = $request.url;
if (!$response.body) $done({});
let body = $response.body;

console.log(body)
try {

  body.data.result = JSON.parse(body.data.result )
  console.log(body)
  for (let item of  body.data.result.perform.skuList) {
    item.status='1'
    item.frontEndstatus='1'
    item.salableQuantity='10'
    item.skuSalable='true'
    item.buyPermission='true'
    item.clickable='true'
  }
  body.data.result = JSON.stringify(body.data.result )


  $done({ body: JSON.stringify(body) });
}catch (e) {
  $done({ body: JSON.stringify(body) });
}