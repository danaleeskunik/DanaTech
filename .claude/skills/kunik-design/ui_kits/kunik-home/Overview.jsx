function Overview({ go }) {
  const { DomainCard, Badge, Button, SectionLabel, EmptyState } = window.KunikDesignSystem_63ae72;
  const D = window.KH_DOMAINS, U = window.KH_UPCOMING;
  const count = (d) => (d.groups ? d.groups.reduce((n, g) => n + g.items.length, 0) : d.items.length);
  const bars = [
    { label: 'יוני', income: 12100, expense: 1290 },
    { label: 'יולי', income: 12900, expense: 1322 },
    { label: 'אוגוסט', income: 12400, expense: 1847 },
  ];
  const max = 13500;
  return (
    <div>
      <div>
        <h1 style={{ margin: '0 0 6px', fontSize: 27, fontWeight: 800 }}>סקירה כללית</h1>
        <p style={{ margin: 0, fontSize: 14.5, color: 'var(--ink-6)' }}>כל התחומים שלך במבט אחד. לחצו על תחום כדי להיכנס אליו.</p>
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(230px,1fr))', gap: 18, marginTop: 28 }}>
        {D.map((d) => <DomainCard key={d.key} className="lift" icon={d.icon} label={d.label} count={count(d) + ' רשומות'} color={d.color} background={d.bg} onClick={() => go(d.key)} />)}
      </div>

      <div style={{ marginTop: 36 }}>
        <p style={{ fontSize: 13, fontWeight: 800, color: 'var(--ink-6)', letterSpacing: '.4px', margin: '0 0 12px' }}>הכנסות מול תשלומים לפי חודש</p>
        <div style={{ background: 'var(--surface-card)', border: '1px solid var(--border-card)', borderRadius: 'var(--radius-18)', padding: '26px 28px 20px', boxShadow: 'var(--shadow-card)' }}>
          <div style={{ display: 'flex', gap: 18, marginBottom: 22 }}>
            <span style={{ display: 'flex', alignItems: 'center', gap: 7, fontSize: 13, fontWeight: 600, color: 'var(--ink-4)' }}><span style={{ width: 11, height: 11, borderRadius: 3, background: 'var(--domain-income)' }} />הכנסות</span>
            <span style={{ display: 'flex', alignItems: 'center', gap: 7, fontSize: 13, fontWeight: 600, color: 'var(--ink-4)' }}><span style={{ width: 11, height: 11, borderRadius: 3, background: 'var(--domain-payments)' }} />תשלומים</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'flex-end', gap: 26, minHeight: 180 }}>
            {bars.map((b) => (
              <div key={b.label} style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 10 }}>
                <div style={{ display: 'flex', alignItems: 'flex-end', gap: 7, height: 170, width: '100%', justifyContent: 'center' }}>
                  {[['income', 'var(--domain-income)'], ['expense', 'var(--domain-payments)']].map(([k, c]) => (
                    <div key={k} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 5 }}>
                      <span style={{ fontSize: 11, fontWeight: 700, color: c }}>₪{b[k].toLocaleString()}</span>
                      <div style={{ width: 26, borderRadius: '6px 6px 0 0', background: c, height: Math.round((b[k] / max) * 145) }} />
                    </div>
                  ))}
                </div>
                <span style={{ fontSize: 12, fontWeight: 600, color: 'var(--ink-6)', borderTop: '1px solid var(--border-card)', paddingTop: 9, width: '100%', textAlign: 'center' }}>{b.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div style={{ marginTop: 36, paddingBottom: 40 }}>
        <p style={{ fontSize: 13, fontWeight: 800, color: 'var(--ink-6)', letterSpacing: '.4px', margin: '0 0 12px' }}>התראות קרובות</p>
        <div style={{ background: 'var(--surface-card)', border: '1px solid var(--border-card)', borderRadius: 'var(--radius-18)', boxShadow: 'var(--shadow-card)', overflow: 'hidden' }}>
          {U.map((u, i) => (
            <div key={u.name} style={{ display: 'flex', alignItems: 'center', gap: 14, padding: '14px 20px', borderBottom: i === U.length - 1 ? 'none' : '1px solid var(--border-hair)' }}>
              <span style={{ width: 9, height: 9, borderRadius: '50%', flex: 'none', background: u.color }} />
              <div style={{ flex: 1, minWidth: 0 }}>
                <div style={{ fontWeight: 700, fontSize: 14.5 }}>{u.name}</div>
                <div style={{ fontSize: 12.5, color: 'var(--ink-7)' }}>{u.domain} · {u.date}</div>
              </div>
              <Badge tone={u.badge[1]}>{u.badge[0]}</Badge>
              {u.wa && <Button variant="whatsapp" size="sm" icon="whatsapp">תזכורת בוואטסאפ</Button>}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
Object.assign(window, { Overview });
