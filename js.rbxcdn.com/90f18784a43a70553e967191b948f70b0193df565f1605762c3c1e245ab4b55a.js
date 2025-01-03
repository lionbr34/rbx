! function() {
    var r = {
            383: function(t, e, r) {
                var n = {
                    "./datetime.js": 58,
                    "./localNumberFormat.js": 666,
                    "./translate.js": 261,
                    "./translateParams.js": 972
                };

                function o(t) {
                    t = u(t);
                    return r(t)
                }

                function u(t) {
                    if (r.o(n, t)) return n[t];
                    t = new Error("Cannot find module '" + t + "'");
                    throw t.code = "MODULE_NOT_FOUND", t
                }
                o.keys = function() {
                    return Object.keys(n)
                }, o.resolve = u, (t.exports = o).id = 383
            },
            268: function(t, e, r) {
                var n = {
                    "./languageResourceProvider.js": 968
                };

                function o(t) {
                    t = u(t);
                    return r(t)
                }

                function u(t) {
                    if (r.o(n, t)) return n[t];
                    t = new Error("Cannot find module '" + t + "'");
                    throw t.code = "MODULE_NOT_FOUND", t
                }
                o.keys = function() {
                    return Object.keys(n)
                }, o.resolve = u, (t.exports = o).id = 268
            },
            726: function(t) {
                function u(t) {
                    return t.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase()
                }

                function i(t) {
                    return t.split("/").pop().replace(".html", "")
                }
                var e = {
                    importFilesUnderPath: function(t) {
                        t.keys().forEach(t)
                    },
                    templateCacheGenerator: function(t, e, n, o) {
                        return t.module(e, []).run(["$templateCache", function(r) {
                            n && n.keys().forEach(function(t) {
                                var e = u(i(t));
                                r.put(e, n(t))
                            }), o && o.keys().forEach(function(t) {
                                var e = u(i(t));
                                r.put(e, o(t).replace(/<\/?script[^>]*>/gi, ""))
                            })
                        }])
                    }
                };
                t.exports = e
            },
            58: function(t, e, r) {
                "use strict";
                r.r(e);
                var n = r(792);

                function o() {
                    return function(t, e) {
                        var r = t && null !== t ? "string" == typeof t || "number" == typeof t ? new Date(t) : t : "Invalid Date";
                        if ("Invalid Date" === r.toString()) return t;
                        t = (new n.Intl).getDateTimeFormatter();
                        return "full" === e ? t.getFullDate(r) : "short" !== e && e ? t.getCustomDateTime(r, e) : t.getShortDate(r)
                    }
                }
                r(480).Z.filter("datetime", o), e.default = o
            },
            666: function(t, e, r) {
                "use strict";
                r.r(e);
                r = r(480);

                function n(u) {
                    return function(t, o) {
                        if (!t) return t;
                        var e = t;
                        return "string" != typeof t && (e = t.toString()), e.replace(/(\d+)/g, function(t, e, r, n) {
                            if (e) {
                                e = Number(e);
                                if (u.intl && e) return o ? u.intl.n(e, o) : u.intl.n(e)
                            }
                            return n
                        })
                    }
                }
                n.$inject = ["languageResource"], r.Z.filter("localNumberFormat", n), e.default = n
            },
            261: function(t, e, r) {
                "use strict";
                r.r(e);
                r = r(480);

                function n(r, n) {
                    return function(t, e) {
                        e = r.get(t, e);
                        return e || (n.debug("Unable to translate key:".concat(t)), "")
                    }
                }
                n.$inject = ["languageResource", "$log"], r.Z.filter("translate", n), e.default = n
            },
            972: function(t, e, r) {
                "use strict";
                r.r(e);
                r = r(480);

                function n(i, a) {
                    return function(t, e) {
                        var r, n = {};
                        for (r in e)
                            if (Object.prototype.hasOwnProperty.call(e, r)) {
                                var o = i.get(e[r]);
                                if (!o) return a.debug("Unable to translate key:".concat(e[r])), "";
                                n[r] = o
                            }
                        var u = i.get(t, n);
                        return u || (a.debug("Unable to translate key:".concat(t)), "")
                    }
                }
                n.$inject = ["languageResource", "$log"], r.Z.filter("translateParams", n), e.default = n
            },
            480: function(t, e, r) {
                "use strict";
                var n = r(734),
                    n = r.n(n)().module("intlUtils", []);
                e.Z = n
            },
            968: function(t, e, r) {
                "use strict";
                r.r(e);
                var n = r(734),
                    i = r.n(n),
                    a = r(792);

                function c(t) {
                    return function(t) {
                        if (Array.isArray(t)) return o(t)
                    }(t) || function(t) {
                        if ("undefined" != typeof Symbol && Symbol.iterator in Object(t)) return Array.from(t)
                    }(t) || function(t, e) {
                        if (!t) return;
                        if ("string" == typeof t) return o(t, e);
                        var r = Object.prototype.toString.call(t).slice(8, -1);
                        "Object" === r && t.constructor && (r = t.constructor.name);
                        if ("Map" === r || "Set" === r) return Array.from(t);
                        if ("Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return o(t, e)
                    }(t) || function() {
                        throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                    }()
                }

                function o(t, e) {
                    (null == e || e > t.length) && (e = t.length);
                    for (var r = 0, n = new Array(e); r < e; r++) n[r] = t[r];
                    return n
                }

                function l(t) {
                    return (l = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                        return typeof t
                    } : function(t) {
                        return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                    })(t)
                }

                function u() {
                    function t(t, e) {
                        var r = o[t];
                        return r ? e && 0 < Object.keys(e).length && (r = n.f(r, e)) : (console.warn("Language key '".concat(t, "' not found. Please check for any typo or a missing key.")), r = ""), r
                    }

                    function e(t, e) {
                        if (null === r) throw new Error("Translation resources is not properly initialized");
                        return r.get(t, e)
                    }
                    var n = new a.Intl,
                        o = {},
                        r = null,
                        u = !1;
                    this.setLanguageKeysFromFile = function(t) {
                        t && "object" === l(t) && !Array.isArray(t) && i().extend(o, t)
                    }, this.setTranslationResources = function(t) {
                        t = a.TranslationResourceProvider.combineTranslationResources.apply(a.TranslationResourceProvider, [n].concat(c(t)));
                        null !== r ? r = a.TranslationResourceProvider.combineTranslationResources(n, r, t) : (r = t, u = !0)
                    }, this.$get = [function() {
                        return {
                            get: u ? e : t,
                            intl: n
                        }
                    }]
                }
                r(480).Z.provider("languageResource", u), e.default = u
            },
            792: function(t) {
                "use strict";
                t.exports = Roblox
            },
            734: function(t) {
                "use strict";
                t.exports = angular
            }
        },
        n = {};

    function o(t) {
        if (n[t]) return n[t].exports;
        var e = n[t] = {
            exports: {}
        };
        return r[t](e, e.exports, o), e.exports
    }
    o.n = function(t) {
            var e = t && t.__esModule ? function() {
                return t.default
            } : function() {
                return t
            };
            return o.d(e, {
                a: e
            }), e
        }, o.d = function(t, e) {
            for (var r in e) o.o(e, r) && !o.o(t, r) && Object.defineProperty(t, r, {
                enumerable: !0,
                get: e[r]
            })
        }, o.o = function(t, e) {
            return Object.prototype.hasOwnProperty.call(t, e)
        }, o.r = function(t) {
            "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
                value: "Module"
            }), Object.defineProperty(t, "__esModule", {
                value: !0
            })
        },
        function() {
            "use strict";
            var t = o(726);
            o(480), (0, t.importFilesUnderPath)(o(383)), (0, t.importFilesUnderPath)(o(268))
        }()
}();
//# sourceMappingURL=https://js.rbxcdn.com/2ccdd5f8fdb7f38e97da-internationalAngularJs.js.map

/* Bundle detector */
window.Roblox && window.Roblox.BundleDetector && window.Roblox.BundleDetector.bundleDetected("InternationalAngularJs");