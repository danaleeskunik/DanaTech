import React from 'react';

export function LevelPill({ label, color = 'var(--blue-500)', selected, dot = true, style, ...rest }) {
  return (
    <div style={{
      display: 'flex', alignItems: 'center', gap: 9, padding: '11px 18px',
      borderRadius: 'var(--radius-pill)', cursor: 'pointer', userSelect: 'none',
      fontFamily: 'var(--font-ui)', fontSize: 'var(--text-15-5)', fontWeight: 'var(--fw-bold)',
      border: `2px solid ${selected ? color : 'var(--border-field)'}`,
      background: selected ? color : 'var(--surface-card)',
      color: selected ? '#fff' : 'var(--ink-4)', ...style,
    }} {...rest}>
      {dot ? <div style={{ width: 10, height: 10, borderRadius: 'var(--radius-circle)', background: selected ? '#fff' : color }} /> : null}
      {label}
    </div>
  );
}
