const PLANS = {
  1: [
    { badge: 'שיעור 1', title: 'מסך מגע והיכרות עם המכשיר', dur: '45 דקות', goal: 'התלמידה פותחת ונועלת את הטלפון בביטחון', materials: 'טלפון של התלמידה, גליון תרגול 1',
      phases: [
        { name: 'פתיחה', time: '5 דק׳', dot: 'var(--blue-300)', steps: ['שאלי מה הכי מפריע לה בטלפון היום', 'הסבירי שאי אפשר לשבור כלום בלחיצה'] },
        { name: 'הדגמה', time: '15 דק׳', dot: 'var(--blue-500)', steps: ['הדליקי והנעילי את המסך יחד', 'הראי את כפתור הבית ואת כפתור החזרה', 'גללי למעלה ולמטה במסך הבית'] },
        { name: 'תרגול', time: '20 דק׳', dot: 'var(--green-500)', steps: ['בקשי ממנה לפתוח שלוש אפליקציות ולחזור', 'הגדילו יחד את גודל הטקסט בהגדרות'] },
        { name: 'סיכום', time: '5 דק׳', dot: 'var(--orange-500)', steps: ['חזרי על מה שלמדנו במילים שלה', 'מסרי את גליון התרגול'] },
      ],
      tip: 'אם היא מתביישת — תני לה להחזיק את הטלפון כל הזמן. את רק מצביעה.',
      hw: ['לחצי על שעון הטלפון כדי לפתוח אותו', 'פתחי הגדרות וחזרי אחורה', 'הגדילי טקסט באתר חדשות'] },
    { badge: 'שיעור 2', title: 'שיחות טלפון ואנשי קשר', dur: '45 דקות', goal: 'שמירת מספר חדש וחיוג ממנו',
      phases: [
        { name: 'פתיחה', time: '5 דק׳', dot: 'var(--blue-300)', steps: ['בדקי מה נשאר מהשיעור הקודם'] },
        { name: 'הדגמה', time: '15 דק׳', dot: 'var(--blue-500)', steps: ['פתחי את אפליקציית הטלפון', 'שמרי מספר חדש בשם "רופא משפחה"'] },
        { name: 'תרגול', time: '20 דק׳', dot: 'var(--green-500)', steps: ['היא מחייגת לבן משפחה שמחכה לשיחה', 'מצאו יחד שיחה מאתמול בהיסטוריה'] },
      ],
      warn: 'אל תשמרי מספרים בשמות מקוצרים — שם מלא בלבד, אחרת היא לא תמצא.',
      hw: ['חייגי לבן/בת משפחה', 'שמרי מספר חדש', 'מצאי שיחה מאתמול'] },
  ],
  2: [
    { badge: 'שיעור 1', title: 'מייל — לפתוח, לקרוא, לענות', dur: '50 דקות', goal: 'שליחת מייל וזיהוי השולח', materials: 'מחשב או טאבלט',
      phases: [
        { name: 'פתיחה', time: '5 דק׳', dot: 'var(--blue-300)', steps: ['שאלי מתי בפעם האחרונה פתחה מייל'] },
        { name: 'הדגמה', time: '20 דק׳', dot: 'var(--blue-500)', steps: ['פתחו את תיבת הדואר יחד', 'הראי איפה רואים מי שלח'] },
        { name: 'תרגול', time: '25 דק׳', dot: 'var(--green-500)', steps: ['היא שולחת מייל לעצמה עם נושא "בדיקה"', 'העבירו מייל ספאם לתיקיית דואר זבל'] },
      ],
      tip: 'לעולם לא ללחוץ על קישורים ממיילים ממוסדות בנקאיים.',
      hw: ['שלחי מייל לעצמך', 'בדקי מי שלח מייל שקיבלת'] },
  ],
  3: [
    { badge: 'שיעור 1', title: 'בינה מלאכותית — שיחה ראשונה', dur: '50 דקות', goal: 'לשאול שאלה אחת ולקבל תשובה מובנת',
      phases: [
        { name: 'פתיחה', time: '5 דק׳', dot: 'var(--blue-300)', steps: ['הסבירי מה זה AI במשפט אחד, בלי ז׳רגון'] },
        { name: 'הדגמה', time: '15 דק׳', dot: 'var(--blue-500)', steps: ['שאלי: "תן לי מתכון קל לסלט ירקות"', 'הראי איך מבקשים "תסביר לי פשוט יותר"'] },
        { name: 'תרגול', time: '25 דק׳', dot: 'var(--green-500)', steps: ['היא שואלת שאלה שמסקרנת אותה', 'תרגמו יחד משפט מאנגלית'] },
      ],
      tip: 'AI לא תמיד צודק — תמיד אפשר לבדוק במקור נוסף.',
      hw: ['שאלי שאלה שמעניינת אותך', 'בקשי מכתב קצר לרופא'] },
  ],
};

