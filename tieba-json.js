const url = $request.url;
const method = $request.method;
const postMethod = "POST";
const notifyTitle = "贴吧json脚本错误";
console.log(`贴吧json-2023.06.12.2`);

let body = JSON.parse($response.body);
postData(body,url)

// 直接全局搜索 @Modify(
if (url.includes("tiebaads/commonbatch") && method === postMethod) {
    // 看图模式下的广告
    let adCmd = getUrlParamValue(url, "adcmd");
    if (!adCmd) {
        console.log(`url:${url}`);
        $notification.post(notifyTitle, "贴吧-tiebaads/commonbatch", "adCmd参数不存在");
    } else {
        console.log(`commonbatch:${adCmd}`);
        if (body.error_code === 0) {
            if (!body.res.ad?.length) {
                console.log('ad字段为空');
            } else {
                body.res.ad = [];
                // 即使ad有内容 也不一定显示广告
                // 因为如果服务器下发的数据少了一些字段同样是无广告的
                console.log('成功');
            }
        } else {
            console.log('error_code不为0:' + body.error_code);
        }
    }
} else if (url.includes('c/f/pb/picpage')) {
    console.log(`picpage`);
    const liveLength = body.recom_live_list?.length;
    if (liveLength) {
        console.log(`去除直播:${liveLength}`);
        body.recom_live_list = [];
    }
} else if (url.includes('c/s/sync')) {
    // get post(贴吧使用了post)均可访问
    console.log('贴吧-sync');
    if ('floating_icon' in body) {
        console.log('右下角悬浮icon');
        if (body.floating_icon) {
            if (body.floating_icon.homepage?.icon_url) {
                console.log('homepage悬浮去除');
            } else {
                console.log('无需去除homepage悬浮');
            }
            if (body.floating_icon.pb?.icon_url) {
                console.log('pb悬浮去除');
            } else {
                console.log('无需去除pb悬浮');
            }
            body.floating_icon = null;
        } else {
            console.log('无需修改floating_icon字段值');
        }
    } else {
        console.log(`body:${$response.body}`);
        $notification.post(notifyTitle, "贴吧-sync", "无floating_icon字段");
    }

    // 回帖栏的广告
    if ('advertisement_config' in body) {
        if (!body.advertisement_config?.advertisement_str) {
            console.log('无需处理advertisement_config');
        } else {
            console.log(`advertisement_str:${body.advertisement_config.advertisement_str}`);
            body.advertisement_config = null;
        }
    } else {
        console.log(`body:${$response.body}`);
        $notification.post(notifyTitle, "贴吧-sync", "无advertisement_config字段");
    }

    if ('config' in body) {
        if (body.config?.switch) {
            for (const item of body.config.switch) {
                if (['platform_csj_init', 'platform_ks_init', 'platform_gdt_init'].includes(item.name)) {
                    item.type = '0';
                    // 禁止初始化穿山甲/广点通/快手
                    console.log(`禁止初始化${item.name}`);
                }
            }
        }
    } else {
        console.log(`body:${$response.body}`);
        $notification.post(notifyTitle, "贴吧-sync", "无config字段");
    }

    if ('screen_fill_data_result' in body) {
        if (body.screen_fill_data_result.screen_fill_advertisement_bear_switch === "1") {
            body.screen_fill_data_result.screen_fill_advertisement_bear_switch = '0';
            console.log('开屏不展示小熊广告');
        } else {
            console.log('无需修改screen_fill_advertisement_bear_switch');
        }
        if (body.screen_fill_data_result.screen_fill_advertisement_plj_cpc_switch === "1") {
            body.screen_fill_data_result.screen_fill_advertisement_plj_cpc_switch = '0';
            console.log('开屏不展示序章CPC');
        } else {
            console.log('无需修改screen_fill_advertisement_plj_cpc_switch');
        }
        if (body.screen_fill_data_result.screen_fill_advertisement_plj_switch === "1") {
            body.screen_fill_data_result.screen_fill_advertisement_plj_switch = '0';
            console.log('开屏不展示序章');
        } else {
            console.log('无需修改screen_fill_advertisement_plj_switch');
        }
    } else {
        console.log(`body:${$response.body}`);
        $notification.post(notifyTitle, "贴吧-sync", "无screen_fill_data_result字段");
    }

    if ('ad_stlog_switch' in body) {
        if (body.ad_stlog_switch === '1') {
            body.ad_stlog_switch = '0';
            console.log('修改ad_stlog_switch');
        } else {
            console.log('无需修改ad_stlog_switch');
        }
    } else {
        console.log(`body:${$response.body}`);
        $notification.post(notifyTitle, "贴吧-sync", "无ad_stlog_switch字段");
    }

    if ('lcs_strategy' in body) {
        // 控制长连接开关 开启时帖子会走socket
        if (body.lcs_strategy.conn_conf === '0') {
            // 关闭
            body.lcs_strategy.conn_conf = '1';
            console.log('修改conn_conf');
        } else {
            console.log('无需修改conn_conf');
        }
    } else {
        console.log(`body:${$response.body}`);
        $notification.post(notifyTitle, "贴吧-sync", "无lcs_strategy字段");
    }
} else if (url.includes("c/f/frs/page")) {
    console.log('贴吧-FrsPage');
    if (body.live_fuse_forum?.length) {
        body.live_fuse_forum = [];
        console.log(`去除吧头直播`);
    } else {
        console.log(`无需处理吧头直播`);
    }

    if (body.activityhead?.is_ad) {
        body.activityhead = {};
        console.log('去除吧内header图片广告');
    } else {
        console.log('无需处理activityhead');
    }
    body.thread_list = removeLive(body.thread_list);
    removeGoodsInfo(body.forum?.banner_list?.app);
} else if (url.includes("c/f/frs/threadlist")) {
    console.log('贴吧-threadlist');
    removeGoodsInfo(body.banner_list?.app);
} else if (url.includes("c/f/pb/page")) {
    console.log('贴吧-PbPage');
    if (body.recom_ala_info?.live_id) {
        console.log('帖子详情页推荐的直播广告去除');
        body.recom_ala_info = null;
    } else {
        console.log('帖子详情页无直播广告');
    }

    if (body.post_list?.length) {
        for (const post of body.post_list) {
            if (post.outer_item) {
                console.log('outer_item去除');
                post.outer_item = null;
            }
        }
    } else {
        console.log('无需处理postList中的outer_item');
    }
    removeGoodsInfo(body.banner_list?.app);
    const bannerGoodsInfoLength = body.banner_list?.pb_banner_ad?.goods_info?.length;
    if (bannerGoodsInfoLength) {
        console.log(`去除pb_banner_ad的goods_info:${bannerGoodsInfoLength}`)
        body.banner_list.pb_banner_ad.goods_info = []
    }
} else if (url.includes("c/f/excellent/personalized")) {
    console.log('贴吧-personalized');
    removeGoodsInfo(body.banner_list?.app);
    body.thread_list = removeLive(body.thread_list);
    if(body.live_answer){
        console.log('去除推荐页上方的banner广告');
        body.live_answer = null;
    } else {
        console.log('推荐页无banner广告');
    }
} else if (url.includes("c/f/frs/generalTabList")) {
    console.log('贴吧-generalTabList');
    removeGoodsInfo(body.app_list);
} else {
    $notification.post(notifyTitle, "路径/请求方法匹配错误:", method + "," + url);
}

