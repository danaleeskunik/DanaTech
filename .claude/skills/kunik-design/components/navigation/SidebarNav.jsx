import React from 'react';
import { Logo } from '../brand/Logo.jsx';
import { Icon } from '../brand/Icon.jsx';

export function SidebarNav({ title, subtitle, items = [], activeId, onSelect, footer, style, ...rest }) {
  return (
    <aside style={{
      width: 250, flex: 'none', background: 'var(--navy-800)',
      padding: '30px 20px', display: 'flex', flexDirection: 'column', gap: 26, ...style,
    }} {...rest}>
      <div>
        <Logo height={30} style={{ marginBottom: 14 }} />
        <h1 style={{ margin: '0 0 4px', fontSize: 'var(--text-19)', fontWeight: 'var(--fw-heavy)', color: '#fff' }}>{title}</h1>
        {subtitle ? <p style={{ margin: 0, fontSize: 'var(--text-12-5)', fontWeight: 'var(--fw-medium)', color: 'var(--blue-300)', lineHeight: 'var(--lh-snug)' }}>{subtitle}</p> : null}
      </div>
      <nav style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
        {items.map((it) => {
          const on = it.id === activeId;
          return (
            <button key={it.id} onClick={() => onSelect && onSelect(it.id)} style={{
              display: 'flex', alignItems: 'center', gap: 12, padding: '11px 14px',
              borderRadius: 'var(--radius-12)', border: 'none',
              background: on ? 'var(--on-navy-fill-strong)' : 'transparent', color: '#fff',
              fontFamily: 'var(--font-ui)', fontSize: 'var(--text-14-5)', fontWeight: 'var(--fw-bold)',
              cursor: 'pointer', textAlign: 'start', width: '100%',
            }}>
              <Icon name={it.icon} size={19} style={{ color: on ? '#fff' : 'var(--blue-300)' }} />
              {it.label}
            </button>
          );
        })}
      </nav>
      {footer ? (
        <div style={{ marginTop: 'auto', display: 'flex', flexDirection: 'column', gap: 8, paddingTop: 14, borderTop: '1px solid var(--on-navy-divider)' }}>{footer}</div>
      ) : null}
    </aside>
  );
}
