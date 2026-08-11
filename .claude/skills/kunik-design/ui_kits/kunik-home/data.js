window.KH_DOMAINS = [
  { key:'insurance', label:'ביטוחים', icon:'shield', color:'var(--domain-insurance)', bg:'var(--domain-insurance-bg)',
    columns:[{key:'type',label:'סוג ביטוח'},{key:'company',label:'חברה מבטחת'},{key:'phone',label:'טלפון'},{key:'amount',label:'סכום לחיוב'},{key:'renewal',label:'תאריך חידוש'}],
    items:[
      { id:1, type:'ביטוח דירה', company:'הראל', phone:'03-754-0000', amount:'₪142', renewal:'12.11.26', badge:['בקרוב','orange'] },
      { id:2, type:'ביטוח בריאות משלים', company:'כלל', phone:'03-638-8888', amount:'₪310', renewal:'01.03.27', badge:null },
      { id:3, type:'ביטוח חיים', company:'מגדל', phone:'03-519-9999', amount:'₪218', renewal:'27.08.26', badge:['דחוף — 16 ימים','red'] },
      { id:4, type:'ביטוח נסיעות', company:'פספורטכארד', phone:'03-777-1010', amount:'—', renewal:'—', badge:null },
    ]},
  { key:'savings', label:'חסכונות והשקעות', icon:'bars', color:'var(--domain-savings)', bg:'var(--domain-savings-bg)',
    columns:[{key:'name',label:'שם החיסכון'},{key:'institution',label:'גוף מנהל'},{key:'balance',label:'יתרה נוכחית'},{key:'type',label:'סוג'}],
    items:[
      { id:1, name:'קרן השתלמות', institution:'אלטשולר שחם', balance:'₪84,300', type:'מסלול כללי' },
      { id:2, name:'קופת גמל להשקעה', institution:'מיטב', balance:'₪31,900', type:'מניות' },
      { id:3, name:'פיקדון בנקאי', institution:'בנק לאומי', balance:'₪22,000', type:'שקלי, שנתי' },
    ]},
  { key:'health', label:'תרופות ובריאות', icon:'heart', color:'var(--domain-health)', bg:'var(--domain-health-bg)',
    columns:[{key:'name',label:'שם התרופה/הטיפול'},{key:'dosage',label:'מינון/תדירות'},{key:'doctor',label:'רופא/מרפאה'},{key:'phone',label:'טלפון'},{key:'nextAppt',label:'תור הבא'}],
    items:[
      { id:1, name:'בדיקת דם שנתית', dosage:'פעם בשנה', doctor:'ד"ר אבירם, כללית', phone:'03-522-1188', nextAppt:'02.09.26', badge:['בקרוב','orange'] },
      { id:2, name:'ויטמין D', dosage:'טיפה ביום', doctor:'—', phone:'—', nextAppt:'—', badge:null },
      { id:3, name:'מעקב עיניים', dosage:'כל חצי שנה', doctor:'ד"ר לוין', phone:'09-744-2200', nextAppt:'18.08.26', badge:['דחוף — 7 ימים','red'] },
    ]},
  { key:'vehicles', label:'רכבים', icon:'car', color:'var(--domain-vehicles)', bg:'var(--domain-vehicles-bg)',
    columns:[{key:'nickname',label:'רכב'},{key:'plate',label:'מספר רישוי'},{key:'licenseExpiry',label:'תוקף רישיון'},{key:'testDate',label:'טסט הבא'},{key:'insuranceCompany',label:'חברת ביטוח'},{key:'amount',label:'עלות חודשית'}],
    items:[
      { id:1, nickname:'מאזדה 3 — לבנה', plate:'55-238-01', licenseExpiry:'30.01.27', testDate:'14.09.26', insuranceCompany:'שלמה', amount:'₪265', badge:null },
      { id:2, nickname:'קיה פיקנטו', plate:'12-994-73', licenseExpiry:'22.08.26', testDate:'22.08.26', insuranceCompany:'איילון', amount:'₪180', badge:['דחוף — 11 ימים','red'] },
    ]},
  { key:'documents', label:'מסמכים חשובים', icon:'document', color:'var(--domain-documents)', bg:'var(--domain-documents-bg)',
    columns:[{key:'name',label:'שם המסמך'},{key:'category',label:'קטגוריה'},{key:'location',label:'איפה נמצא'},{key:'expiry',label:'תוקף'}],
    items:[
      { id:1, name:'דרכון', category:'זיהוי', location:'כספת בבית', expiry:'04.06.29' },
      { id:2, name:'צוואה', category:'משפטי', location:'עו"ד שרון, תיק 1182', expiry:'—' },
      { id:3, name:'תעודת נישואין', category:'זיהוי', location:'תיקייה כחולה, מגירה עליונה', expiry:'—' },
      { id:4, name:'חוזה שכירות', category:'דיור', location:'מייל + עותק מודפס', expiry:'31.12.26' },
    ]},
  { key:'payments', label:'תזכורות לתשלומים', icon:'bell', color:'var(--domain-payments)', bg:'var(--domain-payments-bg)', monthly:true,
    columns:[{key:'name',label:'שם התשלום'},{key:'amount',label:'סכום'},{key:'dueDate',label:'תאריך לתשלום'},{key:'phone',label:'טלפון'}],
    groups:[
      { label:'אוגוסט 2026', total:'₪1,847', items:[
        { id:1, name:'ארנונה', amount:'₪612', dueDate:'15.08.26', phone:'09-777-0000', badge:['בקרוב','orange'] },
        { id:2, name:'חשמל', amount:'₪430', dueDate:'21.08.26', phone:'103', badge:null },
        { id:3, name:'ועד בית', amount:'₪280', dueDate:'01.08.26', phone:'—', badge:['שולם','green'] },
        { id:4, name:'ביטוח רכב', amount:'₪525', dueDate:'28.08.26', phone:'03-666-1234', badge:null },
      ]},
      { label:'יולי 2026', total:'₪1,322', items:[
        { id:5, name:'ארנונה', amount:'₪612', dueDate:'15.07.26', phone:'09-777-0000', badge:['שולם','green'] },
        { id:6, name:'חשמל', amount:'₪430', dueDate:'21.07.26', phone:'103', badge:['שולם','green'] },
        { id:7, name:'ועד בית', amount:'₪280', dueDate:'01.07.26', phone:'—', badge:['שולם','green'] },
      ]},
    ]},
  { key:'income', label:'הכנסות', icon:'trending-up', color:'var(--domain-income)', bg:'var(--domain-income-bg)', monthly:true,
    columns:[{key:'source',label:'מקור ההכנסה'},{key:'amount',label:'סכום'},{key:'frequency',label:'תדירות'},{key:'date',label:'תאריך אחרון'}],
    groups:[
      { label:'אוגוסט 2026', total:'₪12,400', items:[
        { id:1, source:'משכורת', amount:'₪10,200', frequency:'חודשי', date:'01.08.26' },
        { id:2, source:'שיעורי טכנולוגיה', amount:'₪2,200', frequency:'חודשי', date:'09.08.26' },
      ]},
      { label:'יולי 2026', total:'₪12,900', items:[
        { id:3, source:'משכורת', amount:'₪10,200', frequency:'חודשי', date:'01.07.26' },
        { id:4, source:'שיעורי טכנולוגיה', amount:'₪2,700', frequency:'חודשי', date:'10.07.26' },
      ]},
    ]},
];

window.KH_UPCOMING = [
  { name:'ביטוח חיים — מגדל', domain:'ביטוחים', color:'var(--domain-insurance)', date:'27.08.26', badge:['דחוף — 16 ימים','red'], wa:true },
  { name:'טסט — קיה פיקנטו', domain:'רכבים', color:'var(--domain-vehicles)', date:'22.08.26', badge:['דחוף — 11 ימים','red'], wa:false },
  { name:'מעקב עיניים — ד"ר לוין', domain:'תרופות ובריאות', color:'var(--domain-health)', date:'18.08.26', badge:['דחוף — 7 ימים','red'], wa:true },
  { name:'ארנונה', domain:'תזכורות לתשלומים', color:'var(--domain-payments)', date:'15.08.26', badge:['בקרוב','orange'], wa:false },
  { name:'בדיקת דם שנתית', domain:'תרופות ובריאות', color:'var(--domain-health)', date:'02.09.26', badge:['בקרוב','orange'], wa:true },
];
