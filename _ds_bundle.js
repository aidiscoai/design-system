/* @ds-bundle: {"format":3,"namespace":"AiDiscoDesignSystem_12e451","components":[{"name":"QueryVerdict","sourcePath":"components/brand/QueryVerdict.jsx"},{"name":"ScoreGauge","sourcePath":"components/brand/ScoreGauge.jsx"},{"name":"Avatar","sourcePath":"components/core/Avatar.jsx"},{"name":"Badge","sourcePath":"components/core/Badge.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Card","sourcePath":"components/core/Card.jsx"},{"name":"IconButton","sourcePath":"components/core/IconButton.jsx"},{"name":"Input","sourcePath":"components/core/Input.jsx"},{"name":"Switch","sourcePath":"components/core/Switch.jsx"},{"name":"Tabs","sourcePath":"components/core/Tabs.jsx"},{"name":"Tag","sourcePath":"components/core/Tag.jsx"}],"sourceHashes":{"components/brand/QueryVerdict.jsx":"0cfa410c462d","components/brand/ScoreGauge.jsx":"99e65ea37578","components/core/Avatar.jsx":"dc9973cd204f","components/core/Badge.jsx":"ea42e3b62d3e","components/core/Button.jsx":"b81459bca491","components/core/Card.jsx":"05f87212ea8c","components/core/IconButton.jsx":"262b17a15870","components/core/Input.jsx":"ff12d93a16d2","components/core/Switch.jsx":"d52b0d048e52","components/core/Tabs.jsx":"5fe395a2a289","components/core/Tag.jsx":"ffe8ab639b7e","ui_kits/website/AuditDashboard.jsx":"0486fd0305cb","ui_kits/website/Hero.jsx":"044ca5dedc22","ui_kits/website/Pricing.jsx":"19afb6ec3ca0","ui_kits/website/SiteChrome.jsx":"af7edec7fdf8","ui_kits/website/primitives.jsx":"34f401633f53"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.AiDiscoDesignSystem_12e451 = window.AiDiscoDesignSystem_12e451 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/brand/QueryVerdict.jsx
try { (() => {
/**
 * Query Verdict card — the MATCH / IGNORE motif from the brand site.
 * Shows how an AI engine treats a business for a given query.
 */
function QueryVerdict({
  verdict = 'match',
  title,
  reasons = [],
  style = {}
}) {
  const isMatch = verdict === 'match';
  const accent = isMatch ? 'var(--positive)' : 'var(--negative)';
  const tint = isMatch ? 'rgba(45,226,166,0.08)' : 'rgba(255,92,122,0.07)';
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      borderRadius: 'var(--radius-lg)',
      padding: 'var(--space-5)',
      background: 'var(--bg-surface)',
      border: `1px solid ${isMatch ? 'rgba(45,226,166,0.30)' : 'var(--border)'}`,
      overflow: 'hidden',
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      background: tint,
      pointerEvents: 'none'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      display: 'flex',
      flexDirection: 'column',
      gap: 14
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: 28,
      height: 28,
      borderRadius: '50%',
      flex: 'none',
      background: accent,
      color: 'var(--midnight-black)',
      fontFamily: 'var(--font-body)',
      fontWeight: 'var(--fw-bold)',
      fontSize: 16,
      lineHeight: 1
    }
  }, isMatch ? '\u2713' : '\u2715'), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 'var(--fs-sm)',
      fontWeight: 'var(--fw-semibold)',
      letterSpacing: '0.14em',
      textTransform: 'uppercase',
      color: accent
    }
  }, isMatch ? 'Match' : 'Ignore')), title && /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 'var(--fs-h4)',
      fontWeight: 'var(--fw-semibold)',
      color: 'var(--text-primary)',
      letterSpacing: 'var(--ls-heading)'
    }
  }, title), /*#__PURE__*/React.createElement("ul", {
    style: {
      listStyle: 'none',
      margin: 0,
      padding: 0,
      display: 'flex',
      flexDirection: 'column',
      gap: 8
    }
  }, reasons.map((r, i) => /*#__PURE__*/React.createElement("li", {
    key: i,
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8,
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--fs-sm)',
      color: 'var(--text-secondary)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 5,
      height: 5,
      borderRadius: '50%',
      background: accent,
      flex: 'none'
    }
  }), r)))));
}
Object.assign(__ds_scope, { QueryVerdict });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/QueryVerdict.jsx", error: String((e && e.message) || e) }); }

