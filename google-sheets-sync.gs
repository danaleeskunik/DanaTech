// קוד לגיליון Google Sheets שמשמש כמסד נתונים מרכזי לכלי הניהול (index.html).
// הוראות התקנה מלאות ב-google-sheets-setup.txt.
// אין צורך להבין את הקוד כדי להתקין אותו — רק להעתיק-להדביק כמו שמוסבר שם.

const SHEETS = {
  students: ['id', 'name', 'phone', 'city', 'level', 'slots', 'day', 'time', 'price', 'status', 'contactName', 'contactPhone', 'referral', 'birthday', 'currentLesson', 'notes'],
  payments: ['id', 'studentId', 'month', 'lessons', 'price', 'total', 'paid', 'date'],
  notes: ['id', 'studentId', 'date', 'summary', 'homework', 'mood']
};

const TAB_NAMES = { students: 'תלמידות', payments: 'תשלומים', notes: 'סיכומי שיעור' };

// Columns forced to plain text — Sheets auto-converts bare digit/date-looking
// strings (phone numbers, YYYY-MM-DD) to numbers/dates, which drops leading
// zeros and breaks the app's string parsing. Same fix as the original phone
// crash (2026-07-31), applied to every column with the same shape.
const TEXT_COLS = ['phone', 'contactPhone', 'birthday'];

function doGet(e) {
  const out = {};
  for (const name of Object.keys(SHEETS)) out[name] = readSheet(name);
  return json(out);
}

function doPost(e) {
  const body = JSON.parse(e.postData.contents);
  const name = body.sheet;
  if (!SHEETS[name]) return json({ ok: false, error: 'unknown sheet: ' + name });
  writeSheet(name, Array.isArray(body.data) ? body.data : []);
  return json({ ok: true });
}

function getSheet_(name) {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  const title = TAB_NAMES[name] || name;
  let sh = ss.getSheetByName(title);
  if (!sh) {
    sh = ss.insertSheet(title);
    sh.appendRow(SHEETS[name]);
  }
  return sh;
}

function readSheet(name) {
  const sh = getSheet_(name);
  const values = sh.getDataRange().getValues();
  if (values.length < 2) return [];
  const headers = values[0];
  return values.slice(1)
    .filter(row => row.some(c => c !== ''))
    .map(row => {
      const obj = {};
      headers.forEach((h, i) => {
        let v = row[i];
        if (h === 'slots' && typeof v === 'string' && v) {
          try { v = JSON.parse(v); } catch (err) { v = []; }
        }
        if (h === 'paid') v = (v === true || v === 'TRUE' || v === 'true');
        if (TEXT_COLS.indexOf(h) !== -1 && v !== '') v = String(v);
        obj[h] = v;
      });
      return obj;
    });
}

function writeSheet(name, list) {
  const sh = getSheet_(name);
  const headers = SHEETS[name];
  sh.clearContents();
  sh.appendRow(headers);
  if (!list.length) return;
  const rows = list.map(item => headers.map(h => {
    let v = item[h];
    if (h === 'slots') v = JSON.stringify(v || []);
    return (v === undefined || v === null) ? '' : v;
  }));
  TEXT_COLS.forEach(col => {
    const i = headers.indexOf(col);
    if (i !== -1) sh.getRange(2, i + 1, rows.length, 1).setNumberFormat('@');
  });
  sh.getRange(2, 1, rows.length, headers.length).setValues(rows);
}

function json(obj) {
  return ContentService.createTextOutput(JSON.stringify(obj)).setMimeType(ContentService.MimeType.JSON);
}
