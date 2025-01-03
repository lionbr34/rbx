; // bundle: leanbase___a1003a70fcbe2914f4282c9d5467d9e1_m
; // files: leancore/libs/bootstrap.min.js, leancore/BootstrapNamespacing.js, leancore/libs/underscore-min.js, GoogleAnalytics/GoogleAnalyticsEvents.js, RobloxEventManager.js, GoogleEventListener.js, UpsellAdModal.js, JavaScriptEndpoints.js, utilities/deviceFeatureDetection.js, utilities/lazyLoad.js, utilities/urlParser.js, utilities/generalSubmitButton.js, DeveloperConsoleWarning.js, widgets/jquery.mCustomScrollbar.concat.min.js, Reference/widget.js, CookieUpgrader.js, leancore/RobloxBaseInit.js, common/robloxError.js, ~/Generated/js/Roblox_TranslationResources_CommonUI_ControlsResources_en_us_standard.js, Thumbnails/thumbnailMetrics.js, DisplayNames/DisplayNames.js, jquery.tipsy.js, extensions/string.js, StringTruncator.js, MasterPageUI.js, jquery.simplemodal-1.3.5.js, extensions/Thumbnails.js, CookieUpgrader.js, utilities/stringFormat.js, Tracking/SignupTrackingScript.js, Tracking/AsyncGoogleOnScript.js

; // leancore/libs/bootstrap.min.js
/*!
 * Bootstrap v3.3.5 (http://getbootstrap.com)
 * Copyright 2011-2015 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 */

/*!
 * Generated using the Bootstrap Customizer (http://getbootstrap.com/customize/?id=b8480475c6c7b955a207)
 * Config saved to config.json and https://gist.github.com/b8480475c6c7b955a207
 */
