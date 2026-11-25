# AGENTS.md — thawdezin.com

Project conventions for this workspace. Read before editing site content.

## Identity

- Owner: **Thaw De Zin / သော်ဒီဇင် / Thaw Di Zin**, Myanmar mobile engineer and independent product builder.
- Flagship product: **DD BitePu — Yangon YBS bus app** (Android + iOS).

## Content rules

- `ybs.html` is a **positive-only product page for DD BitePu**. Do not mention, name, describe, or link to competitor apps on this page.
- The homepage (`index.html`) also stays brand-positive: no competitor names in visible copy.
- Keep all claims truthful and sourced. Do not invent ratings, download counts, features, or dates.
- When store data changes, update both the visible text and the matching JSON-LD together.
- Every page keeps a visible `Last verified` date and a correction contact.

## SEO / AI visibility rules

- **Never add hidden body text, off-screen text, zero-opacity text, cloaking, or keyword stuffing.** Google classifies these as spam and can deindex the site. The owner asked for "hidden competitor keywords"; this is deliberately not implemented.
- Capture competitor *intent* instead of competitor *names*:
  - Use generic high-intent phrases such as `YBS app`, `Yangon bus route app`, `YBS route finder`, `bus stop near me`, `YPS card balance check`, `YPS top up shop Yangon`, `Myanmar public transport app`.
  - Put these in `<meta name="keywords">`, `<meta name="description">`, `WebPage.keywords` in JSON-LD, image `alt`/`aria-label`, and natural visible headings/paragraphs.
  - Do **not** put competitor brand names in metadata or schema when they are absent from visible content — that would be inaccurate/misleading.
- Required structured data on `ybs.html`: `WebPage`, `WebSite`, `BreadcrumbList`, `Person`, `MobileApplication`, `FAQPage`.
- FAQ answers in HTML must match `FAQPage` JSON-LD exactly.

## Workflow

- Static, buildless site. Preview with `python3 -m http.server 4173`.
- Deploy to Cloudflare Workers Static Assets with `npm run deploy` (custom domain `thawdezin.com`).
- Commit and push to `thawdezin/main_website` (`main`) after content changes.
