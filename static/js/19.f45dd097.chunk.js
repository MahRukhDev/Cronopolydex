(this["webpackJsonpcougar-cronos-frontend-farms"] = this["webpackJsonpcougar-cronos-frontend-farms"] || []).push([
    [19], { 1147: function(n, e, t) { "use strict"; var r = t(0),
                c = t(329),
                o = /%(.*?)%/,
                a = function(n, e, t) { var r = n.find((function(n) { return n.data.stringId === e })); if (r) { var c = r.data.text; return c.includes("%") ? function(n, e) { var t = o.exec(n)[0],
                                r = e.split(" ")[0]; return n.replace(t, r) }(c, t) : c } return t };
            e.a = function() { var n = Object(r.useContext)(c.a).translations; return function(e, t) { return "error" === n[0] ? t : n.length > 0 ? a(n, e, t) : t } } }, 1153: function(n, e, t) { "use strict"; var r = t(16),
                c = (t(0), t(42)),
                o = t(1147),
                a = t(205),
                i = t(19);
            e.a = function(n) { var e = Object(o.a)(),
                    t = Object(a.a)(),
                    s = t.login,
                    d = t.logout,
                    l = Object(c.kb)(s, d).onPresentConnectModal; return Object(i.jsx)(c.j, Object(r.a)(Object(r.a)({ variant: "primary", onClick: l }, n), {}, { children: e(292, "Unlock Wallet") })) } }, 1161: function(n, e, t) { "use strict"; var r, c = t(67),
                o = t(10),
                a = t(42),
                i = Object(o.e)(a.n)(r || (r = Object(c.a)(["\n    background-color: #27262cad;\n"])));
            e.a = i }, 1412: function(n, e, t) { "use strict";
            t.r(e), t.d(e, "default", (function() { return L })); var r, c, o, a, i, s, d = t(67),
                l = t(0),
                f = t(10),
                j = t(42),
                b = t(1161),
                u = t(1147),
                x = t(331),
                p = t(1153),
                O = t(79),
                h = t(57),
                g = t(32),
                v = t(19),
                m = f.e.div(r || (r = Object(d.a)(["\n    padding: 10px;\n"]))),
                w = f.e.input.attrs({ readonly: !0 })(c || (c = Object(d.a)(["\n    background-color: #6c5358;\n    border: 0px;\n    border-radius: 16px;\n    box-shadow: rgb(74 74 104 / 10%) 0px 2px 2px -1px inset;\n    color: #ffffff;\n    display: block;\n    font-size: 16px;\n    height: 40px;\n    outline: 0px;\n    padding: 0px 16px;\n    width: 100%;\n"]))),
                y = function(n) { var e = n.address,
                        t = Object(l.useState)([]),
                        r = Object(g.a)(t, 2),
                        c = r[0],
                        o = r[1],
                        a = Object(u.a)(),
                        i = "".concat(window.location.protocol, "//").concat(window.location.hostname).concat(window.location.port ? ":".concat(window.location.port) : ""),
                        s = "".concat(i, "/?ref=").concat(e),
                        d = function() { var n;
                            n = s, document.addEventListener("copy", (function(e) { e.clipboardData.setData("text/plain", n), e.preventDefault(), document.removeEventListener("copy", null) })), document.execCommand("copy") }; return Object(v.jsxs)(m, { children: [Object(v.jsx)(j.A, { as: "h5", size: "lg", mb: "5px", color: "#ffffff", children: a(804, "Your Referral Link") }), Object(v.jsx)(w, { value: s, readOnly: !0 }), Object(v.jsx)(j.j, { onClick: function() { d(); var n = Date.now(),
                                    e = { id: "id-".concat(n), title: a(804, "Copied"), type: j.eb.SUCCESS };
                                o((function(n) { return [e].concat(Object(h.a)(n)) })) }, mt: "10px", children: a(803, "Copy") }), Object(v.jsx)(j.ab, { toasts: c, onRemove: function(n) { o((function(e) { return e.filter((function(e) { return e.id !== n })) })) } })] }) },
                C = t(176),
                k = t(65),
                F = t(9),
                A = t.n(F),
                S = f.e.div(o || (o = Object(d.a)(["\n    padding: 10px;\n"]))),
                z = function(n) { var e = n.address,
                        t = Object(C.u)(e),
                        r = t.referralsCount,
                        c = t.referralCommission,
                        o = Object(k.c)(new A.a(c), 18).toFixed(8),
                        a = Object(u.a)(); return Object(v.jsxs)(S, { children: [Object(v.jsx)(j.A, { as: "h5", size: "lg", mb: "5px", color: "#ffffff", children: a(806, "Total Referrals") }), Object(v.jsx)(j.Y, { color: "primaryLight", bold: !0, children: r }), Object(v.jsx)(j.A, { as: "h5", size: "lg", mb: "5px", color: "#ffffff", children: a(806, "Total Commission (CRP)") }), Object(v.jsxs)(j.Y, { color: "primaryLight", bold: !0, children: [o, " CRP"] })] }) },
                D = Object(f.e)(b.a)(a || (a = Object(d.a)(["\n    border-radius: 32px;    \n    text-align: center;\n    overflow: hidden;\n    position: relative;\n    opacity: 0.85;\n"]))),
                R = f.e.div(i || (i = Object(d.a)(["\nbackground: linear-gradient(90deg, #f39aa7 0%, #fa798c57 100%, #fa798c57 100%);\nbox-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);\nopacity: 0.85;\n    padding: 24px;\n"]))),
                E = f.e.div(s || (s = Object(d.a)(["\n    padding: 24px;\n"]))),
                L = function() { var n = Object(u.a)(),
                        e = Object(O.c)().account; return Object(v.jsxs)(x.a, { children: [Object(v.jsx)(j.A, { as: "h1", size: "lg", color: "#f39aa7", mb: "20px", style: { textAlign: "center", fontSize: "40px" }, children: n(800, "Cronopoly Referral Program") }), Object(v.jsxs)(D, { children: [Object(v.jsx)(R, { children: Object(v.jsx)(j.A, { as: "h2", size: "lg", color: "#ffffff", children: n(801, "Share the referral link below to invite your friends and earn 2% of your friends earnings FOREVER!") }) }), Object(v.jsxs)(E, { children: [!e && Object(v.jsxs)(v.Fragment, { children: [Object(v.jsx)(p.a, { fullWidth: !0 }), Object(v.jsx)(j.Y, { mt: "16px", children: n(802, "Unlock wallet to get your unique referral link") })] }), e && Object(v.jsxs)(v.Fragment, { children: [Object(v.jsx)(y, { address: e }), Object(v.jsx)(z, { address: e })] })] })] })] }) } } }
]);