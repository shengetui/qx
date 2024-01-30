

console.log( 'test________________________');

console.log( $request);
let body = $request;
//格式化响应数据
JSON.stringify(body);
let obj = JSON.stringify(body);
console.log( obj);
$notify('哔哩哔哩漫画抢券', '', $request);



$done()
