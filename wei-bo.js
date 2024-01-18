//test  2024-01-18 17:38:17
 
const version = 'V1.0.10';

if (-1 != $request.url.indexOf("container_timeline")) {

   if (t.items && t.items.length > 0 &&
        t.items[0].items && t.items[0].items.length > 0 &&
        t.items[0].items[0].data && t.items[0].items[0].data.group) {
        // 应用新的过滤条件
        t.items[0].items[0].data.group = t.items[0].items[0].data.group.filter(item => !item.hasOwnProperty('promotion'));
        $done({
            body: JSON.stringify(t)
        });
    }
}  else $done($response);
