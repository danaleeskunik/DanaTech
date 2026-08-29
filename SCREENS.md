# Screens and states

Nav is four top-level tabs in the navy header: **בית · האזור האישי · מערכי שיעור · המבנה החדש**. The active tab is filled `#F4F7FB` with `#0F2E52` ink and squared at the bottom; inactive tabs are `rgba(255,255,255,.08)` with `#C9DEF7` ink. Header is sticky, `z-index` above content.

Header right side (RTL leading edge) carries the logo at 28px, the brand name "טק בגובה העיניים" at 20px/800, and a sub-line. Header trailing side carries two 47px controls: the reminder chip ("התראה 60 דק׳ לפני", bell icon 16px) and `SyncStatus` ("מסונכרן ל-Google" + last-sync sub-line).

---

## 1. בית — Home

**Purpose:** land, see the next meeting, choose a door.

**Layout:** navy hero (dot texture, white at 5–14%, 22–26px spacing) containing the next-meeting block, then two `DomainCard` doors in `repeat(auto-fit, minmax(300px, 1fr))`, then four `StatCard`s in `repeat(auto-fit, minmax(220px, 1fr))`.

**Next meeting block:** student name, level name (`רמה 1 · סמארטפון` etc.), age, kind label (`קבוע · שבועי` / `קבוע · פעמיים בשבוע` / `חד פעמי` / `נדחה לכאן`), and the when-line `יום שני 31.8 בשעה 10:00`. Below it, a translucent note panel (`rgba(255,255,255,.07)`, 1px `rgba(255,255,255,.22)`, radius 12, document icon 17px in `#9CC7F5`) showing `בפעם הקודמת (23.8): …` or `אין סיכום מהמפגש הקודם.`

**Actions:** `מערך המפגש הזה` (primary, book icon) · `הודעה לתלמיד/ה` (WhatsApp variant, opens `wa.me` with a pre-filled Hebrew message) · `הלו״ז השבועי` (onNavy, calendar icon).

**Today's remaining meetings:** a list under the hero; each row has name, time, level, plus small `מערך המפגש` and `הודעה` buttons.

**Doors:** `האזור האישי` (bars icon, `#0F2E52` on `#EAEEF4`, count = active students) · `מערכי שיעור` (book icon, `#006EE5` on `#EAF2FD`, count = sessions in the curriculum).

**Stats:** מפגשים השבוע · תלמידים פעילים · ממתין לתשלום (`#BE0000`) · לידים פתוחים (`#E1631B`). Figures in Heebo 900 with negative tracking.

**States:** no upcoming meeting → the next-meeting block reads `אין שיעור קרוב · הלו״ז ריק` and the actions collapse to `הלו״ז השבועי`. No meetings today → dashed `#C3D4E8` row, calendar icon, "אין מפגשים היום" + a `פתחי את הלו״ז` button.

---

## 2. האזור האישי — Personal area

A sub-tab strip of `LevelPill`s: **היום · לו״ז · תלמידים · תשלומים · לידים**. The לידים tab is behind a flag (`showLeads`) — ship it on.

### 2a. היום

Two columns on desktop (`minmax(0,1fr)` content + a narrower rail), one column on mobile.

Left: `SectionLabel` (accent `#006EE5`) with the day heading, then one card per meeting. Each meeting card: name (17px/800), time + level meta, a `Badge` for status, a `סיכום` / `עריכת סיכום` secondary button, and a WhatsApp `IconButton` (44px, success tone). Below, the previous-summary panel on `#F7F9FC` with a 16px document icon.

**Note editor state:** the summary button opens an inline panel — a textarea (placeholder "לדוגמה: תרגלנו שליחת תמונה בוואטסאפ…"), `שמרי` (primary, check icon) and `ביטול` (quiet). Saving writes the note with today's date and closes the panel.

Then `SectionLabel` (accent `#BE0000`) **דורש טיפול** — rows with a 38px tinted icon square, title, meta, and one action button. Sources: overdue payments, leads with no next action, meetings with no summary.

**Empty:** `אין מפגשים ביום הזה. אפשר לקבוע מפגש חדש בלשונית הלו״ז.`

