function v(e, r) {
    for (var a = 0; a < r.length; a++) {
        const n = r[a];
        if (typeof n != "string" && !Array.isArray(n)) {
            for (const t in n)
                if (t !== "default" && !(t in e)) {
                    const i = Object.getOwnPropertyDescriptor(n, t);
                    i && Object.defineProperty(e, t, i.get ? i : {
                        enumerable: !0,
                        get: () => n[t]
                    })
                }
        }
    }
    return Object.freeze(Object.defineProperty(e, Symbol.toStringTag, {
        value: "Module"
    }))
}
var pt = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};

function fr(e) {
    return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e
}

function y(e) {
    var r = e.default;
    if (typeof r == "function") {
        var a = function() {
            return r.apply(this, arguments)
        };
        a.prototype = r.prototype
    } else a = {};
    return Object.defineProperty(a, "__esModule", {
        value: !0
    }), Object.keys(e)
        .forEach(function(n) {
            var t = Object.getOwnPropertyDescriptor(e, n);
            Object.defineProperty(a, n, t.get ? t : {
                enumerable: !0,
                get: function() {
                    return e[n]
                }
            })
        }), a
}
var Xe = {
        exports: {}
    },
    U = {
        exports: {}
    },
    he = function(r, a) {
        return function() {
            for (var t = new Array(arguments.length), i = 0; i < t.length; i++) t[i] = arguments[i];
            return r.apply(a, t)
        }
    };
const lr = v({
        __proto__: null,
        default: he
    }, [he]),
    We = y(lr);
var cr = We,
    S = Object.prototype.toString;

function se(e) {
    return S.call(e) === "[object Array]"
}

function ae(e) {
    return typeof e > "u"
}

function dr(e) {
    return e !== null && !ae(e) && e.constructor !== null && !ae(e.constructor) && typeof e.constructor.isBuffer == "function" && e.constructor.isBuffer(e)
}

function hr(e) {
    return S.call(e) === "[object ArrayBuffer]"
}

function pr(e) {
    return typeof FormData < "u" && e instanceof FormData
}

function mr(e) {
    var r;
    return typeof ArrayBuffer < "u" && ArrayBuffer.isView ? r = ArrayBuffer.isView(e) : r = e && e.buffer && e.buffer instanceof ArrayBuffer, r
}

function vr(e) {
    return typeof e == "string"
}

function yr(e) {
    return typeof e == "number"
}

function Ke(e) {
    return e !== null && typeof e == "object"
}

function N(e) {
    if (S.call(e) !== "[object Object]") return !1;
    var r = Object.getPrototypeOf(e);
    return r === null || r === Object.prototype
}

function br(e) {
    return S.call(e) === "[object Date]"
}

function Er(e) {
    return S.call(e) === "[object File]"
}

function wr(e) {
    return S.call(e) === "[object Blob]"
}

function Ge(e) {
    return S.call(e) === "[object Function]"
}

function Rr(e) {
    return Ke(e) && Ge(e.pipe)
}

function _r(e) {
    return typeof URLSearchParams < "u" && e instanceof URLSearchParams
}

function Sr(e) {
    return e.trim ? e.trim() : e.replace(/^\s+|\s+$/g, "")
}

function Cr() {
    return typeof navigator < "u" && (navigator.product === "ReactNative" || navigator.product === "NativeScript" || navigator.product === "NS") ? !1 : typeof window < "u" && typeof document < "u"
}

function oe(e, r) {
    if (!(e === null || typeof e > "u"))
        if (typeof e != "object" && (e = [e]), se(e))
            for (var a = 0, n = e.length; a < n; a++) r.call(null, e[a], a, e);
        else
            for (var t in e) Object.prototype.hasOwnProperty.call(e, t) && r.call(null, e[t], t, e)
}

function ie() {
    var e = {};

    function r(t, i) {
        N(e[i]) && N(t) ? e[i] = ie(e[i], t) : N(t) ? e[i] = ie({}, t) : se(t) ? e[i] = t.slice() : e[i] = t
    }
    for (var a = 0, n = arguments.length; a < n; a++) oe(arguments[a], r);
    return e
}