// components/brand/ScoreGauge.jsx
try { (() => {
/**
 * AI Discoverability Score — the brand's signature data viz.
 * Animated conic gauge, violet→cyan sweep, big mono number.
 */
function ScoreGauge({
  value = 72,
  max = 100,
  label = 'AI Discoverability',
  size = 200
}) {
  const pct = Math.max(0, Math.min(1, value / max));
  const ring = 12;
  const [shown, setShown] = React.useState(0);
  React.useEffect(() => {
    let raf;
    const start = performance.now();
    const dur = 900;
    const tick = t => {
      const k = Math.min(1, (t - start) / dur);
      const eased = 1 - Math.pow(1 - k, 3);
      setShown(eased * pct);
      if (k < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [pct]);
  const deg = shown * 360;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'inline-flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: 14
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      width: size,
      height: size,
      borderRadius: '50%',
      background: `conic-gradient(from -90deg, var(--electric-violet), var(--neon-cyan) ${deg}deg, rgba(245,247,250,0.07) ${deg}deg)`,
      boxShadow: '0 0 40px rgba(123,92,255,0.30)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: ring,
      borderRadius: '50%',
      background: 'var(--bg-surface)',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontWeight: 'var(--fw-semibold)',
      fontSize: size * 0.30,
      lineHeight: 1,
      color: 'var(--text-primary)',
      letterSpacing: '-0.03em'
    }
  }, Math.round(shown * max)), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 'var(--fs-xs)',
      letterSpacing: '0.14em',
      textTransform: 'uppercase',
      color: 'var(--text-muted)',
      marginTop: 4
    }
  }, "/ ", max))), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--fs-sm)',
      fontWeight: 'var(--fw-medium)',
      color: 'var(--text-secondary)',
      letterSpacing: '0.02em'
    }
  }, label));
}
Object.assign(__ds_scope, { ScoreGauge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/ScoreGauge.jsx", error: String((e && e.message) || e) }); }

// components/core/Avatar.jsx
try { (() => {
/** Avatar — image or initials, with optional gradient ring. */
function Avatar({
  src,
  name = '',
  size = 40,
  ring = false,
  style = {}
}) {
  const initials = name.split(/\s+/).filter(Boolean).slice(0, 2).map(s => s[0]).join('').toUpperCase();
  const inner = /*#__PURE__*/React.createElement("div", {
    style: {
      width: size,
      height: size,
      borderRadius: '50%',
      overflow: 'hidden',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: 'var(--bg-elevated)',
      color: 'var(--text-primary)',
      fontFamily: 'var(--font-display)',
      fontWeight: 'var(--fw-semibold)',
      fontSize: size * 0.38,
      letterSpacing: '-0.02em'
    }
  }, src ? /*#__PURE__*/React.createElement("img", {
    src: src,
    alt: name,
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'cover'
    }
  }) : initials);
  if (!ring) return /*#__PURE__*/React.createElement("div", {
    style: style
  }, inner);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 2,
      borderRadius: '50%',
      background: 'var(--gradient-signal)',
      display: 'inline-flex',
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 2,
      borderRadius: '50%',
      background: 'var(--bg-base)'
    }
  }, inner));
}
Object.assign(__ds_scope, { Avatar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Avatar.jsx", error: String((e && e.message) || e) }); }

// components/core/Badge.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Status / category badge. `soft` tones down to a tinted background. */
function Badge({
  children,
  color = 'brand',
  soft = true,
  style = {},
  ...rest
}) {
  const map = {
    brand: {
      solid: 'var(--brand)',
      tint: 'rgba(123,92,255,0.16)',
      fg: 'var(--violet-bright)'
    },
    accent: {
      solid: 'var(--accent)',
      tint: 'rgba(0,229,255,0.14)',
      fg: 'var(--neon-cyan)'
    },
    magenta: {
      solid: 'var(--expression)',
      tint: 'rgba(255,45,166,0.16)',
      fg: 'var(--laser-magenta)'
    },
    positive: {
      solid: 'var(--positive)',
      tint: 'rgba(45,226,166,0.16)',
      fg: 'var(--positive)'
    },
    negative: {
      solid: 'var(--negative)',
      tint: 'rgba(255,92,122,0.16)',
      fg: 'var(--negative)'
    },
    neutral: {
      solid: 'var(--cool-gray)',
      tint: 'rgba(156,163,175,0.16)',
      fg: 'var(--cool-gray)'
    }
  };
  const c = map[color] || map.brand;
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 6,
      height: 24,
      padding: '0 10px',
      borderRadius: 'var(--radius-pill)',
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--fs-xs)',
      fontWeight: 'var(--fw-semibold)',
      letterSpacing: '0.01em',
      lineHeight: 1,
      whiteSpace: 'nowrap',
      background: soft ? c.tint : c.solid,
      color: soft ? c.fg : 'var(--on-brand)',
      border: soft ? `1px solid ${c.tint}` : '1px solid transparent',
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Badge.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * AiDisco Button — the primary brand anchor.
 * Variants: primary (violet fill), secondary (outline), ghost (text),
 * accent (cyan), expression (magenta — campaigns only). Optional glow.
 */
function Button({
  children,
  variant = 'primary',
  size = 'md',
  glow = false,
  iconLeft = null,
  iconRight = null,
  disabled = false,
  style = {},
  ...rest
}) {
  const sizes = {
    sm: {
      padding: '0 14px',
      height: 36,
      fontSize: 'var(--fs-sm)',
      gap: 8
    },
    md: {
      padding: '0 20px',
      height: 44,
      fontSize: 'var(--fs-body)',
      gap: 10
    },
    lg: {
      padding: '0 28px',
      height: 54,
      fontSize: 'var(--fs-lg)',
      gap: 12
    }
  };
  const variants = {
    primary: {
      background: 'var(--brand)',
      color: 'var(--on-brand)',
      border: '1px solid transparent',
      boxShadow: glow ? 'var(--glow-violet)' : 'none'
    },
    accent: {
      background: 'var(--accent)',
      color: 'var(--on-accent)',
      border: '1px solid transparent',
      boxShadow: glow ? 'var(--glow-cyan)' : 'none'
    },
    expression: {
      background: 'var(--expression)',
      color: 'var(--on-brand)',
      border: '1px solid transparent',
      boxShadow: glow ? 'var(--glow-magenta)' : 'none'
    },
    secondary: {
      background: 'transparent',
      color: 'var(--text-primary)',
      border: '1px solid var(--border-strong)'
    },
    ghost: {
      background: 'transparent',
      color: 'var(--text-secondary)',
      border: '1px solid transparent'
    }
  };
  const s = sizes[size] || sizes.md;
  return /*#__PURE__*/React.createElement("button", _extends({
    disabled: disabled,
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: s.gap,
      height: s.height,
      padding: s.padding,
      fontFamily: 'var(--font-body)',
      fontWeight: 'var(--fw-semibold)',
      fontSize: s.fontSize,
      lineHeight: 1,
      letterSpacing: '0.01em',
      borderRadius: 'var(--radius-sm)',
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? 0.45 : 1,
      transition: 'transform var(--dur-fast) var(--ease-out), box-shadow var(--dur-base) var(--ease-out), background var(--dur-base) var(--ease-out)',
      whiteSpace: 'nowrap',
      ...(variants[variant] || variants.primary),
      ...style
    },
    onMouseDown: e => {
      if (!disabled) e.currentTarget.style.transform = 'scale(0.97)';
    },
    onMouseUp: e => {
      e.currentTarget.style.transform = 'scale(1)';
    },
    onMouseLeave: e => {
      e.currentTarget.style.transform = 'scale(1)';
    }
  }, rest), iconLeft, children, iconRight);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Surface container. Dark-stage card with subtle border;
 * `glow` adds the signature neon edge, `interactive` lifts on hover.
 */
function Card({
  children,
  glow = null,
  // null | 'violet' | 'cyan' | 'magenta'
  interactive = false,
  padding = 'var(--space-5)',
  style = {},
  ...rest
}) {
  const glowMap = {
    violet: 'var(--glow-violet)',
    cyan: 'var(--glow-cyan)',
    magenta: 'var(--glow-magenta)'
  };
  const [hover, setHover] = React.useState(false);
  return /*#__PURE__*/React.createElement("div", _extends({
    onMouseEnter: () => interactive && setHover(true),
    onMouseLeave: () => interactive && setHover(false),
    style: {
      position: 'relative',
      background: 'var(--bg-surface)',
      border: '1px solid var(--border)',
      borderRadius: 'var(--radius-lg)',
      padding,
      boxShadow: glow ? glowMap[glow] : interactive && hover ? 'var(--shadow-lg)' : 'var(--shadow-md)',
      transform: interactive && hover ? 'translateY(-3px)' : 'translateY(0)',
      transition: 'transform var(--dur-base) var(--ease-out), box-shadow var(--dur-base) var(--ease-out)',
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Card.jsx", error: String((e && e.message) || e) }); }

// components/core/IconButton.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Square icon-only button. Same variants as Button. */
function IconButton({
  children,
  variant = 'secondary',
  size = 'md',
  label,
  disabled = false,
  style = {},
  ...rest
}) {
  const dim = {
    sm: 36,
    md: 44,
    lg: 54
  }[size] || 44;
  const variants = {
    primary: {
      background: 'var(--brand)',
      color: 'var(--on-brand)',
      border: '1px solid transparent'
    },
    accent: {
      background: 'var(--accent)',
      color: 'var(--on-accent)',
      border: '1px solid transparent'
    },
    secondary: {
      background: 'transparent',
      color: 'var(--text-primary)',
      border: '1px solid var(--border-strong)'
    },
    ghost: {
      background: 'transparent',
      color: 'var(--text-secondary)',
      border: '1px solid transparent'
    }
  };
  return /*#__PURE__*/React.createElement("button", _extends({
    "aria-label": label,
    disabled: disabled,
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: dim,
      height: dim,
      borderRadius: 'var(--radius-sm)',
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? 0.45 : 1,
      transition: 'background var(--dur-base) var(--ease-out), transform var(--dur-fast) var(--ease-out)',
      ...(variants[variant] || variants.secondary),
      ...style
    },
    onMouseDown: e => {
      if (!disabled) e.currentTarget.style.transform = 'scale(0.94)';
    },
    onMouseUp: e => {
      e.currentTarget.style.transform = 'scale(1)';
    },
    onMouseLeave: e => {
      e.currentTarget.style.transform = 'scale(1)';
    }
  }, rest), children);
}
Object.assign(__ds_scope, { IconButton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/IconButton.jsx", error: String((e && e.message) || e) }); }

// components/core/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Text input — dark field, cyan focus ring. */
function Input({
  label,
  hint,
  error,
  icon = null,
  style = {},
  id,
  ...rest
}) {
  const [focus, setFocus] = React.useState(false);
  const inputId = id || (label ? `in-${label.replace(/\s+/g, '-').toLowerCase()}` : undefined);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 6,
      width: '100%'
    }
  }, label && /*#__PURE__*/React.createElement("label", {
    htmlFor: inputId,
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--fs-sm)',
      fontWeight: 'var(--fw-medium)',
      color: 'var(--text-secondary)'
    }
  }, label), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      height: 46,
      padding: '0 14px',
      borderRadius: 'var(--radius-sm)',
      background: 'var(--bg-base)',
      border: `1px solid ${error ? 'var(--negative)' : focus ? 'var(--accent)' : 'var(--border-strong)'}`,
      boxShadow: focus && !error ? '0 0 0 3px rgba(0,229,255,0.18)' : 'none',
      transition: 'border var(--dur-base), box-shadow var(--dur-base)',
      ...style
    }
  }, icon && /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--text-muted)',
      display: 'inline-flex'
    }
  }, icon), /*#__PURE__*/React.createElement("input", _extends({
    id: inputId,
    onFocus: e => {
      setFocus(true);
      rest.onFocus && rest.onFocus(e);
    },
    onBlur: e => {
      setFocus(false);
      rest.onBlur && rest.onBlur(e);
    }
  }, rest, {
    style: {
      flex: 1,
      background: 'transparent',
      border: 'none',
      outline: 'none',
      color: 'var(--text-primary)',
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--fs-body)'
    }
  }))), (hint || error) && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--fs-xs)',
      color: error ? 'var(--negative)' : 'var(--text-muted)'
    }
  }, error || hint));
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Input.jsx", error: String((e && e.message) || e) }); }

