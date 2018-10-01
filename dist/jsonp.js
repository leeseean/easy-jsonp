! function (e, t) {
    "object" == typeof exports && "object" == typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define([], t) : "object" == typeof exports ? exports.jsonp = t() : e.jsonp = t()
}(window, function () {
    return function (e) {
        var t = {};

        function n(o) {
            if (t[o]) return t[o].exports;
            var r = t[o] = {
                i: o,
                l: !1,
                exports: {}
            };
            return e[o].call(r.exports, r, r.exports, n), r.l = !0, r.exports
        }
        return n.m = e, n.c = t, n.d = function (e, t, o) {
            n.o(e, t) || Object.defineProperty(e, t, {
                enumerable: !0,
                get: o
            })
        }, n.r = function (e) {
            "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
                value: "Module"
            }), Object.defineProperty(e, "__esModule", {
                value: !0
            })
        }, n.t = function (e, t) {
            if (1 & t && (e = n(e)), 8 & t) return e;
            if (4 & t && "object" == typeof e && e && e.__esModule) return e;
            var o = Object.create(null);
            if (n.r(o), Object.defineProperty(o, "default", {
                    enumerable: !0,
                    value: e
                }), 2 & t && "string" != typeof e)
                for (var r in e) n.d(o, r, function (t) {
                    return e[t]
                }.bind(null, r));
            return o
        }, n.n = function (e) {
            var t = e && e.__esModule ? function () {
                return e.default
            } : function () {
                return e
            };
            return n.d(t, "a", t), t
        }, n.o = function (e, t) {
            return Object.prototype.hasOwnProperty.call(e, t)
        }, n.p = "", n(n.s = 0)
    }([function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        t.default = function (e) {
            var t = e.url,
                n = void 0 === t ? "" : t,
                o = e.params,
                r = void 0 === o ? {} : o,
                i = e.timeout,
                u = void 0 === i ? 6e3 : i,
                c = e.callback,
                f = void 0 === c ? "jsonpCallback" : c; - 1 !== n.indexOf("?") ? n += "&" : n += "?";
            var d = "";
            for (var l in r) d += "&" + l + "=" + encodeURIComponent(r[l]);
            n += d = d.slice(1), n += "&callback=" + (f += String((new Date).getTime()));
            var a = void 0,
                p = document.createElement("script");

            function s() {
                a && clearTimeout(a), document.head.removeChild(p), window[f] = void 0
            }
            return p.src = n, new Promise(function (e, t) {
                u && (a = setTimeout(function () {
                    t(new Error("Timeout")), s()
                }, u)), window[f] = function (t) {
                    e(t), s()
                }, document.head.appendChild(p)
            })
        }
    }])
});