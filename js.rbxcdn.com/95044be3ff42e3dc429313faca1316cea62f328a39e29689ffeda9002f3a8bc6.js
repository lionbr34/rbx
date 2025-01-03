! function() {
    "use strict";
    var t, o = e;

    function e(t, e, r) {
        this.locales = t, this.formats = e, this.pluralFn = r
    }

    function a(t) {
        this.id = t
    }

    function u(t, e, r, n, o) {
        this.id = t, this.useOrdinal = e, this.offset = r, this.options = n, this.pluralFn = o
    }

    function r(t, e, r, n) {
        this.id = t, this.offset = e, this.numberFormat = r, this.string = n
    }

    function l(t, e) {
        this.id = t, this.options = e
    }

    function zt(t, e, r, n) {
        this.message = t, this.expected = e, this.found = r, this.location = n, this.name = "SyntaxError", "function" == typeof Error.captureStackTrace && Error.captureStackTrace(this, zt)
    }

    function n() {
        this.constructor = t
    }
    e.prototype.compile = function(t) {
        return this.pluralStack = [], this.currentPlural = null, this.pluralNumberFormat = null, this.compileMessage(t)
    }, e.prototype.compileMessage = function(t) {
        if (!t || "messageFormatPattern" !== t.type) throw new Error('Message AST is not of type: "messageFormatPattern"');
        for (var e, r = t.elements, n = [], o = 0, i = r.length; o < i; o += 1) switch ((e = r[o]).type) {
            case "messageTextElement":
                n.push(this.compileMessageText(e));
                break;
            case "argumentElement":
                n.push(this.compileArgument(e));
                break;
            default:
                throw new Error("Message element does not have a valid type")
        }
        return n
    }, e.prototype.compileMessageText = function(t) {
        return this.currentPlural && /(^|[^\\])#/g.test(t.value) ? (this.pluralNumberFormat || (this.pluralNumberFormat = new Intl.NumberFormat(this.locales)), new r(this.currentPlural.id, this.currentPlural.format.offset, this.pluralNumberFormat, t.value)) : t.value.replace(/\\#/g, "#")
    }, e.prototype.compileArgument = function(t) {
        var e = t.format;
        if (!e) return new a(t.id);
        var r, n = this.formats,
            o = this.locales,
            i = this.pluralFn;
        switch (e.type) {
            case "numberFormat":
                return r = n.number[e.style], {
                    id: t.id,
                    format: new Intl.NumberFormat(o, r).format
                };
            case "dateFormat":
                return r = n.date[e.style], {
                    id: t.id,
                    format: new Intl.DateTimeFormat(o, r).format
                };
            case "timeFormat":
                return r = n.time[e.style], {
                    id: t.id,
                    format: new Intl.DateTimeFormat(o, r).format
                };
            case "pluralFormat":
                return r = this.compileOptions(t), new u(t.id, e.ordinal, e.offset, r, i);
            case "selectFormat":
                return r = this.compileOptions(t), new l(t.id, r);
            default:
                throw new Error("Message element does not have a valid format type")
        }
    }, e.prototype.compileOptions = function(t) {
        var e, r, n, o = t.format,
            i = o.options,
            a = {};
        for (this.pluralStack.push(this.currentPlural), this.currentPlural = "pluralFormat" === o.type ? t : null, e = 0, r = i.length; e < r; e += 1) a[(n = i[e]).selector] = this.compileMessage(n.value);
        return this.currentPlural = this.pluralStack.pop(), a
    }, a.prototype.format = function(t) {
        return t || "number" == typeof t ? "string" == typeof t ? t : String(t) : ""
    }, u.prototype.getOption = function(t) {
        var e = this.options;
        return e["=" + t] || e[this.pluralFn(t - this.offset, this.useOrdinal)] || e.other
    }, r.prototype.format = function(t) {
        t = this.numberFormat.format(t - this.offset);
        return this.string.replace(/(^|[^\\])#/g, "$1" + t).replace(/\\#/g, "#")
    }, l.prototype.getOption = function(t) {
        var e = this.options;
        return e[t] || e.other
    };
    var i = (t = zt, f = Error, n.prototype = f.prototype, t.prototype = new n, {
            SyntaxError: zt,
            parse: function(s) {
                var t = 1 < arguments.length ? arguments[1] : {},
                    c = {},
                    e = {
                        start: kt
                    },
                    r = kt,
                    n = function(t) {
                        return {
                            type: "messageFormatPattern",
                            elements: t,
                            location: xt()
                        }
                    },
                    a = function(t) {
                        for (var e, r, n, o = "", i = 0, a = t.length; i < a; i += 1)
                            for (e = 0, n = (r = t[i]).length; e < n; e += 1) o += r[e];
                        return o
                    },
                    o = function(t) {
                        return {
                            type: "messageTextElement",
                            value: t,
                            location: xt()
                        }
                    },
                    u = /^[^ \t\n\r,.+={}#]/,
                    l = {
                        type: "class",
                        value: "[^ \\t\\n\\r,.+={}#]",
                        description: "[^ \\t\\n\\r,.+={}#]"
                    },
                    f = "{",
                    m = {
                        type: "literal",
                        value: "{",
                        description: '"{"'
                    },
                    p = ",",
                    h = {
                        type: "literal",
                        value: ",",
                        description: '","'
                    },
                    d = "}",
                    y = {
                        type: "literal",
                        value: "}",
                        description: '"}"'
                    },
                    g = function(t, e) {
                        return {
                            type: "argumentElement",
                            id: t,
                            format: e && e[2],
                            location: xt()
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
                    x = {
                        type: "literal",
                        value: "time",
                        description: '"time"'
                    },
                    C = function(t, e) {
                        return {
                            type: t + "Format",
                            style: e && e[2],
                            location: xt()
                        }
                    },
                    A = "plural",
                    T = {
                        type: "literal",
                        value: "plural",
                        description: '"plural"'
                    },
                    _ = function(t) {
                        return {
                            type: t.type,
                            ordinal: !1,
                            offset: t.offset || 0,
                            options: t.options,
                            location: xt()
                        }
                    },
                    k = "selectordinal",
                    D = {
                        type: "literal",
                        value: "selectordinal",
                        description: '"selectordinal"'
                    },
                    L = function(t) {
                        return {
                            type: t.type,
                            ordinal: !0,
                            offset: t.offset || 0,
                            options: t.options,
                            location: xt()
                        }
                    },
                    S = "select",
                    P = {
                        type: "literal",
                        value: "select",
                        description: '"select"'
                    },
                    j = function(t) {
                        return {
                            type: "selectFormat",
                            options: t,
                            location: xt()
                        }
                    },
                    E = "=",
                    I = {
                        type: "literal",
                        value: "=",
                        description: '"="'
                    },
                    R = function(t, e) {
                        return {
                            type: "optionalFormatPattern",
                            selector: t,
                            value: e,
                            location: xt()
                        }
                    },
                    N = "offset:",
                    M = {
                        type: "literal",
                        value: "offset:",
                        description: '"offset:"'
                    },
                    Z = function(t) {
                        return t
                    },
                    z = function(t, e) {
                        return {
                            type: "pluralFormat",
                            offset: t,
                            options: e,
                            location: xt()
                        }
                    },
                    i = {
                        type: "other",
                        description: "whitespace"
                    },
                    U = /^[ \t\n\r]/,
                    W = {
                        type: "class",
                        value: "[ \\t\\n\\r]",
                        description: "[ \\t\\n\\r]"
                    },
                    q = {
                        type: "other",
                        description: "optionalWhitespace"
                    },
                    B = /^[0-9]/,
                    J = {
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
                    K = {
                        type: "literal",
                        value: "0",
                        description: '"0"'
                    },
                    Q = /^[1-9]/,
                    V = {
                        type: "class",
                        value: "[1-9]",
                        description: "[1-9]"
                    },
                    X = function(t) {
                        return parseInt(t, 10)
                    },
                    Y = /^[^{}\\\0-\x1F \t\n\r]/,
                    tt = {
                        type: "class",
                        value: "[^{}\\\\\\0-\\x1F\\x7f \\t\\n\\r]",
                        description: "[^{}\\\\\\0-\\x1F\\x7f \\t\\n\\r]"
                    },
                    et = "\\\\",
                    rt = {
                        type: "literal",
                        value: "\\\\",
                        description: '"\\\\\\\\"'
                    },
                    nt = function() {
                        return "\\"
                    },
                    ot = "\\#",
                    it = {
                        type: "literal",
                        value: "\\#",
                        description: '"\\\\#"'
                    },
                    at = function() {
                        return "\\#"
                    },
                    ut = "\\{",
                    lt = {
                        type: "literal",
                        value: "\\{",
                        description: '"\\\\{"'
                    },
                    st = function() {
                        return "{"
                    },
                    ct = "\\}",
                    ft = {
                        type: "literal",
                        value: "\\}",
                        description: '"\\\\}"'
                    },
                    mt = function() {
                        return "}"
                    },
                    pt = "\\u",
                    ht = {
                        type: "literal",
                        value: "\\u",
                        description: '"\\\\u"'
                    },
                    dt = function(t) {
                        return String.fromCharCode(parseInt(t, 16))
                    },
                    yt = function(t) {
                        return t.join("")
                    },
                    gt = 0,
                    vt = 0,
                    bt = [{
                        line: 1,
                        column: 1,
                        seenCR: !1
                    }],
                    wt = 0,
                    Ft = [],
                    Ot = 0;
                if ("startRule" in t) {
                    if (!(t.startRule in e)) throw new Error("Can't start parsing from rule \"" + t.startRule + '".');
                    r = e[t.startRule]
                }

                function xt() {
                    return At(vt, gt)
                }

                function Ct(t) {
                    var e, r, n = bt[t];
                    if (n) return n;
                    for (e = t - 1; !bt[e];) e--;
                    for (n = {
                            line: (n = bt[e]).line,
                            column: n.column,
                            seenCR: n.seenCR
                        }; e < t;) "\n" === (r = s.charAt(e)) ? (n.seenCR || n.line++, n.column = 1, n.seenCR = !1) : "\r" === r || "\u2028" === r || "\u2029" === r ? (n.line++, n.column = 1, n.seenCR = !0) : (n.column++, n.seenCR = !1), e++;
                    return bt[t] = n
                }

                function At(t, e) {
                    var r = Ct(t),
                        n = Ct(e);
                    return {
                        start: {
                            offset: t,
                            line: r.line,
                            column: r.column
                        },
                        end: {
                            offset: e,
                            line: n.line,
                            column: n.column
                        }
                    }
                }

                function Tt(t) {
                    gt < wt || (wt < gt && (wt = gt, Ft = []), Ft.push(t))
                }

                function _t(t, e, r, n) {
                    return null !== e && function(t) {
                        var e = 1;
                        for (t.sort(function(t, e) {
                                return t.description < e.description ? -1 : t.description > e.description ? 1 : 0
                            }); e < t.length;) t[e - 1] === t[e] ? t.splice(e, 1) : e++
                    }(e), new zt(null !== t ? t : function(t, e) {
                        for (var r = new Array(t.length), n = 0; n < t.length; n++) r[n] = t[n].description;

                        function o(t) {
                            return t.charCodeAt(0).toString(16).toUpperCase()
                        }
                        return "Expected " + (1 < t.length ? r.slice(0, -1).join(", ") + " or " + r[t.length - 1] : r[0]) + " but " + (e ? '"' + e.replace(/\\/g, "\\\\").replace(/"/g, '\\"').replace(/\x08/g, "\\b").replace(/\t/g, "\\t").replace(/\n/g, "\\n").replace(/\f/g, "\\f").replace(/\r/g, "\\r").replace(/[\x00-\x07\x0B\x0E\x0F]/g, function(t) {
                            return "\\x0" + o(t)
                        }).replace(/[\x10-\x1F\x80-\xFF]/g, function(t) {
                            return "\\x" + o(t)
                        }).replace(/[\u0100-\u0FFF]/g, function(t) {
                            return "\\u0" + o(t)
                        }).replace(/[\u1000-\uFFFF]/g, function(t) {
                            return "\\u" + o(t)
                        }) + '"' : "end of input") + " found."
                    }(e, r), e, r, n)
                }

                function kt() {
                    return Dt()
                }

                function Dt() {
                    for (var t = gt, e = [], r = Lt(); r !== c;) e.push(r), r = Lt();
                    return e !== c && (vt = t, e = n(e)), t = e
                }

                function Lt() {
                    var t = function() {
                        var t, e;
                        t = gt, (e = function() {
                            var t, e, r, n, o, i;
                            e = [], r = t = gt, r = (n = Et()) !== c ? (o = Zt(), o !== c ? (i = Et()) !== c ? n = [n, o, i] : (gt = r, c) : (gt = r, c)) : (gt = r, c);
                            if (r !== c)
                                for (; r !== c;) e.push(r), r = gt, n = Et(), r = n !== c ? (o = Zt()) !== c ? (i = Et()) !== c ? n = [n, o, i] : (gt = r, c) : (gt = r, c) : (gt = r, c);
                            else e = c;
                            e !== c && (vt = t, e = a(e));
                            (t = e) === c && (t = gt, e = jt(), t = e !== c ? s.substring(t, gt) : e);
                            return t
                        }()) !== c && (vt = t, e = o(e));
                        return t = e
                    }();
                    return t === c && (t = function() {
                        var t, e, r, n, o, i, a;
                        t = gt, 123 === s.charCodeAt(gt) ? (e = f, gt++) : (e = c, 0 === Ot && Tt(m));
                        t = e !== c ? (a = Et(), a !== c ? (r = function() {
                            var t, e, r;
                            if ((t = Nt()) === c) {
                                if (t = gt, e = [], u.test(s.charAt(gt)) ? (r = s.charAt(gt), gt++) : (r = c, 0 === Ot && Tt(l)), r !== c)
                                    for (; r !== c;) e.push(r), u.test(s.charAt(gt)) ? (r = s.charAt(gt), gt++) : (r = c, 0 === Ot && Tt(l));
                                else e = c;
                                t = e !== c ? s.substring(t, gt) : e
                            }
                            return t
                        }()) !== c ? Et() !== c ? (n = gt, 44 === s.charCodeAt(gt) ? (o = p, gt++) : (o = c, 0 === Ot && Tt(h)), (n = o !== c ? (i = Et()) !== c ? (a = function() {
                            var t;
                            (t = function() {
                                var t, e, r, n, o, i;
                                t = gt, s.substr(gt, 6) === v ? (e = v, gt += 6) : (e = c, 0 === Ot && Tt(b));
                                e === c && (s.substr(gt, 4) === w ? (e = w, gt += 4) : (e = c, 0 === Ot && Tt(F)), e === c && (s.substr(gt, 4) === O ? (e = O, gt += 4) : (e = c, 0 === Ot && Tt(x))));
                                t = e !== c ? (i = Et(), i !== c ? (r = gt, 44 === s.charCodeAt(gt) ? (n = p, gt++) : (n = c, 0 === Ot && Tt(h)), (r = n !== c ? (o = Et()) !== c ? (i = Zt()) !== c ? n = [n, o, i] : (gt = r, c) : (gt = r, c) : (gt = r, c)) === c && (r = null), r !== c ? (vt = t, e = C(e, r)) : (gt = t, c)) : (gt = t, c)) : (gt = t, c);
                                return t
                            }()) === c && (t = function() {
                                var t, e, r, n;
                                t = gt, s.substr(gt, 6) === A ? (e = A, gt += 6) : (e = c, 0 === Ot && Tt(T));
                                t = e !== c ? (r = Et(), r !== c ? (44 === s.charCodeAt(gt) ? (n = p, gt++) : (n = c, 0 === Ot && Tt(h)), n !== c ? Et() !== c ? (n = Pt()) !== c ? (vt = t, e = _(n)) : (gt = t, c) : (gt = t, c) : (gt = t, c)) : (gt = t, c)) : (gt = t, c);
                                return t
                            }()) === c && (t = function() {
                                var t, e, r, n;
                                t = gt, s.substr(gt, 13) === k ? (e = k, gt += 13) : (e = c, 0 === Ot && Tt(D));
                                t = e !== c ? (r = Et(), r !== c ? (44 === s.charCodeAt(gt) ? (n = p, gt++) : (n = c, 0 === Ot && Tt(h)), n !== c ? Et() !== c ? (n = Pt()) !== c ? (vt = t, e = L(n)) : (gt = t, c) : (gt = t, c) : (gt = t, c)) : (gt = t, c)) : (gt = t, c);
                                return t
                            }()) === c && (t = function() {
                                var t, e, r, n, o;
                                t = gt, s.substr(gt, 6) === S ? (e = S, gt += 6) : (e = c, 0 === Ot && Tt(P));
                                if (e !== c)
                                    if (Et() !== c)
                                        if (44 === s.charCodeAt(gt) ? (r = p, gt++) : (r = c, 0 === Ot && Tt(h)), r !== c)
                                            if (Et() !== c) {
                                                if (n = [], (o = St()) !== c)
                                                    for (; o !== c;) n.push(o), o = St();
                                                else n = c;
                                                t = n !== c ? (vt = t, e = j(n)) : (gt = t, c)
                                            } else gt = t, t = c;
                                else gt = t, t = c;
                                else gt = t, t = c;
                                else gt = t, t = c;
                                return t
                            }());
                            return t
                        }()) !== c ? o = [o, i, a] : (gt = n, c) : (gt = n, c) : (gt = n, c)) === c && (n = null), n !== c ? (o = Et()) !== c ? (125 === s.charCodeAt(gt) ? (i = d, gt++) : (i = c, 0 === Ot && Tt(y)), i !== c ? (vt = t, e = g(r, n)) : (gt = t, c)) : (gt = t, c) : (gt = t, c)) : (gt = t, c) : (gt = t, c) : (gt = t, c)) : (gt = t, c);
                        return t
                    }()), t
                }

                function St() {
                    var t, e, r, n, o, i, a, u = gt,
                        l = Et();
                    return u = l !== c ? (a = i = gt, 61 === s.charCodeAt(gt) ? (n = E, gt++) : (n = c, 0 === Ot && Tt(I)), (i = (a = n !== c && (o = Nt()) !== c ? n = [n, o] : (gt = a, c)) !== c ? s.substring(i, gt) : a) === c && (i = Zt()), (i = i) !== c && Et() !== c ? (123 === s.charCodeAt(gt) ? (t = f, gt++) : (t = c, 0 === Ot && Tt(m)), t !== c && Et() !== c && (e = Dt()) !== c && Et() !== c ? (125 === s.charCodeAt(gt) ? (r = d, gt++) : (r = c, 0 === Ot && Tt(y)), r !== c ? (vt = u, R(i, e)) : (gt = u, c)) : (gt = u, c)) : (gt = u, c)) : (gt = u, c)
                }

                function Pt() {
                    var t, e, r, n, o, i = gt;
                    if (o = gt, s.substr(gt, 7) === N ? (r = N, gt += 7) : (r = c, 0 === Ot && Tt(M)), (o = o = r !== c && Et() !== c && (n = Nt()) !== c ? (vt = o, r = Z(n)) : (gt = o, c)) === c && (o = null), o !== c)
                        if (Et() !== c) {
                            if (t = [], (e = St()) !== c)
                                for (; e !== c;) t.push(e), e = St();
                            else t = c;
                            i = t !== c ? (vt = i, o = z(o, t)) : (gt = i, c)
                        } else gt = i, i = c;
                    else gt = i, i = c;
                    return i
                }

                function jt() {
                    var t, e;
                    if (Ot++, t = [], U.test(s.charAt(gt)) ? (e = s.charAt(gt), gt++) : (e = c, 0 === Ot && Tt(W)), e !== c)
                        for (; e !== c;) t.push(e), U.test(s.charAt(gt)) ? (e = s.charAt(gt), gt++) : (e = c, 0 === Ot && Tt(W));
                    else t = c;
                    return Ot--, t === c && (e = c, 0 === Ot && Tt(i)), t
                }

                function Et() {
                    var t, e, r;
                    for (Ot++, t = gt, e = [], r = jt(); r !== c;) e.push(r), r = jt();
                    return t = e !== c ? s.substring(t, gt) : e, Ot--, t === c && (e = c, 0 === Ot && Tt(q)), t
                }

                function It() {
                    var t;
                    return B.test(s.charAt(gt)) ? (t = s.charAt(gt), gt++) : (t = c, 0 === Ot && Tt(J)), t
                }

                function Rt() {
                    var t;
                    return $.test(s.charAt(gt)) ? (t = s.charAt(gt), gt++) : (t = c, 0 === Ot && Tt(G)), t
                }

                function Nt() {
                    var t, e, r, n, o, i = gt;
                    if (48 === s.charCodeAt(gt) ? (t = H, gt++) : (t = c, 0 === Ot && Tt(K)), t === c) {
                        if (e = t = gt, Q.test(s.charAt(gt)) ? (r = s.charAt(gt), gt++) : (r = c, 0 === Ot && Tt(V)), r !== c) {
                            for (n = [], o = It(); o !== c;) n.push(o), o = It();
                            e = n !== c ? r = [r, n] : (gt = e, c)
                        } else gt = e, e = c;
                        t = e !== c ? s.substring(t, gt) : e
                    }
                    return t !== c && (vt = i, t = X(t)), i = t
                }

                function Mt() {
                    var t, e, r, n, o, i, a, u;
                    return Y.test(s.charAt(gt)) ? (t = s.charAt(gt), gt++) : (t = c, 0 === Ot && Tt(tt)), t === c && (t = gt, s.substr(gt, 2) === et ? (e = et, gt += 2) : (e = c, 0 === Ot && Tt(rt)), e !== c && (vt = t, e = nt()), (t = e) === c && (t = gt, s.substr(gt, 2) === ot ? (e = ot, gt += 2) : (e = c, 0 === Ot && Tt(it)), e !== c && (vt = t, e = at()), (t = e) === c && (t = gt, s.substr(gt, 2) === ut ? (e = ut, gt += 2) : (e = c, 0 === Ot && Tt(lt)), e !== c && (vt = t, e = st()), (t = e) === c && (t = gt, s.substr(gt, 2) === ct ? (e = ct, gt += 2) : (e = c, 0 === Ot && Tt(ft)), e !== c && (vt = t, e = mt()), (t = e) === c && (t = gt, s.substr(gt, 2) === pt ? (e = pt, gt += 2) : (e = c, 0 === Ot && Tt(ht)), t = e !== c ? (n = r = gt, (r = (n = (o = Rt()) !== c && (i = Rt()) !== c && (a = Rt()) !== c && (u = Rt()) !== c ? [o, i, a, u] : (gt = n, c)) !== c ? s.substring(r, gt) : n) !== c ? (vt = t, e = dt(r)) : (gt = t, c)) : (gt = t, c)))))), t
                }

                function Zt() {
                    var t = gt,
                        e = [],
                        r = Mt();
                    if (r !== c)
                        for (; r !== c;) e.push(r), r = Mt();
                    else e = c;
                    return e !== c && (vt = t, e = yt(e)), t = e
                }
                if ((r = r()) !== c && gt === s.length) return r;
                throw r !== c && gt < s.length && Tt({
                    type: "end",
                    description: "end of input"
                }), _t(null, Ft, wt < s.length ? s.charAt(wt) : null, wt < s.length ? At(wt, wt + 1) : At(wt, wt))
            }
        }),
        s = c;

    function c(t, e, r) {
        var n = "string" == typeof t ? c.__parse(t) : t;
        if (!n || "messageFormatPattern" !== n.type) throw new TypeError("A message must be provided as a String or AST.");
        r = this._mergeFormats(c.formats, r), Object.defineProperty(this, "_locale", {
            value: this._resolveLocale(e)
        });
        var t = this._findPluralRuleFunction(this._locale),
            o = this._compilePattern(n, e, r, t),
            i = this;
        this.format = function(t) {
            return i._format(o, t)
        }
    }
    Object.defineProperty(c, "formats", {
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
    }), Object.defineProperty(c, "__localeData__", {
        value: Object.create(null)
    }), Object.defineProperty(c, "__addLocaleData", {
        value: function(t) {
            if (!t || !t.locale) throw new Error("Locale data provided to IntlMessageFormat is missing a `locale` property");
            c.__localeData__[t.locale.toLowerCase()] = t
        }
    }), Object.defineProperty(c, "__parse", {
        value: i.parse
    }), Object.defineProperty(c, "defaultLocale", {
        enumerable: !0,
        writable: !0,
        value: void 0
    }), c.prototype.resolvedOptions = function() {
        return {
            locale: this._locale
        }
    }, c.prototype._compilePattern = function(t, e, r, n) {
        return new o(e, r, n).compile(t)
    }, c.prototype._findPluralRuleFunction = function(t) {
        for (var e = c.__localeData__, r = e[t.toLowerCase()]; r;) {
            if (r.pluralRuleFunction) return r.pluralRuleFunction;
            r = r.parentLocale && e[r.parentLocale.toLowerCase()]
        }
        throw new Error("Locale data added to IntlMessageFormat is missing a `pluralRuleFunction` for :" + t)
    }, c.prototype._format = function(t, e) {
        for (var r, n, o = "", i = 0, a = t.length; i < a; i += 1)
            if ("string" != typeof(r = t[i])) {
                if (n = r.id, !e || !Object.prototype.hasOwnProperty.call(e, n)) throw new Error("A value must be provided for: " + n);
                n = e[n], r.options ? o += this._format(r.getOption(n), e) : o += r.format(n)
            } else o += r;
        return o
    }, c.prototype._mergeFormats = function(t, e) {
        var r, n, o = {};
        for (r in t) Object.prototype.hasOwnProperty.call(t, r) && (o[r] = n = Object.create(t[r]), e && Object.prototype.hasOwnProperty.call(e, r) && Object.assign(n, e[r]));
        return o
    }, c.prototype._resolveLocale = function(t) {
        "string" == typeof t && (t = [t]), t = (t || []).concat(c.defaultLocale);
        for (var e, r, n = c.__localeData__, o = 0, i = t.length; o < i; o += 1)
            for (e = t[o].toLowerCase().split("-"); e.length;) {
                if (r = n[e.join("-")]) return r.locale;
                e.pop()
            }
        var a = t.pop();
        throw new Error("No locale data has been added to IntlMessageFormat for: " + t.join(", ") + ", or the default locale: " + a)
    };
    var f = {
            locale: "en",
            pluralRuleFunction: function(t, e) {
                var r = String(t).split("."),
                    n = !r[1],
                    o = Number(r[0]) == t,
                    i = o && r[0].slice(-1),
                    r = o && r[0].slice(-2);
                return e ? 1 == i && 11 != r ? "one" : 2 == i && 12 != r ? "two" : 3 == i && 13 != r ? "few" : "other" : 1 == t && n ? "one" : "other"
            }
        },
        m = Roblox,
        p = "RobloxLocaleCode";

    function h(t) {
        var e = g.indexOf(t) + 1;
        return !(!t || !e)
    }
    var d = 'meta[name="locale-data"]',
        y = "en_us",
        g = ["zh-cn", "zh-tw", "ko-kr", "ja-jp"],
        v = ["zh-tw"],
        b = {
            zh_cjv: "zh_cn"
        },
        w = function(t) {
            return t.replace(/_/g, "-")
        };

    function F() {
        var t, e = "undefined" != typeof localStorage && (m.LocalStorage ? m.LocalStorage.isAvailable() : localStorage && localStorage.getItem && localStorage.setItem),
            r = document.querySelector(d);
        return r && (t = r.dataset ? r.dataset.languageCode : r.getAttribute("data-language-code")), !t && e && (t = localStorage.getItem(p)), t = t || y, e && localStorage.setItem(p, t), t
    }
    var O = {
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
        x = new Date("Aug 17 2003"),
        C = 2017,
        A = [1, 2, 3, 4, 5, 6, 7],
        T = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
        _ = [{
            year: "numeric",
            month: "short",
            day: "numeric"
        }, {
            hour: "numeric",
            minute: "numeric",
            hour12: !0
        }],
        k = {
            month: 0,
            day: 1,
            year: 2
        },
        D = ["narrow", "short", "long"],
        L = ["numeric", "2-digit", "narrow", "short", "long"];

    function S(t, e) {
        for (var r = 0; r < e.length; r++) {
            var n = e[r];
            n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
        }
    }
    var P = function() {
        function e(t) {
            ! function(t) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
            }(this), this.locale = t, this.dateOrdering = {}
        }
        var t, r, n;
        return t = e, (r = [{
            key: "getTimeZone",
            value: function(t) {
                return new Intl.DateTimeFormat(this.locale, t).resolvedOptions().timeZone
            }
        }, {
            key: "getShortDate",
            value: function(t) {
                return this.getCustomDateTime(t)
            }
        }, {
            key: "getFullDate",
            value: function(t, e) {
                e = 1 < arguments.length && void 0 !== e ? e : " | ";
                return this.getCustomDateTime(t, _[0]) + e + this.getCustomDateTime(t, _[1])
            }
        }, {
            key: "getCustomDateTime",
            value: function(t, e) {
                var r = 0 < arguments.length && void 0 !== t ? t : new Date,
                    e = 1 < arguments.length ? e : void 0,
                    n = new Intl.DateTimeFormat(this.locale, e);
                try {
                    return "string" == typeof r || "number" == typeof r ? n.format(new Date(r)) : n.format(r)
                } catch (t) {
                    return ""
                }
            }
        }, {
            key: "getOrderedDateParts",
            value: function(t) {
                var r = this;
                return 0 === Object.keys(this.dateOrdering).length && (t = new Intl.DateTimeFormat(this.locale, t), this.dateOrdering = this.getDefaultDateOrdering(), !t.formatToParts || 3 === (t = t.formatToParts(new Date).filter(function(t) {
                    return "literal" !== t.type
                })).length && t.forEach(function(t, e) {
                    r.dateOrdering[t.type] = e
                })), this.dateOrdering
            }
        }, {
            key: "getDefaultDateOrdering",
            value: function() {
                var r = k,
                    t = this.getShortDate(x),
                    t = [{
                        type: "year",
                        index: t.indexOf("2003")
                    }, {
                        type: "month",
                        index: t.indexOf("8")
                    }, {
                        type: "day",
                        index: t.indexOf("17")
                    }];
                return t.some(function(t) {
                    return -1 === t.index
                }) ? k : ((t = t.sort(function(t, e) {
                    return t.index - e.index
                })).forEach(function(t, e) {
                    r[t.type] = e
                }), r)
            }
        }]) && S(t.prototype, r), n && S(t, n), e
    }();

    function j(t, e) {
        for (var r = 0; r < e.length; r++) {
            var n = e[r];
            n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
        }
    }
    var E = function() {
        function r(t, e) {
            ! function(t) {
                if (!(t instanceof r)) throw new TypeError("Cannot call a class as a function")
            }(this), this.locale = t, this.currency = e
        }
        var t, e, n;
        return t = r, (e = [{
            key: "getCustomNumber",
            value: function(e, t) {
                try {
                    return new Intl.NumberFormat(this.locale, t).format(e)
                } catch (t) {
                    return e
                }
            }
        }]) && j(t.prototype, e), n && j(t, n), r
    }();

    function I(t, e) {
        return t < e ? -1 : e < t ? 1 : 0
    }

    function R(r) {
        return void 0 !== Intl.Collator ? new Intl.Collator(r).compare : function() {
            if (void 0 !== String.prototype.localeCompare) try {
                "foo".localeCompare("bar", "i")
            } catch (t) {
                return "RangeError" === t.name
            }
        }() ? function(t, e) {
            return t.localeCompare(e, r)
        } : I
    }

    function N(t, e, r) {
        return h(t) && r ? 0 <= v.indexOf(t) ? "".concat(e, " ").concat(r) : e + r : e
    }
    var M = function(t) {
        return {
            currency: {
                style: "currency",
                currency: t
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

    function Z(t) {
        return (Z = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
            return typeof t
        } : function(t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
        })(t)
    }

    function z(t, e) {
        for (var r = 0; r < e.length; r++) {
            var n = e[r];
            n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
        }
    }
    s.__addLocaleData(f), s.defaultLocale = "en", i = function() {
        function n(t, e, r) {
            ! function(t) {
                if (!(t instanceof n)) throw new TypeError("Cannot call a class as a function")
            }(this);
            t = t || F();
            this.locale = (t = t, Object.prototype.hasOwnProperty.call(b, t) ? w(b[t]) : w(t)), this.defaultLocale = [this.locale], this.timeZone = e || "America/Los_Angeles", this.currency = r || "USD", this.monthsList = {}, this.weekdaysList = {}, this.langSensitiveCompare = R(this.locale), this.dateTimeFormatter = null, this.numberFormatter = null
        }
        var t, e, r;
        return t = n, (e = [{
            key: "getLocale",
            value: function() {
                return w(this.locale)
            }
        }, {
            key: "getRobloxLocale",
            value: function() {
                return this.locale.replace(/-/g, "_")
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
                return this.dateTimeFormatter || (this.dateTimeFormatter = new P(this.locale)), this.dateTimeFormatter
            }
        }, {
            key: "getNumberFormatter",
            value: function() {
                return this.numberFormatter || (this.numberFormatter = new E(this.defaultLocale, this.currency)), this.numberFormatter
            }
        }, {
            key: "isAsianLanguage",
            value: function() {
                return h(this.locale)
            }
        }, {
            key: "getFormattedDateString",
            value: function(t, e) {
                return N(this.locale, t, e)
            }
        }, {
            key: "getMonthsI18n",
            value: function(t, e) {
                var r, n, o, t = -1 < L.indexOf(t) ? t : "short";
                return this.monthsList[t] && 0 < this.monthsList[t].length || (this.monthsList[t] = (r = this.locale, n = t, o = e, T.map(function(t) {
                    return new Date(C, t - 1)
                }).map(function(t, e) {
                    t = h(r) ? {
                        value: e + 1,
                        name: N(r, e + 1, o)
                    } : {
                        value: e + 1,
                        name: Intl.DateTimeFormat(r, {
                            month: n
                        }).format(t)
                    };
                    return t
                }))), this.monthsList[t]
            }
        }, {
            key: "f",
            value: function(t, e, r) {
                if ("string" != typeof t) throw new TypeError("'message' must be a string");
                return new s(t, this.locale, r).format(e)
            }
        }, {
            key: "d",
            value: function(t, e) {
                if (console.warn("This method has been deprecated in favor of the new DateTimeFormatter API, please do not use it anymore!"), "object" !== Z(t) || !Date.prototype.isPrototypeOf(t)) throw new TypeError("'dateObj' must be a JavaScript date object");
                var r;
                if ("string" == typeof e || void 0 === e) r = O[e] || O.short;
                else {
                    if ("object" !== Z(e)) throw new TypeError("'options' must be either of type string or object based on Intl.DateTimeFormat");
                    r = e
                }
                return this.getDateTimeFormatter().getCustomDateTime(t, r)
            }
        }, {
            key: "n",
            value: function(t, e) {
                if (Number.isNaN(t)) throw new TypeError("The argument 'number' must be of type number");
                var r, n = M(this.currency);
                if ("string" == typeof e || void 0 === e) r = n[e] || n.decimal;
                else {
                    if ("object" !== Z(e)) throw new TypeError("'options' must be of type string or object based on Intl.NumberFormat");
                    r = e
                }
                return this.getNumberFormatter().getCustomNumber(t, r)
            }
        }, {
            key: "getWeekdaysList",
            value: function(t) {
                var r = this,
                    n = -1 < D.indexOf(t) ? t : "short";
                if (this.weekdaysList[n] && 0 < this.weekdaysList[n].length) return this.weekdaysList[n];
                t = A.map(function(t) {
                    return new Date(C, 4, t)
                });
                return this.weekdaysList[n] = t.map(function(t, e) {
                    return {
                        value: e + 1,
                        name: Intl.DateTimeFormat(r.locale, {
                            weekday: n
                        }).format(t)
                    }
                }), this.weekdaysList[n]
            }
        }, {
            key: "getMonthsList",
            value: function(t) {
                var r = this,
                    n = -1 < L.indexOf(t) ? t : "short";
                if (this.monthsList[n] && 0 < this.monthsList[n].length) return this.monthsList[n];
                t = T.map(function(t) {
                    return new Date(C, t - 1)
                });
                return this.monthsList[n] = t.map(function(t, e) {
                    return {
                        value: e + 1,
                        name: Intl.DateTimeFormat(r.locale, {
                            month: n
                        }).format(t)
                    }
                }), this.monthsList[n]
            }
        }]) && z(t.prototype, e), r && z(t, r), n
    }(), (f = window.Roblox || {}).Intl = i, window.Roblox = f
}();
//# sourceMappingURL=https://js.rbxcdn.com/1ed73a8e51cf2bca3a39-internationalCore.js.map

/* Bundle detector */
window.Roblox && window.Roblox.BundleDetector && window.Roblox.BundleDetector.bundleDetected("InternationalCore");