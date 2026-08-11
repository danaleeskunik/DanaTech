import React from 'react';

const STATES = {
  idle: ['var(--ink-7)', 'לא סונכרן'],
  syncing: ['var(--orange-500)', 'מסנכרן…'],
  synced: ['var(--green-500)', 'מסונכרן'],
  error: ['var(--red-600)', 'שגיאה בסנכרון'],
};

export function SyncStatus({ state = 'idle', label, sub, onNavy = true, style, ...rest }) {
  const [dot, fallback] = STATES[state] || STATES.idle;
  return (
    <div style={{
      display: 'flex', flex: 'none', alignItems: 'center', gap: 9, padding: '8px 14px',
      borderRadius: 'var(--radius-9)', cursor: 'pointer', userSelect: 'none',
      border: onNavy ? '1px solid var(--on-navy-border)' : '1px solid var(--border-card)',
      background: onNavy ? 'var(--on-navy-fill)' : 'var(--surface-card)', ...style,
    }} {...rest}>
      <div style={{ width: 9, height: 9, flex: 'none', borderRadius: 'var(--radius-circle)', background: dot }} />
      <div style={{ lineHeight: 1.2 }}>
        <div style={{ fontSize: 'var(--text-13)', fontWeight: 'var(--fw-bold)', color: onNavy ? '#fff' : 'var(--ink-1)' }}>{label || fallback}</div>
        {sub ? <div style={{ fontSize: 'var(--text-11)', fontWeight: 'var(--fw-medium)', color: onNavy ? 'var(--blue-300)' : 'var(--ink-7)' }}>{sub}</div> : null}
      </div>
    </div>
  );
}
