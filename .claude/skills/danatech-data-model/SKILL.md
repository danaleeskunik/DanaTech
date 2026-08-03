---
name: danatech-data-model
description: >
  Entity/data-model reference for DanaTech (Tech lessons/final) — the five
  core entities: students/clients, schedule, payments, lesson summaries
  (סיכומי שיעור), and lesson plans (מערכי שיעור). Load this for any task that
  touches these entities — adding/editing a field, changing a form, wiring a
  new report, or a business question about pricing/curriculum/scheduling
  that needs to know what data actually exists and where. This is a data
  reference only. For file-editing mechanics (how to actually change the
  bundled HTML) and business judgment, also load
  `.claude/agents/danatech-advisor.md` — don't duplicate its content here.
---

# DanaTech — data model reference

Business: Dana Kunik teaches smartphone/computer/AI/video-call skills to
elderly clients (גיל שלישי), one-on-one, in their homes.

## Stack (filled in 2026-08-01 — this replaces any generic "unconfirmed
stack" template; don't re-run framework detection, there is no framework)

- **No frontend framework, no build step, no `package.json`.** `index.html`,
  `teaching-toolkit.html`, `practice-sheets.html`, `flier.html` are Claude
  Artifact "Bundled Page" exports — a self-contained loader that unpacks
  embedded resources via JS on load. They are NOT hand-authored HTML; see
  the agent file for the exact edit procedure (JSON-string splice inside
  `<script type="__bundler/template">`). `home.html` is the one exception —
  plain hand-authored static HTML (landing page, added 2026-08-01).
- **Backend**: none in the traditional sense — a single Google Apps Script
  Web App ([google-sheets-sync.gs](../../google-sheets-sync.gs)), exposing
  `doGet`/`doPost` as a tiny REST layer over a Google Sheet.
- **Database**: the Google Sheet itself, three tabs — תלמידות (students),
  תשלומים (payments), סיכומי שיעור (notes). `localStorage` on whichever
  device Dana used is a local cache/mirror, not the source of truth.
- **Hosting**: none. Distributed as a ZIP Dana extracts and opens locally in
  Chrome (see README.txt) — GitHub (`danaleeskunik/DanaTech`, public,
  `main`) is source control only, not a deploy target.
- **Auth**: none — single-user local admin tool, no login.
- **Payments**: no payment provider integration. Payment records are
  manually entered paid/unpaid tracking, not a billing system.
- Language: Hebrew/RTL throughout, no i18n layer.

## The five entities

Schedule is **not** a separate stored entity — it's derived from each
student's `slots`. Don't go looking for a standalone "schedule" data
structure; there isn't one.

### 1. Student / client (`students` — תלמידות)

Lives in `index.html`'s app state (tab "תלמידים"), form defined around
`index.html`'s `mk('name', ...)` calls. Sheet columns, in order:

| field | type | notes |
|---|---|---|
| `id` | string | `uid()`-generated |
| `name` | string | full name |
| `phone` | string | kept as **text** in the Sheet deliberately — a numeric phone cell was the root cause of a crash fixed 2026-07-31 (leading-0 loss + `intakeIdFor` crash); never "fix" this back to a number type |
| `city` | string | |
| `level` | enum | `'מתחיל' \| 'בינוני' \| 'מתקדם'` |
| `slots` | array | `[{ day, time }]` — `day` is `0..5` indexing `DAYS = ['ראשון','שני','שלישי','רביעי','חמישי','שישי']` (Sun–Fri, no Saturday); `time` is `'HH:MM'`. **This array is the schedule.** Stored in the Sheet as a JSON string, parsed back on read. |
| `day`, `time` | number/string | denormalized copy of `slots[0]`, kept for legacy/simple lookups — always derived, never edit directly without also updating `slots` |
| `price` | number | ₪ per lesson, this student's rate (can differ per student) |
| `status` | enum | `'פעיל' \| 'הפסקה' \| 'סיים'` (active / paused / finished) |
| `contactName` | string | secondary contact (usually an adult child), added 2026-08-03 |
| `contactPhone` | string | phone for the secondary contact — also forced **text** in the Sheet (same reason as `phone`) |
| `referral` | enum | `'המלצה מלקוחה' \| 'משפחה/חברים' \| 'פייסבוק' \| 'פלייר' \| 'אחר'` — how this student found Dana |
| `birthday` | string | `YYYY-MM-DD`, forced **text** in the Sheet (same reason as `phone` — a bare date cell gets Sheets-auto-converted) |
| `currentLesson` | number | last lesson number covered from that student's level's curriculum (teaching-toolkit.html numbering) — purely a manual tracker, no structural link to the lesson-plan data itself |
| `notes` | string | freeform, e.g. accessibility notes like "קשה לה לראות טקסט קטן" |

