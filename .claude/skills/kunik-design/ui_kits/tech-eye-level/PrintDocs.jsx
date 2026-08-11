const SHEET = {
  title: 'רמה 1 — סמארטפון, יסודות',
  color: 'var(--blue-500)',
  sheets: [
    { n: 1, title: 'מסך מגע בסיסי', sub: 'לאחר שיעור 1', tip: 'אי אפשר "לשבור" טלפון בלחיצה. נסי בחופשיות!', tasks: ['לחצי על שעון הטלפון כדי לפתוח אותו', 'גללי למטה ולמעלה במסך הבית', 'לחצי על "הגדרות" ואז על כפתור "חזרה"', 'הגדילי טקסט: לחצי פעמיים על אתר חדשות'] },
    { n: 2, title: 'שיחות טלפון', sub: 'לאחר שיעור 2', tasks: ['חייגי לבן/בת משפחה שיודע/ת שאת מתרגלת', 'שמרי מספר חדש באנשי קשר בשם "רופא משפחה"', 'מצאי שיחה מאתמול בהיסטוריית השיחות'] },
    { n: 3, title: 'WhatsApp', sub: 'לאחר שיעורים 3–4', tip: 'שני ✓✓ כחולים = נקראה. ✓✓ אפורים = נשלחה אך לא נקראה.', tasks: ['שלחי הודעת "שלום!" לקרוב משפחה', 'שלחי תמונה מהגלריה', 'שלחי הודעה קולית', 'השתיקי קבוצה רועשת (8 שעות)'] },
  ],
};

function PaperSheet({ children, width = 794 }) {
  return (
    <div style={{ width, minHeight: 1050, background: '#fff', boxShadow: 'var(--shadow-print)', borderRadius: 4, padding: '30px 44px 44px', margin: '0 auto' }}>{children}</div>
  );
}

function PracticeSheet() {
  const { Checkbox, Callout, Logo } = window.KunikDesignSystem_63ae72;
  return (
    <div style={{ background: 'var(--surface-canvas)', padding: '28px 20px 48px' }}>
      <PaperSheet>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 14, paddingBottom: 8, borderBottom: '1px solid var(--border-field)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 9 }}>
            <Logo height={16} onNavy={false} />
            <div style={{ fontSize: 12, fontWeight: 800, color: 'var(--navy-800)' }}>טק בגובה העיניים · דנה קוניק</div>
          </div>
          <div dir="ltr" style={{ fontFamily: 'var(--font-num)', fontSize: 12, fontWeight: 700, color: 'var(--ink-6)' }}>053-700-4934</div>
        </div>
        <div style={{ paddingTop: 34 }}>
          <div style={{ fontSize: 13, fontWeight: 800, letterSpacing: '2px', color: 'var(--blue-500)' }}>גליונות תרגול לבית</div>
          <div style={{ fontSize: 34, lineHeight: 1.15, fontWeight: 800, letterSpacing: '-1px', color: 'var(--navy-800)', marginTop: 6 }}>{SHEET.title}</div>
          <div style={{ fontSize: 16, lineHeight: 1.6, color: 'var(--ink-3)', marginTop: 10, fontWeight: 500, maxWidth: '80%' }}>
            סמנו ✓ בכל משימה שהצלחתם. אין צורך לסיים הכל — כל משימה שעשיתם היא התקדמות. נתקעתם? צלמו את המסך ושלחו לי ב-WhatsApp.
          </div>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 12, padding: '11px 16px', borderRadius: 'var(--radius-8)', background: SHEET.color, color: '#fff', marginTop: 20 }}>
          <div style={{ fontFamily: 'var(--font-num)', fontSize: 15, fontWeight: 900 }}>רמה 1</div>
          <div style={{ fontSize: 16, fontWeight: 700 }}>סמארטפון — יסודות</div>
        </div>
        {SHEET.sheets.map((sh) => (
          <div key={sh.n} style={{ border: '1px solid var(--border-field)', borderRadius: 'var(--radius-10)', padding: '16px 18px', marginTop: 12 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
              <div style={{ flex: 'none', width: 32, height: 32, borderRadius: 'var(--radius-8)', background: SHEET.color, color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'var(--font-num)', fontSize: 15, fontWeight: 800 }}>{sh.n}</div>
              <div style={{ flex: 1, minWidth: 0 }}>
                <div style={{ fontSize: 18, fontWeight: 800, lineHeight: 1.3 }}>{sh.title}</div>
                <div style={{ fontSize: 13, fontWeight: 600, color: 'var(--ink-6)' }}>{sh.sub}</div>
              </div>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 7, marginTop: 12 }}>
              {sh.tasks.map((t) => <Checkbox key={t} size="print" label={t} />)}
            </div>
            {sh.tip && <div style={{ marginTop: 12 }}><Callout tone="tip" label="טיפ">{sh.tip}</Callout></div>}
          </div>
        ))}
        <div style={{ marginTop: 22, padding: '16px 18px', borderRadius: 'var(--radius-10)', background: 'var(--blue-100)', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 16 }}>
          <div style={{ fontSize: 16, lineHeight: 1.5, fontWeight: 700, color: 'var(--blue-600)' }}>נתקעת? אל תישארי עם השאלה — כתבי לי ואחזור אליך.</div>
          <div dir="ltr" style={{ fontFamily: 'var(--font-num)', fontSize: 23, fontWeight: 900, color: 'var(--navy-800)', whiteSpace: 'nowrap' }}>053-700-4934</div>
        </div>
      </PaperSheet>
    </div>
  );
}

