import React from 'react';

/**
 * Query Verdict card — the MATCH / IGNORE motif from the brand site.
 * Shows how an AI engine treats a business for a given query.
 */
export function QueryVerdict({ verdict = 'match', title, reasons = [], style = {} }) {
  const isMatch = verdict === 'match';
  const accent = isMatch ? 'var(--positive)' : 'var(--negative)';
  const tint = isMatch ? 'rgba(45,226,166,0.08)' : 'rgba(255,92,122,0.07)';
  return (
    <div style={{
      position: 'relative', borderRadius: 'var(--radius-lg)', padding: 'var(--space-5)',
      background: 'var(--bg-surface)', border: `1px solid ${isMatch ? 'rgba(45,226,166,0.30)' : 'var(--border)'}`,
      overflow: 'hidden', ...style,
    }}>
      <div style={{ position: 'absolute', inset: 0, background: tint, pointerEvents: 'none' }} />
      <div style={{ position: 'relative', display: 'flex', flexDirection: 'column', gap: 14 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <span style={{
            display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
            width: 28, height: 28, borderRadius: '50%', flex: 'none',
            background: accent, color: 'var(--midnight-black)',
            fontFamily: 'var(--font-body)', fontWeight: 'var(--fw-bold)', fontSize: 16, lineHeight: 1,
          }}>{isMatch ? '\u2713' : '\u2715'}</span>
          <span style={{
            fontFamily: 'var(--font-mono)', fontSize: 'var(--fs-sm)', fontWeight: 'var(--fw-semibold)',
            letterSpacing: '0.14em', textTransform: 'uppercase', color: accent,
          }}>{isMatch ? 'Match' : 'Ignore'}</span>
        </div>
        {title && (
          <div style={{
            fontFamily: 'var(--font-display)', fontSize: 'var(--fs-h4)', fontWeight: 'var(--fw-semibold)',
            color: 'var(--text-primary)', letterSpacing: 'var(--ls-heading)',
          }}>{title}</div>
        )}
        <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'flex', flexDirection: 'column', gap: 8 }}>
          {reasons.map((r, i) => (
            <li key={i} style={{
              display: 'flex', alignItems: 'center', gap: 8,
              fontFamily: 'var(--font-body)', fontSize: 'var(--fs-sm)', color: 'var(--text-secondary)',
            }}>
              <span style={{ width: 5, height: 5, borderRadius: '50%', background: accent, flex: 'none' }} />
              {r}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