// components/core/Switch.jsx
try { (() => {
/** On/off switch. Brand-violet track when on. */
function Switch({
  checked = false,
  onChange,
  disabled = false,
  label,
  style = {}
}) {
  const toggle = () => {
    if (!disabled && onChange) onChange(!checked);
  };
  const control = /*#__PURE__*/React.createElement("button", {
    role: "switch",
    "aria-checked": checked,
    "aria-label": label,
    disabled: disabled,
    onClick: toggle,
    style: {
      position: 'relative',
      width: 46,
      height: 26,
      flex: 'none',
      borderRadius: 'var(--radius-pill)',
      border: 'none',
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? 0.45 : 1,
      padding: 0,
      background: checked ? 'var(--brand)' : 'var(--bg-elevated)',
      boxShadow: checked ? 'var(--glow-soft)' : 'none',
      transition: 'background var(--dur-base) var(--ease-out)',
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      top: 3,
      left: checked ? 23 : 3,
      width: 20,
      height: 20,
      borderRadius: '50%',
      background: '#fff',
      transition: 'left var(--dur-base) var(--ease-out)'
    }
  }));
  if (!label) return control;
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 10,
      cursor: disabled ? 'not-allowed' : 'pointer'
    }
  }, control, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--fs-body)',
      color: 'var(--text-primary)'
    }
  }, label));
}
Object.assign(__ds_scope, { Switch });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Switch.jsx", error: String((e && e.message) || e) }); }