The "כרטיס לקוחה" (client card) — a read-only modal opened via an info-icon
button on each student row in `index.html` — aggregates all of the above
plus lesson count (from `notes`) and total paid (from `payments`) into one
view. It's presentation only; it doesn't add new stored fields.

### 2. Payments (`payments` — תשלומים)

Tab "תשלומים" in `index.html`. One record per student per billing month
(not per lesson):

| field | type | notes |
|---|---|---|
| `id` | string | |
| `studentId` | string | FK → student.id |
| `month` | string | `type="month"` input, `YYYY-MM` |
| `lessons` | number | lesson count for that month |
| `price` | number | ₪ per lesson for that month's calc |
| `total` | number | Sheet-only derived column (`lessons × price`, not in the app form) |
| `paid` | bool/enum | app form uses `'yes'/'no'`; Sheet stores/reads as real boolean (`TRUE`/`FALSE`/`true`) |
| `date` | date | payment date |

### 3. Lesson summaries (`notes` — סיכומי שיעור)

Tab "סיכומי שיעור" in `index.html`. One record per lesson actually given:

| field | type | notes |
|---|---|---|
| `id` | string | |
| `studentId` | string | FK → student.id |
| `date` | date | |
| `summary` | string | "מה עשינו בשיעור" — free text |
| `homework` | string | "שיעורי בית" — what to practice before next lesson |
| `mood` | enum | `'good' \| 'ok' \| 'hard'` → label + colors via `MOOD` map (`good`='השיעור הלך טוב'/green, `ok`='בסדר, היו קשיים'/amber, `hard`='שיעור קשה'/red) |

### 4. Lesson plans (מערכי שיעור) — `teaching-toolkit.html`

Not in the Sheet — static curriculum content, hand-maintained in the
bundled template. Grouped by level (1/2/3 = מתחיל/בינוני/מתקדם, matching
student.level). One plan object per lesson:

```
{ badge: 'שיעור 7', title: '...', dur: '45 דקות', goal: '...', materials: '...',
  sections: [ { name: 'פתיחה', time: '10 דקות', kind: 'open'|'main'|'practice', steps: ['...'] }, ... ],
  hw: ['...', '...'] }
```

`badge` can span lessons (`'שיעורים 3–4'`) when one plan covers two
sessions. `sections[].kind` drives the visual styling per section type.

### 5. Practice sheets — `practice-sheets.html`

A **separate, independently-maintained mirror** of the same curriculum,
formatted for printing (client-facing, `Ctrl/Cmd+P`). Not derived from the
lesson-plan data above — when a lesson plan changes, the matching practice
sheet must be updated by hand in this second file too. One entry per
lesson:

```
{ n: 7, title: '...', sub: 'לאחר שיעור 6', tip: '...', tasks: ['...', '...'] }
```

## Reports tab (דוחות) — index.html

Added 2026-08-03. Aggregates `payments` by year (not a new stored entity):
year, income (sum of `total` where `paid`), lessons paid, and open due —
for annual tax-reporting purposes. Sits between "תשלומים" and "לוז" in the
tabs array.

