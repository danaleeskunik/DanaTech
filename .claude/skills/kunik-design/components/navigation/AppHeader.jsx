import React from 'react';
import { Logo } from '../brand/Logo.jsx';

export function AppHeader({ title, subtitle, tabs = [], activeTab, onTabChange, actions, maxWidth = 'var(--page-max-wide)', style, ...rest }) {
  return (
    <div style={{
      background: 'var(--navy-800)', color: '#fff', position: 'sticky', top: 0, zIndex: 20,
      boxShadow: 'var(--shadow-header)', ...style,
    }} {...rest}>
      <div style={{ maxWidth, margin: '0 auto', padding: '14px var(--page-gutter) 0' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 16, flexWrap: 'wrap' }}>
          <Logo height={24} lockup title={title} subtitle={subtitle} />
          <div style={{ display: 'flex', alignItems: 'center', gap: 9, flexWrap: 'wrap' }}>{actions}</div>
        </div>
        {tabs.length ? (
          <div style={{ display: 'flex', gap: 4, marginTop: 14, overflowX: 'auto' }}>
            {tabs.map((t) => {
              const on = t.id === activeTab;
              return (
                <div key={t.id} onClick={() => onTabChange && onTabChange(t.id)} style={{
                  flex: 'none', padding: '12px 20px', borderRadius: 'var(--radius-tab)',
                  fontSize: 'var(--text-15)', fontWeight: 'var(--fw-bold)', cursor: 'pointer',
                  userSelect: 'none', whiteSpace: 'nowrap',
                  background: on ? 'var(--surface-canvas)' : 'transparent',
                  color: on ? 'var(--navy-800)' : 'var(--blue-300)',
                }}>{t.label}</div>
              );
            })}
          </div>
        ) : null}
      </div>
    </div>
  );
}
