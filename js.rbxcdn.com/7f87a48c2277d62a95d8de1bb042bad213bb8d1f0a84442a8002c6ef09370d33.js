/*! For license information please see challenge.bundle.min.js.LICENSE.txt */ ! function() {
    var e = {
            1135: function(e, t, n) {
                var r;
                e = n.nmd(e);
                var o = function(e) {
                    "use strict";
                    var t = 1e7,
                        n = 9007199254740992,
                        r = p(n),
                        a = "0123456789abcdefghijklmnopqrstuvwxyz",
                        i = "function" == typeof BigInt;

                    function l(e, t, n, r) {
                        return void 0 === e ? l[0] : void 0 !== t && (10 != +t || n) ? B(e, t, n, r) : Y(e)
                    }

                    function u(e, t) {
                        this.value = e, this.sign = t, this.isSmall = !1
                    }

                    function s(e) {
                        this.value = e, this.sign = e < 0, this.isSmall = !0
                    }

                    function c(e) {
                        this.value = e
                    }

                    function d(e) {
                        return -n < e && e < n
                    }

                    function p(e) {
                        return e < 1e7 ? [e] : e < 1e14 ? [e % 1e7, Math.floor(e / 1e7)] : [e % 1e7, Math.floor(e / 1e7) % 1e7, Math.floor(e / 1e14)]
                    }

                    function f(e) {
                        h(e);
                        var n = e.length;
                        if (n < 4 && D(e, r) < 0) switch (n) {
                            case 0:
                                return 0;
                            case 1:
                                return e[0];
                            case 2:
                                return e[0] + e[1] * t;
                            default:
                                return e[0] + (e[1] + e[2] * t) * t
                        }
                        return e
                    }

                    function h(e) {
                        for (var t = e.length; 0 === e[--t];);
                        e.length = t + 1
                    }

                    function y(e) {
                        for (var t = new Array(e), n = -1; ++n < e;) t[n] = 0;
                        return t
                    }

                    function v(e) {
                        return e > 0 ? Math.floor(e) : Math.ceil(e)
                    }

                    function m(e, n) {
                        var r, o, a = e.length,
                            i = n.length,
                            l = new Array(a),
                            u = 0,
                            s = t;
                        for (o = 0; o < i; o++) u = (r = e[o] + n[o] + u) >= s ? 1 : 0, l[o] = r - u * s;
                        for (; o < a;) u = (r = e[o] + u) === s ? 1 : 0, l[o++] = r - u * s;
                        return u > 0 && l.push(u), l
                    }

                    function E(e, t) {
                        return e.length >= t.length ? m(e, t) : m(t, e)
                    }

                    function g(e, n) {
                        var r, o, a = e.length,
                            i = new Array(a),
                            l = t;
                        for (o = 0; o < a; o++) r = e[o] - l + n, n = Math.floor(r / l), i[o] = r - n * l, n += 1;
                        for (; n > 0;) i[o++] = n % l, n = Math.floor(n / l);
                        return i
                    }

                    function b(e, n) {
                        var r, o, a = e.length,
                            i = n.length,
                            l = new Array(a),
                            u = 0,
                            s = t;
                        for (r = 0; r < i; r++)(o = e[r] - u - n[r]) < 0 ? (o += s, u = 1) : u = 0, l[r] = o;
                        for (r = i; r < a; r++) {
                            if (!((o = e[r] - u) < 0)) {
                                l[r++] = o;
                                break
                            }
                            o += s, l[r] = o
                        }
                        for (; r < a; r++) l[r] = e[r];
                        return h(l), l
                    }

                    function _(e, n, r) {
                        var o, a, i = e.length,
                            l = new Array(i),
                            c = -n,
                            d = t;
                        for (o = 0; o < i; o++) a = e[o] + c, c = Math.floor(a / d), a %= d, l[o] = a < 0 ? a + d : a;
                        return "number" == typeof(l = f(l)) ? (r && (l = -l), new s(l)) : new u(l, r)
                    }

                    function C(e, n) {
                        var r, o, a, i, l = e.length,
                            u = n.length,
                            s = y(l + u),
                            c = t;
                        for (a = 0; a < l; ++a) {
                            i = e[a];
                            for (var d = 0; d < u; ++d) r = i * n[d] + s[a + d], o = Math.floor(r / c), s[a + d] = r - o * c, s[a + d + 1] += o
                        }
                        return h(s), s
                    }

                    function S(e, n) {
                        var r, o, a = e.length,
                            i = new Array(a),
                            l = t,
                            u = 0;
                        for (o = 0; o < a; o++) r = e[o] * n + u, u = Math.floor(r / l), i[o] = r - u * l;
                        for (; u > 0;) i[o++] = u % l, u = Math.floor(u / l);
                        return i
                    }

                    function T(e, t) {
                        for (var n = []; t-- > 0;) n.push(0);
                        return n.concat(e)
                    }

                    function I(e, t) {
                        var n = Math.max(e.length, t.length);
                        if (n <= 30) return C(e, t);
                        n = Math.ceil(n / 2);
                        var r = e.slice(n),
                            o = e.slice(0, n),
                            a = t.slice(n),
                            i = t.slice(0, n),
                            l = I(o, i),
                            u = I(r, a),
                            s = I(E(o, r), E(i, a)),
                            c = E(E(l, T(b(b(s, l), u), n)), T(u, 2 * n));
                        return h(c), c
                    }

                    function N(e, n, r) {
                        return new u(e < t ? S(n, e) : C(n, p(e)), r)
                    }

                    function w(e) {
                        var n, r, o, a, i = e.length,
                            l = y(i + i),
                            u = t;
                        for (o = 0; o < i; o++) {
                            r = 0 - (a = e[o]) * a;
                            for (var s = o; s < i; s++) n = a * e[s] * 2 + l[o + s] + r, r = Math.floor(n / u), l[o + s] = n - r * u;
                            l[o + i] = r
                        }
                        return h(l), l
                    }

                    function A(e, t) {
                        var n, r, o, a, i = e.length,
                            l = y(i);
                        for (o = 0, n = i - 1; n >= 0; --n) o = (a = 1e7 * o + e[n]) - (r = v(a / t)) * t, l[n] = 0 | r;
                        return [l, 0 | o]
                    }

                    function O(e, n) {
                        var r, o = Y(n);
                        if (i) return [new c(e.value / o.value), new c(e.value % o.value)];
                        var a, d = e.value,
                            m = o.value;
                        if (0 === m) throw new Error("Cannot divide by zero");
                        if (e.isSmall) return o.isSmall ? [new s(v(d / m)), new s(d % m)] : [l[0], e];
                        if (o.isSmall) {
                            if (1 === m) return [e, l[0]];
                            if (-1 == m) return [e.negate(), l[0]];
                            var E = Math.abs(m);
                            if (E < t) {
                                a = f((r = A(d, E))[0]);
                                var g = r[1];
                                return e.sign && (g = -g), "number" == typeof a ? (e.sign !== o.sign && (a = -a), [new s(a), new s(g)]) : [new u(a, e.sign !== o.sign), new s(g)]
                            }
                            m = p(E)
                        }
                        var _ = D(d, m);
                        if (-1 === _) return [l[0], e];
                        if (0 === _) return [l[e.sign === o.sign ? 1 : -1], l[0]];
                        a = (r = d.length + m.length <= 200 ? function(e, n) {
                            var r, o, a, i, l, u, s, c = e.length,
                                d = n.length,
                                p = t,
                                h = y(n.length),
                                v = n[d - 1],
                                m = Math.ceil(p / (2 * v)),
                                E = S(e, m),
                                g = S(n, m);
                            for (E.length <= c && E.push(0), g.push(0), v = g[d - 1], o = c - d; o >= 0; o--) {
                                for (r = p - 1, E[o + d] !== v && (r = Math.floor((E[o + d] * p + E[o + d - 1]) / v)), a = 0, i = 0, u = g.length, l = 0; l < u; l++) a += r * g[l], s = Math.floor(a / p), i += E[o + l] - (a - s * p), a = s, i < 0 ? (E[o + l] = i + p, i = -1) : (E[o + l] = i, i = 0);
                                for (; 0 !== i;) {
                                    for (r -= 1, a = 0, l = 0; l < u; l++)(a += E[o + l] - p + g[l]) < 0 ? (E[o + l] = a + p, a = 0) : (E[o + l] = a, a = 1);
                                    i += a
                                }
                                h[o] = r
                            }
                            return E = A(E, m)[0], [f(h), f(E)]
                        }(d, m) : function(e, n) {
                            for (var r, o, a, i, l, u = e.length, s = n.length, c = [], d = [], p = t; u;)
                                if (d.unshift(e[--u]), h(d), D(d, n) < 0) c.push(0);
                                else {
                                    a = d[(o = d.length) - 1] * p + d[o - 2], i = n[s - 1] * p + n[s - 2], o > s && (a = (a + 1) * p), r = Math.ceil(a / i);
                                    do {
                                        if (D(l = S(n, r), d) <= 0) break;
                                        r--
                                    } while (r);
                                    c.push(r), d = b(d, l)
                                }
                            return c.reverse(), [f(c), f(d)]
                        }(d, m))[0];
                        var C = e.sign !== o.sign,
                            T = r[1],
                            I = e.sign;
                        return "number" == typeof a ? (C && (a = -a), a = new s(a)) : a = new u(a, C), "number" == typeof T ? (I && (T = -T), T = new s(T)) : T = new u(T, I), [a, T]
                    }

                    function D(e, t) {
                        if (e.length !== t.length) return e.length > t.length ? 1 : -1;
                        for (var n = e.length - 1; n >= 0; n--)
                            if (e[n] !== t[n]) return e[n] > t[n] ? 1 : -1;
                        return 0
                    }

                    function L(e) {
                        var t = e.abs();
                        return !t.isUnit() && (!!(t.equals(2) || t.equals(3) || t.equals(5)) || !(t.isEven() || t.isDivisibleBy(3) || t.isDivisibleBy(5)) && (!!t.lesser(49) || void 0))
                    }

                    function x(e, t) {
                        for (var n, r, a, i = e.prev(), l = i, u = 0; l.isEven();) l = l.divide(2), u++;
                        e: for (r = 0; r < t.length; r++)
                            if (!e.lesser(t[r]) && !(a = o(t[r]).modPow(l, e)).isUnit() && !a.equals(i)) {
                                for (n = u - 1; 0 != n; n--) {
                                    if ((a = a.square().mod(e)).isUnit()) return !1;
                                    if (a.equals(i)) continue e
                                }
                                return !1
                            }
                        return !0
                    }
                    u.prototype = Object.create(l.prototype), s.prototype = Object.create(l.prototype), c.prototype = Object.create(l.prototype), u.prototype.add = function(e) {
                        var t = Y(e);
                        if (this.sign !== t.sign) return this.subtract(t.negate());
                        var n = this.value,
                            r = t.value;
                        return t.isSmall ? new u(g(n, Math.abs(r)), this.sign) : new u(E(n, r), this.sign)
                    }, u.prototype.plus = u.prototype.add, s.prototype.add = function(e) {
                        var t = Y(e),
                            n = this.value;
                        if (n < 0 !== t.sign) return this.subtract(t.negate());
                        var r = t.value;
                        if (t.isSmall) {
                            if (d(n + r)) return new s(n + r);
                            r = p(Math.abs(r))
                        }
                        return new u(g(r, Math.abs(n)), n < 0)
                    }, s.prototype.plus = s.prototype.add, c.prototype.add = function(e) {
                        return new c(this.value + Y(e).value)
                    }, c.prototype.plus = c.prototype.add, u.prototype.subtract = function(e) {
                        var t = Y(e);
                        if (this.sign !== t.sign) return this.add(t.negate());
                        var n = this.value,
                            r = t.value;
                        return t.isSmall ? _(n, Math.abs(r), this.sign) : function(e, t, n) {
                            var r;
                            return D(e, t) >= 0 ? r = b(e, t) : (r = b(t, e), n = !n), "number" == typeof(r = f(r)) ? (n && (r = -r), new s(r)) : new u(r, n)
                        }(n, r, this.sign)
                    }, u.prototype.minus = u.prototype.subtract, s.prototype.subtract = function(e) {
                        var t = Y(e),
                            n = this.value;
                        if (n < 0 !== t.sign) return this.add(t.negate());
                        var r = t.value;
                        return t.isSmall ? new s(n - r) : _(r, Math.abs(n), n >= 0)
                    }, s.prototype.minus = s.prototype.subtract, c.prototype.subtract = function(e) {
                        return new c(this.value - Y(e).value)
                    }, c.prototype.minus = c.prototype.subtract, u.prototype.negate = function() {
                        return new u(this.value, !this.sign)
                    }, s.prototype.negate = function() {
                        var e = this.sign,
                            t = new s(-this.value);
                        return t.sign = !e, t
                    }, c.prototype.negate = function() {
                        return new c(-this.value)
                    }, u.prototype.abs = function() {
                        return new u(this.value, !1)
                    }, s.prototype.abs = function() {
                        return new s(Math.abs(this.value))
                    }, c.prototype.abs = function() {
                        return new c(this.value >= 0 ? this.value : -this.value)
                    }, u.prototype.multiply = function(e) {
                        var n, r, o, a = Y(e),
                            i = this.value,
                            s = a.value,
                            c = this.sign !== a.sign;
                        if (a.isSmall) {
                            if (0 === s) return l[0];
                            if (1 === s) return this;
                            if (-1 === s) return this.negate();
                            if ((n = Math.abs(s)) < t) return new u(S(i, n), c);
                            s = p(n)
                        }
                        return r = i.length, o = s.length, new u(-.012 * r - .012 * o + 15e-6 * r * o > 0 ? I(i, s) : C(i, s), c)
                    }, u.prototype.times = u.prototype.multiply, s.prototype._multiplyBySmall = function(e) {
                        return d(e.value * this.value) ? new s(e.value * this.value) : N(Math.abs(e.value), p(Math.abs(this.value)), this.sign !== e.sign)
                    }, u.prototype._multiplyBySmall = function(e) {
                        return 0 === e.value ? l[0] : 1 === e.value ? this : -1 === e.value ? this.negate() : N(Math.abs(e.value), this.value, this.sign !== e.sign)
                    }, s.prototype.multiply = function(e) {
                        return Y(e)._multiplyBySmall(this)
                    }, s.prototype.times = s.prototype.multiply, c.prototype.multiply = function(e) {
                        return new c(this.value * Y(e).value)
                    }, c.prototype.times = c.prototype.multiply, u.prototype.square = function() {
                        return new u(w(this.value), !1)
                    }, s.prototype.square = function() {
                        var e = this.value * this.value;
                        return d(e) ? new s(e) : new u(w(p(Math.abs(this.value))), !1)
                    }, c.prototype.square = function(e) {
                        return new c(this.value * this.value)
                    }, u.prototype.divmod = function(e) {
                        var t = O(this, e);
                        return {
                            quotient: t[0],
                            remainder: t[1]
                        }
                    }, c.prototype.divmod = s.prototype.divmod = u.prototype.divmod, u.prototype.divide = function(e) {
                        return O(this, e)[0]
                    }, c.prototype.over = c.prototype.divide = function(e) {
                        return new c(this.value / Y(e).value)
                    }, s.prototype.over = s.prototype.divide = u.prototype.over = u.prototype.divide, u.prototype.mod = function(e) {
                        return O(this, e)[1]
                    }, c.prototype.mod = c.prototype.remainder = function(e) {
                        return new c(this.value % Y(e).value)
                    }, s.prototype.remainder = s.prototype.mod = u.prototype.remainder = u.prototype.mod, u.prototype.pow = function(e) {
                        var t, n, r, o = Y(e),
                            a = this.value,
                            i = o.value;
                        if (0 === i) return l[1];
                        if (0 === a) return l[0];
                        if (1 === a) return l[1];
                        if (-1 === a) return o.isEven() ? l[1] : l[-1];
                        if (o.sign) return l[0];
                        if (!o.isSmall) throw new Error("The exponent " + o.toString() + " is too large.");
                        if (this.isSmall && d(t = Math.pow(a, i))) return new s(v(t));
                        for (n = this, r = l[1]; !0 & i && (r = r.times(n), --i), 0 !== i;) i /= 2, n = n.square();
                        return r
                    }, s.prototype.pow = u.prototype.pow, c.prototype.pow = function(e) {
                        var t = Y(e),
                            n = this.value,
                            r = t.value,
                            o = BigInt(0),
                            a = BigInt(1),
                            i = BigInt(2);
                        if (r === o) return l[1];
                        if (n === o) return l[0];
                        if (n === a) return l[1];
                        if (n === BigInt(-1)) return t.isEven() ? l[1] : l[-1];
                        if (t.isNegative()) return new c(o);
                        for (var u = this, s = l[1];
                            (r & a) === a && (s = s.times(u), --r), r !== o;) r /= i, u = u.square();
                        return s
                    }, u.prototype.modPow = function(e, t) {
                        if (e = Y(e), (t = Y(t)).isZero()) throw new Error("Cannot take modPow with modulus 0");
                        var n = l[1],
                            r = this.mod(t);
                        for (e.isNegative() && (e = e.multiply(l[-1]), r = r.modInv(t)); e.isPositive();) {
                            if (r.isZero()) return l[0];
                            e.isOdd() && (n = n.multiply(r).mod(t)), e = e.divide(2), r = r.square().mod(t)
                        }
                        return n
                    }, c.prototype.modPow = s.prototype.modPow = u.prototype.modPow, u.prototype.compareAbs = function(e) {
                        var t = Y(e),
                            n = this.value,
                            r = t.value;
                        return t.isSmall ? 1 : D(n, r)
                    }, s.prototype.compareAbs = function(e) {
                        var t = Y(e),
                            n = Math.abs(this.value),
                            r = t.value;
                        return t.isSmall ? n === (r = Math.abs(r)) ? 0 : n > r ? 1 : -1 : -1
                    }, c.prototype.compareAbs = function(e) {
                        var t = this.value,
                            n = Y(e).value;
                        return (t = t >= 0 ? t : -t) === (n = n >= 0 ? n : -n) ? 0 : t > n ? 1 : -1
                    }, u.prototype.compare = function(e) {
                        if (e === 1 / 0) return -1;
                        if (e === -1 / 0) return 1;
                        var t = Y(e),
                            n = this.value,
                            r = t.value;
                        return this.sign !== t.sign ? t.sign ? 1 : -1 : t.isSmall ? this.sign ? -1 : 1 : D(n, r) * (this.sign ? -1 : 1)
                    }, u.prototype.compareTo = u.prototype.compare, s.prototype.compare = function(e) {
                        if (e === 1 / 0) return -1;
                        if (e === -1 / 0) return 1;
                        var t = Y(e),
                            n = this.value,
                            r = t.value;
                        return t.isSmall ? n == r ? 0 : n > r ? 1 : -1 : n < 0 !== t.sign ? n < 0 ? -1 : 1 : n < 0 ? 1 : -1
                    }, s.prototype.compareTo = s.prototype.compare, c.prototype.compare = function(e) {
                        if (e === 1 / 0) return -1;
                        if (e === -1 / 0) return 1;
                        var t = this.value,
                            n = Y(e).value;
                        return t === n ? 0 : t > n ? 1 : -1
                    }, c.prototype.compareTo = c.prototype.compare, u.prototype.equals = function(e) {
                        return 0 === this.compare(e)
                    }, c.prototype.eq = c.prototype.equals = s.prototype.eq = s.prototype.equals = u.prototype.eq = u.prototype.equals, u.prototype.notEquals = function(e) {
                        return 0 !== this.compare(e)
                    }, c.prototype.neq = c.prototype.notEquals = s.prototype.neq = s.prototype.notEquals = u.prototype.neq = u.prototype.notEquals, u.prototype.greater = function(e) {
                        return this.compare(e) > 0
                    }, c.prototype.gt = c.prototype.greater = s.prototype.gt = s.prototype.greater = u.prototype.gt = u.prototype.greater, u.prototype.lesser = function(e) {
                        return this.compare(e) < 0
                    }, c.prototype.lt = c.prototype.lesser = s.prototype.lt = s.prototype.lesser = u.prototype.lt = u.prototype.lesser, u.prototype.greaterOrEquals = function(e) {
                        return this.compare(e) >= 0
                    }, c.prototype.geq = c.prototype.greaterOrEquals = s.prototype.geq = s.prototype.greaterOrEquals = u.prototype.geq = u.prototype.greaterOrEquals, u.prototype.lesserOrEquals = function(e) {
                        return this.compare(e) <= 0
                    }, c.prototype.leq = c.prototype.lesserOrEquals = s.prototype.leq = s.prototype.lesserOrEquals = u.prototype.leq = u.prototype.lesserOrEquals, u.prototype.isEven = function() {
                        return 0 == (1 & this.value[0])
                    }, s.prototype.isEven = function() {
                        return 0 == (1 & this.value)
                    }, c.prototype.isEven = function() {
                        return (this.value & BigInt(1)) === BigInt(0)
                    }, u.prototype.isOdd = function() {
                        return 1 == (1 & this.value[0])
                    }, s.prototype.isOdd = function() {
                        return 1 == (1 & this.value)
                    }, c.prototype.isOdd = function() {
                        return (this.value & BigInt(1)) === BigInt(1)
                    }, u.prototype.isPositive = function() {
                        return !this.sign
                    }, s.prototype.isPositive = function() {
                        return this.value > 0
                    }, c.prototype.isPositive = s.prototype.isPositive, u.prototype.isNegative = function() {
                        return this.sign
                    }, s.prototype.isNegative = function() {
                        return this.value < 0
                    }, c.prototype.isNegative = s.prototype.isNegative, u.prototype.isUnit = function() {
                        return !1
                    }, s.prototype.isUnit = function() {
                        return 1 === Math.abs(this.value)
                    }, c.prototype.isUnit = function() {
                        return this.abs().value === BigInt(1)
                    }, u.prototype.isZero = function() {
                        return !1
                    }, s.prototype.isZero = function() {
                        return 0 === this.value
                    }, c.prototype.isZero = function() {
                        return this.value === BigInt(0)
                    }, u.prototype.isDivisibleBy = function(e) {
                        var t = Y(e);
                        return !t.isZero() && (!!t.isUnit() || (0 === t.compareAbs(2) ? this.isEven() : this.mod(t).isZero()))
                    }, c.prototype.isDivisibleBy = s.prototype.isDivisibleBy = u.prototype.isDivisibleBy, u.prototype.isPrime = function(t) {
                        var n = L(this);
                        if (n !== e) return n;
                        var r = this.abs(),
                            a = r.bitLength();
                        if (a <= 64) return x(r, [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37]);
                        for (var i = Math.log(2) * a.toJSNumber(), l = Math.ceil(!0 === t ? 2 * Math.pow(i, 2) : i), u = [], s = 0; s < l; s++) u.push(o(s + 2));
                        return x(r, u)
                    }, c.prototype.isPrime = s.prototype.isPrime = u.prototype.isPrime, u.prototype.isProbablePrime = function(t, n) {
                        var r = L(this);
                        if (r !== e) return r;
                        for (var a = this.abs(), i = t === e ? 5 : t, l = [], u = 0; u < i; u++) l.push(o.randBetween(2, a.minus(2), n));
                        return x(a, l)
                    }, c.prototype.isProbablePrime = s.prototype.isProbablePrime = u.prototype.isProbablePrime, u.prototype.modInv = function(e) {
                        for (var t, n, r, a = o.zero, i = o.one, l = Y(e), u = this.abs(); !u.isZero();) t = l.divide(u), n = a, r = l, a = i, l = u, i = n.subtract(t.multiply(i)), u = r.subtract(t.multiply(u));
                        if (!l.isUnit()) throw new Error(this.toString() + " and " + e.toString() + " are not co-prime");
                        return -1 === a.compare(0) && (a = a.add(e)), this.isNegative() ? a.negate() : a
                    }, c.prototype.modInv = s.prototype.modInv = u.prototype.modInv, u.prototype.next = function() {
                        var e = this.value;
                        return this.sign ? _(e, 1, this.sign) : new u(g(e, 1), this.sign)
                    }, s.prototype.next = function() {
                        var e = this.value;
                        return e + 1 < n ? new s(e + 1) : new u(r, !1)
                    }, c.prototype.next = function() {
                        return new c(this.value + BigInt(1))
                    }, u.prototype.prev = function() {
                        var e = this.value;
                        return this.sign ? new u(g(e, 1), !0) : _(e, 1, this.sign)
                    }, s.prototype.prev = function() {
                        var e = this.value;
                        return e - 1 > -n ? new s(e - 1) : new u(r, !0)
                    }, c.prototype.prev = function() {
                        return new c(this.value - BigInt(1))
                    };
                    for (var P = [1]; 2 * P[P.length - 1] <= t;) P.push(2 * P[P.length - 1]);
                    var R = P.length,
                        M = P[R - 1];

                    function k(e) {
                        return Math.abs(e) <= t
                    }

                    function U(e, t, n) {
                        t = Y(t);
                        for (var r = e.isNegative(), a = t.isNegative(), i = r ? e.not() : e, l = a ? t.not() : t, u = 0, s = 0, c = null, d = null, p = []; !i.isZero() || !l.isZero();) u = (c = O(i, M))[1].toJSNumber(), r && (u = M - 1 - u), s = (d = O(l, M))[1].toJSNumber(), a && (s = M - 1 - s), i = c[0], l = d[0], p.push(n(u, s));
                        for (var f = 0 !== n(r ? 1 : 0, a ? 1 : 0) ? o(-1) : o(0), h = p.length - 1; h >= 0; h -= 1) f = f.multiply(M).add(o(p[h]));
                        return f
                    }
                    u.prototype.shiftLeft = function(e) {
                        var t = Y(e).toJSNumber();
                        if (!k(t)) throw new Error(String(t) + " is too large for shifting.");
                        if (t < 0) return this.shiftRight(-t);
                        var n = this;
                        if (n.isZero()) return n;
                        for (; t >= R;) n = n.multiply(M), t -= R - 1;
                        return n.multiply(P[t])
                    }, c.prototype.shiftLeft = s.prototype.shiftLeft = u.prototype.shiftLeft, u.prototype.shiftRight = function(e) {
                        var t, n = Y(e).toJSNumber();
                        if (!k(n)) throw new Error(String(n) + " is too large for shifting.");
                        if (n < 0) return this.shiftLeft(-n);
                        for (var r = this; n >= R;) {
                            if (r.isZero() || r.isNegative() && r.isUnit()) return r;
                            r = (t = O(r, M))[1].isNegative() ? t[0].prev() : t[0], n -= R - 1
                        }
                        return (t = O(r, P[n]))[1].isNegative() ? t[0].prev() : t[0]
                    }, c.prototype.shiftRight = s.prototype.shiftRight = u.prototype.shiftRight, u.prototype.not = function() {
                        return this.negate().prev()
                    }, c.prototype.not = s.prototype.not = u.prototype.not, u.prototype.and = function(e) {
                        return U(this, e, (function(e, t) {
                            return e & t
                        }))
                    }, c.prototype.and = s.prototype.and = u.prototype.and, u.prototype.or = function(e) {
                        return U(this, e, (function(e, t) {
                            return e | t
                        }))
                    }, c.prototype.or = s.prototype.or = u.prototype.or, u.prototype.xor = function(e) {
                        return U(this, e, (function(e, t) {
                            return e ^ t
                        }))
                    }, c.prototype.xor = s.prototype.xor = u.prototype.xor;
                    var H = 1 << 30;

                    function V(e) {
                        var n = e.value,
                            r = "number" == typeof n ? n | H : "bigint" == typeof n ? n | BigInt(H) : n[0] + n[1] * t | 1073758208;
                        return r & -r
                    }

                    function G(e, t) {
                        if (t.compareTo(e) <= 0) {
                            var n = G(e, t.square(t)),
                                r = n.p,
                                a = n.e,
                                i = r.multiply(t);
                            return i.compareTo(e) <= 0 ? {
                                p: i,
                                e: 2 * a + 1
                            } : {
                                p: r,
                                e: 2 * a
                            }
                        }
                        return {
                            p: o(1),
                            e: 0
                        }
                    }

                    function W(e, t) {
                        return e = Y(e), t = Y(t), e.greater(t) ? e : t
                    }

                    function F(e, t) {
                        return e = Y(e), t = Y(t), e.lesser(t) ? e : t
                    }

                    function j(e, t) {
                        if (e = Y(e).abs(), t = Y(t).abs(), e.equals(t)) return e;
                        if (e.isZero()) return t;
                        if (t.isZero()) return e;
                        for (var n, r, o = l[1]; e.isEven() && t.isEven();) n = F(V(e), V(t)), e = e.divide(n), t = t.divide(n), o = o.multiply(n);
                        for (; e.isEven();) e = e.divide(V(e));
                        do {
                            for (; t.isEven();) t = t.divide(V(t));
                            e.greater(t) && (r = t, t = e, e = r), t = t.subtract(e)
                        } while (!t.isZero());
                        return o.isUnit() ? e : e.multiply(o)
                    }
                    u.prototype.bitLength = function() {
                        var e = this;
                        return e.compareTo(o(0)) < 0 && (e = e.negate().subtract(o(1))), 0 === e.compareTo(o(0)) ? o(0) : o(G(e, o(2)).e).add(o(1))
                    }, c.prototype.bitLength = s.prototype.bitLength = u.prototype.bitLength;
                    var B = function(e, t, n, r) {
                        n = n || a, e = String(e), r || (e = e.toLowerCase(), n = n.toLowerCase());
                        var o, i = e.length,
                            l = Math.abs(t),
                            u = {};
                        for (o = 0; o < n.length; o++) u[n[o]] = o;
                        for (o = 0; o < i; o++) {
                            if ("-" !== (d = e[o]) && (d in u && u[d] >= l)) {
                                if ("1" === d && 1 === l) continue;
                                throw new Error(d + " is not a valid digit in base " + t + ".")
                            }
                        }
                        t = Y(t);
                        var s = [],
                            c = "-" === e[0];
                        for (o = c ? 1 : 0; o < e.length; o++) {
                            var d;
                            if ((d = e[o]) in u) s.push(Y(u[d]));
                            else {
                                if ("<" !== d) throw new Error(d + " is not a valid character");
                                var p = o;
                                do {
                                    o++
                                } while (">" !== e[o] && o < e.length);
                                s.push(Y(e.slice(p + 1, o)))
                            }
                        }
                        return q(s, t, c)
                    };

                    function q(e, t, n) {
                        var r, o = l[0],
                            a = l[1];
                        for (r = e.length - 1; r >= 0; r--) o = o.add(e[r].times(a)), a = a.times(t);
                        return n ? o.negate() : o
                    }

                    function z(e, t) {
                        if ((t = o(t)).isZero()) {
                            if (e.isZero()) return {
                                value: [0],
                                isNegative: !1
                            };
                            throw new Error("Cannot convert nonzero numbers to base 0.")
                        }
                        if (t.equals(-1)) {
                            if (e.isZero()) return {
                                value: [0],
                                isNegative: !1
                            };
                            if (e.isNegative()) return {
                                value: [].concat.apply([], Array.apply(null, Array(-e.toJSNumber())).map(Array.prototype.valueOf, [1, 0])),
                                isNegative: !1
                            };
                            var n = Array.apply(null, Array(e.toJSNumber() - 1)).map(Array.prototype.valueOf, [0, 1]);
                            return n.unshift([1]), {
                                value: [].concat.apply([], n),
                                isNegative: !1
                            }
                        }
                        var r = !1;
                        if (e.isNegative() && t.isPositive() && (r = !0, e = e.abs()), t.isUnit()) return e.isZero() ? {
                            value: [0],
                            isNegative: !1
                        } : {
                            value: Array.apply(null, Array(e.toJSNumber())).map(Number.prototype.valueOf, 1),
                            isNegative: r
                        };
                        for (var a, i = [], l = e; l.isNegative() || l.compareAbs(t) >= 0;) {
                            a = l.divmod(t), l = a.quotient;
                            var u = a.remainder;
                            u.isNegative() && (u = t.minus(u).abs(), l = l.next()), i.push(u.toJSNumber())
                        }
                        return i.push(l.toJSNumber()), {
                            value: i.reverse(),
                            isNegative: r
                        }
                    }

                    function K(e, t, n) {
                        var r = z(e, t);
                        return (r.isNegative ? "-" : "") + r.value.map((function(e) {
                            return function(e, t) {
                                return e < (t = t || a).length ? t[e] : "<" + e + ">"
                            }(e, n)
                        })).join("")
                    }

                    function Z(e) {
                        if (d(+e)) {
                            var t = +e;
                            if (t === v(t)) return i ? new c(BigInt(t)) : new s(t);
                            throw new Error("Invalid integer: " + e)
                        }
                        var n = "-" === e[0];
                        n && (e = e.slice(1));
                        var r = e.split(/e/i);
                        if (r.length > 2) throw new Error("Invalid integer: " + r.join("e"));
                        if (2 === r.length) {
                            var o = r[1];
                            if ("+" === o[0] && (o = o.slice(1)), (o = +o) !== v(o) || !d(o)) throw new Error("Invalid integer: " + o + " is not a valid exponent.");
                            var a = r[0],
                                l = a.indexOf(".");
                            if (l >= 0 && (o -= a.length - l - 1, a = a.slice(0, l) + a.slice(l + 1)), o < 0) throw new Error("Cannot include negative exponent part for integers");
                            e = a += new Array(o + 1).join("0")
                        }
                        if (!/^([0-9][0-9]*)$/.test(e)) throw new Error("Invalid integer: " + e);
                        if (i) return new c(BigInt(n ? "-" + e : e));
                        for (var p = [], f = e.length, y = f - 7; f > 0;) p.push(+e.slice(y, f)), (y -= 7) < 0 && (y = 0), f -= 7;
                        return h(p), new u(p, n)
                    }

                    function Y(e) {
                        return "number" == typeof e ? function(e) {
                            if (i) return new c(BigInt(e));
                            if (d(e)) {
                                if (e !== v(e)) throw new Error(e + " is not an integer.");
                                return new s(e)
                            }
                            return Z(e.toString())
                        }(e) : "string" == typeof e ? Z(e) : "bigint" == typeof e ? new c(e) : e
                    }
                    u.prototype.toArray = function(e) {
                        return z(this, e)
                    }, s.prototype.toArray = function(e) {
                        return z(this, e)
                    }, c.prototype.toArray = function(e) {
                        return z(this, e)
                    }, u.prototype.toString = function(t, n) {
                        if (t === e && (t = 10), 10 !== t) return K(this, t, n);
                        for (var r, o = this.value, a = o.length, i = String(o[--a]); --a >= 0;) r = String(o[a]), i += "0000000".slice(r.length) + r;
                        return (this.sign ? "-" : "") + i
                    }, s.prototype.toString = function(t, n) {
                        return t === e && (t = 10), 10 != t ? K(this, t, n) : String(this.value)
                    }, c.prototype.toString = s.prototype.toString, c.prototype.toJSON = u.prototype.toJSON = s.prototype.toJSON = function() {
                        return this.toString()
                    }, u.prototype.valueOf = function() {
                        return parseInt(this.toString(), 10)
                    }, u.prototype.toJSNumber = u.prototype.valueOf, s.prototype.valueOf = function() {
                        return this.value
                    }, s.prototype.toJSNumber = s.prototype.valueOf, c.prototype.valueOf = c.prototype.toJSNumber = function() {
                        return parseInt(this.toString(), 10)
                    };
                    for (var $ = 0; $ < 1e3; $++) l[$] = Y($), $ > 0 && (l[-$] = Y(-$));
                    return l.one = l[1], l.zero = l[0], l.minusOne = l[-1], l.max = W, l.min = F, l.gcd = j, l.lcm = function(e, t) {
                        return e = Y(e).abs(), t = Y(t).abs(), e.divide(j(e, t)).multiply(t)
                    }, l.isInstance = function(e) {
                        return e instanceof u || e instanceof s || e instanceof c
                    }, l.randBetween = function(e, n, r) {
                        e = Y(e), n = Y(n);
                        var o = r || Math.random,
                            a = F(e, n),
                            i = W(e, n).subtract(a).add(1);
                        if (i.isSmall) return a.add(Math.floor(o() * i));
                        for (var u = z(i, t).value, s = [], c = !0, d = 0; d < u.length; d++) {
                            var p = c ? u[d] + (d + 1 < u.length ? u[d + 1] / t : 0) : t,
                                f = v(o() * p);
                            s.push(f), f < u[d] && (c = !1)
                        }
                        return a.add(l.fromArray(s, t, !1))
                    }, l.fromArray = function(e, t, n) {
                        return q(e.map(Y), Y(t || 10), n)
                    }, l
                }();
                e.hasOwnProperty("exports") && (e.exports = o), void 0 === (r = function() {
                    return o
                }.call(t, n, t, e)) || (e.exports = r)
            },
            2005: function(e, t, n) {
                e.exports = n(9035)
            },
            8633: function(e, t, n) {
                e.exports = n(2670)
            },
            2085: function(e, t, n) {
                e.exports = n(8209)
            },
            8839: function(e, t, n) {
                e.exports = n(8252)
            },
            7746: function(e, t, n) {
                e.exports = n(3413)
            },
            9774: function(e, t, n) {
                e.exports = n(9139)
            },
            9035: function(e, t, n) {
                n(8566), e.exports = n(1417).Object.assign
            },
            2670: function(e, t, n) {
                n(9685);
                var r = n(1417).Object;
                e.exports = function(e, t) {
                    return r.create(e, t)
                }
            },
            8209: function(e, t, n) {
                n(4574), e.exports = n(1417).Object.entries
            },
            8252: function(e, t, n) {
                n(4046), e.exports = n(1417).Object.keys
            },
            3413: function(e, t, n) {
                n(5460), e.exports = n(1417).Object.setPrototypeOf
            },
            9139: function(e, t, n) {
                n(1954), e.exports = n(1417).Object.values
            },
            9879: function(e) {
                e.exports = function(e) {
                    if ("function" != typeof e) throw TypeError(e + " is not a function!");
                    return e
                }
            },
            8026: function(e, t, n) {
                var r = n(7742);
                e.exports = function(e) {
                    if (!r(e)) throw TypeError(e + " is not an object!");
                    return e
                }
            },
            7950: function(e, t, n) {
                var r = n(2815),
                    o = n(712),
                    a = n(6453);
                e.exports = function(e) {
                    return function(t, n, i) {
                        var l, u = r(t),
                            s = o(u.length),
                            c = a(i, s);
                        if (e && n != n) {
                            for (; s > c;)
                                if ((l = u[c++]) != l) return !0
                        } else
                            for (; s > c; c++)
                                if ((e || c in u) && u[c] === n) return e || c || 0;
                        return !e && -1
                    }
                }
            },
            9860: function(e) {
                var t = {}.toString;
                e.exports = function(e) {
                    return t.call(e).slice(8, -1)
                }
            },
            1417: function(e) {
                var t = e.exports = {
                    version: "2.6.12"
                };
                "number" == typeof __e && (__e = t)
            },
            842: function(e, t, n) {
                var r = n(9879);
                e.exports = function(e, t, n) {
                    if (r(e), void 0 === t) return e;
                    switch (n) {
                        case 1:
                            return function(n) {
                                return e.call(t, n)
                            };
                        case 2:
                            return function(n, r) {
                                return e.call(t, n, r)
                            };
                        case 3:
                            return function(n, r, o) {
                                return e.call(t, n, r, o)
                            }
                    }
                    return function() {
                        return e.apply(t, arguments)
                    }
                }
            },
            6838: function(e) {
                e.exports = function(e) {
                    if (null == e) throw TypeError("Can't call method on  " + e);
                    return e
                }
            },
            4765: function(e, t, n) {
                e.exports = !n(7110)((function() {
                    return 7 != Object.defineProperty({}, "a", {
                        get: function() {
                            return 7
                        }
                    }).a
                }))
            },
            8922: function(e, t, n) {
                var r = n(7742),
                    o = n(1931).document,
                    a = r(o) && r(o.createElement);
                e.exports = function(e) {
                    return a ? o.createElement(e) : {}
                }
            },
            4561: function(e) {
                e.exports = "constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")
            },
            3864: function(e, t, n) {
                var r = n(1931),
                    o = n(1417),
                    a = n(842),
                    i = n(7362),
                    l = n(7558),
                    u = function(e, t, n) {
                        var s, c, d, p = e & u.F,
                            f = e & u.G,
                            h = e & u.S,
                            y = e & u.P,
                            v = e & u.B,
                            m = e & u.W,
                            E = f ? o : o[t] || (o[t] = {}),
                            g = E.prototype,
                            b = f ? r : h ? r[t] : (r[t] || {}).prototype;
                        for (s in f && (n = t), n)(c = !p && b && void 0 !== b[s]) && l(E, s) || (d = c ? b[s] : n[s], E[s] = f && "function" != typeof b[s] ? n[s] : v && c ? a(d, r) : m && b[s] == d ? function(e) {
                            var t = function(t, n, r) {
                                if (this instanceof e) {
                                    switch (arguments.length) {
                                        case 0:
                                            return new e;
                                        case 1:
                                            return new e(t);
                                        case 2:
                                            return new e(t, n)
                                    }
                                    return new e(t, n, r)
                                }
                                return e.apply(this, arguments)
                            };
                            return t.prototype = e.prototype, t
                        }(d) : y && "function" == typeof d ? a(Function.call, d) : d, y && ((E.virtual || (E.virtual = {}))[s] = d, e & u.R && g && !g[s] && i(g, s, d)))
                    };
                u.F = 1, u.G = 2, u.S = 4, u.P = 8, u.B = 16, u.W = 32, u.U = 64, u.R = 128, e.exports = u
            },
            7110: function(e) {
                e.exports = function(e) {
                    try {
                        return !!e()
                    } catch (e) {
                        return !0
                    }
                }
            },
            1931: function(e) {
                var t = e.exports = "undefined" != typeof window && window.Math == Math ? window : "undefined" != typeof self && self.Math == Math ? self : Function("return this")();
                "number" == typeof __g && (__g = t)
            },
            7558: function(e) {
                var t = {}.hasOwnProperty;
                e.exports = function(e, n) {
                    return t.call(e, n)
                }
            },
            7362: function(e, t, n) {
                var r = n(6135),
                    o = n(6116);
                e.exports = n(4765) ? function(e, t, n) {
                    return r.f(e, t, o(1, n))
                } : function(e, t, n) {
                    return e[t] = n, e
                }
            },
            3645: function(e, t, n) {
                var r = n(1931).document;
                e.exports = r && r.documentElement
            },
            9538: function(e, t, n) {
                e.exports = !n(4765) && !n(7110)((function() {
                    return 7 != Object.defineProperty(n(8922)("div"), "a", {
                        get: function() {
                            return 7
                        }
                    }).a
                }))
            },
            2266: function(e, t, n) {
                var r = n(9860);
                e.exports = Object("z").propertyIsEnumerable(0) ? Object : function(e) {
                    return "String" == r(e) ? e.split("") : Object(e)
                }
            },
            7742: function(e) {
                e.exports = function(e) {
                    return "object" == typeof e ? null !== e : "function" == typeof e
                }
            },
            7857: function(e) {
                e.exports = !0
            },
            7678: function(e, t, n) {
                "use strict";
                var r = n(4765),
                    o = n(3450),
                    a = n(3132),
                    i = n(9266),
                    l = n(7315),
                    u = n(2266),
                    s = Object.assign;
                e.exports = !s || n(7110)((function() {
                    var e = {},
                        t = {},
                        n = Symbol(),
                        r = "abcdefghijklmnopqrst";
                    return e[n] = 7, r.split("").forEach((function(e) {
                        t[e] = e
                    })), 7 != s({}, e)[n] || Object.keys(s({}, t)).join("") != r
                })) ? function(e, t) {
                    for (var n = l(e), s = arguments.length, c = 1, d = a.f, p = i.f; s > c;)
                        for (var f, h = u(arguments[c++]), y = d ? o(h).concat(d(h)) : o(h), v = y.length, m = 0; v > m;) f = y[m++], r && !p.call(h, f) || (n[f] = h[f]);
                    return n
                } : s
            },
            5985: function(e, t, n) {
                var r = n(8026),
                    o = n(7566),
                    a = n(4561),
                    i = n(9886)("IE_PROTO"),
                    l = function() {},
                    u = function() {
                        var e, t = n(8922)("iframe"),
                            r = a.length;
                        for (t.style.display = "none", n(3645).appendChild(t), t.src = "javascript:", (e = t.contentWindow.document).open(), e.write("<script>document.F=Object<\/script>"), e.close(), u = e.F; r--;) delete u.prototype[a[r]];
                        return u()
                    };
                e.exports = Object.create || function(e, t) {
                    var n;
                    return null !== e ? (l.prototype = r(e), n = new l, l.prototype = null, n[i] = e) : n = u(), void 0 === t ? n : o(n, t)
                }
            },
            6135: function(e, t, n) {
                var r = n(8026),
                    o = n(9538),
                    a = n(6343),
                    i = Object.defineProperty;
                t.f = n(4765) ? Object.defineProperty : function(e, t, n) {
                    if (r(e), t = a(t, !0), r(n), o) try {
                        return i(e, t, n)
                    } catch (e) {}
                    if ("get" in n || "set" in n) throw TypeError("Accessors not supported!");
                    return "value" in n && (e[t] = n.value), e
                }
            },
            7566: function(e, t, n) {
                var r = n(6135),
                    o = n(8026),
                    a = n(3450);
                e.exports = n(4765) ? Object.defineProperties : function(e, t) {
                    o(e);
                    for (var n, i = a(t), l = i.length, u = 0; l > u;) r.f(e, n = i[u++], t[n]);
                    return e
                }
            },
            9580: function(e, t, n) {
                var r = n(9266),
                    o = n(6116),
                    a = n(2815),
                    i = n(6343),
                    l = n(7558),
                    u = n(9538),
                    s = Object.getOwnPropertyDescriptor;
                t.f = n(4765) ? s : function(e, t) {
                    if (e = a(e), t = i(t, !0), u) try {
                        return s(e, t)
                    } catch (e) {}
                    if (l(e, t)) return o(!r.f.call(e, t), e[t])
                }
            },
            3132: function(e, t) {
                t.f = Object.getOwnPropertySymbols
            },
            2752: function(e, t, n) {
                var r = n(7558),
                    o = n(2815),
                    a = n(7950)(!1),
                    i = n(9886)("IE_PROTO");
                e.exports = function(e, t) {
                    var n, l = o(e),
                        u = 0,
                        s = [];
                    for (n in l) n != i && r(l, n) && s.push(n);
                    for (; t.length > u;) r(l, n = t[u++]) && (~a(s, n) || s.push(n));
                    return s
                }
            },
            3450: function(e, t, n) {
                var r = n(2752),
                    o = n(4561);
                e.exports = Object.keys || function(e) {
                    return r(e, o)
                }
            },
            9266: function(e, t) {
                t.f = {}.propertyIsEnumerable
            },
            5341: function(e, t, n) {
                var r = n(3864),
                    o = n(1417),
                    a = n(7110);
                e.exports = function(e, t) {
                    var n = (o.Object || {})[e] || Object[e],
                        i = {};
                    i[e] = t(n), r(r.S + r.F * a((function() {
                        n(1)
                    })), "Object", i)
                }
            },
            8800: function(e, t, n) {
                var r = n(4765),
                    o = n(3450),
                    a = n(2815),
                    i = n(9266).f;
                e.exports = function(e) {
                    return function(t) {
                        for (var n, l = a(t), u = o(l), s = u.length, c = 0, d = []; s > c;) n = u[c++], r && !i.call(l, n) || d.push(e ? [n, l[n]] : l[n]);
                        return d
                    }
                }
            },
            6116: function(e) {
                e.exports = function(e, t) {
                    return {
                        enumerable: !(1 & e),
                        configurable: !(2 & e),
                        writable: !(4 & e),
                        value: t
                    }
                }
            },
            7994: function(e, t, n) {
                var r = n(7742),
                    o = n(8026),
                    a = function(e, t) {
                        if (o(e), !r(t) && null !== t) throw TypeError(t + ": can't set as prototype!")
                    };
                e.exports = {
                    set: Object.setPrototypeOf || ("__proto__" in {} ? function(e, t, r) {
                        try {
                            (r = n(842)(Function.call, n(9580).f(Object.prototype, "__proto__").set, 2))(e, []), t = !(e instanceof Array)
                        } catch (e) {
                            t = !0
                        }
                        return function(e, n) {
                            return a(e, n), t ? e.__proto__ = n : r(e, n), e
                        }
                    }({}, !1) : void 0),
                    check: a
                }
            },
            9886: function(e, t, n) {
                var r = n(3388)("keys"),
                    o = n(3469);
                e.exports = function(e) {
                    return r[e] || (r[e] = o(e))
                }
            },
            3388: function(e, t, n) {
                var r = n(1417),
                    o = n(1931),
                    a = "__core-js_shared__",
                    i = o[a] || (o[a] = {});
                (e.exports = function(e, t) {
                    return i[e] || (i[e] = void 0 !== t ? t : {})
                })("versions", []).push({
                    version: r.version,
                    mode: n(7857) ? "pure" : "global",
                    copyright: "© 2020 Denis Pushkarev (zloirock.ru)"
                })
            },
            6453: function(e, t, n) {
                var r = n(966),
                    o = Math.max,
                    a = Math.min;
                e.exports = function(e, t) {
                    return (e = r(e)) < 0 ? o(e + t, 0) : a(e, t)
                }
            },
            966: function(e) {
                var t = Math.ceil,
                    n = Math.floor;
                e.exports = function(e) {
                    return isNaN(e = +e) ? 0 : (e > 0 ? n : t)(e)
                }
            },
            2815: function(e, t, n) {
                var r = n(2266),
                    o = n(6838);
                e.exports = function(e) {
                    return r(o(e))
                }
            },
            712: function(e, t, n) {
                var r = n(966),
                    o = Math.min;
                e.exports = function(e) {
                    return e > 0 ? o(r(e), 9007199254740991) : 0
                }
            },
            7315: function(e, t, n) {
                var r = n(6838);
                e.exports = function(e) {
                    return Object(r(e))
                }
            },
            6343: function(e, t, n) {
                var r = n(7742);
                e.exports = function(e, t) {
                    if (!r(e)) return e;
                    var n, o;
                    if (t && "function" == typeof(n = e.toString) && !r(o = n.call(e))) return o;
                    if ("function" == typeof(n = e.valueOf) && !r(o = n.call(e))) return o;
                    if (!t && "function" == typeof(n = e.toString) && !r(o = n.call(e))) return o;
                    throw TypeError("Can't convert object to primitive value")
                }
            },
            3469: function(e) {
                var t = 0,
                    n = Math.random();
                e.exports = function(e) {
                    return "Symbol(".concat(void 0 === e ? "" : e, ")_", (++t + n).toString(36))
                }
            },
            8566: function(e, t, n) {
                var r = n(3864);
                r(r.S + r.F, "Object", {
                    assign: n(7678)
                })
            },
            9685: function(e, t, n) {
                var r = n(3864);
                r(r.S, "Object", {
                    create: n(5985)
                })
            },
            4046: function(e, t, n) {
                var r = n(7315),
                    o = n(3450);
                n(5341)("keys", (function() {
                    return function(e) {
                        return o(r(e))
                    }
                }))
            },
            5460: function(e, t, n) {
                var r = n(3864);
                r(r.S, "Object", {
                    setPrototypeOf: n(7994).set
                })
            },
            4574: function(e, t, n) {
                var r = n(3864),
                    o = n(8800)(!0);
                r(r.S, "Object", {
                    entries: function(e) {
                        return o(e)
                    }
                })
            },
            1954: function(e, t, n) {
                var r = n(3864),
                    o = n(8800)(!1);
                r(r.S, "Object", {
                    values: function(e) {
                        return o(e)
                    }
                })
            },
            4859: function(e) {
                e.exports = function(e) {
                    return e && e.__esModule ? e : {
                        default: e
                    }
                }
            },
            6973: function(e, t) {
                "use strict";

                function n(e) {
                    return (n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                        return typeof e
                    } : function(e) {
                        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                    })(e)
                }
                var r = "function" == typeof Symbol && Symbol.for,
                    o = r ? Symbol.for("react.element") : 60103,
                    a = r ? Symbol.for("react.portal") : 60106,
                    i = r ? Symbol.for("react.fragment") : 60107,
                    l = r ? Symbol.for("react.strict_mode") : 60108,
                    u = r ? Symbol.for("react.profiler") : 60114,
                    s = r ? Symbol.for("react.provider") : 60109,
                    c = r ? Symbol.for("react.context") : 60110,
                    d = r ? Symbol.for("react.async_mode") : 60111,
                    p = r ? Symbol.for("react.concurrent_mode") : 60111,
                    f = r ? Symbol.for("react.forward_ref") : 60112,
                    h = r ? Symbol.for("react.suspense") : 60113,
                    y = r ? Symbol.for("react.suspense_list") : 60120,
                    v = r ? Symbol.for("react.memo") : 60115,
                    m = r ? Symbol.for("react.lazy") : 60116,
                    E = r ? Symbol.for("react.block") : 60121,
                    g = r ? Symbol.for("react.fundamental") : 60117,
                    b = r ? Symbol.for("react.responder") : 60118,
                    _ = r ? Symbol.for("react.scope") : 60119;

                function C(e) {
                    if ("object" === n(e) && null !== e) {
                        var t = e.$$typeof;
                        switch (t) {
                            case o:
                                switch (e = e.type) {
                                    case d:
                                    case p:
                                    case i:
                                    case u:
                                    case l:
                                    case h:
                                        return e;
                                    default:
                                        switch (e = e && e.$$typeof) {
                                            case c:
                                            case f:
                                            case m:
                                            case v:
                                            case s:
                                                return e;
                                            default:
                                                return t
                                        }
                                }
                            case a:
                                return t
                        }
                    }
                }

                function S(e) {
                    return C(e) === p
                }
                t.AsyncMode = d, t.ConcurrentMode = p, t.ContextConsumer = c, t.ContextProvider = s, t.Element = o, t.ForwardRef = f, t.Fragment = i, t.Lazy = m, t.Memo = v, t.Portal = a, t.Profiler = u, t.StrictMode = l, t.Suspense = h, t.isAsyncMode = function(e) {
                    return S(e) || C(e) === d
                }, t.isConcurrentMode = S, t.isContextConsumer = function(e) {
                    return C(e) === c
                }, t.isContextProvider = function(e) {
                    return C(e) === s
                }, t.isElement = function(e) {
                    return "object" === n(e) && null !== e && e.$$typeof === o
                }, t.isForwardRef = function(e) {
                    return C(e) === f
                }, t.isFragment = function(e) {
                    return C(e) === i
                }, t.isLazy = function(e) {
                    return C(e) === m
                }, t.isMemo = function(e) {
                    return C(e) === v
                }, t.isPortal = function(e) {
                    return C(e) === a
                }, t.isProfiler = function(e) {
                    return C(e) === u
                }, t.isStrictMode = function(e) {
                    return C(e) === l
                }, t.isSuspense = function(e) {
                    return C(e) === h
                }, t.isValidElementType = function(e) {
                    return "string" == typeof e || "function" == typeof e || e === i || e === p || e === u || e === l || e === h || e === y || "object" === n(e) && null !== e && (e.$$typeof === m || e.$$typeof === v || e.$$typeof === s || e.$$typeof === c || e.$$typeof === f || e.$$typeof === g || e.$$typeof === b || e.$$typeof === _ || e.$$typeof === E)
                }, t.typeOf = C
            },
            7302: function(e, t, n) {
                "use strict";
                e.exports = n(6973)
            },
            9542: function(e, t, n) {
                "use strict";

                function r() {
                    var e = this.constructor.getDerivedStateFromProps(this.props, this.state);
                    null != e && this.setState(e)
                }

                function o(e) {
                    this.setState(function(t) {
                        var n = this.constructor.getDerivedStateFromProps(e, t);
                        return null != n ? n : null
                    }.bind(this))
                }

                function a(e, t) {
                    try {
                        var n = this.props,
                            r = this.state;
                        this.props = e, this.state = t, this.__reactInternalSnapshotFlag = !0, this.__reactInternalSnapshot = this.getSnapshotBeforeUpdate(n, r)
                    } finally {
                        this.props = n, this.state = r
                    }
                }

                function i(e) {
                    var t = e.prototype;
                    if (!t || !t.isReactComponent) throw new Error("Can only polyfill class components");
                    if ("function" != typeof e.getDerivedStateFromProps && "function" != typeof t.getSnapshotBeforeUpdate) return e;
                    var n = null,
                        i = null,
                        l = null;
                    if ("function" == typeof t.componentWillMount ? n = "componentWillMount" : "function" == typeof t.UNSAFE_componentWillMount && (n = "UNSAFE_componentWillMount"), "function" == typeof t.componentWillReceiveProps ? i = "componentWillReceiveProps" : "function" == typeof t.UNSAFE_componentWillReceiveProps && (i = "UNSAFE_componentWillReceiveProps"), "function" == typeof t.componentWillUpdate ? l = "componentWillUpdate" : "function" == typeof t.UNSAFE_componentWillUpdate && (l = "UNSAFE_componentWillUpdate"), null !== n || null !== i || null !== l) {
                        var u = e.displayName || e.name,
                            s = "function" == typeof e.getDerivedStateFromProps ? "getDerivedStateFromProps()" : "getSnapshotBeforeUpdate()";
                        throw Error("Unsafe legacy lifecycles will not be called for components using new component APIs.\n\n" + u + " uses " + s + " but also contains the following legacy lifecycles:" + (null !== n ? "\n  " + n : "") + (null !== i ? "\n  " + i : "") + (null !== l ? "\n  " + l : "") + "\n\nThe above lifecycles should be removed. Learn more about this warning here:\nhttps://fb.me/react-async-component-lifecycle-hooks")
                    }
                    if ("function" == typeof e.getDerivedStateFromProps && (t.componentWillMount = r, t.componentWillReceiveProps = o), "function" == typeof t.getSnapshotBeforeUpdate) {
                        if ("function" != typeof t.componentDidUpdate) throw new Error("Cannot polyfill getSnapshotBeforeUpdate() for components that do not define componentDidUpdate() on the prototype");
                        t.componentWillUpdate = a;
                        var c = t.componentDidUpdate;
                        t.componentDidUpdate = function(e, t, n) {
                            var r = this.__reactInternalSnapshotFlag ? this.__reactInternalSnapshot : n;
                            c.call(this, e, t, r)
                        }
                    }
                    return e
                }
                n.r(t), n.d(t, {
                    polyfill: function() {
                        return i
                    }
                }), r.__suppressDeprecationWarning = !0, o.__suppressDeprecationWarning = !0, a.__suppressDeprecationWarning = !0
            },
            5772: function(e, t, n) {
                "use strict";

                function r(e) {
                    return (r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                        return typeof e
                    } : function(e) {
                        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                    })(e)
                }
                t.__esModule = !0;
                var o = c(n(5517)),
                    a = c(n(5539)),
                    i = c(n(3804)),
                    l = c(n(7196)),
                    u = c(n(7080)),
                    s = c(n(4650));

                function c(e) {
                    return e && e.__esModule ? e : {
                        default: e
                    }
                }

                function d(e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }

                function p(e, t) {
                    if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return !t || "object" !== r(t) && "function" != typeof t ? e : t
                }
                var f = function(e) {
                    function t() {
                        var n, r;
                        d(this, t);
                        for (var o = arguments.length, a = Array(o), c = 0; c < o; c++) a[c] = arguments[c];
                        return n = r = p(this, e.call.apply(e, [this].concat(a))), r._mountOverlayTarget = function() {
                            r._overlayTarget || (r._overlayTarget = document.createElement("div"), r._portalContainerNode = (0, u.default)(r.props.container, (0, s.default)(r).body), r._portalContainerNode.appendChild(r._overlayTarget))
                        }, r._unmountOverlayTarget = function() {
                            r._overlayTarget && (r._portalContainerNode.removeChild(r._overlayTarget), r._overlayTarget = null), r._portalContainerNode = null
                        }, r._renderOverlay = function() {
                            var e = r.props.children ? i.default.Children.only(r.props.children) : null;
                            if (null !== e) {
                                r._mountOverlayTarget();
                                var t = !r._overlayInstance;
                                r._overlayInstance = l.default.unstable_renderSubtreeIntoContainer(r, e, r._overlayTarget, (function() {
                                    t && r.props.onRendered && r.props.onRendered()
                                }))
                            } else r._unrenderOverlay(), r._unmountOverlayTarget()
                        }, r._unrenderOverlay = function() {
                            r._overlayTarget && (l.default.unmountComponentAtNode(r._overlayTarget), r._overlayInstance = null)
                        }, r.getMountNode = function() {
                            return r._overlayTarget
                        }, p(r, n)
                    }
                    return function(e, t) {
                        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + r(t));
                        e.prototype = Object.create(t && t.prototype, {
                            constructor: {
                                value: e,
                                enumerable: !1,
                                writable: !0,
                                configurable: !0
                            }
                        }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
                    }(t, e), t.prototype.componentDidMount = function() {
                        this._isMounted = !0, this._renderOverlay()
                    }, t.prototype.componentDidUpdate = function() {
                        this._renderOverlay()
                    }, t.prototype.UNSAFE_componentWillReceiveProps = function(e) {
                        this._overlayTarget && e.container !== this.props.container && (this._portalContainerNode.removeChild(this._overlayTarget), this._portalContainerNode = (0, u.default)(e.container, (0, s.default)(this).body), this._portalContainerNode.appendChild(this._overlayTarget))
                    }, t.prototype.componentWillUnmount = function() {
                        this._isMounted = !1, this._unrenderOverlay(), this._unmountOverlayTarget()
                    }, t.prototype.render = function() {
                        return null
                    }, t
                }(i.default.Component);
                f.displayName = "Portal", f.propTypes = {
                    container: o.default.oneOfType([a.default, o.default.func]),
                    onRendered: o.default.func
                }, t.default = f, e.exports = t.default
            },
            4909: function(e, t, n) {
                "use strict";

                function r(e) {
                    return (r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                        return typeof e
                    } : function(e) {
                        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                    })(e)
                }
                t.__esModule = !0;
                var o = Object.assign || function(e) {
                        for (var t = 1; t < arguments.length; t++) {
                            var n = arguments[t];
                            for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                        }
                        return e
                    },
                    a = S(n(7718)),
                    i = S(n(1009)),
                    l = S(n(6892)),
                    u = S(n(5517)),
                    s = S(n(5539)),
                    c = S(n(1083)),
                    d = S(n(1904)),
                    p = n(3804),
                    f = S(p),
                    h = S(n(7196)),
                    y = S(n(2564)),
                    v = S(n(7492)),
                    m = S(n(5881)),
                    E = S(n(6997)),
                    g = S(n(8414)),
                    b = S(n(1705)),
                    _ = S(n(7080)),
                    C = S(n(4650));

                function S(e) {
                    return e && e.__esModule ? e : {
                        default: e
                    }
                }

                function T(e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }

                function I(e, t) {
                    if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return !t || "object" !== r(t) && "function" != typeof t ? e : t
                }
                var N = new v.default,
                    w = function(e) {
                        function t() {
                            var n, r;
                            T(this, t);
                            for (var o = arguments.length, a = Array(o), i = 0; i < o; i++) a[i] = arguments[i];
                            return n = r = I(this, e.call.apply(e, [this].concat(a))), A.call(r), I(r, n)
                        }
                        return function(e, t) {
                            if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + r(t));
                            e.prototype = Object.create(t && t.prototype, {
                                constructor: {
                                    value: e,
                                    enumerable: !1,
                                    writable: !0,
                                    configurable: !0
                                }
                            }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
                        }(t, e), t.prototype.omitProps = function(e, t) {
                            var n = Object.keys(e),
                                r = {};
                            return n.map((function(n) {
                                Object.prototype.hasOwnProperty.call(t, n) || (r[n] = e[n])
                            })), r
                        }, t.prototype.render = function() {
                            var e = this.props,
                                n = e.show,
                                r = e.container,
                                a = e.children,
                                i = e.transition,
                                l = e.backdrop,
                                u = e.className,
                                s = e.style,
                                c = e.onExit,
                                d = e.onExiting,
                                h = e.onEnter,
                                y = e.onEntering,
                                v = e.onEntered,
                                g = f.default.Children.only(a),
                                b = this.omitProps(this.props, t.propTypes);
                            if (!(n || i && !this.state.exited)) return null;
                            var _ = g.props,
                                C = _.role,
                                S = _.tabIndex;
                            return void 0 !== C && void 0 !== S || (g = (0, p.cloneElement)(g, {
                                role: void 0 === C ? "document" : C,
                                tabIndex: null == S ? "-1" : S
                            })), i && (g = f.default.createElement(i, {
                                appear: !0,
                                unmountOnExit: !0,
                                in: n,
                                onExit: c,
                                onExiting: d,
                                onExited: this.handleHidden,
                                onEnter: h,
                                onEntering: y,
                                onEntered: v
                            }, g)), f.default.createElement(m.default, {
                                ref: this.setMountNode,
                                container: r,
                                onRendered: this.onPortalRendered
                            }, f.default.createElement("div", o({
                                ref: this.setModalNodeRef,
                                role: C || "dialog"
                            }, b, {
                                style: s,
                                className: u
                            }), l && this.renderBackdrop(), f.default.createElement(E.default, {
                                ref: this.setDialogRef
                            }, g)))
                        }, t.prototype.UNSAFE_componentWillReceiveProps = function(e) {
                            e.show ? this.setState({
                                exited: !1
                            }) : e.transition || this.setState({
                                exited: !0
                            })
                        }, t.prototype.UNSAFE_componentWillUpdate = function(e) {
                            !this.props.show && e.show && this.checkForFocus()
                        }, t.prototype.componentDidMount = function() {
                            this._isMounted = !0, this.props.show && this.onShow()
                        }, t.prototype.componentDidUpdate = function(e) {
                            var t = this.props.transition;
                            !e.show || this.props.show || t ? !e.show && this.props.show && this.onShow() : this.onHide()
                        }, t.prototype.componentWillUnmount = function() {
                            var e = this.props,
                                t = e.show,
                                n = e.transition;
                            this._isMounted = !1, (t || n && !this.state.exited) && this.onHide()
                        }, t.prototype.autoFocus = function() {
                            if (this.props.autoFocus) {
                                var e = this.getDialogElement(),
                                    t = (0, a.default)((0, C.default)(this));
                                e && !(0, i.default)(e, t) && (this.lastFocus = t, e.hasAttribute("tabIndex") || ((0, y.default)(!1, 'The modal content node does not accept focus. For the benefit of assistive technologies, the tabIndex of the node is being set to "-1".'), e.setAttribute("tabIndex", -1)), e.focus())
                            }
                        }, t.prototype.restoreLastFocus = function() {
                            this.lastFocus && this.lastFocus.focus && (this.lastFocus.focus(), this.lastFocus = null)
                        }, t.prototype.getDialogElement = function() {
                            return h.default.findDOMNode(this.dialog)
                        }, t.prototype.isTopModal = function() {
                            return this.props.manager.isTopModal(this)
                        }, t
                    }(f.default.Component);
                w.propTypes = o({}, m.default.propTypes, {
                    show: u.default.bool,
                    container: u.default.oneOfType([s.default, u.default.func]),
                    onShow: u.default.func,
                    onHide: u.default.func,
                    backdrop: u.default.oneOfType([u.default.bool, u.default.oneOf(["static"])]),
                    renderBackdrop: u.default.func,
                    onEscapeKeyDown: u.default.func,
                    onEscapeKeyUp: (0, c.default)(u.default.func, "Please use onEscapeKeyDown instead for consistency"),
                    onBackdropClick: u.default.func,
                    backdropStyle: u.default.object,
                    backdropClassName: u.default.string,
                    containerClassName: u.default.string,
                    keyboard: u.default.bool,
                    transition: d.default,
                    backdropTransition: d.default,
                    autoFocus: u.default.bool,
                    enforceFocus: u.default.bool,
                    restoreFocus: u.default.bool,
                    onEnter: u.default.func,
                    onEntering: u.default.func,
                    onEntered: u.default.func,
                    onExit: u.default.func,
                    onExiting: u.default.func,
                    onExited: u.default.func,
                    manager: u.default.object.isRequired
                }), w.defaultProps = {
                    show: !1,
                    backdrop: !0,
                    keyboard: !0,
                    autoFocus: !0,
                    enforceFocus: !0,
                    restoreFocus: !0,
                    onHide: function() {},
                    manager: N,
                    renderBackdrop: function(e) {
                        return f.default.createElement("div", e)
                    }
                };
                var A = function() {
                    var e = this;
                    this.state = {
                        exited: !this.props.show
                    }, this.renderBackdrop = function() {
                        var t = e.props,
                            n = t.backdropStyle,
                            r = t.backdropClassName,
                            o = t.renderBackdrop,
                            a = t.backdropTransition,
                            i = o({
                                ref: function(t) {
                                    return e.backdrop = t
                                },
                                style: n,
                                className: r,
                                onClick: e.handleBackdropClick
                            });
                        return a && (i = f.default.createElement(a, {
                            appear: !0,
                            in: e.props.show
                        }, i)), i
                    }, this.onPortalRendered = function() {
                        e.autoFocus(), e.props.onShow && e.props.onShow()
                    }, this.onShow = function() {
                        var t = (0, C.default)(e),
                            n = (0, _.default)(e.props.container, t.body);
                        e.props.manager.add(e, n, e.props.containerClassName), e._onDocumentKeydownListener = (0, g.default)(t, "keydown", e.handleDocumentKeyDown), e._onDocumentKeyupListener = (0, g.default)(t, "keyup", e.handleDocumentKeyUp), e._onFocusinListener = (0, b.default)(e.enforceFocus)
                    }, this.onHide = function() {
                        e.props.manager.remove(e), e._onDocumentKeydownListener.remove(), e._onDocumentKeyupListener.remove(), e._onFocusinListener.remove(), e.props.restoreFocus && e.restoreLastFocus()
                    }, this.setMountNode = function(t) {
                        e.mountNode = t ? t.getMountNode() : t
                    }, this.setModalNodeRef = function(t) {
                        e.modalNode = t
                    }, this.setDialogRef = function(t) {
                        e.dialog = t
                    }, this.handleHidden = function() {
                        var t;
                        (e.setState({
                            exited: !0
                        }), e.onHide(), e.props.onExited) && (t = e.props).onExited.apply(t, arguments)
                    }, this.handleBackdropClick = function(t) {
                        t.target === t.currentTarget && (e.props.onBackdropClick && e.props.onBackdropClick(t), !0 === e.props.backdrop && e.props.onHide())
                    }, this.handleDocumentKeyDown = function(t) {
                        e.props.keyboard && 27 === t.keyCode && e.isTopModal() && (e.props.onEscapeKeyDown && e.props.onEscapeKeyDown(t), e.props.onHide())
                    }, this.handleDocumentKeyUp = function(t) {
                        e.props.keyboard && 27 === t.keyCode && e.isTopModal() && e.props.onEscapeKeyUp && e.props.onEscapeKeyUp(t)
                    }, this.checkForFocus = function() {
                        l.default && (e.lastFocus = (0, a.default)())
                    }, this.enforceFocus = function() {
                        if (e.props.enforceFocus && e._isMounted && e.isTopModal()) {
                            var t = e.getDialogElement(),
                                n = (0, a.default)((0, C.default)(e));
                            t && !(0, i.default)(t, n) && t.focus()
                        }
                    }
                };
                w.Manager = v.default, t.default = w, e.exports = t.default
            },
            7492: function(e, t, n) {
                "use strict";
                t.__esModule = !0;
                var r = u(n(3589)),
                    o = u(n(9182)),
                    a = u(n(8616)),
                    i = u(n(1503)),
                    l = n(2680);

                function u(e) {
                    return e && e.__esModule ? e : {
                        default: e
                    }
                }

                function s(e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }

                function c(e, t) {
                    return n = function(e) {
                        return -1 !== e.modals.indexOf(t)
                    }, r = -1, e.some((function(e, t) {
                        if (n(e, t)) return r = t, !0
                    })), r;
                    var n, r
                }

                function d(e, t) {
                    var n = {
                        overflow: "hidden"
                    };
                    e.style = {
                        overflow: t.style.overflow,
                        paddingRight: t.style.paddingRight
                    }, e.overflowing && (n.paddingRight = parseInt((0, o.default)(t, "paddingRight") || 0, 10) + (0, a.default)() + "px"), (0, o.default)(t, n)
                }

                function p(e, t) {
                    var n = e.style;
                    Object.keys(n).forEach((function(e) {
                        return t.style[e] = n[e]
                    }))
                }
                t.default = function e() {
                    var t = this,
                        n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                        o = n.hideSiblingNodes,
                        a = void 0 === o || o,
                        u = n.handleContainerOverflow,
                        f = void 0 === u || u;
                    s(this, e), this.add = function(e, n, o) {
                        var a = t.modals.indexOf(e),
                            u = t.containers.indexOf(n);
                        if (-1 !== a) return a;
                        if (a = t.modals.length, t.modals.push(e), t.hideSiblingNodes && (0, l.hideSiblings)(n, e.modalNode), -1 !== u) return t.data[u].modals.push(e), a;
                        var s = {
                            modals: [e],
                            classes: o ? o.split(/\s+/) : [],
                            overflowing: (0, i.default)(n)
                        };
                        return t.handleContainerOverflow && d(s, n), s.classes.forEach(r.default.addClass.bind(null, n)), t.containers.push(n), t.data.push(s), a
                    }, this.remove = function(e) {
                        var n = t.modals.indexOf(e);
                        if (-1 !== n) {
                            var o = c(t.data, e),
                                a = t.data[o],
                                i = t.containers[o];
                            a.modals.splice(a.modals.indexOf(e), 1), t.modals.splice(n, 1), 0 === a.modals.length ? (a.classes.forEach(r.default.removeClass.bind(null, i)), t.handleContainerOverflow && p(a, i), t.hideSiblingNodes && (0, l.showSiblings)(i, e.modalNode), t.containers.splice(o, 1), t.data.splice(o, 1)) : t.hideSiblingNodes && (0, l.ariaHidden)(!1, a.modals[a.modals.length - 1].modalNode)
                        }
                    }, this.isTopModal = function(e) {
                        return !!t.modals.length && t.modals[t.modals.length - 1] === e
                    }, this.hideSiblingNodes = a, this.handleContainerOverflow = f, this.modals = [], this.containers = [], this.data = []
                }, e.exports = t.default
            },
            5881: function(e, t, n) {
                "use strict";

                function r(e) {
                    return (r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                        return typeof e
                    } : function(e) {
                        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                    })(e)
                }
                t.__esModule = !0;
                var o = p(n(6892)),
                    a = p(n(5517)),
                    i = p(n(5539)),
                    l = p(n(3804)),
                    u = p(n(7196)),
                    s = p(n(7080)),
                    c = p(n(4650)),
                    d = p(n(5772));

                function p(e) {
                    return e && e.__esModule ? e : {
                        default: e
                    }
                }

                function f(e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }

                function h(e, t) {
                    if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return !t || "object" !== r(t) && "function" != typeof t ? e : t
                }
                var y = function(e) {
                    function t() {
                        var n, r;
                        f(this, t);
                        for (var o = arguments.length, a = Array(o), i = 0; i < o; i++) a[i] = arguments[i];
                        return n = r = h(this, e.call.apply(e, [this].concat(a))), r.getMountNode = function() {
                            return r._portalContainerNode
                        }, h(r, n)
                    }
                    return function(e, t) {
                        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + r(t));
                        e.prototype = Object.create(t && t.prototype, {
                            constructor: {
                                value: e,
                                enumerable: !1,
                                writable: !0,
                                configurable: !0
                            }
                        }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
                    }(t, e), t.prototype.UNSAFE_componentWillMount = function() {
                        if (o.default) {
                            var e = this.props.container;
                            "function" == typeof e && (e = e()), e && !u.default.findDOMNode(e) || this.setContainer(e)
                        }
                    }, t.prototype.componentDidMount = function() {
                        this._portalContainerNode ? this.props.onRendered && this.props.onRendered() : (this.setContainer(this.props.container), this.forceUpdate(this.props.onRendered))
                    }, t.prototype.UNSAFE_componentWillReceiveProps = function(e) {
                        e.container !== this.props.container && this.setContainer(e.container)
                    }, t.prototype.componentWillUnmount = function() {
                        this._portalContainerNode = null
                    }, t.prototype.setContainer = function(e) {
                        this._portalContainerNode = (0, s.default)(e, (0, c.default)(this).body)
                    }, t.prototype.render = function() {
                        return this.props.children && this._portalContainerNode ? u.default.createPortal(this.props.children, this._portalContainerNode) : null
                    }, t
                }(l.default.Component);
                y.displayName = "Portal", y.propTypes = {
                    container: a.default.oneOfType([i.default, a.default.func]),
                    onRendered: a.default.func
                }, t.default = u.default.createPortal ? y : d.default, e.exports = t.default
            },
            6997: function(e, t, n) {
                "use strict";

                function r(e) {
                    return (r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                        return typeof e
                    } : function(e) {
                        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                    })(e)
                }
                t.__esModule = !0;
                var o = i(n(5517)),
                    a = i(n(3804));

                function i(e) {
                    return e && e.__esModule ? e : {
                        default: e
                    }
                }

                function l(e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }

                function u(e, t) {
                    if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return !t || "object" !== r(t) && "function" != typeof t ? e : t
                }
                var s = {
                        children: o.default.node
                    },
                    c = function(e) {
                        function t() {
                            return l(this, t), u(this, e.apply(this, arguments))
                        }
                        return function(e, t) {
                            if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + r(t));
                            e.prototype = Object.create(t && t.prototype, {
                                constructor: {
                                    value: e,
                                    enumerable: !1,
                                    writable: !0,
                                    configurable: !0
                                }
                            }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
                        }(t, e), t.prototype.render = function() {
                            return this.props.children
                        }, t
                    }(a.default.Component);
                c.propTypes = s, t.default = c, e.exports = t.default
            },
            8414: function(e, t, n) {
                "use strict";
                t.__esModule = !0, t.default = function(e, t, n, a) {
                    return (0, r.default)(e, t, n, a), {
                        remove: function() {
                            (0, o.default)(e, t, n, a)
                        }
                    }
                };
                var r = a(n(8331)),
                    o = a(n(863));

                function a(e) {
                    return e && e.__esModule ? e : {
                        default: e
                    }
                }
                e.exports = t.default
            },
            1705: function(e, t) {
                "use strict";
                t.__esModule = !0, t.default = function(e) {
                    var t = !document.addEventListener,
                        n = void 0;
                    t ? (document.attachEvent("onfocusin", e), n = function() {
                        return document.detachEvent("onfocusin", e)
                    }) : (document.addEventListener("focus", e, !0), n = function() {
                        return document.removeEventListener("focus", e, !0)
                    });
                    return {
                        remove: n
                    }
                }, e.exports = t.default
            },
            7080: function(e, t, n) {
                "use strict";
                t.__esModule = !0, t.default = function(e, t) {
                    return e = "function" == typeof e ? e() : e, a.default.findDOMNode(e) || t
                };
                var r, o = n(7196),
                    a = (r = o) && r.__esModule ? r : {
                        default: r
                    };
                e.exports = t.default
            },
            1503: function(e, t, n) {
                "use strict";
                t.__esModule = !0, t.default = function(e) {
                    return (0, r.default)(e) || (t = e, t && "body" === t.tagName.toLowerCase()) ? function(e) {
                        var t = (0, o.default)(e),
                            n = (0, r.default)(t).innerWidth;
                        if (!n) {
                            var a = t.documentElement.getBoundingClientRect();
                            n = a.right - Math.abs(a.left)
                        }
                        return t.body.clientWidth < n
                    }(e) : e.scrollHeight > e.clientHeight;
                    var t
                };
                var r = a(n(4615)),
                    o = a(n(5759));

                function a(e) {
                    return e && e.__esModule ? e : {
                        default: e
                    }
                }
                e.exports = t.default
            },
            2680: function(e, t) {
                "use strict";
                t.__esModule = !0, t.ariaHidden = o, t.hideSiblings = function(e, t) {
                    r(e, t, (function(e) {
                        return o(!0, e)
                    }))
                }, t.showSiblings = function(e, t) {
                    r(e, t, (function(e) {
                        return o(!1, e)
                    }))
                };
                var n = ["template", "script", "style"],
                    r = function(e, t, r) {
                        t = [].concat(t), [].forEach.call(e.children, (function(e) {
                            var o, a, i; - 1 === t.indexOf(e) && (a = (o = e).nodeType, i = o.tagName, 1 === a && -1 === n.indexOf(i.toLowerCase())) && r(e)
                        }))
                    };

                function o(e, t) {
                    t && (e ? t.setAttribute("aria-hidden", "true") : t.removeAttribute("aria-hidden"))
                }
            },
            4650: function(e, t, n) {
                "use strict";
                t.__esModule = !0, t.default = function(e) {
                    return (0, o.default)(r.default.findDOMNode(e))
                };
                var r = a(n(7196)),
                    o = a(n(5759));

                function a(e) {
                    return e && e.__esModule ? e : {
                        default: e
                    }
                }
                e.exports = t.default
            },
            3447: function(e, t, n) {
                "use strict";
                t.ZP = t.cn = t.d0 = void 0;
                var r = function(e) {
                        if (e && e.__esModule) return e;
                        var t = {};
                        if (null != e)
                            for (var n in e)
                                if (Object.prototype.hasOwnProperty.call(e, n)) {
                                    var r = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(e, n) : {};
                                    r.get || r.set ? Object.defineProperty(t, n, r) : t[n] = e[n]
                                }
                        return t.default = e, t
                    }(n(5517)),
                    o = l(n(3804)),
                    a = l(n(7196)),
                    i = n(9542);
                n(8603);

                function l(e) {
                    return e && e.__esModule ? e : {
                        default: e
                    }
                }
                var u = "unmounted";
                var s = "exited";
                var c = "entering";
                t.d0 = c;
                var d = "entered";
                t.cn = d;
                var p = "exiting";
                var f = function(e) {
                    var t, n;

                    function r(t, n) {
                        var r;
                        r = e.call(this, t, n) || this;
                        var o, a = n.transitionGroup,
                            i = a && !a.isMounting ? t.enter : t.appear;
                        return r.appearStatus = null, t.in ? i ? (o = s, r.appearStatus = c) : o = d : o = t.unmountOnExit || t.mountOnEnter ? u : s, r.state = {
                            status: o
                        }, r.nextCallback = null, r
                    }
                    n = e, (t = r).prototype = Object.create(n.prototype), t.prototype.constructor = t, t.__proto__ = n;
                    var i = r.prototype;
                    return i.getChildContext = function() {
                        return {
                            transitionGroup: null
                        }
                    }, r.getDerivedStateFromProps = function(e, t) {
                        return e.in && t.status === u ? {
                            status: s
                        } : null
                    }, i.componentDidMount = function() {
                        this.updateStatus(!0, this.appearStatus)
                    }, i.componentDidUpdate = function(e) {
                        var t = null;
                        if (e !== this.props) {
                            var n = this.state.status;
                            this.props.in ? n !== c && n !== d && (t = c) : n !== c && n !== d || (t = p)
                        }
                        this.updateStatus(!1, t)
                    }, i.componentWillUnmount = function() {
                        this.cancelNextCallback()
                    }, i.getTimeouts = function() {
                        var e, t, n, r = this.props.timeout;
                        return e = t = n = r, null != r && "number" != typeof r && (e = r.exit, t = r.enter, n = void 0 !== r.appear ? r.appear : t), {
                            exit: e,
                            enter: t,
                            appear: n
                        }
                    }, i.updateStatus = function(e, t) {
                        if (void 0 === e && (e = !1), null !== t) {
                            this.cancelNextCallback();
                            var n = a.default.findDOMNode(this);
                            t === c ? this.performEnter(n, e) : this.performExit(n)
                        } else this.props.unmountOnExit && this.state.status === s && this.setState({
                            status: u
                        })
                    }, i.performEnter = function(e, t) {
                        var n = this,
                            r = this.props.enter,
                            o = this.context.transitionGroup ? this.context.transitionGroup.isMounting : t,
                            a = this.getTimeouts(),
                            i = o ? a.appear : a.enter;
                        t || r ? (this.props.onEnter(e, o), this.safeSetState({
                            status: c
                        }, (function() {
                            n.props.onEntering(e, o), n.onTransitionEnd(e, i, (function() {
                                n.safeSetState({
                                    status: d
                                }, (function() {
                                    n.props.onEntered(e, o)
                                }))
                            }))
                        }))) : this.safeSetState({
                            status: d
                        }, (function() {
                            n.props.onEntered(e)
                        }))
                    }, i.performExit = function(e) {
                        var t = this,
                            n = this.props.exit,
                            r = this.getTimeouts();
                        n ? (this.props.onExit(e), this.safeSetState({
                            status: p
                        }, (function() {
                            t.props.onExiting(e), t.onTransitionEnd(e, r.exit, (function() {
                                t.safeSetState({
                                    status: s
                                }, (function() {
                                    t.props.onExited(e)
                                }))
                            }))
                        }))) : this.safeSetState({
                            status: s
                        }, (function() {
                            t.props.onExited(e)
                        }))
                    }, i.cancelNextCallback = function() {
                        null !== this.nextCallback && (this.nextCallback.cancel(), this.nextCallback = null)
                    }, i.safeSetState = function(e, t) {
                        t = this.setNextCallback(t), this.setState(e, t)
                    }, i.setNextCallback = function(e) {
                        var t = this,
                            n = !0;
                        return this.nextCallback = function(r) {
                            n && (n = !1, t.nextCallback = null, e(r))
                        }, this.nextCallback.cancel = function() {
                            n = !1
                        }, this.nextCallback
                    }, i.onTransitionEnd = function(e, t, n) {
                        this.setNextCallback(n);
                        var r = null == t && !this.props.addEndListener;
                        e && !r ? (this.props.addEndListener && this.props.addEndListener(e, this.nextCallback), null != t && setTimeout(this.nextCallback, t)) : setTimeout(this.nextCallback, 0)
                    }, i.render = function() {
                        var e = this.state.status;
                        if (e === u) return null;
                        var t = this.props,
                            n = t.children,
                            r = function(e, t) {
                                if (null == e) return {};
                                var n, r, o = {},
                                    a = Object.keys(e);
                                for (r = 0; r < a.length; r++) n = a[r], t.indexOf(n) >= 0 || (o[n] = e[n]);
                                return o
                            }(t, ["children"]);
                        if (delete r.in, delete r.mountOnEnter, delete r.unmountOnExit, delete r.appear, delete r.enter, delete r.exit, delete r.timeout, delete r.addEndListener, delete r.onEnter, delete r.onEntering, delete r.onEntered, delete r.onExit, delete r.onExiting, delete r.onExited, "function" == typeof n) return n(e, r);
                        var a = o.default.Children.only(n);
                        return o.default.cloneElement(a, r)
                    }, r
                }(o.default.Component);

                function h() {}
                f.contextTypes = {
                    transitionGroup: r.object
                }, f.childContextTypes = {
                    transitionGroup: function() {}
                }, f.propTypes = {}, f.defaultProps = { in: !1,
                    mountOnEnter: !1,
                    unmountOnExit: !1,
                    appear: !1,
                    enter: !0,
                    exit: !0,
                    onEnter: h,
                    onEntering: h,
                    onEntered: h,
                    onExit: h,
                    onExiting: h,
                    onExited: h
                }, f.UNMOUNTED = 0, f.EXITED = 1, f.ENTERING = 2, f.ENTERED = 3, f.EXITING = 4;
                var y = (0, i.polyfill)(f);
                t.ZP = y
            },
            8603: function(e, t, n) {
                "use strict";
                t.__esModule = !0, t.classNamesShape = t.timeoutsShape = void 0;
                var r;
                (r = n(5517)) && r.__esModule;
                t.timeoutsShape = null;
                t.classNamesShape = null
            },
            2779: function(e, t) {
                var n;
                ! function() {
                    "use strict";
                    var r = {}.hasOwnProperty;

                    function o() {
                        for (var e = [], t = 0; t < arguments.length; t++) {
                            var n = arguments[t];
                            if (n) {
                                var a = typeof n;
                                if ("string" === a || "number" === a) e.push(n);
                                else if (Array.isArray(n) && n.length) {
                                    var i = o.apply(null, n);
                                    i && e.push(i)
                                } else if ("object" === a)
                                    for (var l in n) r.call(n, l) && n[l] && e.push(l)
                            }
                        }
                        return e.join(" ")
                    }
                    e.exports ? (o.default = o, e.exports = o) : void 0 === (n = function() {
                        return o
                    }.apply(t, [])) || (e.exports = n)
                }()
            },
            7718: function(e, t, n) {
                "use strict";
                var r = n(4859);
                t.__esModule = !0, t.default = function(e) {
                    void 0 === e && (e = (0, o.default)());
                    try {
                        return e.activeElement
                    } catch (e) {}
                };
                var o = r(n(5759));
                e.exports = t.default
            },
            2196: function(e, t, n) {
                "use strict";
                var r = n(4859);
                t.__esModule = !0, t.default = function(e, t) {
                    e.classList ? e.classList.add(t) : (0, o.default)(e, t) || ("string" == typeof e.className ? e.className = e.className + " " + t : e.setAttribute("class", (e.className && e.className.baseVal || "") + " " + t))
                };
                var o = r(n(7218));
                e.exports = t.default
            },
            7218: function(e, t) {
                "use strict";
                t.__esModule = !0, t.default = function(e, t) {
                    return e.classList ? !!t && e.classList.contains(t) : -1 !== (" " + (e.className.baseVal || e.className) + " ").indexOf(" " + t + " ")
                }, e.exports = t.default
            },
            3589: function(e, t, n) {
                "use strict";
                var r = n(4859);
                t.__esModule = !0, t.default = void 0;
                var o = r(n(2196));
                t.addClass = o.default;
                var a = r(n(4812));
                t.removeClass = a.default;
                var i = r(n(7218));
                t.hasClass = i.default;
                var l = {
                    addClass: o.default,
                    removeClass: a.default,
                    hasClass: i.default
                };
                t.default = l
            },
            4812: function(e) {
                "use strict";

                function t(e, t) {
                    return e.replace(new RegExp("(^|\\s)" + t + "(?:\\s|$)", "g"), "$1").replace(/\s+/g, " ").replace(/^\s*|\s*$/g, "")
                }
                e.exports = function(e, n) {
                    e.classList ? e.classList.remove(n) : "string" == typeof e.className ? e.className = t(e.className, n) : e.setAttribute("class", t(e.className && e.className.baseVal || "", n))
                }
            },
            6540: function(e, t, n) {
                "use strict";
                var r = n(4859);
                t.__esModule = !0, t.default = function(e, t) {
                    return function(n) {
                        var r = n.currentTarget,
                            i = n.target;
                        (0, a.default)(r, e).some((function(e) {
                            return (0, o.default)(e, i)
                        })) && t.call(this, n)
                    }
                };
                var o = r(n(1009)),
                    a = r(n(351));
                e.exports = t.default
            },
            1836: function(e, t, n) {
                "use strict";
                var r = n(4859);
                t.ZP = void 0;
                var o = r(n(8331));
                o.default;
                var a = r(n(863));
                a.default;
                var i = r(n(6540));
                i.default;
                var l = r(n(2777));
                l.default;
                var u = {
                    on: o.default,
                    off: a.default,
                    filter: i.default,
                    listen: l.default
                };
                t.ZP = u
            },
            2777: function(e, t, n) {
                "use strict";
                var r = n(4859);
                t.__esModule = !0, t.default = void 0;
                var o = r(n(6892)),
                    a = r(n(8331)),
                    i = r(n(863)),
                    l = function() {};
                o.default && (l = function(e, t, n, r) {
                    return (0, a.default)(e, t, n, r),
                        function() {
                            (0, i.default)(e, t, n, r)
                        }
                });
                var u = l;
                t.default = u, e.exports = t.default
            },
            863: function(e, t, n) {
                "use strict";
                var r = n(4859);
                t.__esModule = !0, t.default = void 0;
                var o = function() {};
                r(n(6892)).default && (o = document.addEventListener ? function(e, t, n, r) {
                    return e.removeEventListener(t, n, r || !1)
                } : document.attachEvent ? function(e, t, n) {
                    return e.detachEvent("on" + t, n)
                } : void 0);
                var a = o;
                t.default = a, e.exports = t.default
            },
            8331: function(e, t, n) {
                "use strict";
                var r = n(4859);
                t.__esModule = !0, t.default = void 0;
                var o = function() {};
                r(n(6892)).default && (o = document.addEventListener ? function(e, t, n, r) {
                    return e.addEventListener(t, n, r || !1)
                } : document.attachEvent ? function(e, t, n) {
                    return e.attachEvent("on" + t, (function(t) {
                        (t = t || window.event).target = t.target || t.srcElement, t.currentTarget = e, n.call(e, t)
                    }))
                } : void 0);
                var a = o;
                t.default = a, e.exports = t.default
            },
            5759: function(e, t) {
                "use strict";
                t.__esModule = !0, t.default = function(e) {
                    return e && e.ownerDocument || document
                }, e.exports = t.default
            },
            1009: function(e, t, n) {
                "use strict";
                var r = n(4859);
                t.__esModule = !0, t.default = void 0;
                var o = r(n(6892)).default ? function(e, t) {
                    return e.contains ? e.contains(t) : e.compareDocumentPosition ? e === t || !!(16 & e.compareDocumentPosition(t)) : a(e, t)
                } : a;

                function a(e, t) {
                    if (t)
                        do {
                            if (t === e) return !0
                        } while (t = t.parentNode);
                    return !1
                }
                t.default = o, e.exports = t.default
            },
            4615: function(e, t) {
                "use strict";
                t.__esModule = !0, t.default = function(e) {
                    return e === e.window ? e : 9 === e.nodeType && (e.defaultView || e.parentWindow)
                }, e.exports = t.default
            },
            351: function(e, t) {
                "use strict";
                t.__esModule = !0, t.default = function(e, t) {
                    var o, a = "#" === t[0],
                        i = "." === t[0],
                        l = a || i ? t.slice(1) : t;
                    if (n.test(l)) return a ? (e = e.getElementById ? e : document, (o = e.getElementById(l)) ? [o] : []) : e.getElementsByClassName && i ? r(e.getElementsByClassName(l)) : r(e.getElementsByTagName(t));
                    return r(e.querySelectorAll(t))
                };
                var n = /^[\w-]*$/,
                    r = Function.prototype.bind.call(Function.prototype.call, [].slice);
                e.exports = t.default
            },
            8196: function(e, t, n) {
                "use strict";
                var r = n(4859);
                t.__esModule = !0, t.default = function(e) {
                    if (!e) throw new TypeError("No Element passed to `getComputedStyle()`");
                    var t = e.ownerDocument;
                    return "defaultView" in t ? t.defaultView.opener ? e.ownerDocument.defaultView.getComputedStyle(e, null) : window.getComputedStyle(e, null) : {
                        getPropertyValue: function(t) {
                            var n = e.style;
                            "float" == (t = (0, o.default)(t)) && (t = "styleFloat");
                            var r = e.currentStyle[t] || null;
                            if (null == r && n && n[t] && (r = n[t]), i.test(r) && !a.test(t)) {
                                var l = n.left,
                                    u = e.runtimeStyle,
                                    s = u && u.left;
                                s && (u.left = e.currentStyle.left), n.left = "fontSize" === t ? "1em" : r, r = n.pixelLeft + "px", n.left = l, s && (u.left = s)
                            }
                            return r
                        }
                    }
                };
                var o = r(n(5165)),
                    a = /^(top|right|bottom|left)$/,
                    i = /^([+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|))(?!px)[a-z%]+$/i;
                e.exports = t.default
            },
            9182: function(e, t, n) {
                "use strict";
                var r = n(4859);
                t.__esModule = !0, t.default = function(e, t, n) {
                    var r = "",
                        c = "",
                        d = t;
                    if ("string" == typeof t) {
                        if (void 0 === n) return e.style[(0, o.default)(t)] || (0, i.default)(e).getPropertyValue((0, a.default)(t));
                        (d = {})[t] = n
                    }
                    Object.keys(d).forEach((function(t) {
                        var n = d[t];
                        n || 0 === n ? (0, s.default)(t) ? c += t + "(" + n + ") " : r += (0, a.default)(t) + ": " + n + ";" : (0, l.default)(e, (0, a.default)(t))
                    })), c && (r += u.transform + ": " + c + ";");
                    e.style.cssText += ";" + r
                };
                var o = r(n(5165)),
                    a = r(n(5273)),
                    i = r(n(8196)),
                    l = r(n(9087)),
                    u = n(4596),
                    s = r(n(3107));
                e.exports = t.default
            },
            9087: function(e, t) {
                "use strict";
                t.__esModule = !0, t.default = function(e, t) {
                    return "removeProperty" in e.style ? e.style.removeProperty(t) : e.style.removeAttribute(t)
                }, e.exports = t.default
            },
            3107: function(e, t) {
                "use strict";
                t.__esModule = !0, t.default = function(e) {
                    return !(!e || !n.test(e))
                };
                var n = /^((translate|rotate|scale)(X|Y|Z|3d)?|matrix(3d)?|perspective|skew(X|Y)?)$/i;
                e.exports = t.default
            },
            4596: function(e, t, n) {
                "use strict";
                var r = n(4859);
                t.__esModule = !0, t.default = t.animationEnd = t.animationDelay = t.animationTiming = t.animationDuration = t.animationName = t.transitionEnd = t.transitionDuration = t.transitionDelay = t.transitionTiming = t.transitionProperty = t.transform = void 0;
                var o, a, i, l, u, s, c, d, p, f, h, y = r(n(6892)),
                    v = "transform";
                if (t.transform = v, t.animationEnd = i, t.transitionEnd = a, t.transitionDelay = c, t.transitionTiming = s, t.transitionDuration = u, t.transitionProperty = l, t.animationDelay = h, t.animationTiming = f, t.animationDuration = p, t.animationName = d, y.default) {
                    var m = function() {
                        for (var e, t, n = document.createElement("div").style, r = {
                                O: function(e) {
                                    return "o" + e.toLowerCase()
                                },
                                Moz: function(e) {
                                    return e.toLowerCase()
                                },
                                Webkit: function(e) {
                                    return "webkit" + e
                                },
                                ms: function(e) {
                                    return "MS" + e
                                }
                            }, o = Object.keys(r), a = "", i = 0; i < o.length; i++) {
                            var l = o[i];
                            if (l + "TransitionProperty" in n) {
                                a = "-" + l.toLowerCase(), e = r[l]("TransitionEnd"), t = r[l]("AnimationEnd");
                                break
                            }
                        }!e && "transitionProperty" in n && (e = "transitionend");
                        !t && "animationName" in n && (t = "animationend");
                        return n = null, {
                            animationEnd: t,
                            transitionEnd: e,
                            prefix: a
                        }
                    }();
                    o = m.prefix, t.transitionEnd = a = m.transitionEnd, t.animationEnd = i = m.animationEnd, t.transform = v = o + "-" + v, t.transitionProperty = l = o + "-transition-property", t.transitionDuration = u = o + "-transition-duration", t.transitionDelay = c = o + "-transition-delay", t.transitionTiming = s = o + "-transition-timing-function", t.animationName = d = o + "-animation-name", t.animationDuration = p = o + "-animation-duration", t.animationTiming = f = o + "-animation-delay", t.animationDelay = h = o + "-animation-timing-function"
                }
                var E = {
                    transform: v,
                    end: a,
                    property: l,
                    timing: s,
                    delay: c,
                    duration: u
                };
                t.default = E
            },
            1124: function(e, t) {
                "use strict";
                t.__esModule = !0, t.default = function(e) {
                    return e.replace(n, (function(e, t) {
                        return t.toUpperCase()
                    }))
                };
                var n = /-(.)/g;
                e.exports = t.default
            },
            5165: function(e, t, n) {
                "use strict";
                var r = n(4859);
                t.__esModule = !0, t.default = function(e) {
                    return (0, o.default)(e.replace(a, "ms-"))
                };
                var o = r(n(1124)),
                    a = /^-ms-/;
                e.exports = t.default
            },
            3994: function(e, t) {
                "use strict";
                t.__esModule = !0, t.default = function(e) {
                    return e.replace(n, "-$1").toLowerCase()
                };
                var n = /([A-Z])/g;
                e.exports = t.default
            },
            5273: function(e, t, n) {
                "use strict";
                var r = n(4859);
                t.__esModule = !0, t.default = function(e) {
                    return (0, o.default)(e).replace(a, "-ms-")
                };
                var o = r(n(3994)),
                    a = /^ms-/;
                e.exports = t.default
            },
            6892: function(e, t) {
                "use strict";
                t.__esModule = !0, t.default = void 0;
                var n = !("undefined" == typeof window || !window.document || !window.document.createElement);
                t.default = n, e.exports = t.default
            },
            8616: function(e, t, n) {
                "use strict";
                var r = n(4859);
                t.__esModule = !0, t.default = function(e) {
                    if ((!o && 0 !== o || e) && a.default) {
                        var t = document.createElement("div");
                        t.style.position = "absolute", t.style.top = "-9999px", t.style.width = "50px", t.style.height = "50px", t.style.overflow = "scroll", document.body.appendChild(t), o = t.offsetWidth - t.clientWidth, document.body.removeChild(t)
                    }
                    return o
                };
                var o, a = r(n(6892));
                e.exports = t.default
            },
            7677: function(e) {
                "use strict";
                e.exports = function(e, t, n, r, o, a, i, l) {
                    if (!e) {
                        var u;
                        if (void 0 === t) u = new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");
                        else {
                            var s = [n, r, o, a, i, l],
                                c = 0;
                            (u = new Error(t.replace(/%s/g, (function() {
                                return s[c++]
                            })))).name = "Invariant Violation"
                        }
                        throw u.framesToPop = 1, u
                    }
                }
            },
            5539: function(e, t, n) {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: !0
                });
                var r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                        return typeof e
                    } : function(e) {
                        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                    },
                    o = i(n(3804)),
                    a = i(n(7965));

                function i(e) {
                    return e && e.__esModule ? e : {
                        default: e
                    }
                }
                t.default = (0, a.default)((function(e, t, n, a, i) {
                    var l = e[t],
                        u = void 0 === l ? "undefined" : r(l);
                    return o.default.isValidElement(l) ? new Error("Invalid " + a + " `" + i + "` of type ReactElement supplied to `" + n + "`, expected a ReactComponent or a DOMElement. You can usually obtain a ReactComponent or DOMElement from a ReactElement by attaching a ref to it.") : "object" === u && "function" == typeof l.render || 1 === l.nodeType ? null : new Error("Invalid " + a + " `" + i + "` of value `" + l + "` supplied to `" + n + "`, expected a ReactComponent or a DOMElement.")
                })), e.exports = t.default
            },
            1083: function(e, t, n) {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.default = l;
                var r, o = n(1449),
                    a = (r = o) && r.__esModule ? r : {
                        default: r
                    };
                var i = {};

                function l(e, t) {
                    return function(n, r, o, l, u) {
                        var s = o || "<<anonymous>>",
                            c = u || r;
                        if (null != n[r]) {
                            var d = o + "." + r;
                            (0, a.default)(i[d], "The " + l + " `" + c + "` of `" + s + "` is deprecated. " + t + "."), i[d] = !0
                        }
                        for (var p = arguments.length, f = Array(p > 5 ? p - 5 : 0), h = 5; h < p; h++) f[h - 5] = arguments[h];
                        return e.apply(void 0, [n, r, o, l, u].concat(f))
                    }
                }
                l._resetWarned = function() {
                    i = {}
                }, e.exports = t.default
            },
            1904: function(e, t, n) {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: !0
                });
                var r = i(n(3804)),
                    o = n(7302),
                    a = i(n(7965));

                function i(e) {
                    return e && e.__esModule ? e : {
                        default: e
                    }
                }
                t.default = (0, a.default)((function(e, t, n, a, i) {
                    var l = e[t];
                    return r.default.isValidElement(l) ? new Error("Invalid " + a + " `" + i + "` of type ReactElement supplied to `" + n + "`,expected an element type (a string , component class, or function component).") : (0, o.isValidElementType)(l) ? null : new Error("Invalid " + a + " `" + i + "` of value `" + l + "` supplied to `" + n + "`, expected an element type (a string , component class, or function component).")
                })), e.exports = t.default
            },
            7965: function(e, t) {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.default = function(e) {
                    function t(t, n, r, o, a, i) {
                        var l = o || "<<anonymous>>",
                            u = i || r;
                        if (null == n[r]) return t ? new Error("Required " + a + " `" + u + "` was not specified in `" + l + "`.") : null;
                        for (var s = arguments.length, c = Array(s > 6 ? s - 6 : 0), d = 6; d < s; d++) c[d - 6] = arguments[d];
                        return e.apply(void 0, [n, r, l, a, u].concat(c))
                    }
                    var n = t.bind(null, !1);
                    return n.isRequired = t.bind(null, !0), n
                }, e.exports = t.default
            },
            1449: function(e) {
                "use strict";
                var t = function() {};
                e.exports = t
            },
            2564: function(e) {
                "use strict";
                e.exports = function() {}
            },
            5517: function(e) {
                "use strict";
                e.exports = PropTypes
            },
            3804: function(e) {
                "use strict";
                e.exports = React
            },
            7196: function(e) {
                "use strict";
                e.exports = ReactDOM
            }
        },
        t = {};

    function n(r) {
        if (t[r]) return t[r].exports;
        var o = t[r] = {
            id: r,
            loaded: !1,
            exports: {}
        };
        return e[r](o, o.exports, n), o.loaded = !0, o.exports
    }
    n.n = function(e) {
            var t = e && e.__esModule ? function() {
                return e.default
            } : function() {
                return e
            };
            return n.d(t, {
                a: t
            }), t
        }, n.d = function(e, t) {
            for (var r in t) n.o(t, r) && !n.o(e, r) && Object.defineProperty(e, r, {
                enumerable: !0,
                get: t[r]
            })
        }, n.o = function(e, t) {
            return Object.prototype.hasOwnProperty.call(e, t)
        }, n.r = function(e) {
            "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
                value: "Module"
            }), Object.defineProperty(e, "__esModule", {
                value: !0
            })
        }, n.nmd = function(e) {
            return e.paths = [], e.children || (e.children = []), e
        },
        function() {
            "use strict";
            var e = {};
            n.r(e), n.d(e, {
                getState: function() {
                    return z
                },
                lock: function() {
                    return Z
                },
                unlock: function() {
                    return K
                }
            });
            var t = {};
            n.r(t), n.d(t, {
                getMetadata: function() {
                    return X
                }
            });
            var r = {};
            n.r(r), n.d(r, {
                getEmailConfiguration: function() {
                    return ie
                },
                updateForCurrentUser: function() {
                    return ae
                }
            });
            var o = {};
            n.r(o), n.d(o, {
                getDetailsForUniverseIds: function() {
                    return de
                }
            });
            var a = {};
            n.r(a), n.d(a, {
                changeForCurrentUser: function() {
                    return Ie
                },
                resetSendPrompted: function() {
                    return Ne
                },
                validate: function() {
                    return we
                }
            });
            var i = {};
            n.r(i), n.d(i, {
                getAllForCurrentUser: function() {
                    return He
                },
                updateForCurrentUser: function() {
                    return Ve
                }
            });
            var l = {};
            n.r(l), n.d(l, {
                getPuzzle: function() {
                    return Ke
                },
                verifyPuzzle: function() {
                    return Ze
                }
            });
            var u = {};
            n.r(u), n.d(u, {
                generateToken: function() {
                    return tt
                }
            });
            var s = {};
            n.r(s), n.d(s, {
                answerQuestion: function() {
                    return ct
                },
                getQuestion: function() {
                    return st
                }
            });
            var c = {};
            n.r(c), n.d(c, {
                getIconsForUniverseIds: function() {
                    return mt
                }
            });
            var d = {};
            n.r(d), n.d(d, {
                queryAndOverwriteResourcesForNamespace: function() {
                    return Nt
                }
            });
            var p = {};
            n.r(p), n.d(p, {
                getMetadata: function() {
                    return xt
                },
                getSecurityKeyOptions: function() {
                    return Gt
                },
                getUserConfiguration: function() {
                    return Pt
                },
                sendEmailCode: function() {
                    return Rt
                },
                sendSmsCode: function() {
                    return Ht
                },
                verifyAuthenticatorCode: function() {
                    return kt
                },
                verifyEmailCode: function() {
                    return Mt
                },
                verifyRecoveryCode: function() {
                    return Ut
                },
                verifySecurityKeyCredential: function() {
                    return Wt
                },
                verifySmsCode: function() {
                    return Vt
                }
            });
            var f = {};
            n.r(f), n.d(f, {
                recordMetric: function() {
                    return Bt
                }
            });
            var h = {};
            n.r(h), n.d(h, {
                ActionType: function() {
                    return Tr
                },
                ErrorCode: function() {
                    return Ir
                },
                renderChallenge: function() {
                    return Fr
                }
            });
            var y = {};
            n.r(y), n.d(y, {
                ErrorCode: function() {
                    return Kr
                },
                renderChallenge: function() {
                    return oo
                }
            });
            var v = {};
            n.r(v), n.d(v, {
                ErrorCode: function() {
                    return Eo
                },
                renderChallenge: function() {
                    return Bo
                }
            });
            var m = {};
            n.r(m), n.d(m, {
                ErrorCode: function() {
                    return sa
                },
                renderChallenge: function() {
                    return xa
                }
            });
            var E = {};
            n.r(E), n.d(E, {
                ErrorCode: function() {
                    return Ea
                },
                renderChallenge: function() {
                    return ui
                }
            });
            var g = {};
            n.r(g), n.d(g, {
                ActionType: function() {
                    return Ba
                },
                ErrorCode: function() {
                    return za
                },
                MediaType: function() {
                    return qa
                },
                renderChallenge: function() {
                    return pl
                }
            });
            var b = {};
            n.r(b), n.d(b, {
                ChallengeError: function() {
                    return Xu
                },
                ChallengeErrorKind: function() {
                    return hl
                },
                ChallengeType: function() {
                    return yl
                },
                interceptChallenge: function() {
                    return es
                },
                parseChallengeSpecificProperties: function() {
                    return Qu
                },
                renderChallenge: function() {
                    return Ju
                }
            });
            var _ = {};
            n.r(_), n.d(_, {
                ChallengeType: function() {
                    return yl
                },
                HybridTarget: function() {
                    return xu
                },
                renderChallengeFromQueryParameters: function() {
                    return Cs
                }
            });
            var C, S, T = Roblox,
                I = n.n(T),
                N = n(3804),
                w = n.n(N),
                A = n(7196),
                O = n.n(A),
                D = CoreUtilities,
                L = function(e) {
                    return {
                        isError: !1,
                        value: e
                    }
                },
                x = L,
                P = function(e) {
                    return {
                        isError: !0,
                        error: e
                    }
                },
                R = function(e, t) {
                    return e.isError ? e : L(t(e.value))
                },
                M = function(e, t, n, r) {
                    return new(n || (n = Promise))((function(o, a) {
                        function i(e) {
                            try {
                                u(r.next(e))
                            } catch (e) {
                                a(e)
                            }
                        }

                        function l(e) {
                            try {
                                u(r.throw(e))
                            } catch (e) {
                                a(e)
                            }
                        }

                        function u(e) {
                            var t;
                            e.done ? o(e.value) : (t = e.value, t instanceof n ? t : new n((function(e) {
                                e(t)
                            }))).then(i, l)
                        }
                        u((r = r.apply(e, t || [])).next())
                    }))
                },
                k = function(e, t) {
                    var n, r, o, a, i = {
                        label: 0,
                        sent: function() {
                            if (1 & o[0]) throw o[1];
                            return o[1]
                        },
                        trys: [],
                        ops: []
                    };
                    return a = {
                        next: l(0),
                        throw: l(1),
                        return: l(2)
                    }, "function" == typeof Symbol && (a[Symbol.iterator] = function() {
                        return this
                    }), a;

                    function l(a) {
                        return function(l) {
                            return function(a) {
                                if (n) throw new TypeError("Generator is already executing.");
                                for (; i;) try {
                                    if (n = 1, r && (o = 2 & a[0] ? r.return : a[0] ? r.throw || ((o = r.return) && o.call(r), 0) : r.next) && !(o = o.call(r, a[1])).done) return o;
                                    switch (r = 0, o && (a = [2 & a[0], o.value]), a[0]) {
                                        case 0:
                                        case 1:
                                            o = a;
                                            break;
                                        case 4:
                                            return i.label++, {
                                                value: a[1],
                                                done: !1
                                            };
                                        case 5:
                                            i.label++, r = a[1], a = [0];
                                            continue;
                                        case 7:
                                            a = i.ops.pop(), i.trys.pop();
                                            continue;
                                        default:
                                            if (!(o = i.trys, (o = o.length > 0 && o[o.length - 1]) || 6 !== a[0] && 2 !== a[0])) {
                                                i = 0;
                                                continue
                                            }
                                            if (3 === a[0] && (!o || a[1] > o[0] && a[1] < o[3])) {
                                                i.label = a[1];
                                                break
                                            }
                                            if (6 === a[0] && i.label < o[1]) {
                                                i.label = o[1], o = a;
                                                break
                                            }
                                            if (o && i.label < o[2]) {
                                                i.label = o[2], i.ops.push(a);
                                                break
                                            }
                                            o[2] && i.ops.pop(), i.trys.pop();
                                            continue
                                    }
                                    a = t.call(e, i)
                                } catch (e) {
                                    a = [6, e], r = 0
                                } finally {
                                    n = o = 0
                                }
                                if (5 & a[0]) throw a[1];
                                return {
                                    value: a[0] ? a[1] : void 0,
                                    done: !0
                                }
                            }([a, l])
                        }
                    }
                },
                U = function(e) {
                    return "object" != typeof e ? null : function(e) {
                        var t = [];
                        if (!e || "object" != typeof e) return [];
                        var n = e.errors;
                        return n instanceof Array ? (n.forEach((function(e) {
                            if (e && "object" == typeof e) {
                                var n = e.code;
                                "number" == typeof n && t.push(n)
                            }
                        })), t) : []
                    }(e.data)[0] || null
                },
                H = function(e, t) {
                    return null == e ? null : Object.values(e).includes(t) ? t : null
                },
                V = function(e, t) {
                    return M(void 0, void 0, Promise, (function() {
                        var n, r, o;
                        return k(this, (function(a) {
                            switch (a.label) {
                                case 0:
                                    return a.trys.push([0, 2, , 3]), [4, e];
                                case 1:
                                    return n = a.sent(), [2, x(n.data)];
                                case 2:
                                    return r = a.sent(), o = U(r), [2, P(H(t, o))];
                                case 3:
                                    return [2]
                            }
                        }))
                    }))
                },
                G = null !== (C = T.EnvironmentUrls.authApi) && void 0 !== C ? C : "URL_NOT_FOUND";
            ! function(e) {
                e[e.NO_ACCOUNT_PIN = 1] = "NO_ACCOUNT_PIN", e[e.ACCOUNT_LOCKED = 2] = "ACCOUNT_LOCKED", e[e.FLOODED = 3] = "FLOODED", e[e.INCORRECT_PIN = 4] = "INCORRECT_PIN"
            }(S || (S = {}));
            var W, F, j = {
                    withCredentials: !0,
                    url: G + "/v1/account/pin",
                    timeout: 1e4
                },
                B = {
                    withCredentials: !0,
                    url: G + "/v1/account/pin/unlock",
                    timeout: 1e4
                },
                q = {
                    withCredentials: !0,
                    url: G + "/v1/account/pin/lock",
                    timeout: 1e4
                },
                z = function() {
                    return V(D.httpService.get(j), S)
                },
                K = function(e) {
                    return V(D.httpService.post(B, {
                        pin: e
                    }), S)
                },
                Z = function() {
                    return V(D.httpService.post(q), S)
                },
                Y = (null !== (W = T.EnvironmentUrls.apiGatewayCdnUrl) && void 0 !== W ? W : "URL_NOT_FOUND") + "/captcha";
            ! function(e) {
                e[e.UNKNOWN = 0] = "UNKNOWN"
            }(F || (F = {}));
            var $, Q, J = {
                    url: Y + "/v1/metadata",
                    timeout: 1e4
                },
                X = function() {
                    return V(D.httpService.get(J, {}), F)
                },
                ee = null !== ($ = T.EnvironmentUrls.accountSettingsApi) && void 0 !== $ ? $ : "URL_NOT_FOUND";
            ! function(e) {
                e[e.FEATURE_DISABLED = 2] = "FEATURE_DISABLED", e[e.TOO_MANY_ACCOUNTS_ON_EMAIL = 3] = "TOO_MANY_ACCOUNTS_ON_EMAIL", e[e.TOO_MANY_ATTEMPTS_TO_UPDATE_EMAIL = 6] = "TOO_MANY_ATTEMPTS_TO_UPDATE_EMAIL", e[e.INVALID_EMAIL_ADDRESS = 9] = "INVALID_EMAIL_ADDRESS"
            }(Q || (Q = {}));
            var te, ne, re = {
                    withCredentials: !0,
                    url: ee + "/v1/email",
                    timeout: 1e4
                },
                oe = {
                    withCredentials: !0,
                    url: ee + "/v1/email",
                    timeout: 1e4
                },
                ae = function(e) {
                    return V(D.httpService.post(re, {
                        emailAddress: e,
                        skipVerificationEmail: !0
                    }), Q)
                },
                ie = function() {
                    return V(D.httpService.get(oe), Q)
                },
                le = null !== (te = T.EnvironmentUrls.gamesApi) && void 0 !== te ? te : "URL_NOT_FOUND";
            ! function(e) {
                e[e.UNKNOWN = 0] = "UNKNOWN"
            }(ne || (ne = {}));
            var ue, se, ce = {
                    url: le + "/v1/games",
                    timeout: 1e4
                },
                de = function(e) {
                    return V(D.httpService.get(ce, {
                        universeIds: e
                    }), ne)
                },
                pe = null !== (ue = T.EnvironmentUrls.authApi) && void 0 !== ue ? ue : "URL_NOT_FOUND";
            ! function(e) {
                e[e.FLOODED = 2] = "FLOODED", e[e.INVALID_PASSWORD = 7] = "INVALID_PASSWORD", e[e.INVALID_CURRENT_PASSWORD = 8] = "INVALID_CURRENT_PASSWORD", e[e.PIN_LOCKED = 9] = "PIN_LOCKED"
            }(se || (se = {}));
            var fe, he = {
                withCredentials: !0,
                url: pe + "/v2/user/passwords/change",
                timeout: 1e4
            };
            ! function(e) {
                e[e.USER_DOES_NOT_HAVE_EMAIL = 22] = "USER_DOES_NOT_HAVE_EMAIL"
            }(fe || (fe = {}));
            var ye, ve = {
                withCredentials: !0,
                url: pe + "/v2/passwords/reset/send-prompted",
                timeout: 1e4
            };
            ! function(e) {
                e[e.VALID_PASSWORD = 0] = "VALID_PASSWORD", e[e.WEAK_PASSWORD = 1] = "WEAK_PASSWORD", e[e.SHORT_PASSWORD = 2] = "SHORT_PASSWORD", e[e.PASSWORD_SAME_AS_USERNAME = 3] = "PASSWORD_SAME_AS_USERNAME", e[e.FORBIDDEN_PASSWORD = 4] = "FORBIDDEN_PASSWORD", e[e.DUMB_STRINGS = 5] = "DUMB_STRINGS"
            }(ye || (ye = {}));
            var me, Ee, ge, be, _e, Ce = {
                    withCredentials: !0,
                    url: pe + "/v2/passwords/validate",
                    timeout: 1e4
                },
                Se = function(e, t, n, r) {
                    return new(n || (n = Promise))((function(o, a) {
                        function i(e) {
                            try {
                                u(r.next(e))
                            } catch (e) {
                                a(e)
                            }
                        }

                        function l(e) {
                            try {
                                u(r.throw(e))
                            } catch (e) {
                                a(e)
                            }
                        }

                        function u(e) {
                            var t;
                            e.done ? o(e.value) : (t = e.value, t instanceof n ? t : new n((function(e) {
                                e(t)
                            }))).then(i, l)
                        }
                        u((r = r.apply(e, t || [])).next())
                    }))
                },
                Te = function(e, t) {
                    var n, r, o, a, i = {
                        label: 0,
                        sent: function() {
                            if (1 & o[0]) throw o[1];
                            return o[1]
                        },
                        trys: [],
                        ops: []
                    };
                    return a = {
                        next: l(0),
                        throw: l(1),
                        return: l(2)
                    }, "function" == typeof Symbol && (a[Symbol.iterator] = function() {
                        return this
                    }), a;

                    function l(a) {
                        return function(l) {
                            return function(a) {
                                if (n) throw new TypeError("Generator is already executing.");
                                for (; i;) try {
                                    if (n = 1, r && (o = 2 & a[0] ? r.return : a[0] ? r.throw || ((o = r.return) && o.call(r), 0) : r.next) && !(o = o.call(r, a[1])).done) return o;
                                    switch (r = 0, o && (a = [2 & a[0], o.value]), a[0]) {
                                        case 0:
                                        case 1:
                                            o = a;
                                            break;
                                        case 4:
                                            return i.label++, {
                                                value: a[1],
                                                done: !1
                                            };
                                        case 5:
                                            i.label++, r = a[1], a = [0];
                                            continue;
                                        case 7:
                                            a = i.ops.pop(), i.trys.pop();
                                            continue;
                                        default:
                                            if (!(o = i.trys, (o = o.length > 0 && o[o.length - 1]) || 6 !== a[0] && 2 !== a[0])) {
                                                i = 0;
                                                continue
                                            }
                                            if (3 === a[0] && (!o || a[1] > o[0] && a[1] < o[3])) {
                                                i.label = a[1];
                                                break
                                            }
                                            if (6 === a[0] && i.label < o[1]) {
                                                i.label = o[1], o = a;
                                                break
                                            }
                                            if (o && i.label < o[2]) {
                                                i.label = o[2], i.ops.push(a);
                                                break
                                            }
                                            o[2] && i.ops.pop(), i.trys.pop();
                                            continue
                                    }
                                    a = t.call(e, i)
                                } catch (e) {
                                    a = [6, e], r = 0
                                } finally {
                                    n = o = 0
                                }
                                if (5 & a[0]) throw a[1];
                                return {
                                    value: a[0] ? a[1] : void 0,
                                    done: !0
                                }
                            }([a, l])
                        }
                    }
                },
                Ie = function(e, t) {
                    return V(D.httpService.post(he, {
                        currentPassword: e,
                        newPassword: t
                    }), se)
                },
                Ne = function() {
                    return V(D.httpService.post(ve), fe)
                },
                we = function(e, t) {
                    return Se(void 0, void 0, Promise, (function() {
                        return Te(this, (function(n) {
                            return [2, V(D.httpService.post(Ce, {
                                username: e,
                                password: t
                            }), null).then((function(e) {
                                return R(e, (function(e) {
                                    return H(ye, e.code)
                                }))
                            }))]
                        }))
                    }))
                },
                Ae = (null !== (me = T.EnvironmentUrls.apiGatewayUrl) && void 0 !== me ? me : "URL_NOT_FOUND") + "/account-security-service";
            ! function(e) {
                e[e.UNKNOWN = 1] = "UNKNOWN", e[e.REQUEST_TYPE_WAS_INVALID = 2] = "REQUEST_TYPE_WAS_INVALID", e[e.PROMPT_ASSIGNMENT_WAS_NOT_UPDATED = 3] = "PROMPT_ASSIGNMENT_WAS_NOT_UPDATED", e[e.UNKNOWN_PROMPT_TYPE = 4] = "UNKNOWN_PROMPT_TYPE"
            }(Ee || (Ee = {})),
            function(e) {
                e.TEXT_ONLY_BANNER = "DISPLAY_TYPE_TEXT_ONLY_BANNER"
            }(ge || (ge = {})),
            function(e) {
                e.GLOBAL = "PAGE_RESTRICTION_GLOBAL", e.HOME_PAGE_ONLY = "PAGE_RESTRICTION_HOME_PAGE"
            }(be || (be = {})),
            function(e) {
                e.CHANGE_PASSWORD__SUSPECTED_COMPROMISE = "PROMPT_TYPE_CHANGE_PASSWORD__SUSPECTED_COMPROMISE", e.CHANGE_PASSWORD__BREACHED_CREDENTIAL = "PROMPT_TYPE_CHANGE_PASSWORD__BREACHED_CREDENTIAL", e.AUTHENTICATOR_UPSELL = "PROMPT_TYPE_AUTHENTICATOR_UPSELL", e.ACCOUNT_RESTORES_POLICY_UPDATE = "PROMPT_TYPE_ACCOUNT_RESTORES_POLICY_UPDATE", e.ACCOUNT_RESTORES_POLICY_UPDATE_V2 = "PROMPT_TYPE_ACCOUNT_RESTORES_POLICY_UPDATE_V2", e.BROADER_AUTHENTICATOR_UPSELL = "PROMPT_TYPE_BROADER_AUTHENTICATOR_UPSELL"
            }(_e || (_e = {}));
            var Oe, De = {
                withCredentials: !0,
                url: Ae + "/v1/prompt-assignments",
                timeout: 1e4
            };
            ! function(e) {
                e.DISMISS_PROMPT = "DISMISS_PROMPT", e.DISABLE_PROMPT = "DISABLE_PROMPT"
            }(Oe || (Oe = {}));
            var Le, xe, Pe, Re = {
                    withCredentials: !0,
                    url: Ae + "/v1/prompt-assignments",
                    timeout: 1e4
                },
                Me = function() {
                    return (Me = Object.assign || function(e) {
                        for (var t, n = 1, r = arguments.length; n < r; n++)
                            for (var o in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
                        return e
                    }).apply(this, arguments)
                },
                ke = function(e, t, n, r) {
                    return new(n || (n = Promise))((function(o, a) {
                        function i(e) {
                            try {
                                u(r.next(e))
                            } catch (e) {
                                a(e)
                            }
                        }

                        function l(e) {
                            try {
                                u(r.throw(e))
                            } catch (e) {
                                a(e)
                            }
                        }

                        function u(e) {
                            var t;
                            e.done ? o(e.value) : (t = e.value, t instanceof n ? t : new n((function(e) {
                                e(t)
                            }))).then(i, l)
                        }
                        u((r = r.apply(e, t || [])).next())
                    }))
                },
                Ue = function(e, t) {
                    var n, r, o, a, i = {
                        label: 0,
                        sent: function() {
                            if (1 & o[0]) throw o[1];
                            return o[1]
                        },
                        trys: [],
                        ops: []
                    };
                    return a = {
                        next: l(0),
                        throw: l(1),
                        return: l(2)
                    }, "function" == typeof Symbol && (a[Symbol.iterator] = function() {
                        return this
                    }), a;

                    function l(a) {
                        return function(l) {
                            return function(a) {
                                if (n) throw new TypeError("Generator is already executing.");
                                for (; i;) try {
                                    if (n = 1, r && (o = 2 & a[0] ? r.return : a[0] ? r.throw || ((o = r.return) && o.call(r), 0) : r.next) && !(o = o.call(r, a[1])).done) return o;
                                    switch (r = 0, o && (a = [2 & a[0], o.value]), a[0]) {
                                        case 0:
                                        case 1:
                                            o = a;
                                            break;
                                        case 4:
                                            return i.label++, {
                                                value: a[1],
                                                done: !1
                                            };
                                        case 5:
                                            i.label++, r = a[1], a = [0];
                                            continue;
                                        case 7:
                                            a = i.ops.pop(), i.trys.pop();
                                            continue;
                                        default:
                                            if (!(o = i.trys, (o = o.length > 0 && o[o.length - 1]) || 6 !== a[0] && 2 !== a[0])) {
                                                i = 0;
                                                continue
                                            }
                                            if (3 === a[0] && (!o || a[1] > o[0] && a[1] < o[3])) {
                                                i.label = a[1];
                                                break
                                            }
                                            if (6 === a[0] && i.label < o[1]) {
                                                i.label = o[1], o = a;
                                                break
                                            }
                                            if (o && i.label < o[2]) {
                                                i.label = o[2], i.ops.push(a);
                                                break
                                            }
                                            o[2] && i.ops.pop(), i.trys.pop();
                                            continue
                                    }
                                    a = t.call(e, i)
                                } catch (e) {
                                    a = [6, e], r = 0
                                } finally {
                                    n = o = 0
                                }
                                if (5 & a[0]) throw a[1];
                                return {
                                    value: a[0] ? a[1] : void 0,
                                    done: !0
                                }
                            }([a, l])
                        }
                    }
                },
                He = function() {
                    return ke(void 0, void 0, Promise, (function() {
                        var e;
                        return Ue(this, (function(t) {
                            switch (t.label) {
                                case 0:
                                    return [4, V(D.httpService.get(De, {
                                        shouldReturnMetadata: !0
                                    }), Ee)];
                                case 1:
                                    return (e = t.sent()).isError ? [2, e] : [2, e = Me(Me({}, e), {
                                        value: e.value.filter((function(e) {
                                            return e.isGeneric ? Object.values(ge).includes(e.metadata.displayType) : Object.values(_e).includes(e.promptType)
                                        }))
                                    })]
                            }
                        }))
                    }))
                },
                Ve = function(e, t) {
                    return V(D.httpService.post(Re, {
                        action: e,
                        promptType: t
                    }), Ee)
                },
                Ge = (null !== (Le = T.EnvironmentUrls.apiGatewayUrl) && void 0 !== Le ? Le : "URL_NOT_FOUND") + "/proof-of-work-service";
            ! function(e) {
                e[e.UNKNOWN = 0] = "UNKNOWN", e[e.REQUEST_INVALID = 1] = "REQUEST_INVALID", e[e.SESSION_INACTIVE = 2] = "SESSION_INACTIVE"
            }(xe || (xe = {})),
            function(e) {
                e[e.TIME_LOCK = 0] = "TIME_LOCK"
            }(Pe || (Pe = {}));
            var We, Fe, je = {
                    withCredentials: !0,
                    url: Ge + "/v1/pow-puzzle",
                    timeout: 1e4
                },
                Be = {
                    withCredentials: !0,
                    url: Ge + "/v1/pow-puzzle",
                    timeout: 1e4
                },
                qe = function(e, t, n, r) {
                    return new(n || (n = Promise))((function(o, a) {
                        function i(e) {
                            try {
                                u(r.next(e))
                            } catch (e) {
                                a(e)
                            }
                        }

                        function l(e) {
                            try {
                                u(r.throw(e))
                            } catch (e) {
                                a(e)
                            }
                        }

                        function u(e) {
                            var t;
                            e.done ? o(e.value) : (t = e.value, t instanceof n ? t : new n((function(e) {
                                e(t)
                            }))).then(i, l)
                        }
                        u((r = r.apply(e, t || [])).next())
                    }))
                },
                ze = function(e, t) {
                    var n, r, o, a, i = {
                        label: 0,
                        sent: function() {
                            if (1 & o[0]) throw o[1];
                            return o[1]
                        },
                        trys: [],
                        ops: []
                    };
                    return a = {
                        next: l(0),
                        throw: l(1),
                        return: l(2)
                    }, "function" == typeof Symbol && (a[Symbol.iterator] = function() {
                        return this
                    }), a;

                    function l(a) {
                        return function(l) {
                            return function(a) {
                                if (n) throw new TypeError("Generator is already executing.");
                                for (; i;) try {
                                    if (n = 1, r && (o = 2 & a[0] ? r.return : a[0] ? r.throw || ((o = r.return) && o.call(r), 0) : r.next) && !(o = o.call(r, a[1])).done) return o;
                                    switch (r = 0, o && (a = [2 & a[0], o.value]), a[0]) {
                                        case 0:
                                        case 1:
                                            o = a;
                                            break;
                                        case 4:
                                            return i.label++, {
                                                value: a[1],
                                                done: !1
                                            };
                                        case 5:
                                            i.label++, r = a[1], a = [0];
                                            continue;
                                        case 7:
                                            a = i.ops.pop(), i.trys.pop();
                                            continue;
                                        default:
                                            if (!(o = i.trys, (o = o.length > 0 && o[o.length - 1]) || 6 !== a[0] && 2 !== a[0])) {
                                                i = 0;
                                                continue
                                            }
                                            if (3 === a[0] && (!o || a[1] > o[0] && a[1] < o[3])) {
                                                i.label = a[1];
                                                break
                                            }
                                            if (6 === a[0] && i.label < o[1]) {
                                                i.label = o[1], o = a;
                                                break
                                            }
                                            if (o && i.label < o[2]) {
                                                i.label = o[2], i.ops.push(a);
                                                break
                                            }
                                            o[2] && i.ops.pop(), i.trys.pop();
                                            continue
                                    }
                                    a = t.call(e, i)
                                } catch (e) {
                                    a = [6, e], r = 0
                                } finally {
                                    n = o = 0
                                }
                                if (5 & a[0]) throw a[1];
                                return {
                                    value: a[0] ? a[1] : void 0,
                                    done: !0
                                }
                            }([a, l])
                        }
                    }
                },
                Ke = function(e) {
                    return V(D.httpService.get(je, {
                        sessionID: e
                    }), xe)
                },
                Ze = function(e, t) {
                    return qe(void 0, void 0, Promise, (function() {
                        return ze(this, (function(n) {
                            return [2, V(D.httpService.post(Be, {
                                sessionID: e,
                                solution: t
                            }), xe)]
                        }))
                    }))
                },
                Ye = (null !== (We = T.EnvironmentUrls.apiGatewayUrl) && void 0 !== We ? We : "URL_NOT_FOUND") + "/reauthentication-service";
            ! function(e) {
                e[e.UNKNOWN = 1] = "UNKNOWN", e[e.REQUEST_TYPE_WAS_INVALID = 2] = "REQUEST_TYPE_WAS_INVALID", e[e.PASSWORD_INCORRECT = 3] = "PASSWORD_INCORRECT"
            }(Fe || (Fe = {}));
            var $e, Qe, Je, Xe, et = {
                    withCredentials: !0,
                    url: Ye + "/v1/token/generate",
                    timeout: 1e4
                },
                tt = function(e) {
                    return V(D.httpService.post(et, {
                        password: e
                    }), Fe)
                },
                nt = (null !== ($e = T.EnvironmentUrls.apiGatewayUrl) && void 0 !== $e ? $e : "URL_NOT_FOUND") + "/account-security-service";
            ! function(e) {
                e[e.UNKNOWN = 1] = "UNKNOWN", e[e.REQUEST_TYPE_WAS_INVALID = 2] = "REQUEST_TYPE_WAS_INVALID", e[e.SECURITY_QUESTIONS_DISABLED = 3] = "SECURITY_QUESTIONS_DISABLED", e[e.SESSION_INACTIVE = 4] = "SESSION_INACTIVE", e[e.QUESTION_NOT_FOUND = 5] = "QUESTION_NOT_FOUND", e[e.ANSWER_WRONG_FORMAT = 6] = "ANSWER_WRONG_FORMAT"
            }(Qe || (Qe = {})),
            function(e) {
                e[e.INVALID = 0] = "INVALID", e[e.MOST_RECENT_GAMES_PLAYED = 1] = "MOST_RECENT_GAMES_PLAYED"
            }(Je || (Je = {})),
            function(e) {
                e[e.PICK_ALL_CORRECT_CHOICES = 0] = "PICK_ALL_CORRECT_CHOICES", e[e.PICK_C_CORRECT_CHOICES = 1] = "PICK_C_CORRECT_CHOICES"
            }(Xe || (Xe = {}));
            var rt, ot, at, it, lt = {
                    withCredentials: !0,
                    url: nt + "/v1/security-question",
                    timeout: 1e4
                },
                ut = {
                    withCredentials: !0,
                    url: nt + "/v1/security-question",
                    timeout: 1e4
                },
                st = function(e, t) {
                    return V(D.httpService.get(lt, {
                        userId: e,
                        sessionId: t
                    }), Qe)
                },
                ct = function(e, t, n) {
                    return V(D.httpService.post(ut, {
                        userId: e,
                        answer: t,
                        sessionId: n
                    }), Qe)
                },
                dt = null !== (rt = T.EnvironmentUrls.thumbnailsApi) && void 0 !== rt ? rt : "URL_NOT_FOUND";
            ! function(e) {
                e[e.UNKNOWN = 0] = "UNKNOWN"
            }(ot || (ot = {})),
            function(e) {
                e.PNG = "Png", e.JPEG = "Jpeg"
            }(at || (at = {})),
            function(e) {
                e.ERROR = "Error", e.COMPLETED = "Completed", e.IN_REVIEW = "InReview", e.PENDING = "Pending", e.BLOCKED = "Blocked"
            }(it || (it = {}));
            var pt, ft, ht, yt, vt = {
                    url: dt + "/v1/games/icons",
                    timeout: 1e4
                },
                mt = function(e, t, n, r) {
                    return V(D.httpService.get(vt, {
                        universeIds: e,
                        size: t,
                        format: n,
                        isCircular: r
                    }), ot)
                },
                Et = "https://translations." + (null !== (pt = T.EnvironmentUrls.domain) && void 0 !== pt ? pt : "URL_NOT_FOUND");
            ! function(e) {
                e.EN_US = "en_us"
            }(ft || (ft = {})),
            function(e) {
                e[e.UNKNOWN = 0] = "UNKNOWN", e[e.INVALID_LOCALE = 1] = "INVALID_LOCALE", e[e.CONSUMER_TYPE_NOT_SUPPORTED = 2] = "CONSUMER_TYPE_NOT_SUPPORTED", e[e.TRANSLATIONS_DO_NOT_EXIST = 3] = "TRANSLATIONS_DO_NOT_EXIST", e[e.FEATURE_DISABLED = 4] = "FEATURE_DISABLED"
            }(ht || (ht = {})),
            function(e) {
                e.Web = "Web"
            }(yt || (yt = {}));
            var gt, bt, _t = {
                    withCredentials: !0,
                    url: Et + "/v1/translations/language-resources",
                    timeout: 1e4
                },
                Ct = function() {
                    return (Ct = Object.assign || function(e) {
                        for (var t, n = 1, r = arguments.length; n < r; n++)
                            for (var o in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
                        return e
                    }).apply(this, arguments)
                },
                St = function(e, t, n, r) {
                    return new(n || (n = Promise))((function(o, a) {
                        function i(e) {
                            try {
                                u(r.next(e))
                            } catch (e) {
                                a(e)
                            }
                        }

                        function l(e) {
                            try {
                                u(r.throw(e))
                            } catch (e) {
                                a(e)
                            }
                        }

                        function u(e) {
                            var t;
                            e.done ? o(e.value) : (t = e.value, t instanceof n ? t : new n((function(e) {
                                e(t)
                            }))).then(i, l)
                        }
                        u((r = r.apply(e, t || [])).next())
                    }))
                },
                Tt = function(e, t) {
                    var n, r, o, a, i = {
                        label: 0,
                        sent: function() {
                            if (1 & o[0]) throw o[1];
                            return o[1]
                        },
                        trys: [],
                        ops: []
                    };
                    return a = {
                        next: l(0),
                        throw: l(1),
                        return: l(2)
                    }, "function" == typeof Symbol && (a[Symbol.iterator] = function() {
                        return this
                    }), a;

                    function l(a) {
                        return function(l) {
                            return function(a) {
                                if (n) throw new TypeError("Generator is already executing.");
                                for (; i;) try {
                                    if (n = 1, r && (o = 2 & a[0] ? r.return : a[0] ? r.throw || ((o = r.return) && o.call(r), 0) : r.next) && !(o = o.call(r, a[1])).done) return o;
                                    switch (r = 0, o && (a = [2 & a[0], o.value]), a[0]) {
                                        case 0:
                                        case 1:
                                            o = a;
                                            break;
                                        case 4:
                                            return i.label++, {
                                                value: a[1],
                                                done: !1
                                            };
                                        case 5:
                                            i.label++, r = a[1], a = [0];
                                            continue;
                                        case 7:
                                            a = i.ops.pop(), i.trys.pop();
                                            continue;
                                        default:
                                            if (!(o = i.trys, (o = o.length > 0 && o[o.length - 1]) || 6 !== a[0] && 2 !== a[0])) {
                                                i = 0;
                                                continue
                                            }
                                            if (3 === a[0] && (!o || a[1] > o[0] && a[1] < o[3])) {
                                                i.label = a[1];
                                                break
                                            }
                                            if (6 === a[0] && i.label < o[1]) {
                                                i.label = o[1], o = a;
                                                break
                                            }
                                            if (o && i.label < o[2]) {
                                                i.label = o[2], i.ops.push(a);
                                                break
                                            }
                                            o[2] && i.ops.pop(), i.trys.pop();
                                            continue
                                    }
                                    a = t.call(e, i)
                                } catch (e) {
                                    a = [6, e], r = 0
                                } finally {
                                    n = o = 0
                                }
                                if (5 & a[0]) throw a[1];
                                return {
                                    value: a[0] ? a[1] : void 0,
                                    done: !0
                                }
                            }([a, l])
                        }
                    }
                },
                It = function(e, t, n, r) {
                    return St(void 0, void 0, Promise, (function() {
                        var o;
                        return Tt(this, (function(a) {
                            switch (a.label) {
                                case 0:
                                    return [4, V(D.httpService.get(_t, {
                                        consumerType: e,
                                        contentNamespace: t,
                                        keys: n,
                                        localeCode: r
                                    }), ht)];
                                case 1:
                                    return !(o = a.sent()).isError || o.error !== ht.INVALID_LOCALE && o.error !== ht.TRANSLATIONS_DO_NOT_EXIST || r === ft.EN_US ? [2, o] : [2, It(e, t, n, ft.EN_US)]
                            }
                        }))
                    }))
                },
                Nt = function(e, t, n) {
                    return void 0 === n && (n = e), St(void 0, void 0, Promise, (function() {
                        var r, o;
                        return Tt(this, (function(a) {
                            switch (a.label) {
                                case 0:
                                    return [4, It(yt.Web, e, t)];
                                case 1:
                                    return (r = a.sent()).isError ? [2, r] : ((o = I() || {}).LangDynamic = o.LangDynamic || {}, o.LangDynamic[n] = n !== e ? Ct(Ct({}, o.LangDynamic[n]), r.value) : r.value, [2, x(void 0)])
                            }
                        }))
                    }))
                },
                wt = null !== (gt = T.EnvironmentUrls.twoStepVerificationApi) && void 0 !== gt ? gt : "URL_NOT_FOUND";
            ! function(e) {
                e[e.UNKNOWN = 0] = "UNKNOWN", e[e.INVALID_CHALLENGE_ID = 1] = "INVALID_CHALLENGE_ID", e[e.INVALID_USER_ID = 2] = "INVALID_USER_ID", e[e.INVALID_EMAIL = 3] = "INVALID_EMAIL", e[e.INVALID_PASSWORD = 4] = "INVALID_PASSWORD", e[e.TOO_MANY_REQUESTS = 5] = "TOO_MANY_REQUESTS", e[e.PIN_LOCKED = 6] = "PIN_LOCKED", e[e.FEATURE_DISABLED = 7] = "FEATURE_DISABLED", e[e.NOT_ALLOWED = 8] = "NOT_ALLOWED", e[e.INVALID_CONFIGURATION = 9] = "INVALID_CONFIGURATION", e[e.INVALID_CODE = 10] = "INVALID_CODE", e[e.CONFIGURATION_ALREADY_ENABLED = 11] = "CONFIGURATION_ALREADY_ENABLED", e[e.INVALID_SETUP_TOKEN = 12] = "INVALID_SETUP_TOKEN"
            }(bt || (bt = {}));
            var At, Ot, Dt, Lt = {
                    url: wt + "/v1/metadata",
                    withCredentials: !0,
                    timeout: 1e4
                },
                xt = function(e) {
                    return V(D.httpService.get(Lt, e || {}), bt)
                },
                Pt = function(e, t) {
                    return V(D.httpService.get(function(e) {
                        return {
                            withCredentials: !0,
                            url: wt + "/v1/users/" + e + "/configuration",
                            timeout: 1e4
                        }
                    }(e), t || {}), bt)
                },
                Rt = function(e, t) {
                    return V(D.httpService.post(function(e) {
                        return {
                            withCredentials: !0,
                            url: wt + "/v1/users/" + e + "/challenges/email/send-code",
                            timeout: 1e4
                        }
                    }(e), t), bt)
                },
                Mt = function(e, t) {
                    return V(D.httpService.post(function(e) {
                        return {
                            withCredentials: !0,
                            url: wt + "/v1/users/" + e + "/challenges/email/verify",
                            timeout: 1e4
                        }
                    }(e), t), bt)
                },
                kt = function(e, t) {
                    return V(D.httpService.post(function(e) {
                        return {
                            withCredentials: !0,
                            url: wt + "/v1/users/" + e + "/challenges/authenticator/verify",
                            timeout: 1e4
                        }
                    }(e), t), bt)
                },
                Ut = function(e, t) {
                    return V(D.httpService.post(function(e) {
                        return {
                            withCredentials: !0,
                            url: wt + "/v1/users/" + e + "/challenges/recovery-codes/verify",
                            timeout: 1e4
                        }
                    }(e), t), bt)
                },
                Ht = function(e, t) {
                    return V(D.httpService.post(function(e) {
                        return {
                            withCredentials: !0,
                            url: wt + "/v1/users/" + e + "/challenges/sms/send-code",
                            timeout: 1e4
                        }
                    }(e), t), bt)
                },
                Vt = function(e, t) {
                    return V(D.httpService.post(function(e) {
                        return {
                            withCredentials: !0,
                            url: wt + "/v1/users/" + e + "/challenges/sms/verify",
                            timeout: 1e4
                        }
                    }(e), t), bt)
                },
                Gt = function(e, t) {
                    return V(D.httpService.post(function(e) {
                        return {
                            withCredentials: !0,
                            url: wt + "/v1/users/" + e + "/challenges/security-key/verify-start",
                            timeout: 1e4
                        }
                    }(e), t), bt)
                },
                Wt = function(e, t) {
                    return V(D.httpService.post(function(e) {
                        return {
                            withCredentials: !0,
                            url: wt + "/v1/users/" + e + "/challenges/security-key/verify-finish",
                            timeout: 1e5
                        }
                    }(e), t), bt)
                },
                Ft = (null !== (At = T.EnvironmentUrls.apiGatewayUrl) && void 0 !== At ? At : "URL_NOT_FOUND") + "/account-security-service";
            ! function(e) {
                e[e.UNKNOWN = 1] = "UNKNOWN", e[e.REQUEST_TYPE_WAS_INVALID = 2] = "REQUEST_TYPE_WAS_INVALID", e[e.INVAID_METRIC_NAME = 3] = "INVAID_METRIC_NAME", e[e.INVALID_METRIC_LABELS = 4] = "INVALID_METRIC_LABELS"
            }(Ot || (Ot = {})),
            function(e) {
                e.Event2sv = "event_2sv", e.SolveTime2sv = "solve_time_2sv"
            }(Dt || (Dt = {}));
            var jt = {
                    withCredentials: !0,
                    url: Ft + "/v1/metrics/record",
                    timeout: 1e4
                },
                Bt = function(e) {
                    return V(D.httpService.post(jt, e), Ot)
                },
                qt = function() {
                    this.accountPin = e, this.captcha = t, this.email = r, this.games = o, this.metrics = f, this.password = a, this.promptAssignments = i, this.securityQuestions = s, this.reauthentication = u, this.thumbnails = c, this.translations = d, this.twoStepVerification = p, this.proofOfWork = l
                },
                zt = ReactUtilities,
                Kt = "Captcha:",
                Zt = {
                    common: [],
                    feature: "Authentication.Captcha"
                },
                Yt = ["Action.PleaseTryAgain", "Action.Reload", "Message.Error.Default"],
                $t = ["Description.VerifyingYouAreNotBot"],
                Qt = n(8839);

            function Jt(e, t) {
                if (null == e) return {};
                var n, r, o = {},
                    a = Qt(e);
                for (r = 0; r < a.length; r++) n = a[r], t.indexOf(n) >= 0 || (o[n] = e[n]);
                return o
            }
            var Xt = n(8633),
                en = n(7746);

            function tn(e, t) {
                return (tn = en || function(e, t) {
                    return e.__proto__ = t, e
                })(e, t)
            }

            function nn(e, t) {
                e.prototype = Xt(t.prototype), e.prototype.constructor = e, tn(e, t)
            }

            function rn(e) {
                if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e
            }
            var on = n(2005);

            function an() {
                return (an = on || function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = arguments[t];
                        for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                    }
                    return e
                }).apply(this, arguments)
            }
            var ln, un = n(2779),
                sn = n.n(un),
                cn = n(1836),
                dn = n(5759),
                pn = n.n(dn),
                fn = n(6892),
                hn = n.n(fn),
                yn = n(8616),
                vn = n.n(yn),
                mn = n(5517),
                En = n.n(mn),
                gn = n(4909),
                bn = n.n(gn),
                _n = n(1503),
                Cn = n.n(_n),
                Sn = n(1904),
                Tn = n.n(Sn),
                In = n(3447),
                Nn = { in: En().bool,
                    mountOnEnter: En().bool,
                    unmountOnExit: En().bool,
                    appear: En().bool,
                    timeout: En().number,
                    onEnter: En().func,
                    onEntering: En().func,
                    onEntered: En().func,
                    onExit: En().func,
                    onExiting: En().func,
                    onExited: En().func
                },
                wn = ((ln = {})[In.d0] = "in", ln[In.cn] = "in", ln),
                An = function(e) {
                    function t() {
                        return e.apply(this, arguments) || this
                    }
                    return nn(t, e), t.prototype.render = function() {
                        var e = this.props,
                            t = e.className,
                            n = e.children,
                            r = Jt(e, ["className", "children"]);
                        return w().createElement(In.ZP, r, (function(e, r) {
                            return w().cloneElement(n, an({}, r, {
                                className: sn()("fade", t, n.props.className, wn[e])
                            }))
                        }))
                    }, t
                }(w().Component);
            An.propTypes = Nn, An.defaultProps = { in: !1,
                timeout: 300,
                mountOnEnter: !1,
                unmountOnExit: !1,
                appear: !1
            };
            var On = An,
                Dn = n(2085),
                Ln = n.n(Dn),
                xn = n(7677),
                Pn = n.n(xn),
                Rn = "large",
                Mn = "small",
                kn = {
                    large: "lg",
                    medium: "md",
                    small: "sm",
                    xsmall: "xs",
                    lg: "lg",
                    md: "md",
                    sm: "sm",
                    xs: "xs"
                };

            function Un(e) {
                return function() {
                    for (var t = arguments.length, n = new Array(t), r = 0; r < t; r++) n[r] = arguments[r];
                    var o = n[n.length - 1];
                    return "function" == typeof o ? e.apply(void 0, n) : function(t) {
                        return e.apply(void 0, n.concat([t]))
                    }
                }
            }

            function Hn(e, t) {
                var n = (e.bsClass || "").trim();
                return null == n && Pn()(!1), n + (t ? "-" + t : "")
            }
            var Vn = Un((function(e, t) {
                    var n = t.propTypes || (t.propTypes = {}),
                        r = t.defaultProps || (t.defaultProps = {});
                    return n.bsClass = En().string, r.bsClass = e, t
                })),
                Gn = Un((function(e, t, n) {
                    "string" != typeof t && (n = t, t = void 0);
                    var r = n.STYLES || [],
                        o = n.propTypes || {};
                    e.forEach((function(e) {
                        -1 === r.indexOf(e) && r.push(e)
                    }));
                    var a = En().oneOf(r);
                    (n.STYLES = r, a._values = r, n.propTypes = an({}, o, {
                        bsStyle: a
                    }), void 0 !== t) && ((n.defaultProps || (n.defaultProps = {})).bsStyle = t);
                    return n
                })),
                Wn = Un((function(e, t, n) {
                    "string" != typeof t && (n = t, t = void 0);
                    var r = n.SIZES || [],
                        o = n.propTypes || {};
                    e.forEach((function(e) {
                        -1 === r.indexOf(e) && r.push(e)
                    }));
                    var a = [];
                    r.forEach((function(e) {
                        var t = kn[e];
                        t && t !== e && a.push(t), a.push(e)
                    }));
                    var i = En().oneOf(a);
                    return i._values = a, n.SIZES = r, n.propTypes = an({}, o, {
                        bsSize: i
                    }), void 0 !== t && (n.defaultProps || (n.defaultProps = {}), n.defaultProps.bsSize = t), n
                }));

            function Fn(e) {
                var t, n = ((t = {})[Hn(e)] = !0, t);
                e.bsSize && (n[Hn(e, kn[e.bsSize] || e.bsSize)] = !0);
                return e.bsStyle && (n[Hn(e, e.bsStyle)] = !0), n
            }

            function jn(e) {
                return {
                    bsClass: e.bsClass,
                    bsSize: e.bsSize,
                    bsStyle: e.bsStyle,
                    bsRole: e.bsRole
                }
            }

            function Bn(e) {
                return "bsClass" === e || "bsSize" === e || "bsStyle" === e || "bsRole" === e
            }

            function qn(e) {
                var t = {};
                return Ln()(e).forEach((function(e) {
                    var n = e[0],
                        r = e[1];
                    Bn(n) || (t[n] = r)
                })), [jn(e), t]
            }
            var zn = {
                    componentClass: Tn()
                },
                Kn = function(e) {
                    function t() {
                        return e.apply(this, arguments) || this
                    }
                    return nn(t, e), t.prototype.render = function() {
                        var e = this.props,
                            t = e.componentClass,
                            n = e.className,
                            r = qn(Jt(e, ["componentClass", "className"])),
                            o = r[0],
                            a = r[1],
                            i = Fn(o);
                        return w().createElement(t, an({}, a, {
                            className: sn()(n, i)
                        }))
                    }, t
                }(w().Component);
            Kn.propTypes = zn, Kn.defaultProps = {
                componentClass: "div"
            };
            var Zn = Vn("modal-body", Kn),
                Yn = {
                    dialogClassName: En().string
                },
                $n = function(e) {
                    function t() {
                        return e.apply(this, arguments) || this
                    }
                    return nn(t, e), t.prototype.render = function() {
                        var e, t = this.props,
                            n = t.dialogClassName,
                            r = t.className,
                            o = t.style,
                            a = t.children,
                            i = t.onMouseDownDialog,
                            l = qn(Jt(t, ["dialogClassName", "className", "style", "children", "onMouseDownDialog"])),
                            u = l[0],
                            s = l[1],
                            c = Hn(u),
                            d = an({
                                display: "block"
                            }, o),
                            p = an({}, Fn(u), ((e = {})[c] = !1, e[Hn(u, "dialog")] = !0, e));
                        return w().createElement("div", an({}, s, {
                            tabIndex: "-1",
                            role: "dialog",
                            style: d,
                            className: sn()(r, c)
                        }), w().createElement("div", {
                            className: sn()(n, p),
                            onMouseDown: i
                        }, w().createElement("div", {
                            className: Hn(u, "content"),
                            role: "document"
                        }, a)))
                    }, t
                }(w().Component);
            $n.propTypes = Yn;
            var Qn = Vn("modal", Wn([Rn, Mn], $n)),
                Jn = {
                    componentClass: Tn()
                },
                Xn = function(e) {
                    function t() {
                        return e.apply(this, arguments) || this
                    }
                    return nn(t, e), t.prototype.render = function() {
                        var e = this.props,
                            t = e.componentClass,
                            n = e.className,
                            r = qn(Jt(e, ["componentClass", "className"])),
                            o = r[0],
                            a = r[1],
                            i = Fn(o);
                        return w().createElement(t, an({}, a, {
                            className: sn()(n, i)
                        }))
                    }, t
                }(w().Component);
            Xn.propTypes = Jn, Xn.defaultProps = {
                componentClass: "div"
            };
            var er = Vn("modal-footer", Xn);
            var tr = function() {
                    for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                    return t.filter((function(e) {
                        return null != e
                    })).reduce((function(e, t) {
                        if ("function" != typeof t) throw new Error("Invalid Argument Type, must only provide functions, undefined, or null.");
                        return null === e ? t : function() {
                            for (var n = arguments.length, r = new Array(n), o = 0; o < n; o++) r[o] = arguments[o];
                            e.apply(this, r), t.apply(this, r)
                        }
                    }), null)
                },
                nr = {
                    label: En().string.isRequired,
                    onClick: En().func
                },
                rr = function(e) {
                    function t() {
                        return e.apply(this, arguments) || this
                    }
                    return nn(t, e), t.prototype.render = function() {
                        var e = this.props,
                            t = e.label,
                            n = e.onClick;
                        return w().createElement("button", {
                            type: "button",
                            className: "close",
                            onClick: n
                        }, w().createElement("span", {
                            "aria-hidden": "true"
                        }, "×"), w().createElement("span", {
                            className: "sr-only"
                        }, t))
                    }, t
                }(w().Component);
            rr.propTypes = nr, rr.defaultProps = {
                label: "Close"
            };
            var or = rr,
                ar = {
                    closeLabel: En().string,
                    closeButton: En().bool,
                    onHide: En().func
                },
                ir = {
                    $bs_modal: En().shape({
                        onHide: En().func
                    })
                },
                lr = function(e) {
                    function t() {
                        return e.apply(this, arguments) || this
                    }
                    return nn(t, e), t.prototype.render = function() {
                        var e = this.props,
                            t = e.closeLabel,
                            n = e.closeButton,
                            r = e.onHide,
                            o = e.className,
                            a = e.children,
                            i = Jt(e, ["closeLabel", "closeButton", "onHide", "className", "children"]),
                            l = this.context.$bs_modal,
                            u = qn(i),
                            s = u[0],
                            c = u[1],
                            d = Fn(s);
                        return w().createElement("div", an({}, c, {
                            className: sn()(o, d)
                        }), n && w().createElement(or, {
                            label: t,
                            onClick: tr(l && l.onHide, r)
                        }), a)
                    }, t
                }(w().Component);
            lr.propTypes = ar, lr.defaultProps = {
                closeLabel: "Close",
                closeButton: !1
            }, lr.contextTypes = ir;
            var ur = Vn("modal-header", lr),
                sr = {
                    componentClass: Tn()
                },
                cr = function(e) {
                    function t() {
                        return e.apply(this, arguments) || this
                    }
                    return nn(t, e), t.prototype.render = function() {
                        var e = this.props,
                            t = e.componentClass,
                            n = e.className,
                            r = qn(Jt(e, ["componentClass", "className"])),
                            o = r[0],
                            a = r[1],
                            i = Fn(o);
                        return w().createElement(t, an({}, a, {
                            className: sn()(n, i)
                        }))
                    }, t
                }(w().Component);
            cr.propTypes = sr, cr.defaultProps = {
                componentClass: "h4"
            };
            var dr = Vn("modal-title", cr);
            var pr = an({}, bn().propTypes, Qn.propTypes, {
                    backdrop: En().oneOf(["static", !0, !1]),
                    backdropClassName: En().string,
                    keyboard: En().bool,
                    animation: En().bool,
                    dialogComponentClass: Tn(),
                    autoFocus: En().bool,
                    enforceFocus: En().bool,
                    restoreFocus: En().bool,
                    show: En().bool,
                    onHide: En().func,
                    onEnter: En().func,
                    onEntering: En().func,
                    onEntered: En().func,
                    onExit: En().func,
                    onExiting: En().func,
                    onExited: En().func,
                    container: bn().propTypes.container
                }),
                fr = an({}, bn().defaultProps, {
                    animation: !0,
                    dialogComponentClass: Qn
                }),
                hr = {
                    $bs_modal: En().shape({
                        onHide: En().func
                    })
                };

            function yr(e) {
                return w().createElement(On, an({}, e, {
                    timeout: mr.TRANSITION_DURATION
                }))
            }

            function vr(e) {
                return w().createElement(On, an({}, e, {
                    timeout: mr.BACKDROP_TRANSITION_DURATION
                }))
            }
            var mr = function(e) {
                function t(t, n) {
                    var r;
                    return (r = e.call(this, t, n) || this).handleDialogBackdropMouseDown = function() {
                        r._waitingForMouseUp = !0
                    }, r.handleMouseUp = function(e) {
                        var t = r._modal.getDialogElement();
                        r._waitingForMouseUp && e.target === t && (r._ignoreBackdropClick = !0), r._waitingForMouseUp = !1
                    }, r.handleEntering = r.handleEntering.bind(rn(rn(r))), r.handleExited = r.handleExited.bind(rn(rn(r))), r.handleWindowResize = r.handleWindowResize.bind(rn(rn(r))), r.handleDialogClick = r.handleDialogClick.bind(rn(rn(r))), r.setModalRef = r.setModalRef.bind(rn(rn(r))), r.state = {
                        style: {}
                    }, r
                }
                nn(t, e);
                var n = t.prototype;
                return n.getChildContext = function() {
                    return {
                        $bs_modal: {
                            onHide: this.props.onHide
                        }
                    }
                }, n.componentWillUnmount = function() {
                    this.handleExited()
                }, n.setModalRef = function(e) {
                    this._modal = e
                }, n.handleDialogClick = function(e) {
                    this._ignoreBackdropClick || e.target !== e.currentTarget ? this._ignoreBackdropClick = !1 : this.props.onHide()
                }, n.handleEntering = function() {
                    cn.ZP.on(window, "resize", this.handleWindowResize), this.updateStyle()
                }, n.handleExited = function() {
                    cn.ZP.off(window, "resize", this.handleWindowResize)
                }, n.handleWindowResize = function() {
                    this.updateStyle()
                }, n.updateStyle = function() {
                    if (hn()) {
                        var e = this._modal.getDialogElement(),
                            t = e.scrollHeight,
                            n = pn()(e),
                            r = Cn()(O().findDOMNode(this.props.container || n.body)),
                            o = t > n.documentElement.clientHeight;
                        this.setState({
                            style: {
                                paddingRight: r && !o ? vn()() : void 0,
                                paddingLeft: !r && o ? vn()() : void 0
                            }
                        })
                    }
                }, n.render = function() {
                    var e = this.props,
                        t = e.backdrop,
                        n = e.backdropClassName,
                        r = e.animation,
                        o = e.show,
                        a = e.dialogComponentClass,
                        i = e.className,
                        l = e.style,
                        u = e.children,
                        s = e.onEntering,
                        c = e.onExited,
                        d = Jt(e, ["backdrop", "backdropClassName", "animation", "show", "dialogComponentClass", "className", "style", "children", "onEntering", "onExited"]),
                        p = function(e, t) {
                            var n = t.propTypes,
                                r = {},
                                o = {};
                            return Ln()(e).forEach((function(e) {
                                var t = e[0],
                                    a = e[1];
                                n[t] ? r[t] = a : o[t] = a
                            })), [r, o]
                        }(d, bn()),
                        f = p[0],
                        h = p[1],
                        y = o && !r && "in";
                    return w().createElement(bn(), an({}, f, {
                        ref: this.setModalRef,
                        show: o,
                        containerClassName: Hn(d, "open"),
                        transition: r ? yr : void 0,
                        backdrop: t,
                        backdropTransition: r ? vr : void 0,
                        backdropClassName: sn()(Hn(d, "backdrop"), n, y),
                        onEntering: tr(s, this.handleEntering),
                        onExited: tr(c, this.handleExited),
                        onMouseUp: this.handleMouseUp
                    }), w().createElement(a, an({}, h, {
                        style: an({}, this.state.style, l),
                        className: sn()(i, y),
                        onClick: !0 === t ? this.handleDialogClick : null,
                        onMouseDownDialog: this.handleDialogBackdropMouseDown
                    }), u))
                }, t
            }(w().Component);
            mr.propTypes = pr, mr.defaultProps = fr, mr.childContextTypes = hr, mr.Body = Zn, mr.Header = ur, mr.Title = dr, mr.Footer = er, mr.Dialog = Qn, mr.TRANSITION_DURATION = 300, mr.BACKDROP_TRANSITION_DURATION = 150;
            var Er, gr = Vn("modal", Wn([Rn, Mn], mr)),
                br = function(e) {
                    var t = e.titleText,
                        n = e.children;
                    return w().createElement("div", {
                        className: "inline-challenge"
                    }, t && w().createElement("h4", {
                        className: "inline-challenge-title"
                    }, t), w().createElement("div", {
                        className: "inline-challenge-content"
                    }, n))
                },
                _r = function(e) {
                    var t = e.children;
                    return w().createElement("div", {
                        className: "inline-challenge-body"
                    }, t)
                },
                Cr = function(e) {
                    var t = e.positiveButton,
                        n = e.negativeButton;
                    return w().createElement("div", {
                        className: "inline-challenge-footer"
                    }, null !== n && w().createElement("button", {
                        type: "button",
                        className: "btn-secondary-md inline-challenge-footer-button",
                        "aria-label": n.label,
                        disabled: !n.enabled,
                        onClick: n.action
                    }, n.content), w().createElement("button", {
                        type: "button",
                        className: "btn-cta-md inline-challenge-footer-button",
                        "aria-label": t.label,
                        disabled: !t.enabled,
                        onClick: t.action
                    }, t.content))
                },
                Sr = function(e) {
                    var t = e.positiveButton,
                        n = e.negativeButton;
                    return w().createElement(gr.Footer, null, null !== n && w().createElement("button", {
                        type: "button",
                        className: "btn-secondary-md modal-modern-footer-button",
                        "aria-label": n.label,
                        disabled: !n.enabled,
                        onClick: n.action
                    }, n.content), w().createElement("button", {
                        type: "button",
                        className: "btn-cta-md modal-modern-footer-button",
                        "aria-label": t.label,
                        disabled: !t.enabled,
                        onClick: t.action
                    }, t.content))
                };
            ! function(e) {
                e[e.SET_CHALLENGE_COMPLETED = 0] = "SET_CHALLENGE_COMPLETED", e[e.SET_CHALLENGE_INVALIDATED = 1] = "SET_CHALLENGE_INVALIDATED", e[e.HIDE_MODAL_CHALLENGE = 2] = "HIDE_MODAL_CHALLENGE", e[e.SHOW_MODAL_CHALLENGE = 3] = "SHOW_MODAL_CHALLENGE"
            }(Er || (Er = {}));
            var Tr, Ir, Nr = function() {
                    return (Nr = Object.assign || function(e) {
                        for (var t, n = 1, r = arguments.length; n < r; n++)
                            for (var o in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
                        return e
                    }).apply(this, arguments)
                },
                wr = function(e, t) {
                    var n, r = Nr({}, e);
                    switch (t.type) {
                        case Er.SET_CHALLENGE_COMPLETED:
                            return r.onChallengeCompletedData = t.onChallengeCompletedData, r.isModalVisible = !1, r;
                        case Er.SET_CHALLENGE_INVALIDATED:
                            return r.onChallengeInvalidatedData = {
                                errorCode: t.errorCode,
                                errorMessage: (n = e.resources, t.errorCode, n.Message.Error.Default)
                            }, r.isModalVisible = !1, r;
                        case Er.HIDE_MODAL_CHALLENGE:
                            return r.isModalVisible = !1, r;
                        case Er.SHOW_MODAL_CHALLENGE:
                            return r.isModalVisible = !0, r;
                        default:
                            return e
                    }
                },
                Ar = (0, N.createContext)(null),
                Or = function(e) {
                    var t = e.actionType,
                        n = e.appType,
                        r = e.renderInline,
                        o = e.dataExchangeBlob,
                        a = e.unifiedCaptchaId,
                        i = e.requestService,
                        l = e.translate,
                        u = e.onChallengeDisplayed,
                        s = e.onChallengeCompleted,
                        c = e.onChallengeInvalidated,
                        d = e.onModalChallengeAbandoned,
                        p = e.children,
                        f = (0, N.useState)((function() {
                            return function(e) {
                                return {
                                    Action: {
                                        PleaseTryAgain: e("Action.PleaseTryAgain"),
                                        Reload: e("Action.Reload")
                                    },
                                    Description: {
                                        VerifyingYouAreNotBot: e("Description.VerifyingYouAreNotBot")
                                    },
                                    Message: {
                                        Error: {
                                            Default: e("Message.Error.Default")
                                        }
                                    }
                                }
                            }(l)
                        }))[0],
                        h = (0, N.useState)((function() {
                            return {
                                actionType: t,
                                appType: n,
                                dataExchangeBlob: o,
                                unifiedCaptchaId: a,
                                renderInline: r,
                                resources: f,
                                requestService: i,
                                onChallengeDisplayed: u,
                                onModalChallengeAbandoned: d,
                                onChallengeCompletedData: null,
                                onChallengeInvalidatedData: null,
                                isModalVisible: !1
                            }
                        }))[0],
                        y = (0, N.useReducer)(wr, h),
                        v = y[0],
                        m = y[1];
                    return (0, N.useEffect)((function() {
                        null !== v.onChallengeCompletedData && null === v.onChallengeInvalidatedData && s(v.onChallengeCompletedData)
                    }), [v.onChallengeCompletedData, v.onChallengeInvalidatedData, s]), (0, N.useEffect)((function() {
                        null !== v.onChallengeInvalidatedData && null === v.onChallengeCompletedData && c(v.onChallengeInvalidatedData)
                    }), [v.onChallengeCompletedData, v.onChallengeInvalidatedData, c]), w().createElement(Ar.Provider, {
                        value: {
                            state: v,
                            dispatch: m
                        }
                    }, p)
                },
                Dr = function() {
                    var e = (0, N.useContext)(Ar);
                    if (null === e) throw new Error("CaptchaContext was not provided in the current scope");
                    return e
                };
            ! function(e) {
                e.Login = "Login", e.AppLogin = "AppLogin", e.Signup = "Signup", e.AppSignup = "AppSignup", e.JoinGroup = "JoinGroup", e.GroupWallPost = "GroupWallPost", e.ResetPassword = "ResetPassword", e.ToyCodeRedeem = "ToyCodeRedeem", e.GameCardRedeem = "GameCardRedeem", e.FollowUser = "FollowUser", e.Generic = "Generic"
            }(Tr || (Tr = {})),
            function(e) {
                e[e.UNKNOWN = 0] = "UNKNOWN"
            }(Ir || (Ir = {}));
            var Lr, xr, Pr = function(e, t, n, r) {
                    return new(n || (n = Promise))((function(o, a) {
                        function i(e) {
                            try {
                                u(r.next(e))
                            } catch (e) {
                                a(e)
                            }
                        }

                        function l(e) {
                            try {
                                u(r.throw(e))
                            } catch (e) {
                                a(e)
                            }
                        }

                        function u(e) {
                            var t;
                            e.done ? o(e.value) : (t = e.value, t instanceof n ? t : new n((function(e) {
                                e(t)
                            }))).then(i, l)
                        }
                        u((r = r.apply(e, t || [])).next())
                    }))
                },
                Rr = function(e, t) {
                    var n, r, o, a, i = {
                        label: 0,
                        sent: function() {
                            if (1 & o[0]) throw o[1];
                            return o[1]
                        },
                        trys: [],
                        ops: []
                    };
                    return a = {
                        next: l(0),
                        throw: l(1),
                        return: l(2)
                    }, "function" == typeof Symbol && (a[Symbol.iterator] = function() {
                        return this
                    }), a;

                    function l(a) {
                        return function(l) {
                            return function(a) {
                                if (n) throw new TypeError("Generator is already executing.");
                                for (; i;) try {
                                    if (n = 1, r && (o = 2 & a[0] ? r.return : a[0] ? r.throw || ((o = r.return) && o.call(r), 0) : r.next) && !(o = o.call(r, a[1])).done) return o;
                                    switch (r = 0, o && (a = [2 & a[0], o.value]), a[0]) {
                                        case 0:
                                        case 1:
                                            o = a;
                                            break;
                                        case 4:
                                            return i.label++, {
                                                value: a[1],
                                                done: !1
                                            };
                                        case 5:
                                            i.label++, r = a[1], a = [0];
                                            continue;
                                        case 7:
                                            a = i.ops.pop(), i.trys.pop();
                                            continue;
                                        default:
                                            if (!(o = i.trys, (o = o.length > 0 && o[o.length - 1]) || 6 !== a[0] && 2 !== a[0])) {
                                                i = 0;
                                                continue
                                            }
                                            if (3 === a[0] && (!o || a[1] > o[0] && a[1] < o[3])) {
                                                i.label = a[1];
                                                break
                                            }
                                            if (6 === a[0] && i.label < o[1]) {
                                                i.label = o[1], o = a;
                                                break
                                            }
                                            if (o && i.label < o[2]) {
                                                i.label = o[2], i.ops.push(a);
                                                break
                                            }
                                            o[2] && i.ops.pop(), i.trys.pop();
                                            continue
                                    }
                                    a = t.call(e, i)
                                } catch (e) {
                                    a = [6, e], r = 0
                                } finally {
                                    n = o = 0
                                }
                                if (5 & a[0]) throw a[1];
                                return {
                                    value: a[0] ? a[1] : void 0,
                                    done: !0
                                }
                            }([a, l])
                        }
                    }
                },
                Mr = {},
                kr = ((Lr = document.createElement("div")).className = "challenge-captcha-body", Lr.id = "challenge-captcha-element", Lr),
                Ur = function() {
                    var e = Dr(),
                        t = e.state,
                        n = t.actionType,
                        r = t.appType,
                        o = t.dataExchangeBlob,
                        a = t.unifiedCaptchaId,
                        i = t.renderInline,
                        l = t.resources,
                        u = t.requestService,
                        s = t.onChallengeDisplayed,
                        c = t.onModalChallengeAbandoned,
                        d = t.isModalVisible,
                        p = e.dispatch,
                        f = (0, N.useState)(!0),
                        h = f[0],
                        y = f[1],
                        v = (0, N.useState)(null),
                        m = v[0],
                        E = v[1],
                        g = function() {
                            p({
                                type: Er.HIDE_MODAL_CHALLENGE
                            }), null !== c && c((function() {
                                return p({
                                    type: Er.SHOW_MODAL_CHALLENGE
                                })
                            }))
                        },
                        b = function() {
                            return Pr(void 0, void 0, void 0, (function() {
                                var e, t, i;
                                return Rr(this, (function(c) {
                                    switch (c.label) {
                                        case 0:
                                            return y(!0), E(null), [4, u.captcha.getMetadata()];
                                        case 1:
                                            return (e = c.sent()).isError ? (E(l.Message.Error.Default + " " + l.Action.PleaseTryAgain), y(!1), [2]) : (t = e.value.funCaptchaPublicKeys, i = [], Object.keys(T.CaptchaConstants.funCaptchaPublicKeyMap).forEach((function(e) {
                                                var n = e,
                                                    r = T.CaptchaConstants.funCaptchaPublicKeyMap[n],
                                                    o = t[r];
                                                void 0 !== o && i.push({
                                                    Type: n,
                                                    PublicKey: o
                                                })
                                            })), T.FunCaptcha.addCaptchaTypes(i, !1), null !== r && T.FunCaptcha.setPerAppTypeLoggingEnabled(!0, r), Object.assign(Mr, {
                                                shownCb: function() {
                                                    y(!1), p({
                                                        type: Er.SHOW_MODAL_CHALLENGE
                                                    }), s({
                                                        displayed: !0
                                                    })
                                                },
                                                errorCb: function() {
                                                    p({
                                                        type: Er.SET_CHALLENGE_INVALIDATED,
                                                        errorCode: Ir.UNKNOWN
                                                    })
                                                },
                                                successCb: function(e, t) {
                                                    p({
                                                        type: Er.SET_CHALLENGE_COMPLETED,
                                                        onChallengeCompletedData: {
                                                            captchaToken: e,
                                                            captchaId: t
                                                        }
                                                    })
                                                }
                                            }), T.FunCaptcha.render(kr.id, {
                                                cType: n,
                                                inputParams: {
                                                    dataExchange: o,
                                                    unifiedCaptchaId: a
                                                },
                                                returnTokenInSuccessCb: !0,
                                                shownCb: function() {
                                                    return Mr.shownCb && Mr.shownCb()
                                                },
                                                errorCb: function(e) {
                                                    return Mr.errorCb && Mr.errorCb(e)
                                                },
                                                successCb: function(e, t) {
                                                    return Mr.successCb && Mr.successCb(e, t)
                                                }
                                            }), [2])
                                    }
                                }))
                            }))
                        };
                    (0, N.useEffect)((function() {
                        b()
                    }), []);
                    var _, C = (_ = kr, w().createElement("div", {
                            ref: function(e) {
                                return null == e ? void 0 : e.insertAdjacentElement("afterend", _)
                            }
                        })),
                        S = {
                            content: l.Action.Reload,
                            label: l.Action.Reload,
                            enabled: null !== m,
                            action: b
                        };
                    return i ? w().createElement(br, {
                        titleText: l.Description.VerifyingYouAreNotBot
                    }, w().createElement(_r, null, null !== m && w().createElement("p", {
                        className: "challenge-captcha-body challenge-captcha-error-body"
                    }, m), h && w().createElement("span", {
                        className: "spinner spinner-default spinner-no-margin challenge-captcha-body"
                    }), null === m && C), null !== m && w().createElement(Cr, {
                        positiveButton: S,
                        negativeButton: null
                    })) : w().createElement(N.Fragment, null, !d && w().createElement("div", {
                        style: {
                            display: "none"
                        }
                    }, C), w().createElement(gr, {
                        className: "modal-modern modal-modern-challenge-captcha",
                        show: d,
                        onHide: g,
                        backdrop: "static"
                    }, w().createElement(gr.Body, null, w().createElement("button", {
                        type: "button",
                        className: "challenge-captcha-close-button",
                        onClick: g,
                        disabled: !1
                    }, w().createElement("span", {
                        className: "icon-close"
                    })), null !== m && w().createElement("p", {
                        className: "challenge-captcha-body challenge-captcha-error-body"
                    }, m), h && w().createElement("span", {
                        className: "spinner spinner-default spinner-no-margin challenge-captcha-body"
                    }), null === m && C), null !== m && w().createElement(Sr, {
                        positiveButton: S,
                        negativeButton: null
                    })))
                },
                Hr = (0, zt.withTranslations)((function(e) {
                    var t = e.actionType,
                        n = e.appType,
                        r = e.dataExchangeBlob,
                        o = e.unifiedCaptchaId,
                        a = e.renderInline,
                        i = e.requestService,
                        l = e.translate,
                        u = e.onChallengeDisplayed,
                        s = e.onChallengeCompleted,
                        c = e.onChallengeInvalidated,
                        d = e.onModalChallengeAbandoned;
                    return w().createElement(Or, {
                        actionType: t,
                        appType: n,
                        dataExchangeBlob: r,
                        unifiedCaptchaId: o,
                        renderInline: a,
                        requestService: i,
                        translate: l,
                        onChallengeDisplayed: u,
                        onChallengeCompleted: s,
                        onChallengeInvalidated: c,
                        onModalChallengeAbandoned: d
                    }, w().createElement(Ur, null))
                }), Zt),
                Vr = function(e, t, n, r) {
                    return new(n || (n = Promise))((function(o, a) {
                        function i(e) {
                            try {
                                u(r.next(e))
                            } catch (e) {
                                a(e)
                            }
                        }

                        function l(e) {
                            try {
                                u(r.throw(e))
                            } catch (e) {
                                a(e)
                            }
                        }

                        function u(e) {
                            var t;
                            e.done ? o(e.value) : (t = e.value, t instanceof n ? t : new n((function(e) {
                                e(t)
                            }))).then(i, l)
                        }
                        u((r = r.apply(e, t || [])).next())
                    }))
                },
                Gr = function(e, t) {
                    var n, r, o, a, i = {
                        label: 0,
                        sent: function() {
                            if (1 & o[0]) throw o[1];
                            return o[1]
                        },
                        trys: [],
                        ops: []
                    };
                    return a = {
                        next: l(0),
                        throw: l(1),
                        return: l(2)
                    }, "function" == typeof Symbol && (a[Symbol.iterator] = function() {
                        return this
                    }), a;

                    function l(a) {
                        return function(l) {
                            return function(a) {
                                if (n) throw new TypeError("Generator is already executing.");
                                for (; i;) try {
                                    if (n = 1, r && (o = 2 & a[0] ? r.return : a[0] ? r.throw || ((o = r.return) && o.call(r), 0) : r.next) && !(o = o.call(r, a[1])).done) return o;
                                    switch (r = 0, o && (a = [2 & a[0], o.value]), a[0]) {
                                        case 0:
                                        case 1:
                                            o = a;
                                            break;
                                        case 4:
                                            return i.label++, {
                                                value: a[1],
                                                done: !1
                                            };
                                        case 5:
                                            i.label++, r = a[1], a = [0];
                                            continue;
                                        case 7:
                                            a = i.ops.pop(), i.trys.pop();
                                            continue;
                                        default:
                                            if (!(o = i.trys, (o = o.length > 0 && o[o.length - 1]) || 6 !== a[0] && 2 !== a[0])) {
                                                i = 0;
                                                continue
                                            }
                                            if (3 === a[0] && (!o || a[1] > o[0] && a[1] < o[3])) {
                                                i.label = a[1];
                                                break
                                            }
                                            if (6 === a[0] && i.label < o[1]) {
                                                i.label = o[1], o = a;
                                                break
                                            }
                                            if (o && i.label < o[2]) {
                                                i.label = o[2], i.ops.push(a);
                                                break
                                            }
                                            o[2] && i.ops.pop(), i.trys.pop();
                                            continue
                                    }
                                    a = t.call(e, i)
                                } catch (e) {
                                    a = [6, e], r = 0
                                } finally {
                                    n = o = 0
                                }
                                if (5 & a[0]) throw a[1];
                                return {
                                    value: a[0] ? a[1] : void 0,
                                    done: !0
                                }
                            }([a, l])
                        }
                    }
                },
                Wr = new qt,
                Fr = function(e) {
                    var t = e.containerId,
                        n = e.actionType,
                        r = e.appType,
                        o = e.dataExchangeBlob,
                        a = e.unifiedCaptchaId,
                        i = e.renderInline,
                        l = e.shouldDynamicallyLoadTranslationResources,
                        u = e.onChallengeDisplayed,
                        s = e.onChallengeCompleted,
                        c = e.onChallengeInvalidated,
                        d = e.onModalChallengeAbandoned;
                    return Vr(void 0, void 0, void 0, (function() {
                        var e, p, f, h;
                        return Gr(this, (function(y) {
                            switch (y.label) {
                                case 0:
                                    return null === (e = document.getElementById(t)) ? [3, 4] : ((0, A.unmountComponentAtNode)(e), l ? [4, Wr.translations.queryAndOverwriteResourcesForNamespace(Zt.feature, Yt)] : [3, 3]);
                                case 1:
                                    return (p = y.sent()).isError ? (console.error(Kt, "Got error code " + ((null === (f = p.error) || void 0 === f ? void 0 : f.toString()) || "null") + " loading translations"), [2, !1]) : [4, Wr.translations.queryAndOverwriteResourcesForNamespace("Feature.ProofOfWorkChallenge", $t, Zt.feature)];
                                case 2:
                                    if ((p = y.sent()).isError) return console.error(Kt, "Got error code " + ((null === (h = p.error) || void 0 === h ? void 0 : h.toString()) || "null") + " loading translations"), [2, !1];
                                    y.label = 3;
                                case 3:
                                    return (0, A.render)(w().createElement(Hr, {
                                        actionType: n,
                                        appType: r,
                                        dataExchangeBlob: o,
                                        unifiedCaptchaId: a,
                                        renderInline: i,
                                        requestService: Wr,
                                        onChallengeDisplayed: u,
                                        onChallengeCompleted: s,
                                        onChallengeInvalidated: c,
                                        onModalChallengeAbandoned: d
                                    }), e), [2, !0];
                                case 4:
                                    return [2, Promise.resolve(!1)]
                            }
                        }))
                    }))
                },
                jr = {
                    common: [],
                    feature: "Feature.ForceAuthenticator"
                },
                Br = ["Action.Setup", "Description.Reason", "Description.SetupAuthenticator", "Header.TurnOnAuthenticator"];
            ! function(e) {
                e.BACK = "BACK", e.CLOSE = "CLOSE", e.HIDDEN = "HIDDEN"
            }(xr || (xr = {}));
            var qr, zr = function(e) {
                var t = e.headerText,
                    n = e.buttonType,
                    r = e.buttonAction,
                    o = e.buttonEnabled,
                    a = e.headerInfo;
                return w().createElement(gr.Header, null, function(e, t, n) {
                    switch (e) {
                        case xr.BACK:
                            return w().createElement("button", {
                                type: "button",
                                className: "modal-modern-header-button",
                                onClick: t,
                                disabled: !n
                            }, w().createElement("span", {
                                className: "icon-back"
                            }));
                        case xr.CLOSE:
                            return w().createElement("button", {
                                type: "button",
                                className: "modal-modern-header-button",
                                onClick: t,
                                disabled: !n
                            }, w().createElement("span", {
                                className: "icon-close"
                            }));
                        case xr.HIDDEN:
                        default:
                            return w().createElement("div", null)
                    }
                }(n, r, o), w().createElement(gr.Title, null, t), w().createElement("div", {
                    className: "modal-modern-header-info"
                }, a))
            };
            ! function(e) {
                e[e.HIDE_MODAL_CHALLENGE = 0] = "HIDE_MODAL_CHALLENGE", e[e.SHOW_MODAL_CHALLENGE = 1] = "SHOW_MODAL_CHALLENGE"
            }(qr || (qr = {}));
            var Kr, Zr = function() {
                    return (Zr = Object.assign || function(e) {
                        for (var t, n = 1, r = arguments.length; n < r; n++)
                            for (var o in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
                        return e
                    }).apply(this, arguments)
                },
                Yr = function(e, t) {
                    var n = Zr({}, e);
                    switch (t.type) {
                        case qr.HIDE_MODAL_CHALLENGE:
                            return n.isModalVisible = !1, n;
                        case qr.SHOW_MODAL_CHALLENGE:
                            return n.isModalVisible = !0, n;
                        default:
                            return e
                    }
                },
                $r = (0, N.createContext)(null),
                Qr = function(e) {
                    var t = e.renderInline,
                        n = e.translate,
                        r = e.onModalChallengeAbandoned,
                        o = e.children,
                        a = (0, N.useState)((function() {
                            return function(e) {
                                return {
                                    Description: {
                                        SetupAuthenticator: e("Description.SetupAuthenticator"),
                                        Reason: e("Description.Reason")
                                    },
                                    Header: {
                                        TurnOnAuthenticator: e("Header.TurnOnAuthenticator")
                                    },
                                    Action: {
                                        Setup: e("Action.Setup")
                                    }
                                }
                            }(n)
                        }))[0],
                        i = (0, N.useState)((function() {
                            return {
                                renderInline: t,
                                resources: a,
                                onModalChallengeAbandoned: r,
                                isModalVisible: !0
                            }
                        }))[0],
                        l = (0, N.useReducer)(Yr, i),
                        u = l[0],
                        s = l[1];
                    return w().createElement($r.Provider, {
                        value: {
                            state: u,
                            dispatch: s
                        }
                    }, o)
                },
                Jr = function() {
                    var e = (0, N.useContext)($r);
                    if (null === e) throw new Error("ForceAuthenticatorContext was not provided in the current scope");
                    return e
                },
                Xr = function() {
                    var e = Jr(),
                        t = e.state,
                        n = t.renderInline,
                        r = t.resources,
                        o = t.onModalChallengeAbandoned,
                        a = t.isModalVisible,
                        i = e.dispatch,
                        l = function() {
                            i({
                                type: qr.HIDE_MODAL_CHALLENGE
                            }), null !== o && o((function() {
                                return i({
                                    type: qr.SHOW_MODAL_CHALLENGE
                                })
                            }))
                        },
                        u = {
                            content: r.Action.Setup,
                            label: r.Action.Setup,
                            enabled: !0,
                            action: function() {
                                l(), window.open("/my/account#!/security?src=forceauthenticator", "_self")
                            }
                        },
                        s = function() {
                            var e = n ? _r : gr.Body,
                                t = n ? Cr : Sr,
                                o = n ? "inline-challenge-lock-icon" : "modal-lock-icon",
                                a = n ? "inline-challenge-margin-bottom-sm" : "modal-margin-bottom-sm",
                                i = n ? "inline-challenge-margin-bottom-xlarge" : "modal-margin-bottom-xlarge";
                            return w().createElement(w().Fragment, null, w().createElement(e, null, w().createElement("div", {
                                className: o
                            }), w().createElement("p", {
                                className: a
                            }, r.Description.SetupAuthenticator), w().createElement("p", {
                                className: i
                            }, r.Description.Reason)), w().createElement(t, {
                                positiveButton: u,
                                negativeButton: null
                            }))
                        };
                    return n ? w().createElement(br, {
                        titleText: r.Header.TurnOnAuthenticator
                    }, s()) : w().createElement(gr, {
                        className: "modal-modern",
                        show: a,
                        onHide: l,
                        backdrop: "static"
                    }, w().createElement(zr, {
                        headerText: r.Header.TurnOnAuthenticator,
                        buttonType: xr.CLOSE,
                        buttonAction: l,
                        buttonEnabled: !0,
                        headerInfo: null
                    }), s())
                },
                eo = (0, zt.withTranslations)((function(e) {
                    var t = e.renderInline,
                        n = e.translate,
                        r = e.onModalChallengeAbandoned;
                    return w().createElement(Qr, {
                        renderInline: t,
                        translate: n,
                        onModalChallengeAbandoned: r
                    }, w().createElement(Xr, null))
                }), jr);
            ! function(e) {
                e[e.UNKNOWN = 0] = "UNKNOWN"
            }(Kr || (Kr = {}));
            var to = function(e, t, n, r) {
                    return new(n || (n = Promise))((function(o, a) {
                        function i(e) {
                            try {
                                u(r.next(e))
                            } catch (e) {
                                a(e)
                            }
                        }

                        function l(e) {
                            try {
                                u(r.throw(e))
                            } catch (e) {
                                a(e)
                            }
                        }

                        function u(e) {
                            var t;
                            e.done ? o(e.value) : (t = e.value, t instanceof n ? t : new n((function(e) {
                                e(t)
                            }))).then(i, l)
                        }
                        u((r = r.apply(e, t || [])).next())
                    }))
                },
                no = function(e, t) {
                    var n, r, o, a, i = {
                        label: 0,
                        sent: function() {
                            if (1 & o[0]) throw o[1];
                            return o[1]
                        },
                        trys: [],
                        ops: []
                    };
                    return a = {
                        next: l(0),
                        throw: l(1),
                        return: l(2)
                    }, "function" == typeof Symbol && (a[Symbol.iterator] = function() {
                        return this
                    }), a;

                    function l(a) {
                        return function(l) {
                            return function(a) {
                                if (n) throw new TypeError("Generator is already executing.");
                                for (; i;) try {
                                    if (n = 1, r && (o = 2 & a[0] ? r.return : a[0] ? r.throw || ((o = r.return) && o.call(r), 0) : r.next) && !(o = o.call(r, a[1])).done) return o;
                                    switch (r = 0, o && (a = [2 & a[0], o.value]), a[0]) {
                                        case 0:
                                        case 1:
                                            o = a;
                                            break;
                                        case 4:
                                            return i.label++, {
                                                value: a[1],
                                                done: !1
                                            };
                                        case 5:
                                            i.label++, r = a[1], a = [0];
                                            continue;
                                        case 7:
                                            a = i.ops.pop(), i.trys.pop();
                                            continue;
                                        default:
                                            if (!(o = i.trys, (o = o.length > 0 && o[o.length - 1]) || 6 !== a[0] && 2 !== a[0])) {
                                                i = 0;
                                                continue
                                            }
                                            if (3 === a[0] && (!o || a[1] > o[0] && a[1] < o[3])) {
                                                i.label = a[1];
                                                break
                                            }
                                            if (6 === a[0] && i.label < o[1]) {
                                                i.label = o[1], o = a;
                                                break
                                            }
                                            if (o && i.label < o[2]) {
                                                i.label = o[2], i.ops.push(a);
                                                break
                                            }
                                            o[2] && i.ops.pop(), i.trys.pop();
                                            continue
                                    }
                                    a = t.call(e, i)
                                } catch (e) {
                                    a = [6, e], r = 0
                                } finally {
                                    n = o = 0
                                }
                                if (5 & a[0]) throw a[1];
                                return {
                                    value: a[0] ? a[1] : void 0,
                                    done: !0
                                }
                            }([a, l])
                        }
                    }
                },
                ro = new qt,
                oo = function(e) {
                    var t = e.containerId,
                        n = e.renderInline,
                        r = e.shouldDynamicallyLoadTranslationResources,
                        o = e.onModalChallengeAbandoned;
                    return to(void 0, void 0, void 0, (function() {
                        var e, a, i;
                        return no(this, (function(l) {
                            switch (l.label) {
                                case 0:
                                    return null === (e = document.getElementById(t)) ? [3, 3] : ((0, A.unmountComponentAtNode)(e), r ? [4, ro.translations.queryAndOverwriteResourcesForNamespace(jr.feature, Br)] : [3, 2]);
                                case 1:
                                    if ((a = l.sent()).isError) return console.error("ForceAuthenticator:", "Got error code " + ((null === (i = a.error) || void 0 === i ? void 0 : i.toString()) || "null") + " loading translations"), [2, !1];
                                    l.label = 2;
                                case 2:
                                    return (0, A.render)(w().createElement(eo, {
                                        renderInline: n,
                                        onModalChallengeAbandoned: o
                                    }), e), [2, !0];
                                case 3:
                                    return [2, !1]
                            }
                        }))
                    }))
                },
                ao = {
                    common: ["CommonUI.Messages"],
                    feature: "Feature.ProofOfWorkChallenge"
                },
                io = ["Description.VerificationError", "Description.VerificationSuccess", "Description.VerifyingYouAreNotBot"],
                lo = "accountSecurityChallengeProofOfWorkEvent",
                uo = {
                    challengeInitialized: "challengeInitialized",
                    puzzleInitialized: "puzzleInitialized",
                    puzzleCompleted: "puzzleCompleted",
                    challengeCompleted: "challengeCompleted",
                    challengeInvalidated: "challengeInvalidated",
                    challengeAbandoned: "challengeAbandoned"
                },
                so = {
                    challengeInitialized: "ChallengeInitialized",
                    puzzleInitialized: "PuzzleInitialized",
                    puzzleCompleted: "PuzzleCompleted",
                    challengeCompleted: "ChallengeCompleted",
                    challengeInvalidated: "ChallengeInvalidated",
                    challengeAbandoned: "ChallengeAbandoned"
                },
                co = {
                    puzzleWorkingTime: "PuzzleWorkingTime",
                    challengeSolveTime: "ChallengeSolveTime"
                },
                po = n(9774),
                fo = n.n(po);
            var ho = {
                map: function(e, t, n) {
                    var r = 0;
                    return w().Children.map(e, (function(e) {
                        return w().isValidElement(e) ? t.call(n, e, r++) : e
                    }))
                },
                forEach: function(e, t, n) {
                    var r = 0;
                    w().Children.forEach(e, (function(e) {
                        w().isValidElement(e) && t.call(n, e, r++)
                    }))
                },
                count: function(e) {
                    var t = 0;
                    return w().Children.forEach(e, (function(e) {
                        w().isValidElement(e) && ++t
                    })), t
                },
                find: function(e, t, n) {
                    var r, o = 0;
                    return w().Children.forEach(e, (function(e) {
                        r || w().isValidElement(e) && t.call(n, e, o++) && (r = e)
                    })), r
                },
                filter: function(e, t, n) {
                    var r = 0,
                        o = [];
                    return w().Children.forEach(e, (function(e) {
                        w().isValidElement(e) && t.call(n, e, r++) && o.push(e)
                    })), o
                },
                every: function(e, t, n) {
                    var r = 0,
                        o = !0;
                    return w().Children.forEach(e, (function(e) {
                        o && w().isValidElement(e) && (t.call(n, e, r++) || (o = !1))
                    })), o
                },
                some: function(e, t, n) {
                    var r = 0,
                        o = !1;
                    return w().Children.forEach(e, (function(e) {
                        o || w().isValidElement(e) && t.call(n, e, r++) && (o = !0)
                    })), o
                },
                toArray: function(e) {
                    var t = [];
                    return w().Children.forEach(e, (function(e) {
                        w().isValidElement(e) && t.push(e)
                    })), t
                }
            };
            var yo = {
                min: En().number,
                now: En().number,
                max: En().number,
                label: En().node,
                srOnly: En().bool,
                striped: En().bool,
                active: En().bool,
                children: function(e, t, n) {
                    var r = e[t];
                    if (!r) return null;
                    var o = null;
                    return w().Children.forEach(r, (function(e) {
                        if (!o) {
                            var t = w().createElement(mo, null);
                            if (e.type !== t.type) {
                                var r = w().isValidElement(e) ? e.type.displayName || e.type.name || e.type : e;
                                o = new Error("Children of " + n + " can contain only ProgressBar components. Found " + r + ".")
                            }
                        }
                    })), o
                },
                isChild: En().bool
            };

            function vo(e, t, n) {
                var r = (e - t) / (n - t) * 100;
                return Math.round(1e3 * r) / 1e3
            }
            var mo = function(e) {
                function t() {
                    return e.apply(this, arguments) || this
                }
                nn(t, e);
                var n = t.prototype;
                return n.renderProgressBar = function(e) {
                    var t, n = e.min,
                        r = e.now,
                        o = e.max,
                        a = e.label,
                        i = e.srOnly,
                        l = e.striped,
                        u = e.active,
                        s = e.className,
                        c = e.style,
                        d = qn(Jt(e, ["min", "now", "max", "label", "srOnly", "striped", "active", "className", "style"])),
                        p = d[0],
                        f = d[1],
                        h = an({}, Fn(p), ((t = {
                            active: u
                        })[Hn(p, "striped")] = u || l, t));
                    return w().createElement("div", an({}, f, {
                        role: "progressbar",
                        className: sn()(s, h),
                        style: an({
                            width: vo(r, n, o) + "%"
                        }, c),
                        "aria-valuenow": r,
                        "aria-valuemin": n,
                        "aria-valuemax": o
                    }), i ? w().createElement("span", {
                        className: "sr-only"
                    }, a) : a)
                }, n.render = function() {
                    var e = this.props,
                        t = e.isChild,
                        n = Jt(e, ["isChild"]);
                    if (t) return this.renderProgressBar(n);
                    var r = n.min,
                        o = n.now,
                        a = n.max,
                        i = n.label,
                        l = n.srOnly,
                        u = n.striped,
                        s = n.active,
                        c = n.bsClass,
                        d = n.bsStyle,
                        p = n.className,
                        f = n.children,
                        h = Jt(n, ["min", "now", "max", "label", "srOnly", "striped", "active", "bsClass", "bsStyle", "className", "children"]);
                    return w().createElement("div", an({}, h, {
                        className: sn()(p, "progress")
                    }), f ? ho.map(f, (function(e) {
                        return (0, N.cloneElement)(e, {
                            isChild: !0
                        })
                    })) : this.renderProgressBar({
                        min: r,
                        now: o,
                        max: a,
                        label: i,
                        srOnly: l,
                        striped: u,
                        active: s,
                        bsClass: c,
                        bsStyle: d
                    }))
                }, t
            }(w().Component);
            mo.propTypes = yo, mo.defaultProps = {
                min: 0,
                max: 100,
                active: !1,
                isChild: !1,
                srOnly: !1,
                striped: !1
            };
            var Eo, go = Vn("progress-bar", Gn(fo()({
                    SUCCESS: "success",
                    WARNING: "warning",
                    DANGER: "danger",
                    INFO: "info"
                }), mo)),
                bo = n(1135),
                _o = n.n(bo),
                Co = function() {
                    function e(e) {
                        this.n = _o()(e.N), this.a = _o()(e.A), this.t = e.T, this.curBase = this.a, this.curT = 0, this.isCancelled = !1
                    }
                    return e.prototype.run = function(e, t) {
                        for (var n = Math.max(1, this.t / 1e3); !this.isDone();) this.doRepeatedSquaring(n), e(this.progress());
                        t(this.answer())
                    }, e.prototype.runAsync = function(e, t, n) {
                        var r = this,
                            o = function() {
                                r.doRepeatedSquaring(n || 200), e(r.progress()), r.isCancelled || (r.isDone() ? t(r.answer()) : setTimeout(o, 0))
                            };
                        setTimeout(o, 0)
                    }, e.prototype.cancelRunAsync = function() {
                        this.isCancelled = !0
                    }, e.prototype.doRepeatedSquaring = function(e) {
                        for (var t = void 0 !== e ? Math.min(this.t, this.curT + e) : this.t; this.curT < t; this.curT += 1) this.curBase = this.curBase.square().mod(this.n)
                    }, e.prototype.answer = function() {
                        return this.isDone() ? this.curBase.toString() : null
                    }, e.prototype.progress = function() {
                        return this.curT / this.t
                    }, e.prototype.isDone = function() {
                        return this.curT === this.t
                    }, e
                }();
            ! function(e) {
                e[e.UNKNOWN = 0] = "UNKNOWN", e[e.SESSION_INVALID = 1] = "SESSION_INVALID", e[e.ANSWER_INVALID = 2] = "ANSWER_INVALID", e[e.WORKER_LOAD_ERROR = 3] = "WORKER_LOAD_ERROR"
            }(Eo || (Eo = {}));
            var So, To, Io = function(e) {
                switch (e) {
                    case xe.SESSION_INACTIVE:
                        return Eo.SESSION_INVALID;
                    default:
                        return Eo.UNKNOWN
                }
            };
            ! function(e) {
                e[e.INITIAL = 0] = "INITIAL", e[e.READY_TO_COMPUTE = 1] = "READY_TO_COMPUTE", e[e.COMPUTING = 2] = "COMPUTING", e[e.COMPUTING_DONE = 3] = "COMPUTING_DONE", e[e.VERIFIED_CORRECT = 4] = "VERIFIED_CORRECT", e[e.VERIFIED_INCORRECT = 5] = "VERIFIED_INCORRECT"
            }(So || (So = {})),
            function(e) {
                e[e.SET_CHALLENGE_COMPLETED = 0] = "SET_CHALLENGE_COMPLETED", e[e.SET_CHALLENGE_INVALIDATED = 1] = "SET_CHALLENGE_INVALIDATED", e[e.HIDE_MODAL_CHALLENGE = 2] = "HIDE_MODAL_CHALLENGE", e[e.SHOW_MODAL_CHALLENGE = 3] = "SHOW_MODAL_CHALLENGE"
            }(To || (To = {}));
            var No, wo = function() {
                    return (wo = Object.assign || function(e) {
                        for (var t, n = 1, r = arguments.length; n < r; n++)
                            for (var o in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
                        return e
                    }).apply(this, arguments)
                },
                Ao = function(e, t) {
                    var n = wo({}, e);
                    switch (t.type) {
                        case To.SET_CHALLENGE_COMPLETED:
                            return n.onChallengeCompletedData = t.onChallengeCompletedData, n.isModalVisible = !1, n;
                        case To.SET_CHALLENGE_INVALIDATED:
                            return n.onChallengeInvalidatedData = t.onChallengeInvalidatedData, n.isModalVisible = !1, n;
                        case To.HIDE_MODAL_CHALLENGE:
                            return n.isModalVisible = !1, n;
                        case To.SHOW_MODAL_CHALLENGE:
                            return n.isModalVisible = !0, n;
                        default:
                            return e
                    }
                },
                Oo = (0, N.createContext)(null),
                Do = function(e) {
                    var t = e.sessionId,
                        n = e.renderInline,
                        r = e.eventService,
                        o = e.metricsService,
                        a = e.requestService,
                        i = e.translate,
                        l = e.onChallengeCompleted,
                        u = e.onChallengeInvalidated,
                        s = e.onModalChallengeAbandoned,
                        c = e.children,
                        d = (0, N.useState)((function() {
                            return function(e) {
                                return {
                                    Description: {
                                        VerificationError: e("Description.VerificationError"),
                                        VerificationSuccess: e("Description.VerificationSuccess"),
                                        VerifyingYouAreNotBot: e("Description.VerifyingYouAreNotBot")
                                    }
                                }
                            }(i)
                        }))[0],
                        p = (0, N.useState)((function() {
                            return {
                                sessionId: t,
                                renderInline: n,
                                resources: d,
                                eventService: r,
                                metricsService: o,
                                requestService: a,
                                onModalChallengeAbandoned: s,
                                onChallengeCompletedData: null,
                                onChallengeInvalidatedData: null,
                                isModalVisible: !0
                            }
                        }))[0],
                        f = (0, N.useReducer)(Ao, p),
                        h = f[0],
                        y = f[1];
                    return (0, N.useEffect)((function() {
                        null !== h.onChallengeCompletedData && null === h.onChallengeInvalidatedData && (r.sendChallengeCompletedEvent(), o.fireChallengeCompletedEvent(), l(h.onChallengeCompletedData))
                    }), [r, o, h.onChallengeCompletedData, h.onChallengeInvalidatedData, l]), (0, N.useEffect)((function() {
                        null !== h.onChallengeInvalidatedData && null === h.onChallengeCompletedData && (r.sendChallengeInvalidatedEvent(), o.fireChallengeInvalidatedEvent(), u(h.onChallengeInvalidatedData))
                    }), [r, o, h.onChallengeCompletedData, h.onChallengeInvalidatedData, u]), w().createElement(Oo.Provider, {
                        value: {
                            state: h,
                            dispatch: y
                        }
                    }, c)
                },
                Lo = function() {
                    var e = (0, N.useContext)(Oo);
                    if (null === e) throw new Error("ProofOfWorkContext was not provided in the current scope");
                    return e
                },
                xo = (null !== (No = T.EnvironmentUrls.websiteUrl) && void 0 !== No ? No : "URL_NOT_FOUND") + "/worker-resources/script/?component=ChallengeWebWorkers",
                Po = function(e, t, n, r) {
                    return new(n || (n = Promise))((function(o, a) {
                        function i(e) {
                            try {
                                u(r.next(e))
                            } catch (e) {
                                a(e)
                            }
                        }

                        function l(e) {
                            try {
                                u(r.throw(e))
                            } catch (e) {
                                a(e)
                            }
                        }

                        function u(e) {
                            var t;
                            e.done ? o(e.value) : (t = e.value, t instanceof n ? t : new n((function(e) {
                                e(t)
                            }))).then(i, l)
                        }
                        u((r = r.apply(e, t || [])).next())
                    }))
                },
                Ro = function(e, t) {
                    var n, r, o, a, i = {
                        label: 0,
                        sent: function() {
                            if (1 & o[0]) throw o[1];
                            return o[1]
                        },
                        trys: [],
                        ops: []
                    };
                    return a = {
                        next: l(0),
                        throw: l(1),
                        return: l(2)
                    }, "function" == typeof Symbol && (a[Symbol.iterator] = function() {
                        return this
                    }), a;

                    function l(a) {
                        return function(l) {
                            return function(a) {
                                if (n) throw new TypeError("Generator is already executing.");
                                for (; i;) try {
                                    if (n = 1, r && (o = 2 & a[0] ? r.return : a[0] ? r.throw || ((o = r.return) && o.call(r), 0) : r.next) && !(o = o.call(r, a[1])).done) return o;
                                    switch (r = 0, o && (a = [2 & a[0], o.value]), a[0]) {
                                        case 0:
                                        case 1:
                                            o = a;
                                            break;
                                        case 4:
                                            return i.label++, {
                                                value: a[1],
                                                done: !1
                                            };
                                        case 5:
                                            i.label++, r = a[1], a = [0];
                                            continue;
                                        case 7:
                                            a = i.ops.pop(), i.trys.pop();
                                            continue;
                                        default:
                                            if (!(o = i.trys, (o = o.length > 0 && o[o.length - 1]) || 6 !== a[0] && 2 !== a[0])) {
                                                i = 0;
                                                continue
                                            }
                                            if (3 === a[0] && (!o || a[1] > o[0] && a[1] < o[3])) {
                                                i.label = a[1];
                                                break
                                            }
                                            if (6 === a[0] && i.label < o[1]) {
                                                i.label = o[1], o = a;
                                                break
                                            }
                                            if (o && i.label < o[2]) {
                                                i.label = o[2], i.ops.push(a);
                                                break
                                            }
                                            o[2] && i.ops.pop(), i.trys.pop();
                                            continue
                                    }
                                    a = t.call(e, i)
                                } catch (e) {
                                    a = [6, e], r = 0
                                } finally {
                                    n = o = 0
                                }
                                if (5 & a[0]) throw a[1];
                                return {
                                    value: a[0] ? a[1] : void 0,
                                    done: !0
                                }
                            }([a, l])
                        }
                    }
                },
                Mo = function(e) {
                    return e.toFixed(0) + "%"
                },
                ko = function() {
                    var e = Lo(),
                        t = e.state,
                        n = t.sessionId,
                        r = t.renderInline,
                        o = t.resources,
                        a = t.eventService,
                        i = t.metricsService,
                        l = t.requestService,
                        u = t.onModalChallengeAbandoned,
                        s = t.isModalVisible,
                        c = e.dispatch,
                        d = (0, N.useState)(null),
                        p = d[0],
                        f = d[1],
                        h = (0, N.useState)(null),
                        y = h[0],
                        v = h[1],
                        m = (0, N.useState)(So.INITIAL),
                        E = m[0],
                        g = m[1],
                        b = (0, N.useState)(0),
                        _ = b[0],
                        C = b[1],
                        S = (0, N.useRef)(null),
                        T = (0, N.useRef)(null),
                        I = function() {
                            try {
                                S.current = new Worker(xo)
                            } catch (e) {
                                S.current = null
                            }
                            f(null), v(null), g(So.INITIAL)
                        },
                        A = function() {
                            return Po(void 0, void 0, void 0, (function() {
                                return Ro(this, (function(e) {
                                    switch (e.label) {
                                        case 0:
                                            switch (E) {
                                                case So.READY_TO_COMPUTE:
                                                    return [3, 1];
                                                case So.COMPUTING_DONE:
                                                    return [3, 2]
                                            }
                                            return [3, 4];
                                        case 1:
                                            return a.sendPuzzleInitializedEvent(), i.firePuzzleInitializedEvent(),
                                                function() {
                                                    if (null == p || E !== So.READY_TO_COMPUTE) return g(So.VERIFIED_INCORRECT), void c({
                                                        type: To.SET_CHALLENGE_INVALIDATED,
                                                        onChallengeInvalidatedData: {
                                                            errorCode: Eo.UNKNOWN,
                                                            errorMessage: o.Description.VerificationError
                                                        }
                                                    });
                                                    if (null == S.current) {
                                                        var e = JSON.parse(p);
                                                        return T.current = new Co(e), g(So.COMPUTING), void T.current.runAsync((function(e) {
                                                            C(e)
                                                        }), (function(e) {
                                                            v(e), g(So.COMPUTING_DONE)
                                                        }))
                                                    }
                                                    g(So.COMPUTING), S.current.onmessage = function(e) {
                                                        var t = "object" == typeof e.data ? e.data : JSON.parse(e.data);
                                                        C(t.progress), t.answer && (v(t.answer), g(So.COMPUTING_DONE))
                                                    }, S.current.postMessage(p)
                                                }(), [3, 5];
                                        case 2:
                                            return a.sendPuzzleCompletedEvent(), i.firePuzzleCompletedEvent(), [4, Po(void 0, void 0, void 0, (function() {
                                                var e;
                                                return Ro(this, (function(t) {
                                                    switch (t.label) {
                                                        case 0:
                                                            return null == y ? [2] : [4, l.proofOfWork.verifyPuzzle(n, y)];
                                                        case 1:
                                                            return (e = t.sent()).isError ? (c({
                                                                type: To.SET_CHALLENGE_INVALIDATED,
                                                                onChallengeInvalidatedData: {
                                                                    errorCode: Io(e.error),
                                                                    errorMessage: o.Description.VerificationError
                                                                }
                                                            }), [2]) : (e.value.answerCorrect ? (g(So.VERIFIED_CORRECT), c({
                                                                type: To.SET_CHALLENGE_COMPLETED,
                                                                onChallengeCompletedData: {
                                                                    redemptionToken: e.value.redemptionToken
                                                                }
                                                            })) : (g(So.VERIFIED_INCORRECT), c({
                                                                type: To.SET_CHALLENGE_INVALIDATED,
                                                                onChallengeInvalidatedData: {
                                                                    errorCode: Eo.ANSWER_INVALID,
                                                                    errorMessage: o.Description.VerificationError
                                                                }
                                                            })), [2])
                                                    }
                                                }))
                                            }))];
                                        case 3:
                                            return e.sent(), [3, 5];
                                        case 4:
                                            return [3, 5];
                                        case 5:
                                            return [2]
                                    }
                                }))
                            }))
                        },
                        O = function() {
                            c({
                                type: To.HIDE_MODAL_CHALLENGE
                            }), S.current && S.current.terminate(), T.current && T.current.cancelRunAsync(), I(), null !== u && u((function() {
                                return c({
                                    type: To.SHOW_MODAL_CHALLENGE
                                })
                            }))
                        };
                    (0, N.useEffect)((function() {
                        return Po(void 0, void 0, void 0, (function() {
                                var e;
                                return Ro(this, (function(t) {
                                    switch (t.label) {
                                        case 0:
                                            return I(), [4, l.proofOfWork.getPuzzle(n)];
                                        case 1:
                                            return (e = t.sent()).isError ? (c({
                                                type: To.SET_CHALLENGE_INVALIDATED,
                                                onChallengeInvalidatedData: {
                                                    errorCode: Eo.UNKNOWN,
                                                    errorMessage: o.Description.VerificationError
                                                }
                                            }), [2]) : (f(e.value.artifacts), g(So.READY_TO_COMPUTE), [2])
                                    }
                                }))
                            })),
                            function() {
                                S.current && (S.current.terminate(), S.current = null)
                            }
                    }), []), (0, N.useEffect)((function() {
                        A()
                    }), [E]);
                    var D = function() {
                        var e = r ? _r : gr.Body,
                            t = 100 * (_ || 0);
                        return w().createElement(w().Fragment, null, w().createElement(e, null, w().createElement("div", {
                            className: "pow-body"
                        }, w().createElement(go, {
                            now: t,
                            label: Mo(t),
                            striped: !0
                        }))))
                    };
                    return r ? w().createElement(br, {
                        titleText: o.Description.VerifyingYouAreNotBot
                    }, D()) : w().createElement(gr, {
                        className: "modal-modern modal-modern-challenge-proof-of-work",
                        show: s,
                        onHide: O,
                        backdrop: "static"
                    }, w().createElement(zr, {
                        headerText: o.Description.VerifyingYouAreNotBot,
                        buttonType: xr.CLOSE,
                        buttonAction: O,
                        buttonEnabled: !0,
                        headerInfo: null
                    }), D())
                },
                Uo = (0, zt.withTranslations)((function(e) {
                    var t = e.sessionId,
                        n = e.renderInline,
                        r = e.eventService,
                        o = e.metricsService,
                        a = e.requestService,
                        i = e.translate,
                        l = e.onChallengeCompleted,
                        u = e.onChallengeInvalidated,
                        s = e.onModalChallengeAbandoned;
                    return w().createElement(Do, {
                        sessionId: t,
                        renderInline: n,
                        eventService: r,
                        metricsService: o,
                        requestService: a,
                        translate: i,
                        onChallengeCompleted: l,
                        onChallengeInvalidated: u,
                        onModalChallengeAbandoned: s
                    }, w().createElement(ko, null))
                }), ao),
                Ho = function() {
                    function e(e) {
                        this.sessionId = e
                    }
                    return e.prototype.sendChallengeInitializedEvent = function() {
                        I().EventStream.SendEventWithTarget(lo, uo.challengeInitialized, {
                            sessionId: this.sessionId
                        }, I().EventStream.TargetTypes.WWW)
                    }, e.prototype.sendPuzzleInitializedEvent = function() {
                        I().EventStream.SendEventWithTarget(lo, uo.puzzleInitialized, {
                            sessionId: this.sessionId
                        }, I().EventStream.TargetTypes.WWW)
                    }, e.prototype.sendPuzzleCompletedEvent = function() {
                        I().EventStream.SendEventWithTarget(lo, uo.puzzleCompleted, {
                            sessionId: this.sessionId
                        }, I().EventStream.TargetTypes.WWW)
                    }, e.prototype.sendChallengeCompletedEvent = function() {
                        I().EventStream.SendEventWithTarget(lo, uo.challengeCompleted, {
                            sessionId: this.sessionId
                        }, I().EventStream.TargetTypes.WWW)
                    }, e.prototype.sendChallengeInvalidatedEvent = function() {
                        I().EventStream.SendEventWithTarget(lo, uo.challengeInvalidated, {
                            sessionId: this.sessionId
                        }, I().EventStream.TargetTypes.WWW)
                    }, e.prototype.sendChallengeAbandonedEvent = function() {
                        I().EventStream.SendEventWithTarget(lo, uo.challengeAbandoned, {
                            sessionId: this.sessionId
                        }, I().EventStream.TargetTypes.WWW)
                    }, e
                }(),
                Vo = window.EventTracker,
                Go = function() {
                    function e(e) {
                        this.appType = e || "unknown", this.challengeSolveTimeSequenceName = "ProofOfWork_" + co.challengeSolveTime, this.puzzleWorkingTimeSequenceName = "ProofOfWork_" + co.puzzleWorkingTime
                    }
                    return e.prototype.fireChallengeInitializedEvent = function() {
                        if (Vo) {
                            var e = "ProofOfWork_" + so.challengeInitialized;
                            Vo.fireEvent(e, e + "_" + this.appType), Vo.start(this.challengeSolveTimeSequenceName, this.challengeSolveTimeSequenceName + "_" + this.appType)
                        }
                    }, e.prototype.firePuzzleInitializedEvent = function() {
                        if (Vo) {
                            var e = "ProofOfWork_" + so.puzzleInitialized;
                            Vo.fireEvent(e, e + "_" + this.appType), Vo.start(this.puzzleWorkingTimeSequenceName, this.puzzleWorkingTimeSequenceName + "_" + this.appType)
                        }
                    }, e.prototype.firePuzzleCompletedEvent = function() {
                        if (Vo) {
                            var e = "ProofOfWork_" + so.puzzleCompleted;
                            Vo.fireEvent(e, e + "_" + this.appType), Vo.endSuccess(this.puzzleWorkingTimeSequenceName, this.puzzleWorkingTimeSequenceName + "_" + this.appType)
                        }
                    }, e.prototype.fireChallengeCompletedEvent = function() {
                        if (Vo) {
                            var e = "ProofOfWork_" + so.challengeCompleted;
                            Vo.fireEvent(e, e + "_" + this.appType), Vo.endSuccess(this.challengeSolveTimeSequenceName, this.challengeSolveTimeSequenceName + "_" + this.appType)
                        }
                    }, e.prototype.fireChallengeInvalidatedEvent = function() {
                        if (Vo) {
                            var e = "ProofOfWork_" + so.challengeInvalidated;
                            Vo.fireEvent(e, e + "_" + this.appType), Vo.endFailure(this.challengeSolveTimeSequenceName, this.challengeSolveTimeSequenceName + "_" + this.appType)
                        }
                    }, e.prototype.fireChallengeAbandonedEvent = function() {
                        if (Vo) {
                            var e = "ProofOfWork_" + so.challengeAbandoned;
                            Vo.fireEvent(e, e + "_" + this.appType), Vo.endCancel(this.challengeSolveTimeSequenceName, this.puzzleWorkingTimeSequenceName, this.challengeSolveTimeSequenceName + "_" + this.appType, this.puzzleWorkingTimeSequenceName + "_" + this.appType)
                        }
                    }, e
                }(),
                Wo = function(e, t, n, r) {
                    return new(n || (n = Promise))((function(o, a) {
                        function i(e) {
                            try {
                                u(r.next(e))
                            } catch (e) {
                                a(e)
                            }
                        }

                        function l(e) {
                            try {
                                u(r.throw(e))
                            } catch (e) {
                                a(e)
                            }
                        }

                        function u(e) {
                            var t;
                            e.done ? o(e.value) : (t = e.value, t instanceof n ? t : new n((function(e) {
                                e(t)
                            }))).then(i, l)
                        }
                        u((r = r.apply(e, t || [])).next())
                    }))
                },
                Fo = function(e, t) {
                    var n, r, o, a, i = {
                        label: 0,
                        sent: function() {
                            if (1 & o[0]) throw o[1];
                            return o[1]
                        },
                        trys: [],
                        ops: []
                    };
                    return a = {
                        next: l(0),
                        throw: l(1),
                        return: l(2)
                    }, "function" == typeof Symbol && (a[Symbol.iterator] = function() {
                        return this
                    }), a;

                    function l(a) {
                        return function(l) {
                            return function(a) {
                                if (n) throw new TypeError("Generator is already executing.");
                                for (; i;) try {
                                    if (n = 1, r && (o = 2 & a[0] ? r.return : a[0] ? r.throw || ((o = r.return) && o.call(r), 0) : r.next) && !(o = o.call(r, a[1])).done) return o;
                                    switch (r = 0, o && (a = [2 & a[0], o.value]), a[0]) {
                                        case 0:
                                        case 1:
                                            o = a;
                                            break;
                                        case 4:
                                            return i.label++, {
                                                value: a[1],
                                                done: !1
                                            };
                                        case 5:
                                            i.label++, r = a[1], a = [0];
                                            continue;
                                        case 7:
                                            a = i.ops.pop(), i.trys.pop();
                                            continue;
                                        default:
                                            if (!(o = i.trys, (o = o.length > 0 && o[o.length - 1]) || 6 !== a[0] && 2 !== a[0])) {
                                                i = 0;
                                                continue
                                            }
                                            if (3 === a[0] && (!o || a[1] > o[0] && a[1] < o[3])) {
                                                i.label = a[1];
                                                break
                                            }
                                            if (6 === a[0] && i.label < o[1]) {
                                                i.label = o[1], o = a;
                                                break
                                            }
                                            if (o && i.label < o[2]) {
                                                i.label = o[2], i.ops.push(a);
                                                break
                                            }
                                            o[2] && i.ops.pop(), i.trys.pop();
                                            continue
                                    }
                                    a = t.call(e, i)
                                } catch (e) {
                                    a = [6, e], r = 0
                                } finally {
                                    n = o = 0
                                }
                                if (5 & a[0]) throw a[1];
                                return {
                                    value: a[0] ? a[1] : void 0,
                                    done: !0
                                }
                            }([a, l])
                        }
                    }
                },
                jo = new qt,
                Bo = function(e) {
                    var t = e.containerId,
                        n = e.sessionId,
                        r = e.appType,
                        o = e.renderInline,
                        a = e.shouldDynamicallyLoadTranslationResources,
                        i = e.onChallengeCompleted,
                        l = e.onChallengeInvalidated,
                        u = e.onModalChallengeAbandoned;
                    return Wo(void 0, void 0, void 0, (function() {
                        var e, s, c, d, p;
                        return Fo(this, (function(f) {
                            switch (f.label) {
                                case 0:
                                    return null === (e = document.getElementById(t)) ? [3, 3] : ((0, A.unmountComponentAtNode)(e), a ? [4, jo.translations.queryAndOverwriteResourcesForNamespace(ao.feature, io)] : [3, 2]);
                                case 1:
                                    if ((s = f.sent()).isError) return console.error("Proof-of-Work:", "Got error code " + ((null === (p = s.error) || void 0 === p ? void 0 : p.toString()) || "null") + " loading translations"), [2, !1];
                                    f.label = 2;
                                case 2:
                                    return c = new Ho(n), d = new Go(r), (0, A.render)(w().createElement(Uo, {
                                        sessionId: n,
                                        renderInline: o,
                                        eventService: c,
                                        metricsService: d,
                                        requestService: jo,
                                        onChallengeCompleted: i,
                                        onChallengeInvalidated: l,
                                        onModalChallengeAbandoned: u
                                    }), e), c.sendChallengeInitializedEvent(), d.fireChallengeInitializedEvent(), [2, !0];
                                case 3:
                                    return [2, !1]
                            }
                        }))
                    }))
                },
                qo = {
                    common: [],
                    feature: "Feature.Reauthentication"
                },
                zo = ["Action.ForgotYourPassword", "Action.PleaseTryAgain", "Action.Verify", "Description.EnterYourPassword", "Header.PasswordVerification", "Label.YourPassword", "Message.Error.Default", "Message.Error.PasswordIncorrect"],
                Ko = {
                    controlId: En().string,
                    validationState: En().oneOf(["success", "warning", "error", null])
                },
                Zo = {
                    $bs_formGroup: En().object.isRequired
                },
                Yo = function(e) {
                    function t() {
                        return e.apply(this, arguments) || this
                    }
                    nn(t, e);
                    var n = t.prototype;
                    return n.getChildContext = function() {
                        var e = this.props;
                        return {
                            $bs_formGroup: {
                                controlId: e.controlId,
                                validationState: e.validationState
                            }
                        }
                    }, n.hasFeedback = function(e) {
                        var t = this;
                        return ho.some(e, (function(e) {
                            return "feedback" === e.props.bsRole || e.props.children && t.hasFeedback(e.props.children)
                        }))
                    }, n.render = function() {
                        var e = this.props,
                            t = e.validationState,
                            n = e.className,
                            r = e.children,
                            o = function(e, t) {
                                var n = {};
                                t.forEach((function(e) {
                                    n[e] = !0
                                }));
                                var r = {};
                                return Ln()(e).forEach((function(e) {
                                    var t = e[0],
                                        o = e[1];
                                    Bn(t) || n[t] || (r[t] = o)
                                })), [jn(e), r]
                            }(Jt(e, ["validationState", "className", "children"]), ["controlId"]),
                            a = o[0],
                            i = o[1],
                            l = an({}, Fn(a), {
                                "has-feedback": this.hasFeedback(r)
                            });
                        return t && (l["has-" + t] = !0), w().createElement("div", an({}, i, {
                            className: sn()(n, l)
                        }), r)
                    }, t
                }(w().Component);
            Yo.propTypes = Ko, Yo.childContextTypes = Zo;
            var $o = Vn("form-group", Wn([Rn, Mn], Yo)),
                Qo = (n(2564), {
                    glyph: En().string.isRequired
                }),
                Jo = function(e) {
                    function t() {
                        return e.apply(this, arguments) || this
                    }
                    return nn(t, e), t.prototype.render = function() {
                        var e, t = this.props,
                            n = t.glyph,
                            r = t.className,
                            o = qn(Jt(t, ["glyph", "className"])),
                            a = o[0],
                            i = o[1],
                            l = an({}, Fn(a), ((e = {})[Hn(a, n)] = !0, e));
                        return w().createElement("span", an({}, i, {
                            className: sn()(r, l)
                        }))
                    }, t
                }(w().Component);
            Jo.propTypes = Qo;
            var Xo = Vn("glyphicon", Jo),
                ea = {
                    $bs_formGroup: En().object
                },
                ta = function(e) {
                    function t() {
                        return e.apply(this, arguments) || this
                    }
                    nn(t, e);
                    var n = t.prototype;
                    return n.getGlyph = function(e) {
                        switch (e) {
                            case "success":
                                return "ok";
                            case "warning":
                                return "warning-sign";
                            case "error":
                                return "remove";
                            default:
                                return null
                        }
                    }, n.renderDefaultFeedback = function(e, t, n, r) {
                        var o = this.getGlyph(e && e.validationState);
                        return o ? w().createElement(Xo, an({}, r, {
                            glyph: o,
                            className: sn()(t, n)
                        })) : null
                    }, n.render = function() {
                        var e = this.props,
                            t = e.className,
                            n = e.children,
                            r = qn(Jt(e, ["className", "children"])),
                            o = r[0],
                            a = r[1],
                            i = Fn(o);
                        if (!n) return this.renderDefaultFeedback(this.context.$bs_formGroup, t, i, a);
                        var l = w().Children.only(n);
                        return w().cloneElement(l, an({}, a, {
                            className: sn()(l.props.className, t, i)
                        }))
                    }, t
                }(w().Component);
            ta.defaultProps = {
                bsRole: "feedback"
            }, ta.contextTypes = ea;
            var na = Vn("form-control-feedback", ta),
                ra = {
                    componentClass: Tn()
                },
                oa = function(e) {
                    function t() {
                        return e.apply(this, arguments) || this
                    }
                    return nn(t, e), t.prototype.render = function() {
                        var e = this.props,
                            t = e.componentClass,
                            n = e.className,
                            r = qn(Jt(e, ["componentClass", "className"])),
                            o = r[0],
                            a = r[1],
                            i = Fn(o);
                        return w().createElement(t, an({}, a, {
                            className: sn()(n, i)
                        }))
                    }, t
                }(w().Component);
            oa.propTypes = ra, oa.defaultProps = {
                componentClass: "p"
            };
            var aa = Vn("form-control-static", oa),
                ia = {
                    componentClass: Tn(),
                    type: En().string,
                    id: En().string,
                    inputRef: En().func
                },
                la = {
                    $bs_formGroup: En().object
                },
                ua = function(e) {
                    function t() {
                        return e.apply(this, arguments) || this
                    }
                    return nn(t, e), t.prototype.render = function() {
                        var e, t = this.context.$bs_formGroup,
                            n = t && t.controlId,
                            r = this.props,
                            o = r.componentClass,
                            a = r.type,
                            i = r.id,
                            l = void 0 === i ? n : i,
                            u = r.inputRef,
                            s = r.className,
                            c = r.bsSize,
                            d = qn(Jt(r, ["componentClass", "type", "id", "inputRef", "className", "bsSize"])),
                            p = d[0],
                            f = d[1];
                        ("file" !== a && (e = Fn(p)), c) && (e[Hn({
                            bsClass: "input"
                        }, kn[c] || c)] = !0);
                        return w().createElement(o, an({}, f, {
                            type: a,
                            id: l,
                            ref: u,
                            className: sn()(s, e)
                        }))
                    }, t
                }(w().Component);
            ua.propTypes = ia, ua.defaultProps = {
                componentClass: "input"
            }, ua.contextTypes = la, ua.Feedback = na, ua.Static = aa;
            var sa, ca = Vn("form-control", Wn([Mn, Rn], ua)),
                da = function(e, t, n, r) {
                    return new(n || (n = Promise))((function(o, a) {
                        function i(e) {
                            try {
                                u(r.next(e))
                            } catch (e) {
                                a(e)
                            }
                        }

                        function l(e) {
                            try {
                                u(r.throw(e))
                            } catch (e) {
                                a(e)
                            }
                        }

                        function u(e) {
                            var t;
                            e.done ? o(e.value) : (t = e.value, t instanceof n ? t : new n((function(e) {
                                e(t)
                            }))).then(i, l)
                        }
                        u((r = r.apply(e, t || [])).next())
                    }))
                },
                pa = function(e, t) {
                    var n, r, o, a, i = {
                        label: 0,
                        sent: function() {
                            if (1 & o[0]) throw o[1];
                            return o[1]
                        },
                        trys: [],
                        ops: []
                    };
                    return a = {
                        next: l(0),
                        throw: l(1),
                        return: l(2)
                    }, "function" == typeof Symbol && (a[Symbol.iterator] = function() {
                        return this
                    }), a;

                    function l(a) {
                        return function(l) {
                            return function(a) {
                                if (n) throw new TypeError("Generator is already executing.");
                                for (; i;) try {
                                    if (n = 1, r && (o = 2 & a[0] ? r.return : a[0] ? r.throw || ((o = r.return) && o.call(r), 0) : r.next) && !(o = o.call(r, a[1])).done) return o;
                                    switch (r = 0, o && (a = [2 & a[0], o.value]), a[0]) {
                                        case 0:
                                        case 1:
                                            o = a;
                                            break;
                                        case 4:
                                            return i.label++, {
                                                value: a[1],
                                                done: !1
                                            };
                                        case 5:
                                            i.label++, r = a[1], a = [0];
                                            continue;
                                        case 7:
                                            a = i.ops.pop(), i.trys.pop();
                                            continue;
                                        default:
                                            if (!(o = i.trys, (o = o.length > 0 && o[o.length - 1]) || 6 !== a[0] && 2 !== a[0])) {
                                                i = 0;
                                                continue
                                            }
                                            if (3 === a[0] && (!o || a[1] > o[0] && a[1] < o[3])) {
                                                i.label = a[1];
                                                break
                                            }
                                            if (6 === a[0] && i.label < o[1]) {
                                                i.label = o[1], o = a;
                                                break
                                            }
                                            if (o && i.label < o[2]) {
                                                i.label = o[2], i.ops.push(a);
                                                break
                                            }
                                            o[2] && i.ops.pop(), i.trys.pop();
                                            continue
                                    }
                                    a = t.call(e, i)
                                } catch (e) {
                                    a = [6, e], r = 0
                                } finally {
                                    n = o = 0
                                }
                                if (5 & a[0]) throw a[1];
                                return {
                                    value: a[0] ? a[1] : void 0,
                                    done: !0
                                }
                            }([a, l])
                        }
                    }
                },
                fa = function(e, t) {
                    return function(n) {
                        return da(void 0, void 0, Promise, (function() {
                            return pa(this, (function(r) {
                                switch (r.label) {
                                    case 0:
                                        return "Enter" === n.key && t ? (n.preventDefault(), n.stopPropagation(), [4, e()]) : [3, 2];
                                    case 1:
                                        r.sent(), r.label = 2;
                                    case 2:
                                        return [2]
                                }
                            }))
                        }))
                    }
                },
                ha = function() {
                    return Promise.resolve(null)
                },
                ya = function(e, t, n, r, o, a) {
                    return function(i) {
                        return da(void 0, void 0, Promise, (function() {
                            var l, u;
                            return pa(this, (function(s) {
                                switch (s.label) {
                                    case 0:
                                        return l = i.currentTarget.value, void 0 === t || t.test(l) || (l = e), void 0 !== a && a(l), r(l), u = o, [4, n(l)];
                                    case 1:
                                        return u.apply(void 0, [s.sent()]), [2]
                                }
                            }))
                        }))
                    }
                },
                va = function(e) {
                    var t = e.id,
                        n = e.inputType,
                        r = e.placeholder,
                        o = e.disabled,
                        a = e.value,
                        i = e.error,
                        l = e.canSubmit,
                        u = e.validate,
                        s = e.setValue,
                        c = e.setError,
                        d = e.handleSubmit,
                        p = e.onChange,
                        f = e.label,
                        h = e.bottomLabel,
                        y = e.autoComplete,
                        v = e.maxLength,
                        m = e.validCharactersRegEx,
                        E = e.hideFeedback,
                        g = e.concealInput,
                        b = "" !== a && null === i,
                        _ = "" !== a && null !== i,
                        C = b || _;
                    return w().createElement("div", {
                        className: "input-control-wrapper"
                    }, f && w().createElement("label", {
                        className: "text-label xsmall",
                        htmlFor: t
                    }, f), w().createElement($o, {
                        controlId: t,
                        className: (C ? "form-has-feedback" : "") + " " + (b ? "form-has-success" : "") + " " + (_ ? "form-has-error" : "")
                    }, w().createElement(ca, {
                        as: "input",
                        className: "input-field" + (g && a.length > 0 ? " input-field-concealed" : ""),
                        type: n,
                        autoComplete: y,
                        maxLength: v,
                        disabled: o,
                        value: a,
                        placeholder: r,
                        onChange: ya(a, m, u, s, c, p),
                        onKeyDown: fa(d, l)
                    }), !o && !E && b && w().createElement("span", {
                        className: "icon-checkmark-on"
                    }), !o && !E && _ && w().createElement("span", {
                        className: "icon-close"
                    }), w().createElement("div", {
                        className: "form-control-label bottom-label xsmall"
                    }, !o && _ ? i : h || " ")))
                };
            ! function(e) {
                e[e.UNKNOWN = 0] = "UNKNOWN"
            }(sa || (sa = {}));
            var ma;
            ! function(e) {
                e[e.SET_CHALLENGE_COMPLETED = 0] = "SET_CHALLENGE_COMPLETED", e[e.SET_CHALLENGE_INVALIDATED = 1] = "SET_CHALLENGE_INVALIDATED", e[e.HIDE_MODAL_CHALLENGE = 2] = "HIDE_MODAL_CHALLENGE", e[e.SHOW_MODAL_CHALLENGE = 3] = "SHOW_MODAL_CHALLENGE"
            }(ma || (ma = {}));
            var Ea, ga = function() {
                    return (ga = Object.assign || function(e) {
                        for (var t, n = 1, r = arguments.length; n < r; n++)
                            for (var o in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
                        return e
                    }).apply(this, arguments)
                },
                ba = function(e, t) {
                    var n, r = ga({}, e);
                    switch (t.type) {
                        case ma.SET_CHALLENGE_COMPLETED:
                            return r.onChallengeCompletedData = t.onChallengeCompletedData, r.isModalVisible = !1, r;
                        case ma.SET_CHALLENGE_INVALIDATED:
                            return r.onChallengeInvalidatedData = {
                                errorCode: t.errorCode,
                                errorMessage: (n = e.resources, t.errorCode, n.Message.Error.Default)
                            }, r.isModalVisible = !1, r;
                        case ma.HIDE_MODAL_CHALLENGE:
                            return r.isModalVisible = !1, r;
                        case ma.SHOW_MODAL_CHALLENGE:
                            return r.isModalVisible = !0, r;
                        default:
                            return e
                    }
                },
                _a = (0, N.createContext)(null),
                Ca = function(e) {
                    var t = e.renderInline,
                        n = e.requestService,
                        r = e.translate,
                        o = e.onChallengeCompleted,
                        a = e.onChallengeInvalidated,
                        i = e.onModalChallengeAbandoned,
                        l = e.children,
                        u = (0, N.useState)((function() {
                            return function(e) {
                                return {
                                    Action: {
                                        ForgotYourPassword: function(t, n) {
                                            return e("Action.ForgotYourPassword", {
                                                linkStart: t,
                                                linkEnd: n
                                            })
                                        },
                                        PleaseTryAgain: e("Action.PleaseTryAgain"),
                                        Verify: e("Action.Verify")
                                    },
                                    Description: {
                                        EnterYourPassword: e("Description.EnterYourPassword")
                                    },
                                    Header: {
                                        PasswordVerification: e("Header.PasswordVerification")
                                    },
                                    Label: {
                                        YourPassword: e("Label.YourPassword")
                                    },
                                    Message: {
                                        Error: {
                                            Default: e("Message.Error.Default"),
                                            PasswordIncorrect: e("Message.Error.PasswordIncorrect")
                                        }
                                    }
                                }
                            }(r)
                        }))[0],
                        s = (0, N.useState)((function() {
                            return {
                                renderInline: t,
                                resources: u,
                                requestService: n,
                                onModalChallengeAbandoned: i,
                                onChallengeCompletedData: null,
                                onChallengeInvalidatedData: null,
                                isModalVisible: !0
                            }
                        }))[0],
                        c = (0, N.useReducer)(ba, s),
                        d = c[0],
                        p = c[1];
                    return (0, N.useEffect)((function() {
                        null !== d.onChallengeCompletedData && null === d.onChallengeInvalidatedData && o(d.onChallengeCompletedData)
                    }), [d.onChallengeCompletedData, d.onChallengeInvalidatedData, o]), (0, N.useEffect)((function() {
                        null !== d.onChallengeInvalidatedData && null === d.onChallengeCompletedData && a(d.onChallengeInvalidatedData)
                    }), [d.onChallengeCompletedData, d.onChallengeInvalidatedData, a]), w().createElement(_a.Provider, {
                        value: {
                            state: d,
                            dispatch: p
                        }
                    }, l)
                },
                Sa = function() {
                    var e = (0, N.useContext)(_a);
                    if (null === e) throw new Error("ReauthenticationContext was not provided in the current scope");
                    return e
                },
                Ta = function() {
                    var e = Sa().state.resources.Action.ForgotYourPassword('<a class="text-name text-footer" href="https://en.help.roblox.com/hc/articles/203313070-I-Forgot-My-Password" target="_blank">', "</a>");
                    return w().createElement("span", {
                        dangerouslySetInnerHTML: {
                            __html: e
                        }
                    })
                },
                Ia = function(e, t, n, r) {
                    return new(n || (n = Promise))((function(o, a) {
                        function i(e) {
                            try {
                                u(r.next(e))
                            } catch (e) {
                                a(e)
                            }
                        }

                        function l(e) {
                            try {
                                u(r.throw(e))
                            } catch (e) {
                                a(e)
                            }
                        }

                        function u(e) {
                            var t;
                            e.done ? o(e.value) : (t = e.value, t instanceof n ? t : new n((function(e) {
                                e(t)
                            }))).then(i, l)
                        }
                        u((r = r.apply(e, t || [])).next())
                    }))
                },
                Na = function(e, t) {
                    var n, r, o, a, i = {
                        label: 0,
                        sent: function() {
                            if (1 & o[0]) throw o[1];
                            return o[1]
                        },
                        trys: [],
                        ops: []
                    };
                    return a = {
                        next: l(0),
                        throw: l(1),
                        return: l(2)
                    }, "function" == typeof Symbol && (a[Symbol.iterator] = function() {
                        return this
                    }), a;

                    function l(a) {
                        return function(l) {
                            return function(a) {
                                if (n) throw new TypeError("Generator is already executing.");
                                for (; i;) try {
                                    if (n = 1, r && (o = 2 & a[0] ? r.return : a[0] ? r.throw || ((o = r.return) && o.call(r), 0) : r.next) && !(o = o.call(r, a[1])).done) return o;
                                    switch (r = 0, o && (a = [2 & a[0], o.value]), a[0]) {
                                        case 0:
                                        case 1:
                                            o = a;
                                            break;
                                        case 4:
                                            return i.label++, {
                                                value: a[1],
                                                done: !1
                                            };
                                        case 5:
                                            i.label++, r = a[1], a = [0];
                                            continue;
                                        case 7:
                                            a = i.ops.pop(), i.trys.pop();
                                            continue;
                                        default:
                                            if (!(o = i.trys, (o = o.length > 0 && o[o.length - 1]) || 6 !== a[0] && 2 !== a[0])) {
                                                i = 0;
                                                continue
                                            }
                                            if (3 === a[0] && (!o || a[1] > o[0] && a[1] < o[3])) {
                                                i.label = a[1];
                                                break
                                            }
                                            if (6 === a[0] && i.label < o[1]) {
                                                i.label = o[1], o = a;
                                                break
                                            }
                                            if (o && i.label < o[2]) {
                                                i.label = o[2], i.ops.push(a);
                                                break
                                            }
                                            o[2] && i.ops.pop(), i.trys.pop();
                                            continue
                                    }
                                    a = t.call(e, i)
                                } catch (e) {
                                    a = [6, e], r = 0
                                } finally {
                                    n = o = 0
                                }
                                if (5 & a[0]) throw a[1];
                                return {
                                    value: a[0] ? a[1] : void 0,
                                    done: !0
                                }
                            }([a, l])
                        }
                    }
                },
                wa = function() {
                    var e = Sa(),
                        t = e.state,
                        n = t.renderInline,
                        r = t.resources,
                        o = t.requestService,
                        a = t.onModalChallengeAbandoned,
                        i = t.isModalVisible,
                        l = e.dispatch,
                        u = (0, N.useState)(""),
                        s = u[0],
                        c = u[1],
                        d = (0, N.useState)(!1),
                        p = d[0],
                        f = d[1],
                        h = (0, N.useState)(null),
                        y = h[0],
                        v = h[1],
                        m = function() {
                            return v(null)
                        },
                        E = function() {
                            l({
                                type: ma.HIDE_MODAL_CHALLENGE
                            }), null !== a && a((function() {
                                return l({
                                    type: ma.SHOW_MODAL_CHALLENGE
                                })
                            }))
                        },
                        g = function() {
                            return Ia(void 0, void 0, void 0, (function() {
                                var e;
                                return Na(this, (function(t) {
                                    switch (t.label) {
                                        case 0:
                                            return f(!0), [4, o.reauthentication.generateToken(s)];
                                        case 1:
                                            return (e = t.sent()).isError ? (v(function(e, t) {
                                                switch (t) {
                                                    case Fe.PASSWORD_INCORRECT:
                                                        return e.Message.Error.PasswordIncorrect;
                                                    default:
                                                        return e.Message.Error.Default
                                                }
                                            }(r, e.error) + " " + r.Action.PleaseTryAgain), f(!1), [2]) : (v(null), l({
                                                type: ma.SET_CHALLENGE_COMPLETED,
                                                onChallengeCompletedData: {
                                                    reauthenticationToken: e.value.token
                                                }
                                            }), [2])
                                    }
                                }))
                            }))
                        },
                        b = {
                            content: p ? w().createElement("span", {
                                className: "spinner spinner-xs spinner-no-margin"
                            }) : r.Action.Verify,
                            label: r.Action.Verify,
                            enabled: !p && s.length > 0,
                            action: g
                        },
                        _ = function() {
                            var e = n ? _r : gr.Body,
                                t = n ? Cr : Sr,
                                o = n ? "inline-challenge-lock-icon" : "modal-lock-icon",
                                a = n ? "inline-challenge-margin-bottom-xlarge" : "modal-margin-bottom-xlarge";
                            return w().createElement(w().Fragment, null, w().createElement(e, null, w().createElement("div", {
                                className: o
                            }), w().createElement("p", {
                                className: a
                            }, r.Description.EnterYourPassword), w().createElement(va, {
                                id: "reauthentication-password-input",
                                inputType: "password",
                                disabled: p,
                                value: s,
                                setValue: c,
                                error: y,
                                setError: v,
                                validate: ha,
                                canSubmit: s.length > 0,
                                handleSubmit: g,
                                onChange: m,
                                autoComplete: "off",
                                placeholder: r.Label.YourPassword,
                                hideFeedback: !0
                            }), w().createElement("p", null, w().createElement(Ta, null))), w().createElement(t, {
                                positiveButton: b,
                                negativeButton: null
                            }))
                        };
                    return n ? w().createElement(br, {
                        titleText: r.Header.PasswordVerification
                    }, _()) : w().createElement(gr, {
                        className: "modal-modern",
                        show: i,
                        onHide: E,
                        backdrop: "static"
                    }, w().createElement(zr, {
                        headerText: r.Header.PasswordVerification,
                        buttonType: xr.CLOSE,
                        buttonAction: E,
                        buttonEnabled: !p,
                        headerInfo: null
                    }), _())
                },
                Aa = (0, zt.withTranslations)((function(e) {
                    var t = e.renderInline,
                        n = e.requestService,
                        r = e.translate,
                        o = e.onChallengeCompleted,
                        a = e.onChallengeInvalidated,
                        i = e.onModalChallengeAbandoned;
                    return w().createElement(Ca, {
                        renderInline: t,
                        requestService: n,
                        translate: r,
                        onChallengeCompleted: o,
                        onChallengeInvalidated: a,
                        onModalChallengeAbandoned: i
                    }, w().createElement(wa, null))
                }), qo),
                Oa = function(e, t, n, r) {
                    return new(n || (n = Promise))((function(o, a) {
                        function i(e) {
                            try {
                                u(r.next(e))
                            } catch (e) {
                                a(e)
                            }
                        }

                        function l(e) {
                            try {
                                u(r.throw(e))
                            } catch (e) {
                                a(e)
                            }
                        }

                        function u(e) {
                            var t;
                            e.done ? o(e.value) : (t = e.value, t instanceof n ? t : new n((function(e) {
                                e(t)
                            }))).then(i, l)
                        }
                        u((r = r.apply(e, t || [])).next())
                    }))
                },
                Da = function(e, t) {
                    var n, r, o, a, i = {
                        label: 0,
                        sent: function() {
                            if (1 & o[0]) throw o[1];
                            return o[1]
                        },
                        trys: [],
                        ops: []
                    };
                    return a = {
                        next: l(0),
                        throw: l(1),
                        return: l(2)
                    }, "function" == typeof Symbol && (a[Symbol.iterator] = function() {
                        return this
                    }), a;

                    function l(a) {
                        return function(l) {
                            return function(a) {
                                if (n) throw new TypeError("Generator is already executing.");
                                for (; i;) try {
                                    if (n = 1, r && (o = 2 & a[0] ? r.return : a[0] ? r.throw || ((o = r.return) && o.call(r), 0) : r.next) && !(o = o.call(r, a[1])).done) return o;
                                    switch (r = 0, o && (a = [2 & a[0], o.value]), a[0]) {
                                        case 0:
                                        case 1:
                                            o = a;
                                            break;
                                        case 4:
                                            return i.label++, {
                                                value: a[1],
                                                done: !1
                                            };
                                        case 5:
                                            i.label++, r = a[1], a = [0];
                                            continue;
                                        case 7:
                                            a = i.ops.pop(), i.trys.pop();
                                            continue;
                                        default:
                                            if (!(o = i.trys, (o = o.length > 0 && o[o.length - 1]) || 6 !== a[0] && 2 !== a[0])) {
                                                i = 0;
                                                continue
                                            }
                                            if (3 === a[0] && (!o || a[1] > o[0] && a[1] < o[3])) {
                                                i.label = a[1];
                                                break
                                            }
                                            if (6 === a[0] && i.label < o[1]) {
                                                i.label = o[1], o = a;
                                                break
                                            }
                                            if (o && i.label < o[2]) {
                                                i.label = o[2], i.ops.push(a);
                                                break
                                            }
                                            o[2] && i.ops.pop(), i.trys.pop();
                                            continue
                                    }
                                    a = t.call(e, i)
                                } catch (e) {
                                    a = [6, e], r = 0
                                } finally {
                                    n = o = 0
                                }
                                if (5 & a[0]) throw a[1];
                                return {
                                    value: a[0] ? a[1] : void 0,
                                    done: !0
                                }
                            }([a, l])
                        }
                    }
                },
                La = new qt,
                xa = function(e) {
                    var t = e.containerId,
                        n = e.renderInline,
                        r = e.shouldDynamicallyLoadTranslationResources,
                        o = e.onChallengeCompleted,
                        a = e.onChallengeInvalidated,
                        i = e.onModalChallengeAbandoned;
                    return Oa(void 0, void 0, void 0, (function() {
                        var e, l, u;
                        return Da(this, (function(s) {
                            switch (s.label) {
                                case 0:
                                    return null === (e = document.getElementById(t)) ? [3, 3] : ((0, A.unmountComponentAtNode)(e), r ? [4, La.translations.queryAndOverwriteResourcesForNamespace(qo.feature, zo)] : [3, 2]);
                                case 1:
                                    if ((l = s.sent()).isError) return console.error("Re-authentication:", "Got error code " + ((null === (u = l.error) || void 0 === u ? void 0 : u.toString()) || "null") + " loading translations"), [2, !1];
                                    s.label = 2;
                                case 2:
                                    return (0, A.render)(w().createElement(Aa, {
                                        renderInline: n,
                                        requestService: La,
                                        onChallengeCompleted: o,
                                        onChallengeInvalidated: a,
                                        onModalChallengeAbandoned: i
                                    }), e), [2, !0];
                                case 3:
                                    return [2, !1]
                            }
                        }))
                    }))
                },
                Pa = "Security Questions:",
                Ra = {
                    common: ["CommonUI.Messages"],
                    feature: "Feature.SecurityQuestions"
                },
                Ma = "securityQuestionsEvent",
                ka = {
                    answerChoicesFailedToLoad: "answerChoicesFailedToLoad"
                },
                Ua = ["Action.OK"],
                Ha = ["Action.Confirm", "Action.Continue", "Action.PickN", "Action.PleaseTryAgain", "Action.Reload", "Action.SelectAllThatApply", "Description.RegainAccess", "Description.RegainAccessGeneric", "Description.UnknownChoice", "Description.VerifyYourIdentity", "Description.WhichGames", "Description.YourPasswordHasBeenReset", "Header.PleaseConfirmYourIdentity", "Message.Error.AnswerIncorrect", "Message.Error.Default", "Message.Error.MustPickN", "Message.Error.SecurityQuestions.SessionInactive", "Message.Error.SecurityQuestions.UserWasForceReset"],
                Va = function(e) {
                    return new Promise((function(t) {
                        return setTimeout((function() {
                            return t(void 0)
                        }), e)
                    }))
                };
            ! function(e) {
                e[e.UNKNOWN = 0] = "UNKNOWN", e[e.SESSION_EXPIRED = 1] = "SESSION_EXPIRED", e[e.USER_WAS_FORCE_RESET = 2] = "USER_WAS_FORCE_RESET"
            }(Ea || (Ea = {}));
            var Ga, Wa = function(e, t) {
                    switch (t) {
                        case Ea.USER_WAS_FORCE_RESET:
                            return e.Message.Error.SecurityQuestions.UserWasForceReset;
                        case Ea.SESSION_EXPIRED:
                            return e.Message.Error.SecurityQuestions.SessionInactive;
                        default:
                            return e.Message.Error.Default
                    }
                },
                Fa = function(e, t) {
                    switch (t) {
                        case Qe.SESSION_INACTIVE:
                            return e.Message.Error.SecurityQuestions.SessionInactive;
                        default:
                            return e.Message.Error.Default
                    }
                },
                ja = function(e) {
                    switch (e) {
                        case Qe.SESSION_INACTIVE:
                            return Ea.SESSION_EXPIRED;
                        default:
                            return Ea.UNKNOWN
                    }
                };
            ! function(e) {
                e[e.SET_CHALLENGE_COMPLETED = 0] = "SET_CHALLENGE_COMPLETED", e[e.SET_CHALLENGE_INVALIDATED = 1] = "SET_CHALLENGE_INVALIDATED", e[e.HIDE_MODAL_CHALLENGE = 2] = "HIDE_MODAL_CHALLENGE", e[e.SHOW_MODAL_CHALLENGE = 3] = "SHOW_MODAL_CHALLENGE"
            }(Ga || (Ga = {}));
            var Ba, qa, za, Ka = function() {
                    return (Ka = Object.assign || function(e) {
                        for (var t, n = 1, r = arguments.length; n < r; n++)
                            for (var o in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
                        return e
                    }).apply(this, arguments)
                },
                Za = function(e, t) {
                    var n = Ka({}, e);
                    switch (t.type) {
                        case Ga.SET_CHALLENGE_COMPLETED:
                            return n.onChallengeCompletedData = t.onChallengeCompletedData, n.isModalVisible = !1, n;
                        case Ga.SET_CHALLENGE_INVALIDATED:
                            return n.onChallengeInvalidatedData = {
                                errorCode: t.errorCode,
                                errorMessage: Wa(e.resources, t.errorCode)
                            }, n.isModalVisible = !1, n;
                        case Ga.HIDE_MODAL_CHALLENGE:
                            return n.isModalVisible = !1, n;
                        case Ga.SHOW_MODAL_CHALLENGE:
                            return n.isModalVisible = !0, n;
                        default:
                            return e
                    }
                },
                Ya = (0, N.createContext)(null),
                $a = function(e) {
                    var t = e.userId,
                        n = e.sessionId,
                        r = e.renderInline,
                        o = e.eventService,
                        a = e.requestService,
                        i = e.translate,
                        l = e.onChallengeCompleted,
                        u = e.onChallengeInvalidated,
                        s = e.onModalChallengeAbandoned,
                        c = e.children,
                        d = (0, N.useState)((function() {
                            return function(e) {
                                return {
                                    Action: {
                                        Confirm: e("Action.Confirm"),
                                        Continue: e("Action.Continue"),
                                        Ok: e("Action.OK"),
                                        PickN: function(t) {
                                            return e("Action.PickN", {
                                                count: t
                                            })
                                        },
                                        PleaseTryAgain: e("Action.PleaseTryAgain"),
                                        Reload: e("Action.Reload"),
                                        SelectAllThatApply: e("Action.SelectAllThatApply")
                                    },
                                    Description: {
                                        RegainAccessGeneric: function(t) {
                                            return e("Description.RegainAccessGeneric", {
                                                styledLinkText: t
                                            })
                                        },
                                        UnknownChoice: e("Description.UnknownChoice"),
                                        VerifyYourIdentity: e("Description.VerifyYourIdentity"),
                                        WhichGames: e("Description.WhichGames", {
                                            days: 7
                                        }),
                                        YourPasswordHasBeenReset: e("Description.YourPasswordHasBeenReset")
                                    },
                                    Header: {
                                        PleaseConfirmYourIdentity: e("Header.PleaseConfirmYourIdentity")
                                    },
                                    Message: {
                                        Error: {
                                            AnswerIncorrect: e("Message.Error.AnswerIncorrect"),
                                            Default: e("Message.Error.Default"),
                                            MustPickN: e("Message.Error.MustPickN"),
                                            SecurityQuestions: {
                                                SessionInactive: e("Message.Error.SecurityQuestions.SessionInactive"),
                                                UserWasForceReset: e("Message.Error.SecurityQuestions.UserWasForceReset")
                                            }
                                        }
                                    }
                                }
                            }(i)
                        }))[0],
                        p = (0, N.useState)((function() {
                            return {
                                userId: t,
                                sessionId: n,
                                renderInline: r,
                                resources: d,
                                eventService: o,
                                requestService: a,
                                onModalChallengeAbandoned: s,
                                onChallengeCompletedData: null,
                                onChallengeInvalidatedData: null,
                                isModalVisible: !0
                            }
                        }))[0],
                        f = (0, N.useReducer)(Za, p),
                        h = f[0],
                        y = f[1];
                    return (0, N.useEffect)((function() {
                        null !== h.onChallengeCompletedData && null === h.onChallengeInvalidatedData && l(h.onChallengeCompletedData)
                    }), [h.onChallengeCompletedData, h.onChallengeInvalidatedData, l]), (0, N.useEffect)((function() {
                        null !== h.onChallengeInvalidatedData && null === h.onChallengeCompletedData && u(h.onChallengeInvalidatedData)
                    }), [h.onChallengeCompletedData, h.onChallengeInvalidatedData, u]), w().createElement(Ya.Provider, {
                        value: {
                            state: h,
                            dispatch: y
                        }
                    }, c)
                },
                Qa = function() {
                    var e = (0, N.useContext)(Ya);
                    if (null === e) throw new Error("SecurityQuestionsContext was not provided in the current scope");
                    return e
                },
                Ja = function(e) {
                    var t = e.setSelected,
                        n = e.caption,
                        r = e.imageUrl,
                        o = e.selected,
                        a = Qa().state.resources,
                        i = "answer-choice-image" + (o ? " answer-choice-selected" : ""),
                        l = n || a.Description.UnknownChoice,
                        u = function() {
                            return t(!o)
                        };
                    return w().createElement("div", {
                        className: "answer-choice"
                    }, w().createElement("div", {
                        className: i,
                        role: "checkbox",
                        "aria-checked": o,
                        onClick: function(e) {
                            u(), e.currentTarget.blur()
                        },
                        onKeyDown: function(e) {
                            "Enter" === e.key && u()
                        },
                        tabIndex: 0
                    }, null !== r ? w().createElement("img", {
                        src: r,
                        alt: l
                    }) : w().createElement("div", {
                        className: "answer-choice-img-placeholder"
                    }, l)), w().createElement("div", {
                        className: "answer-choice-caption xsmall"
                    }, l))
                },
                Xa = function() {
                    return (Xa = Object.assign || function(e) {
                        for (var t, n = 1, r = arguments.length; n < r; n++)
                            for (var o in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
                        return e
                    }).apply(this, arguments)
                },
                ei = function(e, t, n, r) {
                    return new(n || (n = Promise))((function(o, a) {
                        function i(e) {
                            try {
                                u(r.next(e))
                            } catch (e) {
                                a(e)
                            }
                        }

                        function l(e) {
                            try {
                                u(r.throw(e))
                            } catch (e) {
                                a(e)
                            }
                        }

                        function u(e) {
                            var t;
                            e.done ? o(e.value) : (t = e.value, t instanceof n ? t : new n((function(e) {
                                e(t)
                            }))).then(i, l)
                        }
                        u((r = r.apply(e, t || [])).next())
                    }))
                },
                ti = function(e, t) {
                    var n, r, o, a, i = {
                        label: 0,
                        sent: function() {
                            if (1 & o[0]) throw o[1];
                            return o[1]
                        },
                        trys: [],
                        ops: []
                    };
                    return a = {
                        next: l(0),
                        throw: l(1),
                        return: l(2)
                    }, "function" == typeof Symbol && (a[Symbol.iterator] = function() {
                        return this
                    }), a;

                    function l(a) {
                        return function(l) {
                            return function(a) {
                                if (n) throw new TypeError("Generator is already executing.");
                                for (; i;) try {
                                    if (n = 1, r && (o = 2 & a[0] ? r.return : a[0] ? r.throw || ((o = r.return) && o.call(r), 0) : r.next) && !(o = o.call(r, a[1])).done) return o;
                                    switch (r = 0, o && (a = [2 & a[0], o.value]), a[0]) {
                                        case 0:
                                        case 1:
                                            o = a;
                                            break;
                                        case 4:
                                            return i.label++, {
                                                value: a[1],
                                                done: !1
                                            };
                                        case 5:
                                            i.label++, r = a[1], a = [0];
                                            continue;
                                        case 7:
                                            a = i.ops.pop(), i.trys.pop();
                                            continue;
                                        default:
                                            if (!(o = i.trys, (o = o.length > 0 && o[o.length - 1]) || 6 !== a[0] && 2 !== a[0])) {
                                                i = 0;
                                                continue
                                            }
                                            if (3 === a[0] && (!o || a[1] > o[0] && a[1] < o[3])) {
                                                i.label = a[1];
                                                break
                                            }
                                            if (6 === a[0] && i.label < o[1]) {
                                                i.label = o[1], o = a;
                                                break
                                            }
                                            if (o && i.label < o[2]) {
                                                i.label = o[2], i.ops.push(a);
                                                break
                                            }
                                            o[2] && i.ops.pop(), i.trys.pop();
                                            continue
                                    }
                                    a = t.call(e, i)
                                } catch (e) {
                                    a = [6, e], r = 0
                                } finally {
                                    n = o = 0
                                }
                                if (5 & a[0]) throw a[1];
                                return {
                                    value: a[0] ? a[1] : void 0,
                                    done: !0
                                }
                            }([a, l])
                        }
                    }
                },
                ni = function() {
                    var e, t = Qa(),
                        n = t.state,
                        r = n.userId,
                        o = n.sessionId,
                        a = n.renderInline,
                        i = n.resources,
                        l = n.eventService,
                        u = n.requestService,
                        s = n.onModalChallengeAbandoned,
                        c = n.isModalVisible,
                        d = t.dispatch,
                        p = (0, N.useState)(),
                        f = p[0],
                        h = p[1],
                        y = (0, N.useState)(null),
                        v = y[0],
                        m = y[1],
                        E = (0, N.useState)(null),
                        g = E[0],
                        b = E[1],
                        _ = (0, N.useState)(null),
                        C = _[0],
                        S = _[1],
                        T = (0, N.useState)(!1),
                        I = T[0],
                        A = T[1],
                        O = (0, N.useState)(null),
                        D = O[0],
                        L = O[1],
                        x = (0, N.useState)(!1),
                        P = x[0],
                        R = x[1],
                        M = (0, N.useState)(!1),
                        k = M[0],
                        U = M[1],
                        H = function() {
                            d({
                                type: Ga.HIDE_MODAL_CHALLENGE
                            }), null !== s && s((function() {
                                return d({
                                    type: Ga.SHOW_MODAL_CHALLENGE
                                })
                            }))
                        },
                        V = function(e) {
                            return function(t) {
                                var n;
                                null !== g && void 0 !== g[e] && b(Xa(Xa({}, g), ((n = {})[e] = Xa(Xa({}, g[e]), {
                                    selected: t
                                }), n)))
                            }
                        };
                    e = function() {
                        return ei(void 0, void 0, void 0, (function() {
                            var e, t, n, a, s, c, p, f, y;
                            return ti(this, (function(v) {
                                switch (v.label) {
                                    case 0:
                                        return S(null), [4, u.securityQuestions.getQuestion(r, o)];
                                    case 1:
                                        return (e = v.sent()).isError ? (e.error === Qe.SESSION_INACTIVE ? d({
                                            type: Ga.SET_CHALLENGE_INVALIDATED,
                                            errorCode: ja(e.error)
                                        }) : S(Fa(i, e.error) + " " + i.Action.PleaseTryAgain), [2]) : (h(e.value.questionType), e.value.answerPrompt === Xe.PICK_ALL_CORRECT_CHOICES ? m({
                                            answerPrompt: Xe.PICK_ALL_CORRECT_CHOICES
                                        }) : m({
                                            answerPrompt: Xe.PICK_C_CORRECT_CHOICES,
                                            correctAnswerChoiceCount: e.value.correctAnswerChoiceCount
                                        }), t = {}, n = e.value.answerChoices, a = new Set(n), s = new Set(n), [4, u.games.getDetailsForUniverseIds(n)]);
                                    case 2:
                                        return (c = v.sent()).isError ? (S(function(e, t) {
                                            return e.Message.Error.Default
                                        }(i, c.error) + " " + i.Action.PleaseTryAgain), [2]) : (p = {}, c.value.data.forEach((function(e) {
                                            p[e.id] = e.name, a.delete(e.id.toString())
                                        })), [4, u.thumbnails.getIconsForUniverseIds(n, "256x256", at.PNG, !1)]);
                                    case 3:
                                        return (f = v.sent()).isError ? (S(function(e, t) {
                                            return e.Message.Error.Default
                                        }(i, f.error) + " " + i.Action.PleaseTryAgain), [2]) : (y = {}, f.value.data.forEach((function(e) {
                                            e.state === it.COMPLETED && (y[e.targetId] = e.imageUrl, s.delete(e.targetId.toString()))
                                        })), n.forEach((function(e) {
                                            t[e] = {
                                                caption: p[e] || null,
                                                imageUrl: y[e] || null,
                                                selected: !1
                                            }
                                        })), b(t), (a.size > 0 || s.size > 0) && l.sendAnswerChoicesFailedToLoadEvent(Array.from(a), Array.from(s)), [2])
                                }
                            }))
                        }))
                    }, (0, N.useEffect)((function() {
                        e()
                    }), []);
                    var G = null !== g ? Object.entries(g).filter((function(e) {
                            return e[1].selected
                        })).length : 0,
                        W = null !== v && (v.answerPrompt === Xe.PICK_ALL_CORRECT_CHOICES || v.correctAnswerChoiceCount === G),
                        F = {
                            content: I ? w().createElement("span", {
                                className: "spinner spinner-xs spinner-no-margin"
                            }) : i.Action.Confirm,
                            label: i.Action.Confirm,
                            enabled: !I && W,
                            action: function() {
                                return ei(void 0, void 0, void 0, (function() {
                                    var t, n;
                                    return ti(this, (function(a) {
                                        switch (a.label) {
                                            case 0:
                                                return null === g ? [2] : (t = Object.entries(g).filter((function(e) {
                                                    return e[1].selected
                                                })).map((function(e) {
                                                    return e[0]
                                                })), A(!0), [4, u.securityQuestions.answerQuestion(r, t, o)]);
                                            case 1:
                                                return (n = a.sent()).isError ? n.error === Qe.SESSION_INACTIVE ? (d({
                                                    type: Ga.SET_CHALLENGE_INVALIDATED,
                                                    errorCode: ja(n.error)
                                                }), [2]) : (L(Fa(i, n.error) + " " + i.Action.PleaseTryAgain), A(!1), [2]) : (L(null), n.value.answerCorrect ? (d({
                                                    type: Ga.SET_CHALLENGE_COMPLETED,
                                                    onChallengeCompletedData: {
                                                        redemptionToken: n.value.redemptionToken
                                                    }
                                                }), [3, 6]) : [3, 2]);
                                            case 2:
                                                return n.value.shouldRequestNewQuestion ? (h(null), m(null), b(null), [4, Va(250)]) : [3, 5];
                                            case 3:
                                                return a.sent(), R(!0), [4, e()];
                                            case 4:
                                                return a.sent(), A(!1), [3, 6];
                                            case 5:
                                                n.value.userWasForceReset ? U(!0) : d({
                                                    type: Ga.SET_CHALLENGE_INVALIDATED,
                                                    errorCode: Ea.UNKNOWN
                                                }), a.label = 6;
                                            case 6:
                                                return [2]
                                        }
                                    }))
                                }))
                            }
                        },
                        j = {
                            content: i.Action.Reload,
                            label: i.Action.Reload,
                            enabled: null !== C,
                            action: e
                        },
                        B = {
                            content: i.Action.Continue,
                            label: i.Action.Continue,
                            enabled: !0,
                            action: function() {
                                window.location.href = "/login/securityNotification"
                            }
                        },
                        q = function() {
                            var e = a ? _r : gr.Body,
                                t = a ? Cr : Sr,
                                n = a ? "inline-challenge-lock-icon" : "modal-lock-icon",
                                r = a ? "inline-challenge-margin-bottom-sm" : "modal-margin-bottom-sm",
                                o = a ? "inline-challenge-margin-bottom" : "modal-margin-bottom",
                                l = a ? "inline-challenge-margin-bottom-xlarge" : "modal-margin-bottom-xlarge";
                            if (k) return w().createElement(w().Fragment, null, w().createElement(e, null, w().createElement("div", {
                                className: n
                            }), w().createElement("p", {
                                className: o + " font-bold"
                            }, i.Description.YourPasswordHasBeenReset), w().createElement("p", {
                                dangerouslySetInnerHTML: {
                                    __html: i.Description.RegainAccessGeneric('<span class="font-bold">' + i.Action.Continue + "</span>")
                                }
                            })), w().createElement(t, {
                                positiveButton: B,
                                negativeButton: null
                            }));
                            if (null !== C) return w().createElement(w().Fragment, null, w().createElement(e, null, w().createElement("p", null, C)), w().createElement(t, {
                                positiveButton: j,
                                negativeButton: null
                            }));
                            if (null === f || null === v || null === g) return w().createElement(e, null, w().createElement("span", {
                                className: "spinner spinner-default spinner-no-margin modal-margin-bottom-large"
                            }));
                            var u = Object.keys(g).length % 3 == 1;
                            return w().createElement(w().Fragment, null, w().createElement(e, null, w().createElement("div", {
                                className: n
                            }), w().createElement("p", {
                                className: r
                            }, i.Description.WhichGames), w().createElement("p", {
                                className: l + " font-bold"
                            }, v.answerPrompt === Xe.PICK_ALL_CORRECT_CHOICES ? i.Action.SelectAllThatApply : i.Action.PickN(v.correctAnswerChoiceCount)), w().createElement("p", {
                                className: (P ? r : l) + " small"
                            }, i.Description.VerifyYourIdentity), P && w().createElement("p", {
                                className: l + " text-error"
                            }, i.Message.Error.AnswerIncorrect, " ", i.Action.PleaseTryAgain), w().createElement("div", {
                                className: l + " answer-choice-area"
                            }, Object.keys(g).map((function(e, t) {
                                return w().createElement(w().Fragment, {
                                    key: e
                                }, w().createElement(Ja, Xa({
                                    key: e,
                                    setSelected: V(e)
                                }, g[e])), u && t === Object.keys(g).length - 3 ? w().createElement("br", null) : null)
                            }))), w().createElement("p", {
                                className: "text-error xsmall"
                            }, D)), w().createElement(t, {
                                positiveButton: F,
                                negativeButton: null
                            }))
                        };
                    return a ? w().createElement(br, {
                        titleText: i.Header.PleaseConfirmYourIdentity
                    }, q()) : w().createElement(gr, {
                        className: "modal-modern",
                        show: c,
                        onHide: H,
                        backdrop: "static"
                    }, w().createElement(zr, {
                        headerText: i.Header.PleaseConfirmYourIdentity,
                        buttonType: k ? xr.HIDDEN : xr.CLOSE,
                        buttonAction: H,
                        buttonEnabled: !I,
                        headerInfo: null
                    }), q())
                },
                ri = (0, zt.withTranslations)((function(e) {
                    var t = e.userId,
                        n = e.sessionId,
                        r = e.renderInline,
                        o = e.eventService,
                        a = e.requestService,
                        i = e.translate,
                        l = e.onChallengeCompleted,
                        u = e.onChallengeInvalidated,
                        s = e.onModalChallengeAbandoned;
                    return w().createElement($a, {
                        userId: t,
                        sessionId: n,
                        renderInline: r,
                        eventService: o,
                        requestService: a,
                        translate: i,
                        onChallengeCompleted: l,
                        onChallengeInvalidated: u,
                        onModalChallengeAbandoned: s
                    }, w().createElement(ni, null))
                }), Ra),
                oi = function() {
                    function e(e) {
                        this.sessionId = e
                    }
                    return e.prototype.sendAnswerChoicesFailedToLoadEvent = function(e, t) {
                        I().EventStream.SendEventWithTarget(Ma, ka.answerChoicesFailedToLoad, {
                            sessionId: this.sessionId,
                            answerChoicesWithNoCaption: JSON.stringify(e),
                            answerChoicesWithNoIcon: JSON.stringify(t)
                        }, I().EventStream.TargetTypes.WWW)
                    }, e
                }(),
                ai = function(e, t, n, r) {
                    return new(n || (n = Promise))((function(o, a) {
                        function i(e) {
                            try {
                                u(r.next(e))
                            } catch (e) {
                                a(e)
                            }
                        }

                        function l(e) {
                            try {
                                u(r.throw(e))
                            } catch (e) {
                                a(e)
                            }
                        }

                        function u(e) {
                            var t;
                            e.done ? o(e.value) : (t = e.value, t instanceof n ? t : new n((function(e) {
                                e(t)
                            }))).then(i, l)
                        }
                        u((r = r.apply(e, t || [])).next())
                    }))
                },
                ii = function(e, t) {
                    var n, r, o, a, i = {
                        label: 0,
                        sent: function() {
                            if (1 & o[0]) throw o[1];
                            return o[1]
                        },
                        trys: [],
                        ops: []
                    };
                    return a = {
                        next: l(0),
                        throw: l(1),
                        return: l(2)
                    }, "function" == typeof Symbol && (a[Symbol.iterator] = function() {
                        return this
                    }), a;

                    function l(a) {
                        return function(l) {
                            return function(a) {
                                if (n) throw new TypeError("Generator is already executing.");
                                for (; i;) try {
                                    if (n = 1, r && (o = 2 & a[0] ? r.return : a[0] ? r.throw || ((o = r.return) && o.call(r), 0) : r.next) && !(o = o.call(r, a[1])).done) return o;
                                    switch (r = 0, o && (a = [2 & a[0], o.value]), a[0]) {
                                        case 0:
                                        case 1:
                                            o = a;
                                            break;
                                        case 4:
                                            return i.label++, {
                                                value: a[1],
                                                done: !1
                                            };
                                        case 5:
                                            i.label++, r = a[1], a = [0];
                                            continue;
                                        case 7:
                                            a = i.ops.pop(), i.trys.pop();
                                            continue;
                                        default:
                                            if (!(o = i.trys, (o = o.length > 0 && o[o.length - 1]) || 6 !== a[0] && 2 !== a[0])) {
                                                i = 0;
                                                continue
                                            }
                                            if (3 === a[0] && (!o || a[1] > o[0] && a[1] < o[3])) {
                                                i.label = a[1];
                                                break
                                            }
                                            if (6 === a[0] && i.label < o[1]) {
                                                i.label = o[1], o = a;
                                                break
                                            }
                                            if (o && i.label < o[2]) {
                                                i.label = o[2], i.ops.push(a);
                                                break
                                            }
                                            o[2] && i.ops.pop(), i.trys.pop();
                                            continue
                                    }
                                    a = t.call(e, i)
                                } catch (e) {
                                    a = [6, e], r = 0
                                } finally {
                                    n = o = 0
                                }
                                if (5 & a[0]) throw a[1];
                                return {
                                    value: a[0] ? a[1] : void 0,
                                    done: !0
                                }
                            }([a, l])
                        }
                    }
                },
                li = new qt,
                ui = function(e) {
                    var t = e.containerId,
                        n = e.userId,
                        r = e.sessionId,
                        o = e.renderInline,
                        a = e.shouldDynamicallyLoadTranslationResources,
                        i = e.onChallengeCompleted,
                        l = e.onChallengeInvalidated,
                        u = e.onModalChallengeAbandoned;
                    return ai(void 0, void 0, void 0, (function() {
                        var e, s, c, d, p;
                        return ii(this, (function(f) {
                            switch (f.label) {
                                case 0:
                                    return n = n.toString(), null === (e = document.getElementById(t)) ? [3, 4] : ((0, A.unmountComponentAtNode)(e), a ? [4, li.translations.queryAndOverwriteResourcesForNamespace(Ra.feature, Ha)] : [3, 3]);
                                case 1:
                                    return (s = f.sent()).isError ? (console.error(Pa, "Got error code " + ((null === (d = s.error) || void 0 === d ? void 0 : d.toString()) || "null") + " loading translations"), [2, !1]) : [4, li.translations.queryAndOverwriteResourcesForNamespace(Ra.common[0], Ua)];
                                case 2:
                                    if ((s = f.sent()).isError) return console.error(Pa, "Got error code " + ((null === (p = s.error) || void 0 === p ? void 0 : p.toString()) || "null") + " loading translations"), [2, !1];
                                    f.label = 3;
                                case 3:
                                    return c = new oi(r), (0, A.render)(w().createElement(ri, {
                                        userId: n,
                                        sessionId: r,
                                        renderInline: o,
                                        eventService: c,
                                        requestService: li,
                                        onChallengeCompleted: i,
                                        onChallengeInvalidated: l,
                                        onModalChallengeAbandoned: u
                                    }), e), [2, !0];
                                case 4:
                                    return [2, !1]
                            }
                        }))
                    }))
                },
                si = ReactRouterDOM,
                ci = {
                    common: [],
                    feature: "Authentication.TwoStepVerification"
                },
                di = "accountSecurityChallengeTwoStepVerificationEvent",
                pi = {
                    challengeInitialized: "challengeInitialized",
                    userConfigurationLoaded: "userConfigurationLoaded",
                    challengeInvalidated: "challengeInvalidated",
                    challengeAbandoned: "challengeAbandoned",
                    emailResendRequested: "emailResendRequested",
                    smsResendRequested: "smsResendRequested",
                    mediaTypeChanged: "mediaTypeChanged",
                    codeSubmitted: "codeSubmitted",
                    codeVerificationFailed: "codeVerificationFailed",
                    codeVerified: "codeVerified"
                },
                fi = {
                    initialized: "Initialized",
                    verified: "Verified",
                    invalidated: "Invalidated",
                    abandoned: "Abandoned"
                },
                hi = {
                    solveTime: "SolveTime"
                },
                yi = ["Action.ChangeMediaType", "Action.Reload", "Action.Resend", "Action.Verify", "Label.AuthenticatorMediaType", "Label.ChooseAlternateMediaType", "Label.CharacterCodeInputPlaceholderText", "Label.CodeInputPlaceholderText", "Label.EmailMediaType", "Label.SecurityKeyDirections", "Label.SecurityKeyMediaType", "Label.SmsMediaType", "Label.EnterAuthenticatorCode", "Label.EnterEmailCode", "Label.EnterRecoveryCode", "Label.EnterTextCode", "Label.NeedHelpContactSupport", "Label.RecoveryCodeMediaType", "Label.RobloxSupport", "Label.TrustThisDevice", "Label.TwoStepVerification", "Label.VerifyWithSecurityKey", "Response.CodeSent", "Response.DefaultError", "Response.FeatureNotAvailable", "Response.InvalidCode", "Response.SessionExpired", "Response.SystemErrorSwitchingToEmail", "Response.TooManyAttempts", "Response.VerificationError"],
                vi = ReactRouter;
            ! function(e) {
                e.Unknown = "Unknown", e.Login = "Login", e.RobuxSpend = "RobuxSpend", e.ItemTrade = "ItemTrade", e.Resale = "Resale", e.PasswordReset = "PasswordReset", e.RevertAccount = "RevertAccount", e.Generic = "Generic"
            }(Ba || (Ba = {})),
            function(e) {
                e.Email = "Email", e.Authenticator = "Authenticator", e.RecoveryCode = "RecoveryCode", e.SMS = "SMS", e.SecurityKey = "SecurityKey"
            }(qa || (qa = {})),
            function(e) {
                e[e.UNKNOWN = 0] = "UNKNOWN", e[e.SESSION_EXPIRED = 1] = "SESSION_EXPIRED"
            }(za || (za = {}));
            var mi, Ei = function(e, t) {
                    switch (t) {
                        case za.SESSION_EXPIRED:
                            return e.Response.SessionExpired;
                        default:
                            return e.Response.DefaultError
                    }
                },
                gi = function(e, t) {
                    switch (t) {
                        case bt.FEATURE_DISABLED:
                            return e.Response.FeatureNotAvailable;
                        case bt.INVALID_CODE:
                            return e.Response.InvalidCode;
                        case bt.TOO_MANY_REQUESTS:
                            return e.Response.TooManyAttempts;
                        case bt.INVALID_CHALLENGE_ID:
                            return e.Response.SessionExpired;
                        default:
                            return e.Response.DefaultError
                    }
                },
                bi = function(e) {
                    switch (e) {
                        case bt.INVALID_CHALLENGE_ID:
                            return za.SESSION_EXPIRED;
                        default:
                            return za.UNKNOWN
                    }
                },
                _i = function() {
                    var e = (0, vi.useLocation)(),
                        t = (0, vi.matchPath)(e.pathname, {
                            path: "/:activeMediaType",
                            exact: !0,
                            strict: !1
                        });
                    return (null == t ? void 0 : t.params) ? null == t ? void 0 : t.params.activeMediaType : null
                },
                Ci = function(e) {
                    return "/" + (e || "")
                };
            ! function(e) {
                e[e.SET_METADATA = 0] = "SET_METADATA", e[e.SET_USER_CONFIGURATION = 1] = "SET_USER_CONFIGURATION", e[e.SET_CHALLENGE_COMPLETED = 2] = "SET_CHALLENGE_COMPLETED", e[e.SET_CHALLENGE_INVALIDATED = 3] = "SET_CHALLENGE_INVALIDATED", e[e.HIDE_MODAL_CHALLENGE = 4] = "HIDE_MODAL_CHALLENGE", e[e.SHOW_MODAL_CHALLENGE = 5] = "SHOW_MODAL_CHALLENGE"
            }(mi || (mi = {}));
            var Si, Ti = function() {
                    return (Ti = Object.assign || function(e) {
                        for (var t, n = 1, r = arguments.length; n < r; n++)
                            for (var o in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
                        return e
                    }).apply(this, arguments)
                },
                Ii = function(e, t) {
                    var n = Ti({}, e);
                    switch (t.type) {
                        case mi.SET_METADATA:
                            return n.metadata = t.metadata, n;
                        case mi.SET_USER_CONFIGURATION:
                            return n.userConfiguration = t.userConfiguration, n.enabledMediaTypes = t.enabledMediaTypes, n;
                        case mi.SET_CHALLENGE_COMPLETED:
                            return n.onChallengeCompletedData = t.onChallengeCompletedData, n.isModalVisible = !1, n;
                        case mi.SET_CHALLENGE_INVALIDATED:
                            return n.onChallengeInvalidatedData = {
                                errorCode: t.errorCode,
                                errorMessage: Ei(e.resources, t.errorCode)
                            }, n.isModalVisible = !1, n;
                        case mi.HIDE_MODAL_CHALLENGE:
                            return n.isModalVisible = !1, n;
                        case mi.SHOW_MODAL_CHALLENGE:
                            return n.isModalVisible = !0, n;
                        default:
                            return e
                    }
                },
                Ni = (0, N.createContext)(null),
                wi = function(e) {
                    var t = e.userId,
                        n = e.challengeId,
                        r = e.actionType,
                        o = e.renderInline,
                        a = e.shouldShowRememberDeviceCheckbox,
                        i = e.eventService,
                        l = e.metricsService,
                        u = e.requestService,
                        s = e.translate,
                        c = e.onChallengeCompleted,
                        d = e.onChallengeInvalidated,
                        p = e.onModalChallengeAbandoned,
                        f = e.children,
                        h = (0, N.useState)((function() {
                            return function(e) {
                                return {
                                    Action: {
                                        ChangeMediaType: e("Action.ChangeMediaType"),
                                        Reload: e("Action.Reload"),
                                        Resend: e("Action.Resend"),
                                        Verify: e("Action.Verify")
                                    },
                                    Label: {
                                        AuthenticatorMediaType: e("Label.AuthenticatorMediaType"),
                                        ChooseAlternateMediaType: e("Label.ChooseAlternateMediaType"),
                                        CharacterCodeInputPlaceholderText: function(t) {
                                            return e("Label.CharacterCodeInputPlaceholderText", {
                                                codeLength: t
                                            })
                                        },
                                        CodeInputPlaceholderText: function(t) {
                                            return e("Label.CodeInputPlaceholderText", {
                                                codeLength: t
                                            })
                                        },
                                        EmailMediaType: e("Label.EmailMediaType"),
                                        EnterAuthenticatorCode: e("Label.EnterAuthenticatorCode"),
                                        EnterEmailCode: e("Label.EnterEmailCode"),
                                        EnterRecoveryCode: e("Label.EnterRecoveryCode"),
                                        EnterTextCode: e("Label.EnterTextCode"),
                                        NeedHelpContactSupport: function(t) {
                                            return e("Label.NeedHelpContactSupport", {
                                                supportLink: t
                                            })
                                        },
                                        RecoveryCodeMediaType: e("Label.RecoveryCodeMediaType"),
                                        RobloxSupport: e("Label.RobloxSupport"),
                                        SecurityKeyDirections: e("Label.SecurityKeyDirections"),
                                        SecurityKeyMediaType: e("Label.SecurityKeyMediaType"),
                                        SmsMediaType: e("Label.SmsMediaType"),
                                        TrustThisDevice: e("Label.TrustThisDevice"),
                                        TwoStepVerification: e("Label.TwoStepVerification"),
                                        VerifyWithSecurityKey: e("Label.VerifyWithSecurityKey")
                                    },
                                    Response: {
                                        CodeSent: e("Response.CodeSent"),
                                        DefaultError: e("Response.DefaultError"),
                                        FeatureNotAvailable: e("Response.FeatureNotAvailable"),
                                        InvalidCode: e("Response.InvalidCode"),
                                        SessionExpired: e("Response.SessionExpired"),
                                        SystemErrorSwitchingToEmail: e("Response.SystemErrorSwitchingToEmail"),
                                        TooManyAttempts: e("Response.TooManyAttempts"),
                                        VerificationError: e("Response.VerificationError")
                                    }
                                }
                            }(s)
                        }))[0],
                        y = (0, N.useState)((function() {
                            return {
                                userId: t,
                                challengeId: n,
                                actionType: r,
                                renderInline: o,
                                shouldShowRememberDeviceCheckbox: a,
                                resources: h,
                                eventService: i,
                                metricsService: l,
                                requestService: u,
                                onModalChallengeAbandoned: p,
                                metadata: null,
                                userConfiguration: null,
                                enabledMediaTypes: [],
                                onChallengeCompletedData: null,
                                onChallengeInvalidatedData: null,
                                isModalVisible: !0
                            }
                        }))[0],
                        v = _i(),
                        m = (0, N.useReducer)(Ii, y),
                        E = m[0],
                        g = m[1];
                    return (0, N.useEffect)((function() {
                        if (null !== E.onChallengeCompletedData && null === E.onChallengeInvalidatedData) {
                            var e = E.onChallengeCompletedData;
                            setTimeout((function() {
                                return c(e)
                            }), 100)
                        }
                    }), [E.onChallengeCompletedData, E.onChallengeInvalidatedData, c]), (0, N.useEffect)((function() {
                        if (null !== E.onChallengeInvalidatedData && null === E.onChallengeCompletedData) {
                            i.sendChallengeInvalidatedEvent(v), l.fireInvalidatedEvent();
                            var e = E.onChallengeInvalidatedData;
                            setTimeout((function() {
                                return d(e)
                            }), 100)
                        }
                    }), [E.onChallengeCompletedData, E.onChallengeInvalidatedData, d, i, l, v]), (0, N.useEffect)((function() {
                        null !== v && i.sendMediaTypeChangedEvent(v)
                    }), [i, v]), w().createElement(Ni.Provider, {
                        value: {
                            state: E,
                            dispatch: g
                        }
                    }, f)
                },
                Ai = function() {
                    var e = (0, N.useContext)(Ni);
                    if (null === e) throw new Error("TwoStepVerificationContext was not provided in the current scope");
                    return e
                },
                Oi = function(e, t, n, r) {
                    return new(n || (n = Promise))((function(o, a) {
                        function i(e) {
                            try {
                                u(r.next(e))
                            } catch (e) {
                                a(e)
                            }
                        }

                        function l(e) {
                            try {
                                u(r.throw(e))
                            } catch (e) {
                                a(e)
                            }
                        }

                        function u(e) {
                            var t;
                            e.done ? o(e.value) : (t = e.value, t instanceof n ? t : new n((function(e) {
                                e(t)
                            }))).then(i, l)
                        }
                        u((r = r.apply(e, t || [])).next())
                    }))
                },
                Di = function(e, t) {
                    var n, r, o, a, i = {
                        label: 0,
                        sent: function() {
                            if (1 & o[0]) throw o[1];
                            return o[1]
                        },
                        trys: [],
                        ops: []
                    };
                    return a = {
                        next: l(0),
                        throw: l(1),
                        return: l(2)
                    }, "function" == typeof Symbol && (a[Symbol.iterator] = function() {
                        return this
                    }), a;

                    function l(a) {
                        return function(l) {
                            return function(a) {
                                if (n) throw new TypeError("Generator is already executing.");
                                for (; i;) try {
                                    if (n = 1, r && (o = 2 & a[0] ? r.return : a[0] ? r.throw || ((o = r.return) && o.call(r), 0) : r.next) && !(o = o.call(r, a[1])).done) return o;
                                    switch (r = 0, o && (a = [2 & a[0], o.value]), a[0]) {
                                        case 0:
                                        case 1:
                                            o = a;
                                            break;
                                        case 4:
                                            return i.label++, {
                                                value: a[1],
                                                done: !1
                                            };
                                        case 5:
                                            i.label++, r = a[1], a = [0];
                                            continue;
                                        case 7:
                                            a = i.ops.pop(), i.trys.pop();
                                            continue;
                                        default:
                                            if (!(o = i.trys, (o = o.length > 0 && o[o.length - 1]) || 6 !== a[0] && 2 !== a[0])) {
                                                i = 0;
                                                continue
                                            }
                                            if (3 === a[0] && (!o || a[1] > o[0] && a[1] < o[3])) {
                                                i.label = a[1];
                                                break
                                            }
                                            if (6 === a[0] && i.label < o[1]) {
                                                i.label = o[1], o = a;
                                                break
                                            }
                                            if (o && i.label < o[2]) {
                                                i.label = o[2], i.ops.push(a);
                                                break
                                            }
                                            o[2] && i.ops.pop(), i.trys.pop();
                                            continue
                                    }
                                    a = t.call(e, i)
                                } catch (e) {
                                    a = [6, e], r = 0
                                } finally {
                                    n = o = 0
                                }
                                if (5 & a[0]) throw a[1];
                                return {
                                    value: a[0] ? a[1] : void 0,
                                    done: !0
                                }
                            }([a, l])
                        }
                    }
                },
                Li = function(e) {
                    var t = e.hasSentEmailCode,
                        n = e.setHasSentEmailCode,
                        r = e.hasSentSmsCode,
                        o = e.setHasSentSmsCode,
                        a = e.requestInFlight,
                        i = e.setRequestInFlight,
                        l = e.children,
                        u = Ai(),
                        s = u.state,
                        c = s.userId,
                        d = s.challengeId,
                        p = s.actionType,
                        f = s.renderInline,
                        h = s.resources,
                        y = s.requestService,
                        v = s.enabledMediaTypes,
                        m = u.dispatch,
                        E = (0, vi.useHistory)(),
                        g = (0, N.useState)(null),
                        b = g[0],
                        _ = g[1],
                        C = function(e) {
                            switch (e) {
                                case qa.Authenticator:
                                    return "icon-menu-mobile";
                                case qa.Email:
                                    return "icon-menu-email";
                                case qa.RecoveryCode:
                                    return "icon-menu-recover";
                                case qa.SMS:
                                    return "icon-menu-mobile";
                                case qa.SecurityKey:
                                    return "icon-menu-usb";
                                default:
                                    return "icon-brokenpage"
                            }
                        },
                        S = function(e, l) {
                            var u = function(e) {
                                switch (e) {
                                    case qa.Authenticator:
                                        return h.Label.AuthenticatorMediaType;
                                    case qa.Email:
                                        return h.Label.EmailMediaType;
                                    case qa.RecoveryCode:
                                        return h.Label.RecoveryCodeMediaType;
                                    case qa.SMS:
                                        return h.Label.SmsMediaType;
                                    case qa.SecurityKey:
                                        return h.Label.SecurityKeyMediaType;
                                    default:
                                        return null
                                }
                            }(e);
                            return u ? w().createElement("tr", {
                                key: l,
                                onClick: a ? void 0 : function() {
                                    return function(e) {
                                        return Oi(void 0, void 0, void 0, (function() {
                                            var l;
                                            return Di(this, (function(u) {
                                                switch (u.label) {
                                                    case 0:
                                                        return a ? [2] : e !== qa.Email || t ? [3, 2] : (i(!0), [4, y.twoStepVerification.sendEmailCode(c, {
                                                            challengeId: d,
                                                            actionType: p
                                                        })]);
                                                    case 1:
                                                        if (l = u.sent(), i(!1), l.isError) return l.error === bt.INVALID_USER_ID || l.error === bt.INVALID_CHALLENGE_ID ? m({
                                                            type: mi.SET_CHALLENGE_INVALIDATED,
                                                            errorCode: bi(l.error)
                                                        }) : _(gi(h, l.error)), [2];
                                                        n(!0), u.label = 2;
                                                    case 2:
                                                        return e !== qa.SMS || r ? [3, 4] : (i(!0), [4, y.twoStepVerification.sendSmsCode(c, {
                                                            challengeId: d,
                                                            actionType: p
                                                        })]);
                                                    case 3:
                                                        if (l = u.sent(), i(!1), l.isError) return l.error === bt.INVALID_USER_ID || l.error === bt.INVALID_CHALLENGE_ID ? m({
                                                            type: mi.SET_CHALLENGE_INVALIDATED,
                                                            errorCode: bi(l.error)
                                                        }) : _(gi(h, l.error)), [2];
                                                        o(!0), u.label = 4;
                                                    case 4:
                                                        return E.push(Ci(e)), [2]
                                                }
                                            }))
                                        }))
                                    }(e)
                                },
                                className: a ? "media-type-row disabled" : "media-type-row"
                            }, w().createElement("td", null, w().createElement("span", {
                                className: C(e)
                            })), w().createElement("td", {
                                className: "media-type-label"
                            }, u), w().createElement("td", {
                                className: "media-type-selector"
                            }, w().createElement("span", {
                                className: "icon-next"
                            }), w().createElement("div", {
                                className: "icon-placeholder"
                            }))) : null
                        },
                        T = f ? _r : gr.Body,
                        I = f ? "inline-challenge-lock-icon" : "modal-lock-icon",
                        A = f ? "inline-challenge-margin-bottom-xlarge" : "modal-margin-bottom-xlarge",
                        O = f ? "" : "modal-margin-bottom-large",
                        D = f ? "inline-challenge-margin-top-large" : "modal-margin-bottom-large";
                    return w().createElement(T, null, w().createElement("div", {
                        className: I
                    }), w().createElement("p", {
                        className: A
                    }, h.Label.ChooseAlternateMediaType), w().createElement("table", {
                        className: "table table-striped media-type-list " + O
                    }, w().createElement("tbody", null, v.map((function(e, t) {
                        return S(e, t)
                    })))), b ? w().createElement("p", {
                        className: "text-error xsmall " + D
                    }, b) : null, l)
                },
                xi = function() {
                    var e = Ai().state.resources,
                        t = e.Label.NeedHelpContactSupport('<a class="text-name text-footer contact" href="https://www.roblox.com/info/2sv" target="_blank">' + e.Label.RobloxSupport + "</a>");
                    return w().createElement("span", {
                        className: "text-footer",
                        dangerouslySetInnerHTML: {
                            __html: t
                        }
                    })
                },
                Pi = function(e) {
                    var t = e.requestInFlight,
                        n = e.className,
                        r = Ai().state,
                        o = r.renderInline,
                        a = r.resources,
                        i = (0, vi.useHistory)(),
                        l = o ? "inline-challenge-body-button-link" : "modal-body-button-link";
                    return w().createElement("p", {
                        className: n
                    }, w().createElement("button", {
                        type: "button",
                        className: l + " small",
                        onClick: function() {
                            i.push(Ci(null))
                        },
                        disabled: t
                    }, a.Action.ChangeMediaType))
                },
                Ri = function(e) {
                    var t = e.disabled,
                        n = e.rememberDevice,
                        r = e.setRememberDevice,
                        o = e.className,
                        a = Ai().state.resources;
                    return w().createElement("p", {
                        className: o
                    }, w().createElement("input", {
                        id: "remember-device",
                        type: "checkbox",
                        onChange: function(e) {
                            r(e.target.checked)
                        },
                        checked: n,
                        disabled: t,
                        tabIndex: 0
                    }), " ", w().createElement("label", {
                        htmlFor: "remember-device"
                    }, a.Label.TrustThisDevice))
                },
                Mi = /^[0-9]*$/,
                ki = /^[A-Za-z0-9]*$/,
                Ui = function(e, t, n, r) {
                    return new(n || (n = Promise))((function(o, a) {
                        function i(e) {
                            try {
                                u(r.next(e))
                            } catch (e) {
                                a(e)
                            }
                        }

                        function l(e) {
                            try {
                                u(r.throw(e))
                            } catch (e) {
                                a(e)
                            }
                        }

                        function u(e) {
                            var t;
                            e.done ? o(e.value) : (t = e.value, t instanceof n ? t : new n((function(e) {
                                e(t)
                            }))).then(i, l)
                        }
                        u((r = r.apply(e, t || [])).next())
                    }))
                },
                Hi = function(e, t) {
                    var n, r, o, a, i = {
                        label: 0,
                        sent: function() {
                            if (1 & o[0]) throw o[1];
                            return o[1]
                        },
                        trys: [],
                        ops: []
                    };
                    return a = {
                        next: l(0),
                        throw: l(1),
                        return: l(2)
                    }, "function" == typeof Symbol && (a[Symbol.iterator] = function() {
                        return this
                    }), a;

                    function l(a) {
                        return function(l) {
                            return function(a) {
                                if (n) throw new TypeError("Generator is already executing.");
                                for (; i;) try {
                                    if (n = 1, r && (o = 2 & a[0] ? r.return : a[0] ? r.throw || ((o = r.return) && o.call(r), 0) : r.next) && !(o = o.call(r, a[1])).done) return o;
                                    switch (r = 0, o && (a = [2 & a[0], o.value]), a[0]) {
                                        case 0:
                                        case 1:
                                            o = a;
                                            break;
                                        case 4:
                                            return i.label++, {
                                                value: a[1],
                                                done: !1
                                            };
                                        case 5:
                                            i.label++, r = a[1], a = [0];
                                            continue;
                                        case 7:
                                            a = i.ops.pop(), i.trys.pop();
                                            continue;
                                        default:
                                            if (!(o = i.trys, (o = o.length > 0 && o[o.length - 1]) || 6 !== a[0] && 2 !== a[0])) {
                                                i = 0;
                                                continue
                                            }
                                            if (3 === a[0] && (!o || a[1] > o[0] && a[1] < o[3])) {
                                                i.label = a[1];
                                                break
                                            }
                                            if (6 === a[0] && i.label < o[1]) {
                                                i.label = o[1], o = a;
                                                break
                                            }
                                            if (o && i.label < o[2]) {
                                                i.label = o[2], i.ops.push(a);
                                                break
                                            }
                                            o[2] && i.ops.pop(), i.trys.pop();
                                            continue
                                    }
                                    a = t.call(e, i)
                                } catch (e) {
                                    a = [6, e], r = 0
                                } finally {
                                    n = o = 0
                                }
                                if (5 & a[0]) throw a[1];
                                return {
                                    value: a[0] ? a[1] : void 0,
                                    done: !0
                                }
                            }([a, l])
                        }
                    }
                },
                Vi = function(e) {
                    var t = e.requestInFlight,
                        n = e.setRequestInFlight,
                        r = e.children,
                        o = Ai(),
                        a = o.state,
                        i = a.userId,
                        l = a.challengeId,
                        u = a.actionType,
                        s = a.renderInline,
                        c = a.shouldShowRememberDeviceCheckbox,
                        d = a.metadata,
                        p = a.resources,
                        f = a.eventService,
                        h = a.metricsService,
                        y = a.requestService,
                        v = o.dispatch,
                        m = _i(),
                        E = (0, N.useState)(""),
                        g = E[0],
                        b = E[1],
                        _ = (0, N.useState)(null),
                        C = _[0],
                        S = _[1],
                        T = (0, N.useState)(null),
                        I = T[0],
                        A = T[1],
                        O = (0, N.useState)(!1),
                        D = O[0],
                        L = O[1],
                        x = function() {
                            return Ui(void 0, void 0, void 0, (function() {
                                var e;
                                return Hi(this, (function(t) {
                                    switch (t.label) {
                                        case 0:
                                            return n(!0), A(null), f.sendCodeSubmittedEvent(m), [4, y.twoStepVerification.verifyAuthenticatorCode(i, {
                                                challengeId: l,
                                                actionType: u,
                                                code: g
                                            })];
                                        case 1:
                                            return (e = t.sent()).isError ? (f.sendCodeVerificationFailedEvent(m, bt[e.error || bt.UNKNOWN]), e.error === bt.INVALID_USER_ID || e.error === bt.INVALID_CHALLENGE_ID ? (v({
                                                type: mi.SET_CHALLENGE_INVALIDATED,
                                                errorCode: bi(e.error)
                                            }), [2]) : (n(!1), A(gi(p, e.error)), [2])) : (f.sendCodeVerifiedEvent(m), h.fireVerifiedEvent(m), v({
                                                type: mi.SET_CHALLENGE_COMPLETED,
                                                onChallengeCompletedData: {
                                                    verificationToken: e.value.verificationToken,
                                                    rememberDevice: D
                                                }
                                            }), [2])
                                    }
                                }))
                            }))
                        },
                        P = null === C && g.length === (null == d ? void 0 : d.authenticatorCodeLength),
                        R = {
                            content: t ? w().createElement("span", {
                                className: "spinner spinner-xs spinner-no-margin"
                            }) : p.Action.Verify,
                            label: p.Action.Verify,
                            enabled: !t && P,
                            action: x
                        },
                        M = s ? _r : gr.Body,
                        k = s ? Cr : Sr,
                        U = s ? "inline-challenge-lock-icon" : "modal-lock-icon",
                        H = s ? "inline-challenge-margin-bottom-xlarge" : "modal-margin-bottom-xlarge";
                    return d && w().createElement(w().Fragment, null, w().createElement(M, null, w().createElement("div", {
                        className: U
                    }), w().createElement("p", {
                        className: H
                    }, p.Label.EnterAuthenticatorCode), w().createElement(va, {
                        id: "two-step-verification-code-input",
                        inputType: "text",
                        disabled: t,
                        value: g,
                        setValue: b,
                        error: I || C,
                        setError: S,
                        validate: ha,
                        canSubmit: P,
                        handleSubmit: x,
                        onChange: function() {
                            return A(null)
                        },
                        autoComplete: "off",
                        placeholder: p.Label.CodeInputPlaceholderText(d.authenticatorCodeLength),
                        maxLength: d.authenticatorCodeLength,
                        validCharactersRegEx: Mi,
                        hideFeedback: !0,
                        concealInput: !0
                    }), c && w().createElement(Ri, {
                        disabled: t,
                        rememberDevice: D,
                        setRememberDevice: L,
                        className: H
                    }), r), w().createElement(k, {
                        positiveButton: R,
                        negativeButton: null
                    }))
                },
                Gi = function(e, t, n, r) {
                    return new(n || (n = Promise))((function(o, a) {
                        function i(e) {
                            try {
                                u(r.next(e))
                            } catch (e) {
                                a(e)
                            }
                        }

                        function l(e) {
                            try {
                                u(r.throw(e))
                            } catch (e) {
                                a(e)
                            }
                        }

                        function u(e) {
                            var t;
                            e.done ? o(e.value) : (t = e.value, t instanceof n ? t : new n((function(e) {
                                e(t)
                            }))).then(i, l)
                        }
                        u((r = r.apply(e, t || [])).next())
                    }))
                },
                Wi = function(e, t) {
                    var n, r, o, a, i = {
                        label: 0,
                        sent: function() {
                            if (1 & o[0]) throw o[1];
                            return o[1]
                        },
                        trys: [],
                        ops: []
                    };
                    return a = {
                        next: l(0),
                        throw: l(1),
                        return: l(2)
                    }, "function" == typeof Symbol && (a[Symbol.iterator] = function() {
                        return this
                    }), a;

                    function l(a) {
                        return function(l) {
                            return function(a) {
                                if (n) throw new TypeError("Generator is already executing.");
                                for (; i;) try {
                                    if (n = 1, r && (o = 2 & a[0] ? r.return : a[0] ? r.throw || ((o = r.return) && o.call(r), 0) : r.next) && !(o = o.call(r, a[1])).done) return o;
                                    switch (r = 0, o && (a = [2 & a[0], o.value]), a[0]) {
                                        case 0:
                                        case 1:
                                            o = a;
                                            break;
                                        case 4:
                                            return i.label++, {
                                                value: a[1],
                                                done: !1
                                            };
                                        case 5:
                                            i.label++, r = a[1], a = [0];
                                            continue;
                                        case 7:
                                            a = i.ops.pop(), i.trys.pop();
                                            continue;
                                        default:
                                            if (!(o = i.trys, (o = o.length > 0 && o[o.length - 1]) || 6 !== a[0] && 2 !== a[0])) {
                                                i = 0;
                                                continue
                                            }
                                            if (3 === a[0] && (!o || a[1] > o[0] && a[1] < o[3])) {
                                                i.label = a[1];
                                                break
                                            }
                                            if (6 === a[0] && i.label < o[1]) {
                                                i.label = o[1], o = a;
                                                break
                                            }
                                            if (o && i.label < o[2]) {
                                                i.label = o[2], i.ops.push(a);
                                                break
                                            }
                                            o[2] && i.ops.pop(), i.trys.pop();
                                            continue
                                    }
                                    a = t.call(e, i)
                                } catch (e) {
                                    a = [6, e], r = 0
                                } finally {
                                    n = o = 0
                                }
                                if (5 & a[0]) throw a[1];
                                return {
                                    value: a[0] ? a[1] : void 0,
                                    done: !0
                                }
                            }([a, l])
                        }
                    }
                },
                Fi = function(e) {
                    var t = e.disabled,
                        n = e.setCodeError,
                        r = e.mediaType,
                        o = e.className,
                        a = Ai(),
                        i = a.state,
                        l = i.userId,
                        u = i.challengeId,
                        s = i.actionType,
                        c = i.renderInline,
                        d = i.resources,
                        p = i.eventService,
                        f = i.requestService,
                        h = a.dispatch,
                        y = (0, N.useState)(!1),
                        v = y[0],
                        m = y[1];
                    if (v) return w().createElement("p", {
                        className: o
                    }, w().createElement("span", {
                        className: "spinner spinner-xs spinner-no-margin"
                    }));
                    var E = c ? "inline-challenge-body-button-link" : "modal-body-button-link";
                    return w().createElement("p", {
                        className: o
                    }, w().createElement("button", {
                        type: "button",
                        className: E + " small",
                        onClick: function() {
                            return Gi(void 0, void 0, void 0, (function() {
                                var e, t, o;
                                return Wi(this, (function(a) {
                                    switch (a.label) {
                                        case 0:
                                            return e = null, m(!0), r !== qa.Email ? [3, 2] : (p.sendEmailResendRequestedEvent(), [4, f.twoStepVerification.sendEmailCode(l, {
                                                challengeId: u,
                                                actionType: s
                                            })]);
                                        case 1:
                                            return (t = a.sent()).isError && (e = t.error), [3, 4];
                                        case 2:
                                            return r !== qa.SMS ? [3, 4] : (p.sendSmsResendRequestedEvent(), [4, f.twoStepVerification.sendSmsCode(l, {
                                                challengeId: u,
                                                actionType: s
                                            })]);
                                        case 3:
                                            (o = a.sent()).isError && (e = o.error), a.label = 4;
                                        case 4:
                                            return m(!1), null != e && (e === bt.INVALID_USER_ID || e === bt.INVALID_CHALLENGE_ID ? h({
                                                type: mi.SET_CHALLENGE_INVALIDATED,
                                                errorCode: bi(e)
                                            }) : n(gi(d, e))), [2]
                                    }
                                }))
                            }))
                        },
                        disabled: t || v
                    }, d.Action.Resend))
                },
                ji = function(e, t, n, r) {
                    return new(n || (n = Promise))((function(o, a) {
                        function i(e) {
                            try {
                                u(r.next(e))
                            } catch (e) {
                                a(e)
                            }
                        }

                        function l(e) {
                            try {
                                u(r.throw(e))
                            } catch (e) {
                                a(e)
                            }
                        }

                        function u(e) {
                            var t;
                            e.done ? o(e.value) : (t = e.value, t instanceof n ? t : new n((function(e) {
                                e(t)
                            }))).then(i, l)
                        }
                        u((r = r.apply(e, t || [])).next())
                    }))
                },
                Bi = function(e, t) {
                    var n, r, o, a, i = {
                        label: 0,
                        sent: function() {
                            if (1 & o[0]) throw o[1];
                            return o[1]
                        },
                        trys: [],
                        ops: []
                    };
                    return a = {
                        next: l(0),
                        throw: l(1),
                        return: l(2)
                    }, "function" == typeof Symbol && (a[Symbol.iterator] = function() {
                        return this
                    }), a;

                    function l(a) {
                        return function(l) {
                            return function(a) {
                                if (n) throw new TypeError("Generator is already executing.");
                                for (; i;) try {
                                    if (n = 1, r && (o = 2 & a[0] ? r.return : a[0] ? r.throw || ((o = r.return) && o.call(r), 0) : r.next) && !(o = o.call(r, a[1])).done) return o;
                                    switch (r = 0, o && (a = [2 & a[0], o.value]), a[0]) {
                                        case 0:
                                        case 1:
                                            o = a;
                                            break;
                                        case 4:
                                            return i.label++, {
                                                value: a[1],
                                                done: !1
                                            };
                                        case 5:
                                            i.label++, r = a[1], a = [0];
                                            continue;
                                        case 7:
                                            a = i.ops.pop(), i.trys.pop();
                                            continue;
                                        default:
                                            if (!(o = i.trys, (o = o.length > 0 && o[o.length - 1]) || 6 !== a[0] && 2 !== a[0])) {
                                                i = 0;
                                                continue
                                            }
                                            if (3 === a[0] && (!o || a[1] > o[0] && a[1] < o[3])) {
                                                i.label = a[1];
                                                break
                                            }
                                            if (6 === a[0] && i.label < o[1]) {
                                                i.label = o[1], o = a;
                                                break
                                            }
                                            if (o && i.label < o[2]) {
                                                i.label = o[2], i.ops.push(a);
                                                break
                                            }
                                            o[2] && i.ops.pop(), i.trys.pop();
                                            continue
                                    }
                                    a = t.call(e, i)
                                } catch (e) {
                                    a = [6, e], r = 0
                                } finally {
                                    n = o = 0
                                }
                                if (5 & a[0]) throw a[1];
                                return {
                                    value: a[0] ? a[1] : void 0,
                                    done: !0
                                }
                            }([a, l])
                        }
                    }
                },
                qi = function(e) {
                    var t = e.requestInFlight,
                        n = e.setRequestInFlight,
                        r = e.children,
                        o = Ai(),
                        a = o.state,
                        i = a.userId,
                        l = a.challengeId,
                        u = a.actionType,
                        s = a.renderInline,
                        c = a.shouldShowRememberDeviceCheckbox,
                        d = a.resources,
                        p = a.metadata,
                        f = a.eventService,
                        h = a.metricsService,
                        y = a.requestService,
                        v = o.dispatch,
                        m = _i(),
                        E = (0, N.useState)(""),
                        g = E[0],
                        b = E[1],
                        _ = (0, N.useState)(null),
                        C = _[0],
                        S = _[1],
                        T = (0, N.useState)(null),
                        I = T[0],
                        A = T[1],
                        O = (0, N.useState)(!1),
                        D = O[0],
                        L = O[1],
                        x = function() {
                            return ji(void 0, void 0, void 0, (function() {
                                var e;
                                return Bi(this, (function(t) {
                                    switch (t.label) {
                                        case 0:
                                            return n(!0), A(null), f.sendCodeSubmittedEvent(m), [4, y.twoStepVerification.verifyEmailCode(i, {
                                                challengeId: l,
                                                actionType: u,
                                                code: g
                                            })];
                                        case 1:
                                            return (e = t.sent()).isError ? (f.sendCodeVerificationFailedEvent(m, bt[e.error || bt.UNKNOWN]), e.error === bt.INVALID_USER_ID || e.error === bt.INVALID_CHALLENGE_ID ? (v({
                                                type: mi.SET_CHALLENGE_INVALIDATED,
                                                errorCode: bi(e.error)
                                            }), [2]) : (n(!1), A(gi(d, e.error)), [2])) : (f.sendCodeVerifiedEvent(m), h.fireVerifiedEvent(m), v({
                                                type: mi.SET_CHALLENGE_COMPLETED,
                                                onChallengeCompletedData: {
                                                    verificationToken: e.value.verificationToken,
                                                    rememberDevice: D
                                                }
                                            }), [2])
                                    }
                                }))
                            }))
                        },
                        P = null === C && g.length === (null == p ? void 0 : p.emailCodeLength),
                        R = {
                            content: t ? w().createElement("span", {
                                className: "spinner spinner-xs spinner-no-margin"
                            }) : d.Action.Verify,
                            label: d.Action.Verify,
                            enabled: !t && P,
                            action: x
                        },
                        M = s ? _r : gr.Body,
                        k = s ? Cr : Sr,
                        U = s ? "inline-challenge-lock-icon" : "modal-lock-icon",
                        H = s ? "inline-challenge-margin-bottom-xlarge" : "modal-margin-bottom-xlarge";
                    return p && w().createElement(w().Fragment, null, w().createElement(M, null, w().createElement("div", {
                        className: U
                    }), w().createElement("p", {
                        className: H
                    }, d.Label.EnterEmailCode), w().createElement(va, {
                        id: "two-step-verification-code-input",
                        inputType: "text",
                        disabled: t,
                        value: g,
                        setValue: b,
                        error: I || C,
                        setError: S,
                        validate: ha,
                        canSubmit: P,
                        handleSubmit: x,
                        onChange: function() {
                            return A(null)
                        },
                        autoComplete: "off",
                        placeholder: d.Label.CodeInputPlaceholderText(p.emailCodeLength),
                        maxLength: p.emailCodeLength,
                        validCharactersRegEx: Mi,
                        hideFeedback: !0,
                        concealInput: !0
                    }), c && w().createElement(Ri, {
                        disabled: t,
                        rememberDevice: D,
                        setRememberDevice: L,
                        className: H
                    }), w().createElement(Fi, {
                        disabled: t,
                        setCodeError: S,
                        mediaType: m
                    }), r), w().createElement(k, {
                        positiveButton: R,
                        negativeButton: null
                    }))
                },
                zi = function(e, t, n, r) {
                    return new(n || (n = Promise))((function(o, a) {
                        function i(e) {
                            try {
                                u(r.next(e))
                            } catch (e) {
                                a(e)
                            }
                        }

                        function l(e) {
                            try {
                                u(r.throw(e))
                            } catch (e) {
                                a(e)
                            }
                        }

                        function u(e) {
                            var t;
                            e.done ? o(e.value) : (t = e.value, t instanceof n ? t : new n((function(e) {
                                e(t)
                            }))).then(i, l)
                        }
                        u((r = r.apply(e, t || [])).next())
                    }))
                },
                Ki = function(e, t) {
                    var n, r, o, a, i = {
                        label: 0,
                        sent: function() {
                            if (1 & o[0]) throw o[1];
                            return o[1]
                        },
                        trys: [],
                        ops: []
                    };
                    return a = {
                        next: l(0),
                        throw: l(1),
                        return: l(2)
                    }, "function" == typeof Symbol && (a[Symbol.iterator] = function() {
                        return this
                    }), a;

                    function l(a) {
                        return function(l) {
                            return function(a) {
                                if (n) throw new TypeError("Generator is already executing.");
                                for (; i;) try {
                                    if (n = 1, r && (o = 2 & a[0] ? r.return : a[0] ? r.throw || ((o = r.return) && o.call(r), 0) : r.next) && !(o = o.call(r, a[1])).done) return o;
                                    switch (r = 0, o && (a = [2 & a[0], o.value]), a[0]) {
                                        case 0:
                                        case 1:
                                            o = a;
                                            break;
                                        case 4:
                                            return i.label++, {
                                                value: a[1],
                                                done: !1
                                            };
                                        case 5:
                                            i.label++, r = a[1], a = [0];
                                            continue;
                                        case 7:
                                            a = i.ops.pop(), i.trys.pop();
                                            continue;
                                        default:
                                            if (!(o = i.trys, (o = o.length > 0 && o[o.length - 1]) || 6 !== a[0] && 2 !== a[0])) {
                                                i = 0;
                                                continue
                                            }
                                            if (3 === a[0] && (!o || a[1] > o[0] && a[1] < o[3])) {
                                                i.label = a[1];
                                                break
                                            }
                                            if (6 === a[0] && i.label < o[1]) {
                                                i.label = o[1], o = a;
                                                break
                                            }
                                            if (o && i.label < o[2]) {
                                                i.label = o[2], i.ops.push(a);
                                                break
                                            }
                                            o[2] && i.ops.pop(), i.trys.pop();
                                            continue
                                    }
                                    a = t.call(e, i)
                                } catch (e) {
                                    a = [6, e], r = 0
                                } finally {
                                    n = o = 0
                                }
                                if (5 & a[0]) throw a[1];
                                return {
                                    value: a[0] ? a[1] : void 0,
                                    done: !0
                                }
                            }([a, l])
                        }
                    }
                },
                Zi = function(e) {
                    var t = e.requestInFlight,
                        n = e.setRequestInFlight,
                        r = e.children,
                        o = Ai(),
                        a = o.state,
                        i = a.userId,
                        l = a.challengeId,
                        u = a.actionType,
                        s = a.renderInline,
                        c = a.shouldShowRememberDeviceCheckbox,
                        d = a.resources,
                        p = a.eventService,
                        f = a.metricsService,
                        h = a.requestService,
                        y = o.dispatch,
                        v = _i(),
                        m = (0, N.useState)(""),
                        E = m[0],
                        g = m[1],
                        b = (0, N.useState)(null),
                        _ = b[0],
                        C = b[1],
                        S = (0, N.useState)(null),
                        T = S[0],
                        I = S[1],
                        A = (0, N.useState)(!1),
                        O = A[0],
                        D = A[1],
                        L = function() {
                            return zi(void 0, void 0, void 0, (function() {
                                var e;
                                return Ki(this, (function(t) {
                                    switch (t.label) {
                                        case 0:
                                            return n(!0), I(null), p.sendCodeSubmittedEvent(v), [4, h.twoStepVerification.verifyRecoveryCode(i, {
                                                challengeId: l,
                                                actionType: u,
                                                code: E
                                            })];
                                        case 1:
                                            return (e = t.sent()).isError ? (p.sendCodeVerificationFailedEvent(v, bt[e.error || bt.UNKNOWN]), e.error === bt.INVALID_USER_ID || e.error === bt.INVALID_CHALLENGE_ID ? (y({
                                                type: mi.SET_CHALLENGE_INVALIDATED,
                                                errorCode: bi(e.error)
                                            }), [2]) : (n(!1), I(gi(d, e.error)), [2])) : (p.sendCodeVerifiedEvent(v), f.fireVerifiedEvent(v), y({
                                                type: mi.SET_CHALLENGE_COMPLETED,
                                                onChallengeCompletedData: {
                                                    verificationToken: e.value.verificationToken,
                                                    rememberDevice: O
                                                }
                                            }), [2])
                                    }
                                }))
                            }))
                        },
                        x = null === _ && 9 === E.length,
                        P = {
                            content: t ? w().createElement("span", {
                                className: "spinner spinner-xs spinner-no-margin"
                            }) : d.Action.Verify,
                            label: d.Action.Verify,
                            enabled: !t && x,
                            action: L
                        },
                        R = s ? _r : gr.Body,
                        M = s ? Cr : Sr,
                        k = s ? "inline-challenge-lock-icon" : "modal-lock-icon",
                        U = s ? "inline-challenge-margin-bottom-xlarge" : "modal-margin-bottom-xlarge";
                    return w().createElement(w().Fragment, null, w().createElement(R, null, w().createElement("div", {
                        className: k
                    }), w().createElement("p", {
                        className: U
                    }, d.Label.EnterRecoveryCode), w().createElement(va, {
                        id: "two-step-verification-code-input",
                        inputType: "text",
                        disabled: t,
                        value: E,
                        setValue: g,
                        error: T || _,
                        setError: C,
                        validate: ha,
                        canSubmit: x,
                        handleSubmit: L,
                        onChange: function() {
                            return I(null)
                        },
                        autoComplete: "off",
                        placeholder: d.Label.CodeInputPlaceholderText(9),
                        maxLength: 9,
                        validCharactersRegEx: ki,
                        hideFeedback: !0,
                        concealInput: !0
                    }), c && w().createElement(Ri, {
                        disabled: t,
                        rememberDevice: O,
                        setRememberDevice: D,
                        className: U
                    }), r), w().createElement(M, {
                        positiveButton: P,
                        negativeButton: null
                    }))
                },
                Yi = function(e, t, n, r) {
                    return new(n || (n = Promise))((function(o, a) {
                        function i(e) {
                            try {
                                u(r.next(e))
                            } catch (e) {
                                a(e)
                            }
                        }

                        function l(e) {
                            try {
                                u(r.throw(e))
                            } catch (e) {
                                a(e)
                            }
                        }

                        function u(e) {
                            var t;
                            e.done ? o(e.value) : (t = e.value, t instanceof n ? t : new n((function(e) {
                                e(t)
                            }))).then(i, l)
                        }
                        u((r = r.apply(e, t || [])).next())
                    }))
                },
                $i = function(e, t) {
                    var n, r, o, a, i = {
                        label: 0,
                        sent: function() {
                            if (1 & o[0]) throw o[1];
                            return o[1]
                        },
                        trys: [],
                        ops: []
                    };
                    return a = {
                        next: l(0),
                        throw: l(1),
                        return: l(2)
                    }, "function" == typeof Symbol && (a[Symbol.iterator] = function() {
                        return this
                    }), a;

                    function l(a) {
                        return function(l) {
                            return function(a) {
                                if (n) throw new TypeError("Generator is already executing.");
                                for (; i;) try {
                                    if (n = 1, r && (o = 2 & a[0] ? r.return : a[0] ? r.throw || ((o = r.return) && o.call(r), 0) : r.next) && !(o = o.call(r, a[1])).done) return o;
                                    switch (r = 0, o && (a = [2 & a[0], o.value]), a[0]) {
                                        case 0:
                                        case 1:
                                            o = a;
                                            break;
                                        case 4:
                                            return i.label++, {
                                                value: a[1],
                                                done: !1
                                            };
                                        case 5:
                                            i.label++, r = a[1], a = [0];
                                            continue;
                                        case 7:
                                            a = i.ops.pop(), i.trys.pop();
                                            continue;
                                        default:
                                            if (!(o = i.trys, (o = o.length > 0 && o[o.length - 1]) || 6 !== a[0] && 2 !== a[0])) {
                                                i = 0;
                                                continue
                                            }
                                            if (3 === a[0] && (!o || a[1] > o[0] && a[1] < o[3])) {
                                                i.label = a[1];
                                                break
                                            }
                                            if (6 === a[0] && i.label < o[1]) {
                                                i.label = o[1], o = a;
                                                break
                                            }
                                            if (o && i.label < o[2]) {
                                                i.label = o[2], i.ops.push(a);
                                                break
                                            }
                                            o[2] && i.ops.pop(), i.trys.pop();
                                            continue
                                    }
                                    a = t.call(e, i)
                                } catch (e) {
                                    a = [6, e], r = 0
                                } finally {
                                    n = o = 0
                                }
                                if (5 & a[0]) throw a[1];
                                return {
                                    value: a[0] ? a[1] : void 0,
                                    done: !0
                                }
                            }([a, l])
                        }
                    }
                },
                Qi = function(e) {
                    var t = e.requestInFlight,
                        n = e.setRequestInFlight,
                        r = e.children,
                        o = Ai(),
                        a = o.state,
                        i = a.userId,
                        l = a.challengeId,
                        u = a.actionType,
                        s = a.renderInline,
                        c = a.shouldShowRememberDeviceCheckbox,
                        d = a.resources,
                        p = a.metadata,
                        f = a.eventService,
                        h = a.metricsService,
                        y = a.requestService,
                        v = o.dispatch,
                        m = _i(),
                        E = (0, N.useState)(""),
                        g = E[0],
                        b = E[1],
                        _ = (0, N.useState)(null),
                        C = _[0],
                        S = _[1],
                        T = (0, N.useState)(null),
                        I = T[0],
                        A = T[1],
                        O = (0, N.useState)(!1),
                        D = O[0],
                        L = O[1],
                        x = function() {
                            return Yi(void 0, void 0, void 0, (function() {
                                var e;
                                return $i(this, (function(t) {
                                    switch (t.label) {
                                        case 0:
                                            return n(!0), A(null), f.sendCodeSubmittedEvent(m), [4, y.twoStepVerification.verifySmsCode(i, {
                                                challengeId: l,
                                                actionType: u,
                                                code: g
                                            })];
                                        case 1:
                                            return (e = t.sent()).isError ? (f.sendCodeVerificationFailedEvent(m, bt[e.error || bt.UNKNOWN]), e.error === bt.INVALID_USER_ID || e.error === bt.INVALID_CHALLENGE_ID ? (v({
                                                type: mi.SET_CHALLENGE_INVALIDATED,
                                                errorCode: bi(e.error)
                                            }), [2]) : (n(!1), A(gi(d, e.error)), [2])) : (f.sendCodeVerifiedEvent(m), h.fireVerifiedEvent(m), v({
                                                type: mi.SET_CHALLENGE_COMPLETED,
                                                onChallengeCompletedData: {
                                                    verificationToken: e.value.verificationToken,
                                                    rememberDevice: D
                                                }
                                            }), [2])
                                    }
                                }))
                            }))
                        },
                        P = null === C && g.length === (null == p ? void 0 : p.emailCodeLength),
                        R = {
                            content: t ? w().createElement("span", {
                                className: "spinner spinner-xs spinner-no-margin"
                            }) : d.Action.Verify,
                            label: d.Action.Verify,
                            enabled: !t && P,
                            action: x
                        },
                        M = s ? _r : gr.Body,
                        k = s ? Cr : Sr,
                        U = s ? "inline-challenge-lock-icon" : "modal-lock-icon",
                        H = s ? "inline-challenge-margin-bottom-xlarge" : "modal-margin-bottom-xlarge";
                    return p && w().createElement(w().Fragment, null, w().createElement(M, null, w().createElement("div", {
                        className: U
                    }), w().createElement("p", {
                        className: H
                    }, d.Label.EnterTextCode), w().createElement(va, {
                        id: "two-step-verification-code-input",
                        inputType: "text",
                        disabled: t,
                        value: g,
                        setValue: b,
                        error: I || C,
                        setError: S,
                        validate: ha,
                        canSubmit: P,
                        handleSubmit: x,
                        onChange: function() {
                            return A(null)
                        },
                        autoComplete: "off",
                        placeholder: d.Label.CodeInputPlaceholderText(p.emailCodeLength),
                        maxLength: p.emailCodeLength,
                        validCharactersRegEx: Mi,
                        hideFeedback: !0,
                        concealInput: !0
                    }), c && w().createElement(Ri, {
                        disabled: t,
                        rememberDevice: D,
                        setRememberDevice: L,
                        className: H
                    }), w().createElement(Fi, {
                        disabled: t,
                        setCodeError: S,
                        mediaType: m
                    }), r), w().createElement(k, {
                        positiveButton: R,
                        negativeButton: null
                    }))
                },
                Ji = CoreRobloxUtilities,
                Xi = function(e, t, n, r) {
                    return new(n || (n = Promise))((function(o, a) {
                        function i(e) {
                            try {
                                u(r.next(e))
                            } catch (e) {
                                a(e)
                            }
                        }

                        function l(e) {
                            try {
                                u(r.throw(e))
                            } catch (e) {
                                a(e)
                            }
                        }

                        function u(e) {
                            var t;
                            e.done ? o(e.value) : (t = e.value, t instanceof n ? t : new n((function(e) {
                                e(t)
                            }))).then(i, l)
                        }
                        u((r = r.apply(e, t || [])).next())
                    }))
                },
                el = function(e, t) {
                    var n, r, o, a, i = {
                        label: 0,
                        sent: function() {
                            if (1 & o[0]) throw o[1];
                            return o[1]
                        },
                        trys: [],
                        ops: []
                    };
                    return a = {
                        next: l(0),
                        throw: l(1),
                        return: l(2)
                    }, "function" == typeof Symbol && (a[Symbol.iterator] = function() {
                        return this
                    }), a;

                    function l(a) {
                        return function(l) {
                            return function(a) {
                                if (n) throw new TypeError("Generator is already executing.");
                                for (; i;) try {
                                    if (n = 1, r && (o = 2 & a[0] ? r.return : a[0] ? r.throw || ((o = r.return) && o.call(r), 0) : r.next) && !(o = o.call(r, a[1])).done) return o;
                                    switch (r = 0, o && (a = [2 & a[0], o.value]), a[0]) {
                                        case 0:
                                        case 1:
                                            o = a;
                                            break;
                                        case 4:
                                            return i.label++, {
                                                value: a[1],
                                                done: !1
                                            };
                                        case 5:
                                            i.label++, r = a[1], a = [0];
                                            continue;
                                        case 7:
                                            a = i.ops.pop(), i.trys.pop();
                                            continue;
                                        default:
                                            if (!(o = i.trys, (o = o.length > 0 && o[o.length - 1]) || 6 !== a[0] && 2 !== a[0])) {
                                                i = 0;
                                                continue
                                            }
                                            if (3 === a[0] && (!o || a[1] > o[0] && a[1] < o[3])) {
                                                i.label = a[1];
                                                break
                                            }
                                            if (6 === a[0] && i.label < o[1]) {
                                                i.label = o[1], o = a;
                                                break
                                            }
                                            if (o && i.label < o[2]) {
                                                i.label = o[2], i.ops.push(a);
                                                break
                                            }
                                            o[2] && i.ops.pop(), i.trys.pop();
                                            continue
                                    }
                                    a = t.call(e, i)
                                } catch (e) {
                                    a = [6, e], r = 0
                                } finally {
                                    n = o = 0
                                }
                                if (5 & a[0]) throw a[1];
                                return {
                                    value: a[0] ? a[1] : void 0,
                                    done: !0
                                }
                            }([a, l])
                        }
                    }
                },
                tl = function(e) {
                    var t = e.requestInFlight,
                        n = e.setRequestInFlight,
                        r = e.children,
                        o = Ai(),
                        a = o.state,
                        i = a.userId,
                        l = a.challengeId,
                        u = a.actionType,
                        s = a.renderInline,
                        c = a.shouldShowRememberDeviceCheckbox,
                        d = a.resources,
                        p = a.metadata,
                        f = a.eventService,
                        h = a.metricsService,
                        y = a.requestService,
                        v = o.dispatch,
                        m = _i(),
                        E = (0, N.useState)(null),
                        g = E[0],
                        b = E[1],
                        _ = (0, N.useState)(!1),
                        C = _[0],
                        S = _[1],
                        T = function(e, t) {
                            t && f.sendCodeVerificationFailedEvent(m, bt[e || bt.UNKNOWN]), e !== bt.INVALID_USER_ID && e !== bt.INVALID_CHALLENGE_ID ? (n(!1), b(gi(d, e))) : v({
                                type: mi.SET_CHALLENGE_INVALIDATED,
                                errorCode: bi(e)
                            })
                        },
                        I = function(e) {
                            return e.replace(/\+/g, "-").replace(/\//g, "_").replace(/=/g, "")
                        },
                        A = s ? _r : gr.Body,
                        O = s ? "inline-challenge-lock-icon" : "modal-lock-icon",
                        D = s ? "inline-challenge-margin-bottom" : "modal-margin-bottom",
                        L = s ? "inline-challenge-action-button" : "modal-action-button";
                    L = (L = L.concat(" ", "btn-cta-md")).concat(" ", D);
                    var x = (s ? "inline-margin-bottom-xlarge" : "modal-margin-bottom-xlarge").concat(" ", "text-error xsmall"),
                        P = s ? "inline-challenge-margin-bottom-sm" : "modal-margin-bottom-sm";
                    return p && w().createElement(w().Fragment, null, w().createElement(A, null, w().createElement("div", {
                        className: O
                    }), w().createElement("p", {
                        className: P
                    }, d.Label.VerifyWithSecurityKey), w().createElement("p", {
                        className: D
                    }, d.Label.SecurityKeyDirections), w().createElement("button", {
                        type: "button",
                        className: L,
                        "aria-label": d.Action.Verify,
                        disabled: t,
                        onClick: function() {
                            return Xi(void 0, void 0, void 0, (function() {
                                var e, t, r, o, a, s, c, d, p, E, g, _;
                                return el(this, (function(S) {
                                    switch (S.label) {
                                        case 0:
                                            return n(!0), b(null), [4, y.twoStepVerification.getSecurityKeyOptions(i, {
                                                challengeId: l,
                                                actionType: u
                                            })];
                                        case 1:
                                            if ((e = S.sent()).isError) return T(e.error, !0), [2];
                                            if (!(t = JSON.parse(e.value.authenticationOptions)).publicKey) return T(bt.UNKNOWN, !1), [2];
                                            if (t.publicKey.challenge = Ji.cryptoUtil.base64StringToArrayBuffer(t.publicKey.challenge), !t.publicKey.challenge) return T(bt.UNKNOWN, !1), [2];
                                            for (r = 0; r < t.publicKey.allowCredentials.length; r++) t.publicKey.allowCredentials[r].id = Ji.cryptoUtil.base64StringToArrayBuffer(t.publicKey.allowCredentials[r].id);
                                            return [4, navigator.credentials.get({
                                                publicKey: t.publicKey
                                            }).catch((function() {
                                                T(bt.UNKNOWN, !1)
                                            }))];
                                        case 2:
                                            return o = S.sent(), a = new Uint8Array(o.response.authenticatorData), s = new Uint8Array(o.response.clientDataJSON), c = new Uint8Array(o.rawId), d = new Uint8Array(o.response.signature), p = new Uint8Array(o.response.userHandle), E = {
                                                id: o.id,
                                                rawId: I(Ji.cryptoUtil.arrayBufferToBase64String(c)),
                                                type: o.type,
                                                response: {
                                                    authenticatorData: I(Ji.cryptoUtil.arrayBufferToBase64String(a)),
                                                    clientDataJSON: I(Ji.cryptoUtil.arrayBufferToBase64String(s)),
                                                    signature: I(Ji.cryptoUtil.arrayBufferToBase64String(d)),
                                                    userHandle: I(Ji.cryptoUtil.arrayBufferToBase64String(p))
                                                }
                                            }, g = JSON.stringify(E), [4, y.twoStepVerification.verifySecurityKeyCredential(i, {
                                                challengeId: l,
                                                actionType: u,
                                                code: g
                                            })];
                                        case 3:
                                            return (_ = S.sent()).isError ? (T(_.error, !0), [2]) : (f.sendCodeVerifiedEvent(m), h.fireVerifiedEvent(m), v({
                                                type: mi.SET_CHALLENGE_COMPLETED,
                                                onChallengeCompletedData: {
                                                    verificationToken: _.value.verificationToken,
                                                    rememberDevice: C
                                                }
                                            }), [2])
                                    }
                                }))
                            }))
                        }
                    }, t ? w().createElement("span", {
                        className: "spinner spinner-xs spinner-no-margin"
                    }) : d.Action.Verify), c && w().createElement(Ri, {
                        disabled: t,
                        rememberDevice: C,
                        setRememberDevice: S,
                        className: D
                    }), r, w().createElement("p", {
                        className: x
                    }, g)))
                },
                nl = function(e, t, n, r) {
                    return new(n || (n = Promise))((function(o, a) {
                        function i(e) {
                            try {
                                u(r.next(e))
                            } catch (e) {
                                a(e)
                            }
                        }

                        function l(e) {
                            try {
                                u(r.throw(e))
                            } catch (e) {
                                a(e)
                            }
                        }

                        function u(e) {
                            var t;
                            e.done ? o(e.value) : (t = e.value, t instanceof n ? t : new n((function(e) {
                                e(t)
                            }))).then(i, l)
                        }
                        u((r = r.apply(e, t || [])).next())
                    }))
                },
                rl = function(e, t) {
                    var n, r, o, a, i = {
                        label: 0,
                        sent: function() {
                            if (1 & o[0]) throw o[1];
                            return o[1]
                        },
                        trys: [],
                        ops: []
                    };
                    return a = {
                        next: l(0),
                        throw: l(1),
                        return: l(2)
                    }, "function" == typeof Symbol && (a[Symbol.iterator] = function() {
                        return this
                    }), a;

                    function l(a) {
                        return function(l) {
                            return function(a) {
                                if (n) throw new TypeError("Generator is already executing.");
                                for (; i;) try {
                                    if (n = 1, r && (o = 2 & a[0] ? r.return : a[0] ? r.throw || ((o = r.return) && o.call(r), 0) : r.next) && !(o = o.call(r, a[1])).done) return o;
                                    switch (r = 0, o && (a = [2 & a[0], o.value]), a[0]) {
                                        case 0:
                                        case 1:
                                            o = a;
                                            break;
                                        case 4:
                                            return i.label++, {
                                                value: a[1],
                                                done: !1
                                            };
                                        case 5:
                                            i.label++, r = a[1], a = [0];
                                            continue;
                                        case 7:
                                            a = i.ops.pop(), i.trys.pop();
                                            continue;
                                        default:
                                            if (!(o = i.trys, (o = o.length > 0 && o[o.length - 1]) || 6 !== a[0] && 2 !== a[0])) {
                                                i = 0;
                                                continue
                                            }
                                            if (3 === a[0] && (!o || a[1] > o[0] && a[1] < o[3])) {
                                                i.label = a[1];
                                                break
                                            }
                                            if (6 === a[0] && i.label < o[1]) {
                                                i.label = o[1], o = a;
                                                break
                                            }
                                            if (o && i.label < o[2]) {
                                                i.label = o[2], i.ops.push(a);
                                                break
                                            }
                                            o[2] && i.ops.pop(), i.trys.pop();
                                            continue
                                    }
                                    a = t.call(e, i)
                                } catch (e) {
                                    a = [6, e], r = 0
                                } finally {
                                    n = o = 0
                                }
                                if (5 & a[0]) throw a[1];
                                return {
                                    value: a[0] ? a[1] : void 0,
                                    done: !0
                                }
                            }([a, l])
                        }
                    }
                },
                ol = function() {
                    var e = Ai(),
                        t = e.state,
                        n = t.userId,
                        r = t.challengeId,
                        o = t.actionType,
                        a = t.renderInline,
                        i = t.metadata,
                        l = t.enabledMediaTypes,
                        u = t.resources,
                        s = t.eventService,
                        c = t.metricsService,
                        d = t.requestService,
                        p = t.onModalChallengeAbandoned,
                        f = t.isModalVisible,
                        h = e.dispatch,
                        y = _i(),
                        v = (0, vi.useHistory)(),
                        m = (0, N.useState)(!1),
                        E = m[0],
                        g = m[1],
                        b = (0, N.useState)(!1),
                        _ = b[0],
                        C = b[1],
                        S = (0, N.useState)(null),
                        I = S[0],
                        A = S[1],
                        O = (0, N.useState)(!1),
                        D = O[0],
                        L = O[1],
                        x = function() {
                            h({
                                type: mi.HIDE_MODAL_CHALLENGE
                            }), s.sendChallengeAbandonedEvent(y), c.fireAbandonedEvent(), null !== p && setTimeout((function() {
                                return p((function() {
                                    return h({
                                        type: mi.SHOW_MODAL_CHALLENGE
                                    })
                                }))
                            }), 100)
                        },
                        P = function() {
                            return nl(void 0, void 0, void 0, (function() {
                                var e, t, a, l, c;
                                return rl(this, (function(p) {
                                    switch (p.label) {
                                        case 0:
                                            return A(null), null !== i ? [2] : [4, d.twoStepVerification.getMetadata({
                                                userId: n,
                                                challengeId: r,
                                                actionType: o
                                            })];
                                        case 1:
                                            return (e = p.sent()).isError ? (e.error === bt.INVALID_USER_ID || e.error === bt.INVALID_CHALLENGE_ID ? h({
                                                type: mi.SET_CHALLENGE_INVALIDATED,
                                                errorCode: bi(e.error)
                                            }) : A(gi(u, e.error)), [2]) : [4, d.twoStepVerification.getUserConfiguration(n, {
                                                challengeId: r,
                                                actionType: o
                                            })];
                                        case 2:
                                            if ((t = p.sent()).isError) return t.error === bt.INVALID_USER_ID || t.error === bt.INVALID_CHALLENGE_ID ? h({
                                                type: mi.SET_CHALLENGE_INVALIDATED,
                                                errorCode: bi(t.error)
                                            }) : A(gi(u, t.error)), [2];
                                            h({
                                                type: mi.SET_METADATA,
                                                metadata: e.value
                                            }), a = qa[t.value.primaryMediaType] || null, l = !0;
                                            try {
                                                (T.DeviceMeta && (0, T.DeviceMeta)().isInApp || void 0 === PublicKeyCredential) && (l = !1)
                                            } catch (e) {
                                                l = !1
                                            }
                                            return a !== qa.SecurityKey || l || (a = qa.Authenticator), v.replace(Ci(a)), a === qa.Email && g(!0), (c = t.value.methods.filter((function(e) {
                                                return e.enabled
                                            })).map((function(e) {
                                                var t = e.mediaType;
                                                return qa[t] || null
                                            }))).includes(qa.SecurityKey) && !l && c.splice(c.indexOf(qa.SecurityKey), 1), c.length > 0 && o === Ba.Login && !c.includes(qa.RecoveryCode) && c.push(qa.RecoveryCode), h({
                                                type: mi.SET_USER_CONFIGURATION,
                                                userConfiguration: t.value,
                                                enabledMediaTypes: c
                                            }), s.sendUserConfigurationLoadedEvent(a), [2]
                                    }
                                }))
                            }))
                        };
                    (0, N.useEffect)((function() {
                        P()
                    }), []);
                    var R = {
                            content: u.Action.Reload,
                            label: u.Action.Reload,
                            enabled: null !== I,
                            action: P
                        },
                        M = function() {
                            var e, t = a ? _r : gr.Body,
                                n = a ? Cr : Sr;
                            return I ? w().createElement(w().Fragment, null, w().createElement(t, null, w().createElement("p", null, I)), w().createElement(n, {
                                positiveButton: R,
                                negativeButton: null
                            })) : i ? (e = w().createElement(w().Fragment, null, y && l.length > 1 && w().createElement(Pi, {
                                requestInFlight: D
                            }), y && w().createElement("p", null, w().createElement(xi, null))), w().createElement(vi.Switch, null, w().createElement(vi.Route, {
                                path: Ci(qa.Authenticator)
                            }, w().createElement(Vi, {
                                requestInFlight: D,
                                setRequestInFlight: L
                            }, e)), w().createElement(vi.Route, {
                                path: Ci(qa.Email)
                            }, w().createElement(qi, {
                                requestInFlight: D,
                                setRequestInFlight: L
                            }, e)), w().createElement(vi.Route, {
                                path: Ci(qa.RecoveryCode)
                            }, w().createElement(Zi, {
                                requestInFlight: D,
                                setRequestInFlight: L
                            }, e)), w().createElement(vi.Route, {
                                path: Ci(qa.SMS)
                            }, w().createElement(Qi, {
                                requestInFlight: D,
                                setRequestInFlight: L
                            }, e)), w().createElement(vi.Route, {
                                path: Ci(qa.SecurityKey)
                            }, w().createElement(tl, {
                                requestInFlight: D,
                                setRequestInFlight: L
                            }, e)), w().createElement(vi.Route, null, w().createElement(Li, {
                                hasSentEmailCode: E,
                                setHasSentEmailCode: g,
                                hasSentSmsCode: _,
                                setHasSentSmsCode: C,
                                requestInFlight: D,
                                setRequestInFlight: L
                            }, e)))) : w().createElement(t, null, w().createElement("span", {
                                className: "spinner spinner-default spinner-no-margin modal-margin-bottom-large"
                            }))
                        };
                    return a ? w().createElement(br, {
                        titleText: u.Label.TwoStepVerification
                    }, M()) : w().createElement(gr, {
                        className: "modal-modern",
                        show: f,
                        onHide: x,
                        backdrop: "static"
                    }, w().createElement(zr, {
                        headerText: u.Label.TwoStepVerification,
                        buttonType: xr.CLOSE,
                        buttonAction: x,
                        buttonEnabled: !D,
                        headerInfo: null
                    }), M())
                },
                al = (0, zt.withTranslations)((function(e) {
                    var t = e.userId,
                        n = e.challengeId,
                        r = e.actionType,
                        o = e.renderInline,
                        a = e.shouldModifyBrowserHistory,
                        i = e.shouldShowRememberDeviceCheckbox,
                        l = e.eventService,
                        u = e.metricsService,
                        s = e.requestService,
                        c = e.translate,
                        d = e.onChallengeCompleted,
                        p = e.onChallengeInvalidated,
                        f = e.onModalChallengeAbandoned,
                        h = w().createElement(wi, {
                            userId: t,
                            challengeId: n,
                            actionType: r,
                            renderInline: o,
                            shouldShowRememberDeviceCheckbox: i,
                            eventService: l,
                            metricsService: u,
                            requestService: s,
                            translate: c,
                            onChallengeCompleted: d,
                            onChallengeInvalidated: p,
                            onModalChallengeAbandoned: f
                        }, w().createElement(ol, null));
                    return a ? w().createElement(si.HashRouter, {
                        hashType: "noslash"
                    }, h) : w().createElement(si.MemoryRouter, null, h)
                }), ci),
                il = function() {
                    function e(e, t) {
                        this.challengeId = e, this.targetUserId = t
                    }
                    return e.prototype.sendChallengeInitializedEvent = function() {
                        I().EventStream.SendEventWithTarget(di, pi.challengeInitialized, {
                            challengeId: this.challengeId,
                            targetUserId: this.targetUserId
                        }, I().EventStream.TargetTypes.WWW)
                    }, e.prototype.sendUserConfigurationLoadedEvent = function(e) {
                        I().EventStream.SendEventWithTarget(di, pi.userConfigurationLoaded, {
                            challengeId: this.challengeId,
                            targetUserId: this.targetUserId,
                            mediaType: e || ""
                        }, I().EventStream.TargetTypes.WWW)
                    }, e.prototype.sendChallengeInvalidatedEvent = function(e) {
                        I().EventStream.SendEventWithTarget(di, pi.challengeInvalidated, {
                            challengeId: this.challengeId,
                            targetUserId: this.targetUserId,
                            mediaType: e || ""
                        }, I().EventStream.TargetTypes.WWW)
                    }, e.prototype.sendChallengeAbandonedEvent = function(e) {
                        I().EventStream.SendEventWithTarget(di, pi.challengeAbandoned, {
                            challengeId: this.challengeId,
                            targetUserId: this.targetUserId,
                            mediaType: e || ""
                        }, I().EventStream.TargetTypes.WWW)
                    }, e.prototype.sendEmailResendRequestedEvent = function() {
                        I().EventStream.SendEventWithTarget(di, pi.emailResendRequested, {
                            challengeId: this.challengeId,
                            targetUserId: this.targetUserId
                        }, I().EventStream.TargetTypes.WWW)
                    }, e.prototype.sendSmsResendRequestedEvent = function() {
                        I().EventStream.SendEventWithTarget(di, pi.smsResendRequested, {
                            challengeId: this.challengeId,
                            targetUserId: this.targetUserId
                        }, I().EventStream.TargetTypes.WWW)
                    }, e.prototype.sendMediaTypeChangedEvent = function(e) {
                        I().EventStream.SendEventWithTarget(di, pi.mediaTypeChanged, {
                            challengeId: this.challengeId,
                            targetUserId: this.targetUserId,
                            mediaType: e || ""
                        }, I().EventStream.TargetTypes.WWW)
                    }, e.prototype.sendCodeSubmittedEvent = function(e) {
                        I().EventStream.SendEventWithTarget(di, pi.codeSubmitted, {
                            challengeId: this.challengeId,
                            targetUserId: this.targetUserId,
                            mediaType: e || ""
                        }, I().EventStream.TargetTypes.WWW)
                    }, e.prototype.sendCodeVerificationFailedEvent = function(e, t) {
                        I().EventStream.SendEventWithTarget(di, pi.codeVerificationFailed, {
                            challengeId: this.challengeId,
                            targetUserId: this.targetUserId,
                            mediaType: e || "",
                            reason: t
                        }, I().EventStream.TargetTypes.WWW)
                    }, e.prototype.sendCodeVerifiedEvent = function(e) {
                        I().EventStream.SendEventWithTarget(di, pi.codeVerified, {
                            challengeId: this.challengeId,
                            targetUserId: this.targetUserId,
                            mediaType: e || ""
                        }, I().EventStream.TargetTypes.WWW)
                    }, e
                }(),
                ll = function() {
                    function e() {
                        this.timeStore = {}
                    }
                    return e.prototype.start = function(e) {
                        this.timeStore[e] = Date.now()
                    }, e.prototype.end = function(e) {
                        var t = this.timeStore[e];
                        return t ? (delete this.timeStore[e], (new Date).valueOf() - t) : null
                    }, e
                }(),
                ul = function() {
                    function e(e, t, n) {
                        this.appType = t || "unknown", this.actionType = e, this.solveTimeSequenceName = this.actionType + "_" + "TwoStepVerification_" + hi.solveTime, this.eventTimer = new ll, this.requestServiceDefault = n
                    }
                    return e.prototype.fireInitializedEvent = function() {
                        if (Vo) {
                            var e = this.actionType + "_" + "TwoStepVerification_" + fi.initialized;
                            Vo.fireEvent(e, e + "_" + this.appType), Vo.start(this.solveTimeSequenceName, this.solveTimeSequenceName + "_" + this.appType)
                        }
                        this.requestServiceDefault.metrics.recordMetric({
                            name: Dt.Event2sv,
                            value: 1,
                            labelValues: {
                                action_type: this.actionType,
                                event_type: fi.initialized,
                                application_type: this.appType
                            }
                        }).catch((function() {})), this.eventTimer.start(this.solveTimeSequenceName)
                    }, e.prototype.fireVerifiedEvent = function(e) {
                        if (null !== e) {
                            if (Vo) {
                                var t = this.actionType + "_" + "TwoStepVerification_" + fi.verified + e;
                                Vo.fireEvent(t, t + "_" + this.appType), Vo.endSuccess(this.solveTimeSequenceName, this.solveTimeSequenceName + "_" + this.appType)
                            }
                            this.requestServiceDefault.metrics.recordMetric({
                                name: Dt.Event2sv,
                                value: 1,
                                labelValues: {
                                    action_type: this.actionType,
                                    event_type: "" + fi.verified + e,
                                    application_type: this.appType
                                }
                            }).catch((function() {}));
                            var n = this.eventTimer.end(this.solveTimeSequenceName);
                            null !== n && this.requestServiceDefault.metrics.recordMetric({
                                name: Dt.SolveTime2sv,
                                value: n,
                                labelValues: {
                                    action_type: this.actionType,
                                    event_type: "" + fi.verified + e,
                                    application_type: this.appType
                                }
                            }).catch((function() {}))
                        }
                    }, e.prototype.fireInvalidatedEvent = function() {
                        if (Vo) {
                            var e = this.actionType + "_" + "TwoStepVerification_" + fi.invalidated;
                            Vo.fireEvent(e, e + "_" + this.appType), Vo.endFailure(this.solveTimeSequenceName, this.solveTimeSequenceName + "_" + this.appType)
                        }
                        this.requestServiceDefault.metrics.recordMetric({
                            name: Dt.Event2sv,
                            value: 1,
                            labelValues: {
                                action_type: this.actionType,
                                event_type: fi.invalidated,
                                application_type: this.appType
                            }
                        }).catch((function() {}));
                        var t = this.eventTimer.end(this.solveTimeSequenceName);
                        null !== t && this.requestServiceDefault.metrics.recordMetric({
                            name: Dt.SolveTime2sv,
                            value: t,
                            labelValues: {
                                action_type: this.actionType,
                                event_type: fi.invalidated,
                                application_type: this.appType
                            }
                        }).catch((function() {}))
                    }, e.prototype.fireAbandonedEvent = function() {
                        if (Vo) {
                            var e = this.actionType + "_" + "TwoStepVerification_" + fi.abandoned;
                            Vo.fireEvent(e, e + "_" + this.appType), Vo.endCancel(this.solveTimeSequenceName, this.solveTimeSequenceName + "_" + this.appType)
                        }
                        this.requestServiceDefault.metrics.recordMetric({
                            name: Dt.Event2sv,
                            value: 1,
                            labelValues: {
                                action_type: this.actionType,
                                event_type: fi.abandoned,
                                application_type: this.appType
                            }
                        }).catch((function() {}));
                        var t = this.eventTimer.end(this.solveTimeSequenceName);
                        null !== t && this.requestServiceDefault.metrics.recordMetric({
                            name: Dt.SolveTime2sv,
                            value: t,
                            labelValues: {
                                action_type: this.actionType,
                                event_type: fi.abandoned,
                                application_type: this.appType
                            }
                        }).catch((function() {}))
                    }, e
                }(),
                sl = function(e, t, n, r) {
                    return new(n || (n = Promise))((function(o, a) {
                        function i(e) {
                            try {
                                u(r.next(e))
                            } catch (e) {
                                a(e)
                            }
                        }

                        function l(e) {
                            try {
                                u(r.throw(e))
                            } catch (e) {
                                a(e)
                            }
                        }

                        function u(e) {
                            var t;
                            e.done ? o(e.value) : (t = e.value, t instanceof n ? t : new n((function(e) {
                                e(t)
                            }))).then(i, l)
                        }
                        u((r = r.apply(e, t || [])).next())
                    }))
                },
                cl = function(e, t) {
                    var n, r, o, a, i = {
                        label: 0,
                        sent: function() {
                            if (1 & o[0]) throw o[1];
                            return o[1]
                        },
                        trys: [],
                        ops: []
                    };
                    return a = {
                        next: l(0),
                        throw: l(1),
                        return: l(2)
                    }, "function" == typeof Symbol && (a[Symbol.iterator] = function() {
                        return this
                    }), a;

                    function l(a) {
                        return function(l) {
                            return function(a) {
                                if (n) throw new TypeError("Generator is already executing.");
                                for (; i;) try {
                                    if (n = 1, r && (o = 2 & a[0] ? r.return : a[0] ? r.throw || ((o = r.return) && o.call(r), 0) : r.next) && !(o = o.call(r, a[1])).done) return o;
                                    switch (r = 0, o && (a = [2 & a[0], o.value]), a[0]) {
                                        case 0:
                                        case 1:
                                            o = a;
                                            break;
                                        case 4:
                                            return i.label++, {
                                                value: a[1],
                                                done: !1
                                            };
                                        case 5:
                                            i.label++, r = a[1], a = [0];
                                            continue;
                                        case 7:
                                            a = i.ops.pop(), i.trys.pop();
                                            continue;
                                        default:
                                            if (!(o = i.trys, (o = o.length > 0 && o[o.length - 1]) || 6 !== a[0] && 2 !== a[0])) {
                                                i = 0;
                                                continue
                                            }
                                            if (3 === a[0] && (!o || a[1] > o[0] && a[1] < o[3])) {
                                                i.label = a[1];
                                                break
                                            }
                                            if (6 === a[0] && i.label < o[1]) {
                                                i.label = o[1], o = a;
                                                break
                                            }
                                            if (o && i.label < o[2]) {
                                                i.label = o[2], i.ops.push(a);
                                                break
                                            }
                                            o[2] && i.ops.pop(), i.trys.pop();
                                            continue
                                    }
                                    a = t.call(e, i)
                                } catch (e) {
                                    a = [6, e], r = 0
                                } finally {
                                    n = o = 0
                                }
                                if (5 & a[0]) throw a[1];
                                return {
                                    value: a[0] ? a[1] : void 0,
                                    done: !0
                                }
                            }([a, l])
                        }
                    }
                },
                dl = new qt,
                pl = function(e) {
                    var t = e.containerId,
                        n = e.userId,
                        r = e.challengeId,
                        o = e.appType,
                        a = e.actionType,
                        i = e.renderInline,
                        l = e.shouldModifyBrowserHistory,
                        u = e.shouldShowRememberDeviceCheckbox,
                        s = e.shouldDynamicallyLoadTranslationResources,
                        c = e.onChallengeCompleted,
                        d = e.onChallengeInvalidated,
                        p = e.onModalChallengeAbandoned;
                    return sl(void 0, void 0, void 0, (function() {
                        var e, f, h, y, v;
                        return cl(this, (function(m) {
                            switch (m.label) {
                                case 0:
                                    return null === (e = document.getElementById(t)) ? [3, 3] : ((0, A.unmountComponentAtNode)(e), s ? [4, dl.translations.queryAndOverwriteResourcesForNamespace(ci.feature, yi)] : [3, 2]);
                                case 1:
                                    if ((f = m.sent()).isError) return console.error("Two-Step Verification:", "Got error code " + ((null === (v = f.error) || void 0 === v ? void 0 : v.toString()) || "null") + " loading translations"), [2, !1];
                                    m.label = 2;
                                case 2:
                                    return h = new il(r, n), y = new ul(a, o, dl), (0, A.render)(w().createElement(al, {
                                        userId: n,
                                        challengeId: r,
                                        actionType: a,
                                        renderInline: i,
                                        shouldModifyBrowserHistory: l || !1,
                                        shouldShowRememberDeviceCheckbox: u,
                                        eventService: h,
                                        metricsService: y,
                                        requestService: dl,
                                        onChallengeCompleted: c,
                                        onChallengeInvalidated: d,
                                        onModalChallengeAbandoned: p
                                    }), e), h.sendChallengeInitializedEvent(), y.fireInitializedEvent(), [2, !0];
                                case 3:
                                    return [2, !1]
                            }
                        }))
                    }))
                },
                fl = "Generic Challenge:";
            ! function(e) {
                e.CAPTCHA = "captcha", e.FORCE_AUTHENTICATOR = "forceauthenticator", e.TWO_STEP_VERIFICATION = "twostepverification", e.SECURITY_QUESTIONS = "securityquestions", e.REAUTHENTICATION = "reauthentication", e.PROOF_OF_WORK = "proofofwork"
            }(Si || (Si = {}));
            var hl, yl = Si;
            ! function(e) {
                e.UNKNOWN = "unknown", e.ABANDONED = "abandoned", e.INVALIDATED = "invalidated"
            }(hl || (hl = {}));
            var vl = function(e, t) {
                return (vl = Object.setPrototypeOf || {
                        __proto__: []
                    }
                    instanceof Array && function(e, t) {
                        e.__proto__ = t
                    } || function(e, t) {
                        for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n])
                    })(e, t)
            };

            function ml(e, t) {
                if ("function" != typeof t && null !== t) throw new TypeError("Class extends value " + String(t) + " is not a constructor or null");

                function n() {
                    this.constructor = e
                }
                vl(e, t), e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n)
            }
            var El, gl = function() {
                return (gl = Object.assign || function(e) {
                    for (var t, n = 1, r = arguments.length; n < r; n++)
                        for (var o in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
                    return e
                }).apply(this, arguments)
            };

            function bl(e, t, n, r) {
                return new(n || (n = Promise))((function(o, a) {
                    function i(e) {
                        try {
                            u(r.next(e))
                        } catch (e) {
                            a(e)
                        }
                    }

                    function l(e) {
                        try {
                            u(r.throw(e))
                        } catch (e) {
                            a(e)
                        }
                    }

                    function u(e) {
                        var t;
                        e.done ? o(e.value) : (t = e.value, t instanceof n ? t : new n((function(e) {
                            e(t)
                        }))).then(i, l)
                    }
                    u((r = r.apply(e, t || [])).next())
                }))
            }

            function _l(e, t) {
                var n, r, o, a, i = {
                    label: 0,
                    sent: function() {
                        if (1 & o[0]) throw o[1];
                        return o[1]
                    },
                    trys: [],
                    ops: []
                };
                return a = {
                    next: l(0),
                    throw: l(1),
                    return: l(2)
                }, "function" == typeof Symbol && (a[Symbol.iterator] = function() {
                    return this
                }), a;

                function l(a) {
                    return function(l) {
                        return function(a) {
                            if (n) throw new TypeError("Generator is already executing.");
                            for (; i;) try {
                                if (n = 1, r && (o = 2 & a[0] ? r.return : a[0] ? r.throw || ((o = r.return) && o.call(r), 0) : r.next) && !(o = o.call(r, a[1])).done) return o;
                                switch (r = 0, o && (a = [2 & a[0], o.value]), a[0]) {
                                    case 0:
                                    case 1:
                                        o = a;
                                        break;
                                    case 4:
                                        return i.label++, {
                                            value: a[1],
                                            done: !1
                                        };
                                    case 5:
                                        i.label++, r = a[1], a = [0];
                                        continue;
                                    case 7:
                                        a = i.ops.pop(), i.trys.pop();
                                        continue;
                                    default:
                                        if (!(o = i.trys, (o = o.length > 0 && o[o.length - 1]) || 6 !== a[0] && 2 !== a[0])) {
                                            i = 0;
                                            continue
                                        }
                                        if (3 === a[0] && (!o || a[1] > o[0] && a[1] < o[3])) {
                                            i.label = a[1];
                                            break
                                        }
                                        if (6 === a[0] && i.label < o[1]) {
                                            i.label = o[1], o = a;
                                            break
                                        }
                                        if (o && i.label < o[2]) {
                                            i.label = o[2], i.ops.push(a);
                                            break
                                        }
                                        o[2] && i.ops.pop(), i.trys.pop();
                                        continue
                                }
                                a = t.call(e, i)
                            } catch (e) {
                                a = [6, e], r = 0
                            } finally {
                                n = o = 0
                            }
                            if (5 & a[0]) throw a[1];
                            return {
                                value: a[0] ? a[1] : void 0,
                                done: !0
                            }
                        }([a, l])
                    }
                }
            }

            function Cl(e) {
                var t = "function" == typeof Symbol && Symbol.iterator,
                    n = t && e[t],
                    r = 0;
                if (n) return n.call(e);
                if (e && "number" == typeof e.length) return {
                    next: function() {
                        return e && r >= e.length && (e = void 0), {
                            value: e && e[r++],
                            done: !e
                        }
                    }
                };
                throw new TypeError(t ? "Object is not iterable." : "Symbol.iterator is not defined.")
            }

            function Sl(e, t) {
                var n = "function" == typeof Symbol && e[Symbol.iterator];
                if (!n) return e;
                var r, o, a = n.call(e),
                    i = [];
                try {
                    for (;
                        (void 0 === t || t-- > 0) && !(r = a.next()).done;) i.push(r.value)
                } catch (e) {
                    o = {
                        error: e
                    }
                } finally {
                    try {
                        r && !r.done && (n = a.return) && n.call(a)
                    } finally {
                        if (o) throw o.error
                    }
                }
                return i
            }

            function Tl() {
                for (var e = [], t = 0; t < arguments.length; t++) e = e.concat(Sl(arguments[t]));
                return e
            }! function(e) {
                e.assertNever = function(e) {
                    throw new Error
                }, e.arrayToEnum = function(e) {
                    var t, n, r = {};
                    try {
                        for (var o = Cl(e), a = o.next(); !a.done; a = o.next()) {
                            var i = a.value;
                            r[i] = i
                        }
                    } catch (e) {
                        t = {
                            error: e
                        }
                    } finally {
                        try {
                            a && !a.done && (n = o.return) && n.call(o)
                        } finally {
                            if (t) throw t.error
                        }
                    }
                    return r
                }, e.getValidEnumValues = function(t) {
                    var n, r, o = e.objectKeys(t).filter((function(e) {
                            return "number" != typeof t[t[e]]
                        })),
                        a = {};
                    try {
                        for (var i = Cl(o), l = i.next(); !l.done; l = i.next()) {
                            var u = l.value;
                            a[u] = t[u]
                        }
                    } catch (e) {
                        n = {
                            error: e
                        }
                    } finally {
                        try {
                            l && !l.done && (r = i.return) && r.call(i)
                        } finally {
                            if (n) throw n.error
                        }
                    }
                    return e.objectValues(a)
                }, e.objectValues = function(t) {
                    return e.objectKeys(t).map((function(e) {
                        return t[e]
                    }))
                }, e.objectKeys = "function" == typeof Object.keys ? function(e) {
                    return Object.keys(e)
                } : function(e) {
                    var t = [];
                    for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.push(n);
                    return t
                }, e.find = function(e, t) {
                    var n, r;
                    try {
                        for (var o = Cl(e), a = o.next(); !a.done; a = o.next()) {
                            var i = a.value;
                            if (t(i)) return i
                        }
                    } catch (e) {
                        n = {
                            error: e
                        }
                    } finally {
                        try {
                            a && !a.done && (r = o.return) && r.call(o)
                        } finally {
                            if (n) throw n.error
                        }
                    }
                }, e.isInteger = "function" == typeof Number.isInteger ? function(e) {
                    return Number.isInteger(e)
                } : function(e) {
                    return "number" == typeof e && isFinite(e) && Math.floor(e) === e
                }, e.joinValues = function(e, t) {
                    return void 0 === t && (t = " | "), e.map((function(e) {
                        return "string" == typeof e ? "'" + e + "'" : e
                    })).join(t)
                }
            }(El || (El = {}));
            var Il = El.arrayToEnum(["string", "nan", "number", "integer", "float", "boolean", "date", "bigint", "symbol", "function", "undefined", "null", "array", "object", "unknown", "promise", "void", "never", "map", "set"]),
                Nl = function(e) {
                    switch (typeof e) {
                        case "undefined":
                            return Il.undefined;
                        case "string":
                            return Il.string;
                        case "number":
                            return isNaN(e) ? Il.nan : Il.number;
                        case "boolean":
                            return Il.boolean;
                        case "function":
                            return Il.function;
                        case "bigint":
                            return Il.bigint;
                        case "object":
                            return Array.isArray(e) ? Il.array : null === e ? Il.null : e.then && "function" == typeof e.then && e.catch && "function" == typeof e.catch ? Il.promise : "undefined" != typeof Map && e instanceof Map ? Il.map : "undefined" != typeof Set && e instanceof Set ? Il.set : "undefined" != typeof Date && e instanceof Date ? Il.date : Il.object;
                        default:
                            return Il.unknown
                    }
                },
                wl = El.arrayToEnum(["invalid_type", "invalid_literal", "custom", "invalid_union", "invalid_union_discriminator", "invalid_enum_value", "unrecognized_keys", "invalid_arguments", "invalid_return_type", "invalid_date", "invalid_string", "too_small", "too_big", "invalid_intersection_types", "not_multiple_of"]),
                Al = function(e) {
                    function t(t) {
                        var n = this.constructor,
                            r = e.call(this) || this;
                        r.issues = [], r.addIssue = function(e) {
                            r.issues = Tl(r.issues, [e])
                        }, r.addIssues = function(e) {
                            void 0 === e && (e = []), r.issues = Tl(r.issues, e)
                        };
                        var o = n.prototype;
                        return Object.setPrototypeOf ? Object.setPrototypeOf(r, o) : r.__proto__ = o, r.name = "ZodError", r.issues = t, r
                    }
                    return ml(t, e), Object.defineProperty(t.prototype, "errors", {
                        get: function() {
                            return this.issues
                        },
                        enumerable: !1,
                        configurable: !0
                    }), t.prototype.format = function(e) {
                        var t = e || function(e) {
                                return e.message
                            },
                            n = {
                                _errors: []
                            },
                            r = function(e) {
                                var o, a;
                                try {
                                    for (var i = Cl(e.issues), l = i.next(); !l.done; l = i.next()) {
                                        var u = l.value;
                                        if ("invalid_union" === u.code) u.unionErrors.map(r);
                                        else if ("invalid_return_type" === u.code) r(u.returnTypeError);
                                        else if ("invalid_arguments" === u.code) r(u.argumentsError);
                                        else if (0 === u.path.length) n._errors.push(t(u));
                                        else
                                            for (var s = n, c = 0; c < u.path.length;) {
                                                var d = u.path[c];
                                                c === u.path.length - 1 ? (s[d] = s[d] || {
                                                    _errors: []
                                                }, s[d]._errors.push(t(u))) : s[d] = s[d] || {
                                                    _errors: []
                                                }, s = s[d], c++
                                            }
                                    }
                                } catch (e) {
                                    o = {
                                        error: e
                                    }
                                } finally {
                                    try {
                                        l && !l.done && (a = i.return) && a.call(i)
                                    } finally {
                                        if (o) throw o.error
                                    }
                                }
                            };
                        return r(this), n
                    }, t.prototype.toString = function() {
                        return this.message
                    }, Object.defineProperty(t.prototype, "message", {
                        get: function() {
                            return JSON.stringify(this.issues, null, 2)
                        },
                        enumerable: !1,
                        configurable: !0
                    }), Object.defineProperty(t.prototype, "isEmpty", {
                        get: function() {
                            return 0 === this.issues.length
                        },
                        enumerable: !1,
                        configurable: !0
                    }), t.prototype.flatten = function(e) {
                        var t, n;
                        void 0 === e && (e = function(e) {
                            return e.message
                        });
                        var r = {},
                            o = [];
                        try {
                            for (var a = Cl(this.issues), i = a.next(); !i.done; i = a.next()) {
                                var l = i.value;
                                l.path.length > 0 ? (r[l.path[0]] = r[l.path[0]] || [], r[l.path[0]].push(e(l))) : o.push(e(l))
                            }
                        } catch (e) {
                            t = {
                                error: e
                            }
                        } finally {
                            try {
                                i && !i.done && (n = a.return) && n.call(a)
                            } finally {
                                if (t) throw t.error
                            }
                        }
                        return {
                            formErrors: o,
                            fieldErrors: r
                        }
                    }, Object.defineProperty(t.prototype, "formErrors", {
                        get: function() {
                            return this.flatten()
                        },
                        enumerable: !1,
                        configurable: !0
                    }), t.create = function(e) {
                        return new t(e)
                    }, t
                }(Error),
                Ol = function(e, t) {
                    var n;
                    switch (e.code) {
                        case wl.invalid_type:
                            n = e.received === Il.undefined ? "Required" : "Expected " + e.expected + ", received " + e.received;
                            break;
                        case wl.invalid_literal:
                            n = "Invalid literal value, expected " + JSON.stringify(e.expected);
                            break;
                        case wl.unrecognized_keys:
                            n = "Unrecognized key(s) in object: " + El.joinValues(e.keys, ", ");
                            break;
                        case wl.invalid_union:
                            n = "Invalid input";
                            break;
                        case wl.invalid_union_discriminator:
                            n = "Invalid discriminator value. Expected " + El.joinValues(e.options);
                            break;
                        case wl.invalid_enum_value:
                            n = "Invalid enum value. Expected " + El.joinValues(e.options) + ", received '" + e.received + "'";
                            break;
                        case wl.invalid_arguments:
                            n = "Invalid function arguments";
                            break;
                        case wl.invalid_return_type:
                            n = "Invalid function return type";
                            break;
                        case wl.invalid_date:
                            n = "Invalid date";
                            break;
                        case wl.invalid_string:
                            n = "regex" !== e.validation ? "Invalid " + e.validation : "Invalid";
                            break;
                        case wl.too_small:
                            n = "array" === e.type ? "Array must contain " + (e.inclusive ? "at least" : "more than") + " " + e.minimum + " element(s)" : "string" === e.type ? "String must contain " + (e.inclusive ? "at least" : "over") + " " + e.minimum + " character(s)" : "number" === e.type ? "Number must be greater than " + (e.inclusive ? "or equal to " : "") + e.minimum : "Invalid input";
                            break;
                        case wl.too_big:
                            n = "array" === e.type ? "Array must contain " + (e.inclusive ? "at most" : "less than") + " " + e.maximum + " element(s)" : "string" === e.type ? "String must contain " + (e.inclusive ? "at most" : "under") + " " + e.maximum + " character(s)" : "number" === e.type ? "Number must be less than " + (e.inclusive ? "or equal to " : "") + e.maximum : "Invalid input";
                            break;
                        case wl.custom:
                            n = "Invalid input";
                            break;
                        case wl.invalid_intersection_types:
                            n = "Intersection results could not be merged";
                            break;
                        case wl.not_multiple_of:
                            n = "Number must be a multiple of " + e.multipleOf;
                            break;
                        default:
                            n = t.defaultError, El.assertNever(e)
                    }
                    return {
                        message: n
                    }
                },
                Dl = Ol,
                Ll = function(e) {
                    var t, n, r = e.data,
                        o = e.path,
                        a = e.errorMaps,
                        i = e.issueData,
                        l = Tl(o, i.path || []),
                        u = gl(gl({}, i), {
                            path: l
                        }),
                        s = "",
                        c = a.filter((function(e) {
                            return !!e
                        })).slice().reverse();
                    try {
                        for (var d = Cl(c), p = d.next(); !p.done; p = d.next()) {
                            s = (0, p.value)(u, {
                                data: r,
                                defaultError: s
                            }).message
                        }
                    } catch (e) {
                        t = {
                            error: e
                        }
                    } finally {
                        try {
                            p && !p.done && (n = d.return) && n.call(d)
                        } finally {
                            if (t) throw t.error
                        }
                    }
                    return gl(gl({}, i), {
                        path: l,
                        message: i.message || s
                    })
                };

            function xl(e, t) {
                var n = Ll({
                    issueData: t,
                    data: e.data,
                    path: e.path,
                    errorMaps: [e.common.contextualErrorMap, e.schemaErrorMap, Dl, Ol].filter((function(e) {
                        return !!e
                    }))
                });
                e.common.issues.push(n)
            }
            var Pl, Rl = function() {
                    function e() {
                        this.value = "valid"
                    }
                    return e.prototype.dirty = function() {
                        "valid" === this.value && (this.value = "dirty")
                    }, e.prototype.abort = function() {
                        "aborted" !== this.value && (this.value = "aborted")
                    }, e.mergeArray = function(e, t) {
                        var n, r, o = [];
                        try {
                            for (var a = Cl(t), i = a.next(); !i.done; i = a.next()) {
                                var l = i.value;
                                if ("aborted" === l.status) return Ml;
                                "dirty" === l.status && e.dirty(), o.push(l.value)
                            }
                        } catch (e) {
                            n = {
                                error: e
                            }
                        } finally {
                            try {
                                i && !i.done && (r = a.return) && r.call(a)
                            } finally {
                                if (n) throw n.error
                            }
                        }
                        return {
                            status: e.value,
                            value: o
                        }
                    }, e.mergeObjectAsync = function(t, n) {
                        return bl(this, void 0, void 0, (function() {
                            var r, o, a, i, l, u, s, c, d, p;
                            return _l(this, (function(f) {
                                switch (f.label) {
                                    case 0:
                                        r = [], f.label = 1;
                                    case 1:
                                        f.trys.push([1, 7, 8, 9]), o = Cl(n), a = o.next(), f.label = 2;
                                    case 2:
                                        return a.done ? [3, 6] : (i = a.value, u = (l = r).push, p = {}, [4, i.key]);
                                    case 3:
                                        return p.key = f.sent(), [4, i.value];
                                    case 4:
                                        u.apply(l, [(p.value = f.sent(), p)]), f.label = 5;
                                    case 5:
                                        return a = o.next(), [3, 2];
                                    case 6:
                                        return [3, 9];
                                    case 7:
                                        return s = f.sent(), c = {
                                            error: s
                                        }, [3, 9];
                                    case 8:
                                        try {
                                            a && !a.done && (d = o.return) && d.call(o)
                                        } finally {
                                            if (c) throw c.error
                                        }
                                        return [7];
                                    case 9:
                                        return [2, e.mergeObjectSync(t, r)]
                                }
                            }))
                        }))
                    }, e.mergeObjectSync = function(e, t) {
                        var n, r, o = {};
                        try {
                            for (var a = Cl(t), i = a.next(); !i.done; i = a.next()) {
                                var l = i.value,
                                    u = l.key,
                                    s = l.value;
                                if ("aborted" === u.status) return Ml;
                                if ("aborted" === s.status) return Ml;
                                "dirty" === u.status && e.dirty(), "dirty" === s.status && e.dirty(), (void 0 !== s.value || l.alwaysSet) && (o[u.value] = s.value)
                            }
                        } catch (e) {
                            n = {
                                error: e
                            }
                        } finally {
                            try {
                                i && !i.done && (r = a.return) && r.call(a)
                            } finally {
                                if (n) throw n.error
                            }
                        }
                        return {
                            status: e.value,
                            value: o
                        }
                    }, e
                }(),
                Ml = Object.freeze({
                    status: "aborted"
                }),
                kl = function(e) {
                    return {
                        status: "valid",
                        value: e
                    }
                },
                Ul = function(e) {
                    return "aborted" === e.status
                },
                Hl = function(e) {
                    return "dirty" === e.status
                },
                Vl = function(e) {
                    return "valid" === e.status
                },
                Gl = function(e) {
                    return void 0 !== typeof Promise && e instanceof Promise
                };
            ! function(e) {
                e.errToObj = function(e) {
                    return "string" == typeof e ? {
                        message: e
                    } : e || {}
                }, e.toString = function(e) {
                    return "string" == typeof e ? e : null == e ? void 0 : e.message
                }
            }(Pl || (Pl = {}));
            var Wl = function() {
                    function e(e, t, n, r) {
                        this.parent = e, this.data = t, this._path = n, this._key = r
                    }
                    return Object.defineProperty(e.prototype, "path", {
                        get: function() {
                            return this._path.concat(this._key)
                        },
                        enumerable: !1,
                        configurable: !0
                    }), e
                }(),
                Fl = function(e, t) {
                    if (Vl(t)) return {
                        success: !0,
                        data: t.value
                    };
                    if (!e.common.issues.length) throw new Error("Validation failed but no issues detected.");
                    return {
                        success: !1,
                        error: new Al(e.common.issues)
                    }
                };

            function jl(e) {
                if (!e) return {};
                var t = e.errorMap,
                    n = e.invalid_type_error,
                    r = e.required_error,
                    o = e.description;
                if (t && (n || r)) throw new Error('Can\'t use "invalid" or "required" in conjunction with custom error map.');
                if (t) return {
                    errorMap: t,
                    description: o
                };
                return {
                    errorMap: function(t, n) {
                        return "invalid_type" !== t.code ? {
                            message: n.defaultError
                        } : void 0 === n.data && r ? {
                            message: r
                        } : e.invalid_type_error ? {
                            message: e.invalid_type_error
                        } : {
                            message: n.defaultError
                        }
                    },
                    description: o
                }
            }
            var Bl = function() {
                    function e(e) {
                        this.spa = this.safeParseAsync, this.superRefine = this._refinement, this._def = e, this.parse = this.parse.bind(this), this.safeParse = this.safeParse.bind(this), this.parseAsync = this.parseAsync.bind(this), this.safeParseAsync = this.safeParseAsync.bind(this), this.spa = this.spa.bind(this), this.refine = this.refine.bind(this), this.refinement = this.refinement.bind(this), this.superRefine = this.superRefine.bind(this), this.optional = this.optional.bind(this), this.nullable = this.nullable.bind(this), this.nullish = this.nullish.bind(this), this.array = this.array.bind(this), this.promise = this.promise.bind(this), this.or = this.or.bind(this), this.and = this.and.bind(this), this.transform = this.transform.bind(this), this.default = this.default.bind(this), this.describe = this.describe.bind(this), this.isNullable = this.isNullable.bind(this), this.isOptional = this.isOptional.bind(this)
                    }
                    return Object.defineProperty(e.prototype, "description", {
                        get: function() {
                            return this._def.description
                        },
                        enumerable: !1,
                        configurable: !0
                    }), e.prototype._getType = function(e) {
                        return Nl(e.data)
                    }, e.prototype._getOrReturnCtx = function(e, t) {
                        return t || {
                            common: e.parent.common,
                            data: e.data,
                            parsedType: Nl(e.data),
                            schemaErrorMap: this._def.errorMap,
                            path: e.path,
                            parent: e.parent
                        }
                    }, e.prototype._processInputParams = function(e) {
                        return {
                            status: new Rl,
                            ctx: {
                                common: e.parent.common,
                                data: e.data,
                                parsedType: Nl(e.data),
                                schemaErrorMap: this._def.errorMap,
                                path: e.path,
                                parent: e.parent
                            }
                        }
                    }, e.prototype._parseSync = function(e) {
                        var t = this._parse(e);
                        if (Gl(t)) throw new Error("Synchronous parse encountered promise.");
                        return t
                    }, e.prototype._parseAsync = function(e) {
                        var t = this._parse(e);
                        return Promise.resolve(t)
                    }, e.prototype.parse = function(e, t) {
                        var n = this.safeParse(e, t);
                        if (n.success) return n.data;
                        throw n.error
                    }, e.prototype.safeParse = function(e, t) {
                        var n, r = {
                                common: {
                                    issues: [],
                                    async: null !== (n = null == t ? void 0 : t.async) && void 0 !== n && n,
                                    contextualErrorMap: null == t ? void 0 : t.errorMap
                                },
                                path: (null == t ? void 0 : t.path) || [],
                                schemaErrorMap: this._def.errorMap,
                                parent: null,
                                data: e,
                                parsedType: Nl(e)
                            },
                            o = this._parseSync({
                                data: e,
                                path: r.path,
                                parent: r
                            });
                        return Fl(r, o)
                    }, e.prototype.parseAsync = function(e, t) {
                        return bl(this, void 0, void 0, (function() {
                            var n;
                            return _l(this, (function(r) {
                                switch (r.label) {
                                    case 0:
                                        return [4, this.safeParseAsync(e, t)];
                                    case 1:
                                        if ((n = r.sent()).success) return [2, n.data];
                                        throw n.error
                                }
                            }))
                        }))
                    }, e.prototype.safeParseAsync = function(e, t) {
                        return bl(this, void 0, void 0, (function() {
                            var n, r, o;
                            return _l(this, (function(a) {
                                switch (a.label) {
                                    case 0:
                                        return n = {
                                            common: {
                                                issues: [],
                                                contextualErrorMap: null == t ? void 0 : t.errorMap,
                                                async: !0
                                            },
                                            path: (null == t ? void 0 : t.path) || [],
                                            schemaErrorMap: this._def.errorMap,
                                            parent: null,
                                            data: e,
                                            parsedType: Nl(e)
                                        }, r = this._parse({
                                            data: e,
                                            path: [],
                                            parent: n
                                        }), [4, Gl(r) ? r : Promise.resolve(r)];
                                    case 1:
                                        return o = a.sent(), [2, Fl(n, o)]
                                }
                            }))
                        }))
                    }, e.prototype.refine = function(e, t) {
                        return this._refinement((function(n, r) {
                            var o = e(n),
                                a = function() {
                                    return r.addIssue(gl({
                                        code: wl.custom
                                    }, function(e) {
                                        return "string" == typeof t || void 0 === t ? {
                                            message: t
                                        } : "function" == typeof t ? t(e) : t
                                    }(n)))
                                };
                            return "undefined" != typeof Promise && o instanceof Promise ? o.then((function(e) {
                                return !!e || (a(), !1)
                            })) : !!o || (a(), !1)
                        }))
                    }, e.prototype.refinement = function(e, t) {
                        return this._refinement((function(n, r) {
                            return !!e(n) || (r.addIssue("function" == typeof t ? t(n, r) : t), !1)
                        }))
                    }, e.prototype._refinement = function(e) {
                        return new Nu({
                            schema: this,
                            typeName: Cu.ZodEffects,
                            effect: {
                                type: "refinement",
                                refinement: e
                            }
                        })
                    }, e.prototype.optional = function() {
                        return wu.create(this)
                    }, e.prototype.nullable = function() {
                        return Au.create(this)
                    }, e.prototype.nullish = function() {
                        return this.optional().nullable()
                    }, e.prototype.array = function() {
                        return iu.create(this)
                    }, e.prototype.promise = function() {
                        return Iu.create(this)
                    }, e.prototype.or = function(e) {
                        return cu.create([this, e])
                    }, e.prototype.and = function(e) {
                        return fu.create(this, e)
                    }, e.prototype.transform = function(e) {
                        return new Nu({
                            schema: this,
                            typeName: Cu.ZodEffects,
                            effect: {
                                type: "transform",
                                transform: e
                            }
                        })
                    }, e.prototype.default = function(e) {
                        return new Ou({
                            innerType: this,
                            defaultValue: "function" == typeof e ? e : function() {
                                return e
                            },
                            typeName: Cu.ZodDefault
                        })
                    }, e.prototype.describe = function(e) {
                        return new(0, this.constructor)(gl(gl({}, this._def), {
                            description: e
                        }))
                    }, e.prototype.isOptional = function() {
                        return this.safeParse(void 0).success
                    }, e.prototype.isNullable = function() {
                        return this.safeParse(null).success
                    }, e
                }(),
                ql = /^c[^\s-]{8,}$/i,
                zl = /^([a-f0-9]{8}-[a-f0-9]{4}-[1-5][a-f0-9]{3}-[a-f0-9]{4}-[a-f0-9]{12}|00000000-0000-0000-0000-000000000000)$/i,
                Kl = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i,
                Zl = function(e) {
                    function t() {
                        var n = null !== e && e.apply(this, arguments) || this;
                        return n._regex = function(e, t, r) {
                            return n.refinement((function(t) {
                                return e.test(t)
                            }), gl({
                                validation: t,
                                code: wl.invalid_string
                            }, Pl.errToObj(r)))
                        }, n.nonempty = function(e) {
                            return n.min(1, Pl.errToObj(e))
                        }, n.trim = function() {
                            return new t(gl(gl({}, n._def), {
                                checks: Tl(n._def.checks, [{
                                    kind: "trim"
                                }])
                            }))
                        }, n
                    }
                    return ml(t, e), t.prototype._parse = function(e) {
                        var t, n;
                        if (this._getType(e) !== Il.string) {
                            var r = this._getOrReturnCtx(e);
                            return xl(r, {
                                code: wl.invalid_type,
                                expected: Il.string,
                                received: r.parsedType
                            }), Ml
                        }
                        var o = new Rl,
                            a = void 0;
                        try {
                            for (var i = Cl(this._def.checks), l = i.next(); !l.done; l = i.next()) {
                                var u = l.value;
                                if ("min" === u.kind) e.data.length < u.value && (xl(a = this._getOrReturnCtx(e, a), {
                                    code: wl.too_small,
                                    minimum: u.value,
                                    type: "string",
                                    inclusive: !0,
                                    message: u.message
                                }), o.dirty());
                                else if ("max" === u.kind) e.data.length > u.value && (xl(a = this._getOrReturnCtx(e, a), {
                                    code: wl.too_big,
                                    maximum: u.value,
                                    type: "string",
                                    inclusive: !0,
                                    message: u.message
                                }), o.dirty());
                                else if ("email" === u.kind) Kl.test(e.data) || (xl(a = this._getOrReturnCtx(e, a), {
                                    validation: "email",
                                    code: wl.invalid_string,
                                    message: u.message
                                }), o.dirty());
                                else if ("uuid" === u.kind) zl.test(e.data) || (xl(a = this._getOrReturnCtx(e, a), {
                                    validation: "uuid",
                                    code: wl.invalid_string,
                                    message: u.message
                                }), o.dirty());
                                else if ("cuid" === u.kind) ql.test(e.data) || (xl(a = this._getOrReturnCtx(e, a), {
                                    validation: "cuid",
                                    code: wl.invalid_string,
                                    message: u.message
                                }), o.dirty());
                                else if ("url" === u.kind) try {
                                    new URL(e.data)
                                } catch (t) {
                                    xl(a = this._getOrReturnCtx(e, a), {
                                        validation: "url",
                                        code: wl.invalid_string,
                                        message: u.message
                                    }), o.dirty()
                                } else if ("regex" === u.kind) {
                                    u.regex.lastIndex = 0, u.regex.test(e.data) || (xl(a = this._getOrReturnCtx(e, a), {
                                        validation: "regex",
                                        code: wl.invalid_string,
                                        message: u.message
                                    }), o.dirty())
                                } else "trim" === u.kind ? e.data = e.data.trim() : El.assertNever(u)
                            }
                        } catch (e) {
                            t = {
                                error: e
                            }
                        } finally {
                            try {
                                l && !l.done && (n = i.return) && n.call(i)
                            } finally {
                                if (t) throw t.error
                            }
                        }
                        return {
                            status: o.value,
                            value: e.data
                        }
                    }, t.prototype._addCheck = function(e) {
                        return new t(gl(gl({}, this._def), {
                            checks: Tl(this._def.checks, [e])
                        }))
                    }, t.prototype.email = function(e) {
                        return this._addCheck(gl({
                            kind: "email"
                        }, Pl.errToObj(e)))
                    }, t.prototype.url = function(e) {
                        return this._addCheck(gl({
                            kind: "url"
                        }, Pl.errToObj(e)))
                    }, t.prototype.uuid = function(e) {
                        return this._addCheck(gl({
                            kind: "uuid"
                        }, Pl.errToObj(e)))
                    }, t.prototype.cuid = function(e) {
                        return this._addCheck(gl({
                            kind: "cuid"
                        }, Pl.errToObj(e)))
                    }, t.prototype.regex = function(e, t) {
                        return this._addCheck(gl({
                            kind: "regex",
                            regex: e
                        }, Pl.errToObj(t)))
                    }, t.prototype.min = function(e, t) {
                        return this._addCheck(gl({
                            kind: "min",
                            value: e
                        }, Pl.errToObj(t)))
                    }, t.prototype.max = function(e, t) {
                        return this._addCheck(gl({
                            kind: "max",
                            value: e
                        }, Pl.errToObj(t)))
                    }, t.prototype.length = function(e, t) {
                        return this.min(e, t).max(e, t)
                    }, Object.defineProperty(t.prototype, "isEmail", {
                        get: function() {
                            return !!this._def.checks.find((function(e) {
                                return "email" === e.kind
                            }))
                        },
                        enumerable: !1,
                        configurable: !0
                    }), Object.defineProperty(t.prototype, "isURL", {
                        get: function() {
                            return !!this._def.checks.find((function(e) {
                                return "url" === e.kind
                            }))
                        },
                        enumerable: !1,
                        configurable: !0
                    }), Object.defineProperty(t.prototype, "isUUID", {
                        get: function() {
                            return !!this._def.checks.find((function(e) {
                                return "uuid" === e.kind
                            }))
                        },
                        enumerable: !1,
                        configurable: !0
                    }), Object.defineProperty(t.prototype, "isCUID", {
                        get: function() {
                            return !!this._def.checks.find((function(e) {
                                return "cuid" === e.kind
                            }))
                        },
                        enumerable: !1,
                        configurable: !0
                    }), Object.defineProperty(t.prototype, "minLength", {
                        get: function() {
                            var e = -1 / 0;
                            return this._def.checks.map((function(t) {
                                "min" === t.kind && (null === e || t.value > e) && (e = t.value)
                            })), e
                        },
                        enumerable: !1,
                        configurable: !0
                    }), Object.defineProperty(t.prototype, "maxLength", {
                        get: function() {
                            var e = null;
                            return this._def.checks.map((function(t) {
                                "max" === t.kind && (null === e || t.value < e) && (e = t.value)
                            })), e
                        },
                        enumerable: !1,
                        configurable: !0
                    }), t.create = function(e) {
                        return new t(gl({
                            checks: [],
                            typeName: Cu.ZodString
                        }, jl(e)))
                    }, t
                }(Bl);
            var Yl, $l = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.min = t.gte, t.max = t.lte, t.step = t.multipleOf, t
                    }
                    return ml(t, e), t.prototype._parse = function(e) {
                        var t, n;
                        if (this._getType(e) !== Il.number) {
                            var r = this._getOrReturnCtx(e);
                            return xl(r, {
                                code: wl.invalid_type,
                                expected: Il.number,
                                received: r.parsedType
                            }), Ml
                        }
                        var o, a, i, l, u, s = void 0,
                            c = new Rl;
                        try {
                            for (var d = Cl(this._def.checks), p = d.next(); !p.done; p = d.next()) {
                                var f = p.value;
                                if ("int" === f.kind) El.isInteger(e.data) || (xl(s = this._getOrReturnCtx(e, s), {
                                    code: wl.invalid_type,
                                    expected: "integer",
                                    received: "float",
                                    message: f.message
                                }), c.dirty());
                                else if ("min" === f.kind) {
                                    (f.inclusive ? e.data < f.value : e.data <= f.value) && (xl(s = this._getOrReturnCtx(e, s), {
                                        code: wl.too_small,
                                        minimum: f.value,
                                        type: "number",
                                        inclusive: f.inclusive,
                                        message: f.message
                                    }), c.dirty())
                                } else if ("max" === f.kind) {
                                    (f.inclusive ? e.data > f.value : e.data >= f.value) && (xl(s = this._getOrReturnCtx(e, s), {
                                        code: wl.too_big,
                                        maximum: f.value,
                                        type: "number",
                                        inclusive: f.inclusive,
                                        message: f.message
                                    }), c.dirty())
                                } else "multipleOf" === f.kind ? 0 != (o = e.data, a = f.value, i = void 0, l = void 0, u = void 0, i = (o.toString().split(".")[1] || "").length, l = (a.toString().split(".")[1] || "").length, u = i > l ? i : l, parseInt(o.toFixed(u).replace(".", "")) % parseInt(a.toFixed(u).replace(".", "")) / Math.pow(10, u)) && (xl(s = this._getOrReturnCtx(e, s), {
                                    code: wl.not_multiple_of,
                                    multipleOf: f.value,
                                    message: f.message
                                }), c.dirty()) : El.assertNever(f)
                            }
                        } catch (e) {
                            t = {
                                error: e
                            }
                        } finally {
                            try {
                                p && !p.done && (n = d.return) && n.call(d)
                            } finally {
                                if (t) throw t.error
                            }
                        }
                        return {
                            status: c.value,
                            value: e.data
                        }
                    }, t.prototype.gte = function(e, t) {
                        return this.setLimit("min", e, !0, Pl.toString(t))
                    }, t.prototype.gt = function(e, t) {
                        return this.setLimit("min", e, !1, Pl.toString(t))
                    }, t.prototype.lte = function(e, t) {
                        return this.setLimit("max", e, !0, Pl.toString(t))
                    }, t.prototype.lt = function(e, t) {
                        return this.setLimit("max", e, !1, Pl.toString(t))
                    }, t.prototype.setLimit = function(e, n, r, o) {
                        return new t(gl(gl({}, this._def), {
                            checks: Tl(this._def.checks, [{
                                kind: e,
                                value: n,
                                inclusive: r,
                                message: Pl.toString(o)
                            }])
                        }))
                    }, t.prototype._addCheck = function(e) {
                        return new t(gl(gl({}, this._def), {
                            checks: Tl(this._def.checks, [e])
                        }))
                    }, t.prototype.int = function(e) {
                        return this._addCheck({
                            kind: "int",
                            message: Pl.toString(e)
                        })
                    }, t.prototype.positive = function(e) {
                        return this._addCheck({
                            kind: "min",
                            value: 0,
                            inclusive: !1,
                            message: Pl.toString(e)
                        })
                    }, t.prototype.negative = function(e) {
                        return this._addCheck({
                            kind: "max",
                            value: 0,
                            inclusive: !1,
                            message: Pl.toString(e)
                        })
                    }, t.prototype.nonpositive = function(e) {
                        return this._addCheck({
                            kind: "max",
                            value: 0,
                            inclusive: !0,
                            message: Pl.toString(e)
                        })
                    }, t.prototype.nonnegative = function(e) {
                        return this._addCheck({
                            kind: "min",
                            value: 0,
                            inclusive: !0,
                            message: Pl.toString(e)
                        })
                    }, t.prototype.multipleOf = function(e, t) {
                        return this._addCheck({
                            kind: "multipleOf",
                            value: e,
                            message: Pl.toString(t)
                        })
                    }, Object.defineProperty(t.prototype, "minValue", {
                        get: function() {
                            var e, t, n = null;
                            try {
                                for (var r = Cl(this._def.checks), o = r.next(); !o.done; o = r.next()) {
                                    var a = o.value;
                                    "min" === a.kind && (null === n || a.value > n) && (n = a.value)
                                }
                            } catch (t) {
                                e = {
                                    error: t
                                }
                            } finally {
                                try {
                                    o && !o.done && (t = r.return) && t.call(r)
                                } finally {
                                    if (e) throw e.error
                                }
                            }
                            return n
                        },
                        enumerable: !1,
                        configurable: !0
                    }), Object.defineProperty(t.prototype, "maxValue", {
                        get: function() {
                            var e, t, n = null;
                            try {
                                for (var r = Cl(this._def.checks), o = r.next(); !o.done; o = r.next()) {
                                    var a = o.value;
                                    "max" === a.kind && (null === n || a.value < n) && (n = a.value)
                                }
                            } catch (t) {
                                e = {
                                    error: t
                                }
                            } finally {
                                try {
                                    o && !o.done && (t = r.return) && t.call(r)
                                } finally {
                                    if (e) throw e.error
                                }
                            }
                            return n
                        },
                        enumerable: !1,
                        configurable: !0
                    }), Object.defineProperty(t.prototype, "isInt", {
                        get: function() {
                            return !!this._def.checks.find((function(e) {
                                return "int" === e.kind
                            }))
                        },
                        enumerable: !1,
                        configurable: !0
                    }), t.create = function(e) {
                        return new t(gl({
                            checks: [],
                            typeName: Cu.ZodNumber
                        }, jl(e)))
                    }, t
                }(Bl),
                Ql = function(e) {
                    function t() {
                        return null !== e && e.apply(this, arguments) || this
                    }
                    return ml(t, e), t.prototype._parse = function(e) {
                        if (this._getType(e) !== Il.bigint) {
                            var t = this._getOrReturnCtx(e);
                            return xl(t, {
                                code: wl.invalid_type,
                                expected: Il.bigint,
                                received: t.parsedType
                            }), Ml
                        }
                        return kl(e.data)
                    }, t.create = function(e) {
                        return new t(gl({
                            typeName: Cu.ZodBigInt
                        }, jl(e)))
                    }, t
                }(Bl),
                Jl = function(e) {
                    function t() {
                        return null !== e && e.apply(this, arguments) || this
                    }
                    return ml(t, e), t.prototype._parse = function(e) {
                        if (this._getType(e) !== Il.boolean) {
                            var t = this._getOrReturnCtx(e);
                            return xl(t, {
                                code: wl.invalid_type,
                                expected: Il.boolean,
                                received: t.parsedType
                            }), Ml
                        }
                        return kl(e.data)
                    }, t.create = function(e) {
                        return new t(gl({
                            typeName: Cu.ZodBoolean
                        }, jl(e)))
                    }, t
                }(Bl),
                Xl = function(e) {
                    function t() {
                        return null !== e && e.apply(this, arguments) || this
                    }
                    return ml(t, e), t.prototype._parse = function(e) {
                        var t;
                        return this._getType(e) !== Il.date ? (xl(t = this._getOrReturnCtx(e), {
                            code: wl.invalid_type,
                            expected: Il.date,
                            received: t.parsedType
                        }), Ml) : isNaN(e.data.getTime()) ? (xl(t = this._getOrReturnCtx(e), {
                            code: wl.invalid_date
                        }), Ml) : {
                            status: "valid",
                            value: new Date(e.data.getTime())
                        }
                    }, t.create = function(e) {
                        return new t(gl({
                            typeName: Cu.ZodDate
                        }, jl(e)))
                    }, t
                }(Bl),
                eu = function(e) {
                    function t() {
                        return null !== e && e.apply(this, arguments) || this
                    }
                    return ml(t, e), t.prototype._parse = function(e) {
                        if (this._getType(e) !== Il.undefined) {
                            var t = this._getOrReturnCtx(e);
                            return xl(t, {
                                code: wl.invalid_type,
                                expected: Il.undefined,
                                received: t.parsedType
                            }), Ml
                        }
                        return kl(e.data)
                    }, t.create = function(e) {
                        return new t(gl({
                            typeName: Cu.ZodUndefined
                        }, jl(e)))
                    }, t
                }(Bl),
                tu = function(e) {
                    function t() {
                        return null !== e && e.apply(this, arguments) || this
                    }
                    return ml(t, e), t.prototype._parse = function(e) {
                        if (this._getType(e) !== Il.null) {
                            var t = this._getOrReturnCtx(e);
                            return xl(t, {
                                code: wl.invalid_type,
                                expected: Il.null,
                                received: t.parsedType
                            }), Ml
                        }
                        return kl(e.data)
                    }, t.create = function(e) {
                        return new t(gl({
                            typeName: Cu.ZodNull
                        }, jl(e)))
                    }, t
                }(Bl),
                nu = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t._any = !0, t
                    }
                    return ml(t, e), t.prototype._parse = function(e) {
                        return kl(e.data)
                    }, t.create = function(e) {
                        return new t(gl({
                            typeName: Cu.ZodAny
                        }, jl(e)))
                    }, t
                }(Bl),
                ru = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t._unknown = !0, t
                    }
                    return ml(t, e), t.prototype._parse = function(e) {
                        return kl(e.data)
                    }, t.create = function(e) {
                        return new t(gl({
                            typeName: Cu.ZodUnknown
                        }, jl(e)))
                    }, t
                }(Bl),
                ou = function(e) {
                    function t() {
                        return null !== e && e.apply(this, arguments) || this
                    }
                    return ml(t, e), t.prototype._parse = function(e) {
                        var t = this._getOrReturnCtx(e);
                        return xl(t, {
                            code: wl.invalid_type,
                            expected: Il.never,
                            received: t.parsedType
                        }), Ml
                    }, t.create = function(e) {
                        return new t(gl({
                            typeName: Cu.ZodNever
                        }, jl(e)))
                    }, t
                }(Bl),
                au = function(e) {
                    function t() {
                        return null !== e && e.apply(this, arguments) || this
                    }
                    return ml(t, e), t.prototype._parse = function(e) {
                        if (this._getType(e) !== Il.undefined) {
                            var t = this._getOrReturnCtx(e);
                            return xl(t, {
                                code: wl.invalid_type,
                                expected: Il.void,
                                received: t.parsedType
                            }), Ml
                        }
                        return kl(e.data)
                    }, t.create = function(e) {
                        return new t(gl({
                            typeName: Cu.ZodVoid
                        }, jl(e)))
                    }, t
                }(Bl),
                iu = function(e) {
                    function t() {
                        return null !== e && e.apply(this, arguments) || this
                    }
                    return ml(t, e), t.prototype._parse = function(e) {
                        var t = this._processInputParams(e),
                            n = t.ctx,
                            r = t.status,
                            o = this._def;
                        if (n.parsedType !== Il.array) return xl(n, {
                            code: wl.invalid_type,
                            expected: Il.array,
                            received: n.parsedType
                        }), Ml;
                        if (null !== o.minLength && n.data.length < o.minLength.value && (xl(n, {
                                code: wl.too_small,
                                minimum: o.minLength.value,
                                type: "array",
                                inclusive: !0,
                                message: o.minLength.message
                            }), r.dirty()), null !== o.maxLength && n.data.length > o.maxLength.value && (xl(n, {
                                code: wl.too_big,
                                maximum: o.maxLength.value,
                                type: "array",
                                inclusive: !0,
                                message: o.maxLength.message
                            }), r.dirty()), n.common.async) return Promise.all(n.data.map((function(e, t) {
                            return o.type._parseAsync(new Wl(n, e, n.path, t))
                        }))).then((function(e) {
                            return Rl.mergeArray(r, e)
                        }));
                        var a = n.data.map((function(e, t) {
                            return o.type._parseSync(new Wl(n, e, n.path, t))
                        }));
                        return Rl.mergeArray(r, a)
                    }, Object.defineProperty(t.prototype, "element", {
                        get: function() {
                            return this._def.type
                        },
                        enumerable: !1,
                        configurable: !0
                    }), t.prototype.min = function(e, n) {
                        return new t(gl(gl({}, this._def), {
                            minLength: {
                                value: e,
                                message: Pl.toString(n)
                            }
                        }))
                    }, t.prototype.max = function(e, n) {
                        return new t(gl(gl({}, this._def), {
                            maxLength: {
                                value: e,
                                message: Pl.toString(n)
                            }
                        }))
                    }, t.prototype.length = function(e, t) {
                        return this.min(e, t).max(e, t)
                    }, t.prototype.nonempty = function(e) {
                        return this.min(1, e)
                    }, t.create = function(e, n) {
                        return new t(gl({
                            type: e,
                            minLength: null,
                            maxLength: null,
                            typeName: Cu.ZodArray
                        }, jl(n)))
                    }, t
                }(Bl);
            ! function(e) {
                e.mergeShapes = function(e, t) {
                    return gl(gl({}, e), t)
                }
            }(Yl || (Yl = {}));
            var lu = function(e) {
                return function(t) {
                    return new su(gl(gl({}, e), {
                        shape: function() {
                            return gl(gl({}, e.shape()), t)
                        }
                    }))
                }
            };

            function uu(e) {
                if (e instanceof su) {
                    var t = {};
                    for (var n in e.shape) {
                        var r = e.shape[n];
                        t[n] = wu.create(uu(r))
                    }
                    return new su(gl(gl({}, e._def), {
                        shape: function() {
                            return t
                        }
                    }))
                }
                return e instanceof iu ? iu.create(uu(e.element)) : e instanceof wu ? wu.create(uu(e.unwrap())) : e instanceof Au ? Au.create(uu(e.unwrap())) : e instanceof hu ? hu.create(e.items.map((function(e) {
                    return uu(e)
                }))) : e
            }
            var su = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t._cached = null, t.nonstrict = t.passthrough, t.augment = lu(t._def), t.extend = lu(t._def), t
                    }
                    return ml(t, e), t.prototype._getCached = function() {
                        if (null !== this._cached) return this._cached;
                        var e = this._def.shape(),
                            t = El.objectKeys(e);
                        return this._cached = {
                            shape: e,
                            keys: t
                        }
                    }, t.prototype._parse = function(e) {
                        var t, n, r, o, a, i, l = this;
                        if (this._getType(e) !== Il.object) {
                            var u = this._getOrReturnCtx(e);
                            return xl(u, {
                                code: wl.invalid_type,
                                expected: Il.object,
                                received: u.parsedType
                            }), Ml
                        }
                        var s = this._processInputParams(e),
                            c = s.status,
                            d = s.ctx,
                            p = this._getCached(),
                            f = p.shape,
                            h = p.keys,
                            y = [];
                        for (var v in d.data) h.includes(v) || y.push(v);
                        var m = [];
                        try {
                            for (var E = Cl(h), g = E.next(); !g.done; g = E.next()) {
                                var b = f[v = g.value],
                                    _ = d.data[v];
                                m.push({
                                    key: {
                                        status: "valid",
                                        value: v
                                    },
                                    value: b._parse(new Wl(d, _, d.path, v)),
                                    alwaysSet: v in d.data
                                })
                            }
                        } catch (e) {
                            t = {
                                error: e
                            }
                        } finally {
                            try {
                                g && !g.done && (n = E.return) && n.call(E)
                            } finally {
                                if (t) throw t.error
                            }
                        }
                        if (this._def.catchall instanceof ou) {
                            var C = this._def.unknownKeys;
                            if ("passthrough" === C) try {
                                    for (var S = Cl(y), T = S.next(); !T.done; T = S.next()) {
                                        v = T.value;
                                        m.push({
                                            key: {
                                                status: "valid",
                                                value: v
                                            },
                                            value: {
                                                status: "valid",
                                                value: d.data[v]
                                            }
                                        })
                                    }
                                } catch (e) {
                                    r = {
                                        error: e
                                    }
                                } finally {
                                    try {
                                        T && !T.done && (o = S.return) && o.call(S)
                                    } finally {
                                        if (r) throw r.error
                                    }
                                } else if ("strict" === C) y.length > 0 && (xl(d, {
                                    code: wl.unrecognized_keys,
                                    keys: y
                                }), c.dirty());
                                else if ("strip" !== C) throw new Error("Internal ZodObject error: invalid unknownKeys value.")
                        } else {
                            var I = this._def.catchall;
                            try {
                                for (var N = Cl(y), w = N.next(); !w.done; w = N.next()) {
                                    v = w.value, _ = d.data[v];
                                    m.push({
                                        key: {
                                            status: "valid",
                                            value: v
                                        },
                                        value: I._parse(new Wl(d, _, d.path, v)),
                                        alwaysSet: v in d.data
                                    })
                                }
                            } catch (e) {
                                a = {
                                    error: e
                                }
                            } finally {
                                try {
                                    w && !w.done && (i = N.return) && i.call(N)
                                } finally {
                                    if (a) throw a.error
                                }
                            }
                        }
                        return d.common.async ? Promise.resolve().then((function() {
                            return bl(l, void 0, void 0, (function() {
                                var e, t, n, r, o, a, i, l, u, s, c;
                                return _l(this, (function(d) {
                                    switch (d.label) {
                                        case 0:
                                            e = [], d.label = 1;
                                        case 1:
                                            d.trys.push([1, 7, 8, 9]), t = Cl(m), n = t.next(), d.label = 2;
                                        case 2:
                                            return n.done ? [3, 6] : [4, (r = n.value).key];
                                        case 3:
                                            return o = d.sent(), i = (a = e).push, c = {
                                                key: o
                                            }, [4, r.value];
                                        case 4:
                                            i.apply(a, [(c.value = d.sent(), c.alwaysSet = r.alwaysSet, c)]), d.label = 5;
                                        case 5:
                                            return n = t.next(), [3, 2];
                                        case 6:
                                            return [3, 9];
                                        case 7:
                                            return l = d.sent(), u = {
                                                error: l
                                            }, [3, 9];
                                        case 8:
                                            try {
                                                n && !n.done && (s = t.return) && s.call(t)
                                            } finally {
                                                if (u) throw u.error
                                            }
                                            return [7];
                                        case 9:
                                            return [2, e]
                                    }
                                }))
                            }))
                        })).then((function(e) {
                            return Rl.mergeObjectSync(c, e)
                        })) : Rl.mergeObjectSync(c, m)
                    }, Object.defineProperty(t.prototype, "shape", {
                        get: function() {
                            return this._def.shape()
                        },
                        enumerable: !1,
                        configurable: !0
                    }), t.prototype.strict = function(e) {
                        var n = this;
                        return Pl.errToObj, new t(gl(gl(gl({}, this._def), {
                            unknownKeys: "strict"
                        }), void 0 !== e ? {
                            errorMap: function(t, r) {
                                var o, a, i, l, u = null !== (i = null === (a = (o = n._def).errorMap) || void 0 === a ? void 0 : a.call(o, t, r).message) && void 0 !== i ? i : r.defaultError;
                                return "unrecognized_keys" === t.code ? {
                                    message: null !== (l = Pl.errToObj(e).message) && void 0 !== l ? l : u
                                } : {
                                    message: u
                                }
                            }
                        } : {}))
                    }, t.prototype.strip = function() {
                        return new t(gl(gl({}, this._def), {
                            unknownKeys: "strip"
                        }))
                    }, t.prototype.passthrough = function() {
                        return new t(gl(gl({}, this._def), {
                            unknownKeys: "passthrough"
                        }))
                    }, t.prototype.setKey = function(e, t) {
                        var n;
                        return this.augment(((n = {})[e] = t, n))
                    }, t.prototype.merge = function(e) {
                        var n = this;
                        return new t({
                            unknownKeys: e._def.unknownKeys,
                            catchall: e._def.catchall,
                            shape: function() {
                                return Yl.mergeShapes(n._def.shape(), e._def.shape())
                            },
                            typeName: Cu.ZodObject
                        })
                    }, t.prototype.catchall = function(e) {
                        return new t(gl(gl({}, this._def), {
                            catchall: e
                        }))
                    }, t.prototype.pick = function(e) {
                        var n = this,
                            r = {};
                        return El.objectKeys(e).map((function(e) {
                            n.shape[e] && (r[e] = n.shape[e])
                        })), new t(gl(gl({}, this._def), {
                            shape: function() {
                                return r
                            }
                        }))
                    }, t.prototype.omit = function(e) {
                        var n = this,
                            r = {};
                        return El.objectKeys(this.shape).map((function(t) {
                            -1 === El.objectKeys(e).indexOf(t) && (r[t] = n.shape[t])
                        })), new t(gl(gl({}, this._def), {
                            shape: function() {
                                return r
                            }
                        }))
                    }, t.prototype.deepPartial = function() {
                        return uu(this)
                    }, t.prototype.partial = function(e) {
                        var n = this,
                            r = {};
                        if (e) return El.objectKeys(this.shape).map((function(t) {
                            -1 === El.objectKeys(e).indexOf(t) ? r[t] = n.shape[t] : r[t] = n.shape[t].optional()
                        })), new t(gl(gl({}, this._def), {
                            shape: function() {
                                return r
                            }
                        }));
                        for (var o in this.shape) {
                            var a = this.shape[o];
                            r[o] = a.optional()
                        }
                        return new t(gl(gl({}, this._def), {
                            shape: function() {
                                return r
                            }
                        }))
                    }, t.prototype.required = function() {
                        var e = {};
                        for (var n in this.shape) {
                            for (var r = this.shape[n]; r instanceof wu;) r = r._def.innerType;
                            e[n] = r
                        }
                        return new t(gl(gl({}, this._def), {
                            shape: function() {
                                return e
                            }
                        }))
                    }, t.create = function(e, n) {
                        return new t(gl({
                            shape: function() {
                                return e
                            },
                            unknownKeys: "strip",
                            catchall: ou.create(),
                            typeName: Cu.ZodObject
                        }, jl(n)))
                    }, t.strictCreate = function(e, n) {
                        return new t(gl({
                            shape: function() {
                                return e
                            },
                            unknownKeys: "strict",
                            catchall: ou.create(),
                            typeName: Cu.ZodObject
                        }, jl(n)))
                    }, t.lazycreate = function(e, n) {
                        return new t(gl({
                            shape: e,
                            unknownKeys: "strip",
                            catchall: ou.create(),
                            typeName: Cu.ZodObject
                        }, jl(n)))
                    }, t
                }(Bl),
                cu = function(e) {
                    function t() {
                        return null !== e && e.apply(this, arguments) || this
                    }
                    return ml(t, e), t.prototype._parse = function(e) {
                        var t, n, r, o = this,
                            a = this._processInputParams(e).ctx,
                            i = this._def.options;
                        if (a.common.async) return Promise.all(i.map((function(e) {
                            return bl(o, void 0, void 0, (function() {
                                var t, n;
                                return _l(this, (function(r) {
                                    switch (r.label) {
                                        case 0:
                                            return t = gl(gl({}, a), {
                                                common: gl(gl({}, a.common), {
                                                    issues: []
                                                }),
                                                parent: null
                                            }), n = {}, [4, e._parseAsync({
                                                data: a.data,
                                                path: a.path,
                                                parent: t
                                            })];
                                        case 1:
                                            return [2, (n.result = r.sent(), n.ctx = t, n)]
                                    }
                                }))
                            }))
                        }))).then((function(e) {
                            var t, n, r, o, i;
                            try {
                                for (var l = Cl(e), u = l.next(); !u.done; u = l.next())
                                    if ("valid" === (d = u.value).result.status) return d.result
                            } catch (e) {
                                t = {
                                    error: e
                                }
                            } finally {
                                try {
                                    u && !u.done && (n = l.return) && n.call(l)
                                } finally {
                                    if (t) throw t.error
                                }
                            }
                            try {
                                for (var s = Cl(e), c = s.next(); !c.done; c = s.next()) {
                                    var d;
                                    if ("dirty" === (d = c.value).result.status) return (i = a.common.issues).push.apply(i, Tl(d.ctx.common.issues)), d.result
                                }
                            } catch (e) {
                                r = {
                                    error: e
                                }
                            } finally {
                                try {
                                    c && !c.done && (o = s.return) && o.call(s)
                                } finally {
                                    if (r) throw r.error
                                }
                            }
                            var p = e.map((function(e) {
                                return new Al(e.ctx.common.issues)
                            }));
                            return xl(a, {
                                code: wl.invalid_union,
                                unionErrors: p
                            }), Ml
                        }));
                        var l = void 0,
                            u = [];
                        try {
                            for (var s = Cl(i), c = s.next(); !c.done; c = s.next()) {
                                var d = c.value,
                                    p = gl(gl({}, a), {
                                        common: gl(gl({}, a.common), {
                                            issues: []
                                        }),
                                        parent: null
                                    }),
                                    f = d._parseSync({
                                        data: a.data,
                                        path: a.path,
                                        parent: p
                                    });
                                if ("valid" === f.status) return f;
                                "dirty" !== f.status || l || (l = {
                                    result: f,
                                    ctx: p
                                }), p.common.issues.length && u.push(p.common.issues)
                            }
                        } catch (e) {
                            t = {
                                error: e
                            }
                        } finally {
                            try {
                                c && !c.done && (n = s.return) && n.call(s)
                            } finally {
                                if (t) throw t.error
                            }
                        }
                        if (l) return (r = a.common.issues).push.apply(r, Tl(l.ctx.common.issues)), l.result;
                        var h = u.map((function(e) {
                            return new Al(e)
                        }));
                        return xl(a, {
                            code: wl.invalid_union,
                            unionErrors: h
                        }), Ml
                    }, Object.defineProperty(t.prototype, "options", {
                        get: function() {
                            return this._def.options
                        },
                        enumerable: !1,
                        configurable: !0
                    }), t.create = function(e, n) {
                        return new t(gl({
                            options: e,
                            typeName: Cu.ZodUnion
                        }, jl(n)))
                    }, t
                }(Bl),
                du = function(e) {
                    function t() {
                        return null !== e && e.apply(this, arguments) || this
                    }
                    return ml(t, e), t.prototype._parse = function(e) {
                        var t = this._processInputParams(e).ctx;
                        if (t.parsedType !== Il.object) return xl(t, {
                            code: wl.invalid_type,
                            expected: Il.object,
                            received: t.parsedType
                        }), Ml;
                        var n = this.discriminator,
                            r = t.data[n],
                            o = this.options.get(r);
                        return o ? t.common.async ? o._parseAsync({
                            data: t.data,
                            path: t.path,
                            parent: t
                        }) : o._parseSync({
                            data: t.data,
                            path: t.path,
                            parent: t
                        }) : (xl(t, {
                            code: wl.invalid_union_discriminator,
                            options: this.validDiscriminatorValues,
                            path: [n]
                        }), Ml)
                    }, Object.defineProperty(t.prototype, "discriminator", {
                        get: function() {
                            return this._def.discriminator
                        },
                        enumerable: !1,
                        configurable: !0
                    }), Object.defineProperty(t.prototype, "validDiscriminatorValues", {
                        get: function() {
                            return Array.from(this.options.keys())
                        },
                        enumerable: !1,
                        configurable: !0
                    }), Object.defineProperty(t.prototype, "options", {
                        get: function() {
                            return this._def.options
                        },
                        enumerable: !1,
                        configurable: !0
                    }), t.create = function(e, n, r) {
                        var o = new Map;
                        try {
                            n.forEach((function(t) {
                                var n = t.shape[e].value;
                                o.set(n, t)
                            }))
                        } catch (e) {
                            throw new Error("The discriminator value could not be extracted from all the provided schemas")
                        }
                        if (o.size !== n.length) throw new Error("Some of the discriminator values are not unique");
                        return new t(gl({
                            typeName: Cu.ZodDiscriminatedUnion,
                            discriminator: e,
                            options: o
                        }, jl(r)))
                    }, t
                }(Bl);

            function pu(e, t) {
                var n, r, o = Nl(e),
                    a = Nl(t);
                if (e === t) return {
                    valid: !0,
                    data: e
                };
                if (o === Il.object && a === Il.object) {
                    var i = El.objectKeys(t),
                        l = El.objectKeys(e).filter((function(e) {
                            return -1 !== i.indexOf(e)
                        })),
                        u = gl(gl({}, e), t);
                    try {
                        for (var s = Cl(l), c = s.next(); !c.done; c = s.next()) {
                            var d = c.value;
                            if (!(h = pu(e[d], t[d])).valid) return {
                                valid: !1
                            };
                            u[d] = h.data
                        }
                    } catch (e) {
                        n = {
                            error: e
                        }
                    } finally {
                        try {
                            c && !c.done && (r = s.return) && r.call(s)
                        } finally {
                            if (n) throw n.error
                        }
                    }
                    return {
                        valid: !0,
                        data: u
                    }
                }
                if (o === Il.array && a === Il.array) {
                    if (e.length !== t.length) return {
                        valid: !1
                    };
                    for (var p = [], f = 0; f < e.length; f++) {
                        var h;
                        if (!(h = pu(e[f], t[f])).valid) return {
                            valid: !1
                        };
                        p.push(h.data)
                    }
                    return {
                        valid: !0,
                        data: p
                    }
                }
                return o === Il.date && a === Il.date && +e == +t ? {
                    valid: !0,
                    data: e
                } : {
                    valid: !1
                }
            }
            var fu = function(e) {
                    function t() {
                        return null !== e && e.apply(this, arguments) || this
                    }
                    return ml(t, e), t.prototype._parse = function(e) {
                        var t = this._processInputParams(e),
                            n = t.status,
                            r = t.ctx,
                            o = function(e, t) {
                                if (Ul(e) || Ul(t)) return Ml;
                                var o = pu(e.value, t.value);
                                return o.valid ? ((Hl(e) || Hl(t)) && n.dirty(), {
                                    status: n.value,
                                    value: o.data
                                }) : (xl(r, {
                                    code: wl.invalid_intersection_types
                                }), Ml)
                            };
                        return r.common.async ? Promise.all([this._def.left._parseAsync({
                            data: r.data,
                            path: r.path,
                            parent: r
                        }), this._def.right._parseAsync({
                            data: r.data,
                            path: r.path,
                            parent: r
                        })]).then((function(e) {
                            var t = Sl(e, 2),
                                n = t[0],
                                r = t[1];
                            return o(n, r)
                        })) : o(this._def.left._parseSync({
                            data: r.data,
                            path: r.path,
                            parent: r
                        }), this._def.right._parseSync({
                            data: r.data,
                            path: r.path,
                            parent: r
                        }))
                    }, t.create = function(e, n, r) {
                        return new t(gl({
                            left: e,
                            right: n,
                            typeName: Cu.ZodIntersection
                        }, jl(r)))
                    }, t
                }(Bl),
                hu = function(e) {
                    function t() {
                        return null !== e && e.apply(this, arguments) || this
                    }
                    return ml(t, e), t.prototype._parse = function(e) {
                        var t = this,
                            n = this._processInputParams(e),
                            r = n.status,
                            o = n.ctx;
                        if (o.parsedType !== Il.array) return xl(o, {
                            code: wl.invalid_type,
                            expected: Il.array,
                            received: o.parsedType
                        }), Ml;
                        if (o.data.length < this._def.items.length) return xl(o, {
                            code: wl.too_small,
                            minimum: this._def.items.length,
                            inclusive: !0,
                            type: "array"
                        }), Ml;
                        !this._def.rest && o.data.length > this._def.items.length && (xl(o, {
                            code: wl.too_big,
                            maximum: this._def.items.length,
                            inclusive: !0,
                            type: "array"
                        }), r.dirty());
                        var a = o.data.map((function(e, n) {
                            var r = t._def.items[n] || t._def.rest;
                            return r ? r._parse(new Wl(o, e, o.path, n)) : null
                        })).filter((function(e) {
                            return !!e
                        }));
                        return o.common.async ? Promise.all(a).then((function(e) {
                            return Rl.mergeArray(r, e)
                        })) : Rl.mergeArray(r, a)
                    }, Object.defineProperty(t.prototype, "items", {
                        get: function() {
                            return this._def.items
                        },
                        enumerable: !1,
                        configurable: !0
                    }), t.prototype.rest = function(e) {
                        return new t(gl(gl({}, this._def), {
                            rest: e
                        }))
                    }, t.create = function(e, n) {
                        return new t(gl({
                            items: e,
                            typeName: Cu.ZodTuple,
                            rest: null
                        }, jl(n)))
                    }, t
                }(Bl),
                yu = function(e) {
                    function t() {
                        return null !== e && e.apply(this, arguments) || this
                    }
                    return ml(t, e), Object.defineProperty(t.prototype, "keySchema", {
                        get: function() {
                            return this._def.keyType
                        },
                        enumerable: !1,
                        configurable: !0
                    }), Object.defineProperty(t.prototype, "valueSchema", {
                        get: function() {
                            return this._def.valueType
                        },
                        enumerable: !1,
                        configurable: !0
                    }), t.prototype._parse = function(e) {
                        var t = this._processInputParams(e),
                            n = t.status,
                            r = t.ctx;
                        if (r.parsedType !== Il.object) return xl(r, {
                            code: wl.invalid_type,
                            expected: Il.object,
                            received: r.parsedType
                        }), Ml;
                        var o = [],
                            a = this._def.keyType,
                            i = this._def.valueType;
                        for (var l in r.data) o.push({
                            key: a._parse(new Wl(r, l, r.path, l)),
                            value: i._parse(new Wl(r, r.data[l], r.path, l))
                        });
                        return r.common.async ? Rl.mergeObjectAsync(n, o) : Rl.mergeObjectSync(n, o)
                    }, Object.defineProperty(t.prototype, "element", {
                        get: function() {
                            return this._def.valueType
                        },
                        enumerable: !1,
                        configurable: !0
                    }), t.create = function(e, n, r) {
                        return new t(n instanceof Bl ? gl({
                            keyType: e,
                            valueType: n,
                            typeName: Cu.ZodRecord
                        }, jl(r)) : gl({
                            keyType: Zl.create(),
                            valueType: e,
                            typeName: Cu.ZodRecord
                        }, jl(n)))
                    }, t
                }(Bl),
                vu = function(e) {
                    function t() {
                        return null !== e && e.apply(this, arguments) || this
                    }
                    return ml(t, e), t.prototype._parse = function(e) {
                        var t, n, r = this,
                            o = this._processInputParams(e),
                            a = o.status,
                            i = o.ctx;
                        if (i.parsedType !== Il.map) return xl(i, {
                            code: wl.invalid_type,
                            expected: Il.map,
                            received: i.parsedType
                        }), Ml;
                        var l = this._def.keyType,
                            u = this._def.valueType,
                            s = Tl(i.data.entries()).map((function(e, t) {
                                var n = Sl(e, 2),
                                    r = n[0],
                                    o = n[1];
                                return {
                                    key: l._parse(new Wl(i, r, i.path, [t, "key"])),
                                    value: u._parse(new Wl(i, o, i.path, [t, "value"]))
                                }
                            }));
                        if (i.common.async) {
                            var c = new Map;
                            return Promise.resolve().then((function() {
                                return bl(r, void 0, void 0, (function() {
                                    var e, t, n, r, o, i, l, u;
                                    return _l(this, (function(d) {
                                        switch (d.label) {
                                            case 0:
                                                d.trys.push([0, 6, 7, 8]), e = Cl(s), t = e.next(), d.label = 1;
                                            case 1:
                                                return t.done ? [3, 5] : [4, (n = t.value).key];
                                            case 2:
                                                return r = d.sent(), [4, n.value];
                                            case 3:
                                                if (o = d.sent(), "aborted" === r.status || "aborted" === o.status) return [2, Ml];
                                                "dirty" !== r.status && "dirty" !== o.status || a.dirty(), c.set(r.value, o.value), d.label = 4;
                                            case 4:
                                                return t = e.next(), [3, 1];
                                            case 5:
                                                return [3, 8];
                                            case 6:
                                                return i = d.sent(), l = {
                                                    error: i
                                                }, [3, 8];
                                            case 7:
                                                try {
                                                    t && !t.done && (u = e.return) && u.call(e)
                                                } finally {
                                                    if (l) throw l.error
                                                }
                                                return [7];
                                            case 8:
                                                return [2, {
                                                    status: a.value,
                                                    value: c
                                                }]
                                        }
                                    }))
                                }))
                            }))
                        }
                        var d = new Map;
                        try {
                            for (var p = Cl(s), f = p.next(); !f.done; f = p.next()) {
                                var h = f.value,
                                    y = h.key,
                                    v = h.value;
                                if ("aborted" === y.status || "aborted" === v.status) return Ml;
                                "dirty" !== y.status && "dirty" !== v.status || a.dirty(), d.set(y.value, v.value)
                            }
                        } catch (e) {
                            t = {
                                error: e
                            }
                        } finally {
                            try {
                                f && !f.done && (n = p.return) && n.call(p)
                            } finally {
                                if (t) throw t.error
                            }
                        }
                        return {
                            status: a.value,
                            value: d
                        }
                    }, t.create = function(e, n, r) {
                        return new t(gl({
                            valueType: n,
                            keyType: e,
                            typeName: Cu.ZodMap
                        }, jl(r)))
                    }, t
                }(Bl),
                mu = function(e) {
                    function t() {
                        return null !== e && e.apply(this, arguments) || this
                    }
                    return ml(t, e), t.prototype._parse = function(e) {
                        var t = this._processInputParams(e),
                            n = t.status,
                            r = t.ctx;
                        if (r.parsedType !== Il.set) return xl(r, {
                            code: wl.invalid_type,
                            expected: Il.set,
                            received: r.parsedType
                        }), Ml;
                        var o = this._def;
                        null !== o.minSize && r.data.size < o.minSize.value && (xl(r, {
                            code: wl.too_small,
                            minimum: o.minSize.value,
                            type: "set",
                            inclusive: !0,
                            message: o.minSize.message
                        }), n.dirty()), null !== o.maxSize && r.data.size > o.maxSize.value && (xl(r, {
                            code: wl.too_big,
                            maximum: o.maxSize.value,
                            type: "set",
                            inclusive: !0,
                            message: o.maxSize.message
                        }), n.dirty());
                        var a = this._def.valueType;

                        function i(e) {
                            var t, r, o = new Set;
                            try {
                                for (var a = Cl(e), i = a.next(); !i.done; i = a.next()) {
                                    var l = i.value;
                                    if ("aborted" === l.status) return Ml;
                                    "dirty" === l.status && n.dirty(), o.add(l.value)
                                }
                            } catch (e) {
                                t = {
                                    error: e
                                }
                            } finally {
                                try {
                                    i && !i.done && (r = a.return) && r.call(a)
                                } finally {
                                    if (t) throw t.error
                                }
                            }
                            return {
                                status: n.value,
                                value: o
                            }
                        }
                        var l = Tl(r.data.values()).map((function(e, t) {
                            return a._parse(new Wl(r, e, r.path, t))
                        }));
                        return r.common.async ? Promise.all(l).then((function(e) {
                            return i(e)
                        })) : i(l)
                    }, t.prototype.min = function(e, n) {
                        return new t(gl(gl({}, this._def), {
                            minSize: {
                                value: e,
                                message: Pl.toString(n)
                            }
                        }))
                    }, t.prototype.max = function(e, n) {
                        return new t(gl(gl({}, this._def), {
                            maxSize: {
                                value: e,
                                message: Pl.toString(n)
                            }
                        }))
                    }, t.prototype.size = function(e, t) {
                        return this.min(e, t).max(e, t)
                    }, t.prototype.nonempty = function(e) {
                        return this.min(1, e)
                    }, t.create = function(e, n) {
                        return new t(gl({
                            valueType: e,
                            minSize: null,
                            maxSize: null,
                            typeName: Cu.ZodSet
                        }, jl(n)))
                    }, t
                }(Bl),
                Eu = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.validate = t.implement, t
                    }
                    return ml(t, e), t.prototype._parse = function(e) {
                        var t = this,
                            n = this._processInputParams(e).ctx;
                        if (n.parsedType !== Il.function) return xl(n, {
                            code: wl.invalid_type,
                            expected: Il.function,
                            received: n.parsedType
                        }), Ml;

                        function r(e, t) {
                            return Ll({
                                data: e,
                                path: n.path,
                                errorMaps: [n.common.contextualErrorMap, n.schemaErrorMap, Dl, Ol].filter((function(e) {
                                    return !!e
                                })),
                                issueData: {
                                    code: wl.invalid_arguments,
                                    argumentsError: t
                                }
                            })
                        }

                        function o(e, t) {
                            return Ll({
                                data: e,
                                path: n.path,
                                errorMaps: [n.common.contextualErrorMap, n.schemaErrorMap, Dl, Ol].filter((function(e) {
                                    return !!e
                                })),
                                issueData: {
                                    code: wl.invalid_return_type,
                                    returnTypeError: t
                                }
                            })
                        }
                        var a = {
                                errorMap: n.common.contextualErrorMap
                            },
                            i = n.data;
                        return this._def.returns instanceof Iu ? kl((function() {
                            for (var e = [], n = 0; n < arguments.length; n++) e[n] = arguments[n];
                            return bl(t, void 0, void 0, (function() {
                                var t, n, l;
                                return _l(this, (function(u) {
                                    switch (u.label) {
                                        case 0:
                                            return t = new Al([]), [4, this._def.args.parseAsync(e, a).catch((function(n) {
                                                throw t.addIssue(r(e, n)), t
                                            }))];
                                        case 1:
                                            return n = u.sent(), [4, i.apply(void 0, Tl(n))];
                                        case 2:
                                            return l = u.sent(), [4, this._def.returns._def.type.parseAsync(l, a).catch((function(e) {
                                                throw t.addIssue(o(l, e)), t
                                            }))];
                                        case 3:
                                            return [2, u.sent()]
                                    }
                                }))
                            }))
                        })) : kl((function() {
                            for (var e = [], n = 0; n < arguments.length; n++) e[n] = arguments[n];
                            var l = t._def.args.safeParse(e, a);
                            if (!l.success) throw new Al([r(e, l.error)]);
                            var u = i.apply(void 0, Tl(l.data)),
                                s = t._def.returns.safeParse(u, a);
                            if (!s.success) throw new Al([o(u, s.error)]);
                            return s.data
                        }))
                    }, t.prototype.parameters = function() {
                        return this._def.args
                    }, t.prototype.returnType = function() {
                        return this._def.returns
                    }, t.prototype.args = function() {
                        for (var e = [], n = 0; n < arguments.length; n++) e[n] = arguments[n];
                        return new t(gl(gl({}, this._def), {
                            args: hu.create(e).rest(ru.create())
                        }))
                    }, t.prototype.returns = function(e) {
                        return new t(gl(gl({}, this._def), {
                            returns: e
                        }))
                    }, t.prototype.implement = function(e) {
                        return this.parse(e)
                    }, t.prototype.strictImplement = function(e) {
                        return this.parse(e)
                    }, t.create = function(e, n, r) {
                        return new t(gl({
                            args: e ? e.rest(ru.create()) : hu.create([]).rest(ru.create()),
                            returns: n || ru.create(),
                            typeName: Cu.ZodFunction
                        }, jl(r)))
                    }, t
                }(Bl),
                gu = function(e) {
                    function t() {
                        return null !== e && e.apply(this, arguments) || this
                    }
                    return ml(t, e), Object.defineProperty(t.prototype, "schema", {
                        get: function() {
                            return this._def.getter()
                        },
                        enumerable: !1,
                        configurable: !0
                    }), t.prototype._parse = function(e) {
                        var t = this._processInputParams(e).ctx;
                        return this._def.getter()._parse({
                            data: t.data,
                            path: t.path,
                            parent: t
                        })
                    }, t.create = function(e, n) {
                        return new t(gl({
                            getter: e,
                            typeName: Cu.ZodLazy
                        }, jl(n)))
                    }, t
                }(Bl),
                bu = function(e) {
                    function t() {
                        return null !== e && e.apply(this, arguments) || this
                    }
                    return ml(t, e), t.prototype._parse = function(e) {
                        return e.data !== this._def.value ? (xl(this._getOrReturnCtx(e), {
                            code: wl.invalid_literal,
                            expected: this._def.value
                        }), Ml) : {
                            status: "valid",
                            value: e.data
                        }
                    }, Object.defineProperty(t.prototype, "value", {
                        get: function() {
                            return this._def.value
                        },
                        enumerable: !1,
                        configurable: !0
                    }), t.create = function(e, n) {
                        return new t(gl({
                            value: e,
                            typeName: Cu.ZodLiteral
                        }, jl(n)))
                    }, t
                }(Bl);

            function _u(e, t) {
                return new Su(gl({
                    values: e,
                    typeName: Cu.ZodEnum
                }, jl(t)))
            }
            var Cu, Su = function(e) {
                    function t() {
                        return null !== e && e.apply(this, arguments) || this
                    }
                    return ml(t, e), t.prototype._parse = function(e) {
                        if ("string" != typeof e.data) {
                            var t = this._getOrReturnCtx(e),
                                n = this._def.values;
                            return xl(t, {
                                expected: El.joinValues(n),
                                received: t.parsedType,
                                code: wl.invalid_type
                            }), Ml
                        }
                        if (-1 === this._def.values.indexOf(e.data)) {
                            t = this._getOrReturnCtx(e), n = this._def.values;
                            return xl(t, {
                                received: t.data,
                                code: wl.invalid_enum_value,
                                options: n
                            }), Ml
                        }
                        return kl(e.data)
                    }, Object.defineProperty(t.prototype, "options", {
                        get: function() {
                            return this._def.values
                        },
                        enumerable: !1,
                        configurable: !0
                    }), Object.defineProperty(t.prototype, "enum", {
                        get: function() {
                            var e, t, n = {};
                            try {
                                for (var r = Cl(this._def.values), o = r.next(); !o.done; o = r.next()) {
                                    var a = o.value;
                                    n[a] = a
                                }
                            } catch (t) {
                                e = {
                                    error: t
                                }
                            } finally {
                                try {
                                    o && !o.done && (t = r.return) && t.call(r)
                                } finally {
                                    if (e) throw e.error
                                }
                            }
                            return n
                        },
                        enumerable: !1,
                        configurable: !0
                    }), Object.defineProperty(t.prototype, "Values", {
                        get: function() {
                            var e, t, n = {};
                            try {
                                for (var r = Cl(this._def.values), o = r.next(); !o.done; o = r.next()) {
                                    var a = o.value;
                                    n[a] = a
                                }
                            } catch (t) {
                                e = {
                                    error: t
                                }
                            } finally {
                                try {
                                    o && !o.done && (t = r.return) && t.call(r)
                                } finally {
                                    if (e) throw e.error
                                }
                            }
                            return n
                        },
                        enumerable: !1,
                        configurable: !0
                    }), Object.defineProperty(t.prototype, "Enum", {
                        get: function() {
                            var e, t, n = {};
                            try {
                                for (var r = Cl(this._def.values), o = r.next(); !o.done; o = r.next()) {
                                    var a = o.value;
                                    n[a] = a
                                }
                            } catch (t) {
                                e = {
                                    error: t
                                }
                            } finally {
                                try {
                                    o && !o.done && (t = r.return) && t.call(r)
                                } finally {
                                    if (e) throw e.error
                                }
                            }
                            return n
                        },
                        enumerable: !1,
                        configurable: !0
                    }), t.create = _u, t
                }(Bl),
                Tu = function(e) {
                    function t() {
                        return null !== e && e.apply(this, arguments) || this
                    }
                    return ml(t, e), t.prototype._parse = function(e) {
                        var t = El.getValidEnumValues(this._def.values),
                            n = this._getOrReturnCtx(e);
                        if (n.parsedType !== Il.string && n.parsedType !== Il.number) {
                            var r = El.objectValues(t);
                            return xl(n, {
                                expected: El.joinValues(r),
                                received: n.parsedType,
                                code: wl.invalid_type
                            }), Ml
                        }
                        if (-1 === t.indexOf(e.data)) {
                            r = El.objectValues(t);
                            return xl(n, {
                                received: n.data,
                                code: wl.invalid_enum_value,
                                options: r
                            }), Ml
                        }
                        return kl(e.data)
                    }, Object.defineProperty(t.prototype, "enum", {
                        get: function() {
                            return this._def.values
                        },
                        enumerable: !1,
                        configurable: !0
                    }), t.create = function(e, n) {
                        return new t(gl({
                            values: e,
                            typeName: Cu.ZodNativeEnum
                        }, jl(n)))
                    }, t
                }(Bl),
                Iu = function(e) {
                    function t() {
                        return null !== e && e.apply(this, arguments) || this
                    }
                    return ml(t, e), t.prototype._parse = function(e) {
                        var t = this,
                            n = this._processInputParams(e).ctx;
                        if (n.parsedType !== Il.promise && !1 === n.common.async) return xl(n, {
                            code: wl.invalid_type,
                            expected: Il.promise,
                            received: n.parsedType
                        }), Ml;
                        var r = n.parsedType === Il.promise ? n.data : Promise.resolve(n.data);
                        return kl(r.then((function(e) {
                            return t._def.type.parseAsync(e, {
                                path: n.path,
                                errorMap: n.common.contextualErrorMap
                            })
                        })))
                    }, t.create = function(e, n) {
                        return new t(gl({
                            type: e,
                            typeName: Cu.ZodPromise
                        }, jl(n)))
                    }, t
                }(Bl),
                Nu = function(e) {
                    function t() {
                        return null !== e && e.apply(this, arguments) || this
                    }
                    return ml(t, e), t.prototype.innerType = function() {
                        return this._def.schema
                    }, t.prototype._parse = function(e) {
                        var t = this,
                            n = this._processInputParams(e),
                            r = n.status,
                            o = n.ctx,
                            a = this._def.effect || null;
                        if ("preprocess" === a.type) {
                            var i = a.transform(o.data);
                            return o.common.async ? Promise.resolve(i).then((function(e) {
                                return t._def.schema._parseAsync({
                                    data: e,
                                    path: o.path,
                                    parent: o
                                })
                            })) : this._def.schema._parseSync({
                                data: i,
                                path: o.path,
                                parent: o
                            })
                        }
                        var l = {
                            addIssue: function(e) {
                                xl(o, e), e.fatal ? r.abort() : r.dirty()
                            },
                            get path() {
                                return o.path
                            }
                        };
                        if (l.addIssue = l.addIssue.bind(l), "refinement" === a.type) {
                            var u = function(e) {
                                var t = a.refinement(e, l);
                                if (o.common.async) return Promise.resolve(t);
                                if (t instanceof Promise) throw new Error("Async refinement encountered during synchronous parse operation. Use .parseAsync instead.");
                                return e
                            };
                            if (!1 === o.common.async) {
                                var s = this._def.schema._parseSync({
                                    data: o.data,
                                    path: o.path,
                                    parent: o
                                });
                                return "aborted" === s.status ? Ml : ("dirty" === s.status && r.dirty(), u(s.value), {
                                    status: r.value,
                                    value: s.value
                                })
                            }
                            return this._def.schema._parseAsync({
                                data: o.data,
                                path: o.path,
                                parent: o
                            }).then((function(e) {
                                return "aborted" === e.status ? Ml : ("dirty" === e.status && r.dirty(), u(e.value).then((function() {
                                    return {
                                        status: r.value,
                                        value: e.value
                                    }
                                })))
                            }))
                        }
                        if ("transform" === a.type) {
                            if (!1 === o.common.async) {
                                var c = this._def.schema._parseSync({
                                    data: o.data,
                                    path: o.path,
                                    parent: o
                                });
                                if (!Vl(c)) return c;
                                var d = a.transform(c.value, l);
                                if (d instanceof Promise) throw new Error("Asynchronous transform encountered during synchronous parse operation. Use .parseAsync instead.");
                                return {
                                    status: r.value,
                                    value: d
                                }
                            }
                            return this._def.schema._parseAsync({
                                data: o.data,
                                path: o.path,
                                parent: o
                            }).then((function(e) {
                                return Vl(e) ? Promise.resolve(a.transform(e.value, l)).then((function(e) {
                                    return {
                                        status: r.value,
                                        value: e
                                    }
                                })) : e
                            }))
                        }
                        El.assertNever(a)
                    }, t.create = function(e, n, r) {
                        return new t(gl({
                            schema: e,
                            typeName: Cu.ZodEffects,
                            effect: n
                        }, jl(r)))
                    }, t.createWithPreprocess = function(e, n, r) {
                        return new t(gl({
                            schema: n,
                            effect: {
                                type: "preprocess",
                                transform: e
                            },
                            typeName: Cu.ZodEffects
                        }, jl(r)))
                    }, t
                }(Bl),
                wu = function(e) {
                    function t() {
                        return null !== e && e.apply(this, arguments) || this
                    }
                    return ml(t, e), t.prototype._parse = function(e) {
                        return this._getType(e) === Il.undefined ? kl(void 0) : this._def.innerType._parse(e)
                    }, t.prototype.unwrap = function() {
                        return this._def.innerType
                    }, t.create = function(e, n) {
                        return new t(gl({
                            innerType: e,
                            typeName: Cu.ZodOptional
                        }, jl(n)))
                    }, t
                }(Bl),
                Au = function(e) {
                    function t() {
                        return null !== e && e.apply(this, arguments) || this
                    }
                    return ml(t, e), t.prototype._parse = function(e) {
                        return this._getType(e) === Il.null ? kl(null) : this._def.innerType._parse(e)
                    }, t.prototype.unwrap = function() {
                        return this._def.innerType
                    }, t.create = function(e, n) {
                        return new t(gl({
                            innerType: e,
                            typeName: Cu.ZodNullable
                        }, jl(n)))
                    }, t
                }(Bl),
                Ou = function(e) {
                    function t() {
                        return null !== e && e.apply(this, arguments) || this
                    }
                    return ml(t, e), t.prototype._parse = function(e) {
                        var t = this._processInputParams(e).ctx,
                            n = t.data;
                        return t.parsedType === Il.undefined && (n = this._def.defaultValue()), this._def.innerType._parse({
                            data: n,
                            path: t.path,
                            parent: t
                        })
                    }, t.prototype.removeDefault = function() {
                        return this._def.innerType
                    }, t.create = function(e, t) {
                        return new wu(gl({
                            innerType: e,
                            typeName: Cu.ZodOptional
                        }, jl(t)))
                    }, t
                }(Bl),
                Du = function(e) {
                    function t() {
                        return null !== e && e.apply(this, arguments) || this
                    }
                    return ml(t, e), t.prototype._parse = function(e) {
                        if (this._getType(e) !== Il.nan) {
                            var t = this._getOrReturnCtx(e);
                            return xl(t, {
                                code: wl.invalid_type,
                                expected: Il.nan,
                                received: t.parsedType
                            }), Ml
                        }
                        return {
                            status: "valid",
                            value: e.data
                        }
                    }, t.create = function(e) {
                        return new t(gl({
                            typeName: Cu.ZodNaN
                        }, jl(e)))
                    }, t
                }(Bl);
            su.lazycreate;
            ! function(e) {
                e.ZodString = "ZodString", e.ZodNumber = "ZodNumber", e.ZodNaN = "ZodNaN", e.ZodBigInt = "ZodBigInt", e.ZodBoolean = "ZodBoolean", e.ZodDate = "ZodDate", e.ZodUndefined = "ZodUndefined", e.ZodNull = "ZodNull", e.ZodAny = "ZodAny", e.ZodUnknown = "ZodUnknown", e.ZodNever = "ZodNever", e.ZodVoid = "ZodVoid", e.ZodArray = "ZodArray", e.ZodObject = "ZodObject", e.ZodUnion = "ZodUnion", e.ZodDiscriminatedUnion = "ZodDiscriminatedUnion", e.ZodIntersection = "ZodIntersection", e.ZodTuple = "ZodTuple", e.ZodRecord = "ZodRecord", e.ZodMap = "ZodMap", e.ZodSet = "ZodSet", e.ZodFunction = "ZodFunction", e.ZodLazy = "ZodLazy", e.ZodLiteral = "ZodLiteral", e.ZodEnum = "ZodEnum", e.ZodEffects = "ZodEffects", e.ZodNativeEnum = "ZodNativeEnum", e.ZodOptional = "ZodOptional", e.ZodNullable = "ZodNullable", e.ZodDefault = "ZodDefault", e.ZodPromise = "ZodPromise"
            }(Cu || (Cu = {}));
            var Lu, xu, Pu = Zl.create,
                Ru = ($l.create, Du.create, Ql.create, Jl.create),
                Mu = (Xl.create, eu.create, tu.create, nu.create, ru.create, ou.create, au.create, iu.create, su.create),
                ku = (su.strictCreate, cu.create),
                Uu = (du.create, fu.create, hu.create, yu.create, vu.create, mu.create, Eu.create, gu.create, bu.create),
                Hu = (Su.create, Tu.create),
                Vu = (Iu.create, Nu.create, wu.create, Au.create, Nu.createWithPreprocess),
                Gu = Mu({
                    userId: Pu(),
                    challengeId: Pu(),
                    actionType: Hu(Ba),
                    shouldShowRememberDeviceCheckbox: Ru()
                }),
                Wu = Mu({
                    actionType: Hu(Tr),
                    dataExchangeBlob: Pu(),
                    unifiedCaptchaId: Pu()
                }),
                Fu = Mu({
                    userId: Pu(),
                    sessionId: Pu()
                }),
                ju = Mu({}),
                Bu = Mu({}),
                qu = Mu({
                    sessionId: Pu()
                }),
                zu = ((Lu = {})[yl.TWO_STEP_VERIFICATION] = Gu, Lu[yl.CAPTCHA] = Wu, Lu[yl.FORCE_AUTHENTICATOR] = Bu, Lu[yl.SECURITY_QUESTIONS] = Fu, Lu[yl.REAUTHENTICATION] = ju, Lu[yl.PROOF_OF_WORK] = qu, Lu),
                Ku = function() {
                    var e = function(t, n) {
                        return (e = Object.setPrototypeOf || {
                                __proto__: []
                            }
                            instanceof Array && function(e, t) {
                                e.__proto__ = t
                            } || function(e, t) {
                                for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n])
                            })(t, n)
                    };
                    return function(t, n) {
                        if ("function" != typeof n && null !== n) throw new TypeError("Class extends value " + String(n) + " is not a constructor or null");

                        function r() {
                            this.constructor = t
                        }
                        e(t, n), t.prototype = null === n ? Object.create(n) : (r.prototype = n.prototype, new r)
                    }
                }(),
                Zu = function() {
                    return (Zu = Object.assign || function(e) {
                        for (var t, n = 1, r = arguments.length; n < r; n++)
                            for (var o in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
                        return e
                    }).apply(this, arguments)
                },
                Yu = function(e, t, n, r) {
                    return new(n || (n = Promise))((function(o, a) {
                        function i(e) {
                            try {
                                u(r.next(e))
                            } catch (e) {
                                a(e)
                            }
                        }

                        function l(e) {
                            try {
                                u(r.throw(e))
                            } catch (e) {
                                a(e)
                            }
                        }

                        function u(e) {
                            var t;
                            e.done ? o(e.value) : (t = e.value, t instanceof n ? t : new n((function(e) {
                                e(t)
                            }))).then(i, l)
                        }
                        u((r = r.apply(e, t || [])).next())
                    }))
                },
                $u = function(e, t) {
                    var n, r, o, a, i = {
                        label: 0,
                        sent: function() {
                            if (1 & o[0]) throw o[1];
                            return o[1]
                        },
                        trys: [],
                        ops: []
                    };
                    return a = {
                        next: l(0),
                        throw: l(1),
                        return: l(2)
                    }, "function" == typeof Symbol && (a[Symbol.iterator] = function() {
                        return this
                    }), a;

                    function l(a) {
                        return function(l) {
                            return function(a) {
                                if (n) throw new TypeError("Generator is already executing.");
                                for (; i;) try {
                                    if (n = 1, r && (o = 2 & a[0] ? r.return : a[0] ? r.throw || ((o = r.return) && o.call(r), 0) : r.next) && !(o = o.call(r, a[1])).done) return o;
                                    switch (r = 0, o && (a = [2 & a[0], o.value]), a[0]) {
                                        case 0:
                                        case 1:
                                            o = a;
                                            break;
                                        case 4:
                                            return i.label++, {
                                                value: a[1],
                                                done: !1
                                            };
                                        case 5:
                                            i.label++, r = a[1], a = [0];
                                            continue;
                                        case 7:
                                            a = i.ops.pop(), i.trys.pop();
                                            continue;
                                        default:
                                            if (!(o = i.trys, (o = o.length > 0 && o[o.length - 1]) || 6 !== a[0] && 2 !== a[0])) {
                                                i = 0;
                                                continue
                                            }
                                            if (3 === a[0] && (!o || a[1] > o[0] && a[1] < o[3])) {
                                                i.label = a[1];
                                                break
                                            }
                                            if (6 === a[0] && i.label < o[1]) {
                                                i.label = o[1], o = a;
                                                break
                                            }
                                            if (o && i.label < o[2]) {
                                                i.label = o[2], i.ops.push(a);
                                                break
                                            }
                                            o[2] && i.ops.pop(), i.trys.pop();
                                            continue
                                    }
                                    a = t.call(e, i)
                                } catch (e) {
                                    a = [6, e], r = 0
                                } finally {
                                    n = o = 0
                                }
                                if (5 & a[0]) throw a[1];
                                return {
                                    value: a[0] ? a[1] : void 0,
                                    done: !0
                                }
                            }([a, l])
                        }
                    }
                },
                Qu = function(e, t) {
                    var n, r = Object.values(yl).includes(e) ? e : null;
                    if (null === r) return null;
                    try {
                        n = JSON.parse(t)
                    } catch (e) {
                        return null
                    }
                    var o = zu[r].safeParse(n);
                    return o.success ? {
                        challengeType: r,
                        challengeMetadata: n
                    } : (console.error(fl, o.error), null)
                },
                Ju = function(e) {
                    var t = e.challengeBaseProperties,
                        n = e.challengeSpecificProperties;
                    return Yu(void 0, void 0, Promise, (function() {
                        var e, r, o, a, i, l, u, s, c;
                        return $u(this, (function(d) {
                            switch (d.label) {
                                case 0:
                                    switch (n.challengeType) {
                                        case yl.CAPTCHA:
                                            return [3, 1];
                                        case yl.FORCE_AUTHENTICATOR:
                                            return [3, 2];
                                        case yl.TWO_STEP_VERIFICATION:
                                            return [3, 4];
                                        case yl.SECURITY_QUESTIONS:
                                            return [3, 6];
                                        case yl.REAUTHENTICATION:
                                            return [3, 8];
                                        case yl.PROOF_OF_WORK:
                                            return [3, 10]
                                    }
                                    return [3, 12];
                                case 1:
                                    return e = n.challengeType, r = n.challengeMetadata, s = Zu(Zu(Zu({
                                        onChallengeDisplayed: function() {},
                                        appType: null
                                    }, t), r), {
                                        onChallengeInvalidated: function(n) {
                                            return t.onChallengeInvalidated(Zu({
                                                challengeType: e
                                            }, n))
                                        },
                                        onChallengeCompleted: function(n) {
                                            return t.onChallengeCompleted({
                                                challengeType: e,
                                                metadata: {
                                                    unifiedCaptchaId: n.captchaId,
                                                    captchaToken: n.captchaToken,
                                                    actionType: r.actionType
                                                }
                                            })
                                        }
                                    }), [2, Fr(s)];
                                case 2:
                                    return u = n.challengeMetadata, s = Zu(Zu({}, t), u), [4, oo(s)];
                                case 3:
                                    return (c = d.sent()) && void 0 !== t.onChallengeDisplayed && t.onChallengeDisplayed({
                                        displayed: !0
                                    }), [2, c];
                                case 4:
                                    return o = n.challengeType, u = n.challengeMetadata, s = Zu(Zu(Zu({}, t), u), {
                                        onChallengeInvalidated: function(e) {
                                            return t.onChallengeInvalidated(Zu({
                                                challengeType: o
                                            }, e))
                                        },
                                        onChallengeCompleted: function(e) {
                                            return t.onChallengeCompleted({
                                                challengeType: o,
                                                metadata: e
                                            })
                                        }
                                    }), [4, pl(s)];
                                case 5:
                                    return (c = d.sent()) && void 0 !== t.onChallengeDisplayed && t.onChallengeDisplayed({
                                        displayed: !0
                                    }), [2, c];
                                case 6:
                                    return a = n.challengeType, u = n.challengeMetadata, s = Zu(Zu(Zu({}, t), u), {
                                        onChallengeInvalidated: function(e) {
                                            return t.onChallengeInvalidated(Zu({
                                                challengeType: a
                                            }, e))
                                        },
                                        onChallengeCompleted: function(e) {
                                            return t.onChallengeCompleted({
                                                challengeType: a,
                                                metadata: e
                                            })
                                        }
                                    }), [4, ui(s)];
                                case 7:
                                    return (c = d.sent()) && void 0 !== t.onChallengeDisplayed && t.onChallengeDisplayed({
                                        displayed: !0
                                    }), [2, c];
                                case 8:
                                    return i = n.challengeType, u = n.challengeMetadata, s = Zu(Zu(Zu({}, t), u), {
                                        onChallengeInvalidated: function(e) {
                                            return t.onChallengeInvalidated(Zu({
                                                challengeType: i
                                            }, e))
                                        },
                                        onChallengeCompleted: function(e) {
                                            return t.onChallengeCompleted({
                                                challengeType: i,
                                                metadata: e
                                            })
                                        }
                                    }), [4, xa(s)];
                                case 9:
                                    return (c = d.sent()) && void 0 !== t.onChallengeDisplayed && t.onChallengeDisplayed({
                                        displayed: !0
                                    }), [2, c];
                                case 10:
                                    return l = n.challengeType, u = n.challengeMetadata, s = Zu(Zu(Zu({}, t), u), {
                                        onChallengeInvalidated: function(e) {
                                            return t.onChallengeInvalidated(Zu({
                                                challengeType: l
                                            }, e))
                                        },
                                        onChallengeCompleted: function(e) {
                                            return t.onChallengeCompleted({
                                                challengeType: l,
                                                metadata: e
                                            })
                                        }
                                    }), [4, Bo(s)];
                                case 11:
                                    return (c = d.sent()) && void 0 !== t.onChallengeDisplayed && t.onChallengeDisplayed({
                                        displayed: !0
                                    }), [2, c];
                                case 12:
                                    return n, [2, !1];
                                case 13:
                                    return [2]
                            }
                        }))
                    }))
                },
                Xu = function(e) {
                    function t(n) {
                        var r = e.call(this, t.getMessage(n)) || this;
                        return Object.setPrototypeOf(r, t.prototype), r.name = t.name, r._parameters = n, r
                    }
                    return Ku(t, e), t.handleIfMatched = function(e) {
                        return function(n) {
                            if (n instanceof t) return e(n.parameters);
                            if ("object" == typeof n && null !== n && Object.keys(n).includes("data")) {
                                var r = n;
                                if (r.data instanceof t) return e(r.data.parameters)
                            }
                            throw n
                        }
                    }, t.getMessage = function(e) {
                        return "Got (" + ["Kind: " + e.kind, "Type: " + (e.data.challengeType || "unknown"), "Code: " + (e.kind === hl.INVALIDATED ? e.data.errorCode : "null")].join("; ") + ")"
                    }, Object.defineProperty(t.prototype, "parameters", {
                        get: function() {
                            return this._parameters
                        },
                        enumerable: !1,
                        configurable: !0
                    }), t
                }(Error),
                es = function(e) {
                    return new Promise((function(t, n) {
                        var r, o = e.retryRequest,
                            a = e.containerId,
                            i = e.challengeId,
                            l = e.challengeTypeRaw,
                            u = e.challengeMetadataJsonBase64;
                        try {
                            r = atob(u)
                        } catch (e) {
                            if (e instanceof DOMException && e.code === DOMException.INVALID_CHARACTER_ERR) return console.error(fl, "Base-64 decoding failed", e), void n(new Xu({
                                kind: hl.UNKNOWN,
                                data: {}
                            }));
                            throw e
                        }
                        var s = Qu(l, r);
                        if (null === s) return console.error(fl, "Challenge headers failed to be parsed"), void n(new Xu({
                            kind: hl.UNKNOWN,
                            data: {}
                        }));
                        if (null === document.getElementById(a)) {
                            var c = document.createElement("div");
                            c.id = a, document.body.appendChild(c)
                        }
                        Ju({
                            challengeBaseProperties: {
                                containerId: a,
                                shouldDynamicallyLoadTranslationResources: !1,
                                renderInline: !1,
                                onChallengeCompleted: function(e) {
                                    try {
                                        t(o(i, btoa(JSON.stringify(e.metadata))))
                                    } catch (e) {
                                        if (!(e instanceof DOMException && e.code === DOMException.INVALID_CHARACTER_ERR)) throw e;
                                        console.error(fl, "Base-64 encoding failed", e), n(new Xu({
                                            kind: hl.UNKNOWN,
                                            data: {
                                                challengeType: s.challengeType
                                            }
                                        }))
                                    }
                                },
                                onChallengeInvalidated: function(e) {
                                    return n(new Xu({
                                        kind: hl.INVALIDATED,
                                        data: e
                                    }))
                                },
                                onModalChallengeAbandoned: function() {
                                    return n(new Xu({
                                        kind: hl.ABANDONED,
                                        data: {
                                            challengeType: s.challengeType
                                        }
                                    }))
                                }
                            },
                            challengeSpecificProperties: s
                        }).then((function(e) {
                            e || (console.error(fl, "Challenge component failed to initialize"), n(new Xu({
                                kind: hl.UNKNOWN,
                                data: {
                                    challengeType: s.challengeType
                                }
                            })))
                        }))
                    }))
                },
                ts = "Hybrid Wrapper:";
            ! function(e) {
                e.CHALLENGE_COMPLETED = "challengeCompleted", e.CHALLENGE_DISPLAYED = "challengeDisplayed", e.CHALLENGE_INITIALIZED = "challengeInitialized", e.CHALLENGE_INVALIDATED = "challengeInvalidated", e.CHALLENGE_PAGE_LOADED = "challengePageLoaded", e.CHALLENGE_PARSED = "challengeParsed"
            }(xu || (xu = {}));
            var ns;
            ! function(e) {
                e.ACTION_TYPE = "action-type", e.ALLOW_REMEMBER_DEVICE = "allow-remember-device", e.APP_TYPE = "app-type", e.CAPTCHA_ID = "captcha-id", e.CHALLENGE_ID = "challenge-id", e.CHALLENGE_METADATA_JSON = "challenge-metadata-json", e.CHALLENGE_TYPE = "challenge-type", e.DARK_MODE = "dark-mode", e.DATA_EXCHANGE_BLOB = "data-exchange-blob", e.GENERIC_CHALLENGE_TYPE = "generic-challenge-type", e.SESSION_ID = "session-id", e.USER_ID = "user-id"
            }(ns || (ns = {}));
            var rs = Mu({
                    challengeType: Vu((function(e) {
                        return "string" == typeof e ? e.replace(/-/g, "") : e
                    }), ku([Hu(yl), Uu("generic")])),
                    darkMode: ku([Uu("false"), Uu("true")]).transform((function(e) {
                        return "true" === e
                    })),
                    appType: Pu().default("unknown")
                }),
                os = Mu({
                    actionType: Hu(Tr),
                    dataExchangeBlob: Pu(),
                    unifiedCaptchaId: Pu()
                }),
                as = Mu({
                    userId: Pu(),
                    challengeId: Pu(),
                    actionType: Hu(Ba),
                    allowRememberDevice: ku([Uu("false"), Uu("true")]).transform((function(e) {
                        return "true" === e
                    }))
                }),
                is = Mu({
                    userId: Pu(),
                    sessionId: Pu()
                }),
                ls = Mu({
                    sessionId: Pu()
                }),
                us = Mu({
                    challengeType: Hu(yl),
                    challengeMetadataJson: Pu()
                }),
                ss = function() {
                    var e = T.UrlParser.getParametersAsObject(),
                        t = {
                            challengeType: e[ns.GENERIC_CHALLENGE_TYPE],
                            challengeMetadataJson: e[ns.CHALLENGE_METADATA_JSON]
                        },
                        n = us.safeParse(t);
                    if (!n.success) return console.error(ts, n.error), null;
                    var r = n.data,
                        o = r.challengeType,
                        a = function(e) {
                            var t = e.replace(/[^A-Za-z0-9-_]/g, ""),
                                n = (4 - t.length % 4) % 4,
                                r = (t + Array(n + 1).join("=")).replace(/-/g, "+").replace(/_/g, "/");
                            try {
                                return atob(r)
                            } catch (e) {
                                if (e instanceof DOMException && e.code === DOMException.INVALID_CHARACTER_ERR) return console.error(ts, "Base-64 decoding failed", e), null;
                                throw e
                            }
                        }(r.challengeMetadataJson);
                    return null === a ? null : Qu(o, a)
                },
                cs = function(e, t, n, r) {
                    return new(n || (n = Promise))((function(o, a) {
                        function i(e) {
                            try {
                                u(r.next(e))
                            } catch (e) {
                                a(e)
                            }
                        }

                        function l(e) {
                            try {
                                u(r.throw(e))
                            } catch (e) {
                                a(e)
                            }
                        }

                        function u(e) {
                            var t;
                            e.done ? o(e.value) : (t = e.value, t instanceof n ? t : new n((function(e) {
                                e(t)
                            }))).then(i, l)
                        }
                        u((r = r.apply(e, t || [])).next())
                    }))
                },
                ds = function(e, t) {
                    var n, r, o, a, i = {
                        label: 0,
                        sent: function() {
                            if (1 & o[0]) throw o[1];
                            return o[1]
                        },
                        trys: [],
                        ops: []
                    };
                    return a = {
                        next: l(0),
                        throw: l(1),
                        return: l(2)
                    }, "function" == typeof Symbol && (a[Symbol.iterator] = function() {
                        return this
                    }), a;

                    function l(a) {
                        return function(l) {
                            return function(a) {
                                if (n) throw new TypeError("Generator is already executing.");
                                for (; i;) try {
                                    if (n = 1, r && (o = 2 & a[0] ? r.return : a[0] ? r.throw || ((o = r.return) && o.call(r), 0) : r.next) && !(o = o.call(r, a[1])).done) return o;
                                    switch (r = 0, o && (a = [2 & a[0], o.value]), a[0]) {
                                        case 0:
                                        case 1:
                                            o = a;
                                            break;
                                        case 4:
                                            return i.label++, {
                                                value: a[1],
                                                done: !1
                                            };
                                        case 5:
                                            i.label++, r = a[1], a = [0];
                                            continue;
                                        case 7:
                                            a = i.ops.pop(), i.trys.pop();
                                            continue;
                                        default:
                                            if (!(o = i.trys, (o = o.length > 0 && o[o.length - 1]) || 6 !== a[0] && 2 !== a[0])) {
                                                i = 0;
                                                continue
                                            }
                                            if (3 === a[0] && (!o || a[1] > o[0] && a[1] < o[3])) {
                                                i.label = a[1];
                                                break
                                            }
                                            if (6 === a[0] && i.label < o[1]) {
                                                i.label = o[1], o = a;
                                                break
                                            }
                                            if (o && i.label < o[2]) {
                                                i.label = o[2], i.ops.push(a);
                                                break
                                            }
                                            o[2] && i.ops.pop(), i.trys.pop();
                                            continue
                                    }
                                    a = t.call(e, i)
                                } catch (e) {
                                    a = [6, e], r = 0
                                } finally {
                                    n = o = 0
                                }
                                if (5 & a[0]) throw a[1];
                                return {
                                    value: a[0] ? a[1] : void 0,
                                    done: !0
                                }
                            }([a, l])
                        }
                    }
                },
                ps = "light-theme",
                fs = "dark-theme",
                hs = function(e, t, n) {
                    var r, o;
                    console.log(ts, "Sending hybrid call:", t), null === (o = T.Hybrid.Navigation) || void 0 === o || o.navigateToFeature(((r = {}).feature = t, r.data = n, r), (function() {
                        return console.log(ts, "Sent hybrid call:", t)
                    }));
                    var a = e[t],
                        i = document.getElementById(a);
                    if (null !== i && "INPUT" === i.tagName) {
                        i.value = JSON.stringify(n);
                        var l = document.createEvent("HTMLEvents");
                        l.initEvent("callbackInputChanged", !1, !1), i.dispatchEvent(l)
                    }
                },
                ys = function(e, t, n) {
                    return cs(void 0, void 0, Promise, (function() {
                        var r, o, a, i;
                        return ds(this, (function(l) {
                            switch (l.label) {
                                case 0:
                                    return null === (r = function() {
                                        var e = T.UrlParser.getParametersAsObject(),
                                            t = {
                                                actionType: e[ns.ACTION_TYPE],
                                                dataExchangeBlob: e[ns.DATA_EXCHANGE_BLOB],
                                                unifiedCaptchaId: e[ns.CAPTCHA_ID]
                                            },
                                            n = os.safeParse(t);
                                        return n.success ? n.data : (console.error(ts, n.error), null)
                                    }()) ? (hs(t, xu.CHALLENGE_PARSED, {
                                        parsed: !1
                                    }), [2, !1]) : (hs(t, xu.CHALLENGE_PARSED, {
                                        parsed: !0
                                    }), o = r.actionType, a = r.dataExchangeBlob, i = r.unifiedCaptchaId, [4, Fr({
                                        containerId: e,
                                        actionType: o,
                                        appType: n,
                                        dataExchangeBlob: a,
                                        unifiedCaptchaId: i,
                                        renderInline: !0,
                                        shouldDynamicallyLoadTranslationResources: !0,
                                        onChallengeDisplayed: function(e) {
                                            return hs(t, xu.CHALLENGE_DISPLAYED, e)
                                        },
                                        onChallengeCompleted: function(e) {
                                            return hs(t, xu.CHALLENGE_COMPLETED, e)
                                        },
                                        onChallengeInvalidated: function(e) {
                                            return hs(t, xu.CHALLENGE_INVALIDATED, e)
                                        },
                                        onModalChallengeAbandoned: null
                                    })]);
                                case 1:
                                    return !1 === l.sent() ? (hs(t, xu.CHALLENGE_INITIALIZED, {
                                        initialized: !1
                                    }), [2, !1]) : (hs(t, xu.CHALLENGE_INITIALIZED, {
                                        initialized: !0
                                    }), [2, !0])
                            }
                        }))
                    }))
                },
                vs = function(e, t, n) {
                    return cs(void 0, void 0, Promise, (function() {
                        var r, o, a, i, l;
                        return ds(this, (function(u) {
                            switch (u.label) {
                                case 0:
                                    return null === (r = function() {
                                        var e = T.UrlParser.getParametersAsObject(),
                                            t = {
                                                userId: e[ns.USER_ID],
                                                challengeId: e[ns.CHALLENGE_ID],
                                                actionType: e[ns.ACTION_TYPE],
                                                allowRememberDevice: e[ns.ALLOW_REMEMBER_DEVICE]
                                            },
                                            n = as.safeParse(t);
                                        return n.success ? n.data : (console.error(ts, n.error), null)
                                    }()) ? (hs(t, xu.CHALLENGE_PARSED, {
                                        parsed: !1
                                    }), [2, !1]) : (hs(t, xu.CHALLENGE_PARSED, {
                                        parsed: !0
                                    }), o = r.userId, a = r.challengeId, i = r.actionType, l = r.allowRememberDevice, [4, pl({
                                        containerId: e,
                                        userId: o,
                                        challengeId: a,
                                        actionType: i,
                                        appType: n,
                                        renderInline: !0,
                                        shouldModifyBrowserHistory: !0,
                                        shouldShowRememberDeviceCheckbox: l,
                                        shouldDynamicallyLoadTranslationResources: !0,
                                        onChallengeCompleted: function(e) {
                                            return hs(t, xu.CHALLENGE_COMPLETED, e)
                                        },
                                        onChallengeInvalidated: function(e) {
                                            return hs(t, xu.CHALLENGE_INVALIDATED, e)
                                        },
                                        onModalChallengeAbandoned: null
                                    })]);
                                case 1:
                                    return !1 === u.sent() ? (hs(t, xu.CHALLENGE_INITIALIZED, {
                                        initialized: !1
                                    }), [2, !1]) : (hs(t, xu.CHALLENGE_INITIALIZED, {
                                        initialized: !0
                                    }), hs(t, xu.CHALLENGE_DISPLAYED, {
                                        displayed: !0
                                    }), [2, !0])
                            }
                        }))
                    }))
                },
                ms = function(e, t, n) {
                    return cs(void 0, void 0, Promise, (function() {
                        var n, r, o;
                        return ds(this, (function(a) {
                            switch (a.label) {
                                case 0:
                                    return null === (n = function() {
                                        var e = T.UrlParser.getParametersAsObject(),
                                            t = {
                                                userId: e[ns.USER_ID],
                                                sessionId: e[ns.SESSION_ID]
                                            },
                                            n = is.safeParse(t);
                                        return n.success ? n.data : (console.error(ts, n.error), null)
                                    }()) ? (hs(t, xu.CHALLENGE_PARSED, {
                                        parsed: !1
                                    }), [2, !1]) : (hs(t, xu.CHALLENGE_PARSED, {
                                        parsed: !0
                                    }), r = n.userId, o = n.sessionId, [4, ui({
                                        containerId: e,
                                        userId: r,
                                        sessionId: o,
                                        renderInline: !0,
                                        shouldDynamicallyLoadTranslationResources: !0,
                                        onChallengeCompleted: function(e) {
                                            return hs(t, xu.CHALLENGE_COMPLETED, e)
                                        },
                                        onChallengeInvalidated: function(e) {
                                            return hs(t, xu.CHALLENGE_INVALIDATED, e)
                                        },
                                        onModalChallengeAbandoned: null
                                    })]);
                                case 1:
                                    return !1 === a.sent() ? (hs(t, xu.CHALLENGE_INITIALIZED, {
                                        initialized: !1
                                    }), [2, !1]) : (hs(t, xu.CHALLENGE_INITIALIZED, {
                                        initialized: !0
                                    }), hs(t, xu.CHALLENGE_DISPLAYED, {
                                        displayed: !0
                                    }), [2, !0])
                            }
                        }))
                    }))
                },
                Es = function(e, t, n) {
                    return cs(void 0, void 0, Promise, (function() {
                        return ds(this, (function(n) {
                            switch (n.label) {
                                case 0:
                                    return hs(t, xu.CHALLENGE_PARSED, {
                                        parsed: !0
                                    }), [4, xa({
                                        containerId: e,
                                        renderInline: !0,
                                        shouldDynamicallyLoadTranslationResources: !0,
                                        onChallengeCompleted: function(e) {
                                            return hs(t, xu.CHALLENGE_COMPLETED, e)
                                        },
                                        onChallengeInvalidated: function(e) {
                                            return hs(t, xu.CHALLENGE_INVALIDATED, e)
                                        },
                                        onModalChallengeAbandoned: null
                                    })];
                                case 1:
                                    return !1 === n.sent() ? (hs(t, xu.CHALLENGE_INITIALIZED, {
                                        initialized: !1
                                    }), [2, !1]) : (hs(t, xu.CHALLENGE_INITIALIZED, {
                                        initialized: !0
                                    }), hs(t, xu.CHALLENGE_DISPLAYED, {
                                        displayed: !0
                                    }), [2, !0])
                            }
                        }))
                    }))
                },
                gs = function(e, t, n) {
                    return cs(void 0, void 0, Promise, (function() {
                        var n, r;
                        return ds(this, (function(o) {
                            switch (o.label) {
                                case 0:
                                    return null === (n = function() {
                                        var e = {
                                                sessionId: T.UrlParser.getParametersAsObject()[ns.SESSION_ID]
                                            },
                                            t = ls.safeParse(e);
                                        return t.success ? t.data : (console.error(ts, t.error), null)
                                    }()) ? (hs(t, xu.CHALLENGE_PARSED, {
                                        parsed: !1
                                    }), [2, !1]) : (hs(t, xu.CHALLENGE_PARSED, {
                                        parsed: !0
                                    }), r = n.sessionId, [4, Bo({
                                        containerId: e,
                                        sessionId: r,
                                        renderInline: !0,
                                        shouldDynamicallyLoadTranslationResources: !0,
                                        onChallengeCompleted: function(e) {
                                            return hs(t, xu.CHALLENGE_COMPLETED, e)
                                        },
                                        onChallengeInvalidated: function(e) {
                                            return hs(t, xu.CHALLENGE_INVALIDATED, e)
                                        },
                                        onModalChallengeAbandoned: null
                                    })]);
                                case 1:
                                    return !1 === o.sent() ? (hs(t, xu.CHALLENGE_INITIALIZED, {
                                        initialized: !1
                                    }), [2, !1]) : (hs(t, xu.CHALLENGE_INITIALIZED, {
                                        initialized: !0
                                    }), hs(t, xu.CHALLENGE_DISPLAYED, {
                                        displayed: !0
                                    }), [2, !0])
                            }
                        }))
                    }))
                },
                bs = function(e, t, n) {
                    return cs(void 0, void 0, Promise, (function() {
                        var r;
                        return ds(this, (function(o) {
                            switch (o.label) {
                                case 0:
                                    return null === (r = ss()) ? (hs(t, xu.CHALLENGE_PARSED, {
                                        parsed: !1
                                    }), [2, !1]) : (hs(t, xu.CHALLENGE_PARSED, {
                                        parsed: !0
                                    }), [4, Ju({
                                        challengeBaseProperties: {
                                            containerId: e,
                                            renderInline: !0,
                                            shouldDynamicallyLoadTranslationResources: !0,
                                            appType: n,
                                            shouldModifyBrowserHistory: !0,
                                            onChallengeCompleted: function(e) {
                                                return hs(t, xu.CHALLENGE_COMPLETED, e)
                                            },
                                            onChallengeInvalidated: function(e) {
                                                return hs(t, xu.CHALLENGE_INVALIDATED, e)
                                            },
                                            onChallengeDisplayed: function(e) {
                                                return hs(t, xu.CHALLENGE_DISPLAYED, e)
                                            },
                                            onModalChallengeAbandoned: null
                                        },
                                        challengeSpecificProperties: r
                                    })]);
                                case 1:
                                    return !1 === o.sent() ? (hs(t, xu.CHALLENGE_INITIALIZED, {
                                        initialized: !1
                                    }), [2, !1]) : (hs(t, xu.CHALLENGE_INITIALIZED, {
                                        initialized: !0
                                    }), [2, !0])
                            }
                        }))
                    }))
                },
                _s = function(e, t, n) {
                    return cs(void 0, void 0, Promise, (function() {
                        return ds(this, (function(n) {
                            switch (n.label) {
                                case 0:
                                    return hs(t, xu.CHALLENGE_PARSED, {
                                        parsed: !0
                                    }), [4, oo({
                                        containerId: e,
                                        renderInline: !0,
                                        shouldDynamicallyLoadTranslationResources: !0,
                                        onModalChallengeAbandoned: null
                                    })];
                                case 1:
                                    return !1 === n.sent() ? (hs(t, xu.CHALLENGE_INITIALIZED, {
                                        initialized: !1
                                    }), [2, !1]) : (hs(t, xu.CHALLENGE_INITIALIZED, {
                                        initialized: !0
                                    }), hs(t, xu.CHALLENGE_DISPLAYED, {
                                        displayed: !0
                                    }), [2, !0])
                            }
                        }))
                    }))
                },
                Cs = function(e) {
                    var t = e.containerId,
                        n = e.hybridTargetToCallbackInputId;
                    return cs(void 0, void 0, void 0, (function() {
                        var e;
                        return ds(this, (function(r) {
                            var o, a, i;
                            if (hs(n, xu.CHALLENGE_PAGE_LOADED, {
                                    pageLoaded: !0
                                }), o = T.UrlParser.getParametersAsObject(), a = {
                                    challengeType: o[ns.CHALLENGE_TYPE],
                                    darkMode: o[ns.DARK_MODE],
                                    appType: o[ns.APP_TYPE]
                                }, i = rs.safeParse(a), null === (e = i.success ? i.data : (console.error(ts, i.error), null))) return hs(n, xu.CHALLENGE_PARSED, {
                                parsed: !1
                            }), [2, !1];
                            switch (e.darkMode ? (document.body.classList.remove(ps), document.body.classList.add(fs)) : (document.body.classList.remove(fs), document.body.classList.add(ps)), e.challengeType) {
                                case yl.CAPTCHA:
                                    return [2, ys(t, n, e.appType)];
                                case yl.FORCE_AUTHENTICATOR:
                                    return [2, _s(t, n, e.appType)];
                                case yl.TWO_STEP_VERIFICATION:
                                    return [2, vs(t, n, e.appType)];
                                case yl.SECURITY_QUESTIONS:
                                    return [2, ms(t, n, e.appType)];
                                case yl.REAUTHENTICATION:
                                    return [2, Es(t, n, e.appType)];
                                case yl.PROOF_OF_WORK:
                                    return [2, gs(t, n, e.appType)];
                                case "generic":
                                    return [2, bs(t, n, e.appType)];
                                default:
                                    return e.challengeType, [2, !1]
                            }
                            return [2]
                        }))
                    }))
                },
                Ss = {
                    Captcha: h,
                    ForceAuthenticator: y,
                    Generic: b,
                    HybridWrapper: _,
                    ProofOfWork: v,
                    Reauthentication: m,
                    SecurityQuestions: E,
                    TwoStepVerification: g
                };
            Object.assign(I(), {
                AccountIntegrityChallengeService: Ss
            })
        }()
}();
//# sourceMappingURL=https://js.rbxcdn.com/46ff9a09793181f3bf67-challenge.bundle.min.js.map

/* Bundle detector */
window.Roblox && window.Roblox.BundleDetector && window.Roblox.BundleDetector.bundleDetected("Challenge");