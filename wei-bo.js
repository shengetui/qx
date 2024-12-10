// 2024-06-11 20:58 qwa

const url = $request.url;
if (!$response.body) $done({});
let body = $response.body;

// 微博详情页菜单配置
const itemMenusConfig = {
  creatortypeask: false, // 转发任务
  mblog_menus_apeal: true, // 申诉
  mblog_menus_avatar_widget: false, // 用此头像挂件
  mblog_menus_bullet_shield: true, // 屏蔽弹幕
  mblog_menus_card_bg: false, // 用此卡片背景
  mblog_menus_comment_manager: true, // 评论管理
  mblog_menus_copy_url: true, // 复制链接
  mblog_menus_custom: false, // 寄微博
  mblog_menus_delete: true, // 删除
  mblog_menus_edit: true, // 编辑
  mblog_menus_edit_history: true, // 编辑记录
  mblog_menus_edit_video: true, // 编辑视频
  mblog_menus_favorite: true, // 收藏
  mblog_menus_follow: true, // 关注
  mblog_menus_home: false, // 返回首页
  mblog_menus_long_picture: true, // 生成长图
  mblog_menus_modify_visible: true, // 设置分享范围
  mblog_menus_novelty: false, // 新鲜事投稿
  mblog_menus_open_reward: false, // 赞赏
  mblog_menus_popularize: false,
  mblog_menus_promote: false, // 推广
  mblog_menus_report: true, // 投诉
  mblog_menus_shield: true, // 屏蔽
  mblog_menus_sticking: true, // 置顶
  mblog_menus_video_feedback: false, // 播放反馈
  mblog_menus_video_later: false // 可能是稍后再看
};

