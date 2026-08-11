import React from 'react';

export function DataTable({ columns = [], rows = [], renderActions, style, ...rest }) {
  const th = {
    textAlign: 'start', padding: '13px 16px', fontSize: 'var(--text-12-5)',
    fontWeight: 'var(--fw-heavy)', color: 'var(--ink-6)', background: 'var(--surface-sunken)',
    borderBottom: '1px solid var(--border-card)', whiteSpace: 'nowrap',
  };
  const td = {
    padding: '13px 16px', fontSize: 'var(--text-13-5)', color: 'var(--ink-1)',
    borderBottom: '1px solid var(--border-hair)',
  };
  return (
    <div style={{
      background: 'var(--surface-card)', border: '1px solid var(--border-card)',
      borderRadius: 'var(--radius-16)', overflow: 'auto', minWidth: 0,
      boxShadow: 'var(--shadow-card)', ...style,
    }} {...rest}>
      <table style={{ width: '100%', borderCollapse: 'collapse' }}>
        <thead>
          <tr>
            {columns.map((c) => <th key={c.key} style={th}>{c.label}</th>)}
            {renderActions ? <th style={{ ...th, width: '1%' }}>פעולות</th> : null}
          </tr>
        </thead>
        <tbody>
          {rows.map((r, i) => (
            <tr key={r.id ?? i}>
              {columns.map((c) => <td key={c.key} style={td}>{r[c.key]}</td>)}
              {renderActions ? (
                <td style={{ ...td, whiteSpace: 'nowrap', width: '1%' }}>
                  <div style={{ display: 'flex', gap: 6, justifyContent: 'flex-end' }}>{renderActions(r, i)}</div>
                </td>
              ) : null}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
