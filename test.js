const axios = require('axios');
const crypto = require('crypto');

const proxies = {
    http: null,
    https: null,
};

let jieguo = "";
const c = [

    {
        city: "济南市",
        lat: "36.676095",
        lng: "117.134833",
        mobile: "18369933142",
        province: "山东省",
        token: "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJtdCIsImV4cCI6MTcxMzQxODU4MSwidXNlcklkIjoxMDY4MDk0MzI1LCJkZXZpY2VJZCI6IjJGMjA3NUQwLUI2NkMtNDI4Ny1BOTAzLURCRkY2MzU4MzQyQSIsImlhdCI6MTcxMDgyNjU4MX0.6jr9477IAWDMzjU9lXxlR1pIGKsxM60wpeAhLj_dP-I",
        userid: "1068094325",
        reserve_rule: 0,
        item_codes: [
            "10941",
            "10942"
        ]
    }
];

class Encrypt {
    constructor(key, iv) {
        this.key = Buffer.from(key, 'utf-8');
        this.iv = Buffer.from(iv, 'utf-8');
    }

    pkcs7padding(text) {
        const bs = 16;
        const length = text.length;
        const bytesLength = Buffer.from(text, 'utf-8').length;
        const paddingSize = length === bytesLength ? length : bytesLength;
        const padding = bs - (paddingSize % bs);
        const paddingText = String.fromCharCode(padding).repeat(padding);
        this.coding = String.fromCharCode(padding);
        return text + paddingText;
    }

    aesEncrypt(content) {
        const cipher = crypto.createCipheriv('aes-128-cbc', this.key, this.iv);
        const contentPadding = this.pkcs7padding(content);
        const encryptBytes = cipher.update(contentPadding, 'utf-8', 'base64') + cipher.final('base64');
        console.log(encryptBytes);
        return encryptBytes;
    }

    aesDecrypt(content) {
        const decipher = crypto.createDecipheriv('aes-128-cbc', this.key, this.iv);
        const text = decipher.update(content, 'base64', 'utf-8') + decipher.final('utf-8');
        return text.slice(0, -this.coding.length);
    }
}

class IMAOTAI {
    constructor(checkItem) {
        this.jieguo = "";
        this.checkItem = checkItem;
        this.RESERVE_RULE = 0;
        this.mtR = "clips_OlU6TmFRag5rCXwbNAQ/Tz1SKlN8THcecBp/";
        this.ITEM_MAP = {
            "10941": "53%vol 500ml贵州茅台酒（甲辰龙年）",
            "10942": "53%vol 375ml×2贵州茅台酒（甲辰龙年）",
            "10056": "53%vol 500ml茅台1935",
            "2478": "53%vol 500ml贵州茅台酒（珍品）",
        };
        this.ITEM_CODES = ["10941", "10942"];
        this.AES_KEY = "qbhajinldepmucsonaaaccgypwuvcjaa";
        this.AES_IV = "2018534749963515";
        this.encrypt = new Encrypt(this.AES_KEY, this.AES_IV);

        this.mtVersion = "1.3.7";
        this.headers = {};
        this.headerContext = `
MT-Lat: 28.499562
MT-K: 1675213490331
MT-Lng: 102.182324
Host: app.moutai519.com.cn
MT-User-Tag: 0
Accept: */*
MT-Network-Type: WIFI
MT-Token: 1
MT-Info: 028e7f96f6369cafe1d105579c5b9377
MT-Device-ID: 2F2075D0-B66C-4287-A903-DBFF6358342A
MT-Bundle-ID: com.moutai.mall
Accept-Language: en-CN;q=1, zh-Hans-CN;q=0.9
MT-Request-ID: 167560018873318465
MT-APP-Version: 1.3.7
User-Agent: iOS;16.3;Apple;?unrecognized?
MT-R: clips_OlU6TmFRag5rCXwbNAQ/Tz1SKlN8THcecBp/HGhHdw==
Content-Length: 93
Accept-Encoding: gzip, deflate, br
Connection: keep-alive
Content-Type: application/json
userId: 2
`;
    }