if (url.includes("/interface/sdk/sdkad.php")) {
  // 开屏广告
  let obj = JSON.parse(body.substring(0, body.length - 2));
  if (obj?.needlocation) {
    obj.needlocation = false;
  }
  if (obj?.show_push_splash_ad) {
    obj.show_push_splash_ad = false;
  }
  if (obj?.background_delay_display_time) {
    obj.background_delay_display_time = 31536000; // 60 * 60 * 24 * 365 = 31536000
  }
  if (obj?.lastAdShow_delay_display_time) {
    obj.lastAdShow_delay_display_time = 31536000;
  }
  if (obj?.realtime_ad_video_stall_time) {
    obj.realtime_ad_video_stall_time = 0;
  }
  if (obj?.realtime_ad_timeout_duration) {
    obj.realtime_ad_timeout_duration = 0;
  }
  if (obj?.ads?.length > 0) {
    for (let item of obj.ads) {
      item.displaytime = 0;
      item.displayintervel = 31536000;
      item.allowdaydisplaynum = 0;
      item.begintime = "2040-01-01 00:00:00";
      item.endtime = "2040-01-01 23:59:59";
    }
  }
  $done({ body: JSON.stringify(obj) + "OK" });
} else {
  let obj = JSON.parse(body);
  if (url.includes("/2/cardlist")) {
    if (obj?.cards?.length > 0) {
      let newCards = [];
      for (let card of obj.cards) {
        if (card?.card_group?.length > 0) {
          let newGroup = [];
          for (let group of card.card_group) {
            let cardType = group.card_type;
            // 120,145 视频版块轮播图 192横版热门视频 电影 颜值 电视剧等
            if ([120, 145, 192,236]?.includes(cardType)) {
              continue;
            }
            // 我的热搜 查看更多 热搜
            if ([6, 101,236]?.includes(cardType)) {
              continue;
            }
            if (group?.mblog) {
              // 卡片挂件,关注按钮
              removeAvatar(group.mblog);
            }
            newGroup.push(group);
          }
          card.card_group = newGroup;
          newCards.push(card);
        } else {
          let cardType = card.card_type;
          // 17猜你想搜 58搜索偏好设置
          if ([17, 58]?.includes(cardType)) {
            continue;
          }
          if (card?.mblog) {
            // 卡片挂件,关注按钮
            removeAvatar(card.mblog);
          }
          newCards.push(card);
        }
      }
      obj.cards = newCards;
    }
  } else if (url.includes("/2/checkin/show")) {
    // 首页签到
    if (obj?.show) {
      obj.show = 0;
    }
  }

  else if (url.includes("/2/flowpage")) {
    // 更多 热搜页面
    //channelInfo 对象
    if (obj?.channelInfo?.channels?.length > 0) {
      obj.channelInfo.channels = obj.channelInfo.channels.filter((i) =>   i.title === "热搜");
    }
    //items 对象
    if(obj.items.length>0){
      obj.items = obj.items.filter((i) =>  i.itemId);
      for ( i  in obj.items){
        if(obj.items[i].items.length>0){
          obj.items[i].items = obj.items[i].items.filter((i) => i.data.pic !== "https://simg.s.weibo.com/20210408_search_point_orange.png" &&  i.data.pic !== "https://simg.s.weibo.com/20180205110043_img_search_stick%403x.png" );
        }
      }
    }

  }
  else if (url.includes("/2/client/publisher_list")) {
    // 首页右上角按钮
    if (obj?.elements?.length > 0) {
      obj.elements = obj.elements.filter((i) => i.app_name === "写微博" || i.app_name === "图片" || i.app_name === "视频");
    }
  } else if (url.includes("/2/comments/build_comments")) {
    // 评论区
    if (obj?.datas?.length > 0) {
      let newItems = [];
      for (let item of obj.datas) {
        if (item?.data) {
          if (!isAd(item.data)) {
            // 微博伪装评论
            if (item.data.user) {
              // 头像挂件,关注按钮
              removeAvatar(item.data);
              if (["超话社区", "微博热搜", "微博视频"]?.includes(item.data?.user?.name)) {
                continue;
              }
            }
            // 评论气泡
            if (item?.data?.comment_bubble) {
              delete item.data.comment_bubble;
            }
            // 评论弹幕
            if (item?.data?.comment_bullet_screens_message) {
              delete item.data.comment_bullet_screens_message;
            }
            // 热评小图标 弹幕 首评
            if (item?.data?.hot_icon) {
              delete item.data.hot_icon;
            }
            // 会员气泡按钮
            if (item?.data?.vip_button) {
              delete item.data.vip_button;
            }
            // 6为你推荐更多精彩内容 15过滤提示
            if (item?.type === 6 || item?.type === 15) {
              continue;
            }
            if (item?.adType === "相关内容" || item?.adType === "相关评论" || item?.adType === "推荐") {
              continue;
            }
            newItems.push(item);
          }
        }
      }
      obj.datas = newItems;
    } else if (obj?.root_comments?.length > 0) {
      let newItems = [];
      for (let item of obj.root_comments) {
        if (!isAd(item)) {
          // 微博伪装评论
          if (item.user) {
            // 头像挂件,关注按钮
            removeAvatar(item);
            if (item?.user?.name === "超话社区" || item?.user?.name === "微博视频") {
              continue;
            }
          }
          // 评论气泡
          if (item?.comment_bubble) {
            delete item.comment_bubble;
          }
          // 评论弹幕
          if (item?.comment_bullet_screens_message) {
            delete item.comment_bullet_screens_message;
          }
          // 热评小图标 弹幕 首评
          if (item?.hot_icon) {
            delete item.hot_icon;
          }
          // 会员气泡按钮
          if (item?.vip_button) {
            delete item.vip_button;
          }
          newItems.push(item);
        }
      }
      obj.root_comments = newItems;
    } else if (obj?.comments?.length > 0) {
      let newItems = [];
      for (let item of obj.comments) {
        if (item?.user?.icons) {
          delete item.user.icons;
        }
        if (item?.reply_comment?.comment_badge) {
          delete item.reply_comment.comment_badge;
        }
        newItems.push(item);
      }
      obj.comments = newItems;
    }
    if (obj?.rootComment) {
      if (obj?.rootComment?.comment_bubble) {
        delete obj.rootComment.comment_bubble;
      }
    }
    // 投票窗口
    if (obj?.status?.page_info) {
      removeVoteInfo(obj?.status);
    }
  } else if (url.includes("/2/container/asyn")) {
    if (obj?.items?.length > 0) {
      let newItems = [];
      for (let item of obj.items) {
        // 关注按钮
        removeAvatar(item?.data);
        if (/infeed_may_interest_in/.test(item?.itemId)) {
          // 你可能感兴趣的超话
          continue;
        }
        if (item?.itemId === null) {
          // 横版博主卡片
          continue;
        }
        if (item?.items?.length > 0) {
          for (let i of item.items) {
            // 投票窗口
            removeVoteInfo(i?.data);
          }
        }
        newItems.push(item);
      }
      obj.items = newItems;
    }
  } else if (url.includes("/2/direct_messages/user_list")) {
    if (obj?.user_list?.length > 0) {
      obj.user_list = obj.user_list.filter((i) => !["活动通知", "闪聊"]?.includes(i?.user?.name));
    }
  } else if (url.includes("/2/flowlist")) {
    if (obj?.items?.length > 0) {
      for (let item of obj.items) {
        if (item?.items?.length > 0) {
          for (let i of item.items) {
            // 投票窗口
            removeVoteInfo(i?.data);
          }
        }
      }
    }
  } else if (url.includes("/2/groups/allgroups/v2")) {
    // 顶部tab
    if (obj?.pageDatas?.length > 0) {
      // homeFeed关注 homeHot推荐
      let newTabs = [];
      for (let item of obj.pageDatas) {
        if (item?.pageDataType === "homeExtend") {
          // 多余的推广tab 比如华为Mate60
          continue;
        } else {
          if (item?.categories?.length > 0) {
            let newCates = [];
            for (let i of item.categories) {
              if (i?.title === "默认分组") {
                if (i?.pageDatas?.length > 0) {
                  let newII = [];
                  for (let ii of i.pageDatas) {
                    if (["最新微博", "特别关注", "好友圈", "视频"]?.includes(ii?.title)) {
                      // 白名单列表
                      newII.push(ii);
                    } else {
                      continue;
                    }
                    if (ii?.title === "最新微博") {
                      ii.title = "微博";
                    }
                  }
                  i.pageDatas = newII;
                }
              }
              newCates.push(i);
            }
            item.categories = newCates;
          }
          newTabs.push(item);
        }
      }
      obj.pageDatas = newTabs;
    }
  } else if (url.includes("/2/messageflow/notice")) {
    // 消息动态页
    if (obj?.messages?.length > 0) {
      let newMsgs = [];
      for (let msg of obj.messages) {
        if (msg?.msg_card?.ad_tag) {
          continue;
        } else {
          newMsgs.push(msg);
        }
      }
      obj.messages = newMsgs;
    }
  } else if (url.includes("/2/page")) {
    // 搜索页列表,超话
    if (obj?.cards?.length > 0) {
      if (obj?.cards?.[0]?.card_group?.length > 0) {
        obj.cards[0].card_group = obj.cards[0].card_group.filter(
            (c) => !(c?.actionlog?.ext?.includes("ads_word") || c?.itemid?.includes("t:51") || c?.itemid?.includes("ads_word"))
        );
      }
      obj.cards = obj.cards.filter(
          (i) =>
              !(
                  i.itemid?.includes("feed_-_invite") || // 超话里的好友
                  i.itemid?.includes("infeed_friends_recommend") || // 好友关注
                  i.itemid?.includes("infeed_may_interest_in") || // 你可能感兴趣的超话
                  i.itemid?.includes("infeed_pagemanual3") || // 手动区域3
                  i.itemid?.includes("infeed_weibo_mall") || // 微博小店
                  i?.mblog?.mblogtypename?.includes("广告")
              )
      );
    } else if (obj?.card_group?.length > 0) {
      obj.card_group = obj.card_group.filter((i) => i?.desc?.includes("你可能感兴趣的超话"));
    }
  } else if (url.includes("/2/profile/container_timeline")) {
    // 个人主页关注弹窗
    if (obj?.loadedInfo?.follow_guide_info) {
      delete obj.loadedInfo.follow_guide_info;
    }
    // 个人主页信息流
    if (obj?.items?.length > 0) {
      let newItems = [];
      for (let item of obj.items) {
        if (item?.category === "card") {
          // 58微博展示时间段提示 216筛选按钮
          if ([58, 216,236]?.includes(item?.data?.card_type)) {
            newItems.push(item);
          }
        } else if (item?.category === "group") {
          // 遍历group,保留置顶微博
          if (item?.header?.data?.icon) {
            // 置顶微博背景图
            delete item.header.data.icon;
          }
          if (item?.itemId?.includes("INTEREST_PEOPLE")) {
            // 可能感兴趣的人
            continue;
          }
          if (item?.items?.length > 0) {
            let newII = [];
            for (let ii of item.items) {
              if (ii?.category === "feed") {
                // 头像挂件,关注按钮
                removeAvatar(ii?.data);
                // 信息流推广
                removeFeedAd(ii?.data);
                // 投票窗口
                removeVoteInfo(ii?.data);
                // 评论指引
                if (ii?.data?.enable_comment_guide) {
                  ii.data.enable_comment_guide = false;
                }
              } else if (ii?.category === "card") {
                if ([48, 176]?.includes(ii?.data?.card_type)) {
                  // 最近关注与互动过的博主
                  continue;
                }
                if (ii?.data?.rightImage) {
                  // 新版置顶微博皇冠
                  delete ii.data.rightImage;
                }
                if (ii?.data?.backgroundImage) {
                  // 新版置顶微博背景图
                  delete ii.data.backgroundImage;
                }
              }
              newII.push(ii);
            }
            item.items = newII;
          }
          newItems.push(item);
        } else if (item?.category === "feed") {
          if (item?.data) {
            if (!isAd(item.data)) {
              // 信息流推广
              removeFeedAd(item.data);
              // 投票窗口
              removeVoteInfo(item.data);
              if (item?.data?.source?.includes("生日动态")) {
                // 移除生日祝福微博
                continue;
              }
              if (item?.data?.title?.text !== "热门" && item?.data?.title?.structs?.length > 0) {
                // 移除赞过的微博 保留热门内容
                continue;
              }
              newItems.push(item);
            }
          }
        }
      }
      obj.items = newItems;
    }
  } else if (url.includes("/2/profile/dealatt") || url.includes("/2/friendships/")) {
    // 个人主页点击关注后展示菜单
    if (obj?.cards?.length > 0) {
      // 相关推荐卡片
      obj.cards = [];
    }
    if (obj?.toolbar_menus_new?.items?.length > 0) {
      // 底部菜单
      obj.toolbar_menus_new.items = obj.toolbar_menus_new.items.filter((i) => {
        if (i?.identifier === "recommend") {
          // 相关推荐
          return false;
        } else if (/reward_/?.test(i?.identifier)) {
          // 赞赏
          return false;
        } else {
          return true;
        }
      });
    }
  } else if (url.includes("/2/profile/me")) {
    // 我的页面
    if (obj?.vipHeaderBgImage) {
      delete obj.vipHeaderBgImage;
    }
    if (obj?.items?.length > 0) {
      let newItems = [];
      for (let item of obj.items) {
        let itemId = item.itemId;
        if (itemId === "profileme_mine") {
          if (item?.header) {
            delete item.header.vipView;
            delete item.header.vipCenter;
            delete item.header.vipIcon;
          }
          if (item?.items?.length > 0) {
            for (let d of item.items) {
              if (d.itemId === "mainnums_friends") {
                let s = d.click.modules[0].scheme;
                d.click.modules[0].scheme = s.replace("231093_-_selfrecomm", "231093_-_selffollowed");
              }
            }
          }
          newItems.push(item);
        } else if (itemId === "100505_-_top8") {
          if (item?.items?.length > 0) {
            item.items = item.items.filter(
                (i) =>
                    i.itemId === "100505_-_album" || // 我的相册
                    i.itemId === "100505_-_like" || // 赞/收藏
                    i.itemId === "100505_-_watchhistory" || // 浏览记录
                    i.itemId === "100505_-_draft" // 草稿箱
                // i.itemId === "100505_-_pay" || // 我的钱包
                // i.itemId === "100505_-_ordercenter" || // 我的订单
                // i.itemId === "100505_-_productcenter" || // 创作中心
                // i.itemId === "100505_-_promote" || // 广告中心
            );
          }
          newItems.push(item);
        } else if (itemId === "100505_-_manage") {
          if (item?.style) {
            delete item.style;
          }
          // 移除分隔符的点点点
          if (item?.images) {
            delete item.images;
          }
          newItems.push(item);
        } else if (itemId === "100505_-_manage2") {
          // 移除面板样式
          if (item?.footer) {
            delete item.footer;
          }
          // 移除框内推广
          if (item?.body) {
            delete item.body;
          }
          newItems.push(item);
        } else if (itemId === "100505_-_chaohua" || itemId === "100505_-_recentlyuser") {
          newItems.push(item);
        } else {
          // 移除其他推广
          continue;
        }
      }
      obj.items = newItems;
    }
  } else if (url.includes("/2/profile/statuses/tab")) {
    if (obj?.cards?.length > 0) {
      let newCards = [];
      for (let card of obj.cards) {
        if (card?.card_group?.length > 0) {
          let newGroup = [];
          for (let group of card.card_group) {
            let cardType = group.card_type;
            // 22那年今天
            if ([22]?.includes(cardType)) {
              continue;
            }
            if (group?.mblog) {
              // 卡片挂件,关注按钮
              removeAvatar(group?.mblog);
              // 投票窗口
              removeVoteInfo(group?.mblog);
            }
            newGroup.push(group);
          }
          card.card_group = newGroup;
          newCards.push(card);
        } else {
          if (card?.mblog) {
            // 卡片挂件,关注按钮
            removeAvatar(card?.mblog);
            // 投票窗口
            removeVoteInfo(card?.mblog);
          }
          newCards.push(card);
        }
      }
      obj.cards = newCards;
    }
    // 我的热搜
    if (obj?.cardlistInfo?.page_type === "08") {
      delete obj.cardlistInfo;
    }
  } else if (url.includes("/2/profile/userinfo")) {
    // 个人详情页
    if (obj?.footer?.data) {
      // 底部菜单项目
      let toolbar = obj.footer.data.toolbar_menus_new;
      if (toolbar?.items?.length > 0) {
        toolbar.items = toolbar.items.filter((i) => {
          if (i?.identifier === "urge") {
            // 催更
            return false;
          } else if (i?.identifier === "recommend") {
            // 相关推荐
            return false;
          } else if (/reward_/?.test(i?.identifier)) {
            // 赞赏
            return false;
          } else {
            return true;
          }
        });
      }
      if (toolbar?.lottie_guide) {
        // 弹窗
        delete toolbar.lottie_guide;
      }
    }
    // 头部信息
    if (obj?.header?.data) {
      let head = obj.header.data.userInfo;
      // 头像挂件
      if (head?.avatar_extend_info) {
        delete head.avatar_extend_info;
      }
    }
    // 全套个性皮肤
    if (obj?.profileSkin?.data) {
      delete obj.profileSkin.data;
    }
  } else if (url.includes("/2/push/active")) {
    // 首页右上角红包图标
    if (obj?.feed_redpacket) {
      obj.feed_redpacket.starttime = "2208960000";
      obj.feed_redpacket.interval = "31536000";
      obj.feed_redpacket.endtime = "2209046399";
    }
  } else if (url.includes("/2/search/")) {
    // 搜索页信息流
    if (url.includes("container_timeline")) {
      if (obj?.items?.length > 0) {
        let newItems = [];
        for (let item of obj.items) {
          if (item?.category === "feed") {
            if (!isAd(item.data)) {
              // 信息流推广
              removeFeedAd(item.data);
              newItems.push(item);
            }
          }
          if (item.type === "vertical") {
            console.log('移除内嵌的模块💕💕');
            item = {};
            continue;
          }
           else if (item?.category === "card") {
            // 19热议等tab 118横版图片广告 208实况热聊 217错过了热词 249横版视频广告
            if (![17,101]?.includes(item?.data?.card_type)) {
         
              continue;
            } else {
              if (item?.data?.card_type === 17 ){


                item.data.group = item.data?.group?.filter(item => (
                    !item?.promotion &&
                    ((item?.scheme?.startsWith("sinaweibo://searchall") ) ||
                        (item?.title_sub?.startsWith("更多热搜")))
                )) || [];
                item.data?.group?.forEach(item3 => {
                  item3.icon = ""; 
                 });
              }
              newItems.push(item);
            }
          } else if (item?.category === "cell") {
            // 保留信息流分割线
            newItems.push(item);
          } else if (item?.category === "group") {
            if (item?.items?.length > 0) {
              let newII = [];
              for (let ii of item.items) {
                if (ii?.data?.card_type === 17) {


                  ii.data.group = ii.data?.group?.filter(item => (
                      !item?.promotion &&
                      ((item?.scheme?.startsWith("sinaweibo://searchall") &&
                              item?.icon && item.icon !== 'https://simg.s.weibo.com/moter/flags/entertainment_0_small.png') ||
                          (item?.title_sub?.startsWith("更多热搜")))
                  )) || [];
                  ii.data?.group?.forEach(item3 => {
                    item3.icon = ""; 
                   });
                }
           
                  if ([19, 118, 208, 217, 249,236,101,182,118,192]?.includes(ii?.data?.card_type)) {
                  // if (ii?.data?.card_type === 182 || ii?.data?.card_type === 118 || ii?.data?.card_type === 192) {
                  // 热议话题
                  continue;
                } else {
                  newII.push(ii);
                }
              }



              item.items = newII;
            }
            newItems.push(item);
          }
        }
        obj.items = newItems;
      }
      if (obj?.loadedInfo) {
        delete obj?.loadedInfo;
      }
    } else if (url.includes("finder")) {
      let channels = obj.channelInfo.channels;
      if (channels?.length > 0) {
        for (let channel of channels) {
          let payload = channel.payload;
          if (payload) {
            if (payload?.loadedInfo) {
              // 去除搜索框填充词
              if (payload?.loadedInfo?.searchBarContent?.length > 0) {
                payload.loadedInfo.searchBarContent = [];
              }
              // 去除搜索背景图片
              if (payload?.loadedInfo?.headerBack?.channelStyleMap) {
                delete payload.loadedInfo.headerBack.channelStyleMap;
              }
              // 搜索框样式
              if (payload?.loadedInfo?.searchBarStyleInfo) {
                delete payload.loadedInfo.searchBarStyleInfo;
              }
            }
            if (payload?.items?.length > 0) {
              let newItems = [];
              for (let item of payload.items) {
                if (item.type === "vertical") {
                  console.log('移除内嵌的模块💕💕');
                  item = {};
                  continue;
                }
                if (item?.category === "feed") {
                  if (!isAd(item.data)) {
                    // 信息流推广
                    removeFeedAd(item.data);
                    newItems.push(item);
                  }

                } else if (item?.category === "card") {
                  // 19热议等tab 118横版图片广告 208实况热聊 217错过了热词 249横版视频广告 236 热搜趋势
                  if (![17,101]?.includes(item?.data?.card_type)) { 
                    continue;
                  } else {
                    if (item?.data?.card_type === 17 ){

                       item.data?.group?.forEach(item3 => {
                        item3.icon = ""; 
                       });
                       
                      item.data.group = item.data?.group?.filter(item => (
                          !item?.promotion &&
                          ((item?.scheme?.startsWith("sinaweibo://searchall") ) ||
                              (item?.title_sub?.startsWith("更多热搜")))
                      )) || [];

                    }
                    newItems.push(item);
                  }
                } else if (item?.category === "cell") {
                  // 保留信息流分割线
                  newItems.push(item);
                } else if (item?.category === "group") {
                  if (item?.items?.length > 0) {
                    let newII = [];
                    for (let ii of item.items) {
                      if (ii?.data?.card_type === 17) {
                        ii.data.group = ii.data?.group?.filter(item => (
                            !item?.promotion &&
                            ((item?.scheme?.startsWith("sinaweibo://searchall")  ) ||
                                (item?.title_sub?.startsWith("更多热搜")))
                        )) || [];
                        ii.data?.group?.forEach(item3 => {
                          item3.icon = ""; 
                         });
                      }
                   if ([19, 118, 208, 217, 249,236,101,182,192]?.includes(ii?.data?.card_type)) { 
                        // if (ii?.data?.card_type === 182 || ii?.data?.card_type === 118  || ii?.data?.card_type === 192) {
                        // 热议话题
                        continue;
                      } else {
                        newII.push(ii);
                      }
                    }


                    item.items = newII;
                  }
                  newItems.push(item);
                }
              }
              payload.items = newItems;
            }
          }
        }
      }
    }
  } else if (url.includes("/2/searchall")) {
    if (obj?.header?.data) {
      // 商品推广头部淘宝跳转
      const items = ["bg_img", "background_scheme", "background_url"];
      for (let i of items) {
        delete obj.header.data[i];
      }
    }
    if (obj?.cards?.length > 0) {
      let newCards = [];
      for (let card of obj.cards) {
        if (card?.card_group?.length > 0) {
          let newGroup = [];
          for (let group of card.card_group) {
            if (group?.card_type === 22) {
              // 先筛选card_group里面的card_type
              // 横版广告图
              continue;
            } else if (group?.card_type === 42 && group?.title_extra_text === "广告") {
              // 推荐品牌广告
              continue;
            } else if (group?.card_type === 3 && group?.pics?.length > 0) {
              // 推荐品牌广告图
              continue;
            } else {
              if (group?.mblog) {
                // 有mblog字段的过滤广告
                if (!isAd(group.mblog)) {
                  // 头像挂件,关注按钮
                  removeAvatar(group.mblog);
                  if (group?.mblog?.title_source) {
                    delete group.mblog.title_source;
                  }
                  if (group?.mblog?.source_tag_struct) {
                    delete group.mblog.source_tag_struct;
                  }
                  if (group?.mblog?.extend_info) {
                    delete group.mblog.extend_info;
                  }
                  // 商品橱窗
                  if (group?.mblog?.common_struct) {
                    delete group.mblog.common_struct;
                  }
                  // 投票窗口
                  removeVoteInfo(group?.mblog);
                  // 新版热推
                  if (group?.mblog?.is_ad === 1) {
                    continue;
                  }
                  newGroup.push(group);
                }
              } else {
                // 没有mblog字段的全部推送
                newGroup.push(group);
              }
            }
          }
          card.card_group = newGroup;
          newCards.push(card);
        } else {
          if (card?.mblog) {
            if (!isAd(card.mblog)) {
              // 头像挂件,关注按钮
              removeAvatar(card.mblog);
              if (card?.mblog?.title_source) {
                delete card.mblog.title_source;
              }
              if (card?.mblog?.source_tag_struct) {
                delete card.mblog.source_tag_struct;
              }
              if (card?.mblog?.extend_info) {
                delete card.mblog.extend_info;
              }
              // 商品橱窗
              if (card?.mblog?.common_struct) {
                delete card.mblog.common_struct;
              }
              // 投票窗口
              removeVoteInfo(card?.mblog);
              // 隐藏在 cards 里面的投票窗口
              if (card?.mblog?.page_info?.cards?.length > 0) {
                let page = card.mblog.page_info;
                for (let i of page.cards) {
                  if (i?.media_info?.vote_info) {
                    delete i.media_info.vote_info;
                  }
                }
              }
              newCards.push(card);
            }
          }
        }
      }
      obj.cards = newCards;
    }
    // 13.11.1版本obj下的cards变为了items 2023-11-26
    if (obj?.items?.length > 0) {
      let newItems = [];
      for (let item of obj.items) {
        if (!isAd(item?.data)) {
          if (item?.category === "feed") {
            // 信息流推广
            removeFeedAd(item?.data);
            // 投票窗口
            removeVoteInfo(item?.data);
            newItems.push(item);
          } else if (item?.category === "group") {
            if (item?.items?.length > 0) {
              let newII = [];
              for (let ii of item.items) {
                if (!isAd(ii?.data)) {
                  if (ii?.data) {
                    removeAvatar(ii.data);
                    // 22广告图 89商品推广视频
                    if ([22, 89]?.includes(ii?.data?.card_type)) {
                      continue;
                    }
                    // 商品推广desc
                    if (ii?.data?.card_type === 42 && ii?.data?.is_ads === true) {
                      continue;
                    }
                  }
                  newII.push(ii);
                }
              }
              item.items = newII;
            }
            newItems.push(item);
          } else {
            newItems.push(item);
          }
        }
      }
      obj.items = newItems;
    }
  } else if (url.includes("/2/statuses/container_timeline_hot") || url.includes("/2/statuses/unread_hot_timeline")) {
    // 首页推荐tab信息流
    for (let s of ["ad", "advertises", "trends", "headers"]) {
      if (obj?.[s]) {
        delete obj[s];
      }
    }
    if (obj?.items?.length > 0) {
      let newItems = [];
      for (let item of obj.items) {

        item.items = item?.items?.filter(item => item.data.card_type !== 118);

        if (!isAd(item?.data)) {
          if (item?.category === "feed") {
            // 信息流推广
            removeFeedAd(item?.data);
            // 投票窗口
            removeVoteInfo(item?.data);
            if (!item?.item_category) {
              newItems.push(item);
            }
          } else {
            // 移除其他推广
            continue;
          }
        }
      }
      obj.items = newItems;
    }
    if (obj?.statuses?.length > 0) {
      let newStatuses = [];
      for (let item of obj.statuses) {
        if (!isAd(item)) {
          // 信息流推广
          removeFeedAd(item);
          newStatuses.push(item);
        }
      }
      obj.statuses = newStatuses;
    }
  } else if (url.includes("/2/statuses/container_timeline?") || url.includes("/2/statuses/container_timeline_unread")) {
    // 首页关注tab信息流
    if (obj?.loadedInfo?.headers) {
      delete obj.loadedInfo.headers;
    }
    // 商品橱窗
    if (obj?.common_struct) {
      delete obj?.common_struct;
    }
    if (obj?.items?.length > 0) {
      let newItems = [];
      for (let item of obj.items) {
        if (!isAd(item?.data)) {
          if (item?.category === "feed") {
            // 信息流推广
            removeFeedAd(item?.data);
            if (item.data?.title?.structs) {
              // 移除 未关注人消息 (你关注的博主，他自己关注的别的博主的微博消息)
              continue;
            }
            if (item?.data?.action_button_icon_dic) {
              delete item.data.action_button_icon_dic;
            }
            // 投票窗口
            removeVoteInfo(item?.data);
            // 快转内容
            if (item?.data?.screen_name_suffix_new?.length > 0) {
              if (item?.data?.screen_name_suffix_new?.[3]?.content === "快转了") {
                continue;
              }
            }
            // 美妆精选季
            if (item?.data?.title?.text?.includes("精选")) {
              continue;
            }
            // 未关注博主
            if (item?.data?.user?.following === false) {
              continue;
            }
            // 关闭关注推荐
            if (item?.data?.user?.unfollowing_recom_switch === 1) {
              item.data.user.unfollowing_recom_switch = 0;
            }
            // 博主top100
            if (item?.data?.tag_struct?.length > 0) {
              item.data.tag_struct = [];
            }
            newItems.push(item);
          } else if (item?.category === "feedBiz") {
            // 管理特别关注按钮
            newItems.push(item);
          } else {
            // 移除其他推广
            continue;
          }
        }
      }
      obj.items = newItems;
    }
  } else if (url.includes("/2/statuses/container_timeline_topic")) {
    // 超话信息流
    if (obj?.header?.data?.follow_guide_info) {
      // 底部弹出的关注按钮
      delete obj.header.data.follow_guide_info;
    }
    if (obj?.items?.length > 0) {
      let newItems = [];
      for (let item of obj.items) {
        if (item?.category === "feed") {
          if (item.data) {
            // 头像挂件,关注按钮
            removeAvatar(item.data);
            if (!isAd(item.data)) {
              if (item?.data?.title?.text?.includes("新人导师")) {
                // 萌新帖 互动赢新人导师
                delete item.data.title;
              }
              newItems.push(item);
            }
          }
        } else if (item?.category === "card") {
          if (![4, 197, 1012,236]?.includes(item?.data?.card_type)) {
            // 4 你可能感兴趣的超话
            // 197 你可能感兴趣的超话
            // 1012 热门超话
            newItems.push(item);
          }
        } else if (item?.category === "group") {
          if (item?.items?.length > 0) {
            if (item?.itemId === null) {
              // 超话页顶部乱七八糟
              let newII = [];
              for (let ii of item.items) {
                if (ii?.data?.hasOwnProperty("itemid")) {
                  if (ii?.data?.itemid?.includes("mine_topics")) {
                    // 保留我的超话
                    newII.push(ii);
                  } else if (ii?.data?.itemid?.includes("tab_search_input")) {
                    // 保留搜索框
                    if (ii?.data?.hotwords) {
                      // 删除热搜词
                      ii.data.hotwords = [{ word: "搜索超话" }];
                    }
                    newII.push(ii);
                  } else if (ii?.data?.itemid?.includes("poiRankList")) {
                    // 保留地点超话 地标人气榜
                    newII.push(ii);
                  }
                } else {
                  // 放行无itemid字段的内容
                  newII.push(ii);
                }
                // 头像挂件,关注按钮
                removeAvatar(ii?.data);
                item.items = newII;
              }
            } else {
              for (let ii of item.items) {
                if (ii?.data) {
                  removeAvatar(ii.data);
                  if (ii?.data?.common_struct) {
                    delete ii.data.common_struct;
                  }
                }
              }
            }
          }
          if (item?.style?.topHover) {
            // 空降发帖背景图
            delete item.style.topHover;
          }
          if (item?.header?.arrayText?.contents?.length > 0) {
            // 你的好友也关注了
            continue;
          }
          newItems.push(item);
        } else {
          // 移除其他推广
          continue;
        }
      }
      obj.items = newItems;
    }
  } else if (url.includes("/2/statuses/extend")) {
    // 微博详情页
    if (obj?.trend?.extra_struct?.extBtnInfo?.btn_picurl?.includes("ad")) {
      delete obj.trend;
    }
    if (obj.trend?.titles) {
      let title = obj.trend.titles.title;
      if (["博主好物种草", "相关推荐"]?.includes(title)) {
        delete obj.trend;
      }
    }
    const item = [
      "bubble_guide_data", // 评论区弹窗
      "button_extra_info", // 推荐评论
      "display_info", // 二楼
      "extend_info", // 拓展卡片
      "floating_button", // 悬浮购物车按钮
      "follow_data", // 关注提醒
      "head_cards", // 超话投票
      "highlight", // 二楼
      "interaction_extra_info", // ai评论
      "page_alerts", // 超话新帖 新用户通知
      "reward_info", // 公益赞赏
      "source_tag_struct" // 二楼
    ];
    if (obj) {
      item.forEach((i) => {
        delete obj[i];
      });
    }
    if (obj?.custom_action_list?.length > 0) {
      let newActions = [];
      for (let item of obj.custom_action_list) {
        let type = item.type;
        let add = itemMenusConfig[type];
        if (type === "mblog_menus_copy_url") {
          newActions.unshift(item);
        } else if (add) {
          newActions.push(item);
        }
      }
      obj.custom_action_list = newActions;
    }
    // 商品橱窗
    if (obj?.has_common_struct) {
      obj.has_common_struct = false;
    }
    // 评论指引
    if (obj?.enable_comment_guide) {
      obj.enable_comment_guide = false;
    }
  } else if (url.includes("/2/statuses/show")) {
    // 信息流推广
    removeFeedAd(obj);
    // 循环引用中的商品橱窗
    if (obj?.text) {
      // 信息流推广
      removeFeedAd(obj.text);
    }
    // 赞赏信息
    if (obj?.reward_info) {
      delete obj.reward_info;
    }
    // 投票窗口
    removeVoteInfo(obj);
  } else if (url.includes("/2/video/tiny_stream_video_list")) {
    if (obj?.statuses?.length > 0) {
      obj.statuses = obj.statuses.filter((m) => !(m.mblogtypename === "广告"));
    }
  } else if (url.includes("/2/!/huati/discovery_home_bottom_channels")) {
    // 超话左上角,右上角图标
    if (obj?.button_configs) {
      delete obj.button_configs;
    }
    // 广场页
    if (obj?.channelInfo?.channel_list?.length > 0) {
      obj.channelInfo.channel_list = obj.channelInfo.channel_list.filter((t) => t.title !== "广场");
    }
  } else if (url.includes("/aj/appicon/list")) {
    if (obj?.data?.list?.length > 0) {
      for (let item of obj.data.list) {
        if (item?.cardType) {
          item.cardType = 2;
        }
      }
    }
  } else if (url.includes("/v1/ad/preload")) {
    // 开屏广告
    if (obj?.ads?.length > 0) {
      for (let item of obj.ads) {
        item.start_time = 3818332800; // Unix 时间戳 2090-12-31 00:00:00
        item.end_time = 3818419199; // Unix 时间戳 2090-12-31 23:59:59
        item.daily_display_cnt = 50; // total_display_cnt: 50
        item.display_duration = 0;
      }
      if (obj?.ads?.creatives?.length > 0) {
        for (let item of obj.ads.creatives) {
          item.start_time = 3818332800; // Unix 时间戳 2090-12-31 00:00:00
          item.end_time = 3818419199; // Unix 时间戳 2090-12-31 23:59:59
          item.daily_display_cnt = 50; // total_display_cnt: 50
          item.display_duration = 0;
        }
      }
    }
  } else if (url.includes("/wbapplua/wbpullad.lua") || url.includes("/preload/get_ad")) {
    // 开屏广告
    if (obj?.cached_ad?.ads?.length > 0) {
      for (let item of obj.cached_ad.ads) {
        item.show_count = 50;
        item.duration = 0; // 60 * 60 * 24 * 365 = 31536000
        item.start_date = 3818332800; // Unix 时间戳 2090-12-31 00:00:00
        item.end_date = 3818419199; // Unix 时间戳 2090-12-31 23:59:59
      }
    }
  }
  $done({ body: JSON.stringify(obj) });
}