function Or(e, r, a) {
    return oe(r, function(t, i) {
        a && typeof t == "function" ? e[i] = cr(t, a) : e[i] = t
    }), e
}

function qr(e) {
    return e.charCodeAt(0) === 65279 && (e = e.slice(1)), e
}
var pe = {
    isArray: se,
    isArrayBuffer: hr,
    isBuffer: dr,
    isFormData: pr,
    isArrayBufferView: mr,
    isString: vr,
    isNumber: yr,
    isObject: Ke,
    isPlainObject: N,
    isUndefined: ae,
    isDate: br,
    isFile: Er,
    isBlob: wr,
    isFunction: Ge,
    isStream: Rr,
    isURLSearchParams: _r,
    isStandardBrowserEnv: Cr,
    forEach: oe,
    merge: ie,
    extend: Or,
    trim: Sr,
    stripBOM: qr
};
const gr = v({
        __proto__: null,
        default: pe
    }, [pe]),
    m = y(gr);
var q = m;

function me(e) {
    return encodeURIComponent(e)
        .replace(/%3A/gi, ":")
        .replace(/%24/g, "$")
        .replace(/%2C/gi, ",")
        .replace(/%20/g, "+")
        .replace(/%5B/gi, "[")
        .replace(/%5D/gi, "]")
}
var ve = function(r, a, n) {
    if (!a) return r;
    var t;
    if (n) t = n(a);
    else if (q.isURLSearchParams(a)) t = a.toString();
    else {
        var i = [];
        q.forEach(a, function(l, f) {
            l === null || typeof l > "u" || (q.isArray(l) ? f = f + "[]" : l = [l], q.forEach(l, function(s) {
                q.isDate(s) ? s = s.toISOString() : q.isObject(s) && (s = JSON.stringify(s)), i.push(me(f) + "=" + me(s))
            }))
        }), t = i.join("&")
    }
    if (t) {
        var u = r.indexOf("#");
        u !== -1 && (r = r.slice(0, u)), r += (r.indexOf("?") === -1 ? "?" : "&") + t
    }
    return r
};
const $r = v({
        __proto__: null,
        default: ve
    }, [ve]),
    Ye = y($r);
var xr = m;

function j() {
    this.handlers = []
}
j.prototype.use = function(r, a, n) {
    return this.handlers.push({
        fulfilled: r,
        rejected: a,
        synchronous: n ? n.synchronous : !1,
        runWhen: n ? n.runWhen : null
    }), this.handlers.length - 1
};
j.prototype.eject = function(r) {
    this.handlers[r] && (this.handlers[r] = null)
};
j.prototype.forEach = function(r) {
    xr.forEach(this.handlers, function(n) {
        n !== null && r(n)
    })
};
var ye = j;
const Ar = v({
        __proto__: null,
        default: ye
    }, [ye]),
    Pr = y(Ar);
var Nr = m,
    be = function(r, a) {
        Nr.forEach(r, function(t, i) {
            i !== a && i.toUpperCase() === a.toUpperCase() && (r[a] = t, delete r[i])
        })
    };
const Tr = v({
        __proto__: null,
        default: be
    }, [be]),
    Ur = y(Tr);
var Ee = function(r, a, n, t, i) {
    return r.config = a, n && (r.code = n), r.request = t, r.response = i, r.isAxiosError = !0, r.toJSON = function() {
        return {
            message: this.message,
            name: this.name,
            description: this.description,
            number: this.number,
            fileName: this.fileName,
            lineNumber: this.lineNumber,
            columnNumber: this.columnNumber,
            stack: this.stack,
            config: this.config,
            code: this.code,
            status: this.response && this.response.status ? this.response.status : null
        }
    }, r
};
const jr = v({
        __proto__: null,
        default: Ee
    }, [Ee]),
    Qe = y(jr);
var k, we;

function Ze() {
    if (we) return k;
    we = 1;
    var e = Qe;
    return k = function(a, n, t, i, u) {
        var o = new Error(a);
        return e(o, n, t, i, u)
    }, k
}
var F, Re;