Right rail: **התראות** card (row "שעה לפני כל מפגש" + green `פעיל` badge, hairline `#F0F3F7`, explanatory copy about the reminder coming from Google Calendar, and a quiet `איך זה מוגדר` button) and **מה בשבוע הזה** card (per-day counts).

### 2b. לו״ז — Weekly schedule

Week navigation (previous / current / next, week label with dates), then six day columns (ראשון–שישי; Saturday never appears). Each occurrence chip shows time (Heebo), name, and kind.

**Per-occurrence actions** — these never touch the series rule:
- `בטלי מפגש` → status `cancelled`, chip greys, calendar event deleted.
- `דחי בשבוע` → the occurrence moves +7 days; if the target week is the visible one it appears there as kind `נדחה לכאן` and the original slot is hidden.
- move to another day/time → same as above with an explicit date.
- change time only → overrides the time for that occurrence.
- Each destructive action has a confirm state (`confirmKey`) inline in the chip, not a modal.

**Series actions:** `השהי סדרה` with a from/to date range → occurrences in range render `paused`; `הוסיפי מפגש` opens the new-meeting form (student, day, second day for twice-weekly, time from a fixed list 08:00–19:00, repetition weekly / twice / one-off).

**States per occurrence:** active · cancelled · postponed · paused · hidden (source slot of a move) · moved (destination).

**Empty:** a dashed panel per empty day, and for a fully empty week "אין שיעורים קבועים. הוסיפי יום ושעה לתלמיד/ה בכרטיס שלה."

### 2c. תלמידים

Card per student (or a `DataTable` on wide screens with a sticky action column): name, phone (LTR, Heebo), level pill, age, payment arrangement, the series rule in words, and last summary. Actions: WhatsApp, edit series, open lesson plan for their level. Search field filters by name (`q`).

### 2d. תשלומים

Rows: student, arrangement (`מנוי חודשי · ₪480` / `לפי שיעור · ₪120` / `כרטיסייה · 5 מתוך 8 נותרו`), amount due with its meta ("שני מפגשים · 11.8, 18.8"), and a `סמני כשולם` action that moves the row to a paid state (green). Overdue amounts in `#BE0000`. Totals: paid this month, outstanding.

**Empty:** "אין תשלומים ממתינים."

### 2e. לידים

One row per lead: place name, contact line (name, role, phone LTR), next action, and a stage chip cycling through **לפנות → נשלחה הצעה → נקבעה פגישה → סגור** (neutral `#F2F5F9`/`#6A6D70` → blue `#EAF2FD`/`#006EE5` → orange `#FDEEE6`/`#B84E14` → green `#EAF7F1`/`#00764A`). Leads with no contact person show "טרם אותר איש קשר" and surface in דורש טיפול.

---

## 3. מערכי שיעור — Lesson plans

Content max-width 1040px. Four level pills: **רמה 1 · סמארטפון** (`#006EE5`) · **רמה 2 · טלפון מתקדם** (`#00A563`) · **רמה 3 · מחשב** (`#0F2E52`) · **רמה 4 · בינה מלאכותית** (`#E1631B`). Sessions come from `curriculum.json`: number, title, goal, steps.

Each session is an accordion card — chevron rotates 180° over 150ms, nothing else animates. Open state shows the goal, the numbered steps (one instruction per line, never two verbs), and the teaching callouts: a tinted block with a 4px bar on the **trailing (right) edge** — amber for tips, deeper amber for warnings, blue for information. This callout pattern belongs to the teaching voice and appears nowhere else in the app.

Per session: a `נלמד` toggle (`covered`) and a "choose for next meeting" action (`pick`) that links the session to a student. `+ נושא משלך` adds a custom topic (title + optional goal) that renders alongside the curriculum with a `+` in place of a number.

**Empty:** curriculum not loaded → an `EmptyState`, not a spinner.

---

## 4. המבנה החדש — Structure proposal

A read-only explainer of the new model (series vs occurrence, the Google sync, the 60-minute reminder). Keep it in v1 as in-app documentation, or drop it into the repo's docs — the developer should ask which. It is not a functional screen.
