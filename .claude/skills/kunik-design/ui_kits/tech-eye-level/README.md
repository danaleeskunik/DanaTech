# UI kit — טק בגובה העיניים (Tech at Eye Level)

Dana Kunik's teaching business: five surfaces, one navy-and-white language, all RTL Hebrew.

Recreated from the source project's own code (`final/home.html` plus the unpacked `.dc.html` sources behind `final/index.html`, `teaching-toolkit.html`, `practice-sheets.html` and `flier.html`), not from screenshots.

## Screens

| File | Screen | Notes |
|---|---|---|
| `HomeHub.jsx` | The entry hub | Navy dotted hero, two large decision cards, secondary material links, this week's lessons |
| `BusinessApp.jsx` | ניהול העסק | Four tabs: overview with stats and lesson rows, students table, payments, weekly schedule |
| `TeachingToolkit.jsx` | ערכת ההוראה | Level pills, expandable lesson plans (goal → phases → homework), interactive practice sheets, lesson summary form |
| `PrintDocs.jsx` | Print surfaces | `PracticeSheet` (A4 homework sheet with pen-tickable boxes) and `Flier` (A4 marketing flier with the real portrait) |
| `index.html` | Click-through | Hub → any surface, home pill back |

## What is real and what is stand-in

Real: every colour, radius, shadow, font size, icon path, and the portrait. The lesson-plan structure, practice-task wording, level naming and the phone number are lifted from the source.

Stand-in: student names, amounts, dates and the sync timestamps. The source ships with empty local storage.

Not built: the Google Sheets sync mechanics and the JSON backup/restore flow behind `SyncStatus` — the status control is present, the transport is not.
