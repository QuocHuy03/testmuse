;
! function() {
  try {
    var e = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof global ? global : "undefined" != typeof window ? window : "undefined" != typeof self ? self : {},
      n = (new e.Error).stack;
    n && ((e._debugIds || (e._debugIds = {}))[n] = "20175de7-0cac-ae1b-2a3f-e4c337e835e4")
  } catch (e) {}
}();
(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push(["object" == typeof document ? document.currentScript : void 0, 298142, e => {
  "use strict";
  let t = [25, 50, 100, 150, 200, 250, 300, 350, 400, 450, 500, 550, 600, 650, 700, 750, 800, 850, 900, 950, 1e3, 1050, 1075, 1100],
    n = {
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
    r = ["s01_clover", "s02_circle", "s03_oval", "s04_pill", "s05_blob", "s06_star", "s07_pill", "s08_cylinder", "s09_peanut", "s10_hexagon", "s11_sunflower", "s12_cross", "s13_h", "s14_h", "s15_sun", "s16_double_diamond", "s17_diamond", "s18_squircle", "s19_star", "s20_sharp_x", "s21_square", "s22_plus", "s23_cross", "s24_flower", "s25_x", "s26_daisy", "s27_h", "s28_bumpy", "s29_drop", "s30_petals", "s31_spike", "s32_mound", "s33_tri", "s34_soft_hex", "s35_pill", "s36_cross"];

  function a(e) {
    let n = t.indexOf(e);
    return n < 0 ? [e] : t.slice(Math.max(0, n - 4), Math.min(t.length, n + 4 + 1))
  }
  let l = new Set(["s20_sharp_x", "s22_plus"]);
  e.s(["COOPICON_PALETTE_COLORS", 0, ["blue", "cyan", "teal", "shamrock", "green", "olive", "yellow", "orange", "red", "rose", "pink", "violet", "purple", "indigo", "cool-gray", "gray"], "COOPICON_PALETTE_HUE_ANCHORS", 0, n, "COOPICON_PALETTE_STEPS", 0, t, "COOPICON_SHAPE_NAMES", 0, r, "getCoopiconGlyphColor", 0, function(e) {
    return e <= 400 ? "var(--color-gray-1100)" : "var(--white)"
  }, "getCoopiconPaletteColorToken", 0, function(e, t) {
    return `var(--color-${e}-${t})`
  }, "getCoopiconPaletteStepOptions", 0, function(e) {
    return a(n[e])
  }, "getCoopiconPaletteStepRange", 0, a, "getCoopiconSelectedGlyphSize", 0, function(e) {
    let t = "number" == typeof e ? r[e - 1] : e;
    return null != t && l.has(t) ? 16 : 20
  }])
}, 121869, e => {
  "use strict";
  var t = e.i(298142),
    n = e.i(120511);
  let r = {
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
    u = {
      glyphName: "powerpoint",
      aliases: ["pptx"]
    },
    o = {
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
    }, r, {
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
    }, i, u, {
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
    }, o, {
      glyphName: "wand"
    }, {
      glyphName: "wand-alt"
    }, m, {
      glyphName: "wrench"
    }, {
      glyphName: "zip"
    }],
    h = new Set(t.COOPICON_PALETTE_COLORS),
    y = new Set(t.COOPICON_PALETTE_STEPS),
    d = new Set(["chat", "four-shapes", "lightbulb", "target"]),
    f = g.filter(e => (!("generated" in e) || !1 !== e.generated) && !d.has(e.glyphName));
  f.map(({
    glyphName: e
  }) => e);
  let _ = new Map(g.flatMap(e => [e.glyphName, ..."aliases" in e ? e.aliases : []].map(t => [t, e.glyphName]))),
    N = {
      audio: r,
      csv: l,
      document: m,
      html: a,
      image: s,
      json: a,
      markdown: p,
      pdf: i,
      presentation: u,
      spreadsheet: l,
      text: p,
      unsupported: c,
      video: o
    },
    b = {
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
    v = new Map(t.COOPICON_SHAPE_NAMES.flatMap(e => {
      let t = e.replace(/^s\d+_/, "").replaceAll("_", "-");
      return [
        [e, e],
        [e.replaceAll("_", "-"), e],
        [t, e]
      ]
    }));

  function S(e, t) {
    return e[function(e) {
      let t = 0x811c9dc5;
      for (let n = 0; n < e.length; n += 1) t ^= e.charCodeAt(n), t = Math.imul(t, 0x1000193);
      return t >>> 0
    }(t) % e.length]
  }

  function C(e, r, a) {
    let l = function(e) {
        let t = e.trim().replace(/^sandbox:\/\//, "").split(/[?#]/, 1)[0].replace(/^\/+/, "").replace(/\/{2,}/g, "/"),
          n = t.split("/").filter(e => e.length > 0),
          r = n.findIndex(e => "artifacts" === e || "your_files" === e);
        if (r >= 0) {
          let e = n.slice(r);
          if (e.length >= 2) return e.join("/")
        }
        let a = n.findIndex(e => "spaces" === e || "space_data" === e);
        if (a >= 0) {
          let e = n[a + 1];
          if (null != e) return `space/${e}`
        }
        return t
      }(e),
      i = function(e, t, r = !1) {
        return r || e.startsWith("space/") ? S(f, `${e}:glyph`) : N[t ?? (0, n.getFileCategory)(e)]
      }(l, r, a?.seedGlyphByIdentifier === !0),
      s = a?.forceCircleShape ? "s02_circle" : S(t.COOPICON_SHAPE_NAMES, `${l}:shape`),
      {
        color: u,
        colorStep: o
      } = function(e, r) {
        if (e.startsWith("space/")) {
          let n = S(t.COOPICON_PALETTE_COLORS, `${e}:color`);
          return {
            color: n,
            colorStep: S((0, t.getCoopiconPaletteStepOptions)(n), `${e}:color-step`)
          }
        }
        let a = b[r ?? (0, n.getFileCategory)(e)];
        return {
          color: a,
          colorStep: t.COOPICON_PALETTE_HUE_ANCHORS[a]
        }
      }(l, r),
      c = s.replace(/^s\d+_/, "").replaceAll("_", "-"),
      p = new URLSearchParams({
        glyph: i.glyphName,
        color: `${u}-${o}`,
        mask: c,
        rotation: "0"
      });
    return `icon://coopicon?${p.toString()}`
  }

  function w(e) {
    let t = e?.trim().toLowerCase().replaceAll("_", "-") ?? "";
    return t.length > 0 ? t : null
  }
  e.s(["getGeneratedArtifactCoopiconIconUrl", 0, function(e, t, n) {
    return C(e, t, {
      forceCircleShape: !n,
      seedGlyphByIdentifier: n
    })
  }, "getGeneratedCoopiconIconUrl", 0, function(e, t) {
    return C(e, t)
  }, "getLibraryArtifactCoopiconIconUrl", 0, function(e, t, n) {
    return C(e, t, {
      forceCircleShape: !0,
      seedGlyphByIdentifier: n
    })
  }, "parseCoopiconIconUrl", 0, function(e) {
    let t, n = e?.trim() ?? "";
    if (0 === n.length) return null;
    try {
      t = new URL(n)
    } catch {
      return null
    }
    if ("icon:" !== t.protocol || "coopicon" !== (t.hostname || t.pathname.replace(/^\/+/, "")).toLowerCase()) return null;
    let r = w(t.searchParams.get("glyph")),
      a = null == r ? null : _.get(r),
      l = w(t.searchParams.get("mask") ?? t.searchParams.get("shape")),
      i = null == l ? null : v.get(l),
      s = function(e, t) {
        let n = w(e);
        if (null == n) return null;
        let r = t?.trim() ?? "";
        if (r.length > 0) {
          let e = Number(r);
          return h.has(n) && y.has(e) ? {
            color: n,
            colorStep: e
          } : null
        }
        let a = n.lastIndexOf("-");
        if (a <= 0) return null;
        let l = n.slice(0, a),
          i = Number(n.slice(a + 1));
        return h.has(l) && y.has(i) ? {
          color: l,
          colorStep: i
        } : null
      }(t.searchParams.get("color"), t.searchParams.get("step") ?? t.searchParams.get("color_step") ?? t.searchParams.get("colorStep")),
      u = function(e) {
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
    return null == a || null == i || null == s || null == u ? null : {
      glyphName: a,
      shape: i,
      color: s.color,
      colorStep: s.colorStep,
      rotation: u
    }
  }])
}, 539522, e => {
  "use strict";
  let t = ["/.", "/home/", "/tmp/", "/Users/"];
  e.s(["resolveLocalImagePath", 0, function(e) {
    let n, r, a = e?.trim() ?? "";
    return (r = (n = a.split(/[?#]/, 1)[0] ?? a).split("/"), (n.startsWith("/") ? r.slice(1) : r).some(e => 0 === e.length || "." === e || ".." === e)) ? null : a.startsWith("workspace/") ? `/${a}` : a.startsWith("/workspace/") || t.some(e => a.startsWith(e)) ? a : null
  }])
}, 782361, e => {
  "use strict";
  var t = e.i(722099),
    n = e.i(519172),
    r = e.i(849329),
    a = e.i(393202),
    l = e.i(359783),
    i = e.i(871157),
    s = e.i(925301),
    u = e.i(175286),
    o = e.i(971743),
    c = e.i(722469),
    p = e.i(863641);
  let m = (0, l.createClientLogger)("NavigationQueries"),
    g = (e, t) => ["navigation", (0, i.gatewayTargetKey)(e, t)],
    h = (e, t) => ["navigation", (0, i.gatewayTargetKey)(e, t), "resolved"];

  function y(e, t, n) {
    e.setQueryData(h(t, n), !0)
  }
  let d = new WeakMap;

  function f(e, t) {
    let n = d.get(e);
    if (n?.targetKey === t) return n;
    let r = {
      generation: (n?.generation ?? 0) + 1,
      targetKey: t
    };
    return d.set(e, r), r
  }

  function _(e, t, n) {
    let r = (0, i.gatewayTargetKey)(t, n),
      a = d.get(e);
    return null == a ? f(e, r) : a.targetKey === r ? a : null
  }

  function N(e, t) {
    if (null == t) return !1;
    let n = d.get(e);
    return n?.targetKey === t.targetKey && n.generation === t.generation
  }

  function b(e, t) {
    return `${e}:${t}`
  }

  function v(e) {
    return b(e.source, e.item_key)
  }

  function S(e) {
    let t = e?.trim();
    if (!t) return null;
    let n = t.startsWith("sandbox://") ? t.slice(10) : t,
      r = ((0, c.getArtifactPrimaryOutputPathFromMetadataPath)(n) ?? n).replace(/^\/+/, "");
    return r.startsWith("workspace/your_files/") ? (0, c.isArtifactMetadataPath)(r) ? null : r : null
  }
  let C = new Map,
    w = new Map,
    k = new Map;

  function I(e, t) {
    if (null == e) return !1;
    let n = Date.now();
    A(n);
    let r = C.get((0, i.gatewayTargetKey)(e, t));
    return null != r && r > n
  }

  function P(e, t) {
    C.delete((0, i.gatewayTargetKey)(e, t))
  }

  function E(e, t, n, r) {
    let a;
    m.error({
      ...null != r ? {
        error: r
      } : {},
      gatewayUrl: t,
      vmName: n,
      tags: {
        surface: p.HATCH_SENTRY_SURFACES.NAVIGATION
      }
    }, "Disabling navigation for gateway: unsupported method"), A(a = Date.now()), C.set((0, i.gatewayTargetKey)(t, n), a + 6e4), e.setQueryData(g(t, n), null), y(e, t, n)
  }

  function A(e) {
    for (let [t, n] of C) n <= e && C.delete(t)
  }

  function R(e) {
    return e?.toLowerCase().trim() ?? ""
  }

  function O(e) {
    let t = R((0, s.isGatewayRequestError)(e) ? e.code : void 0);
    if ("method_not_found" === t || "unknown_method" === t || "unsupported_method" === t || "not_implemented" === t) return !0;
    let n = R(e instanceof Error ? e.message : String(e));
    return n.includes("unknown method") || n.includes("method not found") || n.includes("unsupported method") || n.includes("unrecognized method") || n.includes("not implemented") || n.includes("no handler")
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
      n = null == e.source_url ? null : "string" == typeof e.source_url ? e.source_url : null,
      r = "library" === e.source ? S(e.item_key) : e.item_key;
    return null == r ? null : {
      source: e.source,
      item_key: r,
      display_name: e.display_name,
      icon: t,
      is_favorite: !0 === e.is_favorite,
      favorite_order: !0 === e.is_favorite ? (0, o.normalizeFiniteNumber)(e.favorite_order) : null,
      accessed_at_ms: (0, o.normalizeFiniteNumber)(e.accessed_at_ms),
      frequency_score: (0, o.normalizeFiniteNumber)(e.frequency_score),
      source_url: n
    }
  }

  function Q(e) {
    return "object" == typeof e && null != e && Array.isArray(e.items)
  }

  function x(e) {
    return Q(e) ? e.items.map(e => T(e)).filter(e => null != e) : []
  }

  function D(e, t) {
    return e.source === t.source && e.item_key === t.item_key && e.display_name === t.display_name && e.icon === t.icon && e.is_favorite === t.is_favorite && e.favorite_order === t.favorite_order && e.accessed_at_ms === t.accessed_at_ms && e.frequency_score === t.frequency_score && e.source_url === t.source_url
  }

  function q(e, t, n, r) {
    e.setQueryData(g(t, n), e => {
      let t = e ?? [],
        n = v(r),
        a = !1,
        l = !1,
        i = t.map(e => {
          if (v(e) !== n) return e;
          a = !0;
          let t = {
            ...e,
            ...r,
            icon: r.icon ?? e?.icon ?? null,
            source_url: r.source_url ?? e?.source_url ?? null
          };
          return D(e, t) ? e : (l = !0, t)
        });
      return a ? l ? i : t : [...t, r]
    })
  }

  function F(e, t, n, r, a) {
    let l = v(r);
    e.setQueryData(g(t, n), e => {
      if (null == e) return e;
      let t = e.find(e => v(e) === l);
      return null != t && D(t, r) ? null == a ? e.filter(e => v(e) !== l) : e.map(e => v(e) === l ? a : e) : e
    })
  }

  function K(e) {
    return new Map((e ?? []).map(e => [v(e), e]))
  }

  function U(e = !0) {
    let {
      gatewayUrl: t,
      vmName: l,
      isReady: s,
      sendRequest: o,
      onEvent: c
    } = (0, u.useHatchRpc)(), p = (0, a.useQueryClient)(), m = t ?? "", h = (0, i.gatewayTargetKey)(t, l);
    (0, n.useLayoutEffect)(() => {
      f(p, h)
    }, [p, h]);
    let d = (0, r.useQuery)({
        queryKey: g(m, l),
        queryFn: async () => {
          try {
            let e = await o("navigation.subscribe", {});
            if (P(m, l), Q(e)) {
              let t = x(e);
              return p.setQueryData(g(m, l), t), y(p, m, l), t
            }
            return p.getQueryData(g(m, l)) ?? []
          } catch (e) {
            if (O(e)) return E(p, m, l, e), null;
            throw e
          }
        },
        enabled: !1,
        staleTime: 1 / 0,
        refetchOnMount: !1
      }),
      _ = (0, n.useRef)(d.refetch);
    return _.current = d.refetch, (0, n.useEffect)(() => {
      if (!e || !s || 0 === m.length) return;
      let t = w.get(h);
      if (null != t) return t.refCount += 1, () => {
        t.refCount -= 1, 0 === t.refCount && (t.cleanup(), w.delete(h))
      };
      let n = c("navigation.items.snapshot", e => {
          let t = x(e);
          p.setQueryData(g(m, l), t), y(p, m, l)
        }),
        r = c("navigation.items.updated", e => {
          let t = "object" == typeof e && null != e && "item" in e ? T(e.item) : T(e);
          null != t && q(p, m, l, t)
        });
      w.set(h, {
        cleanup: () => {
          n(), r()
        },
        refCount: 1
      });
      let a = k.get(h);
      return a?.hasSeenReadyConnection === !0 && !1 === a.wasReady || I(m, l) || _.current(), () => {
        let e = w.get(h);
        null != e && (e.refCount -= 1, 0 === e.refCount && (e.cleanup(), w.delete(h)))
      }
    }, [e, s, c, p, m, h, l]), (0, n.useEffect)(() => {
      if (!e || 0 === m.length) return;
      let t = k.get(h);
      return null != t ? t.refCount += 1 : k.set(h, {
        hasSeenReadyConnection: !1,
        refCount: 1,
        wasReady: !1
      }), () => {
        let e = k.get(h);
        null != e && (e.refCount -= 1, 0 === e.refCount && k.delete(h))
      }
    }, [e, m, h]), (0, n.useEffect)(() => {
      if (!e || 0 === m.length) return;
      let t = k.get(h);
      if (!s) return void k.set(h, {
        hasSeenReadyConnection: t?.hasSeenReadyConnection ?? !1,
        refCount: t?.refCount ?? 0,
        wasReady: !1
      });
      if (null == t) return void k.set(h, {
        hasSeenReadyConnection: !0,
        refCount: 0,
        wasReady: !0
      });
      let n = t.wasReady;
      if (t.wasReady = !0, !t.hasSeenReadyConnection) {
        t.hasSeenReadyConnection = !0;
        return
      }
      n || (P(m, l), _.current())
    }, [e, s, m, h, l]), d
  }

  function L(e, t) {
    return e.length !== t.length || e.some((e, n) => e !== t[n])
  }
  async function M(e, t, n) {
    let r = n.trim();
    return 0 === r.length ? null : T((await e("navigation.recents.touch", {
      source: t,
      item_key: r
    })).item)
  }
  async function $(e, t, n) {
    let r = n.trim();
    return 0 === r.length ? null : T((await e("navigation.recents.touch", {
      source: t,
      item_key: r,
      event_type: "remove"
    })).item)
  }
  async function H(e, t, n, r, a, l) {
    let i = _(t, n, r),
      s = await M(e, a, l);
    null != s && N(t, i) && q(t, n, r, s)
  }
  async function z(e, t, n, r) {
    let a = n.trim();
    return 0 === a.length ? null : T((await e("navigation.pinned.set", {
      source: t,
      item_key: a,
      pinned_order: r
    })).item)
  }
  e.s(["getLibraryNavigationItemKeyForFilePath", 0, function(e) {
    return S(e)
  }, "isNavigationUnsupportedForGateway", 0, I, "navigationItemId", 0, b, "optimisticRemoveNavigationRecent", 0, function({
    gatewayUrl: e,
    itemKey: t,
    onError: n,
    queryClient: r,
    sendRequest: a,
    source: l,
    vmName: i
  }) {
    let s = t.trim();
    if (0 === s.length) return;
    let u = _(r, e, i),
      o = r.getQueryData(g(e, i))?.find(e => e.source === l && e.item_key === s);
    if (null == o) return;
    let c = {
      ...o,
      accessed_at_ms: null,
      frequency_score: null
    };
    N(r, u) && q(r, e, i, c), $(a, l, s).then(t => {
      null != t && N(r, u) && q(r, e, i, t)
    }).catch(t => {
      if (m.error({
          error: t,
          gatewayUrl: e,
          itemKey: s,
          source: l,
          tags: {
            surface: p.HATCH_SENTRY_SURFACES.NAVIGATION
          }
        }, "Failed to remove navigation recent"), N(r, u)) {
        if (F(r, e, i, c, o), O(t)) return void E(r, e, i, t);
        n?.(t)
      }
    })
  }, "optimisticSetNavigationPinnedOrder", 0, function({
    displayName: e,
    gatewayUrl: t,
    icon: n = null,
    itemKey: r,
    onError: a,
    pinnedOrder: l,
    queryClient: i,
    sendRequest: s,
    source: u,
    sourceUrl: o = null,
    vmName: c
  }) {
    let h = r.trim();
    if (0 === h.length) return;
    let y = _(i, t, c),
      d = i.getQueryData(g(t, c))?.find(e => e.source === u && e.item_key === h),
      f = {
        source: u,
        item_key: h,
        display_name: d?.display_name ?? e,
        icon: d?.icon ?? n,
        is_favorite: null != l,
        favorite_order: l,
        accessed_at_ms: d?.accessed_at_ms ?? null,
        frequency_score: d?.frequency_score ?? null,
        source_url: d?.source_url ?? o
      };
    N(i, y) && q(i, t, c, f), z(s, u, h, l).then(e => {
      null != e && N(i, y) && q(i, t, c, e)
    }).catch(e => {
      if (m.error({
          error: e,
          gatewayUrl: t,
          itemKey: h,
          pinnedOrder: l,
          source: u,
          tags: {
            surface: p.HATCH_SENTRY_SURFACES.NAVIGATION
          }
        }, "Failed to set navigation pinned order"), N(i, y)) {
        if (F(i, t, c, f, d), O(e)) return void E(i, t, c, e);
        a?.(e)
      }
    })
  }, "reconcileLibraryNavigationItemsForPathRename", 0, function({
    queryClient: e,
    gatewayUrl: t,
    vmName: n,
    oldPath: r,
    newPath: a
  }) {
    if (null == t) return;
    let l = S(r),
      i = S(a);
    null != l && null != i && l !== i && e.setQueryData(g(t, n), e => {
      if (null == e) return e;
      let t = !1,
        n = new Map;
      for (let r of e) {
        if ("library" !== r.source) {
          n.set(v(r), r);
          continue
        }
        let e = S(r.item_key);
        if (null == e) {
          n.set(v(r), r);
          continue
        }
        let a = e === l || e.startsWith(`${l}/`) ? `${i}${e.slice(l.length)}` : null,
          s = null == a ? e === r.item_key ? r : {
            ...r,
            item_key: e
          } : {
            ...r,
            item_key: a,
            display_name: function(e, t, n) {
              let r = e.display_name.trim();
              return 0 === r.length || "meta.json" === r || r === (0, c.getNameFromPath)(t) ? (0, c.getNameFromPath)(n) : e.display_name
            }(r, e, a)
          };
        s !== r && (t = !0), n.set(v(s), s)
      }
      return t ? Array.from(n.values()) : e
    })
  }, "removeLibraryNavigationItemsUnderPaths", 0, function(e, t, n, r) {
    let a = r.map(e => S(e)).filter(e => null != e);
    0 !== a.length && e.setQueryData(g(t, n), e => (e ?? []).filter(e => {
      if ("library" !== e.source) return !0;
      let t = S(e.item_key);
      return null == t || !a.some(e => t === e || t.startsWith(`${e}/`))
    }))
  }, "removeNavigationRecent", 0, $, "touchAndUpsertNavigationRecent", 0, H, "useNavigationItemsById", 0, function(e) {
    let n, r = (0, t.c)(2),
      {
        data: a
      } = U(void 0 === e || e);
    return r[0] !== a ? (n = K(a), r[0] = a, r[1] = n) : n = r[1], n
  }, "useNavigationItemsBySource", 0, function(e = !0) {
    let {
      gatewayUrl: t,
      vmName: a
    } = (0, u.useHatchRpc)(), l = U(e), {
      data: i
    } = l, {
      data: s = !1
    } = (0, r.useQuery)({
      queryKey: h(t ?? "", a),
      queryFn: async () => !1,
      enabled: !1,
      initialData: () => I(t, a),
      staleTime: 1 / 0
    }), o = s || l.isError, c = (0, n.useRef)(null);
    return (0, n.useMemo)(() => {
      let e = c.current;
      if (null != e && e.sourceData === i && e.hasResolvedNavigationItems === o) return e;
      let t = i ?? [],
        n = t.filter(e => "space" === e.source || "saved_space" === e.source),
        r = t.filter(e => "library" === e.source),
        a = t.filter(e => "system" === e.source),
        l = null == e || L(e.spaceItems, n) ? n : e.spaceItems,
        s = {
          sourceData: i,
          hasResolvedNavigationItems: o,
          itemsById: K(i),
          spaceItems: l,
          spaceItemsById: null != e && l === e.spaceItems ? e.spaceItemsById : K([...l]),
          libraryItems: null == e || L(e.libraryItems, r) ? r : e.libraryItems,
          systemItems: null == e || L(e.systemItems, a) ? a : e.systemItems
        };
      return c.current = s, s
    }, [i, o])
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
  let n = 1;

  function r(e, t) {
    return ["space-catalog-reconciliation", e, t]
  }
  e.s(["beginSpaceCatalogReconciliation", 0, function(e, a, l) {
    let i = e.getQueryData(t.list(a, !0));
    if (i?.some(e => e.slug === l && !0 !== e.is_saved_foreign_share) === !0) return null;
    let s = {
      generation: n++,
      status: "pending"
    };
    return e.setQueryData(r(a, l), s), s
  }, "failSpaceCatalogReconciliation", 0, function(e, t, n, a) {
    e.setQueryData(r(t, n), e => e?.generation === a.generation ? {
      generation: a.generation,
      status: "error"
    } : e ?? null)
  }, "finishSpaceCatalogReconciliation", 0, function(e, t, n, a) {
    e.setQueryData(r(t, n), e => e?.generation === a.generation ? null : e ?? null)
  }, "spaceCatalogReconciliationOwnerQueryKey", 0, function(e, t) {
    return ["space-catalog-reconciliation-owner", e, t]
  }, "spaceCatalogReconciliationQueryKey", 0, r, "spaceCatalogReconciliationRequestQueryKey", 0, function(e, t, n) {
    return ["space-catalog-reconciliation-request", e, t, n]
  }], 751444)
}, 522730, e => {
  "use strict";
  var t = e.i(790170),
    n = e.i(812240),
    r = e.i(751444),
    a = e.i(141571),
    l = e.i(971743),
    i = e.i(863641);
  let s = 1;
  async function u(e, t) {
    return d(await e.sendRequest("spaces.list", {
      ...t ? {
        include_constructing: !0
      } : {}
    }))
  }
  let o = (0, t.createGatewayQuery)({
    id: "spaces.list",
    queryKey: ({
      gatewayUrl: e,
      includeConstructing: t
    }) => n.spacesQueryKeys.list(e, t),
    noiseFn: (e, t) => u(e, !0 === t.includeConstructing),
    invalidationKey: () => n.spacesQueryKeys.all,
    staleTime: 1e4
  });
  async function c({
    gatewayCtx: e,
    queryClient: t,
    slug: n
  }) {
    let a = n.trim(),
      l = e.gatewayUrl;
    if (0 === a.length || null == l || 0 === l.length) return {
      status: "missing"
    };
    let p = {
        gatewayUrl: l,
        includeConstructing: !0
      },
      m = e => e?.find(e => e.slug === a && !0 !== e.is_saved_foreign_share) ?? null,
      g = m(t.getQueryData(o.queryKey(p)));
    if (null != g) return {
      status: "found",
      space: g
    };
    let h = o.queryKey(p);
    t.cancelQueries({
      queryKey: h,
      exact: !0
    });
    let y = s++,
      d = (0, r.spaceCatalogReconciliationOwnerQueryKey)(l, a),
      f = (0, r.spaceCatalogReconciliationRequestQueryKey)(l, a, y);
    t.setQueryData(d, y);
    try {
      let n = await t.fetchQuery({
        queryKey: f,
        queryFn: async () => (e.isReady || await e.waitForTransport(), u(e, !0)),
        gcTime: 0,
        meta: {
          sentrySurface: i.HATCH_SENTRY_SURFACES.SPACE
        },
        staleTime: 0
      });
      t.getQueryData(d) === y && o.setData(t, p, n);
      let r = m(n);
      return null == r ? {
        status: "missing"
      } : {
        status: "found",
        space: r
      }
    } catch {
      return {
        status: "error"
      }
    } finally {
      t.getQueryData(d) === y && t.removeQueries({
        queryKey: d,
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
    shortcode: n,
    shareType: r,
    sourceUrl: l
  }) {
    let i;
    if (!t || null == n) return e;
    let s = r?.trim().toLowerCase() ?? "";
    if ("cloudflare" === s) return (0, a.buildCloudflareSharedSpaceUrl)(n, "/assets/icon.jpg") ?? e;
    let u = function(e) {
        if (null == e) return null;
        try {
          let t = new URL(e);
          return new URL(t.origin)
        } catch {
          return null
        }
      }(l),
      o = u?.hostname.toLowerCase() ?? "";
    if (null != u && (0, a.isCloudflareSharedSpaceHost)(o)) return `${u.origin}/assets/icon.jpg`;
    if ("tinker" === s || o.length > 0 && o.endsWith(".h.metaaiusercontent.com")) return m.test(n) ? `https://${n}.h.metaaiusercontent.com/assets/icon.jpg` : e;
    if (null != u && o.endsWith(".s.metaaiusercontent.com")) return `${u.origin}/icon.jpg`;
    let c = -1 === (i = n.lastIndexOf("-")) ? n : n.slice(i + 1);
    return m.test(c) ? `https://${c}.s.metaaiusercontent.com/icon.jpg` : e
  }

  function h(e, t, n) {
    return t * Math.exp(-(n - e) / 6048e5)
  }

  function y(e, t, n) {
    let r = h(e.accessedAtMs ?? 0, e.frequencyScore ?? 0, n);
    return h(t.accessedAtMs ?? 0, t.frequencyScore ?? 0, n) - r || (t.accessedAtMs ?? 0) - (e.accessedAtMs ?? 0)
  }

  function d(e) {
    if (!Array.isArray(e.spaces)) throw Error("Invalid spaces.list response");
    let t = e.spaces.map(e => "object" == typeof e && null != e ? function(e) {
      let t, n = p(e.slug),
        r = p(e.space_id),
        a = n ?? r,
        i = p(e.name);
      if (null == a || null == i) return null;
      let s = null == (t = p(e.image_url)) ? null : t,
        u = !0 === e.is_shared,
        o = p(e.shortcode),
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
        ...null != r && r !== a ? {
          space_id: r
        } : {},
        image_url: g({
          imageUrl: s,
          isSavedForeignShare: u,
          shortcode: o,
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
            n = p(e.thumbnail_url),
            r = p(e.preview_card_url);
          return null == t || null == n || null == r ? null : {
            version: t,
            icon_url: p(e.icon_url),
            thumbnail_url: n,
            thumbnail_width_px: (0, l.normalizeFiniteNumber)(e.thumbnail_width_px),
            thumbnail_height_px: (0, l.normalizeFiniteNumber)(e.thumbnail_height_px),
            preview_card_url: r,
            preview_card_width_px: (0, l.normalizeFiniteNumber)(e.preview_card_width_px),
            preview_card_height_px: (0, l.normalizeFiniteNumber)(e.preview_card_height_px)
          }
        }(e.preview_image),
        is_saved_foreign_share: u,
        runtime: "string" == typeof e.runtime ? e.runtime : null,
        is_current_build_published: "boolean" == typeof e.is_current_build_published ? e.is_current_build_published : null,
        has_server_actions: "boolean" == typeof e.has_server_actions ? e.has_server_actions : null,
        shortcode: o,
        share_type: c,
        source_url: m
      }
    }(e) : null);
    if (t.some(e => null == e)) throw Error("Invalid spaces.list response");
    return t
  }
  async function f(e, t) {
    let n = e.trim();
    if (0 === n.length) throw Error("Space slug is required");
    let r = await t("spaces.delete", {
        slug: n
      }) ?? {},
      a = p(r.slug),
      l = p(r.space_id),
      i = a ?? n;
    if (!1 === r.ok) throw Error(`Failed to delete space ${i}`);
    return {
      deletedIdentifiers: Array.from(new Set([n, ...null == a ? [] : [a], ...null == l ? [] : [l]])),
      deletedSlug: i
    }
  }
  e.s(["calculateScoreDecay", 0, h, "compareByFrecentScore", 0, y, "compareSpacesByFrecentScore", 0, function(e, t, n) {
    return y({
      accessedAtMs: e.accessed_at_ms,
      frequencyScore: e.frequency_score
    }, {
      accessedAtMs: t.accessed_at_ms,
      frequencyScore: t.frequency_score
    }, n)
  }, "deleteSpace", 0, f, "ensureOwnedSpaceCatalogEntry", 0, c, "loggableSpaceId", 0, function(e) {
    return e.space_id ?? null
  }, "normalizeSpacesResponse", 0, d, "savedSharedSpaceIconUrl", 0, g, "spacesListQuery", 0, o])
}, 791661, e => {
  "use strict";
  var t = e.i(722099),
    n = e.i(849329),
    r = e.i(393202),
    a = e.i(519172),
    l = e.i(720756),
    i = e.i(522730),
    s = e.i(812240),
    u = e.i(782361),
    o = e.i(789078);
  e.s(["useHatchSpacesQuery", 0, function(e) {
    let r, a, s, c, p = (0, t.c)(13),
      m = (0, l.useGatewayQueryContext)(),
      g = e?.enabled ?? !0,
      {
        hasResolvedNavigationItems: h,
        spaceItemsById: y
      } = (0, u.useNavigationItemsBySource)(g);
    p[0] !== m || p[1] !== e?.includeConstructing ? (r = i.spacesListQuery.queryOptions({
      gatewayUrl: m.gatewayUrl ?? "",
      includeConstructing: e?.includeConstructing
    }, m), p[0] = m, p[1] = e?.includeConstructing, p[2] = r) : r = p[2];
    let d = g && null != m.gatewayUrl && m.gatewayUrl.length > 0;
    p[3] !== r || p[4] !== d ? (a = {
      ...r,
      enabled: d
    }, p[3] = r, p[4] = d, p[5] = a) : a = p[5];
    let f = (0, n.useQuery)(a);
    p[6] !== f.data || p[7] !== y ? (s = (0, o.mergePendingSavedSpaces)(function(e, t) {
      if (null == e) return;
      if (null == t || 0 === t.size) return e;
      let n = !1,
        r = e.map(e => {
          let r = e.is_saved_foreign_share && null != e.shortcode ? t?.get((0, u.navigationItemId)("saved_space", e.shortcode)) ?? null : t?.get((0, u.navigationItemId)("space", e.slug)) ?? null;
          if (null == r) return e;
          let a = r.icon ?? null;
          return e.accessed_at_ms === r.accessed_at_ms && e.frequency_score === r.frequency_score && e.favorite_order === r.favorite_order && (e.navigation_icon_url ?? null) === a ? e : (n = !0, {
            ...e,
            accessed_at_ms: r.accessed_at_ms,
            frequency_score: r.frequency_score,
            favorite_order: r.favorite_order,
            ...null != a || void 0 !== e.navigation_icon_url ? {
              navigation_icon_url: a
            } : {}
          })
        });
      return n ? r : e
    }(f.data, y)), p[6] = f.data, p[7] = y, p[8] = s) : s = p[8];
    let _ = s;
    return p[9] !== _ || p[10] !== h || p[11] !== f ? (c = {
      ...f,
      data: _,
      hasResolvedNavigationItems: h
    }, p[9] = _, p[10] = h, p[11] = f, p[12] = c) : c = p[12], c
  }, "usePendingSavedSpacesCacheBridge", 0, function() {
    let e, n, l = (0, t.c)(3),
      i = (0, r.useQueryClient)();
    l[0] !== i ? (e = () => {
      let e = e => {
          "remember" === e.type ? i.setQueriesData({
            queryKey: s.spacesQueryKeys.all
          }, t => (0, o.upsertSavedSpaceInSpacesCache)(t, e.space)) : "forget" === e.type && i.setQueriesData({
            queryKey: s.spacesQueryKeys.all
          }, t => (0, o.removeSavedSpaceFromSpacesCache)(t, e.shortcode))
        },
        t = t => {
          e(t.detail ?? {
            type: "changed"
          })
        },
        n = "u" < typeof BroadcastChannel ? null : new BroadcastChannel(o.PENDING_SAVED_SPACES_BROADCAST_CHANNEL);
      return null != n && (n.onmessage = t => {
        e(t.data ?? {
          type: "changed"
        })
      }), window.addEventListener(o.PENDING_SAVED_SPACES_CHANGED_EVENT, t), () => {
        window.removeEventListener(o.PENDING_SAVED_SPACES_CHANGED_EVENT, t), n?.close()
      }
    }, n = [i], l[0] = i, l[1] = e, l[2] = n) : (e = l[1], n = l[2]), (0, a.useEffect)(e, n)
  }])
}, 592708, e => {
  "use strict";
  async function t(e) {
    var t;
    let n = e.slice(0, 12),
      r = new Uint8Array("function" == typeof n.arrayBuffer ? await n.arrayBuffer() : await (t = n, new Promise((e, n) => {
        let r = new FileReader;
        r.onload = () => e(r.result), r.onerror = () => n(r.error), r.readAsArrayBuffer(t)
      }))),
      a = (e, t) => String.fromCharCode(...r.subarray(e, t));
    return r.length >= 3 && 255 === r[0] && 216 === r[1] && 255 === r[2] ? "image/jpeg" : r.length >= 8 && 137 === r[0] && "PNG\r\n\x1a\n" === a(1, 8) ? "image/png" : 12 === r.length && "RIFF" === a(0, 4) && "WEBP" === a(8, 12) ? "image/webp" : e.type || null
  }
  e.s(["hasMask", 0, function(e) {
    return null != e && /\.png(\?|$)/i.test(e)
  }, "isJpegSpaceIcon", 0, function(e, t) {
    var n;
    return null != t ? "image/jpeg" === t : null != (n = e) && /\.jpe?g(\?|#|$)/i.test(n.trim())
  }, "sniffImageMimeType", 0, t])
}, 530611, 246586, e => {
  "use strict";
  var t = e.i(722099),
    n = e.i(519172),
    r = e.i(393202),
    a = e.i(960607),
    l = e.i(499608),
    i = e.i(709853),
    s = e.i(582002),
    u = e.i(592708),
    o = e.i(722469),
    c = e.i(539522),
    p = e.i(121869);
  let m = "sandbox://";

  function g(e) {
    let t = e?.trim() ?? "";
    return t.startsWith(m) && (t = t.slice(m.length)), t
  }

  function h(e) {
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
    let [n = "", r = ""] = t.split("?", 2), l = n.replace(/^\/+/, "");
    return 0 === l.length ? {
      kind: "none"
    } : {
      kind: "local",
      path: `/${l}${r?`?${r}`:""}`,
      urlEncoded: !1
    }
  }
  e.s(["resolveSpaceIconSource", 0, h, "resolveSpaceIconSrc", 0, function(e) {
    let t = h(e);
    return "none" === t.kind ? null : "passthrough" === t.kind ? t.src : t.path
  }, "resolveSpaceImageCachePath", 0, function(e) {
    let t = h(e);
    return "local" === t.kind ? (0, o.normalizePath)(t.path) : null
  }, "resolveSpaceImagePath", 0, function(e) {
    let t = g(e);
    if (0 === t.length) return null;
    let n = (0, a.getHatchVmMedia)(t);
    return n.isVm ? n.noisePath : /^(https?:|data:|blob:|\/\/)/i.test(t) || null != (0, p.parseCoopiconIconUrl)(t) || /^[a-z][a-z0-9+.-]*:/i.test(t) ? null : (0, c.resolveLocalImagePath)(t)
  }], 246586);
  var y = e.i(175286);
  let d = new WeakMap,
    f = new Map;

  function _(e, u) {
    let o, c, p, m, g, d, f, _, N, b = (0, t.c)(28),
      v = (0, r.useQueryClient)(),
      {
        gatewayUrl: S
      } = (0, y.useHatchRpc)();
    b[0] !== e ? (o = h(e), b[0] = e, b[1] = o) : o = b[1];
    let C = o,
      w = "none" === C.kind ? null : "passthrough" === C.kind ? C.src : C.path,
      k = "local" === C.kind ? C.path : null,
      I = "local" === C.kind && C.urlEncoded,
      P = (0, n.useRef)(u);
    b[2] !== k || b[3] !== v || b[4] !== u ? (c = () => {
      if (null == k || P.current === u) {
        P.current = u;
        return
      }
      P.current = u, v.removeQueries({
        queryKey: l.fileQueryKeys.contentPathPrefix(k)
      })
    }, p = [k, v, u], b[2] = k, b[3] = v, b[4] = u, b[5] = c, b[6] = p) : (c = b[5], p = b[6]), (0, n.useEffect)(c, p), b[7] !== S ? (m = null == S ? null : (0, s.getArtifactIconCacheHost)(S), b[7] = S, b[8] = m) : m = b[8];
    let E = m;
    b[9] !== E ? (g = (e, t, n) => null == E ? t() : (0, s.resolveArtifactIconBlob)(E, e, t, n), b[9] = E, b[10] = g) : g = b[10];
    let A = g,
      R = null != k;
    b[11] !== E || b[12] !== A ? (d = null != E ? {
      resolveBlob: A
    } : {}, b[11] = E, b[12] = A, b[13] = d) : d = b[13], b[14] !== I || b[15] !== R || b[16] !== d ? (f = {
      enabled: R,
      urlEncodedPath: I,
      ...d
    }, b[14] = I, b[15] = R, b[16] = d, b[17] = f) : f = b[17];
    let {
      data: O,
      isError: T,
      fetchStatus: Q
    } = (0, l.useRawQuery)(k, f);
    b[18] !== k || b[19] !== I ? (_ = null != k ? (0, a.mediaCacheKey)(k, I) : null, b[18] = k, b[19] = I, b[20] = _) : _ = b[20];
    let x = (0, i.useCachedBlobUrl)(_, O, k ?? void 0);
    return b[21] !== Q || b[22] !== T || b[23] !== O || b[24] !== x || b[25] !== k || b[26] !== w ? (N = null == k ? {
      url: w,
      blob: null,
      isPending: !1
    } : {
      url: x,
      blob: O ?? null,
      isPending: null == x && (!T || "fetching" === Q)
    }, b[21] = Q, b[22] = T, b[23] = O, b[24] = x, b[25] = k, b[26] = w, b[27] = N) : N = b[27], N
  }
  e.s(["useSpaceImage", 0, function(e, r) {
    let a, l, i, s, o = (0, t.c)(15),
      {
        url: c,
        blob: p,
        isPending: m
      } = _(e, r),
      [g, h] = (0, n.useState)(null);
    if (o[0] !== p || o[1] !== e ? (a = () => {
        if (null == p) return;
        let t = !1;
        return (d.has(p) ? Promise.resolve(d.get(p) ?? null) : (0, u.sniffImageMimeType)(p).catch(() => p.type || null)).then(n => {
          d.set(p, n), null != e && f.set(e, n), t || h({
            blob: p,
            mimeType: n
          })
        }), () => {
          t = !0
        }
      }, l = [p, e], o[0] = p, o[1] = e, o[2] = a, o[3] = l) : (a = o[2], l = o[3]), (0, n.useEffect)(a, l), null == p) {
      let e;
      return o[4] !== c || o[5] !== m ? (e = {
        url: c,
        mimeType: null,
        isPending: m
      }, o[4] = c, o[5] = m, o[6] = e) : e = o[6], e
    }
    if (o[7] !== p || o[8] !== g || o[9] !== e) i = g?.blob === p ? g.mimeType : d.has(p) ? d.get(p) ?? null : !!(null != e && f.has(e)) && (f.get(e) ?? null), o[7] = p, o[8] = g, o[9] = e, o[10] = i;
    else i = o[10];
    let y = i;
    return o[11] !== c || o[12] !== m || o[13] !== y ? (s = !1 === y ? {
      url: null,
      mimeType: null,
      isPending: !0
    } : {
      url: c,
      mimeType: y,
      isPending: m
    }, o[11] = c, o[12] = m, o[13] = y, o[14] = s) : s = o[14], s
  }, "useSpaceImageState", 0, function(e, n) {
    let r, a = (0, t.c)(3),
      {
        url: l,
        isPending: i
      } = _(e, n);
    return a[0] !== l || a[1] !== i ? (r = {
      url: l,
      isPending: i
    }, a[0] = l, a[1] = i, a[2] = r) : r = a[2], r
  }, "useSpaceImageUrl", 0, function(e, t) {
    return _(e, t).url
  }], 530611)
}, 141571, e => {
  "use strict";
  let t = ".managed.cf.metaaiusercontent.com",
    n = ".cf.metaaiusercontent.com",
    r = [t, n, ".cf.ecto1usercontent.com"],
    a = /^[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;

  function l(e) {
    let t = e.trim().toLowerCase();
    return 0 === t.length || t.length > 63 || !a.test(t) ? null : t
  }

  function i(e) {
    let t = e.trim().toLowerCase(),
      n = r.find(e => t.endsWith(e));
    return null == n ? null : l(t.slice(0, -n.length))
  }

  function s(e, r = "/index.html", a = !1) {
    let i = function(e, r = !1) {
      let a = l(e);
      return null == a ? null : `https://${a}${r?t:n}`
    }(e, a);
    return null != i && r.startsWith("/") ? `${i}${r}` : null
  }
  e.s(["buildCloudflareSharedSpaceUrl", 0, s, "buildCloudflareSharedSpaceUrlOrInvalidPlaceholder", 0, function(e, t = "/index.html", n = !1) {
    let r = t.startsWith("/") ? t : "/index.html",
      a = s(e, r, n);
    return null != a ? a : `https://invalid-cloudflare-share.cf.metaaiusercontent.com${r}`
  }, "cloudflareSharedSpaceHostLabel", 0, i, "isCloudflareSharedSpaceHost", 0, function(e) {
    return null != i(e)
  }])
}]);

//# debugId=20175de7-0cac-ae1b-2a3f-e4c337e835e4
//# sourceMappingURL=3w1_yitvyd283.js.map