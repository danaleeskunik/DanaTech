import React from 'react';
import { Icon } from '../brand/Icon.jsx';

const TONES = {
  tip: { bg: 'var(--orange-50)', edge: 'var(--orange-500)', fg: 'var(--orange-700)', icon: 'lightbulb', iconColor: 'var(--orange-600)' },
  warn: { bg: 'var(--orange-100)', edge: 'var(--orange-500)', fg: 'var(--orange-700)', icon: 'warning', iconColor: 'var(--orange-600)' },
  info: { bg: 'var(--blue-100)', edge: 'var(--blue-500)', fg: 'var(--blue-600)', icon: 'lightbulb', iconColor: 'var(--blue-600)' },
};

export function Callout({ tone = 'tip', label, icon = true, children, style, ...rest }) {
  const t = TONES[tone] || TONES.tip;
  return (
    <div style={{
      display: 'flex', gap: 11, padding: '13px 15px',
      borderRadius: 'var(--radius-10)', background: t.bg,
      borderInlineStart: `4px solid ${t.edge}`, ...style,
    }} {...rest}>
      {label ? (
        <div style={{ fontSize: 'var(--text-14)', fontWeight: 'var(--fw-heavy)', color: t.iconColor, whiteSpace: 'nowrap' }}>{label}</div>
      ) : icon ? (
        <Icon name={t.icon} size={19} style={{ marginTop: 2, color: t.iconColor }} />
      ) : null}
      <div style={{ fontSize: 'var(--text-15-5)', lineHeight: 'var(--lh-snug)', fontWeight: 'var(--fw-semibold)', color: t.fg }}>{children}</div>
    </div>
  );
}
