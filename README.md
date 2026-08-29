# Handoff: DanaTech — "טק בגובה העיניים" business app

## בקצרה (עברית)

התיקייה הזאת היא חבילת המימוש של האפליקציה שעיצבנו. היא מכילה:

- `README.md` (הקובץ הזה) — מפרט מלא: מסכים, מצבים, מודל נתונים, טוקנים.
- `CLAUDE.md` — הנחיות עבודה ל-Claude Code בריפו `danaleeskunik/DanaTech`.
- `SCREENS.md` — רשימת המסכים והמצבים, מסך אחרי מסך.
- `DATA_MODEL.md` — טבלאות ושדות (Google Sheet + Calendar).
- קבצי העיצוב עצמם (HTML) — אלה **הפניות עיצוביות**, לא קוד לייצור.

החלטות שנקבעו: הכל בגרסה הראשונה חוץ מדפי תרגול להדפסה; נתונים נשארים ב-Google Sheet + Calendar; נייד ודסקטופ; התחברות עם Google, ובנוסף כניסה מהירה בזיהוי פנים (ראי הערה ב-Auth).

---

## Overview

A single-operator business app for Dana Kunik, who teaches technology to older adults in Ramat HaSharon. It replaces a set of static HTML pages with one Hebrew, RTL, mobile-first app that runs her practice: today's meetings, the weekly schedule, students, payments, leads, and the lesson-plan library.

The design's central idea is the **series-vs-occurrence model**: a student has a recurring rule (weekly / twice weekly / one-off) that *generates* meetings. Cancelling, postponing, moving or re-timing a single meeting never edits the rule; pausing a series suspends its meetings over a date range.

## About the design files

The HTML files in this bundle are **design references created in HTML** — prototypes that show intended look and behaviour. They are not production code to copy. The task is to **recreate these designs in the target codebase's environment** (`danaleeskunik/DanaTech`) using its established patterns. If that repo has no app framework yet, choose one and say so before building: the recommendation is React + Vite + TypeScript, RTL by default, no CSS framework — the design system is small enough to express as CSS custom properties plus plain CSS modules.

State in the prototype lives in `localStorage` under `dk_app_v1`. That is a stand-in for the real backend and must be replaced.

## Fidelity

**High fidelity.** Colours, typography, spacing, radii, shadows, copy and interactions are final and come from the Kunik Design System. Recreate the UI faithfully. Every Hebrew string in the prototypes is approved copy — carry it over verbatim, do not re-write it.

Type is Rubik (400–800) for everything, Heebo 900 for numerals (times, money, phone numbers, sheet numbers). Font sizes carry half-pixels on purpose (13.5, 14.5, 15.5) — do not round them to a scale.

## Platform

Mobile and desktop from the same codebase, mobile-first. The prototype's breakpoints are implicit in `grid-template-columns: repeat(auto-fit, minmax(300px, 1fr))` and `flex-wrap` — reproduce that behaviour rather than fixed media queries where possible. Content max-widths: 1240px (app shell), 1040px (lesson plans), 760px (marketing/home copy), gutter `clamp(14px, 4vw, 24px)`.

The header is sticky; the active tab is filled with the canvas colour `#F4F7FB` and squared at the bottom so it merges into the page. Long tab strips fade at both ends with a linear-gradient mask. Tables scroll horizontally inside their card with a sticky action column.

## Auth

**Primary: Google sign-in (OAuth 2.0).** It is required anyway — the app reads and writes the user's own Google Sheet and Calendar, so the same consent covers both. Scopes: `openid email profile`, `https://www.googleapis.com/auth/spreadsheets`, `https://www.googleapis.com/auth/calendar.events`. Single-user app: after sign-in, check the account email against an allowlist and refuse anything else.

**Face recognition login (requested).** A web app cannot use iOS Face ID directly, and a camera-based face-match built from scratch is not something to ship for a login. The correct implementation of the intent — "open the app with my face, no password" — is a **passkey (WebAuthn platform authenticator)**:

1. First sign-in uses Google.
2. The app then offers "היכנסי בפעם הבאה עם זיהוי פנים" and registers a passkey (`residentKey: required`, `userVerification: required`).
3. Subsequent launches call `navigator.credentials.get()`; iOS/Android prompts with Face ID or fingerprint, and the app exchanges the assertion for a session.

