import React from 'react';

export function ListRow({ leading, title, meta, badge, actions, titleColor = 'var(--ink-1)', struck, style, ...rest }) {
  return (
    <div style={{
      display: 'flex', alignItems: 'center', gap: 14,
      background: 'var(--surface-card)', border: '1px solid var(--border-card)',
      borderRadius: 'var(--radius-12)', padding: '13px 16px', flexWrap: 'wrap', ...style,
    }} {...rest}>
      {leading}
      <div style={{ flex: 1, minWidth: 0 }}>
        <div style={{
          fontSize: 'var(--text-17)', fontWeight: 'var(--fw-heavy)', color: titleColor,
          textDecoration: struck ? 'line-through' : 'none',
        }}>{title}</div>
        {meta ? <div style={{ fontSize: 'var(--text-13-5)', fontWeight: 'var(--fw-medium)', color: 'var(--ink-6)' }}>{meta}</div> : null}
        {badge ? <div style={{ marginTop: 5 }}>{badge}</div> : null}
      </div>
      {actions ? <div style={{ flex: 'none', display: 'flex', alignItems: 'center', gap: 7 }}>{actions}</div> : null}
    </div>
  );
}
