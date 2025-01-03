! function() {
    "use strict";
    var n = {
            n: function(e) {
                var t = e && e.__esModule ? function() {
                    return e.default
                } : function() {
                    return e
                };
                return n.d(t, {
                    a: t
                }), t
            },
            d: function(e, t) {
                for (var a in t) n.o(t, a) && !n.o(e, a) && Object.defineProperty(e, a, {
                    enumerable: !0,
                    get: t[a]
                })
            },
            o: function(e, t) {
                return Object.prototype.hasOwnProperty.call(e, t)
            }
        },
        e = jQuery,
        p = n.n(e),
        u = Roblox;
    Roblox.EnvironmentUrls = Roblox.EnvironmentUrls || {};
    var o, r, c, s, d, l, f, i, v, h, T = {
        urls: {
            getMetadata: "".concat(u.EnvironmentUrls.apiGatewayCdnUrl, "/captcha/v1/metadata"),
            funCaptchaRedeem: {
                WebSignup: "".concat(u.EnvironmentUrls.captchaApi, "/v1/funcaptcha/signup/web"),
                AppSignup: "".concat(u.EnvironmentUrls.captchaApi, "/v1/funcaptcha/signup/app"),
                WebLogin: "".concat(u.EnvironmentUrls.captchaApi, "/v1/funcaptcha/login/web"),
                AppLogin: "".concat(u.EnvironmentUrls.captchaApi, "/v1/funcaptcha/login/app"),
                WebResetPassword: "".concat(u.EnvironmentUrls.captchaApi, "/v1/funcaptcha/resetpassword/web"),
                UserAction: "".concat(u.EnvironmentUrls.captchaApi, "/v1/funcaptcha/user"),
                WebGamecardRedemption: "".concat(u.EnvironmentUrls.captchaApi, "/v1/funcaptcha/gamecardredemption/web")
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

    function g(e) {
        return e.charAt(0).toUpperCase() + e.slice(1)
    }

    function m() {
        return (new Date).valueOf()
    }

    function S(e) {
        "function" == typeof f && f();
        var t, a = null;
        c && (a = m() - c, t = function(e) {
            for (var t = h.captchaSolvedPrefix, a = h.captchaSolveTimeIntervals, n = 0; n < a.length; n++) {
                var i = a[n];
                if (e <= 1e3 * i.seconds) return t + i.suffix
            }
            return t + h.captchaSolveTimeLarge
        }(t = a), window.EventTracker && window.EventTracker.fireEvent(g(s + t)), c = null), C(s, e, a)
    }

    function E(e, t, a) {
        u.EventStream && (t = t || 0, a = a ? "true" : "false", u.EventStream.SendEventWithTarget("captcha", e, {
            solveDuration: t,
            success: a,
            provider: "Google"
        }, u.EventStream.TargetTypes.WWW))
    }

    function C(e, t, a) {
        t = {
            "g-Recaptcha-Response": t,
            isInvisible: v.invisible
        };
        p().ajax({
            method: "POST",
            data: t,
            success: function() {
                window.EventTracker && window.EventTracker.fireEvent(g(e + h.successSuffix)), E(e, a, !0), d && (d(), p()("#" + o).empty())
            },
            error: function() {
                window.EventTracker && window.EventTracker.fireEvent(g(e + h.failSuffix)), E(e, a, !1), l && l(), u.BootstrapWidgets && u.BootstrapWidgets.ToggleSystemMessage(p()(".alert-warning"), 100, 2e3, T.messages.error)
            },
            url: i[e]
        })
    }
    var t = (i = T.endpoints, v = {
        invisible: !1
    }, h = T.serviceData, {
        ids: T.ids,
        types: T.types,
        setEndpoint: function(e, t) {
            i[e] = t
        },
        getEndpoint: function(e) {
            return i[e]
        },
        setInvisibleMode: function(e) {
            v.invisible = e
        },
        getInvisibleMode: function() {
            return v.invisible
        },
        setSiteKey: function(e) {
            h.sitekey = e
        },
        verify: C,
        reset: function(e, t, a, n) {
            s = e, d = t, l = a, f = n, window.grecaptcha && (window.grecaptcha.reset(r), v.invisible && window.grecaptcha.execute(r))
        },
        render: function(e, t, a, n, i) {
            s = t, d = a, l = n, f = i, o = e, window.grecaptcha && (i = {
                sitekey: h.sitekey,
                callback: S,
                badge: h.badgePosition
            }, v.invisible && (i.size = "invisible"), r = window.grecaptcha.render(e, i), window.EventTracker && window.EventTracker.fireEvent(g(s + h.displayedSuffix)), c = m())
        },
        execute: function() {
            window.grecaptcha && v.invisible && window.grecaptcha.execute(r)
        },
        setMultipleEndpoints: function(e, t) {
            if (e && t)
                for (var a = 0; a < e.length; a++) {
                    var n = (n = e[a]).charAt(0).toLowerCase() + n.slice(1);
                    i[n] = t
                }
        }
    });

    function w(e, t) {
        for (var a = 0; a < t.length; a++) {
            var n = t[a];
            n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
        }
    }

    function y(a) {
        return new Promise(function(e, t) {
            p().ajax({
                method: "POST",
                url: "".concat(D, "/v1/metrics/record"),
                data: JSON.stringify(a),
                contentType: "application/json",
                timeout: 1e4,
                success: e,
                error: t,
                withCredentials: !0
            })
        })
    }
    var _, b, a, x, P, I, k, R, A, O, W, L, U, F, M, N = function() {
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
            }]) && w(e.prototype, a), n && w(e, n), t
        }(),
        e = null !== (G = u.EnvironmentUrls.apiGatewayUrl) && void 0 !== G ? G : "URL_NOT_FOUND",
        D = "".concat(e, "/account-security-service"),
        G = function(e) {
            var i, o = T,
                r = p().extend({}, o.serviceData).logConstants,
                c = !1;

            function a(e) {
                return c && void 0 !== i ? "".concat(e, "_").concat(i) : e
            }

            function n(e) {
                return e.charAt(0).toUpperCase() + e.slice(1)
            }
            this.provider = e, this.eventTimer = new N, this.setPerAppTypeLoggingEnabled = function(e) {
                var t, a = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : void 0,
                    n = null;
                void 0 === a ? (u.UrlParser && (t = u.UrlParser.getParameterValueByName("appType"), o && o.appTypes && o.appTypes.hasOwnProperty(t) && (n = t)), null == n && u.DeviceMeta && (0, u.DeviceMeta)().isInApp && (n = (0, u.DeviceMeta)().appType), null !== n && (c = e, i = n)) : i = a
            }, this.fireEventCaptcha = function(e, t) {
                y({
                    name: "event_captcha",
                    value: 1,
                    labelValues: {
                        action_type: n(e),
                        event_type: n(this.provider + t),
                        application_type: i || "unknown"
                    }
                }).catch(function() {})
            }, this.fireSolveTimeCaptcha = function(e, t, a) {
                y({
                    name: "solve_time_captcha",
                    value: a,
                    labelValues: {
                        action_type: n(e),
                        event_type: n(this.provider + t),
                        application_type: i || "unknown"
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
                var t = n(e + this.provider + r.completedTimeSequenceSuffix);
                this.fireEvent(e, r.successSuffix), this.fireSolveTimeCaptcha(e, r.successSuffix, this.eventTimer.end(t)), this.endStatisticsSequenceWithSuccess(t)
            }, this.logFail = function(e) {
                this.fireEvent(e, r.failSuffix)
            }, this.logMaxFail = function(e) {
                var t = n(e + this.provider + r.completedTimeSequenceSuffix);
                this.fireEvent(e, r.maxFailSuffix), this.fireSolveTimeCaptcha(e, r.completedTimeSequenceSuffix, this.eventTimer.end(t)), this.endStatisticsSequenceWithFailure(t)
            }, this.logRetried = function(e) {
                this.fireEvent(e, r.retrySuffix)
            }, this.logTriggered = function(e) {
                this.fireEvent(e, r.triggeredSuffix), this.startStatisticsSequence(n(e + this.provider + r.completedTimeSequenceSuffix))
            }, this.logInitialized = function(e) {
                this.fireEvent(e, r.initializedSuffix)
            }, this.logSuppressed = function(e) {
                this.fireEvent(e, r.suppressedSuffix)
            }, this.logDisplayed = function(e) {
                this.fireEvent(e, r.displayedSuffix)
            }, this.logProviderError = function(e) {
                this.fireEvent(e, r.providerErrorSuffix)
            }, this.logMetadataError = function(e) {
                this.fireEvent(e, r.metadataErrorSuffix)
            }, this.logCaptchaShownEventToEventStream = function(e, t, a) {
                this.logCaptchaInitiatedEventToEventStream(e, r.captchaInitiatedChallengeTypes.visible, t, a)
            }, this.logCaptchaSuppressedEventToEventStream = function(e, t, a) {
                this.logCaptchaInitiatedEventToEventStream(e, r.captchaInitiatedChallengeTypes.hidden, t, a)
            }, this.logCaptchaErrorEventToEventStream = function(e, t, a, n) {
                this.logCaptchaInitiatedEventToEventStream(e, r.captchaInitiatedChallengeTypes.error, t, a, n.toString())
            }, this.logCaptchaInitiatedEventToEventStream = function(e, t, a, n, i) {
                u.EventStream && (e = e, t = {
                    type: t,
                    provider: this.provider
                }, "" !== a && void 0 !== a && (t.session = a), "" !== n && void 0 !== n && (t.ucid = n), "" !== i && void 0 !== i && (t.message = i), u.EventStream.SendEventWithTarget(r.eventStreamCaptchaInitiatedEventName, e, t, u.EventStream.TargetTypes.WWW))
            }, this.logCaptchaTokenReceivedEventToEventStream = function(e, t, a) {
                u.EventStream && u.EventStream.SendEventWithTarget(r.eventStreamCaptchaTokenReceivedEventName, e, {
                    provider: this.provider,
                    session: t,
                    ucid: a || ""
                }, u.EventStream.TargetTypes.WWW)
            }, this.logCaptchaEventToEventStream = function(e, t, a, n, i) {
                u.EventStream && (t = t || 0, a = a ? "true" : "false", u.EventStream.SendEventWithTarget(r.eventStreamCaptchaEventName, e, {
                    solveDuration: t,
                    success: a,
                    provider: this.provider,
                    session: n || "",
                    ucid: i || ""
                }, u.EventStream.TargetTypes.WWW))
            }
        };

    function j(e) {
        for (var t = 0; t < b.length; t++)
            if (b[t].Type === e) return b[t];
        return null
    }

    function V(e) {
        F[e] && F[e].fcInstance.refresh_session()
    }

    function q(c, e) {
        if (I = !1, O.logTriggered(e.cType), e.inputParams && (U = null == e.inputParams.dataExchange ? "" : e.inputParams.dataExchange, L = null == e.inputParams.unifiedCaptchaId ? "" : e.inputParams.unifiedCaptchaId), F[c] && F[c].fcInstance) return F[c].fcInstance.data = {
            blob: U
        }, V(c), c;
        var s = function(e, t) {
            t = p().extend({}, M, t);
            return F[e] = t
        }(c, e);
        _ = Y(), O.logInitialized(s.cType);
        var t = j(s.cType);
        if (null == t) return O.logMetadataError(s.cType), s.errorCb && s.errorCb(T.errorCodes.failedToLoadProviderScript), c;
        try {
            s.fcInstance = new FunCaptcha({
                public_key: t.PublicKey,
                target_html: c,
                language: function() {
                    if (u.Intl) {
                        var e = new u.Intl;
                        if (T.localeToFunCaptchaLanguageCodeMap.hasOwnProperty(e.locale)) return T.localeToFunCaptchaLanguageCodeMap[e.locale]
                    }
                    return
                }(),
                data: {
                    blob: U
                },
                callback: function() {
                    var e = null;
                    _ && (e = Y() - _, _ = null);
                    var a, n, t, i, o, r = z();
                    O.logCaptchaTokenReceivedEventToEventStream(s.cType, r, L), !0 === s.returnTokenInSuccessCb ? (O.logSuccess(s.cType), O.logCaptchaEventToEventStream(s.cType, e, !0, r), s.successCb(r, L)) : (a = s, n = c, i = e, o = L, r = {
                        fcToken: t = r
                    }, r = p().extend({}, r, a.extraValidationParams), p().ajax({
                        method: "POST",
                        data: r,
                        url: j(a.cType).ApiUrl,
                        success: function() {
                            O.logSuccess(a.cType), O.logCaptchaEventToEventStream(a.cType, i, !0, t, o), a.successCb()
                        },
                        error: function() {
                            O.logFail(a.cType), a.tokenValidationRetries < k ? I || (I = !0, setTimeout(function() {
                                var e, t;
                                e = a, t = n, I && (e.tokenValidationRetries += 1, O.logRetried(e.cType), q(t, e))
                            }, R + Math.floor(Math.random() * (A - R)))) : (O.logMaxFail(a.cType), O.logCaptchaEventToEventStream(a.cType, i, !1, t, o), a.errorCb && a.errorCb(T.errorCodes.failedToVerify, null))
                        }
                    }), s.solvedCb())
                },
                loaded_callback: function() {
                    s.cType, setTimeout(function() {
                        p()(x).focus()
                    }, P), s.loadedCb()
                },
                onsuppress: function() {
                    var e, t;
                    e = s.cType, t = L, O.logSuppressed(e), O.logCaptchaSuppressedEventToEventStream(e, z(), t), s.suppressCb()
                },
                onshown: function() {
                    var e, t;
                    e = s.cType, t = L, O.logDisplayed(e), O.logCaptchaShownEventToEventStream(e, z(), t), s.shownCb()
                }
            })
        } catch (e) {
            O.logProviderError(s.cType), O.logCaptchaErrorEventToEventStream(s.cType, z(), L, e), s.errorCb && s.errorCb(T.errorCodes.failedToLoadProviderScript, e)
        }
        return c
    }

    function B() {
        var e = p()("#game-card-redeem-captcha").addClass("hidden").detach();
        p()("#redeem-card-wrapper").append(e), u.Dialog.close()
    }

    function z() {
        return p()(a).val()
    }

    function Y() {
        return (new Date).valueOf()
    }
    b = [], p().extend({}, T.messages), a = "#FunCaptcha-Token", x = "#fc-iframe-wrap", I = !(P = 500), k = 0, R = 500, A = 1500, O = new G("FunCaptcha"), W = {}, M = {
        cType: null,
        tokenValidationRetries: 0,
        extraValidationParams: {},
        returnTokenInSuccessCb: !(F = {}),
        inputParams: {
            dataExchange: U = L = "",
            unifiedCaptchaId: L
        },
        solvedCb: p().noop,
        loadedCb: p().noop,
        supressCb: p().noop,
        shownCb: p().noop,
        successCb: p().noop,
        errorCb: p().noop,
        fcInstance: null
    }, e = {
        types: p().extend({}, T.types),
        setMaxRetriesOnTokenValidationFailure: function(e) {
            k = e
        },
        setRetryIntervalRange: function(e, t) {
            R = e, A = t
        },
        reset: V,
        render: q,
        addCaptchaTypes: function(e, a) {
            e && e.forEach(function(e) {
                var t, t = {
                        Type: a ? (t = e.Type).charAt(0).toLowerCase() + t.slice(1) : e.Type,
                        ApiUrl: e.ApiUrl,
                        PublicKey: e.PublicKey
                    },
                    e = JSON.stringify(t);
                W.hasOwnProperty(e) || (W[e] = t, b.push(t))
            })
        },
        setPerAppTypeLoggingEnabled: function(e, t) {
            t = 1 < arguments.length && void 0 !== t ? t : void 0;
            O.setPerAppTypeLoggingEnabled(e, t)
        },
        showFunCaptchaInModal: function() {
            u.Dialog.open({
                bodyContent: '<div id="funcaptcha-modal-body" class="funcaptcha-modal-body"></div>',
                allowHtmlContentInBody: !0,
                showAccept: !1,
                showDecline: !1,
                xToCancel: !0,
                onCloseCallback: B
            });
            var e = p()("#game-card-redeem-captcha").removeClass("hidden").detach();
            p()("#funcaptcha-modal-body").append(e)
        },
        dismissFunCaptchaModal: B,
        captchaInstances: F,
        loggerInstance: O
    }, window.Roblox.Captcha = t, window.Roblox.CaptchaLogger = G, window.Roblox.FunCaptcha = e, window.Roblox.CaptchaV2ServiceCaptchaIdBase = 0, window.Roblox.CaptchaConstants = T
}();
//# sourceMappingURL=https://js.rbxcdn.com/a6c5ad5d51267b48d307-captchaCore.bundle.min.js.map

/* Bundle detector */
window.Roblox && window.Roblox.BundleDetector && window.Roblox.BundleDetector.bundleDetected("CaptchaCore");