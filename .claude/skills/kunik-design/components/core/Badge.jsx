import React from 'react';

const TONES = {
  blue: ['var(--blue-100)', 'var(--blue-600)'],
  green: ['var(--green-100)', 'var(--green-700)'],
  orange: ['var(--orange-50)', 'var(--orange-600)'],
  red: ['var(--red-100)', 'var(--red-500)'],
  neutral: ['var(--surface-muted)', 'var(--ink-6)'],
  navy: ['var(--navy-800)', '#fff'],
};

export function Badge({ tone = 'blue', size = 'md', children, style, ...rest }) {
  const [bg, fg] = TONES[tone] || TONES.blue;
  return (
    <span style={{
      display: 'inline-flex', alignItems: 'center', gap: 6,
      background: bg, color: fg,
      fontFamily: 'var(--font-ui)', fontWeight: 'var(--fw-heavy)',
      fontSize: size === 'sm' ? 'var(--text-12)' : 'var(--text-12-5)',
      padding: size === 'sm' ? '4px 10px' : '5px 11px',
      borderRadius: 'var(--radius-pill)', whiteSpace: 'nowrap',
      letterSpacing: '.2px', ...style,
    }} {...rest}>{children}</span>
  );
}
