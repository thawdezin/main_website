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

- `index.html` — content, metadata, Open Graph, and structured data
- `styles.css` — responsive visual system and motion
- `script.js` — mobile navigation and progressive reveal behavior
- `robots.txt` / `sitemap.xml` — search engine discovery
