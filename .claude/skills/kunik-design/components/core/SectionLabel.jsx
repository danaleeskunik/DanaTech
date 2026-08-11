import React from 'react';

export function SectionLabel({ children, rule = true, accent, style, ...rest }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 12, ...style }} {...rest}>
      {accent ? <div style={{ width: 26, height: 2, background: accent, flex: 'none' }} /> : null}
      <div style={{
        fontFamily: 'var(--font-ui)', fontSize: 'var(--text-13-5)', fontWeight: 'var(--fw-heavy)',
        letterSpacing: 'var(--track-eyebrow)', color: 'var(--navy-800)', whiteSpace: 'nowrap',
      }}>{children}</div>
      {rule ? <div style={{ flex: 1, height: 1, background: 'var(--border-rule)' }} /> : null}
    </div>
  );
}
