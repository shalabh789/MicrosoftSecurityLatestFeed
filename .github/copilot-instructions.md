# Microsoft Security Latest Feed - instructions for Copilot coding agent

## What this repo is
A weekly, data-driven security intelligence dashboard for Microsoft security news, published on GitHub Pages from /docs. Research Bots write data/<week>.json and research/<week>/README.md; you build and maintain the site that renders them. Humans approve each task via the "approved" label.

## Hard constraints
- Static site only: plain HTML, CSS and vanilla JS in /docs. No build step, no npm, no frameworks that need bundling. A single third-party library via CDN is allowed if needed (e.g. a chart library). Must work when opened from https://shalabh789.github.io/MicrosoftSecurityLatestFeed/.
- The site reads data/index.json (list of weeks) and data/<week>.json at runtime via fetch, relative paths. Never hard-code a week's content into HTML.
- Never modify anything under research/ or data/. If data is malformed, open an issue labelled fix describing the problem instead.
- Keep the PR small and self-contained; include a short CHANGELOG entry in docs/CHANGELOG.md.
- Accessibility: keyboard-navigable slicers, visible focus, colour contrast AA, alt text on every screenshot.

## Dashboard spec
Top bar: title, "Week" selector (defaults to newest week), last-updated date from the JSON.
Filters: the By product dropdown (Microsoft Entra ID, Entra ID Governance, Global Secure Access, Defender XDR, Defender for Endpoint, Defender for Office 365, Defender for Identity, Defender for Cloud Apps, Defender for Cloud, Defender Vulnerability Management, Defender Threat Intelligence, Security Exposure Management, Sentinel, Purview, Intune, Security Copilot, Azure network security, Windows security) applies to Learn, community and the CVE table; the header week selector switches data files. No map. Keep Type (Video, X, Threat, CVE, Blog, Learn, Reddit), Country (from geo[]), Actor, Product (Defender, Sentinel, Entra, Purview, Intune, Security Copilot, Azure, Windows, M365), Date range within the week, and for CVEs a Severity filter (CVSS >= 7, Exploited, Publicly disclosed). Slicer state is reflected in the URL hash so a view can be shared.
Sections, in order, each a card grid or table that responds to the slicers:
1. Themes of the week (from themes[]), each theme expands to its items.
2. Latest news (blog + learn items), newest first.
3. CVEs this month: a Patch Tuesday month has about 1,100 CVE items, so default the table to Exploited + Critical + CVSS >= 9 with a "Show all" toggle, and page or virtualize the full list (50 rows a page). Sort by exploited, then CVSS. Row badges for Exploited and Publicly disclosed; counts tile at top (total, critical, exploited). Also fine to show a small bar chart of CVE counts by product family.
4. Threat intelligence: items of type "threat" (Microsoft Threat Intelligence, Security Insider, MSRC advisories, the MSTI podcast) as a table with date, report, actor, sectors, linked CVEs, source. Place it between the X wall and the blogs.
(No map on this page.)
5. Videos: card per video with the screenshot/GIF from the asset path, channel, date, link.
6. From X: card per post with screenshot, handle, date, link to the post.
7. Community: Reddit threads table.
8. What's new on Learn: grouped by product.
Footer: link to research/<week>/README.md and to the verification report verification/<week>.md if it exists.

## Data contract
See data/<week>.json. Required per item: id, type, source, title, url, date, summary. Optional: product[], asset, severity, cvss, exploited, disclosed, engagement, actor, geo[] ({country: ISO alpha-2, role: targeted|origin}), region, sectors[], techniques[], cves[]. Unknown fields are ignored. Asset paths are repo-relative (research/<week>/assets/...); resolve them against the site root. A missing asset shows a neutral placeholder, never a broken image. The JSON for one week can be 600 KB or more: fetch only the selected week, and cache it in memory when switching slicers.

## Look and feel (match the wireframe PNG attached to the build issue)
Light, bright, editorial. Ground #F6F7F9, white cards with 1px #D5DBE3 border and 12px radius, 18px padding; a dark-mode toggle that swaps CSS variables. System font stack at 15px, tabular numerals. One accent #0B5CAD;  Critical uses the origin red, Exploited the targeted amber. No gradients, glows, blurs, shadows, emoji or decorative icons. The page shows only what the week's README and JSON contain: TL;DR themes, videos, X posts, threat intelligence, CVEs, blogs, Learn, community, gaps. Page order as the attached wireframe: header with jump links, week selector and dark-mode toggle; four tiles (new additions this week = all non-CVE items in the window with a per-type breakdown; blogs; videos; CVEs this month with exploited and Critical counts); top themes as cards, each with the screenshot of its most-engaged item, no country tags; YouTube wall (masonry of screenshots, each linking to the video); X threads wall (same, by engagement, caption = what replies say); blogs as cards with tag, title, one-line summary, date, source, link; a By product section with a dropdown of every Microsoft security product: with a product selected, show only that product's panel (product name, latest Learn heading, every Learn item whose section is that heading, with status tags, link to the page and its screenshot, and a count of that product's CVEs, X posts and blogs this week) and filter the sections below to it; with none selected, one compact row per product (latest heading, entry count, link); then community threads; CVE tracker with by-product-family bars and CVSS distribution; data gaps and method. Slicer chips are pills showing a count; the selected chip is filled with the accent. Theme cards open a side drawer listing that theme's items. The X wall is a masonry grid of the real screenshots at natural height, each linking to the post, caption = handle, date, engagement, what replies say.  Videos are a masonry wall of screenshot cards, each linking to the video. No world map; geo[] in the JSON is informational only. Max-width 1360px, 16px gaps; one column under 900px. No emoji, no decorative icons, no left-border cards, no hover lifts, no card glow.

## Acceptance (every build or fix PR must meet all)
- Site loads at the Pages URL with no console errors.
- Every item in data/<week>.json for the selected week appears exactly once somewhere on the page.
- Every slicer changes what is shown; clearing slicers restores all items.
- All links open the item URL; all screenshots render from research/<week>/assets/.
- CVE table counts match the JSON.
- Lighthouse accessibility score >= 90.
- PR description lists what changed and how you verified it.
