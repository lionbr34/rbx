! function() {
    var n = {
            4782: function(t, e) {
                "use strict";
                e.byteLength = function(t) {
                    var e = f(t),
                        t = e[0],
                        e = e[1];
                    return 3 * (t + e) / 4 - e
                }, e.toByteArray = function(t) {
                    var e, n, r = f(t),
                        o = r[0],
                        r = r[1],
                        i = new c(function(t, e) {
                            return 3 * (t + e) / 4 - e
                        }(o, r)),
                        a = 0,
                        u = 0 < r ? o - 4 : o;
                    for (n = 0; n < u; n += 4) e = l[t.charCodeAt(n)] << 18 | l[t.charCodeAt(n + 1)] << 12 | l[t.charCodeAt(n + 2)] << 6 | l[t.charCodeAt(n + 3)], i[a++] = e >> 16 & 255, i[a++] = e >> 8 & 255, i[a++] = 255 & e;
                    2 === r && (e = l[t.charCodeAt(n)] << 2 | l[t.charCodeAt(n + 1)] >> 4, i[a++] = 255 & e);
                    1 === r && (e = l[t.charCodeAt(n)] << 10 | l[t.charCodeAt(n + 1)] << 4 | l[t.charCodeAt(n + 2)] >> 2, i[a++] = e >> 8 & 255, i[a++] = 255 & e);
                    return i
                }, e.fromByteArray = function(t) {
                    for (var e, n = t.length, r = n % 3, o = [], i = 16383, a = 0, u = n - r; a < u; a += i) o.push(function(t, e, n) {
                        for (var r, o = [], i = e; i < n; i += 3) r = (t[i] << 16 & 16711680) + (t[i + 1] << 8 & 65280) + (255 & t[i + 2]), o.push(function(t) {
                            return s[t >> 18 & 63] + s[t >> 12 & 63] + s[t >> 6 & 63] + s[63 & t]
                        }(r));
                        return o.join("")
                    }(t, a, u < a + i ? u : a + i));
                    1 == r ? (e = t[n - 1], o.push(s[e >> 2] + s[e << 4 & 63] + "==")) : 2 == r && (e = (t[n - 2] << 8) + t[n - 1], o.push(s[e >> 10] + s[e >> 4 & 63] + s[e << 2 & 63] + "="));
                    return o.join("")
                };
                for (var s = [], l = [], c = "undefined" != typeof Uint8Array ? Uint8Array : Array, n = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", r = 0, o = n.length; r < o; ++r) s[r] = n[r], l[n.charCodeAt(r)] = r;

                function f(t) {
                    var e = t.length;
                    if (0 < e % 4) throw new Error("Invalid string. Length must be a multiple of 4");
                    t = t.indexOf("=");
                    return -1 === t && (t = e), [t, t === e ? 0 : 4 - t % 4]
                }
                l["-".charCodeAt(0)] = 62, l["_".charCodeAt(0)] = 63
            },
            816: function(t, n, e) {
                "use strict";
                var u = e(4782),
                    i = e(8898),
                    e = "function" == typeof Symbol && "function" == typeof Symbol.for ? Symbol.for("nodejs.util.inspect.custom") : null;
                /*!
                 * The buffer module from node.js, for the browser.
                 *
                 * @author   Feross Aboukhadijeh <https://feross.org>
                 * @license  MIT
                 */
                n.lW = f, n.h2 = 50;
                var r = 2147483647;

                function o(t) {
                    if (r < t) throw new RangeError('The value "' + t + '" is invalid for option "size"');
                    t = new Uint8Array(t);
                    return Object.setPrototypeOf(t, f.prototype), t
                }

                function f(t, e, n) {
                    if ("number" != typeof t) return a(t, e, n);
                    if ("string" == typeof e) throw new TypeError('The "string" argument must be of type string. Received type number');
                    return l(t)
                }

                function a(t, e, n) {
                    if ("string" == typeof t) return function(t, e) {
                        "string" == typeof e && "" !== e || (e = "utf8");
                        if (!f.isEncoding(e)) throw new TypeError("Unknown encoding: " + e);
                        var n = 0 | h(t, e),
                            r = o(n),
                            e = r.write(t, e);
                        e !== n && (r = r.slice(0, e));
                        return r
                    }(t, e);
                    if (ArrayBuffer.isView(t)) return function(t) {
                        if (R(t, Uint8Array)) {
                            var e = new Uint8Array(t);
                            return d(e.buffer, e.byteOffset, e.byteLength)
                        }
                        return c(t)
                    }(t);
                    if (null == t) throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof t);
                    if (R(t, ArrayBuffer) || t && R(t.buffer, ArrayBuffer)) return d(t, e, n);
                    if ("undefined" != typeof SharedArrayBuffer && (R(t, SharedArrayBuffer) || t && R(t.buffer, SharedArrayBuffer))) return d(t, e, n);
                    if ("number" == typeof t) throw new TypeError('The "value" argument must not be of type number. Received type number');
                    var r = t.valueOf && t.valueOf();
                    if (null != r && r !== t) return f.from(r, e, n);
                    r = function(t) {
                        if (f.isBuffer(t)) {
                            var e = 0 | p(t.length),
                                n = o(e);
                            return 0 === n.length ? n : (t.copy(n, 0, 0, e), n)
                        }
                        if (void 0 !== t.length) return "number" != typeof t.length || P(t.length) ? o(0) : c(t);
                        if ("Buffer" === t.type && Array.isArray(t.data)) return c(t.data)
                    }(t);
                    if (r) return r;
                    if ("undefined" != typeof Symbol && null != Symbol.toPrimitive && "function" == typeof t[Symbol.toPrimitive]) return f.from(t[Symbol.toPrimitive]("string"), e, n);
                    throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof t)
                }

                function s(t) {
                    if ("number" != typeof t) throw new TypeError('"size" argument must be of type number');
                    if (t < 0) throw new RangeError('The value "' + t + '" is invalid for option "size"')
                }

                function l(t) {
                    return s(t), o(t < 0 ? 0 : 0 | p(t))
                }

                function c(t) {
                    for (var e = t.length < 0 ? 0 : 0 | p(t.length), n = o(e), r = 0; r < e; r += 1) n[r] = 255 & t[r];
                    return n
                }

                function d(t, e, n) {
                    if (e < 0 || t.byteLength < e) throw new RangeError('"offset" is outside of buffer bounds');
                    if (t.byteLength < e + (n || 0)) throw new RangeError('"length" is outside of buffer bounds');
                    n = void 0 === e && void 0 === n ? new Uint8Array(t) : void 0 === n ? new Uint8Array(t, e) : new Uint8Array(t, e, n);
                    return Object.setPrototypeOf(n, f.prototype), n
                }

                function p(t) {
                    if (r <= t) throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x" + r.toString(16) + " bytes");
                    return 0 | t
                }

                function h(t, e) {
                    if (f.isBuffer(t)) return t.length;
                    if (ArrayBuffer.isView(t) || R(t, ArrayBuffer)) return t.byteLength;
                    if ("string" != typeof t) throw new TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type ' + typeof t);
                    var n = t.length,
                        r = 2 < arguments.length && !0 === arguments[2];
                    if (!r && 0 === n) return 0;
                    for (var o = !1;;) switch (e) {
                        case "ascii":
                        case "latin1":
                        case "binary":
                            return n;
                        case "utf8":
                        case "utf-8":
                            return O(t).length;
                        case "ucs2":
                        case "ucs-2":
                        case "utf16le":
                        case "utf-16le":
                            return 2 * n;
                        case "hex":
                            return n >>> 1;
                        case "base64":
                            return k(t).length;
                        default:
                            if (o) return r ? -1 : O(t).length;
                            e = ("" + e).toLowerCase(), o = !0
                    }
                }

                function y(t, e, n) {
                    var r, o, i, a = !1;
                    if ((void 0 === e || e < 0) && (e = 0), e > this.length) return "";
                    if ((void 0 === n || n > this.length) && (n = this.length), n <= 0) return "";
                    if ((n >>>= 0) <= (e >>>= 0)) return "";
                    for (t = t || "utf8";;) switch (t) {
                        case "hex":
                            return function(t, e, n) {
                                var r = t.length;
                                (!e || e < 0) && (e = 0);
                                (!n || n < 0 || r < n) && (n = r);
                                for (var o = "", i = e; i < n; ++i) o += I[t[i]];
                                return o
                            }(this, e, n);
                        case "utf8":
                        case "utf-8":
                            return w(this, e, n);
                        case "ascii":
                            return function(t, e, n) {
                                var r = "";
                                n = Math.min(t.length, n);
                                for (var o = e; o < n; ++o) r += String.fromCharCode(127 & t[o]);
                                return r
                            }(this, e, n);
                        case "latin1":
                        case "binary":
                            return function(t, e, n) {
                                var r = "";
                                n = Math.min(t.length, n);
                                for (var o = e; o < n; ++o) r += String.fromCharCode(t[o]);
                                return r
                            }(this, e, n);
                        case "base64":
                            return r = this, i = n, 0 === (o = e) && i === r.length ? u.fromByteArray(r) : u.fromByteArray(r.slice(o, i));
                        case "ucs2":
                        case "ucs-2":
                        case "utf16le":
                        case "utf-16le":
                            return function(t, e, n) {
                                for (var r = t.slice(e, n), o = "", i = 0; i < r.length - 1; i += 2) o += String.fromCharCode(r[i] + 256 * r[i + 1]);
                                return o
                            }(this, e, n);
                        default:
                            if (a) throw new TypeError("Unknown encoding: " + t);
                            t = (t + "").toLowerCase(), a = !0
                    }
                }

                function m(t, e, n) {
                    var r = t[e];
                    t[e] = t[n], t[n] = r
                }

                function g(t, e, n, r, o) {
                    if (0 === t.length) return -1;
                    if ("string" == typeof n ? (r = n, n = 0) : 2147483647 < n ? n = 2147483647 : n < -2147483648 && (n = -2147483648), P(n = +n) && (n = o ? 0 : t.length - 1), n < 0 && (n = t.length + n), n >= t.length) {
                        if (o) return -1;
                        n = t.length - 1
                    } else if (n < 0) {
                        if (!o) return -1;
                        n = 0
                    }
                    if ("string" == typeof e && (e = f.from(e, r)), f.isBuffer(e)) return 0 === e.length ? -1 : v(t, e, n, r, o);
                    if ("number" == typeof e) return e &= 255, "function" == typeof Uint8Array.prototype.indexOf ? (o ? Uint8Array.prototype.indexOf : Uint8Array.prototype.lastIndexOf).call(t, e, n) : v(t, [e], n, r, o);
                    throw new TypeError("val must be string, number or Buffer")
                }

                function v(t, e, n, r, o) {
                    var i = 1,
                        a = t.length,
                        u = e.length;
                    if (void 0 !== r && ("ucs2" === (r = String(r).toLowerCase()) || "ucs-2" === r || "utf16le" === r || "utf-16le" === r)) {
                        if (t.length < 2 || e.length < 2) return -1;
                        a /= i = 2, u /= 2, n /= 2
                    }

                    function s(t, e) {
                        return 1 === i ? t[e] : t.readUInt16BE(e * i)
                    }
                    if (o)
                        for (var l = -1, c = n; c < a; c++)
                            if (s(t, c) === s(e, -1 === l ? 0 : c - l)) {
                                if (-1 === l && (l = c), c - l + 1 === u) return l * i
                            } else -1 !== l && (c -= c - l), l = -1;
                    else
                        for (a < n + u && (n = a - u), c = n; 0 <= c; c--) {
                            for (var f = !0, d = 0; d < u; d++)
                                if (s(t, c + d) !== s(e, d)) {
                                    f = !1;
                                    break
                                }
                            if (f) return c
                        }
                    return -1
                }

                function b(t, e, n, r) {
                    return M(function(t) {
                        for (var e = [], n = 0; n < t.length; ++n) e.push(255 & t.charCodeAt(n));
                        return e
                    }(e), t, n, r)
                }

                function E(t, e, n, r) {
                    return M(function(t, e) {
                        for (var n, r, o = [], i = 0; i < t.length && !((e -= 2) < 0); ++i) r = t.charCodeAt(i), n = r >> 8, r = r % 256, o.push(r), o.push(n);
                        return o
                    }(e, t.length - n), t, n, r)
                }

                function w(t, e, n) {
                    n = Math.min(t.length, n);
                    for (var r = [], o = e; o < n;) {
                        var i, a, u, s, l = t[o],
                            c = null,
                            f = 239 < l ? 4 : 223 < l ? 3 : 191 < l ? 2 : 1;
                        if (o + f <= n) switch (f) {
                            case 1:
                                l < 128 && (c = l);
                                break;
                            case 2:
                                128 == (192 & (i = t[o + 1])) && 127 < (s = (31 & l) << 6 | 63 & i) && (c = s);
                                break;
                            case 3:
                                i = t[o + 1], a = t[o + 2], 128 == (192 & i) && 128 == (192 & a) && 2047 < (s = (15 & l) << 12 | (63 & i) << 6 | 63 & a) && (s < 55296 || 57343 < s) && (c = s);
                                break;
                            case 4:
                                i = t[o + 1], a = t[o + 2], u = t[o + 3], 128 == (192 & i) && 128 == (192 & a) && 128 == (192 & u) && 65535 < (s = (15 & l) << 18 | (63 & i) << 12 | (63 & a) << 6 | 63 & u) && s < 1114112 && (c = s)
                        }
                        null === c ? (c = 65533, f = 1) : 65535 < c && (c -= 65536, r.push(c >>> 10 & 1023 | 55296), c = 56320 | 1023 & c), r.push(c), o += f
                    }
                    return function(t) {
                        var e = t.length;
                        if (e <= S) return String.fromCharCode.apply(String, t);
                        var n = "",
                            r = 0;
                        for (; r < e;) n += String.fromCharCode.apply(String, t.slice(r, r += S));
                        return n
                    }(r)
                }(f.TYPED_ARRAY_SUPPORT = function() {
                    try {
                        var t = new Uint8Array(1),
                            e = {
                                foo: function() {
                                    return 42
                                }
                            };
                        return Object.setPrototypeOf(e, Uint8Array.prototype), Object.setPrototypeOf(t, e), 42 === t.foo()
                    } catch (t) {
                        return !1
                    }
                }()) || "undefined" == typeof console || "function" != typeof console.error || console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support."), Object.defineProperty(f.prototype, "parent", {
                    enumerable: !0,
                    get: function() {
                        if (f.isBuffer(this)) return this.buffer
                    }
                }), Object.defineProperty(f.prototype, "offset", {
                    enumerable: !0,
                    get: function() {
                        if (f.isBuffer(this)) return this.byteOffset
                    }
                }), f.poolSize = 8192, f.from = a, Object.setPrototypeOf(f.prototype, Uint8Array.prototype), Object.setPrototypeOf(f, Uint8Array), f.alloc = function(t, e, n) {
                    return e = e, n = n, s(t = t), !(t <= 0) && void 0 !== e ? "string" == typeof n ? o(t).fill(e, n) : o(t).fill(e) : o(t)
                }, f.allocUnsafe = l, f.allocUnsafeSlow = l, f.isBuffer = function(t) {
                    return null != t && !0 === t._isBuffer && t !== f.prototype
                }, f.compare = function(t, e) {
                    if (R(t, Uint8Array) && (t = f.from(t, t.offset, t.byteLength)), R(e, Uint8Array) && (e = f.from(e, e.offset, e.byteLength)), !f.isBuffer(t) || !f.isBuffer(e)) throw new TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');
                    if (t === e) return 0;
                    for (var n = t.length, r = e.length, o = 0, i = Math.min(n, r); o < i; ++o)
                        if (t[o] !== e[o]) {
                            n = t[o], r = e[o];
                            break
                        }
                    return n < r ? -1 : r < n ? 1 : 0
                }, f.isEncoding = function(t) {
                    switch (String(t).toLowerCase()) {
                        case "hex":
                        case "utf8":
                        case "utf-8":
                        case "ascii":
                        case "latin1":
                        case "binary":
                        case "base64":
                        case "ucs2":
                        case "ucs-2":
                        case "utf16le":
                        case "utf-16le":
                            return !0;
                        default:
                            return !1
                    }
                }, f.concat = function(t, e) {
                    if (!Array.isArray(t)) throw new TypeError('"list" argument must be an Array of Buffers');
                    if (0 === t.length) return f.alloc(0);
                    if (void 0 === e)
                        for (o = e = 0; o < t.length; ++o) e += t[o].length;
                    for (var n = f.allocUnsafe(e), r = 0, o = 0; o < t.length; ++o) {
                        var i = t[o];
                        if (R(i, Uint8Array)) r + i.length > n.length ? f.from(i).copy(n, r) : Uint8Array.prototype.set.call(n, i, r);
                        else {
                            if (!f.isBuffer(i)) throw new TypeError('"list" argument must be an Array of Buffers');
                            i.copy(n, r)
                        }
                        r += i.length
                    }
                    return n
                }, f.byteLength = h, f.prototype._isBuffer = !0, f.prototype.swap16 = function() {
                    var t = this.length;
                    if (t % 2 != 0) throw new RangeError("Buffer size must be a multiple of 16-bits");
                    for (var e = 0; e < t; e += 2) m(this, e, e + 1);
                    return this
                }, f.prototype.swap32 = function() {
                    var t = this.length;
                    if (t % 4 != 0) throw new RangeError("Buffer size must be a multiple of 32-bits");
                    for (var e = 0; e < t; e += 4) m(this, e, e + 3), m(this, e + 1, e + 2);
                    return this
                }, f.prototype.swap64 = function() {
                    var t = this.length;
                    if (t % 8 != 0) throw new RangeError("Buffer size must be a multiple of 64-bits");
                    for (var e = 0; e < t; e += 8) m(this, e, e + 7), m(this, e + 1, e + 6), m(this, e + 2, e + 5), m(this, e + 3, e + 4);
                    return this
                }, f.prototype.toLocaleString = f.prototype.toString = function() {
                    var t = this.length;
                    return 0 === t ? "" : 0 === arguments.length ? w(this, 0, t) : y.apply(this, arguments)
                }, f.prototype.equals = function(t) {
                    if (!f.isBuffer(t)) throw new TypeError("Argument must be a Buffer");
                    return this === t || 0 === f.compare(this, t)
                }, f.prototype.inspect = function() {
                    var t = "",
                        e = n.h2,
                        t = this.toString("hex", 0, e).replace(/(.{2})/g, "$1 ").trim();
                    return this.length > e && (t += " ... "), "<Buffer " + t + ">"
                }, e && (f.prototype[e] = f.prototype.inspect), f.prototype.compare = function(t, e, n, r, o) {
                    if (R(t, Uint8Array) && (t = f.from(t, t.offset, t.byteLength)), !f.isBuffer(t)) throw new TypeError('The "target" argument must be one of type Buffer or Uint8Array. Received type ' + typeof t);
                    if (void 0 === e && (e = 0), void 0 === n && (n = t ? t.length : 0), void 0 === r && (r = 0), void 0 === o && (o = this.length), e < 0 || n > t.length || r < 0 || o > this.length) throw new RangeError("out of range index");
                    if (o <= r && n <= e) return 0;
                    if (o <= r) return -1;
                    if (n <= e) return 1;
                    if (this === t) return 0;
                    for (var i = (o >>>= 0) - (r >>>= 0), a = (n >>>= 0) - (e >>>= 0), u = Math.min(i, a), s = this.slice(r, o), l = t.slice(e, n), c = 0; c < u; ++c)
                        if (s[c] !== l[c]) {
                            i = s[c], a = l[c];
                            break
                        }
                    return i < a ? -1 : a < i ? 1 : 0
                }, f.prototype.includes = function(t, e, n) {
                    return -1 !== this.indexOf(t, e, n)
                }, f.prototype.indexOf = function(t, e, n) {
                    return g(this, t, e, n, !0)
                }, f.prototype.lastIndexOf = function(t, e, n) {
                    return g(this, t, e, n, !1)
                }, f.prototype.write = function(t, e, n, r) {
                    if (void 0 === e) r = "utf8", n = this.length, e = 0;
                    else if (void 0 === n && "string" == typeof e) r = e, n = this.length, e = 0;
                    else {
                        if (!isFinite(e)) throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");
                        e >>>= 0, isFinite(n) ? (n >>>= 0, void 0 === r && (r = "utf8")) : (r = n, n = void 0)
                    }
                    var o = this.length - e;
                    if ((void 0 === n || o < n) && (n = o), 0 < t.length && (n < 0 || e < 0) || e > this.length) throw new RangeError("Attempt to write outside buffer bounds");
                    r = r || "utf8";
                    for (var i, a, u, s = !1;;) switch (r) {
                        case "hex":
                            return function(t, e, n, r) {
                                n = Number(n) || 0;
                                var o = t.length - n;
                                (!r || o < (r = Number(r))) && (r = o), (o = e.length) / 2 < r && (r = o / 2);
                                for (var i = 0; i < r; ++i) {
                                    var a = parseInt(e.substr(2 * i, 2), 16);
                                    if (P(a)) return i;
                                    t[n + i] = a
                                }
                                return i
                            }(this, t, e, n);
                        case "utf8":
                        case "utf-8":
                            return a = e, u = n, M(O(t, (i = this).length - a), i, a, u);
                        case "ascii":
                        case "latin1":
                        case "binary":
                            return b(this, t, e, n);
                        case "base64":
                            return i = this, a = e, u = n, M(k(t), i, a, u);
                        case "ucs2":
                        case "ucs-2":
                        case "utf16le":
                        case "utf-16le":
                            return E(this, t, e, n);
                        default:
                            if (s) throw new TypeError("Unknown encoding: " + r);
                            r = ("" + r).toLowerCase(), s = !0
                    }
                }, f.prototype.toJSON = function() {
                    return {
                        type: "Buffer",
                        data: Array.prototype.slice.call(this._arr || this, 0)
                    }
                };
                var S = 4096;

                function x(t, e, n) {
                    if (t % 1 != 0 || t < 0) throw new RangeError("offset is not uint");
                    if (n < t + e) throw new RangeError("Trying to access beyond buffer length")
                }

                function C(t, e, n, r, o, i) {
                    if (!f.isBuffer(t)) throw new TypeError('"buffer" argument must be a Buffer instance');
                    if (o < e || e < i) throw new RangeError('"value" argument is out of bounds');
                    if (n + r > t.length) throw new RangeError("Index out of range")
                }

                function _(t, e, n, r) {
                    if (n + r > t.length) throw new RangeError("Index out of range");
                    if (n < 0) throw new RangeError("Index out of range")
                }

                function A(t, e, n, r, o) {
                    return e = +e, n >>>= 0, o || _(t, 0, n, 4), i.write(t, e, n, r, 23, 4), n + 4
                }

                function N(t, e, n, r, o) {
                    return e = +e, n >>>= 0, o || _(t, 0, n, 8), i.write(t, e, n, r, 52, 8), n + 8
                }
                f.prototype.slice = function(t, e) {
                    var n = this.length;
                    (t = ~~t) < 0 ? (t += n) < 0 && (t = 0) : n < t && (t = n), (e = void 0 === e ? n : ~~e) < 0 ? (e += n) < 0 && (e = 0) : n < e && (e = n), e < t && (e = t);
                    e = this.subarray(t, e);
                    return Object.setPrototypeOf(e, f.prototype), e
                }, f.prototype.readUintLE = f.prototype.readUIntLE = function(t, e, n) {
                    t >>>= 0, e >>>= 0, n || x(t, e, this.length);
                    for (var r = this[t], o = 1, i = 0; ++i < e && (o *= 256);) r += this[t + i] * o;
                    return r
                }, f.prototype.readUintBE = f.prototype.readUIntBE = function(t, e, n) {
                    t >>>= 0, e >>>= 0, n || x(t, e, this.length);
                    for (var r = this[t + --e], o = 1; 0 < e && (o *= 256);) r += this[t + --e] * o;
                    return r
                }, f.prototype.readUint8 = f.prototype.readUInt8 = function(t, e) {
                    return t >>>= 0, e || x(t, 1, this.length), this[t]
                }, f.prototype.readUint16LE = f.prototype.readUInt16LE = function(t, e) {
                    return t >>>= 0, e || x(t, 2, this.length), this[t] | this[t + 1] << 8
                }, f.prototype.readUint16BE = f.prototype.readUInt16BE = function(t, e) {
                    return t >>>= 0, e || x(t, 2, this.length), this[t] << 8 | this[t + 1]
                }, f.prototype.readUint32LE = f.prototype.readUInt32LE = function(t, e) {
                    return t >>>= 0, e || x(t, 4, this.length), (this[t] | this[t + 1] << 8 | this[t + 2] << 16) + 16777216 * this[t + 3]
                }, f.prototype.readUint32BE = f.prototype.readUInt32BE = function(t, e) {
                    return t >>>= 0, e || x(t, 4, this.length), 16777216 * this[t] + (this[t + 1] << 16 | this[t + 2] << 8 | this[t + 3])
                }, f.prototype.readIntLE = function(t, e, n) {
                    t >>>= 0, e >>>= 0, n || x(t, e, this.length);
                    for (var r = this[t], o = 1, i = 0; ++i < e && (o *= 256);) r += this[t + i] * o;
                    return (o *= 128) <= r && (r -= Math.pow(2, 8 * e)), r
                }, f.prototype.readIntBE = function(t, e, n) {
                    t >>>= 0, e >>>= 0, n || x(t, e, this.length);
                    for (var r = e, o = 1, i = this[t + --r]; 0 < r && (o *= 256);) i += this[t + --r] * o;
                    return (o *= 128) <= i && (i -= Math.pow(2, 8 * e)), i
                }, f.prototype.readInt8 = function(t, e) {
                    return t >>>= 0, e || x(t, 1, this.length), 128 & this[t] ? -1 * (255 - this[t] + 1) : this[t]
                }, f.prototype.readInt16LE = function(t, e) {
                    t >>>= 0, e || x(t, 2, this.length);
                    t = this[t] | this[t + 1] << 8;
                    return 32768 & t ? 4294901760 | t : t
                }, f.prototype.readInt16BE = function(t, e) {
                    t >>>= 0, e || x(t, 2, this.length);
                    t = this[t + 1] | this[t] << 8;
                    return 32768 & t ? 4294901760 | t : t
                }, f.prototype.readInt32LE = function(t, e) {
                    return t >>>= 0, e || x(t, 4, this.length), this[t] | this[t + 1] << 8 | this[t + 2] << 16 | this[t + 3] << 24
                }, f.prototype.readInt32BE = function(t, e) {
                    return t >>>= 0, e || x(t, 4, this.length), this[t] << 24 | this[t + 1] << 16 | this[t + 2] << 8 | this[t + 3]
                }, f.prototype.readFloatLE = function(t, e) {
                    return t >>>= 0, e || x(t, 4, this.length), i.read(this, t, !0, 23, 4)
                }, f.prototype.readFloatBE = function(t, e) {
                    return t >>>= 0, e || x(t, 4, this.length), i.read(this, t, !1, 23, 4)
                }, f.prototype.readDoubleLE = function(t, e) {
                    return t >>>= 0, e || x(t, 8, this.length), i.read(this, t, !0, 52, 8)
                }, f.prototype.readDoubleBE = function(t, e) {
                    return t >>>= 0, e || x(t, 8, this.length), i.read(this, t, !1, 52, 8)
                }, f.prototype.writeUintLE = f.prototype.writeUIntLE = function(t, e, n, r) {
                    t = +t, e >>>= 0, n >>>= 0, r || C(this, t, e, n, Math.pow(2, 8 * n) - 1, 0);
                    var o = 1,
                        i = 0;
                    for (this[e] = 255 & t; ++i < n && (o *= 256);) this[e + i] = t / o & 255;
                    return e + n
                }, f.prototype.writeUintBE = f.prototype.writeUIntBE = function(t, e, n, r) {
                    t = +t, e >>>= 0, n >>>= 0, r || C(this, t, e, n, Math.pow(2, 8 * n) - 1, 0);
                    var o = n - 1,
                        i = 1;
                    for (this[e + o] = 255 & t; 0 <= --o && (i *= 256);) this[e + o] = t / i & 255;
                    return e + n
                }, f.prototype.writeUint8 = f.prototype.writeUInt8 = function(t, e, n) {
                    return t = +t, e >>>= 0, n || C(this, t, e, 1, 255, 0), this[e] = 255 & t, e + 1
                }, f.prototype.writeUint16LE = f.prototype.writeUInt16LE = function(t, e, n) {
                    return t = +t, e >>>= 0, n || C(this, t, e, 2, 65535, 0), this[e] = 255 & t, this[e + 1] = t >>> 8, e + 2
                }, f.prototype.writeUint16BE = f.prototype.writeUInt16BE = function(t, e, n) {
                    return t = +t, e >>>= 0, n || C(this, t, e, 2, 65535, 0), this[e] = t >>> 8, this[e + 1] = 255 & t, e + 2
                }, f.prototype.writeUint32LE = f.prototype.writeUInt32LE = function(t, e, n) {
                    return t = +t, e >>>= 0, n || C(this, t, e, 4, 4294967295, 0), this[e + 3] = t >>> 24, this[e + 2] = t >>> 16, this[e + 1] = t >>> 8, this[e] = 255 & t, e + 4
                }, f.prototype.writeUint32BE = f.prototype.writeUInt32BE = function(t, e, n) {
                    return t = +t, e >>>= 0, n || C(this, t, e, 4, 4294967295, 0), this[e] = t >>> 24, this[e + 1] = t >>> 16, this[e + 2] = t >>> 8, this[e + 3] = 255 & t, e + 4
                }, f.prototype.writeIntLE = function(t, e, n, r) {
                    t = +t, e >>>= 0, r || C(this, t, e, n, (r = Math.pow(2, 8 * n - 1)) - 1, -r);
                    var o = 0,
                        i = 1,
                        a = 0;
                    for (this[e] = 255 & t; ++o < n && (i *= 256);) t < 0 && 0 === a && 0 !== this[e + o - 1] && (a = 1), this[e + o] = (t / i >> 0) - a & 255;
                    return e + n
                }, f.prototype.writeIntBE = function(t, e, n, r) {
                    t = +t, e >>>= 0, r || C(this, t, e, n, (r = Math.pow(2, 8 * n - 1)) - 1, -r);
                    var o = n - 1,
                        i = 1,
                        a = 0;
                    for (this[e + o] = 255 & t; 0 <= --o && (i *= 256);) t < 0 && 0 === a && 0 !== this[e + o + 1] && (a = 1), this[e + o] = (t / i >> 0) - a & 255;
                    return e + n
                }, f.prototype.writeInt8 = function(t, e, n) {
                    return t = +t, e >>>= 0, n || C(this, t, e, 1, 127, -128), t < 0 && (t = 255 + t + 1), this[e] = 255 & t, e + 1
                }, f.prototype.writeInt16LE = function(t, e, n) {
                    return t = +t, e >>>= 0, n || C(this, t, e, 2, 32767, -32768), this[e] = 255 & t, this[e + 1] = t >>> 8, e + 2
                }, f.prototype.writeInt16BE = function(t, e, n) {
                    return t = +t, e >>>= 0, n || C(this, t, e, 2, 32767, -32768), this[e] = t >>> 8, this[e + 1] = 255 & t, e + 2
                }, f.prototype.writeInt32LE = function(t, e, n) {
                    return t = +t, e >>>= 0, n || C(this, t, e, 4, 2147483647, -2147483648), this[e] = 255 & t, this[e + 1] = t >>> 8, this[e + 2] = t >>> 16, this[e + 3] = t >>> 24, e + 4
                }, f.prototype.writeInt32BE = function(t, e, n) {
                    return t = +t, e >>>= 0, n || C(this, t, e, 4, 2147483647, -2147483648), t < 0 && (t = 4294967295 + t + 1), this[e] = t >>> 24, this[e + 1] = t >>> 16, this[e + 2] = t >>> 8, this[e + 3] = 255 & t, e + 4
                }, f.prototype.writeFloatLE = function(t, e, n) {
                    return A(this, t, e, !0, n)
                }, f.prototype.writeFloatBE = function(t, e, n) {
                    return A(this, t, e, !1, n)
                }, f.prototype.writeDoubleLE = function(t, e, n) {
                    return N(this, t, e, !0, n)
                }, f.prototype.writeDoubleBE = function(t, e, n) {
                    return N(this, t, e, !1, n)
                }, f.prototype.copy = function(t, e, n, r) {
                    if (!f.isBuffer(t)) throw new TypeError("argument should be a Buffer");
                    if (n = n || 0, r || 0 === r || (r = this.length), e >= t.length && (e = t.length), e = e || 0, 0 < r && r < n && (r = n), r === n) return 0;
                    if (0 === t.length || 0 === this.length) return 0;
                    if (e < 0) throw new RangeError("targetStart out of bounds");
                    if (n < 0 || n >= this.length) throw new RangeError("Index out of range");
                    if (r < 0) throw new RangeError("sourceEnd out of bounds");
                    r > this.length && (r = this.length), t.length - e < r - n && (r = t.length - e + n);
                    var o = r - n;
                    return this === t && "function" == typeof Uint8Array.prototype.copyWithin ? this.copyWithin(e, n, r) : Uint8Array.prototype.set.call(t, this.subarray(n, r), e), o
                }, f.prototype.fill = function(t, e, n, r) {
                    if ("string" == typeof t) {
                        if ("string" == typeof e ? (r = e, e = 0, n = this.length) : "string" == typeof n && (r = n, n = this.length), void 0 !== r && "string" != typeof r) throw new TypeError("encoding must be a string");
                        if ("string" == typeof r && !f.isEncoding(r)) throw new TypeError("Unknown encoding: " + r);
                        var o;
                        1 === t.length && (o = t.charCodeAt(0), ("utf8" === r && o < 128 || "latin1" === r) && (t = o))
                    } else "number" == typeof t ? t &= 255 : "boolean" == typeof t && (t = Number(t));
                    if (e < 0 || this.length < e || this.length < n) throw new RangeError("Out of range index");
                    if (n <= e) return this;
                    var i;
                    if (e >>>= 0, n = void 0 === n ? this.length : n >>> 0, "number" == typeof(t = t || 0))
                        for (i = e; i < n; ++i) this[i] = t;
                    else {
                        var a = f.isBuffer(t) ? t : f.from(t, r),
                            u = a.length;
                        if (0 === u) throw new TypeError('The value "' + t + '" is invalid for argument "value"');
                        for (i = 0; i < n - e; ++i) this[i + e] = a[i % u]
                    }
                    return this
                };
                var T = /[^+/0-9A-Za-z-_]/g;

                function O(t, e) {
                    var n;
                    e = e || 1 / 0;
                    for (var r = t.length, o = null, i = [], a = 0; a < r; ++a) {
                        if (55295 < (n = t.charCodeAt(a)) && n < 57344) {
                            if (!o) {
                                if (56319 < n) {
                                    -1 < (e -= 3) && i.push(239, 191, 189);
                                    continue
                                }
                                if (a + 1 === r) {
                                    -1 < (e -= 3) && i.push(239, 191, 189);
                                    continue
                                }
                                o = n;
                                continue
                            }
                            if (n < 56320) {
                                -1 < (e -= 3) && i.push(239, 191, 189), o = n;
                                continue
                            }
                            n = 65536 + (o - 55296 << 10 | n - 56320)
                        } else o && -1 < (e -= 3) && i.push(239, 191, 189);
                        if (o = null, n < 128) {
                            if (--e < 0) break;
                            i.push(n)
                        } else if (n < 2048) {
                            if ((e -= 2) < 0) break;
                            i.push(n >> 6 | 192, 63 & n | 128)
                        } else if (n < 65536) {
                            if ((e -= 3) < 0) break;
                            i.push(n >> 12 | 224, n >> 6 & 63 | 128, 63 & n | 128)
                        } else {
                            if (!(n < 1114112)) throw new Error("Invalid code point");
                            if ((e -= 4) < 0) break;
                            i.push(n >> 18 | 240, n >> 12 & 63 | 128, n >> 6 & 63 | 128, 63 & n | 128)
                        }
                    }
                    return i
                }

                function k(t) {
                    return u.toByteArray(function(t) {
                        if ((t = (t = t.split("=")[0]).trim().replace(T, "")).length < 2) return "";
                        for (; t.length % 4 != 0;) t += "=";
                        return t
                    }(t))
                }

                function M(t, e, n, r) {
                    for (var o = 0; o < r && !(o + n >= e.length || o >= t.length); ++o) e[o + n] = t[o];
                    return o
                }

                function R(t, e) {
                    return t instanceof e || null != t && null != t.constructor && null != t.constructor.name && t.constructor.name === e.name
                }

                function P(t) {
                    return t != t
                }
                var I = function() {
                    for (var t = "0123456789abcdef", e = new Array(256), n = 0; n < 16; ++n)
                        for (var r = 16 * n, o = 0; o < 16; ++o) e[r + o] = t[n] + t[o];
                    return e
                }()
            },
            512: function(t) {
                "use strict";
                var p = {
                    single_source_shortest_paths: function(t, e, n) {
                        var r = {},
                            o = {};
                        o[e] = 0;
                        var i, a, u, s, l, c, f, d = p.PriorityQueue.make();
                        for (d.push(e, 0); !d.empty();)
                            for (u in a = (i = d.pop()).value, s = i.cost, l = t[a] || {}) l.hasOwnProperty(u) && (c = s + l[u], f = o[u], (void 0 === o[u] || c < f) && (o[u] = c, d.push(u, c), r[u] = a));
                        if (void 0 === n || void 0 !== o[n]) return r;
                        n = ["Could not find a path from ", e, " to ", n, "."].join("");
                        throw new Error(n)
                    },
                    extract_shortest_path_from_predecessor_list: function(t, e) {
                        for (var n = [], r = e; r;) n.push(r), t[r], r = t[r];
                        return n.reverse(), n
                    },
                    find_path: function(t, e, n) {
                        e = p.single_source_shortest_paths(t, e, n);
                        return p.extract_shortest_path_from_predecessor_list(e, n)
                    },
                    PriorityQueue: {
                        make: function(t) {
                            var e, n = p.PriorityQueue,
                                r = {};
                            for (e in t = t || {}, n) n.hasOwnProperty(e) && (r[e] = n[e]);
                            return r.queue = [], r.sorter = t.sorter || n.default_sorter, r
                        },
                        default_sorter: function(t, e) {
                            return t.cost - e.cost
                        },
                        push: function(t, e) {
                            e = {
                                value: t,
                                cost: e
                            };
                            this.queue.push(e), this.queue.sort(this.sorter)
                        },
                        pop: function() {
                            return this.queue.shift()
                        },
                        empty: function() {
                            return 0 === this.queue.length
                        }
                    }
                };
                t.exports = p
            },
            8898: function(t, e) {
                /*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> */
                e.read = function(t, e, n, r, o) {
                    var i, a, u = 8 * o - r - 1,
                        s = (1 << u) - 1,
                        l = s >> 1,
                        c = -7,
                        f = n ? o - 1 : 0,
                        d = n ? -1 : 1,
                        n = t[e + f];
                    for (f += d, i = n & (1 << -c) - 1, n >>= -c, c += u; 0 < c; i = 256 * i + t[e + f], f += d, c -= 8);
                    for (a = i & (1 << -c) - 1, i >>= -c, c += r; 0 < c; a = 256 * a + t[e + f], f += d, c -= 8);
                    if (0 === i) i = 1 - l;
                    else {
                        if (i === s) return a ? NaN : 1 / 0 * (n ? -1 : 1);
                        a += Math.pow(2, r), i -= l
                    }
                    return (n ? -1 : 1) * a * Math.pow(2, i - r)
                }, e.write = function(t, e, n, r, o, i) {
                    var a, u, s = 8 * i - o - 1,
                        l = (1 << s) - 1,
                        c = l >> 1,
                        f = 23 === o ? Math.pow(2, -24) - Math.pow(2, -77) : 0,
                        d = r ? 0 : i - 1,
                        p = r ? 1 : -1,
                        i = e < 0 || 0 === e && 1 / e < 0 ? 1 : 0;
                    for (e = Math.abs(e), isNaN(e) || e === 1 / 0 ? (u = isNaN(e) ? 1 : 0, a = l) : (a = Math.floor(Math.log(e) / Math.LN2), e * (r = Math.pow(2, -a)) < 1 && (a--, r *= 2), 2 <= (e += 1 <= a + c ? f / r : f * Math.pow(2, 1 - c)) * r && (a++, r /= 2), l <= a + c ? (u = 0, a = l) : 1 <= a + c ? (u = (e * r - 1) * Math.pow(2, o), a += c) : (u = e * Math.pow(2, c - 1) * Math.pow(2, o), a = 0)); 8 <= o; t[n + d] = 255 & u, d += p, u /= 256, o -= 8);
                    for (a = a << o | u, s += o; 0 < s; t[n + d] = 255 & a, d += p, a /= 256, s -= 8);
                    t[n + d - p] |= 128 * i
                }
            },
            5182: function(t) {
                var e = {}.toString;
                t.exports = Array.isArray || function(t) {
                    return "[object Array]" == e.call(t)
                }
            },
            9640: function(t, e, n) {
                var s = n(3013),
                    l = n(8595),
                    r = n(7616),
                    o = n(6646);

                function i(r, o, i, a, e) {
                    var t = [].slice.call(arguments, 1),
                        n = t.length,
                        t = "function" == typeof t[n - 1];
                    if (!t && !s()) throw new Error("Callback required as last argument");
                    if (!t) {
                        if (n < 1) throw new Error("Too few arguments provided");
                        return 1 === n ? (i = o, o = a = void 0) : 2 !== n || o.getContext || (a = i, i = o, o = void 0), new Promise(function(t, e) {
                            try {
                                var n = l.create(i, a);
                                t(r(n, o, a))
                            } catch (t) {
                                e(t)
                            }
                        })
                    }
                    if (n < 2) throw new Error("Too few arguments provided");
                    2 === n ? (e = i, i = o, o = a = void 0) : 3 === n && (o.getContext && void 0 === e ? (e = a, a = void 0) : (e = a, a = i, i = o, o = void 0));
                    try {
                        var u = l.create(i, a);
                        e(null, r(u, o, a))
                    } catch (t) {
                        e(t)
                    }
                }
                l.create, i.bind(null, r.render), e.hz = i.bind(null, r.renderToDataURL), i.bind(null, function(t, e, n) {
                    return o.render(t, n)
                })
            },
            3013: function(t) {
                t.exports = function() {
                    return "function" == typeof Promise && Promise.prototype && Promise.prototype.then
                }
            },
            3443: function(t, a, e) {
                var i = e(177).getSymbolSize;
                a.getRowColCoords = function(t) {
                    if (1 === t) return [];
                    for (var e = Math.floor(t / 7) + 2, t = i(t), n = 145 === t ? 26 : 2 * Math.ceil((t - 13) / (2 * e - 2)), r = [t - 7], o = 1; o < e - 1; o++) r[o] = r[o - 1] - n;
                    return r.push(6), r.reverse()
                }, a.getPositions = function(t) {
                    for (var e = [], n = a.getRowColCoords(t), r = n.length, o = 0; o < r; o++)
                        for (var i = 0; i < r; i++) 0 === o && 0 === i || 0 === o && i === r - 1 || o === r - 1 && 0 === i || e.push([n[o], n[i]]);
                    return e
                }
            },
            3014: function(t, e, n) {
                var r = n(347),
                    o = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", " ", "$", "%", "*", "+", "-", ".", "/", ":"];

                function i(t) {
                    this.mode = r.ALPHANUMERIC, this.data = t
                }
                i.getBitsLength = function(t) {
                    return 11 * Math.floor(t / 2) + t % 2 * 6
                }, i.prototype.getLength = function() {
                    return this.data.length
                }, i.prototype.getBitsLength = function() {
                    return i.getBitsLength(this.data.length)
                }, i.prototype.write = function(t) {
                    for (var e = 0; e + 2 <= this.data.length; e += 2) {
                        var n = 45 * o.indexOf(this.data[e]);
                        n += o.indexOf(this.data[e + 1]), t.put(n, 11)
                    }
                    this.data.length % 2 && t.put(o.indexOf(this.data[e]), 6)
                }, t.exports = i
            },
            4609: function(t) {
                function e() {
                    this.buffer = [], this.length = 0
                }
                e.prototype = {
                    get: function(t) {
                        var e = Math.floor(t / 8);
                        return 1 == (this.buffer[e] >>> 7 - t % 8 & 1)
                    },
                    put: function(t, e) {
                        for (var n = 0; n < e; n++) this.putBit(1 == (t >>> e - n - 1 & 1))
                    },
                    getLengthInBits: function() {
                        return this.length
                    },
                    putBit: function(t) {
                        var e = Math.floor(this.length / 8);
                        this.buffer.length <= e && this.buffer.push(0), t && (this.buffer[e] |= 128 >>> this.length % 8), this.length++
                    }
                }, t.exports = e
            },
            6601: function(t, e, n) {
                var r = n(7563);

                function o(t) {
                    if (!t || t < 1) throw new Error("BitMatrix size must be defined and greater than 0");
                    this.size = t, this.data = r.alloc(t * t), this.reservedBit = r.alloc(t * t)
                }
                o.prototype.set = function(t, e, n, r) {
                    e = t * this.size + e;
                    this.data[e] = n, r && (this.reservedBit[e] = !0)
                }, o.prototype.get = function(t, e) {
                    return this.data[t * this.size + e]
                }, o.prototype.xor = function(t, e, n) {
                    this.data[t * this.size + e] ^= n
                }, o.prototype.isReserved = function(t, e) {
                    return this.reservedBit[t * this.size + e]
                }, t.exports = o
            },
            902: function(t, e, n) {
                var r = n(7563),
                    o = n(347);

                function i(t) {
                    this.mode = o.BYTE, this.data = r.from(t)
                }
                i.getBitsLength = function(t) {
                    return 8 * t
                }, i.prototype.getLength = function() {
                    return this.data.length
                }, i.prototype.getBitsLength = function() {
                    return i.getBitsLength(this.data.length)
                }, i.prototype.write = function(t) {
                    for (var e = 0, n = this.data.length; e < n; e++) t.put(this.data[e], 8)
                }, t.exports = i
            },
            5154: function(t, e, n) {
                var r = n(3961),
                    o = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 1, 2, 2, 4, 1, 2, 4, 4, 2, 4, 4, 4, 2, 4, 6, 5, 2, 4, 6, 6, 2, 5, 8, 8, 4, 5, 8, 8, 4, 5, 8, 11, 4, 8, 10, 11, 4, 9, 12, 16, 4, 9, 16, 16, 6, 10, 12, 18, 6, 10, 17, 16, 6, 11, 16, 19, 6, 13, 18, 21, 7, 14, 21, 25, 8, 16, 20, 25, 8, 17, 23, 25, 9, 17, 23, 34, 9, 18, 25, 30, 10, 20, 27, 32, 12, 21, 29, 35, 12, 23, 34, 37, 12, 25, 34, 40, 13, 26, 35, 42, 14, 28, 38, 45, 15, 29, 40, 48, 16, 31, 43, 51, 17, 33, 45, 54, 18, 35, 48, 57, 19, 37, 51, 60, 19, 38, 53, 63, 20, 40, 56, 66, 21, 43, 59, 70, 22, 45, 62, 74, 24, 47, 65, 77, 25, 49, 68, 81],
                    i = [7, 10, 13, 17, 10, 16, 22, 28, 15, 26, 36, 44, 20, 36, 52, 64, 26, 48, 72, 88, 36, 64, 96, 112, 40, 72, 108, 130, 48, 88, 132, 156, 60, 110, 160, 192, 72, 130, 192, 224, 80, 150, 224, 264, 96, 176, 260, 308, 104, 198, 288, 352, 120, 216, 320, 384, 132, 240, 360, 432, 144, 280, 408, 480, 168, 308, 448, 532, 180, 338, 504, 588, 196, 364, 546, 650, 224, 416, 600, 700, 224, 442, 644, 750, 252, 476, 690, 816, 270, 504, 750, 900, 300, 560, 810, 960, 312, 588, 870, 1050, 336, 644, 952, 1110, 360, 700, 1020, 1200, 390, 728, 1050, 1260, 420, 784, 1140, 1350, 450, 812, 1200, 1440, 480, 868, 1290, 1530, 510, 924, 1350, 1620, 540, 980, 1440, 1710, 570, 1036, 1530, 1800, 570, 1064, 1590, 1890, 600, 1120, 1680, 1980, 630, 1204, 1770, 2100, 660, 1260, 1860, 2220, 720, 1316, 1950, 2310, 750, 1372, 2040, 2430];
                e.getBlocksCount = function(t, e) {
                    switch (e) {
                        case r.L:
                            return o[4 * (t - 1) + 0];
                        case r.M:
                            return o[4 * (t - 1) + 1];
                        case r.Q:
                            return o[4 * (t - 1) + 2];
                        case r.H:
                            return o[4 * (t - 1) + 3];
                        default:
                            return
                    }
                }, e.getTotalCodewordsCount = function(t, e) {
                    switch (e) {
                        case r.L:
                            return i[4 * (t - 1) + 0];
                        case r.M:
                            return i[4 * (t - 1) + 1];
                        case r.Q:
                            return i[4 * (t - 1) + 2];
                        case r.H:
                            return i[4 * (t - 1) + 3];
                        default:
                            return
                    }
                }
            },
            3961: function(t, n) {
                n.L = {
                    bit: 1
                }, n.M = {
                    bit: 0
                }, n.Q = {
                    bit: 3
                }, n.H = {
                    bit: 2
                }, n.isValid = function(t) {
                    return t && void 0 !== t.bit && 0 <= t.bit && t.bit < 4
                }, n.from = function(t, e) {
                    if (n.isValid(t)) return t;
                    try {
                        return function(t) {
                            if ("string" != typeof t) throw new Error("Param is not a string");
                            switch (t.toLowerCase()) {
                                case "l":
                                case "low":
                                    return n.L;
                                case "m":
                                case "medium":
                                    return n.M;
                                case "q":
                                case "quartile":
                                    return n.Q;
                                case "h":
                                case "high":
                                    return n.H;
                                default:
                                    throw new Error("Unknown EC Level: " + t)
                            }
                        }(t)
                    } catch (t) {
                        return e
                    }
                }
            },
            1842: function(t, e, n) {
                var r = n(177).getSymbolSize;
                e.getPositions = function(t) {
                    t = r(t);
                    return [
                        [0, 0],
                        [t - 7, 0],
                        [0, t - 7]
                    ]
                }
            },
            2846: function(t, e, n) {
                var r = n(177),
                    o = r.getBCHDigit(1335);
                e.getEncodedBits = function(t, e) {
                    for (var e = t.bit << 3 | e, n = e << 10; 0 <= r.getBCHDigit(n) - o;) n ^= 1335 << r.getBCHDigit(n) - o;
                    return 21522 ^ (e << 10 | n)
                }
            },
            2145: function(t, e, n) {
                var n = n(7563),
                    r = n.alloc(512),
                    o = n.alloc(256);
                ! function() {
                    for (var t = 1, e = 0; e < 255; e++) r[e] = t, o[t] = e, 256 & (t <<= 1) && (t ^= 285);
                    for (e = 255; e < 512; e++) r[e] = r[e - 255]
                }(), e.log = function(t) {
                    if (t < 1) throw new Error("log(" + t + ")");
                    return o[t]
                }, e.exp = function(t) {
                    return r[t]
                }, e.mul = function(t, e) {
                    return 0 === t || 0 === e ? 0 : r[o[t] + o[e]]
                }
            },
            3188: function(t, e, n) {
                var r = n(347),
                    o = n(177);

                function i(t) {
                    this.mode = r.KANJI, this.data = t
                }
                i.getBitsLength = function(t) {
                    return 13 * t
                }, i.prototype.getLength = function() {
                    return this.data.length
                }, i.prototype.getBitsLength = function() {
                    return i.getBitsLength(this.data.length)
                }, i.prototype.write = function(t) {
                    for (var e = 0; e < this.data.length; e++) {
                        var n = o.toSJIS(this.data[e]);
                        if (33088 <= n && n <= 40956) n -= 33088;
                        else {
                            if (!(57408 <= n && n <= 60351)) throw new Error("Invalid SJIS character: " + this.data[e] + "\nMake sure your charset is UTF-8");
                            n -= 49472
                        }
                        n = 192 * (n >>> 8 & 255) + (255 & n), t.put(n, 13)
                    }
                }, t.exports = i
            },
            1346: function(t, u) {
                u.Patterns = {
                    PATTERN000: 0,
                    PATTERN001: 1,
                    PATTERN010: 2,
                    PATTERN011: 3,
                    PATTERN100: 4,
                    PATTERN101: 5,
                    PATTERN110: 6,
                    PATTERN111: 7
                };
                var c = 3,
                    a = 3,
                    s = 40,
                    o = 10;
                u.isValid = function(t) {
                    return null != t && "" !== t && !isNaN(t) && 0 <= t && t <= 7
                }, u.from = function(t) {
                    return u.isValid(t) ? parseInt(t, 10) : void 0
                }, u.getPenaltyN1 = function(t) {
                    for (var e = t.size, n = 0, r = 0, o = 0, i = null, a = null, u = 0; u < e; u++) {
                        i = a = null;
                        for (var s = r = o = 0; s < e; s++) {
                            var l = t.get(u, s);
                            l === i ? r++ : (5 <= r && (n += c + (r - 5)), i = l, r = 1), (l = t.get(s, u)) === a ? o++ : (5 <= o && (n += c + (o - 5)), a = l, o = 1)
                        }
                        5 <= r && (n += c + (r - 5)), 5 <= o && (n += c + (o - 5))
                    }
                    return n
                }, u.getPenaltyN2 = function(t) {
                    for (var e = t.size, n = 0, r = 0; r < e - 1; r++)
                        for (var o = 0; o < e - 1; o++) {
                            var i = t.get(r, o) + t.get(r, o + 1) + t.get(r + 1, o) + t.get(r + 1, o + 1);
                            4 !== i && 0 !== i || n++
                        }
                    return n * a
                }, u.getPenaltyN3 = function(t) {
                    for (var e = t.size, n = 0, r = 0, o = 0, i = 0; i < e; i++)
                        for (var a = r = o = 0; a < e; a++) r = r << 1 & 2047 | t.get(i, a), 10 <= a && (1488 === r || 93 === r) && n++, o = o << 1 & 2047 | t.get(a, i), 10 <= a && (1488 === o || 93 === o) && n++;
                    return n * s
                }, u.getPenaltyN4 = function(t) {
                    for (var e = 0, n = t.data.length, r = 0; r < n; r++) e += t.data[r];
                    return Math.abs(Math.ceil(100 * e / n / 5) - 10) * o
                }, u.applyMask = function(t, e) {
                    for (var n = e.size, r = 0; r < n; r++)
                        for (var o = 0; o < n; o++) e.isReserved(o, r) || e.xor(o, r, function(t, e, n) {
                            switch (t) {
                                case u.Patterns.PATTERN000:
                                    return (e + n) % 2 == 0;
                                case u.Patterns.PATTERN001:
                                    return e % 2 == 0;
                                case u.Patterns.PATTERN010:
                                    return n % 3 == 0;
                                case u.Patterns.PATTERN011:
                                    return (e + n) % 3 == 0;
                                case u.Patterns.PATTERN100:
                                    return (Math.floor(e / 2) + Math.floor(n / 3)) % 2 == 0;
                                case u.Patterns.PATTERN101:
                                    return e * n % 2 + e * n % 3 == 0;
                                case u.Patterns.PATTERN110:
                                    return (e * n % 2 + e * n % 3) % 2 == 0;
                                case u.Patterns.PATTERN111:
                                    return (e * n % 3 + (e + n) % 2) % 2 == 0;
                                default:
                                    throw new Error("bad maskPattern:" + t)
                            }
                        }(t, o, r))
                }, u.getBestMask = function(t, e) {
                    for (var n = Object.keys(u.Patterns).length, r = 0, o = 1 / 0, i = 0; i < n; i++) {
                        e(i), u.applyMask(i, t);
                        var a = u.getPenaltyN1(t) + u.getPenaltyN2(t) + u.getPenaltyN3(t) + u.getPenaltyN4(t);
                        u.applyMask(i, t), a < o && (o = a, r = i)
                    }
                    return r
                }
            },
            347: function(t, n, e) {
                var r = e(8475),
                    o = e(2526);
                n.NUMERIC = {
                    id: "Numeric",
                    bit: 1,
                    ccBits: [10, 12, 14]
                }, n.ALPHANUMERIC = {
                    id: "Alphanumeric",
                    bit: 2,
                    ccBits: [9, 11, 13]
                }, n.BYTE = {
                    id: "Byte",
                    bit: 4,
                    ccBits: [8, 16, 16]
                }, n.KANJI = {
                    id: "Kanji",
                    bit: 8,
                    ccBits: [8, 10, 12]
                }, n.MIXED = {
                    bit: -1
                }, n.getCharCountIndicator = function(t, e) {
                    if (!t.ccBits) throw new Error("Invalid mode: " + t);
                    if (!r.isValid(e)) throw new Error("Invalid version: " + e);
                    return 1 <= e && e < 10 ? t.ccBits[0] : e < 27 ? t.ccBits[1] : t.ccBits[2]
                }, n.getBestModeForData = function(t) {
                    return o.testNumeric(t) ? n.NUMERIC : o.testAlphanumeric(t) ? n.ALPHANUMERIC : o.testKanji(t) ? n.KANJI : n.BYTE
                }, n.toString = function(t) {
                    if (t && t.id) return t.id;
                    throw new Error("Invalid mode")
                }, n.isValid = function(t) {
                    return t && t.bit && t.ccBits
                }, n.from = function(t, e) {
                    if (n.isValid(t)) return t;
                    try {
                        return function(t) {
                            if ("string" != typeof t) throw new Error("Param is not a string");
                            switch (t.toLowerCase()) {
                                case "numeric":
                                    return n.NUMERIC;
                                case "alphanumeric":
                                    return n.ALPHANUMERIC;
                                case "kanji":
                                    return n.KANJI;
                                case "byte":
                                    return n.BYTE;
                                default:
                                    throw new Error("Unknown mode: " + t)
                            }
                        }(t)
                    } catch (t) {
                        return e
                    }
                }
            },
            7844: function(t, e, n) {
                var r = n(347);

                function o(t) {
                    this.mode = r.NUMERIC, this.data = t.toString()
                }
                o.getBitsLength = function(t) {
                    return 10 * Math.floor(t / 3) + (t % 3 ? t % 3 * 3 + 1 : 0)
                }, o.prototype.getLength = function() {
                    return this.data.length
                }, o.prototype.getBitsLength = function() {
                    return o.getBitsLength(this.data.length)
                }, o.prototype.write = function(t) {
                    for (var e, n, r = 0; r + 3 <= this.data.length; r += 3) e = this.data.substr(r, 3), n = parseInt(e, 10), t.put(n, 10);
                    var o = this.data.length - r;
                    0 < o && (e = this.data.substr(r), n = parseInt(e, 10), t.put(n, 3 * o + 1))
                }, t.exports = o
            },
            6749: function(t, r, e) {
                var a = e(7563),
                    u = e(2145);
                r.mul = function(t, e) {
                    for (var n = a.alloc(t.length + e.length - 1), r = 0; r < t.length; r++)
                        for (var o = 0; o < e.length; o++) n[r + o] ^= u.mul(t[r], e[o]);
                    return n
                }, r.mod = function(t, e) {
                    for (var n = a.from(t); 0 <= n.length - e.length;) {
                        for (var r = n[0], o = 0; o < e.length; o++) n[o] ^= u.mul(e[o], r);
                        for (var i = 0; i < n.length && 0 === n[i];) i++;
                        n = n.slice(i)
                    }
                    return n
                }, r.generateECPolynomial = function(t) {
                    for (var e = a.from([1]), n = 0; n < t; n++) e = r.mul(e, [1, u.exp(n)]);
                    return e
                }
            },
            8595: function(t, e, n) {
                var S = n(7563),
                    x = n(177),
                    i = n(3961),
                    a = n(4609),
                    u = n(6601),
                    l = n(3443),
                    c = n(1842),
                    f = n(1346),
                    C = n(5154),
                    _ = n(9707),
                    d = n(9750),
                    s = n(2846),
                    p = n(347),
                    h = n(886),
                    y = n(5182);

                function m(t, e, n) {
                    for (var r, o = t.size, i = s.getEncodedBits(e, n), a = 0; a < 15; a++) r = 1 == (i >> a & 1), a < 6 ? t.set(a, 8, r, !0) : a < 8 ? t.set(a + 1, 8, r, !0) : t.set(o - 15 + a, 8, r, !0), a < 8 ? t.set(8, o - a - 1, r, !0) : a < 9 ? t.set(8, 15 - a - 1 + 1, r, !0) : t.set(8, 15 - a - 1, r, !0);
                    t.set(o - 8, 8, 1, !0)
                }

                function g(e, t, n) {
                    var r = new a;
                    n.forEach(function(t) {
                        r.put(t.mode.bit, 4), r.put(t.getLength(), p.getCharCountIndicator(t.mode, e)), t.write(r)
                    });
                    n = 8 * (x.getSymbolTotalCodewords(e) - C.getTotalCodewordsCount(e, t));
                    for (r.getLengthInBits() + 4 <= n && r.put(0, 4); r.getLengthInBits() % 8 != 0;) r.putBit(0);
                    for (var o = (n - r.getLengthInBits()) / 8, i = 0; i < o; i++) r.put(i % 2 ? 17 : 236, 8);
                    return function(t, e, n) {
                        for (var r = x.getSymbolTotalCodewords(e), o = C.getTotalCodewordsCount(e, n), o = r - o, i = C.getBlocksCount(e, n), a = i - r % i, n = Math.floor(r / i), u = Math.floor(o / i), s = u + 1, l = n - u, c = new _(l), f = 0, d = new Array(i), p = new Array(i), h = 0, y = S.from(t.buffer), m = 0; m < i; m++) {
                            var g = m < a ? u : s;
                            d[m] = y.slice(f, f + g), p[m] = c.encode(d[m]), f += g, h = Math.max(h, g)
                        }
                        var v, b, E = S.alloc(r),
                            w = 0;
                        for (v = 0; v < h; v++)
                            for (b = 0; b < i; b++) v < d[b].length && (E[w++] = d[b][v]);
                        for (v = 0; v < l; v++)
                            for (b = 0; b < i; b++) E[w++] = p[b][v];
                        return E
                    }(r, e, t)
                }

                function v(t, s, e, n) {
                    var r;
                    if (y(t)) r = h.fromArray(t);
                    else {
                        if ("string" != typeof t) throw new Error("Invalid data");
                        var o, i = s;
                        i || (o = h.rawSplit(t), i = d.getBestVersionForData(o, e)), r = h.fromString(t, i || 40)
                    }
                    t = d.getBestVersionForData(r, e);
                    if (!t) throw new Error("The amount of data is too big to be stored in a QR Code");
                    if (s) {
                        if (s < t) throw new Error("\nThe chosen QR Code version cannot contain this amount of data.\nMinimum version required to store current data is: " + t + ".\n")
                    } else s = t;
                    i = g(s, e, r), t = x.getSymbolSize(s), t = new u(t);
                    return function(t) {
                            for (var e = t.size, n = c.getPositions(s), r = 0; r < n.length; r++)
                                for (var o = n[r][0], i = n[r][1], a = -1; a <= 7; a++)
                                    if (!(o + a <= -1 || e <= o + a))
                                        for (var u = -1; u <= 7; u++) i + u <= -1 || e <= i + u || (0 <= a && a <= 6 && (0 === u || 6 === u) || 0 <= u && u <= 6 && (0 === a || 6 === a) || 2 <= a && a <= 4 && 2 <= u && u <= 4 ? t.set(o + a, i + u, !0, !0) : t.set(o + a, i + u, !1, !0))
                        }(t),
                        function(t) {
                            for (var e = t.size, n = 8; n < e - 8; n++) {
                                var r = n % 2 == 0;
                                t.set(n, 6, r, !0), t.set(6, n, r, !0)
                            }
                        }(t),
                        function(t) {
                            for (var e = l.getPositions(s), n = 0; n < e.length; n++)
                                for (var r = e[n][0], o = e[n][1], i = -2; i <= 2; i++)
                                    for (var a = -2; a <= 2; a++) - 2 === i || 2 === i || -2 === a || 2 === a || 0 === i && 0 === a ? t.set(r + i, o + a, !0, !0) : t.set(r + i, o + a, !1, !0)
                        }(t), m(t, e, 0), 7 <= s && function(t) {
                            for (var e, n, r, o = t.size, i = d.getEncodedBits(s), a = 0; a < 18; a++) e = Math.floor(a / 3), n = a % 3 + o - 8 - 3, r = 1 == (i >> a & 1), t.set(e, n, r, !0), t.set(n, e, r, !0)
                        }(t),
                        function(t, e) {
                            for (var n = t.size, r = -1, o = n - 1, i = 7, a = 0, u = n - 1; 0 < u; u -= 2)
                                for (6 === u && u--;;) {
                                    for (var s, l = 0; l < 2; l++) t.isReserved(o, u - l) || (s = !1, a < e.length && (s = 1 == (e[a] >>> i & 1)), t.set(o, u - l, s), -1 === --i && (a++, i = 7));
                                    if ((o += r) < 0 || n <= o) {
                                        o -= r, r = -r;
                                        break
                                    }
                                }
                        }(t, i), isNaN(n) && (n = f.getBestMask(t, m.bind(null, t, e))), f.applyMask(n, t), m(t, e, n), {
                            modules: t,
                            version: s,
                            errorCorrectionLevel: e,
                            maskPattern: n,
                            segments: r
                        }
                }
                e.create = function(t, e) {
                    if (void 0 === t || "" === t) throw new Error("No input text");
                    var n, r, o = i.M;
                    return void 0 !== e && (o = i.from(e.errorCorrectionLevel, i.M), n = d.from(e.version), r = f.from(e.maskPattern), e.toSJISFunc && x.setToSJISFunction(e.toSJISFunc)), v(t, n, o, r)
                }
            },
            9707: function(t, e, n) {
                var r = n(7563),
                    o = n(6749),
                    i = n(816).lW;

                function a(t) {
                    this.genPoly = void 0, this.degree = t, this.degree && this.initialize(this.degree)
                }
                a.prototype.initialize = function(t) {
                    this.degree = t, this.genPoly = o.generateECPolynomial(this.degree)
                }, a.prototype.encode = function(t) {
                    if (!this.genPoly) throw new Error("Encoder not initialized");
                    var e = r.alloc(this.degree),
                        n = i.concat([t, e], t.length + this.degree),
                        e = o.mod(n, this.genPoly),
                        t = this.degree - e.length;
                    if (0 < t) {
                        n = r.alloc(this.degree);
                        return e.copy(n, t), n
                    }
                    return e
                }, t.exports = a
            },
            2526: function(t, e) {
                var n = "(?:[u3000-u303F]|[u3040-u309F]|[u30A0-u30FF]|[uFF00-uFFEF]|[u4E00-u9FAF]|[u2605-u2606]|[u2190-u2195]|u203B|[u2010u2015u2018u2019u2025u2026u201Cu201Du2225u2260]|[u0391-u0451]|[u00A7u00A8u00B1u00B4u00D7u00F7])+",
                    r = "(?:(?![A-Z0-9 $%*+\\-./:]|" + (n = n.replace(/u/g, "\\u")) + ")(?:.|[\r\n]))+";
                e.KANJI = new RegExp(n, "g"), e.BYTE_KANJI = new RegExp("[^A-Z0-9 $%*+\\-./:]+", "g"), e.BYTE = new RegExp(r, "g"), e.NUMERIC = new RegExp("[0-9]+", "g"), e.ALPHANUMERIC = new RegExp("[A-Z $%*+\\-./:]+", "g");
                var o = new RegExp("^" + n + "$"),
                    i = new RegExp("^[0-9]+$"),
                    a = new RegExp("^[A-Z0-9 $%*+\\-./:]+$");
                e.testKanji = function(t) {
                    return o.test(t)
                }, e.testNumeric = function(t) {
                    return i.test(t)
                }, e.testAlphanumeric = function(t) {
                    return a.test(t)
                }
            },
            886: function(t, a, e) {
                var p = e(347),
                    r = e(7844),
                    o = e(3014),
                    i = e(902),
                    u = e(3188),
                    s = e(2526),
                    l = e(177),
                    c = e(512);

                function f(t) {
                    return unescape(encodeURIComponent(t)).length
                }

                function d(t, e, n) {
                    for (var r, o = []; null !== (r = t.exec(n));) o.push({
                        data: r[0],
                        index: r.index,
                        mode: e,
                        length: r[0].length
                    });
                    return o
                }

                function h(t) {
                    var e, n = d(s.NUMERIC, p.NUMERIC, t),
                        r = d(s.ALPHANUMERIC, p.ALPHANUMERIC, t),
                        t = l.isKanjiModeEnabled() ? (e = d(s.BYTE, p.BYTE, t), d(s.KANJI, p.KANJI, t)) : (e = d(s.BYTE_KANJI, p.BYTE, t), []);
                    return n.concat(r, e, t).sort(function(t, e) {
                        return t.index - e.index
                    }).map(function(t) {
                        return {
                            data: t.data,
                            mode: t.mode,
                            length: t.length
                        }
                    })
                }

                function y(t, e) {
                    switch (e) {
                        case p.NUMERIC:
                            return r.getBitsLength(t);
                        case p.ALPHANUMERIC:
                            return o.getBitsLength(t);
                        case p.KANJI:
                            return u.getBitsLength(t);
                        case p.BYTE:
                            return i.getBitsLength(t)
                    }
                }

                function n(t, e) {
                    var n = p.getBestModeForData(t),
                        e = p.from(e, n);
                    if (e !== p.BYTE && e.bit < n.bit) throw new Error('"' + t + '" cannot be encoded with mode ' + p.toString(e) + ".\n Suggested mode is: " + p.toString(n));
                    switch (e !== p.KANJI || l.isKanjiModeEnabled() || (e = p.BYTE), e) {
                        case p.NUMERIC:
                            return new r(t);
                        case p.ALPHANUMERIC:
                            return new o(t);
                        case p.KANJI:
                            return new u(t);
                        case p.BYTE:
                            return new i(t)
                    }
                }
                a.fromArray = function(t) {
                    return t.reduce(function(t, e) {
                        return "string" == typeof e ? t.push(n(e, null)) : e.data && t.push(n(e.data, e.mode)), t
                    }, [])
                }, a.fromString = function(t, e) {
                    for (var n = function(t, e) {
                            for (var n = {}, r = {
                                    start: {}
                                }, o = ["start"], i = 0; i < t.length; i++) {
                                for (var a = t[i], u = [], s = 0; s < a.length; s++) {
                                    var l = a[s],
                                        c = "" + i + s;
                                    u.push(c), n[c] = {
                                        node: l,
                                        lastCount: 0
                                    }, r[c] = {};
                                    for (var f = 0; f < o.length; f++) {
                                        var d = o[f];
                                        n[d] && n[d].node.mode === l.mode ? (r[d][c] = y(n[d].lastCount + l.length, l.mode) - y(n[d].lastCount, l.mode), n[d].lastCount += l.length) : (n[d] && (n[d].lastCount = l.length), r[d][c] = y(l.length, l.mode) + 4 + p.getCharCountIndicator(l.mode, e))
                                    }
                                }
                                o = u
                            }
                            for (f = 0; f < o.length; f++) r[o[f]].end = 0;
                            return {
                                map: r,
                                table: n
                            }
                        }(function(t) {
                            for (var e = [], n = 0; n < t.length; n++) {
                                var r = t[n];
                                switch (r.mode) {
                                    case p.NUMERIC:
                                        e.push([r, {
                                            data: r.data,
                                            mode: p.ALPHANUMERIC,
                                            length: r.length
                                        }, {
                                            data: r.data,
                                            mode: p.BYTE,
                                            length: r.length
                                        }]);
                                        break;
                                    case p.ALPHANUMERIC:
                                        e.push([r, {
                                            data: r.data,
                                            mode: p.BYTE,
                                            length: r.length
                                        }]);
                                        break;
                                    case p.KANJI:
                                        e.push([r, {
                                            data: r.data,
                                            mode: p.BYTE,
                                            length: f(r.data)
                                        }]);
                                        break;
                                    case p.BYTE:
                                        e.push([{
                                            data: r.data,
                                            mode: p.BYTE,
                                            length: f(r.data)
                                        }])
                                }
                            }
                            return e
                        }(h(t, l.isKanjiModeEnabled())), e), r = c.find_path(n.map, "start", "end"), o = [], i = 1; i < r.length - 1; i++) o.push(n.table[r[i]].node);
                    return a.fromArray(o.reduce(function(t, e) {
                        var n = 0 <= t.length - 1 ? t[t.length - 1] : null;
                        return n && n.mode === e.mode ? t[t.length - 1].data += e.data : t.push(e), t
                    }, []))
                }, a.rawSplit = function(t) {
                    return a.fromArray(h(t, l.isKanjiModeEnabled()))
                }
            },
            177: function(t, e) {
                var n, r = [0, 26, 44, 70, 100, 134, 172, 196, 242, 292, 346, 404, 466, 532, 581, 655, 733, 815, 901, 991, 1085, 1156, 1258, 1364, 1474, 1588, 1706, 1828, 1921, 2051, 2185, 2323, 2465, 2611, 2761, 2876, 3034, 3196, 3362, 3532, 3706];
                e.getSymbolSize = function(t) {
                    if (!t) throw new Error('"version" cannot be null or undefined');
                    if (t < 1 || 40 < t) throw new Error('"version" should be in range from 1 to 40');
                    return 4 * t + 17
                }, e.getSymbolTotalCodewords = function(t) {
                    return r[t]
                }, e.getBCHDigit = function(t) {
                    for (var e = 0; 0 !== t;) e++, t >>>= 1;
                    return e
                }, e.setToSJISFunction = function(t) {
                    if ("function" != typeof t) throw new Error('"toSJISFunc" is not a valid function.');
                    n = t
                }, e.isKanjiModeEnabled = function() {
                    return void 0 !== n
                }, e.toSJIS = function(t) {
                    return n(t)
                }
            },
            8475: function(t, e) {
                e.isValid = function(t) {
                    return !isNaN(t) && 1 <= t && t <= 40
                }
            },
            9750: function(t, o, e) {
                var i = e(177),
                    a = e(5154),
                    r = e(3961),
                    u = e(347),
                    s = e(8475),
                    l = e(5182),
                    n = i.getBCHDigit(7973);

                function c(t, e) {
                    return u.getCharCountIndicator(t, e) + 4
                }

                function f(t, e) {
                    for (var n = 1; n <= 40; n++)
                        if (function(t, n) {
                                var r = 0;
                                return t.forEach(function(t) {
                                    var e = c(t.mode, n);
                                    r += e + t.getBitsLength()
                                }), r
                            }(t, n) <= o.getCapacity(n, e, u.MIXED)) return n
                }
                o.from = function(t, e) {
                    return s.isValid(t) ? parseInt(t, 10) : e
                }, o.getCapacity = function(t, e, n) {
                    if (!s.isValid(t)) throw new Error("Invalid QR Code version");
                    void 0 === n && (n = u.BYTE);
                    e = 8 * (i.getSymbolTotalCodewords(t) - a.getTotalCodewordsCount(t, e));
                    if (n === u.MIXED) return e;
                    var r = e - c(n, t);
                    switch (n) {
                        case u.NUMERIC:
                            return Math.floor(r / 10 * 3);
                        case u.ALPHANUMERIC:
                            return Math.floor(r / 11 * 2);
                        case u.KANJI:
                            return Math.floor(r / 13);
                        case u.BYTE:
                        default:
                            return Math.floor(r / 8)
                    }
                }, o.getBestVersionForData = function(t, e) {
                    var n, e = r.from(e, r.M);
                    if (l(t)) {
                        if (1 < t.length) return f(t, e);
                        if (0 === t.length) return 1;
                        n = t[0]
                    } else n = t;
                    return function(t, e, n) {
                        for (var r = 1; r <= 40; r++)
                            if (e <= o.getCapacity(r, n, t)) return r
                    }(n.mode, n.getLength(), e)
                }, o.getEncodedBits = function(t) {
                    if (!s.isValid(t) || t < 7) throw new Error("Invalid QR Code version");
                    for (var e = t << 12; 0 <= i.getBCHDigit(e) - n;) e ^= 7973 << i.getBCHDigit(e) - n;
                    return t << 12 | e
                }
            },
            7616: function(t, r, e) {
                var a = e(9993);
                r.render = function(t, e, n) {
                    var r = n,
                        o = e;
                    void 0 !== r || e && e.getContext || (r = e, e = void 0), e || (o = function() {
                        try {
                            return document.createElement("canvas")
                        } catch (t) {
                            throw new Error("You need to specify a canvas element")
                        }
                    }()), r = a.getOptions(r);
                    var i = a.getImageWidth(t.modules.size, r),
                        n = o.getContext("2d"),
                        e = n.createImageData(i, i);
                    return a.qrToImageData(e.data, t, r), r = o, i = i, n.clearRect(0, 0, r.width, r.height), r.style || (r.style = {}), r.height = i, r.width = i, r.style.height = i + "px", r.style.width = i + "px", n.putImageData(e, 0, 0), o
                }, r.renderToDataURL = function(t, e, n) {
                    void 0 !== n || e && e.getContext || (n = e, e = void 0), n = n || {};
                    t = r.render(t, e, n), e = n.type || "image/png", n = n.rendererOpts || {};
                    return t.toDataURL(e, n.quality)
                }
            },
            6646: function(t, e, n) {
                var a = n(9993);

                function u(t, e) {
                    var n = t.a / 255,
                        t = e + '="' + t.hex + '"';
                    return n < 1 ? t + " " + e + '-opacity="' + n.toFixed(2).slice(1) + '"' : t
                }

                function c(t, e, n) {
                    e = t + e;
                    return void 0 !== n && (e += " " + n), e
                }
                e.render = function(t, e, n) {
                    var r = a.getOptions(e),
                        o = t.modules.size,
                        i = t.modules.data,
                        e = o + 2 * r.margin,
                        t = r.color.light.a ? "<path " + u(r.color.light, "fill") + ' d="M0 0h' + e + "v" + e + 'H0z"/>' : "",
                        o = "<path " + u(r.color.dark, "stroke") + ' d="' + function(t, e, n) {
                            for (var r = "", o = 0, i = !1, a = 0, u = 0; u < t.length; u++) {
                                var s = Math.floor(u % e),
                                    l = Math.floor(u / e);
                                s || i || (i = !0), t[u] ? (a++, 0 < u && 0 < s && t[u - 1] || (r += i ? c("M", s + n, .5 + l + n) : c("m", o, 0), o = 0, i = !1), s + 1 < e && t[u + 1] || (r += c("h", a), a = 0)) : o++
                            }
                            return r
                        }(i, o, r.margin) + '"/>',
                        e = 'viewBox="0 0 ' + e + " " + e + '"',
                        o = '<svg xmlns="http://www.w3.org/2000/svg" ' + (r.width ? 'width="' + r.width + '" height="' + r.width + '" ' : "") + e + ' shape-rendering="crispEdges">' + t + o + "</svg>\n";
                    return "function" == typeof n && n(null, o), o
                }
            },
            9993: function(t, p) {
                function o(t) {
                    if ("number" == typeof t && (t = t.toString()), "string" != typeof t) throw new Error("Color should be defined as hex string");
                    var e = t.slice().replace("#", "").split("");
                    if (e.length < 3 || 5 === e.length || 8 < e.length) throw new Error("Invalid hex color: " + t);
                    3 !== e.length && 4 !== e.length || (e = Array.prototype.concat.apply([], e.map(function(t) {
                        return [t, t]
                    }))), 6 === e.length && e.push("F", "F");
                    t = parseInt(e.join(""), 16);
                    return {
                        r: t >> 24 & 255,
                        g: t >> 16 & 255,
                        b: t >> 8 & 255,
                        a: 255 & t,
                        hex: "#" + e.slice(0, 6).join("")
                    }
                }
                p.getOptions = function(t) {
                    (t = t || {}).color || (t.color = {});
                    var e = void 0 === t.margin || null === t.margin || t.margin < 0 ? 4 : t.margin,
                        n = t.width && 21 <= t.width ? t.width : void 0,
                        r = t.scale || 4;
                    return {
                        width: n,
                        scale: n ? 4 : r,
                        margin: e,
                        color: {
                            dark: o(t.color.dark || "#000000ff"),
                            light: o(t.color.light || "#ffffffff")
                        },
                        type: t.type,
                        rendererOpts: t.rendererOpts || {}
                    }
                }, p.getScale = function(t, e) {
                    return e.width && e.width >= t + 2 * e.margin ? e.width / (t + 2 * e.margin) : e.scale
                }, p.getImageWidth = function(t, e) {
                    var n = p.getScale(t, e);
                    return Math.floor((t + 2 * e.margin) * n)
                }, p.qrToImageData = function(t, e, n) {
                    for (var r = e.modules.size, o = e.modules.data, i = p.getScale(r, n), a = Math.floor((r + 2 * n.margin) * i), u = n.margin * i, s = [n.color.light, n.color.dark], l = 0; l < a; l++)
                        for (var c = 0; c < a; c++) {
                            var f = 4 * (l * a + c),
                                d = n.color.light;
                            u <= l && u <= c && l < a - u && c < a - u && (d = s[o[Math.floor((l - u) / i) * r + Math.floor((c - u) / i)] ? 1 : 0]), t[f++] = d.r, t[f++] = d.g, t[f++] = d.b, t[f] = d.a
                        }
                }
            },
            7563: function(t, e, n) {
                "use strict";
                var a = n(5182);
                var r = (u.TYPED_ARRAY_SUPPORT = function() {
                    try {
                        var t = new Uint8Array(1);
                        return t.__proto__ = {
                            __proto__: Uint8Array.prototype,
                            foo: function() {
                                return 42
                            }
                        }, 42 === t.foo()
                    } catch (t) {
                        return !1
                    }
                }()) ? 2147483647 : 1073741823;

                function u(t, e, n) {
                    return u.TYPED_ARRAY_SUPPORT || this instanceof u ? "number" == typeof t ? l(this, t) : function(t, e, n, r) {
                        if ("number" == typeof e) throw new TypeError('"value" argument must not be a number');
                        if ("undefined" != typeof ArrayBuffer && e instanceof ArrayBuffer) return function(t, e, n, r) {
                            if (n < 0 || e.byteLength < n) throw new RangeError("'offset' is out of bounds");
                            if (e.byteLength < n + (r || 0)) throw new RangeError("'length' is out of bounds");
                            r = void 0 === n && void 0 === r ? new Uint8Array(e) : void 0 === r ? new Uint8Array(e, n) : new Uint8Array(e, n, r);
                            u.TYPED_ARRAY_SUPPORT ? r.__proto__ = u.prototype : r = o(t, r);
                            return r
                        }(t, e, n, r);
                        return ("string" != typeof e ? function(t, e) {
                            if (u.isBuffer(e)) {
                                var n = 0 | i(e.length),
                                    r = s(t, n);
                                return 0 === r.length ? r : (e.copy(r, 0, 0, n), r)
                            }
                            if (e) {
                                if ("undefined" != typeof ArrayBuffer && e.buffer instanceof ArrayBuffer || "length" in e) return "number" != typeof e.length || function(t) {
                                    return t != t
                                }(e.length) ? s(t, 0) : o(t, e);
                                if ("Buffer" === e.type && Array.isArray(e.data)) return o(t, e.data)
                            }
                            throw new TypeError("First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.")
                        } : function(t, e) {
                            var n = 0 | f(e),
                                t = s(t, n),
                                e = t.write(e);
                            e !== n && (t = t.slice(0, e));
                            return t
                        })(t, e)
                    }(this, t, e, n) : new u(t, e, n)
                }

                function i(t) {
                    if (r <= t) throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x" + r.toString(16) + " bytes");
                    return 0 | t
                }

                function s(t, e) {
                    var n;
                    return u.TYPED_ARRAY_SUPPORT ? (n = new Uint8Array(e)).__proto__ = u.prototype : (null === (n = t) && (n = new u(e)), n.length = e), n
                }

                function l(t, e) {
                    var n = s(t, e < 0 ? 0 : 0 | i(e));
                    if (!u.TYPED_ARRAY_SUPPORT)
                        for (var r = 0; r < e; ++r) n[r] = 0;
                    return n
                }

                function o(t, e) {
                    for (var n = e.length < 0 ? 0 : 0 | i(e.length), r = s(t, n), o = 0; o < n; o += 1) r[o] = 255 & e[o];
                    return r
                }

                function c(t, e) {
                    var n;
                    e = e || 1 / 0;
                    for (var r = t.length, o = null, i = [], a = 0; a < r; ++a) {
                        if (55295 < (n = t.charCodeAt(a)) && n < 57344) {
                            if (!o) {
                                if (56319 < n) {
                                    -1 < (e -= 3) && i.push(239, 191, 189);
                                    continue
                                }
                                if (a + 1 === r) {
                                    -1 < (e -= 3) && i.push(239, 191, 189);
                                    continue
                                }
                                o = n;
                                continue
                            }
                            if (n < 56320) {
                                -1 < (e -= 3) && i.push(239, 191, 189), o = n;
                                continue
                            }
                            n = 65536 + (o - 55296 << 10 | n - 56320)
                        } else o && -1 < (e -= 3) && i.push(239, 191, 189);
                        if (o = null, n < 128) {
                            if (--e < 0) break;
                            i.push(n)
                        } else if (n < 2048) {
                            if ((e -= 2) < 0) break;
                            i.push(n >> 6 | 192, 63 & n | 128)
                        } else if (n < 65536) {
                            if ((e -= 3) < 0) break;
                            i.push(n >> 12 | 224, n >> 6 & 63 | 128, 63 & n | 128)
                        } else {
                            if (!(n < 1114112)) throw new Error("Invalid code point");
                            if ((e -= 4) < 0) break;
                            i.push(n >> 18 | 240, n >> 12 & 63 | 128, n >> 6 & 63 | 128, 63 & n | 128)
                        }
                    }
                    return i
                }

                function f(t) {
                    return u.isBuffer(t) ? t.length : "undefined" != typeof ArrayBuffer && "function" == typeof ArrayBuffer.isView && (ArrayBuffer.isView(t) || t instanceof ArrayBuffer) ? t.byteLength : ("string" != typeof t && (t = "" + t), 0 === t.length ? 0 : c(t).length)
                }

                function d(t, e, n, r) {
                    return function(t, e, n, r) {
                        for (var o = 0; o < r && !(o + n >= e.length || o >= t.length); ++o) e[o + n] = t[o];
                        return o
                    }(c(e, t.length - n), t, n, r)
                }
                u.TYPED_ARRAY_SUPPORT && (u.prototype.__proto__ = Uint8Array.prototype, u.__proto__ = Uint8Array, "undefined" != typeof Symbol && Symbol.species && u[Symbol.species] === u && Object.defineProperty(u, Symbol.species, {
                    value: null,
                    configurable: !0,
                    enumerable: !1,
                    writable: !1
                })), u.prototype.write = function(t, e, n) {
                    void 0 === e || void 0 === n && "string" == typeof e ? (n = this.length, e = 0) : isFinite(e) && (e |= 0, isFinite(n) ? n |= 0 : n = void 0);
                    var r = this.length - e;
                    if ((void 0 === n || r < n) && (n = r), 0 < t.length && (n < 0 || e < 0) || e > this.length) throw new RangeError("Attempt to write outside buffer bounds");
                    return d(this, t, e, n)
                }, u.prototype.slice = function(t, e) {
                    var n = this.length;
                    if ((t = ~~t) < 0 ? (t += n) < 0 && (t = 0) : n < t && (t = n), (e = void 0 === e ? n : ~~e) < 0 ? (e += n) < 0 && (e = 0) : n < e && (e = n), e < t && (e = t), u.TYPED_ARRAY_SUPPORT)(o = this.subarray(t, e)).__proto__ = u.prototype;
                    else
                        for (var r = e - t, o = new u(r, void 0), i = 0; i < r; ++i) o[i] = this[i + t];
                    return o
                }, u.prototype.copy = function(t, e, n, r) {
                    if (n = n || 0, r || 0 === r || (r = this.length), e >= t.length && (e = t.length), e = e || 0, 0 < r && r < n && (r = n), r === n) return 0;
                    if (0 === t.length || 0 === this.length) return 0;
                    if (e < 0) throw new RangeError("targetStart out of bounds");
                    if (n < 0 || n >= this.length) throw new RangeError("sourceStart out of bounds");
                    if (r < 0) throw new RangeError("sourceEnd out of bounds");
                    r > this.length && (r = this.length), t.length - e < r - n && (r = t.length - e + n);
                    var o, i = r - n;
                    if (this === t && n < e && e < r)
                        for (o = i - 1; 0 <= o; --o) t[o + e] = this[o + n];
                    else if (i < 1e3 || !u.TYPED_ARRAY_SUPPORT)
                        for (o = 0; o < i; ++o) t[o + e] = this[o + n];
                    else Uint8Array.prototype.set.call(t, this.subarray(n, n + i), e);
                    return i
                }, u.prototype.fill = function(t, e, n) {
                    var r;
                    if ("string" == typeof t ? ("string" == typeof e ? (e = 0, n = this.length) : "string" == typeof n && (n = this.length), 1 !== t.length || (r = t.charCodeAt(0)) < 256 && (t = r)) : "number" == typeof t && (t &= 255), e < 0 || this.length < e || this.length < n) throw new RangeError("Out of range index");
                    if (n <= e) return this;
                    if (e >>>= 0, n = void 0 === n ? this.length : n >>> 0, "number" == typeof(t = t || 0))
                        for (a = e; a < n; ++a) this[a] = t;
                    else
                        for (var o = u.isBuffer(t) ? t : new u(t), i = o.length, a = 0; a < n - e; ++a) this[a + e] = o[a % i];
                    return this
                }, u.concat = function(t, e) {
                    if (!a(t)) throw new TypeError('"list" argument must be an Array of Buffers');
                    if (0 === t.length) return s(null, 0);
                    if (void 0 === e)
                        for (o = e = 0; o < t.length; ++o) e += t[o].length;
                    for (var n = l(null, e), r = 0, o = 0; o < t.length; ++o) {
                        var i = t[o];
                        if (!u.isBuffer(i)) throw new TypeError('"list" argument must be an Array of Buffers');
                        i.copy(n, r), r += i.length
                    }
                    return n
                }, u.byteLength = f, u.prototype._isBuffer = !0, u.isBuffer = function(t) {
                    return !(null == t || !t._isBuffer)
                }, t.exports.alloc = function(t) {
                    t = new u(t);
                    return t.fill(0), t
                }, t.exports.from = function(t) {
                    return new u(t)
                }
            },
            2005: function(t, e, n) {
                t.exports = n(9035)
            },
            8633: function(t, e, n) {
                t.exports = n(2670)
            },
            3473: function(t, e, n) {
                t.exports = n(6428)
            },
            2085: function(t, e, n) {
                t.exports = n(8209)
            },
            2668: function(t, e, n) {
                t.exports = n(5980)
            },
            8839: function(t, e, n) {
                t.exports = n(8252)
            },
            7746: function(t, e, n) {
                t.exports = n(3413)
            },
            9774: function(t, e, n) {
                t.exports = n(9139)
            },
            7312: function(t, e, n) {
                t.exports = n(9206)
            },
            258: function(t, e, n) {
                t.exports = n(5243)
            },
            2722: function(t, e, n) {
                t.exports = n(215)
            },
            4341: function(t) {
                t.exports = function(t) {
                    if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return t
                }, t.exports.default = t.exports, t.exports.__esModule = !0
            },
            4922: function(t, e, n) {
                var r = n(2005);

                function o() {
                    return t.exports = o = r || function(t) {
                        for (var e = 1; e < arguments.length; e++) {
                            var n, r = arguments[e];
                            for (n in r) Object.prototype.hasOwnProperty.call(r, n) && (t[n] = r[n])
                        }
                        return t
                    }, t.exports.default = t.exports, t.exports.__esModule = !0, o.apply(this, arguments)
                }
                t.exports = o, t.exports.default = t.exports, t.exports.__esModule = !0
            },
            8318: function(t, e, n) {
                var r = n(8633),
                    o = n(7427);
                t.exports = function(t, e) {
                    t.prototype = r(e.prototype), t.prototype.constructor = t, o(t, e)
                }, t.exports.default = t.exports, t.exports.__esModule = !0
            },
            7154: function(t) {
                t.exports = function(t) {
                    return t && t.__esModule ? t : {
                        default: t
                    }
                }, t.exports.default = t.exports, t.exports.__esModule = !0
            },
            4110: function(t, e, n) {
                var a = n(1977).default,
                    r = n(2722),
                    u = n(3473),
                    s = n(2668);

                function l(t) {
                    if ("function" != typeof r) return null;
                    var e = new r,
                        n = new r;
                    return (l = function(t) {
                        return t ? n : e
                    })(t)
                }
                t.exports = function(t, e) {
                    if (!e && t && t.__esModule) return t;
                    if (null === t || "object" !== a(t) && "function" != typeof t) return {
                        default: t
                    };
                    if ((e = l(e)) && e.has(t)) return e.get(t);
                    var n, r, o = {},
                        i = u && s;
                    for (n in t) "default" !== n && Object.prototype.hasOwnProperty.call(t, n) && ((r = i ? s(t, n) : null) && (r.get || r.set) ? u(o, n, r) : o[n] = t[n]);
                    return o.default = t, e && e.set(t, o), o
                }, t.exports.default = t.exports, t.exports.__esModule = !0
            },
            8331: function(t, e, n) {
                var a = n(8839);
                t.exports = function(t, e) {
                    if (null == t) return {};
                    for (var n, r = {}, o = a(t), i = 0; i < o.length; i++) n = o[i], 0 <= e.indexOf(n) || (r[n] = t[n]);
                    return r
                }, t.exports.default = t.exports, t.exports.__esModule = !0
            },
            7427: function(n, t, e) {
                var r = e(7746);

                function o(t, e) {
                    return n.exports = o = r || function(t, e) {
                        return t.__proto__ = e, t
                    }, n.exports.default = n.exports, n.exports.__esModule = !0, o(t, e)
                }
                n.exports = o, n.exports.default = n.exports, n.exports.__esModule = !0
            },
            1977: function(e, t, n) {
                var r = n(7312),
                    o = n(258);

                function i(t) {
                    return e.exports = i = "function" == typeof r && "symbol" == typeof o ? function(t) {
                        return typeof t
                    } : function(t) {
                        return t && "function" == typeof r && t.constructor === r && t !== r.prototype ? "symbol" : typeof t
                    }, e.exports.default = e.exports, e.exports.__esModule = !0, i(t)
                }
                e.exports = i, e.exports.default = e.exports, e.exports.__esModule = !0
            },
            9035: function(t, e, n) {
                n(8566), t.exports = n(1417).Object.assign
            },
            2670: function(t, e, n) {
                n(9685);
                var r = n(1417).Object;
                t.exports = function(t, e) {
                    return r.create(t, e)
                }
            },
            6428: function(t, e, n) {
                n(3022);
                var r = n(1417).Object;
                t.exports = function(t, e, n) {
                    return r.defineProperty(t, e, n)
                }
            },
            8209: function(t, e, n) {
                n(4574), t.exports = n(1417).Object.entries
            },
            5980: function(t, e, n) {
                n(2134);
                var r = n(1417).Object;
                t.exports = function(t, e) {
                    return r.getOwnPropertyDescriptor(t, e)
                }
            },
            8252: function(t, e, n) {
                n(4046), t.exports = n(1417).Object.keys
            },
            3413: function(t, e, n) {
                n(5460), t.exports = n(1417).Object.setPrototypeOf
            },
            9139: function(t, e, n) {
                n(1954), t.exports = n(1417).Object.values
            },
            9206: function(t, e, n) {
                n(4732), n(5220), n(5739), n(9771), t.exports = n(1417).Symbol
            },
            5243: function(t, e, n) {
                n(3165), n(4220), t.exports = n(9522).f("iterator")
            },
            215: function(t, e, n) {
                n(5220), n(4220), n(9222), n(2920), n(1013), t.exports = n(1417).WeakMap
            },
            9879: function(t) {
                t.exports = function(t) {
                    if ("function" != typeof t) throw TypeError(t + " is not a function!");
                    return t
                }
            },
            5533: function(t) {
                t.exports = function() {}
            },
            5849: function(t) {
                t.exports = function(t, e, n, r) {
                    if (!(t instanceof e) || void 0 !== r && r in t) throw TypeError(n + ": incorrect invocation!");
                    return t
                }
            },
            8026: function(t, e, n) {
                var r = n(7742);
                t.exports = function(t) {
                    if (!r(t)) throw TypeError(t + " is not an object!");
                    return t
                }
            },
            7950: function(t, e, n) {
                var s = n(2815),
                    l = n(712),
                    c = n(6453);
                t.exports = function(u) {
                    return function(t, e, n) {
                        var r, o = s(t),
                            i = l(o.length),
                            a = c(n, i);
                        if (u && e != e) {
                            for (; a < i;)
                                if ((r = o[a++]) != r) return !0
                        } else
                            for (; a < i; a++)
                                if ((u || a in o) && o[a] === e) return u || a || 0;
                        return !u && -1
                    }
                }
            },
            8430: function(t, e, n) {
                var b = n(842),
                    E = n(2266),
                    w = n(7315),
                    S = n(712),
                    r = n(2719);
                t.exports = function(f, t) {
                    var d = 1 == f,
                        p = 2 == f,
                        h = 3 == f,
                        y = 4 == f,
                        m = 6 == f,
                        g = 5 == f || m,
                        v = t || r;
                    return function(t, e, n) {
                        for (var r, o, i = w(t), a = E(i), u = b(e, n, 3), s = S(a.length), l = 0, c = d ? v(t, s) : p ? v(t, 0) : void 0; l < s; l++)
                            if ((g || l in a) && (o = u(r = a[l], l, i), f))
                                if (d) c[l] = o;
                                else if (o) switch (f) {
                            case 3:
                                return !0;
                            case 5:
                                return r;
                            case 6:
                                return l;
                            case 2:
                                c.push(r)
                        } else if (y) return !1;
                        return m ? -1 : h || y ? y : c
                    }
                }
            },
            523: function(t, e, n) {
                var r = n(7742),
                    o = n(7141),
                    i = n(5765)("species");
                t.exports = function(t) {
                    var e;
                    return o(t) && ("function" != typeof(e = t.constructor) || e !== Array && !o(e.prototype) || (e = void 0), r(e) && null === (e = e[i]) && (e = void 0)), void 0 === e ? Array : e
                }
            },
            2719: function(t, e, n) {
                var r = n(523);
                t.exports = function(t, e) {
                    return new(r(t))(e)
                }
            },
            1330: function(t, e, n) {
                var r = n(9860),
                    o = n(5765)("toStringTag"),
                    i = "Arguments" == r(function() {
                        return arguments
                    }());
                t.exports = function(t) {
                    var e;
                    return void 0 === t ? "Undefined" : null === t ? "Null" : "string" == typeof(t = function(t, e) {
                        try {
                            return t[e]
                        } catch (t) {}
                    }(e = Object(t), o)) ? t : i ? r(e) : "Object" == (t = r(e)) && "function" == typeof e.callee ? "Arguments" : t
                }
            },
            9860: function(t) {
                var e = {}.toString;
                t.exports = function(t) {
                    return e.call(t).slice(8, -1)
                }
            },
            3636: function(t, e, n) {
                "use strict";

                function a(t) {
                    return t._l || (t._l = new g)
                }

                function r(t, e) {
                    return h(t.a, function(t) {
                        return t[0] === e
                    })
                }
                var u = n(7621),
                    s = n(193).getWeak,
                    o = n(8026),
                    l = n(7742),
                    c = n(5849),
                    f = n(7814),
                    i = n(8430),
                    d = n(7558),
                    p = n(7231),
                    h = i(5),
                    y = i(6),
                    m = 0,
                    g = function() {
                        this.a = []
                    };
                g.prototype = {
                    get: function(t) {
                        t = r(this, t);
                        if (t) return t[1]
                    },
                    has: function(t) {
                        return !!r(this, t)
                    },
                    set: function(t, e) {
                        var n = r(this, t);
                        n ? n[1] = e : this.a.push([t, e])
                    },
                    delete: function(e) {
                        var t = y(this.a, function(t) {
                            return t[0] === e
                        });
                        return ~t && this.a.splice(t, 1), !!~t
                    }
                }, t.exports = {
                    getConstructor: function(t, n, r, o) {
                        var i = t(function(t, e) {
                            c(t, i, n, "_i"), t._t = n, t._i = m++, t._l = void 0, null != e && f(e, r, t[o], t)
                        });
                        return u(i.prototype, {
                            delete: function(t) {
                                if (!l(t)) return !1;
                                var e = s(t);
                                return !0 === e ? a(p(this, n)).delete(t) : e && d(e, this._i) && delete e[this._i]
                            },
                            has: function(t) {
                                if (!l(t)) return !1;
                                var e = s(t);
                                return !0 === e ? a(p(this, n)).has(t) : e && d(e, this._i)
                            }
                        }), i
                    },
                    def: function(t, e, n) {
                        var r = s(o(e), !0);
                        return !0 === r ? a(t).set(e, n) : r[t._i] = n, t
                    },
                    ufstore: a
                }
            },
            1371: function(t, e, n) {
                "use strict";
                var f = n(1931),
                    d = n(3864),
                    p = n(193),
                    h = n(7110),
                    y = n(7362),
                    m = n(7621),
                    g = n(7814),
                    v = n(5849),
                    b = n(7742),
                    E = n(7560),
                    w = n(6135).f,
                    S = n(8430)(0),
                    x = n(4765);
                t.exports = function(n, t, e, r, o, i) {
                    var a = f[n],
                        u = a,
                        s = o ? "set" : "add",
                        l = u && u.prototype,
                        c = {};
                    return x && "function" == typeof u && (i || l.forEach && !h(function() {
                        (new u).entries().next()
                    })) ? (u = t(function(t, e) {
                        v(t, u, n, "_c"), t._c = new a, null != e && g(e, o, t[s], t)
                    }), S("add,clear,delete,forEach,get,has,set,keys,values,entries,toJSON".split(","), function(n) {
                        var r = "add" == n || "set" == n;
                        n in l && (!i || "clear" != n) && y(u.prototype, n, function(t, e) {
                            if (v(this, u, n), !r && i && !b(t)) return "get" == n && void 0;
                            e = this._c[n](0 === t ? 0 : t, e);
                            return r ? this : e
                        })
                    }), i || w(u.prototype, "size", {
                        get: function() {
                            return this._c.size
                        }
                    })) : (u = r.getConstructor(t, n, o, s), m(u.prototype, e), p.NEED = !0), E(u, n), c[n] = u, d(d.G + d.W + d.F, c), i || r.setStrong(u, n, o), u
                }
            },
            1417: function(t) {
                t = t.exports = {
                    version: "2.6.12"
                };
                "number" == typeof __e && (__e = t)
            },
            842: function(t, e, n) {
                var i = n(9879);
                t.exports = function(r, o, t) {
                    if (i(r), void 0 === o) return r;
                    switch (t) {
                        case 1:
                            return function(t) {
                                return r.call(o, t)
                            };
                        case 2:
                            return function(t, e) {
                                return r.call(o, t, e)
                            };
                        case 3:
                            return function(t, e, n) {
                                return r.call(o, t, e, n)
                            }
                    }
                    return function() {
                        return r.apply(o, arguments)
                    }
                }
            },
            6838: function(t) {
                t.exports = function(t) {
                    if (null == t) throw TypeError("Can't call method on  " + t);
                    return t
                }
            },
            4765: function(t, e, n) {
                t.exports = !n(7110)(function() {
                    return 7 != Object.defineProperty({}, "a", {
                        get: function() {
                            return 7
                        }
                    }).a
                })
            },
            8922: function(t, e, n) {
                var r = n(7742),
                    o = n(1931).document,
                    i = r(o) && r(o.createElement);
                t.exports = function(t) {
                    return i ? o.createElement(t) : {}
                }
            },
            4561: function(t) {
                t.exports = "constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")
            },
            1664: function(t, e, n) {
                var u = n(3450),
                    s = n(3132),
                    l = n(9266);
                t.exports = function(t) {
                    var e = u(t),
                        n = s.f;
                    if (n)
                        for (var r, o = n(t), i = l.f, a = 0; o.length > a;) i.call(t, r = o[a++]) && e.push(r);
                    return e
                }
            },
            3864: function(t, e, n) {
                var y = n(1931),
                    m = n(1417),
                    g = n(842),
                    v = n(7362),
                    b = n(7558),
                    E = "prototype",
                    w = function(t, e, n) {
                        var r, o, i, a = t & w.F,
                            u = t & w.G,
                            s = t & w.S,
                            l = t & w.P,
                            c = t & w.B,
                            f = t & w.W,
                            d = u ? m : m[e] || (m[e] = {}),
                            p = d[E],
                            h = u ? y : s ? y[e] : (y[e] || {})[E];
                        for (r in u && (n = e), n)(o = !a && h && void 0 !== h[r]) && b(d, r) || (i = (o ? h : n)[r], d[r] = u && "function" != typeof h[r] ? n[r] : c && o ? g(i, y) : f && h[r] == i ? function(r) {
                            function t(t, e, n) {
                                if (this instanceof r) {
                                    switch (arguments.length) {
                                        case 0:
                                            return new r;
                                        case 1:
                                            return new r(t);
                                        case 2:
                                            return new r(t, e)
                                    }
                                    return new r(t, e, n)
                                }
                                return r.apply(this, arguments)
                            }
                            return t[E] = r[E], t
                        }(i) : l && "function" == typeof i ? g(Function.call, i) : i, l && ((d.virtual || (d.virtual = {}))[r] = i, t & w.R && p && !p[r] && v(p, r, i)))
                    };
                w.F = 1, w.G = 2, w.S = 4, w.P = 8, w.B = 16, w.W = 32, w.U = 64, w.R = 128, t.exports = w
            },
            7110: function(t) {
                t.exports = function(t) {
                    try {
                        return !!t()
                    } catch (t) {
                        return !0
                    }
                }
            },
            7814: function(t, e, n) {
                var f = n(842),
                    d = n(6697),
                    p = n(3424),
                    h = n(8026),
                    y = n(712),
                    m = n(7507),
                    g = {},
                    v = {},
                    t = t.exports = function(t, e, n, r, o) {
                        var i, a, u, s, o = o ? function() {
                                return t
                            } : m(t),
                            l = f(n, r, e ? 2 : 1),
                            c = 0;
                        if ("function" != typeof o) throw TypeError(t + " is not iterable!");
                        if (p(o)) {
                            for (i = y(t.length); c < i; c++)
                                if ((s = e ? l(h(a = t[c])[0], a[1]) : l(t[c])) === g || s === v) return s
                        } else
                            for (u = o.call(t); !(a = u.next()).done;)
                                if ((s = d(u, l, a.value, e)) === g || s === v) return s
                    };
                t.BREAK = g, t.RETURN = v
            },
            1931: function(t) {
                t = t.exports = "undefined" != typeof window && window.Math == Math ? window : "undefined" != typeof self && self.Math == Math ? self : Function("return this")();
                "number" == typeof __g && (__g = t)
            },
            7558: function(t) {
                var n = {}.hasOwnProperty;
                t.exports = function(t, e) {
                    return n.call(t, e)
                }
            },
            7362: function(t, e, n) {
                var r = n(6135),
                    o = n(6116);
                t.exports = n(4765) ? function(t, e, n) {
                    return r.f(t, e, o(1, n))
                } : function(t, e, n) {
                    return t[e] = n, t
                }
            },
            3645: function(t, e, n) {
                n = n(1931).document;
                t.exports = n && n.documentElement
            },
            9538: function(t, e, n) {
                t.exports = !n(4765) && !n(7110)(function() {
                    return 7 != Object.defineProperty(n(8922)("div"), "a", {
                        get: function() {
                            return 7
                        }
                    }).a
                })
            },
            2266: function(t, e, n) {
                var r = n(9860);
                t.exports = Object("z").propertyIsEnumerable(0) ? Object : function(t) {
                    return "String" == r(t) ? t.split("") : Object(t)
                }
            },
            3424: function(t, e, n) {
                var r = n(7308),
                    o = n(5765)("iterator"),
                    i = Array.prototype;
                t.exports = function(t) {
                    return void 0 !== t && (r.Array === t || i[o] === t)
                }
            },
            7141: function(t, e, n) {
                var r = n(9860);
                t.exports = Array.isArray || function(t) {
                    return "Array" == r(t)
                }
            },
            7742: function(t) {
                t.exports = function(t) {
                    return "object" == typeof t ? null !== t : "function" == typeof t
                }
            },
            6697: function(t, e, n) {
                var i = n(8026);
                t.exports = function(e, t, n, r) {
                    try {
                        return r ? t(i(n)[0], n[1]) : t(n)
                    } catch (t) {
                        var o = e.return;
                        throw void 0 !== o && i(o.call(e)), t
                    }
                }
            },
            4787: function(t, e, n) {
                "use strict";
                var r = n(5985),
                    o = n(6116),
                    i = n(7560),
                    a = {};
                n(7362)(a, n(5765)("iterator"), function() {
                    return this
                }), t.exports = function(t, e, n) {
                    t.prototype = r(a, {
                        next: o(1, n)
                    }), i(t, e + " Iterator")
                }
            },
            9908: function(t, e, n) {
                "use strict";

                function v() {
                    return this
                }
                var b = n(7857),
                    E = n(3864),
                    w = n(2965),
                    S = n(7362),
                    x = n(7308),
                    C = n(4787),
                    _ = n(7560),
                    A = n(8685),
                    N = n(5765)("iterator"),
                    T = !([].keys && "next" in [].keys()),
                    O = "values";
                t.exports = function(t, e, n, r, o, i, a) {
                    C(n, e, r);

                    function u(t) {
                        if (!T && t in h) return h[t];
                        switch (t) {
                            case "keys":
                            case O:
                                return function() {
                                    return new n(this, t)
                                }
                        }
                        return function() {
                            return new n(this, t)
                        }
                    }
                    var s, l, c, f = e + " Iterator",
                        d = o == O,
                        p = !1,
                        h = t.prototype,
                        y = h[N] || h["@@iterator"] || o && h[o],
                        m = y || u(o),
                        g = o ? d ? u("entries") : m : void 0,
                        r = "Array" == e && h.entries || y;
                    if (r && (c = A(r.call(new t))) !== Object.prototype && c.next && (_(c, f, !0), b || "function" == typeof c[N] || S(c, N, v)), d && y && y.name !== O && (p = !0, m = function() {
                            return y.call(this)
                        }), b && !a || !T && !p && h[N] || S(h, N, m), x[e] = m, x[f] = v, o)
                        if (s = {
                                values: d ? m : u(O),
                                keys: i ? m : u("keys"),
                                entries: g
                            }, a)
                            for (l in s) l in h || w(h, l, s[l]);
                        else E(E.P + E.F * (T || p), e, s);
                    return s
                }
            },
            3642: function(t) {
                t.exports = function(t, e) {
                    return {
                        value: e,
                        done: !!t
                    }
                }
            },
            7308: function(t) {
                t.exports = {}
            },
            7857: function(t) {
                t.exports = !0
            },
            193: function(t, e, n) {
                function r(t) {
                    u(t, o, {
                        value: {
                            i: "O" + ++s,
                            w: {}
                        }
                    })
                }
                var o = n(3469)("meta"),
                    i = n(7742),
                    a = n(7558),
                    u = n(6135).f,
                    s = 0,
                    l = Object.isExtensible || function() {
                        return !0
                    },
                    c = !n(7110)(function() {
                        return l(Object.preventExtensions({}))
                    }),
                    f = t.exports = {
                        KEY: o,
                        NEED: !1,
                        fastKey: function(t, e) {
                            if (!i(t)) return "symbol" == typeof t ? t : ("string" == typeof t ? "S" : "P") + t;
                            if (!a(t, o)) {
                                if (!l(t)) return "F";
                                if (!e) return "E";
                                r(t)
                            }
                            return t[o].i
                        },
                        getWeak: function(t, e) {
                            if (!a(t, o)) {
                                if (!l(t)) return !0;
                                if (!e) return !1;
                                r(t)
                            }
                            return t[o].w
                        },
                        onFreeze: function(t) {
                            return c && f.NEED && l(t) && !a(t, o) && r(t), t
                        }
                    }
            },
            7678: function(t, e, n) {
                "use strict";
                var f = n(4765),
                    d = n(3450),
                    p = n(3132),
                    h = n(9266),
                    y = n(7315),
                    m = n(2266),
                    o = Object.assign;
                t.exports = !o || n(7110)(function() {
                    var t = {},
                        e = {},
                        n = Symbol(),
                        r = "abcdefghijklmnopqrst";
                    return t[n] = 7, r.split("").forEach(function(t) {
                        e[t] = t
                    }), 7 != o({}, t)[n] || Object.keys(o({}, e)).join("") != r
                }) ? function(t) {
                    for (var e = y(t), n = arguments.length, r = 1, o = p.f, i = h.f; r < n;)
                        for (var a, u = m(arguments[r++]), s = o ? d(u).concat(o(u)) : d(u), l = s.length, c = 0; c < l;) a = s[c++], f && !i.call(u, a) || (e[a] = u[a]);
                    return e
                } : o
            },
            5985: function(t, e, n) {
                function r() {}
                var o = n(8026),
                    i = n(7566),
                    a = n(4561),
                    u = n(9886)("IE_PROTO"),
                    s = "prototype",
                    l = function() {
                        var t = n(8922)("iframe"),
                            e = a.length;
                        for (t.style.display = "none", n(3645).appendChild(t), t.src = "javascript:", (t = t.contentWindow.document).open(), t.write("<script>document.F=Object<\/script>"), t.close(), l = t.F; e--;) delete l[s][a[e]];
                        return l()
                    };
                t.exports = Object.create || function(t, e) {
                    var n;
                    return null !== t ? (r[s] = o(t), n = new r, r[s] = null, n[u] = t) : n = l(), void 0 === e ? n : i(n, e)
                }
            },
            6135: function(t, e, n) {
                var r = n(8026),
                    o = n(9538),
                    i = n(6343),
                    a = Object.defineProperty;
                e.f = n(4765) ? Object.defineProperty : function(t, e, n) {
                    if (r(t), e = i(e, !0), r(n), o) try {
                        return a(t, e, n)
                    } catch (t) {}
                    if ("get" in n || "set" in n) throw TypeError("Accessors not supported!");
                    return "value" in n && (t[e] = n.value), t
                }
            },
            7566: function(t, e, n) {
                var a = n(6135),
                    u = n(8026),
                    s = n(3450);
                t.exports = n(4765) ? Object.defineProperties : function(t, e) {
                    u(t);
                    for (var n, r = s(e), o = r.length, i = 0; i < o;) a.f(t, n = r[i++], e[n]);
                    return t
                }
            },
            9580: function(t, e, n) {
                var r = n(9266),
                    o = n(6116),
                    i = n(2815),
                    a = n(6343),
                    u = n(7558),
                    s = n(9538),
                    l = Object.getOwnPropertyDescriptor;
                e.f = n(4765) ? l : function(t, e) {
                    if (t = i(t), e = a(e, !0), s) try {
                        return l(t, e)
                    } catch (t) {}
                    if (u(t, e)) return o(!r.f.call(t, e), t[e])
                }
            },
            9167: function(t, e, n) {
                var r = n(2815),
                    o = n(7676).f,
                    i = {}.toString,
                    a = "object" == typeof window && window && Object.getOwnPropertyNames ? Object.getOwnPropertyNames(window) : [];
                t.exports.f = function(t) {
                    return a && "[object Window]" == i.call(t) ? function(t) {
                        try {
                            return o(t)
                        } catch (t) {
                            return a.slice()
                        }
                    }(t) : o(r(t))
                }
            },
            7676: function(t, e, n) {
                var r = n(2752),
                    o = n(4561).concat("length", "prototype");
                e.f = Object.getOwnPropertyNames || function(t) {
                    return r(t, o)
                }
            },
            3132: function(t, e) {
                e.f = Object.getOwnPropertySymbols
            },
            8685: function(t, e, n) {
                var r = n(7558),
                    o = n(7315),
                    i = n(9886)("IE_PROTO"),
                    a = Object.prototype;
                t.exports = Object.getPrototypeOf || function(t) {
                    return t = o(t), r(t, i) ? t[i] : "function" == typeof t.constructor && t instanceof t.constructor ? t.constructor.prototype : t instanceof Object ? a : null
                }
            },
            2752: function(t, e, n) {
                var a = n(7558),
                    u = n(2815),
                    s = n(7950)(!1),
                    l = n(9886)("IE_PROTO");
                t.exports = function(t, e) {
                    var n, r = u(t),
                        o = 0,
                        i = [];
                    for (n in r) n != l && a(r, n) && i.push(n);
                    for (; e.length > o;) a(r, n = e[o++]) && (~s(i, n) || i.push(n));
                    return i
                }
            },
            3450: function(t, e, n) {
                var r = n(2752),
                    o = n(4561);
                t.exports = Object.keys || function(t) {
                    return r(t, o)
                }
            },
            9266: function(t, e) {
                e.f = {}.propertyIsEnumerable
            },
            5341: function(t, e, n) {
                var o = n(3864),
                    i = n(1417),
                    a = n(7110);
                t.exports = function(t, e) {
                    var n = (i.Object || {})[t] || Object[t],
                        r = {};
                    r[t] = e(n), o(o.S + o.F * a(function() {
                        n(1)
                    }), "Object", r)
                }
            },
            8800: function(t, e, n) {
                var s = n(4765),
                    l = n(3450),
                    c = n(2815),
                    f = n(9266).f;
                t.exports = function(u) {
                    return function(t) {
                        for (var e, n = c(t), r = l(n), o = r.length, i = 0, a = []; i < o;) e = r[i++], s && !f.call(n, e) || a.push(u ? [e, n[e]] : n[e]);
                        return a
                    }
                }
            },
            6116: function(t) {
                t.exports = function(t, e) {
                    return {
                        enumerable: !(1 & t),
                        configurable: !(2 & t),
                        writable: !(4 & t),
                        value: e
                    }
                }
            },
            7621: function(t, e, n) {
                var o = n(7362);
                t.exports = function(t, e, n) {
                    for (var r in e) n && t[r] ? t[r] = e[r] : o(t, r, e[r]);
                    return t
                }
            },
            2965: function(t, e, n) {
                t.exports = n(7362)
            },
            208: function(t, e, n) {
                "use strict";
                var r = n(3864),
                    u = n(9879),
                    s = n(842),
                    l = n(7814);
                t.exports = function(t) {
                    r(r.S, t, {
                        from: function(t, e, n) {
                            var r, o, i, a = e;
                            return u(this), (e = void 0 !== a) && u(a), null == t ? new this : (r = [], e ? (o = 0, i = s(a, n, 2), l(t, !1, function(t) {
                                r.push(i(t, o++))
                            })) : l(t, !1, r.push, r), new this(r))
                        }
                    })
                }
            },
            5942: function(t, e, n) {
                "use strict";
                var r = n(3864);
                t.exports = function(t) {
                    r(r.S, t, { of: function() {
                            for (var t = arguments.length, e = new Array(t); t--;) e[t] = arguments[t];
                            return new this(e)
                        }
                    })
                }
            },
            7994: function(t, e, o) {
                function i(t, e) {
                    if (r(t), !n(e) && null !== e) throw TypeError(e + ": can't set as prototype!")
                }
                var n = o(7742),
                    r = o(8026);
                t.exports = {
                    set: Object.setPrototypeOf || ("__proto__" in {} ? function(t, n, r) {
                        try {
                            (r = o(842)(Function.call, o(9580).f(Object.prototype, "__proto__").set, 2))(t, []), n = !(t instanceof Array)
                        } catch (t) {
                            n = !0
                        }
                        return function(t, e) {
                            return i(t, e), n ? t.__proto__ = e : r(t, e), t
                        }
                    }({}, !1) : void 0),
                    check: i
                }
            },
            7560: function(t, e, n) {
                var r = n(6135).f,
                    o = n(7558),
                    i = n(5765)("toStringTag");
                t.exports = function(t, e, n) {
                    t && !o(t = n ? t : t.prototype, i) && r(t, i, {
                        configurable: !0,
                        value: e
                    })
                }
            },
            9886: function(t, e, n) {
                var r = n(3388)("keys"),
                    o = n(3469);
                t.exports = function(t) {
                    return r[t] || (r[t] = o(t))
                }
            },
            3388: function(t, e, n) {
                var r = n(1417),
                    o = n(1931),
                    i = "__core-js_shared__",
                    a = o[i] || (o[i] = {});
                (t.exports = function(t, e) {
                    return a[t] || (a[t] = void 0 !== e ? e : {})
                })("versions", []).push({
                    version: r.version,
                    mode: n(7857) ? "pure" : "global",
                    copyright: "© 2020 Denis Pushkarev (zloirock.ru)"
                })
            },
            7068: function(t, e, n) {
                var a = n(966),
                    u = n(6838);
                t.exports = function(i) {
                    return function(t, e) {
                        var n, r = String(u(t)),
                            o = a(e),
                            t = r.length;
                        return o < 0 || t <= o ? i ? "" : void 0 : (e = r.charCodeAt(o)) < 55296 || 56319 < e || o + 1 === t || (n = r.charCodeAt(o + 1)) < 56320 || 57343 < n ? i ? r.charAt(o) : e : i ? r.slice(o, o + 2) : n - 56320 + (e - 55296 << 10) + 65536
                    }
                }
            },
            6453: function(t, e, n) {
                var r = n(966),
                    o = Math.max,
                    i = Math.min;
                t.exports = function(t, e) {
                    return (t = r(t)) < 0 ? o(t + e, 0) : i(t, e)
                }
            },
            966: function(t) {
                var e = Math.ceil,
                    n = Math.floor;
                t.exports = function(t) {
                    return isNaN(t = +t) ? 0 : (0 < t ? n : e)(t)
                }
            },
            2815: function(t, e, n) {
                var r = n(2266),
                    o = n(6838);
                t.exports = function(t) {
                    return r(o(t))
                }
            },
            712: function(t, e, n) {
                var r = n(966),
                    o = Math.min;
                t.exports = function(t) {
                    return 0 < t ? o(r(t), 9007199254740991) : 0
                }
            },
            7315: function(t, e, n) {
                var r = n(6838);
                t.exports = function(t) {
                    return Object(r(t))
                }
            },
            6343: function(t, e, n) {
                var o = n(7742);
                t.exports = function(t, e) {
                    if (!o(t)) return t;
                    var n, r;
                    if (e && "function" == typeof(n = t.toString) && !o(r = n.call(t))) return r;
                    if ("function" == typeof(n = t.valueOf) && !o(r = n.call(t))) return r;
                    if (!e && "function" == typeof(n = t.toString) && !o(r = n.call(t))) return r;
                    throw TypeError("Can't convert object to primitive value")
                }
            },
            3469: function(t) {
                var e = 0,
                    n = Math.random();
                t.exports = function(t) {
                    return "Symbol(".concat(void 0 === t ? "" : t, ")_", (++e + n).toString(36))
                }
            },
            7231: function(t, e, n) {
                var r = n(7742);
                t.exports = function(t, e) {
                    if (!r(t) || t._t !== e) throw TypeError("Incompatible receiver, " + e + " required!");
                    return t
                }
            },
            2088: function(t, e, n) {
                var r = n(1931),
                    o = n(1417),
                    i = n(7857),
                    a = n(9522),
                    u = n(6135).f;
                t.exports = function(t) {
                    var e = o.Symbol || (o.Symbol = !i && r.Symbol || {});
                    "_" == t.charAt(0) || t in e || u(e, t, {
                        value: a.f(t)
                    })
                }
            },
            9522: function(t, e, n) {
                e.f = n(5765)
            },
            5765: function(t, e, n) {
                var r = n(3388)("wks"),
                    o = n(3469),
                    i = n(1931).Symbol,
                    a = "function" == typeof i;
                (t.exports = function(t) {
                    return r[t] || (r[t] = a && i[t] || (a ? i : o)("Symbol." + t))
                }).store = r
            },
            7507: function(t, e, n) {
                var r = n(1330),
                    o = n(5765)("iterator"),
                    i = n(7308);
                t.exports = n(1417).getIteratorMethod = function(t) {
                    if (null != t) return t[o] || t["@@iterator"] || i[r(t)]
                }
            },
            8276: function(t, e, n) {
                "use strict";
                var r = n(5533),
                    o = n(3642),
                    i = n(7308),
                    a = n(2815);
                t.exports = n(9908)(Array, "Array", function(t, e) {
                    this._t = a(t), this._i = 0, this._k = e
                }, function() {
                    var t = this._t,
                        e = this._k,
                        n = this._i++;
                    return !t || n >= t.length ? (this._t = void 0, o(1)) : o(0, "keys" == e ? n : "values" == e ? t[n] : [n, t[n]])
                }, "values"), i.Arguments = i.Array, r("keys"), r("values"), r("entries")
            },
            8566: function(t, e, n) {
                var r = n(3864);
                r(r.S + r.F, "Object", {
                    assign: n(7678)
                })
            },
            9685: function(t, e, n) {
                var r = n(3864);
                r(r.S, "Object", {
                    create: n(5985)
                })
            },
            3022: function(t, e, n) {
                var r = n(3864);
                r(r.S + r.F * !n(4765), "Object", {
                    defineProperty: n(6135).f
                })
            },
            2134: function(t, e, n) {
                var r = n(2815),
                    o = n(9580).f;
                n(5341)("getOwnPropertyDescriptor", function() {
                    return function(t, e) {
                        return o(r(t), e)
                    }
                })
            },
            4046: function(t, e, n) {
                var r = n(7315),
                    o = n(3450);
                n(5341)("keys", function() {
                    return function(t) {
                        return o(r(t))
                    }
                })
            },
            5460: function(t, e, n) {
                var r = n(3864);
                r(r.S, "Object", {
                    setPrototypeOf: n(7994).set
                })
            },
            5220: function() {},
            3165: function(t, e, n) {
                "use strict";
                var r = n(7068)(!0);
                n(9908)(String, "String", function(t) {
                    this._t = String(t), this._i = 0
                }, function() {
                    var t = this._t,
                        e = this._i;
                    return e >= t.length ? {
                        value: void 0,
                        done: !0
                    } : (e = r(t, e), this._i += e.length, {
                        value: e,
                        done: !1
                    })
                })
            },
            4732: function(t, e, n) {
                "use strict";

                function r(t) {
                    var e = G[t] = T(B[V]);
                    return e._k = t, e
                }

                function o(t, e) {
                    S(t);
                    for (var n, r = E(e = _(e)), o = 0, i = r.length; o < i;) Z(t, n = r[o++], e[n]);
                    return t
                }

                function i(t) {
                    var e = q.call(this, t = A(t, !0));
                    return !(this === K && s(G, t) && !s(W, t)) && (!(e || !s(this, t) || !s(G, t) || s(this, F) && this[F][t]) || e)
                }

                function a(t, e) {
                    if (t = _(t), e = A(e, !0), t !== K || !s(G, e) || s(W, e)) {
                        var n = I(t, e);
                        return !n || !s(G, e) || s(t, F) && t[F][e] || (n.enumerable = !0), n
                    }
                }
                var u = n(1931),
                    s = n(7558),
                    l = n(4765),
                    c = n(3864),
                    f = n(2965),
                    d = n(193).KEY,
                    p = n(7110),
                    h = n(3388),
                    y = n(7560),
                    m = n(3469),
                    g = n(5765),
                    v = n(9522),
                    b = n(2088),
                    E = n(1664),
                    w = n(7141),
                    S = n(8026),
                    x = n(7742),
                    C = n(7315),
                    _ = n(2815),
                    A = n(6343),
                    N = n(6116),
                    T = n(5985),
                    O = n(9167),
                    k = n(9580),
                    M = n(3132),
                    R = n(6135),
                    P = n(3450),
                    I = k.f,
                    L = R.f,
                    U = O.f,
                    B = u.Symbol,
                    D = u.JSON,
                    j = D && D.stringify,
                    V = "prototype",
                    F = g("_hidden"),
                    H = g("toPrimitive"),
                    q = {}.propertyIsEnumerable,
                    z = h("symbol-registry"),
                    G = h("symbols"),
                    W = h("op-symbols"),
                    K = Object[V],
                    Y = "function" == typeof B && !!M.f,
                    $ = u.QObject,
                    Q = !$ || !$[V] || !$[V].findChild,
                    J = l && p(function() {
                        return 7 != T(L({}, "a", {
                            get: function() {
                                return L(this, "a", {
                                    value: 7
                                }).a
                            }
                        })).a
                    }) ? function(t, e, n) {
                        var r = I(K, e);
                        r && delete K[e], L(t, e, n), r && t !== K && L(K, e, r)
                    } : L,
                    X = Y && "symbol" == typeof B.iterator ? function(t) {
                        return "symbol" == typeof t
                    } : function(t) {
                        return t instanceof B
                    },
                    Z = function(t, e, n) {
                        return t === K && Z(W, e, n), S(t), e = A(e, !0), S(n), s(G, e) ? (n.enumerable ? (s(t, F) && t[F][e] && (t[F][e] = !1), n = T(n, {
                            enumerable: N(0, !1)
                        })) : (s(t, F) || L(t, F, N(1, {})), t[F][e] = !0), J(t, e, n)) : L(t, e, n)
                    },
                    h = function(t) {
                        for (var e, n = U(_(t)), r = [], o = 0; n.length > o;) s(G, e = n[o++]) || e == F || e == d || r.push(e);
                        return r
                    },
                    $ = function(t) {
                        for (var e, n = t === K, r = U(n ? W : _(t)), o = [], i = 0; r.length > i;) !s(G, e = r[i++]) || n && !s(K, e) || o.push(G[e]);
                        return o
                    };
                Y || (f((B = function(t) {
                    if (this instanceof B) throw TypeError("Symbol is not a constructor!");
                    var e = m(0 < arguments.length ? t : void 0),
                        n = function(t) {
                            this === K && n.call(W, t), s(this, F) && s(this[F], e) && (this[F][e] = !1), J(this, e, N(1, t))
                        };
                    return l && Q && J(K, e, {
                        configurable: !0,
                        set: n
                    }), r(e)
                })[V], "toString", function() {
                    return this._k
                }), k.f = a, R.f = Z, n(7676).f = O.f = h, n(9266).f = i, M.f = $, l && !n(7857) && f(K, "propertyIsEnumerable", i, !0), v.f = function(t) {
                    return r(g(t))
                }), c(c.G + c.W + c.F * !Y, {
                    Symbol: B
                });
                for (var tt = "hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables".split(","), et = 0; tt.length > et;) g(tt[et++]);
                for (var nt = P(g.store), rt = 0; nt.length > rt;) b(nt[rt++]);
                c(c.S + c.F * !Y, "Symbol", {
                    for: function(t) {
                        return s(z, t += "") ? z[t] : z[t] = B(t)
                    },
                    keyFor: function(t) {
                        if (!X(t)) throw TypeError(t + " is not a symbol!");
                        for (var e in z)
                            if (z[e] === t) return e
                    },
                    useSetter: function() {
                        Q = !0
                    },
                    useSimple: function() {
                        Q = !1
                    }
                }), c(c.S + c.F * !Y, "Object", {
                    create: function(t, e) {
                        return void 0 === e ? T(t) : o(T(t), e)
                    },
                    defineProperty: Z,
                    defineProperties: o,
                    getOwnPropertyDescriptor: a,
                    getOwnPropertyNames: h,
                    getOwnPropertySymbols: $
                });
                $ = p(function() {
                    M.f(1)
                });
                c(c.S + c.F * $, "Object", {
                    getOwnPropertySymbols: function(t) {
                        return M.f(C(t))
                    }
                }), D && c(c.S + c.F * (!Y || p(function() {
                    var t = B();
                    return "[null]" != j([t]) || "{}" != j({
                        a: t
                    }) || "{}" != j(Object(t))
                })), "JSON", {
                    stringify: function(t) {
                        for (var e, n, r = [t], o = 1; o < arguments.length;) r.push(arguments[o++]);
                        if (n = e = r[1], (x(e) || void 0 !== t) && !X(t)) return w(e) || (e = function(t, e) {
                            if ("function" == typeof n && (e = n.call(this, t, e)), !X(e)) return e
                        }), r[1] = e, j.apply(D, r)
                    }
                }), B[V][H] || n(7362)(B[V], H, B[V].valueOf), y(B, "Symbol"), y(Math, "Math", !0), y(u.JSON, "JSON", !0)
            },
            9222: function(t, e, n) {
                "use strict";

                function r(e) {
                    return function(t) {
                        return e(this, 0 < arguments.length ? t : void 0)
                    }
                }
                var o, i = n(1931),
                    a = n(8430)(0),
                    u = n(2965),
                    s = n(193),
                    l = n(7678),
                    c = n(3636),
                    f = n(7742),
                    d = n(7231),
                    p = n(7231),
                    h = !i.ActiveXObject && "ActiveXObject" in i,
                    y = "WeakMap",
                    m = s.getWeak,
                    g = Object.isExtensible,
                    v = c.ufstore,
                    i = {
                        get: function(t) {
                            if (f(t)) {
                                var e = m(t);
                                return !0 === e ? v(d(this, y)).get(t) : e ? e[this._i] : void 0
                            }
                        },
                        set: function(t, e) {
                            return c.def(d(this, y), t, e)
                        }
                    },
                    b = t.exports = n(1371)(y, r, i, c, !0, !0);
                p && h && (l((o = c.getConstructor(r, y)).prototype, i), s.NEED = !0, a(["delete", "has", "get", "set"], function(n) {
                    var t = b.prototype,
                        r = t[n];
                    u(t, n, function(t, e) {
                        if (!f(t) || g(t)) return r.call(this, t, e);
                        this._f || (this._f = new o);
                        e = this._f[n](t, e);
                        return "set" == n ? this : e
                    })
                }))
            },
            4574: function(t, e, n) {
                var r = n(3864),
                    o = n(8800)(!0);
                r(r.S, "Object", {
                    entries: function(t) {
                        return o(t)
                    }
                })
            },
            1954: function(t, e, n) {
                var r = n(3864),
                    o = n(8800)(!1);
                r(r.S, "Object", {
                    values: function(t) {
                        return o(t)
                    }
                })
            },
            5739: function(t, e, n) {
                n(2088)("asyncIterator")
            },
            9771: function(t, e, n) {
                n(2088)("observable")
            },
            1013: function(t, e, n) {
                n(208)("WeakMap")
            },
            2920: function(t, e, n) {
                n(5942)("WeakMap")
            },
            4220: function(t, e, n) {
                n(8276);
                for (var r = n(1931), o = n(7362), i = n(7308), a = n(5765)("toStringTag"), u = "CSSRuleList,CSSStyleDeclaration,CSSValueList,ClientRectList,DOMRectList,DOMStringList,DOMTokenList,DataTransferItemList,FileList,HTMLAllCollection,HTMLCollection,HTMLFormElement,HTMLSelectElement,MediaList,MimeTypeArray,NamedNodeMap,NodeList,PaintRequestList,Plugin,PluginArray,SVGLengthList,SVGNumberList,SVGPathSegList,SVGPointList,SVGStringList,SVGTransformList,SourceBufferList,StyleSheetList,TextTrackCueList,TextTrackList,TouchList".split(","), s = 0; s < u.length; s++) {
                    var l = u[s],
                        c = r[l],
                        c = c && c.prototype;
                    c && !c[a] && o(c, a, l), i[l] = i.Array
                }
            },
            4859: function(t) {
                t.exports = function(t) {
                    return t && t.__esModule ? t : {
                        default: t
                    }
                }
            },
            133: function(t, e, n) {
                "use strict";
                var r = n(7154);
                e.__esModule = !0, e.default = void 0;
                var o = r(n(9774)),
                    i = r(n(8331)),
                    a = r(n(4922)),
                    u = r(n(8318)),
                    s = r(n(2779)),
                    l = r(n(3804)),
                    c = r(n(5517)),
                    f = r(n(1904)),
                    d = n(1765),
                    p = n(7810),
                    h = r(n(4933)),
                    f = {
                        active: c.default.bool,
                        disabled: c.default.bool,
                        block: c.default.bool,
                        onClick: c.default.func,
                        componentClass: f.default,
                        href: c.default.string,
                        type: c.default.oneOf(["button", "reset", "submit"])
                    },
                    c = function(t) {
                        function e() {
                            return t.apply(this, arguments) || this
                        }(0, u.default)(e, t);
                        var n = e.prototype;
                        return n.renderAnchor = function(t, e) {
                            return l.default.createElement(h.default, (0, a.default)({}, t, {
                                className: (0, s.default)(e, t.disabled && "disabled")
                            }))
                        }, n.renderButton = function(t, e) {
                            var n = t.componentClass,
                                t = (0, i.default)(t, ["componentClass"]),
                                n = n || "button";
                            return l.default.createElement(n, (0, a.default)({}, t, {
                                type: t.type || "button",
                                className: e
                            }))
                        }, n.render = function() {
                            var t = this.props,
                                e = t.active,
                                n = t.block,
                                r = t.className,
                                o = (0, i.default)(t, ["active", "block", "className"]),
                                t = (0, d.splitBsProps)(o),
                                o = t[0],
                                t = t[1],
                                e = (0, a.default)({}, (0, d.getClassSet)(o), ((e = {
                                    active: e
                                })[(0, d.prefix)(o, "block")] = n, e)),
                                e = (0, s.default)(r, e);
                            return t.href ? this.renderAnchor(t, e) : this.renderButton(t, e)
                        }, e
                    }(l.default.Component);
                c.propTypes = f, c.defaultProps = {
                    active: !1,
                    block: !1,
                    disabled: !1
                };
                c = (0, d.bsClass)("btn", (0, d.bsSizes)([p.Size.LARGE, p.Size.SMALL, p.Size.XSMALL], (0, d.bsStyles)((0, o.default)(p.State).concat([p.Style.DEFAULT, p.Style.PRIMARY, p.Style.LINK]), p.Style.DEFAULT, c)));
                e.default = c, t.exports = e.default
            },
            685: function(t, e, n) {
                "use strict";
                var r = n(7154);
                e.__esModule = !0, e.default = void 0;
                var o = r(n(8318)),
                    i = r(n(5517)),
                    a = r(n(3804)),
                    n = {
                        label: i.default.string.isRequired,
                        onClick: i.default.func
                    },
                    i = function(t) {
                        function e() {
                            return t.apply(this, arguments) || this
                        }
                        return (0, o.default)(e, t), e.prototype.render = function() {
                            var t = this.props,
                                e = t.label,
                                t = t.onClick;
                            return a.default.createElement("button", {
                                type: "button",
                                className: "close",
                                onClick: t
                            }, a.default.createElement("span", {
                                "aria-hidden": "true"
                            }, "×"), a.default.createElement("span", {
                                className: "sr-only"
                            }, e))
                        }, e
                    }(a.default.Component);
                i.propTypes = n, i.defaultProps = {
                    label: "Close"
                }, e.default = i, t.exports = e.default
            },
            2985: function(t, e, n) {
                "use strict";
                var r = n(7154),
                    o = n(4110);
                e.__esModule = !0, e.default = void 0;
                var i = r(n(4922)),
                    a = r(n(8331)),
                    u = r(n(8318)),
                    s = r(n(2779)),
                    l = r(n(3804)),
                    r = r(n(5517)),
                    c = o(n(3447)),
                    n = { in: r.default.bool,
                        mountOnEnter: r.default.bool,
                        unmountOnExit: r.default.bool,
                        appear: r.default.bool,
                        timeout: r.default.number,
                        onEnter: r.default.func,
                        onEntering: r.default.func,
                        onEntered: r.default.func,
                        onExit: r.default.func,
                        onExiting: r.default.func,
                        onExited: r.default.func
                    },
                    f = ((r = {})[c.ENTERING] = "in", r[c.ENTERED] = "in", r),
                    r = function(t) {
                        function e() {
                            return t.apply(this, arguments) || this
                        }
                        return (0, u.default)(e, t), e.prototype.render = function() {
                            var t = this.props,
                                n = t.className,
                                r = t.children,
                                t = (0, a.default)(t, ["className", "children"]);
                            return l.default.createElement(c.default, t, function(t, e) {
                                return l.default.cloneElement(r, (0, i.default)({}, e, {
                                    className: (0, s.default)("fade", n, r.props.className, f[t])
                                }))
                            })
                        }, e
                    }(l.default.Component);
                r.propTypes = n, r.defaultProps = { in: !1,
                    timeout: 300,
                    mountOnEnter: !1,
                    unmountOnExit: !1,
                    appear: !1
                }, e.default = r, t.exports = e.default
            },
            3674: function(t, e, n) {
                "use strict";
                var r = n(7154);
                e.__esModule = !0, e.default = void 0;
                var h = r(n(8331)),
                    o = r(n(8318)),
                    i = r(n(4341)),
                    y = r(n(4922)),
                    m = r(n(2779)),
                    a = r(n(1836)),
                    u = r(n(5759)),
                    s = r(n(6892)),
                    l = r(n(8616)),
                    g = r(n(3804)),
                    c = r(n(5517)),
                    f = r(n(7196)),
                    v = r(n(4909)),
                    d = r(n(1503)),
                    p = r(n(1904)),
                    b = r(n(2985)),
                    E = r(n(3355)),
                    w = r(n(9547)),
                    S = r(n(9115)),
                    x = r(n(5499)),
                    C = r(n(7635)),
                    _ = n(1765),
                    A = r(n(7865)),
                    N = r(n(848)),
                    r = n(7810),
                    n = (0, y.default)({}, v.default.propTypes, w.default.propTypes, {
                        backdrop: c.default.oneOf(["static", !0, !1]),
                        backdropClassName: c.default.string,
                        keyboard: c.default.bool,
                        animation: c.default.bool,
                        dialogComponentClass: p.default,
                        autoFocus: c.default.bool,
                        enforceFocus: c.default.bool,
                        restoreFocus: c.default.bool,
                        show: c.default.bool,
                        onHide: c.default.func,
                        onEnter: c.default.func,
                        onEntering: c.default.func,
                        onEntered: c.default.func,
                        onExit: c.default.func,
                        onExiting: c.default.func,
                        onExited: c.default.func,
                        container: v.default.propTypes.container
                    }),
                    p = (0, y.default)({}, v.default.defaultProps, {
                        animation: !0,
                        dialogComponentClass: w.default
                    }),
                    c = {
                        $bs_modal: c.default.shape({
                            onHide: c.default.func
                        })
                    };

                function T(t) {
                    return g.default.createElement(b.default, (0, y.default)({}, t, {
                        timeout: k.TRANSITION_DURATION
                    }))
                }

                function O(t) {
                    return g.default.createElement(b.default, (0, y.default)({}, t, {
                        timeout: k.BACKDROP_TRANSITION_DURATION
                    }))
                }
                var k = function(r) {
                    function t(t, e) {
                        var n = r.call(this, t, e) || this;
                        return n.handleDialogBackdropMouseDown = function() {
                            n._waitingForMouseUp = !0
                        }, n.handleMouseUp = function(t) {
                            var e = n._modal.getDialogElement();
                            n._waitingForMouseUp && t.target === e && (n._ignoreBackdropClick = !0), n._waitingForMouseUp = !1
                        }, n.handleEntering = n.handleEntering.bind((0, i.default)((0, i.default)(n))), n.handleExited = n.handleExited.bind((0, i.default)((0, i.default)(n))), n.handleWindowResize = n.handleWindowResize.bind((0, i.default)((0, i.default)(n))), n.handleDialogClick = n.handleDialogClick.bind((0, i.default)((0, i.default)(n))), n.setModalRef = n.setModalRef.bind((0, i.default)((0, i.default)(n))), n.state = {
                            style: {}
                        }, n
                    }(0, o.default)(t, r);
                    var e = t.prototype;
                    return e.getChildContext = function() {
                        return {
                            $bs_modal: {
                                onHide: this.props.onHide
                            }
                        }
                    }, e.componentWillUnmount = function() {
                        this.handleExited()
                    }, e.setModalRef = function(t) {
                        this._modal = t
                    }, e.handleDialogClick = function(t) {
                        this._ignoreBackdropClick || t.target !== t.currentTarget ? this._ignoreBackdropClick = !1 : this.props.onHide()
                    }, e.handleEntering = function() {
                        a.default.on(window, "resize", this.handleWindowResize), this.updateStyle()
                    }, e.handleExited = function() {
                        a.default.off(window, "resize", this.handleWindowResize)
                    }, e.handleWindowResize = function() {
                        this.updateStyle()
                    }, e.updateStyle = function() {
                        var t, e, n;
                        s.default && (t = (e = this._modal.getDialogElement()).scrollHeight, n = (0, u.default)(e), e = (0, d.default)(f.default.findDOMNode(this.props.container || n.body)), n = t > n.documentElement.clientHeight, this.setState({
                            style: {
                                paddingRight: e && !n ? (0, l.default)() : void 0,
                                paddingLeft: !e && n ? (0, l.default)() : void 0
                            }
                        }))
                    }, e.render = function() {
                        var t = this.props,
                            e = t.backdrop,
                            n = t.backdropClassName,
                            r = t.animation,
                            o = t.show,
                            i = t.dialogComponentClass,
                            a = t.className,
                            u = t.style,
                            s = t.children,
                            l = t.onEntering,
                            c = t.onExited,
                            f = (0, h.default)(t, ["backdrop", "backdropClassName", "animation", "show", "dialogComponentClass", "className", "style", "children", "onEntering", "onExited"]),
                            d = (0, N.default)(f, v.default),
                            p = d[0],
                            t = d[1],
                            d = o && !r && "in";
                        return g.default.createElement(v.default, (0, y.default)({}, p, {
                            ref: this.setModalRef,
                            show: o,
                            containerClassName: (0, _.prefix)(f, "open"),
                            transition: r ? T : void 0,
                            backdrop: e,
                            backdropTransition: r ? O : void 0,
                            backdropClassName: (0, m.default)((0, _.prefix)(f, "backdrop"), n, d),
                            onEntering: (0, A.default)(l, this.handleEntering),
                            onExited: (0, A.default)(c, this.handleExited),
                            onMouseUp: this.handleMouseUp
                        }), g.default.createElement(i, (0, y.default)({}, t, {
                            style: (0, y.default)({}, this.state.style, u),
                            className: (0, m.default)(a, d),
                            onClick: !0 === e ? this.handleDialogClick : null,
                            onMouseDownDialog: this.handleDialogBackdropMouseDown
                        }), s))
                    }, t
                }(g.default.Component);
                k.propTypes = n, k.defaultProps = p, k.childContextTypes = c, k.Body = E.default, k.Header = x.default, k.Title = C.default, k.Footer = S.default, k.Dialog = w.default, k.TRANSITION_DURATION = 300, k.BACKDROP_TRANSITION_DURATION = 150;
                r = (0, _.bsClass)("modal", (0, _.bsSizes)([r.Size.LARGE, r.Size.SMALL], k));
                e.default = r, t.exports = e.default
            },
            3355: function(t, e, n) {
                "use strict";
                var r = n(7154);
                e.__esModule = !0, e.default = void 0;
                var o = r(n(4922)),
                    i = r(n(8331)),
                    a = r(n(8318)),
                    u = r(n(2779)),
                    s = r(n(3804)),
                    r = r(n(1904)),
                    l = n(1765),
                    n = {
                        componentClass: r.default
                    },
                    r = function(t) {
                        function e() {
                            return t.apply(this, arguments) || this
                        }
                        return (0, a.default)(e, t), e.prototype.render = function() {
                            var t = this.props,
                                e = t.componentClass,
                                n = t.className,
                                r = (0, i.default)(t, ["componentClass", "className"]),
                                t = (0, l.splitBsProps)(r),
                                r = t[0],
                                t = t[1],
                                r = (0, l.getClassSet)(r);
                            return s.default.createElement(e, (0, o.default)({}, t, {
                                className: (0, u.default)(n, r)
                            }))
                        }, e
                    }(s.default.Component);
                r.propTypes = n, r.defaultProps = {
                    componentClass: "div"
                };
                r = (0, l.bsClass)("modal-body", r);
                e.default = r, t.exports = e.default
            },
            9547: function(t, e, n) {
                "use strict";
                var r = n(7154);
                e.__esModule = !0, e.default = void 0;
                var l = r(n(4922)),
                    c = r(n(8331)),
                    o = r(n(8318)),
                    f = r(n(2779)),
                    d = r(n(3804)),
                    i = r(n(5517)),
                    p = n(1765),
                    r = n(7810),
                    n = {
                        dialogClassName: i.default.string
                    },
                    i = function(t) {
                        function e() {
                            return t.apply(this, arguments) || this
                        }
                        return (0, o.default)(e, t), e.prototype.render = function() {
                            var t = this.props,
                                e = t.dialogClassName,
                                n = t.className,
                                r = t.style,
                                o = t.children,
                                i = t.onMouseDownDialog,
                                a = (0, c.default)(t, ["dialogClassName", "className", "style", "children", "onMouseDownDialog"]),
                                u = (0, p.splitBsProps)(a),
                                s = u[0],
                                t = u[1],
                                a = (0, p.prefix)(s),
                                u = (0, l.default)({
                                    display: "block"
                                }, r),
                                r = (0, l.default)({}, (0, p.getClassSet)(s), ((r = {})[a] = !1, r[(0, p.prefix)(s, "dialog")] = !0, r));
                            return d.default.createElement("div", (0, l.default)({}, t, {
                                tabIndex: "-1",
                                role: "dialog",
                                style: u,
                                className: (0, f.default)(n, a)
                            }), d.default.createElement("div", {
                                className: (0, f.default)(e, r),
                                onMouseDown: i
                            }, d.default.createElement("div", {
                                className: (0, p.prefix)(s, "content"),
                                role: "document"
                            }, o)))
                        }, e
                    }(d.default.Component);
                i.propTypes = n;
                i = (0, p.bsClass)("modal", (0, p.bsSizes)([r.Size.LARGE, r.Size.SMALL], i));
                e.default = i, t.exports = e.default
            },
            9115: function(t, e, n) {
                "use strict";
                var r = n(7154);
                e.__esModule = !0, e.default = void 0;
                var o = r(n(4922)),
                    i = r(n(8331)),
                    a = r(n(8318)),
                    u = r(n(2779)),
                    s = r(n(3804)),
                    r = r(n(1904)),
                    l = n(1765),
                    n = {
                        componentClass: r.default
                    },
                    r = function(t) {
                        function e() {
                            return t.apply(this, arguments) || this
                        }
                        return (0, a.default)(e, t), e.prototype.render = function() {
                            var t = this.props,
                                e = t.componentClass,
                                n = t.className,
                                r = (0, i.default)(t, ["componentClass", "className"]),
                                t = (0, l.splitBsProps)(r),
                                r = t[0],
                                t = t[1],
                                r = (0, l.getClassSet)(r);
                            return s.default.createElement(e, (0, o.default)({}, t, {
                                className: (0, u.default)(n, r)
                            }))
                        }, e
                    }(s.default.Component);
                r.propTypes = n, r.defaultProps = {
                    componentClass: "div"
                };
                r = (0, l.bsClass)("modal-footer", r);
                e.default = r, t.exports = e.default
            },
            5499: function(t, e, n) {
                "use strict";
                var r = n(7154);
                e.__esModule = !0, e.default = void 0;
                var s = r(n(4922)),
                    l = r(n(8331)),
                    o = r(n(8318)),
                    c = r(n(2779)),
                    i = r(n(5517)),
                    f = r(n(3804)),
                    d = n(1765),
                    p = r(n(7865)),
                    h = r(n(685)),
                    r = {
                        closeLabel: i.default.string,
                        closeButton: i.default.bool,
                        onHide: i.default.func
                    },
                    n = {
                        $bs_modal: i.default.shape({
                            onHide: i.default.func
                        })
                    },
                    i = function(t) {
                        function e() {
                            return t.apply(this, arguments) || this
                        }
                        return (0, o.default)(e, t), e.prototype.render = function() {
                            var t = this.props,
                                e = t.closeLabel,
                                n = t.closeButton,
                                r = t.onHide,
                                o = t.className,
                                i = t.children,
                                a = (0, l.default)(t, ["closeLabel", "closeButton", "onHide", "className", "children"]),
                                u = this.context.$bs_modal,
                                t = (0, d.splitBsProps)(a),
                                a = t[0],
                                t = t[1],
                                a = (0, d.getClassSet)(a);
                            return f.default.createElement("div", (0, s.default)({}, t, {
                                className: (0, c.default)(o, a)
                            }), n && f.default.createElement(h.default, {
                                label: e,
                                onClick: (0, p.default)(u && u.onHide, r)
                            }), i)
                        }, e
                    }(f.default.Component);
                i.propTypes = r, i.defaultProps = {
                    closeLabel: "Close",
                    closeButton: !1
                }, i.contextTypes = n;
                i = (0, d.bsClass)("modal-header", i);
                e.default = i, t.exports = e.default
            },
            7635: function(t, e, n) {
                "use strict";
                var r = n(7154);
                e.__esModule = !0, e.default = void 0;
                var o = r(n(4922)),
                    i = r(n(8331)),
                    a = r(n(8318)),
                    u = r(n(2779)),
                    s = r(n(3804)),
                    r = r(n(1904)),
                    l = n(1765),
                    n = {
                        componentClass: r.default
                    },
                    r = function(t) {
                        function e() {
                            return t.apply(this, arguments) || this
                        }
                        return (0, a.default)(e, t), e.prototype.render = function() {
                            var t = this.props,
                                e = t.componentClass,
                                n = t.className,
                                r = (0, i.default)(t, ["componentClass", "className"]),
                                t = (0, l.splitBsProps)(r),
                                r = t[0],
                                t = t[1],
                                r = (0, l.getClassSet)(r);
                            return s.default.createElement(e, (0, o.default)({}, t, {
                                className: (0, u.default)(n, r)
                            }))
                        }, e
                    }(s.default.Component);
                r.propTypes = n, r.defaultProps = {
                    componentClass: "h4"
                };
                r = (0, l.bsClass)("modal-title", r);
                e.default = r, t.exports = e.default
            },
            4933: function(t, e, n) {
                "use strict";
                var r = n(7154);
                e.__esModule = !0, e.default = void 0;
                var o = r(n(4922)),
                    i = r(n(8331)),
                    a = r(n(8318)),
                    u = r(n(4341)),
                    s = r(n(3804)),
                    l = r(n(5517)),
                    c = r(n(1904)),
                    f = r(n(7865)),
                    l = {
                        href: l.default.string,
                        onClick: l.default.func,
                        onKeyDown: l.default.func,
                        disabled: l.default.bool,
                        role: l.default.string,
                        tabIndex: l.default.oneOfType([l.default.number, l.default.string]),
                        componentClass: c.default
                    };

                function d(t) {
                    return !t || "#" === t.trim()
                }
                c = function(n) {
                    function t(t, e) {
                        e = n.call(this, t, e) || this;
                        return e.handleClick = e.handleClick.bind((0, u.default)((0, u.default)(e))), e.handleKeyDown = e.handleKeyDown.bind((0, u.default)((0, u.default)(e))), e
                    }(0, a.default)(t, n);
                    var e = t.prototype;
                    return e.handleClick = function(t) {
                        var e = this.props,
                            n = e.disabled,
                            r = e.href,
                            e = e.onClick;
                        (n || d(r)) && t.preventDefault(), n ? t.stopPropagation() : e && e(t)
                    }, e.handleKeyDown = function(t) {
                        " " === t.key && (t.preventDefault(), this.handleClick(t))
                    }, e.render = function() {
                        var t = this.props,
                            e = t.componentClass,
                            n = t.disabled,
                            r = t.onKeyDown,
                            t = (0, i.default)(t, ["componentClass", "disabled", "onKeyDown"]);
                        return d(t.href) && (t.role = t.role || "button", t.href = t.href || "#"), n && (t.tabIndex = -1, t.style = (0, o.default)({
                            pointerEvents: "none"
                        }, t.style)), s.default.createElement(e, (0, o.default)({}, t, {
                            onClick: this.handleClick,
                            onKeyDown: (0, f.default)(this.handleKeyDown, r)
                        }))
                    }, t
                }(s.default.Component);
                c.propTypes = l, c.defaultProps = {
                    componentClass: "a"
                }, e.default = c, t.exports = e.default
            },
            7810: function(t, e) {
                "use strict";
                e.__esModule = !0, e.Style = e.State = e.DEVICE_SIZES = e.SIZE_MAP = e.Size = void 0;
                e.Size = {
                    LARGE: "large",
                    SMALL: "small",
                    XSMALL: "xsmall"
                };
                e.SIZE_MAP = {
                    large: "lg",
                    medium: "md",
                    small: "sm",
                    xsmall: "xs",
                    lg: "lg",
                    md: "md",
                    sm: "sm",
                    xs: "xs"
                };
                e.DEVICE_SIZES = ["lg", "md", "sm", "xs"];
                e.State = {
                    SUCCESS: "success",
                    WARNING: "warning",
                    DANGER: "danger",
                    INFO: "info"
                };
                e.Style = {
                    DEFAULT: "default",
                    PRIMARY: "primary",
                    LINK: "link",
                    INVERSE: "inverse"
                }
            },
            1765: function(t, e, n) {
                "use strict";
                var r = n(7154);
                e.__esModule = !0, e.prefix = l, e.getClassSet = function(t) {
                    var e = ((n = {})[l(t)] = !0, n); {
                        var n;
                        t.bsSize && (n = s.SIZE_MAP[t.bsSize] || t.bsSize, e[l(t, n)] = !0)
                    }
                    t.bsStyle && (e[l(t, t.bsStyle)] = !0);
                    return e
                }, e.splitBsProps = function(t) {
                    var n = {};
                    return (0, o.default)(t).forEach(function(t) {
                        var e = t[0],
                            t = t[1];
                        d(e) || (n[e] = t)
                    }), [f(t), n]
                }, e.splitBsPropsAndOmit = function(t, e) {
                    var n = {};
                    e.forEach(function(t) {
                        n[t] = !0
                    });
                    var r = {};
                    return (0, o.default)(t).forEach(function(t) {
                        var e = t[0],
                            t = t[1];
                        d(e) || n[e] || (r[e] = t)
                    }), [f(t), r]
                }, e.addStyle = function(t) {
                    for (var e = arguments.length, n = new Array(1 < e ? e - 1 : 0), r = 1; r < e; r++) n[r - 1] = arguments[r];
                    c(n)(t)
                }, e._curry = e.bsSizes = e.bsStyles = e.bsClass = void 0;
                var o = r(n(2085)),
                    a = r(n(4922)),
                    u = (r(n(7677)), r(n(5517))),
                    s = n(7810);

                function i(r) {
                    return function() {
                        for (var t = arguments.length, e = new Array(t), n = 0; n < t; n++) e[n] = arguments[n];
                        return "function" == typeof e[e.length - 1] ? r.apply(void 0, e) : function(t) {
                            return r.apply(void 0, e.concat([t]))
                        }
                    }
                }

                function l(t, e) {
                    t = (t.bsClass || "").trim();
                    return null == t && invariant(!1), t + (e ? "-" + e : "")
                }
                n = i(function(t, e) {
                    var n = e.propTypes || (e.propTypes = {}),
                        r = e.defaultProps || (e.defaultProps = {});
                    return n.bsClass = u.default.string, r.bsClass = t, e
                });
                e.bsClass = n;
                var c = i(function(t, e, n) {
                    "string" != typeof e && (n = e, e = void 0);
                    var r = n.STYLES || [],
                        o = n.propTypes || {};
                    t.forEach(function(t) {
                        -1 === r.indexOf(t) && r.push(t)
                    });
                    t = u.default.oneOf(r);
                    return n.STYLES = r, t._values = r, n.propTypes = (0, a.default)({}, o, {
                        bsStyle: t
                    }), void 0 !== e && ((n.defaultProps || (n.defaultProps = {})).bsStyle = e), n
                });
                e.bsStyles = c;
                n = i(function(t, e, n) {
                    "string" != typeof e && (n = e, e = void 0);
                    var r = n.SIZES || [],
                        o = n.propTypes || {};
                    t.forEach(function(t) {
                        -1 === r.indexOf(t) && r.push(t)
                    });
                    var i = [];
                    r.forEach(function(t) {
                        var e = s.SIZE_MAP[t];
                        e && e !== t && i.push(e), i.push(t)
                    });
                    t = u.default.oneOf(i);
                    return t._values = i, n.SIZES = r, n.propTypes = (0, a.default)({}, o, {
                        bsSize: t
                    }), void 0 !== e && (n.defaultProps || (n.defaultProps = {}), n.defaultProps.bsSize = e), n
                });

                function f(t) {
                    return {
                        bsClass: t.bsClass,
                        bsSize: t.bsSize,
                        bsStyle: t.bsStyle,
                        bsRole: t.bsRole
                    }
                }

                function d(t) {
                    return "bsClass" === t || "bsSize" === t || "bsStyle" === t || "bsRole" === t
                }
                e.bsSizes = n, e._curry = i
            },
            7865: function(t, e) {
                "use strict";
                e.__esModule = !0, e.default = void 0;

                function n() {
                    for (var t = arguments.length, e = new Array(t), n = 0; n < t; n++) e[n] = arguments[n];
                    return e.filter(function(t) {
                        return null != t
                    }).reduce(function(r, o) {
                        if ("function" != typeof o) throw new Error("Invalid Argument Type, must only provide functions, undefined, or null.");
                        return null === r ? o : function() {
                            for (var t = arguments.length, e = new Array(t), n = 0; n < t; n++) e[n] = arguments[n];
                            r.apply(this, e), o.apply(this, e)
                        }
                    }, null)
                }
                e.default = n, t.exports = e.default
            },
            848: function(t, e, n) {
                "use strict";
                var r = n(7154);
                e.__esModule = !0, e.default = function(t, e) {
                    var n = e.propTypes,
                        r = {},
                        o = {};
                    return (0, i.default)(t).forEach(function(t) {
                        var e = t[0],
                            t = t[1];
                        n[e] ? r[e] = t : o[e] = t
                    }), [r, o]
                };
                var i = r(n(2085));
                t.exports = e.default
            },
            6973: function(t, e) {
                "use strict";
                /** @license React v16.13.1
                 * react-is.production.min.js
                 *
                 * Copyright (c) Facebook, Inc. and its affiliates.
                 *
                 * This source code is licensed under the MIT license found in the
                 * LICENSE file in the root directory of this source tree.
                 */
                function n(t) {
                    return (n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                        return typeof t
                    } : function(t) {
                        return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                    })(t)
                }
                var r = "function" == typeof Symbol && Symbol.for,
                    o = r ? Symbol.for("react.element") : 60103,
                    i = r ? Symbol.for("react.portal") : 60106,
                    a = r ? Symbol.for("react.fragment") : 60107,
                    u = r ? Symbol.for("react.strict_mode") : 60108,
                    s = r ? Symbol.for("react.profiler") : 60114,
                    l = r ? Symbol.for("react.provider") : 60109,
                    c = r ? Symbol.for("react.context") : 60110,
                    f = r ? Symbol.for("react.async_mode") : 60111,
                    d = r ? Symbol.for("react.concurrent_mode") : 60111,
                    p = r ? Symbol.for("react.forward_ref") : 60112,
                    h = r ? Symbol.for("react.suspense") : 60113,
                    y = r ? Symbol.for("react.suspense_list") : 60120,
                    m = r ? Symbol.for("react.memo") : 60115,
                    g = r ? Symbol.for("react.lazy") : 60116,
                    v = r ? Symbol.for("react.block") : 60121,
                    b = r ? Symbol.for("react.fundamental") : 60117,
                    E = r ? Symbol.for("react.responder") : 60118,
                    w = r ? Symbol.for("react.scope") : 60119;

                function S(t) {
                    if ("object" === n(t) && null !== t) {
                        var e = t.$$typeof;
                        switch (e) {
                            case o:
                                switch (t = t.type) {
                                    case f:
                                    case d:
                                    case a:
                                    case s:
                                    case u:
                                    case h:
                                        return t;
                                    default:
                                        switch (t = t && t.$$typeof) {
                                            case c:
                                            case p:
                                            case g:
                                            case m:
                                            case l:
                                                return t;
                                            default:
                                                return e
                                        }
                                }
                            case i:
                                return e
                        }
                    }
                }

                function x(t) {
                    return S(t) === d
                }
                e.AsyncMode = f, e.ConcurrentMode = d, e.ContextConsumer = c, e.ContextProvider = l, e.Element = o, e.ForwardRef = p, e.Fragment = a, e.Lazy = g, e.Memo = m, e.Portal = i, e.Profiler = s, e.StrictMode = u, e.Suspense = h, e.isAsyncMode = function(t) {
                    return x(t) || S(t) === f
                }, e.isConcurrentMode = x, e.isContextConsumer = function(t) {
                    return S(t) === c
                }, e.isContextProvider = function(t) {
                    return S(t) === l
                }, e.isElement = function(t) {
                    return "object" === n(t) && null !== t && t.$$typeof === o
                }, e.isForwardRef = function(t) {
                    return S(t) === p
                }, e.isFragment = function(t) {
                    return S(t) === a
                }, e.isLazy = function(t) {
                    return S(t) === g
                }, e.isMemo = function(t) {
                    return S(t) === m
                }, e.isPortal = function(t) {
                    return S(t) === i
                }, e.isProfiler = function(t) {
                    return S(t) === s
                }, e.isStrictMode = function(t) {
                    return S(t) === u
                }, e.isSuspense = function(t) {
                    return S(t) === h
                }, e.isValidElementType = function(t) {
                    return "string" == typeof t || "function" == typeof t || t === a || t === d || t === s || t === u || t === h || t === y || "object" === n(t) && null !== t && (t.$$typeof === g || t.$$typeof === m || t.$$typeof === l || t.$$typeof === c || t.$$typeof === p || t.$$typeof === b || t.$$typeof === E || t.$$typeof === w || t.$$typeof === v)
                }, e.typeOf = S
            },
            7302: function(t, e, n) {
                "use strict";
                t.exports = n(6973)
            },
            9542: function(t, e, n) {
                "use strict";

                function s() {
                    var t = this.constructor.getDerivedStateFromProps(this.props, this.state);
                    null != t && this.setState(t)
                }

                function l(e) {
                    this.setState(function(t) {
                        return null != (t = this.constructor.getDerivedStateFromProps(e, t)) ? t : null
                    }.bind(this))
                }

                function c(t, e) {
                    try {
                        var n = this.props,
                            r = this.state;
                        this.props = t, this.state = e, this.__reactInternalSnapshotFlag = !0, this.__reactInternalSnapshot = this.getSnapshotBeforeUpdate(n, r)
                    } finally {
                        this.props = n, this.state = r
                    }
                }

                function r(t) {
                    var e = t.prototype;
                    if (!e || !e.isReactComponent) throw new Error("Can only polyfill class components");
                    if ("function" != typeof t.getDerivedStateFromProps && "function" != typeof e.getSnapshotBeforeUpdate) return t;
                    var n = null,
                        r = null,
                        o = null;
                    if ("function" == typeof e.componentWillMount ? n = "componentWillMount" : "function" == typeof e.UNSAFE_componentWillMount && (n = "UNSAFE_componentWillMount"), "function" == typeof e.componentWillReceiveProps ? r = "componentWillReceiveProps" : "function" == typeof e.UNSAFE_componentWillReceiveProps && (r = "UNSAFE_componentWillReceiveProps"), "function" == typeof e.componentWillUpdate ? o = "componentWillUpdate" : "function" == typeof e.UNSAFE_componentWillUpdate && (o = "UNSAFE_componentWillUpdate"), null !== n || null !== r || null !== o) {
                        var i = t.displayName || t.name,
                            a = "function" == typeof t.getDerivedStateFromProps ? "getDerivedStateFromProps()" : "getSnapshotBeforeUpdate()";
                        throw Error("Unsafe legacy lifecycles will not be called for components using new component APIs.\n\n" + i + " uses " + a + " but also contains the following legacy lifecycles:" + (null !== n ? "\n  " + n : "") + (null !== r ? "\n  " + r : "") + (null !== o ? "\n  " + o : "") + "\n\nThe above lifecycles should be removed. Learn more about this warning here:\nhttps://fb.me/react-async-component-lifecycle-hooks")
                    }
                    if ("function" == typeof t.getDerivedStateFromProps && (e.componentWillMount = s, e.componentWillReceiveProps = l), "function" == typeof e.getSnapshotBeforeUpdate) {
                        if ("function" != typeof e.componentDidUpdate) throw new Error("Cannot polyfill getSnapshotBeforeUpdate() for components that do not define componentDidUpdate() on the prototype");
                        e.componentWillUpdate = c;
                        var u = e.componentDidUpdate;
                        e.componentDidUpdate = function(t, e, n) {
                            n = this.__reactInternalSnapshotFlag ? this.__reactInternalSnapshot : n;
                            u.call(this, t, e, n)
                        }
                    }
                    return t
                }
                n.r(e), n.d(e, {
                    polyfill: function() {
                        return r
                    }
                }), c.__suppressDeprecationWarning = l.__suppressDeprecationWarning = s.__suppressDeprecationWarning = !0
            },
            5772: function(t, e, n) {
                "use strict";

                function r(t) {
                    return (r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                        return typeof t
                    } : function(t) {
                        return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                    })(t)
                }
                e.__esModule = !0;
                var o = c(n(5517)),
                    i = c(n(5539)),
                    a = c(n(3804)),
                    u = c(n(7196)),
                    s = c(n(7080)),
                    l = c(n(4650));

                function c(t) {
                    return t && t.__esModule ? t : {
                        default: t
                    }
                }

                function f(t, e) {
                    if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return !e || "object" !== r(e) && "function" != typeof e ? t : e
                }
                var d, n = (function(t, e) {
                    if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + r(e));
                    t.prototype = Object.create(e && e.prototype, {
                        constructor: {
                            value: t,
                            enumerable: !1,
                            writable: !0,
                            configurable: !0
                        }
                    }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
                }(p, d = a.default.Component), p.prototype.componentDidMount = function() {
                    this._isMounted = !0, this._renderOverlay()
                }, p.prototype.componentDidUpdate = function() {
                    this._renderOverlay()
                }, p.prototype.UNSAFE_componentWillReceiveProps = function(t) {
                    this._overlayTarget && t.container !== this.props.container && (this._portalContainerNode.removeChild(this._overlayTarget), this._portalContainerNode = (0, s.default)(t.container, (0, l.default)(this).body), this._portalContainerNode.appendChild(this._overlayTarget))
                }, p.prototype.componentWillUnmount = function() {
                    this._isMounted = !1, this._unrenderOverlay(), this._unmountOverlayTarget()
                }, p.prototype.render = function() {
                    return null
                }, p);

                function p() {
                    var t, n;
                    ! function(t) {
                        if (!(t instanceof p)) throw new TypeError("Cannot call a class as a function")
                    }(this);
                    for (var e = arguments.length, r = Array(e), o = 0; o < e; o++) r[o] = arguments[o];
                    return (t = n = f(this, d.call.apply(d, [this].concat(r))))._mountOverlayTarget = function() {
                        n._overlayTarget || (n._overlayTarget = document.createElement("div"), n._portalContainerNode = (0, s.default)(n.props.container, (0, l.default)(n).body), n._portalContainerNode.appendChild(n._overlayTarget))
                    }, n._unmountOverlayTarget = function() {
                        n._overlayTarget && (n._portalContainerNode.removeChild(n._overlayTarget), n._overlayTarget = null), n._portalContainerNode = null
                    }, n._renderOverlay = function() {
                        var t, e = n.props.children ? a.default.Children.only(n.props.children) : null;
                        null !== e ? (n._mountOverlayTarget(), t = !n._overlayInstance, n._overlayInstance = u.default.unstable_renderSubtreeIntoContainer(n, e, n._overlayTarget, function() {
                            t && n.props.onRendered && n.props.onRendered()
                        })) : (n._unrenderOverlay(), n._unmountOverlayTarget())
                    }, n._unrenderOverlay = function() {
                        n._overlayTarget && (u.default.unmountComponentAtNode(n._overlayTarget), n._overlayInstance = null)
                    }, n.getMountNode = function() {
                        return n._overlayTarget
                    }, f(n, t)
                }
                n.displayName = "Portal", n.propTypes = {
                    container: o.default.oneOfType([i.default, o.default.func]),
                    onRendered: o.default.func
                }, e.default = n, t.exports = e.default
            },
            4909: function(t, e, n) {
                "use strict";

                function r(t) {
                    return (r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                        return typeof t
                    } : function(t) {
                        return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                    })(t)
                }
                e.__esModule = !0;
                var y = Object.assign || function(t) {
                        for (var e = 1; e < arguments.length; e++) {
                            var n, r = arguments[e];
                            for (n in r) Object.prototype.hasOwnProperty.call(r, n) && (t[n] = r[n])
                        }
                        return t
                    },
                    i = x(n(7718)),
                    a = x(n(1009)),
                    u = x(n(6892)),
                    o = x(n(5517)),
                    s = x(n(5539)),
                    l = x(n(1083)),
                    c = x(n(1904)),
                    m = n(3804),
                    g = x(m),
                    f = x(n(7196)),
                    d = x(n(2564)),
                    p = x(n(7492)),
                    v = x(n(5881)),
                    b = x(n(6997)),
                    h = x(n(8414)),
                    E = x(n(1705)),
                    w = x(n(7080)),
                    S = x(n(4650));

                function x(t) {
                    return t && t.__esModule ? t : {
                        default: t
                    }
                }

                function C(t, e) {
                    if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return !e || "object" !== r(e) && "function" != typeof e ? t : e
                }
                var _, A = new p.default,
                    n = (function(t, e) {
                        if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + r(e));
                        t.prototype = Object.create(e && e.prototype, {
                            constructor: {
                                value: t,
                                enumerable: !1,
                                writable: !0,
                                configurable: !0
                            }
                        }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
                    }(N, _ = g.default.Component), N.prototype.omitProps = function(e, n) {
                        var t = Object.keys(e),
                            r = {};
                        return t.map(function(t) {
                            Object.prototype.hasOwnProperty.call(n, t) || (r[t] = e[t])
                        }), r
                    }, N.prototype.render = function() {
                        var t = this.props,
                            e = t.show,
                            n = t.container,
                            r = t.children,
                            o = t.transition,
                            i = t.backdrop,
                            a = t.className,
                            u = t.style,
                            s = t.onExit,
                            l = t.onExiting,
                            c = t.onEnter,
                            f = t.onEntering,
                            d = t.onEntered,
                            p = g.default.Children.only(r),
                            h = this.omitProps(this.props, N.propTypes);
                        if (!(e || o && !this.state.exited)) return null;
                        t = p.props, r = t.role, t = t.tabIndex;
                        return void 0 !== r && void 0 !== t || (p = (0, m.cloneElement)(p, {
                            role: void 0 === r ? "document" : r,
                            tabIndex: null == t ? "-1" : t
                        })), o && (p = g.default.createElement(o, {
                            appear: !0,
                            unmountOnExit: !0,
                            in: e,
                            onExit: s,
                            onExiting: l,
                            onExited: this.handleHidden,
                            onEnter: c,
                            onEntering: f,
                            onEntered: d
                        }, p)), g.default.createElement(v.default, {
                            ref: this.setMountNode,
                            container: n,
                            onRendered: this.onPortalRendered
                        }, g.default.createElement("div", y({
                            ref: this.setModalNodeRef,
                            role: r || "dialog"
                        }, h, {
                            style: u,
                            className: a
                        }), i && this.renderBackdrop(), g.default.createElement(b.default, {
                            ref: this.setDialogRef
                        }, p)))
                    }, N.prototype.UNSAFE_componentWillReceiveProps = function(t) {
                        t.show ? this.setState({
                            exited: !1
                        }) : t.transition || this.setState({
                            exited: !0
                        })
                    }, N.prototype.UNSAFE_componentWillUpdate = function(t) {
                        !this.props.show && t.show && this.checkForFocus()
                    }, N.prototype.componentDidMount = function() {
                        this._isMounted = !0, this.props.show && this.onShow()
                    }, N.prototype.componentDidUpdate = function(t) {
                        var e = this.props.transition;
                        !t.show || this.props.show || e ? !t.show && this.props.show && this.onShow() : this.onHide()
                    }, N.prototype.componentWillUnmount = function() {
                        var t = this.props,
                            e = t.show,
                            t = t.transition;
                        this._isMounted = !1, (e || t && !this.state.exited) && this.onHide()
                    }, N.prototype.autoFocus = function() {
                        var t, e;
                        this.props.autoFocus && (t = this.getDialogElement(), e = (0, i.default)((0, S.default)(this)), t && !(0, a.default)(t, e) && (this.lastFocus = e, t.hasAttribute("tabIndex") || ((0, d.default)(!1, 'The modal content node does not accept focus. For the benefit of assistive technologies, the tabIndex of the node is being set to "-1".'), t.setAttribute("tabIndex", -1)), t.focus()))
                    }, N.prototype.restoreLastFocus = function() {
                        this.lastFocus && this.lastFocus.focus && (this.lastFocus.focus(), this.lastFocus = null)
                    }, N.prototype.getDialogElement = function() {
                        return f.default.findDOMNode(this.dialog)
                    }, N.prototype.isTopModal = function() {
                        return this.props.manager.isTopModal(this)
                    }, N);

                function N() {
                    var t, e;
                    ! function(t) {
                        if (!(t instanceof N)) throw new TypeError("Cannot call a class as a function")
                    }(this);
                    for (var n = arguments.length, r = Array(n), o = 0; o < n; o++) r[o] = arguments[o];
                    return t = e = C(this, _.call.apply(_, [this].concat(r))), T.call(e), C(e, t)
                }
                n.propTypes = y({}, v.default.propTypes, {
                    show: o.default.bool,
                    container: o.default.oneOfType([s.default, o.default.func]),
                    onShow: o.default.func,
                    onHide: o.default.func,
                    backdrop: o.default.oneOfType([o.default.bool, o.default.oneOf(["static"])]),
                    renderBackdrop: o.default.func,
                    onEscapeKeyDown: o.default.func,
                    onEscapeKeyUp: (0, l.default)(o.default.func, "Please use onEscapeKeyDown instead for consistency"),
                    onBackdropClick: o.default.func,
                    backdropStyle: o.default.object,
                    backdropClassName: o.default.string,
                    containerClassName: o.default.string,
                    keyboard: o.default.bool,
                    transition: c.default,
                    backdropTransition: c.default,
                    autoFocus: o.default.bool,
                    enforceFocus: o.default.bool,
                    restoreFocus: o.default.bool,
                    onEnter: o.default.func,
                    onEntering: o.default.func,
                    onEntered: o.default.func,
                    onExit: o.default.func,
                    onExiting: o.default.func,
                    onExited: o.default.func,
                    manager: o.default.object.isRequired
                }), n.defaultProps = {
                    show: !1,
                    backdrop: !0,
                    keyboard: !0,
                    autoFocus: !0,
                    enforceFocus: !0,
                    restoreFocus: !0,
                    onHide: function() {},
                    manager: A,
                    renderBackdrop: function(t) {
                        return g.default.createElement("div", t)
                    }
                };
                var T = function() {
                    var o = this;
                    this.state = {
                        exited: !this.props.show
                    }, this.renderBackdrop = function() {
                        var t = o.props,
                            e = t.backdropStyle,
                            n = t.backdropClassName,
                            r = t.renderBackdrop,
                            t = t.backdropTransition,
                            n = r({
                                ref: function(t) {
                                    return o.backdrop = t
                                },
                                style: e,
                                className: n,
                                onClick: o.handleBackdropClick
                            });
                        return t && (n = g.default.createElement(t, {
                            appear: !0,
                            in: o.props.show
                        }, n)), n
                    }, this.onPortalRendered = function() {
                        o.autoFocus(), o.props.onShow && o.props.onShow()
                    }, this.onShow = function() {
                        var t = (0, S.default)(o),
                            e = (0, w.default)(o.props.container, t.body);
                        o.props.manager.add(o, e, o.props.containerClassName), o._onDocumentKeydownListener = (0, h.default)(t, "keydown", o.handleDocumentKeyDown), o._onDocumentKeyupListener = (0, h.default)(t, "keyup", o.handleDocumentKeyUp), o._onFocusinListener = (0, E.default)(o.enforceFocus)
                    }, this.onHide = function() {
                        o.props.manager.remove(o), o._onDocumentKeydownListener.remove(), o._onDocumentKeyupListener.remove(), o._onFocusinListener.remove(), o.props.restoreFocus && o.restoreLastFocus()
                    }, this.setMountNode = function(t) {
                        o.mountNode = t && t.getMountNode()
                    }, this.setModalNodeRef = function(t) {
                        o.modalNode = t
                    }, this.setDialogRef = function(t) {
                        o.dialog = t
                    }, this.handleHidden = function() {
                        var t;
                        o.setState({
                            exited: !0
                        }), o.onHide(), o.props.onExited && (t = o.props).onExited.apply(t, arguments)
                    }, this.handleBackdropClick = function(t) {
                        t.target === t.currentTarget && (o.props.onBackdropClick && o.props.onBackdropClick(t), !0 === o.props.backdrop && o.props.onHide())
                    }, this.handleDocumentKeyDown = function(t) {
                        o.props.keyboard && 27 === t.keyCode && o.isTopModal() && (o.props.onEscapeKeyDown && o.props.onEscapeKeyDown(t), o.props.onHide())
                    }, this.handleDocumentKeyUp = function(t) {
                        o.props.keyboard && 27 === t.keyCode && o.isTopModal() && o.props.onEscapeKeyUp && o.props.onEscapeKeyUp(t)
                    }, this.checkForFocus = function() {
                        u.default && (o.lastFocus = (0, i.default)())
                    }, this.enforceFocus = function() {
                        var t, e;
                        o.props.enforceFocus && o._isMounted && o.isTopModal() && (t = o.getDialogElement(), e = (0, i.default)((0, S.default)(o)), t && !(0, a.default)(t, e) && t.focus())
                    }
                };
                n.Manager = p.default, e.default = n, t.exports = e.default
            },
            7492: function(t, e, n) {
                "use strict";
                e.__esModule = !0;
                var f = r(n(3589)),
                    a = r(n(9182)),
                    u = r(n(8616)),
                    s = r(n(1503)),
                    d = n(2680);

                function r(t) {
                    return t && t.__esModule ? t : {
                        default: t
                    }
                }
                n = function e() {
                    var c = this,
                        t = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {},
                        n = t.hideSiblingNodes,
                        n = void 0 === n || n,
                        t = t.handleContainerOverflow,
                        t = void 0 === t || t;
                    ! function(t) {
                        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                    }(this), this.add = function(t, e, n) {
                        var r = c.modals.indexOf(t),
                            o = c.containers.indexOf(e);
                        if (-1 !== r) return r;
                        if (r = c.modals.length, c.modals.push(t), c.hideSiblingNodes && (0, d.hideSiblings)(e, t.modalNode), -1 !== o) return c.data[o].modals.push(t), r;
                        var i = {
                            modals: [t],
                            classes: n ? n.split(/\s+/) : [],
                            overflowing: (0, s.default)(e)
                        };
                        return c.handleContainerOverflow && (o = e, t = {
                            overflow: "hidden"
                        }, (n = i).style = {
                            overflow: o.style.overflow,
                            paddingRight: o.style.paddingRight
                        }, n.overflowing && (t.paddingRight = parseInt((0, a.default)(o, "paddingRight") || 0, 10) + (0, u.default)() + "px"), (0, a.default)(o, t)), i.classes.forEach(f.default.addClass.bind(null, e)), c.containers.push(e), c.data.push(i), r
                    }, this.remove = function(t) {
                        var e, n, r, o, i, a, u, s, l = c.modals.indexOf(t); - 1 !== l && (a = c.data, n = t, r = function(t) {
                            return -1 !== t.modals.indexOf(n)
                        }, o = -1, a.some(function(t, e) {
                            if (r(t, e)) return o = e, !0
                        }), e = o, i = c.data[e], a = c.containers[e], i.modals.splice(i.modals.indexOf(t), 1), c.modals.splice(l, 1), 0 === i.modals.length ? (i.classes.forEach(f.default.removeClass.bind(null, a)), c.handleContainerOverflow && (u = a, s = i.style, Object.keys(s).forEach(function(t) {
                            return u.style[t] = s[t]
                        })), c.hideSiblingNodes && (0, d.showSiblings)(a, t.modalNode), c.containers.splice(e, 1), c.data.splice(e, 1)) : c.hideSiblingNodes && (0, d.ariaHidden)(!1, i.modals[i.modals.length - 1].modalNode))
                    }, this.isTopModal = function(t) {
                        return !!c.modals.length && c.modals[c.modals.length - 1] === t
                    }, this.hideSiblingNodes = n, this.handleContainerOverflow = t, this.modals = [], this.containers = [], this.data = []
                };
                e.default = n, t.exports = e.default
            },
            5881: function(t, e, n) {
                "use strict";

                function r(t) {
                    return (r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                        return typeof t
                    } : function(t) {
                        return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                    })(t)
                }
                e.__esModule = !0;
                var o = f(n(6892)),
                    i = f(n(5517)),
                    a = f(n(5539)),
                    u = f(n(3804)),
                    s = f(n(7196)),
                    l = f(n(7080)),
                    c = f(n(4650)),
                    n = f(n(5772));

                function f(t) {
                    return t && t.__esModule ? t : {
                        default: t
                    }
                }

                function d(t, e) {
                    if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return !e || "object" !== r(e) && "function" != typeof e ? t : e
                }
                var p, u = (function(t, e) {
                    if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + r(e));
                    t.prototype = Object.create(e && e.prototype, {
                        constructor: {
                            value: t,
                            enumerable: !1,
                            writable: !0,
                            configurable: !0
                        }
                    }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
                }(h, p = u.default.Component), h.prototype.UNSAFE_componentWillMount = function() {
                    var t;
                    o.default && ("function" == typeof(t = this.props.container) && (t = t()), t && !s.default.findDOMNode(t) || this.setContainer(t))
                }, h.prototype.componentDidMount = function() {
                    this._portalContainerNode ? this.props.onRendered && this.props.onRendered() : (this.setContainer(this.props.container), this.forceUpdate(this.props.onRendered))
                }, h.prototype.UNSAFE_componentWillReceiveProps = function(t) {
                    t.container !== this.props.container && this.setContainer(t.container)
                }, h.prototype.componentWillUnmount = function() {
                    this._portalContainerNode = null
                }, h.prototype.setContainer = function(t) {
                    this._portalContainerNode = (0, l.default)(t, (0, c.default)(this).body)
                }, h.prototype.render = function() {
                    return this.props.children && this._portalContainerNode ? s.default.createPortal(this.props.children, this._portalContainerNode) : null
                }, h);

                function h() {
                    var t, e;
                    ! function(t) {
                        if (!(t instanceof h)) throw new TypeError("Cannot call a class as a function")
                    }(this);
                    for (var n = arguments.length, r = Array(n), o = 0; o < n; o++) r[o] = arguments[o];
                    return (t = e = d(this, p.call.apply(p, [this].concat(r)))).getMountNode = function() {
                        return e._portalContainerNode
                    }, d(e, t)
                }
                u.displayName = "Portal", u.propTypes = {
                    container: i.default.oneOfType([a.default, i.default.func]),
                    onRendered: i.default.func
                }, e.default = s.default.createPortal ? u : n.default, t.exports = e.default
            },
            6997: function(t, e, n) {
                "use strict";

                function r(t) {
                    return (r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                        return typeof t
                    } : function(t) {
                        return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                    })(t)
                }
                e.__esModule = !0;
                var o = i(n(5517)),
                    n = i(n(3804));

                function i(t) {
                    return t && t.__esModule ? t : {
                        default: t
                    }
                }
                var a, o = {
                        children: o.default.node
                    },
                    n = (function(t, e) {
                        if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + r(e));
                        t.prototype = Object.create(e && e.prototype, {
                            constructor: {
                                value: t,
                                enumerable: !1,
                                writable: !0,
                                configurable: !0
                            }
                        }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
                    }(u, a = n.default.Component), u.prototype.render = function() {
                        return this.props.children
                    }, u);

                function u() {
                    return function(t) {
                            if (!(t instanceof u)) throw new TypeError("Cannot call a class as a function")
                        }(this),
                        function(t, e) {
                            if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                            return !e || "object" !== r(e) && "function" != typeof e ? t : e
                        }(this, a.apply(this, arguments))
                }
                n.propTypes = o, e.default = n, t.exports = e.default
            },
            8414: function(t, e, n) {
                "use strict";
                e.__esModule = !0, e.default = function(t, e, n, r) {
                    return (0, o.default)(t, e, n, r), {
                        remove: function() {
                            (0, i.default)(t, e, n, r)
                        }
                    }
                };
                var o = r(n(9361)),
                    i = r(n(863));

                function r(t) {
                    return t && t.__esModule ? t : {
                        default: t
                    }
                }
                t.exports = e.default
            },
            1705: function(t, e) {
                "use strict";
                e.__esModule = !0, e.default = function(t) {
                    var e = !document.addEventListener,
                        n = void 0;
                    n = e ? (document.attachEvent("onfocusin", t), function() {
                        return document.detachEvent("onfocusin", t)
                    }) : (document.addEventListener("focus", t, !0), function() {
                        return document.removeEventListener("focus", t, !0)
                    });
                    return {
                        remove: n
                    }
                }, t.exports = e.default
            },
            7080: function(t, e, n) {
                "use strict";
                e.__esModule = !0, e.default = function(t, e) {
                    return t = "function" == typeof t ? t() : t, i.default.findDOMNode(t) || e
                };
                var r, o = n(7196),
                    i = (r = o) && r.__esModule ? r : {
                        default: r
                    };
                t.exports = e.default
            },
            1503: function(t, e, n) {
                "use strict";
                e.__esModule = !0, e.default = function(t) {
                    return (0, r.default)(t) || function(t) {
                        return t && "body" === t.tagName.toLowerCase()
                    }(t) ? function(t) {
                        var e = (0, o.default)(t),
                            n = (0, r.default)(e).innerWidth;
                        n || (t = e.documentElement.getBoundingClientRect(), n = t.right - Math.abs(t.left));
                        return e.body.clientWidth < n
                    }(t) : t.scrollHeight > t.clientHeight
                };
                var r = i(n(4615)),
                    o = i(n(5759));

                function i(t) {
                    return t && t.__esModule ? t : {
                        default: t
                    }
                }
                t.exports = e.default
            },
            2680: function(t, e) {
                "use strict";
                e.__esModule = !0, e.ariaHidden = r, e.hideSiblings = function(t, e) {
                    n(t, e, function(t) {
                        return r(!0, t)
                    })
                }, e.showSiblings = function(t, e) {
                    n(t, e, function(t) {
                        return r(!1, t)
                    })
                };
                var i = ["template", "script", "style"],
                    n = function(t, r, o) {
                        r = [].concat(r), [].forEach.call(t.children, function(t) {
                            var e, n; - 1 === r.indexOf(t) && (n = (e = t).nodeType, e = e.tagName, 1 === n && -1 === i.indexOf(e.toLowerCase())) && o(t)
                        })
                    };

                function r(t, e) {
                    e && (t ? e.setAttribute("aria-hidden", "true") : e.removeAttribute("aria-hidden"))
                }
            },
            4650: function(t, e, n) {
                "use strict";
                e.__esModule = !0, e.default = function(t) {
                    return (0, o.default)(r.default.findDOMNode(t))
                };
                var r = i(n(7196)),
                    o = i(n(5759));

                function i(t) {
                    return t && t.__esModule ? t : {
                        default: t
                    }
                }
                t.exports = e.default
            },
            3447: function(t, e, n) {
                "use strict";
                e.__esModule = !0, e.default = e.EXITING = e.ENTERED = e.ENTERING = e.EXITED = e.UNMOUNTED = void 0;
                var r = function(t) {
                        {
                            if (t && t.__esModule) return t;
                            var e, n = {};
                            if (null != t)
                                for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && ((e = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(t, r) : {}).get || e.set ? Object.defineProperty(n, r, e) : n[r] = t[r]);
                            return n.default = t, n
                        }
                    }(n(5517)),
                    i = u(n(3804)),
                    a = u(n(7196)),
                    o = n(9542);
                n(8603);

                function u(t) {
                    return t && t.__esModule ? t : {
                        default: t
                    }
                }
                var s = "unmounted";
                e.UNMOUNTED = s;
                var l = "exited";
                e.EXITED = l;
                var c = "entering";
                e.ENTERING = c;
                var f = "entered";
                e.ENTERED = f;
                var d = "exiting";
                e.EXITING = d;
                n = function(o) {
                    var t;

                    function e(t, e) {
                        var n, r = o.call(this, t, e) || this,
                            e = e.transitionGroup,
                            e = e && !e.isMounting ? t.enter : t.appear;
                        return r.appearStatus = null, t.in ? e ? (n = l, r.appearStatus = c) : n = f : n = t.unmountOnExit || t.mountOnEnter ? s : l, r.state = {
                            status: n
                        }, r.nextCallback = null, r
                    }
                    n = o, (t = e).prototype = Object.create(n.prototype), (t.prototype.constructor = t).__proto__ = n;
                    var n = e.prototype;
                    return n.getChildContext = function() {
                        return {
                            transitionGroup: null
                        }
                    }, e.getDerivedStateFromProps = function(t, e) {
                        return t.in && e.status === s ? {
                            status: l
                        } : null
                    }, n.componentDidMount = function() {
                        this.updateStatus(!0, this.appearStatus)
                    }, n.componentDidUpdate = function(t) {
                        var e = null;
                        t !== this.props && (t = this.state.status, this.props.in ? t !== c && t !== f && (e = c) : t !== c && t !== f || (e = d)), this.updateStatus(!1, e)
                    }, n.componentWillUnmount = function() {
                        this.cancelNextCallback()
                    }, n.getTimeouts = function() {
                        var t, e, n = this.props.timeout,
                            r = t = e = n;
                        return null != n && "number" != typeof n && (r = n.exit, t = n.enter, e = void 0 !== n.appear ? n.appear : t), {
                            exit: r,
                            enter: t,
                            appear: e
                        }
                    }, n.updateStatus = function(t, e) {
                        var n;
                        void 0 === t && (t = !1), null !== e ? (this.cancelNextCallback(), n = a.default.findDOMNode(this), e === c ? this.performEnter(n, t) : this.performExit(n)) : this.props.unmountOnExit && this.state.status === l && this.setState({
                            status: s
                        })
                    }, n.performEnter = function(t, e) {
                        var n = this,
                            r = this.props.enter,
                            o = this.context.transitionGroup ? this.context.transitionGroup.isMounting : e,
                            i = this.getTimeouts(),
                            a = o ? i.appear : i.enter;
                        e || r ? (this.props.onEnter(t, o), this.safeSetState({
                            status: c
                        }, function() {
                            n.props.onEntering(t, o), n.onTransitionEnd(t, a, function() {
                                n.safeSetState({
                                    status: f
                                }, function() {
                                    n.props.onEntered(t, o)
                                })
                            })
                        })) : this.safeSetState({
                            status: f
                        }, function() {
                            n.props.onEntered(t)
                        })
                    }, n.performExit = function(t) {
                        var e = this,
                            n = this.props.exit,
                            r = this.getTimeouts();
                        n ? (this.props.onExit(t), this.safeSetState({
                            status: d
                        }, function() {
                            e.props.onExiting(t), e.onTransitionEnd(t, r.exit, function() {
                                e.safeSetState({
                                    status: l
                                }, function() {
                                    e.props.onExited(t)
                                })
                            })
                        })) : this.safeSetState({
                            status: l
                        }, function() {
                            e.props.onExited(t)
                        })
                    }, n.cancelNextCallback = function() {
                        null !== this.nextCallback && (this.nextCallback.cancel(), this.nextCallback = null)
                    }, n.safeSetState = function(t, e) {
                        e = this.setNextCallback(e), this.setState(t, e)
                    }, n.setNextCallback = function(e) {
                        var n = this,
                            r = !0;
                        return this.nextCallback = function(t) {
                            r && (r = !1, n.nextCallback = null, e(t))
                        }, this.nextCallback.cancel = function() {
                            r = !1
                        }, this.nextCallback
                    }, n.onTransitionEnd = function(t, e, n) {
                        this.setNextCallback(n);
                        n = null == e && !this.props.addEndListener;
                        t && !n ? (this.props.addEndListener && this.props.addEndListener(t, this.nextCallback), null != e && setTimeout(this.nextCallback, e)) : setTimeout(this.nextCallback, 0)
                    }, n.render = function() {
                        var t = this.state.status;
                        if (t === s) return null;
                        var e = this.props,
                            n = e.children,
                            e = function(t, e) {
                                if (null == t) return {};
                                for (var n, r = {}, o = Object.keys(t), i = 0; i < o.length; i++) n = o[i], 0 <= e.indexOf(n) || (r[n] = t[n]);
                                return r
                            }(e, ["children"]);
                        if (delete e.in, delete e.mountOnEnter, delete e.unmountOnExit, delete e.appear, delete e.enter, delete e.exit, delete e.timeout, delete e.addEndListener, delete e.onEnter, delete e.onEntering, delete e.onEntered, delete e.onExit, delete e.onExiting, delete e.onExited, "function" == typeof n) return n(t, e);
                        n = i.default.Children.only(n);
                        return i.default.cloneElement(n, e)
                    }, e
                }(i.default.Component);

                function p() {}
                n.contextTypes = {
                    transitionGroup: r.object
                }, n.childContextTypes = {
                    transitionGroup: function() {}
                }, n.propTypes = {}, n.defaultProps = { in: !1,
                    mountOnEnter: !1,
                    unmountOnExit: !1,
                    appear: !1,
                    enter: !0,
                    exit: !0,
                    onEnter: p,
                    onEntering: p,
                    onEntered: p,
                    onExit: p,
                    onExiting: p,
                    onExited: p
                }, n.UNMOUNTED = 0, n.EXITED = 1, n.ENTERING = 2, n.ENTERED = 3, n.EXITING = 4;
                n = (0, o.polyfill)(n);
                e.default = n
            },
            8603: function(t, e, n) {
                "use strict";
                e.__esModule = !0, e.classNamesShape = e.timeoutsShape = void 0;
                var r;
                (r = n(5517)) && r.__esModule;
                var o = null;
                e.timeoutsShape = o;
                o = null;
                e.classNamesShape = o
            },
            2779: function(t, e) {
                var n;
                /*!
                  Copyright (c) 2017 Jed Watson.
                  Licensed under the MIT License (MIT), see
                  http://jedwatson.github.io/classnames
                */
                ! function() {
                    "use strict";
                    var a = {}.hasOwnProperty;

                    function u() {
                        for (var t = [], e = 0; e < arguments.length; e++) {
                            var n = arguments[e];
                            if (n) {
                                var r = typeof n;
                                if ("string" == r || "number" == r) t.push(n);
                                else if (Array.isArray(n) && n.length) {
                                    var o = u.apply(null, n);
                                    o && t.push(o)
                                } else if ("object" == r)
                                    for (var i in n) a.call(n, i) && n[i] && t.push(i)
                            }
                        }
                        return t.join(" ")
                    }
                    t.exports ? (u.default = u, t.exports = u) : void 0 === (n = function() {
                        return u
                    }.apply(e, [])) || (t.exports = n)
                }()
            },
            7718: function(t, e, n) {
                "use strict";
                var r = n(4859);
                e.__esModule = !0, e.default = function(t) {
                    void 0 === t && (t = (0, o.default)());
                    try {
                        return t.activeElement
                    } catch (t) {}
                };
                var o = r(n(5759));
                t.exports = e.default
            },
            2196: function(t, e, n) {
                "use strict";
                var r = n(4859);
                e.__esModule = !0, e.default = function(t, e) {
                    t.classList ? t.classList.add(e) : (0, o.default)(t, e) || ("string" == typeof t.className ? t.className = t.className + " " + e : t.setAttribute("class", (t.className && t.className.baseVal || "") + " " + e))
                };
                var o = r(n(7218));
                t.exports = e.default
            },
            7218: function(t, e) {
                "use strict";
                e.__esModule = !0, e.default = function(t, e) {
                    return t.classList ? !!e && t.classList.contains(e) : -1 !== (" " + (t.className.baseVal || t.className) + " ").indexOf(" " + e + " ")
                }, t.exports = e.default
            },
            3589: function(t, e, n) {
                "use strict";
                var r = n(4859);
                e.__esModule = !0, e.default = void 0;
                var o = r(n(2196));
                e.addClass = o.default;
                var i = r(n(4812));
                e.removeClass = i.default;
                n = r(n(7218));
                e.hasClass = n.default;
                n = {
                    addClass: o.default,
                    removeClass: i.default,
                    hasClass: n.default
                };
                e.default = n
            },
            4812: function(t) {
                "use strict";

                function n(t, e) {
                    return t.replace(new RegExp("(^|\\s)" + e + "(?:\\s|$)", "g"), "$1").replace(/\s+/g, " ").replace(/^\s*|\s*$/g, "")
                }
                t.exports = function(t, e) {
                    t.classList ? t.classList.remove(e) : "string" == typeof t.className ? t.className = n(t.className, e) : t.setAttribute("class", n(t.className && t.className.baseVal || "", e))
                }
            },
            6540: function(t, e, n) {
                "use strict";
                var r = n(4859);
                e.__esModule = !0, e.default = function(r, o) {
                    return function(t) {
                        var e = t.currentTarget,
                            n = t.target;
                        (0, a.default)(e, r).some(function(t) {
                            return (0, i.default)(t, n)
                        }) && o.call(this, t)
                    }
                };
                var i = r(n(1009)),
                    a = r(n(351));
                t.exports = e.default
            },
            1836: function(t, e, n) {
                "use strict";
                var r = n(4859);
                e.__esModule = !0, e.default = void 0;
                var o = r(n(9361));
                e.on = o.default;
                var i = r(n(863));
                e.off = i.default;
                var a = r(n(6540));
                e.filter = a.default;
                n = r(n(2777));
                e.listen = n.default;
                n = {
                    on: o.default,
                    off: i.default,
                    filter: a.default,
                    listen: n.default
                };
                e.default = n
            },
            2777: function(t, e, n) {
                "use strict";
                var r = n(4859);
                e.__esModule = !0, e.default = void 0;
                var o = r(n(6892)),
                    i = r(n(9361)),
                    a = r(n(863)),
                    n = function() {};
                o.default && (n = function(t, e, n, r) {
                    return (0, i.default)(t, e, n, r),
                        function() {
                            (0, a.default)(t, e, n, r)
                        }
                }), e.default = n, t.exports = e.default
            },
            863: function(t, e, n) {
                "use strict";
                var r = n(4859);
                e.__esModule = !0, e.default = void 0;
                var o = function() {};
                r(n(6892)).default && (o = document.addEventListener ? function(t, e, n, r) {
                    return t.removeEventListener(e, n, r || !1)
                } : document.attachEvent ? function(t, e, n) {
                    return t.detachEvent("on" + e, n)
                } : void 0), e.default = o, t.exports = e.default
            },
            9361: function(t, e, n) {
                "use strict";
                var r = n(4859);
                e.__esModule = !0, e.default = void 0;
                var o = function() {};
                r(n(6892)).default && (o = document.addEventListener ? function(t, e, n, r) {
                    return t.addEventListener(e, n, r || !1)
                } : document.attachEvent ? function(e, t, n) {
                    return e.attachEvent("on" + t, function(t) {
                        (t = t || window.event).target = t.target || t.srcElement, t.currentTarget = e, n.call(e, t)
                    })
                } : void 0), e.default = o, t.exports = e.default
            },
            5759: function(t, e) {
                "use strict";
                e.__esModule = !0, e.default = function(t) {
                    return t && t.ownerDocument || document
                }, t.exports = e.default
            },
            1009: function(t, e, n) {
                "use strict";
                var r = n(4859);
                e.__esModule = !0, e.default = void 0;
                n = r(n(6892)).default ? function(t, e) {
                    return t.contains ? t.contains(e) : t.compareDocumentPosition ? t === e || !!(16 & t.compareDocumentPosition(e)) : o(t, e)
                } : o;

                function o(t, e) {
                    if (e)
                        do {
                            if (e === t) return !0
                        } while (e = e.parentNode);
                    return !1
                }
                e.default = n, t.exports = e.default
            },
            4615: function(t, e) {
                "use strict";
                e.__esModule = !0, e.default = function(t) {
                    return t === t.window ? t : 9 === t.nodeType && (t.defaultView || t.parentWindow)
                }, t.exports = e.default
            },
            351: function(t, e) {
                "use strict";
                e.__esModule = !0, e.default = function(t, e) {
                    var n = "#" === e[0],
                        r = "." === e[0],
                        o = n || r ? e.slice(1) : e;
                    if (i.test(o)) return n ? (t = t.getElementById ? t : document, (n = t.getElementById(o)) ? [n] : []) : t.getElementsByClassName && r ? a(t.getElementsByClassName(o)) : a(t.getElementsByTagName(e));
                    return a(t.querySelectorAll(e))
                };
                var i = /^[\w-]*$/,
                    a = Function.prototype.bind.call(Function.prototype.call, [].slice);
                t.exports = e.default
            },
            8196: function(t, e, n) {
                "use strict";
                var r = n(4859);
                e.__esModule = !0, e.default = function(a) {
                    if (!a) throw new TypeError("No Element passed to `getComputedStyle()`");
                    var t = a.ownerDocument;
                    return "defaultView" in t ? (t.defaultView.opener ? a.ownerDocument.defaultView : window).getComputedStyle(a, null) : {
                        getPropertyValue: function(t) {
                            var e = a.style;
                            "float" == (t = (0, u.default)(t)) && (t = "styleFloat");
                            var n, r, o, i = a.currentStyle[t] || null;
                            return null == i && e && e[t] && (i = e[t]), l.test(i) && !s.test(t) && (n = e.left, (o = (r = a.runtimeStyle) && r.left) && (r.left = a.currentStyle.left), e.left = "fontSize" === t ? "1em" : i, i = e.pixelLeft + "px", e.left = n, o && (r.left = o)), i
                        }
                    }
                };
                var u = r(n(5165)),
                    s = /^(top|right|bottom|left)$/,
                    l = /^([+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|))(?!px)[a-z%]+$/i;
                t.exports = e.default
            },
            9182: function(t, e, n) {
                "use strict";
                var r = n(4859);
                e.__esModule = !0, e.default = function(n, t, e) {
                    var r = "",
                        o = "",
                        i = t;
                    if ("string" == typeof t) {
                        if (void 0 === e) return n.style[(0, a.default)(t)] || (0, s.default)(n).getPropertyValue((0, u.default)(t));
                        (i = {})[t] = e
                    }
                    Object.keys(i).forEach(function(t) {
                        var e = i[t];
                        e || 0 === e ? (0, f.default)(t) ? o += t + "(" + e + ") " : r += (0, u.default)(t) + ": " + e + ";" : (0, l.default)(n, (0, u.default)(t))
                    }), o && (r += c.transform + ": " + o + ";");
                    n.style.cssText += ";" + r
                };
                var a = r(n(5165)),
                    u = r(n(5273)),
                    s = r(n(8196)),
                    l = r(n(9087)),
                    c = n(4596),
                    f = r(n(3107));
                t.exports = e.default
            },
            9087: function(t, e) {
                "use strict";
                e.__esModule = !0, e.default = function(t, e) {
                    return "removeProperty" in t.style ? t.style.removeProperty(e) : t.style.removeAttribute(e)
                }, t.exports = e.default
            },
            3107: function(t, e) {
                "use strict";
                e.__esModule = !0, e.default = function(t) {
                    return !(!t || !n.test(t))
                };
                var n = /^((translate|rotate|scale)(X|Y|Z|3d)?|matrix(3d)?|perspective|skew(X|Y)?)$/i;
                t.exports = e.default
            },
            4596: function(t, e, n) {
                "use strict";
                var r = n(4859);
                e.__esModule = !0, e.default = e.animationEnd = e.animationDelay = e.animationTiming = e.animationDuration = e.animationName = e.transitionEnd = e.transitionDuration = e.transitionDelay = e.transitionTiming = e.transitionProperty = e.transform = void 0;
                var o, i, a, u, s = r(n(6892)),
                    r = "transform";
                e.transform = r, e.animationEnd = void 0, e.transitionEnd = o, e.transitionDelay = u, e.transitionTiming = a, e.transitionDuration = l, e.transitionProperty = i, e.animationDelay = void 0, e.animationTiming = void 0, e.animationDuration = void 0, e.animationName = void 0, s.default && (s = (n = function() {
                    for (var t, e, n = document.createElement("div").style, r = {
                            O: function(t) {
                                return "o" + t.toLowerCase()
                            },
                            Moz: function(t) {
                                return t.toLowerCase()
                            },
                            Webkit: function(t) {
                                return "webkit" + t
                            },
                            ms: function(t) {
                                return "MS" + t
                            }
                        }, o = Object.keys(r), i = "", a = 0; a < o.length; a++) {
                        var u = o[a];
                        if (u + "TransitionProperty" in n) {
                            i = "-" + u.toLowerCase(), t = r[u]("TransitionEnd"), e = r[u]("AnimationEnd");
                            break
                        }
                    }!t && "transitionProperty" in n && (t = "transitionend");
                    !e && "animationName" in n && (e = "animationend");
                    return n = null, {
                        animationEnd: e,
                        transitionEnd: t,
                        prefix: i
                    }
                }()).prefix, e.transitionEnd = o = n.transitionEnd, e.animationEnd = n.animationEnd, e.transform = r = s + "-" + r, e.transitionProperty = i = s + "-transition-property", e.transitionDuration = l = s + "-transition-duration", e.transitionDelay = u = s + "-transition-delay", e.transitionTiming = a = s + "-transition-timing-function", e.animationName = s + "-animation-name", e.animationDuration = s + "-animation-duration", e.animationTiming = s + "-animation-delay", e.animationDelay = s + "-animation-timing-function");
                var l = {
                    transform: r,
                    end: o,
                    property: i,
                    timing: a,
                    delay: u,
                    duration: l
                };
                e.default = l
            },
            1124: function(t, e) {
                "use strict";
                e.__esModule = !0, e.default = function(t) {
                    return t.replace(n, function(t, e) {
                        return e.toUpperCase()
                    })
                };
                var n = /-(.)/g;
                t.exports = e.default
            },
            5165: function(t, e, n) {
                "use strict";
                var r = n(4859);
                e.__esModule = !0, e.default = function(t) {
                    return (0, o.default)(t.replace(i, "ms-"))
                };
                var o = r(n(1124)),
                    i = /^-ms-/;
                t.exports = e.default
            },
            3994: function(t, e) {
                "use strict";
                e.__esModule = !0, e.default = function(t) {
                    return t.replace(n, "-$1").toLowerCase()
                };
                var n = /([A-Z])/g;
                t.exports = e.default
            },
            5273: function(t, e, n) {
                "use strict";
                var r = n(4859);
                e.__esModule = !0, e.default = function(t) {
                    return (0, o.default)(t).replace(i, "-ms-")
                };
                var o = r(n(3994)),
                    i = /^ms-/;
                t.exports = e.default
            },
            6892: function(t, e) {
                "use strict";
                e.__esModule = !0, e.default = void 0;
                var n = !("undefined" == typeof window || !window.document || !window.document.createElement);
                e.default = n, t.exports = e.default
            },
            8616: function(t, e, n) {
                "use strict";
                var r = n(4859);
                e.__esModule = !0, e.default = function(t) {
                    (!o && 0 !== o || t) && i.default && ((t = document.createElement("div")).style.position = "absolute", t.style.top = "-9999px", t.style.width = "50px", t.style.height = "50px", t.style.overflow = "scroll", document.body.appendChild(t), o = t.offsetWidth - t.clientWidth, document.body.removeChild(t));
                    return o
                };
                var o, i = r(n(6892));
                t.exports = e.default
            },
            7677: function(t) {
                "use strict";
                t.exports = function(t, e, n, r, o, i, a, u) {
                    var s, l, c;
                    if (!t) throw void 0 === e ? c = new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.") : (s = [n, r, o, i, a, u], l = 0, (c = new Error(e.replace(/%s/g, function() {
                        return s[l++]
                    }))).name = "Invariant Violation"), c.framesToPop = 1, c
                }
            },
            5539: function(t, e, n) {
                "use strict";
                Object.defineProperty(e, "__esModule", {
                    value: !0
                });
                var i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                        return typeof t
                    } : function(t) {
                        return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                    },
                    a = r(n(3804)),
                    n = r(n(7965));

                function r(t) {
                    return t && t.__esModule ? t : {
                        default: t
                    }
                }
                e.default = (0, n.default)(function(t, e, n, r, o) {
                    return t = t[e], e = void 0 === t ? "undefined" : i(t), a.default.isValidElement(t) ? new Error("Invalid " + r + " `" + o + "` of type ReactElement supplied to `" + n + "`, expected a ReactComponent or a DOMElement. You can usually obtain a ReactComponent or DOMElement from a ReactElement by attaching a ref to it.") : "object" === e && "function" == typeof t.render || 1 === t.nodeType ? null : new Error("Invalid " + r + " `" + o + "` of value `" + t + "` supplied to `" + n + "`, expected a ReactComponent or a DOMElement.")
                }), t.exports = e.default
            },
            1083: function(t, e, n) {
                "use strict";
                Object.defineProperty(e, "__esModule", {
                    value: !0
                }), e.default = i;
                var r, o = n(1449),
                    p = (r = o) && r.__esModule ? r : {
                        default: r
                    };
                var h = {};

                function i(f, d) {
                    return function(t, e, n, r, o) {
                        var i, a = n || "<<anonymous>>",
                            u = o || e;
                        null != t[e] && (i = n + "." + e, (0, p.default)(h[i], "The " + r + " `" + u + "` of `" + a + "` is deprecated. " + d + "."), h[i] = !0);
                        for (var s = arguments.length, l = Array(5 < s ? s - 5 : 0), c = 5; c < s; c++) l[c - 5] = arguments[c];
                        return f.apply(void 0, [t, e, n, r, o].concat(l))
                    }
                }
                i._resetWarned = function() {
                    h = {}
                }, t.exports = e.default
            },
            1904: function(t, e, n) {
                "use strict";
                Object.defineProperty(e, "__esModule", {
                    value: !0
                });
                var i = r(n(3804)),
                    a = n(7302),
                    n = r(n(7965));

                function r(t) {
                    return t && t.__esModule ? t : {
                        default: t
                    }
                }
                e.default = (0, n.default)(function(t, e, n, r, o) {
                    return e = t[e], i.default.isValidElement(e) ? new Error("Invalid " + r + " `" + o + "` of type ReactElement supplied to `" + n + "`,expected an element type (a string , component class, or function component).") : (0, a.isValidElementType)(e) ? null : new Error("Invalid " + r + " `" + o + "` of value `" + e + "` supplied to `" + n + "`, expected an element type (a string , component class, or function component).")
                }), t.exports = e.default
            },
            7965: function(t, e) {
                "use strict";
                Object.defineProperty(e, "__esModule", {
                    value: !0
                }), e.default = function(l) {
                    function t(t, e, n, r, o, i) {
                        r = r || "<<anonymous>>", i = i || n;
                        if (null == e[n]) return t ? new Error("Required " + o + " `" + i + "` was not specified in `" + r + "`.") : null;
                        for (var a = arguments.length, u = Array(6 < a ? a - 6 : 0), s = 6; s < a; s++) u[s - 6] = arguments[s];
                        return l.apply(void 0, [e, n, r, o, i].concat(u))
                    }
                    var e = t.bind(null, !1);
                    return e.isRequired = t.bind(null, !0), e
                }, t.exports = e.default
            },
            1449: function(t) {
                "use strict";
                var e = function() {};
                t.exports = e
            },
            774: function(t) {
                t.exports = "https://images.rbxcdn.com/d061775f2c5685fdb5f332aaefc8fc7b-hearts_large@3x.png"
            },
            1408: function(t) {
                t.exports = "https://images.rbxcdn.com/51becc9e20f99dc4be7106264a364d58-voicechat_large@3x.png"
            },
            2564: function(t) {
                "use strict";
                t.exports = function() {}
            },
            5517: function(t) {
                "use strict";
                t.exports = PropTypes
            },
            3804: function(t) {
                "use strict";
                t.exports = React
            },
            7196: function(t) {
                "use strict";
                t.exports = ReactDOM
            }
        },
        r = {};

    function Se(t) {
        if (r[t]) return r[t].exports;
        var e = r[t] = {
            exports: {}
        };
        return n[t](e, e.exports, Se), e.exports
    }
    Se.n = function(t) {
            var e = t && t.__esModule ? function() {
                return t.default
            } : function() {
                return t
            };
            return Se.d(e, {
                a: e
            }), e
        }, Se.d = function(t, e) {
            for (var n in e) Se.o(e, n) && !Se.o(t, n) && Object.defineProperty(t, n, {
                enumerable: !0,
                get: e[n]
            })
        }, Se.o = function(t, e) {
            return Object.prototype.hasOwnProperty.call(t, e)
        }, Se.r = function(t) {
            "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
                value: "Module"
            }), Object.defineProperty(t, "__esModule", {
                value: !0
            })
        },
        function() {
            "use strict";

            function b() {
                return {
                    retryable: !0,
                    withCredentials: !0,
                    url: "".concat(p, "/v1/email")
                }
            }
            var E = Se(3804),
                w = Se.n(E),
                s = Roblox,
                t = Se.n(s),
                n = Se(7196),
                S = CoreUtilities,
                r = "id-verification-container",
                e = Se(5517),
                o = Se.n(e),
                i = ReactUtilities,
                a = Se(3674),
                x = Se.n(a),
                C = "SET_USER_EMAIL_STATES",
                _ = "SET_MODAL_STATES",
                A = "SET_PAGENAME_STATE",
                N = "SET_INPUT_STATE",
                T = "SET_ERROR_STATE",
                O = "SET_EMAIL_UPDATING_STATE",
                k = "SET_TRIGGER_ORIGIN",
                M = "SET_INPUT_CLEAR",
                R = "SET_VERIFICATION_CALLBACK",
                P = "SET_CALLBACK_READY",
                I = "CLEANUP_MODAL",
                L = {
                    AgeVerification: "ageVerification",
                    Enter: "Enter",
                    InvalidEmailCode: 9,
                    InvalidPasswordCode: 8,
                    ActionChangeEmail: "Action.ChangeEmail",
                    ActionSent: "Action.Sent",
                    ActionContinue: "Action.Continue",
                    ActionGenericSkip: "Action.GenericSkip",
                    DescriptionAddEmailTextOver13: "Description.IDVerificationAddEmailText",
                    DescriptionAddEmailTextUnder13: "Description.IDVerificationAddEmailText",
                    HeadingAddEmail: "Heading.AddEmail",
                    LabelEmailInputPlaceholderOver13: "Label.EmailInputPlaceholderOver13",
                    LabelEmailInputPlaceholderUnder13: "Label.EmailInputPlaceholderUnder13",
                    MessageInvalidEmailAddress: "Message.InvalidEmailAddress"
                },
                U = {
                    LANDING: "LANDING",
                    EMAIL: "EMAIL",
                    MODAL: "MODAL",
                    SUCCESS_OVERAGE: "SUCCESS_OVERAGE",
                    SUCCESS_UNDERAGE: "SUCCESS_UNDERAGE",
                    SUCCESS_GENERIC: "SUCCESS",
                    FAILURE: "FAILURE",
                    PENDING: "PENDING",
                    POLLING: "POLLING",
                    EMAIL_CONTINUE: "EMAIL_CONTINUE",
                    EXTERNAL_EMAIL: "EXTERNAL_EMAIL",
                    ERROR: "ERROR",
                    TEMP_BAN: "TEMP_BAN",
                    PRIVACY_NOTICE: "PRIVACY_NOTICE",
                    VENDOR_LINK: "VENDOR_LINK",
                    BIRTHDAY_WARNING: "BIRTHDAY_WARNING"
                },
                B = "AccountSettings",
                D = "LuaApp",
                j = "WebApp",
                V = 0,
                F = 1,
                H = 2,
                q = 3,
                z = 4,
                G = 5,
                W = 6,
                K = 7,
                Y = 2,
                $ = 3,
                Q = 4,
                J = 5,
                X = 6,
                Z = 0,
                tt = 1,
                et = 2,
                nt = 3,
                u = "Veriff",
                rt = "OpenVoiceOptInOverlay",
                ot = "OpenBirthdayChangeWarning",
                it = "OpenIdentityVerificationModal",
                l = CoreRobloxUtilities,
                c = l.eventStreamService.eventTypes,
                f = "ageVerification",
                e = "voiceChat",
                a = "buttonClick",
                at = {
                    showQRCode: {
                        name: "showQRCode",
                        type: c.modalAction,
                        context: f,
                        params: {
                            aType: "shown",
                            field: "ageVerificationQRCode"
                        }
                    },
                    showAddEmailModal: {
                        name: "showAddEmailModal",
                        type: c.modalAction,
                        context: f,
                        params: {
                            aType: "shown",
                            field: "addEmail"
                        }
                    },
                    useAddEmailField: {
                        name: "useAddEmailField",
                        type: c.formInteraction,
                        context: f,
                        params: {
                            btn: "emailAddress",
                            field: "addEmail"
                        }
                    },
                    addEmailConfirm: {
                        name: "addEmailConfirm",
                        type: a,
                        context: f,
                        params: {
                            btn: "continue",
                            field: "addEmail"
                        }
                    },
                    showModal: {
                        name: "showModal",
                        type: c.modalAction,
                        context: f,
                        params: {
                            aType: "shown",
                            field: "startAgeVerification"
                        }
                    },
                    verificationLinkClicked: {
                        name: "verificationLinkClicked",
                        type: a,
                        context: f,
                        params: {
                            btn: "startSession",
                            field: "startAgeVerification"
                        }
                    },
                    exitIdentityVerification: {
                        name: "exitIdentityVerification",
                        type: c.modalAction,
                        context: f,
                        params: {
                            aType: "dismissed",
                            field: "startAgeVerification"
                        }
                    },
                    verificationInProgress: {
                        name: "verificationInProgress",
                        type: c.modalAction,
                        context: f,
                        params: {
                            aType: "shown",
                            field: "ageVerificationProgress"
                        }
                    },
                    verificationPending: {
                        name: "verificationPending",
                        type: c.modalAction,
                        context: f,
                        params: {
                            aType: "shown",
                            field: "ageVerificationPending"
                        }
                    },
                    successPage: {
                        name: "successPage",
                        type: c.modalAction,
                        context: f,
                        params: {
                            aType: "shown",
                            field: "ageVerificationSucceded"
                        }
                    },
                    successPageClose: {
                        name: "successPageClose",
                        type: a,
                        context: f,
                        params: {
                            btn: "Done",
                            field: "ageVerificationSucceded"
                        }
                    },
                    failurePage: {
                        name: "failurePage",
                        type: c.modalAction,
                        context: f,
                        params: {
                            aType: "shown",
                            field: "ageVerificationFailed"
                        }
                    },
                    failurePageClose: {
                        name: "failurePageClose",
                        type: a,
                        context: f,
                        params: {
                            btn: "Done",
                            field: "ageVerificationFailed"
                        }
                    },
                    tempBanPage: {
                        name: "tempBanPage",
                        type: c.modalAction,
                        context: f,
                        params: {
                            aType: "shown",
                            field: "ageVerificationTempBanned"
                        }
                    },
                    tempBanPageClose: {
                        name: "tempBanPageClose",
                        type: a,
                        context: f,
                        params: {
                            btn: "Done",
                            field: "ageVerificationTempBanned"
                        }
                    },
                    joinWithoutVoiceChat: {
                        name: "joinWithoutVoiceChat",
                        type: "joinWithoutVoiceChat",
                        context: e,
                        params: {
                            dontShowAgain: !1
                        }
                    },
                    closeEnableVoiceChatModal: {
                        name: "closeEnableVoiceChatModal",
                        type: "closeEnableVoiceChatModal",
                        context: e
                    },
                    showEnableVoiceChatModal: {
                        name: "showEnableVoiceChatModal",
                        type: "showEnableVoiceChatModal",
                        context: e
                    }
                },
                d = s.EnvironmentUrls.apiGatewayUrl,
                p = s.EnvironmentUrls.accountSettingsApi,
                h = s.EnvironmentUrls.accountInformationApi,
                y = s.EnvironmentUrls.voiceApi;

            function m(e, t) {
                var n, r = Object.keys(e);
                return Object.getOwnPropertySymbols && (n = Object.getOwnPropertySymbols(e), t && (n = n.filter(function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                })), r.push.apply(r, n)), r
            }

            function g(r) {
                for (var t = 1; t < arguments.length; t++) {
                    var o = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? m(Object(o), !0).forEach(function(t) {
                        var e, n;
                        e = r, t = o[n = t], n in e ? Object.defineProperty(e, n, {
                            value: t,
                            enumerable: !0,
                            configurable: !0,
                            writable: !0
                        }) : e[n] = t
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(r, Object.getOwnPropertyDescriptors(o)) : m(Object(o)).forEach(function(t) {
                        Object.defineProperty(r, t, Object.getOwnPropertyDescriptor(o, t))
                    })
                }
                return r
            }

            function ut(t) {
                var e = {
                        retryable: !0,
                        withCredentials: !0,
                        url: "".concat(d, "/age-verification-service/v1/veriff-id-verification/start-verification")
                    },
                    t = {
                        generateLink: t
                    };
                return S.httpService.post(e, t).then(function(t) {
                    return t.data
                }, function() {
                    return !1
                })
            }

            function st() {
                var t = {
                    retryable: !0,
                    withCredentials: !0,
                    url: "".concat(d, "/age-verification-service/v1/age-verification/verified-age")
                };
                return S.httpService.get(t).then(function(t) {
                    return t.data
                })
            }

            function lt(t) {
                var e = {
                        retryable: !0,
                        withCredentials: !0,
                        url: "".concat(d, "/age-verification-service/v1/veriff-id-verification/verified-status")
                    },
                    t = {
                        token: t
                    };
                return S.httpService.get(e, t).then(function(t) {
                    return t.data
                })
            }

            function ct(t, e) {
                l.eventStreamService.sendEventWithTarget(t.type, t.context, g(g({}, t.params), {}, {
                    origin: e.origin
                }))
            }

            function v(e, t) {
                var n, r = Object.keys(e);
                return Object.getOwnPropertySymbols && (n = Object.getOwnPropertySymbols(e), t && (n = n.filter(function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                })), r.push.apply(r, n)), r
            }

            function ft(r) {
                for (var t = 1; t < arguments.length; t++) {
                    var o = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? v(Object(o), !0).forEach(function(t) {
                        var e, n;
                        e = r, t = o[n = t], n in e ? Object.defineProperty(e, n, {
                            value: t,
                            enumerable: !0,
                            configurable: !0,
                            writable: !0
                        }) : e[n] = t
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(r, Object.getOwnPropertyDescriptors(o)) : v(Object(o)).forEach(function(t) {
                        Object.defineProperty(r, t, Object.getOwnPropertyDescriptor(o, t))
                    })
                }
                return r
            }

            function dt(t) {
                var e = {
                        retryable: !0,
                        withCredentials: !0,
                        url: "".concat(y, "/v1/settings/verify/show-overlay")
                    },
                    t = {
                        showOverlay: t
                    };
                return S.httpService.post(e, t).then(function(t) {
                    return t.data
                })
            }

            function pt(t, e) {
                var n = {
                        withCredentials: !0,
                        url: "".concat(y, "/v1/settings/user-opt-in")
                    },
                    e = {
                        isUserOptIn: t,
                        isOptedInThroughUpsell: e
                    };
                return S.httpService.post(n, e).then(function(t) {
                    return t.data
                })
            }

            function ht() {
                var t = {
                    withCredentials: !0,
                    url: "".concat(y, "/v1/settings/record-user-seen-upsell-modal")
                };
                return S.httpService.post(t, {}).then(function(t) {
                    return t.data
                })
            }

            function yt(t) {
                l.eventStreamService.sendEventWithTarget(t.type, t.context, ft({}, t.params))
            }

            function mt(t, e) {
                return function(t) {
                    if (Array.isArray(t)) return t
                }(t) || function(t, e) {
                    if ("undefined" == typeof Symbol || !(Symbol.iterator in Object(t))) return;
                    var n = [],
                        r = !0,
                        o = !1,
                        i = void 0;
                    try {
                        for (var a, u = t[Symbol.iterator](); !(r = (a = u.next()).done) && (n.push(a.value), !e || n.length !== e); r = !0);
                    } catch (t) {
                        o = !0, i = t
                    } finally {
                        try {
                            r || null == u.return || u.return()
                        } finally {
                            if (o) throw i
                        }
                    }
                    return n
                }(t, e) || function(t, e) {
                    if (!t) return;
                    if ("string" == typeof t) return gt(t, e);
                    var n = Object.prototype.toString.call(t).slice(8, -1);
                    "Object" === n && t.constructor && (n = t.constructor.name);
                    if ("Map" === n || "Set" === n) return Array.from(t);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return gt(t, e)
                }(t, e) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function gt(t, e) {
                (null == e || e > t.length) && (e = t.length);
                for (var n = 0, r = new Array(e); n < e; n++) r[n] = t[n];
                return r
            }

            function vt(e, t) {
                var n, r = Object.keys(e);
                return Object.getOwnPropertySymbols && (n = Object.getOwnPropertySymbols(e), t && (n = n.filter(function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                })), r.push.apply(r, n)), r
            }

            function bt(r) {
                for (var t = 1; t < arguments.length; t++) {
                    var o = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? vt(Object(o), !0).forEach(function(t) {
                        var e, n;
                        e = r, t = o[n = t], n in e ? Object.defineProperty(e, n, {
                            value: t,
                            enumerable: !0,
                            configurable: !0,
                            writable: !0
                        }) : e[n] = t
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(r, Object.getOwnPropertyDescriptors(o)) : vt(Object(o)).forEach(function(t) {
                        Object.defineProperty(r, t, Object.getOwnPropertyDescriptor(o, t))
                    })
                }
                return r
            }
            var Et = s.EnvironmentUrls.websiteUrl,
                wt = L.ActionGenericSkip,
                St = L.ActionContinue,
                xt = L.DescriptionAddEmailTextOver13,
                Ct = L.DescriptionAddEmailTextUnder13,
                _t = L.HeadingAddEmail,
                At = L.LabelEmailInputPlaceholderOver13,
                Nt = L.LabelEmailInputPlaceholderUnder13,
                Tt = {
                    pageName: U.PENDING,
                    isEmailVerified: !1,
                    isEmailSent: !1,
                    isEmailUpdating: !1,
                    origin: "",
                    userEmail: "",
                    userEmailInput: "",
                    userEmailInputPlaceholder: At,
                    errorMsg: "",
                    titleText: _t,
                    bodyText: xt,
                    primaryButtonText: St,
                    secondaryButtonText: L.ActionChangeEmail,
                    daysUntilNextVerification: 0,
                    skipCallback: null,
                    pageState: null,
                    closeCallback: null,
                    callbackReady: !1
                },
                Ot = (0, E.createContext)(Tt);

            function kt(t, e) {
                var n = null;
                switch (e.type) {
                    case M:
                        return bt(bt({}, t), {}, {
                            userEmailInput: ""
                        });
                    case k:
                        return bt(bt({}, t), {}, {
                            origin: e.origin,
                            skipCallback: e.skipCallback
                        });
                    case C:
                        return bt(bt({}, t), {}, {
                            isEmailVerified: e.isEmailVerified,
                            userEmail: e.userEmail
                        });
                    case A:
                        return e.pageName === U.SUCCESS_OVERAGE ? n = {
                            heading: "Heading.ThankYou",
                            icon: "success-icon",
                            bodyText: ["Label.OverageVerification", "Label.VoiceChat"],
                            buttonStack: [{
                                type: "primary",
                                text: "Action.OK",
                                callback: function() {
                                    e.close()
                                }
                            }],
                            canClose: !1
                        } : e.pageName === U.SUCCESS_UNDERAGE ? n = {
                            heading: "Heading.ThankYou",
                            icon: "success-icon",
                            bodyText: ["Label.UnderageVerification", "Label.VoiceChat"],
                            footerText: "Label.ToggleFeatures",
                            buttonStack: [{
                                type: "primary",
                                text: "Action.Close",
                                callback: function() {
                                    e.close()
                                }
                            }],
                            canClose: !1
                        } : e.pageName === U.SUCCESS_GENERIC ? (ct(at.successPage, {
                            origin: t.origin
                        }), n = {
                            heading: "Heading.ThankYou",
                            icon: "success-icon",
                            bodyText: ["Label.GenericVerified"],
                            buttonStack: [{
                                type: "primary",
                                text: "Action.Close",
                                callback: function() {
                                    ct(at.successPageClose, {
                                        origin: t.origin
                                    }), e.close()
                                }
                            }],
                            canClose: !1
                        }) : e.pageName === U.EXTERNAL_EMAIL ? n = {
                            heading: "Heading.VerifyEmail",
                            icon: "shield-icon",
                            bodyText: ["Label.EmailSent"],
                            buttonStack: [{
                                type: "primary",
                                text: "Action.Continue",
                                callback: function() {
                                    e.dispatch({
                                        type: A,
                                        pageName: U.POLLING
                                    }), e.poll()
                                }
                            }],
                            userEmail: t.userEmail
                        } : e.pageName === U.EMAIL_CONTINUE ? n = {
                            heading: "Heading.VerificationPending",
                            icon: "shield-icon",
                            bodyText: ["Label.EmailSent"],
                            buttonStack: [{
                                type: "primary",
                                text: "Action.Continue",
                                callback: function() {
                                    e.dispatch({
                                        type: A,
                                        pageName: U.POLLING
                                    }), e.poll()
                                }
                            }],
                            userEmail: t.userEmail
                        } : e.pageName === U.POLLING ? n = bt({}, e) : e.pageName === U.PENDING ? n = {
                            heading: "Heading.VerificationPending",
                            icon: "failure-icon",
                            bodyText: ["Label.PendingVerification"],
                            buttonStack: [{
                                type: "primary",
                                text: "Action.Close",
                                callback: function() {
                                    e.close()
                                }
                            }],
                            canClose: !1
                        } : e.pageName === U.FAILURE ? (ct(at.failurePage, {
                            origin: t.origin
                        }), n = {
                            heading: "Heading.VerificationFailed",
                            icon: "failure-icon",
                            bodyText: [e.textKey || "Label.FailedVerification"],
                            errorState: !0,
                            buttonStack: [{
                                type: "primary",
                                text: "Action.Close",
                                callback: function() {
                                    ct(at.failurePageClose, {
                                        origin: t.origin
                                    }), e.close()
                                }
                            }],
                            canClose: !1
                        }) : e.pageName === U.LANDING ? n = {
                            heading: "Heading.VerifyAge",
                            icon: "shield-icon",
                            bodyText: ["Label.VoiceChatUpsell"],
                            buttonStack: [{
                                text: "Action.SkipVoiceChat",
                                callback: function() {
                                    e.dispatch({
                                        type: I
                                    })
                                }
                            }, {
                                type: "primary",
                                text: "Action.Continue",
                                callback: function() {
                                    e.continue()
                                }
                            }],
                            userEmail: t.userEmail,
                            displayCheckbox: !0
                        } : e.pageName === U.ERROR ? n = {
                            heading: "Heading.Error",
                            icon: "failure-icon",
                            bodyText: ["Label.GenericError"],
                            buttonStack: [{
                                type: "primary",
                                text: "Action.OK",
                                callback: function() {
                                    e.close()
                                }
                            }],
                            canClose: !1
                        } : e.pageName === U.TEMP_BAN ? (ct(at.tempBanPage, {
                            origin: t.origin
                        }), n = {
                            heading: "Heading.Error",
                            icon: "failure-icon",
                            bodyText: ["Label.VerificationDeclined"],
                            buttonStack: [{
                                type: "primary",
                                text: "Action.OK",
                                callback: function() {
                                    ct(at.tempBanPageClose, {
                                        origin: t.origin
                                    }), e.close()
                                }
                            }],
                            daysUntilNextVerification: e.daysUntilNextVerification,
                            canClose: !1
                        }) : e.pageName === U.VENDOR_LINK ? (e.useQRCode && ct(at.showQRCode, {
                            origin: t.origin
                        }), n = {
                            verificationLink: e.verificationLink,
                            useQRCode: e.useQRCode,
                            origin: t.origin
                        }) : e.pageName === U.BIRTHDAY_WARNING ? n = {
                            heading: "Heading.Warning",
                            bodyText: ["Label.BirthdayChangeWarning"],
                            buttonStack: [{
                                text: "Action.GoBack",
                                callback: function() {
                                    e.closeCallback(!1)
                                }
                            }, {
                                type: "primary",
                                text: "Action.Continue",
                                callback: function() {
                                    e.closeCallback(!0)
                                }
                            }],
                            canClose: !1,
                            thinLayout: !0
                        } : e.pageName === U.ENABLE_VOICE_CHAT && (n = {
                            communityStandardsUrl: S.urlService.resolveUrl(Et, "/info/community-guidelines"),
                            voiceFAQUrl: S.urlService.resolveUrl(Et, "/info/voice-faq"),
                            requireExplicitVoiceConsent: e.requireExplicitVoiceConsent,
                            voiceExpandedModalFlag: e.voiceExpandedModalFlag,
                            heading: "Heading.LetsChat",
                            enableVoiceChat: "Label.EnableVoiceChat1",
                            followCommunityStandards: "Label.FollowCommunityStandards",
                            implicitConsent: "Label.ImplicitConsentVoiceCollection",
                            explicitConsent: "Label.ConsentVoiceCollection",
                            learnMoreAboutVoiceRecording: "Label.LearnMoreAboutVoiceRecording",
                            buttonStack: [{
                                type: "secondary",
                                text: "Action.SkipVoiceChat",
                                callback: function() {
                                    yt(at.joinWithoutVoiceChat), e.close()
                                }
                            }, {
                                type: "primary",
                                text: "Label.EnableVoiceChat",
                                callback: function() {
                                    pt(!0, !0), e.close()
                                }
                            }]
                        }), bt(bt({}, t), {}, {
                            pageName: e.pageName,
                            pageState: n
                        });
                    case T:
                        return bt(bt({}, t), {}, {
                            errorMsg: e.errorMsg
                        });
                    case O:
                        return bt(bt({}, t), {}, {
                            isEmailUpdating: e.isEmailUpdating
                        });
                    case N:
                        return t.pageName === U.EMAIL ? bt(bt({}, t), {}, {
                            userEmailInput: e.value,
                            errorMsg: ""
                        }) : t;
                    case _:
                        if (t.pageName !== U.EMAIL) return t;
                        var r = s.CurrentUser && s.CurrentUser.is13orOver,
                            o = xt,
                            i = Ct,
                            a = _t,
                            u = "";
                        return t.skipCallback && (u = wt), bt(bt({}, t), {}, {
                            titleText: a,
                            bodyText: r ? o : i,
                            primaryButtonText: St,
                            secondaryButtonText: u,
                            errorMsg: "",
                            userEmailInputPlaceholder: r ? At : Nt
                        });
                    case R:
                        return bt(bt({}, t), {}, {
                            closeCallback: e.callback,
                            callbackReady: !0
                        });
                    case P:
                        return bt(bt({}, t), {}, {
                            callbackReady: !0
                        });
                    case I:
                        return t.callbackReady && (i = (o = t.pageName === U.SUCCESS_GENERIC || t.pageName === U.SUCCESS_OVERAGE) || t.pageName === U.SUCCESS_UNDERAGE, u = o, r = i, s.Hybrid && s.Hybrid.Navigation && s.Hybrid.Navigation.navigateToFeature({
                            feature: "close-veratad-modal-event",
                            overage: u,
                            verified: r
                        }), t.closeCallback && t.closeCallback(o, i)), bt({}, Tt);
                    default:
                        return t
                }
            }

            function Mt(t) {
                var e = t.children,
                    t = (n = mt((0, E.useReducer)(kt, Tt), 2))[0],
                    n = n[1];
                return w().createElement(Ot.Provider, {
                    value: {
                        idVerificationState: t,
                        dispatch: n
                    }
                }, e)
            }

            function Rt() {
                return (0, E.useContext)(Ot)
            }
            Mt.propTypes = {
                children: o().node.isRequired
            };
            var e = Se(133),
                Pt = Se.n(e);

            function It(t) {
                var e = t.onHide,
                    n = t.onPrimaryAction,
                    r = t.onSecondaryAction,
                    o = t.onInputChange,
                    i = t.onInputFocus,
                    a = t.onKeyDown,
                    u = t.translate,
                    s = Rt().idVerificationState,
                    l = s.pageName,
                    c = s.titleText,
                    f = s.bodyText,
                    d = s.primaryButtonText,
                    p = s.secondaryButtonText,
                    h = s.userEmailInput,
                    y = s.userEmailInputPlaceholder,
                    m = s.userEmail,
                    t = s.errorMsg,
                    s = s.isEmailUpdating;
                return w().createElement(w().Fragment, null, w().createElement(x().Header, null, w().createElement("div", {
                    className: "email-upsell-title-container"
                }, w().createElement("button", {
                    type: "button",
                    className: "email-upsell-title-button",
                    onClick: e
                }, w().createElement("span", {
                    className: "close icon-close"
                })), w().createElement(x().Title, {
                    id: "contained-modal-title-vcenter"
                }, u(c)))), w().createElement(x().Body, null, w().createElement("div", {
                    className: "email-upsell-image"
                }), w().createElement("p", {
                    className: "email-upsell-text-body"
                }, u(f, {
                    emailAddress: m
                })), l === U.EMAIL && w().createElement("input", {
                    type: "email",
                    autoFocus: !0,
                    className: "".concat(t ? "input-field-error" : "", " form-control input-field email-upsell-modal-input"),
                    placeholder: u(y),
                    value: h,
                    onFocus: function() {
                        return i()
                    },
                    onChange: function(t) {
                        return o(t.target.value)
                    },
                    onKeyDown: function(t) {
                        return a(t.key)
                    }
                }), t && w().createElement("p", {
                    className: "text-error modal-error-message"
                }, u(t))), w().createElement(x().Footer, null, w().createElement("div", {
                    className: "email-upsell-footer-container"
                }, l === U.EMAIL && w().createElement(Pt(), {
                    className: "modal-button btn-cta-md email-upsell-btn",
                    disabled: s,
                    onClick: n
                }, u(d)), p && w().createElement("button", {
                    type: "button",
                    className: "change-email-button",
                    onClick: r
                }, u(p)))))
            }
            It.propTypes = {
                translate: o().func.isRequired,
                onHide: o().func.isRequired,
                onPrimaryAction: o().func.isRequired,
                onSecondaryAction: o().func.isRequired,
                onInputChange: o().func.isRequired,
                onKeyDown: o().func.isRequired,
                onInputFocus: o().func.isRequired
            };
            var Lt = (0, i.withTranslations)(It, {
                common: [],
                feature: "Feature.VerificationUpsell"
            });

            function Ut(t, e) {
                return function(t) {
                    if (Array.isArray(t)) return t
                }(t) || function(t, e) {
                    if ("undefined" == typeof Symbol || !(Symbol.iterator in Object(t))) return;
                    var n = [],
                        r = !0,
                        o = !1,
                        i = void 0;
                    try {
                        for (var a, u = t[Symbol.iterator](); !(r = (a = u.next()).done) && (n.push(a.value), !e || n.length !== e); r = !0);
                    } catch (t) {
                        o = !0, i = t
                    } finally {
                        try {
                            r || null == u.return || u.return()
                        } finally {
                            if (o) throw i
                        }
                    }
                    return n
                }(t, e) || function(t, e) {
                    if (!t) return;
                    if ("string" == typeof t) return Bt(t, e);
                    var n = Object.prototype.toString.call(t).slice(8, -1);
                    "Object" === n && t.constructor && (n = t.constructor.name);
                    if ("Map" === n || "Set" === n) return Array.from(t);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return Bt(t, e)
                }(t, e) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function Bt(t, e) {
                (null == e || e > t.length) && (e = t.length);
                for (var n = 0, r = new Array(e); n < e; n++) r[n] = t[n];
                return r
            }

            function Dt(t) {
                var e = t.translate,
                    n = t.onHide,
                    r = t.heading,
                    o = t.icon,
                    i = t.bodyText,
                    a = t.errorState,
                    u = t.footerText,
                    s = t.userEmail,
                    l = t.daysUntilNextVerification,
                    c = t.canClose,
                    f = t.buttonStack,
                    d = t.includeLink,
                    p = t.displayCheckbox,
                    t = Ut((0, E.useState)(!1), 2),
                    h = t[0],
                    y = t[1];
                return w().createElement(w().Fragment, null, w().createElement(x().Header, null, w().createElement("div", {
                    className: "email-upsell-title-container"
                }, c && w().createElement("button", {
                    type: "button",
                    className: "email-upsell-title-button",
                    onClick: n
                }, w().createElement("span", {
                    className: "close icon-close"
                })), w().createElement(x().Title, {
                    id: "contained-modal-title-vcenter"
                }, e(r)))), w().createElement(x().Body, null, o && w().createElement("div", {
                    className: o
                }), w().createElement("ul", {
                    className: a ? "content-list error-text" : "content-list"
                }, d ? i.map(function(t) {
                    return w().createElement("li", {
                        dangerouslySetInnerHTML: {
                            __html: e(t, {
                                spanStart: "<a class='text-link' href='/info/privacy'>",
                                spanEnd: "</a>",
                                boldStart: "<b>",
                                boldEnd: "</b>"
                            })
                        }
                    })
                }) : i.map(function(t) {
                    return w().createElement("li", null, e(t, {
                        age: 18,
                        email: s,
                        days: l
                    }))
                })), p && w().createElement("div", {
                    className: "checkbox checkbox-container"
                }, w().createElement("input", {
                    id: "isShowOverlayChecked",
                    type: "checkbox",
                    checked: h,
                    onClick: function() {
                        y(!h), dt(h)
                    }
                }), w().createElement("label", {
                    htmlFor: "isShowOverlayChecked"
                }, e("Label.DontShowAgain")))), w().createElement(x().Footer, null, w().createElement("p", {
                    className: "small"
                }, w().createElement("b", null, u ? e(u) : "")), f.map(function(t) {
                    return w().createElement("span", null, w().createElement(Pt(), {
                        className: "primary" === t.type ? "btn-primary-md primary-link button-stack-button" : "btn-secondary-md secondary-link button-stack-button",
                        onClick: t.callback
                    }, e(t.text)))
                })))
            }
            Dt.defaultProps = {
                errorState: !1,
                footerText: null,
                userEmail: null,
                daysUntilNextVerification: 0,
                canClose: !0,
                includeLink: !1,
                displayCheckbox: !1
            }, Dt.propTypes = {
                translate: o().func.isRequired,
                onHide: o().func.isRequired,
                heading: o().string.isRequired,
                icon: o().string.isRequired,
                bodyText: o().arrayOf(o().string).isRequired,
                errorState: o().bool,
                footerText: o().string,
                userEmail: o().string,
                daysUntilNextVerification: o().number,
                canClose: o().bool,
                includeLink: o().bool,
                buttonStack: o().arrayOf(o().shape({
                    type: o().string,
                    text: o().string,
                    callback: o().func
                })).isRequired,
                displayCheckbox: o().bool
            };
            var jt = Dt;

            function Vt(t, e) {
                return function(t) {
                    if (Array.isArray(t)) return t
                }(t) || function(t, e) {
                    if ("undefined" == typeof Symbol || !(Symbol.iterator in Object(t))) return;
                    var n = [],
                        r = !0,
                        o = !1,
                        i = void 0;
                    try {
                        for (var a, u = t[Symbol.iterator](); !(r = (a = u.next()).done) && (n.push(a.value), !e || n.length !== e); r = !0);
                    } catch (t) {
                        o = !0, i = t
                    } finally {
                        try {
                            r || null == u.return || u.return()
                        } finally {
                            if (o) throw i
                        }
                    }
                    return n
                }(t, e) || function(t, e) {
                    if (!t) return;
                    if ("string" == typeof t) return Ft(t, e);
                    var n = Object.prototype.toString.call(t).slice(8, -1);
                    "Object" === n && t.constructor && (n = t.constructor.name);
                    if ("Map" === n || "Set" === n) return Array.from(t);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return Ft(t, e)
                }(t, e) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function Ft(t, e) {
                (null == e || e > t.length) && (e = t.length);
                for (var n = 0, r = new Array(e); n < e; n++) r[n] = t[n];
                return r
            }
            var Ht = function(e, t, n, r, o, i) {
                    var a = Vt((0, E.useState)(!o), 2),
                        u = a[0],
                        s = a[1];
                    return [w().createElement("div", {
                        className: "checkbox checkbox-container"
                    }, o ? w().createElement(w().Fragment, null, w().createElement("input", {
                        type: "checkbox",
                        checked: u,
                        onClick: function() {
                            s(!u), dt(u)
                        },
                        id: "isShowOverlayChecked"
                    }), w().createElement("label", {
                        htmlFor: "isShowOverlayChecked",
                        className: "voice-modal-checkbox-label"
                    }, e(r, {
                        linkStart: "",
                        linkEnd: ""
                    }))) : w().createElement("span", null, e(n, {
                        linkStart: "",
                        linkEnd: ""
                    }))), t.map(function(t) {
                        return w().createElement("span", {
                            key: t.text
                        }, w().createElement(Pt(), {
                            className: "primary" === t.type ? "btn-primary-md primary-link button-stack-button" : "btn-secondary-md secondary-link button-stack-button",
                            disabled: o && "primary" === t.type && !u,
                            onClick: t.callback
                        }, e(t.text)))
                    })]
                },
                e = Se(774),
                qt = Se.n(e),
                e = Se(1408),
                zt = Se.n(e);

            function Gt(t, e) {
                return function(t) {
                    if (Array.isArray(t)) return t
                }(t) || function(t, e) {
                    if ("undefined" == typeof Symbol || !(Symbol.iterator in Object(t))) return;
                    var n = [],
                        r = !0,
                        o = !1,
                        i = void 0;
                    try {
                        for (var a, u = t[Symbol.iterator](); !(r = (a = u.next()).done) && (n.push(a.value), !e || n.length !== e); r = !0);
                    } catch (t) {
                        o = !0, i = t
                    } finally {
                        try {
                            r || null == u.return || u.return()
                        } finally {
                            if (o) throw i
                        }
                    }
                    return n
                }(t, e) || function(t, e) {
                    if (!t) return;
                    if ("string" == typeof t) return Wt(t, e);
                    var n = Object.prototype.toString.call(t).slice(8, -1);
                    "Object" === n && t.constructor && (n = t.constructor.name);
                    if ("Map" === n || "Set" === n) return Array.from(t);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return Wt(t, e)
                }(t, e) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function Wt(t, e) {
                (null == e || e > t.length) && (e = t.length);
                for (var n = 0, r = new Array(e); n < e; n++) r[n] = t[n];
                return r
            }

            function Kt(t) {
                var e = t.translate,
                    n = (t.onHide, t.heading),
                    r = t.icon,
                    o = t.buttonStack,
                    i = t.implicitConsent,
                    a = t.explicitConsent,
                    u = t.enableVoiceChat,
                    s = t.followCommunityStandards,
                    l = t.requireExplicitVoiceConsent,
                    c = t.learnMoreAboutVoiceRecording,
                    f = t.communityStandardsUrl,
                    t = t.voiceFAQUrl,
                    a = Gt(Ht(e, o, i, a, l, f, t), 2),
                    l = a[0],
                    a = a[1];
                return (0, E.useEffect)(function() {
                    yt(at.showEnableVoiceChatModal), ht()
                }, []), (0, E.useEffect)(function() {
                    document.querySelector(".email-upsell-modal").addEventListener("keydown", function(t) {
                        "Escape" === t.key && yt(at.closeEnableVoiceChatModal)
                    })
                }, []), w().createElement(w().Fragment, null, w().createElement(x().Header, null, w().createElement("div", {
                    className: "email-upsell-title-container"
                }, w().createElement(x().Title, {
                    id: "contained-modal-title-vcenter"
                }, e(n)))), w().createElement(x().Body, null, r && w().createElement("div", {
                    className: r
                }), w().createElement("div", null, w().createElement("div", {
                    className: "legal-enable-page-row"
                }, w().createElement("img", {
                    width: 60,
                    height: 60,
                    src: zt(),
                    alt: ""
                }), w().createElement("p", {
                    className: "legal-enable-page-row-label"
                }, e(u))), w().createElement("div", {
                    className: "legal-enable-page-row"
                }, w().createElement("img", {
                    width: 60,
                    height: 60,
                    src: qt(),
                    alt: ""
                }), w().createElement("p", {
                    className: "legal-enable-page-row-label",
                    dangerouslySetInnerHTML: {
                        __html: e(s, {
                            linkStart: '<a class="text-name" target="_blank" rel="noreferrer" href='.concat(f, ">"),
                            linkEnd: "</a>"
                        })
                    }
                }))), l), w().createElement(x().Footer, null, a), w().createElement("div", {
                    className: "text-footer legal-enable-page-text-footer border-top"
                }, w().createElement("span", null, w().createElement("div", {
                    className: "icon-moreinfo"
                }), w().createElement("a", {
                    className: "text-link legal-enable-page-text-footer-link",
                    target: "_blank",
                    rel: "noreferrer",
                    href: t
                }, e(c) || "Learn More about Voice Recording"))))
            }

            function Yt() {
                var t = {
                    retryable: !0,
                    withCredentials: !0,
                    url: "".concat(p, "/v1/email/verify")
                };
                return S.httpService.post(t).then(function() {
                    return !0
                }, function() {
                    return !1
                })
            }
            Kt.propTypes = {
                translate: o().func.isRequired,
                onHide: o().func.isRequired,
                heading: o().string.isRequired,
                icon: o().string.isRequired,
                enableVoiceChat: o().string.isRequired,
                followCommunityStandards: o().string.isRequired,
                buttonStack: o().arrayOf(o().shape({
                    type: o().string,
                    text: o().string,
                    callback: o().func
                })).isRequired,
                implicitConsent: o().string.isRequired,
                explicitConsent: o().string.isRequired,
                requireExplicitVoiceConsent: o().bool.isRequired,
                learnMoreAboutVoiceRecording: o().string.isRequired,
                communityStandardsUrl: o().string.isRequired,
                voiceFAQUrl: o().string.isRequired
            };
            var $t = Kt,
                Qt = Se(9640);

            function Jt(t, e, n, r, o, i, a) {
                try {
                    var u = t[i](a),
                        s = u.value
                } catch (t) {
                    return void n(t)
                }
                u.done ? e(s) : Promise.resolve(s).then(r, o)
            }

            function Xt(t, e) {
                return function(t) {
                    if (Array.isArray(t)) return t
                }(t) || function(t, e) {
                    if ("undefined" == typeof Symbol || !(Symbol.iterator in Object(t))) return;
                    var n = [],
                        r = !0,
                        o = !1,
                        i = void 0;
                    try {
                        for (var a, u = t[Symbol.iterator](); !(r = (a = u.next()).done) && (n.push(a.value), !e || n.length !== e); r = !0);
                    } catch (t) {
                        o = !0, i = t
                    } finally {
                        try {
                            r || null == u.return || u.return()
                        } finally {
                            if (o) throw i
                        }
                    }
                    return n
                }(t, e) || function(t, e) {
                    if (!t) return;
                    if ("string" == typeof t) return Zt(t, e);
                    var n = Object.prototype.toString.call(t).slice(8, -1);
                    "Object" === n && t.constructor && (n = t.constructor.name);
                    if ("Map" === n || "Set" === n) return Array.from(t);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return Zt(t, e)
                }(t, e) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function Zt(t, e) {
                (null == e || e > t.length) && (e = t.length);
                for (var n = 0, r = new Array(e); n < e; n++) r[n] = t[n];
                return r
            }

            function te(t) {
                var e = t.translate,
                    n = t.onHide,
                    r = t.verificationLink,
                    o = t.useQRCode,
                    i = t.origin,
                    a = Xt((0, E.useState)(), 2),
                    u = a[0],
                    s = a[1],
                    t = Xt((0, E.useState)(!1), 2),
                    a = t[0],
                    l = t[1];
                (0, E.useEffect)(function() {
                    function t() {
                        var u;
                        return u = regeneratorRuntime.mark(function t() {
                            var e;
                            return regeneratorRuntime.wrap(function(t) {
                                for (;;) switch (t.prev = t.next) {
                                    case 0:
                                        return t.prev = 0, t.next = 3, Qt.hz(r, {
                                            errorCorrectionLevel: "H"
                                        });
                                    case 3:
                                        e = t.sent, s(e), t.next = 10;
                                        break;
                                    case 7:
                                        throw t.prev = 7, t.t0 = t.catch(0), new Error(t.t0);
                                    case 10:
                                        return t.prev = 10, l(o && e), t.finish(10);
                                    case 13:
                                    case "end":
                                        return t.stop()
                                }
                            }, t, null, [
                                [0, 7, 10, 13]
                            ])
                        }), (t = function() {
                            var t = this,
                                a = arguments;
                            return new Promise(function(e, n) {
                                var r = u.apply(t, a);

                                function o(t) {
                                    Jt(r, e, n, o, i, "next", t)
                                }

                                function i(t) {
                                    Jt(r, e, n, o, i, "throw", t)
                                }
                                o(void 0)
                            })
                        }).apply(this, arguments)
                    }! function() {
                        t.apply(this, arguments)
                    }()
                }, [o, r]);
                return w().createElement(w().Fragment, null, w().createElement(x().Header, null, w().createElement("div", {
                    className: "email-upsell-title-container"
                }, w().createElement("button", {
                    type: "button",
                    className: "email-upsell-title-button",
                    onClick: n
                }, w().createElement("span", {
                    className: "close icon-close"
                })), w().createElement(x().Title, {
                    id: "contained-modal-title-vcenter"
                }, e("Heading.IdentityVerification")))), w().createElement(x().Body, {
                    className: "verification-link-page-content"
                }, w().createElement("div", {
                    className: "verification-link-upsell"
                }, e("Label.AgeVerifyPrompt")), w().createElement("div", {
                    className: "preparation-list-wrapper"
                }, w().createElement("div", {
                    className: "preparation-list-item"
                }, w().createElement("span", {
                    className: "icon-menu-document"
                }), w().createElement("div", {
                    className: "preparation-list-text"
                }, w().createElement("div", {
                    className: "preparation-title"
                }, e("Label.PrepareId")), w().createElement("div", {
                    className: "preparation-text"
                }, e("Label.ValidIdList")))), a && w().createElement("div", {
                    className: "preparation-list-item"
                }, w().createElement("span", {
                    className: "icon-menu-mobile"
                }), w().createElement("div", {
                    className: "preparation-list-text"
                }, w().createElement("div", {
                    className: "preparation-title"
                }, e("Label.UseSmartphone")), w().createElement("div", {
                    className: "preparation-text"
                }, e("Label.SmartphoneRequired"))))), a && w().createElement("div", null, w().createElement("div", {
                    className: "verification-link-upsell"
                }, e("Label.ScanQRCode")), w().createElement("div", {
                    className: "qr-code-wrapper"
                }, w().createElement("img", {
                    className: "qr-code-img",
                    src: u,
                    alt: "qr"
                }))), w().createElement("p", {
                    className: "verification-link-legal",
                    dangerouslySetInnerHTML: {
                        __html: e("Label.PrivacyNoticeAndLink", {
                            spanStart: "<a class='text-link' href='https://en.help.roblox.com/hc/en-us/articles/4412863575316'>",
                            spanEnd: "</a>"
                        })
                    }
                }), !a && w().createElement("a", {
                    href: r,
                    onClick: function() {
                        ct(at.verificationLinkClicked, {
                            origin: i
                        })
                    },
                    target: "_blank",
                    rel: "noreferrer"
                }, w().createElement(Pt(), {
                    className: "btn-primary-md primary-link btn-full-width"
                }, e("Action.StartSession")))))
            }
            te.propTypes = {
                translate: o().func.isRequired,
                onHide: o().func.isRequired,
                verificationLink: o().string.isRequired,
                useQRCode: o().bool.isRequired,
                origin: o().string.isRequired
            };
            var ee = te;

            function ne(t, e, n, r, o, i, a) {
                try {
                    var u = t[i](a),
                        s = u.value
                } catch (t) {
                    return void n(t)
                }
                u.done ? e(s) : Promise.resolve(s).then(r, o)
            }

            function re(t, e) {
                return function(t) {
                    if (Array.isArray(t)) return t
                }(t) || function(t, e) {
                    if ("undefined" == typeof Symbol || !(Symbol.iterator in Object(t))) return;
                    var n = [],
                        r = !0,
                        o = !1,
                        i = void 0;
                    try {
                        for (var a, u = t[Symbol.iterator](); !(r = (a = u.next()).done) && (n.push(a.value), !e || n.length !== e); r = !0);
                    } catch (t) {
                        o = !0, i = t
                    } finally {
                        try {
                            r || null == u.return || u.return()
                        } finally {
                            if (o) throw i
                        }
                    }
                    return n
                }(t, e) || function(t, e) {
                    if (!t) return;
                    if ("string" == typeof t) return oe(t, e);
                    var n = Object.prototype.toString.call(t).slice(8, -1);
                    "Object" === n && t.constructor && (n = t.constructor.name);
                    if ("Map" === n || "Set" === n) return Array.from(t);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return oe(t, e)
                }(t, e) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function oe(t, e) {
                (null == e || e > t.length) && (e = t.length);
                for (var n = 0, r = new Array(e); n < e; n++) r[n] = t[n];
                return r
            }

            function ie(t) {
                var n = t.translate,
                    e = t.onHide,
                    r = t.verificationLink,
                    o = t.useQRCode,
                    i = t.checklistStep,
                    a = t.origin,
                    u = re((0, E.useState)(), 2),
                    s = u[0],
                    l = u[1],
                    t = re((0, E.useState)(!1), 2),
                    u = t[0],
                    c = t[1];
                (0, E.useEffect)(function() {
                    function t() {
                        var u;
                        return u = regeneratorRuntime.mark(function t() {
                            var e;
                            return regeneratorRuntime.wrap(function(t) {
                                for (;;) switch (t.prev = t.next) {
                                    case 0:
                                        return t.prev = 0, t.next = 3, Qt.hz(r, {
                                            errorCorrectionLevel: "H"
                                        });
                                    case 3:
                                        e = t.sent, l(e), t.next = 10;
                                        break;
                                    case 7:
                                        throw t.prev = 7, t.t0 = t.catch(0), new Error(t.t0);
                                    case 10:
                                        return t.prev = 10, c(o && e), t.finish(10);
                                    case 13:
                                    case "end":
                                        return t.stop()
                                }
                            }, t, null, [
                                [0, 7, 10, 13]
                            ])
                        }), (t = function() {
                            var t = this,
                                a = arguments;
                            return new Promise(function(e, n) {
                                var r = u.apply(t, a);

                                function o(t) {
                                    ne(r, e, n, o, i, "next", t)
                                }

                                function i(t) {
                                    ne(r, e, n, o, i, "throw", t)
                                }
                                o(void 0)
                            })
                        }).apply(this, arguments)
                    }! function() {
                        t.apply(this, arguments)
                    }()
                }, [o, r]);
                return w().createElement(w().Fragment, null, w().createElement(x().Header, null, w().createElement("div", {
                    className: "email-upsell-title-container"
                }, w().createElement("button", {
                    type: "button",
                    className: "email-upsell-title-button",
                    onClick: e
                }, w().createElement("span", {
                    className: "close icon-close"
                })), w().createElement(x().Title, {
                    id: "contained-modal-title-vcenter"
                }, n("Heading.IdentityVerification")))), w().createElement(x().Body, {
                    className: "verification-checklist-page-content"
                }, w().createElement("div", {
                    className: "cta"
                }, n(i === Z || i === tt ? "Label.VerifyInBrowser" : "Label.VerificationDataSubmitted")), w().createElement("ul", {
                    className: "checklist-wrapper"
                }, ["Label.ConnectingToMobile", "Label.VerifyingYou", "Label.VerificationWaitingForResults", "Label.UpdatingRoblox"].map(function(t, e) {
                    return e <= i ? w().createElement("li", {
                        className: "checklist-item"
                    }, w().createElement("span", {
                        className: "check-wrapper"
                    }, w().createElement("span", {
                        className: e === i ? "spinner spinner-sm" : "icon-checkmark"
                    })), w().createElement("span", {
                        className: "checklist-text"
                    }, n(t))) : null
                })), u && w().createElement("div", {
                    className: "verification-link-page-content"
                }, w().createElement("div", {
                    className: "qr-code-wrapper"
                }, w().createElement("img", {
                    className: "qr-code-img",
                    src: s,
                    alt: "qr"
                })), w().createElement("div", {
                    className: "footer-text"
                }, n("Label.HavingTroubleScanCode"))), !u && w().createElement("a", {
                    href: r,
                    onClick: function() {
                        ct(at.verificationLinkClicked, {
                            origin: a
                        })
                    },
                    target: "_blank",
                    rel: "noreferrer"
                }, w().createElement(Pt(), {
                    className: "btn-primary-md primary-link btn-full-width"
                }, n("Action.RestartSession"))), w().createElement("div", {
                    className: "footer-text"
                }, n("Label.PleaseDoNotClose"))))
            }
            ie.propTypes = {
                translate: o().func.isRequired,
                onHide: o().func.isRequired,
                verificationLink: o().string.isRequired,
                useQRCode: o().bool.isRequired,
                checklistStep: o().number.isRequired,
                origin: o().string.isRequired
            };
            var ae = ie;

            function ue() {
                return (ue = Object.assign || function(t) {
                    for (var e = 1; e < arguments.length; e++) {
                        var n, r = arguments[e];
                        for (n in r) Object.prototype.hasOwnProperty.call(r, n) && (t[n] = r[n])
                    }
                    return t
                }).apply(this, arguments)
            }

            function se(t, e, n, r, o, i, a) {
                try {
                    var u = t[i](a),
                        s = u.value
                } catch (t) {
                    return void n(t)
                }
                u.done ? e(s) : Promise.resolve(s).then(r, o)
            }

            function le(u) {
                return function() {
                    var t = this,
                        a = arguments;
                    return new Promise(function(e, n) {
                        var r = u.apply(t, a);

                        function o(t) {
                            se(r, e, n, o, i, "next", t)
                        }

                        function i(t) {
                            se(r, e, n, o, i, "throw", t)
                        }
                        o(void 0)
                    })
                }
            }

            function ce(t, e) {
                return function(t) {
                    if (Array.isArray(t)) return t
                }(t) || function(t, e) {
                    if ("undefined" == typeof Symbol || !(Symbol.iterator in Object(t))) return;
                    var n = [],
                        r = !0,
                        o = !1,
                        i = void 0;
                    try {
                        for (var a, u = t[Symbol.iterator](); !(r = (a = u.next()).done) && (n.push(a.value), !e || n.length !== e); r = !0);
                    } catch (t) {
                        o = !0, i = t
                    } finally {
                        try {
                            r || null == u.return || u.return()
                        } finally {
                            if (o) throw i
                        }
                    }
                    return n
                }(t, e) || function(t, e) {
                    if (!t) return;
                    if ("string" == typeof t) return fe(t, e);
                    var n = Object.prototype.toString.call(t).slice(8, -1);
                    "Object" === n && t.constructor && (n = t.constructor.name);
                    if ("Map" === n || "Set" === n) return Array.from(t);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return fe(t, e)
                }(t, e) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function fe(t, e) {
                (null == e || e > t.length) && (e = t.length);
                for (var n = 0, r = new Array(e); n < e; n++) r[n] = t[n];
                return r
            }
            var de = (e = !!s.DeviceMeta && (0, s.DeviceMeta)()).isAndroidApp,
                pe = e.isDesktop,
                he = L.MessageConfirmationEmailNotSent,
                ye = L.MessageInvalidEmailAddress;

            function me(t) {
                var e = t.translate,
                    p = t.entry,
                    r = t.vendor,
                    n = Rt(),
                    o = n.idVerificationState,
                    h = n.dispatch,
                    i = o.pageName,
                    a = o.pageState,
                    t = ce((0, E.useState)(!1), 2),
                    u = t[0],
                    s = t[1],
                    n = ce((0, E.useState)(!1), 2),
                    t = n[0],
                    l = n[1],
                    y = (0, E.useRef)("");

                function m() {
                    h({
                        type: I
                    }), l(!1), y.current = "", p === B && i === U.SUCCESS_GENERIC && document.location.reload()
                }

                function c() {
                    ct(at.exitIdentityVerification, {
                        origin: p
                    }), m()
                }

                function f(t) {
                    if (null != t && t.isVerified && null != t && t.verifiedAge) {
                        try {
                            dt(!0)
                        } catch (t) {
                            console.log(t)
                        }
                        p === B ? h({
                            type: A,
                            pageName: U.SUCCESS_GENERIC,
                            dispatch: h,
                            close: function() {
                                m()
                            }
                        }) : 18 <= t.verifiedAge ? h({
                            type: A,
                            pageName: U.SUCCESS_OVERAGE,
                            dispatch: h,
                            close: function() {
                                h({
                                    type: A,
                                    pageName: U.ENABLE_VOICE_CHAT,
                                    dispatch: h,
                                    close: function() {
                                        m()
                                    }
                                })
                            }
                        }) : h({
                            type: A,
                            pageName: U.SUCCESS_UNDERAGE,
                            dispatch: h,
                            close: function() {
                                m()
                            }
                        })
                    } else h({
                        type: A,
                        pageName: U.FAILURE,
                        dispatch: h,
                        close: function() {
                            m()
                        }
                    })
                }
                var d = function() {
                    var t = le(regeneratorRuntime.mark(function t() {
                        var e, n;
                        return regeneratorRuntime.wrap(function(t) {
                            for (;;) switch (t.prev = t.next) {
                                case 0:
                                    t.t0 = r, t.next = (t.t0, 3);
                                    break;
                                case 3:
                                    return t.next = 5, ut(!0);
                                case 5:
                                    return n = t.sent, t.abrupt("break", 7);
                                case 7:
                                    s(!1), n && n.verificationLink && n.sessionIdentifier ? (ct(at.showModal, {
                                        origin: p
                                    }), h({
                                        type: A,
                                        pageName: U.VENDOR_LINK,
                                        verificationLink: n.verificationLink,
                                        useQRCode: pe,
                                        dispatch: h
                                    }), function(s, l) {
                                        var c = Number(new Date) + 18e5,
                                            f = V;

                                        function d(t, e) {
                                            return n.apply(this, arguments)
                                        }

                                        function n() {
                                            return (n = le(regeneratorRuntime.mark(function t(e, n) {
                                                var r, o, i, a, u;
                                                return regeneratorRuntime.wrap(function(t) {
                                                    for (;;) switch (t.prev = t.next) {
                                                        case 0:
                                                            return t.next = 2, lt(s).catch(function() {
                                                                return {
                                                                    sessionStatus: f
                                                                }
                                                            });
                                                        case 2:
                                                            if (r = t.sent, o = r.sessionStatus, a = i = null, !o || o === f) {
                                                                t.next = 39;
                                                                break
                                                            }
                                                            f = o, u = Z, t.t0 = o, t.next = t.t0 === z || t.t0 === H ? 12 : t.t0 === q ? 25 : t.t0 === K ? 27 : t.t0 === G ? 29 : t.t0 === W ? 32 : t.t0 === F ? 35 : (t.t0, 37);
                                                            break;
                                                        case 12:
                                                            i = U.FAILURE, t.t1 = r.sessionErrorCode, t.next = t.t1 === Y || t.t1 === Q ? 16 : t.t1 === J || t.t1 === $ ? 18 : t.t1 === X ? 20 : 22;
                                                            break;
                                                        case 16:
                                                            return a = "Label.FailedVerificationInvalidDocument", t.abrupt("break", 24);
                                                        case 18:
                                                            return a = "Label.FailedVerificationLowQuality", t.abrupt("break", 24);
                                                        case 20:
                                                            return a = "Label.FailedVerificationUnsupportedDocument", t.abrupt("break", 24);
                                                        case 22:
                                                            return a = "Label.FailedVerification", t.abrupt("break", 24);
                                                        case 24:
                                                            return t.abrupt("break", 38);
                                                        case 25:
                                                            return i = U.PENDING, t.abrupt("break", 38);
                                                        case 27:
                                                            return i = U.SUCCESS_GENERIC, t.abrupt("break", 38);
                                                        case 29:
                                                            return ct(at.verificationInProgress, {
                                                                origin: p
                                                            }), u = tt, t.abrupt("break", 38);
                                                        case 32:
                                                            return ct(at.verificationPending, {
                                                                origin: p
                                                            }), u = et, t.abrupt("break", 38);
                                                        case 35:
                                                            return u = nt, t.abrupt("break", 38);
                                                        case 37:
                                                            return t.abrupt("break", 38);
                                                        case 38:
                                                            f !== V && h({
                                                                type: A,
                                                                pageName: U.POLLING,
                                                                origin: p,
                                                                verificationLink: l,
                                                                useQRCode: pe,
                                                                checklistStep: u,
                                                                dispatch: h
                                                            });
                                                        case 39:
                                                            y.current !== s ? e(!1) : i ? (h({
                                                                type: A,
                                                                pageName: i,
                                                                textKey: a,
                                                                dispatch: h,
                                                                close: function() {
                                                                    m()
                                                                }
                                                            }), e(f)) : Number(new Date) < c ? setTimeout(d, 15e3, e, n) : (h({
                                                                type: A,
                                                                pageName: U.FAILURE,
                                                                textKey: "Label.SessionTimeout",
                                                                dispatch: h,
                                                                close: function() {
                                                                    m()
                                                                }
                                                            }), e(!1));
                                                        case 40:
                                                        case "end":
                                                            return t.stop()
                                                    }
                                                }, t)
                                            }))).apply(this, arguments)
                                        }
                                        y.current = s, new Promise(d)
                                    }(n.sessionIdentifier, n.verificationLink)) : 0 < (null === (e = n) || void 0 === e ? void 0 : e.daysUntilNextVerification) ? h({
                                        type: A,
                                        pageName: U.TEMP_BAN,
                                        daysUntilNextVerification: n.daysUntilNextVerification,
                                        dispatch: h,
                                        close: function() {
                                            m()
                                        }
                                    }) : h({
                                        type: A,
                                        pageName: U.ERROR,
                                        dispatch: h,
                                        close: function() {
                                            m()
                                        }
                                    }), l(!0);
                                case 10:
                                case "end":
                                    return t.stop()
                            }
                        }, t)
                    }));
                    return function() {
                        return t.apply(this, arguments)
                    }
                }();

                function g() {
                    var t, e;
                    o.pageName === U.EMAIL ? (e = o.userEmailInput, /\S+@\S+\.\S+/.test(e) ? (ct(at.addEmailConfirm, {
                        origin: p
                    }), h({
                        type: O,
                        isEmailUpdating: !0
                    }), t = {
                        emailAddress: o.userEmailInput
                    }, e = b(), S.httpService.post(e, t).then(function() {
                        return !0
                    }, function(t) {
                        return t.data.errors && t.data.errors[0].code
                    }).then(function(t) {
                        t === L.InvalidEmailCode ? (h({
                            type: T,
                            errorMsg: ye
                        }), h({
                            type: O,
                            isEmailUpdating: !1
                        })) : (t = b(), S.httpService.get(t).then(function(t) {
                            t = t.data;
                            return null == t ? void 0 : t.emailAddress
                        }, function() {
                            return !1
                        }).then(function(t) {
                            t ? (h({
                                type: C,
                                isEmailVerified: !1,
                                userEmail: t
                            }), Yt(), h({
                                type: M
                            }), h({
                                type: O,
                                isEmailUpdating: !1
                            }), s(!0)) : h({
                                type: T,
                                errorMsg: he
                            })
                        }))
                    }), h({
                        type: _
                    })) : h({
                        type: T,
                        errorMsg: ye
                    })) : m()
                }

                function v() {
                    var t;
                    t = b(), S.httpService.get(t).then(function(t) {
                        return t.data
                    }, function() {
                        return !1
                    }).then(function(t) {
                        t && (h({
                            type: k,
                            origin: p,
                            skipCallback: !1
                        }), h({
                            type: C,
                            isEmailVerified: t.isEmailVerified,
                            userEmail: t.emailAddress
                        }), t.emailAddress ? s(!0) : (ct(at.showAddEmailModal, {
                            origin: p
                        }), h({
                            type: A,
                            pageName: U.EMAIL,
                            dispatch: h
                        }), h({
                            type: _
                        }), l(!0)))
                    }, function() {
                        h({
                            type: A,
                            pageName: U.ERROR,
                            dispatch: h,
                            close: function() {
                                m()
                            }
                        }), h({
                            type: _
                        }), l(!0)
                    })
                }(0, E.useEffect)(function() {
                    u && d()
                }, [u]), (0, E.useEffect)(function() {
                    h({
                        type: k,
                        origin: p,
                        skipCallback: !1
                    }), window.addEventListener(it, function(t) {
                        h({
                            type: R,
                            callback: t.detail.successCallback
                        }), st().then(function(t) {
                            null != t && t.isVerified ? (l(!0), f(t)) : p === j ? (l(!0), h({
                                type: A,
                                pageName: U.LANDING,
                                dispatch: h,
                                continue: function() {
                                    v()
                                }
                            })) : v()
                        })
                    }, !1), window.addEventListener(ot, function(e) {
                        h({
                            type: A,
                            pageName: U.BIRTHDAY_WARNING,
                            dispatch: h,
                            closeCallback: function(t) {
                                e.detail.closeCallback(t), m()
                            }
                        }), l(!0)
                    }), window.addEventListener(rt, function(t) {
                        var e = t.detail.requireExplicitVoiceConsent;
                        l(!0), h({
                            type: A,
                            pageName: U.ENABLE_VOICE_CHAT,
                            requireExplicitVoiceConsent: e,
                            dispatch: h,
                            close: function() {
                                t.detail.closeCallback(!0), m()
                            }
                        })
                    }), p === D && (h({
                        type: P
                    }), st().then(function(t) {
                        null != t && t.isVerified ? (l(!0), f(t)) : v()
                    }, function() {
                        h({
                            type: A,
                            pageName: U.ERROR,
                            dispatch: h,
                            close: function() {
                                m()
                            }
                        }), l(!0)
                    }))
                }, []);
                n = null;
                return a && (n = i === U.VENDOR_LINK ? w().createElement(ee, ue({}, a, {
                    onHide: c,
                    translate: e
                })) : i === U.POLLING ? w().createElement(ae, ue({}, a, {
                    onHide: c,
                    translate: e
                })) : i === U.ENABLE_VOICE_CHAT ? w().createElement($t, ue({}, a, {
                    onHide: function() {
                        yt(at.closeEnableVoiceChatModal), c()
                    },
                    translate: e
                })) : w().createElement(jt, ue({}, a, {
                    onHide: c,
                    translate: e
                }))), w().createElement("div", null, w().createElement(x(), {
                    show: t,
                    onHide: function() {
                        c()
                    },
                    backdrop: "static",
                    className: "".concat(de ? "email-upsell-android-modal" : "", " email-upsell-modal"),
                    size: "lg",
                    "aria-labelledby": "contained-modal-title-vcenter",
                    scrollable: "true",
                    centered: "true"
                }, i === U.EMAIL ? w().createElement(Lt, {
                    onHide: function() {
                        c()
                    },
                    onPrimaryAction: g,
                    onSecondaryAction: function() {
                        o.pageName === U.EMAIL && (o.skipCallback && o.skipCallback(), h({
                            type: M
                        }), l(!1))
                    },
                    onInputFocus: function() {
                        ct(at.useAddEmailField, {
                            origin: p
                        })
                    },
                    onInputChange: function(t) {
                        h({
                            type: N,
                            pageName: U.EMAIL,
                            value: t
                        })
                    },
                    onKeyDown: function(t) {
                        return t === L.Enter && g()
                    }
                }) : n))
            }
            me.propTypes = {
                translate: o().func.isRequired,
                entry: o().string.isRequired,
                vendor: o().string.isRequired
            };
            var ge = me;

            function ve(t) {
                var e = t.translate,
                    n = t.entry,
                    t = t.vendor;
                return w().createElement(Mt, null, w().createElement(ge, {
                    translate: e,
                    entry: n,
                    vendor: t
                }))
            }

            function be() {
                var t = {
                    retryable: !0,
                    withCredentials: !0,
                    url: "".concat(h, "/v1/metadata")
                };
                return S.httpService.get(t).then(function(t) {
                    t = t.data;
                    return null == t ? void 0 : t.isIDVerificationEnabled
                }, function() {
                    return !1
                })
            }
            ve.defaultProps = {
                entry: j,
                vendor: u
            }, ve.propTypes = {
                translate: o().func.isRequired,
                entry: o().string,
                vendor: o().string
            };
            var Ee = (0, i.withTranslations)(ve, {
                common: ["CommonUI.Controls"],
                feature: "Verification.Identity"
            });

            function we() {
                var t, e = document.getElementById(r);
                e ? null !== (t = e.getAttribute("entry")) ? (0, n.render)(w().createElement(Ee, {
                    entry: t
                }), e) : (0, n.render)(w().createElement(Ee, null), e) : window.requestAnimationFrame(we)
            }
            t().IdentityVerificationService = {
                getVerificationStatus: lt,
                getVerifiedAge: st,
                startVerificationFlow: function() {
                    return new Promise(function(n) {
                        var t = new CustomEvent(it, {
                            detail: {
                                successCallback: function(t, e) {
                                    n([t, e])
                                }
                            }
                        });
                        window.dispatchEvent(t)
                    })
                },
                sendIdVerificationEvent: ct,
                showBirthdayChangeWarning: function() {
                    return new Promise(function(e) {
                        var t = new CustomEvent(ot, {
                            detail: {
                                closeCallback: function(t) {
                                    e(t)
                                }
                            }
                        });
                        window.dispatchEvent(t)
                    })
                },
                showVoiceOptInOverlay: function(n) {
                    return new Promise(function(e) {
                        var t = new CustomEvent(rt, {
                            detail: {
                                closeCallback: function(t) {
                                    e(t)
                                },
                                requireExplicitVoiceConsent: n
                            }
                        });
                        window.dispatchEvent(t)
                    })
                }
            }, (0, S.ready)(function() {
                r && be().then(function(t) {
                    t && we()
                }, function() {
                    we()
                })
            })
        }()
}();
//# sourceMappingURL=https://js.rbxcdn.com/ad810f1ad64d9a8eb628-idVerification.bundle.min.js.map

/* Bundle detector */
window.Roblox && window.Roblox.BundleDetector && window.Roblox.BundleDetector.bundleDetected("IdVerification");