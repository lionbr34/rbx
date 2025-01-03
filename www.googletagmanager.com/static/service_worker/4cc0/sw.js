'use strict';
var aa = function(a) {
        function b(d) {
            return a.next(d)
        }

        function c(d) {
            return a.throw(d)
        }
        return new Promise(function(d, e) {
            function f(g) {
                g.done ? d(g.value) : Promise.resolve(g.value).then(b, c).then(f, e)
            }
            f(a.next())
        })
    },
    h = function(a) {
        return aa(a())
    };
/*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
var n = this || self;
var r, x;
a: {
    for (var ba = ["CLOSURE_FLAGS"], A = n, B = 0; B < ba.length; B++)
        if (A = A[ba[B]], A == null) {
            x = null;
            break a
        }
    x = A
}
var ca = x && x[610401301];
r = ca != null ? ca : !1;
var E;
const da = n.navigator;
E = da ? da.userAgentData || null : null;

function F(a) {
    return r ? E ? E.brands.some(({
        brand: b
    }) => b && b.indexOf(a) != -1) : !1 : !1
}

function G(a) {
    var b;
    a: {
        const c = n.navigator;
        if (c) {
            const d = c.userAgent;
            if (d) {
                b = d;
                break a
            }
        }
        b = ""
    }
    return b.indexOf(a) != -1
};

function H() {
    return r ? !!E && E.brands.length > 0 : !1
}

function I() {
    return H() ? F("Chromium") : (G("Chrome") || G("CriOS")) && !(H() ? 0 : G("Edge")) || G("Silk")
};
!G("Android") || I();
I();
G("Safari") && (I() || (H() ? 0 : G("Coast")) || (H() ? 0 : G("Opera")) || (H() ? 0 : G("Edge")) || (H() ? F("Microsoft Edge") : G("Edg/")) || H() && F("Opera"));
var J = null,
    fa = function(a) {
        const b = a.length;
        let c = b * 3 / 4;
        c % 3 ? c = Math.floor(c) : "=.".indexOf(a[b - 1]) != -1 && (c = "=.".indexOf(a[b - 2]) != -1 ? c - 2 : c - 1);
        const d = new Uint8Array(c);
        let e = 0;
        ea(a, function(f) {
            d[e++] = f
        });
        return e !== c ? d.subarray(0, e) : d
    },
    ea = function(a, b) {
        function c(e) {
            for (; d < a.length;) {
                const f = a.charAt(d++),
                    g = J[f];
                if (g != null) return g;
                if (!/^[\s\xa0]*$/.test(f)) throw Error("Unknown base64 encoding at char: " + f);
            }
            return e
        }
        ha();
        let d = 0;
        for (;;) {
            const e = c(-1),
                f = c(0),
                g = c(64),
                k = c(64);
            if (k === 64 && e === -1) break;
            b(e <<
                2 | f >> 4);
            g != 64 && (b(f << 4 & 240 | g >> 2), k != 64 && b(g << 6 & 192 | k))
        }
    },
    ha = function() {
        if (!J) {
            J = {};
            var a = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""),
                b = ["+/=", "+/", "-_=", "-_.", "-_"];
            for (let c = 0; c < 5; c++) {
                const d = a.concat(b[c].split(""));
                for (let e = 0; e < d.length; e++) {
                    const f = d[e];
                    J[f] === void 0 && (J[f] = e)
                }
            }
        }
    };
/*

 Copyright 2020 Google LLC
 SPDX-License-Identifier: Apache-2.0
*/
var K = class extends Error {
    constructor(a) {
        super(a);
        Object.setPrototypeOf(this, K.prototype)
    }
};
K.prototype.name = "SecurityException";
var L = class extends Error {
    constructor(a) {
        super(a);
        Object.setPrototypeOf(this, L.prototype)
    }
};
L.prototype.name = "InvalidArgumentsException";

function M(...a) {
    let b = 0;
    for (let e = 0; e < arguments.length; e++) b += arguments[e].length;
    const c = new Uint8Array(b);
    let d = 0;
    for (let e = 0; e < arguments.length; e++) c.set(arguments[e], d), d += arguments[e].length;
    return c
}