// components/core/Tabs.jsx
try { (() => {
/** Underline tab bar with a cyan active indicator. */
function Tabs({
  tabs = [],
  value,
  onChange,
  style = {}
}) {
  const active = value != null ? value : tabs[0] && tabs[0].id;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 4,
      borderBottom: '1px solid var(--border)',
      ...style
    }
  }, tabs.map(t => {
    const on = t.id === active;
    return /*#__PURE__*/React.createElement("button", {
      key: t.id,
      onClick: () => onChange && onChange(t.id),
      style: {
        position: 'relative',
        background: 'transparent',
        border: 'none',
        cursor: 'pointer',
        padding: '12px 16px',
        marginBottom: -1,
        fontFamily: 'var(--font-body)',
        fontSize: 'var(--fs-body)',
        fontWeight: on ? 'var(--fw-semibold)' : 'var(--fw-medium)',
        color: on ? 'var(--text-primary)' : 'var(--text-secondary)',
        transition: 'color var(--dur-base)'
      }
    }, t.label, /*#__PURE__*/React.createElement("span", {
      style: {
        position: 'absolute',
        left: 12,
        right: 12,
        bottom: 0,
        height: 2,
        borderRadius: 2,
        background: 'var(--gradient-signal)',
        opacity: on ? 1 : 0,
        transition: 'opacity var(--dur-base)'
      }
    }));
  }));
}
Object.assign(__ds_scope, { Tabs });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Tabs.jsx", error: String((e && e.message) || e) }); }