if ("undefined" == typeof jQuery) throw new Error("Bootstrap's JavaScript requires jQuery"); + function(t) {
    "use strict";
    var e = t.fn.jquery.split(" ")[0].split(".");
    if (e[0] < 2 && e[1] < 9 || 1 == e[0] && 9 == e[1] && e[2] < 1) throw new Error("Bootstrap's JavaScript requires jQuery version 1.9.1 or higher")
}(jQuery), + function(t) {
    "use strict";

    function e(e) {
        return this.each(function() {
            var i = t(this),
                n = i.data("bs.alert");
            n || i.data("bs.alert", n = new o(this)), "string" == typeof e && n[e].call(i)
        })
    }
    var i = '[data-dismiss="alert"]',
        o = function(e) {
            t(e).on("click", i, this.close)
        };
    o.VERSION = "3.3.5", o.TRANSITION_DURATION = 150, o.prototype.close = function(e) {
        function i() {
            a.detach().trigger("closed.bs.alert").remove()
        }
        var n = t(this),
            s = n.attr("data-target");
        s || (s = n.attr("href"), s = s && s.replace(/.*(?=#[^\s]*$)/, ""));
        var a = t(s);
        e && e.preventDefault(), a.length || (a = n.closest(".alert")), a.trigger(e = t.Event("close.bs.alert")), e.isDefaultPrevented() || (a.removeClass("in"), t.support.transition && a.hasClass("fade") ? a.one("bsTransitionEnd", i).emulateTransitionEnd(o.TRANSITION_DURATION) : i())
    };
    var n = t.fn.alert;
    t.fn.alert = e, t.fn.alert.Constructor = o, t.fn.alert.noConflict = function() {
        return t.fn.alert = n, this
    }, t(document).on("click.bs.alert.data-api", i, o.prototype.close)
}(jQuery), + function(t) {
    "use strict";

    function e(e) {
        return this.each(function() {
            var o = t(this),
                n = o.data("bs.button"),
                s = "object" == typeof e && e;
            n || o.data("bs.button", n = new i(this, s)), "toggle" == e ? n.toggle() : e && n.setState(e)
        })
    }
    var i = function(e, o) {
        this.$element = t(e), this.options = t.extend({}, i.DEFAULTS, o), this.isLoading = !1
    };
    i.VERSION = "3.3.5", i.DEFAULTS = {
        loadingText: "loading..."
    }, i.prototype.setState = function(e) {
        var i = "disabled",
            o = this.$element,
            n = o.is("input") ? "val" : "html",
            s = o.data();
        e += "Text", null == s.resetText && o.data("resetText", o[n]()), setTimeout(t.proxy(function() {
            o[n](null == s[e] ? this.options[e] : s[e]), "loadingText" == e ? (this.isLoading = !0, o.addClass(i).attr(i, i)) : this.isLoading && (this.isLoading = !1, o.removeClass(i).removeAttr(i))
        }, this), 0)
    }, i.prototype.toggle = function() {
        var t = !0,
            e = this.$element.closest('[data-toggle="buttons"]');
        if (e.length) {
            var i = this.$element.find("input");
            "radio" == i.prop("type") ? (i.prop("checked") && (t = !1), e.find(".active").removeClass("active"), this.$element.addClass("active")) : "checkbox" == i.prop("type") && (i.prop("checked") !== this.$element.hasClass("active") && (t = !1), this.$element.toggleClass("active")), i.prop("checked", this.$element.hasClass("active")), t && i.trigger("change")
        } else this.$element.attr("aria-pressed", !this.$element.hasClass("active")), this.$element.toggleClass("active")
    };
    var o = t.fn.button;
    t.fn.button = e, t.fn.button.Constructor = i, t.fn.button.noConflict = function() {
        return t.fn.button = o, this
    }, t(document).on("click.bs.button.data-api", '[data-toggle^="button"]', function(i) {
        var o = t(i.target);
        o.hasClass("btn") || (o = o.closest(".btn")), e.call(o, "toggle"), t(i.target).is('input[type="radio"]') || t(i.target).is('input[type="checkbox"]') || i.preventDefault()
    }).on("focus.bs.button.data-api blur.bs.button.data-api", '[data-toggle^="button"]', function(e) {
        t(e.target).closest(".btn").toggleClass("focus", /^focus(in)?$/.test(e.type))
    })
}(jQuery), + function(t) {
    "use strict";

    function e(e) {
        return this.each(function() {
            var o = t(this),
                n = o.data("bs.carousel"),
                s = t.extend({}, i.DEFAULTS, o.data(), "object" == typeof e && e),
                a = "string" == typeof e ? e : s.slide;
            n || o.data("bs.carousel", n = new i(this, s)), "number" == typeof e ? n.to(e) : a ? n[a]() : s.interval && n.pause().cycle()
        })
    }
    var i = function(e, i) {
        this.$element = t(e), this.$indicators = this.$element.find(".carousel-indicators"), this.options = i, this.paused = null, this.sliding = null, this.interval = null, this.$active = null, this.$items = null, this.options.keyboard && this.$element.on("keydown.bs.carousel", t.proxy(this.keydown, this)), "hover" == this.options.pause && !("ontouchstart" in document.documentElement) && this.$element.on("mouseenter.bs.carousel", t.proxy(this.pause, this)).on("mouseleave.bs.carousel", t.proxy(this.cycle, this))
    };
    i.VERSION = "3.3.5", i.TRANSITION_DURATION = 600, i.DEFAULTS = {
        interval: 5e3,
        pause: "hover",
        wrap: !0,
        keyboard: !0
    }, i.prototype.keydown = function(t) {
        if (!/input|textarea/i.test(t.target.tagName)) {
            switch (t.which) {
                case 37:
                    this.prev();
                    break;
                case 39:
                    this.next();
                    break;
                default:
                    return
            }
            t.preventDefault()
        }
    }, i.prototype.cycle = function(e) {
        return e || (this.paused = !1), this.interval && clearInterval(this.interval), this.options.interval && !this.paused && (this.interval = setInterval(t.proxy(this.next, this), this.options.interval)), this
    }, i.prototype.getItemIndex = function(t) {
        return this.$items = t.parent().children(".item"), this.$items.index(t || this.$active)
    }, i.prototype.getItemForDirection = function(t, e) {
        var i = this.getItemIndex(e),
            o = "prev" == t && 0 === i || "next" == t && i == this.$items.length - 1;
        if (o && !this.options.wrap) return e;
        var n = "prev" == t ? -1 : 1,
            s = (i + n) % this.$items.length;
        return this.$items.eq(s)
    }, i.prototype.to = function(t) {
        var e = this,
            i = this.getItemIndex(this.$active = this.$element.find(".item.active"));
        return t > this.$items.length - 1 || 0 > t ? void 0 : this.sliding ? this.$element.one("slid.bs.carousel", function() {
            e.to(t)
        }) : i == t ? this.pause().cycle() : this.slide(t > i ? "next" : "prev", this.$items.eq(t))
    }, i.prototype.pause = function(e) {
        return e || (this.paused = !0), this.$element.find(".next, .prev").length && t.support.transition && (this.$element.trigger(t.support.transition.end), this.cycle(!0)), this.interval = clearInterval(this.interval), this
    }, i.prototype.next = function() {
        return this.sliding ? void 0 : this.slide("next")
    }, i.prototype.prev = function() {
        return this.sliding ? void 0 : this.slide("prev")
    }, i.prototype.slide = function(e, o) {
        var n = this.$element.find(".item.active"),
            s = o || this.getItemForDirection(e, n),
            a = this.interval,
            r = "next" == e ? "left" : "right",
            l = this;
        if (s.hasClass("active")) return this.sliding = !1;
        var h = s[0],
            d = t.Event("slide.bs.carousel", {
                relatedTarget: h,
                direction: r
            });
        if (this.$element.trigger(d), !d.isDefaultPrevented()) {
            if (this.sliding = !0, a && this.pause(), this.$indicators.length) {
                this.$indicators.find(".active").removeClass("active");
                var p = t(this.$indicators.children()[this.getItemIndex(s)]);
                p && p.addClass("active")
            }
            var c = t.Event("slid.bs.carousel", {
                relatedTarget: h,
                direction: r
            });
            return t.support.transition && this.$element.hasClass("slide") ? (s.addClass(e), s[0].offsetWidth, n.addClass(r), s.addClass(r), n.one("bsTransitionEnd", function() {
                s.removeClass([e, r].join(" ")).addClass("active"), n.removeClass(["active", r].join(" ")), l.sliding = !1, setTimeout(function() {
                    l.$element.trigger(c)
                }, 0)
            }).emulateTransitionEnd(i.TRANSITION_DURATION)) : (n.removeClass("active"), s.addClass("active"), this.sliding = !1, this.$element.trigger(c)), a && this.cycle(), this
        }
    };
    var o = t.fn.carousel;
    t.fn.carousel = e, t.fn.carousel.Constructor = i, t.fn.carousel.noConflict = function() {
        return t.fn.carousel = o, this
    };
    var n = function(i) {
        var o, n = t(this),
            s = t(n.attr("data-target") || (o = n.attr("href")) && o.replace(/.*(?=#[^\s]+$)/, ""));
        if (s.hasClass("carousel")) {
            var a = t.extend({}, s.data(), n.data()),
                r = n.attr("data-slide-to");
            r && (a.interval = !1), e.call(s, a), r && s.data("bs.carousel").to(r), i.preventDefault()
        }
    };
    t(document).on("click.bs.carousel.data-api", "[data-slide]", n).on("click.bs.carousel.data-api", "[data-slide-to]", n), t(window).on("load", function() {
        t('[data-ride="carousel"]').each(function() {
            var i = t(this);
            e.call(i, i.data())
        })
    })
}(jQuery), + function(t) {
    "use strict";

    function e(e) {
        var i = e.attr("data-target");
        i || (i = e.attr("href"), i = i && /#[A-Za-z]/.test(i) && i.replace(/.*(?=#[^\s]*$)/, ""));
        var o = i && t(i);
        return o && o.length ? o : e.parent()
    }

    function i(i) {
        i && 3 === i.which || (t(n).remove(), t(s).each(function() {
            var o = t(this),
                n = e(o),
                s = {
                    relatedTarget: this
                };
            n.hasClass("open") && (i && "click" == i.type && /input|textarea/i.test(i.target.tagName) && t.contains(n[0], i.target) || (n.trigger(i = t.Event("hide.bs.dropdown", s)), i.isDefaultPrevented() || (o.attr("aria-expanded", "false"), n.removeClass("open").trigger("hidden.bs.dropdown", s))))
        }))
    }

    function o(e) {
        return this.each(function() {
            var i = t(this),
                o = i.data("bs.dropdown");
            o || i.data("bs.dropdown", o = new a(this)), "string" == typeof e && o[e].call(i)
        })
    }
    var n = ".dropdown-backdrop",
        s = '[data-toggle="dropdown"]',
        a = function(e) {
            t(e).on("click.bs.dropdown", this.toggle)
        };
    a.VERSION = "3.3.5", a.prototype.toggle = function(o) {
        var n = t(this);
        if (!n.is(".disabled, :disabled")) {
            var s = e(n),
                a = s.hasClass("open");
            if (i(), !a) {
                "ontouchstart" in document.documentElement && !s.closest(".navbar-nav").length && t(document.createElement("div")).addClass("dropdown-backdrop").insertAfter(t(this)).on("click", i);
                var r = {
                    relatedTarget: this
                };
                if (s.trigger(o = t.Event("show.bs.dropdown", r)), o.isDefaultPrevented()) return;
                n.trigger("focus").attr("aria-expanded", "true"), s.toggleClass("open").trigger("shown.bs.dropdown", r)
            }
            return !1
        }
    }, a.prototype.keydown = function(i) {
        if (/(38|40|27|32)/.test(i.which) && !/input|textarea/i.test(i.target.tagName)) {
            var o = t(this);
            if (i.preventDefault(), i.stopPropagation(), !o.is(".disabled, :disabled")) {
                var n = e(o),
                    a = n.hasClass("open");
                if (!a && 27 != i.which || a && 27 == i.which) return 27 == i.which && n.find(s).trigger("focus"), o.trigger("click");
                var r = " li:not(.disabled):visible a",
                    l = n.find(".dropdown-menu" + r);
                if (l.length) {
                    var h = l.index(i.target);
                    38 == i.which && h > 0 && h--, 40 == i.which && h < l.length - 1 && h++, ~h || (h = 0), l.eq(h).trigger("focus")
                }
            }
        }
    };
    var r = t.fn.dropdown;
    t.fn.dropdown = o, t.fn.dropdown.Constructor = a, t.fn.dropdown.noConflict = function() {
        return t.fn.dropdown = r, this
    }, t(document).on("click.bs.dropdown.data-api", i).on("click.bs.dropdown.data-api", ".dropdown form", function(t) {
        t.stopPropagation()
    }).on("click.bs.dropdown.data-api", s, a.prototype.toggle).on("keydown.bs.dropdown.data-api", s, a.prototype.keydown).on("keydown.bs.dropdown.data-api", ".dropdown-menu", a.prototype.keydown)
}(jQuery), + function(t) {
    "use strict";

    function e(e, o) {
        return this.each(function() {
            var n = t(this),
                s = n.data("bs.modal"),
                a = t.extend({}, i.DEFAULTS, n.data(), "object" == typeof e && e);
            s || n.data("bs.modal", s = new i(this, a)), "string" == typeof e ? s[e](o) : a.show && s.show(o)
        })
    }
    var i = function(e, i) {
        this.options = i, this.$body = t(document.body), this.$element = t(e), this.$dialog = this.$element.find(".modal-dialog"), this.$backdrop = null, this.isShown = null, this.originalBodyPad = null, this.scrollbarWidth = 0, this.ignoreBackdropClick = !1, this.options.remote && this.$element.find(".modal-content").load(this.options.remote, t.proxy(function() {
            this.$element.trigger("loaded.bs.modal")
        }, this))
    };
    i.VERSION = "3.3.5", i.TRANSITION_DURATION = 300, i.BACKDROP_TRANSITION_DURATION = 150, i.DEFAULTS = {
        backdrop: !0,
        keyboard: !0,
        show: !0
    }, i.prototype.toggle = function(t) {
        return this.isShown ? this.hide() : this.show(t)
    }, i.prototype.show = function(e) {
        var o = this,
            n = t.Event("show.bs.modal", {
                relatedTarget: e
            });
        this.$element.trigger(n), this.isShown || n.isDefaultPrevented() || (this.isShown = !0, this.checkScrollbar(), this.setScrollbar(), this.$body.addClass("modal-open"), this.escape(), this.resize(), this.$element.on("click.dismiss.bs.modal", '[data-dismiss="modal"]', t.proxy(this.hide, this)), this.$dialog.on("mousedown.dismiss.bs.modal", function() {
            o.$element.one("mouseup.dismiss.bs.modal", function(e) {
                t(e.target).is(o.$element) && (o.ignoreBackdropClick = !0)
            })
        }), this.backdrop(function() {
            var n = t.support.transition && o.$element.hasClass("fade");
            o.$element.parent().length || o.$element.appendTo(o.$body), o.$element.show().scrollTop(0), o.adjustDialog(), n && o.$element[0].offsetWidth, o.$element.addClass("in"), o.enforceFocus();
            var s = t.Event("shown.bs.modal", {
                relatedTarget: e
            });
            n ? o.$dialog.one("bsTransitionEnd", function() {
                o.$element.trigger("focus").trigger(s)
            }).emulateTransitionEnd(i.TRANSITION_DURATION) : o.$element.trigger("focus").trigger(s)
        }))
    }, i.prototype.hide = function(e) {
        e && e.preventDefault(), e = t.Event("hide.bs.modal"), this.$element.trigger(e), this.isShown && !e.isDefaultPrevented() && (this.isShown = !1, this.escape(), this.resize(), t(document).off("focusin.bs.modal"), this.$element.removeClass("in").off("click.dismiss.bs.modal").off("mouseup.dismiss.bs.modal"), this.$dialog.off("mousedown.dismiss.bs.modal"), t.support.transition && this.$element.hasClass("fade") ? this.$element.one("bsTransitionEnd", t.proxy(this.hideModal, this)).emulateTransitionEnd(i.TRANSITION_DURATION) : this.hideModal())
    }, i.prototype.enforceFocus = function() {
        t(document).off("focusin.bs.modal").on("focusin.bs.modal", t.proxy(function(t) {
            this.$element[0] === t.target || this.$element.has(t.target).length || this.$element.trigger("focus")
        }, this))
    }, i.prototype.escape = function() {
        this.isShown && this.options.keyboard ? this.$element.on("keydown.dismiss.bs.modal", t.proxy(function(t) {
            27 == t.which && this.hide()
        }, this)) : this.isShown || this.$element.off("keydown.dismiss.bs.modal")
    }, i.prototype.resize = function() {
        this.isShown ? t(window).on("resize.bs.modal", t.proxy(this.handleUpdate, this)) : t(window).off("resize.bs.modal")
    }, i.prototype.hideModal = function() {
        var t = this;
        this.$element.hide(), this.backdrop(function() {
            t.$body.removeClass("modal-open"), t.resetAdjustments(), t.resetScrollbar(), t.$element.trigger("hidden.bs.modal")
        })
    }, i.prototype.removeBackdrop = function() {
        this.$backdrop && this.$backdrop.remove(), this.$backdrop = null
    }, i.prototype.backdrop = function(e) {
        var o = this,
            n = this.$element.hasClass("fade") ? "fade" : "";
        if (this.isShown && this.options.backdrop) {
            var s = t.support.transition && n;
            if (this.$backdrop = t(document.createElement("div")).addClass("modal-backdrop " + n).appendTo(this.$body), this.$element.on("click.dismiss.bs.modal", t.proxy(function(t) {
                    return this.ignoreBackdropClick ? void(this.ignoreBackdropClick = !1) : void(t.target === t.currentTarget && ("static" == this.options.backdrop ? this.$element[0].focus() : this.hide()))
                }, this)), s && this.$backdrop[0].offsetWidth, this.$backdrop.addClass("in"), !e) return;
            s ? this.$backdrop.one("bsTransitionEnd", e).emulateTransitionEnd(i.BACKDROP_TRANSITION_DURATION) : e()
        } else if (!this.isShown && this.$backdrop) {
            this.$backdrop.removeClass("in");
            var a = function() {
                o.removeBackdrop(), e && e()
            };
            t.support.transition && this.$element.hasClass("fade") ? this.$backdrop.one("bsTransitionEnd", a).emulateTransitionEnd(i.BACKDROP_TRANSITION_DURATION) : a()
        } else e && e()
    }, i.prototype.handleUpdate = function() {
        this.adjustDialog()
    }, i.prototype.adjustDialog = function() {
        var t = this.$element[0].scrollHeight > document.documentElement.clientHeight;
        this.$element.css({
            paddingLeft: !this.bodyIsOverflowing && t ? this.scrollbarWidth : "",
            paddingRight: this.bodyIsOverflowing && !t ? this.scrollbarWidth : ""
        })
    }, i.prototype.resetAdjustments = function() {
        this.$element.css({
            paddingLeft: "",
            paddingRight: ""
        })
    }, i.prototype.checkScrollbar = function() {
        var t = window.innerWidth;
        if (!t) {
            var e = document.documentElement.getBoundingClientRect();
            t = e.right - Math.abs(e.left)
        }
        this.bodyIsOverflowing = document.body.clientWidth < t, this.scrollbarWidth = this.measureScrollbar()
    }, i.prototype.setScrollbar = function() {
        var t = parseInt(this.$body.css("padding-right") || 0, 10);
        this.originalBodyPad = document.body.style.paddingRight || "", this.bodyIsOverflowing && this.$body.css("padding-right", t + this.scrollbarWidth)
    }, i.prototype.resetScrollbar = function() {
        this.$body.css("padding-right", this.originalBodyPad)
    }, i.prototype.measureScrollbar = function() {
        var t = document.createElement("div");
        t.className = "modal-scrollbar-measure", this.$body.append(t);
        var e = t.offsetWidth - t.clientWidth;
        return this.$body[0].removeChild(t), e
    };
    var o = t.fn.modal;
    t.fn.modal = e, t.fn.modal.Constructor = i, t.fn.modal.noConflict = function() {
        return t.fn.modal = o, this
    }, t(document).on("click.bs.modal.data-api", '[data-toggle="modal"]', function(i) {
        var o = t(this),
            n = o.attr("href"),
            s = t(o.attr("data-target") || n && n.replace(/.*(?=#[^\s]+$)/, "")),
            a = s.data("bs.modal") ? "toggle" : t.extend({
                remote: !/#/.test(n) && n
            }, s.data(), o.data());
        o.is("a") && i.preventDefault(), s.one("show.bs.modal", function(t) {
            t.isDefaultPrevented() || s.one("hidden.bs.modal", function() {
                o.is(":visible") && o.trigger("focus")
            })
        }), e.call(s, a, this)
    })
}(jQuery), + function(t) {
    "use strict";

    function e(e) {
        return this.each(function() {
            var o = t(this),
                n = o.data("bs.tooltip"),
                s = "object" == typeof e && e;
            (n || !/destroy|hide/.test(e)) && (n || o.data("bs.tooltip", n = new i(this, s)), "string" == typeof e && n[e]())
        })
    }
    var i = function(t, e) {
        this.type = null, this.options = null, this.enabled = null, this.timeout = null, this.hoverState = null, this.$element = null, this.inState = null, this.init("tooltip", t, e)
    };
    i.VERSION = "3.3.5", i.TRANSITION_DURATION = 150, i.DEFAULTS = {
        animation: !0,
        placement: "top",
        selector: !1,
        template: '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
        trigger: "hover focus",
        title: "",
        delay: 0,
        html: !1,
        container: !1,
        viewport: {
            selector: "body",
            padding: 0
        }
    }, i.prototype.init = function(e, i, o) {
        if (this.enabled = !0, this.type = e, this.$element = t(i), this.options = this.getOptions(o), this.$viewport = this.options.viewport && t(t.isFunction(this.options.viewport) ? this.options.viewport.call(this, this.$element) : this.options.viewport.selector || this.options.viewport), this.inState = {
                click: !1,
                hover: !1,
                focus: !1
            }, this.$element[0] instanceof document.constructor && !this.options.selector) throw new Error("`selector` option must be specified when initializing " + this.type + " on the window.document object!");
        for (var n = this.options.trigger.split(" "), s = n.length; s--;) {
            var a = n[s];
            if ("click" == a) this.$element.on("click." + this.type, this.options.selector, t.proxy(this.toggle, this));
            else if ("manual" != a) {
                var r = "hover" == a ? "mouseenter" : "focusin",
                    l = "hover" == a ? "mouseleave" : "focusout";
                this.$element.on(r + "." + this.type, this.options.selector, t.proxy(this.enter, this)), this.$element.on(l + "." + this.type, this.options.selector, t.proxy(this.leave, this))
            }
        }
        this.options.selector ? this._options = t.extend({}, this.options, {
            trigger: "manual",
            selector: ""
        }) : this.fixTitle()
    }, i.prototype.getDefaults = function() {
        return i.DEFAULTS
    }, i.prototype.getOptions = function(e) {
        return e = t.extend({}, this.getDefaults(), this.$element.data(), e), e.delay && "number" == typeof e.delay && (e.delay = {
            show: e.delay,
            hide: e.delay
        }), e
    }, i.prototype.getDelegateOptions = function() {
        var e = {},
            i = this.getDefaults();
        return this._options && t.each(this._options, function(t, o) {
            i[t] != o && (e[t] = o)
        }), e
    }, i.prototype.enter = function(e) {
        var i = e instanceof this.constructor ? e : t(e.currentTarget).data("bs." + this.type);
        return i || (i = new this.constructor(e.currentTarget, this.getDelegateOptions()), t(e.currentTarget).data("bs." + this.type, i)), e instanceof t.Event && (i.inState["focusin" == e.type ? "focus" : "hover"] = !0), i.tip().hasClass("in") || "in" == i.hoverState ? void(i.hoverState = "in") : (clearTimeout(i.timeout), i.hoverState = "in", i.options.delay && i.options.delay.show ? void(i.timeout = setTimeout(function() {
            "in" == i.hoverState && i.show()
        }, i.options.delay.show)) : i.show())
    }, i.prototype.isInStateTrue = function() {
        for (var t in this.inState)
            if (this.inState[t]) return !0;
        return !1
    }, i.prototype.leave = function(e) {
        var i = e instanceof this.constructor ? e : t(e.currentTarget).data("bs." + this.type);
        return i || (i = new this.constructor(e.currentTarget, this.getDelegateOptions()), t(e.currentTarget).data("bs." + this.type, i)), e instanceof t.Event && (i.inState["focusout" == e.type ? "focus" : "hover"] = !1), i.isInStateTrue() ? void 0 : (clearTimeout(i.timeout), i.hoverState = "out", i.options.delay && i.options.delay.hide ? void(i.timeout = setTimeout(function() {
            "out" == i.hoverState && i.hide()
        }, i.options.delay.hide)) : i.hide())
    }, i.prototype.show = function() {
        var e = t.Event("show.bs." + this.type);
        if (this.hasContent() && this.enabled) {
            this.$element.trigger(e);
            var o = t.contains(this.$element[0].ownerDocument.documentElement, this.$element[0]);
            if (e.isDefaultPrevented() || !o) return;
            var n = this,
                s = this.tip(),
                a = this.getUID(this.type);
            this.setContent(), s.attr("id", a), this.$element.attr("aria-describedby", a), this.options.animation && s.addClass("fade");
            var r = "function" == typeof this.options.placement ? this.options.placement.call(this, s[0], this.$element[0]) : this.options.placement,
                l = /\s?auto?\s?/i,
                h = l.test(r);
            h && (r = r.replace(l, "") || "top"), s.detach().css({
                top: 0,
                left: 0,
                display: "block"
            }).addClass(r).data("bs." + this.type, this), this.options.container ? s.appendTo(this.options.container) : s.insertAfter(this.$element), this.$element.trigger("inserted.bs." + this.type);
            var d = this.getPosition(),
                p = s[0].offsetWidth,
                c = s[0].offsetHeight;
            if (h) {
                var f = r,
                    u = this.getPosition(this.$viewport);
                r = "bottom" == r && d.bottom + c > u.bottom ? "top" : "top" == r && d.top - c < u.top ? "bottom" : "right" == r && d.right + p > u.width ? "left" : "left" == r && d.left - p < u.left ? "right" : r, s.removeClass(f).addClass(r)
            }
            var g = this.getCalculatedOffset(r, d, p, c);
            this.applyPlacement(g, r);
            var m = function() {
                var t = n.hoverState;
                n.$element.trigger("shown.bs." + n.type), n.hoverState = null, "out" == t && n.leave(n)
            };
            t.support.transition && this.$tip.hasClass("fade") ? s.one("bsTransitionEnd", m).emulateTransitionEnd(i.TRANSITION_DURATION) : m()
        }
    }, i.prototype.applyPlacement = function(e, i) {
        var o = this.tip(),
            n = o[0].offsetWidth,
            s = o[0].offsetHeight,
            a = parseInt(o.css("margin-top"), 10),
            r = parseInt(o.css("margin-left"), 10);
        isNaN(a) && (a = 0), isNaN(r) && (r = 0), e.top += a, e.left += r, t.offset.setOffset(o[0], t.extend({
            using: function(t) {
                o.css({
                    top: Math.round(t.top),
                    left: Math.round(t.left)
                })
            }
        }, e), 0), o.addClass("in");
        var l = o[0].offsetWidth,
            h = o[0].offsetHeight;
        "top" == i && h != s && (e.top = e.top + s - h);
        var d = this.getViewportAdjustedDelta(i, e, l, h);
        d.left ? e.left += d.left : e.top += d.top;
        var p = /top|bottom/.test(i),
            c = p ? 2 * d.left - n + l : 2 * d.top - s + h,
            f = p ? "offsetWidth" : "offsetHeight";
        o.offset(e), this.replaceArrow(c, o[0][f], p)
    }, i.prototype.replaceArrow = function(t, e, i) {
        this.arrow().css(i ? "left" : "top", 50 * (1 - t / e) + "%").css(i ? "top" : "left", "")
    }, i.prototype.setContent = function() {
        var t = this.tip(),
            e = this.getTitle();
        t.find(".tooltip-inner")[this.options.html ? "html" : "text"](e), t.removeClass("fade in top bottom left right")
    }, i.prototype.hide = function(e) {
        function o() {
            "in" != n.hoverState && s.detach(), n.$element.removeAttr("aria-describedby").trigger("hidden.bs." + n.type), e && e()
        }
        var n = this,
            s = t(this.$tip),
            a = t.Event("hide.bs." + this.type);
        return this.$element.trigger(a), a.isDefaultPrevented() ? void 0 : (s.removeClass("in"), t.support.transition && s.hasClass("fade") ? s.one("bsTransitionEnd", o).emulateTransitionEnd(i.TRANSITION_DURATION) : o(), this.hoverState = null, this)
    }, i.prototype.fixTitle = function() {
        var t = this.$element;
        (t.attr("title") || "string" != typeof t.attr("data-original-title")) && t.attr("data-original-title", t.attr("title") || "").attr("title", "")
    }, i.prototype.hasContent = function() {
        return this.getTitle()
    }, i.prototype.getPosition = function(e) {
        e = e || this.$element;
        var i = e[0],
            o = "BODY" == i.tagName,
            n = i.getBoundingClientRect();
        null == n.width && (n = t.extend({}, n, {
            width: n.right - n.left,
            height: n.bottom - n.top
        }));
        var s = o ? {
                top: 0,
                left: 0
            } : e.offset(),
            a = {
                scroll: o ? document.documentElement.scrollTop || document.body.scrollTop : e.scrollTop()
            },
            r = o ? {
                width: t(window).width(),
                height: t(window).height()
            } : null;
        return t.extend({}, n, a, r, s)
    }, i.prototype.getCalculatedOffset = function(t, e, i, o) {
        return "bottom" == t ? {
            top: e.top + e.height,
            left: e.left + e.width / 2 - i / 2
        } : "top" == t ? {
            top: e.top - o,
            left: e.left + e.width / 2 - i / 2
        } : "left" == t ? {
            top: e.top + e.height / 2 - o / 2,
            left: e.left - i
        } : {
            top: e.top + e.height / 2 - o / 2,
            left: e.left + e.width
        }
    }, i.prototype.getViewportAdjustedDelta = function(t, e, i, o) {
        var n = {
            top: 0,
            left: 0
        };
        if (!this.$viewport) return n;
        var s = this.options.viewport && this.options.viewport.padding || 0,
            a = this.getPosition(this.$viewport);
        if (/right|left/.test(t)) {
            var r = e.top - s - a.scroll,
                l = e.top + s - a.scroll + o;
            r < a.top ? n.top = a.top - r : l > a.top + a.height && (n.top = a.top + a.height - l)
        } else {
            var h = e.left - s,
                d = e.left + s + i;
            h < a.left ? n.left = a.left - h : d > a.right && (n.left = a.left + a.width - d)
        }
        return n
    }, i.prototype.getTitle = function() {
        var t, e = this.$element,
            i = this.options;
        return t = e.attr("data-original-title") || ("function" == typeof i.title ? i.title.call(e[0]) : i.title)
    }, i.prototype.getUID = function(t) {
        do t += ~~(1e6 * Math.random()); while (document.getElementById(t));
        return t
    }, i.prototype.tip = function() {
        if (!this.$tip && (this.$tip = t(this.options.template), 1 != this.$tip.length)) throw new Error(this.type + " `template` option must consist of exactly 1 top-level element!");
        return this.$tip
    }, i.prototype.arrow = function() {
        return this.$arrow = this.$arrow || this.tip().find(".tooltip-arrow")
    }, i.prototype.enable = function() {
        this.enabled = !0
    }, i.prototype.disable = function() {
        this.enabled = !1
    }, i.prototype.toggleEnabled = function() {
        this.enabled = !this.enabled
    }, i.prototype.toggle = function(e) {
        var i = this;
        e && (i = t(e.currentTarget).data("bs." + this.type), i || (i = new this.constructor(e.currentTarget, this.getDelegateOptions()), t(e.currentTarget).data("bs." + this.type, i))), e ? (i.inState.click = !i.inState.click, i.isInStateTrue() ? i.enter(i) : i.leave(i)) : i.tip().hasClass("in") ? i.leave(i) : i.enter(i)
    }, i.prototype.destroy = function() {
        var t = this;
        clearTimeout(this.timeout), this.hide(function() {
            t.$element.off("." + t.type).removeData("bs." + t.type), t.$tip && t.$tip.detach(), t.$tip = null, t.$arrow = null, t.$viewport = null
        })
    };
    var o = t.fn.tooltip;
    t.fn.tooltip = e, t.fn.tooltip.Constructor = i, t.fn.tooltip.noConflict = function() {
        return t.fn.tooltip = o, this
    }
}(jQuery), + function(t) {
    "use strict";

    function e(e) {
        return this.each(function() {
            var o = t(this),
                n = o.data("bs.popover"),
                s = "object" == typeof e && e;
            (n || !/destroy|hide/.test(e)) && (n || o.data("bs.popover", n = new i(this, s)), "string" == typeof e && n[e]())
        })
    }
    var i = function(t, e) {
        this.init("popover", t, e)
    };
    if (!t.fn.tooltip) throw new Error("Popover requires tooltip.js");
    i.VERSION = "3.3.5", i.DEFAULTS = t.extend({}, t.fn.tooltip.Constructor.DEFAULTS, {
        placement: "right",
        trigger: "click",
        content: "",
        template: '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'
    }), i.prototype = t.extend({}, t.fn.tooltip.Constructor.prototype), i.prototype.constructor = i, i.prototype.getDefaults = function() {
        return i.DEFAULTS
    }, i.prototype.setContent = function() {
        var t = this.tip(),
            e = this.getTitle(),
            i = this.getContent();
        t.find(".popover-title")[this.options.html ? "html" : "text"](e), t.find(".popover-content").children().detach().end()[this.options.html ? "string" == typeof i ? "html" : "append" : "text"](i), t.removeClass("fade top bottom left right in"), t.find(".popover-title").html() || t.find(".popover-title").hide()
    }, i.prototype.hasContent = function() {
        return this.getTitle() || this.getContent()
    }, i.prototype.getContent = function() {
        var t = this.$element,
            e = this.options;
        return t.attr("data-content") || ("function" == typeof e.content ? e.content.call(t[0]) : e.content)
    }, i.prototype.arrow = function() {
        return this.$arrow = this.$arrow || this.tip().find(".arrow")
    };
    var o = t.fn.popover;
    t.fn.popover = e, t.fn.popover.Constructor = i, t.fn.popover.noConflict = function() {
        return t.fn.popover = o, this
    }
}(jQuery), + function(t) {
    "use strict";

    function e(e) {
        return this.each(function() {
            var o = t(this),
                n = o.data("bs.tab");
            n || o.data("bs.tab", n = new i(this)), "string" == typeof e && n[e]()
        })
    }
    var i = function(e) {
        this.element = t(e)
    };
    i.VERSION = "3.3.5", i.TRANSITION_DURATION = 150, i.prototype.show = function() {
        var e = this.element,
            i = e.closest("ul:not(.dropdown-menu)"),
            o = e.data("target");
        if (o || (o = e.attr("href"), o = o && o.replace(/.*(?=#[^\s]*$)/, "")), !e.parent("li").hasClass("active")) {
            var n = i.find(".active:last a"),
                s = t.Event("hide.bs.tab", {
                    relatedTarget: e[0]
                }),
                a = t.Event("show.bs.tab", {
                    relatedTarget: n[0]
                });
            if (n.trigger(s), e.trigger(a), !a.isDefaultPrevented() && !s.isDefaultPrevented()) {
                var r = t(o);
                this.activate(e.closest("li"), i), this.activate(r, r.parent(), function() {
                    n.trigger({
                        type: "hidden.bs.tab",
                        relatedTarget: e[0]
                    }), e.trigger({
                        type: "shown.bs.tab",
                        relatedTarget: n[0]
                    })
                })
            }
        }
    }, i.prototype.activate = function(e, o, n) {
        function s() {
            a.removeClass("active").find("> .dropdown-menu > .active").removeClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded", !1), e.addClass("active").find('[data-toggle="tab"]').attr("aria-expanded", !0), r ? (e[0].offsetWidth, e.addClass("in")) : e.removeClass("fade"), e.parent(".dropdown-menu").length && e.closest("li.dropdown").addClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded", !0), n && n()
        }
        var a = o.find("> .active"),
            r = n && t.support.transition && (a.length && a.hasClass("fade") || !!o.find("> .fade").length);
        a.length && r ? a.one("bsTransitionEnd", s).emulateTransitionEnd(i.TRANSITION_DURATION) : s(), a.removeClass("in")
    };
    var o = t.fn.tab;
    t.fn.tab = e, t.fn.tab.Constructor = i, t.fn.tab.noConflict = function() {
        return t.fn.tab = o, this
    };
    var n = function(i) {
        i.preventDefault(), e.call(t(this), "show")
    };
    t(document).on("click.bs.tab.data-api", '[data-toggle="tab"]', n).on("click.bs.tab.data-api", '[data-toggle="pill"]', n)
}(jQuery), + function(t) {
    "use strict";

    function e(e) {
        return this.each(function() {
            var o = t(this),
                n = o.data("bs.affix"),
                s = "object" == typeof e && e;
            n || o.data("bs.affix", n = new i(this, s)), "string" == typeof e && n[e]()
        })
    }
    var i = function(e, o) {
        this.options = t.extend({}, i.DEFAULTS, o), this.$target = t(this.options.target).on("scroll.bs.affix.data-api", t.proxy(this.checkPosition, this)).on("click.bs.affix.data-api", t.proxy(this.checkPositionWithEventLoop, this)), this.$element = t(e), this.affixed = null, this.unpin = null, this.pinnedOffset = null, this.checkPosition()
    };
    i.VERSION = "3.3.5", i.RESET = "affix affix-top affix-bottom", i.DEFAULTS = {
        offset: 0,
        target: window
    }, i.prototype.getState = function(t, e, i, o) {
        var n = this.$target.scrollTop(),
            s = this.$element.offset(),
            a = this.$target.height();
        if (null != i && "top" == this.affixed) return i > n ? "top" : !1;
        if ("bottom" == this.affixed) return null != i ? n + this.unpin <= s.top ? !1 : "bottom" : t - o >= n + a ? !1 : "bottom";
        var r = null == this.affixed,
            l = r ? n : s.top,
            h = r ? a : e;
        return null != i && i >= n ? "top" : null != o && l + h >= t - o ? "bottom" : !1
    }, i.prototype.getPinnedOffset = function() {
        if (this.pinnedOffset) return this.pinnedOffset;
        this.$element.removeClass(i.RESET).addClass("affix");
        var t = this.$target.scrollTop(),
            e = this.$element.offset();
        return this.pinnedOffset = e.top - t
    }, i.prototype.checkPositionWithEventLoop = function() {
        setTimeout(t.proxy(this.checkPosition, this), 1)
    }, i.prototype.checkPosition = function() {
        if (this.$element.is(":visible")) {
            var e = this.$element.height(),
                o = this.options.offset,
                n = o.top,
                s = o.bottom,
                a = Math.max(t(document).height(), t(document.body).height());
            "object" != typeof o && (s = n = o), "function" == typeof n && (n = o.top(this.$element)), "function" == typeof s && (s = o.bottom(this.$element));
            var r = this.getState(a, e, n, s);
            if (this.affixed != r) {
                null != this.unpin && this.$element.css("top", "");
                var l = "affix" + (r ? "-" + r : ""),
                    h = t.Event(l + ".bs.affix");
                if (this.$element.trigger(h), h.isDefaultPrevented()) return;
                this.affixed = r, this.unpin = "bottom" == r ? this.getPinnedOffset() : null, this.$element.removeClass(i.RESET).addClass(l).trigger(l.replace("affix", "affixed") + ".bs.affix")
            }
            "bottom" == r && this.$element.offset({
                top: a - e - s
            })
        }
    };
    var o = t.fn.affix;
    t.fn.affix = e, t.fn.affix.Constructor = i, t.fn.affix.noConflict = function() {
        return t.fn.affix = o, this
    }, t(window).on("load", function() {
        t('[data-spy="affix"]').each(function() {
            var i = t(this),
                o = i.data();
            o.offset = o.offset || {}, null != o.offsetBottom && (o.offset.bottom = o.offsetBottom), null != o.offsetTop && (o.offset.top = o.offsetTop), e.call(i, o)
        })
    })
}(jQuery), + function(t) {
    "use strict";

    function e(e) {
        var i, o = e.attr("data-target") || (i = e.attr("href")) && i.replace(/.*(?=#[^\s]+$)/, "");
        return t(o)
    }

    function i(e) {
        return this.each(function() {
            var i = t(this),
                n = i.data("bs.collapse"),
                s = t.extend({}, o.DEFAULTS, i.data(), "object" == typeof e && e);
            !n && s.toggle && /show|hide/.test(e) && (s.toggle = !1), n || i.data("bs.collapse", n = new o(this, s)), "string" == typeof e && n[e]()
        })
    }
    var o = function(e, i) {
        this.$element = t(e), this.options = t.extend({}, o.DEFAULTS, i), this.$trigger = t('[data-toggle="collapse"][href="#' + e.id + '"],[data-toggle="collapse"][data-target="#' + e.id + '"]'), this.transitioning = null, this.options.parent ? this.$parent = this.getParent() : this.addAriaAndCollapsedClass(this.$element, this.$trigger), this.options.toggle && this.toggle()
    };
    o.VERSION = "3.3.5", o.TRANSITION_DURATION = 350, o.DEFAULTS = {
        toggle: !0
    }, o.prototype.dimension = function() {
        var t = this.$element.hasClass("width");
        return t ? "width" : "height"
    }, o.prototype.show = function() {
        if (!this.transitioning && !this.$element.hasClass("in")) {
            var e, n = this.$parent && this.$parent.children(".panel").children(".in, .collapsing");
            if (!(n && n.length && (e = n.data("bs.collapse"), e && e.transitioning))) {
                var s = t.Event("show.bs.collapse");
                if (this.$element.trigger(s), !s.isDefaultPrevented()) {
                    n && n.length && (i.call(n, "hide"), e || n.data("bs.collapse", null));
                    var a = this.dimension();
                    this.$element.removeClass("collapse").addClass("collapsing")[a](0).attr("aria-expanded", !0), this.$trigger.removeClass("collapsed").attr("aria-expanded", !0), this.transitioning = 1;
                    var r = function() {
                        this.$element.removeClass("collapsing").addClass("collapse in")[a](""), this.transitioning = 0, this.$element.trigger("shown.bs.collapse")
                    };
                    if (!t.support.transition) return r.call(this);
                    var l = t.camelCase(["scroll", a].join("-"));
                    this.$element.one("bsTransitionEnd", t.proxy(r, this)).emulateTransitionEnd(o.TRANSITION_DURATION)[a](this.$element[0][l]);
                }
            }
        }
    }, o.prototype.hide = function() {
        if (!this.transitioning && this.$element.hasClass("in")) {
            var e = t.Event("hide.bs.collapse");
            if (this.$element.trigger(e), !e.isDefaultPrevented()) {
                var i = this.dimension();
                this.$element[i](this.$element[i]())[0].offsetHeight, this.$element.addClass("collapsing").removeClass("collapse in").attr("aria-expanded", !1), this.$trigger.addClass("collapsed").attr("aria-expanded", !1), this.transitioning = 1;
                var n = function() {
                    this.transitioning = 0, this.$element.removeClass("collapsing").addClass("collapse").trigger("hidden.bs.collapse")
                };
                return t.support.transition ? void this.$element[i](0).one("bsTransitionEnd", t.proxy(n, this)).emulateTransitionEnd(o.TRANSITION_DURATION) : n.call(this)
            }
        }
    }, o.prototype.toggle = function() {
        this[this.$element.hasClass("in") ? "hide" : "show"]()
    }, o.prototype.getParent = function() {
        return t(this.options.parent).find('[data-toggle="collapse"][data-parent="' + this.options.parent + '"]').each(t.proxy(function(i, o) {
            var n = t(o);
            this.addAriaAndCollapsedClass(e(n), n)
        }, this)).end()
    }, o.prototype.addAriaAndCollapsedClass = function(t, e) {
        var i = t.hasClass("in");
        t.attr("aria-expanded", i), e.toggleClass("collapsed", !i).attr("aria-expanded", i)
    };
    var n = t.fn.collapse;
    t.fn.collapse = i, t.fn.collapse.Constructor = o, t.fn.collapse.noConflict = function() {
        return t.fn.collapse = n, this
    }, t(document).on("click.bs.collapse.data-api", '[data-toggle="collapse"]', function(o) {
        var n = t(this);
        n.attr("data-target") || o.preventDefault();
        var s = e(n),
            a = s.data("bs.collapse"),
            r = a ? "toggle" : n.data();
        i.call(s, r)
    })
}(jQuery), + function(t) {
    "use strict";

    function e(i, o) {
        this.$body = t(document.body), this.$scrollElement = t(t(i).is(document.body) ? window : i), this.options = t.extend({}, e.DEFAULTS, o), this.selector = (this.options.target || "") + " .nav li > a", this.offsets = [], this.targets = [], this.activeTarget = null, this.scrollHeight = 0, this.$scrollElement.on("scroll.bs.scrollspy", t.proxy(this.process, this)), this.refresh(), this.process()
    }

    function i(i) {
        return this.each(function() {
            var o = t(this),
                n = o.data("bs.scrollspy"),
                s = "object" == typeof i && i;
            n || o.data("bs.scrollspy", n = new e(this, s)), "string" == typeof i && n[i]()
        })
    }
    e.VERSION = "3.3.5", e.DEFAULTS = {
        offset: 10
    }, e.prototype.getScrollHeight = function() {
        return this.$scrollElement[0].scrollHeight || Math.max(this.$body[0].scrollHeight, document.documentElement.scrollHeight)
    }, e.prototype.refresh = function() {
        var e = this,
            i = "offset",
            o = 0;
        this.offsets = [], this.targets = [], this.scrollHeight = this.getScrollHeight(), t.isWindow(this.$scrollElement[0]) || (i = "position", o = this.$scrollElement.scrollTop()), this.$body.find(this.selector).map(function() {
            var e = t(this),
                n = e.data("target") || e.attr("href"),
                s = /^#./.test(n) && t(n);
            return s && s.length && s.is(":visible") && [
                [s[i]().top + o, n]
            ] || null
        }).sort(function(t, e) {
            return t[0] - e[0]
        }).each(function() {
            e.offsets.push(this[0]), e.targets.push(this[1])
        })
    }, e.prototype.process = function() {
        var t, e = this.$scrollElement.scrollTop() + this.options.offset,
            i = this.getScrollHeight(),
            o = this.options.offset + i - this.$scrollElement.height(),
            n = this.offsets,
            s = this.targets,
            a = this.activeTarget;
        if (this.scrollHeight != i && this.refresh(), e >= o) return a != (t = s[s.length - 1]) && this.activate(t);
        if (a && e < n[0]) return this.activeTarget = null, this.clear();
        for (t = n.length; t--;) a != s[t] && e >= n[t] && (void 0 === n[t + 1] || e < n[t + 1]) && this.activate(s[t])
    }, e.prototype.activate = function(e) {
        this.activeTarget = e, this.clear();
        var i = this.selector + '[data-target="' + e + '"],' + this.selector + '[href="' + e + '"]',
            o = t(i).parents("li").addClass("active");
        o.parent(".dropdown-menu").length && (o = o.closest("li.dropdown").addClass("active")), o.trigger("activate.bs.scrollspy")
    }, e.prototype.clear = function() {
        t(this.selector).parentsUntil(this.options.target, ".active").removeClass("active")
    };
    var o = t.fn.scrollspy;
    t.fn.scrollspy = i, t.fn.scrollspy.Constructor = e, t.fn.scrollspy.noConflict = function() {
        return t.fn.scrollspy = o, this
    }, t(window).on("load.bs.scrollspy.data-api", function() {
        t('[data-spy="scroll"]').each(function() {
            var e = t(this);
            i.call(e, e.data())
        })
    })
}(jQuery), + function(t) {
    "use strict";

    function e() {
        var t = document.createElement("bootstrap"),
            e = {
                WebkitTransition: "webkitTransitionEnd",
                MozTransition: "transitionend",
                OTransition: "oTransitionEnd otransitionend",
                transition: "transitionend"
            };
        for (var i in e)
            if (void 0 !== t.style[i]) return {
                end: e[i]
            };
        return !1
    }
    t.fn.emulateTransitionEnd = function(e) {
        var i = !1,
            o = this;
        t(this).one("bsTransitionEnd", function() {
            i = !0
        });
        var n = function() {
            i || t(o).trigger(t.support.transition.end)
        };
        return setTimeout(n, e), this
    }, t(function() {
        t.support.transition = e(), t.support.transition && (t.event.special.bsTransitionEnd = {
            bindType: t.support.transition.end,
            delegateType: t.support.transition.end,
            handle: function(e) {
                return t(e.target).is(this) ? e.handleObj.handler.apply(this, arguments) : void 0
            }
        })
    })
}(jQuery);

; // leancore/BootstrapNamespacing.js
$.fn.bootstrapModal = $.fn.modal;

; // leancore/libs/underscore-min.js
(function() {
    function et(t) {
        function r(n, i, r, u, f, e) {
            for (; f >= 0 && e > f; f += t) {
                var o = u ? u[f] : f;
                r = i(r, n[o], o, n)
            }
            return r
        }
        return function(u, f, o, s) {
            f = e(f, s, 4);
            var h = !i(u) && n.keys(u),
                l = (h || u).length,
                c = t > 0 ? 0 : l - 1;
            return arguments.length < 3 && (o = u[h ? h[c] : c], c += t), r(u, f, o, h, c, l)
        }
    }

    function rt(n) {
        return function(i, r, f) {
            r = t(r, f);
            for (var o = u(i), e = n > 0 ? 0 : o - 1; e >= 0 && o > e; e += n)
                if (r(i[e], e, i)) return e;
            return -1
        }
    }

    function ut(t, i, f) {
        return function(e, o, s) {
            var c = 0,
                h = u(e);
            if ("number" == typeof s) t > 0 ? c = s >= 0 ? s : Math.max(s + h, c) : h = s >= 0 ? Math.min(s + 1, h) : s + h + 1;
            else if (f && s && h) return s = f(e, o), e[s] === o ? s : -1;
            if (o !== o) return s = i(r.call(e, c, h), n.isNaN), s >= 0 ? s + c : -1;
            for (s = t > 0 ? c : h - 1; s >= 0 && h > s; s += t)
                if (e[s] === o) return s;
            return -1
        }
    }

    function ft(t, i) {
        var u = k.length,
            f = t.constructor,
            e = n.isFunction(f) && f.prototype || w,
            r = "constructor";
        for (n.has(t, r) && !n.contains(i, r) && i.push(r); u--;) r = k[u], r in t && t[r] !== e[r] && !n.contains(i, r) && i.push(r)
    }
    var a = this,
        lt = a._,
        l = Array.prototype,
        w = Object.prototype,
        gt = Function.prototype,
        dt = l.push,
        r = l.slice,
        o = w.toString,
        wt = w.hasOwnProperty,
        pt = Array.isArray,
        ct = Object.keys,
        y = gt.bind,
        ht = Object.create,
        p = function() {},
        n = function(t) {
            return t instanceof n ? t : this instanceof n ? void(this._wrapped = t) : new n(t)
        },
        e, t, h, f, g, d, k, s, nt, c;
    "undefined" != typeof exports ? ("undefined" != typeof module && module.exports && (exports = module.exports = n), exports._ = n) : a._ = n, n.VERSION = "1.8.3", e = function(n, t, i) {
        if (t === void 0) return n;
        switch (null == i ? 3 : i) {
            case 1:
                return function(i) {
                    return n.call(t, i)
                };
            case 2:
                return function(i, r) {
                    return n.call(t, i, r)
                };
            case 3:
                return function(i, r, u) {
                    return n.call(t, i, r, u)
                };
            case 4:
                return function(i, r, u, f) {
                    return n.call(t, i, r, u, f)
                }
        }
        return function() {
            return n.apply(t, arguments)
        }
    }, t = function(t, i, r) {
        return null == t ? n.identity : n.isFunction(t) ? e(t, i, r) : n.isObject(t) ? n.matcher(t) : n.property(t)
    }, n.iteratee = function(n, i) {
        return t(n, i, 1 / 0)
    };
    var b = function(n, t) {
            return function(i) {
                var e = arguments.length,
                    r, u;
                if (2 > e || null == i) return i;
                for (r = 1; e > r; r++)
                    for (var o = arguments[r], s = n(o), h = s.length, f = 0; h > f; f++) u = s[f], t && i[u] !== void 0 || (i[u] = o[u]);
                return i
            }
        },
        st = function(t) {
            if (!n.isObject(t)) return {};
            if (ht) return ht(t);
            p.prototype = t;
            var i = new p;
            return p.prototype = null, i
        },
        ot = function(n) {
            return function(t) {
                if (null != t) return t[n]
            }
        },
        at = Math.pow(2, 53) - 1,
        u = ot("length"),
        i = function(n) {
            var t = u(n);
            return "number" == typeof t && t >= 0 && at >= t
        };
    n.each = n.forEach = function(t, r, u) {
        var f, o, s;
        if (r = e(r, u), i(t))
            for (f = 0, o = t.length; o > f; f++) r(t[f], f, t);
        else
            for (s = n.keys(t), f = 0, o = s.length; o > f; f++) r(t[s[f]], s[f], t);
        return t
    }, n.map = n.collect = function(r, u, f) {
        var s;
        u = t(u, f);
        for (var o = !i(r) && n.keys(r), h = (o || r).length, c = Array(h), e = 0; h > e; e++) s = o ? o[e] : e, c[e] = u(r[s], s, r);
        return c
    }, n.reduce = n.foldl = n.inject = et(1), n.reduceRight = n.foldr = et(-1), n.find = n.detect = function(t, r, u) {
        var f;
        return f = i(t) ? n.findIndex(t, r, u) : n.findKey(t, r, u), f !== void 0 && f !== -1 ? t[f] : void 0
    }, n.filter = n.select = function(i, r, u) {
        var f = [];
        return r = t(r, u), n.each(i, function(n, t, i) {
            r(n, t, i) && f.push(n)
        }), f
    }, n.reject = function(i, r, u) {
        return n.filter(i, n.negate(t(r)), u)
    }, n.every = n.all = function(r, u, f) {
        var s;
        u = t(u, f);
        for (var o = !i(r) && n.keys(r), h = (o || r).length, e = 0; h > e; e++)
            if (s = o ? o[e] : e, !u(r[s], s, r)) return !1;
        return !0
    }, n.some = n.any = function(r, u, f) {
        var s;
        u = t(u, f);
        for (var o = !i(r) && n.keys(r), h = (o || r).length, e = 0; h > e; e++)
            if (s = o ? o[e] : e, u(r[s], s, r)) return !0;
        return !1
    }, n.contains = n.includes = n.include = function(t, r, u, f) {
        return i(t) || (t = n.values(t)), ("number" != typeof u || f) && (u = 0), n.indexOf(t, r, u) >= 0
    }, n.invoke = function(t, i) {
        var u = r.call(arguments, 2),
            f = n.isFunction(i);
        return n.map(t, function(n) {
            var t = f ? i : n[i];
            return null == t ? t : t.apply(n, u)
        })
    }, n.pluck = function(t, i) {
        return n.map(t, n.property(i))
    }, n.where = function(t, i) {
        return n.filter(t, n.matcher(i))
    }, n.findWhere = function(t, i) {
        return n.find(t, n.matcher(i))
    }, n.max = function(r, u, f) {
        var h, o, e = -1 / 0,
            c = -1 / 0,
            s, l;
        if (null == u && null != r)
            for (r = i(r) ? r : n.values(r), s = 0, l = r.length; l > s; s++) h = r[s], h > e && (e = h);
        else u = t(u, f), n.each(r, function(n, t, i) {
            o = u(n, t, i), (o > c || o === -1 / 0 && e === -1 / 0) && (e = n, c = o)
        });
        return e
    }, n.min = function(r, u, f) {
        var h, o, e = 1 / 0,
            c = 1 / 0,
            s, l;
        if (null == u && null != r)
            for (r = i(r) ? r : n.values(r), s = 0, l = r.length; l > s; s++) h = r[s], e > h && (e = h);
        else u = t(u, f), n.each(r, function(n, t, i) {
            o = u(n, t, i), (c > o || 1 / 0 === o && 1 / 0 === e) && (e = n, c = o)
        });
        return e
    }, n.shuffle = function(t) {
        for (var u, e = i(t) ? t : n.values(t), o = e.length, f = Array(o), r = 0; o > r; r++) u = n.random(0, r), u !== r && (f[r] = f[u]), f[u] = e[r];
        return f
    }, n.sample = function(t, r, u) {
        return null == r || u ? (i(t) || (t = n.values(t)), t[n.random(t.length - 1)]) : n.shuffle(t).slice(0, Math.max(0, r))
    }, n.sortBy = function(i, r, u) {
        return r = t(r, u), n.pluck(n.map(i, function(n, t, i) {
            return {
                value: n,
                index: t,
                criteria: r(n, t, i)
            }
        }).sort(function(n, t) {
            var i = n.criteria,
                r = t.criteria;
            if (i !== r) {
                if (i > r || i === void 0) return 1;
                if (r > i || r === void 0) return -1
            }
            return n.index - t.index
        }), "value")
    }, h = function(i) {
        return function(r, u, f) {
            var e = {};
            return u = t(u, f), n.each(r, function(n, t) {
                var f = u(n, t, r);
                i(e, n, f)
            }), e
        }
    }, n.groupBy = h(function(t, i, r) {
        n.has(t, r) ? t[r].push(i) : t[r] = [i]
    }), n.indexBy = h(function(n, t, i) {
        n[i] = t
    }), n.countBy = h(function(t, i, r) {
        n.has(t, r) ? t[r]++ : t[r] = 1
    }), n.toArray = function(t) {
        return t ? n.isArray(t) ? r.call(t) : i(t) ? n.map(t, n.identity) : n.values(t) : []
    }, n.size = function(t) {
        return null == t ? 0 : i(t) ? t.length : n.keys(t).length
    }, n.partition = function(i, r, u) {
        r = t(r, u);
        var f = [],
            e = [];
        return n.each(i, function(n, t, i) {
            (r(n, t, i) ? f : e).push(n)
        }), [f, e]
    }, n.first = n.head = n.take = function(t, i, r) {
        if (null != t) return null == i || r ? t[0] : n.initial(t, t.length - i)
    }, n.initial = function(n, t, i) {
        return r.call(n, 0, Math.max(0, n.length - (null == t || i ? 1 : t)))
    }, n.last = function(t, i, r) {
        if (null != t) return null == i || r ? t[t.length - 1] : n.rest(t, Math.max(0, t.length - i))
    }, n.rest = n.tail = n.drop = function(n, t, i) {
        return r.call(n, null == t || i ? 1 : t)
    }, n.compact = function(t) {
        return n.filter(t, n.identity)
    }, f = function(t, r, e, o) {
        for (var s, l, a, h = [], v = 0, c = o || 0, y = u(t); y > c; c++)
            if (s = t[c], i(s) && (n.isArray(s) || n.isArguments(s)))
                for (r || (s = f(s, r, e)), l = 0, a = s.length, h.length += a; a > l;) h[v++] = s[l++];
            else e || (h[v++] = s);
        return h
    }, n.flatten = function(n, t) {
        return f(n, t, !1)
    }, n.without = function(t) {
        return n.difference(t, r.call(arguments, 1))
    }, n.uniq = n.unique = function(i, r, f, e) {
        var o, c;
        n.isBoolean(r) || (e = f, f = r, r = !1), null != f && (f = t(f, e));
        for (var s = [], l = [], h = 0, a = u(i); a > h; h++) o = i[h], c = f ? f(o, h, i) : o, r ? (h && l === c || s.push(o), l = c) : f ? n.contains(l, c) || (l.push(c), s.push(o)) : n.contains(s, o) || s.push(o);
        return s
    }, n.union = function() {
        return n.uniq(f(arguments, !0, !0))
    }, n.intersection = function(t) {
        for (var r, i, f = [], o = arguments.length, e = 0, s = u(t); s > e; e++)
            if (r = t[e], !n.contains(f, r)) {
                for (i = 1; o > i && n.contains(arguments[i], r); i++);
                i === o && f.push(r)
            }
        return f
    }, n.difference = function(t) {
        var i = f(arguments, !0, !0, 1);
        return n.filter(t, function(t) {
            return !n.contains(i, t)
        })
    }, n.zip = function() {
        return n.unzip(arguments)
    }, n.unzip = function(t) {
        for (var r = t && n.max(t, u).length || 0, f = Array(r), i = 0; r > i; i++) f[i] = n.pluck(t, i);
        return f
    }, n.object = function(n, t) {
        for (var r = {}, i = 0, f = u(n); f > i; i++) t ? r[n[i]] = t[i] : r[n[i][0]] = n[i][1];
        return r
    }, n.findIndex = rt(1), n.findLastIndex = rt(-1), n.sortedIndex = function(n, i, r, f) {
        var o;
        r = t(r, f, 1);
        for (var h = r(i), e = 0, s = u(n); s > e;) o = Math.floor((e + s) / 2), r(n[o]) < h ? e = o + 1 : s = o;
        return e
    }, n.indexOf = ut(1, n.findIndex, n.sortedIndex), n.lastIndexOf = ut(-1, n.findLastIndex), n.range = function(n, t, i) {
        null == t && (t = n || 0, n = 0), i = i || 1;
        for (var u = Math.max(Math.ceil((t - n) / i), 0), f = Array(u), r = 0; u > r; r++, n += i) f[r] = n;
        return f
    }, g = function(t, i, r, u, f) {
        if (!(u instanceof i)) return t.apply(r, f);
        var e = st(t.prototype),
            o = t.apply(e, f);
        return n.isObject(o) ? o : e
    }, n.bind = function(t, i) {
        if (y && t.bind === y) return y.apply(t, r.call(arguments, 1));
        if (!n.isFunction(t)) throw new TypeError("Bind must be called on a function");
        var f = r.call(arguments, 2),
            u = function() {
                return g(t, u, i, this, f.concat(r.call(arguments)))
            };
        return u
    }, n.partial = function(t) {
        var i = r.call(arguments, 1),
            u = function() {
                for (var f = 0, o = i.length, e = Array(o), r = 0; o > r; r++) e[r] = i[r] === n ? arguments[f++] : i[r];
                for (; f < arguments.length;) e.push(arguments[f++]);
                return g(t, u, this, this, e)
            };
        return u
    }, n.bindAll = function(t) {
        var i, r, u = arguments.length;
        if (1 >= u) throw new Error("bindAll must be passed function names");
        for (i = 1; u > i; i++) r = arguments[i], t[r] = n.bind(t[r], t);
        return t
    }, n.memoize = function(t, i) {
        var r = function(u) {
            var f = r.cache,
                e = "" + (i ? i.apply(this, arguments) : u);
            return n.has(f, e) || (f[e] = t.apply(this, arguments)), f[e]
        };
        return r.cache = {}, r
    }, n.delay = function(n, t) {
        var i = r.call(arguments, 2);
        return setTimeout(function() {
            return n.apply(null, i)
        }, t)
    }, n.defer = n.partial(n.delay, n, 1), n.throttle = function(t, i, r) {
        var f, e, s, u = null,
            o = 0,
            h;
        return r || (r = {}), h = function() {
                o = r.leading === !1 ? 0 : n.now(), u = null, s = t.apply(f, e), u || (f = e = null)
            },
            function() {
                var l = n.now(),
                    c;
                return o || r.leading !== !1 || (o = l), c = i - (l - o), f = this, e = arguments, 0 >= c || c > i ? (u && (clearTimeout(u), u = null), o = l, s = t.apply(f, e), u || (f = e = null)) : u || r.trailing === !1 || (u = setTimeout(h, c)), s
            }
    }, n.debounce = function(t, i, r) {
        var u, f, e, s, o, h = function() {
            var c = n.now() - s;
            i > c && c >= 0 ? u = setTimeout(h, i - c) : (u = null, r || (o = t.apply(e, f), u || (e = f = null)))
        };
        return function() {
            e = this, f = arguments, s = n.now();
            var c = r && !u;
            return u || (u = setTimeout(h, i)), c && (o = t.apply(e, f), e = f = null), o
        }
    }, n.wrap = function(t, i) {
        return n.partial(i, t)
    }, n.negate = function(n) {
        return function() {
            return !n.apply(this, arguments)
        }
    }, n.compose = function() {
        var n = arguments,
            t = n.length - 1;
        return function() {
            for (var r = t, i = n[t].apply(this, arguments); r--;) i = n[r].call(this, i);
            return i
        }
    }, n.after = function(n, t) {
        return function() {
            if (--n < 1) return t.apply(this, arguments)
        }
    }, n.before = function(n, t) {
        var i;
        return function() {
            return --n > 0 && (i = t.apply(this, arguments)), 1 >= n && (t = null), i
        }
    }, n.once = n.partial(n.before, 2), d = !{
        toString: null
    }.propertyIsEnumerable("toString"), k = ["valueOf", "isPrototypeOf", "toString", "propertyIsEnumerable", "hasOwnProperty", "toLocaleString"], n.keys = function(t) {
        var i, r;
        if (!n.isObject(t)) return [];
        if (ct) return ct(t);
        i = [];
        for (r in t) n.has(t, r) && i.push(r);
        return d && ft(t, i), i
    }, n.allKeys = function(t) {
        var i, r;
        if (!n.isObject(t)) return [];
        i = [];
        for (r in t) i.push(r);
        return d && ft(t, i), i
    }, n.values = function(t) {
        for (var r = n.keys(t), u = r.length, f = Array(u), i = 0; u > i; i++) f[i] = t[r[i]];
        return f
    }, n.mapObject = function(i, r, u) {
        r = t(r, u);
        for (var f, o = n.keys(i), h = o.length, s = {}, e = 0; h > e; e++) f = o[e], s[f] = r(i[f], f, i);
        return s
    }, n.pairs = function(t) {
        for (var r = n.keys(t), u = r.length, f = Array(u), i = 0; u > i; i++) f[i] = [r[i], t[r[i]]];
        return f
    }, n.invert = function(t) {
        for (var u = {}, r = n.keys(t), i = 0, f = r.length; f > i; i++) u[t[r[i]]] = r[i];
        return u
    }, n.functions = n.methods = function(t) {
        var r = [],
            i;
        for (i in t) n.isFunction(t[i]) && r.push(i);
        return r.sort()
    }, n.extend = b(n.allKeys), n.extendOwn = n.assign = b(n.keys), n.findKey = function(i, r, u) {
        r = t(r, u);
        for (var f, o = n.keys(i), e = 0, s = o.length; s > e; e++)
            if (f = o[e], r(i[f], f, i)) return f
    }, n.pick = function(t, i, r) {
        var c, o, l = {},
            u = t,
            s, v, h, a;
        if (null == u) return l;
        for (n.isFunction(i) ? (o = n.allKeys(u), c = e(i, r)) : (o = f(arguments, !1, !1, 1), c = function(n, t, i) {
                return t in i
            }, u = Object(u)), s = 0, v = o.length; v > s; s++) h = o[s], a = u[h], c(a, h, u) && (l[h] = a);
        return l
    }, n.omit = function(t, i, r) {
        if (n.isFunction(i)) i = n.negate(i);
        else {
            var u = n.map(f(arguments, !1, !1, 1), String);
            i = function(t, i) {
                return !n.contains(u, i)
            }
        }
        return n.pick(t, i, r)
    }, n.defaults = b(n.allKeys, !0), n.create = function(t, i) {
        var r = st(t);
        return i && n.extendOwn(r, i), r
    }, n.clone = function(t) {
        return n.isObject(t) ? n.isArray(t) ? t.slice() : n.extend({}, t) : t
    }, n.tap = function(n, t) {
        return t(n), n
    }, n.isMatch = function(t, i) {
        var e = n.keys(i),
            o = e.length,
            f, r, u;
        if (null == t) return !o;
        for (f = Object(t), r = 0; o > r; r++)
            if (u = e[r], i[u] !== f[u] || !(u in f)) return !1;
        return !0
    }, s = function(t, i, r, u) {
        var c, a, e, h, f, l, v;
        if (t === i) return 0 !== t || 1 / t == 1 / i;
        if (null == t || null == i) return t === i;
        if (t instanceof n && (t = t._wrapped), i instanceof n && (i = i._wrapped), c = o.call(t), c !== o.call(i)) return !1;
        switch (c) {
            case "[object RegExp]":
            case "[object String]":
                return "" + t == "" + i;
            case "[object Number]":
                return +t != +t ? +i != +i : 0 == +t ? 1 / +t == 1 / i : +t == +i;
            case "[object Date]":
            case "[object Boolean]":
                return +t == +i
        }
        if (a = "[object Array]" === c, !a && ("object" != typeof t || "object" != typeof i || (e = t.constructor, h = i.constructor, e !== h && !(n.isFunction(e) && e instanceof e && n.isFunction(h) && h instanceof h) && "constructor" in t && "constructor" in i))) return !1;
        for (r = r || [], u = u || [], f = r.length; f--;)
            if (r[f] === t) return u[f] === i;
        if (r.push(t), u.push(i), a) {
            if (f = t.length, f !== i.length) return !1;
            for (; f--;)
                if (!s(t[f], i[f], r, u)) return !1
        } else {
            if (v = n.keys(t), f = v.length, n.keys(i).length !== f) return !1;
            for (; f--;)
                if (l = v[f], !n.has(i, l) || !s(t[l], i[l], r, u)) return !1
        }
        return r.pop(), u.pop(), !0
    }, n.isEqual = function(n, t) {
        return s(n, t)
    }, n.isEmpty = function(t) {
        return null == t ? !0 : i(t) && (n.isArray(t) || n.isString(t) || n.isArguments(t)) ? 0 === t.length : 0 === n.keys(t).length
    }, n.isElement = function(n) {
        return !(!n || 1 !== n.nodeType)
    }, n.isArray = pt || function(n) {
        return "[object Array]" === o.call(n)
    }, n.isObject = function(n) {
        var t = typeof n;
        return "function" === t || "object" === t && !!n
    }, n.each(["Arguments", "Function", "String", "Number", "Date", "RegExp", "Error"], function(t) {
        n["is" + t] = function(n) {
            return o.call(n) === "[object " + t + "]"
        }
    }), n.isArguments(arguments) || (n.isArguments = function(t) {
        return n.has(t, "callee")
    }), "function" != typeof /./ && "object" != typeof Int8Array && (n.isFunction = function(n) {
        return "function" == typeof n || !1
    }), n.isFinite = function(n) {
        return isFinite(n) && !isNaN(parseFloat(n))
    }, n.isNaN = function(t) {
        return n.isNumber(t) && t !== +t
    }, n.isBoolean = function(n) {
        return n === !0 || n === !1 || "[object Boolean]" === o.call(n)
    }, n.isNull = function(n) {
        return null === n
    }, n.isUndefined = function(n) {
        return n === void 0
    }, n.has = function(n, t) {
        return null != n && wt.call(n, t)
    }, n.noConflict = function() {
        return a._ = lt, this
    }, n.identity = function(n) {
        return n
    }, n.constant = function(n) {
        return function() {
            return n
        }
    }, n.noop = function() {}, n.property = ot, n.propertyOf = function(n) {
        return null == n ? function() {} : function(t) {
            return n[t]
        }
    }, n.matcher = n.matches = function(t) {
        return t = n.extendOwn({}, t),
            function(i) {
                return n.isMatch(i, t)
            }
    }, n.times = function(n, t, i) {
        var u = Array(Math.max(0, n)),
            r;
        for (t = e(t, i, 1), r = 0; n > r; r++) u[r] = t(r);
        return u
    }, n.random = function(n, t) {
        return null == t && (t = n, n = 0), n + Math.floor(Math.random() * (t - n + 1))
    }, n.now = Date.now || function() {
        return +new Date
    };
    var it = {
            "&": "&amp;",
            "<": "&lt;",
            ">": "&gt;",
            '"': "&quot;",
            "'": "&#x27;",
            "`": "&#x60;"
        },
        yt = n.invert(it),
        tt = function(t) {
            var r = function(n) {
                    return t[n]
                },
                i = "(?:" + n.keys(t).join("|") + ")",
                u = RegExp(i),
                f = RegExp(i, "g");
            return function(n) {
                return n = null == n ? "" : "" + n, u.test(n) ? n.replace(f, r) : n
            }
        };
    n.escape = tt(it), n.unescape = tt(yt), n.result = function(t, i, r) {
        var u = null == t ? void 0 : t[i];
        return u === void 0 && (u = r), n.isFunction(u) ? u.call(t) : u
    }, nt = 0, n.uniqueId = function(n) {
        var t = ++nt + "";
        return n ? n + t : t
    }, n.templateSettings = {
        evaluate: /<%([\s\S]+?)%>/g,
        interpolate: /<%=([\s\S]+?)%>/g,
        escape: /<%-([\s\S]+?)%>/g
    };
    var v = /(.)^/,
        bt = {
            "'": "'",
            "\\": "\\",
            "\r": "r",
            "\n": "n",
            "\u2028": "u2028",
            "\u2029": "u2029"
        },
        kt = /\\|'|\r|\n|\u2028|\u2029/g,
        vt = function(n) {
            return "\\" + bt[n]
        };
    n.template = function(t, i, r) {
        var o, f, s;
        !i && r && (i = r), i = n.defaults({}, i, n.templateSettings);
        var h = RegExp([(i.escape || v).source, (i.interpolate || v).source, (i.evaluate || v).source].join("|") + "|$", "g"),
            e = 0,
            u = "__p+='";
        t.replace(h, function(n, i, r, f, o) {
            return u += t.slice(e, o).replace(kt, vt), e = o + n.length, i ? u += "'+\n((__t=(" + i + "))==null?'':_.escape(__t))+\n'" : r ? u += "'+\n((__t=(" + r + "))==null?'':__t)+\n'" : f && (u += "';\n" + f + "\n__p+='"), n
        }), u += "';\n", i.variable || (u = "with(obj||{}){\n" + u + "}\n"), u = "var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};\n" + u + "return __p;\n";
        try {
            o = new Function(i.variable || "obj", "_", u)
        } catch (c) {
            throw c.source = u, c;
        }
        return f = function(t) {
            return o.call(this, t, n)
        }, s = i.variable || "obj", f.source = "function(" + s + "){\n" + u + "}", f
    }, n.chain = function(t) {
        var i = n(t);
        return i._chain = !0, i
    }, c = function(t, i) {
        return t._chain ? n(i).chain() : i
    }, n.mixin = function(t) {
        n.each(n.functions(t), function(i) {
            var r = n[i] = t[i];
            n.prototype[i] = function() {
                var t = [this._wrapped];
                return dt.apply(t, arguments), c(this, r.apply(n, t))
            }
        })
    }, n.mixin(n), n.each(["pop", "push", "reverse", "shift", "sort", "splice", "unshift"], function(t) {
        var i = l[t];
        n.prototype[t] = function() {
            var n = this._wrapped;
            return i.apply(n, arguments), "shift" !== t && "splice" !== t || 0 !== n.length || delete n[0], c(this, n)
        }
    }), n.each(["concat", "join", "slice"], function(t) {
        var i = l[t];
        n.prototype[t] = function() {
            return c(this, i.apply(this._wrapped, arguments))
        }
    }), n.prototype.value = function() {
        return this._wrapped
    }, n.prototype.valueOf = n.prototype.toJSON = n.prototype.value, n.prototype.toString = function() {
        return "" + this._wrapped
    }, "function" == typeof define && define.amd && define("underscore", [], function() {
        return n
    })
}).call(this);

; // GoogleAnalytics/GoogleAnalyticsEvents.js
function makeGoogleAnalyticsLogObject(n) {
    var t = {};
    return t.event = n, t.timestamp = +new Date, t
}

function GoogleAnalyticsTimingTracker(n, t, i, r) {
    this.maxTime = 6e4, this.category = n, this.variable = t, this.label = i ? i : undefined, this.isDebug = r
}
var GoogleAnalyticsEvents = {
    LocalEventLog: [],
    SetCustomVar: function(n, t, i, r) {
        window._gaq && (window.GoogleAnalyticsDisableRoblox2 || _gaq.push(["_setCustomVar", n, t, i, r]), _gaq.push(["b._setCustomVar", n, t, i, r]))
    },
    FireEvent: function(n) {
        var t, i;
        window._gaq && (window.GoogleAnalyticsDisableRoblox2 || (t = ["_trackEvent"], t = t.concat(n), _gaq.push(t), GoogleAnalyticsEvents.LocalEventLog.push(makeGoogleAnalyticsLogObject(t))), i = ["b._trackEvent"], i = i.concat(n), _gaq.push(i), GoogleAnalyticsEvents.LocalEventLog.push(makeGoogleAnalyticsLogObject(i)))
    },
    ViewVirtual: function(n) {
        var t, i;
        window._gaq && (window.GoogleAnalyticsDisableRoblox2 || (t = ["_trackPageview", n], window._gaq.push(t), GoogleAnalyticsEvents.LocalEventLog.push(makeGoogleAnalyticsLogObject(t))), i = ["b._trackPageview", n], window._gaq.push(i), GoogleAnalyticsEvents.LocalEventLog.push(makeGoogleAnalyticsLogObject(i)))
    },
    TrackTransaction: function(n, t) {
        if (window._gaq) {
            var i = ["_addTrans", n, "Roblox", t, "0", "0", "San Mateo", "California", "USA"];
            window.GoogleAnalyticsDisableRoblox2 || (_gaq.push(i), GoogleAnalyticsEvents.LocalEventLog.push(makeGoogleAnalyticsLogObject(i))), i[0] = "b." + i[0], _gaq.push(i), GoogleAnalyticsEvents.LocalEventLog.push(makeGoogleAnalyticsLogObject(i))
        }
    },
    TrackTransactionItem: function(n, t, i, r, u) {
        if (window._gaq) {
            var f = ["_addItem", n, t, i, r, u, 1],
                e = ["_trackTrans"];
            window.GoogleAnalyticsDisableRoblox2 || (_gaq.push(f), GoogleAnalyticsEvents.LocalEventLog.push(makeGoogleAnalyticsLogObject(f)), _gaq.push(e), GoogleAnalyticsEvents.LocalEventLog.push(makeGoogleAnalyticsLogObject(e))), f[0] = "b." + f[0], e[0] = "b." + e[0], _gaq.push(f), GoogleAnalyticsEvents.LocalEventLog.push(makeGoogleAnalyticsLogObject(f)), _gaq.push(e), GoogleAnalyticsEvents.LocalEventLog.push(makeGoogleAnalyticsLogObject(e))
        }
    },
    Log: function(n) {
        GoogleAnalyticsEvents.LocalEventLog.push(makeGoogleAnalyticsLogObject(n))
    }
};
GoogleAnalyticsTimingTracker.prototype.getTimeStamp = function() {
    return window.performance && window.performance.now ? Math.round(window.performance.now()) : +new Date
}, GoogleAnalyticsTimingTracker.prototype.start = function() {
    this.startTime = this.getTimeStamp()
}, GoogleAnalyticsTimingTracker.prototype.stop = function() {
    this.elapsedTime = this.getTimeStamp() - this.startTime
}, GoogleAnalyticsTimingTracker.prototype.send = function() {
    if (0 < this.elapsedTime && this.elapsedTime < this.maxTime) {
        var n = ["b._trackTiming", this.category, this.variable, this.elapsedTime, this.label, 100];
        window._gaq.push(n)
    }
};

; // RobloxEventManager.js
function RBXBaseEventListener() {
    if (!(this instanceof RBXBaseEventListener)) return new RBXBaseEventListener;
    this.init = function() {
        for (eventKey in this.events) this.events.hasOwnProperty(eventKey) && $(document).bind(this.events[eventKey], $.proxy(this.localCopy, this))
    }, this.events = [], this.localCopy = function(n, t) {
        var i = $.extend(!0, {}, n),
            r = $.extend(!0, {}, t);
        this.handleEvent(i, r)
    }, this.distillData = function() {
        return console.log("RBXEventListener distillData - Please implement me"), !1
    }, this.handleEvent = function() {
        return console.log("EventListener handleEvent - Please implement me"), !1
    }, this.fireEvent = function() {
        return console.log("EventListener fireEvent - Please implement me"), !1
    }
}
RobloxEventManager = new function() {
    var n = [],
        t = {};
    this.enabled = !1, this.initialized = !1, this.eventQueue = [], this.initialize = function(n) {
        for (this.initialized = !0, this.enabled = n; this.eventQueue.length > 0;) {
            var t = this.eventQueue.pop();
            this.triggerEvent(t.eventName, t.args)
        }
    }, this.triggerEvent = function(n, t) {
        this.initialized ? this.enabled && (typeof t == "undefined" && (t = {}), t.guid = Roblox.Cookies.getBrowserTrackerId(), t.guid != -1 && $(document).trigger(n, [t])) : this.eventQueue.push({
            eventName: n,
            args: t
        })
    }, this.registerCookieStoreEvent = function(t) {
        n.push(t)
    }, this.insertDataStoreKeyValuePair = function(n, i) {
        t[n] = i
    }
};

; // GoogleEventListener.js
GoogleListener = new RBXBaseEventListener, GoogleListener.handleEvent = function(n, t) {
    function r(n) {
        return n = n.toLowerCase(), n == "win32" ? n = "Windows" : n == "osx" && (n = "Mac"), n
    }
    var f, u, i;
    switch (n.type) {
        case "rbx_evt_initial_install_begin":
            t.os = r(t.os), t.category = "Bootstrapper Install Begin", i = {
                os: "action"
            };
            break;
        case "rbx_evt_ftp":
            t.os = r(t.os), t.category = "First Time Played", i = {
                os: "action"
            };
            break;
        case "rbx_evt_initial_install_success":
            t.os = r(t.os), t.category = "Bootstrapper Install Success", i = {
                os: "action"
            };
            break;
        case "rbx_evt_fmp":
            t.os = r(t.os), t.category = "Five Minute Play", i = {
                os: "action"
            };
            break;
        case "rbx_evt_abtest":
            i = {
                experiment: "category",
                variation: "action",
                version: "opt_label"
            };
            break;
        case "rbx_evt_card_redemption":
            t.category = "CardRedemption", i = {
                merchant: "action",
                cardValue: "opt_label"
            };
            break;
        default:
            return console.log("GoogleListener - Event registered without handling instructions: " + n.type), !1
    }
    return i.category = "category", u = this.distillData(t, i), this.fireEvent(u), !0
}, GoogleListener.distillData = function(n, t) {
    var i = {},
        r;
    for (dataKey in t) typeof n[dataKey] != typeof undefined && (i[t[dataKey]] = n[dataKey]);
    return r = [i.category, i.action], i.opt_label != null && (r = r.concat(i.opt_label)), i.opt_value != null && (r = r.concat(i.opt_value)), r
}, GoogleListener.fireEvent = function(n) {
    if (typeof _gaq != typeof undefined) {
        var t = ["_trackEvent"],
            i = ["b._trackEvent"];
        _gaq.push(t.concat(n)), _gaq.push(i.concat(n))
    }
}, GoogleListener.events = ["rbx_evt_initial_install_begin", "rbx_evt_ftp", "rbx_evt_initial_install_success", "rbx_evt_fmp", "rbx_evt_abtest", "rbx_evt_card_redemption"];

; // UpsellAdModal.js
Roblox = Roblox || {}, typeof Roblox.UpsellAdModal == "undefined" && (Roblox.UpsellAdModal = function() {
    var n = function() {
        var n = {
            titleText: Roblox.UpsellAdModal.Resources.title,
            bodyContent: Roblox.UpsellAdModal.Resources.body,
            footerText: "",
            overlayClose: !0,
            escClose: !0,
            acceptText: Roblox.UpsellAdModal.Resources.accept,
            declineText: Roblox.UpsellAdModal.Resources.decline,
            acceptColor: Roblox.GenericConfirmation.green,
            onAccept: function() {
                window.location.href = "/premium/membership"
            },
            imageUrl: "/images/BuildersClub-110x110_small.png"
        };
        Roblox.GenericConfirmation.open(n)
    };
    return {
        open: n
    }
}()), $(function() {
    $("a.UpsellAdButton").click(function() {
        return Roblox.UpsellAdModal.open(), !1
    })
});

; // JavaScriptEndpoints.js
typeof Roblox == typeof undefined && (Roblox = {}), Roblox.Endpoints = Roblox.Endpoints || {
        addCrossDomainOptionsToAllRequests: !1
    }, Roblox.Endpoints.isAbsolute = function(n) {
        var t = new RegExp("^([a-z]+://|//)");
        return t.test(n)
    }, Roblox.Endpoints.splitAtQueryString = function(n) {
        var i = new RegExp("\\?(?!})"),
            t = i.exec(n);
        return t === null ? {
            url: n,
            query: ""
        } : {
            url: n.substring(0, t.index),
            query: n.substring(t.index)
        }
    }, Roblox.Endpoints.ajaxPrefilter = function(n) {
        var r = Roblox.Endpoints.generateAbsoluteUrl(n.url, n.data, n.crossDomain);
        n.url = r, Roblox.Endpoints.addCrossDomainOptionsToAllRequests && n.url.indexOf("rbxcdn.com") < 0 && n.url.indexOf("s3.amazonaws.com") < 0 && (n.crossDomain = !0, n.xhrFields = n.xhrFields || {}, n.xhrFields.withCredentials = !0)
    }, Roblox.Endpoints.generateAbsoluteUrl = function(n, t, i) {
        var f = Roblox.Endpoints.splitAtQueryString(n),
            u = f.url.toLowerCase(),
            r = u;
        return typeof Roblox.Endpoints.Urls != typeof undefined && i && typeof Roblox.Endpoints.Urls[u.toLowerCase()] != typeof undefined && (r = Roblox.Endpoints.getAbsoluteUrl(u)), r.indexOf("{") > -1 && $.each(t, function(n, t) {
            var i = new RegExp("{" + n.toLowerCase() + "(:.*?)?\\??}");
            r = r.replace(i, t)
        }), r + f.query
    }, Roblox.Endpoints.getAbsoluteUrl = function(n) {
        var t, r, i, u;
        return typeof Roblox.Endpoints.Urls == typeof undefined ? n : n.length === 0 || Roblox.Endpoints.isAbsolute(n) ? n : (n.indexOf("/") !== 0 && (t = window.location.pathname, r = t.slice(0, t.lastIndexOf("/") + 1), n = r + n), i = Roblox.Endpoints.Urls[n.toLowerCase()], i === undefined) ? (u = window.location.protocol + "//" + window.location.hostname, u + n) : i
    },
    function() {
        function n(n) {
            return typeof n != "string" && (n = ""), n.replace(/'/g, "").replace(/[^a-zA-Z0-9]+/g, "-").replace(/^-+|-+$/g, "").replace(/^(COM\d|LPT\d|AUX|PRT|NUL|CON|BIN)$/i, "") || "unnamed"
        }
        Roblox.Endpoints.getCatalogItemUrl = function(t, i) {
            return Roblox.Endpoints.getAbsoluteUrl("/catalog/" + t + "/" + n(i))
        }, Roblox.Endpoints.getBadgeDetailsUrl = function(t, i) {
            return Roblox.Endpoints.getAbsoluteUrl("/badges/" + t + "/" + n(i))
        }
    }(), $.ajaxPrefilter(Roblox.Endpoints.ajaxPrefilter);

; // utilities/deviceFeatureDetection.js
Roblox = Roblox || {}, Roblox.DeviceFeatureDetection = function() {
    function i() {
        !t.hasClass("in-studio") && ("ontouchstart" in window || navigator.maxTouchPoints > 0 || navigator.msMaxTouchPoints > 0) && (n = !0, t.addClass("touch"))
    }
    var n = !1,
        t = $(".container-main");
    return i(), {
        isTouch: n
    }
}();

; // utilities/lazyLoad.js
"use strict";
Roblox = Roblox || {}, Roblox.LazyLoad = function() {
    function n(n) {
        if (n) {
            var t = n.attr("data-delaysrc");
            typeof t != "undefined" && n.attr("src", t).addClass("src-replaced")
        }
    }

    function u() {
        window.addEventListener("load", function() {
            $(t + ", " + i).each(function() {
                n($(this))
            })
        }, !1)
    }

    function f() {
        $(r).one("click touchstart", function() {
            var t = $("#iframe-login:not('.src-replaced')");
            n(t)
        })
    }

    function e() {
        u(), f()
    }
    var t = "img[data-delaysrc]",
        i = "iframe[data-delaysrc]:not('.src-replaced')",
        r = "#head-login, #header-login";
    $(document).ready(function() {
        e()
    })
}();

; // utilities/urlParser.js
var Roblox = Roblox || {};
Roblox.UrlParser = function() {
    var n = function(n, t) {
            var u, i, r;
            if (typeof t == "undefined" ? t = !0 : t === !1 && (n = n.toLowerCase()), u = decodeURIComponent(window.location.search.substring(1)), i = u && u.split("&"), !i) return null;
            for (r = 0; r < i.length; r++) {
                var f = i[r],
                    o = f.indexOf("="),
                    e = f.substring(0, o),
                    s = f.substring(o + 1);
                if (t === !1 && (e = e.toLowerCase()), e === n) return s
            }
            return null
        },
        t = function() {
            var t = {},
                u = decodeURIComponent(window.location.search.substring(1)),
                i = u && u.split("&"),
                n;
            if (!i) return t;
            for (n = 0; n < i.length; n++) {
                var r = i[n],
                    f = r.indexOf("="),
                    e = r.substring(0, f),
                    o = r.substring(f + 1);
                t[e] = o
            }
            return t
        },
        i = function(n, t, i) {
            var r = new RegExp("([?&])" + t + "=.*?(&|$)", "i"),
                u = n.indexOf("?") !== -1 ? "&" : "?";
            return n.match(r) ? n.replace(r, "$1" + t + "=" + i + "$2") : n + u + t + "=" + i
        };
    return {
        getParameterValueByName: n,
        getParametersAsObject: t,
        addOrUpdateQueryStringParameter: i
    }
}();

; // utilities/generalSubmitButton.js
var Roblox = Roblox || {};
Roblox.SubmitButton = function() {
    function s() {
        $(e).each(function(n, r) {
            var u = $(r),
                f = u.data(i),
                s;
            if (f && typeof f == "object") {
                var l = u.data(o) === "true",
                    a = h(u, f, l),
                    e = c(u, a);
                u.on(t, e);
                s = u.data(i) !== "false", e(null, s)
            }
        })
    }

    function h(i, r, u) {
        return function(f) {
            var l = i.data(n) === "true",
                o, s, e, h, c;
            if (!l) {
                f.preventDefault();
                return
            }
            if (o = !1, r) {
                for (s = r.object.split("."), e = window[s[0]], h = 1; h < s.length; h++) e = e[s[h]];
                if (e && (c = e[r.func], typeof c == "function")) try {
                    c(), o = !0
                } catch (f) {
                    o = !1
                }
            }!u && o && i.trigger(t, !1)
        }
    }

    function c(t, i) {
        return function(e, o) {
            if (o) {
                t.data(n, "true"), t.addClass(r).removeClass(u).removeClass(f);
                t.on("click", i)
            } else t.addClass(u).addClass(f).removeClass(r), t.data(n, "false"), t.off("click")
        }
    }
    var e = ".submit-button",
        n = "clickable",
        o = "allow-multi-click",
        i = "callback",
        r = "btn-primary",
        u = "btn-disabled-primary",
        f = "disabled",
        t = "Roblox.SubmitButton.toggleButton";
    return {
        init: s,
        submitToggleEvent: t
    }
}(), $(function() {
    Roblox.SubmitButton.init()
});

; // DeveloperConsoleWarning.js
typeof Roblox == "undefined" && (Roblox = {}), typeof Roblox.DeveloperConsoleWarning == "undefined" && (Roblox.DeveloperConsoleWarning = function() {
    var n = "\n      _______      _________      _____       ______     _\n     / _____ \\    |____ ____|    / ___ \\     | ____ \\   | |\n    / /     \\_\\       | |       / /   \\ \\    | |   \\ \\  | |\n    | |               | |      / /     \\ \\   | |   | |  | |\n    \\ \\______         | |      | |     | |   | |___/ /  | |\n     \\______ \\        | |      | |     | |   |  ____/   | |\n            \\ \\       | |      | |     | |   | |        | |\n     _      | |       | |      \\ \\     / /   | |        |_|\n    \\ \\_____/ /       | |       \\ \\___/ /    | |         _\n     \\_______/        |_|        \\_____/     |_|        |_|\n\n     Keep your account safe! Do not send any information from\n     here to anyone or paste any text here.\n\n     If someone is asking you to copy or paste text here then\n     you're giving someone access to your account, your gear,\n     and your Robux.\n\n     To learn more about keeping your account safe you can go to\n\n     https://www.roblox.com/info/account-safety",
        t = function() {
            typeof console != "undefined" && typeof console.log != "undefined" && console.log(n)
        };
    return {
        showWarning: t
    }
}());

; // widgets/jquery.mCustomScrollbar.concat.min.js
/* == jquery mousewheel plugin == Version: 3.1.12, License: MIT License (MIT) */
! function(a) {
    "function" == typeof define && define.amd ? define(["jquery"], a) : "object" == typeof exports ? module.exports = a : a(jQuery)
}(function(a) {
    function b(b) {
        var g = b || window.event,
            h = i.call(arguments, 1),
            j = 0,
            l = 0,
            m = 0,
            n = 0,
            o = 0,
            p = 0;
        if (b = a.event.fix(g), b.type = "mousewheel", "detail" in g && (m = -1 * g.detail), "wheelDelta" in g && (m = g.wheelDelta), "wheelDeltaY" in g && (m = g.wheelDeltaY), "wheelDeltaX" in g && (l = -1 * g.wheelDeltaX), "axis" in g && g.axis === g.HORIZONTAL_AXIS && (l = -1 * m, m = 0), j = 0 === m ? l : m, "deltaY" in g && (m = -1 * g.deltaY, j = m), "deltaX" in g && (l = g.deltaX, 0 === m && (j = -1 * l)), 0 !== m || 0 !== l) {
            if (1 === g.deltaMode) {
                var q = a.data(this, "mousewheel-line-height");
                j *= q, m *= q, l *= q
            } else if (2 === g.deltaMode) {
                var r = a.data(this, "mousewheel-page-height");
                j *= r, m *= r, l *= r
            }
            if (n = Math.max(Math.abs(m), Math.abs(l)), (!f || f > n) && (f = n, d(g, n) && (f /= 40)), d(g, n) && (j /= 40, l /= 40, m /= 40), j = Math[j >= 1 ? "floor" : "ceil"](j / f), l = Math[l >= 1 ? "floor" : "ceil"](l / f), m = Math[m >= 1 ? "floor" : "ceil"](m / f), k.settings.normalizeOffset && this.getBoundingClientRect) {
                var s = this.getBoundingClientRect();
                o = b.clientX - s.left, p = b.clientY - s.top
            }
            return b.deltaX = l, b.deltaY = m, b.deltaFactor = f, b.offsetX = o, b.offsetY = p, b.deltaMode = 0, h.unshift(b, j, l, m), e && clearTimeout(e), e = setTimeout(c, 200), (a.event.dispatch || a.event.handle).apply(this, h)
        }
    }

    function c() {
        f = null
    }

    function d(a, b) {
        return k.settings.adjustOldDeltas && "mousewheel" === a.type && b % 120 === 0
    }
    var e, f, g = ["wheel", "mousewheel", "DOMMouseScroll", "MozMousePixelScroll"],
        h = "onwheel" in document || document.documentMode >= 9 ? ["wheel"] : ["mousewheel", "DomMouseScroll", "MozMousePixelScroll"],
        i = Array.prototype.slice;
    if (a.event.fixHooks)
        for (var j = g.length; j;) a.event.fixHooks[g[--j]] = a.event.mouseHooks;
    var k = a.event.special.mousewheel = {
        version: "3.1.12",
        setup: function() {
            if (this.addEventListener)
                for (var c = h.length; c;) this.addEventListener(h[--c], b, !1);
            else this.onmousewheel = b;
            a.data(this, "mousewheel-line-height", k.getLineHeight(this)), a.data(this, "mousewheel-page-height", k.getPageHeight(this))
        },
        teardown: function() {
            if (this.removeEventListener)
                for (var c = h.length; c;) this.removeEventListener(h[--c], b, !1);
            else this.onmousewheel = null;
            a.removeData(this, "mousewheel-line-height"), a.removeData(this, "mousewheel-page-height")
        },
        getLineHeight: function(b) {
            var c = a(b),
                d = c["offsetParent" in a.fn ? "offsetParent" : "parent"]();
            return d.length || (d = a("body")), parseInt(d.css("fontSize"), 10) || parseInt(c.css("fontSize"), 10) || 16
        },
        getPageHeight: function(b) {
            return a(b).height()
        },
        settings: {
            adjustOldDeltas: !0,
            normalizeOffset: !0
        }
    };
    a.fn.extend({
        mousewheel: function(a) {
            return a ? this.bind("mousewheel", a) : this.trigger("mousewheel")
        },
        unmousewheel: function(a) {
            return this.unbind("mousewheel", a)
        }
    })
});
/* == malihu jquery custom scrollbar plugin == Version: 3.1.0, License: MIT License (MIT) */
! function(e) {
    "undefined" != typeof module && module.exports ? module.exports = e : e(jQuery, window, document)
}(function(e) {
    ! function(t) {
        var o = "function" == typeof define && define.amd,
            a = "undefined" != typeof module && module.exports,
            n = "https:" == document.location.protocol ? "https:" : "http:",
            i = "cdnjs.cloudflare.com/ajax/libs/jquery-mousewheel/3.1.12/jquery.mousewheel.min.js";
        o || (a ? require("jquery-mousewheel")(e) : e.event.special.mousewheel || e("head").append(decodeURI("%3Cscript src=" + n + "//" + i + "%3E%3C/script%3E"))), t()
    }(function() {
        var t, o = "mCustomScrollbar",
            a = "mCS",
            n = ".mCustomScrollbar",
            i = {
                setTop: 0,
                setLeft: 0,
                axis: "y",
                scrollbarPosition: "inside",
                scrollInertia: 950,
                autoDraggerLength: !0,
                alwaysShowScrollbar: 0,
                snapOffset: 0,
                mouseWheel: {
                    enable: !0,
                    scrollAmount: "auto",
                    axis: "y",
                    deltaFactor: "auto",
                    disableOver: ["select", "option", "keygen", "datalist", "textarea"]
                },
                scrollButtons: {
                    scrollType: "stepless",
                    scrollAmount: "auto"
                },
                keyboard: {
                    enable: !0,
                    scrollType: "stepless",
                    scrollAmount: "auto"
                },
                contentTouchScroll: 25,
                advanced: {
                    autoScrollOnFocus: "input,textarea,select,button,datalist,keygen,a[tabindex],area,object,[contenteditable='true']",
                    updateOnContentResize: !0,
                    updateOnImageLoad: "auto",
                    autoUpdateTimeout: 60
                },
                theme: "light",
                callbacks: {
                    onTotalScrollOffset: 0,
                    onTotalScrollBackOffset: 0,
                    alwaysTriggerOffsets: !0
                }
            },
            r = 0,
            l = {},
            s = window.attachEvent && !window.addEventListener ? 1 : 0,
            c = !1,
            d = ["mCSB_dragger_onDrag", "mCSB_scrollTools_onDrag", "mCS_img_loaded", "mCS_disabled", "mCS_destroyed", "mCS_no_scrollbar", "mCS-autoHide", "mCS-dir-rtl", "mCS_no_scrollbar_y", "mCS_no_scrollbar_x", "mCS_y_hidden", "mCS_x_hidden", "mCSB_draggerContainer", "mCSB_buttonUp", "mCSB_buttonDown", "mCSB_buttonLeft", "mCSB_buttonRight"],
            u = {
                init: function(t) {
                    var t = e.extend(!0, {}, i, t),
                        o = f.call(this);
                    if (t.live) {
                        var s = t.liveSelector || this.selector || n,
                            c = e(s);
                        if ("off" === t.live) return void m(s);
                        l[s] = setTimeout(function() {
                            c.mCustomScrollbar(t), "once" === t.live && c.length && m(s)
                        }, 500)
                    } else m(s);
                    return t.setWidth = t.set_width ? t.set_width : t.setWidth, t.setHeight = t.set_height ? t.set_height : t.setHeight, t.axis = t.horizontalScroll ? "x" : p(t.axis), t.scrollInertia = t.scrollInertia > 0 && t.scrollInertia < 17 ? 17 : t.scrollInertia, "object" != typeof t.mouseWheel && 1 == t.mouseWheel && (t.mouseWheel = {
                        enable: !0,
                        scrollAmount: "auto",
                        axis: "y",
                        preventDefault: !1,
                        deltaFactor: "auto",
                        normalizeDelta: !1,
                        invert: !1
                    }), t.mouseWheel.scrollAmount = t.mouseWheelPixels ? t.mouseWheelPixels : t.mouseWheel.scrollAmount, t.mouseWheel.normalizeDelta = t.advanced.normalizeMouseWheelDelta ? t.advanced.normalizeMouseWheelDelta : t.mouseWheel.normalizeDelta, t.scrollButtons.scrollType = g(t.scrollButtons.scrollType), h(t), e(o).each(function() {
                        var o = e(this);
                        if (!o.data(a)) {
                            o.data(a, {
                                idx: ++r,
                                opt: t,
                                scrollRatio: {
                                    y: null,
                                    x: null
                                },
                                overflowed: null,
                                contentReset: {
                                    y: null,
                                    x: null
                                },
                                bindEvents: !1,
                                tweenRunning: !1,
                                sequential: {},
                                langDir: o.css("direction"),
                                cbOffsets: null,
                                trigger: null,
                                poll: {
                                    size: {
                                        o: 0,
                                        n: 0
                                    },
                                    img: {
                                        o: 0,
                                        n: 0
                                    },
                                    change: {
                                        o: 0,
                                        n: 0
                                    }
                                }
                            });
                            var n = o.data(a),
                                i = n.opt,
                                l = o.data("mcs-axis"),
                                s = o.data("mcs-scrollbar-position"),
                                c = o.data("mcs-theme");
                            l && (i.axis = l), s && (i.scrollbarPosition = s), c && (i.theme = c, h(i)), v.call(this), n && i.callbacks.onCreate && "function" == typeof i.callbacks.onCreate && i.callbacks.onCreate.call(this), e("#mCSB_" + n.idx + "_container img:not(." + d[2] + ")").addClass(d[2]), u.update.call(null, o)
                        }
                    })
                },
                update: function(t, o) {
                    var n = t || f.call(this);
                    return e(n).each(function() {
                        var t = e(this);
                        if (t.data(a)) {
                            var n = t.data(a),
                                i = n.opt,
                                r = e("#mCSB_" + n.idx + "_container"),
                                l = e("#mCSB_" + n.idx),
                                s = [e("#mCSB_" + n.idx + "_dragger_vertical"), e("#mCSB_" + n.idx + "_dragger_horizontal")];
                            if (!r.length) return;
                            n.tweenRunning && N(t), o && n && i.callbacks.onBeforeUpdate && "function" == typeof i.callbacks.onBeforeUpdate && i.callbacks.onBeforeUpdate.call(this), t.hasClass(d[3]) && t.removeClass(d[3]), t.hasClass(d[4]) && t.removeClass(d[4]), l.height() !== t.height() && l.css("max-height", t.height()), _.call(this), "y" === i.axis || i.advanced.autoExpandHorizontalScroll || r.css("width", x(r)), n.overflowed = y.call(this), M.call(this), i.autoDraggerLength && S.call(this), b.call(this), T.call(this);
                            var c = [Math.abs(r[0].offsetTop), Math.abs(r[0].offsetLeft)];
                            "x" !== i.axis && (n.overflowed[0] ? s[0].height() > s[0].parent().height() ? B.call(this) : (V(t, c[0].toString(), {
                                dir: "y",
                                dur: 0,
                                overwrite: "none"
                            }), n.contentReset.y = null) : (B.call(this), "y" === i.axis ? k.call(this) : "yx" === i.axis && n.overflowed[1] && V(t, c[1].toString(), {
                                dir: "x",
                                dur: 0,
                                overwrite: "none"
                            }))), "y" !== i.axis && (n.overflowed[1] ? s[1].width() > s[1].parent().width() ? B.call(this) : (V(t, c[1].toString(), {
                                dir: "x",
                                dur: 0,
                                overwrite: "none"
                            }), n.contentReset.x = null) : (B.call(this), "x" === i.axis ? k.call(this) : "yx" === i.axis && n.overflowed[0] && V(t, c[0].toString(), {
                                dir: "y",
                                dur: 0,
                                overwrite: "none"
                            }))), o && n && (2 === o && i.callbacks.onImageLoad && "function" == typeof i.callbacks.onImageLoad ? i.callbacks.onImageLoad.call(this) : 3 === o && i.callbacks.onSelectorChange && "function" == typeof i.callbacks.onSelectorChange ? i.callbacks.onSelectorChange.call(this) : i.callbacks.onUpdate && "function" == typeof i.callbacks.onUpdate && i.callbacks.onUpdate.call(this)), j.call(this)
                        }
                    })
                },
                scrollTo: function(t, o) {
                    if ("undefined" != typeof t && null != t) {
                        var n = f.call(this);
                        return e(n).each(function() {
                            var n = e(this);
                            if (n.data(a)) {
                                var i = n.data(a),
                                    r = i.opt,
                                    l = {
                                        trigger: "external",
                                        scrollInertia: r.scrollInertia,
                                        scrollEasing: "mcsEaseInOut",
                                        moveDragger: !1,
                                        timeout: 60,
                                        callbacks: !0,
                                        onStart: !0,
                                        onUpdate: !0,
                                        onComplete: !0
                                    },
                                    s = e.extend(!0, {}, l, o),
                                    c = q.call(this, t),
                                    d = s.scrollInertia > 0 && s.scrollInertia < 17 ? 17 : s.scrollInertia;
                                c[0] = Y.call(this, c[0], "y"), c[1] = Y.call(this, c[1], "x"), s.moveDragger && (c[0] *= i.scrollRatio.y, c[1] *= i.scrollRatio.x), s.dur = d, setTimeout(function() {
                                    null !== c[0] && "undefined" != typeof c[0] && "x" !== r.axis && i.overflowed[0] && (s.dir = "y", s.overwrite = "all", V(n, c[0].toString(), s)), null !== c[1] && "undefined" != typeof c[1] && "y" !== r.axis && i.overflowed[1] && (s.dir = "x", s.overwrite = "none", V(n, c[1].toString(), s))
                                }, s.timeout)
                            }
                        })
                    }
                },
                stop: function() {
                    var t = f.call(this);
                    return e(t).each(function() {
                        var t = e(this);
                        t.data(a) && N(t)
                    })
                },
                disable: function(t) {
                    var o = f.call(this);
                    return e(o).each(function() {
                        var o = e(this);
                        if (o.data(a)) {
                            {
                                o.data(a)
                            }
                            j.call(this, "remove"), k.call(this), t && B.call(this), M.call(this, !0), o.addClass(d[3])
                        }
                    })
                },
                destroy: function() {
                    var t = f.call(this);
                    return e(t).each(function() {
                        var n = e(this);
                        if (n.data(a)) {
                            var i = n.data(a),
                                r = i.opt,
                                l = e("#mCSB_" + i.idx),
                                s = e("#mCSB_" + i.idx + "_container"),
                                c = e(".mCSB_" + i.idx + "_scrollbar");
                            r.live && m(r.liveSelector || e(t).selector), j.call(this, "remove"), k.call(this), B.call(this), n.removeData(a), K(this, "mcs"), c.remove(), s.find("img." + d[2]).removeClass(d[2]), l.replaceWith(s.contents()), n.removeClass(o + " _" + a + "_" + i.idx + " " + d[6] + " " + d[7] + " " + d[5] + " " + d[3]).addClass(d[4])
                        }
                    })
                }
            },
            f = function() {
                return "object" != typeof e(this) || e(this).length < 1 ? n : this
            },
            h = function(t) {
                var o = ["rounded", "rounded-dark", "rounded-dots", "rounded-dots-dark"],
                    a = ["rounded-dots", "rounded-dots-dark", "3d", "3d-dark", "3d-thick", "3d-thick-dark", "inset", "inset-dark", "inset-2", "inset-2-dark", "inset-3", "inset-3-dark"],
                    n = ["minimal", "minimal-dark"],
                    i = ["minimal", "minimal-dark"],
                    r = ["minimal", "minimal-dark"];
                t.autoDraggerLength = e.inArray(t.theme, o) > -1 ? !1 : t.autoDraggerLength, t.autoExpandScrollbar = e.inArray(t.theme, a) > -1 ? !1 : t.autoExpandScrollbar, t.scrollButtons.enable = e.inArray(t.theme, n) > -1 ? !1 : t.scrollButtons.enable, t.autoHideScrollbar = e.inArray(t.theme, i) > -1 ? !0 : t.autoHideScrollbar, t.scrollbarPosition = e.inArray(t.theme, r) > -1 ? "outside" : t.scrollbarPosition
            },
            m = function(e) {
                l[e] && (clearTimeout(l[e]), K(l, e))
            },
            p = function(e) {
                return "yx" === e || "xy" === e || "auto" === e ? "yx" : "x" === e || "horizontal" === e ? "x" : "y"
            },
            g = function(e) {
                return "stepped" === e || "pixels" === e || "step" === e || "click" === e ? "stepped" : "stepless"
            },
            v = function() {
                var t = e(this),
                    n = t.data(a),
                    i = n.opt,
                    r = i.autoExpandScrollbar ? " " + d[1] + "_expand" : "",
                    l = ["<div id='mCSB_" + n.idx + "_scrollbar_vertical' class='mCSB_scrollTools mCSB_" + n.idx + "_scrollbar mCS-" + i.theme + " mCSB_scrollTools_vertical" + r + "'><div class='" + d[12] + "'><div id='mCSB_" + n.idx + "_dragger_vertical' class='mCSB_dragger' style='position:absolute;' oncontextmenu='return false;'><div class='mCSB_dragger_bar' /></div><div class='mCSB_draggerRail' /></div></div>", "<div id='mCSB_" + n.idx + "_scrollbar_horizontal' class='mCSB_scrollTools mCSB_" + n.idx + "_scrollbar mCS-" + i.theme + " mCSB_scrollTools_horizontal" + r + "'><div class='" + d[12] + "'><div id='mCSB_" + n.idx + "_dragger_horizontal' class='mCSB_dragger' style='position:absolute;' oncontextmenu='return false;'><div class='mCSB_dragger_bar' /></div><div class='mCSB_draggerRail' /></div></div>"],
                    s = "yx" === i.axis ? "mCSB_vertical_horizontal" : "x" === i.axis ? "mCSB_horizontal" : "mCSB_vertical",
                    c = "yx" === i.axis ? l[0] + l[1] : "x" === i.axis ? l[1] : l[0],
                    u = "yx" === i.axis ? "<div id='mCSB_" + n.idx + "_container_wrapper' class='mCSB_container_wrapper' />" : "",
                    f = i.autoHideScrollbar ? " " + d[6] : "",
                    h = "x" !== i.axis && "rtl" === n.langDir ? " " + d[7] : "";
                i.setWidth && t.css("width", i.setWidth), i.setHeight && t.css("height", i.setHeight), i.setLeft = "y" !== i.axis && "rtl" === n.langDir ? "989999px" : i.setLeft, t.addClass(o + " _" + a + "_" + n.idx + f + h).wrapInner("<div id='mCSB_" + n.idx + "' class='mCustomScrollBox mCS-" + i.theme + " " + s + "'><div id='mCSB_" + n.idx + "_container' class='mCSB_container' style='position:relative; top:" + i.setTop + "; left:" + i.setLeft + ";' dir=" + n.langDir + " /></div>");
                var m = e("#mCSB_" + n.idx),
                    p = e("#mCSB_" + n.idx + "_container");
                "y" === i.axis || i.advanced.autoExpandHorizontalScroll || p.css("width", x(p)), "outside" === i.scrollbarPosition ? ("static" === t.css("position") && t.css("position", "relative"), t.css("overflow", "visible"), m.addClass("mCSB_outside").after(c)) : (m.addClass("mCSB_inside").append(c), p.wrap(u)), w.call(this);
                var g = [e("#mCSB_" + n.idx + "_dragger_vertical"), e("#mCSB_" + n.idx + "_dragger_horizontal")];
                g[0].css("min-height", g[0].height()), g[1].css("min-width", g[1].width())
            },
            x = function(t) {
                var o = [t[0].scrollWidth, Math.max.apply(Math, t.children().map(function() {
                        return e(this).outerWidth(!0)
                    }).get())],
                    a = t.parent().width();
                return o[0] > a ? o[0] : o[1] > a ? o[1] : "100%"
            },
            _ = function() {
                var t = e(this),
                    o = t.data(a),
                    n = o.opt,
                    i = e("#mCSB_" + o.idx + "_container");
                if (n.advanced.autoExpandHorizontalScroll && "y" !== n.axis) {
                    i.css({
                        width: "auto",
                        "min-width": 0,
                        "overflow-x": "scroll"
                    });
                    var r = Math.ceil(i[0].scrollWidth);
                    3 === n.advanced.autoExpandHorizontalScroll || 2 !== n.advanced.autoExpandHorizontalScroll && r > i.parent().width() ? i.css({
                        width: r,
                        "min-width": "100%",
                        "overflow-x": "inherit"
                    }) : i.css({
                        "overflow-x": "inherit",
                        position: "absolute"
                    }).wrap("<div class='mCSB_h_wrapper' style='position:relative; left:0; width:999999px;' />").css({
                        width: Math.ceil(i[0].getBoundingClientRect().right + .4) - Math.floor(i[0].getBoundingClientRect().left),
                        "min-width": "100%",
                        position: "relative"
                    }).unwrap()
                }
            },
            w = function() {
                var t = e(this),
                    o = t.data(a),
                    n = o.opt,
                    i = e(".mCSB_" + o.idx + "_scrollbar:first"),
                    r = ee(n.scrollButtons.tabindex) ? "tabindex='" + n.scrollButtons.tabindex + "'" : "",
                    l = ["<a href='#' class='" + d[13] + "' oncontextmenu='return false;' " + r + " />", "<a href='#' class='" + d[14] + "' oncontextmenu='return false;' " + r + " />", "<a href='#' class='" + d[15] + "' oncontextmenu='return false;' " + r + " />", "<a href='#' class='" + d[16] + "' oncontextmenu='return false;' " + r + " />"],
                    s = ["x" === n.axis ? l[2] : l[0], "x" === n.axis ? l[3] : l[1], l[2], l[3]];
                n.scrollButtons.enable && i.prepend(s[0]).append(s[1]).next(".mCSB_scrollTools").prepend(s[2]).append(s[3])
            },
            S = function() {
                var t = e(this),
                    o = t.data(a),
                    n = e("#mCSB_" + o.idx),
                    i = e("#mCSB_" + o.idx + "_container"),
                    r = [e("#mCSB_" + o.idx + "_dragger_vertical"), e("#mCSB_" + o.idx + "_dragger_horizontal")],
                    l = [n.height() / i.outerHeight(!1), n.width() / i.outerWidth(!1)],
                    c = [parseInt(r[0].css("min-height")), Math.round(l[0] * r[0].parent().height()), parseInt(r[1].css("min-width")), Math.round(l[1] * r[1].parent().width())],
                    d = s && c[1] < c[0] ? c[0] : c[1],
                    u = s && c[3] < c[2] ? c[2] : c[3];
                r[0].css({
                    height: d,
                    "max-height": r[0].parent().height() - 10
                }).find(".mCSB_dragger_bar").css({
                    "line-height": c[0] + "px"
                }), r[1].css({
                    width: u,
                    "max-width": r[1].parent().width() - 10
                })
            },
            b = function() {
                var t = e(this),
                    o = t.data(a),
                    n = e("#mCSB_" + o.idx),
                    i = e("#mCSB_" + o.idx + "_container"),
                    r = [e("#mCSB_" + o.idx + "_dragger_vertical"), e("#mCSB_" + o.idx + "_dragger_horizontal")],
                    l = [i.outerHeight(!1) - n.height(), i.outerWidth(!1) - n.width()],
                    s = [l[0] / (r[0].parent().height() - r[0].height()), l[1] / (r[1].parent().width() - r[1].width())];
                o.scrollRatio = {
                    y: s[0],
                    x: s[1]
                }
            },
            C = function(e, t, o) {
                var a = o ? d[0] + "_expanded" : "",
                    n = e.closest(".mCSB_scrollTools");
                "active" === t ? (e.toggleClass(d[0] + " " + a), n.toggleClass(d[1]), e[0]._draggable = e[0]._draggable ? 0 : 1) : e[0]._draggable || ("hide" === t ? (e.removeClass(d[0]), n.removeClass(d[1])) : (e.addClass(d[0]), n.addClass(d[1])))
            },
            y = function() {
                var t = e(this),
                    o = t.data(a),
                    n = e("#mCSB_" + o.idx),
                    i = e("#mCSB_" + o.idx + "_container"),
                    r = null == o.overflowed ? i.height() : i.outerHeight(!1),
                    l = null == o.overflowed ? i.width() : i.outerWidth(!1),
                    s = i[0].scrollHeight,
                    c = i[0].scrollWidth;
                return s > r && (r = s), c > l && (l = c), [r > n.height(), l > n.width()]
            },
            B = function() {
                var t = e(this),
                    o = t.data(a),
                    n = o.opt,
                    i = e("#mCSB_" + o.idx),
                    r = e("#mCSB_" + o.idx + "_container"),
                    l = [e("#mCSB_" + o.idx + "_dragger_vertical"), e("#mCSB_" + o.idx + "_dragger_horizontal")];
                if (N(t), ("x" !== n.axis && !o.overflowed[0] || "y" === n.axis && o.overflowed[0]) && (l[0].add(r).css("top", 0), V(t, "_resetY")), "y" !== n.axis && !o.overflowed[1] || "x" === n.axis && o.overflowed[1]) {
                    var s = dx = 0;
                    "rtl" === o.langDir && (s = i.width() - r.outerWidth(!1), dx = Math.abs(s / o.scrollRatio.x)), r.css("left", s), l[1].css("left", dx), V(t, "_resetX")
                }
            },
            T = function() {
                function t() {
                    r = setTimeout(function() {
                        e.event.special.mousewheel ? (clearTimeout(r), E.call(o[0])) : t()
                    }, 100)
                }
                var o = e(this),
                    n = o.data(a),
                    i = n.opt;
                if (!n.bindEvents) {
                    if (I.call(this), i.contentTouchScroll && R.call(this), D.call(this), i.mouseWheel.enable) {
                        var r;
                        t()
                    }
                    z.call(this), P.call(this), i.advanced.autoScrollOnFocus && A.call(this), i.scrollButtons.enable && H.call(this), i.keyboard.enable && U.call(this), n.bindEvents = !0
                }
            },
            k = function() {
                var t = e(this),
                    o = t.data(a),
                    n = o.opt,
                    i = a + "_" + o.idx,
                    r = ".mCSB_" + o.idx + "_scrollbar",
                    l = e("#mCSB_" + o.idx + ",#mCSB_" + o.idx + "_container,#mCSB_" + o.idx + "_container_wrapper," + r + " ." + d[12] + ",#mCSB_" + o.idx + "_dragger_vertical,#mCSB_" + o.idx + "_dragger_horizontal," + r + ">a"),
                    s = e("#mCSB_" + o.idx + "_container");
                n.advanced.releaseDraggableSelectors && l.add(e(n.advanced.releaseDraggableSelectors)), o.bindEvents && (e(document).unbind("." + i), l.each(function() {
                    e(this).unbind("." + i)
                }), clearTimeout(t[0]._focusTimeout), K(t[0], "_focusTimeout"), clearTimeout(o.sequential.step), K(o.sequential, "step"), clearTimeout(s[0].onCompleteTimeout), K(s[0], "onCompleteTimeout"), o.bindEvents = !1)
            },
            M = function(t) {
                var o = e(this),
                    n = o.data(a),
                    i = n.opt,
                    r = e("#mCSB_" + n.idx + "_container_wrapper"),
                    l = r.length ? r : e("#mCSB_" + n.idx + "_container"),
                    s = [e("#mCSB_" + n.idx + "_scrollbar_vertical"), e("#mCSB_" + n.idx + "_scrollbar_horizontal")],
                    c = [s[0].find(".mCSB_dragger"), s[1].find(".mCSB_dragger")];
                "x" !== i.axis && (n.overflowed[0] && !t ? (s[0].add(c[0]).add(s[0].children("a")).css("display", "block"), l.removeClass(d[8] + " " + d[10])) : (i.alwaysShowScrollbar ? (2 !== i.alwaysShowScrollbar && c[0].css("display", "none"), l.removeClass(d[10])) : (s[0].css("display", "none"), l.addClass(d[10])), l.addClass(d[8]))), "y" !== i.axis && (n.overflowed[1] && !t ? (s[1].add(c[1]).add(s[1].children("a")).css("display", "block"), l.removeClass(d[9] + " " + d[11])) : (i.alwaysShowScrollbar ? (2 !== i.alwaysShowScrollbar && c[1].css("display", "none"), l.removeClass(d[11])) : (s[1].css("display", "none"), l.addClass(d[11])), l.addClass(d[9]))), n.overflowed[0] || n.overflowed[1] ? o.removeClass(d[5]) : o.addClass(d[5])
            },
            O = function(e) {
                var t = e.type;
                switch (t) {
                    case "pointerdown":
                    case "MSPointerDown":
                    case "pointermove":
                    case "MSPointerMove":
                    case "pointerup":
                    case "MSPointerUp":
                        return e.target.ownerDocument !== document ? [e.originalEvent.screenY, e.originalEvent.screenX, !1] : [e.originalEvent.pageY, e.originalEvent.pageX, !1];
                    case "touchstart":
                    case "touchmove":
                    case "touchend":
                        var o = e.originalEvent.touches[0] || e.originalEvent.changedTouches[0],
                            a = e.originalEvent.touches.length || e.originalEvent.changedTouches.length;
                        return e.target.ownerDocument !== document ? [o.screenY, o.screenX, a > 1] : [o.pageY, o.pageX, a > 1];
                    default:
                        return [e.pageY, e.pageX, !1]
                }
            },
            I = function() {
                function t(e) {
                    var t = m.find("iframe");
                    if (t.length) {
                        var o = e ? "auto" : "none";
                        t.css("pointer-events", o)
                    }
                }

                function o(e, t, o, a) {
                    if (m[0].idleTimer = u.scrollInertia < 233 ? 250 : 0, n.attr("id") === h[1]) var i = "x",
                        r = (n[0].offsetLeft - t + a) * d.scrollRatio.x;
                    else var i = "y",
                        r = (n[0].offsetTop - e + o) * d.scrollRatio.y;
                    V(l, r.toString(), {
                        dir: i,
                        drag: !0
                    })
                }
                var n, i, r, l = e(this),
                    d = l.data(a),
                    u = d.opt,
                    f = a + "_" + d.idx,
                    h = ["mCSB_" + d.idx + "_dragger_vertical", "mCSB_" + d.idx + "_dragger_horizontal"],
                    m = e("#mCSB_" + d.idx + "_container"),
                    p = e("#" + h[0] + ",#" + h[1]),
                    g = u.advanced.releaseDraggableSelectors ? p.add(e(u.advanced.releaseDraggableSelectors)) : p;
                p.bind("mousedown." + f + " touchstart." + f + " pointerdown." + f + " MSPointerDown." + f, function(o) {
                    if (o.stopImmediatePropagation(), o.preventDefault(), Z(o)) {
                        c = !0, s && (document.onselectstart = function() {
                            return !1
                        }), t(!1), N(l), n = e(this);
                        var a = n.offset(),
                            d = O(o)[0] - a.top,
                            f = O(o)[1] - a.left,
                            h = n.height() + a.top,
                            m = n.width() + a.left;
                        h > d && d > 0 && m > f && f > 0 && (i = d, r = f), C(n, "active", u.autoExpandScrollbar)
                    }
                }).bind("touchmove." + f, function(e) {
                    e.stopImmediatePropagation(), e.preventDefault();
                    var t = n.offset(),
                        a = O(e)[0] - t.top,
                        l = O(e)[1] - t.left;
                    o(i, r, a, l)
                }), e(document).bind("mousemove." + f + " pointermove." + f + " MSPointerMove." + f, function(e) {
                    if (n) {
                        var t = n.offset(),
                            a = O(e)[0] - t.top,
                            l = O(e)[1] - t.left;
                        if (i === a) return;
                        o(i, r, a, l)
                    }
                }).add(g).bind("mouseup." + f + " touchend." + f + " pointerup." + f + " MSPointerUp." + f, function(e) {
                    n && (C(n, "active", u.autoExpandScrollbar), n = null), c = !1, s && (document.onselectstart = null), t(!0)
                })
            },
            R = function() {
                function o(e) {
                    if (!$(e) || c || O(e)[2]) return void(t = 0);
                    t = 1, b = 0, C = 0, d = 1, y.removeClass("mCS_touch_action");
                    var o = I.offset();
                    u = O(e)[0] - o.top, f = O(e)[1] - o.left, A = [O(e)[0], O(e)[1]]
                }

                function n(e) {
                    if ($(e) && !c && !O(e)[2] && (e.stopImmediatePropagation(), (!C || b) && d)) {
                        g = G();
                        var t = M.offset(),
                            o = O(e)[0] - t.top,
                            a = O(e)[1] - t.left,
                            n = "mcsLinearOut";
                        if (D.push(o), E.push(a), A[2] = Math.abs(O(e)[0] - A[0]), A[3] = Math.abs(O(e)[1] - A[1]), B.overflowed[0]) var i = R[0].parent().height() - R[0].height(),
                            r = u - o > 0 && o - u > -(i * B.scrollRatio.y) && (2 * A[3] < A[2] || "yx" === T.axis);
                        if (B.overflowed[1]) var l = R[1].parent().width() - R[1].width(),
                            h = f - a > 0 && a - f > -(l * B.scrollRatio.x) && (2 * A[2] < A[3] || "yx" === T.axis);
                        r || h ? (U || e.preventDefault(), b = 1) : (C = 1, y.addClass("mCS_touch_action")), U && e.preventDefault(), w = "yx" === T.axis ? [u - o, f - a] : "x" === T.axis ? [null, f - a] : [u - o, null], I[0].idleTimer = 250, B.overflowed[0] && s(w[0], L, n, "y", "all", !0), B.overflowed[1] && s(w[1], L, n, "x", z, !0)
                    }
                }

                function i(e) {
                    if (!$(e) || c || O(e)[2]) return void(t = 0);
                    t = 1, e.stopImmediatePropagation(), N(y), p = G();
                    var o = M.offset();
                    h = O(e)[0] - o.top, m = O(e)[1] - o.left, D = [], E = []
                }

                function r(e) {
                    if ($(e) && !c && !O(e)[2]) {
                        d = 0, e.stopImmediatePropagation(), b = 0, C = 0, v = G();
                        var t = M.offset(),
                            o = O(e)[0] - t.top,
                            a = O(e)[1] - t.left;
                        if (!(v - g > 30)) {
                            _ = 1e3 / (v - p);
                            var n = "mcsEaseOut",
                                i = 2.5 > _,
                                r = i ? [D[D.length - 2], E[E.length - 2]] : [0, 0];
                            x = i ? [o - r[0], a - r[1]] : [o - h, a - m];
                            var u = [Math.abs(x[0]), Math.abs(x[1])];
                            _ = i ? [Math.abs(x[0] / 4), Math.abs(x[1] / 4)] : [_, _];
                            var f = [Math.abs(I[0].offsetTop) - x[0] * l(u[0] / _[0], _[0]), Math.abs(I[0].offsetLeft) - x[1] * l(u[1] / _[1], _[1])];
                            w = "yx" === T.axis ? [f[0], f[1]] : "x" === T.axis ? [null, f[1]] : [f[0], null], S = [4 * u[0] + T.scrollInertia, 4 * u[1] + T.scrollInertia];
                            var y = parseInt(T.contentTouchScroll) || 0;
                            w[0] = u[0] > y ? w[0] : 0, w[1] = u[1] > y ? w[1] : 0, B.overflowed[0] && s(w[0], S[0], n, "y", z, !1), B.overflowed[1] && s(w[1], S[1], n, "x", z, !1)
                        }
                    }
                }

                function l(e, t) {
                    var o = [1.5 * t, 2 * t, t / 1.5, t / 2];
                    return e > 90 ? t > 4 ? o[0] : o[3] : e > 60 ? t > 3 ? o[3] : o[2] : e > 30 ? t > 8 ? o[1] : t > 6 ? o[0] : t > 4 ? t : o[2] : t > 8 ? t : o[3]
                }

                function s(e, t, o, a, n, i) {
                    e && V(y, e.toString(), {
                        dur: t,
                        scrollEasing: o,
                        dir: a,
                        overwrite: n,
                        drag: i
                    })
                }
                var d, u, f, h, m, p, g, v, x, _, w, S, b, C, y = e(this),
                    B = y.data(a),
                    T = B.opt,
                    k = a + "_" + B.idx,
                    M = e("#mCSB_" + B.idx),
                    I = e("#mCSB_" + B.idx + "_container"),
                    R = [e("#mCSB_" + B.idx + "_dragger_vertical"), e("#mCSB_" + B.idx + "_dragger_horizontal")],
                    D = [],
                    E = [],
                    L = 0,
                    z = "yx" === T.axis ? "none" : "all",
                    A = [],
                    P = I.find("iframe"),
                    H = ["touchstart." + k + " pointerdown." + k + " MSPointerDown." + k, "touchmove." + k + " pointermove." + k + " MSPointerMove." + k, "touchend." + k + " pointerup." + k + " MSPointerUp." + k],
                    U = void 0 !== document.body.style.touchAction;
                I.bind(H[0], function(e) {
                    o(e)
                }).bind(H[1], function(e) {
                    n(e)
                }), M.bind(H[0], function(e) {
                    i(e)
                }).bind(H[2], function(e) {
                    r(e)
                }), P.length && P.each(function() {
                    e(this).load(function() {
                        W(this) && e(this.contentDocument || this.contentWindow.document).bind(H[0], function(e) {
                            o(e), i(e)
                        }).bind(H[1], function(e) {
                            n(e)
                        }).bind(H[2], function(e) {
                            r(e)
                        })
                    })
                })
            },
            D = function() {
                function o() {
                    return window.getSelection ? window.getSelection().toString() : document.selection && "Control" != document.selection.type ? document.selection.createRange().text : 0
                }

                function n(e, t, o) {
                    d.type = o && i ? "stepped" : "stepless", d.scrollAmount = 10, F(r, e, t, "mcsLinearOut", o ? 60 : null)
                }
                var i, r = e(this),
                    l = r.data(a),
                    s = l.opt,
                    d = l.sequential,
                    u = a + "_" + l.idx,
                    f = e("#mCSB_" + l.idx + "_container"),
                    h = f.parent();
                f.bind("mousedown." + u, function(e) {
                    t || i || (i = 1, c = !0)
                }).add(document).bind("mousemove." + u, function(e) {
                    if (!t && i && o()) {
                        var a = f.offset(),
                            r = O(e)[0] - a.top + f[0].offsetTop,
                            c = O(e)[1] - a.left + f[0].offsetLeft;
                        r > 0 && r < h.height() && c > 0 && c < h.width() ? d.step && n("off", null, "stepped") : ("x" !== s.axis && l.overflowed[0] && (0 > r ? n("on", 38) : r > h.height() && n("on", 40)), "y" !== s.axis && l.overflowed[1] && (0 > c ? n("on", 37) : c > h.width() && n("on", 39)))
                    }
                }).bind("mouseup." + u + " dragend." + u, function(e) {
                    t || (i && (i = 0, n("off", null)), c = !1)
                })
            },
            E = function() {
                function t(t, a) {
                    if (N(o), !L(o, t.target)) {
                        var r = "auto" !== i.mouseWheel.deltaFactor ? parseInt(i.mouseWheel.deltaFactor) : s && t.deltaFactor < 100 ? 100 : t.deltaFactor || 100;
                        if ("x" === i.axis || "x" === i.mouseWheel.axis) var d = "x",
                            u = [Math.round(r * n.scrollRatio.x), parseInt(i.mouseWheel.scrollAmount)],
                            f = "auto" !== i.mouseWheel.scrollAmount ? u[1] : u[0] >= l.width() ? .9 * l.width() : u[0],
                            h = Math.abs(e("#mCSB_" + n.idx + "_container")[0].offsetLeft),
                            m = c[1][0].offsetLeft,
                            p = c[1].parent().width() - c[1].width(),
                            g = t.deltaX || t.deltaY || a;
                        else var d = "y",
                            u = [Math.round(r * n.scrollRatio.y), parseInt(i.mouseWheel.scrollAmount)],
                            f = "auto" !== i.mouseWheel.scrollAmount ? u[1] : u[0] >= l.height() ? .9 * l.height() : u[0],
                            h = Math.abs(e("#mCSB_" + n.idx + "_container")[0].offsetTop),
                            m = c[0][0].offsetTop,
                            p = c[0].parent().height() - c[0].height(),
                            g = t.deltaY || a;
                        "y" === d && !n.overflowed[0] || "x" === d && !n.overflowed[1] || ((i.mouseWheel.invert || t.webkitDirectionInvertedFromDevice) && (g = -g), i.mouseWheel.normalizeDelta && (g = 0 > g ? -1 : 1), (g > 0 && 0 !== m || 0 > g && m !== p || i.mouseWheel.preventDefault) && (t.stopImmediatePropagation(), t.preventDefault()), V(o, (h - g * f).toString(), {
                            dir: d
                        }))
                    }
                }
                if (e(this).data(a)) {
                    var o = e(this),
                        n = o.data(a),
                        i = n.opt,
                        r = a + "_" + n.idx,
                        l = e("#mCSB_" + n.idx),
                        c = [e("#mCSB_" + n.idx + "_dragger_vertical"), e("#mCSB_" + n.idx + "_dragger_horizontal")],
                        d = e("#mCSB_" + n.idx + "_container").find("iframe");
                    d.length && d.each(function() {
                        e(this).load(function() {
                            W(this) && e(this.contentDocument || this.contentWindow.document).bind("mousewheel." + r, function(e, o) {
                                t(e, o)
                            })
                        })
                    }), l.bind("mousewheel." + r, function(e, o) {
                        t(e, o)
                    })
                }
            },
            W = function(e) {
                var t = null;
                try {
                    var o = e.contentDocument || e.contentWindow.document;
                    t = o.body.innerHTML
                } catch (a) {}
                return null !== t
            },
            L = function(t, o) {
                var n = o.nodeName.toLowerCase(),
                    i = t.data(a).opt.mouseWheel.disableOver,
                    r = ["select", "textarea"];
                return e.inArray(n, i) > -1 && !(e.inArray(n, r) > -1 && !e(o).is(":focus"))
            },
            z = function() {
                var t = e(this),
                    o = t.data(a),
                    n = a + "_" + o.idx,
                    i = e("#mCSB_" + o.idx + "_container"),
                    r = i.parent(),
                    l = e(".mCSB_" + o.idx + "_scrollbar ." + d[12]);
                l.bind("touchstart." + n + " pointerdown." + n + " MSPointerDown." + n, function(e) {
                    c = !0
                }).bind("touchend." + n + " pointerup." + n + " MSPointerUp." + n, function(e) {
                    c = !1
                }).bind("click." + n, function(a) {
                    if (e(a.target).hasClass(d[12]) || e(a.target).hasClass("mCSB_draggerRail")) {
                        N(t);
                        var n = e(this),
                            l = n.find(".mCSB_dragger");
                        if (n.parent(".mCSB_scrollTools_horizontal").length > 0) {
                            if (!o.overflowed[1]) return;
                            var s = "x",
                                c = a.pageX > l.offset().left ? -1 : 1,
                                u = Math.abs(i[0].offsetLeft) - .9 * c * r.width()
                        } else {
                            if (!o.overflowed[0]) return;
                            var s = "y",
                                c = a.pageY > l.offset().top ? -1 : 1,
                                u = Math.abs(i[0].offsetTop) - .9 * c * r.height()
                        }
                        V(t, u.toString(), {
                            dir: s,
                            scrollEasing: "mcsEaseInOut"
                        })
                    }
                })
            },
            A = function() {
                var t = e(this),
                    o = t.data(a),
                    n = o.opt,
                    i = a + "_" + o.idx,
                    r = e("#mCSB_" + o.idx + "_container"),
                    l = r.parent();
                r.bind("focusin." + i, function(o) {
                    var a = e(document.activeElement),
                        i = r.find(".mCustomScrollBox").length,
                        s = 0;
                    a.is(n.advanced.autoScrollOnFocus) && (N(t), clearTimeout(t[0]._focusTimeout), t[0]._focusTimer = i ? (s + 17) * i : 0, t[0]._focusTimeout = setTimeout(function() {
                        var e = [te(a)[0], te(a)[1]],
                            o = [r[0].offsetTop, r[0].offsetLeft],
                            i = [o[0] + e[0] >= 0 && o[0] + e[0] < l.height() - a.outerHeight(!1), o[1] + e[1] >= 0 && o[0] + e[1] < l.width() - a.outerWidth(!1)],
                            c = "yx" !== n.axis || i[0] || i[1] ? "all" : "none";
                        "x" === n.axis || i[0] || V(t, e[0].toString(), {
                            dir: "y",
                            scrollEasing: "mcsEaseInOut",
                            overwrite: c,
                            dur: s
                        }), "y" === n.axis || i[1] || V(t, e[1].toString(), {
                            dir: "x",
                            scrollEasing: "mcsEaseInOut",
                            overwrite: c,
                            dur: s
                        })
                    }, t[0]._focusTimer))
                })
            },
            P = function() {
                var t = e(this),
                    o = t.data(a),
                    n = a + "_" + o.idx,
                    i = e("#mCSB_" + o.idx + "_container").parent();
                i.bind("scroll." + n, function(t) {
                    (0 !== i.scrollTop() || 0 !== i.scrollLeft()) && e(".mCSB_" + o.idx + "_scrollbar").css("visibility", "hidden")
                })
            },
            H = function() {
                var t = e(this),
                    o = t.data(a),
                    n = o.opt,
                    i = o.sequential,
                    r = a + "_" + o.idx,
                    l = ".mCSB_" + o.idx + "_scrollbar",
                    s = e(l + ">a");
                s.bind("mousedown." + r + " touchstart." + r + " pointerdown." + r + " MSPointerDown." + r + " mouseup." + r + " touchend." + r + " pointerup." + r + " MSPointerUp." + r + " mouseout." + r + " pointerout." + r + " MSPointerOut." + r + " click." + r, function(a) {
                    function r(e, o) {
                        i.scrollAmount = n.snapAmount || n.scrollButtons.scrollAmount, F(t, e, o)
                    }
                    if (a.preventDefault(), Z(a)) {
                        var l = e(this).attr("class");
                        switch (i.type = n.scrollButtons.scrollType, a.type) {
                            case "mousedown":
                            case "touchstart":
                            case "pointerdown":
                            case "MSPointerDown":
                                if ("stepped" === i.type) return;
                                c = !0, o.tweenRunning = !1, r("on", l);
                                break;
                            case "mouseup":
                            case "touchend":
                            case "pointerup":
                            case "MSPointerUp":
                            case "mouseout":
                            case "pointerout":
                            case "MSPointerOut":
                                if ("stepped" === i.type) return;
                                c = !1, i.dir && r("off", l);
                                break;
                            case "click":
                                if ("stepped" !== i.type || o.tweenRunning) return;
                                r("on", l)
                        }
                    }
                })
            },
            U = function() {
                function t(t) {
                    function a(e, t) {
                        r.type = i.keyboard.scrollType, r.scrollAmount = i.snapAmount || i.keyboard.scrollAmount, "stepped" === r.type && n.tweenRunning || F(o, e, t)
                    }
                    switch (t.type) {
                        case "blur":
                            n.tweenRunning && r.dir && a("off", null);
                            break;
                        case "keydown":
                        case "keyup":
                            var l = t.keyCode ? t.keyCode : t.which,
                                s = "on";
                            if ("x" !== i.axis && (38 === l || 40 === l) || "y" !== i.axis && (37 === l || 39 === l)) {
                                if ((38 === l || 40 === l) && !n.overflowed[0] || (37 === l || 39 === l) && !n.overflowed[1]) return;
                                "keyup" === t.type && (s = "off"), e(document.activeElement).is(u) || (t.preventDefault(), t.stopImmediatePropagation(), a(s, l))
                            } else if (33 === l || 34 === l) {
                                if ((n.overflowed[0] || n.overflowed[1]) && (t.preventDefault(), t.stopImmediatePropagation()), "keyup" === t.type) {
                                    N(o);
                                    var f = 34 === l ? -1 : 1;
                                    if ("x" === i.axis || "yx" === i.axis && n.overflowed[1] && !n.overflowed[0]) var h = "x",
                                        m = Math.abs(c[0].offsetLeft) - .9 * f * d.width();
                                    else var h = "y",
                                        m = Math.abs(c[0].offsetTop) - .9 * f * d.height();
                                    V(o, m.toString(), {
                                        dir: h,
                                        scrollEasing: "mcsEaseInOut"
                                    })
                                }
                            } else if ((35 === l || 36 === l) && !e(document.activeElement).is(u) && ((n.overflowed[0] || n.overflowed[1]) && (t.preventDefault(), t.stopImmediatePropagation()), "keyup" === t.type)) {
                                if ("x" === i.axis || "yx" === i.axis && n.overflowed[1] && !n.overflowed[0]) var h = "x",
                                    m = 35 === l ? Math.abs(d.width() - c.outerWidth(!1)) : 0;
                                else var h = "y",
                                    m = 35 === l ? Math.abs(d.height() - c.outerHeight(!1)) : 0;
                                V(o, m.toString(), {
                                    dir: h,
                                    scrollEasing: "mcsEaseInOut"
                                })
                            }
                    }
                }
                var o = e(this),
                    n = o.data(a),
                    i = n.opt,
                    r = n.sequential,
                    l = a + "_" + n.idx,
                    s = e("#mCSB_" + n.idx),
                    c = e("#mCSB_" + n.idx + "_container"),
                    d = c.parent(),
                    u = "input,textarea,select,datalist,keygen,[contenteditable='true']",
                    f = c.find("iframe"),
                    h = ["blur." + l + " keydown." + l + " keyup." + l];
                f.length && f.each(function() {
                    e(this).load(function() {
                        W(this) && e(this.contentDocument || this.contentWindow.document).bind(h[0], function(e) {
                            t(e)
                        })
                    })
                }), s.attr("tabindex", "0").bind(h[0], function(e) {
                    t(e)
                })
            },
            F = function(t, o, n, i, r) {
                function l(e) {
                    var o = "stepped" !== f.type,
                        a = r ? r : e ? o ? p / 1.5 : g : 1e3 / 60,
                        n = e ? o ? 7.5 : 40 : 2.5,
                        s = [Math.abs(h[0].offsetTop), Math.abs(h[0].offsetLeft)],
                        d = [c.scrollRatio.y > 10 ? 10 : c.scrollRatio.y, c.scrollRatio.x > 10 ? 10 : c.scrollRatio.x],
                        u = "x" === f.dir[0] ? s[1] + f.dir[1] * d[1] * n : s[0] + f.dir[1] * d[0] * n,
                        m = "x" === f.dir[0] ? s[1] + f.dir[1] * parseInt(f.scrollAmount) : s[0] + f.dir[1] * parseInt(f.scrollAmount),
                        v = "auto" !== f.scrollAmount ? m : u,
                        x = i ? i : e ? o ? "mcsLinearOut" : "mcsEaseInOut" : "mcsLinear",
                        _ = e ? !0 : !1;
                    return e && 17 > a && (v = "x" === f.dir[0] ? s[1] : s[0]), V(t, v.toString(), {
                        dir: f.dir[0],
                        scrollEasing: x,
                        dur: a,
                        onComplete: _
                    }), e ? void(f.dir = !1) : (clearTimeout(f.step), void(f.step = setTimeout(function() {
                        l()
                    }, a)))
                }

                function s() {
                    clearTimeout(f.step), K(f, "step"), N(t)
                }
                var c = t.data(a),
                    u = c.opt,
                    f = c.sequential,
                    h = e("#mCSB_" + c.idx + "_container"),
                    m = "stepped" === f.type ? !0 : !1,
                    p = u.scrollInertia < 26 ? 26 : u.scrollInertia,
                    g = u.scrollInertia < 1 ? 17 : u.scrollInertia;
                switch (o) {
                    case "on":
                        if (f.dir = [n === d[16] || n === d[15] || 39 === n || 37 === n ? "x" : "y", n === d[13] || n === d[15] || 38 === n || 37 === n ? -1 : 1], N(t), ee(n) && "stepped" === f.type) return;
                        l(m);
                        break;
                    case "off":
                        s(), (m || c.tweenRunning && f.dir) && l(!0)
                }
            },
            q = function(t) {
                var o = e(this).data(a).opt,
                    n = [];
                return "function" == typeof t && (t = t()), t instanceof Array ? n = t.length > 1 ? [t[0], t[1]] : "x" === o.axis ? [null, t[0]] : [t[0], null] : (n[0] = t.y ? t.y : t.x || "x" === o.axis ? null : t, n[1] = t.x ? t.x : t.y || "y" === o.axis ? null : t), "function" == typeof n[0] && (n[0] = n[0]()), "function" == typeof n[1] && (n[1] = n[1]()), n
            },
            Y = function(t, o) {
                if (null != t && "undefined" != typeof t) {
                    var n = e(this),
                        i = n.data(a),
                        r = i.opt,
                        l = e("#mCSB_" + i.idx + "_container"),
                        s = l.parent(),
                        c = typeof t;
                    o || (o = "x" === r.axis ? "x" : "y");
                    var d = "x" === o ? l.outerWidth(!1) : l.outerHeight(!1),
                        f = "x" === o ? l[0].offsetLeft : l[0].offsetTop,
                        h = "x" === o ? "left" : "top";
                    switch (c) {
                        case "function":
                            return t();
                        case "object":
                            var m = t.jquery ? t : e(t);
                            if (!m.length) return;
                            return "x" === o ? te(m)[1] : te(m)[0];
                        case "string":
                        case "number":
                            if (ee(t)) return Math.abs(t);
                            if (-1 !== t.indexOf("%")) return Math.abs(d * parseInt(t) / 100);
                            if (-1 !== t.indexOf("-=")) return Math.abs(f - parseInt(t.split("-=")[1]));
                            if (-1 !== t.indexOf("+=")) {
                                var p = f + parseInt(t.split("+=")[1]);
                                return p >= 0 ? 0 : Math.abs(p)
                            }
                            if (-1 !== t.indexOf("px") && ee(t.split("px")[0])) return Math.abs(t.split("px")[0]);
                            if ("top" === t || "left" === t) return 0;
                            if ("bottom" === t) return Math.abs(s.height() - l.outerHeight(!1));
                            if ("right" === t) return Math.abs(s.width() - l.outerWidth(!1));
                            if ("first" === t || "last" === t) {
                                var m = l.find(":" + t);
                                return "x" === o ? te(m)[1] : te(m)[0]
                            }
                            return e(t).length ? "x" === o ? te(e(t))[1] : te(e(t))[0] : (l.css(h, t), void u.update.call(null, n[0]))
                    }
                }
            },
            j = function(t) {
                function o() {
                    return clearTimeout(f[0].autoUpdate), 0 === l.parents("html").length ? void(l = null) : void(f[0].autoUpdate = setTimeout(function() {
                        return c.advanced.updateOnSelectorChange && (s.poll.change.n = i(), s.poll.change.n !== s.poll.change.o) ? (s.poll.change.o = s.poll.change.n, void r(3)) : c.advanced.updateOnContentResize && (s.poll.size.n = l[0].scrollHeight + l[0].scrollWidth + f[0].offsetHeight + l[0].offsetHeight, s.poll.size.n !== s.poll.size.o) ? (s.poll.size.o = s.poll.size.n, void r(1)) : !c.advanced.updateOnImageLoad || "auto" === c.advanced.updateOnImageLoad && "y" === c.axis || (s.poll.img.n = f.find("img").length, s.poll.img.n === s.poll.img.o) ? void((c.advanced.updateOnSelectorChange || c.advanced.updateOnContentResize || c.advanced.updateOnImageLoad) && o()) : (s.poll.img.o = s.poll.img.n, void f.find("img").each(function() {
                            n(this)
                        }))
                    }, c.advanced.autoUpdateTimeout))
                }

                function n(t) {
                    function o(e, t) {
                        return function() {
                            return t.apply(e, arguments)
                        }
                    }

                    function a() {
                        this.onload = null, e(t).addClass(d[2]), r(2)
                    }
                    if (e(t).hasClass(d[2])) return void r();
                    var n = new Image;
                    n.onload = o(n, a), n.src = t.src
                }

                function i() {
                    c.advanced.updateOnSelectorChange === !0 && (c.advanced.updateOnSelectorChange = "*");
                    var e = 0,
                        t = f.find(c.advanced.updateOnSelectorChange);
                    return c.advanced.updateOnSelectorChange && t.length > 0 && t.each(function() {
                        e += this.offsetHeight + this.offsetWidth
                    }), e
                }

                function r(e) {
                    clearTimeout(f[0].autoUpdate), u.update.call(null, l[0], e)
                }
                var l = e(this),
                    s = l.data(a),
                    c = s.opt,
                    f = e("#mCSB_" + s.idx + "_container");
                return t ? (clearTimeout(f[0].autoUpdate), void K(f[0], "autoUpdate")) : void o()
            },
            X = function(e, t, o) {
                return Math.round(e / t) * t - o
            },
            N = function(t) {
                var o = t.data(a),
                    n = e("#mCSB_" + o.idx + "_container,#mCSB_" + o.idx + "_container_wrapper,#mCSB_" + o.idx + "_dragger_vertical,#mCSB_" + o.idx + "_dragger_horizontal");
                n.each(function() {
                    J.call(this)
                })
            },
            V = function(t, o, n) {
                function i(e) {
                    return s && c.callbacks[e] && "function" == typeof c.callbacks[e]
                }

                function r() {
                    return [c.callbacks.alwaysTriggerOffsets || _ >= w[0] + b, c.callbacks.alwaysTriggerOffsets || -y >= _]
                }

                function l() {
                    var e = [h[0].offsetTop, h[0].offsetLeft],
                        o = [v[0].offsetTop, v[0].offsetLeft],
                        a = [h.outerHeight(!1), h.outerWidth(!1)],
                        i = [f.height(), f.width()];
                    t[0].mcs = {
                        content: h,
                        top: e[0],
                        left: e[1],
                        draggerTop: o[0],
                        draggerLeft: o[1],
                        topPct: Math.round(100 * Math.abs(e[0]) / (Math.abs(a[0]) - i[0])),
                        leftPct: Math.round(100 * Math.abs(e[1]) / (Math.abs(a[1]) - i[1])),
                        direction: n.dir
                    }
                }
                var s = t.data(a),
                    c = s.opt,
                    d = {
                        trigger: "internal",
                        dir: "y",
                        scrollEasing: "mcsEaseOut",
                        drag: !1,
                        dur: c.scrollInertia,
                        overwrite: "all",
                        callbacks: !0,
                        onStart: !0,
                        onUpdate: !0,
                        onComplete: !0
                    },
                    n = e.extend(d, n),
                    u = [n.dur, n.drag ? 0 : n.dur],
                    f = e("#mCSB_" + s.idx),
                    h = e("#mCSB_" + s.idx + "_container"),
                    m = h.parent(),
                    p = c.callbacks.onTotalScrollOffset ? q.call(t, c.callbacks.onTotalScrollOffset) : [0, 0],
                    g = c.callbacks.onTotalScrollBackOffset ? q.call(t, c.callbacks.onTotalScrollBackOffset) : [0, 0];
                if (s.trigger = n.trigger, (0 !== m.scrollTop() || 0 !== m.scrollLeft()) && (e(".mCSB_" + s.idx + "_scrollbar").css("visibility", "visible"), m.scrollTop(0).scrollLeft(0)), "_resetY" !== o || s.contentReset.y || (i("onOverflowYNone") && c.callbacks.onOverflowYNone.call(t[0]), s.contentReset.y = 1), "_resetX" !== o || s.contentReset.x || (i("onOverflowXNone") && c.callbacks.onOverflowXNone.call(t[0]), s.contentReset.x = 1), "_resetY" !== o && "_resetX" !== o) {
                    switch (!s.contentReset.y && t[0].mcs || !s.overflowed[0] || (i("onOverflowY") && c.callbacks.onOverflowY.call(t[0]), s.contentReset.x = null), !s.contentReset.x && t[0].mcs || !s.overflowed[1] || (i("onOverflowX") && c.callbacks.onOverflowX.call(t[0]), s.contentReset.x = null), c.snapAmount && (o = X(o, c.snapAmount, c.snapOffset)), n.dir) {
                        case "x":
                            var v = e("#mCSB_" + s.idx + "_dragger_horizontal"),
                                x = "left",
                                _ = h[0].offsetLeft,
                                w = [f.width() - h.outerWidth(!1), v.parent().width() - v.width()],
                                S = [o, 0 === o ? 0 : o / s.scrollRatio.x],
                                b = p[1],
                                y = g[1],
                                B = b > 0 ? b / s.scrollRatio.x : 0,
                                T = y > 0 ? y / s.scrollRatio.x : 0;
                            break;
                        case "y":
                            var v = e("#mCSB_" + s.idx + "_dragger_vertical"),
                                x = "top",
                                _ = h[0].offsetTop,
                                w = [f.height() - h.outerHeight(!1), v.parent().height() - v.height()],
                                S = [o, 0 === o ? 0 : o / s.scrollRatio.y],
                                b = p[0],
                                y = g[0],
                                B = b > 0 ? b / s.scrollRatio.y : 0,
                                T = y > 0 ? y / s.scrollRatio.y : 0
                    }
                    S[1] < 0 || 0 === S[0] && 0 === S[1] ? S = [0, 0] : S[1] >= w[1] ? S = [w[0], w[1]] : S[0] = -S[0], t[0].mcs || (l(), i("onInit") && c.callbacks.onInit.call(t[0])), clearTimeout(h[0].onCompleteTimeout), (s.tweenRunning || !(0 === _ && S[0] >= 0 || _ === w[0] && S[0] <= w[0])) && (Q(v[0], x, Math.round(S[1]), u[1], n.scrollEasing), Q(h[0], x, Math.round(S[0]), u[0], n.scrollEasing, n.overwrite, {
                        onStart: function() {
                            n.callbacks && n.onStart && !s.tweenRunning && (i("onScrollStart") && (l(), c.callbacks.onScrollStart.call(t[0])), s.tweenRunning = !0, C(v), s.cbOffsets = r())
                        },
                        onUpdate: function() {
                            n.callbacks && n.onUpdate && i("whileScrolling") && (l(), c.callbacks.whileScrolling.call(t[0]))
                        },
                        onComplete: function() {
                            if (n.callbacks && n.onComplete) {
                                "yx" === c.axis && clearTimeout(h[0].onCompleteTimeout);
                                var e = h[0].idleTimer || 0;
                                h[0].onCompleteTimeout = setTimeout(function() {
                                    i("onScroll") && (l(), c.callbacks.onScroll.call(t[0])), i("onTotalScroll") && S[1] >= w[1] - B && s.cbOffsets[0] && (l(), c.callbacks.onTotalScroll.call(t[0])), i("onTotalScrollBack") && S[1] <= T && s.cbOffsets[1] && (l(), c.callbacks.onTotalScrollBack.call(t[0])), s.tweenRunning = !1, h[0].idleTimer = 0, C(v, "hide")
                                }, e)
                            }
                        }
                    }))
                }
            },
            Q = function(e, t, o, a, n, i, r) {
                function l() {
                    S.stop || (x || m.call(), x = G() - v, s(), x >= S.time && (S.time = x > S.time ? x + f - (x - S.time) : x + f - 1, S.time < x + 1 && (S.time = x + 1)), S.time < a ? S.id = h(l) : g.call())
                }

                function s() {
                    a > 0 ? (S.currVal = u(S.time, _, b, a, n), w[t] = Math.round(S.currVal) + "px") : w[t] = o + "px", p.call()
                }

                function c() {
                    f = 1e3 / 60, S.time = x + f, h = window.requestAnimationFrame ? window.requestAnimationFrame : function(e) {
                        return s(), setTimeout(e, .01)
                    }, S.id = h(l)
                }

                function d() {
                    null != S.id && (window.requestAnimationFrame ? window.cancelAnimationFrame(S.id) : clearTimeout(S.id), S.id = null)
                }

                function u(e, t, o, a, n) {
                    switch (n) {
                        case "linear":
                        case "mcsLinear":
                            return o * e / a + t;
                        case "mcsLinearOut":
                            return e /= a, e--, o * Math.sqrt(1 - e * e) + t;
                        case "easeInOutSmooth":
                            return e /= a / 2, 1 > e ? o / 2 * e * e + t : (e--, -o / 2 * (e * (e - 2) - 1) + t);
                        case "easeInOutStrong":
                            return e /= a / 2, 1 > e ? o / 2 * Math.pow(2, 10 * (e - 1)) + t : (e--, o / 2 * (-Math.pow(2, -10 * e) + 2) + t);
                        case "easeInOut":
                        case "mcsEaseInOut":
                            return e /= a / 2, 1 > e ? o / 2 * e * e * e + t : (e -= 2, o / 2 * (e * e * e + 2) + t);
                        case "easeOutSmooth":
                            return e /= a, e--, -o * (e * e * e * e - 1) + t;
                        case "easeOutStrong":
                            return o * (-Math.pow(2, -10 * e / a) + 1) + t;
                        case "easeOut":
                        case "mcsEaseOut":
                        default:
                            var i = (e /= a) * e,
                                r = i * e;
                            return t + o * (.499999999999997 * r * i + -2.5 * i * i + 5.5 * r + -6.5 * i + 4 * e)
                    }
                }
                e._mTween || (e._mTween = {
                    top: {},
                    left: {}
                });
                var f, h, r = r || {},
                    m = r.onStart || function() {},
                    p = r.onUpdate || function() {},
                    g = r.onComplete || function() {},
                    v = G(),
                    x = 0,
                    _ = e.offsetTop,
                    w = e.style,
                    S = e._mTween[t];
                "left" === t && (_ = e.offsetLeft);
                var b = o - _;
                S.stop = 0, "none" !== i && d(), c()
            },
            G = function() {
                return window.performance && window.performance.now ? window.performance.now() : window.performance && window.performance.webkitNow ? window.performance.webkitNow() : Date.now ? Date.now() : (new Date).getTime()
            },
            J = function() {
                var e = this;
                e._mTween || (e._mTween = {
                    top: {},
                    left: {}
                });
                for (var t = ["top", "left"], o = 0; o < t.length; o++) {
                    var a = t[o];
                    e._mTween[a].id && (window.requestAnimationFrame ? window.cancelAnimationFrame(e._mTween[a].id) : clearTimeout(e._mTween[a].id), e._mTween[a].id = null, e._mTween[a].stop = 1)
                }
            },
            K = function(e, t) {
                try {
                    delete e[t]
                } catch (o) {
                    e[t] = null
                }
            },
            Z = function(e) {
                return !(e.which && 1 !== e.which)
            },
            $ = function(e) {
                var t = e.originalEvent.pointerType;
                return !(t && "touch" !== t && 2 !== t)
            },
            ee = function(e) {
                return !isNaN(parseFloat(e)) && isFinite(e)
            },
            te = function(e) {
                var t = e.parents(".mCSB_container");
                return [e.offset().top - t.offset().top, e.offset().left - t.offset().left]
            };
        e.fn[o] = function(t) {
            return u[t] ? u[t].apply(this, Array.prototype.slice.call(arguments, 1)) : "object" != typeof t && t ? void e.error("Method " + t + " does not exist") : u.init.apply(this, arguments)
        }, e[o] = function(t) {
            return u[t] ? u[t].apply(this, Array.prototype.slice.call(arguments, 1)) : "object" != typeof t && t ? void e.error("Method " + t + " does not exist") : u.init.apply(this, arguments)
        }, e[o].defaults = i, window[o] = !0, e(window).load(function() {
            e(n)[o](), e.extend(e.expr[":"], {
                mcsInView: e.expr[":"].mcsInView || function(t) {
                    var o, a, n = e(t),
                        i = n.parents(".mCSB_container");
                    if (i.length) return o = i.parent(), a = [i[0].offsetTop, i[0].offsetLeft], a[0] + te(n)[0] >= 0 && a[0] + te(n)[0] < o.height() - n.outerHeight(!1) && a[1] + te(n)[1] >= 0 && a[1] + te(n)[1] < o.width() - n.outerWidth(!1)
                },
                mcsOverflow: e.expr[":"].mcsOverflow || function(t) {
                    var o = e(t).data(a);
                    if (o) return o.overflowed[0] || o.overflowed[1]
                }
            })
        })
    })
});

; // Reference/widget.js
var Roblox = Roblox || {};
Roblox.BootstrapWidgets = function() {
    function v() {
        $("#horizontal-tabs a").on("click", function(n) {
            n.preventDefault(), $(this).tab("show")
        });
        $("#horizontal-tabs a").on("touchstart", function(n) {
            n.preventDefault(), $(this).trigger("click")
        });
        $("#vertical-tabs a").click(function(n) {
            n.preventDefault(), $(this).tab("show")
        })
    }

    function it() {
        $('[data-toggle="dropdown-menu"] li').click(function(n) {
            var t = $(n.currentTarget);
            return t.closest(".input-group-btn").find('[data-bind="label"]').text(t.text()).end().toggleClass("open"), t.hasClass("rbx-clickable-li") ? void 0 : !1
        })
    }

    function t(n, t) {
        var i = n.data("expanded-icon") || "icon-up-16x16",
            r = n.data("collapsed-icon") || "icon-down-16x16",
            f = t ? i : r,
            u = t ? r : i;
        n.prev(".panel-heading").find("." + u).removeClass(u).addClass(f)
    }

    function tt() {
        $('[data-toggle="collapsible-element"]').on("show.bs.collapse", function(n) {
            t($(n.target), !0)
        });
        $('[data-toggle="collapsible-element"]').on("hide.bs.collapse", function(n) {
            t($(n.target), !1)
        })
    }

    function nt(n) {
        $(n).collapse("show")
    }

    function g() {
        if ("ontouchstart" in window) $('[data-toggle-mobile="true"]').tooltip({
            placement: "bottom",
            trigger: "manual"
        }).unbind().on("touchstart", function() {
            $(this).tooltip("toggle")
        });
        else $('[data-toggle="tooltip"]').tooltip({
            placement: "bottom"
        })
    }

    function d(n, t) {
        $(n).attr("title", t).tooltip("fixTitle")
    }

    function k() {
        $("body").on("click touchstart", function(n) {
            $('[data-toggle="tooltip"]').each(function() {
                if (!$(this).is(n.target) && $(this).has(n.target).length === 0) {
                    var t = n.type === "click" ? !0 : $(".tooltip").has(n.target).length === 0;
                    if (t) try {
                        $(this).tooltip("hide")
                    } catch (n) {
                        return !1
                    }
                }
            })
        })
    }

    function b(n, t, i) {
        n || (n = "bottom"), t || (t = {
            selector: "body",
            padding: 4
        }), i || (i = "[data-toggle='popover']");
        $(i).popover({
            trigger: "manual",
            html: !0,
            placement: n,
            viewport: t,
            content: function() {
                var n = $(this).attr("data-bind");
                return $('[data-toggle="' + n + '"]').html()
            }
        }).unbind().on("click", function() {
            $(this).popover("toggle")
        })
    }

    function w() {
        $("body").on("click touchstart", function(n) {
            $('[data-toggle="popover"]').each(function() {
                if (!$(this).is(n.target) && $(this).has(n.target).length === 0) {
                    var t = $(".popover").has(n.target).length === 0;
                    n.type === "touchstart" && $(".popover").has(n.target).length > 0 ? t = !0 : n.type === "click" && (t = !0), t && $(this).popover("hide")
                }
            })
        })
    }

    function p() {
        $('[data-toggle="scrollbar"]').mCustomScrollbar({
            autoHideScrollbar: !1,
            autoExpandScrollbar: !1,
            scrollInertia: 0,
            alwaysShowScrollbar: 1,
            mouseWheel: {
                preventDefault: !0
            }
        })
    }

    function y() {
        var n = $('[data-toggle="pagination"]'),
            t = $('[data-toggle="pager"]');
        (n.twbsPagination || t.twbsPagination) && (n.twbsPagination({
            totalPages: 35,
            visiblePages: 7,
            first: 1,
            last: 35,
            prev: '<span class="icon-left"></span>',
            next: '<span class="icon-right"></span>'
        }), t.twbsPagination({
            isPager: !0,
            totalPages: 35,
            visiblePages: 7,
            first: '<span class="icon-first-page"></span>',
            last: '<span class="icon-last-page"></span>',
            prev: '<span class="icon-left"></span>',
            next: '<span class="icon-right"></span>'
        }))
    }

    function n(n, t, i, r) {
        if (typeof n != "undefined") {
            var u, f;
            r && (u = n.clone(), u.html(r), n.after(u), f = n.detach()), t = typeof t == "undefined" ? 200 : t, i = typeof i == "undefined" ? 3e3 : i, setTimeout(function() {
                u ? u.addClass("on") : n.addClass("on")
            }, t), setTimeout(function() {
                u ? u.removeClass("on") : n.removeClass("on"), u && f && (u.after(f), u.remove())
            }, i)
        }
    }

    function a() {
        $("#toggle-alert-loading").click(function() {
            n($(".sg-alert-section .alert-loading"), 100, 1e3)
        }), $("#toggle-alert-success").click(function() {
            n($(".sg-alert-section .alert-success"), 100, 1e3)
        }), $("#toggle-alert-warning").click(function() {
            var n = $(".sg-alert-section .alert-warning"),
                t;
            setTimeout(function() {
                n.addClass("on")
            }, 100), t = $(".alert-system-feedback #close"), t.click(function() {
                n.removeClass("on")
            })
        })
    }

    function l() {
        $("input[placeholder]").focus(function() {
            var n = $(this);
            n.val() == n.attr("placeholder") && (n.val(""), n.removeClass("rbx-placeholder"))
        }).blur(function() {
            var n = $(this);
            (n.val() == "" || n.val() == n.attr("placeholder")) && (n.addClass("rbx-placeholder"), n.val(n.attr("placeholder")))
        })
    }

    function h() {
        c.each(function() {
            var t = $(this),
                n = $(this).clone().hide().height("auto");
            n.width(t.width()), $("body").append(n), n.height() <= t.height() && (t.removeClass(i), $(this).find(".toggle-para").hide()), n.remove()
        })
    }

    function s(n, t) {
        var i = "para-overflow-toggle",
            r = $("." + i),
            u = "para-height",
            f = "para-overflow-page-loading";
        n = n ? n : 24, t = t ? t : 5, $(".toggle-para").show(), r.each(function() {
            var r = $(this),
                e = $(this).clone().hide().height("auto"),
                o;
            e.width(r.width()), $("body").append(e), o = n * t, (e.height() <= o || e.height() <= r.height()) && (r.removeClass(i).removeClass(u), r.find(".toggle-para").last().hide()), r.removeClass(f), e.remove()
        })
    }

    function o() {
        var n = "para-overflow-toggle-off",
            t = "para-height",
            i = function() {
                $(this).bind("click touchstart", function() {
                    var i = $(".para-overflow-toggle"),
                        r = $(this).data("show-label"),
                        u = $(this).data("hide-label");
                    $(this).text() === r ? (i.removeClass(t).addClass(n), $(this).text(u)) : (i.removeClass(n).addClass(t), $(this).text(r))
                })
            };
        $(".toggle-para").each(i)
    }

    function e() {
        var n = function() {
            $(this).bind("click touchstart", function() {
                $("body").find(".swap-translated-content").each(function() {
                    var n = $(this).data("translated-text"),
                        t = $(this).data("source-text");
                    $(this).text() === n ? $(this).text(t) : $(this).text(n)
                })
            })
        };
        $(".toggle-translation-button").each(n)
    }

    function f() {
        var n = "content-overflow-toggle",
            t = $("." + n),
            i = "content-height",
            r = "content-overflow-page-loading";
        $(".toggle-content").removeClass("hidden"), t.each(function() {
            var t = $(this),
                u = $(this).clone().hide().height("auto").width(t.width());
            t.parent().append(u), u.css("font-weight", t.css("font-weight"));
            var f = t.attr("id"),
                e = $(".toggle-content[data-container-id='" + f + "']"),
                o = $(".show-more-end[data-container-id='" + f + "']");
            o.removeClass("hide"), (u.height() <= t.height() || !e.is(":visible")) && (t.removeClass(n).removeClass(i), e.hide(), o.addClass("hide")), t.removeClass(r), u.remove()
        })
    }

    function u() {
        var n = "content-overflow-toggle-off",
            t = "content-height",
            i = function() {
                var i = $(this).data("show-label"),
                    r = $(this).data("hide-label");
                $(this).unbind("click"), $(this).bind("click", function() {
                    var f = $(this).data("container-id"),
                        u = $("#" + f);
                    $(this).text() === i ? (u.removeClass(t).addClass(n), $(this).text(r), u.find(".show-more-end").addClass("hide")) : (u.removeClass(n).addClass(t), $(this).text(i), u.find(".show-more-end").removeClass("hide"))
                })
            };
        $(".toggle-content").each(i)
    }

    function r(n) {
        n = n ? n : "#carousel", $(n).carousel({
            interval: 6e3,
            pause: "hover"
        })
    }

    function rt() {
        $(".btn-toggle").bind("click", function() {
            if ($(this).hasClass("disabled")) return !1;
            $(this).toggleClass("on"), $(this).trigger("toggleBtnClick", {
                id: $(this).attr("id"),
                toggleOn: $(this).hasClass("on")
            })
        })
    }

    function ut() {
        var i = 0,
            r = 0,
            u = ".menu-secondary-container",
            n = $(".submenus"),
            f = n.find("li"),
            t = n.find("li " + u),
            e = n.find("li " + u + "[hover=true]");
        t.on("mouseover touchstart", function() {
            $(this).attr("hover", "true")
        });
        t.mouseout(function() {
            $(this).attr("hover", "false")
        });
        f.on("mouseover touchstart", function() {
            var i = $(this).data("delay"),
                f;
            e.length === 0 && ($(this).attr("hover", "true"), i !== "never" && (r === 1 || i === "always") ? window.setTimeout(function() {
                if (e.length === 0) {
                    var i = n.find("li[hover=true] " + u);
                    t.hide(), i.length !== 0 && i.show()
                }
            }, 1e3) : (t.hide(), f = $(this).find(u), f.show()))
        });
        f.mouseout(function() {
            $(this).removeAttr("hover")
        }), n.mouseleave(function() {
            window.setTimeout(function() {
                t.hide()
            }, 100), i = 0, r = 0
        }), n.mousemove(function(n) {
            var t = i;
            i = n.pageX, (t === i || t === 0) && (r = 0), r = t < i ? 1 : -1
        });
        $("body").on("touchstart", function(i) {
            n.is(i.target) || n.has(i.target).length !== 0 || t.hide()
        })
    }
    var i = "para-overflow",
        c = $("." + i);
    return {
        SetupTabs: v,
        SetupDropdown: it,
        SetupAccordion: tt,
        ShowAccordionMenu: nt,
        SetupTooltip: g,
        UpdateTooltip: d,
        CloseTooltip: k,
        SetupPopover: b,
        ClosePopover: w,
        SetupScrollbar: p,
        SetupPagination: y,
        Placeholder: l,
        IsTruncated: h,
        TruncateParagraph: s,
        ToggleParagraph: o,
        ToggleTranslation: e,
        SetupCarousel: r,
        SetupToggleButton: rt,
        SetupSystemFeedback: a,
        ToggleSystemMessage: n,
        SetupVerticalMenu: ut,
        TruncateContent: f,
        ToggleContent: u
    }
}(), $(function() {
    Roblox.BootstrapWidgets.SetupTabs(), Roblox.BootstrapWidgets.SetupDropdown(), Roblox.BootstrapWidgets.SetupAccordion(), Roblox.BootstrapWidgets.SetupTooltip(), Roblox.BootstrapWidgets.CloseTooltip(), Roblox.BootstrapWidgets.SetupPopover(), Roblox.BootstrapWidgets.ClosePopover(), Roblox.BootstrapWidgets.SetupScrollbar(), Roblox.BootstrapWidgets.SetupPagination(), typeof Modernizr == "undefined" || Modernizr.input.placeholder || Roblox.BootstrapWidgets.Placeholder(), Roblox.BootstrapWidgets.IsTruncated(), Roblox.BootstrapWidgets.TruncateParagraph(), Roblox.BootstrapWidgets.ToggleParagraph(), Roblox.BootstrapWidgets.SetupCarousel(), Roblox.BootstrapWidgets.SetupToggleButton(), Roblox.BootstrapWidgets.SetupSystemFeedback(), Roblox.BootstrapWidgets.ToggleSystemMessage(), Roblox.BootstrapWidgets.SetupVerticalMenu(), Roblox.BootstrapWidgets.TruncateContent(), Roblox.BootstrapWidgets.ToggleContent(), Roblox.BootstrapWidgets.ToggleTranslation()
});

; // CookieUpgrader.js
typeof Roblox == "undefined" && (Roblox = {}), typeof Roblox.CookieUpgrader == "undefined" && (Roblox.CookieUpgrader = {}), Roblox.CookieUpgrader.domain = "", Roblox.CookieUpgrader.oneMonthInMs = 2592e6, Roblox.CookieUpgrader.upgrade = function(n, t) {
    function e(n) {
        var u = null,
            i, t, r;
        if (document.cookie && document.cookie !== "")
            for (i = document.cookie.split(";"), t = 0; t < i.length; t++)
                if (r = jQuery.trim(i[t]), r.substring(0, n.length + 1) === n + "=") {
                    u = r.substring(n.length + 1);
                    break
                }
        return u
    }
    var i, o, r, f, s, u, h;
    if (Roblox.CookieUpgrader.domain !== "" && (i = e(n), i != null)) try {
        if (o = document.cookie.length, document.cookie = n + "=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/", document.cookie = n + "=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/; domain=" + window.location.host, document.cookie.length === o) return;
        if (r = n, typeof t.newCookieName != "undefined" && (r = t.newCookieName), f = e(n), f != null) {
            typeof GoogleAnalyticsEvents != "undefined" && GoogleAnalyticsEvents.FireEvent(["CookieUpgrader", "DeletedRedundantCookie", n]), s = {
                cookieName: n,
                cookieValue: f
            }, Roblox.EventStream && Roblox.EventStream.SendEventWithTarget("CookieUpgrader", "DeletedRedundantCookie", s, Roblox.EventStream.TargetTypes.DIAGNOSTIC);
            return
        }
        u = r + "=" + i + "; ", u += "expires=" + t.expires(i).toUTCString() + "; ", u += "path=/; domain=" + Roblox.CookieUpgrader.domain, document.cookie = u, typeof GoogleAnalyticsEvents != "undefined" && GoogleAnalyticsEvents.FireEvent(["CookieUpgrader", "ConvertedCookie", n]), h = {
            cookieName: n,
            cookieValue: i,
            newCookieName: r
        }, Roblox.EventStream && Roblox.EventStream.SendEventWithTarget("CookieUpgrader", "ConvertedCookie", h, Roblox.EventStream.TargetTypes.DIAGNOSTIC)
    } catch (c) {
        typeof GoogleAnalyticsEvents != "undefined" && GoogleAnalyticsEvents.FireEvent(["CookieUpgrader", "ExceptionDuringConvertOf" + n, c.message])
    }
}, Roblox.CookieUpgrader.getExpirationFromCookieValue = function(n, t) {
    var f = new RegExp(n + "=(\\d+)/(\\d+)/(\\d+)"),
        i = t.match(f),
        u = +new Date,
        r;
    return i != null && i.length != 0 && (r = new Date(i[3], i[1] - 1, i[2]), isNaN(r.getTime()) || (u = r.getTime())), new Date(u + Roblox.CookieUpgrader.oneMonthInMs)
}, Roblox.CookieUpgrader.thirtyDaysFromNow = function() {
    return new Date(+new Date + Roblox.CookieUpgrader.oneMonthInMs)
}, Roblox.CookieUpgrader.thirtyYearsFromNow = function() {
    return new Date(+new Date + 94608e7)
}, Roblox.CookieUpgrader.fourHoursFromNow = function() {
    return new Date(+new Date + 144e5)
};

; // leancore/RobloxBaseInit.js
"modal" in $.fn && "noConflict" in $.fn.modal && ($.fn.bootstrapModal = $.fn.modal.noConflict());

; // common/robloxError.js
"use strict";
var RobloxError = function() {
    var n = function(n, t) {
        var i = t && t.name;
        switch (i) {
            case "TypeError":
                this.error = new TypeError(n);
                break;
            case "EvalError":
                this.error = new EvalError(n);
                break;
            case "RangeError":
                this.error = new RangeError(n);
                break;
            case "ReferenceError":
                this.error = new ReferenceError(n);
                break;
            default:
                this.error = new Error(n)
        }
    };
    return n.prototype.throw = function(n) {
        if (Roblox && Roblox.jsConsoleEnabled) throw this.error;
        n && typeof n == "function" && n()
    }, n
}();

; // ~/Generated/js/Roblox_TranslationResources_CommonUI_ControlsResources_en_us_standard.js
var Roblox = Roblox || {};
Roblox.Lang = Roblox.Lang || {}, Roblox.Lang["CommonUI.Controls"] = {
    "Action.Accept": "Accept",
    "Action.AcceptAll": "Accept All",
    "Action.Agree": "Agree",
    "Action.Allow": "Allow",
    "Action.Back": "Back",
    "Action.BuyRobux": "Buy Robux",
    "Action.Cancel": "Cancel",
    "Action.Close": "Close",
    "Action.Collapse": "Collapse",
    "Action.Confirm": "Confirm",
    "Action.Continue": "Continue",
    "Action.Decline": "Decline",
    "Action.DeclineAll": "Decline All",
    "Action.Delete": "Delete",
    "Action.Disable": "Disable",
    "Action.Discard": "Discard",
    "Action.Distribute": "Distribute",
    "Action.Done": "Done",
    "Action.Enable": "Enable",
    "Action.IgnoreAll": "Ignore All",
    "Action.Next": "Next",
    "Action.No": "No",
    "Action.OK": "OK",
    "Action.Open": "Open",
    "Action.Refresh": "Refresh",
    "Action.Remove": "Remove",
    "Action.Save": "Save",
    "Action.Search": "Search",
    "Action.SeeAll": "See All",
    "Action.SeeLess": "See Less",
    "Action.SeeMore": "See More",
    "Action.Show": "Show",
    "Action.Stop": "Stop",
    "Action.Submit": "Submit",
    "Action.Yes": "Yes",
    "Birthdaypicker.Label.Date": "Date",
    "Description.UnsavedChange": "You have unsaved changes. Do you want to proceed?",
    "Label.April": "April",
    "Label.AprilAbbreviated": "Apr",
    "Label.August": "August",
    "Label.AugustAbbreviated": "Aug",
    "Label.CurrentPage": "Page {currentPage}",
    "Label.Day": "Day",
    "Label.December": "December",
    "Label.DecemberAbbreviated": "Dec",
    "Label.February": "February",
    "Label.FebruaryAbbreviated": "Feb",
    "Label.January": "January",
    "Label.JanuaryAbbreviated": "Jan",
    "Label.July": "July",
    "Label.June": "June",
    "Label.March": "March",
    "Label.MarchAbbreviated": "Mar",
    "Label.May": "May",
    "Label.Month": "Month",
    "Label.Name": "Name",
    "Label.Next": "Next",
    "Label.November": "November",
    "Label.NovemberAbbreviated": "Nov",
    "Label.October": "October",
    "Label.OctoberAbbreviated": "Oct",
    "Label.Previous": "Previous",
    "Label.September": "September",
    "Label.SeptemberAbbreviated": "Sept",
    "Label.Summary": "Summary",
    "Label.UnsavedChanges": "Unsaved Changes",
    "Label.Week": "Week",
    "Label.Year": "Year"
}, Roblox.Lang.ControlsResources = Roblox.Lang["CommonUI.Controls"];

; // Thumbnails/thumbnailMetrics.js
var Roblox = Roblox || {};
Roblox.ThumbnailMetrics = function() {
    function c(n) {
        i = parseFloat(n)
    }

    function l() {
        return Math.random() <= i
    }

    function a() {
        t.forEach(function(n) {
            n()
        })
    }

    function e() {
        $.ajax({
            type: "GET",
            url: h,
            crossDomain: !0,
            xhrFields: {
                withCredentials: !0
            },
            success: function(t) {
                t && (i = t.logRatio), n = !0, a()
            },
            error: function() {
                n = !0
            }
        })
    }

    function o(i, r) {
        if (r === undefined && (r = ""), !n) return t.push(function() {
            o(i, r)
        }), !1;
        if (!l()) return !1;
        $.ajax({
            type: "POST",
            timeout: 3e3,
            url: u,
            crossDomain: !0,
            xhrFields: {
                withCredentials: !0
            },
            data: {
                duration: i,
                loadState: f.complete,
                thumbnailType: r
            }
        })
    }

    function s(i) {
        if (i === undefined && (i = ""), !n) return t.push(s(i)), !1;
        $.ajax({
            type: "POST",
            timeout: 3e3,
            url: u,
            crossDomain: !0,
            xhrFields: {
                withCredentials: !0
            },
            data: {
                loadState: f.timeout,
                thumbnailType: i
            }
        })
    }
    var r = Roblox.EnvironmentUrls && Roblox.EnvironmentUrls.metricsApi || "https://metrics.roblox.com",
        u = r + "/v1/thumbnails/load",
        h = r + "/v1/thumbnails/metadata",
        f = {
            complete: "complete",
            timeout: "timeout"
        },
        n = !1,
        t = [],
        i = 0;
    return e(), {
        logFinalThumbnailTime: o,
        setLogProbability: c,
        logThumbnailTimeout: s,
        init: e
    }
}();

; // DisplayNames/DisplayNames.js
Roblox = Roblox || {}, Roblox.DisplayNames = function() {
    "use strict";

    function n() {
        var n = $("#roblox-display-names");
        return n.length ? n.data("enabled") : !1
    }
    return {
        Enabled: n
    }
}();

; // jquery.tipsy.js
(function(n) {
    function t(n, t) {
        return typeof n == "function" ? n.call(t) : n
    }

    function r(n) {
        while (n = n.parentNode)
            if (n == document) return !0;
        return !1
    }

    function i(t, i) {
        this.$element = n(t), this.options = i, this.enabled = !0, this.fixTitle()
    }
    i.prototype = {
        show: function() {
            var s = this.getTitle(),
                r;
            if (s && this.enabled) {
                r = this.tip(), r.find(".tipsy-inner")[this.options.html ? "html" : "text"](s), r[0].className = "tipsy", r.remove().css({
                    top: 0,
                    left: 0,
                    visibility: "hidden",
                    display: "block"
                }).prependTo(document.body);
                var i = n.extend({}, this.$element.offset(), {
                        width: this.$element[0].offsetWidth,
                        height: this.$element[0].offsetHeight
                    }),
                    e = r[0].offsetWidth,
                    o = r[0].offsetHeight,
                    f = t(this.options.gravity, this.$element[0]),
                    u;
                switch (f.charAt(0)) {
                    case "n":
                        u = {
                            top: i.top + i.height + this.options.offset,
                            left: i.left + i.width / 2 - e / 2
                        };
                        break;
                    case "s":
                        u = {
                            top: i.top - o - this.options.offset,
                            left: i.left + i.width / 2 - e / 2
                        };
                        break;
                    case "e":
                        u = {
                            top: i.top + i.height / 2 - o / 2,
                            left: i.left - e - this.options.offset
                        };
                        break;
                    case "w":
                        u = {
                            top: i.top + i.height / 2 - o / 2,
                            left: i.left + i.width + this.options.offset
                        }
                }
                f.length == 2 && (u.left = f.charAt(1) == "w" ? i.left + i.width / 2 - 15 : i.left + i.width / 2 - e + 15), r.css(u).addClass("tipsy-" + f), r.find(".tipsy-arrow")[0].className = "tipsy-arrow tipsy-arrow-" + f.charAt(0), this.options.className && r.addClass(t(this.options.className, this.$element[0])), this.options.fade ? r.stop().css({
                    opacity: 0,
                    display: "block",
                    visibility: "visible"
                }).animate({
                    opacity: this.options.opacity
                }) : r.css({
                    visibility: "visible",
                    opacity: this.options.opacity
                })
            }
        },
        hide: function() {
            this.options.fade ? this.tip().stop().fadeOut(function() {
                n(this).remove()
            }) : this.tip().remove()
        },
        fixTitle: function() {
            var n = this.$element;
            (n.attr("title") || typeof n.attr("original-title") != "string") && n.attr("original-title", n.attr("title") || "").removeAttr("title")
        },
        getTitle: function() {
            var i = this.$element,
                n = this.options,
                t;
            return this.fixTitle(), n = this.options, typeof n.title == "string" ? t = i.attr(n.title == "title" ? "original-title" : n.title) : typeof n.title == "function" && (t = n.title.call(i[0])), t = ("" + t).replace(/(^\s*|\s*$)/, ""), t || n.fallback
        },
        tip: function() {
            return this.$tip || (this.$tip = n('<div class="tipsy"></div>').html('<div class="tipsy-arrow"></div><div class="tipsy-inner"></div>'), this.$tip.data("tipsy-pointee", this.$element[0])), this.$tip
        },
        validate: function() {
            this.$element[0].parentNode || (this.hide(), this.$element = null, this.options = null)
        },
        enable: function() {
            this.enabled = !0
        },
        disable: function() {
            this.enabled = !1
        },
        toggleEnabled: function() {
            this.enabled = !this.enabled
        }
    }, n.fn.tipsy = function(t) {
        function u(r) {
            var u = n.data(r, "tipsy");
            return u || (u = new i(r, n.fn.tipsy.elementOptions(r, t)), n.data(r, "tipsy", u)), u
        }

        function e() {
            var n = u(this);
            n.hoverState = "in", t.delayIn == 0 ? n.show() : (n.fixTitle(), setTimeout(function() {
                n.hoverState == "in" && n.show()
            }, t.delayIn))
        }

        function o() {
            var n = u(this);
            n.hoverState = "out", t.delayOut == 0 ? n.hide() : setTimeout(function() {
                n.hoverState == "out" && n.hide()
            }, t.delayOut)
        }
        var r;
        if (t === !0) return this.data("tipsy");
        if (typeof t == "string") return r = this.data("tipsy"), r && r[t](), this;
        if (t = n.extend({}, n.fn.tipsy.defaults, t), t.live || this.each(function() {
                u(this)
            }), t.trigger != "manual") {
            var f = t.live ? "live" : "bind",
                s = t.trigger == "hover" ? "mouseenter" : "focus",
                h = t.trigger == "hover" ? "mouseleave" : "blur";
            this[f](s, e)[f](h, o)
        }
        return this
    }, n.fn.tipsy.defaults = {
        className: null,
        delayIn: 0,
        delayOut: 0,
        fade: !1,
        fallback: "",
        gravity: "n",
        html: !1,
        live: !1,
        offset: 0,
        opacity: .8,
        title: "title",
        trigger: "hover"
    }, n.fn.tipsy.revalidate = function() {
        n(".tipsy").each(function() {
            var t = n.data(this, "tipsy-pointee");
            t && r(t) || n(this).remove()
        })
    }, n.fn.tipsy.elementOptions = function(t, i) {
        return n.metadata ? n.extend({}, i, n(t).metadata()) : i
    }, n.fn.tipsy.autoNS = function() {
        return n(this).offset().top > n(document).scrollTop() + n(window).height() / 2 ? "s" : "n"
    }, n.fn.tipsy.autoWE = function() {
        return n(this).offset().left > n(document).scrollLeft() + n(window).width() / 2 ? "e" : "w"
    }, n.fn.tipsy.autoBounds = function(t, i) {
        return function() {
            var r = {
                    ns: i[0],
                    ew: i.length > 1 ? i[1] : !1
                },
                f = n(document).scrollTop() + t,
                e = n(document).scrollLeft() + t,
                u = n(this);
            return u.offset().top < f && (r.ns = "n"), u.offset().left < e && (r.ew = "w"), n(window).width() + n(document).scrollLeft() - u.offset().left < t && (r.ew = "e"), n(window).height() + n(document).scrollTop() - u.offset().top < t && (r.ns = "s"), r.ns + (r.ew ? r.ew : "")
        }
    }
})(jQuery);

; // extensions/string.js
$.extend(String.prototype, function() {
    function n() {
        return this.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#39;")
    }
    return {
        escapeHTML: n
    }
}());

; // StringTruncator.js
function InitStringTruncator() {
    isInitialized || (fitStringSpan = document.createElement("span"), fitStringSpan.style.display = "inline-block", fitStringSpan.style.visibility = "hidden", fitStringSpan.style.height = "0px", fitStringSpan.style.padding = "0px", document.body.appendChild(fitStringSpan), isInitialized = !0)
}

function fitStringToWidth(n, t, i) {
    function o(n) {
        return n.replace("<", "&lt;").replace(">", "&gt;")
    }
    var u, r, f, e, s;
    if (isInitialized || InitStringTruncator(), i && (fitStringSpan.className = i), u = o(n), fitStringSpan.innerHTML = u, fitStringSpan.offsetWidth > t) {
        for (r = 0, e = n.length; s = e - r >> 1;) f = r + s, fitStringSpan.innerHTML = o(n.substring(0, f)) + "&hellip;", fitStringSpan.offsetWidth > t ? e = f : r = f;
        u = n.substring(0, r) + "&hellip;"
    }
    return u
}

function fitStringToWidthSafe(n, t, i) {
    var r = fitStringToWidth(n, t, i),
        u;
    return r.indexOf("&hellip;") != -1 && (u = r.lastIndexOf(" "), u != -1 && u + 10 <= r.length && (r = r.substring(0, u + 2) + "&hellip;")), r
}

function fitStringToWidthSafeText(n, t, i) {
    return fitStringToWidthSafe(n, t, i).replace("&hellip;", "...")
}
var isInitialized = !1,
    fitStringSpan = null;

; // MasterPageUI.js
$(function() {
    try {
        $(".tooltip").tipsy(), $(".tooltip-top").tipsy({
            gravity: "s"
        }), $(".tooltip-right").tipsy({
            gravity: "w"
        }), $(".tooltip-left").tipsy({
            gravity: "e"
        }), $(".tooltip-bottom").tipsy({
            gravity: "n"
        })
    } catch (n) {}
    $("a.btn-disabled-primary[disabled]").prop("disabled", !0)
}), typeof Roblox == "undefined" && (Roblox = {}), Roblox.FixedUI = function() {
    function t() {
        var n = 1024;
        return document.body && document.body.offsetWidth && (n = document.body.offsetWidth), window.innerWidth && window.innerHeight && (n = window.innerWidth), n
    }

    function i() {
        return !$(".nav-container").hasClass("no-gutter-ads")
    }

    function e() {
        return t() > u
    }
    var u = 700,
        n = navigator.userAgent.toLowerCase(),
        f = /mobile/i.test(n) || /ipad/i.test(n) || /iphone/i.test(n) || /android/i.test(n) || /playbook/i.test(n) || /blackberry/i.test(n),
        r;
    return $(function() {
        var n, t;
        i() && (n = $("#LeftGutterAdContainer iframe"), n.length > 0 && (t = $(".ad-annotations", n.contents()), t.addClass("left-gutter-ad")))
    }), r = {
        isMobile: f,
        gutterAdsEnabled: i,
        isHeaderFixed: e,
        getWindowWidth: t
    }
}();

; // jquery.simplemodal-1.3.5.js
(function(n) {
    typeof define == "function" && define.amd ? define(["jquery"], n) : n(jQuery)
})(function(n) {
    var r = [],
        e = n(document),
        u = navigator.userAgent.toLowerCase(),
        f = n(window),
        i = [],
        t = {
            ieQuirks: null,
            msie: /msie/.test(u) && !/opera/.test(u),
            opera: /opera/.test(u)
        };
    t.ie6 = t.msie && /msie 6./.test(u) && typeof window.XMLHttpRequest != "object", t.ie7 = t.msie && /msie 7.0/.test(u), t.boxModel = document.compatMode === "CSS1Compat", n.modal = function(t, i) {
        return n.modal.impl.init(t, i)
    }, n.modal.close = function() {
        n.modal.impl.close()
    }, n.modal.focus = function(t) {
        n.modal.impl.focus(t)
    }, n.modal.setContainerDimensions = function() {
        n.modal.impl.setContainerDimensions()
    }, n.modal.setPosition = function() {
        n.modal.impl.setPosition()
    }, n.modal.update = function(t, i) {
        n.modal.impl.update(t, i)
    }, n.fn.modal = function(t) {
        return n.modal.impl.init(this, t)
    }, n.modal.defaults = {
        appendTo: "body",
        focus: !0,
        opacity: 50,
        overlayId: "simplemodal-overlay",
        overlayCss: {},
        containerId: "simplemodal-container",
        containerCss: {},
        dataId: "simplemodal-data",
        dataCss: {},
        minHeight: null,
        minWidth: null,
        maxHeight: null,
        maxWidth: null,
        autoResize: !1,
        autoPosition: !0,
        zIndex: 1e3,
        close: !0,
        closeHTML: '<a class="modalCloseImg" title="Close"></a>',
        closeClass: "simplemodal-close",
        escClose: !0,
        overlayClose: !1,
        fixed: !0,
        position: null,
        persist: !1,
        modal: !0,
        onOpen: null,
        onShow: null,
        onClose: null
    }, n.modal.impl = {
        d: {},
        init: function(i, r) {
            var u = this;
            if (u.d.data) return !1;
            if (t.ieQuirks = t.msie && !(n.support.boxModel === undefined) && !n.support.boxModel, u.o = n.extend({}, n.modal.defaults, r), u.zIndex = u.o.zIndex, u.occb = !1, typeof i == "object") i = i instanceof n ? i : n(i), u.d.placeholder = !1, i.parent().parent().size() > 0 && (i.before(n("<span></span>").attr("id", "simplemodal-placeholder").css({
                display: "none"
            })), u.d.placeholder = !0, u.display = i.css("display"), u.o.persist || (u.d.orig = i.clone(!0)));
            else if (typeof i == "string" || typeof i == "number") i = n("<div></div>").html(i);
            else return alert("SimpleModal Error: Unsupported data type: " + typeof i), u;
            return u.create(i), i = null, u.open(), n.isFunction(u.o.onShow) && u.o.onShow.apply(u, [u.d]), u
        },
        create: function(u) {
            var f = this;
            f.getDimensions(), f.o.modal && t.ie6 && (f.d.iframe = n('<iframe src="javascript:false;"></iframe>').css(n.extend(f.o.iframeCss, {
                display: "none",
                opacity: 0,
                position: "fixed",
                height: i[0],
                width: i[1],
                zIndex: f.o.zIndex,
                top: 0,
                left: 0
            })).appendTo(f.o.appendTo)), f.d.overlay = n("<div></div>").attr("id", f.o.overlayId).addClass("simplemodal-overlay").css(n.extend(f.o.overlayCss, {
                display: "none",
                opacity: f.o.opacity / 100,
                height: f.o.modal ? r[0] : 0,
                width: f.o.modal ? r[1] : 0,
                position: "fixed",
                left: 0,
                top: 0,
                zIndex: f.o.zIndex + 1
            })).appendTo(f.o.appendTo), f.d.container = n("<div></div>").attr("id", f.o.containerId).addClass("simplemodal-container").css(n.extend({
                position: f.o.fixed ? "fixed" : "absolute"
            }, f.o.containerCss, {
                display: "none",
                zIndex: f.o.zIndex + 2
            })).append(f.o.close && f.o.closeHTML ? n(f.o.closeHTML).addClass(f.o.closeClass) : "").appendTo(f.o.appendTo), f.d.wrap = n("<div></div>").attr("tabIndex", -1).addClass("simplemodal-wrap").css({
                height: "100%",
                outline: 0,
                width: "100%"
            }).appendTo(f.d.container), f.d.data = u.attr("id", u.attr("id") || f.o.dataId).addClass("simplemodal-data").css(n.extend(f.o.dataCss, {
                display: "none"
            })).appendTo("body"), u = null, f.setContainerDimensions(), f.d.data.appendTo(f.d.wrap), (t.ie6 || t.ieQuirks) && f.fixIE()
        },
        bindEvents: function() {
            var u = this;
            n("." + u.o.closeClass).bind("click.simplemodal", function(n) {
                n.preventDefault(), u.close()
            }), u.o.modal && u.o.close && u.o.overlayClose && u.d.overlay.bind("click.simplemodal", function(n) {
                n.preventDefault(), u.close()
            }), e.bind("keydown.simplemodal", function(n) {
                u.o.modal && n.keyCode === 9 ? u.watchTab(n) : u.o.close && u.o.escClose && n.keyCode === 27 && (n.preventDefault(), u.close())
            }), f.bind("resize.simplemodal orientationchange.simplemodal", function() {
                u.getDimensions(), u.o.autoResize ? u.setContainerDimensions() : u.o.autoPosition && u.setPosition(), t.ie6 || t.ieQuirks ? u.fixIE() : u.o.modal && (u.d.iframe && u.d.iframe.css({
                    height: i[0],
                    width: i[1]
                }), u.d.overlay.css({
                    height: r[0],
                    width: r[1]
                }))
            })
        },
        unbindEvents: function() {
            n("." + this.o.closeClass).unbind("click.simplemodal"), e.unbind("keydown.simplemodal"), f.unbind(".simplemodal"), this.d.overlay.unbind("click.simplemodal")
        },
        fixIE: function() {
            var i = this,
                t = i.o.position;
            n.each([i.d.iframe || null, i.o.modal ? i.d.overlay : null, i.d.container.css("position") === "fixed" ? i.d.container : null], function(n, i) {
                var l, a, e, o;
                if (i) {
                    var h = "document.body.clientHeight",
                        s = "document.body.clientWidth",
                        w = "document.body.scrollHeight",
                        c = "document.body.scrollLeft",
                        v = "document.body.scrollTop",
                        y = "document.body.scrollWidth",
                        b = "document.documentElement.clientHeight",
                        p = "document.documentElement.clientWidth",
                        f = "document.documentElement.scrollLeft",
                        u = "document.documentElement.scrollTop",
                        r = i[0].style;
                    r.position = "absolute", n < 2 ? (r.removeExpression("height"), r.removeExpression("width"), r.setExpression("height", "" + w + " > " + h + " ? " + w + " : " + h + ' + "px"'), r.setExpression("width", "" + y + " > " + s + " ? " + y + " : " + s + ' + "px"')) : (t && t.constructor === Array ? (e = t[0] ? typeof t[0] == "number" ? t[0].toString() : t[0].replace(/px/, "") : i.css("top").replace(/px/, ""), l = e.indexOf("%") === -1 ? e + " + (t = " + u + " ? " + u + " : " + v + ') + "px"' : parseInt(e.replace(/%/, "")) + " * ((" + b + " || " + h + ") / 100) + (t = " + u + " ? " + u + " : " + v + ') + "px"', t[1] && (o = typeof t[1] == "number" ? t[1].toString() : t[1].replace(/px/, ""), a = o.indexOf("%") === -1 ? o + " + (t = " + f + " ? " + f + " : " + c + ') + "px"' : parseInt(o.replace(/%/, "")) + " * ((" + p + " || " + s + ") / 100) + (t = " + f + " ? " + f + " : " + c + ') + "px"')) : (l = "(" + b + " || " + h + ") / 2 - (this.offsetHeight / 2) + (t = " + u + " ? " + u + " : " + v + ') + "px"', a = "(" + p + " || " + s + ") / 2 - (this.offsetWidth / 2) + (t = " + f + " ? " + f + " : " + c + ') + "px"'), r.removeExpression("top"), r.removeExpression("left"), r.setExpression("top", l), r.setExpression("left", a))
                }
            })
        },
        focus: function(t) {
            var i = this,
                u = t && n.inArray(t, ["first", "last"]) !== -1 ? t : "first",
                r = n(":input:enabled:visible:" + u, i.d.wrap);
            setTimeout(function() {
                r.length > 0 ? r.focus() : i.d.wrap.focus()
            }, 10)
        },
        getDimensions: function() {
            var t = this,
                n = typeof window.innerHeight == "undefined" ? f.height() : window.innerHeight;
            r = [e.height(), e.width()], i = [n, f.width()]
        },
        getVal: function(n, t) {
            return n ? typeof n == "number" ? n : n === "auto" ? 0 : n.indexOf("%") > 0 ? parseInt(n.replace(/%/, "")) / 100 * (t === "h" ? i[0] : i[1]) : parseInt(n.replace(/px/, "")) : null
        },
        update: function(n, t) {
            var i = this;
            if (!i.d.data) return !1;
            i.d.origHeight = i.getVal(n, "h"), i.d.origWidth = i.getVal(t, "w"), i.d.data.hide(), n && i.d.container.css("height", n), t && i.d.container.css("width", t), i.setContainerDimensions(), i.d.data.show(), i.o.focus && i.focus(), i.unbindEvents(), i.bindEvents()
        },
        setContainerDimensions: function() {
            var n = this,
                v = t.ie6 || t.ie7,
                r = n.d.origHeight ? n.d.origHeight : t.opera ? n.d.container.height() : n.getVal(v ? n.d.container[0].currentStyle.height : n.d.container.css("height"), "h"),
                u = n.d.origWidth ? n.d.origWidth : t.opera ? n.d.container.width() : n.getVal(v ? n.d.container[0].currentStyle.width : n.d.container.css("width"), "w"),
                o = n.d.data.outerHeight(!0),
                s = n.d.data.outerWidth(!0),
                f;
            n.d.origHeight = n.d.origHeight || r, n.d.origWidth = n.d.origWidth || u;
            var l = n.o.maxHeight ? n.getVal(n.o.maxHeight, "h") : null,
                a = n.o.maxWidth ? n.getVal(n.o.maxWidth, "w") : null,
                h = l && l < i[0] ? l : i[0],
                c = a && a < i[1] ? a : i[1],
                e = n.o.minHeight ? n.getVal(n.o.minHeight, "h") : "auto";
            r = r ? n.o.autoResize && r > h ? h : r < e ? e : r : o ? o > h ? h : n.o.minHeight && e !== "auto" && o < e ? e : o : e, f = n.o.minWidth ? n.getVal(n.o.minWidth, "w") : "auto", u = u ? n.o.autoResize && u > c ? c : u < f ? f : u : s ? s > c ? c : n.o.minWidth && f !== "auto" && s < f ? f : s : f, n.d.container.css({
                height: r,
                width: u
            }), n.d.wrap.css({
                overflow: o > r || s > u ? "auto" : "visible"
            }), n.o.autoPosition && n.setPosition()
        },
        setPosition: function() {
            var n = this,
                t, r, u = i[0] / 2 - n.d.container.outerHeight(!0) / 2,
                e = i[1] / 2 - n.d.container.outerWidth(!0) / 2,
                o = n.d.container.css("position") !== "fixed" ? f.scrollTop() : 0;
            n.o.position && Object.prototype.toString.call(n.o.position) === "[object Array]" ? (t = o + (n.o.position[0] || u), r = n.o.position[1] || e) : (t = o + u, r = e), n.d.container.css({
                left: r,
                top: t
            })
        },
        watchTab: function(t) {
            var i = this,
                r;
            n(t.target).parents(".simplemodal-container").length > 0 ? (i.inputs = n(":input:enabled:visible:first, :input:enabled:visible:last", i.d.data[0]), (!t.shiftKey && t.target === i.inputs[i.inputs.length - 1] || t.shiftKey && t.target === i.inputs[0] || i.inputs.length === 0) && (t.preventDefault(), r = t.shiftKey ? "last" : "first", i.focus(r))) : (t.preventDefault(), i.focus())
        },
        open: function() {
            var t = this;
            t.d.iframe && t.d.iframe.show(), n.isFunction(t.o.onOpen) ? t.o.onOpen.apply(t, [t.d]) : (t.d.overlay.show(), t.d.container.show(), t.d.data.show()), t.o.focus && t.focus(), t.bindEvents()
        },
        close: function() {
            var t = this,
                i;
            if (!t.d.data) return !1;
            t.unbindEvents(), n.isFunction(t.o.onClose) && !t.occb ? (t.occb = !0, t.o.onClose.apply(t, [t.d])) : (t.d.placeholder ? (i = n("#simplemodal-placeholder"), t.o.persist ? i.replaceWith(t.d.data.removeClass("simplemodal-data").css("display", t.display)) : (t.d.data.hide().remove(), i.replaceWith(t.d.orig))) : t.d.data.hide().remove(), t.d.container.hide().remove(), t.d.overlay.hide(), t.d.iframe && t.d.iframe.hide().remove(), t.d.overlay.remove(), t.d = {})
        }
    }
});

; // extensions/Thumbnails.js
$(function() {
    function i(n) {
        var t = n.el.is("img") ? n.el : n.el.find("img");
        return t.length === 1 ? t : n.el.find("img.original-image")
    }

    function s(n, t) {
        var r = i(t),
            u;
        u = n.data != null && n.data[0].imageUrl != null ? n.data[0].imageUrl : n.Url, !r.attr("src") && r.hasClass("lazy") ? r.attr("data-original", u) : r.attr("src", u), t.el.removeAttr("data-retry-url"), t.el.trigger("thumbnailLoaded")
    }

    function h(n) {
        var i = +new Date - n.start;
        Roblox.ThumbnailMetrics && Roblox.ThumbnailMetrics.logFinalThumbnailTime(i), t(["ThumbnailGenTime", "2D", "Success", i]), t(["ThumbnailGenRetries", "2D", "Success", n.retryCount])
    }

    function c(n) {
        var i = +new Date - n.start;
        Roblox.ThumbnailMetrics && Roblox.ThumbnailMetrics.logThumbnailTimeout(), t(["ThumbnailGenRetries", "2D", "Gave Up", n.retryCount]), t(["ThumbnailGenTime", "2D", "Gave Up", i])
    }

    function l(n, t) {
        n.Final || n.data != null && n.data[0].state != null && n.data[0].state === "Completed" ? (t.realRegeneration && h(t), s(n, t)) : (t.realRegeneration = !0, t.retryCount++, t.retryCount < f ? setTimeout(function() {
            t.retryFunction(t)
        }, u) : c(t))
    }

    function r(n) {
        var t = n.el.data("retry-url");
        t && $.ajax({
            url: t,
            dataType: "json",
            cache: !1,
            crossDomain: !0,
            xhrFields: {
                withCredentials: !0
            },
            success: function(t) {
                l(t, n)
            }
        })
    }
    var n = $("#image-retry-data"),
        u = n ? n.data("image-retry-timer") : 1500,
        f = n ? n.data("image-retry-max-times") : 10,
        e = n ? n.data("ga-logging-percent") : 0,
        o = window.GoogleAnalyticsEvents && GoogleAnalyticsEvents.FireEvent || function() {},
        t = function(n) {
            Math.random() <= e / 100 && o(n)
        };
    $.fn.loadRobloxThumbnails = function() {
        return this.each(function() {
            var n = {
                    retryCount: 0,
                    realRegeneration: !1,
                    start: +new Date,
                    el: $(this),
                    retryFunction: r
                },
                t = i(n);
            t.one("load", function() {
                var t = +new Date - n.start;
                Roblox.ThumbnailMetrics && Roblox.ThumbnailMetrics.logFinalThumbnailTime(t, "2dThumbnailOnLoad")
            });
            setTimeout(function() {
                r(n)
            }, 0)
        })
    }
});

; // CookieUpgrader.js
typeof Roblox == "undefined" && (Roblox = {}), typeof Roblox.CookieUpgrader == "undefined" && (Roblox.CookieUpgrader = {}), Roblox.CookieUpgrader.domain = "", Roblox.CookieUpgrader.oneMonthInMs = 2592e6, Roblox.CookieUpgrader.upgrade = function(n, t) {
    function e(n) {
        var u = null,
            i, t, r;
        if (document.cookie && document.cookie !== "")
            for (i = document.cookie.split(";"), t = 0; t < i.length; t++)
                if (r = jQuery.trim(i[t]), r.substring(0, n.length + 1) === n + "=") {
                    u = r.substring(n.length + 1);
                    break
                }
        return u
    }
    var i, o, r, f, s, u, h;
    if (Roblox.CookieUpgrader.domain !== "" && (i = e(n), i != null)) try {
        if (o = document.cookie.length, document.cookie = n + "=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/", document.cookie = n + "=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/; domain=" + window.location.host, document.cookie.length === o) return;
        if (r = n, typeof t.newCookieName != "undefined" && (r = t.newCookieName), f = e(n), f != null) {
            typeof GoogleAnalyticsEvents != "undefined" && GoogleAnalyticsEvents.FireEvent(["CookieUpgrader", "DeletedRedundantCookie", n]), s = {
                cookieName: n,
                cookieValue: f
            }, Roblox.EventStream && Roblox.EventStream.SendEventWithTarget("CookieUpgrader", "DeletedRedundantCookie", s, Roblox.EventStream.TargetTypes.DIAGNOSTIC);
            return
        }
        u = r + "=" + i + "; ", u += "expires=" + t.expires(i).toUTCString() + "; ", u += "path=/; domain=" + Roblox.CookieUpgrader.domain, document.cookie = u, typeof GoogleAnalyticsEvents != "undefined" && GoogleAnalyticsEvents.FireEvent(["CookieUpgrader", "ConvertedCookie", n]), h = {
            cookieName: n,
            cookieValue: i,
            newCookieName: r
        }, Roblox.EventStream && Roblox.EventStream.SendEventWithTarget("CookieUpgrader", "ConvertedCookie", h, Roblox.EventStream.TargetTypes.DIAGNOSTIC)
    } catch (c) {
        typeof GoogleAnalyticsEvents != "undefined" && GoogleAnalyticsEvents.FireEvent(["CookieUpgrader", "ExceptionDuringConvertOf" + n, c.message])
    }
}, Roblox.CookieUpgrader.getExpirationFromCookieValue = function(n, t) {
    var f = new RegExp(n + "=(\\d+)/(\\d+)/(\\d+)"),
        i = t.match(f),
        u = +new Date,
        r;
    return i != null && i.length != 0 && (r = new Date(i[3], i[1] - 1, i[2]), isNaN(r.getTime()) || (u = r.getTime())), new Date(u + Roblox.CookieUpgrader.oneMonthInMs)
}, Roblox.CookieUpgrader.thirtyDaysFromNow = function() {
    return new Date(+new Date + Roblox.CookieUpgrader.oneMonthInMs)
}, Roblox.CookieUpgrader.thirtyYearsFromNow = function() {
    return new Date(+new Date + 94608e7)
}, Roblox.CookieUpgrader.fourHoursFromNow = function() {
    return new Date(+new Date + 144e5)
};

; // utilities/stringFormat.js
var Roblox = Roblox || {};
Roblox.StringFormat = function() {
    String.prototype.format = function() {
        var n = arguments;
        return this.replace(/\{(\d+)\}/g, function(t, i) {
            return n[i] || ""
        })
    }
}();

; // Tracking/SignupTrackingScript.js
var Roblox = Roblox || {};
Roblox.SignupTrackingScript = function() {
    function n(n, t) {
        RobloxEventManager.triggerEvent("rbx_evt_signup", {
            age: n,
            gender: t
        })
    }
    return {
        trackingScript: n
    }
}();

; // Tracking/AsyncGoogleOnScript.js
var Roblox = Roblox || {};
Roblox.AsyncGoogleOnScript = function() {
    function n(n, t) {
        GoogleAnalyticsEvents && GoogleAnalyticsEvents.FireEvent(["Signup", "Signup - Roblox", n, t])
    }
    return {
        googleGoalFire: n
    }
}();

; //Bundle detector
Roblox && Roblox.BundleDetector && Roblox.BundleDetector.bundleDetected('leanbase');