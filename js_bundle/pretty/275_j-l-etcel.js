;
! function() {
  try {
    var e = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof global ? global : "undefined" != typeof window ? window : "undefined" != typeof self ? self : {},
      n = (new e.Error).stack;
    n && ((e._debugIds || (e._debugIds = {}))[n] = "7765e0a6-dd78-8474-90a8-9b2f4a207286")
  } catch (e) {}
}();
(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push(["object" == typeof document ? document.currentScript : void 0, 608129, e => {
  "use strict";
  var t = e.i(984416),
    n = e.i(722099),
    r = e.i(345717),
    a = e.i(255859);
  let i = a.PRODUCT_BRAND.shortName,
    o = "flex min-h-[560px] items-center py-14",
    s = "https://introducing.muse.ai",
    l = "https://security.muse.ai";

  function c(e) {
    let t = `/images/landing/icons/${e}.webp`;
    return {
      src: t,
      srcSet: `${t} 1x, /images/landing/icons/${e}@2x.webp 2x`
    }
  }
  let u = {
    airplane: c("icon-airplane"),
    calendar: c("icon-calendar"),
    fitness: c("b-01"),
    inbox: c("icon-envelope"),
    money: c("icon-piggybank"),
    shopping: c("icon-cart"),
    pencils: c("icon-pencils"),
    clipboard: c("icon-clipboard"),
    chart: c("e-03")
  };

  function d(e, {
    hasDarkVariant: t = !0
  } = {}) {
    let n = t ? `${e}-dark` : e;
    return {
      imageSrc: `/images/landing/${e}.webp`,
      imageSrcSet: `/images/landing/${e}.webp 1x, /images/landing/${e}@2x.webp 2x`,
      imageSrcDark: `/images/landing/${n}.webp`,
      imageSrcSetDark: `/images/landing/${n}.webp 1x, /images/landing/${n}@2x.webp 2x`
    }
  }
  let f = ["browser", "messaging", "approvals", "privacy", "goals", "connectors"],
    h = {
      approvals: d("approvals"),
      browser: d("browser"),
      connectors: d("connectors", {
        hasDarkVariant: !1
      }),
      goals: d("goals"),
      messaging: d("messaging"),
      privacy: d("secure-storage")
    };

  function p(e) {
    return String.fromCharCode(57344 + e)
  }
  var m = e.i(519172);

  function _(e) {
    if (void 0 === e) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
    return e
  }

  function g(e, t) {
    e.prototype = Object.create(t.prototype), e.prototype.constructor = e, e.__proto__ = t
  }
  var v, y, b, x, w, k, C, S, E, T, N, A, R, I, O, L, j, P, M, D, H, F, U, G, B, z, Y = {
      autoSleep: 120,
      force3D: "auto",
      nullTargetWarn: 1,
      units: {
        lineHeight: ""
      }
    },
    W = {
      duration: .5,
      overwrite: !1,
      delay: 0
    },
    q = 2 * Math.PI,
    V = q / 4,
    K = 0,
    X = Math.sqrt,
    $ = Math.cos,
    Q = Math.sin,
    Z = function(e) {
      return "string" == typeof e
    },
    J = function(e) {
      return "function" == typeof e
    },
    ee = function(e) {
      return "number" == typeof e
    },
    et = function(e) {
      return void 0 === e
    },
    en = function(e) {
      return "object" == typeof e
    },
    er = function(e) {
      return !1 !== e
    },
    ea = function() {
      return "u" > typeof window
    },
    ei = function(e) {
      return J(e) || Z(e)
    },
    eo = "function" == typeof ArrayBuffer && ArrayBuffer.isView || function() {},
    es = Array.isArray,
    el = /random\([^)]+\)/g,
    ec = /,\s*/g,
    eu = /(?:-?\.?\d|\.)+/gi,
    ed = /[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,
    ef = /[-+=.]*\d+[.e-]*\d*[a-z%]*/g,
    eh = /[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,
    ep = /[+-]=-?[.\d]+/,
    em = /[^,'"\[\]\s]+/gi,
    e_ = /^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,
    eg = {},
    ev = {},
    ey = function(e) {
      return (ev = eX(e, eg)) && nU
    },
    eb = function(e, t) {
      return console.warn("Invalid property", e, "set to", t, "Missing plugin? gsap.registerPlugin()")
    },
    ex = function(e, t) {
      return !t && console.warn(e)
    },
    ew = function(e, t) {
      return e && (eg[e] = t) && ev && (ev[e] = t) || eg
    },
    ek = function() {
      return 0
    },
    eC = {
      suppressEvents: !0,
      isStart: !0,
      kill: !1
    },
    eS = {
      suppressEvents: !0,
      kill: !1
    },
    eE = {
      suppressEvents: !0
    },
    eT = {},
    eN = [],
    eA = {},
    eR = {},
    eI = {},
    eO = 30,
    eL = [],
    ej = "",
    eP = function(e) {
      var t, n, r = e[0];
      if (en(r) || J(r) || (e = [e]), !(t = (r._gsap || {}).harness)) {
        for (n = eL.length; n-- && !eL[n].targetTest(r););
        t = eL[n]
      }
      for (n = e.length; n--;) e[n] && (e[n]._gsap || (e[n]._gsap = new t2(e[n], t))) || e.splice(n, 1);
      return e
    },
    eM = function(e) {
      return e._gsap || eP(ty(e))[0]._gsap
    },
    eD = function(e, t, n) {
      return (n = e[t]) && J(n) ? e[t]() : et(n) && e.getAttribute && e.getAttribute(t) || n
    },
    eH = function(e, t) {
      return (e = e.split(",")).forEach(t) || e
    },
    eF = function(e) {
      return Math.round(1e5 * e) / 1e5 || 0
    },
    eU = function(e) {
      return Math.round(1e7 * e) / 1e7 || 0
    },
    eG = function(e, t) {
      var n = t.charAt(0),
        r = parseFloat(t.substr(2));
      return e = parseFloat(e), "+" === n ? e + r : "-" === n ? e - r : "*" === n ? e * r : e / r
    },
    eB = function(e, t) {
      for (var n = t.length, r = 0; 0 > e.indexOf(t[r]) && ++r < n;);
      return r < n
    },
    ez = function() {
      var e, t, n = eN.length,
        r = eN.slice(0);
      for (eA = {}, eN.length = 0, e = 0; e < n; e++)(t = r[e]) && t._lazy && (t.render(t._lazy[0], t._lazy[1], !0)._lazy = 0)
    },
    eY = function(e) {
      return !!(e._initted || e._startAt || e.add)
    },
    eW = function(e, t, n, r) {
      eN.length && !j && ez(), e.render(t, n, r || !!(j && t < 0 && eY(e))), eN.length && !j && ez()
    },
    eq = function(e) {
      var t = parseFloat(e);
      return (t || 0 === t) && (e + "").match(em).length < 2 ? t : Z(e) ? e.trim() : e
    },
    eV = function(e) {
      return e
    },
    eK = function(e, t) {
      for (var n in t) n in e || (e[n] = t[n]);
      return e
    },
    eX = function(e, t) {
      for (var n in t) e[n] = t[n];
      return e
    },
    e$ = function e(t, n) {
      for (var r in n) "__proto__" !== r && "constructor" !== r && "prototype" !== r && (t[r] = en(n[r]) ? e(t[r] || (t[r] = {}), n[r]) : n[r]);
      return t
    },
    eQ = function(e, t) {
      var n, r = {};
      for (n in e) n in t || (r[n] = e[n]);
      return r
    },
    eZ = function(e) {
      var t, n = e.parent || M,
        r = e.keyframes ? (t = es(e.keyframes), function(e, n) {
          for (var r in n) r in e || "duration" === r && t || "ease" === r || (e[r] = n[r])
        }) : eK;
      if (er(e.inherit))
        for (; n;) r(e, n.vars.defaults), n = n.parent || n._dp;
      return e
    },
    eJ = function(e, t) {
      for (var n = e.length, r = n === t.length; r && n-- && e[n] === t[n];);
      return n < 0
    },
    e0 = function(e, t, n, r, a) {
      void 0 === n && (n = "_first"), void 0 === r && (r = "_last");
      var i, o = e[r];
      if (a)
        for (i = t[a]; o && o[a] > i;) o = o._prev;
      return o ? (t._next = o._next, o._next = t) : (t._next = e[n], e[n] = t), t._next ? t._next._prev = t : e[r] = t, t._prev = o, t.parent = t._dp = e, t
    },
    e1 = function(e, t, n, r) {
      void 0 === n && (n = "_first"), void 0 === r && (r = "_last");
      var a = t._prev,
        i = t._next;
      a ? a._next = i : e[n] === t && (e[n] = i), i ? i._prev = a : e[r] === t && (e[r] = a), t._next = t._prev = t.parent = null
    },
    e2 = function(e, t) {
      e.parent && (!t || e.parent.autoRemoveChildren) && e.parent.remove && e.parent.remove(e), e._act = 0
    },
    e3 = function(e, t) {
      if (e && (!t || t._end > e._dur || t._start < 0))
        for (var n = e; n;) n._dirty = 1, n = n.parent;
      return e
    },
    e4 = function(e) {
      for (var t = e.parent; t && t.parent;) t._dirty = 1, t.totalDuration(), t = t.parent;
      return e
    },
    e5 = function(e, t, n, r) {
      return e._startAt && (j ? e._startAt.revert(eS) : e.vars.immediateRender && !e.vars.autoRevert || e._startAt.render(t, !0, r))
    },
    e6 = function(e) {
      return e._repeat ? e8(e._tTime, e = e.duration() + e._rDelay) * e : 0
    },
    e8 = function(e, t) {
      var n = Math.floor(e = eU(e / t));
      return e && n === e ? n - 1 : n
    },
    e7 = function(e, t) {
      return (e - t._start) * t._ts + (t._ts >= 0 ? 0 : t._dirty ? t.totalDuration() : t._tDur)
    },
    e9 = function(e) {
      return e._end = eU(e._start + (e._tDur / Math.abs(e._ts || e._rts || 1e-8) || 0))
    },
    te = function(e, t) {
      var n = e._dp;
      return n && n.smoothChildTiming && e._ts && (e._start = eU(n._time - (e._ts > 0 ? t / e._ts : -(((e._dirty ? e.totalDuration() : e._tDur) - t) / e._ts))), e9(e), n._dirty || e3(n, e)), e
    },
    tt = function(e, t) {
      var n;
      if ((t._time || !t._dur && t._initted || t._start < e._time && (t._dur || !t.add)) && (n = e7(e.rawTime(), t), (!t._dur || tm(0, t.totalDuration(), n) - t._tTime > 1e-8) && t.render(n, !0)), e3(e, t)._dp && e._initted && e._time >= e._dur && e._ts) {
        if (e._dur < e.duration())
          for (n = e; n._dp;) n.rawTime() >= 0 && n.totalTime(n._tTime), n = n._dp;
        e._zTime = -1e-8
      }
    },
    tn = function(e, t, n, r) {
      return t.parent && e2(t), t._start = eU((ee(n) ? n : n || e !== M ? tf(e, n, t) : e._time) + t._delay), t._end = eU(t._start + (t.totalDuration() / Math.abs(t.timeScale()) || 0)), e0(e, t, "_first", "_last", e._sort ? "_start" : 0), to(t) || (e._recent = t), r || tt(e, t), e._ts < 0 && te(e, e._tTime), e
    },
    tr = function(e, t) {
      return (eg.ScrollTrigger || eb("scrollTrigger", t)) && eg.ScrollTrigger.create(t, e)
    },
    ta = function(e, t, n, r, a) {
      return (ni(e, t, a), e._initted) ? !n && e._pt && !j && (e._dur && !1 !== e.vars.lazy || !e._dur && e.vars.lazy) && G !== tB.frame ? (eN.push(e), e._lazy = [a, r], 1) : void 0 : 1
    },
    ti = function e(t) {
      var n = t.parent;
      return n && n._ts && n._initted && !n._lock && (0 > n.rawTime() || e(n))
    },
    to = function(e) {
      var t = e.data;
      return "isFromStart" === t || "isStart" === t
    },
    ts = function(e, t, n, r) {
      var a, i, o, s = e.ratio,
        l = t < 0 || !t && (!e._start && ti(e) && !(!e._initted && to(e)) || (e._ts < 0 || e._dp._ts < 0) && !to(e)) ? 0 : 1,
        c = e._rDelay,
        u = 0;
      if (c && e._repeat && (i = e8(u = tm(0, e._tDur, t), c), e._yoyo && 1 & i && (l = 1 - l), i !== e8(e._tTime, c) && (s = 1 - l, e.vars.repeatRefresh && e._initted && e.invalidate())), l !== s || j || r || 1e-8 === e._zTime || !t && e._zTime) {
        if (!e._initted && ta(e, t, r, n, u)) return;
        for (o = e._zTime, e._zTime = t || 1e-8 * !!n, n || (n = t && !o), e.ratio = l, e._from && (l = 1 - l), e._time = 0, e._tTime = u, a = e._pt; a;) a.r(l, a.d), a = a._next;
        t < 0 && e5(e, t, n, !0), e._onUpdate && !n && tR(e, "onUpdate"), u && e._repeat && !n && e.parent && tR(e, "onRepeat"), (t >= e._tDur || t < 0) && e.ratio === l && (l && e2(e, 1), n || j || (tR(e, l ? "onComplete" : "onReverseComplete", !0), e._prom && e._prom()))
      } else e._zTime || (e._zTime = t)
    },
    tl = function(e, t, n) {
      var r;
      if (n > t)
        for (r = e._first; r && r._start <= n;) {
          if ("isPause" === r.data && r._start > t) return r;
          r = r._next
        } else
          for (r = e._last; r && r._start >= n;) {
            if ("isPause" === r.data && r._start < t) return r;
            r = r._prev
          }
    },
    tc = function(e, t, n, r) {
      var a = e._repeat,
        i = eU(t) || 0,
        o = e._tTime / e._tDur;
      return o && !r && (e._time *= i / e._dur), e._dur = i, e._tDur = a ? a < 0 ? 1e10 : eU(i * (a + 1) + e._rDelay * a) : i, o > 0 && !r && te(e, e._tTime = e._tDur * o), e.parent && e9(e), n || e3(e.parent, e), e
    },
    tu = function(e) {
      return e instanceof t4 ? e3(e) : tc(e, e._dur)
    },
    td = {
      _start: 0,
      endTime: ek,
      totalDuration: ek
    },
    tf = function e(t, n, r) {
      var a, i, o, s = t.labels,
        l = t._recent || td,
        c = t.duration() >= 1e8 ? l.endTime(!1) : t._dur;
      return Z(n) && (isNaN(n) || n in s) ? (i = n.charAt(0), o = "%" === n.substr(-1), a = n.indexOf("="), "<" === i || ">" === i) ? (a >= 0 && (n = n.replace(/=/, "")), ("<" === i ? l._start : l.endTime(l._repeat >= 0)) + (parseFloat(n.substr(1)) || 0) * (o ? (a < 0 ? l : r).totalDuration() / 100 : 1)) : a < 0 ? (n in s || (s[n] = c), s[n]) : (i = parseFloat(n.charAt(a - 1) + n.substr(a + 1)), o && r && (i = i / 100 * (es(r) ? r[0] : r).totalDuration()), a > 1 ? e(t, n.substr(0, a - 1), r) + i : c + i) : null == n ? c : +n
    },
    th = function(e, t, n) {
      var r, a, i = ee(t[1]),
        o = (i ? 2 : 1) + (e < 2 ? 0 : 1),
        s = t[o];
      if (i && (s.duration = t[1]), s.parent = n, e) {
        for (r = s, a = n; a && !("immediateRender" in r);) r = a.vars.defaults || {}, a = er(a.vars.inherit) && a.parent;
        s.immediateRender = er(r.immediateRender), e < 2 ? s.runBackwards = 1 : s.startAt = t[o - 1]
      }
      return new nf(t[0], s, t[o + 1])
    },
    tp = function(e, t) {
      return e || 0 === e ? t(e) : t
    },
    tm = function(e, t, n) {
      return n < e ? e : n > t ? t : n
    },
    t_ = function(e, t) {
      return Z(e) && (t = e_.exec(e)) ? t[1] : ""
    },
    tg = [].slice,
    tv = function(e, t) {
      return e && en(e) && "length" in e && (!t && !e.length || e.length - 1 in e && en(e[0])) && !e.nodeType && e !== D
    },
    ty = function(e, t, n) {
      var r;
      return P && !t && P.selector ? P.selector(e) : Z(e) && !n && (H || !tz()) ? tg.call((t || F).querySelectorAll(e), 0) : es(e) ? (void 0 === r && (r = []), e.forEach(function(e) {
        var t;
        return Z(e) && !n || tv(e, 1) ? (t = r).push.apply(t, ty(e)) : r.push(e)
      }) || r) : tv(e) ? tg.call(e, 0) : e ? [e] : []
    },
    tb = function(e) {
      return e = ty(e)[0] || ex("Invalid scope") || {},
        function(t) {
          var n = e.current || e.nativeElement || e;
          return ty(t, n.querySelectorAll ? n : n === e ? ex("Invalid scope") || F.createElement("div") : e)
        }
    },
    tx = function(e) {
      return e.sort(function() {
        return .5 - Math.random()
      })
    },
    tw = function(e) {
      if (J(e)) return e;
      var t = en(e) ? e : {
          each: e
        },
        n = tQ(t.ease),
        r = t.from || 0,
        a = parseFloat(t.base) || 0,
        i = {},
        o = r > 0 && r < 1,
        s = isNaN(r) || o,
        l = t.axis,
        c = r,
        u = r;
      return Z(r) ? c = u = ({
          center: .5,
          edges: .5,
          end: 1
        })[r] || 0 : !o && s && (c = r[0], u = r[1]),
        function(e, o, d) {
          var f, h, p, m, _, g, v, y, b, x = (d || t).length,
            w = i[x];
          if (!w) {
            if (!(b = "auto" === t.grid ? 0 : (t.grid || [1, 1e8])[1])) {
              for (v = -1e8; v < (v = d[b++].getBoundingClientRect().left) && b < x;);
              b < x && b--
            }
            for (w = i[x] = [], f = s ? Math.min(b, x) * c - .5 : r % b, h = 1e8 === b ? 0 : s ? x * u / b - .5 : r / b | 0, v = 0, y = 1e8, g = 0; g < x; g++) p = g % b - f, m = h - (g / b | 0), w[g] = _ = l ? Math.abs("y" === l ? m : p) : X(p * p + m * m), _ > v && (v = _), _ < y && (y = _);
            "random" === r && tx(w), w.max = v - y, w.min = y, w.v = x = (parseFloat(t.amount) || parseFloat(t.each) * (b > x ? x - 1 : l ? "y" === l ? x / b : b : Math.max(b, x / b)) || 0) * ("edges" === r ? -1 : 1), w.b = x < 0 ? a - x : a, w.u = t_(t.amount || t.each) || 0, n = n && x < 0 ? t$(n) : n
          }
          return x = (w[e] - w.min) / w.max || 0, eU(w.b + (n ? n(x) : x) * w.v) + w.u
        }
    },
    tk = function(e) {
      var t = Math.pow(10, ((e + "").split(".")[1] || "").length);
      return function(n) {
        var r = eU(Math.round(parseFloat(n) / e) * e * t);
        return (r - r % 1) / t + (ee(n) ? 0 : t_(n))
      }
    },
    tC = function(e, t) {
      var n, r, a = es(e);
      return !a && en(e) && (n = a = e.radius || 1e8, e.values ? (r = !ee((e = ty(e.values))[0])) && (n *= n) : e = tk(e.increment)), tp(t, a ? J(e) ? function(t) {
        return Math.abs((r = e(t)) - t) <= n ? r : t
      } : function(t) {
        for (var a, i, o = parseFloat(r ? t.x : t), s = parseFloat(r ? t.y : 0), l = 1e8, c = 0, u = e.length; u--;)(a = r ? (a = e[u].x - o) * a + (i = e[u].y - s) * i : Math.abs(e[u] - o)) < l && (l = a, c = u);
        return c = !n || l <= n ? e[c] : t, r || c === t || ee(t) ? c : c + t_(t)
      } : tk(e))
    },
    tS = function(e, t, n, r) {
      return tp(es(e) ? !t : !0 === n ? (n = 0, !1) : !r, function() {
        return es(e) ? e[~~(Math.random() * e.length)] : (r = (n = n || 1e-5) < 1 ? Math.pow(10, (n + "").length - 2) : 1) && Math.floor(Math.round((e - n / 2 + Math.random() * (t - e + .99 * n)) / n) * n * r) / r
      })
    },
    tE = function(e, t, n) {
      return tp(n, function(n) {
        return e[~~t(n)]
      })
    },
    tT = function(e) {
      return e.replace(el, function(e) {
        var t = e.indexOf("[") + 1,
          n = e.substring(t || 7, t ? e.indexOf("]") : e.length - 1).split(ec);
        return tS(t ? n : +n[0], t ? 0 : +n[1], +n[2] || 1e-5)
      })
    },
    tN = function(e, t, n, r, a) {
      var i = t - e,
        o = r - n;
      return tp(a, function(t) {
        return n + ((t - e) / i * o || 0)
      })
    },
    tA = function(e, t, n) {
      var r, a, i, o = e.labels,
        s = 1e8;
      for (r in o)(a = o[r] - t) < 0 == !!n && a && s > (a = Math.abs(a)) && (i = r, s = a);
      return i
    },
    tR = function(e, t, n) {
      var r, a, i, o = e.vars,
        s = o[t],
        l = P,
        c = e._ctx;
      if (s) return r = o[t + "Params"], a = o.callbackScope || e, n && eN.length && ez(), c && (P = c), i = r ? s.apply(a, r) : s.call(a), P = l, i
    },
    tI = function(e) {
      return e2(e), e.scrollTrigger && e.scrollTrigger.kill(!!j), 1 > e.progress() && tR(e, "onInterrupt"), e
    },
    tO = [],
    tL = function(e) {
      if (e)
        if (e = !e.name && e.default || e, ea() || e.headless) {
          var t = e.name,
            n = J(e),
            r = t && !n && e.init ? function() {
              this._props = []
            } : e,
            a = {
              init: ek,
              render: nx,
              add: nn,
              kill: nk,
              modifier: nw,
              rawVars: 0
            },
            i = {
              targetTest: 0,
              get: 0,
              getSetter: ng,
              aliases: {},
              register: 0
            };
          if (tz(), e !== r) {
            if (eR[t]) return;
            eK(r, eK(eQ(e, a), i)), eX(r.prototype, eX(a, eQ(e, i))), eR[r.prop = t] = r, e.targetTest && (eL.push(r), eT[t] = 1), t = ("css" === t ? "CSS" : t.charAt(0).toUpperCase() + t.substr(1)) + "Plugin"
          }
          ew(t, r), e.register && e.register(nU, r, nE)
        } else tO.push(e)
    },
    tj = {
      aqua: [0, 255, 255],
      lime: [0, 255, 0],
      silver: [192, 192, 192],
      black: [0, 0, 0],
      maroon: [128, 0, 0],
      teal: [0, 128, 128],
      blue: [0, 0, 255],
      navy: [0, 0, 128],
      white: [255, 255, 255],
      olive: [128, 128, 0],
      yellow: [255, 255, 0],
      orange: [255, 165, 0],
      gray: [128, 128, 128],
      purple: [128, 0, 128],
      green: [0, 128, 0],
      red: [255, 0, 0],
      pink: [255, 192, 203],
      cyan: [0, 255, 255],
      transparent: [255, 255, 255, 0]
    },
    tP = function(e, t, n) {
      return (6 * (e += e < 0 ? 1 : e > 1 ? -1 : 0) < 1 ? t + (n - t) * e * 6 : e < .5 ? n : 3 * e < 2 ? t + (n - t) * (2 / 3 - e) * 6 : t) * 255 + .5 | 0
    },
    tM = function(e, t, n) {
      var r, a, i, o, s, l, c, u, d, f, h = e ? ee(e) ? [e >> 16, e >> 8 & 255, 255 & e] : 0 : tj.black;
      if (!h) {
        if ("," === e.substr(-1) && (e = e.substr(0, e.length - 1)), tj[e]) h = tj[e];
        else if ("#" === e.charAt(0)) {
          if (e.length < 6 && (r = e.charAt(1), e = "#" + r + r + (a = e.charAt(2)) + a + (i = e.charAt(3)) + i + (5 === e.length ? e.charAt(4) + e.charAt(4) : "")), 9 === e.length) return [(h = parseInt(e.substr(1, 6), 16)) >> 16, h >> 8 & 255, 255 & h, parseInt(e.substr(7), 16) / 255];
          h = [(e = parseInt(e.substr(1), 16)) >> 16, e >> 8 & 255, 255 & e]
        } else if ("hsl" === e.substr(0, 3))
          if (h = f = e.match(eu), t) {
            if (~e.indexOf("=")) return h = e.match(ed), n && h.length < 4 && (h[3] = 1), h
          } else o = h[0] % 360 / 360, s = h[1] / 100, a = (l = h[2] / 100) <= .5 ? l * (s + 1) : l + s - l * s, r = 2 * l - a, h.length > 3 && (h[3] *= 1), h[0] = tP(o + 1 / 3, r, a), h[1] = tP(o, r, a), h[2] = tP(o - 1 / 3, r, a);
        else h = e.match(eu) || tj.transparent;
        h = h.map(Number)
      }
      return t && !f && (r = h[0] / 255, l = ((c = Math.max(r, a = h[1] / 255, i = h[2] / 255)) + (u = Math.min(r, a, i))) / 2, c === u ? o = s = 0 : (d = c - u, s = l > .5 ? d / (2 - c - u) : d / (c + u), o = (c === r ? (a - i) / d + 6 * (a < i) : c === a ? (i - r) / d + 2 : (r - a) / d + 4) * 60), h[0] = ~~(o + .5), h[1] = ~~(100 * s + .5), h[2] = ~~(100 * l + .5)), n && h.length < 4 && (h[3] = 1), h
    },
    tD = function(e) {
      var t = [],
        n = [],
        r = -1;
      return e.split(tF).forEach(function(e) {
        var a = e.match(ef) || [];
        t.push.apply(t, a), n.push(r += a.length + 1)
      }), t.c = n, t
    },
    tH = function(e, t, n) {
      var r, a, i, o, s = "",
        l = (e + s).match(tF),
        c = t ? "hsla(" : "rgba(",
        u = 0;
      if (!l) return e;
      if (l = l.map(function(e) {
          return (e = tM(e, t, 1)) && c + (t ? e[0] + "," + e[1] + "%," + e[2] + "%," + e[3] : e.join(",")) + ")"
        }), n && (i = tD(e), (r = n.c).join(s) !== i.c.join(s)))
        for (o = (a = e.replace(tF, "1").split(ef)).length - 1; u < o; u++) s += a[u] + (~r.indexOf(u) ? l.shift() || c + "0,0,0,0)" : (i.length ? i : l.length ? l : n).shift());
      if (!a)
        for (o = (a = e.split(tF)).length - 1; u < o; u++) s += a[u] + l[u];
      return s + a[o]
    },
    tF = function() {
      var e, t = "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b";
      for (e in tj) t += "|" + e + "\\b";
      return RegExp(t + ")", "gi")
    }(),
    tU = /hsl[a]?\(/,
    tG = function(e) {
      var t, n = e.join(" ");
      if (tF.lastIndex = 0, tF.test(n)) return t = tU.test(n), e[1] = tH(e[1], t), e[0] = tH(e[0], t, tD(e[1])), !0
    },
    tB = (C = Date.now, S = 500, E = 33, N = T = C(), A = 1e3 / 240, R = 1e3 / 240, I = [], O = function e(t) {
      var n, r, a, i, o = C() - N,
        s = !0 === t;
      if ((o > S || o < 0) && (T += o - E), N += o, ((n = (a = N - T) - R) > 0 || s) && (i = ++x.frame, w = a - 1e3 * x.time, x.time = a /= 1e3, R += n + (n >= A ? 4 : A - n), r = 1), s || (v = y(e)), r)
        for (k = 0; k < I.length; k++) I[k](a, w, i, t)
    }, x = {
      time: 0,
      frame: 0,
      tick: function() {
        O(!0)
      },
      deltaRatio: function(e) {
        return w / (1e3 / (e || 60))
      },
      wake: function() {
        U && (!H && ea() && (F = (D = H = window).document || {}, eg.gsap = nU, (D.gsapVersions || (D.gsapVersions = [])).push(nU.version), ey(ev || D.GreenSockGlobals || !D.gsap && D || {}), tO.forEach(tL)), b = "u" > typeof requestAnimationFrame && requestAnimationFrame, v && x.sleep(), y = b || function(e) {
          return setTimeout(e, R - 1e3 * x.time + 1 | 0)
        }, z = 1, O(2))
      },
      sleep: function() {
        (b ? cancelAnimationFrame : clearTimeout)(v), z = 0, y = ek
      },
      lagSmoothing: function(e, t) {
        E = Math.min(t || 33, S = e || 1 / 0)
      },
      fps: function(e) {
        A = 1e3 / (e || 240), R = 1e3 * x.time + A
      },
      add: function(e, t, n) {
        var r = t ? function(t, n, a, i) {
          e(t, n, a, i), x.remove(r)
        } : e;
        return x.remove(e), I[n ? "unshift" : "push"](r), tz(), r
      },
      remove: function(e, t) {
        ~(t = I.indexOf(e)) && I.splice(t, 1) && k >= t && k--
      },
      _listeners: I
    }),
    tz = function() {
      return !z && tB.wake()
    },
    tY = {},
    tW = /^[\d.\-M][\d.\-,\s]/,
    tq = /["']/g,
    tV = function(e) {
      for (var t, n, r, a = {}, i = e.substr(1, e.length - 3).split(":"), o = i[0], s = 1, l = i.length; s < l; s++) n = i[s], t = s !== l - 1 ? n.lastIndexOf(",") : n.length, r = n.substr(0, t), a[o] = isNaN(r) ? r.replace(tq, "").trim() : +r, o = n.substr(t + 1).trim();
      return a
    },
    tK = function(e) {
      var t = e.indexOf("(") + 1,
        n = e.indexOf(")"),
        r = e.indexOf("(", t);
      return e.substring(t, ~r && r < n ? e.indexOf(")", n + 1) : n)
    },
    tX = function(e) {
      var t = (e + "").split("("),
        n = tY[t[0]];
      return n && t.length > 1 && n.config ? n.config.apply(null, ~e.indexOf("{") ? [tV(t[1])] : tK(e).split(",").map(eq)) : tY._CE && tW.test(e) ? tY._CE("", e) : n
    },
    t$ = function(e) {
      return function(t) {
        return 1 - e(1 - t)
      }
    },
    tQ = function(e, t) {
      return e && (J(e) ? e : tY[e] || tX(e)) || t
    },
    tZ = function(e, t, n, r) {
      void 0 === n && (n = function(e) {
        return 1 - t(1 - e)
      }), void 0 === r && (r = function(e) {
        return e < .5 ? t(2 * e) / 2 : 1 - t((1 - e) * 2) / 2
      });
      var a, i = {
        easeIn: t,
        easeOut: n,
        easeInOut: r
      };
      return eH(e, function(e) {
        for (var t in tY[e] = eg[e] = i, tY[a = e.toLowerCase()] = n, i) tY[a + ("easeIn" === t ? ".in" : "easeOut" === t ? ".out" : ".inOut")] = tY[e + "." + t] = i[t]
      }), i
    },
    tJ = function(e) {
      return function(t) {
        return t < .5 ? (1 - e(1 - 2 * t)) / 2 : .5 + e((t - .5) * 2) / 2
      }
    },
    t0 = function e(t, n, r) {
      var a = n >= 1 ? n : 1,
        i = (r || (t ? .3 : .45)) / (n < 1 ? n : 1),
        o = i / q * (Math.asin(1 / a) || 0),
        s = function(e) {
          return 1 === e ? 1 : a * Math.pow(2, -10 * e) * Q((e - o) * i) + 1
        },
        l = "out" === t ? s : "in" === t ? function(e) {
          return 1 - s(1 - e)
        } : tJ(s);
      return i = q / i, l.config = function(n, r) {
        return e(t, n, r)
      }, l
    },
    t1 = function e(t, n) {
      void 0 === n && (n = 1.70158);
      var r = function(e) {
          return e ? --e * e * ((n + 1) * e + n) + 1 : 0
        },
        a = "out" === t ? r : "in" === t ? function(e) {
          return 1 - r(1 - e)
        } : tJ(r);
      return a.config = function(n) {
        return e(t, n)
      }, a
    };
  eH("Linear,Quad,Cubic,Quart,Quint,Strong", function(e, t) {
    var n = t < 5 ? t + 1 : t;
    tZ(e + ",Power" + (n - 1), t ? function(e) {
      return Math.pow(e, n)
    } : function(e) {
      return e
    }, function(e) {
      return 1 - Math.pow(1 - e, n)
    }, function(e) {
      return e < .5 ? Math.pow(2 * e, n) / 2 : 1 - Math.pow((1 - e) * 2, n) / 2
    })
  }), tY.Linear.easeNone = tY.none = tY.Linear.easeIn, tZ("Elastic", t0("in"), t0("out"), t0()), t6 = 2 * (t5 = 1 / 2.75), t8 = 2.5 * t5, tZ("Bounce", function(e) {
    return 1 - t7(1 - e)
  }, t7 = function(e) {
    return e < t5 ? 7.5625 * e * e : e < t6 ? 7.5625 * Math.pow(e - 1.5 / 2.75, 2) + .75 : e < t8 ? 7.5625 * (e -= 2.25 / 2.75) * e + .9375 : 7.5625 * Math.pow(e - 2.625 / 2.75, 2) + .984375
  }), tZ("Expo", function(e) {
    return Math.pow(2, 10 * (e - 1)) * e + e * e * e * e * e * e * (1 - e)
  }), tZ("Circ", function(e) {
    return -(X(1 - e * e) - 1)
  }), tZ("Sine", function(e) {
    return 1 === e ? 1 : -$(e * V) + 1
  }), tZ("Back", t1("in"), t1("out"), t1()), tY.SteppedEase = tY.steps = eg.SteppedEase = {
    config: function(e, t) {
      void 0 === e && (e = 1);
      var n = 1 / e,
        r = e + +!t,
        a = +!!t,
        i = .99999999;
      return function(e) {
        return ((r * tm(0, i, e) | 0) + a) * n
      }
    }
  }, W.ease = tY["quad.out"], eH("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt", function(e) {
    return ej += e + "," + e + "Params,"
  });
  var t2 = function(e, t) {
      this.id = K++, e._gsap = this, this.target = e, this.harness = t, this.get = t ? t.get : eD, this.set = t ? t.getSetter : ng
    },
    t3 = function() {
      function e(e) {
        this.vars = e, this._delay = +e.delay || 0, (this._repeat = e.repeat === 1 / 0 ? -2 : e.repeat || 0) && (this._rDelay = e.repeatDelay || 0, this._yoyo = !!e.yoyo || !!e.yoyoEase), this._ts = 1, tc(this, +e.duration, 1, 1), this.data = e.data, P && (this._ctx = P, P.data.push(this)), z || tB.wake()
      }
      var t = e.prototype;
      return t.delay = function(e) {
        return e || 0 === e ? (this.parent && this.parent.smoothChildTiming && this.startTime(this._start + e - this._delay), this._delay = e, this) : this._delay
      }, t.duration = function(e) {
        return arguments.length ? this.totalDuration(this._repeat > 0 ? e + (e + this._rDelay) * this._repeat : e) : this.totalDuration() && this._dur
      }, t.totalDuration = function(e) {
        return arguments.length ? (this._dirty = 0, tc(this, this._repeat < 0 ? e : (e - this._repeat * this._rDelay) / (this._repeat + 1))) : this._tDur
      }, t.totalTime = function(e, t) {
        if (tz(), !arguments.length) return this._tTime;
        var n = this._dp;
        if (n && n.smoothChildTiming && this._ts) {
          for (te(this, e), !n._dp || n.parent || tt(n, this); n && n.parent;) n.parent._time !== n._start + (n._ts >= 0 ? n._tTime / n._ts : -((n.totalDuration() - n._tTime) / n._ts)) && n.totalTime(n._tTime, !0), n = n.parent;
          !this.parent && this._dp.autoRemoveChildren && (this._ts > 0 && e < this._tDur || this._ts < 0 && e > 0 || !this._tDur && !e) && tn(this._dp, this, this._start - this._delay)
        }
        return (this._tTime !== e || !this._dur && !t || this._initted && 1e-8 === Math.abs(this._zTime) || !this._initted && this._dur && e || !e && !this._initted && (this.add || this._ptLookup)) && (this._ts || (this._pTime = e), eW(this, e, t)), this
      }, t.time = function(e, t) {
        return arguments.length ? this.totalTime(Math.min(this.totalDuration(), e + e6(this)) % (this._dur + this._rDelay) || (e ? this._dur : 0), t) : this._time
      }, t.totalProgress = function(e, t) {
        return arguments.length ? this.totalTime(this.totalDuration() * e, t) : this.totalDuration() ? Math.min(1, this._tTime / this._tDur) : this.rawTime() >= 0 && this._initted ? 1 : 0
      }, t.progress = function(e, t) {
        return arguments.length ? this.totalTime(this.duration() * (this._yoyo && !(1 & this.iteration()) ? 1 - e : e) + e6(this), t) : this.duration() ? Math.min(1, this._time / this._dur) : +(this.rawTime() > 0)
      }, t.iteration = function(e, t) {
        var n = this.duration() + this._rDelay;
        return arguments.length ? this.totalTime(this._time + (e - 1) * n, t) : this._repeat ? e8(this._tTime, n) + 1 : 1
      }, t.timeScale = function(e, t) {
        if (!arguments.length) return -1e-8 === this._rts ? 0 : this._rts;
        if (this._rts === e) return this;
        var n = this.parent && this._ts ? e7(this.parent._time, this) : this._tTime;
        return this._rts = +e || 0, this._ts = this._ps || -1e-8 === e ? 0 : this._rts, this.totalTime(tm(-Math.abs(this._delay), this.totalDuration(), n), !1 !== t), e9(this), e4(this)
      }, t.paused = function(e) {
        return arguments.length ? (this._ps !== e && (this._ps = e, e ? (this._pTime = this._tTime || Math.max(-this._delay, this.rawTime()), this._ts = this._act = 0) : (tz(), this._ts = this._rts, this.totalTime(this.parent && !this.parent.smoothChildTiming ? this.rawTime() : this._tTime || this._pTime, 1 === this.progress() && 1e-8 !== Math.abs(this._zTime) && (this._tTime -= 1e-8)))), this) : this._ps
      }, t.startTime = function(e) {
        if (arguments.length) {
          this._start = eU(e);
          var t = this.parent || this._dp;
          return t && (t._sort || !this.parent) && tn(t, this, this._start - this._delay), this
        }
        return this._start
      }, t.endTime = function(e) {
        return this._start + (er(e) ? this.totalDuration() : this.duration()) / Math.abs(this._ts || 1)
      }, t.rawTime = function(e) {
        var t = this.parent || this._dp;
        return t ? e && (!this._ts || this._repeat && this._time && 1 > this.totalProgress()) ? this._tTime % (this._dur + this._rDelay) : this._ts ? e7(t.rawTime(e), this) : this._tTime : this._tTime
      }, t.revert = function(e) {
        void 0 === e && (e = eE);
        var t = j;
        return j = e, eY(this) && (this.timeline && this.timeline.revert(e), this.totalTime(-.01, e.suppressEvents)), "nested" !== this.data && !1 !== e.kill && this.kill(), j = t, this
      }, t.globalTime = function(e) {
        for (var t = this, n = arguments.length ? e : t.rawTime(); t;) n = t._start + n / (Math.abs(t._ts) || 1), t = t._dp;
        return !this.parent && this._sat ? this._sat.globalTime(e) : n
      }, t.repeat = function(e) {
        return arguments.length ? (this._repeat = e === 1 / 0 ? -2 : e, tu(this)) : -2 === this._repeat ? 1 / 0 : this._repeat
      }, t.repeatDelay = function(e) {
        if (arguments.length) {
          var t = this._time;
          return this._rDelay = e, tu(this), t ? this.time(t) : this
        }
        return this._rDelay
      }, t.yoyo = function(e) {
        return arguments.length ? (this._yoyo = e, this) : this._yoyo
      }, t.seek = function(e, t) {
        return this.totalTime(tf(this, e), er(t))
      }, t.restart = function(e, t) {
        return this.play().totalTime(e ? -this._delay : 0, er(t)), this._dur || (this._zTime = -1e-8), this
      }, t.play = function(e, t) {
        return null != e && this.seek(e, t), this.reversed(!1).paused(!1)
      }, t.reverse = function(e, t) {
        return null != e && this.seek(e || this.totalDuration(), t), this.reversed(!0).paused(!1)
      }, t.pause = function(e, t) {
        return null != e && this.seek(e, t), this.paused(!0)
      }, t.resume = function() {
        return this.paused(!1)
      }, t.reversed = function(e) {
        return arguments.length ? (!!e !== this.reversed() && this.timeScale(-this._rts || (e ? -1e-8 : 0)), this) : this._rts < 0
      }, t.invalidate = function() {
        return this._initted = this._act = 0, this._zTime = -1e-8, this
      }, t.isActive = function() {
        var e, t = this.parent || this._dp,
          n = this._start;
        return !!(!t || this._ts && this._initted && t.isActive() && (e = t.rawTime(!0)) >= n && e < this.endTime(!0) - 1e-8)
      }, t.eventCallback = function(e, t, n) {
        var r = this.vars;
        return arguments.length > 1 ? (t ? (r[e] = t, n && (r[e + "Params"] = n), "onUpdate" === e && (this._onUpdate = t)) : delete r[e], this) : r[e]
      }, t.then = function(e) {
        var t = this,
          n = t._prom;
        return new Promise(function(r) {
          var a = J(e) ? e : eV,
            i = function() {
              var e = t.then;
              t.then = null, n && n(), J(a) && (a = a(t)) && (a.then || a === t) && (t.then = e), r(a), t.then = e
            };
          t._initted && 1 === t.totalProgress() && t._ts >= 0 || !t._tTime && t._ts < 0 ? i() : t._prom = i
        })
      }, t.kill = function() {
        tI(this)
      }, e
    }();
  eK(t3.prototype, {
    _time: 0,
    _start: 0,
    _end: 0,
    _tTime: 0,
    _tDur: 0,
    _dirty: 0,
    _repeat: 0,
    _yoyo: !1,
    parent: null,
    _initted: !1,
    _rDelay: 0,
    _ts: 1,
    _dp: 0,
    ratio: 0,
    _zTime: -1e-8,
    _prom: 0,
    _ps: !1,
    _rts: 1
  });
  var t4 = function(e) {
    function t(t, n) {
      var r;
      return void 0 === t && (t = {}), (r = e.call(this, t) || this).labels = {}, r.smoothChildTiming = !!t.smoothChildTiming, r.autoRemoveChildren = !!t.autoRemoveChildren, r._sort = er(t.sortChildren), M && tn(t.parent || M, _(r), n), t.reversed && r.reverse(), t.paused && r.paused(!0), t.scrollTrigger && tr(_(r), t.scrollTrigger), r
    }
    g(t, e);
    var n = t.prototype;
    return n.to = function(e, t, n) {
      return th(0, arguments, this), this
    }, n.from = function(e, t, n) {
      return th(1, arguments, this), this
    }, n.fromTo = function(e, t, n, r) {
      return th(2, arguments, this), this
    }, n.set = function(e, t, n) {
      return t.duration = 0, t.parent = this, eZ(t).repeatDelay || (t.repeat = 0), t.immediateRender = !!t.immediateRender, new nf(e, t, tf(this, n), 1), this
    }, n.call = function(e, t, n) {
      return tn(this, nf.delayedCall(0, e, t), n)
    }, n.staggerTo = function(e, t, n, r, a, i, o) {
      return n.duration = t, n.stagger = n.stagger || r, n.onComplete = i, n.onCompleteParams = o, n.parent = this, new nf(e, n, tf(this, a)), this
    }, n.staggerFrom = function(e, t, n, r, a, i, o) {
      return n.runBackwards = 1, eZ(n).immediateRender = er(n.immediateRender), this.staggerTo(e, t, n, r, a, i, o)
    }, n.staggerFromTo = function(e, t, n, r, a, i, o, s) {
      return r.startAt = n, eZ(r).immediateRender = er(r.immediateRender), this.staggerTo(e, t, r, a, i, o, s)
    }, n.render = function(e, t, n) {
      var r, a, i, o, s, l, c, u, d, f, h, p, m = this._time,
        _ = this._dirty ? this.totalDuration() : this._tDur,
        g = this._dur,
        v = e <= 0 ? 0 : eU(e),
        y = this._zTime < 0 != e < 0 && (this._initted || !g);
      if (this !== M && v > _ && e >= 0 && (v = _), v !== this._tTime || n || y) {
        if (m !== this._time && g && (v += this._time - m, e += this._time - m), r = v, d = this._start, l = !(u = this._ts), y && (g || (m = this._zTime), (e || !t) && (this._zTime = e)), this._repeat) {
          if (h = this._yoyo, s = g + this._rDelay, this._repeat < -1 && e < 0) return this.totalTime(100 * s + e, t, n);
          if (r = eU(v % s), v === _ ? (o = this._repeat, r = g) : ((o = ~~(f = eU(v / s))) && o === f && (r = g, o--), r > g && (r = g)), f = e8(this._tTime, s), !m && this._tTime && f !== o && this._tTime - f * s - this._dur <= 0 && (f = o), h && 1 & o && (r = g - r, p = 1), o !== f && !this._lock) {
            var b = h && 1 & f,
              x = b === (h && 1 & o);
            if (o < f && (b = !b), m = b ? 0 : v % g ? g : v, this._lock = 1, this.render(m || (p ? 0 : eU(o * s)), t, !g)._lock = 0, this._tTime = v, !t && this.parent && tR(this, "onRepeat"), this.vars.repeatRefresh && !p && (this.invalidate()._lock = 1, f = o), m && m !== this._time || !this._ts !== l || this.vars.onRepeat && !this.parent && !this._act || (g = this._dur, _ = this._tDur, x && (this._lock = 2, m = b ? g : -1e-4, this.render(m, !0), this.vars.repeatRefresh && !p && this.invalidate()), this._lock = 0, !this._ts && !l)) return this
          }
        }
        if (this._hasPause && !this._forcing && this._lock < 2 && (c = tl(this, eU(m), eU(r))) && (v -= r - (r = c._start)), this._tTime = v, this._time = r, this._act = !!u, this._initted || (this._onUpdate = this.vars.onUpdate, this._initted = 1, this._zTime = e, m = 0), !m && v && g && !t && !f && (tR(this, "onStart"), this._tTime !== v)) return this;
        if (r >= m && e >= 0)
          for (a = this._first; a;) {
            if (i = a._next, (a._act || r >= a._start) && a._ts && c !== a) {
              if (a.parent !== this) return this.render(e, t, n);
              if (a.render(a._ts > 0 ? (r - a._start) * a._ts : (a._dirty ? a.totalDuration() : a._tDur) + (r - a._start) * a._ts, t, n), r !== this._time || !this._ts && !l) {
                c = 0, i && (v += this._zTime = -1e-8);
                break
              }
            }
            a = i
          } else {
            a = this._last;
            for (var w = e < 0 ? e : r; a;) {
              if (i = a._prev, (a._act || w <= a._end) && a._ts && c !== a) {
                if (a.parent !== this) return this.render(e, t, n);
                if (a.render(a._ts > 0 ? (w - a._start) * a._ts : (a._dirty ? a.totalDuration() : a._tDur) + (w - a._start) * a._ts, t, n || j && eY(a)), r !== this._time || !this._ts && !l) {
                  c = 0, i && (v += this._zTime = w ? -1e-8 : 1e-8);
                  break
                }
              }
              a = i
            }
          }
        if (c && !t && (this.pause(), c.render(r >= m ? 0 : -1e-8)._zTime = r >= m ? 1 : -1, this._ts)) return this._start = d, e9(this), this.render(e, t, n);
        this._onUpdate && !t && tR(this, "onUpdate", !0), (v === _ && this._tTime >= this.totalDuration() || !v && m) && (d === this._start || Math.abs(u) !== Math.abs(this._ts)) && !this._lock && ((e || !g) && (v === _ && this._ts > 0 || !v && this._ts < 0) && e2(this, 1), t || e < 0 && !m || !v && !m && _ || (tR(this, v === _ && e >= 0 ? "onComplete" : "onReverseComplete", !0), this._prom && !(v < _ && this.timeScale() > 0) && this._prom()))
      }
      return this
    }, n.add = function(e, t) {
      var n = this;
      if (ee(t) || (t = tf(this, t, e)), !(e instanceof t3)) {
        if (es(e)) return e.forEach(function(e) {
          return n.add(e, t)
        }), this;
        if (Z(e)) return this.addLabel(e, t);
        if (!J(e)) return this;
        e = nf.delayedCall(0, e)
      }
      return this !== e ? tn(this, e, t) : this
    }, n.getChildren = function(e, t, n, r) {
      void 0 === e && (e = !0), void 0 === t && (t = !0), void 0 === n && (n = !0), void 0 === r && (r = -1e8);
      for (var a = [], i = this._first; i;) i._start >= r && (i instanceof nf ? t && a.push(i) : (n && a.push(i), e && a.push.apply(a, i.getChildren(!0, t, n)))), i = i._next;
      return a
    }, n.getById = function(e) {
      for (var t = this.getChildren(1, 1, 1), n = t.length; n--;)
        if (t[n].vars.id === e) return t[n]
    }, n.remove = function(e) {
      return Z(e) ? this.removeLabel(e) : J(e) ? this.killTweensOf(e) : (e.parent === this && e1(this, e), e === this._recent && (this._recent = this._last), e3(this))
    }, n.totalTime = function(t, n) {
      return arguments.length ? (this._forcing = 1, !this._dp && this._ts && (this._start = eU(tB.time - (this._ts > 0 ? t / this._ts : -((this.totalDuration() - t) / this._ts)))), e.prototype.totalTime.call(this, t, n), this._forcing = 0, this) : this._tTime
    }, n.addLabel = function(e, t) {
      return this.labels[e] = tf(this, t), this
    }, n.removeLabel = function(e) {
      return delete this.labels[e], this
    }, n.addPause = function(e, t, n) {
      var r = nf.delayedCall(0, t || ek, n);
      return r.data = "isPause", this._hasPause = 1, tn(this, r, tf(this, e))
    }, n.removePause = function(e) {
      var t = this._first;
      for (e = tf(this, e); t;) t._start === e && "isPause" === t.data && e2(t), t = t._next
    }, n.killTweensOf = function(e, t, n) {
      for (var r = this.getTweensOf(e, n), a = r.length; a--;) t9 !== r[a] && r[a].kill(e, t);
      return this
    }, n.getTweensOf = function(e, t) {
      for (var n, r = [], a = ty(e), i = this._first, o = ee(t); i;) i instanceof nf ? eB(i._targets, a) && (o ? (!t9 || i._initted && i._ts) && i.globalTime(0) <= t && i.globalTime(i.totalDuration()) > t : !t || i.isActive()) && r.push(i) : (n = i.getTweensOf(a, t)).length && r.push.apply(r, n), i = i._next;
      return r
    }, n.tweenTo = function(e, t) {
      t = t || {};
      var n, r = this,
        a = tf(r, e),
        i = t,
        o = i.startAt,
        s = i.onStart,
        l = i.onStartParams,
        c = i.immediateRender,
        u = nf.to(r, eK({
          ease: t.ease || "none",
          lazy: !1,
          immediateRender: !1,
          time: a,
          overwrite: "auto",
          duration: t.duration || Math.abs((a - (o && "time" in o ? o.time : r._time)) / r.timeScale()) || 1e-8,
          onStart: function() {
            if (r.pause(), !n) {
              var e = t.duration || Math.abs((a - (o && "time" in o ? o.time : r._time)) / r.timeScale());
              u._dur !== e && tc(u, e, 0, 1).render(u._time, !0, !0), n = 1
            }
            s && s.apply(u, l || [])
          }
        }, t));
      return c ? u.render(0) : u
    }, n.tweenFromTo = function(e, t, n) {
      return this.tweenTo(t, eK({
        startAt: {
          time: tf(this, e)
        }
      }, n))
    }, n.recent = function() {
      return this._recent
    }, n.nextLabel = function(e) {
      return void 0 === e && (e = this._time), tA(this, tf(this, e))
    }, n.previousLabel = function(e) {
      return void 0 === e && (e = this._time), tA(this, tf(this, e), 1)
    }, n.currentLabel = function(e) {
      return arguments.length ? this.seek(e, !0) : this.previousLabel(this._time + 1e-8)
    }, n.shiftChildren = function(e, t, n) {
      void 0 === n && (n = 0);
      var r, a = this._first,
        i = this.labels;
      for (e = eU(e); a;) a._start >= n && (a._start += e, a._end += e), a = a._next;
      if (t)
        for (r in i) i[r] >= n && (i[r] += e);
      return e3(this)
    }, n.invalidate = function(t) {
      var n = this._first;
      for (this._lock = 0; n;) n.invalidate(t), n = n._next;
      return e.prototype.invalidate.call(this, t)
    }, n.clear = function(e) {
      void 0 === e && (e = !0);
      for (var t, n = this._first; n;) t = n._next, this.remove(n), n = t;
      return this._dp && (this._time = this._tTime = this._pTime = 0), e && (this.labels = {}), e3(this)
    }, n.totalDuration = function(e) {
      var t, n, r, a = 0,
        i = this._last,
        o = 1e8;
      if (arguments.length) return this.timeScale((this._repeat < 0 ? this.duration() : this.totalDuration()) / (this.reversed() ? -e : e));
      if (this._dirty) {
        for (r = this.parent; i;) t = i._prev, i._dirty && i.totalDuration(), (n = i._start) > o && this._sort && i._ts && !this._lock ? (this._lock = 1, tn(this, i, n - i._delay, 1)._lock = 0) : o = n, n < 0 && i._ts && (a -= n, (!r && !this._dp || r && r.smoothChildTiming) && (this._start += eU(n / this._ts), this._time -= n, this._tTime -= n), this.shiftChildren(-n, !1, -Infinity), o = 0), i._end > a && i._ts && (a = i._end), i = t;
        tc(this, this === M && this._time > a ? this._time : a, 1, 1), this._dirty = 0
      }
      return this._tDur
    }, t.updateRoot = function(e) {
      if (M._ts && (eW(M, e7(e, M)), G = tB.frame), tB.frame >= eO) {
        eO += Y.autoSleep || 120;
        var t = M._first;
        if ((!t || !t._ts) && Y.autoSleep && tB._listeners.length < 2) {
          for (; t && !t._ts;) t = t._next;
          t || tB.sleep()
        }
      }
    }, t
  }(t3);
  eK(t4.prototype, {
    _lock: 0,
    _hasPause: 0,
    _forcing: 0
  });
  var t5, t6, t8, t7, t9, ne, nt = function(e, t, n, r, a, i, o) {
      var s, l, c, u, d, f, h, p, m = new nE(this._pt, e, t, 0, 1, nb, null, a),
        _ = 0,
        g = 0;
      for (m.b = n, m.e = r, n += "", r += "", (h = ~r.indexOf("random(")) && (r = tT(r)), i && (i(p = [n, r], e, t), n = p[0], r = p[1]), l = n.match(eh) || []; s = eh.exec(r);) u = s[0], d = r.substring(_, s.index), c ? c = (c + 1) % 5 : "rgba(" === d.substr(-5) && (c = 1), u !== l[g++] && (f = parseFloat(l[g - 1]) || 0, m._pt = {
        _next: m._pt,
        p: d || 1 === g ? d : ",",
        s: f,
        c: "=" === u.charAt(1) ? eG(f, u) - f : parseFloat(u) - f,
        m: c && c < 4 ? Math.round : 0
      }, _ = eh.lastIndex);
      return m.c = _ < r.length ? r.substring(_, r.length) : "", m.fp = o, (ep.test(r) || h) && (m.e = 0), this._pt = m, m
    },
    nn = function(e, t, n, r, a, i, o, s, l, c) {
      J(r) && (r = r(a || 0, e, i));
      var u, d = e[t],
        f = "get" !== n ? n : J(d) ? l ? e[t.indexOf("set") || !J(e["get" + t.substr(3)]) ? t : "get" + t.substr(3)](l) : e[t]() : d,
        h = J(d) ? l ? nm : np : nh;
      if (Z(r) && (~r.indexOf("random(") && (r = tT(r)), "=" === r.charAt(1) && ((u = eG(f, r) + (t_(f) || 0)) || 0 === u) && (r = u)), !c || f !== r || ne) return isNaN(f * r) || "" === r ? (d || t in e || eb(t, r), nt.call(this, e, t, f, r, h, s || Y.stringFilter, l)) : (u = new nE(this._pt, e, t, +f || 0, r - (f || 0), "boolean" == typeof d ? ny : nv, 0, h), l && (u.fp = l), o && u.modifier(o, this, e), this._pt = u)
    },
    nr = function(e, t, n, r, a) {
      if (J(e) && (e = nc(e, a, t, n, r)), !en(e) || e.style && e.nodeType || es(e) || eo(e)) return Z(e) ? nc(e, a, t, n, r) : e;
      var i, o = {};
      for (i in e) o[i] = nc(e[i], a, t, n, r);
      return o
    },
    na = function(e, t, n, r, a, i) {
      var o, s, l, c;
      if (eR[e] && !1 !== (o = new eR[e]).init(a, o.rawVars ? t[e] : nr(t[e], r, a, i, n), n, r, i) && (n._pt = s = new nE(n._pt, a, e, 0, 1, o.render, o, 0, o.priority), n !== B))
        for (l = n._ptLookup[n._targets.indexOf(a)], c = o._props.length; c--;) l[o._props[c]] = s;
      return o
    },
    ni = function e(t, n, r) {
      var a, i, o, s, l, c, u, d, f, h, p, m, _, g = t.vars,
        v = g.ease,
        y = g.startAt,
        b = g.immediateRender,
        x = g.lazy,
        w = g.onUpdate,
        k = g.runBackwards,
        C = g.yoyoEase,
        S = g.keyframes,
        E = g.autoRevert,
        T = t._dur,
        N = t._startAt,
        A = t._targets,
        R = t.parent,
        I = R && "nested" === R.data ? R.vars.targets : A,
        O = "auto" === t._overwrite && !L,
        P = t.timeline,
        D = g.easeReverse || C;
      if (!P || S && v || (v = "none"), t._ease = tQ(v, W.ease), t._rEase = D && (tQ(D) || t._ease), t._from = !P && !!g.runBackwards, t._from && (t.ratio = 1), !P || S && !g.stagger) {
        if (m = (d = A[0] ? eM(A[0]).harness : 0) && g[d.prop], a = eQ(g, eT), N && (N._zTime < 0 && N.progress(1), n < 0 && k && b && !E ? N.render(-1, !0) : N.revert(k && T ? eS : eC), N._lazy = 0), y) {
          if (e2(t._startAt = nf.set(A, eK({
              data: "isStart",
              overwrite: !1,
              parent: R,
              immediateRender: !0,
              lazy: !N && er(x),
              startAt: null,
              delay: 0,
              onUpdate: w && function() {
                return tR(t, "onUpdate")
              },
              stagger: 0
            }, y))), t._startAt._dp = 0, t._startAt._sat = t, n < 0 && (j || !b && !E) && t._startAt.revert(eS), b && T && n <= 0 && r <= 0) {
            n && (t._zTime = n);
            return
          }
        } else if (k && T && !N)
          if (n && (b = !1), o = eK({
              overwrite: !1,
              data: "isFromStart",
              lazy: b && !N && er(x),
              immediateRender: b,
              stagger: 0,
              parent: R
            }, a), m && (o[d.prop] = m), e2(t._startAt = nf.set(A, o)), t._startAt._dp = 0, t._startAt._sat = t, n < 0 && (j ? t._startAt.revert(eS) : t._startAt.render(-1, !0)), t._zTime = n, b) {
            if (!n) return
          } else e(t._startAt, 1e-8, 1e-8);
        for (t._pt = t._ptCache = 0, x = T && er(x) || x && !T, i = 0; i < A.length; i++) {
          if (u = (l = A[i])._gsap || eP(A)[i]._gsap, t._ptLookup[i] = h = {}, eA[u.id] && eN.length && ez(), p = I === A ? i : I.indexOf(l), d && !1 !== (f = new d).init(l, m || a, t, p, I) && (t._pt = s = new nE(t._pt, l, f.name, 0, 1, f.render, f, 0, f.priority), f._props.forEach(function(e) {
              h[e] = s
            }), f.priority && (c = 1)), !d || m)
            for (o in a) eR[o] && (f = na(o, a, t, p, l, I)) ? f.priority && (c = 1) : h[o] = s = nn.call(t, l, o, "get", a[o], p, I, 0, g.stringFilter);
          t._op && t._op[i] && t.kill(l, t._op[i]), O && t._pt && (t9 = t, M.killTweensOf(l, h, t.globalTime(n)), _ = !t.parent, t9 = 0), t._pt && x && (eA[u.id] = 1)
        }
        c && nS(t), t._onInit && t._onInit(t)
      }
      t._onUpdate = w, t._initted = (!t._op || t._pt) && !_, S && n <= 0 && P.render(1e8, !0, !0)
    },
    no = function(e, t, n, r, a, i, o, s) {
      var l, c, u, d, f = (e._pt && e._ptCache || (e._ptCache = {}))[t];
      if (!f)
        for (f = e._ptCache[t] = [], u = e._ptLookup, d = e._targets.length; d--;) {
          if ((l = u[d][t]) && l.d && l.d._pt)
            for (l = l.d._pt; l && l.p !== t && l.fp !== t;) l = l._next;
          if (!l) return ne = 1, e.vars[t] = "+=0", ni(e, o), ne = 0, s ? ex(t + " not eligible for reset. Try splitting into individual properties") : 1;
          f.push(l)
        }
      for (d = f.length; d--;)(l = (c = f[d])._pt || c).s = (r || 0 === r) && !a ? r : l.s + (r || 0) + i * l.c, l.c = n - l.s, c.e && (c.e = eF(n) + t_(c.e)), c.b && (c.b = l.s + t_(c.b))
    },
    ns = function(e, t) {
      var n, r, a, i, o = e[0] ? eM(e[0]).harness : 0,
        s = o && o.aliases;
      if (!s) return t;
      for (r in n = eX({}, t), s)
        if (r in n)
          for (a = (i = s[r].split(",")).length; a--;) n[i[a]] = n[r];
      return n
    },
    nl = function(e, t, n, r) {
      var a, i, o = t.ease || r || "power1.inOut";
      if (es(t)) i = n[e] || (n[e] = []), t.forEach(function(e, n) {
        return i.push({
          t: n / (t.length - 1) * 100,
          v: e,
          e: o
        })
      });
      else
        for (a in t) i = n[a] || (n[a] = []), "ease" === a || i.push({
          t: parseFloat(e),
          v: t[a],
          e: o
        })
    },
    nc = function(e, t, n, r, a) {
      return J(e) ? e.call(t, n, r, a) : Z(e) && ~e.indexOf("random(") ? tT(e) : e
    },
    nu = ej + "repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,easeReverse,autoRevert",
    nd = {};
  eH(nu + ",id,stagger,delay,duration,paused,scrollTrigger", function(e) {
    return nd[e] = 1
  });
  var nf = function(e) {
    function t(t, n, r, a) {
      "number" == typeof n && (r.duration = n, n = r, r = null);
      var i, o, s, l, c, u, d, f, h = e.call(this, a ? n : eZ(n)) || this,
        p = h.vars,
        m = p.duration,
        g = p.delay,
        v = p.immediateRender,
        y = p.stagger,
        b = p.overwrite,
        x = p.keyframes,
        w = p.defaults,
        k = p.scrollTrigger,
        C = n.parent || M,
        S = (es(t) || eo(t) ? ee(t[0]) : "length" in n) ? [t] : ty(t);
      if (h._targets = S.length ? eP(S) : ex("GSAP target " + t + " not found. https://gsap.com", !Y.nullTargetWarn) || [], h._ptLookup = [], h._overwrite = b, x || y || ei(m) || ei(g)) {
        var E = (n = h.vars).easeReverse || n.yoyoEase;
        if ((i = h.timeline = new t4({
            data: "nested",
            defaults: w || {},
            targets: C && "nested" === C.data ? C.vars.targets : S
          })).kill(), i.parent = i._dp = _(h), i._start = 0, y || ei(m) || ei(g)) {
          if (l = S.length, d = y && tw(y), en(y))
            for (c in y) ~nu.indexOf(c) && (f || (f = {}), f[c] = y[c]);
          for (o = 0; o < l; o++)(s = eQ(n, nd)).stagger = 0, E && (s.easeReverse = E), f && eX(s, f), u = S[o], s.duration = +nc(m, _(h), o, u, S), s.delay = (+nc(g, _(h), o, u, S) || 0) - h._delay, !y && 1 === l && s.delay && (h._delay = g = s.delay, h._start += g, s.delay = 0), i.to(u, s, d ? d(o, u, S) : 0), i._ease = tY.none;
          i.duration() ? m = g = 0 : h.timeline = 0
        } else if (x) {
          eZ(eK(i.vars.defaults, {
            ease: "none"
          })), i._ease = tQ(x.ease || n.ease || "none");
          var T, N, A, R = 0;
          if (es(x)) x.forEach(function(e) {
            return i.to(S, e, ">")
          }), i.duration();
          else {
            for (c in s = {}, x) "ease" === c || "easeEach" === c || nl(c, x[c], s, x.easeEach);
            for (c in s)
              for (T = s[c].sort(function(e, t) {
                  return e.t - t.t
                }), R = 0, o = 0; o < T.length; o++)(A = {
                ease: (N = T[o]).e,
                duration: (N.t - (o ? T[o - 1].t : 0)) / 100 * m
              })[c] = N.v, i.to(S, A, R), R += A.duration;
            i.duration() < m && i.to({}, {
              duration: m - i.duration()
            })
          }
        }
        m || h.duration(m = i.duration())
      } else h.timeline = 0;
      return !0 !== b || L || (t9 = _(h), M.killTweensOf(S), t9 = 0), tn(C, _(h), r), n.reversed && h.reverse(), n.paused && h.paused(!0), (v || !m && !x && h._start === eU(C._time) && er(v) && function e(t) {
        return !t || t._ts && e(t.parent)
      }(_(h)) && "nested" !== C.data) && (h._tTime = -1e-8, h.render(Math.max(0, -g) || 0)), k && tr(_(h), k), h
    }
    g(t, e);
    var n = t.prototype;
    return n.render = function(e, t, n) {
      var r, a, i, o, s, l, c, u, d = this._time,
        f = this._tDur,
        h = this._dur,
        p = e < 0,
        m = e > f - 1e-8 && !p ? f : e < 1e-8 ? 0 : e;
      if (h) {
        if (m !== this._tTime || !e || n || !this._initted && this._tTime || this._startAt && this._zTime < 0 !== p || this._lazy) {
          if (r = m, u = this.timeline, this._repeat) {
            if (o = h + this._rDelay, this._repeat < -1 && p) return this.totalTime(100 * o + e, t, n);
            if (r = eU(m % o), m === f ? (i = this._repeat, r = h) : (i = ~~(s = eU(m / o))) && i === s ? (r = h, i--) : r > h && (r = h), (l = this._yoyo && 1 & i) && (r = h - r), s = e8(this._tTime, o), r === d && !n && this._initted && i === s) return this._tTime = m, this;
            i !== s && this.vars.repeatRefresh && !l && !this._lock && r !== o && this._initted && (this._lock = n = 1, this.render(eU(o * i), !0).invalidate()._lock = 0)
          }
          if (!this._initted) {
            if (ta(this, p ? e : r, n, t, m)) return this._tTime = 0, this;
            if (d !== this._time && !(n && this.vars.repeatRefresh && i !== s)) return this;
            if (h !== this._dur) return this.render(e, t, n)
          }
          if (this._rEase) {
            var _ = r < d;
            if (_ !== this._inv) {
              var g = _ ? d : h - d;
              this._inv = _, this._from && (this.ratio = 1 - this.ratio), this._invRatio = this.ratio, this._invTime = d, this._invRecip = g ? (_ ? -1 : 1) / g : 0, this._invScale = _ ? -this.ratio : 1 - this.ratio, this._invEase = _ ? this._rEase : this._ease
            }
            this.ratio = c = this._invRatio + this._invScale * this._invEase((r - this._invTime) * this._invRecip)
          } else this.ratio = c = this._ease(r / h);
          if (this._from && (this.ratio = c = 1 - c), this._tTime = m, this._time = r, !this._act && this._ts && (this._act = 1, this._lazy = 0), !d && m && !t && !s && (tR(this, "onStart"), this._tTime !== m)) return this;
          for (a = this._pt; a;) a.r(c, a.d), a = a._next;
          u && u.render(e < 0 ? e : u._dur * u._ease(r / this._dur), t, n) || this._startAt && (this._zTime = e), this._onUpdate && !t && (p && e5(this, e, t, n), tR(this, "onUpdate")), this._repeat && i !== s && this.vars.onRepeat && !t && this.parent && tR(this, "onRepeat"), (m === this._tDur || !m) && this._tTime === m && (p && !this._onUpdate && e5(this, e, !0, !0), (e || !h) && (m === this._tDur && this._ts > 0 || !m && this._ts < 0) && e2(this, 1), !t && !(p && !d) && (m || d || l) && (tR(this, m === f ? "onComplete" : "onReverseComplete", !0), this._prom && !(m < f && this.timeScale() > 0) && this._prom()))
        }
      } else ts(this, e, t, n);
      return this
    }, n.targets = function() {
      return this._targets
    }, n.invalidate = function(t) {
      return t && this.vars.runBackwards || (this._startAt = 0), this._pt = this._op = this._onUpdate = this._lazy = this.ratio = 0, this._ptLookup = [], this.timeline && this.timeline.invalidate(t), e.prototype.invalidate.call(this, t)
    }, n.resetTo = function(e, t, n, r, a) {
      z || tB.wake(), this._ts || this.play();
      var i = Math.min(this._dur, (this._dp._time - this._start) * this._ts);
      return (this._initted || ni(this, i), no(this, e, t, n, r, this._ease(i / this._dur), i, a)) ? this.resetTo(e, t, n, r, 1) : (te(this, 0), this.parent || e0(this._dp, this, "_first", "_last", this._dp._sort ? "_start" : 0), this.render(0))
    }, n.kill = function(e, t) {
      if (void 0 === t && (t = "all"), !e && (!t || "all" === t)) return this._lazy = this._pt = 0, this.parent ? tI(this) : this.scrollTrigger && this.scrollTrigger.kill(!!j), this;
      if (this.timeline) {
        var n = this.timeline.totalDuration();
        return this.timeline.killTweensOf(e, t, t9 && !0 !== t9.vars.overwrite)._first || tI(this), this.parent && n !== this.timeline.totalDuration() && tc(this, this._dur * this.timeline._tDur / n, 0, 1), this
      }
      var r, a, i, o, s, l, c, u = this._targets,
        d = e ? ty(e) : u,
        f = this._ptLookup,
        h = this._pt;
      if ((!t || "all" === t) && eJ(u, d)) return "all" === t && (this._pt = 0), tI(this);
      for (r = this._op = this._op || [], "all" !== t && (Z(t) && (s = {}, eH(t, function(e) {
          return s[e] = 1
        }), t = s), t = ns(u, t)), c = u.length; c--;)
        if (~d.indexOf(u[c]))
          for (s in a = f[c], "all" === t ? (r[c] = t, o = a, i = {}) : (i = r[c] = r[c] || {}, o = t), o)(l = a && a[s]) && ("kill" in l.d && !0 !== l.d.kill(s) || e1(this, l, "_pt"), delete a[s]), "all" !== i && (i[s] = 1);
      return this._initted && !this._pt && h && tI(this), this
    }, t.to = function(e, n) {
      return new t(e, n, arguments[2])
    }, t.from = function(e, t) {
      return th(1, arguments)
    }, t.delayedCall = function(e, n, r, a) {
      return new t(n, 0, {
        immediateRender: !1,
        lazy: !1,
        overwrite: !1,
        delay: e,
        onComplete: n,
        onReverseComplete: n,
        onCompleteParams: r,
        onReverseCompleteParams: r,
        callbackScope: a
      })
    }, t.fromTo = function(e, t, n) {
      return th(2, arguments)
    }, t.set = function(e, n) {
      return n.duration = 0, n.repeatDelay || (n.repeat = 0), new t(e, n)
    }, t.killTweensOf = function(e, t, n) {
      return M.killTweensOf(e, t, n)
    }, t
  }(t3);
  eK(nf.prototype, {
    _targets: [],
    _lazy: 0,
    _startAt: 0,
    _op: 0,
    _onInit: 0
  }), eH("staggerTo,staggerFrom,staggerFromTo", function(e) {
    nf[e] = function() {
      var t = new t4,
        n = tg.call(arguments, 0);
      return n.splice("staggerFromTo" === e ? 5 : 4, 0, 0), t[e].apply(t, n)
    }
  });
  var nh = function(e, t, n) {
      return e[t] = n
    },
    np = function(e, t, n) {
      return e[t](n)
    },
    nm = function(e, t, n, r) {
      return e[t](r.fp, n)
    },
    n_ = function(e, t, n) {
      return e.setAttribute(t, n)
    },
    ng = function(e, t) {
      return J(e[t]) ? np : et(e[t]) && e.setAttribute ? n_ : nh
    },
    nv = function(e, t) {
      return t.set(t.t, t.p, Math.round((t.s + t.c * e) * 1e6) / 1e6, t)
    },
    ny = function(e, t) {
      return t.set(t.t, t.p, !!(t.s + t.c * e), t)
    },
    nb = function(e, t) {
      var n = t._pt,
        r = "";
      if (!e && t.b) r = t.b;
      else if (1 === e && t.e) r = t.e;
      else {
        for (; n;) r = n.p + (n.m ? n.m(n.s + n.c * e) : Math.round((n.s + n.c * e) * 1e4) / 1e4) + r, n = n._next;
        r += t.c
      }
      t.set(t.t, t.p, r, t)
    },
    nx = function(e, t) {
      for (var n = t._pt; n;) n.r(e, n.d), n = n._next
    },
    nw = function(e, t, n, r) {
      for (var a, i = this._pt; i;) a = i._next, i.p === r && i.modifier(e, t, n), i = a
    },
    nk = function(e) {
      for (var t, n, r = this._pt; r;) n = r._next, (r.p !== e || r.op) && r.op !== e ? r.dep || (t = 1) : e1(this, r, "_pt"), r = n;
      return !t
    },
    nC = function(e, t, n, r) {
      r.mSet(e, t, r.m.call(r.tween, n, r.mt), r)
    },
    nS = function(e) {
      for (var t, n, r, a, i = e._pt; i;) {
        for (t = i._next, n = r; n && n.pr > i.pr;) n = n._next;
        (i._prev = n ? n._prev : a) ? i._prev._next = i: r = i, (i._next = n) ? n._prev = i : a = i, i = t
      }
      e._pt = r
    },
    nE = function() {
      function e(e, t, n, r, a, i, o, s, l) {
        this.t = t, this.s = r, this.c = a, this.p = n, this.r = i || nv, this.d = o || this, this.set = s || nh, this.pr = l || 0, this._next = e, e && (e._prev = this)
      }
      return e.prototype.modifier = function(e, t, n) {
        this.mSet = this.mSet || this.set, this.set = nC, this.m = e, this.mt = n, this.tween = t
      }, e
    }();
  eH(ej + "parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger,easeReverse", function(e) {
    return eT[e] = 1
  }), eg.TweenMax = eg.TweenLite = nf, eg.TimelineLite = eg.TimelineMax = t4, M = new t4({
    sortChildren: !1,
    defaults: W,
    autoRemoveChildren: !0,
    id: "root",
    smoothChildTiming: !0
  }), Y.stringFilter = tG;
  var nT = [],
    nN = {},
    nA = [],
    nR = 0,
    nI = 0,
    nO = function(e) {
      return (nN[e] || nA).map(function(e) {
        return e()
      })
    },
    nL = function() {
      var e = Date.now(),
        t = [];
      e - nR > 2 && (nO("matchMediaInit"), nT.forEach(function(e) {
        var n, r, a, i, o = e.queries,
          s = e.conditions;
        for (r in o)(n = D.matchMedia(o[r]).matches) && (a = 1), n !== s[r] && (s[r] = n, i = 1);
        i && (e.revert(), a && t.push(e))
      }), nO("matchMediaRevert"), t.forEach(function(e) {
        return e.onMatch(e, function(t) {
          return e.add(null, t)
        })
      }), nR = e, nO("matchMedia"))
    },
    nj = function() {
      function e(e, t) {
        this.selector = t && tb(t), this.data = [], this._r = [], this.isReverted = !1, this.id = nI++, e && this.add(e)
      }
      var t = e.prototype;
      return t.add = function(e, t, n) {
        J(e) && (n = t, t = e, e = J);
        var r = this,
          a = function() {
            var e, a = P,
              i = r.selector;
            return a && a !== r && a.data.push(r), n && (r.selector = tb(n)), P = r, e = t.apply(r, arguments), J(e) && r._r.push(e), P = a, r.selector = i, r.isReverted = !1, e
          };
        return r.last = a, e === J ? a(r, function(e) {
          return r.add(null, e)
        }) : e ? r[e] = a : a
      }, t.ignore = function(e) {
        var t = P;
        P = null, e(this), P = t
      }, t.getTweens = function() {
        var t = [];
        return this.data.forEach(function(n) {
          return n instanceof e ? t.push.apply(t, n.getTweens()) : n instanceof nf && !(n.parent && "nested" === n.parent.data) && t.push(n)
        }), t
      }, t.clear = function() {
        this._r.length = this.data.length = 0
      }, t.kill = function(e, t) {
        var n = this;
        if (e) {
          for (var r, a = n.getTweens(), i = n.data.length; i--;) "isFlip" === (r = n.data[i]).data && (r.revert(), r.getChildren(!0, !0, !1).forEach(function(e) {
            return a.splice(a.indexOf(e), 1)
          }));
          for (a.map(function(e) {
              return {
                g: e._dur || e._delay || e._sat && !e._sat.vars.immediateRender ? e.globalTime(0) : -1 / 0,
                t: e
              }
            }).sort(function(e, t) {
              return t.g - e.g || -1 / 0
            }).forEach(function(t) {
              return t.t.revert(e)
            }), i = n.data.length; i--;)(r = n.data[i]) instanceof t4 ? "nested" !== r.data && (r.scrollTrigger && r.scrollTrigger.revert(), r.kill()) : r instanceof nf || !r.revert || r.revert(e);
          n._r.forEach(function(t) {
            return t(e, n)
          }), n.isReverted = !0
        } else this.data.forEach(function(e) {
          return e.kill && e.kill()
        });
        if (this.clear(), t)
          for (var o = nT.length; o--;) nT[o].id === this.id && nT.splice(o, 1)
      }, t.revert = function(e) {
        this.kill(e || {})
      }, e
    }(),
    nP = function() {
      function e(e) {
        this.contexts = [], this.scope = e, P && P.data.push(this)
      }
      var t = e.prototype;
      return t.add = function(e, t, n) {
        en(e) || (e = {
          matches: e
        });
        var r, a, i, o = new nj(0, n || this.scope),
          s = o.conditions = {};
        for (a in P && !o.selector && (o.selector = P.selector), this.contexts.push(o), t = o.add("onMatch", t), o.queries = e, e) "all" === a ? i = 1 : (r = D.matchMedia(e[a])) && (0 > nT.indexOf(o) && nT.push(o), (s[a] = r.matches) && (i = 1), r.addListener ? r.addListener(nL) : r.addEventListener("change", nL));
        return i && t(o, function(e) {
          return o.add(null, e)
        }), this
      }, t.revert = function(e) {
        this.kill(e || {})
      }, t.kill = function(e) {
        this.contexts.forEach(function(t) {
          return t.kill(e, !0)
        })
      }, e
    }(),
    nM = {
      registerPlugin: function() {
        for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
        t.forEach(function(e) {
          return tL(e)
        })
      },
      timeline: function(e) {
        return new t4(e)
      },
      getTweensOf: function(e, t) {
        return M.getTweensOf(e, t)
      },
      getProperty: function(e, t, n, r) {
        Z(e) && (e = ty(e)[0]);
        var a = eM(e || {}).get,
          i = n ? eV : eq;
        return "native" === n && (n = ""), e ? t ? i((eR[t] && eR[t].get || a)(e, t, n, r)) : function(t, n, r) {
          return i((eR[t] && eR[t].get || a)(e, t, n, r))
        } : e
      },
      quickSetter: function(e, t, n) {
        if ((e = ty(e)).length > 1) {
          var r = e.map(function(e) {
              return nU.quickSetter(e, t, n)
            }),
            a = r.length;
          return function(e) {
            for (var t = a; t--;) r[t](e)
          }
        }
        e = e[0] || {};
        var i = eR[t],
          o = eM(e),
          s = o.harness && (o.harness.aliases || {})[t] || t,
          l = i ? function(t) {
            var r = new i;
            B._pt = 0, r.init(e, n ? t + n : t, B, 0, [e]), r.render(1, r), B._pt && nx(1, B)
          } : o.set(e, s);
        return i ? l : function(t) {
          return l(e, s, n ? t + n : t, o, 1)
        }
      },
      quickTo: function(e, t, n) {
        var r, a = nU.to(e, eK(((r = {})[t] = "+=0.1", r.paused = !0, r.stagger = 0, r), n || {})),
          i = function(e, n, r) {
            return a.resetTo(t, e, n, r)
          };
        return i.tween = a, i
      },
      isTweening: function(e) {
        return M.getTweensOf(e, !0).length > 0
      },
      defaults: function(e) {
        return e && e.ease && (e.ease = tQ(e.ease, W.ease)), e$(W, e || {})
      },
      config: function(e) {
        return e$(Y, e || {})
      },
      registerEffect: function(e) {
        var t = e.name,
          n = e.effect,
          r = e.plugins,
          a = e.defaults,
          i = e.extendTimeline;
        (r || "").split(",").forEach(function(e) {
          return e && !eR[e] && !eg[e] && ex(t + " effect requires " + e + " plugin.")
        }), eI[t] = function(e, t, r) {
          return n(ty(e), eK(t || {}, a), r)
        }, i && (t4.prototype[t] = function(e, n, r) {
          return this.add(eI[t](e, en(n) ? n : (r = n) && {}, this), r)
        })
      },
      registerEase: function(e, t) {
        tY[e] = tQ(t)
      },
      parseEase: function(e, t) {
        return arguments.length ? tQ(e, t) : tY
      },
      getById: function(e) {
        return M.getById(e)
      },
      exportRoot: function(e, t) {
        void 0 === e && (e = {});
        var n, r, a = new t4(e);
        for (a.smoothChildTiming = er(e.smoothChildTiming), M.remove(a), a._dp = 0, a._time = a._tTime = M._time, n = M._first; n;) r = n._next, (t || !(!n._dur && n instanceof nf && n.vars.onComplete === n._targets[0])) && tn(a, n, n._start - n._delay), n = r;
        return tn(M, a, 0), a
      },
      context: function(e, t) {
        return e ? new nj(e, t) : P
      },
      matchMedia: function(e) {
        return new nP(e)
      },
      matchMediaRefresh: function() {
        return nT.forEach(function(e) {
          var t, n, r = e.conditions;
          for (n in r) r[n] && (r[n] = !1, t = 1);
          t && e.revert()
        }) || nL()
      },
      addEventListener: function(e, t) {
        var n = nN[e] || (nN[e] = []);
        ~n.indexOf(t) || n.push(t)
      },
      removeEventListener: function(e, t) {
        var n = nN[e],
          r = n && n.indexOf(t);
        r >= 0 && n.splice(r, 1)
      },
      utils: {
        wrap: function e(t, n, r) {
          var a = n - t;
          return es(t) ? tE(t, e(0, t.length), n) : tp(r, function(e) {
            return (a + (e - t) % a) % a + t
          })
        },
        wrapYoyo: function e(t, n, r) {
          var a = n - t,
            i = 2 * a;
          return es(t) ? tE(t, e(0, t.length - 1), n) : tp(r, function(e) {
            return e = (i + (e - t) % i) % i || 0, t + (e > a ? i - e : e)
          })
        },
        distribute: tw,
        random: tS,
        snap: tC,
        normalize: function(e, t, n) {
          return tN(e, t, 0, 1, n)
        },
        getUnit: t_,
        clamp: function(e, t, n) {
          return tp(n, function(n) {
            return tm(e, t, n)
          })
        },
        splitColor: tM,
        toArray: ty,
        selector: tb,
        mapRange: tN,
        pipe: function() {
          for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
          return function(e) {
            return t.reduce(function(e, t) {
              return t(e)
            }, e)
          }
        },
        unitize: function(e, t) {
          return function(n) {
            return e(parseFloat(n)) + (t || t_(n))
          }
        },
        interpolate: function e(t, n, r, a) {
          var i = isNaN(t + n) ? 0 : function(e) {
            return (1 - e) * t + e * n
          };
          if (!i) {
            var o, s, l, c, u, d = Z(t),
              f = {};
            if (!0 === r && (a = 1) && (r = null), d) t = {
              p: t
            }, n = {
              p: n
            };
            else if (es(t) && !es(n)) {
              for (l = [], u = (c = t.length) - 2, s = 1; s < c; s++) l.push(e(t[s - 1], t[s]));
              c--, i = function(e) {
                var t = Math.min(u, ~~(e *= c));
                return l[t](e - t)
              }, r = n
            } else a || (t = eX(es(t) ? [] : {}, t));
            if (!l) {
              for (o in n) nn.call(f, t, o, "get", n[o]);
              i = function(e) {
                return nx(e, f) || (d ? t.p : t)
              }
            }
          }
          return tp(r, i)
        },
        shuffle: tx
      },
      install: ey,
      effects: eI,
      ticker: tB,
      updateRoot: t4.updateRoot,
      plugins: eR,
      globalTimeline: M,
      core: {
        PropTween: nE,
        globals: ew,
        Tween: nf,
        Timeline: t4,
        Animation: t3,
        getCache: eM,
        _removeLinkedListItem: e1,
        reverting: function() {
          return j
        },
        context: function(e) {
          return e && P && (P.data.push(e), e._ctx = P), P
        },
        suppressOverwrites: function(e) {
          return L = e
        }
      }
    };
  eH("to,from,fromTo,delayedCall,set,killTweensOf", function(e) {
    return nM[e] = nf[e]
  }), tB.add(t4.updateRoot), B = nM.to({}, {
    duration: 0
  });
  var nD = function(e, t) {
      for (var n = e._pt; n && n.p !== t && n.op !== t && n.fp !== t;) n = n._next;
      return n
    },
    nH = function(e, t) {
      var n, r, a, i = e._targets;
      for (n in t)
        for (r = i.length; r--;)(a = e._ptLookup[r][n]) && (a = a.d) && (a._pt && (a = nD(a, n)), a && a.modifier && a.modifier(t[n], e, i[r], n))
    },
    nF = function(e, t) {
      return {
        name: e,
        headless: 1,
        rawVars: 1,
        init: function(e, n, r) {
          r._onInit = function(e) {
            var r, a;
            if (Z(n) && (r = {}, eH(n, function(e) {
                return r[e] = 1
              }), n = r), t) {
              for (a in r = {}, n) r[a] = t(n[a]);
              n = r
            }
            nH(e, n)
          }
        }
      }
    },
    nU = nM.registerPlugin({
      name: "attr",
      init: function(e, t, n, r, a) {
        var i, o, s;
        for (i in this.tween = n, t) s = e.getAttribute(i) || "", (o = this.add(e, "setAttribute", (s || 0) + "", t[i], r, a, 0, 0, i)).op = i, o.b = s, this._props.push(i)
      },
      render: function(e, t) {
        for (var n = t._pt; n;) j ? n.set(n.t, n.p, n.b, n) : n.r(e, n.d), n = n._next
      }
    }, {
      name: "endArray",
      headless: 1,
      init: function(e, t) {
        for (var n = t.length; n--;) this.add(e, n, e[n] || 0, t[n], 0, 0, 0, 0, 0, 1)
      }
    }, nF("roundProps", tk), nF("modifiers"), nF("snap", tC)) || nM;
  nf.version = t4.version = nU.version = "3.15.0", U = 1, ea() && tz(), tY.Power0, tY.Power1, tY.Power2, tY.Power3, tY.Power4, tY.Linear, tY.Quad, tY.Cubic, tY.Quart, tY.Quint, tY.Strong, tY.Elastic, tY.Back, tY.SteppedEase, tY.Bounce, tY.Sine, tY.Expo, tY.Circ;
  var nG, nB, nz, nY, nW, nq, nV, nK = {},
    nX = 180 / Math.PI,
    n$ = Math.PI / 180,
    nQ = Math.atan2,
    nZ = /([A-Z])/g,
    nJ = /(left|right|width|margin|padding|x)/i,
    n0 = /[\s,\(]\S/,
    n1 = {
      autoAlpha: "opacity,visibility",
      scale: "scaleX,scaleY",
      alpha: "opacity"
    },
    n2 = function(e, t) {
      return t.set(t.t, t.p, Math.round((t.s + t.c * e) * 1e4) / 1e4 + t.u, t)
    },
    n3 = function(e, t) {
      return t.set(t.t, t.p, 1 === e ? t.e : Math.round((t.s + t.c * e) * 1e4) / 1e4 + t.u, t)
    },
    n4 = function(e, t) {
      return t.set(t.t, t.p, e ? Math.round((t.s + t.c * e) * 1e4) / 1e4 + t.u : t.b, t)
    },
    n5 = function(e, t) {
      return t.set(t.t, t.p, 1 === e ? t.e : e ? Math.round((t.s + t.c * e) * 1e4) / 1e4 + t.u : t.b, t)
    },
    n6 = function(e, t) {
      var n = t.s + t.c * e;
      t.set(t.t, t.p, ~~(n + (n < 0 ? -.5 : .5)) + t.u, t)
    },
    n8 = function(e, t) {
      return t.set(t.t, t.p, e ? t.e : t.b, t)
    },
    n7 = function(e, t) {
      return t.set(t.t, t.p, 1 !== e ? t.b : t.e, t)
    },
    n9 = function(e, t, n) {
      return e.style[t] = n
    },
    re = function(e, t, n) {
      return e.style.setProperty(t, n)
    },
    rt = function(e, t, n) {
      return e._gsap[t] = n
    },
    rn = function(e, t, n) {
      return e._gsap.scaleX = e._gsap.scaleY = n
    },
    rr = function(e, t, n, r, a) {
      var i = e._gsap;
      i.scaleX = i.scaleY = n, i.renderTransform(a, i)
    },
    ra = function(e, t, n, r, a) {
      var i = e._gsap;
      i[t] = n, i.renderTransform(a, i)
    },
    ri = "transform",
    ro = ri + "Origin",
    rs = function e(t, n) {
      var r = this,
        a = this.target,
        i = a.style,
        o = a._gsap;
      if (t in nK && i) {
        if (this.tfm = this.tfm || {}, "transform" === t) return n1.transform.split(",").forEach(function(t) {
          return e.call(r, t, n)
        });
        if (~(t = n1[t] || t).indexOf(",") ? t.split(",").forEach(function(e) {
            return r.tfm[e] = rS(a, e)
          }) : this.tfm[t] = o.x ? o[t] : rS(a, t), t === ro && (this.tfm.zOrigin = o.zOrigin), this.props.indexOf(ri) >= 0) return;
        o.svg && (this.svgo = a.getAttribute("data-svg-origin"), this.props.push(ro, n, "")), t = ri
      }(i || n) && this.props.push(t, n, i[t])
    },
    rl = function(e) {
      e.translate && (e.removeProperty("translate"), e.removeProperty("scale"), e.removeProperty("rotate"))
    },
    rc = function() {
      var e, t, n = this.props,
        r = this.target,
        a = r.style,
        i = r._gsap;
      for (e = 0; e < n.length; e += 3) n[e + 1] ? 2 === n[e + 1] ? r[n[e]](n[e + 2]) : r[n[e]] = n[e + 2] : n[e + 2] ? a[n[e]] = n[e + 2] : a.removeProperty("--" === n[e].substr(0, 2) ? n[e] : n[e].replace(nZ, "-$1").toLowerCase());
      if (this.tfm) {
        for (t in this.tfm) i[t] = this.tfm[t];
        i.svg && (i.renderTransform(), r.setAttribute("data-svg-origin", this.svgo || "")), (e = nq()) && e.isStart || a[ri] || (rl(a), i.zOrigin && a[ro] && (a[ro] += " " + i.zOrigin + "px", i.zOrigin = 0, i.renderTransform()), i.uncache = 1)
      }
    },
    ru = function(e, t) {
      var n = {
        target: e,
        props: [],
        revert: rc,
        save: rs
      };
      return e._gsap || nU.core.getCache(e), t && e.style && e.nodeType && t.split(",").forEach(function(e) {
        return n.save(e)
      }), n
    },
    rd = function(e, t) {
      var n = nG.createElementNS ? nG.createElementNS((t || "http://www.w3.org/1999/xhtml").replace(/^https/, "http"), e) : nG.createElement(e);
      return n && n.style ? n : nG.createElement(e)
    },
    rf = function e(t, n, r) {
      var a = getComputedStyle(t);
      return a[n] || a.getPropertyValue(n.replace(nZ, "-$1").toLowerCase()) || a.getPropertyValue(n) || !r && e(t, rp(n) || n, 1) || ""
    },
    rh = "O,Moz,ms,Ms,Webkit".split(","),
    rp = function(e, t, n) {
      var r = (t || nY).style,
        a = 5;
      if (e in r && !n) return e;
      for (e = e.charAt(0).toUpperCase() + e.substr(1); a-- && !(rh[a] + e in r););
      return a < 0 ? null : (3 === a ? "ms" : a >= 0 ? rh[a] : "") + e
    },
    rm = function() {
      "u" > typeof window && window.document && (nB = (nG = window.document).documentElement, nY = rd("div") || {
        style: {}
      }, rd("div"), ro = (ri = rp(ri)) + "Origin", nY.style.cssText = "border-width:0;line-height:0;position:absolute;padding:0", nV = !!rp("perspective"), nq = nU.core.reverting, nz = 1)
    },
    r_ = function(e) {
      var t, n = e.ownerSVGElement,
        r = rd("svg", n && n.getAttribute("xmlns") || "http://www.w3.org/2000/svg"),
        a = e.cloneNode(!0);
      a.style.display = "block", r.appendChild(a), nB.appendChild(r);
      try {
        t = a.getBBox()
      } catch (e) {}
      return r.removeChild(a), nB.removeChild(r), t
    },
    rg = function(e, t) {
      for (var n = t.length; n--;)
        if (e.hasAttribute(t[n])) return e.getAttribute(t[n])
    },
    rv = function(e) {
      var t, n;
      try {
        t = e.getBBox()
      } catch (r) {
        t = r_(e), n = 1
      }
      return t && (t.width || t.height) || n || (t = r_(e)), !t || t.width || t.x || t.y ? t : {
        x: +rg(e, ["x", "cx", "x1"]) || 0,
        y: +rg(e, ["y", "cy", "y1"]) || 0,
        width: 0,
        height: 0
      }
    },
    ry = function(e) {
      return !!(e.getCTM && (!e.parentNode || e.ownerSVGElement) && rv(e))
    },
    rb = function(e, t) {
      if (t) {
        var n, r = e.style;
        t in nK && t !== ro && (t = ri), r.removeProperty ? (("ms" === (n = t.substr(0, 2)) || "webkit" === t.substr(0, 6)) && (t = "-" + t), r.removeProperty("--" === n ? t : t.replace(nZ, "-$1").toLowerCase())) : r.removeAttribute(t)
      }
    },
    rx = function(e, t, n, r, a, i) {
      var o = new nE(e._pt, t, n, 0, 1, i ? n7 : n8);
      return e._pt = o, o.b = r, o.e = a, e._props.push(n), o
    },
    rw = {
      deg: 1,
      rad: 1,
      turn: 1
    },
    rk = {
      grid: 1,
      flex: 1
    },
    rC = function e(t, n, r, a) {
      var i, o, s, l, c = parseFloat(r) || 0,
        u = (r + "").trim().substr((c + "").length) || "px",
        d = nY.style,
        f = nJ.test(n),
        h = "svg" === t.tagName.toLowerCase(),
        p = (h ? "client" : "offset") + (f ? "Width" : "Height"),
        m = "px" === a,
        _ = "%" === a;
      if (a === u || !c || rw[a] || rw[u]) return c;
      if ("px" === u || m || (c = e(t, n, r, "px")), l = t.getCTM && ry(t), (_ || "%" === u) && (nK[n] || ~n.indexOf("adius"))) return i = l ? t.getBBox()[f ? "width" : "height"] : t[p], eF(_ ? c / i * 100 : c / 100 * i);
      if (d[f ? "width" : "height"] = 100 + (m ? u : a), o = "rem" !== a && ~n.indexOf("adius") || "em" === a && t.appendChild && !h ? t : t.parentNode, l && (o = (t.ownerSVGElement || {}).parentNode), o && o !== nG && o.appendChild || (o = nG.body), (s = o._gsap) && _ && s.width && f && s.time === tB.time && !s.uncache) return eF(c / s.width * 100);
      if (_ && ("height" === n || "width" === n)) {
        var g = t.style[n];
        t.style[n] = 100 + a, i = t[p], g ? t.style[n] = g : rb(t, n)
      } else(_ || "%" === u) && !rk[rf(o, "display")] && (d.position = rf(t, "position")), o === t && (d.position = "static"), o.appendChild(nY), i = nY[p], o.removeChild(nY), d.position = "absolute";
      return f && _ && ((s = eM(o)).time = tB.time, s.width = o[p]), eF(m ? i * c / 100 : i && c ? 100 / i * c : 0)
    },
    rS = function(e, t, n, r) {
      var a;
      return nz || rm(), t in n1 && "transform" !== t && ~(t = n1[t]).indexOf(",") && (t = t.split(",")[0]), nK[t] && "transform" !== t ? (a = rD(e, r), a = "transformOrigin" !== t ? a[t] : a.svg ? a.origin : rH(rf(e, ro)) + " " + a.zOrigin + "px") : (!(a = e.style[t]) || "auto" === a || r || ~(a + "").indexOf("calc(")) && (a = rR[t] && rR[t](e, t, n) || rf(e, t) || eD(e, t) || +("opacity" === t)), n && !~(a + "").trim().indexOf(" ") ? rC(e, t, a, n) + n : a
    },
    rE = function(e, t, n, r) {
      if (!n || "none" === n) {
        var a = rp(t, e, 1),
          i = a && rf(e, a, 1);
        i && i !== n ? (t = a, n = i) : "borderColor" === t && (n = rf(e, "borderTopColor"))
      }
      var o, s, l, c, u, d, f, h, p, m, _, g = new nE(this._pt, e.style, t, 0, 1, nb),
        v = 0,
        y = 0;
      if (g.b = n, g.e = r, n += "", "var(--" === (r += "").substring(0, 6) && (r = rf(e, r.substring(4, r.indexOf(")")))), "auto" === r && (d = e.style[t], e.style[t] = r, r = rf(e, t) || r, d ? e.style[t] = d : rb(e, t)), tG(o = [n, r]), n = o[0], r = o[1], l = n.match(ef) || [], (r.match(ef) || []).length) {
        for (; s = ef.exec(r);) f = s[0], p = r.substring(v, s.index), u ? u = (u + 1) % 5 : ("rgba(" === p.substr(-5) || "hsla(" === p.substr(-5)) && (u = 1), f !== (d = l[y++] || "") && (c = parseFloat(d) || 0, _ = d.substr((c + "").length), "=" === f.charAt(1) && (f = eG(c, f) + _), h = parseFloat(f), m = f.substr((h + "").length), v = ef.lastIndex - m.length, m || (m = m || Y.units[t] || _, v === r.length && (r += m, g.e += m)), _ !== m && (c = rC(e, t, d, m) || 0), g._pt = {
          _next: g._pt,
          p: p || 1 === y ? p : ",",
          s: c,
          c: h - c,
          m: u && u < 4 || "zIndex" === t ? Math.round : 0
        });
        g.c = v < r.length ? r.substring(v, r.length) : ""
      } else g.r = "display" === t && "none" === r ? n7 : n8;
      return ep.test(r) && (g.e = 0), this._pt = g, g
    },
    rT = {
      top: "0%",
      bottom: "100%",
      left: "0%",
      right: "100%",
      center: "50%"
    },
    rN = function(e) {
      var t = e.split(" "),
        n = t[0],
        r = t[1] || "50%";
      return ("top" === n || "bottom" === n || "left" === r || "right" === r) && (e = n, n = r, r = e), t[0] = rT[n] || n, t[1] = rT[r] || r, t.join(" ")
    },
    rA = function(e, t) {
      if (t.tween && t.tween._time === t.tween._dur) {
        var n, r, a, i = t.t,
          o = i.style,
          s = t.u,
          l = i._gsap;
        if ("all" === s || !0 === s) o.cssText = "", r = 1;
        else
          for (a = (s = s.split(",")).length; --a > -1;) nK[n = s[a]] && (r = 1, n = "transformOrigin" === n ? ro : ri), rb(i, n);
        r && (rb(i, ri), l && (l.svg && i.removeAttribute("transform"), o.scale = o.rotate = o.translate = "none", rD(i, 1), l.uncache = 1, rl(o)))
      }
    },
    rR = {
      clearProps: function(e, t, n, r, a) {
        if ("isFromStart" !== a.data) {
          var i = e._pt = new nE(e._pt, t, n, 0, 0, rA);
          return i.u = r, i.pr = -10, i.tween = a, e._props.push(n), 1
        }
      }
    },
    rI = [1, 0, 0, 1, 0, 0],
    rO = {},
    rL = function(e) {
      return "matrix(1, 0, 0, 1, 0, 0)" === e || "none" === e || !e
    },
    rj = function(e) {
      var t = rf(e, ri);
      return rL(t) ? rI : t.substr(7).match(ed).map(eF)
    },
    rP = function(e, t) {
      var n, r, a, i, o = e._gsap || eM(e),
        s = e.style,
        l = rj(e);
      return o.svg && e.getAttribute("transform") ? "1,0,0,1,0,0" === (l = [(a = e.transform.baseVal.consolidate().matrix).a, a.b, a.c, a.d, a.e, a.f]).join(",") ? rI : l : (l !== rI || e.offsetParent || e === nB || o.svg || (a = s.display, s.display = "block", (n = e.parentNode) && (e.offsetParent || e.getBoundingClientRect().width) || (i = 1, r = e.nextElementSibling, nB.appendChild(e)), l = rj(e), a ? s.display = a : rb(e, "display"), i && (r ? n.insertBefore(e, r) : n ? n.appendChild(e) : nB.removeChild(e))), t && l.length > 6 ? [l[0], l[1], l[4], l[5], l[12], l[13]] : l)
    },
    rM = function(e, t, n, r, a, i) {
      var o, s, l, c, u = e._gsap,
        d = a || rP(e, !0),
        f = u.xOrigin || 0,
        h = u.yOrigin || 0,
        p = u.xOffset || 0,
        m = u.yOffset || 0,
        _ = d[0],
        g = d[1],
        v = d[2],
        y = d[3],
        b = d[4],
        x = d[5],
        w = t.split(" "),
        k = parseFloat(w[0]) || 0,
        C = parseFloat(w[1]) || 0;
      n ? d !== rI && (s = _ * y - g * v) && (l = y / s * k + -v / s * C + (v * x - y * b) / s, c = -g / s * k + _ / s * C - (_ * x - g * b) / s, k = l, C = c) : (k = (o = rv(e)).x + (~w[0].indexOf("%") ? k / 100 * o.width : k), C = o.y + (~(w[1] || w[0]).indexOf("%") ? C / 100 * o.height : C)), r || !1 !== r && u.smooth ? (u.xOffset = p + ((b = k - f) * _ + (x = C - h) * v) - b, u.yOffset = m + (b * g + x * y) - x) : u.xOffset = u.yOffset = 0, u.xOrigin = k, u.yOrigin = C, u.smooth = !!r, u.origin = t, u.originIsAbsolute = !!n, e.style[ro] = "0px 0px", i && (rx(i, u, "xOrigin", f, k), rx(i, u, "yOrigin", h, C), rx(i, u, "xOffset", p, u.xOffset), rx(i, u, "yOffset", m, u.yOffset)), e.setAttribute("data-svg-origin", k + " " + C)
    },
    rD = function(e, t) {
      var n = e._gsap || new t2(e);
      if ("x" in n && !t && !n.uncache) return n;
      var r, a, i, o, s, l, c, u, d, f, h, p, m, _, g, v, y, b, x, w, k, C, S, E, T, N, A, R, I, O, L, j, P = e.style,
        M = n.scaleX < 0,
        D = getComputedStyle(e),
        H = rf(e, ro) || "0";
      return r = a = i = l = c = u = d = f = h = 0, o = s = 1, n.svg = !!(e.getCTM && ry(e)), D.translate && (("none" !== D.translate || "none" !== D.scale || "none" !== D.rotate) && (P[ri] = ("none" !== D.translate ? "translate3d(" + (D.translate + " 0 0").split(" ").slice(0, 3).join(", ") + ") " : "") + ("none" !== D.rotate ? "rotate(" + D.rotate + ") " : "") + ("none" !== D.scale ? "scale(" + D.scale.split(" ").join(",") + ") " : "") + ("none" !== D[ri] ? D[ri] : "")), P.scale = P.rotate = P.translate = "none"), _ = rP(e, n.svg), n.svg && (n.uncache ? (T = e.getBBox(), H = n.xOrigin - T.x + "px " + (n.yOrigin - T.y) + "px", E = "") : E = !t && e.getAttribute("data-svg-origin"), rM(e, E || H, !!E || n.originIsAbsolute, !1 !== n.smooth, _)), p = n.xOrigin || 0, m = n.yOrigin || 0, _ !== rI && (b = _[0], x = _[1], w = _[2], k = _[3], r = C = _[4], a = S = _[5], 6 === _.length ? (o = Math.sqrt(b * b + x * x), s = Math.sqrt(k * k + w * w), l = b || x ? nQ(x, b) * nX : 0, (d = w || k ? nQ(w, k) * nX + l : 0) && (s *= Math.abs(Math.cos(d * n$))), n.svg && (r -= p - (p * b + m * w), a -= m - (p * x + m * k))) : (j = _[6], O = _[7], A = _[8], R = _[9], I = _[10], L = _[11], r = _[12], a = _[13], i = _[14], c = (g = nQ(j, I)) * nX, g && (E = C * (v = Math.cos(-g)) + A * (y = Math.sin(-g)), T = S * v + R * y, N = j * v + I * y, A = -(C * y) + A * v, R = -(S * y) + R * v, I = -(j * y) + I * v, L = -(O * y) + L * v, C = E, S = T, j = N), u = (g = nQ(-w, I)) * nX, g && (E = b * (v = Math.cos(-g)) - A * (y = Math.sin(-g)), T = x * v - R * y, N = w * v - I * y, L = k * y + L * v, b = E, x = T, w = N), l = (g = nQ(x, b)) * nX, g && (E = b * (v = Math.cos(g)) + x * (y = Math.sin(g)), T = C * v + S * y, x = x * v - b * y, S = S * v - C * y, b = E, C = T), c && Math.abs(c) + Math.abs(l) > 359.9 && (c = l = 0, u = 180 - u), o = eF(Math.sqrt(b * b + x * x + w * w)), s = eF(Math.sqrt(S * S + j * j)), d = Math.abs(g = nQ(C, S)) > 2e-4 ? g * nX : 0, h = L ? 1 / (L < 0 ? -L : L) : 0), n.svg && (E = e.getAttribute("transform"), n.forceCSS = e.setAttribute("transform", "") || !rL(rf(e, ri)), E && e.setAttribute("transform", E))), Math.abs(d) > 90 && 270 > Math.abs(d) && (M ? (o *= -1, d += l <= 0 ? 180 : -180, l += l <= 0 ? 180 : -180) : (s *= -1, d += d <= 0 ? 180 : -180)), t = t || n.uncache, n.x = r - ((n.xPercent = r && (!t && n.xPercent || (Math.round(e.offsetWidth / 2) === Math.round(-r) ? -50 : 0))) ? e.offsetWidth * n.xPercent / 100 : 0) + "px", n.y = a - ((n.yPercent = a && (!t && n.yPercent || (Math.round(e.offsetHeight / 2) === Math.round(-a) ? -50 : 0))) ? e.offsetHeight * n.yPercent / 100 : 0) + "px", n.z = i + "px", n.scaleX = eF(o), n.scaleY = eF(s), n.rotation = eF(l) + "deg", n.rotationX = eF(c) + "deg", n.rotationY = eF(u) + "deg", n.skewX = d + "deg", n.skewY = f + "deg", n.transformPerspective = h + "px", (n.zOrigin = parseFloat(H.split(" ")[2]) || !t && n.zOrigin || 0) && (P[ro] = rH(H)), n.xOffset = n.yOffset = 0, n.force3D = Y.force3D, n.renderTransform = n.svg ? rz : nV ? rB : rU, n.uncache = 0, n
    },
    rH = function(e) {
      return (e = e.split(" "))[0] + " " + e[1]
    },
    rF = function(e, t, n) {
      var r = t_(t);
      return eF(parseFloat(t) + parseFloat(rC(e, "x", n + "px", r))) + r
    },
    rU = function(e, t) {
      t.z = "0px", t.rotationY = t.rotationX = "0deg", t.force3D = 0, rB(e, t)
    },
    rG = "0deg",
    rB = function(e, t) {
      var n = t || this,
        r = n.xPercent,
        a = n.yPercent,
        i = n.x,
        o = n.y,
        s = n.z,
        l = n.rotation,
        c = n.rotationY,
        u = n.rotationX,
        d = n.skewX,
        f = n.skewY,
        h = n.scaleX,
        p = n.scaleY,
        m = n.transformPerspective,
        _ = n.force3D,
        g = n.target,
        v = n.zOrigin,
        y = "",
        b = "auto" === _ && e && 1 !== e || !0 === _;
      if (v && (u !== rG || c !== rG)) {
        var x, w = parseFloat(c) * n$,
          k = Math.sin(w),
          C = Math.cos(w);
        i = rF(g, i, -(k * (x = Math.cos(w = parseFloat(u) * n$)) * v)), o = rF(g, o, -(-Math.sin(w) * v)), s = rF(g, s, -(C * x * v) + v)
      }
      "0px" !== m && (y += "perspective(" + m + ") "), (r || a) && (y += "translate(" + r + "%, " + a + "%) "), (b || "0px" !== i || "0px" !== o || "0px" !== s) && (y += "0px" !== s || b ? "translate3d(" + i + ", " + o + ", " + s + ") " : "translate(" + i + ", " + o + ") "), l !== rG && (y += "rotate(" + l + ") "), c !== rG && (y += "rotateY(" + c + ") "), u !== rG && (y += "rotateX(" + u + ") "), (d !== rG || f !== rG) && (y += "skew(" + d + ", " + f + ") "), (1 !== h || 1 !== p) && (y += "scale(" + h + ", " + p + ") "), g.style[ri] = y || "translate(0, 0)"
    },
    rz = function(e, t) {
      var n, r, a, i, o, s = t || this,
        l = s.xPercent,
        c = s.yPercent,
        u = s.x,
        d = s.y,
        f = s.rotation,
        h = s.skewX,
        p = s.skewY,
        m = s.scaleX,
        _ = s.scaleY,
        g = s.target,
        v = s.xOrigin,
        y = s.yOrigin,
        b = s.xOffset,
        x = s.yOffset,
        w = s.forceCSS,
        k = parseFloat(u),
        C = parseFloat(d);
      f = parseFloat(f), h = parseFloat(h), (p = parseFloat(p)) && (h += p = parseFloat(p), f += p), f || h ? (f *= n$, h *= n$, n = Math.cos(f) * m, r = Math.sin(f) * m, a = -(Math.sin(f - h) * _), i = Math.cos(f - h) * _, h && (p *= n$, a *= o = Math.sqrt(1 + (o = Math.tan(h - p)) * o), i *= o, p && (n *= o = Math.sqrt(1 + (o = Math.tan(p)) * o), r *= o)), n = eF(n), r = eF(r), a = eF(a), i = eF(i)) : (n = m, i = _, r = a = 0), (k && !~(u + "").indexOf("px") || C && !~(d + "").indexOf("px")) && (k = rC(g, "x", u, "px"), C = rC(g, "y", d, "px")), (v || y || b || x) && (k = eF(k + v - (v * n + y * a) + b), C = eF(C + y - (v * r + y * i) + x)), (l || c) && (k = eF(k + l / 100 * (o = g.getBBox()).width), C = eF(C + c / 100 * o.height)), o = "matrix(" + n + "," + r + "," + a + "," + i + "," + k + "," + C + ")", g.setAttribute("transform", o), w && (g.style[ri] = o)
    },
    rY = function(e, t, n, r, a) {
      var i, o, s = Z(a),
        l = parseFloat(a) * (s && ~a.indexOf("rad") ? nX : 1) - r,
        c = r + l + "deg";
      return s && ("short" === (i = a.split("_")[1]) && (l %= 360) != l % 180 && (l += l < 0 ? 360 : -360), "cw" === i && l < 0 ? l = (l + 36e9) % 360 - 360 * ~~(l / 360) : "ccw" === i && l > 0 && (l = (l - 36e9) % 360 - 360 * ~~(l / 360))), e._pt = o = new nE(e._pt, t, n, r, l, n3), o.e = c, o.u = "deg", e._props.push(n), o
    },
    rW = function(e, t) {
      for (var n in t) e[n] = t[n];
      return e
    },
    rq = function(e, t, n) {
      var r, a, i, o, s, l, c, u = rW({}, n._gsap),
        d = n.style;
      for (a in u.svg ? (i = n.getAttribute("transform"), n.setAttribute("transform", ""), d[ri] = t, r = rD(n, 1), rb(n, ri), n.setAttribute("transform", i)) : (i = getComputedStyle(n)[ri], d[ri] = t, r = rD(n, 1), d[ri] = i), nK)(i = u[a]) !== (o = r[a]) && 0 > "perspective,force3D,transformOrigin,svgOrigin".indexOf(a) && (s = t_(i) !== (c = t_(o)) ? rC(n, a, i, c) : parseFloat(i), l = parseFloat(o), e._pt = new nE(e._pt, r, a, s, l - s, n2), e._pt.u = c || 0, e._props.push(a));
      rW(r, u)
    };
  eH("padding,margin,Width,Radius", function(e, t) {
    var n = "Right",
      r = "Bottom",
      a = "Left",
      i = (t < 3 ? ["Top", n, r, a] : ["Top" + a, "Top" + n, r + n, r + a]).map(function(n) {
        return t < 2 ? e + n : "border" + n + e
      });
    rR[t > 1 ? "border" + e : e] = function(e, t, n, r, a) {
      var o, s;
      if (arguments.length < 4) return 5 === (s = (o = i.map(function(t) {
        return rS(e, t, n)
      })).join(" ")).split(o[0]).length ? o[0] : s;
      o = (r + "").split(" "), s = {}, i.forEach(function(e, t) {
        return s[e] = o[t] = o[t] || o[(t - 1) / 2 | 0]
      }), e.init(t, s, a)
    }
  });
  var rV = {
    name: "css",
    register: rm,
    targetTest: function(e) {
      return e.style && e.nodeType
    },
    init: function(e, t, n, r, a) {
      var i, o, s, l, c, u, d, f, h, p, m, _, g, v, y, b, x, w = this._props,
        k = e.style,
        C = n.vars.startAt;
      for (d in nz || rm(), this.styles = this.styles || ru(e), b = this.styles.props, this.tween = n, t)
        if ("autoRound" !== d && (o = t[d], !(eR[d] && na(d, t, n, r, e, a)))) {
          if (c = typeof o, u = rR[d], "function" === c && (c = typeof(o = o.call(n, r, e, a))), "string" === c && ~o.indexOf("random(") && (o = tT(o)), u) u(this, e, d, o, n) && (y = 1);
          else if ("--" === d.substr(0, 2)) i = (getComputedStyle(e).getPropertyValue(d) + "").trim(), o += "", tF.lastIndex = 0, !tF.test(i) && (f = t_(i), (h = t_(o)) ? f !== h && (i = rC(e, d, i, h) + h) : f && (o += f)), this.add(k, "setProperty", i, o, r, a, 0, 0, d), w.push(d), b.push(d, 0, k[d]);
          else if ("undefined" !== c) {
            if (C && d in C ? (Z(i = "function" == typeof C[d] ? C[d].call(n, r, e, a) : C[d]) && ~i.indexOf("random(") && (i = tT(i)), t_(i + "") || "auto" === i || (i += Y.units[d] || t_(rS(e, d)) || ""), "=" === (i + "").charAt(1) && (i = rS(e, d))) : i = rS(e, d), l = parseFloat(i), (p = "string" === c && "=" === o.charAt(1) && o.substr(0, 2)) && (o = o.substr(2)), s = parseFloat(o), d in n1 && ("autoAlpha" === d && (1 === l && "hidden" === rS(e, "visibility") && s && (l = 0), b.push("visibility", 0, k.visibility), rx(this, k, "visibility", l ? "inherit" : "hidden", s ? "inherit" : "hidden", !s)), "scale" !== d && "transform" !== d && ~(d = n1[d]).indexOf(",") && (d = d.split(",")[0])), m = d in nK) {
              if (this.styles.save(d), x = o, "string" === c && "var(--" === o.substring(0, 6)) {
                if ("calc(" === (o = rf(e, o.substring(4, o.indexOf(")")))).substring(0, 5)) {
                  var S = e.style.perspective;
                  e.style.perspective = o, o = rf(e, "perspective"), S ? e.style.perspective = S : rb(e, "perspective")
                }
                s = parseFloat(o)
              }
              if (_ || ((g = e._gsap).renderTransform && !t.parseTransform || rD(e, t.parseTransform), v = !1 !== t.smoothOrigin && g.smooth, (_ = this._pt = new nE(this._pt, k, ri, 0, 1, g.renderTransform, g, 0, -1)).dep = 1), "scale" === d) this._pt = new nE(this._pt, g, "scaleY", g.scaleY, (p ? eG(g.scaleY, p + s) : s) - g.scaleY || 0, n2), this._pt.u = 0, w.push("scaleY", d), d += "X";
              else if ("transformOrigin" === d) {
                b.push(ro, 0, k[ro]), o = rN(o), g.svg ? rM(e, o, 0, v, 0, this) : ((h = parseFloat(o.split(" ")[2]) || 0) !== g.zOrigin && rx(this, g, "zOrigin", g.zOrigin, h), rx(this, k, d, rH(i), rH(o)));
                continue
              } else if ("svgOrigin" === d) {
                rM(e, o, 1, v, 0, this);
                continue
              } else if (d in rO) {
                rY(this, g, d, l, p ? eG(l, p + o) : o);
                continue
              } else if ("smoothOrigin" === d) {
                rx(this, g, "smooth", g.smooth, o);
                continue
              } else if ("force3D" === d) {
                g[d] = o;
                continue
              } else if ("transform" === d) {
                rq(this, o, e);
                continue
              }
            } else d in k || (d = rp(d) || d);
            if (m || (s || 0 === s) && (l || 0 === l) && !n0.test(o) && d in k) f = (i + "").substr((l + "").length), s || (s = 0), h = t_(o) || (d in Y.units ? Y.units[d] : f), f !== h && (l = rC(e, d, i, h)), this._pt = new nE(this._pt, m ? g : k, d, l, (p ? eG(l, p + s) : s) - l, !m && ("px" === h || "zIndex" === d) && !1 !== t.autoRound ? n6 : n2), this._pt.u = h || 0, m && x !== o ? (this._pt.b = i, this._pt.e = x, this._pt.r = n5) : f !== h && "%" !== h && (this._pt.b = i, this._pt.r = n4);
            else if (d in k) rE.call(this, e, d, i, p ? p + o : o);
            else if (d in e) this.add(e, d, i || e[d], p ? p + o : o, r, a);
            else if ("parseTransform" !== d) {
              eb(d, o);
              continue
            }
            m || (d in k ? b.push(d, 0, k[d]) : "function" == typeof e[d] ? b.push(d, 2, e[d]()) : b.push(d, 1, i || e[d])), w.push(d)
          }
        } y && nS(this)
    },
    render: function(e, t) {
      if (t.tween._time || !nq())
        for (var n = t._pt; n;) n.r(e, n.d), n = n._next;
      else t.styles.revert()
    },
    get: rS,
    aliases: n1,
    getSetter: function(e, t, n) {
      var r = n1[t];
      return r && 0 > r.indexOf(",") && (t = r), t in nK && t !== ro && (e._gsap.x || rS(e, "x")) ? n && nW === n ? "scale" === t ? rn : rt : (nW = n || {}, "scale" === t ? rr : ra) : e.style && !et(e.style[t]) ? n9 : ~t.indexOf("-") ? re : ng(e, t)
    },
    core: {
      _removeProperty: rb,
      _getMatrix: rP
    }
  };
  nU.utils.checkPrefix = rp, nU.core.getStyleSaver = ru, oJ = eH("x,y,z,scale,scaleX,scaleY,xPercent,yPercent," + (oZ = "rotation,rotationX,rotationY,skewX,skewY") + ",transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective", function(e) {
    nK[e] = 1
  }), eH(oZ, function(e) {
    Y.units[e] = "deg", rO[e] = 1
  }), n1[oJ[13]] = "x,y,z,scale,scaleX,scaleY,xPercent,yPercent," + oZ, eH("0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY", function(e) {
    var t = e.split(":");
    n1[t[1]] = oJ[t[0]]
  }), eH("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective", function(e) {
    Y.units[e] = "px"
  }), nU.registerPlugin(rV);
  var rK = nU.registerPlugin(rV) || nU;
  rK.core.Tween;
  let rX = "u" > typeof document ? m.useLayoutEffect : m.useEffect,
    r$ = e => e && !Array.isArray(e) && "object" == typeof e,
    rQ = [],
    rZ = {},
    rJ = rK,
    r0 = (e, t = rQ) => {
      let n = rZ;
      r$(e) ? (n = e, e = null, t = "dependencies" in n ? n.dependencies : rQ) : r$(t) && (t = "dependencies" in (n = t) ? n.dependencies : rQ), e && "function" != typeof e && console.warn("First parameter must be a function or config object");
      let {
        scope: r,
        revertOnUpdate: a
      } = n, i = (0, m.useRef)(!1), o = (0, m.useRef)(rJ.context(() => {}, r)), s = (0, m.useRef)(e => o.current.add(null, e)), l = t && t.length && !a;
      return l && rX(() => (i.current = !0, () => o.current.revert()), rQ), rX(() => {
        if (e && o.current.add(e, r), !l || !i.current) return () => o.current.revert()
      }, t), {
        context: o.current,
        contextSafe: s.current
      }
    };
  r0.register = e => {
    rJ = e
  }, r0.headless = !0;
  var r1 = e.i(787940),
    r2 = e.i(880162),
    r3 = e.i(374785),
    r4 = e.i(359783);
  let r5 = "/images/landing/brand/hatch.jpg",
    r6 = "/videos/avatars/hatch_connecting.mp4",
    r8 = "/videos/avatars/hatch_working.mp4",
    r7 = (0, r4.createClientLogger)("LandingHeroRebusHeadline"),
    r9 = {
      mainPhraseHoldSeconds: 3.25,
      holdSeconds: 2.5,
      exitSeconds: .15,
      exitDelaySeconds: 0,
      enterSeconds: .2,
      enterDelaySeconds: .15,
      wordDelaySeconds: .03,
      exitEase: [.75, 0, 1, 1],
      enterEase: [0, 0, .25, 1],
      travelRatio: .3
    };

  function ae([e, t, n, r]) {
    let a = 3 * e,
      i = 3 * (n - e) - a,
      o = 1 - a - i,
      s = 3 * t,
      l = 3 * (r - t) - s,
      c = 1 - s - l,
      u = e => ((o * e + i) * e + a) * e,
      d = e => (3 * o * e + 2 * i) * e + a,
      f = e => ((c * e + l) * e + s) * e;
    return e => {
      let t = Math.min(1, Math.max(0, e)),
        n = t;
      for (let e = 0; e < 6; e += 1) {
        let e = u(n) - t;
        if (1e-6 > Math.abs(e)) return f(n);
        let r = d(n);
        if (1e-6 > Math.abs(r)) break;
        n = Math.min(1, Math.max(0, n - e / r))
      }
      let r = 0,
        a = 1;
      for (let e = 0; e < 12; e += 1) {
        let e = u(n);
        if (1e-6 > Math.abs(e - t)) break;
        e < t ? r = n : a = n, n = (r + a) / 2
      }
      return f(n)
    }
  }
  let at = /[\uE000-\uE0FF]/gu;

  function an(e) {
    let t = [];
    for (let n of e.text.trim().split(/(\s+|[\uE000-\uE0FF])/u)) {
      if ("" === n || /^\s+$/u.test(n)) continue;
      let r = n.charCodeAt(0);
      if (1 === n.length && r >= 57344 && r <= 57599) {
        let n = e.inlineIcons?.[r - 57344];
        null != n && t.push({
          icon: n,
          kind: "icon",
          spaced: !0
        });
        continue
      }
      t.push({
        content: n,
        kind: "word"
      })
    }
    return null != e.icon && t.push({
      icon: e.icon,
      kind: "icon",
      spaced: !1
    }), t
  }

  function ar(e, t) {
    if (! function(e, t) {
        if (0 === t) return !1;
        let n = e[t],
          r = e[t - 1],
          a = e => e?.kind === "icon" && !e.spaced;
        return !a(n) && !a(r)
      }(e, t)) return null;
    let n = e[t - 1];
    return n?.kind === "icon" && n.spaced ? " " : " "
  }

  function aa(e) {
    return (e.inlineIcons?.length ?? 0) > 0
  }

  function ai(e) {
    let r, a, i, o, s, l, c, u, d, f, h, p, _, g, v, y, b, x, w, k, C, S, E, T = (0, n.c)(104),
      {
        className: N,
        config: A,
        headingId: R,
        isActive: I,
        lineOne: O,
        phrases: L,
        scrollerRef: j,
        semanticLabel: P,
        separateSemanticHeading: M
      } = e,
      D = void 0 === A ? r9 : A,
      H = void 0 !== M && M,
      F = H ? "div" : "h1",
      U = H ? "h1" : "span",
      [G, B] = (0, m.useState)(null),
      z = !0 === (0, r2.useReducedMotion)(),
      Y = (0, m.useRef)(null);
    z || ((0, r1.preload)(r6, {
      as: "video",
      fetchPriority: "low"
    }), (0, r1.preload)(r8, {
      as: "video",
      fetchPriority: "low"
    }));
    let W = L.length;
    T[0] !== L ? (a = (r = L.map(a_)).join(","), T[0] = L, T[1] = r, T[2] = a) : (r = T[1], a = T[2]);
    let q = a;
    T[3] !== D.enterDelaySeconds || T[4] !== D.enterEase || T[5] !== D.enterSeconds || T[6] !== D.exitDelaySeconds || T[7] !== D.exitEase || T[8] !== D.exitSeconds || T[9] !== D.holdSeconds || T[10] !== D.mainPhraseHoldSeconds || T[11] !== D.wordDelaySeconds || T[12] !== G || T[13] !== I || T[14] !== W || T[15] !== r || T[16] !== z ? (i = () => {
      if (null == G) return;
      let e = {
          value: 0
        },
        t = 0,
        n = -1,
        a = ae(D.exitEase),
        i = ae(D.enterEase),
        o = e => r[e % W] ?? 1,
        s = e => Math.max(D.exitDelaySeconds + D.exitSeconds + Math.max(0, o(e) - 1) * D.wordDelaySeconds, D.enterDelaySeconds + D.enterSeconds + Math.max(0, o(e + 1) - 1) * D.wordDelaySeconds),
        l = am,
        c = () => {
          let r = e.value >= W,
            c = r ? Math.max(0, W - 1) : Math.max(0, Math.floor(e.value)),
            u = Math.min(W, c + 1),
            d = r ? 1 : Math.max(0, Math.min(1, e.value - c)),
            f = d * s(c),
            h = r ? 1 : l(f, D.enterDelaySeconds, D.enterSeconds, i);
          if (Array.from(G.querySelectorAll("[data-landing-rebus-phrase-index]")).forEach((e, t) => {
              let n = r && t === W || !r && 0 === d && t === c,
                s = !r && d > 0 && t === c && 1 > l(f, D.exitDelaySeconds + Math.max(0, o(t) - 1) * D.wordDelaySeconds, D.exitSeconds, a),
                p = !r && d > 0 && t === u && h > 0,
                m = n ? "resting" : s ? "outgoing" : p ? "incoming" : null,
                _ = null == m;
              e.hidden !== _ && (e.hidden = _), e.getAttribute("data-rebus-phrase-role") !== m && (null == m ? e.removeAttribute("data-rebus-phrase-role") : e.setAttribute("data-rebus-phrase-role", m)), (s || p) && e.querySelectorAll("[data-landing-rebus-word-index]").forEach((e, t) => {
                let n = t * D.wordDelaySeconds;
                s ? e.style.setProperty("--landing-rebus-word-exit-progress", `${l(f,D.exitDelaySeconds+n,D.exitSeconds,a)}`) : e.style.setProperty("--landing-rebus-word-enter-progress", `${l(f,D.enterDelaySeconds+n,D.enterSeconds,i)}`)
              })
            }), e.value < t && (n = -1), t = e.value, d > 0 && d < 1 && n !== c) {
            let e = Y.current;
            null != e && (n = c, e())
          }
        };
      if (c(), z || !I || W <= 1) return;
      let u = rK.timeline({
        defaults: {
          ease: "none",
          onUpdate: c
        },
        repeat: -1
      });
      for (let t = 0; t < W; t += 1) u.to(e, {
        duration: 0 === t ? D.mainPhraseHoldSeconds : D.holdSeconds,
        value: t
      }), u.to(e, {
        duration: s(t),
        value: t + 1
      });
      return u.call(() => {
        e.value = 0, c()
      }), () => {
        u.kill()
      }
    }, T[3] = D.enterDelaySeconds, T[4] = D.enterEase, T[5] = D.enterSeconds, T[6] = D.exitDelaySeconds, T[7] = D.exitEase, T[8] = D.exitSeconds, T[9] = D.holdSeconds, T[10] = D.mainPhraseHoldSeconds, T[11] = D.wordDelaySeconds, T[12] = G, T[13] = I, T[14] = W, T[15] = r, T[16] = z, T[17] = i) : i = T[17], T[18] !== D.enterDelaySeconds || T[19] !== D.enterEase[0] || T[20] !== D.enterEase[1] || T[21] !== D.enterEase[2] || T[22] !== D.enterEase[3] || T[23] !== D.enterSeconds || T[24] !== D.exitDelaySeconds || T[25] !== D.exitEase[0] || T[26] !== D.exitEase[1] || T[27] !== D.exitEase[2] || T[28] !== D.exitEase[3] || T[29] !== D.exitSeconds || T[30] !== D.holdSeconds || T[31] !== D.mainPhraseHoldSeconds || T[32] !== D.wordDelaySeconds || T[33] !== G || T[34] !== I || T[35] !== W || T[36] !== q || T[37] !== z ? (o = {
      dependencies: [D.enterDelaySeconds, D.enterSeconds, D.enterEase[0], D.enterEase[1], D.enterEase[2], D.enterEase[3], D.exitDelaySeconds, D.exitSeconds, D.exitEase[0], D.exitEase[1], D.exitEase[2], D.exitEase[3], D.holdSeconds, D.mainPhraseHoldSeconds, D.wordDelaySeconds, G, I, W, q, z],
      revertOnUpdate: !0
    }, T[18] = D.enterDelaySeconds, T[19] = D.enterEase[0], T[20] = D.enterEase[1], T[21] = D.enterEase[2], T[22] = D.enterEase[3], T[23] = D.enterSeconds, T[24] = D.exitDelaySeconds, T[25] = D.exitEase[0], T[26] = D.exitEase[1], T[27] = D.exitEase[2], T[28] = D.exitEase[3], T[29] = D.exitSeconds, T[30] = D.holdSeconds, T[31] = D.mainPhraseHoldSeconds, T[32] = D.wordDelaySeconds, T[33] = G, T[34] = I, T[35] = W, T[36] = q, T[37] = z, T[38] = o) : o = T[38], r0(i, o), T[39] !== z ? (s = z ? (0, t.jsx)("img", {
      src: r5,
      alt: "",
      "aria-hidden": "true",
      className: "landing-rebus-avatar",
      decoding: "async",
      draggable: !1
    }) : (0, t.jsxs)(t.Fragment, {
      children: [(0, t.jsx)("video", {
        src: r6,
        poster: r5,
        "aria-hidden": "true",
        className: "landing-rebus-avatar landing-rebus-avatar-idle",
        muted: !0,
        playsInline: !0,
        preload: "auto",
        disablePictureInPicture: !0,
        tabIndex: -1
      }), (0, t.jsx)("video", {
        src: r8,
        poster: r5,
        "aria-hidden": "true",
        className: "landing-rebus-avatar landing-rebus-avatar-hover",
        loop: !0,
        muted: !0,
        playsInline: !0,
        preload: "auto",
        disablePictureInPicture: !0,
        tabIndex: -1
      })]
    }), T[39] = z, T[40] = s) : s = T[40];
    let V = s;
    T[41] !== G || T[42] !== I || T[43] !== z || T[44] !== j ? (l = () => {
      if (null == G || z || !I) return;
      let e = j.current,
        t = !1,
        n = 0,
        r = () => {
          let e = G.querySelector("video.landing-rebus-avatar-idle");
          null == e || (e.paused || e.ended) && (e.muted = !0, e.currentTime > 0 && e.readyState >= HTMLMediaElement.HAVE_CURRENT_DATA && (e.currentTime = 0), e.play().catch(ap))
        },
        a = () => {
          t = !1
        },
        i = () => {
          t || Date.now() - n < 1e4 || (n = Date.now(), t = !0, r())
        },
        o = () => {
          G.querySelectorAll("video").forEach(ah)
        },
        s = af,
        l = e => {
          if (!s(e.target) || s(e.relatedTarget)) return;
          let t = G.querySelector("video.landing-rebus-avatar-hover");
          null != t && (t.muted = !0, t.play().catch(ad))
        },
        c = e => {
          if (!s(e.target) || s(e.relatedTarget)) return;
          let t = G.querySelector("video.landing-rebus-avatar-hover");
          null != t && t.pause()
        },
        u = () => {
          t && r()
        },
        d = window.matchMedia("(hover: none), (pointer: coarse)").matches;
      if (G.addEventListener("ended", a, !0), G.addEventListener("canplay", u, !0), !d) return G.addEventListener("pointerover", l), G.addEventListener("pointerout", c), window.addEventListener("pointermove", i, {
        passive: !0
      }), e?.addEventListener("scroll", i, {
        passive: !0
      }), window.addEventListener("scroll", i, {
        passive: !0
      }), () => {
        Y.current = null, o(), G.removeEventListener("ended", a, !0), G.removeEventListener("canplay", u, !0), G.removeEventListener("pointerover", l), G.removeEventListener("pointerout", c), window.removeEventListener("pointermove", i), e?.removeEventListener("scroll", i), window.removeEventListener("scroll", i)
      };
      Y.current = i;
      let f = e => {
          let t = G.querySelector(".landing-rebus-avatar-slot");
          e ? t?.setAttribute("data-avatar-pressed", "on") : t?.removeAttribute("data-avatar-pressed")
        },
        h = e => {
          let t = G.querySelector(".landing-rebus-avatar-slot");
          e ? t?.setAttribute("data-avatar-holding", "on") : t?.removeAttribute("data-avatar-holding")
        },
        p = e => {
          s(e.target) && h(!0)
        },
        m = e => {
          if ("landing-rebus-hold" !== e.animationName) return;
          h(!1);
          let t = G.querySelector("video.landing-rebus-avatar-hover");
          null != t && (t.muted = !0, f(!0), t.play().catch(au))
        },
        _ = () => {
          h(!1), f(!1), G.querySelector("video.landing-rebus-avatar-hover")?.pause()
        };
      return G.addEventListener("animationend", m, !0), G.addEventListener("pointerdown", p), window.addEventListener("pointerup", _), window.addEventListener("pointercancel", _), () => {
        Y.current = null, o(), h(!1), f(!1), G.removeEventListener("animationend", m, !0), G.removeEventListener("ended", a, !0), G.removeEventListener("canplay", u, !0), G.removeEventListener("pointerdown", p), window.removeEventListener("pointerup", _), window.removeEventListener("pointercancel", _)
      }
    }, c = [G, I, z, j], T[41] = G, T[42] = I, T[43] = z, T[44] = j, T[45] = l, T[46] = c) : (l = T[45], c = T[46]), (0, m.useEffect)(l, c), T[47] !== V ? (u = (0, t.jsx)("span", {
      className: "landing-rebus-avatar-slot",
      children: V
    }), T[47] = V, T[48] = u) : u = T[48];
    let K = u,
      X = L[0];
    if (T[49] !== F || T[50] !== U || T[51] !== K || T[52] !== N || T[53] !== D.travelRatio || T[54] !== X || T[55] !== R || T[56] !== O || T[57] !== L || T[58] !== P || T[59] !== H) {
      let e, n, r = null == X ? [] : [...L, X];
      d = F, v = B, y = H ? void 0 : R, T[72] !== N ? (b = (0, r3.cn)("landing-rebus-headline text-text-primary", "text-landing-hero-display", N), T[72] = N, T[73] = b) : b = T[73], T[74] !== D.travelRatio ? (e = {
        "--landing-rebus-phrase-travel-ratio": D.travelRatio
      }, T[74] = D.travelRatio, T[75] = e) : e = T[75], x = e;
      let a = H ? R : void 0;
      T[76] !== U || T[77] !== P || T[78] !== a ? (w = (0, t.jsx)(U, {
        id: a,
        className: "sr-only",
        children: P
      }), T[76] = U, T[77] = P, T[78] = a, T[79] = w) : w = T[79], T[80] !== K || T[81] !== O ? (n = O({
        avatar: K
      }), T[80] = K, T[81] = O, T[82] = n) : n = T[82], T[83] !== n ? (k = (0, t.jsx)("span", {
        "aria-hidden": "true",
        className: "landing-rebus-line landing-rebus-line-one",
        children: n
      }), T[83] = n, T[84] = k) : k = T[84], _ = "true", g = "landing-rebus-line landing-rebus-line-two", f = "landing-rebus-phrase-slot", T[85] !== L ? (h = L.map(al), T[85] = L, T[86] = h) : h = T[86], p = r.map(ao), T[49] = F, T[50] = U, T[51] = K, T[52] = N, T[53] = D.travelRatio, T[54] = X, T[55] = R, T[56] = O, T[57] = L, T[58] = P, T[59] = H, T[60] = d, T[61] = f, T[62] = h, T[63] = p, T[64] = _, T[65] = g, T[66] = v, T[67] = y, T[68] = b, T[69] = x, T[70] = w, T[71] = k
    } else d = T[60], f = T[61], h = T[62], p = T[63], _ = T[64], g = T[65], v = T[66], y = T[67], b = T[68], x = T[69], w = T[70], k = T[71];
    return T[87] !== f || T[88] !== h || T[89] !== p ? (C = (0, t.jsxs)("span", {
      className: f,
      children: [h, p]
    }), T[87] = f, T[88] = h, T[89] = p, T[90] = C) : C = T[90], T[91] !== _ || T[92] !== g || T[93] !== C ? (S = (0, t.jsx)("span", {
      "aria-hidden": _,
      className: g,
      children: C
    }), T[91] = _, T[92] = g, T[93] = C, T[94] = S) : S = T[94], T[95] !== d || T[96] !== v || T[97] !== y || T[98] !== b || T[99] !== x || T[100] !== w || T[101] !== k || T[102] !== S ? (E = (0, t.jsxs)(d, {
      ref: v,
      id: y,
      className: b,
      style: x,
      children: [w, k, S]
    }), T[95] = d, T[96] = v, T[97] = y, T[98] = b, T[99] = x, T[100] = w, T[101] = k, T[102] = S, T[103] = E) : E = T[103], E
  }

  function ao(e, n) {
    return (0, t.jsx)("span", {
      "data-landing-rebus-phrase-index": n,
      "data-landing-rebus-phrase-text": e.text.replace(at, " ").trim().split(/\s+/u).join(" "),
      "data-rebus-phrase-role": 0 === n ? "resting" : void 0,
      hidden: 0 !== n,
      className: (0, r3.cn)("landing-rebus-phrase", aa(e) && "landing-rebus-phrase-inline-icons"),
      children: an(e).map(as)
    }, n)
  }

  function as(e, n, r) {
    return (0, t.jsxs)(m.Fragment, {
      children: [ar(r, n), (0, t.jsx)("span", {
        "data-landing-rebus-word-index": n,
        className: "icon" === e.kind ? (0, r3.cn)("landing-rebus-inline-icon-word", e.spaced && "landing-rebus-inline-icon-word-spaced") : void 0,
        children: "word" === e.kind ? e.content : (0, t.jsx)("img", {
          src: e.icon.src,
          srcSet: e.icon.srcSet,
          alt: "",
          className: "landing-rebus-inline-icon",
          decoding: "async",
          draggable: !1
        })
      })]
    }, n)
  }

  function al(e, n) {
    return (0, t.jsx)("span", {
      "aria-hidden": "true",
      className: (0, r3.cn)("landing-rebus-phrase-measure", aa(e) && "landing-rebus-phrase-inline-icons"),
      children: an(e).map(ac)
    }, n)
  }

  function ac(e, n, r) {
    return (0, t.jsxs)(m.Fragment, {
      children: [ar(r, n), "word" === e.kind ? e.content : (0, t.jsx)("span", {
        className: (0, r3.cn)("landing-rebus-inline-icon-sizer", e.spaced && "landing-rebus-inline-icon-sizer-spaced")
      })]
    }, n)
  }

  function au() {}

  function ad() {}

  function af(e) {
    return e instanceof Element && null != e.closest(".landing-rebus-avatar-slot")
  }

  function ah(e) {
    return e.pause()
  }

  function ap(e) {
    r7.retainForBugReport("warn", "Landing hero avatar clip refused to play")
  }

  function am(e, t, n, r) {
    return n <= 0 ? +(e >= t) : r(Math.max(0, Math.min(1, (e - t) / n)))
  }

  function a_(e) {
    return an(e).length
  }

  function ag(e) {
    let a, o, s, l = (0, n.c)(5),
      {
        isActive: c,
        scrollerRef: d
      } = e;
    return l[0] === Symbol.for("react.memo_cache_sentinel") ? (a = [{
      text: r.fbs._("that hustles for you", null, {
        hk: "1NKT1R"
      }),
      icon: u.chart
    }, {
      text: r.fbs._("that {pencilCupPicture} drafts customer {envelopePicture} replies", [r.fbs._param("pencilCupPicture", p(0)), r.fbs._param("envelopePicture", p(1))], {
        hk: "1ZrkRj"
      }),
      inlineIcons: [u.pencils, u.inbox]
    }, {
      text: r.fbs._("that launches new {shoppingCartPicture} products", [r.fbs._param("shoppingCartPicture", p(0))], {
        hk: "4bJzJm"
      }),
      inlineIcons: [u.shopping]
    }, {
      text: r.fbs._("that {clipboardPicture} plans your {calendarPicture} content", [r.fbs._param("clipboardPicture", p(0)), r.fbs._param("calendarPicture", p(1))], {
        hk: "3TqLJN"
      }),
      inlineIcons: [u.clipboard, u.calendar]
    }, {
      text: r.fbs._("that manages {piggyBankPicture} cash flow", [r.fbs._param("piggyBankPicture", p(0))], {
        hk: "UX1BV"
      }),
      inlineIcons: [u.money]
    }], l[0] = a) : a = l[0], l[1] === Symbol.for("react.memo_cache_sentinel") ? (o = r.fbs._("{productName} for Small Business: Build Your Company with AI", [r.fbs._param("productName", i)], {
      hk: "3rqIOI"
    }), l[1] = o) : o = l[1], l[2] !== c || l[3] !== d ? (s = (0, t.jsx)(ai, {
      className: "landing-hero-headline-gap",
      scrollerRef: d,
      headingId: "landing-hero-title",
      isActive: c,
      lineOne: av,
      phrases: a,
      separateSemanticHeading: !0,
      semanticLabel: o
    }), l[2] = c, l[3] = d, l[4] = s) : s = l[4], s
  }

  function av(e) {
    let {
      avatar: t
    } = e;
    return r.fbt._("{productName}{avatar}, an AI agent", [r.fbt._param("productName", i), r.fbt._param("avatar", t)], {
      hk: "HBtiy"
    })
  }
  var ay = e.i(863641),
    ab = e.i(941960),
    ax = e.i(646361),
    aw = e.i(420297),
    ak = e.i(731714),
    aC = e.i(393401),
    aS = e.i(281539),
    aE = e.i(848048);

  function aT(e) {
    let a, o, s, l, c, u, d = (0, n.c)(15),
      {
        href: f,
        subsurface: h,
        className: p,
        ref: m
      } = e,
      _ = `landing_${h}_continue`;
    d[0] !== h ? (a = {
      surface: "landing",
      subsurface: h
    }, d[0] = h, d[1] = a) : a = d[1], d[2] !== _ || d[3] !== a ? (o = {
      eventName: aS.HatchClickEvent.LANDING_CONTINUE_CLICK,
      actionTarget: _,
      actionType: "click",
      metadata: a
    }, d[2] = _, d[3] = a, d[4] = o) : o = d[4];
    let {
      ref: g,
      onClick: v
    } = (0, aE.useTrackedClickRef)(o), y = (0, ak.useMergeRefs)(m, g);
    return d[5] !== p ? (s = (0, r3.cn)((0, aC.buttonVariants)({
      radius: "rounded",
      size: "36",
      variant: "primary"
    }), "dark:text-text-on-accent hover:brightness-95 active:brightness-90 dark:hover:brightness-110 dark:active:brightness-95", p), d[5] = p, d[6] = s) : s = d[6], d[7] !== v ? (l = () => v(), d[7] = v, d[8] = l) : l = d[8], d[9] === Symbol.for("react.memo_cache_sentinel") ? (c = r.fbt._("Continue to {productName}", [r.fbt._param("productName", i)], {
      hk: "2VJcTv"
    }), d[9] = c) : c = d[9], d[10] !== f || d[11] !== y || d[12] !== s || d[13] !== l ? (u = (0, t.jsx)(ab.EctoAnchor, {
      ref: y,
      href: f,
      className: s,
      onClick: l,
      children: c
    }), d[10] = f, d[11] = y, d[12] = s, d[13] = l, d[14] = u) : u = d[14], u
  }
  var aN = e.i(855356);
  let aA = aN.HATCH_APP_DOWNLOAD_BUTTON_URLS;
  aN.HATCH_APP_DOWNLOAD_QR_URLS;
  let aR = {
      android: "/images/landing/qr-codes/qr-play-store.png",
      ios: "/images/landing/qr-codes/qr-app-store.png"
    },
    aI = {
      android: "/images/landing/qr-codes/qr-play-store@2x.png",
      ios: "/images/landing/qr-codes/qr-app-store@2x.png"
    };

  function aO(e) {
    let r, a, i, o, s, l = (0, n.c)(10);
    return l[0] !== e.title ? (r = null != e.title && (0, t.jsx)("title", {
      children: e.title
    }), l[0] = e.title, l[1] = r) : r = l[1], l[2] !== e.children ? (a = null != e.children && (0, t.jsx)("defs", {
      children: e.children
    }), l[2] = e.children, l[3] = a) : a = l[3], l[4] === Symbol.for("react.memo_cache_sentinel") ? (i = (0, t.jsx)("path", {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M9.503 2.923A5.926 5.926 0 0 1 12 2.375c.892 0 1.738.196 2.497.548l1.035-1.794a.26.26 0 0 1 .354-.095.26.26 0 0 1 .094.354l-1.023 1.773a5.96 5.96 0 0 1 2.978 4.714H6.065a5.96 5.96 0 0 1 2.978-4.714L8.02 1.388a.26.26 0 0 1 .094-.354.26.26 0 0 1 .354.095l1.035 1.794zM9.48 4.667a.688.688 0 1 1 0 1.375.688.688 0 0 1 0-1.375zm5.042 0a.688.688 0 1 1 0 1.375.688.688 0 0 1 0-1.375z"
    }), o = (0, t.jsx)("path", {
      d: "M6.042 8.792v8.25c0 .76.615 1.375 1.375 1.375h.916v3.208c0 .756.62 1.375 1.375 1.375.757 0 1.375-.619 1.375-1.375v-3.208h1.834v3.208c0 .756.618 1.375 1.375 1.375.756 0 1.375-.619 1.375-1.375v-3.208h.916c.76 0 1.375-.616 1.375-1.375v-8.25H6.042zM3.75 16.583a1.379 1.379 0 0 1-1.375-1.375v-5.5c0-.756.619-1.375 1.375-1.375s1.375.62 1.375 1.375v5.5c0 .757-.619 1.375-1.375 1.375zM20.25 16.583a1.379 1.379 0 0 1-1.375-1.375v-5.5c0-.756.619-1.375 1.375-1.375s1.375.62 1.375 1.375v5.5c0 .757-.619 1.375-1.375 1.375z"
    }), l[4] = i, l[5] = o) : (i = l[4], o = l[5]), l[6] !== e || l[7] !== r || l[8] !== a ? (s = (0, t.jsxs)("svg", {
      viewBox: "0 0 24 24",
      fill: "currentColor",
      width: "1em",
      height: "1em",
      ...e,
      children: [r, a, i, o]
    }), l[6] = e, l[7] = r, l[8] = a, l[9] = s) : s = l[9], s
  }

  function aL(e) {
    let r, a, i, o, s = (0, n.c)(9);
    return s[0] !== e.title ? (r = null != e.title && (0, t.jsx)("title", {
      children: e.title
    }), s[0] = e.title, s[1] = r) : r = s[1], s[2] !== e.children ? (a = null != e.children && (0, t.jsx)("defs", {
      children: e.children
    }), s[2] = e.children, s[3] = a) : a = s[3], s[4] === Symbol.for("react.memo_cache_sentinel") ? (i = (0, t.jsx)("path", {
      d: "M16.405 1h-.157c-1.175.155-2.401.85-3.07 1.63-.721.837-1.317 1.91-1.212 3.44 1.57.122 2.54-.686 3.249-1.52.722-.84 1.317-1.999 1.19-3.55zM21 17.192v-.044c-1.536-.726-2.765-1.959-2.936-4.066-.192-2.319.932-3.677 2.353-4.579-.737-1.147-1.929-1.891-3.61-2.144-1.29-.194-2.293.172-3.29.535l-.25.09A8.56 8.56 0 0 0 13 7.09c-.279.112-.555.223-.832.231-.424.013-.866-.175-1.258-.34-.108-.046-.212-.09-.31-.129-.483-.181-1.032-.365-1.57-.448-1.256-.191-2.384.237-3.204.74-1.554.944-2.723 2.894-2.825 5.291v.985c.24 3.35 1.533 5.968 3.205 7.995.567.685 1.346 1.447 2.31 1.586h.448c.562-.079 1.028-.258 1.49-.436.618-.237 1.228-.472 2.051-.459.676.012 1.233.228 1.786.442.558.216 1.112.43 1.778.43 1.459 0 2.307-1.17 2.99-2.11l.104-.144c.768-1.059 1.397-2.2 1.838-3.531z"
    }), s[4] = i) : i = s[4], s[5] !== e || s[6] !== r || s[7] !== a ? (o = (0, t.jsxs)("svg", {
      viewBox: "0 0 24 24",
      fill: "currentColor",
      width: "1em",
      height: "1em",
      ...e,
      children: [r, a, i]
    }), s[5] = e, s[6] = r, s[7] = a, s[8] = o) : o = s[8], o
  }

  function aj(e) {
    let a, i, o, s, l, c, u, d, f, h, p, m, _ = (0, n.c)(22),
      {
        subsurface: g
      } = e;
    _[0] !== g ? (a = {
      eventName: aS.HatchClickEvent.LANDING_MOBILE_APP_IOS_CLICK,
      actionTarget: "landing_mobile_app_ios",
      actionType: "click",
      metadata: {
        surface: "landing",
        subsurface: g,
        platform: "ios"
      }
    }, _[0] = g, _[1] = a) : a = _[1];
    let {
      ref: v,
      onClick: y
    } = (0, aE.useTrackedClickRef)(a);
    _[2] !== g ? (i = {
      eventName: aS.HatchClickEvent.LANDING_MOBILE_APP_ANDROID_CLICK,
      actionTarget: "landing_mobile_app_android",
      actionType: "click",
      metadata: {
        surface: "landing",
        subsurface: g,
        platform: "android"
      }
    }, _[2] = g, _[3] = i) : i = _[3];
    let {
      ref: b,
      onClick: x
    } = (0, aE.useTrackedClickRef)(i);
    _[4] === Symbol.for("react.memo_cache_sentinel") ? (o = (0, r3.cn)((0, aC.buttonVariants)({
      radius: "rounded",
      size: "36",
      variant: "flat"
    }), "text-text-primary h-12 w-full gap-1.5 px-8 no-underline"), _[4] = o) : o = _[4];
    let w = o;
    return _[5] !== y ? (s = () => y(), _[5] = y, _[6] = s) : s = _[6], _[7] === Symbol.for("react.memo_cache_sentinel") ? (l = (0, t.jsx)(ax.HatchIcon, {
      icon: aL,
      size: 20
    }), c = r.fbt._("Download iOS", null, {
      hk: "1id9uf"
    }), _[7] = l, _[8] = c) : (l = _[7], c = _[8]), _[9] !== v || _[10] !== s ? (u = (0, t.jsxs)(ab.EctoAnchor, {
      ref: v,
      href: aA.ios,
      skipLinkshim: !0,
      onClick: s,
      className: w,
      children: [l, c]
    }), _[9] = v, _[10] = s, _[11] = u) : u = _[11], _[12] !== x ? (d = () => x(), _[12] = x, _[13] = d) : d = _[13], _[14] === Symbol.for("react.memo_cache_sentinel") ? (h = (0, t.jsx)(ax.HatchIcon, {
      icon: aO,
      size: 20
    }), f = r.fbt._("Download Android", null, {
      hk: "3fqymS"
    }), _[14] = f, _[15] = h) : (f = _[14], h = _[15]), _[16] !== b || _[17] !== d ? (p = (0, t.jsxs)(ab.EctoAnchor, {
      ref: b,
      href: aA.android,
      skipLinkshim: !0,
      onClick: d,
      className: w,
      children: [h, f]
    }), _[16] = b, _[17] = d, _[18] = p) : p = _[18], _[19] !== p || _[20] !== u ? (m = (0, t.jsxs)(t.Fragment, {
      children: [u, p]
    }), _[19] = p, _[20] = u, _[21] = m) : m = _[21], m
  }
  aO._isSVG = !0, aL._isSVG = !0;
  var aP = e.i(813280),
    aM = e.i(397240),
    aD = e.i(325814),
    aH = e.i(870228),
    aF = e.i(830314),
    aU = e.i(871627),
    aG = e.i(955367),
    aB = e.i(430116),
    az = e.i(114205),
    aY = e.i(517343),
    aW = e.i(632381),
    aq = e.i(458853),
    aV = e.i(823173);
  aU.default._isSVG = !0;

  function aK(e) {
    let i, o, s, l, c, u, d, f, h, p, _, g, v, y, b, x, w, k, C, S, E, T, N, A, R, I = (0, n.c)(60),
      {
        entrypoint: O,
        fallback: L
      } = e,
      j = (0, az.useIsHatchMacApp)(),
      [P, M] = (0, m.useState)("ios"),
      {
        failed: D,
        onDownloadClick: H
      } = (0, aq.useMacAppDownload)(),
      F = j && "mac" === P ? "ios" : P;
    F !== P && M(F);
    let U = "mac" === F;
    "mac" !== F && ((0, r1.preload)(aR[F], {
      as: "image",
      fetchPriority: "low"
    }), (0, r1.preload)(aI[F], {
      as: "image",
      fetchPriority: "low"
    }));
    let G = "ios" === F,
      B = "mac" !== F ? aA[F] : null,
      z = "landing_footer_cta" === O ? "app_download_modal" : "app_download_promo";
    I[0] !== O || I[1] !== z ? (i = {
      surface: aY.LANDING_APP_UPSELL_SURFACE,
      screen: z,
      entrypoint: O,
      promo_shape: "standard"
    }, I[0] = O, I[1] = z, I[2] = i) : i = I[2];
    let Y = i;
    I[3] !== Y ? (o = {
      eventName: aS.HatchClickEvent.LANDING_MOBILE_APP_IOS_CLICK,
      actionTarget: "landing_download_card_ios_store",
      actionType: "click",
      metadata: {
        ...Y,
        platform: "ios"
      }
    }, I[3] = Y, I[4] = o) : o = I[4];
    let {
      ref: W,
      onClick: q
    } = (0, aE.useTrackedClickRef)(o);
    I[5] !== Y ? (s = {
      eventName: aS.HatchClickEvent.LANDING_MOBILE_APP_ANDROID_CLICK,
      actionTarget: "landing_download_card_android_store",
      actionType: "click",
      metadata: {
        ...Y,
        platform: "android"
      }
    }, I[5] = Y, I[6] = s) : s = I[6];
    let {
      ref: V,
      onClick: K
    } = (0, aE.useTrackedClickRef)(s);
    I[7] !== Y ? (l = {
      eventName: aS.HatchClickEvent.DESKTOP_APP_UPSELL_DOWNLOAD_CLICK,
      actionTarget: "landing_download_card_mac_download",
      actionType: "click",
      metadata: {
        ...Y,
        platform: "mac"
      }
    }, I[7] = Y, I[8] = l) : l = I[8];
    let {
      ref: X,
      onClick: $
    } = (0, aE.useTrackedClickRef)(l);
    I[9] !== Y ? (c = {
      eventName: aV.HatchImpressionEvent.DESKTOP_APP_UPSELL_IMPRESSION,
      actionTarget: "landing_desktop_app_upsell",
      metadata: {
        ...Y,
        platform: "mac"
      }
    }, I[9] = Y, I[10] = c) : c = I[10];
    let {
      ref: Q
    } = (0, aE.useTrackedImpressionRef)(c);
    I[11] !== Y ? (u = {
      eventName: aV.HatchImpressionEvent.LANDING_MOBILE_APP_UPSELL_IMPRESSION,
      actionTarget: "landing_app_download_card",
      metadata: Y
    }, I[11] = Y, I[12] = u) : u = I[12];
    let {
      ref: Z
    } = (0, aE.useTrackedImpressionRef)(u), J = (0, aE.useInteractionLoggerWithLazyData)();
    I[13] !== J || I[14] !== Y ? (d = e => {
      J({
        eventName: aS.HatchClickEvent.MOBILE_APP_UPSELL_PLATFORM_SELECT,
        actionType: "click",
        actionTarget: "landing_app_download_platform_toggle",
        metadata: {
          ...Y,
          platform: e
        }
      })
    }, I[13] = J, I[14] = Y, I[15] = d) : d = I[15];
    let ee = d,
      et = G ? W : V,
      en = G ? q : K;
    I[16] !== G ? (f = G ? r.fbs._("Open the iOS App Store", null, {
      hk: "2kUC0"
    }) : r.fbs._("Open the Google Play Store", null, {
      hk: "CMMah"
    }), I[16] = G, I[17] = f) : f = I[17];
    let er = f;
    I[18] === Symbol.for("react.memo_cache_sentinel") ? (h = r.fbs._("iOS", null, {
      hk: "14Rd0u"
    }), I[18] = h) : h = I[18], I[19] === Symbol.for("react.memo_cache_sentinel") ? (p = {
      label: h,
      value: "ios"
    }, _ = r.fbs._("Android", null, {
      hk: "1lVPKB"
    }), I[19] = p, I[20] = _) : (p = I[19], _ = I[20]), I[21] === Symbol.for("react.memo_cache_sentinel") ? (g = {
      label: _,
      value: "android"
    }, v = r.fbs._("Mac", null, {
      hk: "4CHlSd"
    }), I[21] = g, I[22] = v) : (g = I[21], v = I[22]), I[23] === Symbol.for("react.memo_cache_sentinel") ? (y = [p, g, {
      label: v,
      value: "mac"
    }], I[23] = y) : y = I[23], I[24] !== j ? (b = y.filter(e => {
      let {
        value: t
      } = e;
      return "mac" !== t || !j
    }), I[24] = j, I[25] = b) : b = I[25];
    let ea = b;
    I[26] === Symbol.for("react.memo_cache_sentinel") ? (x = r.fbs._("Download {productName} and drag it into your Applications folder.", [r.fbs._param("productName", a.PRODUCT_BRAND.shortName)], {
      hk: "2JpDfN"
    }), I[26] = x) : x = I[26];
    let ei = x;
    I[27] === Symbol.for("react.memo_cache_sentinel") ? (w = (0, aW.getHatchMacAppDownloadCopy)(), I[27] = w) : w = I[27];
    let eo = w.downloadFailed;
    I[28] === Symbol.for("react.memo_cache_sentinel") ? (k = r.fbs._("Download for Mac", null, {
      hk: "4tJ7FH"
    }), I[28] = k) : k = I[28];
    let es = k;
    I[29] !== F ? (C = "ios" === F ? r.fbs._("Scan the QR code with your device's camera to install {productName} from the App Store.", [r.fbs._param("productName", a.PRODUCT_BRAND.shortName)], {
      hk: "2UlChc"
    }) : r.fbs._("Scan the QR code with your device's camera to install {productName} from the Google Play Store.", [r.fbs._param("productName", a.PRODUCT_BRAND.shortName)], {
      hk: "47G3EK"
    }), I[29] = F, I[30] = C) : C = I[30];
    let el = C;
    if (I[31] !== F ? (S = [F], I[31] = F, I[32] = S) : S = I[32], I[33] !== ee ? (E = e => {
        ee(e), M(e)
      }, I[33] = ee, I[34] = E) : E = I[34], I[35] !== ea || I[36] !== F || I[37] !== E ? (T = (0, t.jsx)(aG.SegmentedToggle, {
        options: ea,
        value: F,
        onChange: E,
        fullWidth: !0,
        equalWidths: !0
      }), I[35] = ea, I[36] = F, I[37] = E, I[38] = T) : T = I[38], I[39] !== el || I[40] !== U || I[41] !== $ || I[42] !== en || I[43] !== D || I[44] !== X || I[45] !== Q || I[46] !== H || I[47] !== F || I[48] !== B || I[49] !== er || I[50] !== et) N = (0, t.jsx)("div", {
      "data-testid": "landing-app-download-panel",
      className: "mt-2 flex flex-1 flex-col items-center justify-center gap-2",
      children: U ? (0, t.jsxs)("div", {
        ref: Q,
        className: "contents",
        children: [(0, t.jsxs)(ab.EctoAnchor, {
          ref: X,
          href: "/api/hatch/app-download/mac",
          skipLinkshim: !0,
          onClick: e => {
            $(), H(e)
          },
          className: (0, r3.cn)((0, aC.buttonVariants)({
            radius: "rounded",
            size: "36",
            variant: "flat"
          }), "text-text-primary gap-1.5 no-underline"),
          children: [(0, t.jsx)(ax.HatchIcon, {
            icon: aF.default,
            size: 16,
            "aria-hidden": "true"
          }), es]
        }), (0, t.jsx)(aB.Text, {
          as: "p",
          variant: "caption-1",
          color: "secondary",
          className: "mt-1.5 text-center",
          role: D ? "alert" : void 0,
          children: D ? eo : ei
        })]
      }) : (0, t.jsxs)(t.Fragment, {
        children: [(0, t.jsx)("div", {
          className: "rounded-12 dark:bg-white",
          children: (0, t.jsx)("img", {
            src: aR[F],
            srcSet: `${aR[F]} 1x, ${aI[F]} 2x`,
            alt: r.fbs._("QR code to install the {productName} mobile app", [r.fbs._param("productName", a.PRODUCT_BRAND.shortName)], {
              hk: "RtvzR"
            }),
            className: "block",
            width: 160,
            height: 160
          })
        }), (0, t.jsx)(aB.Text, {
          as: "p",
          variant: "caption-1",
          color: "secondary",
          className: "text-center",
          children: el
        }), (0, t.jsxs)(ab.EctoAnchor, {
          ref: et,
          href: B ?? "",
          skipLinkshim: !0,
          target: "_blank",
          rel: "noreferrer",
          onClick: () => en(),
          className: (0, r3.cn)((0, aC.buttonVariants)({
            radius: "rounded",
            size: "36",
            variant: "flat"
          }), "text-text-primary mt-1 gap-1.5 no-underline"),
          children: [er, (0, t.jsx)(ax.HatchIcon, {
            icon: aU.default,
            size: 16,
            className: "text-icon-secondary",
            "aria-hidden": "true"
          })]
        })]
      })
    }), I[39] = el, I[40] = U, I[41] = $, I[42] = en, I[43] = D, I[44] = X, I[45] = Q, I[46] = H, I[47] = F, I[48] = B, I[49] = er, I[50] = et, I[51] = N;
    else N = I[51];
    return I[52] !== Z || I[53] !== T || I[54] !== N ? (A = (0, t.jsxs)("div", {
      ref: Z,
      "data-testid": "landing-app-download-card",
      className: "flex h-full w-full flex-col",
      children: [T, N]
    }), I[52] = Z, I[53] = T, I[54] = N, I[55] = A) : A = I[55], I[56] !== L || I[57] !== S || I[58] !== A ? (R = (0, t.jsx)(aP.EctoErrorBoundary, {
      surface: ay.HATCH_SENTRY_SURFACES.LANDING,
      fallback: L,
      resetKeys: S,
      children: A
    }), I[56] = L, I[57] = S, I[58] = A, I[59] = R) : R = I[59], R
  }

  function aX(e) {
    let a, i, o, s, l = (0, n.c)(7),
      {
        children: c
      } = e,
      [u, d] = (0, m.useState)(!1);
    return l[0] !== c ? (a = (0, t.jsx)(aD.DialogTrigger, {
      asChild: !0,
      children: c
    }), l[0] = c, l[1] = a) : a = l[1], l[2] === Symbol.for("react.memo_cache_sentinel") ? (i = (0, t.jsx)(aD.DialogHeader, {
      children: (0, t.jsx)(aD.DialogTitle, {
        children: r.fbt._("Download apps", null, {
          hk: "nPqfx"
        })
      })
    }), l[2] = i) : i = l[2], l[3] === Symbol.for("react.memo_cache_sentinel") ? (o = (0, t.jsx)(aD.DialogContent, {
      className: "max-w-[480px]",
      header: i,
      children: (0, t.jsx)("div", {
        className: "flex w-full justify-center pb-1",
        children: (0, t.jsx)(aK, {
          entrypoint: "landing_footer_cta",
          fallback: a$
        })
      })
    }), l[3] = o) : o = l[3], l[4] !== u || l[5] !== a ? (s = (0, t.jsxs)(aD.Dialog, {
      open: u,
      onOpenChange: d,
      children: [a, o]
    }), l[4] = u, l[5] = a, l[6] = s) : s = l[6], s
  }

  function a$(e) {
    let {
      error: n,
      reset: r
    } = e;
    return (0, t.jsx)(aH.HatchContentErrorFallback, {
      error: n,
      onRetry: r,
      alwaysShowRetry: !0
    })
  }

  function aQ({
    children: e,
    showAppDownloads: t,
    fallback: n
  }) {
    return ("boolean" == typeof t ? t : (0, m.use)(t)) ? e : n
  }

  function aZ(e) {
    let r, a, i, o = (0, n.c)(10),
      {
        children: s,
        showAppDownloads: l,
        fallback: c,
        pendingFallback: u
      } = e,
      d = void 0 === c ? null : c,
      f = void 0 === u ? d : u;
    return o[0] !== s || o[1] !== d || o[2] !== l ? (r = (0, t.jsx)(aQ, {
      showAppDownloads: l,
      fallback: d,
      children: s
    }), o[0] = s, o[1] = d, o[2] = l, o[3] = r) : r = o[3], o[4] !== f || o[5] !== r ? (a = (0, t.jsx)(m.Suspense, {
      fallback: f,
      children: r
    }), o[4] = f, o[5] = r, o[6] = a) : a = o[6], o[7] !== d || o[8] !== a ? (i = (0, t.jsx)(aP.EctoErrorBoundary, {
      surface: ay.HATCH_SENTRY_SURFACES.LANDING,
      fallback: d,
      children: a
    }), o[7] = d, o[8] = a, o[9] = i) : i = o[9], i
  }

  function aJ() {
    return {
      sizzle: r.fbs._("Muse introduction film", null, {
        hk: "2flkBR"
      }),
      walkthrough: r.fbs._("Play the guided tour of Muse", null, {
        hk: "4FJ8pI"
      }),
      founder: r.fbs._("Play the small business owner film", null, {
        hk: "4tXjha"
      })
    }
  }
  var a0 = e.i(764866),
    a1 = e.i(612270),
    a2 = e.i(918340),
    a3 = e.i(166695);
  let a4 = ["muse", "business"],
    a5 = ["muse_sizzle", "muse_demo"],
    a6 = {
      muse: "/videos",
      business: "/pages/business/videos"
    };

  function a8(e) {
    return "object" == typeof e && null !== e && "string" == typeof e.key && "string" == typeof e.cdn_url && e.cdn_url.startsWith("https://") && "video/mp4" === e.mime_type
  }
  async function a7(e, {
    catalog: t = "muse",
    locale: n,
    signal: r
  } = {}) {
    let a = new URL(`https://api.muse.ai/patrique${a6[t]}/${e}`),
      i = n?.trim();
    i && a.searchParams.set("locale", i);
    let o = await fetch(a.toString(), {
      headers: {
        "X-API-Version": "1.0.0"
      },
      credentials: "omit",
      cache: "no-store",
      signal: r
    });
    if ("business" === t && 404 === o.status) return [];
    if (!o.ok) throw Error(`Landing videos request failed with ${o.status}`);
    let s = await o.json();
    if (!Array.isArray(s?.videos)) throw Error("Landing videos response had no video list");
    return s.videos.filter(a8)
  }
  let a9 = (0, r4.createClientLogger)("useLandingVideo");

  function ie(e) {
    let t, r, a, i, o = (0, n.c)(9),
      {
        locale: s
      } = (0, a3.useHatchLocale)(),
      l = (0, aM.useIsMobileBreakpoint)();
    o[0] !== l ? (t = l ? "4x5" : "16x9", o[0] = l, o[1] = t) : t = o[1];
    let c = t,
      [u, d] = (0, m.useState)(null);
    o[2] !== e ? (r = e.map(ir).join(","), o[2] = e, o[3] = r) : r = o[3];
    let f = r;
    return o[4] !== c || o[5] !== s || o[6] !== f ? (a = () => {
      let e = new AbortController,
        t = f.split(",").flatMap(it);
      return d(null), (async () => {
        let n = new Map;
        for (let {
            catalog: r,
            key: a
          }
          of t) {
          let t = n.get(r);
          if (null == t) {
            try {
              t = await a7(c, {
                catalog: r,
                locale: s,
                signal: e.signal
              })
            } catch (n) {
              if (e.signal.aborted) return;
              a9.error({
                error: n,
                catalog: r,
                key: a,
                aspect: c,
                locale: s,
                tags: {
                  surface: ay.HATCH_SENTRY_SURFACES.LANDING
                }
              }, "Could not resolve a landing video"), t = []
            }
            n.set(r, t)
          }
          if (e.signal.aborted) return;
          let i = function(e, t, n) {
            let r = `${t}_${n}`;
            return e.find(e => e.key === r) ?? null
          }(t, a, c);
          if (null != i) return void d(i)
        }
      })(), () => e.abort()
    }, i = [c, f, s], o[4] = c, o[5] = s, o[6] = f, o[7] = a, o[8] = i) : (a = o[7], i = o[8]), (0, m.useEffect)(a, i), u
  }

  function it(e) {
    let t = e.split(":"),
      [n, r] = t;
    return 2 === t.length && a4.some(e => e === n) && a5.some(e => e === r) ? [{
      catalog: n,
      key: r
    }] : []
  }

  function ir(e) {
    let {
      catalog: t,
      key: n
    } = e;
    return `${t}:${n}`
  }

  function ia(e) {
    let r, a, i, o, s, l, c, u, d, f, h, p, _, g, v, y, b = (0, n.c)(37),
      {
        sources: x,
        poster: w,
        posterSrc: k,
        label: C,
        subsurface: S
      } = e,
      E = ie(x),
      T = (0, r2.useReducedMotion)(),
      N = (0, m.useRef)(null),
      [A, R] = (0, m.useState)(!1),
      [I, O] = (0, m.useState)(!1),
      [L, j] = (0, m.useState)(!1),
      [P, M] = (0, m.useState)(!1),
      D = (0, a1.useIsTouchDevice)() && P || L,
      [H, F] = (0, m.useState)(!1),
      U = `landing_autoplay_${S}`;
    b[0] !== S ? (r = {
      surface: "landing",
      subsurface: S
    }, b[0] = S, b[1] = r) : r = b[1], b[2] !== U || b[3] !== r ? (a = {
      eventName: aV.HatchImpressionEvent.LANDING_VIDEO_AUTOPLAY_IMPRESSION,
      actionTarget: U,
      metadata: r
    }, b[2] = U, b[3] = r, b[4] = a) : a = b[4], b[5] === Symbol.for("react.memo_cache_sentinel") ? (i = {
      threshold: "50%",
      once: !0
    }, b[5] = i) : i = b[5];
    let {
      ref: G
    } = (0, aE.useTrackedImpressionRef)(a, i);
    b[6] === Symbol.for("react.memo_cache_sentinel") ? (o = e => {
      O(e), e && R(!0)
    }, s = {
      threshold: .25
    }, b[6] = o, b[7] = s) : (o = b[6], s = b[7]);
    let B = (0, a2.useOnInView)(o, s),
      z = (0, ak.useMergeRefs)(B, H ? G : void 0);
    if (b[8] !== T || b[9] !== E ? (l = () => {
        null == E || T || F(!0)
      }, c = [E, T], b[8] = T, b[9] = E, b[10] = l, b[11] = c) : (l = b[10], c = b[11]), (0, m.useEffect)(l, c), b[12] !== I ? (u = () => {
        let e = N.current;
        null != e && (I ? e.play().catch(ii) : e.pause())
      }, b[12] = I, b[13] = u) : u = b[13], b[14] !== I || b[15] !== E ? (d = [I, E], b[14] = I, b[15] = E, b[16] = d) : d = b[16], (0, m.useEffect)(u, d), T) {
      let e;
      return b[17] !== C || b[18] !== w || b[19] !== k || b[20] !== x || b[21] !== S ? (e = (0, t.jsx)(io, {
        sources: x,
        poster: w,
        posterSrc: k,
        label: C,
        subsurface: S
      }), b[17] = C, b[18] = w, b[19] = k, b[20] = x, b[21] = S, b[22] = e) : e = b[22], e
    }
    return b[23] === Symbol.for("react.memo_cache_sentinel") ? (f = () => M(!0), h = () => j(!0), p = () => j(!1), _ = () => j(!0), g = e => {
      e.currentTarget.contains(e.relatedTarget) || j(!1)
    }, b[23] = f, b[24] = h, b[25] = p, b[26] = _, b[27] = g) : (f = b[23], h = b[24], p = b[25], _ = b[26], g = b[27]), b[28] !== A || b[29] !== D || b[30] !== C || b[31] !== w || b[32] !== E ? (v = null != E ? (0, t.jsx)(t.Fragment, {
      children: (0, t.jsx)("video", {
        ref: N,
        src: `${E.cdn_url}#t=1`,
        "aria-label": C,
        tabIndex: 0,
        muted: !0,
        controls: D,
        loop: !0,
        playsInline: !0,
        preload: A ? "auto" : "metadata",
        className: "landing-video-player size-full max-h-[65.6vh] object-cover"
      }, E.cdn_url)
    }) : w, b[28] = A, b[29] = D, b[30] = C, b[31] = w, b[32] = E, b[33] = v) : v = b[33], b[34] !== v || b[35] !== z ? (y = (0, t.jsx)("div", {
      ref: z,
      className: "size-full",
      onPointerUp: f,
      onPointerEnter: h,
      onPointerLeave: p,
      onFocusCapture: _,
      onBlurCapture: g,
      children: v
    }), b[34] = v, b[35] = z, b[36] = y) : y = b[36], y
  }

  function ii() {}

  function io(e) {
    let r, a, i, o, s = (0, n.c)(17),
      {
        sources: l,
        poster: c,
        posterSrc: u,
        label: d,
        subsurface: f
      } = e,
      h = ie(l),
      [p, _] = (0, m.useState)(!1),
      g = `landing_play_${f}`;
    s[0] !== f ? (r = {
      surface: "landing",
      subsurface: f
    }, s[0] = f, s[1] = r) : r = s[1], s[2] !== g || s[3] !== r ? (a = {
      eventName: aS.HatchClickEvent.LANDING_VIDEO_PLAY_CLICK,
      actionTarget: g,
      actionType: "click",
      metadata: r
    }, s[2] = g, s[3] = r, s[4] = a) : a = s[4];
    let {
      ref: v,
      onClick: y
    } = (0, aE.useTrackedClickRef)(a);
    if (p && null != h) {
      let e;
      return s[5] !== d || s[6] !== u || s[7] !== h.cdn_url ? (e = (0, t.jsx)("video", {
        src: h.cdn_url,
        poster: u,
        "aria-label": d,
        autoPlay: !0,
        controls: !0,
        playsInline: !0,
        preload: "auto",
        className: "landing-video-player size-full max-h-[65.6vh] object-cover"
      }), s[5] = d, s[6] = u, s[7] = h.cdn_url, s[8] = e) : e = s[8], e
    }
    return s[9] !== d || s[10] !== y || s[11] !== v || s[12] !== h ? (i = null != h ? (0, t.jsx)("button", {
      ref: v,
      type: "button",
      onClick: () => {
        y(), _(!0)
      },
      "aria-label": d,
      className: "group/play absolute inset-0 flex cursor-pointer items-center justify-center",
      children: (0, t.jsx)("span", {
        className: "bg-fill-blur-thick backdrop-blur-elevation-02 shadow-blur-elevation-02 flex size-16 items-center justify-center rounded-full",
        children: (0, t.jsx)("span", {
          className: "flex group-hover/play:opacity-60 group-active/play:opacity-60",
          children: (0, t.jsx)(ax.HatchIcon, {
            icon: a0.default,
            size: 24
          })
        })
      })
    }) : null, s[9] = d, s[10] = y, s[11] = v, s[12] = h, s[13] = i) : i = s[13], s[14] !== c || s[15] !== i ? (o = (0, t.jsxs)(t.Fragment, {
      children: [c, i]
    }), s[14] = c, s[15] = i, s[16] = o) : o = s[16], o
  }
  a0.default._isSVG = !0;
  var is = e.i(251932);

  function il(e) {
    let r, a, i, o, s = (0, n.c)(12),
      {
        className: l,
        headingId: c,
        headingLevel: u,
        title: d,
        description: f
      } = e,
      h = void 0 === u ? "h2" : u;
    return s[0] !== l ? (r = (0, r3.cn)("mx-auto max-w-3xl text-center [&>p]:mx-auto", l), s[0] = l, s[1] = r) : r = s[1], s[2] !== h || s[3] !== c || s[4] !== d ? (a = (0, t.jsx)(h, {
      id: c,
      className: "text-landing-section-heading text-text-primary text-balance",
      children: d
    }), s[2] = h, s[3] = c, s[4] = d, s[5] = a) : a = s[5], s[6] !== f ? (i = null != f && (0, t.jsx)("p", {
      className: "text-title-3 text-text-secondary mt-3 max-w-3xl text-pretty",
      children: f
    }), s[6] = f, s[7] = i) : i = s[7], s[8] !== r || s[9] !== a || s[10] !== i ? (o = (0, t.jsxs)("header", {
      className: r,
      children: [a, i]
    }), s[8] = r, s[9] = a, s[10] = i, s[11] = o) : o = s[11], o
  }

  function ic(e) {
    let r, a = (0, n.c)(8),
      {
        feature: i,
        fit: o,
        label: s
      } = e;
    if (a[0] !== i.imageClassName || a[1] !== i.imageSrc || a[2] !== i.imageSrcDark || a[3] !== i.imageSrcSet || a[4] !== i.imageSrcSetDark || a[5] !== o || a[6] !== s) {
      let e = (0, r3.cn)("size-full", "contain" === o ? "object-contain" : "object-cover", i.imageClassName),
        n = null == s || void 0,
        l = i.imageSrcDark !== i.imageSrc;
      r = (0, t.jsxs)(t.Fragment, {
        children: [(0, t.jsx)("img", {
          src: i.imageSrc,
          srcSet: i.imageSrcSet,
          alt: s ?? "",
          "aria-hidden": n,
          loading: "lazy",
          decoding: "async",
          className: (0, r3.cn)(e, l && "dark:hidden")
        }), l && (0, t.jsx)("img", {
          src: i.imageSrcDark,
          srcSet: i.imageSrcSetDark,
          alt: s ?? "",
          "aria-hidden": n,
          loading: "lazy",
          decoding: "async",
          className: (0, r3.cn)(e, "hidden dark:block")
        })]
      }), a[0] = i.imageClassName, a[1] = i.imageSrc, a[2] = i.imageSrcDark, a[3] = i.imageSrcSet, a[4] = i.imageSrcSetDark, a[5] = o, a[6] = s, a[7] = r
    } else r = a[7];
    return r
  }

  function iu(e) {
    let r, a, i, o, s, l, c, u, d, f, h, p, m, _ = (0, n.c)(37),
      {
        fill: g,
        featureId: v,
        feature: y,
        imageOnLeft: b,
        headingLevel: x
      } = e,
      w = void 0 === x ? "h3" : x,
      k = `landing-feature-${v}-title`,
      C = `landing_feature_${v}`;
    _[0] !== v ? (r = {
      surface: "landing",
      subsurface: "features",
      feature: v
    }, _[0] = v, _[1] = r) : r = _[1], _[2] !== C || _[3] !== r ? (a = {
      eventName: aV.HatchImpressionEvent.LANDING_FEATURE_IMPRESSION,
      actionTarget: C,
      metadata: r
    }, _[2] = C, _[3] = r, _[4] = a) : a = _[4], _[5] === Symbol.for("react.memo_cache_sentinel") ? (i = {
      threshold: "50%"
    }, _[5] = i) : i = _[5];
    let {
      ref: S
    } = (0, aE.useTrackedImpressionRef)(a, i), E = "primary" === g ? "bg-bg-primary" : "bg-fill-secondary";
    _[6] !== E ? (o = (0, r3.cn)("landing-feature-row w-full", E), _[6] = E, _[7] = o) : o = _[7];
    let T = b ? "md:order-2" : "md:order-1";
    _[8] !== T ? (s = (0, r3.cn)("order-1 flex flex-col justify-center text-center md:text-start", T), _[8] = T, _[9] = s) : s = _[9], _[10] !== w || _[11] !== y.title || _[12] !== k ? (l = (0, t.jsx)(w, {
      id: k,
      className: "text-landing-section-heading text-text-primary text-balance",
      children: y.title
    }), _[10] = w, _[11] = y.title, _[12] = k, _[13] = l) : l = _[13], _[14] !== y.description ? (c = (0, t.jsx)("p", {
      className: "text-landing-body text-text-secondary mx-auto mt-3 max-w-xl text-pretty md:mx-0",
      children: y.description
    }), _[14] = y.description, _[15] = c) : c = _[15], _[16] !== l || _[17] !== c || _[18] !== s ? (u = (0, t.jsxs)("div", {
      className: s,
      children: [l, c]
    }), _[16] = l, _[17] = c, _[18] = s, _[19] = u) : u = _[19];
    let N = b ? "md:order-1" : "md:order-2";
    _[20] !== N ? (d = (0, r3.cn)("order-2 flex items-center justify-center", N), _[20] = N, _[21] = d) : d = _[21];
    let A = y.fit ?? "cover";
    return _[22] !== y || _[23] !== A ? (f = (0, t.jsx)("div", {
      className: "squircle-32 aspect-square max-h-[80vh] w-full max-w-[80vh] overflow-hidden",
      children: (0, t.jsx)(ic, {
        feature: y,
        fit: A,
        label: y.imageAlt
      })
    }), _[22] = y, _[23] = A, _[24] = f) : f = _[24], _[25] !== d || _[26] !== f ? (h = (0, t.jsx)("div", {
      className: d,
      children: f
    }), _[25] = d, _[26] = f, _[27] = h) : h = _[27], _[28] !== u || _[29] !== h ? (p = (0, t.jsxs)("div", {
      className: "mx-auto grid w-full max-w-[1440px] items-center gap-4 px-5 py-14 md:grid-cols-2 md:gap-12 md:px-10 lg:gap-16 lg:px-14",
      children: [u, h]
    }), _[28] = u, _[29] = h, _[30] = p) : p = _[30], _[31] !== g || _[32] !== k || _[33] !== S || _[34] !== p || _[35] !== o ? (m = (0, t.jsx)(aP.EctoErrorBoundary, {
      surface: ay.HATCH_SENTRY_SURFACES.LANDING,
      children: (0, t.jsx)("section", {
        ref: S,
        "aria-labelledby": k,
        "data-landing-feature-fill": g,
        className: o,
        children: p
      })
    }), _[31] = g, _[32] = k, _[33] = S, _[34] = p, _[35] = o, _[36] = m) : m = _[36], m
  }

  function id(e) {
    let a, o, s, l, c, u, d, f, h, p, m = (0, n.c)(26),
      {
        title: _,
        description: g,
        sources: v,
        revealFill: y,
        fillRef: b,
        mediaRef: x,
        pinRef: w,
        sectionRef: k
      } = e,
      C = aJ();
    return m[0] === Symbol.for("react.memo_cache_sentinel") ? (a = r.fbs._("{productName} introduction", [r.fbs._param("productName", i)], {
      hk: "U8sYq"
    }), m[0] = a) : a = m[0], m[1] !== y ? (o = y ? void 0 : {
      opacity: 1
    }, m[1] = y, m[2] = o) : o = m[2], m[3] !== b || m[4] !== o ? (s = (0, t.jsx)("div", {
      ref: b,
      "aria-hidden": "true",
      className: "bg-fill-secondary absolute inset-0 -z-10",
      style: o
    }), m[3] = b, m[4] = o, m[5] = s) : s = m[5], m[6] !== g || m[7] !== _ ? (l = (0, t.jsx)(il, {
      className: "px-4",
      headingId: "landing-introduction-video-title",
      title: _,
      description: g
    }), m[6] = g, m[7] = _, m[8] = l) : l = m[8], m[9] === Symbol.for("react.memo_cache_sentinel") ? (c = (0, t.jsx)("img", {
      src: "/images/landing/placeholders/sizzle.png",
      alt: r.fbs._("The {productName} app icon", [r.fbs._param("productName", i)], {
        hk: "2975xv"
      }),
      className: "size-full max-h-[65.6vh] object-cover"
    }), m[9] = c) : c = m[9], m[10] !== v || m[11] !== C.sizzle ? (u = (0, t.jsx)(ia, {
      sources: v,
      posterSrc: "/images/landing/placeholders/sizzle.png",
      label: C.sizzle,
      subsurface: "introduction_video",
      poster: c
    }), m[10] = v, m[11] = C.sizzle, m[12] = u) : u = m[12], m[13] !== x || m[14] !== u ? (d = (0, t.jsx)("div", {
      ref: x,
      className: "squircle-24 relative aspect-[4/5] max-h-[65.6vh] w-full overflow-hidden will-change-transform md:aspect-video",
      children: u
    }), m[13] = x, m[14] = u, m[15] = d) : d = m[15], m[16] !== w || m[17] !== d ? (f = (0, t.jsx)("div", {
      className: "mt-10",
      children: (0, t.jsx)("div", {
        "data-landing-video-stage": !0,
        children: (0, t.jsx)("div", {
          children: (0, t.jsx)("div", {
            ref: w,
            className: "mx-auto w-full max-w-[116.622222vh] md:w-[82%]",
            children: d
          })
        })
      })
    }), m[16] = w, m[17] = d, m[18] = f) : f = m[18], m[19] !== l || m[20] !== f ? (h = (0, t.jsxs)("div", {
      className: "mx-auto w-full max-w-[1440px] px-5 md:px-10 lg:px-14",
      children: [l, f]
    }), m[19] = l, m[20] = f, m[21] = h) : h = m[21], m[22] !== k || m[23] !== s || m[24] !== h ? (p = (0, t.jsxs)("section", {
      ref: k,
      tabIndex: -1,
      role: "region",
      "aria-label": a,
      "data-landing-video-section": !0,
      className: "landing-video-theme-section relative isolate w-full py-14 md:pb-24",
      children: [s, h]
    }), m[22] = k, m[23] = s, m[24] = h, m[25] = p) : p = m[25], p
  }

  function ih(e) {
    let r, a, i, o, s = (0, n.c)(9),
      {
        label: l,
        featureListRef: c,
        children: u
      } = e;
    s[0] === Symbol.for("react.memo_cache_sentinel") ? (r = {
      eventName: aV.HatchImpressionEvent.LANDING_VALUE_PROPS_IMPRESSION,
      actionTarget: "landing_value_props",
      metadata: {
        surface: "landing",
        subsurface: "value_props"
      }
    }, a = {
      threshold: "50%"
    }, s[0] = r, s[1] = a) : (r = s[0], a = s[1]);
    let {
      ref: d
    } = (0, aE.useTrackedImpressionRef)(r, a);
    return s[2] !== u || s[3] !== c || s[4] !== l ? (i = (0, t.jsx)("div", {
      ref: c,
      role: "region",
      "aria-label": l,
      children: u
    }), s[2] = u, s[3] = c, s[4] = l, s[5] = i) : i = s[5], s[6] !== d || s[7] !== i ? (o = (0, t.jsx)("section", {
      ref: d,
      children: i
    }), s[6] = d, s[7] = i, s[8] = o) : o = s[8], o
  }

  function ip(e) {
    let a, i, s, l, c, u, d, f, h, p, m, _, g, v, y = (0, n.c)(38),
      {
        title: b,
        fullWidth: x,
        showAppDownloads: w,
        onReturnToLogin: k,
        continueTo: C
      } = e,
      S = void 0 !== x && x,
      E = (0, aM.useIsMobileBreakpoint)();
    y[0] === Symbol.for("react.memo_cache_sentinel") ? (a = {
      eventName: aS.HatchClickEvent.LANDING_GET_APPS_CLICK,
      actionTarget: "landing_end_card_get_apps",
      actionType: "click",
      metadata: {
        surface: "landing",
        subsurface: "get_started"
      }
    }, y[0] = a) : a = y[0];
    let {
      ref: T,
      onClick: N
    } = (0, aE.useTrackedClickRef)(a);
    y[1] === Symbol.for("react.memo_cache_sentinel") ? (i = {
      eventName: aV.HatchImpressionEvent.LANDING_GET_STARTED_IMPRESSION,
      actionTarget: "landing_get_started",
      metadata: {
        surface: "landing",
        subsurface: "get_started"
      }
    }, s = {
      threshold: "50%"
    }, y[1] = i, y[2] = s) : (i = y[1], s = y[2]);
    let {
      ref: A
    } = (0, aE.useTrackedImpressionRef)(i, s);
    y[3] === Symbol.for("react.memo_cache_sentinel") ? (l = {
      eventName: aS.HatchClickEvent.LOGGED_OUT_LOGIN_CLICK,
      actionTarget: "landing_get_started",
      actionType: "click",
      metadata: {
        surface: "landing",
        subsurface: "get_started"
      }
    }, y[3] = l) : l = y[3];
    let {
      ref: R,
      onClick: I
    } = (0, aE.useTrackedClickRef)(l);
    y[4] !== C || y[5] !== R || y[6] !== I || y[7] !== k ? (c = null != C ? (0, t.jsx)(aT, {
      href: C,
      subsurface: "get_started",
      className: "text-body-medium mx-auto h-12 w-fit max-w-full px-8"
    }) : (0, t.jsx)(aw.Button, {
      ref: R,
      type: "button",
      fullWidth: !0,
      label: r.fbt._("Log in", null, {
        hk: "kvFwC"
      }),
      radius: "rounded",
      size: "36",
      variant: "primary",
      className: "dark:text-text-on-accent h-12 px-8",
      onClick: () => {
        I(), k()
      }
    }), y[4] = C, y[5] = R, y[6] = I, y[7] = k, y[8] = c) : c = y[8];
    let O = c,
      L = S && "bg-bg-primary w-full";
    y[9] !== L ? (u = (0, r3.cn)(o, "justify-center", L), y[9] = L, y[10] = u) : u = y[10];
    let j = S && "mx-auto w-full max-w-[1440px] px-5 md:px-10 lg:px-14";
    y[11] !== j ? (d = (0, r3.cn)("flex flex-col items-center text-center", j), y[11] = j, y[12] = d) : d = y[12], y[13] !== b ? (f = (0, t.jsx)("h2", {
      id: "landing-get-started-title",
      className: "text-landing-section-heading text-text-primary text-balance",
      children: b
    }), y[13] = b, y[14] = f) : f = y[14];
    let P = !E && O,
      M = E ? O : null,
      D = E ? "min-h-27" : "min-h-12",
      H = E && O;
    return y[15] !== D || y[16] !== H ? (h = (0, t.jsx)("div", {
      className: D,
      children: H
    }), y[15] = D, y[16] = H, y[17] = h) : h = y[17], y[18] !== T || y[19] !== E || y[20] !== N ? (p = E ? (0, t.jsx)(aj, {
      subsurface: "mobile_app_download"
    }) : (0, t.jsx)(aX, {
      children: (0, t.jsx)(aw.Button, {
        ref: T,
        type: "button",
        fullWidth: !0,
        label: r.fbs._("Download apps", null, {
          hk: "hBQxp"
        }),
        leadingIcon: is.default,
        radius: "rounded",
        size: "36",
        variant: "flat",
        className: "text-text-primary h-12 px-8",
        onClick: () => N()
      })
    }), y[18] = T, y[19] = E, y[20] = N, y[21] = p) : p = y[21], y[22] !== w || y[23] !== M || y[24] !== h || y[25] !== p ? (m = (0, t.jsx)(aZ, {
      showAppDownloads: w,
      fallback: M,
      pendingFallback: h,
      children: p
    }), y[22] = w, y[23] = M, y[24] = h, y[25] = p, y[26] = m) : m = y[26], y[27] !== P || y[28] !== m ? (_ = (0, t.jsxs)("div", {
      className: "mt-8 flex w-64 max-w-full flex-col gap-3",
      children: [P, m]
    }), y[27] = P, y[28] = m, y[29] = _) : _ = y[29], y[30] !== d || y[31] !== f || y[32] !== _ ? (g = (0, t.jsxs)("div", {
      className: d,
      children: [f, _]
    }), y[30] = d, y[31] = f, y[32] = _, y[33] = g) : g = y[33], y[34] !== A || y[35] !== g || y[36] !== u ? (v = (0, t.jsx)("section", {
      ref: A,
      "aria-labelledby": "landing-get-started-title",
      className: u,
      children: g
    }), y[34] = A, y[35] = g, y[36] = u, y[37] = v) : v = y[37], v
  }

  function im() {
    let e, a, o, s, l, c, u, d, f, p, m, _ = (0, n.c)(14);
    _[0] === Symbol.for("react.memo_cache_sentinel") ? (e = {
      eventName: aS.HatchClickEvent.LANDING_FEATURE_LINK_CLICK,
      actionTarget: "landing_purchase_protections",
      actionType: "click",
      metadata: {
        surface: "landing",
        subsurface: "features",
        link: "purchase_protections"
      }
    }, _[0] = e) : e = _[0];
    let {
      ref: g,
      onClick: v
    } = (0, aE.useTrackedClickRef)(e);
    return _[1] === Symbol.for("react.memo_cache_sentinel") ? (a = r.fbs._("Stay in control of what your agent does", null, {
      hk: "VtfGm"
    }), o = r.fbs._("Approve actions your agent takes on your behalf before they happen, like sending emails and making purchases. See a complete audit trail of everything your agent has done (and what it's planning to do).", null, {
      hk: "3tKKlO"
    }), _[1] = a, _[2] = o) : (a = _[1], o = _[2]), _[3] === Symbol.for("react.memo_cache_sentinel") ? (s = {
      title: a,
      description: o,
      ...h.approvals,
      imageAlt: r.fbs._("Floating purchase, message, activity, permission, and decision controls", null, {
        hk: "27a26s"
      })
    }, l = r.fbs._("Proactively helps with your goals and suggests ideas", null, {
      hk: "3mVDd4"
    }), c = r.fbs._("{productName} helps you stay on top of things, takes tasks and projects off your plate, and turns long-term goals into real progress. It learns from conversations, reflects on what matters and gets sharper, coming back with ideas built around what you actually need, ready to act on them under your direction.", [r.fbs._param("productName", i)], {
      hk: "4n4ABh"
    }), _[3] = s, _[4] = l, _[5] = c) : (s = _[3], l = _[4], c = _[5]), _[6] === Symbol.for("react.memo_cache_sentinel") ? (u = {
      title: l,
      description: c,
      ...h.goals,
      imageAlt: r.fbs._("Floating checklist, calendar, route, progress, and idea panels", null, {
        hk: "1u2to6"
      })
    }, d = r.fbs._("Your data is kept secure and private", null, {
      hk: "oWxPw"
    }), _[6] = u, _[7] = d) : (u = _[6], d = _[7]), _[8] !== v || _[9] !== g ? (f = r.fbt._("Save your logins to a secure credential store {productName} can't see, with {passwordManager} integration coming soon. When shopping, a one-time card number is generated at checkout so your real card stays hidden from the merchant and your agent. Eligible purchases are covered by {purchaseProtections}, a first for AI agents, and your conversations are not shared with Meta's ad systems.", [r.fbt._param("productName", i), r.fbt._param("passwordManager", (0, t.jsx)("span", {
      className: "text-landing-body-medium",
      children: "1Password"
    })), r.fbt._param("purchaseProtections", (0, t.jsx)(ab.EctoAnchor, {
      ref: g,
      href: "https://link.com/protections",
      skipLinkshim: !0,
      target: "_blank",
      rel: "noreferrer",
      onClick: () => v(),
      className: "text-text-primary-link cursor-pointer no-underline hover:underline",
      children: r.fbt._("Link's purchase protections", null, {
        hk: "3PGuUL"
      })
    }))], {
      hk: "3fjxv8"
    }), _[8] = v, _[9] = g, _[10] = f) : f = _[10], _[11] === Symbol.for("react.memo_cache_sentinel") ? (p = r.fbs._("A vault, privacy shield, masked credential, security control, and virtual card", null, {
      hk: "2BUHtE"
    }), _[11] = p) : p = _[11], _[12] !== f ? (m = {
      approvals: s,
      goals: u,
      privacy: {
        title: d,
        description: f,
        ...h.privacy,
        imageAlt: p
      }
    }, _[12] = f, _[13] = m) : m = _[13], m
  }
  is.default._isSVG = !0;
  var i_ = e.i(374180);
  i_.default._isSVG = !0;
  let ig = ["overview", "opportunity", "conversations", "controls", "follow_through", "contextual_tools"],
    iv = {
      overview: d("business/messaging", {
        hasDarkVariant: !1
      }),
      opportunity: d("business/planning", {
        hasDarkVariant: !1
      }),
      conversations: d("business/connectors", {
        hasDarkVariant: !1
      }),
      controls: d("business/approvals", {
        hasDarkVariant: !1
      }),
      follow_through: d("business/goals", {
        hasDarkVariant: !1
      }),
      contextual_tools: h.privacy
    },
    iy = "https://about.fb.com/news/2026/09/introducing-muse-small-business",
    ib = "landing-business-new-tab-description";

  function ix(e) {
    let a, i, o, s, l, c, u, d, f, h, p, m, _, g, v, y = (0, n.c)(27),
      {
        mediaRef: b,
        pinRef: x
      } = e;
    y[0] === Symbol.for("react.memo_cache_sentinel") ? (a = {
      eventName: aV.HatchImpressionEvent.LANDING_FEATURE_IMPRESSION,
      actionTarget: "landing_feature_founder_stories",
      metadata: {
        surface: "landing",
        subsurface: "business_modules",
        feature: "founder-stories"
      }
    }, i = {
      threshold: "50%"
    }, y[0] = a, y[1] = i) : (a = y[0], i = y[1]);
    let {
      ref: w
    } = (0, aE.useTrackedImpressionRef)(a, i), k = aJ();
    y[2] === Symbol.for("react.memo_cache_sentinel") ? (o = {
      eventName: aS.HatchClickEvent.LANDING_FEATURE_LINK_CLICK,
      actionTarget: "landing_newsroom_post",
      actionType: "click",
      metadata: {
        surface: "landing",
        subsurface: "business_founder_stories",
        link: "newsroom_post"
      }
    }, y[2] = o) : o = y[2];
    let {
      ref: C,
      onClick: S
    } = (0, aE.useTrackedClickRef)(o);
    return y[3] === Symbol.for("react.memo_cache_sentinel") ? (s = (0, t.jsx)(il, {
      className: "px-4",
      headingId: "landing-founder-stories-title",
      title: r.fbt._("See how small businesses are using Muse", null, {
        hk: "1nd0x8"
      }),
      description: r.fbt._("Henry Bennett of Bennett Orchards, sixth generation grower, uses Muse to take his operations to the next level.", null, {
        hk: "15vUF3"
      })
    }), y[3] = s) : s = y[3], y[4] !== S ? (l = () => S(), y[4] = S, y[5] = l) : l = y[5], y[6] === Symbol.for("react.memo_cache_sentinel") ? (c = (0, r3.cn)((0, aC.buttonVariants)({
      radius: "rounded",
      size: "36",
      variant: "flat"
    }), "text-text-primary h-10.5 px-4 no-underline"), u = r.fbt._("Learn more", null, {
      hk: "1foZDc"
    }), y[6] = c, y[7] = u) : (c = y[6], u = y[7]), y[8] !== C || y[9] !== l ? (d = (0, t.jsx)("div", {
      className: "mt-6 flex justify-center",
      children: (0, t.jsx)(ab.EctoAnchor, {
        ref: C,
        href: iy,
        skipLinkshim: !0,
        target: "_blank",
        rel: "noreferrer",
        "aria-describedby": ib,
        onClick: l,
        className: c,
        children: u
      })
    }), y[8] = C, y[9] = l, y[10] = d) : d = y[10], y[11] === Symbol.for("react.memo_cache_sentinel") ? (f = [{
      catalog: "business",
      key: "muse_demo"
    }], y[11] = f) : f = y[11], y[12] === Symbol.for("react.memo_cache_sentinel") ? (h = (0, t.jsx)("img", {
      src: "/images/landing/business/founder-poster.webp",
      srcSet: "/images/landing/business/founder-poster.webp 1x, /images/landing/business/founder-poster@2x.webp 2x",
      alt: r.fbs._("Three people harvesting peaches into wooden baskets in an orchard", null, {
        hk: "3xnYMD"
      }),
      loading: "lazy",
      decoding: "async",
      className: "size-full object-cover"
    }), y[12] = h) : h = y[12], y[13] !== k.founder ? (p = (0, t.jsx)(io, {
      sources: f,
      posterSrc: "/images/landing/business/founder-poster@2x.webp",
      label: k.founder,
      subsurface: "founder_film",
      poster: h
    }), y[13] = k.founder, y[14] = p) : p = y[14], y[15] !== b || y[16] !== p ? (m = (0, t.jsx)("div", {
      ref: b,
      "data-landing-video-theme-surface": !0,
      className: "bg-fill-secondary squircle-24 relative flex aspect-[4/5] max-h-[65.6vh] w-full items-center justify-center overflow-hidden will-change-transform md:aspect-video",
      children: p
    }), y[15] = b, y[16] = p, y[17] = m) : m = y[17], y[18] !== x || y[19] !== m ? (_ = (0, t.jsx)("div", {
      className: "mt-10",
      children: (0, t.jsx)("div", {
        "data-landing-video-stage": !0,
        children: (0, t.jsx)("div", {
          children: (0, t.jsx)("div", {
            ref: x,
            className: "mx-auto w-full max-w-[116.622222vh] md:w-[82%]",
            children: m
          })
        })
      })
    }), y[18] = x, y[19] = m, y[20] = _) : _ = y[20], y[21] !== _ || y[22] !== d ? (g = (0, t.jsxs)("div", {
      className: "mx-auto w-full max-w-[1440px] px-5 md:px-10 lg:px-14",
      children: [s, d, _]
    }), y[21] = _, y[22] = d, y[23] = g) : g = y[23], y[24] !== w || y[25] !== g ? (v = (0, t.jsx)("section", {
      ref: w,
      "aria-labelledby": "landing-founder-stories-title",
      "data-landing-business-module": "founder-stories",
      "data-landing-video-section": !0,
      className: "landing-video-theme-section bg-bg-primary py-14 md:pt-24",
      children: g
    }), y[24] = w, y[25] = g, y[26] = v) : v = y[26], v
  }

  function iw(e) {
    let r, a, i, o, s, l, c, u = (0, n.c)(16),
      {
        answer: d,
        id: f,
        question: h
      } = e;
    u[0] !== f ? (r = {
      eventName: aS.HatchClickEvent.LANDING_FAQ_TOGGLE_CLICK,
      actionTarget: "landing_faq_toggle",
      actionType: "click",
      metadata: {
        surface: "landing",
        subsurface: "business_faq",
        question: f
      }
    }, u[0] = f, u[1] = r) : r = u[1];
    let {
      ref: p,
      onClick: m
    } = (0, aE.useTrackedClickRef)(r);
    return u[2] !== m ? (a = () => m(), u[2] = m, u[3] = a) : a = u[3], u[4] !== h ? (i = (0, t.jsx)("h3", {
      className: "min-w-0 flex-1",
      children: h
    }), u[4] = h, u[5] = i) : i = u[5], u[6] === Symbol.for("react.memo_cache_sentinel") ? (o = (0, t.jsx)("span", {
      "aria-hidden": "true",
      className: "text-icon-secondary shrink-0 group-open:rotate-180",
      children: (0, t.jsx)(ax.HatchIcon, {
        icon: i_.default,
        size: 20
      })
    }), u[6] = o) : o = u[6], u[7] !== p || u[8] !== a || u[9] !== i ? (s = (0, t.jsxs)("summary", {
      ref: p,
      onClick: a,
      className: "text-title-3-emphasized text-text-primary focus-visible:outline-hatch-accent flex min-h-16 cursor-pointer list-none items-center gap-4 px-5 py-4 focus-visible:outline-2 focus-visible:-outline-offset-2 [&::-webkit-details-marker]:hidden",
      children: [i, o]
    }), u[7] = p, u[8] = a, u[9] = i, u[10] = s) : s = u[10], u[11] !== d ? (l = (0, t.jsx)("p", {
      className: "text-body text-text-secondary border-fill-divider mx-5 border-t py-4 text-pretty",
      children: d
    }), u[11] = d, u[12] = l) : l = u[12], u[13] !== s || u[14] !== l ? (c = (0, t.jsxs)("details", {
      className: "group border-fill-divider bg-bg-primary rounded-20 border",
      children: [s, l]
    }), u[13] = s, u[14] = l, u[15] = c) : c = u[15], c
  }

  function ik() {
    let e, a, i, o, c, u, d, f, h, p, m, _, g, v, y, b, x, w, k, C, S = (0, n.c)(34);
    S[0] === Symbol.for("react.memo_cache_sentinel") ? (e = {
      eventName: aS.HatchClickEvent.LANDING_FEATURE_LINK_CLICK,
      actionTarget: "landing_subscription_plans",
      actionType: "click",
      metadata: {
        surface: "landing",
        subsurface: "business_faq",
        link: "subscription_plans"
      }
    }, S[0] = e) : e = S[0];
    let {
      ref: E,
      onClick: T
    } = (0, aE.useTrackedClickRef)(e);
    S[1] === Symbol.for("react.memo_cache_sentinel") ? (a = {
      eventName: aS.HatchClickEvent.LANDING_FEATURE_LINK_CLICK,
      actionTarget: "landing_newsroom_post",
      actionType: "click",
      metadata: {
        surface: "landing",
        subsurface: "business_faq",
        link: "newsroom_post"
      }
    }, S[1] = a) : a = S[1];
    let {
      ref: N,
      onClick: A
    } = (0, aE.useTrackedClickRef)(a);
    S[2] === Symbol.for("react.memo_cache_sentinel") ? (i = {
      eventName: aS.HatchClickEvent.LANDING_FEATURE_LINK_CLICK,
      actionTarget: "landing_safety_article",
      actionType: "click",
      metadata: {
        surface: "landing",
        subsurface: "business_faq",
        link: "safety_article"
      }
    }, S[2] = i) : i = S[2];
    let {
      ref: R,
      onClick: I
    } = (0, aE.useTrackedClickRef)(i);
    S[3] === Symbol.for("react.memo_cache_sentinel") ? (o = {
      eventName: aS.HatchClickEvent.LANDING_FEATURE_LINK_CLICK,
      actionTarget: "landing_design_article",
      actionType: "click",
      metadata: {
        surface: "landing",
        subsurface: "business_faq",
        link: "design_article"
      }
    }, S[3] = o) : o = S[3];
    let {
      ref: O,
      onClick: L
    } = (0, aE.useTrackedClickRef)(o);
    S[4] === Symbol.for("react.memo_cache_sentinel") ? (c = r.fbs._("What is Muse?", null, {
      hk: "3R3eU4"
    }), S[4] = c) : c = S[4], S[5] !== O || S[6] !== L || S[7] !== I || S[8] !== R ? (u = {
      id: "what_is_muse",
      question: c,
      answer: r.fbt._("An AI agent that works for you to help you accomplish your or your small business goals and focus on what matters most. You tell it what you want to achieve, and it keeps working across the apps and services you connect, even after you close it. You're in control: nothing publishes, sends, or spends without your approval. For a deeper look at how Muse was designed and how safety, security, and privacy were built into it, read {safetyArticle} and {designArticle}.", [r.fbt._param("safetyArticle", (0, t.jsx)(ab.EctoAnchor, {
        ref: R,
        href: l,
        skipLinkshim: !0,
        target: "_blank",
        rel: "noreferrer",
        "aria-describedby": ib,
        onClick: () => I(),
        className: "text-text-primary-link cursor-pointer underline hover:brightness-95 dark:hover:brightness-110",
        children: r.fbt._("How We Built Safety Into Muse", null, {
          hk: "3L3dfI"
        })
      })), r.fbt._param("designArticle", (0, t.jsx)(ab.EctoAnchor, {
        ref: O,
        href: s,
        skipLinkshim: !0,
        target: "_blank",
        rel: "noreferrer",
        "aria-describedby": ib,
        onClick: () => L(),
        className: "text-text-primary-link cursor-pointer underline hover:brightness-95 dark:hover:brightness-110",
        children: r.fbt._("How We Designed Muse", null, {
          hk: "P9DVg"
        })
      }))], {
        hk: "14oEBC"
      })
    }, S[5] = O, S[6] = L, S[7] = I, S[8] = R, S[9] = u) : u = S[9], S[10] === Symbol.for("react.memo_cache_sentinel") ? (d = r.fbs._("What does it cost?", null, {
      hk: "3ulyir"
    }), S[10] = d) : d = S[10], S[11] !== T || S[12] !== E ? (f = {
      id: "cost",
      question: d,
      answer: r.fbt._("Muse is free for most of what people need, in line with our vision to put superintelligence in the hands of as many people as possible. For those who want more, we're offering {subscriptionPlans}.", [r.fbt._param("subscriptionPlans", (0, t.jsx)(ab.EctoAnchor, {
        ref: E,
        href: "https://www.meta.com/help/subscriptions/1021145227643680/",
        skipLinkshim: !0,
        target: "_blank",
        rel: "noreferrer",
        "aria-describedby": ib,
        onClick: () => T(),
        className: "text-text-primary-link cursor-pointer underline hover:brightness-95 dark:hover:brightness-110",
        children: r.fbt._("subscription plans", null, {
          hk: "1NbytF"
        })
      }))], {
        hk: "1P1Tb6"
      })
    }, S[11] = T, S[12] = E, S[13] = f) : f = S[13], S[14] === Symbol.for("react.memo_cache_sentinel") ? (h = {
      id: "setup",
      question: r.fbs._("What do I have to set up?", null, {
        hk: "3WnRhX"
      }),
      answer: r.fbs._("You can now connect more tools you're already using in a few clicks including Asana, Box, Canva, Dropbox, Figma, Granola, HighLevel, Intuit QuickBooks, Klaviyo, Lovable, Notion, Shopify, Slack, Stripe, Zoom as well as your Facebook and Instagram business accounts, and Muse will start out already understanding your business.", null, {
        hk: "2CJoI3"
      })
    }, S[14] = h) : h = S[14], S[15] === Symbol.for("react.memo_cache_sentinel") ? (p = {
      id: "approval",
      question: r.fbs._("Will it post or spend money without asking?", null, {
        hk: "1bHedN"
      }),
      answer: r.fbs._("No. Nothing publishes, sends or spends without your approval, and you can undo it.", null, {
        hk: "3BA734"
      })
    }, S[15] = p) : p = S[15], S[16] === Symbol.for("react.memo_cache_sentinel") ? (m = {
      id: "tools",
      question: r.fbs._("What other tools does it work with?", null, {
        hk: "3P8hzt"
      }),
      answer: r.fbs._("You can see the full list of available connectors in settings, with more to come.", null, {
        hk: "3Ubovx"
      })
    }, S[16] = m) : m = S[16], S[17] === Symbol.for("react.memo_cache_sentinel") ? (_ = {
      id: "availability",
      question: r.fbs._("Where is it available?", null, {
        hk: "2lkDp7"
      }),
      answer: r.fbs._("Available today to people in the US and Canada who are 18 and over. We're working to bring Muse to more markets, and we're taking a measured approach in each one. We don't have additional timing to share now.", null, {
        hk: "3nM9hz"
      })
    }, S[17] = _) : _ = S[17], S[18] === Symbol.for("react.memo_cache_sentinel") ? (g = r.fbs._("Where can I learn more?", null, {
      hk: "3j7D3K"
    }), S[18] = g) : g = S[18], S[19] !== A || S[20] !== N ? (v = {
      id: "learn_more",
      question: g,
      answer: r.fbt._("You can learn more in our {newsroomPost}.", [r.fbt._param("newsroomPost", (0, t.jsx)(ab.EctoAnchor, {
        ref: N,
        href: iy,
        skipLinkshim: !0,
        target: "_blank",
        rel: "noreferrer",
        "aria-describedby": ib,
        onClick: () => A(),
        className: "text-text-primary-link cursor-pointer underline hover:brightness-95 dark:hover:brightness-110",
        children: r.fbt._("Newsroom post", null, {
          hk: "1LxkPX"
        })
      }))], {
        hk: "1BKdYw"
      })
    }, S[19] = A, S[20] = N, S[21] = v) : v = S[21], S[22] !== v || S[23] !== u || S[24] !== f ? (y = [u, f, h, p, m, _, v], S[22] = v, S[23] = u, S[24] = f, S[25] = y) : y = S[25];
    let j = y;
    S[26] === Symbol.for("react.memo_cache_sentinel") ? (b = {
      eventName: aV.HatchImpressionEvent.LANDING_FEATURE_IMPRESSION,
      actionTarget: "landing_feature_faq",
      metadata: {
        surface: "landing",
        subsurface: "business_modules",
        feature: "faq"
      }
    }, x = {
      threshold: "50%"
    }, S[26] = b, S[27] = x) : (b = S[26], x = S[27]);
    let {
      ref: P
    } = (0, aE.useTrackedImpressionRef)(b, x);
    return S[28] === Symbol.for("react.memo_cache_sentinel") ? (w = (0, t.jsx)(il, {
      headingId: "landing-business-faq-title",
      title: r.fbt._("Questions, answered", null, {
        hk: "3jwmSe"
      })
    }), S[28] = w) : w = S[28], S[29] !== j ? (k = (0, t.jsxs)("div", {
      className: "mx-auto w-full max-w-[1440px] px-5 md:px-10 lg:px-14",
      children: [w, (0, t.jsx)("div", {
        className: "mx-auto mt-10 flex w-full max-w-4xl flex-col gap-3",
        children: j.map(iC)
      })]
    }), S[29] = j, S[30] = k) : k = S[30], S[31] !== P || S[32] !== k ? (C = (0, t.jsx)("section", {
      ref: P,
      "aria-labelledby": "landing-business-faq-title",
      "data-landing-business-module": "faq",
      className: "bg-fill-secondary w-full py-14 md:py-24",
      children: k
    }), S[31] = P, S[32] = k, S[33] = C) : C = S[33], C
  }

  function iC(e) {
    let {
      answer: n,
      id: r,
      question: a
    } = e;
    return (0, t.jsx)(iw, {
      answer: n,
      id: r,
      question: a
    }, r)
  }

  function iS(e, n) {
    let {
      featureId: r,
      feature: a
    } = e, i = n + 2;
    return (0, t.jsx)(iu, {
      fill: i % 2 == 0 ? "secondary" : "primary",
      featureId: r,
      feature: a,
      imageOnLeft: i % 2 == 0,
      headingLevel: "h2"
    }, r)
  }

  function iE(e, n) {
    let {
      featureId: r,
      feature: a
    } = e;
    return (0, t.jsx)(iu, {
      fill: n % 2 == 0 ? "primary" : "secondary",
      featureId: r,
      feature: a,
      imageOnLeft: n % 2 == 0,
      headingLevel: "h2"
    }, r)
  }

  function iT(e) {
    let a, o, s, l = (0, n.c)(5),
      {
        isActive: c,
        scrollerRef: d
      } = e;
    return l[0] === Symbol.for("react.memo_cache_sentinel") ? (a = [{
      text: r.fbs._("gets it done for you", null, {
        hk: "4YQ8f"
      })
    }, {
      text: r.fbs._("sorts your email", null, {
        hk: "48lwEq"
      }),
      icon: u.inbox
    }, {
      text: r.fbs._("books reservations", null, {
        hk: "1AHNZJ"
      }),
      icon: u.airplane
    }, {
      text: r.fbs._("shops for you", null, {
        hk: "2RZ9kQ"
      }),
      icon: u.shopping
    }, {
      text: r.fbs._("saves you money", null, {
        hk: "4DiXrc"
      }),
      icon: u.money
    }, {
      text: r.fbs._("manages calendars", null, {
        hk: "31irov"
      }),
      icon: u.calendar
    }, {
      text: r.fbs._("builds fitness plans", null, {
        hk: "3xcXKt"
      }),
      icon: u.fitness
    }], l[0] = a) : a = l[0], l[1] === Symbol.for("react.memo_cache_sentinel") ? (o = r.fbs._("{productName}, AI that gets it done for you", [r.fbs._param("productName", i)], {
      hk: "3WvhCE"
    }), l[1] = o) : o = l[1], l[2] !== c || l[3] !== d ? (s = (0, t.jsx)(ai, {
      className: "landing-hero-headline-gap",
      scrollerRef: d,
      headingId: "landing-hero-title",
      isActive: c,
      lineOne: iN,
      phrases: a,
      separateSemanticHeading: !1,
      semanticLabel: o
    }), l[2] = c, l[3] = d, l[4] = s) : s = l[4], s
  }

  function iN(e) {
    let {
      avatar: t
    } = e;
    return r.fbt._("{productName}{avatar}, AI that", [r.fbt._param("productName", i), r.fbt._param("avatar", t)], {
      hk: "ZZ567"
    })
  }
  var iA = e.i(991301),
    iR = e.i(482129),
    iI = e.i(367112),
    iO = e.i(227924);

  function iL(e) {
    let a, o, s, l, c, u, d, f, h, p = (0, n.c)(16),
      {
        mediaRef: m,
        pinRef: _
      } = e;
    p[0] === Symbol.for("react.memo_cache_sentinel") ? (a = {
      eventName: aV.HatchImpressionEvent.LANDING_PAGE_IMPRESSION,
      actionTarget: "landing_product_walkthrough",
      metadata: {
        surface: "landing",
        subsurface: "product_walkthrough"
      }
    }, o = {
      threshold: "50%"
    }, p[0] = a, p[1] = o) : (a = p[0], o = p[1]);
    let {
      ref: g
    } = (0, aE.useTrackedImpressionRef)(a, o), v = aJ();
    return p[2] === Symbol.for("react.memo_cache_sentinel") ? (s = (0, t.jsx)(il, {
      className: "px-4",
      headingId: "landing-product-walkthrough-title",
      title: r.fbt._("Get the most out of your {productName}", [r.fbt._param("productName", i)], {
        hk: "1Wu1G5"
      }),
      description: r.fbt._("A guided tour of {productName}, from setting a first goal to seeing it through.", [r.fbt._param("productName", i)], {
        hk: "LLIC4"
      })
    }), p[2] = s) : s = p[2], p[3] === Symbol.for("react.memo_cache_sentinel") ? (l = [{
      catalog: "muse",
      key: "muse_demo"
    }], p[3] = l) : l = p[3], p[4] === Symbol.for("react.memo_cache_sentinel") ? (c = (0, t.jsx)("img", {
      src: "/images/hatch/landing/product-walkthrough-cover.png",
      alt: r.fbs._("Product designer presenting a guided tour of Muse", null, {
        hk: "y3lNq"
      }),
      loading: "lazy",
      decoding: "async",
      className: "size-full object-cover"
    }), p[4] = c) : c = p[4], p[5] !== v.walkthrough ? (u = (0, t.jsx)(io, {
      sources: l,
      posterSrc: "/images/hatch/landing/product-walkthrough-cover.png",
      label: v.walkthrough,
      subsurface: "product_walkthrough",
      poster: c
    }), p[5] = v.walkthrough, p[6] = u) : u = p[6], p[7] !== m || p[8] !== u ? (d = (0, t.jsx)("div", {
      ref: m,
      "data-landing-video-theme-surface": !0,
      className: "bg-fill-secondary squircle-24 relative flex aspect-[4/5] max-h-[65.6vh] w-full items-center justify-center overflow-hidden will-change-transform md:aspect-video",
      children: u
    }), p[7] = m, p[8] = u, p[9] = d) : d = p[9], p[10] !== _ || p[11] !== d ? (f = (0, t.jsxs)("div", {
      className: "mx-auto w-full max-w-[1440px] px-5 md:px-10 lg:px-14",
      children: [s, (0, t.jsx)("div", {
        className: "mt-10",
        children: (0, t.jsx)("div", {
          "data-landing-video-stage": !0,
          children: (0, t.jsx)("div", {
            children: (0, t.jsx)("div", {
              ref: _,
              className: "mx-auto w-full max-w-[116.622222vh] md:w-[82%]",
              children: d
            })
          })
        })
      })]
    }), p[10] = _, p[11] = d, p[12] = f) : f = p[12], p[13] !== g || p[14] !== f ? (h = (0, t.jsx)("section", {
      ref: g,
      "aria-labelledby": "landing-product-walkthrough-title",
      "data-landing-video-section": !0,
      className: "landing-video-theme-section bg-bg-primary py-14 md:pt-24",
      children: f
    }), p[13] = g, p[14] = f, p[15] = h) : h = p[15], h
  }

  function ij(e) {
    let r, a, i, o, s, l, c, u, d, f, h, p, m, _, g, v, y = (0, n.c)(41),
      {
        article: b,
        showDivider: x
      } = e,
      w = `landing_learn_about_${b.id}`;
    y[0] !== b.id ? (r = {
      surface: "landing",
      subsurface: "learn_about",
      article: b.id
    }, y[0] = b.id, y[1] = r) : r = y[1], y[2] !== w || y[3] !== r ? (a = {
      eventName: aV.HatchImpressionEvent.LANDING_PAGE_IMPRESSION,
      actionTarget: w,
      metadata: r
    }, y[2] = w, y[3] = r, y[4] = a) : a = y[4], y[5] === Symbol.for("react.memo_cache_sentinel") ? (i = {
      threshold: "50%"
    }, y[5] = i) : i = y[5];
    let {
      ref: k
    } = (0, aE.useTrackedImpressionRef)(a, i), C = `landing_learn_about_${b.id}`;
    y[6] !== b.id ? (o = {
      surface: "landing",
      subsurface: "learn_about",
      link: b.id
    }, y[6] = b.id, y[7] = o) : o = y[7], y[8] !== C || y[9] !== o ? (s = {
      eventName: aS.HatchClickEvent.LANDING_FEATURE_LINK_CLICK,
      actionTarget: C,
      actionType: "click",
      metadata: o
    }, y[8] = C, y[9] = o, y[10] = s) : s = y[10];
    let {
      ref: S,
      onClick: E
    } = (0, aE.useTrackedClickRef)(s), T = b.href, N = b.newTab ? "_blank" : void 0, A = b.newTab ? "noreferrer" : void 0;
    return y[11] !== E ? (l = () => E(), y[11] = E, y[12] = l) : l = y[12], y[13] !== b.icon ? (c = (0, t.jsx)("div", {
      className: "py-6",
      children: (0, t.jsx)("span", {
        "aria-hidden": "true",
        className: "text-icon-secondary inline-flex size-8 items-center justify-center",
        children: (0, t.jsx)(ax.HatchIcon, {
          icon: b.icon,
          size: 32
        })
      })
    }), y[13] = b.icon, y[14] = c) : c = y[14], y[15] !== x ? (u = x && ["border-fill-divider border-t", "group-hover:border-transparent group-focus-visible:border-transparent", "[article:has(a:hover)+article_&]:border-transparent", "[article:has(a:focus-visible)+article_&]:border-transparent"], y[15] = x, y[16] = u) : u = y[16], y[17] !== u ? (d = (0, r3.cn)("flex min-w-0 items-center gap-4 py-6", u), y[17] = u, y[18] = d) : d = y[18], y[19] !== b.title ? (f = (0, t.jsx)("h3", {
      className: "text-title-3-emphasized text-text-primary text-balance",
      children: b.title
    }), y[19] = b.title, y[20] = f) : f = y[20], y[21] !== b.description ? (h = (0, t.jsx)("p", {
      className: "text-body text-text-secondary mt-2 text-pretty",
      children: b.description
    }), y[21] = b.description, y[22] = h) : h = y[22], y[23] !== f || y[24] !== h ? (p = (0, t.jsxs)("div", {
      className: "min-w-0 flex-1",
      children: [f, h]
    }), y[23] = f, y[24] = h, y[25] = p) : p = y[25], y[26] === Symbol.for("react.memo_cache_sentinel") ? (m = (0, t.jsx)("span", {
      "aria-hidden": "true",
      className: "text-icon-secondary shrink-0",
      children: (0, t.jsx)(ax.HatchIcon, {
        icon: iR.default,
        size: 20,
        className: "rtl:-scale-x-100"
      })
    }), y[26] = m) : m = y[26], y[27] !== d || y[28] !== p ? (_ = (0, t.jsxs)("div", {
      className: d,
      children: [p, m]
    }), y[27] = d, y[28] = p, y[29] = _) : _ = y[29], y[30] !== b.href || y[31] !== S || y[32] !== A || y[33] !== l || y[34] !== c || y[35] !== _ || y[36] !== N ? (g = (0, t.jsxs)(ab.EctoAnchor, {
      ref: S,
      href: T,
      skipLinkshim: !0,
      target: N,
      rel: A,
      onClick: l,
      className: "group rounded-16 hover:bg-fill-secondary focus-visible:bg-fill-secondary -mx-3 grid w-full grid-cols-[2rem_minmax(0,1fr)] gap-x-4 px-3 no-underline",
      children: [c, _]
    }), y[30] = b.href, y[31] = S, y[32] = A, y[33] = l, y[34] = c, y[35] = _, y[36] = N, y[37] = g) : g = y[37], y[38] !== k || y[39] !== g ? (v = (0, t.jsx)("article", {
      ref: k,
      children: g
    }), y[38] = k, y[39] = g, y[40] = v) : v = y[40], v
  }

  function iP(e) {
    let a, s, l, c, u = (0, n.c)(6),
      {
        articles: d
      } = e;
    return u[0] === Symbol.for("react.memo_cache_sentinel") ? (a = (0, t.jsx)("h2", {
      id: "landing-learn-about-title",
      className: "text-landing-section-heading text-text-primary text-balance",
      children: r.fbt._("Learn more about {productName}", [r.fbt._param("productName", i)], {
        hk: "jvXWS"
      })
    }), u[0] = a) : a = u[0], u[1] === Symbol.for("react.memo_cache_sentinel") ? (s = (0, t.jsxs)("div", {
      className: "text-center lg:col-span-5 lg:self-center lg:text-start",
      children: [a, (0, t.jsx)("p", {
        className: "text-title-3 text-text-secondary mx-auto mt-3 max-w-sm text-pretty lg:mx-0",
        children: r.fbt._("Explore the choices behind {productName} and how it is built to deserve your trust.", [r.fbt._param("productName", i)], {
          hk: "2V2oey"
        })
      })]
    }), u[1] = s) : s = u[1], u[2] !== d ? (l = d.map(iM), u[2] = d, u[3] = l) : l = u[3], u[4] !== l ? (c = (0, t.jsx)("section", {
      "aria-labelledby": "landing-learn-about-title",
      className: o,
      children: (0, t.jsxs)("div", {
        className: "mx-auto grid w-full max-w-[1440px] px-5 md:px-10 lg:grid-cols-12 lg:gap-12 lg:px-14",
        children: [s, (0, t.jsx)("div", {
          className: "flex flex-col lg:col-span-7",
          children: l
        })]
      })
    }), u[4] = l, u[5] = c) : c = u[5], c
  }

  function iM(e, n) {
    return (0, t.jsx)(ij, {
      article: e,
      showDivider: n > 0
    }, e.id)
  }

  function iD(e, n) {
    let {
      featureId: r,
      feature: a
    } = e;
    return (0, t.jsx)(iu, {
      fill: n % 2 == 0 ? "primary" : "secondary",
      featureId: r,
      feature: a,
      imageOnLeft: n % 2 == 0,
      headingLevel: "h3"
    }, r)
  }
  iI.default._isSVG = !0, iR.default._isSVG = !0, iO.default._isSVG = !0, iA.default._isSVG = !0;
  let iH = {
      layout: "consumer",
      Hero: iT,
      MarketingContent: function(e) {
        let a, o, c, u, d, p, m, _, g, v, y, b, x, w, k, C, S = (0, n.c)(52),
          {
            introductionFillRef: E,
            introductionMediaRef: T,
            introductionMediaPinRef: N,
            introductionSectionRef: A,
            featureListRef: R,
            showAppDownloads: I,
            onReturnToLogin: O,
            walkthroughMediaRef: L,
            walkthroughMediaPinRef: j
          } = e,
          P = im();
        if (S[0] !== R || S[1] !== E || S[2] !== N || S[3] !== T || S[4] !== A || S[5] !== P) {
          let e, n, g, v, y, b, x = {
              messaging: {
                title: r.fbs._("Designed around the way you already communicate", null, {
                  hk: "45lr1P"
                }),
                description: r.fbs._("Chat with your agent in the same way you message with other people, using the {productName} app on mobile, Mac, or directly in WhatsApp. There's no learning curve, just tell {productNameAgain} what you want to get done.", [r.fbs._param("productName", i), r.fbs._param("productNameAgain", i)], {
                  hk: "2Aeopx"
                }),
                ...h.messaging,
                imageAlt: r.fbs._("A chat on a phone where the agent has filled out a school form, shown beside a laptop", null, {
                  hk: "2f2mRA"
                })
              },
              browser: {
                title: r.fbs._("Every {productName} user shares their own computer in the cloud with their {productNameAgain}.", [r.fbs._param("productName", i), r.fbs._param("productNameAgain", i)], {
                  hk: "miBfx"
                }),
                description: r.fbs._("Muse Secure VM is a persistent, isolated Linux computer with a full browser that you and your agent can use to complete tasks, allowing you to intervene at any point. It's your computer and your browser, with the storage, CPU, and memory to handle real work.", null, {
                  hk: "1iNffG"
                }),
                ...h.browser,
                imageAlt: r.fbs._("Floating browser, search, map, calendar, and confirmation panels", null, {
                  hk: "TxlQ6"
                })
              },
              connectors: {
                title: r.fbs._("Connects to your apps and builds its own tools", null, {
                  hk: "3fkK7y"
                }),
                description: r.fbs._("Connect the apps you use daily, like email, calendar, and Instagram. You decide what your agent can see and what it can do. If a task needs a tool that doesn't exist, your agent builds it for you.", null, {
                  hk: "2gzVGh"
                }),
                ...h.connectors,
                imageAlt: r.fbs._("Connected app, messaging, media, cloud, calendar, and automation tiles", null, {
                  hk: "3Zn1tq"
                })
              },
              ...P
            },
            w = f.map(e => ({
              featureId: e,
              feature: x[e]
            }));
          S[14] === Symbol.for("react.memo_cache_sentinel") ? (e = {
            id: "capability",
            href: s,
            newTab: !0,
            title: r.fbt._("How We Designed Muse", null, {
              hk: "4vuaez"
            }),
            description: r.fbt._("When Muse works, it feels like magic. These are the product choices that make the experience possible.", null, {
              hk: "ILJt3"
            }),
            icon: iI.default
          }, S[14] = e) : e = S[14], S[15] === Symbol.for("react.memo_cache_sentinel") ? (n = {
            id: "personality",
            href: l,
            newTab: !0,
            title: r.fbt._("How We Built Safety Into Muse", null, {
              hk: "3D9GdF"
            }),
            description: r.fbt._("Muse is built for privacy, safety, and security. Learn how these principles shape every part of the product.", null, {
              hk: "2q0x8X"
            }),
            icon: iO.default
          }, S[15] = n) : n = S[15], S[16] === Symbol.for("react.memo_cache_sentinel") ? (g = [e, n, {
            id: "business",
            href: "/business",
            title: r.fbt._("Muse for Business", null, {
              hk: "4EBqRu"
            }),
            description: r.fbt._("Meet the AI agent that works for your small business and keeps jobs moving between your decisions.", null, {
              hk: "3Yb4fT"
            }),
            icon: iA.default
          }], S[16] = g) : g = S[16], c = g, S[17] === Symbol.for("react.memo_cache_sentinel") ? (b = r.fbt._("Built around your whole life", null, {
            hk: "OA1eO"
          }), v = r.fbt._("Give {productName} a goal or task and it handles the rest, from saving money and improving your health to smart shopping and helping you strengthen your relationships.", [r.fbt._param("productName", i)], {
            hk: "18xDNc"
          }), y = [{
            catalog: "muse",
            key: "muse_sizzle"
          }], S[17] = v, S[18] = y, S[19] = b) : (v = S[17], y = S[18], b = S[19]), S[20] !== E || S[21] !== N || S[22] !== T || S[23] !== A ? (_ = (0, t.jsx)(aP.EctoErrorBoundary, {
            surface: ay.HATCH_SENTRY_SURFACES.LANDING,
            children: (0, t.jsx)(id, {
              title: b,
              description: v,
              sources: y,
              revealFill: !0,
              fillRef: E,
              mediaRef: T,
              pinRef: N,
              sectionRef: A
            })
          }), S[20] = E, S[21] = N, S[22] = T, S[23] = A, S[24] = _) : _ = S[24], o = aP.EctoErrorBoundary, m = ay.HATCH_SENTRY_SURFACES.LANDING, a = ih, S[25] === Symbol.for("react.memo_cache_sentinel") ? (u = r.fbs._("{productName} features", [r.fbs._param("productName", i)], {
            hk: "jYBIu"
          }), S[25] = u) : u = S[25], d = R, p = w.map(iD), S[0] = R, S[1] = E, S[2] = N, S[3] = T, S[4] = A, S[5] = P, S[6] = a, S[7] = o, S[8] = c, S[9] = u, S[10] = d, S[11] = p, S[12] = m, S[13] = _
        } else a = S[6], o = S[7], c = S[8], u = S[9], d = S[10], p = S[11], m = S[12], _ = S[13];
        return S[26] !== a || S[27] !== u || S[28] !== d || S[29] !== p ? (g = (0, t.jsx)(a, {
          label: u,
          featureListRef: d,
          children: p
        }), S[26] = a, S[27] = u, S[28] = d, S[29] = p, S[30] = g) : g = S[30], S[31] !== o || S[32] !== m || S[33] !== g ? (v = (0, t.jsx)(o, {
          surface: m,
          children: g
        }), S[31] = o, S[32] = m, S[33] = g, S[34] = v) : v = S[34], S[35] !== j || S[36] !== L ? (y = (0, t.jsx)(aP.EctoErrorBoundary, {
          surface: ay.HATCH_SENTRY_SURFACES.LANDING,
          children: (0, t.jsx)(iL, {
            mediaRef: L,
            pinRef: j
          })
        }), S[35] = j, S[36] = L, S[37] = y) : y = S[37], S[38] !== c ? (b = (0, t.jsx)(aP.EctoErrorBoundary, {
          surface: ay.HATCH_SENTRY_SURFACES.LANDING,
          children: (0, t.jsx)(iP, {
            articles: c
          })
        }), S[38] = c, S[39] = b) : b = S[39], S[40] === Symbol.for("react.memo_cache_sentinel") ? (x = r.fbt._("Ready to try {productName}?", [r.fbt._param("productName", i)], {
          hk: "22nZgP"
        }), S[40] = x) : x = S[40], S[41] !== O || S[42] !== I ? (w = (0, t.jsx)(aP.EctoErrorBoundary, {
          surface: ay.HATCH_SENTRY_SURFACES.LANDING,
          children: (0, t.jsx)(ip, {
            title: x,
            showAppDownloads: I,
            onReturnToLogin: O
          })
        }), S[41] = O, S[42] = I, S[43] = w) : w = S[43], S[44] !== w || S[45] !== b ? (k = (0, t.jsxs)("div", {
          className: "mx-auto w-full max-w-[1440px] px-5 md:px-10 lg:px-14",
          children: [b, w]
        }), S[44] = w, S[45] = b, S[46] = k) : k = S[46], S[47] !== k || S[48] !== _ || S[49] !== v || S[50] !== y ? (C = (0, t.jsxs)("article", {
          children: [_, v, y, k]
        }), S[47] = k, S[48] = _, S[49] = v, S[50] = y, S[51] = C) : C = S[51], C
      }
    },
    iF = {
      layout: "business",
      Hero: ag,
      MarketingContent: function(e) {
        let a, o, s, l, c, u, d, f, h, p, m, _, g, v, y, b, x = (0, n.c)(58),
          {
            introductionFillRef: w,
            introductionMediaRef: k,
            introductionMediaPinRef: C,
            introductionSectionRef: S,
            featureListRef: E,
            showAppDownloads: T,
            onReturnToLogin: N,
            continueTo: A,
            founderMediaRef: R,
            founderMediaPinRef: I
          } = e,
          O = im();
        if (x[0] !== E || x[1] !== I || x[2] !== R || x[3] !== w || x[4] !== C || x[5] !== k || x[6] !== S || x[7] !== O.approvals.description || x[8] !== O.approvals.title || x[9] !== O.goals.description || x[10] !== O.goals.title || x[11] !== O.privacy.description || x[12] !== O.privacy.title) {
          let e, n, m, _ = {
              overview: {
                title: r.fbs._("Focus on your business while Muse gets things done", null, {
                  hk: "254m4w"
                }),
                description: r.fbs._("Tell Muse your goal once, and it keeps working in the background. It updates your grocery list and drafts your replies while you prep dinner. It builds you a client pitch and spins up a new product page while you pitch the next client in person. It plans a month of content, then checks back in with progress and the next decision waiting for you.", null, {
                  hk: "1E3jW"
                }),
                ...iv.overview,
                imageAlt: r.fbs._("Muse drafting restaurant reservation reminders for a business owner", null, {
                  hk: "4uQLzw"
                })
              },
              opportunity: {
                title: r.fbs._("Big goals? Consider them handled.", null, {
                  hk: "4ncePn"
                }),
                description: r.fbs._("Get a plan that helps you grow during slow months and manage through the busy ones. Create content and ads that turn passersby into regulars. Keep treating every customer like your only customer. And let cash flow and inventory management run in the background, so you spend less time on the books and more time on the business.", null, {
                  hk: "2AB0E2"
                }),
                ...iv.opportunity,
                imageAlt: r.fbs._("Muse analyzing customer trends and proposing a loyalty program", null, {
                  hk: "3dXxrg"
                })
              },
              conversations: {
                title: r.fbs._("Connect the tools you already use", null, {
                  hk: "23zrQz"
                }),
                description: r.fbs._("Muse can connect to the tools your small business already runs on, including Asana, Box, Canva, Dropbox, Figma, Granola, HighLevel, Intuit QuickBooks, Klaviyo, Lovable, Notion, Shopify, Slack, Stripe, Zoom and more. It also connects your Facebook, Instagram and Meta ads in one step, and Muse will start out understanding your business. Muse learns your voice, spots what's working, and helps you improve your ads and content.", null, {
                  hk: "SI9lM"
                }),
                ...iv.conversations,
                imageAlt: r.fbs._("A grid of connected business apps, including Facebook, Instagram, Shopify, and QuickBooks", null, {
                  hk: "3GyVNZ"
                })
              },
              controls: {
                title: O.approvals.title,
                description: O.approvals.description,
                ...iv.controls,
                imageAlt: r.fbs._("Muse asking for approval to reorder restaurant supplies", null, {
                  hk: "11gKkg"
                })
              },
              follow_through: {
                title: O.goals.title,
                description: O.goals.description,
                ...iv.follow_through,
                imageAlt: r.fbs._("Business goals and Muse suggestions for invoices, staff schedules, and supplies", null, {
                  hk: "xbUDC"
                })
              },
              contextual_tools: {
                title: O.privacy.title,
                description: O.privacy.description,
                ...iv.contextual_tools,
                imageAlt: r.fbs._("A vault, privacy shield, masked credential, security control, and virtual card", null, {
                  hk: "WJiTr"
                })
              }
            },
            g = ig.map(e => ({
              featureId: e,
              feature: _[e]
            }));
          x[23] === Symbol.for("react.memo_cache_sentinel") ? (h = (0, t.jsx)("span", {
            id: ib,
            hidden: !0,
            children: r.fbs._("Opens in a new tab", null, {
              hk: "44Y9qy"
            })
          }), x[23] = h) : h = x[23], x[24] === Symbol.for("react.memo_cache_sentinel") ? (m = r.fbt._("AI that works for you and your small business", null, {
            hk: "2Y87sm"
          }), e = r.fbt._("Muse is a personal AI agent that doesn't just answer questions, it does the work. It keeps you on top of things, takes tasks and projects off your plate, and turns long-term goals into real action plans. And we're expanding it with Muse for Small Business, a collection of new skills and connectors for the small business owner whose to-do list has a to-do list.", null, {
            hk: "3qOf2o"
          }), n = [{
            catalog: "business",
            key: "muse_sizzle"
          }], x[24] = e, x[25] = n, x[26] = m) : (e = x[24], n = x[25], m = x[26]), x[27] !== w || x[28] !== C || x[29] !== k || x[30] !== S ? (p = (0, t.jsx)(aP.EctoErrorBoundary, {
            surface: ay.HATCH_SENTRY_SURFACES.LANDING,
            children: (0, t.jsx)(id, {
              title: m,
              description: e,
              sources: n,
              revealFill: !1,
              fillRef: w,
              mediaRef: k,
              pinRef: C,
              sectionRef: S
            })
          }), x[27] = w, x[28] = C, x[29] = k, x[30] = S, x[31] = p) : p = x[31], o = aP.EctoErrorBoundary, f = ay.HATCH_SENTRY_SURFACES.LANDING, a = ih, x[32] === Symbol.for("react.memo_cache_sentinel") ? (s = r.fbs._("{productName} business features", [r.fbs._param("productName", i)], {
            hk: "3Zea2A"
          }), x[32] = s) : s = x[32], l = E, c = g.slice(0, 2).map(iE), x[33] !== I || x[34] !== R ? (u = (0, t.jsx)(aP.EctoErrorBoundary, {
            surface: ay.HATCH_SENTRY_SURFACES.LANDING,
            children: (0, t.jsx)(ix, {
              mediaRef: R,
              pinRef: I
            })
          }), x[33] = I, x[34] = R, x[35] = u) : u = x[35], d = g.slice(2).map(iS), x[0] = E, x[1] = I, x[2] = R, x[3] = w, x[4] = C, x[5] = k, x[6] = S, x[7] = O.approvals.description, x[8] = O.approvals.title, x[9] = O.goals.description, x[10] = O.goals.title, x[11] = O.privacy.description, x[12] = O.privacy.title, x[13] = a, x[14] = o, x[15] = s, x[16] = l, x[17] = c, x[18] = u, x[19] = d, x[20] = f, x[21] = h, x[22] = p
        } else a = x[13], o = x[14], s = x[15], l = x[16], c = x[17], u = x[18], d = x[19], f = x[20], h = x[21], p = x[22];
        return x[36] !== a || x[37] !== s || x[38] !== l || x[39] !== c || x[40] !== u || x[41] !== d ? (m = (0, t.jsxs)(a, {
          label: s,
          featureListRef: l,
          children: [c, u, d]
        }), x[36] = a, x[37] = s, x[38] = l, x[39] = c, x[40] = u, x[41] = d, x[42] = m) : m = x[42], x[43] !== o || x[44] !== f || x[45] !== m ? (_ = (0, t.jsx)(o, {
          surface: f,
          children: m
        }), x[43] = o, x[44] = f, x[45] = m, x[46] = _) : _ = x[46], x[47] === Symbol.for("react.memo_cache_sentinel") ? (g = (0, t.jsx)(aP.EctoErrorBoundary, {
          surface: ay.HATCH_SENTRY_SURFACES.LANDING,
          children: (0, t.jsx)(ik, {})
        }), x[47] = g) : g = x[47], x[48] === Symbol.for("react.memo_cache_sentinel") ? (v = r.fbt._("{productName}, your AI teammate that gets work done", [r.fbt._param("productName", i)], {
          hk: "1ZHQWr"
        }), x[48] = v) : v = x[48], x[49] !== A || x[50] !== N || x[51] !== T ? (y = (0, t.jsx)("div", {
          className: "w-full",
          children: (0, t.jsx)(aP.EctoErrorBoundary, {
            surface: ay.HATCH_SENTRY_SURFACES.LANDING,
            children: (0, t.jsx)(ip, {
              title: v,
              fullWidth: !0,
              showAppDownloads: T,
              onReturnToLogin: N,
              continueTo: A
            })
          })
        }), x[49] = A, x[50] = N, x[51] = T, x[52] = y) : y = x[52], x[53] !== _ || x[54] !== y || x[55] !== h || x[56] !== p ? (b = (0, t.jsxs)("article", {
          children: [h, p, _, g, y]
        }), x[53] = _, x[54] = y, x[55] = h, x[56] = p, x[57] = b) : b = x[57], b
      }
    },
    iU = {
      layout: "minimal",
      Hero: iT,
      MarketingContent: null
    },
    iG = {
      layout: "minimal",
      Hero: ag,
      MarketingContent: null
    };
  var iB = e.i(440802),
    iz = e.i(439714),
    iY = e.i(938981),
    iW = e.i(129985),
    iq = e.i(397649),
    iV = e.i(832964),
    iK = e.i(346577),
    iX = e.i(295967),
    i$ = e.i(229302);
  let iQ = "(max-height: 699px)";

  function iZ() {
    let e = document.documentElement.clientHeight;
    return e > 0 ? e < 700 : window.matchMedia(iQ).matches
  }

  function iJ(e) {
    let t = window.matchMedia(iQ);
    return t.addEventListener("change", e), () => t.removeEventListener("change", e)
  }
  var i0 = e.i(727748),
    i1 = e.i(442282),
    i2 = e.i(862161);

  function i3(e, t) {
    if (2 === t) return e % 4 == 0 && (e % 100 != 0 || e % 400 == 0) ? 29 : 28;
    return [4, 6, 9, 11].includes(t) ? 30 : 31
  }

  function i4(e) {
    let t = /^(\d{4})-(\d{2})-(\d{2})$/.exec(e);
    if (null != t) {
      let e = Number(t[1]),
        n = Number(t[2]),
        r = Number(t[3]);
      if (e >= 1 && n >= 1 && n <= 12 && r >= 1 && r <= i3(e, n)) return {
        year: e,
        month: n,
        day: r
      }
    }
    let n = new Date;
    return {
      year: n.getFullYear(),
      month: n.getMonth() + 1,
      day: n.getDate()
    }
  }

  function i5({
    year: e,
    month: t,
    day: n
  }) {
    return `${String(e).padStart(4,"0")}-${String(t).padStart(2,"0")}-${String(n).padStart(2,"0")}`
  }

  function i6() {
    return i5(i4(""))
  }

  function i8(e) {
    let a, i, o, s, l, c, u = (0, n.c)(40),
      {
        value: d,
        onChange: f,
        error: h,
        variant: p,
        ariaDescribedBy: m,
        impressionRef: _
      } = e,
      g = void 0 === p ? "default" : p,
      {
        locale: v
      } = (0, a3.useHatchLocale)();
    u[0] !== d ? (a = i4(d), u[0] = d, u[1] = a) : a = u[1];
    let y = a;
    u[2] === Symbol.for("react.memo_cache_sentinel") ? (i = new Date().getFullYear(), u[2] = i) : i = u[2];
    let b = i;
    u[3] === Symbol.for("react.memo_cache_sentinel") ? (o = Array.from({
      length: 150
    }, (e, t) => b - t), u[3] = o) : o = u[3];
    let x = o;
    if (u[4] !== v) {
      let e;
      s = 3 === new Set(e = new Intl.DateTimeFormat(v).formatToParts(new Date(2e3, 10, 22)).flatMap(e => "year" === e.type || "month" === e.type || "day" === e.type ? [e.type] : [])).size ? e : ["month", "day", "year"], u[4] = v, u[5] = s
    } else s = u[5];
    let w = s;
    u[6] !== y.month || u[7] !== y.year ? (l = Array.from({
      length: i3(y.year, y.month)
    }, on), u[6] = y.month, u[7] = y.year, u[8] = l) : l = u[8];
    let k = l;
    if (u[9] !== m || u[10] !== y.day || u[11] !== y.month || u[12] !== y.year || u[13] !== k || u[14] !== h || u[15] !== w || u[16] !== _ || u[17] !== f || u[18] !== g) {
      let e, n, a, i, o, s, l = r.fbs._("Month", null, {
          hk: "2HIrvM"
        }),
        d = r.fbs._("Day", null, {
          hk: "4uzGcN"
        }),
        p = r.fbs._("Year", null, {
          hk: "159Nia"
        }),
        v = [r.fbs._("January", null, {
          hk: "40Scjv"
        }), r.fbs._("February", null, {
          hk: "2tY5wz"
        }), r.fbs._("March", null, {
          hk: "UNrGc"
        }), r.fbs._("April", null, {
          hk: "1gK2tD"
        }), r.fbs._("May", null, {
          hk: "26VWYR"
        }), r.fbs._("June", null, {
          hk: "4gM9Ny"
        }), r.fbs._("July", null, {
          hk: "33gjjL"
        }), r.fbs._("August", null, {
          hk: "8pVfQ"
        }), r.fbs._("September", null, {
          hk: "2zVHFa"
        }), r.fbs._("October", null, {
          hk: "4gtLf9"
        }), r.fbs._("November", null, {
          hk: "3e0GcI"
        }), r.fbs._("December", null, {
          hk: "htyzR"
        })];
      u[20] !== y.day || u[21] !== y.month || u[22] !== y.year || u[23] !== f ? (e = e => {
        let t = e.year ?? y.year,
          n = e.month ?? y.month,
          r = i3(t, n);
        f(i5({
          year: t,
          month: n,
          day: Math.min(e.day ?? y.day, r)
        }))
      }, u[20] = y.day, u[21] = y.month, u[22] = y.year, u[23] = f, u[24] = e) : e = u[24];
      let b = e;
      u[25] !== h || u[26] !== g ? (n = e => (0, r3.cn)("focus-within:outline-hatch-accent flex min-w-0 basis-0 flex-col focus-within:outline focus-within:outline-2 focus-within:outline-offset-1", "name-registration" === g ? "bg-fill-secondary-elevated h-14 flex-1 rounded-12 border border-transparent px-4 py-2" : (0, r3.cn)("border-fill-divider bg-fill-primary rounded-20 border p-3", "month" === e ? "flex-[1.55]" : "day" === e ? "flex-[0.8]" : "flex-[1.15]"), h && "border-text-destructive"), u[25] = h, u[26] = g, u[27] = n) : n = u[27];
      let C = n,
        S = "name-registration" === g ? "text-subheadline" : "text-body";
      u[28] !== S ? (a = (0, r3.cn)("text-text-primary h-auto min-h-6 w-full rounded-none p-0 focus-visible:outline-none enabled:hover:bg-transparent", S), u[28] = S, u[29] = a) : a = u[29];
      let E = a;
      u[30] !== m || u[31] !== h || u[32] !== C || u[33] !== E || u[34] !== b || u[35] !== g ? (i = (e, n, r, a, i) => (0, t.jsxs)("div", {
        className: C(e),
        children: [(0, t.jsx)("span", {
          className: (0, r3.cn)("text-caption-1", "name-registration" === g ? "text-text-secondary" : "text-text-primary"),
          children: n
        }), (0, t.jsxs)(i2.Select, {
          value: String(r),
          onValueChange: t => b({
            [e]: Number(t)
          }),
          autoComplete: a,
          required: !0,
          children: [(0, t.jsx)(i2.SelectTrigger, {
            variant: "borderless",
            "aria-label": n,
            "aria-invalid": h,
            "aria-describedby": m,
            className: E,
            children: (0, t.jsx)(i2.SelectValue, {})
          }), (0, t.jsx)(i2.SelectContent, {
            position: "popper",
            side: "bottom",
            align: "start",
            avoidCollisions: !1,
            collisionPadding: 8,
            className: "max-h-[var(--radix-select-content-available-height)] w-max max-w-[var(--radix-select-content-available-width)] min-w-[var(--radix-select-trigger-width)]",
            children: i.map(ot)
          })]
        })]
      }, e), u[30] = m, u[31] = h, u[32] = C, u[33] = E, u[34] = b, u[35] = g, u[36] = i) : i = u[36];
      let T = i,
        N = "name-registration" === g ? "gap-3" : "gap-2";
      u[37] !== N ? (o = (0, r3.cn)("flex w-full", N), u[37] = N, u[38] = o) : o = u[38], u[39] === Symbol.for("react.memo_cache_sentinel") ? (s = (0, t.jsx)("legend", {
        className: "sr-only",
        children: r.fbs._("Birthday", null, {
          hk: "1cqBJ6"
        })
      }), u[39] = s) : s = u[39], c = (0, t.jsxs)("fieldset", {
        ref: _,
        className: o,
        "aria-describedby": m,
        children: [s, w.map(e => "month" === e ? T(e, l, y.month, "bday-month", v.map(oe)) : "day" === e ? T(e, d, y.day, "bday-day", k.map(i9)) : T(e, p, y.year, "bday-year", x.map(i7)))]
      }), u[9] = m, u[10] = y.day, u[11] = y.month, u[12] = y.year, u[13] = k, u[14] = h, u[15] = w, u[16] = _, u[17] = f, u[18] = g, u[19] = c
    } else c = u[19];
    return c
  }

  function i7(e) {
    return {
      label: e,
      value: e
    }
  }

  function i9(e) {
    return {
      label: e,
      value: e
    }
  }

  function oe(e, t) {
    return {
      label: e,
      value: t + 1
    }
  }

  function ot(e) {
    return (0, t.jsx)(i2.SelectItem, {
      value: String(e.value),
      className: "isolate justify-start whitespace-nowrap bg-transparent before:pointer-events-none before:absolute before:inset-y-0 before:inset-x-1.5 before:rounded-12 before:content-[''] after:w-5 after:shrink-0 after:content-[''] focus:bg-transparent focus:before:bg-fill-secondary-elevated hover:bg-transparent hover:before:bg-fill-secondary-elevated data-[highlighted]:bg-transparent data-[highlighted]:before:bg-fill-secondary-elevated [&>*]:relative [&>div]:text-start",
      children: e.label
    }, e.value)
  }

  function on(e, t) {
    return t + 1
  }
  let or = (0, r4.createClientLogger)("NativeAuthNtpLazy"),
    oa = null,
    oi = null;

  function oo() {
    return null != oi ? Promise.resolve(oi) : oa ??= e.A(920050).then(e => oi = {
      default: e.HatchNativeAuthNtpUpsell
    }).catch(e => {
      throw oa = null, e
    })
  }
  let os = (0, m.lazy)(oo);

  function ol(e) {
    return null == oi ? (0, m.createElement)(os, e) : (0, m.createElement)(oi.default, e)
  }
  async function oc() {
    await oo()
  }
  let ou = null,
    od = null;

  function of() {
    return null != od ? Promise.resolve(od) : ou ??= e.A(453438).then(e => od = {
      default: e.HatchNativeAuthTermsDisclosure
    }).catch(e => {
      throw ou = null, e
    })
  }
  let oh = (0, m.lazy)(of);

  function op(e) {
    return null == od ? (0, m.createElement)(oh, e) : (0, m.createElement)(od.default, e)
  }
  async function om() {
    await of()
  }
  let o_ = (0, r4.createClientLogger)("NativeAuthRegistrationRejectedDialogLoader"),
    og = null,
    ov = null;

  function oy() {
    return null != ov ? Promise.resolve(ov) : og ??= e.A(15310).then(e => ov = e).catch(e => {
      throw og = null, e
    })
  }

  function ob(e) {
    let a, i, o, s, l, c, u, d = (0, n.c)(9),
      {
        message: f
      } = e,
      h = (0, m.useRef)(null);
    return d[0] === Symbol.for("react.memo_cache_sentinel") ? (a = () => {
      h.current?.focus()
    }, i = [], d[0] = a, d[1] = i) : (a = d[0], i = d[1]), (0, m.useEffect)(a, i), d[2] === Symbol.for("react.memo_cache_sentinel") ? (o = r.fbs._("Loading account creation message", null, {
      hk: "2QycxG"
    }), d[2] = o) : o = d[2], d[3] === Symbol.for("react.memo_cache_sentinel") ? (s = (0, t.jsx)(iV.Skeleton, {
      "aria-hidden": "true",
      className: "h-8 w-64 max-w-full"
    }), d[3] = s) : s = d[3], d[4] !== f ? (l = null == f ? (0, t.jsx)(iV.Skeleton, {
      "aria-hidden": "true",
      className: "h-5 w-full"
    }) : (0, t.jsx)("p", {
      className: "text-body text-text-primary",
      children: f
    }), d[4] = f, d[5] = l) : l = d[5], d[6] === Symbol.for("react.memo_cache_sentinel") ? (c = (0, t.jsx)(iV.Skeleton, {
      "aria-hidden": "true",
      className: "mt-auto h-11 w-full rounded-full"
    }), d[6] = c) : c = d[6], d[7] !== l ? (u = (0, t.jsx)(iX.LoadingState, {
      name: "auth_registration_rejection",
      children: (0, t.jsx)("div", {
        className: "bg-fill-dialog-overlay fixed inset-0 z-50 flex items-center justify-center p-4",
        children: (0, t.jsxs)("div", {
          ref: h,
          role: "status",
          tabIndex: -1,
          "aria-busy": "true",
          "aria-label": o,
          className: "bg-bg-primary rounded-32 flex min-h-52 w-full max-w-[40rem] flex-col gap-5 p-6 shadow-xl motion-reduce:[&_*]:!animate-none",
          children: [s, l, c]
        })
      })
    }), d[7] = l, d[8] = u) : u = d[8], u
  }

  function ox(e) {
    let a, i, o, s, l, c, u, d = (0, n.c)(18),
      {
        error: f,
        message: h,
        onDismiss: p,
        onRetry: m,
        restartError: _
      } = e;
    d[0] === Symbol.for("react.memo_cache_sentinel") ? (a = {
      eventName: aS.HatchClickEvent.LOGIN_REGISTRATION_REJECTED_DIALOG_DISMISS_CLICK,
      actionTarget: "login_registration_rejected_dialog_load_error_dismiss",
      actionType: "click",
      metadata: {
        surface: "login",
        subsurface: "registration_rejected",
        dismiss_method: "load_error"
      }
    }, d[0] = a) : a = d[0];
    let {
      ref: g,
      onClick: v
    } = (0, aE.useTrackedClickRef)(a);
    return d[1] !== _ ? (i = null != _ && (0, t.jsx)("span", {
      role: "alert",
      className: "mt-2 block",
      children: _
    }), d[1] = _, d[2] = i) : i = d[2], d[3] !== h || d[4] !== i ? (o = (0, t.jsxs)(t.Fragment, {
      children: [h, i]
    }), d[3] = h, d[4] = i, d[5] = o) : o = d[5], d[6] === Symbol.for("react.memo_cache_sentinel") ? (s = r.fbs._("Return to login", null, {
      hk: "T3BSx"
    }), d[6] = s) : s = d[6], d[7] !== v || d[8] !== p ? (l = () => {
      v(), p()
    }, d[7] = v, d[8] = p, d[9] = l) : l = d[9], d[10] !== g || d[11] !== l ? (c = (0, t.jsx)(aw.Button, {
      ref: g,
      type: "button",
      variant: "borderless",
      size: "36",
      label: s,
      onClick: l
    }), d[10] = g, d[11] = l, d[12] = c) : c = d[12], d[13] !== f || d[14] !== m || d[15] !== o || d[16] !== c ? (u = (0, t.jsx)("div", {
      className: "border-separator bg-bg-primary rounded-20 shadow-blur-elevation-01 fixed inset-x-4 top-4 z-50 min-h-64 border sm:inset-x-auto sm:end-4 sm:top-20 sm:w-[24rem]",
      children: (0, t.jsx)(aH.HatchContentErrorFallback, {
        error: f,
        description: o,
        alwaysShowRetry: !0,
        onRetry: m,
        secondaryAction: c
      })
    }), d[13] = f, d[14] = m, d[15] = o, d[16] = c, d[17] = u) : u = d[17], u
  }

  function ow() {
    return (0, m.lazy)(() => oy().then(e => ({
      default: e.HatchNativeAuthRegistrationRejectedDialog
    })))
  }

  function ok(e) {
    let {
      rejectionId: n,
      ...r
    } = e, [a, i] = (0, m.useState)(null != e.message), [o, s] = (0, m.useState)(0), l = (0, m.useMemo)(ow, [o]);
    if ((0, m.useEffect)(() => {
        null != e.message && i(!0)
      }, [e.message, n]), (0, m.useEffect)(() => {
        null != e.restartError && i(!0)
      }, [e.restartError]), !a) return null;
    let c = ov;
    return (0, t.jsx)(aP.EctoErrorBoundary, {
      surface: ay.HATCH_SENTRY_SURFACES.AUTH,
      resetKeys: [o],
      withQueryReset: !1,
      fallback: ({
        error: n,
        reset: r
      }) => (0, t.jsx)(ox, {
        error: n,
        message: e.message,
        onDismiss: () => {
          i(!1), e.onReturnFocus(), e.onDismiss()
        },
        onRetry: () => {
          s(e => e + 1), r()
        },
        restartError: e.restartError
      }),
      children: (0, t.jsx)(m.Suspense, {
        fallback: (0, t.jsx)(ob, {
          message: e.message
        }),
        children: null == c ? (0, t.jsx)(l, {
          ...r
        }) : (0, m.createElement)(c.HatchNativeAuthRegistrationRejectedDialog, r)
      })
    })
  }
  var oC = e.i(196014);
  let oS = (0, r4.createClientLogger)("NativeAuthCrossAppRecoveryDialogLoader"),
    oE = null,
    oT = null;

  function oN() {
    return null != oT ? Promise.resolve(oT) : oE ??= e.A(262520).then(e => oT = e).catch(e => {
      throw oE = null, e
    })
  }

  function oA() {
    let e, a, i, o, s = (0, n.c)(4),
      l = (0, m.useRef)(null);
    return s[0] === Symbol.for("react.memo_cache_sentinel") ? (e = () => {
      l.current?.focus()
    }, a = [], s[0] = e, s[1] = a) : (e = s[0], a = s[1]), (0, m.useEffect)(e, a), s[2] === Symbol.for("react.memo_cache_sentinel") ? (i = r.fbs._("Loading password reset message", null, {
      hk: "3yeAOt"
    }), s[2] = i) : i = s[2], s[3] === Symbol.for("react.memo_cache_sentinel") ? (o = (0, t.jsx)(iX.LoadingState, {
      name: "auth_cross_app_recovery",
      children: (0, t.jsx)("div", {
        className: "bg-fill-dialog-overlay fixed inset-0 z-50 flex items-center justify-center p-4",
        children: (0, t.jsxs)("div", {
          ref: l,
          role: "status",
          tabIndex: -1,
          "aria-busy": "true",
          "aria-label": i,
          className: "bg-bg-primary rounded-32 flex min-h-52 w-full max-w-[34rem] flex-col gap-5 p-6 shadow-xl motion-reduce:[&_*]:!animate-none",
          children: [(0, t.jsx)(iV.Skeleton, {
            "aria-hidden": "true",
            className: "h-8 w-64 max-w-full"
          }), (0, t.jsx)(iV.Skeleton, {
            "aria-hidden": "true",
            className: "h-5 w-full"
          }), (0, t.jsx)(iV.Skeleton, {
            "aria-hidden": "true",
            className: "mt-auto h-11 w-full rounded-full"
          })]
        })
      })
    }), s[3] = o) : o = s[3], o
  }

  function oR(e) {
    let a, i, o, s, l, c, u, d, f, h, p, _, g, v = (0, n.c)(36),
      {
        error: y,
        provider: b,
        onDismiss: x,
        onRetry: w
      } = e,
      k = "instagram" === b,
      C = (0, m.useId)(),
      S = (0, m.useId)(),
      E = k ? "instagram" : "facebook";
    v[0] !== E ? (a = {
      eventName: aS.HatchClickEvent.LOGIN_CROSS_APP_RECOVERY_RESET_CLICK,
      actionTarget: "login_cross_app_recovery_load_error_reset_link",
      actionType: "click",
      metadata: {
        surface: "login",
        subsurface: "cross_app_recovery",
        app: E
      }
    }, v[0] = E, v[1] = a) : a = v[1];
    let {
      ref: T,
      onClick: N
    } = (0, aE.useTrackedClickRef)(a), A = k ? "instagram" : "facebook";
    v[2] !== A ? (i = {
      eventName: aS.HatchClickEvent.LOGIN_CROSS_APP_RECOVERY_DISMISS_CLICK,
      actionTarget: "login_cross_app_recovery_dialog_load_error_dismiss",
      actionType: "click",
      metadata: {
        surface: "login",
        subsurface: "cross_app_recovery",
        app: A,
        dismiss_method: "load_error"
      }
    }, v[2] = A, v[3] = i) : i = v[3];
    let {
      ref: R,
      onClick: I
    } = (0, aE.useTrackedClickRef)(i);
    v[4] !== k ? (o = k ? r.fbs._("If you don't remember your password, go to Instagram to create a new password.", null, {
      hk: "RK4c5"
    }) : r.fbs._("If you don't remember your password, go to Facebook to create a new password.", null, {
      hk: "318EqV"
    }), v[4] = k, v[5] = o) : o = v[5];
    let O = `${C} ${S}`,
      L = oC.PASSWORD_RECOVERY_CROSS_APP_RESET_URLS[k ? "instagram" : "facebook"];
    return v[6] !== k ? (s = k ? r.fbs._("Go to Instagram", null, {
      hk: "1ADw2"
    }) : r.fbs._("Go to Facebook", null, {
      hk: "2DIqw6"
    }), v[6] = k, v[7] = s) : s = v[7], v[8] !== C || v[9] !== s ? (l = (0, t.jsx)("span", {
      id: C,
      children: s
    }), v[8] = C, v[9] = s, v[10] = l) : l = v[10], v[11] === Symbol.for("react.memo_cache_sentinel") ? (c = r.fbs._("(opens in a new tab)", null, {
      hk: "3pyo6R"
    }), v[11] = c) : c = v[11], v[12] !== S ? (u = (0, t.jsx)("span", {
      id: S,
      className: "sr-only",
      children: c
    }), v[12] = S, v[13] = u) : u = v[13], v[14] !== N || v[15] !== T || v[16] !== u || v[17] !== O || v[18] !== L || v[19] !== l ? (d = (0, t.jsxs)(ab.EctoAnchor, {
      ref: T,
      "aria-labelledby": O,
      className: "text-text-primary-link mt-2 block",
      href: L,
      onClick: N,
      children: [l, u]
    }), v[14] = N, v[15] = T, v[16] = u, v[17] = O, v[18] = L, v[19] = l, v[20] = d) : d = v[20], v[21] !== d || v[22] !== o ? (f = (0, t.jsxs)(t.Fragment, {
      children: [o, d]
    }), v[21] = d, v[22] = o, v[23] = f) : f = v[23], v[24] === Symbol.for("react.memo_cache_sentinel") ? (h = r.fbs._("Back to login", null, {
      hk: "2AB5OR"
    }), v[24] = h) : h = v[24], v[25] !== I || v[26] !== x ? (p = () => {
      I(), x()
    }, v[25] = I, v[26] = x, v[27] = p) : p = v[27], v[28] !== R || v[29] !== p ? (_ = (0, t.jsx)(aw.Button, {
      ref: R,
      type: "button",
      variant: "borderless",
      size: "36",
      label: h,
      onClick: p
    }), v[28] = R, v[29] = p, v[30] = _) : _ = v[30], v[31] !== y || v[32] !== w || v[33] !== f || v[34] !== _ ? (g = (0, t.jsx)("div", {
      className: "border-separator bg-bg-primary rounded-20 shadow-blur-elevation-01 fixed inset-x-4 top-4 z-50 min-h-64 border sm:inset-x-auto sm:end-4 sm:top-20 sm:w-[24rem]",
      children: (0, t.jsx)(aH.HatchContentErrorFallback, {
        error: y,
        description: f,
        alwaysShowRetry: !0,
        onRetry: w,
        secondaryAction: _
      })
    }), v[31] = y, v[32] = w, v[33] = f, v[34] = _, v[35] = g) : g = v[35], g
  }

  function oI() {
    return (0, m.lazy)(() => oN().then(e => ({
      default: e.HatchNativeAuthCrossAppRecoveryDialog
    })))
  }

  function oO(e) {
    let {
      recoveryId: n,
      ...r
    } = e, [a, i] = (0, m.useState)(null != e.provider), [o, s] = (0, m.useState)(e.provider), [l, c] = (0, m.useState)(0), u = (0, m.useMemo)(oI, [l]);
    if ((0, m.useEffect)(() => {
        null != e.provider && (i(!0), s(e.provider))
      }, [e.provider, n]), !a) return null;
    let d = oT;
    return (0, t.jsx)(aP.EctoErrorBoundary, {
      surface: ay.HATCH_SENTRY_SURFACES.AUTH,
      resetKeys: [l],
      withQueryReset: !1,
      fallback: ({
        error: n,
        reset: r
      }) => (0, t.jsx)(oR, {
        error: n,
        provider: o,
        onDismiss: () => {
          i(!1), e.onReturnFocus(), e.onDismiss()
        },
        onRetry: () => {
          c(e => e + 1), r()
        }
      }),
      children: (0, t.jsx)(m.Suspense, {
        fallback: (0, t.jsx)(oA, {}),
        children: null == d ? (0, t.jsx)(u, {
          ...r
        }) : (0, m.createElement)(d.HatchNativeAuthCrossAppRecoveryDialog, r)
      })
    })
  }
  var oL = e.i(120589),
    oj = e.i(168538),
    oP = e.i(492929),
    oM = e.i(274797),
    oD = e.i(925494),
    oH = e.i(665056),
    oF = e.i(181959),
    oU = e.i(42673),
    oG = e.i(566905);

  function oB(e) {
    let i, o, s, l, c, u, d, f, h, p, m, _, g, v, y, b, x, w = (0, n.c)(59),
      {
        onDismiss: k
      } = e,
      C = (x = (0, oU.useUserAgent)(), (0, oG.useIsIOSWebkit)() ? "ios" : x?.os.name?.toLowerCase() === "android" ? "android" : "unknown");
    w[0] !== C ? (i = {
      eventName: aV.HatchImpressionEvent.LANDING_APP_BANNER_IMPRESSION,
      actionTarget: "landing_app_banner",
      metadata: {
        surface: "landing",
        subsurface: "app_banner",
        platform: C
      }
    }, w[0] = C, w[1] = i) : i = w[1];
    let {
      ref: S
    } = (0, aE.useTrackedImpressionRef)(i);
    w[2] === Symbol.for("react.memo_cache_sentinel") ? (o = {
      eventName: aS.HatchClickEvent.LANDING_APP_BANNER_DISMISS_CLICK,
      actionTarget: "landing_app_banner_dismiss",
      actionType: "click",
      metadata: {
        surface: "landing",
        subsurface: "app_banner"
      }
    }, w[2] = o) : o = w[2];
    let {
      ref: E,
      onClick: T
    } = (0, aE.useTrackedClickRef)(o);
    w[3] === Symbol.for("react.memo_cache_sentinel") ? (s = {
      eventName: aS.HatchClickEvent.LANDING_MOBILE_APP_IOS_CLICK,
      actionTarget: "landing_app_banner_ios",
      actionType: "click",
      metadata: {
        surface: "landing",
        subsurface: "app_banner",
        platform: "ios"
      }
    }, w[3] = s) : s = w[3];
    let {
      ref: N,
      onClick: A
    } = (0, aE.useTrackedClickRef)(s);
    w[4] === Symbol.for("react.memo_cache_sentinel") ? (l = {
      eventName: aS.HatchClickEvent.LANDING_MOBILE_APP_ANDROID_CLICK,
      actionTarget: "landing_app_banner_android",
      actionType: "click",
      metadata: {
        surface: "landing",
        subsurface: "app_banner",
        platform: "android"
      }
    }, w[4] = l) : l = w[4];
    let {
      ref: R,
      onClick: I
    } = (0, aE.useTrackedClickRef)(l);
    w[5] === Symbol.for("react.memo_cache_sentinel") ? (c = (0, r3.cn)((0, aC.buttonVariants)({
      radius: "rounded",
      size: "32",
      variant: "flat"
    }), "text-subheadline-medium text-text-primary h-[30px] w-auto shrink-0 whitespace-nowrap sm:w-25"), w[5] = c) : c = w[5];
    let O = c;
    w[6] === Symbol.for("react.memo_cache_sentinel") ? (u = r.fbs._("Dismiss the app promotion", null, {
      hk: "2S6agi"
    }), w[6] = u) : u = w[6], w[7] !== T || w[8] !== k ? (d = () => {
      T(), k()
    }, w[7] = T, w[8] = k, w[9] = d) : d = w[9], w[10] !== E || w[11] !== d ? (f = (0, t.jsx)(iB.IconButton, {
      ref: E,
      icon: oF.default,
      label: u,
      size: "32",
      variant: "borderless",
      className: "text-text-tertiary relative size-4 shrink-0 after:absolute after:-inset-2 after:content-['']",
      onClick: d
    }), w[10] = E, w[11] = d, w[12] = f) : f = w[12];
    let L = f;
    w[13] === Symbol.for("react.memo_cache_sentinel") ? (h = (0, t.jsx)("span", {
      "aria-hidden": "true",
      className: "flex size-14 shrink-0 items-center justify-center",
      children: (0, t.jsx)("img", {
        src: "/images/landing/brand/muse-app-icon.svg",
        alt: "",
        className: "rounded-16 block size-11",
        style: {
          boxShadow: "0 3.14px 15.71px rgba(0, 0, 0, 0.05)"
        }
      })
    }), w[13] = h) : h = w[13];
    let j = h;
    w[14] === Symbol.for("react.memo_cache_sentinel") ? (p = (0, t.jsx)("p", {
      className: "text-subheadline-medium text-text-primary min-w-0 flex-1 truncate",
      children: r.fbt._("{productName} from Meta", [r.fbt._param("productName", a.PRODUCT_BRAND.shortName)], {
        hk: "2IZrZE"
      })
    }), w[14] = p) : p = w[14];
    let P = p;
    if ("unknown" === C) {
      let e, n, a, i, o, s, l, c, u, d, f, h;
      return w[15] !== L ? (e = (0, t.jsxs)("div", {
        className: "flex w-full items-center gap-2.5",
        children: [P, L]
      }), w[15] = L, w[16] = e) : e = w[16], w[17] === Symbol.for("react.memo_cache_sentinel") ? (n = (0, t.jsx)("p", {
        className: "text-footnote text-text-secondary truncate",
        children: r.fbt._("Get the app", null, {
          hk: "Pkez4"
        })
      }), w[17] = n) : n = w[17], w[18] !== e ? (a = (0, t.jsxs)("div", {
        className: "flex min-w-0 flex-col",
        children: [e, n]
      }), w[18] = e, w[19] = a) : a = w[19], w[20] !== A ? (i = () => A(), w[20] = A, w[21] = i) : i = w[21], w[22] === Symbol.for("react.memo_cache_sentinel") ? (o = r.fbt._("iOS", null, {
        hk: "3ypPbA"
      }), w[22] = o) : o = w[22], w[23] !== N || w[24] !== i ? (s = (0, t.jsx)(ab.EctoAnchor, {
        ref: N,
        href: aA.ios,
        skipLinkshim: !0,
        className: O,
        onClick: i,
        children: o
      }), w[23] = N, w[24] = i, w[25] = s) : s = w[25], w[26] !== I ? (l = () => I(), w[26] = I, w[27] = l) : l = w[27], w[28] === Symbol.for("react.memo_cache_sentinel") ? (c = r.fbt._("Android", null, {
        hk: "1Jiect"
      }), w[28] = c) : c = w[28], w[29] !== R || w[30] !== l ? (u = (0, t.jsx)(ab.EctoAnchor, {
        ref: R,
        href: aA.android,
        skipLinkshim: !0,
        className: O,
        onClick: l,
        children: c
      }), w[29] = R, w[30] = l, w[31] = u) : u = w[31], w[32] !== s || w[33] !== u ? (d = (0, t.jsxs)("div", {
        className: "flex items-center gap-2",
        children: [s, u]
      }), w[32] = s, w[33] = u, w[34] = d) : d = w[34], w[35] !== a || w[36] !== d ? (f = (0, t.jsxs)("div", {
        className: "flex min-w-0 flex-1 flex-col justify-center gap-1.5",
        children: [a, d]
      }), w[35] = a, w[36] = d, w[37] = f) : f = w[37], w[38] !== S || w[39] !== f ? (h = (0, t.jsxs)("div", {
        ref: S,
        className: "bg-bg-secondary pointer-events-auto flex shrink-0 items-center gap-4 px-4 py-2.5",
        children: [j, f]
      }), w[38] = S, w[39] = f, w[40] = h) : h = w[40], h
    }
    w[41] !== C ? (m = (0, t.jsxs)("div", {
      className: "flex min-w-0 flex-1 flex-col justify-center",
      children: [P, (0, t.jsx)("p", {
        className: "text-footnote text-text-secondary truncate",
        children: "ios" === C ? r.fbt._("Get on the App Store", null, {
          hk: "WJP4k"
        }) : r.fbt._("Get on the Play Store", null, {
          hk: "wRW5r"
        })
      })]
    }), w[41] = C, w[42] = m) : m = w[42];
    let M = "ios" === C ? N : R,
      D = aA[C];
    return w[43] === Symbol.for("react.memo_cache_sentinel") ? (_ = (0, r3.cn)((0, aC.buttonVariants)({
      radius: "rounded",
      size: "32",
      variant: "primary"
    }), "text-subheadline-medium h-auto shrink-0 px-2.75 py-2"), w[43] = _) : _ = w[43], w[44] !== I || w[45] !== A || w[46] !== C ? (g = () => "ios" === C ? A() : I(), w[44] = I, w[45] = A, w[46] = C, w[47] = g) : g = w[47], w[48] === Symbol.for("react.memo_cache_sentinel") ? (v = r.fbt._("Download", null, {
      hk: "19Dqet"
    }), w[48] = v) : v = w[48], w[49] !== M || w[50] !== D || w[51] !== _ || w[52] !== g ? (y = (0, t.jsx)(ab.EctoAnchor, {
      ref: M,
      href: D,
      skipLinkshim: !0,
      className: _,
      onClick: g,
      children: v
    }), w[49] = M, w[50] = D, w[51] = _, w[52] = g, w[53] = y) : y = w[53], w[54] !== L || w[55] !== S || w[56] !== m || w[57] !== y ? (b = (0, t.jsxs)("div", {
      ref: S,
      className: "bg-bg-secondary pointer-events-auto flex shrink-0 items-center gap-3 py-4 ps-3 pe-4",
      children: [L, j, m, y]
    }), w[54] = L, w[55] = S, w[56] = m, w[57] = y, w[58] = b) : b = w[58], b
  }
  var oz = e.i(972176);

  function oY(e) {
    let r, a, i, o, s, l, c, u, d, f, h, p, _, g, v = (0, n.c)(38),
      {
        children: y,
        onOpen: b,
        suppressed: x
      } = e,
      w = void 0 !== x && x,
      [k, C] = (0, m.useState)(!1),
      S = (0, m.useId)();
    v[0] !== b || v[1] !== k ? (r = e => {
      e && !k && b?.(), C(e)
    }, v[0] = b, v[1] = k, v[2] = r) : r = v[2];
    let E = r,
      T = (0, m.useRef)(!1),
      N = (0, m.useRef)(null);
    v[3] !== S ? (a = e => e instanceof Node && (document.getElementById(S)?.contains(e) === !0 || N.current?.contains(e) === !0), v[3] = S, v[4] = a) : a = v[4];
    let A = a,
      R = k && !w;
    v[5] !== k || v[6] !== A || v[7] !== w ? (i = k && !w && (0, t.jsx)("span", {
      "aria-hidden": "true",
      "data-testid": "landing-app-download-hover-bridge",
      className: "absolute end-0 top-0 -z-10 h-full w-90",
      onPointerLeave: e => {
        A(e.relatedTarget) || C(!1)
      }
    }), v[5] = k, v[6] = A, v[7] = w, v[8] = i) : i = v[8];
    let I = k ? S : void 0;
    return v[9] !== E || v[10] !== w ? (o = () => {
      w || (T.current = !0, E(!0))
    }, v[9] = E, v[10] = w, v[11] = o) : o = v[11], v[12] !== A ? (s = e => {
      A(e.relatedTarget) || C(!1)
    }, v[12] = A, v[13] = s) : s = v[13], v[14] !== k ? (l = e => {
      k && e.preventDefault()
    }, v[14] = k, v[15] = l) : l = v[15], v[16] === Symbol.for("react.memo_cache_sentinel") ? (c = () => {
      T.current = !1
    }, v[16] = c) : c = v[16], v[17] !== y || v[18] !== I || v[19] !== o || v[20] !== s || v[21] !== l ? (u = (0, t.jsx)(oz.PopoverTrigger, {
      asChild: !0,
      "aria-describedby": I,
      onPointerEnter: o,
      onPointerLeave: s,
      onClick: l,
      onKeyDown: c,
      children: y
    }), v[17] = y, v[18] = I, v[19] = o, v[20] = s, v[21] = l, v[22] = u) : u = v[22], v[23] !== u || v[24] !== i ? (d = (0, t.jsxs)("span", {
      ref: N,
      className: "relative isolate inline-flex",
      children: [i, u]
    }), v[23] = u, v[24] = i, v[25] = d) : d = v[25], v[26] === Symbol.for("react.memo_cache_sentinel") ? (f = e => {
      T.current && e.preventDefault()
    }, v[26] = f) : f = v[26], v[27] !== A ? (h = e => {
      A(e.relatedTarget) || C(!1)
    }, v[27] = A, v[28] = h) : h = v[28], v[29] === Symbol.for("react.memo_cache_sentinel") ? (p = (0, t.jsx)("div", {
      className: "bg-bg-primary dark:bg-fill-primary shadow-blur-elevation-02 rounded-32 size-90 p-4",
      children: (0, t.jsx)(aK, {
        entrypoint: "landing_header"
      })
    }), v[29] = p) : p = v[29], v[30] !== S || v[31] !== h ? (_ = (0, t.jsx)(oz.PopoverContent, {
      id: S,
      side: "bottom",
      align: "end",
      sideOffset: 0,
      onOpenAutoFocus: f,
      onPointerLeave: h,
      className: "w-auto border-none bg-transparent p-0 pt-2 shadow-none backdrop-blur-none data-[state=closed]:!animate-none data-[state=open]:!animate-none",
      children: p
    }), v[30] = S, v[31] = h, v[32] = _) : _ = v[32], v[33] !== E || v[34] !== d || v[35] !== _ || v[36] !== R ? (g = (0, t.jsxs)(oz.Popover, {
      open: R,
      onOpenChange: E,
      children: [d, _]
    }), v[33] = E, v[34] = d, v[35] = _, v[36] = R, v[37] = g) : g = v[37], g
  }
  var oW = e.i(585152);
  let oq = "/images/landing/mac-promo-icon.png",
    oV = `${oq} 1x, /images/landing/mac-promo-icon@1.5x.png 1.5x, /images/landing/mac-promo-icon@2x.png 2x, /images/landing/mac-promo-icon@3x.png 3x`;

  function oK(e) {
    let i, o, s, l, c, u, d, f, h, p, _, g, v, y, b, x, w, k, C, S, E, T, N, A, R, I, O, L, j, P = (0, n.c)(65),
      {
        anchorVisible: M,
        onOpenChange: D,
        children: H
      } = e,
      {
        macPromo: F,
        recordMacPromoShown: U,
        recordMacPromoDownloaded: G
      } = (0, oW.useTheme)(),
      [B, z] = (0, m.useState)(!1),
      Y = (0, m.useRef)(!1),
      W = (0, m.useRef)(!1),
      q = (0, az.useIsMacDesktop)(),
      V = (0, az.useIsHatchMacApp)(),
      K = (0, aM.useIsMobileBreakpoint)(),
      {
        failed: X,
        onDownloadClick: $
      } = (0, aq.useMacAppDownload)();
    P[0] === Symbol.for("react.memo_cache_sentinel") ? (i = (0, aW.getHatchMacAppDownloadCopy)(), P[0] = i) : i = P[0];
    let Q = i.downloadFailed,
      Z = q && !V && !K && M,
      J = B && Z;
    P[1] !== Z || P[2] !== F.downloaded || P[3] !== F.lastShownDay || P[4] !== F.shown ? (o = Z && !F.downloaded && F.shown < 3 && F.lastShownDay !== new Date().toISOString().slice(0, 10), P[1] = Z, P[2] = F.downloaded, P[3] = F.lastShownDay, P[4] = F.shown, P[5] = o) : o = P[5];
    let ee = o;
    P[6] === Symbol.for("react.memo_cache_sentinel") ? (s = {
      surface: aY.LANDING_APP_UPSELL_SURFACE,
      screen: "app_download_promo",
      entrypoint: "promo_intro_auto",
      promo_shape: "intro",
      platform: "mac"
    }, P[6] = s) : s = P[6];
    let et = s;
    P[7] === Symbol.for("react.memo_cache_sentinel") ? (l = {
      eventName: aV.HatchImpressionEvent.DESKTOP_APP_UPSELL_INTRO_IMPRESSION,
      actionTarget: "landing_mac_promo",
      metadata: et
    }, P[7] = l) : l = P[7];
    let {
      ref: en
    } = (0, aE.useTrackedImpressionRef)(l);
    P[8] === Symbol.for("react.memo_cache_sentinel") ? (c = {
      eventName: aS.HatchClickEvent.DESKTOP_APP_UPSELL_INTRO_DOWNLOAD_CLICK,
      actionTarget: "landing_mac_promo_download",
      actionType: "click",
      metadata: et
    }, P[8] = c) : c = P[8];
    let {
      ref: er,
      onClick: ea
    } = (0, aE.useTrackedClickRef)(c);
    P[9] === Symbol.for("react.memo_cache_sentinel") ? (u = {
      eventName: aS.HatchClickEvent.APP_UPSELL_PROMO_CLOSE_CLICK,
      actionTarget: "landing_mac_promo_dismiss",
      actionType: "click",
      metadata: et
    }, P[9] = u) : u = P[9];
    let {
      ref: ei,
      onClick: eo
    } = (0, aE.useTrackedClickRef)(u);
    P[10] !== ee || P[11] !== D || P[12] !== U ? (d = () => {
      if (!ee || Y.current) return;
      let e = setTimeout(() => {
        Y.current = !0, U(), z(!0), D(!0)
      }, 700);
      return () => {
        clearTimeout(e)
      }
    }, f = [ee, D, U], P[10] = ee, P[11] = D, P[12] = U, P[13] = d, P[14] = f) : (d = P[13], f = P[14]), (0, m.useEffect)(d, f), P[15] !== Z || P[16] !== D ? (h = () => {
      Y.current && !W.current && (z(Z), D(Z))
    }, P[15] = Z, P[16] = D, P[17] = h) : h = P[17], P[18] !== Z || P[19] !== F.downloaded || P[20] !== D ? (p = [Z, F.downloaded, D], P[18] = Z, P[19] = F.downloaded, P[20] = D, P[21] = p) : p = P[21], (0, m.useEffect)(h, p), P[22] !== D ? (_ = () => {
      W.current = !0, z(!1), D(!1)
    }, P[22] = D, P[23] = _) : _ = P[23];
    let es = _;
    P[24] === Symbol.for("react.memo_cache_sentinel") ? (g = r.fbs._("Meet {productName} for Mac", [r.fbs._param("productName", a.PRODUCT_BRAND.shortName)], {
      hk: "1omT9C"
    }), P[24] = g) : g = P[24];
    let el = g;
    P[25] === Symbol.for("react.memo_cache_sentinel") ? (v = r.fbs._("{productName} can complete tasks using the files and local apps on your computer.", [r.fbs._param("productName", a.PRODUCT_BRAND.shortName)], {
      hk: "4AxOM8"
    }), P[25] = v) : v = P[25];
    let ec = v;
    P[26] !== J ? (y = J ? r.fbt._("A promotion for the desktop app is open. It offers a download and a close button.", null, {
      hk: "2ZmsVi"
    }) : null, P[26] = J, P[27] = y) : y = P[27], P[28] !== y ? (b = (0, t.jsx)("div", {
      role: "status",
      "aria-live": "polite",
      className: "sr-only",
      children: y
    }), P[28] = y, P[29] = b) : b = P[29];
    let eu = b;
    return P[30] !== es ? (x = e => {
      e || es()
    }, P[30] = es, P[31] = x) : x = P[31], P[32] !== H ? (w = (0, t.jsx)(oz.PopoverAnchor, {
      children: H
    }), P[32] = H, P[33] = w) : w = P[33], P[34] === Symbol.for("react.memo_cache_sentinel") ? (k = (0, t.jsx)("img", {
      alt: "",
      src: oq,
      srcSet: oV,
      width: 48,
      height: 48,
      className: "shrink-0 object-contain"
    }), P[34] = k) : k = P[34], P[35] === Symbol.for("react.memo_cache_sentinel") ? (C = (0, t.jsxs)("div", {
      className: "flex items-center gap-2",
      children: [k, (0, t.jsxs)("div", {
        className: "flex min-w-0 flex-1 flex-col pe-6",
        children: [(0, t.jsx)(aB.Text, {
          as: "p",
          variant: "subheadline-medium",
          color: "primary",
          children: el
        }), (0, t.jsx)(aB.Text, {
          as: "p",
          variant: "footnote",
          color: "secondary",
          children: ec
        })]
      })]
    }), P[35] = C) : C = P[35], P[36] !== ea || P[37] !== $ || P[38] !== G ? (S = e => {
      ea(), $(e), G()
    }, P[36] = ea, P[37] = $, P[38] = G, P[39] = S) : S = P[39], P[40] === Symbol.for("react.memo_cache_sentinel") ? (E = (0, r3.cn)((0, aC.buttonVariants)({
      radius: "rounded",
      size: "36",
      variant: "primary"
    }), "w-full no-underline"), T = r.fbs._("Download", null, {
      hk: "10ELob"
    }), P[40] = E, P[41] = T) : (E = P[40], T = P[41]), P[42] !== er || P[43] !== S ? (N = (0, t.jsx)(ab.EctoAnchor, {
      ref: er,
      href: "/api/hatch/app-download/mac",
      skipLinkshim: !0,
      onClick: S,
      className: E,
      children: T
    }), P[42] = er, P[43] = S, P[44] = N) : N = P[44], P[45] !== X ? (A = X && (0, t.jsx)(aB.Text, {
      as: "p",
      role: "alert",
      variant: "caption-1",
      color: "secondary",
      className: "px-1 py-1.5 text-center",
      children: Q
    }), P[45] = X, P[46] = A) : A = P[46], P[47] === Symbol.for("react.memo_cache_sentinel") ? (R = r.fbs._("Close", null, {
      hk: "4eQCeT"
    }), P[47] = R) : R = P[47], P[48] !== es || P[49] !== eo ? (I = () => {
      eo(), es()
    }, P[48] = es, P[49] = eo, P[50] = I) : I = P[50], P[51] !== ei || P[52] !== I ? (O = (0, t.jsx)(iB.IconButton, {
      ref: ei,
      icon: oF.default,
      size: "28",
      variant: "elevated",
      label: R,
      className: "absolute end-2 top-2",
      onClick: I
    }), P[51] = ei, P[52] = I, P[53] = O) : O = P[53], P[54] !== en || P[55] !== N || P[56] !== A || P[57] !== O ? (L = (0, t.jsx)(aP.EctoErrorBoundary, {
      surface: ay.HATCH_SENTRY_SURFACES.LANDING,
      children: (0, t.jsx)(oz.PopoverContent, {
        side: "bottom",
        align: "end",
        sideOffset: 0,
        onOpenAutoFocus: oQ,
        onPointerDownOutside: o$,
        onInteractOutside: oX,
        className: "w-auto border-none bg-transparent p-0 pt-2 shadow-none backdrop-blur-none",
        children: (0, t.jsxs)("div", {
          ref: en,
          className: "bg-bg-primary dark:bg-fill-primary shadow-blur-elevation-02 rounded-20 relative flex w-90 flex-col gap-4 p-4",
          children: [C, N, A, O]
        })
      })
    }), P[54] = en, P[55] = N, P[56] = A, P[57] = O, P[58] = L) : L = P[58], P[59] !== eu || P[60] !== J || P[61] !== x || P[62] !== w || P[63] !== L ? (j = (0, t.jsxs)(oz.Popover, {
      open: J,
      onOpenChange: x,
      children: [w, L, eu]
    }), P[59] = eu, P[60] = J, P[61] = x, P[62] = w, P[63] = L, P[64] = j) : j = P[64], j
  }

  function oX(e) {
    return e.preventDefault()
  }

  function o$(e) {
    return e.preventDefault()
  }

  function oQ(e) {
    return e.preventDefault()
  }
  var oZ, oJ, o0, o1, o2, o3, o4, o5, o6, o8, o7 = function() {
      return "u" > typeof window
    },
    o9 = function() {
      return o0 || o7() && (o0 = window.gsap) && o0.registerPlugin && o0
    },
    se = function(e) {
      return "string" == typeof e
    },
    st = function(e) {
      return "function" == typeof e
    },
    sn = function(e, t) {
      var n = "x" === t ? "Width" : "Height",
        r = "scroll" + n,
        a = "client" + n;
      return e === o2 || e === o3 || e === o4 ? Math.max(o3[r], o4[r]) - (o2["inner" + n] || o3[a] || o4[a]) : e[r] - e["offset" + n]
    },
    sr = function(e, t) {
      var n = "scroll" + ("x" === t ? "Left" : "Top");
      return e === o2 && (null != e.pageXOffset ? n = "page" + t.toUpperCase() + "Offset" : e = null != o3[n] ? o3 : o4),
        function() {
          return e[n]
        }
    },
    sa = function(e, t, n, r) {
      if (st(e) && (e = e(t, n, r)), "object" != typeof e) return se(e) && "max" !== e && "=" !== e.charAt(1) ? {
        x: e,
        y: e
      } : {
        y: e
      };
      if (e.nodeType) return {
        y: e,
        x: e
      };
      var a, i = {};
      for (a in e) i[a] = "onAutoKill" !== a && st(e[a]) ? e[a](t, n, r) : e[a];
      return i
    },
    si = function(e, t) {
      if (!(e = o5(e)[0]) || !e.getBoundingClientRect) return console.warn("scrollTo target doesn't exist. Using 0") || {
        x: 0,
        y: 0
      };
      var n = e.getBoundingClientRect(),
        r = !t || t === o2 || t === o4,
        a = r ? {
          top: o3.clientTop - (o2.pageYOffset || o3.scrollTop || o4.scrollTop || 0),
          left: o3.clientLeft - (o2.pageXOffset || o3.scrollLeft || o4.scrollLeft || 0)
        } : t.getBoundingClientRect(),
        i = {
          x: n.left - a.left,
          y: n.top - a.top
        };
      return !r && t && (i.x += sr(t, "x")(), i.y += sr(t, "y")()), i
    },
    so = function(e, t, n, r, a) {
      return isNaN(e) || "object" == typeof e ? se(e) && "=" === e.charAt(1) ? parseFloat(e.substr(2)) * ("-" === e.charAt(0) ? -1 : 1) + r - a : "max" === e ? sn(t, n) - a : Math.min(sn(t, n), si(e, t)[n] - a) : parseFloat(e) - a
    },
    ss = function() {
      o0 = o9(), o7() && o0 && "u" > typeof document && document.body && (o2 = window, o4 = document.body, o3 = document.documentElement, o5 = o0.utils.toArray, o0.config({
        autoKillThreshold: 7
      }), o6 = o0.config(), o1 = 1)
    },
    sl = {
      version: "3.15.0",
      name: "scrollTo",
      rawVars: 1,
      register: function(e) {
        o0 = e, ss()
      },
      init: function(e, t, n, r, a) {
        o1 || ss();
        var i = o0.getProperty(e, "scrollSnapType");
        this.isWin = e === o2, this.target = e, this.tween = n, t = sa(t, r, e, a), this.vars = t, this.autoKill = !!("autoKill" in t ? t : o6).autoKill, this.getX = sr(e, "x"), this.getY = sr(e, "y"), this.x = this.xPrev = this.getX(), this.y = this.yPrev = this.getY(), o8 || (o8 = o0.core.globals().ScrollTrigger), "smooth" === o0.getProperty(e, "scrollBehavior") && o0.set(e, {
          scrollBehavior: "auto"
        }), i && "none" !== i && (this.snap = 1, this.snapInline = e.style.scrollSnapType, e.style.scrollSnapType = "none"), null != t.x ? (this.add(this, "x", this.x, so(t.x, e, "x", this.x, t.offsetX || 0), r, a), this._props.push("scrollTo_x")) : this.skipX = 1, null != t.y ? (this.add(this, "y", this.y, so(t.y, e, "y", this.y, t.offsetY || 0), r, a), this._props.push("scrollTo_y")) : this.skipY = 1
      },
      render: function(e, t) {
        for (var n, r, a, i, o, s = t._pt, l = t.target, c = t.tween, u = t.autoKill, d = t.xPrev, f = t.yPrev, h = t.isWin, p = t.snap, m = t.snapInline; s;) s.r(e, s.d), s = s._next;
        n = h || !t.skipX ? t.getX() : d, a = (r = h || !t.skipY ? t.getY() : f) - f, i = n - d, o = o6.autoKillThreshold, t.x < 0 && (t.x = 0), t.y < 0 && (t.y = 0), u && (!t.skipX && (i > o || i < -o) && n < sn(l, "x") && (t.skipX = 1), !t.skipY && (a > o || a < -o) && r < sn(l, "y") && (t.skipY = 1), t.skipX && t.skipY && (c.kill(), t.vars.onAutoKill && t.vars.onAutoKill.apply(c, t.vars.onAutoKillParams || []))), h ? o2.scrollTo(t.skipX ? n : t.x, t.skipY ? r : t.y) : (t.skipY || (l.scrollTop = t.y), t.skipX || (l.scrollLeft = t.x)), p && (1 === e || 0 === e) && (r = l.scrollTop, n = l.scrollLeft, m ? l.style.scrollSnapType = m : l.style.removeProperty("scroll-snap-type"), l.scrollTop = r + 1, l.scrollLeft = n + 1, l.scrollTop = r, l.scrollLeft = n), t.xPrev = t.x, t.yPrev = t.y, o8 && o8.update()
      },
      kill: function(e) {
        var t = "scrollTo" === e,
          n = this._props.indexOf(e);
        return (t || "scrollTo_x" === e) && (this.skipX = 1), (t || "scrollTo_y" === e) && (this.skipY = 1), n > -1 && this._props.splice(n, 1), !this._props.length
      }
    };
  sl.max = sn, sl.getOffset = si, sl.buildGetter = sr, sl.config = function(e) {
    for (var t in o6 || ss() || (o6 = o0.config()), e) o6[t] = e[t]
  }, o9() && o0.registerPlugin(sl);
  var sc, su, sd, sf, sh, sp, sm, s_, sg, sv, sy, sb, sx, sw = function() {
      return sc || "u" > typeof window && (sc = window.gsap) && sc.registerPlugin && sc
    },
    sk = 1,
    sC = [],
    sS = [],
    sE = [],
    sT = Date.now,
    sN = function(e, t) {
      return t
    },
    sA = function() {
      var e = sg.core,
        t = e.bridge || {},
        n = e._scrollers,
        r = e._proxies;
      n.push.apply(n, sS), r.push.apply(r, sE), sS = n, sE = r, sN = function(e, n) {
        return t[e](n)
      }
    },
    sR = function(e, t) {
      return ~sE.indexOf(e) && sE[sE.indexOf(e) + 1][t]
    },
    sI = function(e) {
      return !!~sv.indexOf(e)
    },
    sO = function(e, t, n, r, a) {
      return e.addEventListener(t, n, {
        passive: !1 !== r,
        capture: !!a
      })
    },
    sL = function(e, t, n, r) {
      return e.removeEventListener(t, n, !!r)
    },
    sj = "scrollLeft",
    sP = "scrollTop",
    sM = function() {
      return sy && sy.isPressed || sS.cache++
    },
    sD = function(e, t) {
      var n = function n(r) {
        if (r || 0 === r) {
          sk && (sd.history.scrollRestoration = "manual");
          var a = sy && sy.isPressed;
          e(r = n.v = Math.round(r) || (sy && sy.iOS ? 1 : 0)), n.cacheID = sS.cache, a && sN("ss", r)
        } else(t || sS.cache !== n.cacheID || sN("ref")) && (n.cacheID = sS.cache, n.v = e());
        return n.v + n.offset
      };
      return n.offset = 0, e && n
    },
    sH = {
      s: sj,
      p: "left",
      p2: "Left",
      os: "right",
      os2: "Right",
      d: "width",
      d2: "Width",
      a: "x",
      sc: sD(function(e) {
        return arguments.length ? sd.scrollTo(e, sF.sc()) : sd.pageXOffset || sf[sj] || sh[sj] || sp[sj] || 0
      })
    },
    sF = {
      s: sP,
      p: "top",
      p2: "Top",
      os: "bottom",
      os2: "Bottom",
      d: "height",
      d2: "Height",
      a: "y",
      op: sH,
      sc: sD(function(e) {
        return arguments.length ? sd.scrollTo(sH.sc(), e) : sd.pageYOffset || sf[sP] || sh[sP] || sp[sP] || 0
      })
    },
    sU = function(e, t) {
      return (t && t._ctx && t._ctx.selector || sc.utils.toArray)(e)[0] || ("string" == typeof e && !1 !== sc.config().nullTargetWarn ? console.warn("Element not found:", e) : null)
    },
    sG = function(e, t) {
      for (var n = t.length; n--;)
        if (t[n] === e || t[n].contains(e)) return !0;
      return !1
    },
    sB = function(e, t) {
      var n = t.s,
        r = t.sc;
      sI(e) && (e = sf.scrollingElement || sh);
      var a = sS.indexOf(e),
        i = r === sF.sc ? 1 : 2;
      ~a || (a = sS.push(e) - 1), sS[a + i] || sO(e, "scroll", sM);
      var o = sS[a + i],
        s = o || (sS[a + i] = sD(sR(e, n), !0) || (sI(e) ? r : sD(function(t) {
          return arguments.length ? e[n] = t : e[n]
        })));
      return s.target = e, o || (s.smooth = "smooth" === sc.getProperty(e, "scrollBehavior")), s
    },
    sz = function(e, t, n) {
      var r = e,
        a = e,
        i = sT(),
        o = i,
        s = t || 50,
        l = Math.max(500, 3 * s),
        c = function(e, t) {
          var l = sT();
          t || l - i > s ? (a = r, r = e, o = i, i = l) : n ? r += e : r = a + (e - a) / (l - o) * (i - o)
        };
      return {
        update: c,
        reset: function() {
          a = r = n ? 0 : r, o = i = 0
        },
        getVelocity: function(e) {
          var t = o,
            s = a,
            u = sT();
          return (e || 0 === e) && e !== r && c(e), i === o || u - o > l ? 0 : (r + (n ? s : -s)) / ((n ? u : i) - t) * 1e3
        }
      }
    },
    sY = function(e, t) {
      return t && !e._gsapAllow && !1 !== e.cancelable && e.preventDefault(), e.changedTouches ? e.changedTouches[0] : e
    },
    sW = function(e) {
      var t = Math.max.apply(Math, e),
        n = Math.min.apply(Math, e);
      return Math.abs(t) >= Math.abs(n) ? t : n
    },
    sq = function() {
      (sg = sc.core.globals().ScrollTrigger) && sg.core && sA()
    },
    sV = function(e) {
      return sc = e || sw(), !su && sc && "u" > typeof document && document.body && (sd = window, sh = (sf = document).documentElement, sp = sf.body, sv = [sd, sf, sh, sp], sc.utils.clamp, sx = sc.core.context || function() {}, s_ = "onpointerenter" in sp ? "pointer" : "mouse", sm = sK.isTouch = sd.matchMedia && sd.matchMedia("(hover: none), (pointer: coarse)").matches ? 1 : 2 * ("ontouchstart" in sd || navigator.maxTouchPoints > 0 || navigator.msMaxTouchPoints > 0), sb = sK.eventTypes = ("ontouchstart" in sh ? "touchstart,touchmove,touchcancel,touchend" : !("onpointerdown" in sh) ? "mousedown,mousemove,mouseup,mouseup" : "pointerdown,pointermove,pointercancel,pointerup").split(","), setTimeout(function() {
        return sk = 0
      }, 500), su = 1), sg || sq(), su
    };
  sH.op = sF, sS.cache = 0;
  var sK = function() {
    var e;

    function t(e) {
      this.init(e)
    }
    return t.prototype.init = function(e) {
        su || sV(sc) || console.warn("Please gsap.registerPlugin(Observer)"), sg || sq();
        var t = e.tolerance,
          n = e.dragMinimum,
          r = e.type,
          a = e.target,
          i = e.lineHeight,
          o = e.debounce,
          s = e.preventDefault,
          l = e.onStop,
          c = e.onStopDelay,
          u = e.ignore,
          d = e.wheelSpeed,
          f = e.event,
          h = e.onDragStart,
          p = e.onDragEnd,
          m = e.onDrag,
          _ = e.onPress,
          g = e.onRelease,
          v = e.onRight,
          y = e.onLeft,
          b = e.onUp,
          x = e.onDown,
          w = e.onChangeX,
          k = e.onChangeY,
          C = e.onChange,
          S = e.onToggleX,
          E = e.onToggleY,
          T = e.onHover,
          N = e.onHoverEnd,
          A = e.onMove,
          R = e.ignoreCheck,
          I = e.isNormalizer,
          O = e.onGestureStart,
          L = e.onGestureEnd,
          j = e.onWheel,
          P = e.onEnable,
          M = e.onDisable,
          D = e.onClick,
          H = e.scrollSpeed,
          F = e.capture,
          U = e.allowClicks,
          G = e.lockAxis,
          B = e.onLockAxis;
        this.target = a = sU(a) || sh, this.vars = e, u && (u = sc.utils.toArray(u)), t = t || 1e-9, n = n || 0, d = d || 1, H = H || 1, r = r || "wheel,touch,pointer", o = !1 !== o, i || (i = parseFloat(sd.getComputedStyle(sp).lineHeight) || 22);
        var z, Y, W, q, V, K, X, $ = this,
          Q = 0,
          Z = 0,
          J = e.passive || !s && !1 !== e.passive,
          ee = sB(a, sH),
          et = sB(a, sF),
          en = ee(),
          er = et(),
          ea = ~r.indexOf("touch") && !~r.indexOf("pointer") && "pointerdown" === sb[0],
          ei = sI(a),
          eo = a.ownerDocument || sf,
          es = [0, 0, 0],
          el = [0, 0, 0],
          ec = 0,
          eu = function() {
            return ec = sT()
          },
          ed = function(e, t) {
            return ($.event = e) && u && sG(e.target, u) || t && ea && "touch" !== e.pointerType || R && R(e, t)
          },
          ef = function() {
            var e = $.deltaX = sW(es),
              n = $.deltaY = sW(el),
              r = Math.abs(e) >= t,
              a = Math.abs(n) >= t;
            C && (r || a) && C($, e, n, es, el), r && (v && $.deltaX > 0 && v($), y && $.deltaX < 0 && y($), w && w($), S && $.deltaX < 0 != Q < 0 && S($), Q = $.deltaX, es[0] = es[1] = es[2] = 0), a && (x && $.deltaY > 0 && x($), b && $.deltaY < 0 && b($), k && k($), E && $.deltaY < 0 != Z < 0 && E($), Z = $.deltaY, el[0] = el[1] = el[2] = 0), (q || W) && (A && A($), W && (h && 1 === W && h($), m && m($), W = 0), q = !1), K && (K = !1, 1) && B && B($), V && (j($), V = !1), z = 0
          },
          eh = function(e, t, n) {
            es[n] += e, el[n] += t, $._vx.update(e), $._vy.update(t), o ? z || (z = requestAnimationFrame(ef)) : ef()
          },
          ep = function(e, t) {
            G && !X && ($.axis = X = Math.abs(e) > Math.abs(t) ? "x" : "y", K = !0), "y" !== X && (es[2] += e, $._vx.update(e, !0)), "x" !== X && (el[2] += t, $._vy.update(t, !0)), o ? z || (z = requestAnimationFrame(ef)) : ef()
          },
          em = function(e) {
            if (!ed(e, 1)) {
              var t = (e = sY(e, s)).clientX,
                r = e.clientY,
                a = t - $.x,
                i = r - $.y,
                o = $.isDragging;
              $.x = t, $.y = r, (o || (a || i) && (Math.abs($.startX - t) >= n || Math.abs($.startY - r) >= n)) && (W || (W = o ? 2 : 1), o || ($.isDragging = !0), ep(a, i))
            }
          },
          e_ = $.onPress = function(e) {
            ed(e, 1) || e && e.button || ($.axis = X = null, Y.pause(), $.isPressed = !0, e = sY(e), Q = Z = 0, $.startX = $.x = e.clientX, $.startY = $.y = e.clientY, $._vx.reset(), $._vy.reset(), sO(I ? a : eo, sb[1], em, J, !0), $.deltaX = $.deltaY = 0, _ && _($))
          },
          eg = $.onRelease = function(e) {
            if (!ed(e, 1)) {
              sL(I ? a : eo, sb[1], em, !0);
              var t = !isNaN($.y - $.startY),
                n = $.isDragging,
                r = n && (Math.abs($.x - $.startX) > 3 || Math.abs($.y - $.startY) > 3),
                i = sY(e);
              !r && t && ($._vx.reset(), $._vy.reset(), s && U && sc.delayedCall(.08, function() {
                if (sT() - ec > 300 && !e.defaultPrevented) {
                  if (e.target.click) e.target.click();
                  else if (eo.createEvent) {
                    var t = eo.createEvent("MouseEvents");
                    t.initMouseEvent("click", !0, !0, sd, 1, i.screenX, i.screenY, i.clientX, i.clientY, !1, !1, !1, !1, 0, null), e.target.dispatchEvent(t)
                  }
                }
              })), $.isDragging = $.isGesturing = $.isPressed = !1, l && n && !I && Y.restart(!0), W && ef(), p && n && p($), g && g($, r)
            }
          },
          ev = function(e) {
            return e.touches && e.touches.length > 1 && ($.isGesturing = !0) && O(e, $.isDragging)
          },
          ey = function() {
            return $.isGesturing = !1, L($)
          },
          eb = function(e) {
            if (!ed(e)) {
              var t = ee(),
                n = et();
              eh((t - en) * H, (n - er) * H, 1), en = t, er = n, l && Y.restart(!0)
            }
          },
          ex = function(e) {
            if (!ed(e)) {
              e = sY(e, s), j && (V = !0);
              var t = (1 === e.deltaMode ? i : 2 === e.deltaMode ? sd.innerHeight : 1) * d;
              eh(e.deltaX * t, e.deltaY * t, 0), l && !I && Y.restart(!0)
            }
          },
          ew = function(e) {
            if (!ed(e)) {
              var t = e.clientX,
                n = e.clientY,
                r = t - $.x,
                a = n - $.y;
              $.x = t, $.y = n, q = !0, l && Y.restart(!0), (r || a) && ep(r, a)
            }
          },
          ek = function(e) {
            $.event = e, T($)
          },
          eC = function(e) {
            $.event = e, N($)
          },
          eS = function(e) {
            return ed(e) || sY(e, s) && D($)
          };
        Y = $._dc = sc.delayedCall(c || .25, function() {
          $._vx.reset(), $._vy.reset(), Y.pause(), l && l($)
        }).pause(), $.deltaX = $.deltaY = 0, $._vx = sz(0, 50, !0), $._vy = sz(0, 50, !0), $.scrollX = ee, $.scrollY = et, $.isDragging = $.isGesturing = $.isPressed = !1, sx(this), $.enable = function(e) {
          return !$.isEnabled && (sO(ei ? eo : a, "scroll", sM), r.indexOf("scroll") >= 0 && sO(ei ? eo : a, "scroll", eb, J, F), r.indexOf("wheel") >= 0 && sO(a, "wheel", ex, J, F), (r.indexOf("touch") >= 0 && sm || r.indexOf("pointer") >= 0) && (sO(a, sb[0], e_, J, F), sO(eo, sb[2], eg), sO(eo, sb[3], eg), U && sO(a, "click", eu, !0, !0), D && sO(a, "click", eS), O && sO(eo, "gesturestart", ev), L && sO(eo, "gestureend", ey), T && sO(a, s_ + "enter", ek), N && sO(a, s_ + "leave", eC), A && sO(a, s_ + "move", ew)), $.isEnabled = !0, $.isDragging = $.isGesturing = $.isPressed = q = W = !1, $._vx.reset(), $._vy.reset(), en = ee(), er = et(), e && e.type && e_(e), P && P($)), $
        }, $.disable = function() {
          $.isEnabled && (sC.filter(function(e) {
            return e !== $ && sI(e.target)
          }).length || sL(ei ? eo : a, "scroll", sM), $.isPressed && ($._vx.reset(), $._vy.reset(), sL(I ? a : eo, sb[1], em, !0)), sL(ei ? eo : a, "scroll", eb, F), sL(a, "wheel", ex, F), sL(a, sb[0], e_, F), sL(eo, sb[2], eg), sL(eo, sb[3], eg), sL(a, "click", eu, !0), sL(a, "click", eS), sL(eo, "gesturestart", ev), sL(eo, "gestureend", ey), sL(a, s_ + "enter", ek), sL(a, s_ + "leave", eC), sL(a, s_ + "move", ew), $.isEnabled = $.isPressed = $.isDragging = !1, M && M($))
        }, $.kill = $.revert = function() {
          $.disable();
          var e = sC.indexOf($);
          e >= 0 && sC.splice(e, 1), sy === $ && (sy = 0)
        }, sC.push($), I && sI(a) && (sy = $), $.enable(f)
      }, e = [{
        key: "velocityX",
        get: function() {
          return this._vx.getVelocity()
        }
      }, {
        key: "velocityY",
        get: function() {
          return this._vy.getVelocity()
        }
      }],
      function(e, t) {
        for (var n = 0; n < t.length; n++) {
          var r = t[n];
          r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
      }(t.prototype, e), t
  }();
  sK.version = "3.15.0", sK.create = function(e) {
    return new sK(e)
  }, sK.register = sV, sK.getAll = function() {
    return sC.slice()
  }, sK.getById = function(e) {
    return sC.filter(function(t) {
      return t.vars.id === e
    })[0]
  }, sw() && sc.registerPlugin(sK);
  var sX, s$, sQ, sZ, sJ, s0, s1, s2, s3, s4, s5, s6, s8, s7, s9, le, lt, ln, lr, la, li, lo, ls, ll, lc, lu, ld, lf, lh, lp, lm, l_, lg, lv, ly, lb, lx, lw, lk = 1,
    lC = Date.now,
    lS = lC(),
    lE = 0,
    lT = 0,
    lN = function(e, t, n) {
      var r = lB(e) && ("clamp(" === e.substr(0, 6) || e.indexOf("max") > -1);
      return n["_" + t + "Clamp"] = r, r ? e.substr(6, e.length - 7) : e
    },
    lA = function(e, t) {
      return t && (!lB(e) || "clamp(" !== e.substr(0, 6)) ? "clamp(" + e + ")" : e
    },
    lR = function() {
      return s7 = 1
    },
    lI = function() {
      return s7 = 0
    },
    lO = function(e) {
      return e
    },
    lL = function(e) {
      return Math.round(1e5 * e) / 1e5 || 0
    },
    lj = function() {
      return "u" > typeof window
    },
    lP = function() {
      return sX || lj() && (sX = window.gsap) && sX.registerPlugin && sX
    },
    lM = function(e) {
      return !!~s1.indexOf(e)
    },
    lD = function(e) {
      return ("Height" === e ? lm : sQ["inner" + e]) || sJ["client" + e] || s0["client" + e]
    },
    lH = function(e) {
      return sR(e, "getBoundingClientRect") || (lM(e) ? function() {
        return cW.width = sQ.innerWidth, cW.height = lm, cW
      } : function() {
        return ce(e)
      })
    },
    lF = function(e, t, n) {
      var r = n.d,
        a = n.d2,
        i = n.a;
      return (i = sR(e, "getBoundingClientRect")) ? function() {
        return i()[r]
      } : function() {
        return (t ? lD(a) : e["client" + a]) || 0
      }
    },
    lU = function(e, t) {
      var n = t.s,
        r = t.d2,
        a = t.d,
        i = t.a;
      return Math.max(0, (i = sR(e, n = "scroll" + r)) ? i() - lH(e)()[a] : lM(e) ? (sJ[n] || s0[n]) - lD(r) : e[n] - e["offset" + r])
    },
    lG = function(e, t) {
      for (var n = 0; n < lr.length; n += 3)(!t || ~t.indexOf(lr[n + 1])) && e(lr[n], lr[n + 1], lr[n + 2])
    },
    lB = function(e) {
      return "string" == typeof e
    },
    lz = function(e) {
      return "function" == typeof e
    },
    lY = function(e) {
      return "number" == typeof e
    },
    lW = function(e) {
      return "object" == typeof e
    },
    lq = function(e, t, n) {
      return e && e.progress(+!t) && n && e.pause()
    },
    lV = function(e, t, n) {
      if (e.enabled) {
        var r = e._ctx ? e._ctx.add(function() {
          return t(e, n)
        }) : t(e, n);
        r && r.totalTime && (e.callbackAnimation = r)
      }
    },
    lK = Math.abs,
    lX = "left",
    l$ = "right",
    lQ = "bottom",
    lZ = "width",
    lJ = "height",
    l0 = "Right",
    l1 = "Left",
    l2 = "Bottom",
    l3 = "padding",
    l4 = "margin",
    l5 = "Width",
    l6 = "Height",
    l8 = function(e) {
      return sQ.getComputedStyle(e.nodeType === Node.DOCUMENT_NODE ? e.scrollingElement : e)
    },
    l7 = function(e) {
      var t = l8(e).position;
      e.style.position = "absolute" === t || "fixed" === t ? t : "relative"
    },
    l9 = function(e, t) {
      for (var n in t) n in e || (e[n] = t[n]);
      return e
    },
    ce = function(e, t) {
      var n = t && "matrix(1, 0, 0, 1, 0, 0)" !== l8(e)[s9] && sX.to(e, {
          x: 0,
          y: 0,
          xPercent: 0,
          yPercent: 0,
          rotation: 0,
          rotationX: 0,
          rotationY: 0,
          scale: 1,
          skewX: 0,
          skewY: 0
        }).progress(1),
        r = e.getBoundingClientRect ? e.getBoundingClientRect() : e.scrollingElement.getBoundingClientRect();
      return n && n.progress(0).kill(), r
    },
    ct = function(e, t) {
      var n = t.d2;
      return e["offset" + n] || e["client" + n] || 0
    },
    cn = function(e) {
      var t, n = [],
        r = e.labels,
        a = e.duration();
      for (t in r) n.push(r[t] / a);
      return n
    },
    cr = function(e) {
      var t = sX.utils.snap(e),
        n = Array.isArray(e) && e.slice(0).sort(function(e, t) {
          return e - t
        });
      return n ? function(e, r, a) {
        var i;
        if (void 0 === a && (a = .001), !r) return t(e);
        if (r > 0) {
          for (e -= a, i = 0; i < n.length; i++)
            if (n[i] >= e) return n[i];
          return n[i - 1]
        }
        for (i = n.length, e += a; i--;)
          if (n[i] <= e) return n[i];
        return n[0]
      } : function(n, r, a) {
        void 0 === a && (a = .001);
        var i = t(n);
        return !r || Math.abs(i - n) < a || i - n < 0 == r < 0 ? i : t(r < 0 ? n - e : n + e)
      }
    },
    ca = function(e, t, n, r) {
      return n.split(",").forEach(function(n) {
        return e(t, n, r)
      })
    },
    ci = function(e, t, n, r, a) {
      return e.addEventListener(t, n, {
        passive: !r,
        capture: !!a
      })
    },
    co = function(e, t, n, r) {
      return e.removeEventListener(t, n, !!r)
    },
    cs = function(e, t, n) {
      (n = n && n.wheelHandler) && (e(t, "wheel", n), e(t, "touchmove", n))
    },
    cl = {
      startColor: "green",
      endColor: "red",
      indent: 0,
      fontSize: "16px",
      fontWeight: "normal"
    },
    cc = {
      toggleActions: "play",
      anticipatePin: 0
    },
    cu = {
      top: 0,
      left: 0,
      center: .5,
      bottom: 1,
      right: 1
    },
    cd = function(e, t) {
      if (lB(e)) {
        var n = e.indexOf("="),
          r = ~n ? (e.charAt(n - 1) + 1) * parseFloat(e.substr(n + 1)) : 0;
        ~n && (e.indexOf("%") > n && (r *= t / 100), e = e.substr(0, n - 1)), e = r + (e in cu ? cu[e] * t : ~e.indexOf("%") ? parseFloat(e) * t / 100 : parseFloat(e) || 0)
      }
      return e
    },
    cf = function(e, t, n, r, a, i, o, s) {
      var l = a.startColor,
        c = a.endColor,
        u = a.fontSize,
        d = a.indent,
        f = a.fontWeight,
        h = sZ.createElement("div"),
        p = lM(n) || "fixed" === sR(n, "pinType"),
        m = -1 !== e.indexOf("scroller"),
        _ = p ? s0 : "IFRAME" === n.tagName ? n.contentDocument.body : n,
        g = -1 !== e.indexOf("start"),
        v = g ? l : c,
        y = "border-color:" + v + ";font-size:" + u + ";color:" + v + ";font-weight:" + f + ";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";
      return y += "position:" + ((m || s) && p ? "fixed;" : "absolute;"), (m || s || !p) && (y += (r === sF ? l$ : lQ) + ":" + (i + parseFloat(d)) + "px;"), o && (y += "box-sizing:border-box;text-align:left;width:" + o.offsetWidth + "px;"), h._isStart = g, h.setAttribute("class", "gsap-marker-" + e + (t ? " marker-" + t : "")), h.style.cssText = y, h.innerText = t || 0 === t ? e + "-" + t : e, _.children[0] ? _.insertBefore(h, _.children[0]) : _.appendChild(h), h._offset = h["offset" + r.op.d2], ch(h, 0, r, g), h
    },
    ch = function(e, t, n, r) {
      var a = {
          display: "block"
        },
        i = n[r ? "os2" : "p2"],
        o = n[r ? "p2" : "os2"];
      e._isFlipped = r, a[n.a + "Percent"] = r ? -100 : 0, a[n.a] = r ? "1px" : 0, a["border" + i + l5] = 1, a["border" + o + l5] = 0, a[n.p] = t + "px", sX.set(e, a)
    },
    cp = [],
    cm = {},
    c_ = function() {
      return lC() - lE > 34 && (ly || (ly = requestAnimationFrame(cM)))
    },
    cg = function() {
      ls && ls.isPressed && !(ls.startX > s0.clientWidth) || (sS.cache++, ls ? ly || (ly = requestAnimationFrame(cM)) : cM(), lE || ck("scrollStart"), lE = lC())
    },
    cv = function() {
      lu = sQ.innerWidth, lc = sQ.innerHeight
    },
    cy = function(e) {
      sS.cache++, (!0 === e || !s8 && !lo && !sZ.fullscreenElement && !sZ.webkitFullscreenElement && (!ll || lu !== sQ.innerWidth || Math.abs(sQ.innerHeight - lc) > .25 * sQ.innerHeight)) && s2.restart(!0)
    },
    cb = {},
    cx = [],
    cw = function e() {
      return co(cZ, "scrollEnd", e) || cL(!0)
    },
    ck = function(e) {
      return cb[e] && cb[e].map(function(e) {
        return e()
      }) || cx
    },
    cC = [],
    cS = function(e) {
      for (var t = 0; t < cC.length; t += 5)(!e || cC[t + 4] && cC[t + 4].query === e) && (cC[t].style.cssText = cC[t + 1], cC[t].getBBox && cC[t].setAttribute("transform", cC[t + 2] || ""), cC[t + 3].uncache = 1)
    },
    cE = function() {
      return sS.forEach(function(e) {
        return lz(e) && ++e.cacheID && (e.rec = e())
      })
    },
    cT = function(e, t) {
      var n;
      for (le = 0; le < cp.length; le++)(n = cp[le]) && (!t || n._ctx === t) && (e ? n.kill(1) : n.revert(!0, !0));
      l_ = !0, t && cS(t), t || ck("revert")
    },
    cN = function(e, t) {
      sS.cache++, (t || !lb) && sS.forEach(function(e) {
        return lz(e) && e.cacheID++ && (e.rec = 0)
      }), lB(e) && (sQ.history.scrollRestoration = lh = e)
    },
    cA = 0,
    cR = function() {
      if (lx !== cA) {
        var e = lx = cA;
        requestAnimationFrame(function() {
          return e === cA && cL(!0)
        })
      }
    },
    cI = function() {
      s0.appendChild(lp), lm = !ls && lp.offsetHeight || sQ.innerHeight, s0.removeChild(lp)
    },
    cO = function(e) {
      return s3(".gsap-marker-start, .gsap-marker-end, .gsap-marker-scroller-start, .gsap-marker-scroller-end").forEach(function(t) {
        return t.style.display = e ? "none" : "block"
      })
    },
    cL = function(e, t) {
      if (sJ = sZ.documentElement, s0 = sZ.body, s1 = [sQ, sZ, sJ, s0], lE && !e && !l_) return void ci(cZ, "scrollEnd", cw);
      cI(), lb = cZ.isRefreshing = !0, l_ || cE();
      var n = ck("refreshInit");
      la && cZ.sort(), t || cT(), sS.forEach(function(e) {
        lz(e) && (e.smooth && (e.target.style.scrollBehavior = "auto"), e(0))
      }), cp.slice(0).forEach(function(e) {
        return e.refresh()
      }), l_ = !1, cp.forEach(function(e) {
        if (e._subPinOffset && e.pin) {
          var t = e.vars.horizontal ? "offsetWidth" : "offsetHeight",
            n = e.pin[t];
          e.revert(!0, 1), e.adjustPinSpacing(e.pin[t] - n), e.refresh()
        }
      }), lg = 1, cO(!0), cp.forEach(function(e) {
        var t = lU(e.scroller, e._dir),
          n = "max" === e.vars.end || e._endClamp && e.end > t,
          r = e._startClamp && e.start >= t;
        (n || r) && e.setPositions(r ? t - 1 : e.start, n ? Math.max(r ? t : e.start + 1, t) : e.end, !0)
      }), cO(!1), lg = 0, n.forEach(function(e) {
        return e && e.render && e.render(-1)
      }), sS.forEach(function(e) {
        lz(e) && (e.smooth && requestAnimationFrame(function() {
          return e.target.style.scrollBehavior = "smooth"
        }), e.rec && e(e.rec))
      }), cN(lh, 1), s2.pause(), cA++, lb = 2, cM(2), cp.forEach(function(e) {
        return lz(e.vars.onRefresh) && e.vars.onRefresh(e)
      }), lb = cZ.isRefreshing = !1, ck("refresh")
    },
    cj = 0,
    cP = 1,
    cM = function(e) {
      if (2 === e || !lb && !l_) {
        cZ.isUpdating = !0, lw && lw.update(0);
        var t = cp.length,
          n = lC(),
          r = n - lS >= 50,
          a = t && cp[0].scroll();
        if (cP = cj > a ? -1 : 1, lb || (cj = a), r && (lE && !s7 && n - lE > 200 && (lE = 0, ck("scrollEnd")), s5 = lS, lS = n), cP < 0) {
          for (le = t; le-- > 0;) cp[le] && cp[le].update(0, r);
          cP = 1
        } else
          for (le = 0; le < t; le++) cp[le] && cp[le].update(0, r);
        cZ.isUpdating = !1
      }
      ly = 0
    },
    cD = [lX, "top", lQ, l$, l4 + l2, l4 + l0, l4 + "Top", l4 + l1, "display", "flexShrink", "float", "zIndex", "gridColumnStart", "gridColumnEnd", "gridRowStart", "gridRowEnd", "gridArea", "justifySelf", "alignSelf", "placeSelf", "order"],
    cH = cD.concat([lZ, lJ, "boxSizing", "max" + l5, "max" + l6, "position", l4, l3, l3 + "Top", l3 + l0, l3 + l2, l3 + l1]),
    cF = function(e, t, n) {
      cB(n);
      var r = e._gsap;
      if (r.spacerIsNative) cB(r.spacerState);
      else if (e._gsap.swappedIn) {
        var a = t.parentNode;
        a && (a.insertBefore(e, t), a.removeChild(t))
      }
      e._gsap.swappedIn = !1
    },
    cU = function(e, t, n, r) {
      if (!e._gsap.swappedIn) {
        for (var a, i = cD.length, o = t.style, s = e.style; i--;) o[a = cD[i]] = n[a];
        o.position = "absolute" === n.position ? "absolute" : "relative", "inline" === n.display && (o.display = "inline-block"), s[lQ] = s[l$] = "auto", o.flexBasis = n.flexBasis || "auto", o.overflow = "visible", o.boxSizing = "border-box", o[lZ] = ct(e, sH) + "px", o[lJ] = ct(e, sF) + "px", o[l3] = s[l4] = s.top = s[lX] = "0", cB(r), s[lZ] = s["max" + l5] = n[lZ], s[lJ] = s["max" + l6] = n[lJ], s[l3] = n[l3], e.parentNode !== t && (e.parentNode.insertBefore(t, e), t.appendChild(e)), e._gsap.swappedIn = !0
      }
    },
    cG = /([A-Z])/g,
    cB = function(e) {
      if (e) {
        var t, n, r = e.t.style,
          a = e.length,
          i = 0;
        for ((e.t._gsap || sX.core.getCache(e.t)).uncache = 1; i < a; i += 2) n = e[i + 1], t = e[i], n ? r[t] = n : r[t] && r.removeProperty(t.replace(cG, "-$1").toLowerCase())
      }
    },
    cz = function(e) {
      for (var t = cH.length, n = e.style, r = [], a = 0; a < t; a++) r.push(cH[a], n[cH[a]]);
      return r.t = e, r
    },
    cY = function(e, t, n) {
      for (var r, a = [], i = e.length, o = 8 * !!n; o < i; o += 2) r = e[o], a.push(r, r in t ? t[r] : e[o + 1]);
      return a.t = e.t, a
    },
    cW = {
      left: 0,
      top: 0
    },
    cq = function(e, t, n, r, a, i, o, s, l, c, u, d, f, h) {
      lz(e) && (e = e(s)), lB(e) && "max" === e.substr(0, 3) && (e = d + ("=" === e.charAt(4) ? cd("0" + e.substr(3), n) : 0));
      var p, m, _, g = f ? f.time() : 0;
      if (f && f.seek(0), isNaN(e) || (e *= 1), lY(e)) f && (e = sX.utils.mapRange(f.scrollTrigger.start, f.scrollTrigger.end, 0, d, e)), o && ch(o, n, r, !0);
      else {
        lz(t) && (t = t(s));
        var v, y, b, x, w = (e || "0").split(" ");
        (v = ce(_ = sU(t, s) || s0) || {}).left || v.top || "none" !== l8(_).display || (x = _.style.display, _.style.display = "block", v = ce(_), x ? _.style.display = x : _.style.removeProperty("display")), y = cd(w[0], v[r.d]), b = cd(w[1] || "0", n), e = v[r.p] - l[r.p] - c + y + a - b, o && ch(o, b, r, n - b < 20 || o._isStart && b > 20), n -= n - b
      }
      if (h && (s[h] = e || -.001, e < 0 && (e = 0)), i) {
        var k = e + n,
          C = i._isStart;
        p = "scroll" + r.d2, ch(i, k, r, C && k > 20 || !C && (u ? Math.max(s0[p], sJ[p]) : i.parentNode[p]) <= k + 1), u && (l = ce(o), u && (i.style[r.op.p] = l[r.op.p] - r.op.m - i._offset + "px"))
      }
      return f && _ && (p = ce(_), f.seek(d), m = ce(_), f._caScrollDist = p[r.p] - m[r.p], e = e / f._caScrollDist * d), f && f.seek(g), f ? e : Math.round(e)
    },
    cV = /(webkit|moz|length|cssText|inset)/i,
    cK = function(e, t, n, r) {
      if (e.parentNode !== t) {
        var a, i, o = e.style;
        if (t === s0) {
          for (a in e._stOrig = o.cssText, i = l8(e)) + a || cV.test(a) || !i[a] || "string" != typeof o[a] || "0" === a || (o[a] = i[a]);
          o.top = n, o.left = r
        } else o.cssText = e._stOrig;
        sX.core.getCache(e).uncache = 1, t.appendChild(e)
      }
    },
    cX = function(e, t, n) {
      var r = t,
        a = r;
      return function(t) {
        var i = Math.round(e());
        return i !== r && i !== a && Math.abs(i - r) > 3 && Math.abs(i - a) > 3 && (t = i, n && n()), a = r, r = Math.round(t)
      }
    },
    c$ = function(e, t, n) {
      var r = {};
      r[t.p] = "+=" + n, sX.set(e, r)
    },
    cQ = function(e, t) {
      var n = sB(e, t),
        r = "_scroll" + t.p2,
        a = function t(a, i, o, s, l) {
          var c = t.tween,
            u = i.onComplete,
            d = {};
          o = o || n();
          var f = cX(n, o, function() {
            c.kill(), t.tween = 0
          });
          return l = s && l || 0, s = s || a - o, c && c.kill(), i[r] = a, i.inherit = !1, i.modifiers = d, d[r] = function() {
            return f(o + s * c.ratio + l * c.ratio * c.ratio)
          }, i.onUpdate = function() {
            sS.cache++, t.tween && cM()
          }, i.onComplete = function() {
            t.tween = 0, u && u.call(c)
          }, c = t.tween = sX.to(e, i)
        };
      return e[r] = n, n.wheelHandler = function() {
        return a.tween && a.tween.kill() && (a.tween = 0)
      }, ci(e, "wheel", n.wheelHandler), cZ.isTouch && ci(e, "touchmove", n.wheelHandler), a
    },
    cZ = function() {
      function e(t, n) {
        s$ || e.register(sX) || console.warn("Please gsap.registerPlugin(ScrollTrigger)"), lf(this), this.init(t, n)
      }
      return e.prototype.init = function(t, n) {
        if (this.progress = this.start = 0, this.vars && this.kill(!0, !0), !lT) {
          this.update = this.refresh = this.kill = lO;
          return
        }
        var r, a, i, o, s, l, c, u, d, f, h, p, m, _, g, v, y, b, x, w, k, C, S, E, T, N, A, R, I, O, L, j, P, M, D, H, F, U, G, B, z, Y = t = l9(lB(t) || lY(t) || t.nodeType ? {
            trigger: t
          } : t, cc),
          W = Y.onUpdate,
          q = Y.toggleClass,
          V = Y.id,
          K = Y.onToggle,
          X = Y.onRefresh,
          $ = Y.scrub,
          Q = Y.trigger,
          Z = Y.pin,
          J = Y.pinSpacing,
          ee = Y.invalidateOnRefresh,
          et = Y.anticipatePin,
          en = Y.onScrubComplete,
          er = Y.onSnapComplete,
          ea = Y.once,
          ei = Y.snap,
          eo = Y.pinReparent,
          es = Y.pinSpacer,
          el = Y.containerAnimation,
          ec = Y.fastScrollEnd,
          eu = Y.preventOverlaps,
          ed = t.horizontal || t.containerAnimation && !1 !== t.horizontal ? sH : sF,
          ef = !$ && 0 !== $,
          eh = sU(t.scroller || sQ),
          ep = sX.core.getCache(eh),
          em = lM(eh),
          e_ = ("pinType" in t ? t.pinType : sR(eh, "pinType") || em && "fixed") === "fixed",
          eg = [t.onEnter, t.onLeave, t.onEnterBack, t.onLeaveBack],
          ev = ef && t.toggleActions.split(" "),
          ey = "markers" in t ? t.markers : cc.markers,
          eb = em ? 0 : parseFloat(l8(eh)["border" + ed.p2 + l5]) || 0,
          ex = this,
          ew = t.onRefreshInit && function() {
            return t.onRefreshInit(ex)
          },
          ek = lF(eh, em, ed),
          eC = !em || ~sE.indexOf(eh) ? lH(eh) : function() {
            return cW
          },
          eS = 0,
          eE = 0,
          eT = 0,
          eN = sB(eh, ed);
        if (ex._startClamp = ex._endClamp = !1, ex._dir = ed, et *= 45, ex.scroller = eh, ex.scroll = el ? el.time.bind(el) : eN, l = eN(), ex.vars = t, n = n || t.animation, "refreshPriority" in t && (la = 1, -9999 === t.refreshPriority && (lw = ex)), ep.tweenScroll = ep.tweenScroll || {
            top: cQ(eh, sF),
            left: cQ(eh, sH)
          }, ex.tweenTo = i = ep.tweenScroll[ed.p], ex.scrubDuration = function(e) {
            (D = lY(e) && e) ? M ? M.duration(e) : M = sX.to(n, {
              ease: "expo",
              totalProgress: "+=0",
              inherit: !1,
              duration: D,
              paused: !0,
              onComplete: function() {
                return en && en(ex)
              }
            }): (M && M.progress(1).kill(), M = 0)
          }, n && (n.vars.lazy = !1, n._initted && !ex.isReverted || !1 !== n.vars.immediateRender && !1 !== t.immediateRender && n.duration() && n.render(0, !0, !0), ex.animation = n.pause(), n.scrollTrigger = ex, ex.scrubDuration($), j = 0, V || (V = n.vars.id)), ei && ((!lW(ei) || ei.push) && (ei = {
            snapTo: ei
          }), "scrollBehavior" in s0.style && sX.set(em ? [s0, sJ] : eh, {
            scrollBehavior: "auto"
          }), sS.forEach(function(e) {
            return lz(e) && e.target === (em ? sZ.scrollingElement || sJ : eh) && (e.smooth = !1)
          }), s = lz(ei.snapTo) ? ei.snapTo : "labels" === ei.snapTo ? (r = n, function(e) {
            return sX.utils.snap(cn(r), e)
          }) : "labelsDirectional" === ei.snapTo ? (a = n, function(e, t) {
            return cr(cn(a))(e, t.direction)
          }) : !1 !== ei.directional ? function(e, t) {
            return cr(ei.snapTo)(e, lC() - eE < 500 ? 0 : t.direction)
          } : sX.utils.snap(ei.snapTo), H = lW(H = ei.duration || {
            min: .1,
            max: 2
          }) ? s4(H.min, H.max) : s4(H, H), F = sX.delayedCall(ei.delay || D / 2 || .1, function() {
            var e = eN(),
              t = lC() - eE < 500,
              r = i.tween;
            if ((t || 10 > Math.abs(ex.getVelocity())) && !r && !s7 && eS !== e) {
              var a, o, l = (e - u) / v,
                c = n && !ef ? n.totalProgress() : l,
                f = t ? 0 : (c - P) / (lC() - s5) * 1e3 || 0,
                h = sX.utils.clamp(-l, 1 - l, lK(f / 2) * f / .185),
                p = l + (!1 === ei.inertia ? 0 : h),
                m = ei,
                _ = m.onStart,
                g = m.onInterrupt,
                y = m.onComplete;
              if (lY(a = s(p, ex)) || (a = p), o = Math.max(0, Math.round(u + a * v)), e <= d && e >= u && o !== e) {
                if (r && !r._initted && r.data <= lK(o - e)) return;
                !1 === ei.inertia && (h = a - l), i(o, {
                  duration: H(lK(.185 * Math.max(lK(p - c), lK(a - c)) / f / .05 || 0)),
                  ease: ei.ease || "power3",
                  data: lK(o - e),
                  onInterrupt: function() {
                    return F.restart(!0) && g && lV(ex, g)
                  },
                  onComplete: function() {
                    ex.update(), eS = eN(), n && !ef && (M ? M.resetTo("totalProgress", a, n._tTime / n._tDur) : n.progress(a)), j = P = n && !ef ? n.totalProgress() : ex.progress, er && er(ex), y && lV(ex, y)
                  }
                }, e, h * v, o - e - h * v), _ && lV(ex, _, i.tween)
              }
            } else ex.isActive && eS !== e && F.restart(!0)
          }).pause()), V && (cm[V] = ex), (z = (Q = ex.trigger = sU(Q || !0 !== Z && Z)) && Q._gsap && Q._gsap.stRevert) && (z = z(ex)), Z = !0 === Z ? Q : sU(Z), lB(q) && (q = {
            targets: Q,
            className: q
          }), Z && (!1 === J || J === l4 || (J = (!!J || !Z.parentNode || !Z.parentNode.style || "flex" !== l8(Z.parentNode).display) && l3), ex.pin = Z, (o = sX.core.getCache(Z)).spacer ? y = o.pinState : (es && ((es = sU(es)) && !es.nodeType && (es = es.current || es.nativeElement), o.spacerIsNative = !!es, es && (o.spacerState = cz(es))), o.spacer = w = es || sZ.createElement("div"), w.classList.add("pin-spacer"), V && w.classList.add("pin-spacer-" + V), o.pinState = y = cz(Z)), !1 !== t.force3D && sX.set(Z, {
            force3D: !0
          }), ex.spacer = w = o.spacer, N = (L = l8(Z))[J + ed.os2], C = sX.getProperty(Z), S = sX.quickSetter(Z, ed.a, "px"), cU(Z, w, L), x = cz(Z)), ey) {
          _ = lW(ey) ? l9(ey, cl) : cl, p = cf("scroller-start", V, eh, ed, _, 0), m = cf("scroller-end", V, eh, ed, _, 0, p), k = p["offset" + ed.op.d2];
          var eA = sU(sR(eh, "content") || eh);
          f = this.markerStart = cf("start", V, eA, ed, _, k, 0, el), h = this.markerEnd = cf("end", V, eA, ed, _, k, 0, el), el && (B = sX.quickSetter([f, h], ed.a, "px")), e_ || sE.length && !0 === sR(eh, "fixedMarkers") || (l7(em ? s0 : eh), sX.set([p, m], {
            force3D: !0
          }), R = sX.quickSetter(p, ed.a, "px"), O = sX.quickSetter(m, ed.a, "px"))
        }
        if (el) {
          var eR = el.vars.onUpdate,
            eI = el.vars.onUpdateParams;
          el.eventCallback("onUpdate", function() {
            ex.update(0, 0, 1), eR && eR.apply(el, eI || [])
          })
        }
        if (ex.previous = function() {
            return cp[cp.indexOf(ex) - 1]
          }, ex.next = function() {
            return cp[cp.indexOf(ex) + 1]
          }, ex.revert = function(e, t) {
            if (!t) return ex.kill(!0);
            var r = !1 !== e || !ex.enabled,
              a = s8;
            r !== ex.isReverted && (r && (U = Math.max(eN(), ex.scroll.rec || 0), eT = ex.progress, G = n && n.progress()), f && [f, h, p, m].forEach(function(e) {
              return e.style.display = r ? "none" : "block"
            }), r && (s8 = ex, ex.update(r)), !Z || eo && ex.isActive || (r ? cF(Z, w, y) : cU(Z, w, l8(Z), A)), r || ex.update(r), s8 = a, ex.isReverted = r)
          }, ex.refresh = function(r, a, o, s) {
            if (!s8 && ex.enabled || a) {
              if (Z && r && lE) return void ci(e, "scrollEnd", cw);
              !lb && ew && ew(ex), s8 = ex, i.tween && !o && (i.tween.kill(), i.tween = 0), M && M.pause(), ee && n && (n.revert({
                kill: !1
              }).invalidate(), n.getChildren ? n.getChildren(!0, !0, !1).forEach(function(e) {
                return e.vars.immediateRender && e.render(0, !0, !0)
              }) : n.vars.immediateRender && n.render(0, !0, !0)), ex.isReverted || ex.revert(!0, !0), ex._subPinOffset = !1;
              var _, k, S, N, R, O, L, j, P, D, H, B, z, Y = ek(),
                W = eC(),
                q = el ? el.duration() : lU(eh, ed),
                V = v <= .01 || !v,
                K = 0,
                $ = s || 0,
                et = lW(o) ? o.end : t.end,
                en = t.endTrigger || Q,
                er = lW(o) ? o.start : t.start || (0 !== t.start && Q ? Z ? "0 0" : "0 100%" : 0),
                ea = ex.pinnedContainer = t.pinnedContainer && sU(t.pinnedContainer, ex),
                ei = Q && Math.max(0, cp.indexOf(ex)) || 0,
                es = ei;
              for (ey && lW(o) && (B = sX.getProperty(p, ed.p), z = sX.getProperty(m, ed.p)); es-- > 0;)(O = cp[es]).end || O.refresh(0, 1) || (s8 = ex), (L = O.pin) && (L === Q || L === Z || L === ea) && !O.isReverted && (D || (D = []), D.unshift(O), O.revert(!0, !0)), O !== cp[es] && (ei--, es--);
              for (lz(er) && (er = er(ex)), u = cq(er = lN(er, "start", ex), Q, Y, ed, eN(), f, p, ex, W, eb, e_, q, el, ex._startClamp && "_startClamp") || (Z ? -.001 : 0), lz(et) && (et = et(ex)), lB(et) && !et.indexOf("+=") && (~et.indexOf(" ") ? et = (lB(er) ? er.split(" ")[0] : "") + et : (K = cd(et.substr(2), Y), et = lB(er) ? er : (el ? sX.utils.mapRange(0, el.duration(), el.scrollTrigger.start, el.scrollTrigger.end, u) : u) + K, en = Q)), et = lN(et, "end", ex), d = Math.max(u, cq(et || (en ? "100% 0" : q), en, Y, ed, eN() + K, h, m, ex, W, eb, e_, q, el, ex._endClamp && "_endClamp")) || -.001, K = 0, es = ei; es--;)(L = (O = cp[es] || {}).pin) && O.start - O._pinPush <= u && !el && O.end > 0 && (_ = O.end - (ex._startClamp ? Math.max(0, O.start) : O.start), (L === Q && O.start - O._pinPush < u || L === ea) && isNaN(er) && (K += _ * (1 - O.progress)), L === Z && ($ += _));
              if (u += K, d += K, ex._startClamp && (ex._startClamp += K), ex._endClamp && !lb && (ex._endClamp = d || -.001, d = Math.min(d, lU(eh, ed))), v = d - u || (u -= .01) && .001, V && (eT = sX.utils.clamp(0, 1, sX.utils.normalize(u, d, U))), ex._pinPush = $, f && K && ((_ = {})[ed.a] = "+=" + K, ea && (_[ed.p] = "-=" + eN()), sX.set([f, h], _)), Z && !(lg && ex.end >= lU(eh, ed))) _ = l8(Z), N = ed === sF, S = eN(), E = parseFloat(C(ed.a)) + $, !q && d > 1 && (H = {
                style: H = (em ? sZ.scrollingElement || sJ : eh).style,
                value: H["overflow" + ed.a.toUpperCase()]
              }, em && "scroll" !== l8(s0)["overflow" + ed.a.toUpperCase()] && (H.style["overflow" + ed.a.toUpperCase()] = "scroll")), cU(Z, w, _), x = cz(Z), k = ce(Z, !0), j = e_ && sB(eh, N ? sH : sF)(), J ? ((A = [J + ed.os2, v + $ + "px"]).t = w, (es = J === l3 ? ct(Z, ed) + v + $ : 0) && (A.push(ed.d, es + "px"), "auto" !== w.style.flexBasis && (w.style.flexBasis = es + "px")), cB(A), ea && cp.forEach(function(e) {
                e.pin === ea && !1 !== e.vars.pinSpacing && (e._subPinOffset = !0)
              }), e_ && eN(U)) : (es = ct(Z, ed)) && "auto" !== w.style.flexBasis && (w.style.flexBasis = es + "px"), e_ && ((R = {
                top: k.top + (N ? S - u : j) + "px",
                left: k.left + (N ? j : S - u) + "px",
                boxSizing: "border-box",
                position: "fixed"
              })[lZ] = R["max" + l5] = Math.ceil(k.width) + "px", R[lJ] = R["max" + l6] = Math.ceil(k.height) + "px", R[l4] = R[l4 + "Top"] = R[l4 + l0] = R[l4 + l2] = R[l4 + l1] = "0", R[l3] = _[l3], R[l3 + "Top"] = _[l3 + "Top"], R[l3 + l0] = _[l3 + l0], R[l3 + l2] = _[l3 + l2], R[l3 + l1] = _[l3 + l1], b = cY(y, R, eo), lb && eN(0)), n ? (P = n._initted, li(1), n.render(n.duration(), !0, !0), T = C(ed.a) - E + v + $, I = Math.abs(v - T) > 1, e_ && I && b.splice(b.length - 2, 2), n.render(0, !0, !0), P || n.invalidate(!0), n.parent || n.totalTime(n.totalTime()), li(0)) : T = v, H && (H.value ? H.style["overflow" + ed.a.toUpperCase()] = H.value : H.style.removeProperty("overflow-" + ed.a));
              else if (Q && eN() && !el)
                for (k = Q.parentNode; k && k !== s0;) k._pinOffset && (u -= k._pinOffset, d -= k._pinOffset), k = k.parentNode;
              D && D.forEach(function(e) {
                return e.revert(!1, !0)
              }), ex.start = u, ex.end = d, l = c = lb ? U : eN(), el || lb || (l < U && eN(U), ex.scroll.rec = 0), ex.revert(!1, !0), eE = lC(), F && (eS = -1, F.restart(!0)), s8 = 0, n && ef && (n._initted || G) && n.progress() !== G && n.progress(G || 0, !0).render(n.time(), !0, !0), (V || eT !== ex.progress || el || ee || n && !n._initted) && (n && !ef && (n._initted || eT || !1 !== n.vars.immediateRender) && n.totalProgress(el && u < -.001 && !eT ? sX.utils.normalize(u, d, 0) : eT, !0), ex.progress = V || (l - u) / v === eT ? 0 : eT), Z && J && (w._pinOffset = Math.round(ex.progress * T)), M && M.invalidate(), isNaN(B) || (B -= sX.getProperty(p, ed.p), z -= sX.getProperty(m, ed.p), c$(p, ed, B), c$(f, ed, B - (s || 0)), c$(m, ed, z), c$(h, ed, z - (s || 0))), V && !lb && ex.update(), !X || lb || g || (g = !0, X(ex), g = !1)
            }
          }, ex.getVelocity = function() {
            return (eN() - c) / (lC() - s5) * 1e3 || 0
          }, ex.endAnimation = function() {
            lq(ex.callbackAnimation), n && (M ? M.progress(1) : n.paused() ? ef || lq(n, ex.direction < 0, 1) : lq(n, n.reversed()))
          }, ex.labelToScroll = function(e) {
            return n && n.labels && (u || ex.refresh() || u) + n.labels[e] / n.duration() * v || 0
          }, ex.getTrailing = function(e) {
            var t = cp.indexOf(ex),
              n = ex.direction > 0 ? cp.slice(0, t).reverse() : cp.slice(t + 1);
            return (lB(e) ? n.filter(function(t) {
              return t.vars.preventOverlaps === e
            }) : n).filter(function(e) {
              return ex.direction > 0 ? e.end <= u : e.start >= d
            })
          }, ex.update = function(e, t, r) {
            if (!el || r || e) {
              var a, o, s, f, h, m, _, g = !0 === lb ? U : ex.scroll(),
                y = e ? 0 : (g - u) / v,
                k = y < 0 ? 0 : y > 1 ? 1 : y || 0,
                C = ex.progress;
              if (t && (c = l, l = el ? eN() : g, ei && (P = j, j = n && !ef ? n.totalProgress() : k)), et && Z && !s8 && !lk && lE && (!k && u < g + (g - c) / (lC() - s5) * et ? k = 1e-4 : 1 === k && d > g + (g - c) / (lC() - s5) * et && (k = .9999)), k !== C && ex.enabled) {
                if (f = (h = (a = ex.isActive = !!k && k < 1) != (!!C && C < 1)) || !!k != !!C, ex.direction = k > C ? 1 : -1, ex.progress = k, f && !s8 && (o = k && !C ? 0 : 1 === k ? 1 : 1 === C ? 2 : 3, ef && (s = !h && "none" !== ev[o + 1] && ev[o + 1] || ev[o], _ = n && ("complete" === s || "reset" === s || s in n))), eu && (h || _) && (_ || $ || !n) && (lz(eu) ? eu(ex) : ex.getTrailing(eu).forEach(function(e) {
                    return e.endAnimation()
                  })), !ef && (!M || s8 || lk ? n && n.totalProgress(k, !!(s8 && (eE || e))) : (M._dp._time - M._start !== M._time && M.render(M._dp._time - M._start), M.resetTo ? M.resetTo("totalProgress", k, n._tTime / n._tDur) : (M.vars.totalProgress = k, M.invalidate().restart()))), Z)
                  if (e && J && (w.style[J + ed.os2] = N), e_) {
                    if (f) {
                      if (m = !e && k > C && d + 1 > g && g + 1 >= lU(eh, ed), eo)
                        if (!e && (a || m)) {
                          var A = ce(Z, !0),
                            L = g - u;
                          cK(Z, s0, A.top + (ed === sF ? L : 0) + "px", A.left + (ed === sF ? 0 : L) + "px")
                        } else cK(Z, w);
                      cB(a || m ? b : x), I && k < 1 && a || S(E + (1 !== k || m ? 0 : T))
                    }
                  } else S(lL(E + T * k));
                !ei || i.tween || s8 || lk || F.restart(!0), q && (h || ea && k && (k < 1 || !lv)) && s3(q.targets).forEach(function(e) {
                  return e.classList[a || ea ? "add" : "remove"](q.className)
                }), !W || ef || e || W(ex), f && !s8 ? (ef && (_ && ("complete" === s ? n.pause().totalProgress(1) : "reset" === s ? n.restart(!0).pause() : "restart" === s ? n.restart(!0) : n[s]()), W && W(ex)), (h || !lv) && (K && h && lV(ex, K), eg[o] && lV(ex, eg[o]), ea && (1 === k ? ex.kill(!1, 1) : eg[o] = 0), !h && eg[o = 1 === k ? 1 : 3] && lV(ex, eg[o])), ec && !a && Math.abs(ex.getVelocity()) > (lY(ec) ? ec : 2500) && (lq(ex.callbackAnimation), M ? M.progress(1) : lq(n, "reverse" === s ? 1 : !k, 1))) : ef && W && !s8 && W(ex)
              }
              if (O) {
                var D = el ? g / el.duration() * (el._caScrollDist || 0) : g;
                R(D + +!!p._isFlipped), O(D)
              }
              B && B(-g / el.duration() * (el._caScrollDist || 0))
            }
          }, ex.enable = function(t, n) {
            ex.enabled || (ex.enabled = !0, ci(eh, "resize", cy), em || ci(eh, "scroll", cg), ew && ci(e, "refreshInit", ew), !1 !== t && (ex.progress = eT = 0, l = c = eS = eN()), !1 !== n && ex.refresh())
          }, ex.getTween = function(e) {
            return e && i ? i.tween : M
          }, ex.setPositions = function(e, t, n, r) {
            if (el) {
              var a = el.scrollTrigger,
                i = el.duration(),
                o = a.end - a.start;
              e = a.start + o * e / i, t = a.start + o * t / i
            }
            ex.refresh(!1, !1, {
              start: lA(e, n && !!ex._startClamp),
              end: lA(t, n && !!ex._endClamp)
            }, r), ex.update()
          }, ex.adjustPinSpacing = function(e) {
            if (A && e) {
              var t = A.indexOf(ed.d) + 1;
              A[t] = parseFloat(A[t]) + e + "px", A[1] = parseFloat(A[1]) + e + "px", cB(A)
            }
          }, ex.disable = function(t, n) {
            if (!1 !== t && ex.revert(!0, !0), ex.enabled && (ex.enabled = ex.isActive = !1, n || M && M.pause(), U = 0, o && (o.uncache = 1), ew && co(e, "refreshInit", ew), F && (F.pause(), i.tween && i.tween.kill() && (i.tween = 0)), !em)) {
              for (var r = cp.length; r--;)
                if (cp[r].scroller === eh && cp[r] !== ex) return;
              co(eh, "resize", cy), em || co(eh, "scroll", cg)
            }
          }, ex.kill = function(e, r) {
            ex.disable(e, r), M && !r && M.kill(), V && delete cm[V];
            var a = cp.indexOf(ex);
            a >= 0 && cp.splice(a, 1), a === le && cP > 0 && le--, a = 0, cp.forEach(function(e) {
              return e.scroller === ex.scroller && (a = 1)
            }), a || lb || (ex.scroll.rec = 0), n && (n.scrollTrigger = null, e && n.revert({
              kill: !1
            }), r || n.kill()), f && [f, h, p, m].forEach(function(e) {
              return e.parentNode && e.parentNode.removeChild(e)
            }), lw === ex && (lw = 0), Z && (o && (o.uncache = 1), a = 0, cp.forEach(function(e) {
              return e.pin === Z && a++
            }), a || (o.spacer = 0)), t.onKill && t.onKill(ex)
          }, cp.push(ex), ex.enable(!1, !1), z && z(ex), n && n.add && !v) {
          var eO = ex.update;
          ex.update = function() {
            ex.update = eO, sS.cache++, u || d || ex.refresh()
          }, sX.delayedCall(.01, ex.update), v = .01, u = d = 0
        } else ex.refresh();
        Z && cR()
      }, e.register = function(t) {
        return s$ || (sX = t || lP(), lj() && window.document && e.enable(), s$ = lT), s$
      }, e.defaults = function(e) {
        if (e)
          for (var t in e) cc[t] = e[t];
        return cc
      }, e.disable = function(e, t) {
        lT = 0, cp.forEach(function(n) {
          return n[t ? "kill" : "disable"](e)
        }), co(sQ, "wheel", cg), co(sZ, "scroll", cg), clearInterval(s6), co(sZ, "touchcancel", lO), co(s0, "touchstart", lO), ca(co, sZ, "pointerdown,touchstart,mousedown", lR), ca(co, sZ, "pointerup,touchend,mouseup", lI), s2.kill(), lG(co);
        for (var n = 0; n < sS.length; n += 3) cs(co, sS[n], sS[n + 1]), cs(co, sS[n], sS[n + 2])
      }, e.enable = function() {
        if (sQ = window, sJ = (sZ = document).documentElement, s0 = sZ.body, sX)
          if (s3 = sX.utils.toArray, s4 = sX.utils.clamp, lf = sX.core.context || lO, li = sX.core.suppressOverwrites || lO, lh = sQ.history.scrollRestoration || "auto", cj = sQ.pageYOffset || 0, sX.core.globals("ScrollTrigger", e), s0) {
            lT = 1, (lp = document.createElement("div")).style.height = "100vh", lp.style.position = "absolute", cI(),
              function e() {
                return lT && requestAnimationFrame(e)
              }(), sK.register(sX), e.isTouch = sK.isTouch, ld = sK.isTouch && /(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent), ll = 1 === sK.isTouch, ci(sQ, "wheel", cg), s1 = [sQ, sZ, sJ, s0], sX.matchMedia ? (e.matchMedia = function(e) {
                var t, n = sX.matchMedia();
                for (t in e) n.add(t, e[t]);
                return n
              }, sX.addEventListener("matchMediaInit", function() {
                cE(), cT()
              }), sX.addEventListener("matchMediaRevert", function() {
                return cS()
              }), sX.addEventListener("matchMedia", function() {
                cL(0, 1), ck("matchMedia")
              }), sX.matchMedia().add("(orientation: portrait)", function() {
                return cv(), cv
              })) : console.warn("Requires GSAP 3.11.0 or later"), cv(), ci(sZ, "scroll", cg);
            var t, n, r = s0.hasAttribute("style"),
              a = s0.style,
              i = a.borderTopStyle,
              o = sX.core.Animation.prototype;
            for (o.revert || Object.defineProperty(o, "revert", {
                value: function() {
                  return this.time(-.01, !0)
                }
              }), a.borderTopStyle = "solid", sF.m = Math.round((t = ce(s0)).top + sF.sc()) || 0, sH.m = Math.round(t.left + sH.sc()) || 0, i ? a.borderTopStyle = i : a.removeProperty("border-top-style"), r || (s0.setAttribute("style", ""), s0.removeAttribute("style")), s6 = setInterval(c_, 250), sX.delayedCall(.5, function() {
                return lk = 0
              }), ci(sZ, "touchcancel", lO), ci(s0, "touchstart", lO), ca(ci, sZ, "pointerdown,touchstart,mousedown", lR), ca(ci, sZ, "pointerup,touchend,mouseup", lI), s9 = sX.utils.checkPrefix("transform"), cH.push(s9), s$ = lC(), s2 = sX.delayedCall(.2, cL).pause(), lr = [sZ, "visibilitychange", function() {
                var e = sQ.innerWidth,
                  t = sQ.innerHeight;
                sZ.hidden ? (lt = e, ln = t) : (lt !== e || ln !== t) && cy()
              }, sZ, "DOMContentLoaded", cL, sQ, "load", cL, sQ, "resize", cy], lG(ci), cp.forEach(function(e) {
                return e.enable(0, 1)
              }), n = 0; n < sS.length; n += 3) cs(co, sS[n], sS[n + 1]), cs(co, sS[n], sS[n + 2])
          } else sZ && sZ.addEventListener("DOMContentLoaded", function t() {
            e.enable(), sZ.removeEventListener("DOMContentLoaded", t)
          })
      }, e.config = function(t) {
        "limitCallbacks" in t && (lv = !!t.limitCallbacks);
        var n = t.syncInterval;
        n && clearInterval(s6) || (s6 = n) && setInterval(c_, n), "ignoreMobileResize" in t && (ll = 1 === e.isTouch && t.ignoreMobileResize), "autoRefreshEvents" in t && (lG(co) || lG(ci, t.autoRefreshEvents || "none"), lo = -1 === (t.autoRefreshEvents + "").indexOf("resize"))
      }, e.scrollerProxy = function(e, t) {
        var n = sU(e),
          r = sS.indexOf(n),
          a = lM(n);
        ~r && sS.splice(r, a ? 6 : 2), t && (a ? sE.unshift(sQ, t, s0, t, sJ, t) : sE.unshift(n, t))
      }, e.clearMatchMedia = function(e) {
        cp.forEach(function(t) {
          return t._ctx && t._ctx.query === e && t._ctx.kill(!0, !0)
        })
      }, e.isInViewport = function(e, t, n) {
        var r = (lB(e) ? sU(e) : e).getBoundingClientRect(),
          a = r[n ? lZ : lJ] * t || 0;
        return n ? r.right - a > 0 && r.left + a < sQ.innerWidth : r.bottom - a > 0 && r.top + a < sQ.innerHeight
      }, e.positionInViewport = function(e, t, n) {
        lB(e) && (e = sU(e));
        var r = e.getBoundingClientRect(),
          a = r[n ? lZ : lJ],
          i = null == t ? a / 2 : t in cu ? cu[t] * a : ~t.indexOf("%") ? parseFloat(t) * a / 100 : parseFloat(t) || 0;
        return n ? (r.left + i) / sQ.innerWidth : (r.top + i) / sQ.innerHeight
      }, e.killAll = function(e) {
        if (cp.slice(0).forEach(function(e) {
            return "ScrollSmoother" !== e.vars.id && e.kill()
          }), !0 !== e) {
          var t = cb.killAll || [];
          cb = {}, t.forEach(function(e) {
            return e()
          })
        }
      }, e
    }();
  cZ.version = "3.15.0", cZ.saveStyles = function(e) {
    return e ? s3(e).forEach(function(e) {
      if (e && e.style) {
        var t = cC.indexOf(e);
        t >= 0 && cC.splice(t, 5), cC.push(e, e.style.cssText, e.getBBox && e.getAttribute("transform"), sX.core.getCache(e), lf())
      }
    }) : cC
  }, cZ.revert = function(e, t) {
    return cT(!e, t)
  }, cZ.create = function(e, t) {
    return new cZ(e, t)
  }, cZ.refresh = function(e) {
    return e ? cy(!0) : (s$ || cZ.register()) && cL(!0)
  }, cZ.update = function(e) {
    return ++sS.cache && cM(2 * (!0 === e))
  }, cZ.clearScrollMemory = cN, cZ.maxScroll = function(e, t) {
    return lU(e, t ? sH : sF)
  }, cZ.getScrollFunc = function(e, t) {
    return sB(sU(e), t ? sH : sF)
  }, cZ.getById = function(e) {
    return cm[e]
  }, cZ.getAll = function() {
    return cp.filter(function(e) {
      return "ScrollSmoother" !== e.vars.id
    })
  }, cZ.isScrolling = function() {
    return !!lE
  }, cZ.snapDirectional = cr, cZ.addEventListener = function(e, t) {
    var n = cb[e] || (cb[e] = []);
    ~n.indexOf(t) || n.push(t)
  }, cZ.removeEventListener = function(e, t) {
    var n = cb[e],
      r = n && n.indexOf(t);
    r >= 0 && n.splice(r, 1)
  }, cZ.batch = function(e, t) {
    var n, r = [],
      a = {},
      i = t.interval || .016,
      o = t.batchMax || 1e9,
      s = function(e, t) {
        var n = [],
          r = [],
          a = sX.delayedCall(i, function() {
            t(n, r), n = [], r = []
          }).pause();
        return function(e) {
          n.length || a.restart(!0), n.push(e.trigger), r.push(e), o <= n.length && a.progress(1)
        }
      };
    for (n in t) a[n] = "on" === n.substr(0, 2) && lz(t[n]) && "onRefreshInit" !== n ? s(n, t[n]) : t[n];
    return lz(o) && (o = o(), ci(cZ, "refresh", function() {
      return o = t.batchMax()
    })), s3(e).forEach(function(e) {
      var t = {};
      for (n in a) t[n] = a[n];
      t.trigger = e, r.push(cZ.create(t))
    }), r
  };
  var cJ, c0 = function(e, t, n, r) {
      return t > r ? e(r) : t < 0 && e(0), n > r ? (r - t) / (n - t) : n < 0 ? t / (t - n) : 1
    },
    c1 = function e(t, n) {
      !0 === n ? t.style.removeProperty("touch-action") : t.style.touchAction = !0 === n ? "auto" : n ? "pan-" + n + (sK.isTouch ? " pinch-zoom" : "") : "none", t === sJ && e(s0, n)
    },
    c2 = {
      auto: 1,
      scroll: 1
    },
    c3 = function(e) {
      var t, n = e.event,
        r = e.target,
        a = e.axis,
        i = (n.changedTouches ? n.changedTouches[0] : n).target,
        o = i._gsap || sX.core.getCache(i),
        s = lC();
      if (!o._isScrollT || s - o._isScrollT > 2e3) {
        for (; i && i !== s0 && (i.scrollHeight <= i.clientHeight && i.scrollWidth <= i.clientWidth || !(c2[(t = l8(i)).overflowY] || c2[t.overflowX]));) i = i.parentNode;
        o._isScroll = i && i !== r && !lM(i) && (c2[(t = l8(i)).overflowY] || c2[t.overflowX]), o._isScrollT = s
      }(o._isScroll || "x" === a) && (n.stopPropagation(), n._gsapAllow = !0)
    },
    c4 = function(e, t, n, r) {
      return sK.create({
        target: e,
        capture: !0,
        debounce: !1,
        lockAxis: !0,
        type: t,
        onWheel: r = r && c3,
        onPress: r,
        onDrag: r,
        onScroll: r,
        onEnable: function() {
          return n && ci(sZ, sK.eventTypes[0], c6, !1, !0)
        },
        onDisable: function() {
          return co(sZ, sK.eventTypes[0], c6, !0)
        }
      })
    },
    c5 = /(input|label|select|textarea)/i,
    c6 = function(e) {
      var t = c5.test(e.target.tagName);
      (t || cJ) && (e._gsapAllow = !0, cJ = t)
    },
    c8 = function(e) {
      lW(e) || (e = {}), e.preventDefault = e.isNormalizer = e.allowClicks = !0, e.type || (e.type = "wheel,touch"), e.debounce = !!e.debounce, e.id = e.id || "normalizer";
      var t, n, r, a, i, o, s, l, c = e,
        u = c.normalizeScrollX,
        d = c.momentum,
        f = c.allowNestedScroll,
        h = c.onRelease,
        p = sU(e.target) || sJ,
        m = sX.core.globals().ScrollSmoother,
        _ = m && m.get(),
        g = ld && (e.content && sU(e.content) || _ && !1 !== e.content && !_.smooth() && _.content()),
        v = sB(p, sF),
        y = sB(p, sH),
        b = 1,
        x = (sK.isTouch && sQ.visualViewport ? sQ.visualViewport.scale * sQ.visualViewport.width : sQ.outerWidth) / sQ.innerWidth,
        w = 0,
        k = lz(d) ? function() {
          return d(t)
        } : function() {
          return d || 2.8
        },
        C = c4(p, e.type, !0, f),
        S = function() {
          return a = !1
        },
        E = lO,
        T = lO,
        N = function() {
          n = lU(p, sF), T = s4(+!!ld, n), u && (E = s4(0, lU(p, sH))), r = cA
        },
        A = function() {
          g._gsap.y = lL(parseFloat(g._gsap.y) + v.offset) + "px", g.style.transform = "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, " + parseFloat(g._gsap.y) + ", 0, 1)", v.offset = v.cacheID = 0
        },
        R = function() {
          if (a) {
            requestAnimationFrame(S);
            var e = lL(t.deltaY / 2),
              n = T(v.v - e);
            if (g && n !== v.v + v.offset) {
              v.offset = n - v.v;
              var r = lL((parseFloat(g && g._gsap.y) || 0) - v.offset);
              g.style.transform = "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, " + r + ", 0, 1)", g._gsap.y = r + "px", v.cacheID = sS.cache, cM()
            }
            return !0
          }
          v.offset && A(), a = !0
        },
        I = function() {
          N(), i.isActive() && i.vars.scrollY > n && (v() > n ? i.progress(1) && v(n) : i.resetTo("scrollY", n))
        };
      return g && sX.set(g, {
        y: "+=0"
      }), e.ignoreCheck = function(e) {
        return ld && "touchmove" === e.type && R() || b > 1.05 && "touchstart" !== e.type || t.isGesturing || e.touches && e.touches.length > 1
      }, e.onPress = function() {
        a = !1;
        var e = b;
        b = lL((sQ.visualViewport && sQ.visualViewport.scale || 1) / x), i.pause(), e !== b && c1(p, b > 1.01 || !u && "x"), o = y(), s = v(), N(), r = cA
      }, e.onRelease = e.onGestureStart = function(e, t) {
        if (v.offset && A(), t) {
          sS.cache++;
          var r, a, o = k();
          u && (a = (r = y()) + -(.05 * o * e.velocityX) / .227, o *= c0(y, r, a, lU(p, sH)), i.vars.scrollX = E(a)), a = (r = v()) + -(.05 * o * e.velocityY) / .227, o *= c0(v, r, a, lU(p, sF)), i.vars.scrollY = T(a), i.invalidate().duration(o).play(.01), (ld && i.vars.scrollY >= n || r >= n - 1) && sX.to({}, {
            onUpdate: I,
            duration: o
          })
        } else l.restart(!0);
        h && h(e)
      }, e.onWheel = function() {
        i._ts && i.pause(), lC() - w > 1e3 && (r = 0, w = lC())
      }, e.onChange = function(e, t, n, a, i) {
        if (cA !== r && N(), t && u && y(E(a[2] === t ? o + (e.startX - e.x) : y() + t - a[1])), n) {
          v.offset && A();
          var l = i[2] === n,
            c = l ? s + e.startY - e.y : v() + n - i[1],
            d = T(c);
          l && c !== d && (s += d - c), v(d)
        }(n || t) && cM()
      }, e.onEnable = function() {
        c1(p, !u && "x"), cZ.addEventListener("refresh", I), ci(sQ, "resize", I), v.smooth && (v.target.style.scrollBehavior = "auto", v.smooth = y.smooth = !1), C.enable()
      }, e.onDisable = function() {
        c1(p, !0), co(sQ, "resize", I), cZ.removeEventListener("refresh", I), C.kill()
      }, e.lockAxis = !1 !== e.lockAxis, (t = new sK(e)).iOS = ld, ld && !v() && v(1), ld && sX.ticker.add(lO), l = t._dc, i = sX.to(t, {
        ease: "power4",
        paused: !0,
        inherit: !1,
        scrollX: u ? "+=0.1" : "+=0",
        scrollY: "+=0.1",
        modifiers: {
          scrollY: cX(v, v(), function() {
            return i.pause()
          })
        },
        onUpdate: cM,
        onComplete: l.vars.onComplete
      }), t
    };
  cZ.sort = function(e) {
    if (lz(e)) return cp.sort(e);
    var t = sQ.pageYOffset || 0;
    return cZ.getAll().forEach(function(e) {
      return e._sortY = e.trigger ? t + e.trigger.getBoundingClientRect().top : e.start + sQ.innerHeight
    }), cp.sort(e || function(e, t) {
      return -1e6 * (e.vars.refreshPriority || 0) + (e.vars.containerAnimation ? 1e6 : e._sortY) - ((t.vars.containerAnimation ? 1e6 : t._sortY) + -1e6 * (t.vars.refreshPriority || 0))
    })
  }, cZ.observe = function(e) {
    return new sK(e)
  }, cZ.normalizeScroll = function(e) {
    if (void 0 === e) return ls;
    if (!0 === e && ls) return ls.enable();
    if (!1 === e) {
      ls && ls.kill(), ls = e;
      return
    }
    var t = e instanceof sK ? e : c8(e);
    return ls && ls.target === t.target && ls.kill(), lM(t.target) && (ls = t), t
  }, cZ.core = {
    _getVelocityProp: sz,
    _inputObserver: c4,
    _scrollers: sS,
    _proxies: sE,
    bridge: {
      ss: function() {
        lE || ck("scrollStart"), lE = lC()
      },
      ref: function() {
        return s8
      }
    }
  }, lP() && sX.registerPlugin(cZ);
  var c7 = e.i(651126);
  rK.registerPlugin(r0, sl, cZ), is.default._isSVG = !0, c7.default._isSVG = !0;
  let c9 = "/images/landing/brand/muse-logo.svg";

  function ue(e) {
    let r, a, i, o, s = (0, n.c)(14),
      {
        href: l,
        id: c,
        label: u,
        newTab: d
      } = e,
      f = void 0 !== d && d,
      h = `landing_footer_${c}`;
    s[0] !== c ? (r = {
      surface: "landing",
      subsurface: "footer",
      link: c
    }, s[0] = c, s[1] = r) : r = s[1], s[2] !== h || s[3] !== r ? (a = {
      eventName: aS.HatchClickEvent.LANDING_FOOTER_LINK_CLICK,
      actionTarget: h,
      actionType: "click",
      metadata: r
    }, s[2] = h, s[3] = r, s[4] = a) : a = s[4];
    let {
      ref: p,
      onClick: m
    } = (0, aE.useTrackedClickRef)(a), _ = f ? "_blank" : void 0, g = f ? "noreferrer" : void 0;
    return s[5] !== m ? (i = () => m(), s[5] = m, s[6] = i) : i = s[6], s[7] !== l || s[8] !== u || s[9] !== p || s[10] !== _ || s[11] !== g || s[12] !== i ? (o = (0, t.jsx)(ab.EctoAnchor, {
      ref: p,
      href: l,
      skipLinkshim: !0,
      target: _,
      rel: g,
      onClick: i,
      className: "text-subheadline text-text-secondary cursor-pointer no-underline hover:underline",
      children: u
    }), s[7] = l, s[8] = u, s[9] = p, s[10] = _, s[11] = g, s[12] = i, s[13] = o) : o = s[13], o
  }

  function ut() {
    let e, a, i, o, s, l, c, u, d, f, h, p = (0, n.c)(12);
    p[0] === Symbol.for("react.memo_cache_sentinel") ? (e = {
      eventName: aV.HatchImpressionEvent.LANDING_PAGE_IMPRESSION,
      actionTarget: "landing_footer",
      metadata: {
        surface: "landing",
        subsurface: "footer"
      }
    }, a = {
      threshold: "50%"
    }, p[0] = e, p[1] = a) : (e = p[0], a = p[1]);
    let {
      ref: m
    } = (0, aE.useTrackedImpressionRef)(e, a);
    return p[2] === Symbol.for("react.memo_cache_sentinel") ? (i = r.fbs._("Meta legal information", null, {
      hk: "1QqEdE"
    }), p[2] = i) : i = p[2], p[3] === Symbol.for("react.memo_cache_sentinel") ? (o = (0, t.jsx)("p", {
      className: "text-subheadline text-text-secondary text-center md:text-start",
      children: r.fbt._("© Meta 2026", null, {
        hk: "43C1tx"
      })
    }), s = r.fbs._("Legal links", null, {
      hk: "4AzksR"
    }), p[3] = o, p[4] = s) : (o = p[3], s = p[4]), p[5] === Symbol.for("react.memo_cache_sentinel") ? (l = (0, t.jsx)(ue, {
      id: "privacy",
      href: oD.TermsOfServiceLinks.PRIVACY_POLICY,
      newTab: !0,
      label: r.fbt._("Privacy Policy", null, {
        hk: "1rDIBe"
      })
    }), p[5] = l) : l = p[5], p[6] === Symbol.for("react.memo_cache_sentinel") ? (c = (0, t.jsx)(ue, {
      id: "cookies",
      href: oD.TermsOfServiceLinks.COOKIES_NOTICE,
      newTab: !0,
      label: r.fbt._("Cookie Policy", null, {
        hk: "2HF29b"
      })
    }), p[6] = c) : c = p[6], p[7] === Symbol.for("react.memo_cache_sentinel") ? (u = (0, t.jsxs)("nav", {
      "aria-label": s,
      className: "flex flex-wrap items-center justify-center gap-6",
      children: [l, c, (0, t.jsx)(ue, {
        id: "terms",
        href: oD.TermsOfServiceLinks.HATCH_TERMS,
        label: r.fbt._("Terms", null, {
          hk: "1DdvMp"
        })
      })]
    }), p[7] = u) : u = p[7], p[8] === Symbol.for("react.memo_cache_sentinel") ? (d = (0, t.jsx)("span", {
      className: "text-subheadline text-text-secondary",
      children: r.fbt._("from", null, {
        hk: "1JNKko"
      })
    }), p[8] = d) : d = p[8], p[9] === Symbol.for("react.memo_cache_sentinel") ? (f = (0, t.jsx)("div", {
      className: "relative mx-auto w-full max-w-[1440px] px-5 md:px-10 lg:px-14",
      children: (0, t.jsxs)("div", {
        className: "grid gap-6 pt-8 md:grid-cols-[1fr_auto_1fr] md:items-center",
        children: [o, u, (0, t.jsxs)("div", {
          className: "flex items-center justify-center gap-2 md:justify-end",
          children: [d, (0, t.jsx)("span", {
            role: "img",
            "aria-label": r.fbs._("Meta", null, {
              hk: "1QJYzw"
            }),
            className: "landing-meta-wordmark landing-meta-wordmark-primary block aspect-[5/1] h-3"
          })]
        })]
      })
    }), p[9] = f) : f = p[9], p[10] !== m ? (h = (0, t.jsx)("footer", {
      ref: m,
      "aria-label": i,
      className: "bg-bg-primary relative shrink-0 overflow-hidden pb-8",
      children: f
    }), p[10] = m, p[11] = h) : h = p[11], h
  }

  function un({
    audience: e,
    landingPage: n,
    continueTo: a,
    authContent: o,
    showAppDownloads: s,
    hasDenseAccountList: l,
    onFocusAuth: c
  }) {
    let {
      Hero: u,
      MarketingContent: d
    } = n, f = "minimal" !== n.layout, h = (0, aM.useIsMobileBreakpoint)(), p = f || h, _ = "work" === e, [g, v] = (0, m.useState)(!0), [y, b] = (0, m.useState)(!1), [x, w] = (0, m.useState)(!1), [k, C] = (0, m.useState)(!0), [S, E] = (0, m.useState)(!0), [T, N] = (0, m.useState)(!1), [A, R] = (0, m.useState)(oH.HATCH_STICKY_HEADER_HEIGHT), I = (0, m.useRef)(null), O = (0, m.useRef)(null), L = (0, m.useRef)(null), j = (0, m.useRef)(null), P = (0, m.useRef)(null), M = (0, m.useRef)(null), D = (0, m.useRef)(null), H = (0, m.useRef)(null), F = (0, m.useRef)(null), U = (0, m.useRef)(null), G = (0, m.useRef)(null), B = (0, m.useRef)(null), z = (0, m.useRef)(null), Y = (0, a2.useOnInView)(e => v(e)), W = (0, ak.useMergeRefs)(z, Y), q = (0, a2.useOnInView)(e => C(e), {
      rootMargin: `-${oH.HATCH_STICKY_HEADER_HEIGHT}px 0px 0px 0px`
    }), V = (0, m.useRef)(null), K = !f || k, X = (0, m.useCallback)(() => {
      let e = z.current,
        t = L.current;
      null != e && null != t && N(e.getBoundingClientRect().bottom <= t.getBoundingClientRect().bottom)
    }, []), $ = (0, oM.useResizeObserver)(({
      height: e
    }) => {
      R(e), X()
    });
    (0, m.useEffect)(() => (X(), window.addEventListener("resize", X, {
      passive: !0
    }), () => window.removeEventListener("resize", X)), [X]), r0(() => {
      let e = I.current;
      if (!f || null == e) return;
      let t = [
          [H.current, D.current],
          [U.current, F.current],
          [B.current, G.current]
        ],
        n = rK.matchMedia();
      return n.add("(min-width: 48rem) and (prefers-reduced-motion: no-preference)", () => {
        t.forEach(([t, n]) => {
          null != t && null != n && (rK.fromTo(t, {
            scale: .9,
            transformOrigin: "center center",
            y: 40
          }, {
            ease: "none",
            scale: 1,
            scrollTrigger: {
              end: "center 65%",
              invalidateOnRefresh: !0,
              scroller: e,
              scrub: .3,
              start: "top 90%",
              trigger: n
            },
            y: 0
          }), _ || t !== H.current || null == M.current || rK.fromTo(M.current, {
            opacity: 0
          }, {
            ease: "none",
            opacity: 1,
            scrollTrigger: {
              end: "center 65%",
              invalidateOnRefresh: !0,
              scroller: e,
              scrub: .3,
              start: "top 90%",
              trigger: n
            }
          }))
        })
      }), () => {
        n.revert()
      }
    }, {
      dependencies: [e, h, f],
      revertOnUpdate: !0
    });
    let {
      contextSafe: Q
    } = r0(), Z = Q(() => {
      let e = I.current,
        t = P.current;
      if (null == e || null == t) return;
      let n = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      rK.to(e, {
        duration: .8 * !n,
        ease: "power2.inOut",
        overwrite: "auto",
        onComplete: () => t.focus({
          preventScroll: !0
        }),
        scrollTo: {
          autoKill: !0,
          offsetY: A,
          y: t
        }
      })
    }), J = Q(() => {
      let e = I.current;
      if (null == e) return;
      let t = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      rK.to(e, {
        duration: .8 * !t,
        ease: "power2.inOut",
        overwrite: "auto",
        onComplete: c,
        scrollTo: {
          autoKill: !0,
          y: 0
        }
      })
    }), {
      ref: ee
    } = (0, aE.useTrackedImpressionRef)({
      eventName: aV.HatchImpressionEvent.LANDING_PAGE_IMPRESSION,
      actionTarget: "landing_page",
      metadata: {
        surface: "landing",
        subsurface: "page"
      }
    }, {
      threshold: "50%"
    }), {
      ref: et,
      onClick: en
    } = (0, aE.useTrackedClickRef)({
      eventName: aS.HatchClickEvent.LOGGED_OUT_LOGIN_CLICK,
      actionTarget: "landing_header_login",
      actionType: "click",
      metadata: {
        surface: "landing",
        subsurface: "header"
      }
    }), {
      ref: er,
      onClick: ea
    } = (0, aE.useTrackedClickRef)({
      eventName: aS.HatchClickEvent.LANDING_GET_APPS_CLICK,
      actionTarget: "landing_header_get_apps",
      actionType: "click",
      metadata: {
        surface: "landing",
        subsurface: "header"
      }
    }), ei = null != a ? (0, t.jsx)(aT, {
      href: a,
      subsurface: "header",
      className: "col-start-1 row-start-1 h-9 justify-self-end px-4"
    }) : (0, t.jsx)(aw.Button, {
      ref: et,
      type: "button",
      label: r.fbt._("Log in", null, {
        hk: "40SymY"
      }),
      radius: "rounded",
      size: "36",
      variant: "primary",
      className: "col-start-1 row-start-1 h-9 justify-self-end px-4",
      onClick: () => {
        en(), J()
      }
    });
    return (0, t.jsx)("div", {
      className: "flex h-dvh w-full overflow-hidden",
      children: (0, t.jsx)(oj.default, {
        ref: I,
        horizontal: !1,
        vertical: !0,
        role: "region",
        "aria-label": _ ? r.fbs._("{productName} for business landing page", [r.fbs._param("productName", i)], {
          hk: "2EMezz"
        }) : r.fbs._("{productName} landing page", [r.fbs._param("productName", i)], {
          hk: "3j4OP0"
        }),
        tabIndex: p ? 0 : void 0,
        onScroll: p ? X : void 0,
        onScrollTop: f ? E : void 0,
        scrollbarTopInset: A,
        className: (0, r3.cn)("focus-visible:outline-hatch-accent h-dvh min-w-0 flex-1 focus:not-focus-visible:outline-none focus-visible:outline-2 focus-visible:-outline-offset-2", !f && "md:overflow-y-hidden"),
        children: (0, t.jsxs)("div", {
          ref: ee,
          className: (0, r3.cn)("bg-bg-primary text-text-primary min-h-dvh w-full", !f && "md:flex md:h-dvh md:flex-col md:overflow-hidden"),
          children: [(0, t.jsxs)("div", {
            ref: $,
            className: "pointer-events-none sticky top-0 z-40 shrink-0",
            style: {
              marginBottom: f ? -oH.HATCH_STICKY_HEADER_HEIGHT : 0
            },
            children: [h && !y && (0, t.jsx)(aZ, {
              showAppDownloads: s,
              pendingFallback: (0, t.jsx)("div", {
                "aria-hidden": "true",
                className: "bg-bg-secondary min-h-24"
              }),
              children: (0, t.jsx)(oB, {
                onDismiss: () => b(!0)
              })
            }), (0, t.jsxs)("header", {
              ref: L,
              className: "landing-sticky-header-theme pointer-events-none relative shrink-0 overflow-visible",
              style: {
                height: oH.HATCH_STICKY_HEADER_HEIGHT
              },
              children: [(0, t.jsx)("div", {
                "aria-hidden": "true",
                className: "hatch-route-header-bg landing-sticky-header-bg pointer-events-none absolute inset-0 opacity-0 will-change-[opacity]"
              }), (0, t.jsx)("div", {
                className: "relative mx-auto w-full max-w-[1440px] px-5 md:px-10 lg:px-14",
                style: {
                  height: oH.HATCH_STICKY_HEADER_HEIGHT
                },
                children: (0, t.jsxs)("div", {
                  className: "relative flex size-full items-center justify-center",
                  children: [(0, t.jsx)("span", {
                    role: "img",
                    "aria-label": r.fbs._("Meta", null, {
                      hk: "2GoBhZ"
                    }),
                    className: "landing-meta-wordmark landing-meta-wordmark-primary pointer-events-none absolute start-0 aspect-[5/1]",
                    style: {
                      height: "12px"
                    }
                  }), p && T && (0, t.jsx)("img", {
                    src: c9,
                    alt: i,
                    className: "landing-sticky-mark pointer-events-none h-8 w-auto"
                  }), (0, t.jsx)("div", {
                    className: "pointer-events-auto absolute end-0 grid items-center",
                    children: (0, t.jsxs)(aZ, {
                      showAppDownloads: s,
                      fallback: h ? null : ei,
                      children: [(0, t.jsx)("div", {
                        className: (0, r3.cn)("col-start-1 row-start-1 justify-self-end", K ? "hidden md:block" : "hidden"),
                        children: (0, t.jsx)(oK, {
                          anchorVisible: !_ && K,
                          onOpenChange: w,
                          children: (0, t.jsx)(oY, {
                            onOpen: ea,
                            suppressed: x,
                            children: (0, t.jsx)(aw.Button, {
                              ref: er,
                              type: "button",
                              label: r.fbs._("Download apps", null, {
                                hk: "hBQxp"
                              }),
                              leadingIcon: is.default,
                              radius: "rounded",
                              size: "36",
                              variant: "flat",
                              className: "text-text-primary h-9 px-4"
                            })
                          })
                        })
                      }), !h && !K && ei]
                    })
                  })]
                })
              })]
            })]
          }), (0, t.jsx)("div", {
            className: (0, r3.cn)("bg-bg-primary w-full", !f && "md:min-h-0 md:flex-1"),
            children: (0, t.jsx)("div", {
              ref: V,
              className: (0, r3.cn)(!f && "md:h-full"),
              children: (0, t.jsxs)("section", {
                "aria-labelledby": "landing-hero-title",
                tabIndex: p ? void 0 : 0,
                className: (0, r3.cn)("bg-bg-primary relative w-full", f ? _ ? "landing-business-hero" : "min-h-screen overflow-hidden" : "focus-visible:outline-hatch-accent min-h-screen focus-visible:outline-2 focus-visible:-outline-offset-2 md:h-full md:min-h-0 md:overflow-y-auto md:overscroll-y-contain"),
                children: [(0, t.jsx)("div", {
                  className: (0, r3.cn)("pointer-events-none relative z-20 mx-auto flex w-full max-w-[1440px] flex-col px-5 py-6 md:px-10 md:py-8 lg:px-14", f ? !_ && "min-h-screen" : "min-h-screen md:min-h-full"),
                  children: (0, t.jsx)("div", {
                    "data-landing-account-density": l ? "dense" : void 0,
                    className: (0, r3.cn)("flex w-full flex-1 justify-center", f ? _ ? "items-start" : "landing-hero-lockup-position" : "items-center"),
                    children: (0, t.jsxs)("div", {
                      ref: O,
                      className: "landing-hero-content pointer-events-auto relative isolate flex w-full max-w-none flex-col items-center text-center",
                      children: [(0, t.jsx)("img", {
                        ref: W,
                        src: c9,
                        alt: i,
                        className: "landing-brand-mark"
                      }), (0, t.jsx)(aP.EctoErrorBoundary, {
                        surface: ay.HATCH_SENTRY_SURFACES.LANDING,
                        children: (0, t.jsx)(u, {
                          isActive: g,
                          scrollerRef: I
                        })
                      }), (0, t.jsxs)("div", {
                        className: (0, r3.cn)("landing-hero-login flex w-full flex-col items-center", f && _ ? "md:mt-4" : "md:mt-8"),
                        children: [(0, t.jsxs)("div", {
                          className: "relative flex w-full max-w-102 justify-center",
                          children: [o, (0, t.jsx)("span", {
                            ref: q,
                            "aria-hidden": "true",
                            className: "absolute inset-x-0 bottom-0 block"
                          })]
                        }), !f && h && (0, t.jsx)(aZ, {
                          showAppDownloads: s,
                          pendingFallback: (0, t.jsx)("div", {
                            "aria-hidden": "true",
                            className: "mt-6 min-h-27"
                          }),
                          children: (0, t.jsx)("div", {
                            className: "mt-6 flex w-64 max-w-full flex-col gap-3",
                            children: (0, t.jsx)(aj, {
                              subsurface: "hero_app_download"
                            })
                          })
                        })]
                      })]
                    })
                  })
                }), f && !_ && (0, t.jsxs)(ab.EctoAnchor, {
                  href: "#landing-introduction-video-title",
                  "aria-hidden": !S,
                  inert: !S || void 0,
                  tabIndex: S ? void 0 : -1,
                  className: (0, r3.cn)((0, aC.buttonVariants)({
                    radius: "rounded",
                    size: "36",
                    variant: "elevated"
                  }), "fixed inset-x-0 bottom-4 z-30 mx-auto h-10.5 w-fit gap-1 px-4 motion-safe:transition-opacity motion-safe:duration-150", S ? "opacity-100" : "pointer-events-none opacity-0"),
                  onClick: e => {
                    e.preventDefault(), Z()
                  },
                  children: [(0, t.jsx)("span", {
                    className: "text-subheadline-medium",
                    children: r.fbt._("Learn more", null, {
                      hk: "2ggfTq"
                    })
                  }), (0, t.jsx)(ax.HatchIcon, {
                    icon: c7.default,
                    size: 20,
                    "aria-hidden": "true"
                  })]
                })]
              })
            })
          }), null != d && (0, t.jsx)(d, {
            introductionFillRef: M,
            introductionMediaRef: H,
            introductionMediaPinRef: D,
            introductionSectionRef: P,
            walkthroughMediaRef: U,
            walkthroughMediaPinRef: F,
            founderMediaRef: B,
            founderMediaPinRef: G,
            featureListRef: j,
            showAppDownloads: s,
            onReturnToLogin: J,
            continueTo: a
          }), (0, t.jsx)(aP.EctoErrorBoundary, {
            surface: ay.HATCH_SENTRY_SURFACES.LANDING,
            children: (0, t.jsx)(ut, {})
          })]
        })
      })
    })
  }

  function ur(e) {
    let r, a = (0, n.c)(2);
    return a[0] !== e ? (r = (0, t.jsx)(oP.EctoKeyboardShortcutsProvider, {
      children: (0, t.jsx)(un, {
        ...e
      })
    }), a[0] = e, a[1] = r) : r = a[1], r
  }

  function ua(e) {
    let r, a, i, o, s = (0, n.c)(21),
      {
        audience: l,
        landingPage: c,
        continueTo: u,
        backButton: d,
        children: f,
        entrySurface: h,
        showAppDownloads: p,
        hasDenseAccountList: m,
        impressionRef: _,
        isLandingEntryState: g,
        returnTo: v,
        onFocusAuth: y,
        overlay: b
      } = e,
      x = void 0 === l ? "personal" : l,
      w = void 0 === d ? null : d,
      k = void 0 === h ? "default" : h,
      C = void 0 === v ? null : v,
      S = "platform" === k ? "bg-fill-primary" : g ? "bg-bg-primary" : "bg-fill-primary flex items-center justify-center";
    return s[0] !== S ? (r = (0, r3.cn)("text-text-primary min-h-dvh w-full [color-scheme:light] dark:[color-scheme:dark]", S), s[0] = S, s[1] = r) : r = s[1], s[2] !== x || s[3] !== w || s[4] !== f || s[5] !== u || s[6] !== k || s[7] !== m || s[8] !== g || s[9] !== c || s[10] !== y || s[11] !== C || s[12] !== p ? (a = "platform" === k ? (0, t.jsx)(oL.PlatformLoggedOutAuthPage, {
      backButton: w,
      isLandingEntryState: g,
      returnTo: C ?? "/platform",
      children: f
    }) : g ? (0, t.jsx)(ur, {
      audience: x,
      landingPage: c,
      continueTo: u,
      authContent: f,
      showAppDownloads: p,
      hasDenseAccountList: m,
      onFocusAuth: y
    }) : f, s[2] = x, s[3] = w, s[4] = f, s[5] = u, s[6] = k, s[7] = m, s[8] = g, s[9] = c, s[10] = y, s[11] = C, s[12] = p, s[13] = a) : a = s[13], s[14] !== _ || s[15] !== r || s[16] !== a ? (i = (0, t.jsx)("main", {
      ref: _,
      className: r,
      children: a
    }), s[14] = _, s[15] = r, s[16] = a, s[17] = i) : i = s[17], s[18] !== b || s[19] !== i ? (o = (0, t.jsxs)(t.Fragment, {
      children: [i, b]
    }), s[18] = b, s[19] = i, s[20] = o) : o = s[20], o
  }
  var ui = e.i(990909);

  function uo(e) {
    return null != e && "object" == typeof e && !Array.isArray(e)
  }

  function us(e, t) {
    return "string" == typeof e && e.trim().length > 0 && e.length <= t ? e : null
  }

  function ul(e, t) {
    return "string" != typeof e || e.length > 3e3 || !URL.canParse(e) ? null : t.includes(new URL(e).protocol) ? e : null
  }
  var uc = e.i(255772);
  let uu = /^[A-Za-z0-9][A-Za-z0-9_.:-]{0,127}$/,
    ud = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i,
    uf = /^[a-z0-9]{2,16}(?:::[a-z0-9]{2,16})*-\d{13}-[a-z0-9]{12,32}$/i;
  async function uh(t, n, r = Math.floor(Date.now() / 1e3)) {
    if (null == n || !Number.isSafeInteger(n.keyId) || n.keyId < 0 || n.keyId > 255) throw Error("Password encryption is unavailable");
    let a = function(e) {
        let t = e.trim();
        if (/^[0-9a-fA-F]{64}$/.test(t)) return Uint8Array.from(t.match(/.{2}/g) ?? [], e => Number.parseInt(e, 16));
        let n = atob(t);
        return Uint8Array.from(n, e => e.charCodeAt(0))
      }(n.publicKey),
      {
        default: i
      } = await e.A(291462);
    if (await i.ready, a.length !== i.crypto_box_PUBLICKEYBYTES) throw Error("Password encryption key is invalid");
    let o = new TextEncoder,
      s = crypto.getRandomValues(new Uint8Array(32)),
      l = await crypto.subtle.importKey("raw", s, "AES-GCM", !1, ["encrypt"]),
      c = new Uint8Array(await crypto.subtle.encrypt({
        name: "AES-GCM",
        iv: new Uint8Array(12),
        additionalData: o.encode(String(r)),
        tagLength: 128
      }, l, o.encode(t))),
      u = c.slice(-16),
      d = c.slice(0, -16),
      f = i.crypto_box_seal(s, a);
    if (f.length > 65535) throw Error("Password encryption failed");
    let h = new Uint8Array(4 + f.length + u.length + d.length);
    return h[0] = 1, h[1] = n.keyId, h[2] = 255 & f.length, h[3] = f.length >> 8 & 255, h.set(f, 4), h.set(u, 4 + f.length), h.set(d, 4 + f.length + u.length), `#PWD_BROWSER:5:${r}:${function(e){let t="";for(let n of e)t+=String.fromCharCode(n);return btoa(t)}(h)}`
  }
  var up = e.i(153124),
    um = e.i(756710),
    u_ = e.i(976745),
    ug = e.i(836932),
    uv = e.i(963765),
    uy = e.i(150722),
    ub = e.i(535678),
    ux = e.i(957948),
    uw = e.i(929724),
    uk = e.i(126958),
    uC = e.i(496180),
    uS = e.i(787510);
  let uE = "/api/auth/caa-events",
    uT = (0, r4.createClientLogger)("caaAuthEventLogger"),
    uN = [],
    uA = !1,
    uR = null;

  function uI(e) {
    if (uA = !1, 0 === uN.length || e?.force !== !0 && !(0, uw.hasHatchAuthBearerSettled)()) return;
    let t = uN;
    uN = [],
      function(e) {
        let t = JSON.stringify(e);
        try {
          let e = new Blob([t], {
            type: "application/json"
          });
          if ("function" == typeof navigator.sendBeacon && navigator.sendBeacon(uE, e)) return
        } catch {}
        try {
          fetch(uE, {
            method: "POST",
            headers: {
              "Content-Type": "application/json"
            },
            body: t,
            keepalive: !0,
            credentials: "same-origin",
            cache: "no-store"
          }).catch(() => {})
        } catch (e) {
          uT.retainForBugReport("warn", "Unable to send CAA authentication events")
        }
      }({
        events: t
      })
  }

  function uO(e, t, n) {
    try {
      let r = n ?? (0, uw.getHatchAuthWaterfallId)();
      if (null == r) return void uT.retainForBugReport("warn", "Dropped a CAA event with no attempt in flight");
      if (! function() {
          if (null != uR) return;
          let e = () => uI({
              force: !0
            }),
            t = () => {
              "hidden" === document.visibilityState && uI({
                force: !0
              })
            };
          window.addEventListener("pagehide", e), document.addEventListener("visibilitychange", t), uR = () => {
            window.removeEventListener("pagehide", e), document.removeEventListener("visibilitychange", t), uR = null
          }
        }(), uN.length >= uS.CAA_MAX_EVENTS_PER_BATCH && uI({
          force: !0
        }), uN.push({
          ...e,
          extra_client_data: {
            is_native: uS.CAA_IS_NATIVE_VALUE,
            ...e.extra_client_data
          },
          waterfall_id: r,
          client_time_ms: Date.now()
        }), t) return void uI({
        force: !0
      });
      uA || (uA = !0, queueMicrotask(uI))
    } catch (e) {
      uT.retainForBugReport("warn", "Unable to queue a CAA authentication event")
    }
  }
  let uL = {
    [uS.CaaEventStep.OTP]: uS.CaaLoginCredentialType.OTP,
    [uS.CaaEventStep.PASSWORD]: uS.CaaLoginCredentialType.PASSWORD
  };

  function uj(e) {
    return null == e ? uS.CaaFlowSource.FALLBACK : uS.CaaFlowSource.SERVER
  }

  function uP(e, t) {
    return e === uS.CaaEventStep.OTP ? {
      flow_source: uj(t)
    } : {}
  }

  function uM(e, t, n, r, a) {
    return uD(uS.CaaEventFlow.LOGIN_MANUAL, e, t, n, r, a)
  }

  function uD(e, t, n, r, a, i) {
    return {
      table: "caa_login_client_events_rl",
      event_name: t,
      event_category: n,
      event_flow: e,
      event_step: r,
      ...null == i ? {} : {
        contact_point_type: i
      },
      ...null == a ? {} : {
        extra_client_data: a
      }
    }
  }

  function uH(e) {
    uO({
      table: "caa_login_client_events_rl",
      event_name: e,
      event_category: uS.CaaEventCategory.LANDING_PAGE_INIT,
      event_flow: uS.CaaEventFlow.LOGIN,
      event_step: uS.CaaEventStep.LANDING
    }, !1)
  }

  function uF(e) {
    return {
      login_credential_type: "facebook" === e ? uS.CaaLoginCredentialType.FACEBOOK_ACTIVE_SESSION : uS.CaaLoginCredentialType.INSTAGRAM_ACTIVE_SESSION
    }
  }

  function uU(e, {
    isTwoFactorPending: t = !1,
    loggedInIdentifier: n
  } = {}) {
    uO({
      table: "caa_login_client_events_rl",
      event_name: uS.CaaLoginEvent.LOGIN_SUCCESS,
      event_category: uS.CaaEventCategory.LOGIN_SUCCESS,
      event_flow: uS.CaaEventFlow.AYMH,
      event_step: uS.CaaEventStep.LANDING,
      extra_client_data: {
        ...uF(e),
        is_2fa: t ? "true" : "false"
      },
      ...null == n ? {} : {
        logged_in_identifier: n
      }
    }, !t)
  }

  function uG(e, t, n) {
    uO({
      table: "caa_login_client_events_rl",
      event_name: uS.CaaLoginEvent.LOGIN_FAILED,
      event_category: uS.CaaEventCategory.LOGIN_FAILURE,
      event_flow: uS.CaaEventFlow.AYMH,
      event_step: uS.CaaEventStep.LANDING,
      extra_client_data: uF(e),
      exception_type: t,
      ...null == n ? {} : {
        exception_message: n
      }
    }, !1)
  }

  function uB(e, t = uS.CaaEventFlow.LOGIN_MANUAL, n = null) {
    uO(uD(t, uS.CaaLoginEvent.LOGIN_START, uS.CaaEventCategory.LOGIN_HOME_PAGE_INIT, uS.CaaEventStep.CONTACTPOINT, {
      flow_source: uj(e)
    }, n), !1)
  }

  function uz(e, {
    isTwoFactorPending: t,
    flow: n,
    eventFlow: r = uS.CaaEventFlow.LOGIN_MANUAL,
    loggedInIdentifier: a,
    contactPointType: i = null
  }) {
    uO({
      ...uD(r, uS.CaaLoginEvent.LOGIN_SUCCESS, uS.CaaEventCategory.LOGIN_SUCCESS, e, {
        ...uP(e, n),
        is_2fa: t ? "true" : "false"
      }, i),
      ...null == a ? {} : {
        logged_in_identifier: a
      }
    }, !t)
  }

  function uY(e, {
    exceptionType: t,
    exceptionMessage: n,
    exceptionCode: r,
    flow: a,
    eventFlow: i = uS.CaaEventFlow.LOGIN_MANUAL,
    contactPointType: o = null,
    waterfallId: s
  }) {
    uO({
      ...uD(i, uS.CaaLoginEvent.LOGIN_FAILED, uS.CaaEventCategory.LOGIN_FAILURE, e, uP(e, a), o),
      exception_type: t,
      exception_message: n,
      ...null == r ? {} : {
        exception_code: r
      }
    }, !1, s)
  }
  let uW = "checkpointRequired";

  function uq({
    eventFlow: e = uS.CaaEventFlow.LOGIN_MANUAL,
    loggedInIdentifier: t
  } = {}) {
    uO({
      ...uD(e, uS.CaaLoginEvent.TWO_FACTOR_LOGIN_SUCCESS, uS.CaaEventCategory.LOGIN_SUCCESS, uS.CaaEventStep.TWO_FAC_REDIRECT),
      ...null == t ? {} : {
        logged_in_identifier: t
      }
    }, !0)
  }

  function uV({
    exceptionType: e,
    exceptionCode: t,
    eventFlow: n = uS.CaaEventFlow.LOGIN_MANUAL
  }) {
    uO({
      ...uD(n, uS.CaaLoginEvent.TWO_FACTOR_LOGIN_FAILED, uS.CaaEventCategory.LOGIN_FAILURE, uS.CaaEventStep.TWO_FAC_REDIRECT),
      exception_type: e,
      ...null == t ? {} : {
        exception_code: t
      }
    }, !1)
  }

  function uK({
    flow: e,
    loggedInIdentifier: t
  }) {
    uO({
      table: "caa_login_client_events_rl",
      event_name: uS.CaaLoginEvent.LOGIN_SUCCESS,
      event_category: uS.CaaEventCategory.LOGIN_SUCCESS,
      event_flow: e,
      event_step: uS.CaaEventStep.TOS,
      extra_client_data: {
        login_source: "Registration",
        is_2fa: "false"
      },
      ...null == t ? {} : {
        logged_in_identifier: t
      }
    }, !0)
  }

  function uX(e, t) {
    let n = {
      table: "caa_acquisition_client_events_rl",
      event_name: uS.CAA_REGISTRATION_EVENT_NAME,
      state: e,
      event_category: uS.CaaEventCategory.REGISTRATION_FUNNEL,
      event_step: t
    };
    return (0, uw.getHatchAuthRegistrationFlow)() === uS.CaaEventFlow.NTP ? {
      ...n,
      event_flow: uS.CaaEventFlow.NTP,
      entry_point: u$()
    } : {
      ...n,
      event_flow: uS.CaaEventFlow.NTM,
      entry_point: (0, uw.getHatchAuthRegistrationEntryPoint)()
    }
  }

  function u$() {
    let e = (0, uw.getHatchAuthRegistrationEntryPoint)();
    return e === uS.CaaEntryPoint.AYMH || e === uS.CaaEntryPoint.NTP_UPSELL ? e : uS.CaaEntryPoint.NTP_LANDING
  }

  function uQ({
    createdUserId: e,
    contactPointType: t
  } = {}) {
    uO({
      table: "caa_acquisition_client_events_rl",
      event_name: uS.CAA_REGISTRATION_EVENT_NAME,
      state: uS.CaaRegistrationState.CREATE_SUCCESS,
      event_category: uS.CaaEventCategory.REGISTRATION_FUNNEL,
      event_flow: uS.CaaEventFlow.NTP,
      event_step: uS.CaaEventStep.ACCOUNT_CREATION,
      entry_point: u$(),
      ...null == t ? {} : {
        contact_point_type: t
      },
      ...null == e ? {} : {
        created_user_id: e
      }
    }, !0)
  }

  function uZ(e) {
    uO({
      table: "caa_acquisition_client_events_rl",
      event_name: uS.CAA_REGISTRATION_EVENT_NAME,
      state: uS.CaaRegistrationState.CREATE_FAILURE,
      event_category: uS.CaaEventCategory.REGISTRATION_FUNNEL,
      event_flow: uS.CaaEventFlow.NTP,
      event_step: uS.CaaEventStep.ACCOUNT_CREATION,
      entry_point: u$(),
      exception_type: e
    }, !1)
  }

  function uJ({
    createdUserId: e,
    contactPointType: t
  } = {}) {
    uO({
      ...uX(uS.CaaRegistrationState.CREATE_SUCCESS, uS.CaaEventStep.ACCOUNT_CREATION),
      ...null == t ? {} : {
        contact_point_type: t
      },
      ...null == e ? {} : {
        created_user_id: e
      }
    }, !0)
  }

  function u0(e) {
    uO({
      ...uX(uS.CaaRegistrationState.CREATE_FAILURE, uS.CaaEventStep.ACCOUNT_CREATION),
      exception_type: e
    }, !1)
  }

  function u1(e, t, n) {
    let r = {
      table: "caa_acquisition_client_events_rl",
      event_name: uS.CAA_CONFIRMATION_EVENT_NAME,
      state: e,
      event_category: uS.CaaEventCategory.CONFIRMATION_FUNNEL,
      event_step: uS.CaaEventStep.CONFIRMATION,
      ...null == n ? {} : {
        contact_point_type: n
      },
      extra_client_data: {
        flow_source: uj(t)
      }
    };
    return (0, uw.getHatchAuthRegistrationFlow)() === uS.CaaEventFlow.NTP ? {
      ...r,
      event_flow: uS.CaaEventFlow.NTP,
      entry_point: u$()
    } : {
      ...r,
      event_flow: uS.CaaEventFlow.NTM,
      entry_point: (0, uw.getHatchAuthRegistrationEntryPoint)()
    }
  }

  function u2(e, t) {
    uO(u1(uS.CaaConfirmationState.SUCCESS, e, t), !1)
  }

  function u3(e, t, {
    exceptionType: n,
    exceptionCode: r
  }) {
    uO({
      ...u1(uS.CaaConfirmationState.FAILURE, e, t),
      exception_type: n,
      ...null == r ? {} : {
        exception_code: r
      }
    }, !1)
  }

  function u4() {
    uO({
      table: "caa_account_recovery_client_events_rl",
      event_name: uS.CaaAccountRecoveryEvent.ACCOUNT_RECOVERY_START,
      event_category: uS.CaaEventCategory.LOGIN,
      event_flow: uS.CaaEventFlow.ACCOUNT_RECOVERY,
      event_step: uS.CaaEventStep.PASSWORD_FORM
    }, !1)
  }

  function u5(e, {
    loggedInIdentifier: t
  } = {}) {
    uO({
      table: "caa_account_recovery_client_events_rl",
      event_name: uS.CaaAccountRecoveryEvent.PASSWORD_RESET_RECOVERY_SUCCESS_CLIENT,
      event_category: uS.CaaEventCategory.CHANGE_PASSWORD,
      event_flow: uS.CaaEventFlow.ACCOUNT_RECOVERY,
      event_step: uS.CaaEventStep.CHANGE_PASSWORD,
      ...null == e ? {} : {
        extra_client_data: {
          [e]: "1"
        }
      },
      ...null == t ? {} : {
        logged_in_identifier: t
      }
    }, !0)
  }

  function u6(e, {
    exceptionType: t,
    exceptionCode: n
  }) {
    uO({
      table: "caa_account_recovery_client_events_rl",
      event_name: uS.CaaAccountRecoveryEvent.PASSWORD_RESET_RECOVERY_FAILURE_CLIENT,
      event_category: uS.CaaEventCategory.CHANGE_PASSWORD,
      event_flow: uS.CaaEventFlow.ACCOUNT_RECOVERY,
      event_step: uS.CaaEventStep.CHANGE_PASSWORD,
      ...null == e ? {} : {
        extra_client_data: {
          [e]: "1"
        }
      },
      exception_type: t,
      ...null == n ? {} : {
        exception_code: n
      }
    }, !1)
  }
  var u8 = e.i(995198),
    u7 = e.i(183663),
    u9 = e.i(301936);
  async function de(e, t, n = {}) {
    if (n.signal?.aborted) throw n.signal.reason;
    let r = crypto.randomUUID(),
      a = (e, t) => n.onProgress?.({
        completionId: r,
        stage: e,
        httpStatus: t
      });
    a("preparation", null);
    let i = await fetch("/api/auth/provider-sso/start", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      signal: n.signal,
      body: JSON.stringify({
        provider: e,
        completion_id: r,
        ...null == n.caaRegEntryPoint ? {} : {
          caa_reg_entry_point: n.caaRegEntryPoint
        },
        ...null == t ? {} : {
          return_to: t
        },
        ...null == n.waterfallId ? {} : {
          waterfall_id: n.waterfallId
        }
      })
    });
    if (a("preparation", i.status), !i.ok) throw Error(`Provider SSO preparation failed: ${i.status}`);
    let {
      action: o,
      fields: s
    } = function(e) {
      if (null == e || "object" != typeof e || Array.isArray(e)) throw Error("Provider SSO preparation returned an invalid response");
      let t = "action" in e ? e.action : null,
        n = "fields" in e ? e.fields : null;
      if (t !== new URL("/oidc/start", (0, u9.resolveNativeProviderSsoBrokerOrigin)(window.location.origin, u7.default.env.NEXT_PUBLIC_HATCH_PROVIDER_SSO_BROKER_ORIGIN ?? "https://agent.meta.ai")).toString() || null == n || "object" != typeof n || Array.isArray(n) || !Object.values(n).every(e => "string" == typeof e)) throw Error("Provider SSO preparation returned an invalid response");
      return {
        action: t,
        fields: n
      }
    }(await i.json()), l = new URL(o);
    if (l.origin === window.location.origin) {
      l.searchParams.set("response_mode", "json"), a("authorization", null);
      let t = await fetch(l.toString(), {
        method: "POST",
        redirect: "error",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded"
        },
        signal: n.signal,
        body: new URLSearchParams(s)
      });
      if (a("authorization", t.status), !t.ok) throw Error(`Provider SSO authorization failed: ${t.status}`);
      let r = function(e, t) {
        if (null == e || "object" != typeof e || Array.isArray(e)) throw Error("Provider SSO authorization returned an invalid response");
        let n = "authorization_url" in e ? e.authorization_url : null;
        if ("string" != typeof n) throw Error("Provider SSO authorization returned an invalid response");
        let r = new URL(n),
          a = "facebook" === t ? "facebook.com" : "instagram.com";
        if ("https:" !== r.protocol || "" !== r.port || "" !== r.username || "" !== r.password || r.pathname !== ("facebook" === t ? "/oidc/" : "/oauth/oidc/") || r.hostname !== `www.${a}` && r.hostname !== `www.19698.od.${a}`) throw Error("Provider SSO authorization returned an invalid response");
        return r.toString()
      }(await t.json(), e);
      if (n.signal?.aborted) throw n.signal.reason;
      return a("provider_navigation", null), window.location.assign(r), await dt()
    }
    if (n.signal?.aborted) throw n.signal.reason;
    a("provider_navigation", null);
    let c = document.createElement("form");
    for (let [e, t] of(c.method = "POST", c.action = o, c.enctype = "application/x-www-form-urlencoded", c.hidden = !0, Object.entries(s))) {
      let n = document.createElement("input");
      n.type = "hidden", n.name = e, n.value = t, c.appendChild(n)
    }
    return document.body.appendChild(c), c.submit(), c.remove(), await dt()
  }

  function dt() {
    return new Promise(() => {})
  }
  var dn = e.i(137870),
    dr = e.i(651782);

  function da(e) {
    return e.displayLabel ?? r.fbs._("your Meta Account", null, {
      hk: "25Cm1p"
    })
  }

  function di(e) {
    let t = e.loginSourceApp;
    if (null == t || "frl" === t) return e.linkedAccounts;
    let n = e.linkedAccounts.findIndex(e => e.platform === t);
    if (n <= 0) return e.linkedAccounts;
    let r = e.linkedAccounts[n];
    return null == r ? e.linkedAccounts : [r, ...e.linkedAccounts.slice(0, n), ...e.linkedAccounts.slice(n + 1)]
  }

  function ds(e) {
    var a;
    let i, o, s, l, c, u, d, f, h, p, _, g, v, y, b, x, w, k = (0, n.c)(49),
      {
        card: C,
        disabled: S,
        isPending: E,
        showDivider: T,
        isSingleRow: N,
        onSelect: A
      } = e,
      R = C.loginSourceApp ?? "unknown",
      I = String(C.hasMetaAi),
      O = String(C.oneTapLoginEligible);
    k[0] !== R || k[1] !== I || k[2] !== O ? (i = {
      eventName: aS.HatchClickEvent.LOGIN_AYMH_CARD_CLICK,
      actionTarget: "login_aymh_card",
      actionType: "click",
      metadata: {
        surface: "login",
        subsurface: "aymh_cards",
        login_source_app: R,
        has_meta_ai: I,
        one_tap_login_eligible: O
      }
    }, k[0] = R, k[1] = I, k[2] = O, k[3] = i) : i = k[3];
    let {
      ref: L,
      onClick: j
    } = (0, aE.useTrackedClickRef)(i);
    if (k[4] !== C) {
      let e;
      a = o = da(C), e = null == C.loginSourceApp || "frl" === C.loginSourceApp ? null : "facebook" === C.loginSourceApp ? r.fbs._("Facebook", null, {
        hk: "1xEQOW"
      }) : r.fbs._("Instagram", null, {
        hk: "1lmNoe"
      }), s = C.hasMetaAi ? null == e ? r.fbs._("Log in as {account name}", [r.fbs._param("account name", a)], {
        hk: "2IsMnb"
      }) : r.fbs._("Log in as {account name} using {provider}", [r.fbs._param("account name", a), r.fbs._param("provider", e)], {
        hk: "4DmzRd"
      }) : null == e ? r.fbs._("Join as {account name}", [r.fbs._param("account name", a)], {
        hk: "SQB7i"
      }) : r.fbs._("Join as {account name} using {provider}", [r.fbs._param("account name", a), r.fbs._param("provider", e)], {
        hk: "2bdf8n"
      }), k[4] = C, k[5] = o, k[6] = s
    } else o = k[5], s = k[6];
    let P = s;
    k[7] !== C ? (l = di(C), k[7] = C, k[8] = l) : l = k[8];
    let M = l;
    k[9] !== C ? (c = C.hasHatch ? "muse" : C.hasMetaAi ? "meta-ai" : null, k[9] = C, k[10] = c) : c = k[10];
    let D = c,
      H = (0, m.useId)();
    k[11] !== D ? (u = "muse" === D ? r.fbs._("Muse account", null, {
      hk: "1ktxWf"
    }) : "meta-ai" === D ? r.fbs._("Meta AI account", null, {
      hk: "vZ9gm"
    }) : null, k[11] = D, k[12] = u) : u = k[12];
    let F = u;
    k[13] === Symbol.for("react.memo_cache_sentinel") ? (d = r.fbs._("Meta Account", null, {
      hk: "4oqk2L"
    }), k[13] = d) : d = k[13];
    let U = d,
      G = null != C.loginSourceApp,
      B = S || !G,
      z = null == F ? void 0 : H,
      Y = void 0 !== N && N && "before:rounded-22 enabled:hover:before:bg-hatch-onboarding-fill isolate before:absolute before:-inset-2 before:-z-10 before:content-[''] enabled:hover:bg-transparent",
      W = T && "after:border-fill-divider after:absolute after:inset-x-2 after:bottom-0 after:border-b after:content-[''] hover:after:hidden focus-visible:after:hidden [&:has(+*:focus-within)]:after:hidden [&:has(+*:hover)]:after:hidden";
    return k[14] !== Y || k[15] !== W ? (f = (0, r3.cn)("focus-visible:outline-hatch-accent enabled:hover:bg-hatch-onboarding-fill enabled:active:bg-hatch-onboarding-fill rounded-14 relative flex w-full items-center gap-3 p-2 text-start outline-offset-[-2px] focus-visible:outline enabled:cursor-pointer disabled:cursor-not-allowed", Y, W), k[14] = Y, k[15] = W, k[16] = f) : f = k[16], k[17] !== C.loginSourceApp || k[18] !== j || k[19] !== A ? (h = () => {
      null != C.loginSourceApp && (j(), A(C.loginSourceApp))
    }, k[17] = C.loginSourceApp, k[18] = j, k[19] = A, k[20] = h) : h = k[20], k[21] !== o ? (p = (0, t.jsx)("span", {
      className: "text-body-status-medium text-text-primary block truncate",
      title: o,
      children: o
    }), k[21] = o, k[22] = p) : p = k[22], k[23] === Symbol.for("react.memo_cache_sentinel") ? (_ = (0, t.jsx)("span", {
      className: "text-footnote text-text-secondary block truncate",
      title: U,
      children: U
    }), k[23] = _) : _ = k[23], k[24] !== F || k[25] !== H ? (g = null != F && (0, t.jsx)("span", {
      id: H,
      className: "sr-only",
      children: F
    }), k[24] = F, k[25] = H, k[26] = g) : g = k[26], k[27] !== p || k[28] !== g ? (v = (0, t.jsxs)("span", {
      className: "min-w-0 flex-1",
      children: [p, _, g]
    }), k[27] = p, k[28] = g, k[29] = v) : v = k[29], k[30] !== M || k[31] !== o || k[32] !== D ? (y = (0, t.jsx)(dr.HatchNativeAuthAccountFacepile, {
      pieces: M,
      fallbackDisplayName: o,
      productBadge: D
    }), k[30] = M, k[31] = o, k[32] = D, k[33] = y) : y = k[33], k[34] !== E ? (b = E ? (0, t.jsxs)("span", {
      role: "status",
      className: "flex size-4 shrink-0 items-center justify-center",
      children: [(0, t.jsx)(iK.HatchSpinner, {
        size: "medium",
        color: "secondary",
        isDecorative: !0
      }), (0, t.jsx)("span", {
        className: "sr-only",
        children: r.fbs._("Logging in", null, {
          hk: "11H5lw"
        })
      })]
    }) : (0, t.jsx)(ax.HatchIcon, {
      icon: iR.default,
      size: 16,
      iconSize: 16,
      className: "text-icon-quaternary shrink-0"
    }), k[34] = E, k[35] = b) : b = k[35], k[36] !== y || k[37] !== b ? (x = (0, t.jsxs)("span", {
      className: "flex shrink-0 items-center gap-2",
      children: [y, b]
    }), k[36] = y, k[37] = b, k[38] = x) : x = k[38], k[39] !== P || k[40] !== E || k[41] !== L || k[42] !== B || k[43] !== z || k[44] !== f || k[45] !== h || k[46] !== v || k[47] !== x ? (w = (0, t.jsxs)("button", {
      ref: L,
      type: "button",
      disabled: B,
      "aria-busy": E,
      "aria-label": P,
      "aria-describedby": z,
      className: f,
      onClick: h,
      children: [v, x]
    }), k[39] = P, k[40] = E, k[41] = L, k[42] = B, k[43] = z, k[44] = f, k[45] = h, k[46] = v, k[47] = x, k[48] = w) : w = k[48], w
  }

  function dl(e) {
    return "login" === e || "register" === e ? e : null
  }
  var dc = e.i(533468);
  let du = (0, r4.createClientLogger)("nativeLinkingHandback");

  function dd() {
    window.location.replace("/ig-linking-unavailable")
  }
  async function df(e, t) {
    try {
      let n = await fetch("/api/auth/linking/consume", {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            frl_access_token: e,
            method: t
          }),
          cache: "no-store"
        }),
        r = await n.json();
      if (n.ok && "consumed" === r.outcome && "string" == typeof r.next_url) return void window.location.replace(r.next_url);
      du.retainForBugReport("warn", "Linking handback was refused")
    } catch (e) {
      du.error({
        error: e instanceof Error ? e : Error(String(e)),
        tags: (0, ay.hatchSentryTags)(ay.HATCH_SENTRY_SURFACES.AUTH, {
          reason: "handback_request_failed"
        })
      }, "Linking handback could not be completed")
    }
    dd()
  }
  var dh = e.i(786983);
  let dp = ["hatch_aymh", "aymh"],
    dm = (0, r4.createClientLogger)("aymhRedirectCycle"),
    d_ = {
      accounts: [],
      cards: [],
      supersededSavedAccountIds: [],
      tos: null
    };

  function dg(e) {
    return null != e && "object" == typeof e && !Array.isArray(e)
  }

  function dv(e) {
    if (!dg(e)) return d_;
    let t = e => "facebook" === e || "instagram" === e || "frl" === e ? e : null,
      n = e => "string" == typeof e && e.length > 0 ? e : null;
    return {
      accounts: Array.isArray(e.accounts) ? e.accounts.slice(0, 20).flatMap(e => dg(e) ? [{
        sourceApp: t(e.source_app),
        displayName: n(e.display_name),
        profilePictureUrl: n(e.profile_pic_url),
        email: n(e.email)
      }] : []) : [],
      cards: Array.isArray(e.meta_accounts) ? e.meta_accounts.slice(0, 20).flatMap(e => dg(e) ? [{
        displayLabel: n(e.display_label),
        loginSourceApp: t(e.login_source_app),
        linkedAccounts: Array.isArray(e.linked_accounts) ? e.linked_accounts.slice(0, 10).flatMap(e => dg(e) ? [{
          platform: n(e.platform),
          profilePictureUrl: n(e.profile_pic_url),
          displayName: n(e.display_name)
        }] : []) : [],
        hasHatch: !0 === e.has_hatch,
        hasMetaAi: !0 === e.has_meta_ai,
        oneTapLoginEligible: !0 === e.one_tap_login_eligible,
        migration: (0, ui.nativeAuthMigrationState)(e.is_f3)
      }] : []) : [],
      supersededSavedAccountIds: Array.isArray(e.superseded_saved_account_ids) ? e.superseded_saved_account_ids.slice(0, 20).filter(e => "string" == typeof e && e.length > 0 && e.length <= 3e3) : [],
      tos: (0, ui.parseNativeAuthTos)(e.tos)
    }
  }

  function dy() {
    let e = function(e) {
      try {
        return sessionStorage.getItem(e)
      } catch {
        return null
      }
    }(dh.AYMH_CARDS_STORAGE_KEY);
    if (null == e) return null;
    try {
      let t = JSON.parse(e);
      if (!dg(t) || 2 !== t.version || "number" != typeof t.storedAt || Date.now() - t.storedAt >= dh.AYMH_CARDS_CACHE_TTL_MS) return null;
      return dv(t.cards)
    } catch {
      return null
    }
  }
  async function db(e, t) {
    try {
      let a = await fetch("/api/auth/native/aymh-cards", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "X-Hatch-CSRF-Token": t
        },
        body: JSON.stringify({
          handle: e
        }),
        signal: AbortSignal.timeout(8e3),
        cache: "no-store"
      });
      if (!a.ok) return d_;
      let i = dv(await a.json());
      var n = dh.AYMH_CARDS_STORAGE_KEY,
        r = JSON.stringify({
          version: 2,
          storedAt: Date.now(),
          cards: {
            accounts: i.accounts.map(e => ({
              source_app: e.sourceApp,
              display_name: e.displayName,
              profile_pic_url: e.profilePictureUrl,
              email: e.email
            })),
            meta_accounts: i.cards.map(e => ({
              display_label: e.displayLabel,
              login_source_app: e.loginSourceApp,
              linked_accounts: e.linkedAccounts.map(e => ({
                platform: e.platform,
                profile_pic_url: e.profilePictureUrl,
                display_name: e.displayName
              })),
              has_hatch: e.hasHatch,
              has_meta_ai: e.hasMetaAi,
              one_tap_login_eligible: e.oneTapLoginEligible,
              is_f3: "f3" === e.migration
            })),
            superseded_saved_account_ids: i.supersededSavedAccountIds,
            tos: null == i.tos ? null : (0, ui.serializeNativeAuthTos)(i.tos)
          }
        });
      try {
        sessionStorage.setItem(n, r)
      } catch {}
      return i
    } catch (e) {
      return dm.retainForBugReport("warn", "Unable to redeem the AYMH handle"), d_
    }
  }
  let dx = "hatch:auth:resume_provider_waterfall_id",
    dw = "hatch:auth:resume_provider_purpose",
    dk = "hatch:auth:resume_provider_entry_point";

  function dC() {
    try {
      sessionStorage.removeItem(dx), sessionStorage.removeItem(dw), sessionStorage.removeItem(dk)
    } catch {}
  }
  let dS = "/api/auth/native";

  function dE(e) {
    let r, a, i, o = (0, n.c)(9),
      {
        children: s,
        id: l,
        className: c,
        providerSsoFailure: u
      } = e;
    o[0] !== u ? (r = {
      eventName: aV.HatchImpressionEvent.LOGIN_PROVIDER_SSO_ERROR_IMPRESSION,
      actionTarget: "login_provider_sso_error",
      metadata: {
        surface: "login",
        subsurface: "provider_sso",
        ...null == u ? {} : {
          provider: u.provider,
          stage: u.stage,
          completion_id: u.completionId,
          waterfall_id: u.waterfallId,
          http_status: u.httpStatus,
          purpose: u.purpose ?? "unknown"
        }
      }
    }, o[0] = u, o[1] = r) : r = o[1];
    let d = null != u;
    o[2] !== d ? (a = {
      threshold: "1px",
      enabled: d
    }, o[2] = d, o[3] = a) : a = o[3];
    let {
      ref: f
    } = (0, aE.useTrackedImpressionRef)(r, a), h = null == u ? null : f;
    return o[4] !== s || o[5] !== c || o[6] !== l || o[7] !== h ? (i = (0, t.jsx)("p", {
      ref: h,
      id: l,
      role: "alert",
      className: c,
      children: s
    }), o[4] = s, o[5] = c, o[6] = l, o[7] = h, o[8] = i) : i = o[8], i
  }

  function dT() {
    let e;
    try {
      e = new URL(window.location.href)
    } catch {
      return null
    }
    return (0, dc.readResumeProviderSsoMarkersFromParams)(e.searchParams)
  }
  let dN = (0, r4.createClientLogger)("HatchLoginRoute");

  function dA() {
    (0, ug.reportMarketingSignupCompleted)(), (0, uv.reportMetaPixelCompleteRegistration)()
  }
  let dR = (0, m.forwardRef)(function(e, a) {
    let i, o, s, l, c, u, d, f = (0, n.c)(21);
    f[0] !== e ? ({
      analyticsSubsurface: i,
      ...o
    } = e, f[0] = e, f[1] = i, f[2] = o) : (i = f[1], o = f[2]);
    let [h, p] = (0, m.useState)(!1), _ = h ? "hide" : "show";
    f[3] !== i || f[4] !== _ ? (s = {
      eventName: aS.HatchClickEvent.LOGIN_PASSWORD_VISIBILITY_TOGGLE_CLICK,
      actionTarget: "login_password_visibility_toggle",
      actionType: "click",
      metadata: {
        surface: "login",
        subsurface: i,
        visibility_action: _
      }
    }, f[3] = i, f[4] = _, f[5] = s) : s = f[5];
    let {
      ref: g,
      onClick: v
    } = (0, aE.useTrackedClickRef)(s), y = h ? "text" : "password", b = h ? u_.default : um.default;
    return f[6] !== h ? (l = h ? r.fbs._("Hide password", null, {
      hk: "3BWlap"
    }) : r.fbs._("Show password", null, {
      hk: "qJ4X"
    }), f[6] = h, f[7] = l) : l = f[7], f[8] !== v ? (c = () => {
      v(), p(d9)
    }, f[8] = v, f[9] = c) : c = f[9], f[10] !== h || f[11] !== b || f[12] !== l || f[13] !== c || f[14] !== g ? (u = (0, t.jsx)(iB.IconButton, {
      ref: g,
      type: "button",
      variant: "borderless",
      size: "24",
      icon: b,
      label: l,
      "aria-pressed": h,
      onClick: c
    }), f[10] = h, f[11] = b, f[12] = l, f[13] = c, f[14] = g, f[15] = u) : u = f[15], f[16] !== o || f[17] !== a || f[18] !== y || f[19] !== u ? (d = (0, t.jsx)(iY.InputField, {
      ref: a,
      ...o,
      type: y,
      endIcon: u
    }), f[16] = o, f[17] = a, f[18] = y, f[19] = u, f[20] = d) : d = f[20], d
  });

  function dI(e) {
    return null != e && "object" == typeof e && !Array.isArray(e)
  }

  function dO(e) {
    if (!dI(e.auth_meta_session)) return null;
    let t = e.auth_meta_session.frl_account_id;
    return "string" == typeof t && t.length > 0 ? t : null
  }
  class dL extends Error {}
  async function dj(e) {
    let t = await e.json();
    if (!dI(t)) throw Error("Authentication returned an invalid response");
    return t
  }
  async function dP(e) {
    try {
      let t = await dj(e);
      return {
        type: "string" == typeof t.type ? t.type : "authenticationFailed",
        title: "string" == typeof t.title && "" !== t.title.trim() ? t.title : null,
        detail: "string" == typeof t.detail ? t.detail : "Authentication failed.",
        checkpointUrl: "string" == typeof t.checkpoint_url ? t.checkpoint_url : null
      }
    } catch {
      return {
        type: "authenticationFailed",
        title: null,
        detail: "Authentication failed.",
        checkpointUrl: null
      }
    }
  }
  async function dM(e) {
    if (403 !== e.status) return !1;
    let t = await dP(e.clone());
    return "checkpointRequired" === t.type && ((0, uC.openCheckpointOrFallback)(t.checkpointUrl), !0)
  }

  function dD(e) {
    let t = e?.trim();
    return null == t || 0 === t.length ? null : t.includes("@") ? uS.CaaInferredContactPointType.EMAIL : uS.CaaInferredContactPointType.PHONE
  }

  function dH(e) {
    return Array.isArray(e.saved_accounts) ? e.saved_accounts.slice(0, 20).flatMap(e => {
      if (!dI(e)) return [];
      let t = e.account_cuid,
        n = "string" == typeof e.name ? e.name : "",
        r = "string" == typeof e.contact ? e.contact : "",
        a = "string" == typeof e.display_name ? e.display_name : n,
        i = "string" == typeof e.display_label && e.display_label.trim().length > 0 ? e.display_label : r.trim() || a.trim();
      if ("string" != typeof t || 0 === i.length) return [];
      let o = "string" == typeof e.profile_pic_url ? e.profile_pic_url : null,
        s = Array.isArray(e.profile_pic_urls) ? e.profile_pic_urls.filter(e => "string" == typeof e).slice(0, 5) : null == o ? [] : [o],
        l = Array.isArray(e.linked_accounts) ? e.linked_accounts.slice(0, 10).flatMap(e => dI(e) ? [{
          platform: "string" == typeof e.platform ? e.platform : null,
          profilePictureUrl: "string" == typeof e.profile_pic_url ? e.profile_pic_url : null
        }] : []) : void 0;
      return [{
        accountCuid: t,
        savedAccountId: "string" == typeof e.saved_account_id && e.saved_account_id.length > 0 ? e.saved_account_id : null,
        maskedContact: "string" == typeof e.masked_contact && e.masked_contact.length > 0 ? e.masked_contact : null,
        displayLabel: i,
        displayName: a,
        profilePicUrls: s,
        ...null == l ? {} : {
          linkedAccounts: l
        }
      }]
    }) : []
  }

  function dF(e) {
    return Array.isArray(e.two_factor_methods) ? e.two_factor_methods.slice(0, 20).flatMap(e => {
      var t;
      if (!dI(e)) return [];
      let n = "SMS" === (t = e.method_type) || "TOTP" === t || "RECOVERY_CODES" === t || "ADMIN_CODES" === t ? t : null,
        {
          method_id: r,
          label: a,
          code_length: i
        } = e;
      return null == n || "string" != typeof r || 0 === r.length || "string" != typeof a || 0 === a.length || "number" != typeof i || !Number.isSafeInteger(i) || i <= 0 || i > 16 ? [] : [{
        methodId: r,
        methodType: n,
        label: a,
        codeLength: i
      }]
    }) : []
  }

  function dU(e, t) {
    return "RECOVERY_CODES" === t ? e.replace(/\s/g, "") : e
  }

  function dG(e) {
    return Array.isArray(e) ? e.slice(0, 10).flatMap(e => dI(e) && "string" == typeof e.display_name ? [{
      platform: "string" == typeof e.platform ? e.platform : null,
      displayName: e.display_name,
      profilePictureUrl: "string" == typeof e.profile_pic_url ? e.profile_pic_url : null
    }] : []) : []
  }

  function dB() {
    let e, a, i, o, s = (0, n.c)(4);
    return s[0] === Symbol.for("react.memo_cache_sentinel") ? (e = r.fbs._("Loading account choice", null, {
      hk: "2kOkfl"
    }), s[0] = e) : e = s[0], s[1] === Symbol.for("react.memo_cache_sentinel") ? (a = (0, t.jsxs)("span", {
      className: "flex min-w-0 flex-1 flex-col gap-2",
      children: [(0, t.jsx)(iV.Skeleton, {
        className: "h-4 w-40 max-w-full"
      }), (0, t.jsx)(iV.Skeleton, {
        className: "h-3 w-24"
      })]
    }), s[1] = a) : a = s[1], s[2] === Symbol.for("react.memo_cache_sentinel") ? (i = (0, t.jsxs)("div", {
      className: "mt-5 flex flex-col items-center gap-2",
      children: [(0, t.jsxs)("div", {
        className: "bg-fill-secondary-elevated rounded-20 flex min-h-16 w-full items-center gap-3 px-4 py-3",
        children: [a, (0, t.jsxs)("span", {
          className: "flex items-center",
          children: [(0, t.jsx)(iV.Skeleton, {
            className: "size-8 rounded-full"
          }), (0, t.jsx)(iV.Skeleton, {
            className: "-ms-2 size-8 rounded-full"
          })]
        })]
      }), (0, t.jsx)(iV.Skeleton, {
        className: "h-11 w-40"
      })]
    }), s[2] = i) : i = s[2], s[3] === Symbol.for("react.memo_cache_sentinel") ? (o = (0, t.jsx)(iX.LoadingState, {
      name: "auth_account_choice",
      className: "w-full",
      children: (0, t.jsx)("div", {
        role: "status",
        "aria-busy": "true",
        "aria-label": e,
        className: "flex min-h-[420px] w-full flex-1 flex-col motion-reduce:[&_*]:!animate-none",
        children: (0, t.jsxs)("div", {
          "aria-hidden": "true",
          className: "flex w-full flex-1 flex-col",
          children: [i, (0, t.jsxs)("div", {
            className: "mt-auto flex flex-col gap-2 pt-8",
            children: [(0, t.jsx)(iV.Skeleton, {
              className: "h-3 w-full"
            }), (0, t.jsx)(iV.Skeleton, {
              className: "h-3 w-5/6"
            })]
          })]
        })
      })
    }), s[3] = o) : o = s[3], o
  }

  function dz(e) {
    let a, i, o, s, l, c, u, d, f, h, p, _, g, v, y, b, x, w = (0, n.c)(36),
      {
        actionError: k,
        isSubmitting: C,
        onEscape: S,
        onRetry: E
      } = e,
      [T, N] = (0, m.useState)(!1),
      A = (0, m.useRef)(!1),
      R = (0, m.useRef)(!0),
      I = (0, m.useRef)(!1);
    w[0] === Symbol.for("react.memo_cache_sentinel") ? (a = () => (R.current = !0, () => {
      R.current = !1
    }), i = [], w[0] = a, w[1] = i) : (a = w[0], i = w[1]), (0, m.useEffect)(a, i), w[2] === Symbol.for("react.memo_cache_sentinel") ? (o = {
      eventName: aV.HatchImpressionEvent.ERROR_CONTENT_IMPRESSION,
      actionTarget: "login_ntp_chunk_error",
      metadata: {
        surface: "login",
        subsurface: "ntp_offer"
      }
    }, s = {
      threshold: "50%"
    }, w[2] = o, w[3] = s) : (o = w[2], s = w[3]);
    let {
      ref: O
    } = (0, aE.useTrackedImpressionRef)(o, s);
    w[4] === Symbol.for("react.memo_cache_sentinel") ? (l = {
      eventName: aS.HatchClickEvent.ERROR_TRY_AGAIN_CLICK,
      actionTarget: "login_ntp_chunk_retry",
      actionType: "click",
      metadata: {
        surface: "login",
        subsurface: "ntp_offer"
      }
    }, w[4] = l) : l = w[4];
    let {
      ref: L,
      onClick: j
    } = (0, aE.useTrackedClickRef)(l);
    w[5] === Symbol.for("react.memo_cache_sentinel") ? (c = {
      eventName: aS.HatchClickEvent.LOGIN_NTP_UPSELL_USE_ANOTHER_CLICK,
      actionTarget: "login_ntp_chunk_error_use_another",
      actionType: "click",
      metadata: {
        surface: "login",
        subsurface: "ntp_offer_load_error"
      }
    }, w[5] = c) : c = w[5];
    let {
      ref: P,
      onClick: M
    } = (0, aE.useTrackedClickRef)(c);
    w[6] === Symbol.for("react.memo_cache_sentinel") ? (u = (0, t.jsx)("h2", {
      className: "text-title-3-emphasized text-text-primary",
      children: r.fbs._("We couldn't load this step", null, {
        hk: "235Aiz"
      })
    }), w[6] = u) : u = w[6], w[7] !== k ? (d = k ?? r.fbs._("Try again, or create a new account to continue.", null, {
      hk: "14SrVl"
    }), w[7] = k, w[8] = d) : d = w[8], w[9] !== d ? (f = (0, t.jsx)("p", {
      className: "text-footnote text-text-primary mt-2 max-w-sm",
      children: d
    }), w[9] = d, w[10] = f) : f = w[10], w[11] !== T ? (h = T ? r.fbs._("Loading…", null, {
      hk: "1emW1n"
    }) : r.fbs._("Try again", null, {
      hk: "4EcUIc"
    }), w[11] = T, w[12] = h) : h = w[12];
    let D = T || C;
    return w[13] !== j || w[14] !== E ? (p = () => {
      A.current || (A.current = !0, j(), I.current = !1, N(!0), oc().then(() => {
        if (R.current) {
          if (N(!1), !I.current) return void E();
          A.current = !1
        }
      }).catch(e => {
        dN.retainForBugReport("warn", "Native authentication signup step retry failed"), R.current && (A.current = !1, N(!1))
      }))
    }, w[13] = j, w[14] = E, w[15] = p) : p = w[15], w[16] !== L || w[17] !== h || w[18] !== D || w[19] !== p ? (_ = (0, t.jsx)(aw.Button, {
      ref: L,
      type: "button",
      label: h,
      disabled: D,
      fullWidth: !0,
      size: "36",
      variant: "primary",
      onClick: p
    }), w[16] = L, w[17] = h, w[18] = D, w[19] = p, w[20] = _) : _ = w[20], w[21] === Symbol.for("react.memo_cache_sentinel") ? (g = r.fbs._("Create new account", null, {
      hk: "2efvEX"
    }), w[21] = g) : g = w[21], w[22] !== M || w[23] !== S ? (v = () => {
      I.current = !0, M(), S()
    }, w[22] = M, w[23] = S, w[24] = v) : v = w[24], w[25] !== P || w[26] !== C || w[27] !== v ? (y = (0, t.jsx)(aw.Button, {
      ref: P,
      type: "button",
      label: g,
      disabled: C,
      fullWidth: !0,
      size: "36",
      variant: "borderless",
      onClick: v
    }), w[25] = P, w[26] = C, w[27] = v, w[28] = y) : y = w[28], w[29] !== _ || w[30] !== y ? (b = (0, t.jsxs)("div", {
      className: "mt-5 flex w-full flex-col gap-2",
      children: [_, y]
    }), w[29] = _, w[30] = y, w[31] = b) : b = w[31], w[32] !== O || w[33] !== b || w[34] !== f ? (x = (0, t.jsxs)("div", {
      ref: O,
      role: "alert",
      className: "flex min-h-[320px] w-full flex-col items-center justify-center text-center",
      children: [u, f, b]
    }), w[32] = O, w[33] = b, w[34] = f, w[35] = x) : x = w[35], x
  }

  function dY(e) {
    let t = e.password_encryption;
    return dI(t) && "number" == typeof t.key_id && Number.isSafeInteger(t.key_id) && !(t.key_id < 0) && "string" == typeof t.public_key && 0 !== t.public_key.length ? {
      keyId: t.key_id,
      publicKey: t.public_key
    } : null
  }
  let dW = "focus-visible:outline-hatch-accent enabled:group-hover:bg-hatch-onboarding-fill enabled:active:bg-hatch-onboarding-fill rounded-14 flex h-full min-h-14 min-w-0 flex-1 items-center gap-3 self-stretch p-2 text-start outline-offset-[-2px] focus-visible:outline enabled:cursor-pointer",
    dq = (0, r3.cn)("after:border-fill-divider after:absolute after:inset-x-2 after:bottom-0 after:border-b after:content-['']", "hover:after:hidden focus-within:after:hidden", "[&:has(+*:hover)]:after:hidden [&:has(+*:focus-within)]:after:hidden");

  function dV(e) {
    let a, i, o, s, l, c = (0, n.c)(11),
      {
        disabled: u,
        hiddenCount: d,
        onSelect: f
      } = e,
      h = String(d);
    c[0] !== h ? (a = {
      eventName: aS.HatchClickEvent.LOGIN_SEE_MORE_ACCOUNTS_CLICK,
      actionTarget: "login_see_more_accounts",
      actionType: "click",
      metadata: {
        surface: "login",
        subsurface: "accounts",
        hidden_count: h
      }
    }, c[0] = h, c[1] = a) : a = c[1];
    let {
      ref: p,
      onClick: m
    } = (0, aE.useTrackedClickRef)(a);
    return c[2] === Symbol.for("react.memo_cache_sentinel") ? (i = (0, r3.cn)(dW, "min-h-12"), c[2] = i) : i = c[2], c[3] !== m || c[4] !== f ? (o = () => {
      m(), f()
    }, c[3] = m, c[4] = f, c[5] = o) : o = c[5], c[6] === Symbol.for("react.memo_cache_sentinel") ? (s = (0, t.jsx)("span", {
      className: "text-subheadline text-hatch-accent min-w-0 flex-1 truncate text-[15px]",
      children: r.fbs._("See all", null, {
        hk: "1jAFod"
      })
    }), c[6] = s) : s = c[6], c[7] !== u || c[8] !== p || c[9] !== o ? (l = (0, t.jsx)("div", {
      className: "group relative flex items-center",
      children: (0, t.jsx)("button", {
        ref: p,
        type: "button",
        className: i,
        disabled: u,
        onClick: o,
        children: s
      })
    }), c[7] = u, c[8] = p, c[9] = o, c[10] = l) : l = c[10], l
  }

  function dK(e) {
    let a, i, o, s, l, c, u, d, f, h, p, _, g, v, y, b, x, w, k, C, S, E, T, N, A, R, I, O, L, j = (0, n.c)(69),
      {
        account: P,
        disabled: M,
        isPending: D,
        showDivider: H,
        isSingleRow: F,
        onLogin: U,
        onRemove: G
      } = e,
      [B, z] = (0, m.useState)(!1),
      [Y, W] = (0, m.useState)(!1);
    j[0] === Symbol.for("react.memo_cache_sentinel") ? (a = {
      eventName: aS.HatchClickEvent.LOGIN_SAVED_ACCOUNT_CLICK,
      actionTarget: "login_saved_account",
      actionType: "click",
      metadata: {
        surface: "login",
        subsurface: "accounts"
      }
    }, j[0] = a) : a = j[0];
    let {
      ref: q,
      onClick: V
    } = (0, aE.useTrackedClickRef)(a);
    j[1] === Symbol.for("react.memo_cache_sentinel") ? (i = {
      eventName: aS.HatchClickEvent.LOGIN_SAVED_ACCOUNT_MENU_CLICK,
      actionTarget: "login_saved_account_menu",
      actionType: "click",
      metadata: {
        surface: "login",
        subsurface: "accounts"
      }
    }, j[1] = i) : i = j[1];
    let {
      ref: K,
      onClick: X
    } = (0, aE.useTrackedClickRef)(i);
    j[2] === Symbol.for("react.memo_cache_sentinel") ? (o = {
      eventName: aS.HatchClickEvent.LOGIN_REMOVE_SAVED_ACCOUNT_CLICK,
      actionTarget: "login_remove_saved_account",
      actionType: "click",
      metadata: {
        surface: "login",
        subsurface: "accounts"
      }
    }, j[2] = o) : o = j[2];
    let {
      onClick: $
    } = (0, aE.useTrackedClickRef)(o);
    j[3] === Symbol.for("react.memo_cache_sentinel") ? (s = r.fbs._("Meta Account", null, {
      hk: "4oqk2L"
    }), j[3] = s) : s = j[3];
    let Q = s;
    if (j[4] !== P.displayName || j[5] !== P.linkedAccounts || j[6] !== P.profilePicUrls) {
      let e = P.linkedAccounts?.filter(dQ) ?? [];
      l = e.length > 0 ? e.map(e => ({
        ...e,
        displayName: P.displayName
      })) : P.profilePicUrls.map(e => ({
        platform: null,
        profilePictureUrl: e,
        displayName: P.displayName
      })), j[4] = P.displayName, j[5] = P.linkedAccounts, j[6] = P.profilePicUrls, j[7] = l
    } else l = j[7];
    let Z = l;
    j[8] === Symbol.for("react.memo_cache_sentinel") ? (c = r.fbs._("Remove this saved account", null, {
      hk: "3Jz3fH"
    }), j[8] = c) : c = j[8];
    let J = c,
      ee = F && "before:rounded-22 hover:before:bg-hatch-onboarding-fill focus-within:before:bg-hatch-onboarding-fill before:absolute before:-inset-2 before:-z-10 before:content-['']",
      et = H && dq;
    j[9] !== ee || j[10] !== et ? (u = (0, r3.cn)("group relative isolate flex items-center", ee, et), j[9] = ee, j[10] = et, j[11] = u) : u = j[11];
    let en = F && "group-hover:bg-transparent";
    j[12] !== en ? (d = (0, r3.cn)(dW, en), j[12] = en, j[13] = d) : d = j[13], j[14] !== V || j[15] !== U ? (f = () => {
      V(), U()
    }, j[14] = V, j[15] = U, j[16] = f) : f = j[16], j[17] !== P.displayLabel ? (h = (0, t.jsx)("span", {
      className: "text-body-status-medium text-text-primary block truncate",
      title: P.displayLabel,
      children: P.displayLabel
    }), j[17] = P.displayLabel, j[18] = h) : h = j[18], j[19] === Symbol.for("react.memo_cache_sentinel") ? (p = (0, t.jsx)("span", {
      className: "text-footnote text-text-secondary block truncate",
      title: Q,
      children: Q
    }), j[19] = p) : p = j[19], j[20] !== h ? (_ = (0, t.jsxs)("span", {
      className: "flex min-w-0 flex-1 flex-col gap-0.5",
      children: [h, p]
    }), j[20] = h, j[21] = _) : _ = j[21];
    let er = P.displayName || P.displayLabel;
    j[22] !== Z || j[23] !== er ? (g = (0, t.jsx)(dr.HatchNativeAuthAccountFacepile, {
      pieces: Z,
      fallbackDisplayName: er,
      productBadge: "muse"
    }), j[22] = Z, j[23] = er, j[24] = g) : g = j[24], j[25] !== D ? (v = D ? (0, t.jsxs)("span", {
      role: "status",
      className: "flex size-4 shrink-0 items-center justify-center",
      children: [(0, t.jsx)(iK.HatchSpinner, {
        size: "medium",
        color: "secondary",
        isDecorative: !0
      }), (0, t.jsx)("span", {
        className: "sr-only",
        children: r.fbs._("Logging in", null, {
          hk: "3QWegb"
        })
      })]
    }) : (0, t.jsx)(ax.HatchIcon, {
      icon: iR.default,
      size: 16,
      iconSize: 16,
      className: (0, r3.cn)("text-icon-quaternary shrink-0", "group-focus-within:invisible group-hover:invisible")
    }), j[25] = D, j[26] = v) : v = j[26], j[27] !== g || j[28] !== v ? (y = (0, t.jsxs)("span", {
      className: "flex shrink-0 items-center gap-2",
      children: [g, v]
    }), j[27] = g, j[28] = v, j[29] = y) : y = j[29], j[30] !== q || j[31] !== M || j[32] !== D || j[33] !== d || j[34] !== f || j[35] !== _ || j[36] !== y ? (b = (0, t.jsxs)("button", {
      ref: q,
      type: "button",
      className: d,
      disabled: M,
      "aria-busy": D,
      onClick: f,
      children: [_, y]
    }), j[30] = q, j[31] = M, j[32] = D, j[33] = d, j[34] = f, j[35] = _, j[36] = y, j[37] = b) : b = j[37], j[38] !== Y ? (x = (0, r3.cn)("absolute inset-y-0 end-0 flex items-center", Y ? "opacity-100" : ["opacity-0 group-focus-within:opacity-100 group-hover:opacity-100", "pointer-events-none group-focus-within:pointer-events-auto group-hover:pointer-events-auto", "touch:pointer-events-auto touch:opacity-100"]), j[38] = Y, j[39] = x) : x = j[39], j[40] === Symbol.for("react.memo_cache_sentinel") ? (w = () => z(!0), k = () => z(!1), j[40] = w, j[41] = k) : (w = j[40], k = j[41]);
    let ea = B ? "text-icon-primary" : "text-icon-tertiary";
    return j[42] !== X ? (C = () => {
      X(), W(!0)
    }, j[42] = X, j[43] = C) : C = j[43], j[44] !== M || j[45] !== K || j[46] !== ea || j[47] !== C ? (S = (0, t.jsx)(iB.IconButton, {
      ref: K,
      type: "button",
      icon: oF.default,
      label: J,
      variant: "borderless",
      size: "32",
      className: "enabled:hover:bg-transparent enabled:active:bg-transparent",
      iconClassName: ea,
      disabled: M,
      onClick: C
    }), j[44] = M, j[45] = K, j[46] = ea, j[47] = C, j[48] = S) : S = j[48], j[49] !== x || j[50] !== S ? (E = (0, t.jsx)("div", {
      className: x,
      onMouseEnter: w,
      onMouseLeave: k,
      onClick: d$,
      onPointerDown: dX,
      children: S
    }), j[49] = x, j[50] = S, j[51] = E) : E = j[51], j[52] === Symbol.for("react.memo_cache_sentinel") ? (T = r.fbs._("Remove this account?", null, {
      hk: "3NuJ4y"
    }), j[52] = T) : T = j[52], j[53] !== P.displayLabel ? (N = r.fbs._("{account name} will no longer appear on this device. You can log in with it again at any time.", [r.fbs._param("account name", P.displayLabel)], {
      hk: "28M7aq"
    }), j[53] = P.displayLabel, j[54] = N) : N = j[54], j[55] === Symbol.for("react.memo_cache_sentinel") ? (A = () => {
      z(!1), W(!1)
    }, j[55] = A) : A = j[55], j[56] !== $ || j[57] !== G ? (R = () => {
      z(!1), W(!1), $(), G()
    }, j[56] = $, j[57] = G, j[58] = R) : R = j[58], j[59] === Symbol.for("react.memo_cache_sentinel") ? (I = {
      label: r.fbs._("Remove", null, {
        hk: "1L0CLT"
      }),
      variant: "primary"
    }, j[59] = I) : I = j[59], j[60] !== Y || j[61] !== N || j[62] !== R ? (O = (0, t.jsx)(dn.HatchConfirmationDialog, {
      isOpen: Y,
      title: T,
      description: N,
      onCancel: A,
      onConfirm: R,
      showCloseButton: !0,
      primaryButtonProps: I
    }), j[60] = Y, j[61] = N, j[62] = R, j[63] = O) : O = j[63], j[64] !== b || j[65] !== E || j[66] !== O || j[67] !== u ? (L = (0, t.jsxs)("div", {
      className: u,
      children: [b, E, O]
    }), j[64] = b, j[65] = E, j[66] = O, j[67] = u, j[68] = L) : L = j[68], L
  }

  function dX(e) {
    return e.stopPropagation()
  }

  function d$(e) {
    return e.stopPropagation()
  }

  function dQ(e) {
    return null != e.profilePictureUrl
  }

  function dZ(e) {
    let a, i, o, s, l, c, u, d, f, h, p, m, _ = (0, n.c)(30),
      {
        account: g,
        disabled: v,
        isPending: y,
        showDivider: b,
        onSelect: x
      } = e;
    _[0] === Symbol.for("react.memo_cache_sentinel") ? (a = {
      eventName: aS.HatchClickEvent.LOGIN_ACCOUNT_SELECTION_ROW_CLICK,
      actionTarget: "account_selection_row",
      actionType: "click",
      metadata: {
        surface: "login",
        subsurface: "account_selection"
      }
    }, _[0] = a) : a = _[0];
    let {
      ref: w,
      onClick: k
    } = (0, aE.useTrackedClickRef)(a), C = g.profiles[0]?.displayName ?? "";
    _[1] === Symbol.for("react.memo_cache_sentinel") ? (i = r.fbs._("Meta Account", null, {
      hk: "4oqk2L"
    }), _[1] = i) : i = _[1];
    let S = i,
      E = b && dq;
    return _[2] !== E ? (o = (0, r3.cn)("group relative flex items-center", E), _[2] = E, _[3] = o) : o = _[3], _[4] !== k || _[5] !== x ? (s = () => {
      k(), x()
    }, _[4] = k, _[5] = x, _[6] = s) : s = _[6], _[7] !== C ? (l = (0, t.jsx)("span", {
      className: "text-body-status-medium text-text-primary block truncate",
      title: C,
      children: C
    }), _[7] = C, _[8] = l) : l = _[8], _[9] === Symbol.for("react.memo_cache_sentinel") ? (c = (0, t.jsx)("span", {
      className: "text-footnote text-text-secondary block truncate",
      title: S,
      children: S
    }), _[9] = c) : c = _[9], _[10] !== l ? (u = (0, t.jsxs)("span", {
      className: "min-w-0 flex-1",
      children: [l, c]
    }), _[10] = l, _[11] = u) : u = _[11], _[12] !== g.profiles || _[13] !== C ? (d = (0, t.jsx)(dr.HatchNativeAuthAccountFacepile, {
      pieces: g.profiles,
      fallbackDisplayName: C,
      productBadge: "meta-ai"
    }), _[12] = g.profiles, _[13] = C, _[14] = d) : d = _[14], _[15] !== y ? (f = y ? (0, t.jsxs)("span", {
      role: "status",
      className: "flex size-4 shrink-0 items-center justify-center",
      children: [(0, t.jsx)(iK.HatchSpinner, {
        size: "medium",
        color: "secondary",
        isDecorative: !0
      }), (0, t.jsx)("span", {
        className: "sr-only",
        children: r.fbs._("Logging in", null, {
          hk: "1X6fPl"
        })
      })]
    }) : (0, t.jsx)(ax.HatchIcon, {
      icon: iR.default,
      size: 16,
      iconSize: 16,
      className: "text-icon-quaternary shrink-0"
    }), _[15] = y, _[16] = f) : f = _[16], _[17] !== f || _[18] !== d ? (h = (0, t.jsxs)("span", {
      className: "flex shrink-0 items-center gap-2",
      children: [d, f]
    }), _[17] = f, _[18] = d, _[19] = h) : h = _[19], _[20] !== v || _[21] !== y || _[22] !== w || _[23] !== h || _[24] !== s || _[25] !== u ? (p = (0, t.jsxs)("button", {
      ref: w,
      type: "button",
      className: dW,
      disabled: v,
      "aria-busy": y,
      onClick: s,
      children: [u, h]
    }), _[20] = v, _[21] = y, _[22] = w, _[23] = h, _[24] = s, _[25] = u, _[26] = p) : p = _[26], _[27] !== p || _[28] !== o ? (m = (0, t.jsx)("div", {
      className: o,
      children: p
    }), _[27] = p, _[28] = o, _[29] = m) : m = _[29], m
  }

  function dJ(e) {
    let a, i, o, s, l, c, u, d, f, h, p, m, _ = (0, n.c)(30),
      {
        account: g,
        disabled: v,
        showDivider: y,
        onSelect: b
      } = e;
    _[0] === Symbol.for("react.memo_cache_sentinel") ? (a = {
      eventName: aS.HatchClickEvent.LOGIN_RECOVERY_SELECT_ACCOUNT_CLICK,
      actionTarget: "login_recovery_select_account",
      actionType: "click",
      metadata: {
        surface: "login",
        subsurface: "recovery_select_account"
      }
    }, _[0] = a) : a = _[0];
    let {
      ref: x,
      onClick: w
    } = (0, aE.useTrackedClickRef)(a);
    if (_[1] !== g.displayName) {
      let e = r.fbs._("Meta Account", null, {
        hk: "47lHGw"
      });
      i = g.displayName.trim().toLowerCase() === e.toString().trim().toLowerCase() ? null : e, _[1] = g.displayName, _[2] = i
    } else i = _[2];
    let k = i,
      C = y && dq;
    return _[3] !== C ? (o = (0, r3.cn)("group relative flex items-center", C), _[3] = C, _[4] = o) : o = _[4], _[5] !== w || _[6] !== b ? (s = () => {
      w(), b()
    }, _[5] = w, _[6] = b, _[7] = s) : s = _[7], _[8] !== g.displayName ? (l = (0, t.jsx)("span", {
      className: "text-body-status-medium text-text-primary block truncate",
      title: g.displayName,
      children: g.displayName
    }), _[8] = g.displayName, _[9] = l) : l = _[9], _[10] !== k ? (c = null != k && (0, t.jsx)("span", {
      className: "text-footnote text-text-secondary block truncate",
      title: k,
      children: k
    }), _[10] = k, _[11] = c) : c = _[11], _[12] !== l || _[13] !== c ? (u = (0, t.jsxs)("span", {
      className: "min-w-0 flex-1",
      children: [l, c]
    }), _[12] = l, _[13] = c, _[14] = u) : u = _[14], _[15] !== g.displayName || _[16] !== g.profiles ? (d = (0, t.jsx)(dr.HatchNativeAuthAccountFacepile, {
      pieces: g.profiles,
      fallbackDisplayName: g.displayName,
      productBadge: "meta-ai"
    }), _[15] = g.displayName, _[16] = g.profiles, _[17] = d) : d = _[17], _[18] === Symbol.for("react.memo_cache_sentinel") ? (f = (0, t.jsx)(ax.HatchIcon, {
      icon: iR.default,
      size: 16,
      iconSize: 16,
      className: "text-icon-quaternary shrink-0"
    }), _[18] = f) : f = _[18], _[19] !== d ? (h = (0, t.jsxs)("span", {
      className: "flex shrink-0 items-center gap-2",
      children: [d, f]
    }), _[19] = d, _[20] = h) : h = _[20], _[21] !== v || _[22] !== x || _[23] !== h || _[24] !== s || _[25] !== u ? (p = (0, t.jsxs)("button", {
      ref: x,
      type: "button",
      className: dW,
      disabled: v,
      onClick: s,
      children: [u, h]
    }), _[21] = v, _[22] = x, _[23] = h, _[24] = s, _[25] = u, _[26] = p) : p = _[26], _[27] !== p || _[28] !== o ? (m = (0, t.jsx)("div", {
      className: o,
      children: p
    }), _[27] = p, _[28] = o, _[29] = m) : m = _[29], m
  }

  function d0(e) {
    let a, i, o, s, l, c, u, d, f, h, p, m = (0, n.c)(24),
      {
        option: _,
        disabled: g,
        showDivider: v,
        onSelect: y
      } = e;
    m[0] === Symbol.for("react.memo_cache_sentinel") ? (a = {
      eventName: aS.HatchClickEvent.LOGIN_RECOVERY_CHOOSE_CONTACT_POINT_CLICK,
      actionTarget: "login_recovery_choose_contact_point",
      actionType: "click",
      metadata: {
        surface: "login",
        subsurface: "recovery_choose_contact_point"
      }
    }, m[0] = a) : a = m[0];
    let {
      ref: b,
      onClick: x
    } = (0, aE.useTrackedClickRef)(a);
    m[1] === Symbol.for("react.memo_cache_sentinel") ? (i = r.fbs._("Email", null, {
      hk: "28elyf"
    }), m[1] = i) : i = m[1];
    let w = i;
    m[2] === Symbol.for("react.memo_cache_sentinel") ? (o = r.fbs._("Mobile number", null, {
      hk: "4khYUa"
    }), m[2] = o) : o = m[2];
    let k = o,
      C = null == _.contactPointType ? null : "email" === _.contactPointType ? w : k,
      S = v && dq;
    return m[3] !== S ? (s = (0, r3.cn)("group relative flex items-center", S), m[3] = S, m[4] = s) : s = m[4], m[5] !== x || m[6] !== y ? (l = () => {
      x(), y()
    }, m[5] = x, m[6] = y, m[7] = l) : l = m[7], m[8] !== _.displayContactPoint ? (c = (0, t.jsx)("span", {
      className: "text-body-status-medium text-text-primary block truncate",
      title: _.displayContactPoint,
      children: _.displayContactPoint
    }), m[8] = _.displayContactPoint, m[9] = c) : c = m[9], m[10] !== C ? (u = null != C && (0, t.jsx)("span", {
      className: "text-footnote text-text-secondary block truncate",
      title: C,
      children: C
    }), m[10] = C, m[11] = u) : u = m[11], m[12] !== c || m[13] !== u ? (d = (0, t.jsxs)("span", {
      className: "min-w-0 flex-1",
      children: [c, u]
    }), m[12] = c, m[13] = u, m[14] = d) : d = m[14], m[15] === Symbol.for("react.memo_cache_sentinel") ? (f = (0, t.jsx)(ax.HatchIcon, {
      icon: iR.default,
      size: 16,
      iconSize: 16,
      className: "text-icon-quaternary shrink-0"
    }), m[15] = f) : f = m[15], m[16] !== g || m[17] !== b || m[18] !== l || m[19] !== d ? (h = (0, t.jsxs)("button", {
      ref: b,
      type: "button",
      className: dW,
      disabled: g,
      onClick: l,
      children: [d, f]
    }), m[16] = g, m[17] = b, m[18] = l, m[19] = d, m[20] = h) : h = m[20], m[21] !== h || m[22] !== s ? (p = (0, t.jsx)("div", {
      className: s,
      children: h
    }), m[21] = h, m[22] = s, m[23] = p) : p = m[23], p
  }

  function d1() {
    let e, a, i = (0, n.c)(2);
    return i[0] === Symbol.for("react.memo_cache_sentinel") ? (e = r.fbs._("Loading terms", null, {
      hk: "4EsuV5"
    }), i[0] = e) : e = i[0], i[1] === Symbol.for("react.memo_cache_sentinel") ? (a = (0, t.jsx)(iX.LoadingState, {
      name: "auth_terms",
      className: "w-full motion-reduce:[&_*]:!animate-none",
      children: (0, t.jsxs)("div", {
        role: "status",
        "aria-busy": "true",
        "aria-label": e,
        className: "flex w-full flex-col gap-2",
        children: [(0, t.jsx)(iV.Skeleton, {
          "aria-hidden": "true",
          className: "h-3 w-full"
        }), (0, t.jsx)(iV.Skeleton, {
          "aria-hidden": "true",
          className: "h-3 w-[92%]"
        }), (0, t.jsx)(iV.Skeleton, {
          "aria-hidden": "true",
          className: "h-3 w-2/3"
        })]
      })
    }), i[1] = a) : a = i[1], a
  }

  function d2(e, t) {
    return `${e}:${t.contentVersion}`
  }

  function d3(e) {
    let t, r, a = (0, n.c)(4),
      {
        readyKey: i,
        onReady: o
      } = e;
    return a[0] !== o || a[1] !== i ? (t = () => {
      o(i)
    }, r = [o, i], a[0] = o, a[1] = i, a[2] = t, a[3] = r) : (t = a[2], r = a[3]), (0, m.useEffect)(t, r), null
  }

  function d4(e) {
    let a, i, o, s, l, c, u, d, f, h, p = (0, n.c)(21),
      {
        subsurface: _,
        onRetry: g
      } = e,
      [v, y] = (0, m.useState)(!1),
      b = (0, m.useRef)(!1),
      x = (0, m.useRef)(!0);
    p[0] === Symbol.for("react.memo_cache_sentinel") ? (a = () => (x.current = !0, () => {
      x.current = !1
    }), i = [], p[0] = a, p[1] = i) : (a = p[0], i = p[1]), (0, m.useEffect)(a, i), p[2] !== _ ? (o = {
      eventName: aV.HatchImpressionEvent.ERROR_CONTENT_IMPRESSION,
      actionTarget: "login_terms_chunk_error",
      metadata: {
        surface: "login",
        subsurface: _
      }
    }, p[2] = _, p[3] = o) : o = p[3], p[4] === Symbol.for("react.memo_cache_sentinel") ? (s = {
      threshold: "50%"
    }, p[4] = s) : s = p[4];
    let {
      ref: w
    } = (0, aE.useTrackedImpressionRef)(o, s);
    p[5] !== _ ? (l = {
      eventName: aS.HatchClickEvent.ERROR_TRY_AGAIN_CLICK,
      actionTarget: "login_terms_chunk_retry",
      actionType: "click",
      metadata: {
        surface: "login",
        subsurface: _
      }
    }, p[5] = _, p[6] = l) : l = p[6];
    let {
      ref: k,
      onClick: C
    } = (0, aE.useTrackedClickRef)(l);
    return p[7] === Symbol.for("react.memo_cache_sentinel") ? (c = (0, t.jsx)("p", {
      className: "text-caption-1 text-text-primary",
      children: r.fbs._("We couldn't load the terms. Try again.", null, {
        hk: "3gqnoE"
      })
    }), p[7] = c) : c = p[7], p[8] !== v ? (u = v ? r.fbs._("Loading…", null, {
      hk: "3YJLNn"
    }) : r.fbs._("Try again", null, {
      hk: "FILtR"
    }), p[8] = v, p[9] = u) : u = p[9], p[10] !== C || p[11] !== g ? (d = () => {
      b.current || (b.current = !0, C(), y(!0), om().then(() => {
        x.current && g()
      }).catch(e => {
        dN.retainForBugReport("warn", "Native authentication terms retry failed"), x.current && (b.current = !1, y(!1))
      }))
    }, p[10] = C, p[11] = g, p[12] = d) : d = p[12], p[13] !== v || p[14] !== k || p[15] !== u || p[16] !== d ? (f = (0, t.jsx)(aw.Button, {
      ref: k,
      type: "button",
      label: u,
      disabled: v,
      variant: "borderless",
      size: "36",
      onClick: d
    }), p[13] = v, p[14] = k, p[15] = u, p[16] = d, p[17] = f) : f = p[17], p[18] !== w || p[19] !== f ? (h = (0, t.jsxs)("div", {
      ref: w,
      role: "alert",
      className: "flex w-full flex-col items-start gap-2",
      children: [c, f]
    }), p[18] = w, p[19] = f, p[20] = h) : h = p[20], h
  }

  function d5(e) {
    let r, a, i, o, s, l, c, u, d = (0, n.c)(23),
      {
        subsurface: f,
        tos: h,
        accounts: p,
        textAlign: _,
        onReady: g,
        onUnavailable: v
      } = e;
    d[0] !== p ? (r = void 0 === p ? [] : p, d[0] = p, d[1] = r) : r = d[1];
    let y = r,
      b = void 0 === _ ? "start" : _;
    d[2] !== f || d[3] !== h ? (a = d2(f, h), d[2] = f, d[3] = h, d[4] = a) : a = d[4];
    let x = a;
    return d[5] !== f ? (i = e => {
      let {
        reset: n
      } = e;
      return (0, t.jsx)(d4, {
        subsurface: f,
        onRetry: n
      })
    }, d[5] = f, d[6] = i) : i = d[6], d[7] === Symbol.for("react.memo_cache_sentinel") ? (o = (0, t.jsx)(d1, {}), d[7] = o) : o = d[7], d[8] !== y || d[9] !== f || d[10] !== b || d[11] !== h ? (s = (0, t.jsx)(op, {
      subsurface: f,
      tos: h,
      accounts: y,
      textAlign: b
    }), d[8] = y, d[9] = f, d[10] = b, d[11] = h, d[12] = s) : s = d[12], d[13] !== g || d[14] !== x ? (l = (0, t.jsx)(d3, {
      readyKey: x,
      onReady: g
    }), d[13] = g, d[14] = x, d[15] = l) : l = d[15], d[16] !== s || d[17] !== l ? (c = (0, t.jsxs)(m.Suspense, {
      fallback: o,
      children: [s, l]
    }), d[16] = s, d[17] = l, d[18] = c) : c = d[18], d[19] !== v || d[20] !== i || d[21] !== c ? (u = (0, t.jsx)(aP.EctoErrorBoundary, {
      surface: ay.HATCH_SENTRY_SURFACES.AUTH,
      onError: v,
      fallback: i,
      children: c
    }), d[19] = v, d[20] = i, d[21] = c, d[22] = u) : u = d[22], u
  }

  function d6({
    audience: e = "personal",
    landingPage: i,
    entrySurface: o = "default",
    showAppDownloads: s = !1,
    returnTo: l,
    initialSavedAccounts: c = [],
    expectsSavedAccounts: u = !1,
    isResumingProviderSso: d,
    isLinkingEntry: f = !1,
    linkingWaterfallId: h
  }) {
    let p = !0 === (0, r2.useReducedMotion)(),
      _ = (0, aM.useIsMobileBreakpoint)(),
      g = function() {
        let e, t = (0, n.c)(2),
          {
            height: r
          } = (0, m.use)(i$.EctoWindowDimensionsContext);
        t[0] !== r ? (e = () => null != r && r < 700, t[0] = r, t[1] = e) : e = t[1];
        let a = e;
        return (0, m.useSyncExternalStore)(iJ, iZ, a)
      }(),
      [v, y] = (0, m.useState)(() => f ? [] : dy()?.cards ?? []),
      [b, x] = (0, m.useState)(() => f ? null : dy()?.tos ?? null),
      [w, k] = (0, m.useState)(() => f ? [] : dy()?.supersededSavedAccountIds ?? []),
      [C, S] = (0, m.useState)(() => v.length > 0 || c.length > 0 || u ? "accounts" : "contact"),
      [E, T] = (0, m.useState)(!f && u && 0 === c.length),
      [N, A] = (0, m.useState)(null),
      [R, I] = (0, m.useState)(null),
      [O, L] = (0, m.useState)(null),
      [j, P] = (0, m.useState)(""),
      [M, D] = (0, m.useState)(null),
      H = j.trim() || M,
      F = dD(H),
      [U, G] = (0, m.useState)(""),
      [B, z] = (0, m.useState)(""),
      [Y, W] = (0, m.useState)(i6),
      [q, V] = (0, m.useState)(!1),
      [K, X] = (0, m.useState)(""),
      [$, Q] = (0, m.useState)(""),
      [Z, J] = (0, m.useState)(!1),
      [ee, et] = (0, m.useState)(null),
      [en, er] = (0, m.useState)(!1),
      [ea, ei] = (0, m.useState)(""),
      [eo, es] = (0, m.useState)([]),
      [el, ec] = (0, m.useState)(null),
      [eu, ed] = (0, m.useState)("select"),
      [ef, eh] = (0, m.useState)(""),
      [ep, em] = (0, m.useState)([]),
      [e_, eg] = (0, m.useState)(null),
      [ev, ey] = (0, m.useState)(!1),
      [eb, ex] = (0, m.useState)(null),
      [ew, ek] = (0, m.useState)(""),
      [eC, eS] = (0, m.useState)([]),
      [eE, eT] = (0, m.useState)([]),
      [eN, eA] = (0, m.useState)(!1),
      [eR, eI] = (0, m.useState)(null),
      [eO, eL] = (0, m.useState)("password"),
      [ej, eP] = (0, m.useState)(""),
      [eM, eD] = (0, m.useState)(!0),
      [eH, eF] = (0, m.useState)(!1),
      [eU, eG] = (0, m.useState)(null),
      [eB, ez] = (0, m.useState)(!0),
      [eY, eW] = (0, m.useState)(c),
      eq = v.some(e => null != e.loginSourceApp),
      eV = (0, m.useMemo)(() => {
        if (0 === w.length || !eq) return eY;
        let e = new Set(w);
        return eY.filter(t => null == t.savedAccountId || !e.has(t.savedAccountId))
      }, [eY, w, eq]),
      eK = eV.length > 0 || v.some(e => e.hasHatch && null != e.loginSourceApp),
      eX = v.some(e => e.hasMetaAi && !e.hasHatch && null != e.loginSourceApp),
      e$ = eK || eX,
      eQ = (0, m.useMemo)(() => v.filter(e => eK ? e.hasHatch : eX ? e.hasMetaAi && !e.hasHatch : !e.hasMetaAi && !e.hasHatch), [v, eK, eX]),
      [eZ, eJ] = (0, m.useState)(null),
      [e0, e1] = (0, m.useState)(!1),
      [e2, e3] = (0, m.useState)(!1),
      e4 = e0 || e2 ? uS.CaaEventFlow.AYMH : uS.CaaEventFlow.LOGIN_MANUAL,
      [e5, e6] = (0, m.useState)(!1),
      [e8, e7] = (0, m.useState)(!1),
      [e9, te] = (0, m.useState)(!1),
      [tt, tn] = (0, m.useState)(!1),
      [tr, ta] = (0, m.useState)(!1),
      [ti, to] = (0, m.useState)(null),
      [ts, tl] = (0, m.useState)(null),
      [tc, tu] = (0, m.useState)(null),
      td = tc?.message ?? null,
      tf = (0, m.useCallback)((e, t = null) => {
        tu(null == e ? null : {
          message: e,
          providerSsoFailure: t
        })
      }, []),
      [th, tp] = (0, m.useState)(null),
      [tm, t_] = (0, m.useState)(null),
      [tg, tv] = (0, m.useState)(!1),
      [ty, tb] = (0, m.useState)(null),
      [tx, tw] = (0, m.useState)(!1),
      tk = null == R ? null : d2("birthday", R),
      tC = null != tk && O === tk,
      tS = ee?.tos == null ? null : d2("ntp_upsell", ee.tos),
      tE = null != tS && O === tS,
      tT = (0, m.useRef)(!1),
      tN = (0, m.useRef)(!1),
      tA = (0, m.useRef)(!1),
      tR = (0, m.useRef)(!1),
      tI = (0, m.useRef)(!1),
      tO = (0, m.useRef)(c.length > 0),
      tL = (0, m.useRef)(null),
      tj = (0, m.useRef)(null),
      tP = (0, m.useRef)(null),
      tM = (0, m.useRef)(null),
      tD = (0, m.useRef)(!1),
      tH = (0, m.useRef)(0),
      tF = (0, m.useRef)("heading"),
      tU = (0, m.useRef)(0),
      tG = (0, m.useRef)(null),
      tB = (0, m.useRef)(null),
      tz = (0, m.useRef)(!1),
      tY = (0, m.useRef)(v.length > 0),
      tW = (0, m.useId)(),
      [tq] = (0, m.useState)(() => {
        let e;
        return null != (e = function(e) {
          for (let t of dp) {
            let n = e.get(t);
            if (null != n && n.length > 0) return n
          }
          return null
        }(new URL(window.location.href).searchParams)) && e.length <= 3e3 ? e : null
      }),
      [tV, tK] = (0, m.useState)(() => null != tq),
      [tX, t$] = (0, m.useState)(() => dT()?.ok === !0),
      tQ = (0, m.useRef)(null),
      tZ = tV ? E ? "aymh_and_saved_accounts" : "aymh" : E ? "saved_accounts" : "none",
      tJ = r.fbs._("For security, enter your mobile number or email and confirm it again.", null, {
        hk: "1RcCPu"
      }),
      t0 = r.fbs._("Authentication is unavailable. Refresh the page to try again.", null, {
        hk: "10JQ4k"
      }),
      t1 = r.fbs._("We couldn't finish signing in with that account. Try again.", null, {
        hk: "1rSy3Y"
      }),
      t2 = r.fbs._("We couldn't return you to login. Try again, or refresh the page.", null, {
        hk: "4CTt85"
      }),
      t3 = r.fbs._("We couldn't connect that account. Try again.", null, {
        hk: "tDqnB"
      }),
      t4 = r.fbs._("We couldn't send a code. Try again.", null, {
        hk: "4EgifX"
      }),
      t5 = r.fbs._("We couldn't send a recovery code. Try again.", null, {
        hk: "3hSjx3"
      }),
      t6 = r.fbs._("We couldn't continue with that account. Try again.", null, {
        hk: "2wPOuG"
      }),
      t8 = r.fbs._("We couldn't complete your login. Try again.", null, {
        hk: "2WhjT9"
      }),
      t7 = r.fbs._("We couldn't continue with another account. Try again.", null, {
        hk: "4m582p"
      }),
      t9 = r.fbs._("We couldn't create your account. Try again.", null, {
        hk: "4iM8iR"
      }),
      ne = r.fbs._("We couldn't send a code to that account. Try again.", null, {
        hk: "2QU4su"
      }),
      nt = r.fbs._("We couldn't remove that saved account. Try again.", null, {
        hk: "24ODTl"
      }),
      nn = r.fbs._("We couldn't continue with that account. Try again.", null, {
        hk: "3IgN7y"
      }),
      nr = r.fbs._("We couldn't send another code. Try again.", null, {
        hk: "vavl4"
      }),
      na = r.fbs._("We couldn't send a code. Try again.", null, {
        hk: "3dH3VN"
      }),
      ni = r.fbs._("We couldn't verify that code. Try again.", null, {
        hk: "XeHlP"
      }),
      no = r.fbs._("We couldn't verify that code. Try again.", null, {
        hk: "2bCneB"
      }),
      ns = r.fbs._("We couldn't continue. Try again.", null, {
        hk: "40cMDk"
      }),
      nl = r.fbs._("We couldn't send a code there. Try again.", null, {
        hk: "27maKv"
      }),
      nc = r.fbs._("We can't send a code using this option. Try another way to continue.", null, {
        hk: "8Z65e"
      }),
      nu = r.fbs._("We can't send a recovery code using this option. Enter the login code we sent to continue.", null, {
        hk: "1eBIxD"
      }),
      nd = r.fbs._("We couldn't reset your password. Try again.", null, {
        hk: "4geaFf"
      }),
      nf = r.fbs._("We couldn't load your accounts. Try again.", null, {
        hk: "1z08ZW"
      }),
      nh = r.fbs._("Refresh the page and try again.", null, {
        hk: "TdwG8"
      }),
      np = r.fbs._("Your login session expired. Please try again.", null, {
        hk: "2boSXV"
      }),
      nm = r.fbs._("Your login session expired. Refresh the page to try again.", null, {
        hk: "4vq3dC"
      }),
      n_ = r.fbs._("Our terms were updated. Please start again to review them.", null, {
        hk: "17r6zS"
      }),
      ng = {
        pendingConfirmationAfterCredential: r.fbs._("This account hasn’t confirmed its email or mobile number yet. Try another way to log in.", null, {
          hk: "3m2VxG"
        }),
        invalidCode: r.fbs._("That code is incorrect or has expired.", null, {
          hk: "epdRM"
        }),
        invalidPassword: r.fbs._("That password is incorrect.", null, {
          hk: "31OnsT"
        }),
        unsupportedVerification: r.fbs._("This account cannot finish logging in here yet.", null, {
          hk: "4iuB3D"
        }),
        twoFactorMethodUnsupported: r.fbs._("This account uses a security method we don't support here. Try another method.", null, {
          hk: "933we"
        }),
        twoFactorSessionExpired: r.fbs._("Your login session expired. Start again.", null, {
          hk: "1NEHXZ"
        }),
        tooManyAttempts: r.fbs._("Too many attempts. Try again later.", null, {
          hk: "1ZG8Ow"
        }),
        twoFactorSendFailed: r.fbs._("We couldn't send a code. Try again.", null, {
          hk: "1bHBSb"
        }),
        twoFactorLoginFailed: r.fbs._("We couldn't verify that code. Try again.", null, {
          hk: "1cEZjh"
        }),
        recoverySessionExpired: r.fbs._("Your password recovery session expired. Start again.", null, {
          hk: "3UYdL0"
        }),
        weakPassword: r.fbs._("Choose a stronger password.", null, {
          hk: "4emL5k"
        }),
        passwordMatchesOld: r.fbs._("Choose a password different from your old password.", null, {
          hk: "2Oxj0b"
        }),
        regionNotSupported: r.fbs._("{productName} isn’t available to new users in your region.", [r.fbs._param("productName", a.LOGGED_OUT_PRODUCT_BRAND.shortName)], {
          hk: "1uKTcy"
        }),
        passwordRecoveryFailed: r.fbs._("Something went wrong. Try again.", null, {
          hk: "18VRub"
        }),
        authFlowExpired: r.fbs._("Your login session expired. Refresh the page to try again.", null, {
          hk: "2vZNtx"
        }),
        invalidRequest: r.fbs._("Check what you entered and try again.", null, {
          hk: "1wdJca"
        }),
        contactPointIsTwoFactorMethod: r.fbs._("This account can't get a code that way. Log in with your email or mobile number.", null, {
          hk: "2Esm0I"
        }),
        savedAccountUnavailable: r.fbs._("That saved account is no longer available. Choose another login method.", null, {
          hk: "GuFwN"
        }),
        pendingConfirmation: r.fbs._("A code was already sent. Enter it below, or wait a moment before asking for another.", null, {
          hk: "2Z5V7c"
        }),
        otpSendFailed: r.fbs._("We couldn't send a code. Try again.", null, {
          hk: "2voEWc"
        }),
        completionHandleInvalid: r.fbs._("Your account creation session expired. Start again.", null, {
          hk: "4aiJja"
        }),
        linkHandleInvalid: r.fbs._("Your account selection expired. Start again.", null, {
          hk: "3YvbYR"
        }),
        linkFailed: r.fbs._("We couldn't connect that account. Use another account to continue.", null, {
          hk: "3ZbBdB"
        }),
        emailAlreadyInUse: r.fbs._("This email is already connected to an account.", null, {
          hk: "1SLWuP"
        }),
        tosContentVersionMismatch: r.fbs._("Our terms were updated. Please start again to review them.", null, {
          hk: "38rQgN"
        }),
        underageRegistration: r.fbs._("You aren’t able to create an account based on the information you provided.", null, {
          hk: "1IYJG2"
        }),
        registrationBlocked: r.fbs._("You can’t create a new account right now.", null, {
          hk: "lGZXZ"
        }),
        phoneAlreadyInUse: r.fbs._("This mobile number is already connected to an account.", null, {
          hk: "41Fkdc"
        }),
        registrationDisabled: r.fbs._("Account creation is unavailable right now. Try again later.", null, {
          hk: "3DLqFS"
        }),
        fallback: r.fbs._("We couldn't complete that request. Try again.", null, {
          hk: "24kjrd"
        })
      },
      nv = _ ? g ? 2 : 3 : 4,
      ny = eV.length + eQ.length,
      nb = !e8 && ny > nv,
      nx = nb ? eQ.slice(0, nv) : eQ,
      nw = nb ? eV.slice(0, Math.max(0, nv - nx.length)) : eV,
      nk = !E && !nb && 1 === ny;
    (0, aE.useTimeSpent)(uc.HatchTimeSpentEvent.LOGIN_PAGE, "login_page", {
      metadata: {
        surface: "login",
        screen: "login_main"
      }
    });
    let {
      ref: nC
    } = (0, aE.useTrackedImpressionRef)({
      eventName: aV.HatchImpressionEvent.LOGIN_PAGE_IMPRESSION,
      actionTarget: "login_page",
      metadata: {
        surface: "login",
        subsurface: C
      }
    }, {
      threshold: "50%"
    }), {
      ref: nS
    } = (0, aE.useTrackedImpressionRef)({
      eventName: aV.HatchImpressionEvent.LOGIN_AYMH_CARDS_IMPRESSION,
      actionTarget: "login_aymh_cards",
      metadata: {
        surface: "login",
        subsurface: "aymh_cards",
        card_count: nx.length,
        join_count: nx.filter(e => !e.hasMetaAi).length,
        superseded_id_count: w.length,
        superseded_hidden_count: eY.length - eV.length,
        tappable_card_count: v.filter(e => null != e.loginSourceApp).length
      }
    }, {
      threshold: "50%"
    }), {
      ref: nE
    } = (0, aE.useTrackedImpressionRef)({
      eventName: aV.HatchImpressionEvent.LOGIN_SAVED_ACCOUNTS_IMPRESSION,
      actionTarget: "login_saved_accounts",
      metadata: {
        surface: "login",
        subsurface: "accounts",
        account_count: nw.length,
        superseded_id_count: w.length,
        superseded_hidden_count: eY.length - eV.length,
        tappable_card_count: v.filter(e => null != e.loginSourceApp).length
      }
    }, {
      threshold: "50%"
    }), {
      ref: nT
    } = (0, aE.useTrackedImpressionRef)({
      eventName: aV.HatchImpressionEvent.LOGIN_ACCOUNT_SELECTION_IMPRESSION,
      actionTarget: "login_account_selection_list",
      metadata: {
        surface: "login",
        subsurface: "account_selection",
        total_count: ep.length
      }
    }, {
      threshold: "50%"
    }), {
      ref: nN
    } = (0, aE.useTrackedImpressionRef)({
      eventName: aV.HatchImpressionEvent.LOGIN_BIRTHDAY_IMPRESSION,
      actionTarget: "login_birthday",
      metadata: {
        surface: "login",
        subsurface: "birthday"
      }
    }, {
      threshold: "50%"
    }), {
      ref: nA,
      onClick: nR
    } = (0, aE.useTrackedClickRef)({
      eventName: aS.HatchClickEvent.LOGIN_CONTACT_CONTINUE_CLICK,
      actionTarget: "login_contact_continue",
      actionType: "click",
      metadata: {
        surface: "login",
        subsurface: "contact"
      }
    }), {
      ref: nI,
      onClick: nO
    } = (0, aE.useTrackedClickRef)({
      eventName: aS.HatchClickEvent.LOGIN_OTP_CONFIRM_CLICK,
      actionTarget: "login_otp_confirm",
      actionType: "click",
      metadata: {
        surface: "login",
        subsurface: "otp"
      }
    }), {
      ref: nL,
      onClick: nj
    } = (0, aE.useTrackedClickRef)({
      eventName: aS.HatchClickEvent.LOGIN_PASSWORD_CONFIRM_CLICK,
      actionTarget: "login_password_confirm",
      actionType: "click",
      metadata: {
        surface: "login",
        subsurface: "password"
      }
    }), {
      ref: nP,
      onClick: nM
    } = (0, aE.useTrackedClickRef)({
      eventName: aS.HatchClickEvent.LOGIN_USE_PASSWORD_CLICK,
      actionTarget: "login_use_password",
      actionType: "click",
      metadata: {
        surface: "login",
        subsurface: "otp"
      }
    }), {
      ref: nD,
      onClick: nH
    } = (0, aE.useTrackedClickRef)({
      eventName: aS.HatchClickEvent.LOGIN_TRY_ANOTHER_WAY_CLICK,
      actionTarget: "login_try_another_way",
      actionType: "click",
      metadata: {
        surface: "login",
        subsurface: "otp"
      }
    }), {
      ref: nF,
      onClick: nU
    } = (0, aE.useTrackedClickRef)({
      eventName: aS.HatchClickEvent.LOGIN_BACK_CLICK,
      actionTarget: "login_back_to_contact",
      actionType: "click",
      metadata: {
        surface: "login",
        subsurface: C
      }
    }), {
      ref: nG,
      onClick: nB
    } = (0, aE.useTrackedClickRef)({
      eventName: aS.HatchClickEvent.LOGIN_RESEND_CODE_CLICK,
      actionTarget: "login_resend_code",
      actionType: "click",
      metadata: {
        surface: "login",
        subsurface: "otp"
      }
    }), {
      ref: nz,
      onClick: nY
    } = (0, aE.useTrackedClickRef)({
      eventName: aS.HatchClickEvent.LOGIN_BIRTHDAY_CONTINUE_CLICK,
      actionTarget: "login_birthday_continue",
      actionType: "click",
      metadata: {
        surface: "login",
        subsurface: "birthday"
      }
    }), {
      ref: nW,
      onClick: nq
    } = (0, aE.useTrackedClickRef)({
      eventName: aS.HatchClickEvent.LOGIN_REGISTRATION_SUBMIT_CLICK,
      actionTarget: "login_registration_submit",
      actionType: "click",
      metadata: {
        surface: "login",
        subsurface: "create_password"
      }
    }), {
      ref: nV,
      onClick: nK
    } = (0, aE.useTrackedClickRef)({
      eventName: aS.HatchClickEvent.LOGIN_BIRTHDAY_HELP_CLICK,
      actionTarget: "login_birthday_help",
      actionType: "click",
      metadata: {
        surface: "login",
        subsurface: "birthday"
      }
    }), {
      ref: nX,
      onClick: n$
    } = (0, aE.useTrackedClickRef)({
      eventName: aS.HatchClickEvent.LOGIN_SMS_HELP_CLICK,
      actionTarget: "login_sms_notifications_help",
      actionType: "click",
      metadata: {
        surface: "login",
        subsurface: "contact"
      }
    }), {
      ref: nQ,
      onClick: nZ
    } = (0, aE.useTrackedClickRef)({
      eventName: aS.HatchClickEvent.LOGIN_USE_CONTACT_CLICK,
      actionTarget: "login_use_contact",
      actionType: "click",
      metadata: {
        surface: "login",
        subsurface: "accounts"
      }
    }), {
      ref: nJ,
      onClick: n0
    } = (0, aE.useTrackedClickRef)({
      eventName: aS.HatchClickEvent.LOGIN_AYMH_SKIP_CLICK,
      actionTarget: "login_aymh_skip",
      actionType: "click",
      metadata: {
        surface: "login",
        subsurface: "aymh_cards_loading",
        pending_source: tZ
      }
    }), {
      ref: n1,
      onClick: n2
    } = (0, aE.useTrackedClickRef)({
      eventName: aS.HatchClickEvent.LOGIN_TWO_FACTOR_METHOD_SELECT_CLICK,
      actionTarget: "login_two_factor_method_select",
      actionType: "click",
      metadata: {
        surface: "login",
        subsurface: "two_factor"
      }
    }), {
      ref: n3,
      onClick: n4
    } = (0, aE.useTrackedClickRef)({
      eventName: aS.HatchClickEvent.LOGIN_TWO_FACTOR_SUBMIT_CLICK,
      actionTarget: "login_two_factor_submit",
      actionType: "click",
      metadata: {
        surface: "login",
        subsurface: "two_factor"
      }
    }), {
      ref: n5,
      onClick: n6
    } = (0, aE.useTrackedClickRef)({
      eventName: aS.HatchClickEvent.LOGIN_TWO_FACTOR_RESEND_CLICK,
      actionTarget: "login_two_factor_resend",
      actionType: "click",
      metadata: {
        surface: "login",
        subsurface: "two_factor"
      }
    }), {
      ref: n8,
      onClick: n7
    } = (0, aE.useTrackedClickRef)({
      eventName: aS.HatchClickEvent.LOGIN_FORGOT_PASSWORD_CLICK,
      actionTarget: "login_forgot_password",
      actionType: "click",
      metadata: {
        surface: "login",
        subsurface: "password"
      }
    }), {
      ref: n9,
      onClick: re
    } = (0, aE.useTrackedClickRef)({
      eventName: aS.HatchClickEvent.LOGIN_RECOVERY_CODE_SUBMIT_CLICK,
      actionTarget: "login_recovery_code_submit",
      actionType: "click",
      metadata: {
        surface: "login",
        subsurface: "recovery_code"
      }
    }), {
      ref: rt,
      onClick: rn
    } = (0, aE.useTrackedClickRef)({
      eventName: aS.HatchClickEvent.LOGIN_RECOVERY_SET_PASSWORD_CLICK,
      actionTarget: "login_recovery_set_password",
      actionType: "click",
      metadata: {
        surface: "login",
        subsurface: "recovery_set_password"
      }
    }), {
      ref: rr
    } = (0, aE.useTrackedImpressionRef)({
      eventName: aV.HatchImpressionEvent.LOGIN_RECOVERY_CONTACT_POINT_SELECTION_IMPRESSION,
      actionTarget: "login_recovery_contact_point_selection_list",
      metadata: {
        surface: "login",
        subsurface: "recovery_choose_contact_point",
        total_count: eE.length
      }
    }, {
      threshold: "50%"
    }), {
      ref: ra
    } = (0, aE.useTrackedImpressionRef)({
      eventName: aV.HatchImpressionEvent.LOGIN_RECOVERY_ACCOUNT_SELECTION_IMPRESSION,
      actionTarget: "login_recovery_account_selection_list",
      metadata: {
        surface: "login",
        subsurface: "recovery_select_account",
        total_count: eC.length
      }
    }, {
      threshold: "50%"
    }), {
      ref: ri,
      onClick: ro
    } = (0, aE.useTrackedClickRef)({
      eventName: aS.HatchClickEvent.LOGIN_RESEND_CODE_CLICK,
      actionTarget: "login_recovery_resend",
      actionType: "click",
      metadata: {
        surface: "login",
        subsurface: "recovery_code"
      }
    }), rs = (e, t = F) => {
      let n;
      null != e && (n = e === uS.CaaNtmSwitchReason.SSO_COMPLETION_REQUIRED, uO({
        table: "caa_acquisition_client_events_rl",
        event_name: uS.CAA_REGISTRATION_EVENT_NAME,
        state: uS.CaaRegistrationState.REGISTRATION_START,
        event_category: uS.CaaEventCategory.REGISTRATION_FUNNEL,
        event_flow: uS.CaaEventFlow.NTM,
        event_step: n ? uS.CaaEventStep.LANDING : uS.CaaEventStep.UPSELL_AT_LOGIN,
        entry_point: (0, uw.getHatchAuthRegistrationEntryPoint)(),
        ...null == t ? {} : {
          contact_point_type: t
        },
        extra_client_data: {
          ntm_switch_reason: e
        }
      }, !1)), (0, uw.setHatchAuthRegistrationFlow)(uS.CaaEventFlow.NTM), S("birthday")
    };
    (0, m.useEffect)(() => {
      if ((0, u8.clearAuthMetaSessionBootstrapAttempt)(), (0, u8.clearAuthMetaSessionBootstrapReturnTo)(), tX) {
        let e = function() {
          try {
            let e = sessionStorage.getItem(dx);
            return null != e && sessionStorage.removeItem(dx), e
          } catch {
            return null
          }
        }();
        null != e && (0, uw.adoptHatchAuthWaterfallId)(e) || (0, uw.beginHatchAuthAttempt)(h), T(!1), tK(!1);
        let t = function() {
          try {
            let e = sessionStorage.getItem(dw);
            return null != e && sessionStorage.removeItem(dw), "aymh_login" === e || "ntp_join" === e ? e : null
          } catch {
            return null
          }
        }();
        tQ.current = t, "ntp_join" === t && (0, ug.prepareMarketingSignupMeasurement)();
        let n = function() {
          try {
            let e = sessionStorage.getItem(dk);
            return null != e && sessionStorage.removeItem(dk), (0, uS.isCaaClientNameableEntryPoint)(e) ? e : null
          } catch {
            return null
          }
        }();
        (0, uw.setHatchAuthLandingEntryPoint)(n ?? ("aymh_login" === t ? uS.CaaEntryPoint.AYMH : uS.CaaEntryPoint.NTP_LANDING)), (0, uw.setHatchAuthRegistrationFlow)("ntp_join" === t ? uS.CaaEventFlow.NTP : uS.CaaEventFlow.NTM), (0, uw.markHatchAuthBearerSettled)();
        return
      }
      dC(), (0, uw.beginHatchAuthAttempt)(h);
      let e = new AbortController,
        t = e => {
          A(e)
        },
        n = async (t, n) => {
          try {
            return await fetch(t, n)
          } catch (t) {
            if (e.signal.aborted) throw t;
            throw new dL
          }
        }, r = e => {
          if (!e.ok) {
            if (e.status >= 500 || 429 === e.status) throw new dL;
            throw Error("Authentication is unavailable")
          }
        }, a = async () => {
          let a = (0, uw.getHatchAuthWaterfallId)(),
            i = await n(`${dS}/restart`, {
              method: "POST",
              cache: "no-store",
              headers: {
                "Content-Type": "application/json",
                ...null == a ? {} : {
                  [uw.HATCH_WATERFALL_ID_HEADER]: a
                }
              },
              body: "{}",
              signal: e.signal
            });
          r(i);
          let o = await dj(i),
            s = o.csrf_token;
          if ("string" != typeof s) throw Error("Authentication is unavailable");
          let l = {
            "Content-Type": "application/json",
            "X-Hatch-CSRF-Token": s,
            ...null == a ? {} : {
              [uw.HATCH_WATERFALL_ID_HEADER]: a
            }
          };
          tL.current = dY(o);
          let c = t => {
              !e.signal.aborted && (eW(t), T(!1), tI.current || tz.current || S(t.length > 0 || tY.current ? "accounts" : "contact"))
            },
            u = async () => {
              if (tO.current || Array.isArray(o.saved_accounts)) return void T(!1);
              let t = (0, ub.beginInitialLoadSpan)("auth_saved_accounts");
              for (let a = 1; a <= 3; a++) try {
                let a = await n(`${dS}/saved-accounts`, {
                  method: "POST",
                  headers: l,
                  body: "{}",
                  signal: e.signal
                });
                r(a), c(dH(await dj(a))), (0, ub.endInitialLoadSpan)(t, "success");
                return
              } catch (n) {
                if (e.signal.aborted) throw (0, ub.endInitialLoadSpan)(t, "cancelled"), n;
                if (n instanceof dL && a < 3) continue;
                dN.retainForBugReport("warn", "Unable to load saved accounts"), T(!1), (0, ub.endInitialLoadSpan)(t, "error");
                return
              }
            };
          if (Array.isArray(o.saved_accounts) && c(dH(o)), "two_factor_required" === o.flow_state) {
            if (!e.signal.aborted) {
              let e = dF(o);
              t(s), es(e), ec(e[0]?.methodId ?? null), eh(""), ey(!1), tf(null), ed("select"), S("two-factor")
            }
          } else if ("completion_required" === o.flow_state) e.signal.aborted || (t(s), I((0, ui.parseNativeAuthTos)(o.tos)), D("string" == typeof o.masked_contact ? o.masked_contact : null), rs());
          else if ("ntp_upsell_restart_required" === o.flow_state) e.signal.aborted || (tz.current = !0, te(!1), ta(!0), t(s), D("string" == typeof o.masked_contact ? o.masked_contact : null), et(null), er(!1), tp(tJ), S("contact"));
          else if ("new" === o.flow_state) {
            let a = await n(`${dS}/start`, {
              method: "POST",
              headers: l,
              body: "{}",
              signal: e.signal
            });
            r(a);
            let i = await dj(a);
            e.signal.aborted || (t(s), tL.current = dY(i)), (!0 === o.saved_accounts_available || !0 === i.saved_accounts_available) && await u()
          } else "started" === o.flow_state && (e.signal.aborted || t(s), !0 === o.saved_accounts_available && await u())
        };
      return (async () => {
        for (let t = 1;; t++) try {
          await a(), e.signal.aborted || rc.current || tf(null);
          break
        } catch (n) {
          if (e.signal.aborted) return;
          if (n instanceof dL && t < 3) continue;
          tf(t0);
          break
        }(0, uw.markHatchAuthBearerSettled)(), uI()
      })(), () => {
        e.abort()
      }
    }, []), (0, m.useEffect)(() => {
      ! function() {
        try {
          let e = new URL(window.location.href),
            t = [...dp, ...dh.AYMH_CYCLE_COMPLETE_PARAMS];
          if (!t.some(t => e.searchParams.has(t))) return;
          for (let n of t) e.searchParams.delete(n);
          window.history.replaceState(window.history.state, "", `${e.pathname}${e.search}${e.hash}`)
        } catch (e) {
          dm.retainForBugReport("warn", "Unable to strip the AYMH handle from the address bar")
        }
      }(), null == tq && tK(!1)
    }, [tq]), (0, m.useEffect)(() => {
      if (null == tq || null == N) return;
      let e = !1;
      return db(tq, N).then(t => {
        e || (tY.current = t.cards.length > 0, y(t.cards), k(t.supersededSavedAccountIds), x(t.tos), tK(!1), t.cards.length > 0 && !tz.current && S("accounts"))
      }), () => {
        e = !0
      }
    }, [tq, N]), (0, m.useEffect)(() => {
      null != td && (tK(!1), T(!1))
    }, [td]), (0, m.useEffect)(() => {
      v.length > 0 && !tz.current && S("accounts")
    }, [v.length]), (0, m.useEffect)(() => () => {
      tM.current?.abort()
    }, []);
    let rl = (0, m.useRef)(!1),
      rc = (0, m.useRef)(!1);
    (0, m.useEffect)(() => {
      if (rl.current) return;
      let e = dT();
      if (null != e) {
        let t;
        if (rl.current = !0, (t = new URL(window.location.href)).searchParams.delete(dc.NATIVE_LOGIN_RESUME_PROVIDER_SSO_PARAM), t.searchParams.delete("provider"), t.searchParams.delete("outcome"), t.searchParams.delete("completion_id"), t.searchParams.delete("redirect_to"), window.history.replaceState(window.history.state, "", `${t.pathname}${t.search}${t.hash}`), !e.ok) {
          dN.error({
            error: Error("Invalid provider SSO resume markers"),
            failedFields: e.failedFields,
            tags: (0, ay.hatchSentryTags)(ay.HATCH_SENTRY_SURFACES.AUTH)
          }, "Ignoring invalid provider SSO resume markers"), rc.current = !0, tf(t1);
          return
        }
        rK(e.markers.provider, e.markers.outcome, e.markers.completionId, e.markers.redirectTo, tQ.current)
      }
    }, []), (0, m.useEffect)(() => {
      ("otp" !== C || e0) && "birthday" !== C && "ntp-upsell" !== C && null == ti || oy().catch(e => {
        o_.retainForBugReport("warn", "Native authentication registration-rejection dialog preload failed; rendering will retry")
      })
    }, [e0, ti, C]), (0, m.useEffect)(() => {
      "password" === C && oN().catch(e => {
        oS.retainForBugReport("warn", "Native authentication cross-app recovery dialog preload failed; rendering will retry")
      })
    }, [C]);
    let ru = () => !tT.current && !tN.current && (tM.current?.abort(), tT.current = !0, tw(!0), !0),
      rd = () => {
        tN.current || (tT.current = !1, tw(!1))
      },
      rf = e => {
        window.location.assign(e), tN.current = !0
      },
      rh = async (e, t, n) => {
        let r = n ?? N;
        if (null == r) throw Error(nh);
        let a = (0, uw.getHatchAuthWaterfallId)(),
          i = (0, uw.getHatchAuthClientNameableEntryPoint)(),
          o = await fetch(`${dS}/${e}`, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              "X-Hatch-CSRF-Token": r,
              ...null == a ? {} : {
                [uw.HATCH_WATERFALL_ID_HEADER]: a
              },
              [uw.HATCH_CAA_REG_ENTRY_POINT_HEADER]: i
            },
            body: JSON.stringify(t)
          });
        return await dM(o) ? (tN.current = !0, null) : o
      }, rp = async () => {
        (0, uw.beginHatchAuthAttempt)(h);
        let e = (0, uw.getHatchAuthWaterfallId)(),
          t = await fetch(`${dS}/restart`, {
            method: "POST",
            cache: "no-store",
            headers: {
              "Content-Type": "application/json",
              ...null == e ? {} : {
                [uw.HATCH_WATERFALL_ID_HEADER]: e
              }
            },
            body: JSON.stringify({
              resume: !1
            })
          });
        if (!t.ok) throw Error(`Authentication restart failed: ${t.status}`);
        let n = await dj(t),
          r = n.csrf_token;
        if ("started" !== n.flow_state || "string" != typeof r) throw Error("Authentication restart returned an invalid response");
        return A(r), I(null), tL.current = dY(n), P(""), D(null), G(""), z(""), W(""), V(!1), X(""), Q(""), J(!1), et(null), er(!1), ei(""), es([]), ec(null), ed("select"), eh(""), em([]), x(null), eg(null), ey(!1), ex(null), ek(""), eS([]), eT([]), eA(!1), eP(""), eD(!0), ez(!0), eL("password"), eG(null), eJ(null), e1(!1), e3(!1), te(!1), tn(!1), ta(!1), tp(null), tz.current = !1, tf(null), S(eV.length > 0 || v.length > 0 ? "accounts" : "contact"), r
      }, rm = async e => {
        let t;
        if ("authFlowExpired" !== e.type && "csrfFailed" !== e.type && "invalidTwoFactorState" !== e.type && "invalidSelection" !== e.type && "session_invalid" !== e.type && "invalidRecoveryState" !== e.type && "invalidResetState" !== e.type) return null;
        try {
          await rp(), t = np
        } catch (n) {
          dN.error({
            error: n instanceof Error ? n : Error(String(n)),
            problemType: e.type,
            tags: (0, ay.hatchSentryTags)(ay.HATCH_SENTRY_SURFACES.AUTH, {
              problemType: e.type
            })
          }, "Unable to restart an expired native authentication attempt"), t = nm
        }
        return tf(t), t
      }, r_ = async () => {
        await rp(), tf(n_)
      }, rg = (e, t = !1) => {
        if ("pendingConfirmation" === e.type && t) return ng.pendingConfirmationAfterCredential;
        switch (e.type) {
          case "invalidCode":
            return ng.invalidCode;
          case "invalidPassword":
            return ng.invalidPassword;
          case "additionalVerificationRequired":
          case "confirmationFailed":
          case "accountSelectionRequired":
            return ng.unsupportedVerification;
          case "twoFactorMethodUnsupported":
            return ng.twoFactorMethodUnsupported;
          case "invalidTwoFactorState":
          case "session_invalid":
            return ng.twoFactorSessionExpired;
          case "tooManyAttempts":
            return ng.tooManyAttempts;
          case "twoFactorSendFailed":
            return ng.twoFactorSendFailed;
          case "twoFactorLoginFailed":
            return ng.twoFactorLoginFailed;
          case "invalidRecoveryState":
          case "invalidResetState":
            return ng.recoverySessionExpired;
          case "weakPassword":
            return ng.weakPassword;
          case "passwordMatchesOld":
            return ng.passwordMatchesOld;
          case "regionNotSupported":
            return ng.regionNotSupported;
          case "passwordRecoveryFailed":
          case "passwordResetFailed":
            return ng.passwordRecoveryFailed;
          case "authFlowExpired":
          case "csrfFailed":
            return ng.authFlowExpired;
          case "invalidRequest":
            return ng.invalidRequest;
          case "contactPointIsTwoFactorMethod":
            return ng.contactPointIsTwoFactorMethod;
          case "savedAccountUnavailable":
            return ng.savedAccountUnavailable;
          case "pendingConfirmation":
            return ng.pendingConfirmation;
          case "otpSendFailed":
            return ng.otpSendFailed;
          case "completionHandleInvalid":
            return ng.completionHandleInvalid;
          case "linkHandleInvalid":
            return ng.linkHandleInvalid;
          case "linkFailed":
            return ng.linkFailed;
          case "emailAlreadyInUse":
            return ng.emailAlreadyInUse;
          case "tosContentVersionMismatch":
            return ng.tosContentVersionMismatch;
          case "underageRegistration":
          case "underage":
            return ng.underageRegistration;
          case "registrationBlocked":
            return ng.registrationBlocked;
          case "phoneAlreadyInUse":
            return ng.phoneAlreadyInUse;
          case "registrationDisabled":
            return ng.registrationDisabled;
          default:
            return ng.fallback
        }
      }, rv = (e, t = "restart") => {
        if ("underageRegistration" !== e.type && "registrationBlocked" !== e.type && "invalidName" !== e.type) return !1;
        let n = "invalidName" === e.type;
        return n && J(!0), tF.current = n ? "name" : "heading", tH.current += 1, t_({
          id: tH.current,
          reason: e.type,
          message: n ? e.detail ?? rg(e) : rg(e),
          title: n ? e.title ?? null : null,
          dismissBehavior: n ? "stay" : t,
          restartError: null
        }), !0
      }, ry = async () => {
        if (tm?.dismissBehavior === "stay") return void t_(null);
        if (!tD.current) {
          tD.current = !0, tv(!0), t_(e => null == e ? null : {
            ...e,
            restartError: null
          });
          try {
            await rp(), t_(null)
          } catch (e) {
            dN.error({
              error: e instanceof Error ? e : Error(String(e)),
              tags: (0, ay.hatchSentryTags)(ay.HATCH_SENTRY_SURFACES.AUTH)
            }, "Unable to restart after native registration was rejected"), t_(e => null == e ? null : {
              ...e,
              restartError: t2
            })
          } finally {
            tD.current = !1, tv(!1)
          }
        }
      }, rb = async () => {
        let e = j.trim();
        if (e.length > 0 && e === eR) return tf(ng.regionNotSupported), null;
        if (0 === e.length || !ru()) return null;
        tf(null), tp(null);
        try {
          let n = function() {
              try {
                let e = new Intl.Locale(navigator.language).region;
                return null != e && /^[A-Za-z]{2}$/.test(e) ? e : void 0
              } catch {
                return
              }
            }(),
            r = await rh("send-otp", {
              contact_point: j.trim(),
              ...null == n ? {} : {
                region: n
              }
            });
          if (null == r) return null;
          if (!r.ok) {
            var t;
            let n = await dP(r);
            if (403 === r.status && "regionNotSupported" === n.type) return eI(e), tf(ng.regionNotSupported), null;
            return (0, ay.captureHatchMessage)(ay.HATCH_SENTRY_SURFACES.AUTH, "Native authentication error shown", {
              level: "warning",
              fingerprint: ["auth", "error-shown", "send-otp", String(r.status)],
              tags: {
                feature: "native_auth_error_shown",
                operation: "send-otp"
              },
              extra: {
                ... function(e, t = e.get("x-hatch-auth-check-id")) {
                  let n = e.get("x-vercel-id");
                  return {
                    authCheckId: null != t && ud.test(t) ? t : null,
                    vercelRequestId: null != n && n.length <= 128 && uf.test(n) ? n : null
                  }
                }(r.headers),
                waterfallId: (0, uw.getHatchAuthWaterfallId)(),
                status: r.status,
                problemType: (t = n.type, "string" == typeof t && uu.test(t) ? t : null)
              }
            }), tf(rg(n)), null
          }
          let a = await dj(r);
          ez(!1 !== a.password_login_available);
          let i = (0, uw.getHatchAuthLandingEntryPoint)(),
            o = !0 === a.ntp_upsell_expected;
          if ((0, uw.setHatchAuthRegistrationFlow)(o ? uS.CaaEventFlow.NTP : uS.CaaEventFlow.NTM), (0, uw.setHatchAuthRegistrationEntryPoint)(o ? uS.CaaEntryPoint.NTP_UPSELL : i), eG(dl(a.flow)), "password_required" === a.registration_state) return uB(null, uS.CaaEventFlow.LOGIN_MANUAL, dD(e)), "password";
          return "otp"
        } catch (e) {
          return dN.error({
            error: e instanceof Error ? e : Error(String(e))
          }, "Native authentication OTP request failed"), tf(t4), null
        } finally {
          rd()
        }
      }, rx = async () => {
        if (tt) return void await rA();
        e3(!1);
        let e = await rb();
        null != e && (e1(!1), e6("password" === e), G(""), D(function(e) {
          let t = e.trim(),
            n = t.indexOf("@");
          if (n > 0) return `${t[0]}***${t.slice(n)}`;
          let r = t.replace(/\D/g, "");
          return r.length >= 4 ? `***-***-${r.slice(-4)}` : t
        }(j)), S(e))
      }, rw = async () => {
        if (nB(), "register" === eU) uO(u1(uS.CaaConfirmationState.RESEND_CODE_CLICKED, eU, F), !1);
        else ! function(e, t = uS.CaaEventFlow.LOGIN_MANUAL, n = null) {
          uO(uD(t, uS.CaaLoginEvent.RESEND_CODE_CLICKED, uS.CaaEventCategory.LOGIN_HOME_PAGE_INTERACTION, uS.CaaEventStep.OTP, uP(uS.CaaEventStep.OTP, e), n), !1)
        }(eU, e4, F);
        if (ru()) {
          tf(null);
          try {
            let e = await rh("resend-otp", {});
            if (null == e) return;
            if (!e.ok) return void tf(rg(await dP(e)));
            let t = await dj(e);
            if ("password_required" === t.registration_state) {
              eG(null), ez(!0), e6(!0), S("password");
              return
            }
            ez(!1 !== t.password_login_available), G("")
          } catch (e) {
            dN.error({
              error: e instanceof Error ? e : Error(String(e))
            }, "Native authentication OTP resend failed"), tf(nr)
          } finally {
            rd()
          }
        }
      }, rk = (e, t = null) => {
        var n, r;
        let a;
        dN.retainForBugReport("warn", "Completed native authentication response received");
        let i = (n = e.redirect_to, r = l ?? "/", (a = e => {
            if ("string" != typeof e) return null;
            let t = e.trim();
            return !t.startsWith("/") || t.startsWith("//") || t.startsWith("/\\") ? null : t
          })(n) ?? a(r) ?? "/"),
          o = "string" == typeof e.checkpoint_url ? e.checkpoint_url : null,
          s = !1;
        if (null != o) {
          let e = (0, uw.getHatchAuthWaterfallId)();
          if (!(s = null != e && (0, uk.savePendingCheckpointHandoff)(o, e))) return void(0, uC.terminateCheckpointedSession)(null, "blocked")
        }
        let c = function(e) {
          if (!dI(e.auth_meta_session)) return null;
          let t = e.auth_meta_session.frl_access_token;
          return "string" == typeof t && t.length > 0 ? {
            frlAccessToken: t
          } : null
        }(e);
        if (f && !s) {
          tN.current = !0,
            function(e, t) {
              if (null == e) {
                du.error({
                  error: Error("Linking completion lacked an FRL token"),
                  tags: (0, ay.hatchSentryTags)(ay.HATCH_SENTRY_SURFACES.AUTH, {
                    reason: "missing_frl_token"
                  })
                }, "Cannot consume the linking transaction"), dd();
                return
              }
              if (null == t) {
                (0, ay.captureHatchMessage)(ay.HATCH_SENTRY_SURFACES.AUTH, "Linking completion had no fresh credential", {
                  level: "warning",
                  tags: {
                    reason: "no_fresh_credential"
                  }
                }), dd();
                return
              }
              df(e, t)
            }(c?.frlAccessToken ?? null, t);
          return
        }((e, t, n) => {
          if (tR.current) return dN.retainForBugReport("warn", "auth.meta session bootstrap skipped because this page already started it");
          if (tR.current = !0, null == e) {
            dN.error({
              error: Error("Completed native authentication omitted auth.meta bootstrap data")
            }, "Continuing without auth.meta session synchronization"), n ? (0, uC.terminateCheckpointedSession)(null, "blocked") : rf(t);
            return
          }
          try {
            switch (dN.retainForBugReport("warn", "Starting auth.meta session bootstrap form navigation"), (0, u8.establishAuthMetaSession)(e.frlAccessToken, t)) {
              case "submitted":
                dN.retainForBugReport("warn", "Submitted auth.meta session bootstrap form navigation"), tN.current = !0;
                return;
              case "already_attempted":
                dN.retainForBugReport("warn", "auth.meta session bootstrap skipped because this tab already attempted it")
            }
            n ? (0, uC.terminateCheckpointedSession)(null, "blocked") : rf(t)
          } catch (e) {
            dN.error({
              error: e instanceof Error ? e : Error(String(e))
            }, "Failed to start auth.meta session synchronization"), n ? (0, uC.terminateCheckpointedSession)(null, "blocked") : rf(t)
          }
        })(c, i, s)
      }, rC = e => {
        es(e), ec(e[0]?.methodId ?? null), eh(""), ey(!1), tf(null), ed("select"), S("two-factor")
      }, rS = async e => {
        tf(null);
        try {
          let t = await rh("two-factor-send-code", {
            method_id: e.methodId
          });
          if (null == t) return !1;
          if (!t.ok) {
            let e = await dP(t);
            if (await rm(e) != null) return !1;
            return "tooManyAttempts" === e.type && ey(!0), tf(rg(e)), !1
          }
          return !0
        } catch {
          return tf(na), !1
        }
      }, rE = async () => {
        let e = eo.find(e => e.methodId === el);
        if (null != e && ru()) {
          n2();
          try {
            if ("SMS" === e.methodType && !await rS(e)) return;
            eh(""), tf(null), ey(!1), ed("code")
          } finally {
            rd()
          }
        }
      }, rT = async () => {
        let e = eo.find(e => e.methodId === el);
        if (null != e && "SMS" === e.methodType && !ev && ru()) {
          n6();
          try {
            await rS(e) && eh("")
          } finally {
            rd()
          }
        }
      }, rN = async () => {
        let e = eo.find(e => e.methodId === el);
        if (null == e) return;
        let t = dU(ef, e.methodType);
        if (t.length === e.codeLength && ru()) {
          n4(), tf(null);
          try {
            let n = await rh("two-factor", {
              method_id: e.methodId,
              code: t,
              ...null == l ? {} : {
                return_to: l
              }
            });
            if (null == n) return void
            function(e = uS.CaaEventFlow.LOGIN_MANUAL) {
              uO({
                ...uD(e, uS.CaaLoginEvent.TWO_FACTOR_LOGIN_FAILED, uS.CaaEventCategory.LOGIN_FAILURE, uS.CaaEventStep.TWO_FAC_REDIRECT),
                exception_type: uW
              }, !0)
            }(e4);
            if (n.redirected) {
              uq({
                eventFlow: e4
              }), rf(n.url);
              return
            }
            if (!n.ok) {
              let e = await dP(n);
              if (uV({
                  exceptionType: e.type,
                  exceptionCode: n.status,
                  eventFlow: e4
                }), await rm(e) != null) return;
              tf(rg(e));
              return
            }
            let r = await dj(n);
            if ("two_factor_required" === r.registration_state) return void rC(dF(r));
            uq({
              eventFlow: e4,
              loggedInIdentifier: dO(r)
            }), rk(r, "two_factor")
          } catch (e) {
            uV({
              exceptionType: "requestFailed",
              eventFlow: e4
            }), dN.error({
              error: e instanceof Error ? e : Error(String(e))
            }, "Native authentication confirmation failed"), tf(ni)
          } finally {
            rd()
          }
        }
      }, rA = async (e = eO) => {
        if (!ru()) return;
        eL(e);
        let t = j.trim();
        tf(null);
        try {
          let n = await rh("recovery-start", 0 === t.length ? {} : {
            contact_point: t
          });
          if (null == n) return;
          if (!n.ok) {
            let t = await dP(n);
            if (await rm(t) != null) return;
            if ("recoveryContactRequired" === t.type) {
              tn(!0), S("contact");
              return
            }
            let r = (0, oC.parsePasswordRecoveryCrossAppProvider)(t.type);
            if (null != r) {
              tU.current += 1, tb({
                id: tU.current,
                provider: r
              });
              return
            }
            if ("contactPointIsTwoFactorMethod" === t.type) {
              eA(!0), tn(!1), S(e), tf("otp" === e ? nu : nc);
              return
            }
            tf(rg(t));
            return
          }
          let r = await dj(n);
          tn(!1);
          let a = function(e) {
            if (!Array.isArray(e.recovery_options) || 0 === e.recovery_options.length) return null;
            let t = [];
            for (let n of e.recovery_options) {
              if (!dI(n)) return null;
              let e = n.option_id,
                r = n.display_contact_point;
              if ("string" != typeof e || 0 === e.length || "string" != typeof r || 0 === r.length) return null;
              t.push({
                optionId: e,
                displayContactPoint: r,
                contactPointType: "email" === n.contact_point_type || "phone" === n.contact_point_type ? n.contact_point_type : null
              })
            }
            return t
          }(r);
          if (null != a) {
            eT(a), ex(null), S("recovery-choose-contact-point");
            return
          }
          eT([]), ex("string" == typeof r.display_contact_point ? r.display_contact_point : null), ek(""), S("recovery-code")
        } catch {
          tf(t5)
        } finally {
          rd()
        }
      }, rR = async () => {
        n7(),
          function(e = uS.CaaEventFlow.LOGIN_MANUAL, t = null) {
            uO(uD(e, uS.CaaLoginEvent.FORGOT_PASSWORD_BUTTON_CLICKED, uS.CaaEventCategory.LOGIN_HOME_PAGE_INTERACTION, uS.CaaEventStep.PASSWORD, void 0, t), !1)
          }(e4, F), u4(), await rA("password")
      }, rI = async () => {
        nH(), u4(), await rA("otp")
      }, rO = async () => {
        ro(), await rA()
      }, rL = async e => {
        if (ru()) {
          tf(null);
          try {
            let t = await rh("recovery-send-code", {
              option_id: e
            });
            if (null == t) return;
            if (!t.ok) {
              let e = await dP(t);
              if (await rm(e)) return;
              tf(rg(e));
              return
            }
            let n = await dj(t);
            ex("string" == typeof n.display_contact_point ? n.display_contact_point : null), ek(""), S("recovery-code")
          } catch {
            tf(nl)
          } finally {
            rd()
          }
        }
      }, rj = async () => {
        if (0 !== ew.trim().length && ru()) {
          re(), tf(null);
          try {
            let e = await rh("recovery-confirm-code", {
              code: ew
            });
            if (null == e) return;
            if (!e.ok) {
              let t = await dP(e);
              if (await rm(t) != null) return;
              tf(rg(t));
              return
            }
            let t = await dj(e);
            if ("select_account" === t.next_step) {
              eS(Array.isArray(t.accounts) ? t.accounts.slice(0, 20).flatMap(e => {
                if (!dI(e)) return [];
                let t = e.account_id,
                  n = e.display_name;
                if ("string" != typeof t || "string" != typeof n) return [];
                let r = "string" == typeof e.profile_picture_url ? e.profile_picture_url : null,
                  a = dG(e.profiles);
                return [{
                  accountId: t,
                  displayName: n,
                  profilePictureUrl: r,
                  profiles: a.length > 0 ? a : [{
                    platform: null,
                    displayName: n,
                    profilePictureUrl: r
                  }]
                }]
              }) : []), S("recovery-select-account");
              return
            }
            eP(""), S("recovery-set-password")
          } catch {
            tf(no)
          } finally {
            rd()
          }
        }
      }, rP = async e => {
        if (ru()) {
          tf(null);
          try {
            let t = await rh("recovery-select-account", {
              account_id: e
            });
            if (null == t) return;
            if (!t.ok) {
              let e = await dP(t);
              if (await rm(e) != null) return;
              tf(rg(e));
              return
            }
            eP(""), S("recovery-set-password")
          } catch {
            tf(ns)
          } finally {
            rd()
          }
        }
      }, rM = async () => {
        if (0 === ej.length || !ru()) return;
        rn(), tf(null);
        let e = eb ?? j.trim(),
          t = 0 === e.length ? null : e.includes("@") ? uS.CaaContactPointType.EMAIL : uS.CaaContactPointType.PHONE,
          n = dD(e);
        try {
          let e = await uh(ej, tL.current),
            r = await rh("recovery-complete", {
              password: e,
              logout_other_sessions: eM,
              ...null == l ? {} : {
                return_to: l
              }
            });
          if (null == r) return;
          if (r.redirected) {
            u5(t), uz(uS.CaaEventStep.PASSWORD, {
              isTwoFactorPending: !1,
              flow: null,
              eventFlow: e4,
              contactPointType: n
            }), rf(r.url);
            return
          }
          if (!r.ok) {
            let e = await dP(r);
            if (u6(t, {
                exceptionType: "string" == typeof e.type ? e.type : "requestFailed",
                exceptionCode: r.status
              }), await rm(e) != null) return;
            tf(rg(e));
            return
          }
          let a = await dj(r);
          if ("two_factor_required" === a.registration_state) {
            uz(uS.CaaEventStep.PASSWORD, {
              isTwoFactorPending: !0,
              flow: null,
              eventFlow: e4,
              contactPointType: n
            }), rC(dF(a));
            return
          }
          let i = dO(a);
          u5(t, {
            loggedInIdentifier: i
          }), uz(uS.CaaEventStep.PASSWORD, {
            isTwoFactorPending: !1,
            flow: null,
            eventFlow: e4,
            contactPointType: n,
            loggedInIdentifier: i
          }), rk(a, "password")
        } catch {
          u6(t, {
            exceptionType: "requestFailed"
          }), tf(nd)
        } finally {
          rd()
        }
      }, rD = async e => {
        if (ru()) {
          tf(null), eg(e);
          try {
            let t = await rh("select-account", {
              account_id: e,
              ...null == l ? {} : {
                return_to: l
              }
            });
            if (null == t) return;
            if (t.redirected) return void rf(t.url);
            if (!t.ok) {
              let e = await dP(t);
              if (await rm(e) != null) return;
              tf(rg(e, !0));
              return
            }
            let n = await dj(t);
            if ("two_factor_required" === n.registration_state) return void rC(dF(n));
            rk(n)
          } catch (e) {
            dN.error({
              error: e instanceof Error ? e : Error(String(e))
            }, "Native authentication account selection failed"), tf(t6)
          } finally {
            eg(null), rd()
          }
        }
      }, rH = async () => {
        if (ru()) {
          tf(null);
          try {
            await rp()
          } catch (e) {
            dN.error({
              error: e instanceof Error ? e : Error(String(e)),
              tags: (0, ay.hatchSentryTags)(ay.HATCH_SENTRY_SURFACES.AUTH)
            }, "Unable to restart the login after leaving the account chooser"), tf(nm)
          } finally {
            rd()
          }
        }
      }, rF = async (e, t) => {
        if (null != tm || !ru()) return;
        eF(!0);
        let n = "confirm-otp" === e ? uS.CaaEventStep.OTP : uS.CaaEventStep.PASSWORD,
          r = n === uS.CaaEventStep.OTP && "register" === eU;
        ("confirm-otp" === e ? nO() : nj(), r) ? uO(u1(uS.CaaConfirmationState.NEXT, eU, F), !1): (! function(e, t, n = uS.CaaEventFlow.LOGIN_MANUAL, r = null) {
          uO(uD(n, uS.CaaLoginEvent.LOGIN_BUTTON_CLICKED, uS.CaaEventCategory.LOGIN_HOME_PAGE_INTERACTION, e, {
            ...uP(e, t),
            login_credential_type: uL[e]
          }, r), !1)
        }(n, eU, e4, F), function(e, t, n = uS.CaaEventFlow.LOGIN_MANUAL, r = null) {
          uO(uD(n, uS.CaaLoginEvent.LOGIN_ATTEMPT, uS.CaaEventCategory.LOGIN_ATTEMPT, uS.CaaEventStep.CONTACTPOINT, {
            ...uP(e, t),
            login_source: "Login",
            login_credential_type: uL[e]
          }, r), !1)
        }(n, eU, e4, F)), tf(null);
        try {
          let a = "confirm-password" === e ? {
              password: await uh(B, tL.current)
            } : {
              otp_code: t ?? U
            },
            i = await rh(e, {
              ...a,
              ...null == l ? {} : {
                return_to: l
              }
            });
          if (null == i) return void(r ? uO({
            ...u1(uS.CaaConfirmationState.FAILURE, eU, F),
            exception_type: uW
          }, !0) : ! function(e, t, n = uS.CaaEventFlow.LOGIN_MANUAL, r = null) {
            uO({
              ...uD(n, uS.CaaLoginEvent.LOGIN_FAILED, uS.CaaEventCategory.LOGIN_FAILURE, e, uP(e, t), r),
              exception_type: uW
            }, !0)
          }(n, eU, e4, F));
          if (i.redirected) {
            uz(n, {
              isTwoFactorPending: !1,
              flow: eU,
              eventFlow: e4,
              contactPointType: F
            }), rf(i.url);
            return
          }
          if (!i.ok) {
            let e = await dP(i),
              t = (0, uw.getHatchAuthWaterfallId)(),
              a = await rm(e),
              o = a ?? rg(e, !0);
            if (r ? u3(eU, F, {
                exceptionType: e.type,
                exceptionCode: i.status
              }) : uY(n, {
                exceptionType: e.type,
                exceptionMessage: o,
                exceptionCode: i.status,
                flow: eU,
                eventFlow: e4,
                contactPointType: F,
                ...null == a || null == t ? {} : {
                  waterfallId: t
                }
              }), null != a || rv(e)) return;
            tf(o);
            return
          }
          let o = await dj(i),
            s = (0, ui.parseNativeAuthTos)(o.tos);
          if ("two_factor_required" === o.registration_state) {
            uz(n, {
              isTwoFactorPending: !0,
              flow: eU,
              eventFlow: e4,
              contactPointType: F
            }), G(""), rC(dF(o));
            return
          }
          if ("account_selection_required" === o.registration_state) {
            let e = Array.isArray(o.accounts) ? o.accounts.slice(0, 20).flatMap(e => {
              if (!dI(e) || "string" != typeof e.account_id || !Array.isArray(e.profiles)) return [];
              let t = dG(e.profiles);
              return 0 === t.length ? [] : [{
                accountId: e.account_id,
                profiles: t
              }]
            }) : [];
            if (0 === e.length) return void tf(nf);
            G(""), z(""), em(e), eg(null), S("select-account");
            return
          }
          if ("completion_required" === o.registration_state) {
            r && u2(eU, F), I(s), V(!0 === o.requires_name), D("string" == typeof o.masked_contact ? o.masked_contact : M), G(""), rs((0, uw.getHatchAuthRegistrationFlow)() === uS.CaaEventFlow.NTP && (0, uw.getHatchAuthRegistrationEntryPoint)() === uS.CaaEntryPoint.NTP_UPSELL ? uS.CaaNtmSwitchReason.NO_OFFER : void 0);
            return
          }
          if ("ntp_upsell" === o.registration_state) {
            (0, uw.setHatchAuthRegistrationFlow)(uS.CaaEventFlow.NTP), (0, uw.setHatchAuthRegistrationEntryPoint)(uS.CaaEntryPoint.NTP_UPSELL), r && u2(eU, F);
            let e = function(e) {
              if (!uo(e) || !uo(e.account)) return null;
              let t = us(e.account.display_name, 300),
                n = us(e.account.email, 320),
                r = us(e.account.display_label, 320);
              if (null == t && null == n && null == r) return null;
              let a = Array.isArray(e.account.linked_accounts) ? e.account.linked_accounts.slice(0, 10).flatMap(e => {
                var t;
                if (!uo(e)) return [];
                let n = "facebook" === (t = e.platform) || "instagram" === t || "threads" === t || "whatsapp" === t || "frl" === t || "abra" === t ? t : null,
                  r = ul(e.profile_pic_url, ["https:"]),
                  a = us(e.display_name, 300);
                return null == n && null == r && null == a ? [] : [{
                  platform: n,
                  profilePictureUrl: r,
                  displayName: a
                }]
              }) : [];
              return {
                account: {
                  sourceApp: "facebook" === e.account.source_app || "instagram" === e.account.source_app ? e.account.source_app : null,
                  displayName: t,
                  profilePictureUrl: ul(e.account.profile_pic_url, ["https:"]),
                  email: n,
                  displayLabel: r,
                  linkedAccounts: a
                },
                tos: (0, ui.parseNativeAuthTos)(e.tos)
              }
            }(o.ntp_upsell);
            if (I(s), V(!0 === o.requires_name), D("string" == typeof o.masked_contact ? o.masked_contact : M), G(""), null == e) return void rs(uS.CaaNtmSwitchReason.NO_OFFER);
            oo().catch(e => {
              or.retainForBugReport("warn", "Native authentication account-choice preload failed; rendering will retry")
            }), et(e), er(!1), S("ntp-upsell");
            return
          }
          uz(n, {
            isTwoFactorPending: !1,
            flow: eU,
            eventFlow: e4,
            contactPointType: F,
            loggedInIdentifier: dO(o)
          }), rk(o, "confirm-otp" === e ? "otp" : "password")
        } catch (e) {
          r ? u3(eU, F, {
            exceptionType: "requestFailed"
          }) : uY(n, {
            exceptionType: "requestFailed",
            exceptionMessage: t8,
            flow: eU,
            eventFlow: e4,
            contactPointType: F
          }), dN.error({
            error: e instanceof Error ? e : Error(String(e))
          }, "Native authentication completion failed"), tf(t8)
        } finally {
          rd()
        }
      }, rU = async () => {
        if (null == tm && null != ee && null != ee.tos && tE && ru()) {
          uO({
            table: "caa_acquisition_client_events_rl",
            event_name: uS.CAA_REGISTRATION_EVENT_NAME,
            state: uS.CaaRegistrationState.UPSELL_LOGIN_TO_EXISTING_ACCOUNT,
            event_category: uS.CaaEventCategory.REGISTRATION_FUNNEL,
            event_flow: uS.CaaEventFlow.NTP,
            event_step: uS.CaaEventStep.UPSELL_AT_LOGIN,
            entry_point: uS.CaaEntryPoint.NTP_UPSELL,
            ...null == F ? {} : {
              contact_point_type: F
            }
          }, !1), uO({
            table: "caa_acquisition_client_events_rl",
            event_name: uS.CAA_REGISTRATION_EVENT_NAME,
            state: uS.CaaRegistrationState.CREATE_ATTEMPT,
            event_category: uS.CaaEventCategory.REGISTRATION_FUNNEL,
            event_flow: uS.CaaEventFlow.NTP,
            event_step: uS.CaaEventStep.ACCOUNT_CREATION,
            entry_point: uS.CaaEntryPoint.NTP_UPSELL,
            ...null == F ? {} : {
              contact_point_type: F
            }
          }, !1), tf(null);
          try {
            let e = await rh("register-completion-linked", {
              ...null == l ? {} : {
                return_to: l
              }
            });
            if (null == e) return void uO({
              table: "caa_acquisition_client_events_rl",
              event_name: uS.CAA_REGISTRATION_EVENT_NAME,
              state: uS.CaaRegistrationState.CREATE_FAILURE,
              event_category: uS.CaaEventCategory.REGISTRATION_FUNNEL,
              event_flow: uS.CaaEventFlow.NTP,
              event_step: uS.CaaEventStep.ACCOUNT_CREATION,
              entry_point: u$(),
              exception_type: uW
            }, !0);
            if (e.redirected) {
              uQ({
                contactPointType: F
              }), uK({
                flow: uS.CaaEventFlow.NTP
              }), dA(), rf(e.url);
              return
            }
            if (!e.ok) {
              let t = await dP(e);
              if (uZ(t.type), "tosContentVersionMismatch" === t.type) return void await r_();
              if ("registrationBlocked" === t.type) return void rv(t, "stay");
              if (e.status >= 500) return void tf(t3);
              e.status >= 400 && e.status < 500 && er(!0), tf(rg(t));
              return
            }
            let t = await dj(e);
            if ("completion_required" === t.registration_state) {
              let e = "registrationDisabled" === t.linked_registration_failure_type ? "registrationDisabled" : "linkFailed";
              uZ(e), D("string" == typeof t.masked_contact ? t.masked_contact : M), V(!0 === t.requires_name), et(null), rs(uS.CaaNtmSwitchReason.LINK_FAILED);
              return
            }
            let n = dO(t);
            uQ({
              createdUserId: n,
              contactPointType: F
            }), uK({
              flow: uS.CaaEventFlow.NTP,
              loggedInIdentifier: n
            }), dA(), rk(t)
          } catch (e) {
            uZ("requestFailed"), dN.error({
              error: e instanceof Error ? e : Error(String(e)),
              tags: (0, ay.hatchSentryTags)(ay.HATCH_SENTRY_SURFACES.AUTH)
            }, "Native linked account registration failed"), tf(t3)
          } finally {
            rd()
          }
        }
      }, rG = async () => {
        if (null == tm && null != ee && ru()) {
          uO({
            table: "caa_acquisition_client_events_rl",
            event_name: uS.CAA_REGISTRATION_EVENT_NAME,
            state: uS.CaaRegistrationState.SWITCH_TO_NTM,
            event_category: uS.CaaEventCategory.REGISTRATION_FUNNEL,
            event_flow: uS.CaaEventFlow.NTP,
            event_step: uS.CaaEventStep.UPSELL_AT_LOGIN,
            entry_point: uS.CaaEntryPoint.NTP_UPSELL
          }, !1), tf(null);
          try {
            let e = await rh("decline-ntp-upsell", {});
            if (null == e) return;
            if (!e.ok) {
              let t = await dP(e);
              if ("registrationBlocked" === t.type) return void rv(t, "stay");
              tf(rg(t));
              return
            }
            let t = await dj(e);
            if ("completion_required" !== t.registration_state) throw Error("Native account selection returned an invalid state");
            D("string" == typeof t.masked_contact ? t.masked_contact : M), V(!0 === t.requires_name), et(null), er(!1), rs(uS.CaaNtmSwitchReason.UPSELL_DECLINED)
          } catch (e) {
            dN.error({
              error: e instanceof Error ? e : Error(String(e)),
              tags: (0, ay.hatchSentryTags)(ay.HATCH_SENTRY_SURFACES.AUTH)
            }, "Native linked account offer decline failed"), tf(t7)
          } finally {
            rd()
          }
        }
      }, rB = async e => {
        let t = K.trim(),
          n = $.trim();
        if (null == tm && 10 === Y.length && (!q || "" !== t && "" !== n) && (!e || 0 !== ea.length) && null != R && tC && ru()) {
          e ? nq() : uO(uX(uS.CaaRegistrationState.BIRTHDAY_NEXT, uS.CaaEventStep.BIRTHDAY), !1), uO({
            ...uX(uS.CaaRegistrationState.CREATE_ATTEMPT, uS.CaaEventStep.ACCOUNT_CREATION),
            ...null == F ? {} : {
              contact_point_type: F
            }
          }, !1), tf(null);
          try {
            let r = e ? await uh(ea, tL.current) : null,
              a = await rh("register-completion", {
                date_of_birth: Y,
                ...q ? {
                  first_name: t,
                  last_name: n
                } : {},
                tos_content_version: R.contentVersion,
                ...null == r ? {} : {
                  password: r
                },
                ...null == l ? {} : {
                  return_to: l
                }
              });
            if (null == a) return;
            if (a.redirected) {
              uJ({
                contactPointType: F
              }), uK({
                flow: uS.CaaEventFlow.NTM
              }), dA(), rf(a.url);
              return
            }
            if (!a.ok) {
              let t = await dP(a);
              if (u0(t.type), "tosContentVersionMismatch" === t.type) return void await r_();
              if (await rm(t) != null) return;
              if ("invalidName" === t.type) return void rv(t, "stay");
              if (rv(t)) return;
              if (!e && "passwordRequired" === t.type) return void S("create-password");
              tf(rg(t));
              return
            }
            let i = await dj(a),
              o = dO(i);
            uJ({
              createdUserId: o,
              contactPointType: F
            }), uK({
              flow: uS.CaaEventFlow.NTM,
              loggedInIdentifier: o
            }), dA(), rk(i)
          } catch (t) {
            u0("requestFailed"), dN.error({
              error: t instanceof Error ? t : Error(String(t)),
              attemptMode: e ? "password" : "passwordless",
              tags: (0, ay.hatchSentryTags)(ay.HATCH_SENTRY_SURFACES.AUTH)
            }, "Native account registration failed"), tf(t9)
          } finally {
            rd()
          }
        }
      }, rz = async e => {
        if (ru()) {
          uO({
            table: "caa_login_client_events_rl",
            event_name: uS.CaaLoginEvent.AYMH_LOGIN_CLICKED,
            event_category: uS.CaaEventCategory.INTERACTION,
            event_flow: uS.CaaEventFlow.LOGIN,
            event_step: uS.CaaEventStep.LANDING
          }, !1), tI.current = !0, tz.current = !0, eJ(e.accountCuid), eA(!1), tf(null);
          try {
            let t = t => rh("saved-account-otp", {
                account_cuid: e.accountCuid
              }, t),
              n = await t();
            if (null == n) return;
            let r = null;
            if (!n.ok && (r = await dP(n), "authFlowExpired" === r.type || "csrfFailed" === r.type || "session_invalid" === r.type)) {
              (0, ay.captureHatchMessage)(ay.HATCH_SENTRY_SURFACES.AUTH, "Saved-account authentication attempt expired; starting recovery", {
                level: "warning",
                tags: {
                  problemType: r.type
                }
              });
              let a = r;
              try {
                let a = await rp();
                if (eJ(e.accountCuid), n = await t(a), null == n) return;
                r = n.ok ? null : await dP(n)
              } catch (e) {
                dN.error({
                  error: e instanceof Error ? e : Error(String(e)),
                  problemType: a.type,
                  tags: (0, ay.hatchSentryTags)(ay.HATCH_SENTRY_SURFACES.AUTH, {
                    problemType: a.type
                  })
                }, "Unable to recover an expired saved-account authentication attempt"), tf(nm);
                return
              }
            }
            if (!n.ok && null != r) {
              if ("authFlowExpired" === r.type || "csrfFailed" === r.type || "session_invalid" === r.type) {
                dN.error({
                  error: Error("Saved-account authentication expired after a fresh restart"),
                  problemType: r.type,
                  tags: (0, ay.hatchSentryTags)(ay.HATCH_SENTRY_SURFACES.AUTH, {
                    problemType: r.type
                  })
                }, "Unable to recover an expired saved-account authentication attempt"), tf(nm);
                return
              }
              "savedAccountUnavailable" === r.type && eW(t => t.filter(t => t.accountCuid !== e.accountCuid)), "contactPointIsTwoFactorMethod" === r.type && S("contact"), tf(rg(r));
              return
            }
            let a = await dj(n);
            if (ez(!1 !== a.password_login_available), eG(dl(a.flow)), e1(!0), G(""), "password_required" === a.registration_state) {
              uB(null, uS.CaaEventFlow.AYMH), D(e.maskedContact), e6(!0), S("password");
              return
            }
            D(e.maskedContact), S("otp")
          } catch {
            tf(ne)
          } finally {
            eJ(null), rd()
          }
        }
      }, rY = async e => {
        if (ru()) {
          tf(null);
          try {
            let t = await rh("remove-saved-account", {
              account_cuid: e.accountCuid
            });
            if (null == t) return;
            if (!t.ok) return void tf(rg(await dP(t)));
            let n = eY.filter(t => t.accountCuid !== e.accountCuid);
            eW(n), 0 === n.length && 0 === v.length && S("contact")
          } catch {
            tf(nt)
          } finally {
            rd()
          }
        }
      }, rW = "contact" === C && null != eR && j.trim() === eR, rq = null != td && !rW, rV = async (e, t) => {
        if (null != tm || null == N || tN.current || tA.current) return;
        tA.current = !0, tI.current = !0, to(e), eA(!1), tf(null);
        let n = new AbortController;
        tM.current = n;
        let r = (0, uw.getHatchAuthWaterfallId)();
        null != r && function(e) {
          try {
            sessionStorage.setItem(dx, e)
          } catch {}
        }(r);
        let a = (0, uw.getHatchAuthClientNameableEntryPoint)();
        try {
          sessionStorage.setItem(dk, a)
        } catch {}
        try {
          sessionStorage.setItem(dw, t)
        } catch {}
        let i = {
          completionId: null,
          stage: "preparation",
          httpStatus: null
        };
        try {
          await de(e, l, {
            signal: n.signal,
            caaRegEntryPoint: a,
            ...null == r ? {} : {
              waterfallId: r
            },
            onProgress: e => {
              i = e
            }
          })
        } catch (o) {
          if (dC(), n.signal.aborted && o === n.signal.reason) return;
          "ntp_join" === t ? uZ("requestFailed") : n.signal.aborted ? uG(e, "requestFailed") : uG(e, "requestFailed", nn);
          let a = {
            ...i,
            provider: e,
            waterfallId: r,
            purpose: t
          };
          dN.error({
            error: o instanceof Error ? o : Error(String(o)),
            ...a,
            errorDisplayRequested: !n.signal.aborted,
            tags: (0, ay.hatchSentryTags)(ay.HATCH_SENTRY_SURFACES.AUTH, {
              stage: i.stage
            })
          }, "Unable to start provider SSO"), n.signal.aborted || tf(nn, a)
        } finally {
          tM.current === n && (tM.current = null), tN.current || (tA.current = !1, to(null))
        }
      }, rK = async (e, t, n, r, a) => {
        tA.current = !0, tI.current = !0, to(e), tf(null);
        let i = (0, uw.getHatchAuthWaterfallId)(),
          o = {
            completionId: n,
            stage: "provider_callback",
            httpStatus: null
          },
          s = !1;
        try {
          if ("error" === t) throw Error("Provider SSO reported an error outcome");
          let l = null;
          if ("credentials" === t || "completion" === t) {
            o.stage = "completion";
            let c = await fetch("/api/auth/provider-sso/complete", {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
                ...null == i ? {} : {
                  [uw.HATCH_WATERFALL_ID_HEADER]: i
                }
              },
              body: JSON.stringify({
                completion_id: n
              })
            });
            if (o.httpStatus = c.status, !c.ok) throw Error(`Provider SSO completion failed: ${c.status}`);
            let u = await dj(c);
            if ("credentials" === t) {
              let t = u.frl_access_token;
              if ("string" != typeof t || 0 === t.length) throw Error("Provider SSO completion returned an invalid response");
              let n = "string" == typeof u.frl_account_id && u.frl_account_id.length > 0 ? u.frl_account_id : null;
              "ntp_join" === a ? (uQ({
                createdUserId: n,
                ...null == F ? {} : {
                  contactPointType: F
                }
              }), uK({
                flow: uS.CaaEventFlow.NTP,
                loggedInIdentifier: n
              }), dA()) : "aymh_login" === a && uU(e, {
                loggedInIdentifier: n
              }), tT.current = !0, tw(!0), s = !0, o.stage = "auth_meta_session", o.httpStatus = null, rk({
                ...u,
                redirect_to: r,
                auth_meta_session: {
                  frl_access_token: t
                }
              });
              return
            }
            l = (0, ui.parseNativeAuthTos)(u.tos)
          }
          o.stage = "continuation", o.httpStatus = null;
          let c = await fetch(`${dS}/bootstrap?resume_provider_completion=1`, {
            cache: "no-store"
          });
          if (o.httpStatus = c.status, !c.ok) throw Error(`Provider SSO continuation failed: ${c.status}`);
          let u = await dj(c),
            d = u.csrf_token;
          if ("string" != typeof d) throw Error("Provider SSO continuation returned an invalid state");
          if (A(d), "two_factor" === t && "two_factor_required" === u.flow_state) {
            "aymh_login" === a && (uU(e, {
              isTwoFactorPending: !0
            }), e3(!0)), rC(dF(u));
            return
          }
          if ("completion" === t && "completion_required" === u.flow_state) {
            tL.current = dY(u), I(l);
            let e = "string" == typeof u.masked_contact ? u.masked_contact : null;
            D(e), "ntp_join" === a ? (uZ("completionRequired"), rs(uS.CaaNtmSwitchReason.SSO_COMPLETION_REQUIRED, dD(e))) : rs();
            return
          }
          if ("completion" === t && "registration_blocked" === u.flow_state) {
            uZ("registrationBlocked"), rv({
              type: "registrationBlocked"
            });
            return
          }
          throw Error("Provider SSO continuation returned an invalid state")
        } catch (n) {
          "ntp_join" === a ? uZ("requestFailed") : "aymh_login" === a && uG(e, "requestFailed", nn);
          let t = {
            ...o,
            provider: e,
            waterfallId: i,
            purpose: a
          };
          dN.error({
            error: n instanceof Error ? n : Error(String(n)),
            ...t,
            errorDisplayRequested: !0,
            tags: (0, ay.hatchSentryTags)(ay.HATCH_SENTRY_SURFACES.AUTH, {
              stage: o.stage
            })
          }, "Unable to resume provider SSO"), tf(nn, t)
        } finally {
          t$(!1), tN.current || (tA.current = !1, to(null)), s && rd()
        }
      }, rX = eQ.flatMap((e, t) => e.hasMetaAi || null == e.loginSourceApp || "frl" === e.loginSourceApp ? [] : [{
        id: `${e.loginSourceApp}-${t}`,
        displayLabel: da(e),
        migration: e.migration,
        sourceApp: e.loginSourceApp,
        pieces: di(e).map(e => ({
          platform: e.platform,
          profilePictureUrl: e.profilePictureUrl,
          displayName: e.displayName
        }))
      }]), r$ = !f && (eV.length > 0 || E || eQ.length > 0), rQ = tV || E || tX, rZ = "accounts" === C && r$, rJ = "contact" === C || "accounts" === C && !rZ, r0 = "otp" === C, r1 = r0 && "register" === eU && !e0, r4 = !eN && !eB && "login" === eU, r5 = "password" === C, r6 = "ntp-upsell" === C && null != ee, r8 = "birthday" === C, r7 = "create-password" === C, r9 = q && (r8 || r7), ae = q && ("" === K.trim() || "" === $.trim()), at = "two-factor" === C, an = at && "select" === eu, ar = at && "code" === eu, aa = "select-account" === C, ai = rJ && tt, ao = "recovery-choose-contact-point" === C, as = "recovery-code" === C, al = "recovery-select-account" === C, ac = "recovery-set-password" === C, au = ao || as || al || ac, ad = r0 || r5 || r7 || at || aa || au || r8 || rZ && e8 || r6 || ai || rJ && r$ && (e9 || !tr), af = !f && (rQ || (rZ || rJ) && !ad || "platform" === o && rJ && !ai), ah = (r0 || r5 || at) && tx && eH, ap = eo.find(e => e.methodId === el) ?? null, am = e0 ? M : H, a_ = H?.includes("@") === !0, ag = ap?.methodType === "SMS", av = ag ? ap.label.replace(/^Send SMS to\s+/i, "") : null;
    (0, m.useEffect)(() => {
      r7 && tj.current?.focus()
    }, [r7]), (0, m.useEffect)(() => {
      !rJ || rQ || ai || uO(uM(uS.CaaLoginEvent.CONTACTPOINT_PAGE_SHOWN, uS.CaaEventCategory.CONTACTPOINT_PAGE_INTERACTION, uS.CaaEventStep.CONTACTPOINT), !1)
    }, [rJ, rQ, ai]);
    let ab = rZ && !rQ && e$,
      ax = (0, m.useRef)(ab);
    ax.current = ab, (0, m.useEffect)(() => {
      ab && ((0, uw.setHatchAuthLandingEntryPoint)(uS.CaaEntryPoint.AYMH), uO({
        table: "caa_login_client_events_rl",
        event_name: uS.CaaLoginEvent.AYMH_PAGE_SHOWN,
        event_category: uS.CaaEventCategory.IMPRESSION,
        event_flow: uS.CaaEventFlow.LOGIN,
        event_step: uS.CaaEventStep.LANDING
      }, !1))
    }, [ab]);
    let ak = rZ && !rQ && !e$ && null != b && eQ.some(e => !e.hasMetaAi);
    (0, m.useEffect)(() => {
      ak && (ax.current || (0, uw.setHatchAuthLandingEntryPoint)(uS.CaaEntryPoint.NTP_LANDING), uO({
        table: "caa_login_client_events_rl",
        event_name: uS.CaaLoginEvent.NTP_LANDING_START,
        event_category: uS.CaaEventCategory.LANDING_PAGE_INIT,
        event_flow: uS.CaaEventFlow.LOGIN,
        event_step: uS.CaaEventStep.LANDING
      }, !1))
    }, [ak]), (0, m.useEffect)(() => {
      r6 && uO({
        table: "caa_acquisition_client_events_rl",
        event_name: uS.CAA_REGISTRATION_EVENT_NAME,
        state: uS.CaaRegistrationState.UPSELL_START,
        event_category: uS.CaaEventCategory.REGISTRATION_FUNNEL,
        event_flow: uS.CaaEventFlow.NTP,
        event_step: uS.CaaEventStep.UPSELL_AT_LOGIN,
        entry_point: uS.CaaEntryPoint.NTP_UPSELL,
        ...null == F ? {} : {
          contact_point_type: F
        }
      }, !1)
    }, [F, r6]), (0, m.useEffect)(() => {
      if (r0) {
        if ("register" === eU) {
          uO({
            ...uX(uS.CaaRegistrationState.REGISTRATION_START, uS.CaaEventStep.CONTACTPOINT),
            ...null == F ? {} : {
              contact_point_type: F
            },
            extra_client_data: {
              flow_source: uj(eU)
            }
          }, !1), uO(u1(uS.CaaConfirmationState.START, eU, F), !1);
          return
        }
        uB(eU, e4, F),
          function(e, t = uS.CaaEventFlow.LOGIN_MANUAL, n = null) {
            uO(uD(t, uS.CaaLoginEvent.OTP_PAGE_SHOWN, uS.CaaEventCategory.LOGIN_HOME_PAGE_INTERACTION, uS.CaaEventStep.OTP, uP(uS.CaaEventStep.OTP, e), n), !1)
          }(eU, e4, F)
      }
    }, [e4, r0]), (0, m.useEffect)(() => {
      r5 && function(e = uS.CaaEventFlow.LOGIN_MANUAL, t = null) {
        uO(uD(e, uS.CaaLoginEvent.PASSWORD_PAGE_SHOWN, uS.CaaEventCategory.LOGIN_HOME_PAGE_INTERACTION, uS.CaaEventStep.PASSWORD, void 0, t), !1)
      }(e4, F)
    }, [e4, r5]), (0, m.useEffect)(() => {
      r8 && uO(uX(uS.CaaRegistrationState.BIRTHDAY_START, uS.CaaEventStep.BIRTHDAY), !1)
    }, [r8]), (0, m.useEffect)(() => {
      tx || eF(!1)
    }, [tx]);
    let aC = tx && eH ? rJ ? r.fbs._("Sending code…", null, {
        hk: "1HeoUw"
      }) : r5 ? r.fbs._("Logging in…", null, {
        hk: "1CEbMV"
      }) : r8 || r7 ? r.fbs._("Creating account…", null, {
        hk: "9HFN1"
      }) : ac ? r.fbs._("Resetting password…", null, {
        hk: "3xBjBA"
      }) : an ? r.fbs._("Continuing…", null, {
        hk: "3452Gy"
      }) : r.fbs._("Confirming…", null, {
        hk: "1PTPUT"
      }) : rJ ? r.fbs._("Continue", null, {
        hk: "1Im2qd"
      }) : r0 ? r1 ? r.fbs._("Confirm", null, {
        hk: "42j80k"
      }) : r.fbs._("Next", null, {
        hk: "2q2P5R"
      }) : r5 ? r.fbs._("Next", null, {
        hk: "3FrOAj"
      }) : r8 ? r.fbs._("Confirm", null, {
        hk: "1iFJsQ"
      }) : an ? r.fbs._("Next", null, {
        hk: "1EFPn7"
      }) : ar ? r.fbs._("Next", null, {
        hk: "3pLPbE"
      }) : as ? r.fbs._("Next", null, {
        hk: "1XRmRi"
      }) : ac ? r.fbs._("Reset password", null, {
        hk: "WYuUP"
      }) : r.fbs._("Create account", null, {
        hk: "2Qxc3u"
      }),
      aT = tc?.providerSsoFailure ?? null,
      aN = null != td ? (0, t.jsx)(dE, {
        providerSsoFailure: aT,
        id: tW,
        className: (0, r3.cn)("text-caption-1 text-text-destructive w-full px-1.5 text-center", rJ ? "mt-2" : "-mt-3.5 -mb-1"),
        children: td
      }, aT?.completionId ?? "auth_error") : null,
      aA = "work" === e && af && "default" === o ? "h2" : "h1",
      aR = ad ? (0, t.jsx)(iB.IconButton, {
        ref: nF,
        type: "button",
        icon: up.default,
        iconClassName: "text-icon-primary",
        label: r.fbs._("Back", null, {
          hk: "2gPYCJ"
        }),
        variant: "elevated",
        size: "36",
        disabled: tx,
        className: (0, r3.cn)("size-11", "platform" !== o && (af ? "absolute start-0 top-0" : "fixed start-4 top-4 md:start-9 md:top-8")),
        onClick: () => {
          if (nU(), tf(null), rZ && e8) return void e7(!1);
          if (aa) return void rH();
          if (ar) {
            eh(""), ey(!1), ed("select");
            return
          }
          if (r6) {
            et(null), er(!1), S("contact");
            return
          }
          if (ac && eC.length > 0) return void S("recovery-select-account");
          if (as && eE.length > 0) {
            ek(""), rA();
            return
          }
          if (ai) {
            tn(!1), S(eO);
            return
          }
          if (rJ && te(!1), (r0 || r5 && e5) && e0) {
            e1(!1), S("accounts");
            return
          }
          at && e3(!1), S(r5 ? e5 ? "contact" : "otp" : au ? eO : r7 ? "birthday" : at ? nw.length > 0 || v.length > 0 ? "accounts" : "contact" : rJ ? "accounts" : "contact")
        }
      }) : null,
      aI = r0 || r5 || at ? (0, t.jsx)(i1.HatchLottieIcon, {
        src: uy.MUSE_BRAND_LOADER_MIDDLE_OUT_ANIMATION,
        size: 71,
        loadAnimation: !p,
        playing: ah && !p,
        markerLoop: uy.MUSE_BRAND_LOADER_MARKERS,
        className: "absolute inset-0",
        fallbackNode: (0, t.jsx)("img", {
          src: uy.MUSE_LOGO_SVG_URL,
          alt: "",
          "aria-hidden": "true",
          "data-testid": "native-auth-brand-logo",
          className: "size-full object-contain"
        })
      }) : (0, t.jsx)("img", {
        src: uy.MUSE_LOGO_SVG_URL,
        alt: "",
        "aria-hidden": "true",
        "data-testid": "native-auth-brand-logo",
        className: "absolute inset-0 size-full object-contain"
      });
    return (0, t.jsxs)(ua, {
      audience: e,
      landingPage: i,
      backButton: "platform" === o ? aR : null,
      entrySurface: o,
      returnTo: l,
      showAppDownloads: s,
      impressionRef: nC,
      isLandingEntryState: af,
      hasDenseAccountList: ny >= nv,
      onFocusAuth: () => {
        rJ ? tB.current?.focus({
          preventScroll: !0
        }) : tG.current?.focus({
          preventScroll: !0
        })
      },
      overlay: (0, t.jsxs)(t.Fragment, {
        children: [(0, t.jsx)(ok, {
          isRestarting: tg,
          message: tm?.message ?? null,
          onDismiss: ry,
          onReturnFocus: () => {
            "name" === tF.current ? tP.current?.focus() : tG.current?.focus()
          },
          rejectionId: tm?.id ?? null,
          reason: tm?.reason ?? "underageRegistration",
          restartError: tm?.restartError ?? null,
          title: tm?.title ?? null
        }), (0, t.jsx)(oO, {
          provider: ty?.provider ?? null,
          recoveryId: ty?.id ?? null,
          onDismiss: () => tb(null),
          onReturnFocus: () => tG.current?.focus()
        })]
      }),
      children: [(r0 || r5 || at) && (0, t.jsx)("p", {
        role: "status",
        "aria-live": "polite",
        className: "sr-only",
        children: ah ? r0 || ar ? r.fbt._("Confirming code…", null, {
          hk: "37gIBy"
        }) : an ? aC : r.fbt._("Logging in…", null, {
          hk: "3CeGj7"
        }) : null
      }), (0, t.jsxs)("section", {
        "data-testid": "native-auth-access-pane",
        "aria-busy": ah || void 0,
        className: (0, r3.cn)("relative flex w-full min-w-0 flex-col items-center", "platform" === o ? (0, r3.cn)("justify-start", af ? "max-w-platform-auth" : (0, r3.cn)("max-w-[361px] px-4", r9 ? "md:max-w-160 md:px-10" : "desktop:px-10 md:max-w-[470px]")) : (0, r3.cn)(af ? "max-w-102 flex-1" : r9 ? "max-w-[361px] justify-start px-4 pt-[15dvh] pb-12 md:max-w-160 md:px-10 md:pt-25" : r0 || r8 || r5 ? "desktop:px-10 max-w-[361px] justify-start px-4 pt-[15dvh] pb-12 md:max-w-[470px]" : "desktop:px-10 max-w-[361px] justify-center px-4 py-12 md:max-w-[470px]", !af && "min-h-dvh", r6 && "flex-1 md:flex-none")),
        children: ["platform" !== o && aR, !af && ("platform" === o ? (0, t.jsx)(oL.PlatformAuthBrandFrame, {
          children: aI
        }) : (0, t.jsx)("div", {
          "aria-hidden": "true",
          "data-testid": "native-auth-brand-frame",
          className: (0, r3.cn)("relative", r6 ? "mb-4 size-12" : r9 ? "mb-10 size-16" : "mb-[23px] size-[71px]"),
          children: aI
        })), (0, t.jsx)(aA, {
          ref: tG,
          tabIndex: -1,
          className: (0, r3.cn)("w-full text-center", r6 ? "text-title-2-emphasized text-text-primary max-w-[300px]" : af ? "platform" === o ? "sr-only" : "text-body text-text-secondary flex h-11 items-center justify-center" : r9 ? "text-title-1-medium text-text-primary" : "text-title-2-medium text-text-primary mb-3"),
          children: ai ? r.fbs._("Find your account", null, {
            hk: "2dssUP"
          }) : rZ || rJ ? f ? r.fbs._("Welcome to Muse", null, {
            hk: "1XKPve"
          }) : r.fbs._("Log in or create an account", null, {
            hk: "2swNWQ"
          }) : r5 ? r.fbs._("Enter your password", null, {
            hk: "3Fjrl8"
          }) : r6 ? r.fbs._("Choose an account to continue", null, {
            hk: "Z6wvt"
          }) : r9 ? r.fbs._("Finish creating your account", null, {
            hk: "2LPiDp"
          }) : r8 ? r.fbs._("What’s your birthday?", null, {
            hk: "1saYdJ"
          }) : r7 ? r.fbs._("Create a password", null, {
            hk: "jZMch"
          }) : ar ? ap?.methodType === "TOTP" ? r.fbs._("Go to your authenticator app", null, {
            hk: "1Pn3nP"
          }) : ag ? r.fbs._("Check your text messages", null, {
            hk: "27lLHM"
          }) : ap?.methodType === "RECOVERY_CODES" ? r.fbs._("Enter a recovery code", null, {
            hk: "12BQ45"
          }) : r.fbs._("Confirm your Meta Account", null, {
            hk: "3pAYee"
          }) : at ? r.fbs._("Confirm your Meta Account", null, {
            hk: "3pAYee"
          }) : aa ? r.fbs._("Select an account to continue", null, {
            hk: "46zWES"
          }) : ao ? r.fbs._("Choose where to send your code", null, {
            hk: "2YRDz7"
          }) : al ? r.fbs._("Choose an account", null, {
            hk: "2aImt8"
          }) : ac ? r.fbs._("Create a new password", null, {
            hk: "1e0FWN"
          }) : as ? r.fbs._("Confirm your account", null, {
            hk: "2ZX7CR"
          }) : r.fbs._("Enter your code", null, {
            hk: "1zkCiv"
          })
        }), r6 && (0, t.jsx)("p", {
          className: "text-subheadline text-text-primary mt-4 w-full text-center text-[15px]",
          children: r.fbt._("We found a Meta Account associated with your info. You can use {productName} with your existing account, or create a new one instead.", [r.fbt._param("productName", a.LOGGED_OUT_PRODUCT_BRAND.shortName)], {
            hk: "1LIcY5"
          })
        }), an && (0, t.jsx)("p", {
          className: "text-subheadline text-text-secondary mt-4 max-w-[361px] text-center text-[15px]",
          children: r.fbs._("We need to authenticate your account. Please select a method below.", null, {
            hk: "1IkdVE"
          })
        }), ar && null != ap && (0, t.jsx)("p", {
          className: "text-subheadline text-text-secondary mt-4 max-w-[361px] text-center text-[15px]",
          children: ag && null != av ? r.fbt._("Enter the code we sent to {destination}. {resend code button}", [r.fbt._param("destination", av), r.fbt._param("resend code button", (0, t.jsx)("button", {
            ref: n5,
            type: "button",
            className: "group contents",
            disabled: tx || ev,
            onClick: () => void rT(),
            children: (0, t.jsx)("span", {
              className: "text-subheadline-medium text-hatch-accent group-focus-visible:outline-hatch-accent rounded-4 cursor-pointer text-[15px] decoration-1 underline-offset-2 group-focus-visible:outline group-disabled:cursor-not-allowed hover:underline",
              children: "Resend code"
            })
          }))], {
            hk: "1Burp"
          }) : "TOTP" === ap.methodType ? r.fbs._("Enter the 6-digit code for this account from the two-factor authenticator app you set up (such as Duo Mobile or Google Authenticator)", null, {
            hk: "1dJGH7"
          }) : "RECOVERY_CODES" === ap.methodType ? r.fbs._("A list of recovery codes is shown when you set up two-factor authenticator. If you saved them, you might have them as a screenshot, a downloaded file or a note.", null, {
            hk: "va59a"
          }) : r.fbs._("Enter your recovery code.", null, {
            hk: "2zoSkw"
          })
        }), as && (0, t.jsx)("p", {
          className: "text-body text-text-primary mt-4 w-full text-center",
          children: null == eb ? r.fbt._("We sent you a code. Enter that code to confirm your account.", null, {
            hk: "5oh3k"
          }) : r.fbt._("We sent a code to {destination}. Enter that code to confirm your account.", [r.fbt._param("destination", eb)], {
            hk: "2PJZtC"
          })
        }), aa && (0, t.jsx)("p", {
          className: "text-subheadline text-text-primary mt-4 w-full text-center text-[15px]",
          children: a_ ? r.fbs._("Your email matches multiple accounts.", null, {
            hk: "4kxIGh"
          }) : r.fbs._("Your mobile number matches multiple accounts.", null, {
            hk: "1d1C4u"
          })
        }), ao && (0, t.jsx)("p", {
          className: "text-body text-text-primary mt-4 w-full text-center",
          children: j.trim().length > 0 ? r.fbs._("We can't send a recovery code to the mobile number you entered. Pick another way to get your code.", null, {
            hk: "4dhVZ1"
          }) : r.fbs._("We can't send a recovery code to this account's mobile number. Pick another way to get your code.", null, {
            hk: "1mkf9L"
          })
        }), al && (0, t.jsx)("p", {
          className: "text-body text-text-primary mt-4 w-full text-center",
          children: r.fbs._("More than one account uses this contact. Choose the one to reset.", null, {
            hk: "4i0Rx3"
          })
        }), ac && (0, t.jsx)("p", {
          className: "text-body text-text-primary mt-4 w-full text-center",
          children: r.fbs._("Choose a new password for your account.", null, {
            hk: "1Io8YK"
          })
        }), r5 && (0, t.jsx)("p", {
          className: "text-subheadline text-text-secondary mt-4 w-full text-center text-[15px]",
          children: null == am ? r.fbs._("To log in, enter the password associated with this account.", null, {
            hk: "35hTAK"
          }) : r.fbt._("To log in, enter the password associated with {account}.", [r.fbt._param("account", am)], {
            hk: "2XtBOA"
          })
        }), r0 && (0, t.jsxs)("p", {
          className: "text-subheadline text-text-secondary mt-4 max-w-[361px] text-center text-[15px]",
          children: [e0 && null == am ? r.fbs._("To log in, enter the code we sent for this account.", null, {
            hk: "1KikB2"
          }) : r1 ? null == am ? r.fbs._("To confirm your account, enter the 6-digit code we sent.", null, {
            hk: "40K1RK"
          }) : r.fbt._("To confirm your account, enter the 6-digit code we sent to {destination}. {resend code button}", [r.fbt._param("destination", am), r.fbt._param("resend code button", (0, t.jsx)("button", {
            ref: nG,
            type: "button",
            className: "group contents",
            disabled: tx || !e0 && 0 === j.trim().length,
            onClick: () => void rw(),
            children: (0, t.jsx)("span", {
              className: "text-subheadline-medium text-hatch-accent cursor-pointer text-[15px] group-enabled:group-hover:underline group-disabled:cursor-not-allowed group-disabled:opacity-50",
              children: r.fbs._("Resend code", null, {
                hk: "3DhyFg"
              })
            })
          }))], {
            hk: "3iFqNm"
          }) : null == am ? r.fbs._("To log in, enter the code we sent.", null, {
            hk: "lxZZR"
          }) : r.fbt._("To log in, enter the code we sent to {destination}. {resend code button}", [r.fbt._param("destination", am), r.fbt._param("resend code button", (0, t.jsx)("button", {
            ref: nG,
            type: "button",
            className: "group contents",
            disabled: tx || !e0 && 0 === j.trim().length,
            onClick: () => void rw(),
            children: (0, t.jsx)("span", {
              className: "text-subheadline-medium text-hatch-accent group-focus-visible:outline-hatch-accent rounded-4 cursor-pointer text-[15px] decoration-1 underline-offset-2 group-focus-visible:outline group-disabled:cursor-not-allowed group-disabled:opacity-50 hover:underline",
              children: "Resend code"
            })
          }))], {
            hk: "20ORB"
          }), null == am && (0, t.jsx)("button", {
            ref: nG,
            type: "button",
            className: "text-subheadline-medium text-hatch-accent focus-visible:outline-hatch-accent rounded-4 ms-1 cursor-pointer text-[15px] decoration-1 underline-offset-2 outline-offset-2 focus-visible:outline enabled:hover:underline disabled:cursor-not-allowed disabled:opacity-50",
            disabled: tx || !e0 && 0 === j.trim().length,
            onClick: () => void rw(),
            children: r.fbs._("Resend code", null, {
              hk: "3w6aig"
            })
          })]
        }), r8 && (0, t.jsx)("p", {
          className: (0, r3.cn)("text-subheadline-large text-text-secondary text-center", r9 ? "mt-2 max-w-140" : "mt-4 max-w-[356px]"),
          children: r.fbt._("This information won’t be public. {birthday help link}", [r.fbt._param("birthday help link", (0, t.jsx)(iW.EctoLink, {
            ref: nV,
            href: "https://www.meta.com/help/quest/1178386633001549/",
            variant: "primary",
            textStyle: "subheadline-large",
            className: (0, r3.cn)("whitespace-normal [&>span]:inline", r9 ? "inline" : "block"),
            onClick: nK,
            children: r.fbt._("Why do I need to provide my birthday?", null, {
              hk: "4jVA3P"
            })
          }))], {
            hk: "3hNOX0"
          })
        }), r7 && (0, t.jsx)("p", {
          className: "text-body text-text-primary mt-4 w-full text-center",
          children: r.fbs._("Use this password to log in to your new Meta account.", null, {
            hk: "3tN83A"
          })
        }), rZ && !rQ && (0, t.jsxs)("div", {
          className: "mt-1.5 flex w-full flex-col gap-4",
          children: [(0, t.jsxs)("div", {
            ref: (0, ux.default)(nx.length > 0 ? nS : void 0, nw.length > 0 ? nE : void 0),
            "data-testid": "native-auth-account-list",
            className: (0, r3.cn)("bg-fill-secondary-elevated rounded-22 flex flex-col overflow-x-hidden p-2", af ? "max-h-96 overflow-y-auto" : "overflow-y-hidden"),
            children: [nx.map((e, n) => (0, t.jsx)(aP.EctoErrorBoundary, {
              surface: ay.HATCH_SENTRY_SURFACES.AUTH,
              children: (0, t.jsx)(ds, {
                card: e,
                disabled: tx || null == N || null != ti,
                isPending: "frl" === e.loginSourceApp ? ts === n : null != e.loginSourceApp && ti === e.loginSourceApp,
                isSingleRow: nk,
                showDivider: n < nx.length - 1 || nw.length > 0 || nb || E && 0 === eV.length,
                onSelect: t => {
                  if ("frl" === t) return void(null == tm && !tN.current && !tA.current && (tI.current = !0, tT.current = !0, tw(!0), tl(n), rf(null == l || "" === l ? "/api/oidc/start" : `/api/oidc/start?return_to=${encodeURIComponent(l)}`)));
                  if ((0, uw.setHatchAuthLandingEntryPoint)(ab ? uS.CaaEntryPoint.AYMH : uS.CaaEntryPoint.NTP_LANDING), e.hasMetaAi) {
                    let e;
                    e = uF(t), uO({
                      table: "caa_login_client_events_rl",
                      event_name: uS.CaaLoginEvent.LOGIN_START,
                      event_category: uS.CaaEventCategory.LOGIN_HOME_PAGE_INIT,
                      event_flow: uS.CaaEventFlow.AYMH,
                      event_step: uS.CaaEventStep.LANDING,
                      extra_client_data: e
                    }, !1), uO({
                      table: "caa_login_client_events_rl",
                      event_name: uS.CaaLoginEvent.AYMH_LOGIN_CLICKED,
                      event_category: uS.CaaEventCategory.INTERACTION,
                      event_flow: uS.CaaEventFlow.LOGIN,
                      event_step: uS.CaaEventStep.LANDING,
                      extra_client_data: e
                    }, !1), uO({
                      table: "caa_login_client_events_rl",
                      event_name: uS.CaaLoginEvent.LOGIN_ATTEMPT,
                      event_category: uS.CaaEventCategory.LOGIN_ATTEMPT,
                      event_flow: uS.CaaEventFlow.AYMH,
                      event_step: uS.CaaEventStep.LANDING,
                      extra_client_data: e
                    }, !1)
                  } else ak && uH(uS.CaaLoginEvent.NTP_LANDING_NEXT), uO({
                    table: "caa_acquisition_client_events_rl",
                    event_name: uS.CAA_REGISTRATION_EVENT_NAME,
                    state: uS.CaaRegistrationState.REGISTRATION_START,
                    event_category: uS.CaaEventCategory.REGISTRATION_FUNNEL,
                    event_flow: uS.CaaEventFlow.NTP,
                    event_step: uS.CaaEventStep.LANDING,
                    entry_point: u$()
                  }, !1), uO({
                    table: "caa_acquisition_client_events_rl",
                    event_name: uS.CAA_REGISTRATION_EVENT_NAME,
                    state: uS.CaaRegistrationState.CREATE_ATTEMPT,
                    event_category: uS.CaaEventCategory.REGISTRATION_FUNNEL,
                    event_flow: uS.CaaEventFlow.NTP,
                    event_step: uS.CaaEventStep.ACCOUNT_CREATION,
                    entry_point: u$()
                  }, !1);
                  rV(t, e.hasMetaAi ? "aymh_login" : "ntp_join")
                }
              })
            }, `${e.loginSourceApp??"unknown"}-${n}`)), nw.map((e, n) => (0, t.jsx)(aP.EctoErrorBoundary, {
              surface: ay.HATCH_SENTRY_SURFACES.AUTH,
              children: (0, t.jsx)(dK, {
                account: e,
                disabled: tx || null == N,
                isPending: eZ === e.accountCuid,
                showDivider: nb || n < nw.length - 1,
                isSingleRow: nk,
                onLogin: () => void rz(e),
                onRemove: () => void rY(e)
              })
            }, e.accountCuid)), nb && (0, t.jsx)(aP.EctoErrorBoundary, {
              surface: ay.HATCH_SENTRY_SURFACES.AUTH,
              children: (0, t.jsx)(dV, {
                disabled: tx || null == N,
                hiddenCount: ny - nv,
                onSelect: () => {
                  tM.current?.abort(), tf(null), e7(!0)
                }
              })
            })]
          }), null != td && (0, t.jsx)(dE, {
            providerSsoFailure: aT,
            id: tW,
            className: "text-caption-1 text-text-destructive -mt-1.5 mb-1 px-4",
            children: td
          }, aT?.completionId ?? "auth_error"), (0, t.jsx)(aw.Button, {
            ref: nQ,
            type: "button",
            label: r.fbs._("Use another account", null, {
              hk: "1FUmvu"
            }),
            variant: "borderless",
            size: "36",
            fullWidth: !0,
            className: "text-body-medium text-hatch-accent h-11",
            disabled: tx,
            onClick: () => {
              tM.current?.abort(), nZ(), ak && (uH(uS.CaaLoginEvent.NTP_LANDING_SWITCH_TO_LOGIN), ab || (0, uw.setHatchAuthLandingEntryPoint)(uS.CaaEntryPoint.NTP_LANDING_USE_ANOTHER_ACCOUNT)), ab && uO({
                table: "caa_login_client_events_rl",
                event_name: uS.CaaLoginEvent.AYMH_LOG_INTO_ANOTHER_ACCOUNT_CLICKED,
                event_category: uS.CaaEventCategory.INTERACTION,
                event_flow: uS.CaaEventFlow.LOGIN,
                event_step: uS.CaaEventStep.LANDING
              }, !1), tI.current = !0, tz.current = !0, e1(!1), e3(!1), te(!0), ta(!0), tf(null), S("contact")
            }
          }), null != b && !e$ && (0, t.jsx)(d5, {
            subsurface: "entry",
            tos: b,
            accounts: rX,
            onReady: () => {},
            onUnavailable: () => {}
          })]
        }), rQ && (0, t.jsxs)(iX.LoadingState, {
          name: "auth_account_options",
          className: "mt-1.5 flex w-full flex-col gap-4 motion-reduce:[&_*]:!animate-none",
          children: [(0, t.jsx)("div", {
            role: "status",
            "aria-busy": "true",
            "aria-label": r.fbs._("Loading account options", null, {
              hk: "14CApQ"
            }),
            className: "bg-fill-secondary-elevated rounded-22 overflow-hidden p-2",
            children: (0, t.jsxs)("div", {
              "aria-hidden": "true",
              className: "flex min-h-14 items-center gap-3 p-2",
              children: [(0, t.jsxs)("span", {
                className: "flex min-w-0 flex-1 flex-col",
                children: [(0, t.jsx)("span", {
                  className: "flex h-5.5 items-center",
                  children: (0, t.jsx)(iV.Skeleton, {
                    className: "bg-hatch-onboarding-fill h-4 w-44 max-w-full"
                  })
                }), (0, t.jsx)("span", {
                  className: "flex h-4.5 items-center",
                  children: (0, t.jsx)(iV.Skeleton, {
                    className: "bg-hatch-onboarding-fill h-3 w-20"
                  })
                })]
              }), (0, t.jsxs)("span", {
                className: "flex shrink-0 items-center gap-2",
                children: [(0, t.jsx)(iV.Skeleton, {
                  className: "bg-hatch-onboarding-fill size-10 shrink-0 rounded-full"
                }), (0, t.jsx)(iV.Skeleton, {
                  className: "bg-hatch-onboarding-fill h-4 w-4 shrink-0"
                })]
              })]
            })
          }), (0, t.jsx)(aw.Button, {
            ref: nJ,
            type: "button",
            label: r.fbs._("Use phone or email", null, {
              hk: "Nm2oy"
            }),
            variant: "borderless",
            size: "36",
            fullWidth: !0,
            className: "text-body-medium text-hatch-accent h-11",
            disabled: tx,
            onClick: () => {
              n0(), tz.current = !0, te(!1), ta(!0), tK(!1), T(!1), S("contact")
            }
          })]
        }), r6 && null != ee && (0, t.jsx)(aP.EctoErrorBoundary, {
          surface: ay.HATCH_SENTRY_SURFACES.AUTH,
          fallback: ({
            reset: e
          }) => (0, t.jsx)(dz, {
            actionError: td,
            isSubmitting: tx,
            onEscape: () => void rG(),
            onRetry: e
          }),
          children: (0, t.jsx)(m.Suspense, {
            fallback: (0, t.jsx)(dB, {}),
            children: (0, t.jsx)(ol, {
              offer: ee,
              error: td,
              errorId: tW,
              isBlocked: en,
              isSubmitting: tx,
              isTermsReady: tE,
              onSelectAccount: () => void rU(),
              onUseAnotherAccount: () => {
                rG()
              }
            })
          })
        }), !rQ && !rZ && !r6 && !aa && !ao && !al && (0, t.jsxs)("form", {
          className: (0, r3.cn)("flex w-full flex-col", r9 ? "mt-5" : "mt-1.5", rJ ? "" : r9 ? "gap-3" : an ? "gap-4" : "gap-6"),
          noValidate: !0,
          onSubmit: e => {
            if (e.preventDefault(), rJ && 0 === j.trim().length) return void tB.current?.focus();
            if (eF(!0), rJ) {
              !ai && (nR(), j.trim().length > 0 && uO(uM(uS.CaaLoginEvent.CONTACTPOINT_CONTINUE_CLICKED, uS.CaaEventCategory.CONTACTPOINT_PAGE_INTERACTION, uS.CaaEventStep.CONTACTPOINT, void 0, F), !1));
              rx()
            } else r0 ? rF("confirm-otp") : r5 ? rF("confirm-password") : r8 ? (nY(), rB(!1)) : an ? rE() : ar ? rN() : as ? rj() : ac ? rM() : rB(!0)
          },
          children: [rJ && (0, t.jsx)(iY.InputField, {
            ref: tB,
            label: r.fbs._("Mobile number or email", null, {
              hk: "4zccgl"
            }),
            "aria-label": r.fbs._("Mobile number or email", null, {
              hk: "28BkzJ"
            }),
            hideLabel: !0,
            placeholder: r.fbs._("Mobile number or email", null, {
              hk: "37XZsf"
            }),
            className: "text-body bg-fill-secondary-elevated rounded-20 h-[54px] px-4",
            value: j,
            onFocus: () => {
              tz.current = !0, ai || uO(uM(uS.CaaLoginEvent.CONTACTPOINT_FOCUS, uS.CaaEventCategory.CONTACTPOINT_PAGE_INTERACTION, uS.CaaEventStep.CONTACTPOINT), !1)
            },
            onChange: e => {
              tz.current = !0, eA(!1), null != eR && e.target.value.trim() !== eR && tf(null), P(e.target.value)
            },
            autoComplete: "username",
            inputMode: "email",
            required: !0,
            error: rq,
            "aria-invalid": rq,
            "aria-describedby": rq ? tW : void 0
          }), rJ && aN, ai && (0, t.jsx)("p", {
            className: "text-caption-1 text-text-primary px-4",
            children: r.fbs._("Enter the email or mobile number for your account and we'll send you a code to reset your password.", null, {
              hk: "4dwjo9"
            })
          }), rJ && !ai && (0, t.jsx)("p", {
            className: "text-caption-1 text-text-secondary mt-2 w-full px-1.5",
            children: r.fbt._("You may receive SMS notifications from us by using your mobile number. {learn more link}", [r.fbt._param("learn more link", (0, t.jsx)(iW.EctoLink, {
              ref: nX,
              href: oD.TermsOfServiceLinks.SMS_NOTIFICATIONS_HELP,
              variant: "currentColor",
              textStyle: "caption-1",
              className: "text-hatch-accent inline whitespace-normal [&>span]:inline",
              onClick: n$,
              children: "Learn more"
            }))], {
              hk: "27OjGi"
            })
          }), r0 && (0, t.jsx)(i0.NativeAuthCodeBoxes, {
            value: U,
            onChange: G,
            disabled: tx,
            onSubmit: () => {
              eF(!0), rF("confirm-otp")
            },
            onComplete: e => {
              eF(!0), rF("confirm-otp", e)
            },
            ariaLabel: r.fbs._("6-digit security code", null, {
              hk: "3c52aQ"
            }),
            ariaInvalid: rq,
            ariaDescribedBy: rq ? tW : void 0
          }), r5 && (0, t.jsxs)(t.Fragment, {
            children: [(0, t.jsx)(dR, {
              analyticsSubsurface: "password",
              label: r.fbs._("Password", null, {
                hk: "cQgs1"
              }),
              "aria-label": r.fbs._("Password", null, {
                hk: "1QhGWl"
              }),
              value: B,
              onChange: e => z(e.target.value),
              autoComplete: "current-password",
              required: !0,
              hideLabel: !0,
              placeholder: r.fbs._("Password", null, {
                hk: "1xMAm"
              }),
              className: "bg-fill-secondary-elevated rounded-20 h-14 px-4",
              error: rq,
              "aria-invalid": rq,
              "aria-describedby": rq ? tW : void 0
            }), !eN && (0, t.jsx)(aw.Button, {
              ref: n8,
              type: "button",
              label: r.fbs._("Forgot password?", null, {
                hk: "1u6ZBG"
              }),
              variant: "borderless",
              size: "36",
              fullWidth: !0,
              className: "text-body-medium text-hatch-accent order-last -mt-3 h-11",
              disabled: tx,
              onClick: () => {
                rR()
              }
            })]
          }), r9 && (0, t.jsxs)("div", {
            "data-testid": "native-auth-name-fields",
            className: "flex h-14 w-full gap-3",
            children: [(0, t.jsx)("div", {
              className: "min-w-0 flex-1",
              children: (0, t.jsx)(iY.InputField, {
                ref: tP,
                label: r.fbs._("First name", null, {
                  hk: "2t4GR"
                }),
                "aria-label": r.fbs._("First name", null, {
                  hk: "4rinLs"
                }),
                hideLabel: !0,
                placeholder: r.fbs._("First name", null, {
                  hk: "4nEWXd"
                }),
                value: K,
                onChange: e => {
                  J(!1), X(e.target.value)
                },
                autoComplete: "given-name",
                required: !0,
                disabled: tx,
                error: rq || Z,
                "aria-invalid": rq || Z,
                "aria-describedby": rq ? tW : void 0,
                className: "bg-fill-secondary-elevated rounded-12 h-14 px-4"
              })
            }), (0, t.jsx)("div", {
              className: "min-w-0 flex-1",
              children: (0, t.jsx)(iY.InputField, {
                label: r.fbs._("Last name", null, {
                  hk: "4DOfTB"
                }),
                "aria-label": r.fbs._("Last name", null, {
                  hk: "2Cn4pN"
                }),
                hideLabel: !0,
                placeholder: r.fbs._("Last name", null, {
                  hk: "2arXc0"
                }),
                value: $,
                onChange: e => {
                  J(!1), Q(e.target.value)
                },
                autoComplete: "family-name",
                required: !0,
                disabled: tx,
                error: rq || Z,
                "aria-invalid": rq || Z,
                "aria-describedby": rq ? tW : void 0,
                className: "bg-fill-secondary-elevated rounded-12 h-14 px-4"
              })
            })]
          }), (r8 || r9) && (0, t.jsx)(i8, {
            value: Y,
            onChange: W,
            error: rq,
            ariaDescribedBy: rq ? tW : void 0,
            impressionRef: nN,
            variant: r9 ? "name-registration" : "default"
          }), r7 && (0, t.jsx)(dR, {
            analyticsSubsurface: "create_password",
            ref: tj,
            label: r.fbs._("Password", null, {
              hk: "4o3yId"
            }),
            "aria-label": r.fbs._("Password", null, {
              hk: "3a3GI9"
            }),
            value: ea,
            onChange: e => ei(e.target.value),
            autoComplete: "new-password",
            required: !0,
            className: "rounded-20 h-[54px] px-4",
            error: rq,
            "aria-invalid": rq,
            "aria-describedby": rq ? tW : void 0
          }), an && (0, t.jsxs)(t.Fragment, {
            children: [(0, t.jsxs)("fieldset", {
              className: "bg-fill-secondary-elevated rounded-20 overflow-hidden",
              disabled: tx,
              children: [(0, t.jsx)("legend", {
                className: "sr-only",
                children: r.fbs._("Authentication method", null, {
                  hk: "13YjRK"
                })
              }), eo.map((e, n) => (0, t.jsxs)("div", {
                children: [(0, t.jsxs)("label", {
                  className: "flex min-h-12 cursor-pointer items-center gap-3 px-4",
                  children: [(0, t.jsx)("span", {
                    className: "text-body text-text-primary min-w-0 flex-1",
                    children: e.label
                  }), (0, t.jsx)("input", {
                    type: "radio",
                    name: "two-factor-method",
                    value: e.methodId,
                    checked: el === e.methodId,
                    onChange: () => ec(e.methodId),
                    className: "accent-hatch-accent size-5 shrink-0"
                  })]
                }), n < eo.length - 1 && (0, t.jsx)("div", {
                  "aria-hidden": "true",
                  className: "bg-fill-divider mx-4 h-px"
                })]
              }, e.methodId))]
            }), (0, t.jsx)("p", {
              className: "text-caption-1 text-text-primary mb-2 text-start",
              children: r.fbs._("You've asked us to require a login code when anyone tries to access your Meta Account from a new device or browser.", null, {
                hk: "BrNLr"
              })
            })]
          }), ar && null != ap && (0, t.jsx)(iY.InputField, {
            label: r.fbs._("Confirmation code", null, {
              hk: "3uTxDl"
            }),
            "aria-label": r.fbs._("Confirmation code", null, {
              hk: "2h8XEf"
            }),
            hideLabel: !0,
            placeholder: r.fbs._("Confirmation code", null, {
              hk: "1HM3mx"
            }),
            className: "bg-fill-secondary-elevated rounded-20 h-14 px-4",
            value: ef,
            onChange: e => {
              let t = "RECOVERY_CODES" === ap.methodType || "ADMIN_CODES" === ap.methodType ? /[^A-Za-z0-9]/g : /\D/g;
              eh(e.target.value.replace(t, "").slice(0, ap.codeLength))
            },
            inputMode: "RECOVERY_CODES" === ap.methodType || "ADMIN_CODES" === ap.methodType ? "text" : "numeric",
            autoComplete: "one-time-code",
            autoCapitalize: "off",
            autoCorrect: "off",
            spellCheck: !1,
            disabled: tx,
            required: !0,
            error: rq,
            "aria-invalid": rq,
            "aria-describedby": rq ? tW : void 0
          }), as && (0, t.jsx)(iY.InputField, {
            label: r.fbs._("Code", null, {
              hk: "4DqOiV"
            }),
            "aria-label": r.fbs._("Code", null, {
              hk: "3x4PlQ"
            }),
            hideLabel: !0,
            placeholder: r.fbs._("Code", null, {
              hk: "4fhQpK"
            }),
            className: "rounded-20 h-[54px] px-4",
            value: ew,
            onChange: e => ek(e.target.value),
            autoComplete: "one-time-code",
            autoCapitalize: "off",
            autoCorrect: "off",
            spellCheck: !1,
            maxLength: 20,
            required: !0,
            error: rq,
            "aria-invalid": rq,
            "aria-describedby": rq ? tW : void 0
          }), ac && (0, t.jsxs)(t.Fragment, {
            children: [(0, t.jsx)(dR, {
              analyticsSubsurface: "recovery_set_password",
              label: r.fbs._("New password", null, {
                hk: "2HgA3e"
              }),
              "aria-label": r.fbs._("New password", null, {
                hk: "42WApr"
              }),
              value: ej,
              onChange: e => eP(e.target.value),
              autoComplete: "new-password",
              required: !0,
              className: "rounded-20 h-[54px] px-4",
              error: rq,
              "aria-invalid": rq,
              "aria-describedby": rq ? tW : void 0
            }), (0, t.jsxs)("label", {
              className: "flex items-center gap-2 self-start",
              children: [(0, t.jsx)(iz.Checkbox, {
                checked: eM,
                onCheckedChange: e => eD(!0 === e),
                disabled: tx
              }), (0, t.jsx)("span", {
                className: "text-body text-text-primary",
                children: r.fbs._("Log out of other devices", null, {
                  hk: "2ivDDa"
                })
              })]
            })]
          }), !rJ && aN, rJ && null != th && (0, t.jsx)("p", {
            role: "status",
            className: (0, r3.cn)("text-caption-1 text-text-primary w-full px-1.5 text-center", rJ && "mt-2"),
            children: th
          }), (0, t.jsx)(aw.Button, {
            ref: rJ ? nA : r0 ? nI : r5 ? nL : r8 ? nz : an ? n1 : ar ? n3 : as ? n9 : ac ? rt : nW,
            type: "submit",
            label: aC,
            disabled: tx || null == N || r0 && 6 !== U.length || r5 && 0 === B.length || r8 && (10 !== Y.length || ae || null == R || !tC) || r7 && (0 === ea.length || ae || null == R || !tC) || an && null == el || ar && (null == ap || dU(ef, ap.methodType).length !== ap.codeLength) || as && 0 === ew.trim().length || ac && 0 === ej.length,
            fullWidth: !0,
            size: "36",
            className: (0, r3.cn)("text-body-medium bg-hatch-accent text-text-white h-11 disabled:opacity-30", rJ && "mt-5", r9 && "mt-3"),
            variant: "primary"
          })]
        }), aa && (0, t.jsxs)("div", {
          className: "mt-7 flex w-full flex-col gap-4",
          children: [(0, t.jsx)("div", {
            ref: nT,
            className: "bg-fill-secondary-elevated rounded-22 flex flex-col overflow-hidden p-2",
            children: ep.map((e, n) => (0, t.jsx)(aP.EctoErrorBoundary, {
              surface: ay.HATCH_SENTRY_SURFACES.AUTH,
              children: (0, t.jsx)(dZ, {
                account: e,
                disabled: tx || null == N,
                isPending: e_ === e.accountId,
                showDivider: n < ep.length - 1,
                onSelect: () => void rD(e.accountId)
              })
            }, e.accountId))
          }), null != td && (0, t.jsx)(dE, {
            providerSsoFailure: aT,
            id: tW,
            className: "text-caption-1 text-text-destructive -mt-1.5 px-4",
            children: td
          }, aT?.completionId ?? "auth_error")]
        }), ao && (0, t.jsxs)("div", {
          className: "mt-7 flex w-full flex-col gap-4",
          children: [(0, t.jsx)("div", {
            ref: rr,
            className: "bg-fill-secondary-elevated rounded-22 flex flex-col overflow-hidden p-2",
            children: eE.map((e, n) => (0, t.jsx)(aP.EctoErrorBoundary, {
              surface: ay.HATCH_SENTRY_SURFACES.AUTH,
              children: (0, t.jsx)(d0, {
                option: e,
                disabled: tx,
                showDivider: n < eE.length - 1,
                onSelect: () => void rL(e.optionId)
              })
            }, e.optionId))
          }), null != td && (0, t.jsx)(dE, {
            providerSsoFailure: aT,
            id: tW,
            className: "text-caption-1 text-text-destructive -mt-1.5 px-4",
            children: td
          }, aT?.completionId ?? "auth_error")]
        }), al && (0, t.jsxs)("div", {
          className: "mt-7 flex w-full flex-col gap-4",
          children: [(0, t.jsx)("div", {
            ref: ra,
            className: "bg-fill-secondary-elevated rounded-22 flex flex-col overflow-hidden p-2",
            children: eC.map((e, n) => (0, t.jsx)(aP.EctoErrorBoundary, {
              surface: ay.HATCH_SENTRY_SURFACES.AUTH,
              children: (0, t.jsx)(dJ, {
                account: e,
                disabled: tx,
                showDivider: n < eC.length - 1,
                onSelect: () => void rP(e.accountId)
              })
            }, e.accountId))
          }), null != td && (0, t.jsx)(dE, {
            providerSsoFailure: aT,
            id: tW,
            className: "text-caption-1 text-text-destructive -mt-1.5 px-4",
            children: td
          }, aT?.completionId ?? "auth_error")]
        }), r0 && (0, t.jsx)("div", {
          className: "mt-3 flex w-full flex-col items-center",
          children: eB ? (0, t.jsx)(aw.Button, {
            ref: nP,
            type: "button",
            label: r.fbs._("Use password instead", null, {
              hk: "1tXFZi"
            }),
            variant: "borderless",
            size: "36",
            fullWidth: !0,
            className: "text-body-medium text-hatch-accent h-11",
            disabled: tx,
            onClick: () => {
              nM(),
                function(e = uS.CaaEventFlow.LOGIN_MANUAL, t = null) {
                  uO(uD(e, uS.CaaLoginEvent.ENTER_PASSWORD_INSTEAD_BUTTON_CLICKED, uS.CaaEventCategory.LOGIN_HOME_PAGE_INTERACTION, uS.CaaEventStep.OTP, void 0, t), !1)
                }(e4, F), tf(null), e6(!1), S("password")
            }
          }) : r4 ? (0, t.jsx)(aw.Button, {
            ref: nD,
            type: "button",
            label: r.fbs._("Try another way", null, {
              hk: "13SLZT"
            }),
            variant: "borderless",
            size: "36",
            fullWidth: !0,
            className: "text-body-medium text-hatch-accent h-11",
            disabled: tx,
            onClick: () => void rI()
          }) : null
        }), as && (0, t.jsx)(aw.Button, {
          ref: ri,
          type: "button",
          label: r.fbs._("Resend code", null, {
            hk: "2VKhTE"
          }),
          variant: "borderless",
          size: "36",
          className: "mt-3",
          disabled: tx,
          onClick: () => void rO()
        }), (r8 || r6) && (0, t.jsxs)("div", {
          "data-testid": "native-auth-terms-footer",
          className: (0, r3.cn)("w-full", r8 ? r9 ? "mt-4" : "mt-5 px-4" : "desktop:absolute desktop:inset-x-10 desktop:bottom-12 desktop:w-auto mt-auto pt-8"),
          children: [r8 && (null == R ? (0, t.jsx)(d1, {}) : (0, t.jsx)(d5, {
            subsurface: "birthday",
            tos: R,
            textAlign: r9 ? "center" : "start",
            onReady: L,
            onUnavailable: () => L(null)
          })), r6 && null != ee && (null == ee.tos ? (0, t.jsx)(d1, {}) : (0, t.jsx)(d5, {
            subsurface: "ntp_upsell",
            tos: ee.tos,
            onReady: L,
            onUnavailable: () => L(null)
          }))]
        })]
      })]
    })
  }

  function d8(e) {
    let r, a = (0, n.c)(2);
    return a[0] !== e ? (r = (0, t.jsx)(aP.EctoErrorBoundary, {
      surface: ay.HATCH_SENTRY_SURFACES.AUTH,
      fallback: d7,
      children: (0, t.jsx)(d6, {
        ...e
      })
    }), a[0] = e, a[1] = r) : r = a[1], r
  }

  function d7(e) {
    let {
      error: n,
      reset: r
    } = e;
    return (0, t.jsx)(iq.HatchPageErrorFallback, {
      error: n,
      reset: r
    })
  }

  function d9(e) {
    return !e
  }

  function fe(e) {
    let r, a, i, o = (0, n.c)(8),
      {
        continueTo: s,
        landingPage: l,
        showAppDownloads: c
      } = e,
      u = (0, m.useRef)(null);
    return o[0] === Symbol.for("react.memo_cache_sentinel") ? (r = () => u.current?.focus({
      preventScroll: !0
    }), o[0] = r) : r = o[0], o[1] !== s ? (a = (0, t.jsx)(aT, {
      ref: u,
      href: s,
      subsurface: "hero",
      className: "text-body-medium h-12 w-fit max-w-full px-8"
    }), o[1] = s, o[2] = a) : a = o[2], o[3] !== s || o[4] !== l || o[5] !== c || o[6] !== a ? (i = (0, t.jsx)(aP.EctoErrorBoundary, {
      surface: ay.HATCH_SENTRY_SURFACES.LANDING,
      fallback: ft,
      children: (0, t.jsx)(ua, {
        audience: "work",
        landingPage: l,
        continueTo: s,
        showAppDownloads: c,
        hasDenseAccountList: !1,
        impressionRef: null,
        isLandingEntryState: !0,
        onFocusAuth: r,
        overlay: null,
        children: a
      })
    }), o[3] = s, o[4] = l, o[5] = c, o[6] = a, o[7] = i) : i = o[7], i
  }

  function ft(e) {
    let {
      error: n,
      reset: r
    } = e;
    return (0, t.jsx)(iq.HatchPageErrorFallback, {
      error: n,
      reset: r,
      suppressRawErrorMessage: !0,
      alwaysShowRetry: !0
    })
  }
  e.s(["NativeLoginPageContent", 0, function(e) {
    let r, a, i, o, s, l = (0, n.c)(15);
    l[0] !== e ? ({
      audience: i,
      continueTo: r,
      ...a
    } = e, l[0] = e, l[1] = r, l[2] = a, l[3] = i) : (r = l[1], a = l[2], i = l[3]);
    let c = void 0 === i ? "personal" : i,
      {
        locale: u
      } = (0, a3.useHatchLocale)();
    if (l[4] !== c || l[5] !== u) o = "en" !== u.replaceAll("_", "-").split("-")[0] ? "work" === c ? iG : iU : "work" === c ? iF : iH, l[4] = c, l[5] = u, l[6] = o;
    else o = l[6];
    let d = o;
    if (null != r) {
      let e, n = a.showAppDownloads ?? !1;
      return l[7] !== r || l[8] !== d || l[9] !== n ? (e = (0, t.jsx)(fe, {
        continueTo: r,
        landingPage: d,
        showAppDownloads: n
      }), l[7] = r, l[8] = d, l[9] = n, l[10] = e) : e = l[10], e
    }
    return l[11] !== c || l[12] !== d || l[13] !== a ? (s = (0, t.jsx)(d8, {
      ...a,
      audience: c,
      landingPage: d
    }), l[11] = c, l[12] = d, l[13] = a, l[14] = s) : s = l[14], s
  }], 608129)
}]);

//# debugId=7765e0a6-dd78-8474-90a8-9b2f4a207286
//# sourceMappingURL=011jkeg8gz_31.js.map