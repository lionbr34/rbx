! function() {
    "use strict";

    function t() {
        return document.getElementById(u)
    }
    var a = {
            n: function(e) {
                var t = e && e.__esModule ? function() {
                    return e.default
                } : function() {
                    return e
                };
                return a.d(t, {
                    a: t
                }), t
            },
            d: function(e, t) {
                for (var n in t) a.o(t, n) && !a.o(e, n) && Object.defineProperty(e, n, {
                    enumerable: !0,
                    get: t[n]
                })
            },
            o: function(e, t) {
                return Object.prototype.hasOwnProperty.call(e, t)
            }
        },
        n = CoreUtilities,
        d = React,
        f = a.n(d),
        e = ReactDOM,
        r = ReactUtilities,
        g = Roblox,
        i = g.EnvironmentUrls.apiGatewayUrl,
        p = function(e) {
            return n.urlService.getUrlWithLocale("/info/age-recommendations-policy", e)
        },
        o = function() {
            return i + "/experience-guidelines-api/experience-guidelines/metadata"
        },
        c = function() {
            return i + "/experience-guidelines-api/experience-guidelines/get-age-recommendation"
        },
        y = function() {
            var e = {
                url: o(),
                retryable: !0,
                withCredentials: !0
            };
            return n.httpService.post(e)
        },
        v = function(e) {
            var t = {
                    url: c(),
                    retryable: !0,
                    withCredentials: !0
                },
                e = {
                    universeId: e
                };
            return n.httpService.post(t, e)
        },
        l = {
            common: [],
            feature: "Feature.GameDetails"
        },
        u = "game-detail-meta-data",
        b = function() {
            var e, a = (null === (e = t()) || void 0 === e ? void 0 : e.dataset) || {};
            return Object.keys(a).reduce(function(e, t) {
                var n = a[t].toLowerCase();
                return e[t] = "true" === n || "false" !== n && a[t], e
            }, {})
        },
        h = "Suitable for everyone",
        E = "Age Guidelines",
        x = "N/A",
        w = function(e, o, c, l) {
            return new(c = c || Promise)(function(n, t) {
                function a(e) {
                    try {
                        i(l.next(e))
                    } catch (e) {
                        t(e)
                    }
                }

                function r(e) {
                    try {
                        i(l.throw(e))
                    } catch (e) {
                        t(e)
                    }
                }

                function i(e) {
                    var t;
                    e.done ? n(e.value) : ((t = e.value) instanceof c ? t : new c(function(e) {
                        e(t)
                    })).then(a, r)
                }
                i((l = l.apply(e, o || [])).next())
            })
        },
        R = function(n, a) {
            var r, i, o, c = {
                    label: 0,
                    sent: function() {
                        if (1 & o[0]) throw o[1];
                        return o[1]
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
                        if (r) throw new TypeError("Generator is already executing.");
                        for (; c;) try {
                            if (r = 1, i && (o = 2 & t[0] ? i.return : t[0] ? i.throw || ((o = i.return) && o.call(i), 0) : i.next) && !(o = o.call(i, t[1])).done) return o;
                            switch (i = 0, o && (t = [2 & t[0], o.value]), t[0]) {
                                case 0:
                                case 1:
                                    o = t;
                                    break;
                                case 4:
                                    return c.label++, {
                                        value: t[1],
                                        done: !1
                                    };
                                case 5:
                                    c.label++, i = t[1], t = [0];
                                    continue;
                                case 7:
                                    t = c.ops.pop(), c.trys.pop();
                                    continue;
                                default:
                                    if (!(o = 0 < (o = c.trys).length && o[o.length - 1]) && (6 === t[0] || 2 === t[0])) {
                                        c = 0;
                                        continue
                                    }
                                    if (3 === t[0] && (!o || t[1] > o[0] && t[1] < o[3])) {
                                        c.label = t[1];
                                        break
                                    }
                                    if (6 === t[0] && c.label < o[1]) {
                                        c.label = o[1], o = t;
                                        break
                                    }
                                    if (o && c.label < o[2]) {
                                        c.label = o[2], c.ops.push(t);
                                        break
                                    }
                                    o[2] && c.ops.pop(), c.trys.pop();
                                    continue
                            }
                            t = a.call(n, c)
                        } catch (e) {
                            t = [6, e], i = 0
                        } finally {
                            r = o = 0
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
        s = (0, r.withTranslations)(function(e) {
            var t = e.isDisplayAgeRecommendationDetails,
                n = (e.translate, (0, d.useState)(!1)),
                a = n[0],
                r = n[1],
                i = (0, d.useState)(!1),
                o = (i[0], i[1]),
                e = (0, d.useState)(null),
                n = e[0],
                c = e[1],
                i = (0, d.useState)(!1),
                e = i[0],
                l = i[1],
                i = (b() || {}).universeId,
                u = void 0 === i ? "" : i,
                s = (0, d.useCallback)(function() {
                    return w(void 0, void 0, void 0, function() {
                        var t, n;
                        return R(this, function(e) {
                            switch (e.label) {
                                case 0:
                                    r(!0), e.label = 1;
                                case 1:
                                    return e.trys.push([1, 3, 4, 5]), [4, v(u)];
                                case 2:
                                    return (n = e.sent(), t = n.data, null == (null === (n = t.ageRecommendationDetails) || void 0 === n ? void 0 : n.summary.ageRecommendation)) ? (c(null), [2]) : (n = (n = null === (n = t.ageRecommendationDetails.descriptorUsages) || void 0 === n ? void 0 : n.map(function(e) {
                                        return e.descriptor.displayName
                                    }).join(", ")) || (0 === t.ageRecommendationDetails.summary.ageRecommendation.minimumAge ? h : ""), t = {
                                        descriptorDisplayNames: n,
                                        ageRecommendationBracket: t.ageRecommendationDetails.summary.ageRecommendation.displayName
                                    }, c(t), [3, 5]);
                                case 3:
                                    return e.sent(), o(!0), c(null), [3, 5];
                                case 4:
                                    return r(!1), [7];
                                case 5:
                                    return [2]
                            }
                        })
                    })
                }, [u]),
                m = (0, d.useCallback)(function() {
                    return w(void 0, void 0, void 0, function() {
                        var t;
                        return R(this, function(e) {
                            switch (e.label) {
                                case 0:
                                    return e.trys.push([0, 4, 5, 6]), r(!0), [4, y()];
                                case 1:
                                    return (t = e.sent(), (t = t.data).isSurfacingGuidelinesForUserEnabled) ? (l(t.isSurfacingGuidelinesForUserEnabled), [4, s()]) : [3, 3];
                                case 2:
                                    e.sent(), e.label = 3;
                                case 3:
                                    return [3, 6];
                                case 4:
                                    return e.sent(), o(!0), l(!1), c(null), [3, 6];
                                case 5:
                                    return r(!1), [7];
                                case 6:
                                    return [2]
                            }
                        })
                    })
                }, [s]);
            if ((0, d.useEffect)(function() {
                    m()
                }, [m]), !e) return f().createElement(f().Fragment, null);
            e = (new g.Intl).getRobloxLocale();
            if (t) {
                if (n) return f().createElement("div", {
                    className: "age-rating-details col-xs-12 section-content"
                }, f().createElement("a", {
                    className: "age-rating-age-bracket text-lead text-link",
                    href: p(e)
                }, n.ageRecommendationBracket), f().createElement("span", {
                    className: "age-rating-display-name text"
                }, n.descriptorDisplayNames));
                if (!a) return f().createElement("div", {
                    className: "age-rating-details col-xs-12 section-content"
                }, f().createElement("a", {
                    className: "age-rating-age-bracket text-lead text-link",
                    href: p(e)
                }, E), f().createElement("span", {
                    className: "age-rating-display-name text"
                }, x))
            }
            return n ? f().createElement("a", {
                className: "age-recommendation-title text",
                href: "#game-age-recommendation-details"
            }, n.ageRecommendationBracket) : f().createElement(f().Fragment, null)
        }, l),
        m = "game-age-recommendation-container",
        k = "game-age-recommendation-details";
    (0, n.ready)(function() {
        document.getElementById(k) && (0, e.render)(f().createElement(s, {
            isDisplayAgeRecommendationDetails: !0
        }), document.getElementById(k)), document.getElementById(m) && (0, e.render)(f().createElement(s, {
            isDisplayAgeRecommendationDetails: !1
        }), document.getElementById(m))
    })
}();
//# sourceMappingURL=https://js.rbxcdn.com/fe4146d147410d4f0363-gameGuidelines.bundle.min.js.map

/* Bundle detector */
window.Roblox && window.Roblox.BundleDetector && window.Roblox.BundleDetector.bundleDetected("GameGuidelines");