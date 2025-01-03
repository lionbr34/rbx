! function() {
    var n = {
            145: function(t, e, n) {
                var r;

                function c(t) {
                    return (c = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                        return typeof t
                    } : function(t) {
                        return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                    })(t)
                }
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
                                var r = c(n);
                                if ("string" === r || "number" === r) t.push(n);
                                else if (Array.isArray(n) && n.length) {
                                    var o = u.apply(null, n);
                                    o && t.push(o)
                                } else if ("object" === r)
                                    for (var i in n) a.call(n, i) && n[i] && t.push(i)
                            }
                        }
                        return t.join(" ")
                    }
                    t.exports ? (u.default = u, t.exports = u) : "object" === c(n.amdO) && n.amdO ? void 0 === (r = function() {
                        return u
                    }.apply(e, [])) || (t.exports = r) : window.classNames = u
                }()
            }
        },
        r = {};

    function U(t) {
        if (r[t]) return r[t].exports;
        var e = r[t] = {
            exports: {}
        };
        return n[t](e, e.exports, U), e.exports
    }
    U.amdO = {}, U.n = function(t) {
            var e = t && t.__esModule ? function() {
                return t.default
            } : function() {
                return t
            };
            return U.d(e, {
                a: e
            }), e
        }, U.d = function(t, e) {
            for (var n in e) U.o(e, n) && !U.o(t, n) && Object.defineProperty(t, n, {
                enumerable: !0,
                get: e[n]
            })
        }, U.o = function(t, e) {
            return Object.prototype.hasOwnProperty.call(t, e)
        },
        function() {
            "use strict";

            function t(t, e) {
                var n = (0, a.useRef)(t);
                (0, a.useEffect)(function() {
                    n.current = t
                }, [t]), (0, a.useEffect)(function() {
                    if (null !== e) {
                        var t = setInterval(function() {
                            return n.current()
                        }, e);
                        return function() {
                            clearInterval(t)
                        }
                    }
                }, [e])
            }

            function e(n, e) {
                function r() {
                    if ("undefined" == typeof window) return e;
                    try {
                        var t = window.localStorage.getItem(n);
                        return t ? JSON.parse(t) : e
                    } catch (t) {
                        return console.warn("Error reading localStorage key “" + n + "”:", t), e
                    }
                }
                var t = (0, a.useState)(r),
                    o = t[0],
                    i = t[1];
                return (0, a.useEffect)(function() {
                    i(r())
                }, []), (0, a.useEffect)(function() {
                    function t() {
                        i(r())
                    }
                    return window.addEventListener("storage", t), window.addEventListener("local-storage", t),
                        function() {
                            window.removeEventListener("storage", t), window.removeEventListener("local-storage", t)
                        }
                }, []), [o, function(t) {
                    "undefined" == typeof window && console.warn("Tried setting localStorage key “" + n + "” even though environment is not a client");
                    try {
                        var e = t instanceof Function ? t(o) : t;
                        window.localStorage.setItem(n, JSON.stringify(e)), i(e), window.dispatchEvent(new Event("local-storage"))
                    } catch (t) {
                        console.warn("Error setting localStorage key “" + n + "”:", t)
                    }
                }]
            }

            function n() {
                var t = (0, a.useState)(!1),
                    e = t[0],
                    n = t[1],
                    r = (0, a.useCallback)(function() {
                        n(!0)
                    }, []),
                    o = (0, a.useCallback)(function() {
                        n(!1)
                    }, []);
                return (0, a.useEffect)(function() {
                    return i.forEach(function(t) {
                            window.addEventListener(t, r)
                        }), u.forEach(function(t) {
                            window.addEventListener(t, o)
                        }),
                        function() {
                            i.forEach(function(t) {
                                window.removeEventListener(t, r)
                            }), u.forEach(function(t) {
                                window.removeEventListener(t, o)
                            })
                        }
                }, [r, o]), e
            }
            var a = React,
                f = U.n(a),
                i = ["focus", "click", "hover", "scroll", "mouseover", "mouseenter", "mousedown", "dblclick", "keypress", "touchstart", "touchmove"],
                u = ["blur"];

            function c(e, t) {
                var n, r = Object.keys(e);
                return Object.getOwnPropertySymbols && (n = Object.getOwnPropertySymbols(e), t && (n = n.filter(function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                })), r.push.apply(r, n)), r
            }

            function s(t, e, n) {
                return e in t ? Object.defineProperty(t, e, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[e] = n, t
            }
            var r = PropTypes,
                o = U.n(r),
                l = U(145),
                p = U.n(l),
                y = function(t, e) {
                    console.warn("The following exception has been caught with the captured component stack:"), console.group(), console.info("".concat(t)), console.info("".concat(e.componentStack)), console.groupEnd()
                };

            function d(t) {
                return (d = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                    return typeof t
                } : function(t) {
                    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                })(t)
            }

            function m() {
                return (m = Object.assign || function(t) {
                    for (var e = 1; e < arguments.length; e++) {
                        var n, r = arguments[e];
                        for (n in r) Object.prototype.hasOwnProperty.call(r, n) && (t[n] = r[n])
                    }
                    return t
                }).apply(this, arguments)
            }

            function v(t, e) {
                if (null == t) return {};
                var n, r = function(t, e) {
                    if (null == t) return {};
                    var n, r, o = {},
                        i = Object.keys(t);
                    for (r = 0; r < i.length; r++) n = i[r], 0 <= e.indexOf(n) || (o[n] = t[n]);
                    return o
                }(t, e);
                if (Object.getOwnPropertySymbols)
                    for (var o = Object.getOwnPropertySymbols(t), i = 0; i < o.length; i++) n = o[i], 0 <= e.indexOf(n) || Object.prototype.propertyIsEnumerable.call(t, n) && (r[n] = t[n]);
                return r
            }

            function b(t, e) {
                for (var n = 0; n < e.length; n++) {
                    var r = e[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
                }
            }

            function h(t, e) {
                return (h = Object.setPrototypeOf || function(t, e) {
                    return t.__proto__ = e, t
                })(t, e)
            }

            function w(n) {
                var r = function() {
                    if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" == typeof Proxy) return !0;
                    try {
                        return Date.prototype.toString.call(Reflect.construct(Date, [], function() {})), !0
                    } catch (t) {
                        return !1
                    }
                }();
                return function() {
                    var t, e = O(n);
                    return t = r ? (t = O(this).constructor, Reflect.construct(e, arguments, t)) : e.apply(this, arguments), e = this, !(t = t) || "object" !== d(t) && "function" != typeof t ? g(e) : t
                }
            }

            function g(t) {
                if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return t
            }

            function O(t) {
                return (O = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) {
                    return t.__proto__ || Object.getPrototypeOf(t)
                })(t)
            }
            var l = (r = function(i, t) {
                    var a = 1 < arguments.length && void 0 !== t ? t : "withHOC";
                    return function(t) {
                        for (var e = arguments.length, n = new Array(1 < e ? e - 1 : 0), r = 1; r < e; r++) n[r - 1] = arguments[r];
                        var o = i.apply(void 0, [t].concat(n));
                        return o.displayName = (t = t, "".concat(a, "(").concat((t = t).displayName || t.name || "Component", ")")), o
                    }
                })(function(c) {
                    var t = function() {
                        ! function(t, e) {
                            if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
                            t.prototype = Object.create(e && e.prototype, {
                                constructor: {
                                    value: t,
                                    writable: !0,
                                    configurable: !0
                                }
                            }), e && h(t, e)
                        }(o, f().Component);
                        var t, e, n, r = w(o);

                        function o(t) {
                            var e;
                            ! function(t) {
                                if (!(t instanceof o)) throw new TypeError("Cannot call a class as a function")
                            }(this);
                            t = (e = r.call(this, t)).props.showAppOnInit;
                            return e.state = {
                                isLoading: !t,
                                hasError: !1,
                                errorState: null
                            }, e.onLoadStart = e.onLoadStart.bind(g(e)), e.onLoadEnd = e.onLoadEnd.bind(g(e)), e.onError = e.onError.bind(g(e)), e
                        }
                        return t = o, n = [{
                            key: "getDerivedStateFromError",
                            value: function() {
                                return {
                                    hasError: !0,
                                    errorState: null
                                }
                            }
                        }], (e = [{
                            key: "componentDidCatch",
                            value: function(t, e) {
                                y(t, e)
                            }
                        }, {
                            key: "onLoadStart",
                            value: function() {
                                this.setState({
                                    isLoading: !0
                                })
                            }
                        }, {
                            key: "onLoadEnd",
                            value: function() {
                                this.setState({
                                    isLoading: !1
                                })
                            }
                        }, {
                            key: "onError",
                            value: function(t) {
                                this.setState({
                                    hasError: !0,
                                    errorState: t
                                })
                            }
                        }, {
                            key: "render",
                            value: function() {
                                var t, e, n = this.props,
                                    r = (n.showAppOnInit, n.defaultMessage),
                                    o = n.errorStates,
                                    i = v(n, ["showAppOnInit", "defaultMessage", "errorStates"]),
                                    a = this.state,
                                    u = a.isLoading,
                                    n = a.hasError,
                                    a = a.errorState;
                                n ? t = f().createElement("h3", null, o[a] || r) : (t = f().createElement("span", {
                                    className: "spinner spinner-default"
                                }), e = f().createElement(c, m({}, i, {
                                    isLoading: u,
                                    hasError: n,
                                    errorState: a,
                                    onLoadStart: this.onLoadStart,
                                    onLoadEnd: this.onLoadEnd,
                                    onError: this.onError
                                })));
                                n = n || u, u = p()("component-status-container", {
                                    hidden: !n
                                }), n = p()("component-container", {
                                    hidden: n
                                });
                                return f().createElement("div", {
                                    className: "component-status"
                                }, f().createElement("div", {
                                    className: u
                                }, t), f().createElement("div", {
                                    className: n
                                }, e))
                            }
                        }]) && b(t.prototype, e), n && b(t, n), o
                    }();
                    return t.defaultProps = {
                        showAppOnInit: !1,
                        defaultMessage: "",
                        errorStates: {}
                    }, t.propTypes = {
                        showAppOnInit: o().bool,
                        defaultMessage: o().string,
                        errorStates: o().objectOf(o().string)
                    }, t
                }, "withComponentStatus"),
                S = Roblox,
                E = 2,
                j = ["Common", "CommonUI"];

            function P(t, e) {
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
                    if ("string" == typeof t) return A(t, e);
                    var n = Object.prototype.toString.call(t).slice(8, -1);
                    "Object" === n && t.constructor && (n = t.constructor.name);
                    if ("Map" === n || "Set" === n) return Array.from(t);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return A(t, e)
                }(t, e) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function A(t, e) {
                (null == e || e > t.length) && (e = t.length);
                for (var n = 0, r = new Array(e); n < e; n++) r[n] = t[n];
                return r
            }
            var L = window.RobloxError,
                k = function(t) {
                    return "string" != typeof t ? (new L("Invalid namespace name, required a string").throw(), null) : t.split(".")
                };

            function R(t) {
                return (R = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                    return typeof t
                } : function(t) {
                    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                })(t)
            }

            function I() {
                return (I = Object.assign || function(t) {
                    for (var e = 1; e < arguments.length; e++) {
                        var n, r = arguments[e];
                        for (n in r) Object.prototype.hasOwnProperty.call(r, n) && (t[n] = r[n])
                    }
                    return t
                }).apply(this, arguments)
            }

            function x(t) {
                return function(t) {
                    if (Array.isArray(t)) return _(t)
                }(t) || function(t) {
                    if ("undefined" != typeof Symbol && Symbol.iterator in Object(t)) return Array.from(t)
                }(t) || function(t, e) {
                    if (!t) return;
                    if ("string" == typeof t) return _(t, e);
                    var n = Object.prototype.toString.call(t).slice(8, -1);
                    "Object" === n && t.constructor && (n = t.constructor.name);
                    if ("Map" === n || "Set" === n) return Array.from(t);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _(t, e)
                }(t) || function() {
                    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function _(t, e) {
                (null == e || e > t.length) && (e = t.length);
                for (var n = 0, r = new Array(e); n < e; n++) r[n] = t[n];
                return r
            }

            function C(t, e) {
                for (var n = 0; n < e.length; n++) {
                    var r = e[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
                }
            }

            function T(t, e) {
                return (T = Object.setPrototypeOf || function(t, e) {
                    return t.__proto__ = e, t
                })(t, e)
            }

            function D(n) {
                var r = function() {
                    if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" == typeof Proxy) return !0;
                    try {
                        return Date.prototype.toString.call(Reflect.construct(Date, [], function() {})), !0
                    } catch (t) {
                        return !1
                    }
                }();
                return function() {
                    var t, e = M(n);
                    return t = r ? (t = M(this).constructor, Reflect.construct(e, arguments, t)) : e.apply(this, arguments), e = this, !(t = t) || "object" !== R(t) && "function" != typeof t ? N(e) : t
                }
            }

            function N(t) {
                if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return t
            }

            function M(t) {
                return (M = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) {
                    return t.__proto__ || Object.getPrototypeOf(t)
                })(t)
            }
            r = r(function(r, t) {
                var e, n, a = (n = (e = t).common, t = e.feature, e = {}, !Array.isArray(n) || null !== t && "string" != typeof t ? (new L("Invalid namespaces config!").throw(), e) : Object.assign(e, {
                    feature: t,
                    common: n.filter(function(t) {
                        var e = k(t);
                        if (Array.isArray(e) && e.length === E) {
                            e = P(e, 1)[0];
                            if (-1 < j.indexOf(e)) return !0;
                            new L("Requested namespace ".concat(t, " is not a common namespace!")).throw()
                        }
                        return !1
                    })
                }));
                return function() {
                    ! function(t, e) {
                        if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
                        t.prototype = Object.create(e && e.prototype, {
                            constructor: {
                                value: t,
                                writable: !0,
                                configurable: !0
                            }
                        }), e && T(t, e)
                    }(i, f().Component);
                    var t, e, n, o = D(i);

                    function i(t) {
                        var e;
                        ! function(t) {
                            if (!(t instanceof i)) throw new TypeError("Cannot call a class as a function")
                        }(this), (e = o.call(this, t)).intl = new S.Intl, e.translate = e.translate.bind(N(e));
                        var n = a.common,
                            t = a.feature,
                            r = new S.TranslationResourceProvider(e.intl),
                            t = [].concat(x(n), [t]).filter(function(t) {
                                return !!t
                            }).map(function(t) {
                                return r.getTranslationResource(t)
                            });
                        return e.state = {
                            languageResources: r.mergeTranslationResources.apply(r, x(t))
                        }, e
                    }
                    return t = i, (e = [{
                        key: "translate",
                        value: function(t, e) {
                            return this.state.languageResources.get(t, e)
                        }
                    }, {
                        key: "render",
                        value: function() {
                            return f().createElement(r, I({}, this.props, {
                                translate: this.translate,
                                intl: this.intl
                            }))
                        }
                    }]) && C(t.prototype, e), n && C(t, n), i
                }()
            }, "withTranslations"), window.ReactUtilities = {
                makeActionCreator: function(n) {
                    for (var t = arguments.length, o = new Array(1 < t ? t - 1 : 0), e = 1; e < t; e++) o[e - 1] = arguments[e];
                    return function() {
                        for (var t = arguments.length, r = new Array(t), e = 0; e < t; e++) r[e] = arguments[e];
                        return function(e) {
                            for (var t = 1; t < arguments.length; t++) {
                                var n = null != arguments[t] ? arguments[t] : {};
                                t % 2 ? c(Object(n), !0).forEach(function(t) {
                                    s(e, t, n[t])
                                }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : c(Object(n)).forEach(function(t) {
                                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                                })
                            }
                            return e
                        }({
                            type: n
                        }, o.reduce(function(t, e, n) {
                            return Object.assign(t, s({}, e, r[n]))
                        }, {}))
                    }
                },
                withComponentStatus: l,
                withTranslations: r,
                useDebounce: function(e, n) {
                    var t = (0, a.useState)(e),
                        r = t[0],
                        o = t[1];
                    return (0, a.useEffect)(function() {
                        var t = setTimeout(function() {
                            o(e)
                        }, n);
                        return function() {
                            clearTimeout(t)
                        }
                    }, [e, n]), r
                },
                useInterval: t,
                useLocalStorage: e,
                useOnClickOutside: function(n, r) {
                    (0, a.useEffect)(function() {
                        function t(e) {
                            n.every(function(t) {
                                return !(null != t && t.current)
                            }) || -1 < n.findIndex(function(t) {
                                return e.target instanceof Node && (null === (t = null == t ? void 0 : t.current) || void 0 === t ? void 0 : t.contains(e.target))
                            }) || r(e)
                        }
                        return document.addEventListener("mousedown", t), document.addEventListener("touchstart", t),
                            function() {
                                document.removeEventListener("mousedown", t), document.removeEventListener("touchstart", t)
                            }
                    }, [n, r])
                },
                usePrevious: function(t) {
                    var e = (0, a.useRef)();
                    return (0, a.useEffect)(function() {
                        e.current = t
                    }, [t]), e.current
                },
                useWindowActiveState: n
            }
        }()
}();
//# sourceMappingURL=https://js.rbxcdn.com/327119fabeb607c3556c-reactUtilities.js.map

/* Bundle detector */
window.Roblox && window.Roblox.BundleDetector && window.Roblox.BundleDetector.bundleDetected("ReactUtilities");