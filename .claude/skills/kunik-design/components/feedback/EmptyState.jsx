import React from 'react';

export function EmptyState({ children, variant = 'dashed', style, ...rest }) {
  const solid = variant === 'solid';
  return (
    <div style={{
      background: 'var(--surface-card)',
      border: solid ? '1px solid var(--border-card)' : '1px dashed var(--blue-200)',
      borderRadius: solid ? 'var(--radius-18)' : 'var(--radius-12)',
      padding: solid ? '40px 20px' : 34, textAlign: 'center',
      fontSize: solid ? 'var(--text-14-5)' : 'var(--text-15)',
      fontWeight: 'var(--fw-semibold)', color: 'var(--ink-7)', ...style,
    }} {...rest}>{children}</div>
  );
}