function N(a) {
    const b = a.replace(/-/g, "+").replace(/_/g, "/");
    return O(globalThis.atob(b))
}

function ia(a) {
    let b = "";
    for (let c = 0; c < a.length; c += 1) b += String.fromCharCode(a[c]);
    return globalThis.btoa(b).replace(/=/g, "").replace(/\+/g, "-").replace(/\//g, "_")
}

function O(a) {
    const b = [];
    let c = 0;
    for (let d = 0; d < a.length; d++) {
        const e = a.charCodeAt(d);
        b[c++] = e
    }
    return new Uint8Array(b)
};
/*

 Copyright 2022 Google LLC
 SPDX-License-Identifier: Apache-2.0
*/
var ja = function(a, b, c, d) {
        return h(function*() {
            if (c.length < (a.o ? 28 : 16)) throw new K("ciphertext too short");
            if (b.length !== 12) throw new K("IV must be 12 bytes");
            const e = {
                name: "AES-GCM",
                iv: b,
                tagLength: 128
            };
            d && (e.additionalData = d);
            const f = a.o ? new Uint8Array(c.subarray(12)) : c;
            try {
                return new Uint8Array(yield globalThis.crypto.subtle.decrypt(e, a.key, f))
            } catch (g) {
                throw new K(g.toString());
            }
        })
    },
    ka = class {
        constructor({
            key: a,
            o: b
        }) {
            this.key = a;
            this.o = b
        }
        encrypt(a, b, c) {
            const d = this;
            return h(function*() {
                if (a.length !==
                    12) throw new K("IV must be 12 bytes");
                const e = {
                    name: "AES-GCM",
                    iv: a,
                    tagLength: 128
                };
                c && (e.additionalData = c);
                const f = yield globalThis.crypto.subtle.encrypt(e, d.key, b);
                return d.o ? M(a, new Uint8Array(f)) : new Uint8Array(f)
            })
        }
    };

function la({
    key: a,
    o: b
}) {
    return h(function*() {
        if (![16, 32].includes(a.length)) throw new L("unsupported AES key size: ${n}");
        const c = yield globalThis.crypto.subtle.importKey("raw", a, {
            name: "AES-GCM",
            length: a.length
        }, !1, ["encrypt", "decrypt"]);
        return new ka({
            key: c,
            o: b
        })
    })
};

function ma(a) {
    switch (a) {
        case 1:
            return "P-256";
        case 2:
            return "P-384";
        case 3:
            return "P-521"
    }
}

function P(a) {
    switch (a) {
        case "P-256":
            return 1;
        case "P-384":
            return 2;
        case "P-521":
            return 3
    }
    throw new L("unknown curve: " + a);
}

function R(a) {
    switch (a) {
        case 1:
            return 32;
        case 2:
            return 48;
        case 3:
            return 66
    }
}

function na(a, b) {
    return h(function*() {
        const c = a.algorithm.namedCurve;
        if (!c) throw new L("namedCurve must be provided");
        const d = Object.assign({}, {
                "public": b
            }, a.algorithm),
            e = 8 * R(P(c)),
            f = yield globalThis.crypto.subtle.deriveBits(d, a, e);
        return new Uint8Array(f)
    })
}

function oa(a) {
    return h(function*() {
        return yield globalThis.crypto.subtle.generateKey({
            name: "ECDH",
            namedCurve: a
        }, !0, ["deriveKey", "deriveBits"])
    })
}

function pa(a) {
    return h(function*() {
        const b = yield globalThis.crypto.subtle.exportKey("jwk", a);
        if (b.crv === void 0) throw new L("crv must be provided");
        const c = R(P(b.crv));
        if (b.x === void 0) throw new L("x must be provided");
        if (b.y === void 0) throw new L("y must be provided");
        const d = N(b.x);
        if (d.length !== c) throw new L(`x-coordinate byte-length is invalid (got: ${d.length}, want: ${c}).`);
        const e = N(b.y);
        if (e.length !== c) throw new L(`y-coordinate byte-length is invalid (got: ${e.length}, want: ${c}).`);
        return b
    })
}

function qa(a) {
    return h(function*() {
        const b = a.crv;
        if (!b) throw new L("crv must be provided");
        return yield globalThis.crypto.subtle.importKey("jwk", a, {
            name: "ECDH",
            namedCurve: b
        }, !0, [])
    })
};
var ra = S(1, 0),
    sa = S(2, 16),
    ta = S(2, 18),
    ua = S(2, 1),
    va = S(2, 3),
    wa = S(2, 1),
    xa = S(2, 2),
    ya = O("KEM"),
    za = O("HPKE"),
    Ba = O("HPKE-v1");

function S(a, b) {
    const c = new Uint8Array(a);
    for (let d = 0; d < a; d++) c[d] = b >> 8 * (a - d - 1) & 255;
    return c
}

function Ca({
    J: a,
    I: b,
    D: c
}) {
    return M(za, a, b, c)
}

function Da({
    m: a,
    l: b,
    i: c
}) {
    return M(Ba, c, O(a), b)
}

function Ea({
    s: a,
    info: b,
    i: c,
    length: d
}) {
    return M(S(2, d), Ba, c, O(a), b)
}

function Fa(a, b) {
    return h(function*() {
        var c; {
            const d = R(P(a));
            if (b.length !== 1 + 2 * d || b[0] !== 4) throw new K("invalid point");
            c = {
                kty: "EC",
                crv: a,
                x: ia(new Uint8Array(b.subarray(1, 1 + d))),
                y: ia(new Uint8Array(b.subarray(1 + d, b.length))),
                ext: !0
            }
        }
        return yield qa(c)
    })
}

function Ga(a) {
    return h(function*() {
        const b = a.algorithm,
            c = yield pa(a);
        if (!c.crv) throw new K("Curve has to be defined.");
        var d; {
            const e = R(P(b.namedCurve)),
                f = c.x,
                g = c.y;
            if (f === void 0) throw new L("x must be provided");
            if (g === void 0) throw new L("y must be provided");
            const k = new Uint8Array(1 + 2 * e),
                l = N(g),
                p = N(f);
            k.set(l, 1 + 2 * e - l.length);
            k.set(p, 1 + e - p.length);
            k[0] = 4;
            d = k
        }
        return d
    })
};
var Ha = class {
    constructor(a) {
        this.v = a
    }
    seal({
        key: a,
        nonce: b,
        K: c,
        A: d
    }) {
        const e = this;
        return h(function*() {
            if (a.length !== e.v) throw new K("Unexpected key length: " + a.length.toString());
            return yield(yield la({
                key: a,
                o: !1
            })).encrypt(b, c, d)
        })
    }
    open({
        key: a,
        nonce: b,
        F: c,
        A: d
    }) {
        const e = this;
        return h(function*() {
            if (a.length !== e.v) throw new K("Unexpected key length: " + a.length.toString());
            return ja(yield la({
                key: a,
                o: !1
            }), b, c, d)
        })
    }
};
var Ia = class {};

function T(a) {
    if (a == null || !(a instanceof Uint8Array)) throw new L("input must be a non null Uint8Array");
};
var Ja = function(a, b) {
        return h(function*() {
            T(b);
            const c = yield globalThis.crypto.subtle.sign({
                name: "HMAC",
                hash: {
                    name: a.hash
                }
            }, a.key, b);
            return new Uint8Array(c.slice(0, a.g))
        })
    },
    Ka = class extends Ia {
        constructor(a, b, c) {
            super();
            this.hash = a;
            this.key = b;
            this.g = c
        }
    };

function La(a, b, c) {
    return h(function*() {
        T(b);
        if (!Number.isInteger(c)) throw new L("invalid tag size, must be an integer");
        if (c < 10) throw new L("tag too short, must be at least " + (10).toString() + " bytes");
        switch (a) {
            case "SHA-1":
                if (c > 20) throw new L("tag too long, must not be larger than 20 bytes");
                break;
            case "SHA-256":
                if (c > 32) throw new L("tag too long, must not be larger than 32 bytes");
                break;
            case "SHA-384":
                if (c > 48) throw new L("tag too long, must not be larger than 48 bytes");
                break;
            case "SHA-512":
                if (c >
                    64) throw new L("tag too long, must not be larger than 64 bytes");
                break;
            default:
                throw new L(a + " is not supported");
        }
        const d = yield globalThis.crypto.subtle.importKey("raw", b, {
            name: "HMAC",
            hash: {
                name: a
            },
            length: b.length * 8
        }, !1, ["sign", "verify"]);
        return new Ka(a, d, c)
    })
};
var Ma = function(a, b, c) {
        return h(function*() {
            T(b);
            const d = U(a);
            let e;
            ((e = c) == null ? 0 : e.length) || (c = new Uint8Array(d));
            T(c);
            return yield Ja(yield La(a.u, c, d), b)
        })
    },
    V = function(a, {
        l: b,
        m: c,
        i: d,
        salt: e
    }) {
        return h(function*() {
            return yield Ma(a, Da({
                m: c,
                l: b,
                i: d
            }), e)
        })
    },
    Na = function(a, b, c, d) {
        return h(function*() {
            if (!Number.isInteger(d)) throw new K("length must be an integer");
            if (d <= 0) throw new K("length must be positive");
            const e = U(a);
            if (d > 255 * e) throw new K("length too large");
            T(c);
            const f = yield La(a.u, b, e);
            let g =
                1,
                k = 0,
                l = new Uint8Array(0);
            const p = new Uint8Array(d);
            for (;;) {
                const q = new Uint8Array(l.length + c.length + 1);
                q.set(l, 0);
                q.set(c, l.length);
                q[q.length - 1] = g;
                l = yield Ja(f, q);
                if (k + l.length < d) p.set(l, k), k += l.length, g++;
                else {
                    p.set(l.subarray(0, d - k), k);
                    break
                }
            }
            return p
        })
    },
    Oa = function(a, {
        C: b,
        info: c,
        s: d,
        i: e,
        length: f
    }) {
        return h(function*() {
            return yield Na(a, b, Ea({
                s: d,
                info: c,
                i: e,
                length: f
            }), f)
        })
    },
    Pa = function(a, {
        l: b,
        m: c,
        info: d,
        s: e,
        i: f,
        length: g,
        salt: k
    }) {
        return h(function*() {
            const l = yield Ma(a, Da({
                m: c,
                l: b,
                i: f
            }), k);
            return yield Na(a,
                l, Ea({
                    s: e,
                    info: d,
                    i: f,
                    length: g
                }), g)
        })
    },
    U = function(a) {
        switch (a.u) {
            case "SHA-256":
                return 32;
            case "SHA-512":
                return 64
        }
    },
    W = class {
        constructor(a) {
            this.u = a
        }
    };
var Qa = function(a) {
        var b = a.g;
        const c = new Uint8Array(12);
        for (let f = 0; f < 12; f++) c[f] = Number(b >> BigInt(8 * (12 - f - 1))) & 255;
        var d = a.h;
        if (d.length !== c.length) throw new L("Both byte arrays should be of the same length");
        const e = new Uint8Array(d.length);
        for (let f = 0; f < e.length; f++) e[f] = d[f] ^ c[f];
        if (a.g >= a.j) throw new K("message limit reached");
        a.g += BigInt(1);
        return e
    },
    Ra = class {
        constructor(a, b, c, d) {
            this.B = a;
            this.key = b;
            this.h = c;
            this.aead = d;
            this.g = BigInt(0);
            this.j = (BigInt(1) << BigInt(96)) - BigInt(1)
        }
        seal(a, b) {
            const c =
                this;
            return h(function*() {
                const d = Qa(c);
                return yield c.aead.seal({
                    key: c.key,
                    nonce: d,
                    K: a,
                    A: b
                })
            })
        }
        open(a, b) {
            const c = this;
            return h(function*() {
                const d = Qa(c);
                return c.aead.open({
                    key: c.key,
                    nonce: d,
                    F: a,
                    A: b
                })
            })
        }
    };

function Sa(a, b, c, d, e, f) {
    return h(function*() {
        var g;
        a: {
            switch (e.v) {
                case 16:
                    g = wa;
                    break a;
                case 32:
                    g = xa;
                    break a
            }
            g = void 0
        }
        var k;
        a: {
            switch (d.u) {
                case "SHA-256":
                    k = ua;
                    break a;
                case "SHA-512":
                    k = va;
                    break a
            }
            k = void 0
        }
        const l = Ca({
                J: Ta(c),
                I: k,
                D: g
            }),
            p = V(d, {
                l: new Uint8Array(0),
                m: "psk_id_hash",
                i: l
            }),
            q = yield V(d, {
                l: f,
                m: "info_hash",
                i: l
            }), v = yield p, y = M(ra, v, q), m = yield V(d, {
                l: new Uint8Array(0),
                m: "secret",
                i: l,
                salt: b
            }), t = Oa(d, {
                C: m,
                info: y,
                s: "key",
                i: l,
                length: e.v
            }), u = yield Oa(d, {
                    C: m,
                    info: y,
                    s: "base_nonce",
                    i: l,
                    length: 12
                }), w =
                yield t;
        return new Ra(a, w, u, e)
    })
}

function Ua(a, b, c, d, e) {
    return h(function*() {
        const f = yield Va(b, a);
        return yield Sa(f.B, f.L, b, c, d, e)
    })
};
var Wa = function(a) {
        return h(function*() {
            return yield Ga(a.publicKey)
        })
    },
    Xa = class {
        constructor(a, b) {
            this.privateKey = a;
            this.publicKey = b
        }
    };

function Ya(a) {
    return h(function*() {
        Za(a.privateKey, "private");
        Za(a.publicKey, "public");
        return new Xa(a.privateKey, a.publicKey)
    })
}

function Za(a, b) {
    if (b !== a.type) throw new L(`keyPair ${b} key was of type ${a.type}`);
    const c = a.algorithm;
    if ("ECDH" !== c.name) throw new L(`keyPair ${b} key should be ECDH but found ${c.name}`);
};
var ab = function(a) {
        switch (a) {
            case 1:
                return new $a(new W("SHA-256"), 1);
            case 3:
                return new $a(new W("SHA-512"), 3)
        }
    },
    Ta = function(a) {
        switch (a.g) {
            case 1:
                return sa;
            case 3:
                return ta
        }
    },
    Va = function(a, b) {
        return h(function*() {
            const c = yield oa(ma(a.g));
            return yield a.h(b, yield Ya(c))
        })
    },
    bb = function(a, b, c, d) {
        return h(function*() {
            const e = M(c, d),
                f = M(ya, Ta(a));
            return yield Pa(a.j, {
                l: b,
                m: "eae_prk",
                info: e,
                s: "shared_secret",
                i: f,
                length: U(a.j)
            })
        })
    },
    $a = class {
        constructor(a, b) {
            this.j = a;
            this.g = b;
            this.TEST_ONLY = this.h
        }
        h(a,
            b) {
            const c = this;
            return h(function*() {
                const d = yield Fa(ma(c.g), a), e = na(b.privateKey, d), f = yield Wa(b), g = yield e;
                return {
                    L: yield bb(c, g, f, a), B: f
                }
            })
        }
    };
/*

 Copyright 2024 Google LLC
 SPDX-License-Identifier: Apache-2.0
*/
function cb(a, b, c) {
    var d;
    return h(function*() {
        d || (d = new Uint8Array(0));
        let e, f, g;
        switch (a) {
            case 1:
                e = ab(1);
                f = new W("SHA-256");
                g = new Ha(16);
                break;
            case 2:
                e = ab(3);
                f = new W("SHA-512");
                g = new Ha(32);
                break;
            default:
                throw new K(`Unknown HPKE parameters: ${a}`);
        }
        const k = yield Ua(b, e, f, g, d), l = yield k.seal(c, new Uint8Array(0));
        return M(k.B, l)
    })
};
const db = Number('_TEMPLATE_VARIABLE("var_encryption_timeout_ms")');

function eb(a) {
    try {
        const b = JSON.parse(a).keys,
            c = b[Math.floor(Math.random() * b.length)];
        return c && c.hpkePublicKey && c.hpkePublicKey.params && c.hpkePublicKey.params.kem && c.hpkePublicKey.params.kdf && c.hpkePublicKey.params.aead && c.hpkePublicKey.version !== void 0 && c.id && c.hpkePublicKey.publicKey ? c : void 0
    } catch (b) {}
}
var fb = function(a, b, c, d) {
        return h(function*() {
            if (!c) return X(9);
            if (!a.h) return X(a.status);
            try {
                let g;
                const k = fa((g = a.h) == null ? void 0 : g.hpkePublicKey.publicKey);
                if (!k || !a.g) return X(11);
                const l = fa(d(b)),
                    p = yield cb(a.g, k, l);
                var e;
                if (p.length <= 8192) e = String.fromCharCode.apply(null, p);
                else {
                    var f = "";
                    for (let v = 0; v < p.length; v += 8192) f += String.fromCharCode.apply(null, Array.prototype.slice.call(p, v, v + 8192));
                    e = f
                }
                let q = d(e);
                q = q.replace(/\//g, "_");
                q = q.replace(/\+/g, "-");
                return X(0, q)
            } catch (g) {
                return X(6)
            }
        })
    },
    hb = class {
        constructor(a) {
            this.status = 13;
            if (a) {
                var b = a.hpkePublicKey.params.kem,
                    c = a.hpkePublicKey.params.kdf,
                    d = a.hpkePublicKey.params.aead;
                b === "DHKEM_P521_HKDF_SHA512" && c === "HKDF_SHA512" && d === "AES_256_GCM" ? (this.g = 2, this.h = a) : b === "DHKEM_P256_HKDF_SHA256" && c === "HKDF_SHA256" && d === "AES_128_GCM" ? (this.g = 1, this.h = a) : this.status = 7
            } else this.status = 8
        }
        encrypt(a, b, c) {
            const d = fb(this, a, !!b.crypto, b.btoa);
            return c || !db ? d : Promise.race([d, gb().then(() => X(14))])
        }
    };

function X(a, b) {
    return a === 0 ? {
        cipherText: b,
        status: a
    } : {
        status: a
    }
}

function gb() {
    return new Promise(a => void setTimeout(a, db))
};

function ib(a) {
    switch (a) {
        case 0:
            break;
        case 9:
            return "e4";
        case 6:
            return "e5";
        case 14:
            return "e6";
        default:
            return "e7"
    }
};
const jb = /^[0-9A-Fa-f]{64}$/;

function kb(a) {
    try {
        return (new TextEncoder).encode(a)
    } catch (b) {
        const c = [];
        for (let d = 0; d < a.length; d++) {
            let e = a.charCodeAt(d);
            e < 128 ? c.push(e) : e < 2048 ? c.push(192 | e >> 6, 128 | e & 63) : e < 55296 || e >= 57344 ? c.push(224 | e >> 12, 128 | e >> 6 & 63, 128 | e & 63) : (e = 65536 + ((e & 1023) << 10 | a.charCodeAt(++d) & 1023), c.push(240 | e >> 18, 128 | e >> 12 & 63, 128 | e >> 6 & 63, 128 | e & 63))
        }
        return new Uint8Array(c)
    }
}

function lb(a, b) {
    if (a === "" || a === "e0") return Promise.resolve(a);
    let c;
    if ((c = b.crypto) == null ? 0 : c.subtle) {
        if (jb.test(a)) return Promise.resolve(a);
        try {
            const d = kb(a);
            return b.crypto.subtle.digest("SHA-256", d).then(e => {
                const f = Array.from(new Uint8Array(e)).map(g => String.fromCharCode(g)).join("");
                return b.btoa(f).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "")
            }).catch(() => "e2")
        } catch (d) {
            return Promise.resolve("e2")
        }
    } else return Promise.resolve("e1")
};
/*
 jQuery (c) 2005, 2012 jQuery Foundation, Inc. jquery.org/license.
*/
var mb = /\[object (Boolean|Number|String|Function|Array|Date|RegExp)\]/,
    nb = function(a) {
        var b;
        if (!(b = !a)) {
            var c;
            if (a == null) c = String(a);
            else {
                var d = mb.exec(Object.prototype.toString.call(Object(a)));
                c = d ? d[1].toLowerCase() : "object"
            }
            b = c != "object"
        }
        if (b || a.nodeType || a == a.window) return !1;
        try {
            if (a.constructor && !Object.prototype.hasOwnProperty.call(Object(a), "constructor") && !Object.prototype.hasOwnProperty.call(Object(a.constructor.prototype), "isPrototypeOf")) return !1
        } catch (f) {
            return !1
        }
        for (var e in a);
        return e ===
            void 0 || Object.prototype.hasOwnProperty.call(Object(a), e)
    };
var ob = function(a, b) {
        b = a.g + b;
        let c = b.indexOf("\n\n");
        for (; c !== -1;) {
            var d;
            a: {
                const [w, C] = b.substring(0, c).split("\n");
                if (w.indexOf("event: message") === 0 && C.indexOf("data: ") === 0) try {
                    d = JSON.parse(C.substring(C.indexOf(":") + 1));
                    break a
                } catch (z) {}
                d = void 0
            }
            var e = a,
                f = d;
            if (f) {
                var g = f.send_pixel,
                    k = f.options,
                    l = e.h;
                if (g) {
                    var p = g || [];
                    if (Array.isArray(p)) {
                        var q = nb(k) ? k : {};
                        for (const w of p) l(w, q)
                    }
                }
                var v = f.create_iframe,
                    y = f.options,
                    m = e.j;
                if (v && m) {
                    var t = v || [];
                    if (Array.isArray(t)) {
                        var u = nb(y) ? y : {};
                        for (const w of t) m(w,
                            u)
                    }
                }
            }
            b = b.substring(c + 2);
            c = b.indexOf("\n\n")
        }
        a.g = b
    },
    pb = class {
        constructor(a) {
            this.h = a;
            this.g = ""
        }
    };
var qb = {
    M: 0,
    N: 1,
    0: "GET",
    1: "POST"
};
var rb = function(a, b, c) {
        return h(function*() {
            const d = eb(c.encryptionKeyString || ""),
                e = a.g.performance.now();
            return (new hb(d)).encrypt(b, a.g).then(f => {
                const g = a.g.performance.now(),
                    k = [`emkid.${d==null?void 0:d.id}~`, `ev.${(f.cipherText||"").replace(/./g,"*")}`, `&_es=${f.status}`];
                e && g && k.push(`&_est=${Math.round(g)-Math.round(e)}`);
                return k.join("")
            }, () => [`ec.${ib(15)}`, "&_es=15"].join("")).catch(() => [`ec.${ib(16)}`, "&_es=16"].join(""))
        })
    },
    ub = function(a, b) {
        return h(function*() {
            if (!b.url) return {
                failureType: 9,
                command: 0,
                data: "url required."
            };
            const c = yield sb(a, b);
            if ("failureType" in c) return c;
            yield tb(a, c, b);
            return c
        })
    },
    vb = function(a, b, c, d) {
        h(function*() {
            let e;
            const f = b.commandType,
                g = b.params;
            switch (f) {
                case 0:
                    e = yield ub(a, g);
                    break;
                default:
                    e = {
                        failureType: 8,
                        command: f,
                        data: `Command with type ${f} unknown.`
                    }
            }
            "failureType" in e ? d(e) : c(e)
        })
    },
    sb = function(a, b) {
        return h(function*() {
            function c(m) {
                return h(function*() {
                    const [t, u] = m.split("|");
                    let [w, C] = t.split("."), z = C, D = k[w];
                    D || (D = t, z = "");
                    const Z = Q => h(function*() {
                        try {
                            return yield v(u)(Q)
                        } catch (Y) {
                            throw new wb(Y.message);
                        }
                    });
                    if (!z) {
                        if (typeof D === "string") return yield Z(D);
                        const Q = D,
                            Y = Object.keys(Q).map(Aa => h(function*() {
                                const yb = yield Z(Q[Aa]);
                                return `${Aa}=${yb}`
                            }));
                        return (yield Promise.all(Y)).join("&")
                    }
                    return typeof D === "object" && D[z] ? yield Z(D[z]): m
                })
            }

            function d(m) {
                return h(function*() {
                    let t, u = "";
                    for (; m.match(q) && u !== m;) {
                        u = m;
                        t = m.matchAll(q);
                        const w = [...t].map(z => c(z[1])),
                            C = yield Promise.all(w);
                        C.length !== 0 && (m = m.replace(q, z => C.shift() || z))
                    }
                    return m
                })
            }
            let {
                url: e,
                body: f
            } = b;
            const {
                attributionReporting: g,
                templates: k,
                processResponse: l,
                method: p = 0
            } = b, q = RegExp("\\${([^${}]*?)}", "g"), v = m => {
                if (m == null) return u => h(function*() {
                    return u
                });
                const t = a.h[m];
                if (t == null) throw Error(`Unknown filter: ${m}`);
                return u => h(function*() {
                    return yield t(u, b)
                })
            };
            try {
                e = yield d(e), f = f ? yield d(f): void 0
            } catch (m) {
                return {
                    failureType: 9,
                    command: 0,
                    data: `Failed to inject template values: ${m}`
                }
            }
            const y = {
                method: qb[p],
                credentials: "include",
                body: p === 1 ? f : void 0,
                keepalive: !0,
                redirect: "follow"
            };
            l || (y.mode = "no-cors");
            g && (y.attributionReporting = {
                eventSourceEligible: !1,
                triggerEligible: !0
            });
            try {
                const m = yield a.g.fetch(e, y);
                return l && !m.ok ? {
                    failureType: 9,
                    command: 0,
                    data: "Fetch failed"
                } : {
                    data: l ? yield m.text(): e
                }
            } catch (m) {
                return {
                    failureType: 9,
                    command: 0,
                    data: `Fetch failed: ${m}`
                }
            }
        })
    },
    tb = function(a, b, c) {
        return h(function*() {
            if (c.processResponse) {
                var d = [];
                ob(new pb((e, f) => {
                    d.push(sb(a, {
                        url: e,
                        method: 0,
                        templates: c.templates,
                        processResponse: !1,
                        attributionReporting: f.attribution_reporting
                    }))
                }), b.data);
                return Promise.all(d)
            }
        })
    },
    xb = class {
        constructor(a) {
            this.g = a;
            this.h = {
                sha256: b => {
                    const c = this;
                    return h(function*() {
                        return yield lb(b, c.g)
                    })
                },
                encode: b => h(function*() {
                    return encodeURIComponent(b)
                }),
                encrypt: (b, c) => {
                    const d = this;
                    return h(function*() {
                        return yield rb(d, b, c)
                    })
                }
            }
        }
    };
class wb extends Error {
    constructor(a) {
        super(a)
    }
};
var zb = function(a, b, c) {
    a.g[b] == null && (a.g[b] = 0, a.h[b] = c, a.j++);
    a.g[b]++;
    return {
        targetId: a.id,
        clientCount: a.j,
        totalLifeMs: Math.round(c - a.H),
        heartbeatCount: a.g[b],
        clientLifeMs: Math.round(c - a.h[b])
    }
};
class Ab {
    constructor(a) {
        this.H = a;
        this.g = {};
        this.h = {};
        this.j = 0;
        this.id = String(Math.floor(Number.MAX_SAFE_INTEGER * Math.random()))
    }
}

function Bb(a) {
    return a.performance && a.performance.now() || Date.now()
}
var Cb = function(a, b) {
    class c {
        constructor(d, e) {
            this.h = d;
            this.g = e;
            this.j = new Ab(Bb(e))
        }
        G(d, e) {
            const f = d.clientId;
            if (d.type === 0) d.stats = zb(this.j, f, Bb(this.g)), e(d);
            else if (d.type === 1) try {
                this.h(d.command, g => {
                    d.result = g;
                    e(d)
                }, g => {
                    d.failure = g;
                    e(d)
                })
            } catch (g) {
                d.failure = {
                    failureType: 11,
                    data: g.toString()
                }, e(d)
            }
        }
    }
    return new c(a, b)
};
(function(a) {
    a.g.addEventListener("install", () => {
        a.g.skipWaiting()
    });
    a.g.addEventListener("activate", b => {
        b.waitUntil(a.g.clients.claim())
    });
    a.g.addEventListener("message", b => {
        const c = b.source;
        if (c) {
            var d = b.data,
                e = new Promise(f => {
                    a.h.G(d, g => {
                        c.postMessage(g);
                        f(void 0)
                    })
                });
            b.waitUntil(e)
        }
    })
})(new class {
    constructor(a) {
        this.g = a;
        const b = new xb(a);
        this.h = Cb((c, d, e) => {
            vb(b, c, d, e)
        }, a)
    }
}(self));