    initHeaders(userId = "1", token = "2", lat = "29.83826", lng = "119.74375") {
        this.headerContext.split('\n').forEach(line => {
            const [key, value] = line.split(': ');
            this.headers[key] = value;
        });
        this.headers.userId = userId;
        this.headers['MT-Token'] = token;
        this.headers['MT-Lat'] = lat;
        this.headers['MT-Lng'] = lng;
        this.headers['MT-APP-Version'] = this.mtVersion;
    }

    async getCurrentSessionId() {
        const dayTime = Math.floor(new Date().getTime() / 1000) * 1000;
        const url = `https://static.moutai519.com.cn/mt-backend/xhr/front/mall/index/session/get/${dayTime}`;
        const response = await axios.get(url, { proxies });
        if (response.status !== 200) {
            console.log(`get_current_session_id : params : ${dayTime}, response code : ${response.status}, response body : ${response.data}`);
        }
        this.headers['current_session_id'] = response.data.data.sessionId.toString();
    }

    async getMap(lat = "28.499562", lng = "102.182324") {
        const pCMap = {};
        const url = "https://static.moutai519.com.cn/mt-backend/xhr/front/mall/resource/get";
        const headers = {
            "X-Requested-With": "XMLHttpRequest",
            "User-Agent": "Mozilla/5.0 (iPhone; CPU iPhone OS 15_0_1 like Mac OS X)",
            "Referer": "https://h5.moutai519.com.cn/gux/game/main?appConfig=2_1_2",
            "Client-User-Agent": "iOS;16.0.1;Apple;iPhone 14 ProMax",
            "MT-R": "clips_OlU6TmFRag5rCXwbNAQ/Tz1SKlN8THcecBp/HGhHdw==",
            "Origin": "https://h5.moutai519.com.cn",
            "MT-APP-Version": this.mtVersion,
            "MT-Request-ID": `${Math.floor(new Date().getTime() / 1000)}${Math.floor(Math.random() * 999999999)}${Math.floor(new Date().getTime() / 1000)}`,
            "Accept-Language": "zh-CN,zh-Hans;q=1",
            "MT-Device-ID": `${Math.floor(new Date().getTime() / 1000)}${Math.floor(Math.random() * 999999999)}${Math.floor(new Date().getTime() / 1000)}`,
            "Accept": "application/json, text/javascript, */*; q=0.01",
            "mt-lng": lng,
            "mt-lat": lat,
        };
        const response = await axios.get(url, { headers, proxies });
        const mtshops = response.data.data.mtshops_pc;
        const urls = mtshops.url;
        const r = await axios.get(urls, { proxies });
        for (const [k, v] of Object.entries(r.data)) {
            const provinceName = v.provinceName;
            const cityName = v.cityName;
            if (!pCMap[provinceName]) {
                pCMap[provinceName] = {};
            }
            if (!pCMap[provinceName][cityName]) {
                pCMap[provinceName][cityName] = [k];
            } else {
                pCMap[provinceName][cityName].push(k);
            }
        }

        return [pCMap, r.data];
    }

    maxShop(city, itemCode, pCMap, province, shops) {
        let maxCount = 0;
        let maxShopId = "0";
        const shopIds = pCMap[province][city];
        for (const shop of shops) {
            const shopId = shop.shopId;
            const items = shop.items;

            if (!shopIds.includes(shopId)) {
                continue;
            }
            for (const item of items) {
                if (item.itemId !== itemCode.toString()) {
                    continue;
                }
                if (item.inventory > maxCount) {
                    maxCount = item.inventory;
                    maxShopId = shopId;
                }
            }
        }
        console.log(`item code ${itemCode}, max shop id : ${maxShopId}, max count : ${maxCount}`);
        return maxShopId;
    }

