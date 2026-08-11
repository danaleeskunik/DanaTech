A 46px-tall field on a grey fill with a 2px border — deliberately larger than a normal web input because the readers are older.

\`\`\`jsx
<TextField label="שם התלמיד/ה" placeholder="מרים כהן" />
<TextField label="טלפון" type="tel" dir="ltr" placeholder="050-0000000" />
\`\`\`

Body size is 16px minimum, never 14. Phone numbers, emails and dates get \`dir="ltr"\` inside the RTL form.