This gives a real Face ID prompt, works on iPhone and on desktop (Touch ID / Windows Hello), and needs no camera permission or biometric data of our own. Google refresh tokens stay server-side and are unlocked by the passkey session. If the user specifically wants a camera-based face check instead, raise it before building — it is a materially different, weaker security story.

## Data

**Source of truth stays Google: one Sheet for records, Google Calendar for meetings.** See `DATA_MODEL.md` for the exact tabs and columns. Rules:

- Calendar is authoritative for *when* a meeting is; the Sheet is authoritative for students, payments, leads, notes and series rules.
- Every meeting the app creates carries an `extendedProperties.private` payload (`sid`, `seriesId`, `kind`) so the app can map calendar events back to students without name matching.
- Series rules live in the Sheet, not as calendar recurrence, because the app needs to reason about them (pause, per-occurrence override). The app materialises occurrences for the visible week and reconciles them against calendar events.
- Reminders: a 60-minute reminder before each meeting, set as the event's default reminder (`reminders.overrides = [{ method: 'popup', minutes: 60 }]`). The reminder minutes are configurable (15–180, step 15).
- Writes are optimistic with a visible sync state — see `SyncStatus` in the design ("מסונכרן ל-Google" + last-sync sub-line). Never show a spinner-only state; the design has no skeletons.
- Because Sheets/Calendar APIs need a client secret and token refresh, a thin server (or a serverless function) is required. Do not put the OAuth client secret in the browser.

## Screens and behaviour

See `SCREENS.md` — one section per screen with layout, components, states and empty states.

## Design tokens

Colours:

| Token | Value | Use |
|---|---|---|
| navy | `#0F2E52` | header, hero, sidebar, icon circles, print mark |
| action blue | `#006EE5` | anything clickable |
| hover / pressed | `#0055B2` / `#003C80` | buttons darken, never lighten |
| pale blue | `#3D9AFF`, `#9CC7F5` | logo bars, secondary text on navy |
| on-navy body | `#D7E6F8`; tabs `#C9DEF7` | copy over navy |
| green | `#00A563` (dark `#00764A`, bg `#EAF7F1`) | done, money in |
| amber | `#E1631B` (dark `#B84E14`, bg `#FDEEE6`) | tips, warnings, leads |
| red | `#BE0000` | overdue, destructive |
| WhatsApp | `#25D366` bg, `#0A2E17` ink | WhatsApp actions only |
| canvas | `#F4F7FB` | page background |
| card | `#FFFFFF` | cards |
| field | `#F7F9FC` | inputs, inline note panels |
| ink | `#121213` / `#4A4D50` / `#6A6D70` / `#8D9296` | primary → quaternary text |
| borders | `#E4EAF1` cards · `#DFE2E4` fields (2px) · `#F0F3F7` table rows · `#DDE3EB` section rules · dashed `#C3D4E8` empty lists |
| level accents | 1 `#006EE5`/`#EAF2FD` · 2 `#00A563`/`#EAF7F1` · 3 `#0F2E52`/`#EAEEF4` · 4 `#E1631B`/`#FDEEE6` | lesson levels |
| on-navy fills | white 7–8% fills, 22% borders, 12% dividers | header controls, selected rail |
| scrim | `rgba(15,25,40,.45)` | modal backdrop |

Spacing actually used (not a 4px grid): 2, 7, 8, 9, 10, 11, 13, 14, 16, 18, 22, 26, 36.

Radii: 8 chips · 9–10 header controls and fields · 12 rows · 14 content cards · 16 print panels · 18 home cards · 20 modals · 999 pills · 50% avatars. Nothing is square.

Elevation — two levels only: `0 2px 8px rgba(15,46,82,.06)` resting, `0 14px 30px rgba(15,46,82,.14)` on a navigating card's hover lift (translateY(-3px)).

Motion: a single `150ms ease`, on exactly two things — the card lift and the accordion chevron's 180° rotation. No page transitions, no bounces, no skeletons, no blur anywhere.

Tap targets: 44px minimum, 52px home pill, 46px form fields, 16px minimum body text on instructional surfaces. The only exception is the 30px icon button inside dense data tables.

