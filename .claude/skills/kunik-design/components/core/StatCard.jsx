import React from 'react';

export function StatCard({ label, value, sub, color = 'var(--navy-800)', style, ...rest }) {
  return (
    <div style={{
      background: 'var(--surface-card)', border: '1px solid var(--border-card)',
      borderRadius: 'var(--radius-14)', padding: 18, boxShadow: 'var(--shadow-card)', ...style,
    }} {...rest}>
      <div style={{ fontSize: 'var(--text-12-5)', fontWeight: 'var(--fw-bold)', letterSpacing: '1.1px', color: 'var(--ink-7)' }}>{label}</div>
      <div style={{
        fontFamily: 'var(--font-num)', fontSize: 'var(--text-32)', fontWeight: 'var(--fw-black)',
        letterSpacing: 'var(--track-stat)', marginTop: 6, color,
      }}>{value}</div>
      {sub ? <div style={{ fontSize: 'var(--text-13)', fontWeight: 'var(--fw-medium)', color: 'var(--ink-6)', marginTop: 2 }}>{sub}</div> : null}
    </div>
  );
}
