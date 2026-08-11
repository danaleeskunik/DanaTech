const DS = () => window.KunikDesignSystem_63ae72;

const STUDENTS = [
  { id: 1, name: 'מרים כהן', phone: '052-441-9082', level: 'רמה 1', day: 'ראשון', time: '10:00', price: '₪150', status: 'פעיל', paid: true },
  { id: 2, name: 'יהודית ברק', phone: '054-772-3311', level: 'רמה 2', day: 'ראשון', time: '16:30', price: '₪150', status: 'פעיל', paid: true },
  { id: 3, name: 'רחל אבידן', phone: '050-318-7740', level: 'רמה 1', day: 'שלישי', time: '09:30', price: '₪140', status: 'פעיל', paid: false },
  { id: 4, name: 'שרה מזרחי', phone: '053-909-1265', level: 'רמה 3', day: 'שלישי', time: '11:00', price: '₪160', status: 'פעיל', paid: true },
  { id: 5, name: 'נעמי גל', phone: '052-660-4418', level: 'רמה 2', day: 'שלישי', time: '17:00', price: '₪150', status: 'פעיל', paid: false },
  { id: 6, name: 'אסתר פרידמן', phone: '054-201-8873', level: 'רמה 1', day: 'חמישי', time: '10:30', price: '₪140', status: 'הפסקה', paid: true },
];

const PAYMENTS = [
  { id: 1, name: 'מרים כהן', month: 'אוגוסט 2026', lessons: '4', amount: '₪600', method: 'ביט', state: 'שולם' },
  { id: 2, name: 'יהודית ברק', month: 'אוגוסט 2026', lessons: '4', amount: '₪600', method: 'מזומן', state: 'שולם' },
  { id: 3, name: 'רחל אבידן', month: 'אוגוסט 2026', lessons: '3', amount: '₪420', method: '—', state: 'ממתין' },
  { id: 4, name: 'נעמי גל', month: 'יולי 2026', lessons: '4', amount: '₪600', method: '—', state: 'באיחור' },
];

function BusinessHome({ go, onTab }) {
  const { StatCard, SectionLabel, ListRow, DateChip, Badge, Button, IconButton, Icon, Card, EmptyState } = DS();
  const quick = [
    { title: 'תלמידה חדשה', sub: 'הוספה לרשימה', bg: 'var(--blue-100)', fg: 'var(--blue-600)', tab: 'students' },
    { title: 'רישום תשלום', sub: 'לחודש הנוכחי', bg: 'var(--green-100)', fg: 'var(--green-700)', tab: 'payments' },
    { title: 'שיעור חד־פעמי', sub: 'מחוץ ללוז הקבוע', bg: 'var(--orange-50)', fg: 'var(--orange-600)', tab: 'schedule' },
  ];
  const link = (icon, bg, fg, title, sub, to) => (
    <a href="#" onClick={(e) => { e.preventDefault(); to && go(to); }} style={{ display: 'flex', alignItems: 'center', gap: 13, background: 'var(--surface-card)', border: '1px solid var(--border-card)', borderRadius: 'var(--radius-14)', padding: '16px 18px', textDecoration: 'none', color: 'var(--ink-1)', boxShadow: 'var(--shadow-card)' }}>
      <div style={{ flex: 'none', width: 42, height: 42, borderRadius: 'var(--radius-11)', background: bg, color: fg, display: 'flex', alignItems: 'center', justifyContent: 'center' }}><Icon name={icon} size={21} /></div>
      <div><div style={{ fontSize: 16, fontWeight: 800 }}>{title}</div><div style={{ fontSize: 13, fontWeight: 500, color: 'var(--ink-6)' }}>{sub}</div></div>
    </a>
  );
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
      <SectionLabel>מצב העסק</SectionLabel>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(146px,1fr))', gap: 12, marginTop: 12 }}>
        <StatCard label="תלמידות פעילות" value="5" sub="מתוך 6 בכרטיסייה" />
        <StatCard label="שיעורים השבוע" value="6" sub="4 קבועים, 2 השלמות" />
        <StatCard label="הכנסות אוגוסט" value="₪2,220" sub="3 מתוך 5 שולמו" color="var(--green-700)" />
        <StatCard label="ממתין לתשלום" value="₪1,020" sub="2 תלמידות" color="var(--orange-600)" />
      </div>
      <div style={{ display: 'flex', gap: 12, marginTop: 16, flexWrap: 'wrap' }}>
        {quick.map((q) => (
          <div key={q.title} onClick={() => onTab(q.tab)} style={{ flex: 1, minWidth: 200, display: 'flex', alignItems: 'center', gap: 14, background: 'var(--surface-card)', border: '1px solid var(--border-card)', borderRadius: 'var(--radius-14)', padding: '16px 18px', cursor: 'pointer', boxShadow: 'var(--shadow-card)' }}>
            <div style={{ flex: 'none', width: 44, height: 44, borderRadius: 'var(--radius-11)', background: q.bg, color: q.fg, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 22, fontWeight: 800 }}>+</div>
            <div><div style={{ fontSize: 16, fontWeight: 800 }}>{q.title}</div><div style={{ fontSize: 13, fontWeight: 500, color: 'var(--ink-6)' }}>{q.sub}</div></div>
          </div>
        ))}
      </div>
      <div style={{ marginTop: 26 }}><SectionLabel>להכנת השיעור — עבורי</SectionLabel></div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(230px,1fr))', gap: 12, marginTop: 12 }}>
        {link('toolkit', 'var(--green-100)', 'var(--green-700)', 'ערכת ההוראה', 'מערכי שיעור לשלוש רמות', 'toolkit')}
        {link('printer', 'var(--orange-50)', 'var(--orange-600)', 'גליונות תרגול', 'להדפסה ולמסירה בשיעור', 'practice')}
      </div>
      <div style={{ marginTop: 26 }}><SectionLabel>לשליחה ולהדפסה ללקוחות</SectionLabel></div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(230px,1fr))', gap: 12, marginTop: 12 }}>
        {link('flier', 'var(--blue-100)', 'var(--blue-600)', 'הפלייר', 'להדפסה ולשליחה בוואטסאפ', 'flier')}
        {link('image', 'var(--surface-muted)', 'var(--navy-800)', 'הפלייר כתמונה', 'לשליחה בקבוצות')}
      </div>
      <div style={{ margin: '26px 0 12px' }}><SectionLabel accent="var(--blue-500)" rule={false}>השיעורים השבוע</SectionLabel></div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 9 }}>
        {STUDENTS.filter((s) => s.status === 'פעיל').slice(0, 4).map((s) => (
          <ListRow key={s.id}
            leading={<DateChip date={s.time} day={s.day} />}
            title={s.name} meta={s.level + ' · ' + s.price}
            badge={s.paid ? <Badge tone="green" size="sm">שולם</Badge> : <Badge tone="orange" size="sm">ממתין לתשלום</Badge>}
            actions={<><Button variant="whatsapp" size="sm" icon="whatsapp">תזכורת</Button><IconButton icon="calendar" title="שינוי מועד" /><IconButton icon="close" tone="danger" title="ביטול חד־פעמי" /></>} />
        ))}
      </div>
    </div>
  );
}

