! function() {
    var n = {
            292: function(e, a, t) {
                function n() {
                    var e;
                    try {
                        e = a.storage.debug
                    } catch (e) {}
                    return !e && "undefined" != typeof process && "env" in process && (e = process.env.DEBUG), e
                }(a = e.exports = t(765)).log = function() {
                    return "object" == typeof console && console.log && Function.prototype.apply.call(console.log, console, arguments)
                }, a.formatArgs = function(e) {
                    var t = this.useColors;
                    if (e[0] = (t ? "%c" : "") + this.namespace + (t ? " %c" : " ") + e[0] + (t ? "%c " : " ") + "+" + a.humanize(this.diff), !t) return;
                    t = "color: " + this.color;
                    e.splice(1, 0, t, "color: inherit");
                    var n = 0,
                        r = 0;
                    e[0].replace(/%[a-zA-Z%]/g, function(e) {
                        "%%" !== e && (n++, "%c" === e && (r = n))
                    }), e.splice(r, 0, t)
                }, a.save = function(e) {
                    try {
                        null == e ? a.storage.removeItem("debug") : a.storage.debug = e
                    } catch (e) {}
                }, a.load = n, a.useColors = function() {
                    if ("undefined" != typeof window && window.process && "renderer" === window.process.type) return !0;
                    return "undefined" != typeof document && document.documentElement && document.documentElement.style && document.documentElement.style.WebkitAppearance || "undefined" != typeof window && window.console && (window.console.firebug || window.console.exception && window.console.table) || "undefined" != typeof navigator && navigator.userAgent && navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/) && 31 <= parseInt(RegExp.$1, 10) || "undefined" != typeof navigator && navigator.userAgent && navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/)
                }, a.storage = "undefined" != typeof chrome && void 0 !== chrome.storage ? chrome.storage.local : function() {
                    try {
                        return window.localStorage
                    } catch (e) {}
                }(), a.colors = ["lightseagreen", "forestgreen", "goldenrod", "dodgerblue", "darkorchid", "crimson"], a.formatters.j = function(e) {
                    try {
                        return JSON.stringify(e)
                    } catch (e) {
                        return "[UnexpectedJSONParseError]: " + e.message
                    }
                }, a.enable(n())
            },
            765: function(e, l, t) {
                var s;

                function n(e) {
                    function i() {
                        if (i.enabled) {
                            var r = i,
                                e = +new Date,
                                t = e - (s || e);
                            r.diff = t, r.prev = s, r.curr = e, s = e;
                            for (var a = new Array(arguments.length), n = 0; n < a.length; n++) a[n] = arguments[n];
                            a[0] = l.coerce(a[0]), "string" != typeof a[0] && a.unshift("%O");
                            var o = 0;
                            a[0] = a[0].replace(/%([a-zA-Z%])/g, function(e, t) {
                                if ("%%" === e) return e;
                                o++;
                                var n = l.formatters[t];
                                return "function" == typeof n && (t = a[o], e = n.call(r, t), a.splice(o, 1), o--), e
                            }), l.formatArgs.call(r, a), (i.log || l.log || console.log.bind(console)).apply(r, a)
                        }
                    }
                    return i.namespace = e, i.enabled = l.enabled(e), i.useColors = l.useColors(), i.color = function(e) {
                        var t, n = 0;
                        for (t in e) n = (n << 5) - n + e.charCodeAt(t), n |= 0;
                        return l.colors[Math.abs(n) % l.colors.length]
                    }(e), "function" == typeof l.init && l.init(i), i
                }(l = e.exports = n.debug = n.default = n).coerce = function(e) {
                    return e instanceof Error ? e.stack || e.message : e
                }, l.disable = function() {
                    l.enable("")
                }, l.enable = function(e) {
                    l.save(e), l.names = [], l.skips = [];
                    for (var t = ("string" == typeof e ? e : "").split(/[\s,]+/), n = t.length, r = 0; r < n; r++) t[r] && ("-" === (e = t[r].replace(/\*/g, ".*?"))[0] ? l.skips.push(new RegExp("^" + e.substr(1) + "$")) : l.names.push(new RegExp("^" + e + "$")))
                }, l.enabled = function(e) {
                    var t, n;
                    for (t = 0, n = l.skips.length; t < n; t++)
                        if (l.skips[t].test(e)) return !1;
                    for (t = 0, n = l.names.length; t < n; t++)
                        if (l.names[t].test(e)) return !0;
                    return !1
                }, l.humanize = t(628), l.names = [], l.skips = [], l.formatters = {}
            },
            204: function(e) {
                function o(e, t) {
                    e.onload = function() {
                        this.onerror = this.onload = null, t(null, e)
                    }, e.onerror = function() {
                        this.onerror = this.onload = null, t(new Error("Failed to load " + this.src), e)
                    }
                }

                function i(e, t) {
                    e.onreadystatechange = function() {
                        "complete" != this.readyState && "loaded" != this.readyState || (this.onreadystatechange = null, t(null, e))
                    }
                }
                e.exports = function(e, t, n) {
                    var r = document.head || document.getElementsByTagName("head")[0],
                        a = document.createElement("script");
                    "function" == typeof t && (n = t, t = {}), t = t || {}, n = n || function() {}, a.type = t.type || "text/javascript", a.charset = t.charset || "utf8", a.async = !("async" in t) || !!t.async, a.src = e, t.attrs && function(e, t) {
                        for (var n in t) e.setAttribute(n, t[n])
                    }(a, t.attrs), t.text && (a.text = "" + t.text), ("onload" in a ? o : i)(a, n), a.onload || o(a, n), r.appendChild(a)
                }
            },
            628: function(e) {
                var r = 36e5,
                    a = 864e5;

                function o(e, t, n) {
                    if (!(e < t)) return e < 1.5 * t ? Math.floor(e / t) + " " + n : Math.ceil(e / t) + " " + n + "s"
                }
                e.exports = function(e, t) {
                    t = t || {};
                    var n = typeof e;
                    if ("string" == n && 0 < e.length) return function(e) {
                        if (100 < (e = String(e)).length) return;
                        e = /^((?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|years?|yrs?|y)?$/i.exec(e);
                        if (!e) return;
                        var t = parseFloat(e[1]);
                        switch ((e[2] || "ms").toLowerCase()) {
                            case "years":
                            case "year":
                            case "yrs":
                            case "yr":
                            case "y":
                                return 315576e5 * t;
                            case "days":
                            case "day":
                            case "d":
                                return t * a;
                            case "hours":
                            case "hour":
                            case "hrs":
                            case "hr":
                            case "h":
                                return t * r;
                            case "minutes":
                            case "minute":
                            case "mins":
                            case "min":
                            case "m":
                                return 6e4 * t;
                            case "seconds":
                            case "second":
                            case "secs":
                            case "sec":
                            case "s":
                                return 1e3 * t;
                            case "milliseconds":
                            case "millisecond":
                            case "msecs":
                            case "msec":
                            case "ms":
                                return t;
                            default:
                                return
                        }
                    }(e);
                    if ("number" == n && !1 === isNaN(e)) return t.long ? o(t = e, a, "day") || o(t, r, "hour") || o(t, 6e4, "minute") || o(t, 1e3, "second") || t + " ms" : function(e) {
                        if (a <= e) return Math.round(e / a) + "d";
                        if (r <= e) return Math.round(e / r) + "h";
                        if (6e4 <= e) return Math.round(e / 6e4) + "m";
                        if (1e3 <= e) return Math.round(e / 1e3) + "s";
                        return e + "ms"
                    }(e);
                    throw new Error("val is not a non-empty string or a valid number. val=" + JSON.stringify(e))
                }
            },
            438: function(e) {
                "use strict";
                var
                    /**
                     * @link https://github.com/gajus/sister for the canonical source repository
                     * @license https://github.com/gajus/sister/blob/master/LICENSE BSD 3-Clause
                     */
                    t = function() {
                        var e = {},
                            a = {};
                        return e.on = function(e, t) {
                            t = {
                                name: e,
                                handler: t
                            };
                            return a[e] = a[e] || [], a[e].unshift(t), t
                        }, e.off = function(e) {
                            var t = a[e.name].indexOf(e); - 1 !== t && a[e.name].splice(t, 1)
                        }, e.trigger = function(e, t) {
                            var n, r = a[e];
                            if (r)
                                for (n = r.length; n--;) r[n].handler(t)
                        }, e
                    };
                e.exports = t
            },
            771: function(e, t, n) {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: !0
                });
                var r, a = n(606),
                    n = (r = a) && r.__esModule ? r : {
                        default: r
                    };
                t.default = {
                    pauseVideo: {
                        acceptableStates: [n.default.ENDED, n.default.PAUSED],
                        stateChangeRequired: !1
                    },
                    playVideo: {
                        acceptableStates: [n.default.ENDED, n.default.PLAYING],
                        stateChangeRequired: !1
                    },
                    seekTo: {
                        acceptableStates: [n.default.ENDED, n.default.PLAYING, n.default.PAUSED],
                        stateChangeRequired: !0,
                        timeout: 3e3
                    }
                }, e.exports = t.default
            },
            368: function(e, t, n) {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: !0
                });
                var r = a(n(292)),
                    s = a(n(376)),
                    l = a(n(645)),
                    u = a(n(771));

                function a(e) {
                    return e && e.__esModule ? e : {
                        default: e
                    }
                }
                var c = (0, r.default)("youtube-player"),
                    r = {};
                r.proxyEvents = function(r) {
                    var e = {},
                        t = !0,
                        n = !1,
                        a = void 0;
                    try {
                        for (var o, i = l.default[Symbol.iterator](); !(t = (o = i.next()).done); t = !0) ! function(t) {
                            var n = "on" + t.slice(0, 1).toUpperCase() + t.slice(1);
                            e[n] = function(e) {
                                c('event "%s"', n, e), r.trigger(t, e)
                            }
                        }(o.value)
                    } catch (e) {
                        n = !0, a = e
                    } finally {
                        try {
                            !t && i.return && i.return()
                        } finally {
                            if (n) throw a
                        }
                    }
                    return e
                }, r.promisifyPlayer = function(a) {
                    var e = 1 < arguments.length && void 0 !== arguments[1] && arguments[1],
                        t = {},
                        n = !0,
                        r = !1,
                        o = void 0;
                    try {
                        for (var i, l = s.default[Symbol.iterator](); !(n = (i = l.next()).done); n = !0) ! function(r) {
                            e && u.default[r] ? t[r] = function() {
                                for (var e = arguments.length, n = Array(e), t = 0; t < e; t++) n[t] = arguments[t];
                                return a.then(function(a) {
                                    var o = u.default[r],
                                        e = a.getPlayerState(),
                                        t = a[r].apply(a, n);
                                    return o.stateChangeRequired || Array.isArray(o.acceptableStates) && -1 === o.acceptableStates.indexOf(e) ? new Promise(function(n) {
                                        function r() {
                                            var e = a.getPlayerState(),
                                                t = void 0;
                                            "number" == typeof o.timeout && (t = setTimeout(function() {
                                                a.removeEventListener("onStateChange", r), n()
                                            }, o.timeout)), Array.isArray(o.acceptableStates) && -1 !== o.acceptableStates.indexOf(e) && (a.removeEventListener("onStateChange", r), clearTimeout(t), n())
                                        }
                                        a.addEventListener("onStateChange", r)
                                    }).then(function() {
                                        return t
                                    }) : t
                                })
                            } : t[r] = function() {
                                for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                                return a.then(function(e) {
                                    return e[r].apply(e, t)
                                })
                            }
                        }(i.value)
                    } catch (e) {
                        r = !0, o = e
                    } finally {
                        try {
                            !n && l.return && l.return()
                        } finally {
                            if (r) throw o
                        }
                    }
                    return t
                }, t.default = r, e.exports = t.default
            },
            606: function(e, t) {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.default = {
                    BUFFERING: 3,
                    ENDED: 0,
                    PAUSED: 2,
                    PLAYING: 1,
                    UNSTARTED: -1,
                    VIDEO_CUED: 5
                }, e.exports = t.default
            },
            645: function(e, t) {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.default = ["ready", "stateChange", "playbackQualityChange", "playbackRateChange", "error", "apiChange", "volumeChange"], e.exports = t.default
            },
            376: function(e, t) {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.default = ["cueVideoById", "loadVideoById", "cueVideoByUrl", "loadVideoByUrl", "playVideo", "pauseVideo", "stopVideo", "getVideoLoadedFraction", "cuePlaylist", "loadPlaylist", "nextVideo", "previousVideo", "playVideoAt", "setShuffle", "setLoop", "getPlaylist", "getPlaylistIndex", "setOption", "mute", "unMute", "isMuted", "setVolume", "getVolume", "seekTo", "getPlayerState", "getPlaybackRate", "setPlaybackRate", "getAvailablePlaybackRates", "getPlaybackQuality", "setPlaybackQuality", "getAvailableQualityLevels", "getCurrentTime", "getDuration", "removeEventListener", "getVideoUrl", "getVideoEmbedCode", "getOptions", "getOption", "addEventListener", "destroy", "setSize", "getIframe"], e.exports = t.default
            },
            640: function(e, t, n) {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: !0
                });
                var i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                        return typeof e
                    } : function(e) {
                        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                    },
                    l = r(n(438)),
                    s = r(n(341)),
                    u = r(n(368));

                function r(e) {
                    return e && e.__esModule ? e : {
                        default: e
                    }
                }
                var c = void 0;
                t.default = function(r) {
                    var a = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {},
                        e = 2 < arguments.length && void 0 !== arguments[2] && arguments[2],
                        o = (0, l.default)();
                    if (c = c || (0, s.default)(o), a.events) throw new Error("Event handlers cannot be overwritten.");
                    if ("string" == typeof r && !document.getElementById(r)) throw new Error('Element "' + r + '" does not exist.');
                    a.events = u.default.proxyEvents(o);
                    var t = new Promise(function(n) {
                            "object" === (void 0 === r ? "undefined" : i(r)) && r.playVideo instanceof Function ? n(r) : c.then(function(e) {
                                var t = new e.Player(r, a);
                                return o.on("ready", function() {
                                    n(t)
                                }), null
                            })
                        }),
                        e = u.default.promisifyPlayer(t, e);
                    return e.on = o.on, e.off = o.off, e
                }, e.exports = t.default
            },
            341: function(e, t, n) {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: !0
                });
                var r, a = n(204),
                    o = (r = a) && r.__esModule ? r : {
                        default: r
                    };
                t.default = function(r) {
                    return new Promise(function(e) {
                        var t, n;
                        window.YT && window.YT.Player && window.YT.Player instanceof Function ? e(window.YT) : (t = "http:" === window.location.protocol ? "http:" : "https:", (0, o.default)(t + "//www.youtube.com/iframe_api", function(e) {
                            e && r.trigger("error", e)
                        }), n = window.onYouTubeIframeAPIReady, window.onYouTubeIframeAPIReady = function() {
                            n && n(), e(window.YT)
                        })
                    })
                }, e.exports = t.default
            },
            779: function(e, t) {
                var n;
                /*!
                  Copyright (c) 2017 Jed Watson.
                  Licensed under the MIT License (MIT), see
                  http://jedwatson.github.io/classnames
                */
                ! function() {
                    "use strict";
                    var i = {}.hasOwnProperty;

                    function l() {
                        for (var e = [], t = 0; t < arguments.length; t++) {
                            var n = arguments[t];
                            if (n) {
                                var r = typeof n;
                                if ("string" == r || "number" == r) e.push(n);
                                else if (Array.isArray(n) && n.length) {
                                    var a = l.apply(null, n);
                                    a && e.push(a)
                                } else if ("object" == r)
                                    for (var o in n) i.call(n, o) && n[o] && e.push(o)
                            }
                        }
                        return e.join(" ")
                    }
                    e.exports ? (l.default = l, e.exports = l) : void 0 === (n = function() {
                        return l
                    }.apply(t, [])) || (e.exports = n)
                }()
            }
        },
        r = {};

    function Dt(e) {
        if (r[e]) return r[e].exports;
        var t = r[e] = {
            exports: {}
        };
        return n[e](t, t.exports, Dt), t.exports
    }
    Dt.n = function(e) {
            var t = e && e.__esModule ? function() {
                return e.default
            } : function() {
                return e
            };
            return Dt.d(t, {
                a: t
            }), t
        }, Dt.d = function(e, t) {
            for (var n in t) Dt.o(t, n) && !Dt.o(e, n) && Object.defineProperty(e, n, {
                enumerable: !0,
                get: t[n]
            })
        }, Dt.o = function(e, t) {
            return Object.prototype.hasOwnProperty.call(e, t)
        },
        function() {
            "use strict";

            function d(e, t, n) {
                return {
                    name: "buttonClick",
                    type: "buttonClick",
                    context: N,
                    params: {
                        btn: e,
                        page: "shareLinkErrorDialog",
                        linkType: "ExperienceInvite",
                        linkId: t,
                        linkStatus: n
                    }
                }
            }
            var e, c = CoreUtilities,
                w = React,
                E = Dt.n(w),
                i = ReactDOM,
                I = ReactStyleGuide,
                t = ReactUtilities,
                f = CoreRobloxUtilities,
                l = {
                    LabelSponsoredAd: "Label.SponsoredAd",
                    LabelNoSearchResults: "LabelNoSearchResults",
                    LabelPlayingOnePlusUsersWithComma: "LabelPlayingOnePlusUsersWithComma",
                    LabelPlayingOneUser: "LabelPlayingOneUser",
                    LabelBy: "LabelCreatorBy",
                    LabelByPrefix: "Label.By"
                },
                m = {
                    HeadingDescription: "Heading.Description",
                    LabelAgeGuidelines: "Label.AgeGuidelines",
                    LabelBy: "Label.By",
                    LabelPlaying: "Label.Playing",
                    LabelFavorites: "Label.Favorites",
                    LabelVisits: "Label.Visits",
                    LabelCreated: "Label.Created",
                    LabelUpdated: "Label.Updated",
                    LabelMaxPlayers: "Label.MaxPlayers",
                    LabelGenre: "Label.Genre",
                    LabelAllowedGear: "Label.AllowedGear",
                    LabelReportAbuse: "Label.ReportAbuse",
                    LabelPlaceCopyingAllowed: "Label.PlaceCopyingAllowed",
                    LabelVoiceEnabled: "Label.VoiceEnabled",
                    LabelYes: "Label.Yes",
                    LabelNo: "Label.No",
                    LabelUnavailable: "Label.Unavailable",
                    LabelSuitableForEveryone: "Label.SuitableForEveryone",
                    HeadingRecommendedGames: "Heading.RecommendedGames"
                },
                s = {
                    LabelAllGenreAllowed: "LabelAllGenreAllowed",
                    LabelGearOnly: "LabelGearOnly",
                    LabelNoGear: "LabelNoGear"
                },
                p = {
                    LabelInviteExpiredError: "Label.InviteExpiredError",
                    LabelInviterNotHereError: "Label.InviterNotHereError",
                    DescriptionInviteExpiredError: "Description.InviteExpiredError",
                    DescriptionInviterNotHereError: "Description.InviterNotHereError",
                    LabelCancel: "Label.Cancel",
                    LabelPlay: "Label.Play"
                },
                n = {
                    common: ["CommonUI.Controls"],
                    feature: "Feature.GameDetails"
                },
                r = {
                    common: [],
                    feature: "Feature.GameGearOptionsDisplay"
                },
                a = {
                    common: ["CommonUI.Controls"],
                    feature: "Feature.GameDetails"
                },
                o = {
                    common: ["Common.VisitGame"],
                    feature: "Feature.SocialShare"
                },
                u = (HeaderScripts, Roblox),
                v = u.EnvironmentUrls.gamesApi,
                y = {
                    url: {
                        getOmniRecommendations: function(e, t) {
                            return {
                                url: v + "/v1/games/omni-recommendations?model.pageType=" + e + (void 0 !== t ? "&model.sessionId=" + t : ""),
                                withCredentials: !0
                            }
                        },
                        getOmniRecommendationsMetadata: {
                            url: v + "/v1/games/omni-recommendations-metadata",
                            withCredentials: !0
                        },
                        getGameList: {
                            url: v + "/v1/games/list",
                            withCredentials: !0
                        },
                        getGamePasses: function(e, t) {
                            return {
                                url: c.urlService.getAbsoluteUrl("/Games/GetGamePassesPaged?placeId=" + e + "&startIndex=0&maxRows=" + t),
                                withCredentials: !0
                            }
                        },
                        getGameRecommendations: function(e) {
                            return {
                                url: v + "/v1/games/recommendations/game/" + e,
                                withCredentials: !0
                            }
                        },
                        getGameSorts: {
                            url: v + "/v1/games/sorts",
                            withCredentials: !0
                        },
                        getUniverseVoiceStatus: function(e) {
                            return {
                                withCredentials: !0,
                                url: u.EnvironmentUrls.voiceApi + "/v1/settings/universe/" + e
                            }
                        },
                        getVoiceOptInStatus: {
                            withCredentials: !0,
                            url: u.EnvironmentUrls.voiceApi + "/v1/settings/user-opt-in"
                        }
                    },
                    defaultCacheCriteria: {
                        refreshCache: !1,
                        expirationWindowMS: 3e4,
                        useCache: !0
                    }
                },
                b = function(e, i, l, s) {
                    return new(l = l || Promise)(function(n, t) {
                        function r(e) {
                            try {
                                o(s.next(e))
                            } catch (e) {
                                t(e)
                            }
                        }

                        function a(e) {
                            try {
                                o(s.throw(e))
                            } catch (e) {
                                t(e)
                            }
                        }

                        function o(e) {
                            var t;
                            e.done ? n(e.value) : ((t = e.value) instanceof l ? t : new l(function(e) {
                                e(t)
                            })).then(r, a)
                        }
                        o((s = s.apply(e, i || [])).next())
                    })
                },
                g = function(n, r) {
                    var a, o, i, l = {
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
                                for (; l;) try {
                                    if (a = 1, o && (i = 2 & t[0] ? o.return : t[0] ? o.throw || ((i = o.return) && i.call(o), 0) : o.next) && !(i = i.call(o, t[1])).done) return i;
                                    switch (o = 0, i && (t = [2 & t[0], i.value]), t[0]) {
                                        case 0:
                                        case 1:
                                            i = t;
                                            break;
                                        case 4:
                                            return l.label++, {
                                                value: t[1],
                                                done: !1
                                            };
                                        case 5:
                                            l.label++, o = t[1], t = [0];
                                            continue;
                                        case 7:
                                            t = l.ops.pop(), l.trys.pop();
                                            continue;
                                        default:
                                            if (!(i = 0 < (i = l.trys).length && i[i.length - 1]) && (6 === t[0] || 2 === t[0])) {
                                                l = 0;
                                                continue
                                            }
                                            if (3 === t[0] && (!i || t[1] > i[0] && t[1] < i[3])) {
                                                l.label = t[1];
                                                break
                                            }
                                            if (6 === t[0] && l.label < i[1]) {
                                                l.label = i[1], i = t;
                                                break
                                            }
                                            if (i && l.label < i[2]) {
                                                l.label = i[2], l.ops.push(t);
                                                break
                                            }
                                            i[2] && l.ops.pop(), l.trys.pop();
                                            continue
                                    }
                                    t = r.call(n, l)
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
                h = f.dataStores.gamesDataStore,
                P = (f.dataStores.userDataStoreV2, f.dataStores.userDataStore.FriendsUserSortType, function(t) {
                    return b(void 0, void 0, Promise, function() {
                        return g(this, function(e) {
                            switch (e.label) {
                                case 0:
                                    return [4, h.getGameDetails([t])];
                                case 1:
                                    return [2, e.sent().data.data[0]]
                            }
                        })
                    })
                }),
                S = function(t, n) {
                    return b(void 0, void 0, Promise, function() {
                        return g(this, function(e) {
                            switch (e.label) {
                                case 0:
                                    return [4, c.httpService.get(y.url.getGameRecommendations(t), {
                                        maxRows: n
                                    })];
                                case 1:
                                    return [2, e.sent().data]
                            }
                        })
                    })
                },
                x = function(r) {
                    return b(void 0, void 0, Promise, function() {
                        var t, n;
                        return g(this, function(e) {
                            switch (e.label) {
                                case 0:
                                    return [4, c.httpService.get(y.url.getUniverseVoiceStatus(r))];
                                case 1:
                                    return n = e.sent().data, t = n, [4, c.httpService.get(y.url.getVoiceOptInStatus)];
                                case 2:
                                    return n = e.sent().data, [2, {
                                        universeStatus: t.isUniverseEnabledForVoice,
                                        optInStatus: n.isUserOptIn
                                    }]
                            }
                        })
                    })
                },
                L = function(n) {
                    return b(void 0, void 0, Promise, function() {
                        var t;
                        return g(this, function(e) {
                            switch (e.label) {
                                case 0:
                                    return [4, h.getPlaceDetails([n])];
                                case 1:
                                    return t = e.sent().data, [2, (void 0 === t ? [] : t)[0]]
                            }
                        })
                    })
                },
                N = "shareLinks";
            (e = T = T || {}).VALID = "Valid", e.EXPIRED = "Expired", e.INVITER_NOT_IN_EXPERIENCE = "InviterNotInExperience";
            var T, k, C = T,
                D = ((T = {})[C.EXPIRED] = {
                    Header: p.LabelInviteExpiredError,
                    Description: p.DescriptionInviteExpiredError
                }, T[C.INVITER_NOT_IN_EXPERIENCE] = {
                    Header: p.LabelInviterNotHereError,
                    Description: p.DescriptionInviterNotHereError
                }, T),
                G = "game-details-invite-link-expired-modal-container",
                R = function() {
                    return document.getElementById(G)
                },
                A = (0, t.withTranslations)(function(e) {
                    var t = e.translate,
                        n = e.linkId,
                        r = e.linkStatus,
                        a = e.placeId,
                        o = e.universeId,
                        i = (0, w.useState)(!0),
                        l = i[0],
                        s = i[1],
                        e = (0, w.useState)(void 0),
                        i = e[0],
                        u = e[1];
                    (0, w.useEffect)(function() {
                        P(o).then(function(e) {
                            u(e)
                        }, function() {
                            return !1
                        })
                    }, [o]);

                    function c() {
                        return s(!1)
                    }
                    e = E().createElement("p", null, t(D[r].Description, {
                        experienceName: null == i ? void 0 : i.name
                    }));
                    return E().createElement(I.SimpleModal, {
                        show: l,
                        title: t(D[r].Header),
                        body: i && e,
                        loading: !i,
                        actionButtonShow: !0,
                        actionButtonText: t(p.LabelPlay),
                        neutralButtonText: t(p.LabelCancel),
                        onAction: function() {
                            f.playGameService.launchGame(f.playGameService.buildPlayGameProperties(a, a), {
                                eventName: "joinGameFromInviteLink",
                                gamePlayIntentEventCtx: N,
                                ctx: N,
                                properties: {
                                    linkStatus: r,
                                    linkType: "ExperienceInvite",
                                    placeId: a,
                                    linkId: n
                                }
                            });
                            var e = d("join", n, r);
                            f.eventStreamService.sendEventWithTarget(e.type, e.context, e.params), c()
                        },
                        onClose: c,
                        onNeutral: function() {
                            var e = d("cancel", n, r);
                            f.eventStreamService.sendEventWithTarget(e.type, e.context, e.params), c()
                        }
                    })
                }, o);
            (o = {})[o.Image = 1] = "Image", o[o.YouTubeVideo = 33] = "YouTubeVideo", o[o.Unknown = 0] = "Unknown", (o = k = k || {}).Image = "Image", o.YouTubeVideo = "YouTubeVideo", o.Place = "Place", o[o.Unknown = 0] = "Unknown";
            var O, o = Dt(779),
                U = Dt.n(o),
                V = RobloxThumbnails,
                o = Dt(640),
                M = Dt.n(o),
                F = "game-details-carousel-container",
                B = "game-details-play-button-container",
                j = function() {
                    return document.getElementById(F)
                },
                _ = {
                    back: "Action.Back",
                    next: "Action.Next"
                },
                H = {
                    delay: 6e3
                },
                z = function(e) {
                    return {
                        width: 768,
                        height: 432,
                        videoId: e,
                        playerVars: {
                            cc_load_policy: 1,
                            modestbranding: 1
                        }
                    }
                },
                q = function(e, i, l, s) {
                    return new(l = l || Promise)(function(n, t) {
                        function r(e) {
                            try {
                                o(s.next(e))
                            } catch (e) {
                                t(e)
                            }
                        }

                        function a(e) {
                            try {
                                o(s.throw(e))
                            } catch (e) {
                                t(e)
                            }
                        }

                        function o(e) {
                            var t;
                            e.done ? n(e.value) : ((t = e.value) instanceof l ? t : new l(function(e) {
                                e(t)
                            })).then(r, a)
                        }
                        o((s = s.apply(e, i || [])).next())
                    })
                },
                Y = function(n, r) {
                    var a, o, i, l = {
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
                                for (; l;) try {
                                    if (a = 1, o && (i = 2 & t[0] ? o.return : t[0] ? o.throw || ((i = o.return) && i.call(o), 0) : o.next) && !(i = i.call(o, t[1])).done) return i;
                                    switch (o = 0, i && (t = [2 & t[0], i.value]), t[0]) {
                                        case 0:
                                        case 1:
                                            i = t;
                                            break;
                                        case 4:
                                            return l.label++, {
                                                value: t[1],
                                                done: !1
                                            };
                                        case 5:
                                            l.label++, o = t[1], t = [0];
                                            continue;
                                        case 7:
                                            t = l.ops.pop(), l.trys.pop();
                                            continue;
                                        default:
                                            if (!(i = 0 < (i = l.trys).length && i[i.length - 1]) && (6 === t[0] || 2 === t[0])) {
                                                l = 0;
                                                continue
                                            }
                                            if (3 === t[0] && (!i || t[1] > i[0] && t[1] < i[3])) {
                                                l.label = t[1];
                                                break
                                            }
                                            if (6 === t[0] && l.label < i[1]) {
                                                l.label = i[1], i = t;
                                                break
                                            }
                                            if (i && l.label < i[2]) {
                                                l.label = i[2], l.ops.push(t);
                                                break
                                            }
                                            i[2] && l.ops.pop(), l.trys.pop();
                                            continue
                                    }
                                    t = r.call(n, l)
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

            function Q() {
                return document.getElementById(fe)
            }

            function J(e) {
                return {
                    PowerUps: "PowerUp",
                    Music: "Musical",
                    PersonalTransport: "Transport"
                }[e] || e
            }

            function W(e, n) {
                return e.filter(function(e) {
                    var t;
                    return (null === (t = e.presence) || void 0 === t ? void 0 : t.universeId) === n && (null === (e = e.presence) || void 0 === e ? void 0 : e.userPresenceType) === u.Presence.PresenceTypes.InGame
                })
            }

            function X(e) {
                return e.charAt(0).toUpperCase() + e.slice(1)
            }

            function $(e) {
                var t = e.split(/([A-Z][a-z]*)/g);
                return 1 === t.length ? e : X(t.filter(function(e) {
                    return 0 !== e.length
                }).join(" "))
            }

            function Z(n) {
                return Object.keys(n).reduce(function(e, t) {
                    return "object" == typeof n[t] && n[t] && (e[t] = JSON.stringify(n[t])), "number" == typeof n[t] && (e[t] = n[t]), "string" == typeof n[t] && (e[t] = encodeURIComponent(n[t])), "boolean" == typeof n[t] && (e[t] = n[t] ? 1 : 0), e
                }, {})
            }

            function K(e) {
                e instanceof SyntaxError && window.sessionStorage.removeItem(ke)
            }(o = O = O || {})[o.Unstarted = -1] = "Unstarted", o[o.Ended = 0] = "Ended", o[o.Playing = 1] = "Playing", o[o.Paused = 2] = "Paused", o[o.Buffering = 3] = "Buffering", o[o.Cued = 5] = "Cued";
            var ee = (0, w.forwardRef)(function(e, t) {
                    function n(e) {
                        switch (e.data) {
                            case O.Playing:
                            case O.Buffering:
                                i && i(e);
                                break;
                            case O.Paused:
                                l && l(e);
                                break;
                            case O.Ended:
                                s && s(e)
                        }
                    }

                    function r(e) {
                        var t;
                        null !== (t = c.current) && void 0 !== t && t.mute(), u && u(e)
                    }
                    var a = e.id,
                        o = e.className,
                        i = e.onPlay,
                        l = e.onPaused,
                        s = e.onEnd,
                        u = e.onReady,
                        c = (0, w.useRef)(void 0);
                    return (0, w.useImperativeHandle)(t, function() {
                        return {
                            pause: function() {
                                var e;
                                null !== (e = c.current) && void 0 !== e && e.pauseVideo()
                            },
                            play: function(e) {
                                var t;
                                void 0 !== e && null !== (t = c.current) && void 0 !== t && t.seekTo(e, !0), null !== (e = c.current) && void 0 !== e && e.playVideo()
                            },
                            getCurrentTime: function() {
                                return q(void 0, void 0, Promise, function() {
                                    var t;
                                    return Y(this, function(e) {
                                        switch (e.label) {
                                            case 0:
                                                return [4, null === (t = c.current) || void 0 === t ? void 0 : t.getCurrentTime()];
                                            case 1:
                                                return [2, e.sent() || -1]
                                        }
                                    })
                                })
                            },
                            getDuration: function() {
                                return q(void 0, void 0, Promise, function() {
                                    var t;
                                    return Y(this, function(e) {
                                        switch (e.label) {
                                            case 0:
                                                return [4, null === (t = c.current) || void 0 === t ? void 0 : t.getDuration()];
                                            case 1:
                                                return [2, e.sent() || -1]
                                        }
                                    })
                                })
                            }
                        }
                    }), (0, w.useEffect)(function() {
                        return c.current = M()(a, z(a)), c.current.on("stateChange", n), c.current.on("ready", r),
                            function() {
                                var e;
                                null !== (e = c.current) && void 0 !== e && e.destroy()
                            }
                    }, []), E().createElement("div", {
                        className: o
                    }, E().createElement("div", {
                        id: a
                    }))
                }),
                te = function(e, i, l, s) {
                    return new(l = l || Promise)(function(n, t) {
                        function r(e) {
                            try {
                                o(s.next(e))
                            } catch (e) {
                                t(e)
                            }
                        }

                        function a(e) {
                            try {
                                o(s.throw(e))
                            } catch (e) {
                                t(e)
                            }
                        }

                        function o(e) {
                            var t;
                            e.done ? n(e.value) : ((t = e.value) instanceof l ? t : new l(function(e) {
                                e(t)
                            })).then(r, a)
                        }
                        o((s = s.apply(e, i || [])).next())
                    })
                },
                ne = function(n, r) {
                    var a, o, i, l = {
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
                                for (; l;) try {
                                    if (a = 1, o && (i = 2 & t[0] ? o.return : t[0] ? o.throw || ((i = o.return) && i.call(o), 0) : o.next) && !(i = i.call(o, t[1])).done) return i;
                                    switch (o = 0, i && (t = [2 & t[0], i.value]), t[0]) {
                                        case 0:
                                        case 1:
                                            i = t;
                                            break;
                                        case 4:
                                            return l.label++, {
                                                value: t[1],
                                                done: !1
                                            };
                                        case 5:
                                            l.label++, o = t[1], t = [0];
                                            continue;
                                        case 7:
                                            t = l.ops.pop(), l.trys.pop();
                                            continue;
                                        default:
                                            if (!(i = 0 < (i = l.trys).length && i[i.length - 1]) && (6 === t[0] || 2 === t[0])) {
                                                l = 0;
                                                continue
                                            }
                                            if (3 === t[0] && (!i || t[1] > i[0] && t[1] < i[3])) {
                                                l.label = t[1];
                                                break
                                            }
                                            if (6 === t[0] && l.label < i[1]) {
                                                l.label = i[1], i = t;
                                                break
                                            }
                                            if (i && l.label < i[2]) {
                                                l.label = i[2], l.ops.push(t);
                                                break
                                            }
                                            i[2] && l.ops.pop(), l.trys.pop();
                                            continue
                                    }
                                    t = r.call(n, l)
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
                re = (0, w.forwardRef)(function(e, t) {
                    function u() {
                        g.current && Object.values(g.current).forEach(function(e) {
                            e.pause()
                        })
                    }

                    function n(s) {
                        return te(void 0, void 0, void 0, function() {
                            var t, n, r, a, o, i, l;
                            return ne(this, function(e) {
                                switch (e.label) {
                                    case 0:
                                        return (null != s && s.preventDefault(), u(), t = (b.current + 1) % c.length, d(t), b.current = t, h(), c[t].type !== k.YouTubeVideo) ? [3, 3] : (n = null === (l = g.current) || void 0 === l ? void 0 : l[t], l = (a = Math).ceil, [4, n.getDuration()]);
                                    case 1:
                                        return r = l.apply(a, [e.sent()]), i = (o = Math).ceil, [4, n.getCurrentTime()];
                                    case 2:
                                        ((o = i.apply(o, [e.sent()])) <= 0 || r <= o) && b.current === t && n.play(0), e.label = 3;
                                    case 3:
                                        return [2]
                                }
                            })
                        })
                    }

                    function r(e) {
                        null != e && e.preventDefault(), u(), e = b.current - 1 < 0 ? c.length - 1 : b.current - 1, d(e), b.current = e, h()
                    }

                    function a() {
                        y.current && clearTimeout(y.current)
                    }
                    var c = e.items,
                        o = e.delay,
                        i = e.translate,
                        l = (0, w.useState)(0),
                        s = l[0],
                        d = l[1],
                        e = (0, w.useState)(!1),
                        l = e[0],
                        f = e[1],
                        m = (0, w.useRef)(!1),
                        e = (0, w.useState)(!1),
                        p = e[0],
                        v = e[1],
                        y = (0, w.useRef)(void 0),
                        b = (0, w.useRef)(s),
                        g = (0, w.useRef)({}),
                        h = function() {
                            a(), p || m.current || (y.current = setTimeout(function() {
                                n()
                            }, o))
                        };
                    (0, w.useEffect)(function() {
                        var e;
                        return h(), null !== (e = document.getElementById(B)) && void 0 !== e && e.addEventListener("click", u),
                            function() {
                                var e;
                                a(), null !== (e = document.getElementById(B)) && void 0 !== e && e.removeEventListener("click", u)
                            }
                    }, []), (0, w.useImperativeHandle)(t, function() {
                        return {
                            start: h,
                            stop: a,
                            next: n,
                            back: r
                        }
                    });
                    t = function(e) {
                        e.stopPropagation()
                    };
                    return E().createElement("div", {
                        "data-testid": "carousel",
                        onFocus: function() {
                            f(!0), m.current = !0, a()
                        },
                        onBlur: function() {
                            f(!1), m.current = !1, h()
                        },
                        onMouseEnter: function() {
                            f(!0), m.current = !0, a()
                        },
                        onMouseLeave: function() {
                            f(!1), m.current = !1, h()
                        }
                    }, 1 < c.length && E().createElement(E().Fragment, null, E().createElement(I.Button, {
                        className: U()("carousel-controls", "carousel-controls-left", {
                            "carousel-controls-visible": l
                        }),
                        onClick: r,
                        onBlur: t,
                        "aria-label": i(_.back)
                    }, E().createElement("span", {
                        className: "icon-carousel-left"
                    })), E().createElement(I.Button, {
                        className: U()("carousel-controls", "carousel-controls-right", {
                            "carousel-controls-visible": l
                        }),
                        onClick: n,
                        onBlur: t,
                        "aria-label": i(_.next)
                    }, E().createElement("span", {
                        className: "icon-carousel-right"
                    }))), c.map(function(e, t) {
                        switch (e.type) {
                            case k.Image:
                            case k.Place:
                                return E().createElement(V.Thumbnail2d, {
                                    key: e.assetId,
                                    type: e.type === k.Image ? V.ThumbnailTypes.assetThumbnail : V.ThumbnailTypes.gameThumbnail,
                                    size: V.ThumbnailUniverseThumbnailSize.width768,
                                    targetId: e.assetId,
                                    altName: e.altText,
                                    containerClass: U()("carousel-item", {
                                        "carousel-item-active": t === s,
                                        "carousel-item-active-out": t === (s - 1 < 0 ? c.length - 1 : s - 1) || t === (s + 1) % c.length
                                    })
                                });
                            case k.YouTubeVideo:
                                return E().createElement(ee, {
                                    ref: function(e) {
                                        e && (g.current[t] = e)
                                    },
                                    id: e.videoHash,
                                    key: e.videoHash,
                                    className: U()("carousel-item", "carousel-video", {
                                        "carousel-item-active": t === s,
                                        "carousel-item-active-out": t === (s - 1 < 0 ? c.length - 1 : s - 1) || t === (s + 1) % c.length
                                    }),
                                    onPlay: function() {
                                        a(), v(!0)
                                    },
                                    onPaused: function() {
                                        h(), v(!1)
                                    },
                                    onEnd: function() {
                                        n(), v(!1)
                                    },
                                    onReady: function() {
                                        var e;
                                        0 === t && b.current === t && null !== (e = g.current) && void 0 !== e && e[t].play(0)
                                    }
                                });
                            default:
                                return null
                        }
                    }))
                }),
                ae = function(e, i, l, s) {
                    return new(l = l || Promise)(function(n, t) {
                        function r(e) {
                            try {
                                o(s.next(e))
                            } catch (e) {
                                t(e)
                            }
                        }

                        function a(e) {
                            try {
                                o(s.throw(e))
                            } catch (e) {
                                t(e)
                            }
                        }

                        function o(e) {
                            var t;
                            e.done ? n(e.value) : ((t = e.value) instanceof l ? t : new l(function(e) {
                                e(t)
                            })).then(r, a)
                        }
                        o((s = s.apply(e, i || [])).next())
                    })
                },
                oe = function(n, r) {
                    var a, o, i, l = {
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
                                for (; l;) try {
                                    if (a = 1, o && (i = 2 & t[0] ? o.return : t[0] ? o.throw || ((i = o.return) && i.call(o), 0) : o.next) && !(i = i.call(o, t[1])).done) return i;
                                    switch (o = 0, i && (t = [2 & t[0], i.value]), t[0]) {
                                        case 0:
                                        case 1:
                                            i = t;
                                            break;
                                        case 4:
                                            return l.label++, {
                                                value: t[1],
                                                done: !1
                                            };
                                        case 5:
                                            l.label++, o = t[1], t = [0];
                                            continue;
                                        case 7:
                                            t = l.ops.pop(), l.trys.pop();
                                            continue;
                                        default:
                                            if (!(i = 0 < (i = l.trys).length && i[i.length - 1]) && (6 === t[0] || 2 === t[0])) {
                                                l = 0;
                                                continue
                                            }
                                            if (3 === t[0] && (!i || t[1] > i[0] && t[1] < i[3])) {
                                                l.label = t[1];
                                                break
                                            }
                                            if (6 === t[0] && l.label < i[1]) {
                                                l.label = i[1], i = t;
                                                break
                                            }
                                            if (i && l.label < i[2]) {
                                                l.label = i[2], l.ops.push(t);
                                                break
                                            }
                                            i[2] && l.ops.pop(), l.trys.pop();
                                            continue
                                    }
                                    t = r.call(n, l)
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
                ie = f.dataStores.gamesDataStore,
                le = {},
                se = function(n) {
                    return ae(void 0, void 0, Promise, function() {
                        var t;
                        return oe(this, function(e) {
                            switch (e.label) {
                                case 0:
                                    return le[n] ? [2, le[n]] : [4, ie.getUniverseMedia(n)];
                                case 1:
                                    return t = e.sent().data.data, t = (void 0 === t ? [] : t).filter(function(e) {
                                        return e.approved
                                    }).map(function(e) {
                                        switch (e.assetType) {
                                            case k.Image:
                                                return {
                                                    type: e.assetType,
                                                    assetId: e.imageId,
                                                    altText: e.altText
                                                };
                                            case k.YouTubeVideo:
                                                return {
                                                    type: e.assetType,
                                                    videoHash: e.videoHash
                                                };
                                            default:
                                                return {
                                                    type: k.Unknown,
                                                    assetId: 0
                                                }
                                        }
                                    }).filter(function(e) {
                                        return e.type !== k.Unknown
                                    }), [2, le[n] = t]
                            }
                        })
                    })
                },
                ue = function(e, i, l, s) {
                    return new(l = l || Promise)(function(n, t) {
                        function r(e) {
                            try {
                                o(s.next(e))
                            } catch (e) {
                                t(e)
                            }
                        }

                        function a(e) {
                            try {
                                o(s.throw(e))
                            } catch (e) {
                                t(e)
                            }
                        }

                        function o(e) {
                            var t;
                            e.done ? n(e.value) : ((t = e.value) instanceof l ? t : new l(function(e) {
                                e(t)
                            })).then(r, a)
                        }
                        o((s = s.apply(e, i || [])).next())
                    })
                },
                ce = function(n, r) {
                    var a, o, i, l = {
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
                                for (; l;) try {
                                    if (a = 1, o && (i = 2 & t[0] ? o.return : t[0] ? o.throw || ((i = o.return) && i.call(o), 0) : o.next) && !(i = i.call(o, t[1])).done) return i;
                                    switch (o = 0, i && (t = [2 & t[0], i.value]), t[0]) {
                                        case 0:
                                        case 1:
                                            i = t;
                                            break;
                                        case 4:
                                            return l.label++, {
                                                value: t[1],
                                                done: !1
                                            };
                                        case 5:
                                            l.label++, o = t[1], t = [0];
                                            continue;
                                        case 7:
                                            t = l.ops.pop(), l.trys.pop();
                                            continue;
                                        default:
                                            if (!(i = 0 < (i = l.trys).length && i[i.length - 1]) && (6 === t[0] || 2 === t[0])) {
                                                l = 0;
                                                continue
                                            }
                                            if (3 === t[0] && (!i || t[1] > i[0] && t[1] < i[3])) {
                                                l.label = t[1];
                                                break
                                            }
                                            if (6 === t[0] && l.label < i[1]) {
                                                l.label = i[1], i = t;
                                                break
                                            }
                                            if (i && l.label < i[2]) {
                                                l.label = i[2], l.ops.push(t);
                                                break
                                            }
                                            i[2] && l.ops.pop(), l.trys.pop();
                                            continue
                                    }
                                    t = r.call(n, l)
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
                de = (0, t.withTranslations)(function(e) {
                    var t = e.translate,
                        n = e.placeId,
                        r = e.universeId,
                        a = e.delay,
                        o = (0, w.useState)(void 0),
                        e = o[0],
                        i = o[1];
                    return (0, w.useEffect)(function() {
                        ue(void 0, void 0, void 0, function() {
                            var t;
                            return ce(this, function(e) {
                                switch (e.label) {
                                    case 0:
                                        return e.trys.push([0, 2, , 3]), [4, se(r)];
                                    case 1:
                                        return t = e.sent(), i(t), [3, 3];
                                    case 2:
                                        return e.sent(), i([]), [3, 3];
                                    case 3:
                                        return [2]
                                }
                            })
                        })
                    }, [r]), void 0 === e ? E().createElement("div", {
                        className: "shimmer",
                        "data-testid": "loading"
                    }) : 0 === e.length ? E().createElement(re, {
                        translate: t,
                        delay: a,
                        items: [{
                            type: k.Place,
                            assetId: parseInt(n, 10)
                        }]
                    }) : E().createElement(re, {
                        translate: t,
                        delay: a,
                        items: e
                    })
                }, a),
                fe = "game-detail-meta-data",
                me = function() {
                    var e, r = (null === (e = Q()) || void 0 === e ? void 0 : e.dataset) || {};
                    return Object.keys(r).reduce(function(e, t) {
                        var n = r[t].toLowerCase();
                        return e[t] = "true" === n || "false" !== n && r[t], e
                    }, {})
                },
                pe = function(e, t) {
                    for (var n = 0, r = t.length, a = e.length; n < r; n++, a++) e[a] = t[n];
                    return e
                },
                ve = (new u.Intl).getDateTimeFormatter(),
                a = c.urlService.parseQueryString,
                ye = c.abbreviateNumber.getAbbreviatedValue,
                be = c.numberFormat.getNumberFormat,
                ge = {
                    capitalize: X,
                    humanizeCamelCase: $,
                    parseEventParams: Z,
                    getInGameFriends: W,
                    getVotePercentage: function(e, t) {
                        var n = 0;
                        if (!Number.isNaN(e) && !Number.isNaN(t)) {
                            if (0 === e && 0 === t) return;
                            n = 0 === e && 0 !== t ? 0 : 0 !== e && 0 === t || 100 < (n = Math.floor(e / (e + t) * 100)) ? 100 : n
                        }
                        return n + "%"
                    },
                    getGearIconName: J,
                    getNumberFormat: be,
                    getAbbreviatedValue: ye,
                    dateTimeFormatter: ve,
                    parseQueryString: a,
                    composeQueryString: function(e) {
                        e = c.urlService.composeQueryString(e);
                        return e ? "?" + e : ""
                    },
                    calculateImpressedIndexes: function(e, n) {
                        if (void 0 === e) return Array.from(new Array(n[1] - n[0] + 1), function(e, t) {
                            return t + n[0]
                        });
                        var r = n[0] < e[0] ? [n[0], e[0]] : void 0,
                            a = n[1] > e[1] ? [e[1], n[1]] : void 0,
                            t = r ? new Array(r[1] - r[0]).fill(0).map(function(e, t) {
                                return t + r[0]
                            }) : [],
                            e = a ? new Array(a[1] - a[0]).fill(0).map(function(e, t) {
                                return t + a[0] + 1
                            }) : [];
                        return pe(pe([], t), e)
                    },
                    splitArray: function(n, r) {
                        if (0 === n.length || 0 === r) return [n];
                        var e = Math.ceil(n.length / r);
                        return new Array(e).fill(0).map(function(e, t) {
                            return n.slice(t * r, (t + 1) * r)
                        })
                    }
                },
                he = function() {
                    return (he = Object.assign || function(e) {
                        for (var t, n = 1, r = arguments.length; n < r; n++)
                            for (var a in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
                        return e
                    }).apply(this, arguments)
                },
                we = function(e, t) {
                    var n = {};
                    for (a in e) Object.prototype.hasOwnProperty.call(e, a) && t.indexOf(a) < 0 && (n[a] = e[a]);
                    if (null != e && "function" == typeof Object.getOwnPropertySymbols)
                        for (var r = 0, a = Object.getOwnPropertySymbols(e); r < a.length; r++) t.indexOf(a[r]) < 0 && Object.prototype.propertyIsEnumerable.call(e, a[r]) && (n[a[r]] = e[a[r]]);
                    return n
                },
                Ee = (a = f.eventStreamService.eventTypes).pageLoad,
                Ie = a.formInteraction,
                Pe = "gameImpressions",
                Se = "gameDetailReferral",
                xe = "gameDetailPage",
                Le = function(e) {
                    e = we(e, []);
                    return [{
                        name: Pe,
                        type: Pe,
                        context: Ie
                    }, Z(he({}, e))]
                },
                Ne = function(e) {
                    return void 0 === e && (e = {}), [{
                        name: Se,
                        type: Se,
                        context: Ee
                    }, Z(he({}, e))]
                },
                Te = function() {
                    return (Te = Object.assign || function(e) {
                        for (var t, n = 1, r = arguments.length; n < r; n++)
                            for (var a in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
                        return e
                    }).apply(this, arguments)
                },
                ke = "eventTracker",
                Ce = function(e) {
                    try {
                        var t = JSON.parse(window.sessionStorage.getItem(ke) || "{}"),
                            t = Te(Te({}, t), e);
                        return window.sessionStorage.setItem(ke, JSON.stringify(t)), !0
                    } catch (e) {
                        return K(e), !1
                    }
                },
                De = ge.parseQueryString,
                Ge = ge.composeQueryString,
                Re = function(r, a, o, i, l) {
                    void 0 === i && (i = window.location), void 0 === l && (l = window.history);
                    var e = (0, w.useState)(De(i.search)),
                        t = e[0],
                        s = e[1];
                    return (0, w.useEffect)(function() {
                        var n, e, t;
                        n = De(i.search), e = a.reduce(function(e, t) {
                            return void 0 === n[t] && null === n[t] || (e[t] = n[t]), e
                        }, {}), !(t = o.reduce(function(e, t) {
                            return void 0 === n[t] && null === n[t] || (e[t] = n[t]), e
                        }, {})).launchData && t.placeId && delete t.placeId, s(e), Ce(e), void 0 !== l.replace && l.replace("" + i.pathname + Ge(t)), void 0 !== l.replaceState && l.replaceState(void 0, "", "" + i.pathname + i.hash + Ge(t)), f.eventStreamService.sendEvent.apply(f.eventStreamService, r(e))
                    }, []), t
                },
                Ae = u.PlayButton.usePlayabilityStatus,
                Oe = u.PlayButton.DefaultPlayButton;

            function Ue() {
                var e = me() || {},
                    t = e.universeId,
                    n = void 0 === t ? "" : t,
                    r = e.rootPlaceId,
                    a = void 0 === r ? "" : r,
                    o = e.privateServerLinkCode,
                    i = void 0 === o ? "" : o,
                    t = e.gameInstanceId,
                    r = void 0 === t ? "" : t,
                    o = Ae(n),
                    e = o[0],
                    t = o[1],
                    o = Re(Ne, ["isAd", "page", "placeId", "universeId", "sortPos", "position", "gameSetTypeId", "gameSetTargetId", "homePageSessionInfo", "gameSearchSessionInfo", "numberOfLoadedTiles"], ["privateServerLinkCode", "placeId", "launchData", "gameInstanceId"]);
                return E().createElement(Oe, {
                    placeId: a,
                    rootPlaceId: a,
                    universeId: n,
                    privateServerLinkCode: i,
                    gameInstanceId: r,
                    refetchPlayabilityStatus: t,
                    playabilityStatus: e,
                    eventProperties: {
                        gameSearchSessionInfo: o.gameSearchSessionInfo,
                        homePageSessionInfo: o.homePageSessionInfo,
                        page: o.page,
                        sortPos: o.sortPos,
                        gameSetTypeId: o.gameSetTypeId
                    }
                })
            }

            function Ve(e, t) {
                return t = {
                    id: e,
                    RedirectUrl: encodeURIComponent(f.entityUrl.game.getRelativePath(e) + "/" + c.seoName.formatSeoName(t))
                }, c.urlService.getUrlWithQueries("/abusereport/asset", t)
            }

            function Me(e) {
                var t = (n = window.getComputedStyle(e)).marginLeft,
                    n = n.marginRight;
                return e.getBoundingClientRect().width + (parseInt(t, 10) || 0) + (parseInt(n, 10) || 0)
            }

            function Fe(e) {
                var e = (t = e.getBoundingClientRect()).top,
                    t = t.height;
                return 0 < e + t / 2 && window.innerHeight > e + t / 2
            }

            function Be(e) {
                var t = e.placeId,
                    n = e.universeId,
                    r = e.translate,
                    a = (0, w.useState)(void 0),
                    o = a[0],
                    i = a[1],
                    e = (s = (0, w.useState)(void 0))[0],
                    l = s[1],
                    s = (a = (0, w.useState)(void 0))[0],
                    u = a[1];
                return (0, w.useEffect)(function() {
                    qe(void 0, void 0, void 0, function() {
                        var t;
                        return Ye(this, function(e) {
                            switch (e.label) {
                                case 0:
                                    return e.trys.push([0, 2, , 3]), [4, P(n)];
                                case 1:
                                    return t = e.sent(), i(t), [3, 3];
                                case 2:
                                    return t = e.sent(), console.error(t), [3, 3];
                                case 3:
                                    return [2]
                            }
                        })
                    }), qe(void 0, void 0, void 0, function() {
                        var t;
                        return Ye(this, function(e) {
                            switch (e.label) {
                                case 0:
                                    return e.trys.push([0, 2, , 3]), [4, x(n)];
                                case 1:
                                    return t = e.sent(), l(t.universeStatus), u(t.optInStatus), [3, 3];
                                case 2:
                                    return t = e.sent(), console.error(t), l(!1), u(!1), [3, 3];
                                case 3:
                                    return [2]
                            }
                        })
                    })
                }, []), void 0 === o || void 0 === e || void 0 === s ? E().createElement(I.Loading, null) : (a = [{
                    label: r(m.LabelPlaying),
                    value: be(o.playing)
                }, {
                    label: r(m.LabelFavorites),
                    value: be(o.favoritedCount)
                }, {
                    label: r(m.LabelVisits),
                    value: ye(o.visits)
                }, {
                    label: r(m.LabelCreated),
                    value: ve.getShortDate(o.created)
                }, {
                    label: r(m.LabelUpdated),
                    value: ve.getShortDate(o.updated)
                }, {
                    label: r(m.LabelMaxPlayers),
                    value: be(o.maxPlayers)
                }, {
                    label: r(m.LabelGenre),
                    value: o.genre
                }, {
                    label: r(m.LabelAllowedGear),
                    value: E().createElement(ze, {
                        genre: o.genre,
                        isGenreEnforced: o.isGenreEnforced,
                        isAllGenre: o.isAllGenre,
                        allowedGearCategories: o.allowedGearCategories
                    })
                }], e = {
                    label: r(m.LabelVoiceEnabled),
                    value: r(e ? m.LabelYes : m.LabelNo)
                }, s && a.splice(_e.voiceLabelIndex, 0, e), E().createElement("div", {
                    className: "game-description-container"
                }, E().createElement("h2", null, r(m.HeadingDescription)), E().createElement("pre", {
                    className: "text game-description"
                }, null === (e = o.description) || void 0 === e ? void 0 : e.split(c.regex.url).map(function(e, t) {
                    return -1 < e.search(c.regex.url) ? E().createElement("a", {
                        key: t,
                        "data-testid": "game-description-link",
                        className: "text-link",
                        href: e
                    }, e) : e
                })), E().createElement("ul", {
                    className: "border-top border-bottom game-stat-container"
                }, a.map(function(e) {
                    return E().createElement("li", {
                        key: e.label,
                        className: "game-stat"
                    }, E().createElement("p", {
                        className: "text-label text-overflow font-caption-header"
                    }, e.label), E().createElement("p", {
                        className: "text-lead font-caption-body"
                    }, e.value))
                })), E().createElement("div", {
                    className: "game-description-footer"
                }, o.copyingAllowed && E().createElement("p", {
                    className: "text-pastname"
                }, r(m.LabelPlaceCopyingAllowed)), E().createElement(I.Link, {
                    className: "text-report",
                    url: Ve(t, o.name)
                }, r(m.LabelReportAbuse)))))
            }
            var je = function(e, t, n) {
                    return void 0 === n && (n = {}), c.urlService.getUrlWithQueries(f.entityUrl.game.getRelativePath(e) + "/" + c.seoName.formatSeoName(t), n)
                },
                _e = {
                    maxTilesPerCarouselPage: 6,
                    voiceLabelIndex: 3
                },
                a = {
                    maxTilesInGameImpressionsEvent: 25,
                    numberOfInGameIcons: 3,
                    numberOfInGameNames: 1,
                    numberOfGameTilesPerLoad: 60,
                    numberOfGamePassesPerLoad: 50,
                    keyBoardEventCode: {
                        enter: "Enter"
                    }
                },
                He = _e,
                ze = (0, t.withTranslations)(function(e) {
                    var t = e.genre,
                        n = e.isGenreEnforced,
                        r = e.isAllGenre,
                        a = e.allowedGearCategories,
                        o = e.translate;
                    return E().createElement(E().Fragment, null, 0 < a.length && n && r ? E().createElement(I.Tooltip, {
                        placement: "bottom",
                        id: o(s.LabelAllGenreAllowed),
                        content: o(s.LabelAllGenreAllowed)
                    }, E().createElement("span", {
                        className: "icon-allgears"
                    })) : 0 < a.length && n ? E().createElement(I.Tooltip, {
                        placement: "bottom",
                        id: o(s.LabelGearOnly, {
                            GearName: $(t)
                        }),
                        content: o(s.LabelGearOnly, {
                            GearName: $(t)
                        })
                    }, E().createElement("span", {
                        className: "icon-partialgears"
                    })) : 0 === a.length ? E().createElement(I.Tooltip, {
                        placement: "bottom",
                        id: o(s.LabelNoGear),
                        content: o(s.LabelNoGear)
                    }, E().createElement("span", {
                        className: "icon-nogear"
                    })) : void 0, a.map(function(e) {
                        return E().createElement(I.Tooltip, {
                            key: e,
                            placement: "bottom",
                            id: $(e),
                            content: $(e)
                        }, E().createElement("span", {
                            className: "icon-" + J(e)
                        }))
                    }))
                }, r),
                qe = function(e, i, l, s) {
                    return new(l = l || Promise)(function(n, t) {
                        function r(e) {
                            try {
                                o(s.next(e))
                            } catch (e) {
                                t(e)
                            }
                        }

                        function a(e) {
                            try {
                                o(s.throw(e))
                            } catch (e) {
                                t(e)
                            }
                        }

                        function o(e) {
                            var t;
                            e.done ? n(e.value) : ((t = e.value) instanceof l ? t : new l(function(e) {
                                e(t)
                            })).then(r, a)
                        }
                        o((s = s.apply(e, i || [])).next())
                    })
                },
                Ye = function(n, r) {
                    var a, o, i, l = {
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
                                for (; l;) try {
                                    if (a = 1, o && (i = 2 & t[0] ? o.return : t[0] ? o.throw || ((i = o.return) && i.call(o), 0) : o.next) && !(i = i.call(o, t[1])).done) return i;
                                    switch (o = 0, i && (t = [2 & t[0], i.value]), t[0]) {
                                        case 0:
                                        case 1:
                                            i = t;
                                            break;
                                        case 4:
                                            return l.label++, {
                                                value: t[1],
                                                done: !1
                                            };
                                        case 5:
                                            l.label++, o = t[1], t = [0];
                                            continue;
                                        case 7:
                                            t = l.ops.pop(), l.trys.pop();
                                            continue;
                                        default:
                                            if (!(i = 0 < (i = l.trys).length && i[i.length - 1]) && (6 === t[0] || 2 === t[0])) {
                                                l = 0;
                                                continue
                                            }
                                            if (3 === t[0] && (!i || t[1] > i[0] && t[1] < i[3])) {
                                                l.label = t[1];
                                                break
                                            }
                                            if (6 === t[0] && l.label < i[1]) {
                                                l.label = i[1], i = t;
                                                break
                                            }
                                            if (i && l.label < i[2]) {
                                                l.label = i[2], l.ops.push(t);
                                                break
                                            }
                                            i[2] && l.ops.pop(), l.trys.pop();
                                            continue
                                    }
                                    t = r.call(n, l)
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
                r = PropTypes,
                Qe = "Label.ContextMenuTitle",
                Je = "Action.ViewDetails",
                We = "Action.JoinGame",
                Xe = {
                    goToProfileInPlacesList: {
                        name: "goToProfileInPlacesList",
                        ctx: "click"
                    },
                    openModalFromGameTile: {
                        name: "openModalFromGameTile",
                        ctx: "click"
                    },
                    goToChatInPlacesList: {
                        name: "goToChatInPlacesList",
                        ctx: "click"
                    },
                    joinGameInPlacesList: {
                        name: "joinGameInPlacesList",
                        ctx: "click"
                    },
                    goToGameDetailInPlacesList: {
                        name: "goToGameDetailInPlacesList",
                        ctx: "click"
                    },
                    gamePlayIntentInPlacesList: {
                        ctx: "placesListInHomePage"
                    }
                };

            function $e(e) {
                var t = e.game,
                    n = e.translate,
                    r = t.universeId,
                    a = t.name,
                    e = t.referralUrl,
                    t = t.isPlayable,
                    r = E().createElement(V.Thumbnail2d, {
                        type: V.ThumbnailTypes.gameIcon,
                        size: V.DefaultThumbnailSize,
                        targetId: r,
                        imgClassName: "game-card-thumb",
                        format: V.ThumbnailFormat.jpeg
                    });
                return E().createElement("div", {
                    className: "border-bottom player-interaction-container"
                }, E().createElement("span", {
                    className: "cursor-pointer game-icon"
                }, E().createElement(I.Link, {
                    url: e,
                    className: "game-card-link"
                }, r)), E().createElement("span", {
                    className: "game-info-container"
                }, E().createElement(I.Link, {
                    url: e,
                    className: "game-name"
                }, a), !t && E().createElement(I.Link, {
                    url: e,
                    className: "btn-control-sm game-link"
                }, n(Je))))
            }
            $e.propTypes = {
                game: (r = Dt.n(r))().shape({
                    universeId: r().number,
                    placeId: r().number,
                    name: r().string,
                    playerCount: r().number,
                    isShowSponsoredLabel: r().bool,
                    nativeAdData: r().string,
                    imageUrl: r().string,
                    referralUrl: r().string,
                    isPlayable: r().bool
                }).isRequired,
                translate: r().func.isRequired
            };
            var Ze = $e;

            function Ke(e) {
                var t = e.playerId,
                    e = e.altName;
                return E().createElement("div", {
                    className: "avatar-card-link"
                }, E().createElement(V.Thumbnail2d, {
                    type: V.ThumbnailTypes.avatarHeadshot,
                    size: V.ThumbnailAvatarHeadshotSize.size48,
                    targetId: t,
                    imgClassName: "avatar-card-image",
                    format: V.ThumbnailFormat.png,
                    altName: e
                }))
            }
            Ke.defaultProps = {
                altName: ""
            }, Ke.propTypes = {
                playerId: r().number.isRequired,
                altName: r().string
            };
            var et = Ke;

            function tt(e) {
                var t = e.playerData,
                    o = e.dismissModal,
                    n = e.isPlayable,
                    r = e.translate,
                    e = t.presence,
                    i = e.rootPlaceId,
                    l = e.placeId,
                    s = e.gameId,
                    u = t.id,
                    t = t.nameForDisplay;
                return E().createElement("div", {
                    className: "border-bottom player-info"
                }, E().createElement("span", {
                    className: "player-name"
                }, t), E().createElement(I.Button, {
                    className: "cursor-pointer btn-primary-sm player-action",
                    onClick: function(e) {
                        var t = {
                                rootPlaceId: i,
                                placeId: l
                            },
                            n = f.playGameService.buildPlayGameProperties(i, l, s, u),
                            r = Xe.joinGameInPlacesList,
                            a = Xe.gamePlayIntentInPlacesList,
                            a = {
                                eventName: r.name,
                                ctx: r.ctx,
                                properties: t,
                                gamePlayIntentEventCtx: a.ctx
                            };
                        f.playGameService.launchGame(n, a), o(e)
                    },
                    isDisabled: !n
                }, r(We)))
            }
            tt.propTypes = {
                playerData: r().shape({
                    presence: r().shape({
                        rootPlaceId: r().number,
                        placeId: r().number,
                        gameId: r().string
                    }),
                    id: r().number,
                    nameForDisplay: r().string
                }).isRequired,
                dismissModal: r().func.isRequired,
                isPlayable: r().bool.isRequired,
                translate: r().func.isRequired
            };
            var nt = tt;

            function rt(e) {
                var t = e.friendsData,
                    n = e.friendsInGame,
                    a = e.dismissModal,
                    o = e.isPlayable,
                    i = e.translate,
                    l = {};
                return t.forEach(function(e) {
                    l[e.id] = e
                }), E().createElement("div", {
                    className: "interaction-container"
                }, E().createElement("ul", {
                    className: "interaction-list"
                }, n.map(function(e, t) {
                    var n = e + t,
                        r = l[e],
                        t = r.id,
                        e = r.nameForDisplay;
                    return E().createElement("li", {
                        key: n,
                        className: "interaction-item",
                        "aria-hidden": "true"
                    }, E().createElement("span", {
                        className: "avatar avatar-headshot avatar-headshot-sm player-avatar"
                    }, E().createElement(et, {
                        playerId: t,
                        altName: e
                    })), E().createElement(nt, {
                        playerData: r,
                        dismissModal: a,
                        isPlayable: o,
                        translate: i
                    }))
                })))
            }
            rt.propTypes = {
                friendsData: r().arrayOf(r().shape({
                    presense: r().shape({
                        rootPlaceId: r().number,
                        placeId: r().number,
                        gameId: r().string
                    }),
                    id: r().number,
                    nameForDisplay: r().string
                })).isRequired,
                friendsInGame: r().arrayOf(r().number).isRequired,
                dismissModal: r().func.isRequired,
                isPlayable: r().bool.isRequired,
                translate: r().func.isRequired
            };
            var at = rt;

            function ot(e) {
                var t = e.friendsData,
                    n = e.friendsInGame,
                    r = e.game,
                    a = e.dismissModal,
                    o = e.translate,
                    e = o(Qe);
                return E().createElement("div", {
                    "data-testid": "game-players-player-interaction-modal"
                }, E().createElement(I.Modal.Header, {
                    title: e,
                    onClose: a
                }), E().createElement(Ze, {
                    game: r,
                    translate: o
                }), E().createElement(at, {
                    friendsData: t,
                    friendsInGame: n,
                    dismissModal: a,
                    isPlayable: r.isPlayable,
                    translate: o
                }))
            }

            function it(e) {
                var t = e.id,
                    n = e.children,
                    r = e.gameData,
                    e = e.buildEventProperties;
                return E().createElement(I.Link, {
                    url: je(r.placeId, r.name, e(r, t)),
                    className: "game-card-link",
                    id: r.universeId.toString()
                }, E().createElement(V.Thumbnail2d, {
                    type: V.ThumbnailTypes.gameIcon,
                    size: V.ThumbnailGameIconSize.size150,
                    targetId: r.universeId,
                    containerClass: "game-card-thumb-container",
                    format: V.ThumbnailFormat.jpeg,
                    altName: r.name
                }), E().createElement("div", {
                    className: "game-card-name game-name-title",
                    title: r.name
                }, r.name), n)
            }

            function lt(e) {
                var t = e.totalDownVotes,
                    n = e.totalUpVotes,
                    e = e.playerCount,
                    t = ge.getVotePercentage(n, t),
                    e = ge.getAbbreviatedValue(e);
                return E().createElement("div", {
                    className: "game-card-info",
                    "data-testid": "game-tile-stats"
                }, E().createElement("span", {
                    className: "info-label icon-votes-gray"
                }), t ? E().createElement("span", {
                    className: "info-label vote-percentage-label"
                }, t) : E().createElement("span", {
                    className: "info-label no-vote"
                }), E().createElement("span", {
                    className: "info-label icon-playing-counts-gray"
                }), E().createElement("span", {
                    className: "info-label playing-counts-label"
                }, e))
            }

            function st(e) {
                var t = e.friendData,
                    n = e.gameData,
                    r = e.translate,
                    a = (0, w.useState)(!1),
                    e = a[0],
                    o = a[1];
                if (0 === t.length) throw new Error("friendData should not be empty");
                return E().createElement("div", {
                    className: "game-card-friend-info game-card-info",
                    "data-testid": "game-tile-stats-friends"
                }, E().createElement("div", {
                    className: "info-avatar",
                    style: {
                        width: 22 * (t.slice(0, ft).length - 1) + 32 + "px"
                    }
                }, t.slice(0, ft).map(function(e) {
                    return E().createElement("div", {
                        className: "avatar-card",
                        role: "button",
                        tabIndex: 0,
                        key: e.displayName,
                        onClick: function(e) {
                            e.stopPropagation(), e.preventDefault(), o(!0)
                        },
                        onKeyDown: function(e) {
                            e.code === dt.enter && (e.stopPropagation(), e.preventDefault(), o(!0))
                        }
                    }, E().createElement(V.Thumbnail2d, {
                        type: V.ThumbnailTypes.avatarHeadshot,
                        size: V.ThumbnailAvatarHeadshotSize.size48,
                        targetId: e.id,
                        containerClass: "avatar avatar-headshot avatar-headshot-xs",
                        imgClassName: "avatar-card-image",
                        format: V.ThumbnailFormat.png,
                        altName: e.displayName
                    }))
                })), r && E().createElement("span", {
                    className: "info-label text-overflow",
                    "data-testid": "game-tile-stats-info-label"
                }, t.length > mt ? r(l.LabelPlayingOnePlusUsersWithComma, {
                    username: t[0].displayName,
                    count: t.length - mt
                }) : r(l.LabelPlayingOneUser, {
                    user: t[0].displayName
                })), E().createElement(pt, {
                    friendsDataInGame: t,
                    game: n,
                    show: e,
                    onHide: function(e) {
                        e.stopPropagation(), e.preventDefault(), o(!1)
                    }
                }))
            }
            ot.propTypes = {
                friendsData: r().arrayOf(r().shape({
                    presense: r().shape({
                        rootPlaceId: r().number,
                        placeId: r().number,
                        gameId: r().string
                    }),
                    id: r().number,
                    nameForDisplay: r().string
                })).isRequired,
                friendsInGame: r().arrayOf(r().number).isRequired,
                game: r().shape({
                    universeId: r().number,
                    placeId: r().number,
                    name: r().string,
                    playerCount: r().number,
                    isShowSponsoredLabel: r().bool,
                    nativeAdData: r().string,
                    imageUrl: r().string,
                    referralUrl: r().string,
                    isPlayable: r().bool
                }).isRequired,
                dismissModal: r().func.isRequired,
                translate: r().func.isRequired
            };
            var ut = ot,
                r = {
                    common: ["Common.GameSorts"],
                    feature: "Feature.PlacesList"
                },
                ct = function() {
                    return (ct = Object.assign || function(e) {
                        for (var t, n = 1, r = arguments.length; n < r; n++)
                            for (var a in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
                        return e
                    }).apply(this, arguments)
                },
                dt = a.keyBoardEventCode,
                ft = a.numberOfInGameIcons,
                mt = a.numberOfInGameNames;
            st.defaultProps = {
                translate: void 0
            };
            var pt = (0, t.withTranslations)(function(e) {
                    var t = e.show,
                        n = e.onHide,
                        r = e.friendsDataInGame,
                        a = e.game,
                        e = e.translate;
                    return E().createElement(I.Modal, {
                        show: t,
                        onHide: n,
                        size: "lg"
                    }, E().createElement(ut, {
                        friendsData: r.map(function(e) {
                            return ct(ct({}, e), {
                                nameForDisplay: e.displayName
                            })
                        }),
                        friendsInGame: r.map(function(e) {
                            return e.id
                        }),
                        game: a,
                        dismissModal: n,
                        translate: e
                    }))
                }, r),
                vt = function(e, i, l, s) {
                    return new(l = l || Promise)(function(n, t) {
                        function r(e) {
                            try {
                                o(s.next(e))
                            } catch (e) {
                                t(e)
                            }
                        }

                        function a(e) {
                            try {
                                o(s.throw(e))
                            } catch (e) {
                                t(e)
                            }
                        }

                        function o(e) {
                            var t;
                            e.done ? n(e.value) : ((t = e.value) instanceof l ? t : new l(function(e) {
                                e(t)
                            })).then(r, a)
                        }
                        o((s = s.apply(e, i || [])).next())
                    })
                },
                yt = function(n, r) {
                    var a, o, i, l = {
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
                                for (; l;) try {
                                    if (a = 1, o && (i = 2 & t[0] ? o.return : t[0] ? o.throw || ((i = o.return) && i.call(o), 0) : o.next) && !(i = i.call(o, t[1])).done) return i;
                                    switch (o = 0, i && (t = [2 & t[0], i.value]), t[0]) {
                                        case 0:
                                        case 1:
                                            i = t;
                                            break;
                                        case 4:
                                            return l.label++, {
                                                value: t[1],
                                                done: !1
                                            };
                                        case 5:
                                            l.label++, o = t[1], t = [0];
                                            continue;
                                        case 7:
                                            t = l.ops.pop(), l.trys.pop();
                                            continue;
                                        default:
                                            if (!(i = 0 < (i = l.trys).length && i[i.length - 1]) && (6 === t[0] || 2 === t[0])) {
                                                l = 0;
                                                continue
                                            }
                                            if (3 === t[0] && (!i || t[1] > i[0] && t[1] < i[3])) {
                                                l.label = t[1];
                                                break
                                            }
                                            if (6 === t[0] && l.label < i[1]) {
                                                l.label = i[1], i = t;
                                                break
                                            }
                                            if (i && l.label < i[2]) {
                                                l.label = i[2], l.ops.push(t);
                                                break
                                            }
                                            i[2] && l.ops.pop(), l.trys.pop();
                                            continue
                                    }
                                    t = r.call(n, l)
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
                bt = (0, w.forwardRef)(function(e, t) {
                    var n = e.id,
                        r = e.buildEventProperties,
                        a = e.gameData,
                        e = e.friendData,
                        o = void 0 === e ? [] : e,
                        e = (0, w.useState)(),
                        i = e[0],
                        l = e[1],
                        s = (0, w.useMemo)(function() {
                            return W(o, a.universeId)
                        }, [o, a.universeId]);
                    return (0, w.useEffect)(function() {
                        void 0 === i && 0 < s.length && vt(void 0, void 0, void 0, function() {
                            var t;
                            return yt(this, function(e) {
                                switch (e.label) {
                                    case 0:
                                        return e.trys.push([0, 2, , 3]), [4, L(a.placeId.toString())];
                                    case 1:
                                        return t = e.sent(), l(t), [3, 3];
                                    case 2:
                                        return t = e.sent(), console.error(t), [3, 3];
                                    case 3:
                                        return [2]
                                }
                            })
                        })
                    }, [s, i]), E().createElement("div", {
                        ref: t,
                        className: "grid-item-container game-card-container",
                        "data-testid": "game-tile"
                    }, E().createElement(it, {
                        id: n,
                        buildEventProperties: r,
                        gameData: a
                    }, 0 < s.length && i ? E().createElement(st, {
                        friendData: s,
                        gameData: i
                    }) : E().createElement(lt, {
                        totalUpVotes: a.totalUpVotes,
                        totalDownVotes: a.totalDownVotes,
                        playerCount: a.playerCount
                    })))
                });

            function gt(n, r) {
                var a;
                return void 0 === r && (r = 300), [function() {
                    for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
                    clearTimeout(a), a = setTimeout(function() {
                        n.apply(void 0, e)
                    }, r)
                }, function() {
                    clearTimeout(a)
                }]
            }
            bt.displayName = "GameTile", (r = (0, w.forwardRef)(function(e, t) {
                var n = e.gameData,
                    r = e.buildEventProperties,
                    a = e.translate,
                    o = e.friendData,
                    i = e.tileRef;
                return E().createElement("div", {
                    "data-testid": "game-carousel",
                    ref: t,
                    className: "game-carousel"
                }, n.map(function(e, t) {
                    return E().createElement(bt, {
                        ref: i,
                        key: t,
                        id: t,
                        gameData: e,
                        translate: a,
                        buildEventProperties: r,
                        friendData: o
                    })
                }))
            })).displayName = "GameCarousel";
            var ht = r,
                wt = function() {
                    return (wt = Object.assign || function(e) {
                        for (var t, n = 1, r = arguments.length; n < r; n++)
                            for (var a in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
                        return e
                    }).apply(this, arguments)
                },
                Et = function(a, o, e, i) {
                    function t() {
                        var t, e = [],
                            n = !!(r = a.current) && Fe(r),
                            r = function(e, t) {
                                if (e && t) {
                                    var n = e.clientWidth,
                                        e = e.scrollLeft,
                                        t = Me(t);
                                    return [Math.round(e / t), Math.round((e + n) / t) - 1]
                                }
                            }(a.current, o.current);
                        n && r && (e = ge.calculateImpressedIndexes(s.current, r)), 0 !== e.length && l.current && (t = l.current, n = e.filter(function(e) {
                            return e < t.length
                        }), r = n, void 0 === s.current ? s.current = [r[0], r[r.length - 1]] : (e = (s.current[0] < r[0] ? s.current : r)[0], r = s.current[1] > r[r.length - 1] ? s.current[1] : r[r.length - 1], s.current = [e, r]), n = Le(wt({
                            rootPlaceIds: n.map(function(e) {
                                return t[e].placeId
                            }),
                            universeIds: n.map(function(e) {
                                return t[e].universeId
                            }),
                            absPositions: n
                        }, i)), f.eventStreamService.sendEvent.apply(f.eventStreamService, n))
                    }

                    function n() {
                        c(), window.removeEventListener("scroll", u), window.removeEventListener("resize", u)
                    }
                    var l = (0, w.useRef)(e),
                        s = (0, w.useRef)(void 0),
                        r = gt(function() {
                            t()
                        }),
                        u = r[0],
                        c = r[1];
                    (0, w.useEffect)(function() {
                        return window.addEventListener("scroll", u), window.addEventListener("resize", u), n
                    }, []), (0, w.useEffect)(function() {
                        var e = a.current;
                        return null != e && e.addEventListener("scroll", u),
                            function() {
                                null != e && e.removeEventListener("scroll", u)
                            }
                    }, [a, u]), (0, w.useEffect)(function() {
                        l.current = e, t()
                    }, [e])
                },
                r = {
                    common: [],
                    feature: "Feature.GameDetails"
                },
                It = function(e, i, l, s) {
                    return new(l = l || Promise)(function(n, t) {
                        function r(e) {
                            try {
                                o(s.next(e))
                            } catch (e) {
                                t(e)
                            }
                        }

                        function a(e) {
                            try {
                                o(s.throw(e))
                            } catch (e) {
                                t(e)
                            }
                        }

                        function o(e) {
                            var t;
                            e.done ? n(e.value) : ((t = e.value) instanceof l ? t : new l(function(e) {
                                e(t)
                            })).then(r, a)
                        }
                        o((s = s.apply(e, i || [])).next())
                    })
                },
                Pt = function(n, r) {
                    var a, o, i, l = {
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
                                for (; l;) try {
                                    if (a = 1, o && (i = 2 & t[0] ? o.return : t[0] ? o.throw || ((i = o.return) && i.call(o), 0) : o.next) && !(i = i.call(o, t[1])).done) return i;
                                    switch (o = 0, i && (t = [2 & t[0], i.value]), t[0]) {
                                        case 0:
                                        case 1:
                                            i = t;
                                            break;
                                        case 4:
                                            return l.label++, {
                                                value: t[1],
                                                done: !1
                                            };
                                        case 5:
                                            l.label++, o = t[1], t = [0];
                                            continue;
                                        case 7:
                                            t = l.ops.pop(), l.trys.pop();
                                            continue;
                                        default:
                                            if (!(i = 0 < (i = l.trys).length && i[i.length - 1]) && (6 === t[0] || 2 === t[0])) {
                                                l = 0;
                                                continue
                                            }
                                            if (3 === t[0] && (!i || t[1] > i[0] && t[1] < i[3])) {
                                                l.label = t[1];
                                                break
                                            }
                                            if (6 === t[0] && l.label < i[1]) {
                                                l.label = i[1], i = t;
                                                break
                                            }
                                            if (i && l.label < i[2]) {
                                                l.label = i[2], l.ops.push(t);
                                                break
                                            }
                                            i[2] && l.ops.pop(), l.trys.pop();
                                            continue
                                    }
                                    t = r.call(n, l)
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
                St = (0, t.withTranslations)(function(e) {
                    var t = e.translate,
                        n = (0, w.useRef)(null),
                        r = (0, w.useRef)(null),
                        a = (0, w.useState)([]),
                        o = a[0],
                        i = a[1],
                        e = (me() || {}).universeId,
                        l = void 0 === e ? "" : e,
                        a = (0, w.useState)(!1),
                        e = a[0],
                        s = a[1];
                    Et(n, r, o, {
                        sortPos: 0,
                        page: xe
                    });
                    return (0, w.useEffect)(function() {
                        It(void 0, void 0, void 0, function() {
                            var t;
                            return Pt(this, function(e) {
                                switch (e.label) {
                                    case 0:
                                        s(!0), e.label = 1;
                                    case 1:
                                        return e.trys.push([1, 3, , 4]), [4, S(l, He.maxTilesPerCarouselPage)];
                                    case 2:
                                        return t = e.sent().games, i(t), [3, 4];
                                    case 3:
                                        return t = e.sent(), console.error(t), [3, 4];
                                    case 4:
                                        return s(!1), [2]
                                }
                            })
                        })
                    }, []), E().createElement(E().Fragment, null, e ? E().createElement(I.Loading, null) : null, 0 < o.length && E().createElement(E().Fragment, null, E().createElement("h2", null, t(m.HeadingRecommendedGames)), E().createElement(ht, {
                        ref: n,
                        tileRef: r,
                        gameData: o,
                        buildEventProperties: function(e, t) {
                            return {
                                placeId: e.placeId,
                                universeId: e.universeId,
                                isAd: e.isSponsored,
                                nativeAdData: e.nativeAdData,
                                position: t,
                                numberOfLoadedTiles: (o || []).length,
                                page: xe
                            }
                        },
                        translate: t
                    })))
                }, r),
                xt = u.SocialLinksJumbotron.SocialLinkJumbotronType,
                Lt = (0, t.withTranslations)(function(e) {
                    var t = e.translate,
                        n = me() || {},
                        e = n.universeId,
                        e = void 0 === e ? "" : e,
                        n = n.placeId,
                        n = void 0 === n ? "" : n;
                    return E().createElement(E().Fragment, null, E().createElement(Be, {
                        universeId: e,
                        placeId: n,
                        translate: t
                    }), E().createElement(u.SocialLinksJumbotron, {
                        type: xt.Game,
                        targetId: e
                    }), E().createElement(u.GameBadgesList, {
                        universeId: e
                    }), E().createElement(St, null))
                }, n),
                Nt = "game-details-play-button-container",
                Tt = function() {
                    return document.getElementById(Nt)
                },
                kt = "game-details-about-tab-container",
                Ct = function() {
                    return document.getElementById(kt)
                };
            (0, c.ready)(function() {
                j() && (e = void 0 === (r = (a = me()).universeId) ? "" : r, t = void 0 === (o = a.placeId) ? "" : o, (0, i.render)(E().createElement(de, {
                    universeId: e,
                    placeId: t,
                    delay: H.delay
                }), j())), Tt() && (0, i.render)(E().createElement(Ue, null), Tt()), Ct() && (0, i.render)(E().createElement(Lt, null), Ct());
                var e, t, n = me(),
                    r = n.experienceInviteLinkId,
                    a = void 0 === r ? "" : r,
                    o = n.experienceInviteStatus,
                    r = void 0 === o ? "" : o;
                a && (r === C.INVITER_NOT_IN_EXPERIENCE || r === C.EXPIRED) && R() && (e = void 0 === (o = (n = me()).universeId) ? "" : o, t = void 0 === (n = n.placeId) ? "" : n, (0, i.render)(E().createElement(A, {
                    linkId: a,
                    linkStatus: r,
                    placeId: t,
                    universeId: e
                }), R()))
            })
        }()
}();
//# sourceMappingURL=https://js.rbxcdn.com/6046c8d516c9cc14e885-gameDetails.bundle.min.js.map

/* Bundle detector */
window.Roblox && window.Roblox.BundleDetector && window.Roblox.BundleDetector.bundleDetected("GameDetails");