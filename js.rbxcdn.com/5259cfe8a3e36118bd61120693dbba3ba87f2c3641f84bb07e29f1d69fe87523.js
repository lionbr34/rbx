! function() {
    "use strict";

    function o() {
        var e = document.cookie.split(";"),
            n = null;
        return e.forEach(function(e) {
            e = e.trim();
            e && e.startsWith(i) && (e = e.split("="), n = e.pop())
        }), n
    }
    var r = {
            n: function(e) {
                var n = e && e.__esModule ? function() {
                    return e.default
                } : function() {
                    return e
                };
                return r.d(n, {
                    a: n
                }), n
            },
            d: function(e, n) {
                for (var t in n) r.o(n, t) && !r.o(e, t) && Object.defineProperty(e, t, {
                    enumerable: !0,
                    get: n[t]
                })
            },
            o: function(e, n) {
                return Object.prototype.hasOwnProperty.call(e, n)
            }
        },
        e = CoreUtilities,
        u = React,
        c = r.n(u),
        n = ReactDOM,
        i = "WebAppComponentSuffix",
        s = {
            setADInCookie: function(e) {
                var n, t = o(),
                    n = i + "=" + encodeURIComponent(e) + "; path=/; domain=." + (n = null !== (n = null === (n = null === window || void 0 === window ? void 0 : window.location) || void 0 === n ? void 0 : n.hostname) && void 0 !== n ? n : "").substring(n.indexOf(".") + 1) + ";";
                return document.cookie = n, 0 < (null == t ? void 0 : t.length) && 0 === (null == e ? void 0 : e.length) || 0 < (null == (t = o()) ? void 0 : t.length) && 0 === (null == e ? void 0 : e.length) ? "You have reset back to master build" : t === e ? "Nice, you have set " + e + " in cookie successfully!" : "Oh no, you have not set " + e + " in cookie, could you try again ? or contact #web-frontend-guild slack channel"
            },
            getADFromCookie: o,
            readme: "setADInCookie({AD username}) is for set AD into cookie; getADFromCookie() returns current Current AD from cookie. For more questions, ask in #web-frontend-guild slack channel"
        };

    function d(e, n) {
        return function(e) {
            if (Array.isArray(e)) return e
        }(e) || function(e, n) {
            if ("undefined" == typeof Symbol || !(Symbol.iterator in Object(e))) return;
            var t = [],
                o = !0,
                r = !1,
                i = void 0;
            try {
                for (var a, l = e[Symbol.iterator](); !(o = (a = l.next()).done) && (t.push(a.value), !n || t.length !== n); o = !0);
            } catch (e) {
                r = !0, i = e
            } finally {
                try {
                    o || null == l.return || l.return()
                } finally {
                    if (r) throw i
                }
            }
            return t
        }(e, n) || function(e, n) {
            if (!e) return;
            if ("string" == typeof e) return a(e, n);
            var t = Object.prototype.toString.call(e).slice(8, -1);
            "Object" === t && e.constructor && (t = e.constructor.name);
            if ("Map" === t || "Set" === t) return Array.from(e);
            if ("Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)) return a(e, n)
        }(e, n) || function() {
            throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }()
    }

    function a(e, n) {
        (null == n || n > e.length) && (n = e.length);
        for (var t = 0, o = new Array(n); t < n; t++) o[t] = e[t];
        return o
    }

    function t() {
        var e = d((0, u.useState)(null), 2),
            n = e[0],
            t = e[1],
            o = d((0, u.useState)(!1), 2),
            r = o[0],
            i = o[1],
            e = d((0, u.useState)(s.getADFromCookie()), 2),
            a = e[0],
            l = e[1],
            o = function(e) {
                e = e.target.value;
                e !== a && ("master" === e.toLowerCase() && (e = ""), l(e), s.setADInCookie(e), t("The local development is point to ".concat(e || "master", " now. Please reload web page")))
            },
            e = a || "AD username (e.g. brose)";
        return c().createElement("div", {
            className: "configure-webapps-container font-small ".concat(r ? "minimized" : "")
        }, c().createElement("div", {
            className: "clearfix"
        }, c().createElement("button", {
            type: "button",
            className: "minimize-control font-bold",
            onClick: function() {
                i(function(e) {
                    return !e
                })
            },
            variant: "secondary",
            size: "xs"
        }, r ? "-" : "+")), !r && c().createElement(c().Fragment, null, c().createElement("p", {
            className: "font-small"
        }, "Enter your AD for local development branch or master for master branch"), " ", c().createElement("input", {
            id: "webapp-component-suffix",
            className: "form-control font-small input-field",
            name: "webapp-component",
            placeholder: e,
            value: a,
            onChange: o,
            onBlur: o
        }), null != n && c().createElement("p", {
            className: "font-small text-success"
        }, n)))
    }
    t.propTypes = {};
    var l = t;

    function m() {
        var e = Array.prototype.slice.call(document.scripts).filter(function(e) {
                return (null == e ? void 0 : e.dataset) && (null === (e = null == e ? void 0 : e.dataset) || void 0 === e ? void 0 : e.bundlename)
            }),
            o = {};
        return e.map(function(e) {
            var n = e.dataset,
                t = n.bundlename,
                e = n.bundleSource,
                n = n.bundleContext;
            return !(o[t] = {
                bundleSource: "Main" === e ? "Master Build" : e + " Build",
                bundleContext: null != n ? n : ""
            })
        }), o
    }
    var f = {
        getAllBundleNames: m,
        findBundleStatus: function(e) {
            var n;
            if (e) {
                var t = m();
                if ("string" == typeof e) return null !== (n = t[e]) && void 0 !== n ? n : e + " is not found";
                if (Array.isArray(e)) return e.map(function(e) {
                    var n;
                    return null !== (n = t[e]) && void 0 !== n ? n : e + " is not found"
                })
            }
            return "Expect valid argument inside findBundleStatus, either single string name or array of names"
        },
        readme: "Master build means the official deployed build from admin site in the current environment; \n\n Validation Build means the current build is only deployed for validation (VPN users will see only); \n\n Development build is the resource from Engineer local build, depend on which AD setup in to cookie, check ConfigureWebApps.getADFromCookie(); \n\n Unknown Build might be translation string bundle or invalid "
    };
    (0, e.ready)(function() {
        "True" === document.getElementById("web-app-configuration-enabled") && (0, n.render)(c().createElement(l, null), document.body.appendChild(document.createElement("DIV")))
    }), window.ConfigureWebApps = s, window.StaticBundlesInfo = f
}();
//# sourceMappingURL=https://js.rbxcdn.com/1051c2574b9aa769aaac-configureWebApps.js.map

/* Bundle detector */
window.Roblox && window.Roblox.BundleDetector && window.Roblox.BundleDetector.bundleDetected("ConfigureWebApps");