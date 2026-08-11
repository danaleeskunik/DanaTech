Every surface in the system is this card: white, one hairline border, and a shadow so faint it reads as depth rather than drop.

\`\`\`jsx
<Card size="lg" interactive href="teaching-toolkit.html">
  <h3 style={{ margin: 0, font: 'var(--type-card-title)' }}>ערכת ההוראה</h3>
</Card>
\`\`\`

Never stack a heavier shadow at rest — the only stronger shadow is the hover state (\`--shadow-card-hover\`, with \`transform: translateY(-3px)\`), and only on cards that navigate somewhere.
