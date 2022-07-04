(this["webpackJsonpcougar-cronos-frontend-farms"] = this["webpackJsonpcougar-cronos-frontend-farms"] || []).push([
    [13], { 1147: function(e, n, t) { "use strict"; var r = t(0),
                c = t(329),
                i = /%(.*?)%/,
                a = function(e, n, t) { var r = e.find((function(e) { return e.data.stringId === n })); if (r) { var c = r.data.text; return c.includes("%") ? function(e, n) { var t = i.exec(e)[0],
                                r = n.split(" ")[0]; return e.replace(t, r) }(c, t) : c } return t };
            n.a = function() { var e = Object(r.useContext)(c.a).translations; return function(n, t) { return "error" === e[0] ? t : e.length > 0 ? a(e, n, t) : t } } }, 1150: function(e, n, t) { "use strict";
            t.d(n, "b", (function() { return b })), t.d(n, "a", (function() { return p })), t.d(n, "j", (function() { return f })), t.d(n, "g", (function() { return x })), t.d(n, "i", (function() { return O })), t.d(n, "e", (function() { return m })), t.d(n, "f", (function() { return h })), t.d(n, "h", (function() { return g })), t.d(n, "c", (function() { return v })), t.d(n, "d", (function() { return y })); var r = t(0),
                c = t(328),
                i = t(69),
                a = t(16),
                o = t(32),
                s = t(334),
                u = t(79),
                l = t(158),
                d = ["library", "chainId"],
                j = function() { var e = Object(u.c)(),
                        n = e.library,
                        t = e.chainId,
                        c = Object(s.a)(e, d),
                        i = Object(r.useRef)(n),
                        j = Object(r.useState)(n || l.a),
                        b = Object(o.a)(j, 2),
                        p = b[0],
                        f = b[1]; return Object(r.useEffect)((function() { n !== i.current && (f(n || l.a), i.current = n) }), [n]), Object(a.a)({ library: p, chainId: null !== t && void 0 !== t ? t : parseInt("25", 10) }, c) },
                b = function(e) { var n = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
                        t = j(),
                        a = t.library,
                        o = t.account; return Object(r.useMemo)((function() { return Object(i.b)(e, n ? Object(c.d)(a, o) : null) }), [o, e, a, n]) },
                p = function() { var e = j().library; return Object(r.useMemo)((function() { return Object(i.a)(e.getSigner()) }), [e]) },
                f = function() { var e = j().library; return Object(r.useMemo)((function() { return Object(i.q)(e.getSigner()) }), [e]) },
                x = function(e) { var n = j().library; return Object(r.useMemo)((function() { return Object(i.l)(e, n.getSigner()) }), [e, n]) },
                O = function() { var e = j().library; return Object(r.useMemo)((function() { return Object(i.p)(e.getSigner()) }), [e]) },
                m = function() { var e = j().library; return Object(r.useMemo)((function() { return Object(i.h)(e.getSigner()) }), [e]) },
                h = function(e) { var n = j().library; return Object(r.useMemo)((function() { return Object(i.k)(e, n.getSigner()) }), [e, n]) },
                g = function(e) { var n = j().library; return Object(r.useMemo)((function() { return Object(i.o)(e, n.getSigner()) }), [e, n]) },
                v = function(e) { var n = j().library; return Object(r.useMemo)((function() { return Object(i.d)(e, n.getSigner()) }), [e, n]) },
                y = function(e) { var n = j().library; return Object(r.useMemo)((function() { return Object(i.e)(e, n.getSigner()) }), [e, n]) } }, 1153: function(e, n, t) { "use strict"; var r = t(16),
                c = (t(0), t(42)),
                i = t(1147),
                a = t(205),
                o = t(19);
            n.a = function(e) { var n = Object(i.a)(),
                    t = Object(a.a)(),
                    s = t.login,
                    u = t.logout,
                    l = Object(c.kb)(s, u).onPresentConnectModal; return Object(o.jsx)(c.j, Object(r.a)(Object(r.a)({ variant: "primary", onClick: l }, e), {}, { children: n(292, "Unlock Wallet") })) } }, 1161: function(e, n, t) { "use strict"; var r, c = t(67),
                i = t(10),
                a = t(42),
                o = Object(i.e)(a.n)(r || (r = Object(c.a)(["\n    background-color: #27262cad;\n"])));
            n.a = o }, 1165: function(e, n, t) { "use strict";
            t.d(n, "a", (function() { return f })); var r, c, i, a = t(67),
                o = t(0),
                s = t.n(o),
                u = t(10),
                l = t(19),
                d = u.e.div(r || (r = Object(a.a)(["\n  height: ", "px;\n  width: ", "px;\n"])), (function(e) { return e.size }), (function(e) { return e.size })),
                j = function(e) { var n, t = e.size,
                        r = void 0 === t ? "md" : t,
                        c = Object(o.useContext)(u.a).spacing; switch (r) {
                        case "lg":
                            n = c[6]; break;
                        case "sm":
                            n = c[2]; break;
                        default:
                            n = c[4] } return Object(l.jsx)(d, { size: n }) },
                b = u.e.div(c || (c = Object(a.a)(["\n  align-items: center;\n  background-color: ", "00;\n  display: flex;\n  margin: 0;\n  padding: ", "px;\n"])), (function(e) { return e.theme.colors.primaryDark }), (function(e) { return e.theme.spacing[4] })),
                p = u.e.div(i || (i = Object(a.a)(["\n  flex: 1;\n  text-align: center;\n"]))),
                f = function(e) { var n = e.children,
                        t = s.a.Children.toArray(n).length; return Object(l.jsx)(b, { children: s.a.Children.map(n, (function(e, n) { return Object(l.jsxs)(l.Fragment, { children: [Object(l.jsx)(p, { children: e }), n < t - 1 && Object(l.jsx)(j, {})] }) })) }) } }, 1180: function(e, n, t) { "use strict"; var r, c = t(32),
                i = t(67),
                a = t(0),
                o = t(10),
                s = t(19),
                u = o.e.div(r || (r = Object(i.a)(["\n  font-size: ", ";\n  color: ", ";\n"])), (function(e) { var n = e.fontSize; return null !== n && void 0 !== n ? n : "1em" }), (function(e) { return e.theme.colors.secondary }));
            n.a = function(e) { var n = e.seconds,
                    t = e.fontSize,
                    r = void 0 === t ? "" : t,
                    i = Object(a.useState)(n),
                    o = Object(c.a)(i, 2),
                    l = o[0],
                    d = o[1];
                Object(a.useEffect)((function() { if (l) { var e = setInterval((function() { d(l - 1) }), 1e3); return function() { return clearInterval(e) } } }), [l]); var j = Math.floor(l / 86400).toLocaleString("en-US", { minimumIntegerDigits: 2, useGrouping: !1 }),
                    b = Math.floor(l % 86400),
                    p = Math.floor(b / 3600).toLocaleString("en-US", { minimumIntegerDigits: 2, useGrouping: !1 }),
                    f = Math.floor(b % 3600 / 60).toLocaleString("en-US", { minimumIntegerDigits: 2, useGrouping: !1 }),
                    x = Math.floor(b % 3600 % 60).toLocaleString("en-US", { minimumIntegerDigits: 2, useGrouping: !1 }); return Object(s.jsx)(u, { fontSize: r, children: Object(s.jsx)("h5", { children: "".concat(j, "d ").concat(p, "h ").concat(f, "m ").concat(x, "s") }) }) } }, 1191: function(e, n, t) { "use strict"; var r = t(0),
                c = t(1178),
                i = t(42),
                a = t(19);
            n.a = function(e) { var n = e.value,
                    t = e.decimals,
                    o = e.fontSize,
                    s = void 0 === o ? "40px" : o,
                    u = e.color,
                    l = void 0 === u ? "primaryDark" : u,
                    d = e.prefix,
                    j = e.postfix,
                    b = Object(c.useCountUp)({ start: 0, end: n, duration: 1, separator: ",", decimals: void 0 !== t ? t : n < 0 ? 4 : n > 1e5 ? 0 : 3 }),
                    p = b.countUp,
                    f = b.update,
                    x = Object(r.useRef)(f); return Object(r.useEffect)((function() { x.current(n) }), [n, x]), Object(a.jsxs)(i.Y, { color: l, bold: !0, fontSize: s, children: [d, p, j] }) } }, 1192: function(e, n, t) { "use strict";
            t.d(n, "a", (function() { return u })); var r, c, i = t(67),
                a = t(42),
                o = t(10),
                s = o.e.div(r || (r = Object(i.a)(["\n  display: flex;\n  justify-content: center;\n  flex-wrap: wrap;\n  & > * {\n    min-width: 280px;\n    max-width: 31.5%;\n    width: 100%;\n    margin: 0 8px;\n    margin-bottom: 32px;\n  }\n"]))),
                u = Object(o.e)(a.y)(c || (c = Object(i.a)(["\n  gap: ", ";\n"])), (function(e) { return e.gap }));
            n.b = s }, 1406: function(e, n, t) { "use strict";
            t.r(n), t.d(n, "default", (function() { return Mt })); var r, c, i, a, o, s, u, l, d, j, b, p, f, x, O, m, h, g, v, y, S, k = t(32),
                w = t(67),
                C = t(0),
                D = t.n(C),
                T = t(44),
                F = t(10),
                A = t(42),
                I = t(1147),
                E = t(1179),
                M = t.n(E),
                z = t(178),
                L = t(79),
                N = t(333),
                P = t(9),
                U = t.n(P),
                B = t(65),
                Y = t(119),
                G = t(1290),
                Q = Object(F.e)(A.n)(r || (r = Object(w.a)(["\n    background: linear-gradient(90deg, #f39aa7 0%, #fa798c57 100%, #fa798c57 100%);\n    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);\n    opacity: 0.85;\n    border-radius: 33px;\n    padding: 20px;\n"]))),
                R = t(19),
                W = Object(F.e)(Q)(c || (c = Object(w.a)(["    \n    padding: 20px;\n"]))),
                V = Object(F.e)(A.y)(i || (i = Object(w.a)(["\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n"]))),
                _ = Object(F.e)(A.y)(a || (a = Object(w.a)(["\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n"]))),
                H = Object(F.e)(A.Y)(o || (o = Object(w.a)(["\n    text-transform: uppercase;\n    text-align: center;\n    font-size: 1.4em;\n    color: ", ";\n"])), (function(e) { return e.theme.colors.primaryBright })),
                q = Object(F.e)(A.Y)(s || (s = Object(w.a)(["\n    text-transform: uppercase;\n    text-align: center;\n    font-size: 1.6em;\n    color: #ffeb3b;\n"]))),
                $ = function(e) { var n = e.isHardCapMet,
                        t = e.onDismiss; return Object(C.useEffect)((function() { Object(N.delay)((function() { Object(G.a)({ resize: !0, particleCount: 200, startVelocity: 30, gravity: .5, spread: 350, origin: { x: .5, y: .3 } }) }), 100) }), []), Object(R.jsx)(A.P, { title: "From Cougar Team", onDismiss: t, children: Object(R.jsxs)(W, { children: [Object(R.jsxs)(V, { children: [Object(R.jsx)(A.D, { src: "/images/egg/logo.png", width: 100, height: 100 }), Object(R.jsxs)(H, { children: ["The presale is ended", Object(R.jsx)("br", {})] }), n ? Object(R.jsx)(q, { children: "100% hardcap met" }) : null, Object(R.jsx)(A.Y, { style: { textAlign: "center" }, mt: "10px", children: "Thank you for participating and supporting our project. Enjoy farming!" })] }), Object(R.jsx)(_, { mt: "20px", children: Object(R.jsx)(A.j, { onClick: t, children: "OK" }) })] }) }) },
                J = t(135),
                K = function(e) { return Object(T.c)((function(n) { return n.presale.options.find((function(n) { return n.option === e })).publicData })) },
                X = function(e) { return Object(T.c)((function(n) { return n.presale.options.find((function(n) { return n.option === e })).userData })) },
                Z = t(6),
                ee = t(1),
                ne = t.n(ee),
                te = t(1161),
                re = t(27),
                ce = t(1150),
                ie = t(1153),
                ae = t(133),
                oe = t(1192),
                se = t(33),
                ue = t(1165),
                le = F.e.div(u || (u = Object(w.a)(["\n  display: flex;\n  flex-direction: column;\n  background-color: ", ";\n  border-radius: 16px;\n  box-shadow: ", ";\n  color: ", ";\n  padding: 8px 16px 8px 0;\n  width: 100%;\n"])), (function(e) { return e.theme.colors.input }), (function(e) { var n = e.isWarning,
                        t = void 0 !== n && n,
                        r = e.theme; return t ? r.shadows.warning : r.shadows.inset }), (function(e) { return e.theme.colors.text })),
                de = Object(F.e)(A.F)(l || (l = Object(w.a)(["\n  box-shadow: none;\n  width: 60px;\n  margin: 0 8px;\n  padding: 0 8px;\n  color: #000;\n\n  ", " {\n    width: 80px;\n  }\n\n  ", " {\n    width: auto;\n  }\n"])), (function(e) { return e.theme.mediaQueries.xs }), (function(e) { return e.theme.mediaQueries.sm })),
                je = Object(F.e)(A.Y)(d || (d = Object(w.a)(["\n  position: absolute;\n  bottom: -22px;\n  a {\n    display: inline;\n  }\n"]))),
                be = function(e) { var n = e.max,
                        t = e.symbol,
                        r = e.onChange,
                        c = e.onSelectMax,
                        i = e.value,
                        a = e.addLiquidityUrl,
                        o = e.inputTitle,
                        s = e.decimals,
                        u = void 0 === s ? 18 : s,
                        l = Object(I.a)(),
                        d = "0" === n || !n; return Object(R.jsxs)("div", { style: { position: "relative" }, children: [Object(R.jsxs)(le, { isWarning: d, children: [Object(R.jsxs)(A.y, { justifyContent: "space-between", pl: "16px", children: [Object(R.jsx)(A.Y, { fontSize: "14px", children: o }), Object(R.jsxs)(A.Y, { fontSize: "14px", children: [l(999, "Balance:"), function(e) { if (d) return "0"; var n = new P.BigNumber(e); return n.gt(0) && n.lt(1e-4) ? n.toLocaleString() : n.toFixed(3, P.BigNumber.ROUND_DOWN) }(n)] })] }), Object(R.jsxs)(A.y, { alignItems: "flex-end", justifyContent: "space-around", children: [Object(R.jsx)(de, { pattern: "^[0-9]*[.,]?[0-9]{0,".concat(u, "}$"), inputMode: "decimal", step: "any", min: "0", onChange: r, placeholder: "0", value: i }), Object(R.jsx)(A.j, { onClick: c, mr: "8px", children: l(999, "Max") }), Object(R.jsx)(A.Y, { fontSize: "16px", children: t })] })] }), d && Object(R.jsxs)(je, { fontSize: "14px", color: "failure", children: [l(999, "No tokens to stake"), ":", " ", Object(R.jsxs)(A.H, { fontSize: "14px", bold: !1, href: a, external: !0, color: "failure", children: [l(999, "Get "), " ", t] })] })] }) },
                pe = Object(F.e)(A.Y)(j || (j = Object(w.a)(["\n    color: #3fff00;\n    text-align: center;\n    margin-top: 8px;\n    margin-bottom: 8px;\n"]))),
                fe = Object(F.e)(A.Y)(b || (b = Object(w.a)(["\n    text-align: center;\n    color: #3fff00;\n"]))),
                xe = Object(F.e)(A.Y)(p || (p = Object(w.a)(["\n    text-align: center;\n    color: #3fff00;\n"]))),
                Oe = function(e) { var n = e.max,
                        t = e.usdcPerCake,
                        r = e.tokensUnclaimed,
                        c = e.purchaseLimit,
                        i = e.tokenName,
                        a = void 0 === i ? "" : i,
                        o = e.onConfirm,
                        s = e.onDismiss,
                        u = e.tokensLeft,
                        l = Object(C.useState)(""),
                        d = Object(k.a)(l, 2),
                        j = d[0],
                        b = d[1],
                        p = Object(C.useState)(!1),
                        f = Object(k.a)(p, 2),
                        x = f[0],
                        O = f[1],
                        m = Object(I.a)(),
                        h = Object(C.useMemo)((function() { return Object(B.e)(n, 6) }), [n, 6]),
                        g = Object(C.useMemo)((function() { return Object(B.b)(n, 6) }), [n, 6]),
                        v = Object(C.useCallback)((function(e) { e.currentTarget.validity.valid && b(e.currentTarget.value.replace(/,/g, ".")) }), [b]),
                        y = Object(C.useState)(re.h),
                        S = Object(k.a)(y, 2),
                        w = S[0],
                        D = S[1],
                        T = Object(C.useMemo)((function() { var e = Object(B.c)(r, 6); return c - e }), [c, r]);
                    Object(C.useEffect)((function() { var e = new U.a(Number(j)).dividedBy(t);
                        D(e) }), [j, t]); var F = Object(C.useCallback)((function() { b(h) }), [h, b]),
                        E = "https://cronopoly.finance/#/swap?outputCurrency=".concat(Object(se.k)()); return Object(R.jsxs)(A.P, { title: "".concat(m(999, "Buy CPF Token")), onDismiss: s, children: [Object(R.jsx)(be, { value: j, onSelectMax: F, onChange: v, max: h, symbol: a, addLiquidityUrl: E, inputTitle: "Presale BUY" }), Object(R.jsx)(pe, { children: "".concat(m(999, "You will get:"), " ").concat(w.toNumber(), " CPF") }), Object(R.jsxs)(xe, { children: ["Price: 1 CPF = $", t, " USDC"] }), Object(R.jsx)(fe, { children: "".concat(m(999, "Max token you can buy:"), " ").concat(T, " CPF") }), Object(R.jsxs)(ue.a, { children: [Object(R.jsx)(A.j, { variant: "secondary", onClick: s, disabled: x, children: m(999, "Cancel") }), Object(R.jsx)(A.j, { isLoading: x, endIcon: x ? Object(R.jsx)(A.d, { spin: !0, color: "currentColor" }) : null, disabled: !j || w.gt(u) || w.gt(T) || new U.a(j).gt(g) || x, onClick: Object(Z.a)(ne.a.mark((function e() { return ne.a.wrap((function(e) { for (;;) switch (e.prev = e.next) {
                                            case 0:
                                                return O(!0), e.next = 3, o(j);
                                            case 3:
                                                O(!1), s();
                                            case 5:
                                            case "end":
                                                return e.stop() } }), e) }))), children: m(999, x ? "Confirming" : "Confirm") })] }), Object(R.jsx)(A.I, { href: E, style: { alignSelf: "center" }, children: m(999, "Get USDC") })] }) },
                me = t(204),
                he = function() { var e = Object(Z.a)(ne.a.mark((function e(n, t, r) { var c; return ne.a.wrap((function(e) { for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, n.buy(new U.a(t).times(new U.a(10).pow(6)).toString(), r);
                                case 2:
                                    return c = e.sent, e.abrupt("return", c);
                                case 4:
                                case "end":
                                    return e.stop() } }), e) }))); return function(n, t, r) { return e.apply(this, arguments) } }(),
                ge = function(e) { var n = Object(L.c)().account,
                        t = Object(T.b)(),
                        r = Object(ce.g)(e),
                        c = Object(me.a)(),
                        i = c.toastError,
                        a = c.toastSuccess,
                        o = Object(C.useCallback)(function() { var c = Object(Z.a)(ne.a.mark((function c(o) { return ne.a.wrap((function(c) { for (;;) switch (c.prev = c.next) {
                                        case 0:
                                            return c.prev = 0, c.next = 3, he(r, o, n);
                                        case 3:
                                            c.sent, t(Object(J.b)(e)), t(Object(ae.l)(n, e)), t(Object(ae.i)(n)), a("Success", "Transaction confirmed"), c.next = 14; break;
                                        case 10:
                                            c.prev = 10, c.t0 = c.catch(0), console.log(c.t0), i("An error occurred.", "Harvest unsuccessful, please try again");
                                        case 14:
                                        case "end":
                                            return c.stop() } }), c, null, [
                                    [0, 10]
                                ]) }))); return function(e) { return c.apply(this, arguments) } }(), [n, t, r, e, a, i]); return { onBuy: o } },
                ve = function(e) { var n = e.usdcBalance,
                        t = e.tokensUnclaimed,
                        r = e.tokenBalance,
                        c = e.tokensLeft,
                        i = e.option,
                        a = e.usdcPerCake,
                        o = e.purchaseLimit,
                        s = e.isSaleActive,
                        u = void 0 !== s && s,
                        l = (Object(I.a)(), ge(i).onBuy),
                        d = Object(A.ib)(Object(R.jsx)(Oe, { max: n, onConfirm: l, tokenName: "USDC", tokensUnclaimed: t, tokenBalance: r, tokensLeft: c, usdcPerCake: a, purchaseLimit: o, token: "CPF" })),
                        j = Object(k.a)(d, 1)[0]; return Object(R.jsx)(A.y, { justifyContent: "space-between", alignItems: "center", flexDirection: "column", children: Object(R.jsx)(A.j, { mt: "8px", disabled: !u, onClick: j, children: "Buy CPF" }) }) },
                ye = function() { var e = Object(Z.a)(ne.a.mark((function e(n, t) { var r; return ne.a.wrap((function(e) { for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, n.claim();
                                case 2:
                                    return r = e.sent, e.abrupt("return", r);
                                case 4:
                                case "end":
                                    return e.stop() } }), e) }))); return function(n, t) { return e.apply(this, arguments) } }(),
                Se = function(e) { var n = Object(L.c)().account,
                        t = Object(T.b)(),
                        r = Object(ce.g)(e),
                        c = Object(me.a)(),
                        i = c.toastError,
                        a = c.toastSuccess; return { onClaim: Object(C.useCallback)(Object(Z.a)(ne.a.mark((function c() { return ne.a.wrap((function(c) { for (;;) switch (c.prev = c.next) {
                                    case 0:
                                        return c.prev = 0, c.next = 3, ye(r, n);
                                    case 3:
                                        c.sent, t(Object(ae.l)(n, e)), t(Object(ae.j)(n, e)), t(Object(ae.i)(n)), a("Success", "Claim transaction confirmed"), c.next = 14; break;
                                    case 10:
                                        c.prev = 10, c.t0 = c.catch(0), console.log(c.t0), i("An error occurred.", "Claim unsuccessful, please try again");
                                    case 14:
                                    case "end":
                                        return c.stop() } }), c, null, [
                                [0, 10]
                            ]) }))), [n, t, r, e, i, a]) } },
                ke = function(e) { var n = e.isClaimActive,
                        t = e.option,
                        r = e.percentToClaim,
                        c = Se(t).onClaim,
                        i = Object(C.useState)(!1),
                        a = Object(k.a)(i, 2),
                        o = a[0],
                        s = a[1]; return Object(R.jsx)(A.j, { mt: "8px", fullWidth: !0, isLoading: o, endIcon: o ? Object(R.jsx)(A.d, { spin: !0, color: "currentColor" }) : null, disabled: !n || o || !r || 0 === r, onClick: Object(Z.a)(ne.a.mark((function e() { return ne.a.wrap((function(e) { for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return s(!0), e.next = 3, c();
                                    case 3:
                                        s(!1);
                                    case 4:
                                    case "end":
                                        return e.stop() } }), e) }))), children: "Claim Tokens" }) },
                we = t(118),
                Ce = function(e, n) { var t = Object(me.a)(),
                        r = t.toastError,
                        c = t.toastSuccess; return { onApprove: Object(C.useCallback)(Object(Z.a)(ne.a.mark((function t() { var i; return ne.a.wrap((function(t) { for (;;) switch (t.prev = t.next) {
                                    case 0:
                                        return t.prev = 0, t.next = 3, e.approve(Object(se.g)(n), we.a.constants.MaxUint256);
                                    case 3:
                                        return i = t.sent, c("Success", "Got approval!"), t.abrupt("return", i);
                                    case 8:
                                        return t.prev = 8, t.t0 = t.catch(0), console.log("error", t.t0), r("An error occurred.", "Did not get approval, please try again"), t.abrupt("return", !1);
                                    case 13:
                                    case "end":
                                        return t.stop() } }), t, null, [
                                [0, 8]
                            ]) }))), [e, n, c, r]) } },
                De = function(e) { return Object(T.c)((function(n) { return n.presale.options.find((function(n) { return n.option === e })).userData })) },
                Te = function() { return Object(T.c)((function(e) { return e.presale.userTokenData })) },
                Fe = Object(F.e)(A.y)(f || (f = Object(w.a)(["\n  flex: 1;  \n  border: 2px;\n  border-radius: 10px;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  padding: 10px;\n  font-size: 16px;\n  box-shadow: 1px 1px 3px 1px #4e4b54;\n  background: linear-gradient(90deg, #f39aa7 0%, #fa798c57 100%, #fa798c57 100%);\n  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);\n  opacity: 0.85;\n  border-radius: 10px;\n  &:hover {\n    background-color: #4f34692e;\n    transform: scale(1.1);\n  }\n  \n  ", " {\n    padding: 20px;    \n  }\n"])), (function(e) { return e.theme.mediaQueries.nav })),
                Ae = Object(F.e)(A.Y)(x || (x = Object(w.a)(["\n  font-size: 1.2em;\n  font-weight: 600;\n  line-height: 1.1;\n  color: #ffffff;\n"]))),
                Ie = Object(F.e)(A.Y)(O || (O = Object(w.a)(["\n  font-size: 0.8em;\n  color: #ffffff;\n"]))),
                Ee = Object(F.e)(A.Y)(m || (m = Object(w.a)(["\n  text-align: center;\n  font-size: 0.9em;\n  font-weight: bold;\n  margin-top: 5px;\n  color: #ffffff;\n"]))),
                Me = function(e) { var n = e.statType,
                        t = e.value,
                        r = e.unit,
                        c = e.highlightColor; return Object(R.jsxs)(Fe, { children: [Object(R.jsx)(Ae, { children: t }), Object(R.jsx)(Ie, { children: r }), Object(R.jsx)(Ee, { color: c || "success", children: n })] }) },
                ze = F.e.div(h || (h = Object(w.a)(["\n    display: grid;\n    grid-template-columns: repeat(1fr);\n    grid-column-gap: 10px;\n    margin-bottom: 20px; \n    \n    &>div+div {\n        margin-top: 10px;\n    }\n\n    ", " {\n        grid-template-columns: repeat(3, 1fr);\n        &>div+div {\n            margin-top: 0;\n        }\n    }\n\n    ", " {\n        grid-column-gap: 30px;\n    }\n"])), (function(e) { return e.theme.mediaQueries.sm }), (function(e) { return e.theme.mediaQueries.nav })),
                Le = function(e) { var n = e.maxTokenCanBuy,
                        t = e.tokensUnclaimed,
                        r = e.percentToClaim; return Object(R.jsxs)(ze, { children: [Object(R.jsx)(Me, { statType: "max tokens can buy", value: n, unit: "CPF", highlightColor: "ultraFocus" }), Object(R.jsx)(Me, { statType: "unclaimed tokens", value: t, unit: "CPF", highlightColor: "primaryBright" }), Object(R.jsx)(Me, { statType: "can be claimed", value: r, unit: "%", highlightColor: "secondary" })] }) },
                Ne = Object(F.e)(oe.b)(g || (g = Object(w.a)(["\n    flex: 1 1 0%;\n"]))),
                Pe = Object(F.e)(te.a)(v || (v = Object(w.a)(["\n    width: 100%;\n    max-width: 100%;\n    border-radius: 8px;\n    padding: 24px;\n    margin: 0;    \n    background: #ffffff;\n"]))),
                Ue = F.e.div(y || (y = Object(w.a)(["\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  grid-gap: 5px;\n  ", " {\n    grid-gap: 20px;\n  }\n"])), (function(e) { return e.theme.mediaQueries.nav })),
                Be = function(e) { var n = e.option,
                        t = De(n),
                        r = t.userAllowance,
                        c = t.cakeUnclaimed,
                        i = t.cakeLastClaimed,
                        a = K(n),
                        o = Te(),
                        s = o.usdcBalance,
                        u = o.cakeBalance,
                        l = Object(I.a)(),
                        d = Object(z.a)().fastRefresh,
                        j = Object(L.c)().account,
                        b = Object(T.b)(),
                        p = Object(C.useState)(!1),
                        f = Object(k.a)(p, 2),
                        x = f[0],
                        O = f[1],
                        m = Object(C.useState)(0),
                        h = Object(k.a)(m, 2),
                        g = h[0],
                        v = h[1];
                    Object(C.useEffect)((function() { v(Math.round((new Date).getTime() / 1e3)) }), [b, d]); var y = new U.a(r),
                        S = new U.a(s),
                        w = new U.a(u),
                        D = Object(B.b)(y),
                        F = Number(i),
                        E = j && r && D.isGreaterThan(0),
                        M = Object(ce.i)(),
                        N = Ce(M, n).onApprove,
                        P = Object(C.useCallback)(Object(Z.a)(ne.a.mark((function e() { return ne.a.wrap((function(e) { for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return e.prev = 0, O(!0), e.next = 4, N();
                                    case 4:
                                        b(Object(ae.k)(j, n)), O(!1), e.next = 12; break;
                                    case 8:
                                        e.prev = 8, e.t0 = e.catch(0), console.error(e.t0), O(!1);
                                    case 12:
                                    case "end":
                                        return e.stop() } }), e, null, [
                                [0, 8]
                            ]) }))), [N, b, j, n]),
                        Y = Object(C.useMemo)((function() { return c ? new U.a(c) : re.h }), [c]),
                        G = Object(B.b)(new U.a(a.totalCakeLeft), 6),
                        Q = Number(a.firstHarvestTimestamp),
                        W = Number(a.startingTimeStamp),
                        V = a.timePerPercent,
                        _ = a.isSaleActive && g > 0 && W > 0 && g > W,
                        H = a.isClaimActive && Y.gt(0),
                        q = Object(C.useState)(0),
                        $ = Object(k.a)(q, 2),
                        J = $[0],
                        X = $[1],
                        ee = Object(C.useState)(0),
                        te = Object(k.a)(ee, 2),
                        oe = (te[0], te[1]);
                    Object(C.useEffect)((function() { var e;
                        X((e = 0 !== F ? F : 0 !== Q ? Q : null) ? Math.min(Math.floor((Math.round(Date.now() / 1e3) - e) / V), 100) : 0) }), [F, Q, V]), Object(C.useEffect)((function() { oe(J * Object(B.c)(Y, 6) / 100) }), [J, Y]); var se = Object(C.useMemo)((function() { var e = Object(B.c)(Y, 6),
                            n = a.purchaseLimit - e,
                            t = G.toNumber(); return t < n ? t : n }), [a.purchaseLimit, Y, G]); return Object(R.jsx)(Ne, { children: Object(R.jsxs)(Pe, { children: [Object(R.jsx)(A.o, { style: { padding: "10px 24px 24px" }, children: Object(R.jsx)(A.Y, { color: "#f39aa7", children: "BUY CPF" }) }), Object(R.jsxs)(A.p, { style: { borderTop: "1px solid #d18181" }, padding: ["12px", "12px", "12px", null, "24px"], children: [Object(R.jsx)(Le, { maxTokenCanBuy: se, tokensUnclaimed: Object(B.c)(Y, 6), percentToClaim: J }), Object(R.jsxs)(Ue, { children: [j ? E ? Object(R.jsx)(ve, { usdcBalance: S, tokenBalance: w, tokensUnclaimed: Y, usdcPerCake: a.usdcPerCake, purchaseLimit: a.purchaseLimit, tokensLeft: G, option: n, isSaleActive: _ }) : Object(R.jsx)(A.j, { mt: "8px", fullWidth: !0, isLoading: x, endIcon: x ? Object(R.jsx)(A.d, { spin: !0, color: "currentColor" }) : null, disabled: x, onClick: P, children: l(999, x ? "Approving" : "Approve To Buy") }) : Object(R.jsx)(ie.a, { mt: "8px", fullWidth: !0 }), j ? Object(R.jsx)(ke, { isClaimActive: H, option: n, percentToClaim: J }) : Object(R.jsx)(ie.a, { mt: "8px", fullWidth: !0 })] })] })] }) }) },
                Ye = t(346),
                Ge = t(1180);! function(e) { e.ENTRY = "Entry", e.LIVE = "Live", e.END = "End" }(S || (S = {})); var Qe, Re, We, Ve, _e, He, qe, $e, Je, Ke, Xe, Ze, en, nn, tn, rn, cn, an, on, sn, un, ln, dn, jn, bn, pn, fn, xn, On, mn, hn, gn, vn, yn, Sn, kn, wn, Cn, Dn, Tn = t(353),
                Fn = t.n(Tn),
                An = "\nflex-direction: column;\nalign-items: center;\njustify-content: center;\n",
                In = Object(F.e)(A.y)(Qe || (Qe = Object(w.a)(["\n  ", "\n\n  svg {\n    fill: ", ";\n  }\n"])), An, (function(e) { return e.theme.colors.textSubtle })),
                En = Object(F.e)(A.y)(Re || (Re = Object(w.a)(["\n  ", "\n"])), An),
                Mn = Object(F.e)(A.y)(We || (We = Object(w.a)(["\n  ", "\n\n  svg {\n    fill: ", ";\n  }\n"])), An, (function(e) { return e.theme.colors.textDisabled })),
                zn = Object(F.e)(A.Y)(Ve || (Ve = Object(w.a)(["\n  margin-top: 4px;\n  font-weight: 600;\n  font-size: 12px;\n"]))),
                Ln = function(e) { var n = e.stepText,
                        t = e.timeStamp,
                        r = e.index,
                        c = e.activeStepIndex,
                        i = r === c,
                        a = r > c; return r < c ? Object(R.jsxs)(In, { children: [Object(R.jsx)(A.r, {}), Object(R.jsx)(zn, { color: "textSubtle", children: n }), Object(R.jsx)(zn, { color: "textSubtle", children: M.a.unix(t).toString() })] }) : i ? Object(R.jsxs)(En, { children: [Object(R.jsx)(A.J, {}), Object(R.jsx)(zn, { color: "secondary", children: n }), Object(R.jsx)(zn, { color: "secondary", children: M.a.unix(t).toString() })] }) : a ? Object(R.jsxs)(Mn, { children: [Object(R.jsx)(A.r, {}), Object(R.jsx)(zn, { color: "textDisabled", children: n }), Object(R.jsx)(zn, { color: "textDisabled", children: M.a.unix(t).toString() })] }) : Object(R.jsx)("span", { children: "Er" }) },
                Nn = Object(F.e)(A.y)(_e || (_e = Object(w.a)(["\n  flex-direction: column;\n  justify-content: center;\n  ", " {\n    flex-direction: row;\n  }\n"])), (function(e) { return e.theme.mediaQueries.sm })),
                Pn = F.e.div(He || (He = Object(w.a)(["\n  margin: 12px 8px 0 8px;\n  width: 28px;\n  background-color: ", ";\n  height: 2px;\n  border-radius: 4px;\n  display: none;\n\n  ", " {\n    width: 36px;\n    display: block;\n  }\n"])), (function(e) { var n = e.isPastSpacer,
                        t = e.theme; return n ? t.colors.textSubtle : t.colors.textDisabled }), (function(e) { return e.theme.mediaQueries.sm })),
                Un = function(e) { var n = e.steps,
                        t = (Object(I.a)(), n.findIndex((function(e) { return e.state === S.LIVE }))); return Object(R.jsx)(Nn, { children: n.map((function(e, r) { var c = r < t,
                                i = e.text.toUpperCase(); return Object(R.jsxs)(D.a.Fragment, { children: [Object(R.jsx)(Ln, { stepText: i, timeStamp: e.timeStamp, index: r, activeStepIndex: t }), r + 1 < n.length && Object(R.jsx)(Pn, { isPastSpacer: c })] }, Fn()("ProgressStep-")) })) }) },
                Bn = Object(F.e)(A.y)(qe || (qe = Object(w.a)(["\n  width: 100%;\n  height: fit-content;\n  box-sizing: border-box;\n  border-radius: 0px 0px 24px 24px;\n  padding: 10px 0;\n  margin-bottom: 10px;\n  justify-content: space-around;\n\n  ", " {\n    flex-direction: column;\n  }\n"])), (function(e) { return e.theme.mediaQueries.xl })),
                Yn = (Object(F.e)(A.y)($e || ($e = Object(w.a)(["\n  align-items: center;\n  justify-content: center;\n  margin-right: 12px;\n\n  svg {\n    height: 48px;\n    width: 48px;\n  }\n\n  ", " {\n    margin-right: 24px;\n\n    svg {\n      height: 64px;\n      width: 64px;\n    }\n  }\n\n  ", " {\n    margin-bottom: 16px;\n    margin-right: 0;\n  }\n"])), (function(e) { return e.theme.mediaQueries.sm }), (function(e) { return e.theme.mediaQueries.xl })), Object(F.e)(A.y)(Je || (Je = Object(w.a)(["\n  justify-content: center;\n  align-items: center;\n  margin-bottom: 10px;\n"])))),
                Gn = function(e) { var n = e.steps,
                        t = (Object(Ye.a)().theme, Object(I.a)(), n.find((function(e) { return e.state === S.LIVE }))),
                        r = 0; if (t) { var c = t.timeStamp,
                            i = Date.now() / 1e3;
                        r = Math.round(c - i) } return Object(R.jsx)(Bn, { children: Object(R.jsxs)(A.y, { flexDirection: "column", justifyContent: "center", children: [t ? Object(R.jsxs)(Yn, { children: [Object(R.jsx)(A.Y, { bold: !0, textTransform: "uppercase", fontSize: "16px", mr: { _: "8px", sm: "16px" }, children: "Time to ".concat(t.text) }), Object(R.jsx)(Ge.a, { seconds: r })] }) : null, Object(R.jsx)(Un, { steps: n })] }) }) },
                Qn = D.a.memo(Gn),
                Rn = function() { var e = Object(C.useState)((new Date).getTime()),
                        n = Object(k.a)(e, 2),
                        t = n[0],
                        r = n[1]; return Object(C.useEffect)((function() { var e = setInterval((function() { r((function(e) { return e + 1e3 })) }), 1e3); return function() { return clearInterval(e) } }), []), t },
                Wn = Object(F.e)(oe.b)(Ke || (Ke = Object(w.a)(["\n    flex: 1 1 0%; \n\n    ", " {\n        grid-row-start: 2;\n        grid-row-end: 6;\n        grid-column-start: 2;\n        grid-column-end: 3;\n  }\n"])), (function(e) { return e.theme.mediaQueries.md })),
                Vn = Object(F.e)(te.a)(Xe || (Xe = Object(w.a)(["\n    width: 100%;\n    max-width: 100%;\n    border-radius: 8px;\n    padding: 24px;\n    margin: 0 0 32px;\n    background: #ffffff;\n"]))),
                _n = F.e.table(Ze || (Ze = Object(w.a)(["\n  width: 100%;\n  &>tbody>tr>td {\n    font-size: 14px;\n    padding-bottom: 12px;\n    color: #f39aa7;\n  }  \n\n  ", " {\n    &>tbody>tr>td {\n        font-size: 16px;       \n    }  \n  }\n\n  &>tbody>tr>.colored {\n    width: 50%;\n    color: ", ";\n    text-align: right;\n\n    &.highlight-price {\n        color: ", ";\n    }\n\n    &.highlight-condition {\n        color:", ";\n    }\n  }\n\n  &>tbody>tr>.get-usdc-link {\n    color: #f39aa7;\n\n    text-align: right;\n    &>* {\n        margin-left: auto;\n        line-height: 0;\n        color: #f39aa7;\n        &>* {\n            fill: #f39aa7;\n        }\n    }\n  }\n"])), (function(e) { return e.theme.mediaQueries.nav }), (function(e) { return e.theme.colors.primaryDark }), (function(e) { return e.theme.colors.primaryDark }), (function(e) { return e.theme.colors.primaryDark })),
                Hn = (Object(F.e)(A.I)(en || (en = Object(w.a)(["\n    color: ", ";\n    margin: 20px auto;\n"])), (function(e) { return e.theme.colors.primaryDark })), function(e) { var n = e.title,
                        t = e.condition,
                        r = e.saleDateStart,
                        c = e.saleDateEnd,
                        i = e.releaseActive,
                        a = e.releaseDuration,
                        o = (e.purchaseLimit, e.totalTokensSale),
                        s = e.pricePerToken,
                        u = e.option,
                        l = Object(L.c)().account,
                        d = Object(T.b)(),
                        j = K(u).isWhiteListActive;
                    Object(C.useEffect)((function() { l && d(Object(J.d)(l, u, j)) }), [l, d, u, j]);
                    X(u).eligibleToBuy; var b = Rn(),
                        p = Object(C.useMemo)((function() { for (var e = parseInt(r), n = parseInt(c), t = parseInt(i), a = Math.round(b / 1e3), o = [{ text: "Sale Start", timeStamp: e }, { text: "Sale End", timeStamp: n }, { text: "Claim Active", timeStamp: t }], s = 0; s < o.length; s++) 0 === s ? a < o[s].timeStamp ? o[s].state = S.LIVE : o[s].state = S.END : a < o[s].timeStamp ? o[s - 1].state === S.LIVE ? o[s].state = S.ENTRY : o[s].state = S.LIVE : o[s].state = S.END; return o }), [b, r, c, i]),
                        f = "#fb415f#/swap?outputCurrency=".concat(Object(se.k)()); return Object(R.jsx)(Wn, { children: Object(R.jsxs)(Vn, { children: [Object(R.jsx)(A.o, { style: { padding: "10px 24px 24px" }, children: Object(R.jsx)(A.Y, { color: "#f39aa7", children: n }) }), Object(R.jsxs)(A.p, { style: { borderTop: "1px solid #d18181" }, padding: ["0px", "0px", "12px", "12px", "24px"], children: [Object(R.jsx)("div", { children: Object(R.jsx)(Qn, { steps: p }) }), Object(R.jsx)(_n, { children: Object(R.jsxs)("tbody", { children: [t ? Object(R.jsxs)("tr", { children: [Object(R.jsx)("td", { children: "Condition:" }), Object(R.jsx)("td", { className: "colored highlight-condition", children: t })] }) : null, Object(R.jsxs)("tr", { children: [Object(R.jsx)("td", { children: "Release Tokens Per 1%:" }), Object(R.jsx)("td", { className: "colored", children: M.a.duration(a, "seconds").humanize() })] }), Object(R.jsxs)("tr", { children: [Object(R.jsx)("td", { children: "Tokens On Sale:" }), Object(R.jsx)("td", { className: "colored", children: o })] }), Object(R.jsxs)("tr", { children: [Object(R.jsx)("td", { children: "Presale Price:" }), Object(R.jsxs)("td", { className: "colored highlight-price", children: ["$", s, " USDC"] })] }), Object(R.jsxs)("tr", { children: [Object(R.jsx)("td", { children: Object(R.jsx)(R.Fragment, {}) }), Object(R.jsx)("td", { className: "get-usdc-link", children: Object(R.jsx)(A.I, { color: "tertiary", href: f, children: Object(R.jsx)("span", { children: "GET USDC" }) }) })] })] }) })] })] }) }) }),
                qn = t(1191),
                $n = t(1291),
                Jn = (t(1292), t(1403)),
                Kn = t(7),
                Xn = t(8),
                Zn = t(12),
                et = t(13),
                nt = t(1399),
                tt = function(e) { Object(Zn.a)(t, e); var n = Object(et.a)(t);

                    function t(e) { var r; return Object(Kn.a)(this, t), (r = n.call(this, e)).interval = void 0, r.state = { isAnimated: !1 }, r } return Object(Xn.a)(t, [{ key: "componentDidMount", value: function() { var e = this,
                                n = this.props,
                                t = n.repeat,
                                r = n.duration,
                                c = this.state.isAnimated;
                            t ? this.interval = window.setInterval((function() { e.setState({ isAnimated: !c }) }), 1e3 * r) : this.setState({ isAnimated: !c }) } }, { key: "componentWillUnmount", value: function() { window.clearInterval(this.interval) } }, { key: "render", value: function() { var e = this.props,
                                n = e.valueStart,
                                t = e.valueEnd,
                                r = e.duration,
                                c = e.easingFunction,
                                i = e.children,
                                a = this.state.isAnimated; return Object(R.jsx)(nt.a, { start: function() { return { value: n } }, update: function() { return { value: [a ? t : n], timing: { duration: 1e3 * r, ease: c } } }, children: function(e) { var n = e.value; return i(n) } }) } }]), t }(D.a.Component),
                rt = function(e) { var n = e.text,
                        t = e.percent; return Object(R.jsx)(tt, { valueStart: 0, valueEnd: t, duration: 1.4, easingFunction: Jn.a, repeat: !0, children: function(e) { return Object(R.jsx)($n.a, { value: e, text: "".concat(e.toFixed(2), " % ").concat(n), styles: Object($n.b)({ pathTransition: "none", textSize: "10px", textColor: "#f39aa7" }) }) } }) },
                ct = Object(F.e)(te.a)(nn || (nn = Object(w.a)(["\n    width: 100%;\n    max-width: 100%;\n    border-radius: 8px;\n    padding: 24px;\n    background: #ffffff;\n"]))),
                it = Object(F.e)(A.y)(tn || (tn = Object(w.a)(["\n    flex-direction: column;\n    justify-content: space-between;\n"]))),
                at = Object(F.e)(A.y)(rn || (rn = Object(w.a)([" \n    justify-content: center;\n    align-items: center;\n    flex-direction: column;\n\n    ", " {\n        flex-direction: column;\n    }\n"])), (function(e) { return e.theme.mediaQueries.md })),
                ot = Object(F.e)(A.A)(cn || (cn = Object(w.a)(["\n    text-align: center;\n    padding: 10px;\n    text-transform: uppercase;\n    color: #f39aa7\n"]))),
                st = Object(F.e)(A.Y)(an || (an = Object(w.a)(["\n    text-align: center;\n    padding: 5px;\n    text-transform: uppercase;\n    color: #f39aa7\n"]))),
                ut = F.e.div(on || (on = Object(w.a)(["\n    width: 150px;\n    padding: 16px 0;\n\n    ", " {\n        width: 200px;\n        padding: 32px 0;\n    }\n"])), (function(e) { return e.theme.mediaQueries.md })),
                lt = function(e) { var n = e.option,
                        t = K(n),
                        r = t.totalCakeSold ? Object(B.b)(new U.a(t.totalCakeSold), 6).toNumber() : 0,
                        c = Object(C.useMemo)((function() { return (t.totalCakeSold ? Object(B.b)(new U.a(t.totalCakeSold), 6).times(t.usdcPerCake) : re.h).toNumber() }), [t]),
                        i = Object(C.useMemo)((function() { return t.totalOnSale * t.usdcPerCake }), [t.totalOnSale, t.usdcPerCake]),
                        a = Object(C.useMemo)((function() { return c / i * 100 }), [c, i]); return Object(R.jsxs)(ct, { children: [Object(R.jsx)(ot, { children: "Total collected" }), Object(R.jsx)(ot, { children: Object(R.jsx)(qn.a, { color: "primaryDark", value: r, postfix: " CPF", decimals: 0 }) }), Object(R.jsx)(st, { children: "CPF collected since the start of the presale." }), Object(R.jsxs)(st, { children: ["Hardcap of $", i.toFixed(0)] }), Object(R.jsx)(it, { children: Object(R.jsx)(at, { children: Object(R.jsx)(ut, { children: Object(R.jsx)(rt, { percent: a, text: "reached" }) }) }) })] }) },
                dt = Object(F.e)(te.a)(sn || (sn = Object(w.a)(["\n    width: 100%;\n    max-width: 100%;\n    border-radius: 8px;\n    padding: 24px;\n    background: #ffffff\n"]))),
                jt = Object(F.e)(A.A)(un || (un = Object(w.a)(["\n    text-align: center;\n    padding: 20px;\n"]))),
                bt = Object(F.e)(A.y)(ln || (ln = Object(w.a)(["\n    margin-top: 20px;\n    justify-content: center;\n    flex-direction: column;\n\n    ", " {\n        flex-direction: column;\n    }\n"])), (function(e) { return e.theme.mediaQueries.md })),
                pt = F.e.table(dn || (dn = Object(w.a)(["\n  &>tbody>tr>td {\n    font-size: 14px;\n    padding-bottom: 12px;\n    color: ", ";\n  }\n\n  ", " {\n    &>tbody>tr>td {\n        font-size: 16px;       \n    }  \n  }\n\n  &>tbody>tr>.colored {\n    color: ", ";\n    text-align: right;\n  }\n"])), (function(e) { return e.theme.colors.ultraText }), (function(e) { return e.theme.mediaQueries.nav }), (function(e) { return e.theme.colors.primaryDark })),
                ft = function(e) { e.option; var n = Object(L.c)().account,
                        t = Te(),
                        r = t.usdcBalance,
                        c = t.cakeBalance,
                        i = new U.a(c),
                        a = new U.a(r),
                        o = De(Y.b.OPTION_1),
                        s = Object(C.useMemo)((function() { return (o.cakeUnclaimed ? Object(B.b)(new U.a(o.cakeUnclaimed), 6) : re.h).toNumber() }), [o]); return Object(R.jsxs)(dt, { children: [Object(R.jsx)(jt, { size: "lg", color: "#f39aa7", children: "USER STATS" }), Object(R.jsxs)(bt, { padding: ["0px", "0px", "12px", null, "24px"], children: [Object(R.jsx)(pt, { children: Object(R.jsxs)("tbody", { children: [Object(R.jsxs)("tr", { children: [Object(R.jsx)("td", { children: "Your USDC Balance:" }), Object(R.jsx)("td", { className: "colored", children: n ? "".concat(Object(B.c)(a, 6), " USDC") : "-" })] }), Object(R.jsxs)("tr", { children: [Object(R.jsx)("td", { children: "Your CPF Balance:" }), Object(R.jsx)("td", { className: "colored", children: n ? "".concat(Object(B.c)(i), " CPF") : "-" })] }), Object(R.jsxs)("tr", { children: [Object(R.jsx)("td", { children: "Your CPF Unclaimed:" }), Object(R.jsx)("td", { className: "colored", children: n ? "".concat(s, " CPF") : "-" })] })] }) }), n ? null : Object(R.jsx)(ie.a, { mt: "8px", fullWidth: !0 })] })] }) },
                xt = F.e.div(jn || (jn = Object(w.a)(["\n    ", " {\n        grid-row-start: 1;\n        grid-row-end: 3;\n        grid-column-start: 2;\n        grid-column-end: 3;\n    }\n"])), (function(e) { return e.theme.mediaQueries.md })),
                Ot = F.e.div(bn || (bn = Object(w.a)(["\n    display: grid;\n    grid-template-columns: 1fr;\n    grid-column-gap: 20px;\n    grid-row-gap: 20px;\n\n    ", " {\n        grid-template-columns: 1fr 1fr;\n    }\n"])), (function(e) { return e.theme.mediaQueries.md })),
                mt = function(e) { var n = e.option,
                        t = Object(L.c)().account,
                        r = K(n),
                        c = X(n).eligibleToBuy; return Object(R.jsxs)(Ot, { children: [Object(R.jsx)(lt, { option: n }), Object(R.jsx)(ft, { option: n }), Object(R.jsxs)(xt, { children: [Object(R.jsx)(Hn, { title: r.title, condition: r.condition, saleDateStart: r.startingTimeStamp, saleDateEnd: r.closingTimeStamp, releaseActive: r.claimTimeStamp, releaseDuration: r.timePerPercent, purchaseLimit: r.purchaseLimit, totalTokensSale: r.totalOnSale, pricePerToken: r.usdcPerCake, option: n }), !t || c ? Object(R.jsx)(Be, { option: n }) : null] })] }) },
                ht = Object(F.e)(Q)(pn || (pn = Object(w.a)(["\n  overflow: visible;\n  \n  ", " {\n        grid-row-start: 2;\n        grid-row-end: 3;\n        grid-column-start: 1;\n        grid-column-end: 3;\n    }   \n    width: 100%;\n"])), (function(e) { return e.theme.mediaQueries.md })),
                gt = Object(F.e)(A.h)(fn || (fn = Object(w.a)(["\n  padding: 0;\n"]))),
                vt = (Object(F.f)(xn || (xn = Object(w.a)(["\n  0% {\n    transform: scale(1)\n  }\n  10%, 20% {\n    transform: scale(.9) rotate(-8deg);\n  }\n  30%, 50%, 70% {\n    transform: scale(1.1) rotate(8deg);\n  } \n  40%, 60% {\n    transform: scale(1.1) rotate(-8deg);\n  }\n  100% {\n    transform: scale(1) rotate(0)\n  }\n"]))), D.a.forwardRef((function(e, n) { var t = Object(C.useState)(Y.b.OPTION_1),
                        r = Object(k.a)(t, 2),
                        c = r[0];
                    r[1]; return Object(R.jsxs)(ht, { children: [Object(R.jsx)("div", { ref: n }), Object(R.jsx)(gt, { children: c === Y.b.OPTION_1 && Object(R.jsx)(mt, { option: Y.b.OPTION_1 }) })] }) }))),
                yt = (Object(F.f)(On || (On = Object(w.a)(["\n    100% {\n\t\ttransform: rotate(1turn);\n\t}\n"]))), Object(F.e)(Q)(mn || (mn = Object(w.a)(["\n    padding: 25px;\n    margin-top: 20px;\n    justify-content: center;\n    align-items: center;\n    text-align: center;\n\tbox-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);\n\tbackground: transparent;\n\n    position: relative;\n\tz-index: 0;\t\n\toverflow: hidden;\t\n\n    &::before {\n\t\tcontent: '';\n\t\tposition: absolute;\n\t\tz-index: -2;\n\t\tleft: -50%;\n\t\ttop: -150%;\n\t\twidth: 200%;\n\t\theight: 400%;\t\t\t\t\n\t}\n\t\n\t&::after {\n\t\tcontent: '';\n\t\tposition: absolute;\n\t\tz-index: -1;\n\t\tleft: 2px;\n\t\ttop: 2px;\n\t\twidth: calc(100% - 4px);\n\t\theight: calc(100% - 4px);\n\t\tbackground: #1a1c34;\n\t\tborder-radius: 5px;\n\t\t\n\tbackground: linear-gradient(90deg, #f39aa7 0%, #fa798c57 100%, #fa798c57 100%);\n\tbox-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);\n    opacity: 0.85;\n\tborder-radius: 33px;\n\t}\n"])))),
                St = Object(F.e)(A.A)(hn || (hn = Object(w.a)(['\n    text-transform: uppercase;\n    font-size: 16px;\n\tcolor: "#ffffff";\n\n    &>span {\n        color: ', "\n    }\n"])), (function(e) { return e.theme.colors.binance })),
                kt = function(e) { var n = e.scrollToBuy; return Object(R.jsxs)(yt, { children: [Object(R.jsx)(St, { color: "#ffffff", children: "Presale with discount price is in ended" }), Object(R.jsx)(A.j, { mt: "20px", onClick: n, variant: "primarycronos", children: "VIEW DETAILS" })] }) },
                wt = "fantomPresaleEndDisplayed",
                Ct = Object(F.e)(A.A)(gn || (gn = Object(w.a)(["\n    color: ", ";\n    font-size: 3em;\n    text-transform: uppercase;\n"])), (function(e) { return e.theme.colors.text })),
                Dt = F.e.span(vn || (vn = Object(w.a)(["\n    color: ", ";\n    font-size: 1.5em;\n    text-transform: uppercase;\n    margin-top: 15px;\n"])), (function(e) { return e.theme.colors.textSubtle })),
                Tt = Object(F.f)(yn || (yn = Object(w.a)(["\n  0%, 100% {\n    transform: scale(1);\n  }\n  50% {\n    transform: scale(1.05);\n  }\n"]))),
                Ft = (F.e.div(Sn || (Sn = Object(w.a)(["    \n    width: 100%;\n    text-align: center;\n    max-width: 300px;\n    margin: 0 auto;\n\n    ", " {\n        width: 80%;\n    }\n\n    animation: 2s ease-in-out 0s infinite normal none running ", ";\n    transform: translate3d(0px, 0px, 0px);\n"])), (function(e) { return e.theme.mediaQueries.md }), Tt), Object(F.e)(A.y)(kn || (kn = Object(w.a)(["    \n    width: 100%;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    padding-top: 20px;\n\n    ", " {\n        padding-top: 30px;\n    }\n\n    ", " {\n        padding-top: 30px;\n    }\n"])), (function(e) { return e.theme.mediaQueries.md }), (function(e) { return e.theme.mediaQueries.lg }))),
                At = Object(F.e)(A.y)(wn || (wn = Object(w.a)(["\n    padding: 0 30px;\n    justify-content: space-around;\n    flex-direction: column-reverse;\n\n    ", " {\n        flex-direction: row;\n    }\n"])), (function(e) { return e.theme.mediaQueries.md })),
                It = F.e.div(Cn || (Cn = Object(w.a)(["\n    display: grid;\n    grid-template-columns: 1fr;\n    margin-top: 20px;\n    grid-column-gap: 20px;\n    grid-row-gap: 20px;\n\n    ", " {\n        grid-template-columns: 1fr 1fr;\n    }\n"])), (function(e) { return e.theme.mediaQueries.md })),
                Et = F.e.div(Dn || (Dn = Object(w.a)(["\n    padding: 20px;\n    margin-top: 20px;\n"]))),
                Mt = function() { var e = Object(I.a)();! function(e, n, t) { Object(C.useEffect)((function() { e && n(Object(J.c)(e)) }), [e, n, t]) }(Object(L.c)().account, Object(T.b)(), Object(z.a)().slowRefresh); var n, t = D.a.useRef(null),
                        r = (n = Y.b.OPTION_1, Object(T.c)((function(e) { return e.presale.options.find((function(e) { return e.option === n })).publicData }))),
                        c = r.totalCakeLeft,
                        i = r.closingTimeStamp,
                        a = Object(C.useMemo)((function() { return Object(B.b)(new U.a(c), 6) }), [c]),
                        o = Object(C.useState)(0),
                        s = Object(k.a)(o, 2),
                        u = s[0],
                        l = s[1],
                        d = a.eq(0),
                        j = Object(A.ib)(Object(R.jsx)($, { isHardCapMet: d })),
                        b = Object(k.a)(j, 1)[0];
                    Object(C.useEffect)((function() { l(i ? M.a.unix(Number(i)).diff(M()(), "second") : 0) }), [i]); var p = u < 0 || d; return Object(C.useEffect)((function() {!localStorage.getItem(wt) && p && (localStorage.setItem(wt, "true"), Object(N.delay)((function() { return b() }), 1e3)) }), [p, b]), Object(R.jsxs)(Et, { children: [Object(R.jsx)(At, { children: Object(R.jsxs)(Ft, { children: [Object(R.jsx)(Ct, { children: e(999, "Presale ") }), Object(R.jsx)(Dt, { children: e(999, "GET SOME EARLY CPF") }), Object(R.jsx)(kt, { scrollToBuy: function() { t.current.scrollIntoView({ behavior: "smooth" }) } })] }) }), Object(R.jsx)(It, { children: Object(R.jsx)(vt, { ref: t }) })] }) } } }
]);