function StudentsTab() {
  const { SectionLabel, Button, TextField, DataTable, IconButton, Badge } = DS();
  const [q, setQ] = React.useState('');
  const rows = STUDENTS.filter((s) => s.name.includes(q)).map((s) => ({
    ...s,
    slot: s.day + ' · ' + s.time,
    statusCell: s.status === 'פעיל' ? <Badge tone="green" size="sm">פעיל</Badge> : <Badge tone="neutral" size="sm">הפסקה</Badge>,
  }));
  return (
    <div>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 16, flexWrap: 'wrap', marginBottom: 16 }}>
        <div>
          <h1 style={{ margin: '0 0 4px', fontSize: 26, fontWeight: 800 }}>תלמידות</h1>
          <p style={{ margin: 0, fontSize: 14.5, fontWeight: 500, color: 'var(--ink-6)' }}>{STUDENTS.length} כרטיסים · 5 פעילים</p>
        </div>
        <Button icon="plus">תלמידה חדשה</Button>
      </div>
      <div style={{ maxWidth: 340, marginBottom: 16 }}>
        <TextField shape="pill" placeholder="חיפוש..." value={q} onChange={(e) => setQ(e.target.value)} />
      </div>
      <DataTable
        columns={[{ key: 'name', label: 'שם' }, { key: 'phone', label: 'טלפון' }, { key: 'level', label: 'רמה' }, { key: 'slot', label: 'לוז קבוע' }, { key: 'price', label: 'מחיר לשיעור' }, { key: 'statusCell', label: 'סטטוס' }]}
        rows={rows}
        renderActions={() => (<>
          <IconButton icon="message" size="sm" tone="success" title="וואטסאפ" />
          <IconButton icon="edit" size="sm" tone="sunken" title="עריכה" />
          <IconButton icon="trash" size="sm" tone="sunken" title="מחיקה" style={{ color: 'var(--red-500)' }} />
        </>)} />
    </div>
  );
}

