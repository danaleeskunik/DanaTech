import React from 'react';

export function TextField({ label, hint, type = 'text', multiline, rows = 3, shape = 'rounded', dir, style, wrapStyle, ...rest }) {
  const field = {
    width: '100%', height: multiline ? undefined : 'var(--field-h)',
    padding: multiline ? '12px 14px' : '0 14px',
    border: '2px solid var(--border-field)', borderRadius: shape === 'pill' ? 'var(--radius-pill)' : 'var(--radius-10)',
    background: 'var(--surface-sunken)', fontFamily: 'var(--font-ui)',
    fontSize: 'var(--text-16)', fontWeight: 'var(--fw-semibold)', color: 'var(--ink-1)',
    outline: 'none', textAlign: dir === 'ltr' ? 'left' : 'right', resize: multiline ? 'vertical' : undefined,
    ...style,
  };
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 6, ...wrapStyle }}>
      {label ? <label style={{ fontSize: 'var(--text-13-5)', fontWeight: 'var(--fw-bold)', color: 'var(--ink-7)' }}>{label}</label> : null}
      {multiline
        ? <textarea rows={rows} dir={dir} style={field} {...rest} />
        : <input type={type} dir={dir} style={field} {...rest} />}
      {hint ? <div style={{ fontSize: 'var(--text-13)', fontWeight: 'var(--fw-medium)', color: 'var(--ink-7)' }}>{hint}</div> : null}
    </div>
  );
}
