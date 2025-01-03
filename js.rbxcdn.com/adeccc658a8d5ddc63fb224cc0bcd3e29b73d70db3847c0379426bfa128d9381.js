! function() {
    var n = {
            279: function(t, e, n) {
                t.exports = n(8)
            },
            8: function(t) {
                window,
                t.exports = function(n) {
                    var r = {};

                    function o(t) {
                        if (r[t]) return r[t].exports;
                        var e = r[t] = {
                            i: t,
                            l: !1,
                            exports: {}
                        };
                        return n[t].call(e.exports, e, e.exports, o), e.l = !0, e.exports
                    }
                    return o.m = n, o.c = r, o.d = function(t, e, n) {
                        o.o(t, e) || Object.defineProperty(t, e, {
                            enumerable: !0,
                            get: n
                        })
                    }, o.r = function(t) {
                        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
                            value: "Module"
                        }), Object.defineProperty(t, "__esModule", {
                            value: !0
                        })
                    }, o.t = function(e, t) {
                        if (1 & t && (e = o(e)), 8 & t) return e;
                        if (4 & t && "object" == typeof e && e && e.__esModule) return e;
                        var n = Object.create(null);
                        if (o.r(n), Object.defineProperty(n, "default", {
                                enumerable: !0,
                                value: e
                            }), 2 & t && "string" != typeof e)
                            for (var r in e) o.d(n, r, function(t) {
                                return e[t]
                            }.bind(null, r));
                        return n
                    }, o.n = function(t) {
                        var e = t && t.__esModule ? function() {
                            return t.default
                        } : function() {
                            return t
                        };
                        return o.d(e, "a", e), e
                    }, o.o = function(t, e) {
                        return Object.prototype.hasOwnProperty.call(t, e)
                    }, o.p = "", o(o.s = 19)
                }([function(t, e, n) {
                    "use strict";
                    Object.defineProperty(e, "__esModule", {
                        value: !0
                    }), e.default = function(t, e) {
                        if (t)
                            for (var n in t) hasOwnProperty.call(t, n) && e(t[n], n)
                    }, t.exports = e.default
                }, function(t, e, n) {
                    "use strict";
                    t.exports = {
                        Platform: n(29),
                        ThriftTransport: n(34),
                        thrift: n(35),
                        crouton_thrift: n(36)
                    }
                }, function(t, n, e) {
                    "use strict";

                    function r(t) {
                        for (var e in t) n.hasOwnProperty(e) || (n[e] = t[e])
                    }
                    Object.defineProperty(n, "__esModule", {
                        value: !0
                    });
                    var o = e(22);
                    n.BinaryCarrier = o.default;
                    var i = e(23);
                    n.Tags = i;
                    o = e(8), i = e(13);
                    n.Reference = i.default;
                    i = e(4);
                    n.Span = i.default;
                    i = e(10);
                    n.SpanContext = i.default;
                    i = e(9);
                    n.Tracer = i.Tracer;
                    i = e(24);
                    n.MockTracer = i.MockTracer, r(e(27)), r(e(12)), r(e(11)), o.initialize()
                }, function(t, e, n) {
                    "use strict";
                    Object.defineProperty(e, "__esModule", {
                        value: !0
                    }), e.toString = function(t) {
                        return "" + t
                    }, e.toNumber = function(t) {
                        return Number(t)
                    }, e.toBoolean = function(t) {
                        return !!t
                    }
                }, function(t, e, n) {
                    "use strict";
                    Object.defineProperty(e, "__esModule", {
                        value: !0
                    });
                    var r = n(8),
                        n = (o.prototype.context = function() {
                            return this._context()
                        }, o.prototype.tracer = function() {
                            return this._tracer()
                        }, o.prototype.setOperationName = function(t) {
                            return this._setOperationName(t), this
                        }, o.prototype.setBaggageItem = function(t, e) {
                            return this._setBaggageItem(t, e), this
                        }, o.prototype.getBaggageItem = function(t) {
                            return this._getBaggageItem(t)
                        }, o.prototype.setTag = function(t, e) {
                            var n;
                            return this._addTags(((n = {})[t] = e, n)), this
                        }, o.prototype.addTags = function(t) {
                            return this._addTags(t), this
                        }, o.prototype.log = function(t, e) {
                            return this._log(t, e), this
                        }, o.prototype.logEvent = function(t, e) {
                            return this._log({
                                event: t,
                                payload: e
                            })
                        }, o.prototype.finish = function(t) {
                            this._finish(t)
                        }, o.prototype._context = function() {
                            return r.spanContext
                        }, o.prototype._tracer = function() {
                            return r.tracer
                        }, o.prototype._setOperationName = function(t) {}, o.prototype._setBaggageItem = function(t, e) {}, o.prototype._getBaggageItem = function(t) {}, o.prototype._addTags = function(t) {}, o.prototype._log = function(t, e) {}, o.prototype._finish = function(t) {}, o);

                    function o() {}
                    e.Span = n, e.default = n
                }, function(t, e, n) {
                    "use strict";
                    Object.defineProperty(e, "__esModule", {
                        value: !0
                    });
                    var r = function(t, e, n) {
                            return e && i(t.prototype, e), n && i(t, n), t
                        },
                        o = (n = n(0)) && n.__esModule ? n : {
                            default: n
                        };

                    function i(t, e) {
                        for (var n = 0; n < e.length; n++) {
                            var r = e[n];
                            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
                        }
                    }
                    r(s, [{
                        key: "setBaggageItem",
                        value: function(t, e) {
                            this._baggage[t] = e
                        }
                    }, {
                        key: "getBaggageItem",
                        value: function(t) {
                            return this._baggage[t]
                        }
                    }, {
                        key: "forEachBaggageItem",
                        value: function(n) {
                            (0, o.default)(this._baggage, function(t, e) {
                                n(e, t)
                            })
                        }
                    }, {
                        key: "traceGUID",
                        value: function() {
                            return "" + this._upperTraceGUID + this._traceGUID
                        }
                    }]), r = s;

                    function s(t, e, n) {
                        ! function(t) {
                            if (!(t instanceof s)) throw new TypeError("Cannot call a class as a function")
                        }(this), this._baggage = {}, this._guid = t, !(this._sampled = !0) === n && (this._sampled = n), this._upperTraceGUID = "0000000000000000", this._traceGUID = e, this._traceGUID && 32 === this._traceGUID.length && (this._upperTraceGUID = e.substr(0, 16), this._traceGUID = e.substr(16))
                    }
                    e.default = r, t.exports = e.default
                }, function(t, e, n) {
                    "use strict";
                    Object.defineProperty(e, "__esModule", {
                        value: !0
                    });
                    e.LOG_INFO = 0, e.LOG_WARN = 1, e.LOG_ERROR = 2, e.LOG_FATAL = 3;
                    e.LOG_LEVEL_TO_STRING = {
                        LOG_INFO: "I",
                        LOG_WARN: "W",
                        LOG_ERROR: "E",
                        LOG_FATAL: "F"
                    }, e.LOG_STRING_TO_LEVEL = {
                        I: 0,
                        W: 1,
                        E: 2,
                        F: 3
                    }, e.CLOCK_STATE_REFRESH_INTERVAL_MS = 350, e.LIGHTSTEP_APP_URL_PREFIX = "https://app.lightstep.com", e.JOIN_ID_PREFIX = "join:", e.LS_META_EVENT_KEY = "lightstep.meta_event", e.LS_META_PROPAGATION_KEY = "lightstep.propagation_format", e.LS_META_TRACE_KEY = "lightstep.trace_id", e.LS_META_SPAN_KEY = "lightstep.span_id", e.LS_META_TRACER_GUID_KEY = "lightstep.tracer_guid", e.LS_META_EXTRACT = "lightstep.extract_span", e.LS_META_INJECT = "lightstep.inject_span", e.LS_META_SP_START = "lightstep.span_start", e.LS_META_SP_FINISH = "lightstep.span_finish", e.LS_META_TRACER_CREATE = "lightstep.tracer_create", e.FORMAT_B3 = "format.b3"
                }, function(t, e, n) {
                    "use strict";
                    Object.defineProperty(e, "__esModule", {
                        value: !0
                    });
                    var r = function(t, e, n) {
                            return e && o(t.prototype, e), n && o(t, n), t
                        },
                        u = i(n(0)),
                        c = i(n(5));

                    function o(t, e) {
                        for (var n = 0; n < e.length; n++) {
                            var r = e[n];
                            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
                        }
                    }

                    function i(t) {
                        return t && t.__esModule ? t : {
                            default: t
                        }
                    }
                    var s = "ot-tracer-",
                        a = "ot-baggage-",
                        r = (r(l, [{
                            key: "inject",
                            value: function(t, n) {
                                var r = this;
                                if (n) {
                                    if ("object" == typeof n) return n[this._carrierPrefix + "spanid"] = t._guid, n[this._carrierPrefix + "traceid"] = t._traceGUID, n[this._carrierPrefix + "sampled"] = "true", t.forEachBaggageItem(function(t, e) {
                                        n["" + r._baggagePrefix + t] = e
                                    }), n;
                                    this._tracer._error("Unexpected '" + typeof n + "' FORMAT_TEXT_MAP carrier in call to inject")
                                } else this._tracer._error("Unexpected null carrier in call to inject")
                            }
                        }, {
                            key: "extract",
                            value: function(t) {
                                var n = this,
                                    r = 0,
                                    o = null,
                                    i = null,
                                    s = !0;
                                if ((0, u.default)(t, function(t, e) {
                                        if ((e = e.toLowerCase()).substr(0, n._carrierPrefix.length) === n._carrierPrefix) switch (e.substr(n._carrierPrefix.length)) {
                                            case "traceid":
                                                r++, i = t;
                                                break;
                                            case "spanid":
                                                r++, o = t;
                                                break;
                                            case "sampled":
                                                switch (t) {
                                                    case 0:
                                                    case "0":
                                                    case !1:
                                                    case "false":
                                                        s = !1;
                                                        break;
                                                    default:
                                                        s = !0
                                                }
                                                break;
                                            default:
                                                n._tracer._error("Unrecognized carrier key '" + e + "' with recognized prefix. Ignoring.")
                                        }
                                    }), 0 === r) return null;
                                if (r < 2) return this._tracer._error("Only found a partial SpanContext: " + t), null;
                                var a = new c.default(o, i, s);
                                return (0, u.default)(t, function(t, e) {
                                    (e = e.toLowerCase()).substr(0, n._baggagePrefix.length) === n._baggagePrefix && (e = e.substr(n._baggagePrefix.length), a.setBaggageItem(e, t))
                                }), a
                            }
                        }]), l);

                    function l(t) {
                        ! function(t) {
                            if (!(t instanceof l)) throw new TypeError("Cannot call a class as a function")
                        }(this), this._tracer = t, this._carrierPrefix = s, this._baggagePrefix = a
                    }
                    e.default = r, t.exports = e.default
                }, function(t, e, n) {
                    "use strict";
                    Object.defineProperty(e, "__esModule", {
                        value: !0
                    });
                    var r = n(4),
                        o = n(10),
                        i = n(9);
                    e.tracer = null, e.spanContext = null, e.span = null, e.initialize = function() {
                        e.tracer = new i.default, e.span = new r.default, e.spanContext = new o.default
                    }
                }, function(t, e, n) {
                    "use strict";
                    Object.defineProperty(e, "__esModule", {
                        value: !0
                    });
                    var r = n(11),
                        o = n(8),
                        i = n(4),
                        n = (s.prototype.startSpan = function(t, e) {
                            var n;
                            return void 0 === e && (e = {}), e.childOf && (n = r.childOf(e.childOf), e.references ? e.references.push(n) : e.references = [n], delete e.childOf), this._startSpan(t, e)
                        }, s.prototype.inject = function(t, e, n) {
                            return t instanceof i.default && (t = t.context()), this._inject(t, e, n)
                        }, s.prototype.extract = function(t, e) {
                            return this._extract(t, e)
                        }, s.prototype._startSpan = function(t, e) {
                            return o.span
                        }, s.prototype._inject = function(t, e, n) {}, s.prototype._extract = function(t, e) {
                            return o.spanContext
                        }, s);

                    function s() {}
                    e.Tracer = n, e.default = n
                }, function(t, e, n) {
                    "use strict";
                    Object.defineProperty(e, "__esModule", {
                        value: !0
                    });
                    var r = (o.prototype.toTraceId = function() {
                        return ""
                    }, o.prototype.toSpanId = function() {
                        return ""
                    }, o);

                    function o() {}
                    e.SpanContext = r, e.default = r
                }, function(t, e, n) {
                    "use strict";
                    Object.defineProperty(e, "__esModule", {
                        value: !0
                    });
                    var r = n(12),
                        o = n(13),
                        i = n(4);
                    e.childOf = function(t) {
                        return t instanceof i.default && (t = t.context()), new o.default(r.REFERENCE_CHILD_OF, t)
                    }, e.followsFrom = function(t) {
                        return t instanceof i.default && (t = t.context()), new o.default(r.REFERENCE_FOLLOWS_FROM, t)
                    }
                }, function(t, e, n) {
                    "use strict";
                    Object.defineProperty(e, "__esModule", {
                        value: !0
                    }), e.FORMAT_BINARY = "binary", e.FORMAT_TEXT_MAP = "text_map", e.FORMAT_HTTP_HEADERS = "http_headers", e.REFERENCE_CHILD_OF = "child_of", e.REFERENCE_FOLLOWS_FROM = "follows_from"
                }, function(t, e, n) {
                    "use strict";
                    Object.defineProperty(e, "__esModule", {
                        value: !0
                    });
                    var r = n(4),
                        n = (o.prototype.type = function() {
                            return this._type
                        }, o.prototype.referencedContext = function() {
                            return this._referencedContext
                        }, o);

                    function o(t, e) {
                        this._type = t, this._referencedContext = e instanceof r.default ? e.context() : e
                    }
                    e.default = n
                }, function(t, e, n) {
                    "use strict";
                    var r, o = this && this.__extends || (r = function(t, e) {
                        return (r = Object.setPrototypeOf || {
                                __proto__: []
                            }
                            instanceof Array && function(t, e) {
                                t.__proto__ = e
                            } || function(t, e) {
                                for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n])
                            })(t, e)
                    }, function(t, e) {
                        function n() {
                            this.constructor = t
                        }
                        r(t, e), t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n)
                    });
                    Object.defineProperty(e, "__esModule", {
                        value: !0
                    });
                    var i, o = (i = n(2).SpanContext, o(s, i), s.prototype.span = function() {
                        return this._span
                    }, s);

                    function s(t) {
                        var e = i.call(this) || this;
                        return e._span = t, e
                    }
                    e.MockContext = o, e.default = o
                }, function(t, e, n) {
                    "use strict";
                    var r, o = this && this.__extends || (r = function(t, e) {
                        return (r = Object.setPrototypeOf || {
                                __proto__: []
                            }
                            instanceof Array && function(t, e) {
                                t.__proto__ = e
                            } || function(t, e) {
                                for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n])
                            })(t, e)
                    }, function(t, e) {
                        function n() {
                            this.constructor = t
                        }
                        r(t, e), t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n)
                    });
                    Object.defineProperty(e, "__esModule", {
                        value: !0
                    });
                    var i, s = n(2),
                        a = n(14),
                        o = (i = s.Span, o(u, i), u.prototype._context = function() {
                            return new a.default(this)
                        }, u.prototype._setOperationName = function(t) {
                            this._operationName = t
                        }, u.prototype._addTags = function(t) {
                            for (var e = 0, n = Object.keys(t); e < n.length; e++) {
                                var r = n[e];
                                this._tags[r] = t[r]
                            }
                        }, u.prototype._log = function(t, e) {
                            this._logs.push({
                                fields: t,
                                timestamp: e
                            })
                        }, u.prototype._finish = function(t) {
                            this._finishMs = t || Date.now()
                        }, u.prototype.uuid = function() {
                            return this._uuid
                        }, u.prototype.operationName = function() {
                            return this._operationName
                        }, u.prototype.durationMs = function() {
                            return this._finishMs - this._startMs
                        }, u.prototype.tags = function() {
                            return this._tags
                        }, u.prototype.tracer = function() {
                            return this._mockTracer
                        }, u.prototype._generateUUID = function() {
                            return "" + ("00000000" + Math.abs(4294967295 * Math.random() | 0).toString(16)).substr(-8) + ("00000000" + Math.abs(4294967295 * Math.random() | 0).toString(16)).substr(-8)
                        }, u.prototype.addReference = function(t) {}, u.prototype.debug = function() {
                            var t = {
                                uuid: this._uuid,
                                operation: this._operationName,
                                millis: [this._finishMs - this._startMs, this._startMs, this._finishMs]
                            };
                            return Object.keys(this._tags).length && (t.tags = this._tags), t
                        }, u);

                    function u(t) {
                        var e = i.call(this) || this;
                        return e._mockTracer = t, e._uuid = e._generateUUID(), e._startMs = Date.now(), e._finishMs = 0, e._operationName = "", e._tags = {}, e._logs = [], e
                    }
                    e.MockSpan = o, e.default = o
                }, function(t, e, n) {
                    "use strict";

                    function r() {
                        return "undefined" != typeof document
                    }
                    t.exports = {
                        cookie: r() ? function(t, e, n, r, o, i) {
                            if (1 < arguments.length) {
                                i = t + "=" + encodeURIComponent(e) + (n ? "; expires=" + new Date(+new Date + 1e3 * n).toUTCString() : "") + (r ? "; path=" + r : "") + (o ? "; domain=" + o : "") + (i ? "; secure" : "");
                                return document.cookie = i
                            }
                            return decodeURIComponent((("; " + document.cookie).split("; " + t + "=")[1] || "").split(";")[0])
                        } : function() {
                            return null
                        },
                        isBrowser: r
                    }
                }, function(t, e, n) {
                    "use strict";
                    var r, o;
                    r = {}, void 0 === (o = {}) && (o = {}), o.KeyValue = function(t) {
                        if (this.Key = null, this.Value = null, t) {
                            if (void 0 === t.Key) throw new r.TProtocolException(r.TProtocolExceptionType.UNKNOWN, "Required field Key is unset!");
                            if (this.Key = t.Key, void 0 === t.Value) throw new r.TProtocolException(r.TProtocolExceptionType.UNKNOWN, "Required field Value is unset!");
                            this.Value = t.Value
                        }
                    }, o.KeyValue.prototype = {}, o.KeyValue.prototype.read = !1, o.KeyValue.prototype.write = !1, o.NamedCounter = function(t) {
                        if (this.Name = null, this.Value = null, t) {
                            if (void 0 === t.Name) throw new r.TProtocolException(r.TProtocolExceptionType.UNKNOWN, "Required field Name is unset!");
                            if (this.Name = t.Name, void 0 === t.Value) throw new r.TProtocolException(r.TProtocolExceptionType.UNKNOWN, "Required field Value is unset!");
                            this.Value = t.Value
                        }
                    }, o.NamedCounter.prototype = {}, o.NamedCounter.prototype.read = !1, o.NamedCounter.prototype.write = !1, o.Runtime = function(t) {
                        this.guid = null, this.start_micros = null, this.group_name = null, this.attrs = null, t && (void 0 !== t.guid && (this.guid = t.guid), void 0 !== t.start_micros && (this.start_micros = t.start_micros), void 0 !== t.group_name && (this.group_name = t.group_name), void 0 !== t.attrs && (this.attrs = t.attrs))
                    }, o.Runtime.prototype = {}, o.Runtime.prototype.read = !1, o.Runtime.prototype.write = !1, o.LogRecord = function(t) {
                        this.timestamp_micros = null, this.fields = null, this.runtime_guid = null, this.span_guid = null, this.stable_name = null, this.message = null, this.level = null, this.thread_id = null, this.filename = null, this.line_number = null, this.stack_frames = null, this.payload_json = null, this.error_flag = null, t && (void 0 !== t.timestamp_micros && (this.timestamp_micros = t.timestamp_micros), void 0 !== t.fields && (this.fields = t.fields), void 0 !== t.runtime_guid && (this.runtime_guid = t.runtime_guid), void 0 !== t.span_guid && (this.span_guid = t.span_guid), void 0 !== t.stable_name && (this.stable_name = t.stable_name), void 0 !== t.message && (this.message = t.message), void 0 !== t.level && (this.level = t.level), void 0 !== t.thread_id && (this.thread_id = t.thread_id), void 0 !== t.filename && (this.filename = t.filename), void 0 !== t.line_number && (this.line_number = t.line_number), void 0 !== t.stack_frames && (this.stack_frames = t.stack_frames), void 0 !== t.payload_json && (this.payload_json = t.payload_json), void 0 !== t.error_flag && (this.error_flag = t.error_flag))
                    }, o.LogRecord.prototype = {}, o.LogRecord.prototype.read = !1, o.LogRecord.prototype.write = !1, o.TraceJoinId = function(t) {
                        if (this.TraceKey = null, this.Value = null, t) {
                            if (void 0 === t.TraceKey) throw new r.TProtocolException(r.TProtocolExceptionType.UNKNOWN, "Required field TraceKey is unset!");
                            if (this.TraceKey = t.TraceKey, void 0 === t.Value) throw new r.TProtocolException(r.TProtocolExceptionType.UNKNOWN, "Required field Value is unset!");
                            this.Value = t.Value
                        }
                    }, o.TraceJoinId.prototype = {}, o.TraceJoinId.prototype.read = !1, o.TraceJoinId.prototype.write = !1, o.SpanRecord = function(t) {
                        this.span_guid = null, this.trace_guid = null, this.runtime_guid = null, this.span_name = null, this.join_ids = null, this.oldest_micros = null, this.youngest_micros = null, this.attributes = null, this.error_flag = null, this.log_records = null, t && (void 0 !== t.span_guid && (this.span_guid = t.span_guid), void 0 !== t.trace_guid && (this.trace_guid = t.trace_guid), void 0 !== t.runtime_guid && (this.runtime_guid = t.runtime_guid), void 0 !== t.span_name && (this.span_name = t.span_name), void 0 !== t.join_ids && (this.join_ids = t.join_ids), void 0 !== t.oldest_micros && (this.oldest_micros = t.oldest_micros), void 0 !== t.youngest_micros && (this.youngest_micros = t.youngest_micros), void 0 !== t.attributes && (this.attributes = t.attributes), void 0 !== t.error_flag && (this.error_flag = t.error_flag), void 0 !== t.log_records && (this.log_records = t.log_records))
                    }, o.SpanRecord.prototype = {}, o.SpanRecord.prototype.read = !1, o.SpanRecord.prototype.write = !1, o.Auth = function(t) {
                        this.access_token = null, t && void 0 !== t.access_token && (this.access_token = t.access_token)
                    }, o.Auth.prototype = {}, o.Auth.prototype.read = !1, o.Auth.prototype.write = !1, o.Timing = function(t) {
                        this.receive_micros = null, this.transmit_micros = null, t && (void 0 !== t.receive_micros && (this.receive_micros = t.receive_micros), void 0 !== t.transmit_micros && (this.transmit_micros = t.transmit_micros))
                    }, o.Timing.prototype = {}, o.Timing.prototype.read = !1, o.Timing.prototype.write = !1, o.SampleCount = function(t) {
                        this.oldest_micros = null, this.youngest_micros = null, this.count = null, t && (void 0 !== t.oldest_micros && (this.oldest_micros = t.oldest_micros), void 0 !== t.youngest_micros && (this.youngest_micros = t.youngest_micros), void 0 !== t.count && (this.count = t.count))
                    }, o.SampleCount.prototype = {}, o.SampleCount.prototype.read = !1, o.SampleCount.prototype.write = !1, o.MetricsSample = function(t) {
                        if (this.name = null, this.int64_value = null, this.double_value = null, t) {
                            if (void 0 === t.name) throw new r.TProtocolException(r.TProtocolExceptionType.UNKNOWN, "Required field name is unset!");
                            this.name = t.name, void 0 !== t.int64_value && (this.int64_value = t.int64_value), void 0 !== t.double_value && (this.double_value = t.double_value)
                        }
                    }, o.MetricsSample.prototype = {}, o.MetricsSample.prototype.read = !1, o.MetricsSample.prototype.write = !1, o.Metrics = function(t) {
                        this.counts = null, this.gauges = null, t && (void 0 !== t.counts && (this.counts = t.counts), void 0 !== t.gauges && (this.gauges = t.gauges))
                    }, o.Metrics.prototype = {}, o.Metrics.prototype.read = !1, o.Metrics.prototype.write = !1, o.ReportRequest = function(t) {
                        this.runtime = null, this.span_records = null, this.log_records = null, this.timestamp_offset_micros = null, this.oldest_micros = null, this.youngest_micros = null, this.counters = null, this.internal_logs = null, this.internal_metrics = null, t && (void 0 !== t.runtime && (this.runtime = t.runtime), void 0 !== t.span_records && (this.span_records = t.span_records), void 0 !== t.log_records && (this.log_records = t.log_records), void 0 !== t.timestamp_offset_micros && (this.timestamp_offset_micros = t.timestamp_offset_micros), void 0 !== t.oldest_micros && (this.oldest_micros = t.oldest_micros), void 0 !== t.youngest_micros && (this.youngest_micros = t.youngest_micros), void 0 !== t.counters && (this.counters = t.counters), void 0 !== t.internal_logs && (this.internal_logs = t.internal_logs), void 0 !== t.internal_metrics && (this.internal_metrics = t.internal_metrics))
                    }, o.ReportRequest.prototype = {}, o.ReportRequest.prototype.read = !1, o.ReportRequest.prototype.write = !1, o.Command = function(t) {
                        this.disable = null, t && void 0 !== t.disable && (this.disable = t.disable)
                    }, o.Command.prototype = {}, o.Command.prototype.read = !1, o.Command.prototype.write = !1, o.ReportResponse = function(t) {
                        this.commands = null, this.timing = null, t && (void 0 !== t.commands && (this.commands = t.commands), void 0 !== t.timing && (this.timing = t.timing))
                    }, o.ReportResponse.prototype = {}, o.ReportResponse.prototype.read = !1, o.ReportResponse.prototype.write = !1, t.exports.crouton_thrift = o, t.exports.Thrift = {}
                }, function(t, e, n) {
                    "use strict";

                    function r(t, e) {
                        for (var n = 0; n < e.length; n++) {
                            var r = e[n];
                            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
                        }
                    }
                    Object.defineProperty(e, "__esModule", {
                        value: !0
                    });
                    var o = (function(t, e, n) {
                        return e && r(t.prototype, e), n && r(t, n), t
                    }(i, [{
                        key: "detachedTimeout",
                        value: function(t, e) {
                            e = setTimeout(t, e);
                            return e.unref && e.unref(), e
                        }
                    }, {
                        key: "shouldSendMetaSpan",
                        value: function(t, e) {
                            return !0 === t.meta_event_reporting && !0 !== e["lightstep.meta_event"]
                        }
                    }]), i);

                    function i() {
                        ! function(t) {
                            if (!(t instanceof i)) throw new TypeError("Cannot call a class as a function")
                        }(this)
                    }
                    e.default = new o, t.exports = e.default
                }, function(t, e, n) {
                    "use strict";
                    var r = u(n(20)),
                        o = u(n(7)),
                        i = u(n(47)),
                        s = u(n(48)),
                        a = u(n(5)),
                        n = n(1);

                    function u(t) {
                        return t && t.__esModule ? t : {
                            default: t
                        }
                    }
                    a = {
                        Tracer: r.default,
                        LightStepPropagator: o.default,
                        B3Propagator: i.default,
                        DDPropagator: s.default,
                        SpanContext: a.default
                    };
                    n.Platform.initLibrary(a), t.exports = a
                }, function(t, e, o) {
                    "use strict";
                    Object.defineProperty(e, "__esModule", {
                        value: !0
                    });
                    var i = Object.assign || function(t) {
                            for (var e = 1; e < arguments.length; e++) {
                                var n, r = arguments[e];
                                for (n in r) Object.prototype.hasOwnProperty.call(r, n) && (t[n] = r[n])
                            }
                            return t
                        },
                        n = function(t, e, n) {
                            return e && g(t.prototype, e), n && g(t, n), t
                        },
                        r = y(o(21)),
                        s = function(t) {
                            if (t && t.__esModule) return t;
                            var e = {};
                            if (null != t)
                                for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                            return e.default = t, e
                        }(o(2)),
                        p = y(o(5)),
                        _ = y(o(28)),
                        f = y(o(0)),
                        a = o(1),
                        u = y(o(38)),
                        c = y(o(39)),
                        d = y(o(40)),
                        l = y(o(41)),
                        h = y(o(7));

                    function g(t, e) {
                        for (var n = 0; n < e.length; n++) {
                            var r = e[n];
                            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
                        }
                    }

                    function y(t) {
                        return t && t.__esModule ? t : {
                            default: t
                        }
                    }

                    function v(t, e, n) {
                        return e in t ? Object.defineProperty(t, e, {
                            value: n,
                            enumerable: !0,
                            configurable: !0,
                            writable: !0
                        }) : t[e] = n, t
                    }
                    var m = o(42),
                        b = o(43),
                        T = o(3),
                        O = o(6),
                        E = o(44),
                        S = o(45),
                        w = o(18),
                        R = null,
                        n = (function(t, e) {
                            if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                            t.prototype = Object.create(e && e.prototype, {
                                constructor: {
                                    value: t,
                                    enumerable: !1,
                                    writable: !0,
                                    configurable: !0
                                }
                            }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
                        }(k, s.Tracer), n(k, [{
                            key: "_delegateEventEmitterMethods",
                            value: function() {
                                var e = this;
                                this._ee = new r.default, (0, f.default)(["addListener", "emit", "eventNames", "getMaxListeners", "listenerCount", "listeners", "on", "once", "prependListener", "prependOnceListener", "removeAllListeners", "removeListener", "setMaxListeners"], function(t) {
                                    e[t] = function() {
                                        e._ee[t] && e._ee[t].apply(e._ee, arguments)
                                    }
                                })
                            }
                        }, {
                            key: "_makeOptionsTable",
                            value: function() {
                                this.addOption("verbosity", {
                                    type: "int",
                                    min: 0,
                                    max: 9,
                                    defaultValue: 1
                                }), this.addOption("access_token", {
                                    type: "string",
                                    defaultValue: ""
                                }), this.addOption("component_name", {
                                    type: "string",
                                    defaultValue: ""
                                }), this.addOption("collector_host", {
                                    type: "string",
                                    defaultValue: "collector.lightstep.com"
                                }), this.addOption("collector_port", {
                                    type: "int",
                                    defaultValue: 443
                                }), this.addOption("collector_path", {
                                    type: "string",
                                    defaultValue: ""
                                }), this.addOption("collector_encryption", {
                                    type: "string",
                                    defaultValue: "tls"
                                }), this.addOption("tags", {
                                    type: "any",
                                    defaultValue: {}
                                }), this.addOption("max_reporting_interval_millis", {
                                    type: "int",
                                    defaultValue: 2500
                                }), this.addOption("disable_clock_skew_correction", {
                                    type: "bool",
                                    defaultValue: !1
                                }), this.addOption("transport", {
                                    type: "string",
                                    defaultValue: "thrift"
                                }), this.addOption("disabled", {
                                    type: "bool",
                                    defaultValue: !1
                                }), this.addOption("max_span_records", {
                                    type: "int",
                                    defaultValue: 4096
                                }), this.addOption("default_span_tags", {
                                    type: "any",
                                    defaultValue: {}
                                }), this.addOption("report_timeout_millis", {
                                    type: "int",
                                    defaultValue: 3e4
                                }), this.addOption("gzip_json_requests", {
                                    type: "bool",
                                    defaultValue: !0
                                }), this.addOption("disable_reporting_loop", {
                                    type: "bool",
                                    defaultValue: !1
                                }), this.addOption("disable_report_on_exit", {
                                    type: "bool",
                                    defaultValue: !1
                                }), this.addOption("delay_initial_report_millis", {
                                    type: "int",
                                    defaultValue: 1e3
                                }), this.addOption("error_throttle_millis", {
                                    type: "int",
                                    defaultValue: 6e4
                                }), this.addOption("logger", {
                                    type: "function",
                                    defaultValue: this._printToConsole.bind(this)
                                }), this.addOption("clear_span_buffer_consecutive_errors", {
                                    type: "int",
                                    defaultValue: null
                                }), this.addOption("certificate_verification", {
                                    type: "bool",
                                    defaultValue: !0
                                }), this.addOption("override_transport", {
                                    type: "any",
                                    defaultValue: null
                                }), this.addOption("silent", {
                                    type: "bool",
                                    defaultValue: !1
                                }), this.addOption("log_field_key_hard_limit", {
                                    type: "int",
                                    defaultValue: 256
                                }), this.addOption("log_field_value_hard_limit", {
                                    type: "int",
                                    defaultValue: 1024
                                }), this.addOption("disable_meta_event_reporting", {
                                    type: "bool",
                                    defaultValue: !1
                                })
                            }
                        }, {
                            key: "_startSpan",
                            value: function(t, e) {
                                var n = this,
                                    r = null;
                                if ((e = e || {}).references)
                                    for (var o = 0; o < e.references.length; o++) {
                                        var i = e.references[o],
                                            s = i.type();
                                        if (s === this._opentracing.REFERENCE_CHILD_OF || s === this._opentracing.REFERENCE_FOLLOWS_FROM) {
                                            i = i.referencedContext();
                                            if (i) {
                                                r = i;
                                                break
                                            }
                                            this._error("Span reference has an invalid context", i)
                                        }
                                    }
                                var a = r ? r.traceGUID() : this.generateTraceGUIDForRootSpan(),
                                    u = !r || r._sampled,
                                    c = new p.default(this._platform.generateUUID(), a, u),
                                    l = new _.default(this, t, c);
                                return l.addTags(this._options.default_span_tags), (0, f.default)(e, function(t, e) {
                                    switch (e) {
                                        case "references":
                                            break;
                                        case "startTime":
                                            l.setBeginMicros(Math.floor(1e3 * t));
                                            break;
                                        case "tags":
                                            l.addTags(t);
                                            break;
                                        default:
                                            n._warn("Ignoring unknown field '" + e + "'")
                                    }
                                }), null !== r && (l.setParentGUID(r._guid), r.forEachBaggageItem(function(t, e) {
                                    return c.setBaggageItem(t, e)
                                })), this.emit("start_span", l), w.shouldSendMetaSpan(this.options(), l.getTags()) && this.startSpan(O.LS_META_SP_START, {
                                    tags: (v(t = {}, O.LS_META_EVENT_KEY, !0), v(t, O.LS_META_TRACE_KEY, l.traceGUID()), v(t, O.LS_META_SPAN_KEY, l.guid()), t)
                                }).finish(), l
                            }
                        }, {
                            key: "_inject",
                            value: function(t, e, n) {
                                var r;
                                switch (!0 === this.options().meta_event_reporting && this.startSpan(O.LS_META_INJECT, {
                                    tags: (v(r = {}, O.LS_META_EVENT_KEY, !0), v(r, O.LS_META_TRACE_KEY, t._traceGUID), v(r, O.LS_META_SPAN_KEY, t._guid), v(r, O.LS_META_PROPAGATION_KEY, e), r)
                                }).finish(), e) {
                                    case this._opentracing.FORMAT_HTTP_HEADERS:
                                        this._propagators[this._opentracing.FORMAT_HTTP_HEADERS].inject(t, n);
                                        break;
                                    case this._opentracing.FORMAT_TEXT_MAP:
                                        this._propagators[this._opentracing.FORMAT_TEXT_MAP].inject(t, n);
                                        break;
                                    case this._opentracing.FORMAT_BINARY:
                                        this._propagators[this._opentracing.FORMAT_BINARY].inject(t, n);
                                        break;
                                    default:
                                        this._error("Unknown format: " + e)
                                }
                            }
                        }, {
                            key: "_extract",
                            value: function(t, e) {
                                var n, r = null;
                                switch (t) {
                                    case this._opentracing.FORMAT_HTTP_HEADERS:
                                        r = this._propagators[this._opentracing.FORMAT_HTTP_HEADERS].extract(e);
                                        break;
                                    case this._opentracing.FORMAT_TEXT_MAP:
                                        r = this._propagators[this._opentracing.FORMAT_TEXT_MAP].extract(e);
                                        break;
                                    case this._opentracing.FORMAT_BINARY:
                                        r = this._propagators[this._opentracing.FORMAT_BINARY].extract(e);
                                        break;
                                    default:
                                        return this._error("Unsupported format: " + t), null
                                }
                                return !0 === this.options().meta_event_reporting && r && this.startSpan(O.LS_META_EXTRACT, {
                                    tags: (v(n = {}, O.LS_META_EVENT_KEY, !0), v(n, O.LS_META_TRACE_KEY, r._traceGUID), v(n, O.LS_META_SPAN_KEY, r._guid), v(n, O.LS_META_PROPAGATION_KEY, t), n)
                                }).finish(), r
                            }
                        }, {
                            key: "flush",
                            value: function(t) {
                                if (t = t || function() {}, this._options.disabled) return this._warn("Manual flush() called in disabled state."), t(null);
                                this._flushReport(!0, !1, t)
                            }
                        }, {
                            key: "guid",
                            value: function() {
                                return this._runtimeGUID
                            }
                        }, {
                            key: "verbosity",
                            value: function() {
                                var t = this._options.verbosity;
                                return void 0 === t ? 1 : t
                            }
                        }, {
                            key: "generateTraceGUIDForRootSpan",
                            value: function() {
                                var t = this._platform.generateUUID();
                                return this._activeRootSpan && (t = this._activeRootSpan.traceGUID()), t
                            }
                        }, {
                            key: "setPlatformOptions",
                            value: function(t) {
                                var n = this._platform.options(this) || {};
                                (0, f.default)(t, function(t, e) {
                                    n[e] = t
                                }), this.options(n)
                            }
                        }, {
                            key: "addOption",
                            value: function(t, e) {
                                e.name = t, this._optionDescs.push(e), this._options[e.name] = e.defaultValue
                            }
                        }, {
                            key: "options",
                            value: function(e) {
                                var n = this;
                                if (0 === arguments.length) return console.assert("object" == typeof this._options, "Internal error: _options field incorrect"), this._options;
                                if ("object" != typeof e) throw new Error("options() must be called with an object: type was " + typeof e);
                                0 === e.collector_port && delete e.collector_port, void 0 !== e.collector_encryption && void 0 === e.collector_port && (e.collector_port = "none" !== e.collector_encryption ? 443 : 80), this.meta_event_reporting = !1;
                                var r, o, i = {},
                                    s = {};
                                (0, f.default)(this._optionDescs, function(t) {
                                    n._setOptionInternal(i, s, e, t)
                                }), Object.keys(e).forEach(function(t) {
                                    void 0 === i[t] && void 0 === s[t] && n._warn("Invalid option " + t + " with value " + e[t])
                                }), this._initReportingDataIfNeeded(i), this._reportingLoopActive || this._startReportingLoop(), 3 <= this.verbosity() && (r = "", (o = 0, f.default)(i, function(t, e) {
                                    r += "\t" + JSON.stringify(e) + ": " + JSON.stringify(t.newValue) + "\n", o++
                                }), 0 < o && this._debug("Options modified:\n" + r)), this.emit("options", i, this._options, this)
                            }
                        }, {
                            key: "_setOptionInternal",
                            value: function(t, e, n, r) {
                                var o = r.name,
                                    i = n[o],
                                    s = typeof i;
                                if (void 0 !== i) {
                                    switch (r.type) {
                                        case "any":
                                            break;
                                        case "bool":
                                            if (!0 !== i && !1 !== i) return void this._error("Invalid boolean option '" + o + "' '" + i + "'");
                                            break;
                                        case "function":
                                            if ("function" != typeof i) return void this._error("Invalid function option '" + o + "' '" + i + "'");
                                            break;
                                        case "int":
                                            if ("number" != s || Math.floor(i) !== i) return void this._error("Invalid int option '" + o + "' '" + i + "'");
                                            if (void 0 !== r.min && void 0 !== r.max && !(i >= r.min && i <= r.max)) return void this._error("Option '" + o + "' out of range '" + i + "' is not between " + r.min + " and " + r.max);
                                            break;
                                        case "string":
                                            switch (s) {
                                                case "string":
                                                    break;
                                                case "number":
                                                    i = T.toString(i);
                                                    break;
                                                default:
                                                    return void this._error("Invalid string option " + o + " " + i)
                                            }
                                            break;
                                        case "array":
                                            if ("[object Array]" !== Object.prototype.toString.call(i)) return void this._error("Invalid type for array option " + o + ": found '" + s + "'");
                                            break;
                                        default:
                                            return void this._error("Unknown option type '" + r.type + "'")
                                    }
                                    n = this._options[o];
                                    if (void 0 === n) throw new Error("Attempt to set unknown option " + o);
                                    "object" == s || n !== i ? (t[o] = {
                                        oldValue: n,
                                        newValue: i
                                    }, this._options[o] = i) : e[o] = !0
                                }
                            }
                        }, {
                            key: "_initReportingDataIfNeeded",
                            value: function(t) {
                                var n = this;
                                if (null === this._auth) {
                                    this._runtimeGUID = this._platform.runtimeGUID(this._options.component_name), this._auth = new u.default(this._options.access_token);
                                    var r = {};
                                    (0, f.default)(this._options.tags, function(t, e) {
                                        "string" == typeof t ? r[e] = t : n._error("Tracer tag value is not a string: key=" + e)
                                    }), r["lightstep.tracer_version"] = S.version;
                                    var e = this._platform.tracerTags();
                                    (0, f.default)(e, function(t, e) {
                                        r[e] = t
                                    }), this._runtime = new c.default(this._runtimeGUID, this._startMicros, this._options.component_name, r), this._info("Initializing reporting data", {
                                        component_name: this._options.component_name,
                                        access_token: this._auth.getAccessToken()
                                    }), this.emit("reporting_initialized")
                                } else {
                                    if (!this._runtime) return this._error("Inconsistent state: auth initialized without runtime.");
                                    if (t.access_token) throw new Error("Cannot change access_token after it has been set.");
                                    if (t.component_name) throw new Error("Cannot change component_name after it has been set.");
                                    if (t.collector_host) throw new Error("Cannot change collector_host after the connection is established");
                                    if (t.collector_port) throw new Error("Cannot change collector_port after the connection is established");
                                    if (t.collector_path) throw new Error("Cannot change collector_path after the connection is established");
                                    if (t.collector_encryption) throw new Error("Cannot change collector_encryption after the connection is established")
                                }
                            }
                        }, {
                            key: "getLogFieldKeyHardLimit",
                            value: function() {
                                return this._options.log_field_key_hard_limit
                            }
                        }, {
                            key: "getLogFieldValueHardLimit",
                            value: function() {
                                return this._options.log_field_value_hard_limit
                            }
                        }, {
                            key: "addPlatformPlugins",
                            value: function(t) {
                                var e = this,
                                    t = this._platform.plugins(t);
                                (0, f.default)(t, function(t) {
                                    e.addPlugin(t)
                                })
                            }
                        }, {
                            key: "addPlugin",
                            value: function(t) {
                                var e = t.name();
                                this._plugins[e] || (this._plugins[e] = t).addOptions(this)
                            }
                        }, {
                            key: "startPlugins",
                            value: function() {
                                var n = this;
                                (0, f.default)(this._plugins, function(t, e) {
                                    n._plugins[e].start(n)
                                })
                            }
                        }, {
                            key: "addActiveRootSpan",
                            value: function(t) {
                                this._activeRootSpanSet[t._guid] = t, this._setActiveRootSpanToYoungest()
                            }
                        }, {
                            key: "removeActiveRootSpan",
                            value: function(t) {
                                delete this._activeRootSpanSet[t._guid], this._setActiveRootSpanToYoungest()
                            }
                        }, {
                            key: "_setActiveRootSpanToYoungest",
                            value: function() {
                                var e = this;
                                (this._activeRootSpan = null, f.default)(this._activeRootSpanSet, function(t) {
                                    (!e._activeRootSpan || t._beginMicros > e._activeRootSpan._beginMicros) && (e._activeRootSpan = t)
                                })
                            }
                        }, {
                            key: "_objectToUint8Array",
                            value: function(t) {
                                var e = void 0;
                                try {
                                    e = encodeURIComponent(JSON.stringify(t))
                                } catch (t) {
                                    return this._error("Could not binary encode carrier data."), null
                                }
                                for (var n = new ArrayBuffer(e.length), r = new Uint8Array(n), o = 0; o < e.length; o++) {
                                    var i = e.charCodeAt(o);
                                    if (!(0 <= i && i <= 255)) return this._error("Unexpected character code"), null;
                                    r[o] = i
                                }
                                return r
                            }
                        }, {
                            key: "_uint8ArrayToObject",
                            value: function(t) {
                                if (!t) return this._error("Array is null"), null;
                                for (var e = "", n = 0; n < t.length; n++) e += String.fromCharCode(t[n]);
                                try {
                                    return JSON.parse(decodeURIComponent(e))
                                } catch (t) {
                                    return this._error("Could not decode binary data."), null
                                }
                            }
                        }, {
                            key: "log",
                            value: function() {
                                return new b(this)
                            }
                        }, {
                            key: "_clearBuffers",
                            value: function() {
                                this._spanRecords = [], this._internalLogs = [];
                                var n = {};
                                (0, f.default)(this._counters, function(t, e) {
                                    n[e] = 0
                                }), this._counters = n
                            }
                        }, {
                            key: "_buffersAreEmpty",
                            value: function() {
                                if (0 < this._spanRecords.length) return !1;
                                if (0 < this._internalLogs.length) return !1;
                                var e = !0;
                                return (0, f.default)(this._counters, function(t) {
                                    0 < t && (e = !1)
                                }), e
                            }
                        }, {
                            key: "_addSpanRecord",
                            value: function(t) {
                                this._internalAddSpanRecord(t), this.emit("span_added", t)
                            }
                        }, {
                            key: "_internalAddSpanRecord",
                            value: function(t) {
                                var e;
                                t ? this._spanRecords.length >= this._options.max_span_records ? (e = Math.floor(this._spanRecords.length * Math.random()), this._spanRecords[e] = t, this._counters["spans.dropped"]++) : this._spanRecords.push(t) : this._error("Attempt to add null record to buffer")
                            }
                        }, {
                            key: "_restoreRecords",
                            value: function(t, e, n) {
                                var r = this;
                                (0, f.default)(t, function(t) {
                                    r._internalAddSpanRecord(t)
                                });
                                t = this._internalLogs;
                                this._internalLogs = [];
                                t = e.concat(t);
                                (0, f.default)(t, function(t) {
                                    r._pushInternalLog(t)
                                }), (0, f.default)(n, function(t, e) {
                                    e in r._counters ? r._counters[e] += t : r._error("Bad counter name: " + e)
                                })
                            }
                        }, {
                            key: "_clearSpanRecordsIfMaxErrors",
                            value: function() {
                                var t, e = this.options().clear_span_buffer_consecutive_errors;
                                null === e || this._reportErrorStreak < e || (t = this._spanRecords.length, this._counters["spans.dropped"] += t, this._spanRecords = [], this._warn("Span buffer flushed, max consecutive errors reached", {
                                    max_consecutive_errors: e,
                                    spans_dropped: t
                                }))
                            }
                        }, {
                            key: "_setupReportOnExit",
                            value: function() {
                                var t, e = this;
                                this._options.disable_report_on_exit ? this._debug("report-on-exit is disabled.") : (t = 0, this._platform.onBeforeExit(function() {
                                    0 < t++ || (e._info("Final flush before exit."), e._flushReport(!1, !0, function(t) {
                                        t && e._warn("Final report before exit failed", {
                                            error: t,
                                            unflushed_spans: e._spanRecords.length,
                                            buffer_youngest_micros: e._reportYoungestMicros
                                        })
                                    }))
                                }))
                            }
                        }, {
                            key: "_startReportingLoop",
                            value: function() {
                                var t, e, n, r = this;
                                this._options.disabled ? this._info("Not starting reporting loop: instrumentation is disabled.") : this._options.disable_reporting_loop ? this._info("Not starting reporting loop: reporting loop is disabled.") : null !== this._auth && (this._reportingLoopActive ? this._info("Reporting loop already started!") : (this._info("Starting reporting loop:", this._runtime), this._reportingLoopActive = !0, t = 0, this._platform.onBeforeExit(function() {
                                    0 < t++ || r._stopReportingLoop()
                                }), e = function() {
                                    r._enqueueNextReport(function(t) {
                                        r._reportingLoopActive && e()
                                    })
                                }, n = Math.floor(Math.random() * this._options.delay_initial_report_millis), w.detachedTimeout(function() {
                                    e()
                                }, n)))
                            }
                        }, {
                            key: "_stopReportingLoop",
                            value: function() {
                                this._debug("Stopping reporting loop"), this._reportingLoopActive = !1, clearTimeout(this._reportTimer), this._reportTimer = null
                            }
                        }, {
                            key: "_enqueueNextReport",
                            value: function(t) {
                                var e, n, r = this;
                                this._reportTimer || (e = this._options.max_reporting_interval_millis, 0 === this._reportErrorStreak && this._useClockState && !this._clockState.isReady() && (e = Math.min(O.CLOCK_STATE_REFRESH_INTERVAL_MS, e)), n = (1 + Math.min(7, Math.max(0, this._reportErrorStreak))) * e, e = .5 * Math.random() - .25 + 1, n = Math.floor(Math.max(0, e * n)), this._debug("Delaying next flush for " + n + "ms"), this._reportTimer = w.detachedTimeout(function() {
                                    r._reportTimer = null, r._flushReport(!1, !1, t)
                                }, n))
                            }
                        }, {
                            key: "_flushReport",
                            value: function(t, i, s) {
                                var a = this;
                                s = s || function(t) {};
                                var e = this._clockState.isReady(),
                                    n = this._clockState.offsetMicros();
                                this._debug("time correction state", {
                                    offset_micros: n,
                                    active_samples: this._clockState.activeSampleCount(),
                                    ready: e
                                });
                                var r = this._spanRecords,
                                    o = this._counters,
                                    u = this._internalLogs;
                                if (!this._useClockState || t || e || i) {
                                    if (this._buffersAreEmpty()) return this._debug("Skipping empty report"), s(null);
                                    this._clearBuffers(), this._debug("Flushing report (" + r.length + " spans)")
                                } else this._debug("Flushing empty report to prime clock state"), r = [], o = {}, u = [];
                                this._transport.ensureConnection(this._options), console.assert(null !== this._runtimeGUID, "No runtime GUID for Tracer");
                                var n = this._useClockState ? n : 0,
                                    c = this._platform.nowMicros(),
                                    l = new d.default(this._runtime, this._reportYoungestMicros, c, r, u, o, n);
                                this.emit("prereport", l);
                                var p = this._platform.nowMicros();
                                this._options.meta_event_reporting && !this._first_report_has_run && (this._first_report_has_run = !0, this.startSpan(O.LS_META_TRACER_CREATE, {
                                    tags: (v(n = {}, O.LS_META_EVENT_KEY, !0), v(n, O.LS_META_TRACER_GUID_KEY, this._runtimeGUID), n)
                                }).finish()), this._transport.report(i, this._auth, l, function(t, e) {
                                    var n, r = a._platform.nowMicros(),
                                        o = (c - l.oldest_micros) / 1e6;
                                    return t ? (a._reportErrorStreak++, n = void 0, n = t.message ? "" + t.message : "" + t, a._warn("Error in report: " + n, {
                                        last_report_seconds_ago: o
                                    }), a._restoreRecords(l.getSpanRecords(), l.getInternalLogs(), l.getCounters()), a._counters["reports.errors.send"]++, a._clearSpanRecordsIfMaxErrors(), a.emit("report_error", t, {
                                        error: t,
                                        streak: a._reportErrorStreak,
                                        detached: i
                                    })) : (4 <= a.verbosity() && a._debug("Report flushed for last " + o + " seconds", {
                                        spans_reported: l.getSpanRecords().length
                                    }), a._reportErrorStreak = 0, a._reportYoungestMicros = c, e ? (e.timing && e.timing.receive_micros && e.timing.transmit_micros ? a._clockState.addSample(p, e.timing.receive_micros, e.timing.transmit_micros, r) : e.receiveTimestamp && e.transmitTimestamp ? a._clockState.addSample(p, 1e6 * e.receiveTimestamp.seconds + e.receiveTimestamp.nanos / 1e3, 1e6 * e.transmitTimestamp.seconds + e.transmitTimestamp.nanos / 1e3, r) : a._useClockState = !1, e.errors && 0 < e.errors.length ? a._warn("Errors in report", e.errors) : e.errorsList && 0 < e.errorsList.length && a._warn("Errors in report", e.errorsList), e.commandsList && 0 < e.commandsList.length && e.commandsList[0].devMode && !0 !== a.options().disable_meta_event_reporting && (a.options().meta_event_reporting = !0)) : a._useClockState = !1, a.emit("report", l, e)), s(t)
                                })
                            }
                        }, {
                            key: "stats",
                            value: function() {
                                return {
                                    counters: this._counters
                                }
                            }
                        }, {
                            key: "_debug",
                            value: function(t, e) {
                                this.verbosity() < 4 || this._options.logger("debug", t, e)
                            }
                        }, {
                            key: "_info",
                            value: function(t, e) {
                                this.verbosity() < 3 || this._options.logger("info", t, e)
                            }
                        }, {
                            key: "_warn",
                            value: function(t, e) {
                                this._counters["internal.warnings"]++, this.verbosity() < 3 || this._options.logger("warn", t, e)
                            }
                        }, {
                            key: "_error",
                            value: function(t, e) {
                                this._counters["internal.errors"]++;
                                var n = this.log().level(O.LOG_ERROR).message(t).payload(e).record();
                                this._pushInternalLog(n);
                                var r = this.verbosity();
                                if (0 !== r) {
                                    n = Date.now();
                                    if (1 === r) {
                                        if (n < this._lastVisibleErrorMillis + this._options.error_throttle_millis) return void this._skippedVisibleErrors++;
                                        0 < this._skippedVisibleErrors && (r = this._skippedVisibleErrors + " errors masked since last logged error. Increase 'verbosity' option to see all errors.", this._options.logger("error", r, e))
                                    }
                                    this._options.logger("error", t, e), this._lastVisibleErrorMillis = n, this._skippedVisibleErrors = 0
                                }
                            }
                        }, {
                            key: "_printToConsole",
                            value: function(t, e, n) {
                                var r = "log",
                                    o = "[LightStep:INFO] " + e;
                                "debug" === t ? (r = "log", o = "[LightStep:DEBUG] " + e) : "info" === t ? (r = "log", o = "[LightStep:INFO] " + e) : "warn" === t ? (r = "warn", o = "[LightStep:WARN] " + e) : "error" === t && (r = "error", o = "[LightStep:ERROR] " + e), this._options.silent || (void 0 !== n ? console[r](o, n) : console[r](o))
                            }
                        }, {
                            key: "_pushInternalLog",
                            value: function(t) {
                                t && (20 <= this._internalLogs.length ? (t.message = "MAX_INTERNAL_LOGS limit hit. Last error: " + t.message, this._internalLogs[this._internalLogs.length - 1] = t) : this._internalLogs.push(t))
                            }
                        }]), k);

                    function k(t) {
                        ! function(t) {
                            if (!(t instanceof k)) throw new TypeError("Cannot call a class as a function")
                        }(this);
                        var n = function(t, e) {
                            if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                            return !e || "object" != typeof e && "function" != typeof e ? t : e
                        }(this, Object.getPrototypeOf(k).call(this));
                        n._delegateEventEmitterMethods(), t = t || {}, R || (E.setOptions(t), R = n), n._platform = new a.Platform(n), n._runtimeGUID = t.guid || n.override_runtime_guid || null, n._plugins = {}, n._options = {}, n._optionDescs = [], n._makeOptionsTable(), n._opentracing = s, t.opentracing_module && (n._opentracing = t.opentracing_module);
                        var e = n._platform.nowMicros();
                        n._startMicros = e, n._auth = null, n._runtime = null;
                        var r = {
                            warn: function(t, e) {
                                n._warn(t, e)
                            },
                            error: function(t, e) {
                                n._error(t, e)
                            }
                        };
                        return t && (n._transport = t.override_transport), n._propagators = {}, n._propagators[n._opentracing.FORMAT_HTTP_HEADERS] = new h.default(n), n._propagators[n._opentracing.FORMAT_TEXT_MAP] = new h.default(n), n._propagators[n._opentracing.FORMAT_BINARY] = new l.default(n, n._opentracing.FORMAT_BINARY), t && t.propagators && (n._propagators = i({}, n._propagators, t.propagators)), n._reportingLoopActive = !1, n._first_report_has_run = !1, n._reportYoungestMicros = e, n._reportTimer = null, n._reportErrorStreak = 0, n._lastVisibleErrorMillis = 0, n._skippedVisibleErrors = 0, n._activeRootSpanSet = {}, n._activeRootSpan = null, n._spanRecords = [], n._counters = {
                            "internal.errors": 0,
                            "internal.warnings": 0,
                            "spans.dropped": 0,
                            "logs.dropped": 0,
                            "logs.keys.over_limit": 0,
                            "logs.values.over_limit": 0,
                            "reports.errors.send": 0
                        }, n._internalLogs = [], n._flushIsActive = !1, n.addPlugin(o(46)), n.addPlatformPlugins(t), n.setPlatformOptions(t), t && n.options(t), void 0 !== n._transport && null !== n._transport || (n._options.transport, n._transport = new a.ThriftTransport(r), n._info("Using thrift transport per user-defined option.")), n._useClockState = !n._options.disable_clock_skew_correction, n._clockState = new m({
                            nowMicros: function() {
                                return n._platform.nowMicros()
                            },
                            localStoreGet: function() {
                                var t = "clock_state/" + n._options.collector_host;
                                return n._platform.localStoreGet(t)
                            },
                            localStoreSet: function(t) {
                                var e = "clock_state/" + n._options.collector_host;
                                return n._platform.localStoreSet(e, t)
                            }
                        }), n._setupReportOnExit(), n._info("Tracer created with guid " + n._runtimeGUID), 0 === n._options.access_token.length && n._warn("Access token not set -\n            this requires a satellite with access token checking disabled,\n            such as a developer satellite."), n.startPlugins(), n
                    }
                    e.default = n, t.exports = e.default
                }, function(t, e, n) {
                    "use strict";
                    var f = "function" != typeof Object.create && "~";

                    function r(t, e, n) {
                        this.fn = t, this.context = e, this.once = n || !1
                    }

                    function o() {}
                    o.prototype._events = void 0, o.prototype.listeners = function(t, e) {
                        var t = f ? f + t : t,
                            n = this._events && this._events[t];
                        if (e) return !!n;
                        if (!n) return [];
                        if (n.fn) return [n.fn];
                        for (var r = 0, o = n.length, i = new Array(o); r < o; r++) i[r] = n[r].fn;
                        return i
                    }, o.prototype.emit = function(t, e, n, r, o, i) {
                        var s = f ? f + t : t;
                        if (!this._events || !this._events[s]) return !1;
                        var a, u = this._events[s],
                            c = arguments.length;
                        if ("function" == typeof u.fn) {
                            switch (u.once && this.removeListener(t, u.fn, void 0, !0), c) {
                                case 1:
                                    return u.fn.call(u.context), !0;
                                case 2:
                                    return u.fn.call(u.context, e), !0;
                                case 3:
                                    return u.fn.call(u.context, e, n), !0;
                                case 4:
                                    return u.fn.call(u.context, e, n, r), !0;
                                case 5:
                                    return u.fn.call(u.context, e, n, r, o), !0;
                                case 6:
                                    return u.fn.call(u.context, e, n, r, o, i), !0
                            }
                            for (_ = 1, a = new Array(c - 1); _ < c; _++) a[_ - 1] = arguments[_];
                            u.fn.apply(u.context, a)
                        } else
                            for (var l, p = u.length, _ = 0; _ < p; _++) switch (u[_].once && this.removeListener(t, u[_].fn, void 0, !0), c) {
                                case 1:
                                    u[_].fn.call(u[_].context);
                                    break;
                                case 2:
                                    u[_].fn.call(u[_].context, e);
                                    break;
                                case 3:
                                    u[_].fn.call(u[_].context, e, n);
                                    break;
                                default:
                                    if (!a)
                                        for (l = 1, a = new Array(c - 1); l < c; l++) a[l - 1] = arguments[l];
                                    u[_].fn.apply(u[_].context, a)
                            }
                        return !0
                    }, o.prototype.on = function(t, e, n) {
                        n = new r(e, n || this), t = f ? f + t : t;
                        return this._events || (this._events = f ? {} : Object.create(null)), this._events[t] ? this._events[t].fn ? this._events[t] = [this._events[t], n] : this._events[t].push(n) : this._events[t] = n, this
                    }, o.prototype.once = function(t, e, n) {
                        n = new r(e, n || this, !0), t = f ? f + t : t;
                        return this._events || (this._events = f ? {} : Object.create(null)), this._events[t] ? this._events[t].fn ? this._events[t] = [this._events[t], n] : this._events[t].push(n) : this._events[t] = n, this
                    }, o.prototype.removeListener = function(t, e, n, r) {
                        t = f ? f + t : t;
                        if (!this._events || !this._events[t]) return this;
                        var o = this._events[t],
                            i = [];
                        if (e)
                            if (o.fn)(o.fn !== e || r && !o.once || n && o.context !== n) && i.push(o);
                            else
                                for (var s = 0, a = o.length; s < a; s++)(o[s].fn !== e || r && !o[s].once || n && o[s].context !== n) && i.push(o[s]);
                        return i.length ? this._events[t] = 1 === i.length ? i[0] : i : delete this._events[t], this
                    }, o.prototype.removeAllListeners = function(t) {
                        return this._events && (t ? delete this._events[f ? f + t : t] : this._events = f ? {} : Object.create(null)), this
                    }, o.prototype.off = o.prototype.removeListener, o.prototype.addListener = o.prototype.on, o.prototype.setMaxListeners = function() {
                        return this
                    }, o.prefixed = f, t.exports = o
                }, function(t, e, n) {
                    "use strict";
                    Object.defineProperty(e, "__esModule", {
                        value: !0
                    });

                    function r(t) {
                        this.buffer = t
                    }
                    e.default = r
                }, function(t, e, n) {
                    "use strict";
                    Object.defineProperty(e, "__esModule", {
                        value: !0
                    }), e.SPAN_KIND = "span.kind", e.SPAN_KIND_RPC_CLIENT = "client", e.SPAN_KIND_RPC_SERVER = "server", e.SPAN_KIND_MESSAGING_PRODUCER = "producer", e.SPAN_KIND_MESSAGING_CONSUMER = "consumer", e.ERROR = "error", e.COMPONENT = "component", e.SAMPLING_PRIORITY = "sampling.priority", e.PEER_SERVICE = "peer.service", e.PEER_HOSTNAME = "peer.hostname", e.PEER_ADDRESS = "peer.address", e.PEER_HOST_IPV4 = "peer.ipv4", e.PEER_HOST_IPV6 = "peer.ipv6", e.PEER_PORT = "peer.port", e.HTTP_URL = "http.url", e.HTTP_METHOD = "http.method", e.HTTP_STATUS_CODE = "http.status_code", e.MESSAGE_BUS_DESTINATION = "message_bus.destination", e.DB_INSTANCE = "db.instance", e.DB_STATEMENT = "db.statement", e.DB_TYPE = "db.type", e.DB_USER = "db.user"
                }, function(t, e, n) {
                    "use strict";
                    Object.defineProperty(e, "__esModule", {
                        value: !0
                    });
                    var r = n(14);
                    e.MockContext = r.default;
                    r = n(15);
                    e.MockSpan = r.default;
                    n = n(25);
                    e.MockTracer = n.default
                }, function(t, e, n) {
                    "use strict";
                    var r, o = this && this.__extends || (r = function(t, e) {
                        return (r = Object.setPrototypeOf || {
                                __proto__: []
                            }
                            instanceof Array && function(t, e) {
                                t.__proto__ = e
                            } || function(t, e) {
                                for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n])
                            })(t, e)
                    }, function(t, e) {
                        function n() {
                            this.constructor = t
                        }
                        r(t, e), t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n)
                    });
                    Object.defineProperty(e, "__esModule", {
                        value: !0
                    });
                    var i, s = n(2),
                        a = n(26),
                        u = n(15),
                        o = (i = s.Tracer, o(c, i), c.prototype._startSpan = function(t, e) {
                            var n = this._allocSpan();
                            if (n.setOperationName(t), this._spans.push(n), e.references)
                                for (var r = 0, o = e.references; r < o.length; r++) {
                                    var i = o[r];
                                    n.addReference(i)
                                }
                            return n._startStack = (new Error).stack, n
                        }, c.prototype._inject = function(t, e, n) {
                            throw new Error("NOT YET IMPLEMENTED")
                        }, c.prototype._extract = function(t, e) {
                            throw new Error("NOT YET IMPLEMENTED")
                        }, c.prototype._allocSpan = function() {
                            return new u.default(this)
                        }, c.prototype.clear = function() {
                            this._spans = []
                        }, c.prototype.report = function() {
                            return new a.default(this._spans)
                        }, c);

                    function c() {
                        var t = i.call(this) || this;
                        return t._spans = [], t
                    }
                    e.MockTracer = o, e.default = o
                }, function(t, e, n) {
                    "use strict";
                    Object.defineProperty(e, "__esModule", {
                        value: !0
                    });
                    var r = (o.prototype.firstSpanWithTagValue = function(t, e) {
                        t = this.spansByTag[t];
                        if (!t) return null;
                        e = t[e];
                        return e ? e[0] : null
                    }, o);

                    function o(t) {
                        var o = this;
                        this.spans = t, this.spansByUUID = {}, this.spansByTag = {}, this.debugSpans = [], this.unfinishedSpans = [], t.forEach(function(n) {
                            0 === n._finishMs && o.unfinishedSpans.push(n), o.spansByUUID[n.uuid()] = n, o.debugSpans.push(n.debug());
                            var r = n.tags();
                            Object.keys(r).forEach(function(t) {
                                var e = r[t];
                                o.spansByTag[t] = o.spansByTag[t] || {}, o.spansByTag[t][e] = o.spansByTag[t][e] || [], o.spansByTag[t][e].push(n)
                            })
                        })
                    }
                    e.MockReport = r, e.default = r
                }, function(t, e, n) {
                    "use strict";
                    var r, o = this && this.__extends || (r = function(t, e) {
                        return (r = Object.setPrototypeOf || {
                                __proto__: []
                            }
                            instanceof Array && function(t, e) {
                                t.__proto__ = e
                            } || function(t, e) {
                                for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n])
                            })(t, e)
                    }, function(t, e) {
                        function n() {
                            this.constructor = t
                        }
                        r(t, e), t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n)
                    });
                    Object.defineProperty(e, "__esModule", {
                        value: !0
                    });
                    var i, n = n(9),
                        s = new n.default,
                        a = null,
                        u = (i = n.default, o(c, i), c.prototype.startSpan = function() {
                            var t = a || s;
                            return t.startSpan.apply(t, arguments)
                        }, c.prototype.inject = function() {
                            var t = a || s;
                            return t.inject.apply(t, arguments)
                        }, c.prototype.extract = function() {
                            var t = a || s;
                            return t.extract.apply(t, arguments)
                        }, new c);

                    function c() {
                        return null !== i && i.apply(this, arguments) || this
                    }
                    e.initGlobalTracer = function(t) {
                        a = t
                    }, e.globalTracer = function() {
                        return u
                    }
                }, function(t, e, n) {
                    "use strict";
                    Object.defineProperty(e, "__esModule", {
                        value: !0
                    });
                    var r = function(t, e, n) {
                            return e && p(t.prototype, e), n && p(t, n), t
                        },
                        o = f(n(2)),
                        i = f(n(3)),
                        s = f(n(6)),
                        a = _(n(0)),
                        u = n(1),
                        c = _(n(37)),
                        l = _(n(18));

                    function p(t, e) {
                        for (var n = 0; n < e.length; n++) {
                            var r = e[n];
                            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
                        }
                    }

                    function _(t) {
                        return t && t.__esModule ? t : {
                            default: t
                        }
                    }

                    function f(t) {
                        if (t && t.__esModule) return t;
                        var e = {};
                        if (null != t)
                            for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                        return e.default = t, e
                    }

                    function d(t, e, n) {
                        return e in t ? Object.defineProperty(t, e, {
                            value: n,
                            enumerable: !0,
                            configurable: !0,
                            writable: !0
                        }) : t[e] = n, t
                    }(function(t, e) {
                        if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                        t.prototype = Object.create(e && e.prototype, {
                            constructor: {
                                value: t,
                                enumerable: !1,
                                writable: !0,
                                configurable: !0
                            }
                        }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
                    })(h, o.Span), r(h, [{
                        key: "_tracer",
                        value: function() {
                            return this._tracerImp
                        }
                    }, {
                        key: "_context",
                        value: function() {
                            return this._ctx
                        }
                    }, {
                        key: "_setOperationName",
                        value: function(t) {
                            this._operationName = "" + t
                        }
                    }, {
                        key: "_setBaggageItem",
                        value: function(t, e) {
                            this._ctx.setBaggageItem(t, e)
                        }
                    }, {
                        key: "_getBaggageItem",
                        value: function(t) {
                            return this._ctx.getBaggageItem(t)
                        }
                    }, {
                        key: "_addTags",
                        value: function(t) {
                            var n = this;
                            (0, a.default)(t, function(t, e) {
                                n._tags[e] = t
                            })
                        }
                    }, {
                        key: "_log",
                        value: function(t, e) {
                            "object" == typeof t ? (e = e ? 1e3 * e : this._tracerImp._platform.nowMicros(), t = new c.default(this._tracerImp.getLogFieldKeyHardLimit(), this._tracerImp.getLogFieldValueHardLimit(), e, t), this._log_records = this._log_records || [], this._log_records.push(t), this._tracerImp.emit("log_added", t)) : this._tracerImp._error("Span.log() expects an object as its first argument")
                        }
                    }, {
                        key: "_finish",
                        value: function(t) {
                            return this.end(t)
                        }
                    }]), r(h, [{
                        key: "getOperationName",
                        value: function() {
                            return this._operationName
                        }
                    }, {
                        key: "guid",
                        value: function() {
                            return this._ctx._guid
                        }
                    }, {
                        key: "traceGUID",
                        value: function() {
                            return this._ctx._traceGUID
                        }
                    }, {
                        key: "parentGUID",
                        value: function() {
                            return this._tags.parent_span_guid
                        }
                    }, {
                        key: "setParentGUID",
                        value: function(t) {
                            return this._tags.parent_span_guid = i.toString(t), this
                        }
                    }, {
                        key: "beginMicros",
                        value: function() {
                            return this._beginMicros
                        }
                    }, {
                        key: "setBeginMicros",
                        value: function(t) {
                            return this._beginMicros = t, this
                        }
                    }, {
                        key: "endMicros",
                        value: function() {
                            return this._endMicros
                        }
                    }, {
                        key: "setEndMicros",
                        value: function(t) {
                            return this._endMicros = t, this
                        }
                    }, {
                        key: "generateTraceURL",
                        value: function() {
                            var t = 0 < this._beginMicros && 0 < this._endMicros ? Math.floor((this._beginMicros + this._endMicros) / 2) : this._tracerImp._platform.nowMicros();
                            return s.LIGHTSTEP_APP_URL_PREFIX + "/" + encodeURIComponent(this._tracerImp.options().access_token) + "/trace?span_guid=" + encodeURIComponent(this.guid()) + "&at_micros=" + t
                        }
                    }, {
                        key: "getTags",
                        value: function() {
                            return this._tags
                        }
                    }, {
                        key: "end",
                        value: function(t) {
                            this._ended || (this._ended = !0, void 0 !== t && this.setEndMicros(Math.floor(1e3 * t)), 0 === this._endMicros && this.setEndMicros(this._tracerImp._platform.nowMicros()), l.default.shouldSendMetaSpan(this._tracer().options(), this.getTags()) && this._tracerImp.startSpan(s.LS_META_SP_FINISH, {
                                tags: (d(t = {}, s.LS_META_EVENT_KEY, !0), d(t, s.LS_META_TRACE_KEY, this.traceGUID()), d(t, s.LS_META_SPAN_KEY, this.guid()), t)
                            }).finish(), this._tracerImp._addSpanRecord(this))
                        }
                    }, {
                        key: "_toThrift",
                        value: function() {
                            var n = this,
                                r = [];
                            (0, a.default)(this._tags, function(t, e) {
                                r.push(new u.crouton_thrift.KeyValue({
                                    Key: i.toString(e),
                                    Value: i.toString(t)
                                }))
                            });
                            var o = [];
                            return (0, a.default)(this._log_records, function(t) {
                                var e = t.toThrift();
                                n._tracerImp._counters["logs.keys.over_limit"] += t.getNumKeysOverLimit(), n._tracerImp._counters["logs.values.over_limit"] += t.getNumValuesOverLimit(), o.push(e)
                            }), new u.crouton_thrift.SpanRecord({
                                span_guid: this.guid(),
                                trace_guid: this.traceGUID(),
                                runtime_guid: this._tracerImp.guid(),
                                span_name: this._operationName,
                                oldest_micros: this._beginMicros,
                                youngest_micros: this._endMicros,
                                attributes: r,
                                error_flag: this._errorFlag,
                                log_records: o
                            })
                        }
                    }]), r = h;

                    function h(t, e, n) {
                        ! function(t) {
                            if (!(t instanceof h)) throw new TypeError("Cannot call a class as a function")
                        }(this);
                        var r = function(t, e) {
                            if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                            return !e || "object" != typeof e && "function" != typeof e ? t : e
                        }(this, Object.getPrototypeOf(h).call(this));
                        return console.assert("object" == typeof t, "Invalid runtime"), r._tracerImp = t, r._ctx = n, r._ended = !1, r._operationName = e, r._tags = {}, r._beginMicros = t._platform.nowMicros(), r._endMicros = 0, r._errorFlag = !1, r._log_records = null, r
                    }
                    e.default = r, t.exports = e.default
                }, function(t, e, n) {
                    "use strict";
                    var r = function(t, e, n) {
                        return e && o(t.prototype, e), n && o(t, n), t
                    };

                    function o(t, e) {
                        for (var n = 0; n < e.length; n++) {
                            var r = e[n];
                            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
                        }
                    }
                    var i = n(30),
                        s = n(16),
                        a = function() {
                            if (window.performance && window.performance.now && window.performance.timing && window.performance.timing.navigationStart) {
                                var t = performance.timing.navigationStart;
                                return function() {
                                    return Math.floor(1e3 * (t + performance.now()))
                                }
                            }
                            return function() {
                                return 1e3 * Date.now()
                            }
                        }(),
                        r = (r(u, [{
                            key: "name",
                            value: function() {
                                return "browser"
                            }
                        }, {
                            key: "nowMicros",
                            value: function() {
                                return a()
                            }
                        }, {
                            key: "runtimeGUID",
                            value: function(t) {
                                var e = encodeURIComponent("lightstep_guid/" + t),
                                    t = s.cookie(e) || this._generateLongUUID();
                                s.cookie(e, t, 604800, "/");
                                e = s.cookie("lightstep_session_id") || this._generateLongUUID();
                                return s.cookie("lightstep_session_id", e, 604800, "/"), t
                            }
                        }, {
                            key: "generateUUID",
                            value: function() {
                                return this._generateLongUUID()
                            }
                        }, {
                            key: "_generateLongUUID",
                            value: function() {
                                return "" + ("00000000" + Math.abs(4294967295 * Math.random() | 0).toString(16)).substr(-8) + ("00000000" + Math.abs(4294967295 * Math.random() | 0).toString(16)).substr(-8)
                            }
                        }, {
                            key: "onBeforeExit",
                            value: function() {
                                if (s.isBrowser()) {
                                    for (var t, e = arguments.length, n = Array(e), r = 0; r < e; r++) n[r] = arguments[r];
                                    (t = window).addEventListener.apply(t, ["beforeunload"].concat(n))
                                }
                            }
                        }, {
                            key: "plugins",
                            value: function(t) {
                                return [n(31), n(32), n(33)]
                            }
                        }, {
                            key: "options",
                            value: function(t) {
                                var e = {},
                                    n = {};
                                return i.parseScriptElementOptions(e, n), i.parseURLQueryOptions(e, n), e
                            }
                        }, {
                            key: "tracerTags",
                            value: function() {
                                return {
                                    "lightstep.tracer_platform": "browser"
                                }
                            }
                        }, {
                            key: "fatal",
                            value: function(t) {
                                throw new Error(t)
                            }
                        }, {
                            key: "localStoreGet",
                            value: function(t) {
                                try {
                                    if (!window.sessionStorage) return null
                                } catch (t) {
                                    return null
                                }
                                try {
                                    return JSON.parse(sessionStorage.getItem("lightstep/" + t))
                                } catch (t) {
                                    return null
                                }
                            }
                        }, {
                            key: "localStoreSet",
                            value: function(t, e) {
                                try {
                                    if (!window.sessionStorage) return
                                } catch (t) {
                                    return
                                }
                                try {
                                    sessionStorage.setItem("lightstep/" + t, JSON.stringify(e))
                                } catch (t) {}
                            }
                        }], [{
                            key: "initLibrary",
                            value: function(t) {
                                var e = {},
                                    n = {};
                                i.parseScriptElementOptions(e, n), n.init_global_tracer && u.initGlobalTracer(t, e)
                            }
                        }, {
                            key: "initGlobalTracer",
                            value: function(t, e) {
                                "object" == typeof window && "object" == typeof window.opentracing && opentracing.initGlobalTracer(new t.Tracer(e))
                            }
                        }]), u);

                    function u() {
                        ! function(t) {
                            if (!(t instanceof u)) throw new TypeError("Cannot call a class as a function")
                        }(this)
                    }
                    t.exports = r
                }, function(t, e, n) {
                    "use strict";
                    var r = n(16),
                        o = function() {
                            if ("undefined" != typeof WorkerGlobalScope && self instanceof WorkerGlobalScope) return null;
                            if (!r.isBrowser()) return null;
                            var t = document.getElementsByTagName("SCRIPT");
                            return 0 < t.length ? t[t.length - 1] : null
                        }();
                    t.exports = {
                        parseScriptElementOptions: r.isBrowser() ? function(t, e) {
                            var n, r;
                            o && ("string" == typeof(r = (n = o.dataset).access_token) && 0 < r.length && (t.access_token = r), "string" == typeof(r = n.component_name) && 0 < r.length && (t.component_name = r), "string" == typeof(r = n.collector_host) && 0 < r.length && (t.collector_host = r), (r = n.collector_port) && (t.collector_port = parseInt(r, 10)), "string" == typeof(r = n.collector_path) && 0 < r.length && (t.collector_path = r), (r = n.collector_encryption) && (t.collector_encryption = r), "string" == typeof(r = n.enable) && ("true" === r ? t.enable = !0 : "false" === r && (t.enable = !1)), "string" == typeof(r = n.verbosity) && (t.verbosity = parseInt(r, 10)), "string" == typeof(r = n.init_global_tracer) && ("true" === r ? e.init_global_tracer = !0 : "false" === r && (e.init_global_tracer = !1)), "string" == typeof n.xhr_instrumentation && "true" === n.xhr_instrumentation && (t.xhr_instrumentation = !0), "string" == typeof n.instrument_page_load && "true" === n.instrument_page_load && (t.instrument_page_load = !0))
                        } : function(t, e) {},
                        parseURLQueryOptions: r.isBrowser() ? function(t) {
                            var e = function() {
                                var t = {},
                                    e = window.location.href.indexOf("?");
                                if (e < 0) return t;
                                e = window.location.href.slice(e + 1);
                                0 <= e.indexOf("#") && (e = e.slice(0, e.indexOf("#")));
                                for (var n = e.replace(/\+/, "%20").split("&"), r = 0; r < n.length; r++) {
                                    var o = n[r].split("=");
                                    t[decodeURIComponent(o[0])] = decodeURIComponent(o[1])
                                }
                                return t
                            }();
                            if (e.lightstep_verbosity) try {
                                t.verbosity = parseInt(e.lightstep_verbosity, 10)
                            } catch (t) {}
                            e.lightstep_log_to_console && (t.log_to_console = !0)
                        } : function(t) {
                            return {}
                        }
                    }
                }, function(t, e, n) {
                    "use strict";
                    var p = Object.assign || function(t) {
                            for (var e = 1; e < arguments.length; e++) {
                                var n, r = arguments[e];
                                for (n in r) Object.prototype.hasOwnProperty.call(r, n) && (t[n] = r[n])
                            }
                            return t
                        },
                        r = function(t, e, n) {
                            return e && o(t.prototype, e), n && o(t, n), t
                        },
                        a = function(t) {
                            if (t && t.__esModule) return t;
                            var e = {};
                            if (null != t)
                                for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                            return e.default = t, e
                        }(n(2));

                    function o(t, e) {
                        for (var n = 0; n < e.length; n++) {
                            var r = e[n];
                            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
                        }
                    }
                    var _ = {};

                    function f(t) {
                        for (var e = t.getAllResponseHeaders().replace(/\s+$/, "").split(/\n/), n = 0; n < e.length; n++) e[n] = e[n].replace(/\r/g, "").replace(/^\s+/, "").replace(/\s+$/, "");
                        return e
                    }
                    "object" == typeof window && void 0 !== window.XMLHttpRequest && (_ = {
                        XMLHttpRequest: XMLHttpRequest,
                        open: XMLHttpRequest.prototype.open,
                        send: XMLHttpRequest.prototype.send,
                        setRequestHeader: XMLHttpRequest.prototype.setRequestHeader
                    });
                    r(i, [{
                        key: "name",
                        value: function() {
                            return "instrument_xhr"
                        }
                    }, {
                        key: "addOptions",
                        value: function(t) {
                            t.addOption("xhr_instrumentation", {
                                type: "bool",
                                defaultValue: !1
                            }), t.addOption("xhr_url_inclusion_patterns", {
                                type: "array",
                                defaultValue: [/.*/]
                            }), t.addOption("xhr_url_exclusion_patterns", {
                                type: "array",
                                defaultValue: []
                            }), t.addOption("xhr_url_header_inclusion_patterns", {
                                type: "array",
                                defaultValue: [/.*/]
                            }), t.addOption("xhr_url_header_exclusion_patterns", {
                                type: "array",
                                defaultValue: []
                            }), t.addOption("include_cookies", {
                                type: "bool",
                                defaultValue: !0
                            })
                        }
                    }, {
                        key: "start",
                        value: function(t) {
                            var e;
                            this._enabled && (e = (this._tracer = t).options(), this._addServiceHostToExclusions(e), this._handleOptions({}, e), t.on("options", this._handleOptions))
                        }
                    }, {
                        key: "stop",
                        value: function() {
                            var t;
                            this._enabled && ((t = _.XMLHttpRequest.prototype).open = _.open, t.send = _.send)
                        }
                    }, {
                        key: "_handleOptions",
                        value: function(t, e) {
                            t.collector_host && this._addServiceHostToExclusions(e), !this._proxyInited && e.xhr_instrumentation && (this._proxyInited = !0, (e = _.XMLHttpRequest.prototype).setRequestHeader = this._instrumentSetRequestHeader(), e.open = this._instrumentOpen(), e.send = this._instrumentSend())
                        }
                    }, {
                        key: "_addServiceHostToExclusions",
                        value: function(t) {
                            var e, n;

                            function r(t) {
                                return ("" + t).replace(/[.*+?^${}()|[\]\\]/g, "\\$&")
                            }
                            0 !== t.collector_host.length && (e = r(t.collector_host), n = r(t.collector_port), t = [new RegExp("^https?://" + e + ":" + n)], "80" === n ? t.push(new RegExp("^http://" + e)) : "443" === n && t.push(new RegExp("^https://" + e)), this._internalExclusions = t)
                        }
                    }, {
                        key: "_isValidContext",
                        value: function() {
                            return "undefined" != typeof window && !!window.XMLHttpRequest && !!window.XMLHttpRequest.prototype
                        }
                    }, {
                        key: "_instrumentSetRequestHeader",
                        value: function() {
                            return function(t, e) {
                                return this.__requestHeaders = this.__requestHeaders || {}, this.__requestHeaders[t] = e, _.setRequestHeader.apply(this, arguments)
                            }
                        }
                    }, {
                        key: "_instrumentOpen",
                        value: function() {
                            var c = this,
                                l = this._tracer;
                            return function(e, n, t, r, o) {
                                if (!c._shouldTrace(l, this, n)) return _.open.apply(this, arguments);
                                var i = l.options(),
                                    s = l.startSpan("XMLHttpRequest");
                                l.addActiveRootSpan(s), this.__tracer_span = s, this.__tracer_url = n;
                                var a = {
                                    method: e,
                                    url: n,
                                    async: t,
                                    user: r
                                };
                                n && (a.url_pathname = n.split("?")[0]);
                                var u = p({}, a);
                                i.include_cookies && (u.cookies = function() {
                                    if ("undefined" == typeof document || !document.cookie) return null;
                                    for (var t = document.cookie.split(";"), e = {}, n = 0, r = 0; r < t.length; r++) {
                                        var o = t[r].split("=", 2);
                                        if (2 === o.length) {
                                            var i = o[0].replace(/^\s+/, "").replace(/\s+$/, "");
                                            e[i] = decodeURIComponent(o[1]);
                                            try {
                                                e[i] = JSON.parse(e[i])
                                            } catch (t) {}
                                            n++
                                        }
                                    }
                                    return 0 < n ? e : null
                                }());
                                i = void 0 === t || t;
                                i && this.addEventListener("readystatechange", function() {
                                    var t;
                                    0 === this.readyState ? s.log({
                                        readyState: 0,
                                        event: "unsent"
                                    }) : 1 === this.readyState ? s.log({
                                        readyState: 1,
                                        event: "sending"
                                    }) : 2 === this.readyState ? (s.log({
                                        readyState: 2,
                                        event: "headers received",
                                        method: e,
                                        url: n,
                                        openPayload: u,
                                        headers: f(this)
                                    }), s.addTags(a)) : 3 === this.readyState ? s.log({
                                        readyState: 3,
                                        event: "loading"
                                    }) : 4 === this.readyState ? (t = this.responseType, s.log({
                                        readyState: 4,
                                        url: n,
                                        method: e,
                                        headers: f(this),
                                        status: this.status,
                                        statusText: this.statusText,
                                        responseType: t
                                    }), l.removeActiveRootSpan(s), s.finish()) : s.log({
                                        readyState: this.readyState
                                    })
                                });
                                t = _.open.apply(this, arguments);
                                return i || (l.removeActiveRootSpan(s), s.finish()), t
                            }
                        }
                    }, {
                        key: "_instrumentSend",
                        value: function() {
                            var i = this,
                                s = this._tracer;
                            return function() {
                                var e = this;
                                if (!i._shouldTrace(s, this, this.__tracer_url)) return _.send.apply(this, arguments);
                                var t = this.__tracer_span;
                                if (!t) return _.send.apply(this, arguments);
                                var n = Array.prototype.slice.call(arguments),
                                    r = void 0;
                                if (1 === n.length) {
                                    n[0] && n[0].length && (r = n[0].length);
                                    try {
                                        n = JSON.parse(n[0])
                                    } catch (t) {}
                                }
                                var o, r = void 0 === r ? "" : ", data length=" + r;
                                return t.log({
                                    event: "send",
                                    data_length: r
                                }), i._shouldAddHeadersToRequest(s, this.__tracer_url) && (o = {}, s.inject(t.context(), a.FORMAT_HTTP_HEADERS, o), Object.keys(o).forEach(function(t) {
                                    _.setRequestHeader.call(e, t, o[t])
                                })), _.send.apply(this, arguments)
                            }
                        }
                    }, {
                        key: "_shouldTrace",
                        value: function(t, e, n) {
                            if (!t || !n) return !1;
                            t = t.options();
                            return !(t.disabled || this._internalExclusions.some(function(t) {
                                return t.test(n)
                            }) || t.xhr_url_exclusion_patterns.some(function(t) {
                                return t.test(n)
                            }) || !t.xhr_url_inclusion_patterns.some(function(t) {
                                return t.test(n)
                            }))
                        }
                    }, {
                        key: "_shouldAddHeadersToRequest",
                        value: function(t, e) {
                            if (!t || !e) return !1;
                            t = t.options();
                            return !t.disabled && !t.xhr_url_header_exclusion_patterns.some(function(t) {
                                return t.test(e)
                            }) && !!t.xhr_url_header_inclusion_patterns.some(function(t) {
                                return t.test(e)
                            })
                        }
                    }]), r = i;

                    function i() {
                        ! function(t) {
                            if (!(t instanceof i)) throw new TypeError("Cannot call a class as a function")
                        }(this), this._enabled = this._isValidContext(), this._proxyInited = !1, this._internalExclusions = [], this._tracer = null, this._handleOptions = this._handleOptions.bind(this)
                    }
                    t.exports = new r
                }, function(t, e, n) {
                    "use strict";
                    var r = function(t, e, n) {
                            return e && o(t.prototype, e), n && o(t, n), t
                        },
                        a = function(t, e) {
                            if (Array.isArray(t)) return t;
                            if (Symbol.iterator in Object(t)) return function(t, e) {
                                var n = [],
                                    r = !0,
                                    o = !1,
                                    i = void 0;
                                try {
                                    for (var s, a = t[Symbol.iterator](); !(r = (s = a.next()).done) && (n.push(s.value), !e || n.length !== e); r = !0);
                                } catch (t) {
                                    o = !0, i = t
                                } finally {
                                    try {
                                        !r && a.return && a.return()
                                    } finally {
                                        if (o) throw i
                                    }
                                }
                                return n
                            }(t, e);
                            throw new TypeError("Invalid attempt to destructure non-iterable instance")
                        },
                        u = function(t) {
                            if (t && t.__esModule) return t;
                            var e = {};
                            if (null != t)
                                for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                            return e.default = t, e
                        }(n(2));

                    function o(t, e) {
                        for (var n = 0; n < e.length; n++) {
                            var r = e[n];
                            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
                        }
                    }
                    var c = void 0;
                    "object" == typeof window && void 0 !== window.fetch && (c = window.fetch);
                    r(i, [{
                        key: "name",
                        value: function() {
                            return "instrument_fetch"
                        }
                    }, {
                        key: "addOptions",
                        value: function(t) {
                            t.addOption("fetch_instrumentation", {
                                type: "bool",
                                defaultValue: !1
                            }), t.addOption("fetch_url_inclusion_patterns", {
                                type: "array",
                                defaultValue: [/.*/]
                            }), t.addOption("fetch_url_exclusion_patterns", {
                                type: "array",
                                defaultValue: []
                            }), t.addOption("fetch_url_header_inclusion_patterns", {
                                type: "array",
                                defaultValue: [/.*/]
                            }), t.addOption("fetch_url_header_exclusion_patterns", {
                                type: "array",
                                defaultValue: []
                            }), t.addOption("include_cookies", {
                                type: "bool",
                                defaultValue: !0
                            })
                        }
                    }, {
                        key: "start",
                        value: function(t) {
                            var e;
                            this._enabled && (e = (this._tracer = t).options(), this._addServiceHostToExclusions(e), this._handleOptions({}, e), t.on("options", this._handleOptions))
                        }
                    }, {
                        key: "stop",
                        value: function() {
                            this._enabled && (window.fetch = c)
                        }
                    }, {
                        key: "_handleOptions",
                        value: function(t, e) {
                            t.collector_host && this._addServiceHostToExclusions(e), !this._proxyInited && e.fetch_instrumentation && (this._proxyInited = !0, window.fetch = this._instrumentFetch())
                        }
                    }, {
                        key: "_addServiceHostToExclusions",
                        value: function(t) {
                            var e, n;

                            function r(t) {
                                return ("" + t).replace(/[.*+?^${}()|[\]\\]/g, "\\$&")
                            }
                            0 !== t.collector_host.length && (e = r(t.collector_host), n = r(t.collector_port), t = [new RegExp("^https?://" + e + ":" + n)], "80" === n ? t.push(new RegExp("^http://" + e)) : "443" === n && t.push(new RegExp("^https://" + e)), this._internalExclusions = t)
                        }
                    }, {
                        key: "_isValidContext",
                        value: function() {
                            return "undefined" != typeof window && !!window.fetch
                        }
                    }, {
                        key: "_instrumentFetch",
                        value: function() {
                            var i = this,
                                s = this._tracer;
                            return function(t, e) {
                                var n = new Request(t, e),
                                    t = s.options();
                                if (!i._shouldTrace(s, n.url)) return c(n);
                                var r = s.startSpan("fetch");
                                s.addActiveRootSpan(r);
                                var o, e = new URL(n.url),
                                    e = {
                                        method: n.method,
                                        url: n.url,
                                        hash: e.hash,
                                        href: e.href,
                                        protocol: e.protocol,
                                        origin: e.origin,
                                        host: e.host,
                                        hostname: e.hostname,
                                        port: e.port,
                                        pathname: e.pathname,
                                        search: e.search
                                    };
                                return t.include_cookies && (e.cookies = function() {
                                    if ("undefined" == typeof document || !document.cookie) return null;
                                    for (var t = document.cookie.split(";"), e = {}, n = 0, r = 0; r < t.length; r++) {
                                        var o = t[r].split("=", 2);
                                        if (2 === o.length) {
                                            var i = o[0].replace(/^\s+/, "").replace(/\s+$/, "");
                                            e[i] = decodeURIComponent(o[1]);
                                            try {
                                                e[i] = JSON.parse(e[i])
                                            } catch (t) {}
                                            n++
                                        }
                                    }
                                    return 0 < n ? e : null
                                }()), i._shouldAddHeadersToRequest(s, n.url) && (o = {}, s.inject(r.context(), u.FORMAT_HTTP_HEADERS, o), Object.keys(o).forEach(function(t) {
                                    n.headers.get(t) || n.headers.set(t, o[t])
                                })), r.log({
                                    event: "sending",
                                    method: n.method,
                                    url: n.url,
                                    openPayload: e
                                }), r.addTags(e), c(n).then(function(i) {
                                    return i.ok || r.addTags({
                                        error: !0
                                    }), r.log({
                                        method: n.method,
                                        headers: function() {
                                            for (var t = {}, e = i.headers.entries(), n = 0; n < e.length; n++) {
                                                var r = e[n],
                                                    o = a(r, 2),
                                                    r = o[0],
                                                    o = o[1];
                                                t[r] = o
                                            }
                                            return t
                                        }(),
                                        status: i.status,
                                        statusText: i.statusText,
                                        responseType: i.type,
                                        url: i.url
                                    }), s.removeActiveRootSpan(r), r.finish(), i
                                }).catch(function(t) {
                                    throw r.addTags({
                                        error: !0
                                    }), s.removeActiveRootSpan(r), r.log({
                                        event: "error",
                                        error: t
                                    }), r.finish(), t
                                })
                            }
                        }
                    }, {
                        key: "_shouldTrace",
                        value: function(t, e) {
                            if (!t || !e) return !1;
                            t = t.options();
                            return !(t.disabled || this._internalExclusions.some(function(t) {
                                return t.test(e)
                            }) || t.fetch_url_exclusion_patterns.some(function(t) {
                                return t.test(e)
                            }) || !t.fetch_url_inclusion_patterns.some(function(t) {
                                return t.test(e)
                            }))
                        }
                    }, {
                        key: "_shouldAddHeadersToRequest",
                        value: function(t, e) {
                            if (!t || !e) return !1;
                            t = t.options();
                            return !t.disabled && !t.fetch_url_header_exclusion_patterns.some(function(t) {
                                return t.test(e)
                            }) && !!t.fetch_url_header_inclusion_patterns.some(function(t) {
                                return t.test(e)
                            })
                        }
                    }]), r = i;

                    function i() {
                        ! function(t) {
                            if (!(t instanceof i)) throw new TypeError("Cannot call a class as a function")
                        }(this), this._enabled = this._isValidContext(), this._proxyInited = !1, this._internalExclusions = [], this._tracer = null, this._handleOptions = this._handleOptions.bind(this)
                    }
                    t.exports = new r
                }, function(t, e, n) {
                    "use strict";
                    var r = function(t, e, n) {
                            return e && o(t.prototype, e), n && o(t, n), t
                        },
                        i = (n = n(0)) && n.__esModule ? n : {
                            default: n
                        };

                    function o(t, e) {
                        for (var n = 0; n < e.length; n++) {
                            var r = e[n];
                            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
                        }
                    }
                    r(s, [{
                        key: "name",
                        value: function() {
                            return "instrument_page_load"
                        }
                    }, {
                        key: "addOptions",
                        value: function(t) {
                            t.addOption("instrument_page_load", {
                                type: "bool",
                                defaultValue: !1
                            })
                        }
                    }, {
                        key: "start",
                        value: function(t) {
                            this._inited || (this._inited = !0, "object" == typeof window && "object" == typeof document && t.options().instrument_page_load && (this._ensureSpanStarted(t), document.addEventListener("readystatechange", this._handleReadyStateChange.bind(this))))
                        }
                    }, {
                        key: "stop",
                        value: function() {}
                    }, {
                        key: "_ensureSpanStarted",
                        value: function(t) {
                            this._span || (this._span = t.startSpan("document/load"), t.addActiveRootSpan(this._span))
                        }
                    }, {
                        key: "_handleReadyStateChange",
                        value: function() {
                            var t, e, n;
                            this._span && (t = this._span, n = void 0, "complete" === (e = document.readyState) && (n = {}, window.performance && performance.timing && (this._addTimingSpans(t, performance.timing), n["window.performance.timing"] = performance.timing)), t.logEvent("document.readystatechange " + e, n), "complete" === e && (t.tracer() && t.tracer().removeActiveRootSpan(t.tracer()), t.finish()))
                        }
                    }, {
                        key: "_copyNavigatorProperties",
                        value: function(t) {
                            var e, n = {};
                            for (e in t) try {
                                var r = t[e];
                                switch (e) {
                                    case "plugins":
                                        for (var o = [], i = 0; i < r.length; i++) {
                                            var s = r.item(i);
                                            o.push({
                                                name: s.name,
                                                description: s.description
                                            })
                                        }
                                        n[e] = o;
                                        break;
                                    case "mimeTypes":
                                        for (var a = [], u = 0; u < r.length; u++) {
                                            var c = r.item(u);
                                            a.push({
                                                type: c.type,
                                                description: c.description,
                                                suffixes: c.suffixes
                                            })
                                        }
                                        n[e] = a;
                                        break;
                                    default:
                                        n[e] = r
                                }
                            } catch (t) {}
                            return n
                        }
                    }, {
                        key: "_addTimingSpans",
                        value: function(r, t) {
                            var o = this;
                            r && (r.setTag("user_agent", navigator.userAgent), (0, i.default)(t, function(t, e) {
                                var n;
                                "number" == typeof t && 0 !== t && (n = void 0, "navigationStart" === e && "object" == typeof navigator && (n = {
                                    navigator: o._copyNavigatorProperties(navigator)
                                }), r.log({
                                    message: "document " + e,
                                    payload: n
                                }, t))
                            }), r.setBeginMicros(1e3 * t.navigationStart), r.tracer().startSpan("document/time_to_first_byte", {
                                childOf: r
                            }).setBeginMicros(1e3 * t.requestStart).setEndMicros(1e3 * t.responseStart).finish(), r.tracer().startSpan("document/response_transfer", {
                                childOf: r
                            }).setBeginMicros(1e3 * t.responseStart).setEndMicros(1e3 * t.responseEnd).finish(), r.tracer().startSpan("document/dom_load", {
                                childOf: r
                            }).setBeginMicros(1e3 * t.domLoading).setEndMicros(1e3 * t.domInteractive).finish())
                        }
                    }]), r = s;

                    function s() {
                        ! function(t) {
                            if (!(t instanceof s)) throw new TypeError("Cannot call a class as a function")
                        }(this), this._inited = !1, this._span = null
                    }
                    t.exports = new r
                }, function(t, e, n) {
                    "use strict";

                    function r(t, e) {
                        for (var n = 0; n < e.length; n++) {
                            var r = e[n];
                            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
                        }
                    }
                    Object.defineProperty(e, "__esModule", {
                        value: !0
                    });
                    var o = (function(t, e, n) {
                        return e && r(t.prototype, e), n && r(t, n), t
                    }(i, [{
                        key: "ensureConnection",
                        value: function(t) {
                            this._host = t.collector_host, this._port = t.collector_port, this._path = t.collector_path, this._encryption = t.collector_encryption
                        }
                    }, {
                        key: "report",
                        value: function(t, e, n, r) {
                            try {
                                t ? this._reportAsyncScript(e, n, r) : this._reportAJAX(e, n, r)
                            } catch (t) {
                                return r(t, null)
                            }
                        }
                    }, {
                        key: "_reportAJAX",
                        value: function(t, e, n) {
                            var r = JSON.stringify(e.toThrift()),
                                o = ("none" === this._encryption ? "http" : "https") + "://" + this._host + ":" + this._port + this._path + "/api/v0/reports",
                                e = new XMLHttpRequest;
                            e.open("POST", o), e.setRequestHeader("LightStep-Access-Token", t.getAccessToken()), e.setRequestHeader("Content-Type", "application/json"), e.onreadystatechange = function() {
                                if (4 === this.readyState) {
                                    var t = null,
                                        e = null;
                                    if (200 !== this.status) t = new Error("status code = " + this.status);
                                    else if (this.responseText) try {
                                        e = JSON.parse(this.responseText)
                                    } catch (e) {
                                        t = e
                                    } else t = new Error("unexpected empty response");
                                    return n(t, e)
                                }
                            }, e.send(r)
                        }
                    }, {
                        key: "_reportAsyncScript",
                        value: function(t, e, n) {
                            t = JSON.stringify(t.toThrift()), e = JSON.stringify(e.toThrift()), t = ("none" === this._encryption ? "http" : "https") + "://" + this._host + ":" + this._port + this._path + "/_rpc/v1/reports/uri_encoded?auth=" + encodeURIComponent(t) + "&report=" + encodeURIComponent(e), e = document.createElement("script");
                            e.async = !0, e.defer = !0, e.src = t, e.type = "text/javascript";
                            t = document.getElementsByTagName("head")[0];
                            return t && t.appendChild(e), n(null, null)
                        }
                    }]), i);

                    function i() {
                        ! function(t) {
                            if (!(t instanceof i)) throw new TypeError("Cannot call a class as a function")
                        }(this), this._host = "", this._port = 0, this._path = "", this._encryption = ""
                    }
                    e.default = o, t.exports = e.default
                }, function(t, e, n) {
                    "use strict";
                    t.exports = n(17).Thrift
                }, function(t, e, n) {
                    "use strict";
                    t.exports = n(17).crouton_thrift
                }, function(t, e, n) {
                    "use strict";
                    Object.defineProperty(e, "__esModule", {
                        value: !0
                    });
                    var r, o = function(t, e, n) {
                            return e && u(t.prototype, e), n && u(t, n), t
                        },
                        i = n(1),
                        s = (r = n(0)) && r.__esModule ? r : {
                            default: r
                        },
                        a = function(t) {
                            if (t && t.__esModule) return t;
                            var e = {};
                            if (null != t)
                                for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                            return e.default = t, e
                        }(n(3));

                    function u(t, e) {
                        for (var n = 0; n < e.length; n++) {
                            var r = e[n];
                            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
                        }
                    }
                    o(c, [{
                        key: "_clearOverLimits",
                        value: function() {
                            this._keysOverLimit = 0, this._valuesOverLimit = 0
                        }
                    }, {
                        key: "getNumKeysOverLimit",
                        value: function() {
                            return this._keysOverLimit
                        }
                    }, {
                        key: "getNumValuesOverLimit",
                        value: function() {
                            return this._valuesOverLimit
                        }
                    }, {
                        key: "toThrift",
                        value: function() {
                            var n = this;
                            this._clearOverLimits();
                            var r = [];
                            return (0, s.default)(this._fields, function(t, e) {
                                e && t && (e = n.getFieldKey(e), t = n.getFieldValue(t), r.push(new i.crouton_thrift.KeyValue({
                                    Key: e,
                                    Value: t
                                })))
                            }), new i.crouton_thrift.LogRecord({
                                timestamp_micros: this._timestampMicros,
                                fields: r
                            })
                        }
                    }, {
                        key: "getFieldKey",
                        value: function(t) {
                            t = a.toString(t);
                            return t.length > this._logFieldKeyHardLimit && (this._keysOverLimit += 1, t = t.substr(0, this._logFieldKeyHardLimit) + "..."), t
                        }
                    }, {
                        key: "getFieldValue",
                        value: function(t) {
                            var e = null;
                            if (t instanceof Error) try {
                                e = JSON.stringify(t, Object.getOwnPropertyNames(t))
                            } catch (t) {
                                e = "Could not encode value. Exception: " + t
                            } else if (t instanceof Object) try {
                                e = JSON.stringify(t, null, "  ")
                            } catch (t) {
                                e = "Could not encode value. Exception: " + t
                            } else e = a.toString(t);
                            return e.length > this._logFieldValueHardLimit && (this._valuesOverLimit += 1, e = e.substr(0, this._logFieldValueHardLimit) + "..."), e
                        }
                    }]), o = c;

                    function c(t, e, n, r) {
                        ! function(t) {
                            if (!(t instanceof c)) throw new TypeError("Cannot call a class as a function")
                        }(this), r instanceof Error && (r = {
                            stack: r.stack,
                            message: r.message
                        }), this._logFieldKeyHardLimit = t, this._logFieldValueHardLimit = e, this._timestampMicros = n, this._fields = r, this._keysOverLimit = 0, this._valuesOverLimit = 0
                    }
                    e.default = o, t.exports = e.default
                }, function(t, e, n) {
                    "use strict";
                    Object.defineProperty(e, "__esModule", {
                        value: !0
                    });
                    var r = function(t, e, n) {
                            return e && i(t.prototype, e), n && i(t, n), t
                        },
                        o = n(1);

                    function i(t, e) {
                        for (var n = 0; n < e.length; n++) {
                            var r = e[n];
                            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
                        }
                    }
                    r(s, [{
                        key: "getAccessToken",
                        value: function() {
                            return void 0 === this._accessToken || null === this._accessToken || 0 === this._accessToken.length ? "empty" : this._accessToken
                        }
                    }, {
                        key: "toThrift",
                        value: function() {
                            return new o.crouton_thrift.Auth({
                                access_token: this._accessToken
                            })
                        }
                    }]), r = s;

                    function s(t) {
                        ! function(t) {
                            if (!(t instanceof s)) throw new TypeError("Cannot call a class as a function")
                        }(this), this._accessToken = t
                    }
                    e.default = r, t.exports = e.default
                }, function(t, e, n) {
                    "use strict";
                    Object.defineProperty(e, "__esModule", {
                        value: !0
                    });
                    var r, o = function(t, e, n) {
                            return e && u(t.prototype, e), n && u(t, n), t
                        },
                        i = n(1),
                        s = (r = n(0)) && r.__esModule ? r : {
                            default: r
                        },
                        a = function(t) {
                            if (t && t.__esModule) return t;
                            var e = {};
                            if (null != t)
                                for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                            return e.default = t, e
                        }(n(3));

                    function u(t, e) {
                        for (var n = 0; n < e.length; n++) {
                            var r = e[n];
                            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
                        }
                    }
                    o(c, [{
                        key: "toThrift",
                        value: function() {
                            var n = [];
                            return (0, s.default)(this._attributes, function(t, e) {
                                n.push(new i.crouton_thrift.KeyValue({
                                    Key: a.toString(e),
                                    Value: a.toString(t)
                                }))
                            }), new i.crouton_thrift.Runtime({
                                guid: this._runtimeGUID,
                                start_micros: this._startMicros,
                                group_name: this._componentName,
                                attrs: n
                            })
                        }
                    }]), o = c;

                    function c(t, e, n, r) {
                        ! function(t) {
                            if (!(t instanceof c)) throw new TypeError("Cannot call a class as a function")
                        }(this), this._runtimeGUID = t, this._startMicros = e, this._componentName = n, this._attributes = r
                    }
                    e.default = o, t.exports = e.default
                }, function(t, e, n) {
                    "use strict";
                    Object.defineProperty(e, "__esModule", {
                        value: !0
                    });
                    var r, o = function(t, e, n) {
                            return e && u(t.prototype, e), n && u(t, n), t
                        },
                        i = n(1),
                        s = (r = n(0)) && r.__esModule ? r : {
                            default: r
                        },
                        a = function(t) {
                            if (t && t.__esModule) return t;
                            var e = {};
                            if (null != t)
                                for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                            return e.default = t, e
                        }(n(3));

                    function u(t, e) {
                        for (var n = 0; n < e.length; n++) {
                            var r = e[n];
                            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
                        }
                    }
                    o(c, [{
                        key: "getSpanRecords",
                        value: function() {
                            return this._spanRecords
                        }
                    }, {
                        key: "getInternalLogs",
                        value: function() {
                            return this._internalLogs
                        }
                    }, {
                        key: "getCounters",
                        value: function() {
                            return this._counters
                        }
                    }, {
                        key: "toThrift",
                        value: function() {
                            var e = this;
                            (0, s.default)(this._spanRecords, function(t) {
                                t.runtime_guid = e._runtimeGUID
                            });
                            var n = [];
                            (0, s.default)(this._counters, function(t, e) {
                                0 !== t && n.push(new i.crouton_thrift.MetricsSample({
                                    name: a.toString(e),
                                    double_value: a.toNumber(t)
                                }))
                            });
                            var r = [];
                            return (0, s.default)(this._spanRecords, function(t) {
                                r.push(t._toThrift())
                            }), new i.crouton_thrift.ReportRequest({
                                runtime: this._runtime.toThrift(),
                                oldest_micros: this._oldestMicros,
                                youngest_micros: this._youngestMicros,
                                span_records: r,
                                internal_logs: this._internalLogs,
                                internal_metrics: new i.crouton_thrift.Metrics({
                                    counts: n
                                }),
                                timestamp_offset_micros: this._timestampOffsetMicros
                            })
                        }
                    }]), o = c;

                    function c(t, e, n, r, o, i, s) {
                        ! function(t) {
                            if (!(t instanceof c)) throw new TypeError("Cannot call a class as a function")
                        }(this), this._runtime = t, this._oldestMicros = e, this._youngestMicros = n, this._spanRecords = r, this._internalLogs = o, this._counters = i, this._timestampOffsetMicros = s
                    }
                    e.default = o, t.exports = e.default
                }, function(t, e, n) {
                    "use strict";

                    function r(t, e) {
                        for (var n = 0; n < e.length; n++) {
                            var r = e[n];
                            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
                        }
                    }
                    Object.defineProperty(e, "__esModule", {
                        value: !0
                    });
                    var o = (function(t, e, n) {
                        return e && r(t.prototype, e), n && r(t, n), t
                    }(i, [{
                        key: "inject",
                        value: function(t, e) {
                            return this._tracer._error("Unsupported format: " + this._name), null
                        }
                    }, {
                        key: "extract",
                        value: function(t) {
                            this._tracer._error("Unsupported format: " + this._name)
                        }
                    }]), i);

                    function i(t, e) {
                        ! function(t) {
                            if (!(t instanceof i)) throw new TypeError("Cannot call a class as a function")
                        }(this), this._tracer = t, this._name = e
                    }
                    e.default = o, t.exports = e.default
                }, function(t, e, n) {
                    "use strict";
                    var r = function(t, e, n) {
                            return e && i(t.prototype, e), n && i(t, n), t
                        },
                        o = (n = n(0)) && n.__esModule ? n : {
                            default: n
                        };

                    function i(t, e) {
                        for (var n = 0; n < e.length; n++) {
                            var r = e[n];
                            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
                        }
                    }
                    var s = 7,
                        a = 36e8,
                        r = (r(u, [{
                            key: "addSample",
                            value: function(t, e, n, r) {
                                var o = Number.MAX_VALUE,
                                    i = 0;
                                0 < t && 0 < e && 0 < n && 0 < r && (o = r - t - (n - e), i = (e - t + (n - r)) / 2), this._samples.length === s + 1 && this._samples.shift(), this._samples.push({
                                    delayMicros: o,
                                    offsetMicros: i
                                }), this._currentOffsetAge++, this._localStoreSet({
                                    timestamp_micros: this._nowMicros(),
                                    samples: this._samples
                                }), this.update()
                            }
                        }, {
                            key: "update",
                            value: function() {
                                var e, n = Number.MAX_VALUE,
                                    r = 0;
                                (0, o.default)(this._samples, function(t) {
                                    t.delayMicros < n && (n = t.delayMicros, r = t.offsetMicros)
                                }), r !== this._currentOffsetMicros && ((e = 0, o.default)(this._samples, function(t) {
                                    e += Math.pow(r - t.offsetMicros, 2)
                                }), e = Math.sqrt(e / this._samples.length), (this._currentOffsetAge > s || Math.abs(this._currentOffsetMicros - r) < 3 * e) && (this._currentOffsetMicros = r, this._currentOffsetAge = 0))
                            }
                        }, {
                            key: "offsetMicros",
                            value: function() {
                                return Math.floor(this._currentOffsetMicros)
                            }
                        }, {
                            key: "isReady",
                            value: function() {
                                return 3 < this._samples.length
                            }
                        }, {
                            key: "activeSampleCount",
                            value: function() {
                                return this._samples.length
                            }
                        }]), u);

                    function u(t) {
                        ! function(t) {
                            if (!(t instanceof u)) throw new TypeError("Cannot call a class as a function")
                        }(this), this._nowMicros = t.nowMicros, this._localStoreGet = t.localStoreGet, this._localStoreSet = t.localStoreSet, this._samples = [], this._currentOffsetMicros = 0, this._currentOffsetAge = s + 1;
                        t = this._localStoreGet();
                        t && t.timestamp_micros && t.timestamp_micros > this._nowMicros() - a && (this._samples = t.samples.slice(-(s + 1))), this.update()
                    }
                    t.exports = r
                }, function(t, e, n) {
                    "use strict";
                    var r = function(t, e, n) {
                            return e && i(t.prototype, e), n && i(t, n), t
                        },
                        o = n(1);

                    function i(t, e) {
                        for (var n = 0; n < e.length; n++) {
                            var r = e[n];
                            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
                        }
                    }
                    var s = n(6),
                        a = n(3),
                        r = (r(u, [{
                            key: "record",
                            value: function() {
                                return this._record
                            }
                        }, {
                            key: "end",
                            value: function() {
                                this._runtime._addLogRecord(this._record)
                            }
                        }, {
                            key: "timestamp",
                            value: function(t) {
                                return this._record.timestamp_micros = a.toNumber(t), this
                            }
                        }, {
                            key: "message",
                            value: function(t) {
                                return this._record.message = a.toString(t), this
                            }
                        }, {
                            key: "level",
                            value: function(t) {
                                return this._record.level = s.LOG_LEVEL_TO_STRING[t] || null, t >= s.LOG_ERROR && this.error(!0), this
                            }
                        }, {
                            key: "span",
                            value: function(t) {
                                return void 0 !== t && (this._record.span_guid = a.toString(t)), this
                            }
                        }, {
                            key: "name",
                            value: function(t) {
                                return this._record.stable_name = a.toString(t), this
                            }
                        }, {
                            key: "error",
                            value: function(t) {
                                return this._record.error_flag = a.toBoolean(t), this
                            }
                        }, {
                            key: "payload",
                            value: function(t) {
                                return void 0 !== t && (this._record.payload_json = this._encodePayload(t)), this
                            }
                        }, {
                            key: "_encodePayload",
                            value: function(t) {
                                var e = null;
                                try {
                                    e = JSON.stringify(t)
                                } catch (t) {
                                    return
                                }
                                return e
                            }
                        }]), u);

                    function u(t) {
                        ! function(t) {
                            if (!(t instanceof u)) throw new TypeError("Cannot call a class as a function")
                        }(this), this._runtime = t, this._record = new o.crouton_thrift.LogRecord({
                            timestamp_micros: t._platform.nowMicros(),
                            runtime_guid: null,
                            span_guid: null,
                            stable_name: null,
                            message: null,
                            level: null,
                            thread_id: null,
                            filename: null,
                            line_number: null,
                            stack_frames: null,
                            payload_json: null,
                            error_flag: null
                        })
                    }
                    t.exports = r
                }, function(t, e, n) {
                    "use strict";
                    var r = function(t, e, n) {
                            return e && i(t.prototype, e), n && i(t, n), t
                        },
                        o = (n = n(0)) && n.__esModule ? n : {
                            default: n
                        };

                    function i(t, e) {
                        for (var n = 0; n < e.length; n++) {
                            var r = e[n];
                            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
                        }
                    }
                    r(s, [{
                        key: "setOptions",
                        value: function(t) {
                            var n = this;
                            (0, o.default)(t, function(t, e) {
                                n.options[e] = t
                            })
                        }
                    }]), r = s;

                    function s() {
                        ! function(t) {
                            if (!(t instanceof s)) throw new TypeError("Cannot call a class as a function")
                        }(this), this.options = {}
                    }
                    t.exports = new r
                }, function(t) {
                    t.exports = {
                        name: "lightstep-tracer",
                        version: "0.30.2-no-protobuf",
                        main: "index.js",
                        types: "index.d.ts",
                        browser: "browser.js",
                        engines: {
                            node: ">=8.0.0"
                        },
                        scripts: {
                            test: "rm -f test/results/*.json && node node_modules/mocha/bin/mocha -c test/unittest_node.js",
                            version: "make build && git add -A dist"
                        },
                        license: "MIT",
                        repository: {
                            type: "git",
                            url: "http://github.com/lightstep/lightstep-tracer-javascript.git"
                        },
                        dependencies: {
                            async: "1.5.0",
                            eventemitter3: "1.1.1",
                            hex2dec: "1.0.1",
                            opentracing: "^0.14.4",
                            "source-map-support": "0.3.3",
                            thrift: "0.13.0"
                        },
                        devDependencies: {
                            "babel-cli": "6.14.0",
                            "babel-core": "^6.26.3",
                            "babel-loader": "7",
                            "babel-plugin-add-module-exports": "^1.0.0",
                            "babel-plugin-check-es2015-constants": "6.7.2",
                            "babel-plugin-syntax-object-rest-spread": "^6.13.0",
                            "babel-plugin-transform-es2015-arrow-functions": "6.5.2",
                            "babel-plugin-transform-es2015-block-scoped-functions": "6.6.5",
                            "babel-plugin-transform-es2015-block-scoping": "^6.26.0",
                            "babel-plugin-transform-es2015-classes": "6.6.5",
                            "babel-plugin-transform-es2015-computed-properties": "6.6.5",
                            "babel-plugin-transform-es2015-destructuring": "6.6.5",
                            "babel-plugin-transform-es2015-duplicate-keys": "6.6.4",
                            "babel-plugin-transform-es2015-literals": "6.5.0",
                            "babel-plugin-transform-es2015-modules-commonjs": "6.7.4",
                            "babel-plugin-transform-es2015-object-super": "6.6.5",
                            "babel-plugin-transform-es2015-parameters": "6.7.0",
                            "babel-plugin-transform-es2015-spread": "^6.6.5",
                            "babel-plugin-transform-es2015-sticky-regex": "6.5.0",
                            "babel-plugin-transform-es2015-template-literals": "6.6.5",
                            "babel-plugin-transform-es2015-unicode-regex": "6.5.0",
                            "babel-plugin-transform-object-rest-spread": "^6.26.0",
                            "babel-polyfill": "6.3.14",
                            "babel-preset-es2015": "6.3.13",
                            chai: "3.4.1",
                            clone: "1.0.2",
                            colors: "1.1.2",
                            eslint: "^6.8.0",
                            "eslint-config-airbnb": "^18.0.1",
                            "eslint-plugin-import": "^2.20.0",
                            "eslint-plugin-jsx-a11y": "^6.2.3",
                            "eslint-plugin-react": "^7.18.0",
                            express: "^4.16.3",
                            "fetch-mock": "^9.2.1",
                            istanbul: "^0.4.5",
                            mocha: "^5.2.0",
                            shelljs: "0.5.3",
                            sinon: "^9.0.1",
                            "sprintf-js": "1.0.3",
                            underscore: "1.8.3",
                            "watch-trigger": "0.0.5",
                            webpack: "^4.25.1",
                            "webpack-cli": "^3.1.2"
                        }
                    }
                }, function(t, e, n) {
                    "use strict";
                    var r = function(t, e, n) {
                        return e && o(t.prototype, e), n && o(t, n), t
                    };

                    function o(t, e) {
                        for (var n = 0; n < e.length; n++) {
                            var r = e[n];
                            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
                        }
                    }
                    var i = n(6),
                        r = (r(s, [{
                            key: "name",
                            value: function() {
                                return "log_to_console"
                            }
                        }, {
                            key: "addOptions",
                            value: function(t) {
                                t.addOption("log_to_console", {
                                    type: "bool",
                                    defaultValue: !1
                                }), t.on("options", this._optionsCb)
                            }
                        }, {
                            key: "start",
                            value: function(t, e) {
                                this._tracer = t
                            }
                        }, {
                            key: "stop",
                            value: function() {
                                this._tracer.removeListener("options", this._optionsCb)
                            }
                        }, {
                            key: "_handleOptions",
                            value: function(t, e, n) {
                                e = e.log_to_console;
                                this._enabled !== e && (this._enabled = e, this._enabled ? n.on("log_added", this._logAddedCb) : n.removeListener("log_added", this._logAddedCb))
                            }
                        }, {
                            key: "_handleLogAdded",
                            value: function(t) {
                                var e = i.LOG_STRING_TO_LEVEL[t.level],
                                    n = t.message;
                                if (n) {
                                    var r = t.payload_json;
                                    if (r) try {
                                        r = JSON.parse(r)
                                    } catch (t) {}
                                    switch (e) {
                                        case i.LOG_ERROR:
                                        case i.LOG_FATAL:
                                            void 0 !== r ? console.error(n, r) : console.error(n);
                                            break;
                                        case i.LOG_WARN:
                                            void 0 !== r ? console.warn(n, r) : console.warn(n);
                                            break;
                                        case i.LOG_INFO:
                                        default:
                                            void 0 !== r ? console.log(n, r) : console.log(n)
                                    }
                                }
                            }
                        }]), s);

                    function s() {
                        ! function(t) {
                            if (!(t instanceof s)) throw new TypeError("Cannot call a class as a function")
                        }(this), this._enabled = !1, this._tracer = null, this._optionsCb = this._handleOptions.bind(this), this._logAddedCb = this._handleLogAdded.bind(this)
                    }
                    t.exports = new r
                }, function(t, e, n) {
                    "use strict";
                    Object.defineProperty(e, "__esModule", {
                        value: !0
                    });
                    var r = function(t, e, n) {
                            return e && o(t.prototype, e), n && o(t, n), t
                        },
                        n = (n = n(7)) && n.__esModule ? n : {
                            default: n
                        };

                    function o(t, e) {
                        for (var n = 0; n < e.length; n++) {
                            var r = e[n];
                            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
                        }
                    }
                    var i = "x-b3-",
                        r = (function(t, e) {
                            if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                            t.prototype = Object.create(e && e.prototype, {
                                constructor: {
                                    value: t,
                                    enumerable: !1,
                                    writable: !0,
                                    configurable: !0
                                }
                            }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
                        }(s, n.default), r(s, [{
                            key: "inject",
                            value: function(t, n) {
                                var r = this;
                                if (n) {
                                    if ("object" == typeof n) {
                                        var e = t.traceGUID();
                                        return 32 === e.length && "0000000000000000" === e.substr(0, 16) && (e = e.substr(16)), n[this._carrierPrefix + "spanid"] = t._guid, n[this._carrierPrefix + "traceid"] = e, t._sampled ? n[this._carrierPrefix + "sampled"] = "1" : n[this._carrierPrefix + "sampled"] = "0", t.forEachBaggageItem(function(t, e) {
                                            n["" + r._baggagePrefix + t] = e
                                        }), n
                                    }
                                    this._tracer._error("Unexpected '" + typeof n + "' FORMAT_TEXT_MAP carrier in call to inject")
                                } else this._tracer._error("Unexpected null carrier in call to inject")
                            }
                        }]), s);

                    function s(t) {
                        ! function(t) {
                            if (!(t instanceof s)) throw new TypeError("Cannot call a class as a function")
                        }(this);
                        t = function(t, e) {
                            if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                            return !e || "object" != typeof e && "function" != typeof e ? t : e
                        }(this, Object.getPrototypeOf(s).call(this, t));
                        return t._carrierPrefix = i, t
                    }
                    e.default = r, t.exports = e.default
                }, function(t, e, n) {
                    "use strict";
                    Object.defineProperty(e, "__esModule", {
                        value: !0
                    });
                    var r = function(t, e, n) {
                            return e && i(t.prototype, e), n && i(t, n), t
                        },
                        u = s(n(0)),
                        c = s(n(5)),
                        o = s(n(7));

                    function i(t, e) {
                        for (var n = 0; n < e.length; n++) {
                            var r = e[n];
                            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
                        }
                    }

                    function s(t) {
                        return t && t.__esModule ? t : {
                            default: t
                        }
                    }
                    var a = "x-datadog-",
                        r = (r(l, [{
                            key: "inject",
                            value: function(t, n) {
                                var r = this;
                                if (n) {
                                    if ("object" == typeof n) return n[this._carrierPrefix + "parent-id"] = parseInt(t._guid, 16).toString(), n[this._carrierPrefix + "trace-id"] = parseInt(t.traceGUID(), 16).toString(), t._sampled ? n[this._carrierPrefix + "sampling-priority"] = "1" : n[this._carrierPrefix + "sampling-priority"] = "0", t.forEachBaggageItem(function(t, e) {
                                        n["" + r._baggagePrefix + t] = e
                                    }), n;
                                    this._tracer._error("Unexpected '" + typeof n + "' FORMAT_TEXT_MAP carrier in call to inject")
                                } else this._tracer._error("Unexpected null carrier in call to inject")
                            }
                        }, {
                            key: "extract",
                            value: function(t) {
                                var n = this,
                                    r = 0,
                                    o = null,
                                    i = null,
                                    s = !0;
                                if ((0, u.default)(t, function(t, e) {
                                        if ((e = e.toLowerCase()).substr(0, n._carrierPrefix.length) === n._carrierPrefix) switch (e.substr(n._carrierPrefix.length)) {
                                            case "trace-id":
                                                r++, i = parseInt(t, 10).toString(16);
                                                break;
                                            case "parent-id":
                                                r++, o = parseInt(t, 10).toString(16);
                                                break;
                                            case "sampling-priority":
                                                0 === t && (s = !1);
                                                break;
                                            default:
                                                n._tracer._error("Unrecognized carrier key '" + e + "' with recognized prefix. Ignoring.")
                                        }
                                    }), 0 === r) return null;
                                if (r < 2) return this._tracer._error("Only found a partial SpanContext: " + t), null;
                                var a = new c.default(o, i, s);
                                return (0, u.default)(t, function(t, e) {
                                    (e = e.toLowerCase()).substr(0, n._baggagePrefix.length) === n._baggagePrefix && (e = e.substr(n._baggagePrefix.length), a.setBaggageItem(e, t))
                                }), a
                            }
                        }]), l);

                    function l(t) {
                        ! function(t) {
                            if (!(t instanceof l)) throw new TypeError("Cannot call a class as a function")
                        }(this), this._tracer = t, this._baggagePrefix = o.default, this._carrierPrefix = a
                    }
                    e.default = r, t.exports = e.default
                }])
            },
            348: function(t, e) {
                "use strict";
                Object.defineProperty(e, "__esModule", {
                    value: !0
                });

                function n(t) {
                    this.buffer = t
                }
                e.default = n
            },
            617: function(t, e) {
                "use strict";
                Object.defineProperty(e, "__esModule", {
                    value: !0
                }), e.FORMAT_BINARY = "binary", e.FORMAT_TEXT_MAP = "text_map", e.FORMAT_HTTP_HEADERS = "http_headers", e.REFERENCE_CHILD_OF = "child_of", e.REFERENCE_FOLLOWS_FROM = "follows_from"
            },
            524: function(t, e) {
                "use strict";
                Object.defineProperty(e, "__esModule", {
                    value: !0
                }), e.SPAN_KIND = "span.kind", e.SPAN_KIND_RPC_CLIENT = "client", e.SPAN_KIND_RPC_SERVER = "server", e.SPAN_KIND_MESSAGING_PRODUCER = "producer", e.SPAN_KIND_MESSAGING_CONSUMER = "consumer", e.ERROR = "error", e.COMPONENT = "component", e.SAMPLING_PRIORITY = "sampling.priority", e.PEER_SERVICE = "peer.service", e.PEER_HOSTNAME = "peer.hostname", e.PEER_ADDRESS = "peer.address", e.PEER_HOST_IPV4 = "peer.ipv4", e.PEER_HOST_IPV6 = "peer.ipv6", e.PEER_PORT = "peer.port", e.HTTP_URL = "http.url", e.HTTP_METHOD = "http.method", e.HTTP_STATUS_CODE = "http.status_code", e.MESSAGE_BUS_DESTINATION = "message_bus.destination", e.DB_INSTANCE = "db.instance", e.DB_STATEMENT = "db.statement", e.DB_TYPE = "db.type", e.DB_USER = "db.user"
            },
            482: function(t, e, n) {
                "use strict";
                Object.defineProperty(e, "__esModule", {
                    value: !0
                });
                var r = n(617),
                    o = n(709),
                    i = n(959);
                e.childOf = function(t) {
                    return t instanceof i.default && (t = t.context()), new o.default(r.REFERENCE_CHILD_OF, t)
                }, e.followsFrom = function(t) {
                    return t instanceof i.default && (t = t.context()), new o.default(r.REFERENCE_FOLLOWS_FROM, t)
                }
            },
            459: function(t, e, n) {
                "use strict";
                var r, o = this && this.__extends || (r = function(t, e) {
                    return (r = Object.setPrototypeOf || {
                            __proto__: []
                        }
                        instanceof Array && function(t, e) {
                            t.__proto__ = e
                        } || function(t, e) {
                            for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n])
                        })(t, e)
                }, function(t, e) {
                    function n() {
                        this.constructor = t
                    }
                    r(t, e), t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n)
                });
                Object.defineProperty(e, "__esModule", {
                    value: !0
                });
                var i, n = n(346),
                    s = new n.default,
                    a = null;

                function u() {
                    return null !== i && i.apply(this, arguments) || this
                }
                var c = new(i = n.default, o(u, i), u.prototype.startSpan = function() {
                    var t = a || s;
                    return t.startSpan.apply(t, arguments)
                }, u.prototype.inject = function() {
                    var t = a || s;
                    return t.inject.apply(t, arguments)
                }, u.prototype.extract = function() {
                    var t = a || s;
                    return t.extract.apply(t, arguments)
                }, u);
                e.initGlobalTracer = function(t) {
                    a = t
                }, e.globalTracer = function() {
                    return c
                }
            },
            847: function(t, n, e) {
                "use strict";

                function r(t) {
                    for (var e in t) n.hasOwnProperty(e) || (n[e] = t[e])
                }
                Object.defineProperty(n, "__esModule", {
                    value: !0
                });
                var o = e(348);
                n.BinaryCarrier = o.default;
                var i = e(524);
                n.Tags = i;
                o = e(332), i = e(709);
                n.Reference = i.default;
                i = e(959);
                n.Span = i.default;
                i = e(598);
                n.SpanContext = i.default;
                i = e(346);
                n.Tracer = i.Tracer;
                i = e(465);
                n.MockTracer = i.MockTracer, r(e(459)), r(e(617)), r(e(482)), o.initialize()
            },
            465: function(t, e, n) {
                "use strict";
                Object.defineProperty(e, "__esModule", {
                    value: !0
                });
                var r = n(893);
                e.MockContext = r.default;
                r = n(4);
                e.MockSpan = r.default;
                n = n(645);
                e.MockTracer = n.default
            },
            893: function(t, e, n) {
                "use strict";
                var r, o = this && this.__extends || (r = function(t, e) {
                    return (r = Object.setPrototypeOf || {
                            __proto__: []
                        }
                        instanceof Array && function(t, e) {
                            t.__proto__ = e
                        } || function(t, e) {
                            for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n])
                        })(t, e)
                }, function(t, e) {
                    function n() {
                        this.constructor = t
                    }
                    r(t, e), t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n)
                });
                Object.defineProperty(e, "__esModule", {
                    value: !0
                });
                var i, n = n(847),
                    o = (i = n.SpanContext, o(s, i), s.prototype.span = function() {
                        return this._span
                    }, s);

                function s(t) {
                    var e = i.call(this) || this;
                    return e._span = t, e
                }
                e.MockContext = o, e.default = o
            },
            442: function(t, e) {
                "use strict";
                Object.defineProperty(e, "__esModule", {
                    value: !0
                });
                var n = (r.prototype.firstSpanWithTagValue = function(t, e) {
                    t = this.spansByTag[t];
                    if (!t) return null;
                    e = t[e];
                    return e ? e[0] : null
                }, r);

                function r(t) {
                    var o = this;
                    this.spans = t, this.spansByUUID = {}, this.spansByTag = {}, this.debugSpans = [], this.unfinishedSpans = [], t.forEach(function(n) {
                        0 === n._finishMs && o.unfinishedSpans.push(n), o.spansByUUID[n.uuid()] = n, o.debugSpans.push(n.debug());
                        var r = n.tags();
                        Object.keys(r).forEach(function(t) {
                            var e = r[t];
                            o.spansByTag[t] = o.spansByTag[t] || {}, o.spansByTag[t][e] = o.spansByTag[t][e] || [], o.spansByTag[t][e].push(n)
                        })
                    })
                }
                e.MockReport = n, e.default = n
            },
            4: function(t, e, n) {
                "use strict";
                var r, o = this && this.__extends || (r = function(t, e) {
                    return (r = Object.setPrototypeOf || {
                            __proto__: []
                        }
                        instanceof Array && function(t, e) {
                            t.__proto__ = e
                        } || function(t, e) {
                            for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n])
                        })(t, e)
                }, function(t, e) {
                    function n() {
                        this.constructor = t
                    }
                    r(t, e), t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n)
                });
                Object.defineProperty(e, "__esModule", {
                    value: !0
                });
                var i, s = n(847),
                    a = n(893),
                    o = (i = s.Span, o(u, i), u.prototype._context = function() {
                        return new a.default(this)
                    }, u.prototype._setOperationName = function(t) {
                        this._operationName = t
                    }, u.prototype._addTags = function(t) {
                        for (var e = 0, n = Object.keys(t); e < n.length; e++) {
                            var r = n[e];
                            this._tags[r] = t[r]
                        }
                    }, u.prototype._log = function(t, e) {
                        this._logs.push({
                            fields: t,
                            timestamp: e
                        })
                    }, u.prototype._finish = function(t) {
                        this._finishMs = t || Date.now()
                    }, u.prototype.uuid = function() {
                        return this._uuid
                    }, u.prototype.operationName = function() {
                        return this._operationName
                    }, u.prototype.durationMs = function() {
                        return this._finishMs - this._startMs
                    }, u.prototype.tags = function() {
                        return this._tags
                    }, u.prototype.tracer = function() {
                        return this._mockTracer
                    }, u.prototype._generateUUID = function() {
                        return "" + ("00000000" + Math.abs(4294967295 * Math.random() | 0).toString(16)).substr(-8) + ("00000000" + Math.abs(4294967295 * Math.random() | 0).toString(16)).substr(-8)
                    }, u.prototype.addReference = function(t) {}, u.prototype.debug = function() {
                        var t = {
                            uuid: this._uuid,
                            operation: this._operationName,
                            millis: [this._finishMs - this._startMs, this._startMs, this._finishMs]
                        };
                        return Object.keys(this._tags).length && (t.tags = this._tags), t
                    }, u);

                function u(t) {
                    var e = i.call(this) || this;
                    return e._mockTracer = t, e._uuid = e._generateUUID(), e._startMs = Date.now(), e._finishMs = 0, e._operationName = "", e._tags = {}, e._logs = [], e
                }
                e.MockSpan = o, e.default = o
            },
            645: function(t, e, n) {
                "use strict";
                var r, o = this && this.__extends || (r = function(t, e) {
                    return (r = Object.setPrototypeOf || {
                            __proto__: []
                        }
                        instanceof Array && function(t, e) {
                            t.__proto__ = e
                        } || function(t, e) {
                            for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n])
                        })(t, e)
                }, function(t, e) {
                    function n() {
                        this.constructor = t
                    }
                    r(t, e), t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n)
                });
                Object.defineProperty(e, "__esModule", {
                    value: !0
                });
                var i, s = n(847),
                    a = n(442),
                    u = n(4),
                    o = (i = s.Tracer, o(c, i), c.prototype._startSpan = function(t, e) {
                        var n = this._allocSpan();
                        if (n.setOperationName(t), this._spans.push(n), e.references)
                            for (var r = 0, o = e.references; r < o.length; r++) {
                                var i = o[r];
                                n.addReference(i)
                            }
                        return n._startStack = (new Error).stack, n
                    }, c.prototype._inject = function(t, e, n) {
                        throw new Error("NOT YET IMPLEMENTED")
                    }, c.prototype._extract = function(t, e) {
                        throw new Error("NOT YET IMPLEMENTED")
                    }, c.prototype._allocSpan = function() {
                        return new u.default(this)
                    }, c.prototype.clear = function() {
                        this._spans = []
                    }, c.prototype.report = function() {
                        return new a.default(this._spans)
                    }, c);

                function c() {
                    var t = i.call(this) || this;
                    return t._spans = [], t
                }
                e.MockTracer = o, e.default = o
            },
            332: function(t, e, n) {
                "use strict";
                Object.defineProperty(e, "__esModule", {
                    value: !0
                });
                var r = n(959),
                    o = n(598),
                    i = n(346);
                e.tracer = null, e.spanContext = null, e.span = null, e.initialize = function() {
                    e.tracer = new i.default, e.span = new r.default, e.spanContext = new o.default
                }
            },
            709: function(t, e, n) {
                "use strict";
                Object.defineProperty(e, "__esModule", {
                    value: !0
                });
                var r = n(959),
                    n = (o.prototype.type = function() {
                        return this._type
                    }, o.prototype.referencedContext = function() {
                        return this._referencedContext
                    }, o);

                function o(t, e) {
                    this._type = t, this._referencedContext = e instanceof r.default ? e.context() : e
                }
                e.default = n
            },
            959: function(t, e, n) {
                "use strict";
                Object.defineProperty(e, "__esModule", {
                    value: !0
                });
                var r = n(332),
                    n = (o.prototype.context = function() {
                        return this._context()
                    }, o.prototype.tracer = function() {
                        return this._tracer()
                    }, o.prototype.setOperationName = function(t) {
                        return this._setOperationName(t), this
                    }, o.prototype.setBaggageItem = function(t, e) {
                        return this._setBaggageItem(t, e), this
                    }, o.prototype.getBaggageItem = function(t) {
                        return this._getBaggageItem(t)
                    }, o.prototype.setTag = function(t, e) {
                        var n;
                        return this._addTags(((n = {})[t] = e, n)), this
                    }, o.prototype.addTags = function(t) {
                        return this._addTags(t), this
                    }, o.prototype.log = function(t, e) {
                        return this._log(t, e), this
                    }, o.prototype.logEvent = function(t, e) {
                        return this._log({
                            event: t,
                            payload: e
                        })
                    }, o.prototype.finish = function(t) {
                        this._finish(t)
                    }, o.prototype._context = function() {
                        return r.spanContext
                    }, o.prototype._tracer = function() {
                        return r.tracer
                    }, o.prototype._setOperationName = function(t) {}, o.prototype._setBaggageItem = function(t, e) {}, o.prototype._getBaggageItem = function(t) {}, o.prototype._addTags = function(t) {}, o.prototype._log = function(t, e) {}, o.prototype._finish = function(t) {}, o);

                function o() {}
                e.Span = n, e.default = n
            },
            598: function(t, e) {
                "use strict";
                Object.defineProperty(e, "__esModule", {
                    value: !0
                });
                var n = (r.prototype.toTraceId = function() {
                    return ""
                }, r.prototype.toSpanId = function() {
                    return ""
                }, r);

                function r() {}
                e.SpanContext = n, e.default = n
            },
            346: function(t, e, n) {
                "use strict";
                Object.defineProperty(e, "__esModule", {
                    value: !0
                });
                var r = n(482),
                    o = n(332),
                    i = n(959),
                    n = (s.prototype.startSpan = function(t, e) {
                        var n;
                        return void 0 === e && (e = {}), e.childOf && (n = r.childOf(e.childOf), e.references ? e.references.push(n) : e.references = [n], delete e.childOf), this._startSpan(t, e)
                    }, s.prototype.inject = function(t, e, n) {
                        return t instanceof i.default && (t = t.context()), this._inject(t, e, n)
                    }, s.prototype.extract = function(t, e) {
                        return this._extract(t, e)
                    }, s.prototype._startSpan = function(t, e) {
                        return o.span
                    }, s.prototype._inject = function(t, e, n) {}, s.prototype._extract = function(t, e) {
                        return o.spanContext
                    }, s);

                function s() {}
                e.Tracer = n, e.default = n
            }
        },
        r = {};

    function R(t) {
        if (r[t]) return r[t].exports;
        var e = r[t] = {
            exports: {}
        };
        return n[t].call(e.exports, e, e.exports, R), e.exports
    }! function() {
        "use strict";

        function e(t, e) {
            t.log({
                message: e
            })
        }

        function n(t) {
            t.setTag("error", "true")
        }

        function t(t) {
            var e = l.hostnames,
                n = t || (null === (n = window.location) || void 0 === n ? void 0 : n.hostname);
            return -1 < n.indexOf(e.prod) || -1 < n.indexOf(e.dev)
        }
        var r, o, i, s, a, u, c = HeaderScripts,
            l = {
                environments: {
                    dev: "Development",
                    prod: "Production"
                },
                metaData: (h = document.querySelector('meta[name="roblox-tracer-meta-data"]'), v = Number.isNaN(null == h || null === (r = h.dataset) || void 0 === r ? void 0 : r.sampleRate) ? 0 : parseInt(null == h || null === (v = h.dataset) || void 0 === v ? void 0 : v.sampleRate, 10), {
                    accessToken: null == h || null === (o = h.dataset) || void 0 === o ? void 0 : o.accessToken,
                    serviceName: null !== (i = null == h || null === (i = h.dataset) || void 0 === i ? void 0 : i.serviceName) && void 0 !== i ? i : "Web",
                    tracerEnabled: "true" === (null == h || null === (s = h.dataset) || void 0 === s ? void 0 : s.tracerEnabled),
                    apiSitesRequestAllowList: null !== (a = null == h || null === (a = h.dataset) || void 0 === a ? void 0 : a.apiSitesRequestAllowList) && void 0 !== a ? a : "",
                    sampleRate: v,
                    isInstrumentPagePerformanceEnabled: null !== (g = "true" === (null == h || null === (g = h.dataset) || void 0 === g ? void 0 : g.isInstrumentPagePerformanceEnabled)) && g
                }),
                pageName: (v = document.querySelector('meta[name="page-meta"]'), null !== (b = null == v || null === (b = v.dataset) || void 0 === b ? void 0 : b.internalPageName) && void 0 !== b ? b : null),
                hostnames: {
                    prod: "roblox.com",
                    dev: "robloxlabs.com"
                }
            },
            p = R(847),
            _ = R(279),
            f = (null === c.environmentSites || void 0 === c.environmentSites ? void 0 : c.environmentSites.isTestSite) ? l.environments.dev : l.environments.prod,
            d = {
                initTracer: function(t, e) {
                    if (!l.metaData.accessToken) return !1;
                    e = new _.Tracer({
                        access_token: l.metaData.accessToken,
                        component_name: t,
                        tags: {
                            "service.version": f
                        },
                        instrument_page_load: e
                    });
                    return p.initGlobalTracer(e), e
                },
                createAndGetSpan: function(t, e) {
                    return p.globalTracer().startSpan(t, e)
                },
                finalizeSpan: function(t) {
                    t && t.finish()
                }
            },
            h = {
                setXHRRequestLogs: function(t) {
                    e(t, "request_sent")
                },
                setXHRResponseSuccessLogs: function(t) {
                    e(t, "request_ok")
                },
                setXHRResponseErrorLogs: function(t) {
                    t.log({
                        message: "request_failed"
                    })
                }
            },
            g = {
                setErrorTag: n,
                setXHRRequestTags: function(t, e) {
                    var n, r, o;
                    n = t, t = (r = e).component, e = r.method, r = r.url, n.setTag("span.kind", "client"), n.setTag("component", t), n.setTag("http.method", e), n.setTag("http.url", r), n.setTag("page.name", l.pageName), n.setTag("page.url", null !== (o = null === (r = window) || void 0 === r || null === (o = r.location) || void 0 === o ? void 0 : o.href) && void 0 !== o ? o : ""), n.setTag("user.agent", null !== (n = null === (n = navigator) || void 0 === n ? void 0 : n.userAgent) && void 0 !== n ? n : null)
                },
                setXHRResponseTags: function(t, e) {
                    t.setTag("http.status_code", null == e ? void 0 : e.status)
                },
                setXHRResponseErrorTags: function(t, e) {
                    n(t), t.setTag("http.status_code", null == e ? void 0 : e.status)
                },
                setPlaceIdTag: function(t, e) {
                    t.setTag("guid:place_id", e)
                },
                setDefaultTags: function(t) {
                    t.setTag("span.kind", "client")
                }
            },
            y = R(847),
            v = {
                httpRequestCarrier: function(t) {
                    var e = {};
                    return y.globalTracer().inject(t, y.FORMAT_HTTP_HEADERS, e), e
                },
                textMapCarrier: function(t) {
                    var e = {};
                    return y.globalTracer().inject(t, y.FORMAT_TEXT_MAP, e), e
                }
            },
            m = R(847),
            b = {
                httpRequestCarrier: function(t) {
                    return m.globalTracer().extract(m.FORMAT_HTTP_HEADERS, t)
                },
                textMapCarrier: function(t) {
                    return m.globalTracer().extract(m.FORMAT_TEXT_MAP, t)
                }
            },
            c = null == l || null === (T = l.metaData) || void 0 === T ? void 0 : T.sampleRate,
            T = Math.floor(100 * Math.random() + 1),
            O = (null == l || null === (u = l.metaData) || void 0 === u ? void 0 : u.tracerEnabled) && T <= c,
            E = null == l || null === (w = l.metaData) || void 0 === w ? void 0 : w.isInstrumentPagePerformanceEnabled,
            T = {
                isTracerEnabled: O,
                rootTracer: function() {
                    return O ? d.initTracer(l.metaData.serviceName, E) : null
                }
            },
            S = l.metaData.apiSitesRequestAllowList.split(","),
            c = {
                isApiSiteAvailableForTracing: function(e) {
                    return !(!t() || !t(e)) && (!!S.length && S.some(function(t) {
                        return e.includes(t)
                    }))
                }
            },
            w = {
                operationNames: {
                    httpRequest: "Web::HTTPRequest"
                }
            };
        T.rootTracer(), window.RobloxTracer = {
            isTracerEnabled: T.isTracerEnabled,
            instrumentation: d,
            logs: h,
            tags: g,
            inject: v,
            extract: b,
            apiSiteRequestValidator: c,
            tracerConstants: w
        }
    }()
}();
//# sourceMappingURL=https://js.rbxcdn.com/de7d2ffe46e64e50e0f8-robloxTracer.js.map

/* Bundle detector */
window.Roblox && window.Roblox.BundleDetector && window.Roblox.BundleDetector.bundleDetected("RobloxTracer");