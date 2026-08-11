import React from 'react';
import { Icon } from '../brand/Icon.jsx';

export function DomainCard({ icon, label, count, color, background, onClick, href, style, ...rest }) {
  const Tag = href ? 'a' : 'div';
  return (
    <Tag href={href} onClick={onClick} style={{
      background: 'var(--surface-card)', border: '1px solid var(--border-card)',
      borderRadius: 'var(--radius-18)', padding: '22px', boxShadow: 'var(--shadow-card)',
      cursor: 'pointer', display: 'flex', flexDirection: 'column', gap: 14,
      textDecoration: 'none', color: 'var(--ink-1)', transition: 'var(--transition-card)', ...style,
    }} {...rest}>
      <div style={{
        width: 48, height: 48, borderRadius: 'var(--radius-13)',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        background, color,
      }}>
        <Icon name={icon} size={24} />
      </div>
      <div>
        <h3 style={{ margin: '0 0 4px', fontSize: 'var(--text-17)', fontWeight: 'var(--fw-heavy)' }}>{label}</h3>
        {count ? <p style={{ margin: 0, fontSize: 'var(--text-13-5)', color: 'var(--ink-6)' }}>{count}</p> : null}
      </div>
    </Tag>
  );
}
