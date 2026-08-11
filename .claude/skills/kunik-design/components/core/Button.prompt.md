The one button. Pill-shaped, heavy weight, no shadow, no gradient.

\`\`\`jsx
<Button icon="plus">הוספת רשומה</Button>
<Button variant="whatsapp" icon="whatsapp" size="lg">כתבו לי</Button>
<Button variant="secondary" size="sm" icon="chevron-right">חזרה לרשימה</Button>
\`\`\`

Pass \`color\` to tint the primary fill with a domain accent (\`var(--domain-payments)\`) — that is how the source colours the add button per section. \`variant="whatsapp"\` is reserved for actions that literally open WhatsApp; it uses white icon/text on the brand green (changed 2026-08-11 — was dark-green ink before, Dana's explicit call to match the real WhatsApp brand convention).
