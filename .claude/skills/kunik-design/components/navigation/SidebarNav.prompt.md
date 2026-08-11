The 250px navy rail used by kunikHome — the alternative to AppHeader when a product has many equal sections rather than a few tabs.

\`\`\`jsx
<SidebarNav title="kunikHome" subtitle="ביטוחים, כספים ובריאות במקום אחד"
  items={[{id:'insurance',label:'ביטוחים',icon:'shield'}]} activeId="insurance" onSelect={go} />
\`\`\`

Selected items get a 8%-white fill and a white icon; unselected icons are \`--blue-300\`. Never both a sidebar and a tab header in the same product.
