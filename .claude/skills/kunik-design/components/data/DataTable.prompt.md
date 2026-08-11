The record table from kunikHome: grey header, hairline rows, wrapped in a 16px-radius card that scrolls horizontally.

\`\`\`jsx
<DataTable columns={[{key:'type',label:'סוג ביטוח'},{key:'company',label:'חברה'}]} rows={rows}
  renderActions={(r) => <IconButton icon="edit" size="sm" tone="sunken" title="עריכה" />} />
\`\`\`

Use 30px \`sm\` IconButtons here — the only place the system goes below 44px. Header cells are 800 grey, never navy.
