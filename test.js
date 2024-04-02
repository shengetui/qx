

console.log( 'test________________________');


let body =$response.body;
//格式化响应数据
let obj = JSON.stringify(body);
console.log( obj);
$notify('哔哩哔哩漫画抢券', '', obj);
$prefs.setValueForKey("aacc", "aa");
console.log($prefs.valueForKey("aa"))

$done()
