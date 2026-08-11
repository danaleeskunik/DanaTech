The navy bar every Kunik app opens with: mark, product name, tabs that sit into the canvas below.

\`\`\`jsx
<AppHeader title="ניהול העסק" subtitle="טק בגובה העיניים · דנה קוניק"
  tabs={[{id:'home',label:'בית'},{id:'students',label:'תלמידות'}]}
  activeTab="home" onTabChange={setTab} actions={<SyncStatus state="synced" />} />
\`\`\`

The active tab is filled with the page canvas colour and squared at the bottom so it merges into the content — that is the whole navigation metaphor. Inactive tabs are \`--blue-300\` on navy.