const PRACTICE = {
  1: [{ n: 1, title: 'מסך מגע בסיסי', sub: 'לאחר שיעור 1', tip: 'אי אפשר "לשבור" טלפון בלחיצה. נסי בחופשיות!', tasks: ['לחצי על שעון הטלפון כדי לפתוח אותו', 'גללי למטה ולמעלה במסך הבית', 'לחצי על "הגדרות" ואז על כפתור "חזרה"'] },
      { n: 3, title: 'WhatsApp', sub: 'לאחר שיעורים 3–4', tip: 'שני ✓✓ כחולים = נקראה. ✓✓ אפורים = נשלחה אך לא נקראה.', tasks: ['שלחי הודעת "שלום!" לקרוב משפחה', 'שלחי תמונה מהגלריה', 'שלחי הודעה קולית'] }],
  2: [{ n: 3, title: 'אבטחה דיגיטלית', sub: 'לאחר שיעור 5 · בחני את עצמך', tip: 'שום גוף רשמי לא יבקש ממך לשלוח קוד SMS!', tasks: ['קיבלתי SMS שמבקש קוד בנקאי – זו הונאה, לא לענות', 'מישהו ב-WA טוען שהוא נכד בצרות – להתקשר ישירות'] }],
  3: [{ n: 8, title: 'הגדרות נגישות', sub: 'שווה לכל תלמיד/ה', tip: 'זו ההגדרה שהופכת את הטלפון מ"קשה" ל"נוח" בבת אחת.', tasks: ['הגדילי את גודל הטקסט בכל המכשיר', 'הפעילי "טקסט מודגש" לקריאה נוחה'] }],
};

const LEVEL_COLOR = { 1: 'var(--blue-500)', 2: 'var(--green-500)', 3: 'var(--orange-500)' };
const LEVEL_LABEL = { 1: 'רמה 1 — סמארטפון', 2: 'רמה 2 — מחשב ואבטחה', 3: 'רמה 3 — AI ווידאו' };