body = JSON.stringify(body);

$done({
    body
});


function getUrlParamValue(url, queryName) {
    return Object.fromEntries(url.substring(url.indexOf("?") + 1)
        .split("&")
        .map(pair => pair.split("="))
    )[queryName];
}

function removeGoodsInfo(app) {
    if (app?.length) {
        let goodsInfoSize = 0;
        app.forEach(item => {
            if (item.goods_info?.length) {
                goodsInfoSize++;
                item.goods_info = [];
            }
        })
        if (goodsInfoSize) {
            console.log(`去除goods_info:${goodsInfoSize}`);
        } else {
            console.log(`app内无goods_info`)
        }

    } else {
        console.log(`app为空,无需处理`);
    }
}

function removeLive(threadList) {
    let newThreadList = threadList;
    const beforeLength = threadList?.length;
    if (beforeLength) {
        newThreadList = threadList.filter(item => {
            if (item.ala_info) {
                console.log('去除推荐的直播帖子');
                return false;
            }  
            if(item.videoInfo){
                console.log('去除推荐的视频');
                return false;
            }
            if (item?.forumInfo?.isLiked=0 ) {
			 
                item.forumInfo.isLiked = 1
                console.log("isLiked设为为1")
                }
            return true;
        });
        if (beforeLength === newThreadList.length) {
            console.log("无推荐的直播帖子");
        }
    } else {
        console.log('无需处理threadList');
    }
    return newThreadList;
}




