import React from 'react';

/**
 * AI Discoverability Score — the brand's signature data viz.
 * Animated conic gauge, violet→cyan sweep, big mono number.
 */
export function ScoreGauge({ value = 72, max = 100, label = 'AI Discoverability', size = 200 }) {
  const pct = Math.max(0, Math.min(1, value / max));
  const ring = 12;
  const [shown, setShown] = React.useState(0);
  React.useEffect(() => {
    let raf; const start = performance.now(); const dur = 900;
    const tick = (t) => {
      const k = Math.min(1, (t - start) / dur);
      const eased = 1 - Math.pow(1 - k, 3);
      setShown(eased * pct);
      if (k < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [pct]);
  const deg = shown * 360;
  return (
    <div style={{ display: 'inline-flex', flexDirection: 'column', alignItems: 'center', gap: 14 }}>
      <div style={{
        position: 'relative', width: size, height: size, borderRadius: '50%',
        background: `conic-gradient(from -90deg, var(--electric-violet), var(--neon-cyan) ${deg}deg, rgba(245,247,250,0.07) ${deg}deg)`,
        boxShadow: '0 0 40px rgba(123,92,255,0.30)',
      }}>
        <div style={{
          position: 'absolute', inset: ring, borderRadius: '50%',
          background: 'var(--bg-surface)',
          display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
        }}>
          <span style={{
            fontFamily: 'var(--font-mono)', fontWeight: 'var(--fw-semibold)',
            fontSize: size * 0.30, lineHeight: 1, color: 'var(--text-primary)', letterSpacing: '-0.03em',
          }}>{Math.round(shown * max)}</span>
          <span style={{
            fontFamily: 'var(--font-mono)', fontSize: 'var(--fs-xs)', letterSpacing: '0.14em',
            textTransform: 'uppercase', color: 'var(--text-muted)', marginTop: 4,
          }}>/ {max}</span>
        </div>
      </div>
      <span style={{
        fontFamily: 'var(--font-body)', fontSize: 'var(--fs-sm)', fontWeight: 'var(--fw-medium)',
        color: 'var(--text-secondary)', letterSpacing: '0.02em',
      }}>{label}</span>
    </div>
  );
}