function PaymentsTab() {
  const { SectionLabel, StatCard, DataTable, IconButton, Badge, Button } = DS();
  const rows = PAYMENTS.map((p) => ({
    ...p,
    stateCell: p.state === 'שולם' ? <Badge tone="green" size="sm">שולם</Badge>
      : p.state === 'ממתין' ? <Badge tone="orange" size="sm">ממתין</Badge>
      : <Badge tone="red" size="sm">באיחור</Badge>,
  }));
  return (
    <div>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 16, flexWrap: 'wrap', marginBottom: 16 }}>
        <div>
          <h1 style={{ margin: '0 0 4px', fontSize: 26, fontWeight: 800 }}>תשלומים</h1>
          <p style={{ margin: 0, fontSize: 14.5, fontWeight: 500, color: 'var(--ink-6)' }}>אוגוסט 2026</p>
        </div>
        <Button icon="plus" color="var(--green-700)">רישום תשלום</Button>
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(146px,1fr))', gap: 12, marginBottom: 16 }}>
        <StatCard label="נכנס החודש" value="₪1,200" sub="2 תשלומים" color="var(--green-700)" />
        <StatCard label="ממתין" value="₪420" sub="רחל אבידן" color="var(--orange-600)" />
        <StatCard label="באיחור" value="₪600" sub="נעמי גל · יולי" color="var(--red-600)" />
      </div>
      <div style={{ marginBottom: 12 }}><SectionLabel>רישומים</SectionLabel></div>
      <DataTable
        columns={[{ key: 'name', label: 'תלמידה' }, { key: 'month', label: 'חודש' }, { key: 'lessons', label: 'שיעורים' }, { key: 'amount', label: 'סכום' }, { key: 'method', label: 'אמצעי' }, { key: 'stateCell', label: 'סטטוס' }]}
        rows={rows}
        renderActions={() => (<>
          <IconButton icon="message" size="sm" tone="success" title="בקשת תשלום" />
          <IconButton icon="edit" size="sm" tone="sunken" title="עריכה" />
        </>)} />
    </div>
  );
}

function ScheduleTab() {
  const { SectionLabel, ListRow, DateChip, Button, IconButton, EmptyState, Badge } = DS();
  const days = [['ראשון', STUDENTS.slice(0, 2)], ['שלישי', STUDENTS.slice(2, 5)], ['חמישי', STUDENTS.slice(5, 6)], ['שישי', []]];
  return (
    <div>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 16, flexWrap: 'wrap', marginBottom: 16 }}>
        <div>
          <h1 style={{ margin: '0 0 4px', fontSize: 26, fontWeight: 800 }}>לוז שבועי</h1>
          <p style={{ margin: 0, fontSize: 14.5, fontWeight: 500, color: 'var(--ink-6)' }}>6 שיעורים קבועים</p>
        </div>
        <Button icon="plus" color="var(--orange-600)">שיעור חד־פעמי</Button>
      </div>
      {days.map(([day, list]) => (
        <div key={day} style={{ marginBottom: 20 }}>
          <SectionLabel>{day}</SectionLabel>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 9, marginTop: 12 }}>
            {list.length ? list.map((s) => (
              <ListRow key={s.id} leading={<DateChip date={s.time} day={day.slice(0, 4)} background={s.status === 'פעיל' ? 'var(--navy-800)' : 'var(--ink-7)'} />}
                title={s.name} meta={s.level + ' · ' + s.phone} struck={s.status !== 'פעיל'}
                titleColor={s.status !== 'פעיל' ? 'var(--ink-7)' : 'var(--ink-1)'}
                actions={<><Button variant="whatsapp" size="sm" icon="whatsapp">תזכורת</Button><IconButton icon="calendar" title="שינוי מועד" /></>} />
            )) : <EmptyState>אין שיעורים ביום זה. הוסיפי יום ושעה לתלמיד/ה בכרטיס שלה.</EmptyState>}
          </div>
        </div>
      ))}
    </div>
  );
}

function BusinessApp({ go }) {
  const { AppHeader, SyncStatus, HomeFab } = DS();
  const [tab, setTab] = React.useState('home');
  const tabs = [{ id: 'home', label: 'בית' }, { id: 'students', label: 'תלמידות' }, { id: 'payments', label: 'תשלומים' }, { id: 'schedule', label: 'לוז שבועי' }];
  return (
    <div style={{ minHeight: '100%', background: 'var(--surface-canvas)', paddingBottom: 50 }}>
      <div onClick={() => go('home')}><HomeFab href="#" /></div>
      <AppHeader title="ניהול העסק" subtitle="טק בגובה העיניים · דנה קוניק"
        tabs={tabs} activeTab={tab} onTabChange={setTab}
        actions={<><SyncStatus state="synced" label="גובה לפני 3 דקות" sub="גיבוי מקומי" /><SyncStatus state="synced" label="Google Sheets" sub="סונכרן 09:12" /></>} />
      <div style={{ maxWidth: 'var(--page-max-wide)', margin: '0 auto', padding: '22px var(--page-gutter) 0' }}>
        {tab === 'home' && <BusinessHome go={go} onTab={setTab} />}
        {tab === 'students' && <StudentsTab />}
        {tab === 'payments' && <PaymentsTab />}
        {tab === 'schedule' && <ScheduleTab />}
      </div>
    </div>
  );
}
Object.assign(window, { BusinessApp });
