# Data model — Google Sheet + Calendar

Source of truth stays Google. One spreadsheet holds records; Google Calendar holds meetings. All ids are short strings the app generates (`s7`, `l6`, `sr3`); never reuse an id.

## Sheet tabs

### `students`

| Column | Type | Notes |
|---|---|---|
| `id` | string | `s1`… primary key |
| `name` | string | Hebrew display name |
| `phone` | string | `052-834-2210` — dashed, rendered LTR |
| `level` | 1–4 | maps to the level accent + name |
| `age` | int | shown as meta |
| `pay_kind` | enum | `monthly` / `per_session` / `punch_card` |
| `pay_label` | string | approved display string, e.g. `מנוי חודשי · ₪480` |
| `pay_amount` | int | ₪, integer |
| `punch_total`, `punch_left` | int | punch-card only |
| `active` | bool | inactive students drop out of counts and the schedule |
| `created_at` | ISO date | |

### `series` — the recurring rules

| Column | Type | Notes |
|---|---|---|
| `id` | string | `sr1`… |
| `student_id` | string | → `students.id` |
| `type` | enum | `weekly` / `twice` / `once` |
| `days` | string | comma-separated day indices, 0 = Sunday. `weekly` has one, `twice` has two |
| `day` | int | `once` only |
| `week_offset` | int | `once` only — weeks from the current Sunday |
| `time` | `HH:MM` | from the fixed list 08:00–19:00 |
| `active` | bool | |

Saturday (index 6) is never a valid day.

### `occurrence_overrides` — per-meeting deviations

| Column | Type | Notes |
|---|---|---|
| `key` | string | `{student_id}@{YYYY-MM-DD}` — the occurrence identity |
| `action` | enum | `cancelled` / `postponed` (+7 days) / `moved` / `retimed` |
| `moved_to` | ISO date | `moved` only |
| `time` | `HH:MM` | `retimed` only |
| `created_at` | ISO datetime | |

An override never edits a `series` row. This is the rule the whole model rests on.

### `series_pauses`

| Column | Type | Notes |
|---|---|---|
| `student_id` | string | |
| `from`, `to` | ISO date | `to` empty = open-ended |

Occurrences whose date falls in the range render `paused` and produce no calendar event.

### `extra_meetings` — one-off meetings with no series

`id`, `student_id`, `date` (ISO), `time`, `created_at`.

### `payments`

`id`, `student_id`, `period` (`2026-08`) or `occurrence_key`, `amount`, `status` (`due` / `paid`), `paid_at`, `meta` (approved display string such as `שני מפגשים · 11.8, 18.8`).

### `notes` — meeting summaries

`id`, `student_id`, `occurrence_key`, `date` (display `23.8`), `text`. One summary per meeting; the app shows the most recent one for the student on the home hero and the day card.

### `leads`

`id`, `name` (place), `contact` (person, role, phone as one approved string), `next_action`, `stage` (0–3 → לפנות / נשלחה הצעה / נקבעה פגישה / סגור), `updated_at`.

### `curriculum_progress`

`student_id`, `session_key` (`{level}.{n}`, or a custom-topic key), `covered` (bool), `picked_for` (ISO date or empty).

### `custom_topics`

`key`, `title`, `goal`. Render with `+` where the session number would be.

## Curriculum

Read-only, from `curriculum.json` in the repo (4 levels; each session has `n`, `title`, `goal`, `steps`, and callouts). It is content, not user data — version it in git, not in the Sheet.

## Calendar

One calendar, the operator's own. Each meeting is a single (non-recurring) event so per-occurrence edits stay simple.

- `summary`: `{student name} · {level name}`
- `start` / `end`: 60 minutes unless the series says otherwise, timezone `Asia/Jerusalem`
- `reminders.overrides`: `[{ method: 'popup', minutes: <reminderMinutes, default 60> }]`
- `extendedProperties.private`: `{ sid, seriesId, kind, occKey }` — the only reliable way back to the student; never match on name

## The occurrence materialiser

Pure function, unit-test it. Input: the visible week's Sunday, plus `series`, `series_pauses`, `extra_meetings`, `occurrence_overrides`. Output: occurrences sorted by date + time, each with `key`, `student`, `date`, `dayIdx`, `time`, `kind`, `status`.

Statuses: `active` · `cancelled` · `paused` · `postponed` (moved out of the visible week) · `hidden` (source slot of a move landing inside the visible week) · and the destination row with kind `moved`.

Cases the tests must cover:

1. Weekly series generates one occurrence per visible week.
2. Twice-weekly generates two, on both configured days.
3. A one-off appears only in the week its `week_offset` targets.
4. `cancelled` keeps the row visible but inert; no calendar event.
5. `postponed` inside the visible week → source `hidden`, destination `moved`, sorted into its new slot.
6. `postponed` out of the visible week → source shows `postponed`, no destination row.
7. `retimed` changes only that occurrence's time and its sort position.
8. A pause covering the date wins over series generation but not over an explicit `extra_meeting`.
9. An open-ended pause (`to` empty) suppresses everything from `from` onward.
10. Saturday never produces an occurrence.
