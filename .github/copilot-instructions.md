# Microsoft Security Latest Feed - instructions for Copilot coding agent

## What this repo is
A weekly, data-driven security intelligence dashboard for Microsoft security news, published on GitHub Pages from /docs. Research Bots write data/<week>.json and research/<week>/README.md; you build and maintain the site that renders them. Humans approve each task via the "approved" label.

## Hard constraints
- Static site only: plain HTML, CSS and vanilla JS in /docs. No custom build step, no npm, no frameworks that need bundling. Use GitHub Pages' built-in Jekyll metadata only for the asset cache-buster and build stamp. A single third-party library via CDN is allowed if needed (e.g. a chart library). Must work when opened from https://shalabh789.github.io/MicrosoftSecurityLatestFeed/.
- The site reads data/index.json (list of weeks) and data/<week>.json at runtime via fetch, relative paths. Never hard-code a week's content into HTML.
- Never modify anything under research/ or data/. If data is malformed, open an issue labelled fix describing the problem instead.
- Keep the PR small and self-contained; include a short CHANGELOG entry in docs/CHANGELOG.md.
- Accessibility: keyboard-navigable slicers, visible focus, colour contrast AA, alt text on every screenshot.
- - Finish within 30 minutes. Commit early. Do not install or run browsers or Playwright; check your work by reading the code and the JSON. The Auditor bot verifies the live page after merge.

## Dashboard spec
The static `/docs` app loads `data/index.json`, fetches only the selected week's JSON, and caches loaded weeks in memory. Do not hard-code weekly content. The header has the week selector, last-updated date, search (title, summary, CVE ID, and product), upcoming key-date chips, dark-mode toggle, and jump links. Search and the nine type chips (Video, X, Threat, CVE, Blog, Learn, Reddit, Change, Roadmap) filter feed sections together and are reflected in the URL hash. Learn product family/status/date filters remain limited to By product; CVE filters remain limited to the CVE tracker.

Render sections in this order: summary tiles; For security leaders; Themes of the week; CVE tracker; Retiring and changing soon; Coming soon; Videos; From X; Threat intelligence; Blogs; By product; Community. Hide the leadership, changes, roadmap, and key-date areas when their data is empty. The leadership bullets link to the first matching item. Changes include every `change` item and every item with `change_date`, dated soonest-first with past dates hidden and undated items grouped separately. Roadmap items are grouped by product and show status, rollout, official link, summary, and Roadmap/MC ID; groups over five entries have a show-all toggle.

Show the eight newest videos and eight most-engaged X posts by default with show-all/show-fewer toggles. By product includes a GA/Preview strip counting Learn items under each product's latest heading; selecting a product filters only those panels. CVEs default to exploited, Critical, CVSS >= 9, with show-all and 50-row pagination; sort by exploitation then CVSS and show total, critical, and exploited counts. Threat intelligence is a date/report/linked-CVEs/source table. Community is a Reddit table.

## Data contract
Items have `id`, `type`, `source`, `title`, `url`, `date`, and `summary`. Optional fields include `product[]`, `asset`, `description`, `details`, `status`, `severity`, `cvss`, `exploited`, `disclosed`, `engagement`, `cves[]`, `change_date`, `change_type`, `rollout`, `roadmap_id`, and `mc_id`. The week object may include `leadership_summary` entries (`text`, `item_ids[]`) and `key_dates` entries (`date`, `label`, `url`), as well as `themes[]`. Unknown fields are ignored. Assets are repo-relative paths under `research/<week>/assets/`; resolve them against the site root. Render images in a 180px fixed box with top alignment and cover cropping; absent assets have no image box, and threat items never show images.

## Look and feel
Light, bright, editorial. Ground #F6F7F9, white cards with 1px #D5DBE3 border and 12px radius, 18px padding; dark mode swaps CSS variables. System font at 15px, tabular numerals, accent #0B5CAD; Critical uses origin red, Exploited targeted amber. No gradients, glows, blurs, shadows, emoji, decorative icons, hover lifts, or left-border cards. Max-width 1360px, 16px gaps, one column under 900px. Slicer chips are pills with counts and a filled selected state. Theme cards open a dialog listing filtered items. Learn details and video descriptions preserve text and line breaks and have accessible show-more toggles. No map; `geo[]` is informational.

## Acceptance
- The page order and sections match this spec; no Data gaps and method section.
- Search and type chips filter all item sections; clearing them restores the week's results. Learn-only and CVE-only filters stay isolated.
- Items link to their source URL, and available screenshots load with alt text.
- CVE totals match JSON; missing images have no placeholder.
- Footer links to release notes for the selected week and shows the short commit SHA with build time in IST. `app.js` and `styles.css` URLs include the GitHub Pages commit SHA for cache busting.
- PR description lists changes and verification.
