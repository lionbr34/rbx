! function() {
    var a = {
            5: function(e, t, a) {
                var n = {
                    "./captchaComponent.js": 533
                };

                function r(e) {
                    e = o(e);
                    return a(e)
                }

                function o(e) {
                    if (a.o(n, e)) return n[e];
                    e = new Error("Cannot find module '" + e + "'");
                    throw e.code = "MODULE_NOT_FOUND", e
                }
                r.keys = function() {
                    return Object.keys(n)
                }, r.resolve = o, (e.exports = r).id = 5
            },
            37: function(e, t, a) {
                var n = {
                    "./captchaV2Constants.js": 731
                };

                function r(e) {
                    e = o(e);
                    return a(e)
                }

                function o(e) {
                    if (a.o(n, e)) return n[e];
                    e = new Error("Cannot find module '" + e + "'");
                    throw e.code = "MODULE_NOT_FOUND", e
                }
                r.keys = function() {
                    return Object.keys(n)
                }, r.resolve = o, (e.exports = r).id = 37
            },
            354: function(e, t, a) {
                var n = {
                    "./captchaV2Controller.js": 72
                };

                function r(e) {
                    e = o(e);
                    return a(e)
                }

                function o(e) {
                    if (a.o(n, e)) return n[e];
                    e = new Error("Cannot find module '" + e + "'");
                    throw e.code = "MODULE_NOT_FOUND", e
                }
                r.keys = function() {
                    return Object.keys(n)
                }, r.resolve = o, (e.exports = r).id = 354
            },
            569: function(e, t, a) {
                var n = {
                    "./captchaV2Service.js": 803,
                    "./funCaptchaService.js": 630
                };

                function r(e) {
                    e = o(e);
                    return a(e)
                }

                function o(e) {
                    if (a.o(n, e)) return n[e];
                    e = new Error("Cannot find module '" + e + "'");
                    throw e.code = "MODULE_NOT_FOUND", e
                }
                r.keys = function() {
                    return Object.keys(n)
                }, r.resolve = o, (e.exports = r).id = 569
            },
            111: function(e, t, a) {
                var n = {
                    "./captchaIdValue.js": 607
                };

                function r(e) {
                    e = o(e);
                    return a(e)
                }

                function o(e) {
                    if (a.o(n, e)) return n[e];
                    e = new Error("Cannot find module '" + e + "'");
                    throw e.code = "MODULE_NOT_FOUND", e
                }
                r.keys = function() {
                    return Object.keys(n)
                }, r.resolve = o, (e.exports = r).id = 111
            },
            871: function(e, t, a) {
                var n = {
                    "./components/templates/captcha.html": 704
                };

                function r(e) {
                    e = o(e);
                    return a(e)
                }

                function o(e) {
                    if (a.o(n, e)) return n[e];
                    e = new Error("Cannot find module '" + e + "'");
                    throw e.code = "MODULE_NOT_FOUND", e
                }
                r.keys = function() {
                    return Object.keys(n)
                }, r.resolve = o, (e.exports = r).id = 871
            },
            726: function(e) {
                function o(e) {
                    return e.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase()
                }

                function i(e) {
                    return e.split("/").pop().replace(".html", "")
                }
                var t = {
                    importFilesUnderPath: function(e) {
                        e.keys().forEach(e)
                    },
                    templateCacheGenerator: function(e, t, n, r) {
                        return e.module(t, []).run(["$templateCache", function(a) {
                            n && n.keys().forEach(function(e) {
                                var t = o(i(e));
                                a.put(t, n(e))
                            }), r && r.keys().forEach(function(e) {
                                var t = o(i(e));
                                a.put(t, r(e).replace(/<\/?script[^>]*>/gi, ""))
                            })
                        }])
                    }
                };
                e.exports = t
            },
            809: function(e, t, a) {
                "use strict";
                var n = a(734),
                    n = a.n(n)().module("captchaV2", ["captchaV2Templates"]);
                t.Z = n
            },
            533: function(e, t, a) {
                "use strict";
                a.r(t);
                var n = {
                    templateUrl: "captcha",
                    bindings: {
                        activated: "=",
                        captchaActionType: "<",
                        extraValidationParams: "<",
                        returnTokenInSuccessCb: "<",
                        inputParams: "<",
                        captchaPassed: "&",
                        captchaFailed: "&",
                        captchaDismissed: "&?"
                    },
                    controller: "captchaV2Controller"
                };
                a(809).Z.component("captcha", n), t.default = n
            },
            731: function(e, t, a) {
                "use strict";
                a.r(t);
                var n = a(792),
                    a = a(809),
                    n = {
                        urls: {
                            getMetadata: n.EnvironmentUrls.apiGatewayCdnUrl + "/captcha/v1/metadata",
                            funCaptchaRedeem: {
                                WebSignup: n.EnvironmentUrls.captchaApi + "/v1/funcaptcha/signup/web",
                                AppSignup: n.EnvironmentUrls.captchaApi + "/v1/funcaptcha/signup/app",
                                WebLogin: n.EnvironmentUrls.captchaApi + "/v1/funcaptcha/login/web",
                                AppLogin: n.EnvironmentUrls.captchaApi + "/v1/funcaptcha/login/app",
                                WebResetPassword: n.EnvironmentUrls.captchaApi + "/v1/funcaptcha/resetpassword/web",
                                UserAction: n.EnvironmentUrls.captchaApi + "/v1/funcaptcha/user",
                                WebGamecardRedemption: n.EnvironmentUrls.captchaApi + "/v1/funcaptcha/gamecardredemption/web"
                            }
                        },
                        captchaActionTypes: {
                            login: "login",
                            appLogin: "appLogin",
                            signup: "signup",
                            appSignup: "appSignup",
                            groupJoin: "groupJoin",
                            groupWallPost: "groupWallPost",
                            resetPassword: "resetPassword",
                            toyCodeRedeem: "toyCodeRedeem",
                            supportRequest: "supportRequest",
                            followUser: "followUser"
                        },
                        funCaptchaCaptchaTypes: {
                            login: "Login",
                            appLogin: "AppLogin",
                            signup: "Signup",
                            appSignup: "AppSignup",
                            groupJoin: "JoinGroup",
                            groupWallPost: "GroupWallPost",
                            resetPassword: "ResetPassword",
                            toyCodeRedeem: "ToyCodeRedeem",
                            supportRequest: "SupportRequest",
                            followUser: "FollowUser"
                        },
                        funCaptchaPublicKeyMap: {
                            Login: "ACTION_TYPE_WEB_LOGIN",
                            AppLogin: "ACTION_TYPE_WEB_LOGIN",
                            Signup: "ACTION_TYPE_WEB_SIGNUP",
                            AppSignup: "ACTION_TYPE_WEB_SIGNUP",
                            JoinGroup: "ACTION_TYPE_GROUP_JOIN",
                            GroupWallPost: "ACTION_TYPE_GROUP_WALL_POST",
                            ResetPassword: "ACTION_TYPE_WEB_RESET_PASSWORD",
                            ToyCodeRedeem: "ACTION_TYPE_WEB_GAMECARD_REDEMPTION",
                            SupportRequest: "ACTION_TYPE_SUPPORT_REQUEST",
                            FollowUser: "ACTION_TYPE_FOLLOW_USER"
                        },
                        funCaptchaEvents: {
                            resolve: "resolve",
                            reject: "reject",
                            shown: "shown"
                        },
                        captchaProviders: {
                            arkoseLabs: "PROVIDER_ARKOSE_LABS"
                        },
                        errorCodes: {
                            internal: {
                                unknown: 0,
                                missingPrivateKey: 1,
                                missingActionType: 2,
                                failedToLoadProviderScript: 3,
                                failedToVerify: 4
                            }
                        }
                    };
                a.Z.constant("captchaV2Constants", n), t.default = n
            },
            72: function(e, t, a) {
                "use strict";
                a.r(t);
                a = a(809);

                function n(a, n, r, e) {
                    var o = this,
                        i = !1,
                        t = !1;
                    o.id = null, o.captchaEnded = function() {
                        o.activated = !1, o.shown = !1, i = !1
                    }, o.captchaShown = function() {
                        o.shown = !0, e.$apply()
                    }, o.hideCaptcha = function() {
                        o.activated = !1, o.captchaDismissed && o.captchaDismissed()()
                    }, o.getCaptchaClasses = function() {
                        return {
                            "captcha-activated": o.shown && o.activated
                        }
                    };
                    o.$onInit = function() {
                        var e, t;
                        null === o.id && (o.id = a.getCaptchaId()), o.activated && !i && (t = (e = (i = !0) === o.returnTokenInSuccessCb) ? function(e) {
                            var t, a;
                            o.activated && (t = "", e.constructor === String ? a = e : (a = e.token, t = e.unifiedCaptchaId), a = {
                                captchaId: t,
                                captchaToken: a,
                                captchaProvider: n.captchaProviders.arkoseLabs
                            }, o.captchaPassed()(a)), o.captchaEnded()
                        } : function() {
                            o.activated && o.captchaPassed()(), o.captchaEnded()
                        }, r.render(o.id, o.captchaActionType, o.captchaShown, e, o.inputParams, o.extraValidationParams).then(t, function(e) {
                            o.activated && o.captchaFailed()(e), o.captchaEnded()
                        }))
                    }, o.$doCheck = function() {
                        t !== o.activated && (t = o.activated, o.$onInit())
                    }.bind(o)
                }
                n.$inject = ["captchaV2Service", "captchaV2Constants", "funCaptchaService", "$scope"], a.Z.controller("captchaV2Controller", n), t.default = n
            },
            803: function(e, t, a) {
                "use strict";
                a.r(t);
                a = a(809);

                function n(e, n, r, t) {
                    var o = null;
                    return {
                        getMetadata: function() {
                            return e(function(t, e) {
                                var a;
                                o ? t(o) : (a = {
                                    url: r.urls.getMetadata
                                }, n.httpGet(a).then(function(e) {
                                    t(o = e)
                                }, e))
                            })
                        },
                        getCaptchaId: function() {
                            return ++t.id, "captchaV2-" + t.id
                        }
                    }
                }
                n.$inject = ["$q", "httpService", "captchaV2Constants", "captchaIdCounter"], a.Z.factory("captchaV2Service", n), t.default = n
            },
            630: function(e, t, a) {
                "use strict";
                a.r(t);
                var v = a(870),
                    g = a(170),
                    a = a(809);

                function n(e, p, t, d, a) {
                    function l(e, t, a) {
                        n.hasOwnProperty(e) && n[e].forEach(function(e) {
                            e.name === t && e.handle(a)
                        })
                    }

                    function f(e, t, a) {
                        a && (n[e] = n[e] || [], n[e].push({
                            name: t,
                            handle: a
                        }))
                    }

                    function h(e) {
                        n[e] = []
                    }
                    var n = {};
                    return a.getMetadata().then(function(e) {
                        var t, a = e.funCaptchaPublicKeys,
                            n = [];
                        for (t in d.funCaptchaPublicKeyMap) {
                            if (!d.funCaptchaPublicKeyMap.hasOwnProperty(t)) return;
                            var r = d.funCaptchaPublicKeyMap[t];
                            r && a.hasOwnProperty(r) ? n.push({
                                Type: t,
                                ApiUrl: d.urls.funCaptchaRedeem[r],
                                PublicKey: a[r]
                            }) : p.warn("Missing public key for: ".concat(t, "\n\tpublicKeyType: ").concat(r))
                        }
                        p.debug("Add captcha types from new webapp:", n), g.Z.addCaptchaTypes(n, !1)
                    }, function() {
                        p.debug("Failed to load captcha metadata for funCaptchaService. FunCaptcha will not work properly.")
                    }), {
                        render: function(r, o, i, c, s, u) {
                            return e(function(e, t) {
                                var a = d.funCaptchaCaptchaTypes[o],
                                    n = "\n\telementId: ".concat(r, "\n\tcaptchaActionType: ").concat(o, "\n\tfunCaptchaType: ").concat(a);
                                if (p.debug("Render captcha".concat(n)), !a) return p.warn("Missing funCaptchaType for ".concat(o)), void t(d.errorCodes.internal.missingActionType);
                                f(a, d.funCaptchaEvents.resolve, e), f(a, d.funCaptchaEvents.reject, t), f(a, d.funCaptchaEvents.shown, i), t = c ? function(e, t) {
                                    n += "\ntoken: ".concat(e), p.debug("Passed captcha".concat(n)), l(a, d.funCaptchaEvents.resolve, null === t || "" === t ? e : {
                                        token: e,
                                        unifiedCaptchaId: t
                                    }), h(a)
                                } : function() {
                                    p.debug("Passed captcha".concat(n)), l(a, d.funCaptchaEvents.resolve), h(a)
                                }, g.Z.render(r, {
                                    cType: a,
                                    inputParams: s,
                                    returnTokenInSuccessCb: c,
                                    successCb: t,
                                    shownCb: function() {
                                        p.debug("Captcha shown".concat(n)), l(a, d.funCaptchaEvents.shown)
                                    },
                                    errorCb: function(e, t) {
                                        t ? p.error("Failed captcha (".concat(e, ":) ").concat(t).concat(n)) : p.debug("Failed captcha (".concat(e, ")").concat(n));
                                        e = function(e) {
                                            switch (e) {
                                                case v.Z.errorCodes.failedToLoadProviderScript:
                                                    return d.errorCodes.internal.failedToLoadProviderScript;
                                                case v.Z.errorCodes.failedToVerify:
                                                    return d.errorCodes.internal.failedToVerify;
                                                default:
                                                    return d.errorCodes.internal.unknown
                                            }
                                        }(e);
                                        l(a, d.funCaptchaEvents.reject, e), h(a)
                                    },
                                    extraValidationParams: u || {}
                                })
                            })
                        }
                    }
                }
                n.$inject = ["$q", "$log", "$window", "captchaV2Constants", "captchaV2Service"], a.Z.factory("funCaptchaService", n), t.default = n
            },
            607: function(e, t, a) {
                "use strict";
                a.r(t), a(809).Z.value("captchaIdCounter", {
                    id: 0
                })
            },
            772: function(e, t, a) {
                "use strict";

                function r(e, t) {
                    for (var a = 0; a < t.length; a++) {
                        var n = t[a];
                        n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
                    }
                }
                a.d(t, {
                    Z: function() {
                        return n
                    }
                });
                var n = function() {
                    function t() {
                        ! function(e) {
                            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                        }(this), this.timeStore = {}
                    }
                    var e, a, n;
                    return e = t, (a = [{
                        key: "start",
                        value: function(e) {
                            this.timeStore[e] = Date.now()
                        }
                    }, {
                        key: "end",
                        value: function(e) {
                            var t = this.timeStore[e];
                            return t ? (delete this.timeStore[e], (new Date).valueOf() - t) : null
                        }
                    }]) && r(e.prototype, a), n && r(e, n), t
                }()
            },
            107: function(e, t, a) {
                "use strict";
                a.d(t, {
                    mD: function() {
                        return i
                    },
                    IF: function() {
                        return c
                    },
                    HK: function() {
                        return s
                    }
                });
                var n = a(792),
                    t = a(609),
                    r = a.n(t),
                    n = null !== (n = n.EnvironmentUrls.apiGatewayUrl) && void 0 !== n ? n : "URL_NOT_FOUND",
                    o = "".concat(n, "/account-security-service"),
                    i = "event_captcha",
                    c = "solve_time_captcha",
                    s = function(a) {
                        return new Promise(function(e, t) {
                            r().ajax({
                                method: "POST",
                                url: "".concat(o, "/v1/metrics/record"),
                                data: JSON.stringify(a),
                                contentType: "application/json",
                                timeout: 1e4,
                                success: e,
                                error: t,
                                withCredentials: !0
                            })
                        })
                    }
            },
            770: function(e, t, a) {
                "use strict";
                a.d(t, {
                    UG: function() {
                        return R
                    },
                    K3: function() {
                        return y.Z
                    },
                    r8: function() {
                        return U.Z
                    },
                    $3: function() {
                        return E.Z
                    },
                    Xs: function() {
                        return P
                    }
                });
                var r, o, n, i, c, s, u, p, d, l, f, h, v, g, m, t = a(609),
                    T = a.n(t),
                    C = a(792),
                    E = a(170),
                    y = a(870),
                    w = (n = o = !(r = {
                        shownCb: function() {
                            {
                                var e;
                                n || (C.Hybrid && C.Hybrid.Navigation && C.Hybrid.Navigation.navigateToFeature({
                                    feature: y.Z.hybridEvents.shown
                                }), null !== (e = document.getElementById(y.Z.eventElementIds.shown)) && (e.value = y.Z.hybridEvents.shown, e.dispatchEvent(i)), n = !0)
                            }
                        },
                        successCb: function(e, t) {
                            var a = null;
                            null != e && "" != e && (a = {
                                captchaId: t,
                                captchaToken: e,
                                captchaProvider: y.Z.captchaProviders.arkoseLabs
                            });
                            C.Hybrid && C.Hybrid.Navigation && (null !== a ? C.Hybrid.Navigation.navigateToFeature({
                                feature: y.Z.hybridEvents.success,
                                captchaData: a
                            }) : C.Hybrid.Navigation.navigateToFeature({
                                feature: y.Z.hybridEvents.success
                            }));
                            e = document.getElementById(y.Z.eventElementIds.token);
                            null != e && (null !== a && (e.value = JSON.stringify(a)), e.dispatchEvent(i))
                        },
                        errorCb: S,
                        returnTokenInSuccessCb: !1,
                        inputParams: {
                            dataExchange: "",
                            unifiedCaptchaId: ""
                        },
                        extraValidationParams: {}
                    }), (t = document.createEvent("HTMLEvents")).initEvent("change", !1, !1), i = t, c = null, new Promise(function(t, a) {
                        c && t(c), T().ajax({
                            method: "GET",
                            url: y.Z.urls.getMetadata,
                            success: function(e) {
                                t(c = e)
                            },
                            error: function(e) {
                                a(e)
                            }
                        })
                    }).then(function(e) {
                        var t, a = e.funCaptchaPublicKeys,
                            n = [];
                        for (t in y.Z.funCaptchaPublicKeyMap) {
                            if (!y.Z.funCaptchaPublicKeyMap.hasOwnProperty(t)) return;
                            var r = y.Z.funCaptchaPublicKeyMap[t];
                            r && a.hasOwnProperty(r) ? n.push({
                                Type: b(t),
                                ApiUrl: y.Z.urls.funCaptchaRedeem[r],
                                PublicKey: a[r]
                            }) : console.warn("Missing public key for: ".concat(t, "\n\tpublicKeyType: ").concat(r))
                        }
                        console.debug("Add captcha types from new app:", n), E.Z.addCaptchaTypes(n, !1), o = !0
                    }, function(e) {
                        console.debug("Failed to load captcha metadata for funCaptchaService. FunCaptcha will not work properly.")
                    }), {
                        triggerCaptcha: function() {
                            var e, t, a, n;
                            E.Z ? (C.UrlParser && (e = C.UrlParser.getParameterValueByName("credentialstype", !1), t = C.UrlParser.getParameterValueByName("credentialsvalue", !1), null !== e && null !== t && (r.extraValidationParams.credentialsType = e, r.extraValidationParams.credentialsValue = t), r.returnTokenInSuccessCb = "1" === C.UrlParser.getParameterValueByName("hybrid-return-token", !1), null !== (t = C.UrlParser.getParameterValueByName("data-exchange-blob", !1)) && (r.inputParams.dataExchange = t), null !== (t = C.UrlParser.getParameterValueByName("hybrid-return-captcha-id", !1)) && (r.inputParams.unifiedCaptchaId = t)), a = new Date, n = setInterval(function() {
                                o ? (clearInterval(n), E.Z.render(y.Z.ids.appCaptcha, r)) : (new Date).getTime() - a.getTime() > y.Z.metadataLoadParameters.timeoutMilliseconds && (clearInterval(n), S())
                            }, y.Z.metadataLoadParameters.waitIntervalMilliseconds)) : S()
                        },
                        setCaptchaType: function(e) {
                            r.cType = b(e)
                        },
                        displayErrorMessage: S,
                        fetchLanguageResources: function(e) {
                            T().ajax({
                                method: "GET",
                                url: e,
                                dataType: "json",
                                data: y.Z.translationRequestParams,
                                success: function(e) {
                                    T()("#".concat(y.Z.messageElementIds.defaultError)).text(e["Response.CaptchaErrorFailedToVerify"])
                                }
                            })
                        },
                        captchaParams: r
                    });

                function S() {
                    T()("#".concat(y.Z.messageElementIds.defaultError)).show()
                }

                function b(e) {
                    return e.charAt(0).toLowerCase() + e.slice(1)
                }

                function P() {
                    w.triggerCaptcha()
                }

                function _(e) {
                    return e.charAt(0).toUpperCase() + e.slice(1)
                }

                function x() {
                    return (new Date).valueOf()
                }

                function I(e) {
                    "function" == typeof h && h();
                    var t, a = null;
                    p && (a = x() - p, t = function(e) {
                        for (var t = m.captchaSolvedPrefix, a = m.captchaSolveTimeIntervals, n = 0; n < a.length; n++) {
                            var r = a[n];
                            if (e <= 1e3 * r.seconds) return t + r.suffix
                        }
                        return t + m.captchaSolveTimeLarge
                    }(t = a), window.EventTracker && window.EventTracker.fireEvent(_(d + t)), p = null), k(d, e, a)
                }

                function O(e, t, a) {
                    C.EventStream && (t = t || 0, a = a ? "true" : "false", C.EventStream.SendEventWithTarget("captcha", e, {
                        solveDuration: t,
                        success: a,
                        provider: "Google"
                    }, C.EventStream.TargetTypes.WWW))
                }

                function k(e, t, a) {
                    t = {
                        "g-Recaptcha-Response": t,
                        isInvisible: g.invisible
                    };
                    T().ajax({
                        method: "POST",
                        data: t,
                        success: function() {
                            window.EventTracker && window.EventTracker.fireEvent(_(e + m.successSuffix)), O(e, a, !0), l && (l(), T()("#" + s).empty())
                        },
                        error: function() {
                            window.EventTracker && window.EventTracker.fireEvent(_(e + m.failSuffix)), O(e, a, !1), f && f(), C.BootstrapWidgets && C.BootstrapWidgets.ToggleSystemMessage(T()(".alert-warning"), 100, 2e3, y.Z.messages.error)
                        },
                        url: v[e]
                    })
                }
                var R = (v = y.Z.endpoints, g = {
                        invisible: !1
                    }, m = y.Z.serviceData, {
                        ids: y.Z.ids,
                        types: y.Z.types,
                        setEndpoint: function(e, t) {
                            v[e] = t
                        },
                        getEndpoint: function(e) {
                            return v[e]
                        },
                        setInvisibleMode: function(e) {
                            g.invisible = e
                        },
                        getInvisibleMode: function() {
                            return g.invisible
                        },
                        setSiteKey: function(e) {
                            m.sitekey = e
                        },
                        verify: k,
                        reset: function(e, t, a, n) {
                            d = e, l = t, f = a, h = n, window.grecaptcha && (window.grecaptcha.reset(u), g.invisible && window.grecaptcha.execute(u))
                        },
                        render: function(e, t, a, n, r) {
                            d = t, l = a, f = n, h = r, s = e, window.grecaptcha && (r = {
                                sitekey: m.sitekey,
                                callback: I,
                                badge: m.badgePosition
                            }, g.invisible && (r.size = "invisible"), u = window.grecaptcha.render(e, r), window.EventTracker && window.EventTracker.fireEvent(_(d + m.displayedSuffix)), p = x())
                        },
                        execute: function() {
                            window.grecaptcha && g.invisible && window.grecaptcha.execute(u)
                        },
                        setMultipleEndpoints: function(e, t) {
                            if (e && t)
                                for (var a = 0; a < e.length; a++) {
                                    var n = (n = e[a]).charAt(0).toLowerCase() + n.slice(1);
                                    v[n] = t
                                }
                        }
                    }),
                    U = a(506);
                window.Roblox.triggerCaptcha = P, window.Roblox.Captcha = R, window.Roblox.AppCaptcha = w, window.Roblox.CaptchaLogger = U.Z, window.Roblox.FunCaptcha = E.Z, window.Roblox.CaptchaV2ServiceCaptchaIdBase = 0, window.Roblox.CaptchaConstants = y.Z, window.triggerCaptcha = P
            },
            870: function(e, t, a) {
                "use strict";
                var n = a(792);
                Roblox.EnvironmentUrls = Roblox.EnvironmentUrls || {};
                n = {
                    urls: {
                        getMetadata: "".concat(n.EnvironmentUrls.apiGatewayCdnUrl, "/captcha/v1/metadata"),
                        funCaptchaRedeem: {
                            WebSignup: "".concat(n.EnvironmentUrls.captchaApi, "/v1/funcaptcha/signup/web"),
                            AppSignup: "".concat(n.EnvironmentUrls.captchaApi, "/v1/funcaptcha/signup/app"),
                            WebLogin: "".concat(n.EnvironmentUrls.captchaApi, "/v1/funcaptcha/login/web"),
                            AppLogin: "".concat(n.EnvironmentUrls.captchaApi, "/v1/funcaptcha/login/app"),
                            WebResetPassword: "".concat(n.EnvironmentUrls.captchaApi, "/v1/funcaptcha/resetpassword/web"),
                            UserAction: "".concat(n.EnvironmentUrls.captchaApi, "/v1/funcaptcha/user"),
                            WebGamecardRedemption: "".concat(n.EnvironmentUrls.captchaApi, "/v1/funcaptcha/gamecardredemption/web")
                        }
                    },
                    funCaptchaPublicKeyMap: {
                        Login: "ACTION_TYPE_WEB_LOGIN",
                        AppLogin: "ACTION_TYPE_WEB_LOGIN",
                        Signup: "ACTION_TYPE_WEB_SIGNUP",
                        AppSignup: "ACTION_TYPE_WEB_SIGNUP",
                        JoinGroup: "ACTION_TYPE_GROUP_JOIN",
                        GroupWallPost: "ACTION_TYPE_GROUP_WALL_POST",
                        ResetPassword: "ACTION_TYPE_WEB_RESET_PASSWORD",
                        ToyCodeRedeem: "ACTION_TYPE_WEB_GAMECARD_REDEMPTION",
                        SupportRequest: "ACTION_TYPE_SUPPORT_REQUEST",
                        FollowUser: "ACTION_TYPE_FOLLOW_USER"
                    },
                    endpoints: {
                        sendMessage: "",
                        addFriend: "",
                        follow: "",
                        signup: "",
                        joinGroup: "",
                        login: "",
                        postComment: "",
                        clothingUpload: "",
                        favorite: "",
                        appSignup: "",
                        appLogin: "",
                        resetPassword: ""
                    },
                    serviceData: {
                        sitekey: "",
                        successSuffix: "Captcha_Success",
                        failSuffix: "Captcha_Failed",
                        displayedSuffix: "Captcha_Displayed",
                        captchaSolvedPrefix: "Captcha_User_Solved_InSeconds_",
                        captchaSolveTimeIntervals: [{
                            seconds: 1,
                            suffix: "Less_Than_1"
                        }, {
                            seconds: 3,
                            suffix: "1_To_3"
                        }, {
                            seconds: 10,
                            suffix: "4_To_10"
                        }, {
                            seconds: 20,
                            suffix: "11_To_20"
                        }, {
                            seconds: 30,
                            suffix: "21_To_30"
                        }, {
                            seconds: 40,
                            suffix: "31_To_40"
                        }, {
                            seconds: 50,
                            suffix: "41_To_50"
                        }],
                        captchaSolveTimeLarge: "Greater_Than_50",
                        badgePosition: "bottomright",
                        logConstants: {
                            successSuffix: "_Success",
                            failSuffix: "_Failed",
                            maxFailSuffix: "_MaxFailed",
                            retrySuffix: "_Retried",
                            displayedSuffix: "_Displayed",
                            triggeredSuffix: "_Triggered",
                            initializedSuffix: "_Initialized",
                            suppressedSuffix: "_Suppressed",
                            providerErrorSuffix: "_FailedToLoad",
                            metadataErrorSuffix: "_FailedToLoadMetadata",
                            completedTimeSequenceSuffix: "_SolveTime",
                            solvedPrefix: "_User_Solved_InSeconds_",
                            solveTimeIntervals: [{
                                seconds: 1,
                                suffix: "Less_Than_1"
                            }, {
                                seconds: 3,
                                suffix: "1_To_3"
                            }, {
                                seconds: 10,
                                suffix: "4_To_10"
                            }, {
                                seconds: 20,
                                suffix: "11_To_20"
                            }, {
                                seconds: 30,
                                suffix: "21_To_30"
                            }, {
                                seconds: 40,
                                suffix: "31_To_40"
                            }, {
                                seconds: 50,
                                suffix: "41_To_50"
                            }],
                            solveTimeLarge: "Greater_Than_50",
                            eventStreamCaptchaEventName: "captcha",
                            eventStreamCaptchaInitiatedEventName: "captchaInitiated",
                            eventStreamCaptchaTokenReceivedEventName: "captchaTokenReceived",
                            captchaInitiatedChallengeTypes: {
                                visible: "visible",
                                hidden: "hidden",
                                error: "error"
                            }
                        }
                    },
                    types: {
                        signup: "signup",
                        sendMessage: "sendMessage",
                        addFriend: "addFriend",
                        follow: "follow",
                        joinGroup: "joinGroup",
                        login: "login",
                        postComment: "postComment",
                        clothingUpload: "clothingUpload",
                        favorite: "favorite",
                        appSignup: "appSignup",
                        appLogin: "appLogin",
                        gameCardRedeem: "gameCardRedeem",
                        resetPassword: "resetPassword"
                    },
                    ids: {
                        defaultCaptcha: "captcha-container",
                        signup: "signup-captcha",
                        login: "login-captcha",
                        friends: "friends-captcha",
                        groups: "groups-captcha",
                        profile: "profile-captcha",
                        playerSearch: "player-search-captcha",
                        appCaptcha: "app-captcha",
                        gameCardRedeem: "game-card-redeem-captcha",
                        resetPassword: "reset-password-captcha"
                    },
                    messageElementIds: {
                        defaultError: "captcha-error"
                    },
                    eventElementIds: {
                        shown: "captcha-event-shown",
                        token: "captcha-event-token",
                        provider: "captcha-event-provider"
                    },
                    hybridEvents: {
                        shown: "CaptchaShown",
                        success: "CaptchaSuccess"
                    },
                    messages: {
                        error: "We currently cannot verify CAPTCHA, please try again later.",
                        funCaptchaError: "We currently cannot verify FunCaptcha, please try again later."
                    },
                    translationRequestParams: {
                        consumerType: "Web",
                        contentNamespace: "Common.Captcha",
                        Keys: ["Response.CaptchaErrorFailedToVerify"]
                    },
                    errorCodes: {
                        failedToLoadProviderScript: 0,
                        failedToVerify: 1
                    },
                    localeToFunCaptchaLanguageCodeMap: {
                        "de-de": "de",
                        "en-us": "en",
                        "es-es": "es",
                        "fr-fr": "fr",
                        "pt-br": "pt-br",
                        "ko-kr": "ko",
                        "zh-cn": "zh",
                        "zh-tw": "zh-tw",
                        "ja-jp": "ja"
                    },
                    appTypes: {
                        android: "android",
                        ios: "ios",
                        xbox: "xbox",
                        uwp: "uwp",
                        "studio-windows": "studio-windows",
                        "studio-mac": "studio-mac",
                        "studio-luobu-windows": "studio-luobu-windows",
                        "studio-luobu-mac": "studio-luobu-mac",
                        unknown: "unknown"
                    },
                    captchaProviders: {
                        arkoseLabs: "PROVIDER_ARKOSE_LABS"
                    },
                    metadataLoadParameters: {
                        timeoutMilliseconds: 1e4,
                        waitIntervalMilliseconds: 100
                    }
                };
                t.Z = n
            },
            506: function(e, t, a) {
                "use strict";
                var n = a(609),
                    s = a.n(n),
                    u = a(792),
                    p = a(772),
                    d = a(107),
                    l = a(870);
                t.Z = function(e) {
                    var r, o = l.Z,
                        i = s().extend({}, o.serviceData).logConstants,
                        c = !1;

                    function a(e) {
                        return c && void 0 !== r ? "".concat(e, "_").concat(r) : e
                    }

                    function n(e) {
                        return e.charAt(0).toUpperCase() + e.slice(1)
                    }
                    this.provider = e, this.eventTimer = new p.Z, this.setPerAppTypeLoggingEnabled = function(e) {
                        var t, a = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : void 0,
                            n = null;
                        void 0 === a ? (u.UrlParser && (t = u.UrlParser.getParameterValueByName("appType"), o && o.appTypes && o.appTypes.hasOwnProperty(t) && (n = t)), null == n && u.DeviceMeta && (0, u.DeviceMeta)().isInApp && (n = (0, u.DeviceMeta)().appType), null !== n && (c = e, r = n)) : r = a
                    }, this.fireEventCaptcha = function(e, t) {
                        (0, d.HK)({
                            name: d.mD,
                            value: 1,
                            labelValues: {
                                action_type: n(e),
                                event_type: n(this.provider + t),
                                application_type: r || "unknown"
                            }
                        }).catch(function() {})
                    }, this.fireSolveTimeCaptcha = function(e, t, a) {
                        (0, d.HK)({
                            name: d.IF,
                            value: a,
                            labelValues: {
                                action_type: n(e),
                                event_type: n(this.provider + t),
                                application_type: r || "unknown"
                            }
                        }).catch(function() {})
                    }, this.fireEvent = function(e, t) {
                        this.fireEventCaptcha(e, t), t = n(e + this.provider + t), window.EventTracker && window.EventTracker.fireEvent(a(t))
                    }, this.startStatisticsSequence = function(e) {
                        this.eventTimer.start(e), window.EventTracker && window.EventTracker.start(a(e))
                    }, this.endStatisticsSequenceWithSuccess = function(e) {
                        window.EventTracker && window.EventTracker.endSuccess(a(e))
                    }, this.endStatisticsSequenceWithFailure = function(e) {
                        window.EventTracker && window.EventTracker.endFailure(a(e))
                    }, this.logSuccess = function(e) {
                        var t = n(e + this.provider + i.completedTimeSequenceSuffix);
                        this.fireEvent(e, i.successSuffix), this.fireSolveTimeCaptcha(e, i.successSuffix, this.eventTimer.end(t)), this.endStatisticsSequenceWithSuccess(t)
                    }, this.logFail = function(e) {
                        this.fireEvent(e, i.failSuffix)
                    }, this.logMaxFail = function(e) {
                        var t = n(e + this.provider + i.completedTimeSequenceSuffix);
                        this.fireEvent(e, i.maxFailSuffix), this.fireSolveTimeCaptcha(e, i.completedTimeSequenceSuffix, this.eventTimer.end(t)), this.endStatisticsSequenceWithFailure(t)
                    }, this.logRetried = function(e) {
                        this.fireEvent(e, i.retrySuffix)
                    }, this.logTriggered = function(e) {
                        this.fireEvent(e, i.triggeredSuffix), this.startStatisticsSequence(n(e + this.provider + i.completedTimeSequenceSuffix))
                    }, this.logInitialized = function(e) {
                        this.fireEvent(e, i.initializedSuffix)
                    }, this.logSuppressed = function(e) {
                        this.fireEvent(e, i.suppressedSuffix)
                    }, this.logDisplayed = function(e) {
                        this.fireEvent(e, i.displayedSuffix)
                    }, this.logProviderError = function(e) {
                        this.fireEvent(e, i.providerErrorSuffix)
                    }, this.logMetadataError = function(e) {
                        this.fireEvent(e, i.metadataErrorSuffix)
                    }, this.logCaptchaShownEventToEventStream = function(e, t, a) {
                        this.logCaptchaInitiatedEventToEventStream(e, i.captchaInitiatedChallengeTypes.visible, t, a)
                    }, this.logCaptchaSuppressedEventToEventStream = function(e, t, a) {
                        this.logCaptchaInitiatedEventToEventStream(e, i.captchaInitiatedChallengeTypes.hidden, t, a)
                    }, this.logCaptchaErrorEventToEventStream = function(e, t, a, n) {
                        this.logCaptchaInitiatedEventToEventStream(e, i.captchaInitiatedChallengeTypes.error, t, a, n.toString())
                    }, this.logCaptchaInitiatedEventToEventStream = function(e, t, a, n, r) {
                        u.EventStream && (e = e, t = {
                            type: t,
                            provider: this.provider
                        }, "" !== a && void 0 !== a && (t.session = a), "" !== n && void 0 !== n && (t.ucid = n), "" !== r && void 0 !== r && (t.message = r), u.EventStream.SendEventWithTarget(i.eventStreamCaptchaInitiatedEventName, e, t, u.EventStream.TargetTypes.WWW))
                    }, this.logCaptchaTokenReceivedEventToEventStream = function(e, t, a) {
                        u.EventStream && u.EventStream.SendEventWithTarget(i.eventStreamCaptchaTokenReceivedEventName, e, {
                            provider: this.provider,
                            session: t,
                            ucid: a || ""
                        }, u.EventStream.TargetTypes.WWW)
                    }, this.logCaptchaEventToEventStream = function(e, t, a, n, r) {
                        u.EventStream && (t = t || 0, a = a ? "true" : "false", u.EventStream.SendEventWithTarget(i.eventStreamCaptchaEventName, e, {
                            solveDuration: t,
                            success: a,
                            provider: this.provider,
                            session: n || "",
                            ucid: r || ""
                        }, u.EventStream.TargetTypes.WWW))
                    }
                }
            },
            170: function(e, t, a) {
                "use strict";
                var u, n, r, o, i, p, d, l, f, h, c, v, g, m, T, s = a(609),
                    C = a.n(s),
                    E = a(792),
                    y = a(870),
                    a = a(506),
                    a = (n = [], C().extend({}, y.Z.messages), r = "#FunCaptcha-Token", o = "#fc-iframe-wrap", p = !(i = 500), d = 0, l = 500, f = 1500, h = new a.Z("FunCaptcha"), c = {}, T = {
                        cType: null,
                        tokenValidationRetries: 0,
                        extraValidationParams: {},
                        returnTokenInSuccessCb: !(m = {}),
                        inputParams: {
                            dataExchange: g = v = "",
                            unifiedCaptchaId: v
                        },
                        solvedCb: C().noop,
                        loadedCb: C().noop,
                        supressCb: C().noop,
                        shownCb: C().noop,
                        successCb: C().noop,
                        errorCb: C().noop,
                        fcInstance: null
                    }, {
                        types: C().extend({}, y.Z.types),
                        setMaxRetriesOnTokenValidationFailure: function(e) {
                            d = e
                        },
                        setRetryIntervalRange: function(e, t) {
                            l = e, f = t
                        },
                        reset: S,
                        render: b,
                        addCaptchaTypes: function(e, a) {
                            e && e.forEach(function(e) {
                                var t, t = {
                                        Type: a ? (t = e.Type).charAt(0).toLowerCase() + t.slice(1) : e.Type,
                                        ApiUrl: e.ApiUrl,
                                        PublicKey: e.PublicKey
                                    },
                                    e = JSON.stringify(t);
                                c.hasOwnProperty(e) || (c[e] = t, n.push(t))
                            })
                        },
                        setPerAppTypeLoggingEnabled: function(e, t) {
                            t = 1 < arguments.length && void 0 !== t ? t : void 0;
                            h.setPerAppTypeLoggingEnabled(e, t)
                        },
                        showFunCaptchaInModal: function() {
                            E.Dialog.open({
                                bodyContent: '<div id="funcaptcha-modal-body" class="funcaptcha-modal-body"></div>',
                                allowHtmlContentInBody: !0,
                                showAccept: !1,
                                showDecline: !1,
                                xToCancel: !0,
                                onCloseCallback: P
                            });
                            var e = C()("#game-card-redeem-captcha").removeClass("hidden").detach();
                            C()("#funcaptcha-modal-body").append(e)
                        },
                        dismissFunCaptchaModal: P,
                        captchaInstances: m,
                        loggerInstance: h
                    });

                function w(e) {
                    for (var t = 0; t < n.length; t++)
                        if (n[t].Type === e) return n[t];
                    return null
                }

                function S(e) {
                    m[e] && m[e].fcInstance.refresh_session()
                }

                function b(c, e) {
                    if (p = !1, h.logTriggered(e.cType), e.inputParams && (g = null == e.inputParams.dataExchange ? "" : e.inputParams.dataExchange, v = null == e.inputParams.unifiedCaptchaId ? "" : e.inputParams.unifiedCaptchaId), m[c] && m[c].fcInstance) return m[c].fcInstance.data = {
                        blob: g
                    }, S(c), c;
                    var s = function(e, t) {
                        t = C().extend({}, T, t);
                        return m[e] = t
                    }(c, e);
                    u = x(), h.logInitialized(s.cType);
                    var t = w(s.cType);
                    if (null == t) return h.logMetadataError(s.cType), s.errorCb && s.errorCb(y.Z.errorCodes.failedToLoadProviderScript), c;
                    try {
                        s.fcInstance = new FunCaptcha({
                            public_key: t.PublicKey,
                            target_html: c,
                            language: function() {
                                if (E.Intl) {
                                    var e = new E.Intl;
                                    if (y.Z.localeToFunCaptchaLanguageCodeMap.hasOwnProperty(e.locale)) return y.Z.localeToFunCaptchaLanguageCodeMap[e.locale]
                                }
                                return
                            }(),
                            data: {
                                blob: g
                            },
                            callback: function() {
                                var e = null;
                                u && (e = x() - u, u = null);
                                var a, n, t, r, o, i = _();
                                h.logCaptchaTokenReceivedEventToEventStream(s.cType, i, v), !0 === s.returnTokenInSuccessCb ? (h.logSuccess(s.cType), h.logCaptchaEventToEventStream(s.cType, e, !0, i), s.successCb(i, v)) : (a = s, n = c, r = e, o = v, i = {
                                    fcToken: t = i
                                }, i = C().extend({}, i, a.extraValidationParams), C().ajax({
                                    method: "POST",
                                    data: i,
                                    url: w(a.cType).ApiUrl,
                                    success: function() {
                                        h.logSuccess(a.cType), h.logCaptchaEventToEventStream(a.cType, r, !0, t, o), a.successCb()
                                    },
                                    error: function() {
                                        h.logFail(a.cType), a.tokenValidationRetries < d ? p || (p = !0, setTimeout(function() {
                                            var e, t;
                                            e = a, t = n, p && (e.tokenValidationRetries += 1, h.logRetried(e.cType), b(t, e))
                                        }, l + Math.floor(Math.random() * (f - l)))) : (h.logMaxFail(a.cType), h.logCaptchaEventToEventStream(a.cType, r, !1, t, o), a.errorCb && a.errorCb(y.Z.errorCodes.failedToVerify, null))
                                    }
                                }), s.solvedCb())
                            },
                            loaded_callback: function() {
                                s.cType, setTimeout(function() {
                                    C()(o).focus()
                                }, i), s.loadedCb()
                            },
                            onsuppress: function() {
                                var e, t;
                                e = s.cType, t = v, h.logSuppressed(e), h.logCaptchaSuppressedEventToEventStream(e, _(), t), s.suppressCb()
                            },
                            onshown: function() {
                                var e, t;
                                e = s.cType, t = v, h.logDisplayed(e), h.logCaptchaShownEventToEventStream(e, _(), t), s.shownCb()
                            }
                        })
                    } catch (e) {
                        h.logProviderError(s.cType), h.logCaptchaErrorEventToEventStream(s.cType, _(), v, e), s.errorCb && s.errorCb(y.Z.errorCodes.failedToLoadProviderScript, e)
                    }
                    return c
                }

                function P() {
                    var e = C()("#game-card-redeem-captcha").addClass("hidden").detach();
                    C()("#redeem-card-wrapper").append(e), E.Dialog.close()
                }

                function _() {
                    return C()(r).val()
                }

                function x() {
                    return (new Date).valueOf()
                }
                t.Z = a
            },
            704: function(e) {
                e.exports = '<div class="captcha-container" ng-controller="captchaV2Controller"> <div class="modal" ng-class="$ctrl.getCaptchaClasses()" ng-click="$ctrl.hideCaptcha()"> <div class="modal-dialog"> <div class="modal-content"> <div class="modal-body" ng-click="$event.stopPropagation()"> <button type="button" class="close" ng-click="$ctrl.hideCaptcha()"> <span aria-hidden="true"><span class="icon-close"></span></span><span class="sr-only">Close</span> </button> <div id="{{ $ctrl.id }}" class="captchav2-funcaptcha-modal-body"></div> </div> </div> </div> </div> </div>'
            },
            792: function(e) {
                "use strict";
                e.exports = Roblox
            },
            734: function(e) {
                "use strict";
                e.exports = angular
            },
            609: function(e) {
                "use strict";
                e.exports = jQuery
            }
        },
        n = {};

    function r(e) {
        if (n[e]) return n[e].exports;
        var t = n[e] = {
            exports: {}
        };
        return a[e](t, t.exports, r), t.exports
    }
    r.n = function(e) {
            var t = e && e.__esModule ? function() {
                return e.default
            } : function() {
                return e
            };
            return r.d(t, {
                a: t
            }), t
        }, r.d = function(e, t) {
            for (var a in t) r.o(t, a) && !r.o(e, a) && Object.defineProperty(e, a, {
                enumerable: !0,
                get: t[a]
            })
        }, r.o = function(e, t) {
            return Object.prototype.hasOwnProperty.call(e, t)
        }, r.r = function(e) {
            "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
                value: "Module"
            }), Object.defineProperty(e, "__esModule", {
                value: !0
            })
        },
        function() {
            "use strict";
            var e = r(734),
                t = r.n(e),
                a = r(726),
                n = (r(809), r(770));
            (0, a.importFilesUnderPath)(r(37)), (0, a.importFilesUnderPath)(r(111)), (0, a.importFilesUnderPath)(r(569)), (0, a.importFilesUnderPath)(r(354)), (0, a.importFilesUnderPath)(r(5)), e = r(871), (0, a.templateCacheGenerator)(t(), "captchaV2Templates", e), window.Roblox.CaptchaLogger = n.r8, window.Roblox.FunCaptcha = n.$3, window.Roblox.CaptchaConstants = n.K3, window.Roblox.triggerCaptcha = n.Xs, window.Roblox.Captcha = n.UG
        }()
}();
//# sourceMappingURL=https://js.rbxcdn.com/a6c5ad5d51267b48d307-captcha.bundle.min.js.map

/* Bundle detector */
window.Roblox && window.Roblox.BundleDetector && window.Roblox.BundleDetector.bundleDetected("Captcha");