! function() {
    "use strict";

    function c(e, a) {
        return e.filter(function(e) {
            var t;
            return (null === (t = e.presence) || void 0 === t ? void 0 : t.universeId) === a && (null === (e = e.presence) || void 0 === e ? void 0 : e.userPresenceType) === l.Presence.PresenceTypes.InGame
        })
    }

    function a(e) {
        return e.charAt(0).toUpperCase() + e.slice(1)
    }

    function t(a) {
        return Object.keys(a).reduce(function(e, t) {
            return "object" == typeof a[t] && a[t] && (e[t] = JSON.stringify(a[t])), "number" == typeof a[t] && (e[t] = a[t]), "string" == typeof a[t] && (e[t] = encodeURIComponent(a[t])), "boolean" == typeof a[t] && (e[t] = a[t] ? 1 : 0), e
        }, {})
    }

    function e() {
        return document.getElementById("recommended-games-container")
    }

    function m(e) {
        var t = (a = window.getComputedStyle(e)).marginLeft,
            a = a.marginRight;
        return e.getBoundingClientRect().width + (parseInt(t, 10) || 0) + (parseInt(a, 10) || 0)
    }

    function d(e) {
        var e = (t = e.getBoundingClientRect()).top,
            t = t.height;
        return 0 < e + t / 2 && window.innerHeight > e + t / 2
    }
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
        f = React,
        u = n.n(f),
        r = ReactDOM,
        i = CoreUtilities,
        p = ReactStyleGuide,
        o = ReactUtilities,
        g = CoreRobloxUtilities,
        l = (HeaderScripts, Roblox),
        s = l.EnvironmentUrls.gamesApi,
        b = {
            url: {
                getOmniRecommendations: function(e, t) {
                    return {
                        url: s + "/v1/games/omni-recommendations?model.pageType=" + e + (void 0 !== t ? "&model.sessionId=" + t : ""),
                        withCredentials: !0
                    }
                },
                getOmniRecommendationsMetadata: {
                    url: s + "/v1/games/omni-recommendations-metadata",
                    withCredentials: !0
                },
                getGameList: {
                    url: s + "/v1/games/list",
                    withCredentials: !0
                },
                getGamePasses: function(e, t) {
                    return {
                        url: i.urlService.getAbsoluteUrl("/Games/GetGamePassesPaged?placeId=" + e + "&startIndex=0&maxRows=" + t),
                        withCredentials: !0
                    }
                },
                getGameRecommendations: function(e) {
                    return {
                        url: s + "/v1/games/recommendations/game/" + e,
                        withCredentials: !0
                    }
                },
                getGameSorts: {
                    url: s + "/v1/games/sorts",
                    withCredentials: !0
                },
                getUniverseVoiceStatus: function(e) {
                    return {
                        withCredentials: !0,
                        url: l.EnvironmentUrls.voiceApi + "/v1/settings/universe/" + e
                    }
                },
                getVoiceOptInStatus: {
                    withCredentials: !0,
                    url: l.EnvironmentUrls.voiceApi + "/v1/settings/user-opt-in"
                }
            },
            defaultCacheCriteria: {
                refreshCache: !1,
                expirationWindowMS: 3e4,
                useCache: !0
            }
        },
        v = function(e, o, l, s) {
            return new(l = l || Promise)(function(a, t) {
                function n(e) {
                    try {
                        i(s.next(e))
                    } catch (e) {
                        t(e)
                    }
                }

                function r(e) {
                    try {
                        i(s.throw(e))
                    } catch (e) {
                        t(e)
                    }
                }

                function i(e) {
                    var t;
                    e.done ? a(e.value) : ((t = e.value) instanceof l ? t : new l(function(e) {
                        e(t)
                    })).then(n, r)
                }
                i((s = s.apply(e, o || [])).next())
            })
        },
        y = function(a, n) {
            var r, i, o, l = {
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
                        for (; l;) try {
                            if (r = 1, i && (o = 2 & t[0] ? i.return : t[0] ? i.throw || ((o = i.return) && o.call(i), 0) : i.next) && !(o = o.call(i, t[1])).done) return o;
                            switch (i = 0, o && (t = [2 & t[0], o.value]), t[0]) {
                                case 0:
                                case 1:
                                    o = t;
                                    break;
                                case 4:
                                    return l.label++, {
                                        value: t[1],
                                        done: !1
                                    };
                                case 5:
                                    l.label++, i = t[1], t = [0];
                                    continue;
                                case 7:
                                    t = l.ops.pop(), l.trys.pop();
                                    continue;
                                default:
                                    if (!(o = 0 < (o = l.trys).length && o[o.length - 1]) && (6 === t[0] || 2 === t[0])) {
                                        l = 0;
                                        continue
                                    }
                                    if (3 === t[0] && (!o || t[1] > o[0] && t[1] < o[3])) {
                                        l.label = t[1];
                                        break
                                    }
                                    if (6 === t[0] && l.label < o[1]) {
                                        l.label = o[1], o = t;
                                        break
                                    }
                                    if (o && l.label < o[2]) {
                                        l.label = o[2], l.ops.push(t);
                                        break
                                    }
                                    o[2] && l.ops.pop(), l.trys.pop();
                                    continue
                            }
                            t = n.call(a, l)
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
        h = g.dataStores.gamesDataStore,
        P = (g.dataStores.userDataStoreV2, g.dataStores.userDataStore.FriendsUserSortType, function(t, a) {
            return v(void 0, void 0, Promise, function() {
                return y(this, function(e) {
                    switch (e.label) {
                        case 0:
                            return [4, i.httpService.get(b.url.getGameRecommendations(t), {
                                maxRows: a
                            })];
                        case 1:
                            return [2, e.sent().data]
                    }
                })
            })
        }),
        I = function(a) {
            return v(void 0, void 0, Promise, function() {
                var t;
                return y(this, function(e) {
                    switch (e.label) {
                        case 0:
                            return [4, h.getPlaceDetails([a])];
                        case 1:
                            return t = e.sent().data, [2, (void 0 === t ? [] : t)[0]]
                    }
                })
            })
        },
        w = function(e, t) {
            for (var a = 0, n = t.length, r = e.length; a < n; a++, r++) e[r] = t[a];
            return e
        },
        E = (new l.Intl).getDateTimeFormatter(),
        L = i.urlService.parseQueryString,
        N = i.abbreviateNumber.getAbbreviatedValue,
        S = i.numberFormat.getNumberFormat,
        T = {
            capitalize: a,
            humanizeCamelCase: function(e) {
                var t = e.split(/([A-Z][a-z]*)/g);
                return 1 === t.length ? e : a(t.filter(function(e) {
                    return 0 !== e.length
                }).join(" "))
            },
            parseEventParams: t,
            getInGameFriends: c,
            getVotePercentage: function(e, t) {
                var a = 0;
                if (!Number.isNaN(e) && !Number.isNaN(t)) {
                    if (0 === e && 0 === t) return;
                    a = 0 === e && 0 !== t ? 0 : 0 !== e && 0 === t || 100 < (a = Math.floor(e / (e + t) * 100)) ? 100 : a
                }
                return a + "%"
            },
            getGearIconName: function(e) {
                return {
                    PowerUps: "PowerUp",
                    Music: "Musical",
                    PersonalTransport: "Transport"
                }[e] || e
            },
            getNumberFormat: S,
            getAbbreviatedValue: N,
            dateTimeFormatter: E,
            parseQueryString: L,
            composeQueryString: function(e) {
                e = i.urlService.composeQueryString(e);
                return e ? "?" + e : ""
            },
            calculateImpressedIndexes: function(e, a) {
                if (void 0 === e) return Array.from(new Array(a[1] - a[0] + 1), function(e, t) {
                    return t + a[0]
                });
                var n = a[0] < e[0] ? [a[0], e[0]] : void 0,
                    r = a[1] > e[1] ? [e[1], a[1]] : void 0,
                    t = n ? new Array(n[1] - n[0]).fill(0).map(function(e, t) {
                        return t + n[0]
                    }) : [],
                    e = r ? new Array(r[1] - r[0]).fill(0).map(function(e, t) {
                        return t + r[0] + 1
                    }) : [];
                return w(w([], t), e)
            },
            splitArray: function(a, n) {
                if (0 === a.length || 0 === n) return [a];
                var e = Math.ceil(a.length / n);
                return new Array(e).fill(0).map(function(e, t) {
                    return a.slice(t * n, (t + 1) * n)
                })
            }
        },
        D = RobloxThumbnails,
        G = function(e, t, a) {
            return void 0 === a && (a = {}), i.urlService.getUrlWithQueries(g.entityUrl.game.getRelativePath(e) + "/" + i.seoName.formatSeoName(t), a)
        },
        E = {
            maxTilesInGameImpressionsEvent: 25,
            numberOfInGameIcons: 3,
            numberOfInGameNames: 1,
            numberOfGameTilesPerLoad: 60,
            numberOfGamePassesPerLoad: 50,
            keyBoardEventCode: {
                enter: "Enter"
            }
        },
        C = {
            maxTilesPerCarouselPage: 6,
            voiceLabelIndex: 3
        },
        R = {
            LabelSponsoredAd: "Label.SponsoredAd",
            LabelNoSearchResults: "LabelNoSearchResults",
            LabelPlayingOnePlusUsersWithComma: "LabelPlayingOnePlusUsersWithComma",
            LabelPlayingOneUser: "LabelPlayingOneUser"
        },
        x = {
            HeadingDescription: "Heading.Description",
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
            HeadingRecommendedGames: "Heading.RecommendedGames"
        },
        L = PropTypes,
        O = "Label.ContextMenuTitle",
        k = "Action.ViewDetails",
        A = "Action.JoinGame",
        U = {
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

    function M(e) {
        var t = e.game,
            a = e.translate,
            n = t.universeId,
            r = t.name,
            e = t.referralUrl,
            t = t.isPlayable,
            n = u().createElement(D.Thumbnail2d, {
                type: D.ThumbnailTypes.gameIcon,
                size: D.DefaultThumbnailSize,
                targetId: n,
                imgClassName: "game-card-thumb",
                format: D.ThumbnailFormat.jpeg
            });
        return u().createElement("div", {
            className: "border-bottom player-interaction-container"
        }, u().createElement("span", {
            className: "cursor-pointer game-icon"
        }, u().createElement(p.Link, {
            url: e,
            className: "game-card-link"
        }, n)), u().createElement("span", {
            className: "game-info-container"
        }, u().createElement(p.Link, {
            url: e,
            className: "game-name"
        }, r), !t && u().createElement(p.Link, {
            url: e,
            className: "btn-control-sm game-link"
        }, a(k))))
    }
    M.propTypes = {
        game: (L = n.n(L))().shape({
            universeId: L().number,
            placeId: L().number,
            name: L().string,
            playerCount: L().number,
            isShowSponsoredLabel: L().bool,
            nativeAdData: L().string,
            imageUrl: L().string,
            referralUrl: L().string,
            isPlayable: L().bool
        }).isRequired,
        translate: L().func.isRequired
    };
    var F = M;

    function j(e) {
        var t = e.playerId,
            e = e.altName;
        return u().createElement("div", {
            className: "avatar-card-link"
        }, u().createElement(D.Thumbnail2d, {
            type: D.ThumbnailTypes.avatarHeadshot,
            size: D.ThumbnailAvatarHeadshotSize.size48,
            targetId: t,
            imgClassName: "avatar-card-image",
            format: D.ThumbnailFormat.png,
            altName: e
        }))
    }
    j.defaultProps = {
        altName: ""
    }, j.propTypes = {
        playerId: L().number.isRequired,
        altName: L().string
    };
    var V = j;

    function q(e) {
        var t = e.playerData,
            i = e.dismissModal,
            a = e.isPlayable,
            n = e.translate,
            e = t.presence,
            o = e.rootPlaceId,
            l = e.placeId,
            s = e.gameId,
            c = t.id,
            t = t.nameForDisplay;
        return u().createElement("div", {
            className: "border-bottom player-info"
        }, u().createElement("span", {
            className: "player-name"
        }, t), u().createElement(p.Button, {
            className: "cursor-pointer btn-primary-sm player-action",
            onClick: function(e) {
                var t = {
                        rootPlaceId: o,
                        placeId: l
                    },
                    a = g.playGameService.buildPlayGameProperties(o, l, s, c),
                    n = U.joinGameInPlacesList,
                    r = U.gamePlayIntentInPlacesList,
                    r = {
                        eventName: n.name,
                        ctx: n.ctx,
                        properties: t,
                        gamePlayIntentEventCtx: r.ctx
                    };
                g.playGameService.launchGame(a, r), i(e)
            },
            isDisabled: !a
        }, n(A)))
    }
    q.propTypes = {
        playerData: L().shape({
            presence: L().shape({
                rootPlaceId: L().number,
                placeId: L().number,
                gameId: L().string
            }),
            id: L().number,
            nameForDisplay: L().string
        }).isRequired,
        dismissModal: L().func.isRequired,
        isPlayable: L().bool.isRequired,
        translate: L().func.isRequired
    };
    var z = q;

    function H(e) {
        var t = e.friendsData,
            a = e.friendsInGame,
            r = e.dismissModal,
            i = e.isPlayable,
            o = e.translate,
            l = {};
        return t.forEach(function(e) {
            l[e.id] = e
        }), u().createElement("div", {
            className: "interaction-container"
        }, u().createElement("ul", {
            className: "interaction-list"
        }, a.map(function(e, t) {
            var a = e + t,
                n = l[e],
                t = n.id,
                e = n.nameForDisplay;
            return u().createElement("li", {
                key: a,
                className: "interaction-item",
                "aria-hidden": "true"
            }, u().createElement("span", {
                className: "avatar avatar-headshot avatar-headshot-sm player-avatar"
            }, u().createElement(V, {
                playerId: t,
                altName: e
            })), u().createElement(z, {
                playerData: n,
                dismissModal: r,
                isPlayable: i,
                translate: o
            }))
        })))
    }
    H.propTypes = {
        friendsData: L().arrayOf(L().shape({
            presense: L().shape({
                rootPlaceId: L().number,
                placeId: L().number,
                gameId: L().string
            }),
            id: L().number,
            nameForDisplay: L().string
        })).isRequired,
        friendsInGame: L().arrayOf(L().number).isRequired,
        dismissModal: L().func.isRequired,
        isPlayable: L().bool.isRequired,
        translate: L().func.isRequired
    };
    var B = H;

    function W(e) {
        var t = e.friendsData,
            a = e.friendsInGame,
            n = e.game,
            r = e.dismissModal,
            i = e.translate,
            e = i(O);
        return u().createElement("div", {
            "data-testid": "game-players-player-interaction-modal"
        }, u().createElement(p.Modal.Header, {
            title: e,
            onClose: r
        }), u().createElement(F, {
            game: n,
            translate: i
        }), u().createElement(B, {
            friendsData: t,
            friendsInGame: a,
            dismissModal: r,
            isPlayable: n.isPlayable,
            translate: i
        }))
    }

    function Q(e) {
        var t = e.id,
            a = e.children,
            n = e.gameData,
            e = e.buildEventProperties;
        return u().createElement(p.Link, {
            url: G(n.placeId, n.name, e(n, t)),
            className: "game-card-link",
            id: n.universeId.toString()
        }, u().createElement(D.Thumbnail2d, {
            type: D.ThumbnailTypes.gameIcon,
            size: D.ThumbnailGameIconSize.size150,
            targetId: n.universeId,
            containerClass: "game-card-thumb-container",
            format: D.ThumbnailFormat.jpeg,
            altName: n.name
        }), u().createElement("div", {
            className: "game-card-name game-name-title",
            title: n.name
        }, n.name), a)
    }

    function J(e) {
        var t = e.totalDownVotes,
            a = e.totalUpVotes,
            e = e.playerCount,
            t = T.getVotePercentage(a, t),
            e = T.getAbbreviatedValue(e);
        return u().createElement("div", {
            className: "game-card-info",
            "data-testid": "game-tile-stats"
        }, u().createElement("span", {
            className: "info-label icon-votes-gray"
        }), t ? u().createElement("span", {
            className: "info-label vote-percentage-label"
        }, t) : u().createElement("span", {
            className: "info-label no-vote"
        }), u().createElement("span", {
            className: "info-label icon-playing-counts-gray"
        }), u().createElement("span", {
            className: "info-label playing-counts-label"
        }, e))
    }

    function Y(e) {
        var t = e.friendData,
            a = e.gameData,
            n = e.translate,
            r = (0, f.useState)(!1),
            e = r[0],
            i = r[1];
        if (0 === t.length) throw new Error("friendData should not be empty");
        return u().createElement("div", {
            className: "game-card-friend-info game-card-info",
            "data-testid": "game-tile-stats-friends"
        }, u().createElement("div", {
            className: "info-avatar",
            style: {
                width: 22 * (t.slice(0, X).length - 1) + 32 + "px"
            }
        }, t.slice(0, X).map(function(e) {
            return u().createElement("div", {
                className: "avatar-card",
                role: "button",
                tabIndex: 0,
                key: e.displayName,
                onClick: function(e) {
                    e.stopPropagation(), e.preventDefault(), i(!0)
                },
                onKeyDown: function(e) {
                    e.code === Z.enter && (e.stopPropagation(), e.preventDefault(), i(!0))
                }
            }, u().createElement(D.Thumbnail2d, {
                type: D.ThumbnailTypes.avatarHeadshot,
                size: D.ThumbnailAvatarHeadshotSize.size48,
                targetId: e.id,
                containerClass: "avatar avatar-headshot avatar-headshot-xs",
                imgClassName: "avatar-card-image",
                format: D.ThumbnailFormat.png,
                altName: e.displayName
            }))
        })), n && u().createElement("span", {
            className: "info-label text-overflow",
            "data-testid": "game-tile-stats-info-label"
        }, t.length > $ ? n(R.LabelPlayingOnePlusUsersWithComma, {
            username: t[0].displayName,
            count: t.length - $
        }) : n(R.LabelPlayingOneUser, {
            user: t[0].displayName
        })), u().createElement(ee, {
            friendsDataInGame: t,
            game: a,
            show: e,
            onHide: function(e) {
                e.stopPropagation(), e.preventDefault(), i(!1)
            }
        }))
    }
    W.propTypes = {
        friendsData: L().arrayOf(L().shape({
            presense: L().shape({
                rootPlaceId: L().number,
                placeId: L().number,
                gameId: L().string
            }),
            id: L().number,
            nameForDisplay: L().string
        })).isRequired,
        friendsInGame: L().arrayOf(L().number).isRequired,
        game: L().shape({
            universeId: L().number,
            placeId: L().number,
            name: L().string,
            playerCount: L().number,
            isShowSponsoredLabel: L().bool,
            nativeAdData: L().string,
            imageUrl: L().string,
            referralUrl: L().string,
            isPlayable: L().bool
        }).isRequired,
        dismissModal: L().func.isRequired,
        translate: L().func.isRequired
    };
    var _ = W,
        L = {
            common: ["Common.GameSorts"],
            feature: "Feature.PlacesList"
        },
        K = function() {
            return (K = Object.assign || function(e) {
                for (var t, a = 1, n = arguments.length; a < n; a++)
                    for (var r in t = arguments[a]) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
                return e
            }).apply(this, arguments)
        },
        Z = E.keyBoardEventCode,
        X = E.numberOfInGameIcons,
        $ = E.numberOfInGameNames;
    Y.defaultProps = {
        translate: void 0
    };
    var ee = (0, o.withTranslations)(function(e) {
            var t = e.show,
                a = e.onHide,
                n = e.friendsDataInGame,
                r = e.game,
                e = e.translate;
            return u().createElement(p.Modal, {
                show: t,
                onHide: a,
                size: "lg"
            }, u().createElement(_, {
                friendsData: n.map(function(e) {
                    return K(K({}, e), {
                        nameForDisplay: e.displayName
                    })
                }),
                friendsInGame: n.map(function(e) {
                    return e.id
                }),
                game: r,
                dismissModal: a,
                translate: e
            }))
        }, L),
        te = function(e, o, l, s) {
            return new(l = l || Promise)(function(a, t) {
                function n(e) {
                    try {
                        i(s.next(e))
                    } catch (e) {
                        t(e)
                    }
                }

                function r(e) {
                    try {
                        i(s.throw(e))
                    } catch (e) {
                        t(e)
                    }
                }

                function i(e) {
                    var t;
                    e.done ? a(e.value) : ((t = e.value) instanceof l ? t : new l(function(e) {
                        e(t)
                    })).then(n, r)
                }
                i((s = s.apply(e, o || [])).next())
            })
        },
        ae = function(a, n) {
            var r, i, o, l = {
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
                        for (; l;) try {
                            if (r = 1, i && (o = 2 & t[0] ? i.return : t[0] ? i.throw || ((o = i.return) && o.call(i), 0) : i.next) && !(o = o.call(i, t[1])).done) return o;
                            switch (i = 0, o && (t = [2 & t[0], o.value]), t[0]) {
                                case 0:
                                case 1:
                                    o = t;
                                    break;
                                case 4:
                                    return l.label++, {
                                        value: t[1],
                                        done: !1
                                    };
                                case 5:
                                    l.label++, i = t[1], t = [0];
                                    continue;
                                case 7:
                                    t = l.ops.pop(), l.trys.pop();
                                    continue;
                                default:
                                    if (!(o = 0 < (o = l.trys).length && o[o.length - 1]) && (6 === t[0] || 2 === t[0])) {
                                        l = 0;
                                        continue
                                    }
                                    if (3 === t[0] && (!o || t[1] > o[0] && t[1] < o[3])) {
                                        l.label = t[1];
                                        break
                                    }
                                    if (6 === t[0] && l.label < o[1]) {
                                        l.label = o[1], o = t;
                                        break
                                    }
                                    if (o && l.label < o[2]) {
                                        l.label = o[2], l.ops.push(t);
                                        break
                                    }
                                    o[2] && l.ops.pop(), l.trys.pop();
                                    continue
                            }
                            t = n.call(a, l)
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
        ne = (0, f.forwardRef)(function(e, t) {
            var a = e.id,
                n = e.buildEventProperties,
                r = e.gameData,
                e = e.friendData,
                i = void 0 === e ? [] : e,
                e = (0, f.useState)(),
                o = e[0],
                l = e[1],
                s = (0, f.useMemo)(function() {
                    return c(i, r.universeId)
                }, [i, r.universeId]);
            return (0, f.useEffect)(function() {
                void 0 === o && 0 < s.length && te(void 0, void 0, void 0, function() {
                    var t;
                    return ae(this, function(e) {
                        switch (e.label) {
                            case 0:
                                return e.trys.push([0, 2, , 3]), [4, I(r.placeId.toString())];
                            case 1:
                                return t = e.sent(), l(t), [3, 3];
                            case 2:
                                return t = e.sent(), console.error(t), [3, 3];
                            case 3:
                                return [2]
                        }
                    })
                })
            }, [s, o]), u().createElement("div", {
                ref: t,
                className: "grid-item-container game-card-container",
                "data-testid": "game-tile"
            }, u().createElement(Q, {
                id: a,
                buildEventProperties: n,
                gameData: r
            }, 0 < s.length && o ? u().createElement(Y, {
                friendData: s,
                gameData: o
            }) : u().createElement(J, {
                totalUpVotes: r.totalUpVotes,
                totalDownVotes: r.totalDownVotes,
                playerCount: r.playerCount
            })))
        });

    function re() {
        return document.getElementById(fe)
    }

    function ie(a, n) {
        var r;
        return void 0 === n && (n = 300), [function() {
            for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
            clearTimeout(r), r = setTimeout(function() {
                a.apply(void 0, e)
            }, n)
        }, function() {
            clearTimeout(r)
        }]
    }
    ne.displayName = "GameTile", (L = (0, f.forwardRef)(function(e, t) {
        var a = e.gameData,
            n = e.buildEventProperties,
            r = e.translate,
            i = e.friendData,
            o = e.tileRef;
        return u().createElement("div", {
            "data-testid": "game-carousel",
            ref: t,
            className: "game-carousel"
        }, a.map(function(e, t) {
            return u().createElement(ne, {
                ref: o,
                key: t,
                id: t,
                gameData: e,
                translate: r,
                buildEventProperties: n,
                friendData: i
            })
        }))
    })).displayName = "GameCarousel";
    var oe = L,
        le = function() {
            return (le = Object.assign || function(e) {
                for (var t, a = 1, n = arguments.length; a < n; a++)
                    for (var r in t = arguments[a]) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
                return e
            }).apply(this, arguments)
        },
        se = function(e, t) {
            var a = {};
            for (r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (a[r] = e[r]);
            if (null != e && "function" == typeof Object.getOwnPropertySymbols)
                for (var n = 0, r = Object.getOwnPropertySymbols(e); n < r.length; n++) t.indexOf(r[n]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[n]) && (a[r[n]] = e[r[n]]);
            return a
        },
        ce = ((L = g.eventStreamService.eventTypes).pageLoad, L.formInteraction),
        ue = "gameImpressions",
        me = "gameDetailPage",
        de = function(e) {
            e = se(e, []);
            return [{
                name: ue,
                type: ue,
                context: ce
            }, t(le({}, e))]
        },
        fe = "game-detail-meta-data",
        pe = function() {
            var e, n = (null === (e = re()) || void 0 === e ? void 0 : e.dataset) || {};
            return Object.keys(n).reduce(function(e, t) {
                var a = n[t].toLowerCase();
                return e[t] = "true" === a || "false" !== a && n[t], e
            }, {})
        },
        ge = function() {
            return (ge = Object.assign || function(e) {
                for (var t, a = 1, n = arguments.length; a < n; a++)
                    for (var r in t = arguments[a]) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
                return e
            }).apply(this, arguments)
        },
        be = function(r, i, e, o) {
            function t() {
                var t, e = [],
                    a = !!(n = r.current) && d(n),
                    n = function(e, t) {
                        if (e && t) {
                            var a = e.clientWidth,
                                e = e.scrollLeft,
                                t = m(t);
                            return [Math.round(e / t), Math.round((e + a) / t) - 1]
                        }
                    }(r.current, i.current);
                a && n && (e = T.calculateImpressedIndexes(s.current, n)), 0 !== e.length && l.current && (t = l.current, a = e.filter(function(e) {
                    return e < t.length
                }), n = a, void 0 === s.current ? s.current = [n[0], n[n.length - 1]] : (e = (s.current[0] < n[0] ? s.current : n)[0], n = s.current[1] > n[n.length - 1] ? s.current[1] : n[n.length - 1], s.current = [e, n]), a = de(ge({
                    rootPlaceIds: a.map(function(e) {
                        return t[e].placeId
                    }),
                    universeIds: a.map(function(e) {
                        return t[e].universeId
                    }),
                    absPositions: a
                }, o)), g.eventStreamService.sendEvent.apply(g.eventStreamService, a))
            }

            function a() {
                u(), window.removeEventListener("scroll", c), window.removeEventListener("resize", c)
            }
            var l = (0, f.useRef)(e),
                s = (0, f.useRef)(void 0),
                n = ie(function() {
                    t()
                }),
                c = n[0],
                u = n[1];
            (0, f.useEffect)(function() {
                return window.addEventListener("scroll", c), window.addEventListener("resize", c), a
            }, []), (0, f.useEffect)(function() {
                var e = r.current;
                return null != e && e.addEventListener("scroll", c),
                    function() {
                        null != e && e.removeEventListener("scroll", c)
                    }
            }, [r, c]), (0, f.useEffect)(function() {
                l.current = e, t()
            }, [e])
        },
        L = {
            common: [],
            feature: "Feature.GameDetails"
        },
        ve = function(e, o, l, s) {
            return new(l = l || Promise)(function(a, t) {
                function n(e) {
                    try {
                        i(s.next(e))
                    } catch (e) {
                        t(e)
                    }
                }

                function r(e) {
                    try {
                        i(s.throw(e))
                    } catch (e) {
                        t(e)
                    }
                }

                function i(e) {
                    var t;
                    e.done ? a(e.value) : ((t = e.value) instanceof l ? t : new l(function(e) {
                        e(t)
                    })).then(n, r)
                }
                i((s = s.apply(e, o || [])).next())
            })
        },
        ye = function(a, n) {
            var r, i, o, l = {
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
                        for (; l;) try {
                            if (r = 1, i && (o = 2 & t[0] ? i.return : t[0] ? i.throw || ((o = i.return) && o.call(i), 0) : i.next) && !(o = o.call(i, t[1])).done) return o;
                            switch (i = 0, o && (t = [2 & t[0], o.value]), t[0]) {
                                case 0:
                                case 1:
                                    o = t;
                                    break;
                                case 4:
                                    return l.label++, {
                                        value: t[1],
                                        done: !1
                                    };
                                case 5:
                                    l.label++, i = t[1], t = [0];
                                    continue;
                                case 7:
                                    t = l.ops.pop(), l.trys.pop();
                                    continue;
                                default:
                                    if (!(o = 0 < (o = l.trys).length && o[o.length - 1]) && (6 === t[0] || 2 === t[0])) {
                                        l = 0;
                                        continue
                                    }
                                    if (3 === t[0] && (!o || t[1] > o[0] && t[1] < o[3])) {
                                        l.label = t[1];
                                        break
                                    }
                                    if (6 === t[0] && l.label < o[1]) {
                                        l.label = o[1], o = t;
                                        break
                                    }
                                    if (o && l.label < o[2]) {
                                        l.label = o[2], l.ops.push(t);
                                        break
                                    }
                                    o[2] && l.ops.pop(), l.trys.pop();
                                    continue
                            }
                            t = n.call(a, l)
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
        he = (0, o.withTranslations)(function(e) {
            var t = e.translate,
                a = (0, f.useRef)(null),
                n = (0, f.useRef)(null),
                r = (0, f.useState)([]),
                i = r[0],
                o = r[1],
                e = (pe() || {}).universeId,
                l = void 0 === e ? "" : e,
                r = (0, f.useState)(!1),
                e = r[0],
                s = r[1];
            be(a, n, i, {
                sortPos: 0,
                page: me
            });
            return (0, f.useEffect)(function() {
                ve(void 0, void 0, void 0, function() {
                    var t;
                    return ye(this, function(e) {
                        switch (e.label) {
                            case 0:
                                s(!0), e.label = 1;
                            case 1:
                                return e.trys.push([1, 3, , 4]), [4, P(l, C.maxTilesPerCarouselPage)];
                            case 2:
                                return t = e.sent().games, o(t), [3, 4];
                            case 3:
                                return t = e.sent(), console.error(t), [3, 4];
                            case 4:
                                return s(!1), [2]
                        }
                    })
                })
            }, []), u().createElement(u().Fragment, null, e ? u().createElement(p.Loading, null) : null, 0 < i.length && u().createElement(u().Fragment, null, u().createElement("h2", null, t(x.HeadingRecommendedGames)), u().createElement(oe, {
                ref: a,
                tileRef: n,
                gameData: i,
                buildEventProperties: function(e, t) {
                    return {
                        placeId: e.placeId,
                        universeId: e.universeId,
                        isAd: e.isSponsored,
                        nativeAdData: e.nativeAdData,
                        position: t,
                        numberOfLoadedTiles: (i || []).length,
                        page: me
                    }
                },
                translate: t
            })))
        }, L);
    (0, i.ready)(function() {
        e() && (0, r.render)(u().createElement(he, null), e())
    })
}();
//# sourceMappingURL=https://js.rbxcdn.com/ccd3ea97fa9156e7a1cf-recommendedGames.bundle.min.js.map

/* Bundle detector */
window.Roblox && window.Roblox.BundleDetector && window.Roblox.BundleDetector.bundleDetected("RecommendedGames");