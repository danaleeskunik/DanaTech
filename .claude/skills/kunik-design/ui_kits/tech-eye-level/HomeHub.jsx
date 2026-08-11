function HomeHub({ go }) {
  const { Icon, Card, SectionLabel, Logo } = window.KunikDesignSystem_63ae72;
  const bullets = (items, color) => (
    <ul style={{ margin: 0, padding: 0, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 7 }}>
      {items.map((t) => (
        <li key={t} style={{ display: 'flex', alignItems: 'flex-start', gap: 8, fontSize: 13.5, fontWeight: 600, color: 'var(--ink-4)' }}>
          <span style={{ color, marginTop: 2 }}><Icon name="check-bold" size={15} /></span>{t}
        </li>
      ))}
    </ul>
  );
  const big = (o) => (
    <a onClick={(e) => { e.preventDefault(); go(o.to); }} href="#" className="lift" style={{
      background: 'var(--surface-card)', borderRadius: 'var(--radius-18)', padding: '26px 24px',
      textDecoration: 'none', color: 'var(--ink-1)', boxShadow: 'var(--shadow-card)',
      border: '1px solid var(--border-card)', display: 'flex', flexDirection: 'column', gap: 14,
    }}>
      <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: 12 }}>
        <div style={{ width: 52, height: 52, borderRadius: 'var(--radius-14)', display: 'flex', alignItems: 'center', justifyContent: 'center', background: o.bg, color: o.fg, flex: 'none' }}>
          <Icon name={o.icon} size={26} />
        </div>
        <span style={{ fontSize: 11.5, fontWeight: 800, padding: '5px 10px', borderRadius: 'var(--radius-pill)', letterSpacing: '.2px', background: o.bg, color: o.fg }}>{o.tag}</span>
      </div>
      <h2 style={{ margin: 0, fontSize: 19, fontWeight: 800 }}>{o.title}</h2>
      <p style={{ margin: 0, fontSize: 14, fontWeight: 500, color: 'var(--ink-6)', lineHeight: 1.5 }}>{o.blurb}</p>
      {bullets(o.items, o.fg)}
      <span style={{ marginTop: 'auto', paddingTop: 4, display: 'inline-flex', alignItems: 'center', gap: 6, fontSize: 14, fontWeight: 700, color: o.fg }}>
        {o.cta}<span style={{ transform: 'scaleX(-1)', display: 'flex' }}><Icon name="arrow-left" size={16} /></span>
      </span>
    </a>
  );
  const small = (icon, title, sub, to) => (
    <a onClick={(e) => { e.preventDefault(); to && go(to); }} href="#" style={{
      flex: '1 1 220px', display: 'flex', alignItems: 'center', gap: 12,
      background: 'var(--surface-card)', border: '1px solid var(--border-card)',
      borderRadius: 'var(--radius-14)', padding: '14px 16px', textDecoration: 'none',
      color: 'var(--ink-1)', boxShadow: 'var(--shadow-card)',
    }}>
      <span style={{ width: 38, height: 38, borderRadius: 'var(--radius-10)', background: 'var(--surface-sunken)', color: 'var(--ink-5)', display: 'flex', alignItems: 'center', justifyContent: 'center', flex: 'none' }}><Icon name={icon} size={18} /></span>
      <span style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
        <b style={{ fontSize: 14, fontWeight: 700 }}>{title}</b>
        <span style={{ fontSize: 12.5, fontWeight: 500, color: 'var(--ink-7)' }}>{sub}</span>
      </span>
    </a>
  );
  const LESSONS = [
    ['ראשון', [['10:00', 'מרים כהן'], ['16:30', 'יהודית ברק']]],
    ['שלישי', [['09:30', 'רחל אבידן'], ['11:00', 'שרה מזרחי'], ['17:00', 'נעמי גל']]],
    ['חמישי', [['10:30', 'אסתר פרידמן']]],
  ];
  return (
    <div style={{ background: 'var(--surface-canvas)', minHeight: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <div style={{ width: '100%', background: 'var(--navy-800)', color: '#fff', padding: '44px 24px 40px', textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(rgba(255,255,255,.05) 1px, transparent 1px)', backgroundSize: '22px 22px', opacity: .5 }} />
        <div style={{ position: 'relative', maxWidth: 640, margin: '0 auto' }}>
          <div style={{ display: 'inline-flex', marginBottom: 18 }}><Logo height={34} /></div>
          <h1 style={{ margin: '0 0 10px', fontSize: 32, fontWeight: 800 }}>טק בגובה העיניים</h1>
          <p style={{ margin: '0 0 14px', fontSize: 15, fontWeight: 500, color: 'var(--blue-300)', letterSpacing: '.3px' }}>דנה קוניק · שיעורי טכנולוגיה לגיל השלישי</p>
          <p style={{ margin: 0, fontSize: 14.5, fontWeight: 500, color: 'var(--blue-150)', lineHeight: 1.6 }}>כל הכלים לניהול העסק וללימוד — במקום אחד. בחרי לאן להיכנס.</p>
        </div>
      </div>
      <main style={{ width: '100%', maxWidth: 760, padding: '36px 20px 0' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 18 }}>
          {big({ to: 'business', icon: 'bars', bg: 'var(--blue-100)', fg: 'var(--blue-600)', tag: 'לשימוש יומיומי', title: 'ניהול העסק', blurb: 'כל מה שצריך כדי לנהל את השיעורים בלי להתבלבל.', cta: 'כניסה לניהול העסק', items: ['תלמידות, טלפונים ומחירים', 'תשלומים ומעקב חודשי', 'לוז שבועי ותזכורות בוואטסאפ', 'סנכרון אוטומטי בין הטלפון והמחשב'] })}
          {big({ to: 'toolkit', icon: 'book', bg: 'var(--green-100)', fg: 'var(--green-700)', tag: 'להכנת שיעור', title: 'ערכת ההוראה', blurb: 'מערכי שיעור מוכנים, לפי רמת התלמיד/ה.', cta: 'כניסה לערכת ההוראה', items: ['שלוש רמות: מתחיל, בינוני, מתקדם', 'שלב אחר שלב, מוכן להוראה', 'נושאים: סמארטפון, מחשב, בינה מלאכותית', 'מתחבר לגליונות התרגול להדפסה'] })}
        </div>
        <div style={{ marginTop: 34 }}>
          <p style={{ fontSize: 13, fontWeight: 800, color: 'var(--ink-6)', letterSpacing: '.4px', margin: '0 0 12px' }}>חומרים נוספים</p>
          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
            {small('printer', 'גליונות תרגול', 'להדפסה ולתרגול בשיעור', 'practice')}
            {small('flier', 'הפלייר', 'להדפסה ולשליחה בוואטסאפ', 'flier')}
            {small('slides', 'המצגת השיווקית', 'להצגה בפני לקוחות פוטנציאליים')}
          </div>
        </div>
        <div style={{ marginTop: 34, paddingBottom: 40 }}>
          <p style={{ fontSize: 13, fontWeight: 800, color: 'var(--ink-6)', letterSpacing: '.4px', margin: '0 0 12px' }}>השיעורים השבוע</p>
          <div style={{ background: 'var(--surface-card)', border: '1px solid var(--border-card)', borderRadius: 'var(--radius-18)', boxShadow: 'var(--shadow-card)', overflow: 'hidden' }}>
            {LESSONS.map(([day, rows]) => (
              <React.Fragment key={day}>
                <div style={{ padding: '10px 20px', background: 'var(--surface-sunken)', fontSize: 13, fontWeight: 800, color: 'var(--navy-800)', borderBottom: '1px solid var(--border-card)', borderTop: '1px solid var(--border-card)' }}>{day}</div>
                {rows.map(([time, name]) => (
                  <div key={name} style={{ display: 'flex', alignItems: 'center', gap: 14, padding: '13px 20px', borderBottom: '1px solid var(--border-hair)' }}>
                    <span style={{ fontFamily: 'var(--font-num)', fontSize: 14, fontWeight: 700, color: 'var(--ink-6)', flex: 'none', width: 46 }}>{time}</span>
                    <span style={{ flex: 1, fontSize: 14.5, fontWeight: 700 }}>{name}</span>
                    <span style={{ flex: 'none', display: 'inline-flex', alignItems: 'center', gap: 6, background: 'var(--green-100)', color: 'var(--green-700)', fontWeight: 800, fontSize: 13, padding: '8px 14px', borderRadius: 'var(--radius-pill)' }}>תזכורת</span>
                  </div>
                ))}
              </React.Fragment>
            ))}
          </div>
        </div>
      </main>
      <footer style={{ margin: '0 0 28px', fontSize: 12.5, fontWeight: 500, color: 'var(--ink-8)' }}>טק בגובה העיניים · דנה קוניק</footer>
    </div>
  );
}
Object.assign(window, { HomeHub });
