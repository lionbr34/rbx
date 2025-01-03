! function() {
    var n = {
            3773: function(e, t, n) {
                e.exports = n(1487)
            },
            9117: function(e, t, u) {
                "use strict";
                var c = u(717),
                    l = u(9097),
                    d = u(4717),
                    h = u(8634),
                    v = u(5816),
                    p = u(239);
                e.exports = function(s) {
                    return new Promise(function(t, n) {
                        var r = s.data,
                            a = s.headers;
                        c.isFormData(r) && delete a["Content-Type"];
                        var e, o, i = new XMLHttpRequest;
                        if (s.auth && (e = s.auth.username || "", o = s.auth.password || "", a.Authorization = "Basic " + btoa(e + ":" + o)), i.open(s.method.toUpperCase(), d(s.url, s.params, s.paramsSerializer), !0), i.timeout = s.timeout, i.onreadystatechange = function() {
                                var e;
                                i && 4 === i.readyState && (0 !== i.status || i.responseURL && 0 === i.responseURL.indexOf("file:")) && (e = "getAllResponseHeaders" in i ? h(i.getAllResponseHeaders()) : null, e = {
                                    data: s.responseType && "text" !== s.responseType ? i.response : i.responseText,
                                    status: i.status,
                                    statusText: i.statusText,
                                    headers: e,
                                    config: s,
                                    request: i
                                }, l(t, n, e), i = null)
                            }, i.onerror = function() {
                                n(p("Network Error", s, null, i)), i = null
                            }, i.ontimeout = function() {
                                n(p("timeout of " + s.timeout + "ms exceeded", s, "ECONNABORTED", i)), i = null
                            }, c.isStandardBrowserEnv() && (o = u(4076), (o = (s.withCredentials || v(s.url)) && s.xsrfCookieName ? o.read(s.xsrfCookieName) : void 0) && (a[s.xsrfHeaderName] = o)), "setRequestHeader" in i && c.forEach(a, function(e, t) {
                                void 0 === r && "content-type" === t.toLowerCase() ? delete a[t] : i.setRequestHeader(t, e)
                            }), s.withCredentials && (i.withCredentials = !0), s.responseType) try {
                            i.responseType = s.responseType
                        } catch (e) {
                            if ("json" !== s.responseType) throw e
                        }
                        "function" == typeof s.onDownloadProgress && i.addEventListener("progress", s.onDownloadProgress), "function" == typeof s.onUploadProgress && i.upload && i.upload.addEventListener("progress", s.onUploadProgress), s.cancelToken && s.cancelToken.promise.then(function(e) {
                            i && (i.abort(), n(e), i = null)
                        }), void 0 === r && (r = null), i.send(r)
                    })
                }
            },
            1487: function(e, t, n) {
                "use strict";
                var r = n(717),
                    a = n(6272),
                    o = n(1158),
                    i = n(2896);

                function s(e) {
                    var t = new o(e),
                        e = a(o.prototype.request, t);
                    return r.extend(e, o.prototype, t), r.extend(e, t), e
                }
                var u = s(i);
                u.Axios = o, u.create = function(e) {
                    return s(r.merge(i, e))
                }, u.Cancel = n(4458), u.CancelToken = n(6126), u.isCancel = n(8427), u.all = function(e) {
                    return Promise.all(e)
                }, u.spread = n(464), e.exports = u, e.exports.default = u
            },
            4458: function(e) {
                "use strict";

                function t(e) {
                    this.message = e
                }
                t.prototype.toString = function() {
                    return "Cancel" + (this.message ? ": " + this.message : "")
                }, t.prototype.__CANCEL__ = !0, e.exports = t
            },
            6126: function(e, t, n) {
                "use strict";
                var r = n(4458);

                function a(e) {
                    if ("function" != typeof e) throw new TypeError("executor must be a function.");
                    var t;
                    this.promise = new Promise(function(e) {
                        t = e
                    });
                    var n = this;
                    e(function(e) {
                        n.reason || (n.reason = new r(e), t(n.reason))
                    })
                }
                a.prototype.throwIfRequested = function() {
                    if (this.reason) throw this.reason
                }, a.source = function() {
                    var t;
                    return {
                        token: new a(function(e) {
                            t = e
                        }),
                        cancel: t
                    }
                }, e.exports = a
            },
            8427: function(e) {
                "use strict";
                e.exports = function(e) {
                    return !(!e || !e.__CANCEL__)
                }
            },
            1158: function(e, t, n) {
                "use strict";
                var a = n(2896),
                    o = n(717),
                    r = n(9143),
                    i = n(3093);

                function s(e) {
                    this.defaults = e, this.interceptors = {
                        request: new r,
                        response: new r
                    }
                }
                s.prototype.request = function(e, t) {
                    "string" == typeof e && (e = o.merge({
                        url: arguments[0]
                    }, t)), (e = o.merge(a, {
                        method: "get"
                    }, this.defaults, e)).method = e.method.toLowerCase();
                    var n = [i, void 0],
                        r = Promise.resolve(e);
                    for (this.interceptors.request.forEach(function(e) {
                            n.unshift(e.fulfilled, e.rejected)
                        }), this.interceptors.response.forEach(function(e) {
                            n.push(e.fulfilled, e.rejected)
                        }); n.length;) r = r.then(n.shift(), n.shift());
                    return r
                }, o.forEach(["delete", "get", "head", "options"], function(n) {
                    s.prototype[n] = function(e, t) {
                        return this.request(o.merge(t || {}, {
                            method: n,
                            url: e
                        }))
                    }
                }), o.forEach(["post", "put", "patch"], function(r) {
                    s.prototype[r] = function(e, t, n) {
                        return this.request(o.merge(n || {}, {
                            method: r,
                            url: e,
                            data: t
                        }))
                    }
                }), e.exports = s
            },
            9143: function(e, t, n) {
                "use strict";
                var r = n(717);

                function a() {
                    this.handlers = []
                }
                a.prototype.use = function(e, t) {
                    return this.handlers.push({
                        fulfilled: e,
                        rejected: t
                    }), this.handlers.length - 1
                }, a.prototype.eject = function(e) {
                    this.handlers[e] && (this.handlers[e] = null)
                }, a.prototype.forEach = function(t) {
                    r.forEach(this.handlers, function(e) {
                        null !== e && t(e)
                    })
                }, e.exports = a
            },
            239: function(e, t, n) {
                "use strict";
                var o = n(5120);
                e.exports = function(e, t, n, r, a) {
                    e = new Error(e);
                    return o(e, t, n, r, a)
                }
            },
            3093: function(e, t, n) {
                "use strict";
                var r = n(717),
                    a = n(5794),
                    o = n(8427),
                    i = n(2896),
                    s = n(812),
                    u = n(1474);

                function c(e) {
                    e.cancelToken && e.cancelToken.throwIfRequested()
                }
                e.exports = function(t) {
                    return c(t), t.baseURL && !s(t.url) && (t.url = u(t.baseURL, t.url)), t.headers = t.headers || {}, t.data = a(t.data, t.headers, t.transformRequest), t.headers = r.merge(t.headers.common || {}, t.headers[t.method] || {}, t.headers || {}), r.forEach(["delete", "get", "head", "post", "put", "patch", "common"], function(e) {
                        delete t.headers[e]
                    }), (t.adapter || i.adapter)(t).then(function(e) {
                        return c(t), e.data = a(e.data, e.headers, t.transformResponse), e
                    }, function(e) {
                        return o(e) || (c(t), e && e.response && (e.response.data = a(e.response.data, e.response.headers, t.transformResponse))), Promise.reject(e)
                    })
                }
            },
            5120: function(e) {
                "use strict";
                e.exports = function(e, t, n, r, a) {
                    return e.config = t, n && (e.code = n), e.request = r, e.response = a, e
                }
            },
            9097: function(e, t, n) {
                "use strict";
                var a = n(239);
                e.exports = function(e, t, n) {
                    var r = n.config.validateStatus;
                    n.status && r && !r(n.status) ? t(a("Request failed with status code " + n.status, n.config, null, n.request, n)) : e(n)
                }
            },
            5794: function(e, t, n) {
                "use strict";
                var r = n(717);
                e.exports = function(t, n, e) {
                    return r.forEach(e, function(e) {
                        t = e(t, n)
                    }), t
                }
            },
            2896: function(e, t, n) {
                "use strict";
                var r = n(717),
                    a = n(1890),
                    o = {
                        "Content-Type": "application/x-www-form-urlencoded"
                    };

                function i(e, t) {
                    !r.isUndefined(e) && r.isUndefined(e["Content-Type"]) && (e["Content-Type"] = t)
                }
                var s, u = {
                    adapter: ("undefined" == typeof XMLHttpRequest && "undefined" == typeof process || (s = n(9117)), s),
                    transformRequest: [function(e, t) {
                        return a(t, "Content-Type"), r.isFormData(e) || r.isArrayBuffer(e) || r.isBuffer(e) || r.isStream(e) || r.isFile(e) || r.isBlob(e) ? e : r.isArrayBufferView(e) ? e.buffer : r.isURLSearchParams(e) ? (i(t, "application/x-www-form-urlencoded;charset=utf-8"), e.toString()) : r.isObject(e) ? (i(t, "application/json;charset=utf-8"), JSON.stringify(e)) : e
                    }],
                    transformResponse: [function(e) {
                        if ("string" == typeof e) try {
                            e = JSON.parse(e)
                        } catch (e) {}
                        return e
                    }],
                    timeout: 0,
                    xsrfCookieName: "XSRF-TOKEN",
                    xsrfHeaderName: "X-XSRF-TOKEN",
                    maxContentLength: -1,
                    validateStatus: function(e) {
                        return 200 <= e && e < 300
                    },
                    headers: {
                        common: {
                            Accept: "application/json, text/plain, */*"
                        }
                    }
                };
                r.forEach(["delete", "get", "head"], function(e) {
                    u.headers[e] = {}
                }), r.forEach(["post", "put", "patch"], function(e) {
                    u.headers[e] = r.merge(o)
                }), e.exports = u
            },
            6272: function(e) {
                "use strict";
                e.exports = function(n, r) {
                    return function() {
                        for (var e = new Array(arguments.length), t = 0; t < e.length; t++) e[t] = arguments[t];
                        return n.apply(r, e)
                    }
                }
            },
            4717: function(e, t, n) {
                "use strict";
                var a = n(717);

                function o(e) {
                    return encodeURIComponent(e).replace(/%40/gi, "@").replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]")
                }
                e.exports = function(e, t, n) {
                    if (!t) return e;
                    var r, t = n ? n(t) : a.isURLSearchParams(t) ? t.toString() : (r = [], a.forEach(t, function(e, t) {
                        null != e && (a.isArray(e) ? t += "[]" : e = [e], a.forEach(e, function(e) {
                            a.isDate(e) ? e = e.toISOString() : a.isObject(e) && (e = JSON.stringify(e)), r.push(o(t) + "=" + o(e))
                        }))
                    }), r.join("&"));
                    return t && (e += (-1 === e.indexOf("?") ? "?" : "&") + t), e
                }
            },
            1474: function(e) {
                "use strict";
                e.exports = function(e, t) {
                    return t ? e.replace(/\/+$/, "") + "/" + t.replace(/^\/+/, "") : e
                }
            },
            4076: function(e, t, n) {
                "use strict";
                var s = n(717);
                e.exports = s.isStandardBrowserEnv() ? {
                    write: function(e, t, n, r, a, o) {
                        var i = [];
                        i.push(e + "=" + encodeURIComponent(t)), s.isNumber(n) && i.push("expires=" + new Date(n).toGMTString()), s.isString(r) && i.push("path=" + r), s.isString(a) && i.push("domain=" + a), !0 === o && i.push("secure"), document.cookie = i.join("; ")
                    },
                    read: function(e) {
                        e = document.cookie.match(new RegExp("(^|;\\s*)(" + e + ")=([^;]*)"));
                        return e ? decodeURIComponent(e[3]) : null
                    },
                    remove: function(e) {
                        this.write(e, "", Date.now() - 864e5)
                    }
                } : {
                    write: function() {},
                    read: function() {
                        return null
                    },
                    remove: function() {}
                }
            },
            812: function(e) {
                "use strict";
                e.exports = function(e) {
                    return /^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(e)
                }
            },
            5816: function(e, t, n) {
                "use strict";
                var r, a, o, i = n(717);

                function s(e) {
                    return a && (o.setAttribute("href", e), e = o.href), o.setAttribute("href", e), {
                        href: o.href,
                        protocol: o.protocol ? o.protocol.replace(/:$/, "") : "",
                        host: o.host,
                        search: o.search ? o.search.replace(/^\?/, "") : "",
                        hash: o.hash ? o.hash.replace(/^#/, "") : "",
                        hostname: o.hostname,
                        port: o.port,
                        pathname: "/" === o.pathname.charAt(0) ? o.pathname : "/" + o.pathname
                    }
                }
                e.exports = i.isStandardBrowserEnv() ? (a = /(msie|trident)/i.test(navigator.userAgent), o = document.createElement("a"), r = s(window.location.href), function(e) {
                    e = i.isString(e) ? s(e) : e;
                    return e.protocol === r.protocol && e.host === r.host
                }) : function() {
                    return !0
                }
            },
            1890: function(e, t, n) {
                "use strict";
                var a = n(717);
                e.exports = function(n, r) {
                    a.forEach(n, function(e, t) {
                        t !== r && t.toUpperCase() === r.toUpperCase() && (n[r] = e, delete n[t])
                    })
                }
            },
            8634: function(e, t, n) {
                "use strict";
                var a = n(717),
                    o = ["age", "authorization", "content-length", "content-type", "etag", "expires", "from", "host", "if-modified-since", "if-unmodified-since", "last-modified", "location", "max-forwards", "proxy-authorization", "referer", "retry-after", "user-agent"];
                e.exports = function(e) {
                    var t, n, r = {};
                    return e && a.forEach(e.split("\n"), function(e) {
                        n = e.indexOf(":"), t = a.trim(e.substr(0, n)).toLowerCase(), n = a.trim(e.substr(n + 1)), t && (r[t] && 0 <= o.indexOf(t) || (r[t] = "set-cookie" === t ? (r[t] || []).concat([n]) : r[t] ? r[t] + ", " + n : n))
                    }), r
                }
            },
            464: function(e) {
                "use strict";
                e.exports = function(t) {
                    return function(e) {
                        return t.apply(null, e)
                    }
                }
            },
            717: function(e, t, n) {
                "use strict";

                function o(e) {
                    return (o = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                        return typeof e
                    } : function(e) {
                        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                    })(e)
                }
                var a = n(6272),
                    n = n(4297),
                    r = Object.prototype.toString;

                function i(e) {
                    return "[object Array]" === r.call(e)
                }

                function s(e) {
                    return null !== e && "object" === o(e)
                }

                function u(e) {
                    return "[object Function]" === r.call(e)
                }

                function c(e, t) {
                    if (null != e)
                        if ("object" !== o(e) && (e = [e]), i(e))
                            for (var n = 0, r = e.length; n < r; n++) t.call(null, e[n], n, e);
                        else
                            for (var a in e) Object.prototype.hasOwnProperty.call(e, a) && t.call(null, e[a], a, e)
                }
                e.exports = {
                    isArray: i,
                    isArrayBuffer: function(e) {
                        return "[object ArrayBuffer]" === r.call(e)
                    },
                    isBuffer: n,
                    isFormData: function(e) {
                        return "undefined" != typeof FormData && e instanceof FormData
                    },
                    isArrayBufferView: function(e) {
                        return e = "undefined" != typeof ArrayBuffer && ArrayBuffer.isView ? ArrayBuffer.isView(e) : e && e.buffer && e.buffer instanceof ArrayBuffer
                    },
                    isString: function(e) {
                        return "string" == typeof e
                    },
                    isNumber: function(e) {
                        return "number" == typeof e
                    },
                    isObject: s,
                    isUndefined: function(e) {
                        return void 0 === e
                    },
                    isDate: function(e) {
                        return "[object Date]" === r.call(e)
                    },
                    isFile: function(e) {
                        return "[object File]" === r.call(e)
                    },
                    isBlob: function(e) {
                        return "[object Blob]" === r.call(e)
                    },
                    isFunction: u,
                    isStream: function(e) {
                        return s(e) && u(e.pipe)
                    },
                    isURLSearchParams: function(e) {
                        return "undefined" != typeof URLSearchParams && e instanceof URLSearchParams
                    },
                    isStandardBrowserEnv: function() {
                        return ("undefined" == typeof navigator || "ReactNative" !== navigator.product) && ("undefined" != typeof window && "undefined" != typeof document)
                    },
                    forEach: c,
                    merge: function n() {
                        var r = {};

                        function e(e, t) {
                            "object" === o(r[t]) && "object" === o(e) ? r[t] = n(r[t], e) : r[t] = e
                        }
                        for (var t = 0, a = arguments.length; t < a; t++) c(arguments[t], e);
                        return r
                    },
                    extend: function(n, e, r) {
                        return c(e, function(e, t) {
                            n[t] = r && "function" == typeof e ? a(e, r) : e
                        }), n
                    },
                    trim: function(e) {
                        return e.replace(/^\s*/, "").replace(/\s*$/, "")
                    }
                }
            },
            1745: function(e) {
                "use strict";

                function n(e) {
                    return (n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                        return typeof e
                    } : function(e) {
                        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                    })(e)
                }
                var t = "%[a-f0-9]{2}",
                    a = new RegExp(t, "gi"),
                    s = new RegExp("(" + t + ")+", "gi");

                function u(t) {
                    try {
                        return decodeURIComponent(t)
                    } catch (e) {
                        for (var n = t.match(a), r = 1; r < n.length; r++) n = (t = function e(t, n) {
                            try {
                                return decodeURIComponent(t.join(""))
                            } catch (e) {}
                            if (1 === t.length) return t;
                            n = n || 1;
                            var r = t.slice(0, n),
                                n = t.slice(n);
                            return Array.prototype.concat.call([], e(r), e(n))
                        }(n, r).join("")).match(a);
                        return t
                    }
                }
                e.exports = function(t) {
                    if ("string" != typeof t) throw new TypeError("Expected `encodedURI` to be of type `string`, got `" + n(t) + "`");
                    try {
                        return t = t.replace(/\+/g, " "), decodeURIComponent(t)
                    } catch (e) {
                        return function(e) {
                            for (var t = {
                                    "%FE%FF": "��",
                                    "%FF%FE": "��"
                                }, n = s.exec(e); n;) {
                                try {
                                    t[n[0]] = decodeURIComponent(n[0])
                                } catch (e) {
                                    var r = u(n[0]);
                                    r !== n[0] && (t[n[0]] = r)
                                }
                                n = s.exec(e)
                            }
                            t["%C2"] = "�";
                            for (var a = Object.keys(t), o = 0; o < a.length; o++) {
                                var i = a[o];
                                e = e.replace(new RegExp(i, "g"), t[i])
                            }
                            return e
                        }(t)
                    }
                }
            },
            4297: function(e) {
                /*!
                 * Determine if an object is a Buffer
                 *
                 * @author   Feross Aboukhadijeh <https://feross.org>
                 * @license  MIT
                 */
                e.exports = function(e) {
                    return null != e && null != e.constructor && "function" == typeof e.constructor.isBuffer && e.constructor.isBuffer(e)
                }
            },
            2149: function(R, O, D) {
                var x;

                function E(e) {
                    return (E = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                        return typeof e
                    } : function(e) {
                        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                    })(e)
                }
                /*! https://mths.be/punycode v1.3.2 by @mathias */
                R = D.nmd(R),
                    function(e) {
                        var t = "object" == E(O) && O && !O.nodeType && O,
                            n = "object" == E(R) && R && !R.nodeType && R,
                            r = "object" == (void 0 === D.g ? "undefined" : E(D.g)) && D.g;
                        r.global !== r && r.window !== r && r.self !== r || (e = r);
                        var a, o, g = 2147483647,
                            y = 36,
                            G = 1,
                            I = 26,
                            i = 38,
                            s = 700,
                            b = 72,
                            P = 128,
                            w = "-",
                            u = /^xn--/,
                            c = /[^\x20-\x7E]/,
                            l = /[\x2E\u3002\uFF0E\uFF61]/g,
                            d = {
                                overflow: "Overflow: input needs wider integers to process",
                                "not-basic": "Illegal input >= 0x80 (not a basic code point)",
                                "invalid-input": "Invalid input"
                            },
                            h = y - G,
                            C = Math.floor,
                            T = String.fromCharCode;

                        function A(e) {
                            throw RangeError(d[e])
                        }

                        function v(e, t) {
                            for (var n = e.length, r = []; n--;) r[n] = t(e[n]);
                            return r
                        }

                        function p(e, t) {
                            var n = e.split("@"),
                                r = "";
                            return 1 < n.length && (r = n[0] + "@", e = n[1]), r + v((e = e.replace(l, ".")).split("."), t).join(".")
                        }

                        function L(e) {
                            for (var t, n, r = [], a = 0, o = e.length; a < o;) 55296 <= (t = e.charCodeAt(a++)) && t <= 56319 && a < o ? 56320 == (64512 & (n = e.charCodeAt(a++))) ? r.push(((1023 & t) << 10) + (1023 & n) + 65536) : (r.push(t), a--) : r.push(t);
                            return r
                        }

                        function f(e) {
                            return v(e, function(e) {
                                var t = "";
                                return 65535 < e && (t += T((e -= 65536) >>> 10 & 1023 | 55296), e = 56320 | 1023 & e), t += T(e)
                            }).join("")
                        }

                        function q(e, t) {
                            return e + 22 + 75 * (e < 26) - ((0 != t) << 5)
                        }

                        function S(e, t, n) {
                            var r = 0;
                            for (e = n ? C(e / s) : e >> 1, e += C(e / t); h * I >> 1 < e; r += y) e = C(e / h);
                            return C(r + (h + 1) * e / (e + i))
                        }

                        function m(e) {
                            var t, n, r, a, o, i, s, u = [],
                                c = e.length,
                                l = 0,
                                d = P,
                                h = b,
                                v = e.lastIndexOf(w);
                            for (v < 0 && (v = 0), n = 0; n < v; ++n) 128 <= e.charCodeAt(n) && A("not-basic"), u.push(e.charCodeAt(n));
                            for (r = 0 < v ? v + 1 : 0; r < c;) {
                                for (a = l, o = 1, i = y; c <= r && A("invalid-input"), s = e.charCodeAt(r++), (y <= (s = s - 48 < 10 ? s - 22 : s - 65 < 26 ? s - 65 : s - 97 < 26 ? s - 97 : y) || s > C((g - l) / o)) && A("overflow"), l += s * o, !(s < (s = i <= h ? G : h + I <= i ? I : i - h)); i += y) o > C(g / (s = y - s)) && A("overflow"), o *= s;
                                h = S(l - a, t = u.length + 1, 0 == a), C(l / t) > g - d && A("overflow"), d += C(l / t), l %= t, u.splice(l++, 0, d)
                            }
                            return f(u)
                        }

                        function U(e) {
                            for (var t, n, r, a, o, i, s, u, c, l, d, h = [], v = (e = L(e)).length, p = P, f = b, m = t = 0; m < v; ++m)(u = e[m]) < 128 && h.push(T(u));
                            for (n = r = h.length, r && h.push(w); n < v;) {
                                for (a = g, m = 0; m < v; ++m) p <= (u = e[m]) && u < a && (a = u);
                                for (a - p > C((g - t) / (c = n + 1)) && A("overflow"), t += (a - p) * c, p = a, m = 0; m < v; ++m)
                                    if ((u = e[m]) < p && ++t > g && A("overflow"), u == p) {
                                        for (o = t, i = y; !(o < (s = i <= f ? G : f + I <= i ? I : i - f)); i += y) d = o - s, l = y - s, h.push(T(q(s + d % l, 0))), o = C(d / l);
                                        h.push(T(q(o, 0))), f = S(t, c, n == r), t = 0, ++n
                                    }++t, ++p
                            }
                            return h.join("")
                        }
                        if (a = {
                                version: "1.3.2",
                                ucs2: {
                                    decode: L,
                                    encode: f
                                },
                                decode: m,
                                encode: U,
                                toASCII: function(e) {
                                    return p(e, function(e) {
                                        return c.test(e) ? "xn--" + U(e) : e
                                    })
                                },
                                toUnicode: function(e) {
                                    return p(e, function(e) {
                                        return u.test(e) ? m(e.slice(4).toLowerCase()) : e
                                    })
                                }
                            }, "object" == E(D.amdO) && D.amdO) void 0 === (x = function() {
                            return a
                        }.call(O, D, O, R)) || (R.exports = x);
                        else if (t && n)
                            if (R.exports == t) n.exports = a;
                            else
                                for (o in a) a.hasOwnProperty(o) && (t[o] = a[o]);
                        else e.punycode = a
                    }(this)
            },
            6933: function(e, s, t) {
                "use strict";

                function p(e, t) {
                    return function(e) {
                        if (Array.isArray(e)) return e
                    }(e) || function(e, t) {
                        if ("undefined" == typeof Symbol || !(Symbol.iterator in Object(e))) return;
                        var n = [],
                            r = !0,
                            a = !1,
                            o = void 0;
                        try {
                            for (var i, s = e[Symbol.iterator](); !(r = (i = s.next()).done) && (n.push(i.value), !t || n.length !== t); r = !0);
                        } catch (e) {
                            a = !0, o = e
                        } finally {
                            try {
                                r || null == s.return || s.return()
                            } finally {
                                if (a) throw o
                            }
                        }
                        return n
                    }(e, t) || m(e, t) || function() {
                        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                    }()
                }

                function f(e) {
                    return (f = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                        return typeof e
                    } : function(e) {
                        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                    })(e)
                }

                function c(e) {
                    return function(e) {
                        if (Array.isArray(e)) return r(e)
                    }(e) || function(e) {
                        if ("undefined" != typeof Symbol && Symbol.iterator in Object(e)) return Array.from(e)
                    }(e) || m(e) || function() {
                        throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                    }()
                }

                function m(e, t) {
                    if (e) {
                        if ("string" == typeof e) return r(e, t);
                        var n = Object.prototype.toString.call(e).slice(8, -1);
                        return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? r(e, t) : void 0
                    }
                }

                function r(e, t) {
                    (null == t || t > e.length) && (t = e.length);
                    for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                    return r
                }
                var n = t(3162),
                    a = t(1745),
                    g = t(9393);

                function y(e) {
                    if ("string" != typeof e || 1 !== e.length) throw new TypeError("arrayFormatSeparator must be single character string")
                }

                function l(e, t) {
                    return t.encode ? (t.strict ? n : encodeURIComponent)(e) : e
                }

                function G(e, t) {
                    return t.decode ? a(e) : e
                }

                function u(e) {
                    var t = e.indexOf("#");
                    return -1 !== t && (e = e.slice(0, t)), e
                }

                function o(e) {
                    var t = (e = u(e)).indexOf("?");
                    return -1 === t ? "" : e.slice(t + 1)
                }

                function I(e, t) {
                    return t.parseNumbers && !Number.isNaN(Number(e)) && "string" == typeof e && "" !== e.trim() ? e = Number(e) : !t.parseBooleans || null === e || "true" !== e.toLowerCase() && "false" !== e.toLowerCase() || (e = "true" === e.toLowerCase()), e
                }

                function i(e, t) {
                    y((t = Object.assign({
                        decode: !0,
                        sort: !0,
                        arrayFormat: "none",
                        arrayFormatSeparator: ",",
                        parseNumbers: !1,
                        parseBooleans: !1
                    }, t)).arrayFormatSeparator);
                    var n = function(o) {
                            var r;
                            switch (o.arrayFormat) {
                                case "index":
                                    return function(e, t, n) {
                                        r = /\[(\d*)\]$/.exec(e), e = e.replace(/\[\d*\]$/, ""), r ? (void 0 === n[e] && (n[e] = {}), n[e][r[1]] = t) : n[e] = t
                                    };
                                case "bracket":
                                    return function(e, t, n) {
                                        r = /(\[\])$/.exec(e), e = e.replace(/\[\]$/, ""), r ? void 0 !== n[e] ? n[e] = [].concat(n[e], t) : n[e] = [t] : n[e] = t
                                    };
                                case "comma":
                                case "separator":
                                    return function(e, t, n) {
                                        var r = "string" == typeof t && t.includes(o.arrayFormatSeparator),
                                            a = "string" == typeof t && !r && G(t, o).includes(o.arrayFormatSeparator);
                                        t = a ? G(t, o) : t;
                                        t = r || a ? t.split(o.arrayFormatSeparator).map(function(e) {
                                            return G(e, o)
                                        }) : null === t ? t : G(t, o);
                                        n[e] = t
                                    };
                                default:
                                    return function(e, t, n) {
                                        void 0 !== n[e] ? n[e] = [].concat(n[e], t) : n[e] = t
                                    }
                            }
                        }(t),
                        r = Object.create(null);
                    if ("string" != typeof e) return r;
                    if (!(e = e.trim().replace(/^[?#&]/, ""))) return r;
                    var a = function(e, t) {
                        var n;
                        if ("undefined" == typeof Symbol || null == e[Symbol.iterator]) {
                            if (Array.isArray(e) || (n = m(e)) || t && e && "number" == typeof e.length) {
                                n && (e = n);
                                var r = 0,
                                    t = function() {};
                                return {
                                    s: t,
                                    n: function() {
                                        return r >= e.length ? {
                                            done: !0
                                        } : {
                                            done: !1,
                                            value: e[r++]
                                        }
                                    },
                                    e: function(e) {
                                        throw e
                                    },
                                    f: t
                                }
                            }
                            throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                        }
                        var a, o = !0,
                            i = !1;
                        return {
                            s: function() {
                                n = e[Symbol.iterator]()
                            },
                            n: function() {
                                var e = n.next();
                                return o = e.done, e
                            },
                            e: function(e) {
                                i = !0, a = e
                            },
                            f: function() {
                                try {
                                    o || null == n.return || n.return()
                                } finally {
                                    if (i) throw a
                                }
                            }
                        }
                    }(e.split("&"));
                    try {
                        for (a.s(); !(i = a.n()).done;) {
                            var o = i.value,
                                i = p(g(t.decode ? o.replace(/\+/g, " ") : o, "="), 2),
                                o = i[0],
                                i = void 0 === (i = i[1]) ? null : ["comma", "separator"].includes(t.arrayFormat) ? i : G(i, t);
                            n(G(o, t), i, r)
                        }
                    } catch (e) {
                        a.e(e)
                    } finally {
                        a.f()
                    }
                    for (var s = 0, u = Object.keys(r); s < u.length; s++) {
                        var c = u[s],
                            l = r[c];
                        if ("object" === f(l) && null !== l)
                            for (var d = 0, h = Object.keys(l); d < h.length; d++) {
                                var v = h[d];
                                l[v] = I(l[v], t)
                            } else r[c] = I(l, t)
                    }
                    return !1 === t.sort ? r : (!0 === t.sort ? Object.keys(r).sort() : Object.keys(r).sort(t.sort)).reduce(function(e, t) {
                        var n = r[t];
                        return Boolean(n) && "object" === f(n) && !Array.isArray(n) ? e[t] = function e(t) {
                            return Array.isArray(t) ? t.sort() : "object" === f(t) ? e(Object.keys(t)).sort(function(e, t) {
                                return Number(e) - Number(t)
                            }).map(function(e) {
                                return t[e]
                            }) : t
                        }(n) : e[t] = n, e
                    }, Object.create(null))
                }
                s.extract = o, s.parse = i, s.stringify = function(n, r) {
                    if (!n) return "";
                    y((r = Object.assign({
                        encode: !0,
                        strict: !0,
                        arrayFormat: "none",
                        arrayFormatSeparator: ","
                    }, r)).arrayFormatSeparator);
                    for (var e, a = function(a) {
                            switch (a.arrayFormat) {
                                case "index":
                                    return function(r) {
                                        return function(e, t) {
                                            var n = e.length;
                                            return void 0 === t || a.skipNull && null === t || a.skipEmptyString && "" === t ? e : [].concat(c(e), null === t ? [
                                                [l(r, a), "[", n, "]"].join("")
                                            ] : [
                                                [l(r, a), "[", l(n, a), "]=", l(t, a)].join("")
                                            ])
                                        }
                                    };
                                case "bracket":
                                    return function(n) {
                                        return function(e, t) {
                                            return void 0 === t || a.skipNull && null === t || a.skipEmptyString && "" === t ? e : [].concat(c(e), null === t ? [
                                                [l(n, a), "[]"].join("")
                                            ] : [
                                                [l(n, a), "[]=", l(t, a)].join("")
                                            ])
                                        }
                                    };
                                case "comma":
                                case "separator":
                                    return function(n) {
                                        return function(e, t) {
                                            return null == t || 0 === t.length ? e : 0 === e.length ? [
                                                [l(n, a), "=", l(t, a)].join("")
                                            ] : [
                                                [e, l(t, a)].join(a.arrayFormatSeparator)
                                            ]
                                        }
                                    };
                                default:
                                    return function(n) {
                                        return function(e, t) {
                                            return void 0 === t || a.skipNull && null === t || a.skipEmptyString && "" === t ? e : [].concat(c(e), null === t ? [l(n, a)] : [
                                                [l(n, a), "=", l(t, a)].join("")
                                            ])
                                        }
                                    }
                            }
                        }(r), t = {}, o = 0, i = Object.keys(n); o < i.length; o++) {
                        var s = i[o];
                        e = s, r.skipNull && null == n[e] || r.skipEmptyString && "" === n[e] || (t[s] = n[s])
                    }
                    var u = Object.keys(t);
                    return !1 !== r.sort && u.sort(r.sort), u.map(function(e) {
                        var t = n[e];
                        return void 0 === t ? "" : null === t ? l(e, r) : Array.isArray(t) ? t.reduce(a(e), []).join("&") : l(e, r) + "=" + l(t, r)
                    }).filter(function(e) {
                        return 0 < e.length
                    }).join("&")
                }, s.parseUrl = function(e, t) {
                    t = Object.assign({
                        decode: !0
                    }, t);
                    var n = p(g(e, "#"), 2),
                        r = n[0],
                        n = n[1];
                    return Object.assign({
                        url: r.split("?")[0] || "",
                        query: i(o(e), t)
                    }, t && t.parseFragmentIdentifier && n ? {
                        fragmentIdentifier: G(n, t)
                    } : {})
                }, s.stringifyUrl = function(e, t) {
                    t = Object.assign({
                        encode: !0,
                        strict: !0
                    }, t);
                    var n = u(e.url).split("?")[0] || "",
                        r = s.extract(e.url),
                        a = s.parse(r, {
                            sort: !1
                        }),
                        o = Object.assign(a, e.query),
                        i = (i = s.stringify(o, t)) && "?".concat(i),
                        a = (r = e.url, a = "", -1 !== (o = r.indexOf("#")) && (a = r.slice(o)), a);
                    return e.fragmentIdentifier && (a = "#".concat(l(e.fragmentIdentifier, t))), "".concat(n).concat(i).concat(a)
                }
            },
            4963: function(e) {
                "use strict";
                e.exports = function(e, t, n, r) {
                    t = t || "&", n = n || "=";
                    var a = {};
                    if ("string" != typeof e || 0 === e.length) return a;
                    var o = /\+/g;
                    e = e.split(t);
                    t = 1e3;
                    r && "number" == typeof r.maxKeys && (t = r.maxKeys);
                    var i = e.length;
                    0 < t && t < i && (i = t);
                    for (var s = 0; s < i; ++s) {
                        var u, c = e[s].replace(o, "%20"),
                            l = c.indexOf(n),
                            d = 0 <= l ? (u = c.substr(0, l), c.substr(l + 1)) : (u = c, ""),
                            h = decodeURIComponent(u),
                            l = decodeURIComponent(d);
                        c = a, d = h, Object.prototype.hasOwnProperty.call(c, d) ? Array.isArray(a[h]) ? a[h].push(l) : a[h] = [a[h], l] : a[h] = l
                    }
                    return a
                }
            },
            1467: function(e) {
                "use strict";

                function t(e) {
                    return (t = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                        return typeof e
                    } : function(e) {
                        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                    })(e)
                }

                function o(e) {
                    switch (t(e)) {
                        case "string":
                            return e;
                        case "boolean":
                            return e ? "true" : "false";
                        case "number":
                            return isFinite(e) ? e : "";
                        default:
                            return ""
                    }
                }
                e.exports = function(n, r, a, e) {
                    return r = r || "&", a = a || "=", null === n && (n = void 0), "object" === t(n) ? Object.keys(n).map(function(e) {
                        var t = encodeURIComponent(o(e)) + a;
                        return Array.isArray(n[e]) ? n[e].map(function(e) {
                            return t + encodeURIComponent(o(e))
                        }).join(r) : t + encodeURIComponent(o(n[e]))
                    }).join(r) : e ? encodeURIComponent(o(e)) + a + encodeURIComponent(o(n)) : ""
                }
            },
            5261: function(e, t, n) {
                "use strict";
                t.decode = t.parse = n(4963), t.encode = t.stringify = n(1467)
            },
            9393: function(e) {
                "use strict";
                e.exports = function(e, t) {
                    if ("string" != typeof e || "string" != typeof t) throw new TypeError("Expected the arguments to be of type `string`");
                    if ("" === t) return [e];
                    var n = e.indexOf(t);
                    return -1 === n ? [e] : [e.slice(0, n), e.slice(n + t.length)]
                }
            },
            3162: function(e) {
                "use strict";
                e.exports = function(e) {
                    return encodeURIComponent(e).replace(/[!'()*]/g, function(e) {
                        return "%".concat(e.charCodeAt(0).toString(16).toUpperCase())
                    })
                }
            },
            1651: function(e, t, n) {
                "use strict";

                function A(e) {
                    return (A = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                        return typeof e
                    } : function(e) {
                        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                    })(e)
                }
                var L = n(2149),
                    q = n(4817);

                function b() {
                    this.protocol = null, this.slashes = null, this.auth = null, this.host = null, this.port = null, this.hostname = null, this.hash = null, this.search = null, this.query = null, this.pathname = null, this.path = null, this.href = null
                }
                t.Qc = a, t.DB = function(e, t) {
                    return a(e, !1, !0).resolve(t)
                }, t.WU = function(e) {
                    q.isString(e) && (e = a(e));
                    return e instanceof b ? e.format() : b.prototype.format.call(e)
                };
                var S = /^([a-z0-9.+-]+:)/i,
                    r = /:[0-9]*$/,
                    U = /^(\/\/?(?!\/)[^\?\s]*)(\?[^\s]*)?$/,
                    t = ["{", "}", "|", "\\", "^", "`"].concat(["<", ">", '"', "`", " ", "\r", "\n", "\t"]),
                    R = ["'"].concat(t),
                    O = ["%", "/", "?", ";", "#"].concat(R),
                    D = ["/", "?", "#"],
                    x = /^[+a-z0-9A-Z_-]{0,63}$/,
                    E = /^([+a-z0-9A-Z_-]{0,63})(.*)$/,
                    B = {
                        javascript: !0,
                        "javascript:": !0
                    },
                    F = {
                        javascript: !0,
                        "javascript:": !0
                    },
                    z = {
                        http: !0,
                        https: !0,
                        ftp: !0,
                        gopher: !0,
                        file: !0,
                        "http:": !0,
                        "https:": !0,
                        "ftp:": !0,
                        "gopher:": !0,
                        "file:": !0
                    },
                    j = n(5261);

                function a(e, t, n) {
                    if (e && q.isObject(e) && e instanceof b) return e;
                    var r = new b;
                    return r.parse(e, t, n), r
                }
                b.prototype.parse = function(e, t, n) {
                    if (!q.isString(e)) throw new TypeError("Parameter 'url' must be a string, not " + A(e));
                    var r = e.indexOf("?"),
                        a = -1 !== r && r < e.indexOf("#") ? "?" : "#",
                        r = e.split(a);
                    r[0] = r[0].replace(/\\/g, "/");
                    var o = (o = e = r.join(a)).trim();
                    if (!n && 1 === e.split("#").length) {
                        var i = U.exec(o);
                        if (i) return this.path = o, this.href = o, this.pathname = i[1], i[2] ? (this.search = i[2], this.query = t ? j.parse(this.search.substr(1)) : this.search.substr(1)) : t && (this.search = "", this.query = {}), this
                    }
                    var s, i = S.exec(o);
                    if (i && (T = (i = i[0]).toLowerCase(), this.protocol = T, o = o.substr(i.length)), (n || i || o.match(/^\/\/[^@\/]+@[^@\/]+/)) && (!(s = "//" === o.substr(0, 2)) || i && F[i] || (o = o.substr(2), this.slashes = !0)), !F[i] && (s || i && !z[i])) {
                        for (var u = -1, c = 0; c < D.length; c++) - 1 !== (l = o.indexOf(D[c])) && (-1 === u || l < u) && (u = l); - 1 !== (b = -1 === u ? o.lastIndexOf("@") : o.lastIndexOf("@", u)) && (P = o.slice(0, b), o = o.slice(b + 1), this.auth = decodeURIComponent(P)), u = -1;
                        for (var l, c = 0; c < O.length; c++) - 1 !== (l = o.indexOf(O[c])) && (-1 === u || l < u) && (u = l); - 1 === u && (u = o.length), this.host = o.slice(0, u), o = o.slice(u), this.parseHost(), this.hostname = this.hostname || "";
                        var d = "[" === this.hostname[0] && "]" === this.hostname[this.hostname.length - 1];
                        if (!d)
                            for (var h = this.hostname.split(/\./), c = 0, v = h.length; c < v; c++) {
                                var p = h[c];
                                if (p && !p.match(x)) {
                                    for (var f = "", m = 0, g = p.length; m < g; m++) 127 < p.charCodeAt(m) ? f += "x" : f += p[m];
                                    if (!f.match(x)) {
                                        var y = h.slice(0, c),
                                            G = h.slice(c + 1),
                                            I = p.match(E);
                                        I && (y.push(I[1]), G.unshift(I[2])), G.length && (o = "/" + G.join(".") + o), this.hostname = y.join(".");
                                        break
                                    }
                                }
                            }
                        255 < this.hostname.length ? this.hostname = "" : this.hostname = this.hostname.toLowerCase(), d || (this.hostname = L.toASCII(this.hostname));
                        var b = this.port ? ":" + this.port : "",
                            P = this.hostname || "";
                        this.host = P + b, this.href += this.host, d && (this.hostname = this.hostname.substr(1, this.hostname.length - 2), "/" !== o[0] && (o = "/" + o))
                    }
                    if (!B[T])
                        for (c = 0, v = R.length; c < v; c++) {
                            var w, C = R[c]; - 1 !== o.indexOf(C) && ((w = encodeURIComponent(C)) === C && (w = escape(C)), o = o.split(C).join(w))
                        }
                    d = o.indexOf("#"); - 1 !== d && (this.hash = o.substr(d), o = o.slice(0, d));
                    var T, d = o.indexOf("?");
                    return -1 !== d ? (this.search = o.substr(d), this.query = o.substr(d + 1), t && (this.query = j.parse(this.query)), o = o.slice(0, d)) : t && (this.search = "", this.query = {}), o && (this.pathname = o), z[T] && this.hostname && !this.pathname && (this.pathname = "/"), (this.pathname || this.search) && (b = this.pathname || "", T = this.search || "", this.path = b + T), this.href = this.format(), this
                }, b.prototype.format = function() {
                    var e = this.auth || "";
                    e && (e = (e = encodeURIComponent(e)).replace(/%3A/i, ":"), e += "@");
                    var t = this.protocol || "",
                        n = this.pathname || "",
                        r = this.hash || "",
                        a = !1,
                        o = "";
                    this.host ? a = e + this.host : this.hostname && (a = e + (-1 === this.hostname.indexOf(":") ? this.hostname : "[" + this.hostname + "]"), this.port && (a += ":" + this.port)), this.query && q.isObject(this.query) && Object.keys(this.query).length && (o = j.stringify(this.query));
                    o = this.search || o && "?" + o || "";
                    return t && ":" !== t.substr(-1) && (t += ":"), this.slashes || (!t || z[t]) && !1 !== a ? (a = "//" + (a || ""), n && "/" !== n.charAt(0) && (n = "/" + n)) : a = a || "", r && "#" !== r.charAt(0) && (r = "#" + r), o && "?" !== o.charAt(0) && (o = "?" + o), t + a + (n = n.replace(/[?#]/g, function(e) {
                        return encodeURIComponent(e)
                    })) + (o = o.replace("#", "%23")) + r
                }, b.prototype.resolve = function(e) {
                    return this.resolveObject(a(e, !1, !0)).format()
                }, b.prototype.resolveObject = function(e) {
                    q.isString(e) && ((v = new b).parse(e, !1, !0), e = v);
                    for (var t = new b, n = Object.keys(this), r = 0; r < n.length; r++) {
                        var a = n[r];
                        t[a] = this[a]
                    }
                    if (t.hash = e.hash, "" === e.href) return t.href = t.format(), t;
                    if (e.slashes && !e.protocol) {
                        for (var o = Object.keys(e), i = 0; i < o.length; i++) {
                            var s = o[i];
                            "protocol" !== s && (t[s] = e[s])
                        }
                        return z[t.protocol] && t.hostname && !t.pathname && (t.path = t.pathname = "/"), t.href = t.format(), t
                    }
                    if (e.protocol && e.protocol !== t.protocol) {
                        if (!z[e.protocol]) {
                            for (var u = Object.keys(e), c = 0; c < u.length; c++) {
                                var l = u[c];
                                t[l] = e[l]
                            }
                            return t.href = t.format(), t
                        }
                        if (t.protocol = e.protocol, e.host || F[e.protocol]) t.pathname = e.pathname;
                        else {
                            for (var d = (e.pathname || "").split("/"); d.length && !(e.host = d.shift()););
                            e.host || (e.host = ""), e.hostname || (e.hostname = ""), "" !== d[0] && d.unshift(""), d.length < 2 && d.unshift(""), t.pathname = d.join("/")
                        }
                        return t.search = e.search, t.query = e.query, t.host = e.host || "", t.auth = e.auth, t.hostname = e.hostname || e.host, t.port = e.port, (t.pathname || t.search) && (p = t.pathname || "", f = t.search || "", t.path = p + f), t.slashes = t.slashes || e.slashes, t.href = t.format(), t
                    }
                    var h = t.pathname && "/" === t.pathname.charAt(0),
                        v = e.host || e.pathname && "/" === e.pathname.charAt(0),
                        p = v || h || t.host && e.pathname,
                        f = p,
                        m = t.pathname && t.pathname.split("/") || [],
                        d = e.pathname && e.pathname.split("/") || [],
                        h = t.protocol && !z[t.protocol];
                    if (h && (t.hostname = "", t.port = null, t.host && ("" === m[0] ? m[0] = t.host : m.unshift(t.host)), t.host = "", e.protocol && (e.hostname = null, e.port = null, e.host && ("" === d[0] ? d[0] = e.host : d.unshift(e.host)), e.host = null), p = p && ("" === d[0] || "" === m[0])), v) t.host = (e.host || "" === e.host ? e : t).host, t.hostname = (e.hostname || "" === e.hostname ? e : t).hostname, t.search = e.search, t.query = e.query, m = d;
                    else if (d.length)(m = m || []).pop(), m = m.concat(d), t.search = e.search, t.query = e.query;
                    else if (!q.isNullOrUndefined(e.search)) return h && (t.hostname = t.host = m.shift(), (I = !!(t.host && 0 < t.host.indexOf("@")) && t.host.split("@")) && (t.auth = I.shift(), t.host = t.hostname = I.shift())), t.search = e.search, t.query = e.query, q.isNull(t.pathname) && q.isNull(t.search) || (t.path = (t.pathname || "") + (t.search || "")), t.href = t.format(), t;
                    if (!m.length) return t.pathname = null, t.search ? t.path = "/" + t.search : t.path = null, t.href = t.format(), t;
                    for (var g = m.slice(-1)[0], v = (t.host || e.host || 1 < m.length) && ("." === g || ".." === g) || "" === g, y = 0, G = m.length; 0 <= G; G--) "." === (g = m[G]) ? m.splice(G, 1) : ".." === g ? (m.splice(G, 1), y++) : y && (m.splice(G, 1), y--);
                    if (!p && !f)
                        for (; y--;) m.unshift("..");
                    !p || "" === m[0] || m[0] && "/" === m[0].charAt(0) || m.unshift(""), v && "/" !== m.join("/").substr(-1) && m.push("");
                    var I, v = "" === m[0] || m[0] && "/" === m[0].charAt(0);
                    return h && (t.hostname = t.host = !v && m.length ? m.shift() : "", (I = !!(t.host && 0 < t.host.indexOf("@")) && t.host.split("@")) && (t.auth = I.shift(), t.host = t.hostname = I.shift())), (p = p || t.host && m.length) && !v && m.unshift(""), m.length ? t.pathname = m.join("/") : (t.pathname = null, t.path = null), q.isNull(t.pathname) && q.isNull(t.search) || (t.path = (t.pathname || "") + (t.search || "")), t.auth = e.auth || t.auth, t.slashes = t.slashes || e.slashes, t.href = t.format(), t
                }, b.prototype.parseHost = function() {
                    var e = this.host,
                        t = r.exec(e);
                    t && (":" !== (t = t[0]) && (this.port = t.substr(1)), e = e.substr(0, e.length - t.length)), e && (this.hostname = e)
                }
            },
            4817: function(e) {
                "use strict";

                function t(e) {
                    return (t = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                        return typeof e
                    } : function(e) {
                        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                    })(e)
                }
                e.exports = {
                    isString: function(e) {
                        return "string" == typeof e
                    },
                    isObject: function(e) {
                        return "object" === t(e) && null !== e
                    },
                    isNull: function(e) {
                        return null === e
                    },
                    isNullOrUndefined: function(e) {
                        return null == e
                    }
                }
            }
        },
        r = {};

    function Ms(e) {
        if (r[e]) return r[e].exports;
        var t = r[e] = {
            id: e,
            loaded: !1,
            exports: {}
        };
        return n[e].call(t.exports, t, t.exports, Ms), t.loaded = !0, t.exports
    }
    Ms.amdO = {}, Ms.n = function(e) {
            var t = e && e.__esModule ? function() {
                return e.default
            } : function() {
                return e
            };
            return Ms.d(t, {
                a: t
            }), t
        }, Ms.d = function(e, t) {
            for (var n in t) Ms.o(t, n) && !Ms.o(e, n) && Object.defineProperty(e, n, {
                enumerable: !0,
                get: t[n]
            })
        }, Ms.g = function() {
            if ("object" == typeof globalThis) return globalThis;
            try {
                return this || new Function("return this")()
            } catch (e) {
                if ("object" == typeof window) return window
            }
        }(), Ms.o = function(e, t) {
            return Object.prototype.hasOwnProperty.call(e, t)
        }, Ms.nmd = function(e) {
            return e.paths = [], e.children || (e.children = []), e
        },
        function() {
            "use strict";

            function a(e) {
                for (var t = new Uint8Array(e.length), n = 0; n < e.length; n++) t[n] = e.charCodeAt(n);
                return t.buffer
            }

            function o(e) {
                for (var t = "", n = new Uint8Array(e), r = 0; r < n.byteLength; r++) t += String.fromCharCode(n[r]);
                return btoa(t)
            }

            function r(e) {
                var t = "roblox.com",
                    n = "robloxlabs.com",
                    r = e || (null === (r = window.location) || void 0 === r ? void 0 : r.hostname);
                return -1 < r.indexOf(t) || -1 < r.indexOf(n)
            }
            var e = function(e, i, s, u) {
                    return new(s = s || Promise)(function(n, t) {
                        function r(e) {
                            try {
                                o(u.next(e))
                            } catch (e) {
                                t(e)
                            }
                        }

                        function a(e) {
                            try {
                                o(u.throw(e))
                            } catch (e) {
                                t(e)
                            }
                        }

                        function o(e) {
                            var t;
                            e.done ? n(e.value) : ((t = e.value) instanceof s ? t : new s(function(e) {
                                e(t)
                            })).then(r, a)
                        }
                        o((u = u.apply(e, i || [])).next())
                    })
                },
                i = function(n, r) {
                    var a, o, i, s = {
                            label: 0,
                            sent: function() {
                                if (1 & i[0]) throw i[1];
                                return i[1]
                            },
                            trys: [],
                            ops: []
                        },
                        e = {
                            next: t(0),
                            throw: t(1),
                            return: t(2)
                        };
                    return "function" == typeof Symbol && (e[Symbol.iterator] = function() {
                        return this
                    }), e;

                    function t(t) {
                        return function(e) {
                            return function(t) {
                                if (a) throw new TypeError("Generator is already executing.");
                                for (; s;) try {
                                    if (a = 1, o && (i = 2 & t[0] ? o.return : t[0] ? o.throw || ((i = o.return) && i.call(o), 0) : o.next) && !(i = i.call(o, t[1])).done) return i;
                                    switch (o = 0, i && (t = [2 & t[0], i.value]), t[0]) {
                                        case 0:
                                        case 1:
                                            i = t;
                                            break;
                                        case 4:
                                            return s.label++, {
                                                value: t[1],
                                                done: !1
                                            };
                                        case 5:
                                            s.label++, o = t[1], t = [0];
                                            continue;
                                        case 7:
                                            t = s.ops.pop(), s.trys.pop();
                                            continue;
                                        default:
                                            if (!(i = 0 < (i = s.trys).length && i[i.length - 1]) && (6 === t[0] || 2 === t[0])) {
                                                s = 0;
                                                continue
                                            }
                                            if (3 === t[0] && (!i || t[1] > i[0] && t[1] < i[3])) {
                                                s.label = t[1];
                                                break
                                            }
                                            if (6 === t[0] && s.label < i[1]) {
                                                s.label = i[1], i = t;
                                                break
                                            }
                                            if (i && s.label < i[2]) {
                                                s.label = i[2], s.ops.push(t);
                                                break
                                            }
                                            i[2] && s.ops.pop(), s.trys.pop();
                                            continue
                                    }
                                    t = r.call(n, s)
                                } catch (e) {
                                    t = [6, e], o = 0
                                } finally {
                                    a = i = 0
                                }
                                if (5 & t[0]) throw t[1];
                                return {
                                    value: t[0] ? t[1] : void 0,
                                    done: !0
                                }
                            }([t, e])
                        }
                    }
                },
                t = {
                    name: "ECDSA",
                    namedCurve: "P-256"
                },
                s = {
                    name: "ECDSA",
                    hash: {
                        name: "SHA-256"
                    }
                },
                n = {
                    arrayBufferToBase64String: o,
                    base64StringToArrayBuffer: function(e) {
                        e = atob(e);
                        return a(e)
                    },
                    exportPublicKeyAsSpki: function(n) {
                        return e(void 0, void 0, Promise, function() {
                            var t;
                            return i(this, function(e) {
                                switch (e.label) {
                                    case 0:
                                        return [4, crypto.subtle.exportKey("spki", n)];
                                    case 1:
                                        return t = e.sent(), [2, o(t)]
                                }
                            })
                        })
                    },
                    generateSigningKeyPairUnextractable: function() {
                        return e(void 0, void 0, Promise, function() {
                            return i(this, function(e) {
                                return [2, crypto.subtle.generateKey(t, !1, ["sign"])]
                            })
                        })
                    },
                    sign: function(n, r) {
                        return e(void 0, void 0, Promise, function() {
                            var t;
                            return i(this, function(e) {
                                switch (e.label) {
                                    case 0:
                                        return [4, crypto.subtle.sign(s, n, a(r))];
                                    case 1:
                                        return t = e.sent(), [2, o(t)]
                                }
                            })
                        })
                    },
                    stringToArrayBuffer: a
                },
                T = Ms(1651),
                u = Ms(3773),
                d = Ms.n(u),
                l = Roblox,
                c = Ms.n(l),
                h = RobloxTracer,
                v = (Br = document.querySelector('meta[name="request-duplication-meta-data"]'), Nn = parseFloat(null == Br || null === (Nn = Br.dataset) || void 0 === Nn ? void 0 : Nn.duplicationRatio), Nn = Number.isNaN(Nn) ? 0 : Nn, {
                    duplicationEnabled: "true" === (null == Br || null === (Fe = Br.dataset) || void 0 === Fe ? void 0 : Fe.duplicationEnabled),
                    apiSitesAllowList: null !== (Dn = null == Br || null === (Dn = Br.dataset) || void 0 === Dn ? void 0 : Dn.apiSitesAllowList) && void 0 !== Dn ? Dn : "",
                    duplicationRatio: Nn
                }),
                p = v.apiSitesAllowList.split(","),
                f = function(e, t) {
                    return v.duplicationEnabled && !t && (n = e, !(!r() || !r(n)) && (0 < p.length && p.some(function(e) {
                        return 0 < e.length && n.includes(e)
                    })));
                    var n
                },
                m = function() {
                    var e = v.duplicationRatio;
                    if (e <= 0) return 0;
                    var t = Math.floor(e),
                        e = e - t,
                        t = t;
                    return 0 < e && Math.random() < e && (t += 1), t
                };
            (Pn = Me = Me || {}).GET = "get", Pn.HEAD = "head", Pn.POST = "post", Pn.PUT = "put", Pn.DELETE = "delete", Pn.OPTIONS = "options", Pn.PATCH = "patch";
            var g = Object.freeze(Me);
            (Ye = pt = pt || {})[Ye.ok = 200] = "ok", Ye[Ye.accepted = 202] = "accepted", Ye[Ye.movedPermanently = 301] = "movedPermanently", Ye[Ye.badRequest = 400] = "badRequest", Ye[Ye.unauthorized = 401] = "unauthorized", Ye[Ye.forbidden = 403] = "forbidden", Ye[Ye.notFound = 404] = "notFound", Ye[Ye.methodNotAllowed = 405] = "methodNotAllowed", Ye[Ye.conflict = 409] = "conflict", Ye[Ye.payloadTooLarge = 413] = "payloadTooLarge", Ye[Ye.tooManyAttempts = 429] = "tooManyAttempts", Ye[Ye.serverError = 500] = "serverError", Ye[Ye.serviceUnavailable = 503] = "serviceUnavailable";
            var y = Object.freeze(pt),
                G = function() {
                    return (G = Object.assign || function(e) {
                        for (var t, n = 1, r = arguments.length; n < r; n++)
                            for (var a in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
                        return e
                    }).apply(this, arguments)
                },
                I = "x-csrf-token",
                b = y.forbidden,
                P = "Generic Challenge:",
                w = "rblx-challenge-id",
                C = "rblx-challenge-type",
                A = "rblx-challenge-metadata",
                L = l.XsrfToken.getToken();
            d().interceptors.request.use(function(e) {
                var t, n = e.method,
                    r = e.noCache,
                    a = e.headers,
                    o = e.url,
                    i = G({}, e);
                if (n !== g.POST && n !== g.PATCH && n !== g.DELETE || (L = L || l.XsrfToken.getToken(), r && (i.headers = a || {}, i["Cache-Control"] = "no-cache, no-store, must-revalidate", i.Pragma = "no-cache", i.Expires = 0), i.headers[I] = L), h.isTracerEnabled && h.apiSiteRequestValidator.isApiSiteAvailableForTracing(o) && (a = {
                        tags: {
                            isDuplicate: (null === (a = e.isDuplicate) || void 0 === a ? void 0 : a.toString()) || "false"
                        }
                    }, a = h.instrumentation.createAndGetSpan(h.tracerConstants.operationNames.httpRequest, a), h.tags.setXHRRequestTags(a, {
                        component: "axios",
                        method: n,
                        url: o
                    }), h.logs.setXHRRequestLogs(a), t = h.inject.httpRequestCarrier(a), Object.keys(t).forEach(function(e) {
                        i.headers[e] = t[e]
                    }), i.tracerConfig = {
                        requestSpan: a
                    }), f(o, e.isDuplicate)) {
                    var s = G({}, e);
                    s.isDuplicate = !0;
                    for (var u = m(), c = 0; c < u; c++) d().request(s).catch(function(e) {
                        console.log("~~~~ duplicated request failed ~~~~ " + e)
                    })
                }
                return i
            }, null), d().interceptors.response.use(function(e) {
                var t = e.status,
                    n = e.config,
                    r = n.url,
                    n = n.tracerConfig;
                return n && h.apiSiteRequestValidator.isApiSiteAvailableForTracing(r) && (n = n.requestSpan, h.tags.setXHRResponseTags(n, {
                    status: t
                }), h.logs.setXHRResponseSuccessLogs(n), h.instrumentation.finalizeSpan(n)), e
            }, function(e) {
                var t = e.config,
                    n = e.response;
                if (n) {
                    var r = n.status,
                        a = n.headers,
                        o = n.config,
                        i = a[I];
                    if (r === b && i) return o.headers[I] = i, L = i, l.XsrfToken.setToken(i), d().request(o);
                    null != o && o.tracerConfig && h.apiSiteRequestValidator.isApiSiteAvailableForTracing(o.url) && (u = o.tracerConfig.requestSpan, h.tags.setXHRResponseErrorTags(u, {
                        status: r
                    }), h.logs.setXHRResponseErrorLogs(u), h.instrumentation.finalizeSpan(u));
                    var r = a["rblx-challenge-id"],
                        s = a["rblx-challenge-type"],
                        u = a["rblx-challenge-metadata"],
                        a = void 0 !== r || void 0 !== s || void 0 !== u;
                    if (void 0 !== r && void 0 !== s && void 0 !== u) {
                        if (c() && c().AccountIntegrityChallengeService) return c().AccountIntegrityChallengeService.Generic.interceptChallenge({
                            retryRequest: function(e, t) {
                                return o.headers[w] = e, o.headers[C] = s, o.headers[A] = t, d().request(o)
                            },
                            containerId: "generic-challenge-container",
                            challengeId: r,
                            challengeTypeRaw: s,
                            challengeMetadataJsonBase64: u
                        });
                        console.error(P, "Got challenge but challenge component not available")
                    } else a && console.error(P, "Got only partial challenge headers")
                }
                return null != t && t.fullError || d().isCancel(e) ? Promise.reject(e) : Promise.reject(n)
            });
            var q = d(),
                S = function() {
                    return (S = Object.assign || function(e) {
                        for (var t, n = 1, r = arguments.length; n < r; n++)
                            for (var a in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
                        return e
                    }).apply(this, arguments)
                };

            function U(e) {
                return e || Promise.reject(new Error("No config found")), q((e = S({}, t = e), t.noCache && (e.headers = S(S({}, e.headers), {
                    "Cache-Control": "no-cache, no-store, must-revalidate",
                    Pragma: "no-cache",
                    Expires: 0
                })), t.authBearerToken && (e.headers = S(S({}, e.headers), {
                    "X-Auth-Bearer-Token": t.authBearerToken
                })), e));
                var t
            }

            function R(e, t) {
                return U(S(S({
                    method: g.GET,
                    url: e.url
                }, e), {
                    params: t
                }))
            }

            function O(e, t) {
                return U(S(S({
                    method: g.POST,
                    url: e.url
                }, e), {
                    data: t
                }))
            }
            var D, x, E = {
                    methods: g,
                    get: R,
                    post: O,
                    delete: function(e) {
                        return U(S({
                            method: g.DELETE,
                            url: e.url
                        }, e))
                    },
                    patch: function(e, t) {
                        return U(S(S({
                            method: g.PATCH,
                            url: e.url
                        }, e), {
                            data: t
                        }))
                    },
                    put: function(e, t) {
                        return U(S(S({
                            method: g.PUT,
                            url: e.url
                        }, e), {
                            data: t
                        }))
                    },
                    buildBatchPromises: function(e, t, n, r, a) {
                        for (var o = [], i = 0, s = e.slice(i, t), u = a || "userIds"; 0 < s.length;) {
                            var c = {};
                            c[u] = s, r ? o.push(O(n, c)) : o.push(R(n, c)), i += 1, s = e.slice(i * t, i * t + t)
                        }
                        return Promise.all(o)
                    },
                    createCancelToken: function() {
                        return q.CancelToken.source()
                    },
                    isCancelled: function(e) {
                        return q.isCancel(e)
                    }
                },
                B = (D = function(e, t) {
                    return (D = Object.setPrototypeOf || {
                            __proto__: []
                        }
                        instanceof Array && function(e, t) {
                            e.__proto__ = t
                        } || function(e, t) {
                            for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n])
                        })(e, t)
                }, function(e, t) {
                    if ("function" != typeof t && null !== t) throw new TypeError("Class extends value " + String(t) + " is not a constructor or null");

                    function n() {
                        this.constructor = e
                    }
                    D(e, t), e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n)
                }),
                F = l.EnvironmentUrls.catalogApi.replace(/\/+$/, ""),
                z = ",",
                j = function(e, t, n) {
                    void 0 === t && (t = F), void 0 === n && (n = q), this.basePath = t, this.axios = n, e && (this.configuration = e, this.basePath = e.basePath || this.basePath)
                },
                N = (x = Error, B(k, x), k);

            function k(e, t) {
                t = x.call(this, t) || this;
                return t.field = e, t.name = "RequiredError", t
            }
            var _, W = (_ = function(e, t) {
                    return (_ = Object.setPrototypeOf || {
                            __proto__: []
                        }
                        instanceof Array && function(e, t) {
                            e.__proto__ = t
                        } || function(e, t) {
                            for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n])
                        })(e, t)
                }, function(e, t) {
                    if ("function" != typeof t && null !== t) throw new TypeError("Class extends value " + String(t) + " is not a constructor or null");

                    function n() {
                        this.constructor = e
                    }
                    _(e, t), e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n)
                }),
                M = function() {
                    return (M = Object.assign || function(e) {
                        for (var t, n = 1, r = arguments.length; n < r; n++)
                            for (var a in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
                        return e
                    }).apply(this, arguments)
                },
                Q = function(e, i, s, u) {
                    return new(s = s || Promise)(function(n, t) {
                        function r(e) {
                            try {
                                o(u.next(e))
                            } catch (e) {
                                t(e)
                            }
                        }

                        function a(e) {
                            try {
                                o(u.throw(e))
                            } catch (e) {
                                t(e)
                            }
                        }

                        function o(e) {
                            var t;
                            e.done ? n(e.value) : ((t = e.value) instanceof s ? t : new s(function(e) {
                                e(t)
                            })).then(r, a)
                        }
                        o((u = u.apply(e, i || [])).next())
                    })
                },
                H = function(n, r) {
                    var a, o, i, s = {
                            label: 0,
                            sent: function() {
                                if (1 & i[0]) throw i[1];
                                return i[1]
                            },
                            trys: [],
                            ops: []
                        },
                        e = {
                            next: t(0),
                            throw: t(1),
                            return: t(2)
                        };
                    return "function" == typeof Symbol && (e[Symbol.iterator] = function() {
                        return this
                    }), e;

                    function t(t) {
                        return function(e) {
                            return function(t) {
                                if (a) throw new TypeError("Generator is already executing.");
                                for (; s;) try {
                                    if (a = 1, o && (i = 2 & t[0] ? o.return : t[0] ? o.throw || ((i = o.return) && i.call(o), 0) : o.next) && !(i = i.call(o, t[1])).done) return i;
                                    switch (o = 0, i && (t = [2 & t[0], i.value]), t[0]) {
                                        case 0:
                                        case 1:
                                            i = t;
                                            break;
                                        case 4:
                                            return s.label++, {
                                                value: t[1],
                                                done: !1
                                            };
                                        case 5:
                                            s.label++, o = t[1], t = [0];
                                            continue;
                                        case 7:
                                            t = s.ops.pop(), s.trys.pop();
                                            continue;
                                        default:
                                            if (!(i = 0 < (i = s.trys).length && i[i.length - 1]) && (6 === t[0] || 2 === t[0])) {
                                                s = 0;
                                                continue
                                            }
                                            if (3 === t[0] && (!i || t[1] > i[0] && t[1] < i[3])) {
                                                s.label = t[1];
                                                break
                                            }
                                            if (6 === t[0] && s.label < i[1]) {
                                                s.label = i[1], i = t;
                                                break
                                            }
                                            if (i && s.label < i[2]) {
                                                s.label = i[2], s.ops.push(t);
                                                break
                                            }
                                            i[2] && s.ops.pop(), s.trys.pop();
                                            continue
                                    }
                                    t = r.call(n, s)
                                } catch (e) {
                                    t = [6, e], o = 0
                                } finally {
                                    a = i = 0
                                }
                                if (5 & t[0]) throw t[1];
                                return {
                                    value: t[0] ? t[1] : void 0,
                                    done: !0
                                }
                            }([t, e])
                        }
                    }
                };

            function V(h) {
                var e = this;
                return {
                    v1AssetsAssetIdBundlesGet: function(i, s, u, c, l) {
                        return void 0 === l && (l = {}), Q(e, void 0, Promise, function() {
                            var t, n, r, a, o;
                            return H(this, function(e) {
                                if (null == i) throw new N("assetId", "Required parameter assetId was null or undefined when calling v1AssetsAssetIdBundlesGet.");
                                return a = "/v1/assets/{assetId}/bundles".replace("{assetId}", encodeURIComponent(String(i))), t = T.Qc(a, !0), h && (o = h.baseOptions), n = M(M({
                                    method: "GET"
                                }, o), l), r = {}, a = {}, void 0 !== s && (a.sortOrder = s), void 0 !== u && (a.limit = u), void 0 !== c && (a.cursor = c), t.query = M(M(M({}, t.query), a), l.query), delete t.search, o = o && o.headers ? o.headers : {}, n.headers = M(M(M({}, r), o), l.headers), [2, {
                                    url: T.WU(t),
                                    options: n
                                }]
                            })
                        })
                    },
                    v1BundlesBundleIdDetailsGet: function(i, s) {
                        return void 0 === s && (s = {}), Q(e, void 0, Promise, function() {
                            var t, n, r, a, o;
                            return H(this, function(e) {
                                if (null == i) throw new N("bundleId", "Required parameter bundleId was null or undefined when calling v1BundlesBundleIdDetailsGet.");
                                return a = "/v1/bundles/{bundleId}/details".replace("{bundleId}", encodeURIComponent(String(i))), t = T.Qc(a, !0), h && (o = h.baseOptions), n = M(M({
                                    method: "GET"
                                }, o), s), r = {}, a = {}, t.query = M(M(M({}, t.query), a), s.query), delete t.search, o = o && o.headers ? o.headers : {}, n.headers = M(M(M({}, r), o), s.headers), [2, {
                                    url: T.WU(t),
                                    options: n
                                }]
                            })
                        })
                    },
                    v1BundlesBundleIdRecommendationsGet: function(i, s, u) {
                        return void 0 === u && (u = {}), Q(e, void 0, Promise, function() {
                            var t, n, r, a, o;
                            return H(this, function(e) {
                                if (null == i) throw new N("bundleId", "Required parameter bundleId was null or undefined when calling v1BundlesBundleIdRecommendationsGet.");
                                return a = "/v1/bundles/{bundleId}/recommendations".replace("{bundleId}", encodeURIComponent(String(i))), t = T.Qc(a, !0), h && (o = h.baseOptions), n = M(M({
                                    method: "GET"
                                }, o), u), r = {}, a = {}, void 0 !== s && (a.numItems = s), t.query = M(M(M({}, t.query), a), u.query), delete t.search, o = o && o.headers ? o.headers : {}, n.headers = M(M(M({}, r), o), u.headers), [2, {
                                    url: T.WU(t),
                                    options: n
                                }]
                            })
                        })
                    },
                    v1BundlesBundleIdUnpackPost: function(i, s) {
                        return void 0 === s && (s = {}), Q(e, void 0, Promise, function() {
                            var t, n, r, a, o;
                            return H(this, function(e) {
                                if (null == i) throw new N("bundleId", "Required parameter bundleId was null or undefined when calling v1BundlesBundleIdUnpackPost.");
                                return a = "/v1/bundles/{bundleId}/unpack".replace("{bundleId}", encodeURIComponent(String(i))), t = T.Qc(a, !0), h && (o = h.baseOptions), n = M(M({
                                    method: "POST"
                                }, o), s), r = {}, a = {}, t.query = M(M(M({}, t.query), a), s.query), delete t.search, o = o && o.headers ? o.headers : {}, n.headers = M(M(M({}, r), o), s.headers), [2, {
                                    url: T.WU(t),
                                    options: n
                                }]
                            })
                        })
                    },
                    v1BundlesDetailsGet: function(i, s) {
                        return void 0 === s && (s = {}), Q(e, void 0, Promise, function() {
                            var t, n, r, a, o;
                            return H(this, function(e) {
                                if (null == i) throw new N("bundleIds", "Required parameter bundleIds was null or undefined when calling v1BundlesDetailsGet.");
                                return t = T.Qc("/v1/bundles/details", !0), h && (o = h.baseOptions), n = M(M({
                                    method: "GET"
                                }, o), s), r = {}, a = {}, i && (a.bundleIds = i.join(z)), t.query = M(M(M({}, t.query), a), s.query), delete t.search, o = o && o.headers ? o.headers : {}, n.headers = M(M(M({}, r), o), s.headers), [2, {
                                    url: T.WU(t),
                                    options: n
                                }]
                            })
                        })
                    },
                    v1UsersUserIdBundlesBundleTypeGet: function(i, s, u, c, l, d) {
                        return void 0 === d && (d = {}), Q(e, void 0, Promise, function() {
                            var t, n, r, a, o;
                            return H(this, function(e) {
                                if (null == i) throw new N("userId", "Required parameter userId was null or undefined when calling v1UsersUserIdBundlesBundleTypeGet.");
                                if (null == s) throw new N("bundleType", "Required parameter bundleType was null or undefined when calling v1UsersUserIdBundlesBundleTypeGet.");
                                return a = "/v1/users/{userId}/bundles/{bundleType}".replace("{userId}", encodeURIComponent(String(i))).replace("{bundleType}", encodeURIComponent(String(s))), t = T.Qc(a, !0), h && (o = h.baseOptions), n = M(M({
                                    method: "GET"
                                }, o), d), r = {}, a = {}, void 0 !== u && (a.limit = u), void 0 !== c && (a.cursor = c), void 0 !== l && (a.sortOrder = l), t.query = M(M(M({}, t.query), a), d.query), delete t.search, o = o && o.headers ? o.headers : {}, n.headers = M(M(M({}, r), o), d.headers), [2, {
                                    url: T.WU(t),
                                    options: n
                                }]
                            })
                        })
                    },
                    v1UsersUserIdBundlesGet: function(i, s, u, c, l) {
                        return void 0 === l && (l = {}), Q(e, void 0, Promise, function() {
                            var t, n, r, a, o;
                            return H(this, function(e) {
                                if (null == i) throw new N("userId", "Required parameter userId was null or undefined when calling v1UsersUserIdBundlesGet.");
                                return a = "/v1/users/{userId}/bundles".replace("{userId}", encodeURIComponent(String(i))), t = T.Qc(a, !0), h && (o = h.baseOptions), n = M(M({
                                    method: "GET"
                                }, o), l), r = {}, a = {}, void 0 !== s && (a.sortOrder = s), void 0 !== u && (a.limit = u), void 0 !== c && (a.cursor = c), t.query = M(M(M({}, t.query), a), l.query), delete t.search, o = o && o.headers ? o.headers : {}, n.headers = M(M(M({}, r), o), l.headers), [2, {
                                    url: T.WU(t),
                                    options: n
                                }]
                            })
                        })
                    }
                }
            }

            function J(u) {
                return {
                    v1AssetsAssetIdBundlesGet: function(t, r, a, o, i) {
                        return Q(this, void 0, Promise, function() {
                            var n;
                            return H(this, function(e) {
                                switch (e.label) {
                                    case 0:
                                        return [4, V(u).v1AssetsAssetIdBundlesGet(t, r, a, o, i)];
                                    case 1:
                                        return n = e.sent(), [2, function(e, t) {
                                            void 0 === e && (e = q), void 0 === t && (t = F);
                                            t = M(M({}, n.options), {
                                                url: t + n.url
                                            });
                                            return e.request(t)
                                        }]
                                }
                            })
                        })
                    },
                    v1BundlesBundleIdDetailsGet: function(t, r) {
                        return Q(this, void 0, Promise, function() {
                            var n;
                            return H(this, function(e) {
                                switch (e.label) {
                                    case 0:
                                        return [4, V(u).v1BundlesBundleIdDetailsGet(t, r)];
                                    case 1:
                                        return n = e.sent(), [2, function(e, t) {
                                            void 0 === e && (e = q), void 0 === t && (t = F);
                                            t = M(M({}, n.options), {
                                                url: t + n.url
                                            });
                                            return e.request(t)
                                        }]
                                }
                            })
                        })
                    },
                    v1BundlesBundleIdRecommendationsGet: function(t, r, a) {
                        return Q(this, void 0, Promise, function() {
                            var n;
                            return H(this, function(e) {
                                switch (e.label) {
                                    case 0:
                                        return [4, V(u).v1BundlesBundleIdRecommendationsGet(t, r, a)];
                                    case 1:
                                        return n = e.sent(), [2, function(e, t) {
                                            void 0 === e && (e = q), void 0 === t && (t = F);
                                            t = M(M({}, n.options), {
                                                url: t + n.url
                                            });
                                            return e.request(t)
                                        }]
                                }
                            })
                        })
                    },
                    v1BundlesBundleIdUnpackPost: function(t, r) {
                        return Q(this, void 0, Promise, function() {
                            var n;
                            return H(this, function(e) {
                                switch (e.label) {
                                    case 0:
                                        return [4, V(u).v1BundlesBundleIdUnpackPost(t, r)];
                                    case 1:
                                        return n = e.sent(), [2, function(e, t) {
                                            void 0 === e && (e = q), void 0 === t && (t = F);
                                            t = M(M({}, n.options), {
                                                url: t + n.url
                                            });
                                            return e.request(t)
                                        }]
                                }
                            })
                        })
                    },
                    v1BundlesDetailsGet: function(t, r) {
                        return Q(this, void 0, Promise, function() {
                            var n;
                            return H(this, function(e) {
                                switch (e.label) {
                                    case 0:
                                        return [4, V(u).v1BundlesDetailsGet(t, r)];
                                    case 1:
                                        return n = e.sent(), [2, function(e, t) {
                                            void 0 === e && (e = q), void 0 === t && (t = F);
                                            t = M(M({}, n.options), {
                                                url: t + n.url
                                            });
                                            return e.request(t)
                                        }]
                                }
                            })
                        })
                    },
                    v1UsersUserIdBundlesBundleTypeGet: function(t, r, a, o, i, s) {
                        return Q(this, void 0, Promise, function() {
                            var n;
                            return H(this, function(e) {
                                switch (e.label) {
                                    case 0:
                                        return [4, V(u).v1UsersUserIdBundlesBundleTypeGet(t, r, a, o, i, s)];
                                    case 1:
                                        return n = e.sent(), [2, function(e, t) {
                                            void 0 === e && (e = q), void 0 === t && (t = F);
                                            t = M(M({}, n.options), {
                                                url: t + n.url
                                            });
                                            return e.request(t)
                                        }]
                                }
                            })
                        })
                    },
                    v1UsersUserIdBundlesGet: function(t, r, a, o, i) {
                        return Q(this, void 0, Promise, function() {
                            var n;
                            return H(this, function(e) {
                                switch (e.label) {
                                    case 0:
                                        return [4, V(u).v1UsersUserIdBundlesGet(t, r, a, o, i)];
                                    case 1:
                                        return n = e.sent(), [2, function(e, t) {
                                            void 0 === e && (e = q), void 0 === t && (t = F);
                                            t = M(M({}, n.options), {
                                                url: t + n.url
                                            });
                                            return e.request(t)
                                        }]
                                }
                            })
                        })
                    }
                }
            }(X = {}).Accessories = "Accessories", X.All = "All", X.AvatarAnimations = "AvatarAnimations", X.BackAccessories = "BackAccessories", X.BodyParts = "BodyParts", X.Clothing = "Clothing", X.Collectibles = "Collectibles", X.FaceAccessories = "FaceAccessories", X.Faces = "Faces", X.Featured = "Featured", X.FrontAccessories = "FrontAccessories", X.Gear = "Gear", X.HairAccessories = "HairAccessories", X.Hats = "Hats", X.Heads = "Heads", X.NeckAccessories = "NeckAccessories", X.Pants = "Pants", X.Shirts = "Shirts", X.ShoulderAccessories = "ShoulderAccessories", X.Tshirts = "Tshirts", X.WaistAccessories = "WaistAccessories", X.Bundles = "Bundles", X.AnimationBundles = "AnimationBundles", X.EmoteAnimations = "EmoteAnimations", X.CommunityCreations = "CommunityCreations", X.Melee = "Melee", X.Ranged = "Ranged", X.Explosive = "Explosive", X.PowerUp = "PowerUp", X.Navigation = "Navigation", X.Musical = "Musical", X.Social = "Social", X.Building = "Building", X.Transport = "Transport", X.Premium = "Premium", X.Recommended = "Recommended", (oe = {}).Accessories = "Accessories", oe.All = "All", oe.AvatarAnimations = "AvatarAnimations", oe.BodyParts = "BodyParts", oe.Clothing = "Clothing", oe.Collectibles = "Collectibles", oe.Featured = "Featured", oe.Gear = "Gear", oe.CommunityCreations = "CommunityCreations", oe.Premium = "Premium", oe.Recommended = "Recommended", (Ge = {}).Accessories = "Accessories", Ge.All = "All", Ge.AvatarAnimations = "AvatarAnimations", Ge.BodyParts = "BodyParts", Ge.Clothing = "Clothing", Ge.Collectibles = "Collectibles", Ge.Featured = "Featured", Ge.Gear = "Gear", Ge.CommunityCreations = "CommunityCreations", Ge.Premium = "Premium", Ge.Recommended = "Recommended", (Se = {}).User = "User", Se.Group = "Group", (Ue = {}).All = "All", Ue.Robux = "Robux", Ue.Tickets = "Tickets", Ue.CustomRobux = "CustomRobux", Ue.CustomTickets = "CustomTickets", Ue.Free = "Free", (Oe = {}).Relevance = "Relevance", Oe.Favorited = "Favorited", Oe.Sales = "Sales", Oe.Updated = "Updated", Oe.PriceAsc = "PriceAsc", Oe.PriceDesc = "PriceDesc", (Fe = {}).Past12Hours = "Past12Hours", Fe.PastDay = "PastDay", Fe.Past3Days = "Past3Days", Fe.PastWeek = "PastWeek", Fe.PastMonth = "PastMonth", Fe.AllTime = "AllTime", (Br = {}).Accessories = "Accessories", Br.All = "All", Br.AvatarAnimations = "AvatarAnimations", Br.BodyParts = "BodyParts", Br.Clothing = "Clothing", Br.Collectibles = "Collectibles", Br.Featured = "Featured", Br.Gear = "Gear", Br.CommunityCreations = "CommunityCreations", Br.Premium = "Premium", Br.Recommended = "Recommended", (Dn = {}).Accessories = "Accessories", Dn.All = "All", Dn.AvatarAnimations = "AvatarAnimations", Dn.BackAccessories = "BackAccessories", Dn.BodyParts = "BodyParts", Dn.Clothing = "Clothing", Dn.Collectibles = "Collectibles", Dn.FaceAccessories = "FaceAccessories", Dn.Faces = "Faces", Dn.Featured = "Featured", Dn.FrontAccessories = "FrontAccessories", Dn.Gear = "Gear", Dn.HairAccessories = "HairAccessories", Dn.Hats = "Hats", Dn.Heads = "Heads", Dn.NeckAccessories = "NeckAccessories", Dn.Pants = "Pants", Dn.Shirts = "Shirts", Dn.ShoulderAccessories = "ShoulderAccessories", Dn.Tshirts = "Tshirts", Dn.WaistAccessories = "WaistAccessories", Dn.Bundles = "Bundles", Dn.AnimationBundles = "AnimationBundles", Dn.EmoteAnimations = "EmoteAnimations", Dn.CommunityCreations = "CommunityCreations", Dn.Melee = "Melee", Dn.Ranged = "Ranged", Dn.Explosive = "Explosive", Dn.PowerUp = "PowerUp", Dn.Navigation = "Navigation", Dn.Musical = "Musical", Dn.Social = "Social", Dn.Building = "Building", Dn.Transport = "Transport", Dn.Premium = "Premium", Dn.Recommended = "Recommended", (Nn = {}).Accessories = "Accessories", Nn.All = "All", Nn.AvatarAnimations = "AvatarAnimations", Nn.BodyParts = "BodyParts", Nn.Clothing = "Clothing", Nn.Collectibles = "Collectibles", Nn.Featured = "Featured", Nn.Gear = "Gear", Nn.CommunityCreations = "CommunityCreations", Nn.Premium = "Premium", Nn.Recommended = "Recommended", (u = {}).All = "All", u.Robux = "Robux", u.Tickets = "Tickets", u.CustomRobux = "CustomRobux", u.CustomTickets = "CustomTickets", u.Free = "Free", (Pn = {}).All = "All", Pn.Robux = "Robux", Pn.Tickets = "Tickets", Pn.CustomRobux = "CustomRobux", Pn.CustomTickets = "CustomTickets", Pn.Free = "Free", (Me = {}).All = "All", Me.Robux = "Robux", Me.Tickets = "Tickets", Me.CustomRobux = "CustomRobux", Me.CustomTickets = "CustomTickets", Me.Free = "Free", (Ye = {}).Asset = "Asset", Ye.Bundle = "Bundle", (pt = {}).Image = "Image", pt.TShirt = "TShirt", pt.Audio = "Audio", pt.Mesh = "Mesh", pt.Lua = "Lua", pt.HTML = "HTML", pt.Text = "Text", pt.Hat = "Hat", pt.Place = "Place", pt.Model = "Model", pt.Shirt = "Shirt", pt.Pants = "Pants", pt.Decal = "Decal", pt.Avatar = "Avatar", pt.Head = "Head", pt.Face = "Face", pt.Gear = "Gear", pt.Badge = "Badge", pt.GroupEmblem = "GroupEmblem", pt.Animation = "Animation", pt.Arms = "Arms", pt.Legs = "Legs", pt.Torso = "Torso", pt.RightArm = "RightArm", pt.LeftArm = "LeftArm", pt.LeftLeg = "LeftLeg", pt.RightLeg = "RightLeg", pt.Package = "Package", pt.YouTubeVideo = "YouTubeVideo", pt.GamePass = "GamePass", pt.App = "App", pt.Code = "Code", pt.Plugin = "Plugin", pt.SolidModel = "SolidModel", pt.MeshPart = "MeshPart", pt.HairAccessory = "HairAccessory", pt.FaceAccessory = "FaceAccessory", pt.NeckAccessory = "NeckAccessory", pt.ShoulderAccessory = "ShoulderAccessory", pt.FrontAccessory = "FrontAccessory", pt.BackAccessory = "BackAccessory", pt.WaistAccessory = "WaistAccessory", pt.ClimbAnimation = "ClimbAnimation", pt.DeathAnimation = "DeathAnimation", pt.FallAnimation = "FallAnimation", pt.IdleAnimation = "IdleAnimation", pt.JumpAnimation = "JumpAnimation", pt.RunAnimation = "RunAnimation", pt.SwimAnimation = "SwimAnimation", pt.WalkAnimation = "WalkAnimation", pt.PoseAnimation = "PoseAnimation", pt.LocalizationTableManifest = "LocalizationTableManifest", pt.LocalizationTableTranslation = "LocalizationTableTranslation", pt.EmoteAnimation = "EmoteAnimation", pt.Video = "Video", pt.TexturePack = "TexturePack", (y = {}).BodyParts = "BodyParts", y.AvatarAnimations = "AvatarAnimations", (B = {}).All = "All", B.Tutorial = "Tutorial", B.Scary = "Scary", B.TownAndCity = "TownAndCity", B.War = "War", B.Funny = "Funny", B.Fantasy = "Fantasy", B.Adventure = "Adventure", B.SciFi = "SciFi", B.Pirate = "Pirate", B.FPS = "FPS", B.RPG = "RPG", B.Sports = "Sports", B.Ninja = "Ninja", B.WildWest = "WildWest", (X = {}).New = "New", X.Sale = "Sale", X.XboxExclusive = "XboxExclusive", X.AmazonExclusive = "AmazonExclusive", X.GooglePlayExclusive = "GooglePlayExclusive", X.IosExclusive = "IosExclusive", X.SaleTimer = "SaleTimer", (oe = {}).ThirteenPlus = "ThirteenPlus", oe.LimitedUnique = "LimitedUnique", oe.Limited = "Limited", oe.BuildersClub = "BuildersClub", oe.TurboBuildersClub = "TurboBuildersClub", oe.OutrageousBuildersClub = "OutrageousBuildersClub", oe.Rthro = "Rthro", (Ge = {}).User = "User", Ge.Group = "Group", (Se = {}).Asset = "Asset", Se.Bundle = "Bundle", (Ue = {}).Image = "Image", Ue.TShirt = "TShirt", Ue.Audio = "Audio", Ue.Mesh = "Mesh", Ue.Lua = "Lua", Ue.HTML = "HTML", Ue.Text = "Text", Ue.Hat = "Hat", Ue.Place = "Place", Ue.Model = "Model", Ue.Shirt = "Shirt", Ue.Pants = "Pants", Ue.Decal = "Decal", Ue.Avatar = "Avatar", Ue.Head = "Head", Ue.Face = "Face", Ue.Gear = "Gear", Ue.Badge = "Badge", Ue.GroupEmblem = "GroupEmblem", Ue.Animation = "Animation", Ue.Arms = "Arms", Ue.Legs = "Legs", Ue.Torso = "Torso", Ue.RightArm = "RightArm", Ue.LeftArm = "LeftArm", Ue.LeftLeg = "LeftLeg", Ue.RightLeg = "RightLeg", Ue.Package = "Package", Ue.YouTubeVideo = "YouTubeVideo", Ue.GamePass = "GamePass", Ue.App = "App", Ue.Code = "Code", Ue.Plugin = "Plugin", Ue.SolidModel = "SolidModel", Ue.MeshPart = "MeshPart", Ue.HairAccessory = "HairAccessory", Ue.FaceAccessory = "FaceAccessory", Ue.NeckAccessory = "NeckAccessory", Ue.ShoulderAccessory = "ShoulderAccessory", Ue.FrontAccessory = "FrontAccessory", Ue.BackAccessory = "BackAccessory", Ue.WaistAccessory = "WaistAccessory", Ue.ClimbAnimation = "ClimbAnimation", Ue.DeathAnimation = "DeathAnimation", Ue.FallAnimation = "FallAnimation", Ue.IdleAnimation = "IdleAnimation", Ue.JumpAnimation = "JumpAnimation", Ue.RunAnimation = "RunAnimation", Ue.SwimAnimation = "SwimAnimation", Ue.WalkAnimation = "WalkAnimation", Ue.PoseAnimation = "PoseAnimation", Ue.LocalizationTableManifest = "LocalizationTableManifest", Ue.LocalizationTableTranslation = "LocalizationTableTranslation", Ue.EmoteAnimation = "EmoteAnimation", Ue.Video = "Video", Ue.TexturePack = "TexturePack", (Oe = {}).BodyParts = "BodyParts", Oe.AvatarAnimations = "AvatarAnimations", (Fe = {}).All = "All", Fe.Tutorial = "Tutorial", Fe.Scary = "Scary", Fe.TownAndCity = "TownAndCity", Fe.War = "War", Fe.Funny = "Funny", Fe.Fantasy = "Fantasy", Fe.Adventure = "Adventure", Fe.SciFi = "SciFi", Fe.Pirate = "Pirate", Fe.FPS = "FPS", Fe.RPG = "RPG", Fe.Sports = "Sports", Fe.Ninja = "Ninja", Fe.WildWest = "WildWest", (Br = {}).New = "New", Br.Sale = "Sale", Br.XboxExclusive = "XboxExclusive", Br.AmazonExclusive = "AmazonExclusive", Br.GooglePlayExclusive = "GooglePlayExclusive", Br.IosExclusive = "IosExclusive", Br.SaleTimer = "SaleTimer", (Dn = {}).ThirteenPlus = "ThirteenPlus", Dn.LimitedUnique = "LimitedUnique", Dn.Limited = "Limited", Dn.BuildersClub = "BuildersClub", Dn.TurboBuildersClub = "TurboBuildersClub", Dn.OutrageousBuildersClub = "OutrageousBuildersClub", Dn.Rthro = "Rthro", (Nn = {}).User = "User", Nn.Group = "Group", (u = {}).Accessories = "Accessories", u.All = "All", u.AvatarAnimations = "AvatarAnimations", u.BodyParts = "BodyParts", u.Clothing = "Clothing", u.Collectibles = "Collectibles", u.Featured = "Featured", u.Gear = "Gear", u.CommunityCreations = "CommunityCreations", u.Premium = "Premium", u.Recommended = "Recommended", (Pn = {}).Accessories = "Accessories", Pn.All = "All", Pn.AvatarAnimations = "AvatarAnimations", Pn.BackAccessories = "BackAccessories", Pn.BodyParts = "BodyParts", Pn.Clothing = "Clothing", Pn.Collectibles = "Collectibles", Pn.FaceAccessories = "FaceAccessories", Pn.Faces = "Faces", Pn.Featured = "Featured", Pn.FrontAccessories = "FrontAccessories", Pn.Gear = "Gear", Pn.HairAccessories = "HairAccessories", Pn.Hats = "Hats", Pn.Heads = "Heads", Pn.NeckAccessories = "NeckAccessories", Pn.Pants = "Pants", Pn.Shirts = "Shirts", Pn.ShoulderAccessories = "ShoulderAccessories", Pn.Tshirts = "Tshirts", Pn.WaistAccessories = "WaistAccessories", Pn.Bundles = "Bundles", Pn.AnimationBundles = "AnimationBundles", Pn.EmoteAnimations = "EmoteAnimations", Pn.CommunityCreations = "CommunityCreations", Pn.Melee = "Melee", Pn.Ranged = "Ranged", Pn.Explosive = "Explosive", Pn.PowerUp = "PowerUp", Pn.Navigation = "Navigation", Pn.Musical = "Musical", Pn.Social = "Social", Pn.Building = "Building", Pn.Transport = "Transport", Pn.Premium = "Premium", Pn.Recommended = "Recommended", (Me = {}).Past12Hours = "Past12Hours", Me.PastDay = "PastDay", Me.Past3Days = "Past3Days", Me.PastWeek = "PastWeek", Me.PastMonth = "PastMonth", Me.AllTime = "AllTime", (Ye = {}).All = "All", Ye.Robux = "Robux", Ye.Tickets = "Tickets", Ye.CustomRobux = "CustomRobux", Ye.CustomTickets = "CustomTickets", Ye.Free = "Free", (pt = {}).TownAndCity = "TownAndCity", pt.Medieval = "Medieval", pt.SciFi = "SciFi", pt.Fighting = "Fighting", pt.Horror = "Horror", pt.Naval = "Naval", pt.Adventure = "Adventure", pt.Sports = "Sports", pt.Comedy = "Comedy", pt.Western = "Western", pt.Military = "Military", pt.Building = "Building", pt.Fps = "Fps", pt.Rpg = "Rpg", (y = {}).Relevance = "Relevance", y.Favorited = "Favorited", y.Sales = "Sales", y.Updated = "Updated", y.PriceAsc = "PriceAsc", y.PriceDesc = "PriceDesc", (B = {}).User = "User", B.Group = "Group", (X = {}).Asset = "Asset", X.Bundle = "Bundle", (oe = {}).Accessories = "Accessories", oe.All = "All", oe.AvatarAnimations = "AvatarAnimations", oe.BodyParts = "BodyParts", oe.Clothing = "Clothing", oe.Collectibles = "Collectibles", oe.Featured = "Featured", oe.Gear = "Gear", oe.CommunityCreations = "CommunityCreations", oe.Premium = "Premium", oe.Recommended = "Recommended", (Ge = {}).TownAndCity = "TownAndCity", Ge.Medieval = "Medieval", Ge.SciFi = "SciFi", Ge.Fighting = "Fighting", Ge.Horror = "Horror", Ge.Naval = "Naval", Ge.Adventure = "Adventure", Ge.Sports = "Sports", Ge.Comedy = "Comedy", Ge.Western = "Western", Ge.Military = "Military", Ge.Building = "Building", Ge.Fps = "Fps", Ge.Rpg = "Rpg", (Se = {}).Asset = "Asset", Se.Bundle = "Bundle", (Ue = {}).All = "All", Ue.Robux = "Robux", Ue.Tickets = "Tickets", Ue.CustomRobux = "CustomRobux", Ue.CustomTickets = "CustomTickets", Ue.Free = "Free", (Oe = {}).Past12Hours = "Past12Hours", Oe.PastDay = "PastDay", Oe.Past3Days = "Past3Days", Oe.PastWeek = "PastWeek", Oe.PastMonth = "PastMonth", Oe.AllTime = "AllTime", (Fe = {}).Relevance = "Relevance", Fe.Favorited = "Favorited", Fe.Sales = "Sales", Fe.Updated = "Updated", Fe.PriceAsc = "PriceAsc", Fe.PriceDesc = "PriceDesc", (Br = {}).Asc = "Asc", Br.Desc = "Desc", (Dn = {}).Accessories = "Accessories", Dn.All = "All", Dn.AvatarAnimations = "AvatarAnimations", Dn.BackAccessories = "BackAccessories", Dn.BodyParts = "BodyParts", Dn.Clothing = "Clothing", Dn.Collectibles = "Collectibles", Dn.FaceAccessories = "FaceAccessories", Dn.Faces = "Faces", Dn.Featured = "Featured", Dn.FrontAccessories = "FrontAccessories", Dn.Gear = "Gear", Dn.HairAccessories = "HairAccessories", Dn.Hats = "Hats", Dn.Heads = "Heads", Dn.NeckAccessories = "NeckAccessories", Dn.Pants = "Pants", Dn.Shirts = "Shirts", Dn.ShoulderAccessories = "ShoulderAccessories", Dn.Tshirts = "Tshirts", Dn.WaistAccessories = "WaistAccessories", Dn.Bundles = "Bundles", Dn.AnimationBundles = "AnimationBundles", Dn.EmoteAnimations = "EmoteAnimations", Dn.CommunityCreations = "CommunityCreations", Dn.Melee = "Melee", Dn.Ranged = "Ranged", Dn.Explosive = "Explosive", Dn.PowerUp = "PowerUp", Dn.Navigation = "Navigation", Dn.Musical = "Musical", Dn.Social = "Social", Dn.Building = "Building", Dn.Transport = "Transport", Dn.Premium = "Premium", Dn.Recommended = "Recommended", (Nn = {}).Asc = "Asc", Nn.Desc = "Desc", (u = {}).Forward = "Forward", u.Backward = "Backward", (Pn = {}).Asc = "Asc", Pn.Desc = "Desc", (Me = {}).Forward = "Forward", Me.Backward = "Backward", (Ye = {}).Asc = "Asc", Ye.Desc = "Desc", (pt = {}).Forward = "Forward", pt.Backward = "Backward", (y = {}).Asc = "Asc", y.Desc = "Desc", (B = {}).Forward = "Forward", B.Backward = "Backward";
            var K, X = (W(Y, K = j), Y.prototype.v1AssetsAssetIdBundlesGet = function(e, t, n, r, a) {
                var o = this;
                return J(this.configuration).v1AssetsAssetIdBundlesGet(e, t, n, r, a).then(function(e) {
                    return e(o.axios, o.basePath)
                })
            }, Y.prototype.v1BundlesBundleIdDetailsGet = function(e, t) {
                var n = this;
                return J(this.configuration).v1BundlesBundleIdDetailsGet(e, t).then(function(e) {
                    return e(n.axios, n.basePath)
                })
            }, Y.prototype.v1BundlesBundleIdRecommendationsGet = function(e, t, n) {
                var r = this;
                return J(this.configuration).v1BundlesBundleIdRecommendationsGet(e, t, n).then(function(e) {
                    return e(r.axios, r.basePath)
                })
            }, Y.prototype.v1BundlesBundleIdUnpackPost = function(e, t) {
                var n = this;
                return J(this.configuration).v1BundlesBundleIdUnpackPost(e, t).then(function(e) {
                    return e(n.axios, n.basePath)
                })
            }, Y.prototype.v1BundlesDetailsGet = function(e, t) {
                var n = this;
                return J(this.configuration).v1BundlesDetailsGet(e, t).then(function(e) {
                    return e(n.axios, n.basePath)
                })
            }, Y.prototype.v1UsersUserIdBundlesBundleTypeGet = function(e, t, n, r, a, o) {
                var i = this;
                return J(this.configuration).v1UsersUserIdBundlesBundleTypeGet(e, t, n, r, a, o).then(function(e) {
                    return e(i.axios, i.basePath)
                })
            }, Y.prototype.v1UsersUserIdBundlesGet = function(e, t, n, r, a) {
                var o = this;
                return J(this.configuration).v1UsersUserIdBundlesGet(e, t, n, r, a).then(function(e) {
                    return e(o.axios, o.basePath)
                })
            }, Y);

            function Y() {
                return null !== K && K.apply(this, arguments) || this
            }

            function Z(c) {
                var e = this;
                return {
                    v1CatalogItemsDetailsPost: function(i, s) {
                        return void 0 === s && (s = {}), Q(e, void 0, Promise, function() {
                            var t, n, r, a, o;
                            return H(this, function(e) {
                                if (null == i) throw new N("model", "Required parameter model was null or undefined when calling v1CatalogItemsDetailsPost.");
                                return t = T.Qc("/v1/catalog/items/details", !0), c && (o = c.baseOptions), n = M(M({
                                    method: "POST"
                                }, o), s), a = {}, (r = {})["Content-Type"] = "application/json", t.query = M(M(M({}, t.query), a), s.query), delete t.search, o = o && o.headers ? o.headers : {}, n.headers = M(M(M({}, r), o), s.headers), o = "string" != typeof i || "application/json" === n.headers["Content-Type"], n.data = o ? JSON.stringify(void 0 !== i ? i : {}) : i || "", [2, {
                                    url: T.WU(t),
                                    options: n
                                }]
                            })
                        })
                    },
                    v1CatalogItemsItemIdDetailsGet: function(i, s, u) {
                        return void 0 === u && (u = {}), Q(e, void 0, Promise, function() {
                            var t, n, r, a, o;
                            return H(this, function(e) {
                                if (null == i) throw new N("itemId", "Required parameter itemId was null or undefined when calling v1CatalogItemsItemIdDetailsGet.");
                                if (null == s) throw new N("itemType", "Required parameter itemType was null or undefined when calling v1CatalogItemsItemIdDetailsGet.");
                                return a = "/v1/catalog/items/{itemId}/details".replace("{itemId}", encodeURIComponent(String(i))), t = T.Qc(a, !0), c && (o = c.baseOptions), n = M(M({
                                    method: "GET"
                                }, o), u), r = {}, a = {}, void 0 !== s && (a.itemType = s), t.query = M(M(M({}, t.query), a), u.query), delete t.search, o = o && o.headers ? o.headers : {}, n.headers = M(M(M({}, r), o), u.headers), [2, {
                                    url: T.WU(t),
                                    options: n
                                }]
                            })
                        })
                    },
                    v1CatalogMetadataGet: function(i) {
                        return void 0 === i && (i = {}), Q(e, void 0, Promise, function() {
                            var t, n, r, a, o;
                            return H(this, function(e) {
                                return t = T.Qc("/v1/catalog/metadata", !0), c && (o = c.baseOptions), n = M(M({
                                    method: "GET"
                                }, o), i), r = {}, a = {}, t.query = M(M(M({}, t.query), a), i.query), delete t.search, o = o && o.headers ? o.headers : {}, n.headers = M(M(M({}, r), o), i.headers), [2, {
                                    url: T.WU(t),
                                    options: n
                                }]
                            })
                        })
                    },
                    v1CatalogSortsGet: function(i) {
                        return void 0 === i && (i = {}), Q(e, void 0, Promise, function() {
                            var t, n, r, a, o;
                            return H(this, function(e) {
                                return t = T.Qc("/v1/catalog/sorts", !0), c && (o = c.baseOptions), n = M(M({
                                    method: "GET"
                                }, o), i), r = {}, a = {}, t.query = M(M(M({}, t.query), a), i.query), delete t.search, o = o && o.headers ? o.headers : {}, n.headers = M(M(M({}, r), o), i.headers), [2, {
                                    url: T.WU(t),
                                    options: n
                                }]
                            })
                        })
                    }
                }
            }

            function ee(o) {
                return {
                    v1CatalogItemsDetailsPost: function(t, r) {
                        return Q(this, void 0, Promise, function() {
                            var n;
                            return H(this, function(e) {
                                switch (e.label) {
                                    case 0:
                                        return [4, Z(o).v1CatalogItemsDetailsPost(t, r)];
                                    case 1:
                                        return n = e.sent(), [2, function(e, t) {
                                            void 0 === e && (e = q), void 0 === t && (t = F);
                                            t = M(M({}, n.options), {
                                                url: t + n.url
                                            });
                                            return e.request(t)
                                        }]
                                }
                            })
                        })
                    },
                    v1CatalogItemsItemIdDetailsGet: function(t, r, a) {
                        return Q(this, void 0, Promise, function() {
                            var n;
                            return H(this, function(e) {
                                switch (e.label) {
                                    case 0:
                                        return [4, Z(o).v1CatalogItemsItemIdDetailsGet(t, r, a)];
                                    case 1:
                                        return n = e.sent(), [2, function(e, t) {
                                            void 0 === e && (e = q), void 0 === t && (t = F);
                                            t = M(M({}, n.options), {
                                                url: t + n.url
                                            });
                                            return e.request(t)
                                        }]
                                }
                            })
                        })
                    },
                    v1CatalogMetadataGet: function(t) {
                        return Q(this, void 0, Promise, function() {
                            var n;
                            return H(this, function(e) {
                                switch (e.label) {
                                    case 0:
                                        return [4, Z(o).v1CatalogMetadataGet(t)];
                                    case 1:
                                        return n = e.sent(), [2, function(e, t) {
                                            void 0 === e && (e = q), void 0 === t && (t = F);
                                            t = M(M({}, n.options), {
                                                url: t + n.url
                                            });
                                            return e.request(t)
                                        }]
                                }
                            })
                        })
                    },
                    v1CatalogSortsGet: function(t) {
                        return Q(this, void 0, Promise, function() {
                            var n;
                            return H(this, function(e) {
                                switch (e.label) {
                                    case 0:
                                        return [4, Z(o).v1CatalogSortsGet(t)];
                                    case 1:
                                        return n = e.sent(), [2, function(e, t) {
                                            void 0 === e && (e = q), void 0 === t && (t = F);
                                            t = M(M({}, n.options), {
                                                url: t + n.url
                                            });
                                            return e.request(t)
                                        }]
                                }
                            })
                        })
                    }
                }
            }
            var te, ne, re, ae, oe = (W(ie, te = j), ie.prototype.v1CatalogItemsDetailsPost = function(e, t) {
                var n = this;
                return ee(this.configuration).v1CatalogItemsDetailsPost(e, t).then(function(e) {
                    return e(n.axios, n.basePath)
                })
            }, ie.prototype.v1CatalogItemsItemIdDetailsGet = function(e, t, n) {
                var r = this;
                return ee(this.configuration).v1CatalogItemsItemIdDetailsGet(e, t, n).then(function(e) {
                    return e(r.axios, r.basePath)
                })
            }, ie.prototype.v1CatalogMetadataGet = function(e) {
                var t = this;
                return ee(this.configuration).v1CatalogMetadataGet(e).then(function(e) {
                    return e(t.axios, t.basePath)
                })
            }, ie.prototype.v1CatalogSortsGet = function(e) {
                var t = this;
                return ee(this.configuration).v1CatalogSortsGet(e).then(function(e) {
                    return e(t.axios, t.basePath)
                })
            }, ie);

            function ie() {
                return null !== te && te.apply(this, arguments) || this
            }

            function se(s) {
                var e = this;
                return {
                    v1AssetToCategoryGet: function(i) {
                        return void 0 === i && (i = {}), Q(e, void 0, Promise, function() {
                            var t, n, r, a, o;
                            return H(this, function(e) {
                                return t = T.Qc("/v1/asset-to-category", !0), s && (o = s.baseOptions), n = M(M({
                                    method: "GET"
                                }, o), i), r = {}, a = {}, t.query = M(M(M({}, t.query), a), i.query), delete t.search, o = o && o.headers ? o.headers : {}, n.headers = M(M(M({}, r), o), i.headers), [2, {
                                    url: T.WU(t),
                                    options: n
                                }]
                            })
                        })
                    },
                    v1AssetToSubcategoryGet: function(i) {
                        return void 0 === i && (i = {}), Q(e, void 0, Promise, function() {
                            var t, n, r, a, o;
                            return H(this, function(e) {
                                return t = T.Qc("/v1/asset-to-subcategory", !0), s && (o = s.baseOptions), n = M(M({
                                    method: "GET"
                                }, o), i), r = {}, a = {}, t.query = M(M(M({}, t.query), a), i.query), delete t.search, o = o && o.headers ? o.headers : {}, n.headers = M(M(M({}, r), o), i.headers), [2, {
                                    url: T.WU(t),
                                    options: n
                                }]
                            })
                        })
                    },
                    v1CategoriesGet: function(i) {
                        return void 0 === i && (i = {}), Q(e, void 0, Promise, function() {
                            var t, n, r, a, o;
                            return H(this, function(e) {
                                return t = T.Qc("/v1/categories", !0), s && (o = s.baseOptions), n = M(M({
                                    method: "GET"
                                }, o), i), r = {}, a = {}, t.query = M(M(M({}, t.query), a), i.query), delete t.search, o = o && o.headers ? o.headers : {}, n.headers = M(M(M({}, r), o), i.headers), [2, {
                                    url: T.WU(t),
                                    options: n
                                }]
                            })
                        })
                    },
                    v1SubcategoriesGet: function(i) {
                        return void 0 === i && (i = {}), Q(e, void 0, Promise, function() {
                            var t, n, r, a, o;
                            return H(this, function(e) {
                                return t = T.Qc("/v1/subcategories", !0), s && (o = s.baseOptions), n = M(M({
                                    method: "GET"
                                }, o), i), r = {}, a = {}, t.query = M(M(M({}, t.query), a), i.query), delete t.search, o = o && o.headers ? o.headers : {}, n.headers = M(M(M({}, r), o), i.headers), [2, {
                                    url: T.WU(t),
                                    options: n
                                }]
                            })
                        })
                    }
                }
            }

            function ue(r) {
                return {
                    v1AssetToCategoryGet: function(t) {
                        return Q(this, void 0, Promise, function() {
                            var n;
                            return H(this, function(e) {
                                switch (e.label) {
                                    case 0:
                                        return [4, se(r).v1AssetToCategoryGet(t)];
                                    case 1:
                                        return n = e.sent(), [2, function(e, t) {
                                            void 0 === e && (e = q), void 0 === t && (t = F);
                                            t = M(M({}, n.options), {
                                                url: t + n.url
                                            });
                                            return e.request(t)
                                        }]
                                }
                            })
                        })
                    },
                    v1AssetToSubcategoryGet: function(t) {
                        return Q(this, void 0, Promise, function() {
                            var n;
                            return H(this, function(e) {
                                switch (e.label) {
                                    case 0:
                                        return [4, se(r).v1AssetToSubcategoryGet(t)];
                                    case 1:
                                        return n = e.sent(), [2, function(e, t) {
                                            void 0 === e && (e = q), void 0 === t && (t = F);
                                            t = M(M({}, n.options), {
                                                url: t + n.url
                                            });
                                            return e.request(t)
                                        }]
                                }
                            })
                        })
                    },
                    v1CategoriesGet: function(t) {
                        return Q(this, void 0, Promise, function() {
                            var n;
                            return H(this, function(e) {
                                switch (e.label) {
                                    case 0:
                                        return [4, se(r).v1CategoriesGet(t)];
                                    case 1:
                                        return n = e.sent(), [2, function(e, t) {
                                            void 0 === e && (e = q), void 0 === t && (t = F);
                                            t = M(M({}, n.options), {
                                                url: t + n.url
                                            });
                                            return e.request(t)
                                        }]
                                }
                            })
                        })
                    },
                    v1SubcategoriesGet: function(t) {
                        return Q(this, void 0, Promise, function() {
                            var n;
                            return H(this, function(e) {
                                switch (e.label) {
                                    case 0:
                                        return [4, se(r).v1SubcategoriesGet(t)];
                                    case 1:
                                        return n = e.sent(), [2, function(e, t) {
                                            void 0 === e && (e = q), void 0 === t && (t = F);
                                            t = M(M({}, n.options), {
                                                url: t + n.url
                                            });
                                            return e.request(t)
                                        }]
                                }
                            })
                        })
                    }
                }
            }

            function ce() {
                return null !== ne && ne.apply(this, arguments) || this
            }

            function le(a) {
                return {
                    v1ExclusiveItemsAppStoreTypeBundlesGet: function(t, r) {
                        return Q(this, void 0, Promise, function() {
                            var n;
                            return H(this, function(e) {
                                switch (e.label) {
                                    case 0:
                                        return [4, function(u) {
                                            var e = this;
                                            return {
                                                v1ExclusiveItemsAppStoreTypeBundlesGet: function(i, s) {
                                                    return void 0 === s && (s = {}), Q(e, void 0, Promise, function() {
                                                        var t, n, r, a, o;
                                                        return H(this, function(e) {
                                                            if (null == i) throw new N("appStoreType", "Required parameter appStoreType was null or undefined when calling v1ExclusiveItemsAppStoreTypeBundlesGet.");
                                                            return a = "/v1/exclusive-items/{appStoreType}/bundles".replace("{appStoreType}", encodeURIComponent(String(i))), t = T.Qc(a, !0), u && (o = u.baseOptions), n = M(M({
                                                                method: "GET"
                                                            }, o), s), r = {}, a = {}, t.query = M(M(M({}, t.query), a), s.query), delete t.search, o = o && o.headers ? o.headers : {}, n.headers = M(M(M({}, r), o), s.headers), [2, {
                                                                url: T.WU(t),
                                                                options: n
                                                            }]
                                                        })
                                                    })
                                                }
                                            }
                                        }(a).v1ExclusiveItemsAppStoreTypeBundlesGet(t, r)];
                                    case 1:
                                        return n = e.sent(), [2, function(e, t) {
                                            void 0 === e && (e = q), void 0 === t && (t = F);
                                            t = M(M({}, n.options), {
                                                url: t + n.url
                                            });
                                            return e.request(t)
                                        }]
                                }
                            })
                        })
                    }
                }
            }

            function de() {
                return null !== re && re.apply(this, arguments) || this
            }

            function he(c) {
                var e = this;
                return {
                    v1FavoritesAssetsAssetIdCountGet: function(i, s) {
                        return void 0 === s && (s = {}), Q(e, void 0, Promise, function() {
                            var t, n, r, a, o;
                            return H(this, function(e) {
                                if (null == i) throw new N("assetId", "Required parameter assetId was null or undefined when calling v1FavoritesAssetsAssetIdCountGet.");
                                return a = "/v1/favorites/assets/{assetId}/count".replace("{assetId}", encodeURIComponent(String(i))), t = T.Qc(a, !0), c && (o = c.baseOptions), n = M(M({
                                    method: "GET"
                                }, o), s), r = {}, a = {}, t.query = M(M(M({}, t.query), a), s.query), delete t.search, o = o && o.headers ? o.headers : {}, n.headers = M(M(M({}, r), o), s.headers), [2, {
                                    url: T.WU(t),
                                    options: n
                                }]
                            })
                        })
                    },
                    v1FavoritesBundlesBundleIdCountGet: function(i, s) {
                        return void 0 === s && (s = {}), Q(e, void 0, Promise, function() {
                            var t, n, r, a, o;
                            return H(this, function(e) {
                                if (null == i) throw new N("bundleId", "Required parameter bundleId was null or undefined when calling v1FavoritesBundlesBundleIdCountGet.");
                                return a = "/v1/favorites/bundles/{bundleId}/count".replace("{bundleId}", encodeURIComponent(String(i))), t = T.Qc(a, !0), c && (o = c.baseOptions), n = M(M({
                                    method: "GET"
                                }, o), s), r = {}, a = {}, t.query = M(M(M({}, t.query), a), s.query), delete t.search, o = o && o.headers ? o.headers : {}, n.headers = M(M(M({}, r), o), s.headers), [2, {
                                    url: T.WU(t),
                                    options: n
                                }]
                            })
                        })
                    },
                    v1FavoritesUsersUserIdAssetsAssetIdFavoriteDelete: function(i, s, u) {
                        return void 0 === u && (u = {}), Q(e, void 0, Promise, function() {
                            var t, n, r, a, o;
                            return H(this, function(e) {
                                if (null == i) throw new N("userId", "Required parameter userId was null or undefined when calling v1FavoritesUsersUserIdAssetsAssetIdFavoriteDelete.");
                                if (null == s) throw new N("assetId", "Required parameter assetId was null or undefined when calling v1FavoritesUsersUserIdAssetsAssetIdFavoriteDelete.");
                                return a = "/v1/favorites/users/{userId}/assets/{assetId}/favorite".replace("{userId}", encodeURIComponent(String(i))).replace("{assetId}", encodeURIComponent(String(s))), t = T.Qc(a, !0), c && (o = c.baseOptions), n = M(M({
                                    method: "DELETE"
                                }, o), u), r = {}, a = {}, t.query = M(M(M({}, t.query), a), u.query), delete t.search, o = o && o.headers ? o.headers : {}, n.headers = M(M(M({}, r), o), u.headers), [2, {
                                    url: T.WU(t),
                                    options: n
                                }]
                            })
                        })
                    },
                    v1FavoritesUsersUserIdAssetsAssetIdFavoriteGet: function(i, s, u) {
                        return void 0 === u && (u = {}), Q(e, void 0, Promise, function() {
                            var t, n, r, a, o;
                            return H(this, function(e) {
                                if (null == i) throw new N("userId", "Required parameter userId was null or undefined when calling v1FavoritesUsersUserIdAssetsAssetIdFavoriteGet.");
                                if (null == s) throw new N("assetId", "Required parameter assetId was null or undefined when calling v1FavoritesUsersUserIdAssetsAssetIdFavoriteGet.");
                                return a = "/v1/favorites/users/{userId}/assets/{assetId}/favorite".replace("{userId}", encodeURIComponent(String(i))).replace("{assetId}", encodeURIComponent(String(s))), t = T.Qc(a, !0), c && (o = c.baseOptions), n = M(M({
                                    method: "GET"
                                }, o), u), r = {}, a = {}, t.query = M(M(M({}, t.query), a), u.query), delete t.search, o = o && o.headers ? o.headers : {}, n.headers = M(M(M({}, r), o), u.headers), [2, {
                                    url: T.WU(t),
                                    options: n
                                }]
                            })
                        })
                    },
                    v1FavoritesUsersUserIdAssetsAssetIdFavoritePost: function(i, s, u) {
                        return void 0 === u && (u = {}), Q(e, void 0, Promise, function() {
                            var t, n, r, a, o;
                            return H(this, function(e) {
                                if (null == i) throw new N("userId", "Required parameter userId was null or undefined when calling v1FavoritesUsersUserIdAssetsAssetIdFavoritePost.");
                                if (null == s) throw new N("assetId", "Required parameter assetId was null or undefined when calling v1FavoritesUsersUserIdAssetsAssetIdFavoritePost.");
                                return a = "/v1/favorites/users/{userId}/assets/{assetId}/favorite".replace("{userId}", encodeURIComponent(String(i))).replace("{assetId}", encodeURIComponent(String(s))), t = T.Qc(a, !0), c && (o = c.baseOptions), n = M(M({
                                    method: "POST"
                                }, o), u), r = {}, a = {}, t.query = M(M(M({}, t.query), a), u.query), delete t.search, o = o && o.headers ? o.headers : {}, n.headers = M(M(M({}, r), o), u.headers), [2, {
                                    url: T.WU(t),
                                    options: n
                                }]
                            })
                        })
                    },
                    v1FavoritesUsersUserIdBundlesBundleIdFavoriteDelete: function(i, s, u) {
                        return void 0 === u && (u = {}), Q(e, void 0, Promise, function() {
                            var t, n, r, a, o;
                            return H(this, function(e) {
                                if (null == i) throw new N("userId", "Required parameter userId was null or undefined when calling v1FavoritesUsersUserIdBundlesBundleIdFavoriteDelete.");
                                if (null == s) throw new N("bundleId", "Required parameter bundleId was null or undefined when calling v1FavoritesUsersUserIdBundlesBundleIdFavoriteDelete.");
                                return a = "/v1/favorites/users/{userId}/bundles/{bundleId}/favorite".replace("{userId}", encodeURIComponent(String(i))).replace("{bundleId}", encodeURIComponent(String(s))), t = T.Qc(a, !0), c && (o = c.baseOptions), n = M(M({
                                    method: "DELETE"
                                }, o), u), r = {}, a = {}, t.query = M(M(M({}, t.query), a), u.query), delete t.search, o = o && o.headers ? o.headers : {}, n.headers = M(M(M({}, r), o), u.headers), [2, {
                                    url: T.WU(t),
                                    options: n
                                }]
                            })
                        })
                    },
                    v1FavoritesUsersUserIdBundlesBundleIdFavoriteGet: function(i, s, u) {
                        return void 0 === u && (u = {}), Q(e, void 0, Promise, function() {
                            var t, n, r, a, o;
                            return H(this, function(e) {
                                if (null == i) throw new N("userId", "Required parameter userId was null or undefined when calling v1FavoritesUsersUserIdBundlesBundleIdFavoriteGet.");
                                if (null == s) throw new N("bundleId", "Required parameter bundleId was null or undefined when calling v1FavoritesUsersUserIdBundlesBundleIdFavoriteGet.");
                                return a = "/v1/favorites/users/{userId}/bundles/{bundleId}/favorite".replace("{userId}", encodeURIComponent(String(i))).replace("{bundleId}", encodeURIComponent(String(s))), t = T.Qc(a, !0), c && (o = c.baseOptions), n = M(M({
                                    method: "GET"
                                }, o), u), r = {}, a = {}, t.query = M(M(M({}, t.query), a), u.query), delete t.search, o = o && o.headers ? o.headers : {}, n.headers = M(M(M({}, r), o), u.headers), [2, {
                                    url: T.WU(t),
                                    options: n
                                }]
                            })
                        })
                    },
                    v1FavoritesUsersUserIdBundlesBundleIdFavoritePost: function(i, s, u) {
                        return void 0 === u && (u = {}), Q(e, void 0, Promise, function() {
                            var t, n, r, a, o;
                            return H(this, function(e) {
                                if (null == i) throw new N("userId", "Required parameter userId was null or undefined when calling v1FavoritesUsersUserIdBundlesBundleIdFavoritePost.");
                                if (null == s) throw new N("bundleId", "Required parameter bundleId was null or undefined when calling v1FavoritesUsersUserIdBundlesBundleIdFavoritePost.");
                                return a = "/v1/favorites/users/{userId}/bundles/{bundleId}/favorite".replace("{userId}", encodeURIComponent(String(i))).replace("{bundleId}", encodeURIComponent(String(s))), t = T.Qc(a, !0), c && (o = c.baseOptions), n = M(M({
                                    method: "POST"
                                }, o), u), r = {}, a = {}, t.query = M(M(M({}, t.query), a), u.query), delete t.search, o = o && o.headers ? o.headers : {}, n.headers = M(M(M({}, r), o), u.headers), [2, {
                                    url: T.WU(t),
                                    options: n
                                }]
                            })
                        })
                    }
                }
            }

            function ve(o) {
                return {
                    v1FavoritesAssetsAssetIdCountGet: function(t, r) {
                        return Q(this, void 0, Promise, function() {
                            var n;
                            return H(this, function(e) {
                                switch (e.label) {
                                    case 0:
                                        return [4, he(o).v1FavoritesAssetsAssetIdCountGet(t, r)];
                                    case 1:
                                        return n = e.sent(), [2, function(e, t) {
                                            void 0 === e && (e = q), void 0 === t && (t = F);
                                            t = M(M({}, n.options), {
                                                url: t + n.url
                                            });
                                            return e.request(t)
                                        }]
                                }
                            })
                        })
                    },
                    v1FavoritesBundlesBundleIdCountGet: function(t, r) {
                        return Q(this, void 0, Promise, function() {
                            var n;
                            return H(this, function(e) {
                                switch (e.label) {
                                    case 0:
                                        return [4, he(o).v1FavoritesBundlesBundleIdCountGet(t, r)];
                                    case 1:
                                        return n = e.sent(), [2, function(e, t) {
                                            void 0 === e && (e = q), void 0 === t && (t = F);
                                            t = M(M({}, n.options), {
                                                url: t + n.url
                                            });
                                            return e.request(t)
                                        }]
                                }
                            })
                        })
                    },
                    v1FavoritesUsersUserIdAssetsAssetIdFavoriteDelete: function(t, r, a) {
                        return Q(this, void 0, Promise, function() {
                            var n;
                            return H(this, function(e) {
                                switch (e.label) {
                                    case 0:
                                        return [4, he(o).v1FavoritesUsersUserIdAssetsAssetIdFavoriteDelete(t, r, a)];
                                    case 1:
                                        return n = e.sent(), [2, function(e, t) {
                                            void 0 === e && (e = q), void 0 === t && (t = F);
                                            t = M(M({}, n.options), {
                                                url: t + n.url
                                            });
                                            return e.request(t)
                                        }]
                                }
                            })
                        })
                    },
                    v1FavoritesUsersUserIdAssetsAssetIdFavoriteGet: function(t, r, a) {
                        return Q(this, void 0, Promise, function() {
                            var n;
                            return H(this, function(e) {
                                switch (e.label) {
                                    case 0:
                                        return [4, he(o).v1FavoritesUsersUserIdAssetsAssetIdFavoriteGet(t, r, a)];
                                    case 1:
                                        return n = e.sent(), [2, function(e, t) {
                                            void 0 === e && (e = q), void 0 === t && (t = F);
                                            t = M(M({}, n.options), {
                                                url: t + n.url
                                            });
                                            return e.request(t)
                                        }]
                                }
                            })
                        })
                    },
                    v1FavoritesUsersUserIdAssetsAssetIdFavoritePost: function(t, r, a) {
                        return Q(this, void 0, Promise, function() {
                            var n;
                            return H(this, function(e) {
                                switch (e.label) {
                                    case 0:
                                        return [4, he(o).v1FavoritesUsersUserIdAssetsAssetIdFavoritePost(t, r, a)];
                                    case 1:
                                        return n = e.sent(), [2, function(e, t) {
                                            void 0 === e && (e = q), void 0 === t && (t = F);
                                            t = M(M({}, n.options), {
                                                url: t + n.url
                                            });
                                            return e.request(t)
                                        }]
                                }
                            })
                        })
                    },
                    v1FavoritesUsersUserIdBundlesBundleIdFavoriteDelete: function(t, r, a) {
                        return Q(this, void 0, Promise, function() {
                            var n;
                            return H(this, function(e) {
                                switch (e.label) {
                                    case 0:
                                        return [4, he(o).v1FavoritesUsersUserIdBundlesBundleIdFavoriteDelete(t, r, a)];
                                    case 1:
                                        return n = e.sent(), [2, function(e, t) {
                                            void 0 === e && (e = q), void 0 === t && (t = F);
                                            t = M(M({}, n.options), {
                                                url: t + n.url
                                            });
                                            return e.request(t)
                                        }]
                                }
                            })
                        })
                    },
                    v1FavoritesUsersUserIdBundlesBundleIdFavoriteGet: function(t, r, a) {
                        return Q(this, void 0, Promise, function() {
                            var n;
                            return H(this, function(e) {
                                switch (e.label) {
                                    case 0:
                                        return [4, he(o).v1FavoritesUsersUserIdBundlesBundleIdFavoriteGet(t, r, a)];
                                    case 1:
                                        return n = e.sent(), [2, function(e, t) {
                                            void 0 === e && (e = q), void 0 === t && (t = F);
                                            t = M(M({}, n.options), {
                                                url: t + n.url
                                            });
                                            return e.request(t)
                                        }]
                                }
                            })
                        })
                    },
                    v1FavoritesUsersUserIdBundlesBundleIdFavoritePost: function(t, r, a) {
                        return Q(this, void 0, Promise, function() {
                            var n;
                            return H(this, function(e) {
                                switch (e.label) {
                                    case 0:
                                        return [4, he(o).v1FavoritesUsersUserIdBundlesBundleIdFavoritePost(t, r, a)];
                                    case 1:
                                        return n = e.sent(), [2, function(e, t) {
                                            void 0 === e && (e = q), void 0 === t && (t = F);
                                            t = M(M({}, n.options), {
                                                url: t + n.url
                                            });
                                            return e.request(t)
                                        }]
                                }
                            })
                        })
                    }
                }
            }

            function pe() {
                return null !== ae && ae.apply(this, arguments) || this
            }

            function fe(l) {
                var e = this;
                return {
                    v1RecommendationsAssetAssetTypeIdGet: function(i, s, u, c) {
                        return void 0 === c && (c = {}), Q(e, void 0, Promise, function() {
                            var t, n, r, a, o;
                            return H(this, function(e) {
                                if (null == i) throw new N("assetTypeId", "Required parameter assetTypeId was null or undefined when calling v1RecommendationsAssetAssetTypeIdGet.");
                                return a = "/v1/recommendations/asset/{assetTypeId}".replace("{assetTypeId}", encodeURIComponent(String(i))), t = T.Qc(a, !0), l && (o = l.baseOptions), n = M(M({
                                    method: "GET"
                                }, o), c), r = {}, a = {}, void 0 !== s && (a.numItems = s), void 0 !== u && (a.contextAssetId = u), t.query = M(M(M({}, t.query), a), c.query), delete t.search, o = o && o.headers ? o.headers : {}, n.headers = M(M(M({}, r), o), c.headers), [2, {
                                    url: T.WU(t),
                                    options: n
                                }]
                            })
                        })
                    },
                    v1RecommendationsMetadataGet: function(i, s) {
                        return void 0 === s && (s = {}), Q(e, void 0, Promise, function() {
                            var t, n, r, a, o;
                            return H(this, function(e) {
                                return t = T.Qc("/v1/recommendations/metadata", !0), l && (o = l.baseOptions), n = M(M({
                                    method: "GET"
                                }, o), s), r = {}, a = {}, void 0 !== i && (a.page = i), t.query = M(M(M({}, t.query), a), s.query), delete t.search, o = o && o.headers ? o.headers : {}, n.headers = M(M(M({}, r), o), s.headers), [2, {
                                    url: T.WU(t),
                                    options: n
                                }]
                            })
                        })
                    }
                }
            }

            function me(i) {
                return {
                    v1RecommendationsAssetAssetTypeIdGet: function(t, r, a, o) {
                        return Q(this, void 0, Promise, function() {
                            var n;
                            return H(this, function(e) {
                                switch (e.label) {
                                    case 0:
                                        return [4, fe(i).v1RecommendationsAssetAssetTypeIdGet(t, r, a, o)];
                                    case 1:
                                        return n = e.sent(), [2, function(e, t) {
                                            void 0 === e && (e = q), void 0 === t && (t = F);
                                            t = M(M({}, n.options), {
                                                url: t + n.url
                                            });
                                            return e.request(t)
                                        }]
                                }
                            })
                        })
                    },
                    v1RecommendationsMetadataGet: function(t, r) {
                        return Q(this, void 0, Promise, function() {
                            var n;
                            return H(this, function(e) {
                                switch (e.label) {
                                    case 0:
                                        return [4, fe(i).v1RecommendationsMetadataGet(t, r)];
                                    case 1:
                                        return n = e.sent(), [2, function(e, t) {
                                            void 0 === e && (e = q), void 0 === t && (t = F);
                                            t = M(M({}, n.options), {
                                                url: t + n.url
                                            });
                                            return e.request(t)
                                        }]
                                }
                            })
                        })
                    }
                }
            }
            W(ce, ne = j), ce.prototype.v1AssetToCategoryGet = function(e) {
                var t = this;
                return ue(this.configuration).v1AssetToCategoryGet(e).then(function(e) {
                    return e(t.axios, t.basePath)
                })
            }, ce.prototype.v1AssetToSubcategoryGet = function(e) {
                var t = this;
                return ue(this.configuration).v1AssetToSubcategoryGet(e).then(function(e) {
                    return e(t.axios, t.basePath)
                })
            }, ce.prototype.v1CategoriesGet = function(e) {
                var t = this;
                return ue(this.configuration).v1CategoriesGet(e).then(function(e) {
                    return e(t.axios, t.basePath)
                })
            }, ce.prototype.v1SubcategoriesGet = function(e) {
                var t = this;
                return ue(this.configuration).v1SubcategoriesGet(e).then(function(e) {
                    return e(t.axios, t.basePath)
                })
            }, W(de, re = j), de.prototype.v1ExclusiveItemsAppStoreTypeBundlesGet = function(e, t) {
                var n = this;
                return le(this.configuration).v1ExclusiveItemsAppStoreTypeBundlesGet(e, t).then(function(e) {
                    return e(n.axios, n.basePath)
                })
            }, W(pe, ae = j), pe.prototype.v1FavoritesAssetsAssetIdCountGet = function(e, t) {
                var n = this;
                return ve(this.configuration).v1FavoritesAssetsAssetIdCountGet(e, t).then(function(e) {
                    return e(n.axios, n.basePath)
                })
            }, pe.prototype.v1FavoritesBundlesBundleIdCountGet = function(e, t) {
                var n = this;
                return ve(this.configuration).v1FavoritesBundlesBundleIdCountGet(e, t).then(function(e) {
                    return e(n.axios, n.basePath)
                })
            }, pe.prototype.v1FavoritesUsersUserIdAssetsAssetIdFavoriteDelete = function(e, t, n) {
                var r = this;
                return ve(this.configuration).v1FavoritesUsersUserIdAssetsAssetIdFavoriteDelete(e, t, n).then(function(e) {
                    return e(r.axios, r.basePath)
                })
            }, pe.prototype.v1FavoritesUsersUserIdAssetsAssetIdFavoriteGet = function(e, t, n) {
                var r = this;
                return ve(this.configuration).v1FavoritesUsersUserIdAssetsAssetIdFavoriteGet(e, t, n).then(function(e) {
                    return e(r.axios, r.basePath)
                })
            }, pe.prototype.v1FavoritesUsersUserIdAssetsAssetIdFavoritePost = function(e, t, n) {
                var r = this;
                return ve(this.configuration).v1FavoritesUsersUserIdAssetsAssetIdFavoritePost(e, t, n).then(function(e) {
                    return e(r.axios, r.basePath)
                })
            }, pe.prototype.v1FavoritesUsersUserIdBundlesBundleIdFavoriteDelete = function(e, t, n) {
                var r = this;
                return ve(this.configuration).v1FavoritesUsersUserIdBundlesBundleIdFavoriteDelete(e, t, n).then(function(e) {
                    return e(r.axios, r.basePath)
                })
            }, pe.prototype.v1FavoritesUsersUserIdBundlesBundleIdFavoriteGet = function(e, t, n) {
                var r = this;
                return ve(this.configuration).v1FavoritesUsersUserIdBundlesBundleIdFavoriteGet(e, t, n).then(function(e) {
                    return e(r.axios, r.basePath)
                })
            }, pe.prototype.v1FavoritesUsersUserIdBundlesBundleIdFavoritePost = function(e, t, n) {
                var r = this;
                return ve(this.configuration).v1FavoritesUsersUserIdBundlesBundleIdFavoritePost(e, t, n).then(function(e) {
                    return e(r.axios, r.basePath)
                })
            };
            var ge, ye, Ge = (W(Ie, ge = j), Ie.prototype.v1RecommendationsAssetAssetTypeIdGet = function(e, t, n, r) {
                var a = this;
                return me(this.configuration).v1RecommendationsAssetAssetTypeIdGet(e, t, n, r).then(function(e) {
                    return e(a.axios, a.basePath)
                })
            }, Ie.prototype.v1RecommendationsMetadataGet = function(e, t) {
                var n = this;
                return me(this.configuration).v1RecommendationsMetadataGet(e, t).then(function(e) {
                    return e(n.axios, n.basePath)
                })
            }, Ie);

            function Ie() {
                return null !== ge && ge.apply(this, arguments) || this
            }

            function be(C) {
                var e = this;
                return {
                    v1SearchItemsDetailsGet: function(i, s, u, c, l, d, h, v, p, f, m, g, y, G, I, b, P, w) {
                        return void 0 === w && (w = {}), Q(e, void 0, Promise, function() {
                            var t, n, r, a, o;
                            return H(this, function(e) {
                                return t = T.Qc("/v1/search/items/details", !0), C && (o = C.baseOptions), n = M(M({
                                    method: "GET"
                                }, o), w), r = {}, a = {}, void 0 !== i && (a["model.category"] = i), void 0 !== s && (a["model.subcategory"] = s), void 0 !== u && (a["model.sortAggregation"] = u), void 0 !== c && (a["model.sortCurrency"] = c), l && (a["model.genres"] = l), void 0 !== d && (a["model.sortType"] = d), void 0 !== h && (a["model.creatorType"] = h), void 0 !== v && (a["model.creatorTargetId"] = v), void 0 !== p && (a["model.creatorName"] = p), void 0 !== f && (a["model.maxPrice"] = f), void 0 !== m && (a["model.minPrice"] = m), void 0 !== g && (a["model.keyword"] = g), void 0 !== y && (a["model.includeNotForSale"] = y), G && (a["model.tagNames"] = G), void 0 !== I && (a.sortOrder = I), void 0 !== b && (a.limit = b), void 0 !== P && (a.cursor = P), t.query = M(M(M({}, t.query), a), w.query), delete t.search, o = o && o.headers ? o.headers : {}, n.headers = M(M(M({}, r), o), w.headers), [2, {
                                    url: T.WU(t),
                                    options: n
                                }]
                            })
                        })
                    },
                    v1SearchItemsGet: function(i, s, u, c, l, d, h, v, p, f, m, g, y, G, I, b, P, w) {
                        return void 0 === w && (w = {}), Q(e, void 0, Promise, function() {
                            var t, n, r, a, o;
                            return H(this, function(e) {
                                return t = T.Qc("/v1/search/items", !0), C && (o = C.baseOptions), n = M(M({
                                    method: "GET"
                                }, o), w), r = {}, a = {}, void 0 !== i && (a["model.category"] = i), void 0 !== s && (a["model.subcategory"] = s), void 0 !== u && (a["model.sortAggregation"] = u), void 0 !== c && (a["model.sortCurrency"] = c), l && (a["model.genres"] = l), void 0 !== d && (a["model.sortType"] = d), void 0 !== h && (a["model.creatorType"] = h), void 0 !== v && (a["model.creatorTargetId"] = v), void 0 !== p && (a["model.creatorName"] = p), void 0 !== f && (a["model.maxPrice"] = f), void 0 !== m && (a["model.minPrice"] = m), void 0 !== g && (a["model.keyword"] = g), void 0 !== y && (a["model.includeNotForSale"] = y), G && (a["model.tagNames"] = G), void 0 !== I && (a.sortOrder = I), void 0 !== b && (a.limit = b), void 0 !== P && (a.cursor = P), t.query = M(M(M({}, t.query), a), w.query), delete t.search, o = o && o.headers ? o.headers : {}, n.headers = M(M(M({}, r), o), w.headers), [2, {
                                    url: T.WU(t),
                                    options: n
                                }]
                            })
                        })
                    },
                    v1SearchNavigationMenuItemsGet: function(i) {
                        return void 0 === i && (i = {}), Q(e, void 0, Promise, function() {
                            var t, n, r, a, o;
                            return H(this, function(e) {
                                return t = T.Qc("/v1/search/navigation-menu-items", !0), C && (o = C.baseOptions), n = M(M({
                                    method: "GET"
                                }, o), i), r = {}, a = {}, t.query = M(M(M({}, t.query), a), i.query), delete t.search, o = o && o.headers ? o.headers : {}, n.headers = M(M(M({}, r), o), i.headers), [2, {
                                    url: T.WU(t),
                                    options: n
                                }]
                            })
                        })
                    }
                }
            }

            function Pe(I) {
                return {
                    v1SearchItemsDetailsGet: function(t, r, a, o, i, s, u, c, l, d, h, v, p, f, m, g, y, G) {
                        return Q(this, void 0, Promise, function() {
                            var n;
                            return H(this, function(e) {
                                switch (e.label) {
                                    case 0:
                                        return [4, be(I).v1SearchItemsDetailsGet(t, r, a, o, i, s, u, c, l, d, h, v, p, f, m, g, y, G)];
                                    case 1:
                                        return n = e.sent(), [2, function(e, t) {
                                            void 0 === e && (e = q), void 0 === t && (t = F);
                                            t = M(M({}, n.options), {
                                                url: t + n.url
                                            });
                                            return e.request(t)
                                        }]
                                }
                            })
                        })
                    },
                    v1SearchItemsGet: function(t, r, a, o, i, s, u, c, l, d, h, v, p, f, m, g, y, G) {
                        return Q(this, void 0, Promise, function() {
                            var n;
                            return H(this, function(e) {
                                switch (e.label) {
                                    case 0:
                                        return [4, be(I).v1SearchItemsGet(t, r, a, o, i, s, u, c, l, d, h, v, p, f, m, g, y, G)];
                                    case 1:
                                        return n = e.sent(), [2, function(e, t) {
                                            void 0 === e && (e = q), void 0 === t && (t = F);
                                            t = M(M({}, n.options), {
                                                url: t + n.url
                                            });
                                            return e.request(t)
                                        }]
                                }
                            })
                        })
                    },
                    v1SearchNavigationMenuItemsGet: function(t) {
                        return Q(this, void 0, Promise, function() {
                            var n;
                            return H(this, function(e) {
                                switch (e.label) {
                                    case 0:
                                        return [4, be(I).v1SearchNavigationMenuItemsGet(t)];
                                    case 1:
                                        return n = e.sent(), [2, function(e, t) {
                                            void 0 === e && (e = q), void 0 === t && (t = F);
                                            t = M(M({}, n.options), {
                                                url: t + n.url
                                            });
                                            return e.request(t)
                                        }]
                                }
                            })
                        })
                    }
                }
            }

            function we() {
                return null !== ye && ye.apply(this, arguments) || this
            }
            W(we, ye = j), we.prototype.v1SearchItemsDetailsGet = function(e, t, n, r, a, o, i, s, u, c, l, d, h, v, p, f, m, g) {
                var y = this;
                return Pe(this.configuration).v1SearchItemsDetailsGet(e, t, n, r, a, o, i, s, u, c, l, d, h, v, p, f, m, g).then(function(e) {
                    return e(y.axios, y.basePath)
                })
            }, we.prototype.v1SearchItemsGet = function(e, t, n, r, a, o, i, s, u, c, l, d, h, v, p, f, m, g) {
                var y = this;
                return Pe(this.configuration).v1SearchItemsGet(e, t, n, r, a, o, i, s, u, c, l, d, h, v, p, f, m, g).then(function(e) {
                    return e(y.axios, y.basePath)
                })
            }, we.prototype.v1SearchNavigationMenuItemsGet = function(e) {
                var t = this;
                return Pe(this.configuration).v1SearchNavigationMenuItemsGet(e).then(function(e) {
                    return e(t.axios, t.basePath)
                })
            };
            var Ce, Te, Ae = new X,
                Le = new oe,
                qe = new Ge,
                Se = {
                    getAssetRecommendations: function(e, t, n) {
                        return qe.v1RecommendationsAssetAssetTypeIdGet(e, t, n)
                    },
                    getBundleRecommendations: function(e, t) {
                        return Ae.v1BundlesBundleIdRecommendationsGet(e, t, {
                            withCredentials: !0
                        })
                    },
                    postItemDetails: function(e) {
                        return Le.v1CatalogItemsDetailsPost(e, {
                            withCredentials: !0
                        })
                    }
                },
                Ue = (Ce = function(e, t) {
                    return (Ce = Object.setPrototypeOf || {
                            __proto__: []
                        }
                        instanceof Array && function(e, t) {
                            e.__proto__ = t
                        } || function(e, t) {
                            for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n])
                        })(e, t)
                }, function(e, t) {
                    if ("function" != typeof t && null !== t) throw new TypeError("Class extends value " + String(t) + " is not a constructor or null");

                    function n() {
                        this.constructor = e
                    }
                    Ce(e, t), e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n)
                }),
                Re = l.EnvironmentUrls.gameInternationalizationApi.replace(/\/+$/, ""),
                Oe = function(e, t, n) {
                    void 0 === t && (t = Re), void 0 === n && (n = q), this.basePath = t, this.axios = n, e && (this.configuration = e, this.basePath = e.basePath || this.basePath)
                },
                De = (Te = Error, Ue(xe, Te), xe);

            function xe(e, t) {
                t = Te.call(this, t) || this;
                return t.field = e, t.name = "RequiredError", t
            }
            var Ee, Be, Fe = (Ee = function(e, t) {
                    return (Ee = Object.setPrototypeOf || {
                            __proto__: []
                        }
                        instanceof Array && function(e, t) {
                            e.__proto__ = t
                        } || function(e, t) {
                            for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n])
                        })(e, t)
                }, function(e, t) {
                    if ("function" != typeof t && null !== t) throw new TypeError("Class extends value " + String(t) + " is not a constructor or null");

                    function n() {
                        this.constructor = e
                    }
                    Ee(e, t), e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n)
                }),
                ze = function() {
                    return (ze = Object.assign || function(e) {
                        for (var t, n = 1, r = arguments.length; n < r; n++)
                            for (var a in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
                        return e
                    }).apply(this, arguments)
                },
                je = function(e, i, s, u) {
                    return new(s = s || Promise)(function(n, t) {
                        function r(e) {
                            try {
                                o(u.next(e))
                            } catch (e) {
                                t(e)
                            }
                        }

                        function a(e) {
                            try {
                                o(u.throw(e))
                            } catch (e) {
                                t(e)
                            }
                        }

                        function o(e) {
                            var t;
                            e.done ? n(e.value) : ((t = e.value) instanceof s ? t : new s(function(e) {
                                e(t)
                            })).then(r, a)
                        }
                        o((u = u.apply(e, i || [])).next())
                    })
                },
                Ne = function(n, r) {
                    var a, o, i, s = {
                            label: 0,
                            sent: function() {
                                if (1 & i[0]) throw i[1];
                                return i[1]
                            },
                            trys: [],
                            ops: []
                        },
                        e = {
                            next: t(0),
                            throw: t(1),
                            return: t(2)
                        };
                    return "function" == typeof Symbol && (e[Symbol.iterator] = function() {
                        return this
                    }), e;

                    function t(t) {
                        return function(e) {
                            return function(t) {
                                if (a) throw new TypeError("Generator is already executing.");
                                for (; s;) try {
                                    if (a = 1, o && (i = 2 & t[0] ? o.return : t[0] ? o.throw || ((i = o.return) && i.call(o), 0) : o.next) && !(i = i.call(o, t[1])).done) return i;
                                    switch (o = 0, i && (t = [2 & t[0], i.value]), t[0]) {
                                        case 0:
                                        case 1:
                                            i = t;
                                            break;
                                        case 4:
                                            return s.label++, {
                                                value: t[1],
                                                done: !1
                                            };
                                        case 5:
                                            s.label++, o = t[1], t = [0];
                                            continue;
                                        case 7:
                                            t = s.ops.pop(), s.trys.pop();
                                            continue;
                                        default:
                                            if (!(i = 0 < (i = s.trys).length && i[i.length - 1]) && (6 === t[0] || 2 === t[0])) {
                                                s = 0;
                                                continue
                                            }
                                            if (3 === t[0] && (!i || t[1] > i[0] && t[1] < i[3])) {
                                                s.label = t[1];
                                                break
                                            }
                                            if (6 === t[0] && s.label < i[1]) {
                                                s.label = i[1], i = t;
                                                break
                                            }
                                            if (i && s.label < i[2]) {
                                                s.label = i[2], s.ops.push(t);
                                                break
                                            }
                                            i[2] && s.ops.pop(), s.trys.pop();
                                            continue
                                    }
                                    t = r.call(n, s)
                                } catch (e) {
                                    t = [6, e], o = 0
                                } finally {
                                    a = i = 0
                                }
                                if (5 & t[0]) throw t[1];
                                return {
                                    value: t[0] ? t[1] : void 0,
                                    done: !0
                                }
                            }([t, e])
                        }
                    }
                };

            function ke(c) {
                var e = this;
                return {
                    v1AutolocalizationGamesGameIdAutolocalizationtablePatch: function(i, s, u) {
                        return void 0 === u && (u = {}), je(e, void 0, Promise, function() {
                            var t, n, r, a, o;
                            return Ne(this, function(e) {
                                if (null == i) throw new De("gameId", "Required parameter gameId was null or undefined when calling v1AutolocalizationGamesGameIdAutolocalizationtablePatch.");
                                if (null == s) throw new De("request", "Required parameter request was null or undefined when calling v1AutolocalizationGamesGameIdAutolocalizationtablePatch.");
                                return r = "/v1/autolocalization/games/{gameId}/autolocalizationtable".replace("{gameId}", encodeURIComponent(String(i))), t = T.Qc(r, !0), c && (o = c.baseOptions), n = ze(ze({
                                    method: "PATCH"
                                }, o), u), a = {}, (r = {})["Content-Type"] = "application/json", t.query = ze(ze(ze({}, t.query), a), u.query), delete t.search, o = o && o.headers ? o.headers : {}, n.headers = ze(ze(ze({}, r), o), u.headers), o = "string" != typeof s || "application/json" === n.headers["Content-Type"], n.data = o ? JSON.stringify(void 0 !== s ? s : {}) : s || "", [2, {
                                    url: T.WU(t),
                                    options: n
                                }]
                            })
                        })
                    },
                    v1AutolocalizationGamesGameIdAutolocalizationtablePost: function(i, s) {
                        return void 0 === s && (s = {}), je(e, void 0, Promise, function() {
                            var t, n, r, a, o;
                            return Ne(this, function(e) {
                                if (null == i) throw new De("gameId", "Required parameter gameId was null or undefined when calling v1AutolocalizationGamesGameIdAutolocalizationtablePost.");
                                return a = "/v1/autolocalization/games/{gameId}/autolocalizationtable".replace("{gameId}", encodeURIComponent(String(i))), t = T.Qc(a, !0), c && (o = c.baseOptions), n = ze(ze({
                                    method: "POST"
                                }, o), s), r = {}, a = {}, t.query = ze(ze(ze({}, t.query), a), s.query), delete t.search, o = o && o.headers ? o.headers : {}, n.headers = ze(ze(ze({}, r), o), s.headers), [2, {
                                    url: T.WU(t),
                                    options: n
                                }]
                            })
                        })
                    },
                    v1AutolocalizationGamesGameIdAutoscrapeCleanupRequestPost: function(i, s, u) {
                        return void 0 === u && (u = {}), je(e, void 0, Promise, function() {
                            var t, n, r, a, o;
                            return Ne(this, function(e) {
                                if (null == i) throw new De("gameId", "Required parameter gameId was null or undefined when calling v1AutolocalizationGamesGameIdAutoscrapeCleanupRequestPost.");
                                if (null == s) throw new De("request", "Required parameter request was null or undefined when calling v1AutolocalizationGamesGameIdAutoscrapeCleanupRequestPost.");
                                return r = "/v1/autolocalization/games/{gameId}/autoscrape-cleanup-request".replace("{gameId}", encodeURIComponent(String(i))), t = T.Qc(r, !0), c && (o = c.baseOptions), n = ze(ze({
                                    method: "POST"
                                }, o), u), a = {}, (r = {})["Content-Type"] = "application/json", t.query = ze(ze(ze({}, t.query), a), u.query), delete t.search, o = o && o.headers ? o.headers : {}, n.headers = ze(ze(ze({}, r), o), u.headers), o = "string" != typeof s || "application/json" === n.headers["Content-Type"], n.data = o ? JSON.stringify(void 0 !== s ? s : {}) : s || "", [2, {
                                    url: T.WU(t),
                                    options: n
                                }]
                            })
                        })
                    },
                    v1AutolocalizationGamesGameIdGet: function(i, s) {
                        return void 0 === s && (s = {}), je(e, void 0, Promise, function() {
                            var t, n, r, a, o;
                            return Ne(this, function(e) {
                                if (null == i) throw new De("gameId", "Required parameter gameId was null or undefined when calling v1AutolocalizationGamesGameIdGet.");
                                return a = "/v1/autolocalization/games/{gameId}".replace("{gameId}", encodeURIComponent(String(i))), t = T.Qc(a, !0), c && (o = c.baseOptions), n = ze(ze({
                                    method: "GET"
                                }, o), s), r = {}, a = {}, t.query = ze(ze(ze({}, t.query), a), s.query), delete t.search, o = o && o.headers ? o.headers : {}, n.headers = ze(ze(ze({}, r), o), s.headers), [2, {
                                    url: T.WU(t),
                                    options: n
                                }]
                            })
                        })
                    },
                    v1AutolocalizationGamesGameIdPatch: function(i, s, u) {
                        return void 0 === u && (u = {}), je(e, void 0, Promise, function() {
                            var t, n, r, a, o;
                            return Ne(this, function(e) {
                                if (null == i) throw new De("gameId", "Required parameter gameId was null or undefined when calling v1AutolocalizationGamesGameIdPatch.");
                                if (null == s) throw new De("request", "Required parameter request was null or undefined when calling v1AutolocalizationGamesGameIdPatch.");
                                return r = "/v1/autolocalization/games/{gameId}".replace("{gameId}", encodeURIComponent(String(i))), t = T.Qc(r, !0), c && (o = c.baseOptions), n = ze(ze({
                                    method: "PATCH"
                                }, o), u), a = {}, (r = {})["Content-Type"] = "application/json", t.query = ze(ze(ze({}, t.query), a), u.query), delete t.search, o = o && o.headers ? o.headers : {}, n.headers = ze(ze(ze({}, r), o), u.headers), o = "string" != typeof s || "application/json" === n.headers["Content-Type"], n.data = o ? JSON.stringify(void 0 !== s ? s : {}) : s || "", [2, {
                                    url: T.WU(t),
                                    options: n
                                }]
                            })
                        })
                    },
                    v1AutolocalizationGamesGameIdSettingsPatch: function(i, s, u) {
                        return void 0 === u && (u = {}), je(e, void 0, Promise, function() {
                            var t, n, r, a, o;
                            return Ne(this, function(e) {
                                if (null == i) throw new De("gameId", "Required parameter gameId was null or undefined when calling v1AutolocalizationGamesGameIdSettingsPatch.");
                                if (null == s) throw new De("request", "Required parameter request was null or undefined when calling v1AutolocalizationGamesGameIdSettingsPatch.");
                                return r = "/v1/autolocalization/games/{gameId}/settings".replace("{gameId}", encodeURIComponent(String(i))), t = T.Qc(r, !0), c && (o = c.baseOptions), n = ze(ze({
                                    method: "PATCH"
                                }, o), u), a = {}, (r = {})["Content-Type"] = "application/json", t.query = ze(ze(ze({}, t.query), a), u.query), delete t.search, o = o && o.headers ? o.headers : {}, n.headers = ze(ze(ze({}, r), o), u.headers), o = "string" != typeof s || "application/json" === n.headers["Content-Type"], n.data = o ? JSON.stringify(void 0 !== s ? s : {}) : s || "", [2, {
                                    url: T.WU(t),
                                    options: n
                                }]
                            })
                        })
                    },
                    v1AutolocalizationMetadataGet: function(i) {
                        return void 0 === i && (i = {}), je(e, void 0, Promise, function() {
                            var t, n, r, a, o;
                            return Ne(this, function(e) {
                                return t = T.Qc("/v1/autolocalization/metadata", !0), c && (o = c.baseOptions), n = ze(ze({
                                    method: "GET"
                                }, o), i), r = {}, a = {}, t.query = ze(ze(ze({}, t.query), a), i.query), delete t.search, o = o && o.headers ? o.headers : {}, n.headers = ze(ze(ze({}, r), o), i.headers), [2, {
                                    url: T.WU(t),
                                    options: n
                                }]
                            })
                        })
                    }
                }
            }

            function _e(o) {
                return {
                    v1AutolocalizationGamesGameIdAutolocalizationtablePatch: function(t, r, a) {
                        return je(this, void 0, Promise, function() {
                            var n;
                            return Ne(this, function(e) {
                                switch (e.label) {
                                    case 0:
                                        return [4, ke(o).v1AutolocalizationGamesGameIdAutolocalizationtablePatch(t, r, a)];
                                    case 1:
                                        return n = e.sent(), [2, function(e, t) {
                                            void 0 === e && (e = q), void 0 === t && (t = Re);
                                            t = ze(ze({}, n.options), {
                                                url: t + n.url
                                            });
                                            return e.request(t)
                                        }]
                                }
                            })
                        })
                    },
                    v1AutolocalizationGamesGameIdAutolocalizationtablePost: function(t, r) {
                        return je(this, void 0, Promise, function() {
                            var n;
                            return Ne(this, function(e) {
                                switch (e.label) {
                                    case 0:
                                        return [4, ke(o).v1AutolocalizationGamesGameIdAutolocalizationtablePost(t, r)];
                                    case 1:
                                        return n = e.sent(), [2, function(e, t) {
                                            void 0 === e && (e = q), void 0 === t && (t = Re);
                                            t = ze(ze({}, n.options), {
                                                url: t + n.url
                                            });
                                            return e.request(t)
                                        }]
                                }
                            })
                        })
                    },
                    v1AutolocalizationGamesGameIdAutoscrapeCleanupRequestPost: function(t, r, a) {
                        return je(this, void 0, Promise, function() {
                            var n;
                            return Ne(this, function(e) {
                                switch (e.label) {
                                    case 0:
                                        return [4, ke(o).v1AutolocalizationGamesGameIdAutoscrapeCleanupRequestPost(t, r, a)];
                                    case 1:
                                        return n = e.sent(), [2, function(e, t) {
                                            void 0 === e && (e = q), void 0 === t && (t = Re);
                                            t = ze(ze({}, n.options), {
                                                url: t + n.url
                                            });
                                            return e.request(t)
                                        }]
                                }
                            })
                        })
                    },
                    v1AutolocalizationGamesGameIdGet: function(t, r) {
                        return je(this, void 0, Promise, function() {
                            var n;
                            return Ne(this, function(e) {
                                switch (e.label) {
                                    case 0:
                                        return [4, ke(o).v1AutolocalizationGamesGameIdGet(t, r)];
                                    case 1:
                                        return n = e.sent(), [2, function(e, t) {
                                            void 0 === e && (e = q), void 0 === t && (t = Re);
                                            t = ze(ze({}, n.options), {
                                                url: t + n.url
                                            });
                                            return e.request(t)
                                        }]
                                }
                            })
                        })
                    },
                    v1AutolocalizationGamesGameIdPatch: function(t, r, a) {
                        return je(this, void 0, Promise, function() {
                            var n;
                            return Ne(this, function(e) {
                                switch (e.label) {
                                    case 0:
                                        return [4, ke(o).v1AutolocalizationGamesGameIdPatch(t, r, a)];
                                    case 1:
                                        return n = e.sent(), [2, function(e, t) {
                                            void 0 === e && (e = q), void 0 === t && (t = Re);
                                            t = ze(ze({}, n.options), {
                                                url: t + n.url
                                            });
                                            return e.request(t)
                                        }]
                                }
                            })
                        })
                    },
                    v1AutolocalizationGamesGameIdSettingsPatch: function(t, r, a) {
                        return je(this, void 0, Promise, function() {
                            var n;
                            return Ne(this, function(e) {
                                switch (e.label) {
                                    case 0:
                                        return [4, ke(o).v1AutolocalizationGamesGameIdSettingsPatch(t, r, a)];
                                    case 1:
                                        return n = e.sent(), [2, function(e, t) {
                                            void 0 === e && (e = q), void 0 === t && (t = Re);
                                            t = ze(ze({}, n.options), {
                                                url: t + n.url
                                            });
                                            return e.request(t)
                                        }]
                                }
                            })
                        })
                    },
                    v1AutolocalizationMetadataGet: function(t) {
                        return je(this, void 0, Promise, function() {
                            var n;
                            return Ne(this, function(e) {
                                switch (e.label) {
                                    case 0:
                                        return [4, ke(o).v1AutolocalizationMetadataGet(t)];
                                    case 1:
                                        return n = e.sent(), [2, function(e, t) {
                                            void 0 === e && (e = q), void 0 === t && (t = Re);
                                            t = ze(ze({}, n.options), {
                                                url: t + n.url
                                            });
                                            return e.request(t)
                                        }]
                                }
                            })
                        })
                    }
                }
            }(Br = {}).User = "User", Br.Group = "Group", (Dn = {}).Asc = "Asc", Dn.Desc = "Desc", (Nn = {}).Approved = "Approved", Nn.PendingReview = "PendingReview", Nn.UnAvailable = "UnAvailable", Nn.Rejected = "Rejected", Nn.Error = "Error", (u = {}).Approved = "Approved", u.PendingReview = "PendingReview", u.UnAvailable = "UnAvailable", u.Rejected = "Rejected", u.Error = "Error", (Pn = {}).Approved = "Approved", Pn.PendingReview = "PendingReview", Pn.UnAvailable = "UnAvailable", Pn.Rejected = "Rejected", Pn.Error = "Error", (Me = {}).Approved = "Approved", Me.PendingReview = "PendingReview", Me.UnAvailable = "UnAvailable", Me.Rejected = "Rejected", Me.Error = "Error", (Ye = {}).Name = "Name", Ye.Description = "Description", (pt = {}).Asc = "Asc", pt.Desc = "Desc", (y = {}).User = "User", y.Group = "Group", (B = {}).Language = "Language", B.Locale = "Locale", (W = {}).Language = "Language", W.Locale = "Locale", (j = {}).Language = "Language", j.Locale = "Locale", (X = {}).Approved = "Approved", X.PendingReview = "PendingReview", X.UnAvailable = "UnAvailable", X.Rejected = "Rejected", X.Error = "Error", (oe = Be = Be || {}).Language = "Language", oe.Locale = "Locale", (Ge = {}).GameTranslationStatus = "GameTranslationStatus", Ge.GameTranslationStatusForTranslatorGroup = "GameTranslationStatusForTranslatorGroup", Ge.GameTranslationStatusForTranslator = "GameTranslationStatusForTranslator", Ge.Test = "Test", (Ue = {}).InProgress = "inProgress", Ue.Ready = "ready", Ue.Unavailable = "unavailable", (Br = {}).Automation = "Automation", Br.User = "User", (Dn = {}).LanguageOrLocaleSupportedForGame = "LanguageOrLocaleSupportedForGame", Dn.LanguageOrLocaleNotSupportedForGame = "LanguageOrLocaleNotSupportedForGame", Dn.LanguageOrLocaleIsSource = "LanguageOrLocaleIsSource", Dn.InsufficientPermission = "InsufficientPermission", Dn.GameDoesNotExist = "GameDoesNotExist", Dn.GameDoesNotHaveTable = "GameDoesNotHaveTable", Dn.UnknownError = "UnknownError", (Nn = {}).Success = "Success", Nn.LanguageOrLocaleNotSupportedForGame = "LanguageOrLocaleNotSupportedForGame", (u = {}).Language = "Language", u.Locale = "Locale", (Pn = {}).User = "User", Pn.Automation = "Automation";
            var We, Me = (Fe(Qe, We = Oe), Qe.prototype.v1AutolocalizationGamesGameIdAutolocalizationtablePatch = function(e, t, n) {
                var r = this;
                return _e(this.configuration).v1AutolocalizationGamesGameIdAutolocalizationtablePatch(e, t, n).then(function(e) {
                    return e(r.axios, r.basePath)
                })
            }, Qe.prototype.v1AutolocalizationGamesGameIdAutolocalizationtablePost = function(e, t) {
                var n = this;
                return _e(this.configuration).v1AutolocalizationGamesGameIdAutolocalizationtablePost(e, t).then(function(e) {
                    return e(n.axios, n.basePath)
                })
            }, Qe.prototype.v1AutolocalizationGamesGameIdAutoscrapeCleanupRequestPost = function(e, t, n) {
                var r = this;
                return _e(this.configuration).v1AutolocalizationGamesGameIdAutoscrapeCleanupRequestPost(e, t, n).then(function(e) {
                    return e(r.axios, r.basePath)
                })
            }, Qe.prototype.v1AutolocalizationGamesGameIdGet = function(e, t) {
                var n = this;
                return _e(this.configuration).v1AutolocalizationGamesGameIdGet(e, t).then(function(e) {
                    return e(n.axios, n.basePath)
                })
            }, Qe.prototype.v1AutolocalizationGamesGameIdPatch = function(e, t, n) {
                var r = this;
                return _e(this.configuration).v1AutolocalizationGamesGameIdPatch(e, t, n).then(function(e) {
                    return e(r.axios, r.basePath)
                })
            }, Qe.prototype.v1AutolocalizationGamesGameIdSettingsPatch = function(e, t, n) {
                var r = this;
                return _e(this.configuration).v1AutolocalizationGamesGameIdSettingsPatch(e, t, n).then(function(e) {
                    return e(r.axios, r.basePath)
                })
            }, Qe.prototype.v1AutolocalizationMetadataGet = function(e) {
                var t = this;
                return _e(this.configuration).v1AutolocalizationMetadataGet(e).then(function(e) {
                    return e(t.axios, t.basePath)
                })
            }, Qe);

            function Qe() {
                return null !== We && We.apply(this, arguments) || this
            }

            function He(c) {
                var e = this;
                return {
                    v1AutomaticTranslationGamesGameIdFeatureStatusGet: function(i, s) {
                        return void 0 === s && (s = {}), je(e, void 0, Promise, function() {
                            var t, n, r, a, o;
                            return Ne(this, function(e) {
                                if (null == i) throw new De("gameId", "Required parameter gameId was null or undefined when calling v1AutomaticTranslationGamesGameIdFeatureStatusGet.");
                                return a = "/v1/automatic-translation/games/{gameId}/feature-status".replace("{gameId}", encodeURIComponent(String(i))), t = T.Qc(a, !0), c && (o = c.baseOptions), n = ze(ze({
                                    method: "GET"
                                }, o), s), r = {}, a = {}, t.query = ze(ze(ze({}, t.query), a), s.query), delete t.search, o = o && o.headers ? o.headers : {}, n.headers = ze(ze(ze({}, r), o), s.headers), [2, {
                                    url: T.WU(t),
                                    options: n
                                }]
                            })
                        })
                    },
                    v1AutomaticTranslationGamesGameIdQuotaGet: function(i, s) {
                        return void 0 === s && (s = {}), je(e, void 0, Promise, function() {
                            var t, n, r, a, o;
                            return Ne(this, function(e) {
                                if (null == i) throw new De("gameId", "Required parameter gameId was null or undefined when calling v1AutomaticTranslationGamesGameIdQuotaGet.");
                                return a = "/v1/automatic-translation/games/{gameId}/quota".replace("{gameId}", encodeURIComponent(String(i))), t = T.Qc(a, !0), c && (o = c.baseOptions), n = ze(ze({
                                    method: "GET"
                                }, o), s), r = {}, a = {}, t.query = ze(ze(ze({}, t.query), a), s.query), delete t.search, o = o && o.headers ? o.headers : {}, n.headers = ze(ze(ze({}, r), o), s.headers), [2, {
                                    url: T.WU(t),
                                    options: n
                                }]
                            })
                        })
                    },
                    v1AutomaticTranslationLanguagesLanguageCodeTargetLanguagesGet: function(i, s, u) {
                        return void 0 === u && (u = {}), je(e, void 0, Promise, function() {
                            var t, n, r, a, o;
                            return Ne(this, function(e) {
                                if (null == i) throw new De("languageCode", "Required parameter languageCode was null or undefined when calling v1AutomaticTranslationLanguagesLanguageCodeTargetLanguagesGet.");
                                return a = "/v1/automatic-translation/languages/{languageCode}/target-languages".replace("{languageCode}", encodeURIComponent(String(i))), t = T.Qc(a, !0), c && (o = c.baseOptions), n = ze(ze({
                                    method: "GET"
                                }, o), u), r = {}, a = {}, s && (a.targetLanguages = s), t.query = ze(ze(ze({}, t.query), a), u.query), delete t.search, o = o && o.headers ? o.headers : {}, n.headers = ze(ze(ze({}, r), o), u.headers), [2, {
                                    url: T.WU(t),
                                    options: n
                                }]
                            })
                        })
                    }
                }
            }

            function Ve(o) {
                return {
                    v1AutomaticTranslationGamesGameIdFeatureStatusGet: function(t, r) {
                        return je(this, void 0, Promise, function() {
                            var n;
                            return Ne(this, function(e) {
                                switch (e.label) {
                                    case 0:
                                        return [4, He(o).v1AutomaticTranslationGamesGameIdFeatureStatusGet(t, r)];
                                    case 1:
                                        return n = e.sent(), [2, function(e, t) {
                                            void 0 === e && (e = q), void 0 === t && (t = Re);
                                            t = ze(ze({}, n.options), {
                                                url: t + n.url
                                            });
                                            return e.request(t)
                                        }]
                                }
                            })
                        })
                    },
                    v1AutomaticTranslationGamesGameIdQuotaGet: function(t, r) {
                        return je(this, void 0, Promise, function() {
                            var n;
                            return Ne(this, function(e) {
                                switch (e.label) {
                                    case 0:
                                        return [4, He(o).v1AutomaticTranslationGamesGameIdQuotaGet(t, r)];
                                    case 1:
                                        return n = e.sent(), [2, function(e, t) {
                                            void 0 === e && (e = q), void 0 === t && (t = Re);
                                            t = ze(ze({}, n.options), {
                                                url: t + n.url
                                            });
                                            return e.request(t)
                                        }]
                                }
                            })
                        })
                    },
                    v1AutomaticTranslationLanguagesLanguageCodeTargetLanguagesGet: function(t, r, a) {
                        return je(this, void 0, Promise, function() {
                            var n;
                            return Ne(this, function(e) {
                                switch (e.label) {
                                    case 0:
                                        return [4, He(o).v1AutomaticTranslationLanguagesLanguageCodeTargetLanguagesGet(t, r, a)];
                                    case 1:
                                        return n = e.sent(), [2, function(e, t) {
                                            void 0 === e && (e = q), void 0 === t && (t = Re);
                                            t = ze(ze({}, n.options), {
                                                url: t + n.url
                                            });
                                            return e.request(t)
                                        }]
                                }
                            })
                        })
                    }
                }
            }
            var Je, Ke, Xe, $e, Ye = (Fe(Ze, Je = Oe), Ze.prototype.v1AutomaticTranslationGamesGameIdFeatureStatusGet = function(e, t) {
                var n = this;
                return Ve(this.configuration).v1AutomaticTranslationGamesGameIdFeatureStatusGet(e, t).then(function(e) {
                    return e(n.axios, n.basePath)
                })
            }, Ze.prototype.v1AutomaticTranslationGamesGameIdQuotaGet = function(e, t) {
                var n = this;
                return Ve(this.configuration).v1AutomaticTranslationGamesGameIdQuotaGet(e, t).then(function(e) {
                    return e(n.axios, n.basePath)
                })
            }, Ze.prototype.v1AutomaticTranslationLanguagesLanguageCodeTargetLanguagesGet = function(e, t, n) {
                var r = this;
                return Ve(this.configuration).v1AutomaticTranslationLanguagesLanguageCodeTargetLanguagesGet(e, t, n).then(function(e) {
                    return e(r.axios, r.basePath)
                })
            }, Ze);

            function Ze() {
                return null !== Je && Je.apply(this, arguments) || this
            }

            function et(d) {
                var e = this;
                return {
                    v1BadgesBadgeIdDescriptionLanguageCodesLanguageCodePatch: function(i, s, u, c) {
                        return void 0 === c && (c = {}), je(e, void 0, Promise, function() {
                            var t, n, r, a, o;
                            return Ne(this, function(e) {
                                if (null == i) throw new De("badgeId", "Required parameter badgeId was null or undefined when calling v1BadgesBadgeIdDescriptionLanguageCodesLanguageCodePatch.");
                                if (null == s) throw new De("languageCode", "Required parameter languageCode was null or undefined when calling v1BadgesBadgeIdDescriptionLanguageCodesLanguageCodePatch.");
                                if (null == u) throw new De("request", "Required parameter request was null or undefined when calling v1BadgesBadgeIdDescriptionLanguageCodesLanguageCodePatch.");
                                return r = "/v1/badges/{badgeId}/description/language-codes/{languageCode}".replace("{badgeId}", encodeURIComponent(String(i))).replace("{languageCode}", encodeURIComponent(String(s))), t = T.Qc(r, !0), d && (o = d.baseOptions), n = ze(ze({
                                    method: "PATCH"
                                }, o), c), a = {}, (r = {})["Content-Type"] = "application/json", t.query = ze(ze(ze({}, t.query), a), c.query), delete t.search, o = o && o.headers ? o.headers : {}, n.headers = ze(ze(ze({}, r), o), c.headers), o = "string" != typeof u || "application/json" === n.headers["Content-Type"], n.data = o ? JSON.stringify(void 0 !== u ? u : {}) : u || "", [2, {
                                    url: T.WU(t),
                                    options: n
                                }]
                            })
                        })
                    },
                    v1BadgesBadgeIdIconsGet: function(i, s, u, c) {
                        return void 0 === c && (c = {}), je(e, void 0, Promise, function() {
                            var t, n, r, a, o;
                            return Ne(this, function(e) {
                                if (null == i) throw new De("badgeId", "Required parameter badgeId was null or undefined when calling v1BadgesBadgeIdIconsGet.");
                                return a = "/v1/badges/{badgeId}/icons".replace("{badgeId}", encodeURIComponent(String(i))), t = T.Qc(a, !0), d && (o = d.baseOptions), n = ze(ze({
                                    method: "GET"
                                }, o), c), r = {}, a = {}, void 0 !== s && (a.width = s), void 0 !== u && (a.height = u), t.query = ze(ze(ze({}, t.query), a), c.query), delete t.search, o = o && o.headers ? o.headers : {}, n.headers = ze(ze(ze({}, r), o), c.headers), [2, {
                                    url: T.WU(t),
                                    options: n
                                }]
                            })
                        })
                    },
                    v1BadgesBadgeIdIconsLanguageCodesLanguageCodeDelete: function(i, s, u) {
                        return void 0 === u && (u = {}), je(e, void 0, Promise, function() {
                            var t, n, r, a, o;
                            return Ne(this, function(e) {
                                if (null == i) throw new De("badgeId", "Required parameter badgeId was null or undefined when calling v1BadgesBadgeIdIconsLanguageCodesLanguageCodeDelete.");
                                if (null == s) throw new De("languageCode", "Required parameter languageCode was null or undefined when calling v1BadgesBadgeIdIconsLanguageCodesLanguageCodeDelete.");
                                return a = "/v1/badges/{badgeId}/icons/language-codes/{languageCode}".replace("{badgeId}", encodeURIComponent(String(i))).replace("{languageCode}", encodeURIComponent(String(s))), t = T.Qc(a, !0), d && (o = d.baseOptions), n = ze(ze({
                                    method: "DELETE"
                                }, o), u), r = {}, a = {}, t.query = ze(ze(ze({}, t.query), a), u.query), delete t.search, o = o && o.headers ? o.headers : {}, n.headers = ze(ze(ze({}, r), o), u.headers), [2, {
                                    url: T.WU(t),
                                    options: n
                                }]
                            })
                        })
                    },
                    v1BadgesBadgeIdIconsLanguageCodesLanguageCodePost: function(s, u, c, l) {
                        return void 0 === l && (l = {}), je(e, void 0, Promise, function() {
                            var t, n, r, a, o, i;
                            return Ne(this, function(e) {
                                if (null == s) throw new De("badgeId", "Required parameter badgeId was null or undefined when calling v1BadgesBadgeIdIconsLanguageCodesLanguageCodePost.");
                                if (null == u) throw new De("languageCode", "Required parameter languageCode was null or undefined when calling v1BadgesBadgeIdIconsLanguageCodesLanguageCodePost.");
                                return o = "/v1/badges/{badgeId}/icons/language-codes/{languageCode}".replace("{badgeId}", encodeURIComponent(String(s))).replace("{languageCode}", encodeURIComponent(String(u))), t = T.Qc(o, !0), d && (i = d.baseOptions), n = ze(ze({
                                    method: "POST"
                                }, i), l), r = {}, a = {}, o = new FormData, void 0 !== c && o.append("request.files", c), r["Content-Type"] = "multipart/form-data", t.query = ze(ze(ze({}, t.query), a), l.query), delete t.search, i = i && i.headers ? i.headers : {}, n.headers = ze(ze(ze({}, r), i), l.headers), n.data = o, [2, {
                                    url: T.WU(t),
                                    options: n
                                }]
                            })
                        })
                    },
                    v1BadgesBadgeIdNameDescriptionGet: function(i, s) {
                        return void 0 === s && (s = {}), je(e, void 0, Promise, function() {
                            var t, n, r, a, o;
                            return Ne(this, function(e) {
                                if (null == i) throw new De("badgeId", "Required parameter badgeId was null or undefined when calling v1BadgesBadgeIdNameDescriptionGet.");
                                return a = "/v1/badges/{badgeId}/name-description".replace("{badgeId}", encodeURIComponent(String(i))), t = T.Qc(a, !0), d && (o = d.baseOptions), n = ze(ze({
                                    method: "GET"
                                }, o), s), r = {}, a = {}, t.query = ze(ze(ze({}, t.query), a), s.query), delete t.search, o = o && o.headers ? o.headers : {}, n.headers = ze(ze(ze({}, r), o), s.headers), [2, {
                                    url: T.WU(t),
                                    options: n
                                }]
                            })
                        })
                    },
                    v1BadgesBadgeIdNameDescriptionLanguageCodesLanguageCodeDelete: function(i, s, u) {
                        return void 0 === u && (u = {}), je(e, void 0, Promise, function() {
                            var t, n, r, a, o;
                            return Ne(this, function(e) {
                                if (null == i) throw new De("badgeId", "Required parameter badgeId was null or undefined when calling v1BadgesBadgeIdNameDescriptionLanguageCodesLanguageCodeDelete.");
                                if (null == s) throw new De("languageCode", "Required parameter languageCode was null or undefined when calling v1BadgesBadgeIdNameDescriptionLanguageCodesLanguageCodeDelete.");
                                return a = "/v1/badges/{badgeId}/name-description/language-codes/{languageCode}".replace("{badgeId}", encodeURIComponent(String(i))).replace("{languageCode}", encodeURIComponent(String(s))), t = T.Qc(a, !0), d && (o = d.baseOptions), n = ze(ze({
                                    method: "DELETE"
                                }, o), u), r = {}, a = {}, t.query = ze(ze(ze({}, t.query), a), u.query), delete t.search, o = o && o.headers ? o.headers : {}, n.headers = ze(ze(ze({}, r), o), u.headers), [2, {
                                    url: T.WU(t),
                                    options: n
                                }]
                            })
                        })
                    },
                    v1BadgesBadgeIdNameDescriptionLanguageCodesLanguageCodePatch: function(i, s, u, c) {
                        return void 0 === c && (c = {}), je(e, void 0, Promise, function() {
                            var t, n, r, a, o;
                            return Ne(this, function(e) {
                                if (null == i) throw new De("badgeId", "Required parameter badgeId was null or undefined when calling v1BadgesBadgeIdNameDescriptionLanguageCodesLanguageCodePatch.");
                                if (null == s) throw new De("languageCode", "Required parameter languageCode was null or undefined when calling v1BadgesBadgeIdNameDescriptionLanguageCodesLanguageCodePatch.");
                                if (null == u) throw new De("request", "Required parameter request was null or undefined when calling v1BadgesBadgeIdNameDescriptionLanguageCodesLanguageCodePatch.");
                                return r = "/v1/badges/{badgeId}/name-description/language-codes/{languageCode}".replace("{badgeId}", encodeURIComponent(String(i))).replace("{languageCode}", encodeURIComponent(String(s))), t = T.Qc(r, !0), d && (o = d.baseOptions), n = ze(ze({
                                    method: "PATCH"
                                }, o), c), a = {}, (r = {})["Content-Type"] = "application/json", t.query = ze(ze(ze({}, t.query), a), c.query), delete t.search, o = o && o.headers ? o.headers : {}, n.headers = ze(ze(ze({}, r), o), c.headers), o = "string" != typeof u || "application/json" === n.headers["Content-Type"], n.data = o ? JSON.stringify(void 0 !== u ? u : {}) : u || "", [2, {
                                    url: T.WU(t),
                                    options: n
                                }]
                            })
                        })
                    },
                    v1BadgesBadgeIdNameLanguageCodesLanguageCodePatch: function(i, s, u, c) {
                        return void 0 === c && (c = {}), je(e, void 0, Promise, function() {
                            var t, n, r, a, o;
                            return Ne(this, function(e) {
                                if (null == i) throw new De("badgeId", "Required parameter badgeId was null or undefined when calling v1BadgesBadgeIdNameLanguageCodesLanguageCodePatch.");
                                if (null == s) throw new De("languageCode", "Required parameter languageCode was null or undefined when calling v1BadgesBadgeIdNameLanguageCodesLanguageCodePatch.");
                                if (null == u) throw new De("request", "Required parameter request was null or undefined when calling v1BadgesBadgeIdNameLanguageCodesLanguageCodePatch.");
                                return r = "/v1/badges/{badgeId}/name/language-codes/{languageCode}".replace("{badgeId}", encodeURIComponent(String(i))).replace("{languageCode}", encodeURIComponent(String(s))), t = T.Qc(r, !0), d && (o = d.baseOptions), n = ze(ze({
                                    method: "PATCH"
                                }, o), c), a = {}, (r = {})["Content-Type"] = "application/json", t.query = ze(ze(ze({}, t.query), a), c.query), delete t.search, o = o && o.headers ? o.headers : {}, n.headers = ze(ze(ze({}, r), o), c.headers), o = "string" != typeof u || "application/json" === n.headers["Content-Type"], n.data = o ? JSON.stringify(void 0 !== u ? u : {}) : u || "", [2, {
                                    url: T.WU(t),
                                    options: n
                                }]
                            })
                        })
                    }
                }
            }

            function tt(i) {
                return {
                    v1BadgesBadgeIdDescriptionLanguageCodesLanguageCodePatch: function(t, r, a, o) {
                        return je(this, void 0, Promise, function() {
                            var n;
                            return Ne(this, function(e) {
                                switch (e.label) {
                                    case 0:
                                        return [4, et(i).v1BadgesBadgeIdDescriptionLanguageCodesLanguageCodePatch(t, r, a, o)];
                                    case 1:
                                        return n = e.sent(), [2, function(e, t) {
                                            void 0 === e && (e = q), void 0 === t && (t = Re);
                                            t = ze(ze({}, n.options), {
                                                url: t + n.url
                                            });
                                            return e.request(t)
                                        }]
                                }
                            })
                        })
                    },
                    v1BadgesBadgeIdIconsGet: function(t, r, a, o) {
                        return je(this, void 0, Promise, function() {
                            var n;
                            return Ne(this, function(e) {
                                switch (e.label) {
                                    case 0:
                                        return [4, et(i).v1BadgesBadgeIdIconsGet(t, r, a, o)];
                                    case 1:
                                        return n = e.sent(), [2, function(e, t) {
                                            void 0 === e && (e = q), void 0 === t && (t = Re);
                                            t = ze(ze({}, n.options), {
                                                url: t + n.url
                                            });
                                            return e.request(t)
                                        }]
                                }
                            })
                        })
                    },
                    v1BadgesBadgeIdIconsLanguageCodesLanguageCodeDelete: function(t, r, a) {
                        return je(this, void 0, Promise, function() {
                            var n;
                            return Ne(this, function(e) {
                                switch (e.label) {
                                    case 0:
                                        return [4, et(i).v1BadgesBadgeIdIconsLanguageCodesLanguageCodeDelete(t, r, a)];
                                    case 1:
                                        return n = e.sent(), [2, function(e, t) {
                                            void 0 === e && (e = q), void 0 === t && (t = Re);
                                            t = ze(ze({}, n.options), {
                                                url: t + n.url
                                            });
                                            return e.request(t)
                                        }]
                                }
                            })
                        })
                    },
                    v1BadgesBadgeIdIconsLanguageCodesLanguageCodePost: function(t, r, a, o) {
                        return je(this, void 0, Promise, function() {
                            var n;
                            return Ne(this, function(e) {
                                switch (e.label) {
                                    case 0:
                                        return [4, et(i).v1BadgesBadgeIdIconsLanguageCodesLanguageCodePost(t, r, a, o)];
                                    case 1:
                                        return n = e.sent(), [2, function(e, t) {
                                            void 0 === e && (e = q), void 0 === t && (t = Re);
                                            t = ze(ze({}, n.options), {
                                                url: t + n.url
                                            });
                                            return e.request(t)
                                        }]
                                }
                            })
                        })
                    },
                    v1BadgesBadgeIdNameDescriptionGet: function(t, r) {
                        return je(this, void 0, Promise, function() {
                            var n;
                            return Ne(this, function(e) {
                                switch (e.label) {
                                    case 0:
                                        return [4, et(i).v1BadgesBadgeIdNameDescriptionGet(t, r)];
                                    case 1:
                                        return n = e.sent(), [2, function(e, t) {
                                            void 0 === e && (e = q), void 0 === t && (t = Re);
                                            t = ze(ze({}, n.options), {
                                                url: t + n.url
                                            });
                                            return e.request(t)
                                        }]
                                }
                            })
                        })
                    },
                    v1BadgesBadgeIdNameDescriptionLanguageCodesLanguageCodeDelete: function(t, r, a) {
                        return je(this, void 0, Promise, function() {
                            var n;
                            return Ne(this, function(e) {
                                switch (e.label) {
                                    case 0:
                                        return [4, et(i).v1BadgesBadgeIdNameDescriptionLanguageCodesLanguageCodeDelete(t, r, a)];
                                    case 1:
                                        return n = e.sent(), [2, function(e, t) {
                                            void 0 === e && (e = q), void 0 === t && (t = Re);
                                            t = ze(ze({}, n.options), {
                                                url: t + n.url
                                            });
                                            return e.request(t)
                                        }]
                                }
                            })
                        })
                    },
                    v1BadgesBadgeIdNameDescriptionLanguageCodesLanguageCodePatch: function(t, r, a, o) {
                        return je(this, void 0, Promise, function() {
                            var n;
                            return Ne(this, function(e) {
                                switch (e.label) {
                                    case 0:
                                        return [4, et(i).v1BadgesBadgeIdNameDescriptionLanguageCodesLanguageCodePatch(t, r, a, o)];
                                    case 1:
                                        return n = e.sent(), [2, function(e, t) {
                                            void 0 === e && (e = q), void 0 === t && (t = Re);
                                            t = ze(ze({}, n.options), {
                                                url: t + n.url
                                            });
                                            return e.request(t)
                                        }]
                                }
                            })
                        })
                    },
                    v1BadgesBadgeIdNameLanguageCodesLanguageCodePatch: function(t, r, a, o) {
                        return je(this, void 0, Promise, function() {
                            var n;
                            return Ne(this, function(e) {
                                switch (e.label) {
                                    case 0:
                                        return [4, et(i).v1BadgesBadgeIdNameLanguageCodesLanguageCodePatch(t, r, a, o)];
                                    case 1:
                                        return n = e.sent(), [2, function(e, t) {
                                            void 0 === e && (e = q), void 0 === t && (t = Re);
                                            t = ze(ze({}, n.options), {
                                                url: t + n.url
                                            });
                                            return e.request(t)
                                        }]
                                }
                            })
                        })
                    }
                }
            }

            function nt() {
                return null !== Ke && Ke.apply(this, arguments) || this
            }

            function rt(d) {
                var e = this;
                return {
                    v1DeveloperProductsDeveloperProductIdDescriptionLanguageCodesLanguageCodePatch: function(i, s, u, c) {
                        return void 0 === c && (c = {}), je(e, void 0, Promise, function() {
                            var t, n, r, a, o;
                            return Ne(this, function(e) {
                                if (null == i) throw new De("developerProductId", "Required parameter developerProductId was null or undefined when calling v1DeveloperProductsDeveloperProductIdDescriptionLanguageCodesLanguageCodePatch.");
                                if (null == s) throw new De("languageCode", "Required parameter languageCode was null or undefined when calling v1DeveloperProductsDeveloperProductIdDescriptionLanguageCodesLanguageCodePatch.");
                                if (null == u) throw new De("request", "Required parameter request was null or undefined when calling v1DeveloperProductsDeveloperProductIdDescriptionLanguageCodesLanguageCodePatch.");
                                return r = "/v1/developer-products/{developerProductId}/description/language-codes/{languageCode}".replace("{developerProductId}", encodeURIComponent(String(i))).replace("{languageCode}", encodeURIComponent(String(s))), t = T.Qc(r, !0), d && (o = d.baseOptions), n = ze(ze({
                                    method: "PATCH"
                                }, o), c), a = {}, (r = {})["Content-Type"] = "application/json", t.query = ze(ze(ze({}, t.query), a), c.query), delete t.search, o = o && o.headers ? o.headers : {}, n.headers = ze(ze(ze({}, r), o), c.headers), o = "string" != typeof u || "application/json" === n.headers["Content-Type"], n.data = o ? JSON.stringify(void 0 !== u ? u : {}) : u || "", [2, {
                                    url: T.WU(t),
                                    options: n
                                }]
                            })
                        })
                    },
                    v1DeveloperProductsDeveloperProductIdIconsGet: function(i, s, u, c) {
                        return void 0 === c && (c = {}), je(e, void 0, Promise, function() {
                            var t, n, r, a, o;
                            return Ne(this, function(e) {
                                if (null == i) throw new De("developerProductId", "Required parameter developerProductId was null or undefined when calling v1DeveloperProductsDeveloperProductIdIconsGet.");
                                return a = "/v1/developer-products/{developerProductId}/icons".replace("{developerProductId}", encodeURIComponent(String(i))), t = T.Qc(a, !0), d && (o = d.baseOptions), n = ze(ze({
                                    method: "GET"
                                }, o), c), r = {}, a = {}, void 0 !== s && (a.width = s), void 0 !== u && (a.height = u), t.query = ze(ze(ze({}, t.query), a), c.query), delete t.search, o = o && o.headers ? o.headers : {}, n.headers = ze(ze(ze({}, r), o), c.headers), [2, {
                                    url: T.WU(t),
                                    options: n
                                }]
                            })
                        })
                    },
                    v1DeveloperProductsDeveloperProductIdIconsLanguageCodesLanguageCodeDelete: function(i, s, u) {
                        return void 0 === u && (u = {}), je(e, void 0, Promise, function() {
                            var t, n, r, a, o;
                            return Ne(this, function(e) {
                                if (null == i) throw new De("developerProductId", "Required parameter developerProductId was null or undefined when calling v1DeveloperProductsDeveloperProductIdIconsLanguageCodesLanguageCodeDelete.");
                                if (null == s) throw new De("languageCode", "Required parameter languageCode was null or undefined when calling v1DeveloperProductsDeveloperProductIdIconsLanguageCodesLanguageCodeDelete.");
                                return a = "/v1/developer-products/{developerProductId}/icons/language-codes/{languageCode}".replace("{developerProductId}", encodeURIComponent(String(i))).replace("{languageCode}", encodeURIComponent(String(s))), t = T.Qc(a, !0), d && (o = d.baseOptions), n = ze(ze({
                                    method: "DELETE"
                                }, o), u), r = {}, a = {}, t.query = ze(ze(ze({}, t.query), a), u.query), delete t.search, o = o && o.headers ? o.headers : {}, n.headers = ze(ze(ze({}, r), o), u.headers), [2, {
                                    url: T.WU(t),
                                    options: n
                                }]
                            })
                        })
                    },
                    v1DeveloperProductsDeveloperProductIdIconsLanguageCodesLanguageCodePost: function(s, u, c, l) {
                        return void 0 === l && (l = {}), je(e, void 0, Promise, function() {
                            var t, n, r, a, o, i;
                            return Ne(this, function(e) {
                                if (null == s) throw new De("developerProductId", "Required parameter developerProductId was null or undefined when calling v1DeveloperProductsDeveloperProductIdIconsLanguageCodesLanguageCodePost.");
                                if (null == u) throw new De("languageCode", "Required parameter languageCode was null or undefined when calling v1DeveloperProductsDeveloperProductIdIconsLanguageCodesLanguageCodePost.");
                                return o = "/v1/developer-products/{developerProductId}/icons/language-codes/{languageCode}".replace("{developerProductId}", encodeURIComponent(String(s))).replace("{languageCode}", encodeURIComponent(String(u))), t = T.Qc(o, !0), d && (i = d.baseOptions), n = ze(ze({
                                    method: "POST"
                                }, i), l), r = {}, a = {}, o = new FormData, void 0 !== c && o.append("request.files", c), r["Content-Type"] = "multipart/form-data", t.query = ze(ze(ze({}, t.query), a), l.query), delete t.search, i = i && i.headers ? i.headers : {}, n.headers = ze(ze(ze({}, r), i), l.headers), n.data = o, [2, {
                                    url: T.WU(t),
                                    options: n
                                }]
                            })
                        })
                    },
                    v1DeveloperProductsDeveloperProductIdNameDescriptionGet: function(i, s) {
                        return void 0 === s && (s = {}), je(e, void 0, Promise, function() {
                            var t, n, r, a, o;
                            return Ne(this, function(e) {
                                if (null == i) throw new De("developerProductId", "Required parameter developerProductId was null or undefined when calling v1DeveloperProductsDeveloperProductIdNameDescriptionGet.");
                                return a = "/v1/developer-products/{developerProductId}/name-description".replace("{developerProductId}", encodeURIComponent(String(i))), t = T.Qc(a, !0), d && (o = d.baseOptions), n = ze(ze({
                                    method: "GET"
                                }, o), s), r = {}, a = {}, t.query = ze(ze(ze({}, t.query), a), s.query), delete t.search, o = o && o.headers ? o.headers : {}, n.headers = ze(ze(ze({}, r), o), s.headers), [2, {
                                    url: T.WU(t),
                                    options: n
                                }]
                            })
                        })
                    },
                    v1DeveloperProductsDeveloperProductIdNameDescriptionLanguageCodesLanguageCodeDelete: function(i, s, u) {
                        return void 0 === u && (u = {}), je(e, void 0, Promise, function() {
                            var t, n, r, a, o;
                            return Ne(this, function(e) {
                                if (null == i) throw new De("developerProductId", "Required parameter developerProductId was null or undefined when calling v1DeveloperProductsDeveloperProductIdNameDescriptionLanguageCodesLanguageCodeDelete.");
                                if (null == s) throw new De("languageCode", "Required parameter languageCode was null or undefined when calling v1DeveloperProductsDeveloperProductIdNameDescriptionLanguageCodesLanguageCodeDelete.");
                                return a = "/v1/developer-products/{developerProductId}/name-description/language-codes/{languageCode}".replace("{developerProductId}", encodeURIComponent(String(i))).replace("{languageCode}", encodeURIComponent(String(s))), t = T.Qc(a, !0), d && (o = d.baseOptions), n = ze(ze({
                                    method: "DELETE"
                                }, o), u), r = {}, a = {}, t.query = ze(ze(ze({}, t.query), a), u.query), delete t.search, o = o && o.headers ? o.headers : {}, n.headers = ze(ze(ze({}, r), o), u.headers), [2, {
                                    url: T.WU(t),
                                    options: n
                                }]
                            })
                        })
                    },
                    v1DeveloperProductsDeveloperProductIdNameDescriptionLanguageCodesLanguageCodePatch: function(i, s, u, c) {
                        return void 0 === c && (c = {}), je(e, void 0, Promise, function() {
                            var t, n, r, a, o;
                            return Ne(this, function(e) {
                                if (null == i) throw new De("developerProductId", "Required parameter developerProductId was null or undefined when calling v1DeveloperProductsDeveloperProductIdNameDescriptionLanguageCodesLanguageCodePatch.");
                                if (null == s) throw new De("languageCode", "Required parameter languageCode was null or undefined when calling v1DeveloperProductsDeveloperProductIdNameDescriptionLanguageCodesLanguageCodePatch.");
                                if (null == u) throw new De("request", "Required parameter request was null or undefined when calling v1DeveloperProductsDeveloperProductIdNameDescriptionLanguageCodesLanguageCodePatch.");
                                return r = "/v1/developer-products/{developerProductId}/name-description/language-codes/{languageCode}".replace("{developerProductId}", encodeURIComponent(String(i))).replace("{languageCode}", encodeURIComponent(String(s))), t = T.Qc(r, !0), d && (o = d.baseOptions), n = ze(ze({
                                    method: "PATCH"
                                }, o), c), a = {}, (r = {})["Content-Type"] = "application/json", t.query = ze(ze(ze({}, t.query), a), c.query), delete t.search, o = o && o.headers ? o.headers : {}, n.headers = ze(ze(ze({}, r), o), c.headers), o = "string" != typeof u || "application/json" === n.headers["Content-Type"], n.data = o ? JSON.stringify(void 0 !== u ? u : {}) : u || "", [2, {
                                    url: T.WU(t),
                                    options: n
                                }]
                            })
                        })
                    },
                    v1DeveloperProductsDeveloperProductIdNameLanguageCodesLanguageCodePatch: function(i, s, u, c) {
                        return void 0 === c && (c = {}), je(e, void 0, Promise, function() {
                            var t, n, r, a, o;
                            return Ne(this, function(e) {
                                if (null == i) throw new De("developerProductId", "Required parameter developerProductId was null or undefined when calling v1DeveloperProductsDeveloperProductIdNameLanguageCodesLanguageCodePatch.");
                                if (null == s) throw new De("languageCode", "Required parameter languageCode was null or undefined when calling v1DeveloperProductsDeveloperProductIdNameLanguageCodesLanguageCodePatch.");
                                if (null == u) throw new De("request", "Required parameter request was null or undefined when calling v1DeveloperProductsDeveloperProductIdNameLanguageCodesLanguageCodePatch.");
                                return r = "/v1/developer-products/{developerProductId}/name/language-codes/{languageCode}".replace("{developerProductId}", encodeURIComponent(String(i))).replace("{languageCode}", encodeURIComponent(String(s))), t = T.Qc(r, !0), d && (o = d.baseOptions), n = ze(ze({
                                    method: "PATCH"
                                }, o), c), a = {}, (r = {})["Content-Type"] = "application/json", t.query = ze(ze(ze({}, t.query), a), c.query), delete t.search, o = o && o.headers ? o.headers : {}, n.headers = ze(ze(ze({}, r), o), c.headers), o = "string" != typeof u || "application/json" === n.headers["Content-Type"], n.data = o ? JSON.stringify(void 0 !== u ? u : {}) : u || "", [2, {
                                    url: T.WU(t),
                                    options: n
                                }]
                            })
                        })
                    }
                }
            }

            function at(i) {
                return {
                    v1DeveloperProductsDeveloperProductIdDescriptionLanguageCodesLanguageCodePatch: function(t, r, a, o) {
                        return je(this, void 0, Promise, function() {
                            var n;
                            return Ne(this, function(e) {
                                switch (e.label) {
                                    case 0:
                                        return [4, rt(i).v1DeveloperProductsDeveloperProductIdDescriptionLanguageCodesLanguageCodePatch(t, r, a, o)];
                                    case 1:
                                        return n = e.sent(), [2, function(e, t) {
                                            void 0 === e && (e = q), void 0 === t && (t = Re);
                                            t = ze(ze({}, n.options), {
                                                url: t + n.url
                                            });
                                            return e.request(t)
                                        }]
                                }
                            })
                        })
                    },
                    v1DeveloperProductsDeveloperProductIdIconsGet: function(t, r, a, o) {
                        return je(this, void 0, Promise, function() {
                            var n;
                            return Ne(this, function(e) {
                                switch (e.label) {
                                    case 0:
                                        return [4, rt(i).v1DeveloperProductsDeveloperProductIdIconsGet(t, r, a, o)];
                                    case 1:
                                        return n = e.sent(), [2, function(e, t) {
                                            void 0 === e && (e = q), void 0 === t && (t = Re);
                                            t = ze(ze({}, n.options), {
                                                url: t + n.url
                                            });
                                            return e.request(t)
                                        }]
                                }
                            })
                        })
                    },
                    v1DeveloperProductsDeveloperProductIdIconsLanguageCodesLanguageCodeDelete: function(t, r, a) {
                        return je(this, void 0, Promise, function() {
                            var n;
                            return Ne(this, function(e) {
                                switch (e.label) {
                                    case 0:
                                        return [4, rt(i).v1DeveloperProductsDeveloperProductIdIconsLanguageCodesLanguageCodeDelete(t, r, a)];
                                    case 1:
                                        return n = e.sent(), [2, function(e, t) {
                                            void 0 === e && (e = q), void 0 === t && (t = Re);
                                            t = ze(ze({}, n.options), {
                                                url: t + n.url
                                            });
                                            return e.request(t)
                                        }]
                                }
                            })
                        })
                    },
                    v1DeveloperProductsDeveloperProductIdIconsLanguageCodesLanguageCodePost: function(t, r, a, o) {
                        return je(this, void 0, Promise, function() {
                            var n;
                            return Ne(this, function(e) {
                                switch (e.label) {
                                    case 0:
                                        return [4, rt(i).v1DeveloperProductsDeveloperProductIdIconsLanguageCodesLanguageCodePost(t, r, a, o)];
                                    case 1:
                                        return n = e.sent(), [2, function(e, t) {
                                            void 0 === e && (e = q), void 0 === t && (t = Re);
                                            t = ze(ze({}, n.options), {
                                                url: t + n.url
                                            });
                                            return e.request(t)
                                        }]
                                }
                            })
                        })
                    },
                    v1DeveloperProductsDeveloperProductIdNameDescriptionGet: function(t, r) {
                        return je(this, void 0, Promise, function() {
                            var n;
                            return Ne(this, function(e) {
                                switch (e.label) {
                                    case 0:
                                        return [4, rt(i).v1DeveloperProductsDeveloperProductIdNameDescriptionGet(t, r)];
                                    case 1:
                                        return n = e.sent(), [2, function(e, t) {
                                            void 0 === e && (e = q), void 0 === t && (t = Re);
                                            t = ze(ze({}, n.options), {
                                                url: t + n.url
                                            });
                                            return e.request(t)
                                        }]
                                }
                            })
                        })
                    },
                    v1DeveloperProductsDeveloperProductIdNameDescriptionLanguageCodesLanguageCodeDelete: function(t, r, a) {
                        return je(this, void 0, Promise, function() {
                            var n;
                            return Ne(this, function(e) {
                                switch (e.label) {
                                    case 0:
                                        return [4, rt(i).v1DeveloperProductsDeveloperProductIdNameDescriptionLanguageCodesLanguageCodeDelete(t, r, a)];
                                    case 1:
                                        return n = e.sent(), [2, function(e, t) {
                                            void 0 === e && (e = q), void 0 === t && (t = Re);
                                            t = ze(ze({}, n.options), {
                                                url: t + n.url
                                            });
                                            return e.request(t)
                                        }]
                                }
                            })
                        })
                    },
                    v1DeveloperProductsDeveloperProductIdNameDescriptionLanguageCodesLanguageCodePatch: function(t, r, a, o) {
                        return je(this, void 0, Promise, function() {
                            var n;
                            return Ne(this, function(e) {
                                switch (e.label) {
                                    case 0:
                                        return [4, rt(i).v1DeveloperProductsDeveloperProductIdNameDescriptionLanguageCodesLanguageCodePatch(t, r, a, o)];
                                    case 1:
                                        return n = e.sent(), [2, function(e, t) {
                                            void 0 === e && (e = q), void 0 === t && (t = Re);
                                            t = ze(ze({}, n.options), {
                                                url: t + n.url
                                            });
                                            return e.request(t)
                                        }]
                                }
                            })
                        })
                    },
                    v1DeveloperProductsDeveloperProductIdNameLanguageCodesLanguageCodePatch: function(t, r, a, o) {
                        return je(this, void 0, Promise, function() {
                            var n;
                            return Ne(this, function(e) {
                                switch (e.label) {
                                    case 0:
                                        return [4, rt(i).v1DeveloperProductsDeveloperProductIdNameLanguageCodesLanguageCodePatch(t, r, a, o)];
                                    case 1:
                                        return n = e.sent(), [2, function(e, t) {
                                            void 0 === e && (e = q), void 0 === t && (t = Re);
                                            t = ze(ze({}, n.options), {
                                                url: t + n.url
                                            });
                                            return e.request(t)
                                        }]
                                }
                            })
                        })
                    }
                }
            }

            function ot() {
                return null !== Xe && Xe.apply(this, arguments) || this
            }

            function it(d) {
                var e = this;
                return {
                    v1GameIconGamesGameIdGet: function(i, s, u, c) {
                        return void 0 === c && (c = {}), je(e, void 0, Promise, function() {
                            var t, n, r, a, o;
                            return Ne(this, function(e) {
                                if (null == i) throw new De("gameId", "Required parameter gameId was null or undefined when calling v1GameIconGamesGameIdGet.");
                                return a = "/v1/game-icon/games/{gameId}".replace("{gameId}", encodeURIComponent(String(i))), t = T.Qc(a, !0), d && (o = d.baseOptions), n = ze(ze({
                                    method: "GET"
                                }, o), c), r = {}, a = {}, void 0 !== s && (a.width = s), void 0 !== u && (a.height = u), t.query = ze(ze(ze({}, t.query), a), c.query), delete t.search, o = o && o.headers ? o.headers : {}, n.headers = ze(ze(ze({}, r), o), c.headers), [2, {
                                    url: T.WU(t),
                                    options: n
                                }]
                            })
                        })
                    },
                    v1GameIconGamesGameIdLanguageCodesLanguageCodeDelete: function(i, s, u) {
                        return void 0 === u && (u = {}), je(e, void 0, Promise, function() {
                            var t, n, r, a, o;
                            return Ne(this, function(e) {
                                if (null == i) throw new De("gameId", "Required parameter gameId was null or undefined when calling v1GameIconGamesGameIdLanguageCodesLanguageCodeDelete.");
                                if (null == s) throw new De("languageCode", "Required parameter languageCode was null or undefined when calling v1GameIconGamesGameIdLanguageCodesLanguageCodeDelete.");
                                return a = "/v1/game-icon/games/{gameId}/language-codes/{languageCode}".replace("{gameId}", encodeURIComponent(String(i))).replace("{languageCode}", encodeURIComponent(String(s))), t = T.Qc(a, !0), d && (o = d.baseOptions), n = ze(ze({
                                    method: "DELETE"
                                }, o), u), r = {}, a = {}, t.query = ze(ze(ze({}, t.query), a), u.query), delete t.search, o = o && o.headers ? o.headers : {}, n.headers = ze(ze(ze({}, r), o), u.headers), [2, {
                                    url: T.WU(t),
                                    options: n
                                }]
                            })
                        })
                    },
                    v1GameIconGamesGameIdLanguageCodesLanguageCodePost: function(s, u, c, l) {
                        return void 0 === l && (l = {}), je(e, void 0, Promise, function() {
                            var t, n, r, a, o, i;
                            return Ne(this, function(e) {
                                if (null == s) throw new De("gameId", "Required parameter gameId was null or undefined when calling v1GameIconGamesGameIdLanguageCodesLanguageCodePost.");
                                if (null == u) throw new De("languageCode", "Required parameter languageCode was null or undefined when calling v1GameIconGamesGameIdLanguageCodesLanguageCodePost.");
                                return o = "/v1/game-icon/games/{gameId}/language-codes/{languageCode}".replace("{gameId}", encodeURIComponent(String(s))).replace("{languageCode}", encodeURIComponent(String(u))), t = T.Qc(o, !0), d && (i = d.baseOptions), n = ze(ze({
                                    method: "POST"
                                }, i), l), r = {}, a = {}, o = new FormData, void 0 !== c && o.append("request.files", c), r["Content-Type"] = "multipart/form-data", t.query = ze(ze(ze({}, t.query), a), l.query), delete t.search, i = i && i.headers ? i.headers : {}, n.headers = ze(ze(ze({}, r), i), l.headers), n.data = o, [2, {
                                    url: T.WU(t),
                                    options: n
                                }]
                            })
                        })
                    }
                }
            }

            function st(i) {
                return {
                    v1GameIconGamesGameIdGet: function(t, r, a, o) {
                        return je(this, void 0, Promise, function() {
                            var n;
                            return Ne(this, function(e) {
                                switch (e.label) {
                                    case 0:
                                        return [4, it(i).v1GameIconGamesGameIdGet(t, r, a, o)];
                                    case 1:
                                        return n = e.sent(), [2, function(e, t) {
                                            void 0 === e && (e = q), void 0 === t && (t = Re);
                                            t = ze(ze({}, n.options), {
                                                url: t + n.url
                                            });
                                            return e.request(t)
                                        }]
                                }
                            })
                        })
                    },
                    v1GameIconGamesGameIdLanguageCodesLanguageCodeDelete: function(t, r, a) {
                        return je(this, void 0, Promise, function() {
                            var n;
                            return Ne(this, function(e) {
                                switch (e.label) {
                                    case 0:
                                        return [4, it(i).v1GameIconGamesGameIdLanguageCodesLanguageCodeDelete(t, r, a)];
                                    case 1:
                                        return n = e.sent(), [2, function(e, t) {
                                            void 0 === e && (e = q), void 0 === t && (t = Re);
                                            t = ze(ze({}, n.options), {
                                                url: t + n.url
                                            });
                                            return e.request(t)
                                        }]
                                }
                            })
                        })
                    },
                    v1GameIconGamesGameIdLanguageCodesLanguageCodePost: function(t, r, a, o) {
                        return je(this, void 0, Promise, function() {
                            var n;
                            return Ne(this, function(e) {
                                switch (e.label) {
                                    case 0:
                                        return [4, it(i).v1GameIconGamesGameIdLanguageCodesLanguageCodePost(t, r, a, o)];
                                    case 1:
                                        return n = e.sent(), [2, function(e, t) {
                                            void 0 === e && (e = q), void 0 === t && (t = Re);
                                            t = ze(ze({}, n.options), {
                                                url: t + n.url
                                            });
                                            return e.request(t)
                                        }]
                                }
                            })
                        })
                    }
                }
            }

            function ut() {
                return null !== $e && $e.apply(this, arguments) || this
            }

            function ct(l) {
                var e = this;
                return {
                    v1GameLocalizationStatusGameIdTranslationCountsGet: function(i, s) {
                        return void 0 === s && (s = {}), je(e, void 0, Promise, function() {
                            var t, n, r, a, o;
                            return Ne(this, function(e) {
                                if (null == i) throw new De("gameId", "Required parameter gameId was null or undefined when calling v1GameLocalizationStatusGameIdTranslationCountsGet.");
                                return a = "/v1/game-localization-status/{gameId}/translation-counts".replace("{gameId}", encodeURIComponent(String(i))), t = T.Qc(a, !0), l && (o = l.baseOptions), n = ze(ze({
                                    method: "GET"
                                }, o), s), r = {}, a = {}, t.query = ze(ze(ze({}, t.query), a), s.query), delete t.search, o = o && o.headers ? o.headers : {}, n.headers = ze(ze(ze({}, r), o), s.headers), [2, {
                                    url: T.WU(t),
                                    options: n
                                }]
                            })
                        })
                    },
                    v1GameLocalizationStatusTranslationCountsForLanguageOrLocaleGet: function(i, s, u, c) {
                        return void 0 === c && (c = {}), je(e, void 0, Promise, function() {
                            var t, n, r, a, o;
                            return Ne(this, function(e) {
                                if (null == i) throw new De("gameIds", "Required parameter gameIds was null or undefined when calling v1GameLocalizationStatusTranslationCountsForLanguageOrLocaleGet.");
                                if (null == s) throw new De("languageOrLocaleCode", "Required parameter languageOrLocaleCode was null or undefined when calling v1GameLocalizationStatusTranslationCountsForLanguageOrLocaleGet.");
                                if (null == u) throw new De("languageOrLocaleType", "Required parameter languageOrLocaleType was null or undefined when calling v1GameLocalizationStatusTranslationCountsForLanguageOrLocaleGet.");
                                return t = T.Qc("/v1/game-localization-status/translation-counts-for-language-or-locale", !0), l && (o = l.baseOptions), n = ze(ze({
                                    method: "GET"
                                }, o), c), r = {}, a = {}, i && (a.gameIds = i), void 0 !== s && (a.languageOrLocaleCode = s), void 0 !== u && (a.languageOrLocaleType = u), t.query = ze(ze(ze({}, t.query), a), c.query), delete t.search, o = o && o.headers ? o.headers : {}, n.headers = ze(ze(ze({}, r), o), c.headers), [2, {
                                    url: T.WU(t),
                                    options: n
                                }]
                            })
                        })
                    }
                }
            }

            function lt(i) {
                return {
                    v1GameLocalizationStatusGameIdTranslationCountsGet: function(t, r) {
                        return je(this, void 0, Promise, function() {
                            var n;
                            return Ne(this, function(e) {
                                switch (e.label) {
                                    case 0:
                                        return [4, ct(i).v1GameLocalizationStatusGameIdTranslationCountsGet(t, r)];
                                    case 1:
                                        return n = e.sent(), [2, function(e, t) {
                                            void 0 === e && (e = q), void 0 === t && (t = Re);
                                            t = ze(ze({}, n.options), {
                                                url: t + n.url
                                            });
                                            return e.request(t)
                                        }]
                                }
                            })
                        })
                    },
                    v1GameLocalizationStatusTranslationCountsForLanguageOrLocaleGet: function(t, r, a, o) {
                        return je(this, void 0, Promise, function() {
                            var n;
                            return Ne(this, function(e) {
                                switch (e.label) {
                                    case 0:
                                        return [4, ct(i).v1GameLocalizationStatusTranslationCountsForLanguageOrLocaleGet(t, r, a, o)];
                                    case 1:
                                        return n = e.sent(), [2, function(e, t) {
                                            void 0 === e && (e = q), void 0 === t && (t = Re);
                                            t = ze(ze({}, n.options), {
                                                url: t + n.url
                                            });
                                            return e.request(t)
                                        }]
                                }
                            })
                        })
                    }
                }
            }
            Fe(nt, Ke = Oe), nt.prototype.v1BadgesBadgeIdDescriptionLanguageCodesLanguageCodePatch = function(e, t, n, r) {
                var a = this;
                return tt(this.configuration).v1BadgesBadgeIdDescriptionLanguageCodesLanguageCodePatch(e, t, n, r).then(function(e) {
                    return e(a.axios, a.basePath)
                })
            }, nt.prototype.v1BadgesBadgeIdIconsGet = function(e, t, n, r) {
                var a = this;
                return tt(this.configuration).v1BadgesBadgeIdIconsGet(e, t, n, r).then(function(e) {
                    return e(a.axios, a.basePath)
                })
            }, nt.prototype.v1BadgesBadgeIdIconsLanguageCodesLanguageCodeDelete = function(e, t, n) {
                var r = this;
                return tt(this.configuration).v1BadgesBadgeIdIconsLanguageCodesLanguageCodeDelete(e, t, n).then(function(e) {
                    return e(r.axios, r.basePath)
                })
            }, nt.prototype.v1BadgesBadgeIdIconsLanguageCodesLanguageCodePost = function(e, t, n, r) {
                var a = this;
                return tt(this.configuration).v1BadgesBadgeIdIconsLanguageCodesLanguageCodePost(e, t, n, r).then(function(e) {
                    return e(a.axios, a.basePath)
                })
            }, nt.prototype.v1BadgesBadgeIdNameDescriptionGet = function(e, t) {
                var n = this;
                return tt(this.configuration).v1BadgesBadgeIdNameDescriptionGet(e, t).then(function(e) {
                    return e(n.axios, n.basePath)
                })
            }, nt.prototype.v1BadgesBadgeIdNameDescriptionLanguageCodesLanguageCodeDelete = function(e, t, n) {
                var r = this;
                return tt(this.configuration).v1BadgesBadgeIdNameDescriptionLanguageCodesLanguageCodeDelete(e, t, n).then(function(e) {
                    return e(r.axios, r.basePath)
                })
            }, nt.prototype.v1BadgesBadgeIdNameDescriptionLanguageCodesLanguageCodePatch = function(e, t, n, r) {
                var a = this;
                return tt(this.configuration).v1BadgesBadgeIdNameDescriptionLanguageCodesLanguageCodePatch(e, t, n, r).then(function(e) {
                    return e(a.axios, a.basePath)
                })
            }, nt.prototype.v1BadgesBadgeIdNameLanguageCodesLanguageCodePatch = function(e, t, n, r) {
                var a = this;
                return tt(this.configuration).v1BadgesBadgeIdNameLanguageCodesLanguageCodePatch(e, t, n, r).then(function(e) {
                    return e(a.axios, a.basePath)
                })
            }, Fe(ot, Xe = Oe), ot.prototype.v1DeveloperProductsDeveloperProductIdDescriptionLanguageCodesLanguageCodePatch = function(e, t, n, r) {
                var a = this;
                return at(this.configuration).v1DeveloperProductsDeveloperProductIdDescriptionLanguageCodesLanguageCodePatch(e, t, n, r).then(function(e) {
                    return e(a.axios, a.basePath)
                })
            }, ot.prototype.v1DeveloperProductsDeveloperProductIdIconsGet = function(e, t, n, r) {
                var a = this;
                return at(this.configuration).v1DeveloperProductsDeveloperProductIdIconsGet(e, t, n, r).then(function(e) {
                    return e(a.axios, a.basePath)
                })
            }, ot.prototype.v1DeveloperProductsDeveloperProductIdIconsLanguageCodesLanguageCodeDelete = function(e, t, n) {
                var r = this;
                return at(this.configuration).v1DeveloperProductsDeveloperProductIdIconsLanguageCodesLanguageCodeDelete(e, t, n).then(function(e) {
                    return e(r.axios, r.basePath)
                })
            }, ot.prototype.v1DeveloperProductsDeveloperProductIdIconsLanguageCodesLanguageCodePost = function(e, t, n, r) {
                var a = this;
                return at(this.configuration).v1DeveloperProductsDeveloperProductIdIconsLanguageCodesLanguageCodePost(e, t, n, r).then(function(e) {
                    return e(a.axios, a.basePath)
                })
            }, ot.prototype.v1DeveloperProductsDeveloperProductIdNameDescriptionGet = function(e, t) {
                var n = this;
                return at(this.configuration).v1DeveloperProductsDeveloperProductIdNameDescriptionGet(e, t).then(function(e) {
                    return e(n.axios, n.basePath)
                })
            }, ot.prototype.v1DeveloperProductsDeveloperProductIdNameDescriptionLanguageCodesLanguageCodeDelete = function(e, t, n) {
                var r = this;
                return at(this.configuration).v1DeveloperProductsDeveloperProductIdNameDescriptionLanguageCodesLanguageCodeDelete(e, t, n).then(function(e) {
                    return e(r.axios, r.basePath)
                })
            }, ot.prototype.v1DeveloperProductsDeveloperProductIdNameDescriptionLanguageCodesLanguageCodePatch = function(e, t, n, r) {
                var a = this;
                return at(this.configuration).v1DeveloperProductsDeveloperProductIdNameDescriptionLanguageCodesLanguageCodePatch(e, t, n, r).then(function(e) {
                    return e(a.axios, a.basePath)
                })
            }, ot.prototype.v1DeveloperProductsDeveloperProductIdNameLanguageCodesLanguageCodePatch = function(e, t, n, r) {
                var a = this;
                return at(this.configuration).v1DeveloperProductsDeveloperProductIdNameLanguageCodesLanguageCodePatch(e, t, n, r).then(function(e) {
                    return e(a.axios, a.basePath)
                })
            }, Fe(ut, $e = Oe), ut.prototype.v1GameIconGamesGameIdGet = function(e, t, n, r) {
                var a = this;
                return st(this.configuration).v1GameIconGamesGameIdGet(e, t, n, r).then(function(e) {
                    return e(a.axios, a.basePath)
                })
            }, ut.prototype.v1GameIconGamesGameIdLanguageCodesLanguageCodeDelete = function(e, t, n) {
                var r = this;
                return st(this.configuration).v1GameIconGamesGameIdLanguageCodesLanguageCodeDelete(e, t, n).then(function(e) {
                    return e(r.axios, r.basePath)
                })
            }, ut.prototype.v1GameIconGamesGameIdLanguageCodesLanguageCodePost = function(e, t, n, r) {
                var a = this;
                return st(this.configuration).v1GameIconGamesGameIdLanguageCodesLanguageCodePost(e, t, n, r).then(function(e) {
                    return e(a.axios, a.basePath)
                })
            };
            var dt, ht, vt, pt = (Fe(ft, dt = Oe), ft.prototype.v1GameLocalizationStatusGameIdTranslationCountsGet = function(e, t) {
                var n = this;
                return lt(this.configuration).v1GameLocalizationStatusGameIdTranslationCountsGet(e, t).then(function(e) {
                    return e(n.axios, n.basePath)
                })
            }, ft.prototype.v1GameLocalizationStatusTranslationCountsForLanguageOrLocaleGet = function(e, t, n, r) {
                var a = this;
                return lt(this.configuration).v1GameLocalizationStatusTranslationCountsForLanguageOrLocaleGet(e, t, n, r).then(function(e) {
                    return e(a.axios, a.basePath)
                })
            }, ft);

            function ft() {
                return null !== dt && dt.apply(this, arguments) || this
            }

            function mt(d) {
                var e = this;
                return {
                    v1GamePassesGamePassIdDescriptionLanguageCodesLanguageCodePatch: function(i, s, u, c) {
                        return void 0 === c && (c = {}), je(e, void 0, Promise, function() {
                            var t, n, r, a, o;
                            return Ne(this, function(e) {
                                if (null == i) throw new De("gamePassId", "Required parameter gamePassId was null or undefined when calling v1GamePassesGamePassIdDescriptionLanguageCodesLanguageCodePatch.");
                                if (null == s) throw new De("languageCode", "Required parameter languageCode was null or undefined when calling v1GamePassesGamePassIdDescriptionLanguageCodesLanguageCodePatch.");
                                if (null == u) throw new De("request", "Required parameter request was null or undefined when calling v1GamePassesGamePassIdDescriptionLanguageCodesLanguageCodePatch.");
                                return r = "/v1/game-passes/{gamePassId}/description/language-codes/{languageCode}".replace("{gamePassId}", encodeURIComponent(String(i))).replace("{languageCode}", encodeURIComponent(String(s))), t = T.Qc(r, !0), d && (o = d.baseOptions), n = ze(ze({
                                    method: "PATCH"
                                }, o), c), a = {}, (r = {})["Content-Type"] = "application/json", t.query = ze(ze(ze({}, t.query), a), c.query), delete t.search, o = o && o.headers ? o.headers : {}, n.headers = ze(ze(ze({}, r), o), c.headers), o = "string" != typeof u || "application/json" === n.headers["Content-Type"], n.data = o ? JSON.stringify(void 0 !== u ? u : {}) : u || "", [2, {
                                    url: T.WU(t),
                                    options: n
                                }]
                            })
                        })
                    },
                    v1GamePassesGamePassIdIconsGet: function(i, s, u, c) {
                        return void 0 === c && (c = {}), je(e, void 0, Promise, function() {
                            var t, n, r, a, o;
                            return Ne(this, function(e) {
                                if (null == i) throw new De("gamePassId", "Required parameter gamePassId was null or undefined when calling v1GamePassesGamePassIdIconsGet.");
                                return a = "/v1/game-passes/{gamePassId}/icons".replace("{gamePassId}", encodeURIComponent(String(i))), t = T.Qc(a, !0), d && (o = d.baseOptions), n = ze(ze({
                                    method: "GET"
                                }, o), c), r = {}, a = {}, void 0 !== s && (a.width = s), void 0 !== u && (a.height = u), t.query = ze(ze(ze({}, t.query), a), c.query), delete t.search, o = o && o.headers ? o.headers : {}, n.headers = ze(ze(ze({}, r), o), c.headers), [2, {
                                    url: T.WU(t),
                                    options: n
                                }]
                            })
                        })
                    },
                    v1GamePassesGamePassIdIconsLanguageCodesLanguageCodeDelete: function(i, s, u) {
                        return void 0 === u && (u = {}), je(e, void 0, Promise, function() {
                            var t, n, r, a, o;
                            return Ne(this, function(e) {
                                if (null == i) throw new De("gamePassId", "Required parameter gamePassId was null or undefined when calling v1GamePassesGamePassIdIconsLanguageCodesLanguageCodeDelete.");
                                if (null == s) throw new De("languageCode", "Required parameter languageCode was null or undefined when calling v1GamePassesGamePassIdIconsLanguageCodesLanguageCodeDelete.");
                                return a = "/v1/game-passes/{gamePassId}/icons/language-codes/{languageCode}".replace("{gamePassId}", encodeURIComponent(String(i))).replace("{languageCode}", encodeURIComponent(String(s))), t = T.Qc(a, !0), d && (o = d.baseOptions), n = ze(ze({
                                    method: "DELETE"
                                }, o), u), r = {}, a = {}, t.query = ze(ze(ze({}, t.query), a), u.query), delete t.search, o = o && o.headers ? o.headers : {}, n.headers = ze(ze(ze({}, r), o), u.headers), [2, {
                                    url: T.WU(t),
                                    options: n
                                }]
                            })
                        })
                    },
                    v1GamePassesGamePassIdIconsLanguageCodesLanguageCodePost: function(s, u, c, l) {
                        return void 0 === l && (l = {}), je(e, void 0, Promise, function() {
                            var t, n, r, a, o, i;
                            return Ne(this, function(e) {
                                if (null == s) throw new De("gamePassId", "Required parameter gamePassId was null or undefined when calling v1GamePassesGamePassIdIconsLanguageCodesLanguageCodePost.");
                                if (null == u) throw new De("languageCode", "Required parameter languageCode was null or undefined when calling v1GamePassesGamePassIdIconsLanguageCodesLanguageCodePost.");
                                return o = "/v1/game-passes/{gamePassId}/icons/language-codes/{languageCode}".replace("{gamePassId}", encodeURIComponent(String(s))).replace("{languageCode}", encodeURIComponent(String(u))), t = T.Qc(o, !0), d && (i = d.baseOptions), n = ze(ze({
                                    method: "POST"
                                }, i), l), r = {}, a = {}, o = new FormData, void 0 !== c && o.append("request.files", c), r["Content-Type"] = "multipart/form-data", t.query = ze(ze(ze({}, t.query), a), l.query), delete t.search, i = i && i.headers ? i.headers : {}, n.headers = ze(ze(ze({}, r), i), l.headers), n.data = o, [2, {
                                    url: T.WU(t),
                                    options: n
                                }]
                            })
                        })
                    },
                    v1GamePassesGamePassIdNameDescriptionGet: function(i, s) {
                        return void 0 === s && (s = {}), je(e, void 0, Promise, function() {
                            var t, n, r, a, o;
                            return Ne(this, function(e) {
                                if (null == i) throw new De("gamePassId", "Required parameter gamePassId was null or undefined when calling v1GamePassesGamePassIdNameDescriptionGet.");
                                return a = "/v1/game-passes/{gamePassId}/name-description".replace("{gamePassId}", encodeURIComponent(String(i))), t = T.Qc(a, !0), d && (o = d.baseOptions), n = ze(ze({
                                    method: "GET"
                                }, o), s), r = {}, a = {}, t.query = ze(ze(ze({}, t.query), a), s.query), delete t.search, o = o && o.headers ? o.headers : {}, n.headers = ze(ze(ze({}, r), o), s.headers), [2, {
                                    url: T.WU(t),
                                    options: n
                                }]
                            })
                        })
                    },
                    v1GamePassesGamePassIdNameDescriptionLanguageCodesLanguageCodeDelete: function(i, s, u) {
                        return void 0 === u && (u = {}), je(e, void 0, Promise, function() {
                            var t, n, r, a, o;
                            return Ne(this, function(e) {
                                if (null == i) throw new De("gamePassId", "Required parameter gamePassId was null or undefined when calling v1GamePassesGamePassIdNameDescriptionLanguageCodesLanguageCodeDelete.");
                                if (null == s) throw new De("languageCode", "Required parameter languageCode was null or undefined when calling v1GamePassesGamePassIdNameDescriptionLanguageCodesLanguageCodeDelete.");
                                return a = "/v1/game-passes/{gamePassId}/name-description/language-codes/{languageCode}".replace("{gamePassId}", encodeURIComponent(String(i))).replace("{languageCode}", encodeURIComponent(String(s))), t = T.Qc(a, !0), d && (o = d.baseOptions), n = ze(ze({
                                    method: "DELETE"
                                }, o), u), r = {}, a = {}, t.query = ze(ze(ze({}, t.query), a), u.query), delete t.search, o = o && o.headers ? o.headers : {}, n.headers = ze(ze(ze({}, r), o), u.headers), [2, {
                                    url: T.WU(t),
                                    options: n
                                }]
                            })
                        })
                    },
                    v1GamePassesGamePassIdNameDescriptionLanguageCodesLanguageCodePatch: function(i, s, u, c) {
                        return void 0 === c && (c = {}), je(e, void 0, Promise, function() {
                            var t, n, r, a, o;
                            return Ne(this, function(e) {
                                if (null == i) throw new De("gamePassId", "Required parameter gamePassId was null or undefined when calling v1GamePassesGamePassIdNameDescriptionLanguageCodesLanguageCodePatch.");
                                if (null == s) throw new De("languageCode", "Required parameter languageCode was null or undefined when calling v1GamePassesGamePassIdNameDescriptionLanguageCodesLanguageCodePatch.");
                                if (null == u) throw new De("request", "Required parameter request was null or undefined when calling v1GamePassesGamePassIdNameDescriptionLanguageCodesLanguageCodePatch.");
                                return r = "/v1/game-passes/{gamePassId}/name-description/language-codes/{languageCode}".replace("{gamePassId}", encodeURIComponent(String(i))).replace("{languageCode}", encodeURIComponent(String(s))), t = T.Qc(r, !0), d && (o = d.baseOptions), n = ze(ze({
                                    method: "PATCH"
                                }, o), c), a = {}, (r = {})["Content-Type"] = "application/json", t.query = ze(ze(ze({}, t.query), a), c.query), delete t.search, o = o && o.headers ? o.headers : {}, n.headers = ze(ze(ze({}, r), o), c.headers), o = "string" != typeof u || "application/json" === n.headers["Content-Type"], n.data = o ? JSON.stringify(void 0 !== u ? u : {}) : u || "", [2, {
                                    url: T.WU(t),
                                    options: n
                                }]
                            })
                        })
                    },
                    v1GamePassesGamePassIdNameLanguageCodesLanguageCodePatch: function(i, s, u, c) {
                        return void 0 === c && (c = {}), je(e, void 0, Promise, function() {
                            var t, n, r, a, o;
                            return Ne(this, function(e) {
                                if (null == i) throw new De("gamePassId", "Required parameter gamePassId was null or undefined when calling v1GamePassesGamePassIdNameLanguageCodesLanguageCodePatch.");
                                if (null == s) throw new De("languageCode", "Required parameter languageCode was null or undefined when calling v1GamePassesGamePassIdNameLanguageCodesLanguageCodePatch.");
                                if (null == u) throw new De("request", "Required parameter request was null or undefined when calling v1GamePassesGamePassIdNameLanguageCodesLanguageCodePatch.");
                                return r = "/v1/game-passes/{gamePassId}/name/language-codes/{languageCode}".replace("{gamePassId}", encodeURIComponent(String(i))).replace("{languageCode}", encodeURIComponent(String(s))), t = T.Qc(r, !0), d && (o = d.baseOptions), n = ze(ze({
                                    method: "PATCH"
                                }, o), c), a = {}, (r = {})["Content-Type"] = "application/json", t.query = ze(ze(ze({}, t.query), a), c.query), delete t.search, o = o && o.headers ? o.headers : {}, n.headers = ze(ze(ze({}, r), o), c.headers), o = "string" != typeof u || "application/json" === n.headers["Content-Type"], n.data = o ? JSON.stringify(void 0 !== u ? u : {}) : u || "", [2, {
                                    url: T.WU(t),
                                    options: n
                                }]
                            })
                        })
                    }
                }
            }

            function gt(i) {
                return {
                    v1GamePassesGamePassIdDescriptionLanguageCodesLanguageCodePatch: function(t, r, a, o) {
                        return je(this, void 0, Promise, function() {
                            var n;
                            return Ne(this, function(e) {
                                switch (e.label) {
                                    case 0:
                                        return [4, mt(i).v1GamePassesGamePassIdDescriptionLanguageCodesLanguageCodePatch(t, r, a, o)];
                                    case 1:
                                        return n = e.sent(), [2, function(e, t) {
                                            void 0 === e && (e = q), void 0 === t && (t = Re);
                                            t = ze(ze({}, n.options), {
                                                url: t + n.url
                                            });
                                            return e.request(t)
                                        }]
                                }
                            })
                        })
                    },
                    v1GamePassesGamePassIdIconsGet: function(t, r, a, o) {
                        return je(this, void 0, Promise, function() {
                            var n;
                            return Ne(this, function(e) {
                                switch (e.label) {
                                    case 0:
                                        return [4, mt(i).v1GamePassesGamePassIdIconsGet(t, r, a, o)];
                                    case 1:
                                        return n = e.sent(), [2, function(e, t) {
                                            void 0 === e && (e = q), void 0 === t && (t = Re);
                                            t = ze(ze({}, n.options), {
                                                url: t + n.url
                                            });
                                            return e.request(t)
                                        }]
                                }
                            })
                        })
                    },
                    v1GamePassesGamePassIdIconsLanguageCodesLanguageCodeDelete: function(t, r, a) {
                        return je(this, void 0, Promise, function() {
                            var n;
                            return Ne(this, function(e) {
                                switch (e.label) {
                                    case 0:
                                        return [4, mt(i).v1GamePassesGamePassIdIconsLanguageCodesLanguageCodeDelete(t, r, a)];
                                    case 1:
                                        return n = e.sent(), [2, function(e, t) {
                                            void 0 === e && (e = q), void 0 === t && (t = Re);
                                            t = ze(ze({}, n.options), {
                                                url: t + n.url
                                            });
                                            return e.request(t)
                                        }]
                                }
                            })
                        })
                    },
                    v1GamePassesGamePassIdIconsLanguageCodesLanguageCodePost: function(t, r, a, o) {
                        return je(this, void 0, Promise, function() {
                            var n;
                            return Ne(this, function(e) {
                                switch (e.label) {
                                    case 0:
                                        return [4, mt(i).v1GamePassesGamePassIdIconsLanguageCodesLanguageCodePost(t, r, a, o)];
                                    case 1:
                                        return n = e.sent(), [2, function(e, t) {
                                            void 0 === e && (e = q), void 0 === t && (t = Re);
                                            t = ze(ze({}, n.options), {
                                                url: t + n.url
                                            });
                                            return e.request(t)
                                        }]
                                }
                            })
                        })
                    },
                    v1GamePassesGamePassIdNameDescriptionGet: function(t, r) {
                        return je(this, void 0, Promise, function() {
                            var n;
                            return Ne(this, function(e) {
                                switch (e.label) {
                                    case 0:
                                        return [4, mt(i).v1GamePassesGamePassIdNameDescriptionGet(t, r)];
                                    case 1:
                                        return n = e.sent(), [2, function(e, t) {
                                            void 0 === e && (e = q), void 0 === t && (t = Re);
                                            t = ze(ze({}, n.options), {
                                                url: t + n.url
                                            });
                                            return e.request(t)
                                        }]
                                }
                            })
                        })
                    },
                    v1GamePassesGamePassIdNameDescriptionLanguageCodesLanguageCodeDelete: function(t, r, a) {
                        return je(this, void 0, Promise, function() {
                            var n;
                            return Ne(this, function(e) {
                                switch (e.label) {
                                    case 0:
                                        return [4, mt(i).v1GamePassesGamePassIdNameDescriptionLanguageCodesLanguageCodeDelete(t, r, a)];
                                    case 1:
                                        return n = e.sent(), [2, function(e, t) {
                                            void 0 === e && (e = q), void 0 === t && (t = Re);
                                            t = ze(ze({}, n.options), {
                                                url: t + n.url
                                            });
                                            return e.request(t)
                                        }]
                                }
                            })
                        })
                    },
                    v1GamePassesGamePassIdNameDescriptionLanguageCodesLanguageCodePatch: function(t, r, a, o) {
                        return je(this, void 0, Promise, function() {
                            var n;
                            return Ne(this, function(e) {
                                switch (e.label) {
                                    case 0:
                                        return [4, mt(i).v1GamePassesGamePassIdNameDescriptionLanguageCodesLanguageCodePatch(t, r, a, o)];
                                    case 1:
                                        return n = e.sent(), [2, function(e, t) {
                                            void 0 === e && (e = q), void 0 === t && (t = Re);
                                            t = ze(ze({}, n.options), {
                                                url: t + n.url
                                            });
                                            return e.request(t)
                                        }]
                                }
                            })
                        })
                    },
                    v1GamePassesGamePassIdNameLanguageCodesLanguageCodePatch: function(t, r, a, o) {
                        return je(this, void 0, Promise, function() {
                            var n;
                            return Ne(this, function(e) {
                                switch (e.label) {
                                    case 0:
                                        return [4, mt(i).v1GamePassesGamePassIdNameLanguageCodesLanguageCodePatch(t, r, a, o)];
                                    case 1:
                                        return n = e.sent(), [2, function(e, t) {
                                            void 0 === e && (e = q), void 0 === t && (t = Re);
                                            t = ze(ze({}, n.options), {
                                                url: t + n.url
                                            });
                                            return e.request(t)
                                        }]
                                }
                            })
                        })
                    }
                }
            }

            function yt() {
                return null !== ht && ht.apply(this, arguments) || this
            }

            function Gt(d) {
                var e = this;
                return {
                    v1GameThumbnailsGamesGameIdImagesGet: function(i, s, u, c) {
                        return void 0 === c && (c = {}), je(e, void 0, Promise, function() {
                            var t, n, r, a, o;
                            return Ne(this, function(e) {
                                if (null == i) throw new De("gameId", "Required parameter gameId was null or undefined when calling v1GameThumbnailsGamesGameIdImagesGet.");
                                return a = "/v1/game-thumbnails/games/{gameId}/images".replace("{gameId}", encodeURIComponent(String(i))), t = T.Qc(a, !0), d && (o = d.baseOptions), n = ze(ze({
                                    method: "GET"
                                }, o), c), r = {}, a = {}, void 0 !== s && (a.width = s), void 0 !== u && (a.height = u), t.query = ze(ze(ze({}, t.query), a), c.query), delete t.search, o = o && o.headers ? o.headers : {}, n.headers = ze(ze(ze({}, r), o), c.headers), [2, {
                                    url: T.WU(t),
                                    options: n
                                }]
                            })
                        })
                    },
                    v1GameThumbnailsGamesGameIdLanguageCodesLanguageCodeImagePost: function(s, u, c, l) {
                        return void 0 === l && (l = {}), je(e, void 0, Promise, function() {
                            var t, n, r, a, o, i;
                            return Ne(this, function(e) {
                                if (null == s) throw new De("gameId", "Required parameter gameId was null or undefined when calling v1GameThumbnailsGamesGameIdLanguageCodesLanguageCodeImagePost.");
                                if (null == u) throw new De("languageCode", "Required parameter languageCode was null or undefined when calling v1GameThumbnailsGamesGameIdLanguageCodesLanguageCodeImagePost.");
                                return o = "/v1/game-thumbnails/games/{gameId}/language-codes/{languageCode}/image".replace("{gameId}", encodeURIComponent(String(s))).replace("{languageCode}", encodeURIComponent(String(u))), t = T.Qc(o, !0), d && (i = d.baseOptions), n = ze(ze({
                                    method: "POST"
                                }, i), l), r = {}, a = {}, o = new FormData, void 0 !== c && o.append("gameThumbnailRequest.files", c), r["Content-Type"] = "multipart/form-data", t.query = ze(ze(ze({}, t.query), a), l.query), delete t.search, i = i && i.headers ? i.headers : {}, n.headers = ze(ze(ze({}, r), i), l.headers), n.data = o, [2, {
                                    url: T.WU(t),
                                    options: n
                                }]
                            })
                        })
                    },
                    v1GameThumbnailsGamesGameIdLanguageCodesLanguageCodeImagesImageIdDelete: function(i, s, u, c) {
                        return void 0 === c && (c = {}), je(e, void 0, Promise, function() {
                            var t, n, r, a, o;
                            return Ne(this, function(e) {
                                if (null == i) throw new De("gameId", "Required parameter gameId was null or undefined when calling v1GameThumbnailsGamesGameIdLanguageCodesLanguageCodeImagesImageIdDelete.");
                                if (null == s) throw new De("languageCode", "Required parameter languageCode was null or undefined when calling v1GameThumbnailsGamesGameIdLanguageCodesLanguageCodeImagesImageIdDelete.");
                                if (null == u) throw new De("imageId", "Required parameter imageId was null or undefined when calling v1GameThumbnailsGamesGameIdLanguageCodesLanguageCodeImagesImageIdDelete.");
                                return a = "/v1/game-thumbnails/games/{gameId}/language-codes/{languageCode}/images/{imageId}".replace("{gameId}", encodeURIComponent(String(i))).replace("{languageCode}", encodeURIComponent(String(s))).replace("{imageId}", encodeURIComponent(String(u))), t = T.Qc(a, !0), d && (o = d.baseOptions), n = ze(ze({
                                    method: "DELETE"
                                }, o), c), r = {}, a = {}, t.query = ze(ze(ze({}, t.query), a), c.query), delete t.search, o = o && o.headers ? o.headers : {}, n.headers = ze(ze(ze({}, r), o), c.headers), [2, {
                                    url: T.WU(t),
                                    options: n
                                }]
                            })
                        })
                    },
                    v1GameThumbnailsGamesGameIdLanguageCodesLanguageCodeImagesOrderPost: function(i, s, u, c) {
                        return void 0 === c && (c = {}), je(e, void 0, Promise, function() {
                            var t, n, r, a, o;
                            return Ne(this, function(e) {
                                if (null == i) throw new De("gameId", "Required parameter gameId was null or undefined when calling v1GameThumbnailsGamesGameIdLanguageCodesLanguageCodeImagesOrderPost.");
                                if (null == s) throw new De("languageCode", "Required parameter languageCode was null or undefined when calling v1GameThumbnailsGamesGameIdLanguageCodesLanguageCodeImagesOrderPost.");
                                if (null == u) throw new De("request", "Required parameter request was null or undefined when calling v1GameThumbnailsGamesGameIdLanguageCodesLanguageCodeImagesOrderPost.");
                                return r = "/v1/game-thumbnails/games/{gameId}/language-codes/{languageCode}/images/order".replace("{gameId}", encodeURIComponent(String(i))).replace("{languageCode}", encodeURIComponent(String(s))), t = T.Qc(r, !0), d && (o = d.baseOptions), n = ze(ze({
                                    method: "POST"
                                }, o), c), a = {}, (r = {})["Content-Type"] = "application/json", t.query = ze(ze(ze({}, t.query), a), c.query), delete t.search, o = o && o.headers ? o.headers : {}, n.headers = ze(ze(ze({}, r), o), c.headers), o = "string" != typeof u || "application/json" === n.headers["Content-Type"], n.data = o ? JSON.stringify(void 0 !== u ? u : {}) : u || "", [2, {
                                    url: T.WU(t),
                                    options: n
                                }]
                            })
                        })
                    }
                }
            }

            function It(i) {
                return {
                    v1GameThumbnailsGamesGameIdImagesGet: function(t, r, a, o) {
                        return je(this, void 0, Promise, function() {
                            var n;
                            return Ne(this, function(e) {
                                switch (e.label) {
                                    case 0:
                                        return [4, Gt(i).v1GameThumbnailsGamesGameIdImagesGet(t, r, a, o)];
                                    case 1:
                                        return n = e.sent(), [2, function(e, t) {
                                            void 0 === e && (e = q), void 0 === t && (t = Re);
                                            t = ze(ze({}, n.options), {
                                                url: t + n.url
                                            });
                                            return e.request(t)
                                        }]
                                }
                            })
                        })
                    },
                    v1GameThumbnailsGamesGameIdLanguageCodesLanguageCodeImagePost: function(t, r, a, o) {
                        return je(this, void 0, Promise, function() {
                            var n;
                            return Ne(this, function(e) {
                                switch (e.label) {
                                    case 0:
                                        return [4, Gt(i).v1GameThumbnailsGamesGameIdLanguageCodesLanguageCodeImagePost(t, r, a, o)];
                                    case 1:
                                        return n = e.sent(), [2, function(e, t) {
                                            void 0 === e && (e = q), void 0 === t && (t = Re);
                                            t = ze(ze({}, n.options), {
                                                url: t + n.url
                                            });
                                            return e.request(t)
                                        }]
                                }
                            })
                        })
                    },
                    v1GameThumbnailsGamesGameIdLanguageCodesLanguageCodeImagesImageIdDelete: function(t, r, a, o) {
                        return je(this, void 0, Promise, function() {
                            var n;
                            return Ne(this, function(e) {
                                switch (e.label) {
                                    case 0:
                                        return [4, Gt(i).v1GameThumbnailsGamesGameIdLanguageCodesLanguageCodeImagesImageIdDelete(t, r, a, o)];
                                    case 1:
                                        return n = e.sent(), [2, function(e, t) {
                                            void 0 === e && (e = q), void 0 === t && (t = Re);
                                            t = ze(ze({}, n.options), {
                                                url: t + n.url
                                            });
                                            return e.request(t)
                                        }]
                                }
                            })
                        })
                    },
                    v1GameThumbnailsGamesGameIdLanguageCodesLanguageCodeImagesOrderPost: function(t, r, a, o) {
                        return je(this, void 0, Promise, function() {
                            var n;
                            return Ne(this, function(e) {
                                switch (e.label) {
                                    case 0:
                                        return [4, Gt(i).v1GameThumbnailsGamesGameIdLanguageCodesLanguageCodeImagesOrderPost(t, r, a, o)];
                                    case 1:
                                        return n = e.sent(), [2, function(e, t) {
                                            void 0 === e && (e = q), void 0 === t && (t = Re);
                                            t = ze(ze({}, n.options), {
                                                url: t + n.url
                                            });
                                            return e.request(t)
                                        }]
                                }
                            })
                        })
                    }
                }
            }

            function bt() {
                return null !== vt && vt.apply(this, arguments) || this
            }

            function Pt(l) {
                var e = this;
                return {
                    v1LocalizationtableAvailableLanguagesGet: function(i) {
                        return void 0 === i && (i = {}), je(e, void 0, Promise, function() {
                            var t, n, r, a, o;
                            return Ne(this, function(e) {
                                return t = T.Qc("/v1/localizationtable/available-languages", !0), l && (o = l.baseOptions), n = ze(ze({
                                    method: "GET"
                                }, o), i), r = {}, a = {}, t.query = ze(ze(ze({}, t.query), a), i.query), delete t.search, o = o && o.headers ? o.headers : {}, n.headers = ze(ze(ze({}, r), o), i.headers), [2, {
                                    url: T.WU(t),
                                    options: n
                                }]
                            })
                        })
                    },
                    v1LocalizationtableGamesGameIdAssetsGenerationRequestPost: function(i, s) {
                        return void 0 === s && (s = {}), je(e, void 0, Promise, function() {
                            var t, n, r, a, o;
                            return Ne(this, function(e) {
                                if (null == i) throw new De("gameId", "Required parameter gameId was null or undefined when calling v1LocalizationtableGamesGameIdAssetsGenerationRequestPost.");
                                return a = "/v1/localizationtable/games/{gameId}/assets-generation-request".replace("{gameId}", encodeURIComponent(String(i))), t = T.Qc(a, !0), l && (o = l.baseOptions), n = ze(ze({
                                    method: "POST"
                                }, o), s), r = {}, a = {}, t.query = ze(ze(ze({}, t.query), a), s.query), delete t.search, o = o && o.headers ? o.headers : {}, n.headers = ze(ze(ze({}, r), o), s.headers), [2, {
                                    url: T.WU(t),
                                    options: n
                                }]
                            })
                        })
                    },
                    v1LocalizationtableGametablesGameIdPatch: function(i, s, u) {
                        return void 0 === u && (u = {}), je(e, void 0, Promise, function() {
                            var t, n, r, a, o;
                            return Ne(this, function(e) {
                                if (null == i) throw new De("gameId", "Required parameter gameId was null or undefined when calling v1LocalizationtableGametablesGameIdPatch.");
                                if (null == s) throw new De("request", "Required parameter request was null or undefined when calling v1LocalizationtableGametablesGameIdPatch.");
                                return r = "/v1/localizationtable/gametables/{gameId}".replace("{gameId}", encodeURIComponent(String(i))), t = T.Qc(r, !0), l && (o = l.baseOptions), n = ze(ze({
                                    method: "PATCH"
                                }, o), u), a = {}, (r = {})["Content-Type"] = "application/json", t.query = ze(ze(ze({}, t.query), a), u.query), delete t.search, o = o && o.headers ? o.headers : {}, n.headers = ze(ze(ze({}, r), o), u.headers), o = "string" != typeof s || "application/json" === n.headers["Content-Type"], n.data = o ? JSON.stringify(void 0 !== s ? s : {}) : s || "", [2, {
                                    url: T.WU(t),
                                    options: n
                                }]
                            })
                        })
                    },
                    v1LocalizationtableTablesGet: function(i, s) {
                        return void 0 === s && (s = {}), je(e, void 0, Promise, function() {
                            var t, n, r, a, o;
                            return Ne(this, function(e) {
                                if (null == i) throw new De("assetId", "Required parameter assetId was null or undefined when calling v1LocalizationtableTablesGet.");
                                return t = T.Qc("/v1/localizationtable/tables", !0), l && (o = l.baseOptions), n = ze(ze({
                                    method: "GET"
                                }, o), s), r = {}, a = {}, void 0 !== i && (a.assetId = i), t.query = ze(ze(ze({}, t.query), a), s.query), delete t.search, o = o && o.headers ? o.headers : {}, n.headers = ze(ze(ze({}, r), o), s.headers), [2, {
                                    url: T.WU(t),
                                    options: n
                                }]
                            })
                        })
                    },
                    v1LocalizationtableTablesPost: function(i, s) {
                        return void 0 === s && (s = {}), je(e, void 0, Promise, function() {
                            var t, n, r, a, o;
                            return Ne(this, function(e) {
                                if (null == i) throw new De("request", "Required parameter request was null or undefined when calling v1LocalizationtableTablesPost.");
                                return t = T.Qc("/v1/localizationtable/tables", !0), l && (o = l.baseOptions), n = ze(ze({
                                    method: "POST"
                                }, o), s), a = {}, (r = {})["Content-Type"] = "application/json", t.query = ze(ze(ze({}, t.query), a), s.query), delete t.search, o = o && o.headers ? o.headers : {}, n.headers = ze(ze(ze({}, r), o), s.headers), o = "string" != typeof i || "application/json" === n.headers["Content-Type"], n.data = o ? JSON.stringify(void 0 !== i ? i : {}) : i || "", [2, {
                                    url: T.WU(t),
                                    options: n
                                }]
                            })
                        })
                    },
                    v1LocalizationtableTablesTableIdEntriesGet: function(i, s, u, c) {
                        return void 0 === c && (c = {}), je(e, void 0, Promise, function() {
                            var t, n, r, a, o;
                            return Ne(this, function(e) {
                                if (null == i) throw new De("tableId", "Required parameter tableId was null or undefined when calling v1LocalizationtableTablesTableIdEntriesGet.");
                                return a = "/v1/localizationtable/tables/{tableId}/entries".replace("{tableId}", encodeURIComponent(String(i))), t = T.Qc(a, !0), l && (o = l.baseOptions), n = ze(ze({
                                    method: "GET"
                                }, o), c), r = {}, a = {}, void 0 !== s && (a.cursor = s), void 0 !== u && (a.gameId = u), t.query = ze(ze(ze({}, t.query), a), c.query), delete t.search, o = o && o.headers ? o.headers : {}, n.headers = ze(ze(ze({}, r), o), c.headers), [2, {
                                    url: T.WU(t),
                                    options: n
                                }]
                            })
                        })
                    },
                    v1LocalizationtableTablesTableIdEntriesTranslationHistoryPost: function(i, s, u, c) {
                        return void 0 === c && (c = {}), je(e, void 0, Promise, function() {
                            var t, n, r, a, o;
                            return Ne(this, function(e) {
                                if (null == i) throw new De("tableId", "Required parameter tableId was null or undefined when calling v1LocalizationtableTablesTableIdEntriesTranslationHistoryPost.");
                                if (null == s) throw new De("request", "Required parameter request was null or undefined when calling v1LocalizationtableTablesTableIdEntriesTranslationHistoryPost.");
                                return a = "/v1/localizationtable/tables/{tableId}/entries/translation-history".replace("{tableId}", encodeURIComponent(String(i))), t = T.Qc(a, !0), l && (o = l.baseOptions), n = ze(ze({
                                    method: "POST"
                                }, o), c), r = {}, a = {}, void 0 !== u && (a.gameId = u), r["Content-Type"] = "application/json", t.query = ze(ze(ze({}, t.query), a), c.query), delete t.search, o = o && o.headers ? o.headers : {}, n.headers = ze(ze(ze({}, r), o), c.headers), o = "string" != typeof s || "application/json" === n.headers["Content-Type"], n.data = o ? JSON.stringify(void 0 !== s ? s : {}) : s || "", [2, {
                                    url: T.WU(t),
                                    options: n
                                }]
                            })
                        })
                    },
                    v1LocalizationtableTablesTableIdEntryCountGet: function(i, s, u) {
                        return void 0 === u && (u = {}), je(e, void 0, Promise, function() {
                            var t, n, r, a, o;
                            return Ne(this, function(e) {
                                if (null == i) throw new De("tableId", "Required parameter tableId was null or undefined when calling v1LocalizationtableTablesTableIdEntryCountGet.");
                                return a = "/v1/localizationtable/tables/{tableId}/entry-count".replace("{tableId}", encodeURIComponent(String(i))), t = T.Qc(a, !0), l && (o = l.baseOptions), n = ze(ze({
                                    method: "GET"
                                }, o), u), r = {}, a = {}, void 0 !== s && (a.gameId = s), t.query = ze(ze(ze({}, t.query), a), u.query), delete t.search, o = o && o.headers ? o.headers : {}, n.headers = ze(ze(ze({}, r), o), u.headers), [2, {
                                    url: T.WU(t),
                                    options: n
                                }]
                            })
                        })
                    },
                    v1LocalizationtableTablesTableIdGet: function(i, s) {
                        return void 0 === s && (s = {}), je(e, void 0, Promise, function() {
                            var t, n, r, a, o;
                            return Ne(this, function(e) {
                                if (null == i) throw new De("tableId", "Required parameter tableId was null or undefined when calling v1LocalizationtableTablesTableIdGet.");
                                return a = "/v1/localizationtable/tables/{tableId}".replace("{tableId}", encodeURIComponent(String(i))), t = T.Qc(a, !0), l && (o = l.baseOptions), n = ze(ze({
                                    method: "GET"
                                }, o), s), r = {}, a = {}, t.query = ze(ze(ze({}, t.query), a), s.query), delete t.search, o = o && o.headers ? o.headers : {}, n.headers = ze(ze(ze({}, r), o), s.headers), [2, {
                                    url: T.WU(t),
                                    options: n
                                }]
                            })
                        })
                    },
                    v1LocalizationtableTablesTableIdPatch: function(i, s, u, c) {
                        return void 0 === c && (c = {}), je(e, void 0, Promise, function() {
                            var t, n, r, a, o;
                            return Ne(this, function(e) {
                                if (null == i) throw new De("tableId", "Required parameter tableId was null or undefined when calling v1LocalizationtableTablesTableIdPatch.");
                                if (null == s) throw new De("request", "Required parameter request was null or undefined when calling v1LocalizationtableTablesTableIdPatch.");
                                return a = "/v1/localizationtable/tables/{tableId}".replace("{tableId}", encodeURIComponent(String(i))), t = T.Qc(a, !0), l && (o = l.baseOptions), n = ze(ze({
                                    method: "PATCH"
                                }, o), c), r = {}, a = {}, void 0 !== u && (a.gameId = u), r["Content-Type"] = "application/json", t.query = ze(ze(ze({}, t.query), a), c.query), delete t.search, o = o && o.headers ? o.headers : {}, n.headers = ze(ze(ze({}, r), o), c.headers), o = "string" != typeof s || "application/json" === n.headers["Content-Type"], n.data = o ? JSON.stringify(void 0 !== s ? s : {}) : s || "", [2, {
                                    url: T.WU(t),
                                    options: n
                                }]
                            })
                        })
                    }
                }
            }

            function wt(i) {
                return {
                    v1LocalizationtableAvailableLanguagesGet: function(t) {
                        return je(this, void 0, Promise, function() {
                            var n;
                            return Ne(this, function(e) {
                                switch (e.label) {
                                    case 0:
                                        return [4, Pt(i).v1LocalizationtableAvailableLanguagesGet(t)];
                                    case 1:
                                        return n = e.sent(), [2, function(e, t) {
                                            void 0 === e && (e = q), void 0 === t && (t = Re);
                                            t = ze(ze({}, n.options), {
                                                url: t + n.url
                                            });
                                            return e.request(t)
                                        }]
                                }
                            })
                        })
                    },
                    v1LocalizationtableGamesGameIdAssetsGenerationRequestPost: function(t, r) {
                        return je(this, void 0, Promise, function() {
                            var n;
                            return Ne(this, function(e) {
                                switch (e.label) {
                                    case 0:
                                        return [4, Pt(i).v1LocalizationtableGamesGameIdAssetsGenerationRequestPost(t, r)];
                                    case 1:
                                        return n = e.sent(), [2, function(e, t) {
                                            void 0 === e && (e = q), void 0 === t && (t = Re);
                                            t = ze(ze({}, n.options), {
                                                url: t + n.url
                                            });
                                            return e.request(t)
                                        }]
                                }
                            })
                        })
                    },
                    v1LocalizationtableGametablesGameIdPatch: function(t, r, a) {
                        return je(this, void 0, Promise, function() {
                            var n;
                            return Ne(this, function(e) {
                                switch (e.label) {
                                    case 0:
                                        return [4, Pt(i).v1LocalizationtableGametablesGameIdPatch(t, r, a)];
                                    case 1:
                                        return n = e.sent(), [2, function(e, t) {
                                            void 0 === e && (e = q), void 0 === t && (t = Re);
                                            t = ze(ze({}, n.options), {
                                                url: t + n.url
                                            });
                                            return e.request(t)
                                        }]
                                }
                            })
                        })
                    },
                    v1LocalizationtableTablesGet: function(t, r) {
                        return je(this, void 0, Promise, function() {
                            var n;
                            return Ne(this, function(e) {
                                switch (e.label) {
                                    case 0:
                                        return [4, Pt(i).v1LocalizationtableTablesGet(t, r)];
                                    case 1:
                                        return n = e.sent(), [2, function(e, t) {
                                            void 0 === e && (e = q), void 0 === t && (t = Re);
                                            t = ze(ze({}, n.options), {
                                                url: t + n.url
                                            });
                                            return e.request(t)
                                        }]
                                }
                            })
                        })
                    },
                    v1LocalizationtableTablesPost: function(t, r) {
                        return je(this, void 0, Promise, function() {
                            var n;
                            return Ne(this, function(e) {
                                switch (e.label) {
                                    case 0:
                                        return [4, Pt(i).v1LocalizationtableTablesPost(t, r)];
                                    case 1:
                                        return n = e.sent(), [2, function(e, t) {
                                            void 0 === e && (e = q), void 0 === t && (t = Re);
                                            t = ze(ze({}, n.options), {
                                                url: t + n.url
                                            });
                                            return e.request(t)
                                        }]
                                }
                            })
                        })
                    },
                    v1LocalizationtableTablesTableIdEntriesGet: function(t, r, a, o) {
                        return je(this, void 0, Promise, function() {
                            var n;
                            return Ne(this, function(e) {
                                switch (e.label) {
                                    case 0:
                                        return [4, Pt(i).v1LocalizationtableTablesTableIdEntriesGet(t, r, a, o)];
                                    case 1:
                                        return n = e.sent(), [2, function(e, t) {
                                            void 0 === e && (e = q), void 0 === t && (t = Re);
                                            t = ze(ze({}, n.options), {
                                                url: t + n.url
                                            });
                                            return e.request(t)
                                        }]
                                }
                            })
                        })
                    },
                    v1LocalizationtableTablesTableIdEntriesTranslationHistoryPost: function(t, r, a, o) {
                        return je(this, void 0, Promise, function() {
                            var n;
                            return Ne(this, function(e) {
                                switch (e.label) {
                                    case 0:
                                        return [4, Pt(i).v1LocalizationtableTablesTableIdEntriesTranslationHistoryPost(t, r, a, o)];
                                    case 1:
                                        return n = e.sent(), [2, function(e, t) {
                                            void 0 === e && (e = q), void 0 === t && (t = Re);
                                            t = ze(ze({}, n.options), {
                                                url: t + n.url
                                            });
                                            return e.request(t)
                                        }]
                                }
                            })
                        })
                    },
                    v1LocalizationtableTablesTableIdEntryCountGet: function(t, r, a) {
                        return je(this, void 0, Promise, function() {
                            var n;
                            return Ne(this, function(e) {
                                switch (e.label) {
                                    case 0:
                                        return [4, Pt(i).v1LocalizationtableTablesTableIdEntryCountGet(t, r, a)];
                                    case 1:
                                        return n = e.sent(), [2, function(e, t) {
                                            void 0 === e && (e = q), void 0 === t && (t = Re);
                                            t = ze(ze({}, n.options), {
                                                url: t + n.url
                                            });
                                            return e.request(t)
                                        }]
                                }
                            })
                        })
                    },
                    v1LocalizationtableTablesTableIdGet: function(t, r) {
                        return je(this, void 0, Promise, function() {
                            var n;
                            return Ne(this, function(e) {
                                switch (e.label) {
                                    case 0:
                                        return [4, Pt(i).v1LocalizationtableTablesTableIdGet(t, r)];
                                    case 1:
                                        return n = e.sent(), [2, function(e, t) {
                                            void 0 === e && (e = q), void 0 === t && (t = Re);
                                            t = ze(ze({}, n.options), {
                                                url: t + n.url
                                            });
                                            return e.request(t)
                                        }]
                                }
                            })
                        })
                    },
                    v1LocalizationtableTablesTableIdPatch: function(t, r, a, o) {
                        return je(this, void 0, Promise, function() {
                            var n;
                            return Ne(this, function(e) {
                                switch (e.label) {
                                    case 0:
                                        return [4, Pt(i).v1LocalizationtableTablesTableIdPatch(t, r, a, o)];
                                    case 1:
                                        return n = e.sent(), [2, function(e, t) {
                                            void 0 === e && (e = q), void 0 === t && (t = Re);
                                            t = ze(ze({}, n.options), {
                                                url: t + n.url
                                            });
                                            return e.request(t)
                                        }]
                                }
                            })
                        })
                    }
                }
            }
            Fe(yt, ht = Oe), yt.prototype.v1GamePassesGamePassIdDescriptionLanguageCodesLanguageCodePatch = function(e, t, n, r) {
                var a = this;
                return gt(this.configuration).v1GamePassesGamePassIdDescriptionLanguageCodesLanguageCodePatch(e, t, n, r).then(function(e) {
                    return e(a.axios, a.basePath)
                })
            }, yt.prototype.v1GamePassesGamePassIdIconsGet = function(e, t, n, r) {
                var a = this;
                return gt(this.configuration).v1GamePassesGamePassIdIconsGet(e, t, n, r).then(function(e) {
                    return e(a.axios, a.basePath)
                })
            }, yt.prototype.v1GamePassesGamePassIdIconsLanguageCodesLanguageCodeDelete = function(e, t, n) {
                var r = this;
                return gt(this.configuration).v1GamePassesGamePassIdIconsLanguageCodesLanguageCodeDelete(e, t, n).then(function(e) {
                    return e(r.axios, r.basePath)
                })
            }, yt.prototype.v1GamePassesGamePassIdIconsLanguageCodesLanguageCodePost = function(e, t, n, r) {
                var a = this;
                return gt(this.configuration).v1GamePassesGamePassIdIconsLanguageCodesLanguageCodePost(e, t, n, r).then(function(e) {
                    return e(a.axios, a.basePath)
                })
            }, yt.prototype.v1GamePassesGamePassIdNameDescriptionGet = function(e, t) {
                var n = this;
                return gt(this.configuration).v1GamePassesGamePassIdNameDescriptionGet(e, t).then(function(e) {
                    return e(n.axios, n.basePath)
                })
            }, yt.prototype.v1GamePassesGamePassIdNameDescriptionLanguageCodesLanguageCodeDelete = function(e, t, n) {
                var r = this;
                return gt(this.configuration).v1GamePassesGamePassIdNameDescriptionLanguageCodesLanguageCodeDelete(e, t, n).then(function(e) {
                    return e(r.axios, r.basePath)
                })
            }, yt.prototype.v1GamePassesGamePassIdNameDescriptionLanguageCodesLanguageCodePatch = function(e, t, n, r) {
                var a = this;
                return gt(this.configuration).v1GamePassesGamePassIdNameDescriptionLanguageCodesLanguageCodePatch(e, t, n, r).then(function(e) {
                    return e(a.axios, a.basePath)
                })
            }, yt.prototype.v1GamePassesGamePassIdNameLanguageCodesLanguageCodePatch = function(e, t, n, r) {
                var a = this;
                return gt(this.configuration).v1GamePassesGamePassIdNameLanguageCodesLanguageCodePatch(e, t, n, r).then(function(e) {
                    return e(a.axios, a.basePath)
                })
            }, Fe(bt, vt = Oe), bt.prototype.v1GameThumbnailsGamesGameIdImagesGet = function(e, t, n, r) {
                var a = this;
                return It(this.configuration).v1GameThumbnailsGamesGameIdImagesGet(e, t, n, r).then(function(e) {
                    return e(a.axios, a.basePath)
                })
            }, bt.prototype.v1GameThumbnailsGamesGameIdLanguageCodesLanguageCodeImagePost = function(e, t, n, r) {
                var a = this;
                return It(this.configuration).v1GameThumbnailsGamesGameIdLanguageCodesLanguageCodeImagePost(e, t, n, r).then(function(e) {
                    return e(a.axios, a.basePath)
                })
            }, bt.prototype.v1GameThumbnailsGamesGameIdLanguageCodesLanguageCodeImagesImageIdDelete = function(e, t, n, r) {
                var a = this;
                return It(this.configuration).v1GameThumbnailsGamesGameIdLanguageCodesLanguageCodeImagesImageIdDelete(e, t, n, r).then(function(e) {
                    return e(a.axios, a.basePath)
                })
            }, bt.prototype.v1GameThumbnailsGamesGameIdLanguageCodesLanguageCodeImagesOrderPost = function(e, t, n, r) {
                var a = this;
                return It(this.configuration).v1GameThumbnailsGamesGameIdLanguageCodesLanguageCodeImagesOrderPost(e, t, n, r).then(function(e) {
                    return e(a.axios, a.basePath)
                })
            };
            var Ct, Tt, At, y = (Fe(Lt, Ct = Oe), Lt.prototype.v1LocalizationtableAvailableLanguagesGet = function(e) {
                var t = this;
                return wt(this.configuration).v1LocalizationtableAvailableLanguagesGet(e).then(function(e) {
                    return e(t.axios, t.basePath)
                })
            }, Lt.prototype.v1LocalizationtableGamesGameIdAssetsGenerationRequestPost = function(e, t) {
                var n = this;
                return wt(this.configuration).v1LocalizationtableGamesGameIdAssetsGenerationRequestPost(e, t).then(function(e) {
                    return e(n.axios, n.basePath)
                })
            }, Lt.prototype.v1LocalizationtableGametablesGameIdPatch = function(e, t, n) {
                var r = this;
                return wt(this.configuration).v1LocalizationtableGametablesGameIdPatch(e, t, n).then(function(e) {
                    return e(r.axios, r.basePath)
                })
            }, Lt.prototype.v1LocalizationtableTablesGet = function(e, t) {
                var n = this;
                return wt(this.configuration).v1LocalizationtableTablesGet(e, t).then(function(e) {
                    return e(n.axios, n.basePath)
                })
            }, Lt.prototype.v1LocalizationtableTablesPost = function(e, t) {
                var n = this;
                return wt(this.configuration).v1LocalizationtableTablesPost(e, t).then(function(e) {
                    return e(n.axios, n.basePath)
                })
            }, Lt.prototype.v1LocalizationtableTablesTableIdEntriesGet = function(e, t, n, r) {
                var a = this;
                return wt(this.configuration).v1LocalizationtableTablesTableIdEntriesGet(e, t, n, r).then(function(e) {
                    return e(a.axios, a.basePath)
                })
            }, Lt.prototype.v1LocalizationtableTablesTableIdEntriesTranslationHistoryPost = function(e, t, n, r) {
                var a = this;
                return wt(this.configuration).v1LocalizationtableTablesTableIdEntriesTranslationHistoryPost(e, t, n, r).then(function(e) {
                    return e(a.axios, a.basePath)
                })
            }, Lt.prototype.v1LocalizationtableTablesTableIdEntryCountGet = function(e, t, n) {
                var r = this;
                return wt(this.configuration).v1LocalizationtableTablesTableIdEntryCountGet(e, t, n).then(function(e) {
                    return e(r.axios, r.basePath)
                })
            }, Lt.prototype.v1LocalizationtableTablesTableIdGet = function(e, t) {
                var n = this;
                return wt(this.configuration).v1LocalizationtableTablesTableIdGet(e, t).then(function(e) {
                    return e(n.axios, n.basePath)
                })
            }, Lt.prototype.v1LocalizationtableTablesTableIdPatch = function(e, t, n, r) {
                var a = this;
                return wt(this.configuration).v1LocalizationtableTablesTableIdPatch(e, t, n, r).then(function(e) {
                    return e(a.axios, a.basePath)
                })
            }, Lt);

            function Lt() {
                return null !== Ct && Ct.apply(this, arguments) || this
            }

            function qt(c) {
                var e = this;
                return {
                    v1NameDescriptionGamesGameIdGet: function(i, s) {
                        return void 0 === s && (s = {}), je(e, void 0, Promise, function() {
                            var t, n, r, a, o;
                            return Ne(this, function(e) {
                                if (null == i) throw new De("gameId", "Required parameter gameId was null or undefined when calling v1NameDescriptionGamesGameIdGet.");
                                return a = "/v1/name-description/games/{gameId}".replace("{gameId}", encodeURIComponent(String(i))), t = T.Qc(a, !0), c && (o = c.baseOptions), n = ze(ze({
                                    method: "GET"
                                }, o), s), r = {}, a = {}, t.query = ze(ze(ze({}, t.query), a), s.query), delete t.search, o = o && o.headers ? o.headers : {}, n.headers = ze(ze(ze({}, r), o), s.headers), [2, {
                                    url: T.WU(t),
                                    options: n
                                }]
                            })
                        })
                    },
                    v1NameDescriptionGamesGameIdHistoryPost: function(i, s, u) {
                        return void 0 === u && (u = {}), je(e, void 0, Promise, function() {
                            var t, n, r, a, o;
                            return Ne(this, function(e) {
                                if (null == i) throw new De("gameId", "Required parameter gameId was null or undefined when calling v1NameDescriptionGamesGameIdHistoryPost.");
                                if (null == s) throw new De("request", "Required parameter request was null or undefined when calling v1NameDescriptionGamesGameIdHistoryPost.");
                                return r = "/v1/name-description/games/{gameId}/history".replace("{gameId}", encodeURIComponent(String(i))), t = T.Qc(r, !0), c && (o = c.baseOptions), n = ze(ze({
                                    method: "POST"
                                }, o), u), a = {}, (r = {})["Content-Type"] = "application/json", t.query = ze(ze(ze({}, t.query), a), u.query), delete t.search, o = o && o.headers ? o.headers : {}, n.headers = ze(ze(ze({}, r), o), u.headers), o = "string" != typeof s || "application/json" === n.headers["Content-Type"], n.data = o ? JSON.stringify(void 0 !== s ? s : {}) : s || "", [2, {
                                    url: T.WU(t),
                                    options: n
                                }]
                            })
                        })
                    },
                    v1NameDescriptionGamesGameIdPatch: function(i, s, u) {
                        return void 0 === u && (u = {}), je(e, void 0, Promise, function() {
                            var t, n, r, a, o;
                            return Ne(this, function(e) {
                                if (null == i) throw new De("gameId", "Required parameter gameId was null or undefined when calling v1NameDescriptionGamesGameIdPatch.");
                                if (null == s) throw new De("request", "Required parameter request was null or undefined when calling v1NameDescriptionGamesGameIdPatch.");
                                return r = "/v1/name-description/games/{gameId}".replace("{gameId}", encodeURIComponent(String(i))), t = T.Qc(r, !0), c && (o = c.baseOptions), n = ze(ze({
                                    method: "PATCH"
                                }, o), u), a = {}, (r = {})["Content-Type"] = "application/json", t.query = ze(ze(ze({}, t.query), a), u.query), delete t.search, o = o && o.headers ? o.headers : {}, n.headers = ze(ze(ze({}, r), o), u.headers), o = "string" != typeof s || "application/json" === n.headers["Content-Type"], n.data = o ? JSON.stringify(void 0 !== s ? s : {}) : s || "", [2, {
                                    url: T.WU(t),
                                    options: n
                                }]
                            })
                        })
                    },
                    v1NameDescriptionMetadataGet: function(i) {
                        return void 0 === i && (i = {}), je(e, void 0, Promise, function() {
                            var t, n, r, a, o;
                            return Ne(this, function(e) {
                                return t = T.Qc("/v1/name-description/metadata", !0), c && (o = c.baseOptions), n = ze(ze({
                                    method: "GET"
                                }, o), i), r = {}, a = {}, t.query = ze(ze(ze({}, t.query), a), i.query), delete t.search, o = o && o.headers ? o.headers : {}, n.headers = ze(ze(ze({}, r), o), i.headers), [2, {
                                    url: T.WU(t),
                                    options: n
                                }]
                            })
                        })
                    }
                }
            }

            function St(o) {
                return {
                    v1NameDescriptionGamesGameIdGet: function(t, r) {
                        return je(this, void 0, Promise, function() {
                            var n;
                            return Ne(this, function(e) {
                                switch (e.label) {
                                    case 0:
                                        return [4, qt(o).v1NameDescriptionGamesGameIdGet(t, r)];
                                    case 1:
                                        return n = e.sent(), [2, function(e, t) {
                                            void 0 === e && (e = q), void 0 === t && (t = Re);
                                            t = ze(ze({}, n.options), {
                                                url: t + n.url
                                            });
                                            return e.request(t)
                                        }]
                                }
                            })
                        })
                    },
                    v1NameDescriptionGamesGameIdHistoryPost: function(t, r, a) {
                        return je(this, void 0, Promise, function() {
                            var n;
                            return Ne(this, function(e) {
                                switch (e.label) {
                                    case 0:
                                        return [4, qt(o).v1NameDescriptionGamesGameIdHistoryPost(t, r, a)];
                                    case 1:
                                        return n = e.sent(), [2, function(e, t) {
                                            void 0 === e && (e = q), void 0 === t && (t = Re);
                                            t = ze(ze({}, n.options), {
                                                url: t + n.url
                                            });
                                            return e.request(t)
                                        }]
                                }
                            })
                        })
                    },
                    v1NameDescriptionGamesGameIdPatch: function(t, r, a) {
                        return je(this, void 0, Promise, function() {
                            var n;
                            return Ne(this, function(e) {
                                switch (e.label) {
                                    case 0:
                                        return [4, qt(o).v1NameDescriptionGamesGameIdPatch(t, r, a)];
                                    case 1:
                                        return n = e.sent(), [2, function(e, t) {
                                            void 0 === e && (e = q), void 0 === t && (t = Re);
                                            t = ze(ze({}, n.options), {
                                                url: t + n.url
                                            });
                                            return e.request(t)
                                        }]
                                }
                            })
                        })
                    },
                    v1NameDescriptionMetadataGet: function(t) {
                        return je(this, void 0, Promise, function() {
                            var n;
                            return Ne(this, function(e) {
                                switch (e.label) {
                                    case 0:
                                        return [4, qt(o).v1NameDescriptionMetadataGet(t)];
                                    case 1:
                                        return n = e.sent(), [2, function(e, t) {
                                            void 0 === e && (e = q), void 0 === t && (t = Re);
                                            t = ze(ze({}, n.options), {
                                                url: t + n.url
                                            });
                                            return e.request(t)
                                        }]
                                }
                            })
                        })
                    }
                }
            }

            function Ut() {
                return null !== Tt && Tt.apply(this, arguments) || this
            }

            function Rt(l) {
                var e = this;
                return {
                    v1PlayerPoliciesAllValuesGet: function(i) {
                        return void 0 === i && (i = {}), je(e, void 0, Promise, function() {
                            var t, n, r, a, o;
                            return Ne(this, function(e) {
                                return t = T.Qc("/v1/player-policies/all-values", !0), l && (o = l.baseOptions), n = ze(ze({
                                    method: "GET"
                                }, o), i), r = {}, a = {}, t.query = ze(ze(ze({}, t.query), a), i.query), delete t.search, o = o && o.headers ? o.headers : {}, n.headers = ze(ze(ze({}, r), o), i.headers), [2, {
                                    url: T.WU(t),
                                    options: n
                                }]
                            })
                        })
                    },
                    v1PlayerPoliciesClientGet: function(i) {
                        return void 0 === i && (i = {}), je(e, void 0, Promise, function() {
                            var t, n, r, a, o;
                            return Ne(this, function(e) {
                                return t = T.Qc("/v1/player-policies-client", !0), l && (o = l.baseOptions), n = ze(ze({
                                    method: "GET"
                                }, o), i), r = {}, a = {}, t.query = ze(ze(ze({}, t.query), a), i.query), delete t.search, o = o && o.headers ? o.headers : {}, n.headers = ze(ze(ze({}, r), o), i.headers), [2, {
                                    url: T.WU(t),
                                    options: n
                                }]
                            })
                        })
                    },
                    v1PlayerPoliciesRccGet: function(i, s, u, c) {
                        return void 0 === c && (c = {}), je(e, void 0, Promise, function() {
                            var t, n, r, a, o;
                            return Ne(this, function(e) {
                                if (null == i) throw new De("userId", "Required parameter userId was null or undefined when calling v1PlayerPoliciesRccGet.");
                                if (null == s) throw new De("ipAddress", "Required parameter ipAddress was null or undefined when calling v1PlayerPoliciesRccGet.");
                                if (null == u) throw new De("userAgent", "Required parameter userAgent was null or undefined when calling v1PlayerPoliciesRccGet.");
                                return t = T.Qc("/v1/player-policies-rcc", !0), l && (o = l.baseOptions), n = ze(ze({
                                    method: "GET"
                                }, o), c), r = {}, a = {}, void 0 !== i && (a.userId = i), void 0 !== s && (a.ipAddress = s), void 0 !== u && (a.userAgent = u), t.query = ze(ze(ze({}, t.query), a), c.query), delete t.search, o = o && o.headers ? o.headers : {}, n.headers = ze(ze(ze({}, r), o), c.headers), [2, {
                                    url: T.WU(t),
                                    options: n
                                }]
                            })
                        })
                    }
                }
            }

            function Ot(i) {
                return {
                    v1PlayerPoliciesAllValuesGet: function(t) {
                        return je(this, void 0, Promise, function() {
                            var n;
                            return Ne(this, function(e) {
                                switch (e.label) {
                                    case 0:
                                        return [4, Rt(i).v1PlayerPoliciesAllValuesGet(t)];
                                    case 1:
                                        return n = e.sent(), [2, function(e, t) {
                                            void 0 === e && (e = q), void 0 === t && (t = Re);
                                            t = ze(ze({}, n.options), {
                                                url: t + n.url
                                            });
                                            return e.request(t)
                                        }]
                                }
                            })
                        })
                    },
                    v1PlayerPoliciesClientGet: function(t) {
                        return je(this, void 0, Promise, function() {
                            var n;
                            return Ne(this, function(e) {
                                switch (e.label) {
                                    case 0:
                                        return [4, Rt(i).v1PlayerPoliciesClientGet(t)];
                                    case 1:
                                        return n = e.sent(), [2, function(e, t) {
                                            void 0 === e && (e = q), void 0 === t && (t = Re);
                                            t = ze(ze({}, n.options), {
                                                url: t + n.url
                                            });
                                            return e.request(t)
                                        }]
                                }
                            })
                        })
                    },
                    v1PlayerPoliciesRccGet: function(t, r, a, o) {
                        return je(this, void 0, Promise, function() {
                            var n;
                            return Ne(this, function(e) {
                                switch (e.label) {
                                    case 0:
                                        return [4, Rt(i).v1PlayerPoliciesRccGet(t, r, a, o)];
                                    case 1:
                                        return n = e.sent(), [2, function(e, t) {
                                            void 0 === e && (e = q), void 0 === t && (t = Re);
                                            t = ze(ze({}, n.options), {
                                                url: t + n.url
                                            });
                                            return e.request(t)
                                        }]
                                }
                            })
                        })
                    }
                }
            }

            function Dt() {
                return null !== At && At.apply(this, arguments) || this
            }

            function xt(c) {
                var e = this;
                return {
                    v1SourceLanguageGamesGameIdGet: function(i, s) {
                        return void 0 === s && (s = {}), je(e, void 0, Promise, function() {
                            var t, n, r, a, o;
                            return Ne(this, function(e) {
                                if (null == i) throw new De("gameId", "Required parameter gameId was null or undefined when calling v1SourceLanguageGamesGameIdGet.");
                                return a = "/v1/source-language/games/{gameId}".replace("{gameId}", encodeURIComponent(String(i))), t = T.Qc(a, !0), c && (o = c.baseOptions), n = ze(ze({
                                    method: "GET"
                                }, o), s), r = {}, a = {}, t.query = ze(ze(ze({}, t.query), a), s.query), delete t.search, o = o && o.headers ? o.headers : {}, n.headers = ze(ze(ze({}, r), o), s.headers), [2, {
                                    url: T.WU(t),
                                    options: n
                                }]
                            })
                        })
                    },
                    v1SourceLanguageGamesGameIdPatch: function(i, s, u) {
                        return void 0 === u && (u = {}), je(e, void 0, Promise, function() {
                            var t, n, r, a, o;
                            return Ne(this, function(e) {
                                if (null == i) throw new De("gameId", "Required parameter gameId was null or undefined when calling v1SourceLanguageGamesGameIdPatch.");
                                if (null == s) throw new De("languageCode", "Required parameter languageCode was null or undefined when calling v1SourceLanguageGamesGameIdPatch.");
                                return a = "/v1/source-language/games/{gameId}".replace("{gameId}", encodeURIComponent(String(i))), t = T.Qc(a, !0), c && (o = c.baseOptions), n = ze(ze({
                                    method: "PATCH"
                                }, o), u), r = {}, a = {}, void 0 !== s && (a.languageCode = s), t.query = ze(ze(ze({}, t.query), a), u.query), delete t.search, o = o && o.headers ? o.headers : {}, n.headers = ze(ze(ze({}, r), o), u.headers), [2, {
                                    url: T.WU(t),
                                    options: n
                                }]
                            })
                        })
                    }
                }
            }

            function Et(o) {
                return {
                    v1SourceLanguageGamesGameIdGet: function(t, r) {
                        return je(this, void 0, Promise, function() {
                            var n;
                            return Ne(this, function(e) {
                                switch (e.label) {
                                    case 0:
                                        return [4, xt(o).v1SourceLanguageGamesGameIdGet(t, r)];
                                    case 1:
                                        return n = e.sent(), [2, function(e, t) {
                                            void 0 === e && (e = q), void 0 === t && (t = Re);
                                            t = ze(ze({}, n.options), {
                                                url: t + n.url
                                            });
                                            return e.request(t)
                                        }]
                                }
                            })
                        })
                    },
                    v1SourceLanguageGamesGameIdPatch: function(t, r, a) {
                        return je(this, void 0, Promise, function() {
                            var n;
                            return Ne(this, function(e) {
                                switch (e.label) {
                                    case 0:
                                        return [4, xt(o).v1SourceLanguageGamesGameIdPatch(t, r, a)];
                                    case 1:
                                        return n = e.sent(), [2, function(e, t) {
                                            void 0 === e && (e = q), void 0 === t && (t = Re);
                                            t = ze(ze({}, n.options), {
                                                url: t + n.url
                                            });
                                            return e.request(t)
                                        }]
                                }
                            })
                        })
                    }
                }
            }
            Fe(Ut, Tt = Oe), Ut.prototype.v1NameDescriptionGamesGameIdGet = function(e, t) {
                var n = this;
                return St(this.configuration).v1NameDescriptionGamesGameIdGet(e, t).then(function(e) {
                    return e(n.axios, n.basePath)
                })
            }, Ut.prototype.v1NameDescriptionGamesGameIdHistoryPost = function(e, t, n) {
                var r = this;
                return St(this.configuration).v1NameDescriptionGamesGameIdHistoryPost(e, t, n).then(function(e) {
                    return e(r.axios, r.basePath)
                })
            }, Ut.prototype.v1NameDescriptionGamesGameIdPatch = function(e, t, n) {
                var r = this;
                return St(this.configuration).v1NameDescriptionGamesGameIdPatch(e, t, n).then(function(e) {
                    return e(r.axios, r.basePath)
                })
            }, Ut.prototype.v1NameDescriptionMetadataGet = function(e) {
                var t = this;
                return St(this.configuration).v1NameDescriptionMetadataGet(e).then(function(e) {
                    return e(t.axios, t.basePath)
                })
            }, Fe(Dt, At = Oe), Dt.prototype.v1PlayerPoliciesAllValuesGet = function(e) {
                var t = this;
                return Ot(this.configuration).v1PlayerPoliciesAllValuesGet(e).then(function(e) {
                    return e(t.axios, t.basePath)
                })
            }, Dt.prototype.v1PlayerPoliciesClientGet = function(e) {
                var t = this;
                return Ot(this.configuration).v1PlayerPoliciesClientGet(e).then(function(e) {
                    return e(t.axios, t.basePath)
                })
            }, Dt.prototype.v1PlayerPoliciesRccGet = function(e, t, n, r) {
                var a = this;
                return Ot(this.configuration).v1PlayerPoliciesRccGet(e, t, n, r).then(function(e) {
                    return e(a.axios, a.basePath)
                })
            };
            var Bt, B = (Fe(Ft, Bt = Oe), Ft.prototype.v1SourceLanguageGamesGameIdGet = function(e, t) {
                var n = this;
                return Et(this.configuration).v1SourceLanguageGamesGameIdGet(e, t).then(function(e) {
                    return e(n.axios, n.basePath)
                })
            }, Ft.prototype.v1SourceLanguageGamesGameIdPatch = function(e, t, n) {
                var r = this;
                return Et(this.configuration).v1SourceLanguageGamesGameIdPatch(e, t, n).then(function(e) {
                    return e(r.axios, r.basePath)
                })
            }, Ft);

            function Ft() {
                return null !== Bt && Bt.apply(this, arguments) || this
            }

            function zt(l) {
                var e = this;
                return {
                    v1SupportedLanguagesGamesGameIdAutomaticTranslationStatusGet: function(i, s) {
                        return void 0 === s && (s = {}), je(e, void 0, Promise, function() {
                            var t, n, r, a, o;
                            return Ne(this, function(e) {
                                if (null == i) throw new De("gameId", "Required parameter gameId was null or undefined when calling v1SupportedLanguagesGamesGameIdAutomaticTranslationStatusGet.");
                                return a = "/v1/supported-languages/games/{gameId}/automatic-translation-status".replace("{gameId}", encodeURIComponent(String(i))), t = T.Qc(a, !0), l && (o = l.baseOptions), n = ze(ze({
                                    method: "GET"
                                }, o), s), r = {}, a = {}, t.query = ze(ze(ze({}, t.query), a), s.query), delete t.search, o = o && o.headers ? o.headers : {}, n.headers = ze(ze(ze({}, r), o), s.headers), [2, {
                                    url: T.WU(t),
                                    options: n
                                }]
                            })
                        })
                    },
                    v1SupportedLanguagesGamesGameIdGet: function(i, s) {
                        return void 0 === s && (s = {}), je(e, void 0, Promise, function() {
                            var t, n, r, a, o;
                            return Ne(this, function(e) {
                                if (null == i) throw new De("gameId", "Required parameter gameId was null or undefined when calling v1SupportedLanguagesGamesGameIdGet.");
                                return a = "/v1/supported-languages/games/{gameId}".replace("{gameId}", encodeURIComponent(String(i))), t = T.Qc(a, !0), l && (o = l.baseOptions), n = ze(ze({
                                    method: "GET"
                                }, o), s), r = {}, a = {}, t.query = ze(ze(ze({}, t.query), a), s.query), delete t.search, o = o && o.headers ? o.headers : {}, n.headers = ze(ze(ze({}, r), o), s.headers), [2, {
                                    url: T.WU(t),
                                    options: n
                                }]
                            })
                        })
                    },
                    v1SupportedLanguagesGamesGameIdLanguagesLanguageCodeAutomaticTranslationStatusPatch: function(i, s, u, c) {
                        return void 0 === c && (c = {}), je(e, void 0, Promise, function() {
                            var t, n, r, a, o;
                            return Ne(this, function(e) {
                                if (null == i) throw new De("gameId", "Required parameter gameId was null or undefined when calling v1SupportedLanguagesGamesGameIdLanguagesLanguageCodeAutomaticTranslationStatusPatch.");
                                if (null == s) throw new De("languageCode", "Required parameter languageCode was null or undefined when calling v1SupportedLanguagesGamesGameIdLanguagesLanguageCodeAutomaticTranslationStatusPatch.");
                                if (null == u) throw new De("enableAutomaticTranslation", "Required parameter enableAutomaticTranslation was null or undefined when calling v1SupportedLanguagesGamesGameIdLanguagesLanguageCodeAutomaticTranslationStatusPatch.");
                                return r = "/v1/supported-languages/games/{gameId}/languages/{languageCode}/automatic-translation-status".replace("{gameId}", encodeURIComponent(String(i))).replace("{languageCode}", encodeURIComponent(String(s))), t = T.Qc(r, !0), l && (o = l.baseOptions), n = ze(ze({
                                    method: "PATCH"
                                }, o), c), a = {}, (r = {})["Content-Type"] = "application/json", t.query = ze(ze(ze({}, t.query), a), c.query), delete t.search, o = o && o.headers ? o.headers : {}, n.headers = ze(ze(ze({}, r), o), c.headers), o = "string" != typeof u || "application/json" === n.headers["Content-Type"], n.data = o ? JSON.stringify(void 0 !== u ? u : {}) : u || "", [2, {
                                    url: T.WU(t),
                                    options: n
                                }]
                            })
                        })
                    },
                    v1SupportedLanguagesGamesGameIdLanguagesLanguageCodeUniverseDisplayInfoAutomaticTranslationSettingsPatch: function(i, s, u, c) {
                        return void 0 === c && (c = {}), je(e, void 0, Promise, function() {
                            var t, n, r, a, o;
                            return Ne(this, function(e) {
                                if (null == i) throw new De("gameId", "Required parameter gameId was null or undefined when calling v1SupportedLanguagesGamesGameIdLanguagesLanguageCodeUniverseDisplayInfoAutomaticTranslationSettingsPatch.");
                                if (null == s) throw new De("languageCode", "Required parameter languageCode was null or undefined when calling v1SupportedLanguagesGamesGameIdLanguagesLanguageCodeUniverseDisplayInfoAutomaticTranslationSettingsPatch.");
                                if (null == u) throw new De("enableUniverseDisplayInfoAutomaticTranslation", "Required parameter enableUniverseDisplayInfoAutomaticTranslation was null or undefined when calling v1SupportedLanguagesGamesGameIdLanguagesLanguageCodeUniverseDisplayInfoAutomaticTranslationSettingsPatch.");
                                return r = "/v1/supported-languages/games/{gameId}/languages/{languageCode}/universe-display-info-automatic-translation-settings".replace("{gameId}", encodeURIComponent(String(i))).replace("{languageCode}", encodeURIComponent(String(s))), t = T.Qc(r, !0), l && (o = l.baseOptions), n = ze(ze({
                                    method: "PATCH"
                                }, o), c), a = {}, (r = {})["Content-Type"] = "application/json", t.query = ze(ze(ze({}, t.query), a), c.query), delete t.search, o = o && o.headers ? o.headers : {}, n.headers = ze(ze(ze({}, r), o), c.headers), o = "string" != typeof u || "application/json" === n.headers["Content-Type"], n.data = o ? JSON.stringify(void 0 !== u ? u : {}) : u || "", [2, {
                                    url: T.WU(t),
                                    options: n
                                }]
                            })
                        })
                    },
                    v1SupportedLanguagesGamesGameIdPatch: function(i, s, u) {
                        return void 0 === u && (u = {}), je(e, void 0, Promise, function() {
                            var t, n, r, a, o;
                            return Ne(this, function(e) {
                                if (null == i) throw new De("gameId", "Required parameter gameId was null or undefined when calling v1SupportedLanguagesGamesGameIdPatch.");
                                if (null == s) throw new De("languages", "Required parameter languages was null or undefined when calling v1SupportedLanguagesGamesGameIdPatch.");
                                return r = "/v1/supported-languages/games/{gameId}".replace("{gameId}", encodeURIComponent(String(i))), t = T.Qc(r, !0), l && (o = l.baseOptions), n = ze(ze({
                                    method: "PATCH"
                                }, o), u), a = {}, (r = {})["Content-Type"] = "application/json", t.query = ze(ze(ze({}, t.query), a), u.query), delete t.search, o = o && o.headers ? o.headers : {}, n.headers = ze(ze(ze({}, r), o), u.headers), o = "string" != typeof s || "application/json" === n.headers["Content-Type"], n.data = o ? JSON.stringify(void 0 !== s ? s : {}) : s || "", [2, {
                                    url: T.WU(t),
                                    options: n
                                }]
                            })
                        })
                    },
                    v1SupportedLanguagesGamesGameIdUniverseDisplayInfoAutomaticTranslationSettingsGet: function(i, s) {
                        return void 0 === s && (s = {}), je(e, void 0, Promise, function() {
                            var t, n, r, a, o;
                            return Ne(this, function(e) {
                                if (null == i) throw new De("gameId", "Required parameter gameId was null or undefined when calling v1SupportedLanguagesGamesGameIdUniverseDisplayInfoAutomaticTranslationSettingsGet.");
                                return a = "/v1/supported-languages/games/{gameId}/universe-display-info-automatic-translation-settings".replace("{gameId}", encodeURIComponent(String(i))), t = T.Qc(a, !0), l && (o = l.baseOptions), n = ze(ze({
                                    method: "GET"
                                }, o), s), r = {}, a = {}, t.query = ze(ze(ze({}, t.query), a), s.query), delete t.search, o = o && o.headers ? o.headers : {}, n.headers = ze(ze(ze({}, r), o), s.headers), [2, {
                                    url: T.WU(t),
                                    options: n
                                }]
                            })
                        })
                    },
                    v1SupportedLanguagesMetadataGet: function(i) {
                        return void 0 === i && (i = {}), je(e, void 0, Promise, function() {
                            var t, n, r, a, o;
                            return Ne(this, function(e) {
                                return t = T.Qc("/v1/supported-languages/metadata", !0), l && (o = l.baseOptions), n = ze(ze({
                                    method: "GET"
                                }, o), i), r = {}, a = {}, t.query = ze(ze(ze({}, t.query), a), i.query), delete t.search, o = o && o.headers ? o.headers : {}, n.headers = ze(ze(ze({}, r), o), i.headers), [2, {
                                    url: T.WU(t),
                                    options: n
                                }]
                            })
                        })
                    }
                }
            }

            function jt(i) {
                return {
                    v1SupportedLanguagesGamesGameIdAutomaticTranslationStatusGet: function(t, r) {
                        return je(this, void 0, Promise, function() {
                            var n;
                            return Ne(this, function(e) {
                                switch (e.label) {
                                    case 0:
                                        return [4, zt(i).v1SupportedLanguagesGamesGameIdAutomaticTranslationStatusGet(t, r)];
                                    case 1:
                                        return n = e.sent(), [2, function(e, t) {
                                            void 0 === e && (e = q), void 0 === t && (t = Re);
                                            t = ze(ze({}, n.options), {
                                                url: t + n.url
                                            });
                                            return e.request(t)
                                        }]
                                }
                            })
                        })
                    },
                    v1SupportedLanguagesGamesGameIdGet: function(t, r) {
                        return je(this, void 0, Promise, function() {
                            var n;
                            return Ne(this, function(e) {
                                switch (e.label) {
                                    case 0:
                                        return [4, zt(i).v1SupportedLanguagesGamesGameIdGet(t, r)];
                                    case 1:
                                        return n = e.sent(), [2, function(e, t) {
                                            void 0 === e && (e = q), void 0 === t && (t = Re);
                                            t = ze(ze({}, n.options), {
                                                url: t + n.url
                                            });
                                            return e.request(t)
                                        }]
                                }
                            })
                        })
                    },
                    v1SupportedLanguagesGamesGameIdLanguagesLanguageCodeAutomaticTranslationStatusPatch: function(t, r, a, o) {
                        return je(this, void 0, Promise, function() {
                            var n;
                            return Ne(this, function(e) {
                                switch (e.label) {
                                    case 0:
                                        return [4, zt(i).v1SupportedLanguagesGamesGameIdLanguagesLanguageCodeAutomaticTranslationStatusPatch(t, r, a, o)];
                                    case 1:
                                        return n = e.sent(), [2, function(e, t) {
                                            void 0 === e && (e = q), void 0 === t && (t = Re);
                                            t = ze(ze({}, n.options), {
                                                url: t + n.url
                                            });
                                            return e.request(t)
                                        }]
                                }
                            })
                        })
                    },
                    v1SupportedLanguagesGamesGameIdLanguagesLanguageCodeUniverseDisplayInfoAutomaticTranslationSettingsPatch: function(t, r, a, o) {
                        return je(this, void 0, Promise, function() {
                            var n;
                            return Ne(this, function(e) {
                                switch (e.label) {
                                    case 0:
                                        return [4, zt(i).v1SupportedLanguagesGamesGameIdLanguagesLanguageCodeUniverseDisplayInfoAutomaticTranslationSettingsPatch(t, r, a, o)];
                                    case 1:
                                        return n = e.sent(), [2, function(e, t) {
                                            void 0 === e && (e = q), void 0 === t && (t = Re);
                                            t = ze(ze({}, n.options), {
                                                url: t + n.url
                                            });
                                            return e.request(t)
                                        }]
                                }
                            })
                        })
                    },
                    v1SupportedLanguagesGamesGameIdPatch: function(t, r, a) {
                        return je(this, void 0, Promise, function() {
                            var n;
                            return Ne(this, function(e) {
                                switch (e.label) {
                                    case 0:
                                        return [4, zt(i).v1SupportedLanguagesGamesGameIdPatch(t, r, a)];
                                    case 1:
                                        return n = e.sent(), [2, function(e, t) {
                                            void 0 === e && (e = q), void 0 === t && (t = Re);
                                            t = ze(ze({}, n.options), {
                                                url: t + n.url
                                            });
                                            return e.request(t)
                                        }]
                                }
                            })
                        })
                    },
                    v1SupportedLanguagesGamesGameIdUniverseDisplayInfoAutomaticTranslationSettingsGet: function(t, r) {
                        return je(this, void 0, Promise, function() {
                            var n;
                            return Ne(this, function(e) {
                                switch (e.label) {
                                    case 0:
                                        return [4, zt(i).v1SupportedLanguagesGamesGameIdUniverseDisplayInfoAutomaticTranslationSettingsGet(t, r)];
                                    case 1:
                                        return n = e.sent(), [2, function(e, t) {
                                            void 0 === e && (e = q), void 0 === t && (t = Re);
                                            t = ze(ze({}, n.options), {
                                                url: t + n.url
                                            });
                                            return e.request(t)
                                        }]
                                }
                            })
                        })
                    },
                    v1SupportedLanguagesMetadataGet: function(t) {
                        return je(this, void 0, Promise, function() {
                            var n;
                            return Ne(this, function(e) {
                                switch (e.label) {
                                    case 0:
                                        return [4, zt(i).v1SupportedLanguagesMetadataGet(t)];
                                    case 1:
                                        return n = e.sent(), [2, function(e, t) {
                                            void 0 === e && (e = q), void 0 === t && (t = Re);
                                            t = ze(ze({}, n.options), {
                                                url: t + n.url
                                            });
                                            return e.request(t)
                                        }]
                                }
                            })
                        })
                    }
                }
            }
            var Nt, W = (Fe(kt, Nt = Oe), kt.prototype.v1SupportedLanguagesGamesGameIdAutomaticTranslationStatusGet = function(e, t) {
                var n = this;
                return jt(this.configuration).v1SupportedLanguagesGamesGameIdAutomaticTranslationStatusGet(e, t).then(function(e) {
                    return e(n.axios, n.basePath)
                })
            }, kt.prototype.v1SupportedLanguagesGamesGameIdGet = function(e, t) {
                var n = this;
                return jt(this.configuration).v1SupportedLanguagesGamesGameIdGet(e, t).then(function(e) {
                    return e(n.axios, n.basePath)
                })
            }, kt.prototype.v1SupportedLanguagesGamesGameIdLanguagesLanguageCodeAutomaticTranslationStatusPatch = function(e, t, n, r) {
                var a = this;
                return jt(this.configuration).v1SupportedLanguagesGamesGameIdLanguagesLanguageCodeAutomaticTranslationStatusPatch(e, t, n, r).then(function(e) {
                    return e(a.axios, a.basePath)
                })
            }, kt.prototype.v1SupportedLanguagesGamesGameIdLanguagesLanguageCodeUniverseDisplayInfoAutomaticTranslationSettingsPatch = function(e, t, n, r) {
                var a = this;
                return jt(this.configuration).v1SupportedLanguagesGamesGameIdLanguagesLanguageCodeUniverseDisplayInfoAutomaticTranslationSettingsPatch(e, t, n, r).then(function(e) {
                    return e(a.axios, a.basePath)
                })
            }, kt.prototype.v1SupportedLanguagesGamesGameIdPatch = function(e, t, n) {
                var r = this;
                return jt(this.configuration).v1SupportedLanguagesGamesGameIdPatch(e, t, n).then(function(e) {
                    return e(r.axios, r.basePath)
                })
            }, kt.prototype.v1SupportedLanguagesGamesGameIdUniverseDisplayInfoAutomaticTranslationSettingsGet = function(e, t) {
                var n = this;
                return jt(this.configuration).v1SupportedLanguagesGamesGameIdUniverseDisplayInfoAutomaticTranslationSettingsGet(e, t).then(function(e) {
                    return e(n.axios, n.basePath)
                })
            }, kt.prototype.v1SupportedLanguagesMetadataGet = function(e) {
                var t = this;
                return jt(this.configuration).v1SupportedLanguagesMetadataGet(e).then(function(e) {
                    return e(t.axios, t.basePath)
                })
            }, kt);

            function kt() {
                return null !== Nt && Nt.apply(this, arguments) || this
            }

            function _t(h) {
                var e = this;
                return {
                    v1TranslationAnalyticsGamesGameIdDownloadTranslationAnalyticsReportGet: function(i, s, u, c, l, d) {
                        return void 0 === d && (d = {}), je(e, void 0, Promise, function() {
                            var t, n, r, a, o;
                            return Ne(this, function(e) {
                                if (null == i) throw new De("gameId", "Required parameter gameId was null or undefined when calling v1TranslationAnalyticsGamesGameIdDownloadTranslationAnalyticsReportGet.");
                                if (null == s) throw new De("startDateTime", "Required parameter startDateTime was null or undefined when calling v1TranslationAnalyticsGamesGameIdDownloadTranslationAnalyticsReportGet.");
                                if (null == u) throw new De("endDateTime", "Required parameter endDateTime was null or undefined when calling v1TranslationAnalyticsGamesGameIdDownloadTranslationAnalyticsReportGet.");
                                if (null == c) throw new De("reportType", "Required parameter reportType was null or undefined when calling v1TranslationAnalyticsGamesGameIdDownloadTranslationAnalyticsReportGet.");
                                if (null == l) throw new De("reportSubjectTargetId", "Required parameter reportSubjectTargetId was null or undefined when calling v1TranslationAnalyticsGamesGameIdDownloadTranslationAnalyticsReportGet.");
                                return a = "/v1/translation-analytics/games/{gameId}/download-translation-analytics-report".replace("{gameId}", encodeURIComponent(String(i))), t = T.Qc(a, !0), h && (o = h.baseOptions), n = ze(ze({
                                    method: "GET"
                                }, o), d), r = {}, a = {}, void 0 !== s && (a.startDateTime = s), void 0 !== u && (a.endDateTime = u), void 0 !== c && (a.reportType = c), void 0 !== l && (a.reportSubjectTargetId = l), t.query = ze(ze(ze({}, t.query), a), d.query), delete t.search, o = o && o.headers ? o.headers : {}, n.headers = ze(ze(ze({}, r), o), d.headers), [2, {
                                    url: T.WU(t),
                                    options: n
                                }]
                            })
                        })
                    },
                    v1TranslationAnalyticsGamesGameIdRequestTranslationAnalyticsReportPost: function(i, s, u) {
                        return void 0 === u && (u = {}), je(e, void 0, Promise, function() {
                            var t, n, r, a, o;
                            return Ne(this, function(e) {
                                if (null == i) throw new De("gameId", "Required parameter gameId was null or undefined when calling v1TranslationAnalyticsGamesGameIdRequestTranslationAnalyticsReportPost.");
                                if (null == s) throw new De("request", "Required parameter request was null or undefined when calling v1TranslationAnalyticsGamesGameIdRequestTranslationAnalyticsReportPost.");
                                return r = "/v1/translation-analytics/games/{gameId}/request-translation-analytics-report".replace("{gameId}", encodeURIComponent(String(i))), t = T.Qc(r, !0), h && (o = h.baseOptions), n = ze(ze({
                                    method: "POST"
                                }, o), u), a = {}, (r = {})["Content-Type"] = "application/json", t.query = ze(ze(ze({}, t.query), a), u.query), delete t.search, o = o && o.headers ? o.headers : {}, n.headers = ze(ze(ze({}, r), o), u.headers), o = "string" != typeof s || "application/json" === n.headers["Content-Type"], n.data = o ? JSON.stringify(void 0 !== s ? s : {}) : s || "", [2, {
                                    url: T.WU(t),
                                    options: n
                                }]
                            })
                        })
                    },
                    v1TranslationAnalyticsMetadataGet: function(i) {
                        return void 0 === i && (i = {}), je(e, void 0, Promise, function() {
                            var t, n, r, a, o;
                            return Ne(this, function(e) {
                                return t = T.Qc("/v1/translation-analytics/metadata", !0), h && (o = h.baseOptions), n = ze(ze({
                                    method: "GET"
                                }, o), i), r = {}, a = {}, t.query = ze(ze(ze({}, t.query), a), i.query), delete t.search, o = o && o.headers ? o.headers : {}, n.headers = ze(ze(ze({}, r), o), i.headers), [2, {
                                    url: T.WU(t),
                                    options: n
                                }]
                            })
                        })
                    }
                }
            }

            function Wt(u) {
                return {
                    v1TranslationAnalyticsGamesGameIdDownloadTranslationAnalyticsReportGet: function(t, r, a, o, i, s) {
                        return je(this, void 0, Promise, function() {
                            var n;
                            return Ne(this, function(e) {
                                switch (e.label) {
                                    case 0:
                                        return [4, _t(u).v1TranslationAnalyticsGamesGameIdDownloadTranslationAnalyticsReportGet(t, r, a, o, i, s)];
                                    case 1:
                                        return n = e.sent(), [2, function(e, t) {
                                            void 0 === e && (e = q), void 0 === t && (t = Re);
                                            t = ze(ze({}, n.options), {
                                                url: t + n.url
                                            });
                                            return e.request(t)
                                        }]
                                }
                            })
                        })
                    },
                    v1TranslationAnalyticsGamesGameIdRequestTranslationAnalyticsReportPost: function(t, r, a) {
                        return je(this, void 0, Promise, function() {
                            var n;
                            return Ne(this, function(e) {
                                switch (e.label) {
                                    case 0:
                                        return [4, _t(u).v1TranslationAnalyticsGamesGameIdRequestTranslationAnalyticsReportPost(t, r, a)];
                                    case 1:
                                        return n = e.sent(), [2, function(e, t) {
                                            void 0 === e && (e = q), void 0 === t && (t = Re);
                                            t = ze(ze({}, n.options), {
                                                url: t + n.url
                                            });
                                            return e.request(t)
                                        }]
                                }
                            })
                        })
                    },
                    v1TranslationAnalyticsMetadataGet: function(t) {
                        return je(this, void 0, Promise, function() {
                            var n;
                            return Ne(this, function(e) {
                                switch (e.label) {
                                    case 0:
                                        return [4, _t(u).v1TranslationAnalyticsMetadataGet(t)];
                                    case 1:
                                        return n = e.sent(), [2, function(e, t) {
                                            void 0 === e && (e = q), void 0 === t && (t = Re);
                                            t = ze(ze({}, n.options), {
                                                url: t + n.url
                                            });
                                            return e.request(t)
                                        }]
                                }
                            })
                        })
                    }
                }
            }
            var Mt, Qt, j = (Fe(Ht, Mt = Oe), Ht.prototype.v1TranslationAnalyticsGamesGameIdDownloadTranslationAnalyticsReportGet = function(e, t, n, r, a, o) {
                var i = this;
                return Wt(this.configuration).v1TranslationAnalyticsGamesGameIdDownloadTranslationAnalyticsReportGet(e, t, n, r, a, o).then(function(e) {
                    return e(i.axios, i.basePath)
                })
            }, Ht.prototype.v1TranslationAnalyticsGamesGameIdRequestTranslationAnalyticsReportPost = function(e, t, n) {
                var r = this;
                return Wt(this.configuration).v1TranslationAnalyticsGamesGameIdRequestTranslationAnalyticsReportPost(e, t, n).then(function(e) {
                    return e(r.axios, r.basePath)
                })
            }, Ht.prototype.v1TranslationAnalyticsMetadataGet = function(e) {
                var t = this;
                return Wt(this.configuration).v1TranslationAnalyticsMetadataGet(e).then(function(e) {
                    return e(t.axios, t.basePath)
                })
            }, Ht);

            function Ht() {
                return null !== Mt && Mt.apply(this, arguments) || this
            }

            function Vt(r) {
                return {
                    v1UiConfigurationsGet: function(t) {
                        return je(this, void 0, Promise, function() {
                            var n;
                            return Ne(this, function(e) {
                                switch (e.label) {
                                    case 0:
                                        return [4, function(s) {
                                            var e = this;
                                            return {
                                                v1UiConfigurationsGet: function(i) {
                                                    return void 0 === i && (i = {}), je(e, void 0, Promise, function() {
                                                        var t, n, r, a, o;
                                                        return Ne(this, function(e) {
                                                            return t = T.Qc("/v1/ui-configurations", !0), s && (o = s.baseOptions), n = ze(ze({
                                                                method: "GET"
                                                            }, o), i), r = {}, a = {}, t.query = ze(ze(ze({}, t.query), a), i.query), delete t.search, o = o && o.headers ? o.headers : {}, n.headers = ze(ze(ze({}, r), o), i.headers), [2, {
                                                                url: T.WU(t),
                                                                options: n
                                                            }]
                                                        })
                                                    })
                                                }
                                            }
                                        }(r).v1UiConfigurationsGet(t)];
                                    case 1:
                                        return n = e.sent(), [2, function(e, t) {
                                            void 0 === e && (e = q), void 0 === t && (t = Re);
                                            t = ze(ze({}, n.options), {
                                                url: t + n.url
                                            });
                                            return e.request(t)
                                        }]
                                }
                            })
                        })
                    }
                }
            }

            function Jt() {
                return null !== Qt && Qt.apply(this, arguments) || this
            }
            Fe(Jt, Qt = Oe), Jt.prototype.v1UiConfigurationsGet = function(e) {
                var t = this;
                return Vt(this.configuration).v1UiConfigurationsGet(e).then(function(e) {
                    return e(t.axios, t.basePath)
                })
            };
            var Kt, Xt, X = (Kt = function(e, t) {
                    return (Kt = Object.setPrototypeOf || {
                            __proto__: []
                        }
                        instanceof Array && function(e, t) {
                            e.__proto__ = t
                        } || function(e, t) {
                            for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n])
                        })(e, t)
                }, function(e, t) {
                    if ("function" != typeof t && null !== t) throw new TypeError("Class extends value " + String(t) + " is not a constructor or null");

                    function n() {
                        this.constructor = e
                    }
                    Kt(e, t), e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n)
                }),
                $t = l.EnvironmentUrls.localizationTablesApi.replace(/\/+$/, ""),
                oe = function(e, t, n) {
                    void 0 === t && (t = $t), void 0 === n && (n = q), this.basePath = t, this.axios = n, e && (this.configuration = e, this.basePath = e.basePath || this.basePath)
                },
                Yt = (Xt = Error, X(Zt, Xt), Zt);

            function Zt(e, t) {
                t = Xt.call(this, t) || this;
                return t.field = e, t.name = "RequiredError", t
            }

            function en(e, t, n) {
                if (null == n) throw new Yt(t, "Required parameter " + t + " was null or undefined when calling " + e + ".")
            }

            function tn(e) {
                for (var t = [], n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
                for (var r = new URLSearchParams(e.search), a = 0, o = t; a < o.length; a++) {
                    var i, s = o[a];
                    for (i in s) r.set(i, s[i])
                }
                e.search = r.toString()
            }

            function nn(e, t, n) {
                var r = "string" != typeof e;
                return (r && n && n.isJsonMime ? n.isJsonMime(t.headers["Content-Type"]) : r) ? JSON.stringify(void 0 !== e ? e : {}) : e || ""
            }

            function rn(e) {
                return e.pathname + e.search + e.hash
            }

            function an(n, r, a, o) {
                return function(e, t) {
                    void 0 === e && (e = r), void 0 === t && (t = a);
                    t = sn(sn({}, n.options), {
                        url: ((null == o ? void 0 : o.basePath) || t) + n.url
                    });
                    return e.request(t)
                }
            }
            var on, sn = function() {
                    return (sn = Object.assign || function(e) {
                        for (var t, n = 1, r = arguments.length; n < r; n++)
                            for (var a in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
                        return e
                    }).apply(this, arguments)
                },
                un = "https://example.com",
                Ge = (on = function(e, t) {
                    return (on = Object.setPrototypeOf || {
                            __proto__: []
                        }
                        instanceof Array && function(e, t) {
                            e.__proto__ = t
                        } || function(e, t) {
                            for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n])
                        })(e, t)
                }, function(e, t) {
                    if ("function" != typeof t && null !== t) throw new TypeError("Class extends value " + String(t) + " is not a constructor or null");

                    function n() {
                        this.constructor = e
                    }
                    on(e, t), e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n)
                }),
                cn = function() {
                    return (cn = Object.assign || function(e) {
                        for (var t, n = 1, r = arguments.length; n < r; n++)
                            for (var a in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
                        return e
                    }).apply(this, arguments)
                },
                ln = function(e, i, s, u) {
                    return new(s = s || Promise)(function(n, t) {
                        function r(e) {
                            try {
                                o(u.next(e))
                            } catch (e) {
                                t(e)
                            }
                        }

                        function a(e) {
                            try {
                                o(u.throw(e))
                            } catch (e) {
                                t(e)
                            }
                        }

                        function o(e) {
                            var t;
                            e.done ? n(e.value) : ((t = e.value) instanceof s ? t : new s(function(e) {
                                e(t)
                            })).then(r, a)
                        }
                        o((u = u.apply(e, i || [])).next())
                    })
                },
                dn = function(n, r) {
                    var a, o, i, s = {
                            label: 0,
                            sent: function() {
                                if (1 & i[0]) throw i[1];
                                return i[1]
                            },
                            trys: [],
                            ops: []
                        },
                        e = {
                            next: t(0),
                            throw: t(1),
                            return: t(2)
                        };
                    return "function" == typeof Symbol && (e[Symbol.iterator] = function() {
                        return this
                    }), e;

                    function t(t) {
                        return function(e) {
                            return function(t) {
                                if (a) throw new TypeError("Generator is already executing.");
                                for (; s;) try {
                                    if (a = 1, o && (i = 2 & t[0] ? o.return : t[0] ? o.throw || ((i = o.return) && i.call(o), 0) : o.next) && !(i = i.call(o, t[1])).done) return i;
                                    switch (o = 0, i && (t = [2 & t[0], i.value]), t[0]) {
                                        case 0:
                                        case 1:
                                            i = t;
                                            break;
                                        case 4:
                                            return s.label++, {
                                                value: t[1],
                                                done: !1
                                            };
                                        case 5:
                                            s.label++, o = t[1], t = [0];
                                            continue;
                                        case 7:
                                            t = s.ops.pop(), s.trys.pop();
                                            continue;
                                        default:
                                            if (!(i = 0 < (i = s.trys).length && i[i.length - 1]) && (6 === t[0] || 2 === t[0])) {
                                                s = 0;
                                                continue
                                            }
                                            if (3 === t[0] && (!i || t[1] > i[0] && t[1] < i[3])) {
                                                s.label = t[1];
                                                break
                                            }
                                            if (6 === t[0] && s.label < i[1]) {
                                                s.label = i[1], i = t;
                                                break
                                            }
                                            if (i && s.label < i[2]) {
                                                s.label = i[2], s.ops.push(t);
                                                break
                                            }
                                            i[2] && s.ops.pop(), s.trys.pop();
                                            continue
                                    }
                                    t = r.call(n, s)
                                } catch (e) {
                                    t = [6, e], o = 0
                                } finally {
                                    a = i = 0
                                }
                                if (5 & t[0]) throw t[1];
                                return {
                                    value: t[0] ? t[1] : void 0,
                                    done: !0
                                }
                            }([t, e])
                        }
                    }
                };

            function hn(i) {
                var s = function(l) {
                    var e = this;
                    return {
                        v1AutoLocalizationTableGamesGameIdAssetsGenerationRequestPost: function(o, i) {
                            return void 0 === i && (i = {}), ln(e, void 0, Promise, function() {
                                var t, n, r, a;
                                return dn(this, function(e) {
                                    return en("v1AutoLocalizationTableGamesGameIdAssetsGenerationRequestPost", "gameId", o), r = "/v1/auto-localization-table/games/{gameId}/assets-generation-request".replace("{gameId}", encodeURIComponent(String(o))), t = new URL(r, un), l && (a = l.baseOptions), n = cn(cn({
                                        method: "POST"
                                    }, a), i), r = {}, tn(t, {}, i.query), a = a && a.headers ? a.headers : {}, n.headers = cn(cn(cn({}, r), a), i.headers), [2, {
                                        url: rn(t),
                                        options: n
                                    }]
                                })
                            })
                        },
                        v1AutoLocalizationTableGamesGameIdAutoScrapeCleanupRequestPost: function(i, s, u) {
                            return void 0 === u && (u = {}), ln(e, void 0, Promise, function() {
                                var t, n, r, a, o;
                                return dn(this, function(e) {
                                    return en("v1AutoLocalizationTableGamesGameIdAutoScrapeCleanupRequestPost", "gameId", i), en("v1AutoLocalizationTableGamesGameIdAutoScrapeCleanupRequestPost", "request", s), r = "/v1/auto-localization-table/games/{gameId}/auto-scrape-cleanup-request".replace("{gameId}", encodeURIComponent(String(i))), t = new URL(r, un), l && (o = l.baseOptions), n = cn(cn({
                                        method: "POST"
                                    }, o), u), a = {}, (r = {})["Content-Type"] = "application/json", tn(t, a, u.query), o = o && o.headers ? o.headers : {}, n.headers = cn(cn(cn({}, r), o), u.headers), n.data = nn(s, n, l), [2, {
                                        url: rn(t),
                                        options: n
                                    }]
                                })
                            })
                        },
                        v1AutoLocalizationTableGamesGameIdPatch: function(i, s, u, c) {
                            return void 0 === c && (c = {}), ln(e, void 0, Promise, function() {
                                var t, n, r, a, o;
                                return dn(this, function(e) {
                                    return en("v1AutoLocalizationTableGamesGameIdPatch", "gameId", i), en("v1AutoLocalizationTableGamesGameIdPatch", "request", s), a = "/v1/auto-localization-table/games/{gameId}".replace("{gameId}", encodeURIComponent(String(i))), t = new URL(a, un), l && (o = l.baseOptions), n = cn(cn({
                                        method: "PATCH"
                                    }, o), c), r = {}, a = {}, null != u && (r["Roblox-Game-Id"] = String(u)), r["Content-Type"] = "application/json", tn(t, a, c.query), o = o && o.headers ? o.headers : {}, n.headers = cn(cn(cn({}, r), o), c.headers), n.data = nn(s, n, l), [2, {
                                        url: rn(t),
                                        options: n
                                    }]
                                })
                            })
                        }
                    }
                }(i);
                return {
                    v1AutoLocalizationTableGamesGameIdAssetsGenerationRequestPost: function(n, r) {
                        return ln(this, void 0, Promise, function() {
                            var t;
                            return dn(this, function(e) {
                                switch (e.label) {
                                    case 0:
                                        return [4, s.v1AutoLocalizationTableGamesGameIdAssetsGenerationRequestPost(n, r)];
                                    case 1:
                                        return t = e.sent(), [2, an(t, d(), $t, i)]
                                }
                            })
                        })
                    },
                    v1AutoLocalizationTableGamesGameIdAutoScrapeCleanupRequestPost: function(n, r, a) {
                        return ln(this, void 0, Promise, function() {
                            var t;
                            return dn(this, function(e) {
                                switch (e.label) {
                                    case 0:
                                        return [4, s.v1AutoLocalizationTableGamesGameIdAutoScrapeCleanupRequestPost(n, r, a)];
                                    case 1:
                                        return t = e.sent(), [2, an(t, d(), $t, i)]
                                }
                            })
                        })
                    },
                    v1AutoLocalizationTableGamesGameIdPatch: function(n, r, a, o) {
                        return ln(this, void 0, Promise, function() {
                            var t;
                            return dn(this, function(e) {
                                switch (e.label) {
                                    case 0:
                                        return [4, s.v1AutoLocalizationTableGamesGameIdPatch(n, r, a, o)];
                                    case 1:
                                        return t = e.sent(), [2, an(t, d(), $t, i)]
                                }
                            })
                        })
                    }
                }
            }(Ue = {}).User = "User", Ue.Group = "Group", (Br = {}).Asc = "Asc", Br.Desc = "Desc", (Dn = {}).User = "User", Dn.Group = "Group", (Nn = {}).User = "User", Nn.Automation = "Automation";
            var vn, pn, u = (Ge(fn, vn = oe), fn.prototype.v1AutoLocalizationTableGamesGameIdAssetsGenerationRequestPost = function(e, t) {
                var n = this;
                return hn(this.configuration).v1AutoLocalizationTableGamesGameIdAssetsGenerationRequestPost(e, t).then(function(e) {
                    return e(n.axios, n.basePath)
                })
            }, fn.prototype.v1AutoLocalizationTableGamesGameIdAutoScrapeCleanupRequestPost = function(e, t, n) {
                var r = this;
                return hn(this.configuration).v1AutoLocalizationTableGamesGameIdAutoScrapeCleanupRequestPost(e, t, n).then(function(e) {
                    return e(r.axios, r.basePath)
                })
            }, fn.prototype.v1AutoLocalizationTableGamesGameIdPatch = function(e, t, n, r) {
                var a = this;
                return hn(this.configuration).v1AutoLocalizationTableGamesGameIdPatch(e, t, n, r).then(function(e) {
                    return e(a.axios, a.basePath)
                })
            }, fn);

            function fn() {
                return null !== vn && vn.apply(this, arguments) || this
            }

            function mn(i) {
                var s = function(l) {
                    var e = this;
                    return {
                        v1LocalizationTableAvailableLanguagesGet: function(o) {
                            return void 0 === o && (o = {}), ln(e, void 0, Promise, function() {
                                var t, n, r, a;
                                return dn(this, function(e) {
                                    return t = new URL("/v1/localization-table/available-languages", un), l && (a = l.baseOptions), n = cn(cn({
                                        method: "GET"
                                    }, a), o), r = {}, tn(t, {}, o.query), a = a && a.headers ? a.headers : {}, n.headers = cn(cn(cn({}, r), a), o.headers), [2, {
                                        url: rn(t),
                                        options: n
                                    }]
                                })
                            })
                        },
                        v1LocalizationTableLimitsGet: function(o) {
                            return void 0 === o && (o = {}), ln(e, void 0, Promise, function() {
                                var t, n, r, a;
                                return dn(this, function(e) {
                                    return t = new URL("/v1/localization-table/limits", un), l && (a = l.baseOptions), n = cn(cn({
                                        method: "GET"
                                    }, a), o), r = {}, tn(t, {}, o.query), a = a && a.headers ? a.headers : {}, n.headers = cn(cn(cn({}, r), a), o.headers), [2, {
                                        url: rn(t),
                                        options: n
                                    }]
                                })
                            })
                        },
                        v1LocalizationTableMetadataGet: function(o) {
                            return void 0 === o && (o = {}), ln(e, void 0, Promise, function() {
                                var t, n, r, a;
                                return dn(this, function(e) {
                                    return t = new URL("/v1/localization-table/metadata", un), l && (a = l.baseOptions), n = cn(cn({
                                        method: "GET"
                                    }, a), o), r = {}, tn(t, {}, o.query), a = a && a.headers ? a.headers : {}, n.headers = cn(cn(cn({}, r), a), o.headers), [2, {
                                        url: rn(t),
                                        options: n
                                    }]
                                })
                            })
                        },
                        v1LocalizationTableTablesAssetIdGet: function(o, i) {
                            return void 0 === i && (i = {}), ln(e, void 0, Promise, function() {
                                var t, n, r, a;
                                return dn(this, function(e) {
                                    return en("v1LocalizationTableTablesAssetIdGet", "assetId", o), r = "/v1/localization-table/tables/{assetId}".replace("{assetId}", encodeURIComponent(String(o))), t = new URL(r, un), l && (a = l.baseOptions), n = cn(cn({
                                        method: "GET"
                                    }, a), i), r = {}, tn(t, {}, i.query), a = a && a.headers ? a.headers : {}, n.headers = cn(cn(cn({}, r), a), i.headers), [2, {
                                        url: rn(t),
                                        options: n
                                    }]
                                })
                            })
                        },
                        v1LocalizationTableTablesPost: function(i, s) {
                            return void 0 === s && (s = {}), ln(e, void 0, Promise, function() {
                                var t, n, r, a, o;
                                return dn(this, function(e) {
                                    return en("v1LocalizationTableTablesPost", "request", i), t = new URL("/v1/localization-table/tables", un), l && (o = l.baseOptions), n = cn(cn({
                                        method: "POST"
                                    }, o), s), a = {}, (r = {})["Content-Type"] = "application/json", tn(t, a, s.query), o = o && o.headers ? o.headers : {}, n.headers = cn(cn(cn({}, r), o), s.headers), n.data = nn(i, n, l), [2, {
                                        url: rn(t),
                                        options: n
                                    }]
                                })
                            })
                        },
                        v1LocalizationTableTablesTableIdEntriesGet: function(i, s, u, c) {
                            return void 0 === c && (c = {}), ln(e, void 0, Promise, function() {
                                var t, n, r, a, o;
                                return dn(this, function(e) {
                                    return en("v1LocalizationTableTablesTableIdEntriesGet", "tableId", i), a = "/v1/localization-table/tables/{tableId}/entries".replace("{tableId}", encodeURIComponent(String(i))), t = new URL(a, un), l && (o = l.baseOptions), n = cn(cn({
                                        method: "GET"
                                    }, o), c), r = {}, a = {}, void 0 !== s && (a.cursor = s), void 0 !== u && (a.gameId = u), tn(t, a, c.query), o = o && o.headers ? o.headers : {}, n.headers = cn(cn(cn({}, r), o), c.headers), [2, {
                                        url: rn(t),
                                        options: n
                                    }]
                                })
                            })
                        },
                        v1LocalizationTableTablesTableIdEntriesTranslationHistoryPost: function(i, s, u, c) {
                            return void 0 === c && (c = {}), ln(e, void 0, Promise, function() {
                                var t, n, r, a, o;
                                return dn(this, function(e) {
                                    return en("v1LocalizationTableTablesTableIdEntriesTranslationHistoryPost", "tableId", i), en("v1LocalizationTableTablesTableIdEntriesTranslationHistoryPost", "request", s), a = "/v1/localization-table/tables/{tableId}/entries/translation-history".replace("{tableId}", encodeURIComponent(String(i))), t = new URL(a, un), l && (o = l.baseOptions), n = cn(cn({
                                        method: "POST"
                                    }, o), c), r = {}, a = {}, void 0 !== u && (a.gameId = u), r["Content-Type"] = "application/json", tn(t, a, c.query), o = o && o.headers ? o.headers : {}, n.headers = cn(cn(cn({}, r), o), c.headers), n.data = nn(s, n, l), [2, {
                                        url: rn(t),
                                        options: n
                                    }]
                                })
                            })
                        },
                        v1LocalizationTableTablesTableIdEntryCountGet: function(i, s, u) {
                            return void 0 === u && (u = {}), ln(e, void 0, Promise, function() {
                                var t, n, r, a, o;
                                return dn(this, function(e) {
                                    return en("v1LocalizationTableTablesTableIdEntryCountGet", "tableId", i), a = "/v1/localization-table/tables/{tableId}/entry-count".replace("{tableId}", encodeURIComponent(String(i))), t = new URL(a, un), l && (o = l.baseOptions), n = cn(cn({
                                        method: "GET"
                                    }, o), u), r = {}, a = {}, void 0 !== s && (a.gameId = s), tn(t, a, u.query), o = o && o.headers ? o.headers : {}, n.headers = cn(cn(cn({}, r), o), u.headers), [2, {
                                        url: rn(t),
                                        options: n
                                    }]
                                })
                            })
                        },
                        v1LocalizationTableTablesTableIdGet: function(o, i) {
                            return void 0 === i && (i = {}), ln(e, void 0, Promise, function() {
                                var t, n, r, a;
                                return dn(this, function(e) {
                                    return en("v1LocalizationTableTablesTableIdGet", "tableId", o), r = "/v1/localization-table/tables/{tableId}".replace("{tableId}", encodeURIComponent(String(o))), t = new URL(r, un), l && (a = l.baseOptions), n = cn(cn({
                                        method: "GET"
                                    }, a), i), r = {}, tn(t, {}, i.query), a = a && a.headers ? a.headers : {}, n.headers = cn(cn(cn({}, r), a), i.headers), [2, {
                                        url: rn(t),
                                        options: n
                                    }]
                                })
                            })
                        },
                        v1LocalizationTableTablesTableIdLanguageTranslationCountsGet: function(i, s, u, c) {
                            return void 0 === c && (c = {}), ln(e, void 0, Promise, function() {
                                var t, n, r, a, o;
                                return dn(this, function(e) {
                                    return en("v1LocalizationTableTablesTableIdLanguageTranslationCountsGet", "tableId", i), en("v1LocalizationTableTablesTableIdLanguageTranslationCountsGet", "locales", s), a = "/v1/localization-table/tables/{tableId}/language-translation-counts".replace("{tableId}", encodeURIComponent(String(i))), t = new URL(a, un), l && (o = l.baseOptions), n = cn(cn({
                                        method: "GET"
                                    }, o), c), r = {}, a = {}, s && (a.locales = s), void 0 !== u && (a.gameId = u), tn(t, a, c.query), o = o && o.headers ? o.headers : {}, n.headers = cn(cn(cn({}, r), o), c.headers), [2, {
                                        url: rn(t),
                                        options: n
                                    }]
                                })
                            })
                        },
                        v1LocalizationTableTablesTableIdPatch: function(i, s, u, c) {
                            return void 0 === c && (c = {}), ln(e, void 0, Promise, function() {
                                var t, n, r, a, o;
                                return dn(this, function(e) {
                                    return en("v1LocalizationTableTablesTableIdPatch", "tableId", i), en("v1LocalizationTableTablesTableIdPatch", "request", s), a = "/v1/localization-table/tables/{tableId}".replace("{tableId}", encodeURIComponent(String(i))), t = new URL(a, un), l && (o = l.baseOptions), n = cn(cn({
                                        method: "PATCH"
                                    }, o), c), r = {}, a = {}, void 0 !== u && (a.gameId = u), r["Content-Type"] = "application/json", tn(t, a, c.query), o = o && o.headers ? o.headers : {}, n.headers = cn(cn(cn({}, r), o), c.headers), n.data = nn(s, n, l), [2, {
                                        url: rn(t),
                                        options: n
                                    }]
                                })
                            })
                        }
                    }
                }(i);
                return {
                    v1LocalizationTableAvailableLanguagesGet: function(n) {
                        return ln(this, void 0, Promise, function() {
                            var t;
                            return dn(this, function(e) {
                                switch (e.label) {
                                    case 0:
                                        return [4, s.v1LocalizationTableAvailableLanguagesGet(n)];
                                    case 1:
                                        return t = e.sent(), [2, an(t, d(), $t, i)]
                                }
                            })
                        })
                    },
                    v1LocalizationTableLimitsGet: function(n) {
                        return ln(this, void 0, Promise, function() {
                            var t;
                            return dn(this, function(e) {
                                switch (e.label) {
                                    case 0:
                                        return [4, s.v1LocalizationTableLimitsGet(n)];
                                    case 1:
                                        return t = e.sent(), [2, an(t, d(), $t, i)]
                                }
                            })
                        })
                    },
                    v1LocalizationTableMetadataGet: function(n) {
                        return ln(this, void 0, Promise, function() {
                            var t;
                            return dn(this, function(e) {
                                switch (e.label) {
                                    case 0:
                                        return [4, s.v1LocalizationTableMetadataGet(n)];
                                    case 1:
                                        return t = e.sent(), [2, an(t, d(), $t, i)]
                                }
                            })
                        })
                    },
                    v1LocalizationTableTablesAssetIdGet: function(n, r) {
                        return ln(this, void 0, Promise, function() {
                            var t;
                            return dn(this, function(e) {
                                switch (e.label) {
                                    case 0:
                                        return [4, s.v1LocalizationTableTablesAssetIdGet(n, r)];
                                    case 1:
                                        return t = e.sent(), [2, an(t, d(), $t, i)]
                                }
                            })
                        })
                    },
                    v1LocalizationTableTablesPost: function(n, r) {
                        return ln(this, void 0, Promise, function() {
                            var t;
                            return dn(this, function(e) {
                                switch (e.label) {
                                    case 0:
                                        return [4, s.v1LocalizationTableTablesPost(n, r)];
                                    case 1:
                                        return t = e.sent(), [2, an(t, d(), $t, i)]
                                }
                            })
                        })
                    },
                    v1LocalizationTableTablesTableIdEntriesGet: function(n, r, a, o) {
                        return ln(this, void 0, Promise, function() {
                            var t;
                            return dn(this, function(e) {
                                switch (e.label) {
                                    case 0:
                                        return [4, s.v1LocalizationTableTablesTableIdEntriesGet(n, r, a, o)];
                                    case 1:
                                        return t = e.sent(), [2, an(t, d(), $t, i)]
                                }
                            })
                        })
                    },
                    v1LocalizationTableTablesTableIdEntriesTranslationHistoryPost: function(n, r, a, o) {
                        return ln(this, void 0, Promise, function() {
                            var t;
                            return dn(this, function(e) {
                                switch (e.label) {
                                    case 0:
                                        return [4, s.v1LocalizationTableTablesTableIdEntriesTranslationHistoryPost(n, r, a, o)];
                                    case 1:
                                        return t = e.sent(), [2, an(t, d(), $t, i)]
                                }
                            })
                        })
                    },
                    v1LocalizationTableTablesTableIdEntryCountGet: function(n, r, a) {
                        return ln(this, void 0, Promise, function() {
                            var t;
                            return dn(this, function(e) {
                                switch (e.label) {
                                    case 0:
                                        return [4, s.v1LocalizationTableTablesTableIdEntryCountGet(n, r, a)];
                                    case 1:
                                        return t = e.sent(), [2, an(t, d(), $t, i)]
                                }
                            })
                        })
                    },
                    v1LocalizationTableTablesTableIdGet: function(n, r) {
                        return ln(this, void 0, Promise, function() {
                            var t;
                            return dn(this, function(e) {
                                switch (e.label) {
                                    case 0:
                                        return [4, s.v1LocalizationTableTablesTableIdGet(n, r)];
                                    case 1:
                                        return t = e.sent(), [2, an(t, d(), $t, i)]
                                }
                            })
                        })
                    },
                    v1LocalizationTableTablesTableIdLanguageTranslationCountsGet: function(n, r, a, o) {
                        return ln(this, void 0, Promise, function() {
                            var t;
                            return dn(this, function(e) {
                                switch (e.label) {
                                    case 0:
                                        return [4, s.v1LocalizationTableTablesTableIdLanguageTranslationCountsGet(n, r, a, o)];
                                    case 1:
                                        return t = e.sent(), [2, an(t, d(), $t, i)]
                                }
                            })
                        })
                    },
                    v1LocalizationTableTablesTableIdPatch: function(n, r, a, o) {
                        return ln(this, void 0, Promise, function() {
                            var t;
                            return dn(this, function(e) {
                                switch (e.label) {
                                    case 0:
                                        return [4, s.v1LocalizationTableTablesTableIdPatch(n, r, a, o)];
                                    case 1:
                                        return t = e.sent(), [2, an(t, d(), $t, i)]
                                }
                            })
                        })
                    }
                }
            }

            function gn() {
                return null !== pn && pn.apply(this, arguments) || this
            }
            Ge(gn, pn = oe), gn.prototype.v1LocalizationTableAvailableLanguagesGet = function(e) {
                var t = this;
                return mn(this.configuration).v1LocalizationTableAvailableLanguagesGet(e).then(function(e) {
                    return e(t.axios, t.basePath)
                })
            }, gn.prototype.v1LocalizationTableLimitsGet = function(e) {
                var t = this;
                return mn(this.configuration).v1LocalizationTableLimitsGet(e).then(function(e) {
                    return e(t.axios, t.basePath)
                })
            }, gn.prototype.v1LocalizationTableMetadataGet = function(e) {
                var t = this;
                return mn(this.configuration).v1LocalizationTableMetadataGet(e).then(function(e) {
                    return e(t.axios, t.basePath)
                })
            }, gn.prototype.v1LocalizationTableTablesAssetIdGet = function(e, t) {
                var n = this;
                return mn(this.configuration).v1LocalizationTableTablesAssetIdGet(e, t).then(function(e) {
                    return e(n.axios, n.basePath)
                })
            }, gn.prototype.v1LocalizationTableTablesPost = function(e, t) {
                var n = this;
                return mn(this.configuration).v1LocalizationTableTablesPost(e, t).then(function(e) {
                    return e(n.axios, n.basePath)
                })
            }, gn.prototype.v1LocalizationTableTablesTableIdEntriesGet = function(e, t, n, r) {
                var a = this;
                return mn(this.configuration).v1LocalizationTableTablesTableIdEntriesGet(e, t, n, r).then(function(e) {
                    return e(a.axios, a.basePath)
                })
            }, gn.prototype.v1LocalizationTableTablesTableIdEntriesTranslationHistoryPost = function(e, t, n, r) {
                var a = this;
                return mn(this.configuration).v1LocalizationTableTablesTableIdEntriesTranslationHistoryPost(e, t, n, r).then(function(e) {
                    return e(a.axios, a.basePath)
                })
            }, gn.prototype.v1LocalizationTableTablesTableIdEntryCountGet = function(e, t, n) {
                var r = this;
                return mn(this.configuration).v1LocalizationTableTablesTableIdEntryCountGet(e, t, n).then(function(e) {
                    return e(r.axios, r.basePath)
                })
            }, gn.prototype.v1LocalizationTableTablesTableIdGet = function(e, t) {
                var n = this;
                return mn(this.configuration).v1LocalizationTableTablesTableIdGet(e, t).then(function(e) {
                    return e(n.axios, n.basePath)
                })
            }, gn.prototype.v1LocalizationTableTablesTableIdLanguageTranslationCountsGet = function(e, t, n, r) {
                var a = this;
                return mn(this.configuration).v1LocalizationTableTablesTableIdLanguageTranslationCountsGet(e, t, n, r).then(function(e) {
                    return e(a.axios, a.basePath)
                })
            }, gn.prototype.v1LocalizationTableTablesTableIdPatch = function(e, t, n, r) {
                var a = this;
                return mn(this.configuration).v1LocalizationTableTablesTableIdPatch(e, t, n, r).then(function(e) {
                    return e(a.axios, a.basePath)
                })
            };
            var yn, Gn, In = new Me,
                bn = new u,
                Pn = {
                    getAutolocalizationConfiguration: function(e) {
                        return In.v1AutolocalizationGamesGameIdAutolocalizationtablePost(e, {
                            withCredentials: !0
                        })
                    },
                    setAutolocalizationConfiguration: function(e, t) {
                        t = {
                            isAutolocalizationEnabled: t
                        };
                        return In.v1AutolocalizationGamesGameIdSettingsPatch(e, t, {
                            withCredentials: !0
                        })
                    },
                    setUseAutoLocalizationTable: function(e, t) {
                        t = {
                            shouldUseLocalizationTable: t
                        };
                        return In.v1AutolocalizationGamesGameIdSettingsPatch(e, t, {
                            withCredentials: !0
                        })
                    },
                    flushAutoLocalizationTable: function(e, t) {
                        t = {
                            maxAgeForFlush: t
                        };
                        return bn.v1AutoLocalizationTableGamesGameIdAutoScrapeCleanupRequestPost(e, t, {
                            withCredentials: !0
                        })
                    },
                    getMetadata: function() {
                        return In.v1AutolocalizationMetadataGet({
                            withCredentials: !0
                        })
                    }
                },
                wn = new Ye,
                Fe = {
                    getGameFeatureStatus: function(e) {
                        return wn.v1AutomaticTranslationGamesGameIdFeatureStatusGet(e, {
                            withCredentials: !0
                        })
                    },
                    getTargetLanguages: function(e, t) {
                        return wn.v1AutomaticTranslationLanguagesLanguageCodeTargetLanguagesGet(e, t, {
                            withCredentials: !0
                        })
                    },
                    getGameAutoLocalizationQuota: function(e) {
                        return wn.v1AutomaticTranslationGamesGameIdQuotaGet(e, {
                            withCredentials: !0
                        })
                    }
                },
                Oe = (yn = function(e, t) {
                    return (yn = Object.setPrototypeOf || {
                            __proto__: []
                        }
                        instanceof Array && function(e, t) {
                            e.__proto__ = t
                        } || function(e, t) {
                            for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n])
                        })(e, t)
                }, function(e, t) {
                    if ("function" != typeof t && null !== t) throw new TypeError("Class extends value " + String(t) + " is not a constructor or null");

                    function n() {
                        this.constructor = e
                    }
                    yn(e, t), e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n)
                }),
                Cn = l.EnvironmentUrls.gameInternationalizationApi.replace(/\/+$/, ""),
                X = function(e, t, n) {
                    void 0 === t && (t = Cn), void 0 === n && (n = q), this.basePath = t, this.axios = n, e && (this.configuration = e, this.basePath = e.basePath || this.basePath)
                },
                Tn = (Gn = Error, Oe(An, Gn), An);

            function An(e, t) {
                t = Gn.call(this, t) || this;
                return t.field = e, t.name = "RequiredError", t
            }
            var Ln, Ue = (Ln = function(e, t) {
                    return (Ln = Object.setPrototypeOf || {
                            __proto__: []
                        }
                        instanceof Array && function(e, t) {
                            e.__proto__ = t
                        } || function(e, t) {
                            for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n])
                        })(e, t)
                }, function(e, t) {
                    if ("function" != typeof t && null !== t) throw new TypeError("Class extends value " + String(t) + " is not a constructor or null");

                    function n() {
                        this.constructor = e
                    }
                    Ln(e, t), e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n)
                }),
                qn = function() {
                    return (qn = Object.assign || function(e) {
                        for (var t, n = 1, r = arguments.length; n < r; n++)
                            for (var a in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
                        return e
                    }).apply(this, arguments)
                },
                Sn = function(e, i, s, u) {
                    return new(s = s || Promise)(function(n, t) {
                        function r(e) {
                            try {
                                o(u.next(e))
                            } catch (e) {
                                t(e)
                            }
                        }

                        function a(e) {
                            try {
                                o(u.throw(e))
                            } catch (e) {
                                t(e)
                            }
                        }

                        function o(e) {
                            var t;
                            e.done ? n(e.value) : ((t = e.value) instanceof s ? t : new s(function(e) {
                                e(t)
                            })).then(r, a)
                        }
                        o((u = u.apply(e, i || [])).next())
                    })
                },
                Un = function(n, r) {
                    var a, o, i, s = {
                            label: 0,
                            sent: function() {
                                if (1 & i[0]) throw i[1];
                                return i[1]
                            },
                            trys: [],
                            ops: []
                        },
                        e = {
                            next: t(0),
                            throw: t(1),
                            return: t(2)
                        };
                    return "function" == typeof Symbol && (e[Symbol.iterator] = function() {
                        return this
                    }), e;

                    function t(t) {
                        return function(e) {
                            return function(t) {
                                if (a) throw new TypeError("Generator is already executing.");
                                for (; s;) try {
                                    if (a = 1, o && (i = 2 & t[0] ? o.return : t[0] ? o.throw || ((i = o.return) && i.call(o), 0) : o.next) && !(i = i.call(o, t[1])).done) return i;
                                    switch (o = 0, i && (t = [2 & t[0], i.value]), t[0]) {
                                        case 0:
                                        case 1:
                                            i = t;
                                            break;
                                        case 4:
                                            return s.label++, {
                                                value: t[1],
                                                done: !1
                                            };
                                        case 5:
                                            s.label++, o = t[1], t = [0];
                                            continue;
                                        case 7:
                                            t = s.ops.pop(), s.trys.pop();
                                            continue;
                                        default:
                                            if (!(i = 0 < (i = s.trys).length && i[i.length - 1]) && (6 === t[0] || 2 === t[0])) {
                                                s = 0;
                                                continue
                                            }
                                            if (3 === t[0] && (!i || t[1] > i[0] && t[1] < i[3])) {
                                                s.label = t[1];
                                                break
                                            }
                                            if (6 === t[0] && s.label < i[1]) {
                                                s.label = i[1], i = t;
                                                break
                                            }
                                            if (i && s.label < i[2]) {
                                                s.label = i[2], s.ops.push(t);
                                                break
                                            }
                                            i[2] && s.ops.pop(), s.trys.pop();
                                            continue
                                    }
                                    t = r.call(n, s)
                                } catch (e) {
                                    t = [6, e], o = 0
                                } finally {
                                    a = i = 0
                                }
                                if (5 & t[0]) throw t[1];
                                return {
                                    value: t[0] ? t[1] : void 0,
                                    done: !0
                                }
                            }([t, e])
                        }
                    }
                };

            function Rn(a) {
                return {
                    v2SupportedLanguagesGamesGameIdGet: function(t, r) {
                        return Sn(this, void 0, Promise, function() {
                            var n;
                            return Un(this, function(e) {
                                switch (e.label) {
                                    case 0:
                                        return [4, function(u) {
                                            var e = this;
                                            return {
                                                v2SupportedLanguagesGamesGameIdGet: function(i, s) {
                                                    return void 0 === s && (s = {}), Sn(e, void 0, Promise, function() {
                                                        var t, n, r, a, o;
                                                        return Un(this, function(e) {
                                                            if (null == i) throw new Tn("gameId", "Required parameter gameId was null or undefined when calling v2SupportedLanguagesGamesGameIdGet.");
                                                            return a = "/v2/supported-languages/games/{gameId}".replace("{gameId}", encodeURIComponent(String(i))), t = T.Qc(a, !0), u && (o = u.baseOptions), n = qn(qn({
                                                                method: "GET"
                                                            }, o), s), r = {}, a = {}, t.query = qn(qn(qn({}, t.query), a), s.query), delete t.search, o = o && o.headers ? o.headers : {}, n.headers = qn(qn(qn({}, r), o), s.headers), [2, {
                                                                url: T.WU(t),
                                                                options: n
                                                            }]
                                                        })
                                                    })
                                                }
                                            }
                                        }(a).v2SupportedLanguagesGamesGameIdGet(t, r)];
                                    case 1:
                                        return n = e.sent(), [2, function(e, t) {
                                            void 0 === e && (e = q), void 0 === t && (t = Cn);
                                            t = qn(qn({}, n.options), {
                                                url: t + n.url
                                            });
                                            return e.request(t)
                                        }]
                                }
                            })
                        })
                    }
                }
            }(Br = {}).EnUs = "en_us", Br.EsEs = "es_es", Br.FrFr = "fr_fr", Br.IdId = "id_id", Br.ItIt = "it_it", Br.JaJp = "ja_jp", Br.KoKr = "ko_kr", Br.RuRu = "ru_ru", Br.ThTh = "th_th", Br.TrTr = "tr_tr", Br.ViVn = "vi_vn", Br.PtBr = "pt_br", Br.DeDe = "de_de", Br.ZhCn = "zh_cn", Br.ZhTw = "zh_tw", Br.BgBg = "bg_bg", Br.BnBd = "bn_bd", Br.CsCz = "cs_cz", Br.DaDk = "da_dk", Br.ElGr = "el_gr", Br.EtEe = "et_ee", Br.FiFi = "fi_fi", Br.HiIn = "hi_in", Br.HrHr = "hr_hr", Br.HuHu = "hu_hu", Br.KaGe = "ka_ge", Br.KkKz = "kk_kz", Br.KmKh = "km_kh", Br.LtLt = "lt_lt", Br.LvLv = "lv_lv", Br.MsMy = "ms_my", Br.MyMm = "my_mm", Br.NbNo = "nb_no", Br.NlNl = "nl_nl", Br.FilPh = "fil_ph", Br.PlPl = "pl_pl", Br.RoRo = "ro_ro", Br.UkUa = "uk_ua", Br.SiLk = "si_lk", Br.SkSk = "sk_sk", Br.SlSl = "sl_sl", Br.SqAl = "sq_al", Br.BsBa = "bs_ba", Br.SrRs = "sr_rs", Br.SvSe = "sv_se", Br.ZhCjv = "zh_cjv";
            var On, Dn = (Ue(xn, On = X), xn.prototype.v2SupportedLanguagesGamesGameIdGet = function(e, t) {
                var n = this;
                return Rn(this.configuration).v2SupportedLanguagesGamesGameIdGet(e, t).then(function(e) {
                    return e(n.axios, n.basePath)
                })
            }, xn);

            function xn() {
                return null !== On && On.apply(this, arguments) || this
            }
            var En, Bn, Fn = new W,
                zn = new Dn,
                jn = new y,
                Nn = {
                    getGameLanguageRolloutSettings: function() {
                        return Fn.v1SupportedLanguagesMetadataGet({
                            withCredentials: !0
                        })
                    },
                    getGameLanguages: function(e) {
                        return Fn.v1SupportedLanguagesGamesGameIdGet(e, {
                            withCredentials: !0
                        })
                    },
                    getGameLanguagesV2: function(e) {
                        return zn.v2SupportedLanguagesGamesGameIdGet(e, {
                            withCredentials: !0
                        })
                    },
                    addLanguages: function(e, t) {
                        t = t.map(function(e) {
                            return {
                                languageCodeType: Be.Language,
                                languageCode: e
                            }
                        });
                        return Fn.v1SupportedLanguagesGamesGameIdPatch(e, t, {
                            withCredentials: !0
                        })
                    },
                    deleteLanguages: function(e, t) {
                        t = t.map(function(e) {
                            return {
                                languageCodeType: Be.Language,
                                languageCode: e,
                                delete: !0
                            }
                        });
                        return Fn.v1SupportedLanguagesGamesGameIdPatch(e, t, {
                            withCredentials: !0
                        })
                    },
                    getAvailableLanguages: function() {
                        return jn.v1LocalizationtableAvailableLanguagesGet()
                    },
                    getAutomaticTranslationStatus: function(e) {
                        return Fn.v1SupportedLanguagesGamesGameIdAutomaticTranslationStatusGet(e, {
                            withCredentials: !0
                        })
                    },
                    setAutomaticTranslationStatus: function(e, t, n) {
                        return Fn.v1SupportedLanguagesGamesGameIdLanguagesLanguageCodeAutomaticTranslationStatusPatch(e, n, t, {
                            withCredentials: !0
                        })
                    },
                    getAutomaticTranslationSwitchesValues: function(e) {
                        return Fn.v1SupportedLanguagesGamesGameIdUniverseDisplayInfoAutomaticTranslationSettingsGet(e, {
                            withCredentials: !0
                        })
                    },
                    setAutomaticTranslationSwitchesValue: function(e, t, n) {
                        return Fn.v1SupportedLanguagesGamesGameIdLanguagesLanguageCodeUniverseDisplayInfoAutomaticTranslationSettingsPatch(e, n, t, {
                            withCredentials: !0
                        })
                    }
                },
                kn = new B,
                Ge = {
                    getSourceLanguage: function(e) {
                        return kn.v1SourceLanguageGamesGameIdGet(e, {
                            withCredentials: !0
                        })
                    },
                    updateSourceLanguage: function(e, t) {
                        return kn.v1SourceLanguageGamesGameIdPatch(e, t, {
                            withCredentials: !0
                        })
                    }
                },
                oe = (En = function(e, t) {
                    return (En = Object.setPrototypeOf || {
                            __proto__: []
                        }
                        instanceof Array && function(e, t) {
                            e.__proto__ = t
                        } || function(e, t) {
                            for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n])
                        })(e, t)
                }, function(e, t) {
                    if ("function" != typeof t && null !== t) throw new TypeError("Class extends value " + String(t) + " is not a constructor or null");

                    function n() {
                        this.constructor = e
                    }
                    En(e, t), e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n)
                }),
                _n = l.EnvironmentUrls.thumbnailsApi.replace(/\/+$/, ""),
                Wn = ",",
                Me = function(e, t, n) {
                    void 0 === t && (t = _n), void 0 === n && (n = q), this.basePath = t, this.axios = n, e && (this.configuration = e, this.basePath = e.basePath || this.basePath)
                },
                Mn = (Bn = Error, oe(Qn, Bn), Qn);

            function Qn(e, t) {
                t = Bn.call(this, t) || this;
                return t.field = e, t.name = "RequiredError", t
            }

            function Hn(e, t, n) {
                if (null == n) throw new Mn(t, "Required parameter " + t + " was null or undefined when calling " + e + ".")
            }

            function Vn(e) {
                for (var t = [], n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
                for (var r = new URLSearchParams(e.search), a = 0, o = t; a < o.length; a++) {
                    var i, s = o[a];
                    for (i in s) r.set(i, s[i])
                }
                e.search = r.toString()
            }

            function Jn(e) {
                return e.pathname + e.search + e.hash
            }

            function Kn(n, r, a, o) {
                return function(e, t) {
                    void 0 === e && (e = r), void 0 === t && (t = a);
                    t = $n($n({}, n.options), {
                        url: ((null == o ? void 0 : o.basePath) || t) + n.url
                    });
                    return e.request(t)
                }
            }
            var Xn, $n = function() {
                    return ($n = Object.assign || function(e) {
                        for (var t, n = 1, r = arguments.length; n < r; n++)
                            for (var a in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
                        return e
                    }).apply(this, arguments)
                },
                Yn = "https://example.com",
                u = (Xn = function(e, t) {
                    return (Xn = Object.setPrototypeOf || {
                            __proto__: []
                        }
                        instanceof Array && function(e, t) {
                            e.__proto__ = t
                        } || function(e, t) {
                            for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n])
                        })(e, t)
                }, function(e, t) {
                    if ("function" != typeof t && null !== t) throw new TypeError("Class extends value " + String(t) + " is not a constructor or null");

                    function n() {
                        this.constructor = e
                    }
                    Xn(e, t), e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n)
                }),
                Zn = function() {
                    return (Zn = Object.assign || function(e) {
                        for (var t, n = 1, r = arguments.length; n < r; n++)
                            for (var a in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
                        return e
                    }).apply(this, arguments)
                },
                er = function(e, i, s, u) {
                    return new(s = s || Promise)(function(n, t) {
                        function r(e) {
                            try {
                                o(u.next(e))
                            } catch (e) {
                                t(e)
                            }
                        }

                        function a(e) {
                            try {
                                o(u.throw(e))
                            } catch (e) {
                                t(e)
                            }
                        }

                        function o(e) {
                            var t;
                            e.done ? n(e.value) : ((t = e.value) instanceof s ? t : new s(function(e) {
                                e(t)
                            })).then(r, a)
                        }
                        o((u = u.apply(e, i || [])).next())
                    })
                },
                tr = function(n, r) {
                    var a, o, i, s = {
                            label: 0,
                            sent: function() {
                                if (1 & i[0]) throw i[1];
                                return i[1]
                            },
                            trys: [],
                            ops: []
                        },
                        e = {
                            next: t(0),
                            throw: t(1),
                            return: t(2)
                        };
                    return "function" == typeof Symbol && (e[Symbol.iterator] = function() {
                        return this
                    }), e;

                    function t(t) {
                        return function(e) {
                            return function(t) {
                                if (a) throw new TypeError("Generator is already executing.");
                                for (; s;) try {
                                    if (a = 1, o && (i = 2 & t[0] ? o.return : t[0] ? o.throw || ((i = o.return) && i.call(o), 0) : o.next) && !(i = i.call(o, t[1])).done) return i;
                                    switch (o = 0, i && (t = [2 & t[0], i.value]), t[0]) {
                                        case 0:
                                        case 1:
                                            i = t;
                                            break;
                                        case 4:
                                            return s.label++, {
                                                value: t[1],
                                                done: !1
                                            };
                                        case 5:
                                            s.label++, o = t[1], t = [0];
                                            continue;
                                        case 7:
                                            t = s.ops.pop(), s.trys.pop();
                                            continue;
                                        default:
                                            if (!(i = 0 < (i = s.trys).length && i[i.length - 1]) && (6 === t[0] || 2 === t[0])) {
                                                s = 0;
                                                continue
                                            }
                                            if (3 === t[0] && (!i || t[1] > i[0] && t[1] < i[3])) {
                                                s.label = t[1];
                                                break
                                            }
                                            if (6 === t[0] && s.label < i[1]) {
                                                s.label = i[1], i = t;
                                                break
                                            }
                                            if (i && s.label < i[2]) {
                                                s.label = i[2], s.ops.push(t);
                                                break
                                            }
                                            i[2] && s.ops.pop(), s.trys.pop();
                                            continue
                                    }
                                    t = r.call(n, s)
                                } catch (e) {
                                    t = [6, e], o = 0
                                } finally {
                                    a = i = 0
                                }
                                if (5 & t[0]) throw t[1];
                                return {
                                    value: t[0] ? t[1] : void 0,
                                    done: !0
                                }
                            }([t, e])
                        }
                    }
                };

            function nr(u) {
                var c = function(h) {
                    var e = this;
                    return {
                        v1AssetsGet: function(i, s, u, c, l, d) {
                            return void 0 === d && (d = {}), er(e, void 0, Promise, function() {
                                var t, n, r, a, o;
                                return tr(this, function(e) {
                                    return Hn("v1AssetsGet", "assetIds", i), t = new URL("/v1/assets", Yn), h && (o = h.baseOptions), n = Zn(Zn({
                                        method: "GET"
                                    }, o), d), r = {}, a = {}, i && (a.assetIds = i.join(Wn)), void 0 !== s && (a.returnPolicy = s), void 0 !== u && (a.size = u), void 0 !== c && (a.format = c), void 0 !== l && (a.isCircular = l), Vn(t, a, d.query), o = o && o.headers ? o.headers : {}, n.headers = Zn(Zn(Zn({}, r), o), d.headers), [2, {
                                        url: Jn(t),
                                        options: n
                                    }]
                                })
                            })
                        },
                        v1AssetsThumbnail3dGet: function(i, s) {
                            return void 0 === s && (s = {}), er(e, void 0, Promise, function() {
                                var t, n, r, a, o;
                                return tr(this, function(e) {
                                    return Hn("v1AssetsThumbnail3dGet", "assetId", i), t = new URL("/v1/assets-thumbnail-3d", Yn), h && (o = h.baseOptions), n = Zn(Zn({
                                        method: "GET"
                                    }, o), s), r = {}, a = {}, void 0 !== i && (a.assetId = i), Vn(t, a, s.query), o = o && o.headers ? o.headers : {}, n.headers = Zn(Zn(Zn({}, r), o), s.headers), [2, {
                                        url: Jn(t),
                                        options: n
                                    }]
                                })
                            })
                        }
                    }
                }(u);
                return {
                    v1AssetsGet: function(n, r, a, o, i, s) {
                        return er(this, void 0, Promise, function() {
                            var t;
                            return tr(this, function(e) {
                                switch (e.label) {
                                    case 0:
                                        return [4, c.v1AssetsGet(n, r, a, o, i, s)];
                                    case 1:
                                        return t = e.sent(), [2, Kn(t, d(), _n, u)]
                                }
                            })
                        })
                    },
                    v1AssetsThumbnail3dGet: function(n, r) {
                        return er(this, void 0, Promise, function() {
                            var t;
                            return tr(this, function(e) {
                                switch (e.label) {
                                    case 0:
                                        return [4, c.v1AssetsThumbnail3dGet(n, r)];
                                    case 1:
                                        return t = e.sent(), [2, Kn(t, d(), _n, u)]
                                }
                            })
                        })
                    }
                }
            }(Ye = {}).Avatar = "Avatar", Ye.AvatarHeadShot = "AvatarHeadShot", Ye.GameIcon = "GameIcon", Ye.BadgeIcon = "BadgeIcon", Ye.GameThumbnail = "GameThumbnail", Ye.GamePass = "GamePass", Ye.Asset = "Asset", Ye.BundleThumbnail = "BundleThumbnail", Ye.Outfit = "Outfit", Ye.GroupIcon = "GroupIcon", Ye.DeveloperProduct = "DeveloperProduct", Ye.AvatarBust = "AvatarBust", Ye.AutoGeneratedAsset = "AutoGeneratedAsset", (Oe = {}).Error = "Error", Oe.Completed = "Completed", Oe.InReview = "InReview", Oe.Pending = "Pending", Oe.Blocked = "Blocked", (Br = {}).Error = "Error", Br.Completed = "Completed", Br.InReview = "InReview", Br.Pending = "Pending", Br.Blocked = "Blocked";
            var rr, Ue = (u(ar, rr = Me), ar.prototype.v1AssetsGet = function(e, t, n, r, a, o) {
                var i = this;
                return nr(this.configuration).v1AssetsGet(e, t, n, r, a, o).then(function(e) {
                    return e(i.axios, i.basePath)
                })
            }, ar.prototype.v1AssetsThumbnail3dGet = function(e, t) {
                var n = this;
                return nr(this.configuration).v1AssetsThumbnail3dGet(e, t).then(function(e) {
                    return e(n.axios, n.basePath)
                })
            }, ar);

            function ar() {
                return null !== rr && rr.apply(this, arguments) || this
            }

            function or(s) {
                var u = function(d) {
                    var e = this;
                    return {
                        v1UsersAvatar3dGet: function(i, s) {
                            return void 0 === s && (s = {}), er(e, void 0, Promise, function() {
                                var t, n, r, a, o;
                                return tr(this, function(e) {
                                    return Hn("v1UsersAvatar3dGet", "userId", i), t = new URL("/v1/users/avatar-3d", Yn), d && (o = d.baseOptions), n = Zn(Zn({
                                        method: "GET"
                                    }, o), s), r = {}, a = {}, void 0 !== i && (a.userId = i), Vn(t, a, s.query), o = o && o.headers ? o.headers : {}, n.headers = Zn(Zn(Zn({}, r), o), s.headers), [2, {
                                        url: Jn(t),
                                        options: n
                                    }]
                                })
                            })
                        },
                        v1UsersAvatarBustGet: function(i, s, u, c, l) {
                            return void 0 === l && (l = {}), er(e, void 0, Promise, function() {
                                var t, n, r, a, o;
                                return tr(this, function(e) {
                                    return Hn("v1UsersAvatarBustGet", "userIds", i), t = new URL("/v1/users/avatar-bust", Yn), d && (o = d.baseOptions), n = Zn(Zn({
                                        method: "GET"
                                    }, o), l), r = {}, a = {}, i && (a.userIds = i.join(Wn)), void 0 !== s && (a.size = s), void 0 !== u && (a.format = u), void 0 !== c && (a.isCircular = c), Vn(t, a, l.query), o = o && o.headers ? o.headers : {}, n.headers = Zn(Zn(Zn({}, r), o), l.headers), [2, {
                                        url: Jn(t),
                                        options: n
                                    }]
                                })
                            })
                        },
                        v1UsersAvatarGet: function(i, s, u, c, l) {
                            return void 0 === l && (l = {}), er(e, void 0, Promise, function() {
                                var t, n, r, a, o;
                                return tr(this, function(e) {
                                    return Hn("v1UsersAvatarGet", "userIds", i), t = new URL("/v1/users/avatar", Yn), d && (o = d.baseOptions), n = Zn(Zn({
                                        method: "GET"
                                    }, o), l), r = {}, a = {}, i && (a.userIds = i.join(Wn)), void 0 !== s && (a.size = s), void 0 !== u && (a.format = u), void 0 !== c && (a.isCircular = c), Vn(t, a, l.query), o = o && o.headers ? o.headers : {}, n.headers = Zn(Zn(Zn({}, r), o), l.headers), [2, {
                                        url: Jn(t),
                                        options: n
                                    }]
                                })
                            })
                        },
                        v1UsersAvatarHeadshotGet: function(i, s, u, c, l) {
                            return void 0 === l && (l = {}), er(e, void 0, Promise, function() {
                                var t, n, r, a, o;
                                return tr(this, function(e) {
                                    return Hn("v1UsersAvatarHeadshotGet", "userIds", i), t = new URL("/v1/users/avatar-headshot", Yn), d && (o = d.baseOptions), n = Zn(Zn({
                                        method: "GET"
                                    }, o), l), r = {}, a = {}, i && (a.userIds = i.join(Wn)), void 0 !== s && (a.size = s), void 0 !== u && (a.format = u), void 0 !== c && (a.isCircular = c), Vn(t, a, l.query), o = o && o.headers ? o.headers : {}, n.headers = Zn(Zn(Zn({}, r), o), l.headers), [2, {
                                        url: Jn(t),
                                        options: n
                                    }]
                                })
                            })
                        }
                    }
                }(s);
                return {
                    v1UsersAvatar3dGet: function(n, r) {
                        return er(this, void 0, Promise, function() {
                            var t;
                            return tr(this, function(e) {
                                switch (e.label) {
                                    case 0:
                                        return [4, u.v1UsersAvatar3dGet(n, r)];
                                    case 1:
                                        return t = e.sent(), [2, Kn(t, d(), _n, s)]
                                }
                            })
                        })
                    },
                    v1UsersAvatarBustGet: function(n, r, a, o, i) {
                        return er(this, void 0, Promise, function() {
                            var t;
                            return tr(this, function(e) {
                                switch (e.label) {
                                    case 0:
                                        return [4, u.v1UsersAvatarBustGet(n, r, a, o, i)];
                                    case 1:
                                        return t = e.sent(), [2, Kn(t, d(), _n, s)]
                                }
                            })
                        })
                    },
                    v1UsersAvatarGet: function(n, r, a, o, i) {
                        return er(this, void 0, Promise, function() {
                            var t;
                            return tr(this, function(e) {
                                switch (e.label) {
                                    case 0:
                                        return [4, u.v1UsersAvatarGet(n, r, a, o, i)];
                                    case 1:
                                        return t = e.sent(), [2, Kn(t, d(), _n, s)]
                                }
                            })
                        })
                    },
                    v1UsersAvatarHeadshotGet: function(n, r, a, o, i) {
                        return er(this, void 0, Promise, function() {
                            var t;
                            return tr(this, function(e) {
                                switch (e.label) {
                                    case 0:
                                        return [4, u.v1UsersAvatarHeadshotGet(n, r, a, o, i)];
                                    case 1:
                                        return t = e.sent(), [2, Kn(t, d(), _n, s)]
                                }
                            })
                        })
                    }
                }
            }
            var ir, X = (u(sr, ir = Me), sr.prototype.v1UsersAvatar3dGet = function(e, t) {
                var n = this;
                return or(this.configuration).v1UsersAvatar3dGet(e, t).then(function(e) {
                    return e(n.axios, n.basePath)
                })
            }, sr.prototype.v1UsersAvatarBustGet = function(e, t, n, r, a) {
                var o = this;
                return or(this.configuration).v1UsersAvatarBustGet(e, t, n, r, a).then(function(e) {
                    return e(o.axios, o.basePath)
                })
            }, sr.prototype.v1UsersAvatarGet = function(e, t, n, r, a) {
                var o = this;
                return or(this.configuration).v1UsersAvatarGet(e, t, n, r, a).then(function(e) {
                    return e(o.axios, o.basePath)
                })
            }, sr.prototype.v1UsersAvatarHeadshotGet = function(e, t, n, r, a) {
                var o = this;
                return or(this.configuration).v1UsersAvatarHeadshotGet(e, t, n, r, a).then(function(e) {
                    return e(o.axios, o.basePath)
                })
            }, sr);

            function sr() {
                return null !== ir && ir.apply(this, arguments) || this
            }

            function ur(s) {
                var u = function(d) {
                    var e = this;
                    return {
                        v1BadgesIconsGet: function(i, s, u, c, l) {
                            return void 0 === l && (l = {}), er(e, void 0, Promise, function() {
                                var t, n, r, a, o;
                                return tr(this, function(e) {
                                    return Hn("v1BadgesIconsGet", "badgeIds", i), t = new URL("/v1/badges/icons", Yn), d && (o = d.baseOptions), n = Zn(Zn({
                                        method: "GET"
                                    }, o), l), r = {}, a = {}, i && (a.badgeIds = i.join(Wn)), void 0 !== s && (a.size = s), void 0 !== u && (a.format = u), void 0 !== c && (a.isCircular = c), Vn(t, a, l.query), o = o && o.headers ? o.headers : {}, n.headers = Zn(Zn(Zn({}, r), o), l.headers), [2, {
                                        url: Jn(t),
                                        options: n
                                    }]
                                })
                            })
                        }
                    }
                }(s);
                return {
                    v1BadgesIconsGet: function(n, r, a, o, i) {
                        return er(this, void 0, Promise, function() {
                            var t;
                            return tr(this, function(e) {
                                switch (e.label) {
                                    case 0:
                                        return [4, u.v1BadgesIconsGet(n, r, a, o, i)];
                                    case 1:
                                        return t = e.sent(), [2, Kn(t, d(), _n, s)]
                                }
                            })
                        })
                    }
                }
            }
            var cr, W = (u(lr, cr = Me), lr.prototype.v1BadgesIconsGet = function(e, t, n, r, a) {
                var o = this;
                return ur(this.configuration).v1BadgesIconsGet(e, t, n, r, a).then(function(e) {
                    return e(o.axios, o.basePath)
                })
            }, lr);

            function lr() {
                return null !== cr && cr.apply(this, arguments) || this
            }

            function dr(h) {
                var e = this;
                return {
                    v1BatchPost: function(l, d) {
                        return void 0 === d && (d = {}), er(e, void 0, Promise, function() {
                            var o, i, s, u, c;
                            return tr(this, function(e) {
                                var t, n, r, a;
                                return Hn("v1BatchPost", "requests", l), o = new URL("/v1/batch", Yn), h && (c = h.baseOptions), i = Zn(Zn({
                                    method: "POST"
                                }, c), d), u = {}, (s = {})["Content-Type"] = "application/json", Vn(o, u, d.query), c = c && c.headers ? c.headers : {}, i.headers = Zn(Zn(Zn({}, s), c), d.headers), i.data = (n = i, r = h, ((a = "string" != typeof(t = l)) && r && r.isJsonMime ? r.isJsonMime(n.headers["Content-Type"]) : a) ? JSON.stringify(void 0 !== t ? t : {}) : t || ""), [2, {
                                    url: Jn(o),
                                    options: i
                                }]
                            })
                        })
                    }
                }
            }

            function hr(a) {
                var o = dr(a);
                return {
                    v1BatchPost: function(n, r) {
                        return er(this, void 0, Promise, function() {
                            var t;
                            return tr(this, function(e) {
                                switch (e.label) {
                                    case 0:
                                        return [4, o.v1BatchPost(n, r)];
                                    case 1:
                                        return t = e.sent(), [2, Kn(t, d(), _n, a)]
                                }
                            })
                        })
                    }
                }
            }
            var vr, Dn = (u(pr, vr = Me), pr.prototype.v1BatchPost = function(e, t) {
                var n = this;
                return hr(this.configuration).v1BatchPost(e, t).then(function(e) {
                    return e(n.axios, n.basePath)
                })
            }, pr);

            function pr() {
                return null !== vr && vr.apply(this, arguments) || this
            }

            function fr(s) {
                var u = function(d) {
                    var e = this;
                    return {
                        v1BundlesThumbnailsGet: function(i, s, u, c, l) {
                            return void 0 === l && (l = {}), er(e, void 0, Promise, function() {
                                var t, n, r, a, o;
                                return tr(this, function(e) {
                                    return Hn("v1BundlesThumbnailsGet", "bundleIds", i), t = new URL("/v1/bundles/thumbnails", Yn), d && (o = d.baseOptions), n = Zn(Zn({
                                        method: "GET"
                                    }, o), l), r = {}, a = {}, i && (a.bundleIds = i.join(Wn)), void 0 !== s && (a.size = s), void 0 !== u && (a.format = u), void 0 !== c && (a.isCircular = c), Vn(t, a, l.query), o = o && o.headers ? o.headers : {}, n.headers = Zn(Zn(Zn({}, r), o), l.headers), [2, {
                                        url: Jn(t),
                                        options: n
                                    }]
                                })
                            })
                        }
                    }
                }(s);
                return {
                    v1BundlesThumbnailsGet: function(n, r, a, o, i) {
                        return er(this, void 0, Promise, function() {
                            var t;
                            return tr(this, function(e) {
                                switch (e.label) {
                                    case 0:
                                        return [4, u.v1BundlesThumbnailsGet(n, r, a, o, i)];
                                    case 1:
                                        return t = e.sent(), [2, Kn(t, d(), _n, s)]
                                }
                            })
                        })
                    }
                }
            }
            var mr, y = (u(gr, mr = Me), gr.prototype.v1BundlesThumbnailsGet = function(e, t, n, r, a) {
                var o = this;
                return fr(this.configuration).v1BundlesThumbnailsGet(e, t, n, r, a).then(function(e) {
                    return e(o.axios, o.basePath)
                })
            }, gr);

            function gr() {
                return null !== mr && mr.apply(this, arguments) || this
            }

            function yr(s) {
                var u = function(d) {
                    var e = this;
                    return {
                        v1DeveloperProductsIconsGet: function(i, s, u, c, l) {
                            return void 0 === l && (l = {}), er(e, void 0, Promise, function() {
                                var t, n, r, a, o;
                                return tr(this, function(e) {
                                    return Hn("v1DeveloperProductsIconsGet", "developerProductIds", i), t = new URL("/v1/developer-products/icons", Yn), d && (o = d.baseOptions), n = Zn(Zn({
                                        method: "GET"
                                    }, o), l), r = {}, a = {}, i && (a.developerProductIds = i.join(Wn)), void 0 !== s && (a.size = s), void 0 !== u && (a.format = u), void 0 !== c && (a.isCircular = c), Vn(t, a, l.query), o = o && o.headers ? o.headers : {}, n.headers = Zn(Zn(Zn({}, r), o), l.headers), [2, {
                                        url: Jn(t),
                                        options: n
                                    }]
                                })
                            })
                        }
                    }
                }(s);
                return {
                    v1DeveloperProductsIconsGet: function(n, r, a, o, i) {
                        return er(this, void 0, Promise, function() {
                            var t;
                            return tr(this, function(e) {
                                switch (e.label) {
                                    case 0:
                                        return [4, u.v1DeveloperProductsIconsGet(n, r, a, o, i)];
                                    case 1:
                                        return t = e.sent(), [2, Kn(t, d(), _n, s)]
                                }
                            })
                        })
                    }
                }
            }
            var Gr, B = (u(Ir, Gr = Me), Ir.prototype.v1DeveloperProductsIconsGet = function(e, t, n, r, a) {
                var o = this;
                return yr(this.configuration).v1DeveloperProductsIconsGet(e, t, n, r, a).then(function(e) {
                    return e(o.axios, o.basePath)
                })
            }, Ir);

            function Ir() {
                return null !== Gr && Gr.apply(this, arguments) || this
            }

            function br(s) {
                var u = function(d) {
                    var e = this;
                    return {
                        v1GamePassesGet: function(i, s, u, c, l) {
                            return void 0 === l && (l = {}), er(e, void 0, Promise, function() {
                                var t, n, r, a, o;
                                return tr(this, function(e) {
                                    return Hn("v1GamePassesGet", "gamePassIds", i), t = new URL("/v1/game-passes", Yn), d && (o = d.baseOptions), n = Zn(Zn({
                                        method: "GET"
                                    }, o), l), r = {}, a = {}, i && (a.gamePassIds = i.join(Wn)), void 0 !== s && (a.size = s), void 0 !== u && (a.format = u), void 0 !== c && (a.isCircular = c), Vn(t, a, l.query), o = o && o.headers ? o.headers : {}, n.headers = Zn(Zn(Zn({}, r), o), l.headers), [2, {
                                        url: Jn(t),
                                        options: n
                                    }]
                                })
                            })
                        }
                    }
                }(s);
                return {
                    v1GamePassesGet: function(n, r, a, o, i) {
                        return er(this, void 0, Promise, function() {
                            var t;
                            return tr(this, function(e) {
                                switch (e.label) {
                                    case 0:
                                        return [4, u.v1GamePassesGet(n, r, a, o, i)];
                                    case 1:
                                        return t = e.sent(), [2, Kn(t, d(), _n, s)]
                                }
                            })
                        })
                    }
                }
            }
            var Pr, oe = (u(wr, Pr = Me), wr.prototype.v1GamePassesGet = function(e, t, n, r, a) {
                var o = this;
                return br(this.configuration).v1GamePassesGet(e, t, n, r, a).then(function(e) {
                    return e(o.axios, o.basePath)
                })
            }, wr);

            function wr() {
                return null !== Pr && Pr.apply(this, arguments) || this
            }

            function Cr(c) {
                var l = function(v) {
                    var e = this;
                    return {
                        v1GamesIconsGet: function(i, s, u, c, l, d) {
                            return void 0 === d && (d = {}), er(e, void 0, Promise, function() {
                                var t, n, r, a, o;
                                return tr(this, function(e) {
                                    return Hn("v1GamesIconsGet", "universeIds", i), t = new URL("/v1/games/icons", Yn), v && (o = v.baseOptions), n = Zn(Zn({
                                        method: "GET"
                                    }, o), d), r = {}, a = {}, i && (a.universeIds = i.join(Wn)), void 0 !== s && (a.returnPolicy = s), void 0 !== u && (a.size = u), void 0 !== c && (a.format = c), void 0 !== l && (a.isCircular = l), Vn(t, a, d.query), o = o && o.headers ? o.headers : {}, n.headers = Zn(Zn(Zn({}, r), o), d.headers), [2, {
                                        url: Jn(t),
                                        options: n
                                    }]
                                })
                            })
                        },
                        v1GamesMultigetThumbnailsGet: function(i, s, u, c, l, d, h) {
                            return void 0 === h && (h = {}), er(e, void 0, Promise, function() {
                                var t, n, r, a, o;
                                return tr(this, function(e) {
                                    return Hn("v1GamesMultigetThumbnailsGet", "universeIds", i), t = new URL("/v1/games/multiget/thumbnails", Yn), v && (o = v.baseOptions), n = Zn(Zn({
                                        method: "GET"
                                    }, o), h), r = {}, a = {}, i && (a.universeIds = i.join(Wn)), void 0 !== s && (a.countPerUniverse = s), void 0 !== u && (a.defaults = u), void 0 !== c && (a.size = c), void 0 !== l && (a.format = l), void 0 !== d && (a.isCircular = d), Vn(t, a, h.query), o = o && o.headers ? o.headers : {}, n.headers = Zn(Zn(Zn({}, r), o), h.headers), [2, {
                                        url: Jn(t),
                                        options: n
                                    }]
                                })
                            })
                        },
                        v1GamesUniverseIdThumbnailsGet: function(i, s, u, c, l, d) {
                            return void 0 === d && (d = {}), er(e, void 0, Promise, function() {
                                var t, n, r, a, o;
                                return tr(this, function(e) {
                                    return Hn("v1GamesUniverseIdThumbnailsGet", "universeId", i), Hn("v1GamesUniverseIdThumbnailsGet", "thumbnailIds", s), a = "/v1/games/{universeId}/thumbnails".replace("{universeId}", encodeURIComponent(String(i))), t = new URL(a, Yn), v && (o = v.baseOptions), n = Zn(Zn({
                                        method: "GET"
                                    }, o), d), r = {}, a = {}, s && (a.thumbnailIds = s.join(Wn)), void 0 !== u && (a.size = u), void 0 !== c && (a.format = c), void 0 !== l && (a.isCircular = l), Vn(t, a, d.query), o = o && o.headers ? o.headers : {}, n.headers = Zn(Zn(Zn({}, r), o), d.headers), [2, {
                                        url: Jn(t),
                                        options: n
                                    }]
                                })
                            })
                        }
                    }
                }(c);
                return {
                    v1GamesIconsGet: function(n, r, a, o, i, s) {
                        return er(this, void 0, Promise, function() {
                            var t;
                            return tr(this, function(e) {
                                switch (e.label) {
                                    case 0:
                                        return [4, l.v1GamesIconsGet(n, r, a, o, i, s)];
                                    case 1:
                                        return t = e.sent(), [2, Kn(t, d(), _n, c)]
                                }
                            })
                        })
                    },
                    v1GamesMultigetThumbnailsGet: function(n, r, a, o, i, s, u) {
                        return er(this, void 0, Promise, function() {
                            var t;
                            return tr(this, function(e) {
                                switch (e.label) {
                                    case 0:
                                        return [4, l.v1GamesMultigetThumbnailsGet(n, r, a, o, i, s, u)];
                                    case 1:
                                        return t = e.sent(), [2, Kn(t, d(), _n, c)]
                                }
                            })
                        })
                    },
                    v1GamesUniverseIdThumbnailsGet: function(n, r, a, o, i, s) {
                        return er(this, void 0, Promise, function() {
                            var t;
                            return tr(this, function(e) {
                                switch (e.label) {
                                    case 0:
                                        return [4, l.v1GamesUniverseIdThumbnailsGet(n, r, a, o, i, s)];
                                    case 1:
                                        return t = e.sent(), [2, Kn(t, d(), _n, c)]
                                }
                            })
                        })
                    }
                }
            }
            var Tr, Ye = (u(Ar, Tr = Me), Ar.prototype.v1GamesIconsGet = function(e, t, n, r, a, o) {
                var i = this;
                return Cr(this.configuration).v1GamesIconsGet(e, t, n, r, a, o).then(function(e) {
                    return e(i.axios, i.basePath)
                })
            }, Ar.prototype.v1GamesMultigetThumbnailsGet = function(e, t, n, r, a, o, i) {
                var s = this;
                return Cr(this.configuration).v1GamesMultigetThumbnailsGet(e, t, n, r, a, o, i).then(function(e) {
                    return e(s.axios, s.basePath)
                })
            }, Ar.prototype.v1GamesUniverseIdThumbnailsGet = function(e, t, n, r, a, o) {
                var i = this;
                return Cr(this.configuration).v1GamesUniverseIdThumbnailsGet(e, t, n, r, a, o).then(function(e) {
                    return e(i.axios, i.basePath)
                })
            }, Ar);

            function Ar() {
                return null !== Tr && Tr.apply(this, arguments) || this
            }

            function Lr(s) {
                var u = function(d) {
                    var e = this;
                    return {
                        v1GroupsIconsGet: function(i, s, u, c, l) {
                            return void 0 === l && (l = {}), er(e, void 0, Promise, function() {
                                var t, n, r, a, o;
                                return tr(this, function(e) {
                                    return Hn("v1GroupsIconsGet", "groupIds", i), t = new URL("/v1/groups/icons", Yn), d && (o = d.baseOptions), n = Zn(Zn({
                                        method: "GET"
                                    }, o), l), r = {}, a = {}, i && (a.groupIds = i.join(Wn)), void 0 !== s && (a.size = s), void 0 !== u && (a.format = u), void 0 !== c && (a.isCircular = c), Vn(t, a, l.query), o = o && o.headers ? o.headers : {}, n.headers = Zn(Zn(Zn({}, r), o), l.headers), [2, {
                                        url: Jn(t),
                                        options: n
                                    }]
                                })
                            })
                        }
                    }
                }(s);
                return {
                    v1GroupsIconsGet: function(n, r, a, o, i) {
                        return er(this, void 0, Promise, function() {
                            var t;
                            return tr(this, function(e) {
                                switch (e.label) {
                                    case 0:
                                        return [4, u.v1GroupsIconsGet(n, r, a, o, i)];
                                    case 1:
                                        return t = e.sent(), [2, Kn(t, d(), _n, s)]
                                }
                            })
                        })
                    }
                }
            }
            var qr, Sr, Oe = (u(Ur, qr = Me), Ur.prototype.v1GroupsIconsGet = function(e, t, n, r, a) {
                var o = this;
                return Lr(this.configuration).v1GroupsIconsGet(e, t, n, r, a).then(function(e) {
                    return e(o.axios, o.basePath)
                })
            }, Ur);

            function Ur() {
                return null !== qr && qr.apply(this, arguments) || this
            }

            function Rr(r) {
                var a = function(i) {
                    var e = this;
                    return {
                        v1MetadataGet: function(o) {
                            return void 0 === o && (o = {}), er(e, void 0, Promise, function() {
                                var t, n, r, a;
                                return tr(this, function(e) {
                                    return t = new URL("/v1/metadata", Yn), i && (a = i.baseOptions), n = Zn(Zn({
                                        method: "GET"
                                    }, a), o), r = {}, Vn(t, {}, o.query), a = a && a.headers ? a.headers : {}, n.headers = Zn(Zn(Zn({}, r), a), o.headers), [2, {
                                        url: Jn(t),
                                        options: n
                                    }]
                                })
                            })
                        }
                    }
                }(r);
                return {
                    v1MetadataGet: function(n) {
                        return er(this, void 0, Promise, function() {
                            var t;
                            return tr(this, function(e) {
                                switch (e.label) {
                                    case 0:
                                        return [4, a.v1MetadataGet(n)];
                                    case 1:
                                        return t = e.sent(), [2, Kn(t, d(), _n, r)]
                                }
                            })
                        })
                    }
                }
            }

            function Or() {
                return null !== Sr && Sr.apply(this, arguments) || this
            }

            function Dr(s) {
                var u = function(d) {
                    var e = this;
                    return {
                        v1UsersOutfitsGet: function(i, s, u, c, l) {
                            return void 0 === l && (l = {}), er(e, void 0, Promise, function() {
                                var t, n, r, a, o;
                                return tr(this, function(e) {
                                    return Hn("v1UsersOutfitsGet", "userOutfitIds", i), t = new URL("/v1/users/outfits", Yn), d && (o = d.baseOptions), n = Zn(Zn({
                                        method: "GET"
                                    }, o), l), r = {}, a = {}, i && (a.userOutfitIds = i.join(Wn)), void 0 !== s && (a.size = s), void 0 !== u && (a.format = u), void 0 !== c && (a.isCircular = c), Vn(t, a, l.query), o = o && o.headers ? o.headers : {}, n.headers = Zn(Zn(Zn({}, r), o), l.headers), [2, {
                                        url: Jn(t),
                                        options: n
                                    }]
                                })
                            })
                        }
                    }
                }(s);
                return {
                    v1UsersOutfitsGet: function(n, r, a, o, i) {
                        return er(this, void 0, Promise, function() {
                            var t;
                            return tr(this, function(e) {
                                switch (e.label) {
                                    case 0:
                                        return [4, u.v1UsersOutfitsGet(n, r, a, o, i)];
                                    case 1:
                                        return t = e.sent(), [2, Kn(t, d(), _n, s)]
                                }
                            })
                        })
                    }
                }
            }
            u(Or, Sr = Me), Or.prototype.v1MetadataGet = function(e) {
                var t = this;
                return Rr(this.configuration).v1MetadataGet(e).then(function(e) {
                    return e(t.axios, t.basePath)
                })
            };
            var xr, Er, Br = (u(Fr, xr = Me), Fr.prototype.v1UsersOutfitsGet = function(e, t, n, r, a) {
                var o = this;
                return Dr(this.configuration).v1UsersOutfitsGet(e, t, n, r, a).then(function(e) {
                    return e(o.axios, o.basePath)
                })
            }, Fr);

            function Fr() {
                return null !== xr && xr.apply(this, arguments) || this
            }

            function zr(u) {
                var c = function(h) {
                    var e = this;
                    return {
                        v1PlacesGameiconsGet: function(i, s, u, c, l, d) {
                            return void 0 === d && (d = {}), er(e, void 0, Promise, function() {
                                var t, n, r, a, o;
                                return tr(this, function(e) {
                                    return Hn("v1PlacesGameiconsGet", "placeIds", i), t = new URL("/v1/places/gameicons", Yn), h && (o = h.baseOptions), n = Zn(Zn({
                                        method: "GET"
                                    }, o), d), r = {}, a = {}, i && (a.placeIds = i.join(Wn)), void 0 !== s && (a.returnPolicy = s), void 0 !== u && (a.size = u), void 0 !== c && (a.format = c), void 0 !== l && (a.isCircular = l), Vn(t, a, d.query), o = o && o.headers ? o.headers : {}, n.headers = Zn(Zn(Zn({}, r), o), d.headers), [2, {
                                        url: Jn(t),
                                        options: n
                                    }]
                                })
                            })
                        }
                    }
                }(u);
                return {
                    v1PlacesGameiconsGet: function(n, r, a, o, i, s) {
                        return er(this, void 0, Promise, function() {
                            var t;
                            return tr(this, function(e) {
                                switch (e.label) {
                                    case 0:
                                        return [4, c.v1PlacesGameiconsGet(n, r, a, o, i, s)];
                                    case 1:
                                        return t = e.sent(), [2, Kn(t, d(), _n, u)]
                                }
                            })
                        })
                    }
                }
            }

            function jr() {
                return null !== Er && Er.apply(this, arguments) || this
            }
            u(jr, Er = Me), jr.prototype.v1PlacesGameiconsGet = function(e, t, n, r, a, o) {
                var i = this;
                return zr(this.configuration).v1PlacesGameiconsGet(e, t, n, r, a, o).then(function(e) {
                    return e(i.axios, i.basePath)
                })
            };
            var Nr = l.EnvironmentUrls.thumbnailsApi,
                kr = new Ye,
                _r = new oe;
            (Ye = Hr = Hr || {}).PlaceHolder = "PlaceHolder", Ye.AutoGenerated = "AutoGenerated", Ye.ForceAutoGenerated = "ForceAutoGenerated", (oe = Kr = Kr || {}).Large = "150x150", oe.Default = "50x50", (Ye = ea = ea || {}).width768 = "768x432", Ye.width576 = "576x324", Ye.width480 = "480x270", Ye.width384 = "384x216", Ye.width256 = "256x144", (sa = sa || {}).Png = "Png";
            var Wr, Mr, oe = {
                    getIcons: function(e, t, n, r, a) {
                        return kr.v1GamesIconsGet(e, t, n, r, a, {
                            withCredentials: !0
                        })
                    },
                    getUniverseThumbnails: function(e, t, n, r) {
                        return kr.v1GamesMultigetThumbnailsGet(e, 1, !0, t, n, r, {
                            withCredentials: !0
                        }).then(function(e) {
                            var t = e.data,
                                n = e.status,
                                r = e.statusText,
                                a = e.headers,
                                e = e.request;
                            return {
                                data: {
                                    data: null === (t = null == t ? void 0 : t.data) || void 0 === t ? void 0 : t.map(function(e) {
                                        var t = null === (t = e.thumbnails) || void 0 === t ? void 0 : t[0];
                                        return {
                                            targetId: e.universeId,
                                            state: null == t ? void 0 : t.state,
                                            imageUrl: null == t ? void 0 : t.imageUrl
                                        }
                                    })
                                },
                                status: n,
                                statusText: r,
                                headers: a,
                                request: e
                            }
                        })
                    },
                    getAllUniverseThumbnails: function(e, t, n, r, a) {
                        return void 0 === a && (a = 10), kr.v1GamesMultigetThumbnailsGet(e, a, !0, t, n, r, {
                            withCredentials: !0
                        })
                    },
                    getGamePassIcons: function(e, t, n, r) {
                        return _r.v1GamePassesGet(e, t, n, r, {
                            withCredentials: !0
                        })
                    },
                    getThumbnailsByThumbnailIds: function(e, t, n, r, a) {
                        return kr.v1GamesUniverseIdThumbnailsGet(e, t, n, r, a, {
                            withCredentials: !0
                        })
                    },
                    getPlacesGameIcons: function(e, t, n, r, a) {
                        var o = {
                            url: Nr + "/v1/places/gameicons",
                            withCredentials: !0,
                            retryable: !0
                        };
                        return E.get(o, {
                            placeIds: e,
                            returnPolicy: t,
                            size: n,
                            format: r,
                            isCircular: a
                        })
                    },
                    ReturnPolicy: Hr,
                    Size: Kr,
                    GameThumbnailSize: ea,
                    FileType: sa
                },
                Qr = new j,
                Ye = {
                    getMetadata: function() {
                        return Qr.v1TranslationAnalyticsMetadataGet({
                            withCredentials: !0
                        })
                    },
                    requestReport: function(e, t, n, r, a) {
                        a = {
                            startDateTime: t,
                            endDateTime: n,
                            reportType: r,
                            reportSubjectTargetId: a
                        };
                        return Qr.v1TranslationAnalyticsGamesGameIdRequestTranslationAnalyticsReportPost(e, a, {
                            withCredentials: !0
                        })
                    },
                    downloadReport: function(e, t, n, r, a) {
                        return Qr.v1TranslationAnalyticsGamesGameIdDownloadTranslationAnalyticsReportGet(e, t, n, r, a, {
                            withCredentials: !0,
                            responseType: "arraybuffer"
                        })
                    }
                },
                Hr = (Wr = function(e, t) {
                    return (Wr = Object.setPrototypeOf || {
                            __proto__: []
                        }
                        instanceof Array && function(e, t) {
                            e.__proto__ = t
                        } || function(e, t) {
                            for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n])
                        })(e, t)
                }, function(e, t) {
                    if ("function" != typeof t && null !== t) throw new TypeError("Class extends value " + String(t) + " is not a constructor or null");

                    function n() {
                        this.constructor = e
                    }
                    Wr(e, t), e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n)
                }),
                Vr = l.EnvironmentUrls.gamesApi.replace(/\/+$/, ""),
                Jr = ",",
                Kr = function(e, t, n) {
                    void 0 === t && (t = Vr), void 0 === n && (n = q), this.basePath = t, this.axios = n, e && (this.configuration = e, this.basePath = e.basePath || this.basePath)
                },
                Xr = (Mr = Error, Hr($r, Mr), $r);

            function $r(e, t) {
                t = Mr.call(this, t) || this;
                return t.field = e, t.name = "RequiredError", t
            }
            var Yr, Zr, ea = (Yr = function(e, t) {
                    return (Yr = Object.setPrototypeOf || {
                            __proto__: []
                        }
                        instanceof Array && function(e, t) {
                            e.__proto__ = t
                        } || function(e, t) {
                            for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n])
                        })(e, t)
                }, function(e, t) {
                    if ("function" != typeof t && null !== t) throw new TypeError("Class extends value " + String(t) + " is not a constructor or null");

                    function n() {
                        this.constructor = e
                    }
                    Yr(e, t), e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n)
                }),
                ta = function() {
                    return (ta = Object.assign || function(e) {
                        for (var t, n = 1, r = arguments.length; n < r; n++)
                            for (var a in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
                        return e
                    }).apply(this, arguments)
                };

            function na(o) {
                return {
                    v1GamesUniverseIdFavoritesCountGet: function(e, t) {
                        if (void 0 === t && (t = {}), null == e) throw new Xr("universeId", "Required parameter universeId was null or undefined when calling v1GamesUniverseIdFavoritesCountGet.");
                        e = "/v1/games/{universeId}/favorites/count".replace("{universeId}", encodeURIComponent(String(e))), e = T.Qc(e, !0);
                        o && (n = o.baseOptions);
                        var n = ta(ta({
                            method: "GET"
                        }, n), t);
                        return e.query = ta(ta(ta({}, e.query), {}), t.query), delete e.search, n.headers = ta(ta({}, {}), t.headers), {
                            url: T.WU(e),
                            options: n
                        }
                    },
                    v1GamesUniverseIdFavoritesGet: function(e, t) {
                        if (void 0 === t && (t = {}), null == e) throw new Xr("universeId", "Required parameter universeId was null or undefined when calling v1GamesUniverseIdFavoritesGet.");
                        e = "/v1/games/{universeId}/favorites".replace("{universeId}", encodeURIComponent(String(e))), e = T.Qc(e, !0);
                        o && (n = o.baseOptions);
                        var n = ta(ta({
                            method: "GET"
                        }, n), t);
                        return e.query = ta(ta(ta({}, e.query), {}), t.query), delete e.search, n.headers = ta(ta({}, {}), t.headers), {
                            url: T.WU(e),
                            options: n
                        }
                    },
                    v1GamesUniverseIdFavoritesPost: function(e, t, n) {
                        if (void 0 === n && (n = {}), null == e) throw new Xr("universeId", "Required parameter universeId was null or undefined when calling v1GamesUniverseIdFavoritesPost.");
                        if (null == t) throw new Xr("request", "Required parameter request was null or undefined when calling v1GamesUniverseIdFavoritesPost.");
                        var r = "/v1/games/{universeId}/favorites".replace("{universeId}", encodeURIComponent(String(e))),
                            e = T.Qc(r, !0);
                        o && (a = o.baseOptions);
                        var r = ta(ta({
                                method: "POST"
                            }, a), n),
                            a = {};
                        a["Content-Type"] = "application/json", e.query = ta(ta(ta({}, e.query), {}), n.query), delete e.search, r.headers = ta(ta({}, a), n.headers);
                        return r.data = JSON.stringify(void 0 !== t ? t : {}), {
                            url: T.WU(e),
                            options: r
                        }
                    }
                }
            }

            function ra(a) {
                return {
                    v1GamesUniverseIdFavoritesCountGet: function(e, t) {
                        var n = na(a).v1GamesUniverseIdFavoritesCountGet(e, t);
                        return function(e, t) {
                            void 0 === e && (e = q), void 0 === t && (t = Vr);
                            t = ta(ta({}, n.options), {
                                url: t + n.url
                            });
                            return e.request(t)
                        }
                    },
                    v1GamesUniverseIdFavoritesGet: function(e, t) {
                        var n = na(a).v1GamesUniverseIdFavoritesGet(e, t);
                        return function(e, t) {
                            void 0 === e && (e = q), void 0 === t && (t = Vr);
                            t = ta(ta({}, n.options), {
                                url: t + n.url
                            });
                            return e.request(t)
                        }
                    },
                    v1GamesUniverseIdFavoritesPost: function(e, t, n) {
                        var r = na(a).v1GamesUniverseIdFavoritesPost(e, t, n);
                        return function(e, t) {
                            void 0 === e && (e = q), void 0 === t && (t = Vr);
                            t = ta(ta({}, r.options), {
                                url: t + r.url
                            });
                            return e.request(t)
                        }
                    }
                }
            }

            function aa() {
                return null !== Zr && Zr.apply(this, arguments) || this
            }

            function oa(i) {
                return {
                    v1GamesUniverseIdGamePassesGet: function(e, t, n, r, a) {
                        var s, o = (s = i, function(e, t, n, r, a) {
                            if (void 0 === a && (a = {}), null == e) throw new Xr("universeId", "Required parameter universeId was null or undefined when calling v1GamesUniverseIdGamePassesGet.");
                            var o = "/v1/games/{universeId}/game-passes".replace("{universeId}", encodeURIComponent(String(e))),
                                e = T.Qc(o, !0);
                            s && (i = s.baseOptions);
                            var o = ta(ta({
                                    method: "GET"
                                }, i), a),
                                i = {};
                            return void 0 !== t && (i.sortOrder = t), void 0 !== n && (i.limit = n), void 0 !== r && (i.cursor = r), e.query = ta(ta(ta({}, e.query), i), a.query), delete e.search, o.headers = ta(ta({}, {}), a.headers), {
                                url: T.WU(e),
                                options: o
                            }
                        }(e, t, n, r, a));
                        return function(e, t) {
                            void 0 === e && (e = q), void 0 === t && (t = Vr);
                            t = ta(ta({}, o.options), {
                                url: t + o.url
                            });
                            return e.request(t)
                        }
                    }
                }
            }(sa = {}).GamesDefaultSorts = "GamesDefaultSorts", sa.GamesAllSorts = "GamesAllSorts", sa.HomeSorts = "HomeSorts", sa.ChatSorts = "ChatSorts", sa.UnifiedHomeSorts = "UnifiedHomeSorts", sa.AbTestSorts = "AbTestSorts", sa.GamesPageAbTestSorts1 = "GamesPageAbTestSorts1", sa.GamesPageAbTestSorts2 = "GamesPageAbTestSorts2", (j = {}).MorphToR6 = "MorphToR6", j.PlayerChoice = "PlayerChoice", j.MorphToR15 = "MorphToR15", (Hr = {}).UnplayableOtherReason = "UnplayableOtherReason", Hr.Playable = "Playable", Hr.GuestProhibited = "GuestProhibited", Hr.GameUnapproved = "GameUnapproved", Hr.IncorrectConfiguration = "IncorrectConfiguration", Hr.UniverseRootPlaceIsPrivate = "UniverseRootPlaceIsPrivate", Hr.InsufficientPermissionFriendsOnly = "InsufficientPermissionFriendsOnly", Hr.InsufficientPermissionGroupOnly = "InsufficientPermissionGroupOnly", Hr.DeviceRestricted = "DeviceRestricted", Hr.UnderReview = "UnderReview", Hr.PurchaseRequired = "PurchaseRequired", Hr.AccountRestricted = "AccountRestricted", Hr.TemporarilyUnavailable = "TemporarilyUnavailable", (sa = {}).Facebook = "Facebook", sa.Twitter = "Twitter", sa.YouTube = "YouTube", sa.Twitch = "Twitch", sa.GooglePlus = "GooglePlus", sa.Discord = "Discord", sa.RobloxGroup = "RobloxGroup", sa.Amazon = "Amazon", (j = {}).Asc = "Asc", j.Desc = "Desc", (Hr = {}).Forward = "Forward", Hr.Backward = "Backward", ea(aa, Zr = Kr), aa.prototype.v1GamesUniverseIdFavoritesCountGet = function(e, t) {
                return ra(this.configuration).v1GamesUniverseIdFavoritesCountGet(e, t)(this.axios, this.basePath)
            }, aa.prototype.v1GamesUniverseIdFavoritesGet = function(e, t) {
                return ra(this.configuration).v1GamesUniverseIdFavoritesGet(e, t)(this.axios, this.basePath)
            }, aa.prototype.v1GamesUniverseIdFavoritesPost = function(e, t, n) {
                return ra(this.configuration).v1GamesUniverseIdFavoritesPost(e, t, n)(this.axios, this.basePath)
            };
            var ia, sa = (ea(ua, ia = Kr), ua.prototype.v1GamesUniverseIdGamePassesGet = function(e, t, n, r, a) {
                return oa(this.configuration).v1GamesUniverseIdGamePassesGet(e, t, n, r, a)(this.axios, this.basePath)
            }, ua);

            function ua() {
                return null !== ia && ia.apply(this, arguments) || this
            }

            function ca(G) {
                return {
                    v1GamesGameThumbnailGet: function(e, t, n, r) {
                        if (void 0 === r && (r = {}), null == e) throw new Xr("imageToken", "Required parameter imageToken was null or undefined when calling v1GamesGameThumbnailGet.");
                        var a = T.Qc("/v1/games/game-thumbnail", !0);
                        G && (i = G.baseOptions);
                        var o = ta(ta({
                                method: "GET"
                            }, i), r),
                            i = {};
                        return void 0 !== e && (i.imageToken = e), void 0 !== t && (i.height = t), void 0 !== n && (i.width = n), a.query = ta(ta(ta({}, a.query), i), r.query), delete a.search, o.headers = ta(ta({}, {}), r.headers), {
                            url: T.WU(a),
                            options: o
                        }
                    },
                    v1GamesGameThumbnailsGet: function(e, t, n, r) {
                        if (void 0 === r && (r = {}), null == e) throw new Xr("imageTokens", "Required parameter imageTokens was null or undefined when calling v1GamesGameThumbnailsGet.");
                        var a = T.Qc("/v1/games/game-thumbnails", !0);
                        G && (i = G.baseOptions);
                        var o = ta(ta({
                                method: "GET"
                            }, i), r),
                            i = {};
                        return e && (i.imageTokens = e), void 0 !== t && (i.height = t), void 0 !== n && (i.width = n), a.query = ta(ta(ta({}, a.query), i), r.query), delete a.search, o.headers = ta(ta({}, {}), r.headers), {
                            url: T.WU(a),
                            options: o
                        }
                    },
                    v1GamesGamesProductInfoGet: function(e, t) {
                        if (void 0 === t && (t = {}), null == e) throw new Xr("universeIds", "Required parameter universeIds was null or undefined when calling v1GamesGamesProductInfoGet.");
                        var n = T.Qc("/v1/games/games-product-info", !0);
                        G && (a = G.baseOptions);
                        var r = ta(ta({
                                method: "GET"
                            }, a), t),
                            a = {};
                        return e && (a.universeIds = e.join(Jr)), n.query = ta(ta(ta({}, n.query), a), t.query), delete n.search, r.headers = ta(ta({}, {}), t.headers), {
                            url: T.WU(n),
                            options: r
                        }
                    },
                    v1GamesGet: function(e, t) {
                        if (void 0 === t && (t = {}), null == e) throw new Xr("universeIds", "Required parameter universeIds was null or undefined when calling v1GamesGet.");
                        var n = T.Qc("/v1/games", !0);
                        G && (a = G.baseOptions);
                        var r = ta(ta({
                                method: "GET"
                            }, a), t),
                            a = {};
                        return e && (a.universeIds = e.join(Jr)), n.query = ta(ta(ta({}, n.query), a), t.query), delete n.search, r.headers = ta(ta({}, {}), t.headers), {
                            url: T.WU(n),
                            options: r
                        }
                    },
                    v1GamesListGet: function(e, t, n, r, a, o, i, s, u, c, l, d, h, v, p, f) {
                        void 0 === f && (f = {});
                        var m = T.Qc("/v1/games/list", !0);
                        G && (y = G.baseOptions);
                        var g = ta(ta({
                                method: "GET"
                            }, y), f),
                            y = {};
                        return void 0 !== e && (y["model.sortToken"] = e), void 0 !== t && (y["model.gameFilter"] = t), void 0 !== n && (y["model.timeFilter"] = n), void 0 !== r && (y["model.genreFilter"] = r), void 0 !== a && (y["model.exclusiveStartId"] = a), void 0 !== o && (y["model.sortOrder"] = o), void 0 !== i && (y["model.gameSetTargetId"] = i), void 0 !== s && (y["model.keyword"] = s), void 0 !== u && (y["model.startRows"] = u), void 0 !== c && (y["model.maxRows"] = c), void 0 !== l && (y["model.isKeywordSuggestionEnabled"] = l), void 0 !== d && (y["model.contextCountryRegionId"] = d), void 0 !== h && (y["model.contextUniverseId"] = h), void 0 !== v && (y["model.pageId"] = v), void 0 !== p && (y["model.sortPosition"] = p), m.query = ta(ta(ta({}, m.query), y), f.query), delete m.search, g.headers = ta(ta({}, {}), f.headers), {
                            url: T.WU(m),
                            options: g
                        }
                    },
                    v1GamesMultigetPlaceDetailsGet: function(e, t) {
                        if (void 0 === t && (t = {}), null == e) throw new Xr("placeIds", "Required parameter placeIds was null or undefined when calling v1GamesMultigetPlaceDetailsGet.");
                        var n = T.Qc("/v1/games/multiget-place-details", !0);
                        G && (a = G.baseOptions);
                        var r = ta(ta({
                                method: "GET"
                            }, a), t),
                            a = {};
                        return e && (a.placeIds = e), n.query = ta(ta(ta({}, n.query), a), t.query), delete n.search, r.headers = ta(ta({}, {}), t.headers), {
                            url: T.WU(n),
                            options: r
                        }
                    },
                    v1GamesMultigetPlayabilityStatusGet: function(e, t) {
                        if (void 0 === t && (t = {}), null == e) throw new Xr("universeIds", "Required parameter universeIds was null or undefined when calling v1GamesMultigetPlayabilityStatusGet.");
                        var n = T.Qc("/v1/games/multiget-playability-status", !0);
                        G && (a = G.baseOptions);
                        var r = ta(ta({
                                method: "GET"
                            }, a), t),
                            a = {};
                        return e && (a.universeIds = e.join(Jr)), n.query = ta(ta(ta({}, n.query), a), t.query), delete n.search, r.headers = ta(ta({}, {}), t.headers), {
                            url: T.WU(n),
                            options: r
                        }
                    },
                    v1GamesPlaceIdServersServerTypeGet: function(e, t, n, r, a, o) {
                        if (void 0 === o && (o = {}), null == e) throw new Xr("placeId", "Required parameter placeId was null or undefined when calling v1GamesPlaceIdServersServerTypeGet.");
                        if (null == t) throw new Xr("serverType", "Required parameter serverType was null or undefined when calling v1GamesPlaceIdServersServerTypeGet.");
                        e = "/v1/games/{placeId}/servers/{serverType}".replace("{placeId}", encodeURIComponent(String(e))).replace("{serverType}", encodeURIComponent(String(t))), t = T.Qc(e, !0);
                        G && (i = G.baseOptions);
                        var e = ta(ta({
                                method: "GET"
                            }, i), o),
                            i = {};
                        return void 0 !== n && (i.sortOrder = n), void 0 !== r && (i.limit = r), void 0 !== a && (i.cursor = a), t.query = ta(ta(ta({}, t.query), i), o.query), delete t.search, e.headers = ta(ta({}, {}), o.headers), {
                            url: T.WU(t),
                            options: e
                        }
                    },
                    v1GamesPlacesPlaceIdMetadataPost: function(e, t, n) {
                        if (void 0 === n && (n = {}), null == e) throw new Xr("placeId", "Required parameter placeId was null or undefined when calling v1GamesPlacesPlaceIdMetadataPost.");
                        if (null == t) throw new Xr("request", "Required parameter request was null or undefined when calling v1GamesPlacesPlaceIdMetadataPost.");
                        var r = "/v1/games/places/{placeId}/metadata".replace("{placeId}", encodeURIComponent(String(e))),
                            e = T.Qc(r, !0);
                        G && (a = G.baseOptions);
                        var r = ta(ta({
                                method: "POST"
                            }, a), n),
                            a = {};
                        a["Content-Type"] = "application/json", e.query = ta(ta(ta({}, e.query), {}), n.query), delete e.search, r.headers = ta(ta({}, a), n.headers);
                        return r.data = JSON.stringify(void 0 !== t ? t : {}), {
                            url: T.WU(e),
                            options: r
                        }
                    },
                    v1GamesRecommendationsAlgorithmAlgorithmNameGet: function(e, t, n, r) {
                        if (void 0 === r && (r = {}), null == e) throw new Xr("algorithmName", "Required parameter algorithmName was null or undefined when calling v1GamesRecommendationsAlgorithmAlgorithmNameGet.");
                        var a = "/v1/games/recommendations/algorithm/{algorithmName}".replace("{algorithmName}", encodeURIComponent(String(e))),
                            e = T.Qc(a, !0);
                        G && (o = G.baseOptions);
                        var a = ta(ta({
                                method: "GET"
                            }, o), r),
                            o = {};
                        return void 0 !== t && (o["model.paginationKey"] = t), void 0 !== n && (o["model.maxRows"] = n), e.query = ta(ta(ta({}, e.query), o), r.query), delete e.search, a.headers = ta(ta({}, {}), r.headers), {
                            url: T.WU(e),
                            options: a
                        }
                    },
                    v1GamesRecommendationsGameUniverseIdGet: function(e, t, n, r) {
                        if (void 0 === r && (r = {}), null == e) throw new Xr("universeId", "Required parameter universeId was null or undefined when calling v1GamesRecommendationsGameUniverseIdGet.");
                        var a = "/v1/games/recommendations/game/{universeId}".replace("{universeId}", encodeURIComponent(String(e))),
                            e = T.Qc(a, !0);
                        G && (o = G.baseOptions);
                        var a = ta(ta({
                                method: "GET"
                            }, o), r),
                            o = {};
                        return void 0 !== t && (o["model.paginationKey"] = t), void 0 !== n && (o["model.maxRows"] = n), e.query = ta(ta(ta({}, e.query), o), r.query), delete e.search, a.headers = ta(ta({}, {}), r.headers), {
                            url: T.WU(e),
                            options: a
                        }
                    },
                    v1GamesSortsGet: function(e, t) {
                        void 0 === t && (t = {});
                        var n = T.Qc("/v1/games/sorts", !0);
                        G && (a = G.baseOptions);
                        var r = ta(ta({
                                method: "GET"
                            }, a), t),
                            a = {};
                        return void 0 !== e && (a["model.gameSortsContext"] = e), n.query = ta(ta(ta({}, n.query), a), t.query), delete n.search, r.headers = ta(ta({}, {}), t.headers), {
                            url: T.WU(n),
                            options: r
                        }
                    },
                    v1GamesUniverseIdIconGet: function(e, t) {
                        if (void 0 === t && (t = {}), null == e) throw new Xr("universeId", "Required parameter universeId was null or undefined when calling v1GamesUniverseIdIconGet.");
                        e = "/v1/games/{universeId}/icon".replace("{universeId}", encodeURIComponent(String(e))), e = T.Qc(e, !0);
                        G && (n = G.baseOptions);
                        var n = ta(ta({
                            method: "GET"
                        }, n), t);
                        return e.query = ta(ta(ta({}, e.query), {}), t.query), delete e.search, n.headers = ta(ta({}, {}), t.headers), {
                            url: T.WU(e),
                            options: n
                        }
                    },
                    v1GamesUniverseIdMediaGet: function(e, t) {
                        if (void 0 === t && (t = {}), null == e) throw new Xr("universeId", "Required parameter universeId was null or undefined when calling v1GamesUniverseIdMediaGet.");
                        e = "/v1/games/{universeId}/media".replace("{universeId}", encodeURIComponent(String(e))), e = T.Qc(e, !0);
                        G && (n = G.baseOptions);
                        var n = ta(ta({
                            method: "GET"
                        }, n), t);
                        return e.query = ta(ta(ta({}, e.query), {}), t.query), delete e.search, n.headers = ta(ta({}, {}), t.headers), {
                            url: T.WU(e),
                            options: n
                        }
                    }
                }
            }

            function la(g) {
                return {
                    v1GamesGameThumbnailGet: function(e, t, n, r) {
                        var a = ca(g).v1GamesGameThumbnailGet(e, t, n, r);
                        return function(e, t) {
                            void 0 === e && (e = q), void 0 === t && (t = Vr);
                            t = ta(ta({}, a.options), {
                                url: t + a.url
                            });
                            return e.request(t)
                        }
                    },
                    v1GamesGameThumbnailsGet: function(e, t, n, r) {
                        var a = ca(g).v1GamesGameThumbnailsGet(e, t, n, r);
                        return function(e, t) {
                            void 0 === e && (e = q), void 0 === t && (t = Vr);
                            t = ta(ta({}, a.options), {
                                url: t + a.url
                            });
                            return e.request(t)
                        }
                    },
                    v1GamesGamesProductInfoGet: function(e, t) {
                        var n = ca(g).v1GamesGamesProductInfoGet(e, t);
                        return function(e, t) {
                            void 0 === e && (e = q), void 0 === t && (t = Vr);
                            t = ta(ta({}, n.options), {
                                url: t + n.url
                            });
                            return e.request(t)
                        }
                    },
                    v1GamesGet: function(e, t) {
                        var n = ca(g).v1GamesGet(e, t);
                        return function(e, t) {
                            void 0 === e && (e = q), void 0 === t && (t = Vr);
                            t = ta(ta({}, n.options), {
                                url: t + n.url
                            });
                            return e.request(t)
                        }
                    },
                    v1GamesListGet: function(e, t, n, r, a, o, i, s, u, c, l, d, h, v, p, f) {
                        var m = ca(g).v1GamesListGet(e, t, n, r, a, o, i, s, u, c, l, d, h, v, p, f);
                        return function(e, t) {
                            void 0 === e && (e = q), void 0 === t && (t = Vr);
                            t = ta(ta({}, m.options), {
                                url: t + m.url
                            });
                            return e.request(t)
                        }
                    },
                    v1GamesMultigetPlaceDetailsGet: function(e, t) {
                        var n = ca(g).v1GamesMultigetPlaceDetailsGet(e, t);
                        return function(e, t) {
                            void 0 === e && (e = q), void 0 === t && (t = Vr);
                            t = ta(ta({}, n.options), {
                                url: t + n.url
                            });
                            return e.request(t)
                        }
                    },
                    v1GamesMultigetPlayabilityStatusGet: function(e, t) {
                        var n = ca(g).v1GamesMultigetPlayabilityStatusGet(e, t);
                        return function(e, t) {
                            void 0 === e && (e = q), void 0 === t && (t = Vr);
                            t = ta(ta({}, n.options), {
                                url: t + n.url
                            });
                            return e.request(t)
                        }
                    },
                    v1GamesPlaceIdServersServerTypeGet: function(e, t, n, r, a, o) {
                        var i = ca(g).v1GamesPlaceIdServersServerTypeGet(e, t, n, r, a, o);
                        return function(e, t) {
                            void 0 === e && (e = q), void 0 === t && (t = Vr);
                            t = ta(ta({}, i.options), {
                                url: t + i.url
                            });
                            return e.request(t)
                        }
                    },
                    v1GamesPlacesPlaceIdMetadataPost: function(e, t, n) {
                        var r = ca(g).v1GamesPlacesPlaceIdMetadataPost(e, t, n);
                        return function(e, t) {
                            void 0 === e && (e = q), void 0 === t && (t = Vr);
                            t = ta(ta({}, r.options), {
                                url: t + r.url
                            });
                            return e.request(t)
                        }
                    },
                    v1GamesRecommendationsAlgorithmAlgorithmNameGet: function(e, t, n, r) {
                        var a = ca(g).v1GamesRecommendationsAlgorithmAlgorithmNameGet(e, t, n, r);
                        return function(e, t) {
                            void 0 === e && (e = q), void 0 === t && (t = Vr);
                            t = ta(ta({}, a.options), {
                                url: t + a.url
                            });
                            return e.request(t)
                        }
                    },
                    v1GamesRecommendationsGameUniverseIdGet: function(e, t, n, r) {
                        var a = ca(g).v1GamesRecommendationsGameUniverseIdGet(e, t, n, r);
                        return function(e, t) {
                            void 0 === e && (e = q), void 0 === t && (t = Vr);
                            t = ta(ta({}, a.options), {
                                url: t + a.url
                            });
                            return e.request(t)
                        }
                    },
                    v1GamesSortsGet: function(e, t) {
                        var n = ca(g).v1GamesSortsGet(e, t);
                        return function(e, t) {
                            void 0 === e && (e = q), void 0 === t && (t = Vr);
                            t = ta(ta({}, n.options), {
                                url: t + n.url
                            });
                            return e.request(t)
                        }
                    },
                    v1GamesUniverseIdIconGet: function(e, t) {
                        var n = ca(g).v1GamesUniverseIdIconGet(e, t);
                        return function(e, t) {
                            void 0 === e && (e = q), void 0 === t && (t = Vr);
                            t = ta(ta({}, n.options), {
                                url: t + n.url
                            });
                            return e.request(t)
                        }
                    },
                    v1GamesUniverseIdMediaGet: function(e, t) {
                        var n = ca(g).v1GamesUniverseIdMediaGet(e, t);
                        return function(e, t) {
                            void 0 === e && (e = q), void 0 === t && (t = Vr);
                            t = ta(ta({}, n.options), {
                                url: t + n.url
                            });
                            return e.request(t)
                        }
                    }
                }
            }
            var da, ha, va, pa, j = (ea(fa, da = Kr), fa.prototype.v1GamesGameThumbnailGet = function(e, t, n, r) {
                return la(this.configuration).v1GamesGameThumbnailGet(e, t, n, r)(this.axios, this.basePath)
            }, fa.prototype.v1GamesGameThumbnailsGet = function(e, t, n, r) {
                return la(this.configuration).v1GamesGameThumbnailsGet(e, t, n, r)(this.axios, this.basePath)
            }, fa.prototype.v1GamesGamesProductInfoGet = function(e, t) {
                return la(this.configuration).v1GamesGamesProductInfoGet(e, t)(this.axios, this.basePath)
            }, fa.prototype.v1GamesGet = function(e, t) {
                return la(this.configuration).v1GamesGet(e, t)(this.axios, this.basePath)
            }, fa.prototype.v1GamesListGet = function(e, t, n, r, a, o, i, s, u, c, l, d, h, v, p, f) {
                return la(this.configuration).v1GamesListGet(e, t, n, r, a, o, i, s, u, c, l, d, h, v, p, f)(this.axios, this.basePath)
            }, fa.prototype.v1GamesMultigetPlaceDetailsGet = function(e, t) {
                return la(this.configuration).v1GamesMultigetPlaceDetailsGet(e, t)(this.axios, this.basePath)
            }, fa.prototype.v1GamesMultigetPlayabilityStatusGet = function(e, t) {
                return la(this.configuration).v1GamesMultigetPlayabilityStatusGet(e, t)(this.axios, this.basePath)
            }, fa.prototype.v1GamesPlaceIdServersServerTypeGet = function(e, t, n, r, a, o) {
                return la(this.configuration).v1GamesPlaceIdServersServerTypeGet(e, t, n, r, a, o)(this.axios, this.basePath)
            }, fa.prototype.v1GamesPlacesPlaceIdMetadataPost = function(e, t, n) {
                return la(this.configuration).v1GamesPlacesPlaceIdMetadataPost(e, t, n)(this.axios, this.basePath)
            }, fa.prototype.v1GamesRecommendationsAlgorithmAlgorithmNameGet = function(e, t, n, r) {
                return la(this.configuration).v1GamesRecommendationsAlgorithmAlgorithmNameGet(e, t, n, r)(this.axios, this.basePath)
            }, fa.prototype.v1GamesRecommendationsGameUniverseIdGet = function(e, t, n, r) {
                return la(this.configuration).v1GamesRecommendationsGameUniverseIdGet(e, t, n, r)(this.axios, this.basePath)
            }, fa.prototype.v1GamesSortsGet = function(e, t) {
                return la(this.configuration).v1GamesSortsGet(e, t)(this.axios, this.basePath)
            }, fa.prototype.v1GamesUniverseIdIconGet = function(e, t) {
                return la(this.configuration).v1GamesUniverseIdIconGet(e, t)(this.axios, this.basePath)
            }, fa.prototype.v1GamesUniverseIdMediaGet = function(e, t) {
                return la(this.configuration).v1GamesUniverseIdMediaGet(e, t)(this.axios, this.basePath)
            }, fa);

            function fa() {
                return null !== da && da.apply(this, arguments) || this
            }

            function ma(a) {
                return {
                    v1GamesUniverseIdSocialLinksListGet: function(e, t) {
                        var r, n = (r = a, function(e, t) {
                            if (void 0 === t && (t = {}), null == e) throw new Xr("universeId", "Required parameter universeId was null or undefined when calling v1GamesUniverseIdSocialLinksListGet.");
                            e = "/v1/games/{universeId}/social-links/list".replace("{universeId}", encodeURIComponent(String(e))), e = T.Qc(e, !0);
                            r && (n = r.baseOptions);
                            var n = ta(ta({
                                method: "GET"
                            }, n), t);
                            return e.query = ta(ta(ta({}, e.query), {}), t.query), delete e.search, n.headers = ta(ta({}, {}), t.headers), {
                                url: T.WU(e),
                                options: n
                            }
                        }(e, t));
                        return function(e, t) {
                            void 0 === e && (e = q), void 0 === t && (t = Vr);
                            t = ta(ta({}, n.options), {
                                url: t + n.url
                            });
                            return e.request(t)
                        }
                    }
                }
            }

            function ga() {
                return null !== ha && ha.apply(this, arguments) || this
            }

            function ya(o) {
                return {
                    v1GamesVipServersUniverseIdPost: function(e, t, n) {
                        if (void 0 === n && (n = {}), null == e) throw new Xr("universeId", "Required parameter universeId was null or undefined when calling v1GamesVipServersUniverseIdPost.");
                        if (null == t) throw new Xr("requestBody", "Required parameter requestBody was null or undefined when calling v1GamesVipServersUniverseIdPost.");
                        var r = "/v1/games/vip-servers/{universeId}".replace("{universeId}", encodeURIComponent(String(e))),
                            e = T.Qc(r, !0);
                        o && (a = o.baseOptions);
                        var r = ta(ta({
                                method: "POST"
                            }, a), n),
                            a = {};
                        a["Content-Type"] = "application/json", e.query = ta(ta(ta({}, e.query), {}), n.query), delete e.search, r.headers = ta(ta({}, a), n.headers);
                        return r.data = JSON.stringify(void 0 !== t ? t : {}), {
                            url: T.WU(e),
                            options: r
                        }
                    },
                    v1VipServersIdGet: function(e, t) {
                        if (void 0 === t && (t = {}), null == e) throw new Xr("id", "Required parameter id was null or undefined when calling v1VipServersIdGet.");
                        e = "/v1/vip-servers/{id}".replace("{id}", encodeURIComponent(String(e))), e = T.Qc(e, !0);
                        o && (n = o.baseOptions);
                        var n = ta(ta({
                            method: "GET"
                        }, n), t);
                        return e.query = ta(ta(ta({}, e.query), {}), t.query), delete e.search, n.headers = ta(ta({}, {}), t.headers), {
                            url: T.WU(e),
                            options: n
                        }
                    },
                    v1VipServersIdPatch: function(e, t, n) {
                        if (void 0 === n && (n = {}), null == e) throw new Xr("id", "Required parameter id was null or undefined when calling v1VipServersIdPatch.");
                        if (null == t) throw new Xr("request", "Required parameter request was null or undefined when calling v1VipServersIdPatch.");
                        var r = "/v1/vip-servers/{id}".replace("{id}", encodeURIComponent(String(e))),
                            e = T.Qc(r, !0);
                        o && (a = o.baseOptions);
                        var r = ta(ta({
                                method: "PATCH"
                            }, a), n),
                            a = {};
                        a["Content-Type"] = "application/json", e.query = ta(ta(ta({}, e.query), {}), n.query), delete e.search, r.headers = ta(ta({}, a), n.headers);
                        return r.data = JSON.stringify(void 0 !== t ? t : {}), {
                            url: T.WU(e),
                            options: r
                        }
                    },
                    v1VipServersIdPermissionsPatch: function(e, t, n) {
                        if (void 0 === n && (n = {}), null == e) throw new Xr("id", "Required parameter id was null or undefined when calling v1VipServersIdPermissionsPatch.");
                        if (null == t) throw new Xr("request", "Required parameter request was null or undefined when calling v1VipServersIdPermissionsPatch.");
                        var r = "/v1/vip-servers/{id}/permissions".replace("{id}", encodeURIComponent(String(e))),
                            e = T.Qc(r, !0);
                        o && (a = o.baseOptions);
                        var r = ta(ta({
                                method: "PATCH"
                            }, a), n),
                            a = {};
                        a["Content-Type"] = "application/json", e.query = ta(ta(ta({}, e.query), {}), n.query), delete e.search, r.headers = ta(ta({}, a), n.headers);
                        return r.data = JSON.stringify(void 0 !== t ? t : {}), {
                            url: T.WU(e),
                            options: r
                        }
                    },
                    v1VipServersIdSubscriptionPatch: function(e, t, n) {
                        if (void 0 === n && (n = {}), null == e) throw new Xr("id", "Required parameter id was null or undefined when calling v1VipServersIdSubscriptionPatch.");
                        if (null == t) throw new Xr("request", "Required parameter request was null or undefined when calling v1VipServersIdSubscriptionPatch.");
                        var r = "/v1/vip-servers/{id}/subscription".replace("{id}", encodeURIComponent(String(e))),
                            e = T.Qc(r, !0);
                        o && (a = o.baseOptions);
                        var r = ta(ta({
                                method: "PATCH"
                            }, a), n),
                            a = {};
                        a["Content-Type"] = "application/json", e.query = ta(ta(ta({}, e.query), {}), n.query), delete e.search, r.headers = ta(ta({}, a), n.headers);
                        return r.data = JSON.stringify(void 0 !== t ? t : {}), {
                            url: T.WU(e),
                            options: r
                        }
                    }
                }
            }

            function Ga(a) {
                return {
                    v1GamesVipServersUniverseIdPost: function(e, t, n) {
                        var r = ya(a).v1GamesVipServersUniverseIdPost(e, t, n);
                        return function(e, t) {
                            void 0 === e && (e = q), void 0 === t && (t = Vr);
                            t = ta(ta({}, r.options), {
                                url: t + r.url
                            });
                            return e.request(t)
                        }
                    },
                    v1VipServersIdGet: function(e, t) {
                        var n = ya(a).v1VipServersIdGet(e, t);
                        return function(e, t) {
                            void 0 === e && (e = q), void 0 === t && (t = Vr);
                            t = ta(ta({}, n.options), {
                                url: t + n.url
                            });
                            return e.request(t)
                        }
                    },
                    v1VipServersIdPatch: function(e, t, n) {
                        var r = ya(a).v1VipServersIdPatch(e, t, n);
                        return function(e, t) {
                            void 0 === e && (e = q), void 0 === t && (t = Vr);
                            t = ta(ta({}, r.options), {
                                url: t + r.url
                            });
                            return e.request(t)
                        }
                    },
                    v1VipServersIdPermissionsPatch: function(e, t, n) {
                        var r = ya(a).v1VipServersIdPermissionsPatch(e, t, n);
                        return function(e, t) {
                            void 0 === e && (e = q), void 0 === t && (t = Vr);
                            t = ta(ta({}, r.options), {
                                url: t + r.url
                            });
                            return e.request(t)
                        }
                    },
                    v1VipServersIdSubscriptionPatch: function(e, t, n) {
                        var r = ya(a).v1VipServersIdSubscriptionPatch(e, t, n);
                        return function(e, t) {
                            void 0 === e && (e = q), void 0 === t && (t = Vr);
                            t = ta(ta({}, r.options), {
                                url: t + r.url
                            });
                            return e.request(t)
                        }
                    }
                }
            }

            function Ia() {
                return null !== va && va.apply(this, arguments) || this
            }

            function ba(o) {
                return {
                    v1GamesUniverseIdUserVotesPatch: function(e, t, n) {
                        if (void 0 === n && (n = {}), null == e) throw new Xr("universeId", "Required parameter universeId was null or undefined when calling v1GamesUniverseIdUserVotesPatch.");
                        if (null == t) throw new Xr("requestBody", "Required parameter requestBody was null or undefined when calling v1GamesUniverseIdUserVotesPatch.");
                        var r = "/v1/games/{universeId}/user-votes".replace("{universeId}", encodeURIComponent(String(e))),
                            e = T.Qc(r, !0);
                        o && (a = o.baseOptions);
                        var r = ta(ta({
                                method: "PATCH"
                            }, a), n),
                            a = {};
                        a["Content-Type"] = "application/json", e.query = ta(ta(ta({}, e.query), {}), n.query), delete e.search, r.headers = ta(ta({}, a), n.headers);
                        return r.data = JSON.stringify(void 0 !== t ? t : {}), {
                            url: T.WU(e),
                            options: r
                        }
                    },
                    v1GamesUniverseIdVotesGet: function(e, t) {
                        if (void 0 === t && (t = {}), null == e) throw new Xr("universeId", "Required parameter universeId was null or undefined when calling v1GamesUniverseIdVotesGet.");
                        e = "/v1/games/{universeId}/votes".replace("{universeId}", encodeURIComponent(String(e))), e = T.Qc(e, !0);
                        o && (n = o.baseOptions);
                        var n = ta(ta({
                            method: "GET"
                        }, n), t);
                        return e.query = ta(ta(ta({}, e.query), {}), t.query), delete e.search, n.headers = ta(ta({}, {}), t.headers), {
                            url: T.WU(e),
                            options: n
                        }
                    },
                    v1GamesUniverseIdVotesUserGet: function(e, t) {
                        if (void 0 === t && (t = {}), null == e) throw new Xr("universeId", "Required parameter universeId was null or undefined when calling v1GamesUniverseIdVotesUserGet.");
                        e = "/v1/games/{universeId}/votes/user".replace("{universeId}", encodeURIComponent(String(e))), e = T.Qc(e, !0);
                        o && (n = o.baseOptions);
                        var n = ta(ta({
                            method: "GET"
                        }, n), t);
                        return e.query = ta(ta(ta({}, e.query), {}), t.query), delete e.search, n.headers = ta(ta({}, {}), t.headers), {
                            url: T.WU(e),
                            options: n
                        }
                    },
                    v1GamesVotesGet: function(e, t) {
                        if (void 0 === t && (t = {}), null == e) throw new Xr("universeIds", "Required parameter universeIds was null or undefined when calling v1GamesVotesGet.");
                        var n = T.Qc("/v1/games/votes", !0);
                        o && (a = o.baseOptions);
                        var r = ta(ta({
                                method: "GET"
                            }, a), t),
                            a = {};
                        return e && (a.universeIds = e.join(Jr)), n.query = ta(ta(ta({}, n.query), a), t.query), delete n.search, r.headers = ta(ta({}, {}), t.headers), {
                            url: T.WU(n),
                            options: r
                        }
                    }
                }
            }

            function Pa(a) {
                return {
                    v1GamesUniverseIdUserVotesPatch: function(e, t, n) {
                        var r = ba(a).v1GamesUniverseIdUserVotesPatch(e, t, n);
                        return function(e, t) {
                            void 0 === e && (e = q), void 0 === t && (t = Vr);
                            t = ta(ta({}, r.options), {
                                url: t + r.url
                            });
                            return e.request(t)
                        }
                    },
                    v1GamesUniverseIdVotesGet: function(e, t) {
                        var n = ba(a).v1GamesUniverseIdVotesGet(e, t);
                        return function(e, t) {
                            void 0 === e && (e = q), void 0 === t && (t = Vr);
                            t = ta(ta({}, n.options), {
                                url: t + n.url
                            });
                            return e.request(t)
                        }
                    },
                    v1GamesUniverseIdVotesUserGet: function(e, t) {
                        var n = ba(a).v1GamesUniverseIdVotesUserGet(e, t);
                        return function(e, t) {
                            void 0 === e && (e = q), void 0 === t && (t = Vr);
                            t = ta(ta({}, n.options), {
                                url: t + n.url
                            });
                            return e.request(t)
                        }
                    },
                    v1GamesVotesGet: function(e, t) {
                        var n = ba(a).v1GamesVotesGet(e, t);
                        return function(e, t) {
                            void 0 === e && (e = q), void 0 === t && (t = Vr);
                            t = ta(ta({}, n.options), {
                                url: t + n.url
                            });
                            return e.request(t)
                        }
                    }
                }
            }

            function wa() {
                return null !== pa && pa.apply(this, arguments) || this
            }
            ea(ga, ha = Kr), ga.prototype.v1GamesUniverseIdSocialLinksListGet = function(e, t) {
                return ma(this.configuration).v1GamesUniverseIdSocialLinksListGet(e, t)(this.axios, this.basePath)
            }, ea(Ia, va = Kr), Ia.prototype.v1GamesVipServersUniverseIdPost = function(e, t, n) {
                return Ga(this.configuration).v1GamesVipServersUniverseIdPost(e, t, n)(this.axios, this.basePath)
            }, Ia.prototype.v1VipServersIdGet = function(e, t) {
                return Ga(this.configuration).v1VipServersIdGet(e, t)(this.axios, this.basePath)
            }, Ia.prototype.v1VipServersIdPatch = function(e, t, n) {
                return Ga(this.configuration).v1VipServersIdPatch(e, t, n)(this.axios, this.basePath)
            }, Ia.prototype.v1VipServersIdPermissionsPatch = function(e, t, n) {
                return Ga(this.configuration).v1VipServersIdPermissionsPatch(e, t, n)(this.axios, this.basePath)
            }, Ia.prototype.v1VipServersIdSubscriptionPatch = function(e, t, n) {
                return Ga(this.configuration).v1VipServersIdSubscriptionPatch(e, t, n)(this.axios, this.basePath)
            }, ea(wa, pa = Kr), wa.prototype.v1GamesUniverseIdUserVotesPatch = function(e, t, n) {
                return Pa(this.configuration).v1GamesUniverseIdUserVotesPatch(e, t, n)(this.axios, this.basePath)
            }, wa.prototype.v1GamesUniverseIdVotesGet = function(e, t) {
                return Pa(this.configuration).v1GamesUniverseIdVotesGet(e, t)(this.axios, this.basePath)
            }, wa.prototype.v1GamesUniverseIdVotesUserGet = function(e, t) {
                return Pa(this.configuration).v1GamesUniverseIdVotesUserGet(e, t)(this.axios, this.basePath)
            }, wa.prototype.v1GamesVotesGet = function(e, t) {
                return Pa(this.configuration).v1GamesVotesGet(e, t)(this.axios, this.basePath)
            };
            var Ca, Ta, Hr = (Ca = function(e, t) {
                    return (Ca = Object.setPrototypeOf || {
                            __proto__: []
                        }
                        instanceof Array && function(e, t) {
                            e.__proto__ = t
                        } || function(e, t) {
                            for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n])
                        })(e, t)
                }, function(e, t) {
                    if ("function" != typeof t && null !== t) throw new TypeError("Class extends value " + String(t) + " is not a constructor or null");

                    function n() {
                        this.constructor = e
                    }
                    Ca(e, t), e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n)
                }),
                Aa = l.EnvironmentUrls.gamesApi.replace(/\/+$/, ""),
                ea = function(e, t, n) {
                    void 0 === t && (t = Aa), void 0 === n && (n = q), this.basePath = t, this.axios = n, e && (this.configuration = e, this.basePath = e.basePath || this.basePath)
                },
                La = (Ta = Error, Hr(qa, Ta), qa);

            function qa(e, t) {
                t = Ta.call(this, t) || this;
                return t.field = e, t.name = "RequiredError", t
            }

            function Sa(e, t, n) {
                if (null == n) throw new La(t, "Required parameter " + t + " was null or undefined when calling " + e + ".")
            }

            function Ua(e) {
                for (var t = [], n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
                for (var r = new URLSearchParams(e.search), a = 0, o = t; a < o.length; a++) {
                    var i, s = o[a];
                    for (i in s) r.set(i, s[i])
                }
                e.search = r.toString()
            }

            function Ra(e) {
                return e.pathname + e.search + e.hash
            }

            function Oa(n, r, a, o) {
                return function(e, t) {
                    void 0 === e && (e = r), void 0 === t && (t = a);
                    t = xa(xa({}, n.options), {
                        url: ((null == o ? void 0 : o.basePath) || t) + n.url
                    });
                    return e.request(t)
                }
            }
            var Da, xa = function() {
                    return (xa = Object.assign || function(e) {
                        for (var t, n = 1, r = arguments.length; n < r; n++)
                            for (var a in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
                        return e
                    }).apply(this, arguments)
                },
                Ea = "https://example.com",
                Kr = (Da = function(e, t) {
                    return (Da = Object.setPrototypeOf || {
                            __proto__: []
                        }
                        instanceof Array && function(e, t) {
                            e.__proto__ = t
                        } || function(e, t) {
                            for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n])
                        })(e, t)
                }, function(e, t) {
                    if ("function" != typeof t && null !== t) throw new TypeError("Class extends value " + String(t) + " is not a constructor or null");

                    function n() {
                        this.constructor = e
                    }
                    Da(e, t), e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n)
                }),
                Ba = function() {
                    return (Ba = Object.assign || function(e) {
                        for (var t, n = 1, r = arguments.length; n < r; n++)
                            for (var a in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
                        return e
                    }).apply(this, arguments)
                },
                Fa = function(e, i, s, u) {
                    return new(s = s || Promise)(function(n, t) {
                        function r(e) {
                            try {
                                o(u.next(e))
                            } catch (e) {
                                t(e)
                            }
                        }

                        function a(e) {
                            try {
                                o(u.throw(e))
                            } catch (e) {
                                t(e)
                            }
                        }

                        function o(e) {
                            var t;
                            e.done ? n(e.value) : ((t = e.value) instanceof s ? t : new s(function(e) {
                                e(t)
                            })).then(r, a)
                        }
                        o((u = u.apply(e, i || [])).next())
                    })
                },
                za = function(n, r) {
                    var a, o, i, s = {
                            label: 0,
                            sent: function() {
                                if (1 & i[0]) throw i[1];
                                return i[1]
                            },
                            trys: [],
                            ops: []
                        },
                        e = {
                            next: t(0),
                            throw: t(1),
                            return: t(2)
                        };
                    return "function" == typeof Symbol && (e[Symbol.iterator] = function() {
                        return this
                    }), e;

                    function t(t) {
                        return function(e) {
                            return function(t) {
                                if (a) throw new TypeError("Generator is already executing.");
                                for (; s;) try {
                                    if (a = 1, o && (i = 2 & t[0] ? o.return : t[0] ? o.throw || ((i = o.return) && i.call(o), 0) : o.next) && !(i = i.call(o, t[1])).done) return i;
                                    switch (o = 0, i && (t = [2 & t[0], i.value]), t[0]) {
                                        case 0:
                                        case 1:
                                            i = t;
                                            break;
                                        case 4:
                                            return s.label++, {
                                                value: t[1],
                                                done: !1
                                            };
                                        case 5:
                                            s.label++, o = t[1], t = [0];
                                            continue;
                                        case 7:
                                            t = s.ops.pop(), s.trys.pop();
                                            continue;
                                        default:
                                            if (!(i = 0 < (i = s.trys).length && i[i.length - 1]) && (6 === t[0] || 2 === t[0])) {
                                                s = 0;
                                                continue
                                            }
                                            if (3 === t[0] && (!i || t[1] > i[0] && t[1] < i[3])) {
                                                s.label = t[1];
                                                break
                                            }
                                            if (6 === t[0] && s.label < i[1]) {
                                                s.label = i[1], i = t;
                                                break
                                            }
                                            if (i && s.label < i[2]) {
                                                s.label = i[2], s.ops.push(t);
                                                break
                                            }
                                            i[2] && s.ops.pop(), s.trys.pop();
                                            continue
                                    }
                                    t = r.call(n, s)
                                } catch (e) {
                                    t = [6, e], o = 0
                                } finally {
                                    a = i = 0
                                }
                                if (5 & t[0]) throw t[1];
                                return {
                                    value: t[0] ? t[1] : void 0,
                                    done: !0
                                }
                            }([t, e])
                        }
                    }
                };

            function ja(u) {
                var c = function(h) {
                    var e = this;
                    return {
                        v2GamesUniverseIdMediaGet: function(o, i) {
                            return void 0 === i && (i = {}), Fa(e, void 0, Promise, function() {
                                var t, n, r, a;
                                return za(this, function(e) {
                                    return Sa("v2GamesUniverseIdMediaGet", "universeId", o), r = "/v2/games/{universeId}/media".replace("{universeId}", encodeURIComponent(String(o))), t = new URL(r, Ea), h && (a = h.baseOptions), n = Ba(Ba({
                                        method: "GET"
                                    }, a), i), r = {}, Ua(t, {}, i.query), a = a && a.headers ? a.headers : {}, n.headers = Ba(Ba(Ba({}, r), a), i.headers), [2, {
                                        url: Ra(t),
                                        options: n
                                    }]
                                })
                            })
                        },
                        v2GroupsGroupIdGamesGet: function(i, s, u, c, l, d) {
                            return void 0 === d && (d = {}), Fa(e, void 0, Promise, function() {
                                var t, n, r, a, o;
                                return za(this, function(e) {
                                    return Sa("v2GroupsGroupIdGamesGet", "groupId", i), a = "/v2/groups/{groupId}/games".replace("{groupId}", encodeURIComponent(String(i))), t = new URL(a, Ea), h && (o = h.baseOptions), n = Ba(Ba({
                                        method: "GET"
                                    }, o), d), r = {}, a = {}, void 0 !== s && (a.accessFilter = s), void 0 !== u && (a.sortOrder = u), void 0 !== c && (a.limit = c), void 0 !== l && (a.cursor = l), Ua(t, a, d.query), o = o && o.headers ? o.headers : {}, n.headers = Ba(Ba(Ba({}, r), o), d.headers), [2, {
                                        url: Ra(t),
                                        options: n
                                    }]
                                })
                            })
                        },
                        v2GroupsGroupIdGamesV2Get: function(i, s, u, c, l, d) {
                            return void 0 === d && (d = {}), Fa(e, void 0, Promise, function() {
                                var t, n, r, a, o;
                                return za(this, function(e) {
                                    return Sa("v2GroupsGroupIdGamesV2Get", "groupId", i), a = "/v2/groups/{groupId}/gamesV2".replace("{groupId}", encodeURIComponent(String(i))), t = new URL(a, Ea), h && (o = h.baseOptions), n = Ba(Ba({
                                        method: "GET"
                                    }, o), d), r = {}, a = {}, void 0 !== s && (a.accessFilter = s), void 0 !== u && (a.sortOrder = u), void 0 !== c && (a.limit = c), void 0 !== l && (a.cursor = l), Ua(t, a, d.query), o = o && o.headers ? o.headers : {}, n.headers = Ba(Ba(Ba({}, r), o), d.headers), [2, {
                                        url: Ra(t),
                                        options: n
                                    }]
                                })
                            })
                        },
                        v2UsersUserIdFavoriteGamesGet: function(i, s, u, c, l, d) {
                            return void 0 === d && (d = {}), Fa(e, void 0, Promise, function() {
                                var t, n, r, a, o;
                                return za(this, function(e) {
                                    return Sa("v2UsersUserIdFavoriteGamesGet", "userId", i), a = "/v2/users/{userId}/favorite/games".replace("{userId}", encodeURIComponent(String(i))), t = new URL(a, Ea), h && (o = h.baseOptions), n = Ba(Ba({
                                        method: "GET"
                                    }, o), d), r = {}, a = {}, void 0 !== s && (a.accessFilter = s), void 0 !== u && (a.sortOrder = u), void 0 !== c && (a.limit = c), void 0 !== l && (a.cursor = l), Ua(t, a, d.query), o = o && o.headers ? o.headers : {}, n.headers = Ba(Ba(Ba({}, r), o), d.headers), [2, {
                                        url: Ra(t),
                                        options: n
                                    }]
                                })
                            })
                        },
                        v2UsersUserIdGamesGet: function(i, s, u, c, l, d) {
                            return void 0 === d && (d = {}), Fa(e, void 0, Promise, function() {
                                var t, n, r, a, o;
                                return za(this, function(e) {
                                    return Sa("v2UsersUserIdGamesGet", "userId", i), a = "/v2/users/{userId}/games".replace("{userId}", encodeURIComponent(String(i))), t = new URL(a, Ea), h && (o = h.baseOptions), n = Ba(Ba({
                                        method: "GET"
                                    }, o), d), r = {}, a = {}, void 0 !== s && (a.accessFilter = s), void 0 !== u && (a.sortOrder = u), void 0 !== c && (a.limit = c), void 0 !== l && (a.cursor = l), Ua(t, a, d.query), o = o && o.headers ? o.headers : {}, n.headers = Ba(Ba(Ba({}, r), o), d.headers), [2, {
                                        url: Ra(t),
                                        options: n
                                    }]
                                })
                            })
                        }
                    }
                }(u);
                return {
                    v2GamesUniverseIdMediaGet: function(n, r) {
                        return Fa(this, void 0, Promise, function() {
                            var t;
                            return za(this, function(e) {
                                switch (e.label) {
                                    case 0:
                                        return [4, c.v2GamesUniverseIdMediaGet(n, r)];
                                    case 1:
                                        return t = e.sent(), [2, Oa(t, d(), Aa, u)]
                                }
                            })
                        })
                    },
                    v2GroupsGroupIdGamesGet: function(n, r, a, o, i, s) {
                        return Fa(this, void 0, Promise, function() {
                            var t;
                            return za(this, function(e) {
                                switch (e.label) {
                                    case 0:
                                        return [4, c.v2GroupsGroupIdGamesGet(n, r, a, o, i, s)];
                                    case 1:
                                        return t = e.sent(), [2, Oa(t, d(), Aa, u)]
                                }
                            })
                        })
                    },
                    v2GroupsGroupIdGamesV2Get: function(n, r, a, o, i, s) {
                        return Fa(this, void 0, Promise, function() {
                            var t;
                            return za(this, function(e) {
                                switch (e.label) {
                                    case 0:
                                        return [4, c.v2GroupsGroupIdGamesV2Get(n, r, a, o, i, s)];
                                    case 1:
                                        return t = e.sent(), [2, Oa(t, d(), Aa, u)]
                                }
                            })
                        })
                    },
                    v2UsersUserIdFavoriteGamesGet: function(n, r, a, o, i, s) {
                        return Fa(this, void 0, Promise, function() {
                            var t;
                            return za(this, function(e) {
                                switch (e.label) {
                                    case 0:
                                        return [4, c.v2UsersUserIdFavoriteGamesGet(n, r, a, o, i, s)];
                                    case 1:
                                        return t = e.sent(), [2, Oa(t, d(), Aa, u)]
                                }
                            })
                        })
                    },
                    v2UsersUserIdGamesGet: function(n, r, a, o, i, s) {
                        return Fa(this, void 0, Promise, function() {
                            var t;
                            return za(this, function(e) {
                                switch (e.label) {
                                    case 0:
                                        return [4, c.v2UsersUserIdGamesGet(n, r, a, o, i, s)];
                                    case 1:
                                        return t = e.sent(), [2, Oa(t, d(), Aa, u)]
                                }
                            })
                        })
                    }
                }
            }(Hr = {}).Asc = "Asc", Hr.Desc = "Desc", (Hr = {}).Forward = "Forward", Hr.Backward = "Backward", (Hr = {}).Asc = "Asc", Hr.Desc = "Desc", (Hr = {}).Forward = "Forward", Hr.Backward = "Backward", (Hr = {}).Image = "Image", Hr.TShirt = "TShirt", Hr.Audio = "Audio", Hr.Mesh = "Mesh", Hr.Lua = "Lua", Hr.Html = "HTML", Hr.Text = "Text", Hr.Hat = "Hat", Hr.Place = "Place", Hr.Model = "Model", Hr.Shirt = "Shirt", Hr.Pants = "Pants", Hr.Decal = "Decal", Hr.Avatar = "Avatar", Hr.Head = "Head", Hr.Face = "Face", Hr.Gear = "Gear", Hr.Badge = "Badge", Hr.GroupEmblem = "GroupEmblem", Hr.Animation = "Animation", Hr.Arms = "Arms", Hr.Legs = "Legs", Hr.Torso = "Torso", Hr.RightArm = "RightArm", Hr.LeftArm = "LeftArm", Hr.LeftLeg = "LeftLeg", Hr.RightLeg = "RightLeg", Hr.Package = "Package", Hr.YouTubeVideo = "YouTubeVideo", Hr.GamePass = "GamePass", Hr.App = "App", Hr.Code = "Code", Hr.Plugin = "Plugin", Hr.SolidModel = "SolidModel", Hr.MeshPart = "MeshPart", Hr.HairAccessory = "HairAccessory", Hr.FaceAccessory = "FaceAccessory", Hr.NeckAccessory = "NeckAccessory", Hr.ShoulderAccessory = "ShoulderAccessory", Hr.FrontAccessory = "FrontAccessory", Hr.BackAccessory = "BackAccessory", Hr.WaistAccessory = "WaistAccessory", Hr.ClimbAnimation = "ClimbAnimation", Hr.DeathAnimation = "DeathAnimation", Hr.FallAnimation = "FallAnimation", Hr.IdleAnimation = "IdleAnimation", Hr.JumpAnimation = "JumpAnimation", Hr.RunAnimation = "RunAnimation", Hr.SwimAnimation = "SwimAnimation", Hr.WalkAnimation = "WalkAnimation", Hr.PoseAnimation = "PoseAnimation", Hr.LocalizationTableManifest = "LocalizationTableManifest", Hr.LocalizationTableTranslation = "LocalizationTableTranslation", Hr.EmoteAnimation = "EmoteAnimation", Hr.Video = "Video", Hr.TexturePack = "TexturePack", (Hr = {}).User = "User", Hr.Group = "Group";
            var Na, Hr = (Kr(ka, Na = ea), ka.prototype.v2GamesUniverseIdMediaGet = function(e, t) {
                var n = this;
                return ja(this.configuration).v2GamesUniverseIdMediaGet(e, t).then(function(e) {
                    return e(n.axios, n.basePath)
                })
            }, ka.prototype.v2GroupsGroupIdGamesGet = function(e, t, n, r, a, o) {
                var i = this;
                return ja(this.configuration).v2GroupsGroupIdGamesGet(e, t, n, r, a, o).then(function(e) {
                    return e(i.axios, i.basePath)
                })
            }, ka.prototype.v2GroupsGroupIdGamesV2Get = function(e, t, n, r, a, o) {
                var i = this;
                return ja(this.configuration).v2GroupsGroupIdGamesV2Get(e, t, n, r, a, o).then(function(e) {
                    return e(i.axios, i.basePath)
                })
            }, ka.prototype.v2UsersUserIdFavoriteGamesGet = function(e, t, n, r, a, o) {
                var i = this;
                return ja(this.configuration).v2UsersUserIdFavoriteGamesGet(e, t, n, r, a, o).then(function(e) {
                    return e(i.axios, i.basePath)
                })
            }, ka.prototype.v2UsersUserIdGamesGet = function(e, t, n, r, a, o) {
                var i = this;
                return ja(this.configuration).v2UsersUserIdGamesGet(e, t, n, r, a, o).then(function(e) {
                    return e(i.axios, i.basePath)
                })
            }, ka);

            function ka() {
                return null !== Na && Na.apply(this, arguments) || this
            }
            var _a, Wa, Ma, Qa, Ha = new j,
                Va = new Hr,
                Ja = new sa,
                Kr = {
                    getUniverseMedia: function(e) {
                        return Va.v2GamesUniverseIdMediaGet(e, {
                            withCredentials: !0
                        })
                    },
                    getPlayabilityStatus: function(e) {
                        return Ha.v1GamesMultigetPlayabilityStatusGet(e, {
                            withCredentials: !0
                        })
                    },
                    getPlaceDetails: function(e) {
                        return Ha.v1GamesMultigetPlaceDetailsGet(e, {
                            withCredentials: !0
                        })
                    },
                    getProductInfo: function(e) {
                        return Ha.v1GamesGamesProductInfoGet(e, {
                            withCredentials: !0
                        })
                    },
                    getGameDetails: function(e) {
                        return Ha.v1GamesGet(e, {
                            withCredentials: !0
                        })
                    },
                    getGamePasses: function(e, t, n, r) {
                        return Ja.v1GamesUniverseIdGamePassesGet(e, t, n, r)
                    },
                    getGamesSorts: function(e) {
                        return Ha.v1GamesSortsGet(e)
                    },
                    getGamesList: function(e, t, n, r, a, o, i, s, u, c, l, d, h, v, p, f) {
                        return Ha.v1GamesListGet(e, t, n, r, a, o, i, s, u, c, l, d, h, v, p, f)
                    }
                },
                Ka = function(e, i, s, u) {
                    return new(s = s || Promise)(function(n, t) {
                        function r(e) {
                            try {
                                o(u.next(e))
                            } catch (e) {
                                t(e)
                            }
                        }

                        function a(e) {
                            try {
                                o(u.throw(e))
                            } catch (e) {
                                t(e)
                            }
                        }

                        function o(e) {
                            var t;
                            e.done ? n(e.value) : ((t = e.value) instanceof s ? t : new s(function(e) {
                                e(t)
                            })).then(r, a)
                        }
                        o((u = u.apply(e, i || [])).next())
                    })
                },
                Xa = function(n, r) {
                    var a, o, i, s = {
                            label: 0,
                            sent: function() {
                                if (1 & i[0]) throw i[1];
                                return i[1]
                            },
                            trys: [],
                            ops: []
                        },
                        e = {
                            next: t(0),
                            throw: t(1),
                            return: t(2)
                        };
                    return "function" == typeof Symbol && (e[Symbol.iterator] = function() {
                        return this
                    }), e;

                    function t(t) {
                        return function(e) {
                            return function(t) {
                                if (a) throw new TypeError("Generator is already executing.");
                                for (; s;) try {
                                    if (a = 1, o && (i = 2 & t[0] ? o.return : t[0] ? o.throw || ((i = o.return) && i.call(o), 0) : o.next) && !(i = i.call(o, t[1])).done) return i;
                                    switch (o = 0, i && (t = [2 & t[0], i.value]), t[0]) {
                                        case 0:
                                        case 1:
                                            i = t;
                                            break;
                                        case 4:
                                            return s.label++, {
                                                value: t[1],
                                                done: !1
                                            };
                                        case 5:
                                            s.label++, o = t[1], t = [0];
                                            continue;
                                        case 7:
                                            t = s.ops.pop(), s.trys.pop();
                                            continue;
                                        default:
                                            if (!(i = 0 < (i = s.trys).length && i[i.length - 1]) && (6 === t[0] || 2 === t[0])) {
                                                s = 0;
                                                continue
                                            }
                                            if (3 === t[0] && (!i || t[1] > i[0] && t[1] < i[3])) {
                                                s.label = t[1];
                                                break
                                            }
                                            if (6 === t[0] && s.label < i[1]) {
                                                s.label = i[1], i = t;
                                                break
                                            }
                                            if (i && s.label < i[2]) {
                                                s.label = i[2], s.ops.push(t);
                                                break
                                            }
                                            i[2] && s.ops.pop(), s.trys.pop();
                                            continue
                                    }
                                    t = r.call(n, s)
                                } catch (e) {
                                    t = [6, e], o = 0
                                } finally {
                                    a = i = 0
                                }
                                if (5 & t[0]) throw t[1];
                                return {
                                    value: t[0] ? t[1] : void 0,
                                    done: !0
                                }
                            }([t, e])
                        }
                    }
                },
                ea = {
                    getOrCreateCryptoDB: function(e, t) {
                        _a = e, Wa = t;
                        var n = indexedDB.open(_a, 1);
                        return new Promise(function(t, e) {
                            n.onerror = function() {
                                return e(n.error)
                            }, n.onupgradeneeded = function() {
                                var e = n.result;
                                e.createObjectStore(Wa), t(e)
                            }, n.onsuccess = function() {
                                return t(n.result)
                            }
                        })
                    },
                    getCryptoKeyPair: function(r, a) {
                        return Ka(void 0, void 0, Promise, function() {
                            var t, n;
                            return Xa(this, function(e) {
                                switch (e.label) {
                                    case 0:
                                        return [4, a];
                                    case 1:
                                        return t = e.sent(), t = t.transaction(Wa, "readonly"), t = t.objectStore(Wa), n = t.get(r), [2, new Promise(function(e, t) {
                                            n.onsuccess = function() {
                                                return e(n.result)
                                            }, n.onerror = function() {
                                                return t(n.error)
                                            }
                                        })]
                                }
                            })
                        })
                    },
                    putCryptoKeyPair: function(r, a, o) {
                        return Ka(void 0, void 0, Promise, function() {
                            var t, n;
                            return Xa(this, function(e) {
                                switch (e.label) {
                                    case 0:
                                        return [4, o];
                                    case 1:
                                        return t = e.sent(), t = t.transaction(Wa, "readwrite"), t = t.objectStore(Wa), n = t.put(a, r), [2, new Promise(function(e, t) {
                                            n.onsuccess = function() {
                                                return e()
                                            }, n.onerror = function() {
                                                return t(n.error)
                                            }
                                        })]
                                }
                            })
                        })
                    },
                    deleteCryptoDB: function() {
                        return Ka(void 0, void 0, Promise, function() {
                            var n;
                            return Xa(this, function(e) {
                                return n = indexedDB.deleteDatabase(_a), [2, new Promise(function(e, t) {
                                    n.onerror = function() {
                                        return t(n.error)
                                    }, n.onsuccess = function() {
                                        return e()
                                    }
                                })]
                            })
                        })
                    }
                },
                j = (Ma = function(e, t) {
                    return (Ma = Object.setPrototypeOf || {
                            __proto__: []
                        }
                        instanceof Array && function(e, t) {
                            e.__proto__ = t
                        } || function(e, t) {
                            for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n])
                        })(e, t)
                }, function(e, t) {
                    if ("function" != typeof t && null !== t) throw new TypeError("Class extends value " + String(t) + " is not a constructor or null");

                    function n() {
                        this.constructor = e
                    }
                    Ma(e, t), e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n)
                }),
                $a = l.EnvironmentUrls.inventoryApi.replace(/\/+$/, ""),
                Hr = function(e, t, n) {
                    void 0 === t && (t = $a), void 0 === n && (n = q), this.basePath = t, this.axios = n, e && (this.configuration = e, this.basePath = e.basePath || this.basePath)
                },
                Ya = (Qa = Error, j(Za, Qa), Za);

            function Za(e, t) {
                t = Qa.call(this, t) || this;
                return t.field = e, t.name = "RequiredError", t
            }
            var eo, sa = (eo = function(e, t) {
                    return (eo = Object.setPrototypeOf || {
                            __proto__: []
                        }
                        instanceof Array && function(e, t) {
                            e.__proto__ = t
                        } || function(e, t) {
                            for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n])
                        })(e, t)
                }, function(e, t) {
                    if ("function" != typeof t && null !== t) throw new TypeError("Class extends value " + String(t) + " is not a constructor or null");

                    function n() {
                        this.constructor = e
                    }
                    eo(e, t), e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n)
                }),
                to = function() {
                    return (to = Object.assign || function(e) {
                        for (var t, n = 1, r = arguments.length; n < r; n++)
                            for (var a in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
                        return e
                    }).apply(this, arguments)
                };

            function no(u) {
                return {
                    v2AssetsAssetIdOwnersGet: function(e, t, n, r, a) {
                        if (void 0 === a && (a = {}), null == e) throw new Ya("assetId", "Required parameter assetId was null or undefined when calling v2AssetsAssetIdOwnersGet.");
                        var o = "/v2/assets/{assetId}/owners".replace("{assetId}", encodeURIComponent(String(e))),
                            e = T.Qc(o, !0);
                        u && (i = u.baseOptions);
                        var o = to(to({
                                method: "GET"
                            }, i), a),
                            i = {};
                        return void 0 !== t && (i.sortOrder = t), void 0 !== n && (i.limit = n), void 0 !== r && (i.cursor = r), e.query = to(to(to({}, e.query), i), a.query), delete e.search, o.headers = to(to({}, {}), a.headers), {
                            url: T.WU(e),
                            options: o
                        }
                    },
                    v2RecommendationsAssetTypeIdGet: function(e, t, n, r, a, o) {
                        if (void 0 === o && (o = {}), null == e) throw new Ya("assetTypeId", "Required parameter assetTypeId was null or undefined when calling v2RecommendationsAssetTypeIdGet.");
                        var i = "/v2/recommendations/{assetTypeId}".replace("{assetTypeId}", encodeURIComponent(String(e))),
                            e = T.Qc(i, !0);
                        u && (s = u.baseOptions);
                        var i = to(to({
                                method: "GET"
                            }, s), o),
                            s = {};
                        return void 0 !== t && (s.numItems = t), void 0 !== n && (s.contextAssetId = n), void 0 !== r && (s.thumbWidth = r), void 0 !== a && (s.thumbHeight = a), e.query = to(to(to({}, e.query), s), o.query), delete e.search, i.headers = to(to({}, {}), o.headers), {
                            url: T.WU(e),
                            options: i
                        }
                    }
                }
            }

            function ro(s) {
                return {
                    v2AssetsAssetIdOwnersGet: function(e, t, n, r, a) {
                        var o = no(s).v2AssetsAssetIdOwnersGet(e, t, n, r, a);
                        return function(e, t) {
                            void 0 === e && (e = q), void 0 === t && (t = $a);
                            t = to(to({}, o.options), {
                                url: t + o.url
                            });
                            return e.request(t)
                        }
                    },
                    v2RecommendationsAssetTypeIdGet: function(e, t, n, r, a, o) {
                        var i = no(s).v2RecommendationsAssetTypeIdGet(e, t, n, r, a, o);
                        return function(e, t) {
                            void 0 === e && (e = q), void 0 === t && (t = $a);
                            t = to(to({}, i.options), {
                                url: t + i.url
                            });
                            return e.request(t)
                        }
                    }
                }
            }(j = {}).Asc = "Asc", j.Desc = "Desc", (j = {}).Forward = "Forward", j.Backward = "Backward", (j = {}).User = "User", j.Group = "Group", (j = {}).None = "None", j.BC = "BC", j.TBC = "TBC", j.OBC = "OBC", j.RobloxPremium = "RobloxPremium";
            var ao, oo, j = (sa(io, ao = Hr), io.prototype.v2AssetsAssetIdOwnersGet = function(e, t, n, r, a) {
                return ro(this.configuration).v2AssetsAssetIdOwnersGet(e, t, n, r, a)(this.axios, this.basePath)
            }, io.prototype.v2RecommendationsAssetTypeIdGet = function(e, t, n, r, a, o) {
                return ro(this.configuration).v2RecommendationsAssetTypeIdGet(e, t, n, r, a, o)(this.axios, this.basePath)
            }, io);

            function io() {
                return null !== ao && ao.apply(this, arguments) || this
            }

            function so(u) {
                return {
                    v2UsersUserIdInventoryAssetTypeIdGet: function(e, t, n, r, a, o) {
                        var s, i = (s = u, function(e, t, n, r, a, o) {
                            if (void 0 === o && (o = {}), null == e) throw new Ya("userId", "Required parameter userId was null or undefined when calling v2UsersUserIdInventoryAssetTypeIdGet.");
                            if (null == t) throw new Ya("assetTypeId", "Required parameter assetTypeId was null or undefined when calling v2UsersUserIdInventoryAssetTypeIdGet.");
                            e = "/v2/users/{userId}/inventory/{assetTypeId}".replace("{userId}", encodeURIComponent(String(e))).replace("{assetTypeId}", encodeURIComponent(String(t))), t = T.Qc(e, !0);
                            s && (i = s.baseOptions);
                            var e = to(to({
                                    method: "GET"
                                }, i), o),
                                i = {};
                            return void 0 !== n && (i.sortOrder = n), void 0 !== r && (i.limit = r), void 0 !== a && (i.cursor = a), t.query = to(to(to({}, t.query), i), o.query), delete t.search, e.headers = to(to({}, {}), o.headers), {
                                url: T.WU(t),
                                options: e
                            }
                        }(e, t, n, r, a, o));
                        return function(e, t) {
                            void 0 === e && (e = q), void 0 === t && (t = $a);
                            t = to(to({}, i.options), {
                                url: t + i.url
                            });
                            return e.request(t)
                        }
                    }
                }
            }

            function uo() {
                return null !== oo && oo.apply(this, arguments) || this
            }
            sa(uo, oo = Hr), uo.prototype.v2UsersUserIdInventoryAssetTypeIdGet = function(e, t, n, r, a, o) {
                return so(this.configuration).v2UsersUserIdInventoryAssetTypeIdGet(e, t, n, r, a, o)(this.axios, this.basePath)
            };
            var co, lo, ho = new j,
                sa = {
                    getRecommendations: function(e, t, n) {
                        return ho.v2RecommendationsAssetTypeIdGet(e, t, n)
                    }
                },
                vo = {
                    getUserKey: function(e) {
                        return "user_" + e
                    },
                    storage: function() {
                        return l.LocalStorage ? l.LocalStorage.isAvailable() : localStorage
                    },
                    getLength: function() {
                        return this.storage() ? localStorage.length : 0
                    },
                    getKey: function(e) {
                        return this.storage() ? localStorage.key(e) : ""
                    },
                    setLocalStorage: function(e, t) {
                        this.storage() && localStorage.setItem(e, JSON.stringify(t))
                    },
                    getLocalStorage: function(e) {
                        if (this.storage()) return JSON.parse(localStorage.getItem(e))
                    },
                    listenLocalStorage: function(e) {
                        this.storage() && void 0 !== e && (window.addEventListener ? window.addEventListener("storage", e, !1) : window.attachEvent("onstorage", e))
                    },
                    removeLocalStorage: function(e) {
                        this.storage() && localStorage.removeItem(e)
                    },
                    saveDataByTimeStamp: function(e, t) {
                        var n = (new Date).getTime(),
                            r = this.getLocalStorage(e);
                        (r = r || {}).data = t, r.timeStamp = n, this.setLocalStorage(e, r)
                    },
                    fetchNonExpiredCachedData: function(e, t) {
                        var n = (new Date).getTime(),
                            r = this.getLocalStorage(e);
                        if (r && r.timeStamp) {
                            if (n - r.timeStamp < (t = t || 3e4)) return r;
                            this.removeLocalStorage(e)
                        }
                        return null
                    }
                },
                Hr = (co = function(e, t) {
                    return (co = Object.setPrototypeOf || {
                            __proto__: []
                        }
                        instanceof Array && function(e, t) {
                            e.__proto__ = t
                        } || function(e, t) {
                            for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n])
                        })(e, t)
                }, function(e, t) {
                    if ("function" != typeof t && null !== t) throw new TypeError("Class extends value " + String(t) + " is not a constructor or null");

                    function n() {
                        this.constructor = e
                    }
                    co(e, t), e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n)
                }),
                po = l.EnvironmentUrls.localeApi.replace(/\/+$/, ""),
                j = function(e, t, n) {
                    void 0 === t && (t = po), void 0 === n && (n = q), this.basePath = t, this.axios = n, e && (this.configuration = e, this.basePath = e.basePath || this.basePath)
                },
                fo = (lo = Error, Hr(mo, lo), mo);

            function mo(e, t) {
                t = lo.call(this, t) || this;
                return t.field = e, t.name = "RequiredError", t
            }

            function go(o) {
                return {
                    v1CountryRegionsGet: function(e) {
                        void 0 === e && (e = {});
                        var t = T.Qc("/v1/country-regions", !0);
                        o && (n = o.baseOptions);
                        var n = wo(wo({
                            method: "GET"
                        }, n), e);
                        return t.query = wo(wo(wo({}, t.query), {}), e.query), delete t.search, n.headers = wo(wo({}, {}), e.headers), {
                            url: T.WU(t),
                            options: n
                        }
                    },
                    v1CountryRegionsUserCountryRegionGet: function(e) {
                        void 0 === e && (e = {});
                        var t = T.Qc("/v1/country-regions/user-country-region", !0);
                        o && (n = o.baseOptions);
                        var n = wo(wo({
                            method: "GET"
                        }, n), e);
                        return t.query = wo(wo(wo({}, t.query), {}), e.query), delete t.search, n.headers = wo(wo({}, {}), e.headers), {
                            url: T.WU(t),
                            options: n
                        }
                    },
                    v1CountryRegionsUserCountryRegionPatch: function(e, t) {
                        if (void 0 === t && (t = {}), null == e) throw new fo("userRequest", "Required parameter userRequest was null or undefined when calling v1CountryRegionsUserCountryRegionPatch.");
                        var n = T.Qc("/v1/country-regions/user-country-region", !0);
                        o && (a = o.baseOptions);
                        var r = wo(wo({
                                method: "PATCH"
                            }, a), t),
                            a = {};
                        a["Content-Type"] = "application/json", n.query = wo(wo(wo({}, n.query), {}), t.query), delete n.search, r.headers = wo(wo({}, a), t.headers);
                        return r.data = JSON.stringify(void 0 !== e ? e : {}), {
                            url: T.WU(n),
                            options: r
                        }
                    }
                }
            }

            function yo(r) {
                return {
                    v1CountryRegionsGet: function(e) {
                        var n = go(r).v1CountryRegionsGet(e);
                        return function(e, t) {
                            void 0 === e && (e = q), void 0 === t && (t = po);
                            t = wo(wo({}, n.options), {
                                url: t + n.url
                            });
                            return e.request(t)
                        }
                    },
                    v1CountryRegionsUserCountryRegionGet: function(e) {
                        var n = go(r).v1CountryRegionsUserCountryRegionGet(e);
                        return function(e, t) {
                            void 0 === e && (e = q), void 0 === t && (t = po);
                            t = wo(wo({}, n.options), {
                                url: t + n.url
                            });
                            return e.request(t)
                        }
                    },
                    v1CountryRegionsUserCountryRegionPatch: function(e, t) {
                        var n = go(r).v1CountryRegionsUserCountryRegionPatch(e, t);
                        return function(e, t) {
                            void 0 === e && (e = q), void 0 === t && (t = po);
                            t = wo(wo({}, n.options), {
                                url: t + n.url
                            });
                            return e.request(t)
                        }
                    }
                }
            }
            var Go, Io, bo, Po, Hr = (Go = function(e, t) {
                    return (Go = Object.setPrototypeOf || {
                            __proto__: []
                        }
                        instanceof Array && function(e, t) {
                            e.__proto__ = t
                        } || function(e, t) {
                            for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n])
                        })(e, t)
                }, function(e, t) {
                    if ("function" != typeof t && null !== t) throw new TypeError("Class extends value " + String(t) + " is not a constructor or null");

                    function n() {
                        this.constructor = e
                    }
                    Go(e, t), e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n)
                }),
                wo = function() {
                    return (wo = Object.assign || function(e) {
                        for (var t, n = 1, r = arguments.length; n < r; n++)
                            for (var a in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
                        return e
                    }).apply(this, arguments)
                };

            function Co() {
                return null !== Io && Io.apply(this, arguments) || this
            }

            function To(r) {
                return {
                    v1LanguagesGet: function(e) {
                        void 0 === e && (e = {});
                        var t = T.Qc("/v1/languages", !0);
                        r && (n = r.baseOptions);
                        var n = wo(wo({
                            method: "GET"
                        }, n), e);
                        return t.query = wo(wo(wo({}, t.query), {}), e.query), delete t.search, n.headers = wo(wo({}, {}), e.headers), {
                            url: T.WU(t),
                            options: n
                        }
                    },
                    v1LanguagesUserGeneratedContentGet: function(e) {
                        void 0 === e && (e = {});
                        var t = T.Qc("/v1/languages/user-generated-content", !0);
                        r && (n = r.baseOptions);
                        var n = wo(wo({
                            method: "GET"
                        }, n), e);
                        return t.query = wo(wo(wo({}, t.query), {}), e.query), delete t.search, n.headers = wo(wo({}, {}), e.headers), {
                            url: T.WU(t),
                            options: n
                        }
                    }
                }
            }

            function Ao(t) {
                return {
                    v1LanguagesGet: function(e) {
                        var n = To(t).v1LanguagesGet(e);
                        return function(e, t) {
                            void 0 === e && (e = q), void 0 === t && (t = po);
                            t = wo(wo({}, n.options), {
                                url: t + n.url
                            });
                            return e.request(t)
                        }
                    },
                    v1LanguagesUserGeneratedContentGet: function(e) {
                        var n = To(t).v1LanguagesUserGeneratedContentGet(e);
                        return function(e, t) {
                            void 0 === e && (e = q), void 0 === t && (t = po);
                            t = wo(wo({}, n.options), {
                                url: t + n.url
                            });
                            return e.request(t)
                        }
                    }
                }
            }

            function Lo() {
                return null !== bo && bo.apply(this, arguments) || this
            }

            function qo(o) {
                return {
                    v1LocalesGet: function(e) {
                        void 0 === e && (e = {});
                        var t = T.Qc("/v1/locales", !0);
                        o && (n = o.baseOptions);
                        var n = wo(wo({
                            method: "GET"
                        }, n), e);
                        return t.query = wo(wo(wo({}, t.query), {}), e.query), delete t.search, n.headers = wo(wo({}, {}), e.headers), {
                            url: T.WU(t),
                            options: n
                        }
                    },
                    v1LocalesSetUserSupportedLocalePost: function(e, t) {
                        if (void 0 === t && (t = {}), null == e) throw new fo("userRequest", "Required parameter userRequest was null or undefined when calling v1LocalesSetUserSupportedLocalePost.");
                        var n = T.Qc("/v1/locales/set-user-supported-locale", !0);
                        o && (a = o.baseOptions);
                        var r = wo(wo({
                                method: "POST"
                            }, a), t),
                            a = {};
                        a["Content-Type"] = "application/json", n.query = wo(wo(wo({}, n.query), {}), t.query), delete n.search, r.headers = wo(wo({}, a), t.headers);
                        return r.data = JSON.stringify(void 0 !== e ? e : {}), {
                            url: T.WU(n),
                            options: r
                        }
                    },
                    v1LocalesSupportedLocalesGet: function(e) {
                        void 0 === e && (e = {});
                        var t = T.Qc("/v1/locales/supported-locales", !0);
                        o && (n = o.baseOptions);
                        var n = wo(wo({
                            method: "GET"
                        }, n), e);
                        return t.query = wo(wo(wo({}, t.query), {}), e.query), delete t.search, n.headers = wo(wo({}, {}), e.headers), {
                            url: T.WU(t),
                            options: n
                        }
                    },
                    v1LocalesUserLocaleGet: function(e) {
                        void 0 === e && (e = {});
                        var t = T.Qc("/v1/locales/user-locale", !0);
                        o && (n = o.baseOptions);
                        var n = wo(wo({
                            method: "GET"
                        }, n), e);
                        return t.query = wo(wo(wo({}, t.query), {}), e.query), delete t.search, n.headers = wo(wo({}, {}), e.headers), {
                            url: T.WU(t),
                            options: n
                        }
                    },
                    v1LocalesUserLocalizationLocusSupportedLocalesGet: function(e) {
                        void 0 === e && (e = {});
                        var t = T.Qc("/v1/locales/user-localization-locus-supported-locales", !0);
                        o && (n = o.baseOptions);
                        var n = wo(wo({
                            method: "GET"
                        }, n), e);
                        return t.query = wo(wo(wo({}, t.query), {}), e.query), delete t.search, n.headers = wo(wo({}, {}), e.headers), {
                            url: T.WU(t),
                            options: n
                        }
                    }
                }
            }

            function So(r) {
                return {
                    v1LocalesGet: function(e) {
                        var n = qo(r).v1LocalesGet(e);
                        return function(e, t) {
                            void 0 === e && (e = q), void 0 === t && (t = po);
                            t = wo(wo({}, n.options), {
                                url: t + n.url
                            });
                            return e.request(t)
                        }
                    },
                    v1LocalesSetUserSupportedLocalePost: function(e, t) {
                        var n = qo(r).v1LocalesSetUserSupportedLocalePost(e, t);
                        return function(e, t) {
                            void 0 === e && (e = q), void 0 === t && (t = po);
                            t = wo(wo({}, n.options), {
                                url: t + n.url
                            });
                            return e.request(t)
                        }
                    },
                    v1LocalesSupportedLocalesGet: function(e) {
                        var n = qo(r).v1LocalesSupportedLocalesGet(e);
                        return function(e, t) {
                            void 0 === e && (e = q), void 0 === t && (t = po);
                            t = wo(wo({}, n.options), {
                                url: t + n.url
                            });
                            return e.request(t)
                        }
                    },
                    v1LocalesUserLocaleGet: function(e) {
                        var n = qo(r).v1LocalesUserLocaleGet(e);
                        return function(e, t) {
                            void 0 === e && (e = q), void 0 === t && (t = po);
                            t = wo(wo({}, n.options), {
                                url: t + n.url
                            });
                            return e.request(t)
                        }
                    },
                    v1LocalesUserLocalizationLocusSupportedLocalesGet: function(e) {
                        var n = qo(r).v1LocalesUserLocalizationLocusSupportedLocalesGet(e);
                        return function(e, t) {
                            void 0 === e && (e = q), void 0 === t && (t = po);
                            t = wo(wo({}, n.options), {
                                url: t + n.url
                            });
                            return e.request(t)
                        }
                    }
                }
            }

            function Uo() {
                return null !== Po && Po.apply(this, arguments) || this
            }
            Hr(Co, Io = j), Co.prototype.v1CountryRegionsGet = function(e) {
                return yo(this.configuration).v1CountryRegionsGet(e)(this.axios, this.basePath)
            }, Co.prototype.v1CountryRegionsUserCountryRegionGet = function(e) {
                return yo(this.configuration).v1CountryRegionsUserCountryRegionGet(e)(this.axios, this.basePath)
            }, Co.prototype.v1CountryRegionsUserCountryRegionPatch = function(e, t) {
                return yo(this.configuration).v1CountryRegionsUserCountryRegionPatch(e, t)(this.axios, this.basePath)
            }, Hr(Lo, bo = j), Lo.prototype.v1LanguagesGet = function(e) {
                return Ao(this.configuration).v1LanguagesGet(e)(this.axios, this.basePath)
            }, Lo.prototype.v1LanguagesUserGeneratedContentGet = function(e) {
                return Ao(this.configuration).v1LanguagesUserGeneratedContentGet(e)(this.axios, this.basePath)
            };
            var Ro, Oo = new(Hr(Uo, Po = j), Uo.prototype.v1LocalesGet = function(e) {
                return So(this.configuration).v1LocalesGet(e)(this.axios, this.basePath)
            }, Uo.prototype.v1LocalesSetUserSupportedLocalePost = function(e, t) {
                return So(this.configuration).v1LocalesSetUserSupportedLocalePost(e, t)(this.axios, this.basePath)
            }, Uo.prototype.v1LocalesSupportedLocalesGet = function(e) {
                return So(this.configuration).v1LocalesSupportedLocalesGet(e)(this.axios, this.basePath)
            }, Uo.prototype.v1LocalesUserLocaleGet = function(e) {
                return So(this.configuration).v1LocalesUserLocaleGet(e)(this.axios, this.basePath)
            }, Uo.prototype.v1LocalesUserLocalizationLocusSupportedLocalesGet = function(e) {
                return So(this.configuration).v1LocalesUserLocalizationLocusSupportedLocalesGet(e)(this.axios, this.basePath)
            }, Uo);

            function Do() {
                return Oo.v1LocalesGet({
                    withCredentials: !0
                })
            }(Ro = Ro || {}).getLocales = "Roblox.Api.Locales.getLocales";
            var xo, j = {
                    getLocales: Do,
                    getUserLocale: function() {
                        return Oo.v1LocalesUserLocalizationLocusSupportedLocalesGet({
                            withCredentials: !0
                        })
                    },
                    setUserLocale: function(e) {
                        e = {
                            supportedLocaleCode: e
                        };
                        return Oo.v1LocalesSetUserSupportedLocalePost(e, {
                            withCredentials: !0
                        })
                    },
                    getLocalesWithCache: function(e) {
                        return r = Do, a = Ro.getLocales, o = e, new Promise(function(t, n) {
                            var e = vo.fetchNonExpiredCachedData(a, o);
                            e ? t(e.data) : r().then(function(e) {
                                vo.saveDataByTimeStamp(a, e.data), t(e.data)
                            }, function(e) {
                                return n(e)
                            })
                        });
                        var r, a, o
                    }
                },
                Eo = new Ue,
                Bo = new y,
                Fo = new X,
                zo = new Oe,
                jo = new W,
                No = new B,
                ko = new Br,
                _o = new Dn,
                Oe = {
                    getAssets: function(e, t, n, r, a) {
                        return Eo.v1AssetsGet(e, t, n, r, a, {
                            withCredentials: !0
                        })
                    },
                    getAvatars: function(e, t, n, r) {
                        return Fo.v1UsersAvatarGet(e, t, n, r, {
                            withCredentials: !0
                        })
                    },
                    getAvatarHeadshots: function(e, t, n, r) {
                        return Fo.v1UsersAvatarHeadshotGet(e, t, n, r, {
                            withCredentials: !0
                        })
                    },
                    getGroupIcons: function(e, t, n, r) {
                        return zo.v1GroupsIconsGet(e, t, n, r, {
                            withCredentials: !0
                        })
                    },
                    getBadgeIcons: function(e, t, n, r) {
                        return jo.v1BadgesIconsGet(e, t, n, r, {
                            withCredentials: !0
                        })
                    },
                    getDeveloperProductIcons: function(e, t, n, r) {
                        return No.v1DeveloperProductsIconsGet(e, t, n, r, {
                            withCredentials: !0
                        })
                    },
                    getBundles: function(e, t, n, r) {
                        return Bo.v1BundlesThumbnailsGet(e, t, n, r, {
                            withCredentials: !0
                        })
                    },
                    getUserOutfits: function(e, t, n, r) {
                        return ko.v1UsersOutfitsGet(e, t, n, r, {
                            withCredentials: !0
                        })
                    },
                    getBatchThumbnails: function(e) {
                        return _o.v1BatchPost(e, {
                            withCredentials: !0
                        })
                    }
                },
                Wo = new pt;
            (W = xo = xo || {}).Language = "Language", W.Locale = "Locale";
            var Mo, Qo, B = {
                    getTranslationProgress: function(e, t) {
                        return Wo.v1GameLocalizationStatusTranslationCountsForLanguageOrLocaleGet(e, t, xo.Language, {
                            withCredentials: !0
                        })
                    }
                },
                Br = (Mo = function(e, t) {
                    return (Mo = Object.setPrototypeOf || {
                            __proto__: []
                        }
                        instanceof Array && function(e, t) {
                            e.__proto__ = t
                        } || function(e, t) {
                            for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n])
                        })(e, t)
                }, function(e, t) {
                    if ("function" != typeof t && null !== t) throw new TypeError("Class extends value " + String(t) + " is not a constructor or null");

                    function n() {
                        this.constructor = e
                    }
                    Mo(e, t), e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n)
                }),
                Ho = l.EnvironmentUrls.translationRolesApi.replace(/\/+$/, ""),
                Dn = function(e, t, n) {
                    void 0 === t && (t = Ho), void 0 === n && (n = q), this.basePath = t, this.axios = n, e && (this.configuration = e, this.basePath = e.basePath || this.basePath)
                },
                Vo = (Qo = Error, Br(Jo, Qo), Jo);

            function Jo(e, t) {
                t = Qo.call(this, t) || this;
                return t.field = e, t.name = "RequiredError", t
            }
            var Ko, Xo, pt = (Ko = function(e, t) {
                    return (Ko = Object.setPrototypeOf || {
                            __proto__: []
                        }
                        instanceof Array && function(e, t) {
                            e.__proto__ = t
                        } || function(e, t) {
                            for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n])
                        })(e, t)
                }, function(e, t) {
                    if ("function" != typeof t && null !== t) throw new TypeError("Class extends value " + String(t) + " is not a constructor or null");

                    function n() {
                        this.constructor = e
                    }
                    Ko(e, t), e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n)
                }),
                $o = function() {
                    return ($o = Object.assign || function(e) {
                        for (var t, n = 1, r = arguments.length; n < r; n++)
                            for (var a in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
                        return e
                    }).apply(this, arguments)
                };

            function Yo(i) {
                return {
                    v1GameLocalizationRolesGamesGameIdCurrentUserRolesGet: function(e, t) {
                        if (void 0 === t && (t = {}), null == e) throw new Vo("gameId", "Required parameter gameId was null or undefined when calling v1GameLocalizationRolesGamesGameIdCurrentUserRolesGet.");
                        e = "/v1/game-localization-roles/games/{gameId}/current-user/roles".replace("{gameId}", encodeURIComponent(String(e))), e = T.Qc(e, !0);
                        i && (n = i.baseOptions);
                        var n = $o($o({
                            method: "GET"
                        }, n), t);
                        return e.query = $o($o($o({}, e.query), {}), t.query), delete e.search, n.headers = $o($o({}, {}), t.headers), {
                            url: T.WU(e),
                            options: n
                        }
                    },
                    v1GameLocalizationRolesGamesGameIdPatch: function(e, t, n) {
                        if (void 0 === n && (n = {}), null == e) throw new Vo("gameId", "Required parameter gameId was null or undefined when calling v1GameLocalizationRolesGamesGameIdPatch.");
                        if (null == t) throw new Vo("request", "Required parameter request was null or undefined when calling v1GameLocalizationRolesGamesGameIdPatch.");
                        var r = "/v1/game-localization-roles/games/{gameId}".replace("{gameId}", encodeURIComponent(String(e))),
                            e = T.Qc(r, !0);
                        i && (a = i.baseOptions);
                        var r = $o($o({
                                method: "PATCH"
                            }, a), n),
                            a = {};
                        a["Content-Type"] = "application/json", e.query = $o($o($o({}, e.query), {}), n.query), delete e.search, r.headers = $o($o({}, a), n.headers);
                        return r.data = JSON.stringify(void 0 !== t ? t : {}), {
                            url: T.WU(e),
                            options: r
                        }
                    },
                    v1GameLocalizationRolesGamesGameIdRolesRoleAssigneesGet: function(e, t, n) {
                        if (void 0 === n && (n = {}), null == e) throw new Vo("gameId", "Required parameter gameId was null or undefined when calling v1GameLocalizationRolesGamesGameIdRolesRoleAssigneesGet.");
                        if (null == t) throw new Vo("role", "Required parameter role was null or undefined when calling v1GameLocalizationRolesGamesGameIdRolesRoleAssigneesGet.");
                        t = "/v1/game-localization-roles/games/{gameId}/roles/{role}/assignees".replace("{gameId}", encodeURIComponent(String(e))).replace("{role}", encodeURIComponent(String(t))), t = T.Qc(t, !0);
                        i && (r = i.baseOptions);
                        var r = $o($o({
                            method: "GET"
                        }, r), n);
                        return t.query = $o($o($o({}, t.query), {}), n.query), delete t.search, r.headers = $o($o({}, {}), n.headers), {
                            url: T.WU(t),
                            options: r
                        }
                    },
                    v1GameLocalizationRolesRolesRoleCurrentUserGet: function(e, t, n, r) {
                        if (void 0 === r && (r = {}), null == e) throw new Vo("role", "Required parameter role was null or undefined when calling v1GameLocalizationRolesRolesRoleCurrentUserGet.");
                        var a = "/v1/game-localization-roles/roles/{role}/current-user".replace("{role}", encodeURIComponent(String(e))),
                            e = T.Qc(a, !0);
                        i && (o = i.baseOptions);
                        var a = $o($o({
                                method: "GET"
                            }, o), r),
                            o = {};
                        return void 0 !== t && (o.exclusiveStartKey = t), void 0 !== n && (o.pageSize = n), e.query = $o($o($o({}, e.query), o), r.query), delete e.search, a.headers = $o($o({}, {}), r.headers), {
                            url: T.WU(e),
                            options: a
                        }
                    }
                }
            }

            function Zo(o) {
                return {
                    v1GameLocalizationRolesGamesGameIdCurrentUserRolesGet: function(e, t) {
                        var n = Yo(o).v1GameLocalizationRolesGamesGameIdCurrentUserRolesGet(e, t);
                        return function(e, t) {
                            void 0 === e && (e = q), void 0 === t && (t = Ho);
                            t = $o($o({}, n.options), {
                                url: t + n.url
                            });
                            return e.request(t)
                        }
                    },
                    v1GameLocalizationRolesGamesGameIdPatch: function(e, t, n) {
                        var r = Yo(o).v1GameLocalizationRolesGamesGameIdPatch(e, t, n);
                        return function(e, t) {
                            void 0 === e && (e = q), void 0 === t && (t = Ho);
                            t = $o($o({}, r.options), {
                                url: t + r.url
                            });
                            return e.request(t)
                        }
                    },
                    v1GameLocalizationRolesGamesGameIdRolesRoleAssigneesGet: function(e, t, n) {
                        var r = Yo(o).v1GameLocalizationRolesGamesGameIdRolesRoleAssigneesGet(e, t, n);
                        return function(e, t) {
                            void 0 === e && (e = q), void 0 === t && (t = Ho);
                            t = $o($o({}, r.options), {
                                url: t + r.url
                            });
                            return e.request(t)
                        }
                    },
                    v1GameLocalizationRolesRolesRoleCurrentUserGet: function(e, t, n, r) {
                        var a = Yo(o).v1GameLocalizationRolesRolesRoleCurrentUserGet(e, t, n, r);
                        return function(e, t) {
                            void 0 === e && (e = q), void 0 === t && (t = Ho);
                            t = $o($o({}, a.options), {
                                url: t + a.url
                            });
                            return e.request(t)
                        }
                    }
                }
            }

            function ei() {
                return null !== Xo && Xo.apply(this, arguments) || this
            }(W = {}).User = "user", W.Group = "group", W.GroupRole = "groupRole", (Br = {}).User = "user", Br.Group = "group", Br.GroupRole = "groupRole", (W = {}).User = "user", W.Group = "group", W.GroupRole = "groupRole";
            var ti, ni = new(pt(ei, Xo = Dn), ei.prototype.v1GameLocalizationRolesGamesGameIdCurrentUserRolesGet = function(e, t) {
                return Zo(this.configuration).v1GameLocalizationRolesGamesGameIdCurrentUserRolesGet(e, t)(this.axios, this.basePath)
            }, ei.prototype.v1GameLocalizationRolesGamesGameIdPatch = function(e, t, n) {
                return Zo(this.configuration).v1GameLocalizationRolesGamesGameIdPatch(e, t, n)(this.axios, this.basePath)
            }, ei.prototype.v1GameLocalizationRolesGamesGameIdRolesRoleAssigneesGet = function(e, t, n) {
                return Zo(this.configuration).v1GameLocalizationRolesGamesGameIdRolesRoleAssigneesGet(e, t, n)(this.axios, this.basePath)
            }, ei.prototype.v1GameLocalizationRolesRolesRoleCurrentUserGet = function(e, t, n, r) {
                return Zo(this.configuration).v1GameLocalizationRolesRolesRoleCurrentUserGet(e, t, n, r)(this.axios, this.basePath)
            }, ei);
            (ti = ti || {}).Translator = "translator";
            var ri, Br = {
                    getGamesListForTranslator: function(e, t) {
                        return ni.v1GameLocalizationRolesRolesRoleCurrentUserGet(ti.Translator, t, e, {
                            withCredentials: !0
                        })
                    }
                },
                ai = {
                    useCache: !1,
                    expirationWindowMS: 3e4
                };

            function oi(t, n) {
                return function(e) {
                    e = Math.pow(2, e - 1) * t;
                    return Math.min(n, e)
                }
            }

            function ii(e, t) {
                this.store = new Map, this.useCache = e || !1, this.expirationWindowMS = t || 3e4, this.storeKeyPrefix = "CacheStore:BatchRequestProcessor::"
            }(W = ri = ri || {}).processFailure = "processFailure", W.unretriableFailure = "unretriableFailure", W.maxAttemptsReached = "maxAttemptsReached";
            var si = (ii.prototype.getCacheKey = function(e) {
                    return "" + this.storeKeyPrefix + e
                }, ii.prototype.has = function(e, t) {
                    var n = t.useCache,
                        t = t.expirationWindowMS,
                        e = this.getCacheKey(e);
                    return (n || this.useCache) && localStorage ? !!vo.fetchNonExpiredCachedData(e, t || this.expirationWindowMS) : this.store.has(e)
                }, ii.prototype.set = function(e, t, n) {
                    n = n.useCache, e = this.getCacheKey(e);
                    (n || this.useCache) && localStorage && vo.saveDataByTimeStamp(e, t), this.store.set(e, t)
                }, ii.prototype.get = function(e, t) {
                    var n, r = t.useCache,
                        t = t.expirationWindowMS,
                        e = this.getCacheKey(e);
                    return (r || this.useCache) && localStorage ? null == (n = vo.fetchNonExpiredCachedData(e, t || this.expirationWindowMS)) ? void 0 : n.data : (n && this.store.set(e, null == n ? void 0 : n.data), this.store.get(e))
                }, ii.prototype.delete = function(e) {
                    e = this.getCacheKey(e);
                    localStorage && vo.removeLocalStorage(e), this.store.delete(e)
                }, ii.prototype.clear = function() {
                    if (this.store.clear(), localStorage) {
                        for (var e = [], t = 0; t < localStorage.length; t++) {
                            var n = localStorage.key(t);
                            n.includes(this.storeKeyPrefix) && e.push(n)
                        }
                        for (var r = 0; r < e.length; r++) localStorage.removeItem(e[r])
                    }
                }, ii),
                ui = function() {
                    return (ui = Object.assign || function(e) {
                        for (var t, n = 1, r = arguments.length; n < r; n++)
                            for (var a in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
                        return e
                    }).apply(this, arguments)
                };

            function ci(e, t, n) {
                this.requestQueue = [], this.concurrentRequestCount = 1, this.isQueueActive = !1, this.debug = !1;
                var r = n.cacheProperties,
                    a = n.processBatchWaitTime,
                    o = n.batchSize,
                    i = n.maxRetryAttempts,
                    s = n.getItemExpiration,
                    u = n.getFailureCooldown,
                    c = n.debugMode,
                    l = n.concurrentRequestCount,
                    d = r.useCache,
                    n = r.expirationWindowMS;
                this.cacheProperties = r, this.completeItems = new si(d, n), this.processBatchWaitTime = a, this.batchSize = o, this.maxRetryAttempts = i, this.getItemExpiration = s, this.getFailureCooldown = u, this.itemsProcessor = e, this.itemsSerializer = t, this.debug = c || !1, this.processorId = Date.now(), this.concurrentRequestCount = l
            }
            var li = (ci.prototype.handleBatchResult = function(e, n) {
                var r = this,
                    a = 0,
                    o = (new Date).getTime();
                e.forEach(function(e) {
                    var t;
                    r.completeItems.has(e.key, e.cacheProperties) ? (t = (new Date).getTime(), e.resolve(ui(ui({}, r.completeItems.get(e.key, e.cacheProperties)), {
                        performance: {
                            duration: t - e.startTime.getTime(),
                            retryAttempts: e.retryAttempts
                        }
                    }))) : r.maxRetryAttempts && n !== ri.unretriableFailure ? (t = r.getFailureCooldown ? r.getFailureCooldown(e.retryAttempts) : 1e3, a = 0 < a ? Math.min(a, t) : t, ++e.retryAttempts <= r.maxRetryAttempts ? (e.queueAfter = o + t, r.requestQueue.unshift(e)) : e.reject(ri.maxAttemptsReached)) : (console.debug(n, e), e.reject(n))
                }), this.processEndTime = Date.now(), this.debug && console.debug(this.processorId + ": process queue ended", {
                    duration: this.processEndTime - this.processStartTime,
                    requestQueue: this.requestQueue,
                    minimumCooldown: a,
                    processBatchWaitTime: this.processBatchWaitTime
                }), 0 < a && setTimeout(function() {
                    return r.processQueue()
                }, a + this.processBatchWaitTime), this.concurrentRequestCount += 1, this.processQueue()
            }, ci.prototype.processQueue = function() {
                var e, r = this;
                if (0 !== this.concurrentRequestCount && !this.isQueueActive) {
                    this.processStartTime = Date.now();
                    var t = [],
                        a = new Map,
                        n = [],
                        o = (new Date).getTime();
                    for (this.isQueueActive = !0; t.length < this.batchSize && 0 < this.requestQueue.length;) {
                        var i, s = this.requestQueue.shift();
                        s.queueAfter > o ? (a.set(s.key, s), n.push(s)) : this.completeItems.has(s.key, s.cacheProperties) ? (i = (new Date).getTime(), s.resolve(ui(ui({}, this.completeItems.get(s.key, s.cacheProperties)), {
                            performance: {
                                duration: i - s.startTime.getTime()
                            }
                        }))) : a.has(s.key) ? n.push(s) : (a.set(s.key, s), t.push(s))
                    }(e = this.requestQueue).push.apply(e, n), this.isQueueActive = !1, t.length <= 0 || (--this.concurrentRequestCount, this.processQueue(), this.debug && console.debug(this.processorId + ": process queue start", {
                        timeSinceLastStart: this.processEndTime ? this.processStartTime - this.processEndTime : 0,
                        startTime: this.processStartTime,
                        requestQueue: this.requestQueue,
                        batch: t.map(function(e) {
                            return e.key
                        })
                    }), this.itemsProcessor(t).then(function(e) {
                        Object.entries(e).forEach(function(e) {
                            var t = e[0],
                                n = e[1],
                                e = a.get(t);
                            r.saveCompleteItem(t, n, null == e ? void 0 : e.cacheProperties)
                        }), r.handleBatchResult(t, ri.processFailure)
                    }, function(e) {
                        r.handleBatchResult(t, e)
                    }))
                }
            }, ci.prototype.saveCompleteItem = function(e, t, n) {
                var r = this;
                this.completeItems.set(e, t, n || this.cacheProperties), this.getItemExpiration && setTimeout(function() {
                    r.completeItems.delete(e)
                }, this.getItemExpiration(e))
            }, ci.prototype.queueItem = function(n, r, a) {
                var o = this;
                return new Promise(function(e, t) {
                    o.requestQueue.push({
                        key: r || o.itemsSerializer(n),
                        itemId: n,
                        data: n,
                        retryAttempts: 0,
                        queueAfter: 0,
                        startTime: new Date,
                        cacheProperties: a || o.cacheProperties,
                        resolve: e,
                        reject: t
                    }), setTimeout(function() {
                        return o.processQueue()
                    }, o.processBatchWaitTime)
                })
            }, ci.prototype.invalidateItem = function(e, t) {
                e = t || this.itemsSerializer(e);
                return this.completeItems.delete(e)
            }, ci.prototype.clearCache = function() {
                this.completeItems.clear()
            }, ci);

            function di() {
                this.createExponentialBackoffCooldown = oi
            }
            new(pt = (di.prototype.createRequestProcessor = function(e, t, n) {
                return n.processBatchWaitTime || (n.processBatchWaitTime = 10), n.maxRetryAttempts || (n.maxRetryAttempts = 2), n.cacheProperties || (n.cacheProperties = ai), n.concurrentRequestCount || (n.concurrentRequestCount = 1), new li(e, t, n)
            }, di));
            var hi, vi = l.EnvironmentUrls.friendsApi,
                pi = l.EnvironmentUrls.presenceApi,
                fi = l.EnvironmentUrls.usersApi;

            function mi(e, t) {
                return t = vi + "/v1/users/" + t + "/" + e, e === hi.Requests && (t = vi + "/v1/my/friends/requests"), {
                    url: t,
                    retryable: !0,
                    withCredentials: !0
                }
            }

            function gi() {
                return {
                    url: pi + "/v1/presence/users",
                    retryable: !1,
                    withCredentials: !0
                }
            }

            function yi(s) {
                return function(e) {
                    var t, n, r = e[0],
                        u = r.key,
                        a = r.data,
                        o = a.userId,
                        c = a.isGuest,
                        i = mi(s, o),
                        t = (n = (t = a).cursor, e = t.sortOrder, r = t.userSort, o = t.limit, a = t.fetchMutualFriends, t = {}, n && Object.assign(t, {
                            cursor: n
                        }), e && Object.assign(t, {
                            sortOrder: e
                        }), r && Object.assign(t, {
                            userSort: r
                        }), o && Object.assign(t, {
                            limit: o
                        }), a && Object.assign(t, {
                            fetchMutualFriends: a
                        }), t);
                    return E.get(i, t).then(function(e) {
                        var r = {};
                        if (null == e || !e.data) return r[u] = {
                            userData: []
                        }, r;
                        var t, n = e.data,
                            a = n.data,
                            o = n.previousPageCursor,
                            i = n.nextPageCursor,
                            s = (t = {}, a.forEach(function(e) {
                                t[e.id] = e, t[e.id].profileUrl = "/users/" + e.id + "/profile", t[e.id].presence = {}
                            }), t);
                        if (c) return r[u] = {
                            userData: a,
                            prevCursor: o,
                            nextCursor: i
                        }, r;
                        e = gi(), n = Object.keys(s).map(function(e) {
                            return parseInt(e, 10)
                        });
                        return E.post(e, {
                            userIds: n
                        }).then(function(e) {
                            var t, n;
                            return t = s, 0 < (null === (e = null === (e = null == (n = e) ? void 0 : n.data) || void 0 === e ? void 0 : e.userPresences) || void 0 === e ? void 0 : e.length) && (n = n.data.userPresences, wi([], n).forEach(function(e) {
                                t[e.userId].presence = e
                            })), r[u] = {
                                userData: a,
                                prevCursor: o,
                                nextCursor: i
                            }, r
                        }).catch(function(e) {
                            return console.debug(e), r[u] = {
                                userData: a,
                                prevCursor: o,
                                nextCursor: i
                            }, r
                        })
                    }).catch(function(e) {
                        return console.debug(e), {}
                    })
                }
            }

            function Gi(e) {
                return e = 0 < arguments.length && void 0 !== e ? e : window.location.search, qi.parse(e)
            }

            function Ii(e) {
                return e = 0 < arguments.length && void 0 !== e ? e : {}, qi.stringify(e)
            }

            function bi(e) {
                return l.Endpoints ? l.Endpoints.getAbsoluteUrl(e) : e
            }

            function Pi(e, t) {
                return bi("".concat(e, "?").concat(Ii(t)))
            }(Dn = hi = hi || {}).Friends = "friends", Dn.Followers = "followers", Dn.Followings = "followings", Dn.Requests = "requests", (W = Li = Li || {}).Alphabetical = "Alphabetical", W.StatusAlphabetical = "StatusAlphabetical", W.StatusFrequents = "StatusFrequents";
            var wi = function(e, t) {
                    for (var n = 0, r = t.length, a = e.length; n < r; n++, a++) e[a] = t[n];
                    return e
                },
                Ci = (new pt).createRequestProcessor(function(e) {
                    var t = {
                            url: fi + "/v1/users",
                            retryable: !0,
                            withCredentials: !0
                        },
                        e = e.map(function(e) {
                            return e.data.userId
                        });
                    return E.post(t, {
                        userIds: e,
                        excludeBannedUsers: !0
                    }).then(function(e) {
                        var e = e.data.data,
                            t = {};
                        return e.forEach(function(e) {
                            t[e.id] = e
                        }), t
                    })
                }, function(e) {
                    e = e.userId;
                    return null == e ? void 0 : e.toString()
                }, {
                    batchSize: 100,
                    processBatchWaitTime: 1e3
                }),
                Ti = new pt,
                Ai = new Map,
                Dn = function(r) {
                    var a = function(e, t, n) {
                        if (Ai.has(e)) return Ai.get(e);
                        n = Ti.createRequestProcessor(t, n, {
                            batchSize: 1
                        });
                        return Ai.set(e, n), n
                    }(r, yi(r), function(e) {
                        e = e.userId;
                        return null == e ? void 0 : e.toString()
                    });
                    return function(e, t) {
                        var n, n = r + ":" + (n = e).userId + ":" + n.cursor + ":" + n.sortOrder + ":" + n.userSort + ":" + n.limit;
                        return null != t && t.refreshCache && a.invalidateItem(e, n), a.queueItem(e, n, t)
                    }
                },
                Li = (null === (W = null === (W = window.CoreRobloxUtilities) || void 0 === W ? void 0 : W.dataStores) || void 0 === W ? void 0 : W.userDataStoreV2) || {
                    getFriends: Dn(hi.Friends),
                    getFollowers: Dn(hi.Followers),
                    getFollowings: Dn(hi.Followings),
                    getFriendsRequests: Dn(hi.Requests),
                    getUser: function(e) {
                        return Ci.queueItem({
                            userId: e
                        })
                    },
                    clearUserDataStoreCache: function() {
                        Ai.forEach(function(e) {
                            e.clearCache()
                        })
                    },
                    maxFriendRequestNotificationCount: 500,
                    FriendsUserSortType: Li
                },
                ea = {
                    catalogDataStore: Se,
                    gameAutoLocalizationDataStore: Pn,
                    gameAutomaticTranslationDataStore: Fe,
                    gameLanguagesDataStore: Nn,
                    gameSourceLanguageDataStore: Ge,
                    gameThumbnailsDataStore: oe,
                    gameTranslationAnalyticsDataStore: Ye,
                    gamesDataStore: Kr,
                    hbacIndexedDB: ea,
                    inventoryDataStore: sa,
                    localeDataStore: j,
                    thumbnailsDataStore: Oe,
                    translationProgressDataStore: B,
                    translationRolesDataStore: Br,
                    userDataStore: Li,
                    userDataStoreV2: Li
                },
                qi = Ms(6933),
                Si = {
                    getAbsoluteUrl: bi,
                    parseQueryString: Gi,
                    composeQueryString: Ii,
                    getQueryParam: function(e) {
                        return Gi()[e]
                    },
                    formatUrl: T.WU,
                    resolveUrl: T.DB,
                    parseUrl: T.Qc,
                    parseUrlAndQueryString: qi.parseUrl,
                    extractQueryString: qi.extract,
                    getGameDetailReferralUrls: function(e) {
                        return bi("/games/refer?".concat(Ii(e)))
                    },
                    getUrlWithQueries: Pi,
                    getUrlWithLocale: function(e, t) {
                        return t ? Pi(e, {
                            locale: t
                        }) : e
                    }
                };

            function Ui() {}
            var Ri, Oi, sa = (Ui.prototype.getAbsoluteUrl = function(e) {
                if ("number" != typeof e) return null;
                var t = l.EnvironmentUrls.websiteUrl,
                    e = Si.formatUrl({
                        pathname: this.getRelativePath(e)
                    });
                return Si.resolveUrl(t, e)
            }, Ui.prototype.navigateTo = function(e) {
                e = this.getAbsoluteUrl(e);
                e && window.location.assign(e)
            }, Ui);

            function Di() {
                return null !== Oi && Oi.apply(this, arguments) || this
            }
            var xi, Ei, j = ((Ri = function(e, t) {
                return (Ri = Object.setPrototypeOf || {
                        __proto__: []
                    }
                    instanceof Array && function(e, t) {
                        e.__proto__ = t
                    } || function(e, t) {
                        for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n])
                    })(e, t)
            }, function(e, t) {
                if ("function" != typeof t && null !== t) throw new TypeError("Class extends value " + String(t) + " is not a constructor or null");

                function n() {
                    this.constructor = e
                }
                Ri(e, t), e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n)
            })(Di, Oi = sa), Di.prototype.getRelativePath = function(e) {
                return "/games/" + e
            }, Di.prototype.getReferralPath = function() {
                return "/games/refer"
            }, Di);

            function Bi() {
                return null !== Ei && Ei.apply(this, arguments) || this
            }
            var Fi, zi, Oe = ((xi = function(e, t) {
                return (xi = Object.setPrototypeOf || {
                        __proto__: []
                    }
                    instanceof Array && function(e, t) {
                        e.__proto__ = t
                    } || function(e, t) {
                        for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n])
                    })(e, t)
            }, function(e, t) {
                if ("function" != typeof t && null !== t) throw new TypeError("Class extends value " + String(t) + " is not a constructor or null");

                function n() {
                    this.constructor = e
                }
                xi(e, t), e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n)
            })(Bi, Ei = sa), Bi.prototype.getRelativePath = function(e) {
                return "/groups/" + e
            }, Bi.prototype.getReferralPath = function() {
                return "/groups/refer"
            }, Bi);

            function ji() {
                return null !== zi && zi.apply(this, arguments) || this
            }

            function Ni(t, e) {
                var n, r = Object.keys(t);
                return Object.getOwnPropertySymbols && (n = Object.getOwnPropertySymbols(t), e && (n = n.filter(function(e) {
                    return Object.getOwnPropertyDescriptor(t, e).enumerable
                })), r.push.apply(r, n)), r
            }

            function ki(r) {
                for (var e = 1; e < arguments.length; e++) {
                    var a = null != arguments[e] ? arguments[e] : {};
                    e % 2 ? Ni(Object(a), !0).forEach(function(e) {
                        var t, n;
                        t = r, e = a[n = e], n in t ? Object.defineProperty(t, n, {
                            value: e,
                            enumerable: !0,
                            configurable: !0,
                            writable: !0
                        }) : t[n] = e
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(r, Object.getOwnPropertyDescriptors(a)) : Ni(Object(a)).forEach(function(e) {
                        Object.defineProperty(r, e, Object.getOwnPropertyDescriptor(a, e))
                    })
                }
                return r
            }

            function _i() {
                return void 0 !== l.EventStream
            }

            function Wi(e, t, n, r) {
                _i() && l.EventStream.SendEventWithTarget && (r = Object.values(Mi).includes(r) ? r : Mi.WWW, l.EventStream.SendEventWithTarget(e, t, n, r))
            }(Fi = function(e, t) {
                return (Fi = Object.setPrototypeOf || {
                        __proto__: []
                    }
                    instanceof Array && function(e, t) {
                        e.__proto__ = t
                    } || function(e, t) {
                        for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n])
                    })(e, t)
            }, function(e, t) {
                if ("function" != typeof t && null !== t) throw new TypeError("Class extends value " + String(t) + " is not a constructor or null");

                function n() {
                    this.constructor = e
                }
                Fi(e, t), e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n)
            })(ji, zi = sa), ji.prototype.getRelativePath = function(e) {
                return "/users/" + e + "/profile"
            }, ji.prototype.getReferralPath = function() {
                return "/users/refer"
            }, B = ji, Br = {
                game: new j,
                group: new Oe,
                user: new B
            };
            var Mi = ki(ki({}, {
                    DEFAULT: 0,
                    WWW: 1,
                    STUDIO: 2,
                    DIAGNOSTIC: 3
                }), _i() ? l.EventStream.TargetTypes : {}),
                Qi = {
                    eventTypes: {
                        formInteraction: "formInteraction",
                        modalAction: "modalAction",
                        pageLoad: "pageLoad",
                        buttonClick: "buttonClick"
                    },
                    targetTypes: Mi,
                    sendEvent: function(e, t) {
                        var n = e.name,
                            r = e.type,
                            a = e.context,
                            e = e.requiredParams,
                            o = ki({
                                btn: n
                            }, t);
                        Array.isArray(e) && e.forEach(function(e) {
                            Object.prototype.hasOwnProperty.call(o, e) || console.info("A required event parameter '".concat(e, "' is not provided"))
                        }), Wi(r, a, o)
                    },
                    sendEventWithTarget: Wi,
                    sendGamePlayEvent: function(e, t, n) {
                        l.GamePlayEvents && l.GamePlayEvents.SendGamePlayIntent && l.GamePlayEvents.SendGamePlayIntent(e, t, n)
                    }
                },
                Hi = (Li = l.Hybrid || {}).Chat,
                Vi = Li.Navigation,
                Ji = Li.Overlay,
                Ki = Li.Game,
                Xi = Li.Localization;

            function $i(e) {
                return void 0 === e ? function() {} : e
            }

            function Yi(e) {
                var t = e.eventName,
                    n = e.ctx,
                    e = e.properties;
                Qi.sendEventWithTarget(t, n, e)
            }

            function Zi(e, t) {
                Qi.sendGamePlayEvent(e, t)
            }
            var sa = {
                    startChatConversation: function(e, t) {
                        Hi && Hi.startChatConversation(e, $i(t))
                    },
                    startWebChatConversation: function(e, t) {
                        Vi && Vi.startWebChatConversation(e, $i(t))
                    },
                    navigateToFeature: function(e, t) {
                        Vi && Vi.navigateToFeature(e, $i(t))
                    },
                    openUserProfile: function(e, t) {
                        Vi && Vi.openUserProfile(e, $i(t))
                    },
                    close: function(e) {
                        Ji && Ji.close($i(e))
                    },
                    launchGame: function(e, t) {
                        Ki && Ki.launchGame(e, $i(t))
                    },
                    localization: function(e, t) {
                        Xi && Xi.languageChangeTrigger && Xi.languageChangeTrigger(e, $i(t))
                    }
                },
                es = (l.CurrentUser || {}).userId,
                ts = {
                    friends: "Friends",
                    followers: "Followers",
                    requests: "Requests",
                    followings: "Followings"
                },
                ns = {
                    friendsDict: function(e) {
                        return "Roblox.".concat(ts[e], "Dict.UserId").concat(es || 0)
                    }
                },
                rs = {
                    buildPlayGameProperties: function(e, t, n, r, a) {
                        return {
                            rootPlaceId: e,
                            placeId: t,
                            gameInstanceId: n,
                            playerId: r,
                            privateServerLinkCode: a
                        }
                    },
                    launchGame: function(e, t) {
                        var n, r, a, o, i, s;
                        l.GameLauncher && (n = t, r = e.rootPlaceId, a = e.placeId, s = e.gameInstanceId, i = e.playerId, o = e.privateServerLinkCode, a === r && s ? (n.properties.gameInstanceId = s, Yi(n), Zi(n.gamePlayIntentEventCtx, r), e = a, s = s, l.GameLauncher.joinGameInstance(e, s, !0, !0)) : r && i ? (n.properties.playerId = i, Yi(n), Zi(n.gamePlayIntentEventCtx, r), i = i, l.GameLauncher.followPlayerIntoGame(i)) : o ? (Yi(t), Zi(t.gamePlayIntentEventCtx, a), t = a, o = o, l.GameLauncher.joinPrivateGame(t, null, o)) : (Yi(n), Zi(n.gamePlayIntentEventCtx, a), a = a, l.GameLauncher.joinMultiplayerGame(a)))
                    }
                },
                as = l.EnvironmentUrls.friendsApi,
                os = l.EnvironmentUrls.presenceApi,
                is = l.EnvironmentUrls.websiteUrl,
                ss = function(e) {
                    return "".concat(is, "/users/").concat(e, "/profile")
                },
                us = function() {
                    return "".concat(os, "/v1/presence/users")
                },
                cs = 100,
                ls = {
                    friends: function(e) {
                        return "".concat(as, "/v1/users/").concat(e, "/friends")
                    },
                    followers: function(e) {
                        return "".concat(as, "/v1/users/").concat(e, "/followers")
                    },
                    followings: function(e) {
                        return "".concat(as, "/v1/users/").concat(e, "/followings")
                    },
                    friendrequests: function() {
                        return "".concat(as, "/v1/my/friends/requests")
                    }
                };

            function ds(r, a, o) {
                var e = {
                        url: ls[a](l.CurrentUser.userId),
                        retryable: !0,
                        withCredentials: !0
                    },
                    t = {
                        url: us(),
                        retryable: !0,
                        withCredentials: !0
                    };
                return E.get(e).then(function(e) {
                    var e = e.data.data || e,
                        n = [];
                    return r[a] = {}, e.forEach(function(e) {
                        var t = e.id;
                        n.push(t), e.profileUrl = ss(t), r[a][t] = e
                    }), E.buildBatchPromises(n, cs, t, !0).then(function(e) {
                        var t, n;
                        return e && 0 < e.length && (t = [], e.forEach(function(e) {
                            e = e.data.userPresences;
                            t = t.concat(e)
                        }), t.forEach(function(e) {
                            r[a][e.userId].presence = e
                        })), o && (vo.saveDataByTimeStamp(ns.friendsDict(a), r[a]), n = a, document.addEventListener("Roblox.Logout", function() {
                            vo.removeLocalStorage(ns.friendsDict(n))
                        })), r[a]
                    })
                })
            }

            function hs(e, t, n) {
                var r = n.expirationMS,
                    a = n.isEnabled;
                if (a) {
                    var o = (n = t, r = r, (r = vo.fetchNonExpiredCachedData(ns.friendsDict(n), r)) ? r.data : null);
                    if (o) return new Promise(function(e) {
                        e(o)
                    })
                }
                return ds(e, t, a)
            }

            function vs(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                }
            }(j = new(function() {
                function t() {
                    ! function(e) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                    }(this), this.callbacks = new Set, this.friendsDict = {}
                }
                var e, n, r;
                return e = t, (n = [{
                    key: "unSubscribe",
                    value: function(e) {
                        this.callbacks.delete(e)
                    }
                }, {
                    key: "subscribe",
                    value: function(e, a, t) {
                        var o = this,
                            n = "function" == typeof e,
                            i = t && t.isEnabled;
                        n && this.callbacks.add(e), i && this.friendsDict[a] ? n && e(this.friendsDict[a]) : hs(this.friendsDict, a, t).then(function(t) {
                            var n, r;
                            i && (n = a, (r = t) && document.addEventListener("Roblox.Presence.Update", function(e, t) {
                                t && setTimeout(function() {
                                    t.forEach(function(e) {
                                        var t = e.userId;
                                        r[t] && (r[t].presence = e)
                                    }), vo.saveDataByTimeStamp(ns.friendsDict(n), r)
                                })
                            })), o.friendsDict[a] = t, o.callbacks.forEach(function(e) {
                                e(t)
                            })
                        })
                    }
                }, {
                    key: "refreshCacheData",
                    value: function(e, t) {
                        t = t.isEnabled;
                        return ds(this.friendsDict, e, t)
                    }
                }]) && vs(e.prototype, n), r && vs(e, r), t
            }())).TYPE = {
                FRIENDS: "friends",
                FOLLOWERS: "followers",
                FOLLOWINGS: "followings",
                FRIENDREQUESTS: "friendrequests"
            };
            var ps, Oe = j,
                fs = l.EnvironmentUrls.metricsApi,
                B = function() {
                    var e = document.getElementsByName("performance")[0];
                    return e ? {
                        performanceMetricsBatchWaitTime: function(e) {
                            if (!e) return 0;
                            e = e.split(":");
                            return 1e3 * (60 * parseInt(e[0], 10) * 60 + 60 * parseInt(e[1], 10) + parseInt(e[2], 10))
                        }(e.getAttribute("data-ui-performance-metrics-batch-wait-time")),
                        performanceMetricsBatchSize: parseInt(e.getAttribute("data-ui-performance-metrics-batch-size"), 10)
                    } : {}
                },
                ms = function() {
                    return (ms = Object.assign || function(e) {
                        for (var t, n = 1, r = arguments.length; n < r; n++)
                            for (var a in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
                        return e
                    }).apply(this, arguments)
                },
                gs = function(e, t) {
                    var n = {};
                    for (a in e) Object.prototype.hasOwnProperty.call(e, a) && t.indexOf(a) < 0 && (n[a] = e[a]);
                    if (null != e && "function" == typeof Object.getOwnPropertySymbols)
                        for (var r = 0, a = Object.getOwnPropertySymbols(e); r < a.length; r++) t.indexOf(a[r]) < 0 && Object.prototype.propertyIsEnumerable.call(e, a[r]) && (n[a[r]] = e[a[r]]);
                    return n
                },
                Li = new pt,
                ys = 0,
                pt = (j = B()).performanceMetricsBatchWaitTime,
                B = j.performanceMetricsBatchSize,
                Gs = Li.createRequestProcessor(function(e) {
                    var t = {
                            url: fs + "/v1/performance/measurements",
                            retryable: !0,
                            withCredentials: !0
                        },
                        n = e.map(function(e) {
                            e = e.data, e.taskId, e = gs(e, ["taskId"]);
                            return ms({}, e)
                        });
                    return E.post(t, n).then(function() {
                        var t = {};
                        return e.forEach(function(e) {
                            e = e.key;
                            t[e] = !0
                        }), t
                    })
                }, function(e) {
                    e = e.taskId;
                    return null == e ? void 0 : e.toString()
                }, {
                    batchSize: B || 100,
                    processBatchWaitTime: pt || 1e4
                }),
                j = {
                    logMeasurement: function(e) {
                        var t = ys;
                        return ys += 1, Gs.queueItem(ms({
                            taskId: t
                        }, e))
                    }
                };
            (Li = ps = ps || {}).GameDetails = "game_details", Li.Profile = "profile", Li.Home = "home", Li.Games = "games", Li.Avatar = "avatar", Li.Catalog = "catalog", Li.Friends = "friends", Li.ItemDetails = "item_details", Li.Navigation = "navigation", Li.PlaceId = "placeId", Li.UserId = "userId", Li.ShareLinks = "share_links", Li.Chat = "chat";
            var Is, bs = ((B = {})[ps.Home] = "/home", B[ps.Games] = "/games", B[ps.Avatar] = "/my/avatar", B[ps.Catalog] = "/catalog", B[ps.Friends] = "/users/friends", B[ps.ItemDetails] = "/catalog/{itemId}", B),
                Ps = "/games",
                ws = "/users",
                Cs = "/groups",
                Ts = "/profile",
                As = "/games/start",
                Ls = function(e) {
                    e = e.userId;
                    e ? ($(document).triggerHandler("Roblox.Chat.StartChat", {
                        userId: e
                    }), Qi.sendEventWithTarget("startChatByUser", "click", {
                        userId: e
                    })) : console.log("missing valid params to start web chat")
                },
                qs = {
                    url: l.EnvironmentUrls.gamesApi + "/v1/games",
                    withCredentials: !0
                },
                Ss = function(e) {
                    return E.get(qs, {
                        universeIds: [e]
                    }).then(function(e) {
                        return null === (e = null === (e = null === (e = null == e ? void 0 : e.data) || void 0 === e ? void 0 : e.data) || void 0 === e ? void 0 : e[0]) || void 0 === e ? void 0 : e.rootPlaceId
                    })
                },
                Us = {
                    url: l.EnvironmentUrls.shareLinksApi + "/v1/resolve-link",
                    withCredentials: !0
                },
                Rs = function(e, t) {
                    return E.post(Us, {
                        linkId: e,
                        linkType: t
                    }).then(function(e) {
                        return e
                    })
                };

            function Os(e) {
                for (var t = [], n = {}, r = Es.exec(e); r;) t.push(r[1]), r = Es.exec(e);
                for (var a = Bs.exec(e); a;) {
                    var o = a[1],
                        i = a[2];
                    n[o] = i, a = Bs.exec(e)
                }
                return {
                    path: t,
                    params: n
                }
            }(Is = Is || {}).EXPERIENCE_INVITE = "ExperienceInvite", (pt = Fs = Fs || {}).VALID = "Valid", pt.EXPIRED = "Expired", pt.INVITER_NOT_IN_EXPERIENCE = "InviterNotInExperience";
            var Ds = Fs,
                Li = function(e) {
                    var t = e.path,
                        r = e.params,
                        t = t[1];
                    if (bs[t]) {
                        i = bs[t];
                        for (var n = Object.keys(r), a = 0; a < n.length; a++) var o = n[a],
                            i = i.replace("{" + o + "}", r[o])
                    } else {
                        if (t === ps.GameDetails && r.gameId) return Ss(r.gameId).then(function(e) {
                            return !!e && (window.location.href = Ps + "/" + e, !0)
                        }).catch(function() {
                            return !1
                        });
                        if (t === ps.Profile) r.userId ? i = ws + "/" + r.userId + Ts : r.groupId && (i = Cs + "/" + r.groupId);
                        else if (t === ps.ShareLinks) {
                            if (r.type === Is.EXPERIENCE_INVITE)
                                if (r.code) return Rs(r.code, Is.EXPERIENCE_INVITE).then(function(e) {
                                    var t = null === (n = null == e ? void 0 : e.data) || void 0 === n ? void 0 : n.experienceInviteData;
                                    if (!t || !t.placeId) return !1;
                                    var n, e = {
                                        type: "linkResolved",
                                        context: "deepLink",
                                        params: {
                                            linkType: "ExperienceInvite",
                                            linkStatus: t.status,
                                            linkId: r.code
                                        }
                                    };
                                    return Qi.sendEventWithTarget(e.type, e.context, e.params), t.status === Ds.VALID && t.instanceId ? (window.location.href = Ps + "/" + t.placeId, rs.launchGame(rs.buildPlayGameProperties(t.placeId, t.placeId, t.instanceId), (n = t.placeId.toString(), e = r.code, {
                                        eventName: "joinGameFromInviteLink",
                                        ctx: "shareLinks",
                                        gamePlayIntentEventCtx: "shareLinks",
                                        properties: {
                                            linkStatus: t.status,
                                            linkType: "ExperienceInvite",
                                            placeId: n,
                                            linkId: e
                                        }
                                    })), !0) : (t.status === Ds.EXPIRED || t.status === Ds.INVITER_NOT_IN_EXPERIENCE) && (window.location.href = Ps + "/" + t.placeId + "?experienceInviteLinkId=" + r.code + "&experienceInviteStatus=" + t.status, !0)
                                }).catch(function() {
                                    return !1
                                })
                        } else if (t === ps.Chat && r.userId) return Ls(r), Promise.resolve(!0)
                    }
                    return i ? window.location.href = i : console.log("unsupported deeplink navigation type: " + t), Promise.resolve(!!i)
                },
                B = function(e) {
                    e = e.params;
                    return e.placeId ? (e.linkCode ? window.location.href = Ps + "/" + e.placeId + "?privateServerLinkCode=" + e.linkCode : e.accessCode ? window.location.href = As + "?placeId=" + e.placeId + "&accessCode=" + e.accessCode : l.GameLauncher.joinMultiplayerGame(parseFloat(e.placeId)), Promise.resolve(!0)) : Promise.resolve(!1)
                },
                pt = function(e) {
                    e = e.params.userId;
                    return e && (window.location.href = "/games/start?userId=" + e), Promise.resolve(!!e)
                },
                xs = ((Fs = {})[ps.Navigation] = Li, Fs[ps.PlaceId] = B, Fs[ps.UserId] = pt, Fs),
                Es = /\/(\w+)/g,
                Bs = /(\w+)=(\w+)/g,
                pt = {
                    parseDeeplink: Os,
                    navigateToDeepLink: function(e) {
                        var t = Os(e),
                            e = xs[t.path[0]];
                        return e ? e(t) : Promise.resolve(!1)
                    }
                },
                Fs = {
                    ExperienceInviteStatus: Ds
                };
            Object.assign(c(), {
                DeepLinkService: pt,
                ShareLinks: Fs
            });
            var zs = "RBXCatalogUpsellData",
                js = /RBXCatalogUpsellData=([^;]+)/,
                Ns = "UpsellUuid",
                ks = /^\/[\w-]+\/\d+$/g;

            function _s() {
                var e = zs + "=;path=/;domain=." + l.EnvironmentUrls.domain + ";expires=Thu, 01 Jan 1970 00:00:01 GMT";
                document.cookie.includes(zs) && (document.cookie = e)
            }

            function Ws() {
                var e = document.cookie.match(js),
                    t = Si.getQueryParam(Ns);
                if (!Array.isArray(e) || 2 !== e.length || !t) return _s(), {};
                var n = decodeURIComponent(e[1]).split(",");
                if (8 !== n.length) return _s(), {};
                var r = n[0],
                    a = n[1],
                    o = n[2],
                    i = n[3],
                    s = n[4],
                    u = n[5],
                    e = n[6] || void 0,
                    n = n[7];
                return t === r && l.CurrentUser.userId === o && a.match(ks) ? {
                    upsellUuid: r,
                    targetItemUrl: a,
                    userId: o,
                    returnUrl: Si.formatUrl({
                        pathname: a,
                        query: ((a = {})[Ns] = r, a)
                    }),
                    expectedCurrency: i,
                    expectedPrice: s,
                    expectedSellerId: u,
                    userAssetId: e,
                    assetType: n
                } : (_s(), {})
            }
            Fs = {
                expireUpsellCookie: _s,
                getUpsellUuid: function() {
                    var e = Si.getQueryParam(Ns);
                    if (e || !document.cookie.includes(zs)) {
                        if (e && document.cookie.includes(zs))
                            if (e !== Ws().upsellUuid) return void _s();
                        return e
                    }
                    _s()
                },
                parseUpsellCookie: Ws,
                constants: {
                    UPSELL_COOKIE_KEY: zs,
                    UPSELL_COOKIE_KEY_REGEX: js,
                    UPSELL_QUERY_PARAM_KEY: Ns,
                    UPSELL_TARGET_ITEM_URL_COOKIE_DATA_REGEX: ks,
                    UPSELL_TARGET_ITEM_URL_REGEX: /^\/[\w-]+\/\d+/g
                }
            }, window.CoreRobloxUtilities = {
                cryptoUtil: n,
                dataStores: ea,
                entityUrl: Br,
                eventStreamService: Qi,
                hybridService: sa,
                localStorageService: vo,
                localStorageNames: ns,
                playGameService: rs,
                userInfoService: Oe,
                metricsService: j,
                deepLinkService: pt,
                upsellUtil: Fs
            }
        }()
}();
//# sourceMappingURL=https://js.rbxcdn.com/72a51d279fb4c7ad3ea1-coreRobloxUtilities.bundle.min.js.map

/* Bundle detector */
window.Roblox && window.Roblox.BundleDetector && window.Roblox.BundleDetector.bundleDetected("CoreRobloxUtilities");