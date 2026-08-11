import React from 'react';
import { Icon } from '../brand/Icon.jsx';

const BASE = {
  display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: 8,
  fontFamily: 'var(--font-ui)', border: 'none', cursor: 'pointer',
  textDecoration: 'none', userSelect: 'none', whiteSpace: 'nowrap',
};

const SIZES = {
  sm: { padding: '9px 14px', fontSize: 'var(--text-13-5)', iconSize: 15 },
  md: { padding: '12px 22px', fontSize: 'var(--text-14-5)', iconSize: 16 },
  lg: { padding: '17px 24px', fontSize: 'var(--text-16)', iconSize: 20 },
};

export function Button({
  variant = 'primary', size = 'md', shape = 'pill', color,
  icon, iconAfter, disabled, href, children, style, ...rest
}) {
  const s = SIZES[size] || SIZES.md;
  const accent = color || 'var(--blue-500)';
  const looks = {
    primary: { background: accent, color: '#fff', fontWeight: 'var(--fw-heavy)' },
    secondary: { background: 'var(--surface-card)', color: 'var(--navy-800)', border: '2px solid var(--border-field)', fontWeight: 'var(--fw-bold)' },
    quiet: { background: 'var(--surface-muted)', color: 'var(--ink-5)', fontWeight: 'var(--fw-bold)' },
    whatsapp: { background: 'var(--whatsapp)', color: 'var(--whatsapp-icon)', fontWeight: 'var(--fw-heavy)' },
    onNavy: { background: 'var(--on-navy-fill)', color: '#fff', border: '1px solid var(--on-navy-border)', fontWeight: 'var(--fw-bold)' },
  }[variant] || {};

  const css = {
    ...BASE, ...s, ...looks,
    borderRadius: shape === 'pill' ? 'var(--radius-pill)' : 'var(--radius-10)',
    opacity: disabled ? 0.5 : 1,
    pointerEvents: disabled ? 'none' : undefined,
    ...style,
  };
  delete css.iconSize;

  const inner = (
    <>
      {icon ? <Icon name={icon} size={s.iconSize} /> : null}
      {children}
      {iconAfter ? <Icon name={iconAfter} size={s.iconSize} /> : null}
    </>
  );
  if (href) return <a href={href} style={css} {...rest}>{inner}</a>;
  return <button type="button" disabled={disabled} style={css} {...rest}>{inner}</button>;
}
