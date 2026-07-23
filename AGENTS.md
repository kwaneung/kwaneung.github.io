# AGENTS.md

## Cursor Cloud specific instructions

This repo is a **zero-build static portfolio site** (vanilla HTML/CSS/JS). There is no `package.json`, no lockfile, no bundler, no backend, no database, and no environment variables/secrets. See `README.md` for the project overview and file layout.

### Running the site (dev)
- Serve the repo root as static files. The README-documented command is `npx serve .` (Node is preinstalled). Add `-l 3000` to pin the port, e.g. `npx serve . -l 3000`.
- Python fallback (no network/npm needed): `python3 -m http.server 3000`.
- Entry point is `index.html`; case studies live under `work/<name>/index.html` (`mykt`, `kds`, `woori-card`, `solbiz`, `fund-direct`).

### Build / lint / test
- There is **no build step**, and there are **no lint or test suites** configured in this repo. Do not look for `npm run build/lint/test`.

### Notes / gotchas
- `js/main.js` gates scroll-reveal animations on `IntersectionObserver` and respects `prefers-reduced-motion`; the mobile nav toggle only activates at viewport width `<= 760px`.
- Fonts (Google Fonts, Pretendard via jsDelivr) load from CDNs. If external network is blocked the page still works via fallback fonts — this is expected, not a failure.
- Deployment is GitHub Pages from `main` at repo root (`.nojekyll` disables Jekyll). No deploy action is needed for local development.
