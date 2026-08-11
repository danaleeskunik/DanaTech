# UI kit — kunikHome

A private family-admin hub: seven life domains (insurance, savings, health, vehicles, documents, payment reminders, income) in one RTL app with a navy rail.

Recreated from `KunikHome/kunikHome.dc.html` — the project's own uncompiled source, including its exact domain list, field definitions, icon paths and accent colours.

## Screens

| File | Screen |
|---|---|
| `Overview.jsx` | סקירה כללית — seven domain tiles, income-vs-payments bar chart, upcoming-alerts list with WhatsApp reminders |
| `DomainView.jsx` | A domain's records: search, flat table, or month-grouped tables with a per-month total header (payments and income) |
| `RecordForm.jsx` | The add/edit modal, fields generated from the domain's own field list |
| `data.js` | Domain definitions and sample records |
| `index.html` | Click-through: rail → domain → add record |

## What is real and what is stand-in

Real: the seven domains, their icons, their accent/surface colour pairs, their field lists, the month-grouping behaviour for payments and income, the extensible "+" category select, and the export/import/sync footer.

Stand-in: all record content (policies, balances, plates, amounts) and the chart figures.

Not built: the Google Apps Script two-way sync and localStorage persistence.
