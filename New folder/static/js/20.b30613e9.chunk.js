(this["webpackJsonpcougar-cronos-frontend-farms"] = this["webpackJsonpcougar-cronos-frontend-farms"] || []).push([
    [20], {
        1147: function(n, e, t) {
            "use strict";
            var r = t(0),
                c = t(329),
                i = /%(.*?)%/,
                s = function(n, e, t) {
                    var r = n.find((function(n) { return n.data.stringId === e }));
                    if (r) {
                        var c = r.data.text;
                        return c.includes("%") ? function(n, e) {
                            var t = i.exec(n)[0],
                                r = e.split(" ")[0];
                            return n.replace(t, r)
                        }(c, t) : c
                    }
                    return t
                };
            e.a = function() { var n = Object(r.useContext)(c.a).translations; return function(e, t) { return "error" === n[0] ? t : n.length > 0 ? s(n, e, t) : t } }
        },
        1404: function(n, e, t) {
            "use strict";
            t.r(e);
            var r, c = t(67),
                i = (t(0), t(10)),
                s = t(42),
                a = t(331),
                o = t(1147),
                u = t(19),
                f = i.e.div(r || (r = Object(c.a)(["\n  align-items: center;\n  display: flex;\n  flex-direction: column;\n  height: calc(100vh - 64px);\n  justify-content: center;\n"])));
            e.default = function() { var n = Object(o.a)(); return Object(u.jsx)(a.a, { children: Object(u.jsxs)(f, { children: [Object(u.jsx)(s.J, { width: "64px", mb: "8px" }), Object(u.jsx)(s.A, { size: "xxl", children: "404" }), Object(u.jsx)(s.Y, { mb: "16px", children: n(999, "Oops, page not found.") }), Object(u.jsx)(s.j, { as: "a", href: "/", size: "sm", children: n(999, "Back Home") })] }) }) }
        }
    }
]);