## Iconography

One hand-authored line set: 24×24 viewBox, `fill="none"`, `stroke="currentColor"`, round caps and joins. Stroke weight by role: 1.6 pictorial, 1.8–1.9 UI glyphs, 2.0–2.2 checks/chevrons/plus. Sizes in use: 13–15 in buttons and table actions, 17–21 in list rows and nav, 24–26 in card tiles. Colour always inherits via `currentColor` — icons never carry their own hue. The WhatsApp glyph is the one filled icon, always `#0A2E17` on `#25D366`. The 39 SVGs live in the design system at `assets/icons/`; copy them into the repo rather than substituting a CDN icon library. No emoji. No illustration.

## Assets

- `assets/icons/*.svg` (39) — from the Kunik Design System.
- `assets/logo.svg`, `assets/logo-bars.svg` — app icon and bare three-bar mark. There is no wordmark; the brand name is set in Rubik 800.
- `assets/dana-portrait.png` — the only photograph in the brand. Circle-cropped, 5px white ring, eyes at 18% from the top.
- `fonts/Rubik.ttf`, `fonts/Heebo.ttf` — shipped with the original source; self-host, do not load from Google Fonts.

## Files in this bundle

| File | What it is |
|---|---|
| `Kunik App.dc.html` | The main design: home, personal area (היום · לו״ז · תלמידים · תשלומים · לידים), lesson plans, structure proposal |
| `Kunik App on iPhone.dc.html` | The same app inside a 402×874 iPhone frame — the mobile reference |
| `Teaching Toolkit Proposal.dc.html` | The lesson-plan / practice-sheet proposal |
| `curriculum.json` | The real curriculum: 4 levels, sessions with goals and steps |
| `ios-frame.jsx`, `support.js` | Support files so the HTML opens standalone. Not part of the product |

Open the HTML files directly in a browser to interact with them.


---

## איך מעלים את זה ל-Claude Code (עברית)

1. הורידי את התיקייה `design_handoff_danatech_app` (כפתור ההורדה בצ׳אט) ופתחי את ה-zip.
2. שכפלי את הריפו למחשב: `git clone https://github.com/danaleeskunik/DanaTech.git`
3. העתיקי את כל תוכן התיקייה שהורדת אל תוך הריפו, לתיקייה בשם `design/`.
4. העתיקי את `design/CLAUDE.md` לשורש הריפו (שם Claude Code קורא אותו אוטומטית).
5. מהתיקייה של הריפו, הריצי `claude` בטרמינל וכתבי לו:

   ```
   קרא את CLAUDE.md ואת design/README.md, design/SCREENS.md, design/DATA_MODEL.md.
   סקור את הריפו ותגיד לי מה יש בו היום ומה אתה מציע לבנות ראשון. אל תתחיל לכתוב קוד לפני שאישרתי.
   ```

6. אחרי שהוא מציג תוכנית — אישור שלב אחרי שלב. אל תתני לו לבנות הכל בבת אחת.

כדי לראות את קבצי העיצוב במחשב, פשוט פתחי כל קובץ `.dc.html` בדפדפן — הם עובדים בלי התקנה (התיקייה `_ds` ו-`support.js` חייבות להישאר לידם).


## Getting this into Claude Code

1. Download and unzip `design_handoff_danatech_app`.
2. Clone the repo: `git clone https://github.com/danaleeskunik/DanaTech.git` and `cd DanaTech`.
3. Copy the unzipped contents into the repo as a `design/` folder.
4. Move `design/CLAUDE.md` to the repo root — Claude Code reads it automatically from there.
5. Run `claude` in the repo and paste:

   ```
   Read CLAUDE.md, then design/README.md, design/SCREENS.md and design/DATA_MODEL.md.
   Survey this repo and tell me what already exists and what you propose to build first.
   Do not write any code until I approve the plan.
   ```

6. Approve one step at a time. Suggested first steps: framework decision, design tokens and icons, core components, Google auth, the occurrence materialiser with its unit tests, then screens.

To view the design files locally, open any `.dc.html` in a browser — no install needed, as long as `_ds/` and `support.js` sit next to them.
