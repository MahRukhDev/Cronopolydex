(this["webpackJsonpcougar-cronos-frontend-farms"] = this["webpackJsonpcougar-cronos-frontend-farms"] || []).push([
    [0], { 1147: function(t, e, r) { "use strict"; var n = r(0),
                c = r(329),
                a = /%(.*?)%/,
                u = function(t, e, r) { var n = t.find((function(t) { return t.data.stringId === e })); if (n) { var c = n.data.text; return c.includes("%") ? function(t, e) { var r = a.exec(t)[0],
                                n = e.split(" ")[0]; return t.replace(r, n) }(c, r) : c } return r };
            e.a = function() { var t = Object(n.useContext)(c.a).translations; return function(e, r) { return "error" === t[0] ? r : t.length > 0 ? u(t, e, r) : r } } }, 1150: function(t, e, r) { "use strict";
            r.d(e, "b", (function() { return l })), r.d(e, "a", (function() { return j })), r.d(e, "j", (function() { return d })), r.d(e, "g", (function() { return O })), r.d(e, "i", (function() { return v })), r.d(e, "e", (function() { return h })), r.d(e, "f", (function() { return x })), r.d(e, "h", (function() { return w })), r.d(e, "c", (function() { return k })), r.d(e, "d", (function() { return g })); var n = r(0),
                c = r(328),
                a = r(69),
                u = r(16),
                o = r(32),
                s = r(334),
                i = r(79),
                p = r(158),
                b = ["library", "chainId"],
                f = function() { var t = Object(i.c)(),
                        e = t.library,
                        r = t.chainId,
                        c = Object(s.a)(t, b),
                        a = Object(n.useRef)(e),
                        f = Object(n.useState)(e || p.a),
                        l = Object(o.a)(f, 2),
                        j = l[0],
                        d = l[1]; return Object(n.useEffect)((function() { e !== a.current && (d(e || p.a), a.current = e) }), [e]), Object(u.a)({ library: j, chainId: null !== r && void 0 !== r ? r : parseInt("25", 10) }, c) },
                l = function(t) { var e = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
                        r = f(),
                        u = r.library,
                        o = r.account; return Object(n.useMemo)((function() { return Object(a.b)(t, e ? Object(c.d)(u, o) : null) }), [o, t, u, e]) },
                j = function() { var t = f().library; return Object(n.useMemo)((function() { return Object(a.a)(t.getSigner()) }), [t]) },
                d = function() { var t = f().library; return Object(n.useMemo)((function() { return Object(a.q)(t.getSigner()) }), [t]) },
                O = function(t) { var e = f().library; return Object(n.useMemo)((function() { return Object(a.l)(t, e.getSigner()) }), [t, e]) },
                v = function() { var t = f().library; return Object(n.useMemo)((function() { return Object(a.p)(t.getSigner()) }), [t]) },
                h = function() { var t = f().library; return Object(n.useMemo)((function() { return Object(a.h)(t.getSigner()) }), [t]) },
                x = function(t) { var e = f().library; return Object(n.useMemo)((function() { return Object(a.k)(t, e.getSigner()) }), [t, e]) },
                w = function(t) { var e = f().library; return Object(n.useMemo)((function() { return Object(a.o)(t, e.getSigner()) }), [t, e]) },
                k = function(t) { var e = f().library; return Object(n.useMemo)((function() { return Object(a.d)(t, e.getSigner()) }), [t, e]) },
                g = function(t) { var e = f().library; return Object(n.useMemo)((function() { return Object(a.e)(t, e.getSigner()) }), [t, e]) } }, 1153: function(t, e, r) { "use strict"; var n = r(16),
                c = (r(0), r(42)),
                a = r(1147),
                u = r(205),
                o = r(19);
            e.a = function(t) { var e = Object(a.a)(),
                    r = Object(u.a)(),
                    s = r.login,
                    i = r.logout,
                    p = Object(c.kb)(s, i).onPresentConnectModal; return Object(o.jsx)(c.j, Object(n.a)(Object(n.a)({ variant: "primary", onClick: p }, t), {}, { children: e(292, "Unlock Wallet") })) } }, 1159: function(t, e, r) { "use strict";
            r.d(e, "b", (function() { return O })), r.d(e, "c", (function() { return v })), r.d(e, "a", (function() { return h })), r.d(e, "d", (function() { return x })), r.d(e, "e", (function() { return w })); var n = r(57),
                c = r(6),
                a = r(1),
                u = r.n(a),
                o = r(0),
                s = r(79),
                i = r(44),
                p = r(133),
                b = r(1173),
                f = r(96),
                l = r(155),
                j = r(1150),
                d = r(204),
                O = function(t) { var e = Object(i.b)(),
                        r = Object(s.c)().account,
                        n = Object(j.e)(),
                        a = Object(d.a)(),
                        f = a.toastError,
                        l = a.toastSuccess; return { onReward: Object(o.useCallback)(Object(c.a)(u.a.mark((function c() { var a; return u.a.wrap((function(c) { for (;;) switch (c.prev = c.next) {
                                    case 0:
                                        return c.prev = 0, c.next = 3, Object(b.f)(n, t, r);
                                    case 3:
                                        return a = c.sent, c.next = 6, a.wait();
                                    case 6:
                                        return e(Object(p.a)(r)), l("Success", "Harvesting transaction confirmed"), c.abrupt("return", a);
                                    case 11:
                                        return c.prev = 11, c.t0 = c.catch(0), console.log(c.t0), f("An error occurred.", "Harvest unsuccessful, please try again"), c.abrupt("return", !1);
                                    case 16:
                                    case "end":
                                        return c.stop() } }), c, null, [
                                [0, 11]
                            ]) }))), [r, e, t, n, l, f]) } },
                v = function(t) { var e = Object(i.b)(),
                        r = Object(s.c)().account,
                        n = f.a.find((function(e) { return e.partnerId === t })),
                        a = Object(j.f)(t),
                        l = Object(d.a)(),
                        O = l.toastError,
                        v = l.toastSuccess; return { onReward: Object(o.useCallback)(Object(c.a)(u.a.mark((function t() { var c; return u.a.wrap((function(t) { for (;;) switch (t.prev = t.next) {
                                    case 0:
                                        return t.prev = 0, t.next = 3, Object(b.h)(a, n.poolId, r, n.referrer);
                                    case 3:
                                        return c = t.sent, t.next = 6, c.wait();
                                    case 6:
                                        return e(Object(p.c)(r)), v("Success", "Harvesting transaction confirmed"), t.abrupt("return", c);
                                    case 11:
                                        return t.prev = 11, t.t0 = t.catch(0), console.log(t.t0), O("An error occurred.", "Harvest unsuccessful, please try again"), t.abrupt("return", !1);
                                    case 16:
                                    case "end":
                                        return t.stop() } }), t, null, [
                                [0, 11]
                            ]) }))), [r, e, n.poolId, n.referrer, a, v, O]) } },
                h = function(t) { var e = Object(s.c)().account,
                        r = Object(j.e)(); return { onReward: Object(o.useCallback)(Object(c.a)(u.a.mark((function c() { var a; return u.a.wrap((function(c) { for (;;) switch (c.prev = c.next) {
                                    case 0:
                                        return a = t.reduce((function(t, c) { return [].concat(Object(n.a)(t), [Object(b.f)(r, c, e)]) }), []), c.abrupt("return", Promise.all(a));
                                    case 2:
                                    case "end":
                                        return c.stop() } }), c) }))), [e, t, r]) } },
                x = function(t) { var e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                        r = Object(i.b)(),
                        n = Object(s.c)(),
                        a = n.account,
                        f = Object(j.h)(t),
                        l = Object(j.e)(),
                        O = Object(d.a)(),
                        v = O.toastError,
                        h = O.toastSuccess,
                        x = Object(o.useCallback)(Object(c.a)(u.a.mark((function n() { var c; return u.a.wrap((function(n) { for (;;) switch (n.prev = n.next) {
                                    case 0:
                                        if (c = null, n.prev = 1, 0 !== t) { n.next = 8; break } return n.next = 5, Object(b.f)(l, 0, a);
                                    case 5:
                                        c = n.sent, n.next = 17; break;
                                    case 8:
                                        if (!e) { n.next = 14; break } return n.next = 11, Object(b.p)(f, a);
                                    case 11:
                                        c = n.sent, n.next = 17; break;
                                    case 14:
                                        return n.next = 16, Object(b.o)(f, a);
                                    case 16:
                                        c = n.sent;
                                    case 17:
                                        return n.next = 19, c.wait();
                                    case 19:
                                        r(Object(p.o)(t, a)), r(Object(p.n)(t, a)), h("Success", "Harvesting transaction confirmed"), n.next = 28; break;
                                    case 24:
                                        n.prev = 24, n.t0 = n.catch(1), console.log(n.t0), v("An error occurred.", "Harvest unsuccessful, please try again");
                                    case 28:
                                    case "end":
                                        return n.stop() } }), n, null, [
                                [1, 24]
                            ]) }))), [a, r, e, l, f, t, h, v]); return { onReward: x } },
                w = function(t) { var e = Object(i.b)(),
                        r = Object(s.c)().account,
                        n = Object(j.j)(),
                        a = Object(d.a)(),
                        p = a.toastError,
                        f = a.toastSuccess; return { onReward: Object(o.useCallback)(Object(c.a)(u.a.mark((function c() { var a; return u.a.wrap((function(c) { for (;;) switch (c.prev = c.next) {
                                    case 0:
                                        return c.prev = 0, c.next = 3, Object(b.t)(n, t, r);
                                    case 3:
                                        return a = c.sent, c.next = 6, a.wait();
                                    case 6:
                                        return e(Object(l.e)(r)), f("Success", "Harvesting transaction confirmed"), c.abrupt("return", a);
                                    case 11:
                                        return c.prev = 11, c.t0 = c.catch(0), console.log(c.t0), p("An error occurred.", "Harvest unsuccessful, please try again"), c.abrupt("return", !1);
                                    case 16:
                                    case "end":
                                        return c.stop() } }), c, null, [
                                [0, 11]
                            ]) }))), [r, e, t, n, f, p]) } } }, 1163: function(t, e, r) { "use strict";
            r.d(e, "a", (function() { return d })), r.d(e, "c", (function() { return O })), r.d(e, "d", (function() { return v })), r.d(e, "b", (function() { return h })), r.d(e, "e", (function() { return x })); var n = r(6),
                c = r(1),
                a = r.n(c),
                u = r(0),
                o = r(79),
                s = r(118),
                i = r(44),
                p = r(133),
                b = r(1173),
                f = (r(33), r(155)),
                l = r(1150),
                j = r(204),
                d = function(t) { var e = Object(i.b)(),
                        r = Object(o.c)().account,
                        c = Object(l.e)(),
                        s = Object(j.a)(),
                        f = s.toastError,
                        d = s.toastSuccess; return { onApprove: Object(u.useCallback)(Object(n.a)(a.a.mark((function n() { var u; return a.a.wrap((function(n) { for (;;) switch (n.prev = n.next) {
                                    case 0:
                                        return n.prev = 0, n.next = 3, Object(b.a)(t, c, r);
                                    case 3:
                                        return u = n.sent, n.next = 6, u.wait();
                                    case 6:
                                        return e(Object(p.a)(r)), d("Success", "Got approval!"), n.abrupt("return", u);
                                    case 11:
                                        return n.prev = 11, n.t0 = n.catch(0), console.log(n.t0), f("An error occurred.", "Did not get approval, please try again"), n.abrupt("return", !1);
                                    case 16:
                                    case "end":
                                        return n.stop() } }), n, null, [
                                [0, 11]
                            ]) }))), [r, e, t, c, d, f]) } },
                O = function(t, e) { var r = Object(i.b)(),
                        c = Object(o.c)().account,
                        s = Object(j.a)(),
                        f = s.toastError,
                        l = s.toastSuccess; return { onApprove: Object(u.useCallback)(Object(n.a)(a.a.mark((function n() { var u; return a.a.wrap((function(n) { for (;;) switch (n.prev = n.next) {
                                    case 0:
                                        return n.prev = 0, n.next = 3, Object(b.g)(t, e, c);
                                    case 3:
                                        return u = n.sent, n.next = 6, u.wait();
                                    case 6:
                                        return r(Object(p.c)(c)), l("Success", "Got approval!"), n.abrupt("return", u);
                                    case 11:
                                        return n.prev = 11, n.t0 = n.catch(0), console.log(n.t0), f("An error occurred.", "Did not get approval, please try again"), n.abrupt("return", !1);
                                    case 16:
                                    case "end":
                                        return n.stop() } }), n, null, [
                                [0, 11]
                            ]) }))), [c, r, t, e, l, f]) } },
                v = function(t, e) { var r = Object(i.b)(),
                        c = Object(o.c)().account,
                        s = Object(l.h)(e),
                        f = Object(j.a)(),
                        d = f.toastError,
                        O = f.toastSuccess; return { onApprove: Object(u.useCallback)(Object(n.a)(a.a.mark((function n() { var u; return a.a.wrap((function(n) { for (;;) switch (n.prev = n.next) {
                                    case 0:
                                        return n.prev = 0, n.next = 3, Object(b.a)(t, s, c);
                                    case 3:
                                        return u = n.sent, n.next = 6, u.wait();
                                    case 6:
                                        return r(Object(p.m)(e, c)), O("Success", "Got approval!"), n.abrupt("return", u);
                                    case 11:
                                        return n.prev = 11, n.t0 = n.catch(0), console.log(n.t0), d("An error occurred.", "Did not get approval, please try again"), n.abrupt("return", !1);
                                    case 16:
                                    case "end":
                                        return n.stop() } }), n, null, [
                                [0, 11]
                            ]) }))), [c, r, t, s, e, O, d]) } },
                h = function(t, e) { var r = Object(j.a)(),
                        c = r.toastError,
                        o = r.toastSuccess; return Object(u.useCallback)(Object(n.a)(a.a.mark((function r() { var n; return a.a.wrap((function(r) { for (;;) switch (r.prev = r.next) {
                                case 0:
                                    return r.prev = 0, r.next = 3, t.approve(e, s.a.constants.MaxUint256);
                                case 3:
                                    return n = r.sent, r.next = 6, n.wait();
                                case 6:
                                    return o("Success", "Got approval!"), r.abrupt("return", n);
                                case 10:
                                    return r.prev = 10, r.t0 = r.catch(0), c("An error occurred.", "Did not get approval, please try again"), r.abrupt("return", !1);
                                case 14:
                                case "end":
                                    return r.stop() } }), r, null, [
                            [0, 10]
                        ]) }))), [e, t, o, c]) },
                x = function(t, e) { var r = Object(i.b)(),
                        c = Object(o.c)().account,
                        s = Object(j.a)(),
                        p = s.toastError,
                        l = s.toastSuccess; return { onApprove: Object(u.useCallback)(Object(n.a)(a.a.mark((function n() { var u; return a.a.wrap((function(n) { for (;;) switch (n.prev = n.next) {
                                    case 0:
                                        return n.prev = 0, n.next = 3, Object(b.s)(t, e, c);
                                    case 3:
                                        return u = n.sent, n.next = 6, u.wait();
                                    case 6:
                                        return r(Object(f.e)(c)), r(Object(f.d)({ account: c })), l("Success", "Got approval!"), n.abrupt("return", u);
                                    case 12:
                                        return n.prev = 12, n.t0 = n.catch(0), console.log(n.t0), p("An error occurred.", "Did not get approval, please try again"), n.abrupt("return", !1);
                                    case 17:
                                    case "end":
                                        return n.stop() } }), n, null, [
                                [0, 12]
                            ]) }))), [c, r, t, e, l, p]) } } }, 1165: function(t, e, r) { "use strict";
            r.d(e, "a", (function() { return d })); var n, c, a, u = r(67),
                o = r(0),
                s = r.n(o),
                i = r(10),
                p = r(19),
                b = i.e.div(n || (n = Object(u.a)(["\n  height: ", "px;\n  width: ", "px;\n"])), (function(t) { return t.size }), (function(t) { return t.size })),
                f = function(t) { var e, r = t.size,
                        n = void 0 === r ? "md" : r,
                        c = Object(o.useContext)(i.a).spacing; switch (n) {
                        case "lg":
                            e = c[6]; break;
                        case "sm":
                            e = c[2]; break;
                        default:
                            e = c[4] } return Object(p.jsx)(b, { size: e }) },
                l = i.e.div(c || (c = Object(u.a)(["\n  align-items: center;\n  background-color: ", "00;\n  display: flex;\n  margin: 0;\n  padding: ", "px;\n"])), (function(t) { return t.theme.colors.primaryDark }), (function(t) { return t.theme.spacing[4] })),
                j = i.e.div(a || (a = Object(u.a)(["\n  flex: 1;\n  text-align: center;\n"]))),
                d = function(t) { var e = t.children,
                        r = s.a.Children.toArray(e).length; return Object(p.jsx)(l, { children: s.a.Children.map(e, (function(t, e) { return Object(p.jsxs)(p.Fragment, { children: [Object(p.jsx)(j, { children: t }), e < r - 1 && Object(p.jsx)(f, {})] }) })) }) } }, 1169: function(t, e, r) { "use strict";
            r.d(e, "c", (function() { return d })), r.d(e, "d", (function() { return O })), r.d(e, "b", (function() { return v })), r.d(e, "e", (function() { return h })); var n = r(6),
                c = r(1),
                a = r.n(c),
                u = r(0),
                o = r(79),
                s = r(44),
                i = r(133),
                p = r(1173),
                b = r(96),
                f = r(155),
                l = r(1150),
                j = r(204),
                d = function(t) { var e = Object(s.b)(),
                        r = Object(o.c)().account,
                        c = b.a.find((function(e) { return e.partnerId === t })),
                        f = Object(l.f)(t),
                        d = Object(j.a)(),
                        O = d.toastError,
                        v = d.toastSuccess,
                        h = Object(u.useCallback)(function() { var t = Object(n.a)(a.a.mark((function t(n) { var u; return a.a.wrap((function(t) { for (;;) switch (t.prev = t.next) {
                                        case 0:
                                            return t.prev = 0, t.next = 3, Object(p.i)(f, c.poolId, n, r, c.referrer);
                                        case 3:
                                            return u = t.sent, t.next = 6, u.wait();
                                        case 6:
                                            e(Object(i.c)(r)), v("Success", "Staking transaction confirmed"), t.next = 14; break;
                                        case 10:
                                            t.prev = 10, t.t0 = t.catch(0), console.log(t.t0), O("An error occurred.", "Transaction unsuccessful, please try again");
                                        case 14:
                                        case "end":
                                            return t.stop() } }), t, null, [
                                    [0, 10]
                                ]) }))); return function(e) { return t.apply(this, arguments) } }(), [r, e, f, c.poolId, c.referrer, v, O]); return { onStake: h } },
                O = function(t) { var e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                        r = Object(s.b)(),
                        c = Object(o.c)(),
                        b = c.account,
                        f = Object(l.e)(),
                        d = Object(l.h)(t),
                        O = Object(j.a)(),
                        v = O.toastError,
                        h = O.toastSuccess,
                        x = Object(u.useCallback)(function() { var c = Object(n.a)(a.a.mark((function n(c) { var u; return a.a.wrap((function(n) { for (;;) switch (n.prev = n.next) {
                                        case 0:
                                            if (n.prev = 0, u = null, 0 !== t) { n.next = 8; break } return n.next = 5, Object(p.q)(f, 0, c, b);
                                        case 5:
                                            u = n.sent, n.next = 17; break;
                                        case 8:
                                            if (!e) { n.next = 14; break } return n.next = 11, Object(p.m)(d, c, b);
                                        case 11:
                                            u = n.sent, n.next = 17; break;
                                        case 14:
                                            return n.next = 16, Object(p.l)(d, c, b);
                                        case 16:
                                            u = n.sent;
                                        case 17:
                                            return n.next = 19, u.wait();
                                        case 19:
                                            r(Object(i.p)(t, b)), r(Object(i.n)(t, b)), h("Success", "Staking transaction confirmed"), n.next = 28; break;
                                        case 24:
                                            n.prev = 24, n.t0 = n.catch(0), console.log(n.t0), v("An error occurred.", "Transaction unsuccessful, please try again");
                                        case 28:
                                        case "end":
                                            return n.stop() } }), n, null, [
                                    [0, 24]
                                ]) }))); return function(t) { return c.apply(this, arguments) } }(), [b, r, e, f, d, t, h, v]); return { onStake: x } },
                v = function() { var t = Object(s.b)(),
                        e = Object(o.c)().account,
                        r = Object(l.a)(),
                        c = Object(j.a)(),
                        i = c.toastError,
                        b = c.toastSuccess,
                        d = Object(u.useCallback)(function() { var c = Object(n.a)(a.a.mark((function n(c) { var u; return a.a.wrap((function(n) { for (;;) switch (n.prev = n.next) {
                                        case 0:
                                            return n.prev = 0, n.next = 3, Object(p.c)(r, c, e);
                                        case 3:
                                            return u = n.sent, n.next = 6, u.wait();
                                        case 6:
                                            t(Object(f.d)({ account: e })), b("Success", "Staking transaction confirmed"), n.next = 14; break;
                                        case 10:
                                            n.prev = 10, n.t0 = n.catch(0), console.log(n.t0), i("An error occurred.", "Transaction unsuccessful, please try again");
                                        case 14:
                                        case "end":
                                            return n.stop() } }), n, null, [
                                    [0, 10]
                                ]) }))); return function(t) { return c.apply(this, arguments) } }(), [e, t, r, b, i]); return { onStake: d } },
                h = function(t) { var e = Object(s.b)(),
                        r = Object(o.c)().account,
                        c = Object(l.j)(),
                        i = Object(j.a)(),
                        b = i.toastError,
                        d = i.toastSuccess,
                        O = Object(u.useCallback)(function() { var u = Object(n.a)(a.a.mark((function n(u) { var o; return a.a.wrap((function(n) { for (;;) switch (n.prev = n.next) {
                                        case 0:
                                            return n.prev = 0, n.next = 3, Object(p.u)(c, t, u, r);
                                        case 3:
                                            return o = n.sent, n.next = 6, o.wait();
                                        case 6:
                                            e(Object(f.e)(r)), -1 === t && (e(Object(f.d)({ account: r })), e(Object(f.c)())), d("Success", "Staking transaction confirmed"), n.next = 15; break;
                                        case 11:
                                            n.prev = 11, n.t0 = n.catch(0), console.log(n.t0), b("An error occurred.", "Transaction unsuccessful, please try again");
                                        case 15:
                                        case "end":
                                            return n.stop() } }), n, null, [
                                    [0, 11]
                                ]) }))); return function(t) { return u.apply(this, arguments) } }(), [r, e, c, t, d, b]); return { onStake: O } };
            e.a = function(t) { var e = Object(s.b)(),
                    r = Object(o.c)().account,
                    c = Object(l.e)(),
                    b = Object(j.a)(),
                    f = b.toastError,
                    d = b.toastSuccess,
                    O = Object(u.useCallback)(function() { var u = Object(n.a)(a.a.mark((function n(u) { var o; return a.a.wrap((function(n) { for (;;) switch (n.prev = n.next) {
                                    case 0:
                                        return n.prev = 0, n.next = 3, Object(p.q)(c, t, u, r);
                                    case 3:
                                        return o = n.sent, n.next = 6, o.wait();
                                    case 6:
                                        e(Object(i.a)(r)), d("Success", "Staking transaction confirmed"), n.next = 14; break;
                                    case 10:
                                        n.prev = 10, n.t0 = n.catch(0), console.log(n.t0), f("An error occurred.", "Transaction unsuccessful, please try again");
                                    case 14:
                                    case "end":
                                        return n.stop() } }), n, null, [
                                [0, 10]
                            ]) }))); return function(t) { return u.apply(this, arguments) } }(), [r, e, c, t, d, f]); return { onStake: O } } }, 1170: function(t, e, r) { "use strict";
            r.d(e, "c", (function() { return w })), r.d(e, "d", (function() { return g })), r.d(e, "b", (function() { return m })), r.d(e, "e", (function() { return y })); var n = r(6),
                c = r(1),
                a = r.n(c),
                u = r(0),
                o = r(79),
                s = r(44),
                i = r(9),
                p = r.n(i),
                b = r(133),
                f = r(1173),
                l = r(96),
                j = r(27),
                d = r(155),
                O = r(176),
                v = r(196),
                h = r(1150),
                x = r(204),
                w = function(t) { var e = Object(s.b)(),
                        r = Object(o.c)().account,
                        c = l.a.find((function(e) { return e.partnerId === t })),
                        i = Object(h.f)(t),
                        p = Object(x.a)(),
                        j = p.toastError,
                        d = p.toastSuccess,
                        O = Object(u.useCallback)(function() { var t = Object(n.a)(a.a.mark((function t(n) { var u; return a.a.wrap((function(t) { for (;;) switch (t.prev = t.next) {
                                        case 0:
                                            return t.prev = 0, t.next = 3, Object(f.j)(i, c.poolId, n, r);
                                        case 3:
                                            return u = t.sent, t.next = 6, u.wait();
                                        case 6:
                                            e(Object(b.c)(r)), d("Success", "Unstaking transaction confirmed"), t.next = 14; break;
                                        case 10:
                                            t.prev = 10, t.t0 = t.catch(0), console.log(t.t0), j("An error occurred.", "Transaction unsuccessful, please try again");
                                        case 14:
                                        case "end":
                                            return t.stop() } }), t, null, [
                                    [0, 10]
                                ]) }))); return function(e) { return t.apply(this, arguments) } }(), [r, e, i, c.poolId, d, j]); return { onUnstake: O } },
                k = [],
                g = function(t) { var e = Object(s.b)(),
                        r = Object(o.c)().account,
                        c = Object(h.e)(),
                        i = Object(h.h)(t),
                        p = k.includes(t),
                        l = Object(x.a)(),
                        j = l.toastError,
                        d = l.toastSuccess,
                        O = Object(u.useCallback)(function() { var u = Object(n.a)(a.a.mark((function n(u) { var o, s, l; return a.a.wrap((function(n) { for (;;) switch (n.prev = n.next) {
                                        case 0:
                                            if (n.prev = 0, 0 !== t) { n.next = 9; break } return n.next = 4, Object(f.r)(c, 0, u, r);
                                        case 4:
                                            return o = n.sent, n.next = 7, o.wait();
                                        case 7:
                                            n.next = 22; break;
                                        case 9:
                                            if (!p) { n.next = 17; break } return n.next = 12, Object(f.k)(i, u, r);
                                        case 12:
                                            return s = n.sent, n.next = 15, s.wait();
                                        case 15:
                                            n.next = 22; break;
                                        case 17:
                                            return n.next = 19, Object(f.n)(i, u, r);
                                        case 19:
                                            return l = n.sent, n.next = 22, l.wait();
                                        case 22:
                                            e(Object(b.p)(t, r)), e(Object(b.n)(t, r)), e(Object(b.o)(t, r)), d("Success", "Unstaking transaction confirmed"), n.next = 32; break;
                                        case 28:
                                            n.prev = 28, n.t0 = n.catch(0), console.log(n.t0), j("An error occurred.", "Transaction unsuccessful, please try again");
                                        case 32:
                                        case "end":
                                            return n.stop() } }), n, null, [
                                    [0, 28]
                                ]) }))); return function(t) { return u.apply(this, arguments) } }(), [r, e, p, c, i, t, d, j]); return { onUnstake: O } },
                m = function() { var t = Object(s.b)(),
                        e = Object(o.c)().account,
                        r = Object(h.a)(),
                        c = Object(O.c)(),
                        i = c.pricePerFullShare,
                        b = c.userData.userShares,
                        l = Object(u.useMemo)((function() { return b ? new p.a(b) : j.h }), [b]),
                        w = Object(u.useMemo)((function() { return i ? new p.a(i) : j.h }), [i]),
                        k = Object(x.a)(),
                        g = k.toastError,
                        m = k.toastSuccess,
                        y = Object(u.useCallback)(function() { var c = Object(n.a)(a.a.mark((function n(c) { var u, o, s; return a.a.wrap((function(n) { for (;;) switch (n.prev = n.next) {
                                        case 0:
                                            if (n.prev = 0, u = Object(v.a)(new p.a(c), w), o = l.minus(u.sharesAsBigNumber), !o.lte(j.g)) { n.next = 9; break } return n.next = 7, Object(f.e)(r, e);
                                        case 7:
                                            n.next = 14; break;
                                        case 9:
                                            return n.next = 11, Object(f.d)(r, c, e);
                                        case 11:
                                            return s = n.sent, n.next = 14, s.wait();
                                        case 14:
                                            t(Object(d.d)({ account: e })), t(Object(d.c)()), m("Success", "Unstaking transaction confirmed"), n.next = 23; break;
                                        case 19:
                                            n.prev = 19, n.t0 = n.catch(0), console.log(n.t0), g("An error occurred.", "Transaction unsuccessful, please try again");
                                        case 23:
                                        case "end":
                                            return n.stop() } }), n, null, [
                                    [0, 19]
                                ]) }))); return function(t) { return c.apply(this, arguments) } }(), [e, t, r, w, l, m, g]); return { onUnstake: y } },
                y = function(t) { var e = Object(s.b)(),
                        r = Object(o.c)().account,
                        c = Object(h.j)(),
                        i = Object(x.a)(),
                        p = i.toastError,
                        b = i.toastSuccess,
                        l = Object(u.useCallback)(function() { var u = Object(n.a)(a.a.mark((function n(u) { var o; return a.a.wrap((function(n) { for (;;) switch (n.prev = n.next) {
                                        case 0:
                                            return n.prev = 0, n.next = 3, Object(f.v)(c, t, u, r);
                                        case 3:
                                            return o = n.sent, n.next = 6, o.wait();
                                        case 6:
                                            e(Object(d.e)(r)), b("Success", "Unstaking transaction confirmed"), n.next = 14; break;
                                        case 10:
                                            n.prev = 10, n.t0 = n.catch(0), console.log(n.t0), p("An error occurred.", "Transaction unsuccessful, please try again");
                                        case 14:
                                        case "end":
                                            return n.stop() } }), n, null, [
                                    [0, 10]
                                ]) }))); return function(t) { return u.apply(this, arguments) } }(), [r, e, c, t, b, p]); return { onUnstake: l } };
            e.a = function(t) { var e = Object(s.b)(),
                    r = Object(o.c)().account,
                    c = Object(h.e)(),
                    i = Object(x.a)(),
                    p = i.toastError,
                    l = i.toastSuccess,
                    j = Object(u.useCallback)(function() { var u = Object(n.a)(a.a.mark((function n(u) { var o; return a.a.wrap((function(n) { for (;;) switch (n.prev = n.next) {
                                    case 0:
                                        return n.prev = 0, n.next = 3, Object(f.r)(c, t, u, r);
                                    case 3:
                                        return o = n.sent, n.next = 6, o.wait();
                                    case 6:
                                        e(Object(b.a)(r)), l("Success", "Unstaking transaction confirmed"), n.next = 14; break;
                                    case 10:
                                        n.prev = 10, n.t0 = n.catch(0), console.log(n.t0), p("An error occurred.", "Transaction unsuccessful, please try again");
                                    case 14:
                                    case "end":
                                        return n.stop() } }), n, null, [
                                [0, 10]
                            ]) }))); return function(t) { return u.apply(this, arguments) } }(), [r, e, c, t, l, p]); return { onUnstake: j } } }, 1173: function(t, e, r) { "use strict";
            r.d(e, "a", (function() { return s })), r.d(e, "g", (function() { return i })), r.d(e, "b", (function() { return p })), r.d(e, "q", (function() { return b })), r.d(e, "i", (function() { return f })), r.d(e, "l", (function() { return l })), r.d(e, "m", (function() { return j })), r.d(e, "c", (function() { return d })), r.d(e, "r", (function() { return O })), r.d(e, "j", (function() { return v })), r.d(e, "n", (function() { return h })), r.d(e, "k", (function() { return x })), r.d(e, "d", (function() { return w })), r.d(e, "e", (function() { return k })), r.d(e, "f", (function() { return g })), r.d(e, "h", (function() { return m })), r.d(e, "o", (function() { return y })), r.d(e, "p", (function() { return S })), r.d(e, "t", (function() { return C })), r.d(e, "s", (function() { return A })), r.d(e, "u", (function() { return E })), r.d(e, "v", (function() { return M })); var n = r(6),
                c = r(1),
                a = r.n(c),
                u = r(118),
                o = r(1188),
                s = function() { var t = Object(n.a)(a.a.mark((function t(e, r, n) { return a.a.wrap((function(t) { for (;;) switch (t.prev = t.next) {
                                case 0:
                                    return t.abrupt("return", e.approve(r.address, u.a.constants.MaxUint256));
                                case 1:
                                case "end":
                                    return t.stop() } }), t) }))); return function(e, r, n) { return t.apply(this, arguments) } }(),
                i = function() { var t = Object(n.a)(a.a.mark((function t(e, r, n) { return a.a.wrap((function(t) { for (;;) switch (t.prev = t.next) {
                                case 0:
                                    return t.abrupt("return", e.approve(r, u.a.constants.MaxUint256));
                                case 1:
                                case "end":
                                    return t.stop() } }), t) }))); return function(e, r, n) { return t.apply(this, arguments) } }(),
                p = function() { var t = Object(n.a)(a.a.mark((function t(e, r, n) { return a.a.wrap((function(t) { for (;;) switch (t.prev = t.next) {
                                case 0:
                                    return t.abrupt("return", e.approve(r, u.a.constants.MaxUint256));
                                case 1:
                                case "end":
                                    return t.stop() } }), t) }))); return function(e, r, n) { return t.apply(this, arguments) } }(),
                b = function() { var t = Object(n.a)(a.a.mark((function t(e, r, n, c) { var u, s, i; return a.a.wrap((function(t) { for (;;) switch (t.prev = t.next) {
                                case 0:
                                    return u = new o.a, s = u.get("ref"), i = null !== s && void 0 !== s ? s : c, t.abrupt("return", e.deposit(r, n, i));
                                case 4:
                                case "end":
                                    return t.stop() } }), t) }))); return function(e, r, n, c) { return t.apply(this, arguments) } }(),
                f = function() { var t = Object(n.a)(a.a.mark((function t(e, r, n, c, u) { return a.a.wrap((function(t) { for (;;) switch (t.prev = t.next) {
                                case 0:
                                    if (!u) { t.next = 2; break } return t.abrupt("return", e.deposit(r, n, u));
                                case 2:
                                    return t.abrupt("return", e.deposit(r, n));
                                case 3:
                                case "end":
                                    return t.stop() } }), t) }))); return function(e, r, n, c, a) { return t.apply(this, arguments) } }(),
                l = function() { var t = Object(n.a)(a.a.mark((function t(e, r, n) { return a.a.wrap((function(t) { for (;;) switch (t.prev = t.next) {
                                case 0:
                                    return t.abrupt("return", e.deposit(r));
                                case 1:
                                case "end":
                                    return t.stop() } }), t) }))); return function(e, r, n) { return t.apply(this, arguments) } }(),
                j = function() { var t = Object(n.a)(a.a.mark((function t(e, r, n) { return a.a.wrap((function(t) { for (;;) switch (t.prev = t.next) {
                                case 0:
                                    return t.abrupt("return", e.deposit());
                                case 1:
                                case "end":
                                    return t.stop() } }), t) }))); return function(e, r, n) { return t.apply(this, arguments) } }(),
                d = function() { var t = Object(n.a)(a.a.mark((function t(e, r, n) { return a.a.wrap((function(t) { for (;;) switch (t.prev = t.next) {
                                case 0:
                                    return t.abrupt("return", e.deposit(r));
                                case 1:
                                case "end":
                                    return t.stop() } }), t) }))); return function(e, r, n) { return t.apply(this, arguments) } }(),
                O = function() { var t = Object(n.a)(a.a.mark((function t(e, r, n, c) { return a.a.wrap((function(t) { for (;;) switch (t.prev = t.next) {
                                case 0:
                                    return t.abrupt("return", e.withdraw(r, n));
                                case 1:
                                case "end":
                                    return t.stop() } }), t) }))); return function(e, r, n, c) { return t.apply(this, arguments) } }(),
                v = function() { var t = Object(n.a)(a.a.mark((function t(e, r, n, c) { return a.a.wrap((function(t) { for (;;) switch (t.prev = t.next) {
                                case 0:
                                    return t.abrupt("return", e.withdraw(r, n));
                                case 1:
                                case "end":
                                    return t.stop() } }), t) }))); return function(e, r, n, c) { return t.apply(this, arguments) } }(),
                h = function() { var t = Object(n.a)(a.a.mark((function t(e, r, n) { return a.a.wrap((function(t) { for (;;) switch (t.prev = t.next) {
                                case 0:
                                    return t.prev = 0, t.abrupt("return", e.withdraw(r));
                                case 4:
                                    return t.prev = 4, t.t0 = t.catch(0), console.log("error", t.t0), t.abrupt("return", !1);
                                case 8:
                                case "end":
                                    return t.stop() } }), t, null, [
                            [0, 4]
                        ]) }))); return function(e, r, n) { return t.apply(this, arguments) } }(),
                x = function() { var t = Object(n.a)(a.a.mark((function t(e, r, n) { return a.a.wrap((function(t) { for (;;) switch (t.prev = t.next) {
                                case 0:
                                    return t.abrupt("return", e.emergencyWithdraw());
                                case 1:
                                case "end":
                                    return t.stop() } }), t) }))); return function(e, r, n) { return t.apply(this, arguments) } }(),
                w = function() { var t = Object(n.a)(a.a.mark((function t(e, r, n) { return a.a.wrap((function(t) { for (;;) switch (t.prev = t.next) {
                                case 0:
                                    return t.abrupt("return", e.withdraw(r));
                                case 1:
                                case "end":
                                    return t.stop() } }), t) }))); return function(e, r, n) { return t.apply(this, arguments) } }(),
                k = function() { var t = Object(n.a)(a.a.mark((function t(e, r) { return a.a.wrap((function(t) { for (;;) switch (t.prev = t.next) {
                                case 0:
                                    return t.abrupt("return", e.withdrawAll());
                                case 1:
                                case "end":
                                    return t.stop() } }), t) }))); return function(e, r) { return t.apply(this, arguments) } }(),
                g = function() { var t = Object(n.a)(a.a.mark((function t(e, r, n) { return a.a.wrap((function(t) { for (;;) switch (t.prev = t.next) {
                                case 0:
                                    return t.abrupt("return", e.deposit(r, "0", n));
                                case 1:
                                case "end":
                                    return t.stop() } }), t) }))); return function(e, r, n) { return t.apply(this, arguments) } }(),
                m = function() { var t = Object(n.a)(a.a.mark((function t(e, r, n, c) { return a.a.wrap((function(t) { for (;;) switch (t.prev = t.next) {
                                case 0:
                                    if (!c) { t.next = 2; break } return t.abrupt("return", e.deposit(r, "0", c));
                                case 2:
                                    return t.abrupt("return", e.deposit(r, "0"));
                                case 3:
                                case "end":
                                    return t.stop() } }), t) }))); return function(e, r, n, c) { return t.apply(this, arguments) } }(),
                y = function() { var t = Object(n.a)(a.a.mark((function t(e, r) { return a.a.wrap((function(t) { for (;;) switch (t.prev = t.next) {
                                case 0:
                                    return t.abrupt("return", e.deposit("0"));
                                case 1:
                                case "end":
                                    return t.stop() } }), t) }))); return function(e, r) { return t.apply(this, arguments) } }(),
                S = function() { var t = Object(n.a)(a.a.mark((function t(e, r) { return a.a.wrap((function(t) { for (;;) switch (t.prev = t.next) {
                                case 0:
                                    return t.abrupt("return", e.deposit());
                                case 1:
                                case "end":
                                    return t.stop() } }), t) }))); return function(e, r) { return t.apply(this, arguments) } }(),
                C = function() { var t = Object(n.a)(a.a.mark((function t(e, r, n) { return a.a.wrap((function(t) { for (;;) switch (t.prev = t.next) {
                                case 0:
                                    return t.abrupt("return", e.deposit(r, "0"));
                                case 1:
                                case "end":
                                    return t.stop() } }), t) }))); return function(e, r, n) { return t.apply(this, arguments) } }(),
                A = function() { var t = Object(n.a)(a.a.mark((function t(e, r, n) { return a.a.wrap((function(t) { for (;;) switch (t.prev = t.next) {
                                case 0:
                                    return t.abrupt("return", e.approve(r, u.a.constants.MaxUint256));
                                case 1:
                                case "end":
                                    return t.stop() } }), t) }))); return function(e, r, n) { return t.apply(this, arguments) } }(),
                E = function() { var t = Object(n.a)(a.a.mark((function t(e, r, n, c) { return a.a.wrap((function(t) { for (;;) switch (t.prev = t.next) {
                                case 0:
                                    return t.abrupt("return", e.deposit(r, n));
                                case 1:
                                case "end":
                                    return t.stop() } }), t) }))); return function(e, r, n, c) { return t.apply(this, arguments) } }(),
                M = function() { var t = Object(n.a)(a.a.mark((function t(e, r, n, c) { return a.a.wrap((function(t) { for (;;) switch (t.prev = t.next) {
                                case 0:
                                    return t.abrupt("return", e.withdraw(r, n));
                                case 1:
                                case "end":
                                    return t.stop() } }), t) }))); return function(e, r, n, c) { return t.apply(this, arguments) } }() }, 1177: function(t, e, r) { "use strict";
            r.d(e, "a", (function() { return y })); var n, c, a, u, o, s, i, p = r(67),
                b = (r(0), r(10)),
                f = r(192),
                l = r(42),
                j = r(1147),
                d = r(19),
                O = b.e.div(n || (n = Object(p.a)(["\n  align-items: center;\n  background-color: ", ";\n  border-radius: ", ";\n  display: flex;\n  height: 72px;\n  padding: 0 ", "px;\n"])), (function(t) { return t.theme.colors.input }), (function(t) { return t.theme.radii.default }), (function(t) { return t.theme.spacing[3] })),
                v = b.e.input(c || (c = Object(p.a)(["\n  width: 100%;\n  background: none;\n  border: 0;\n  color: ", ";\n  font-size: 18px;\n  flex: 1;\n  height: 56px;\n  margin: 0;\n  padding: 0;\n  outline: none;\n"])), (function(t) { return t.theme.colors.primaryDark })),
                h = function(t) { var e = t.endAdornment,
                        r = t.onChange,
                        n = t.placeholder,
                        c = t.startAdornment,
                        a = t.value; return Object(d.jsxs)(O, { children: [!!c && c, Object(d.jsx)(v, { placeholder: n, value: a, onChange: r }), !!e && e] }) },
                x = b.e.div(a || (a = Object(p.a)([""]))),
                w = b.e.div(u || (u = Object(p.a)(["\n  width: ", "px;\n"])), (function(t) { return t.theme.spacing[3] })),
                k = b.e.div(o || (o = Object(p.a)(["\n  align-items: center;\n  display: flex;\n"]))),
                g = b.e.div(s || (s = Object(p.a)(["\n  align-items: center;\n  color: ", ";\n  display: flex;\n  font-size: 14px;\n  font-weight: 700;\n  height: 44px;\n  justify-content: flex-end;\n"])), (function(t) { return t.theme.colors.primaryLight })),
                m = b.e.span(i || (i = Object(p.a)(["\n  color: ", ";\n  font-weight: 700;\n"])), (function(t) { return t.theme.colors.primaryDark })),
                y = function(t) { var e = t.max,
                        r = t.symbol,
                        n = t.onChange,
                        c = t.onSelectMax,
                        a = t.value,
                        u = t.depositFeeBP,
                        o = void 0 === u ? 0 : u,
                        s = Object(j.a)(); return Object(d.jsxs)(x, { children: [Object(d.jsxs)(g, { children: [e.toLocaleString(), " ", r, " ", s(526, "Available")] }), Object(d.jsx)(h, { endAdornment: Object(d.jsxs)(k, { children: [Object(d.jsx)(m, { children: r }), Object(d.jsx)(w, {}), Object(d.jsx)("div", { children: Object(d.jsx)(l.j, { size: "sm", onClick: c, children: s(452, "Max") }) })] }), onChange: n, placeholder: "0", value: a }), o > 0 ? Object(d.jsxs)(g, { children: [s(10001, "Deposit Fee"), ": ", new f.a(a || 0).times(o / 1e4).toString(), " ", r] }) : null] }) } } }
]);