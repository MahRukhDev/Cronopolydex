(this["webpackJsonpcougar-cronos-frontend-farms"] = this["webpackJsonpcougar-cronos-frontend-farms"] || []).push([
    [12], { 1147: function(n, e, t) { "use strict"; var r = t(0),
                c = t(329),
                a = /%(.*?)%/,
                i = function(n, e, t) { var r = n.find((function(n) { return n.data.stringId === e })); if (r) { var c = r.data.text; return c.includes("%") ? function(n, e) { var t = a.exec(n)[0],
                                r = e.split(" ")[0]; return n.replace(t, r) }(c, t) : c } return t };
            e.a = function() { var n = Object(r.useContext)(c.a).translations; return function(e, t) { return "error" === n[0] ? t : n.length > 0 ? i(n, e, t) : t } } }, 1150: function(n, e, t) { "use strict";
            t.d(e, "b", (function() { return j })), t.d(e, "a", (function() { return d })), t.d(e, "j", (function() { return l })), t.d(e, "g", (function() { return x })), t.d(e, "i", (function() { return O })), t.d(e, "e", (function() { return m })), t.d(e, "f", (function() { return h })), t.d(e, "h", (function() { return g })), t.d(e, "c", (function() { return v })), t.d(e, "d", (function() { return w })); var r = t(0),
                c = t(328),
                a = t(69),
                i = t(16),
                o = t(32),
                u = t(334),
                s = t(79),
                b = t(158),
                f = ["library", "chainId"],
                p = function() { var n = Object(s.c)(),
                        e = n.library,
                        t = n.chainId,
                        c = Object(u.a)(n, f),
                        a = Object(r.useRef)(e),
                        p = Object(r.useState)(e || b.a),
                        j = Object(o.a)(p, 2),
                        d = j[0],
                        l = j[1]; return Object(r.useEffect)((function() { e !== a.current && (l(e || b.a), a.current = e) }), [e]), Object(i.a)({ library: d, chainId: null !== t && void 0 !== t ? t : parseInt("25", 10) }, c) },
                j = function(n) { var e = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
                        t = p(),
                        i = t.library,
                        o = t.account; return Object(r.useMemo)((function() { return Object(a.b)(n, e ? Object(c.d)(i, o) : null) }), [o, n, i, e]) },
                d = function() { var n = p().library; return Object(r.useMemo)((function() { return Object(a.a)(n.getSigner()) }), [n]) },
                l = function() { var n = p().library; return Object(r.useMemo)((function() { return Object(a.q)(n.getSigner()) }), [n]) },
                x = function(n) { var e = p().library; return Object(r.useMemo)((function() { return Object(a.l)(n, e.getSigner()) }), [n, e]) },
                O = function() { var n = p().library; return Object(r.useMemo)((function() { return Object(a.p)(n.getSigner()) }), [n]) },
                m = function() { var n = p().library; return Object(r.useMemo)((function() { return Object(a.h)(n.getSigner()) }), [n]) },
                h = function(n) { var e = p().library; return Object(r.useMemo)((function() { return Object(a.k)(n, e.getSigner()) }), [n, e]) },
                g = function(n) { var e = p().library; return Object(r.useMemo)((function() { return Object(a.o)(n, e.getSigner()) }), [n, e]) },
                v = function(n) { var e = p().library; return Object(r.useMemo)((function() { return Object(a.d)(n, e.getSigner()) }), [n, e]) },
                w = function(n) { var e = p().library; return Object(r.useMemo)((function() { return Object(a.e)(n, e.getSigner()) }), [n, e]) } }, 1159: function(n, e, t) { "use strict";
            t.d(e, "b", (function() { return x })), t.d(e, "c", (function() { return O })), t.d(e, "a", (function() { return m })), t.d(e, "d", (function() { return h })), t.d(e, "e", (function() { return g })); var r = t(57),
                c = t(6),
                a = t(1),
                i = t.n(a),
                o = t(0),
                u = t(79),
                s = t(44),
                b = t(133),
                f = t(1173),
                p = t(96),
                j = t(155),
                d = t(1150),
                l = t(204),
                x = function(n) { var e = Object(s.b)(),
                        t = Object(u.c)().account,
                        r = Object(d.e)(),
                        a = Object(l.a)(),
                        p = a.toastError,
                        j = a.toastSuccess; return { onReward: Object(o.useCallback)(Object(c.a)(i.a.mark((function c() { var a; return i.a.wrap((function(c) { for (;;) switch (c.prev = c.next) {
                                    case 0:
                                        return c.prev = 0, c.next = 3, Object(f.f)(r, n, t);
                                    case 3:
                                        return a = c.sent, c.next = 6, a.wait();
                                    case 6:
                                        return e(Object(b.a)(t)), j("Success", "Harvesting transaction confirmed"), c.abrupt("return", a);
                                    case 11:
                                        return c.prev = 11, c.t0 = c.catch(0), console.log(c.t0), p("An error occurred.", "Harvest unsuccessful, please try again"), c.abrupt("return", !1);
                                    case 16:
                                    case "end":
                                        return c.stop() } }), c, null, [
                                [0, 11]
                            ]) }))), [t, e, n, r, j, p]) } },
                O = function(n) { var e = Object(s.b)(),
                        t = Object(u.c)().account,
                        r = p.a.find((function(e) { return e.partnerId === n })),
                        a = Object(d.f)(n),
                        j = Object(l.a)(),
                        x = j.toastError,
                        O = j.toastSuccess; return { onReward: Object(o.useCallback)(Object(c.a)(i.a.mark((function n() { var c; return i.a.wrap((function(n) { for (;;) switch (n.prev = n.next) {
                                    case 0:
                                        return n.prev = 0, n.next = 3, Object(f.h)(a, r.poolId, t, r.referrer);
                                    case 3:
                                        return c = n.sent, n.next = 6, c.wait();
                                    case 6:
                                        return e(Object(b.c)(t)), O("Success", "Harvesting transaction confirmed"), n.abrupt("return", c);
                                    case 11:
                                        return n.prev = 11, n.t0 = n.catch(0), console.log(n.t0), x("An error occurred.", "Harvest unsuccessful, please try again"), n.abrupt("return", !1);
                                    case 16:
                                    case "end":
                                        return n.stop() } }), n, null, [
                                [0, 11]
                            ]) }))), [t, e, r.poolId, r.referrer, a, O, x]) } },
                m = function(n) { var e = Object(u.c)().account,
                        t = Object(d.e)(); return { onReward: Object(o.useCallback)(Object(c.a)(i.a.mark((function c() { var a; return i.a.wrap((function(c) { for (;;) switch (c.prev = c.next) {
                                    case 0:
                                        return a = n.reduce((function(n, c) { return [].concat(Object(r.a)(n), [Object(f.f)(t, c, e)]) }), []), c.abrupt("return", Promise.all(a));
                                    case 2:
                                    case "end":
                                        return c.stop() } }), c) }))), [e, n, t]) } },
                h = function(n) { var e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                        t = Object(s.b)(),
                        r = Object(u.c)(),
                        a = r.account,
                        p = Object(d.h)(n),
                        j = Object(d.e)(),
                        x = Object(l.a)(),
                        O = x.toastError,
                        m = x.toastSuccess,
                        h = Object(o.useCallback)(Object(c.a)(i.a.mark((function r() { var c; return i.a.wrap((function(r) { for (;;) switch (r.prev = r.next) {
                                    case 0:
                                        if (c = null, r.prev = 1, 0 !== n) { r.next = 8; break } return r.next = 5, Object(f.f)(j, 0, a);
                                    case 5:
                                        c = r.sent, r.next = 17; break;
                                    case 8:
                                        if (!e) { r.next = 14; break } return r.next = 11, Object(f.p)(p, a);
                                    case 11:
                                        c = r.sent, r.next = 17; break;
                                    case 14:
                                        return r.next = 16, Object(f.o)(p, a);
                                    case 16:
                                        c = r.sent;
                                    case 17:
                                        return r.next = 19, c.wait();
                                    case 19:
                                        t(Object(b.o)(n, a)), t(Object(b.n)(n, a)), m("Success", "Harvesting transaction confirmed"), r.next = 28; break;
                                    case 24:
                                        r.prev = 24, r.t0 = r.catch(1), console.log(r.t0), O("An error occurred.", "Harvest unsuccessful, please try again");
                                    case 28:
                                    case "end":
                                        return r.stop() } }), r, null, [
                                [1, 24]
                            ]) }))), [a, t, e, j, p, n, m, O]); return { onReward: h } },
                g = function(n) { var e = Object(s.b)(),
                        t = Object(u.c)().account,
                        r = Object(d.j)(),
                        a = Object(l.a)(),
                        b = a.toastError,
                        p = a.toastSuccess; return { onReward: Object(o.useCallback)(Object(c.a)(i.a.mark((function c() { var a; return i.a.wrap((function(c) { for (;;) switch (c.prev = c.next) {
                                    case 0:
                                        return c.prev = 0, c.next = 3, Object(f.t)(r, n, t);
                                    case 3:
                                        return a = c.sent, c.next = 6, a.wait();
                                    case 6:
                                        return e(Object(j.e)(t)), p("Success", "Harvesting transaction confirmed"), c.abrupt("return", a);
                                    case 11:
                                        return c.prev = 11, c.t0 = c.catch(0), console.log(c.t0), b("An error occurred.", "Harvest unsuccessful, please try again"), c.abrupt("return", !1);
                                    case 16:
                                    case "end":
                                        return c.stop() } }), c, null, [
                                [0, 11]
                            ]) }))), [t, e, n, r, p, b]) } } }, 1161: function(n, e, t) { "use strict"; var r, c = t(67),
                a = t(10),
                i = t(42),
                o = Object(a.e)(i.n)(r || (r = Object(c.a)(["\n    background-color: #27262cad;\n"])));
            e.a = o }, 1173: function(n, e, t) { "use strict";
            t.d(e, "a", (function() { return u })), t.d(e, "g", (function() { return s })), t.d(e, "b", (function() { return b })), t.d(e, "q", (function() { return f })), t.d(e, "i", (function() { return p })), t.d(e, "l", (function() { return j })), t.d(e, "m", (function() { return d })), t.d(e, "c", (function() { return l })), t.d(e, "r", (function() { return x })), t.d(e, "j", (function() { return O })), t.d(e, "n", (function() { return m })), t.d(e, "k", (function() { return h })), t.d(e, "d", (function() { return g })), t.d(e, "e", (function() { return v })), t.d(e, "f", (function() { return w })), t.d(e, "h", (function() { return y })), t.d(e, "o", (function() { return k })), t.d(e, "p", (function() { return S })), t.d(e, "t", (function() { return F })), t.d(e, "s", (function() { return z })), t.d(e, "u", (function() { return C })), t.d(e, "v", (function() { return A })); var r = t(6),
                c = t(1),
                a = t.n(c),
                i = t(118),
                o = t(1188),
                u = function() { var n = Object(r.a)(a.a.mark((function n(e, t, r) { return a.a.wrap((function(n) { for (;;) switch (n.prev = n.next) {
                                case 0:
                                    return n.abrupt("return", e.approve(t.address, i.a.constants.MaxUint256));
                                case 1:
                                case "end":
                                    return n.stop() } }), n) }))); return function(e, t, r) { return n.apply(this, arguments) } }(),
                s = function() { var n = Object(r.a)(a.a.mark((function n(e, t, r) { return a.a.wrap((function(n) { for (;;) switch (n.prev = n.next) {
                                case 0:
                                    return n.abrupt("return", e.approve(t, i.a.constants.MaxUint256));
                                case 1:
                                case "end":
                                    return n.stop() } }), n) }))); return function(e, t, r) { return n.apply(this, arguments) } }(),
                b = function() { var n = Object(r.a)(a.a.mark((function n(e, t, r) { return a.a.wrap((function(n) { for (;;) switch (n.prev = n.next) {
                                case 0:
                                    return n.abrupt("return", e.approve(t, i.a.constants.MaxUint256));
                                case 1:
                                case "end":
                                    return n.stop() } }), n) }))); return function(e, t, r) { return n.apply(this, arguments) } }(),
                f = function() { var n = Object(r.a)(a.a.mark((function n(e, t, r, c) { var i, u, s; return a.a.wrap((function(n) { for (;;) switch (n.prev = n.next) {
                                case 0:
                                    return i = new o.a, u = i.get("ref"), s = null !== u && void 0 !== u ? u : c, n.abrupt("return", e.deposit(t, r, s));
                                case 4:
                                case "end":
                                    return n.stop() } }), n) }))); return function(e, t, r, c) { return n.apply(this, arguments) } }(),
                p = function() { var n = Object(r.a)(a.a.mark((function n(e, t, r, c, i) { return a.a.wrap((function(n) { for (;;) switch (n.prev = n.next) {
                                case 0:
                                    if (!i) { n.next = 2; break } return n.abrupt("return", e.deposit(t, r, i));
                                case 2:
                                    return n.abrupt("return", e.deposit(t, r));
                                case 3:
                                case "end":
                                    return n.stop() } }), n) }))); return function(e, t, r, c, a) { return n.apply(this, arguments) } }(),
                j = function() { var n = Object(r.a)(a.a.mark((function n(e, t, r) { return a.a.wrap((function(n) { for (;;) switch (n.prev = n.next) {
                                case 0:
                                    return n.abrupt("return", e.deposit(t));
                                case 1:
                                case "end":
                                    return n.stop() } }), n) }))); return function(e, t, r) { return n.apply(this, arguments) } }(),
                d = function() { var n = Object(r.a)(a.a.mark((function n(e, t, r) { return a.a.wrap((function(n) { for (;;) switch (n.prev = n.next) {
                                case 0:
                                    return n.abrupt("return", e.deposit());
                                case 1:
                                case "end":
                                    return n.stop() } }), n) }))); return function(e, t, r) { return n.apply(this, arguments) } }(),
                l = function() { var n = Object(r.a)(a.a.mark((function n(e, t, r) { return a.a.wrap((function(n) { for (;;) switch (n.prev = n.next) {
                                case 0:
                                    return n.abrupt("return", e.deposit(t));
                                case 1:
                                case "end":
                                    return n.stop() } }), n) }))); return function(e, t, r) { return n.apply(this, arguments) } }(),
                x = function() { var n = Object(r.a)(a.a.mark((function n(e, t, r, c) { return a.a.wrap((function(n) { for (;;) switch (n.prev = n.next) {
                                case 0:
                                    return n.abrupt("return", e.withdraw(t, r));
                                case 1:
                                case "end":
                                    return n.stop() } }), n) }))); return function(e, t, r, c) { return n.apply(this, arguments) } }(),
                O = function() { var n = Object(r.a)(a.a.mark((function n(e, t, r, c) { return a.a.wrap((function(n) { for (;;) switch (n.prev = n.next) {
                                case 0:
                                    return n.abrupt("return", e.withdraw(t, r));
                                case 1:
                                case "end":
                                    return n.stop() } }), n) }))); return function(e, t, r, c) { return n.apply(this, arguments) } }(),
                m = function() { var n = Object(r.a)(a.a.mark((function n(e, t, r) { return a.a.wrap((function(n) { for (;;) switch (n.prev = n.next) {
                                case 0:
                                    return n.prev = 0, n.abrupt("return", e.withdraw(t));
                                case 4:
                                    return n.prev = 4, n.t0 = n.catch(0), console.log("error", n.t0), n.abrupt("return", !1);
                                case 8:
                                case "end":
                                    return n.stop() } }), n, null, [
                            [0, 4]
                        ]) }))); return function(e, t, r) { return n.apply(this, arguments) } }(),
                h = function() { var n = Object(r.a)(a.a.mark((function n(e, t, r) { return a.a.wrap((function(n) { for (;;) switch (n.prev = n.next) {
                                case 0:
                                    return n.abrupt("return", e.emergencyWithdraw());
                                case 1:
                                case "end":
                                    return n.stop() } }), n) }))); return function(e, t, r) { return n.apply(this, arguments) } }(),
                g = function() { var n = Object(r.a)(a.a.mark((function n(e, t, r) { return a.a.wrap((function(n) { for (;;) switch (n.prev = n.next) {
                                case 0:
                                    return n.abrupt("return", e.withdraw(t));
                                case 1:
                                case "end":
                                    return n.stop() } }), n) }))); return function(e, t, r) { return n.apply(this, arguments) } }(),
                v = function() { var n = Object(r.a)(a.a.mark((function n(e, t) { return a.a.wrap((function(n) { for (;;) switch (n.prev = n.next) {
                                case 0:
                                    return n.abrupt("return", e.withdrawAll());
                                case 1:
                                case "end":
                                    return n.stop() } }), n) }))); return function(e, t) { return n.apply(this, arguments) } }(),
                w = function() { var n = Object(r.a)(a.a.mark((function n(e, t, r) { return a.a.wrap((function(n) { for (;;) switch (n.prev = n.next) {
                                case 0:
                                    return n.abrupt("return", e.deposit(t, "0", r));
                                case 1:
                                case "end":
                                    return n.stop() } }), n) }))); return function(e, t, r) { return n.apply(this, arguments) } }(),
                y = function() { var n = Object(r.a)(a.a.mark((function n(e, t, r, c) { return a.a.wrap((function(n) { for (;;) switch (n.prev = n.next) {
                                case 0:
                                    if (!c) { n.next = 2; break } return n.abrupt("return", e.deposit(t, "0", c));
                                case 2:
                                    return n.abrupt("return", e.deposit(t, "0"));
                                case 3:
                                case "end":
                                    return n.stop() } }), n) }))); return function(e, t, r, c) { return n.apply(this, arguments) } }(),
                k = function() { var n = Object(r.a)(a.a.mark((function n(e, t) { return a.a.wrap((function(n) { for (;;) switch (n.prev = n.next) {
                                case 0:
                                    return n.abrupt("return", e.deposit("0"));
                                case 1:
                                case "end":
                                    return n.stop() } }), n) }))); return function(e, t) { return n.apply(this, arguments) } }(),
                S = function() { var n = Object(r.a)(a.a.mark((function n(e, t) { return a.a.wrap((function(n) { for (;;) switch (n.prev = n.next) {
                                case 0:
                                    return n.abrupt("return", e.deposit());
                                case 1:
                                case "end":
                                    return n.stop() } }), n) }))); return function(e, t) { return n.apply(this, arguments) } }(),
                F = function() { var n = Object(r.a)(a.a.mark((function n(e, t, r) { return a.a.wrap((function(n) { for (;;) switch (n.prev = n.next) {
                                case 0:
                                    return n.abrupt("return", e.deposit(t, "0"));
                                case 1:
                                case "end":
                                    return n.stop() } }), n) }))); return function(e, t, r) { return n.apply(this, arguments) } }(),
                z = function() { var n = Object(r.a)(a.a.mark((function n(e, t, r) { return a.a.wrap((function(n) { for (;;) switch (n.prev = n.next) {
                                case 0:
                                    return n.abrupt("return", e.approve(t, i.a.constants.MaxUint256));
                                case 1:
                                case "end":
                                    return n.stop() } }), n) }))); return function(e, t, r) { return n.apply(this, arguments) } }(),
                C = function() { var n = Object(r.a)(a.a.mark((function n(e, t, r, c) { return a.a.wrap((function(n) { for (;;) switch (n.prev = n.next) {
                                case 0:
                                    return n.abrupt("return", e.deposit(t, r));
                                case 1:
                                case "end":
                                    return n.stop() } }), n) }))); return function(e, t, r, c) { return n.apply(this, arguments) } }(),
                A = function() { var n = Object(r.a)(a.a.mark((function n(e, t, r, c) { return a.a.wrap((function(n) { for (;;) switch (n.prev = n.next) {
                                case 0:
                                    return n.abrupt("return", e.withdraw(t, r));
                                case 1:
                                case "end":
                                    return n.stop() } }), n) }))); return function(e, t, r, c) { return n.apply(this, arguments) } }() }, 1174: function(n, e, t) { "use strict"; var r, c, a, i, o, u, s = t(32),
                b = t(67),
                f = t(0),
                p = t(10),
                j = t(19),
                d = Object(p.f)(r || (r = Object(b.a)(["\n  from { opacity: 0;  transform: translateY(-10px); }\n  to   { opacity: 1;  transform: translateY(0); }\n"]))),
                l = p.e.div(c || (c = Object(b.a)(["\n  font-size: 2em;\n  color: ", ";\n  text-align: center;\n  /* transition: all 2s ease; */\n  animation: ", " 1s ease;\n"])), (function(n) { return n.theme.colors.ultraFocus }), d),
                x = p.e.ul(a || (a = Object(b.a)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n"]))),
                O = p.e.li(i || (i = Object(b.a)(["\n  flex: 1 0 25%;\n  display: inline-block;\n  font-size: 0.7em;\n  list-style-type: none;\n  text-transform: uppercase; \n  padding: 5px;     \n"]))),
                m = p.e.span(o || (o = Object(b.a)(["\n  display: block;\n  font-size: 0.9em;\n  border: 2px solid #ffbc77db;\n  background-color: #30440c9f;\n  color: ", ";\n  border-radius: 10px;\n  margin: 0 auto;\n  width: 50px;\n  height: 50px;\n  line-height: 50px;  \n  box-sizing: content-box;\n"])), (function(n) { return n.theme.colors.text })),
                h = p.e.label(u || (u = Object(b.a)(["\n  display: block;\n  font-size: 0.5em;\n  color: #ffffff;\n  font-weight: bold;\n  margin-top: 5px;  \n  margin-bottom: 0;  \n  text-transform: uppercase;    \n"])));
            e.a = function(n) { var e = n.seconds,
                    t = Object(f.useState)(e),
                    r = Object(s.a)(t, 2),
                    c = r[0],
                    a = r[1];
                Object(f.useEffect)((function() { e && e > 0 && a(e) }), [e, a]), Object(f.useEffect)((function() { if (c) { var n = setInterval((function() { a(c > 0 ? c - 1 : 0) }), 1e3); return function() { return clearInterval(n) } } }), [c]); var i = Math.floor(c / 86400).toLocaleString("en-US", { minimumIntegerDigits: 2, useGrouping: !1 }),
                    o = Math.floor(c % 86400),
                    u = Math.floor(o / 3600).toLocaleString("en-US", { minimumIntegerDigits: 2, useGrouping: !1 }),
                    b = Math.floor(o % 3600 / 60).toLocaleString("en-US", { minimumIntegerDigits: 2, useGrouping: !1 }),
                    p = Math.floor(o % 3600 % 60).toLocaleString("en-US", { minimumIntegerDigits: 2, useGrouping: !1 }); return Object(j.jsx)(l, { children: Object(j.jsxs)(x, { children: [Object(j.jsxs)(O, { children: [Object(j.jsx)(m, { children: i }), Object(j.jsx)(h, { children: "Days" })] }), Object(j.jsxs)(O, { children: [Object(j.jsx)(m, { children: u }), Object(j.jsx)(h, { children: "Hours" })] }), Object(j.jsxs)(O, { children: [Object(j.jsx)(m, { children: b }), Object(j.jsx)(h, { children: "Minutes" })] }), Object(j.jsxs)(O, { children: [Object(j.jsx)(m, { children: p }), Object(j.jsx)(h, { children: "Seconds" })] })] }) }) } }, 1191: function(n, e, t) { "use strict"; var r = t(0),
                c = t(1178),
                a = t(42),
                i = t(19);
            e.a = function(n) { var e = n.value,
                    t = n.decimals,
                    o = n.fontSize,
                    u = void 0 === o ? "40px" : o,
                    s = n.color,
                    b = void 0 === s ? "primaryDark" : s,
                    f = n.prefix,
                    p = n.postfix,
                    j = Object(c.useCountUp)({ start: 0, end: e, duration: 1, separator: ",", decimals: void 0 !== t ? t : e < 0 ? 4 : e > 1e5 ? 0 : 3 }),
                    d = j.countUp,
                    l = j.update,
                    x = Object(r.useRef)(l); return Object(r.useEffect)((function() { x.current(e) }), [e, x]), Object(i.jsxs)(a.Y, { color: b, bold: !0, fontSize: u, children: [f, d, p] }) } }, 1200: function(n, e, t) { "use strict";
            t.d(e, "c", (function() { return x })), t.d(e, "b", (function() { return O })); var r, c = t(16),
                a = t(6),
                i = t(32),
                o = t(1),
                u = t.n(o),
                s = t(0),
                b = t(9),
                f = t.n(b),
                p = t(79),
                j = t(27),
                d = t(69),
                l = t(178);! function(n) { n.NOT_FETCHED = "not-fetched", n.SUCCESS = "success", n.FAILED = "failed" }(r || (r = {})); var x = function() { var n = Object(l.a)().slowRefresh,
                        e = Object(s.useState)(),
                        t = Object(i.a)(e, 2),
                        r = t[0],
                        c = t[1]; return Object(s.useEffect)((function() {
                        function n() { return (n = Object(a.a)(u.a.mark((function n() { var e, t; return u.a.wrap((function(n) { for (;;) switch (n.prev = n.next) {
                                        case 0:
                                            return e = Object(d.c)(), n.next = 3, e.totalSupply();
                                        case 3:
                                            t = n.sent, c(new f.a(t.toString()));
                                        case 5:
                                        case "end":
                                            return n.stop() } }), n) })))).apply(this, arguments) }! function() { n.apply(this, arguments) }() }), [n]), r },
                O = function(n) { var e = Object(s.useState)(new f.a(0)),
                        t = Object(i.a)(e, 2),
                        r = t[0],
                        c = t[1],
                        o = Object(l.a)().slowRefresh; return Object(s.useEffect)((function() { var n = function() { var n = Object(a.a)(u.a.mark((function n() { var e, t; return u.a.wrap((function(n) { for (;;) switch (n.prev = n.next) {
                                        case 0:
                                            return e = Object(d.c)(), n.next = 3, e.balanceOf("0x000000000000000000000000000000000000dEaD");
                                        case 3:
                                            t = n.sent, c(new f.a(t.toString()));
                                        case 5:
                                        case "end":
                                            return n.stop() } }), n) }))); return function() { return n.apply(this, arguments) } }();
                        n() }), [n, o]), r };
            e.a = function(n) { var e = r.NOT_FETCHED,
                    t = r.SUCCESS,
                    o = r.FAILED,
                    b = Object(s.useState)({ balance: j.h, fetchStatus: e }),
                    x = Object(i.a)(b, 2),
                    O = x[0],
                    m = x[1],
                    h = Object(p.c)().account,
                    g = Object(l.a)().fastRefresh; return Object(s.useEffect)((function() { var e = function() { var e = Object(a.a)(u.a.mark((function e() { var r, a; return u.a.wrap((function(e) { for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return r = Object(d.b)(n), e.prev = 1, e.next = 4, r.balanceOf(h);
                                    case 4:
                                        a = e.sent, m({ balance: new f.a(a.toString()), fetchStatus: t }), e.next = 12; break;
                                    case 8:
                                        e.prev = 8, e.t0 = e.catch(1), console.error(e.t0), m((function(n) { return Object(c.a)(Object(c.a)({}, n), {}, { fetchStatus: o }) }));
                                    case 12:
                                    case "end":
                                        return e.stop() } }), e, null, [
                                [1, 8]
                            ]) }))); return function() { return e.apply(this, arguments) } }();
                    h && e() }), [h, n, g, t, o]), O } }, 1230: function(n, e, t) { "use strict"; var r, c, a, i, o, u, s, b = t(67),
                f = t(0),
                p = t.n(f),
                j = t(85),
                d = t(1147),
                l = t(42),
                x = t(10),
                O = t(1174),
                m = t(176),
                h = t(19),
                g = Object(x.e)(l.y)(r || (r = Object(b.a)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  margin: 0 auto;  \n  padding-top: 10px;\n  padding-bottom: 12px;\n  order: -1;\n\n  ", " {\n    order: 1;\n  }\n"])), (function(n) { return n.theme.mediaQueries.nav })),
                v = Object(x.e)(l.y)(c || (c = Object(b.a)(["\n  flex: 1 1 50%;\n  justify-content: space-between;\n  align-items: center;\n  flex-direction: column;\n  font-size: 1em;\n\n  ", " {\n    flex-direction: row;\n  }\n"])), (function(n) { return n.theme.mediaQueries.nav })),
                w = Object(x.f)(a || (a = Object(b.a)(["\n  from { opacity: 0; }\n  to   { opacity: 1; }\n"]))),
                y = Object(x.e)(l.A)(i || (i = Object(b.a)(["    \n    text-transform: uppercase;\n    color: #ffffff;\n    text-align: center;\n    margin: 5px auto 10px;\n    font-size: 1.4em;\n    line-height: 1.4;\n    /* transition: all 2s ease; */\n    animation: ", " 1s ease-in-out;\n    &>a {\n      display: inline-block;\n      font-size: 1em;\n    }\n"])), w),
                k = (Object(x.e)(l.y)(o || (o = Object(b.a)(["\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    text-align: center;\n"]))), Object(x.e)(l.Y)(u || (u = Object(b.a)(["\n  text-transform: uppercase;  \n  font-size: 1.4em;\n  font-weight: bold;\n  color: ", ";\n"])), (function(n) { return n.theme.colors.primaryDark })), Object(x.e)(l.Y)(s || (s = Object(b.a)(["\n  font-size: 1.3em;\n  color: ", "\n"])), (function(n) { return n.theme.colors.text })), function(n) { n.showHarvestLockup; var e = Object(d.a)(),
                        t = Object(m.w)(),
                        r = t * j.g; return Object(h.jsx)(h.Fragment, { children: t > 0 && r ? Object(h.jsx)(v, { children: Object(h.jsx)(g, { children: Object(h.jsxs)(h.Fragment, { children: [Object(h.jsx)(y, { children: e(999, "Farming Will Start In ") }), Object(h.jsx)(O.a, { seconds: r })] }) }) }) : null }) });
            e.a = p.a.memo(k) }, 1231: function(n, e, t) { "use strict"; var r, c, a, i, o = t(67),
                u = t(0),
                s = t.n(u),
                b = t(85),
                f = t(42),
                p = t(10),
                j = t(176),
                d = t(328),
                l = t(1174),
                x = t(19),
                O = Object(p.e)(f.y)(r || (r = Object(o.a)(["\n  flex: 1 1 50%;\n  justify-content: space-between;\n  align-items: center;\n  flex-direction: column;\n  font-size: 1em;  \n\n  ", " {\n    flex-direction: row;\n  }\n"])), (function(n) { return n.theme.mediaQueries.nav })),
                m = Object(p.e)(f.y)(c || (c = Object(o.a)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  margin: 0 auto 20px;  \n  order: -1;\n\n  ", " {\n    order: 1;\n  }\n"])), (function(n) { return n.theme.mediaQueries.nav })),
                h = Object(p.f)(a || (a = Object(o.a)(["\n  from { opacity: 0; }\n  to   { opacity: 1; }\n"]))),
                g = Object(p.e)(f.A)(i || (i = Object(o.a)(["    \n    text-transform: uppercase;\n    color: ", ";\n    text-align: center;\n    margin: 10px auto;\n    font-size: 1.4em;\n    /* transition: all 2s ease; */\n    animation: ", " 1s ease-in-out;\n    &>a {\n      display: inline-block;\n      font-size: 1em;\n    }\n    &>.token-name {\n    }\n"])), (function(n) { return n.theme.colors.white }), h),
                v = function() { var n = Object(j.v)(19) * b.g,
                        e = Object(j.n)(19),
                        t = e.tokenName,
                        r = e.startBlock; return Object(x.jsx)(O, { children: n && n > 0 ? Object(x.jsxs)(m, { children: [Object(x.jsxs)(g, { children: ["CBank ", Object(x.jsx)("span", { className: "token-name", children: t }), " Pool Will Start At Block", Object(x.jsxs)(f.I, { color: "ultraText", href: Object(d.a)(r, "countdown"), children: ["\xa0", "#".concat(r)] })] }), Object(x.jsx)(l.a, { seconds: n })] }) : null }) };
            e.a = s.a.memo(v) }, 1410: function(n, e, t) { "use strict";
            t.r(e), t.d(e, "default", (function() { return Vn })); var r, c, a, i, o, u, s, b, f, p, j, d, l, x, O, m, h, g, v, w, y, k, S, F, z, C, A, M = t(67),
                E = t(0),
                D = t(10),
                I = t(42),
                N = t(1147),
                Y = t(32),
                R = function(n) { return ("undefined" !== typeof window ? new URLSearchParams(window.location.search) : new URLSearchParams).get(n) },
                T = function(n, e) { var t = Object(E.useState)(R(n) || e),
                        r = Object(Y.a)(t, 2),
                        c = r[0];
                    r[1]; return c },
                H = t(1188),
                L = t(331),
                U = t(6),
                B = t(1),
                G = t.n(B),
                Q = t(79),
                P = t(192),
                $ = t(1159),
                W = t(16),
                V = t(9),
                _ = t.n(V),
                q = t(31),
                J = t(33),
                K = t(102),
                X = t(339),
                Z = t(178),
                nn = function() { var n = Object(E.useState)([]),
                        e = Object(Y.a)(n, 2),
                        t = e[0],
                        r = e[1],
                        c = Object(Q.c)().account,
                        a = Object(Z.a)().fastRefresh; return Object(E.useEffect)((function() { var n = function() { var n = Object(U.a)(G.a.mark((function n() { var e, t, a; return G.a.wrap((function(n) { for (;;) switch (n.prev = n.next) {
                                        case 0:
                                            return e = X.a.map((function(n) { return { address: Object(J.e)(), name: "pendingCougar", params: [n.pid, c] } })), n.next = 3, Object(q.a)(K, e);
                                        case 3:
                                            t = n.sent, a = X.a.map((function(n, e) { return Object(W.a)(Object(W.a)({}, n), {}, { balance: new _.a(t[e]) }) })), r(a);
                                        case 6:
                                        case "end":
                                            return n.stop() } }), n) }))); return function() { return n.apply(this, arguments) } }();
                        c && n() }), [c, a]), t },
                en = t(1161),
                tn = t(1191),
                rn = t(19),
                cn = function(n) { var e = n.earningsSum,
                        t = Object(N.a)(); return Object(Q.c)().account ? Object(rn.jsx)(tn.a, { value: e }) : Object(rn.jsx)(I.Y, { color: "tertiary", style: { lineHeight: "60px" }, children: t(298, "Locked") }) },
                an = function(n) { var e = n.cakeBalance,
                        t = Object(N.a)(); return Object(Q.c)().account ? Object(rn.jsx)(tn.a, { value: e, fontSize: "24px" }) : Object(rn.jsx)(I.Y, { color: "textDisabled", style: { lineHeight: "36px" }, children: t(298, "Locked") }) },
                on = t(176),
                un = t(1200),
                sn = t(65),
                bn = Object(D.e)(en.a)(r || (r = Object(M.a)(["\n  background-color: #27262cad;\n  background-image: url('/images/egg/cougar_gru.png');\n  background-repeat: no-repeat;\n  background-position: top right;  \n  background-size: 200px;  \n  background: linear-gradient(90deg, #f39aa7 0%, #fa798c57 100%, #fa798c57 100%);\n  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);\n  opacity: 0.85;\n  border-radius: 33px;\n"]))),
                fn = Object(D.e)(en.a)(c || (c = Object(M.a)(["\n  background-color: #FFFFFF;\n  background-repeat: no-repeat;\n  background-position: top right;  \n  background-size: 180px;  \n  background: #fffffff2;\n  border-radius: 10px;\n  margin-left: 24px;\n  margin-right: 24px;\n"]))),
                pn = D.e.div(a || (a = Object(M.a)(["\n  margin-bottom: 16px;\n"]))),
                jn = D.e.img(i || (i = Object(M.a)(["\n  margin-bottom: 16px;\n"]))),
                dn = D.e.div(o || (o = Object(M.a)(["\n  color: #000000;\n  font-size: 14px;\n"]))),
                ln = (D.e.div(u || (u = Object(M.a)(["\n  padding-left: 24px;\n  padding-right: 24px;\n  padding-top: 24px;\n  padding-bottom: 24px;\n"]))), D.e.div(s || (s = Object(M.a)(["\n  padding-left: 24px;\n  padding-right: 24px;\n  padding-top: 24px;\n"])))),
                xn = function() { var n = Object(E.useState)(!1),
                        e = Object(Y.a)(n, 2),
                        t = (e[0], e[1]),
                        r = (Object(Q.c)().account, Object(N.a)()),
                        c = nn(),
                        a = Object(un.a)(Object(J.b)()).balance,
                        i = Object(sn.c)(a),
                        o = Object(on.r)(),
                        u = c.reduce((function(n, e) { return n + new P.a(e.balance).div(new P.a(10).pow(18)).toNumber() }), 0),
                        s = Object(E.useMemo)((function() { return o.isNaN() ? 0 : o.times(u).toNumber() }), [o, u]),
                        b = Object(E.useMemo)((function() { return o.isNaN() ? 0 : o.times(i).toNumber() }), [o, i]),
                        f = c.filter((function(n) { return n.balance.toNumber() > 0 })),
                        p = Object($.a)(f.map((function(n) { return n.pid }))).onReward;
                    Object(E.useCallback)(Object(U.a)(G.a.mark((function n() { return G.a.wrap((function(n) { for (;;) switch (n.prev = n.next) {
                                case 0:
                                    return t(!0), n.prev = 1, n.next = 4, p();
                                case 4:
                                    n.next = 8; break;
                                case 6:
                                    n.prev = 6, n.t0 = n.catch(1);
                                case 8:
                                    return n.prev = 8, t(!1), n.finish(8);
                                case 11:
                                case "end":
                                    return n.stop() } }), n, null, [
                            [1, 6, 8, 11]
                        ]) }))), [p]); return Object(rn.jsxs)(bn, { children: [Object(rn.jsx)(ln, { children: Object(rn.jsx)(I.A, { color: "#ffffff", size: "xl", mb: "24px", children: r(542, "Farms & Staking") }) }), Object(rn.jsx)(fn, { children: Object(rn.jsxs)(I.o, { children: [Object(rn.jsx)(jn, { src: "/logo.png", alt: "cake logo", width: 64, height: 64 }), Object(rn.jsxs)(pn, { children: [Object(rn.jsx)(dn, { children: r(544, "CRP to Harvest") }), Object(rn.jsx)(cn, { earningsSum: u }), Object(rn.jsxs)(dn, { children: ["~$", s.toFixed(2)] })] }), Object(rn.jsxs)(pn, { children: [Object(rn.jsx)(dn, { children: r(546, "CRP in Wallet") }), Object(rn.jsx)(an, { cakeBalance: i }), Object(rn.jsxs)(dn, { children: ["~$", b.toFixed(2)] })] })] }) })] }) },
                On = t(332),
                mn = Object(D.e)(en.a)(b || (b = Object(M.a)(["  \n  margin-left: auto;\n  margin-right: auto;\n  background: linear-gradient(90deg, #f39aa7 0%, #fa798c57 100%, #fa798c57 100%);\n  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);\n  opacity: 0.85;\n  border-radius: 33px;\n"]))),
                hn = D.e.div(f || (f = Object(M.a)(["\n  padding-left: 24px;\n  padding-right: 24px;\n  padding-top: 24px;\n"]))),
                gn = Object(D.e)(en.a)(p || (p = Object(M.a)(["\nbackground-color: #FFFFFF;\nbackground-repeat: no-repeat;\nbackground-position: top right;  \nbackground-size: 180px;  \nbackground: #fffffff2;\nborder-radius: 10px;\nmargin-left: 24px;\nmargin-right: 24px;\nmargin-bottom: 24px;\npadding-bottom: 35px;\n"]))),
                vn = D.e.div(j || (j = Object(M.a)(["\n  align-items: center;\n  display: flex;\n  font-size: 14px;\n  justify-content: space-between;\n  margin-bottom: 8px;\n"]))),
                wn = function() { var n = Object(N.a)(),
                        e = Object(un.c)(),
                        t = Object(un.b)(Object(J.b)()),
                        r = Object(on.r)(),
                        c = e ? e.minus(t) : new P.a(0),
                        a = r.times(c),
                        i = Object(On.b)().tokenPerBlock,
                        o = Object(on.l)(),
                        u = o && e ? new P.a(o).div(new P.a(100)).multipliedBy(new P.a(Object(sn.c)(e))) : new P.a(0),
                        s = Object(on.y)(); return Object(rn.jsxs)(mn, { children: [Object(rn.jsx)(hn, { children: Object(rn.jsx)(I.A, { size: "xl", color: "#ffffff", mb: "24px", children: n(534, "CRP Stats") }) }), Object(rn.jsx)(gn, { children: Object(rn.jsxs)(I.o, { children: [Object(rn.jsxs)(vn, { children: [Object(rn.jsx)(I.Y, { color: "#000000", fontSize: "14px", children: n(999, "Market Cap") }), Object(rn.jsx)(tn.a, { color: "primaryDark", fontSize: "14px", value: Object(sn.c)(a), decimals: 0, prefix: "$" })] }), Object(rn.jsxs)(vn, { children: [Object(rn.jsx)(I.Y, { color: "#000000", fontSize: "14px", children: n(536, "Total Supply") }), e && Object(rn.jsx)(tn.a, { color: "primaryDark", fontSize: "14px", value: Object(sn.c)(e), decimals: 0 })] }), Object(rn.jsxs)(vn, { children: [Object(rn.jsx)(I.Y, { color: "#000000", fontSize: "14px", children: n(538, "Total Burned") }), Object(rn.jsx)(tn.a, { color: "primaryDark", fontSize: "14px", value: Object(sn.c)(t), decimals: 0 })] }), Object(rn.jsxs)(vn, { children: [Object(rn.jsx)(I.Y, { color: "#000000", fontSize: "14px", children: n(541, "Max Tx Amount") }), u && Object(rn.jsx)(tn.a, { color: "primaryDark", fontSize: "14px", value: u.toNumber(), decimals: 0 })] }), Object(rn.jsxs)(vn, { children: [Object(rn.jsx)(I.Y, { color: "#000000", fontSize: "14px", children: n(543, "Transfer Tax") }), s && Object(rn.jsx)(tn.a, { color: "#000000", postfix: "%", fontSize: "14px", value: s, decimals: 0 })] }), Object(rn.jsxs)(vn, { children: [Object(rn.jsx)(I.Y, { color: "#000000", fontSize: "14px", children: n(540, "New CRP/block") }), Object(rn.jsx)(I.Y, { color: "#000000", bold: !0, fontSize: "14px", children: i })] })] }) })] }) },
                yn = Object(D.e)(en.a)(d || (d = Object(M.a)(["\n  background-color: #27262cad;\n  flex: 1;\n  background: linear-gradient(90deg, #f39aa7 0%, #fa798c57 100%, #fa798c57 100%);\n  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);\n  border-radius: 33px;\n  opacity: 0.85;\n"]))),
                kn = Object(D.e)(en.a)(l || (l = Object(M.a)(["\nbackground-color: #FFFFFF;\nbackground-repeat: no-repeat;\nbackground-position: top right;  \nbackground-size: 180px;  \nbackground: #fffffff2;\nborder-radius: 10px;\nmargin-left: 24px;\nmargin-right: 24px;\nmargin-bottom: 24px;\n"]))),
                Sn = D.e.div(x || (x = Object(M.a)(["\n  padding-left: 24px;\n  padding-right: 24px;\n  padding-top: 24px;\n"]))),
                Fn = D.e.div(O || (O = Object(M.a)(["\n  margin-top: 20px;\n"]))),
                zn = function() { var n = Object(N.a)(),
                        e = Object(on.x)(),
                        t = Object(on.b)(),
                        r = Object(on.d)(),
                        c = Object(E.useMemo)((function() { return t.plus(r) }), [t, r]),
                        a = Object(E.useMemo)((function() { return e.plus(c).toNumber() }), [e, c]); return Object(rn.jsxs)(yn, { children: [Object(rn.jsx)(Sn, { children: Object(rn.jsx)(I.A, { size: "xl", color: "#ffffff", mb: "24px", children: n(999, "Total Value Locked (TVL)") }) }), Object(rn.jsx)(kn, { children: Object(rn.jsxs)(I.o, { children: [Object(rn.jsx)(tn.a, { color: "primaryDark", fontSize: "40px", value: a, prefix: "$", decimals: 2 }), Object(rn.jsxs)(Fn, { children: [Object(rn.jsx)(tn.a, { color: "primaryDark", fontSize: "20px", value: e.toNumber(), prefix: "$", decimals: 2 }), Object(rn.jsx)(I.Y, { color: "#000000", children: n(999, "Across all Farms and Pools TVL") })] }), Object(rn.jsxs)(Fn, { children: [Object(rn.jsx)(tn.a, { color: "primaryDark", fontSize: "20px", value: c.toNumber(), prefix: "$", decimals: 2 }), Object(rn.jsx)(I.Y, { color: "#000000", children: n(999, "CBank TVL") })] })] }) })] }) },
                Cn = t(1400),
                An = Object(D.e)(en.a)(m || (m = Object(M.a)(["\n  background-color: #27262cad;\n  margin-left: auto;\n  margin-right: auto;\n  background: linear-gradient(90deg, #f39aa7 0%, #fa798c57 100%, #fa798c57 100%);\n  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);\n  opacity: 0.85;\n  border-radius: 33px;\n"]))),
                Mn = (D.e.div(h || (h = Object(M.a)(["\n  align-items: center;\n  display: flex;\n  font-size: 14px;\n  justify-content: space-between;\n  margin-bottom: 8px;\n"]))), function() { var n = Object(N.a)(); return Object(rn.jsx)(An, { children: Object(rn.jsxs)(I.o, { children: [Object(rn.jsx)(I.A, { size: "xl", color: "#ffffff", mb: "24px", children: n(10003, "Announcements") }), Object(rn.jsx)(Cn.a, { dataSource: { sourceType: "profile", screenName: "CronopolyDEX" }, options: { height: "315", chrome: "noheader, nofooter", width: "100%" } })] }) }) }),
                En = t(132),
                Dn = t(1230),
                In = D.e.div(g || (g = Object(M.a)(["\n    width: 100%;\n    max-width: 531px;\n    margin: 42px auto 10px;\n    padding-top: 8px;\n    padding-bottom: 8px;\n    border-radius: 32px;\n    background-color: #27262cad;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n\n    background: linear-gradient(90deg, #f39aa7 0%, #fa798c57 100%, #fa798c57 100%);\n    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);\n    opacity: 0.85;\n    border-radius: 33px;\n\n    ", " {\n        margin: 32px auto;\n    }\n"])), (function(n) { return n.theme.mediaQueries.nav })),
                Nn = D.e.div(v || (v = Object(M.a)(["\n    margin-bottom: 12px;\n"]))),
                Yn = function() { var n = Object(on.w)(); return Object(rn.jsx)(rn.Fragment, { children: n && n > 0 ? Object(rn.jsxs)(In, { children: [Object(rn.jsx)(Dn.a, {}), Object(rn.jsx)(Nn, { children: Object(rn.jsx)(En.b, { to: "/farms", children: Object(rn.jsx)(I.j, { variant: "primarycronos", children: "GO TO FARMS" }) }) })] }) : null }) },
                Rn = t(1231),
                Tn = D.e.div(w || (w = Object(M.a)(["\n    width: 100%;\n    max-width: 1200px;\n    margin: 42px auto 10px;\n    padding-top: 8px;\n    padding-bottom: 8px;\n    border-radius: 32px;\n    background: linear-gradient(90deg, #f39aa7 0%, #fa798c57 100%, #fa798c57 100%);\n    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);\n    opacity: 0.85;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n\n    ", " {\n        margin: 32px auto;\n    }\n"])), (function(n) { return n.theme.mediaQueries.nav })),
                Hn = D.e.div(y || (y = Object(M.a)(["\n    margin-bottom: 12px;\n"]))),
                Ln = function() { var n = Object(on.v)(19),
                        e = Object(on.w)(); return Object(rn.jsx)(rn.Fragment, { children: e <= 0 && n && n > 0 ? Object(rn.jsxs)(Tn, { children: [Object(rn.jsx)(Rn.a, {}), Object(rn.jsx)(Hn, { children: Object(rn.jsx)(En.b, { to: "/cbank", children: Object(rn.jsx)(I.j, { variant: "primary", children: "GO TO CBANK" }) }) })] }) : null }) };

            function Un() { return Object(E.useEffect)((function() { var n = document.getElementById("crytocom-target"),
                        e = document.getElementById("crypto-widget-CoinMarquee"); return e && (null === n || void 0 === n || n.appendChild(e)),
                        function() { var n = document.getElementById("cryptocom-source");
                            e && (null === n || void 0 === n || n.appendChild(e)) } }), []), Object(rn.jsx)(I.y, { width: "100%", className: "App", children: Object(rn.jsx)("div", { id: "crytocom-target", style: { width: "100%" } }) }) } var Bn = D.e.div(k || (k = Object(M.a)(["\n  align-items: center;\n  display: flex;\n  justify-content: center;\n  flex-direction: column;\n  margin: auto;  \n  text-align: center;  \n\n  ", ' {        \n    position: relative;\n\n    &::after {\n      content: "";\n      border-radius: 25px;\n      padding-top: 0;\n      opacity: 0.8;\n      top: 0;\n      left: 0;\n      bottom: 0;\n      right: 0;\n      position: absolute;\n      z-index: -1;   \n    }\n  }\n\n\n'])), (function(n) { return n.theme.mediaQueries.lg })),
                Gn = Object(D.e)(L.a)(S || (S = Object(M.a)(["\n  width: 100%;\n  max-width: 100%;\n  margin-left: 0;\n  margin-right: 0;\n  padding-top: 20px;\n"]))),
                Qn = Object(D.e)(I.Y)(F || (F = Object(M.a)(["\n  font-size: 2.5em;\n  font-weight: 700;  \n  color: ", ";\n  line-height: 1;\n  ", " {      \n    line-height: 1.5;\n    font-size: 3.5em;\n  }\n"])), (function(n) { return n.theme.colors.text }), (function(n) { return n.theme.mediaQueries.nav })),
                Pn = Object(D.e)(I.Y)(z || (z = Object(M.a)(["\n  font-weight: 700;  \n  color: #ce3752;\n"]))),
                $n = D.e.div(C || (C = Object(M.a)(["\n  max-width: 1200px;\n  margin: 30px auto;\n"]))),
                Wn = Object(D.e)(I.f)(A || (A = Object(M.a)(["\n  align-items: stretch;\n  justify-content: stretch;\n  margin-bottom: 48px;\n\n  & > div {\n    grid-column: span 6;\n    width: 100%;\n  }\n\n  ", " {\n    & > div {\n      grid-column: span 12;\n    }\n  }\n\n  ", " {\n    & > div {\n      grid-column: span 6;\n    }\n  }\n"])), (function(n) { return n.theme.mediaQueries.sm }), (function(n) { return n.theme.mediaQueries.lg })),
                Vn = function() { var n = Object(N.a)(),
                        e = T("ref", ""); return Object(E.useEffect)((function() { e && (new H.a).set("ref", e) }), [e]), Object(rn.jsxs)(Gn, { children: [Object(rn.jsxs)(Bn, { children: [Object(rn.jsx)(Qn, { children: n(733, "CRONOPOLY") }), Object(rn.jsx)(Pn, { children: n(578, "A part of the Cronos ecosystem") })] }), Object(rn.jsx)(Ln, {}), Object(rn.jsx)(Yn, {}), Object(rn.jsx)($n, { children: Object(rn.jsxs)(Wn, { children: [Object(rn.jsx)(xn, {}), Object(rn.jsx)(Mn, {}), Object(rn.jsx)(zn, {}), Object(rn.jsx)(wn, {})] }) }), Object(rn.jsx)(I.y, { margin: ["-30px auto 20px", "-10px auto 20px", "-10px auto 20px", "-10px auto 20px"], maxWidth: "1200px", children: Object(rn.jsx)(Un, {}) })] }) } } }
]);