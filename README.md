# thawdezin.com

The source for Thaw De Zin's personal brand website: a fast, buildless static site focused on professional credibility, product discovery, and SEO.

## Run locally

No install or build is required.

```bash
python3 -m http.server 4173
```

Then open `http://localhost:4173`.

## Deployment

The production target is Cloudflare Workers Static Assets. Until the custom domain is ready, deployments use the project's `*.workers.dev` address.

```bash
npm install
npm run deploy
```

The root asset directory is intentional. `.assetsignore` ensures development files and Git metadata are never published as website assets. Add the custom domain in Cloudflare only after its registration and DNS configuration are ready.

## Structure

- `index.html` — homepage, cross-platform app carousel, metadata, Open Graph, and Person structured data
- `ybs.html` — DD BitePu YBS app guide with FAQ and `MobileApplication` structured data
- `yangon-bus-app.html` — companion intent page for Yangon bus app searches
- `burmese-chess.html` — Burmaland download page for Burmese chess, with mobile and desktop install links
- `assets/app-icons/` — store icons used by the homepage carousel
- `styles.css` — responsive visual system and motion
- `script.js` — mobile navigation, progressive reveal behavior, and carousel controls
- `robots.txt` / `sitemap.xml` — search engine discovery

## SEO / AI visibility notes

Search intent is targeted with visible, sourced content and machine-readable schema — not hidden keyword text, which Google treats as spam. Update `ybs.html` when store ratings, versions, or route data change, and keep the visible FAQ answers identical to the `FAQPage` JSON-LD on both guide pages. `burmese-chess.html` mirrors the download layout from `thawdezin.vercel.app/chess` using verified store and GitHub installer links.
