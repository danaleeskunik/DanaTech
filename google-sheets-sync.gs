// קוד לגיליון Google Sheets שמשמש כמסד נתונים מרכזי לכלי הניהול (index.html).
// הוראות התקנה מלאות ב-google-sheets-setup.txt.
// אין צורך להבין את הקוד כדי להתקין אותו — רק להעתיק-להדביק כמו שמוסבר שם.

const SHEETS = {
  students: ['id', 'name', 'phone', 'city', 'level', 'slots', 'day', 'time', 'price', 'status', 'contactName', 'contactPhone', 'referral', 'birthday', 'currentLesson', 'notes'],
  payments: ['id', 'studentId', 'month', 'lessons', 'price', 'total', 'paid', 'date'],
  notes: ['id', 'studentId', 'date', 'summary', 'homework', 'mood'],
  contacts: ['id', 'name', 'phone', 'lastContact', 'referredBy', 'notes']
};

const TAB_NAMES = { students: 'תלמידות', payments: 'תשלומים', notes: 'סיכומי שיעור', contacts: 'אנשי קשר' };

// Columns forced to plain text — Sheets auto-converts bare digit/date-looking
// strings (phone numbers, YYYY-MM-DD) to numbers/dates, which drops leading
// zeros and breaks the app's string parsing. Same fix as the original phone
// crash (2026-07-31), applied to every column with the same shape.
const TEXT_COLS = ['phone', 'contactPhone', 'birthday', 'lastContact'];

function doGet(e) {
  const out = {};
  for (const name of Object.keys(SHEETS)) out[name] = readSheet(name);
  return json(out);
}

function doPost(e) {
  const body = JSON.parse(e.postData.contents);
  if (body.calendar) return handleCalendar(body);
  const name = body.sheet;
  if (!SHEETS[name]) return json({ ok: false, error: 'unknown sheet: ' + name });
  writeSheet(name, Array.isArray(body.data) ? body.data : []);
  return json({ ok: true });
}

// ---- Google Calendar sync ----
// Every lesson the app schedules (new weekly student, one-time lesson, or a
// reschedule) mirrors to Dana's default Google Calendar with a 60-minute
// popup reminder. Weekly students become a recurring event series; one-time
// and rescheduled lessons become a single event. The client stores the
// returned calId back on the student's slot / schedule-exception record so
// later edits update the same Calendar event instead of creating a
// duplicate.
const REMINDER_MIN_BEFORE = 60;
const DEFAULT_LESSON_MIN = 45;
const CAL_WEEKDAYS = [CalendarApp.Weekday.SUNDAY, CalendarApp.Weekday.MONDAY, CalendarApp.Weekday.TUESDAY, CalendarApp.Weekday.WEDNESDAY, CalendarApp.Weekday.THURSDAY, CalendarApp.Weekday.FRIDAY, CalendarApp.Weekday.SATURDAY];

function handleCalendar(body) {
  try {
    const cal = CalendarApp.getDefaultCalendar();
    const durationMin = body.durationMin || DEFAULT_LESSON_MIN;

    // Cancel just one occurrence of a recurring series (used the first time
    // a weekly lesson is moved to a one-off date) — matching by title on
    // that day, since Apps Script has no direct "instance by date" lookup.
    if (body.action === 'cancelInstance') {
      const day = parseDateOnly(body.date);
      cal.getEventsForDay(day).filter(ev => ev.getTitle() === body.title).forEach(ev => ev.deleteEvent());
      return json({ ok: true });
    }

    if (body.kind === 'series') {
      if (body.action === 'delete') {
        if (body.calId) {
          const series = cal.getEventSeriesById(body.calId);
          if (series) series.deleteEventSeries();
        }
        return json({ ok: true });
      }
      const start = nextDateForWeekday(body.weekday, body.time);
      const end = new Date(start.getTime() + durationMin * 60000);
      const recurrence = CalendarApp.newRecurrence().addWeeklyRule().onlyOnWeekday(CAL_WEEKDAYS[Number(body.weekday)]);
      const series = cal.createEventSeries(body.title, start, end, recurrence);
      series.addPopupReminder(REMINDER_MIN_BEFORE);
      return json({ ok: true, calId: series.getId() });
    }

    // kind === 'single' (one-time lesson, or a rescheduled occurrence)
    if (body.action === 'delete') {
      if (body.calId) {
        const ev = cal.getEventById(body.calId);
        if (ev) ev.deleteEvent();
      }
      return json({ ok: true });
    }
    if (body.action === 'update' && body.calId) {
      const ev = cal.getEventById(body.calId);
      if (ev) {
        const start = combineDateTime(body.date, body.time);
        ev.setTime(start, new Date(start.getTime() + durationMin * 60000));
        return json({ ok: true, calId: body.calId });
      }
    }
    const start = combineDateTime(body.date, body.time);
    const ev = cal.createEvent(body.title, start, new Date(start.getTime() + durationMin * 60000));
    ev.removeAllReminders();
    ev.addPopupReminder(REMINDER_MIN_BEFORE);
    return json({ ok: true, calId: ev.getId() });
  } catch (err) {
    return json({ ok: false, error: String(err) });
  }
}

function combineDateTime(dateStr, timeStr) {
  const [y, m, d] = dateStr.split('-').map(Number);
  const [hh, mm] = (timeStr || '10:00').split(':').map(Number);
  return new Date(y, m - 1, d, hh, mm);
}

function parseDateOnly(dateStr) {
  const [y, m, d] = dateStr.split('-').map(Number);
  return new Date(y, m - 1, d);
}

function nextDateForWeekday(weekday, timeStr) {
  const today = new Date();
  const d = new Date(today.getFullYear(), today.getMonth(), today.getDate());
  d.setDate(d.getDate() + ((Number(weekday) - d.getDay() + 7) % 7));
  const [hh, mm] = (timeStr || '10:00').split(':').map(Number);
  d.setHours(hh, mm, 0, 0);
  return d;
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
