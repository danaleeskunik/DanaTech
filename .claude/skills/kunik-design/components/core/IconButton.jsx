import React from 'react';
import { Icon } from '../brand/Icon.jsx';

export function IconButton({ icon, size = 'md', tone = 'neutral', title, href, style, ...rest }) {
  const dim = size === 'sm' ? 30 : size === 'lg' ? 52 : 44;
  const tones = {
    neutral: { background: 'var(--surface-card)', border: '1.5px solid var(--border-field)', color: 'var(--ink-5)' },
    sunken: { background: 'var(--surface-sunken)', border: '1px solid var(--border-card)', color: 'var(--ink-5)' },
    danger: { background: 'var(--surface-card)', border: '1.5px solid var(--red-border)', color: 'var(--red-600)' },
    success: { background: 'var(--green-100)', border: 'none', color: 'var(--green-700)' },
    navy: { background: 'var(--navy-800)', border: 'none', color: '#fff', boxShadow: 'var(--shadow-fab)' },
  }[tone] || {};
  const css = {
    width: dim, height: dim, flex: 'none',
    borderRadius: tone === 'navy' ? 'var(--radius-circle)' : (size === 'sm' ? 'var(--radius-8)' : 'var(--radius-10)'),
    display: 'flex', alignItems: 'center', justifyContent: 'center',
    cursor: 'pointer', textDecoration: 'none', ...tones, ...style,
  };
  const glyph = <Icon name={icon} size={size === 'sm' ? 14 : size === 'lg' ? 24 : 15} />;
  if (href) return <a href={href} title={title} style={css} {...rest}>{glyph}</a>;
  return <button type="button" title={title} style={css} {...rest}>{glyph}</button>;
}
