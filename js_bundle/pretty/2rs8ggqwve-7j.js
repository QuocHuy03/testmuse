;
! function() {
  try {
    var e = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof global ? global : "undefined" != typeof window ? window : "undefined" != typeof self ? self : {},
      n = (new e.Error).stack;
    n && ((e._debugIds || (e._debugIds = {}))[n] = "05307735-d27f-e7c4-5880-9acd572224b5")
  } catch (e) {}
}();
(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push(["object" == typeof document ? document.currentScript : void 0, 646361, _ => {
  "use strict";
  var e = _.i(984416),
    i = _.i(722099),
    s = _.i(374785);

  function I(_) {
    let I, S, n, r, o, E, t, O, N, a = (0, i.c)(43);
    if (a[0] !== _ ? ({
        icon: I,
        size: o,
        iconSize: n,
        className: S,
        style: E,
        ...r
      } = _, a[0] = _, a[1] = I, a[2] = S, a[3] = n, a[4] = r, a[5] = o, a[6] = E) : (I = a[1], S = a[2], n = a[3], r = a[4], o = a[5], E = a[6]), (I._viewBox ?? 0) > 24) {
      let _, i, t, O = n ?? o,
        N = I;
      return a[7] !== S ? (_ = (0, s.cn)("inline-flex shrink-0 items-center justify-center", S), a[7] = S, a[8] = _) : _ = a[8], a[9] !== N || a[10] !== O ? (i = (0, e.jsx)(N, {
        size: O,
        width: O,
        height: O
      }), a[9] = N, a[10] = O, a[11] = i) : i = a[11], a[12] !== r || a[13] !== E || a[14] !== _ || a[15] !== i ? (t = (0, e.jsx)("span", {
        className: _,
        style: E,
        ...r,
        children: i
      }), a[12] = r, a[13] = E, a[14] = _, a[15] = i, a[16] = t) : t = a[16], t
    }
    if (!0 === I._isSVG) {
      let _, i, t, O, N;
      a[17] !== n || a[18] !== o ? (_ = n ?? Math.round(.75 * o), a[17] = n, a[18] = o, a[19] = _) : _ = a[19];
      let R = _;
      a[20] !== o || a[21] !== E ? (i = {
        width: o,
        height: o,
        ...E
      }, a[20] = o, a[21] = E, a[22] = i) : i = a[22];
      let p = i;
      return a[23] !== S ? (t = (0, s.cn)("inline-flex shrink-0 items-center justify-center", S), a[23] = S, a[24] = t) : t = a[24], a[25] !== I || a[26] !== R ? (O = (0, e.jsx)(I, {
        width: R,
        height: R
      }), a[25] = I, a[26] = R, a[27] = O) : O = a[27], a[28] !== p || a[29] !== r || a[30] !== t || a[31] !== O ? (N = (0, e.jsx)("span", {
        className: t,
        style: p,
        ...r,
        children: O
      }), a[28] = p, a[29] = r, a[30] = t, a[31] = O, a[32] = N) : N = a[32], N
    }
    let R = n ?? o,
      p = I;
    return a[33] !== S ? (t = (0, s.cn)("inline-flex shrink-0 items-center justify-center", S), a[33] = S, a[34] = t) : t = a[34], a[35] !== p || a[36] !== R ? (O = (0, e.jsx)(p, {
      size: R,
      width: R,
      height: R
    }), a[35] = p, a[36] = R, a[37] = O) : O = a[37], a[38] !== r || a[39] !== E || a[40] !== t || a[41] !== O ? (N = (0, e.jsx)("span", {
      className: t,
      style: E,
      ...r,
      children: O
    }), a[38] = r, a[39] = E, a[40] = t, a[41] = O, a[42] = N) : N = a[42], N
  }
  I.displayName = "HatchIcon", _.s(["HatchIcon", 0, I])
}, 374785, _ => {
  "use strict";
  var e = _.i(7284);
  let i = (0, _.i(479656).extendTailwindMerge)({
    extend: {
      theme: {
        text: ["landing-body", "landing-body-medium", "landing-section-heading", "landing-hero-display", "xs-landing-display-medium", "sm-landing-display-medium", "platform-hero", "platform-landing-headline-lead", "platform-intro-heading", "platform-heading", "platform-docs-title", "platform-docs-body", "platform-confirmation", "platform-label", "platform-back", "platform-tab", "platform-tab-selected", "md-landing-display-medium", "lg-landing-display-medium", "lg-title-1-light", "lg-title-1", "lg-title-1-medium", "lg-title-1-emphasized", "lg-title-2-light", "lg-title-2", "lg-title-2-medium", "lg-title-2-emphasized", "lg-title-3-light", "lg-title-3", "lg-title-3-emphasized", "title-1", "title-1-medium", "title-1-emphasized", "title-2", "title-2-medium", "title-2-emphasized", "title-2-bold", "title-3", "title-3-medium", "title-3-emphasized", "hatch-idea-share-title", "hatch-artifact-share-title", "hatch-invite-code", "hatch-invite-reward-title", "response", "response-medium", "response-title-2-emphasized", "response-title-3-emphasized", "response-emphasized", "body", "body-medium", "body-emphasized", "body-status", "body-status-medium", "body-status-emphasized", "subheadline", "subheadline-large", "subheadline-large-medium", "subheadline-medium", "subheadline-emphasized", "footnote", "footnote-medium", "footnote-emphasized", "caption-1", "caption-1-emphasized", "caption-2", "caption-2-emphasized", "caption-2-medium", "citation-medium"]
      }
    }
  });
  _.s(["cn", 0, function(..._) {
    return i((0, e.clsx)(_))
  }])
}, 2412, _ => {
  "use strict";
  let e = new TextEncoder,
    i = new TextDecoder,
    s = [],
    I = 0,
    S = 0;

  function n(_) {
    return Array.from(_.replace(/\bBearer\s+[A-Za-z0-9._~-]+/gi, "Bearer [redacted]").replace(/\b(token|auth_token|access_token|api_key|password|secret)=([^&\s]+)/gi, "$1=[redacted]").replace(/https?:\/\/\S+/gi, "[url redacted]").replace(/\b[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}\b/gi, "[id redacted]"), _ => {
      let e = _.codePointAt(0) ?? 0;
      return e <= 31 || 127 === e ? " " : _
    }).join("").trim()
  }
  _.s(["clearRecentClientLogs", 0, function() {
    s.length = 0, I = 0, S = 0
  }, "getRecentClientLogSnapshot", 0, function() {
    if (0 === s.length) return null;
    let _ = (S > 0 ? `[${S} older web log entries omitted]
` : "") + s.map(_ => _.line).join("");
    return {
      filename: "hatch_web_logs.txt",
      text: _,
      byteLength: e.encode(_).byteLength,
      omittedEntries: S
    }
  }, "recordClientLogMessage", 0, function(_, r, o) {
    let E = n(r) || "root",
      t = n(o) || "Structured log event",
      O = `${new Date().toISOString()} [${_.toUpperCase()}] [${E}] `,
      N = function(_) {
        let s = e.encode(_);
        if (s.byteLength <= 2048) return _;
        let I = "…\n",
          S = 2048 - e.encode(I).byteLength;
        for (; S > 0 && (192 & s[S]) == 128;) S -= 1;
        return `${i.decode(s.subarray(0,S))}${I}`
      }(`${O}${t}
`),
      a = e.encode(N).byteLength;
    for (s.push({
        line: N,
        byteLength: a
      }), I += a; I > 262016 && s.length > 0;) {
      let _ = s.shift();
      if (null == _) break;
      I -= _.byteLength, S += 1
    }
  }])
}, 359783, _ => {
  "use strict";
  var e = _.i(183663),
    i = _.i(813158),
    s = _.i(863641),
    I = _.i(2412),
    S = _.i(699591);
  let n = {
      debug: 0,
      info: 1,
      warn: 2,
      error: 3
    },
    r = e.default.env.NEXT_PUBLIC_LOG_LEVEL ?? "error",
    o = e.default.env.NEXT_PUBLIC_LOG_MODULES,
    E = new Map;
  if (o)
    for (let _ of o.split(",")) {
      let [e, i] = _.split(":").map(_ => _.trim());
      e && i ? E.set(e, i) : e && E.set(e, "debug")
    }

  function t(_, e) {
    let i = e && E.has(e) ? E.get(e) : r;
    return n[_] >= n[i]
  }

  function O(_, e) {
    return "string" == typeof _ ? _ : e ?? "Structured log event"
  }
  _.s(["createClientLogger", 0, function(_) {
    let e = `[${_}]`;
    return {
      retainForBugReport: (e, i) => {
        (0, I.recordClientLogMessage)(e, _, "string" == typeof i ? i : "Structured log event")
      },
      debug: (e, i) => {
        (0, I.recordClientLogMessage)("debug", _, O(e, i)), t("debug", _)
      },
      info: (e, i) => {
        (0, I.recordClientLogMessage)("info", _, O(e, i)), t("info", _)
      },
      warn: (e, i) => {
        (0, I.recordClientLogMessage)("warn", _, O(e, i)), t("warn", _)
      },
      error: (n, r) => {
        ((0, I.recordClientLogMessage)("error", _, O(n, r)), t("error", _)) && (! function(_, e, I) {
          let n = "string" == typeof e ? e : I ?? "Error",
            r = "string" == typeof e ? void 0 : e,
            o = r?.tags != null && "object" == typeof r.tags ? r.tags : void 0,
            {
              surface: E,
              additionalTags: t
            } = (0, s.splitHatchSentryTags)(o);
          null != E && (r?.error instanceof Error ? i.captureException(r.error, {
            tags: (0, s.hatchSentryTags)(E, {
              module: _ || "root",
              ...t
            }),
            extra: {
              ...r,
              message: n
            }
          }) : i.captureMessage(n, {
            level: "error",
            tags: (0, s.hatchSentryTags)(E, {
              module: _ || "root",
              ...t
            }),
            extra: r
          }), (0, S.reportHatchErrorToLogview)({
            surface: E,
            error: r?.error,
            message: n,
            module: _ || "root",
            componentStack: r?.componentStack
          }, 3))
        }(_, n, r), console.error(..."string" == typeof n ? [e, n] : [e, r ?? "", n]))
      }
    }
  }])
}, 767408, _ => {
  "use strict";
  let e = new Set(["workspace", "artifacts", "user", "home", "tmp", "projects", "uploads", "media", ".hatch"]),
    i = /^[a-z0-9]{1,12}$/i;

  function s(_) {
    if (null == _) return "none";
    let e = _.split("/").pop() ?? "",
      s = e.lastIndexOf(".");
    if (s <= 0 || s === e.length - 1) return "none";
    let I = e.slice(s + 1).toLowerCase();
    return i.test(I) ? I : "none"
  }
  let I = [
    ["aborted", /\babort|cancell?ed\b/i],
    ["timeout", /\btimed?[ _-]?out\b|\btimeout\b|\betimedout\b/i],
    ["network", /network|\bfailed to fetch\b|\bload failed\b|\boffline\b|\beconnrefused\b|\bdns\b|\bsocket\b/i],
    ["auth", /\bunauthori[sz]ed\b|\bauthenticat|\b401\b|\b(invalid|expired|bad|missing) token\b|\btoken (expired|invalid)\b/i],
    ["permission", /\bforbidden\b|\bpermission\b|\b403\b|\bnot allowed\b/i],
    ["not_found", /\bnot found\b|\b404\b|\benoent\b/i],
    ["rate_limited", /\brate[ _-]?limit|\btoo many requests\b|\b429\b/i],
    ["conflict", /\bconflict\b|\b409\b|\balready exists\b/i],
    ["server", /\binternal server\b|\b5\d{2}\b|\bbad gateway\b|\bunavailable\b/i],
    ["parse", /\bjson\b|\bparse|\bunexpected token\b|\bmalformed\b/i],
    ["validation", /\binvalid\b|\bvalidation\b|\brequired\b|\bmust be\b/i]
  ];

  function S(_) {
    if (null == _) return "";
    if ("string" == typeof _) return _;
    if (_ instanceof Error) return `${_.name}: ${_.message}`;
    if ("object" == typeof _ && "message" in _) {
      let e = _.message;
      if ("string" == typeof e) return e
    }
    return ""
  }
  let n = /^[A-Za-z][A-Za-z0-9_]{0,40}$/;
  _.s(["capTelemetryMetadata", 0, function(_) {
    if (JSON.stringify(_).length <= 2048) return _;
    let e = Object.entries(_).sort((_, e) => JSON.stringify(e[1] ?? "").length - JSON.stringify(_[1] ?? "").length),
      i = {},
      s = 0;
    for (let [_, I] of e.reverse()) {
      if (JSON.stringify({
          ...i,
          [_]: I
        }).length > 2048) {
        s += 1;
        continue
      }
      i[_] = I
    }
    return i.metadata_truncated = !0, i.metadata_dropped_keys = s, i
  }, "classifyErrorForTelemetry", 0, function(_) {
    let e = S(_);
    if ("" === e) return "unknown";
    for (let [_, i] of I)
      if (i.test(e)) return _;
    return "unknown"
  }, "errorLengthForTelemetry", 0, function(_) {
    return S(_).length
  }, "errorNameForTelemetry", 0, function(_) {
    return null == _ ? "none" : _ instanceof Error ? n.test(_.name) ? _.name : "unknown" : "string" == typeof _ ? "string" : "non_error"
  }, "fileExtensionForTelemetry", 0, s, "redactErrorStackForTelemetry", 0, function(_) {
    if (null == _ || "" === _) return "";
    let e = _.split("\n"),
      i = e.findIndex(_ => _.trimStart().startsWith("at "));
    return -1 === i ? "" : e.slice(i).join("\n")
  }, "redactPathForTelemetry", 0, function(_) {
    if (null == _ || "" === _) return "none";
    let i = _.startsWith("/") ? "/" : "",
      I = _.split("/").filter(_ => "" !== _);
    return 0 === I.length ? "/" === i ? "/" : "none" : i + I.map((_, i) => {
      if (e.has(_.toLowerCase())) return _;
      if (i !== I.length - 1) return "*";
      let S = s(_);
      return "none" === S ? "*" : `*.${S}`
    }).join("/")
  }, "sanitizeFileExtensionForTelemetry", 0, function(_) {
    if (null != _ && "" !== _ && "string" == typeof _) return i.test(_) ? _.toLowerCase() : "none"
  }, "textLengthForTelemetry", 0, function(_) {
    return null == _ ? 0 : _.length
  }])
}, 823173, _ => {
  "use strict";
  var e, i = ((e = {}).EMAIL_SURFACE_IMPRESSION = "email_surface_impression", e.EMAIL_MAILBOX_SETUP_IMPRESSION = "email_mailbox_setup_impression", e.EMAIL_SETTINGS_IMPRESSION = "email_settings_impression", e.EMAIL_MAILBOX_RESET_DIALOG_IMPRESSION = "email_mailbox_reset_dialog_impression", e.DEVELOPER_PLATFORM_IMPRESSION = "developer_platform_impression", e.DEVELOPER_CONNECTOR_SUBMITTED_IMPRESSION = "developer_connector_submitted_impression", e.DEVELOPER_SUBMISSIONS_IMPRESSION = "developer_submissions_impression", e.DEVELOPER_SUBMISSION_DETAIL_IMPRESSION = "developer_submission_detail_impression", e.DEVELOPER_MESSAGE_THREADS_IMPRESSION = "developer_message_threads_impression", e.DEVELOPER_MESSAGE_IMPRESSION = "developer_message_impression", e.DEVELOPER_MESSAGE_REPLY_IMPRESSION = "developer_message_reply_impression", e.DEVELOPER_BUSINESS_VERIFICATION_IMPRESSION = "developer_business_verification_impression", e.DEVELOPER_MESSAGE_DISCARD_CONFIRMATION_IMPRESSION = "developer_message_discard_confirmation_impression", e.DEVELOPER_TIA_IMPRESSION = "developer_tia_impression", e.DEVELOPER_CREDENTIALS_IMPRESSION = "developer_credentials_impression", e.DEVELOPER_TEST_USERS_IMPRESSION = "developer_test_users_impression", e.DEVELOPER_TEST_USER_IMPRESSION = "developer_test_user_impression", e.DEVELOPER_CONNECTOR_TERMS_IMPRESSION = "developer_connector_terms_impression", e.DEVELOPER_PLATFORM_DOCS_IMPRESSION = "developer_platform_docs_impression", e.EARLY_ACCESS_HANDOFF_IMPRESSION = "early_access_handoff_impression", e.VM_DISABLED_STATE_IMPRESSION = "vm_disabled_state_impression", e.VM_RECONNECT_DIALOG_IMPRESSION = "vm_reconnect_dialog_impression", e.VM_DISABLED_SUPPORT_FORM_IMPRESSION = "vm_disabled_support_form_impression", e.VM_DISABLED_SUPPORT_CONFIRMATION_IMPRESSION = "vm_disabled_support_confirmation_impression", e.SETTINGS_RESET_HATCH_DIALOG_IMPRESSION = "settings_reset_hatch_dialog_impression", e.SETTINGS_VM_SWITCH_IMPRESSION = "settings_vm_switch_impression", e.ACCESS_INTERSTITIAL_GEO_IMPRESSION = "access_interstitial_geo_impression", e.ACCESS_INTERSTITIAL_AGE_IMPRESSION = "access_interstitial_age_impression", e.ACCESS_INTERSTITIAL_INTEGRITY_IMPRESSION = "access_interstitial_integrity_impression", e.GK_BLOCKED_IMPRESSION = "gk_blocked_impression", e.GEO_BLOCKED_IMPRESSION = "geo_blocked_impression", e.AGE_BLOCKED_IMPRESSION = "age_blocked_impression", e.COOKIE_CONSENT_DIALOG_IMPRESSION = "hatch_cookie_consent_dialog_impression", e.BUG_REPORT_LOGS_CONTROL_IMPRESSION = "bug_report_logs_control_impression", e.BUG_REPORT_LOG_FILES_IMPRESSION = "bug_report_log_files_impression", e.SUPPORT_TICKET_LOGS_CONTROL_IMPRESSION = "support_ticket_logs_control_impression", e.SUPPORT_TICKET_LOG_FILES_IMPRESSION = "support_ticket_log_files_impression", e.INVITE_ACTIVITY_BADGE_IMPRESSION = "invite_activity_badge_impression", e.INVITE_FRIENDS_ENTRYPOINT_IMPRESSION = "invite_friends_entrypoint_impression", e.INVITE_FRIENDS_IMPRESSION = "invite_friends_impression", e.INVITE_FRIENDS_READY_IMPRESSION = "invite_friends_ready_impression", e.INVITE_FRIENDS_ERROR_IMPRESSION = "invite_friends_error_impression", e.INVITE_CODE_REVEALED_IMPRESSION = "invite_code_revealed_impression", e.INVITE_REDEEM_IMPRESSION = "invite_redeem_impression", e.INVITE_REDEEM_ENTRYPOINT_IMPRESSION = "invite_redeem_entrypoint_impression", e.INVITE_REDEEM_OUTCOME_IMPRESSION = "invite_redeem_outcome_impression", e.INVITE_REDEEM_ERROR_IMPRESSION = "invite_redeem_error_impression", e.INLINE_CITATION_RESPONSE_UX = "inline_citation_response_ux", e.CITATION_HOVERCARD_IMPRESSION = "citation_hovercard_impression", e.ONBOARDING_WELCOME_IMPRESSION = "onboarding_welcome_impression", e.ONBOARDING_INVITE_CODE_IMPRESSION = "onboarding_invite_code_impression", e.ONBOARDING_WAITLIST_IMPRESSION = "onboarding_waitlist_impression", e.ONBOARDING_UNAVAILABLE_IMPRESSION = "onboarding_unavailable_impression", e.PRE_SHELL_SETTINGS_DIALOG_IMPRESSION = "onboarding_settings_dialog_impression", e.ONBOARDING_DISCLOSURE_IMPRESSION = "onboarding_disclosure_impression", e.ONBOARDING_AGE_VERIFICATION_IMPRESSION = "onboarding_age_verification_impression", e.ONBOARDING_CCV_FB_CHECKING_IMPRESSION = "onboarding_ccv_fb_checking_impression", e.ONBOARDING_CCV_IG_CHECKING_IMPRESSION = "onboarding_ccv_ig_checking_impression", e.ONBOARDING_CCV_VERIFIED_IMPRESSION = "onboarding_ccv_verified_impression", e.ONBOARDING_CCV_BLOCKED_IMPRESSION = "onboarding_ccv_blocked_impression", e.ONBOARDING_CCV_TIMEOUT_IMPRESSION = "onboarding_ccv_timeout_impression", e.ONBOARDING_CCV_LINK_ERROR_IMPRESSION = "onboarding_ccv_link_error_impression", e.ONBOARDING_CCV_LINK_RESULT_IMPRESSION = "onboarding_ccv_link_result_impression", e.VOICE_ONBOARDING_PICKER_IMPRESSION = "hatch_voice_onboarding_picker_impression", e.VOICE_FULL_LIST_IMPRESSION = "hatch_voice_full_list_impression", e.VOICE_OPTIONS_WIDGET_IMPRESSION = "hatch_voice_options_widget_impression", e.VOICE_CAPTIONS_IMPRESSION = "voice_captions_impression", e.VOICE_SIDEBAR_IMPRESSION = "hatch_voice_sidebar_impression", e.VOICE_EMBODIMENT_VIDEO_IMPRESSION = "voice_embodiment_video_impression", e.VOICE_EMBODIMENT_ACTIVITY_CLIP_IMPRESSION = "voice_embodiment_activity_clip_impression", e.VOICE_CALL_BUTTON_IMPRESSION = "voice_call_button_impression", e.VOICE_NUX_IMPRESSION = "voice_nux", e.VOICE_SETTINGS_PAGE_IMPRESSION = "voice_settings_page_impression", e.VOICE_AUDIO_INTERRUPTION_DIALOG_IMPRESSION = "voice_audio_interruption_dialog_impression", e.ONBOARDING_DISCLOSURE_RISK_ITEMS_IMPRESSION = "onboarding_disclosure_risk_items_impression", e.ONBOARDING_NDA_IMPRESSION = "onboarding_nda_impression", e.ONBOARDING_NDA_UNAVAILABLE_IMPRESSION = "onboarding_nda_unavailable_impression", e.ONBOARDING_MOBILE_DOWNLOAD_IMPRESSION = "onboarding_mobile_download_impression", e.ONBOARDING_WAITLIST_JOINED_IMPRESSION = "onboarding_waitlist_joined_impression", e.ONBOARDING_CHAT_TAB_INTRO_IMPRESSION = "onboarding_chat_tab_intro_impression", e.ONBOARDING_IDEAS_TAB_INTRO_IMPRESSION = "onboarding_ideas_tab_intro_impression", e.ONBOARDING_GOALS_TAB_INTRO_IMPRESSION = "onboarding_goals_tab_intro_impression", e.ONBOARDING_LIBRARY_TAB_INTRO_IMPRESSION = "onboarding_library_tab_intro_impression", e.UI_CONTROL_LIGHTUP_IMPRESSION = "ui_control_lightup_impression", e.ONBOARDING_FLOW_CONNECTORS_IMPRESSION = "onboarding_flow_connectors_impression", e.ONBOARDING_FLOW_TASKS_IMPRESSION = "onboarding_flow_tasks_impression", e.ONBOARDING_FLOW_IDENTITY_IMPRESSION = "onboarding_flow_identity_impression", e.ONBOARDING_FLOW_CONNECT_DIALOG_IMPRESSION = "onboarding_flow_connect_dialog_impression", e.SURVEY_IMPRESSION = "survey_impression", e.CHECKOUT_CCV_DIALOG_IMPRESSION = "checkout_ccv_dialog_impression", e.CHECKOUT_CCV_INLINE_IMPRESSION = "checkout_ccv_inline_impression", e.CHECKOUT_CCV_CONFIRM_DIALOG_IMPRESSION = "checkout_ccv_confirm_dialog_impression", e.CHECKOUT_CCV_PROCESSING_IMPRESSION = "checkout_ccv_processing_impression", e.CHECKOUT_CCV_SUCCESS_IMPRESSION = "checkout_ccv_success_impression", e.CHECKOUT_CCV_RATE_LIMIT_DIALOG_IMPRESSION = "checkout_ccv_rate_limit_dialog_impression", e.CHECKOUT_CCV_SAVE_CARD_IMPRESSION = "checkout_ccv_save_card_impression", e.CHECKOUT_CCV_REDIRECT_IMPRESSION = "checkout_ccv_redirect_impression", e.CHECKOUT_CCV_REDIRECT_FAILED_IMPRESSION = "checkout_ccv_redirect_failed_impression", e.CHECKOUT_CCV_REDIRECT_VERIFIED_IMPRESSION = "checkout_ccv_redirect_verified_impression", e.CHECKOUT_CCV_REDIRECT_RATE_LIMITED_IMPRESSION = "checkout_ccv_redirect_rate_limited_impression", e.CHECKOUT_NUX_SCREEN_IMPRESSION = "checkout_nux_screen_impression", e.CHECKOUT_PUX_SCREEN_IMPRESSION = "checkout_pux_screen_impression", e.CHECKOUT_CARD_FORM_IMPRESSION = "checkout_card_form_impression", e.SAVE_CARD_FORM_IMPRESSION = "save_card_form_impression", e.SAVE_CARD_DIALOG_IMPRESSION = "save_card_dialog_impression", e.SAVE_CARD_PAGE_IMPRESSION = "save_card_page_impression", e.CHECKOUT_CONFIRMATION_IMPRESSION = "checkout_confirmation_impression", e.CHECKOUT_ERROR_DIALOG_IMPRESSION = "checkout_error_dialog_impression", e.CHECKOUT_RENDER_ERROR_IMPRESSION = "checkout_render_error_impression", e.CHECKOUT_STRIPE_SCREEN_IMPRESSION = "checkout_stripe_screen_impression", e.CHECKOUT_FREE_TRIAL_OFFER_IMPRESSION = "checkout_free_trial_offer_impression", e.CHECKOUT_PLAN_CHANGE_SUMMARY_IMPRESSION = "checkout_plan_change_summary_impression", e.CHAT_PAGE_IMPRESSION = "chat_page_impression", e.CHAT_MESSAGE_DELETE_CONFIRMATION_IMPRESSION = "chat_message_delete_confirmation_impression", e.LIBRARY_PAGE_IMPRESSION = "library_page_impression", e.ARTIFACTS_PAGE_IMPRESSION = "artifacts_page_impression", e.AGENTS_PAGE_IMPRESSION = "agents_page_impression", e.AGENT_ROOM_PAGE_IMPRESSION = "agent_room_page_impression", e.AGENT_INVITE_PAGE_IMPRESSION = "agent_invite_page_impression", e.FLOCK_POST_PAGE_IMPRESSION = "flock_post_page_impression", e.ARTIFACTS_PANEL_IMPRESSION = "artifacts_panel_impression", e.ARTIFACT_SHARE_PAGE_IMPRESSION = "artifact_share_page_impression", e.MEDIA_SHARE_PAGE_IMPRESSION = "media_share_page_impression", e.MEDIA_SHARE_DIALOG = "media_share_dialog", e.ARTIFACT_SHARE_DEPLOYING_IMPRESSION = "artifact_share_deploying_impression", e.SPACE_PAGE_IMPRESSION = "space_page_impression", e.SPACE_EDIT_ROUTE_IMPRESSION = "space_edit_route_impression", e.SAVED_SPACE_PAGE_IMPRESSION = "saved_space_page_impression", e.IDEAS_PAGE_IMPRESSION = "ideas_page_impression", e.CVM_STATUS_PAGE_IMPRESSION = "cvm_status_page_impression", e.CVM_STATUS_VM_CARD_IMPRESSION = "cvm_status_vm_card_impression", e.CVM_STATUS_VM_INVENTORY_IMPRESSION = "cvm_status_vm_inventory_impression", e.CVM_REPLACEMENT_MAINTENANCE_IMPRESSION = "cvm_replacement_maintenance_impression", e.SIDEBAR_FILE_TREE_IMPRESSION = "sidebar_file_tree_impression", e.ALL_FILES_PANEL_IMPRESSION = "all_files_panel_impression", e.LOGIN_PAGE_IMPRESSION = "login_page_impression", e.LOGIN_PROVIDER_SSO_ERROR_IMPRESSION = "login_provider_sso_error_impression", e.LOGIN_AYMH_CARDS_IMPRESSION = "login_aymh_cards_impression", e.LOGIN_SAVED_ACCOUNTS_IMPRESSION = "login_saved_accounts_impression", e.LOGIN_ACCOUNT_SELECTION_IMPRESSION = "login_account_selection_impression", e.LOGIN_RECOVERY_ACCOUNT_SELECTION_IMPRESSION = "login_recovery_account_selection_impression", e.LOGIN_RECOVERY_CONTACT_POINT_SELECTION_IMPRESSION = "login_recovery_contact_point_selection_impression", e.LOGIN_BIRTHDAY_IMPRESSION = "login_birthday_impression", e.LOGIN_NTP_UPSELL_IMPRESSION = "login_ntp_upsell_impression", e.LOGIN_NATIVE_AUTH_TOS_DIALOG_IMPRESSION = "login_native_auth_tos_dialog_impression", e.LANDING_PAGE_IMPRESSION = "landing_page_impression", e.LANDING_VALUE_PROPS_IMPRESSION = "landing_value_props_impression", e.LANDING_FEATURE_IMPRESSION = "landing_feature_impression", e.LANDING_GET_STARTED_IMPRESSION = "landing_get_started_impression", e.LANDING_VIDEO_AUTOPLAY_IMPRESSION = "landing_video_autoplay_impression", e.LANDING_MOBILE_APP_UPSELL_IMPRESSION = "landing_mobile_app_upsell_impression", e.LANDING_APP_BANNER_IMPRESSION = "landing_app_banner_impression", e.DESKTOP_APP_UPSELL_IMPRESSION = "desktop_app_upsell_impression", e.DESKTOP_APP_UPSELL_INTRO_IMPRESSION = "desktop_app_upsell_intro_impression", e.LOGIN_REGISTRATION_REJECTED_DIALOG_IMPRESSION = "login_registration_rejected_dialog_impression", e.LOGIN_CROSS_APP_RECOVERY_DIALOG_IMPRESSION = "login_cross_app_recovery_dialog_impression", e.OAUTH_CONNECT_PAGE_IMPRESSION = "oauth_connect_page_impression", e.AC_OAUTH_CONNECT_PAGE_IMPRESSION = "ac_oauth_connect_page_impression", e.PASSWORD_CONNECT_PAGE_IMPRESSION = "password_connect_page_impression", e.API_KEY_CONNECT_PAGE_IMPRESSION = "api_key_connect_page_impression", e.BROWSER_CREDENTIAL_CAPTURE_DIALOG_IMPRESSION = "browser_credential_capture_dialog_impression", e.BROWSER_CREDENTIAL_CAPTURE_PAGE_IMPRESSION = "browser_credential_capture_page_impression", e.BROWSER_CREDENTIAL_CAPTURE_INVALID_LINK_IMPRESSION = "browser_credential_capture_invalid_link_impression", e.CONNECT_COMPLETE_IMPRESSION = "connect_complete_impression", e.SETTINGS_RECIPIENT_PERMISSIONS_IMPRESSION = "settings_recipient_permissions_impression", e.SETTINGS_CONNECTORS_TAB_IMPRESSION = "settings_connectors_tab_impression", e.SETTINGS_PERMISSIONS_TAB_IMPRESSION = "settings_permissions_tab_impression", e.SETTINGS_PERMISSION_OWNER_IMPRESSION = "settings_permission_owner_impression", e.SETTINGS_PERMISSION_OWNERS_IMPRESSION = "settings_permission_owners_impression", e.SETTINGS_WALLET_TAB_IMPRESSION = "settings_wallet_tab_impression", e.SETTINGS_DATA_PRIVACY_NOTICE_IMPRESSION = "settings_data_privacy_notice_impression", e.SETTINGS_DATA_PRIVACY_TRAINING_PREFERENCE_IMPRESSION = "settings_data_privacy_training_preference_impression", e.SETTINGS_LOCAL_BROWSER_IMPRESSION = "settings_local_browser_impression", e.SETTINGS_IMPORT_MEMORY_IMPRESSION = "settings_import_memory_impression", e.SETTINGS_DEVICES_TAB_IMPRESSION = "settings_devices_tab_impression", e.SETTINGS_DEVICES_DETAIL_IMPRESSION = "settings_devices_detail_impression", e.SETTINGS_CONNECTOR_DETAIL_IMPRESSION = "settings_connector_detail_impression", e.SETTINGS_CONNECTORS_MANAGE_VIEW_IMPRESSION = "settings_connectors_manage_view_impression", e.SETTINGS_CONNECTORS_APPROVALS_VIEW_IMPRESSION = "settings_connectors_approvals_view_impression", e.SETTINGS_PERMISSIONS_OVERVIEW_IMPRESSION = "settings_permissions_overview_impression", e.SETTINGS_PERMISSIONS_CONNECTORS_IMPRESSION = "settings_permissions_connectors_impression", e.SETTINGS_PERMISSIONS_APPROVALS_IMPRESSION = "settings_permissions_approvals_impression", e.SETTINGS_PERMISSIONS_PROTOCOLS_IMPRESSION = "settings_permissions_protocols_impression", e.SETTINGS_PERMISSIONS_LOAD_ERROR_IMPRESSION = "settings_permissions_load_error_impression", e.SETTINGS_PERMISSION_DEFAULTS_IMPRESSION = "settings_permission_defaults_impression", e.SETTINGS_CONNECTORS_ADD_SCREEN_IMPRESSION = "settings_connectors_add_screen_impression", e.SETTINGS_CONNECTORS_LINKED_ACCOUNTS_IMPRESSION = "settings_connectors_linked_accounts_impression", e.STATUS_PANEL_IMPRESSION = "status_panel_impression", e.STATUS_COMPUTER_TAB_IMPRESSION = "status_computer_tab_impression", e.STATUS_AVATAR_EDIT_MENU_IMPRESSION = "status_avatar_edit_menu_impression", e.STATUS_AVATAR_SHARE_IMPRESSION = "status_avatar_share_impression", e.STATUS_LIMIT_REACHED_IMPRESSION = "status_limit_reached_impression", e.MEDIA_VIEWER_IMPRESSION = "media_viewer_impression", e.SETTINGS_IMPRESSION = "settings_impression", e.SETTINGS_RESET_ACTIVATION_DIALOG_IMPRESSION = "settings_reset_activation_dialog_impression", e.API_KEY_DIALOG_IMPRESSION = "api_key_dialog_impression", e.OAUTH_DIALOG_IMPRESSION = "oauth_dialog_impression", e.SPACE_OVERFLOW_PANEL_IMPRESSION = "space_overflow_panel_impression", e.SPACE_OVERFLOW_MENU_IMPRESSION = "space_overflow_menu_impression", e.CHAT_THREADS_OVERFLOW_IMPRESSION = "chat_threads_overflow_impression", e.SPACE_SIDEBAR_NAV_IMPRESSION = "space_sidebar_nav_impression", e.SAVED_SPACE_SIDEBAR_NAV_IMPRESSION = "saved_space_sidebar_nav_impression", e.SYSTEM_SIDEBAR_NAV_IMPRESSION = "system_sidebar_nav_impression", e.SPACE_DEBUG_PANEL_IMPRESSION = "space_debug_panel_impression", e.SPACE_DEBUG_INVOCATION_DETAIL_IMPRESSION = "space_debug_invocation_detail_impression", e.FEED_DEBUG_PANEL_IMPRESSION = "feed_debug_panel_impression", e.IDEAS_DEBUG_PANEL_IMPRESSION = "ideas_debug_panel_impression", e.IDEA_CARD_IMPRESSION = "idea_card_impression", e.IDEA_CARD_UNAVAILABLE_IMPRESSION = "idea_card_unavailable_impression", e.IDEA_GROUP_CARD_IMPRESSION = "idea_group_card_impression", e.IDEA_GROUP_ROW_IMPRESSION = "idea_group_row_impression", e.IDEA_GROUP_SEE_MORE_IMPRESSION = "idea_group_see_more_impression", e.IDEA_PREVIEW_DIALOG_IMPRESSION = "idea_preview_dialog_impression", e.IDEA_MENU_IMPRESSION = "idea_menu_impression", e.IDEA_SHARE_DIALOG_IMPRESSION = "idea_share_dialog_impression", e.DELETE_SPACE_DIALOG_IMPRESSION = "delete_space_dialog_impression", e.CHAT_THREAD_RENAME_DIALOG_IMPRESSION = "chat_thread_rename_dialog_impression", e.CHAT_THREAD_DELETE_DIALOG_IMPRESSION = "chat_thread_delete_dialog_impression", e.ARTIFACT_MANAGE_DIALOG_IMPRESSION = "hatch_artifact_manage_dialog_impression", e.PASSWORD_DIALOG_IMPRESSION = "password_dialog_impression", e.WHATSAPP_COMPANION_DIALOG_IMPRESSION = "whatsapp_companion_dialog_impression", e.WHATSAPP_ACTIVATION_PAGE_IMPRESSION = "whatsapp_activation_page_impression", e.WHATSAPP_ACTIVATION_ERROR_IMPRESSION = "whatsapp_activation_error_impression", e.CONNECTOR_CONSENT_DIALOG_IMPRESSION = "connector_consent_dialog_impression", e.CONNECTOR_DISCONNECT_DIALOG_IMPRESSION = "connector_disconnect_dialog_impression", e.FILE_DELETE_DIALOG_IMPRESSION = "file_delete_dialog_impression", e.FILE_EDITOR_DIALOG_IMPRESSION = "file_editor_dialog_impression", e.PODCAST_DELETE_DIALOG_IMPRESSION = "podcast_delete_dialog_impression", e.CHAT_MESSAGE_IMPRESSION = "chat_message_impression", e.CHAT_NEW_THREAD_EMPTY_STATE_IMPRESSION = "chat_new_thread_empty_state_impression", e.CHAT_CHANNELS_SECTION_IMPRESSION = "chat_channels_section_impression", e.CHAT_CHANNEL_READ_ONLY_IMPRESSION = "chat_channel_read_only_impression", e.CHAT_PEER_SIDECHAT_READ_ONLY_IMPRESSION = "chat_peer_sidechat_read_only_impression", e.CHAT_INLINE_APPROVAL_CARD_IMPRESSION = "chat_inline_approval_card_impression", e.CHAT_APPROVAL_RECOVERY_IMPRESSION = "chat_approval_recovery_impression", e.CHAT_BACKGROUND_APPROVAL_SUMMARY_IMPRESSION = "chat_background_approval_summary_impression", e.STATUS_PENDING_APPROVALS_IMPRESSION = "status_pending_approvals_impression", e.STATUS_COLLAPSED_APPROVAL_IMPRESSION = "status_collapsed_approval_impression", e.STATUS_ACTIONED_APPROVALS_IMPRESSION = "status_actioned_approvals_impression", e.OUTGOING_MEDIA_APPROVAL_IMPRESSION = "outgoing_media_approval_impression", e.BROWSER_CHECKOUT_APPROVAL_IMPRESSION = "browser_checkout_approval_impression", e.SHOPIFY_CHECKOUT_APPROVAL_IMPRESSION = "shopify_checkout_approval_impression", e.BROWSER_CHECKOUT_PAYMENT_DETAILS_IMPRESSION = "browser_checkout_payment_details_impression", e.CHECKOUT_WALLET_IMPRESSION = "checkout_wallet_impression", e.CHECKOUT_LINK_INFO_IMPRESSION = "checkout_link_info_impression", e.SHOPIFY_CHECKOUT_PAYMENT_DETAILS_IMPRESSION = "shopify_checkout_payment_details_impression", e.SHOPIFY_CHECKOUT_ITEMS_DETAILS_IMPRESSION = "shopify_checkout_items_details_impression", e.CHAT_IDEA_REPLY_CARD_IMPRESSION = "chat_idea_reply_card_impression", e.ASSISTANT_RESPONSE_ERROR_NOTICE_IMPRESSION = "assistant_response_error_notice_impression", e.CHAT_WIDGET_IMPRESSION = "chat_widget_impression", e.CHAT_SHOPPING_GRID_IMPRESSION = "chat_shopping_grid_impression", e.CHAT_SHOPPING_DETAILS_IMPRESSION = "chat_shopping_details_impression", e.CHAT_SHOPPING_RELATED_IMPRESSION = "chat_shopping_related_impression", e.CHAT_FLIGHT_DETAILS_IMPRESSION = "chat_flight_details_impression", e.CHAT_SHOPPING_MARKETPLACE_DETAILS_IMPRESSION = "chat_shopping_marketplace_details_impression", e.CHAT_SHOPPING_MARKETPLACE_LOCATION_IMPRESSION = "chat_shopping_marketplace_location_impression", e.CHAT_SHOPPING_MARKETPLACE_SELLER_IMPRESSION = "chat_shopping_marketplace_seller_impression", e.CHAT_SHOPPING_MARKETPLACE_SELLER_LISTINGS_IMPRESSION = "chat_shopping_marketplace_seller_listings_impression", e.CHAT_SHOPPING_PRODUCT_ENTITY_IMPRESSION = "chat_shopping_product_entity_impression", e.CHAT_ADS_ENTITY_IMPRESSION = "chat_ads_entity_impression", e.CHAT_ADS_DETAILS_IMPRESSION = "chat_ads_details_impression", e.CHAT_SIDEBAR_THREAD_LIST_IMPRESSION = "chat_sidebar_thread_list_impression", e.SPACE_PROPOSAL_CARD_IMPRESSION = "space_proposal_card_impression", e.SPACE_BUILD_COMPLETED_CARD_IMPRESSION = "space_build_completed_card_impression", e.TEXT_WITH_BUTTON_IMPRESSION = "text_with_button_impression", e.COMPLIMENTARY_SUBSCRIPTION_IMPRESSION = "complimentary_subscription_impression", e.COMPLIMENTARY_SUBSCRIPTION_FAILED_DIALOG_IMPRESSION = "complimentary_subscription_failed_dialog_impression", e.BROWSER_TASK_BANNER_IMPRESSION = "browser_task_banner_impression", e.BROWSER_SESSION_VIEWER_IMPRESSION = "browser_session_viewer_impression", e.BROWSER_SESSION_DEVICE_CLIPBOARD_CONTROLS_IMPRESSION = "browser_session_device_clipboard_controls_impression", e.BROWSER_SESSION_WINDOW_TABS_IMPRESSION = "browser_session_window_tabs_impression", e.BROWSER_SESSION_STOP_DIALOG_IMPRESSION = "browser_session_stop_dialog_impression", e.BROWSER_SESSION_CONTROL_CONFLICT_IMPRESSION = "browser_session_control_conflict_impression", e.SANDBOX_FILE_CARD_IMPRESSION = "sandbox_file_card_impression", e.MARKDOWN_HTML_PREVIEW_IMPRESSION = "markdown_html_preview_impression", e.HATCH_VM_DROPDOWN_IMPRESSION = "hatch_vm_dropdown_impression", e.AVOCADO_SWITCH_DIALOG_IMPRESSION = "avocado_switch_dialog_impression", e.ERROR_CONTENT_IMPRESSION = "error_content_impression", e.ERROR_PAGE_IMPRESSION = "error_page_impression", e.OIDC_AUTH_ERROR_IMPRESSION = "oidc_auth_error_impression", e.IG_LINKING_UNAVAILABLE_IMPRESSION = "ig_linking_unavailable_impression", e.HATCH_CHAT_FEED_UNAVAILABLE_IMPRESSION = "hatch_chat_feed_unavailable_impression", e.HATCH_CHAT_MESSAGE_ERROR_IMPRESSION = "hatch_chat_message_error_impression", e.HATCH_CHAT_MESSAGE_SUBTREE_ERROR_IMPRESSION = "hatch_chat_message_subtree_error_impression", e.CHAT_MEDIA_UNAVAILABLE_IMPRESSION = "chat_media_unavailable_impression", e.HTML_PREVIEW_ERROR_IMPRESSION = "html_preview_error_impression", e.MARKDOWN_IMAGE_NOT_FOUND_IMPRESSION = "markdown_image_not_found_impression", e.SANDBOX_FILE_NOT_FOUND_IMPRESSION = "sandbox_file_not_found_impression", e.FEED_CARD_IMPRESSION = "feed_card_impression", e.FEED_IMPRESSION = "feed_impression", e.FEED_UNIT_IMPRESSION = "feed_unit_impression", e.FEED_UNIT_WHY_IMPRESSION = "feed_unit_why_impression", e.FEED_UNIT_VIEW_DURATION_IMPRESSION = "feed_unit_view_duration_impression", e.FEED_UNIT_SOCIAL_THUMBNAIL_FALLBACK_IMPRESSION = "feed_unit_social_thumbnail_fallback_impression", e.FEED_UNIT_SOCIAL_CAROUSEL_FALLBACK_IMPRESSION = "feed_unit_social_carousel_fallback_impression", e.FEED_UNIT_IDEA_ACTION_IMPRESSION = "feed_unit_idea_action_impression", e.FEED_PROMPTS_EDITOR_IMPRESSION = "feed_prompts_editor_impression", e.FEED_PROMPT_EDITOR_IMPRESSION = "feed_prompt_editor_impression", e.FEED_HISTORY_IMPRESSION = "feed_history_impression", e.FEED_INFINITE_FEED_IMPRESSION = "feed_infinite_feed_impression", e.FEED_INFINITE_ERROR_IMPRESSION = "feed_infinite_error_impression", e.DOCX_PREVIEW_IMPRESSION = "docx_preview_impression", e.PPTX_PREVIEW_IMPRESSION = "pptx_preview_impression", e.PPTX_EDIT_IMPRESSION = "pptx_edit_impression", e.PPTX_PRESENTATION_IMPRESSION = "pptx_presentation_impression", e.TAB_NOTIFICATION_BADGE_IMPRESSION = "tab_notification_badge_impression", e.HATCH_PENDING_APPROVAL_BROWSER_NOTIFICATION_IMPRESSION = "hatch_pending_approval_browser_notification_impression", e.SETTINGS_IMESSAGE_STATUS_IMPRESSION = "settings_imessage_status_impression", e.SETTINGS_MESSENGER_STATUS_IMPRESSION = "settings_messenger_status_impression", e.SETTINGS_MESSENGER_LINKED_CARD_IMPRESSION = "settings_messenger_linked_card_impression", e.SETTINGS_MESSENGER_NOT_LINKED_CARD_IMPRESSION = "settings_messenger_not_linked_card_impression", e.SETTINGS_CHANNELS_WHATSAPP_UNLINKED_IMPRESSION = "settings_channels_whatsapp_unlinked_impression", e.SETTINGS_CVM_PIN_IMPRESSION = "settings_cvm_pin_impression", e.SETTINGS_TRUSTED_NETWORK_ENTRY_IMPRESSION = "settings_trusted_network_entry_impression", e.SETTINGS_TRUSTED_NETWORK_OVERVIEW_IMPRESSION = "settings_trusted_network_overview_impression", e.SETTINGS_TRUSTED_NETWORK_CONTACT_PICKER_IMPRESSION = "settings_trusted_network_contact_picker_impression", e.SETTINGS_TRUSTED_NETWORK_ACCEPT_INVITATION_IMPRESSION = "settings_trusted_network_accept_invitation_impression", e.SETTINGS_TRUSTED_NETWORK_ACCEPT_CONFLICT_IMPRESSION = "settings_trusted_network_accept_conflict_impression", e.SETTINGS_TRUSTED_NETWORK_ABOUT_IMPRESSION = "settings_trusted_network_about_impression", e.SETTINGS_TRUSTED_NETWORK_PERSON_IMPRESSION = "settings_trusted_network_person_impression", e.SETTINGS_TRUSTED_NETWORK_DISCONNECT_IMPRESSION = "settings_trusted_network_disconnect_impression", e.SETTINGS_TRUSTED_NETWORK_PERSON_DETAIL_IMPRESSION = "settings_trusted_network_person_detail_impression", e.SETTINGS_TRUSTED_NETWORK_INVITATION_IMPRESSION = "settings_trusted_network_invitation_impression", e.SETTINGS_TRUSTED_NETWORK_CANCEL_INVITE_IMPRESSION = "settings_trusted_network_cancel_invite_impression", e.SETTINGS_TRUSTED_NETWORK_REQUEST_IMPRESSION = "settings_trusted_network_request_impression", e.SETTINGS_TRUSTED_NETWORK_INVITE_DIALOG_IMPRESSION = "settings_trusted_network_invite_dialog_impression", e.SETTINGS_TRUSTED_NETWORK_INVITE_ACCESS_IMPRESSION = "settings_trusted_network_invite_access_impression", e.SETTINGS_TRUSTED_NETWORK_INVITE_LINK_IMPRESSION = "settings_trusted_network_invite_link_impression", e.SETTINGS_TRUSTED_NETWORK_SAFETY_CODE_IMPRESSION = "settings_trusted_network_safety_code_impression", e.SETTINGS_TRUSTED_NETWORK_SAFETY_CODE_ACCESS_IMPRESSION = "settings_trusted_network_safety_code_access_impression", e.CHAT_TRUSTED_NETWORK_CONNECTION_REQUEST_IMPRESSION = "chat_trusted_network_connection_request_impression", e.SETTINGS_SECURE_STORAGE_CATALOG_IMPRESSION = "settings_secure_storage_catalog_impression", e.SETTINGS_SECURE_STORAGE_ADD_IMPRESSION = "settings_secure_storage_add_impression", e.SETTINGS_SECURE_STORAGE_DETAIL_IMPRESSION = "settings_secure_storage_detail_impression", e.SETTINGS_ATTESTATION_ENFORCEMENT_IMPRESSION = "settings_attestation_enforcement_impression", e.SETTINGS_LOCAL_OD_ENVIRONMENT_IMPRESSION = "settings_local_od_environment_impression", e.MARKDOWN_H1_IMPRESSION = "markdown_h1_impression", e.MARKDOWN_H2_IMPRESSION = "markdown_h2_impression", e.MARKDOWN_H3_IMPRESSION = "markdown_h3_impression", e.MARKDOWN_H4_IMPRESSION = "markdown_h4_impression", e.MARKDOWN_H5_IMPRESSION = "markdown_h5_impression", e.MARKDOWN_H6_IMPRESSION = "markdown_h6_impression", e.MARKDOWN_LIST_IMPRESSION = "markdown_list_impression", e.MESSENGER_PIN_DIALOG_IMPRESSION = "messenger_pin_dialog_impression", e.MESSENGER_PIN_REDIRECT_DIALOG_IMPRESSION = "messenger_pin_redirect_dialog_impression", e.ACCOUNT_CENTER_LINK_MODAL_IMPRESSION = "account_center_link_modal_impression", e.INSTAGRAM_CONNECT_DIALOG_IMPRESSION = "instagram_connect_dialog_impression", e.THREADS_CONNECT_DIALOG_IMPRESSION = "threads_connect_dialog_impression", e.INSTAGRAM_MESSAGES_CONNECT_DIALOG_IMPRESSION = "instagram_messages_connect_dialog_impression", e.THREADS_MESSAGES_CONNECT_DIALOG_IMPRESSION = "threads_messages_connect_dialog_impression", e.SUPPORT_DIALOG_IMPRESSION = "support_dialog_impression", e.SUPPORT_REDIRECT_DIALOG_IMPRESSION = "support_redirect_dialog_impression", e.SUPPORT_PAGE_IMPRESSION = "support_page_impression", e.SETTINGS_CONTACT_SUPPORT_FORM_IMPRESSION = "settings_contact_support_form_impression", e.SETTINGS_CONTACT_SUPPORT_CONFIRMATION_IMPRESSION = "settings_contact_support_confirmation_impression", e.CHAT_PODCAST_QR_IMPRESSION = "chat_podcast_qr_impression", e.CHAT_PODCAST_PLAYER_IMPRESSION = "chat_podcast_player_impression", e.CHAT_AUDIO_FLOATING_IMPRESSION = "chat_audio_floating_impression", e.PROFILE_GOAL_SECTION_IMPRESSION = "profile_goal_section_impression", e.PROFILE_GOAL_DETAIL_IMPRESSION = "profile_goal_detail_impression", e.GOALS_PAGE_IMPRESSION = "goals_page_impression", e.GOALS_TRACKING_SECTION_IMPRESSION = "goals_tracking_section_impression", e.GOALS_CARD_IMPRESSION = "goals_card_impression", e.GOALS_DETAIL_PANEL_IMPRESSION = "goals_detail_panel_impression", e.GOALS_NULL_STATE_IMPRESSION = "goals_null_state_impression", e.GOALS_NULL_STATE_DETAIL_IMPRESSION = "goals_null_state_detail_impression", e.GOALS_ADD_ANOTHER_IMPRESSION = "goals_add_another_impression", e.GOALS_COMPLETED_VIEW_IMPRESSION = "goals_completed_view_impression", e.PAGES_NULL_STATE_IMPRESSION = "pages_null_state_impression", e.ACTIVATION_ERROR_PAGE_IMPRESSION = "hatch_activation_error_page_impression", e.SETTINGS_REDTEAM_MOCK_PANEL_IMPRESSION = "settings_redteam_mock_panel_impression", e.SUBSCRIPTION_PAGE_IMPRESSION = "subscription_page_impression", e.SUBSCRIPTION_NAME_ENTRY_IMPRESSION = "subscription_name_entry_impression", e.SUBSCRIPTION_MANAGE_IMPRESSION = "subscription_manage_impression", e.SUBSCRIPTION_CANCEL_IMPRESSION = "subscription_cancel_impression", e.SUBSCRIPTION_RENEW_IMPRESSION = "subscription_renew_impression", e.SUBSCRIPTION_DOWNGRADE_IMPRESSION = "subscription_downgrade_impression", e.SUBSCRIPTION_DOWNGRADE_SUCCESS_IMPRESSION = "subscription_downgrade_success_impression", e.SUBSCRIPTION_PLAN_CHANGE_IMPRESSION = "subscription_plan_change_impression", e.SUBSCRIPTION_PLAN_CHANGE_CHECKOUT_IMPRESSION = "subscription_plan_change_checkout_impression", e.SUBSCRIPTION_CROSSGRADE_BLOCKED_IMPRESSION = "subscription_crossgrade_blocked_impression", e.SUBSCRIPTION_UNAVAILABLE_DIALOG_IMPRESSION = "subscription_unavailable_dialog_impression", e.SUBSCRIPTION_CROSS_PLATFORM_DIALOG_IMPRESSION = "subscription_cross_platform_dialog_impression", e.SUBSCRIPTION_PLAN_CHANGE_BLOCKED_DIALOG_IMPRESSION = "subscription_plan_change_blocked_dialog_impression", e.SUBSCRIPTION_EMPLOYEE_PRICING_BANNER_IMPRESSION = "subscription_employee_pricing_banner_impression", e.SETTINGS_USAGE_IMPRESSION = "settings_usage_impression", e.SETTINGS_PLAN_MANAGEMENT_REDIRECT_IMPRESSION = "settings_plan_management_redirect_impression", e.BUY_ADDITIONAL_USAGE_IMPRESSION = "buy_additional_usage_impression", e.CREDITS_NAME_ENTRY_IMPRESSION = "credits_name_entry_impression", e.RENAME_DIALOG_IMPRESSION = "rename_dialog_impression", e.SPACE_SHARE_DISCLOSURE_IMPRESSION = "space_share_disclosure_impression", e.SPACE_SHARE_DIALOG_IMPRESSION = "space_share_dialog_impression", e.SOURCES_DIALOG_IMPRESSION = "sources_dialog_impression", e.KEYBOARD_SHORTCUTS_DIALOG_IMPRESSION = "keyboard_shortcuts_dialog_impression", e.BUG_REPORT_DIALOG_IMPRESSION = "bug_report_dialog_impression", e.CHECKOUT_TERMS_DIALOG_IMPRESSION = "checkout_terms_dialog_impression", e.CHECKOUT_REMOVE_CARD_DIALOG_IMPRESSION = "checkout_remove_card_dialog_impression", e.CHECKOUT_REMOVE_PAYPAL_DIALOG_IMPRESSION = "checkout_remove_paypal_dialog_impression", e.TASKS_PANEL_IMPRESSION = "tasks_panel_impression", e.SCHEDULED_TASKS_PANEL_IMPRESSION = "scheduled_tasks_panel_impression", e.SCHEDULED_TASK_DETAIL_IMPRESSION = "scheduled_task_detail_impression", e.SCHEDULED_TASK_CONTEXT_MENU_IMPRESSION = "scheduled_task_context_menu_impression", e.SCHEDULED_TASK_DELETE_CONFIRM_IMPRESSION = "scheduled_task_delete_confirm_impression", e.TIMELINE_IMPRESSION = "timeline_impression", e.MEDIA_PANEL_IMPRESSION = "media_panel_impression", e.LIBRARY_SPACES_PANEL_IMPRESSION = "library_spaces_panel_impression", e.LIBRARY_SPACE_ROW_IMPRESSION = "library_space_row_impression", e.LIBRARY_ARTIFACT_SELECTION_BAR_IMPRESSION = "library_artifact_selection_bar_impression", e.LIBRARY_ARTIFACT_BULK_DELETE_DIALOG_IMPRESSION = "library_artifact_bulk_delete_dialog_impression", e.LIBRARY_RECENT_PANEL_IMPRESSION = "library_recent_panel_impression", e.LIBRARY_SEARCH_RESULTS_IMPRESSION = "library_search_results_impression", e.LIBRARY_SIDEBAR_NAV_IMPRESSION = "library_sidebar_nav_impression", e.PAGE_UNAVAILABLE_IMPRESSION = "page_unavailable_impression", e.FACEBOOK_CONNECT_PAGE_IMPRESSION = "facebook_connect_page_impression", e.FACEBOOK_DISCONNECT_PAGE_IMPRESSION = "facebook_disconnect_page_impression", e.MESSENGER_CONNECT_PAGE_IMPRESSION = "messenger_connect_page_impression", e.MESSENGER_DISCONNECT_PAGE_IMPRESSION = "messenger_disconnect_page_impression", e.FOA_CONNECT_PAGE_IMPRESSION = "foa_connect_page_impression", e.NAVIGATION_WIDGET_IMPRESSION = "navigation_widget_impression", e.MOBILE_APP_UPSELL_IMPRESSION = "mobile_app_upsell_impression", e.MOBILE_APP_UPSELL_DIALOG_IMPRESSION = "mobile_app_upsell_dialog_impression", e.MOBILE_APP_UPSELL_QR_IMPRESSION = "mobile_app_upsell_qr_impression", e.MOBILE_APP_UPSELL_BANNER_IMPRESSION = "mobile_app_upsell_banner_impression", e.TERMS_PAGE_IMPRESSION = "terms_page_impression", e.PRIVACY_PAGE_IMPRESSION = "privacy_page_impression", e.CHAT_PIN_REMINDER_CALLOUT_IMPRESSION = "chat_pin_reminder_callout_impression", e.CHAT_PIN_REMINDER_DIALOG_IMPRESSION = "chat_pin_reminder_dialog_impression", e);
  _.s(["HatchImpressionEvent", () => i])
}, 792135, 271359, _ => {
  "use strict";
  var e = _.i(519172),
    i = Object.defineProperty,
    s = (_, e) => i(_, "name", {
      value: e,
      configurable: !0
    });

  function I(_, e) {
    if ("function" == typeof _) return _(e);
    null != _ && (_.current = e)
  }

  function S(..._) {
    return e => {
      let i = !1,
        s = _.map(_ => {
          let s = I(_, e);
          return i || "function" != typeof s || (i = !0), s
        });
      if (i) return () => {
        for (let e = 0; e < s.length; e++) {
          let i = s[e];
          "function" == typeof i ? i() : I(_[e], null)
        }
      }
    }
  }

  function n(..._) {
    return e.useCallback(S(..._), _)
  }
  s(I, "setRef"), s(S, "composeRefs"), s(n, "useComposedRefs"), _.s(["useComposedRefs", 0, n], 271359);
  var r = Object.defineProperty,
    o = (_, e) => r(_, "name", {
      value: e,
      configurable: !0
    });

  function E(_) {
    let i = e.forwardRef((i, s) => {
      let {
        children: I,
        ...S
      } = i, r = null, o = !1, E = [];
      l(I) && "function" == typeof d && (I = d(I._payload)), e.Children.forEach(I, _ => {
        if (T(_)) {
          o = !0;
          let e = "child" in _.props ? _.props.child : _.props.children;
          l(e) && "function" == typeof d && (e = d(e._payload)), r = a(_, e), E.push(r?.props?.children)
        } else E.push(_)
      }), r ? r = e.cloneElement(r, void 0, E) : !o && 1 === e.Children.count(I) && e.isValidElement(I) && (r = I);
      let t = r ? p(r) : void 0,
        O = n(s, t);
      if (!r) {
        if (I || 0 === I) throw Error(o ? A(_) : c(_));
        return I
      }
      let N = R(S, r.props ?? {});
      return r.type !== e.Fragment && (N.ref = s ? O : t), e.cloneElement(r, N)
    });
    return i.displayName = `${_}.Slot`, i
  }
  o(E, "createSlot");
  var t = E("Slot"),
    O = Symbol.for("radix.slottable");

  function N(_) {
    let e = o(_ => "child" in _ ? _.children(_.child) : _.children, "Slottable");
    return e.displayName = `${_}.Slottable`, e.__radixId = O, e
  }
  o(N, "createSlottable");
  var a = o((_, i) => {
    if ("child" in _.props) {
      let i = _.props.child;
      return e.isValidElement(i) ? e.cloneElement(i, void 0, _.props.children(i.props.children)) : null
    }
    return e.isValidElement(i) ? i : null
  }, "getSlottableElementFromSlottable");

  function R(_, e) {
    let i = {
      ...e
    };
    for (let s in e) {
      let I = _[s],
        S = e[s];
      /^on[A-Z]/.test(s) ? I && S ? i[s] = (..._) => {
        let e = S(..._);
        return I(..._), e
      } : I && (i[s] = I) : "style" === s ? i[s] = {
        ...I,
        ...S
      } : "className" === s && (i[s] = [I, S].filter(Boolean).join(" "))
    }
    return {
      ..._,
      ...i
    }
  }

  function p(_) {
    let e = Object.getOwnPropertyDescriptor(_.props, "ref")?.get,
      i = e && "isReactWarning" in e && e.isReactWarning;
    return i ? _.ref : (i = (e = Object.getOwnPropertyDescriptor(_, "ref")?.get) && "isReactWarning" in e && e.isReactWarning) ? _.props.ref : _.props.ref || _.ref
  }

  function T(_) {
    return e.isValidElement(_) && "function" == typeof _.type && "__radixId" in _.type && _.type.__radixId === O
  }
  o(R, "mergeProps"), o(p, "getElementRef"), o(T, "isSlottable");
  var P = Symbol.for("react.lazy");

  function l(_) {
    return null != _ && "object" == typeof _ && "$$typeof" in _ && _.$$typeof === P && "_payload" in _ && m(_._payload)
  }

  function m(_) {
    return "object" == typeof _ && null !== _ && "then" in _
  }
  o(l, "isLazyComponent"), o(m, "isPromiseLike");
  var c = o(_ => `${_} failed to slot onto its children. Expected a single React element child or \`Slottable\`.`, "createSlotError"),
    A = o(_ => `${_} failed to slot onto its \`Slottable\`. Expected \`Slottable\` to receive a single React element child.`, "createSlottableError"),
    d = e[" use ".trim().toString()];
  _.s(["Slot", 0, t, "createSlot", 0, E, "createSlottable", 0, N], 792135)
}, 873393, (_, e, i) => {
  "use strict";
  var s = _.r(519172).__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
  i.c = function(_) {
    return s.H.useMemoCache(_)
  }
}, 722099, (_, e, i) => {
  "use strict";
  e.exports = _.r(873393)
}]);

//# debugId=05307735-d27f-e7c4-5880-9acd572224b5
//# sourceMappingURL=17qaaoqqm9em8.js.map