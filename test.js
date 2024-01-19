

// 新建一个实例对象, 把兼容函数定义到$中, 以便统一调用
let $ = new nobyda();

console.log(`\n抢购成功: 第次抢购数量:消耗积分`);
$.notify('哔哩哔哩漫画抢券', '', `抢购成功, 数量:, 消耗积分:}`);

$.done();
// const $ = new nobyda(); 
// 发送一个通知: $.notify('title', 'subtitle', 'message')
// 持久化读取: $.read('Key')
// POST请求: $.post(url<Object>,callback<Function>)

function nobyda() {
	const isSurge = typeof $httpClient != "undefined";
	const isQuanX = typeof $task != "undefined";
	const isNode = typeof require == "function";
	const node = (() => {
		if (isNode) {
			const request = require('request');
			return {
				request
			}
		} else {
			return null;
		}
	})()
	const adapterStatus = (response) => {
		if (response) {
			if (response.status) {
				response["statusCode"] = response.status
			} else if (response.statusCode) {
				response["status"] = response.statusCode
			}
		}
		return response
	}
	this.read = (key) => {
		if (isQuanX) return $prefs.valueForKey(key)
		if (isSurge) return $persistentStore.read(key)
	}
	this.notify = (title, subtitle, message) => {
		if (isQuanX) $notify(title, subtitle, message)
		if (isSurge) $notification.post(title, subtitle, message)
		if (isNode) console.log(`${title}\n${subtitle}\n${message}`)
	}
	this.post = (options, callback) => {
		options.headers['User-Agent'] = 'User-Agent: Mozilla/5.0 (iPhone; CPU iPhone OS 13_6_1 like Mac OS X) AppleWebKit/609.3.5.0.2 (KHTML, like Gecko) Mobile/17G80 BiliApp/822 mobi_app/ios_comic channel/AppStore BiliComic/822'
		if (isQuanX) {
			if (typeof options == "string") options = {
				url: options
			}
			options["method"] = "POST"
			$task.fetch(options).then(response => {
				callback(null, adapterStatus(response), response.body)
			}, reason => callback(reason.error, null, null))
		}
		if (isSurge) {
			options.headers['X-Surge-Skip-Scripting'] = false
			$httpClient.post(options, (error, response, body) => {
				callback(error, adapterStatus(response), body)
			})
		}
		if (isNode) {
			node.request.post(options, (error, response, body) => {
				callback(error, adapterStatus(response), body)
			})
		}
	}
	this.done = () => {
		if (isQuanX || isSurge) {
			$done()
		}
	}
};