function Lr() {
    if (Re) return F;
    Re = 1;
    var e = Ze();
    return F = function(a, n, t) {
        var i = t.config.validateStatus;
        !t.status || !i || i(t.status) ? a(t) : n(e("Request failed with status code " + t.status, t.config, null, t.request, t))
    }, F
}
var H, _e;

function Dr() {
    if (_e) return H;
    _e = 1;
    var e = m;
    return H = e.isStandardBrowserEnv() ? function() {
        return {
            write: function(n, t, i, u, o, l) {
                var f = [];
                f.push(n + "=" + encodeURIComponent(t)), e.isNumber(i) && f.push("expires=" + new Date(i)
                    .toGMTString()), e.isString(u) && f.push("path=" + u), e.isString(o) && f.push("domain=" + o), l === !0 && f.push("secure"), document.cookie = f.join("; ")
            },
            read: function(n) {
                var t = document.cookie.match(new RegExp("(^|;\\s*)(" + n + ")=([^;]*)"));
                return t ? decodeURIComponent(t[3]) : null
            },
            remove: function(n) {
                this.write(n, "", Date.now() - 864e5)
            }
        }
    }() : function() {
        return {
            write: function() {},
            read: function() {
                return null
            },
            remove: function() {}
        }
    }(), H
}
var M, Se;

function Br() {
    return Se || (Se = 1, M = function(r) {
        return /^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(r)
    }), M
}
var J, Ce;

function Ir() {
    return Ce || (Ce = 1, J = function(r, a) {
        return a ? r.replace(/\/+$/, "") + "/" + a.replace(/^\/+/, "") : r
    }), J
}
var z, Oe;

function kr() {
    if (Oe) return z;
    Oe = 1;
    var e = Br(),
        r = Ir();
    return z = function(n, t) {
        return n && !e(t) ? r(n, t) : t
    }, z
}
var V, qe;

function Fr() {
    if (qe) return V;
    qe = 1;
    var e = m,
        r = ["age", "authorization", "content-length", "content-type", "etag", "expires", "from", "host", "if-modified-since", "if-unmodified-since", "last-modified", "location", "max-forwards", "proxy-authorization", "referer", "retry-after", "user-agent"];
    return V = function(n) {
        var t = {},
            i, u, o;
        return n && e.forEach(n.split(`
`), function(f) {
            if (o = f.indexOf(":"), i = e.trim(f.substr(0, o))
                .toLowerCase(), u = e.trim(f.substr(o + 1)), i) {
                if (t[i] && r.indexOf(i) >= 0) return;
                i === "set-cookie" ? t[i] = (t[i] ? t[i] : [])
                    .concat([u]) : t[i] = t[i] ? t[i] + ", " + u : u
            }
        }), t
    }, V
}
var X, ge;

