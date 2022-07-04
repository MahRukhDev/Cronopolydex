(this["webpackJsonpcougar-cronos-frontend-farms"] = this["webpackJsonpcougar-cronos-frontend-farms"] || []).push([
    [11], {
        1166: function(e, n, t) {
            "use strict";
            var i, r = t(67),
                c = t(0),
                o = t(1178),
                a = t.n(o),
                s = t(10),
                l = t(42),
                d = t(19),
                j = Object(s.e)(l.Y)(i || (i = Object(r.a)(["\n  color: ", ";\n"])), (function(e) {
                    var n = e.isDisabled,
                        t = e.color,
                        i = e.theme;
                    return n ? i.colors.textDisabled : t
                })),
                b = function(e) {
                    var n = e.value,
                        t = e.fontSize,
                        i = e.color,
                        r = e.decimals,
                        o = e.isDisabled,
                        s = e.unit,
                        l = (e.prefix, Object(c.useRef)(0));
                    return Object(c.useEffect)((function() { l.current = n }), [n]), Object(d.jsxs)(j, { bold: !0, color: i, fontSize: t, isDisabled: o, children: [Object(d.jsx)(a.a, { start: l.current, end: n, decimals: r, duration: 1, separator: "," }), s && Object(d.jsx)("span", { children: s })] })
                };
            b.defaultProps = { fontSize: "32px", isDisabled: !1, color: "text", decimals: 3 }, n.a = b
        },
        1168: function(e, n, t) {
            "use strict";
            t.d(n, "c", (function() { return o })), t.d(n, "b", (function() { return a })), t.d(n, "a", (function() { return d })), t.d(n, "e", (function() { return c })), t.d(n, "d", (function() { return s })), t.d(n, "f", (function() { return l }));
            t(0);
            var i = t(42),
                r = t(19),
                c = function() { return Object(r.jsx)(i.W, { variant: "failure", outline: !0, startIcon: Object(r.jsx)(i.db, {}), children: "No Fees" }) },
                o = function() { return Object(r.jsx)(i.W, { variant: "secondary", outline: !0, startIcon: Object(r.jsx)(i.db, {}), children: "Core" }) },
                a = function() { return Object(r.jsx)(i.W, { variant: "textSubtle", outline: !0, startIcon: Object(r.jsx)(i.w, {}), children: "Community" }) },
                s = function() { return Object(r.jsx)(i.W, { variant: "success", outline: !0, startIcon: Object(r.jsx)(i.db, {}), children: "Farming" }) },
                l = function() { return Object(r.jsx)(i.W, { variant: "textDisabled", startIcon: Object(r.jsx)(i.d, {}), children: "Waiting" }) },
                d = function() { return Object(r.jsx)(i.W, { variant: "binance", outline: !0, startIcon: Object(r.jsx)(i.g, {}), children: "Binance" }) }
        },
        1180: function(e, n, t) {
            "use strict";
            var i, r = t(32),
                c = t(67),
                o = t(0),
                a = t(10),
                s = t(19),
                l = a.e.div(i || (i = Object(c.a)(["\n  font-size: ", ";\n  color: ", ";\n"])), (function(e) { var n = e.fontSize; return null !== n && void 0 !== n ? n : "1em" }), (function(e) { return e.theme.colors.secondary }));
            n.a = function(e) {
                var n = e.seconds,
                    t = e.fontSize,
                    i = void 0 === t ? "" : t,
                    c = Object(o.useState)(n),
                    a = Object(r.a)(c, 2),
                    d = a[0],
                    j = a[1];
                Object(o.useEffect)((function() { if (d) { var e = setInterval((function() { j(d - 1) }), 1e3); return function() { return clearInterval(e) } } }), [d]);
                var b = Math.floor(d / 86400).toLocaleString("en-US", { minimumIntegerDigits: 2, useGrouping: !1 }),
                    u = Math.floor(d % 86400),
                    x = Math.floor(u / 3600).toLocaleString("en-US", { minimumIntegerDigits: 2, useGrouping: !1 }),
                    O = Math.floor(u % 3600 / 60).toLocaleString("en-US", { minimumIntegerDigits: 2, useGrouping: !1 }),
                    f = Math.floor(u % 3600 % 60).toLocaleString("en-US", { minimumIntegerDigits: 2, useGrouping: !1 });
                return Object(s.jsx)(l, { fontSize: i, children: Object(s.jsx)("h5", { children: "".concat(b, "d ").concat(x, "h ").concat(O, "m ").concat(f, "s") }) })
            }
        },
        1192: function(e, n, t) {
            "use strict";
            t.d(n, "a", (function() { return l }));
            var i, r, c = t(67),
                o = t(42),
                a = t(10),
                s = a.e.div(i || (i = Object(c.a)(["\n  display: flex;\n  justify-content: center;\n  flex-wrap: wrap;\n  & > * {\n    min-width: 280px;\n    max-width: 31.5%;\n    width: 100%;\n    margin: 0 8px;\n    margin-bottom: 32px;\n  }\n"]))),
                l = Object(a.e)(o.y)(r || (r = Object(c.a)(["\n  gap: ", ";\n"])), (function(e) { return e.gap }));
            n.b = s
        },
        1236: function(e, n, t) {
            "use strict";
            var i, r = t(67),
                c = (t(0), t(10)),
                o = t(64),
                a = t(132),
                s = t(42),
                l = t(1147),
                d = t(19);
            n.a = function() {
                var e = Object(o.h)(),
                    n = e.url,
                    t = e.isExact,
                    i = Object(l.a)();
                return Object(d.jsx)(j, { children: Object(d.jsxs)(s.k, { activeIndex: t ? 0 : 1, size: "sm", variant: "subtle", children: [Object(d.jsx)(s.l, { as: a.b, to: "".concat(n), children: i(999, "Active") }), Object(d.jsx)(s.l, { as: a.b, to: "".concat(n, "/history"), children: i(999, "Inactive") })] }) })
            };
            var j = c.e.div(i || (i = Object(r.a)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  margin-bottom: 32px;\n  margin-top: 20px;\n"])))
        },
        1293: function(e, n, t) {
            var i = t(1294),
                r = t(177);
            e.exports = function(e, n, t, c) { return null == e ? [] : (r(n) || (n = null == n ? [] : [n]), r(t = c ? void 0 : t) || (t = null == t ? [] : [t]), i(e, n, t)) }
        },
        1294: function(e, n, t) {
            var i = t(615),
                r = t(607),
                c = t(1265),
                o = t(1332),
                a = t(1337),
                s = t(625),
                l = t(1338),
                d = t(1271),
                j = t(177);
            e.exports = function(e, n, t) {
                n = n.length ? i(n, (function(e) { return j(e) ? function(n) { return r(n, 1 === e.length ? e[0] : e) } : e })) : [d];
                var b = -1;
                n = i(n, s(c));
                var u = o(e, (function(e, t, r) { return { criteria: i(n, (function(n) { return n(e) })), index: ++b, value: e } }));
                return a(u, (function(e, n) { return l(e, n, t) }))
            }
        },
        1332: function(e, n, t) {
            var i = t(1272),
                r = t(206);
            e.exports = function(e, n) {
                var t = -1,
                    c = r(e) ? Array(e.length) : [];
                return i(e, (function(e, i, r) { c[++t] = n(e, i, r) })), c
            }
        },
        1337: function(e, n) { e.exports = function(e, n) { var t = e.length; for (e.sort(n); t--;) e[t] = e[t].value; return e } },
        1338: function(e, n, t) {
            var i = t(1339);
            e.exports = function(e, n, t) { for (var r = -1, c = e.criteria, o = n.criteria, a = c.length, s = t.length; ++r < a;) { var l = i(c[r], o[r]); if (l) return r >= s ? l : l * ("desc" == t[r] ? -1 : 1) } return e.index - n.index }
        },
        1339: function(e, n, t) {
            var i = t(207);
            e.exports = function(e, n) {
                if (e !== n) {
                    var t = void 0 !== e,
                        r = null === e,
                        c = e === e,
                        o = i(e),
                        a = void 0 !== n,
                        s = null === n,
                        l = n === n,
                        d = i(n);
                    if (!s && !d && !o && e > n || o && a && l && !s && !d || r && a && l || !t && l || !c) return 1;
                    if (!r && !o && !d && e < n || d && t && c && !r && !o || s && t && c || !a && c || !l) return -1
                }
                return 0
            }
        },
        1409: function(e, n, t) {
            "use strict";
            t.r(n), t.d(n, "default", (function() { return Mn }));
            var i, r, c, o, a, s, l, d, j, b, u, x, O, f, p = t(67),
                h = t(32),
                m = t(16),
                g = t(0),
                v = t.n(g),
                k = t(64),
                y = t(9),
                w = t.n(y),
                S = t(10),
                C = t(79),
                z = t(42),
                D = t(85),
                N = t(1293),
                I = t.n(N),
                A = t(1273),
                B = t.n(A),
                F = t(1147),
                W = t(134),
                E = t(65),
                P = t(176),
                M = t(5),
                R = t(1192),
                T = t(27),
                L = t(331),
                U = t(1168),
                Y = S.e.div(i || (i = Object(p.a)(["\n  background-color: rgb(16 12 12 / 82%);\n  box-shadow: 0px 2px 12px -8px rgba(25, 19, 38, 0.1), 0px 1px 1px rgba(25, 19, 38, 0.05);\n  border-radius: 32px;\n  display: flex;\n  color: ", ";\n  box-shadow: ", ";\n  flex-direction: column;\n  position: relative;\n"])), (function(e) { var n = e.isFinished; return e.theme.colors[n ? "textDisabled" : "secondary"] }), (function(e) { return e.isActive ? "0px 0px 0px 1px #0098A1, 0px 0px 4px 8px rgba(31, 199, 212, 0.4);" : "0px 2px 12px -8px rgba(25, 19, 38, 0.1), 0px 1px 1px rgba(25, 19, 38, 0.05)" })),
                q = S.e.div(r || (r = Object(p.a)(["\n  color: ", ";\n  font-weight: 600;\n  font-size: 24px;\n  line-height: 1.1;\n  margin-bottom: 14px;\n"])), (function(e) { var n = e.isFinished; return e.theme.colors[n ? "textDisabled" : "text"] })),
                G = t(19),
                V = S.e.div(c || (c = Object(p.a)(["\n  color: ", ";\n  font-size: 40px;\n  font-weight: 600;\n  line-height: 1.2;\n"])), (function(e) { return e.theme.colors.text })),
                _ = S.e.div(o || (o = Object(p.a)(["\n  color: ", ";\n  font-size: 14px;\n  margin-bottom: 16px;\n"])), (function(e) { return e.theme.colors.textSubtle })),
                J = S.e.div(a || (a = Object(p.a)(["\n  display: flex;\n  font-size: 14px;\n"]))),
                H = S.e.div(s || (s = Object(p.a)(["\n  color: ", ";\n  font-size: 14px;\n  line-height: 1.5;\n"])), (function(e) { return e.theme.colors.text })),
                Q = S.e.div(l || (l = Object(p.a)(["\n  border-top: 1px solid ", ";\n  padding: 24px;\n"])), (function(e) { return e.theme.isDark ? "#524B63" : "#E9EAEB" })),
                K = function() { var e = Object(F.a)(); return Object(G.jsxs)(Y, { children: [Object(G.jsxs)("div", { style: { padding: "24px" }, children: [Object(G.jsxs)(q, { children: [e(414, "Your Project?"), " ", Object(G.jsx)("span", { role: "img", "aria-label": "eyes", children: "\ud83d\udc40" })] }), Object(G.jsx)(z.D, { src: "/images/egg/cgs-jungle-question.png", width: 64, height: 64, mb: "8px", alt: "Your project here" }), Object(G.jsx)(V, { children: "???" }), Object(G.jsx)(_, { children: e(416, "Create a pool for your token") }), Object(G.jsx)(z.j, { variant: "secondary", as: "a", href: "https://docs.google.com/forms/d/e/1FAIpQLScSv2WT30VvryjIci6kz_WOpC9uTiYnXrPJErr2z264Yj_qxA/viewform", external: !0, fullWidth: !0, mb: "16px", children: e(418, "Apply Now") }), Object(G.jsxs)(J, { children: [Object(G.jsxs)("div", { style: { flex: 1 }, children: [e(736, "APR"), ":"] }), Object(G.jsx)(H, { children: "??" })] }), Object(G.jsxs)(J, { children: [Object(G.jsxs)("div", { style: { flex: 1 }, children: [Object(G.jsxs)("span", { role: "img", "aria-label": "syrup", children: ["\ud83e\udd5e", " "] }), e(384, "Your Stake"), ":"] }), Object(G.jsx)(H, { children: "??? CRP" })] })] }), Object(G.jsx)(Q, { children: Object(G.jsx)(U.b, {}) })] }) },
                X = t(6),
                Z = t(1),
                $ = t.n(Z),
                ee = t(1153),
                ne = S.e.div(d || (d = Object(p.a)(["\n  color: ", ";\n  font-size: 14px;\n"])), (function(e) { var n = e.isFinished; return e.theme.colors[n ? "textDisabled" : "primary"] })),
                te = function(e) {
                    var n = e.text,
                        t = e.isFinished,
                        i = void 0 !== t && t;
                    return Object(G.jsx)(ne, { isFinished: i, children: n })
                },
                ie = t(1150),
                re = t(1163),
                ce = t(1169),
                oe = t(1170),
                ae = t(1159),
                se = t(1166),
                le = t(332),
                de = t(1180),
                je = t(1165),
                be = t(1177),
                ue = function(e) {
                    var n = e.max,
                        t = e.onConfirm,
                        i = e.onDismiss,
                        r = e.tokenName,
                        c = void 0 === r ? "" : r,
                        o = Object(g.useState)(""),
                        a = Object(h.a)(o, 2),
                        s = a[0],
                        l = a[1],
                        d = Object(g.useState)(!1),
                        j = Object(h.a)(d, 2),
                        b = j[0],
                        u = j[1],
                        x = Object(F.a)(),
                        O = Object(g.useMemo)((function() { return Object(E.e)(n) }), [n]),
                        f = Object(g.useCallback)((function(e) { l(e.currentTarget.value) }), [l]),
                        p = Object(g.useCallback)((function() { l(O) }), [O, l]);
                    return Object(G.jsxs)(z.P, {
                        title: "".concat(x(316, "Deposit"), " ").concat(c, " Tokens"),
                        onDismiss: i,
                        children: [Object(G.jsx)(be.a, { value: s, onSelectMax: p, onChange: f, max: O, symbol: c }), Object(G.jsxs)(je.a, {
                            children: [Object(G.jsx)(z.j, { fullWidth: !0, variant: "secondary", onClick: i, children: x(462, "Cancel") }), Object(G.jsx)(z.j, {
                                fullWidth: !0,
                                disabled: b,
                                onClick: Object(X.a)($.a.mark((function e() {
                                    return $.a.wrap((function(e) {
                                        for (;;) switch (e.prev = e.next) {
                                            case 0:
                                                return u(!0), e.next = 3, t(Object(E.d)(new w.a(s)).toString());
                                            case 3:
                                                u(!1), i();
                                            case 5:
                                            case "end":
                                                return e.stop()
                                        }
                                    }), e)
                                }))),
                                children: b ? x(488, "Pending Confirmation") : x(464, "Confirm")
                            })]
                        })]
                    })
                },
                xe = function(e) {
                    var n = e.onConfirm,
                        t = e.onDismiss,
                        i = e.max,
                        r = e.tokenName,
                        c = void 0 === r ? "" : r,
                        o = Object(g.useState)(""),
                        a = Object(h.a)(o, 2),
                        s = a[0],
                        l = a[1],
                        d = Object(g.useState)(!1),
                        j = Object(h.a)(d, 2),
                        b = j[0],
                        u = j[1],
                        x = Object(F.a)(),
                        O = Object(g.useMemo)((function() { return Object(E.e)(i) }), [i]),
                        f = Object(g.useCallback)((function(e) { l(e.currentTarget.value) }), [l]),
                        p = Object(g.useCallback)((function() { l(O) }), [O, l]);
                    return Object(G.jsxs)(z.P, {
                        title: "Withdraw ".concat(c),
                        onDismiss: t,
                        children: [Object(G.jsx)(be.a, { onSelectMax: p, onChange: f, value: s, max: O, symbol: c }), Object(G.jsxs)(je.a, {
                            children: [Object(G.jsx)(z.j, { variant: "secondary", onClick: t, children: x(462, "Cancel") }), Object(G.jsx)(z.j, {
                                disabled: b,
                                onClick: Object(X.a)($.a.mark((function e() {
                                    return $.a.wrap((function(e) {
                                        for (;;) switch (e.prev = e.next) {
                                            case 0:
                                                return u(!0), e.next = 3, n(Object(E.d)(new w.a(s)).toString());
                                            case 3:
                                                u(!1), t();
                                            case 5:
                                            case "end":
                                                return e.stop()
                                        }
                                    }), e)
                                }))),
                                children: b ? x(488, "Pending Confirmation") : x(464, "Confirm")
                            })]
                        })]
                    })
                },
                Oe = function(e) {
                    var n = e.earnings,
                        t = e.onConfirm,
                        i = e.onDismiss,
                        r = e.tokenName,
                        c = void 0 === r ? "" : r,
                        o = Object(g.useState)(!1),
                        a = Object(h.a)(o, 2),
                        s = a[0],
                        l = a[1],
                        d = Object(F.a)(),
                        j = Object(g.useMemo)((function() { return Object(E.e)(n) }), [n]);
                    return Object(G.jsxs)(z.P, {
                        title: "".concat(d(999, "Compound"), " ").concat(d(330, "".concat(c, " Earned"))),
                        onDismiss: i,
                        children: [Object(G.jsx)(fe, { children: Object(G.jsx)(se.a, { value: Number(j) }) }), Object(G.jsxs)(je.a, {
                            children: [Object(G.jsx)(z.j, { fullWidth: !0, variant: "secondary", onClick: i, children: d(462, "Cancel") }), Object(G.jsx)(z.j, {
                                id: "compound-cake",
                                fullWidth: !0,
                                disabled: s,
                                onClick: Object(X.a)($.a.mark((function e() {
                                    return $.a.wrap((function(e) {
                                        for (;;) switch (e.prev = e.next) {
                                            case 0:
                                                return l(!0), e.next = 3, t(j);
                                            case 3:
                                                l(!1), i();
                                            case 5:
                                            case "end":
                                                return e.stop()
                                        }
                                    }), e)
                                }))),
                                children: s ? d(488, "Pending Confirmation") : d(464, "Confirm")
                            })]
                        })]
                    })
                },
                fe = S.e.div(j || (j = Object(p.a)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-direction: row;\n"]))),
                pe = S.e.div(b || (b = Object(p.a)(["\n  color: #ed4b9e;\n  font-size: 24px;\n  font-weight: 600;\n  text-transform: uppercase;\n"]))),
                he = S.e.a(u || (u = Object(p.a)(["\n  color: #ed4b9e;\n  font-size: 14px;\n"]))),
                me = function(e) { var n = e.hasBalance; return void 0 !== n && n ? Object(G.jsxs)("div", { children: [Object(G.jsx)(pe, { children: "Action Required" }), Object(G.jsx)(he, { href: " https://pancakeswap.medium.com/urgent-action-required-changes-to-syrup-pools-70b98d7b2541", target: "_blank", children: "What do I need to do?" })] }) : Object(G.jsx)("div", { children: Object(G.jsx)(q, { isFinished: !0, children: "FINISHED" }) }) },
                ge = t(132),
                ve = S.e.button(x || (x = Object(p.a)(["\n  align-items: center;\n  background-color: ", ";\n  border: 0;\n  border-radius: 12px;\n  color: ", ";\n  cursor: pointer;\n  display: flex;\n  font-size: ", "px;\n  font-weight: 700;\n  height: ", "px;\n  justify-content: center;\n  outline: none;\n  padding-left: ", "px;\n  padding-right: ", "px;\n  pointer-events: ", ";\n  width: 100%;\n  width: 100px;\n  height: 40px;\n  font-size: 16px;\n  padding: 0px;\n  z-index: 1;\n\n  &:hover {\n    background-color: ", ";\n  }\n"])), (function(e) { return e.disabled ? "#ddd" : "#3c9e73" }), (function(e) { return e.disabled ? "#acaaaf" : "#fff" }), (function(e) { return e.fontSize }), (function(e) { return e.size }), (function(e) { return e.padding }), (function(e) { return e.padding }), (function(e) { return e.disabled ? "none" : void 0 }), (function(e) { return e.disabled ? "#969696" : "#77af85" })),
                ke = Object(S.e)(ge.b)(O || (O = Object(p.a)(["\n  align-items: center;\n  color: inherit;\n  display: flex;\n  flex: 1;\n  height: 56px;\n  justify-content: center;\n  margin: 0 ", "px;\n  padding: 0 ", "px;\n  text-decoration: none;\n"])), (function(e) { return -e.theme.spacing[4] }), (function(e) { return e.theme.spacing[4] })),
                ye = S.e.a(f || (f = Object(p.a)(["\n  align-items: center;\n  color: inherit;\n  display: flex;\n  flex: 1;\n  height: 56px;\n  justify-content: center;\n  margin: 0 ", "px;\n  padding: 0 ", "px;\n  text-decoration: none;\n"])), (function(e) { return -e.theme.spacing[4] }), (function(e) { return e.theme.spacing[4] })),
                we = function(e) {
                    var n, t, i, r = e.children,
                        c = e.disabled,
                        o = e.href,
                        a = e.onClick,
                        s = e.size,
                        l = e.text,
                        d = e.to,
                        j = Object(g.useContext)(S.a),
                        b = j.colors,
                        u = j.spacing,
                        x = b.background;
                    switch (s) {
                        case "sm":
                            t = u[3], n = 36, i = 14;
                            break;
                        case "lg":
                            t = u[4], n = 72, i = 16;
                            break;
                        default:
                            t = u[4], n = 56, i = 16
                    }
                    var O = Object(g.useMemo)((function() { return d ? Object(G.jsx)(ke, { to: d, children: l }) : o ? Object(G.jsx)(ye, { href: o, target: "__blank", children: l }) : l }), [o, l, d]);
                    return Object(G.jsxs)(ve, { boxShadow: undefined, color: x, disabled: c, fontSize: i, onClick: a, padding: t, size: n, children: [r, O] })
                },
                Se = t(47),
                Ce = t(101),
                ze = t.n(Ce);

            function De() { return De = Object.assign || function(e) { for (var n = 1; n < arguments.length; n++) { var t = arguments[n]; for (var i in t) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]) } return e }, De.apply(this, arguments) }

            function Ne(e, n) {
                if (null == e) return {};
                var t, i, r = function(e, n) {
                    if (null == e) return {};
                    var t, i, r = {},
                        c = Object.keys(e);
                    for (i = 0; i < c.length; i++) t = c[i], n.indexOf(t) >= 0 || (r[t] = e[t]);
                    return r
                }(e, n);
                if (Object.getOwnPropertySymbols) { var c = Object.getOwnPropertySymbols(e); for (i = 0; i < c.length; i++) t = c[i], n.indexOf(t) >= 0 || Object.prototype.propertyIsEnumerable.call(e, t) && (r[t] = e[t]) }
                return r
            }
            var Ie = Object(g.forwardRef)((function(e, n) {
                var t = e.color,
                    i = void 0 === t ? "currentColor" : t,
                    r = e.size,
                    c = void 0 === r ? 24 : r,
                    o = Ne(e, ["color", "size"]);
                return v.a.createElement("svg", De({ ref: n, xmlns: "http://www.w3.org/2000/svg", width: c, height: c, viewBox: "0 0 24 24", fill: "none", stroke: i, strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }, o), v.a.createElement("polyline", { points: "18 15 12 9 6 15" }))
            }));
            Ie.propTypes = { color: ze.a.string, size: ze.a.oneOfType([ze.a.string, ze.a.number]) }, Ie.displayName = "ChevronUp";
            var Ae = Ie;

            function Be() { return Be = Object.assign || function(e) { for (var n = 1; n < arguments.length; n++) { var t = arguments[n]; for (var i in t) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]) } return e }, Be.apply(this, arguments) }

            function Fe(e, n) {
                if (null == e) return {};
                var t, i, r = function(e, n) {
                    if (null == e) return {};
                    var t, i, r = {},
                        c = Object.keys(e);
                    for (i = 0; i < c.length; i++) t = c[i], n.indexOf(t) >= 0 || (r[t] = e[t]);
                    return r
                }(e, n);
                if (Object.getOwnPropertySymbols) { var c = Object.getOwnPropertySymbols(e); for (i = 0; i < c.length; i++) t = c[i], n.indexOf(t) >= 0 || Object.prototype.propertyIsEnumerable.call(e, t) && (r[t] = e[t]) }
                return r
            }
            var We = Object(g.forwardRef)((function(e, n) {
                var t = e.color,
                    i = void 0 === t ? "currentColor" : t,
                    r = e.size,
                    c = void 0 === r ? 24 : r,
                    o = Fe(e, ["color", "size"]);
                return v.a.createElement("svg", Be({ ref: n, xmlns: "http://www.w3.org/2000/svg", width: c, height: c, viewBox: "0 0 24 24", fill: "none", stroke: i, strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }, o), v.a.createElement("polyline", { points: "6 9 12 15 18 9" }))
            }));
            We.propTypes = { color: ze.a.string, size: ze.a.oneOfType([ze.a.string, ze.a.number]) }, We.displayName = "ChevronDown";
            var Ee, Pe, Me, Re, Te, Le, Ue, Ye, qe, Ge, Ve, _e, Je, He, Qe, Ke, Xe, Ze, $e, en, nn, tn, rn, cn, on = We,
                an = t(328),
                sn = t(330),
                ln = (Ee = {}, Object(Se.a)(Ee, M.c.BINANCE, U.a), Object(Se.a)(Ee, M.c.CORE, U.c), Object(Se.a)(Ee, M.c.COMMUNITY, U.b), Ee),
                dn = S.e.div(Pe || (Pe = Object(p.a)(["\n  border-top: 1px solid ", ";\n  color: ", ";\n  padding: 24px;\n"])), (function(e) { return e.theme.isDark ? "#524B63" : "#E9EAEB" }), (function(e) { var n = e.isFinished; return e.theme.colors[n ? "textDisabled2" : "primary2"] })),
                jn = S.e.button(Me || (Me = Object(p.a)(["\n  align-items: center;\n  background-color: transparent;\n  border: 0;\n  color: ", ";\n  cursor: pointer;\n  display: inline-flex;\n  font-size: 16px;\n  font-weight: 600;\n  height: 32px;\n  justify-content: center;\n  outline: 0;\n  padding: 0;\n  &:hover {\n    opacity: 0.9;\n  }\n\n  & > svg {\n    margin-left: 4px;\n  }\n"])), (function(e) { return e.theme.colors.primary })),
                bn = S.e.div(Re || (Re = Object(p.a)(["\n  margin-top: 24px;\n"]))),
                un = S.e.div(Te || (Te = Object(p.a)(["\n  align-items: center;\n  display: flex;\n"]))),
                xn = S.e.div(Le || (Le = Object(p.a)(["\n  flex: 1;\n  & > * + * {\n    margin-left: 5px;\n  }\n"]))),
                On = S.e.div(Ue || (Ue = Object(p.a)(["\n  font-size: 14px;\n"]))),
                fn = S.e.a(Ye || (Ye = Object(p.a)(["\n  font-size: 14px;\n  text-decoration: none;\n  color: #12aab5;\n"]))),
                pn = S.e.div(qe || (qe = Object(p.a)(["\n\n"]))),
                hn = Object(S.e)(z.I)(Ge || (Ge = Object(p.a)(["\n  font-size: 14px;\n  text-decoration: none;\n  color: #12aab5;\n  margin: 10px 0;\n"]))),
                mn = S.e.button(Ve || (Ve = Object(p.a)(["\n  background-color: transparent;\n  border: none;\n  display: inline-flex;\n  align-items: center;\n  cursor: pointer;\n  padding-left: 0;\n  margin: 10px 0;\n  font-size: 14px;\n  text-decoration: none;\n\n  color: #12aab5;\n  & > * {\n    font-size: 14px;\n    color: #12aab5;\n    font-weight: bold;\n    line-height: 1;\n  }\n"]))),
                gn = function(e) {
                    var n, t = e.projectLink,
                        i = e.totalStaked,
                        r = e.blocksRemaining,
                        c = e.startBlock,
                        o = e.endBlock,
                        a = e.isFinished,
                        s = e.blocksUntilStart,
                        l = e.poolCategory,
                        d = e.contractAddress,
                        j = e.account,
                        b = e.tokenSymbol,
                        u = e.tokenAddress,
                        x = e.tokenDecimals,
                        O = Object(g.useState)(!1),
                        f = Object(h.a)(O, 2),
                        p = f[0],
                        m = f[1],
                        v = Object(F.a)(),
                        k = p ? Ae : on,
                        y = ln[l],
                        w = Object(an.a)(d, "address"),
                        S = !(null === (n = window.ethereum) || void 0 === n || !n.isMetaMask);
                    return Object(G.jsxs)(dn, { isFinished: a, children: [Object(G.jsxs)(un, { children: [Object(G.jsxs)(xn, { children: [Object(G.jsx)(y, {}), s > 0 ? Object(G.jsx)(U.f, {}) : null, 0 === s && r > 0 ? Object(G.jsx)(U.d, {}) : null] }), Object(G.jsxs)(jn, { onClick: function() { return m(!p) }, children: [p ? "Hide" : "Details", " ", Object(G.jsx)(k, {})] })] }), p && Object(G.jsxs)(bn, { children: [Object(G.jsxs)(un, { style: { marginBottom: "4px" }, children: [Object(G.jsx)(xn, { children: Object(G.jsxs)(On, { children: [v(999, "Total "), Object(G.jsxs)("span", { role: "img", "aria-label": "syrup", children: ["\ud83e\udd5e", " "] })] }) }), Object(G.jsx)(se.a, { fontSize: "14px", isDisabled: a, value: Object(E.c)(i) })] }), s > 0 && Object(G.jsxs)(un, { children: [Object(G.jsx)(xn, { children: Object(G.jsxs)(On, { children: [v(999, "Start"), ":"] }) }), Object(G.jsx)(z.I, { href: Object(an.a)(c, "block"), style: { alignSelf: "center" }, children: Object(G.jsx)(se.a, { fontSize: "14px", isDisabled: a, value: s, decimals: 0, unit: " blocks" }) })] }), 0 === s && r > 0 && Object(G.jsxs)(un, { children: [Object(G.jsx)(xn, { children: Object(G.jsxs)(On, { children: [v(999, "End"), ":"] }) }), Object(G.jsx)(z.I, { href: Object(an.a)(o, "block"), style: { alignSelf: "center" }, children: Object(G.jsx)(se.a, { fontSize: "14px", isDisabled: a, value: r, decimals: 0, unit: " blocks" }) })] }), Object(G.jsx)(hn, { color: "#12aab5", href: w, style: { alignSelf: "center" }, children: Object(G.jsxs)(On, { children: [v(999, "View contract on Cronoscan"), ":"] }) }), Object(G.jsx)(fn, { href: t, target: "_blank", children: v(412, "View project site") }), Object(G.jsx)(pn, { children: j && S && Object(G.jsxs)(mn, { onClick: function() { return Object(sn.a)(u, b, x) }, children: [Object(G.jsx)(z.Y, { color: "primary", children: v(999, "Add to Metamask") }), Object(G.jsx)(z.N, { ml: "4px" })] }) })] })] })
                },
                vn = v.a.memo(gn),
                kn = S.e.div(_e || (_e = Object(p.a)(["\n  display: flex;\n"]))),
                yn = Object(S.e)(z.y)(Je || (Je = Object(p.a)(["\n  position: absolute;\n  top: -50%;\n  right: 14px;\n"]))),
                wn = Object(S.e)(z.y)(He || (He = Object(p.a)(["\n  justify-content: flex-end;\n  align-items: center;\n  width: 120px;\n"]))),
                Sn = S.e.div(Qe || (Qe = Object(p.a)(["\n  position: relative;\n"]))),
                Cn = S.e.span(Ke || (Ke = Object(p.a)(["\n  cursor: pointer;\n"]))),
                zn = S.e.div(Xe || (Xe = Object(p.a)(["\n  background-image: url('/images/pool-finished-sash.svg');\n  background-position: top right;\n  background-repeat: not-repeat;\n  height: 135px;\n  position: absolute;\n  right: -24px;\n  top: -24px;\n  width: 135px;\n"]))),
                Dn = S.e.div(Ze || (Ze = Object(p.a)(["\n  display: flex;\n  justify-content: center;\n  margin: 16px 0;\n  width: 100%;\n  box-sizing: border-box;\n"]))),
                Nn = S.e.div($e || ($e = Object(p.a)(["\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  flex-direction: row;\n"]))),
                In = S.e.div(en || (en = Object(p.a)(["\n  height: ", "px;\n  width: ", "px;\n"])), (function(e) { return e.theme.spacing[4] }), (function(e) { return e.theme.spacing[4] })),
                An = S.e.div(nn || (nn = Object(p.a)(["\n  display: flex;\n  font-size: 14px;\n"]))),
                Bn = S.e.div(tn || (tn = Object(p.a)(["\n  color: #896643;\n  margin-top: 10px;\n  line-height: 1.1;\n  font-size: 0.8em;\n"]))),
                Fn = function(e) {
                    var n = e.pool,
                        t = n.sousId,
                        i = n.image,
                        r = n.tokenName,
                        c = n.tokenAddress,
                        o = n.stakingTokenName,
                        a = n.stakingTokenAddress,
                        s = n.projectLink,
                        l = n.harvest,
                        d = n.apy,
                        j = n.tokenDecimals,
                        b = n.poolCategory,
                        u = n.totalStaked,
                        x = n.startBlock,
                        O = n.endBlock,
                        f = n.isFinished,
                        p = n.userData,
                        m = n.stakingLimit,
                        v = n.poolVersion,
                        k = b === M.c.BINANCE,
                        y = Object(F.a)(),
                        S = Object(ie.b)(a),
                        D = Object(C.c)().account,
                        N = Object(W.a)().currentBlock,
                        I = Object(re.d)(S, t).onApprove,
                        A = Object(ce.d)(t, k).onStake,
                        B = Object(oe.d)(t).onUnstake,
                        P = Object(ae.d)(t, k).onReward,
                        R = Object(le.c)(),
                        T = Object(g.useState)(!1),
                        L = Object(h.a)(T, 2),
                        U = L[0],
                        V = L[1],
                        _ = Object(g.useState)(!1),
                        J = Object(h.a)(_, 2),
                        H = J[0],
                        Q = J[1],
                        K = new w.a((null === p || void 0 === p ? void 0 : p.allowance) || 0),
                        Z = new w.a((null === p || void 0 === p ? void 0 : p.stakingTokenBalance) || 0),
                        ne = new w.a((null === p || void 0 === p ? void 0 : p.stakedBalance) || 0),
                        je = new w.a((null === p || void 0 === p ? void 0 : p.pendingReward) || 0),
                        be = Math.max(x - N, 0),
                        fe = Math.max(O - N, 0),
                        pe = o === M.f.SYRUP,
                        he = (null === ne || void 0 === ne ? void 0 : ne.toNumber()) > 0,
                        ge = !he && !K.toNumber() && !k,
                        ve = f && he,
                        ke = new w.a(m).multipliedBy(new w.a(10).pow(j)),
                        ye = Object(z.ib)(Object(G.jsx)(ue, { max: m && Z.isGreaterThan(ke) ? ke : Z, onConfirm: A, tokenName: m ? "".concat(o, " (").concat(m, " max)") : o })),
                        Se = Object(h.a)(ye, 1)[0],
                        Ce = Object(z.ib)(Object(G.jsx)(Oe, { earnings: je, onConfirm: A, tokenName: o })),
                        ze = Object(h.a)(Ce, 1)[0],
                        De = Object(z.ib)(Object(G.jsx)(xe, { max: ne, onConfirm: B, tokenName: o })),
                        Ne = Object(h.a)(De, 1)[0],
                        Ie = Object(g.useCallback)(Object(X.a)($.a.mark((function e() {
                            return $.a.wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return e.prev = 0, V(!0), e.next = 4, I();
                                    case 4:
                                        e.sent || V(!1), e.next = 11;
                                        break;
                                    case 8:
                                        e.prev = 8, e.t0 = e.catch(0), console.error(e.t0);
                                    case 11:
                                    case "end":
                                        return e.stop()
                                }
                            }), e, null, [
                                [0, 8]
                            ])
                        }))), [I, V]),
                        Ae = Date.now() / 1e3,
                        Be = Object(g.useMemo)((function() { var e = new w.a((null === p || void 0 === p ? void 0 : p.nextWithdrawalUntil) || 0); return e.eq(0) ? 0 : Math.round(e.toNumber() - Ae) }), [Ae, null === p || void 0 === p ? void 0 : p.nextWithdrawalUntil]),
                        Fe = Object(G.jsxs)(kn, { children: [Object(G.jsx)(z.Y, { fontSize: "12px", children: "Withdraw Locked In:\xa0" }), Object(G.jsx)(wn, { children: Object(G.jsx)(de.a, { seconds: Be, fontSize: "0.8em" }) })] }),
                        We = Object(z.jb)(Fe, { placement: "top", trigger: "hover" }),
                        Ee = We.targetRef,
                        Pe = We.tooltip,
                        Me = We.tooltipVisible;
                    return Object(G.jsxs)(Y, {
                        style: { backgroundColor: "#494040d1" },
                        isActive: ve,
                        isFinished: f && 0 !== t,
                        children: [f && 0 !== t && Object(G.jsx)(zn, {}), Object(G.jsxs)("div", {
                            style: { padding: "24px" },
                            children: [Object(G.jsxs)(q, { isFinished: f && 0 !== t, children: [pe && "[OLD]", " ", r, " ", y(348, "Jungle")] }), Object(G.jsxs)("div", {
                                style: { marginBottom: "8px", display: "flex", alignItems: "center" },
                                children: [Object(G.jsx)("div", { style: { flex: 1 }, children: Object(G.jsx)(z.D, { src: "/images/single-token/".concat(i || r, ".png"), width: 64, height: 64, alt: r }) }), D && l && !pe && Object(G.jsx)(we, {
                                    disabled: !je.toNumber() || H,
                                    text: H ? "Collecting" : "Harvest",
                                    onClick: Object(X.a)($.a.mark((function e() {
                                        return $.a.wrap((function(e) {
                                            for (;;) switch (e.prev = e.next) {
                                                case 0:
                                                    return Q(!0), e.next = 3, P();
                                                case 3:
                                                    Q(!1);
                                                case 4:
                                                case "end":
                                                    return e.stop()
                                            }
                                        }), e)
                                    })))
                                })]
                            }), pe ? Object(G.jsx)(me, { hasBalance: he }) : Object(G.jsxs)(Nn, { children: [Object(G.jsx)(se.a, { value: Object(E.c)(je, j), isDisabled: f }), 0 === t && D && l && Object(G.jsx)(we, { disabled: !je.toNumber() || H, text: y(999, H ? "Compounding" : "Compound"), onClick: ze })] }), Object(G.jsx)(te, { isFinished: f && 0 !== t, text: y(330, "".concat(r, " earned")) }), Object(G.jsxs)(Dn, {
                                children: [!D && Object(G.jsx)(ee.a, {}), D && (ge && !pe ? Object(G.jsx)("div", { style: { flex: 1 }, children: Object(G.jsx)(z.j, { disabled: f || U, onClick: Ie, fullWidth: !0, children: "Approve ".concat(o) }) }) : Object(G.jsxs)(G.Fragment, {
                                    children: [Object(G.jsxs)(Sn, {
                                        children: [v === M.e.V1 && Be > 0 ? Object(G.jsxs)(yn, { children: [Object(G.jsx)(Cn, { ref: Ee, children: Object(G.jsx)(z.Z, { color: "#df0939" }) }), Me && Pe] }) : null, Object(G.jsx)(z.j, {
                                            disabled: ne.eq(new w.a(0)) || H || v === M.e.V1 && Be > 0,
                                            onClick: pe ? Object(X.a)($.a.mark((function e() {
                                                return $.a.wrap((function(e) {
                                                    for (;;) switch (e.prev = e.next) {
                                                        case 0:
                                                            return Q(!0), e.next = 3, B("0");
                                                        case 3:
                                                            Q(!1);
                                                        case 4:
                                                        case "end":
                                                            return e.stop()
                                                    }
                                                }), e)
                                            }))) : Ne,
                                            children: "Unstake ".concat(o)
                                        })]
                                    }), Object(G.jsx)(In, {}), !pe && Object(G.jsx)(z.C, { disabled: f && 0 !== t, onClick: Se, children: Object(G.jsx)(z.a, { color: "background" }) })]
                                }))]
                            }), Object(G.jsxs)(An, { children: [Object(G.jsxs)("div", { style: { flex: 1 }, children: [y(736, "APR"), ":"] }), f || pe || !d || null !== d && void 0 !== d && d.isNaN() || null === d || void 0 === d || !d.isFinite() ? "-" : Object(G.jsx)(se.a, { fontSize: "14px", isDisabled: f, value: null === d || void 0 === d ? void 0 : d.toNumber(), decimals: 2, unit: "%" })] }), Object(G.jsxs)(An, { style: { margin: "10px auto" }, children: [Object(G.jsxs)("div", { style: { flex: 1 }, children: [y(999, "Deposit Fee"), ":"] }), f || pe ? "-" : Object(G.jsx)(se.a, { fontSize: "14px", isDisabled: f, value: R, decimals: 0, unit: "%" })] }), Object(G.jsxs)(An, { style: { margin: "10px auto" }, children: [Object(G.jsxs)("div", { style: { flex: 1 }, children: [y(999, "Withdraw Fee"), ":"] }), f || pe ? "-" : Object(G.jsx)(se.a, { fontSize: "14px", isDisabled: f, value: R, decimals: 0, unit: "%" })] }), Object(G.jsxs)(An, { children: [Object(G.jsxs)("div", { style: { flex: 1 }, children: [Object(G.jsxs)("span", { role: "img", "aria-label": o, children: ["\ud83e\udd5e", " "] }), y(384, "Your Stake"), ":"] }), Object(G.jsx)(se.a, { fontSize: "14px", isDisabled: f, value: Object(E.c)(ne) })] }), Object(G.jsx)(Bn, { children: "* Deposit Fee and Withdraw Fee will be burned immediately" })]
                        }), Object(G.jsx)(vn, { projectLink: s, totalStaked: u, endBlock: O, blocksRemaining: fe, startBlock: x, blocksUntilStart: be, isFinished: f, poolCategory: b, contractAddress: n.contractAddress, account: D, tokenSymbol: r, tokenAddress: c, tokenDecimals: j })]
                    })
                },
                Wn = t(1236),
                En = S.e.div(rn || (rn = Object(p.a)(["\n  background-color: ", ";\n  height: 1px;\n  margin: 0 auto 32px;\n  width: 100%;\n"])), (function(e) { return e.theme.colors.textSubtle })),
                Pn = S.e.div(cn || (cn = Object(p.a)(["\n  &>ul {\n    list-style-type: none;\n    text-align: center;\n    color: ", ";\n    font-size: 0.9em;\n    &>li+li {\n      margin-top: 5px;\n    }\n  }\n  margin-bottom: 30px;\n"])), (function(e) { return e.theme.colors.text })),
                Mn = function() {
                    var e = Object(k.h)().path,
                        n = Object(F.a)(),
                        t = Object(C.c)().account,
                        i = Object(P.i)(),
                        r = Object(P.o)(t),
                        c = Object(P.q)(),
                        o = Object(P.r)(),
                        a = Object(P.t)(),
                        s = Object(W.a)().currentBlock,
                        l = function(e, n, t) { var i = new w.a(n); return "WCRO" === e ? new w.a(1) : n && t === M.f.CRO ? i.div(c) : n && t === M.f.CGS ? i.times(o).div(c) : i },
                        d = r.map((function(e) {
                            var n = e.poolCategory === M.c.BINANCE,
                                t = i.find((function(n) { return n.tokenSymbol === e.tokenName })),
                                r = i.find((function(n) { return n.tokenSymbol === e.stakingTokenName && n.quoteTokenSymbol === M.f.CRO })),
                                o = n ? new w.a(1) : new w.a(null === r || void 0 === r ? void 0 : r.tokenPriceVsQuote),
                                d = T.h;
                            if ("TERRA" === e.tokenName) {
                                var j = a[e.tokenName.toLowerCase()];
                                d = l(e.tokenName, j, M.f.USDC)
                            } else d = l(e.tokenName, null === t || void 0 === t ? void 0 : t.tokenPriceVsQuote, null === t || void 0 === t ? void 0 : t.quoteTokenSymbol);
                            var b = d.times(e.tokenPerBlock).times(D.f),
                                u = o.times(Object(E.c)(e.totalStaked)),
                                x = b.div(u).times(100),
                                O = d.times(c);
                            return Object(m.a)(Object(m.a)({}, e), {}, { isFinished: 0 !== e.sousId && (e.isFinished || s > e.endBlock), apy: x, earningTokenPrice: O })
                        })),
                        j = B()(d, (function(e) { return e.isFinished })),
                        b = Object(h.a)(j, 2),
                        u = b[0],
                        x = b[1];
                    return Object(G.jsxs)(L.a, { children: [Object(G.jsx)(z.A, { as: "h1", color: "primary", size: "lg", mb: "10px", style: { textAlign: "center" }, children: n(999, "COUGAR CBANK") }), Object(G.jsx)(Pn, { children: Object(G.jsxs)("ul", { children: [Object(G.jsx)("li", { children: n(580, "Stake CRP to earn new tokens.") }), Object(G.jsx)("li", { children: n(404, "You can unstake at any time.") }), Object(G.jsx)("li", { children: n(406, "Rewards are calculated per block.") })] }) }), Object(G.jsx)(Wn.a, {}), Object(G.jsx)(En, {}), Object(G.jsxs)(R.b, { children: [Object(G.jsx)(k.b, { exact: !0, path: "".concat(e), children: Object(G.jsxs)(G.Fragment, { children: [I()(x, ["sortOrder"]).map((function(e) { return Object(G.jsx)(Fn, { pool: e }, e.sousId) })), Object(G.jsx)(K, {})] }) }), Object(G.jsx)(k.b, { path: "".concat(e, "/history"), children: I()(u, ["sortOrder"]).map((function(e) { return Object(G.jsx)(Fn, { pool: e }, e.sousId) })) })] })] })
                }
        }
    }
]);