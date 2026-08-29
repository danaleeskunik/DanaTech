# CLAUDE.md — DanaTech implementation

Repo: `danaleeskunik/DanaTech` (branch `main`). Read `README.md` in this folder first — it is the spec. This file is how to work.

## The job

Turn the HTML design references in this folder into the real app. Hebrew, RTL, mobile-first, Google-backed. Scope for v1 (all of it): home, personal area (היום · לו״ז · תלמידים · תשלומים · לידים), and the lesson-plan library. Printable practice sheets are explicitly **out** of v1.

## Ground rules

1. **Copy is approved. Do not rewrite Hebrew strings.** Lift them verbatim from the prototypes, including the slash forms (`התלמיד/ה`) and the feminine second person. If a new string is genuinely needed, write it in the same voice — warm, direct, second person, reassurance before instruction — and flag it in the PR.
2. **Do not invent visual values.** Every colour, size, radius and shadow is in the README's token table or in the prototype markup. If something is missing, ask rather than guess.
3. **RTL is the default, not a mode.** `dir="rtl"` on the document; use logical properties (`margin-inline-start`, `inset-inline-end`) throughout. Phone numbers, times and money render LTR inside the RTL flow — wrap them, don't fight the layout.
4. **Series vs occurrence is the core model.** Get it right before any UI. A per-meeting action must never mutate a series rule. See `DATA_MODEL.md`.
5. **No new dependencies without asking.** No CSS framework, no icon library, no date library heavier than needed (`Intl.DateTimeFormat` with `he-IL` covers formatting).
6. **Accessibility is the product.** The users are 70–90 years old. 44px minimum targets, 16px minimum instructional text, visible focus rings, real `<button>`/`<a>` elements, labels tied to fields, and no interaction that depends on hover.

## Suggested order

1. Repo survey + framework decision (report before building if the repo has no app scaffold).
2. Design tokens as CSS custom properties + `@font-face` for self-hosted Rubik/Heebo. Copy the 39 icons in as inline React components.
3. Core primitives, in this order: `Button`, `IconButton`, `Card`, `Badge`, `Callout`, `SectionLabel`, `StatCard`, `LevelPill`, `ListRow`, `DateChip`, `EmptyState`, `SyncStatus`, `AppHeader`, `HomeFab`, form fields.
4. Auth: Google OAuth end to end, allowlisted account, server-side token storage. Then passkey enrolment for the Face ID launch.
5. Data layer: Sheet read/write + Calendar read/write, with the occurrence materialiser and the override/pause reconciliation. Unit-test the materialiser against the cases in `DATA_MODEL.md`.
6. Screens, in this order: היום → לו״ז → תלמידים → תשלומים → לידים → מערכי שיעור → בית.
7. Sync states, optimistic writes, offline read from cache.

## Definition of done for each screen

- Matches the prototype at 402px wide and at 1240px.
- Every state in `SCREENS.md` is reachable, including the empty state, and every empty state names the next action.
- No console errors, no layout shift on load, keyboard-operable.
- Real data from the Sheet/Calendar, no mock arrays left in the bundle.
