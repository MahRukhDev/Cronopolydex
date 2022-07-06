/*! For license information please see 17.45856ffc.chunk.js.LICENSE.txt */
(this["webpackJsonpcougar-cronos-frontend-farms"] = this["webpackJsonpcougar-cronos-frontend-farms"] || []).push([
    [17, 2], { 1160: function(e, t, n) { "use strict";
            t.parse = function(e, t) { if ("string" !== typeof e) throw new TypeError("argument str must be a string"); for (var n = {}, a = t || {}, o = e.split(";"), u = a.decode || r, s = 0; s < o.length; s++) { var c = o[s],
                        f = c.indexOf("="); if (!(f < 0)) { var l = c.substring(0, f).trim(); if (void 0 == n[l]) { var p = c.substring(f + 1, c.length).trim(); '"' === p[0] && (p = p.slice(1, -1)), n[l] = i(p, u) } } } return n }, t.serialize = function(e, t, n) { var r = n || {},
                    i = r.encode || a; if ("function" !== typeof i) throw new TypeError("option encode is invalid"); if (!o.test(e)) throw new TypeError("argument name is invalid"); var u = i(t); if (u && !o.test(u)) throw new TypeError("argument val is invalid"); var s = e + "=" + u; if (null != r.maxAge) { var c = r.maxAge - 0; if (isNaN(c) || !isFinite(c)) throw new TypeError("option maxAge is invalid");
                    s += "; Max-Age=" + Math.floor(c) } if (r.domain) { if (!o.test(r.domain)) throw new TypeError("option domain is invalid");
                    s += "; Domain=" + r.domain } if (r.path) { if (!o.test(r.path)) throw new TypeError("option path is invalid");
                    s += "; Path=" + r.path } if (r.expires) { if ("function" !== typeof r.expires.toUTCString) throw new TypeError("option expires is invalid");
                    s += "; Expires=" + r.expires.toUTCString() }
                r.httpOnly && (s += "; HttpOnly");
                r.secure && (s += "; Secure"); if (r.sameSite) { switch ("string" === typeof r.sameSite ? r.sameSite.toLowerCase() : r.sameSite) {
                        case !0:
                            s += "; SameSite=Strict"; break;
                        case "lax":
                            s += "; SameSite=Lax"; break;
                        case "strict":
                            s += "; SameSite=Strict"; break;
                        case "none":
                            s += "; SameSite=None"; break;
                        default:
                            throw new TypeError("option sameSite is invalid") } } return s }; var r = decodeURIComponent,
                a = encodeURIComponent,
                o = /^[\u0009\u0020-\u007e\u0080-\u00ff]+$/;

            function i(e, t) { try { return t(e) } catch (n) { return e } } }, 1178: function(e, t, n) { "use strict";
            Object.defineProperty(t, "__esModule", { value: !0 }); var r = n(101),
                a = n(0),
                o = n(606),
                i = n(1199);

            function u(e) { return e && "object" === typeof e && "default" in e ? e : { default: e } } var s = u(r),
                c = u(a),
                f = u(o),
                l = u(i);

            function p(e, t) { var n = Object.keys(e); if (Object.getOwnPropertySymbols) { var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter((function(t) { return Object.getOwnPropertyDescriptor(e, t).enumerable }))), n.push.apply(n, r) } return n }

            function d(e) { for (var t = 1; t < arguments.length; t++) { var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? p(Object(n), !0).forEach((function(t) { v(e, t, n[t]) })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : p(Object(n)).forEach((function(t) { Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t)) })) } return e }

            function m(e, t) { if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function") }

            function h(e, t) { for (var n = 0; n < t.length; n++) { var r = t[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r) } }

            function v(e, t, n) { return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e }

            function y(e) { return y = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) { return e.__proto__ || Object.getPrototypeOf(e) }, y(e) }

            function g(e, t) { return g = Object.setPrototypeOf || function(e, t) { return e.__proto__ = t, e }, g(e, t) }

            function w(e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e }

            function b(e, t) { return !t || "object" !== typeof t && "function" !== typeof t ? w(e) : t }

            function O(e) { var t = function() { if ("undefined" === typeof Reflect || !Reflect.construct) return !1; if (Reflect.construct.sham) return !1; if ("function" === typeof Proxy) return !0; try { return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0 } catch (e) { return !1 } }(); return function() { var n, r = y(e); if (t) { var a = y(this).constructor;
                        n = Reflect.construct(r, arguments, a) } else n = r.apply(this, arguments); return b(this, n) } }

            function V(e, t) { return function(e) { if (Array.isArray(e)) return e }(e) || function(e, t) { var n = null == e ? null : "undefined" !== typeof Symbol && e[Symbol.iterator] || e["@@iterator"]; if (null == n) return; var r, a, o = [],
                        i = !0,
                        u = !1; try { for (n = n.call(e); !(i = (r = n.next()).done) && (o.push(r.value), !t || o.length !== t); i = !0); } catch (s) { u = !0, a = s } finally { try { i || null == n.return || n.return() } finally { if (u) throw a } } return o }(e, t) || function(e, t) { if (!e) return; if ("string" === typeof e) return E(e, t); var n = Object.prototype.toString.call(e).slice(8, -1); "Object" === n && e.constructor && (n = e.constructor.name); if ("Map" === n || "Set" === n) return Array.from(e); if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return E(e, t) }(e, t) || function() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.") }() }

            function E(e, t) {
                (null == t || t > e.length) && (t = e.length); for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n]; return r } var x = function(e, t) { var n = t.decimal,
                        r = t.decimals,
                        a = t.duration,
                        o = t.easingFn,
                        i = t.end,
                        u = t.formattingFn,
                        s = t.prefix,
                        c = t.separator,
                        f = t.start,
                        p = t.suffix,
                        d = t.useEasing; return new l.default(e, f, i, r, a, { decimal: n, easingFn: o, formattingFn: u, separator: c, prefix: s, suffix: p, useEasing: d, useGrouping: !!c }) },
                R = function(e) {! function(e, t) { if ("function" !== typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                        e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), t && g(e, t) }(o, e); var t, n, r, a = O(o);

                    function o() { var e;
                        m(this, o); for (var t = arguments.length, n = new Array(t), r = 0; r < t; r++) n[r] = arguments[r]; return v(w(e = a.call.apply(a, [this].concat(n))), "checkProps", (function(t) { var n = e.props,
                                r = n.start,
                                a = n.suffix,
                                o = n.prefix,
                                i = n.redraw,
                                u = n.duration,
                                s = n.separator,
                                c = n.decimals,
                                f = n.decimal,
                                l = n.className; return u !== t.duration || r !== t.start || a !== t.suffix || o !== t.prefix || s !== t.separator || c !== t.decimals || f !== t.decimal || l !== t.className || i })), v(w(e), "createInstance", (function() { return "function" === typeof e.props.children && f.default(e.containerRef.current && (e.containerRef.current instanceof HTMLElement || e.containerRef.current instanceof SVGTextElement || e.containerRef.current instanceof SVGTSpanElement), 'Couldn\'t find attached element to hook the CountUp instance into! Try to attach "containerRef" from the render prop to a an HTMLElement, eg. <span ref={containerRef} />.'), x(e.containerRef.current, e.props) })), v(w(e), "pauseResume", (function() { var t = w(e),
                                n = t.reset,
                                r = t.restart,
                                a = t.update,
                                o = e.props.onPauseResume;
                            e.instance.pauseResume(), o({ reset: n, start: r, update: a }) })), v(w(e), "reset", (function() { var t = w(e),
                                n = t.pauseResume,
                                r = t.restart,
                                a = t.update,
                                o = e.props.onReset;
                            e.instance.reset(), o({ pauseResume: n, start: r, update: a }) })), v(w(e), "restart", (function() { e.reset(), e.start() })), v(w(e), "start", (function() { var t = w(e),
                                n = t.pauseResume,
                                r = t.reset,
                                a = t.restart,
                                o = t.update,
                                i = e.props,
                                u = i.delay,
                                s = i.onEnd,
                                c = i.onStart,
                                f = function() { return e.instance.start((function() { return s({ pauseResume: n, reset: r, start: a, update: o }) })) };
                            u > 0 ? e.timeoutId = setTimeout(f, 1e3 * u) : f(), c({ pauseResume: n, reset: r, update: o }) })), v(w(e), "update", (function(t) { var n = w(e),
                                r = n.pauseResume,
                                a = n.reset,
                                o = n.restart,
                                i = e.props.onUpdate;
                            e.instance.update(t), i({ pauseResume: r, reset: a, start: o }) })), v(w(e), "containerRef", c.default.createRef()), e } return t = o, (n = [{ key: "componentDidMount", value: function() { var e = this.props,
                                t = e.children,
                                n = e.delay;
                            this.instance = this.createInstance(), "function" === typeof t && 0 !== n || this.start() } }, { key: "shouldComponentUpdate", value: function(e) { var t = this.props.end; return this.checkProps(e) || t !== e.end } }, { key: "componentDidUpdate", value: function(e) { var t = this.props,
                                n = t.end,
                                r = t.preserveValue;
                            this.checkProps(e) && (this.instance.reset(), this.instance = this.createInstance(), this.start()), n !== e.end && (r || this.instance.reset(), this.instance.update(n)) } }, { key: "componentWillUnmount", value: function() { this.timeoutId && clearTimeout(this.timeoutId), this.instance.reset() } }, { key: "render", value: function() { var e = this.props,
                                t = e.children,
                                n = e.className,
                                r = e.style,
                                a = this.containerRef,
                                o = this.pauseResume,
                                i = this.reset,
                                u = this.restart,
                                s = this.update; return "function" === typeof t ? t({ countUpRef: a, pauseResume: o, reset: i, start: u, update: s }) : c.default.createElement("span", { className: n, ref: a, style: r }) } }]) && h(t.prototype, n), r && h(t, r), o }(a.Component);
            v(R, "propTypes", { decimal: s.default.string, decimals: s.default.number, delay: s.default.number, easingFn: s.default.func, end: s.default.number.isRequired, formattingFn: s.default.func, onEnd: s.default.func, onStart: s.default.func, prefix: s.default.string, redraw: s.default.bool, separator: s.default.string, start: s.default.number, startOnMount: s.default.bool, suffix: s.default.string, style: s.default.object, useEasing: s.default.bool, preserveValue: s.default.bool }), v(R, "defaultProps", { decimal: ".", decimals: 0, delay: null, duration: null, easingFn: null, formattingFn: null, onEnd: function() {}, onPauseResume: function() {}, onReset: function() {}, onStart: function() {}, onUpdate: function() {}, prefix: "", redraw: !1, separator: "", start: 0, startOnMount: !0, suffix: "", style: void 0, useEasing: !0, preserveValue: !1 }); var j = { innerHTML: null };
            t.default = R, t.useCountUp = function(e) { var t = d(d({}, R.defaultProps), e),
                    n = t.start,
                    r = t.formattingFn,
                    o = V(a.useState("function" === typeof r ? r(n) : n), 2),
                    i = o[0],
                    u = o[1],
                    s = a.useRef(null),
                    c = a.useRef(null),
                    f = function() { var e = s.current; if (null !== e) return e; var n = function() { var e = x(j, t),
                                n = e.options.formattingFn; return e.options.formattingFn = function() { var e = n.apply(void 0, arguments);
                                u(e) }, e }(); return s.current = n, n },
                    l = function() { var e = t.onReset;
                        f().reset(), e({ pauseResume: m, start: p, update: h }) },
                    p = function e() { var n = t.onStart,
                            r = t.onEnd;
                        f().reset(), f().start((function() { r({ pauseResume: m, reset: l, start: e, update: h }) })), n({ pauseResume: m, reset: l, update: h }) },
                    m = function() { var e = t.onPauseResume;
                        f().pauseResume(), e({ reset: l, start: p, update: h }) },
                    h = function(e) { var n = t.onUpdate;
                        f().update(e), n({ pauseResume: m, reset: l, start: p }) }; return a.useEffect((function() { var e = t.delay,
                        n = t.onStart,
                        r = t.onEnd; return t.startOnMount && (c.current = setTimeout((function() { n({ pauseResume: m, reset: l, update: h }), f().start((function() { clearTimeout(c.current), r({ pauseResume: m, reset: l, start: p, update: h }) })) }), 1e3 * e)),
                        function() { clearTimeout(c.current), l() } }), []), { countUp: i, start: p, pauseResume: m, reset: l, update: h } } }, 1188: function(e, t, n) { "use strict"; var r = n(1160);

            function a(e, t) { void 0 === t && (t = {}); var n = function(e) { if (e && "j" === e[0] && ":" === e[1]) return e.substr(2); return e }(e); if (function(e, t) { return "undefined" === typeof t && (t = !e || "{" !== e[0] && "[" !== e[0] && '"' !== e[0]), !t }(n, t.doNotParse)) try { return JSON.parse(n) } catch (r) {}
                return e } var o = function() { return o = Object.assign || function(e) { for (var t, n = 1, r = arguments.length; n < r; n++)
                            for (var a in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]); return e }, o.apply(this, arguments) },
                i = function() {
                    function e(e, t) { var n = this;
                        this.changeListeners = [], this.HAS_DOCUMENT_COOKIE = !1, this.cookies = function(e, t) { return "string" === typeof e ? r.parse(e, t) : "object" === typeof e && null !== e ? e : {} }(e, t), new Promise((function() { n.HAS_DOCUMENT_COOKIE = "object" === typeof document && "string" === typeof document.cookie })).catch((function() {})) } return e.prototype._updateBrowserValues = function(e) { this.HAS_DOCUMENT_COOKIE && (this.cookies = r.parse(document.cookie, e)) }, e.prototype._emitChange = function(e) { for (var t = 0; t < this.changeListeners.length; ++t) this.changeListeners[t](e) }, e.prototype.get = function(e, t, n) { return void 0 === t && (t = {}), this._updateBrowserValues(n), a(this.cookies[e], t) }, e.prototype.getAll = function(e, t) { void 0 === e && (e = {}), this._updateBrowserValues(t); var n = {}; for (var r in this.cookies) n[r] = a(this.cookies[r], e); return n }, e.prototype.set = function(e, t, n) { var a; "object" === typeof t && (t = JSON.stringify(t)), this.cookies = o(o({}, this.cookies), ((a = {})[e] = t, a)), this.HAS_DOCUMENT_COOKIE && (document.cookie = r.serialize(e, t, n)), this._emitChange({ name: e, value: t, options: n }) }, e.prototype.remove = function(e, t) { var n = t = o(o({}, t), { expires: new Date(1970, 1, 1, 0, 0, 1), maxAge: 0 });
                        this.cookies = o({}, this.cookies), delete this.cookies[e], this.HAS_DOCUMENT_COOKIE && (document.cookie = r.serialize(e, "", n)), this._emitChange({ name: e, value: void 0, options: t }) }, e.prototype.addChangeListener = function(e) { this.changeListeners.push(e) }, e.prototype.removeChangeListener = function(e) { var t = this.changeListeners.indexOf(e);
                        t >= 0 && this.changeListeners.splice(t, 1) }, e }();
            t.a = i }, 1199: function(e, t, n) { var r, a;
            r = function(e, t, n) { var r = function(e, t, n, r, a, o) {
                    function i(e) { var t, n, r, a, o, i, u = e < 0; if (e = Math.abs(e).toFixed(c.decimals), n = (t = (e += "").split("."))[0], r = t.length > 1 ? c.options.decimal + t[1] : "", c.options.useGrouping) { for (a = "", o = 0, i = n.length; o < i; ++o) 0 !== o && o % 3 === 0 && (a = c.options.separator + a), a = n[i - o - 1] + a;
                            n = a } return c.options.numerals.length && (n = n.replace(/[0-9]/g, (function(e) { return c.options.numerals[+e] })), r = r.replace(/[0-9]/g, (function(e) { return c.options.numerals[+e] }))), (u ? "-" : "") + c.options.prefix + n + r + c.options.suffix }

                    function u(e, t, n, r) { return n * (1 - Math.pow(2, -10 * e / r)) * 1024 / 1023 + t }

                    function s(e) { return "number" == typeof e && !isNaN(e) } var c = this; if (c.version = function() { return "1.9.3" }, c.options = { useEasing: !0, useGrouping: !0, separator: ",", decimal: ".", easingFn: u, formattingFn: i, prefix: "", suffix: "", numerals: [] }, o && "object" == typeof o)
                        for (var f in c.options) o.hasOwnProperty(f) && null !== o[f] && (c.options[f] = o[f]); "" === c.options.separator ? c.options.useGrouping = !1 : c.options.separator = "" + c.options.separator; for (var l = 0, p = ["webkit", "moz", "ms", "o"], d = 0; d < p.length && !window.requestAnimationFrame; ++d) window.requestAnimationFrame = window[p[d] + "RequestAnimationFrame"], window.cancelAnimationFrame = window[p[d] + "CancelAnimationFrame"] || window[p[d] + "CancelRequestAnimationFrame"];
                    window.requestAnimationFrame || (window.requestAnimationFrame = function(e, t) { var n = (new Date).getTime(),
                            r = Math.max(0, 16 - (n - l)),
                            a = window.setTimeout((function() { e(n + r) }), r); return l = n + r, a }), window.cancelAnimationFrame || (window.cancelAnimationFrame = function(e) { clearTimeout(e) }), c.initialize = function() { return !!c.initialized || (c.error = "", c.d = "string" == typeof e ? document.getElementById(e) : e, c.d ? (c.startVal = Number(t), c.endVal = Number(n), s(c.startVal) && s(c.endVal) ? (c.decimals = Math.max(0, r || 0), c.dec = Math.pow(10, c.decimals), c.duration = 1e3 * Number(a) || 2e3, c.countDown = c.startVal > c.endVal, c.frameVal = c.startVal, c.initialized = !0, !0) : (c.error = "[CountUp] startVal (" + t + ") or endVal (" + n + ") is not a number", !1)) : (c.error = "[CountUp] target is null or undefined", !1)) }, c.printValue = function(e) { var t = c.options.formattingFn(e); "INPUT" === c.d.tagName ? this.d.value = t : "text" === c.d.tagName || "tspan" === c.d.tagName ? this.d.textContent = t : this.d.innerHTML = t }, c.count = function(e) { c.startTime || (c.startTime = e), c.timestamp = e; var t = e - c.startTime;
                        c.remaining = c.duration - t, c.options.useEasing ? c.countDown ? c.frameVal = c.startVal - c.options.easingFn(t, 0, c.startVal - c.endVal, c.duration) : c.frameVal = c.options.easingFn(t, c.startVal, c.endVal - c.startVal, c.duration) : c.countDown ? c.frameVal = c.startVal - (c.startVal - c.endVal) * (t / c.duration) : c.frameVal = c.startVal + (c.endVal - c.startVal) * (t / c.duration), c.countDown ? c.frameVal = c.frameVal < c.endVal ? c.endVal : c.frameVal : c.frameVal = c.frameVal > c.endVal ? c.endVal : c.frameVal, c.frameVal = Math.round(c.frameVal * c.dec) / c.dec, c.printValue(c.frameVal), t < c.duration ? c.rAF = requestAnimationFrame(c.count) : c.callback && c.callback() }, c.start = function(e) { c.initialize() && (c.callback = e, c.rAF = requestAnimationFrame(c.count)) }, c.pauseResume = function() { c.paused ? (c.paused = !1, delete c.startTime, c.duration = c.remaining, c.startVal = c.frameVal, requestAnimationFrame(c.count)) : (c.paused = !0, cancelAnimationFrame(c.rAF)) }, c.reset = function() { c.paused = !1, delete c.startTime, c.initialized = !1, c.initialize() && (cancelAnimationFrame(c.rAF), c.printValue(c.startVal)) }, c.update = function(e) { if (c.initialize()) { if (!s(e = Number(e))) return void(c.error = "[CountUp] update() - new endVal is not a number: " + e);
                            c.error = "", e !== c.frameVal && (cancelAnimationFrame(c.rAF), c.paused = !1, delete c.startTime, c.startVal = c.frameVal, c.endVal = e, c.countDown = c.startVal > c.endVal, c.rAF = requestAnimationFrame(c.count)) } }, c.initialize() && c.printValue(c.startVal) }; return r }, void 0 === (a = "function" === typeof r ? r.call(t, n, t, e) : r) || (e.exports = a) }, 1289: function(e, t, n) { var r, a, o;
            a = [], void 0 === (o = "function" === typeof(r = function() { var e = function() {},
                    t = {},
                    n = {},
                    r = {};

                function a(e, t) { e = e.push ? e : [e]; var a, o, i, u = [],
                        s = e.length,
                        c = s; for (a = function(e, n) { n.length && u.push(e), --c || t(u) }; s--;) o = e[s], (i = n[o]) ? a(o, i) : (r[o] = r[o] || []).push(a) }

                function o(e, t) { if (e) { var a = r[e]; if (n[e] = t, a)
                            for (; a.length;) a[0](e, t), a.splice(0, 1) } }

                function i(t, n) { t.call && (t = { success: t }), n.length ? (t.error || e)(n) : (t.success || e)(t) }

                function u(t, n, r, a) { var o, i, s = document,
                        c = r.async,
                        f = (r.numRetries || 0) + 1,
                        l = r.before || e,
                        p = t.replace(/[\?|#].*$/, ""),
                        d = t.replace(/^(css|img)!/, "");
                    a = a || 0, /(^css!|\.css$)/.test(p) ? ((i = s.createElement("link")).rel = "stylesheet", i.href = d, (o = "hideFocus" in i) && i.relList && (o = 0, i.rel = "preload", i.as = "style")) : /(^img!|\.(png|gif|jpg|svg|webp)$)/.test(p) ? (i = s.createElement("img")).src = d : ((i = s.createElement("script")).src = t, i.async = void 0 === c || c), i.onload = i.onerror = i.onbeforeload = function(e) { var s = e.type[0]; if (o) try { i.sheet.cssText.length || (s = "e") } catch (c) { 18 != c.code && (s = "e") }
                        if ("e" == s) { if ((a += 1) < f) return u(t, n, r, a) } else if ("preload" == i.rel && "style" == i.as) return i.rel = "stylesheet";
                        n(t, s, e.defaultPrevented) }, !1 !== l(t, i) && s.head.appendChild(i) }

                function s(e, t, n) { var r, a, o = (e = e.push ? e : [e]).length,
                        i = o,
                        s = []; for (r = function(e, n, r) { if ("e" == n && s.push(e), "b" == n) { if (!r) return;
                                s.push(e) }--o || t(s) }, a = 0; a < i; a++) u(e[a], r, n) }

                function c(e, n, r) { var a, u; if (n && n.trim && (a = n), u = (a ? r : n) || {}, a) { if (a in t) throw "LoadJS";
                        t[a] = !0 }

                    function c(t, n) { s(e, (function(e) { i(u, e), t && i({ success: t, error: n }, e), o(a, e) }), u) } if (u.returnPromise) return new Promise(c);
                    c() } return c.ready = function(e, t) { return a(e, (function(e) { i(t, e) })), c }, c.done = function(e) { o(e, []) }, c.reset = function() { t = {}, n = {}, r = {} }, c.isDefined = function(e) { return e in t }, c }) ? r.apply(t, a) : r) || (e.exports = o) }, 1400: function(e, t, n) { "use strict";
            n.d(t, "a", (function() { return w })); var r = n(1),
                a = n.n(r),
                o = n(0),
                i = n.n(o),
                u = n(1289),
                s = n.n(u);

            function c() { return c = Object.assign || function(e) { for (var t = 1; t < arguments.length; t++) { var n = arguments[t]; for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]) } return e }, c.apply(this, arguments) } var f = "twttr",
                l = f,
                p = !("undefined" === typeof window || !window.document || !window.document.createElement);

            function d(e, t) { return e === t ? 0 !== e || 0 !== t || 1 / e === 1 / t : e !== e && t !== t }

            function m(e) { var t = Object(o.useRef)(); return function(e, t) { if (d(e, t)) return !0; if ("object" !== typeof e || null === e || "object" !== typeof t || null === t) return !1; var n = Object.keys(e),
                        r = Object.keys(t); if (n.length !== r.length) return !1; for (var a = 0; a < n.length; a++)
                        if (!Object.prototype.hasOwnProperty.call(t, n[a]) || !d(e[n[a]], t[n[a]])) return !1;
                    return !0 }(e, t.current) || (t.current = e), t.current }

            function h(e) { return "object" === typeof e ? c({}, e) : e }

            function v(e, t, n, r, a, o, i) { try { var u = e[o](i),
                        s = u.value } catch (c) { return void n(c) }
                u.done ? t(s) : Promise.resolve(s).then(r, a) }
            p && s()("https://platform.twitter.com/widgets.js", l); var y = "twdiv";

            function g(e, t, n, r) { var i = Object(o.useState)(null),
                    u = i[0],
                    c = i[1],
                    f = Object(o.useRef)(null); if (!p) return { ref: f, error: u }; var d = [e, m(t), m(n)]; return Object(o.useEffect)((function() { c(null); var o, i, u = !1; if (f.current) { var p = function() { var o, i = (o = a.a.mark((function o() { var i, p; return a.a.wrap((function(a) { for (;;) switch (a.prev = a.next) {
                                        case 0:
                                            if (f && f.current) { a.next = 2; break } return a.abrupt("return");
                                        case 2:
                                            return (i = document.createElement("div")).setAttribute(y, "yes"), f.current.appendChild(i), a.prev = 5, a.next = 8, new Promise((function(e, t) { var n = function() { return t(new Error("Could not load remote twitter widgets js")) };
                                                s.a.ready(l, { success: function() { var t = window.twttr;
                                                        t && t.widgets || n(), e(t.widgets) }, error: n }) }));
                                        case 8:
                                            return p = a.sent, a.next = 11, p[e](h(t), i, h(n));
                                        case 11:
                                            if (a.sent || u) { a.next = 14; break } throw new Error("Twitter could not create widget. If it is a Timeline or Tweet, ensure the screenName/tweetId exists.");
                                        case 14:
                                            a.next = 21; break;
                                        case 16:
                                            return a.prev = 16, a.t0 = a.catch(5), console.error(a.t0), c(a.t0), a.abrupt("return");
                                        case 21:
                                            if (f && f.current) { a.next = 23; break } return a.abrupt("return");
                                        case 23:
                                            if (!u) { a.next = 26; break } return i && i.remove(), a.abrupt("return");
                                        case 26:
                                            r && r();
                                        case 27:
                                        case "end":
                                            return a.stop() } }), o, null, [
                                    [5, 16]
                                ]) })), function() { var e = this,
                                    t = arguments; return new Promise((function(n, r) { var a = o.apply(e, t);

                                    function i(e) { v(a, n, r, i, u, "next", e) }

                                    function u(e) { v(a, n, r, i, u, "throw", e) }
                                    i(void 0) })) }); return function() { return i.apply(this, arguments) } }();
                        o = f.current, i = y, o && o.querySelectorAll("*").forEach((function(e) { e.hasAttribute(i) && e.remove() })), p() } return function() { u = !0 } }), d), { ref: f, error: u } } var w = function(e) { var t = e.dataSource,
                    n = e.options,
                    r = e.onLoad,
                    a = e.renderError,
                    o = g("createTimeline", t, n, r),
                    u = o.ref,
                    s = o.error; return i.a.createElement("div", { ref: u }, s && a && a(s)) } } }
]);