// 判断信息流
function isAd(data) {
  if (data) {
    if (data?.mblogtypename?.includes("广告")) {
      return true;
    }
    if (data?.mblogtypename?.includes("热推")) {
      return true;
    }
    if (data?.promotion?.type?.includes("ad")) {
      return true;
    }
    if (data?.content_auth_info?.content_auth_title?.includes("广告")) {
      return true;
    }
    if (data?.ads_material_info?.is_ads === true) {
      return true;
    }
  }
  return false;
}

// 移除头像挂件,关注按钮
function removeAvatar(data) {
  if (data?.user?.avatargj_id) {
    delete data.user.avatargj_id;
  }
  if (data?.user?.avatar_extend_info) {
    delete data.user.avatar_extend_info;
  }
  if (data?.user?.cardid) {
    delete data.user.cardid;
  }
  if (data?.user?.icons) {
    delete data.user.icons;
  }
  if (data?.buttons) {
    delete data.buttons;
  }
  if (data?.cardid) {
    delete data.cardid;
  }
  if (data?.icons) {
    delete data.icons;
  }
  if (data?.pic_bg_new) {
    delete data.pic_bg_new;
  }
  return data;
}

// 移除信息流关注按钮,推广,热评
function removeFeedAd(item) {
  // 头像挂件,关注按钮
  removeAvatar(item);
  if (item?.retweeted_status) {
    removeAvatar(item.retweeted_status);
  }
  // 商品橱窗
  if (item?.common_struct) {
    delete item.common_struct;
  }
  // 移除信息流中的热评
  if (item?.comment_summary) {
    delete item.comment_summary;
  }
   // 移除超话链接
   if (item?.title_source) {
    delete item.title_source;
  }

  // 转发 评论 点赞  只保留评论
  if(item?.mblog_buttons){
    item.mblog_buttons = item.mblog_buttons.filter(item2 => item2.name === "评论");
   
    }
      // 移 
    if (item?.source) {
      delete item.source;
    }
    
    
        // 移除vvip
    if (item?.user) {
    item.user.vvip = 0
    item.user.svip = 0
    item.user.mbrank = 0
    item.user.mbtype = 0
    item.user.verified_type = 0
    item.user.verified_type = {}
    }  
  



}

// 移除投票窗口
function removeVoteInfo(item) {
  if (item?.page_info?.media_info?.vote_info) {
    delete item.page_info.media_info.vote_info;
  }
}