## WhatsApp reminders — three independent instances, same pattern

All build a `https://wa.me/<972-phone>?text=<encoded message>` link from a
student's `phone` (never auto-sends — WhatsApp has no API for that from a
plain link, the click just opens a pre-filled chat):
1. **Lesson reminder** — home tab "השיעורים השבוע" and the תזכורות tab.
2. **Payment reminder** — new 2026-08-03, on unpaid rows in the תשלומים tab
   (`payGroups[].rows[].waHref`, gated on `!paid && phone`).
3. **Birthday reminder** — new 2026-08-03, home tab "ימי הולדת החודש"
   section, filters `students` by `birthday`'s month, tracks sent-state via
   the same `sentRem`/`markSent` mechanism as lesson reminders (keyed
   `'bday-' + id + '|' + year` so it naturally resets next year).

`flier.html` also got a manual-send panel (2026-08-03): a phone input +
send button, same wa.me pattern, but the message is generic ("מצרפת לך את
הפלייר שלי...") since **a link can't attach the image** — Dana still
attaches `flier.png` by hand in WhatsApp after the chat opens.

## Home navigation — home-fab

2026-08-03: the old in-header "בית" text-pill (in `index.html` and
`teaching-toolkit.html`) and the old floating icon+text `.home-pill` (in
`practice-sheets.html`/`flier.html`) were unified into one consistent
control: a fixed, icon-only, 52px circle top-left (`top:14px;left:14px`),
same on all four bundled pages, `href="home.html"`. Class name differs
per-file for historical reasons (`.home-fab` in index/teaching-toolkit,
`.home-pill` in practice-sheets/flier) but the CSS is identical — if
touching one, touch all four for consistency.

**Gotcha**: the fixed element must be positioned via `left`, never `right`
— `doc-page` (used in practice-sheets/flier/teaching-toolkit) establishes
its own containing block, so `right:14px` resolves against the print
layout's fixed width (~842px) rather than the actual viewport, pushing the
element off-screen on any viewport narrower than that (this bit the
flier.html send-panel on mobile before it was switched to `left:80px`).

Inside `index.html` there are now two different "home" concepts — don't
conflate them: the **הבית‑fab button** (top-left, navigates away to
`home.html`) vs. the **"ראשי" tab** (first tab in the in-app tab bar, an
internal dashboard view, tab id still `'home'` in code even though the
label was renamed from "בית" to "ראשי" on 2026-08-03 to stop the two from
reading as the same thing).

## Cross-entity notes

- Student ↔ payments ↔ notes join on `studentId` = student.`id`.
- Student ↔ lesson plan/practice sheet join is informal: by `level` only
  (no per-student assignment of specific lessons — Dana picks manually).
- `price` exists at two levels: per-student default (`student.price`) and
  per-payment-record snapshot (`payment.price`) — a payment doesn't
  automatically track if the student's rate later changes.

## Why one skill file, not four

The template this was based on suggested separate `payments-flow`,
`scheduling-rules`, `client-management`, `lesson-content` skills. That's
over-engineered for a solo-operator toolkit this size — schedule isn't even
a distinct entity, and the entities are small enough (5, all listed above)
to stay in one file. Don't split this up unless the project genuinely grows
data model complexity that no longer fits one page.

## Pair with `danatech-advisor`

This file answers "what data exists and where." For anything involving
*actually editing* `index.html`/`teaching-toolkit.html`/`practice-sheets.html`
(the bundled-file edit procedure, the dropdown pattern, the RTL padding
gotcha, mobile-scroll-fade, etc.) or business judgment (pricing, curriculum
sequencing, marketing copy), load
[`.claude/agents/danatech-advisor.md`](../../agents/danatech-advisor.md) —
that content isn't repeated here on purpose, to keep both files cheap to
load and avoid them drifting out of sync.
