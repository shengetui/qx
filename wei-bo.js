//test  2024-01-18 17:38:17
 
const version = 'V1.0.10';

if (-1 != $request.url.indexOf("container_timeline")) {

   if (t.items && t.items.length > 0 &&
        t.items[0].items && t.items[0].items.length > 0 &&
        t.items[0].items[0].data && t.items[0].items[0].data.group) {
      t.data = t.data.filter(t => !("sponsorCard" == t.entityTemplate || -1 != t.title.indexOf("精选配件") ||"imageSquareScrollCard" == t.entityTemplate ))
        // 应用新的过滤条件
        t.items[0].items[0].data.group = t.items[0].items[0].data.group.filter(item => !item.hasOwnProperty('promotion') || !item.hasOwnProperty('icon') );
        $done({
            body: JSON.stringify(t)
        });
    }
}  else $done($response);
