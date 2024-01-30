

console.log( 'test________________________');

console.log( $request);
let body = $request;
let obj = JSON.parse(body.substring(0, body.length - 2));
console.log( obj);
$notify('哔哩哔哩漫画抢券', '', $request);



$done()
