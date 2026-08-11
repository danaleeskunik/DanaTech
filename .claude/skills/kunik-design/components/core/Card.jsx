import React from 'react';

export function Card({ as = 'div', size = 'md', interactive, href, children, style, ...rest }) {
  const pad = { sm: '16px 18px', md: '18px 20px', lg: '26px 24px' }[size] || '18px 20px';
  const radius = { sm: 'var(--radius-12)', md: 'var(--radius-14)', lg: 'var(--radius-18)' }[size] || 'var(--radius-14)';
  const css = {
    background: 'var(--surface-card)',
    border: '1px solid var(--border-card)',
    borderRadius: radius,
    boxShadow: 'var(--shadow-card)',
    padding: pad,
    color: 'var(--ink-1)',
    textDecoration: 'none',
    display: 'flex', flexDirection: 'column', gap: 14,
    ...(interactive ? { cursor: 'pointer', transition: 'var(--transition-card)' } : null),
    ...style,
  };
  const Tag = href ? 'a' : as;
  return <Tag href={href} style={css} {...rest}>{children}</Tag>;
}
