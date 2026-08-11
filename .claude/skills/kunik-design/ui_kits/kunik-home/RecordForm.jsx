function RecordForm({ domain, onClose }) {
  const { TextField, SelectField, Button, IconButton } = window.KunikDesignSystem_63ae72;
  const fields = domain.columns;
  return (
    <div style={{ position: 'fixed', inset: 0, background: 'var(--scrim-modal)', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 20, zIndex: 50 }}>
      <div style={{ background: 'var(--surface-card)', borderRadius: 'var(--radius-20)', padding: 30, maxWidth: 480, width: '100%', maxHeight: '86vh', overflow: 'auto', display: 'flex', flexDirection: 'column', gap: 16 }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <h2 style={{ margin: 0, fontSize: 19, fontWeight: 800 }}>הוספה — {domain.label}</h2>
          <IconButton icon="close" size="sm" tone="sunken" title="סגירה" onClick={onClose} />
        </div>
        {fields.map((c) => (
          c.key === 'category'
            ? <SelectField key={c.key} label={c.label} options={['זיהוי', 'משפטי', 'דיור', 'רפואי']} onAdd={() => {}} />
            : <TextField key={c.key} label={c.label} dir={/phone|טלפון/.test(c.key + c.label) ? 'ltr' : undefined} />
        ))}
        <TextField label="הערות" multiline rows={3} />
        <div style={{ display: 'flex', gap: 10, marginTop: 8 }}>
          <Button color={domain.color} style={{ flex: 1, padding: 13 }} onClick={onClose}>שמירה</Button>
          <Button variant="quiet" style={{ padding: '13px 22px' }} onClick={onClose}>ביטול</Button>
        </div>
      </div>
    </div>
  );
}
Object.assign(window, { RecordForm });
