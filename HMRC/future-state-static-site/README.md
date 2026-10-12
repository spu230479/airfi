# HMRC Adaptive Identity Protection — static prototype

Static HTML/CSS/JS version of the Future-State prototype. No Node, npm or server needed.

## Running it

- **Locally:** open `index.html` in a browser (double-click works).
- **Hosted:** upload the whole folder to any static host (GitHub Pages, Netlify, S3, SharePoint site assets, etc.).

## How it works

| File | What it is |
| --- | --- |
| `index.html` | Single page shell. |
| `assets/main.css` | Compiled GOV.UK + HMRC + prototype styles (unchanged from the original build). |
| `assets/js/app.js` | Client-side port of `server.js`: every route, redirect, persona branch and the demo state (trusted devices, payment methods, suspension, repayment amounts). |
| `assets/js/templates.js` | The original Nunjucks views plus the GOV.UK/HMRC component macros, precompiled. |
| `assets/js/nunjucks-slim.min.js` | Nunjucks runtime that renders those templates in the browser. |
| `assets/js/govuk-frontend.min.js` | GOV.UK Frontend component JS. |
| `assets/images`, `assets/govuk` | Phone mock-ups, fonts, icons. |

- Pages use hash URLs, e.g. `index.html#/dashboard`, so links, Back/Forward and refresh all work on any host.
- Demo state is kept in `sessionStorage` (per tab). Going back to the start page (`#/`) resets it, as before.
- Forms still "POST" — `app.js` intercepts them and runs the same handler logic the Express server had.

## Changing page content

Edit the logic/routes directly in `assets/js/app.js`.

Page copy lives in the original `.njk` views, which are precompiled into `templates.js`. To change copy,
edit the views in the original project and regenerate:

```
node tools/build-templates.js "/path/to/Future-State Prototype" assets/js/templates.js
```

(requires the original project's `node_modules`).