// components/core/Tag.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Monospace technical label chip — the "data readout" motif. */
function Tag({
  children,
  accent = false,
  style = {},
  ...rest
}) {
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 6,
      padding: '4px 9px',
      borderRadius: 'var(--radius-xs)',
      fontFamily: 'var(--font-mono)',
      fontSize: '11px',
      fontWeight: 'var(--fw-medium)',
      letterSpacing: '0.08em',
      textTransform: 'uppercase',
      lineHeight: 1,
      color: accent ? 'var(--neon-cyan)' : 'var(--text-secondary)',
      background: accent ? 'rgba(0,229,255,0.08)' : 'rgba(245,247,250,0.04)',
      border: `1px solid ${accent ? 'rgba(0,229,255,0.25)' : 'var(--border)'}`,
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Tag });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Tag.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/AuditDashboard.jsx
try { (() => {
/* AuditDashboard — scan animation -> AI Discoverability Score + pillar breakdown */

function PillarBar({
  icon,
  name,
  score,
  color
}) {
  const [w, setW] = React.useState(0);
  React.useEffect(() => {
    const id = setTimeout(() => setW(score), 200);
    return () => clearTimeout(id);
  }, [score]);
  return /*#__PURE__*/React.createElement(Card, {
    padding: "var(--space-5)"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12,
      marginBottom: 14
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: 38,
      height: 38,
      borderRadius: 'var(--radius-sm)',
      background: 'rgba(123,92,255,0.12)',
      color: color
    }
  }, /*#__PURE__*/React.createElement(Ico, {
    n: icon,
    size: 20
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 15,
      fontWeight: 600,
      color: 'var(--text-primary)'
    }
  }, name)), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 18,
      fontWeight: 600,
      color: 'var(--text-primary)'
    }
  }, score)), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 6,
      borderRadius: 999,
      background: 'rgba(245,247,250,0.07)',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      height: '100%',
      width: w + '%',
      borderRadius: 999,
      background: 'var(--gradient-signal)',
      transition: 'width 1s var(--ease-out)'
    }
  })));
}
function AuditDashboard({
  url,
  instant = false
}) {
  const [scanning, setScanning] = React.useState(!instant);
  React.useEffect(() => {
    if (instant) return;
    const id = setTimeout(() => setScanning(false), 1700);
    return () => clearTimeout(id);
  }, [instant]);
  const host = (url || 'yourcompany.com').replace(/^https?:\/\//, '').replace(/\/$/, '') || 'yourcompany.com';
  if (scanning) {
    return /*#__PURE__*/React.createElement("section", {
      style: {
        minHeight: 560,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 22,
        padding: 40
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        width: 64,
        height: 64,
        borderRadius: '50%',
        border: '3px solid rgba(123,92,255,0.2)',
        borderTopColor: 'var(--electric-violet)',
        animation: 'adspin 0.8s linear infinite'
      }
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: 'var(--font-mono)',
        fontSize: 14,
        letterSpacing: '0.1em',
        color: 'var(--text-secondary)'
      }
    }, "PROCESSING_SELECTION..."), /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: 'var(--font-body)',
        fontSize: 14,
        color: 'var(--text-muted)'
      }
    }, "Scanning ", host, " across 5 AI engines"), /*#__PURE__*/React.createElement("style", null, '@keyframes adspin{to{transform:rotate(360deg)}}'));
  }
  return /*#__PURE__*/React.createElement("section", {
    style: {
      padding: '48px 40px 80px',
      maxWidth: 1280,
      margin: '0 auto'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12,
      marginBottom: 8
    }
  }, /*#__PURE__*/React.createElement(Tag, {
    accent: true
  }, "AUDIT_COMPLETE"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 13,
      color: 'var(--text-muted)'
    }
  }, host)), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 38,
      letterSpacing: '-0.02em',
      fontWeight: 700,
      color: 'var(--text-primary)',
      margin: '0 0 32px'
    }
  }, "Your AI Discoverability Report"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '300px 1fr',
      gap: 32,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement(Card, {
    glow: "violet",
    style: {
      display: 'flex',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement(ScoreGauge, {
    value: 61,
    label: "AI Discoverability",
    animate: !instant
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr 1fr',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement(PillarBar, {
    icon: "code-2",
    name: "Schema Injection",
    score: 74,
    color: "var(--electric-violet)"
  }), /*#__PURE__*/React.createElement(PillarBar, {
    icon: "message-square-quote",
    name: "Prompt Architecture",
    score: 52,
    color: "var(--neon-cyan)"
  }), /*#__PURE__*/React.createElement(PillarBar, {
    icon: "shield-check",
    name: "Authority Synthesis",
    score: 58,
    color: "var(--laser-magenta)"
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 40
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 12,
      letterSpacing: '0.14em',
      textTransform: 'uppercase',
      color: 'var(--text-muted)',
      marginBottom: 16
    }
  }, "How AI sees you today"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 20
    }
  }, /*#__PURE__*/React.createElement(QueryVerdict, {
    verdict: "ignore",
    title: "\u201CBest agency for X?\u201D",
    reasons: ['Not cited by ChatGPT or Gemini', 'Missing Organization schema', 'Thin authority signals']
  }), /*#__PURE__*/React.createElement(QueryVerdict, {
    verdict: "match",
    title: "After Day Zero setup",
    reasons: ['Cited as a primary source', 'JSON-LD validated', 'Authority directories synced']
  }))), /*#__PURE__*/React.createElement(Card, {
    style: {
      marginTop: 40,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      flexWrap: 'wrap',
      gap: 20
    },
    glow: "cyan"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 24,
      fontWeight: 600,
      color: 'var(--text-primary)',
      letterSpacing: '-0.02em'
    }
  }, "Close the Citation Gap."), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 15,
      color: 'var(--text-secondary)',
      marginTop: 4
    }
  }, "A one-day technical overhaul makes your site engine-ready.")), /*#__PURE__*/React.createElement(Button, {
    variant: "accent",
    size: "lg",
    iconRight: /*#__PURE__*/React.createElement(Ico, {
      n: "arrow-right"
    })
  }, "Start Day Zero")));
}
Object.assign(window, {
  AuditDashboard
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/AuditDashboard.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Hero.jsx
try { (() => {
/* Hero — the dark-stage landing view with the live-query-analysis panel */

function LiveQueryPanel() {
  const [step, setStep] = React.useState(0);
  React.useEffect(() => {
    const id = setInterval(() => setStep(s => (s + 1) % 4), 1600);
    return () => clearInterval(id);
  }, []);
  return /*#__PURE__*/React.createElement(Card, {
    padding: "0",
    style: {
      overflow: 'hidden',
      background: 'var(--bg-base)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '14px 18px',
      borderBottom: '1px solid var(--border)',
      background: 'var(--bg-surface)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 12,
      letterSpacing: '0.12em',
      color: 'var(--text-secondary)'
    }
  }, "LIVE_QUERY_ANALYSIS"), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      gap: 5
    }
  }, [0, 1, 2].map(i => /*#__PURE__*/React.createElement("span", {
    key: i,
    style: {
      width: 7,
      height: 7,
      borderRadius: '50%',
      background: 'var(--neon-cyan)',
      opacity: step % 3 === i ? 1 : 0.25,
      transition: 'opacity .3s'
    }
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 20
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 12,
      color: 'var(--text-muted)',
      marginBottom: 6
    }
  }, "QUERY_INPUT"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 16,
      color: 'var(--text-primary)',
      marginBottom: 18
    }
  }, "\u201CBest outsourcing companies?\u201D"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 14
    }
  }, /*#__PURE__*/React.createElement(QueryVerdict, {
    verdict: "match",
    title: "Your Brand",
    reasons: ['Structured data', 'Authority high']
  }), /*#__PURE__*/React.createElement(QueryVerdict, {
    verdict: "ignore",
    title: "Competitor",
    reasons: ['Weak citations', 'Unstructured']
  }))));
}
function Hero({
  onAudit
}) {
  const [url, setUrl] = React.useState('');
  return /*#__PURE__*/React.createElement("section", {
    style: {
      position: 'relative',
      padding: '80px 40px 100px',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: -120,
      left: '50%',
      transform: 'translateX(-50%)',
      width: 900,
      height: 500,
      background: 'radial-gradient(closest-side, rgba(123,92,255,0.22), transparent)',
      pointerEvents: 'none'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      maxWidth: 1280,
      margin: '0 auto',
      display: 'grid',
      gridTemplateColumns: '1.1fr 1fr',
      gap: 56,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Tag, {
    accent: true,
    style: {
      marginBottom: 22
    }
  }, "Built for the era of generative search"), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 68,
      lineHeight: 1.02,
      letterSpacing: '-0.03em',
      fontWeight: 700,
      color: 'var(--text-primary)',
      margin: 0
    }
  }, "Be the answer.", /*#__PURE__*/React.createElement("br", null), "Not a ", /*#__PURE__*/React.createElement("span", {
    style: {
      background: 'var(--gradient-signal)',
      WebkitBackgroundClip: 'text',
      backgroundClip: 'text',
      color: 'transparent'
    }
  }, "digital ghost"), "."), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 19,
      lineHeight: 1.6,
      color: 'var(--text-secondary)',
      maxWidth: 520,
      margin: '22px 0 34px'
    }
  }, "AI doesn't search. It selects. We make sure ChatGPT, Gemini, and Perplexity cite, recommend, and choose ", /*#__PURE__*/React.createElement("em", {
    style: {
      fontStyle: 'normal',
      color: 'var(--text-primary)'
    }
  }, "you"), "."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 12,
      alignItems: 'flex-end',
      maxWidth: 520
    }
  }, /*#__PURE__*/React.createElement(Input, {
    placeholder: "https://yourcompany.com",
    icon: /*#__PURE__*/React.createElement(Ico, {
      n: "globe"
    }),
    value: url,
    onChange: e => setUrl(e.target.value),
    onKeyDown: e => e.key === 'Enter' && onAudit(url)
  }), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "md",
    glow: true,
    iconRight: /*#__PURE__*/React.createElement(Ico, {
      n: "arrow-right"
    }),
    onClick: () => onAudit(url),
    style: {
      flex: 'none'
    }
  }, "Get my AI score")), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 16,
      fontFamily: 'var(--font-mono)',
      fontSize: 12,
      color: 'var(--text-muted)',
      letterSpacing: '0.06em'
    }
  }, "FREE \xB7 60-SECOND AUDIT \xB7 NO SIGNUP")), /*#__PURE__*/React.createElement(LiveQueryPanel, null)));
}
Object.assign(window, {
  Hero
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Hero.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Pricing.jsx
try { (() => {
/* Pricing — Day Zero + two growth tiers */

function PriceCard({
  featured,
  tag,
  name,
  price,
  unit,
  desc,
  features,
  cta,
  ctaVariant
}) {
  return /*#__PURE__*/React.createElement(Card, {
    glow: featured ? 'violet' : null,
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 18,
      border: featured ? '1px solid var(--border-brand)' : '1px solid var(--border)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 22,
      fontWeight: 600,
      color: 'var(--text-primary)',
      letterSpacing: '-0.02em'
    }
  }, name), tag && /*#__PURE__*/React.createElement(Badge, {
    color: featured ? 'brand' : 'neutral'
  }, tag)), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'baseline',
      gap: 6
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 40,
      fontWeight: 600,
      color: 'var(--text-primary)',
      letterSpacing: '-0.03em'
    }
  }, price), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 14,
      color: 'var(--text-muted)'
    }
  }, unit)), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 14,
      lineHeight: 1.55,
      color: 'var(--text-secondary)',
      margin: 0
    }
  }, desc), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 1,
      background: 'var(--border)'
    }
  }), /*#__PURE__*/React.createElement("ul", {
    style: {
      listStyle: 'none',
      margin: 0,
      padding: 0,
      display: 'flex',
      flexDirection: 'column',
      gap: 11,
      flex: 1
    }
  }, features.map((f, i) => /*#__PURE__*/React.createElement("li", {
    key: i,
    style: {
      display: 'flex',
      alignItems: 'flex-start',
      gap: 10,
      fontFamily: 'var(--font-body)',
      fontSize: 14,
      color: 'var(--text-primary)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--neon-cyan)',
      marginTop: 1,
      flex: 'none'
    }
  }, /*#__PURE__*/React.createElement(Ico, {
    n: "check",
    size: 16
  })), f))), /*#__PURE__*/React.createElement(Button, {
    variant: ctaVariant,
    size: "md",
    style: {
      width: '100%'
    }
  }, cta));
}
function Pricing() {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      padding: '64px 40px 90px',
      maxWidth: 1280,
      margin: '0 auto'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'center',
      marginBottom: 48
    }
  }, /*#__PURE__*/React.createElement(Tag, {
    accent: true,
    style: {
      marginBottom: 18
    }
  }, "Tiered growth"), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 44,
      letterSpacing: '-0.03em',
      fontWeight: 700,
      color: 'var(--text-primary)',
      margin: '0 0 12px'
    }
  }, "From ranked to cited."), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 17,
      color: 'var(--text-secondary)',
      maxWidth: 560,
      margin: '0 auto'
    }
  }, "Start with a one-day overhaul, then grow with the model that fits your ambition.")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3, 1fr)',
      gap: 22,
      alignItems: 'stretch'
    }
  }, /*#__PURE__*/React.createElement(PriceCard, {
    name: "Day Zero",
    tag: "Setup",
    price: "$2,500",
    unit: "one-time",
    desc: "A rapid technical reconfiguration of your HTML and CMS logic to make your site engine-ready.",
    features: ['Organization + SoftwareApplication schema', 'JSON-LD validation', 'AI crawler access audit', 'Baseline discoverability report'],
    cta: "Book Day Zero",
    ctaVariant: "secondary"
  }), /*#__PURE__*/React.createElement(PriceCard, {
    featured: true,
    name: "Authority",
    tag: "Most popular",
    price: "$3,900",
    unit: "/ month",
    desc: "A fixed model for predictable lead generation across every major answer engine.",
    features: ['Everything in Day Zero', 'Continuous prompt architecture', 'Authority signal synthesis', 'Monthly citation monitoring', 'ChatGPT · Gemini · Perplexity coverage'],
    cta: "Start subscription",
    ctaVariant: "primary"
  }), /*#__PURE__*/React.createElement(PriceCard, {
    name: "Performance",
    tag: "Scale",
    price: "Custom",
    unit: "rev-share",
    desc: "For brands seeking aggressive, scalable growth in the AI market \u2014 you grow, we grow.",
    features: ['Everything in Authority', 'Dedicated discovery strategist', 'Competitor citation displacement', 'Quarterly authority campaigns'],
    cta: "Talk to us",
    ctaVariant: "secondary"
  })));
}
Object.assign(window, {
  Pricing
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Pricing.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/SiteChrome.jsx
try { (() => {
/* Shared site chrome: top nav + footer */

function SiteNav({
  onNav,
  view
}) {
  const links = [{
    id: 'home',
    label: 'Home'
  }, {
    id: 'audit',
    label: 'Audit'
  }, {
    id: 'pricing',
    label: 'Pricing'
  }];
  return /*#__PURE__*/React.createElement("header", {
    style: {
      position: 'sticky',
      top: 0,
      zIndex: 20,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '18px 40px',
      background: 'rgba(10,10,15,0.72)',
      backdropFilter: 'var(--blur-panel)',
      WebkitBackdropFilter: 'var(--blur-panel)',
      borderBottom: '1px solid var(--border)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      cursor: 'pointer'
    },
    onClick: () => onNav('home')
  }, /*#__PURE__*/React.createElement(Logo, {
    height: 30
  })), /*#__PURE__*/React.createElement("nav", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8
    }
  }, links.map(l => /*#__PURE__*/React.createElement("button", {
    key: l.id,
    onClick: () => onNav(l.id),
    style: {
      background: 'transparent',
      border: 'none',
      cursor: 'pointer',
      padding: '8px 14px',
      borderRadius: 'var(--radius-sm)',
      fontFamily: 'var(--font-body)',
      fontSize: 15,
      fontWeight: view === l.id ? 600 : 500,
      color: view === l.id ? 'var(--text-primary)' : 'var(--text-secondary)'
    }
  }, l.label)), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "sm",
    style: {
      marginLeft: 10
    },
    onClick: () => onNav('audit')
  }, "Get my score")));
}
function SiteFooter() {
  return /*#__PURE__*/React.createElement("footer", {
    style: {
      padding: '40px',
      borderTop: '1px solid var(--border)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      flexWrap: 'wrap',
      gap: 20
    }
  }, /*#__PURE__*/React.createElement(Logo, {
    height: 26
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 24,
      fontFamily: 'var(--font-body)',
      fontSize: 14,
      color: 'var(--text-muted)'
    }
  }, /*#__PURE__*/React.createElement("span", null, "Schema Injection"), /*#__PURE__*/React.createElement("span", null, "Prompt Architecture"), /*#__PURE__*/React.createElement("span", null, "Authority Synthesis")), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 12,
      color: 'var(--text-muted)',
      letterSpacing: '0.08em'
    }
  }, "\xA9 AIDISCO 2026"));
}
Object.assign(window, {
  SiteNav,
  SiteFooter
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/SiteChrome.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/primitives.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* AiDisco UI-kit primitives.
   These mirror the design-system components (window.AiDiscoDesignSystem_*).
   They're inlined here so this kit renders standalone; in production a
   consumer would import the same components from the compiled _ds_bundle.js. */

// ---- Lucide icon helper ----
function Ico({
  n,
  size = 18,
  color,
  style = {}
}) {
  const ref = React.useRef(null);
  React.useEffect(() => {
    if (!ref.current) return;
    ref.current.innerHTML = '';
    const e = document.createElement('i');
    e.setAttribute('data-lucide', n);
    ref.current.appendChild(e);
    if (window.lucide) window.lucide.createIcons({
      attrs: {
        width: size,
        height: size,
        stroke: color || 'currentColor'
      }
    });
  }, [n, size, color]);
  return /*#__PURE__*/React.createElement("span", {
    ref: ref,
    style: {
      display: 'inline-flex',
      ...style
    }
  });
}
function Logo({
  height = 30,
  variant = 'primary'
}) {
  const src = variant === 'icon' ? '../../assets/logos/aidisco-icon-cropped.png' : '../../assets/logos/aidisco-primary-dark-cropped.png';
  return /*#__PURE__*/React.createElement("img", {
    src: src,
    alt: "AiDisco",
    style: {
      height,
      width: 'auto',
      display: 'block'
    }
  });
}
function Button({
  children,
  variant = 'primary',
  size = 'md',
  glow = false,
  iconLeft,
  iconRight,
  style = {},
  ...rest
}) {
  const sizes = {
    sm: {
      h: 36,
      p: '0 14px',
      fs: 14
    },
    md: {
      h: 46,
      p: '0 22px',
      fs: 16
    },
    lg: {
      h: 56,
      p: '0 30px',
      fs: 18
    }
  };
  const v = {
    primary: {
      background: 'var(--brand)',
      color: '#fff',
      border: '1px solid transparent',
      boxShadow: glow ? 'var(--glow-violet)' : 'none'
    },
    accent: {
      background: 'var(--accent)',
      color: 'var(--on-accent)',
      border: '1px solid transparent',
      boxShadow: glow ? 'var(--glow-cyan)' : 'none'
    },
    expression: {
      background: 'var(--expression)',
      color: '#fff',
      border: '1px solid transparent'
    },
    secondary: {
      background: 'transparent',
      color: 'var(--text-primary)',
      border: '1px solid var(--border-strong)'
    },
    ghost: {
      background: 'transparent',
      color: 'var(--text-secondary)',
      border: '1px solid transparent'
    }
  }[variant];
  const s = sizes[size];
  return /*#__PURE__*/React.createElement("button", _extends({
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 10,
      height: s.h,
      padding: s.p,
      fontFamily: 'var(--font-body)',
      fontWeight: 600,
      fontSize: s.fs,
      borderRadius: 'var(--radius-sm)',
      cursor: 'pointer',
      whiteSpace: 'nowrap',
      transition: 'transform .12s, box-shadow .2s, filter .2s',
      ...v,
      ...style
    },
    onMouseDown: e => e.currentTarget.style.transform = 'scale(0.97)',
    onMouseUp: e => e.currentTarget.style.transform = 'scale(1)',
    onMouseLeave: e => e.currentTarget.style.transform = 'scale(1)'
  }, rest), iconLeft, children, iconRight);
}
function Card({
  children,
  glow,
  interactive,
  padding = 'var(--space-5)',
  style = {},
  ...rest
}) {
  const [h, setH] = React.useState(false);
  const glowMap = {
    violet: 'var(--glow-violet)',
    cyan: 'var(--glow-cyan)',
    magenta: 'var(--glow-magenta)'
  };
  return /*#__PURE__*/React.createElement("div", _extends({
    onMouseEnter: () => interactive && setH(true),
    onMouseLeave: () => interactive && setH(false),
    style: {
      position: 'relative',
      background: 'var(--bg-surface)',
      border: '1px solid var(--border)',
      borderRadius: 'var(--radius-lg)',
      padding,
      boxShadow: glow ? glowMap[glow] : interactive && h ? 'var(--shadow-lg)' : 'var(--shadow-md)',
      transform: interactive && h ? 'translateY(-3px)' : 'none',
      transition: 'transform .2s, box-shadow .2s',
      ...style
    }
  }, rest), children);
}
function Badge({
  children,
  color = 'brand',
  soft = true,
  style = {}
}) {
  const map = {
    brand: {
      solid: 'var(--brand)',
      tint: 'rgba(123,92,255,0.16)',
      fg: 'var(--violet-bright)'
    },
    accent: {
      solid: 'var(--accent)',
      tint: 'rgba(0,229,255,0.14)',
      fg: 'var(--neon-cyan)'
    },
    magenta: {
      solid: 'var(--expression)',
      tint: 'rgba(255,45,166,0.16)',
      fg: 'var(--laser-magenta)'
    },
    positive: {
      solid: 'var(--positive)',
      tint: 'rgba(45,226,166,0.16)',
      fg: 'var(--positive)'
    },
    negative: {
      solid: 'var(--negative)',
      tint: 'rgba(255,92,122,0.16)',
      fg: 'var(--negative)'
    },
    neutral: {
      solid: 'var(--cool-gray)',
      tint: 'rgba(156,163,175,0.16)',
      fg: 'var(--cool-gray)'
    }
  }[color];
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 6,
      height: 24,
      padding: '0 10px',
      borderRadius: 'var(--radius-pill)',
      fontFamily: 'var(--font-body)',
      fontSize: 12,
      fontWeight: 600,
      lineHeight: 1,
      whiteSpace: 'nowrap',
      background: soft ? map.tint : map.solid,
      color: soft ? map.fg : '#fff',
      border: '1px solid ' + (soft ? map.tint : 'transparent'),
      ...style
    }
  }, children);
}
function Tag({
  children,
  accent = false,
  style = {}
}) {
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 6,
      padding: '4px 9px',
      borderRadius: 'var(--radius-xs)',
      fontFamily: 'var(--font-mono)',
      fontSize: 11,
      fontWeight: 500,
      letterSpacing: '0.08em',
      textTransform: 'uppercase',
      lineHeight: 1,
      color: accent ? 'var(--neon-cyan)' : 'var(--text-secondary)',
      background: accent ? 'rgba(0,229,255,0.08)' : 'rgba(245,247,250,0.04)',
      border: '1px solid ' + (accent ? 'rgba(0,229,255,0.25)' : 'var(--border)'),
      ...style
    }
  }, children);
}
function Input({
  label,
  icon,
  style = {},
  ...rest
}) {
  const [f, setF] = React.useState(false);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 6,
      width: '100%'
    }
  }, label && /*#__PURE__*/React.createElement("label", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 14,
      fontWeight: 500,
      color: 'var(--text-secondary)'
    }
  }, label), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      height: 52,
      padding: '0 16px',
      borderRadius: 'var(--radius-sm)',
      background: 'var(--bg-base)',
      border: '1px solid ' + (f ? 'var(--accent)' : 'var(--border-strong)'),
      boxShadow: f ? '0 0 0 3px rgba(0,229,255,0.18)' : 'none',
      transition: 'border .2s, box-shadow .2s',
      ...style
    }
  }, icon && /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--text-muted)',
      display: 'inline-flex'
    }
  }, icon), /*#__PURE__*/React.createElement("input", _extends({
    onFocus: () => setF(true),
    onBlur: () => setF(false)
  }, rest, {
    style: {
      flex: 1,
      background: 'transparent',
      border: 'none',
      outline: 'none',
      color: 'var(--text-primary)',
      fontFamily: 'var(--font-body)',
      fontSize: 16
    }
  }))));
}
function ScoreGauge({
  value = 72,
  max = 100,
  label = 'AI Discoverability',
  size = 200,
  animate = true
}) {
  const pct = Math.max(0, Math.min(1, value / max));
  const [shown, setShown] = React.useState(animate ? 0 : pct);
  React.useEffect(() => {
    if (!animate) {
      setShown(pct);
      return;
    }
    let raf;
    const start = performance.now();
    const dur = 1000;
    const tick = t => {
      const k = Math.min(1, (t - start) / dur);
      setShown((1 - Math.pow(1 - k, 3)) * pct);
      if (k < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [pct, animate]);
  const deg = shown * 360;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'inline-flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: 14
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      width: size,
      height: size,
      borderRadius: '50%',
      background: 'conic-gradient(from -90deg, var(--electric-violet), var(--neon-cyan) ' + deg + 'deg, rgba(245,247,250,0.07) ' + deg + 'deg)',
      boxShadow: '0 0 40px rgba(123,92,255,0.30)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 12,
      borderRadius: '50%',
      background: 'var(--bg-surface)',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontWeight: 600,
      fontSize: size * 0.30,
      lineHeight: 1,
      color: 'var(--text-primary)',
      letterSpacing: '-0.03em'
    }
  }, Math.round(shown * max)), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 12,
      letterSpacing: '0.14em',
      color: 'var(--text-muted)',
      marginTop: 4
    }
  }, "/ ", max))), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 14,
      fontWeight: 500,
      color: 'var(--text-secondary)'
    }
  }, label));
}
function QueryVerdict({
  verdict = 'match',
  title,
  reasons = [],
  style = {}
}) {
  const m = verdict === 'match';
  const accent = m ? 'var(--positive)' : 'var(--negative)';
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      borderRadius: 'var(--radius-lg)',
      padding: 'var(--space-5)',
      background: 'var(--bg-surface)',
      border: '1px solid ' + (m ? 'rgba(45,226,166,0.30)' : 'var(--border)'),
      overflow: 'hidden',
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      background: m ? 'rgba(45,226,166,0.07)' : 'rgba(255,92,122,0.06)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      display: 'flex',
      flexDirection: 'column',
      gap: 14
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: 28,
      height: 28,
      borderRadius: '50%',
      background: accent,
      color: '#0A0A0F',
      fontWeight: 700,
      fontSize: 16
    }
  }, m ? '\u2713' : '\u2715'), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 14,
      fontWeight: 600,
      letterSpacing: '0.14em',
      textTransform: 'uppercase',
      color: accent
    }
  }, m ? 'Match' : 'Ignore')), title && /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 20,
      fontWeight: 600,
      color: 'var(--text-primary)',
      letterSpacing: '-0.02em'
    }
  }, title), /*#__PURE__*/React.createElement("ul", {
    style: {
      listStyle: 'none',
      margin: 0,
      padding: 0,
      display: 'flex',
      flexDirection: 'column',
      gap: 8
    }
  }, reasons.map((r, i) => /*#__PURE__*/React.createElement("li", {
    key: i,
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8,
      fontFamily: 'var(--font-body)',
      fontSize: 14,
      color: 'var(--text-secondary)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 5,
      height: 5,
      borderRadius: '50%',
      background: accent
    }
  }), r)))));
}
Object.assign(window, {
  Ico,
  Logo,
  Button,
  Card,
  Badge,
  Tag,
  Input,
  ScoreGauge,
  QueryVerdict
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/primitives.jsx", error: String((e && e.message) || e) }); }

__ds_ns.QueryVerdict = __ds_scope.QueryVerdict;

__ds_ns.ScoreGauge = __ds_scope.ScoreGauge;

__ds_ns.Avatar = __ds_scope.Avatar;

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.IconButton = __ds_scope.IconButton;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.Switch = __ds_scope.Switch;

__ds_ns.Tabs = __ds_scope.Tabs;

__ds_ns.Tag = __ds_scope.Tag;

})();