    async distanceShop(itemCode, shops, sourceData, lat = "28.499562", lng = "102.182324") {
        const tempList = [];
        for (const shop of shops) {
            const shopId = shop.shopId;
            const items = shop.items;
            const itemIds = items.map(i => i.itemId);
            if (!itemIds.includes(itemCode.toString())) {
                continue;
            }
            const shopInfo = sourceData[shopId];
            const d = Math.sqrt(
                Math.pow(parseFloat(lat) - parseFloat(shopInfo.lat), 2) +
                Math.pow(parseFloat(lng) - parseFloat(shopInfo.lng), 2)
            );
            tempList.push([d, shopId]);
        }

        tempList.sort((a, b) => a[0] - b[0]);
        if (tempList.length > 0) {
            return tempList[0][1];
        } else {
            return "0";
        }
    }

    async getLocationCount(province, city, itemCode, pCMap, sourceData, lat = "29.83826", lng = "102.182324", reserveRule = 0) {
        const dayTime = Math.floor(new Date().getTime() / 1000) * 1000;
        const sessionId = this.headers['current_session_id'];
        const url = `https://static.moutai519.com.cn/mt-backend/xhr/front/mall/shop/list/slim/v3/${sessionId}/${province}/${itemCode}/${dayTime}`;
        const response = await axios.get(url, { proxies });
        if (response.status !== 200) {
            console.log(`get_location_count : params : ${dayTime}, response code : ${response.status}, response body : ${response.data}`);
        }
        const shops = response.data.data.shops;

        if (reserveRule === 0) {
            return this.distanceShop(itemCode, shops, sourceData, lat, lng);
        }
        if (reserveRule === 1) {
            return this.maxShop(city, itemCode, pCMap, province, shops);
        }
    }

    actParams(shopId, itemId) {
        const sessionId = this.headers['current_session_id'];
        const userId = this.headers['userId'];
        const params = {
            itemInfoList: [{ count: 1, itemId }],
            sessionId: parseInt(sessionId),
            userId,
            shopId,
        };
        const s = JSON.stringify(params);
        const act = this.encrypt.aesEncrypt(s);
        params.actParam = act;
        return params;
    }

    async reservation(params) {
        const { userId, ...paramsWithoutUserId } = params;
        const response = await axios.post(
            "https://app.moutai519.com.cn/xhr/front/mall/reservation/add",
            paramsWithoutUserId,
            { headers: this.headers, proxies }
        );
        const data = response.data;
        if (data.code === 401) {
            const msg = {
                name: "- 申购结果",
                value: "token失效, 请重新抓包获取",
            };
            this.jieguo = "token失效, 请重新抓包获取";
        } else if (data.code !== 2000) {
            const msg = {
                name: "- 申购结果",
                value: data.message,
            };
            this.jieguo = data.message;
        } else {
            const msg = {
                name: "- 申购结果",
                value: data.data.successDesc,
            };
            this.jieguo = data.data.successDesc;
        }
        return msg;
    }

    async getUserEnergyAward() {
        const cookies = {
            "MT-Device-ID-Wap": this.headers["MT-Device-ID"],
            "MT-Token-Wap": this.headers["MT-Token"],
            "YX_SUPPORT_WEBP": "1",
        };
        const response = await axios.post(
            "https://h5.moutai519.com.cn/game/isolationPage/getUserEnergyAward",
            {},
            { headers: this.headers, cookies, proxies }
        );
        const data = response.data;
        if (data.code === 200) {
            const msg = {
                name: "- 耐力",
                value: "领取耐力成功",
            };
            return msg;
        } else {
            const msg = {
                name: "- 耐力",
                value: data.message,
            };
        }}}

for (const i of c) {
    console.log(i);
    const checkItem = i;
    const [aa, bb] =   new IMAOTAI(checkItem);
    console.log(aa);
}