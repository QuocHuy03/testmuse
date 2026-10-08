;
! function() {
  try {
    var e = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof global ? global : "undefined" != typeof window ? window : "undefined" != typeof self ? self : {},
      n = (new e.Error).stack;
    n && ((e._debugIds || (e._debugIds = {}))[n] = "fbb51e32-8d32-fa39-6e8d-c64592713cfd")
  } catch (e) {}
}();
(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push(["object" == typeof document ? document.currentScript : void 0, 176048, e => {
  "use strict";
  var t = e.i(984416),
    r = e.i(519172),
    n = e.i(880162),
    l = e.i(89820);
  e.s(["EctoGracefulImage", 0, function({
    fade: e = !0,
    scale: a = !1,
    blur: i = !1,
    duration: s = .5,
    className: o,
    style: u,
    draggable: c = !1,
    onReady: h,
    onReveal: p,
    onTransitionEnd: m,
    onTransitionCancel: d,
    src: g,
    crossOrigin: y,
    ...f
  }) {
    let [C, N] = (0, r.useState)(!1), _ = !0 === (0, n.useReducedMotion)(), b = (0, r.useRef)(C), v = (0, r.useRef)(!1), S = (0, r.useRef)(null), w = (0, r.useRef)(h), k = (0, r.useRef)(p);
    b.current = C, w.current = h, k.current = p;
    let x = (0, r.useCallback)(() => {
      v.current || (v.current = !0, k.current?.())
    }, []);
    (0, r.useEffect)(() => {
      let e = S.current;
      if (null == e || b.current) return;
      let t = !1,
        r = () => {
          t || (t = !0, N(!0), w.current?.())
        };
      if (e.complete && e.naturalWidth > 0) return void r();
      e.decode?.()?.then(r, r), e.addEventListener("load", r), e.addEventListener("error", r);
      let n = requestAnimationFrame(() => {
        e.complete && e.naturalWidth > 0 && r()
      });
      return () => {
        t = !0, cancelAnimationFrame(n), e.removeEventListener("load", r), e.removeEventListener("error", r)
      }
    }, [g]), (0, r.useEffect)(() => {
      C && (!e || s <= 0 || _) && x()
    }, [s, e, x, C, _]);
    let M = (0, r.useMemo)(() => {
      let t = [];
      e && t.push("opacity"), a && t.push("transform"), i && t.push("filter");
      let r = t.length > 0 && !_ && s > 0 ? `${t.join(", ")} ${s}s ease-out` : void 0;
      return {
        ...u,
        opacity: C ? 1 : +!e,
        transform: a ? C ? "scale(1)" : "scale(0.95)" : void 0,
        filter: i ? C ? "blur(0px)" : "blur(10px)" : void 0,
        transition: r
      }
    }, [i, s, e, C, _, a, u]);
    return (0, t.jsx)("img", {
      ref: S,
      ...f,
      src: g,
      draggable: c,
      className: o,
      style: M,
      onTransitionEnd: e => {
        m?.(e), C && e.target === e.currentTarget && "opacity" === e.propertyName && x()
      },
      onTransitionCancel: e => {
        d?.(e), C && e.target === e.currentTarget && "opacity" === e.propertyName && x()
      },
      crossOrigin: y ?? (0, l.getSignedMediaCrossOrigin)("string" == typeof g ? g : void 0)
    })
  }])
}, 239286, e => {
  "use strict";
  var t = e.i(984416),
    r = e.i(722099),
    n = e.i(345717),
    l = e.i(374785);
  let a = {
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
    let s, o, u, c, h, p, m = (0, r.c)(15),
      {
        color: d,
        size: g,
        isDecorative: y,
        className: f,
        testid: C
      } = e,
      N = void 0 !== y && y,
      _ = N ? void 0 : "status";
    m[0] !== N ? (s = N ? void 0 : n.fbs._("Loading", null, {
      hk: "qoiH1"
    }), m[0] = N, m[1] = s) : s = m[1];
    let b = !!N || void 0,
      v = i[void 0 === g ? 16 : g],
      S = a[void 0 === d ? "primary" : d];
    return m[2] !== f || m[3] !== v || m[4] !== S ? (o = (0, l.cn)("motion-safe:animate-spin", v, S, f), m[2] = f, m[3] = v, m[4] = S, m[5] = o) : o = m[5], m[6] === Symbol.for("react.memo_cache_sentinel") ? (u = (0, t.jsx)("path", {
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
    }), h = (0, t.jsx)("path", {
      d: "M12 21.25A9.25 9.25 0 0 1 2.75 12",
      stroke: "currentColor",
      strokeWidth: 2,
      strokeLinecap: "round",
      opacity: .3
    }), m[6] = u, m[7] = c, m[8] = h) : (u = m[6], c = m[7], h = m[8]), m[9] !== _ || m[10] !== s || m[11] !== b || m[12] !== o || m[13] !== C ? (p = (0, t.jsxs)("svg", {
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      role: _,
      "aria-label": s,
      "aria-hidden": b,
      "data-testid": C,
      "data-visualcompletion": "loading-state",
      className: o,
      children: [u, c, h]
    }), m[9] = _, m[10] = s, m[11] = b, m[12] = o, m[13] = C, m[14] = p) : p = m[14], p
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

  function l(e) {
    let r = t.indexOf(e);
    return r < 0 ? [e] : t.slice(Math.max(0, r - 4), Math.min(t.length, r + 4 + 1))
  }
  let a = new Set(["s20_sharp_x", "s22_plus"]);
  e.s(["COOPICON_PALETTE_COLORS", 0, ["blue", "cyan", "teal", "shamrock", "green", "olive", "yellow", "orange", "red", "rose", "pink", "violet", "purple", "indigo", "cool-gray", "gray"], "COOPICON_PALETTE_HUE_ANCHORS", 0, r, "COOPICON_PALETTE_STEPS", 0, t, "COOPICON_SHAPE_NAMES", 0, n, "getCoopiconGlyphColor", 0, function(e) {
    return e <= 400 ? "var(--color-gray-1100)" : "var(--white)"
  }, "getCoopiconPaletteColorToken", 0, function(e, t) {
    return `var(--color-${e}-${t})`
  }, "getCoopiconPaletteStepOptions", 0, function(e) {
    return l(r[e])
  }, "getCoopiconPaletteStepRange", 0, l, "getCoopiconSelectedGlyphSize", 0, function(e) {
    let t = "number" == typeof e ? n[e - 1] : e;
    return null != t && a.has(t) ? 16 : 20
  }])
}, 731714, e => {
  "use strict";
  var t = e.i(957948),
    r = e.i(519172);
  e.s(["useMergeRefs", 0, function(...e) {
    return (0, r.useMemo)(() => (0, t.default)(...e), [...e])
  }])
}, 744387, e => {
  "use strict";
  e.s(["usePressable", 0, function(e, t = 0) {
    return e ? {
      role: "button",
      tabIndex: t,
      onClick: e,
      onKeyDown: t => {
        ("Enter" === t.key || " " === t.key) && (t.preventDefault(), e(t))
      }
    } : {}
  }])
}, 121869, e => {
  "use strict";
  var t = e.i(298142),
    r = e.i(120511);
  let n = {
      glyphName: "audio"
    },
    l = {
      glyphName: "code-file",
      aliases: ["code-document"]
    },
    a = {
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
    h = {
      glyphName: "text",
      aliases: ["markdown", "md"]
    },
    p = {
      glyphName: "word",
      aliases: ["document-word", "docx"]
    },
    m = [{
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
    }, l, {
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
    }, a, {
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
    }, h, {
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
    }, p, {
      glyphName: "wrench"
    }, {
      glyphName: "zip"
    }],
    d = new Set(t.COOPICON_PALETTE_COLORS),
    g = new Set(t.COOPICON_PALETTE_STEPS),
    y = new Set(["chat", "four-shapes", "lightbulb", "target"]),
    f = m.filter(e => (!("generated" in e) || !1 !== e.generated) && !y.has(e.glyphName));
  f.map(({
    glyphName: e
  }) => e);
  let C = new Map(m.flatMap(e => [e.glyphName, ..."aliases" in e ? e.aliases : []].map(t => [t, e.glyphName]))),
    N = {
      audio: n,
      csv: a,
      document: p,
      html: l,
      image: s,
      json: l,
      markdown: h,
      pdf: i,
      presentation: o,
      spreadsheet: a,
      text: h,
      unsupported: c,
      video: u
    },
    _ = {
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

  function v(e, t) {
    return e[function(e) {
      let t = 0x811c9dc5;
      for (let r = 0; r < e.length; r += 1) t ^= e.charCodeAt(r), t = Math.imul(t, 0x1000193);
      return t >>> 0
    }(t) % e.length]
  }

  function S(e, n, l) {
    let a = function(e) {
        let t = e.trim().replace(/^sandbox:\/\//, "").split(/[?#]/, 1)[0].replace(/^\/+/, "").replace(/\/{2,}/g, "/"),
          r = t.split("/").filter(e => e.length > 0),
          n = r.findIndex(e => "artifacts" === e || "your_files" === e);
        if (n >= 0) {
          let e = r.slice(n);
          if (e.length >= 2) return e.join("/")
        }
        let l = r.findIndex(e => "spaces" === e || "space_data" === e);
        if (l >= 0) {
          let e = r[l + 1];
          if (null != e) return `space/${e}`
        }
        return t
      }(e),
      i = function(e, t, n = !1) {
        return n || e.startsWith("space/") ? v(f, `${e}:glyph`) : N[t ?? (0, r.getFileCategory)(e)]
      }(a, n, l?.seedGlyphByIdentifier === !0),
      s = l?.forceCircleShape ? "s02_circle" : v(t.COOPICON_SHAPE_NAMES, `${a}:shape`),
      {
        color: o,
        colorStep: u
      } = function(e, n) {
        if (e.startsWith("space/")) {
          let r = v(t.COOPICON_PALETTE_COLORS, `${e}:color`);
          return {
            color: r,
            colorStep: v((0, t.getCoopiconPaletteStepOptions)(r), `${e}:color-step`)
          }
        }
        let l = _[n ?? (0, r.getFileCategory)(e)];
        return {
          color: l,
          colorStep: t.COOPICON_PALETTE_HUE_ANCHORS[l]
        }
      }(a, n),
      c = s.replace(/^s\d+_/, "").replaceAll("_", "-"),
      h = new URLSearchParams({
        glyph: i.glyphName,
        color: `${o}-${u}`,
        mask: c,
        rotation: "0"
      });
    return `icon://coopicon?${h.toString()}`
  }

  function w(e) {
    let t = e?.trim().toLowerCase().replaceAll("_", "-") ?? "";
    return t.length > 0 ? t : null
  }
  e.s(["getGeneratedArtifactCoopiconIconUrl", 0, function(e, t, r) {
    return S(e, t, {
      forceCircleShape: !r,
      seedGlyphByIdentifier: r
    })
  }, "getGeneratedCoopiconIconUrl", 0, function(e, t) {
    return S(e, t)
  }, "getLibraryArtifactCoopiconIconUrl", 0, function(e, t, r) {
    return S(e, t, {
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
    let n = w(t.searchParams.get("glyph")),
      l = null == n ? null : C.get(n),
      a = w(t.searchParams.get("mask") ?? t.searchParams.get("shape")),
      i = null == a ? null : b.get(a),
      s = function(e, t) {
        let r = w(e);
        if (null == r) return null;
        let n = t?.trim() ?? "";
        if (n.length > 0) {
          let e = Number(n);
          return d.has(r) && g.has(e) ? {
            color: r,
            colorStep: e
          } : null
        }
        let l = r.lastIndexOf("-");
        if (l <= 0) return null;
        let a = r.slice(0, l),
          i = Number(r.slice(l + 1));
        return d.has(a) && g.has(i) ? {
          color: a,
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
    return null == l || null == i || null == s || null == o ? null : {
      glyphName: l,
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
    let r, n, l = e?.trim() ?? "";
    return (n = (r = l.split(/[?#]/, 1)[0] ?? l).split("/"), (r.startsWith("/") ? n.slice(1) : n).some(e => 0 === e.length || "." === e || ".." === e)) ? null : l.startsWith("workspace/") ? `/${l}` : l.startsWith("/workspace/") || t.some(e => l.startsWith(e)) ? l : null
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
  e.s(["beginSpaceCatalogReconciliation", 0, function(e, l, a) {
    let i = e.getQueryData(t.list(l, !0));
    if (i?.some(e => e.slug === a && !0 !== e.is_saved_foreign_share) === !0) return null;
    let s = {
      generation: r++,
      status: "pending"
    };
    return e.setQueryData(n(l, a), s), s
  }, "failSpaceCatalogReconciliation", 0, function(e, t, r, l) {
    e.setQueryData(n(t, r), e => e?.generation === l.generation ? {
      generation: l.generation,
      status: "error"
    } : e ?? null)
  }, "finishSpaceCatalogReconciliation", 0, function(e, t, r, l) {
    e.setQueryData(n(t, r), e => e?.generation === l.generation ? null : e ?? null)
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
    l = e.i(141571),
    a = e.i(971743),
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
    let l = r.trim(),
      a = e.gatewayUrl;
    if (0 === l.length || null == a || 0 === a.length) return {
      status: "missing"
    };
    let h = {
        gatewayUrl: a,
        includeConstructing: !0
      },
      p = e => e?.find(e => e.slug === l && !0 !== e.is_saved_foreign_share) ?? null,
      m = p(t.getQueryData(u.queryKey(h)));
    if (null != m) return {
      status: "found",
      space: m
    };
    let d = u.queryKey(h);
    t.cancelQueries({
      queryKey: d,
      exact: !0
    });
    let g = s++,
      y = (0, n.spaceCatalogReconciliationOwnerQueryKey)(a, l),
      f = (0, n.spaceCatalogReconciliationRequestQueryKey)(a, l, g);
    t.setQueryData(y, g);
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
      t.getQueryData(y) === g && u.setData(t, h, r);
      let n = p(r);
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
      t.getQueryData(y) === g && t.removeQueries({
        queryKey: y,
        exact: !0
      })
    }
  }

  function h(e) {
    if ("string" != typeof e) return null;
    let t = e.trim();
    return t.length > 0 ? t : null
  }
  let p = /^[a-z0-9-]+$/i;

  function m({
    imageUrl: e,
    isSavedForeignShare: t,
    shortcode: r,
    shareType: n,
    sourceUrl: a
  }) {
    let i;
    if (!t || null == r) return e;
    let s = n?.trim().toLowerCase() ?? "";
    if ("cloudflare" === s) return (0, l.buildCloudflareSharedSpaceUrl)(r, "/assets/icon.jpg") ?? e;
    let o = function(e) {
        if (null == e) return null;
        try {
          let t = new URL(e);
          return new URL(t.origin)
        } catch {
          return null
        }
      }(a),
      u = o?.hostname.toLowerCase() ?? "";
    if (null != o && (0, l.isCloudflareSharedSpaceHost)(u)) return `${o.origin}/assets/icon.jpg`;
    if ("tinker" === s || u.length > 0 && u.endsWith(".h.metaaiusercontent.com")) return p.test(r) ? `https://${r}.h.metaaiusercontent.com/assets/icon.jpg` : e;
    if (null != o && u.endsWith(".s.metaaiusercontent.com")) return `${o.origin}/icon.jpg`;
    let c = -1 === (i = r.lastIndexOf("-")) ? r : r.slice(i + 1);
    return p.test(c) ? `https://${c}.s.metaaiusercontent.com/icon.jpg` : e
  }

  function d(e, t, r) {
    return t * Math.exp(-(r - e) / 6048e5)
  }

  function g(e, t, r) {
    let n = d(e.accessedAtMs ?? 0, e.frequencyScore ?? 0, r);
    return d(t.accessedAtMs ?? 0, t.frequencyScore ?? 0, r) - n || (t.accessedAtMs ?? 0) - (e.accessedAtMs ?? 0)
  }

  function y(e) {
    if (!Array.isArray(e.spaces)) throw Error("Invalid spaces.list response");
    let t = e.spaces.map(e => "object" == typeof e && null != e ? function(e) {
      let t, r = h(e.slug),
        n = h(e.space_id),
        l = r ?? n,
        i = h(e.name);
      if (null == l || null == i) return null;
      let s = null == (t = h(e.image_url)) ? null : t,
        o = !0 === e.is_shared,
        u = h(e.shortcode),
        c = h(e.share_type),
        p = h(e.source_url);
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
        slug: l,
        ...null != n && n !== l ? {
          space_id: n
        } : {},
        image_url: m({
          imageUrl: s,
          isSavedForeignShare: o,
          shortcode: u,
          shareType: c,
          sourceUrl: p
        }),
        name: i,
        updated_at_ms: (0, a.normalizeFiniteNumber)(e.updated_at_ms),
        accessed_at_ms: (0, a.normalizeFiniteNumber)(e.accessed_at_ms),
        frequency_score: (0, a.normalizeFiniteNumber)(e.frequency_score),
        favorite_order: (0, a.normalizeFiniteNumber)(e.favorite_order),
        preview_image: function(e) {
          if ("object" != typeof e || null == e || Array.isArray(e)) return null;
          let t = h(e.version),
            r = h(e.thumbnail_url),
            n = h(e.preview_card_url);
          return null == t || null == r || null == n ? null : {
            version: t,
            icon_url: h(e.icon_url),
            thumbnail_url: r,
            thumbnail_width_px: (0, a.normalizeFiniteNumber)(e.thumbnail_width_px),
            thumbnail_height_px: (0, a.normalizeFiniteNumber)(e.thumbnail_height_px),
            preview_card_url: n,
            preview_card_width_px: (0, a.normalizeFiniteNumber)(e.preview_card_width_px),
            preview_card_height_px: (0, a.normalizeFiniteNumber)(e.preview_card_height_px)
          }
        }(e.preview_image),
        is_saved_foreign_share: o,
        runtime: "string" == typeof e.runtime ? e.runtime : null,
        is_current_build_published: "boolean" == typeof e.is_current_build_published ? e.is_current_build_published : null,
        has_server_actions: "boolean" == typeof e.has_server_actions ? e.has_server_actions : null,
        shortcode: u,
        share_type: c,
        source_url: p
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
      l = h(n.slug),
      a = h(n.space_id),
      i = l ?? r;
    if (!1 === n.ok) throw Error(`Failed to delete space ${i}`);
    return {
      deletedIdentifiers: Array.from(new Set([r, ...null == l ? [] : [l], ...null == a ? [] : [a]])),
      deletedSlug: i
    }
  }
  e.s(["calculateScoreDecay", 0, d, "compareByFrecentScore", 0, g, "compareSpacesByFrecentScore", 0, function(e, t, r) {
    return g({
      accessedAtMs: e.accessed_at_ms,
      frequencyScore: e.frequency_score
    }, {
      accessedAtMs: t.accessed_at_ms,
      frequencyScore: t.frequency_score
    }, r)
  }, "deleteSpace", 0, f, "ensureOwnedSpaceCatalogEntry", 0, c, "loggableSpaceId", 0, function(e) {
    return e.space_id ?? null
  }, "normalizeSpacesResponse", 0, y, "savedSharedSpaceIconUrl", 0, m, "spacesListQuery", 0, u])
}, 592708, e => {
  "use strict";
  async function t(e) {
    var t;
    let r = e.slice(0, 12),
      n = new Uint8Array("function" == typeof r.arrayBuffer ? await r.arrayBuffer() : await (t = r, new Promise((e, r) => {
        let n = new FileReader;
        n.onload = () => e(n.result), n.onerror = () => r(n.error), n.readAsArrayBuffer(t)
      }))),
      l = (e, t) => String.fromCharCode(...n.subarray(e, t));
    return n.length >= 3 && 255 === n[0] && 216 === n[1] && 255 === n[2] ? "image/jpeg" : n.length >= 8 && 137 === n[0] && "PNG\r\n\x1a\n" === l(1, 8) ? "image/png" : 12 === n.length && "RIFF" === l(0, 4) && "WEBP" === l(8, 12) ? "image/webp" : e.type || null
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
    l = e.i(960607),
    a = e.i(499608),
    i = e.i(709853),
    s = e.i(582002),
    o = e.i(592708),
    u = e.i(722469),
    c = e.i(539522),
    h = e.i(121869);
  let p = "sandbox://";

  function m(e) {
    let t = e?.trim() ?? "";
    return t.startsWith(p) && (t = t.slice(p.length)), t
  }

  function d(e) {
    let t = m(e);
    if (0 === t.length) return {
      kind: "none"
    };
    if (/^(https?:|data:|blob:|\/\/)/i.test(t)) {
      let e = (0, l.getHatchVmMedia)(t);
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
    if (null != (0, h.parseCoopiconIconUrl)(t)) return {
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
    let [r = "", n = ""] = t.split("?", 2), a = r.replace(/^\/+/, "");
    return 0 === a.length ? {
      kind: "none"
    } : {
      kind: "local",
      path: `/${a}${n?`?${n}`:""}`,
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
    let t = m(e);
    if (0 === t.length) return null;
    let r = (0, l.getHatchVmMedia)(t);
    return r.isVm ? r.noisePath : /^(https?:|data:|blob:|\/\/)/i.test(t) || null != (0, h.parseCoopiconIconUrl)(t) || /^[a-z][a-z0-9+.-]*:/i.test(t) ? null : (0, c.resolveLocalImagePath)(t)
  }], 246586);
  var g = e.i(175286);
  let y = new WeakMap,
    f = new Map;

  function C(e, o) {
    let u, c, h, p, m, y, f, C, N, _ = (0, t.c)(28),
      b = (0, n.useQueryClient)(),
      {
        gatewayUrl: v
      } = (0, g.useHatchRpc)();
    _[0] !== e ? (u = d(e), _[0] = e, _[1] = u) : u = _[1];
    let S = u,
      w = "none" === S.kind ? null : "passthrough" === S.kind ? S.src : S.path,
      k = "local" === S.kind ? S.path : null,
      x = "local" === S.kind && S.urlEncoded,
      M = (0, r.useRef)(o);
    _[2] !== k || _[3] !== b || _[4] !== o ? (c = () => {
      if (null == k || M.current === o) {
        M.current = o;
        return
      }
      M.current = o, b.removeQueries({
        queryKey: a.fileQueryKeys.contentPathPrefix(k)
      })
    }, h = [k, b, o], _[2] = k, _[3] = b, _[4] = o, _[5] = c, _[6] = h) : (c = _[5], h = _[6]), (0, r.useEffect)(c, h), _[7] !== v ? (p = null == v ? null : (0, s.getArtifactIconCacheHost)(v), _[7] = v, _[8] = p) : p = _[8];
    let O = p;
    _[9] !== O ? (m = (e, t, r) => null == O ? t() : (0, s.resolveArtifactIconBlob)(O, e, t, r), _[9] = O, _[10] = m) : m = _[10];
    let P = m,
      R = null != k;
    _[11] !== O || _[12] !== P ? (y = null != O ? {
      resolveBlob: P
    } : {}, _[11] = O, _[12] = P, _[13] = y) : y = _[13], _[14] !== x || _[15] !== R || _[16] !== y ? (f = {
      enabled: R,
      urlEncodedPath: x,
      ...y
    }, _[14] = x, _[15] = R, _[16] = y, _[17] = f) : f = _[17];
    let {
      data: E,
      isError: A,
      fetchStatus: I
    } = (0, a.useRawQuery)(k, f);
    _[18] !== k || _[19] !== x ? (C = null != k ? (0, l.mediaCacheKey)(k, x) : null, _[18] = k, _[19] = x, _[20] = C) : C = _[20];
    let L = (0, i.useCachedBlobUrl)(C, E, k ?? void 0);
    return _[21] !== I || _[22] !== A || _[23] !== E || _[24] !== L || _[25] !== k || _[26] !== w ? (N = null == k ? {
      url: w,
      blob: null,
      isPending: !1
    } : {
      url: L,
      blob: E ?? null,
      isPending: null == L && (!A || "fetching" === I)
    }, _[21] = I, _[22] = A, _[23] = E, _[24] = L, _[25] = k, _[26] = w, _[27] = N) : N = _[27], N
  }
  e.s(["useSpaceImage", 0, function(e, n) {
    let l, a, i, s, u = (0, t.c)(15),
      {
        url: c,
        blob: h,
        isPending: p
      } = C(e, n),
      [m, d] = (0, r.useState)(null);
    if (u[0] !== h || u[1] !== e ? (l = () => {
        if (null == h) return;
        let t = !1;
        return (y.has(h) ? Promise.resolve(y.get(h) ?? null) : (0, o.sniffImageMimeType)(h).catch(() => h.type || null)).then(r => {
          y.set(h, r), null != e && f.set(e, r), t || d({
            blob: h,
            mimeType: r
          })
        }), () => {
          t = !0
        }
      }, a = [h, e], u[0] = h, u[1] = e, u[2] = l, u[3] = a) : (l = u[2], a = u[3]), (0, r.useEffect)(l, a), null == h) {
      let e;
      return u[4] !== c || u[5] !== p ? (e = {
        url: c,
        mimeType: null,
        isPending: p
      }, u[4] = c, u[5] = p, u[6] = e) : e = u[6], e
    }
    if (u[7] !== h || u[8] !== m || u[9] !== e) i = m?.blob === h ? m.mimeType : y.has(h) ? y.get(h) ?? null : !!(null != e && f.has(e)) && (f.get(e) ?? null), u[7] = h, u[8] = m, u[9] = e, u[10] = i;
    else i = u[10];
    let g = i;
    return u[11] !== c || u[12] !== p || u[13] !== g ? (s = !1 === g ? {
      url: null,
      mimeType: null,
      isPending: !0
    } : {
      url: c,
      mimeType: g,
      isPending: p
    }, u[11] = c, u[12] = p, u[13] = g, u[14] = s) : s = u[14], s
  }, "useSpaceImageState", 0, function(e, r) {
    let n, l = (0, t.c)(3),
      {
        url: a,
        isPending: i
      } = C(e, r);
    return l[0] !== a || l[1] !== i ? (n = {
      url: a,
      isPending: i
    }, l[0] = a, l[1] = i, l[2] = n) : n = l[2], n
  }, "useSpaceImageUrl", 0, function(e, t) {
    return C(e, t).url
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
}, 503037, e => {
  "use strict";
  var t = e.i(519172),
    r = e.i(51449),
    n = e.i(259864),
    l = e.i(578889),
    a = e.i(766271),
    i = class extends l.Subscribable {
      #e;
      #t = void 0;
      #r;
      #n;
      constructor(e, t) {
        super(), this.#e = e, this.setOptions(t), this.bindMethods(), this.#l()
      }
      bindMethods() {
        this.mutate = this.mutate.bind(this), this.reset = this.reset.bind(this)
      }
      setOptions(e) {
        let t = this.options;
        this.options = this.#e.defaultMutationOptions(e), (0, a.shallowEqualObjects)(this.options, t) || this.#e.getMutationCache().notify({
          type: "observerOptionsUpdated",
          mutation: this.#r,
          observer: this
        }), t?.mutationKey && this.options.mutationKey && (0, a.hashKey)(t.mutationKey) !== (0, a.hashKey)(this.options.mutationKey) ? this.reset() : this.#r?.state.status === "pending" && this.#r.setOptions(this.options)
      }
      onUnsubscribe() {
        this.hasListeners() || this.#r?.removeObserver(this)
      }
      onMutationUpdate(e) {
        this.#l(), this.#a(e)
      }
      getCurrentResult() {
        return this.#t
      }
      reset() {
        this.#r?.removeObserver(this), this.#r = void 0, this.#l(), this.#a()
      }
      mutate(e, t) {
        return this.#n = t, this.#r?.removeObserver(this), this.#r = this.#e.getMutationCache().build(this.#e, this.options), this.#r.addObserver(this), this.#r.execute(e)
      }
      #l() {
        let e = this.#r?.state ?? (0, r.getDefaultState)();
        this.#t = {
          ...e,
          isPending: "pending" === e.status,
          isSuccess: "success" === e.status,
          isError: "error" === e.status,
          isIdle: "idle" === e.status,
          mutate: this.mutate,
          reset: this.reset
        }
      }
      #a(e) {
        n.notifyManager.batch(() => {
          if (this.#n && this.hasListeners()) {
            let t = this.#t.variables,
              r = this.#t.context,
              n = {
                client: this.#e,
                meta: this.options.meta,
                mutationKey: this.options.mutationKey
              };
            if (e?.type === "success") {
              try {
                this.#n.onSuccess?.(e.data, t, r, n)
              } catch (e) {
                Promise.reject(e)
              }
              try {
                this.#n.onSettled?.(e.data, null, t, r, n)
              } catch (e) {
                Promise.reject(e)
              }
            } else if (e?.type === "error") {
              try {
                this.#n.onError?.(e.error, t, r, n)
              } catch (e) {
                Promise.reject(e)
              }
              try {
                this.#n.onSettled?.(void 0, e.error, t, r, n)
              } catch (e) {
                Promise.reject(e)
              }
            }
          }
          this.listeners.forEach(e => {
            e(this.#t)
          })
        })
      }
    },
    s = e.i(393202);
  e.s(["useMutation", 0, function(e, r) {
    let l = (0, s.useQueryClient)(r),
      [o] = t.useState(() => new i(l, e));
    t.useEffect(() => {
      o.setOptions(e)
    }, [o, e]);
    let u = t.useSyncExternalStore(t.useCallback(e => o.subscribe(n.notifyManager.batchCalls(e)), [o]), () => o.getCurrentResult(), () => o.getCurrentResult()),
      c = t.useCallback((e, t) => {
        o.mutate(e, t).catch(a.noop)
      }, [o]);
    if (u.error && (0, a.shouldThrowError)(o.options.throwOnError, [u.error])) throw u.error;
    return {
      ...u,
      mutate: c,
      mutateAsync: u.mutate
    }
  }], 503037)
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
}, 867545, e => {
  "use strict";
  var t = e.i(984416),
    r = e.i(722099);

  function n(e) {
    let n, l, a, i, s, o, u = (0, r.c)(11);
    return u[0] !== e.title ? (n = null != e.title && (0, t.jsx)("title", {
      children: e.title
    }), u[0] = e.title, u[1] = n) : n = u[1], u[2] !== e.children ? (l = null != e.children && (0, t.jsx)("defs", {
      children: e.children
    }), u[2] = e.children, u[3] = l) : l = u[3], u[4] === Symbol.for("react.memo_cache_sentinel") ? (a = (0, t.jsx)("path", {
      d: "M4 10C5.1 10 6 10.9 6 12C6 13.1 5.1 14 4 14C2.9 14 2 13.1 2 12C2 10.9 2.9 10 4 10Z"
    }), i = (0, t.jsx)("path", {
      d: "M12 10C13.1 10 14 10.9 14 12C14 13.1 13.1 14 12 14C10.9 14 10 13.1 10 12C10 10.9 10.9 10 12 10Z"
    }), s = (0, t.jsx)("path", {
      d: "M20 10C21.1 10 22 10.9 22 12C22 13.1 21.1 14 20 14C18.9 14 18 13.1 18 12C18 10.9 18.9 10 20 10Z"
    }), u[4] = a, u[5] = i, u[6] = s) : (a = u[4], i = u[5], s = u[6]), u[7] !== e || u[8] !== n || u[9] !== l ? (o = (0, t.jsxs)("svg", {
      viewBox: "0 0 24 24",
      fill: "currentColor",
      width: "1em",
      height: "1em",
      ...e,
      children: [n, l, a, i, s]
    }), u[7] = e, u[8] = n, u[9] = l, u[10] = o) : o = u[10], o
  }
  n._isSVG = !0, e.s(["default", 0, n])
}, 432964, e => {
  "use strict";
  var t = e.i(984416),
    r = e.i(722099);

  function n(e) {
    let n, l, a, i, s = (0, r.c)(9);
    return s[0] !== e.title ? (n = null != e.title && (0, t.jsx)("title", {
      children: e.title
    }), s[0] = e.title, s[1] = n) : n = s[1], s[2] !== e.children ? (l = null != e.children && (0, t.jsx)("defs", {
      children: e.children
    }), s[2] = e.children, s[3] = l) : l = s[3], s[4] === Symbol.for("react.memo_cache_sentinel") ? (a = (0, t.jsx)("path", {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M7.01 1.13C7.33 1.13 7.64 1.12 7.93 1.19C8.18 1.25 8.41 1.34 8.62 1.47C8.88 1.63 9.09 1.85 9.32 2.08L10.36 3.13H18.2C19.03 3.13 19.7 3.12 20.24 3.17C20.8 3.21 21.29 3.31 21.76 3.55C22.49 3.92 23.08 4.51 23.45 5.24C23.69 5.71 23.79 6.2 23.83 6.76C23.88 7.3 23.88 7.97 23.88 8.8V15H23.87C23.87 15.92 23.87 16.68 23.82 17.3C23.76 18.02 23.63 18.64 23.34 19.21C22.88 20.13 22.13 20.88 21.21 21.34C20.64 21.64 20.02 21.76 19.3 21.82C18.59 21.88 17.71 21.88 16.6 21.88H7.4C6.29 21.88 5.41 21.88 4.7 21.82C3.98 21.76 3.36 21.64 2.79 21.34C1.87 20.88 1.12 20.13 0.66 19.21C0.37 18.64 0.24 18.02 0.18 17.3C0.13 16.68 0.13 15.92 0.13 15H0.13V6.8C0.13 5.97 0.12 5.3 0.17 4.76C0.21 4.2 0.31 3.71 0.55 3.24C0.92 2.51 1.51 1.92 2.24 1.55C2.71 1.31 3.2 1.21 3.76 1.17C4.3 1.12 4.97 1.13 5.8 1.13H7.01ZM5.8 8.88C4.95 8.88 4.36 8.88 3.9 8.91C3.45 8.95 3.21 9.02 3.04 9.11C2.64 9.31 2.31 9.64 2.11 10.04C2.02 10.21 1.95 10.45 1.91 10.9C1.88 11.36 1.88 11.95 1.88 12.8V14.6C1.88 15.73 1.88 16.53 1.93 17.16C1.98 17.77 2.07 18.14 2.22 18.42C2.52 19.01 2.99 19.48 3.58 19.78C3.86 19.93 4.23 20.02 4.84 20.07C5.47 20.12 6.27 20.13 7.4 20.13H16.6C17.73 20.13 18.53 20.12 19.16 20.07C19.77 20.02 20.14 19.93 20.42 19.78C21.01 19.48 21.48 19.01 21.78 18.42C21.93 18.14 22.02 17.77 22.07 17.16C22.12 16.53 22.13 15.73 22.13 14.6V12.8C22.13 11.95 22.12 11.36 22.09 10.9C22.05 10.45 21.98 10.21 21.89 10.04C21.69 9.64 21.36 9.31 20.96 9.11C20.79 9.02 20.55 8.95 20.1 8.91C19.64 8.88 19.05 8.88 18.2 8.88H5.8ZM5.8 2.88C4.95 2.88 4.36 2.88 3.9 2.91C3.45 2.95 3.21 3.02 3.04 3.11C2.64 3.31 2.31 3.64 2.11 4.04C2.02 4.21 1.95 4.45 1.91 4.9C1.88 5.36 1.88 5.95 1.88 6.8V7.76C1.99 7.69 2.11 7.61 2.24 7.55C2.71 7.31 3.2 7.21 3.76 7.17C4.3 7.12 4.97 7.13 5.8 7.13H18.2C19.03 7.13 19.7 7.12 20.24 7.17C20.8 7.21 21.29 7.31 21.76 7.55C21.88 7.61 22 7.68 22.12 7.76C22.12 7.42 22.11 7.14 22.09 6.9C22.05 6.45 21.98 6.21 21.89 6.04C21.69 5.64 21.36 5.31 20.96 5.11C20.79 5.02 20.55 4.95 20.1 4.91C19.64 4.88 19.05 4.88 18.2 4.88H9.64L9.38 4.62L8.08 3.32C7.8 3.03 7.75 2.99 7.71 2.97C7.65 2.93 7.59 2.91 7.52 2.89C7.48 2.88 7.41 2.88 7.01 2.88H5.8Z"
    }), s[4] = a) : a = s[4], s[5] !== e || s[6] !== n || s[7] !== l ? (i = (0, t.jsxs)("svg", {
      viewBox: "0 0 24 24",
      fill: "currentColor",
      width: "1em",
      height: "1em",
      ...e,
      children: [n, l, a]
    }), s[5] = e, s[6] = n, s[7] = l, s[8] = i) : i = s[8], i
  }
  n._isSVG = !0, e.s(["default", 0, n])
}, 32e4, e => {
  "use strict";
  var t = e.i(984416),
    r = e.i(722099);

  function n(e) {
    let n, l, a, i, s = (0, r.c)(9);
    return s[0] !== e.title ? (n = null != e.title && (0, t.jsx)("title", {
      children: e.title
    }), s[0] = e.title, s[1] = n) : n = s[1], s[2] !== e.children ? (l = null != e.children && (0, t.jsx)("defs", {
      children: e.children
    }), s[2] = e.children, s[3] = l) : l = s[3], s[4] === Symbol.for("react.memo_cache_sentinel") ? (a = (0, t.jsx)("path", {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M12 1.13C18.01 1.13 22.88 5.99 22.88 12C22.88 18.01 18.01 22.88 12 22.88C5.99 22.88 1.13 18.01 1.13 12C1.13 5.99 5.99 1.13 12 1.13ZM8.39 12.88C8.49 15.18 8.95 17.22 9.62 18.71C10.41 20.47 11.32 21.13 12 21.13C12.68 21.13 13.59 20.47 14.38 18.71C15.05 17.22 15.51 15.18 15.61 12.88H8.39ZM2.92 12.88C3.25 16.31 5.48 19.19 8.55 20.45C8.36 20.12 8.18 19.78 8.02 19.43C7.23 17.68 6.74 15.39 6.64 12.88H2.92ZM17.36 12.88C17.26 15.39 16.77 17.68 15.98 19.43C15.82 19.78 15.64 20.12 15.45 20.45C18.52 19.19 20.75 16.31 21.08 12.88H17.36ZM8.55 3.55C5.48 4.81 3.25 7.69 2.92 11.13H6.64C6.74 8.61 7.23 6.32 8.02 4.57C8.18 4.22 8.36 3.88 8.55 3.55ZM12 2.88C11.32 2.88 10.41 3.53 9.62 5.29C8.95 6.78 8.49 8.82 8.39 11.13H15.61C15.51 8.82 15.05 6.78 14.38 5.29C13.59 3.53 12.68 2.88 12 2.88ZM15.45 3.55C15.64 3.88 15.82 4.22 15.98 4.57C16.77 6.32 17.26 8.61 17.36 11.13H21.08C20.75 7.69 18.52 4.81 15.45 3.55Z"
    }), s[4] = a) : a = s[4], s[5] !== e || s[6] !== n || s[7] !== l ? (i = (0, t.jsxs)("svg", {
      viewBox: "0 0 24 24",
      fill: "currentColor",
      width: "1em",
      height: "1em",
      ...e,
      children: [n, l, a]
    }), s[5] = e, s[6] = n, s[7] = l, s[8] = i) : i = s[8], i
  }
  n._isSVG = !0, e.s(["default", 0, n])
}, 141571, e => {
  "use strict";
  let t = ".managed.cf.metaaiusercontent.com",
    r = ".cf.metaaiusercontent.com",
    n = [t, r, ".cf.ecto1usercontent.com"],
    l = /^[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;

  function a(e) {
    let t = e.trim().toLowerCase();
    return 0 === t.length || t.length > 63 || !l.test(t) ? null : t
  }

  function i(e) {
    let t = e.trim().toLowerCase(),
      r = n.find(e => t.endsWith(e));
    return null == r ? null : a(t.slice(0, -r.length))
  }

  function s(e, n = "/index.html", l = !1) {
    let i = function(e, n = !1) {
      let l = a(e);
      return null == l ? null : `https://${l}${n?t:r}`
    }(e, l);
    return null != i && n.startsWith("/") ? `${i}${n}` : null
  }
  e.s(["buildCloudflareSharedSpaceUrl", 0, s, "buildCloudflareSharedSpaceUrlOrInvalidPlaceholder", 0, function(e, t = "/index.html", r = !1) {
    let n = t.startsWith("/") ? t : "/index.html",
      l = s(e, n, r);
    return null != l ? l : `https://invalid-cloudflare-share.cf.metaaiusercontent.com${n}`
  }, "cloudflareSharedSpaceHostLabel", 0, i, "isCloudflareSharedSpaceHost", 0, function(e) {
    return null != i(e)
  }])
}]);

//# debugId=fbb51e32-8d32-fa39-6e8d-c64592713cfd
//# sourceMappingURL=1cirmpidptv_r.js.map