function PlanCard({ plan, color, open, onToggle }) {
  const { Icon, Callout } = window.KunikDesignSystem_63ae72;
  return (
    <div style={{ background: 'var(--surface-card)', border: '1px solid var(--border-card)', borderRadius: 'var(--radius-14)', marginBottom: 12, boxShadow: 'var(--shadow-card)', overflow: 'hidden' }}>
      <div onClick={onToggle} style={{ display: 'flex', alignItems: 'center', gap: 14, padding: '17px 20px', cursor: 'pointer', userSelect: 'none' }}>
        <div style={{ flex: 'none', padding: '6px 13px', borderRadius: 'var(--radius-8)', background: color, color: '#fff', fontSize: 13.5, fontWeight: 800, whiteSpace: 'nowrap' }}>{plan.badge}</div>
        <div style={{ flex: 1, minWidth: 0 }}>
          <div style={{ fontSize: 19, fontWeight: 800, lineHeight: 1.3 }}>{plan.title}</div>
          <div style={{ fontSize: 14, fontWeight: 600, color: 'var(--ink-6)' }}>{plan.dur}</div>
        </div>
        <div style={{ flex: 'none', color: 'var(--ink-7)', transform: open ? 'rotate(180deg)' : 'none', transition: 'var(--transition-chevron)' }}><Icon name="chevron-down" size={20} /></div>
      </div>
      {open && (
        <div style={{ padding: 20, borderTop: '1px solid var(--border-hair)' }}>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10, marginBottom: 18 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 9, padding: '10px 15px', borderRadius: 'var(--radius-10)', background: 'var(--green-100)', color: 'var(--green-700)', fontSize: 15.5, fontWeight: 700 }}><Icon name="target" size={17} />{plan.goal}</div>
            {plan.materials && <div style={{ display: 'flex', alignItems: 'center', gap: 9, padding: '10px 15px', borderRadius: 'var(--radius-10)', background: 'var(--surface-muted)', color: 'var(--ink-3)', fontSize: 15.5, fontWeight: 600 }}><Icon name="materials" size={17} style={{ color: 'var(--navy-800)' }} />{plan.materials}</div>}
          </div>
          {plan.phases.map((ph) => (
            <div key={ph.name} style={{ marginBottom: 18 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 9, marginBottom: 9 }}>
                <div style={{ width: 10, height: 10, borderRadius: '50%', background: ph.dot }} />
                <div style={{ fontSize: 16, fontWeight: 800 }}>{ph.name}</div>
                <div style={{ fontSize: 14, fontWeight: 600, color: 'var(--ink-7)' }}>{ph.time}</div>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 7 }}>
                {ph.steps.map((s) => (
                  <div key={s} style={{ display: 'flex', gap: 11, padding: '11px 14px', borderRadius: 'var(--radius-9)', background: 'var(--surface-sunken)', lineHeight: 1.5, fontWeight: 500, fontSize: 16 }}>
                    <div style={{ flex: 'none', width: 6, height: 6, borderRadius: '50%', background: 'var(--blue-300)', marginTop: 8 }} />
                    <div>{s}</div>
                  </div>
                ))}
              </div>
            </div>
          ))}
          {plan.warn && <div style={{ marginBottom: 12 }}><Callout tone="warn">{plan.warn}</Callout></div>}
          {plan.tip && <div style={{ marginBottom: 12 }}><Callout tone="info">{plan.tip}</Callout></div>}
          <div style={{ padding: '16px 18px', borderRadius: 'var(--radius-12)', background: 'var(--surface-sunken)', border: '1px solid var(--border-card)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 9, marginBottom: 11 }}>
              <Icon name="home" size={18} style={{ color: 'var(--navy-800)' }} />
              <div style={{ fontSize: 15, fontWeight: 800, letterSpacing: '1px', color: 'var(--navy-800)' }}>שיעורי בית</div>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
              {plan.hw.map((h) => (
                <div key={h} style={{ display: 'flex', gap: 10, fontSize: 16, lineHeight: 1.5, fontWeight: 600, color: 'var(--ink-2)' }}>
                  <Icon name="chevron-left" size={17} style={{ color: 'var(--blue-500)', marginTop: 3 }} />
                  <div>{h}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

function TeachingToolkit({ go }) {
  const { AppHeader, SyncStatus, HomeFab, LevelPill, SectionLabel, Checkbox, Callout, Card, Icon } = window.KunikDesignSystem_63ae72;
  const [tab, setTab] = React.useState('plans');
  const [level, setLevel] = React.useState(1);
  const [open, setOpen] = React.useState(0);
  const [done, setDone] = React.useState({});
  const color = LEVEL_COLOR[level];
  const sheets = PRACTICE[level] || [];
  return (
    <div style={{ minHeight: '100%', background: 'var(--surface-canvas)', paddingBottom: 60 }}>
      <div onClick={() => go('home')}><HomeFab href="#" /></div>
      <AppHeader title="ערכת ההוראה" subtitle="שיעורי טכנולוגיה לגיל השלישי · דנה קוניק" maxWidth="var(--page-max)"
        tabs={[{ id: 'plans', label: 'מערכי שיעור' }, { id: 'practice', label: 'גליונות תרגול' }, { id: 'summary', label: 'סיכום שיעור' }]}
        activeTab={tab} onTabChange={setTab}
        actions={<SyncStatus state="synced" label="גובה לפני 6 דקות" sub="נשמר במכשיר" />} />
      <div style={{ maxWidth: 'var(--page-max)', margin: '0 auto', padding: '22px 24px 0' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8, flexWrap: 'wrap', marginBottom: 20 }}>
          {[1, 2, 3].map((n) => <LevelPill key={n} label={LEVEL_LABEL[n]} color={LEVEL_COLOR[n]} selected={level === n} onClick={() => { setLevel(n); setOpen(0); }} />)}
          <div style={{ flex: 1 }} />
          <div style={{ fontSize: 14, fontWeight: 600, color: 'var(--ink-6)' }}>{(PLANS[level] || []).length} מערכי שיעור</div>
        </div>

        {tab === 'plans' && (PLANS[level] || []).map((p, i) => (
          <PlanCard key={p.badge} plan={p} color={color} open={open === i} onToggle={() => setOpen(open === i ? -1 : i)} />
        ))}

        {tab === 'practice' && sheets.map((sh) => (
          <div key={sh.n} style={{ background: 'var(--surface-card)', border: '1px solid var(--border-card)', borderRadius: 'var(--radius-14)', padding: '18px 20px', marginBottom: 12, boxShadow: 'var(--shadow-card)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
              <div style={{ flex: 'none', width: 40, height: 40, borderRadius: 'var(--radius-10)', background: color, color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'var(--font-num)', fontSize: 17, fontWeight: 800 }}>{sh.n}</div>
              <div style={{ flex: 1, minWidth: 0 }}>
                <div style={{ fontSize: 19, fontWeight: 800, lineHeight: 1.3 }}>{sh.title}</div>
                <div style={{ fontSize: 14, fontWeight: 600, color: 'var(--ink-6)' }}>{sh.sub}</div>
              </div>
              <div style={{ fontSize: 14, fontWeight: 700, color }}>{sh.tasks.filter((t) => done[t]).length}/{sh.tasks.length}</div>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 8, marginTop: 16 }}>
              {sh.tasks.map((t) => <Checkbox key={t} label={t} color={color} checked={!!done[t]} onClick={() => setDone({ ...done, [t]: !done[t] })} />)}
            </div>
            {sh.tip && <div style={{ marginTop: 14 }}><Callout tone="tip">{sh.tip}</Callout></div>}
          </div>
        ))}

        {tab === 'summary' && <LessonSummary color={color} />}
      </div>
    </div>
  );
}

function LessonSummary({ color }) {
  const { TextField, SelectField, Button, Card, SectionLabel, Callout } = window.KunikDesignSystem_63ae72;
  return (
    <div style={{ display: 'flex', gap: 20, alignItems: 'flex-start', flexWrap: 'wrap' }}>
      <div style={{ flex: 1, minWidth: 320 }}>
        <div style={{ background: 'var(--surface-card)', border: '1px solid var(--border-card)', borderRadius: 'var(--radius-14)', padding: 20, boxShadow: 'var(--shadow-card)' }}>
          <div style={{ fontSize: 15, fontWeight: 800, letterSpacing: '1.3px', color: 'var(--navy-800)', marginBottom: 16 }}>פרטי השיעור</div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
            <SelectField label="שם התלמיד/ה" options={['מרים כהן', 'יהודית ברק', 'רחל אבידן']} />
            <TextField label="תאריך" type="date" dir="ltr" defaultValue="2026-08-11" />
            <TextField label="נושא השיעור" defaultValue="WhatsApp — הודעות ותמונות" wrapStyle={{ gridColumn: '1 / -1' }} />
            <TextField label="מה עבד טוב" multiline rows={2} defaultValue="הקלטת הודעה קולית — הצליחה לבד בפעם השלישית" wrapStyle={{ gridColumn: '1 / -1' }} />
            <TextField label="לחזור על זה בפעם הבאה" multiline rows={2} defaultValue="שליחת תמונה מהגלריה" wrapStyle={{ gridColumn: '1 / -1' }} />
          </div>
          <div style={{ display: 'flex', gap: 10, marginTop: 18 }}>
            <Button color={color} style={{ flex: 1 }}>שמירת סיכום</Button>
            <Button variant="whatsapp" icon="whatsapp">שליחה לתלמידה</Button>
          </div>
        </div>
      </div>
      <div style={{ flex: '0 0 300px', display: 'flex', flexDirection: 'column', gap: 12 }}>
        <Callout tone="tip">כתבי את הסיכום בזמן השיעור, לא אחריו — אחרת זה לא קורה.</Callout>
        <Callout tone="info">הסיכום נשלח לתלמידה בוואטסאפ כדי שתדע במה להתאמן עד הפעם הבאה.</Callout>
      </div>
    </div>
  );
}
Object.assign(window, { TeachingToolkit });
