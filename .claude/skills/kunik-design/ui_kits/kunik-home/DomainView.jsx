function DomainView({ domain, onAdd }) {
  const { DataTable, Button, TextField, Badge, IconButton, EmptyState } = window.KunikDesignSystem_63ae72;
  const [q, setQ] = React.useState('');
  const withBadge = (rows) => rows.filter((r) => JSON.stringify(r).includes(q)).map((r) => ({
    ...r, statusCell: r.badge ? <Badge tone={r.badge[1]} size="sm">{r.badge[0]}</Badge> : null,
  }));
  const cols = domain.badgeless ? domain.columns : [...domain.columns, { key: 'statusCell', label: 'סטטוס' }];
  const hasBadges = (domain.items || []).some((i) => i.badge) || (domain.groups || []).some((g) => g.items.some((i) => i.badge));
  const columns = hasBadges ? [...domain.columns, { key: 'statusCell', label: 'סטטוס' }] : domain.columns;
  const actions = (r) => (<>
    <IconButton icon="edit" size="sm" tone="sunken" title="עריכה" />
    <IconButton icon="trash" size="sm" tone="sunken" title="מחיקה" style={{ color: 'var(--red-500)' }} />
    {r.phone && r.phone !== '—' ? <IconButton icon="message" size="sm" tone="success" title="וואטסאפ" /> : null}
  </>);
  const total = domain.groups ? null : domain.items.length;
  return (
    <div>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 16, flexWrap: 'wrap' }}>
        <div>
          <h1 style={{ margin: '0 0 6px', fontSize: 26, fontWeight: 800 }}>{domain.label}</h1>
          <p style={{ margin: 0, color: 'var(--ink-6)', fontSize: 14.5 }}>
            {domain.groups ? domain.groups.length + ' חודשים' : total + ' רשומות'}
          </p>
        </div>
        <Button icon="plus" color={domain.color} onClick={onAdd}>הוספת רשומה</Button>
      </div>
      <div style={{ marginTop: 20, maxWidth: 340 }}>
        <TextField shape="pill" placeholder="חיפוש..." value={q} onChange={(e) => setQ(e.target.value)} />
      </div>
      {domain.groups ? domain.groups.map((g) => (
        <div key={g.label} style={{ marginTop: 26 }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', background: domain.bg, padding: '12px 18px', borderRadius: '12px 12px 0 0' }}>
            <span style={{ fontWeight: 800, fontSize: 15, color: domain.color }}>{g.label}</span>
            <span style={{ fontWeight: 800, fontSize: 15, color: domain.color }}>סה"כ: {g.total}</span>
          </div>
          <DataTable style={{ borderRadius: '0 0 14px 14px', borderTop: 'none' }} columns={columns} rows={withBadge(g.items)} renderActions={actions} />
        </div>
      )) : (
        <div style={{ marginTop: 26 }}>
          {withBadge(domain.items).length
            ? <DataTable columns={columns} rows={withBadge(domain.items)} renderActions={actions} />
            : <EmptyState variant="solid">לא נמצאו רשומות שמתאימות לחיפוש.</EmptyState>}
        </div>
      )}
    </div>
  );
}
Object.assign(window, { DomainView });
