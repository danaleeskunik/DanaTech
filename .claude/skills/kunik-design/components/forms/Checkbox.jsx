import React from 'react';
import { Icon } from '../brand/Icon.jsx';

export function Checkbox({ checked, label, color = 'var(--blue-500)', size = 'md', style, ...rest }) {
  const box = size === 'print' ? 19 : 22;
  return (
    <div style={{
      display: 'flex', alignItems: 'flex-start', gap: size === 'print' ? 11 : 12,
      padding: size === 'print' ? 0 : '13px 15px',
      borderRadius: 'var(--radius-10)', cursor: 'pointer', userSelect: 'none',
      border: size === 'print' ? undefined : `2px solid ${checked ? color : 'var(--border-field)'}`,
      background: size === 'print' ? undefined : (checked ? 'var(--surface-sunken)' : 'var(--surface-card)'),
      ...style,
    }} {...rest}>
      <div style={{
        flex: 'none', width: box, height: box, marginTop: size === 'print' ? 2 : 1,
        borderRadius: size === 'print' ? 'var(--radius-5)' : 'var(--radius-6)',
        display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff',
        border: `2px solid ${checked ? color : (size === 'print' ? 'var(--ink-9)' : 'var(--border-field)')}`,
        background: checked ? color : 'transparent',
      }}>
        {checked ? <Icon name="check" size={13} strokeWidth={3.4} /> : null}
      </div>
      <div style={{
        fontSize: 'var(--text-16)', lineHeight: 'var(--lh-snug)', fontWeight: 'var(--fw-semibold)',
        color: checked ? 'var(--ink-7)' : 'var(--ink-2)',
        textDecoration: checked && size !== 'print' ? 'line-through' : 'none',
      }}>{label}</div>
    </div>
  );
}