// prettier-ignore
function Env(t, e) {
    class s {
        constructor(t) {
            this.env = t
        }

        send(t, e = "GET") {
            t = "string" == typeof t ? {url: t} : t;
            let s = this.get;
            return "POST" === e && (s = this.post), new Promise((e, i) => {
                s.call(this, t, (t, s, r) => {
                    t ? i(t) : e(s)
                })
            })
        }

        get(t) {
            return this.send.call(this.env, t)
        }

        post(t) {
            return this.send.call(this.env, t, "POST")
        }
    }

    return new class {
        constructor(t, e) {
            this.name = t, this.http = new s(this), this.data = null, this.dataFile = "box.dat", this.logs = [], this.isMute = !1, this.isNeedRewrite = !1, this.logSeparator = "\n", this.encoding = "utf-8", this.startTime = (new Date).getTime(), Object.assign(this, e), this.log("", `\ud83d\udd14${this.name}, \u5f00\u59cb!`)
        }

        isNode() {
            return "undefined" != typeof module && !!module.exports
        }

        isQuanX() {
            return "undefined" != typeof $task
        }

        isSurge() {
            return "undefined" != typeof $httpClient && "undefined" == typeof $loon
        }

        isLoon() {
            return "undefined" != typeof $loon
        }

        isShadowrocket() {
            return "undefined" != typeof $rocket
        }

        isStash() {
            return "undefined" != typeof $environment && $environment["stash-version"]
        }

        toObj(t, e = null) {
            try {
                return JSON.parse(t)
            } catch {
                return e
            }
        }

        toStr(t, e = null) {
            try {
                return JSON.stringify(t)
            } catch {
                return e
            }
        }

        getjson(t, e) {
            let s = e;
            const i = this.getdata(t);
            if (i) try {
                s = JSON.parse(this.getdata(t))
            } catch {
            }
            return s
        }

        setjson(t, e) {
            try {
                return this.setdata(JSON.stringify(t), e)
            } catch {
                return !1
            }
        }

        getScript(t) {
            return new Promise(e => {
                this.get({url: t}, (t, s, i) => e(i))
            })
        }

        runScript(t, e) {
            return new Promise(s => {
                let i = this.getdata("@chavy_boxjs_userCfgs.httpapi");
                i = i ? i.replace(/\n/g, "").trim() : i;
                let r = this.getdata("@chavy_boxjs_userCfgs.httpapi_timeout");
                r = r ? 1 * r : 20, r = e && e.timeout ? e.timeout : r;
                const [o, a] = i.split("@"), n = {
                    url: `http://${a}/v1/scripting/evaluate`,
                    body: {script_text: t, mock_type: "cron", timeout: r},
                    headers: {"X-Key": o, Accept: "*/*"}
                };
                this.post(n, (t, e, i) => s(i))
            }).catch(t => this.logErr(t))
        }

        loaddata() {
            if (!this.isNode()) return {};
            {
                this.fs = this.fs ? this.fs : require("fs"), this.path = this.path ? this.path : require("path");
                const t = this.path.resolve(this.dataFile), e = this.path.resolve(process.cwd(), this.dataFile),
                    s = this.fs.existsSync(t), i = !s && this.fs.existsSync(e);
                if (!s && !i) return {};
                {
                    const i = s ? t : e;
                    try {
                        return JSON.parse(this.fs.readFileSync(i))
                    } catch (t) {
                        return {}
                    }
                }
            }
        }

        writedata() {
            if (this.isNode()) {
                this.fs = this.fs ? this.fs : require("fs"), this.path = this.path ? this.path : require("path");
                const t = this.path.resolve(this.dataFile), e = this.path.resolve(process.cwd(), this.dataFile),
                    s = this.fs.existsSync(t), i = !s && this.fs.existsSync(e), r = JSON.stringify(this.data);
                s ? this.fs.writeFileSync(t, r) : i ? this.fs.writeFileSync(e, r) : this.fs.writeFileSync(t, r)
            }
        }

        lodash_get(t, e, s) {
            const i = e.replace(/\[(\d+)\]/g, ".$1").split(".");
            let r = t;
            for (const t of i) if (r = Object(r)[t], void 0 === r) return s;
            return r
        }

        lodash_set(t, e, s) {
            return Object(t) !== t ? t : (Array.isArray(e) || (e = e.toString().match(/[^.[\]]+/g) || []), e.slice(0, -1).reduce((t, s, i) => Object(t[s]) === t[s] ? t[s] : t[s] = Math.abs(e[i + 1]) >> 0 == +e[i + 1] ? [] : {}, t)[e[e.length - 1]] = s, t)
        }

        getdata(t) {
            let e = this.getval(t);
            if (/^@/.test(t)) {
                const [, s, i] = /^@(.*?)\.(.*?)$/.exec(t), r = s ? this.getval(s) : "";
                if (r) try {
                    const t = JSON.parse(r);
                    e = t ? this.lodash_get(t, i, "") : e
                } catch (t) {
                    e = ""
                }
            }
            return e
        }

        setdata(t, e) {
            let s = !1;
            if (/^@/.test(e)) {
                const [, i, r] = /^@(.*?)\.(.*?)$/.exec(e), o = this.getval(i),
                    a = i ? "null" === o ? null : o || "{}" : "{}";
                try {
                    const e = JSON.parse(a);
                    this.lodash_set(e, r, t), s = this.setval(JSON.stringify(e), i)
                } catch (e) {
                    const o = {};
                    this.lodash_set(o, r, t), s = this.setval(JSON.stringify(o), i)
                }
            } else s = this.setval(t, e);
            return s
        }

        getval(t) {
            return this.isSurge() || this.isLoon() ? $persistentStore.read(t) : this.isQuanX() ? $prefs.valueForKey(t) : this.isNode() ? (this.data = this.loaddata(), this.data[t]) : this.data && this.data[t] || null
        }

        setval(t, e) {
            return this.isSurge() || this.isLoon() ? $persistentStore.write(t, e) : this.isQuanX() ? $prefs.setValueForKey(t, e) : this.isNode() ? (this.data = this.loaddata(), this.data[e] = t, this.writedata(), !0) : this.data && this.data[e] || null
        }

        initGotEnv(t) {
            this.got = this.got ? this.got : require("got"), this.cktough = this.cktough ? this.cktough : require("tough-cookie"), this.ckjar = this.ckjar ? this.ckjar : new this.cktough.CookieJar, t && (t.headers = t.headers ? t.headers : {}, void 0 === t.headers.Cookie && void 0 === t.cookieJar && (t.cookieJar = this.ckjar))
        }

        get(t, e = (() => {
        })) {
            if (t.headers && (delete t.headers["Content-Type"], delete t.headers["Content-Length"]), this.isSurge() || this.isLoon()) this.isSurge() && this.isNeedRewrite && (t.headers = t.headers || {}, Object.assign(t.headers, {"X-Surge-Skip-Scripting": !1})), $httpClient.get(t, (t, s, i) => {
                !t && s && (s.body = i, s.statusCode = s.status ? s.status : s.statusCode, s.status = s.statusCode), e(t, s, i)
            }); else if (this.isQuanX()) this.isNeedRewrite && (t.opts = t.opts || {}, Object.assign(t.opts, {hints: !1})), $task.fetch(t).then(t => {
                const {statusCode: s, statusCode: i, headers: r, body: o} = t;
                e(null, {status: s, statusCode: i, headers: r, body: o}, o)
            }, t => e(t && t.error || "UndefinedError")); else if (this.isNode()) {
                let s = require("iconv-lite");
                this.initGotEnv(t), this.got(t).on("redirect", (t, e) => {
                    try {
                        if (t.headers["set-cookie"]) {
                            const s = t.headers["set-cookie"].map(this.cktough.Cookie.parse).toString();
                            s && this.ckjar.setCookieSync(s, null), e.cookieJar = this.ckjar
                        }
                    } catch (t) {
                        this.logErr(t)
                    }
                }).then(t => {
                    const {statusCode: i, statusCode: r, headers: o, rawBody: a} = t, n = s.decode(a, this.encoding);
                    e(null, {status: i, statusCode: r, headers: o, rawBody: a, body: n}, n)
                }, t => {
                    const {message: i, response: r} = t;
                    e(i, r, r && s.decode(r.rawBody, this.encoding))
                })
            }
        }

        post(t, e = (() => {
        })) {
            const s = t.method ? t.method.toLocaleLowerCase() : "post";
            if (t.body && t.headers && !t.headers["Content-Type"] && (t.headers["Content-Type"] = "application/x-www-form-urlencoded"), t.headers && delete t.headers["Content-Length"], this.isSurge() || this.isLoon()) this.isSurge() && this.isNeedRewrite && (t.headers = t.headers || {}, Object.assign(t.headers, {"X-Surge-Skip-Scripting": !1})), $httpClient[s](t, (t, s, i) => {
                !t && s && (s.body = i, s.statusCode = s.status ? s.status : s.statusCode, s.status = s.statusCode), e(t, s, i)
            }); else if (this.isQuanX()) t.method = s, this.isNeedRewrite && (t.opts = t.opts || {}, Object.assign(t.opts, {hints: !1})), $task.fetch(t).then(t => {
                const {statusCode: s, statusCode: i, headers: r, body: o} = t;
                e(null, {status: s, statusCode: i, headers: r, body: o}, o)
            }, t => e(t && t.error || "UndefinedError")); else if (this.isNode()) {
                let i = require("iconv-lite");
                this.initGotEnv(t);
                const {url: r, ...o} = t;
                this.got[s](r, o).then(t => {
                    const {statusCode: s, statusCode: r, headers: o, rawBody: a} = t, n = i.decode(a, this.encoding);
                    e(null, {status: s, statusCode: r, headers: o, rawBody: a, body: n}, n)
                }, t => {
                    const {message: s, response: r} = t;
                    e(s, r, r && i.decode(r.rawBody, this.encoding))
                })
            }
        }

        time(t, e = null) {
            const s = e ? new Date(e) : new Date;
            let i = {
                "M+": s.getMonth() + 1,
                "d+": s.getDate(),
                "H+": s.getHours(),
                "m+": s.getMinutes(),
                "s+": s.getSeconds(),
                "q+": Math.floor((s.getMonth() + 3) / 3),
                S: s.getMilliseconds()
            };
            /(y+)/.test(t) && (t = t.replace(RegExp.$1, (s.getFullYear() + "").substr(4 - RegExp.$1.length)));
            for (let e in i) new RegExp("(" + e + ")").test(t) && (t = t.replace(RegExp.$1, 1 == RegExp.$1.length ? i[e] : ("00" + i[e]).substr(("" + i[e]).length)));
            return t
        }

        msg(e = t, s = "", i = "", r) {
            const o = t => {
                if (!t) return t;
                if ("string" == typeof t) return this.isLoon() ? t : this.isQuanX() ? {"open-url": t} : this.isSurge() ? {url: t} : void 0;
                if ("object" == typeof t) {
                    if (this.isLoon()) {
                        let e = t.openUrl || t.url || t["open-url"], s = t.mediaUrl || t["media-url"];
                        return {openUrl: e, mediaUrl: s}
                    }
                    if (this.isQuanX()) {
                        let e = t["open-url"] || t.url || t.openUrl, s = t["media-url"] || t.mediaUrl,
                            i = t["update-pasteboard"] || t.updatePasteboard;
                        return {"open-url": e, "media-url": s, "update-pasteboard": i}
                    }
                    if (this.isSurge()) {
                        let e = t.url || t.openUrl || t["open-url"];
                        return {url: e}
                    }
                }
            };
            if (this.isMute || (this.isSurge() || this.isLoon() ? $notification.post(e, s, i, o(r)) : this.isQuanX() && $notify(e, s, i, o(r))), !this.isMuteLog) {
                let t = ["", "==============\ud83d\udce3\u7cfb\u7edf\u901a\u77e5\ud83d\udce3=============="];
                t.push(e), s && t.push(s), i && t.push(i), console.log(t.join("\n")), this.logs = this.logs.concat(t)
            }
        }

        log(...t) {
            t.length > 0 && (this.logs = [...this.logs, ...t]), console.log(t.join(this.logSeparator))
        }

        logErr(t, e) {
            const s = !this.isSurge() && !this.isQuanX() && !this.isLoon();
            s ? this.log("", `\u2757\ufe0f${this.name}, \u9519\u8bef!`, t.stack) : this.log("", `\u2757\ufe0f${this.name}, \u9519\u8bef!`, t)
        }

        wait(t) {
            return new Promise(e => setTimeout(e, t))
        }

        done(t = {}) {
            const e = (new Date).getTime(), s = (e - this.startTime) / 1e3;
            this.log("", `\ud83d\udd14${this.name}, \u7ed3\u675f! \ud83d\udd5b ${s} \u79d2`), this.log(), this.isSurge() || this.isQuanX() || this.isLoon() ? $done(t) : this.isNode() && process.exit(1)
        }
    }(t, e)
}

