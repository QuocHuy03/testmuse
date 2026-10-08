;
! function() {
  try {
    var e = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof global ? global : "undefined" != typeof window ? window : "undefined" != typeof self ? self : {},
      n = (new e.Error).stack;
    n && ((e._debugIds || (e._debugIds = {}))[n] = "286ac002-97c6-c6ee-f28d-f0ec9a2a1191")
  } catch (e) {}
}();
(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push(["object" == typeof document ? document.currentScript : void 0, 176048, e => {
  "use strict";
  var t = e.i(984416),
    r = e.i(519172),
    n = e.i(880162),
    a = e.i(89820);
  e.s(["EctoGracefulImage", 0, function({
    fade: e = !0,
    scale: l = !1,
    blur: i = !1,
    duration: s = .5,
    className: o,
    style: u,
    draggable: c = !1,
    onReady: p,
    onReveal: m,
    onTransitionEnd: g,
    onTransitionCancel: d,
    src: h,
    crossOrigin: y,
    ...f
  }) {
    let [_, N] = (0, r.useState)(!1), v = !0 === (0, n.useReducedMotion)(), b = (0, r.useRef)(_), w = (0, r.useRef)(!1), C = (0, r.useRef)(null), S = (0, r.useRef)(p), k = (0, r.useRef)(m);
    b.current = _, S.current = p, k.current = m;
    let I = (0, r.useCallback)(() => {
      w.current || (w.current = !0, k.current?.())
    }, []);
    (0, r.useEffect)(() => {
      let e = C.current;
      if (null == e || b.current) return;
      let t = !1,
        r = () => {
          t || (t = !0, N(!0), S.current?.())
        };
      if (e.complete && e.naturalWidth > 0) return void r();
      e.decode?.()?.then(r, r), e.addEventListener("load", r), e.addEventListener("error", r);
      let n = requestAnimationFrame(() => {
        e.complete && e.naturalWidth > 0 && r()
      });
      return () => {
        t = !0, cancelAnimationFrame(n), e.removeEventListener("load", r), e.removeEventListener("error", r)
      }
    }, [h]), (0, r.useEffect)(() => {
      _ && (!e || s <= 0 || v) && I()
    }, [s, e, I, _, v]);
    let E = (0, r.useMemo)(() => {
      let t = [];
      e && t.push("opacity"), l && t.push("transform"), i && t.push("filter");
      let r = t.length > 0 && !v && s > 0 ? `${t.join(", ")} ${s}s ease-out` : void 0;
      return {
        ...u,
        opacity: _ ? 1 : +!e,
        transform: l ? _ ? "scale(1)" : "scale(0.95)" : void 0,
        filter: i ? _ ? "blur(0px)" : "blur(10px)" : void 0,
        transition: r
      }
    }, [i, s, e, _, v, l, u]);
    return (0, t.jsx)("img", {
      ref: C,
      ...f,
      src: h,
      draggable: c,
      className: o,
      style: E,
      onTransitionEnd: e => {
        g?.(e), _ && e.target === e.currentTarget && "opacity" === e.propertyName && I()
      },
      onTransitionCancel: e => {
        d?.(e), _ && e.target === e.currentTarget && "opacity" === e.propertyName && I()
      },
      crossOrigin: y ?? (0, a.getSignedMediaCrossOrigin)("string" == typeof h ? h : void 0)
    })
  }])
}, 239286, e => {
  "use strict";
  var t = e.i(984416),
    r = e.i(722099),
    n = e.i(345717),
    a = e.i(374785);
  let l = {
      primary: "text-text-primary",
      secondary: "text-text-secondary",
      white: "text-white",
      link: "text-text-primary-link",
      destructive: "text-text-destructive",
      currentColor: "text-current"
    },
    i = {
      12: "size-3",
      16: "size-4",
      20: "size-5",
      24: "size-6",
      32: "size-8",
      48: "size-12"
    };
  e.s(["Spinner", 0, function(e) {
    let s, o, u, c, p, m, g = (0, r.c)(15),
      {
        color: d,
        size: h,
        isDecorative: y,
        className: f,
        testid: _
      } = e,
      N = void 0 !== y && y,
      v = N ? void 0 : "status";
    g[0] !== N ? (s = N ? void 0 : n.fbs._("Loading", null, {
      hk: "qoiH1"
    }), g[0] = N, g[1] = s) : s = g[1];
    let b = !!N || void 0,
      w = i[void 0 === h ? 16 : h],
      C = l[void 0 === d ? "primary" : d];
    return g[2] !== f || g[3] !== w || g[4] !== C ? (o = (0, a.cn)("motion-safe:animate-spin", w, C, f), g[2] = f, g[3] = w, g[4] = C, g[5] = o) : o = g[5], g[6] === Symbol.for("react.memo_cache_sentinel") ? (u = (0, t.jsx)("path", {
      d: "M12 2.75A9.25 9.25 0 0 1 21.25 12",
      stroke: "currentColor",
      strokeWidth: 2,
      strokeLinecap: "round"
    }), c = (0, t.jsx)("path", {
      d: "M21.25 12A9.25 9.25 0 0 1 12 21.25",
      stroke: "currentColor",
      strokeWidth: 2,
      strokeLinecap: "round",
      opacity: .6
    }), p = (0, t.jsx)("path", {
      d: "M12 21.25A9.25 9.25 0 0 1 2.75 12",
      stroke: "currentColor",
      strokeWidth: 2,
      strokeLinecap: "round",
      opacity: .3
    }), g[6] = u, g[7] = c, g[8] = p) : (u = g[6], c = g[7], p = g[8]), g[9] !== v || g[10] !== s || g[11] !== b || g[12] !== o || g[13] !== _ ? (m = (0, t.jsxs)("svg", {
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      role: v,
      "aria-label": s,
      "aria-hidden": b,
      "data-testid": _,
      "data-visualcompletion": "loading-state",
      className: o,
      children: [u, c, p]
    }), g[9] = v, g[10] = s, g[11] = b, g[12] = o, g[13] = _, g[14] = m) : m = g[14], m
  }])
}, 298142, e => {
  "use strict";
  let t = [25, 50, 100, 150, 200, 250, 300, 350, 400, 450, 500, 550, 600, 650, 700, 750, 800, 850, 900, 950, 1e3, 1050, 1075, 1100],
    r = {
      blue: 650,
      cyan: 600,
      teal: 550,
      shamrock: 500,
      green: 450,
      olive: 400,
      yellow: 300,
      orange: 450,
      red: 550,
      rose: 550,
      pink: 600,
      violet: 600,
      purple: 650,
      indigo: 650,
      "cool-gray": 650,
      gray: 650
    },
    n = ["s01_clover", "s02_circle", "s03_oval", "s04_pill", "s05_blob", "s06_star", "s07_pill", "s08_cylinder", "s09_peanut", "s10_hexagon", "s11_sunflower", "s12_cross", "s13_h", "s14_h", "s15_sun", "s16_double_diamond", "s17_diamond", "s18_squircle", "s19_star", "s20_sharp_x", "s21_square", "s22_plus", "s23_cross", "s24_flower", "s25_x", "s26_daisy", "s27_h", "s28_bumpy", "s29_drop", "s30_petals", "s31_spike", "s32_mound", "s33_tri", "s34_soft_hex", "s35_pill", "s36_cross"];

  function a(e) {
    let r = t.indexOf(e);
    return r < 0 ? [e] : t.slice(Math.max(0, r - 4), Math.min(t.length, r + 4 + 1))
  }
  let l = new Set(["s20_sharp_x", "s22_plus"]);
  e.s(["COOPICON_PALETTE_COLORS", 0, ["blue", "cyan", "teal", "shamrock", "green", "olive", "yellow", "orange", "red", "rose", "pink", "violet", "purple", "indigo", "cool-gray", "gray"], "COOPICON_PALETTE_HUE_ANCHORS", 0, r, "COOPICON_PALETTE_STEPS", 0, t, "COOPICON_SHAPE_NAMES", 0, n, "getCoopiconGlyphColor", 0, function(e) {
    return e <= 400 ? "var(--color-gray-1100)" : "var(--white)"
  }, "getCoopiconPaletteColorToken", 0, function(e, t) {
    return `var(--color-${e}-${t})`
  }, "getCoopiconPaletteStepOptions", 0, function(e) {
    return a(r[e])
  }, "getCoopiconPaletteStepRange", 0, a, "getCoopiconSelectedGlyphSize", 0, function(e) {
    let t = "number" == typeof e ? n[e - 1] : e;
    return null != t && l.has(t) ? 16 : 20
  }])
}, 731714, e => {
  "use strict";
  var t = e.i(957948),
    r = e.i(519172);
  e.s(["useMergeRefs", 0, function(...e) {
    return (0, r.useMemo)(() => (0, t.default)(...e), [...e])
  }])
}, 121869, e => {
  "use strict";
  var t = e.i(298142),
    r = e.i(120511);
  let n = {
      glyphName: "audio"
    },
    a = {
      glyphName: "code-file",
      aliases: ["code-document"]
    },
    l = {
      glyphName: "excel",
      aliases: ["spreadsheet", "xlsx"]
    },
    i = {
      glyphName: "pdf"
    },
    s = {
      glyphName: "image"
    },
    o = {
      glyphName: "powerpoint",
      aliases: ["pptx"]
    },
    u = {
      glyphName: "video"
    },
    c = {
      glyphName: "unknown-file",
      aliases: ["question-file"]
    },
    p = {
      glyphName: "text",
      aliases: ["markdown", "md"]
    },
    m = {
      glyphName: "word",
      aliases: ["document-word", "docx"]
    },
    g = [{
      glyphName: "activity"
    }, {
      glyphName: "agentic"
    }, {
      glyphName: "ai-consumer"
    }, {
      glyphName: "ai-memory"
    }, {
      glyphName: "ai-remix"
    }, {
      glyphName: "ai-stars-3"
    }, {
      glyphName: "ai-vibes"
    }, {
      glyphName: "airplane"
    }, {
      glyphName: "alarm-clock"
    }, {
      glyphName: "archive"
    }, {
      glyphName: "article"
    }, n, {
      glyphName: "avatar"
    }, {
      glyphName: "backpack"
    }, {
      glyphName: "bed"
    }, {
      glyphName: "bell"
    }, {
      glyphName: "binoculars"
    }, {
      glyphName: "bolt"
    }, {
      glyphName: "book-closed"
    }, {
      glyphName: "book-open",
      aliases: ["book"]
    }, {
      glyphName: "bookmark"
    }, {
      glyphName: "briefcase"
    }, {
      glyphName: "brush"
    }, {
      glyphName: "bug"
    }, {
      glyphName: "building-bank"
    }, {
      glyphName: "cake"
    }, {
      glyphName: "calendar"
    }, {
      glyphName: "camcorder"
    }, {
      glyphName: "camera"
    }, {
      glyphName: "chart-bar",
      aliases: ["chart"]
    }, {
      glyphName: "circle-user"
    }, {
      glyphName: "circle-user-stack"
    }, {
      glyphName: "circles-interlock"
    }, {
      glyphName: "clapboard"
    }, {
      glyphName: "clipboard"
    }, {
      glyphName: "clock"
    }, {
      glyphName: "closed-captioning"
    }, {
      glyphName: "cloud"
    }, {
      glyphName: "code"
    }, a, {
      glyphName: "coin-stack"
    }, {
      glyphName: "compass"
    }, {
      glyphName: "cookie"
    }, {
      glyphName: "credit-card"
    }, {
      glyphName: "cube"
    }, {
      glyphName: "cube-shipping"
    }, {
      glyphName: "currency-bill"
    }, {
      glyphName: "direction"
    }, {
      glyphName: "document",
      aliases: ["doc", "file"]
    }, {
      glyphName: "document-badge-ai"
    }, {
      glyphName: "document-badge-clock"
    }, {
      glyphName: "document-badge-search"
    }, {
      glyphName: "document-badge-stamp"
    }, {
      glyphName: "document-badge-user"
    }, {
      glyphName: "document-format-artifact"
    }, {
      glyphName: "document-stack"
    }, {
      glyphName: "emoji-smile"
    }, {
      glyphName: "envelope"
    }, l, {
      glyphName: "eye"
    }, {
      glyphName: "family-center"
    }, {
      glyphName: "feed-post"
    }, {
      glyphName: "figure"
    }, {
      glyphName: "fingerprint"
    }, {
      glyphName: "flame"
    }, {
      glyphName: "flashlight"
    }, {
      glyphName: "folder"
    }, {
      glyphName: "folder-open"
    }, {
      glyphName: "gift"
    }, {
      glyphName: "globe"
    }, {
      glyphName: "hand-stop"
    }, {
      glyphName: "headphone"
    }, {
      glyphName: "headphone-mic"
    }, {
      glyphName: "heart"
    }, {
      glyphName: "house",
      aliases: ["home"]
    }, s, {
      glyphName: "image-badge-ai"
    }, {
      glyphName: "image-sphere"
    }, {
      glyphName: "image-stack"
    }, {
      glyphName: "key"
    }, {
      glyphName: "keyboard"
    }, {
      glyphName: "laptop-phone"
    }, {
      glyphName: "lightbulb",
      generated: !1
    }, {
      glyphName: "link"
    }, {
      glyphName: "list-check",
      generated: !1
    }, {
      glyphName: "location-pin"
    }, {
      glyphName: "lock"
    }, {
      glyphName: "lock-badge-heart"
    }, {
      glyphName: "map"
    }, {
      glyphName: "megaphone"
    }, {
      glyphName: "microphone"
    }, {
      glyphName: "microscope"
    }, {
      glyphName: "monitor"
    }, {
      glyphName: "moon-crescent"
    }, {
      glyphName: "mortarboard"
    }, {
      glyphName: "music-note",
      aliases: ["music"]
    }, {
      glyphName: "node-3-triangle"
    }, {
      glyphName: "node-4"
    }, {
      glyphName: "node-hub"
    }, {
      glyphName: "notebook-user"
    }, {
      glyphName: "paintbrush",
      aliases: ["paint-brush"],
      generated: !1
    }, {
      glyphName: "paint-palette",
      aliases: ["palette"]
    }, i, o, {
      glyphName: "pencil"
    }, {
      glyphName: "phone"
    }, {
      glyphName: "presentation"
    }, {
      glyphName: "ribbon-clock"
    }, {
      glyphName: "rocket"
    }, {
      glyphName: "scan-document"
    }, {
      glyphName: "search",
      generated: !1
    }, {
      glyphName: "shield"
    }, {
      glyphName: "shopping-bag"
    }, {
      glyphName: "shopping-cart"
    }, {
      glyphName: "smart-glasses"
    }, {
      glyphName: "speaker-hi"
    }, {
      glyphName: "spotlight"
    }, {
      glyphName: "star"
    }, {
      glyphName: "sticker"
    }, {
      glyphName: "sticker-blank"
    }, {
      glyphName: "storefront",
      aliases: ["store"]
    }, {
      glyphName: "subscription"
    }, {
      glyphName: "sun"
    }, {
      glyphName: "sun-haze"
    }, {
      glyphName: "swatch-palette"
    }, {
      glyphName: "tag-badge-star"
    }, p, {
      glyphName: "text-format"
    }, {
      glyphName: "timer"
    }, {
      glyphName: "translate"
    }, c, {
      glyphName: "user"
    }, {
      glyphName: "user-creative"
    }, {
      glyphName: "users-2"
    }, {
      glyphName: "users-3"
    }, u, {
      glyphName: "wand"
    }, {
      glyphName: "wand-alt"
    }, m, {
      glyphName: "wrench"
    }, {
      glyphName: "zip"
    }],
    d = new Set(t.COOPICON_PALETTE_COLORS),
    h = new Set(t.COOPICON_PALETTE_STEPS),
    y = new Set(["chat", "four-shapes", "lightbulb", "target"]),
    f = g.filter(e => (!("generated" in e) || !1 !== e.generated) && !y.has(e.glyphName));
  f.map(({
    glyphName: e
  }) => e);
  let _ = new Map(g.flatMap(e => [e.glyphName, ..."aliases" in e ? e.aliases : []].map(t => [t, e.glyphName]))),
    N = {
      audio: n,
      csv: l,
      document: m,
      html: a,
      image: s,
      json: a,
      markdown: p,
      pdf: i,
      presentation: o,
      spreadsheet: l,
      text: p,
      unsupported: c,
      video: u
    },
    v = {
      audio: "violet",
      csv: "green",
      document: "blue",
      html: "purple",
      image: "purple",
      json: "indigo",
      markdown: "cool-gray",
      pdf: "gray",
      presentation: "red",
      spreadsheet: "green",
      text: "cool-gray",
      unsupported: "gray",
      video: "rose"
    },
    b = new Map(t.COOPICON_SHAPE_NAMES.flatMap(e => {
      let t = e.replace(/^s\d+_/, "").replaceAll("_", "-");
      return [
        [e, e],
        [e.replaceAll("_", "-"), e],
        [t, e]
      ]
    }));

  function w(e, t) {
    return e[function(e) {
      let t = 0x811c9dc5;
      for (let r = 0; r < e.length; r += 1) t ^= e.charCodeAt(r), t = Math.imul(t, 0x1000193);
      return t >>> 0
    }(t) % e.length]
  }

  function C(e, n, a) {
    let l = function(e) {
        let t = e.trim().replace(/^sandbox:\/\//, "").split(/[?#]/, 1)[0].replace(/^\/+/, "").replace(/\/{2,}/g, "/"),
          r = t.split("/").filter(e => e.length > 0),
          n = r.findIndex(e => "artifacts" === e || "your_files" === e);
        if (n >= 0) {
          let e = r.slice(n);
          if (e.length >= 2) return e.join("/")
        }
        let a = r.findIndex(e => "spaces" === e || "space_data" === e);
        if (a >= 0) {
          let e = r[a + 1];
          if (null != e) return `space/${e}`
        }
        return t
      }(e),
      i = function(e, t, n = !1) {
        return n || e.startsWith("space/") ? w(f, `${e}:glyph`) : N[t ?? (0, r.getFileCategory)(e)]
      }(l, n, a?.seedGlyphByIdentifier === !0),
      s = a?.forceCircleShape ? "s02_circle" : w(t.COOPICON_SHAPE_NAMES, `${l}:shape`),
      {
        color: o,
        colorStep: u
      } = function(e, n) {
        if (e.startsWith("space/")) {
          let r = w(t.COOPICON_PALETTE_COLORS, `${e}:color`);
          return {
            color: r,
            colorStep: w((0, t.getCoopiconPaletteStepOptions)(r), `${e}:color-step`)
          }
        }
        let a = v[n ?? (0, r.getFileCategory)(e)];
        return {
          color: a,
          colorStep: t.COOPICON_PALETTE_HUE_ANCHORS[a]
        }
      }(l, n),
      c = s.replace(/^s\d+_/, "").replaceAll("_", "-"),
      p = new URLSearchParams({
        glyph: i.glyphName,
        color: `${o}-${u}`,
        mask: c,
        rotation: "0"
      });
    return `icon://coopicon?${p.toString()}`
  }

  function S(e) {
    let t = e?.trim().toLowerCase().replaceAll("_", "-") ?? "";
    return t.length > 0 ? t : null
  }
  e.s(["getGeneratedArtifactCoopiconIconUrl", 0, function(e, t, r) {
    return C(e, t, {
      forceCircleShape: !r,
      seedGlyphByIdentifier: r
    })
  }, "getGeneratedCoopiconIconUrl", 0, function(e, t) {
    return C(e, t)
  }, "getLibraryArtifactCoopiconIconUrl", 0, function(e, t, r) {
    return C(e, t, {
      forceCircleShape: !0,
      seedGlyphByIdentifier: r
    })
  }, "parseCoopiconIconUrl", 0, function(e) {
    let t, r = e?.trim() ?? "";
    if (0 === r.length) return null;
    try {
      t = new URL(r)
    } catch {
      return null
    }
    if ("icon:" !== t.protocol || "coopicon" !== (t.hostname || t.pathname.replace(/^\/+/, "")).toLowerCase()) return null;
    let n = S(t.searchParams.get("glyph")),
      a = null == n ? null : _.get(n),
      l = S(t.searchParams.get("mask") ?? t.searchParams.get("shape")),
      i = null == l ? null : b.get(l),
      s = function(e, t) {
        let r = S(e);
        if (null == r) return null;
        let n = t?.trim() ?? "";
        if (n.length > 0) {
          let e = Number(n);
          return d.has(r) && h.has(e) ? {
            color: r,
            colorStep: e
          } : null
        }
        let a = r.lastIndexOf("-");
        if (a <= 0) return null;
        let l = r.slice(0, a),
          i = Number(r.slice(a + 1));
        return d.has(l) && h.has(i) ? {
          color: l,
          colorStep: i
        } : null
      }(t.searchParams.get("color"), t.searchParams.get("step") ?? t.searchParams.get("color_step") ?? t.searchParams.get("colorStep")),
      o = function(e) {
        if (null == e || 0 === e.trim().length) return 0;
        let t = Number(e);
        switch (t) {
          case 0:
          case 90:
          case 180:
          case 270:
            return t;
          default:
            return null
        }
      }(t.searchParams.get("rotation"));
    return null == a || null == i || null == s || null == o ? null : {
      glyphName: a,
      shape: i,
      color: s.color,
      colorStep: s.colorStep,
      rotation: o
    }
  }])
}, 539522, e => {
  "use strict";
  let t = ["/.", "/home/", "/tmp/", "/Users/"];
  e.s(["resolveLocalImagePath", 0, function(e) {
    let r, n, a = e?.trim() ?? "";
    return (n = (r = a.split(/[?#]/, 1)[0] ?? a).split("/"), (r.startsWith("/") ? n.slice(1) : n).some(e => 0 === e.length || "." === e || ".." === e)) ? null : a.startsWith("workspace/") ? `/${a}` : a.startsWith("/workspace/") || t.some(e => a.startsWith(e)) ? a : null
  }])
}, 782361, e => {
  "use strict";
  var t = e.i(722099),
    r = e.i(519172),
    n = e.i(849329),
    a = e.i(393202),
    l = e.i(359783),
    i = e.i(871157),
    s = e.i(925301),
    o = e.i(175286),
    u = e.i(971743),
    c = e.i(722469),
    p = e.i(863641);
  let m = (0, l.createClientLogger)("NavigationQueries"),
    g = (e, t) => ["navigation", (0, i.gatewayTargetKey)(e, t)],
    d = (e, t) => ["navigation", (0, i.gatewayTargetKey)(e, t), "resolved"];

  function h(e, t, r) {
    e.setQueryData(d(t, r), !0)
  }
  let y = new WeakMap;

  function f(e, t) {
    let r = y.get(e);
    if (r?.targetKey === t) return r;
    let n = {
      generation: (r?.generation ?? 0) + 1,
      targetKey: t
    };
    return y.set(e, n), n
  }

  function _(e, t, r) {
    let n = (0, i.gatewayTargetKey)(t, r),
      a = y.get(e);
    return null == a ? f(e, n) : a.targetKey === n ? a : null
  }

  function N(e, t) {
    if (null == t) return !1;
    let r = y.get(e);
    return r?.targetKey === t.targetKey && r.generation === t.generation
  }

  function v(e, t) {
    return `${e}:${t}`
  }

  function b(e) {
    return v(e.source, e.item_key)
  }

  function w(e) {
    let t = e?.trim();
    if (!t) return null;
    let r = t.startsWith("sandbox://") ? t.slice(10) : t,
      n = ((0, c.getArtifactPrimaryOutputPathFromMetadataPath)(r) ?? r).replace(/^\/+/, "");
    return n.startsWith("workspace/your_files/") ? (0, c.isArtifactMetadataPath)(n) ? null : n : null
  }
  let C = new Map,
    S = new Map,
    k = new Map;

  function I(e, t) {
    if (null == e) return !1;
    let r = Date.now();
    R(r);
    let n = C.get((0, i.gatewayTargetKey)(e, t));
    return null != n && n > r
  }

  function E(e, t) {
    C.delete((0, i.gatewayTargetKey)(e, t))
  }

  function A(e, t, r, n) {
    let a;
    m.error({
      ...null != n ? {
        error: n
      } : {},
      gatewayUrl: t,
      vmName: r,
      tags: {
        surface: p.HATCH_SENTRY_SURFACES.NAVIGATION
      }
    }, "Disabling navigation for gateway: unsupported method"), R(a = Date.now()), C.set((0, i.gatewayTargetKey)(t, r), a + 6e4), e.setQueryData(g(t, r), null), h(e, t, r)
  }

  function R(e) {
    for (let [t, r] of C) r <= e && C.delete(t)
  }

  function P(e) {
    return e?.toLowerCase().trim() ?? ""
  }

  function x(e) {
    let t = P((0, s.isGatewayRequestError)(e) ? e.code : void 0);
    if ("method_not_found" === t || "unknown_method" === t || "unsupported_method" === t || "not_implemented" === t) return !0;
    let r = P(e instanceof Error ? e.message : String(e));
    return r.includes("unknown method") || r.includes("method not found") || r.includes("unsupported method") || r.includes("unrecognized method") || r.includes("not implemented") || r.includes("no handler")
  }

  function T(e) {
    if ("object" != typeof e || null == e || ! function(e) {
        switch (e) {
          case "space":
          case "saved_space":
          case "library":
          case "system":
            return !0;
          default:
            return !1
        }
      }(e.source) || "string" != typeof e.item_key || 0 === e.item_key.trim().length || "string" != typeof e.display_name) return null;
    let t = null == e.icon ? null : "string" == typeof e.icon ? e.icon : null,
      r = null == e.source_url ? null : "string" == typeof e.source_url ? e.source_url : null,
      n = "library" === e.source ? w(e.item_key) : e.item_key;
    return null == n ? null : {
      source: e.source,
      item_key: n,
      display_name: e.display_name,
      icon: t,
      is_favorite: !0 === e.is_favorite,
      favorite_order: !0 === e.is_favorite ? (0, u.normalizeFiniteNumber)(e.favorite_order) : null,
      accessed_at_ms: (0, u.normalizeFiniteNumber)(e.accessed_at_ms),
      frequency_score: (0, u.normalizeFiniteNumber)(e.frequency_score),
      source_url: r
    }
  }

  function O(e) {
    return "object" == typeof e && null != e && Array.isArray(e.items)
  }

  function M(e) {
    return O(e) ? e.items.map(e => T(e)).filter(e => null != e) : []
  }

  function Q(e, t) {
    return e.source === t.source && e.item_key === t.item_key && e.display_name === t.display_name && e.icon === t.icon && e.is_favorite === t.is_favorite && e.favorite_order === t.favorite_order && e.accessed_at_ms === t.accessed_at_ms && e.frequency_score === t.frequency_score && e.source_url === t.source_url
  }

  function L(e, t, r, n) {
    e.setQueryData(g(t, r), e => {
      let t = e ?? [],
        r = b(n),
        a = !1,
        l = !1,
        i = t.map(e => {
          if (b(e) !== r) return e;
          a = !0;
          let t = {
            ...e,
            ...n,
            icon: n.icon ?? e?.icon ?? null,
            source_url: n.source_url ?? e?.source_url ?? null
          };
          return Q(e, t) ? e : (l = !0, t)
        });
      return a ? l ? i : t : [...t, n]
    })
  }

  function q(e, t, r, n, a) {
    let l = b(n);
    e.setQueryData(g(t, r), e => {
      if (null == e) return e;
      let t = e.find(e => b(e) === l);
      return null != t && Q(t, n) ? null == a ? e.filter(e => b(e) !== l) : e.map(e => b(e) === l ? a : e) : e
    })
  }

  function D(e) {
    return new Map((e ?? []).map(e => [b(e), e]))
  }

  function F(e = !0) {
    let {
      gatewayUrl: t,
      vmName: l,
      isReady: s,
      sendRequest: u,
      onEvent: c
    } = (0, o.useHatchRpc)(), p = (0, a.useQueryClient)(), m = t ?? "", d = (0, i.gatewayTargetKey)(t, l);
    (0, r.useLayoutEffect)(() => {
      f(p, d)
    }, [p, d]);
    let y = (0, n.useQuery)({
        queryKey: g(m, l),
        queryFn: async () => {
          try {
            let e = await u("navigation.subscribe", {});
            if (E(m, l), O(e)) {
              let t = M(e);
              return p.setQueryData(g(m, l), t), h(p, m, l), t
            }
            return p.getQueryData(g(m, l)) ?? []
          } catch (e) {
            if (x(e)) return A(p, m, l, e), null;
            throw e
          }
        },
        enabled: !1,
        staleTime: 1 / 0,
        refetchOnMount: !1
      }),
      _ = (0, r.useRef)(y.refetch);
    return _.current = y.refetch, (0, r.useEffect)(() => {
      if (!e || !s || 0 === m.length) return;
      let t = S.get(d);
      if (null != t) return t.refCount += 1, () => {
        t.refCount -= 1, 0 === t.refCount && (t.cleanup(), S.delete(d))
      };
      let r = c("navigation.items.snapshot", e => {
          let t = M(e);
          p.setQueryData(g(m, l), t), h(p, m, l)
        }),
        n = c("navigation.items.updated", e => {
          let t = "object" == typeof e && null != e && "item" in e ? T(e.item) : T(e);
          null != t && L(p, m, l, t)
        });
      S.set(d, {
        cleanup: () => {
          r(), n()
        },
        refCount: 1
      });
      let a = k.get(d);
      return a?.hasSeenReadyConnection === !0 && !1 === a.wasReady || I(m, l) || _.current(), () => {
        let e = S.get(d);
        null != e && (e.refCount -= 1, 0 === e.refCount && (e.cleanup(), S.delete(d)))
      }
    }, [e, s, c, p, m, d, l]), (0, r.useEffect)(() => {
      if (!e || 0 === m.length) return;
      let t = k.get(d);
      return null != t ? t.refCount += 1 : k.set(d, {
        hasSeenReadyConnection: !1,
        refCount: 1,
        wasReady: !1
      }), () => {
        let e = k.get(d);
        null != e && (e.refCount -= 1, 0 === e.refCount && k.delete(d))
      }
    }, [e, m, d]), (0, r.useEffect)(() => {
      if (!e || 0 === m.length) return;
      let t = k.get(d);
      if (!s) return void k.set(d, {
        hasSeenReadyConnection: t?.hasSeenReadyConnection ?? !1,
        refCount: t?.refCount ?? 0,
        wasReady: !1
      });
      if (null == t) return void k.set(d, {
        hasSeenReadyConnection: !0,
        refCount: 0,
        wasReady: !0
      });
      let r = t.wasReady;
      if (t.wasReady = !0, !t.hasSeenReadyConnection) {
        t.hasSeenReadyConnection = !0;
        return
      }
      r || (E(m, l), _.current())
    }, [e, s, m, d, l]), y
  }

  function K(e, t) {
    return e.length !== t.length || e.some((e, r) => e !== t[r])
  }
  async function U(e, t, r) {
    let n = r.trim();
    return 0 === n.length ? null : T((await e("navigation.recents.touch", {
      source: t,
      item_key: n
    })).item)
  }
  async function $(e, t, r) {
    let n = r.trim();
    return 0 === n.length ? null : T((await e("navigation.recents.touch", {
      source: t,
      item_key: n,
      event_type: "remove"
    })).item)
  }
  async function z(e, t, r, n, a, l) {
    let i = _(t, r, n),
      s = await U(e, a, l);
    null != s && N(t, i) && L(t, r, n, s)
  }
  async function H(e, t, r, n) {
    let a = r.trim();
    return 0 === a.length ? null : T((await e("navigation.pinned.set", {
      source: t,
      item_key: a,
      pinned_order: n
    })).item)
  }
  e.s(["getLibraryNavigationItemKeyForFilePath", 0, function(e) {
    return w(e)
  }, "isNavigationUnsupportedForGateway", 0, I, "navigationItemId", 0, v, "optimisticRemoveNavigationRecent", 0, function({
    gatewayUrl: e,
    itemKey: t,
    onError: r,
    queryClient: n,
    sendRequest: a,
    source: l,
    vmName: i
  }) {
    let s = t.trim();
    if (0 === s.length) return;
    let o = _(n, e, i),
      u = n.getQueryData(g(e, i))?.find(e => e.source === l && e.item_key === s);
    if (null == u) return;
    let c = {
      ...u,
      accessed_at_ms: null,
      frequency_score: null
    };
    N(n, o) && L(n, e, i, c), $(a, l, s).then(t => {
      null != t && N(n, o) && L(n, e, i, t)
    }).catch(t => {
      if (m.error({
          error: t,
          gatewayUrl: e,
          itemKey: s,
          source: l,
          tags: {
            surface: p.HATCH_SENTRY_SURFACES.NAVIGATION
          }
        }, "Failed to remove navigation recent"), N(n, o)) {
        if (q(n, e, i, c, u), x(t)) return void A(n, e, i, t);
        r?.(t)
      }
    })
  }, "optimisticSetNavigationPinnedOrder", 0, function({
    displayName: e,
    gatewayUrl: t,
    icon: r = null,
    itemKey: n,
    onError: a,
    pinnedOrder: l,
    queryClient: i,
    sendRequest: s,
    source: o,
    sourceUrl: u = null,
    vmName: c
  }) {
    let d = n.trim();
    if (0 === d.length) return;
    let h = _(i, t, c),
      y = i.getQueryData(g(t, c))?.find(e => e.source === o && e.item_key === d),
      f = {
        source: o,
        item_key: d,
        display_name: y?.display_name ?? e,
        icon: y?.icon ?? r,
        is_favorite: null != l,
        favorite_order: l,
        accessed_at_ms: y?.accessed_at_ms ?? null,
        frequency_score: y?.frequency_score ?? null,
        source_url: y?.source_url ?? u
      };
    N(i, h) && L(i, t, c, f), H(s, o, d, l).then(e => {
      null != e && N(i, h) && L(i, t, c, e)
    }).catch(e => {
      if (m.error({
          error: e,
          gatewayUrl: t,
          itemKey: d,
          pinnedOrder: l,
          source: o,
          tags: {
            surface: p.HATCH_SENTRY_SURFACES.NAVIGATION
          }
        }, "Failed to set navigation pinned order"), N(i, h)) {
        if (q(i, t, c, f, y), x(e)) return void A(i, t, c, e);
        a?.(e)
      }
    })
  }, "reconcileLibraryNavigationItemsForPathRename", 0, function({
    queryClient: e,
    gatewayUrl: t,
    vmName: r,
    oldPath: n,
    newPath: a
  }) {
    if (null == t) return;
    let l = w(n),
      i = w(a);
    null != l && null != i && l !== i && e.setQueryData(g(t, r), e => {
      if (null == e) return e;
      let t = !1,
        r = new Map;
      for (let n of e) {
        if ("library" !== n.source) {
          r.set(b(n), n);
          continue
        }
        let e = w(n.item_key);
        if (null == e) {
          r.set(b(n), n);
          continue
        }
        let a = e === l || e.startsWith(`${l}/`) ? `${i}${e.slice(l.length)}` : null,
          s = null == a ? e === n.item_key ? n : {
            ...n,
            item_key: e
          } : {
            ...n,
            item_key: a,
            display_name: function(e, t, r) {
              let n = e.display_name.trim();
              return 0 === n.length || "meta.json" === n || n === (0, c.getNameFromPath)(t) ? (0, c.getNameFromPath)(r) : e.display_name
            }(n, e, a)
          };
        s !== n && (t = !0), r.set(b(s), s)
      }
      return t ? Array.from(r.values()) : e
    })
  }, "removeLibraryNavigationItemsUnderPaths", 0, function(e, t, r, n) {
    let a = n.map(e => w(e)).filter(e => null != e);
    0 !== a.length && e.setQueryData(g(t, r), e => (e ?? []).filter(e => {
      if ("library" !== e.source) return !0;
      let t = w(e.item_key);
      return null == t || !a.some(e => t === e || t.startsWith(`${e}/`))
    }))
  }, "removeNavigationRecent", 0, $, "touchAndUpsertNavigationRecent", 0, z, "useNavigationItemsById", 0, function(e) {
    let r, n = (0, t.c)(2),
      {
        data: a
      } = F(void 0 === e || e);
    return n[0] !== a ? (r = D(a), n[0] = a, n[1] = r) : r = n[1], r
  }, "useNavigationItemsBySource", 0, function(e = !0) {
    let {
      gatewayUrl: t,
      vmName: a
    } = (0, o.useHatchRpc)(), l = F(e), {
      data: i
    } = l, {
      data: s = !1
    } = (0, n.useQuery)({
      queryKey: d(t ?? "", a),
      queryFn: async () => !1,
      enabled: !1,
      initialData: () => I(t, a),
      staleTime: 1 / 0
    }), u = s || l.isError, c = (0, r.useRef)(null);
    return (0, r.useMemo)(() => {
      let e = c.current;
      if (null != e && e.sourceData === i && e.hasResolvedNavigationItems === u) return e;
      let t = i ?? [],
        r = t.filter(e => "space" === e.source || "saved_space" === e.source),
        n = t.filter(e => "library" === e.source),
        a = t.filter(e => "system" === e.source),
        l = null == e || K(e.spaceItems, r) ? r : e.spaceItems,
        s = {
          sourceData: i,
          hasResolvedNavigationItems: u,
          itemsById: D(i),
          spaceItems: l,
          spaceItemsById: null != e && l === e.spaceItems ? e.spaceItemsById : D([...l]),
          libraryItems: null == e || K(e.libraryItems, n) ? n : e.libraryItems,
          systemItems: null == e || K(e.systemItems, a) ? a : e.systemItems
        };
      return c.current = s, s
    }, [i, u])
  }])
}, 971743, e => {
  "use strict";
  e.s(["normalizeFiniteNumber", 0, function(e) {
    return "number" == typeof e && Number.isFinite(e) ? e : null
  }])
}, 751444, 812240, e => {
  "use strict";
  let t = {
    all: ["spaces"],
    list: (e, t) => ["spaces", e, t ?? !1]
  };
  e.s(["spacesQueryKeys", 0, t], 812240);
  let r = 1;

  function n(e, t) {
    return ["space-catalog-reconciliation", e, t]
  }
  e.s(["beginSpaceCatalogReconciliation", 0, function(e, a, l) {
    let i = e.getQueryData(t.list(a, !0));
    if (i?.some(e => e.slug === l && !0 !== e.is_saved_foreign_share) === !0) return null;
    let s = {
      generation: r++,
      status: "pending"
    };
    return e.setQueryData(n(a, l), s), s
  }, "failSpaceCatalogReconciliation", 0, function(e, t, r, a) {
    e.setQueryData(n(t, r), e => e?.generation === a.generation ? {
      generation: a.generation,
      status: "error"
    } : e ?? null)
  }, "finishSpaceCatalogReconciliation", 0, function(e, t, r, a) {
    e.setQueryData(n(t, r), e => e?.generation === a.generation ? null : e ?? null)
  }, "spaceCatalogReconciliationOwnerQueryKey", 0, function(e, t) {
    return ["space-catalog-reconciliation-owner", e, t]
  }, "spaceCatalogReconciliationQueryKey", 0, n, "spaceCatalogReconciliationRequestQueryKey", 0, function(e, t, r) {
    return ["space-catalog-reconciliation-request", e, t, r]
  }], 751444)
}, 522730, e => {
  "use strict";
  var t = e.i(790170),
    r = e.i(812240),
    n = e.i(751444),
    a = e.i(141571),
    l = e.i(971743),
    i = e.i(863641);
  let s = 1;
  async function o(e, t) {
    return y(await e.sendRequest("spaces.list", {
      ...t ? {
        include_constructing: !0
      } : {}
    }))
  }
  let u = (0, t.createGatewayQuery)({
    id: "spaces.list",
    queryKey: ({
      gatewayUrl: e,
      includeConstructing: t
    }) => r.spacesQueryKeys.list(e, t),
    noiseFn: (e, t) => o(e, !0 === t.includeConstructing),
    invalidationKey: () => r.spacesQueryKeys.all,
    staleTime: 1e4
  });
  async function c({
    gatewayCtx: e,
    queryClient: t,
    slug: r
  }) {
    let a = r.trim(),
      l = e.gatewayUrl;
    if (0 === a.length || null == l || 0 === l.length) return {
      status: "missing"
    };
    let p = {
        gatewayUrl: l,
        includeConstructing: !0
      },
      m = e => e?.find(e => e.slug === a && !0 !== e.is_saved_foreign_share) ?? null,
      g = m(t.getQueryData(u.queryKey(p)));
    if (null != g) return {
      status: "found",
      space: g
    };
    let d = u.queryKey(p);
    t.cancelQueries({
      queryKey: d,
      exact: !0
    });
    let h = s++,
      y = (0, n.spaceCatalogReconciliationOwnerQueryKey)(l, a),
      f = (0, n.spaceCatalogReconciliationRequestQueryKey)(l, a, h);
    t.setQueryData(y, h);
    try {
      let r = await t.fetchQuery({
        queryKey: f,
        queryFn: async () => (e.isReady || await e.waitForTransport(), o(e, !0)),
        gcTime: 0,
        meta: {
          sentrySurface: i.HATCH_SENTRY_SURFACES.SPACE
        },
        staleTime: 0
      });
      t.getQueryData(y) === h && u.setData(t, p, r);
      let n = m(r);
      return null == n ? {
        status: "missing"
      } : {
        status: "found",
        space: n
      }
    } catch {
      return {
        status: "error"
      }
    } finally {
      t.getQueryData(y) === h && t.removeQueries({
        queryKey: y,
        exact: !0
      })
    }
  }

  function p(e) {
    if ("string" != typeof e) return null;
    let t = e.trim();
    return t.length > 0 ? t : null
  }
  let m = /^[a-z0-9-]+$/i;

  function g({
    imageUrl: e,
    isSavedForeignShare: t,
    shortcode: r,
    shareType: n,
    sourceUrl: l
  }) {
    let i;
    if (!t || null == r) return e;
    let s = n?.trim().toLowerCase() ?? "";
    if ("cloudflare" === s) return (0, a.buildCloudflareSharedSpaceUrl)(r, "/assets/icon.jpg") ?? e;
    let o = function(e) {
        if (null == e) return null;
        try {
          let t = new URL(e);
          return new URL(t.origin)
        } catch {
          return null
        }
      }(l),
      u = o?.hostname.toLowerCase() ?? "";
    if (null != o && (0, a.isCloudflareSharedSpaceHost)(u)) return `${o.origin}/assets/icon.jpg`;
    if ("tinker" === s || u.length > 0 && u.endsWith(".h.metaaiusercontent.com")) return m.test(r) ? `https://${r}.h.metaaiusercontent.com/assets/icon.jpg` : e;
    if (null != o && u.endsWith(".s.metaaiusercontent.com")) return `${o.origin}/icon.jpg`;
    let c = -1 === (i = r.lastIndexOf("-")) ? r : r.slice(i + 1);
    return m.test(c) ? `https://${c}.s.metaaiusercontent.com/icon.jpg` : e
  }

  function d(e, t, r) {
    return t * Math.exp(-(r - e) / 6048e5)
  }

  function h(e, t, r) {
    let n = d(e.accessedAtMs ?? 0, e.frequencyScore ?? 0, r);
    return d(t.accessedAtMs ?? 0, t.frequencyScore ?? 0, r) - n || (t.accessedAtMs ?? 0) - (e.accessedAtMs ?? 0)
  }

  function y(e) {
    if (!Array.isArray(e.spaces)) throw Error("Invalid spaces.list response");
    let t = e.spaces.map(e => "object" == typeof e && null != e ? function(e) {
      let t, r = p(e.slug),
        n = p(e.space_id),
        a = r ?? n,
        i = p(e.name);
      if (null == a || null == i) return null;
      let s = null == (t = p(e.image_url)) ? null : t,
        o = !0 === e.is_shared,
        u = p(e.shortcode),
        c = p(e.share_type),
        m = p(e.source_url);
      return {
        construction_status: function(e) {
          switch (e) {
            case "constructing":
            case "BUILDING":
              return "constructing";
            case "succeeded":
            case "READY":
              return "succeeded";
            case "failed":
            case "FAILED":
              return "failed";
            case "interrupted":
            case "INTERRUPTED":
              return "interrupted";
            case "updating":
            case "UPDATING":
              return "updating";
            default:
              return null
          }
        }(e.construction_status ?? e.build_status),
        slug: a,
        ...null != n && n !== a ? {
          space_id: n
        } : {},
        image_url: g({
          imageUrl: s,
          isSavedForeignShare: o,
          shortcode: u,
          shareType: c,
          sourceUrl: m
        }),
        name: i,
        updated_at_ms: (0, l.normalizeFiniteNumber)(e.updated_at_ms),
        accessed_at_ms: (0, l.normalizeFiniteNumber)(e.accessed_at_ms),
        frequency_score: (0, l.normalizeFiniteNumber)(e.frequency_score),
        favorite_order: (0, l.normalizeFiniteNumber)(e.favorite_order),
        preview_image: function(e) {
          if ("object" != typeof e || null == e || Array.isArray(e)) return null;
          let t = p(e.version),
            r = p(e.thumbnail_url),
            n = p(e.preview_card_url);
          return null == t || null == r || null == n ? null : {
            version: t,
            icon_url: p(e.icon_url),
            thumbnail_url: r,
            thumbnail_width_px: (0, l.normalizeFiniteNumber)(e.thumbnail_width_px),
            thumbnail_height_px: (0, l.normalizeFiniteNumber)(e.thumbnail_height_px),
            preview_card_url: n,
            preview_card_width_px: (0, l.normalizeFiniteNumber)(e.preview_card_width_px),
            preview_card_height_px: (0, l.normalizeFiniteNumber)(e.preview_card_height_px)
          }
        }(e.preview_image),
        is_saved_foreign_share: o,
        runtime: "string" == typeof e.runtime ? e.runtime : null,
        is_current_build_published: "boolean" == typeof e.is_current_build_published ? e.is_current_build_published : null,
        has_server_actions: "boolean" == typeof e.has_server_actions ? e.has_server_actions : null,
        shortcode: u,
        share_type: c,
        source_url: m
      }
    }(e) : null);
    if (t.some(e => null == e)) throw Error("Invalid spaces.list response");
    return t
  }
  async function f(e, t) {
    let r = e.trim();
    if (0 === r.length) throw Error("Space slug is required");
    let n = await t("spaces.delete", {
        slug: r
      }) ?? {},
      a = p(n.slug),
      l = p(n.space_id),
      i = a ?? r;
    if (!1 === n.ok) throw Error(`Failed to delete space ${i}`);
    return {
      deletedIdentifiers: Array.from(new Set([r, ...null == a ? [] : [a], ...null == l ? [] : [l]])),
      deletedSlug: i
    }
  }
  e.s(["calculateScoreDecay", 0, d, "compareByFrecentScore", 0, h, "compareSpacesByFrecentScore", 0, function(e, t, r) {
    return h({
      accessedAtMs: e.accessed_at_ms,
      frequencyScore: e.frequency_score
    }, {
      accessedAtMs: t.accessed_at_ms,
      frequencyScore: t.frequency_score
    }, r)
  }, "deleteSpace", 0, f, "ensureOwnedSpaceCatalogEntry", 0, c, "loggableSpaceId", 0, function(e) {
    return e.space_id ?? null
  }, "normalizeSpacesResponse", 0, y, "savedSharedSpaceIconUrl", 0, g, "spacesListQuery", 0, u])
}, 791661, e => {
  "use strict";
  var t = e.i(722099),
    r = e.i(849329),
    n = e.i(393202),
    a = e.i(519172),
    l = e.i(720756),
    i = e.i(522730),
    s = e.i(812240),
    o = e.i(782361),
    u = e.i(789078);
  e.s(["useHatchSpacesQuery", 0, function(e) {
    let n, a, s, c, p = (0, t.c)(13),
      m = (0, l.useGatewayQueryContext)(),
      g = e?.enabled ?? !0,
      {
        hasResolvedNavigationItems: d,
        spaceItemsById: h
      } = (0, o.useNavigationItemsBySource)(g);
    p[0] !== m || p[1] !== e?.includeConstructing ? (n = i.spacesListQuery.queryOptions({
      gatewayUrl: m.gatewayUrl ?? "",
      includeConstructing: e?.includeConstructing
    }, m), p[0] = m, p[1] = e?.includeConstructing, p[2] = n) : n = p[2];
    let y = g && null != m.gatewayUrl && m.gatewayUrl.length > 0;
    p[3] !== n || p[4] !== y ? (a = {
      ...n,
      enabled: y
    }, p[3] = n, p[4] = y, p[5] = a) : a = p[5];
    let f = (0, r.useQuery)(a);
    p[6] !== f.data || p[7] !== h ? (s = (0, u.mergePendingSavedSpaces)(function(e, t) {
      if (null == e) return;
      if (null == t || 0 === t.size) return e;
      let r = !1,
        n = e.map(e => {
          let n = e.is_saved_foreign_share && null != e.shortcode ? t?.get((0, o.navigationItemId)("saved_space", e.shortcode)) ?? null : t?.get((0, o.navigationItemId)("space", e.slug)) ?? null;
          if (null == n) return e;
          let a = n.icon ?? null;
          return e.accessed_at_ms === n.accessed_at_ms && e.frequency_score === n.frequency_score && e.favorite_order === n.favorite_order && (e.navigation_icon_url ?? null) === a ? e : (r = !0, {
            ...e,
            accessed_at_ms: n.accessed_at_ms,
            frequency_score: n.frequency_score,
            favorite_order: n.favorite_order,
            ...null != a || void 0 !== e.navigation_icon_url ? {
              navigation_icon_url: a
            } : {}
          })
        });
      return r ? n : e
    }(f.data, h)), p[6] = f.data, p[7] = h, p[8] = s) : s = p[8];
    let _ = s;
    return p[9] !== _ || p[10] !== d || p[11] !== f ? (c = {
      ...f,
      data: _,
      hasResolvedNavigationItems: d
    }, p[9] = _, p[10] = d, p[11] = f, p[12] = c) : c = p[12], c
  }, "usePendingSavedSpacesCacheBridge", 0, function() {
    let e, r, l = (0, t.c)(3),
      i = (0, n.useQueryClient)();
    l[0] !== i ? (e = () => {
      let e = e => {
          "remember" === e.type ? i.setQueriesData({
            queryKey: s.spacesQueryKeys.all
          }, t => (0, u.upsertSavedSpaceInSpacesCache)(t, e.space)) : "forget" === e.type && i.setQueriesData({
            queryKey: s.spacesQueryKeys.all
          }, t => (0, u.removeSavedSpaceFromSpacesCache)(t, e.shortcode))
        },
        t = t => {
          e(t.detail ?? {
            type: "changed"
          })
        },
        r = "u" < typeof BroadcastChannel ? null : new BroadcastChannel(u.PENDING_SAVED_SPACES_BROADCAST_CHANNEL);
      return null != r && (r.onmessage = t => {
        e(t.data ?? {
          type: "changed"
        })
      }), window.addEventListener(u.PENDING_SAVED_SPACES_CHANGED_EVENT, t), () => {
        window.removeEventListener(u.PENDING_SAVED_SPACES_CHANGED_EVENT, t), r?.close()
      }
    }, r = [i], l[0] = i, l[1] = e, l[2] = r) : (e = l[1], r = l[2]), (0, a.useEffect)(e, r)
  }])
}, 592708, e => {
  "use strict";
  async function t(e) {
    var t;
    let r = e.slice(0, 12),
      n = new Uint8Array("function" == typeof r.arrayBuffer ? await r.arrayBuffer() : await (t = r, new Promise((e, r) => {
        let n = new FileReader;
        n.onload = () => e(n.result), n.onerror = () => r(n.error), n.readAsArrayBuffer(t)
      }))),
      a = (e, t) => String.fromCharCode(...n.subarray(e, t));
    return n.length >= 3 && 255 === n[0] && 216 === n[1] && 255 === n[2] ? "image/jpeg" : n.length >= 8 && 137 === n[0] && "PNG\r\n\x1a\n" === a(1, 8) ? "image/png" : 12 === n.length && "RIFF" === a(0, 4) && "WEBP" === a(8, 12) ? "image/webp" : e.type || null
  }
  e.s(["hasMask", 0, function(e) {
    return null != e && /\.png(\?|$)/i.test(e)
  }, "isJpegSpaceIcon", 0, function(e, t) {
    var r;
    return null != t ? "image/jpeg" === t : null != (r = e) && /\.jpe?g(\?|#|$)/i.test(r.trim())
  }, "sniffImageMimeType", 0, t])
}, 530611, 246586, e => {
  "use strict";
  var t = e.i(722099),
    r = e.i(519172),
    n = e.i(393202),
    a = e.i(960607),
    l = e.i(499608),
    i = e.i(709853),
    s = e.i(582002),
    o = e.i(592708),
    u = e.i(722469),
    c = e.i(539522),
    p = e.i(121869);
  let m = "sandbox://";

  function g(e) {
    let t = e?.trim() ?? "";
    return t.startsWith(m) && (t = t.slice(m.length)), t
  }

  function d(e) {
    let t = g(e);
    if (0 === t.length) return {
      kind: "none"
    };
    if (/^(https?:|data:|blob:|\/\/)/i.test(t)) {
      let e = (0, a.getHatchVmMedia)(t);
      return e.isVm ? null != e.noisePath ? {
        kind: "local",
        path: e.noisePath,
        urlEncoded: !0
      } : {
        kind: "none"
      } : {
        kind: "passthrough",
        src: t
      }
    }
    if (null != (0, p.parseCoopiconIconUrl)(t)) return {
      kind: "passthrough",
      src: t
    };
    if (/^[a-z][a-z0-9+.-]*:/i.test(t)) return {
      kind: "none"
    };
    if (t.startsWith("/")) {
      let e = t.split("?", 2)[0] ?? t;
      return /^\/(?:workspace\/|home\/|Users\/|\.)/.test(e) ? {
        kind: "local",
        path: t,
        urlEncoded: !1
      } : {
        kind: "passthrough",
        src: t
      }
    }
    let [r = "", n = ""] = t.split("?", 2), l = r.replace(/^\/+/, "");
    return 0 === l.length ? {
      kind: "none"
    } : {
      kind: "local",
      path: `/${l}${n?`?${n}`:""}`,
      urlEncoded: !1
    }
  }
  e.s(["resolveSpaceIconSource", 0, d, "resolveSpaceIconSrc", 0, function(e) {
    let t = d(e);
    return "none" === t.kind ? null : "passthrough" === t.kind ? t.src : t.path
  }, "resolveSpaceImageCachePath", 0, function(e) {
    let t = d(e);
    return "local" === t.kind ? (0, u.normalizePath)(t.path) : null
  }, "resolveSpaceImagePath", 0, function(e) {
    let t = g(e);
    if (0 === t.length) return null;
    let r = (0, a.getHatchVmMedia)(t);
    return r.isVm ? r.noisePath : /^(https?:|data:|blob:|\/\/)/i.test(t) || null != (0, p.parseCoopiconIconUrl)(t) || /^[a-z][a-z0-9+.-]*:/i.test(t) ? null : (0, c.resolveLocalImagePath)(t)
  }], 246586);
  var h = e.i(175286);
  let y = new WeakMap,
    f = new Map;

  function _(e, o) {
    let u, c, p, m, g, y, f, _, N, v = (0, t.c)(28),
      b = (0, n.useQueryClient)(),
      {
        gatewayUrl: w
      } = (0, h.useHatchRpc)();
    v[0] !== e ? (u = d(e), v[0] = e, v[1] = u) : u = v[1];
    let C = u,
      S = "none" === C.kind ? null : "passthrough" === C.kind ? C.src : C.path,
      k = "local" === C.kind ? C.path : null,
      I = "local" === C.kind && C.urlEncoded,
      E = (0, r.useRef)(o);
    v[2] !== k || v[3] !== b || v[4] !== o ? (c = () => {
      if (null == k || E.current === o) {
        E.current = o;
        return
      }
      E.current = o, b.removeQueries({
        queryKey: l.fileQueryKeys.contentPathPrefix(k)
      })
    }, p = [k, b, o], v[2] = k, v[3] = b, v[4] = o, v[5] = c, v[6] = p) : (c = v[5], p = v[6]), (0, r.useEffect)(c, p), v[7] !== w ? (m = null == w ? null : (0, s.getArtifactIconCacheHost)(w), v[7] = w, v[8] = m) : m = v[8];
    let A = m;
    v[9] !== A ? (g = (e, t, r) => null == A ? t() : (0, s.resolveArtifactIconBlob)(A, e, t, r), v[9] = A, v[10] = g) : g = v[10];
    let R = g,
      P = null != k;
    v[11] !== A || v[12] !== R ? (y = null != A ? {
      resolveBlob: R
    } : {}, v[11] = A, v[12] = R, v[13] = y) : y = v[13], v[14] !== I || v[15] !== P || v[16] !== y ? (f = {
      enabled: P,
      urlEncodedPath: I,
      ...y
    }, v[14] = I, v[15] = P, v[16] = y, v[17] = f) : f = v[17];
    let {
      data: x,
      isError: T,
      fetchStatus: O
    } = (0, l.useRawQuery)(k, f);
    v[18] !== k || v[19] !== I ? (_ = null != k ? (0, a.mediaCacheKey)(k, I) : null, v[18] = k, v[19] = I, v[20] = _) : _ = v[20];
    let M = (0, i.useCachedBlobUrl)(_, x, k ?? void 0);
    return v[21] !== O || v[22] !== T || v[23] !== x || v[24] !== M || v[25] !== k || v[26] !== S ? (N = null == k ? {
      url: S,
      blob: null,
      isPending: !1
    } : {
      url: M,
      blob: x ?? null,
      isPending: null == M && (!T || "fetching" === O)
    }, v[21] = O, v[22] = T, v[23] = x, v[24] = M, v[25] = k, v[26] = S, v[27] = N) : N = v[27], N
  }
  e.s(["useSpaceImage", 0, function(e, n) {
    let a, l, i, s, u = (0, t.c)(15),
      {
        url: c,
        blob: p,
        isPending: m
      } = _(e, n),
      [g, d] = (0, r.useState)(null);
    if (u[0] !== p || u[1] !== e ? (a = () => {
        if (null == p) return;
        let t = !1;
        return (y.has(p) ? Promise.resolve(y.get(p) ?? null) : (0, o.sniffImageMimeType)(p).catch(() => p.type || null)).then(r => {
          y.set(p, r), null != e && f.set(e, r), t || d({
            blob: p,
            mimeType: r
          })
        }), () => {
          t = !0
        }
      }, l = [p, e], u[0] = p, u[1] = e, u[2] = a, u[3] = l) : (a = u[2], l = u[3]), (0, r.useEffect)(a, l), null == p) {
      let e;
      return u[4] !== c || u[5] !== m ? (e = {
        url: c,
        mimeType: null,
        isPending: m
      }, u[4] = c, u[5] = m, u[6] = e) : e = u[6], e
    }
    if (u[7] !== p || u[8] !== g || u[9] !== e) i = g?.blob === p ? g.mimeType : y.has(p) ? y.get(p) ?? null : !!(null != e && f.has(e)) && (f.get(e) ?? null), u[7] = p, u[8] = g, u[9] = e, u[10] = i;
    else i = u[10];
    let h = i;
    return u[11] !== c || u[12] !== m || u[13] !== h ? (s = !1 === h ? {
      url: null,
      mimeType: null,
      isPending: !0
    } : {
      url: c,
      mimeType: h,
      isPending: m
    }, u[11] = c, u[12] = m, u[13] = h, u[14] = s) : s = u[14], s
  }, "useSpaceImageState", 0, function(e, r) {
    let n, a = (0, t.c)(3),
      {
        url: l,
        isPending: i
      } = _(e, r);
    return a[0] !== l || a[1] !== i ? (n = {
      url: l,
      isPending: i
    }, a[0] = l, a[1] = i, a[2] = n) : n = a[2], n
  }, "useSpaceImageUrl", 0, function(e, t) {
    return _(e, t).url
  }], 530611)
}, 957948, e => {
  "use strict";
  e.s(["default", 0, function(...e) {
    return t => {
      let r = [];
      return e.forEach(e => {
        if (null != e) {
          if ("function" == typeof e) {
            let n = e(t);
            "function" == typeof n ? r.push(n) : r.push(() => e(null));
            return
          }
          if ("object" == typeof e) {
            e.current = t, r.push(() => {
              e.current = null
            });
            return
          }
        }
      }), () => {
        r.forEach(e => e())
      }
    }
  }])
}, 959768, 6493, 773787, e => {
  "use strict";
  let t = "u" > typeof window;
  e.s(["isBrowser", 0, t], 6493);
  let r = {
      current: null
    },
    n = {
      current: !1
    };
  e.s(["hasReducedMotionListener", 0, n, "prefersReducedMotion", 0, r], 773787), e.s(["initPrefersReducedMotion", 0, function() {
    if (n.current = !0, t)
      if (window.matchMedia) {
        let e = window.matchMedia("(prefers-reduced-motion)"),
          t = () => r.current = e.matches;
        e.addEventListener("change", t), t()
      } else r.current = !1
  }], 959768)
}, 880162, e => {
  "use strict";
  var t = e.i(519172),
    r = e.i(959768),
    n = e.i(773787);
  e.s(["useReducedMotion", 0, function() {
    n.hasReducedMotionListener.current || (0, r.initPrefersReducedMotion)();
    let [e] = (0, t.useState)(n.prefersReducedMotion.current);
    return e
  }])
}, 141571, e => {
  "use strict";
  let t = ".managed.cf.metaaiusercontent.com",
    r = ".cf.metaaiusercontent.com",
    n = [t, r, ".cf.ecto1usercontent.com"],
    a = /^[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;

  function l(e) {
    let t = e.trim().toLowerCase();
    return 0 === t.length || t.length > 63 || !a.test(t) ? null : t
  }

  function i(e) {
    let t = e.trim().toLowerCase(),
      r = n.find(e => t.endsWith(e));
    return null == r ? null : l(t.slice(0, -r.length))
  }

  function s(e, n = "/index.html", a = !1) {
    let i = function(e, n = !1) {
      let a = l(e);
      return null == a ? null : `https://${a}${n?t:r}`
    }(e, a);
    return null != i && n.startsWith("/") ? `${i}${n}` : null
  }
  e.s(["buildCloudflareSharedSpaceUrl", 0, s, "buildCloudflareSharedSpaceUrlOrInvalidPlaceholder", 0, function(e, t = "/index.html", r = !1) {
    let n = t.startsWith("/") ? t : "/index.html",
      a = s(e, n, r);
    return null != a ? a : `https://invalid-cloudflare-share.cf.metaaiusercontent.com${n}`
  }, "cloudflareSharedSpaceHostLabel", 0, i, "isCloudflareSharedSpaceHost", 0, function(e) {
    return null != i(e)
  }])
}]);

//# debugId=286ac002-97c6-c6ee-f28d-f0ec9a2a1191
//# sourceMappingURL=20cokvrnew101.js.map