import React from 'react';

const BARS = [
  { h: 0.458, c: 'var(--blue-300)' },
  { h: 0.708, c: 'var(--blue-400)' },
  { h: 1, c: null },
];

export function Logo({ height = 24, onNavy = true, lockup, title, subtitle, style }) {
  const w = Math.round(height * 0.29);
  const gap = Math.max(2, Math.round(height * 0.125));
  const radius = height >= 30 ? 3 : 2;
  const mark = (
    <div style={{ display: 'flex', alignItems: 'flex-end', gap, height, flex: 'none' }}>
      {BARS.map((b, i) => (
        <div key={i} style={{
          width: w, height: Math.round(height * b.h), borderRadius: radius,
          background: b.c || (onNavy ? '#fff' : 'var(--navy-800)'),
        }} />
      ))}
    </div>
  );
  if (!lockup) return <div style={style}>{mark}</div>;
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 12, ...style }}>
      {mark}
      <div>
        <div style={{
          font: 'var(--fw-heavy) var(--text-17) / var(--lh-tight) var(--font-ui)',
          color: onNavy ? 'var(--text-on-navy)' : 'var(--ink-1)',
        }}>{title}</div>
        {subtitle ? (
          <div style={{
            fontSize: 'var(--text-12)', fontWeight: 'var(--fw-semibold)',
            letterSpacing: '.8px', color: onNavy ? 'var(--blue-300)' : 'var(--ink-6)',
          }}>{subtitle}</div>
        ) : null}
      </div>
    </div>
  );
}
