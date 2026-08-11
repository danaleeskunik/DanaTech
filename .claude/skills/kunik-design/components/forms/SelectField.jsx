import React from 'react';
import { Icon } from '../brand/Icon.jsx';

export function SelectField({ label, options = [], onAdd, style, wrapStyle, ...rest }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 6, ...wrapStyle }}>
      {label ? <label style={{ fontSize: 'var(--text-13-5)', fontWeight: 'var(--fw-bold)', color: 'var(--ink-7)' }}>{label}</label> : null}
      <div style={{ display: 'flex', gap: 8, position: 'relative' }}>
        <div style={{ position: 'relative', flex: 1 }}>
          <select style={{
            width: '100%', height: 'var(--field-h)', padding: '0 14px 0 34px',
            border: '2px solid var(--border-field)', borderRadius: 'var(--radius-10)',
            background: 'var(--surface-sunken)', fontFamily: 'var(--font-ui)',
            fontSize: 'var(--text-16)', fontWeight: 'var(--fw-semibold)', color: 'var(--ink-1)',
            outline: 'none', appearance: 'none', cursor: 'pointer', ...style,
          }} {...rest}>
            {options.map((o) => <option key={o} value={o}>{o}</option>)}
          </select>
          <Icon name="chevron-down" size={17} style={{
            position: 'absolute', insetInlineEnd: 12, top: '50%', transform: 'translateY(-50%)',
            pointerEvents: 'none', color: 'var(--ink-6)',
          }} />
        </div>
        {onAdd ? (
          <button type="button" onClick={onAdd} style={{
            flex: 'none', width: 42, borderRadius: 'var(--radius-10)',
            border: '2px solid var(--border-field)', background: 'var(--surface-sunken)',
            color: 'var(--ink-5)', fontSize: 18, fontWeight: 'var(--fw-bold)', cursor: 'pointer',
          }}>+</button>
        ) : null}
      </div>
    </div>
  );
}
