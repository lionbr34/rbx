! function() {
    "use strict";

    function e() {
        return -1 !== (null === window || void 0 === window ? void 0 : window.navigator.userAgent.toUpperCase().indexOf("TRIDENT/")) || -1 !== (null === window || void 0 === window ? void 0 : window.navigator.userAgent.toUpperCase().indexOf("MSIE"))
    }

    function i() {
        var e = document.querySelector('meta[name="user-data"]');
        return null !== (e = null == e ? void 0 : e.dataset) && void 0 !== e ? e : null
    }
    var n = {
            isIos13Ipad: !!window.navigator && "MacIntel" === navigator.platform && 1 < navigator.maxTouchPoints,
            isMac: -1 < (null === window || void 0 === window ? void 0 : window.navigator.platform.toUpperCase().indexOf("MAC")),
            isWindows: -1 < (null === window || void 0 === window ? void 0 : window.navigator.platform.toUpperCase().indexOf("WIN")),
            isIE: e(),
            isIE11: e() && !(null === window || void 0 === window || !window.navigator.userAgent.match(/rv[: ]\d+./))
        },
        o = {
            android: "android",
            ios: "ios",
            xbox: "xbox",
            uwp: "uwp",
            amazon: "amazon",
            win32: "win32",
            universalapp: " universalApp",
            unknown: "unknown"
        },
        t = {
            computer: "computer",
            tablet: "tablet",
            phone: "phone",
            console: "console"
        },
        d = {
            getDeviceMeta: function() {
                var e = document.querySelector('meta[name="device-meta"]');
                if (null === e) return console.debug("Error loading device information from meta tag - please check if meta tag is present"), null;
                e = e.dataset || {};
                return {
                    deviceType: e.deviceType && t[e.deviceType] || "",
                    appType: e.appType && o[e.appType] || "",
                    isInApp: "true" === e.isInApp,
                    isDesktop: "true" === e.isDesktop,
                    isPhone: "true" === e.isPhone,
                    isTablet: "true" === e.isTablet,
                    isConsole: "true" === e.isConsole,
                    isAndroidApp: "true" === e.isAndroidApp,
                    isIosApp: "true" === e.isIosApp,
                    isUWPApp: "true" === e.isUwpApp,
                    isXboxApp: "true" === e.isXboxApp,
                    isAmazonApp: "true" === e.isAmazonApp,
                    isWin32App: "true" === e.isWin32App,
                    isStudio: "true" === e.isStudio,
                    isIosDevice: "true" === e.isIosDevice,
                    isAndroidDevice: "true" === e.isAndroidDevice,
                    isUniversalApp: "true" === e.isUniversalApp
                }
            },
            AppTypes: o,
            DeviceTypes: t
        },
        s = {
            isAuthenticated: !!i(),
            isUnder13: "true" === (null === (s = i()) || void 0 === s ? void 0 : s.isunder13),
            name: null !== (r = null === (r = i()) || void 0 === r ? void 0 : r.name) && void 0 !== r ? r : null,
            id: null !== (s = i()) && void 0 !== s && s.userid ? Number.parseInt(null === (s = i()) || void 0 === s ? void 0 : s.userid, 10) : -1,
            isPremiumUser: "true" === (null === (r = i()) || void 0 === r ? void 0 : r.ispremiumuser),
            created: null !== (s = null === (s = i()) || void 0 === s ? void 0 : s.created) && void 0 !== s ? s : null,
            displayName: null !== (r = null === (r = i()) || void 0 === r ? void 0 : r.displayname) && void 0 !== r ? r : null
        },
        r = {
            isTestSite: "true" === (null === (r = null !== (r = null == (r = document.querySelector('meta[name="environment-meta"]')) ? void 0 : r.dataset) && void 0 !== r ? r : null) || void 0 === r ? void 0 : r.isTestingSite)
        };
    window.Roblox.JsClientDeviceIdentifier = n, window.HeaderScripts = {
        jsClientDeviceIdentifier: n,
        authenticatedUser: s,
        environmentSites: r,
        deviceMeta: d
    }
}();
//# sourceMappingURL=https://js.rbxcdn.com/b10c78c6453f5a8d38b0-headerScripts.js.map

/* Bundle detector */
window.Roblox && window.Roblox.BundleDetector && window.Roblox.BundleDetector.bundleDetected("HeaderScripts");