! function() {
    var r = {
            986: function(e, t, r) {
                var o = {
                    "./socialLinksConstants.js": 647
                };

                function i(e) {
                    e = n(e);
                    return r(e)
                }

                function n(e) {
                    if (r.o(o, e)) return o[e];
                    e = new Error("Cannot find module '" + e + "'");
                    throw e.code = "MODULE_NOT_FOUND", e
                }
                i.keys = function() {
                    return Object.keys(o)
                }, i.resolve = n, (e.exports = i).id = 986
            },
            50: function(e, t, r) {
                var o = {
                    "./socialLinksService.js": 312
                };

                function i(e) {
                    e = n(e);
                    return r(e)
                }

                function n(e) {
                    if (r.o(o, e)) return o[e];
                    e = new Error("Cannot find module '" + e + "'");
                    throw e.code = "MODULE_NOT_FOUND", e
                }
                i.keys = function() {
                    return Object.keys(o)
                }, i.resolve = n, (e.exports = i).id = 50
            },
            726: function(e) {
                function n(e) {
                    return e.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase()
                }

                function a(e) {
                    return e.split("/").pop().replace(".html", "")
                }
                var t = {
                    importFilesUnderPath: function(e) {
                        e.keys().forEach(e)
                    },
                    templateCacheGenerator: function(e, t, o, i) {
                        return e.module(t, []).run(["$templateCache", function(r) {
                            o && o.keys().forEach(function(e) {
                                var t = n(a(e));
                                r.put(t, o(e))
                            }), i && i.keys().forEach(function(e) {
                                var t = n(a(e));
                                r.put(t, i(e).replace(/<\/?script[^>]*>/gi, ""))
                            })
                        }])
                    }
                };
                e.exports = t
            },
            647: function(e, t, r) {
                "use strict";
                r.r(t), r.d(t, {
                    default: function() {
                        return o
                    }
                });
                t = Roblox, r = r(549), t = {
                    urlBase: {
                        getGameSocialLinks: t.EnvironmentUrls.gamesApi,
                        getGroupSocialLinks: t.EnvironmentUrls.groupsApi,
                        setGameSocialLinks: t.EnvironmentUrls.developApi,
                        setGroupSocialLinks: t.EnvironmentUrls.groupsApi,
                        getGameSocialLinksMetadata: t.EnvironmentUrls.developApi
                    },
                    urlRegexes: {
                        facebook: /^((http|https):\/\/)?(www\.)?facebook\.com\/(?:(?:\w)*#!\/)?(?:pages\/)?(?:[?\w\-]*\/)?(?:profile\.php\?id=(?=\d.*))?([\w\-]*)?$/,
                        twitter: /^(((http|https):\/\/)?(www\.)?twitter\.com\/|@)([a-zA-Z0-9_]{1,15})$/,
                        youtube: /^((http|https):\/\/)?(www\.)?youtube\.com\/(?!logout(\/|$))[a-zA-Z0-9\-/_]+$/,
                        twitch: /^((http|https):\/\/)?(www\.)?twitch\.tv\/[a-zA-Z0-9\-/_]+$/,
                        discord: /^((http|https):\/\/)?(www\.)?discord\.(gg|io|me|li)\/[a-zA-Z0-9\-_/]+$/,
                        robloxGroup: /^(?:https?):\/\/(?:[a-z0-9-]{2,}\.)*(?:roblox(labs)?\.com\/)(?:[Gg]roups\/[Gg]roup\.aspx\?gid=|[Mm]y\/[Gg]roups\.aspx\?gid=|groups\/)([\d]+)/,
                        amazon: /^((https):\/\/)?(www\.)?amazon\.com\/stores\/page\/[a-zA-Z0-9\-\/_]+(\?(&?[a-zA-Z0-9\-_/]+=?[a-zA-Z0-9\-_/]*)+)*$/,
                        guilded: /^((http|https):\/\/)?(www\.)?guilded\.gg\/((profile|teams)\/)?([a-zA-Z0-9-]{3,30})$/
                    },
                    targetTypes: {
                        game: "game",
                        group: "group"
                    },
                    socialLinkDisplayTypes: {
                        icon: "icon",
                        card: "card"
                    },
                    socialMediaTypes: {
                        facebook: "Facebook",
                        twitter: "Twitter",
                        youtube: "YouTube",
                        twitch: "Twitch",
                        discord: "Discord",
                        robloxGroup: "RobloxGroup",
                        amazon: "Amazon",
                        guilded: "Guilded"
                    },
                    socialMediaNames: {
                        Facebook: "Facebook",
                        Twitter: "Twitter",
                        YouTube: "YouTube",
                        Twitch: "Twitch",
                        Discord: "Discord",
                        Amazon: "Amazon",
                        RobloxGroup: "Roblox Group",
                        Guilded: "Guilded"
                    },
                    availableSocialMediaTypes: {
                        game: ["facebook", "twitter", "youtube", "twitch", "discord", "robloxGroup", "amazon", "guilded"],
                        group: ["facebook", "twitter", "youtube", "twitch", "discord", "guilded"],
                        user: ["facebook", "twitter", "youtube", "twitch", "guilded"]
                    },
                    availableIconTypes: ["Facebook", "Twitter", "YouTube", "Twitch", "Discord", "RobloxGroup", "GitHub", "Amazon", "Guilded"],
                    eventSteamEventNames: {
                        click: "socialLinkClickEvent"
                    },
                    layout: {
                        maxUrlLength: 256,
                        maxNameLength: 70
                    },
                    errorCodes: {
                        internal: {
                            unknownError: 0,
                            invalidTarget: 1,
                            featureDisabled: 2,
                            invalidViewer: 3,
                            invalidTitle: 4,
                            invalidUrl: 5,
                            invalidType: 6,
                            unauthorized: 7,
                            socialLinkRemoved: 8,
                            noGroupPermission: 9,
                            noMetadata: 10
                        },
                        getGroupSocialLinks: {
                            1: 1,
                            11: 2,
                            13: 3
                        },
                        getGameSocialLinks: {
                            2: 2,
                            3: 3,
                            10: 10
                        },
                        setGameSocialLinks: {
                            1: 7,
                            2: 4,
                            3: 4,
                            4: 5,
                            7: 8,
                            8: 6,
                            11: 4,
                            18: 9
                        },
                        setGroupSocialLinks: {
                            1: 1,
                            2: 7,
                            3: 4,
                            4: 4,
                            5: 5,
                            6: 5,
                            8: 8,
                            9: 6,
                            12: 4,
                            16: 6
                        }
                    },
                    translations: {
                        socialLinkoffPlatformModalTitle: "Message.SocialLinkoffPlatformModalTitle",
                        socialLinkoffPlatformModalBody: "Message.SocialLinkoffPlatformModalBody",
                        socialLinkoffPlatformModalContinueButtonText: "Message.SocialLinkoffPlatformModalContinueButtonText",
                        socialLinkoffPlatformModalCancelButtonText: "Message.SocialLinkoffPlatformModalCancelButtonText",
                        socialLinkRemoved: "Message.SocialLinkRemoved",
                        socialLinkSaved: "Message.SocialLinkSaved",
                        socialLinkInvalidError: "Message.SocialLinkInvalidError",
                        socialLinksEditDisabledError: "Message.SocialLinksEditDisabledError",
                        unauthorizedError: "Message.UnauthorizedError",
                        titleModeratedError: "Message.TitleModeratedError",
                        unknownError: "Message.UnknownError",
                        socialLinkTypeLimitError: "Message.SocialLinkTypeLimitError",
                        urlSocialMediaTypeMismatchError: "Message.UrlSocialMediaTypeMismatchError",
                        urlEmptyError: "Message.UrlEmptyError",
                        titleEmptyError: "Message.TitleEmptyError",
                        noGroupPermission: "Message.NoGroupPermission"
                    }
                };
                r.Z.constant("socialLinksConstants", t);
                var o = t
            },
            312: function(e, t, r) {
                "use strict";
                r.r(t), r.d(t, {
                    default: function() {
                        return i
                    }
                });
                var f = HeaderScripts,
                    r = r(549);

                function n(t, e) {
                    var r, o = Object.keys(t);
                    return Object.getOwnPropertySymbols && (r = Object.getOwnPropertySymbols(t), e && (r = r.filter(function(e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable
                    })), o.push.apply(o, r)), o
                }

                function g(o) {
                    for (var e = 1; e < arguments.length; e++) {
                        var i = null != arguments[e] ? arguments[e] : {};
                        e % 2 ? n(Object(i), !0).forEach(function(e) {
                            var t, r;
                            t = o, e = i[r = e], r in t ? Object.defineProperty(t, r, {
                                value: e,
                                enumerable: !0,
                                configurable: !0,
                                writable: !0
                            }) : t[r] = e
                        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(o, Object.getOwnPropertyDescriptors(i)) : n(Object(i)).forEach(function(e) {
                            Object.defineProperty(o, e, Object.getOwnPropertyDescriptor(i, e))
                        })
                    }
                    return o
                }
                var k = {
                    AmazonStoreLinksEnabledForUser: !(o.$inject = ["$q", "httpService", "socialLinksConstants", "$window"])
                };

                function o(t, c, l, e) {
                    function u(e, t) {
                        return (e = c.getApiErrorCodes(e)[0] || l.errorCodes.internal.unknownError) !== l.errorCodes.internal.unknownError && t.hasOwnProperty(e) ? t[e] : e
                    }

                    function d(i) {
                        return t(function(t, r) {
                            var e, o;
                            i <= 0 ? r(l.errorCodes.internal.invalidTarget) : f.authenticatedUser.isAuthenticated && !f.authenticatedUser.isUnder13 ? (e = {
                                url: "".concat(l.urlBase.getGameSocialLinksMetadata, "/v1/universes/").concat(i, "/social-links/metadata")
                            }, o = l.errorCodes.getGameSocialLinks, c.httpGet(e).then(function(e) {
                                t(e)
                            }, function(e) {
                                r(u(e, o))
                            })) : r(l.errorCodes.internal.invalidViewer)
                        })
                    }
                    var p = {};
                    return {
                        getSocialLinks: function(n, a, e) {
                            var s = 2 < arguments.length && void 0 !== e && e;
                            return t(function(r, t) {
                                if (a <= 0) t(l.errorCodes.internal.invalidTarget);
                                else if (f.authenticatedUser.isAuthenticated && !f.authenticatedUser.isUnder13) {
                                    var o = "".concat(n || "", ":").concat(a);
                                    if (p[o]) r(p[o]);
                                    else {
                                        var i, e = {};
                                        switch (n) {
                                            case l.targetTypes.game:
                                                e.url = "".concat(l.urlBase.getGameSocialLinks, "/v1/games/").concat(a, "/social-links/list"), i = l.errorCodes.getGameSocialLinks;
                                                break;
                                            case l.targetTypes.group:
                                                e.url = "".concat(l.urlBase.getGroupSocialLinks, "/v1/groups/").concat(a, "/social-links"), i = l.errorCodes.getGroupSocialLinks;
                                                break;
                                            default:
                                                return void t(l.errorCodes.invalidTarget)
                                        }
                                        c.httpGet(e).then(function(t) {
                                            var e;
                                            t.data.forEach(function(e) {
                                                e.target = {
                                                    id: a,
                                                    type: n
                                                }
                                            }), s ? d(a).then(function() {
                                                var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : k,
                                                    e = g(g({}, t), {}, {
                                                        socialLinksMetadata: e
                                                    });
                                                p[o] = e, r(e)
                                            }) : (e = g(g({}, t), {}, {
                                                socialLinksMetadata: k
                                            }), p[o] = e, r(e))
                                        }, function(e) {
                                            t(u(e, i))
                                        })
                                    }
                                } else t(l.errorCodes.internal.invalidViewer)
                            })
                        },
                        getSocialLinksMetadata: d,
                        saveSocialLink: function(n) {
                            return t(function(t, r) {
                                var o, e = {},
                                    i = {
                                        type: n.type,
                                        url: n.url,
                                        title: n.title
                                    };
                                switch (n.target.type) {
                                    case l.targetTypes.game:
                                        e.url = "".concat(l.urlBase.setGameSocialLinks, "/v1/universes/").concat(n.target.id, "/social-links"), o = l.errorCodes.setGameSocialLinks;
                                        break;
                                    case l.targetTypes.group:
                                        e.url = "".concat(l.urlBase.setGroupSocialLinks, "/v1/groups/").concat(n.target.id, "/social-links"), o = l.errorCodes.setGroupSocialLinks;
                                        break;
                                    default:
                                        return void r(l.errorCodes.invalidTarget)
                                }
                                n.id ? (e.url += "/".concat(n.id), c.httpPatch(e, i).then(t, function(e) {
                                    r(u(e, o))
                                })) : c.httpPost(e, i).then(function(e) {
                                    n.id = e.id || e.Id, t()
                                }, function(e) {
                                    r(u(e, o))
                                })
                            })
                        },
                        deleteSocialLink: function(i) {
                            return t(function(e, t) {
                                var r, o = {};
                                switch (i.target.type) {
                                    case l.targetTypes.game:
                                        o.url = "".concat(l.urlBase.setGameSocialLinks, "/v1/universes/").concat(i.target.id, "/social-links"), r = l.errorCodes.setGameSocialLinks;
                                        break;
                                    case l.targetTypes.group:
                                        o.url = "".concat(l.urlBase.setGroupSocialLinks, "/v1/groups/").concat(i.target.id, "/social-links"), r = l.errorCodes.setGroupSocialLinks;
                                        break;
                                    default:
                                        return void t(l.errorCodes.invalidTarget)
                                }
                                o.url += "/".concat(i.id), c.httpDelete(o).then(e, function(e) {
                                    t(u(e, r))
                                })
                            })
                        }
                    }
                }
                r.Z.factory("socialLinksService", o);
                var i = o
            },
            549: function(e, t, r) {
                "use strict";
                r.d(t, {
                    Z: function() {
                        return o
                    }
                });
                var t = angular,
                    o = r.n(t)().module("socialLinksCommon", ["robloxApp"])
            }
        },
        o = {};

    function i(e) {
        if (o[e]) return o[e].exports;
        var t = o[e] = {
            exports: {}
        };
        return r[e](t, t.exports, i), t.exports
    }
    i.n = function(e) {
            var t = e && e.__esModule ? function() {
                return e.default
            } : function() {
                return e
            };
            return i.d(t, {
                a: t
            }), t
        }, i.d = function(e, t) {
            for (var r in t) i.o(t, r) && !i.o(e, r) && Object.defineProperty(e, r, {
                enumerable: !0,
                get: t[r]
            })
        }, i.o = function(e, t) {
            return Object.prototype.hasOwnProperty.call(e, t)
        }, i.r = function(e) {
            "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
                value: "Module"
            }), Object.defineProperty(e, "__esModule", {
                value: !0
            })
        },
        function() {
            "use strict";
            var e = i(726);
            i(549), (0, e.importFilesUnderPath)(i(986)), (0, e.importFilesUnderPath)(i(50))
        }()
}();
//# sourceMappingURL=https://js.rbxcdn.com/38c4db9f9cc38824c032-socialLinksCommon.bundle.min.js.map

! function() {
    var t = {
            361: function(n, e, t) {
                var o = {
                    "./socialLinkCard.html": 803,
                    "./socialLinkIcon.html": 129,
                    "./socialLinkIconList.html": 627,
                    "./socialLinksContainer.html": 343
                };

                function i(n) {
                    n = a(n);
                    return t(n)
                }

                function a(n) {
                    if (t.o(o, n)) return o[n];
                    n = new Error("Cannot find module '" + n + "'");
                    throw n.code = "MODULE_NOT_FOUND", n
                }
                i.keys = function() {
                    return Object.keys(o)
                }, i.resolve = a, (n.exports = i).id = 361
            },
            41: function(n, e, t) {
                var o = {
                    "./socialLinkCardComponent.js": 763,
                    "./socialLinkIconComponent.js": 178,
                    "./socialLinkIconListComponent.js": 236,
                    "./socialLinksContainerComponent.js": 810
                };

                function i(n) {
                    n = a(n);
                    return t(n)
                }

                function a(n) {
                    if (t.o(o, n)) return o[n];
                    n = new Error("Cannot find module '" + n + "'");
                    throw n.code = "MODULE_NOT_FOUND", n
                }
                i.keys = function() {
                    return Object.keys(o)
                }, i.resolve = a, (n.exports = i).id = 41
            },
            710: function(n, e, t) {
                var o = {
                    "./socialLinkController.js": 371,
                    "./socialLinkIconListController.js": 201,
                    "./socialLinksContainerController.js": 524
                };

                function i(n) {
                    n = a(n);
                    return t(n)
                }

                function a(n) {
                    if (t.o(o, n)) return o[n];
                    n = new Error("Cannot find module '" + n + "'");
                    throw n.code = "MODULE_NOT_FOUND", n
                }
                i.keys = function() {
                    return Object.keys(o)
                }, i.resolve = a, (n.exports = i).id = 710
            },
            726: function(n) {
                function a(n) {
                    return n.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase()
                }

                function l(n) {
                    return n.split("/").pop().replace(".html", "")
                }
                var e = {
                    importFilesUnderPath: function(n) {
                        n.keys().forEach(n)
                    },
                    templateCacheGenerator: function(n, e, o, i) {
                        return n.module(e, []).run(["$templateCache", function(t) {
                            o && o.keys().forEach(function(n) {
                                var e = a(l(n));
                                t.put(e, o(n))
                            }), i && i.keys().forEach(function(n) {
                                var e = a(l(n));
                                t.put(e, i(n).replace(/<\/?script[^>]*>/gi, ""))
                            })
                        }])
                    }
                };
                n.exports = e
            },
            763: function(n, e, t) {
                "use strict";
                t.r(e);
                var o = {
                    templateUrl: "social-link-card",
                    bindings: {
                        url: "<",
                        title: "<",
                        type: "<",
                        target: "<",
                        displayType: "<"
                    },
                    controller: "socialLinkController"
                };
                t(438).Z.component("socialLinkCard", o), e.default = o
            },
            178: function(n, e, t) {
                "use strict";
                t.r(e);
                var o = {
                    templateUrl: "social-link-icon",
                    bindings: {
                        url: "<",
                        type: "<",
                        target: "<",
                        displayType: "<"
                    },
                    controller: "socialLinkController"
                };
                t(438).Z.component("socialLinkIcon", o), e.default = o
            },
            236: function(n, e, t) {
                "use strict";
                t.r(e);
                var o = {
                    templateUrl: "social-link-icon-list",
                    bindings: {
                        targetType: "@",
                        targetId: "<"
                    },
                    controller: "socialLinkIconListController"
                };
                t(438).Z.component("socialLinkIconList", o), e.default = o
            },
            810: function(n, e, t) {
                "use strict";
                t.r(e);
                var o = {
                    templateUrl: "social-links-container",
                    bindings: {
                        targetType: "@",
                        targetId: "<"
                    },
                    controller: "socialLinksContainerController"
                };
                t(438).Z.component("socialLinksContainer", o), e.default = o
            },
            371: function(n, e, t) {
                "use strict";
                t.r(e);
                var o = t(438),
                    a = t(792);

                function i(e, n, t, o) {
                    var i = this;
                    i.socialMediaTypes = e.socialMediaTypes, i.socialLinkClick = function() {
                        var n = {
                            assignmentId: i.target.id,
                            assignmentType: i.target.type,
                            socialLinkType: i.type,
                            socialLinkUrl: i.url,
                            socialLinkDisplayType: i.displayType
                        };
                        a.EventStream && a.EventStream.SendEvent && a.EventStream.SendEvent(e.eventSteamEventNames.click, i.target.type, n)
                    }, i.socialLinkOffPlatformClick = function() {
                        n.open({
                            titleText: o.get(e.translations.socialLinkoffPlatformModalTitle),
                            bodyText: o.get(e.translations.socialLinkoffPlatformModalBody, {
                                lineBreak: "\n\n"
                            }),
                            actionButtonShow: !0,
                            actionButtonText: o.get(e.translations.socialLinkoffPlatformModalContinueButtonText),
                            neutralButtonText: o.get(e.translations.socialLinkoffPlatformModalCancelButtonText),
                            actionButtonClass: "btn-primary-md"
                        }).result.then(function() {
                            i.socialLinkClick(), t.open(i.url, "_blank")
                        }, angular.noop)
                    }
                }
                i.$inject = ["socialLinksConstants", "modalService", "$window", "languageResource"], o.Z.controller("socialLinkController", i), e.default = i
            },
            201: function(n, e, t) {
                "use strict";
                t.r(e);
                t = t(438);

                function o(e, n) {
                    function t() {
                        o.socialLinks = [], o.socialLinkDisplayTypes = e.socialLinkDisplayTypes, n.getSocialLinks(o.targetType, o.targetId, !1).then(function(n) {
                            n = n.data || [];
                            o.socialLinks = n.filter(function(n) {
                                return 0 <= e.availableIconTypes.indexOf(n.type)
                            })
                        }).catch(function(n) {
                            switch (n) {
                                case e.errorCodes.internal.featureDisabled:
                                case e.errorCodes.internal.invalidViewer:
                            }
                        })
                    }
                    var o = this;
                    o.$onInit = t, o.$onChanges = t
                }
                o.$inject = ["socialLinksConstants", "socialLinksService"], t.Z.controller("socialLinkIconListController", o), e.default = o
            },
            524: function(n, e, t) {
                "use strict";
                t.r(e);
                t = t(438);

                function o(e, t) {
                    function n() {
                        var n = o.targetType + ":" + o.targetId;
                        i !== n && (i = n, o.socialLinks = [], o.socialLinkDisplayTypes = e.socialLinkDisplayTypes, t.getSocialLinks(o.targetType, o.targetId, !1).then(function() {
                            var n = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {};
                            o.socialLinks = n.data || []
                        }).catch(function(n) {
                            switch (n) {
                                case e.errorCodes.internal.featureDisabled:
                                case e.errorCodes.internal.invalidViewer:
                            }
                        }))
                    }
                    var o = this,
                        i = "";
                    o.$onInit = n, o.$onChanges = n
                }
                o.$inject = ["socialLinksConstants", "socialLinksService"], t.Z.controller("socialLinksContainerController", o), e.default = o
            },
            438: function(n, e, t) {
                "use strict";
                var o = t(792),
                    t = o.Lang.PromotedChannelsResources || {},
                    i = {
                        "Message.SocialLinkoffPlatformModalTitle": t["Message.SocialLinkoffPlatformModalTitle"] || "You are leaving Roblox",
                        "Message.SocialLinkoffPlatformModalBody": t["Message.SocialLinkoffPlatformModalBody"] || "Heads up, Robloxian – by clicking “continue,” you will be redirected to a retail website that is not owned or operated by Roblox. They may have different terms and privacy policies.{lineBreak} Please note that you need to be over 18 to purchase products online. We hope to see you again soon!",
                        "Message.SocialLinkoffPlatformModalContinueButtonText": t["Message.SocialLinkoffPlatformModalContinueButtonText"] || "Continue",
                        "Message.SocialLinkoffPlatformModalCancelButtonText": t["Message.SocialLinkoffPlatformModalCancelButtonText"] || "Cancel"
                    },
                    t = angular.module("socialLinksJumbotron", ["robloxApp", "socialLinksCommon", "socialLinksJumbotronHtmlTemplateApp", "modal"]).config(["languageResourceProvider", function(n) {
                        n.setLanguageKeysFromFile(i), o.Lang.PromotedChannelsResources && n.setLanguageKeysFromFile(o.Lang.PromotedChannelsResources)
                    }]);
                e.Z = t
            },
            145: function(n, e, t) {
                var o;

                function c(n) {
                    return (c = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(n) {
                        return typeof n
                    } : function(n) {
                        return n && "function" == typeof Symbol && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : typeof n
                    })(n)
                }
                /*!
                  Copyright (c) 2017 Jed Watson.
                  Licensed under the MIT License (MIT), see
                  http://jedwatson.github.io/classnames
                */
                ! function() {
                    "use strict";
                    var l = {}.hasOwnProperty;

                    function r() {
                        for (var n = [], e = 0; e < arguments.length; e++) {
                            var t = arguments[e];
                            if (t) {
                                var o = c(t);
                                if ("string" === o || "number" === o) n.push(t);
                                else if (Array.isArray(t) && t.length) {
                                    var i = r.apply(null, t);
                                    i && n.push(i)
                                } else if ("object" === o)
                                    for (var a in t) l.call(t, a) && t[a] && n.push(a)
                            }
                        }
                        return n.join(" ")
                    }
                    n.exports ? (r.default = r, n.exports = r) : "object" === c(t.amdO) && t.amdO ? void 0 === (o = function() {
                        return r
                    }.apply(e, [])) || (n.exports = o) : window.classNames = r
                }()
            },
            803: function(n) {
                n.exports = '<div id="social-link-card"> <div ng-if="$ctrl.type === $ctrl.socialMediaTypes.amazon" class="col-xs-12 col-md-4 col-sm-6"> <span class="social-link" title="{{ $ctrl.title }}" ng-click="$ctrl.socialLinkOffPlatformClick()" context-menu="$ctrl.socialLinkOffPlatformClick()"> <div class="medallion border"> <div class="contents"> <span class="type-img {{ $ctrl.type }}"></span> <div class="title-wrapper"> <span class="title" ng-bind="$ctrl.title"></span> </div> </div> </div> </span> </div> <div ng-if="$ctrl.type !== $ctrl.socialMediaTypes.amazon" class="col-xs-12 col-md-4 col-sm-6"> <a class="social-link" ng-href="{{ $ctrl.url }}" target="_blank" title="{{ $ctrl.title }}" ng-click="$ctrl.socialLinkClick()" context-menu="$ctrl.socialLinkClick()"> <div class="medallion border"> <div class="contents"> <span class="type-img {{ $ctrl.type }}"></span> <div class="title-wrapper"> <span class="title" ng-bind="$ctrl.title"></span> </div> </div> </div> </a> </div> </div>'
            },
            129: function(n) {
                n.exports = '<div id="social-link-icon"> <a ng-href="{{ $ctrl.url }}" target="_blank" title="{{ $ctrl.type }}" ng-click="$ctrl.socialLinkClick()" context-menu="$ctrl.socialLinkClick()"> <span class="social-link-icon {{ $ctrl.type }}"></span> </a> </div>'
            },
            627: function(n) {
                n.exports = '<div id="social-link-icon-list"> <ul ng-if="$ctrl.socialLinks.length > 0"> <li ng-repeat="socialLink in $ctrl.socialLinks"> <social-link-icon url="socialLink.url" type="socialLink.type" target="socialLink.target" display-type="$ctrl.socialLinkDisplayTypes.icon"></social-link-icon> </li> </ul> </div>'
            },
            343: function(n) {
                n.exports = '<div id="social-links-container"> <div class="stack social-links" ng-if="$ctrl.socialLinks.length > 0"> <div class="container-header"> <h2 ng-bind="\'HeadingSocialLinks\' | translate"></h2> </div> <div class="section-content remove-panel"> <social-link-card ng-repeat="socialLink in $ctrl.socialLinks" url="socialLink.url" title="socialLink.title" type="socialLink.type" target="socialLink.target" display-type="$ctrl.socialLinkDisplayTypes.card"></social-link-card> </div> </div> </div>'
            },
            792: function(n) {
                "use strict";
                n.exports = Roblox
            }
        },
        o = {};

    function x(n) {
        if (o[n]) return o[n].exports;
        var e = o[n] = {
            exports: {}
        };
        return t[n](e, e.exports, x), e.exports
    }
    x.amdO = {}, x.n = function(n) {
            var e = n && n.__esModule ? function() {
                return n.default
            } : function() {
                return n
            };
            return x.d(e, {
                a: e
            }), e
        }, x.d = function(n, e) {
            for (var t in e) x.o(e, t) && !x.o(n, t) && Object.defineProperty(n, t, {
                enumerable: !0,
                get: e[t]
            })
        }, x.o = function(n, e) {
            return Object.prototype.hasOwnProperty.call(n, e)
        }, x.r = function(n) {
            "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(n, Symbol.toStringTag, {
                value: "Module"
            }), Object.defineProperty(n, "__esModule", {
                value: !0
            })
        },
        function() {
            "use strict";
            var n, e = angular,
                t = x.n(e),
                o = x(726),
                l = React,
                r = x.n(l),
                i = x(145),
                c = x.n(i),
                s = HeaderScripts,
                u = CoreRobloxUtilities,
                f = ReactStyleGuide,
                a = ReactUtilities,
                d = CoreUtilities,
                e = x(792);
            (w = w || {}).Game = "Game", (i = n = n || {}).Facebook = "Facebook", i.Twitter = "Twitter", i.Youtube = "YouTube", i.Twitch = "Twitch", i.Discord = "Discord", i.RobloxGroup = "RobloxGroup", i.Amazon = "Amazon", i.Guilded = "Guilded";
            var p = e.EnvironmentUrls.gamesApi,
                i = {
                    getGameSocialLinks: function(n) {
                        return {
                            url: p + "/v1/games/" + n + "/social-links/list",
                            withCredentials: !0
                        }
                    }
                },
                m = {
                    socialLinksTranslationMap: {
                        sectionHeader: "HeadingSocialLinks",
                        modalHeader: "Message.SocialLinkoffPlatformModalTitle",
                        modalBody: "Message.SocialLinkoffPlatformModalBody",
                        modalConfirm: "Message.SocialLinkoffPlatformModalContinueButtonText",
                        modalCancel: "Message.SocialLinkoffPlatformModalCancelButtonText"
                    },
                    iconMap: ((e = {})[n.Amazon] = "icon-social-media-amazon", e[n.Discord] = "icon-social-media-discord", e[n.Facebook] = "icon-social-media-facebook", e[n.RobloxGroup] = "icon-social-media-roblox", e[n.Twitch] = "icon-social-media-twitch", e[n.Twitter] = "icon-social-media-twitter", e[n.Youtube] = "icon-social-media-youtube", e[n.Guilded] = "icon-social-media-guilded", e),
                    url: i
                },
                k = function(n, l, r, c) {
                    return new(r = r || Promise)(function(t, e) {
                        function o(n) {
                            try {
                                a(c.next(n))
                            } catch (n) {
                                e(n)
                            }
                        }

                        function i(n) {
                            try {
                                a(c.throw(n))
                            } catch (n) {
                                e(n)
                            }
                        }

                        function a(n) {
                            var e;
                            n.done ? t(n.value) : ((e = n.value) instanceof r ? e : new r(function(n) {
                                n(e)
                            })).then(o, i)
                        }
                        a((c = c.apply(n, l || [])).next())
                    })
                },
                y = function(t, o) {
                    var i, a, l, r = {
                            label: 0,
                            sent: function() {
                                if (1 & l[0]) throw l[1];
                                return l[1]
                            },
                            trys: [],
                            ops: []
                        },
                        n = {
                            next: e(0),
                            throw: e(1),
                            return: e(2)
                        };
                    return "function" == typeof Symbol && (n[Symbol.iterator] = function() {
                        return this
                    }), n;

                    function e(e) {
                        return function(n) {
                            return function(e) {
                                if (i) throw new TypeError("Generator is already executing.");
                                for (; r;) try {
                                    if (i = 1, a && (l = 2 & e[0] ? a.return : e[0] ? a.throw || ((l = a.return) && l.call(a), 0) : a.next) && !(l = l.call(a, e[1])).done) return l;
                                    switch (a = 0, l && (e = [2 & e[0], l.value]), e[0]) {
                                        case 0:
                                        case 1:
                                            l = e;
                                            break;
                                        case 4:
                                            return r.label++, {
                                                value: e[1],
                                                done: !1
                                            };
                                        case 5:
                                            r.label++, a = e[1], e = [0];
                                            continue;
                                        case 7:
                                            e = r.ops.pop(), r.trys.pop();
                                            continue;
                                        default:
                                            if (!(l = 0 < (l = r.trys).length && l[l.length - 1]) && (6 === e[0] || 2 === e[0])) {
                                                r = 0;
                                                continue
                                            }
                                            if (3 === e[0] && (!l || e[1] > l[0] && e[1] < l[3])) {
                                                r.label = e[1];
                                                break
                                            }
                                            if (6 === e[0] && r.label < l[1]) {
                                                r.label = l[1], l = e;
                                                break
                                            }
                                            if (l && r.label < l[2]) {
                                                r.label = l[2], r.ops.push(e);
                                                break
                                            }
                                            l[2] && r.ops.pop(), r.trys.pop();
                                            continue
                                    }
                                    e = o.call(t, r)
                                } catch (n) {
                                    e = [6, n], a = 0
                                } finally {
                                    i = l = 0
                                }
                                if (5 & e[0]) throw e[1];
                                return {
                                    value: e[0] ? e[1] : void 0,
                                    done: !0
                                }
                            }([e, n])
                        }
                    }
                },
                v = function(e) {
                    return k(void 0, void 0, Promise, function() {
                        return y(this, function(n) {
                            switch (n.label) {
                                case 0:
                                    return [4, d.httpService.get(m.url.getGameSocialLinks(e))];
                                case 1:
                                    return [2, n.sent().data.data]
                            }
                        })
                    })
                },
                g = u.eventStreamService.eventTypes,
                L = function(n) {
                    return [{
                        name: "socialLinkClickEvent",
                        type: g.formInteraction
                    }, {
                        assignmentId: n.id,
                        assignmentType: n.type,
                        socialLinkType: "game",
                        socialLinkUrl: n.url,
                        socialLinkDisplayType: n.type
                    }]
                },
                i = {
                    common: ["CommonUI.Controls"],
                    feature: "Feature.PromotedChannels"
                },
                b = function(n, l, r, c) {
                    return new(r = r || Promise)(function(t, e) {
                        function o(n) {
                            try {
                                a(c.next(n))
                            } catch (n) {
                                e(n)
                            }
                        }

                        function i(n) {
                            try {
                                a(c.throw(n))
                            } catch (n) {
                                e(n)
                            }
                        }

                        function a(n) {
                            var e;
                            n.done ? t(n.value) : ((e = n.value) instanceof r ? e : new r(function(n) {
                                n(e)
                            })).then(o, i)
                        }
                        a((c = c.apply(n, l || [])).next())
                    })
                },
                h = function(t, o) {
                    var i, a, l, r = {
                            label: 0,
                            sent: function() {
                                if (1 & l[0]) throw l[1];
                                return l[1]
                            },
                            trys: [],
                            ops: []
                        },
                        n = {
                            next: e(0),
                            throw: e(1),
                            return: e(2)
                        };
                    return "function" == typeof Symbol && (n[Symbol.iterator] = function() {
                        return this
                    }), n;

                    function e(e) {
                        return function(n) {
                            return function(e) {
                                if (i) throw new TypeError("Generator is already executing.");
                                for (; r;) try {
                                    if (i = 1, a && (l = 2 & e[0] ? a.return : e[0] ? a.throw || ((l = a.return) && l.call(a), 0) : a.next) && !(l = l.call(a, e[1])).done) return l;
                                    switch (a = 0, l && (e = [2 & e[0], l.value]), e[0]) {
                                        case 0:
                                        case 1:
                                            l = e;
                                            break;
                                        case 4:
                                            return r.label++, {
                                                value: e[1],
                                                done: !1
                                            };
                                        case 5:
                                            r.label++, a = e[1], e = [0];
                                            continue;
                                        case 7:
                                            e = r.ops.pop(), r.trys.pop();
                                            continue;
                                        default:
                                            if (!(l = 0 < (l = r.trys).length && l[l.length - 1]) && (6 === e[0] || 2 === e[0])) {
                                                r = 0;
                                                continue
                                            }
                                            if (3 === e[0] && (!l || e[1] > l[0] && e[1] < l[3])) {
                                                r.label = e[1];
                                                break
                                            }
                                            if (6 === e[0] && r.label < l[1]) {
                                                r.label = l[1], l = e;
                                                break
                                            }
                                            if (l && r.label < l[2]) {
                                                r.label = l[2], r.ops.push(e);
                                                break
                                            }
                                            l[2] && r.ops.pop(), r.trys.pop();
                                            continue
                                    }
                                    e = o.call(t, r)
                                } catch (n) {
                                    e = [6, n], a = 0
                                } finally {
                                    i = l = 0
                                }
                                if (5 & e[0]) throw e[1];
                                return {
                                    value: e[0] ? e[1] : void 0,
                                    done: !0
                                }
                            }([e, n])
                        }
                    }
                },
                C = m.socialLinksTranslationMap,
                T = m.iconMap,
                i = Object.assign((0, a.withTranslations)(function(n) {
                    n.type;

                    function e(n) {
                        u.eventStreamService.sendEvent.apply(u.eventStreamService, L(n)), window.open(n.url, "_blank")
                    }
                    var t = n.targetId,
                        o = n.translate,
                        i = (0, l.useState)(void 0),
                        n = i[0],
                        a = i[1];
                    return (0, l.useEffect)(function() {
                        b(void 0, void 0, void 0, function() {
                            var e;
                            return h(this, function(n) {
                                switch (n.label) {
                                    case 0:
                                        if (s.authenticatedUser.isUnder13 || !s.authenticatedUser.isAuthenticated) return [3, 5];
                                        n.label = 1;
                                    case 1:
                                        return n.trys.push([1, 3, , 4]), [4, v(t)];
                                    case 2:
                                        return e = n.sent(), a(e), [3, 4];
                                    case 3:
                                        return n.sent(), a([]), [3, 4];
                                    case 4:
                                        return [3, 6];
                                    case 5:
                                        a([]), n.label = 6;
                                    case 6:
                                        return [2]
                                }
                            })
                        })
                    }, []), n && 0 !== (null == n ? void 0 : n.length) ? r().createElement("div", null, r().createElement("h2", null, o(C.sectionHeader)), r().createElement("ul", {
                        className: "game-social-links"
                    }, n.map(function(n) {
                        return r().createElement(f.Link, {
                            onClick: function() {
                                e(n)
                            },
                            onKeyDown: function() {
                                e(n)
                            },
                            key: n.id,
                            className: "btn-secondary-lg"
                        }, r().createElement("span", {
                            className: c()("social-icon", T[n.type])
                        }), r().createElement("div", null, n.title))
                    }))) : null
                }, i), {
                    SocialLinkJumbotronType: w
                });
            (0, o.importFilesUnderPath)(x(710)), (0, o.importFilesUnderPath)(x(41));
            var w = x(361);
            (0, o.templateCacheGenerator)(t(), "socialLinksJumbotronHtmlTemplateApp", null, w), window.Roblox.SocialLinksJumbotron = i
        }()
}();
//# sourceMappingURL=https://js.rbxcdn.com/38c4db9f9cc38824c032-socialLinksJumbotron.bundle.min.js.map

/* Bundle detector */
window.Roblox && window.Roblox.BundleDetector && window.Roblox.BundleDetector.bundleDetected("SocialLinksJumbotron");