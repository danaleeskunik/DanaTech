import React from 'react';

export function DateChip({ date, day, background = 'var(--navy-800)', style, ...rest }) {
  return (
    <div style={{
      flex: 'none', width: 52, height: 48, borderRadius: 'var(--radius-10)',
      background, color: '#fff', display: 'flex', flexDirection: 'column',
      alignItems: 'center', justifyContent: 'center', ...style,
    }} {...rest}>
      <div style={{ fontSize: 'var(--text-11)', fontWeight: 'var(--fw-semibold)', color: 'var(--blue-300)' }}>{date}</div>
      <div style={{ fontSize: 'var(--text-15)', fontWeight: 'var(--fw-heavy)' }}>{day}</div>
    </div>
  );
}
