! function(r) {
    var n = {};

    function o(e) {
        if (n[e]) return n[e].exports;
        var t = n[e] = {
            i: e,
            l: !1,
            exports: {}
        };
        return r[e].call(t.exports, t, t.exports, o), t.l = !0, t.exports
    }
    o.m = r, o.c = n, o.d = function(e, t, r) {
        o.o(e, t) || Object.defineProperty(e, t, {
            enumerable: !0,
            get: r
        })
    }, o.r = function(e) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(e, "__esModule", {
            value: !0
        })
    }, o.t = function(t, e) {
        if (1 & e && (t = o(t)), 8 & e) return t;
        if (4 & e && "object" == typeof t && t && t.__esModule) return t;
        var r = Object.create(null);
        if (o.r(r), Object.defineProperty(r, "default", {
                enumerable: !0,
                value: t
            }), 2 & e && "string" != typeof t)
            for (var n in t) o.d(r, n, function(e) {
                return t[e]
            }.bind(null, n));
        return r
    }, o.n = function(e) {
        var t = e && e.__esModule ? function() {
            return e.default
        } : function() {
            return e
        };
        return o.d(t, "a", t), t
    }, o.o = function(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }, o.p = "", o(o.s = 14)
}({
    0: function(e, t) {
        e.exports = Roblox
    },
    14: function(e, t, r) {
        "use strict";
        r.r(t);
        var o = r(0),
            a = r(2);

        function i(e) {
            return (i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            } : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            })(e)
        }

        function u(e, t) {
            for (var r = 0; r < t.length; r++) {
                var n = t[r];
                n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
            }
        }
        var l = function() {
            function n(e, t, r) {
                ! function(e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }(this, n), this.namespace = r, this.resourceMap = t, this.intl = e
            }
            return function(e, t, r) {
                t && u(e.prototype, t), r && u(e, r)
            }(n, [{
                key: "get",
                value: function(e, t) {
                    if (!e || "string" != typeof e) throw new TypeError("Parameter 'key' must be provided and it should be a string");
                    var r = this.resourceMap[e] || "";
                    return r || console.warn("The translation key '".concat(e, "' not found. Please check for a missing string or a typo.")), void 0 !== t && (r = t && "object" === i(t) && !Array.isArray(t) ? r ? this.intl.f(r, t) : "" : (new window.RobloxError("Second parameter must be either a plain object when provided").throw(), "")), r
                }
            }, {
                key: "addKeyForDevelopment",
                value: function(e, t) {
                    if (this.resourceMap[e]) throw new Error("'key' ".concat(e, " is already present"));
                    this.resourceMap[e] = t
                }
            }]), n
        }();

        function s(e, t, r) {
            return t in e ? Object.defineProperty(e, t, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = r, e
        }

        function n(e, t) {
            for (var r = 0; r < t.length; r++) {
                var n = t[r];
                n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
            }
        }

        function c(e, t, r) {
            return t && n(e.prototype, t), r && n(e, r), e
        }
        var f = function() {
                function n() {
                    var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : new a.a;
                    ! function(e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                    }(this, n), this.intl = e
                }
                return c(n, null, [{
                    key: "combineTranslationResources",
                    value: function(e) {
                        for (var t = arguments.length, r = new Array(1 < t ? t - 1 : 0), n = 1; n < t; n++) r[n - 1] = arguments[n];
                        var o = r.reduce(function(e, t) {
                            return Object.assign(e, t.resourceMap)
                        }, {});
                        return new l(e, o, null)
                    }
                }]), c(n, [{
                    key: "getTranslationResource",
                    value: function(e) {
                        var t = function(t) {
                            for (var e = 1; e < arguments.length; e++) {
                                var r = null != arguments[e] ? arguments[e] : {},
                                    n = Object.keys(r);
                                "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(r).filter(function(e) {
                                    return Object.getOwnPropertyDescriptor(r, e).enumerable
                                }))), n.forEach(function(e) {
                                    s(t, e, r[e])
                                })
                            }
                            return t
                        }({}, null === o.LangDynamicDefault || void 0 === o.LangDynamicDefault ? void 0 : o.LangDynamicDefault[e], null === o.Lang || void 0 === o.Lang ? void 0 : o.Lang[e], null === o.LangDynamic || void 0 === o.LangDynamic ? void 0 : o.LangDynamic[e]);
                        return 0 === Object.keys(t).length && console.warn("The namespace ".concat(e, " was not found")), new l(this.intl, t, e)
                    }
                }, {
                    key: "mergeTranslationResources",
                    value: function() {
                        for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++) t[r] = arguments[r];
                        return n.combineTranslationResources.apply(n, [this.intl].concat(t))
                    }
                }]), n
            }(),
            p = window.Roblox || {};
        p.TranslationResourceProvider = f, window.Roblox = p;
        t.default = f
    },
    2: function(e, t, r) {
        "use strict";
        var n, o, a = i;

        function i(e, t, r) {
            this.locales = e, this.formats = t, this.pluralFn = r
        }

        function u(e) {
            this.id = e
        }

        function l(e, t, r, n, o) {
            this.id = e, this.useOrdinal = t, this.offset = r, this.options = n, this.pluralFn = o
        }

        function s(e, t, r, n) {
            this.id = e, this.offset = t, this.numberFormat = r, this.string = n
        }

        function c(e, t) {
            this.id = e, this.options = t
        }

        function Ue(e, t, r, n) {
            this.message = e, this.expected = t, this.found = r, this.location = n, this.name = "SyntaxError", "function" == typeof Error.captureStackTrace && Error.captureStackTrace(this, Ue)
        }

        function f() {
            this.constructor = n
        }
        i.prototype.compile = function(e) {
            return this.pluralStack = [], this.currentPlural = null, this.pluralNumberFormat = null, this.compileMessage(e)
        }, i.prototype.compileMessage = function(e) {
            if (!e || "messageFormatPattern" !== e.type) throw new Error('Message AST is not of type: "messageFormatPattern"');
            var t, r, n, o = e.elements,
                a = [];
            for (t = 0, r = o.length; t < r; t += 1) switch ((n = o[t]).type) {
                case "messageTextElement":
                    a.push(this.compileMessageText(n));
                    break;
                case "argumentElement":
                    a.push(this.compileArgument(n));
                    break;
                default:
                    throw new Error("Message element does not have a valid type")
            }
            return a
        }, i.prototype.compileMessageText = function(e) {
            return this.currentPlural && /(^|[^\\])#/g.test(e.value) ? (this.pluralNumberFormat || (this.pluralNumberFormat = new Intl.NumberFormat(this.locales)), new s(this.currentPlural.id, this.currentPlural.format.offset, this.pluralNumberFormat, e.value)) : e.value.replace(/\\#/g, "#")
        }, i.prototype.compileArgument = function(e) {
            var t = e.format;
            if (!t) return new u(e.id);
            var r, n = this.formats,
                o = this.locales,
                a = this.pluralFn;
            switch (t.type) {
                case "numberFormat":
                    return r = n.number[t.style], {
                        id: e.id,
                        format: new Intl.NumberFormat(o, r).format
                    };
                case "dateFormat":
                    return r = n.date[t.style], {
                        id: e.id,
                        format: new Intl.DateTimeFormat(o, r).format
                    };
                case "timeFormat":
                    return r = n.time[t.style], {
                        id: e.id,
                        format: new Intl.DateTimeFormat(o, r).format
                    };
                case "pluralFormat":
                    return r = this.compileOptions(e), new l(e.id, t.ordinal, t.offset, r, a);
                case "selectFormat":
                    return r = this.compileOptions(e), new c(e.id, r);
                default:
                    throw new Error("Message element does not have a valid format type")
            }
        }, i.prototype.compileOptions = function(e) {
            var t, r, n, o = e.format,
                a = o.options,
                i = {};
            for (this.pluralStack.push(this.currentPlural), this.currentPlural = "pluralFormat" === o.type ? e : null, t = 0, r = a.length; t < r; t += 1) i[(n = a[t]).selector] = this.compileMessage(n.value);
            return this.currentPlural = this.pluralStack.pop(), i
        }, u.prototype.format = function(e) {
            return e || "number" == typeof e ? "string" == typeof e ? e : String(e) : ""
        }, l.prototype.getOption = function(e) {
            var t = this.options;
            return t["=" + e] || t[this.pluralFn(e - this.offset, this.useOrdinal)] || t.other
        }, s.prototype.format = function(e) {
            var t = this.numberFormat.format(e - this.offset);
            return this.string.replace(/(^|[^\\])#/g, "$1" + t).replace(/\\#/g, "#")
        }, c.prototype.getOption = function(e) {
            var t = this.options;
            return t[e] || t.other
        };
        var p = (n = Ue, o = Error, f.prototype = o.prototype, n.prototype = new f, {
                SyntaxError: Ue,
                parse: function(l) {
                    var e, t = 1 < arguments.length ? arguments[1] : {},
                        s = {},
                        r = {
                            start: je
                        },
                        n = je,
                        o = function(e) {
                            return {
                                type: "messageFormatPattern",
                                elements: e,
                                location: Te()
                            }
                        },
                        i = function(e) {
                            var t, r, n, o, a, i = "";
                            for (t = 0, n = e.length; t < n; t += 1)
                                for (r = 0, a = (o = e[t]).length; r < a; r += 1) i += o[r];
                            return i
                        },
                        a = function(e) {
                            return {
                                type: "messageTextElement",
                                value: e,
                                location: Te()
                            }
                        },
                        u = /^[^ \t\n\r,.+={}#]/,
                        c = {
                            type: "class",
                            value: "[^ \\t\\n\\r,.+={}#]",
                            description: "[^ \\t\\n\\r,.+={}#]"
                        },
                        f = "{",
                        p = {
                            type: "literal",
                            value: "{",
                            description: '"{"'
                        },
                        m = ",",
                        h = {
                            type: "literal",
                            value: ",",
                            description: '","'
                        },
                        y = "}",
                        d = {
                            type: "literal",
                            value: "}",
                            description: '"}"'
                        },
                        g = function(e, t) {
                            return {
                                type: "argumentElement",
                                id: e,
                                format: t && t[2],
                                location: Te()
                            }
                        },
                        v = "number",
                        b = {
                            type: "literal",
                            value: "number",
                            description: '"number"'
                        },
                        w = "date",
                        F = {
                            type: "literal",
                            value: "date",
                            description: '"date"'
                        },
                        O = "time",
                        k = {
                            type: "literal",
                            value: "time",
                            description: '"time"'
                        },
                        T = function(e, t) {
                            return {
                                type: e + "Format",
                                style: t && t[2],
                                location: Te()
                            }
                        },
                        x = "plural",
                        D = {
                            type: "literal",
                            value: "plural",
                            description: '"plural"'
                        },
                        L = function(e) {
                            return {
                                type: e.type,
                                ordinal: !1,
                                offset: e.offset || 0,
                                options: e.options,
                                location: Te()
                            }
                        },
                        _ = "selectordinal",
                        j = {
                            type: "literal",
                            value: "selectordinal",
                            description: '"selectordinal"'
                        },
                        A = function(e) {
                            return {
                                type: e.type,
                                ordinal: !0,
                                offset: e.offset || 0,
                                options: e.options,
                                location: Te()
                            }
                        },
                        C = "select",
                        P = {
                            type: "literal",
                            value: "select",
                            description: '"select"'
                        },
                        S = function(e) {
                            return {
                                type: "selectFormat",
                                options: e,
                                location: Te()
                            }
                        },
                        E = "=",
                        R = {
                            type: "literal",
                            value: "=",
                            description: '"="'
                        },
                        I = function(e, t) {
                            return {
                                type: "optionalFormatPattern",
                                selector: e,
                                value: t,
                                location: Te()
                            }
                        },
                        M = "offset:",
                        N = {
                            type: "literal",
                            value: "offset:",
                            description: '"offset:"'
                        },
                        z = function(e) {
                            return e
                        },
                        Z = function(e, t) {
                            return {
                                type: "pluralFormat",
                                offset: e,
                                options: t,
                                location: Te()
                            }
                        },
                        U = {
                            type: "other",
                            description: "whitespace"
                        },
                        W = /^[ \t\n\r]/,
                        q = {
                            type: "class",
                            value: "[ \\t\\n\\r]",
                            description: "[ \\t\\n\\r]"
                        },
                        B = {
                            type: "other",
                            description: "optionalWhitespace"
                        },
                        J = /^[0-9]/,
                        K = {
                            type: "class",
                            value: "[0-9]",
                            description: "[0-9]"
                        },
                        $ = /^[0-9a-f]/i,
                        G = {
                            type: "class",
                            value: "[0-9a-f]i",
                            description: "[0-9a-f]i"
                        },
                        H = "0",
                        Q = {
                            type: "literal",
                            value: "0",
                            description: '"0"'
                        },
                        V = /^[1-9]/,
                        X = {
                            type: "class",
                            value: "[1-9]",
                            description: "[1-9]"
                        },
                        Y = function(e) {
                            return parseInt(e, 10)
                        },
                        ee = /^[^{}\\\0-\x1F \t\n\r]/,
                        te = {
                            type: "class",
                            value: "[^{}\\\\\\0-\\x1F\\x7f \\t\\n\\r]",
                            description: "[^{}\\\\\\0-\\x1F\\x7f \\t\\n\\r]"
                        },
                        re = "\\\\",
                        ne = {
                            type: "literal",
                            value: "\\\\",
                            description: '"\\\\\\\\"'
                        },
                        oe = function() {
                            return "\\"
                        },
                        ae = "\\#",
                        ie = {
                            type: "literal",
                            value: "\\#",
                            description: '"\\\\#"'
                        },
                        ue = function() {
                            return "\\#"
                        },
                        le = "\\{",
                        se = {
                            type: "literal",
                            value: "\\{",
                            description: '"\\\\{"'
                        },
                        ce = function() {
                            return "{"
                        },
                        fe = "\\}",
                        pe = {
                            type: "literal",
                            value: "\\}",
                            description: '"\\\\}"'
                        },
                        me = function() {
                            return "}"
                        },
                        he = "\\u",
                        ye = {
                            type: "literal",
                            value: "\\u",
                            description: '"\\\\u"'
                        },
                        de = function(e) {
                            return String.fromCharCode(parseInt(e, 16))
                        },
                        ge = function(e) {
                            return e.join("")
                        },
                        ve = 0,
                        be = 0,
                        we = [{
                            line: 1,
                            column: 1,
                            seenCR: !1
                        }],
                        Fe = 0,
                        Oe = [],
                        ke = 0;
                    if ("startRule" in t) {
                        if (!(t.startRule in r)) throw new Error("Can't start parsing from rule \"" + t.startRule + '".');
                        n = r[t.startRule]
                    }

                    function Te() {
                        return De(be, ve)
                    }

                    function xe(e) {
                        var t, r, n = we[e];
                        if (n) return n;
                        for (t = e - 1; !we[t];) t--;
                        for (n = {
                                line: (n = we[t]).line,
                                column: n.column,
                                seenCR: n.seenCR
                            }; t < e;) "\n" === (r = l.charAt(t)) ? (n.seenCR || n.line++, n.column = 1, n.seenCR = !1) : "\r" === r || "\u2028" === r || "\u2029" === r ? (n.line++, n.column = 1, n.seenCR = !0) : (n.column++, n.seenCR = !1), t++;
                        return we[e] = n
                    }

                    function De(e, t) {
                        var r = xe(e),
                            n = xe(t);
                        return {
                            start: {
                                offset: e,
                                line: r.line,
                                column: r.column
                            },
                            end: {
                                offset: t,
                                line: n.line,
                                column: n.column
                            }
                        }
                    }

                    function Le(e) {
                        ve < Fe || (Fe < ve && (Fe = ve, Oe = []), Oe.push(e))
                    }

                    function _e(e, t, r, n) {
                        return null !== t && function(e) {
                            var t = 1;
                            for (e.sort(function(e, t) {
                                    return e.description < t.description ? -1 : e.description > t.description ? 1 : 0
                                }); t < e.length;) e[t - 1] === e[t] ? e.splice(t, 1) : t++
                        }(t), new Ue(null !== e ? e : function(e, t) {
                            var r, n = new Array(e.length);
                            for (r = 0; r < e.length; r++) n[r] = e[r].description;

                            function o(e) {
                                return e.charCodeAt(0).toString(16).toUpperCase()
                            }
                            return "Expected " + (1 < e.length ? n.slice(0, -1).join(", ") + " or " + n[e.length - 1] : n[0]) + " but " + (t ? '"' + t.replace(/\\/g, "\\\\").replace(/"/g, '\\"').replace(/\x08/g, "\\b").replace(/\t/g, "\\t").replace(/\n/g, "\\n").replace(/\f/g, "\\f").replace(/\r/g, "\\r").replace(/[\x00-\x07\x0B\x0E\x0F]/g, function(e) {
                                return "\\x0" + o(e)
                            }).replace(/[\x10-\x1F\x80-\xFF]/g, function(e) {
                                return "\\x" + o(e)
                            }).replace(/[\u0100-\u0FFF]/g, function(e) {
                                return "\\u0" + o(e)
                            }).replace(/[\u1000-\uFFFF]/g, function(e) {
                                return "\\u" + o(e)
                            }) + '"' : "end of input") + " found."
                        }(t, r), t, r, n)
                    }

                    function je() {
                        return Ae()
                    }

                    function Ae() {
                        var e, t, r;
                        for (e = ve, t = [], r = Ce(); r !== s;) t.push(r), r = Ce();
                        return t !== s && (be = e, t = o(t)), e = t
                    }

                    function Ce() {
                        var e;
                        return (e = function() {
                            var e, t;
                            return e = ve, (t = function() {
                                var e, t, r, n, o, a;
                                if (t = [], r = e = ve, (r = (n = Re()) !== s ? (o = Ze()) !== s && (a = Re()) !== s ? n = [n, o, a] : (ve = r, s) : (ve = r, s)) !== s)
                                    for (; r !== s;) t.push(r), r = ve, n = Re(), r = n !== s && (o = Ze()) !== s && (a = Re()) !== s ? n = [n, o, a] : (ve = r, s);
                                else t = s;
                                return t !== s && (be = e, t = i(t)), (e = t) === s && (e = ve, t = Ee(), e = t !== s ? l.substring(e, ve) : t), e
                            }()) !== s && (be = e, t = a(t)), e = t
                        }()) === s && (e = function() {
                            var e, t, r, n, o, a, i;
                            return e = ve, 123 === l.charCodeAt(ve) ? (t = f, ve++) : (t = s, 0 === ke && Le(p)), e = t !== s ? Re() !== s && (r = function() {
                                var e, t, r;
                                if ((e = Ne()) === s) {
                                    if (e = ve, t = [], u.test(l.charAt(ve)) ? (r = l.charAt(ve), ve++) : (r = s, 0 === ke && Le(c)), r !== s)
                                        for (; r !== s;) t.push(r), u.test(l.charAt(ve)) ? (r = l.charAt(ve), ve++) : (r = s, 0 === ke && Le(c));
                                    else t = s;
                                    e = t !== s ? l.substring(e, ve) : t
                                }
                                return e
                            }()) !== s && Re() !== s ? (n = ve, 44 === l.charCodeAt(ve) ? (o = m, ve++) : (o = s, 0 === ke && Le(h)), (n = o !== s && (a = Re()) !== s && (i = function() {
                                var e;
                                return (e = function() {
                                    var e, t, r, n, o, a;
                                    return e = ve, l.substr(ve, 6) === v ? (t = v, ve += 6) : (t = s, 0 === ke && Le(b)), t === s && (l.substr(ve, 4) === w ? (t = w, ve += 4) : (t = s, 0 === ke && Le(F)), t === s && (l.substr(ve, 4) === O ? (t = O, ve += 4) : (t = s, 0 === ke && Le(k)))), e = t !== s ? Re() !== s ? (r = ve, 44 === l.charCodeAt(ve) ? (n = m, ve++) : (n = s, 0 === ke && Le(h)), (r = n !== s && (o = Re()) !== s && (a = Ze()) !== s ? n = [n, o, a] : (ve = r, s)) === s && (r = null), r !== s ? (be = e, t = T(t, r)) : (ve = e, s)) : (ve = e, s) : (ve = e, s)
                                }()) === s && (e = function() {
                                    var e, t, r, n;
                                    return e = ve, l.substr(ve, 6) === x ? (t = x, ve += 6) : (t = s, 0 === ke && Le(D)), e = t !== s ? Re() !== s ? (44 === l.charCodeAt(ve) ? (r = m, ve++) : (r = s, 0 === ke && Le(h)), r !== s && Re() !== s && (n = Se()) !== s ? (be = e, t = L(n)) : (ve = e, s)) : (ve = e, s) : (ve = e, s)
                                }()) === s && (e = function() {
                                    var e, t, r, n;
                                    return e = ve, l.substr(ve, 13) === _ ? (t = _, ve += 13) : (t = s, 0 === ke && Le(j)), e = t !== s ? Re() !== s ? (44 === l.charCodeAt(ve) ? (r = m, ve++) : (r = s, 0 === ke && Le(h)), r !== s && Re() !== s && (n = Se()) !== s ? (be = e, t = A(n)) : (ve = e, s)) : (ve = e, s) : (ve = e, s)
                                }()) === s && (e = function() {
                                    var e, t, r, n, o;
                                    if (e = ve, l.substr(ve, 6) === C ? (t = C, ve += 6) : (t = s, 0 === ke && Le(P)), t !== s)
                                        if (Re() !== s)
                                            if (44 === l.charCodeAt(ve) ? (r = m, ve++) : (r = s, 0 === ke && Le(h)), r !== s)
                                                if (Re() !== s) {
                                                    if (n = [], (o = Pe()) !== s)
                                                        for (; o !== s;) n.push(o), o = Pe();
                                                    else n = s;
                                                    e = n !== s ? (be = e, t = S(n)) : (ve = e, s)
                                                } else ve = e, e = s;
                                    else ve = e, e = s;
                                    else ve = e, e = s;
                                    else ve = e, e = s;
                                    return e
                                }()), e
                            }()) !== s ? o = [o, a, i] : (ve = n, s)) === s && (n = null), n !== s && (o = Re()) !== s ? (125 === l.charCodeAt(ve) ? (a = y, ve++) : (a = s, 0 === ke && Le(d)), a !== s ? (be = e, t = g(r, n)) : (ve = e, s)) : (ve = e, s)) : (ve = e, s) : (ve = e, s)
                        }()), e
                    }

                    function Pe() {
                        var e, t, r, n, o;
                        return e = ve, e = Re() !== s && (t = function() {
                            var e, t, r, n;
                            return t = e = ve, 61 === l.charCodeAt(ve) ? (r = E, ve++) : (r = s, 0 === ke && Le(R)), (e = (t = r !== s && (n = Ne()) !== s ? r = [r, n] : (ve = t, s)) !== s ? l.substring(e, ve) : t) === s && (e = Ze()), e
                        }()) !== s && Re() !== s ? (123 === l.charCodeAt(ve) ? (r = f, ve++) : (r = s, 0 === ke && Le(p)), r !== s && Re() !== s && (n = Ae()) !== s && Re() !== s ? (125 === l.charCodeAt(ve) ? (o = y, ve++) : (o = s, 0 === ke && Le(d)), o !== s ? (be = e, I(t, n)) : (ve = e, s)) : (ve = e, s)) : (ve = e, s)
                    }

                    function Se() {
                        var e, t, r, n;
                        if (e = ve, (t = function() {
                                var e, t, r;
                                return e = ve, l.substr(ve, 7) === M ? (t = M, ve += 7) : (t = s, 0 === ke && Le(N)), e = t !== s && Re() !== s && (r = Ne()) !== s ? (be = e, t = z(r)) : (ve = e, s)
                            }()) === s && (t = null), t !== s)
                            if (Re() !== s) {
                                if (r = [], (n = Pe()) !== s)
                                    for (; n !== s;) r.push(n), n = Pe();
                                else r = s;
                                e = r !== s ? (be = e, t = Z(t, r)) : (ve = e, s)
                            } else ve = e, e = s;
                        else ve = e, e = s;
                        return e
                    }

                    function Ee() {
                        var e, t;
                        if (ke++, e = [], W.test(l.charAt(ve)) ? (t = l.charAt(ve), ve++) : (t = s, 0 === ke && Le(q)), t !== s)
                            for (; t !== s;) e.push(t), W.test(l.charAt(ve)) ? (t = l.charAt(ve), ve++) : (t = s, 0 === ke && Le(q));
                        else e = s;
                        return ke--, e === s && (t = s, 0 === ke && Le(U)), e
                    }

                    function Re() {
                        var e, t, r;
                        for (ke++, e = ve, t = [], r = Ee(); r !== s;) t.push(r), r = Ee();
                        return e = t !== s ? l.substring(e, ve) : t, ke--, e === s && (t = s, 0 === ke && Le(B)), e
                    }

                    function Ie() {
                        var e;
                        return J.test(l.charAt(ve)) ? (e = l.charAt(ve), ve++) : (e = s, 0 === ke && Le(K)), e
                    }

                    function Me() {
                        var e;
                        return $.test(l.charAt(ve)) ? (e = l.charAt(ve), ve++) : (e = s, 0 === ke && Le(G)), e
                    }

                    function Ne() {
                        var e, t, r, n, o, a;
                        if (e = ve, 48 === l.charCodeAt(ve) ? (t = H, ve++) : (t = s, 0 === ke && Le(Q)), t === s) {
                            if (r = t = ve, V.test(l.charAt(ve)) ? (n = l.charAt(ve), ve++) : (n = s, 0 === ke && Le(X)), n !== s) {
                                for (o = [], a = Ie(); a !== s;) o.push(a), a = Ie();
                                r = o !== s ? n = [n, o] : (ve = r, s)
                            } else ve = r, r = s;
                            t = r !== s ? l.substring(t, ve) : r
                        }
                        return t !== s && (be = e, t = Y(t)), e = t
                    }

                    function ze() {
                        var e, t, r, n, o, a, i, u;
                        return ee.test(l.charAt(ve)) ? (e = l.charAt(ve), ve++) : (e = s, 0 === ke && Le(te)), e === s && (e = ve, l.substr(ve, 2) === re ? (t = re, ve += 2) : (t = s, 0 === ke && Le(ne)), t !== s && (be = e, t = oe()), (e = t) === s && (e = ve, l.substr(ve, 2) === ae ? (t = ae, ve += 2) : (t = s, 0 === ke && Le(ie)), t !== s && (be = e, t = ue()), (e = t) === s && (e = ve, l.substr(ve, 2) === le ? (t = le, ve += 2) : (t = s, 0 === ke && Le(se)), t !== s && (be = e, t = ce()), (e = t) === s && (e = ve, l.substr(ve, 2) === fe ? (t = fe, ve += 2) : (t = s, 0 === ke && Le(pe)), t !== s && (be = e, t = me()), (e = t) === s && (e = ve, l.substr(ve, 2) === he ? (t = he, ve += 2) : (t = s, 0 === ke && Le(ye)), e = t !== s ? (n = r = ve, (r = (n = (o = Me()) !== s && (a = Me()) !== s && (i = Me()) !== s && (u = Me()) !== s ? o = [o, a, i, u] : (ve = n, s)) !== s ? l.substring(r, ve) : n) !== s ? (be = e, t = de(r)) : (ve = e, s)) : (ve = e, s)))))), e
                    }

                    function Ze() {
                        var e, t, r;
                        if (e = ve, t = [], (r = ze()) !== s)
                            for (; r !== s;) t.push(r), r = ze();
                        else t = s;
                        return t !== s && (be = e, t = ge(t)), e = t
                    }
                    if ((e = n()) !== s && ve === l.length) return e;
                    throw e !== s && ve < l.length && Le({
                        type: "end",
                        description: "end of input"
                    }), _e(null, Oe, Fe < l.length ? l.charAt(Fe) : null, Fe < l.length ? De(Fe, Fe + 1) : De(Fe, Fe))
                }
            }),
            m = h;

        function h(e, t, r) {
            var n = "string" == typeof e ? h.__parse(e) : e;
            if (!n || "messageFormatPattern" !== n.type) throw new TypeError("A message must be provided as a String or AST.");
            r = this._mergeFormats(h.formats, r), Object.defineProperty(this, "_locale", {
                value: this._resolveLocale(t)
            });
            var o = this._findPluralRuleFunction(this._locale),
                a = this._compilePattern(n, t, r, o),
                i = this;
            this.format = function(e) {
                return i._format(a, e)
            }
        }
        Object.defineProperty(h, "formats", {
            enumerable: !0,
            value: {
                number: {
                    currency: {
                        style: "currency"
                    },
                    percent: {
                        style: "percent"
                    }
                },
                date: {
                    short: {
                        month: "numeric",
                        day: "numeric",
                        year: "2-digit"
                    },
                    medium: {
                        month: "short",
                        day: "numeric",
                        year: "numeric"
                    },
                    long: {
                        month: "long",
                        day: "numeric",
                        year: "numeric"
                    },
                    full: {
                        weekday: "long",
                        month: "long",
                        day: "numeric",
                        year: "numeric"
                    }
                },
                time: {
                    short: {
                        hour: "numeric",
                        minute: "numeric"
                    },
                    medium: {
                        hour: "numeric",
                        minute: "numeric",
                        second: "numeric"
                    },
                    long: {
                        hour: "numeric",
                        minute: "numeric",
                        second: "numeric",
                        timeZoneName: "short"
                    },
                    full: {
                        hour: "numeric",
                        minute: "numeric",
                        second: "numeric",
                        timeZoneName: "short"
                    }
                }
            }
        }), Object.defineProperty(h, "__localeData__", {
            value: Object.create(null)
        }), Object.defineProperty(h, "__addLocaleData", {
            value: function(e) {
                if (!e || !e.locale) throw new Error("Locale data provided to IntlMessageFormat is missing a `locale` property");
                h.__localeData__[e.locale.toLowerCase()] = e
            }
        }), Object.defineProperty(h, "__parse", {
            value: p.parse
        }), Object.defineProperty(h, "defaultLocale", {
            enumerable: !0,
            writable: !0,
            value: void 0
        }), h.prototype.resolvedOptions = function() {
            return {
                locale: this._locale
            }
        }, h.prototype._compilePattern = function(e, t, r, n) {
            return new a(t, r, n).compile(e)
        }, h.prototype._findPluralRuleFunction = function(e) {
            for (var t = h.__localeData__, r = t[e.toLowerCase()]; r;) {
                if (r.pluralRuleFunction) return r.pluralRuleFunction;
                r = r.parentLocale && t[r.parentLocale.toLowerCase()]
            }
            throw new Error("Locale data added to IntlMessageFormat is missing a `pluralRuleFunction` for :" + e)
        }, h.prototype._format = function(e, t) {
            var r, n, o, a, i, u = "";
            for (r = 0, n = e.length; r < n; r += 1)
                if ("string" != typeof(o = e[r])) {
                    if (a = o.id, !t || !Object.prototype.hasOwnProperty.call(t, a)) throw new Error("A value must be provided for: " + a);
                    i = t[a], o.options ? u += this._format(o.getOption(i), t) : u += o.format(i)
                } else u += o;
            return u
        }, h.prototype._mergeFormats = function(e, t) {
            var r, n, o = {};
            for (r in e) Object.prototype.hasOwnProperty.call(e, r) && (o[r] = n = Object.create(e[r]), t && Object.prototype.hasOwnProperty.call(t, r) && Object.assign(n, t[r]));
            return o
        }, h.prototype._resolveLocale = function(e) {
            "string" == typeof e && (e = [e]), e = (e || []).concat(h.defaultLocale);
            var t, r, n, o, a = h.__localeData__;
            for (t = 0, r = e.length; t < r; t += 1)
                for (n = e[t].toLowerCase().split("-"); n.length;) {
                    if (o = a[n.join("-")]) return o.locale;
                    n.pop()
                }
            var i = e.pop();
            throw new Error("No locale data has been added to IntlMessageFormat for: " + e.join(", ") + ", or the default locale: " + i)
        };
        var y = {
                locale: "en",
                pluralRuleFunction: function(e, t) {
                    var r = String(e).split("."),
                        n = !r[1],
                        o = Number(r[0]) == e,
                        a = o && r[0].slice(-1),
                        i = o && r[0].slice(-2);
                    return t ? 1 == a && 11 != i ? "one" : 2 == a && 12 != i ? "two" : 3 == a && 13 != i ? "few" : "other" : 1 == e && n ? "one" : "other"
                }
            },
            d = r(0),
            g = "RobloxLocaleCode";

        function v(e) {
            var t = F.indexOf(e) + 1;
            return !(!e || !t)
        }
        var b = 'meta[name="locale-data"]',
            w = "en_us",
            F = ["zh-cn", "zh-tw", "ko-kr", "ja-jp"],
            O = ["zh-tw"],
            k = {
                zh_cjv: "zh_cn"
            },
            T = function(e) {
                return e.replace(/_/g, "-")
            };

        function x() {
            var e, t = "undefined" != typeof localStorage && (d.LocalStorage ? d.LocalStorage.isAvailable() : localStorage && localStorage.getItem && localStorage.setItem),
                r = document.querySelector(b);
            return r && (e = r.dataset ? r.dataset.languageCode : r.getAttribute("data-language-code")), !e && t && (e = localStorage.getItem(g)), e = e || w, t && localStorage.setItem(g, e), e
        }
        var D = {
                short: {
                    year: "numeric",
                    month: "2-digit",
                    day: "2-digit"
                },
                full: {
                    year: "numeric",
                    month: "2-digit",
                    day: "2-digit",
                    hour: "2-digit",
                    minute: "2-digit"
                },
                time: {
                    hour: "2-digit",
                    minute: "2-digit"
                }
            },
            L = new Date("Aug 17 2003"),
            _ = [1, 2, 3, 4, 5, 6, 7],
            j = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
            A = [{
                year: "numeric",
                month: "short",
                day: "numeric"
            }, {
                hour: "numeric",
                minute: "numeric",
                hour12: !0
            }],
            C = {
                month: 0,
                day: 1,
                year: 2
            },
            P = ["narrow", "short", "long"],
            S = ["numeric", "2-digit", "narrow", "short", "long"];

        function E(e, t) {
            for (var r = 0; r < t.length; r++) {
                var n = t[r];
                n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
            }
        }
        var R = function() {
            function t(e) {
                ! function(e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }(this, t), this.locale = e, this.dateOrdering = {}
            }
            return function(e, t, r) {
                t && E(e.prototype, t), r && E(e, r)
            }(t, [{
                key: "getShortDate",
                value: function(e) {
                    return this.getCustomDateTime(e)
                }
            }, {
                key: "getFullDate",
                value: function(e, t) {
                    var r = 1 < arguments.length && void 0 !== t ? t : " | ";
                    return this.getCustomDateTime(e, A[0]) + r + this.getCustomDateTime(e, A[1])
                }
            }, {
                key: "getCustomDateTime",
                value: function(e, t) {
                    var r = 0 < arguments.length && void 0 !== e ? e : new Date,
                        n = 1 < arguments.length ? t : void 0,
                        o = new Intl.DateTimeFormat(this.locale, n);
                    try {
                        return "string" == typeof r || "number" == typeof r ? o.format(new Date(r)) : o.format(r)
                    } catch (e) {
                        return ""
                    }
                }
            }, {
                key: "getOrderedDateParts",
                value: function(e) {
                    var r = this;
                    if (0 === Object.keys(this.dateOrdering).length) {
                        var t = new Intl.DateTimeFormat(this.locale, e);
                        if (this.dateOrdering = this.getDefaultDateOrdering(), t.formatToParts) {
                            var n = t.formatToParts(new Date).filter(function(e) {
                                return "literal" !== e.type
                            });
                            3 === n.length && n.forEach(function(e, t) {
                                r.dateOrdering[e.type] = t
                            })
                        }
                    }
                    return this.dateOrdering
                }
            }, {
                key: "getDefaultDateOrdering",
                value: function() {
                    var r = C,
                        e = this.getShortDate(L),
                        t = [{
                            type: "year",
                            index: e.indexOf("2003")
                        }, {
                            type: "month",
                            index: e.indexOf("8")
                        }, {
                            type: "day",
                            index: e.indexOf("17")
                        }];
                    return t.some(function(e) {
                        return -1 === e.index
                    }) ? C : ((t = t.sort(function(e, t) {
                        return e.index - t.index
                    })).forEach(function(e, t) {
                        r[e.type] = t
                    }), r)
                }
            }]), t
        }();

        function I(e, t) {
            for (var r = 0; r < t.length; r++) {
                var n = t[r];
                n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
            }
        }
        var M = function() {
            function r(e, t) {
                ! function(e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }(this, r), this.locale = e, this.currency = t
            }
            return function(e, t, r) {
                t && I(e.prototype, t), r && I(e, r)
            }(r, [{
                key: "getCustomNumber",
                value: function(t, e) {
                    try {
                        return new Intl.NumberFormat(this.locale, e).format(t)
                    } catch (e) {
                        return t
                    }
                }
            }]), r
        }();

        function N(e, t) {
            return e < t ? -1 : t < e ? 1 : 0
        }

        function z(r) {
            return void 0 !== Intl.Collator ? new Intl.Collator(r).compare : function() {
                if (void 0 !== String.prototype.localeCompare) try {
                    "foo".localeCompare("bar", "i")
                } catch (e) {
                    return "RangeError" === e.name
                }
                return !1
            }() ? function(e, t) {
                return e.localeCompare(t, r)
            } : N
        }

        function Z(e, t, r) {
            return v(e) && r ? 0 <= O.indexOf(e) ? "".concat(t, " ").concat(r) : t + r : t
        }
        var U = function(e) {
            return {
                currency: {
                    style: "currency",
                    currency: e
                },
                percent: {
                    style: "percent",
                    maximumFractionDigits: 2
                },
                decimal: {
                    style: "decimal",
                    maximumFractionDigits: 2
                }
            }
        };

        function W(e) {
            return (W = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            } : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            })(e)
        }

        function q(e, t) {
            for (var r = 0; r < t.length; r++) {
                var n = t[r];
                n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
            }
        }
        r.d(t, "a", function() {
            return B
        }), m.__addLocaleData(y), m.defaultLocale = "en";
        var B = function() {
            function o(e, t, r) {
                ! function(e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }(this, o);
                var n = e || x();
                this.locale = function(e) {
                    return Object.prototype.hasOwnProperty.call(k, e) ? T(k[e]) : T(e)
                }(n), this.defaultLocale = [this.locale], this.timeZone = t || "America/Los_Angeles", this.currency = r || "USD", this.monthsList = {}, this.weekdaysList = {}, this.langSensitiveCompare = z(this.locale), this.dateTimeFormatter = null, this.numberFormatter = null
            }
            return function(e, t, r) {
                t && q(e.prototype, t), r && q(e, r)
            }(o, [{
                key: "getLocale",
                value: function() {
                    return T(this.locale)
                }
            }, {
                key: "getRobloxLocale",
                value: function() {
                    return function(e) {
                        return e.replace(/-/g, "_")
                    }(this.locale)
                }
            }, {
                key: "getTimeZone",
                value: function() {
                    return this.timeZone
                }
            }, {
                key: "getCurrency",
                value: function() {
                    return this.currency
                }
            }, {
                key: "getDateTimeFormatter",
                value: function() {
                    return this.dateTimeFormatter || (this.dateTimeFormatter = new R(this.locale)), this.dateTimeFormatter
                }
            }, {
                key: "getNumberFormatter",
                value: function() {
                    return this.numberFormatter || (this.numberFormatter = new M(this.defaultLocale, this.currency)), this.numberFormatter
                }
            }, {
                key: "isAsianLanguage",
                value: function() {
                    return v(this.locale)
                }
            }, {
                key: "getFormattedDateString",
                value: function(e, t) {
                    return Z(this.locale, e, t)
                }
            }, {
                key: "getMonthsI18n",
                value: function(e, t) {
                    var r = -1 < S.indexOf(e) ? e : "short";
                    return this.monthsList[r] && 0 < this.monthsList[r].length || (this.monthsList[r] = function(r, n, o) {
                        return j.map(function(e) {
                            return new Date(2017, e - 1)
                        }).map(function(e, t) {
                            return v(r) ? {
                                value: t + 1,
                                name: Z(r, t + 1, o)
                            } : {
                                value: t + 1,
                                name: Intl.DateTimeFormat(r, {
                                    month: n
                                }).format(e)
                            }
                        })
                    }(this.locale, r, t)), this.monthsList[r]
                }
            }, {
                key: "f",
                value: function(e, t, r) {
                    if ("string" != typeof e) throw new TypeError("'message' must be a string");
                    return new m(e, this.locale, r).format(t)
                }
            }, {
                key: "d",
                value: function(e, t) {
                    if (console.warn("This method has been deprecated in favor of the new DateTimeFormatter API, please do not use it anymore!"), "object" !== W(e) || !Date.prototype.isPrototypeOf(e)) throw new TypeError("'dateObj' must be a JavaScript date object");
                    var r;
                    if ("string" == typeof t || void 0 === t) r = D[t] || D.short;
                    else {
                        if ("object" !== W(t)) throw new TypeError("'options' must be either of type string or object based on Intl.DateTimeFormat");
                        r = t
                    }
                    return this.getDateTimeFormatter().getCustomDateTime(e, r)
                }
            }, {
                key: "n",
                value: function(e, t) {
                    if (Number.isNaN(e)) throw new TypeError("The argument 'number' must be of type number");
                    var r, n = U(this.currency);
                    if ("string" == typeof t || void 0 === t) r = n[t] || n.decimal;
                    else {
                        if ("object" !== W(t)) throw new TypeError("'options' must be of type string or object based on Intl.NumberFormat");
                        r = t
                    }
                    return this.getNumberFormatter().getCustomNumber(e, r)
                }
            }, {
                key: "getWeekdaysList",
                value: function(e) {
                    var r = this,
                        n = -1 < P.indexOf(e) ? e : "short";
                    if (this.weekdaysList[n] && 0 < this.weekdaysList[n].length) return this.weekdaysList[n];
                    var t = _.map(function(e) {
                        return new Date(2017, 4, e)
                    });
                    return this.weekdaysList[n] = t.map(function(e, t) {
                        return {
                            value: t + 1,
                            name: Intl.DateTimeFormat(r.locale, {
                                weekday: n
                            }).format(e)
                        }
                    }), this.weekdaysList[n]
                }
            }, {
                key: "getMonthsList",
                value: function(e) {
                    var r = this,
                        n = -1 < S.indexOf(e) ? e : "short";
                    if (this.monthsList[n] && 0 < this.monthsList[n].length) return this.monthsList[n];
                    var t = j.map(function(e) {
                        return new Date(2017, e - 1)
                    });
                    return this.monthsList[n] = t.map(function(e, t) {
                        return {
                            value: t + 1,
                            name: Intl.DateTimeFormat(r.locale, {
                                month: n
                            }).format(e)
                        }
                    }), this.monthsList[n]
                }
            }]), o
        }()
    }
});
//# sourceMappingURL=https://js.rbxcdn.com/b60c685e36381f3fa97e-translationResourceProvider.js.map

/* Bundle detector */
window.Roblox && window.Roblox.BundleDetector && window.Roblox.BundleDetector.bundleDetected("TranslationResources");