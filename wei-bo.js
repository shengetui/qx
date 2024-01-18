//test  2024-01-18 17:38:17
 
const version = 'V1.0.10';

if (-1 != $request.url.indexOf("container_timeline")) {
var t = JSON.parse($response.body);
   if (t.items && t.items.length > 0 &&
        t.items[0].items && t.items[0].items.length > 0 &&
        t.items[0].items[0].data && t.items[0].items[0].data.group) {
   
 // 应用新的过滤条件
 t.items[0]。items[0].data.group =      t.items[0].items[0].data.group.filter(item => {
             // 保留以 "sinaweibo://searchall" 开头的
            if (item.scheme && item.scheme.startsWith("sinaweibo://searchall")) {
		    // 保留没有 'icon' 属性的
            if (item.icon && item.icon ==='https://simg.s.weibo.com/moter/flags/entertainment_0_small.png') {
                return false;
            }
                return true;
            }else{
				 // 保留 title_sub 以 "更多热搜" 开头的
            if (item.title_sub && item.title_sub.startsWith("更多热搜")) {
                return true;
            }       
			}
            // 其余情况都删除
            return false;
        });

    
        $done({
            body: JSON.stringify(t)
        });
    }
}  else $done($response);
