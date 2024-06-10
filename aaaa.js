
/**
 * @fileoverview Template to compose HTTP reqeuest.
 * 
 */

const url = `https://promotion.waimai.meituan.com/lottery/limitcouponcomponent/fetchcoupon?couponReferId=424BC09F1A6040B08225C2380A162155&geoType=2&gdPageId=562880&pageId=574086&version=1&utmSource=AppStore&utmCampaign=AgroupBgroupG&instanceId=17179476255720.83593319078736940&componentId=17179476255720.83593319078736940&ctype=mtiphone&utmMedium=iphone&gSource=&dpSource=&yodaReady=h5&csecplatform=4&csecversion=2.4.0`;
const method = `POST`;
const headers = {
'mtgsig' : `{"a0":"3.0","a1":"6f50fb51-23ee-4173-ab33-6ee69ed0ef29","a3":24,"a4":1718008987,"a5":"z72LbDBPb5+XFqm4k1sQgmpTdbwx86G4rJCrKsq/CWwlMOb1JL2np1To9VFWunfDAvJHMN3fGbtprBevIgJhqlNHrGlaGoMcdLJd3Ljj6UIqPRs4U28aqoFOV2UXxGsHPJVNbyYg0tXr4XCf8Nd4BBEJQeMgGybkJiVfjbgWAYORoyqQRC3ZYMcfNHd3ecvJKvN0Fm4pk6L5xEGkY315yXkxQHLARyKhBk+pvv4/ljoZ76Hbw8bC7SOFFxq66QvVfYrk7ahHSU/5KJmFPCFfKoymXWfwcgw8BideI6nE0dXPBSxIH5khtgSv/MS3l69IW6F3iaG0xFsV2qsJoV7gzs+cbeLv4dMhdNvCY+l3riJrbvx1l9xzjsNSI34cz529","a6":0,"a7":"t4JOAKMjzF3Qtic+oUEGAk1cyqwVm4cutyEnpRlVemuenXuTiu5tVwffjG7DZya/VqVLnCkP6U1NLG1L72wIn++Dsc8HHaT9J22ppIaCovU=","a8":"d84c34c2aab10988fd6850806b5d3b39fdcaf4f8c45cb8dc72bd3789","a9":"f6fad79aNfF0nqZGqGgEUXuPMfSAs9ITqaJUP+SxDM5t3Ia8Se6hL7tBTTkxvZBwwlchcJDJMoiDzSSis/5X+kqj+5VOa4h2DobC3jGFOt6jGoW1djyhztD+NIhDltpytVuWMArcXhaXUvJvVf+vDhHpDmgTmIVDARDtzDGhCMt3p4k/kNoxJ4+7+M+14QEs+0k/ZTNwuFPhzBJH2Y4i7uxUZJ6Bim49BzbkMbuq5Dq3lavBky4Rd5tsLTVt61zVoNZN+JDU3pyT/LiWEQWhNvhtc64AwZ6UZAnJBjucX0zPt+AP9d3KbITBqkApiOjgOkPU7SLS5NMCoyVkvklat9lab9n6CiMZIsiDtyomlfMPQD/WvqilC6hCQZKPFAk+OCCLkctzREh6ehqPyo2Ajf2Q2jai4Pg0qIlhwnV8qhssL7+yP0ZXuXan43jj/baNhUAWwqryRGA5GVVPREG8slPPAruy3BYfNqo9W87L38/A8s1PGzEnqwdArJ0E0lh+W5lGy+JVHh1X+RUHIljnyA9gvYHtgZAOg0yyd1B6V3xjPBK+zxK0JK+suZ/CGogAsULnPrU2rs8nfjxjyly6RjbjXRKKFVnGiu3t5EFE9jPFKUmK2FHPBRwdADoL3INEqlSvd9VoEGs5BSZvW+Xp50MGCq/eVozpbmiGZrSF2qzVaAEWV60=","a10":"5,53,1.1.6","x0":2,"a2":"e94dc589bf58a563786e136ea9528ff9"}`,
'Sec-Fetch-Dest' : `empty`,
'Connection' : `keep-alive`,
'Accept-Encoding' : `gzip, deflate, br`,
'Content-Type' : `application/json`,
'X-Titans-User' : ``,
'Sec-Fetch-Site' : `same-site`,
'dj-token' : `BUtNUwMAAABuBktNUwMaOQIAAAABO5rMWgAAACz6lf32OImeLgPArTV4hE4S9eXhwUJCFkeLGUZK/Zf9enGA8BhragDsUKvmKyIszI9Mv/QD0Z9xKPB42aElAQj4e/naX2t2ecjHTux04n4vRem072W/i4wZK7kAAABNPy2rWJwArMt86C9gFaUZKUtwPE2jkMId9czQr+W4iV25J+asAocjgqDvCO80zfIHn40A5gZqh0l0mWfr2vOQzji5HUrAFm1Y3eeTtds=`,
'Origin' : `https://market.waimai.meituan.com`,
'User-Agent' : `Mozilla/5.0 (iPhone; CPU iPhone OS 17_5_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 TitansX/20.0.1.old KNB/1.0 iOS/17.5.1 meituangroup/com.meituan.imeituan/12.21.406 meituangroup/12.21.406 App/10110/12.21.406 iPhone/iPhone14Pro WKWebView`,
'Sec-Fetch-Mode' : `cors`,
'Cookie' : `WEBDFPID=3v165v08x4xu5x1x05y1u6xxw16147148141ux84y5z979588v7wv241-1988514091912-1673154091165CSMGSKU868c0ee73ab28e1d0b03bc83148500063384; _lx_utm=utm_term%3D12.21.406%26utm_source%3DAppStore%26utm_content%3D0000000000000A3008D5B3F714301B6C84B9A10A460E4A166463580995370238%26utm_medium%3Diphone%26utm_campaign%3DAgroupBgroupD0Ghomepage_searchH0; _utm_content=0000000000000A3008D5B3F714301B6C84B9A10A460E4A166463580995370238; token=AgEQLfJGeMbU185bNLnDoSSHEnG_1yYdD5hxf-UPWZ54pk4JRRlcceh93TH_PkYmgdPZjbacRZG3RBEAAABeIAAANeH-mpPS6tR3QatO_Gxa8vPNz8Di1zhxUXfcQST11xvYAW3ZCD-a9BsWI38BNnzYH2S1Gy486sxWIJQ_9T_lvA; uuid=0000000000000A3008D5B3F714301B6C84B9A10A460E4A166463580995370238; mt_c_token=AgEQLfJGeMbU185bNLnDoSSHEnG_1yYdD5hxf-UPWZ54pk4JRRlcceh93TH_PkYmgdPZjbacRZG3RBEAAABeIAAANeH-mpPS6tR3QatO_Gxa8vPNz8Di1zhxUXfcQST11xvYAW3ZCD-a9BsWI38BNnzYH2S1Gy486sxWIJQ_9T_lvA; isUuidUnion=true; iuuid=0000000000000A3008D5B3F714301B6C84B9A10A460E4A166463580995370238; network=wifi; _utm_campaign=AgroupBgroupD0Ghomepage_searchH0; _utm_medium=iphone; _utm_source=AppStore; _utm_term=12.21.406; cityid=60; dpid=; _lxsdk_s=190014b69bb-d53-7b0-22d%7C1803252512%7CNaN; lt=AgEQLfJGeMbU185bNLnDoSSHEnG_1yYdD5hxf-UPWZ54pk4JRRlcceh93TH_PkYmgdPZjbacRZG3RBEAAABeIAAANeH-mpPS6tR3QatO_Gxa8vPNz8Di1zhxUXfcQST11xvYAW3ZCD-a9BsWI38BNnzYH2S1Gy486sxWIJQ_9T_lvA; n=Rkr909782805; ta.uuid=1785354870187737126; _fdPreviousPage=/cbc/http/malacca/v2/repay/applyRepaymentV2; _fdThisPage=/cbc/http/malacca/v2/repay/calcRepayFeeV2; _hc.v=fa2d1063-0f58-be39-8776-36d21de8085d.1706940431; __utma=74597006.499779927.1691209875.1691209875.1691209875.1; fd_maidan_accessno=; fd_maidan_skipLandingAndResult=; fd_maidan_utm_source=creditpay_app-pay-banner214077_585263; fd_yuefu_open_type=H5; is_from_feed=; maidan_utm_source=creditpay_app-pay-banner214077_585263; cityname=%E6%B5%8E%E5%8D%97; _biz_ssr_abtest_result={"newName":"saveMoneyIndex","whiteListKey":"userId","featuresResult":[]}; _AB_Record={}; _maidan_abtest_result={"newName":"creditpayCommonApply","whiteListKey":"userId","featuresResult":[]}; _lxsdk=0000000000000A3008D5B3F714301B6C84B9A10A460E4A166463580995370238; _lxsdk_cuid=183962fd233c8-00aea0b9f33af5-682d2760-505c8-183962fd233c8; _lxsdk_dpid=a3008d5b3f714301b6c84b9a10a460e4a166463580995370238; _lxsdk_unoinid=a3008d5b3f714301b6c84b9a10a460e4a166463580995370238`,
'Host' : `promotion.waimai.meituan.com`,
'Referer' : `https://market.waimai.meituan.com/`,
'Accept-Language' : `zh-CN,zh-Hans;q=0.9`,
'Accept' : `application/json, text/plain, */*`
};
const body = `{"cType":"mtiphone","fpPlatform":5,"wxOpenId":"","appVersion":"12.21.406","mtFingerprint":"i2HKpOmsirDPavelVfQBZJQ/YI65wB9IiJH7RTziEptmyx+QTZt081Uu9G995hsMKi7RJcZNcEbxCKfmIB8Fh2V//y6C8qAKuJ9vJHUvcOniTPGye8lDOk+kE7EreV217eyBNKL9KszvtYxoxC34TaFdCHjomj/FCxhV9pz7oP0UOC4YbnBGRAk5cIk6ZIGnZZsXAPphlhQUyULCLfYJTCzz6UttO9XsFg9KPQSfCYPh9K5oFRqi4BF2Nh5mrFr4Bv88+6ngmLNaImbQvdujyqaC2WfaOwJQ9WhD/bmrh9nwIzktXZ42aE0rJEhN+KEp5heXbV7AZNYV2C7rpxQ+gDhZ3kxnRkEpPa7gqXMUxKYYBAPeMrCWxKnB0PNbVEJt7Oj4AS1DahuJHtvmZAwQrh7JRHLrOUKboBzTUPoFynwHCvpdv4y0Vhwlr9/fGCpKwK40zUEv4gKaO2BT0dcgex44UiEuTimPOGQgJYMICMtDCJwq4v4R2B5DgdGTi4CCylQwLK+nUNpztXXSGnH+U4b7jeCAmiIbHHsWK/Qyn/LEIzpDxQx8rDUbOoLEtq9k//7pkGhNj7uslhAdjOgpi0K/nVSBdllcnbQykivOTqkvUcxc9tKax+iOuPh857qPLV+5Z2bja1PI/XM4bzsSXnVeWFOgWJswvGjEC7LZQzWyxzhwksjzL0sg3w+H8j50QzX2JOEzii9fux5aXlv+eXIkf5aEoESVjqeOb74IymIzwJcz5IXnR1lkBxu/Pj9ut7QHKPpDGfgCFRUjdFaJD0z4Iq5qheTsSaaYyQk2OgrmLDJie+HUYEpJw8sGcl10vvfWPzGoU1qMjkxXZu5S2jNAQ71XfQssSkPeDa+WsUodFcxeYR4/t1/V5827OAjTPEhXBZ+/IIdZrdTtXIM4vn2jFFiVS1NNhulgHX1iD8JAFT3Iyfyp01YswAoiT48142mJ8/I5plBCa87aaxI785LRBhDooOUvJupY3EL0FperTe0ft0gKt5X98YL1bkTfb+vFkzIGyTWXtyFcaH3Xzpx2rHywdR3hE21YTTNtCcsCEGDfPW9uPJiNtImzoRg6HRT9jxLvz9pJhKN5+J93AmHlnfsc+f14yUbQDHW+kFD6WI274VVS3m8KZpFm9uiRHYcSOiu6MlRSMb5WFmuaW7SsZ52c3lJW61zCg+29OZmGCJ2jRoCCEOV1vICtzWTf2NVRdj0kfNedODZHc71b+LovQhrVoh+fOp67k9Qkz9MePPckIHCZmKd6+rI/lJhXg+3IZvD3AKx2Pi9G81SP/IhVGOGWfv/AhHCDDAJ/z/ckn3NGzB/mS6qFuJq0Og1GvcFtnaypdHAt5DjPZI7jTd8QuinJPmXaT3fCnNfw3XtbabBwjfYdLXwGD2Xb9fqPlHCaxC8MqXk+KFSlmAZIj2wAqFOyqWGA351XzC2JewE="}`;

const myRequest = {
    url: url,
    method: method,
    headers: headers,
    body: body
};

$task.fetch(myRequest).then(response => {
    console.log(response.statusCode + "\n\n" + response.body);
    $done();
}, reason => {
    console.log(reason.error);
    $done();
});









for(var i=0;i<10;++i){
    console.log(i);
}