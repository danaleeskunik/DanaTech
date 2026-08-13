The record table from kunikHome: grey header, hairline rows, wrapped in a 16px-radius card that scrolls horizontally.

\`\`\`jsx
<DataTable columns={[{key:'type',label:'סוג ביטוח'},{key:'company',label:'חברה'}]} rows={rows}
  renderActions={(r) => <IconButton icon="edit" size="sm" tone="sunken" title="עריכה" />} />
\`\`\`

Use 30px \`sm\` IconButtons here — the only place the system goes below 44px. Header cells are 800 grey, never navy.

**Columns are sortable and fixed-width (added 2026-08-12).** `table-layout:fixed` with an explicit `width` in px on every `<th>` (never `table-layout:auto` — it silently ignores per-cell widths once columns compete for space; see readme.md's Engineering conventions). Clicking a header toggles ascending/descending on that column and shows a trailing arrow (▲/▼) appended to the label; a second click on a different column resets to ascending there. Sort by the row's underlying typed value (parse dates/numbers), not the formatted display string. If the header also carries a resize handle, stop the handle's click from bubbling into the sort handler.
