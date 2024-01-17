// 2023-12-28 00:10
const url = $request.url;

if (!$response.body) {
  $done({});
}

let obj = JSON.parse($response.body);
 
let cc = {
    "rows": [{
      "name":"shen"}
    ],
    "total": "2"
}
$done({ body: JSON.stringify(cc) });

function fixPos(arr) {
  for (let i = 0; i < arr.length; i++) {
    arr[i].pos = i + 1;
  }
}