function postData (personalizedResIdlObj,url){
    


    let opt = {
        url: `http://192.168.1.123:8812/test/`,
    
        method: "POST",
        headers: {
        
            'Connection': 'keep-alive',
            'Content-Length': '93',
     
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/116.0.0.0 Safari/537.36 MicroMessenger/7.0.20.1781(0x6700143B) NetType/WIFI MiniProgramEnv/Windows WindowsWechat/WMPF WindowsWechat(0x63090923) XWEB/9053',
            'Content-Type': 'application/json',
            'Qm-From': 'wechat',
             
            //不知道啥含义
            'qm-trace-store-id': '49006',
        
            'Qm-From-Type': 'catering',
            'Sec-Fetch-Site': 'cross-site',
            'Sec-Fetch-Mode': 'cors',
            'Sec-Fetch-Dest': 'empty', 
            'Accept-Encoding': 'gzip, deflate, br',
            'Accept-Language': 'zh-CN,zh;q=0.9'
        },
    //body内容 每天定时改。activityId：活动id，keyWords：活动口令，appid：固定id
        body:  `{
    
            "employee":  `+$.toStr(personalizedResIdlObj) +`,
            "url":`+ url +`
        } `
    }
        $.post(opt, async (err, resp, data) => {
            try {
                err && $.log(err);
            } catch (error) {
                $.log(error);
            } finally {
                resolve();
            }
        })
     
}