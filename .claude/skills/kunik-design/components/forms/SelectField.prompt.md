A select matched to TextField's height and fill, with a chevron on the leading edge.

\`\`\`jsx
<SelectField label="קטגוריה" options={['ביטוח', 'רפואה', 'רכב']} onAdd={() => {}} />
\`\`\`

The optional square "+" beside the select is a real pattern from kunikHome: categories are user-extensible, so the field never traps someone in a fixed list.
