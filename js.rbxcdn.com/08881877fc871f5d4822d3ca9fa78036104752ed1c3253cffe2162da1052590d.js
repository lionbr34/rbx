! function() {
    var t = {
            779: function(e, r) {
                var t;
                /*!
                  Copyright (c) 2017 Jed Watson.
                  Licensed under the MIT License (MIT), see
                  http://jedwatson.github.io/classnames
                */
                ! function() {
                    "use strict";
                    var o = {}.hasOwnProperty;

                    function s() {
                        for (var e = [], r = 0; r < arguments.length; r++) {
                            var t = arguments[r];
                            if (t) {
                                var n = typeof t;
                                if ("string" == n || "number" == n) e.push(t);
                                else if (Array.isArray(t) && t.length) {
                                    var a = s.apply(null, t);
                                    a && e.push(a)
                                } else if ("object" == n)
                                    for (var i in t) o.call(t, i) && t[i] && e.push(i)
                            }
                        }
                        return e.join(" ")
                    }
                    e.exports ? (s.default = s, e.exports = s) : void 0 === (t = function() {
                        return s
                    }.apply(r, [])) || (e.exports = t)
                }()
            }
        },
        n = {};

    function Xr(e) {
        if (n[e]) return n[e].exports;
        var r = n[e] = {
            exports: {}
        };
        return t[e](r, r.exports, Xr), r.exports
    }
    Xr.n = function(e) {
            var r = e && e.__esModule ? function() {
                return e.default
            } : function() {
                return e
            };
            return Xr.d(r, {
                a: r
            }), r
        }, Xr.d = function(e, r) {
            for (var t in r) Xr.o(r, t) && !Xr.o(e, t) && Object.defineProperty(e, t, {
                enumerable: !0,
                get: r[t]
            })
        }, Xr.o = function(e, r) {
            return Object.prototype.hasOwnProperty.call(e, r)
        },
        function() {
            "use strict";
            var o = CoreUtilities,
                R = React,
                C = Xr.n(R),
                e = ReactDOM,
                r = 5,
                t = 15,
                n = 50,
                a = 4,
                i = {
                    friend: {
                        key: "friends",
                        value: "Friend"
                    },
                    public: {
                        value: "Public"
                    },
                    Vip: {
                        key: "private",
                        value: "VIP"
                    }
                },
                s = {
                    descending: "Desc",
                    ascending: "Asc"
                },
                l = {
                    sortOrder: "Desc",
                    excludeFullGames: !1
                },
                c = {
                    friendsServersTitle: "Heading.ServersMyFriendsAreIn",
                    publicServersTitle: "Heading.OtherServers",
                    loadMoreButtonText: "Action.LoadMore",
                    playerCountText: "Label.CurrentPlayerCount",
                    noServersFoundText: "Label.NoServersFound",
                    configureServerText: "Action.ConfigureServer",
                    shutdownServerText: "Label.ShutDownServer",
                    shutdownServerSuccess: "Message.ShutdownServerSuccess",
                    shutdownServerError: "Message.ShutdownServerError",
                    slowGameWarning: "Label.SlowGame",
                    joinServerText: "Label.ServerListJoin",
                    serversText: "Label.Servers",
                    privateServerHeader: "Heading.PrivateServers",
                    privateServerTooltip: "Label.PrivateServersAbout",
                    privateServerRefreshText: "Action.Refresh",
                    privateServerPrice: "Label.Price",
                    privateServerPlayWithOthers: "Label.PlayWithOthers",
                    seeAllPrivateServersText: "Label.SeeAllPrivateServers",
                    privateServersNotSupported: "Label.VipServersNotSupported",
                    freeGameText: "Label.Free",
                    maxFreePrivateServersText: "Description.MaxFreePrivateServers",
                    createPrivateServerText: "Action.CreatePrivateServer",
                    paymentCancelledText: "Label.PaymentCancelled",
                    insufficientFunds: "Label.InsufficientFunds",
                    inactiveServerText: "Label.Inactive",
                    renewServerListText: "Label.Renew",
                    renewPrivateServerTitle: "Label.RenewPrivateServer",
                    renewSubscriptionSuccess: "Message.RenewSubscriptionSuccess",
                    renewSubscriptionError: "Message.RenewSubscriptionError",
                    confirmEnableFuturePaymentsText: "Label.ConfirmEnableFuturePayments",
                    startRenewingPrivateServerPrice: "Label.StartRenewingPrivateServerPrice",
                    cancelText: "Label.Cancel",
                    createPrivateServerPriceText: "Label.CreatePrivateServerFor",
                    gameNameText: "Label.GameName",
                    serverNameText: "Label.ServerName",
                    createPrivateServerTitle: "Action.CreatePrivateServer",
                    buyNowText: "Action.BuyNow",
                    createServerFooterText: "Label.FooterText",
                    privateServerLabel: "Label.PrivateServer",
                    cancelAction: "Action.Cancel",
                    transactionFailedHeading: "Heading.TransactionFailed",
                    createServerFooterDescription: "Description.RecurringSubscriptionRenewal",
                    friendInServerLabel: "Label.FriendInServer",
                    twoFriendsInServerLabel: "Label.TwoFriendsInServer",
                    manyFriendsInServerLabel: "Label.ManyFriendsInThisServer",
                    loadServersError: "Message.LoadServersFailure",
                    purchaseError: "Message.InternalErrorPurchaseError",
                    numberOfPlayers: "Label.NumberOfPlayers",
                    hideFullServers: "Label.ExcludeFullServers",
                    descending: "Action.Descending",
                    ascending: "Action.Ascending"
                },
                u = PropTypes,
                d = Xr.n(u),
                v = ReactUtilities,
                L = HeaderScripts,
                m = Roblox,
                p = m.EnvironmentUrls.gamesApi,
                f = function(e) {
                    return o.urlService.getAbsoluteUrl("/users/".concat(e, "/profile"))
                },
                b = function(e) {
                    return o.urlService.getUrlWithQueries("/private-server/configure", {
                        privateServerId: e
                    })
                },
                A = function(e) {
                    return o.urlService.getUrlWithLocale("/info/vip-server", e)
                };

            function g(r, e) {
                var t, n = Object.keys(r);
                return Object.getOwnPropertySymbols && (t = Object.getOwnPropertySymbols(r), e && (t = t.filter(function(e) {
                    return Object.getOwnPropertyDescriptor(r, e).enumerable
                })), n.push.apply(n, t)), n
            }

            function h(n) {
                for (var e = 1; e < arguments.length; e++) {
                    var a = null != arguments[e] ? arguments[e] : {};
                    e % 2 ? g(Object(a), !0).forEach(function(e) {
                        var r, t;
                        r = n, e = a[t = e], t in r ? Object.defineProperty(r, t, {
                            value: e,
                            enumerable: !0,
                            configurable: !0,
                            writable: !0
                        }) : r[t] = e
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(a)) : g(Object(a)).forEach(function(e) {
                        Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(a, e))
                    })
                }
                return n
            }
            var y = i,
                S = function(e, r) {
                    return o.urlService.getAbsoluteUrl("".concat(p, "/v1/games/").concat(e, "/servers/").concat(r))
                },
                w = function() {
                    return o.urlService.getAbsoluteUrl("/game-instances/shutdown")
                },
                E = function(e) {
                    return "".concat(p, "/v1/vip-servers/").concat(e)
                },
                I = function(e) {
                    return "".concat(p, "/v1/games/vip-servers/").concat(e)
                },
                x = function(e) {
                    return "".concat(p, "/v1/games/vip-servers/").concat(e)
                },
                T = function(e) {
                    return "".concat(p, "/v1/vip-servers/").concat(e, "/subscription")
                },
                O = {
                    getPublicGameInstances: function(e, r, t) {
                        t = 2 < arguments.length && void 0 !== t ? t : {}, e = {
                            url: S(e, y.public.value),
                            retryable: !0,
                            withCredentials: !0
                        }, t = h({
                            cursor: r
                        }, t);
                        return o.httpService.get(e, t)
                    },
                    getFriendsGameInstances: function(e, r, t) {
                        t = 2 < arguments.length && void 0 !== t ? t : {}, e = {
                            url: S(e, y.friend.value),
                            retryable: !0,
                            withCredentials: !0
                        }, t = h({
                            cursor: r
                        }, t);
                        return o.httpService.get(e, t)
                    },
                    getVipGameInstances: function(e, r, t) {
                        t = 2 < arguments.length && void 0 !== t ? t : {}, e = {
                            url: S(e, y.Vip.value),
                            retryable: !0,
                            withCredentials: !0
                        }, t = h({
                            cursor: r
                        }, t);
                        return o.httpService.get(e, t)
                    },
                    shutdownGameInstance: function(e, r, t) {
                        var n = null === (a = document.getElementsByName("__RequestVerificationToken")[0]) || void 0 === a ? void 0 : a.value,
                            a = {
                                url: w(),
                                retryable: !0,
                                withCredentials: !0
                            },
                            r = {
                                __RequestVerificationToken: n,
                                placeId: e,
                                gameId: r
                            };
                        return t && (r.privateServerId = t), o.httpService.post(a, r)
                    },
                    createPrivateServer: function(e, r, t) {
                        e = {
                            url: x(e),
                            retryable: !0,
                            withCredentials: !0
                        }, t = {
                            name: r,
                            expectedPrice: t
                        };
                        return o.httpService.post(e, t)
                    },
                    getVipServer: function(e) {
                        e = {
                            url: E(e),
                            retryable: !0,
                            withCredentials: !0
                        };
                        return o.httpService.get(e)
                    },
                    createVipServer: function(e, r, t) {
                        e = {
                            url: I(e),
                            retryable: !0,
                            withCredentials: !0
                        };
                        return o.httpService.post(e, {
                            name: r,
                            expectedPrice: t
                        })
                    },
                    updateVipServerSubscription: function(e, r, t) {
                        e = {
                            url: T(e),
                            retryable: !0,
                            withCredentials: !0
                        };
                        return o.httpService.patch(e, {
                            active: r,
                            price: t
                        })
                    }
                },
                P = function() {
                    var e = document.getElementById("game-detail-meta-data");
                    return e ? {
                        gameDetailUniverseId: parseInt(e.getAttribute("data-universe-id"), 10),
                        gameDetailPlaceName: e.getAttribute("data-place-name"),
                        gameDetailPlaceId: parseInt(e.getAttribute("data-place-id"), 10),
                        gameDetailPageId: e.getAttribute("data-page-id"),
                        gameDetailGameInstanceId: e.getAttribute("data-game-instance-id"),
                        gameDetailShowShutdownAllButton: "True" === e.getAttribute("data-show-shut-down-all-button"),
                        gameDetailUserCanManagePlace: "True" === e.getAttribute("data-user-can-manage-place"),
                        gameDetailPrivateServerPrice: parseInt(e.getAttribute("data-private-server-price"), 10),
                        gameDetailCanCreateServer: "True" === e.getAttribute("data-can-create-server"),
                        gameDetailPrivateServerLimit: parseInt(e.getAttribute("data-private-server-limit"), 10) || 0,
                        gameDetailSellerName: e.getAttribute("data-seller-name"),
                        gameDetailSellerId: parseInt(e.getAttribute("data-seller-id"), 10),
                        gameDetailPrivateServerProductId: parseInt(e.getAttribute("data-private-server-product-id"), 10),
                        gameDetailPreopenCreatePrivateServerModal: "True" === e.getAttribute("data-preopen-create-private-server-modal"),
                        gameDetailOpenInviteLinkExpiredModal: "True" === e.getAttribute("data-open-invite-link-expired-modal")
                    } : null
                };

            function N(e, r, t, n, a, i, o) {
                try {
                    var s = e[i](o),
                        l = s.value
                } catch (e) {
                    return void t(e)
                }
                s.done ? r(l) : Promise.resolve(l).then(n, a)
            }

            function F(s) {
                return function() {
                    var e = this,
                        o = arguments;
                    return new Promise(function(r, t) {
                        var n = s.apply(e, o);

                        function a(e) {
                            N(n, r, t, a, i, "next", e)
                        }

                        function i(e) {
                            N(n, r, t, a, i, "throw", e)
                        }
                        a(void 0)
                    })
                }
            }

            function k(e) {
                return function(e) {
                    if (Array.isArray(e)) return j(e)
                }(e) || function(e) {
                    if ("undefined" != typeof Symbol && Symbol.iterator in Object(e)) return Array.from(e)
                }(e) || q(e) || function() {
                    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function M(e, r) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, r) {
                    if ("undefined" == typeof Symbol || !(Symbol.iterator in Object(e))) return;
                    var t = [],
                        n = !0,
                        a = !1,
                        i = void 0;
                    try {
                        for (var o, s = e[Symbol.iterator](); !(n = (o = s.next()).done) && (t.push(o.value), !r || t.length !== r); n = !0);
                    } catch (e) {
                        a = !0, i = e
                    } finally {
                        try {
                            n || null == s.return || s.return()
                        } finally {
                            if (a) throw i
                        }
                    }
                    return t
                }(e, r) || q(e, r) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function q(e, r) {
                if (e) {
                    if ("string" == typeof e) return j(e, r);
                    var t = Object.prototype.toString.call(e).slice(8, -1);
                    return "Object" === t && e.constructor && (t = e.constructor.name), "Map" === t || "Set" === t ? Array.from(e) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? j(e, r) : void 0
                }
            }

            function j(e, r) {
                (null == r || r > e.length) && (r = e.length);
                for (var t = 0, n = new Array(r); t < r; t++) n[t] = e[t];
                return n
            }
            var D = P,
                B = l;

            function G() {
                return +window.location.pathname.split("/")[2]
            }

            function U(e, r, t) {
                var n = r.instanceId,
                    a = r.accessCode;
                if ("computer" === Z && !ee || "tablet" === Z && X || ee) return function() {
                    m.EventStream.SendEventWithTarget("gamePlayIntent", "".concat(t, "ServerListJoin"), {
                        lType: "protocol",
                        pid: G(),
                        refuid: null,
                        pg: "gameDetail"
                    }, m.EventStream.TargetTypes.WWW), a ? m.GameLauncher.joinPrivateGame(e, a) : n && m.GameLauncher.joinGameInstance(e, n)
                };
                var i = "",
                    i = re ? o.urlService.getUrlWithQueries("/games/start", {
                        placeId: e
                    }) : "robloxmobile://placeID=".concat(e);
                return n && (i += "&gameInstanceId=".concat(n)), a && (i += "&accessCode=".concat(a)),
                    function() {
                        window.location.href = i
                    }
            }
            var W = function(o) {
                    var s = 1 < arguments.length && void 0 !== arguments[1] && arguments[1],
                        e = (w = D()).gameDetailUniverseId,
                        l = w.gameDetailPlaceId,
                        r = w.gameDetailPlaceName,
                        t = w.gameDetailCanCreateServer,
                        n = w.gameDetailPrivateServerPrice,
                        a = w.gameDetailUserCanManagePlace,
                        i = w.gameDetailSellerId,
                        c = w.gameDetailSellerName,
                        u = w.gameDetailPrivateServerProductId,
                        d = (E = M((0, R.useState)(!1), 2))[0],
                        v = E[1],
                        m = (S = M((0, R.useState)(!1), 2))[0],
                        p = S[1],
                        f = (w = M((0, R.useState)([]), 2))[0],
                        b = w[1],
                        g = (E = M((0, R.useState)(""), 2))[0],
                        h = E[1],
                        y = (0, R.useCallback)(F(regeneratorRuntime.mark(function e() {
                            var r, t, n, a, i = arguments;
                            return regeneratorRuntime.wrap(function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        if (r = 0 < i.length && void 0 !== i[0] ? i[0] : {}, t = 1 < i.length && void 0 !== i[1] && i[1], d) throw Error("Cannot load more servers while a request is in flight");
                                        e.next = 4;
                                        break;
                                    case 4:
                                        return v(!0), p(!1), e.prev = 6, e.next = 9, o(l, t ? "" : g, r);
                                    case 9:
                                        return n = e.sent, a = n.data, n = a.data, a = a.nextPageCursor, e.next = 15, Promise.all(n.map(function() {
                                            var r = F(regeneratorRuntime.mark(function e(r) {
                                                var t, n, a, i;
                                                return regeneratorRuntime.wrap(function(e) {
                                                    for (;;) switch (e.prev = e.next) {
                                                        case 0:
                                                            if (void 0 === r.players && (r.players = []), t = r.players, n = r.playerTokens, a = {}, t.forEach(function(e) {
                                                                    a[e.playerToken] = e
                                                                }), n.forEach(function(e) {
                                                                    null == a[e] && t.push({
                                                                        id: null,
                                                                        name: null,
                                                                        playerToken: e,
                                                                        displayName: null
                                                                    })
                                                                }), s && r.vipServerId && (null === (n = r.owner) || void 0 === n ? void 0 : n.id) === L.authenticatedUser.id) return i = r.vipServerId, e.prev = 7, e.next = 10, O.getVipServer(i);
                                                            e.next = 17;
                                                            break;
                                                        case 10:
                                                            i = e.sent, i = i.data, r.vipServerSubscription = i.subscription, e.next = 17;
                                                            break;
                                                        case 15:
                                                            e.prev = 15, e.t0 = e.catch(7);
                                                        case 17:
                                                        case "end":
                                                            return e.stop()
                                                    }
                                                }, e, null, [
                                                    [7, 15]
                                                ])
                                            }));
                                            return function(e) {
                                                return r.apply(this, arguments)
                                            }
                                        }()));
                                    case 15:
                                        b(t ? n : function(e, r) {
                                            var t = k(e),
                                                n = {};
                                            return t.forEach(function(e) {
                                                void 0 !== e.id && (n[e.id] = e)
                                            }), r.forEach(function(e) {
                                                var r = n[e.id];
                                                r ? Object.assign(r, e) : t.push(e)
                                            }), t
                                        }(f, n)), h(a), e.next = 24;
                                        break;
                                    case 19:
                                        e.prev = 19, e.t0 = e.catch(6), b([]), h(""), p(!0);
                                    case 24:
                                        return e.prev = 24, v(!1), e.finish(24);
                                    case 27:
                                    case "end":
                                        return e.stop()
                                }
                            }, e, null, [
                                [6, 19, 24, 27]
                            ])
                        })), [d, l, g, f, o, s]),
                        S = (0, R.useCallback)(function(e) {
                            if (d) throw Error("Cannot remove server from list while a request is in flight");
                            var r = k(f);
                            r.splice(e, 1), b(r)
                        }, [d, f]),
                        w = (0, R.useCallback)(function(e) {
                            if (d) throw Error("Cannot clear server while a request is in flight");
                            var r = k(f),
                                e = r[e];
                            e.playerTokens = [], e.players = [], e.playing = 0, e.id = null, b(r)
                        }, [d, f]),
                        E = (0, R.useCallback)(function() {
                            var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {};
                            if (d) throw Error("Cannot refresh server list while a request is in flight");
                            y(e, !0)
                        }, [d, y]);
                    return (0, R.useEffect)(function() {
                        y(B)
                    }, []), {
                        metaData: {
                            universeId: e,
                            placeId: l,
                            placeName: r,
                            canCreateServer: t,
                            price: n,
                            userCanManagePlace: a,
                            sellerId: i,
                            sellerName: c,
                            privateServerProductId: u
                        },
                        servers: f,
                        loadMoreServers: y,
                        removeServerAtIndex: S,
                        clearServerAtIndex: w,
                        refreshServers: E,
                        hasNext: !!g,
                        isBusy: d,
                        setIsBusy: v,
                        hasError: m
                    }
                },
                H = {
                    common: ["CommonUI.Controls"],
                    feature: "Feature.ServerList"
                },
                V = {
                    common: [],
                    feature: "Feature.PrivateServers"
                },
                _ = {
                    common: [],
                    feature: "Purchasing.PurchaseDialog"
                },
                z = {
                    common: [],
                    feature: "Feature.VIPServer"
                },
                $ = ReactStyleGuide,
                J = Xr(779),
                K = Xr.n(J),
                Q = RobloxThumbnails,
                X = L.jsClientDeviceIdentifier.isIE11,
                Y = P,
                Z = (Ne = (0, m.DeviceMeta)()).deviceType,
                ee = Ne.isUWPApp,
                re = Ne.isInApp,
                te = c,
                ne = b;

            function ae(e) {
                var r = e.className,
                    t = e.translate,
                    n = e.gameId,
                    a = e.vipServerId,
                    i = e.isOwner,
                    o = e.canManagePlace,
                    s = e.shutdownServer,
                    l = e.isLoading,
                    e = 0 < a,
                    i = e && i,
                    o = null !== n && (!e && o || i);
                return i || o ? C().createElement("div", {
                    className: r
                }, C().createElement($.Popover, {
                    id: "game-instance-dropdown-menu",
                    button: C().createElement($.IconButton, {
                        iconName: "more",
                        size: $.IconButton.sizes.small,
                        isDisabled: l
                    }),
                    trigger: "click",
                    placement: "bottom"
                }, C().createElement("ul", {
                    className: "dropdown-menu",
                    role: "menu"
                }, i && C().createElement("li", null, C().createElement($.Link, {
                    url: ne(a),
                    className: "rbx-private-server-configure"
                }, t(te.configureServerText))), o && C().createElement("li", null, C().createElement("button", {
                    type: "button",
                    onClick: s,
                    className: "rbx-private-server-shutdown rbx-private-server-shutdown"
                }, t(te.shutdownServerText)))))) : C().createElement(R.Fragment, null)
            }
            ae.defaultProps = {
                className: "",
                gameId: null,
                vipServerId: 0,
                isOwner: !1,
                canManagePlace: !1
            }, ae.propTypes = {
                className: d().string,
                translate: d().func.isRequired,
                gameId: d().string,
                vipServerId: d().number,
                isOwner: d().bool,
                canManagePlace: d().bool,
                shutdownServer: d().func.isRequired,
                isLoading: d().bool.isRequired
            };
            var ie = ae,
                oe = ReactDOMServer,
                se = RobloxItemPurchase;

            function le(e, r) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, r) {
                    if ("undefined" == typeof Symbol || !(Symbol.iterator in Object(e))) return;
                    var t = [],
                        n = !0,
                        a = !1,
                        i = void 0;
                    try {
                        for (var o, s = e[Symbol.iterator](); !(n = (o = s.next()).done) && (t.push(o.value), !r || t.length !== r); n = !0);
                    } catch (e) {
                        a = !0, i = e
                    } finally {
                        try {
                            n || null == s.return || s.return()
                        } finally {
                            if (a) throw i
                        }
                    }
                    return t
                }(e, r) || function(e, r) {
                    if (!e) return;
                    if ("string" == typeof e) return ce(e, r);
                    var t = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === t && e.constructor && (t = e.constructor.name);
                    if ("Map" === t || "Set" === t) return Array.from(e);
                    if ("Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)) return ce(e, r)
                }(e, r) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function ce(e, r) {
                (null == r || r > e.length) && (r = e.length);
                for (var t = 0, n = new Array(r); t < r; t++) n[t] = e[t];
                return n
            }
            var ue = c;

            function de(e) {
                var r = e.translate,
                    t = e.placeName,
                    n = e.creatorName,
                    a = e.price,
                    i = e.renewPrivateServer,
                    o = e.isLoading,
                    s = le((0, R.useState)(!1), 2),
                    l = s[0],
                    c = s[1],
                    e = le((0, R.useState)(!1), 2),
                    s = e[0],
                    u = e[1],
                    n = C().createElement(R.Fragment, null, C().createElement("p", {
                        className: "renew-server-modal-body-text"
                    }, r(ue.confirmEnableFuturePaymentsText, {
                        placeName: t,
                        creatorName: n
                    })), C().createElement("p", {
                        className: "renew-server-modal-body-text",
                        dangerouslySetInnerHTML: {
                            __html: r(ue.startRenewingPrivateServerPrice, {
                                price: (0, oe.renderToString)(C().createElement(se.PriceLabel, {
                                    price: a
                                }))
                            })
                        }
                    })),
                    d = (0, R.useCallback)(function() {
                        c(!1)
                    }, []),
                    a = (0, R.useCallback)(function() {
                        d(), u(!0), i().finally(function() {
                            u(!1)
                        })
                    }, [i]);
                return C().createElement(R.Fragment, null, C().createElement($.Button, {
                    className: "rbx-private-server-renew",
                    onClick: function() {
                        return c(!0)
                    },
                    size: $.Button.sizes.extraSmall,
                    width: $.Button.widths.full,
                    variant: $.Button.variants.control,
                    isDisabled: o || s
                }, r(ue.renewServerListText)), C().createElement($.SimpleModal, {
                    show: l,
                    title: r(ue.renewPrivateServerTitle),
                    body: n,
                    actionButtonText: r(ue.renewServerListText),
                    neutralButtonText: r(ue.cancelText),
                    onAction: a,
                    onClose: d,
                    onNeutral: d,
                    actionButtonShow: !0
                }))
            }
            de.propTypes = {
                translate: d().func.isRequired,
                placeName: d().string.isRequired,
                creatorName: d().string.isRequired,
                price: d().number.isRequired,
                renewPrivateServer: d().func.isRequired,
                isLoading: d().bool.isRequired
            };
            var ve = (0, v.withTranslations)(de, V),
                me = P,
                pe = c;

            function fe(e) {
                var t = e.translate,
                    r = e.privateServerId,
                    n = e.isPaymentCancelled,
                    a = e.isInsufficientFunds,
                    i = e.isServerInactive,
                    o = e.canRenew,
                    s = e.setSubscription,
                    l = e.isLoading,
                    c = e.systemFeedbackService,
                    u = me(),
                    d = u.gameDetailPlaceName,
                    v = u.gameDetailPrivateServerPrice,
                    e = u.gameDetailSellerName,
                    u = (0, R.useCallback)(function() {
                        return new Promise(function(e) {
                            O.updateVipServerSubscription(r, !0, v).then(function(e) {
                                e = e.data;
                                s(e), c.success(t(pe.renewSubscriptionSuccess) || "Successfully renewed private server")
                            }, function(e) {
                                var r = e.data;
                                0 < (null === (e = r.errors) || void 0 === e ? void 0 : e.length) ? (e = r.errors[0], c.warning(null !== (r = e.userFacingMessage) && void 0 !== r ? r : e.message)) : c.warning(t(pe.renewSubscriptionError) || "Unable to renew subscription.")
                            }).finally(function() {
                                e()
                            })
                        })
                    }, [r, v, s, t, c]);
                return C().createElement(R.Fragment, null, n && C().createElement("div", {
                    className: "rbx-private-server-subscription-alert text-alert"
                }, C().createElement("span", {
                    className: "icon-remove"
                }), C().createElement("span", {
                    className: "rbx-private-server-subscription-alert-text"
                }, t(pe.paymentCancelledText))), a && C().createElement("div", {
                    className: "rbx-private-server-insufficient-funds text-alert"
                }, C().createElement("span", {
                    className: "icon-remove"
                }), t(pe.insufficientFunds)), i && C().createElement("div", {
                    className: "rbx-private-server-inactive"
                }, C().createElement("span", {
                    className: "icon-turn-off"
                }), t(pe.inactiveServerText)), o && C().createElement(ve, {
                    placeName: d,
                    creatorName: e,
                    price: v,
                    renewPrivateServer: u,
                    isLoading: l
                }))
            }
            fe.propTypes = {
                translate: d().func.isRequired,
                privateServerId: d().number.isRequired,
                isPaymentCancelled: d().bool.isRequired,
                isInsufficientFunds: d().bool.isRequired,
                isServerInactive: d().bool.isRequired,
                canRenew: d().bool.isRequired,
                setSubscription: d().func.isRequired,
                isLoading: d().bool.isRequired,
                systemFeedbackService: d().shape({
                    success: d().func.isRequired,
                    warning: d().func.isRequired
                }).isRequired
            };
            var be = (0, v.withTranslations)(fe, H),
                ge = f;

            function he(e) {
                var r = e.ownerUserId,
                    e = e.ownerName;
                return C().createElement("div", {
                    className: "rbx-private-owner"
                }, C().createElement($.Link, {
                    title: e,
                    url: ge(r),
                    className: "avatar avatar-card-fullbody owner-avatar"
                }, C().createElement(Q.Thumbnail2d, {
                    type: Q.ThumbnailTypes.avatarHeadshot,
                    size: Q.DefaultThumbnailSize,
                    targetId: r,
                    containerClass: "avatar-card-image"
                })), C().createElement($.Link, {
                    url: ge(r),
                    className: "text-name text-overflow"
                }, e))
            }
            he.propTypes = {
                ownerUserId: d().number.isRequired,
                ownerName: d().string.isRequired
            };
            var ye = he,
                Se = f,
                we = c;

            function Ee(e) {
                function n(e) {
                    return void 0 === e ? C().createElement(R.Fragment, null) : C().createElement($.Link, {
                        href: Se(e.id),
                        className: "text-name"
                    }, e.displayName)
                }
                var a = e.translate,
                    r = e.players,
                    i = (0, R.useMemo)(function() {
                        return r.filter(function(e) {
                            return null !== e.id && e.id !== L.authenticatedUser.id
                        })
                    }, [r]),
                    e = (0, R.useMemo)(function() {
                        if (0 === i.length) return "";
                        var e = (0, oe.renderToString)(n(i[0]));
                        if (1 === i.length) return a(we.friendInServerLabel, {
                            friend: e
                        }) || "Friends in this server: ".concat(e);
                        var r = (0, oe.renderToString)(n(i[1]));
                        if (2 === i.length) return a(we.twoFriendsInServerLabel, {
                            firstFriend: e,
                            secondFriend: r
                        }) || "Friends in this server: ".concat(e, " and ").concat(r);
                        var t = i.length - 2;
                        return "Friends in this server: ".concat(e, ", ").concat(r, ", and ").concat(t, " ").concat(1 == t ? "other" : "others")
                    }, [i, a]);
                return 0 === i.length ? C().createElement(R.Fragment, null) : C().createElement("div", {
                    className: "text friends-in-server-label",
                    dangerouslySetInnerHTML: {
                        __html: e
                    }
                })
            }

            function Ie(e) {
                var r = e.children,
                    t = (0, R.useState)(ke),
                    e = t[0],
                    n = t[1];
                return (0, R.useEffect)(function() {
                    Le(Oe.serverTab, Fe.serverTab).then(function(e) {
                        n({
                            disableJoinButtonForFullServers: !(null == e || !e.ShouldDisableJoinButtonForFullServers)
                        })
                    }).catch(function(e) {
                        console.error(e)
                    })
                }, []), C().createElement(Me.Provider, {
                    value: e
                }, r)
            }
            Ee.propTypes = {
                translate: d().func.isRequired,
                players: d().arrayOf(d().any).isRequired
            };
            var xe = Ee,
                Te = m.EnvironmentUrls.apiGatewayUrl,
                Pe = {
                    getExperimentationValues: function(e, r, t) {
                        return {
                            url: Te + "/product-experimentation-platform/v1/projects/" + e + "/layers/" + r + "/values?parameters=" + t.join(","),
                            withCredentials: !0
                        }
                    }
                },
                u = {
                    homePage: {
                        AvatarHomepageRecommendationsRowNum: 0,
                        IsDiscoveryApiEnabled: !0
                    },
                    serverTab: {
                        ShouldDisableJoinButtonForFullServers: !1
                    },
                    gameDetails: {
                        ShouldHidePrivateServersInAboutTab: !1
                    },
                    searchPage: {
                        ShouldShowFeaturedTileCreatorName: !1
                    }
                },
                J = {
                    homePage: "PlayerApp.HomePage.UX",
                    serverTab: "GameDetails.ServersTab",
                    gameDetails: "Website.GameDetails",
                    searchPage: "Website.SearchResultsPage"
                },
                Ne = m.EnvironmentUrls.apiGatewayUrl,
                Ae = function() {
                    return (Ae = Object.assign || function(e) {
                        for (var r, t = 1, n = arguments.length; t < n; t++)
                            for (var a in r = arguments[t]) Object.prototype.hasOwnProperty.call(r, a) && (e[a] = r[a]);
                        return e
                    }).apply(this, arguments)
                },
                Re = function(e, o, s, l) {
                    return new(s = s || Promise)(function(t, r) {
                        function n(e) {
                            try {
                                i(l.next(e))
                            } catch (e) {
                                r(e)
                            }
                        }

                        function a(e) {
                            try {
                                i(l.throw(e))
                            } catch (e) {
                                r(e)
                            }
                        }

                        function i(e) {
                            var r;
                            e.done ? t(e.value) : ((r = e.value) instanceof s ? r : new s(function(e) {
                                e(r)
                            })).then(n, a)
                        }
                        i((l = l.apply(e, o || [])).next())
                    })
                },
                Ce = function(t, n) {
                    var a, i, o, s = {
                            label: 0,
                            sent: function() {
                                if (1 & o[0]) throw o[1];
                                return o[1]
                            },
                            trys: [],
                            ops: []
                        },
                        e = {
                            next: r(0),
                            throw: r(1),
                            return: r(2)
                        };
                    return "function" == typeof Symbol && (e[Symbol.iterator] = function() {
                        return this
                    }), e;

                    function r(r) {
                        return function(e) {
                            return function(r) {
                                if (a) throw new TypeError("Generator is already executing.");
                                for (; s;) try {
                                    if (a = 1, i && (o = 2 & r[0] ? i.return : r[0] ? i.throw || ((o = i.return) && o.call(i), 0) : i.next) && !(o = o.call(i, r[1])).done) return o;
                                    switch (i = 0, o && (r = [2 & r[0], o.value]), r[0]) {
                                        case 0:
                                        case 1:
                                            o = r;
                                            break;
                                        case 4:
                                            return s.label++, {
                                                value: r[1],
                                                done: !1
                                            };
                                        case 5:
                                            s.label++, i = r[1], r = [0];
                                            continue;
                                        case 7:
                                            r = s.ops.pop(), s.trys.pop();
                                            continue;
                                        default:
                                            if (!(o = 0 < (o = s.trys).length && o[o.length - 1]) && (6 === r[0] || 2 === r[0])) {
                                                s = 0;
                                                continue
                                            }
                                            if (3 === r[0] && (!o || r[1] > o[0] && r[1] < o[3])) {
                                                s.label = r[1];
                                                break
                                            }
                                            if (6 === r[0] && s.label < o[1]) {
                                                s.label = o[1], o = r;
                                                break
                                            }
                                            if (o && s.label < o[2]) {
                                                s.label = o[2], s.ops.push(r);
                                                break
                                            }
                                            o[2] && s.ops.pop(), s.trys.pop();
                                            continue
                                    }
                                    r = n.call(t, s)
                                } catch (e) {
                                    r = [6, e], i = 0
                                } finally {
                                    a = o = 0
                                }
                                if (5 & r[0]) throw r[1];
                                return {
                                    value: r[0] ? r[1] : void 0,
                                    done: !0
                                }
                            }([r, e])
                        }
                    }
                },
                Le = function(n, a, i) {
                    return void 0 === i && (i = 1), Re(void 0, void 0, Promise, function() {
                        var t, r;
                        return Ce(this, function(e) {
                            switch (e.label) {
                                case 0:
                                    return e.trys.push([0, 2, , 3]), [4, o.httpService.get(Pe.getExperimentationValues(i, n, Object.keys(a)))];
                                case 1:
                                    return t = e.sent().data, r = Object.keys(t).reduce(function(e, r) {
                                        return null !== t[r] && (e[r] = t[r]), e
                                    }, {}), [2, Ae(Ae({}, a), r)];
                                case 2:
                                    return e.sent(), [2, a];
                                case 3:
                                    return [2]
                            }
                        })
                    })
                },
                Oe = J,
                Fe = u,
                ke = {
                    disableJoinButtonForFullServers: !1
                },
                Me = (0, R.createContext)(ke),
                qe = Me;

            function je(e, r) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, r) {
                    if ("undefined" == typeof Symbol || !(Symbol.iterator in Object(e))) return;
                    var t = [],
                        n = !0,
                        a = !1,
                        i = void 0;
                    try {
                        for (var o, s = e[Symbol.iterator](); !(n = (o = s.next()).done) && (t.push(o.value), !r || t.length !== r); n = !0);
                    } catch (e) {
                        a = !0, i = e
                    } finally {
                        try {
                            n || null == s.return || s.return()
                        } finally {
                            if (a) throw i
                        }
                    }
                    return t
                }(e, r) || function(e, r) {
                    if (!e) return;
                    if ("string" == typeof e) return De(e, r);
                    var t = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === t && e.constructor && (t = e.constructor.name);
                    if ("Map" === t || "Set" === t) return Array.from(e);
                    if ("Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)) return De(e, r)
                }(e, r) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function De(e, r) {
                (null == r || r > e.length) && (r = e.length);
                for (var t = 0, n = new Array(r); t < r; t++) n[t] = e[t];
                return n
            }
            var Be = f,
                Ge = c,
                Ue = r,
                We = i;

            function He(e) {
                var r = e.maxPlayerCount,
                    e = e.currentPlayerCount;
                if (!r) return C().createElement(R.Fragment, null);
                r = Math.round(e / r * 100);
                return C().createElement("div", {
                    className: "server-player-count-gauge border"
                }, C().createElement("div", {
                    className: "gauge-inner-bar border",
                    style: {
                        width: "".concat(r, "%")
                    }
                }))
            }

            function Ve(e) {
                e = e.player;
                return C().createElement("span", {
                    key: e.playerToken,
                    className: "avatar avatar-headshot-md player-avatar"
                }, null == e.id ? C().createElement(Q.Thumbnail2d, {
                    type: Q.ThumbnailTypes.avatarHeadshot,
                    token: e.playerToken,
                    containerClass: "avatar-card-image"
                }) : C().createElement($.Link, {
                    className: "avatar-card-link",
                    href: Be(e.id)
                }, C().createElement(Q.Thumbnail2d, {
                    type: Q.ThumbnailTypes.avatarHeadshot,
                    targetId: e.id,
                    containerClass: "avatar-card-image",
                    altName: e.displayName
                })))
            }

            function _e(e) {
                var r = e.id,
                    t = e.translate,
                    n = e.cssKey,
                    a = e.serverListType,
                    i = e.placeId,
                    o = e.gameServerStatus,
                    s = e.canManagePlace,
                    l = e.name,
                    c = e.vipServerId,
                    u = e.vipServerSubscription,
                    d = e.accessCode,
                    v = e.showSlowGameMessage,
                    m = e.owner,
                    p = e.players,
                    f = e.onShutdownServerSuccess,
                    b = e.systemFeedbackService,
                    g = e.isLoading,
                    h = e.setIsLoading,
                    y = e.maxPlayers,
                    S = e.currentPlayersCount,
                    w = je((0, R.useState)(u), 2),
                    E = w[0],
                    I = w[1],
                    x = (null == m ? void 0 : m.id) === L.authenticatedUser.id,
                    T = !!c,
                    P = T && !d,
                    N = (0, R.useContext)(qe);
                (0, R.useEffect)(function() {
                    I(u)
                }, [u]);
                var A = Ue && 0 < Ue ? null == p ? void 0 : p.slice(0, Ue) : p,
                    e = 0 < c,
                    w = e && x,
                    e = w || null !== r && (!e && s || w),
                    w = 0 < S - A.length && "+".concat(S - A.length);
                return C().createElement("li", {
                    className: "rbx-".concat(n, "game-server-item col-md-3 col-sm-4 col-xs-6")
                }, C().createElement("div", {
                    className: "card-item"
                }, C().createElement("div", {
                    className: "player-thumbnails-container"
                }, A.map(function(e) {
                    return C().createElement(Ve, {
                        key: e.playerToken,
                        player: e
                    })
                }), !!w && C().createElement("span", {
                    className: "avatar avatar-headshot-md player-avatar hidden-players-placeholder"
                }, w)), C().createElement("div", {
                    className: K()("rbx-".concat(n, "game-server-details"), "game-server-details", {
                        "border-right": a === We.Vip.key
                    })
                }, (!!l || !!e) && C().createElement("div", {
                    className: "section-header"
                }, l && C().createElement("span", {
                    className: "font-bold"
                }, l), C().createElement(ie, {
                    className: "link-menu rbx-".concat(n, "game-server-menu"),
                    translate: t,
                    placeId: i,
                    gameId: r,
                    vipServerId: c,
                    isOwner: x,
                    canManagePlace: s,
                    shutdownServer: function() {
                        g && b.warning(t(Ge.shutdownServerError)), h(!0), O.shutdownGameInstance(i, r, c).then(function() {
                            b.success(t(Ge.shutdownServerSuccess)), f()
                        }, function() {
                            b.warning(t(Ge.shutdownServerError))
                        }).finally(function() {
                            h(!1)
                        })
                    },
                    isLoading: g
                })), T && C().createElement(ye, {
                    ownerUserId: m.id,
                    ownerName: m.displayName
                }), C().createElement("div", {
                    className: "text-info rbx-game-status rbx-".concat(n, "game-server-status text-overflow")
                }, o), C().createElement(He, {
                    maxPlayerCount: y,
                    currentPlayerCount: S
                }), !T && C().createElement(xe, {
                    translate: t,
                    players: p
                }), v && C().createElement("div", {
                    className: "rbx-".concat(n, "game-server-alert")
                }, C().createElement("span", {
                    className: "icon-remove"
                }), t(Ge.slowGameWarning)), T && C().createElement(be, {
                    privateServerId: c,
                    isPaymentCancelled: !(null != E && E.active) && 0 < (null == E ? void 0 : E.price),
                    isInsufficientFunds: null == E ? void 0 : E.hasInsufficientFunds,
                    isServerInactive: P,
                    canRenew: (null == E ? void 0 : E.canRenew) && !(null != E && E.active),
                    setSubscription: I,
                    isLoading: g,
                    systemFeedbackService: b
                }), !P && !(null != E && E.isExpired) && C().createElement("span", {
                    "data-placeid": i
                }, C().createElement($.Button, {
                    className: "btn-full-width btn-control-xs rbx-".concat(n, "game-server-join game-server-join-btn"),
                    onClick: U(i, {
                        instanceId: r,
                        accessCode: d
                    }, a),
                    isDisabled: g || N.disableJoinButtonForFullServers && y <= S
                }, t(Ge.joinServerText))))))
            }
            _e.defaultProps = {
                id: null,
                cssKey: "",
                serverListType: "",
                canManagePlace: !1,
                name: "",
                vipServerId: 0,
                accessCode: "",
                showSlowGameMessage: !1,
                owner: void 0,
                vipServerSubscription: void 0,
                players: [],
                maxPlayers: 0,
                currentPlayersCount: 0
            }, _e.propTypes = {
                id: d().string,
                translate: d().func.isRequired,
                cssKey: d().string,
                serverListType: d().string,
                placeId: d().number.isRequired,
                name: d().string,
                vipServerId: d().number,
                maxPlayers: d().number,
                currentPlayersCount: d().number,
                vipServerSubscription: {
                    canRenew: d().bool.isRequired,
                    active: d().bool.isRequired,
                    hasInsufficientFunds: d().bool.isRequired,
                    price: d().number.isRequired,
                    expired: d().bool.isRequired
                },
                accessCode: d().string,
                gameServerStatus: d().string.isRequired,
                canManagePlace: d().bool,
                showSlowGameMessage: d().bool,
                owner: {
                    id: d().number.isRequired,
                    name: d().string.isRequired,
                    displayName: d().string.isRequired
                },
                players: d().arrayOf(d().any),
                onShutdownServerSuccess: d().func.isRequired,
                isLoading: d().bool.isRequired,
                setIsLoading: d().func.isRequired,
                systemFeedbackService: d().shape({
                    success: d().func.isRequired,
                    warning: d().func.isRequired
                }).isRequired
            };
            var ze = _e,
                $e = function() {
                    return ($e = Object.assign || function(e) {
                        for (var r, t = 1, n = arguments.length; t < n; t++)
                            for (var a in r = arguments[t]) Object.prototype.hasOwnProperty.call(r, a) && (e[a] = r[a]);
                        return e
                    }).apply(this, arguments)
                },
                Je = c,
                Ke = s,
                Qe = (0, v.withTranslations)(function(e) {
                    var r = e.translate,
                        t = e.options,
                        n = e.setOptions,
                        e = void 0 !== (e = e.isLoading) && e;
                    return C().createElement("div", {
                        className: "server-list-options"
                    }, C().createElement("div", {
                        className: "select-group"
                    }, C().createElement("label", {
                        className: "select-label text-label",
                        htmlFor: "sort-select"
                    }, r(Je.numberOfPlayers) || "Number of Players"), C().createElement("div", {
                        className: "rbx-select-group select-group"
                    }, C().createElement("select", {
                        onChange: function(r) {
                            m.EventStream.SendEventWithTarget("serverListOptionsInteraction", "sortSelect", {
                                pid: G(),
                                sort: r.currentTarget.value
                            }, m.EventStream.TargetTypes.WWW), n(function(e) {
                                return $e($e({}, e), {
                                    sortOrder: r.currentTarget.value
                                })
                            })
                        },
                        onFocus: function() {
                            m.EventStream.SendEventWithTarget("serverListOptionsInteraction", "sortDropdown", {
                                pid: G()
                            }, m.EventStream.TargetTypes.WWW)
                        },
                        disabled: e,
                        value: t.sortOrder,
                        id: "sort-select",
                        "data-testid": "sort-select",
                        className: "input-field rbx-select select-option"
                    }, C().createElement("option", {
                        value: Ke.descending
                    }, r(Je.descending) || "Descending"), C().createElement("option", {
                        value: Ke.ascending
                    }, r(Je.ascending) || "Ascending")), C().createElement("span", {
                        className: "icon-arrow icon-down-16x16"
                    }))), C().createElement("div", {
                        className: "checkbox"
                    }, C().createElement("input", {
                        onChange: function(r) {
                            m.EventStream.SendEventWithTarget("serverListOptionsInteraction", "filterSelect", {
                                pid: G(),
                                checked: r.currentTarget.checked
                            }, m.EventStream.TargetTypes.WWW), n(function(e) {
                                return $e($e({}, e), {
                                    excludeFullGames: r.currentTarget.checked
                                })
                            })
                        },
                        disabled: e,
                        type: "checkbox",
                        id: "filter-checkbox",
                        "data-testid": "filter-checkbox",
                        checked: t.excludeFullGames
                    }), C().createElement("label", {
                        className: "checkbox-label text-label",
                        htmlFor: "filter-checkbox"
                    }, r(Je.hideFullServers) || "Hide Full Servers")))
                }, H);

            function Xe() {
                return (Xe = Object.assign || function(e) {
                    for (var r = 1; r < arguments.length; r++) {
                        var t, n = arguments[r];
                        for (t in n) Object.prototype.hasOwnProperty.call(n, t) && (e[t] = n[t])
                    }
                    return e
                }).apply(this, arguments)
            }

            function Ye(e, r) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, r) {
                    if ("undefined" == typeof Symbol || !(Symbol.iterator in Object(e))) return;
                    var t = [],
                        n = !0,
                        a = !1,
                        i = void 0;
                    try {
                        for (var o, s = e[Symbol.iterator](); !(n = (o = s.next()).done) && (t.push(o.value), !r || t.length !== r); n = !0);
                    } catch (e) {
                        a = !0, i = e
                    } finally {
                        try {
                            n || null == s.return || s.return()
                        } finally {
                            if (a) throw i
                        }
                    }
                    return t
                }(e, r) || function(e, r) {
                    if (!e) return;
                    if ("string" == typeof e) return Ze(e, r);
                    var t = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === t && e.constructor && (t = e.constructor.name);
                    if ("Map" === t || "Set" === t) return Array.from(e);
                    if ("Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)) return Ze(e, r)
                }(e, r) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function Ze(e, r) {
                (null == r || r > e.length) && (r = e.length);
                for (var t = 0, n = new Array(r); t < r; t++) n[t] = e[t];
                return n
            }
            var er = (s = Ye((0, $.createSystemFeedback)(), 2))[0],
                rr = s[1],
                tr = t,
                nr = c,
                ar = a,
                ir = l;

            function or(e) {
                var d = e.translate,
                    r = e.headerTitle,
                    v = e.type,
                    m = e.placeId,
                    t = e.showLoadMoreButton,
                    n = e.gameInstances,
                    a = e.loadMoreGameInstances,
                    i = e.refreshGameInstances,
                    p = e.handleGameInstanceShutdownAtIndex,
                    f = e.userCanManagePlace,
                    o = e.loadingError,
                    b = e.isLoading,
                    g = e.setIsLoading,
                    h = v ? "".concat(v, "-") : "",
                    y = "rbx-".concat(h, "running-games"),
                    s = 0 === n.length,
                    l = "rbx-".concat(h, "game-server-item-container"),
                    c = "card-list rbx-".concat(h, "game-server-item-container"),
                    u = "rbx-".concat(h, "running-games-footer"),
                    S = (0, R.useMemo)(function() {
                        var e = n.length % ar;
                        return 0 < e && t ? n.slice(0, -1 * e) : n
                    }, [n, t]),
                    e = Ye((0, R.useState)(ir), 2),
                    w = e[0],
                    e = e[1];
                (0, R.useContext)(qe);
                return (0, R.useEffect)(function() {
                    null != i && i(w)
                }, [w]), C().createElement(R.Fragment, null, C().createElement(er, null), C().createElement("div", {
                    id: y,
                    className: "stack server-list-section",
                    "data-placeid": m,
                    "data-showshutdown": !0
                }, r && C().createElement("div", {
                    className: "container-header"
                }, C().createElement("div", {
                    className: "server-list-container-header"
                }, C().createElement("h2", {
                    className: "server-list-header"
                }, r), C().createElement($.Button, {
                    size: $.Button.sizes.extraSmall,
                    variant: $.Button.variants.control,
                    className: "btn-more rbx-refresh refresh-link-icon",
                    onClick: function() {
                        return i(w)
                    },
                    isDisabled: b
                }, d(nr.privateServerRefreshText) || "Refresh")), "" === v && C().createElement(Qe, {
                    translate: d,
                    isLoading: b,
                    options: w,
                    setOptions: e
                })), s ? C().createElement("div", {
                    className: "section-content-off empty-game-instances-container"
                }, b ? C().createElement($.Loading, null) : C().createElement("p", {
                    className: "no-servers-message"
                }, o ? d(nr.loadServersError) || "Unable to load servers." : d(nr.noServersFoundText))) : C().createElement(R.Fragment, null, C().createElement("ul", {
                    id: l,
                    className: c
                }, S.map(function(e, r) {
                    var t = e.id,
                        n = e.playing,
                        a = e.maxPlayers,
                        i = e.pfs,
                        o = e.vipServerId,
                        s = e.vipServerSubscription,
                        l = e.accessCode,
                        c = e.name,
                        u = e.owner,
                        e = e.players;
                    return C().createElement(ze, Xe({
                        key: y
                    }, {
                        id: t,
                        translate: d,
                        cssKey: h,
                        serverListType: v,
                        placeId: m,
                        canManagePlace: f,
                        name: c,
                        vipServerId: o,
                        vipServerSubscription: s,
                        owner: u,
                        accessCode: l,
                        currentPlayersCount: n || e.length,
                        showSlowGameMessage: i < tr,
                        gameServerStatus: d(nr.playerCountText, {
                            currentPlayers: n || e.length,
                            maximumAllowedPlayers: a
                        }),
                        players: e,
                        onShutdownServerSuccess: function() {
                            p(r)
                        },
                        systemFeedbackService: rr,
                        isLoading: b,
                        setIsLoading: g,
                        maxPlayers: a
                    }))
                })), C().createElement("div", {
                    className: u
                }, t && C().createElement($.Button, {
                    type: "button",
                    onClick: function() {
                        return a(w)
                    },
                    className: "rbx-running-games-load-more",
                    variant: $.Button.variants.control,
                    width: $.Button.widths.full,
                    isDisabled: b
                }, d(nr.loadMoreButtonText))))))
            }
            or.defaultProps = {
                type: "",
                showLoadMoreButton: !1,
                loadMoreButtonText: "",
                headerTitle: "",
                gameInstances: []
            }, or.propTypes = {
                translate: d().func.isRequired,
                type: d().string,
                placeId: d().number.isRequired,
                headerTitle: d().string,
                loadMoreGameInstances: d().func.isRequired,
                showLoadMoreButton: d().bool,
                loadMoreButtonText: d().string,
                gameInstances: d().arrayOf(d().any),
                refreshGameInstances: d().func.isRequired,
                handleGameInstanceShutdownAtIndex: d().func.isRequired,
                userCanManagePlace: d().bool.isRequired,
                isLoading: d().bool.isRequired,
                setIsLoading: d().func.isRequired,
                loadingError: d().bool.isRequired
            };
            var sr = (0, v.withTranslations)(or, H);

            function lr(e) {
                var r = e.type,
                    t = e.translate,
                    n = e.headerTitleResource,
                    a = e.getGameServers,
                    i = W(a),
                    o = i.servers,
                    s = i.loadMoreServers,
                    l = i.refreshServers,
                    c = i.removeServerAtIndex,
                    u = i.hasNext,
                    d = i.isBusy,
                    v = i.setIsBusy,
                    e = i.hasError,
                    a = i.metaData,
                    i = a.placeId,
                    a = a.userCanManagePlace;
                return C().createElement(sr, {
                    type: r,
                    placeId: i,
                    gameInstances: o,
                    headerTitle: t(n),
                    showLoadMoreButton: u,
                    loadMoreGameInstances: s,
                    refreshGameInstances: l,
                    handleGameInstanceShutdownAtIndex: c,
                    userCanManagePlace: a,
                    isLoading: d,
                    setIsLoading: v,
                    loadingError: e
                })
            }
            lr.defaultProps = {
                type: ""
            }, lr.propTypes = {
                type: d().string,
                translate: d().func.isRequired,
                headerTitleResource: d().string.isRequired,
                getGameServers: d().func.isRequired
            };
            var cr = (0, v.withTranslations)(lr, H);

            function ur(e, r) {
                (null == r || r > e.length) && (r = e.length);
                for (var t = 0, n = new Array(r); t < r; t++) n[t] = e[t];
                return n
            }
            var a = (0, $.createModal)(),
                dr = (H = (l = 2, function(e) {
                    if (Array.isArray(e)) return e
                }(a = a) || function(e, r) {
                    if ("undefined" == typeof Symbol || !(Symbol.iterator in Object(e))) return;
                    var t = [],
                        n = !0,
                        a = !1,
                        i = void 0;
                    try {
                        for (var o, s = e[Symbol.iterator](); !(n = (o = s.next()).done) && (t.push(o.value), !r || t.length !== r); n = !0);
                    } catch (e) {
                        a = !0, i = e
                    } finally {
                        try {
                            n || null == s.return || s.return()
                        } finally {
                            if (a) throw i
                        }
                    }
                    return t
                }(a, l) || function(e, r) {
                    if (!e) return;
                    if ("string" == typeof e) return ur(e, r);
                    var t = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === t && e.constructor && (t = e.constructor.name);
                    if ("Map" === t || "Set" === t) return Array.from(e);
                    if ("Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)) return ur(e, r)
                }(a, l) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()))[0],
                l = H[1],
                vr = c,
                mr = n;

            function pr() {
                return (pr = Object.assign || function(e) {
                    for (var r = 1; r < arguments.length; r++) {
                        var t, n = arguments[r];
                        for (t in n) Object.prototype.hasOwnProperty.call(n, t) && (e[t] = n[t])
                    }
                    return e
                }).apply(this, arguments)
            }

            function fr(e, r) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, r) {
                    if ("undefined" == typeof Symbol || !(Symbol.iterator in Object(e))) return;
                    var t = [],
                        n = !0,
                        a = !1,
                        i = void 0;
                    try {
                        for (var o, s = e[Symbol.iterator](); !(n = (o = s.next()).done) && (t.push(o.value), !r || t.length !== r); n = !0);
                    } catch (e) {
                        a = !0, i = e
                    } finally {
                        try {
                            n || null == s.return || s.return()
                        } finally {
                            if (a) throw i
                        }
                    }
                    return t
                }(e, r) || function(e, r) {
                    if (!e) return;
                    if ("string" == typeof e) return br(e, r);
                    var t = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === t && e.constructor && (t = e.constructor.name);
                    if ("Map" === t || "Set" === t) return Array.from(e);
                    if ("Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)) return br(e, r)
                }(e, r) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function br(e, r) {
                (null == r || r > e.length) && (r = e.length);
                for (var t = 0, n = new Array(r); t < r; t++) n[t] = e[t];
                return n
            }
            var gr = c,
                n = (H = fr((hr.defaultProps = {
                    serverName: "",
                    createServerError: !1,
                    loading: !1
                }, hr.propTypes = {
                    translate: d().func.isRequired,
                    privateServerTranslate: d().func.isRequired,
                    thumbnail: d().node.isRequired,
                    assetName: d().string.isRequired,
                    expectedPrice: d().number.isRequired,
                    serverName: d().string,
                    onAction: d().func.isRequired,
                    onServerNameChange: d().func.isRequired,
                    createServerError: d().bool,
                    loading: d().bool,
                    clearForm: d().func.isRequired
                }, [(0, v.withTranslations)(hr, _), l]), 2))[0],
                H = H[1];

            function hr(e) {
                var r = e.translate,
                    t = e.privateServerTranslate,
                    n = e.assetName,
                    a = e.expectedPrice,
                    i = e.thumbnail,
                    o = e.serverName,
                    s = e.onAction,
                    l = e.onServerNameChange,
                    c = e.clearForm,
                    u = e.loading,
                    e = C().createElement("span", {
                        className: "purchase-private-server-modal-footer-text"
                    }, C().createElement(se.BalanceAfterSaleText, {
                        expectedPrice: a
                    }), " ", t(vr.createServerFooterDescription) || "This is a subscription-based feature. It will auto-renew once a month until you cancel the subscription."),
                    i = C().createElement("div", {
                        className: "private-server-purchase"
                    }, C().createElement("div", {
                        className: "modal-list-item private-server-main-text",
                        dangerouslySetInnerHTML: {
                            __html: t(vr.createPrivateServerPriceText, {
                                target: (0, oe.renderToString)(C().createElement(se.PriceLabel, {
                                    price: a
                                }))
                            })
                        }
                    }), C().createElement("div", {
                        className: "modal-list-item"
                    }, C().createElement("span", {
                        className: "text-label private-server-game-name"
                    }, t(vr.gameNameText)), C().createElement("span", {
                        className: "game-name"
                    }, n)), C().createElement("div", {
                        className: "modal-list-item private-server-name-input"
                    }, C().createElement("span", {
                        className: "text-label"
                    }, t(vr.serverNameText)), C().createElement("div", {
                        className: "form-group form-has-feedback"
                    }, C().createElement("input", {
                        type: "text",
                        value: o,
                        onChange: l,
                        maxLength: mr,
                        className: "form-control input-field private-server-name"
                    }), 0 < o.length && C().createElement("p", {
                        className: "form-control-label text-secondary"
                    }, o.length, "/", mr))), C().createElement("div", {
                        className: "modal-image-container"
                    }, i));
                return C().createElement(dr, {
                    id: "purchase-private-server-modal",
                    title: t(vr.createPrivateServerTitle),
                    body: i,
                    actionButtonText: r(vr.buyNowText),
                    neutralButtonText: r(vr.cancelAction),
                    footerText: e,
                    onAction: s,
                    onNeutral: c,
                    loading: u,
                    actionButtonShow: !0,
                    disableActionButton: 0 === o.length
                })
            }
            var yr = (H = fr((0, se.createItemPurchase)({
                    customPurchaseVerificationModal: n,
                    customPurchaseVerificationModalService: H
                }), 2))[0],
                Sr = H[1],
                wr = P;

            function Er(e) {
                var r = e.privateServerTranslate,
                    i = e.translate,
                    o = e.universeId,
                    s = e.price,
                    t = e.placeName,
                    n = e.canCreatePrivateServer,
                    a = e.productId,
                    l = e.currency,
                    c = e.sellerId,
                    u = e.sellerName,
                    e = fr((0, R.useState)(""), 2),
                    d = e[0],
                    v = e[1];
                wr().gameDetailPreopenCreatePrivateServerModal && Sr.start();
                e = C().createElement(Q.Thumbnail2d, {
                    type: Q.ThumbnailTypes.gameIcon,
                    size: Q.DefaultThumbnailSize,
                    targetId: o,
                    containerClass: "modal-thumb",
                    imgClassName: "original-image",
                    format: Q.ThumbnailFormat.jpeg
                });
                return C().createElement("span", {
                    className: "rbx-private-server-create"
                }, C().createElement($.Button, {
                    className: "btn-more rbx-private-server-create-button",
                    size: $.Button.sizes.medium,
                    variant: $.Button.variants.secondary,
                    onClick: Sr.start,
                    isDisabled: !n
                }, r(gr.createPrivateServerTitle)), C().createElement(yr, pr({
                    productId: a,
                    expectedPrice: s,
                    thumbnail: e,
                    assetName: t,
                    assetType: r(gr.privateServerLabel),
                    sellerName: u,
                    expectedCurrency: l,
                    expectedSellerId: c,
                    handlePurchase: function(e) {
                        var r = e.handleError,
                            t = e.setLoading,
                            n = e.openConfirmation,
                            a = e.closeAll;
                        t(!0), O.createPrivateServer(o, d, s).then(function(e) {
                            e = e.data;
                            t(!1), a();
                            var r = e.vipServerId;
                            n({
                                transactionVerb: se.TransactionVerb.Bought,
                                onAccept: function() {
                                    window.location.href = b(r)
                                }
                            })
                        }, function(e) {
                            var e = e.data;
                            t(!1), a();
                            e = null !== (e = null === (e = e.errors) || void 0 === e ? void 0 : e[0].userFacingMessage) && void 0 !== e ? e : i(gr.purchaseError);
                            r({
                                showDivId: se.errorTypeIds.transactionFailure,
                                title: i(gr.transactionFailedHeading),
                                errorMsg: e
                            })
                        })
                    },
                    customProps: {
                        privateServerTranslate: r,
                        serverName: d,
                        onServerNameChange: function(e) {
                            e = e.target.value;
                            return v(e)
                        },
                        clearForm: function() {
                            return v(""), !0
                        }
                    }
                }, {
                    isPrivateServer: !0,
                    isPlace: !0
                })), !n && C().createElement("span", {
                    className: "text-footer rbx-private-server-create-disabled-text"
                }, i(gr.maxFreePrivateServersText)))
            }
            Er.defaultProps = {
                canCreatePrivateServer: !0,
                currency: 1
            }, Er.propTypes = {
                translate: d().func.isRequired,
                privateServerTranslate: d().func.isRequired,
                universeId: d().number.isRequired,
                price: d().number.isRequired,
                placeName: d().string.isRequired,
                canCreatePrivateServer: d().bool,
                currency: d().number,
                productId: d().number.isRequired,
                sellerId: d().number.isRequired,
                sellerName: d().string.isRequired
            };
            var Ir = (0, v.withTranslations)(Er, z);

            function xr() {
                return (xr = Object.assign || function(e) {
                    for (var r = 1; r < arguments.length; r++) {
                        var t, n = arguments[r];
                        for (t in n) Object.prototype.hasOwnProperty.call(n, t) && (e[t] = n[t])
                    }
                    return e
                }).apply(this, arguments)
            }

            function Tr(e, r, t, n, a, i, o) {
                try {
                    var s = e[i](o),
                        l = s.value
                } catch (e) {
                    return void t(e)
                }
                s.done ? r(l) : Promise.resolve(l).then(n, a)
            }

            function Pr(e, r) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, r) {
                    if ("undefined" == typeof Symbol || !(Symbol.iterator in Object(e))) return;
                    var t = [],
                        n = !0,
                        a = !1,
                        i = void 0;
                    try {
                        for (var o, s = e[Symbol.iterator](); !(n = (o = s.next()).done) && (t.push(o.value), !r || t.length !== r); n = !0);
                    } catch (e) {
                        a = !0, i = e
                    } finally {
                        try {
                            n || null == s.return || s.return()
                        } finally {
                            if (a) throw i
                        }
                    }
                    return t
                }(e, r) || function(e, r) {
                    if (!e) return;
                    if ("string" == typeof e) return Nr(e, r);
                    var t = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === t && e.constructor && (t = e.constructor.name);
                    if ("Map" === t || "Set" === t) return Array.from(e);
                    if ("Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)) return Nr(e, r)
                }(e, r) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function Nr(e, r) {
                (null == r || r > e.length) && (r = e.length);
                for (var t = 0, n = new Array(r); t < r; t++) n[t] = e[t];
                return n
            }
            var Ar = c,
                Rr = i,
                Cr = J,
                Lr = u;

            function Or(e) {
                var r, t = e.translate,
                    n = e.showServers,
                    a = e.intl,
                    i = e.isAboutTab,
                    o = W(O.getVipGameInstances, n),
                    s = o.servers,
                    l = o.loadMoreServers,
                    c = o.refreshServers,
                    u = o.clearServerAtIndex,
                    d = o.hasNext,
                    v = o.isBusy,
                    m = o.setIsBusy,
                    p = o.hasError,
                    f = o.metaData,
                    b = f.universeId,
                    g = f.placeId,
                    h = f.placeName,
                    y = f.canCreateServer,
                    S = f.price,
                    w = f.userCanManagePlace,
                    E = f.sellerId,
                    I = f.sellerName,
                    x = f.privateServerProductId,
                    T = (P = s, r = Y().gameDetailPrivateServerLimit, P.forEach(function(e) {
                        e.owner.id === L.authenticatedUser.id && --r
                    }), 0 < r),
                    e = 0 !== x,
                    o = '<a class="text-link" href="#!/game-instances">'.concat(t(Ar.serversText), "</a>"),
                    f = '<a class="text-link" href="'.concat(A(a.getRobloxLocale()), '">').concat(t(Ar.privateServerHeader), "</a>"),
                    P = Pr((0, R.useState)(null), 2),
                    a = P[0],
                    N = P[1];
                return (0, R.useEffect)(function() {
                    var s;
                    i && (s = regeneratorRuntime.mark(function e() {
                        var r;
                        return regeneratorRuntime.wrap(function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, Le(Cr.gameDetails, Lr.gameDetails);
                                case 2:
                                    r = e.sent, r = !(null == r || !r.ShouldHidePrivateServersInAboutTab), N(r);
                                case 5:
                                case "end":
                                    return e.stop()
                            }
                        }, e)
                    }), function() {
                        var e = this,
                            o = arguments;
                        new Promise(function(r, t) {
                            var n = s.apply(e, o);

                            function a(e) {
                                Tr(n, r, t, a, i, "next", e)
                            }

                            function i(e) {
                                Tr(n, r, t, a, i, "throw", e)
                            }
                            a(void 0)
                        })
                    }())
                }, [i]), a && i && !e ? null : C().createElement("div", {
                    id: "rbx-private-servers",
                    className: "stack"
                }, C().createElement("div", {
                    className: "container-header"
                }, C().createElement("h2", null, t(Ar.privateServerHeader)), n && e && C().createElement($.Button, {
                    size: $.Button.sizes.extraSmall,
                    variant: $.Button.variants.control,
                    className: "btn-more rbx-refresh refresh-link-icon",
                    onClick: function() {
                        return c()
                    },
                    isDisabled: v
                }, t(Ar.privateServerRefreshText)), C().createElement($.Tooltip, {
                    id: "private-server-tooltip",
                    placement: "bottom",
                    content: t(Ar.privateServerTooltip)
                }, C().createElement("span", {
                    className: "icon-moreinfo"
                }))), e ? C().createElement(R.Fragment, null, C().createElement("div", {
                    className: "create-server-banner section-content remove-panel"
                }, C().createElement("div", {
                    className: "create-server-banner-text text"
                }, y && C().createElement("span", {
                    className: "private-server-price",
                    dangerouslySetInnerHTML: {
                        __html: t(Ar.privateServerPrice, {
                            price: (0, oe.renderToString)(C().createElement(se.PriceLabel, {
                                price: S
                            }))
                        })
                    }
                }), C().createElement("span", {
                    className: "play-with-others-text"
                }, t(Ar.privateServerPlayWithOthers), C().createElement("br", null), !n && C().createElement("span", {
                    dangerouslySetInnerHTML: {
                        __html: t(Ar.seeAllPrivateServersText, {
                            serversLink: o
                        })
                    }
                }))), y && C().createElement(Ir, xr({
                    privateServerTranslate: t
                }, {
                    placeName: h,
                    universeId: b,
                    price: S,
                    canCreatePrivateServer: T,
                    sellerId: E,
                    sellerName: I,
                    productId: x
                }))), C().createElement("div", {
                    className: "section tab-server-only"
                }, n && C().createElement(sr, {
                    type: Rr.Vip.key,
                    placeId: g,
                    gameInstances: s,
                    showLoadMoreButton: d,
                    loadMoreGameInstances: l,
                    handleGameInstanceShutdownAtIndex: u,
                    userCanManagePlace: w,
                    isLoading: v,
                    setIsLoading: m,
                    loadingError: p
                }))) : C().createElement("div", {
                    className: "section-content-off",
                    dangerouslySetInnerHTML: {
                        __html: t(Ar.privateServersNotSupported, {
                            vipServersLink: f
                        })
                    }
                }))
            }
            Or.defaultProps = {
                showServers: !0,
                isAboutTab: !1
            }, Or.propTypes = {
                translate: d().func.isRequired,
                showServers: d().bool,
                intl: d().shape({
                    getRobloxLocale: d().func.isRequired
                }).isRequired,
                isAboutTab: d().bool
            };
            var Fr = (0, v.withTranslations)(Or, V),
                kr = (V = {
                    gameDetailTabs: V = {
                        about: "tab-about",
                        store: "tab-store",
                        servers: "tab-game-instances"
                    },
                    gameDetailHashesToTabs: {
                        "#!/about": V.about,
                        "#!/store": V.store,
                        "#!/game-instances": V.servers
                    }
                }).gameDetailTabs;

            function Mr(e, r) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, r) {
                    if ("undefined" == typeof Symbol || !(Symbol.iterator in Object(e))) return;
                    var t = [],
                        n = !0,
                        a = !1,
                        i = void 0;
                    try {
                        for (var o, s = e[Symbol.iterator](); !(n = (o = s.next()).done) && (t.push(o.value), !r || t.length !== r); n = !0);
                    } catch (e) {
                        a = !0, i = e
                    } finally {
                        try {
                            n || null == s.return || s.return()
                        } finally {
                            if (a) throw i
                        }
                    }
                    return t
                }(e, r) || function(e, r) {
                    if (!e) return;
                    if ("string" == typeof e) return qr(e, r);
                    var t = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === t && e.constructor && (t = e.constructor.name);
                    if ("Map" === t || "Set" === t) return Array.from(e);
                    if ("Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)) return qr(e, r)
                }(e, r) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function qr(e, r) {
                (null == r || r > e.length) && (r = e.length);
                for (var t = 0, n = new Array(r); t < r; t++) n[t] = e[t];
                return n
            }

            function jr() {
                if (!Gr()) return null;
                var e = Br[window.location.hash];
                return e || Dr.about
            }
            var Dr = V.gameDetailTabs,
                Br = V.gameDetailHashesToTabs,
                Gr = function() {
                    var r = document.getElementById("horizontal-tabs");
                    if (r) {
                        var e = Object.values(kr);
                        try {
                            e.forEach(function(e) {
                                if (!r.querySelector("#".concat(e))) throw new Error("Unable to find horizontal tab with id ".concat(e))
                            })
                        } catch (e) {
                            return console.log(e.message), !1
                        }
                        return !0
                    }
                    return !1
                },
                Ur = function() {
                    function e() {
                        n(jr())
                    }
                    var r = Mr((0, R.useState)(jr()), 2),
                        t = r[0],
                        n = r[1];
                    return (0, R.useEffect)(function() {
                        return window.addEventListener("hashchange", e),
                            function() {
                                window.removeEventListener("hashchange", e)
                            }
                    }, []), t
                };

            function Wr(e, r) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, r) {
                    if ("undefined" == typeof Symbol || !(Symbol.iterator in Object(e))) return;
                    var t = [],
                        n = !0,
                        a = !1,
                        i = void 0;
                    try {
                        for (var o, s = e[Symbol.iterator](); !(n = (o = s.next()).done) && (t.push(o.value), !r || t.length !== r); n = !0);
                    } catch (e) {
                        a = !0, i = e
                    } finally {
                        try {
                            n || null == s.return || s.return()
                        } finally {
                            if (a) throw i
                        }
                    }
                    return t
                }(e, r) || function(e, r) {
                    if (!e) return;
                    if ("string" == typeof e) return Hr(e, r);
                    var t = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === t && e.constructor && (t = e.constructor.name);
                    if ("Map" === t || "Set" === t) return Array.from(e);
                    if ("Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)) return Hr(e, r)
                }(e, r) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function Hr(e, r) {
                (null == r || r > e.length) && (r = e.length);
                for (var t = 0, n = new Array(r); t < r; t++) n[t] = e[t];
                return n
            }
            var Vr = i,
                _r = c,
                zr = V.gameDetailTabs;

            function $r() {
                var e = Wr((0, R.useState)(!1), 2),
                    r = e[0],
                    t = e[1],
                    n = Ur();
                return (0, R.useEffect)(function() {
                    r || n === zr.servers && t(!0)
                }, [n, r]), n && !r ? C().createElement(R.Fragment, null) : C().createElement(Ie, null, C().createElement(Fr, null), C().createElement(cr, {
                    type: Vr.friend.key,
                    getGameServers: O.getFriendsGameInstances,
                    headerTitleResource: _r.friendsServersTitle
                }), C().createElement(cr, {
                    getGameServers: O.getPublicGameInstances,
                    headerTitleResource: _r.publicServersTitle
                }))
            }
            $r.propTypes = {};
            var Jr = $r,
                Kr = "running-game-instances-container",
                Qr = "private-server-container-about-tab";
            (0, o.ready)(function() {
                document.getElementById(Kr) && (0, e.render)(C().createElement(Jr, null), document.getElementById(Kr)), document.getElementById(Qr) && (0, e.render)(C().createElement(Fr, {
                    showServers: !1,
                    isAboutTab: !0
                }), document.getElementById(Qr))
            })
        }()
}();
//# sourceMappingURL=https://js.rbxcdn.com/e9e933a580a17188724e-serverList.bundle.min.js.map

/* Bundle detector */
window.Roblox && window.Roblox.BundleDetector && window.Roblox.BundleDetector.bundleDetected("ServerList");