function Flier() {
  const { Icon } = window.KunikDesignSystem_63ae72;
  const topics = [
    ['smartphone', 'סמארטפון', 'WhatsApp, מצלמה, ניווט ועוד'],
    ['computer', 'מחשב ואינטרנט', 'מייל, הזמנות, קופ"ח'],
    ['video', 'שיחות וידאו', 'Zoom ו-FaceTime'],
    ['sparkles', 'בינה מלאכותית', 'ChatGPT ועוד'],
  ];
  return (
    <div style={{ background: 'var(--surface-canvas)', padding: '28px 20px 48px' }}>
      <div style={{ width: 794, minHeight: 1123, margin: '0 auto', background: 'var(--surface-canvas)', boxShadow: 'var(--shadow-print)', display: 'flex', flexDirection: 'column', overflow: 'hidden', borderRadius: 4 }}>
        <div style={{ position: 'relative', padding: '44px 48px 104px', background: 'var(--hero-gradient)', color: '#fff' }}>
          <div style={{ position: 'absolute', inset: 0, opacity: .14, backgroundImage: 'radial-gradient(#fff 1.2px,transparent 1.2px)', backgroundSize: '24px 24px' }} />
          <div style={{ position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 11 }}>
              <div style={{ display: 'flex', alignItems: 'flex-end', gap: 3, height: 26 }}>
                <div style={{ width: 8, height: 12, borderRadius: 2, background: 'var(--blue-300)' }} />
                <div style={{ width: 8, height: 19, borderRadius: 2, background: 'var(--blue-400)' }} />
                <div style={{ width: 8, height: 26, borderRadius: 2, background: '#fff' }} />
              </div>
              <div style={{ fontSize: 18, fontWeight: 800, letterSpacing: '.6px' }}>טק בגובה העיניים</div>
            </div>
            <div style={{ fontSize: 15, fontWeight: 600, color: 'var(--blue-300)' }}>רמת השרון והסביבה</div>
          </div>
          <div style={{ position: 'relative', display: 'flex', alignItems: 'center', gap: 32, marginTop: 44 }}>
            <div style={{ flex: 'none', width: 206, height: 206, borderRadius: '50%', overflow: 'hidden', border: '5px solid rgba(255,255,255,.9)', boxShadow: 'var(--shadow-portrait)', background: 'var(--border-field)' }}>
              <img src="../../assets/dana-portrait.png" alt="דנה קוניק" style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: '50% 18%', display: 'block' }} />
            </div>
            <div>
              <div style={{ fontSize: 16, fontWeight: 700, letterSpacing: '2.4px', color: 'var(--blue-300)' }}>דנה קוניק</div>
              <div style={{ fontSize: 62, lineHeight: 1.04, fontWeight: 800, letterSpacing: '-1.6px', marginTop: 6 }}>שיעורי טכנולוגיה אצלכם</div>
              <div style={{ fontSize: 23, fontWeight: 600, color: 'var(--blue-120)', marginTop: 12 }}>בבית שלכם, בקצב שלכם</div>
            </div>
          </div>
        </div>
        <div style={{ margin: '-70px 34px 0', padding: '38px 34px 34px', background: '#fff', borderRadius: 'var(--radius-16)', boxShadow: 'var(--shadow-print)', position: 'relative' }}>
          <div style={{ fontSize: 24, lineHeight: 1.62, color: 'var(--ink-2)' }}>
            <b style={{ color: 'var(--blue-600)' }}>הסמארטפון</b> מבלבל? <b style={{ color: 'var(--blue-600)' }}>בא לכם לדבר עם הנכדים בווידאו</b> אבל לא יודעים איך? <b style={{ color: 'var(--blue-600)' }}>רוצים להזמין תרופות מהבית</b> בלי לצאת?
          </div>
          <div style={{ marginTop: 20, display: 'inline-flex', alignItems: 'center', gap: 10, padding: '12px 18px', borderRadius: 'var(--radius-pill)', background: 'var(--blue-100)', color: 'var(--blue-600)', fontSize: 19, fontWeight: 700 }}>
            <Icon name="check" size={19} />אני באה אליכם, בלי לחץ, בקצב שלכם
          </div>
        </div>
        <div style={{ flex: 1, minHeight: 14 }} />
        <div style={{ padding: '0 34px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12, margin: '0 4px 16px' }}>
            <div style={{ width: 28, height: 2, background: 'var(--blue-500)' }} />
            <div style={{ fontSize: 16, fontWeight: 800, letterSpacing: '1.8px', color: 'var(--navy-800)' }}>מה לומדים איתי</div>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14 }}>
            {topics.map(([ic, t, s]) => (
              <div key={t} style={{ display: 'flex', alignItems: 'center', gap: 16, padding: '26px 20px', borderRadius: 'var(--radius-12)', background: '#fff', border: '1px solid var(--border-card)' }}>
                <div style={{ flex: 'none', width: 50, height: 50, borderRadius: '50%', background: 'var(--navy-800)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff' }}><Icon name={ic} size={25} strokeWidth={1.6} /></div>
                <div><div style={{ fontSize: 22, fontWeight: 800 }}>{t}</div><div style={{ fontSize: 16, color: 'var(--ink-6)', marginTop: 2 }}>{s}</div></div>
              </div>
            ))}
          </div>
        </div>
        <div style={{ flex: 1, minHeight: 14 }} />
        <div style={{ margin: '0 34px 34px', borderRadius: 'var(--radius-16)', background: 'var(--navy-800)', color: '#fff', padding: '26px 30px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 18 }}>
          <div>
            <div style={{ fontSize: 15, fontWeight: 700, letterSpacing: '1.4px', color: 'var(--blue-300)' }}>שיעורים בבית הלקוח/ת</div>
            <div dir="ltr" style={{ fontFamily: 'var(--font-num)', fontSize: 42, fontWeight: 900, letterSpacing: '-1.4px', marginTop: 2, color: '#fff' }}>053-700-4934</div>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '17px 24px', borderRadius: 'var(--radius-pill)', background: 'var(--whatsapp)', color: 'var(--whatsapp-icon)', fontSize: 20, fontWeight: 800 }}>
            <Icon name="whatsapp" size={25} />כתבו לי
          </div>
        </div>
      </div>
    </div>
  );
}
Object.assign(window, { PracticeSheet, Flier });
