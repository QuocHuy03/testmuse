;
! function() {
  try {
    var e = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof global ? global : "undefined" != typeof window ? window : "undefined" != typeof self ? self : {},
      n = (new e.Error).stack;
    n && ((e._debugIds || (e._debugIds = {}))[n] = "47714dee-3541-dbf1-a283-b7678779a903")
  } catch (e) {}
}();
(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push(["object" == typeof document ? document.currentScript : void 0, 282560, e => {
  "use strict";
  var t = e.i(984416),
    a = e.i(722099),
    n = e.i(519172),
    l = e.i(271954),
    s = e.i(345717),
    r = e.i(678069),
    i = e.i(906757),
    o = e.i(630203),
    c = e.i(848048),
    u = e.i(420297),
    d = e.i(168538),
    h = e.i(397240),
    m = e.i(731714),
    f = e.i(274797),
    p = e.i(374785),
    g = e.i(281539),
    x = e.i(123960),
    b = e.i(508180),
    v = e.i(384784),
    y = e.i(905156);

  function _(e) {
    let t = (0, a.c)(3),
      {
        content: n
      } = e;
    if (null == n) return null;
    switch (n.kind) {
      case "moreMessages": {
        let e;
        return t[0] !== n.count ? (e = s.fbt._({
          "*": "{number} messages",
          _1: "1 message"
        }, [s.fbt._plural(n.count, "number")], {
          hk: "oTWdD"
        }), t[0] = n.count, t[1] = e) : e = t[1], e
      }
      case "seeMore": {
        let e;
        return t[2] === Symbol.for("react.memo_cache_sentinel") ? (e = s.fbt._("See more", null, {
          hk: "fe1ZZ"
        }), t[2] = e) : e = t[2], e
      }
    }
  }

  function C(e) {
    let n, l, s, o = (0, a.c)(11),
      {
        isVisible: d,
        isFloatingPresentation: h,
        content: m,
        onClick: f
      } = e,
      x = (0, y.useHatchChatThreadLoggingMetadata)();
    o[0] !== x ? (n = {
      eventName: g.HatchClickEvent.CHAT_SCROLL_TO_BOTTOM,
      actionTarget: "scroll_to_bottom_button",
      actionType: "click",
      metadata: {
        surface: "chat",
        subsurface: "message_list",
        ...x
      }
    }, o[0] = x, o[1] = n) : n = o[1];
    let {
      ref: b,
      onClick: v
    } = (0, c.useTrackedClickRef)(n);
    return o[2] !== m || o[3] !== h || o[4] !== d || o[5] !== v || o[6] !== f || o[7] !== b ? (l = d && null != m && (0, t.jsxs)(t.Fragment, {
      children: [(0, t.jsx)(i.motion.div, {
        initial: {
          opacity: 0
        },
        animate: {
          opacity: 1
        },
        exit: {
          opacity: 0
        },
        transition: {
          duration: .25
        },
        className: (0, p.cn)("pointer-events-none absolute inset-x-0 -top-12 h-20 bg-gradient-to-t to-transparent", h && "bottom-12 h-32"),
        style: {
          "--tw-gradient-from": "var(--hatch-panel-bg)"
        }
      }), (0, t.jsx)(i.motion.div, {
        initial: {
          opacity: 0,
          y: 8
        },
        animate: {
          opacity: 1,
          y: 0
        },
        exit: {
          opacity: 0,
          y: 8
        },
        transition: {
          duration: .15
        },
        className: "absolute inset-x-0 -top-12 flex justify-center",
        children: (0, t.jsx)(u.Button, {
          ref: b,
          variant: "elevated",
          size: "32",
          label: (0, t.jsx)(_, {
            content: m
          }),
          labelClassName: "text-caption-2-emphasized whitespace-nowrap",
          trailingIcon: "chevron-down",
          className: "bg-chat-user-bubble text-chat-user-text [&_.trailing-icon]:text-[inherit]",
          onClick: () => {
            v(), f()
          }
        })
      })]
    }), o[2] = m, o[3] = h, o[4] = d, o[5] = v, o[6] = f, o[7] = b, o[8] = l) : l = o[8], o[9] !== l ? (s = (0, t.jsx)(r.AnimatePresence, {
      children: l
    }), o[9] = l, o[10] = s) : s = o[10], s
  }

  function j(e) {
    return null === e ? e : null
  }

  function S(e) {
    return null === e ? e : null
  }

  function T(e) {
    return null === e ? e : null
  }
  var k = e.i(657942),
    H = e.i(890089),
    E = e.i(195714),
    w = e.i(924252),
    N = e.i(301970),
    I = e.i(986907),
    R = e.i(767408);

  function A(e) {
    null != e.current && (window.clearTimeout(e.current), e.current = null)
  }
  var M = e.i(305644),
    L = e.i(374180),
    P = e.i(646361),
    O = e.i(486868),
    V = e.i(696254);

  function F(e) {
    let n, l = (0, a.c)(2),
      {
        size: s
      } = e;
    return l[0] !== s ? (n = (0, t.jsxs)("div", {
      className: "flex flex-col items-center -space-y-2",
      children: [(0, t.jsx)(P.HatchIcon, {
        icon: M.default,
        size: s
      }), (0, t.jsx)(P.HatchIcon, {
        icon: M.default,
        size: s
      })]
    }), l[0] = s, l[1] = n) : n = l[1], n
  }

  function B(e) {
    let n, l = (0, a.c)(2),
      {
        size: s
      } = e;
    return l[0] !== s ? (n = (0, t.jsxs)("div", {
      className: "flex flex-col items-center -space-y-2",
      children: [(0, t.jsx)(P.HatchIcon, {
        icon: L.default,
        size: s
      }), (0, t.jsx)(P.HatchIcon, {
        icon: L.default,
        size: s
      })]
    }), l[0] = s, l[1] = n) : n = l[1], n
  }

  function D({
    scrollContainerRef: e,
    messageListRef: a
  }) {
    let l = (0, n.useRef)(null),
      r = (0, n.useRef)(null),
      i = (0, n.useRef)(new Map),
      [o, c] = (0, n.useState)(null),
      u = (0, V.useIdentityName)(),
      d = (0, v.useChatIsExpectingBotResponse)(),
      h = (0, v.useChatIsStreaming)(),
      {
        messages: m,
        activeIndex: f,
        isFocused: g,
        onFocus: x,
        onBlur: b,
        isScrubbing: y,
        scrubIndex: _,
        onTrackMouseDown: C,
        goToPrevious: j,
        goToNext: S,
        scrollToMessage: T,
        isHovered: k,
        onMouseEnter: H,
        onMouseLeave: E
      } = function({
        scrollContainerRef: e,
        trackRef: t
      }) {
        let a = (0, v.useChatMessagesArray)(),
          l = (0, n.useMemo)(() => a.filter(e => "system" !== e.role).map(e => ({
            id: e.id,
            role: e.role,
            content: e.content.slice(0, 200)
          })), [a.map(e => e.id).join(",")]),
          [s, r] = (0, n.useState)(0),
          i = (0, n.useRef)(0),
          o = (0, n.useRef)(!1),
          c = (0, n.useRef)(0),
          u = (0, n.useRef)(!1),
          d = (0, n.useRef)(0),
          h = (0, n.useCallback)(() => {
            if (o.current) return;
            let t = e.current;
            if (!t || 0 === l.length) return;
            let a = t.scrollTop,
              n = a < d.current - 2;
            if (d.current = a, a >= -4) {
              u.current = !0, r(l.length - 1);
              return
            }
            if (u.current && !n) return void r(l.length - 1);
            u.current = !1;
            let s = t.getBoundingClientRect(),
              i = s.top + s.height / 3,
              c = 0,
              h = 1 / 0;
            for (let e = 0; e < l.length; e++) {
              let a = t.querySelector(`[data-message-id="${l[e].id}"]`);
              if (!a) continue;
              let n = Math.abs(a.getBoundingClientRect().top - i);
              n < h && (h = n, c = e)
            }
            r(c)
          }, [e, l]),
          m = (0, n.useRef)(l.length);
        (0, n.useEffect)(() => {
          let e = m.current;
          m.current = l.length, l.length > e && u.current && r(l.length - 1)
        }, [l.length]);
        let f = (0, n.useCallback)(() => {
          o.current = !0
        }, []);
        (0, n.useEffect)(() => {
          let t = e.current;
          if (!t) return;
          let a = () => {
            if (o.current) {
              window.clearTimeout(c.current), c.current = window.setTimeout(() => {
                o.current = !1
              }, 150);
              return
            }
            cancelAnimationFrame(i.current), i.current = requestAnimationFrame(h)
          };
          return t.addEventListener("scroll", a, {
            passive: !0
          }), h(), () => {
            t.removeEventListener("scroll", a), cancelAnimationFrame(i.current), window.clearTimeout(c.current)
          }
        }, [e, h]);
        let [p, g] = (0, n.useState)(!1), [x, b] = (0, n.useState)(!1), y = (0, n.useRef)(!1), _ = (0, n.useCallback)(() => {
          y.current = !0, g(!0)
        }, []), C = (0, n.useCallback)(() => {
          y.current = !1, g(!1)
        }, []), j = (0, n.useCallback)(() => b(!0), []), S = (0, n.useCallback)(() => b(!1), []), [T, k] = (0, n.useState)({
          isScrubbing: !1,
          scrubIndex: null,
          flyoutY: null
        }), H = (0, n.useCallback)(e => {
          let a = t.current;
          if (!a || 0 === l.length) return null;
          let n = a.getBoundingClientRect(),
            s = Math.max(0, Math.min(e - n.top, n.height));
          return {
            index: Math.min(Math.floor(s / n.height * l.length), l.length - 1),
            flyoutY: s
          }
        }, [t, l]), E = (0, n.useCallback)(t => {
          let a = e.current,
            n = l[t];
          if (!a || !n) return;
          f(), r(t);
          let s = a.querySelector(`[data-message-id="${n.id}"]`);
          if (!s) return;
          let i = s.getBoundingClientRect().top,
            o = a.getBoundingClientRect().top,
            c = a.scrollTop + (i - o) - 8,
            u = -(a.scrollHeight - a.clientHeight);
          a.scrollTo({
            top: Math.max(u, Math.min(c, 0)),
            behavior: "smooth"
          })
        }, [e, l, f]), w = (0, n.useCallback)(e => {
          e.preventDefault();
          let t = y.current,
            a = H(e.clientY);
          if (!a) return;
          let n = e.clientY,
            l = !1,
            s = a.index,
            r = e => {
              if (e.preventDefault(), Math.abs(e.clientY - n) > 3 && (l = !0), l) {
                let t = H(e.clientY);
                t && (s = t.index, k({
                  isScrubbing: !0,
                  scrubIndex: t.index,
                  flyoutY: t.flyoutY
                }))
              }
            },
            i = () => {
              window.removeEventListener("mousemove", r), window.removeEventListener("mouseup", i), k({
                isScrubbing: !1,
                scrubIndex: null,
                flyoutY: null
              }), l ? E(s) : E(a.index)
            };
          window.addEventListener("mousemove", r), window.addEventListener("mouseup", i), t && k({
            isScrubbing: !0,
            scrubIndex: a.index,
            flyoutY: a.flyoutY
          })
        }, [H, E]), N = (0, n.useCallback)(() => {
          for (let e = s - 1; e >= 0; e--)
            if (l[e]?.role === "assistant") return void E(e)
        }, [s, l, E]), I = (0, n.useCallback)(() => {
          for (let e = s + 1; e < l.length; e++)
            if (l[e]?.role === "assistant") return void E(e)
        }, [s, l, E]);
        return {
          messages: l,
          activeIndex: s,
          isFocused: p,
          isHovered: x,
          onFocus: _,
          onBlur: C,
          onMouseEnter: j,
          onMouseLeave: S,
          isScrubbing: T.isScrubbing,
          scrubIndex: T.scrubIndex,
          flyoutY: T.flyoutY,
          onTrackMouseDown: w,
          goToPrevious: N,
          goToNext: I,
          scrollToMessage: E
        }
      }({
        scrollContainerRef: e,
        trackRef: l
      }),
      w = (0, n.useRef)(null),
      N = (0, n.useCallback)(() => {
        x()
      }, [x]),
      I = (0, n.useCallback)(e => {
        e.currentTarget.contains(e.relatedTarget) || b()
      }, [b]),
      [R, A] = (0, n.useState)(!1),
      [z, U] = (0, n.useState)(!1),
      [G, q] = (0, n.useState)(!1),
      K = (0, n.useRef)(!1),
      Y = (0, n.useRef)(f);
    Y.current = f;
    let W = (0, n.useCallback)(() => {
      let e = r.current;
      if (!e) return;
      let t = e.scrollHeight > e.clientHeight + 1;
      if (A(t), t) {
        let t = e.scrollHeight - e.scrollTop - e.clientHeight < 4;
        K.current = t, U(e.scrollTop > 1), q(!t)
      } else K.current = !1, U(!1), q(!1)
    }, []);
    (0, n.useEffect)(() => {
      let e = r.current;
      if (!e) return;
      W();
      let t = new ResizeObserver(W);
      t.observe(e), e.addEventListener("scroll", W, {
        passive: !0
      });
      let a = new ResizeObserver(() => {
        if (K.current) e.scrollTop = e.scrollHeight - e.clientHeight;
        else {
          let t = i.current.get(Y.current);
          if (t) {
            let a = t.offsetTop,
              n = a + t.offsetHeight;
            a < e.scrollTop ? e.scrollTop = a : n > e.scrollTop + e.clientHeight && (e.scrollTop = n - e.clientHeight)
          }
        }
      });
      return a.observe(e), () => {
        t.disconnect(), a.disconnect(), e.removeEventListener("scroll", W)
      }
    }, [m.length, W]), (0, n.useEffect)(() => {
      let e = r.current;
      if (!e) return;
      if (f >= m.length - 1) {
        e.scrollTop = e.scrollHeight - e.clientHeight;
        return
      }
      let t = i.current.get(f);
      if (!t) return;
      let a = t.offsetTop,
        n = a + t.offsetHeight;
      a < e.scrollTop ? e.scrollTop = a : n > e.scrollTop + e.clientHeight && (e.scrollTop = n - e.clientHeight)
    }, [f, m.length]);
    let $ = (0, n.useRef)(0),
      Q = (0, n.useRef)(null);
    (0, n.useLayoutEffect)(() => {
      let e = r.current;
      if (!e) return;
      let t = m[0]?.id ?? null;
      if (null != Q.current && null != t && t !== Q.current) {
        let t = e.scrollHeight - $.current;
        t > 0 && (e.scrollTop += t)
      }
      $.current = e.scrollHeight, Q.current = t
    }, [m]);
    let Z = (0, n.useCallback)(() => {
        let e = r.current;
        e && e.scrollBy({
          top: -e.clientHeight,
          behavior: "smooth"
        })
      }, []),
      J = (0, n.useCallback)(() => {
        let e = r.current;
        e && e.scrollBy({
          top: e.clientHeight,
          behavior: "smooth"
        })
      }, []);
    if (m.length < 2) return null;
    let X = g || k || y,
      ee = X && R,
      et = ee && z,
      ea = ee && G;
    return (0, t.jsxs)("div", {
      ref: w,
      className: "group/scrubber absolute end-[22px] top-0 z-10 flex h-full w-5 items-center justify-center",
      onMouseEnter: H,
      onMouseLeave: E,
      onFocus: N,
      onBlur: I,
      children: [(0, t.jsxs)("div", {
        className: "flex max-h-[calc(100%-200px)] flex-col items-center gap-[7px]",
        children: [(0, t.jsxs)(O.Tooltip, {
          children: [(0, t.jsx)(O.TooltipTrigger, {
            asChild: !0,
            children: (0, t.jsx)("button", {
              className: (0, p.cn)("text-text-tertiary flex size-[25px] shrink-0 items-center justify-center rounded-full bg-black/[0.025] transition-all duration-200 dark:bg-white/[0.025]", g ? "opacity-100" : "opacity-50", et ? "opacity-100" : "pointer-events-none opacity-0"),
              onClick: Z,
              "aria-label": s.fbs._("Previous page", null, {
                hk: "3NOz40"
              }),
              tabIndex: et ? 0 : -1,
              children: (0, t.jsx)(F, {
                size: 12
              })
            })
          }), (0, t.jsx)(O.TooltipContent, {
            side: "left",
            sideOffset: 5,
            children: s.fbt._("Previous page", null, {
              hk: "hCvzr"
            })
          })]
        }), (0, t.jsxs)(O.Tooltip, {
          children: [(0, t.jsx)(O.TooltipTrigger, {
            asChild: !0,
            children: (0, t.jsx)("button", {
              className: (0, p.cn)("text-text-tertiary flex size-[25px] shrink-0 items-center justify-center rounded-full bg-black/[0.025] transition-all duration-200 dark:bg-white/[0.025]", g ? "opacity-100" : "opacity-50", X ? "opacity-100" : "pointer-events-none opacity-0"),
              onClick: j,
              "aria-label": s.fbs._("Previous response", null, {
                hk: "3bZ9XB"
              }),
              tabIndex: X ? 0 : -1,
              children: (0, t.jsx)(P.HatchIcon, {
                icon: M.default,
                size: 12
              })
            })
          }), (0, t.jsx)(O.TooltipContent, {
            side: "left",
            sideOffset: 5,
            children: s.fbt._("Previous response", null, {
              hk: "2zFZGn"
            })
          })]
        }), (0, t.jsx)("div", {
          ref: r,
          className: (0, p.cn)("scrollbar-hide flex min-h-0 cursor-pointer flex-col items-center overflow-y-auto rounded-full px-[5px] py-2 transition-all outline-none", g || y ? "bg-black/[0.025] opacity-100 dark:bg-white/[0.025]" : k ? "bg-black/[0.025] opacity-50 dark:bg-white/[0.025]" : "opacity-50"),
          tabIndex: 0,
          role: "scrollbar",
          "aria-controls": "hatch-chat-scroll",
          "aria-valuenow": f,
          "aria-valuemin": 0,
          "aria-valuemax": m.length - 1,
          onMouseDown: e => {
            e.currentTarget.focus()
          },
          children: (0, t.jsxs)("div", {
            ref: l,
            className: "relative flex flex-col items-end justify-center gap-px py-1",
            onMouseDown: C,
            children: [m.map((e, a) => {
              if (h && a === m.length - 1) return null;
              let n = a === (y && null != _ ? _ : f),
                l = "user" === e.role ? 6 : 12;
              return (0, t.jsx)("div", {
                ref: e => {
                  e ? i.current.set(a, e) : i.current.delete(a)
                },
                className: "flex cursor-pointer items-center justify-end py-[5px]",
                style: {
                  width: 15
                },
                onMouseEnter: () => c(a),
                onMouseLeave: () => c(null),
                onClick: e => {
                  e.stopPropagation(), g && T(a)
                },
                children: (0, t.jsx)("div", {
                  className: (0, p.cn)("pointer-events-none h-px rounded-full transition-colors duration-200", n ? "bg-black dark:bg-white" : g ? "bg-text-primary/40" : "bg-text-secondary"),
                  style: {
                    width: n ? 15 : l
                  }
                })
              }, e.id)
            }), (d || h) && (0, t.jsxs)("div", {
              className: "flex items-center justify-between py-1",
              style: {
                width: 12
              },
              children: [(0, t.jsx)("div", {
                className: "bg-text-secondary size-[2px]"
              }), (0, t.jsx)("div", {
                className: "bg-text-secondary size-[2px]"
              }), (0, t.jsx)("div", {
                className: "bg-text-secondary size-[2px]"
              })]
            })]
          })
        }), (0, t.jsxs)(O.Tooltip, {
          children: [(0, t.jsx)(O.TooltipTrigger, {
            asChild: !0,
            children: (0, t.jsx)("button", {
              className: (0, p.cn)("text-text-tertiary flex size-[25px] shrink-0 items-center justify-center rounded-full bg-black/[0.025] transition-all duration-200 dark:bg-white/[0.025]", g ? "opacity-100" : "opacity-50", X ? "opacity-100" : "pointer-events-none opacity-0"),
              onClick: S,
              "aria-label": s.fbs._("Next response", null, {
                hk: "3UOBjC"
              }),
              tabIndex: X ? 0 : -1,
              children: (0, t.jsx)(P.HatchIcon, {
                icon: L.default,
                size: 12
              })
            })
          }), (0, t.jsx)(O.TooltipContent, {
            side: "left",
            sideOffset: 5,
            children: s.fbt._("Next response", null, {
              hk: "gyNU4"
            })
          })]
        }), (0, t.jsxs)(O.Tooltip, {
          children: [(0, t.jsx)(O.TooltipTrigger, {
            asChild: !0,
            children: (0, t.jsx)("button", {
              className: (0, p.cn)("text-text-tertiary flex size-[25px] shrink-0 items-center justify-center rounded-full bg-black/[0.025] transition-all duration-200 dark:bg-white/[0.025]", g ? "opacity-100" : "opacity-50", ea ? "opacity-100" : "pointer-events-none opacity-0"),
              onClick: J,
              "aria-label": s.fbs._("Next page", null, {
                hk: "3KCGTz"
              }),
              tabIndex: ea ? 0 : -1,
              children: (0, t.jsx)(B, {
                size: 12
              })
            })
          }), (0, t.jsx)(O.TooltipContent, {
            side: "left",
            sideOffset: 5,
            children: s.fbt._("Next page", null, {
              hk: "pLtbQ"
            })
          })]
        })]
      }), (g || k) && (() => {
        let e = y && null != _ ? _ : o;
        if (null == e) return null;
        let a = m[e],
          n = i.current.get(e);
        if (!a || !n) return null;
        let l = n.getBoundingClientRect();
        return (0, t.jsx)("div", {
          className: "bg-fill-blur-thick shadow-blur-elevation-03 text-caption-1 text-text-primary rounded-6 pointer-events-none fixed z-50 w-max max-w-[300px] -translate-x-full -translate-y-1/2 px-3 py-1.5 text-end",
          style: {
            top: l.top + l.height / 2,
            left: l.left - 8
          },
          children: "assistant" === a.role ? (0, t.jsxs)(t.Fragment, {
            children: [(0, t.jsx)("div", {
              className: "text-text-tertiary line-clamp-1",
              children: u
            }), (0, t.jsx)("div", {
              className: "line-clamp-2",
              children: a.content || s.fbt._("...", null, {
                hk: "1JDOwy"
              })
            })]
          }) : (0, t.jsx)("div", {
            className: "line-clamp-2",
            children: a.content || s.fbt._("...", null, {
              hk: "1JDOwy"
            })
          })
        })
      })()]
    })
  }
  var z = e.i(880162),
    U = e.i(479223),
    G = e.i(239286),
    q = e.i(430116),
    K = e.i(295967),
    Y = e.i(777212),
    W = e.i(813280),
    $ = e.i(224520),
    Q = e.i(823173),
    Z = e.i(479746),
    J = e.i(243391),
    X = e.i(672495),
    ee = e.i(385562),
    et = e.i(637332),
    ea = e.i(277684),
    en = e.i(5401),
    el = e.i(863641),
    es = e.i(690263),
    er = e.i(555169),
    ei = e.i(861963),
    eo = e.i(214619),
    ec = e.i(538206),
    eu = e.i(621570),
    ed = e.i(867545),
    eh = e.i(173174),
    em = e.i(18516),
    ef = e.i(509789),
    ep = e.i(729323),
    eg = e.i(390808),
    ex = e.i(749137),
    eb = e.i(537295),
    ev = e.i(52038),
    ey = e.i(450106),
    e_ = e.i(838116),
    eC = e.i(388586),
    ej = e.i(255859);

  function eS(e) {
    let n, l, s, r, i = (0, a.c)(9);
    return i[0] !== e.title ? (n = null != e.title && (0, t.jsx)("title", {
      children: e.title
    }), i[0] = e.title, i[1] = n) : n = i[1], i[2] !== e.children ? (l = null != e.children && (0, t.jsx)("defs", {
      children: e.children
    }), i[2] = e.children, i[3] = l) : l = i[3], i[4] === Symbol.for("react.memo_cache_sentinel") ? (s = (0, t.jsx)("path", {
      d: "M9.1 1.66C10.13 0.64 11.88 1.36 11.88 2.81V7.17C14.97 7.34 17.65 7.99 19.6 9.78C21.75 11.75 22.82 14.9 22.87 19.62C22.88 20.11 22.54 20.45 22.19 20.57C21.83 20.68 21.34 20.59 21.07 20.16C20.08 18.58 19 17.33 17.48 16.45C16.11 15.66 14.34 15.12 11.88 14.94V19.19C11.87 20.64 10.12 21.36 9.1 20.34L0.91 12.15C0.28 11.51 0.28 10.48 0.91 9.85L9.1 1.66Z"
    }), i[4] = s) : s = i[4], i[5] !== e || i[6] !== n || i[7] !== l ? (r = (0, t.jsxs)("svg", {
      viewBox: "0 0 24 24",
      fill: "currentColor",
      width: "1em",
      height: "1em",
      ...e,
      children: [n, l, s]
    }), i[5] = e, i[6] = n, i[7] = l, i[8] = r) : r = i[8], r
  }
  eS._isSVG = !0;
  var eT = e.i(559401),
    ek = e.i(176048),
    eH = e.i(832964),
    eE = e.i(342847),
    ew = e.i(404204),
    eN = e.i(514540),
    eI = e.i(359783),
    eR = e.i(175286),
    eA = e.i(926250),
    eM = e.i(55473),
    eL = e.i(552188),
    eP = e.i(211712),
    eO = e.i(311420);
  let eV = (0, eI.createClientLogger)("HatchInlineReplyPreview");

  function eF() {}

  function eB(e, t) {
    return e.length > 0 || t?.length !== 1 ? null : (0, eM.getHatchWorkspaceMediaPath)(t[0]?.path)
  }

  function eD(e) {
    return {
      alignmentClass: "assistant" === e ? "self-start" : "self-end",
      labelMarginClass: "assistant" === e ? "ms-4" : "me-4",
      bubbleCornerClass: "assistant" === e ? "hatch-chat-reply-context-bubble hatch-chat-reply-context-bubble-agent" : "hatch-chat-reply-context-bubble hatch-chat-reply-context-bubble-user"
    }
  }

  function ez(e) {
    let n, l, s, r, i = (0, a.c)(8),
      {
        text: o,
        replierRole: c
      } = e;
    i[0] !== c ? (n = eD(c), i[0] = c, i[1] = n) : n = i[1];
    let {
      alignmentClass: u,
      labelMarginClass: d
    } = n, h = `text-caption-2 text-text-secondary mb-1.5 flex items-center gap-1 ${u} ${d}`;
    return i[2] === Symbol.for("react.memo_cache_sentinel") ? (l = (0, t.jsx)(eX, {
      size: 12
    }), i[2] = l) : l = i[2], i[3] !== o ? (s = (0, t.jsx)("span", {
      children: o
    }), i[3] = o, i[4] = s) : s = i[4], i[5] !== h || i[6] !== s ? (r = (0, t.jsxs)("div", {
      className: h,
      children: [l, s]
    }), i[5] = h, i[6] = s, i[7] = r) : r = i[7], r
  }
  let eU = "relative flex w-full flex-col items-end";

  function eG(e, t) {
    let n, l, r = (0, a.c)(5),
      i = (0, V.useIdentityName)();
    r[0] !== i ? (n = i.trim() || ej.PRODUCT_BRAND.fullName, r[0] = i, r[1] = n) : n = r[1];
    let o = n;
    r[2] !== o || r[3] !== e ? (l = "assistant" === e ? `${o} ${s.fbs._("replied to",null,{hk:"3cJKIZ"})}` : s.fbs._("You replied to", null, {
      hk: "2vaV4r"
    }), r[2] = o, r[3] = e, r[4] = l) : l = r[4];
    let c = l;
    return `${c} ${t??o}`
  }

  function eq(e) {
    let n, l, s, r = (0, a.c)(14),
      {
        ariaLabel: i,
        onClick: o,
        ref: c,
        replierRole: u,
        text: d
      } = e;
    if (r[0] !== o || r[1] !== u) {
      let {
        alignmentClass: e,
        bubbleCornerClass: t
      } = eD(u);
      n = (0, p.cn)(t, e, e0, "mb-[-16px] max-w-[520px] px-4 py-2 pb-6 text-start", null != o && `${e1} cursor-pointer`), r[0] = o, r[1] = u, r[2] = n
    } else n = r[2];
    let h = n;
    r[3] !== d ? (l = (0, t.jsx)("span", {
      className: "text-text-secondary line-clamp-1 text-[13px] leading-[20px]",
      title: d,
      children: d
    }), r[3] = d, r[4] = l) : l = r[4];
    let m = l;
    if (null == o) {
      let e;
      return r[5] !== h || r[6] !== m ? (e = (0, t.jsx)("div", {
        className: h,
        children: m
      }), r[5] = h, r[6] = m, r[7] = e) : e = r[7], e
    }
    return r[8] !== i || r[9] !== h || r[10] !== m || r[11] !== o || r[12] !== c ? (s = (0, t.jsx)("button", {
      ref: c,
      type: "button",
      onClick: o,
      "aria-label": i,
      className: h,
      children: m
    }), r[8] = i, r[9] = h, r[10] = m, r[11] = o, r[12] = c, r[13] = s) : s = r[13], s
  }

  function eK(e) {
    let n, l, r, i, o, c, u, d = (0, a.c)(23),
      {
        onClick: h,
        path: m,
        ref: f,
        replierRole: g
      } = e;
    d[0] !== m ? (n = {
      filePath: m,
      usage: "thumbnail",
      abortOnUnused: !0
    }, d[0] = m, d[1] = n) : n = d[1];
    let {
      src: x,
      resolutionStatus: b
    } = (0, eA.useResolvedHatchImageMedia)(n);
    if (d[2] !== h || d[3] !== g) {
      let {
        alignmentClass: e,
        bubbleCornerClass: t
      } = eD(g);
      l = (0, p.cn)(t, e, "bg-fill-primary relative z-0 mb-[-20px] aspect-square w-[180px] max-w-full overflow-hidden p-0 text-start", null != h && `${e1} cursor-pointer`), d[2] = h, d[3] = g, d[4] = l
    } else l = d[4];
    let v = l;
    d[5] === Symbol.for("react.memo_cache_sentinel") ? (r = s.fbs._("Loading image being replied to", null, {
      hk: "1ZA5hs"
    }), d[5] = r) : r = d[5];
    let y = r;
    d[6] === Symbol.for("react.memo_cache_sentinel") ? (i = s.fbs._("Image being replied to is unavailable", null, {
      hk: "3MAQ3i"
    }), d[6] = i) : i = d[6];
    let _ = i;
    d[7] !== b || d[8] !== x ? (o = null != x ? s.fbs._("Jump to image being replied to", null, {
      hk: "3aaMTR"
    }) : "loading" === b ? y : _, d[7] = b, d[8] = x, d[9] = o) : o = d[9];
    let C = o;
    d[10] !== b || d[11] !== x ? (c = null != x ? (0, t.jsx)("div", {
      "aria-hidden": "true",
      "data-slot": "reply-image-background",
      className: "pointer-events-none absolute inset-0 opacity-35",
      children: (0, t.jsx)(ek.EctoGracefulImage, {
        src: x,
        alt: "",
        draggable: !1,
        className: "block size-full object-cover"
      })
    }) : "loading" === b ? (0, t.jsx)("div", {
      role: "status",
      "aria-busy": "true",
      "aria-label": y,
      "data-slot": "reply-image-background",
      className: "absolute inset-0 motion-reduce:[&_*]:!animate-none",
      children: (0, t.jsx)(eH.Skeleton, {
        "aria-hidden": "true",
        className: (0, p.cn)("size-full rounded-none", e0)
      })
    }) : (0, t.jsx)("div", {
      role: "img",
      "aria-label": _,
      "data-slot": "reply-image-background",
      className: "text-icon-secondary absolute inset-0 flex items-center justify-center",
      children: (0, t.jsx)(P.HatchIcon, {
        icon: eT.default,
        size: 20,
        "aria-hidden": "true"
      })
    }), d[10] = b, d[11] = x, d[12] = c) : c = d[12];
    let j = c;
    if (null == h) {
      let e;
      return d[13] !== v || d[14] !== j ? (e = (0, t.jsx)("div", {
        className: v,
        children: j
      }), d[13] = v, d[14] = j, d[15] = e) : e = d[15], e
    }
    let S = "loading" === b || void 0;
    return d[16] !== C || d[17] !== v || d[18] !== j || d[19] !== h || d[20] !== f || d[21] !== S ? (u = (0, t.jsx)("button", {
      ref: f,
      type: "button",
      onClick: h,
      "aria-busy": S,
      "aria-label": C,
      className: v,
      children: j
    }), d[16] = C, d[17] = v, d[18] = j, d[19] = h, d[20] = f, d[21] = S, d[22] = u) : u = d[22], u
  }

  function eY(e) {
    let n, l, s, r = (0, a.c)(9),
      {
        children: i,
        contextBubble: o,
        eyebrow: c,
        replierRole: u
      } = e;
    return r[0] !== c || r[1] !== u ? (n = null != c ? (0, t.jsx)(ez, {
      text: c,
      replierRole: u
    }) : null, r[0] = c, r[1] = u, r[2] = n) : n = r[2], r[3] !== i || r[4] !== o ? (l = (0, t.jsxs)("div", {
      className: eU,
      children: [o, i]
    }), r[3] = i, r[4] = o, r[5] = l) : l = r[5], r[6] !== n || r[7] !== l ? (s = (0, t.jsxs)(t.Fragment, {
      children: [n, l]
    }), r[6] = n, r[7] = l, r[8] = s) : s = r[8], s
  }

  function eW(e) {
    let l, r, i, o, u, d, h, m, f, p, _, C, j, S, T, k = (0, a.c)(54),
      {
        children: H,
        imageTarget: E,
        replyToMessageId: w,
        replierRole: N
      } = e,
      I = E?.path;
    k[0] !== I ? (l = (0, eM.getHatchWorkspaceMediaPath)(I), k[0] = I, k[1] = l) : l = k[1];
    let R = l,
      A = (0, v.useChatMessage)(w);
    k[2] !== A?.content || k[3] !== A?.images ? (i = eB(r = (0, eO.stripImageMarkers)(A?.content ?? ""), A?.images), k[2] = A?.content, k[3] = A?.images, k[4] = r, k[5] = i) : (r = k[4], i = k[5]);
    let M = i,
      L = A?.clientSentAt != null ? `client-sent:${A.clientSentAt}` : `message:${A?.id??w}`,
      {
        sendRequest: P,
        isReady: O
      } = (0, eR.useHatchRpc)(),
      {
        jumpToMessage: V
      } = (0, x.useHatchChat)(),
      {
        gatewayUrl: F,
        vmName: B
      } = (0, ev.useHatchServerData)(),
      D = (0, v.useDeletedChatImageKeys)(),
      z = (0, y.useHatchChatThreadLoggingMetadataFromContext)();
    k[6] !== z ? (o = {
      eventName: g.HatchClickEvent.CHAT_JUMP_TO_REPLY,
      actionTarget: "inline_reply_preview",
      actionType: "click",
      metadata: {
        surface: "chat",
        subsurface: "reply_preview",
        ...z
      }
    }, k[6] = z, k[7] = o) : o = k[7];
    let {
      ref: U,
      onClick: G
    } = (0, c.useTrackedClickRef)(o);
    k[8] !== w ? (u = e => (0, eL.subscribeReplyPreview)(w, e), k[8] = w, k[9] = u) : u = k[9];
    let q = u;
    k[10] !== w ? (d = () => (0, eL.peekReplyPreview)(w), k[10] = w, k[11] = d) : d = k[11];
    let K = d,
      Y = (0, n.useSyncExternalStore)(q, K, eF);
    k[12] !== Y || k[13] !== w ? (h = {
      messageId: w,
      preview: Y
    }, k[12] = Y, k[13] = w, k[14] = h) : h = k[14];
    let [W, $] = (0, n.useState)(h), Q = W.messageId === w ? W.preview : void 0;
    (W.messageId !== w || void 0 !== Y && Y !== W.preview) && $({
      messageId: w,
      preview: Y
    });
    let Z = void 0 === Y ? Q : Y;
    k[15] !== R || k[16] !== O || k[17] !== M || k[18] !== r || k[19] !== A || k[20] !== w || k[21] !== P || k[22] !== L ? (m = () => {
      if (A?.isDeleted === !0) return void(0, eL.setReplyPreview)(w, null);
      if (null != A && (null != R || null != M || r.length > 0)) {
        var e, t, a;
        let n = (e = A.role, t = r, a = A.sortSeq, "system" === e || null == a ? null : {
          role: e,
          content: t,
          seq: a,
          ...null != M ? {
            imagePath: M
          } : {},
          ...null != L ? {
            sourceOccurrenceId: L
          } : {}
        });
        return null == n ? void(0, eL.setReplyPreview)(w, null) : void(0, eL.setReplyPreview)(w, n)
      }
      if ((0, eL.hasReplyPreview)(w) || !O) return;
      let n = !1;
      return P("chat.message_get", {
        message_id: w
      }).then(e => {
        if (n) return;
        let t = null != e.chat_event ? function(e, t = !1, a) {
          let n = "message.assistant" === e.event_name ? "assistant" : "message.user" === e.event_name ? "user" : null;
          if (null == n) return null;
          let l = "object" == typeof e.payload.payload && null != e.payload.payload ? e.payload.payload : null;
          if ((0, eP.isDeletedChatMessageState)(e.state) || (0, eP.isDeletedChatMessageState)(e.payload.state) || (0, eP.isDeletedChatMessageState)(l?.state)) return null;
          let s = "string" == typeof e.payload.content ? e.payload.content : null,
            r = "string" == typeof e.display_text ? e.display_text : null,
            i = "assistant" === n ? (null != r && r.trim().length > 0 ? r : null) ?? s ?? "" : s ?? r ?? "",
            o = (0, eO.stripImageMarkers)(i),
            c = (0, eO.extractAttachmentsFromResources)(e.resources).images,
            u = eB(o, (0, eO.mergeMessageImages)(c, (0, eO.extractImagesFromContent)(i)));
          return t || 0 !== o.length || null != u ? {
            role: n,
            content: o,
            seq: e.seq,
            ...null != u ? {
              imagePath: u
            } : {},
            ...null != a ? {
              sourceOccurrenceId: a
            } : {}
          } : null
        }(e.chat_event, null != R, `message:${w}`) : null;
        (0, eL.setReplyPreview)(w, t)
      }).catch(e => {
        n || eV.retainForBugReport("warn", "Failed to hydrate inline reply preview")
      }), () => {
        n = !0
      }
    }, f = [A, r, R, M, L, w, P, O], k[15] = R, k[16] = O, k[17] = M, k[18] = r, k[19] = A, k[20] = w, k[21] = P, k[22] = L, k[23] = m, k[24] = f) : (m = k[23], f = k[24]), (0, n.useEffect)(m, f), A?.content, A?.isDeleted, Z?.content;
    let J = A?.isDeleted === !0 ? "" : A?.content ?? Z?.content ?? "";
    k[25] !== J ? (p = (0, eO.stripImageMarkers)(J).replace(/!\[([^\]]*)\]\([^)]*\)/g, "📸 $1.").replace(/\[([^\]]*)\]\([^)]*\)/g, "$1").replace(/(\*{1,3}|_{1,3})(.+?)\1/g, "$2").replace(/~~(.+?)~~/g, "$1").replace(/`([^`]+)`/g, "$1").replace(/```[\s\S]*?```/g, "").replace(/^#{1,6}\s+/gm, "").replace(/^>\s+/gm, "").replace(/^[-*_]{3,}\s*$/gm, "").replace(/^[\s]*[-*+]\s+/gm, "").replace(/^[\s]*\d+\.\s+/gm, "").trim(), k[25] = J, k[26] = p) : p = k[26];
    let X = p;
    k[27] !== V || k[28] !== G || k[29] !== A?.sortSeq || k[30] !== w || k[31] !== Z?.seq ? (_ = () => {
      G();
      let e = A?.sortSeq ?? Z?.seq;
      null != e && V(w, e)
    }, k[27] = V, k[28] = G, k[29] = A?.sortSeq, k[30] = w, k[31] = Z?.seq, k[32] = _) : _ = k[32], A?.sortSeq, Z?.seq;
    let ee = _;
    k[33] !== A?.role || k[34] !== Z?.role ? (C = (A?.role ?? Z?.role) === "assistant" ? null : s.fbs._("yourself", null, {
      hk: "1IYPLl"
    }), k[33] = A?.role, k[34] = Z?.role, k[35] = C) : C = k[35];
    let et = eG(N, C),
      ea = X.length > 0,
      en = R ?? M ?? Z?.imagePath ?? null,
      el = B ?? F ?? "unscoped",
      es = null != A ? L : Z?.sourceOccurrenceId ?? `message:${w}`;
    k[36] !== D || k[37] !== el || k[38] !== es || k[39] !== en ? (j = null != en && D.has((0, b.getDeletedChatImageKey)(el, es, en)), k[36] = D, k[37] = el, k[38] = es, k[39] = en, k[40] = j) : j = k[40];
    let er = j,
      ei = null != en && !er && (null != A ? !0 !== A.isDeleted && "system" !== A.role : null != Z),
      eo = ea || ei ? et : null;
    return k[41] !== ee || k[42] !== ea || k[43] !== ei || k[44] !== U || k[45] !== X || k[46] !== N || k[47] !== en ? (S = ei ? (0, t.jsx)(eK, {
      ref: U,
      onClick: ee,
      path: en,
      replierRole: N
    }) : ea ? (0, t.jsx)(eq, {
      ref: U,
      onClick: ee,
      replierRole: N,
      text: X
    }) : null, k[41] = ee, k[42] = ea, k[43] = ei, k[44] = U, k[45] = X, k[46] = N, k[47] = en, k[48] = S) : S = k[48], k[49] !== H || k[50] !== N || k[51] !== eo || k[52] !== S ? (T = (0, t.jsx)(eY, {
      eyebrow: eo,
      replierRole: N,
      contextBubble: S,
      children: H
    }), k[49] = H, k[50] = N, k[51] = eo, k[52] = S, k[53] = T) : T = k[53], T
  }

  function e$(e) {
    let l, r, i, o, u, d, h, m, f, p, x, b, v = (0, a.c)(36),
      {
        children: _,
        replyToTarget: C,
        replierRole: j
      } = e,
      S = C.idea,
      T = (0, y.useHatchChatThreadLoggingMetadataFromContext)();
    v[0] !== S.id || v[1] !== T ? (l = {
      eventName: Q.HatchImpressionEvent.CHAT_IDEA_REPLY_CARD_IMPRESSION,
      actionTarget: "idea_reply_target_card",
      metadata: {
        surface: "chat",
        subsurface: "reply_preview",
        ...T,
        reply_target_type: "idea",
        idea_id: S.id
      }
    }, v[0] = S.id, v[1] = T, v[2] = l) : l = v[2], v[3] === Symbol.for("react.memo_cache_sentinel") ? (r = {
      threshold: "50%"
    }, v[3] = r) : r = v[3];
    let {
      ref: k
    } = (0, c.useTrackedImpressionRef)(l, r);
    v[4] !== S.id || v[5] !== T ? (i = {
      eventName: g.HatchClickEvent.IDEA_REPLY_CARD_CLICK,
      actionTarget: "idea_reply_target_card",
      actionType: "click",
      metadata: {
        surface: "chat",
        subsurface: "reply_preview",
        ...T,
        idea_id: S.id
      }
    }, v[4] = S.id, v[5] = T, v[6] = i) : i = v[6];
    let {
      ref: H,
      onClick: E
    } = (0, c.useTrackedClickRef)(i), w = S.categoryLabel ?? S.lane ?? "Idea";
    v[7] !== S || v[8] !== w ? (o = (0, ew.buildIdeaViewModels)(S, null, w), v[7] = S, v[8] = w, v[9] = o) : o = v[9];
    let {
      idea: N,
      detail: I
    } = o, [R, A] = (0, n.useState)(!1);
    v[10] === Symbol.for("react.memo_cache_sentinel") ? (u = {
      sentrySurface: el.HATCH_SENTRY_SURFACES.CHAT_FEED
    }, v[10] = u) : u = v[10];
    let M = (0, eN.useHatchExploreIdeaDetailQuery)(R ? S.id : null, u).data ?? I;
    v[11] !== E ? (d = () => {
      E(), A(!0)
    }, v[11] = E, v[12] = d) : d = v[12];
    let L = d;
    v[13] !== H || v[14] !== k ? (h = e => {
      "function" == typeof k && k(e), "function" == typeof H && H(e)
    }, v[13] = H, v[14] = k, v[15] = h) : h = v[15];
    let P = h,
      O = eG(j, null),
      V = S.title;
    return v[16] !== S.title ? (m = s.fbs._("View details for {idea title}", [s.fbs._param("idea title", S.title)], {
      hk: "2cnrKf"
    }), v[16] = S.title, v[17] = m) : m = v[17], v[18] !== S.title || v[19] !== L || v[20] !== j || v[21] !== P || v[22] !== m ? (f = (0, t.jsx)(eq, {
      ref: P,
      onClick: L,
      replierRole: j,
      text: V,
      ariaLabel: m
    }), v[18] = S.title, v[19] = L, v[20] = j, v[21] = P, v[22] = m, v[23] = f) : f = v[23], v[24] !== _ || v[25] !== O || v[26] !== j || v[27] !== f ? (p = (0, t.jsx)(eY, {
      eyebrow: O,
      replierRole: j,
      contextBubble: f,
      children: _
    }), v[24] = _, v[25] = O, v[26] = j, v[27] = f, v[28] = p) : p = v[28], v[29] !== M || v[30] !== N || v[31] !== R ? (x = R && (0, t.jsx)(eE.HatchIdeaPreviewDialog, {
      surface: "chat",
      idea: N,
      open: R,
      actionState: "installed",
      detailOverride: M,
      showDoItButton: !1,
      onOpenChange: A,
      onAction: eQ
    }), v[29] = M, v[30] = N, v[31] = R, v[32] = x) : x = v[32], v[33] !== p || v[34] !== x ? (b = (0, t.jsxs)(t.Fragment, {
      children: [p, x]
    }), v[33] = p, v[34] = x, v[35] = b) : b = v[35], b
  }

  function eQ() {}

  function eZ(e) {
    let n, l, r, i = (0, a.c)(12),
      {
        children: o,
        replyToTarget: c,
        replierRole: u
      } = e;
    i[0] !== c.category || i[1] !== c.kicker || i[2] !== c.title ? (n = c.title ?? c.kicker ?? c.category ?? s.fbs._("Feed unit", null, {
      hk: "4Cg7ZN"
    }), i[0] = c.category, i[1] = c.kicker, i[2] = c.title, i[3] = n) : n = i[3];
    let d = n,
      h = eG(u, null);
    return i[4] !== d || i[5] !== u ? (l = (0, t.jsx)(eq, {
      replierRole: u,
      text: d
    }), i[4] = d, i[5] = u, i[6] = l) : l = i[6], i[7] !== o || i[8] !== h || i[9] !== u || i[10] !== l ? (r = (0, t.jsx)(eY, {
      eyebrow: h,
      replierRole: u,
      contextBubble: l,
      children: o
    }), i[7] = o, i[8] = h, i[9] = u, i[10] = l, i[11] = r) : r = i[11], r
  }

  function eJ(e) {
    let n, l, s = (0, a.c)(8),
      {
        children: r,
        replyToTarget: i,
        replierRole: o
      } = e,
      c = eG(o, null);
    return s[0] !== o || s[1] !== i.replyToText ? (n = (0, t.jsx)(eq, {
      replierRole: o,
      text: i.replyToText
    }), s[0] = o, s[1] = i.replyToText, s[2] = n) : n = s[2], s[3] !== r || s[4] !== c || s[5] !== o || s[6] !== n ? (l = (0, t.jsx)(eY, {
      eyebrow: c,
      replierRole: o,
      contextBubble: n,
      children: r
    }), s[3] = r, s[4] = c, s[5] = o, s[6] = n, s[7] = l) : l = s[7], l
  }

  function eX(e) {
    let n, l = (0, a.c)(2),
      {
        size: s
      } = e;
    return l[0] !== s ? (n = (0, t.jsx)(P.HatchIcon, {
      icon: eS,
      size: s,
      iconSize: s,
      "aria-hidden": "true",
      className: "text-icon-secondary shrink-0"
    }), l[0] = s, l[1] = n) : n = l[1], n
  }
  let e0 = "bg-[var(--hatch-agent-bubble-bg)]",
    e1 = "hover:brightness-95 dark:hover:brightness-110";

  function e2(e) {
    let n, l = (0, a.c)(23),
      {
        children: s,
        replyToMessageId: r,
        replyToTarget: i,
        replierRole: o
      } = e,
      c = void 0 === o ? "user" : o;
    if (null != i) {
      let e;
      if ("image" === i.type) {
        let e;
        return l[0] !== s || l[1] !== c || l[2] !== r || l[3] !== i ? (e = null != r ? (0, t.jsx)(eW, {
          imageTarget: i,
          replyToMessageId: r,
          replierRole: c,
          children: s
        }) : (0, t.jsx)("div", {
          className: eU,
          children: s
        }), l[0] = s, l[1] = c, l[2] = r, l[3] = i, l[4] = e) : e = l[4], e
      }
      if ("presentation" === i.type) {
        let e;
        return l[5] !== s || l[6] !== c || l[7] !== i ? (e = (0, t.jsx)(eJ, {
          replyToTarget: i,
          replierRole: c,
          children: s
        }), l[5] = s, l[6] = c, l[7] = i, l[8] = e) : e = l[8], e
      }
      if ("feed_unit" === i.type) {
        let e;
        return l[9] !== s || l[10] !== c || l[11] !== i ? (e = (0, t.jsx)(eZ, {
          replyToTarget: i,
          replierRole: c,
          children: s
        }), l[9] = s, l[10] = c, l[11] = i, l[12] = e) : e = l[12], e
      }
      return l[13] !== s || l[14] !== c || l[15] !== i ? (e = (0, t.jsx)(e$, {
        replyToTarget: i,
        replierRole: c,
        children: s
      }), l[13] = s, l[14] = c, l[15] = i, l[16] = e) : e = l[16], e
    }
    if (null == r) {
      let e;
      return l[17] !== s ? (e = (0, t.jsx)("div", {
        className: eU,
        children: s
      }), l[17] = s, l[18] = e) : e = l[18], e
    }
    return l[19] !== s || l[20] !== c || l[21] !== r ? (n = (0, t.jsx)(eW, {
      replyToMessageId: r,
      replierRole: c,
      children: s
    }), l[19] = s, l[20] = c, l[21] = r, l[22] = n) : n = l[22], n
  }
  var e3 = e.i(30878),
    e4 = e.i(221988),
    e5 = e.i(245398),
    e8 = e.i(41507),
    e6 = e.i(464800),
    e7 = e.i(829051),
    e9 = e.i(453481),
    te = e.i(416873),
    tt = e.i(941960),
    ta = e.i(276331);
  let tn = (0, n.memo)(function(e) {
    let n, l, s, r = (0, a.c)(8),
      {
        text: i
      } = e;
    r[0] !== i ? (n = (0, ta.splitTextWithUrls)(i), r[0] = i, r[1] = n) : n = r[1];
    let o = n;
    if (1 === o.length && o[0]?.type === "text") {
      let e;
      return r[2] !== i ? (e = (0, t.jsx)(t.Fragment, {
        children: i
      }), r[2] = i, r[3] = e) : e = r[3], e
    }
    return r[4] !== o ? (l = o.map(tl), r[4] = o, r[5] = l) : l = r[5], r[6] !== l ? (s = (0, t.jsx)(t.Fragment, {
      children: l
    }), r[6] = l, r[7] = s) : s = r[7], s
  });

  function tl(e, a) {
    return "url" === e.type ? (0, t.jsx)(tt.EctoAnchor, {
      href: e.url,
      className: "text-chat-user-text underline",
      children: e.url
    }, a) : (0, t.jsx)("span", {
      children: e.text
    }, a)
  }
  var ts = e.i(226370);
  let tr = (0, n.memo)(function(e) {
    let n, l, s, r = (0, a.c)(9),
      {
        text: i,
        query: o,
        highlightClassName: c
      } = e;
    if (r[0] !== c || r[1] !== o || r[2] !== i) {
      l = Symbol.for("react.early_return_sentinel");
      e: {
        let e = (0, ts.buildSearchTokenPattern)(o);
        if (!e) {
          let e;
          r[5] !== i ? (e = (0, t.jsx)(t.Fragment, {
            children: i
          }), r[5] = i, r[6] = e) : e = r[6], l = e;
          break e
        }
        let a = i.split(e),
          s = o.trim().split(/\s+/).map(ti);n = a.map((e, a) => s.some(t => e.toLowerCase() === t) ? (0, t.jsx)("mark", {
          className: c ?? "hatch-search-keyword rounded-4 bg-transparent",
          children: e
        }, a) : (0, t.jsx)("span", {
          children: e
        }, a))
      }
      r[0] = c, r[1] = o, r[2] = i, r[3] = n, r[4] = l
    } else n = r[3], l = r[4];
    return l !== Symbol.for("react.early_return_sentinel") ? l : (r[7] !== n ? (s = (0, t.jsx)(t.Fragment, {
      children: n
    }), r[7] = n, r[8] = s) : s = r[8], s)
  });

  function ti(e) {
    return e.toLowerCase()
  }
  var to = e.i(735231),
    tc = e.i(704700),
    tu = e.i(951527),
    td = e.i(761984),
    th = e.i(238719),
    tm = e.i(980540),
    tf = e.i(203513),
    tp = e.i(302408),
    tg = e.i(637790);

  function tx(e, t) {
    let l, s, r = (0, a.c)(4),
      [i, o] = (0, n.useState)(!1);
    return r[0] !== t || r[1] !== e ? (l = () => {
      if (!e) return void o(!1);
      let a = window.setTimeout(() => o(!0), t);
      return () => window.clearTimeout(a)
    }, s = [t, e], r[0] = t, r[1] = e, r[2] = l, r[3] = s) : (l = r[2], s = r[3]), (0, n.useEffect)(l, s), i
  }

  function tb() {
    let e, n, l, r, i = (0, a.c)(6),
      o = (0, y.useHatchChatThreadLoggingMetadataFromContext)();
    i[0] !== o ? (e = {
      eventName: Q.HatchImpressionEvent.ERROR_CONTENT_IMPRESSION,
      actionTarget: "outgoing_message_delivery_unconfirmed",
      metadata: {
        surface: "chat",
        subsurface: "outgoing_message_delivery",
        ...o
      }
    }, i[0] = o, i[1] = e) : e = i[1], i[2] === Symbol.for("react.memo_cache_sentinel") ? (n = {
      threshold: "50%"
    }, i[2] = n) : n = i[2];
    let {
      ref: u
    } = (0, c.useTrackedImpressionRef)(e, n);
    return i[3] === Symbol.for("react.memo_cache_sentinel") ? (l = s.fbt._("Delivery not confirmed", null, {
      hk: "ZRiF3"
    }), i[3] = l) : l = i[3], i[4] !== u ? (r = (0, t.jsx)("span", {
      ref: u,
      className: "text-caption-1 text-text-destructive self-end",
      role: "alert",
      children: l
    }), i[4] = u, i[5] = r) : r = i[5], r
  }

  function tv(e) {
    let n, l, o, c, u, d, h, m, f, p, g, x = (0, a.c)(20),
      {
        containerRef: b,
        emoji: v,
        glyphRef: y
      } = e;
    return x[0] !== v ? (n = s.fbs._("Assistant reaction: {emoji}", [s.fbs._param("emoji", (0, er.reactionDisplayLabel)(v))], {
      hk: "1lLqo7"
    }), x[0] = v, x[1] = n) : n = x[1], x[2] === Symbol.for("react.memo_cache_sentinel") ? (l = {
      borderColor: "var(--hatch-panel-bg, var(--chat-background, var(--bg-secondary)))"
    }, x[2] = l) : l = x[2], x[3] === Symbol.for("react.memo_cache_sentinel") ? (o = {
      opacity: 0,
      y: 6
    }, c = {
      opacity: 1,
      y: 0
    }, u = {
      opacity: 0,
      y: -6
    }, d = {
      duration: .1
    }, x[3] = o, x[4] = c, x[5] = u, x[6] = d) : (o = x[3], c = x[4], u = x[5], d = x[6]), x[7] === Symbol.for("react.memo_cache_sentinel") ? (h = {
      display: "block",
      lineHeight: "16px",
      transform: "translateY(1px)"
    }, x[7] = h) : h = x[7], x[8] !== v ? (m = (0, t.jsx)(es.HatchReactionContent, {
      emoji: v
    }), x[8] = v, x[9] = m) : m = x[9], x[10] !== y || x[11] !== m ? (f = (0, t.jsx)("span", {
      style: h,
      children: (0, t.jsx)("span", {
        ref: y,
        className: "block",
        children: m
      })
    }), x[10] = y, x[11] = m, x[12] = f) : f = x[12], x[13] !== v || x[14] !== f ? (p = (0, t.jsx)(r.AnimatePresence, {
      mode: "popLayout",
      initial: !1,
      children: (0, t.jsx)(i.motion.span, {
        initial: o,
        animate: c,
        exit: u,
        transition: d,
        className: "inline-flex items-center justify-center",
        children: f
      }, v)
    }), x[13] = v, x[14] = f, x[15] = p) : p = x[15], x[16] !== b || x[17] !== n || x[18] !== p ? (g = (0, t.jsx)("span", {
      ref: b,
      role: "img",
      "aria-label": n,
      className: "inline-flex h-7 min-w-[38px] items-center justify-center rounded-full border-2 bg-[var(--hatch-agent-bubble-bg)] px-[8.5px] text-[16px] select-none",
      style: l,
      children: p
    }), x[16] = b, x[17] = n, x[18] = p, x[19] = g) : g = x[19], g
  }
  let ty = (0, n.forwardRef)(function(e, n) {
      let l, r, i, o, c, u, d, h, m, f, g, x, b, v, y, _, C, j, S, T, k, H, E, w, N = (0, a.c)(51);
      N[0] !== e ? ({
        bubbleLayoutOverrides: l,
        bubbleRef: r,
        className: i,
        content: o,
        layout: d,
        isSending: c,
        isVoiceAsr: u,
        responsiveWidthClassName: h,
        searchQuery: m,
        senderScreenReaderLabel: x,
        senderCaption: f,
        senderCaptionTitle: g,
        shouldDimSendingMessage: b,
        shouldShowSendingLabel: v,
        ...y
      } = e, N[0] = e, N[1] = l, N[2] = r, N[3] = i, N[4] = o, N[5] = c, N[6] = u, N[7] = d, N[8] = h, N[9] = m, N[10] = f, N[11] = g, N[12] = x, N[13] = b, N[14] = v, N[15] = y) : (l = N[1], r = N[2], i = N[3], o = N[4], c = N[5], u = N[6], d = N[7], h = N[8], m = N[9], f = N[10], g = N[11], x = N[12], b = N[13], v = N[14], y = N[15]), N[16] !== l || N[17] !== d ? (_ = (0, e8.hatchChatBubbleStyle)(d, l), N[16] = l, N[17] = d, N[18] = _) : _ = N[18];
      let I = _,
        R = null != f && "pt-5";
      N[19] !== i || N[20] !== h || N[21] !== R ? (C = (0, p.cn)("relative max-w-[520px]", h, R, i), N[19] = i, N[20] = h, N[21] = R, N[22] = C) : C = N[22], N[23] !== f || N[24] !== g ? (j = null != f ? (0, t.jsx)("span", {
        "aria-hidden": "true",
        className: "text-caption-1 text-text-secondary absolute end-0 top-0 block max-w-[min(520px,70vw)] truncate pe-3.5 text-end whitespace-nowrap",
        "data-copy-exclude": !0,
        "data-testid": "peer-sender-caption",
        title: g,
        children: f
      }) : null, N[23] = f, N[24] = g, N[25] = j) : j = N[25];
      let A = b && "opacity-60";
      return N[26] !== h || N[27] !== A ? (S = (0, p.cn)(e5.HATCH_CHAT_GROUPABLE_BUBBLE_CLASS, e7.BUBBLE_BOX_CLASS, "rounded-22 bg-chat-user-bubble text-chat-user-text relative z-[1] max-w-[520px] break-words", h, A), N[26] = h, N[27] = A, N[28] = S) : S = N[28], N[29] !== x ? (T = (0, t.jsx)("span", {
        className: "sr-only",
        "data-copy-exclude": !0,
        children: x
      }), N[29] = x, N[30] = T) : T = N[30], N[31] !== o || N[32] !== u || N[33] !== m ? (k = (0, t.jsx)("p", {
        className: "text-[16px] leading-[22px] whitespace-pre-wrap",
        children: u ? (0, t.jsx)(tc.VoiceAsrBubble, {
          content: o
        }) : m ? (0, t.jsx)(tr, {
          text: o,
          query: m,
          highlightClassName: "hatch-search-keyword rounded-4"
        }) : (0, t.jsx)(tn, {
          text: o
        })
      }), N[31] = o, N[32] = u, N[33] = m, N[34] = k) : k = N[34], N[35] !== r || N[36] !== I || N[37] !== c || N[38] !== S || N[39] !== T || N[40] !== k ? (H = (0, t.jsxs)("div", {
        ref: r,
        "aria-busy": c,
        className: S,
        style: I,
        children: [T, k]
      }), N[35] = r, N[36] = I, N[37] = c, N[38] = S, N[39] = T, N[40] = k, N[41] = H) : H = N[41], N[42] !== v ? (E = v ? (0, t.jsx)("span", {
        className: "text-caption-1 text-text-secondary absolute end-0 top-full mt-1 ps-4 pe-3.5 text-end whitespace-nowrap",
        role: "status",
        children: s.fbt._("Still sending", null, {
          hk: "2dEV9z"
        })
      }) : null, N[42] = v, N[43] = E) : E = N[43], N[44] !== n || N[45] !== E || N[46] !== C || N[47] !== j || N[48] !== H || N[49] !== y ? (w = (0, t.jsxs)("div", {
        ...y,
        ref: n,
        className: C,
        children: [j, H, E]
      }), N[44] = n, N[45] = E, N[46] = C, N[47] = j, N[48] = H, N[49] = y, N[50] = w) : w = N[50], w
    }),
    t_ = (0, n.memo)(function(e) {
      let l, o, u, d, h, m, f, b, _, C, j, S, T, k, H, E, w, N, I, R, A, M, L, P, V, F, B, D, z, U, G, q, K, Y, W, Q, Z, J, X, ee, es, ej, eS, eT, ek, eH, eE, ew = (0, a.c)(195),
        {
          msg: eN,
          onQuote: eI,
          bubbleLayoutOverrides: eR,
          voiceEnabled: eA
        } = e,
        eM = void 0 === eA || eA,
        {
          isMessageDeletionPending: eL,
          persistWidgetState: eP,
          sendMessage: eO
        } = (0, x.useHatchChat)(),
        eV = (0, $.useMcBool)("5e1fb489", !1),
        {
          vmName: eF
        } = (0, ev.useHatchServerData)(),
        {
          requestMessageDeletion: eB
        } = (0, tm.useHatchMessageDeletionConfirmation)(),
        eD = (0, eg.useHatchChatRouteFromContext)(),
        ez = (0, ea.useIsPeerSidechatFromContext)(),
        eU = ez && (eN.peerAuthor?.kind === "peer_agent" || eN.peerAuthor?.kind === "peer_human") ? eN.peerAuthor : void 0,
        eG = eU?.label;
      ew[0] !== ez || ew[1] !== eU?.kind || ew[2] !== eG ? (l = ez ? null != eG && eU?.kind === "peer_agent" ? s.fbs._("{contact name}'s Muse:", [s.fbs._param("contact name", eG)], {
        hk: "363Vuh"
      }) : null != eG ? s.fbs._("{contact name}:", [s.fbs._param("contact name", eG)], {
        hk: "1rRPYI"
      }) : s.fbs._("Their Muse:", null, {
        hk: "4lQE7F"
      }) : s.fbs._("You:", null, {
        hk: "10q5Du"
      }), ew[0] = ez, ew[1] = eU?.kind, ew[2] = eG, ew[3] = l) : l = ew[3];
      let eq = l,
        eK = (0, ep.useOptionalHatchChatFeedViewportContext)(),
        eY = eK?.messageActionMode ?? "inline",
        eW = "compact" === eY,
        e$ = eN.messageId,
        eQ = eN.messageId ?? eN.id,
        eZ = !0 === eN.isDeleted;
      ew[4] !== eZ || ew[5] !== eV || ew[6] !== e$ || ew[7] !== eN.isOptimistic || ew[8] !== eF ? (o = eV && null != eF && null != e$ && !0 !== eN.isOptimistic && !eZ ? (0, ex.buildHatcheryUrl)(eF, e$) : null, ew[4] = eZ, ew[5] = eV, ew[6] = e$, ew[7] = eN.isOptimistic, ew[8] = eF, ew[9] = o) : o = ew[9];
      let eJ = o,
        eX = eN.messageId;
      ew[10] !== eZ || ew[11] !== eN.content ? (u = !eZ && eN.content.trim().length > 0, ew[10] = eZ, ew[11] = eN.content, ew[12] = u) : u = ew[12];
      let e0 = u,
        [e1, e7] = (0, n.useState)(!1),
        tt = (0, n.useRef)(!1),
        ta = (0, n.useRef)(!1);
      ew[13] !== eZ || ew[14] !== eN.annotationContext || ew[15] !== eN.content ? (d = () => eZ || null != eN.annotationContext ? null : (0, to.consumeAnnotationContext)(eN.content), ew[13] = eZ, ew[14] = eN.annotationContext, ew[15] = eN.content, ew[16] = d) : d = ew[16];
      let [tn] = (0, n.useState)(d), tl = eZ ? null : eN.annotationContext ?? tn;
      if (ew[17] !== eZ || ew[18] !== eN.files || ew[19] !== eN.images) {
        let e = eZ ? [] : (eN.images ?? []).map(tC);
        h = eZ ? [] : [...e, ...eN.files ?? []], ew[17] = eZ, ew[18] = eN.files, ew[19] = eN.images, ew[20] = h
      } else h = ew[20];
      let ts = h,
        tr = ts.length > 0,
        ti = eZ ? [] : (eN.widgets ?? []).filter(e4.isChatWidget).filter(e => (0, e9.canRenderHatchChatWidget)(e, eM)),
        tc = ti.length > 0,
        t_ = tc && ti.every(tj);
      ew[21] !== eN.files || ew[22] !== eN.images ? (m = (0, te.getMessageQuoteMedia)({
        files: eN.files,
        images: eN.images
      }), ew[21] = eN.files, ew[22] = eN.images, ew[23] = m) : m = ew[23];
      let tS = m,
        tT = (0, n.useContext)(e8.HatchChatMessageLayoutContext),
        tk = "single" === tT.groupPosition || "first" === tT.groupPosition;
      ew[24] !== eU?.kind || ew[25] !== eG || ew[26] !== tk ? (f = null != eG && tk ? eU?.kind === "peer_agent" ? s.fbs._("{contact name}'s Muse", [s.fbs._param("contact name", eG)], {
        hk: "1wF6ZK"
      }) : eG : void 0, ew[24] = eU?.kind, ew[25] = eG, ew[26] = tk, ew[27] = f) : f = ew[27];
      let tH = f;
      ew[28] !== eU?.kind || ew[29] !== eG || ew[30] !== tk ? (b = null != eG && tk ? eU?.kind === "peer_agent" ? s.fbt._("{contact name}'s Muse", [s.fbt._param("contact name", (0, t.jsx)("bdi", {
        dir: "auto",
        children: eG
      }))], {
        hk: "CtPvu"
      }) : (0, t.jsx)("bdi", {
        dir: "auto",
        children: eG
      }) : void 0, ew[28] = eU?.kind, ew[29] = eG, ew[30] = tk, ew[31] = b) : b = ew[31];
      let tE = b,
        tw = tr || tc,
        tN = e0 || eZ,
        tI = +!!tw + +!!tN;
      ew[32] !== tT || ew[33] !== tI ? (_ = (0, e5.layoutForHatchChatBubbleSurface)(tT, 0, tI, {
        taperAdjacentSurfaces: !0
      }), ew[32] = tT, ew[33] = tI, ew[34] = _) : _ = ew[34];
      let tR = _,
        tA = (0, e5.layoutForHatchChatBubbleSurface)(tT, Math.max(tI - 1, 0), tI, {
          taperAdjacentSurfaces: !0
        }),
        tM = !eZ && "sending" === eN.deliveryStatus,
        tL = tx(tM && "awaiting_ack" === eN.deliveryPhase, 250),
        tP = tx(tM, 5e3),
        tO = tM && (null == eN.deliveryPhase || "queued_for_connection" === eN.deliveryPhase || tL),
        tV = tM && tP,
        tF = (0, c.useInteractionLoggerWithLazyData)(),
        tB = (0, y.useHatchChatThreadLoggingMetadataFromContext)(),
        tD = (0, v.useMessageReactions)(eX ?? eN.id);
      ew[35] !== tD ? (C = tD.find(er.isRenderableReactionValue) ?? null, ew[35] = tD, ew[36] = C) : C = ew[36];
      let tz = C,
        {
          onComplete: tU,
          playKey: tG
        } = (0, ei.useReactionLanded)(tz),
        tq = !eZ && null != eX,
        tK = (0, td.getHatchUserMessageLayout)({
          actionMode: eY,
          hasReaction: null != tz && tq,
          hasSendingLabel: tV,
          hasTextContent: e0 || eZ
        }),
        tY = (0, et.useSearchQuery)();
      ew[37] !== eD || ew[38] !== eZ || ew[39] !== ez || ew[40] !== e$ || ew[41] !== eN.id || ew[42] !== eN.isOptimistic || ew[43] !== eN.source ? (j = !eZ && null != e$ && e$ === eN.id && !0 !== eN.isOptimistic && !ez && !th.EXTERNAL_CHANNELS.has(eN.source ?? "") && (null == eD || "main" === eD.kind || "thread" === eD.kind), ew[37] = eD, ew[38] = eZ, ew[39] = ez, ew[40] = e$, ew[41] = eN.id, ew[42] = eN.isOptimistic, ew[43] = eN.source, ew[44] = j) : j = ew[44];
      let tW = j,
        t$ = e$ ?? "";
      ew[45] !== t$ || ew[46] !== tB ? (S = {
        eventName: g.HatchClickEvent.CHAT_DELETE_MESSAGE,
        actionTarget: "delete_message_menu_item",
        actionType: "click",
        metadata: {
          surface: "chat",
          subsurface: "context_menu",
          entry_point: "right_click",
          ...tB,
          message_id: t$
        }
      }, ew[45] = t$, ew[46] = tB, ew[47] = S) : S = ew[47];
      let {
        ref: tQ,
        onClick: tZ
      } = (0, c.useTrackedClickRef)(S);
      ew[48] !== e$ ? (T = null != e$ ? {
        message_id: e$
      } : {}, ew[48] = e$, ew[49] = T) : T = ew[49], ew[50] !== T || ew[51] !== tB ? (k = {
        eventName: g.HatchClickEvent.CHAT_MESSAGE_OVERFLOW_OPEN,
        actionTarget: "message_overflow_button",
        actionType: "click",
        metadata: {
          surface: "chat",
          subsurface: "message_toolbar",
          entry_point: "hover_button",
          ...tB,
          ...T
        }
      }, ew[50] = T, ew[51] = tB, ew[52] = k) : k = ew[52];
      let {
        ref: tJ,
        onClick: tX
      } = (0, c.useTrackedClickRef)(k), t0 = e$ ?? "";
      ew[53] !== t0 || ew[54] !== tB ? (H = {
        eventName: g.HatchClickEvent.CHAT_DELETE_MESSAGE,
        actionTarget: "delete_message_menu_item",
        actionType: "click",
        metadata: {
          surface: "chat",
          subsurface: "message_toolbar",
          entry_point: "hover_button",
          ...tB,
          message_id: t0
        }
      }, ew[53] = t0, ew[54] = tB, ew[55] = H) : H = ew[55];
      let {
        ref: t1,
        onClick: t2
      } = (0, c.useTrackedClickRef)(H);
      ew[56] !== eL || ew[57] !== e$ || ew[58] !== eB ? (E = () => {
        null == e$ || eL || eB(e$)
      }, ew[56] = eL, ew[57] = e$, ew[58] = eB, ew[59] = E) : E = ew[59];
      let t3 = E;
      ew[60] !== tZ || ew[61] !== t3 ? (w = () => {
        tZ(), t3()
      }, ew[60] = tZ, ew[61] = t3, ew[62] = w) : w = ew[62];
      let t4 = w;
      ew[63] !== t2 || ew[64] !== t3 ? (N = () => {
        t2(), t3()
      }, ew[63] = t2, ew[64] = t3, ew[65] = N) : N = ew[65];
      let t5 = N;
      ew[66] !== e$ || ew[67] !== eN.content || ew[68] !== eI ? (I = e => {
        null != e$ && (null != e ? eI(e$, eN.content, e) : eI(e$, eN.content))
      }, ew[66] = e$, ew[67] = eN.content, ew[68] = eI, ew[69] = I) : I = ew[69];
      let t8 = I;
      ew[70] !== tS || ew[71] !== t8 ? (R = () => t8(tS), ew[70] = tS, ew[71] = t8, ew[72] = R) : R = ew[72];
      let t6 = R;
      ew[73] !== tF || ew[74] !== e$ || ew[75] !== t6 || ew[76] !== tB ? (A = () => {
        null != e$ && (tF({
          eventName: g.HatchClickEvent.CHAT_REPLY_MESSAGE,
          actionTarget: "reply_button",
          actionType: "click",
          metadata: {
            surface: "chat",
            subsurface: "message_toolbar",
            entry_point: "hover_button",
            ...tB,
            message_id: e$
          }
        }), t6())
      }, ew[73] = tF, ew[74] = e$, ew[75] = t6, ew[76] = tB, ew[77] = A) : A = ew[77];
      let t7 = A,
        t9 = eN.source === tu.VOICE_ASR_SOURCE,
        ae = (ek = (0, a.c)(3), eH = (0, n.useRef)(null), eE = (0, n.useRef)(null), ek[0] !== t9 ? (eS = () => {
          if (!t9) return;
          let e = eH.current;
          if (!e) return;
          let t = window.matchMedia("(prefers-reduced-motion: reduce)").matches,
            a = new ResizeObserver(a => {
              let n = a[0]?.borderBoxSize[0];
              if (!n) return;
              let l = n.inlineSize,
                s = n.blockSize,
                r = eE.current;
              if (r && !t) {
                let t = Math.max(0, l - r.w),
                  a = Math.max(0, s - r.h);
                (t > 0 || a > 0) && e.animate([{
                  transform: `translateX(${t}px)`,
                  clipPath: `inset(0 ${t}px ${a}px 0 round 22px)`
                }, {
                  transform: "translateX(0)",
                  clipPath: "inset(0 0 0 0 round 22px)"
                }], {
                  duration: 300,
                  easing: "ease-out"
                })
              }
              eE.current = {
                w: l,
                h: s
              }
            });
          return a.observe(e), () => a.disconnect()
        }, eT = [t9], ek[0] = t9, ek[1] = eS, ek[2] = eT) : (eS = ek[1], eT = ek[2]), (0, n.useLayoutEffect)(eS, eT), eH);
      ew[78] !== ae || ew[79] !== eN.content ? (M = {
        bodyRef: ae,
        copyContent: eN.content
      }, ew[78] = ae, ew[79] = eN.content, ew[80] = M) : M = ew[80];
      let {
        noteMenuOpen: at,
        onCopy: aa
      } = (0, e_.useHatchMessageMenuCopy)(M);
      ew[81] !== tX || ew[82] !== at ? (L = e => {
        e7(e), at(e), e && tX()
      }, ew[81] = tX, ew[82] = at, ew[83] = L) : L = ew[83];
      let an = L,
        al = eZ ? (0, t.jsxs)("div", {
          ref: ae,
          className: (0, p.cn)(e5.HATCH_CHAT_GROUPABLE_BUBBLE_CLASS, "rounded-22 bg-fill-secondary text-text-secondary relative z-[1] max-w-[280px] px-4 py-2.5 break-words"),
          style: (0, e8.hatchChatBubbleStyle)(tA, eR),
          children: [(0, t.jsx)("span", {
            className: "sr-only",
            "data-copy-exclude": !0,
            children: s.fbs._("You:", null, {
              hk: "10q5Du"
            })
          }), (0, t.jsx)("p", {
            className: "text-[15px] leading-[24px]",
            children: s.fbs._("You deleted a message", null, {
              hk: "1A0tzA"
            })
          })]
        }) : e0 ? (0, t.jsx)(ty, {
          bubbleLayoutOverrides: eR,
          layout: tA,
          bubbleRef: ae,
          content: eN.content,
          isSending: tM,
          isVoiceAsr: t9,
          responsiveWidthClassName: tK.textBubbleClassName,
          searchQuery: tY,
          senderScreenReaderLabel: eq,
          senderCaption: tE,
          senderCaptionTitle: tH,
          shouldDimSendingMessage: tO,
          shouldShowSendingLabel: tV
        }) : null,
        as = tc ? (0, t.jsx)("div", {
          className: (0, p.cn)("flex w-full flex-col items-stretch gap-2", t_ ? e3.HATCH_CHAT_IDEA_SMALL_CARD_WIDTH_CLASS : "max-w-[584px]"),
          children: (0, t.jsx)(e6.HatchChatBubbleSequence, {
            children: ti.map(e => (0, t.jsx)(tp.HatchDeferredMessageBoundary, {
              fallback: (0, t.jsx)(tg.HatchChatWidgetSkeleton, {
                widget: e
              }),
              messageRole: "user",
              subtree: "widget",
              children: (0, t.jsx)(tf.HatchChatWidgetLazy, {
                fromHistory: e.fromHistory,
                hostMessageCreatedAt: eN.createdAt,
                hostMessageId: eQ,
                parentGoalId: eN.parentGoalId,
                widget: e,
                onQuote: null == e$ ? void 0 : eI,
                onPersistState: eP,
                onSendMessage: async (e, t, a) => {
                  let n = null != a ? {
                      hiddenPrompt: a
                    } : void 0,
                    l = await eO(t, void 0, n);
                  return (0, eb.handlePendingApprovalSendResult)(l, t, {
                    explainDraftKept: !0,
                    sendOptions: n
                  }), l
                }
              })
            }, e.widgetId))
          })
        }) : null;
      ew[84] !== ts || ew[85] !== tR || ew[86] !== tw || ew[87] !== tr || ew[88] !== t_ || ew[89] !== e0 || ew[90] !== tc || ew[91] !== e$ || ew[92] !== eN.clientSentAt || ew[93] !== eN.createdAt || ew[94] !== eN.id || ew[95] !== eN.messageId || ew[96] !== eN.sortSeq || ew[97] !== t8 || ew[98] !== as ? (P = tw ? (0, t.jsx)("div", {
        className: (0, p.cn)("flex w-full flex-col items-stretch gap-2", tc ? t_ ? e3.HATCH_CHAT_IDEA_SMALL_CARD_WIDTH_CLASS : "max-w-[584px]" : "max-w-[520px]", e0 && "mb-1"),
        children: (0, t.jsx)(e6.HatchChatMessageLayoutProvider, {
          layout: tR,
          children: (0, t.jsxs)(e6.HatchChatBubbleSequence, {
            children: [as, tr ? (0, t.jsx)(eC.HatchMessageFiles, {
              files: ts,
              outgoing: !0,
              messageId: eN.messageId,
              messageOccurrenceId: null != eN.clientSentAt ? `client-sent:${eN.clientSentAt}` : `message:${eN.id}`,
              messageCreatedAt: eN.createdAt,
              messageSeq: eN.sortSeq,
              onMediaReply: null != e$ ? t8 : void 0
            }) : null]
          })
        })
      }) : null, ew[84] = ts, ew[85] = tR, ew[86] = tw, ew[87] = tr, ew[88] = t_, ew[89] = e0, ew[90] = tc, ew[91] = e$, ew[92] = eN.clientSentAt, ew[93] = eN.createdAt, ew[94] = eN.id, ew[95] = eN.messageId, ew[96] = eN.sortSeq, ew[97] = t8, ew[98] = as, ew[99] = P) : P = ew[99];
      let ar = P,
        ai = tN ? al : ar,
        ao = !eZ && !ez && null != e$,
        ac = !eZ && e0,
        au = !eZ && null != eJ,
        ad = ao || ac,
        ah = ad || au || tW;
      ew[100] !== ac || ew[101] !== au || ew[102] !== tW || ew[103] !== ao || ew[104] !== tQ || ew[105] !== t4 || ew[106] !== ah || ew[107] !== ad || ew[108] !== eJ || ew[109] !== eL || ew[110] !== e$ || ew[111] !== eN.createdAt || ew[112] !== aa || ew[113] !== t6 ? (V = ah && (0, t.jsxs)(t.Fragment, {
        children: [(0, t.jsx)(ey.HatchMessageMenuTimestamp, {
          createdAt: eN.createdAt
        }), (0, t.jsx)(ey.HatchMessagePrimaryMenuItems, {
          messageId: e$ ?? "",
          onCopy: ac ? aa : void 0,
          onReply: ao ? t6 : void 0,
          subsurface: "context_menu",
          variant: "context"
        }), au && (0, t.jsxs)(t.Fragment, {
          children: [ad && (0, t.jsx)(ef.ContextMenuSeparator, {}), (0, t.jsx)(ey.HatchMessagePariscopeCopyMenuItem, {
            hatcheryUrl: eJ,
            messageId: e$,
            subsurface: "context_menu",
            variant: "context"
          })]
        }), tW && (0, t.jsxs)(t.Fragment, {
          children: [(ad || au) && (0, t.jsx)(ef.ContextMenuSeparator, {}), (0, t.jsx)(ef.ContextMenuItem, {
            ref: tQ,
            leadingIcon: eh.default,
            label: s.fbs._("Delete", null, {
              hk: "2zUZyH"
            }),
            variant: "destructive",
            disabled: eL,
            onSelect: t4
          })]
        })]
      }), ew[100] = ac, ew[101] = au, ew[102] = tW, ew[103] = ao, ew[104] = tQ, ew[105] = t4, ew[106] = ah, ew[107] = ad, ew[108] = eJ, ew[109] = eL, ew[110] = e$, ew[111] = eN.createdAt, ew[112] = aa, ew[113] = t6, ew[114] = V) : V = ew[114], ew[115] !== V ? (F = (0, t.jsx)(ef.ContextMenuContent, {
        children: V
      }), ew[115] = V, ew[116] = F) : F = ew[116];
      let am = F;
      ew[117] === Symbol.for("react.memo_cache_sentinel") ? (B = e => {
        ta.current && (ta.current = !1, e.preventDefault(), e.stopPropagation())
      }, D = () => {
        ta.current = !1
      }, z = () => {
        tt.current = !1
      }, U = e => {
        ta.current = !1, tt.current = "touch" === e.pointerType || "pen" === e.pointerType
      }, G = () => {
        tt.current = !1
      }, ew[117] = B, ew[118] = D, ew[119] = z, ew[120] = U, ew[121] = G) : (B = ew[117], D = ew[118], z = ew[119], U = ew[120], G = ew[121]), ew[122] !== eZ || ew[123] !== eN.replyToMessageId || ew[124] !== eN.replyToTarget ? (q = eZ ? {} : {
        ...null != eN.replyToMessageId ? {
          replyToMessageId: eN.replyToMessageId
        } : {},
        ...null != eN.replyToTarget ? {
          replyToTarget: eN.replyToTarget
        } : {}
      }, ew[122] = eZ, ew[123] = eN.replyToMessageId, ew[124] = eN.replyToTarget, ew[125] = q) : q = ew[125];
      let af = (0, p.cn)("relative", e0 && tK.textBubbleClassName);
      ew[126] !== tq || ew[127] !== eN.id || ew[128] !== tU || ew[129] !== tz || ew[130] !== eX || ew[131] !== tG ? (K = null != tz && tq ? (0, t.jsx)(i.motion.div, {
        initial: {
          opacity: 0,
          scale: .5,
          y: -4
        },
        animate: {
          opacity: 1,
          scale: 1,
          y: 0
        },
        exit: {
          opacity: 0,
          scale: .5,
          y: -4
        },
        transition: {
          duration: .12
        },
        className: "absolute end-1 -bottom-5 z-10",
        children: (0, t.jsx)(en.HatchReactionBurst, {
          emoji: tz,
          ownerId: eX ?? eN.id,
          playKey: tG,
          sentrySurface: el.HATCH_SENTRY_SURFACES.CHAT_MESSAGE,
          onComplete: tU,
          children: e => {
            let {
              containerRef: a,
              glyphRef: n
            } = e;
            return (0, t.jsx)(tv, {
              containerRef: a,
              emoji: tz,
              glyphRef: n
            })
          }
        })
      }, tz) : null, ew[126] = tq, ew[127] = eN.id, ew[128] = tU, ew[129] = tz, ew[130] = eX, ew[131] = tG, ew[132] = K) : K = ew[132], ew[133] !== K ? (Y = (0, t.jsx)(r.AnimatePresence, {
        initial: !1,
        children: K
      }), ew[133] = K, ew[134] = Y) : Y = ew[134], ew[135] !== ai || ew[136] !== af || ew[137] !== Y ? (W = (0, t.jsxs)("div", {
        className: af,
        children: [ai, Y]
      }), ew[135] = ai, ew[136] = af, ew[137] = Y, ew[138] = W) : W = ew[138], ew[139] !== ac || ew[140] !== au || ew[141] !== tW || ew[142] !== ao || ew[143] !== t7 || ew[144] !== an || ew[145] !== t5 || ew[146] !== ah || ew[147] !== ad || ew[148] !== eJ || ew[149] !== eZ || ew[150] !== eL || ew[151] !== e$ || ew[152] !== eN.content || ew[153] !== eN.createdAt || ew[154] !== aa || ew[155] !== e1 || ew[156] !== tJ || ew[157] !== t6 || ew[158] !== tK.toolbarClassName || ew[159] !== eW || ew[160] !== t1 ? (Q = eZ ? null : (0, t.jsx)("div", {
        className: tK.toolbarClassName,
        children: eW ? ah ? (0, t.jsxs)(em.DropdownMenu, {
          open: e1,
          onOpenChange: an,
          children: [(0, t.jsx)(O.TooltipProvider, {
            delayDuration: 0,
            skipDelayDuration: 1 / 0,
            children: (0, t.jsxs)(O.Tooltip, {
              children: [(0, t.jsx)(em.DropdownMenuTrigger, {
                asChild: !0,
                children: (0, t.jsx)(O.TooltipTrigger, {
                  asChild: !0,
                  children: (0, t.jsx)(ec.IconRailButton, {
                    ref: tJ,
                    icon: ed.default,
                    size: "24",
                    variant: "borderless",
                    label: s.fbs._("More options", null, {
                      hk: "5VwrT"
                    }),
                    className: "text-text-secondary"
                  })
                })
              }), (0, t.jsx)(O.TooltipContent, {
                side: "bottom",
                children: s.fbt._("More", null, {
                  hk: "4GjxpD"
                })
              })]
            })
          }), (0, t.jsxs)(em.DropdownMenuContent, {
            align: "end",
            children: [(0, t.jsx)(ey.HatchMessageMenuTimestamp, {
              createdAt: eN.createdAt
            }), (0, t.jsx)(ey.HatchMessagePrimaryMenuItems, {
              messageId: e$,
              onCopy: ac ? aa : void 0,
              onReply: ao ? t6 : void 0,
              subsurface: "message_toolbar",
              variant: "dropdown"
            }), au ? (0, t.jsxs)(t.Fragment, {
              children: [ad && (0, t.jsx)(em.DropdownMenuSeparator, {}), (0, t.jsx)(ey.HatchMessagePariscopeCopyMenuItem, {
                hatcheryUrl: eJ,
                messageId: e$,
                subsurface: "message_toolbar",
                variant: "dropdown"
              })]
            }) : null, tW ? (0, t.jsxs)(t.Fragment, {
              children: [(ad || au) && (0, t.jsx)(em.DropdownMenuSeparator, {}), (0, t.jsx)(em.DropdownMenuItem, {
                ref: t1,
                leadingIcon: eh.default,
                label: s.fbs._("Delete", null, {
                  hk: "2BDI5C"
                }),
                variant: "destructive",
                disabled: eL,
                onSelect: t5
              })]
            }) : null]
          })]
        }) : null : (0, t.jsxs)(t.Fragment, {
          children: [tW || au ? (0, t.jsxs)(em.DropdownMenu, {
            open: e1,
            onOpenChange: an,
            children: [(0, t.jsx)(O.TooltipProvider, {
              delayDuration: 0,
              skipDelayDuration: 1 / 0,
              children: (0, t.jsxs)(O.Tooltip, {
                children: [(0, t.jsx)(em.DropdownMenuTrigger, {
                  asChild: !0,
                  children: (0, t.jsx)(O.TooltipTrigger, {
                    asChild: !0,
                    children: (0, t.jsx)(ec.IconRailButton, {
                      ref: tJ,
                      icon: ed.default,
                      size: "24",
                      variant: "borderless",
                      label: s.fbs._("More options", null, {
                        hk: "5VwrT"
                      }),
                      className: "text-text-secondary"
                    })
                  })
                }), (0, t.jsx)(O.TooltipContent, {
                  side: "bottom",
                  children: s.fbt._("More", null, {
                    hk: "4GjxpD"
                  })
                })]
              })
            }), (0, t.jsxs)(em.DropdownMenuContent, {
              align: "end",
              children: [(0, t.jsx)(ey.HatchMessageMenuTimestamp, {
                createdAt: eN.createdAt
              }), au ? (0, t.jsx)(ey.HatchMessagePariscopeCopyMenuItem, {
                hatcheryUrl: eJ,
                messageId: e$,
                subsurface: "message_toolbar",
                variant: "dropdown"
              }) : null, au && tW ? (0, t.jsx)(em.DropdownMenuSeparator, {}) : null, tW ? (0, t.jsx)(em.DropdownMenuItem, {
                ref: t1,
                leadingIcon: eh.default,
                label: s.fbs._("Delete", null, {
                  hk: "2BDI5C"
                }),
                variant: "destructive",
                disabled: eL,
                onSelect: t5
              }) : null]
            })]
          }) : null, (0, t.jsx)(eo.default, {
            content: eN.content
          }), null != e$ ? (0, t.jsx)(O.TooltipProvider, {
            delayDuration: 0,
            skipDelayDuration: 1 / 0,
            children: (0, t.jsxs)(O.Tooltip, {
              children: [(0, t.jsx)(O.TooltipTrigger, {
                asChild: !0,
                children: (0, t.jsx)(ec.IconRailButton, {
                  icon: eu.default,
                  size: "24",
                  variant: "borderless",
                  label: s.fbs._("Reply", null, {
                    hk: "afciV"
                  }),
                  className: "text-text-secondary",
                  onClick: t7
                })
              }), (0, t.jsx)(O.TooltipContent, {
                side: "bottom",
                children: s.fbt._("Reply", null, {
                  hk: "2ToD9Q"
                })
              })]
            })
          }) : null]
        })
      }), ew[139] = ac, ew[140] = au, ew[141] = tW, ew[142] = ao, ew[143] = t7, ew[144] = an, ew[145] = t5, ew[146] = ah, ew[147] = ad, ew[148] = eJ, ew[149] = eZ, ew[150] = eL, ew[151] = e$, ew[152] = eN.content, ew[153] = eN.createdAt, ew[154] = aa, ew[155] = e1, ew[156] = tJ, ew[157] = t6, ew[158] = tK.toolbarClassName, ew[159] = eW, ew[160] = t1, ew[161] = Q) : Q = ew[161], ew[162] !== e2 || ew[163] !== q || ew[164] !== W || ew[165] !== Q ? (Z = (0, t.jsxs)(e2, {
        ...q,
        children: [W, Q]
      }), ew[162] = e2, ew[163] = q, ew[164] = W, ew[165] = Q, ew[166] = Z) : Z = ew[166], ew[167] !== B || ew[168] !== D || ew[169] !== z || ew[170] !== U || ew[171] !== G || ew[172] !== Z ? (J = (0, t.jsx)("div", {
        className: "flex w-full flex-col items-end",
        onClickCapture: B,
        onKeyDownCapture: D,
        onPointerCancelCapture: z,
        onPointerDownCapture: U,
        onPointerUpCapture: G,
        children: Z
      }), ew[167] = B, ew[168] = D, ew[169] = z, ew[170] = U, ew[171] = G, ew[172] = Z, ew[173] = J) : J = ew[173];
      let ap = J;
      ew[174] !== am || ew[175] !== ah || ew[176] !== eZ || ew[177] !== tF || ew[178] !== ai || ew[179] !== e$ || ew[180] !== at || ew[181] !== ap || ew[182] !== tB ? (X = null == ai || eZ ? ap : (0, t.jsxs)(ef.ContextMenu, {
        onOpenChange: e => {
          e && tt.current && (ta.current = !0), at(e), e && tF({
            eventName: g.HatchClickEvent.CHAT_MESSAGE_OVERFLOW_OPEN,
            actionTarget: "message_overflow_button",
            actionType: "click",
            metadata: {
              surface: "chat",
              subsurface: "message_toolbar",
              entry_point: "right_click",
              ...tB,
              message_id: e$
            }
          })
        },
        children: [(0, t.jsx)(ef.ContextMenuTrigger, {
          asChild: !0,
          touchAnchorToTriggerEdge: "end",
          disabled: !ah,
          suppressTouchSelection: !0,
          children: ap
        }), am]
      }), ew[174] = am, ew[175] = ah, ew[176] = eZ, ew[177] = tF, ew[178] = ai, ew[179] = e$, ew[180] = at, ew[181] = ap, ew[182] = tB, ew[183] = X) : X = ew[183];
      let ag = X,
        ax = e0 ? ar : null;
      return ew[184] !== tl ? (ee = null != tl && (0, t.jsxs)(t.Fragment, {
        children: [(0, t.jsx)("div", {
          className: "text-caption-2 text-text-tertiary me-4 mb-1.5 self-end",
          children: s.fbt._("About {elementTag} in {spaceName}", [s.fbt._param("elementTag", tl.elementTag.toUpperCase()), s.fbt._param("spaceName", tl.spaceName)], {
            hk: "gH8B4"
          })
        }), (0, t.jsx)("div", {
          className: "rounded-tl-22 rounded-tr-22 rounded-bl-22 rounded-br-4 mb-[-16px] max-w-[520px] self-end bg-white/85 px-4 py-2 pb-6 dark:bg-white/15",
          children: (0, t.jsx)("span", {
            className: "text-text-secondary line-clamp-1 text-[13px] leading-[20px]",
            children: tl.elementLabel
          })
        })]
      }), ew[184] = tl, ew[185] = ee) : ee = ew[185], ew[186] !== eZ || ew[187] !== eN.deliveryStatus ? (es = eZ || "failed" !== eN.deliveryStatus ? null : (0, t.jsx)(tb, {}), ew[186] = eZ, ew[187] = eN.deliveryStatus, ew[188] = es) : es = ew[188], ew[189] !== ag || ew[190] !== tK.groupClassName || ew[191] !== ax || ew[192] !== ee || ew[193] !== es ? (ej = (0, t.jsxs)("div", {
        className: tK.groupClassName,
        children: [ax, ee, ag, es]
      }), ew[189] = ag, ew[190] = tK.groupClassName, ew[191] = ax, ew[192] = ee, ew[193] = es, ew[194] = ej) : ej = ew[194], ej
    });

  function tC(e) {
    return {
      filename: e.filename,
      mimeType: e.mimeType,
      category: "image",
      path: e.path ?? void 0,
      previewUrl: e.previewUrl ?? void 0,
      media: e.media
    }
  }

  function tj(e) {
    return e.kind === e4.HATCH_PRESENTATION_KIND_IDEA
  }
  var tS = e.i(544682),
    tT = e.i(388629),
    tk = e.i(305891),
    tH = e.i(681211),
    tE = e.i(43243);
  let tw = {
    scheduled_delivery: "Scheduled task",
    timer_delivery: "Timer",
    cron_delivery: "Cron job"
  };

  function tN(e) {
    let n, l, r = (0, a.c)(16),
      {
        msg: i,
        onQuote: o,
        voiceEnabled: c,
        collapseVoiceover: u
      } = e;
    r[0] !== i || r[1] !== o || r[2] !== c ? (n = (0, t.jsx)(tS.HatchAssistantMessage, {
      msg: i,
      onQuote: o,
      voiceEnabled: c
    }), r[0] = i, r[1] = o, r[2] = c, r[3] = n) : n = r[3];
    let d = n;
    if ("user" === i.role) {
      let e;
      return r[4] !== i || r[5] !== o || r[6] !== c ? (e = (0, t.jsx)(t_, {
        msg: i,
        onQuote: o,
        voiceEnabled: c
      }), r[4] = i, r[5] = o, r[6] = c, r[7] = e) : e = r[7], e
    }
    if ("system" === i.role) {
      let e, a;
      return r[8] === Symbol.for("react.memo_cache_sentinel") ? (e = (0, t.jsx)(tp.HatchDeferredSystemMessageSkeleton, {}), r[8] = e) : e = r[8], r[9] !== i ? (a = (0, t.jsx)(tp.HatchDeferredMessageBoundary, {
        fallback: e,
        messageRole: "system",
        subtree: "system_message",
        children: (0, t.jsx)(tf.HatchSystemActivityMessageLazy, {
          msg: i
        })
      }), r[9] = i, r[10] = a) : a = r[10], a
    }
    if (r[11] !== d || r[12] !== u || r[13] !== i || r[14] !== o) {
      var h;
      let e, a = u ? (0, t.jsx)(tp.HatchDeferredMessageBoundary, {
        fallback: (0, t.jsx)(tp.HatchDeferredVoiceMessageSkeleton, {}),
        subtree: "voice_message",
        children: (0, t.jsx)(tf.HatchVoiceoverMessageLazy, {
          msg: i,
          onQuote: o
        })
      }) : i.isBackground ? (0, t.jsxs)("div", {
        children: [(0, t.jsxs)("div", {
          className: "text-text-secondary text-footnote mt-3 mb-2 flex items-center gap-1",
          children: [(0, t.jsx)(P.HatchIcon, {
            icon: ee.default,
            size: 16
          }), (0, t.jsx)("span", {
            children: s.fbt._("{label} returned at {time}", [s.fbt._param("label", null != i.backgroundJobId ? (e = i.backgroundJobId.split(/[-_]+/).join(" ")).charAt(0).toUpperCase() + e.slice(1) : null != (h = i.backgroundKind) && h in tw ? tw[h] : "Background task"), s.fbt._param("time", (() => {
              let {
                before: e,
                after: a
              } = (0, e7.splitTimeAtColon)((0, e7.formatMessageTime)(i.createdAt));
              return (0, t.jsxs)(t.Fragment, {
                children: [e, (0, t.jsx)("span", {
                  className: "animate-[hatch-cursor-blink_2s_step-end_infinite]",
                  children: ":"
                }), a]
              })
            })())], {
              hk: "3bn51B"
            })
          })]
        }), d]
      }) : d;
      l = (0, t.jsx)(tE.HatchLiveMessageConnectorSessionIdProvider, {
        children: a
      }), r[11] = d, r[12] = u, r[13] = i, r[14] = o, r[15] = l
    } else l = r[15];
    return l
  }

  function tI(e) {
    let n, l, r = (0, a.c)(13),
      {
        msg: i,
        text: o
      } = e,
      c = (0, ea.useIsPeerSidechatFromContext)();
    if (null == o) return null;
    if ("user" === i.role) {
      let e, a;
      return r[0] !== c || r[1] !== o ? (e = c ? s.fbs._("Message from their Muse: {message text}", [s.fbs._param("message text", o)], {
        hk: "4ArknC"
      }) : s.fbs._("User message: {message text}", [s.fbs._param("message text", o)], {
        hk: "UniDA"
      }), r[0] = c, r[1] = o, r[2] = e) : e = r[2], r[3] !== e ? (a = (0, t.jsx)("span", {
        "data-message-accessibility-surrogate": !0,
        "data-message-search-surrogate": !0,
        className: "sr-only whitespace-pre-wrap",
        children: e
      }), r[3] = e, r[4] = a) : a = r[4], a
    }
    if ("system" === i.role) {
      let e, a;
      return r[5] !== o ? (e = s.fbs._("System message: {message text}", [s.fbs._param("message text", o)], {
        hk: "4jatZC"
      }), r[5] = o, r[6] = e) : e = r[6], r[7] !== e ? (a = (0, t.jsx)("span", {
        "data-message-accessibility-surrogate": !0,
        "data-message-search-surrogate": !0,
        className: "sr-only whitespace-pre-wrap",
        children: e
      }), r[7] = e, r[8] = a) : a = r[8], a
    }
    return r[9] !== o ? (n = s.fbs._("Assistant message: {message text}", [s.fbs._param("message text", o)], {
      hk: "2caqZu"
    }), r[9] = o, r[10] = n) : n = r[10], r[11] !== n ? (l = (0, t.jsx)("span", {
      "data-message-accessibility-surrogate": !0,
      "data-message-search-surrogate": !0,
      className: "sr-only whitespace-pre-wrap",
      children: n
    }), r[11] = n, r[12] = l) : l = r[12], l
  }
  let tR = (0, n.memo)(function(e) {
    let l, r, i, o, u, d, h, m, f, g, x, b, _, C, j, S, T, k, H, w, N, I, R, A, M, L = (0, a.c)(74),
      {
        id: P,
        layout: O,
        layoutOverrides: V,
        pinned: F,
        onQuote: B,
        voiceEnabled: D
      } = e,
      z = void 0 === O ? e5.STANDALONE_CHAT_MESSAGE_LAYOUT : O,
      U = void 0 === D || D,
      G = (0, $.useMcBool)("5e1fb489", !1),
      q = (0, v.useChatMessage)(P),
      K = (q?.companionFullMessageIds?.length ?? 0) > 0;
    L[0] !== K || L[1] !== U ? (l = () => {
      U && K && (0, tf.preloadHatchVoiceoverMessage)()
    }, r = [K, U], L[0] = K, L[1] = U, L[2] = l, L[3] = r) : (l = L[2], r = L[3]), (0, n.useEffect)(l, r), L[4] !== G || L[5] !== q || L[6] !== U ? (i = e => null != q && (0, tk.shouldCollapseVoiceoverMessage)(q, e.messagesById, U, G), L[4] = G, L[5] = q, L[6] = U, L[7] = i) : i = L[7];
    let Y = (0, X.useHatchChatSelector)(i);
    L[8] !== F ? (o = {
      pinned: F
    }, L[8] = F, L[9] = o) : o = L[9];
    let {
      shellRef: W,
      isContentVisible: Z,
      placeholderHeight: J,
      hasBeenInView: ee
    } = (0, E.useContentVirtualization)(P, o), ea = (0, et.useIsSearchHighlighted)(P), en = (0, y.useHatchChatThreadLoggingMetadataFromContext)(), el = q?.isOptimistic === !0, es = q?.role ?? "unknown";
    L[10] !== es || L[11] !== en ? (u = {
      eventName: Q.HatchImpressionEvent.CHAT_MESSAGE_IMPRESSION,
      actionTarget: "message_bubble",
      metadata: {
        surface: "chat",
        subsurface: "message_list",
        ...en,
        message_role: es
      }
    }, L[10] = es, L[11] = en, L[12] = u) : u = L[12], L[13] === Symbol.for("react.memo_cache_sentinel") ? (d = {
      threshold: "50%"
    }, L[13] = d) : d = L[13];
    let {
      ref: er
    } = (0, c.useTrackedImpressionRef)(u, d);
    q?.role, L[14] !== q?.role || L[15] !== en ? (h = (0, tH.hatchLinkEntryPointAttrs)((0, y.hatchChatLinkEntryPointMetadata)(en, {
      entryPoint: "message",
      messageRole: q?.role ?? "unknown"
    })), L[14] = q?.role, L[15] = en, L[16] = h) : h = L[16];
    let ei = h,
      eo = (0, n.useRef)(null);
    L[17] !== W ? (m = e => {
      W(e), eo.current = e
    }, L[17] = W, L[18] = m) : m = L[18];
    let ec = m;
    if (L[19] !== ee || L[20] !== el || L[21] !== er ? (f = () => {
        if (ee && !el) {
          let e = eo.current;
          return e && er(e), () => er(null)
        }
      }, g = [ee, el, er], L[19] = ee, L[20] = el, L[21] = er, L[22] = f, L[23] = g) : (f = L[22], g = L[23]), (0, n.useEffect)(f, g), !q || !(0, e7.isChatMessageVisible)(q, U, G)) return null;
    L[24] !== q ? (x = (0, e7.hasMermaidContent)(q), L[24] = q, L[25] = x) : x = L[25];
    let eu = x;
    L[26] !== q ? (b = !0 === q.isDeleted ? s.fbs._("You deleted a message", null, {
      hk: "1qM27L"
    }) : (0, e7.getVirtualizedMessageSearchText)(q), L[26] = q, L[27] = b) : b = L[27];
    let ed = b,
      eh = (q.widgets?.length ?? 0) > 0 || (q.presentations?.length ?? 0) > 0;
    if (L[28] !== ec || L[29] !== eu || L[30] !== eh || L[31] !== ea || L[32] !== z || L[33] !== V || L[34] !== ei || L[35] !== q.id || L[36] !== q.role) {
      _ = (0, e5.applyHatchChatBubbleLayoutOverrides)(z, V), C = ec, j = (0, e8.hatchChatMessageLayoutDataAttributes)(_, q.id, q.role), S = ei, T = eu || void 0, k = eh || void 0;
      let e = ea && "hatch-search-highlight";
      L[45] !== e ? (H = (0, p.cn)("flex flex-col gap-2", e), L[45] = e, L[46] = H) : H = L[46], w = (0, e8.hatchChatMessageLayoutStyle)(_, z.spaceAfterPx), L[28] = ec, L[29] = eu, L[30] = eh, L[31] = ea, L[32] = z, L[33] = V, L[34] = ei, L[35] = q.id, L[36] = q.role, L[37] = _, L[38] = C, L[39] = j, L[40] = S, L[41] = T, L[42] = k, L[43] = H, L[44] = w
    } else _ = L[37], C = L[38], j = L[39], S = L[40], T = L[41], k = L[42], H = L[43], w = L[44];
    let em = Z ? "opacity-100" : "opacity-0";
    return L[47] !== Y || L[48] !== Z || L[49] !== q || L[50] !== B || L[51] !== J || L[52] !== U ? (N = Z ? (0, t.jsx)(tT.HatchOwningMessageProvider, {
      messageId: q.id,
      messageSeq: q.sortSeq ?? null,
      children: (0, t.jsx)(tN, {
        msg: q,
        onQuote: B,
        voiceEnabled: U,
        collapseVoiceover: Y
      })
    }) : (0, t.jsx)("div", {
      style: {
        height: J ?? 0
      }
    }), L[47] = Y, L[48] = Z, L[49] = q, L[50] = B, L[51] = J, L[52] = U, L[53] = N) : N = L[53], L[54] !== em || L[55] !== N ? (I = (0, t.jsx)("div", {
      className: em,
      children: N
    }), L[54] = em, L[55] = N, L[56] = I) : I = L[56], L[57] !== Z || L[58] !== q || L[59] !== ed ? (R = !Z && (0, t.jsx)(tI, {
      msg: q,
      text: ed
    }), L[57] = Z, L[58] = q, L[59] = ed, L[60] = R) : R = L[60], L[61] !== _ || L[62] !== I || L[63] !== R ? (A = (0, t.jsxs)(e6.HatchChatMessageLayoutProvider, {
      layout: _,
      children: [I, R]
    }), L[61] = _, L[62] = I, L[63] = R, L[64] = A) : A = L[64], L[65] !== C || L[66] !== j || L[67] !== S || L[68] !== T || L[69] !== k || L[70] !== H || L[71] !== w || L[72] !== A ? (M = (0, t.jsx)("div", {
      ref: C,
      ...j,
      ...S,
      "data-has-mermaid": T,
      "data-message-has-presentation": k,
      className: H,
      style: w,
      children: A
    }), L[65] = C, L[66] = j, L[67] = S, L[68] = T, L[69] = k, L[70] = H, L[71] = w, L[72] = A, L[73] = M) : M = L[73], M
  });
  var tA = e.i(219327),
    tM = e.i(790351),
    tL = e.i(934133),
    tP = e.i(49973);

  function tO(e) {
    let n, l, s, r, i, o, c, u, d, h = (0, a.c)(27),
      {
        messageId: m,
        layout: f
      } = e,
      g = void 0 === f ? e5.STANDALONE_CHAT_MESSAGE_LAYOUT : f,
      b = (0, v.useChatMessage)(m),
      y = b?.role ?? "unknown",
      _ = (0, x.useOptionalHatchChat)();
    h[0] !== b ? (n = null != b && (0, er.canReactToAssistantMessage)(b) ? (0, er.getAssistantReactionTargetId)(b) : null, h[0] = b, h[1] = n) : n = h[1];
    let C = n,
      j = (0, v.useMessageReactions)(C);
    h[2] !== j ? (l = j.some(er.isRenderableReactionValue), h[2] = j, h[3] = l) : l = h[3];
    let S = l;
    h[4] !== _ || h[5] !== C ? (s = e => {
      null != C && _?.toggleReaction(C, e)
    }, h[4] = _, h[5] = C, h[6] = s) : s = h[6];
    let T = s,
      k = "user" === y ? "user" : "assistant";
    h[7] !== k ? (r = (0, t.jsx)(tP.HatchChatMessageErrorBubble, {
      role: k
    }), h[7] = k, h[8] = r) : r = h[8];
    let H = r;
    h[9] !== H || h[10] !== _ || h[11] !== T || h[12] !== S || h[13] !== C || h[14] !== j ? (i = null != C && null != _ ? (0, t.jsx)(tA.HatchReactionTargetProvider, {
      targetId: C,
      reactions: j,
      onToggleReaction: T,
      children: (0, t.jsxs)("div", {
        className: (0, p.cn)("group/widget-presentation inline-flex max-w-full flex-col items-start md:flex-row md:items-center md:gap-0", S ? "touch:mb-0 mb-5 gap-6" : "gap-1"),
        children: [(0, t.jsxs)("div", {
          className: "relative max-w-full min-w-0",
          children: [(0, t.jsx)(tM.HatchMessageSurfaceContextMenu, {
            copyContent: null,
            messageId: C,
            children: H
          }), (0, t.jsx)(tA.HatchReactionTargetBadge, {})]
        }), (0, t.jsx)(tL.HatchWidgetActions, {
          copyContent: null
        })]
      })
    }) : H, h[9] = H, h[10] = _, h[11] = T, h[12] = S, h[13] = C, h[14] = j, h[15] = i) : i = h[15];
    let E = i;
    return h[16] !== g ? (o = (0, e8.hatchChatMessageLayoutStyle)(g), h[16] = g, h[17] = o) : o = h[17], h[18] !== E || h[19] !== y ? (c = (0, t.jsx)(tP.HatchChatMessageErrorAlert, {
      messageRole: y,
      children: E
    }), h[18] = E, h[19] = y, h[20] = c) : c = h[20], h[21] !== g || h[22] !== c ? (u = (0, t.jsx)(e6.HatchChatMessageLayoutProvider, {
      layout: g,
      children: c
    }), h[21] = g, h[22] = c, h[23] = u) : u = h[23], h[24] !== u || h[25] !== o ? (d = (0, t.jsx)("div", {
      "data-message-item": !0,
      style: o,
      children: u
    }), h[24] = u, h[25] = o, h[26] = d) : d = h[26], d
  }
  let tV = {
      type: "tween",
      duration: .18,
      ease: [0, 0, .58, 1]
    },
    tF = {
      type: "tween",
      duration: .18,
      ease: [0, 0, .58, 1]
    };
  var tB = e.i(160654),
    tD = e.i(763282);

  function tz(e) {
    let n, l, s, r = (0, a.c)(8),
      {
        timestamp: i,
        isFirst: o
      } = e,
      c = (0, tB.useHatchTimestampFormatOptions)();
    r[0] !== c || r[1] !== i ? (n = (0, tD.formatTimestampLabel)(i, c), r[0] = c, r[1] = i, r[2] = n) : n = r[2];
    let u = n;
    if ("" === u) return null;
    let d = o ? "pt-10 pb-4 text-center" : "py-4 text-center";
    return r[3] !== u ? (l = (0, t.jsx)("span", {
      className: "text-caption-1 text-text-secondary",
      children: u
    }), r[3] = u, r[4] = l) : l = r[4], r[5] !== d || r[6] !== l ? (s = (0, t.jsx)("div", {
      className: d,
      children: l
    }), r[5] = d, r[6] = l, r[7] = s) : s = r[7], s
  }
  let tU = (e, t) => t.content.trim().length > 0,
    tG = () => !0;
  var tq = e.i(666750);

  function tK(e) {
    let t, n = (0, a.c)(6),
      l = (0, v.useChatIsLoading)(),
      s = (0, v.useChatHistoryLoaded)(),
      r = (0, v.useChatIsCheckingPersistentCache)(),
      i = (0, v.useChatHasProvisionalCachedHistory)(),
      o = (0, tq.useHatchConnection)(),
      c = (0, eg.useEffectiveHatchChatRoute)(),
      u = c?.kind === "draft",
      d = c?.kind === "main",
      h = (0, X.useHatchChatSelector)(tY),
      m = "unavailable" === o.phase && ("browser_offline" === o.reason || "gateway_reconnect_exhausted" === o.reason || "gateway_unreachable" === o.reason || "unknown" === o.reason),
      f = s && !l,
      p = u || "unavailable" === o.phase || f || i,
      g = 0 === e.length && (u || m || f),
      x = 0 === e.length && !(d && null == h) && !p && !r;
    return n[0] !== p || n[1] !== r || n[2] !== l || n[3] !== g || n[4] !== x ? (t = {
      canRevealInitialTranscript: p,
      isCheckingPersistentCache: r,
      isLoading: l,
      shouldShowEmptyChatLoadingPlaceholder: x,
      shouldShowResolvedEmptyChat: g
    }, n[0] = p, n[1] = r, n[2] = l, n[3] = g, n[4] = x, n[5] = t) : t = n[5], t
  }

  function tY(e) {
    return e.mainHistorySourceKey
  }
  var tW = e.i(95351),
    t$ = e.i(805564);

  function tQ(e) {
    let l, s, r, i, c, u, d, h = (0, a.c)(13),
      {
        children: m
      } = e,
      {
        interactionID: f
      } = (0, t$.useHatchSendUserMessageTracing)(),
      p = (0, v.useChatIsStreaming)(),
      [g, x] = (0, n.useState)(!1),
      {
        onEvent: b
      } = (0, eR.useHatchRpc)();
    h[0] !== b ? (l = () => {
      let e = b("delta.message_done", e => {
        "subagent" !== (e.stream_lane ?? e.transcript_surface) && x(!1)
      });
      return () => {
        e()
      }
    }, s = [b, x], h[0] = b, h[1] = l, h[2] = s) : (l = h[1], s = h[2]), (0, n.useEffect)(l, s), h[3] !== p ? (r = () => {
      p && x(!0);
      let e = window.setTimeout(() => {
        x(!1)
      }, 6e5);
      return () => {
        window.clearTimeout(e)
      }
    }, i = [x, p], h[3] = p, h[4] = r, h[5] = i) : (r = h[4], i = h[5]), (0, n.useEffect)(r, i);
    let y = f ?? null;
    return h[6] === Symbol.for("react.memo_cache_sentinel") ? (c = {
      className: "flex min-h-full grow flex-col"
    }, h[6] = c) : c = h[6], h[7] !== g ? (u = (0, t.jsx)(o.HeroHoldTrigger, {
      hold: g,
      description: "agent_streaming_response"
    }), h[7] = g, h[8] = u) : u = h[8], h[9] !== m || h[10] !== y || h[11] !== u ? (d = (0, t.jsxs)(tW.HeroInteraction, {
      interactionDesc: "ectoHatchAgentMessageRender",
      interactionUUID: y,
      htmlAttributes: c,
      children: [u, m]
    }), h[9] = m, h[10] = y, h[11] = u, h[12] = d) : d = h[12], d
  }
  var tZ = e.i(438451),
    tJ = e.i(543912),
    tX = e.i(19152),
    t0 = e.i(30511),
    t1 = e.i(535678);

  function t2(e) {
    let n, l = (0, a.c)(2),
      {
        children: s
      } = e;
    return l[0] !== s ? (n = (0, t.jsx)(tX.HatchChatColumn, {
      className: "pt-4",
      "data-testid": "chat-pagination-spinner-slot",
      children: (0, t.jsx)("div", {
        className: "flex h-11 items-center justify-center",
        children: s
      })
    }), l[0] = s, l[1] = n) : n = l[1], n
  }

  function t3(e) {
    let n, l, s = (0, a.c)(5),
      {
        visible: r
      } = e,
      i = void 0 === r || r,
      o = !i || void 0;
    if (s[0] !== i ? (n = i && (0, t.jsx)(G.Spinner, {
        size: 16
      }), s[0] = i, s[1] = n) : n = s[1], s[2] !== o || s[3] !== n) {
      let e = (0, t.jsx)("div", {
        className: "size-4",
        "aria-hidden": o,
        children: n
      });
      l = (0, t.jsx)(t2, {
        children: e
      }), s[2] = o, s[3] = n, s[4] = l
    } else l = s[4];
    return l
  }

  function t4(e) {
    let n, l, r, i, o, d, h, m = (0, a.c)(13),
      {
        onRetry: f
      } = e;
    m[0] === Symbol.for("react.memo_cache_sentinel") ? (n = {
      eventName: Q.HatchImpressionEvent.ERROR_CONTENT_IMPRESSION,
      actionTarget: "cached_history_refresh_error",
      metadata: {
        surface: "chat",
        subsurface: "cached_history_refresh"
      }
    }, m[0] = n) : n = m[0];
    let {
      ref: p
    } = (0, c.useTrackedImpressionRef)(n);
    m[1] === Symbol.for("react.memo_cache_sentinel") ? (l = {
      eventName: g.HatchClickEvent.ERROR_TRY_AGAIN_CLICK,
      actionTarget: "cached_history_refresh_retry",
      actionType: "click",
      metadata: {
        surface: "chat",
        subsurface: "cached_history_refresh"
      }
    }, m[1] = l) : l = m[1];
    let {
      ref: x,
      onClick: b
    } = (0, c.useTrackedClickRef)(l);
    return m[2] === Symbol.for("react.memo_cache_sentinel") ? (r = (0, t.jsx)(q.Text, {
      as: "span",
      variant: "footnote",
      children: s.fbs._("Something went wrong", null, {
        hk: "1H6aWS"
      })
    }), m[2] = r) : r = m[2], m[3] === Symbol.for("react.memo_cache_sentinel") ? (i = s.fbs._("Try again", null, {
      hk: "3G8Mqr"
    }), m[3] = i) : i = m[3], m[4] !== b || m[5] !== f ? (o = () => {
      b(), f()
    }, m[4] = b, m[5] = f, m[6] = o) : o = m[6], m[7] !== x || m[8] !== o ? (d = (0, t.jsx)(u.Button, {
      ref: x,
      variant: "primary",
      size: "32",
      label: i,
      onClick: o
    }), m[7] = x, m[8] = o, m[9] = d) : d = m[9], m[10] !== p || m[11] !== d ? (h = (0, t.jsx)(t2, {
      children: (0, t.jsxs)("div", {
        ref: p,
        role: "alert",
        className: "flex h-8 items-center justify-center gap-2",
        children: [r, d]
      })
    }), m[10] = p, m[11] = d, m[12] = h) : h = m[12], h
  }
  let t5 = new WeakMap;

  function t8(e, t, a) {
    return null != e && (0, e7.isChatMessageVisible)(e, t, a)
  }

  function t6(e, t) {
    return e.length === t.length && e.every((e, a) => {
      let n = t[a];
      return null != n && e.id === n.id && e.role === n.role && e.createdAt === n.createdAt && e.isReply === n.isReply && e.hasReaction === n.hasReaction && e.isVisible === n.isVisible && e.isGroupable === n.isGroupable && e.isolatesAdjacentMessages === n.isolatesAdjacentMessages && e.senderKey === n.senderKey
    })
  }

  function t7() {
    let e, n = (0, a.c)(2),
      l = (0, tJ.useHatchVoiceEnabled)();
    return n[0] !== l ? (e = (0, t.jsx)(tB.HatchTimestampProvider, {
      children: (0, t.jsx)(tQ, {
        children: (0, t.jsx)(t9, {
          voiceEnabled: l
        })
      })
    }), n[0] = l, n[1] = e) : e = n[1], e
  }

  function t9(e) {
    let n, l = (0, a.c)(4),
      {
        voiceEnabled: s
      } = e,
      r = (0, v.useChatMessageIds)(),
      i = function() {
        let e, t, n = (0, a.c)(6);
        void 0 !== n[0] ? (e = {}, n[0] = void 0, n[1] = e) : e = n[1];
        let {
          hasVisibleContent: l,
          isVisible: s
        } = e, r = void 0 === l ? tU : l, i = void 0 === s ? tG : s, o = (0, v.useChatExpectingBotResponseAnchorIndex)();
        return n[2] !== o || n[3] !== r || n[4] !== i ? (t = e => {
          let t = e.chat,
            a = -1,
            n = null;
          for (let e = t.messageIds.length - 1; e >= 0; e -= 1) {
            let l = t.messagesById[t.messageIds[e]];
            if (l?.role !== "user") continue;
            a = e;
            let s = Date.parse(l.clientSentAt ?? l.createdAt);
            n = Number.isFinite(s) ? s : null;
            break
          }
          let l = a >= (null == o ? 0 : Math.max(0, o - 1)) ? 0 : o ?? 0;
          for (let e = t.messageIds.length - 1; e >= l; e -= 1) {
            let l = t.messageIds[e];
            if (!i(l)) continue;
            let s = t.messagesById[l],
              o = s?.analytics?.clientLastTokenMs,
              c = a < 0 || e > a || null != n && null != o && o >= n;
            if (s?.role === "assistant" && !0 === s.isTextStreaming && !(0, e7.isHiddenNoopToolMessage)(s) && !0 !== s.isToolTranscript && r(l, s) && c) return !0
          }
          let s = o ?? 0;
          for (let e = t.messageIds.length - 1; e >= s; e -= 1) {
            let a = t.messageIds[e];
            if (!i(a)) continue;
            let n = t.messagesById[a];
            if (null != n) {
              if ("user" === n.role) break;
              if (!("assistant" !== n.role || (0, e7.isHiddenNoopToolMessage)(n)) && !0 !== n.isToolTranscript && r(a, n)) return !0
            }
          }
          return !1
        }, n[2] = o, n[3] = r, n[4] = i, n[5] = t) : t = n[5], (0, X.useHatchSelector)(t)
      }();
    return l[0] !== i || l[1] !== r || l[2] !== s ? (n = (0, t.jsx)(at, {
      hasAssistantTextInCurrentRun: i,
      messageIds: r,
      voiceEnabled: s
    }), l[0] = i, l[1] = r, l[2] = s, l[3] = n) : n = l[3], n
  }

  function ae() {
    let e, n = (0, a.c)(1);
    return n[0] === Symbol.for("react.memo_cache_sentinel") ? (e = (0, t.jsx)(K.LoadingState, {
      name: "chat_history",
      className: "flex min-h-full items-center justify-center py-16",
      children: (0, t.jsx)("div", {
        className: "text-text-secondary flex flex-col items-center gap-3",
        "data-testid": "chat-empty-loading",
        children: (0, t.jsx)(G.Spinner, {
          size: 20
        })
      })
    }), n[0] = e) : e = n[0], e
  }

  function at({
    hasAssistantTextInCurrentRun: e,
    messageIds: l,
    voiceEnabled: r
  }) {
    let o = (0, $.useMcBool)("5e1fb489", !1);
    if (window.__hatchForceFeedError) throw Error("Forced render error for chat feed (staging debug)");
    let {
      messageListRef: c,
      topSentinelRef: u,
      bottomSentinelRef: d,
      animateThreadPosition: h,
      isMobile: m,
      onQuote: f
    } = (0, ep.useHatchChatFeedViewportContext)(), g = (0, t0.useStoppableBrowserTaskCandidate)()?.messageId ?? null, b = (0, x.useOptionalHatchChat)()?.recoverFromPersistentCacheRenderError, {
      activeHistoryError: y,
      retryActiveHistory: _
    } = (0, x.useHatchChatReadiness)(), C = (0, n.useCallback)(() => {
      b?.()
    }, [b]), j = (0, z.useReducedMotion)(), {
      timeZone: S
    } = (0, tB.useHatchTimestampFormatOptions)(), T = (0, X.useHatchChatSelector)(e => l.map(t => {
      let a = e.messagesById[t];
      return null != a && (0, e7.isChatMessageEligibleForTimestamp)(a, r, o) ? a.createdAt : ""
    }), U.shallow), k = (0, X.useHatchChatSelector)(e => l.map(t => e.messagesById[t]?.clientSentAt ?? t), U.shallow), H = (0, X.useHatchChatSelector)(e => {
      let t = l.at(-1);
      return null == t ? null : e.messagesById[t]?.role ?? null
    }), w = (0, v.useChatHasMore)(), N = (0, v.useChatIsLoadingOlder)(), I = (0, X.useHatchChatSelector)(e => l.some(t => {
      let a = e.messagesById[t];
      return a?.role === "user" && null != a.clientSentAt
    })), {
      canRevealInitialTranscript: R,
      shouldShowEmptyChatLoadingPlaceholder: A
    } = tK(l), M = (0, eg.useEffectiveHatchChatRoute)(), L = (0, tZ.getHatchChatRouteKey)(M), [P, O] = (0, n.useState)(null), V = null == L || P === L;
    (0, n.useEffect)(() => {
      R && null != L && O(L)
    }, [L, R]);
    let F = (0, J.useIsAgentBusyForChatRoute)(M),
      B = (0, v.useChatIsExpectingBotResponse)(),
      D = (0, J.useHasBlockingPendingUserConfirmationForChatRoute)(M),
      G = (0, v.useChatIsLoadingNewer)(),
      q = (0, v.useChatIsRefreshingCachedHistory)(),
      Q = (0, X.useHatchChatSelector)(e => l.some(t => t8(e.messagesById[t], r, o))),
      Z = q && !Q,
      ee = function(e) {
        let t, l, s = (0, a.c)(3),
          [r, i] = (0, n.useState)(!1);
        return s[0] !== e ? (t = () => {
          if (!e) return void i(!1);
          let t = window.setTimeout(() => i(!0), 500);
          return () => window.clearTimeout(t)
        }, l = [e], s[0] = e, s[1] = t, s[2] = l) : (t = s[1], l = s[2]), (0, n.useEffect)(t, l), e && r
      }(Z),
      et = (0, v.useChatHasProvisionalCachedHistory)();
    (0, n.useEffect)(() => {
      et && (0, t1.recordInitialLoadInitialContentSettled)()
    }, [et]);
    let ea = et && null != y,
      en = (0, v.useChatHasMoreNewer)(),
      el = (0, X.useHatchSelector)(e => null != e.chat.sxs && null != e.chat.messagesById[e.chat.sxs.assistantMessageId]),
      es = h && !j && V && l.length > 0,
      ei = j || V || et || I || 0 === l.length,
      {
        deferMessagesAfterKey: eo,
        shouldShowTypingIndicator: ec
      } = function(e) {
        let t, l, s, r, i, o = (0, a.c)(14),
          {
            shouldAnimate: c,
            shouldShow: u,
            tailMessageKey: d,
            tailMessageRole: h
          } = e,
          [m, f] = (0, n.useState)(d),
          [p, g] = (0, n.useState)(null),
          [x, b] = (0, n.useState)(u),
          v = c && m !== d && "user" === h ? d : p;
        o[0] !== p || o[1] !== m || o[2] !== c || o[3] !== u || o[4] !== d || o[5] !== h ? (t = () => {
          let e = m !== d;
          if (f(d), !c) {
            g(null), b(u);
            return
          }
          if (e && "user" === h && null != d) {
            g(d), b(!1);
            return
          }
          u ? null == p && b(!0) : b(!1)
        }, l = [p, m, c, u, d, h], o[0] = p, o[1] = m, o[2] = c, o[3] = u, o[4] = d, o[5] = h, o[6] = t, o[7] = l) : (t = o[6], l = o[7]), (0, n.useLayoutEffect)(t, l), o[8] !== p ? (s = () => {
          if (null == p) return;
          let e = window.setTimeout(() => {
            g(null), b(!0)
          }, 180);
          return () => window.clearTimeout(e)
        }, r = [p], o[8] = p, o[9] = s, o[10] = r) : (s = o[9], r = o[10]), (0, n.useEffect)(s, r);
        let y = c ? v : null,
          _ = u && null == v && x;
        return o[11] !== y || o[12] !== _ ? (i = {
          deferMessagesAfterKey: y,
          shouldShowTypingIndicator: _
        }, o[11] = y, o[12] = _, o[13] = i) : i = o[13], i
      }({
        shouldAnimate: es,
        shouldShow: (F || B) && !e && !D && !el,
        tailMessageKey: k.at(-1) ?? null,
        tailMessageRole: H
      }),
      eu = null == eo ? -1 : k.lastIndexOf(eo),
      ed = -1 === eu ? l.length : eu + 1,
      eh = (0, n.useMemo)(() => l.slice(0, ed), [l, ed]),
      em = (0, n.useMemo)(() => k.slice(0, ed), [k, ed]),
      ef = (0, n.useMemo)(() => new Map((0, tD.buildTimestampMarkers)(eh.map((e, t) => ({
        id: e,
        createdAt: T[t] ?? ""
      })), {
        timeZone: S
      }).map(e => [e.beforeMessageId, e])), [eh, T, S]),
      ex = `${em.at(-1)??""}:${ec?"typing":"idle"}`,
      eb = (0, X.useHatchChatSelector)(e => eh.map(t => {
        let a = e.messagesById[t],
          n = null != a && (0, er.collectReactionTargetIds)(a).some(t => e.reactions[t]?.some(er.isRenderableReactionValue));
        if (null == a) return {
          id: t,
          role: "system",
          createdAt: "",
          isReply: !1,
          hasReaction: n,
          isVisible: !1
        };
        let l = t5.get(a);
        if (l?.id === t && l.hasReaction === n && l.voiceEnabled === r && l.isEmployee === o) return l.input;
        let s = {
          id: t,
          role: a.role,
          createdAt: a.createdAt,
          isReply: null != a.replyToMessageId || null != a.replyToTarget,
          hasReaction: n,
          isVisible: t8(a, r, o),
          isGroupable: (0, e7.isChatMessageEligibleForBubbleGrouping)(a, r, o),
          isolatesAdjacentMessages: !0 !== a.isDeleted && a.widgets?.some(e => e.kind === e4.HATCH_PRESENTATION_KIND_LOCAL_MAP || e.kind === e4.HATCH_PRESENTATION_KIND_MARKETPLACE_MAP) === !0,
          ...a.peerAuthor?.senderId != null ? {
            senderKey: `${a.peerAuthor.kind}:${a.peerAuthor.senderId}`
          } : {}
        };
        return t5.set(a, {
          id: t,
          hasReaction: n,
          voiceEnabled: r,
          isEmployee: o,
          input: s
        }), s
      }), t6),
      ev = (0, n.useRef)(new Map),
      ey = (0, n.useMemo)(() => {
        let e = (0, e5.buildHatchChatMessageLayouts)(eb.map(e => ({
          ...e,
          hasTimestampBefore: ef.has(e.id)
        })), ev.current, m ? e5.HATCH_CHAT_MOBILE_DEFAULT_SPACE_PX : void 0);
        return ev.current = e, e
      }, [m, eb, ef]),
      e_ = (0, n.useMemo)(() => eh.map((e, a) => {
        var l, s;
        let i, o = {
          id: i = eh[a],
          index: a,
          prevId: a > 0 ? eh[a - 1] : null,
          layout: ey.get(i) ?? e5.STANDALONE_CHAT_MESSAGE_LAYOUT
        };
        return (0, t.jsxs)(n.Fragment, {
          children: [(l = ef.get(o.id), s = ef.keys().next().value === o.id, null == l ? null : (0, t.jsx)(tz, {
            timestamp: l.timestamp,
            isFirst: s
          }, l.key)), (0, t.jsx)(W.EctoErrorBoundary, {
            surface: "hatch.chat.message",
            onError: C,
            fallback: ({
              error: e
            }) => (0, t.jsx)(tO, {
              error: e,
              messageId: o.id,
              layout: o.layout
            }),
            children: (0, t.jsx)(tR, {
              id: o.id,
              layout: o.layout,
              prevId: o.prevId,
              pinned: o.index >= eh.length - E.PINNED_TAIL_COUNT || o.id === g,
              onQuote: f,
              voiceEnabled: r
            })
          })]
        }, o.id)
      }), [g, C, ey, f, ef, eh, r]);
    return (0, t.jsx)(t.Fragment, {
      children: (0, t.jsxs)("div", {
        className: (0, p.cn)("@container/chat-feed flex min-h-full grow flex-col-reverse pb-8", m ? "pt-8" : "pt-18"),
        children: [q && (0, t.jsx)(K.LoadingState, {
          name: "chat_history_refresh",
          "aria-hidden": "true",
          className: "h-0 overflow-hidden",
          children: null
        }), (0, t.jsxs)(i.motion.div, {
          ref: c,
          initial: !1,
          animate: {
            opacity: +!!ei
          },
          layout: !!es && "position",
          layoutDependency: ex,
          transition: {
            layout: tV,
            opacity: j ? {
              duration: 0
            } : tF
          },
          "data-initial-history-motion": V ? "complete" : "pending",
          "data-thread-position-motion": es ? "enabled" : "disabled",
          role: "log",
          "aria-live": "polite",
          "aria-label": s.fbs._("Chat messages", null, {
            hk: "2Aj75Q"
          }),
          "data-hatch-chat-column": !0,
          className: (0, p.cn)(tX.HATCH_CHAT_COLUMN_CLASS_NAME, "@container flex flex-col px-[var(--hatch-chat-thread-inline-padding,1.5rem)]", A && "min-h-full"),
          children: [A && (0, t.jsx)(ae, {}), e_, ec && (0, t.jsx)("div", {
            className: "mt-4",
            "data-message-item": !0,
            "data-testid": "hatch-chat-typing-indicator",
            role: "status",
            "aria-label": s.fbs._("Assistant is typing", null, {
              hk: "2W1C22"
            }),
            children: (0, t.jsx)("div", {
              className: "flex justify-start",
              children: (0, t.jsx)("div", {
                className: `${e7.TYPING_BUBBLE_CLASS} w-fit`,
                children: (0, t.jsx)(Y.default, {
                  color: "bg-text-tertiary",
                  colorAlt: "bg-text-tertiary/25"
                })
              })
            })
          }), en && (0, t.jsx)("div", {
            ref: d,
            className: "h-px"
          }), (G || Z || ea) && (ea ? (0, t.jsx)(t4, {
            onRetry: _
          }) : (0, t.jsx)(t3, {
            visible: G || ee
          }))]
        }), N && (0, t.jsx)(t3, {}), w && (0, t.jsx)("div", {
          ref: u,
          className: "h-px"
        })]
      })
    })
  }

  function aa() {
    let e, n, l, s, r = (0, a.c)(9),
      {
        messageListRef: i,
        isMobile: o
      } = (0, ep.useHatchChatFeedViewportContext)(),
      c = (0, v.useChatMessageIds)(),
      {
        isCheckingPersistentCache: u,
        shouldShowResolvedEmptyChat: d
      } = tK(c);
    if ("feed" == (u || d || c.length > 0 ? "feed" : "full_skeleton")) {
      let e;
      return r[0] === Symbol.for("react.memo_cache_sentinel") ? (e = (0, t.jsx)(t7, {}), r[0] = e) : e = r[0], e
    }
    let h = o ? "pt-8" : "pt-18";
    return r[1] !== h ? (e = (0, p.cn)("flex min-h-full grow flex-col-reverse pb-8", h), r[1] = h, r[2] = e) : e = r[2], r[3] === Symbol.for("react.memo_cache_sentinel") ? (n = (0, t.jsx)(Z.HatchChatFeedSkeleton, {
      withHorizontalPadding: !1
    }), r[3] = n) : n = r[3], r[4] !== i ? (l = (0, t.jsx)(tX.HatchChatColumn, {
      ref: i,
      className: "min-h-full px-[var(--hatch-chat-thread-inline-padding,1.5rem)]",
      children: n
    }), r[4] = i, r[5] = l) : l = r[5], r[6] !== e || r[7] !== l ? (s = (0, t.jsx)(K.LoadingState, {
      name: "chat_history",
      className: e,
      children: l
    }), r[6] = e, r[7] = l, r[8] = s) : s = r[8], s
  }
  var an = e.i(180110),
    al = e.i(770256),
    as = e.i(590328);

  function ar(e) {
    let n, l, r, i, o, d, h, m, f, p, x = (0, a.c)(16),
      {
        onReload: b
      } = e;
    x[0] === Symbol.for("react.memo_cache_sentinel") ? (n = {
      eventName: Q.HatchImpressionEvent.HATCH_CHAT_FEED_UNAVAILABLE_IMPRESSION,
      actionTarget: "HatchChatFeedUnavailableFallback",
      metadata: {
        surface: "chat",
        subsurface: "feed_unavailable"
      }
    }, l = {
      threshold: "50%"
    }, x[0] = n, x[1] = l) : (n = x[0], l = x[1]);
    let {
      ref: v
    } = (0, c.useTrackedImpressionRef)(n, l);
    x[2] === Symbol.for("react.memo_cache_sentinel") ? (r = {
      eventName: g.HatchClickEvent.HATCH_CHAT_FEED_RELOAD_CLICK,
      actionTarget: "HatchChatFeedUnavailableFallbackReload",
      actionType: "click",
      metadata: {
        surface: "chat",
        subsurface: "feed_unavailable"
      }
    }, x[2] = r) : r = x[2];
    let {
      ref: y,
      onClick: _
    } = (0, c.useTrackedClickRef)(r);
    return x[3] === Symbol.for("react.memo_cache_sentinel") ? (i = (0, t.jsx)(P.HatchIcon, {
      icon: al.default,
      size: 48,
      className: "text-text-destructive"
    }), x[3] = i) : i = x[3], x[4] === Symbol.for("react.memo_cache_sentinel") ? (o = (0, t.jsx)(q.Text, {
      as: "h2",
      variant: "title-3-emphasized",
      children: s.fbs._("Chat unavailable", null, {
        hk: "2UzJRu"
      })
    }), x[4] = o) : o = x[4], x[5] === Symbol.for("react.memo_cache_sentinel") ? (d = (0, t.jsx)(q.Text, {
      variant: "body",
      color: "primary",
      children: s.fbs._("Your messages couldn’t be displayed. The composer still works, but you’ll need to reload this tab to see the conversation again.", null, {
        hk: "2LmKVV"
      })
    }), x[5] = d) : d = x[5], x[6] === Symbol.for("react.memo_cache_sentinel") ? (h = s.fbs._("Reload", null, {
      hk: "2ivS1B"
    }), x[6] = h) : h = x[6], x[7] !== _ || x[8] !== b ? (m = () => {
      _(), b()
    }, x[7] = _, x[8] = b, x[9] = m) : m = x[9], x[10] !== y || x[11] !== m ? (f = (0, t.jsxs)(as.Flexbox, {
      direction: "column",
      gap: 3,
      alignItems: "center",
      className: "w-full max-w-md text-center",
      children: [i, o, d, (0, t.jsx)(u.Button, {
        ref: y,
        variant: "primary",
        size: "36",
        leadingIcon: an.default,
        label: h,
        onClick: m
      })]
    }), x[10] = y, x[11] = m, x[12] = f) : f = x[12], x[13] !== v || x[14] !== f ? (p = (0, t.jsx)("div", {
      ref: v,
      role: "alert",
      className: "flex h-full w-full items-center justify-center p-4 pb-24 md:p-6 md:pb-6",
      children: f
    }), x[13] = v, x[14] = f, x[15] = p) : p = x[15], p
  }

  function ai(e) {
    let n, l, s, o, c, u = (0, a.c)(16),
      {
        open: d,
        children: h,
        onHeightChange: m,
        onExitComplete: p
      } = e,
      g = !0 === (0, z.useReducedMotion)();
    u[0] !== m ? (n = e => {
      m(e.height)
    }, u[0] = m, u[1] = n) : n = u[1];
    let x = (0, f.useResizeObserver)(n);
    u[2] !== x || u[3] !== m ? (l = e => {
      x(e ?? void 0), e && m(e.offsetHeight)
    }, u[2] = x, u[3] = m, u[4] = l) : l = u[4];
    let b = l;
    return u[5] !== p || u[6] !== m ? (s = () => {
      m(0), p?.()
    }, u[5] = p, u[6] = m, u[7] = s) : s = u[7], u[8] !== h || u[9] !== b || u[10] !== d || u[11] !== g ? (o = d && (0, t.jsx)(i.motion.div, {
      className: "absolute inset-x-0 bottom-0 z-30 px-4 pb-4",
      style: {
        transformOrigin: "bottom center"
      },
      initial: g ? {
        opacity: 0
      } : {
        opacity: 0,
        scale: .96,
        y: 12
      },
      animate: g ? {
        opacity: 1
      } : {
        opacity: 1,
        scale: 1,
        y: 0
      },
      exit: g ? {
        opacity: 0
      } : {
        opacity: 0,
        scale: .98,
        y: 8
      },
      transition: {
        duration: g ? .12 : .18,
        ease: [.22, 1, .36, 1]
      },
      children: (0, t.jsx)("div", {
        ref: b,
        className: "mx-auto max-w-[calc(48rem+32px)]",
        children: h
      })
    }), u[8] = h, u[9] = b, u[10] = d, u[11] = g, u[12] = o) : o = u[12], u[13] !== s || u[14] !== o ? (c = (0, t.jsx)(r.AnimatePresence, {
      onExitComplete: s,
      children: o
    }), u[13] = s, u[14] = o, u[15] = c) : c = u[15], c
  }
  var ao = e.i(713590),
    ac = e.i(440802);

  function au(e) {
    let n, l, s, r, i, o = (0, a.c)(10);
    o[0] !== e ? ({
      size: l,
      ...n
    } = e, o[0] = e, o[1] = n, o[2] = l) : (n = o[1], l = o[2]);
    let c = void 0 === l ? 32 : l;
    return o[3] !== n.title ? (s = null != n.title && (0, t.jsx)("title", {
      children: n.title
    }), o[3] = n.title, o[4] = s) : s = o[4], o[5] === Symbol.for("react.memo_cache_sentinel") ? (r = (0, t.jsx)("path", {
      d: "M18.381 24.62a.877.877 0 0 0 1.239-1.239l-7.381-7.38 7.38-7.382a.877.877 0 0 0-1.238-1.238l-8 8a.876.876 0 0 0 0 1.238l8 8z",
      fill: "currentColor"
    }), o[5] = r) : r = o[5], o[6] !== n || o[7] !== c || o[8] !== s ? (i = (0, t.jsxs)("svg", {
      viewBox: "0 0 32 32",
      fill: "none",
      width: c,
      height: c,
      ...n,
      children: [s, r]
    }), o[6] = n, o[7] = c, o[8] = s, o[9] = i) : i = o[9], i
  }
  au._isSVG = !0, au._viewBox = 32;
  var ad = e.i(571613);
  let ah = {
      borderRadius: 32,
      boxShadow: "0 24px 64px rgba(15, 23, 42, 0.18), 0 10px 24px rgba(15, 23, 42, 0.10)",
      transformOrigin: "top center"
    },
    am = (0, n.createContext)(null),
    af = 0;

  function ap(e, t) {
    return {
      id: String(af++),
      routeId: e,
      params: t
    }
  }

  function ag(e) {
    return e.length <= 1 ? e : [e[0]]
  }

  function ax(e) {
    return e.length <= 1 ? e : e.slice(0, -1)
  }

  function ab(e) {
    let n, l, r, i, o, c, u = (0, a.c)(15),
      {
        title: d,
        onBack: h,
        onClose: m,
        backRef: f,
        closeRef: p
      } = e;
    return u[0] !== f || u[1] !== h ? (n = null != h && (0, t.jsx)(ac.IconButton, {
      ref: f,
      icon: au,
      label: s.fbs._("Back", null, {
        hk: "2Rioo0"
      }),
      variant: "borderless",
      size: "36",
      onClick: h
    }), u[0] = f, u[1] = h, u[2] = n) : n = u[2], u[3] !== d ? (l = (0, t.jsx)("span", {
      className: "text-title-3-emphasized",
      children: d
    }), u[3] = d, u[4] = l) : l = u[4], u[5] !== n || u[6] !== l ? (r = (0, t.jsxs)("div", {
      className: "flex items-center gap-1",
      children: [n, l]
    }), u[5] = n, u[6] = l, u[7] = r) : r = u[7], u[8] === Symbol.for("react.memo_cache_sentinel") ? (i = s.fbs._("Close", null, {
      hk: "4idqPA"
    }), u[8] = i) : i = u[8], u[9] !== p || u[10] !== m ? (o = (0, t.jsx)(ac.IconButton, {
      ref: p,
      icon: ad.default,
      label: i,
      variant: "borderless",
      size: "36",
      onClick: m
    }), u[9] = p, u[10] = m, u[11] = o) : o = u[11], u[12] !== r || u[13] !== o ? (c = (0, t.jsxs)("div", {
      className: "flex shrink-0 items-center justify-between px-5 pt-4 pb-2",
      children: [r, o]
    }), u[12] = r, u[13] = o, u[14] = c) : c = u[14], c
  }
  let av = {
      type: "spring",
      duration: .32,
      bounce: .05
    },
    ay = [{
      scale: 1,
      y: 0,
      opacity: 1
    }, {
      scale: .94,
      y: -21,
      opacity: .6
    }, {
      scale: .88,
      y: -37,
      opacity: .3
    }],
    a_ = ay.length;

  function aC(e) {
    let l, s, o, c = (0, a.c)(13),
      {
        initialRouteId: u,
        onClose: d,
        renderRoute: h
      } = e,
      {
        stack: m,
        actions: f
      } = function(e) {
        let t, l, s, r, i, o, c = (0, a.c)(11);
        c[0] !== e ? (t = () => [ap(e)], c[0] = e, c[1] = t) : t = c[1];
        let [u, d] = (0, n.useState)(t);
        c[2] === Symbol.for("react.memo_cache_sentinel") ? (l = (e, t) => {
          d(a => a.length >= 10 ? a : [...a, ap(e, t)])
        }, c[2] = l) : l = c[2];
        let h = l;
        c[3] === Symbol.for("react.memo_cache_sentinel") ? (s = () => {
          d(ax)
        }, c[3] = s) : s = c[3];
        let m = s;
        c[4] === Symbol.for("react.memo_cache_sentinel") ? (r = () => {
          d(ag)
        }, c[4] = r) : r = c[4];
        let f = r,
          p = u.length > 1;
        c[5] !== u.length || c[6] !== p ? (i = {
          push: h,
          pop: m,
          popToRoot: f,
          canGoBack: p,
          stackDepth: u.length
        }, c[5] = u.length, c[6] = p, c[7] = i) : i = c[7];
        let g = i;
        return c[8] !== g || c[9] !== u ? (o = {
          stack: u,
          actions: g
        }, c[8] = g, c[9] = u, c[10] = o) : o = c[10], o
      }(u);
    if (c[0] !== d || c[1] !== h || c[2] !== m) {
      let e;
      c[4] !== d || c[5] !== h || c[6] !== m.length ? (e = (e, a) => {
        let n = m.length - 1 - a,
          l = 0 === n,
          s = ay[Math.min(n, a_ - 1)];
        return (0, t.jsx)(i.motion.div, {
          initial: 0 !== a && {
            y: "100%",
            opacity: .8,
            scale: 1
          },
          animate: n < a_ ? {
            y: s.y,
            scale: s.scale,
            opacity: s.opacity
          } : {
            opacity: 0,
            scale: .88,
            y: -28
          },
          exit: {
            y: "100%",
            opacity: 0,
            scale: 1
          },
          transition: av,
          className: "bg-fill-primary overflow-hidden",
          style: {
            ...ah,
            position: l ? "relative" : "absolute",
            top: l ? void 0 : 0,
            left: l ? void 0 : 0,
            right: l ? void 0 : 0,
            pointerEvents: l ? "auto" : "none",
            zIndex: a
          },
          children: h(e, d)
        }, e.id)
      }, c[4] = d, c[5] = h, c[6] = m.length, c[7] = e) : e = c[7], l = m.map(e), c[0] = d, c[1] = h, c[2] = m, c[3] = l
    } else l = c[3];
    return c[8] !== l ? (s = (0, t.jsx)("div", {
      className: "relative overflow-visible",
      children: (0, t.jsx)(r.AnimatePresence, {
        mode: "popLayout",
        children: l
      })
    }), c[8] = l, c[9] = s) : s = c[9], c[10] !== f || c[11] !== s ? (o = (0, t.jsx)(am.Provider, {
      value: f,
      children: s
    }), c[10] = f, c[11] = s, c[12] = o) : o = c[12], o
  }
  var aj = e.i(424509),
    aS = e.i(674533),
    aT = e.i(246889),
    ak = e.i(269730);
  let aH = (0, eI.createClientLogger)("HatchVoiceFullListSheet");

  function aE(e) {
    let n, l, s, r, i, o, u, d, h, m, f, x, b, v, y, _, C, j, S = (0, a.c)(60),
      {
        voice: T,
        isSelected: k,
        isPreviewLoading: H,
        isPreviewPlaying: E,
        loggingMetadata: w,
        activeVoiceId: N,
        hasActivePreview: I,
        onSelect: R,
        onTogglePreview: A
      } = e;
    S[0] !== T.value ? (n = (0, ak.voiceIdentity)(T.value), S[0] = T.value, S[1] = n) : n = S[1], S[2] !== k || S[3] !== w || S[4] !== n ? (l = {
      ...w,
      ...n,
      criteria_kind: "none",
      is_reselect: k,
      selection_effect: "pending",
      voice_source: "system"
    }, S[2] = k, S[3] = w, S[4] = n, S[5] = l) : l = S[5];
    let M = l;
    S[6] !== M ? (s = {
      eventName: g.HatchClickEvent.VOICE_FULL_LIST_SELECT_CLICK,
      actionTarget: ak.VOICE_COMPONENT.selectVoice,
      actionType: "click",
      metadata: M
    }, S[6] = M, S[7] = s) : s = S[7];
    let {
      ref: L,
      onClick: P
    } = (0, c.useTrackedClickRef)(s);
    S[8] !== T.value ? (r = (0, ak.voiceIdentity)(T.value), S[8] = T.value, S[9] = r) : r = S[9];
    let O = E ? "stop" : "start";
    S[10] !== N || S[11] !== I || S[12] !== E || S[13] !== T.value ? (i = E ? {} : {
      supersedes_active_preview: I && null != N && N !== T.value
    }, S[10] = N, S[11] = I, S[12] = E, S[13] = T.value, S[14] = i) : i = S[14], S[15] !== w || S[16] !== r || S[17] !== O || S[18] !== i ? (o = {
      eventName: g.HatchClickEvent.VOICE_FULL_LIST_PREVIEW_TOGGLE_CLICK,
      actionTarget: ak.VOICE_COMPONENT.playSample,
      actionType: "click",
      metadata: {
        ...w,
        ...r,
        action: O,
        criteria_kind: "none",
        ...i,
        voice_source: "system"
      }
    }, S[15] = w, S[16] = r, S[17] = O, S[18] = i, S[19] = o) : o = S[19];
    let {
      ref: V,
      onClick: F
    } = (0, c.useTrackedClickRef)(o), B = k ? "bg-fill-secondary" : "hover:bg-fill-secondary/50 active:bg-fill-secondary";
    S[20] !== B ? (u = (0, p.cn)("rounded-12 flex items-center gap-2 px-3 py-1 transition-colors", B), S[20] = B, S[21] = u) : u = S[21], S[22] !== P || S[23] !== R || S[24] !== T.value ? (d = () => {
      P(), R(T.value)
    }, S[22] = P, S[23] = R, S[24] = T.value, S[25] = d) : d = S[25];
    let D = k ? "border-hatch-accent bg-hatch-accent" : "border-text-quaternary";
    return S[26] !== D ? (h = (0, p.cn)("flex size-5 shrink-0 items-center justify-center rounded-full border-2 transition-colors", D), S[26] = D, S[27] = h) : h = S[27], S[28] !== k ? (m = k && (0, t.jsx)("div", {
      className: "size-2 rounded-full bg-white"
    }), S[28] = k, S[29] = m) : m = S[29], S[30] !== h || S[31] !== m ? (f = (0, t.jsx)("div", {
      "aria-hidden": "true",
      className: h,
      children: m
    }), S[30] = h, S[31] = m, S[32] = f) : f = S[32], S[33] !== T.label ? (x = (0, t.jsx)("span", {
      className: "text-body",
      children: T.label
    }), S[33] = T.label, S[34] = x) : x = S[34], S[35] !== T.subtitle ? (b = T.subtitle && (0, t.jsx)("span", {
      className: "text-footnote text-text-secondary",
      children: T.subtitle
    }), S[35] = T.subtitle, S[36] = b) : b = S[36], S[37] !== x || S[38] !== b ? (v = (0, t.jsxs)("div", {
      className: "flex min-w-0 flex-1 flex-col",
      children: [x, b]
    }), S[37] = x, S[38] = b, S[39] = v) : v = S[39], S[40] !== k || S[41] !== L || S[42] !== d || S[43] !== f || S[44] !== v ? (y = (0, t.jsxs)("button", {
      ref: L,
      type: "button",
      role: "radio",
      "aria-checked": k,
      className: "flex min-w-0 flex-1 items-center gap-3 py-1.5 text-start",
      onClick: d,
      children: [f, v]
    }), S[40] = k, S[41] = L, S[42] = d, S[43] = f, S[44] = v, S[45] = y) : y = S[45], S[46] !== F || S[47] !== A || S[48] !== T.value ? (_ = () => {
      F(), A(T.value)
    }, S[46] = F, S[47] = A, S[48] = T.value, S[49] = _) : _ = S[49], S[50] !== H || S[51] !== E || S[52] !== V || S[53] !== _ || S[54] !== T.label ? (C = (0, t.jsx)(aT.VoicePreviewButton, {
      buttonRef: V,
      isLoading: H,
      isPlaying: E,
      variant: "subtle",
      size: 36,
      iconSize: 18,
      onClick: _,
      voiceName: T.label
    }), S[50] = H, S[51] = E, S[52] = V, S[53] = _, S[54] = T.label, S[55] = C) : C = S[55], S[56] !== y || S[57] !== C || S[58] !== u ? (j = (0, t.jsxs)("div", {
      className: u,
      children: [y, C]
    }), S[56] = y, S[57] = C, S[58] = u, S[59] = j) : j = S[59], j
  }

  function aw({
    loggingMetadata: e,
    onDone: a,
    onSelectionConfirmed: l,
    ttsText: r,
    voices: i
  }) {
    let {
      setVoice: o
    } = (0, aj.useInitVoiceFromFile)(), d = (0, v.useVoiceId)(), h = (0, n.useRef)(d), [m, f] = (0, n.useState)(d), [p, x] = (0, n.useState)(!1), b = (0, n.useRef)(!1), {
      canGoBack: y,
      pop: _
    } = function() {
      let e = (0, n.useContext)(am);
      if (null == e) throw Error("useSheetNavigation must be used within a SheetNavigationStackContainer");
      return e
    }(), C = (0, aS.useVoicePreviewText)(r), j = (0, c.useInteractionLogger)(), S = (0, n.useMemo)(() => {
      let t = null == e ? void 0 : {
        ...e,
        screen: void 0,
        subsurface: void 0,
        surface: void 0
      };
      return (0, ak.createVoiceVisitContext)(null == e ? "voice_widget" : "browse_all", "voice_selection", t)
    }, [e]), T = (0, n.useMemo)(() => ({
      ...(0, ak.voiceTelemetryMetadata)(S),
      ...(0, ak.voicePageDimensions)(S.page)
    }), [S]), k = (0, n.useCallback)(e => {
      j({
        eventName: g.HatchClickEvent.VOICE_FULL_LIST_PREVIEW_TOGGLE_CLICK,
        actionTarget: ak.VOICE_COMPONENT.playSample,
        actionType: "play_end",
        metadata: {
          ...T,
          ...e
        }
      })
    }, [T, j]), {
      activeVoiceId: H,
      isPreviewLoading: E,
      isPreviewPlaying: w,
      stopPreview: N,
      togglePreview: I
    } = (0, aS.useVoicePreview)(C, {
      context: S,
      voiceMetadata: ak.voiceIdentity,
      onPlayEnd: k
    }), R = null != H && (E(H) || w(H)), A = null != e, M = (0, n.useRef)(!1), L = (0, n.useRef)(!1), P = (0, n.useRef)(!1), O = (0, n.useCallback)(e => {
      M.current || (M.current = !0, (0, ak.logVoiceLifecycle)("voice_settings_visit", "outcome", S, {
        exit_trigger: e,
        had_pending_selection: L.current,
        had_preview: P.current,
        result: "completed",
        voice_page: "voice_selection"
      }))
    }, [S]);
    (0, n.useEffect)(() => (M.current = !1, L.current = !1, P.current = !1, (0, ak.logVoiceLifecycle)("voice_settings_visit", "start", S, {
      voice_page: "voice_selection"
    }), () => O("removed")), [O, S]);
    let {
      ref: V
    } = (0, c.useTrackedImpressionRef)({
      eventName: Q.HatchImpressionEvent.VOICE_FULL_LIST_IMPRESSION,
      actionTarget: ak.VOICE_COMPONENT.selectionPage,
      metadata: {
        ...T,
        active_filter_count: 0,
        criteria_kind: "none"
      }
    }), {
      ref: F,
      onClick: B
    } = (0, c.useTrackedClickRef)({
      eventName: g.HatchClickEvent.VOICE_FULL_LIST_BACK_CLICK,
      actionTarget: "close_button",
      actionType: "dismiss",
      metadata: T
    }), {
      ref: D,
      onClick: z
    } = (0, c.useTrackedClickRef)({
      eventName: A ? g.HatchClickEvent.VOICE_OPTIONS_WIDGET_FULL_LIST_CLOSE_CLICK : g.HatchClickEvent.VOICE_ONBOARDING_DISMISS_CLICK,
      actionTarget: "close_button",
      actionType: "dismiss",
      metadata: T
    }), U = (0, n.useMemo)(() => null != i && i.length > 0 ? [{
      label: null,
      rows: i.map(e => ({
        value: e.id,
        label: e.name,
        subtitle: (0, ao.resolveVoiceSubtitle)(e.id, e.description)
      }))
    }] : ao.VOICE_GROUPS.filter(e => e.voices.length > 0).map(e => ({
      label: e.label,
      rows: e.voices.map(e => ({
        value: e.value,
        label: e.label,
        subtitle: (0, ao.resolveVoiceSubtitle)(e.value)
      }))
    })), [i]), G = (0, n.useMemo)(() => U.flatMap(e => e.rows), [U]), {
      ref: q,
      onClick: K
    } = (0, c.useTrackedClickRef)({
      eventName: g.HatchClickEvent.VOICE_FULL_LIST_CONFIRM_CLICK,
      actionTarget: ak.VOICE_COMPONENT.widgetSwitch,
      actionType: "click",
      metadata: {
        ...T,
        ...G.some(e => e.value === m) ? (0, ak.voiceIdentity)(m) : {}
      }
    });
    (0, n.useEffect)(() => {
      if (0 === G.length || G.some(e => e.value === m)) return;
      let e = G[0];
      null != e && f(e.value)
    }, [G, m]);
    let Y = (0, n.useCallback)(() => {
        N(), B(), O("back"), _()
      }, [O, B, _, N]),
      W = (0, n.useCallback)(() => {
        N(), z(), O("back"), a(!1)
      }, [O, z, a, N]),
      $ = (0, n.useCallback)(async () => {
        if (b.current) return;
        let e = G.find(e => e.value === m);
        if (null == e) return;
        b.current = !0, x(!0), K(), N();
        let t = (0, ak.startVoiceOperation)("voice_selection_commit", S, {
          ...(0, ak.voiceIdentity)(e.value),
          exit_trigger: "confirm",
          had_pending_selection: L.current,
          voice_source: "system"
        });
        try {
          if (await o({
              voiceId: e.value,
              voiceName: e.label
            })) {
            if (!(null == l || await l({
                voiceId: e.value,
                name: e.label
              }))) return void(0, ak.finishVoiceOperation)(t, {
              cache_result: "updated",
              confirmation: "none",
              disposition: "applied",
              failure_reason: "write_failed",
              persistence_certainty: "unconfirmed",
              result: "failure",
              restart_requested: !0
            });
            (0, ak.finishVoiceOperation)(t, {
              cache_result: "updated",
              confirmation: "write_ack",
              disposition: "applied",
              persistence_certainty: "confirmed",
              result: "success",
              restart_requested: !0
            }), O("confirm"), a(!0)
          } else(0, ak.finishVoiceOperation)(t, {
            cache_result: "unchanged",
            confirmation: "none",
            disposition: "applied",
            failure_reason: "write_failed",
            persistence_certainty: "unconfirmed",
            result: "failure",
            restart_requested: !1
          })
        } catch (e) {
          (0, ak.finishVoiceOperation)(t, {
            cache_result: "unchanged",
            confirmation: "none",
            disposition: "applied",
            failure_reason: "write_failed",
            persistence_certainty: "unconfirmed",
            result: "failure",
            restart_requested: !1
          }), aH.error({
            error: e instanceof Error ? e : Error(String(e)),
            tags: (0, el.hatchSentryTags)(el.HATCH_SENTRY_SURFACES.CHAT_VOICE_OPTIONS)
          }, "Failed to select catalog voice")
        } finally {
          b.current = !1, x(!1)
        }
      }, [O, G, K, a, l, m, o, N, S]);
    return (0, t.jsxs)("div", {
      ref: V,
      "aria-busy": p,
      className: "flex min-h-0 flex-col",
      style: {
        maxHeight: "min(calc(50vh + 128px), calc(100svh - 96px - env(safe-area-inset-top, 0px) - env(safe-area-inset-bottom, 0px)))"
      },
      children: [(0, t.jsx)(ab, {
        title: s.fbt._("All Voices", null, {
          hk: "2PyKMN"
        }),
        onBack: y ? Y : void 0,
        onClose: W,
        backRef: y ? F : void 0,
        closeRef: D
      }), (0, t.jsx)("div", {
        role: "radiogroup",
        "aria-label": s.fbs._("Voice options", null, {
          hk: "4jgyGp"
        }),
        className: "min-h-0 flex-1 overflow-y-auto px-4 pb-2",
        children: U.map((e, a) => (0, t.jsxs)("div", {
          className: "mb-2",
          children: [null != e.label && (0, t.jsx)("div", {
            className: "text-footnote-emphasized text-text-secondary px-2 pt-3 pb-1.5",
            children: e.label
          }), e.rows.map(e => (0, t.jsx)(aE, {
            activeVoiceId: H,
            hasActivePreview: R,
            voice: e,
            isSelected: e.value === m,
            isPreviewLoading: E(e.value),
            isPreviewPlaying: w(e.value),
            loggingMetadata: T,
            onSelect: e => {
              L.current = e !== h.current, f(e)
            },
            onTogglePreview: e => {
              P.current = !0, I(e)
            }
          }, e.value))]
        }, e.label ?? `group-${a}`))
      }), (0, t.jsx)("div", {
        className: "flex shrink-0 justify-center px-6 pt-4 pb-6",
        children: (0, t.jsx)(u.Button, {
          ref: q,
          label: s.fbt._("Confirm", null, {
            hk: "Ua9PH"
          }),
          variant: "darkSolid",
          radius: "large",
          size: "36",
          fullWidth: !0,
          className: "max-w-[250px]",
          onClick: $,
          disabled: p
        })
      })]
    })
  }
  var aN = e.i(168080),
    aI = e.i(670419);

  function aR(e) {
    let n, l, r, i, o = (0, a.c)(6),
      {
        onClose: c
      } = e;
    return o[0] === Symbol.for("react.memo_cache_sentinel") ? (n = s.fbs._("Choose my voice", null, {
      hk: "2zN4WJ"
    }), o[0] = n) : n = o[0], o[1] !== c ? (l = (0, t.jsx)(ab, {
      title: n,
      onClose: c
    }), o[1] = c, o[2] = l) : l = o[2], o[3] === Symbol.for("react.memo_cache_sentinel") ? (r = (0, t.jsx)("div", {
      className: "flex items-center justify-center px-5 py-16",
      children: (0, t.jsx)(G.Spinner, {})
    }), o[3] = r) : r = o[3], o[4] !== l ? (i = (0, t.jsxs)("div", {
      className: "flex flex-col",
      children: [l, r]
    }), o[4] = l, o[5] = i) : i = o[5], i
  }

  function aA(e) {
    let l, s, r, i, o, c, u, d = (0, a.c)(25),
      {
        activeSheet: h,
        onClose: m,
        voiceOptions: f
      } = e,
      p = (0, n.useRef)(null),
      g = (0, tJ.useHatchVoiceEnabled)(),
      x = (0, aN.useHatchVoiceSource)();
    d[0] !== m || d[1] !== f?.controlId ? (l = e => {
      let t = f?.controlId;
      null != t && (0, aI.notifySheetDone)(t, void 0 !== e && e), m()
    }, d[0] = m, d[1] = f?.controlId, d[2] = l) : l = d[2], f?.controlId;
    let b = l;
    d[3] !== b || d[4] !== x.status || d[5] !== x.voices || d[6] !== f?.fullListLoggingMetadata || d[7] !== f?.onSelectionConfirmed || d[8] !== f?.text ? (s = (e, a) => "loading" === x.status ? (0, t.jsx)(aR, {
      onClose: () => {
        a()
      }
    }) : (0, t.jsx)(aw, {
      loggingMetadata: f?.fullListLoggingMetadata,
      onDone: b,
      onSelectionConfirmed: f?.onSelectionConfirmed,
      ttsText: f?.text,
      voices: "skill" === x.status ? x.voices : void 0
    }), d[3] = b, d[4] = x.status, d[5] = x.voices, d[6] = f?.fullListLoggingMetadata, d[7] = f?.onSelectionConfirmed, d[8] = f?.text, d[9] = s) : s = d[9], f?.fullListLoggingMetadata, f?.onSelectionConfirmed, f?.text;
    let v = s;
    return (d[10] !== h || d[11] !== b || d[12] !== g ? (r = () => {
      null == h || g || b()
    }, i = [h, b, g], d[10] = h, d[11] = b, d[12] = g, d[13] = r, d[14] = i) : (r = d[13], i = d[14]), (0, n.useEffect)(r, i), d[15] !== h || d[16] !== g ? (o = () => {
      if (null == h || !g) return;
      let e = window.requestAnimationFrame(() => {
        p.current?.querySelector('button:not([disabled]), [href], [tabindex="0"]')?.focus()
      });
      return () => window.cancelAnimationFrame(e)
    }, d[15] = h, d[16] = g, d[17] = o) : o = d[17], d[18] !== h || d[19] !== g || d[20] !== x.status ? (c = [h, g, x.status], d[18] = h, d[19] = g, d[20] = x.status, d[21] = c) : c = d[21], (0, n.useEffect)(o, c), h && g) ? (d[22] !== b || d[23] !== v ? (u = (0, t.jsx)("div", {
      ref: p,
      children: (0, t.jsx)(aC, {
        initialRouteId: "voice",
        onClose: b,
        renderRoute: v
      })
    }), d[22] = b, d[23] = v, d[24] = u) : u = d[24], u) : null
  }
  let aM = () => {};
  var aL = e.i(861637);
  let aP = {
    flexDirection: "column-reverse"
  };

  function aO(e) {
    let l, s, r, i = (0, a.c)(8),
      {
        error: o,
        hasProvisionalCachedHistory: c,
        onRecoverCachedFeed: u,
        reset: d
      } = e,
      h = (0, n.useRef)(!1);
    return i[0] !== c || i[1] !== u || i[2] !== d ? (l = () => {
      c && !h.current && (h.current = !0, u() && d())
    }, s = [c, u, d], i[0] = c, i[1] = u, i[2] = d, i[3] = l, i[4] = s) : (l = i[3], s = i[4]), (0, n.useEffect)(l, s), i[5] !== o || i[6] !== c ? (r = c ? (0, t.jsx)(ae, {}) : (0, t.jsx)(ar, {
      error: o,
      onReload: aV
    }), i[5] = o, i[6] = c, i[7] = r) : r = i[7], r
  }

  function aV() {
    return window.location.reload()
  }

  function aF(e) {
    let _, M, L, P, O, V, F, B, z, U, G, q, K, Y, $, Q, Z, J, X, ee, et, ea, en, el, es, er, ei, eo, ec, eu, ed, eh, em, ef, ex, eb, ev, ey, e_, eC, ej, eS, eT = (0, a.c)(102),
      {
        messageContent: ek,
        threadLayout: eH
      } = e,
      eE = void 0 === eH ? td.HATCH_FULL_THREAD_LAYOUT : eH,
      {
        loadOlderMessages: ew,
        loadNewerMessages: eN,
        recoverFromPersistentCacheRenderError: eI,
        setQuotedMessage: eR,
        returnToLatest: eA
      } = (0, x.useHatchChat)();
    eT[0] !== eN || eT[1] !== ew ? (_ = {
      loadOlderMessages: ew,
      loadNewerMessages: eN
    }, eT[0] = eN, eT[1] = ew, eT[2] = _) : _ = eT[2];
    let {
      tracedLoadOlderMessages: eM,
      tracedLoadNewerMessages: eL
    } = function(e) {
      let t, l, s, r, i, o, c, u = (0, a.c)(11),
        {
          loadOlderMessages: d,
          loadNewerMessages: h
        } = e,
        m = (0, n.useRef)(null),
        f = (0, n.useRef)(null),
        p = (0, n.useRef)(null),
        g = (0, n.useRef)(null);
      u[0] === Symbol.for("react.memo_cache_sentinel") ? (t = (e, t, a) => {
        A(t);
        let n = e.current;
        null != n && (e.current = null, (0, I.endManualTrace)(n, a))
      }, u[0] = t) : t = u[0];
      let x = t;
      u[1] === Symbol.for("react.memo_cache_sentinel") ? (l = (e, t, a, n) => {
        null != e.current && (e.current.annotate({
          string: {
            cancel_reason: "new_request"
          }
        }), x(e, t, "CANCEL"));
        let l = (0, I.startManualInteraction)(a, {
          debugName: n
        });
        return e.current = l, A(t), t.current = window.setTimeout(() => {
          t.current = null;
          let a = e.current;
          null != a && (a.annotate({
            string: {
              timeout_reason: "pagination_fetch_timeout"
            }
          }), e.current = null, (0, I.endManualTrace)(a, "TIMEOUT"))
        }, 3e4), l
      }, u[1] = l) : l = u[1];
      let b = l;
      u[2] !== d ? (s = async () => {
        let e = b(m, p, N.EctoInteractionTracePolicy.CHAT_PAGINATION_OLDER, "chat-pagination-older");
        try {
          let t = await d();
          return e.annotate({
            bool: {
              has_more_after: t
            }
          }), x(m, p, "SUCCESS"), t
        } catch (t) {
          return e.annotate({
            string: {
              error_class: (0, R.classifyErrorForTelemetry)(t),
              error_name: (0, R.errorNameForTelemetry)(t)
            },
            int: {
              error_length: (0, R.errorLengthForTelemetry)(t)
            }
          }), x(m, p, "FAIL"), !1
        }
      }, u[2] = d, u[3] = s) : s = u[3];
      let v = s;
      u[4] !== h ? (r = async () => {
        let e = b(f, g, N.EctoInteractionTracePolicy.CHAT_PAGINATION_NEWER, "chat-pagination-newer");
        try {
          await h(), x(f, g, "SUCCESS")
        } catch (t) {
          e.annotate({
            string: {
              error_class: (0, R.classifyErrorForTelemetry)(t)
            },
            int: {
              error_length: (0, R.errorLengthForTelemetry)(t)
            }
          }), x(f, g, "FAIL")
        }
      }, u[4] = h, u[5] = r) : r = u[5];
      let y = r;
      return u[6] === Symbol.for("react.memo_cache_sentinel") ? (i = () => () => {
        null != m.current && (m.current.annotate({
          string: {
            cancel_reason: "unmount"
          }
        }), x(m, p, "CANCEL")), null != f.current && (f.current.annotate({
          string: {
            cancel_reason: "unmount"
          }
        }), x(f, g, "CANCEL"))
      }, o = [x], u[6] = i, u[7] = o) : (i = u[6], o = u[7]), (0, n.useEffect)(i, o), u[8] !== y || u[9] !== v ? (c = {
        tracedLoadOlderMessages: v,
        tracedLoadNewerMessages: y
      }, u[8] = y, u[9] = v, u[10] = c) : c = u[10], c
    }(_), eP = (0, c.useInteractionLogger)(), eO = (0, v.useChatMessageIds)(), eV = (0, v.useChatHasProvisionalCachedHistory)(), eF = (0, v.useChatIsViewingHistory)(), eB = (0, v.useChatHasMore)(), eD = (0, v.useChatIsLoadingNewer)(), ez = (0, v.useChatHasMoreNewer)(), eU = (0, eg.useEffectiveHatchChatRoute)();
    eT[3] !== eU ? (M = (0, y.hatchChatThreadLoggingMetadata)(eU), eT[3] = eU, eT[4] = M) : M = eT[4];
    let eG = M;
    eT[5] !== eR ? (L = (e, t, a) => eR({
      messageId: e,
      text: t,
      ...null != a ? {
        media: a
      } : {}
    }), eT[5] = eR, eT[6] = L) : L = eT[6];
    let eq = L,
      eK = (0, n.useRef)(null),
      eY = (0, n.useRef)(null),
      [eW, e$] = (0, n.useState)(null);
    eT[7] === Symbol.for("react.memo_cache_sentinel") ? (P = e => {
      e <= 0 || e$(t => t === e ? t : e)
    }, eT[7] = P) : P = eT[7];
    let eQ = P;
    eT[8] === Symbol.for("react.memo_cache_sentinel") ? (O = (e, t, a) => {
      e.width > 0 && (0, E.setContentVirtualizationWidth)(e.width);
      let n = a.get(t)?.borderBoxSize[0]?.inlineSize ?? t.getBoundingClientRect().width;
      eQ(n > 0 ? n : e.width)
    }, eT[8] = O) : O = eT[8];
    let eZ = (0, f.useResizeObserver)(O);
    eT[9] === Symbol.for("react.memo_cache_sentinel") ? (V = e => {
      null != e && eQ(e.getBoundingClientRect().width)
    }, eT[9] = V) : V = eT[9];
    let eJ = V,
      eX = (0, m.useMergeRefs)(eY, eZ, eJ),
      e0 = (ej = (0, n.useRef)(null), eS = (0, n.useRef)(null), (0, n.useEffect)(() => () => {
        eS.current?.unsubscribeFromScrollIntent(), eS.current = null, ej.current?.(), ej.current = null
      }, []), (0, n.useCallback)(async e => {
        let t = eS.current;
        if (null == t) {
          let e = eK.current,
            a = null == e ? null : (0, k.computeHatchChatScrollAnchor)(e);
          if (t = {
              anchor: a,
              pendingCount: 0,
              scrollEl: e,
              unsubscribeFromScrollIntent: () => {},
              userTookOver: !1
            }, null != e && null != a) {
            let a = t;
            t.unsubscribeFromScrollIntent = (0, aL.subscribeToHatchChatScrollIntent)(e, () => {
              a.userTookOver = !0, ej.current?.(), ej.current = null
            })
          }
          eS.current = t
        }
        t.pendingCount += 1;
        try {
          return await e()
        } finally {
          t.pendingCount -= 1;
          let {
            anchor: e,
            scrollEl: a
          } = t;
          if (!t.userTookOver && null != e && null != a && a.isConnected && eK.current === a) {
            ej.current?.();
            let t = (0, H.startHatchChatScrollHold)({
              scrollEl: a,
              anchor: e,
              reason: "pagination",
              onSettled: () => {
                ej.current === t && (ej.current = null)
              }
            });
            ej.current = t ?? null
          }
          0 === t.pendingCount && (t.unsubscribeFromScrollIntent(), eS.current === t && (eS.current = null))
        }
      }, [eK]));
    eT[10] !== e0 || eT[11] !== eM ? (F = () => e0(eM), eT[10] = e0, eT[11] = eM, eT[12] = F) : F = eT[12];
    let e1 = F;
    eT[13] !== e0 || eT[14] !== eL ? (B = () => e0(eL), eT[13] = e0, eT[14] = eL, eT[15] = B) : B = eT[15];
    let e2 = B;
    eT[16] === Symbol.for("react.memo_cache_sentinel") ? (z = () => {
      let e = eK.current;
      return (0, E.setContentVirtualizationRoot)(e), aB
    }, U = [], eT[16] = z, eT[17] = U) : (z = eT[16], U = eT[17]), (0, n.useEffect)(z, U), eT[18] !== eO ? (G = () => {
      (0, w.pruneContentVirtualizationCaches)(eO)
    }, q = [eO], eT[18] = eO, eT[19] = G, eT[20] = q) : (G = eT[19], q = eT[20]), (0, n.useEffect)(G, q), eT[21] === Symbol.for("react.memo_cache_sentinel") ? (K = {
      scrollContainerRef: eK
    }, eT[21] = K) : K = eT[21];
    let {
      isSticky: e3,
      scrollToBottom: e4
    } = function(e) {
      let t, l, s, r, i, o, c = (0, a.c)(11),
        {
          scrollContainerRef: u
        } = e,
        d = (0, n.useRef)(!0),
        [h, m] = (0, n.useState)(!0);
      c[0] !== u ? (t = () => {
        let e = u.current;
        if (!e) return;
        let t = 0,
          a = () => {
            t = 0, (0, k.setHatchChatScrollAnchor)((0, k.computeHatchChatScrollAnchor)(e))
          },
          n = () => {
            0 === t && (t = requestAnimationFrame(a))
          },
          l = () => {
            let t = (0, k.isHatchChatScrollNearBottom)(e);
            d.current !== t && (d.current = t, m(t), b.setChatAtBottom(t)), n()
          },
          s = new ResizeObserver(n);
        return s.observe(e), a(), e.addEventListener("scroll", l, {
          passive: !0
        }), () => {
          e.removeEventListener("scroll", l), s.disconnect(), 0 !== t && cancelAnimationFrame(t)
        }
      }, l = [u], c[0] = u, c[1] = t, c[2] = l) : (t = c[1], l = c[2]), (0, n.useEffect)(t, l), c[3] !== u ? (s = () => {
        let e = u.current;
        e && (e.scrollTop = 0)
      }, c[3] = u, c[4] = s) : s = c[4];
      let f = s;
      return c[5] !== f ? (r = () => {
        let e = () => {
          requestAnimationFrame(f)
        };
        return window.addEventListener("hatch-user-message-sent", e), window.addEventListener("hatch-scroll-to-bottom", f), () => {
          window.removeEventListener("hatch-user-message-sent", e), window.removeEventListener("hatch-scroll-to-bottom", f)
        }
      }, i = [f], c[5] = f, c[6] = r, c[7] = i) : (r = c[6], i = c[7]), (0, n.useEffect)(r, i), c[8] !== h || c[9] !== f ? (o = {
        isSticky: h,
        scrollToBottom: f
      }, c[8] = h, c[9] = f, c[10] = o) : o = c[10], o
    }(K);
    eT[22] !== e1 || eT[23] !== eB ? (Y = {
      scrollContainerRef: eK,
      loadOlderMessages: e1,
      hasMore: eB
    }, eT[22] = e1, eT[23] = eB, eT[24] = Y) : Y = eT[24];
    let {
      topSentinelRef: e5
    } = function(e) {
      let t, l, s, r, i = (0, a.c)(8),
        {
          scrollContainerRef: o,
          loadOlderMessages: c,
          hasMore: u
        } = e,
        [d, h] = (0, n.useState)(null);
      i[0] === Symbol.for("react.memo_cache_sentinel") ? (t = e => {
        h(e)
      }, i[0] = t) : t = i[0];
      let m = t,
        f = (0, n.useRef)(!1);
      return i[1] !== u || i[2] !== c || i[3] !== o || i[4] !== d ? (l = () => {
        let e = o.current;
        if (!u || !d || !e) return;
        let t = !1,
          a = () => {
            f.current || (f.current = !0, c().finally(() => {
              f.current = !1
            }))
          },
          n = new IntersectionObserver(e => {
            if (e[0]?.isIntersecting && !f.current) {
              if ((0, H.isHatchChatScrollHoldActive)()) {
                t = !0;
                return
              }
              a()
            }
          }, {
            root: e,
            threshold: 0
          }),
          l = (0, H.subscribeToHatchChatScrollHoldEnd)(() => {
            if (t) {
              let n, l;
              t = !1, n = d.getBoundingClientRect(), l = e.getBoundingClientRect(), n.top < l.bottom && n.bottom > l.top && a()
            }
          });
        return n.observe(d), () => {
          l(), n.disconnect()
        }
      }, s = [u, c, o, d], i[1] = u, i[2] = c, i[3] = o, i[4] = d, i[5] = l, i[6] = s) : (l = i[5], s = i[6]), (0, n.useEffect)(l, s), i[7] === Symbol.for("react.memo_cache_sentinel") ? (r = {
        topSentinelRef: m
      }, i[7] = r) : r = i[7], r
    }(Y);
    eT[25] !== e2 || eT[26] !== ez || eT[27] !== eD ? ($ = {
      scrollContainerRef: eK,
      loadNewerMessages: e2,
      hasMoreNewer: ez,
      isLoadingNewer: eD
    }, eT[25] = e2, eT[26] = ez, eT[27] = eD, eT[28] = $) : $ = eT[28];
    let {
      bottomSentinelRef: e8
    } = function(e) {
      let t, l, s, r, i = (0, a.c)(9),
        {
          scrollContainerRef: o,
          loadNewerMessages: c,
          hasMoreNewer: u,
          isLoadingNewer: d
        } = e,
        [h, m] = (0, n.useState)(null);
      i[0] === Symbol.for("react.memo_cache_sentinel") ? (t = e => {
        m(e)
      }, i[0] = t) : t = i[0];
      let f = t,
        p = (0, n.useRef)(!1);
      return i[1] !== u || i[2] !== d || i[3] !== c || i[4] !== o || i[5] !== h ? (l = () => {
        let e = o.current;
        if (!u || !h || !e) return;
        let t = !1,
          a = new IntersectionObserver(e => {
            let a = e[0];
            if (a) {
              if (!a.isIntersecting) {
                t = !0;
                return
              }!t || d || p.current || (p.current = !0, c().finally(() => {
                p.current = !1
              }))
            }
          }, {
            root: e,
            threshold: 0
          });
        return a.observe(h), () => a.disconnect()
      }, s = [u, d, c, o, h], i[1] = u, i[2] = d, i[3] = c, i[4] = o, i[5] = h, i[6] = l, i[7] = s) : (l = i[6], s = i[7]), (0, n.useEffect)(l, s), i[8] === Symbol.for("react.memo_cache_sentinel") ? (r = {
        bottomSentinelRef: f
      }, i[8] = r) : r = i[8], r
    }($), e6 = (0, h.useIsMobileBreakpoint)();
    eT[29] !== eW ? (Q = {
      messageContainerWidth: eW
    }, eT[29] = eW, eT[30] = Q) : Q = eT[30];
    let e7 = function(e, t) {
        let l, s, r, i = (0, a.c)(7);
        i[0] !== t || i[1] !== e ? (l = () => (0, td.resolveHatchMessageActionMode)(e, t), i[0] = t, i[1] = e, i[2] = l) : l = i[2];
        let [o, c] = (0, n.useState)(l);
        return i[3] !== t || i[4] !== e ? (s = () => {
          c(a => (0, td.resolveHatchMessageActionMode)(e, t, a))
        }, r = [t, e], i[3] = t, i[4] = e, i[5] = s, i[6] = r) : (s = i[5], r = i[6]), (0, n.useLayoutEffect)(s, r), o
      }(eE, Q),
      [e9] = (0, l.useSearchParams)();
    eT[31] !== e9 ? (Z = e9.has("scrubber"), eT[31] = e9, eT[32] = Z) : Z = eT[32];
    let te = Z,
      tt = e3 && !eF && !ez;
    eT[33] !== e8 || eT[34] !== eq || eT[35] !== e6 || eT[36] !== e7 || eT[37] !== eX || eT[38] !== tt || eT[39] !== e5 ? (J = {
      messageListRef: eX,
      topSentinelRef: e5,
      bottomSentinelRef: e8,
      animateThreadPosition: tt,
      isMobile: e6,
      onQuote: eq,
      messageActionMode: e7
    }, eT[33] = e8, eT[34] = eq, eT[35] = e6, eT[36] = e7, eT[37] = eX, eT[38] = tt, eT[39] = e5, eT[40] = J) : J = eT[40];
    let ta = J;
    eT[41] !== e3 ? (X = {
      scrollContainerRef: eK,
      isSticky: e3
    }, eT[41] = e3, eT[42] = X) : X = eT[42];
    let tn = function(e) {
        let t, l, s, r, i = (0, a.c)(10),
          {
            scrollContainerRef: o,
            isSticky: c
          } = e,
          [u, d] = (0, n.useState)(null),
          h = (0, n.useRef)(0);
        i[0] !== c || i[1] !== o ? (t = () => {
          let e = o.current;
          if (!e) return;
          let t = () => {
            if (c) return void d(T);
            let t = e.querySelectorAll("[data-message-id]");
            if (0 === t.length) return void d(S);
            let a = function(e, t) {
              let a = 0,
                n = e.length;
              for (; a < n;) {
                let l = a + n >>> 1;
                e[l].getBoundingClientRect().top >= t ? n = l : a = l + 1
              }
              return e.length - a
            }(t, e.getBoundingClientRect().bottom);
            if (0 === a) return void d(j);
            let n = a > 1 ? {
              kind: "moreMessages",
              count: a
            } : {
              kind: "seeMore"
            };
            d(e => null == e || e.kind !== n.kind ? n : "moreMessages" === e.kind && "moreMessages" === n.kind ? e.count === n.count ? e : n : e)
          };
          t();
          let a = () => {
            h.current && cancelAnimationFrame(h.current), h.current = requestAnimationFrame(t)
          };
          return e.addEventListener("scroll", a, {
            passive: !0
          }), () => {
            e.removeEventListener("scroll", a), h.current && cancelAnimationFrame(h.current)
          }
        }, l = [o, c], i[0] = c, i[1] = o, i[2] = t, i[3] = l) : (t = i[2], l = i[3]), (0, n.useEffect)(t, l), i[4] !== o ? (s = () => {
          let e = o.current;
          e && e.scrollTo({
            top: 0,
            behavior: "smooth"
          })
        }, i[4] = o, i[5] = s) : s = i[5];
        let m = s,
          f = !c;
        return i[6] !== u || i[7] !== m || i[8] !== f ? (r = {
          isVisible: f,
          content: u,
          scrollToBottom: m
        }, i[6] = u, i[7] = m, i[8] = f, i[9] = r) : r = i[9], r
      }(X),
      {
        sheetOverlay: tl,
        reservedSheetHeight: ts
      } = function() {
        let e, n, l, s = (0, a.c)(10),
          {
            activeSheet: r,
            closeSheet: i,
            voiceOptions: o
          } = (0, aI.useActiveInlineSheet)(),
          c = null != r;
        return s[0] !== r || s[1] !== i || s[2] !== o ? (e = (0, t.jsx)(aA, {
          activeSheet: r,
          onClose: i,
          voiceOptions: o
        }), s[0] = r, s[1] = i, s[2] = o, s[3] = e) : e = s[3], s[4] !== c || s[5] !== e ? (n = (0, t.jsx)(ai, {
          open: c,
          onHeightChange: aM,
          children: e
        }), s[4] = c, s[5] = e, s[6] = n) : n = s[6], s[7] !== c || s[8] !== n ? (l = {
          isInlineSheetOpen: c,
          reservedSheetHeight: 0,
          sheetOverlay: n
        }, s[7] = c, s[8] = n, s[9] = l) : l = s[9], l
      }();
    eT[43] !== ts ? (ee = {
      ...aP,
      paddingBottom: ts,
      transition: "padding-bottom 0.3s ease-out"
    }, eT[43] = ts, eT[44] = ee) : ee = eT[44];
    let tr = ee;
    eT[45] !== ez || eT[46] !== e3 || eT[47] !== eF ? (et = () => {
      e3 && !ez && eF && b.reduceChat({
        type: "chat/set_viewing_history",
        isViewingHistory: !1
      })
    }, ea = [e3, ez, eF], eT[45] = ez, eT[46] = e3, eT[47] = eF, eT[48] = et, eT[49] = ea) : (et = eT[48], ea = eT[49]), (0, n.useEffect)(et, ea);
    let ti = "compact" === e7 ? "[--hatch-chat-thread-inline-padding:1rem]" : "[--hatch-chat-thread-inline-padding:1.5rem]";
    eT[50] !== ti ? (en = (0, p.cn)("relative flex min-h-0 flex-1 flex-col", ti), eT[50] = ti, eT[51] = en) : en = eT[51], eT[52] !== eV || eT[53] !== eI ? (el = e => {
      let {
        error: a,
        reset: n
      } = e;
      return (0, t.jsx)(aO, {
        error: a,
        hasProvisionalCachedHistory: eV,
        onRecoverCachedFeed: eI,
        reset: n
      })
    }, eT[52] = eV, eT[53] = eI, eT[54] = el) : el = eT[54], eT[55] === Symbol.for("react.memo_cache_sentinel") ? (es = (0, t.jsx)(aa, {}), eT[55] = es) : es = eT[55], eT[56] !== ek ? (er = ek ?? (0, t.jsx)(t7, {}), eT[56] = ek, eT[57] = er) : er = eT[57], eT[58] !== er ? (ei = (0, t.jsx)(o.HeroPlaceholder, {
      fallback: es,
      name: "chat-messages",
      children: er
    }), eT[58] = er, eT[59] = ei) : ei = eT[59], eT[60] !== el || eT[61] !== ei ? (eo = (0, t.jsx)(W.EctoErrorBoundary, {
      surface: "hatch.chat.feed",
      fallback: el,
      children: ei
    }), eT[60] = el, eT[61] = ei, eT[62] = eo) : eo = eT[62], eT[63] !== ta || eT[64] !== eo ? (ec = (0, t.jsx)(ep.HatchChatFeedViewportContextProvider, {
      value: ta,
      children: eo
    }), eT[63] = ta, eT[64] = eo, eT[65] = ec) : ec = eT[65], eT[66] !== tr || eT[67] !== ec ? (eu = (0, t.jsx)(d.default, {
      ref: eK,
      id: "hatch-chat-scroll",
      vertical: !0,
      horizontal: !1,
      expanding: !0,
      hideScrollbar: !0,
      style: tr,
      scrollTracePolicy: N.EctoInteractionTracePolicy.CHAT_SCROLL,
      children: ec
    }), eT[66] = tr, eT[67] = ec, eT[68] = eu) : eu = eT[68], eT[69] !== e6 || eT[70] !== te ? (ed = !e6 && te && (0, t.jsx)(D, {
      scrollContainerRef: eK,
      messageListRef: eY
    }), eT[69] = e6, eT[70] = te, eT[71] = ed) : ed = eT[71], eT[72] !== tl || eT[73] !== eu || eT[74] !== ed ? (eh = (0, t.jsxs)("div", {
      className: "relative flex min-h-0 flex-1 flex-col transition-opacity duration-150",
      children: [eu, ed, tl]
    }), eT[72] = tl, eT[73] = eu, eT[74] = ed, eT[75] = eh) : eh = eT[75], eT[76] !== en || eT[77] !== eh ? (em = (0, t.jsx)("div", {
      className: en,
      "data-hatch-vt-pane": "chat-feed",
      children: eh
    }), eT[76] = en, eT[77] = eh, eT[78] = em) : em = eT[78];
    let to = e6 ? "px-3" : "px-8";
    eT[79] !== to ? (ef = (0, p.cn)("pointer-events-none relative shrink-0", to), eT[79] = to, eT[80] = ef) : ef = eT[80];
    let tc = e6 ? "calc(var(--hatch-composer-reserved-height, 0px) + 66px + env(safe-area-inset-bottom, 0px))" : "calc(var(--hatch-composer-reserved-height, 0px) + 16px)";
    return eT[81] !== tc ? (ex = {
      height: tc
    }, eT[81] = tc, eT[82] = ex) : ex = eT[82], eT[83] !== tn || eT[84] !== eF || eT[85] !== eP || eT[86] !== eA || eT[87] !== e4 || eT[88] !== eG ? (eb = (0, t.jsx)(r.AnimatePresence, {
      mode: "wait",
      children: eF ? (0, t.jsx)(i.motion.div, {
        initial: {
          opacity: 0,
          y: 8
        },
        animate: {
          opacity: 1,
          y: 0
        },
        exit: {
          opacity: 0,
          y: 8
        },
        transition: {
          duration: .15
        },
        className: "pointer-events-auto absolute inset-x-0 -top-12 flex justify-center",
        children: (0, t.jsx)(u.Button, {
          variant: "elevated",
          size: "32",
          label: s.fbs._("Return to latest", null, {
            hk: "3lEg93"
          }),
          labelClassName: "text-caption-2-emphasized whitespace-nowrap",
          trailingIcon: "chevron-down",
          onClick: () => {
            eP({
              eventName: g.HatchClickEvent.CHAT_RETURN_TO_LATEST,
              actionTarget: "chat_return_to_latest",
              actionType: "click",
              metadata: {
                surface: "chat",
                subsurface: "history",
                ...eG
              }
            }), eA()
          }
        })
      }, "return-to-latest") : (0, t.jsx)("div", {
        className: "pointer-events-auto",
        children: (0, t.jsx)(C, {
          isVisible: tn.isVisible,
          isFloatingPresentation: !1,
          content: tn.content,
          onClick: () => {
            eP({
              eventName: g.HatchClickEvent.CHAT_SCROLL_TO_BOTTOM,
              actionTarget: "chat_scroll_to_bottom",
              actionType: "click",
              metadata: {
                surface: "chat",
                subsurface: "scroll_badge",
                ...eG
              }
            }), e4()
          }
        }, "scroll-badge")
      })
    }), eT[83] = tn, eT[84] = eF, eT[85] = eP, eT[86] = eA, eT[87] = e4, eT[88] = eG, eT[89] = eb) : eb = eT[89], eT[90] !== e6 ? (ev = !e6 && (0, t.jsx)("div", {
      className: "pointer-events-none absolute inset-x-0 bottom-0 h-10",
      style: {
        backgroundColor: "var(--hatch-panel-bg)"
      }
    }), eT[90] = e6, eT[91] = ev) : ev = eT[91], eT[92] !== eb || eT[93] !== ev ? (ey = (0, t.jsxs)(tX.HatchChatColumn, {
      className: "relative h-full",
      children: [eb, ev]
    }), eT[92] = eb, eT[93] = ev, eT[94] = ey) : ey = eT[94], eT[95] !== ef || eT[96] !== ex || eT[97] !== ey ? (e_ = (0, t.jsx)("div", {
      "data-hatch-chat-scroll-affordance": !0,
      className: ef,
      style: ex,
      children: ey
    }), eT[95] = ef, eT[96] = ex, eT[97] = ey, eT[98] = e_) : e_ = eT[98], eT[99] !== em || eT[100] !== e_ ? (eC = (0, t.jsxs)("div", {
      className: "flex min-h-0 flex-1 flex-col",
      children: [em, e_]
    }), eT[99] = em, eT[100] = e_, eT[101] = eC) : eC = eT[101], eC
  }

  function aB() {
    return (0, E.setContentVirtualizationRoot)(null)
  }

  function aD(e) {
    let n, l, s, r, i, o = (0, a.c)(10);
    o[0] !== e ? ({
      size: l,
      ...n
    } = e, o[0] = e, o[1] = n, o[2] = l) : (n = o[1], l = o[2]);
    let c = void 0 === l ? 32 : l;
    return o[3] !== n.title ? (s = null != n.title && (0, t.jsx)("title", {
      children: n.title
    }), o[3] = n.title, o[4] = s) : s = o[4], o[5] === Symbol.for("react.memo_cache_sentinel") ? (r = (0, t.jsx)("path", {
      d: "M6.125 16a.884.884 0 0 0 .038.255l.013.038a.87.87 0 0 0 .145.26l.06.066 7.5 7.5a.876.876 0 0 0 1.238-1.239l-6.006-6.005H25a.875.875 0 1 0 0-1.75H9.113l6.006-6.006A.876.876 0 0 0 13.88 7.88l-7.5 7.5a.91.91 0 0 0-.187.278.87.87 0 0 0-.066.284l-.002.03-.001.028z",
      fill: "currentColor"
    }), o[5] = r) : r = o[5], o[6] !== n || o[7] !== c || o[8] !== s ? (i = (0, t.jsxs)("svg", {
      viewBox: "0 0 32 32",
      fill: "none",
      width: c,
      height: c,
      ...n,
      children: [s, r]
    }), o[6] = n, o[7] = c, o[8] = s, o[9] = i) : i = o[9], i
  }
  aD._isSVG = !0, aD._viewBox = 32;
  var az = e.i(358338);

  function aU(e) {
    let n, l, s, r, i, o, c = (0, a.c)(11);
    return c[0] !== e.title ? (n = null != e.title && (0, t.jsx)("title", {
      children: e.title
    }), c[0] = e.title, c[1] = n) : n = c[1], c[2] !== e.children ? (l = null != e.children && (0, t.jsx)("defs", {
      children: e.children
    }), c[2] = e.children, c[3] = l) : l = c[3], c[4] === Symbol.for("react.memo_cache_sentinel") ? (s = (0, t.jsx)("path", {
      d: "M21.5 17.13C21.98 17.13 22.38 17.52 22.38 18C22.38 18.48 21.98 18.88 21.5 18.88H2.5C2.02 18.88 1.63 18.48 1.63 18C1.63 17.52 2.02 17.13 2.5 17.13H21.5Z"
    }), r = (0, t.jsx)("path", {
      d: "M21.5 11.13C21.98 11.13 22.38 11.52 22.38 12C22.38 12.48 21.98 12.88 21.5 12.88H2.5C2.02 12.88 1.63 12.48 1.63 12C1.63 11.52 2.02 11.13 2.5 11.13H21.5Z"
    }), i = (0, t.jsx)("path", {
      d: "M21.5 5.13C21.98 5.13 22.38 5.52 22.38 6C22.38 6.48 21.98 6.88 21.5 6.88H2.5C2.02 6.88 1.63 6.48 1.63 6C1.63 5.52 2.02 5.13 2.5 5.13H21.5Z"
    }), c[4] = s, c[5] = r, c[6] = i) : (s = c[4], r = c[5], i = c[6]), c[7] !== e || c[8] !== n || c[9] !== l ? (o = (0, t.jsxs)("svg", {
      viewBox: "0 0 24 24",
      fill: "currentColor",
      width: "1em",
      height: "1em",
      ...e,
      children: [n, l, s, r, i]
    }), c[7] = e, c[8] = n, c[9] = l, c[10] = o) : o = c[10], o
  }
  aU._isSVG = !0;
  var aG = e.i(61810),
    aq = e.i(346791),
    aK = e.i(941807),
    aY = e.i(352702),
    aW = e.i(502488),
    a$ = e.i(661621),
    aQ = e.i(478648),
    aZ = e.i(58746),
    aJ = e.i(9982);

  function aX(e) {
    return null == e ? void 0 : (0, aJ.attachVoiceCallAvatar)("header", e)
  }

  function a0(e) {
    let n, l, r, i, o, u, d, h, m, f, x, b = (0, a.c)(41),
      {
        className: v,
        enabled: y,
        growthOrigin: _,
        onClick: C,
        priority: j,
        stageId: S
      } = e,
      T = void 0 === _ ? "top" : _,
      k = void 0 === j ? 300 : j,
      H = void 0 === S ? "chat-nav" : S,
      E = (0, V.useIdentityName)(),
      w = (0, eg.useEffectiveHatchChatRoute)(),
      N = (0, J.useHasBlockingPendingUserConfirmationForChatRoute)(w),
      I = (0, J.useHasBackgroundPendingUserConfirmationForChatRoute)(w);
    b[0] === Symbol.for("react.memo_cache_sentinel") ? (n = {
      eventName: g.HatchClickEvent.STATUS_TOGGLE_CLICK,
      actionTarget: "agent_profile",
      actionType: "click",
      metadata: {
        surface: "chat",
        subsurface: "nav_bar"
      }
    }, b[0] = n) : n = b[0];
    let {
      onClick: R
    } = (0, c.useTrackedClickRef)(n);
    b[1] !== R || b[2] !== C ? (l = () => {
      R(), C?.()
    }, b[1] = R, b[2] = C, b[3] = l) : l = b[3];
    let A = l,
      M = (0, aZ.useIsLiveAvatarTileVisible)(),
      L = (0, aZ.useVoiceCallAvatarSlotsEnabled)(),
      P = void 0 === y || y;
    (0, aW.useRequestHatchAvatarStage)(H, P), b[4] !== M || b[5] !== P || b[6] !== L ? (r = !M && (0, t.jsxs)("div", {
      className: "relative z-10 rounded-full",
      children: [(0, t.jsx)("div", {
        ref: P && L ? aX : void 0,
        className: "size-14 rounded-full"
      }), (0, t.jsx)(aQ.AvatarConcentricRings, {
        size: 56
      })]
    }), b[4] = M, b[5] = P, b[6] = L, b[7] = r) : r = b[7];
    let O = !M && "-mt-1";
    b[8] !== O ? (i = (0, p.cn)("rounded-18 flex w-full min-w-0 origin-top flex-col items-center overflow-hidden px-2.5 pt-1.5 pb-1.5", O), b[8] = O, b[9] = i) : i = b[9], b[10] !== E ? (o = E.length > 0 && (0, t.jsx)("span", {
      className: "text-footnote-medium block w-full min-w-0 truncate text-center",
      title: E,
      children: E
    }), b[10] = E, b[11] = o) : o = b[11];
    let F = E.length > 0;
    b[12] !== F ? (u = (0, t.jsx)(aY.HatchAgentStateLabel, {
      className: "text-caption-2 flex items-center gap-0.5 whitespace-nowrap",
      hasVisibleAgentName: F
    }), b[12] = F, b[13] = u) : u = b[13], b[14] !== o || b[15] !== u || b[16] !== i ? (d = (0, t.jsxs)("div", {
      className: i,
      children: [o, u]
    }), b[14] = o, b[15] = u, b[16] = i, b[17] = d) : d = b[17], b[18] !== d || b[19] !== r ? (h = (0, t.jsxs)("div", {
      className: "pointer-events-none flex w-full min-w-0 flex-col items-center opacity-0",
      children: [r, d]
    }), b[18] = d, b[19] = r, b[20] = h) : h = b[20];
    let B = h,
      D = !M && "min-h-[88px]";
    b[21] !== v || b[22] !== D ? (m = (0, p.cn)("flex w-28 max-w-full flex-col items-center", D, v), b[21] = v, b[22] = D, b[23] = m) : m = b[23];
    let z = m;
    if (!P) {
      let e;
      return b[24] !== B || b[25] !== z ? (e = (0, t.jsx)("div", {
        className: z,
        children: B
      }), b[24] = B, b[25] = z, b[26] = e) : e = b[26], e
    }
    return b[27] !== I || b[28] !== N || b[29] !== E ? (f = function({
      hasBackgroundPendingApproval: e,
      hasBlockingPendingApproval: t,
      name: a
    }) {
      return 0 === a.length ? s.fbs._("Agent avatar", null, {
        hk: "JWba7"
      }) : t || e ? s.fbs._("{agentName}, needs approval", [s.fbs._param("agentName", a)], {
        hk: "4GuuY6"
      }) : a
    }({
      hasBackgroundPendingApproval: I,
      hasBlockingPendingApproval: N,
      name: E
    }), b[27] = I, b[28] = N, b[29] = E, b[30] = f) : f = b[30], b[31] !== M || b[32] !== B || b[33] !== T || b[34] !== A || b[35] !== k || b[36] !== z || b[37] !== P || b[38] !== H || b[39] !== f ? (x = (0, t.jsx)(a$.HatchAvatarStage, {
      ariaLabel: f,
      avatarHidden: M,
      enabled: P,
      className: z,
      growthOrigin: T,
      onClick: A,
      priority: k,
      stageId: H,
      variant: "statusAvatar",
      children: B
    }), b[31] = M, b[32] = B, b[33] = T, b[34] = A, b[35] = k, b[36] = z, b[37] = P, b[38] = H, b[39] = f, b[40] = x) : x = b[40], x
  }
  var a1 = e.i(986044),
    a2 = e.i(972176),
    a3 = e.i(44698),
    a4 = e.i(525594),
    a5 = e.i(870228),
    a8 = e.i(537922),
    a6 = e.i(515226),
    a7 = e.i(665056),
    a9 = e.i(355200);

  function ne(e) {
    let n, l, s, r, i = (0, a.c)(6),
      {
        contentAlign: o,
        unframed: c
      } = e,
      u = void 0 !== c && c;
    return i[0] === Symbol.for("react.memo_cache_sentinel") ? (n = {
      height: a7.HATCH_STICKY_HEADER_HEIGHT
    }, i[0] = n) : n = i[0], i[1] === Symbol.for("react.memo_cache_sentinel") ? (l = (0, t.jsxs)("div", {
      "aria-hidden": "true",
      className: "flex shrink-0 items-center gap-2 px-3",
      style: n,
      children: [(0, t.jsxs)("div", {
        className: "bg-fill-blur-thick shadow-blur-elevation-050 border-separator flex h-9 min-w-0 flex-1 items-center gap-1.5 rounded-full border py-0 ps-2.5 pe-4",
        children: [(0, t.jsx)("div", {
          className: "bg-fill-secondary size-5 shrink-0 rounded-full motion-safe:animate-pulse"
        }), (0, t.jsx)("div", {
          className: "bg-fill-secondary h-4 w-20 rounded motion-safe:animate-pulse"
        })]
      }), (0, t.jsx)("div", {
        className: "bg-fill-secondary me-1 size-6 shrink-0 rounded-full motion-safe:animate-pulse"
      })]
    }), i[1] = l) : l = i[1], i[2] === Symbol.for("react.memo_cache_sentinel") ? (s = (0, t.jsx)("div", {
      className: "min-h-0 min-w-0 flex-1 px-3 pb-3",
      children: (0, t.jsx)(a9.HatchSideChatsListSkeleton, {})
    }), i[2] = s) : s = i[2], i[3] !== o || i[4] !== u ? (r = (0, t.jsxs)(a8.HatchChatSearchContentFrame, {
      contentAlign: o,
      unframed: u,
      onOpenAutoFocus: nt,
      children: [l, s]
    }), i[3] = o, i[4] = u, i[5] = r) : r = i[5], r
  }

  function nt(e) {
    return e.preventDefault()
  }
  let na = () => e.A(572579).then(e => ({
      default: e.HatchChatSearchPopover
    })),
    nn = () => (0, n.lazy)(na);

  function nl(e) {
    let l, r, i, o, u, d, h, m, f, p, x = (0, a.c)(47),
      {
        anchorOnly: b,
        contentAlign: v,
        dataEnabled: _,
        sidePanel: C,
        threadSessionId: j,
        trigger: S
      } = e,
      T = void 0 !== b && b,
      k = void 0 === v ? "end" : v,
      H = void 0 === _ || _,
      E = void 0 !== C && C,
      w = void 0 === j ? null : j,
      [N, I] = (0, n.useState)(!1),
      [R, A] = (0, n.useState)(!1),
      [M, L] = (0, n.useState)(0),
      [P, O] = (0, n.useState)(null),
      V = (0, n.useRef)(null),
      F = (0, a1.useDirection)(),
      {
        Component: B,
        retry: D
      } = (0, a4.useRetryableLazy)(nn, na),
      z = (0, c.useInteractionLoggerWithLazyData)(),
      U = (0, y.useHatchChatThreadLoggingMetadata)();
    x[0] === Symbol.for("react.memo_cache_sentinel") ? (l = () => {
      I(!1), O(null)
    }, x[0] = l) : l = x[0];
    let G = l;
    x[1] === Symbol.for("react.memo_cache_sentinel") ? (r = () => {
      A(!0), L(nr)
    }, x[1] = r) : r = x[1];
    let q = r;
    x[2] !== z || x[3] !== U ? (i = e => {
      e ? q() : O(null), I(e), z({
        eventName: e ? g.HatchClickEvent.CHAT_SEARCH_OPEN : g.HatchClickEvent.CHAT_SEARCH_CLOSE,
        actionTarget: "chat_search_trigger",
        actionType: e ? "click" : "dismiss",
        metadata: {
          surface: "chat",
          subsurface: "search",
          ...U
        }
      })
    }, x[2] = z, x[3] = U, x[4] = i) : i = x[4];
    let K = i;
    x[5] !== N ? (o = () => {
      N ? G() : (q(), I(!0))
    }, x[5] = N, x[6] = o) : o = x[6];
    let Y = (0, n.useEffectEvent)(o);
    x[7] !== N ? (u = e => {
      let t = e instanceof CustomEvent ? e.detail : null;
      O("string" == typeof t?.query ? t.query : ""), N || q(), I(!0)
    }, x[7] = N, x[8] = u) : u = x[8];
    let $ = (0, n.useEffectEvent)(u);
    x[9] !== $ || x[10] !== Y ? (d = () => (window.addEventListener("hatch-toggle-search", Y), window.addEventListener(a6.HATCH_OPEN_CHAT_SEARCH_EVENT, $), () => {
      window.removeEventListener("hatch-toggle-search", Y), window.removeEventListener(a6.HATCH_OPEN_CHAT_SEARCH_EVENT, $)
    }), h = [$, Y], x[9] = $, x[10] = Y, x[11] = d, x[12] = h) : (d = x[11], h = x[12]), (0, n.useEffect)(d, h), x[13] !== B || x[14] !== k || x[15] !== R || x[16] !== H || x[17] !== P || x[18] !== M || x[19] !== N || x[20] !== D || x[21] !== E || x[22] !== w ? (m = R ? (0, t.jsx)(W.EctoErrorBoundary, {
      surface: el.HATCH_SENTRY_SURFACES.CHAT_SEARCH,
      resetKeys: [w],
      fallback: e => {
        let {
          error: a,
          reset: n
        } = e;
        return (0, t.jsx)(a8.HatchChatSearchContentFrame, {
          contentAlign: k,
          unframed: E,
          onOpenAutoFocus: ns,
          children: (0, t.jsx)(a5.HatchContentErrorFallback, {
            error: a,
            alwaysShowRetry: !0,
            onRetry: () => {
              D(), n()
            }
          })
        })
      },
      children: (0, t.jsx)(n.Suspense, {
        fallback: (0, t.jsx)(ne, {
          contentAlign: k,
          unframed: E
        }),
        children: (0, t.jsx)(B, {
          presentation: E ? "side-panel-content" : "popover-content",
          contentAlign: k,
          dataEnabled: H,
          threadSessionId: w,
          popoverContentOpen: N,
          onRequestClose: G,
          pendingSearchQuery: P,
          onPendingSearchQueryConsumed: () => O(null)
        })
      })
    }, M) : null, x[13] = B, x[14] = k, x[15] = R, x[16] = H, x[17] = P, x[18] = M, x[19] = N, x[20] = D, x[21] = E, x[22] = w, x[23] = m) : m = x[23];
    let Q = m;
    if (E) {
      let e, a, n, l, r, i, o;
      x[24] !== S ? (e = (0, t.jsx)(a3.SheetTrigger, {
        asChild: !0,
        children: S
      }), x[24] = S, x[25] = e) : e = x[25];
      let c = "rtl" === F ? "right" : "left";
      return x[26] === Symbol.for("react.memo_cache_sentinel") ? (a = e => {
        e.preventDefault(), V.current?.focus({
          preventScroll: !0
        })
      }, x[26] = a) : a = x[26], x[27] === Symbol.for("react.memo_cache_sentinel") ? (n = (0, t.jsx)(a3.SheetTitle, {
        className: "sr-only",
        children: s.fbs._("Side chats", null, {
          hk: "1TAUlp"
        })
      }), l = s.fbs._("Side chats", null, {
        hk: "1NVw97"
      }), x[27] = n, x[28] = l) : (n = x[27], l = x[28]), x[29] !== Q ? (r = (0, t.jsx)("nav", {
        "aria-label": l,
        className: "flex min-h-0 flex-1 flex-col",
        children: Q
      }), x[29] = Q, x[30] = r) : r = x[30], x[31] !== c || x[32] !== r ? (i = (0, t.jsxs)(a3.SheetContent, {
        ref: V,
        tabIndex: -1,
        side: c,
        showCloseButton: !1,
        className: "bg-bg-primary gap-0 overflow-hidden p-0 !backdrop-blur-none outline-none",
        onOpenAutoFocus: a,
        children: [n, r]
      }), x[31] = c, x[32] = r, x[33] = i) : i = x[33], x[34] !== K || x[35] !== N || x[36] !== e || x[37] !== i ? (o = (0, t.jsxs)(a3.Sheet, {
        open: N,
        onOpenChange: K,
        children: [e, i]
      }), x[34] = K, x[35] = N, x[36] = e, x[37] = i, x[38] = o) : o = x[38], o
    }
    return x[39] !== T || x[40] !== S ? (f = T ? (0, t.jsx)(a2.PopoverAnchor, {
      asChild: !0,
      children: S
    }) : (0, t.jsx)(a2.PopoverTrigger, {
      asChild: !0,
      children: S
    }), x[39] = T, x[40] = S, x[41] = f) : f = x[41], x[42] !== K || x[43] !== Q || x[44] !== N || x[45] !== f ? (p = (0, t.jsxs)(a2.Popover, {
      open: N,
      onOpenChange: K,
      children: [f, Q]
    }), x[42] = K, x[43] = Q, x[44] = N, x[45] = f, x[46] = p) : p = x[46], p
  }

  function ns(e) {
    return e.preventDefault()
  }

  function nr(e) {
    return e + 1
  }
  var ni = e.i(516191),
    no = e.i(778190);
  let nc = (0, n.lazy)(() => e.A(865907).then(e => ({
    default: e.HatchFloatingAudioPlayer
  })));

  function nu() {
    let e, l = (0, a.c)(1),
      s = (0, no.useAudioPlayerTrack)(),
      r = (0, no.useAudioPlayerStatus)();
    return null == s || "idle" === r ? null : (l[0] === Symbol.for("react.memo_cache_sentinel") ? (e = (0, t.jsx)(n.Suspense, {
      fallback: null,
      children: (0, t.jsx)(nc, {})
    }), l[0] = e) : e = l[0], e)
  }
  var nd = e.i(435265),
    nh = e.i(654764),
    nm = e.i(549172),
    nf = e.i(490289),
    np = e.i(537673),
    ng = e.i(767369),
    nx = e.i(62822),
    nb = e.i(337879),
    nv = e.i(685231),
    ny = e.i(169857),
    n_ = e.i(588188),
    nC = e.i(669675),
    nj = e.i(205281),
    nS = e.i(960720),
    nT = e.i(161839),
    nk = e.i(784210),
    nH = e.i(325814);
  nS.default._isSVG = !0, nT.default._isSVG = !0, nk.default._isSVG = !0;
  let nE = {
    surface: "voice_mode",
    screen: "chat_header"
  };

  function nw(e) {
    let l, r, i, o, u, d, m, f, p, x = (0, a.c)(23),
      {
        open: b,
        onDismiss: v,
        onContinue: y
      } = e,
      _ = (0, h.useIsMobileBreakpoint)(),
      C = (0, c.useInteractionLogger)(),
      j = (0, n.useRef)(!1);
    x[0] !== C || x[1] !== v ? (l = e => {
      if (e) return;
      let t = j.current;
      j.current = !1, C({
        eventName: g.HatchClickEvent.VOICE_NUX_DISMISS,
        actionTarget: "voice_nux_sheet",
        actionType: "dismiss",
        metadata: nE
      }), v(t)
    }, x[0] = C, x[1] = v, x[2] = l) : l = x[2];
    let S = l;
    x[3] === Symbol.for("react.memo_cache_sentinel") ? (r = () => {
      j.current = !0
    }, x[3] = r) : r = x[3];
    let T = r;
    x[4] === Symbol.for("react.memo_cache_sentinel") ? (i = e => {
      j.current = e.isTrusted
    }, x[4] = i) : i = x[4];
    let k = i;
    x[5] === Symbol.for("react.memo_cache_sentinel") ? (o = e => {
      j.current = 0 === e.detail
    }, x[5] = o) : o = x[5];
    let H = o;
    x[6] === Symbol.for("react.memo_cache_sentinel") ? (u = s.fbs._("Give your {productName} a voice, then say hello", [s.fbs._param("productName", ej.PRODUCT_BRAND.shortName)], {
      hk: "2PyvBf"
    }), x[6] = u) : u = x[6];
    let E = u;
    x[7] === Symbol.for("react.memo_cache_sentinel") ? (d = s.fbs._("Close", null, {
      hk: "2qq32j"
    }), x[7] = d) : d = x[7];
    let w = d;
    if (_) {
      let e, a, n, l;
      return x[8] === Symbol.for("react.memo_cache_sentinel") ? (e = (0, t.jsx)(a3.SheetClose, {
        onClick: H,
        className: "focus-visible:bg-fill-secondary sr-only rounded-full focus-visible:not-sr-only focus-visible:absolute focus-visible:end-4 focus-visible:top-4 focus-visible:px-3 focus-visible:py-1",
        children: w
      }), x[8] = e) : e = x[8], x[9] === Symbol.for("react.memo_cache_sentinel") ? (a = (0, t.jsx)(a3.SheetTitle, {
        className: "text-title-1-emphasized text-center",
        children: E
      }), x[9] = a) : a = x[9], x[10] !== y ? (n = (0, t.jsxs)(a3.SheetContent, {
        side: "bottom",
        showCloseButton: !1,
        "aria-describedby": void 0,
        onEscapeKeyDown: k,
        className: "flex max-h-[85vh] flex-col",
        children: [e, (0, t.jsx)("div", {
          className: "min-h-0 overflow-y-auto",
          children: (0, t.jsx)(nI, {
            layout: "sheet",
            title: a,
            onContinue: y
          })
        })]
      }), x[10] = y, x[11] = n) : n = x[11], x[12] !== S || x[13] !== b || x[14] !== n ? (l = (0, t.jsx)(a3.Sheet, {
        open: b,
        onOpenChange: S,
        children: n
      }), x[12] = S, x[13] = b, x[14] = n, x[15] = l) : l = x[15], l
    }
    return x[16] === Symbol.for("react.memo_cache_sentinel") ? (m = (0, t.jsx)(nH.DialogTitle, {
      className: "text-title-1-emphasized text-center",
      children: E
    }), x[16] = m) : m = x[16], x[17] !== y ? (f = (0, t.jsx)(nH.DialogContent, {
      "aria-describedby": void 0,
      className: "sm:max-w-md",
      onCloseButtonClick: H,
      onEscapeKeyDown: T,
      children: (0, t.jsx)(nI, {
        layout: "dialog",
        title: m,
        onContinue: y
      })
    }), x[17] = y, x[18] = f) : f = x[18], x[19] !== S || x[20] !== b || x[21] !== f ? (p = (0, t.jsx)(nH.Dialog, {
      open: b,
      onOpenChange: S,
      children: f
    }), x[19] = S, x[20] = b, x[21] = f, x[22] = p) : p = x[22], p
  }
  let nN = {
    sheet: {
      root: "px-5 pt-6 pb-7",
      title: "mt-7 px-2",
      rows: "mt-8 px-4",
      action: "mt-20"
    },
    dialog: {
      root: "",
      title: "mt-6",
      rows: "mt-6",
      action: "mt-6"
    }
  };

  function nI(e) {
    let n, l, s, r, i, o = (0, a.c)(13),
      {
        layout: c,
        title: u,
        onContinue: d
      } = e,
      h = nN[c];
    return o[0] === Symbol.for("react.memo_cache_sentinel") ? (n = (0, t.jsx)("img", {
      alt: "",
      "aria-hidden": "true",
      src: "/images/hatch/share/muse-mark.png",
      className: "size-20 object-contain"
    }), o[0] = n) : n = o[0], o[1] !== h.title || o[2] !== u ? (l = (0, t.jsx)("div", {
      className: h.title,
      children: u
    }), o[1] = h.title, o[2] = u, o[3] = l) : l = o[3], o[4] !== c || o[5] !== d ? (s = (0, t.jsx)(W.EctoErrorBoundary, {
      fallback: nR,
      surface: el.HATCH_SENTRY_SURFACES.VOICE_CALL,
      children: (0, t.jsx)(nA, {
        layout: c,
        onContinue: d
      })
    }), o[4] = c, o[5] = d, o[6] = s) : s = o[6], o[7] !== l || o[8] !== s ? (r = (0, t.jsxs)("div", {
      className: "flex flex-col items-center",
      children: [n, l, s]
    }), o[7] = l, o[8] = s, o[9] = r) : r = o[9], o[10] !== h.root || o[11] !== r ? (i = (0, t.jsx)("div", {
      className: h.root,
      children: r
    }), o[10] = h.root, o[11] = r, o[12] = i) : i = o[12], i
  }

  function nR(e) {
    let {
      error: a,
      reset: n
    } = e;
    return (0, t.jsx)(a5.HatchContentErrorFallback, {
      error: a,
      onRetry: n
    })
  }

  function nA(e) {
    let n, l, r, i, o, d, h, m, f, x, b, v = (0, a.c)(21),
      {
        layout: y,
        onContinue: _
      } = e,
      C = nN[y];
    v[0] === Symbol.for("react.memo_cache_sentinel") ? (n = {
      eventName: Q.HatchImpressionEvent.VOICE_NUX_IMPRESSION,
      actionTarget: "voice_nux_sheet",
      metadata: nE
    }, v[0] = n) : n = v[0];
    let {
      ref: j
    } = (0, c.useTrackedImpressionRef)(n);
    v[1] === Symbol.for("react.memo_cache_sentinel") ? (l = {
      eventName: g.HatchClickEvent.VOICE_NUX_CONTINUE_CLICK,
      actionTarget: "voice_nux_continue_button",
      actionType: "click",
      metadata: nE
    }, v[1] = l) : l = v[1];
    let {
      ref: S,
      onClick: T
    } = (0, c.useTrackedClickRef)(l), k = ej.PRODUCT_BRAND.shortName;
    v[2] !== C.rows ? (r = (0, p.cn)("flex w-full flex-col gap-5", C.rows), v[2] = C.rows, v[3] = r) : r = v[3], v[4] === Symbol.for("react.memo_cache_sentinel") ? (i = (0, t.jsx)(nM, {
      icon: nk.default,
      heading: s.fbs._("Talk it out", null, {
        hk: "3UPrw0"
      }),
      detail: s.fbs._("Ask your {productName} questions and talk through ideas. Forget the keyboard.", [s.fbs._param("productName", k)], {
        hk: "u610Y"
      })
    }), v[4] = i) : i = v[4], v[5] === Symbol.for("react.memo_cache_sentinel") ? (o = (0, t.jsx)(nM, {
      icon: nT.default,
      heading: s.fbs._("Keep the conversation going", null, {
        hk: "2txQsw"
      }),
      detail: s.fbs._("Your {productName} keeps up with you, in and out of the app.", [s.fbs._param("productName", k)], {
        hk: "4l6u4r"
      })
    }), v[5] = o) : o = v[5], v[6] === Symbol.for("react.memo_cache_sentinel") ? (d = (0, t.jsx)(nM, {
      icon: nS.default,
      heading: s.fbs._("Stay in control", null, {
        hk: "4pVoTw"
      }),
      detail: s.fbs._("Your mic stays active during your conversation. Mute or end it anytime.", null, {
        hk: "3pLA2T"
      })
    }), v[6] = d) : d = v[6], v[7] !== r ? (h = (0, t.jsxs)("ul", {
      className: r,
      children: [i, o, d]
    }), v[7] = r, v[8] = h) : h = v[8];
    let H = C.action;
    return v[9] === Symbol.for("react.memo_cache_sentinel") ? (m = s.fbs._("Continue", null, {
      hk: "T9h2i"
    }), v[9] = m) : m = v[9], v[10] !== T || v[11] !== _ ? (f = e => {
      T(), _(e)
    }, v[10] = T, v[11] = _, v[12] = f) : f = v[12], v[13] !== S || v[14] !== C.action || v[15] !== f ? (x = (0, t.jsx)(u.Button, {
      ref: S,
      className: H,
      fullWidth: !0,
      label: m,
      onClick: f,
      radius: "rounded",
      size: "44",
      variant: "primary"
    }), v[13] = S, v[14] = C.action, v[15] = f, v[16] = x) : x = v[16], v[17] !== j || v[18] !== x || v[19] !== h ? (b = (0, t.jsxs)("div", {
      ref: j,
      className: "flex w-full flex-col items-center",
      children: [h, x]
    }), v[17] = j, v[18] = x, v[19] = h, v[20] = b) : b = v[20], b
  }

  function nM(e) {
    let n, l, s, r, i, o = (0, a.c)(12),
      {
        icon: c,
        heading: u,
        detail: d
      } = e;
    return o[0] !== c ? (n = (0, t.jsx)(P.HatchIcon, {
      icon: c,
      size: 24,
      className: "text-text-primary mt-0.5 shrink-0"
    }), o[0] = c, o[1] = n) : n = o[1], o[2] !== u ? (l = (0, t.jsx)("span", {
      className: "text-body-emphasized text-text-primary",
      children: u
    }), o[2] = u, o[3] = l) : l = o[3], o[4] !== d ? (s = (0, t.jsx)("span", {
      className: "text-body text-text-secondary",
      children: d
    }), o[4] = d, o[5] = s) : s = o[5], o[6] !== l || o[7] !== s ? (r = (0, t.jsxs)("div", {
      className: "flex min-w-0 flex-col gap-1",
      children: [l, s]
    }), o[6] = l, o[7] = s, o[8] = r) : r = o[8], o[9] !== n || o[10] !== r ? (i = (0, t.jsxs)("li", {
      className: "flex items-start gap-3 text-start",
      children: [n, r]
    }), o[9] = n, o[10] = r, o[11] = i) : i = o[11], i
  }
  var nL = e.i(726430),
    nP = e.i(829008),
    nO = e.i(515475),
    nV = e.i(860942),
    nF = e.i(109672);
  let nB = (0, eI.createClientLogger)("useStartVoiceCall");
  var nD = e.i(849329),
    nz = e.i(393202),
    nU = e.i(907579),
    nG = e.i(384390),
    nq = e.i(604611);

  function nK(e) {
    return null == e ? void 0 : (0, nF.attachVoiceCallTalkPill)(e)
  }

  function nY() {
    (0, nj.preloadHatchVoiceCall)(), (0, nP.preloadHatchVoiceFloatingCallControl)()
  }

  function nW(e) {
    let n, l = (0, a.c)(1),
      {
        enabled: s
      } = e,
      r = (0, tJ.useHatchVoiceCallingEnabled)();
    return s && r ? (l[0] === Symbol.for("react.memo_cache_sentinel") ? (n = (0, t.jsx)(n$, {}), l[0] = n) : n = l[0], n) : null
  }

  function n$() {
    let e, l, r, i, o, d, h, f, x, b, v, y, _, C, j, S = (0, a.c)(46);
    (0, nL.useActivateHatchVoiceVideo)();
    let T = (0, nj.useOptionalHatchVoiceCall)(),
      k = (0, nL.useOptionalHatchVoiceVideo)(),
      {
        startVoiceCall: H,
        isStartingCall: E
      } = function() {
        let e = (0, nj.useOptionalHatchVoiceCall)(),
          t = (0, nL.useHatchVoiceCallEntry)(),
          a = (0, n.useRef)(e);
        a.current = e;
        let l = (0, n.useRef)(0),
          s = (0, n.useRef)(!1),
          [r, i] = (0, n.useState)(!1),
          o = (0, n.useRef)(!0);
        (0, n.useEffect)(() => (o.current = !0, () => {
          o.current = !1
        }), []);
        let c = e?.status === "connecting" || e?.status === "connected";
        (0, n.useEffect)(() => {
          c && s.current && (l.current += 1, s.current = !1, i(!1))
        }, [c]);
        let u = null == t ? "audio" : t.mediaType;
        return {
          startVoiceCall: (0, n.useCallback)(() => {
            if (null == e || null == u || "standard" !== (0, nO.getServingVmType)() || s.current) return !1;
            l.current += 1;
            let t = l.current;
            return s.current = !0, i(!0), e.startCall(void 0, u).catch(e => {
              nB.error({
                error: e instanceof Error ? e : Error(String(e)),
                tags: (0, el.hatchSentryTags)(el.HATCH_SENTRY_SURFACES.VOICE_CALL)
              }, "Voice call start failed before the call began")
            }).finally(() => {
              if (l.current !== t) return;
              s.current = !1, o.current && i(!1);
              let e = a.current;
              e?.status !== "connecting" && e?.status !== "connected" && ((0, nF.disarmVoiceCallTalkPillHandoff)(), (0, aJ.disarmVoiceCallAvatarHandoff)(), (0, nV.resetVoiceCallControlFocus)())
            }), !0
          }, [u, e]),
          isStartingCall: r
        }
      }(),
      w = (0, nC.useShellPostContentUnlocked)();
    S[0] !== w ? (e = {
      load: w
    }, S[0] = w, S[1] = e) : e = S[1];
    let {
      shouldShowNux: N,
      markNuxSeen: I
    } = function(e) {
      let t, n, l, s, r, i, o = (0, a.c)(21);
      o[0] !== e ? (t = void 0 === e ? {} : e, o[0] = e, o[1] = t) : t = o[1];
      let {
        load: c
      } = t, u = (0, nU.useHatchGatewayFs)(), {
        gatewayScopeKey: d,
        isReady: h
      } = (0, eR.useHatchRpc)(), m = (0, tJ.useHatchVoiceEnabled)(), f = (0, nz.useQueryClient)();
      o[2] !== d ? (n = (0, nG.hatchVoiceNuxQueryKey)(d), o[2] = d, o[3] = n) : n = o[3];
      let p = n;
      o[4] !== u || o[5] !== f || o[6] !== p ? (l = e => {
        let {
          signal: t
        } = e;
        return !0 === f.getQueryData(p) || (0, nG.readPersistedHatchVoiceNuxSeen)(u, t)
      }, o[4] = u, o[5] = f, o[6] = p, o[7] = l) : l = o[7];
      let g = void 0 !== c && c && m && h && null != d;
      o[8] !== p || o[9] !== l || o[10] !== g ? (s = {
        queryKey: p,
        queryFn: l,
        enabled: g,
        staleTime: 1 / 0
      }, o[8] = p, o[9] = l, o[10] = g, o[11] = s) : s = o[11];
      let {
        data: x
      } = (0, nD.useQuery)(s), b = m && !1 === x;
      return o[12] !== u || o[13] !== d || o[14] !== f || o[15] !== p || o[16] !== m ? (r = () => {
        m && null != d && (f.cancelQueries({
          queryKey: p,
          exact: !0
        }), f.setQueryData(p, !0), (0, nG.writeHatchVoiceNuxSeenAwaited)(u))
      }, o[12] = u, o[13] = d, o[14] = f, o[15] = p, o[16] = m, o[17] = r) : r = o[17], o[18] !== b || o[19] !== r ? (i = {
        shouldShowNux: b,
        markNuxSeen: r
      }, o[18] = b, o[19] = r, o[20] = i) : i = o[20], i
    }(e), [R, A] = (0, n.useState)(!1), M = null == (j = (0, nL.useHatchVoiceCallEntry)()) || j.enabled, L = k ? k.readiness : "loading";
    S[2] !== L ? (l = {
      eventName: g.HatchClickEvent.VOICE_START_CALL,
      actionTarget: "start_voice_button",
      actionType: "click",
      metadata: {
        surface: "voice_mode",
        screen: "chat_header",
        live_avatar_readiness: L
      }
    }, S[2] = L, S[3] = l) : l = S[3];
    let {
      ref: P,
      onClick: O
    } = (0, c.useTrackedClickRef)(l);
    S[4] === Symbol.for("react.memo_cache_sentinel") ? (r = {
      eventName: Q.HatchImpressionEvent.VOICE_CALL_BUTTON_IMPRESSION,
      actionTarget: "start_voice_button",
      metadata: {
        surface: "voice_mode",
        screen: "chat_header"
      }
    }, S[4] = r) : r = S[4];
    let {
      ref: V
    } = (0, c.useTrackedImpressionRef)(r), F = (0, n.useRef)(null), B = (0, m.useMergeRefs)(P, V, nK, F), D = (0, nF.useVoiceCallTalkPillConcealed)(), z = T?.status === "connecting" || T?.status === "connected", U = (0, nq.useVoiceCallEntryLabel)(), G = T?.errorDetails?.message ?? null;
    S[5] !== E || S[6] !== U || S[7] !== G ? (i = null == G || E ? U : s.fbs._("{button label}. Last error: {error}", [s.fbs._param("button label", U), s.fbs._param("error", G)], {
      hk: "3zHjT"
    }), S[5] = E, S[6] = U, S[7] = G, S[8] = i) : i = S[8];
    let q = i;
    S[9] !== z || S[10] !== D ? (o = () => {
      !D && !z && (0, nV.consumeVoiceCallTalkFocus)() && F.current?.focus()
    }, d = [z, D], S[9] = z, S[10] = D, S[11] = o, S[12] = d) : (o = S[11], d = S[12]), (0, n.useEffect)(o, d);
    let K = z && T?.activeCallMediaType === "video";
    if (null == T || z && !K) return null;
    S[13] !== H ? (h = function(e) {
      return e ? (0, nV.requestVoiceCallControlFocus)() : (0, nV.resetVoiceCallControlFocus)(), (0, nF.armVoiceCallTalkPillHandoff)(), (0, aJ.armVoiceCallAvatarHandoff)(), !!H() || ((0, nF.disarmVoiceCallTalkPillHandoff)(), (0, aJ.disarmVoiceCallAvatarHandoff)(), (0, nV.resetVoiceCallControlFocus)(), !1)
    }, S[13] = H, S[14] = h) : h = S[14];
    let Y = h,
      W = !M,
      $ = E || void 0,
      Z = !M || E || void 0,
      J = K || void 0,
      X = K || void 0,
      ee = "error" === T.status && !E && "text-text-destructive",
      et = K && "pointer-events-none -translate-y-16",
      ea = D && "invisible opacity-0";
    return S[15] !== ee || S[16] !== et || S[17] !== ea ? (f = (0, p.cn)(nF.VOICE_CALL_ENTRY_BUTTON_SHADOW_CLASS, "max-w-64 max-md:px-2", "disabled:opacity-100 disabled:*:opacity-50", ee, "motion-safe:transition-transform motion-safe:duration-300 motion-safe:ease-out", et, ea), S[15] = ee, S[16] = et, S[17] = ea, S[18] = f) : f = S[18], S[19] !== Y || S[20] !== E || S[21] !== O || S[22] !== I || S[23] !== N ? (x = e => {
      if (!E) {
        if (N) {
          O(), A(!0), I();
          return
        }
        Y(0 === e.detail) && O()
      }
    }, S[19] = Y, S[20] = E, S[21] = O, S[22] = I, S[23] = N, S[24] = x) : x = S[24], S[25] !== q || S[26] !== U || S[27] !== Z || S[28] !== J || S[29] !== X || S[30] !== f || S[31] !== x || S[32] !== W || S[33] !== $ || S[34] !== B ? (b = (0, t.jsx)(u.Button, {
      ref: B,
      "aria-label": q,
      disabled: W,
      "aria-busy": $,
      "aria-disabled": Z,
      "aria-hidden": J,
      inert: X,
      className: f,
      label: U,
      labelClassName: "hidden md:inline",
      leadingIcon: nq.VOICE_CALL_ENTRY_ICON,
      onPointerEnter: nY,
      onPointerDown: nY,
      onFocus: nY,
      onClick: x,
      size: "36",
      variant: "elevated"
    }), S[25] = q, S[26] = U, S[27] = Z, S[28] = J, S[29] = X, S[30] = f, S[31] = x, S[32] = W, S[33] = $, S[34] = B, S[35] = b) : b = S[35], S[36] !== Y ? (v = e => {
      A(!1), Y(e)
    }, y = e => {
      A(!1), Y(0 === e.detail)
    }, S[36] = Y, S[37] = v, S[38] = y) : (v = S[37], y = S[38]), S[39] !== R || S[40] !== v || S[41] !== y ? (_ = (0, t.jsx)(nw, {
      open: R,
      onDismiss: v,
      onContinue: y
    }), S[39] = R, S[40] = v, S[41] = y, S[42] = _) : _ = S[42], S[43] !== b || S[44] !== _ ? (C = (0, t.jsxs)(t.Fragment, {
      children: [b, _]
    }), S[43] = b, S[44] = _, S[45] = C) : C = S[45], C
  }
  var nQ = e.i(94183);
  let nZ = 'path(evenodd, "M0 0h20v20H0z M24 4 A6 6 0 1 1 12 4 A6 6 0 1 1 24 4 Z")',
    nJ = {
      clipPath: nZ,
      WebkitClipPath: nZ
    },
    nX = {
      top: "calc(2px - var(--spacing-0\\.5))"
    };

  function n0(e) {
    let l, r, i, o, u, d, x, b, _, C, j, S, T, k, H, E, w, N, I, R, A, M, L, O, F, B, D, z, U, G = (0, a.c)(94),
      {
        avatarStagesEnabled: q,
        isSplitView: K,
        minified: Y,
        sideChatsPanelPinned: $,
        sideChatsSwitcherRef: Q,
        voiceCallEntryEnabled: Z
      } = e,
      J = void 0 === q || q,
      X = void 0 !== K && K,
      ee = void 0 !== Y && Y,
      et = void 0 !== $ && $,
      {
        togglePanel: ea
      } = (0, aq.useHatchStatusPanel)(),
      {
        registerSideChatsOpenDragFadeElement: en
      } = (0, aK.useHatchDock)(),
      {
        navigate: es
      } = (0, nd.useShellNavigate)(),
      {
        panelType: er,
        match: ei
      } = (0, nh.useActiveRoute)(),
      eo = (0, nv.useShellPrimaryContentSnapshot)(),
      {
        gatewayUrl: ec,
        vmName: eu
      } = (0, eR.useHatchRpc)(),
      ed = (0, nx.useHatchPostContentSafetyReady)(),
      eh = (0, tJ.useHatchVoiceCallingEnabled)();
    G[0] !== ei || G[1] !== ec || G[2] !== ed || G[3] !== eo || G[4] !== eu ? (l = ed && (0, nv.isShellPostContentEligibleForRoute)(eo, ei, ec, eu), G[0] = ei, G[1] = ec, G[2] = ed, G[3] = eo, G[4] = eu, G[5] = l) : l = G[5];
    let em = (0, nb.useLatchedTrue)(l),
      ef = (0, h.useIsMobileBreakpoint)(),
      ep = (0, eg.useRegisterChatRouteOverride)(),
      ex = (0, eg.useClearChatRouteOverride)(),
      eb = (0, n.useRef)(null),
      ev = "chat" === er,
      ey = (0, V.useIdentityName)(),
      e_ = (0, aY.useHatchStatusChromeState)(),
      [eC, ej] = (0, n.useState)(null),
      eS = eh && void 0 !== Z && Z;
    G[6] === Symbol.for("react.memo_cache_sentinel") ? (r = e => {
      let t = null == e ? null : Math.max(0, Math.round(e));
      ej(e => e === t ? e : t)
    }, G[6] = r) : r = G[6];
    let eT = r;
    G[7] === Symbol.for("react.memo_cache_sentinel") ? (i = e => {
      eT(e.width)
    }, G[7] = i) : i = G[7];
    let ek = (0, f.useResizeObserver)(i);
    G[8] !== ek ? (o = e => {
      eT(null == e ? null : e.getBoundingClientRect().width), ek(e)
    }, G[8] = ek, G[9] = o) : o = G[9];
    let eH = o,
      eE = (0, aZ.useVoiceCallAvatarSlotsEnabled)(),
      ew = (0, m.useMergeRefs)(eH, eE ? n1 : void 0),
      eN = (0, nQ.useReportHatchChatColumnWidth)();
    G[10] !== eC || G[11] !== eN ? (u = () => {
      eN(eC)
    }, d = [eC, eN], G[10] = eC, G[11] = eN, G[12] = u, G[13] = d) : (u = G[12], d = G[13]), (0, n.useEffect)(u, d), G[14] !== eN ? (x = () => () => {
      eN(null)
    }, b = [eN], G[14] = eN, G[15] = x, G[16] = b) : (x = G[15], b = G[16]), (0, n.useEffect)(x, b), G[17] !== ex || G[18] !== ev ? (_ = () => {
      ev && ex?.()
    }, C = [ev, ex], G[17] = ex, G[18] = ev, G[19] = _, G[20] = C) : (_ = G[19], C = G[20]), (0, n.useEffect)(_, C);
    let eI = (0, v.useChatThreadTitle)(),
      eA = (0, eg.useEffectiveHatchChatRoute)(),
      {
        data: eM
      } = (0, nf.useHatchThreadSessionsQuery)(em);
    G[21] !== eM ? (j = void 0 === eM ? [] : eM, G[21] = eM, G[22] = j) : j = G[22];
    let eL = j,
      eP = eA?.kind === "thread" ? eA : null,
      eO = eP?.sessionId ?? null,
      {
        data: eV
      } = (0, np.useHatchThreadSessionQuery)(eO, em),
      eF = void 0 === eV ? null : eV;
    G[23] !== eF ? (S = (0, ng.isChannelProvider)(eF?.channel) ? eF.channel : null, G[23] = eF, G[24] = S) : S = G[24];
    let eB = S;
    if (G[25] !== eO || G[26] !== eA?.kind || G[27] !== eL) {
      let e;
      G[29] !== eO || G[30] !== eA?.kind ? (e = e => !0 !== e.archived && (e.unread_count ?? 0) > 0 && (eA?.kind === "main" ? !e.is_primary : eA?.kind !== "thread" || e.session_id !== eO), G[29] = eO, G[30] = eA?.kind, G[31] = e) : e = G[31], T = eL.some(e), G[25] = eO, G[26] = eA?.kind, G[27] = eL, G[28] = T
    } else T = G[28];
    let eD = T,
      ez = null != eP && null != eC && eC < 720,
      eU = !(et && null != eC && eC >= 720) && (eA?.kind === "draft" || eA?.kind === "thread" || eA?.kind === "invalid_thread"),
      eG = !et && (eA?.kind === "main" || eA?.kind === "thread"),
      eq = !et && eA?.kind === "draft";
    G[32] !== eA?.kind || G[33] !== eI ? (k = eA?.kind === "thread" ? eI ?? s.fbs._("Thread", null, {
      hk: "2ScGuX"
    }) : s.fbs._("Chats", null, {
      hk: "otkNY"
    }), G[32] = eA?.kind, G[33] = eI, G[34] = k) : k = G[34];
    let eK = k,
      eY = ef && eA?.kind === "main" || X && eA?.kind === "thread",
      eW = X && null != eP || !(eU && !ev) && !ez,
      e$ = (0, aZ.useIsLiveAvatarTileVisible)(),
      eQ = eW && e$,
      eZ = eW ? "calc(50% - 92px)" : "calc(100% - 160px)";
    G[35] !== eA ? (H = (0, y.hatchChatThreadLoggingMetadata)(eA), G[35] = eA, G[36] = H) : H = G[36], G[37] !== H ? (E = {
      eventName: g.HatchClickEvent.CHAT_THREAD_BACK_CLICK,
      actionTarget: "chat_thread_back",
      actionType: "click",
      metadata: {
        surface: "chat",
        subsurface: "header",
        ...H
      }
    }, G[37] = H, G[38] = E) : E = G[38];
    let {
      ref: eJ,
      onClick: eX
    } = (0, c.useTrackedClickRef)(E);
    G[39] !== eA ? (w = (0, y.hatchChatThreadLoggingMetadata)(eA), G[39] = eA, G[40] = w) : w = G[40], G[41] !== w ? (N = {
      eventName: g.HatchClickEvent.CHAT_THREADS_OPEN_CLICK,
      actionTarget: "chat_header_open_side_chats",
      actionType: "click",
      metadata: {
        surface: "chat",
        subsurface: "header",
        source: "chat_header",
        ...w
      }
    }, G[41] = w, G[42] = N) : N = G[42];
    let {
      ref: e0,
      onClick: e1
    } = (0, c.useTrackedClickRef)(N), e2 = (0, n.useRef)(null), e3 = (0, m.useMergeRefs)(e0, e2, en, Q);
    G[43] === Symbol.for("react.memo_cache_sentinel") ? (I = () => {
      let e = () => e2.current?.focus();
      return window.addEventListener(ni.HATCH_FOCUS_SIDE_CHATS_TRIGGER_EVENT, e), () => window.removeEventListener(ni.HATCH_FOCUS_SIDE_CHATS_TRIGGER_EVENT, e)
    }, R = [], G[43] = I, G[44] = R) : (I = G[43], R = G[44]), (0, n.useEffect)(I, R), G[45] === Symbol.for("react.memo_cache_sentinel") ? (A = (0, t.jsx)("div", {
      className: "pointer-events-none absolute inset-x-0 top-0 -z-10 h-28",
      "data-testid": "hatch-chat-nav-fade",
      style: {
        background: "linear-gradient(to bottom, var(--hatch-chat-nav-fade-bg, var(--hatch-panel-bg)), transparent)"
      }
    }), G[45] = A) : A = G[45], G[46] !== eB || G[47] !== eP?.sessionId || G[48] !== eJ || G[49] !== ex || G[50] !== eD || G[51] !== eY || G[52] !== ev || G[53] !== ef || G[54] !== eZ || G[55] !== eX || G[56] !== e1 || G[57] !== e3 || G[58] !== es || G[59] !== ep || G[60] !== em || G[61] !== eU || G[62] !== eq || G[63] !== eG || G[64] !== eK || G[65] !== eI ? (M = (eU || eG || eq) && (0, t.jsxs)("div", {
      "data-testid": "hatch-chat-leading-controls",
      className: "pointer-events-auto absolute start-3 top-0 flex h-[60px] items-center gap-2",
      style: {
        maxWidth: eZ
      },
      children: [eU && (0, t.jsx)(ac.IconButton, {
        ref: eJ,
        icon: aD,
        size: "32-24",
        variant: "elevated",
        label: s.fbs._("Back to main chat", null, {
          hk: "4wj6HV"
        }),
        onClick: () => {
          eX(), (0, nm.runHatchViewTransition)({
            type: "hatch-mobile-pop",
            allowMobile: !0,
            update: () => {
              ex?.(), ev || null == ep ? es("/") : (null == eb.current && (eb.current = Symbol("navbar-back")), ep(eb.current, {
                kind: "main"
              }))
            }
          })
        }
      }), eG && (0, t.jsx)(nl, {
        contentAlign: "start",
        threadSessionId: eP?.sessionId ?? null,
        dataEnabled: em,
        anchorOnly: !ef,
        sidePanel: ef,
        trigger: (0, t.jsxs)("button", {
          ref: e3,
          type: "button",
          "data-testid": "hatch-chat-switcher-trigger",
          onClick: () => {
            e1(), ef || window.dispatchEvent(new Event("hatch-toggle-side-chats"))
          },
          className: (0, p.cn)("bg-fill-blur-thick shadow-blur-elevation-01 text-body-medium text-text-primary flex h-9 max-w-[320px] min-w-0 cursor-pointer items-center gap-2 rounded-full py-0 ps-3 pe-3.5", eY && "size-9 justify-center p-0"),
          children: [(0, t.jsxs)("span", {
            className: "relative flex shrink-0 items-center",
            children: [(0, t.jsx)("span", {
              "data-testid": "hatch-chat-switcher-icon-knockout",
              className: "flex size-5 shrink-0 items-center justify-center",
              style: eD ? nJ : void 0,
              children: null == eB ? (0, t.jsx)(P.HatchIcon, {
                icon: aU,
                size: 20,
                iconSize: 20,
                "data-testid": "hatch-chat-switcher-navigation-icon",
                className: "text-text-secondary shrink-0",
                "aria-hidden": "true"
              }) : "messenger" === eB ? (0, t.jsx)(P.HatchIcon, {
                icon: az.default,
                size: 20,
                iconSize: 20,
                "data-testid": "hatch-chat-switcher-messenger-icon",
                className: "text-text-secondary shrink-0",
                "aria-hidden": "true"
              }) : "whatsapp" === eB ? (0, t.jsx)(P.HatchIcon, {
                icon: aG.default,
                size: 20,
                iconSize: 20,
                "data-testid": "hatch-chat-switcher-whatsapp-icon",
                className: "text-text-secondary shrink-0",
                "aria-hidden": "true"
              }) : (0, t.jsx)(ny.HatchChannelLogo, {
                channel: eB,
                size: "sm"
              })
            }), eD && (0, t.jsx)("span", {
              "data-testid": "hatch-chat-switcher-unread-indicator",
              className: "bg-fill-blue absolute -end-0.5 size-2 rounded-full",
              style: nX,
              "aria-hidden": "true"
            })]
          }), (0, t.jsxs)("span", {
            className: (0, p.cn)("flex min-w-0 flex-col", eY && "sr-only"),
            title: eK,
            children: [(0, t.jsx)("span", {
              className: "block min-w-0 truncate",
              children: eK
            }), null != eB && (0, t.jsx)("span", {
              className: "sr-only",
              children: s.fbt._("View only", null, {
                hk: "4xvU5D"
              })
            })]
          }), eD && (0, t.jsx)("span", {
            className: "sr-only",
            children: s.fbs._("Unread chats", null, {
              hk: "1kWRN"
            })
          }), (0, t.jsx)("span", {
            className: "sr-only",
            children: s.fbs._("Open chat and side chats", null, {
              hk: "z80hn"
            })
          })]
        })
      }), eq && (0, t.jsx)("div", {
        className: "bg-fill-blur-thick shadow-blur-elevation-01 text-subheadline-medium text-text-primary min-w-0 cursor-default rounded-full px-4 py-2",
        children: (0, t.jsx)("span", {
          className: "block truncate",
          title: eI ?? void 0,
          children: eI ?? s.fbs._("New side chat", null, {
            hk: "3sDm0P"
          })
        })
      })]
    }), G[46] = eB, G[47] = eP?.sessionId, G[48] = eJ, G[49] = ex, G[50] = eD, G[51] = eY, G[52] = ev, G[53] = ef, G[54] = eZ, G[55] = eX, G[56] = e1, G[57] = e3, G[58] = es, G[59] = ep, G[60] = em, G[61] = eU, G[62] = eq, G[63] = eG, G[64] = eK, G[65] = eI, G[66] = M) : M = G[66], G[67] !== eA?.kind || G[68] !== em || G[69] !== eS ? (L = eS ? (0, t.jsxs)("div", {
      className: "pointer-events-auto absolute end-3 top-0 flex h-15 items-center gap-2",
      "data-testid": "hatch-chat-trailing-controls",
      children: [(0, t.jsx)(W.EctoErrorBoundary, {
        surface: el.HATCH_SENTRY_SURFACES.VOICE_CALL,
        children: (0, t.jsx)(nW, {
          enabled: !0
        })
      }), eA?.kind === "main" && (0, t.jsx)(n_.HatchInviteButton, {
        dataEnabled: em,
        inline: !0
      })]
    }) : eA?.kind === "main" && (0, t.jsx)(n_.HatchInviteButton, {
      dataEnabled: em
    }), G[67] = eA?.kind, G[68] = em, G[69] = eS, G[70] = L) : L = G[70];
    let e4 = eQ ? "h-15 items-center" : "items-start pt-2";
    G[71] !== e4 ? (O = (0, p.cn)("@container relative flex justify-center px-2", e4), G[71] = e4, G[72] = O) : O = G[72];
    let e5 = eQ ? "header-row" : "below-header";
    return G[73] !== J || G[74] !== eQ || G[75] !== ee || G[76] !== eW || G[77] !== ea ? (F = eW && (0, t.jsx)(a0, {
      enabled: J,
      onClick: ea,
      className: (0, p.cn)("pointer-events-auto", !eQ && (ee ? "-mt-7" : "mt-1"))
    }), G[73] = J, G[74] = eQ, G[75] = ee, G[76] = eW, G[77] = ea, G[78] = F) : F = G[78], G[79] !== ey || G[80] !== eW || G[81] !== e_ ? (B = !eW && (0, t.jsxs)(t.Fragment, {
      children: ["connected" !== e_ ? (0, t.jsx)("div", {
        className: "bg-fill-blur-thick shadow-blur-elevation-01 pointer-events-auto mt-2 rounded-full px-3 py-2",
        children: (0, t.jsx)(aY.HatchAgentStateLabel, {
          className: "text-caption-2 flex items-center gap-1 whitespace-nowrap",
          hasVisibleAgentName: !1
        })
      }) : null, (0, t.jsx)(aY.HatchAgentConnectionStatusAnnouncer, {
        name: ey
      })]
    }), G[79] = ey, G[80] = eW, G[81] = e_, G[82] = B) : B = G[82], G[83] === Symbol.for("react.memo_cache_sentinel") ? (D = (0, t.jsx)("div", {
      className: "pointer-events-none absolute inset-x-0 top-full flex justify-center px-3",
      children: (0, t.jsx)(W.EctoErrorBoundary, {
        surface: "hatch.chat.message.audio",
        children: (0, t.jsx)("div", {
          className: "pointer-events-auto w-full max-w-md",
          children: (0, t.jsx)(nu, {})
        })
      })
    }), G[83] = D) : D = G[83], G[84] !== ew || G[85] !== O || G[86] !== e5 || G[87] !== F || G[88] !== B ? (z = (0, t.jsxs)(tX.HatchChatColumn, {
      ref: ew,
      className: O,
      "data-hatch-chat-nav-agent-profile-placement": e5,
      children: [F, B, D]
    }), G[84] = ew, G[85] = O, G[86] = e5, G[87] = F, G[88] = B, G[89] = z) : z = G[89], G[90] !== M || G[91] !== L || G[92] !== z ? (U = (0, t.jsxs)("div", {
      className: "pointer-events-none absolute inset-x-0 top-0 z-10 h-44",
      "data-hatch-vt-pane": "chat-toolbar",
      children: [A, M, L, z]
    }), G[90] = M, G[91] = L, G[92] = z, G[93] = U) : U = G[93], U
  }

  function n1(e) {
    return null == e ? void 0 : (0, aJ.attachVoiceCallChatColumn)(e)
  }
  var n2 = e.i(999127),
    n3 = e.i(255772),
    n4 = e.i(611906);

  function n5(e) {
    let n, l = (0, a.c)(3),
      {
        activeHistoryError: s,
        activeHistoryFailed: r,
        activeHistoryReady: i,
        hasProvisionalCachedHistory: o,
        hasMessages: c,
        isCheckingPersistentCache: u,
        pathname: d,
        retryActiveHistory: h,
        unavailable: m
      } = e;
    return ((0, nv.useReportShellPrimaryContent)("chat", m ? "unavailable" : r ? o ? c ? "content" : "empty" : u ? null : "error" : i ? c ? "content" : "empty" : null, d), m || null == s || o || u) ? null : (l[0] !== s || l[1] !== h ? (n = (0, t.jsx)("div", {
      className: "bg-bg-primary dark:bg-primary absolute inset-0 z-20",
      children: (0, t.jsx)(a5.HatchContentErrorFallback, {
        error: s,
        onRetry: h,
        alwaysShowRetry: !0
      })
    }), l[0] = s, l[1] = h, l[2] = n) : n = l[2], n)
  }

  function n8(e) {
    let s, r, i, o, u, d, h, m, f, p, g, b, _, C, j, S, T, k, H = (0, a.c)(55),
      {
        avatarStagesEnabled: E,
        children: w,
        navAvatarStagesEnabled: N,
        sideChatsPanelPinned: I,
        sideChatsSwitcherRef: R,
        threadLayout: A,
        voiceCallEntryEnabled: M
      } = e,
      L = void 0 !== I && I,
      P = void 0 === A ? td.HATCH_FULL_THREAD_LAYOUT : A,
      O = void 0 !== M && M,
      V = (0, tq.useHatchConnection)(),
      F = (0, ev.useHatchServerData)(),
      B = (0, l.useLocation)(),
      D = (0, eg.useEffectiveHatchChatRoute)();
    H[0] !== B.pathname ? (s = (0, tZ.parseHatchChatRoute)(B.pathname), H[0] = B.pathname, H[1] = s) : s = H[1];
    let z = s;
    H[2] !== D ? (r = (0, tZ.getHatchChatRouteKey)(D) ?? "main", H[2] = D, H[3] = r) : r = H[3];
    let U = r;
    H[4] !== D ? (i = (0, y.hatchChatScreenForRoute)(D), H[4] = D, H[5] = i) : i = H[5];
    let G = i,
      {
        activeHistoryError: q,
        activeHistoryFailed: K,
        activeHistoryReady: Y,
        retryActiveHistory: W
      } = (0, x.useHatchChatReadiness)(),
      $ = (0, v.useChatMessageIds)(),
      Z = (0, v.useChatHasProvisionalCachedHistory)(),
      J = (0, v.useChatIsCheckingPersistentCache)(),
      X = !F.isLoading && "unavailable" === V.phase && "no_vm" === V.reason,
      ee = N ?? (void 0 === E || E);
    H[6] !== B.pathname ? (o = (0, n4.panelFromPathname)(B.pathname), H[6] = B.pathname, H[7] = o) : o = H[7];
    let et = "chat" === o;
    (0, n2.useSeedComposerForFreshGoalThread)(z), H[8] !== G ? (u = {
      eventName: Q.HatchImpressionEvent.CHAT_PAGE_IMPRESSION,
      actionTarget: "chat_page",
      metadata: {
        surface: "chat",
        screen: G
      }
    }, H[8] = G, H[9] = u) : u = H[9], H[10] === Symbol.for("react.memo_cache_sentinel") ? (d = {
      threshold: "50%"
    }, H[10] = d) : d = H[10];
    let {
      ref: ea
    } = (0, c.useTrackedImpressionRef)(u, d);
    H[11] !== D ? (h = (0, tH.hatchLinkEntryPointAttrs)((0, y.hatchChatLinkEntryPointMetadata)((0, y.hatchChatThreadLoggingMetadata)(D), {
      entryPoint: "chat"
    })), H[11] = D, H[12] = h) : h = H[12];
    let en = h;
    H[13] !== D?.kind ? (m = () => {
      let e = window.requestAnimationFrame(() => {
        D?.kind === "draft" && window.dispatchEvent(new Event("hatch-focus-composer"))
      });
      return () => {
        window.cancelAnimationFrame(e)
      }
    }, H[13] = D?.kind, H[14] = m) : m = H[14], H[15] !== D || H[16] !== U ? (f = [D, U], H[15] = D, H[16] = U, H[17] = f) : f = H[17], (0, n.useEffect)(m, f);
    let el = $.length > 0;
    H[18] !== q || H[19] !== K || H[20] !== Y || H[21] !== Z || H[22] !== J || H[23] !== B.pathname || H[24] !== W || H[25] !== X || H[26] !== el ? (p = (0, t.jsx)(n5, {
      activeHistoryError: q,
      activeHistoryFailed: K,
      activeHistoryReady: Y,
      hasProvisionalCachedHistory: Z,
      hasMessages: el,
      isCheckingPersistentCache: J,
      pathname: B.pathname,
      retryActiveHistory: W,
      unavailable: X
    }), H[18] = q, H[19] = K, H[20] = Y, H[21] = Z, H[22] = J, H[23] = B.pathname, H[24] = W, H[25] = X, H[26] = el, H[27] = p) : p = H[27], H[28] !== et || H[29] !== G ? (g = et && (0, t.jsx)(n6, {
      screen: G
    }), H[28] = et, H[29] = G, H[30] = g) : g = H[30];
    let es = "split" === P.kind;
    return H[31] !== ee || H[32] !== L || H[33] !== R || H[34] !== es || H[35] !== O ? (b = (0, t.jsx)(n0, {
      avatarStagesEnabled: ee,
      isSplitView: es,
      sideChatsPanelPinned: L,
      sideChatsSwitcherRef: R,
      voiceCallEntryEnabled: O
    }), H[31] = ee, H[32] = L, H[33] = R, H[34] = es, H[35] = O, H[36] = b) : b = H[36], H[37] === Symbol.for("react.memo_cache_sentinel") ? (_ = {
      backgroundColor: "var(--hatch-panel-bg, var(--color-bg-primary))"
    }, H[37] = _) : _ = H[37], H[38] !== w ? (C = w ?? (0, t.jsx)(t7, {}), H[38] = w, H[39] = C) : C = H[39], H[40] !== C || H[41] !== P ? (j = (0, t.jsx)(aF, {
      messageContent: C,
      threadLayout: P
    }), H[40] = C, H[41] = P, H[42] = j) : j = H[42], H[43] !== U || H[44] !== j ? (S = (0, t.jsx)("div", {
      className: "absolute inset-0 flex flex-col",
      "data-hatch-route-key": U,
      style: _,
      children: j
    }, U), H[43] = U, H[44] = j, H[45] = S) : S = H[45], H[46] !== b || H[47] !== S ? (T = (0, t.jsx)("div", {
      className: "relative flex min-h-0 min-w-0 flex-1 flex-col overflow-hidden",
      children: (0, t.jsxs)("div", {
        className: "absolute inset-0 overflow-hidden",
        children: [b, S]
      })
    }), H[46] = b, H[47] = S, H[48] = T) : T = H[48], H[49] !== en || H[50] !== ea || H[51] !== p || H[52] !== g || H[53] !== T ? (k = (0, t.jsxs)("div", {
      ref: ea,
      className: "relative flex min-h-0 flex-1 flex-row",
      ...en,
      children: [p, g, T]
    }), H[49] = en, H[50] = ea, H[51] = p, H[52] = g, H[53] = T, H[54] = k) : k = H[54], k
  }

  function n6(e) {
    let t, n = (0, a.c)(2),
      {
        screen: l
      } = e;
    return n[0] !== l ? (t = {
      metadata: {
        surface: "chat",
        screen: l
      }
    }, n[0] = l, n[1] = t) : t = n[1], (0, c.useTimeSpent)(n3.HatchTimeSpentEvent.CHAT_PAGE, "chat_page", t), null
  }
  e.s(["HatchChatRoute", 0, function(e) {
    let n, l, s = (0, a.c)(10);
    s[0] !== e ? (n = void 0 === e ? {} : e, s[0] = e, s[1] = n) : n = s[1];
    let {
      avatarStagesEnabled: r,
      children: i,
      navAvatarStagesEnabled: o,
      sideChatsPanelPinned: c,
      sideChatsSwitcherRef: u,
      threadLayout: d,
      voiceCallEntryEnabled: h
    } = n, m = void 0 === r || r, f = void 0 !== c && c, p = void 0 === d ? td.HATCH_FULL_THREAD_LAYOUT : d, g = void 0 !== h && h;
    return s[2] !== m || s[3] !== i || s[4] !== o || s[5] !== f || s[6] !== u || s[7] !== p || s[8] !== g ? (l = (0, t.jsx)(n8, {
      avatarStagesEnabled: m,
      navAvatarStagesEnabled: o,
      sideChatsPanelPinned: f,
      sideChatsSwitcherRef: u,
      threadLayout: p,
      voiceCallEntryEnabled: g,
      children: i
    }), s[2] = m, s[3] = i, s[4] = o, s[5] = f, s[6] = u, s[7] = p, s[8] = g, s[9] = l) : l = s[9], l
  }, "HatchChatRouteContent", 0, n8], 282560)
}]);

//# debugId=47714dee-3541-dbf1-a283-b7678779a903
//# sourceMappingURL=2lw548l2f2j15.js.map