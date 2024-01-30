

console.log( 'test________________________');

console.log( $request);
let body = $request;
let obj = JSON.parse(body );
console.log( obj);
$notify('哔哩哔哩漫画抢券', '', $request);



$done()