function Hr() {
    if (ge) return X;
    ge = 1;
    var e = m;
    return X = e.isStandardBrowserEnv() ? function() {
        var a = /(msie|trident)/i.test(navigator.userAgent),
            n = document.createElement("a"),
            t;

        function i(u) {
            var o = u;
            return a && (n.setAttribute("href", o), o = n.href), n.setAttribute("href", o), {
                href: n.href,
                protocol: n.protocol ? n.protocol.replace(/:$/, "") : "",
                host: n.host,
                search: n.search ? n.search.replace(/^\?/, "") : "",
                hash: n.hash ? n.hash.replace(/^#/, "") : "",
                hostname: n.hostname,
                port: n.port,
                pathname: n.pathname.charAt(0) === "/" ? n.pathname : "/" + n.pathname
            }
        }
        return t = i(window.location.href),
            function(o) {
                var l = e.isString(o) ? i(o) : o;
                return l.protocol === t.protocol && l.host === t.host
            }
    }() : function() {
        return function() {
            return !0
        }
    }(), X
}
var W, $e;

function L() {
    if ($e) return W;
    $e = 1;

    function e(r) {
        this.message = r
    }
    return e.prototype.toString = function() {
        return "Cancel" + (this.message ? ": " + this.message : "")
    }, e.prototype.__CANCEL__ = !0, W = e, W
}
var K, xe;

function Ae() {
    if (xe) return K;
    xe = 1;
    var e = m,
        r = Lr(),
        a = Dr(),
        n = Ye,
        t = kr(),
        i = Fr(),
        u = Hr(),
        o = Ze(),
        l = D(),
        f = L();
    return K = function(s) {
        return new Promise(function(R, w) {
            var $ = s.data,
                x = s.headers,
                A = s.responseType,
                C;

            function fe() {
                s.cancelToken && s.cancelToken.unsubscribe(C), s.signal && s.signal.removeEventListener("abort", C)
            }
            e.isFormData($) && delete x["Content-Type"];
            var d = new XMLHttpRequest;
            if (s.auth) {
                var sr = s.auth.username || "",
                    or = s.auth.password ? unescape(encodeURIComponent(s.auth.password)) : "";
                x.Authorization = "Basic " + btoa(sr + ":" + or)
            }
            var le = t(s.baseURL, s.url);
            d.open(s.method.toUpperCase(), n(le, s.params, s.paramsSerializer), !0), d.timeout = s.timeout;

            function ce() {
                if (!!d) {
                    var b = "getAllResponseHeaders" in d ? i(d.getAllResponseHeaders()) : null,
                        O = !A || A === "text" || A === "json" ? d.responseText : d.response,
                        _ = {
                            data: O,
                            status: d.status,
                            statusText: d.statusText,
                            headers: b,
                            config: s,
                            request: d
                        };
                    r(function(I) {
                        R(I), fe()
                    }, function(I) {
                        w(I), fe()
                    }, _), d = null
                }
            }
            if ("onloadend" in d ? d.onloadend = ce : d.onreadystatechange = function() {
                !d || d.readyState !== 4 || d.status === 0 && !(d.responseURL && d.responseURL.indexOf("file:") === 0) || setTimeout(ce)
            }, d.onabort = function() {
                !d || (w(o("Request aborted", s, "ECONNABORTED", d)), d = null)
            }, d.onerror = function() {
                w(o("Network Error", s, null, d)), d = null
            }, d.ontimeout = function() {
                var O = s.timeout ? "timeout of " + s.timeout + "ms exceeded" : "timeout exceeded",
                    _ = s.transitional || l.transitional;
                s.timeoutErrorMessage && (O = s.timeoutErrorMessage), w(o(O, s, _.clarifyTimeoutError ? "ETIMEDOUT" : "ECONNABORTED", d)), d = null
            }, e.isStandardBrowserEnv()) {
                var de = (s.withCredentials || u(le)) && s.xsrfCookieName ? a.read(s.xsrfCookieName) : void 0;
                de && (x[s.xsrfHeaderName] = de)
            }
            "setRequestHeader" in d && e.forEach(x, function(O, _) {
                typeof $ > "u" && _.toLowerCase() === "content-type" ? delete x[_] : d.setRequestHeader(_, O)
            }), e.isUndefined(s.withCredentials) || (d.withCredentials = !!s.withCredentials), A && A !== "json" && (d.responseType = s.responseType), typeof s.onDownloadProgress == "function" && d.addEventListener("progress", s.onDownloadProgress), typeof s.onUploadProgress == "function" && d.upload && d.upload.addEventListener("progress", s.onUploadProgress), (s.cancelToken || s.signal) && (C = function(b) {
                !d || (w(!b || b && b.type ? new f("canceled") : b), d.abort(), d = null)
            }, s.cancelToken && s.cancelToken.subscribe(C), s.signal && (s.signal.aborted ? C() : s.signal.addEventListener("abort", C))), $ || ($ = null), d.send($)
        })
    }, K
}
var G, Pe;

function D() {
    if (Pe) return G;
    Pe = 1;
    var e = m,
        r = Ur,
        a = Qe,
        n = {
            "Content-Type": "application/x-www-form-urlencoded"
        };

    function t(l, f) {
        !e.isUndefined(l) && e.isUndefined(l["Content-Type"]) && (l["Content-Type"] = f)
    }

    function i() {
        var l;
        return (typeof XMLHttpRequest < "u" || typeof process < "u" && Object.prototype.toString.call(process) === "[object process]") && (l = Ae()), l
    }

    function u(l, f, c) {
        if (e.isString(l)) try {
            return (f || JSON.parse)(l), e.trim(l)
        } catch (s) {
            if (s.name !== "SyntaxError") throw s
        }
        return (c || JSON.stringify)(l)
    }
    var o = {
        transitional: {
            silentJSONParsing: !0,
            forcedJSONParsing: !0,
            clarifyTimeoutError: !1
        },
        adapter: i(),
        transformRequest: [function(f, c) {
            return r(c, "Accept"), r(c, "Content-Type"), e.isFormData(f) || e.isArrayBuffer(f) || e.isBuffer(f) || e.isStream(f) || e.isFile(f) || e.isBlob(f) ? f : e.isArrayBufferView(f) ? f.buffer : e.isURLSearchParams(f) ? (t(c, "application/x-www-form-urlencoded;charset=utf-8"), f.toString()) : e.isObject(f) || c && c["Content-Type"] === "application/json" ? (t(c, "application/json"), u(f)) : f
        }],
        transformResponse: [function(f) {
            var c = this.transitional || o.transitional,
                s = c && c.silentJSONParsing,
                h = c && c.forcedJSONParsing,
                R = !s && this.responseType === "json";
            if (R || h && e.isString(f) && f.length) try {
                return JSON.parse(f)
            } catch (w) {
                if (R) throw w.name === "SyntaxError" ? a(w, this, "E_JSON_PARSE") : w
            }
            return f
        }],
        timeout: 0,
        xsrfCookieName: "XSRF-TOKEN",
        xsrfHeaderName: "X-XSRF-TOKEN",
        maxContentLength: -1,
        maxBodyLength: -1,
        validateStatus: function(f) {
            return f >= 200 && f < 300
        },
        headers: {
            common: {
                Accept: "application/json, text/plain, */*"
            }
        }
    };
    return e.forEach(["delete", "get", "head"], function(f) {
        o.headers[f] = {}
    }), e.forEach(["post", "put", "patch"], function(f) {
        o.headers[f] = e.merge(n)
    }), G = o, G
}
var Mr = m,
    Jr = D(),
    Ne = function(r, a, n) {
        var t = this || Jr;
        return Mr.forEach(n, function(u) {
            r = u.call(t, r, a)
        }), r
    };
const zr = v({
        __proto__: null,
        default: Ne
    }, [Ne]),
    Vr = y(zr);
var Y, Te;

function er() {
    return Te || (Te = 1, Y = function(r) {
        return !!(r && r.__CANCEL__)
    }), Y
}
var Ue = m,
    Q = Vr,
    Xr = er(),
    Wr = D(),
    Kr = L();

function Z(e) {
    if (e.cancelToken && e.cancelToken.throwIfRequested(), e.signal && e.signal.aborted) throw new Kr("canceled")
}
var je = function(r) {
    Z(r), r.headers = r.headers || {}, r.data = Q.call(r, r.data, r.headers, r.transformRequest), r.headers = Ue.merge(r.headers.common || {}, r.headers[r.method] || {}, r.headers), Ue.forEach(["delete", "get", "head", "post", "put", "patch", "common"], function(t) {
        delete r.headers[t]
    });
    var a = r.adapter || Wr.adapter;
    return a(r)
        .then(function(t) {
            return Z(r), t.data = Q.call(r, t.data, t.headers, r.transformResponse), t
        }, function(t) {
            return Xr(t) || (Z(r), t && t.response && (t.response.data = Q.call(r, t.response.data, t.response.headers, r.transformResponse))), Promise.reject(t)
        })
};
const Gr = v({
        __proto__: null,
        default: je
    }, [je]),
    Yr = y(Gr);
var p = m,
    Le = function(r, a) {
        a = a || {};
        var n = {};

        function t(c, s) {
            return p.isPlainObject(c) && p.isPlainObject(s) ? p.merge(c, s) : p.isPlainObject(s) ? p.merge({}, s) : p.isArray(s) ? s.slice() : s
        }

        function i(c) {
            if (p.isUndefined(a[c])) {
                if (!p.isUndefined(r[c])) return t(void 0, r[c])
            } else return t(r[c], a[c])
        }

        function u(c) {
            if (!p.isUndefined(a[c])) return t(void 0, a[c])
        }

        function o(c) {
            if (p.isUndefined(a[c])) {
                if (!p.isUndefined(r[c])) return t(void 0, r[c])
            } else return t(void 0, a[c])
        }

        function l(c) {
            if (c in a) return t(r[c], a[c]);
            if (c in r) return t(void 0, r[c])
        }
        var f = {
            url: u,
            method: u,
            data: u,
            baseURL: o,
            transformRequest: o,
            transformResponse: o,
            paramsSerializer: o,
            timeout: o,
            timeoutMessage: o,
            withCredentials: o,
            adapter: o,
            responseType: o,
            xsrfCookieName: o,
            xsrfHeaderName: o,
            onUploadProgress: o,
            onDownloadProgress: o,
            decompress: o,
            maxContentLength: o,
            maxBodyLength: o,
            transport: o,
            httpAgent: o,
            httpsAgent: o,
            cancelToken: o,
            socketPath: o,
            responseEncoding: o,
            validateStatus: l
        };
        return p.forEach(Object.keys(r)
                .concat(Object.keys(a)),
            function(s) {
                var h = f[s] || i,
                    R = h(s);
                p.isUndefined(R) && h !== l || (n[s] = R)
            }), n
    };
const Qr = v({
        __proto__: null,
        default: Le
    }, [Le]),
    rr = y(Qr);
var ee, De;

function tr() {
    return De || (De = 1, ee = {
        version: "0.24.0"
    }), ee
}
var Zr = tr()
        .version,
    ue = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach(function(e, r) {
    ue[e] = function(n) {
        return typeof n === e || "a" + (r < 1 ? "n " : " ") + e
    }
});
var Be = {};
ue.transitional = function(r, a, n) {
    function t(i, u) {
        return "[Axios v" + Zr + "] Transitional option '" + i + "'" + u + (n ? ". " + n : "")
    }
    return function(i, u, o) {
        if (r === !1) throw new Error(t(u, " has been removed" + (a ? " in " + a : "")));
        return a && !Be[u] && (Be[u] = !0, console.warn(t(u, " has been deprecated since v" + a + " and will be removed in the near future"))), r ? r(i, u, o) : !0
    }
};

function et(e, r, a) {
    if (typeof e != "object") throw new TypeError("options must be an object");
    for (var n = Object.keys(e), t = n.length; t-- > 0;) {
        var i = n[t],
            u = r[i];
        if (u) {
            var o = e[i],
                l = o === void 0 || u(o, i, e);
            if (l !== !0) throw new TypeError("option " + i + " must be " + l);
            continue
        }
        if (a !== !0) throw Error("Unknown option " + i)
    }
}
var Ie = {
    assertOptions: et,
    validators: ue
};
const rt = v({
        __proto__: null,
        default: Ie
    }, [Ie]),
    tt = y(rt);
var nr = m,
    nt = Ye,
    ke = Pr,
    Fe = Yr,
    B = rr,
    ar = tt,
    g = ar.validators;

function P(e) {
    this.defaults = e, this.interceptors = {
        request: new ke,
        response: new ke
    }
}
P.prototype.request = function(r) {
    typeof r == "string" ? (r = arguments[1] || {}, r.url = arguments[0]) : r = r || {}, r = B(this.defaults, r), r.method ? r.method = r.method.toLowerCase() : this.defaults.method ? r.method = this.defaults.method.toLowerCase() : r.method = "get";
    var a = r.transitional;
    a !== void 0 && ar.assertOptions(a, {
        silentJSONParsing: g.transitional(g.boolean),
        forcedJSONParsing: g.transitional(g.boolean),
        clarifyTimeoutError: g.transitional(g.boolean)
    }, !1);
    var n = [],
        t = !0;
    this.interceptors.request.forEach(function(h) {
        typeof h.runWhen == "function" && h.runWhen(r) === !1 || (t = t && h.synchronous, n.unshift(h.fulfilled, h.rejected))
    });
    var i = [];
    this.interceptors.response.forEach(function(h) {
        i.push(h.fulfilled, h.rejected)
    });
    var u;
    if (!t) {
        var o = [Fe, void 0];
        for (Array.prototype.unshift.apply(o, n), o = o.concat(i), u = Promise.resolve(r); o.length;) u = u.then(o.shift(), o.shift());
        return u
    }
    for (var l = r; n.length;) {
        var f = n.shift(),
            c = n.shift();
        try {
            l = f(l)
        } catch (s) {
            c(s);
            break
        }
    }
    try {
        u = Fe(l)
    } catch (s) {
        return Promise.reject(s)
    }
    for (; i.length;) u = u.then(i.shift(), i.shift());
    return u
};
P.prototype.getUri = function(r) {
    return r = B(this.defaults, r), nt(r.url, r.params, r.paramsSerializer)
        .replace(/^\?/, "")
};
nr.forEach(["delete", "get", "head", "options"], function(r) {
    P.prototype[r] = function(a, n) {
        return this.request(B(n || {}, {
            method: r,
            url: a,
            data: (n || {})
                .data
        }))
    }
});
nr.forEach(["post", "put", "patch"], function(r) {
    P.prototype[r] = function(a, n, t) {
        return this.request(B(t || {}, {
            method: r,
            url: a,
            data: n
        }))
    }
});
var He = P;
const at = v({
        __proto__: null,
        default: He
    }, [He]),
    it = y(at);
var re, Me;

function st() {
    if (Me) return re;
    Me = 1;
    var e = L();

    function r(a) {
        if (typeof a != "function") throw new TypeError("executor must be a function.");
        var n;
        this.promise = new Promise(function(u) {
            n = u
        });
        var t = this;
        this.promise.then(function(i) {
            if (!!t._listeners) {
                var u, o = t._listeners.length;
                for (u = 0; u < o; u++) t._listeners[u](i);
                t._listeners = null
            }
        }), this.promise.then = function(i) {
            var u, o = new Promise(function(l) {
                t.subscribe(l), u = l
            })
                .then(i);
            return o.cancel = function() {
                t.unsubscribe(u)
            }, o
        }, a(function(u) {
            t.reason || (t.reason = new e(u), n(t.reason))
        })
    }
    return r.prototype.throwIfRequested = function() {
        if (this.reason) throw this.reason
    }, r.prototype.subscribe = function(n) {
        if (this.reason) {
            n(this.reason);
            return
        }
        this._listeners ? this._listeners.push(n) : this._listeners = [n]
    }, r.prototype.unsubscribe = function(n) {
        if (!!this._listeners) {
            var t = this._listeners.indexOf(n);
            t !== -1 && this._listeners.splice(t, 1)
        }
    }, r.source = function() {
        var n, t = new r(function(u) {
            n = u
        });
        return {
            token: t,
            cancel: n
        }
    }, re = r, re
}
var te, Je;

function ot() {
    return Je || (Je = 1, te = function(r) {
        return function(n) {
            return r.apply(null, n)
        }
    }), te
}
var ne, ze;

function ut() {
    return ze || (ze = 1, ne = function(r) {
        return typeof r == "object" && r.isAxiosError === !0
    }), ne
}
var Ve = m,
    ft = We,
    T = it,
    lt = rr,
    ct = D();

function ir(e) {
    var r = new T(e),
        a = ft(T.prototype.request, r);
    return Ve.extend(a, T.prototype, r), Ve.extend(a, r), a.create = function(t) {
        return ir(lt(e, t))
    }, a
}
var E = ir(ct);
E.Axios = T;
E.Cancel = L();
E.CancelToken = st();
E.isCancel = er();
E.VERSION = tr()
    .version;
E.all = function(r) {
    return Promise.all(r)
};
E.spread = ot();
E.isAxiosError = ut();
U.exports = E;
U.exports.default = E;
const dt = v({
        __proto__: null,
        default: U.exports
    }, [U.exports]),
    ht = y(dt);
(function(e) {
    e.exports = ht
})(Xe);
const mt = fr(Xe.exports);
export {
    mt as A, pt as c, y as g
};
