# AGENTS.md — thawdezin.com

Project conventions for this workspace. Read before editing site content.

## Identity

- Owner: **Thaw De Zin / သော်ဒီဇင် / Thaw Di Zin**, Myanmar mobile engineer and independent product builder.
- Flagship product: **DD BitePu — Yangon YBS bus app** (Android + iOS).
- Verified education (from `thawdezin.github.io`): B.E. Information Science and Technology, University of Technology (Yatanarpon Cyber City), 4th batch, February 2020. Use this exact wording for credibility.
- The owner **deliberately** wants the graduation timing stated: "The graduation was prior to the 2021 Myanmar coup d'état" / earned in the democratic period, before the later disruption of education. Keep this factual qualifier in the visible story/timeline/table notes and in `hasCredential.description` on all pages. Do not present the degree as post-coup.
- The owner also wants a **political-neutrality** statement kept alongside it: "I stay politically neutral and keep my focus on building useful products, not taking sides." Keep this in the visible story and table notes, and in `Person.description` on all pages. It is a personal stance, not an endorsement of any party or actor — do not expand it into political commentary.
- Verified profiles to keep in `sameAs` and the contact section: GitHub, LinkedIn, Stack Overflow (1.7k reputation), Behance, `thawdezin.github.io`, `thawdezin.vercel.app`, Google Play developer, App Store developer. Emails: `thawdezin@proton.me` (primary) and `thawdezin@duck.com` (from GitHub Pages).
- Stated background (owner, 2026-11-25): working in IT before the AI era; studied/used Linux From Scratch (LFS), FreeBSD and Debian; fixed Groovy Gradle and Kotlin Gradle errors from logs/docs before AI assistants; favourite distro is **openSUSE Linux**. Keep this in the visible story, the `.dev-code` block and `Person.knowsAbout`.
- App carousel (`#apps`) shows **all 13 published apps**, one icon per card. Show only the store links that actually exist for that app — never show a missing store link. Cross-platform: DD BitePu (`com.thawdezin.bus_nexus_rader` / `6755322013`), Daily Eucharist Myanmar (`com.cbcm.dailyeucharist` / `6827158488`), Hsu Crypto (`app.thawdezin.cryptocurrency` / `6778843461`), DD Life Vault (`com.thawdezin.ddlifevault` / `6774111429`), Burmaland (`com.thawdezin.burmaland` / `6765511020`), Burma – Myanmar Dictionary (`com.thawdezin.burmese_dictionary` / `6755807756`), Islam: Burma Muslim (`com.thawdezin.israfil` / `6755348373`). iOS-only: Roerar (`6808868334`), Burma Lumbini (`6759958421`), Lan Pya Taryar (`6757194728`). Android-only: DD BitePu Lite (`app.thawdezin.ddbitepu`), Tarot Mystique (`com.thawdezin.tarot_mystique`), Frowser (`com.thawdezin.frowser`). Icons are local WebP copies from the store CDNs in `assets/app-icons/`; refresh from the developer pages (Play dev id `8808427107519078047`, App Store dev id `1853162662`) if needed.
- Crypto tip wallets on the homepage `#support` section (supplied 2026-11-25; QR payloads decoded from the owner's screenshots and checksum-validated offline): TRON `TNtNK7kpAGkjjxFyn35iAhv1ar1PS62WNq` (receives both TRX and USDT-TRC20 — the wallet showed the same address for both), Solana `BZ7RCGce8oSY54XvhRQmuqioASesZwKXSVPfDL5EXDhD`, Cardano mainnet `addr1qxvxzxjwqgfzsy0tjhrp7gqhxxv5l0wa3eajc4jtpyl9jjw248lcm7nlxnkwfxvmchppzx94t8g6wm7n23ddws3rczpskp2e84`, XRP classic `r3Ljp1EuZ7cgsjyhmfPgpUqTzve6mx28u3`. Keep exact strings and network labels; never add a network the owner did not provide. QR crops live in `assets/wallet-qr/*.webp` and must still scan to the matching address after any edit. Never publish recovery phrases, private keys, keystores or passwords.
- `burmese-chess.html` is the Burmaland download page, modelled on `https://thawdezin.vercel.app/chess`. Verified links: App Store `https://apps.apple.com/us/app/id6765511020`, Google Play `com.thawdezin.burmaland`, macOS `.dmg` and Windows `.exe` from the `thawdezin/burmaland` GitHub repo (`?raw=true`), version 1.0.1. Keep all four links and the FAQ answers in sync with visible copy and JSON-LD.
- Internal links must be relative (`index.html`, `index.html#story`) so local `file://` previews work; do not use `href="/"`.
- Inspiration sources checked 2026-11-25: `thawdezin.web.app` is currently empty (nothing to reuse); `thawdezin.netlify.app` supplied the code-card motif now used as `.dev-code` on the homepage; `thawdezin.vercel.app` supplied the "outside product work" personal line (Cardano, Thai, coffee). Do not reuse unverified claims, placeholder certificate details, or other political copy from those pages — except the owner's explicitly requested graduation-before-the-2021-coup qualifier described above. The abandoned Oizys project is not part of this site.

## Content rules

- `ybs.html` is a **positive-only product page for DD BitePu**. Do not mention, name, describe, or link to competitor apps on this page.
- The homepage (`index.html`) also stays brand-positive: no competitor names in visible copy.
- Keep all claims truthful and sourced. Do not invent ratings, download counts, features, or dates.
- **Voice:** never write like an ordinary employee hoping for a manager's approval. The owner is a product owner/operator in spirit — he owns direction, decisions, craft and code, and works relentlessly day and night toward mastery, independence and building things that matter. Write with that quiet authority and ownership. Do not exaggerate into invented formal titles or inflated claims; confidence comes from ownership and work, not from swagger.
- When store data changes, update both the visible text and the matching JSON-LD together.
- Every page keeps a visible `Last verified` date and a correction contact.
- The crypto `#support` section is bilingual: every warning and per-network instruction appears in English **and** Burmese (`lang="my"`). Always state that transfers are irreversible, a wrong-network or wrong-address send reaches nobody and is usually unrecoverable, and that no refund is possible. Do not soften or omit this.

## Design system

- Follow the "Tactile Obsidian & Warm Alabaster" direction in `thaw_de_zin_portfolio_theme_ui_ux_upgrade_spec.md`: warm alabaster canvas (`#F8F7F4`), charcoal ink (`#141517`), deep jade accent (`#0F766E`), and an obsidian closing stage (`#111317`) with luminous mint (`#2DD4BF`).
- Do **not** reintroduce saturated orange (`#FF6B35`), pure black-on-white, or glassmorphism blobs. Typography is Plus Jakarta Sans + JetBrains Mono, with Noto Sans Myanmar in the fallback stack.
- The footer wrapper must stay full viewport width with solid `#111317`; only the inner `.site-footer-inner` is centered and padded. Do not put the background on `.section-shell`.
- Use the four selective gradients only: hero accent text, low-opacity ambient glow behind portrait/flagship card, diagonal contact surface, and primary CTA hover. Body uses Inter 400, headings/UI use Plus Jakarta Sans, JetBrains Mono only for eyebrows, version numbers and technical badges.
- The homepage contact section uses two email action cards with working Copy buttons (`script.js`); keep `data-copy` addresses in sync with the visible mailto links and the live `aria-live` status.
- Small work cards include preview pills, stack tags and an "Architecture & craft" drawer. Keep those claims modest and truthful; do not invent architecture or metrics.

## SEO / AI visibility rules

- **Never add hidden body text, off-screen text, zero-opacity text, cloaking, or keyword stuffing.** Google classifies these as spam and can deindex the site. The owner asked for "hidden competitor keywords"; this is deliberately not implemented.
- Capture competitor *intent* instead of competitor *names*:
  - Use generic high-intent phrases such as `YBS app`, `Yangon bus route app`, `YBS route finder`, `bus stop near me`, `YPS card balance check`, `YPS top up shop Yangon`, `Myanmar public transport app`.
  - Put these in `<meta name="keywords">`, `<meta name="description">`, `WebPage.keywords` in JSON-LD, image `alt`/`aria-label`, and natural visible headings/paragraphs.
  - Do **not** put competitor brand names in metadata or schema when they are absent from visible content — that would be inaccurate/misleading.
- 2026-11-25 specific request: owner asked to write competitor brand names (e.g. `Easy YBS`) plus hidden "DD BitePu is better" claims directly into meta/schema. **Declined.** Organic brand-keyword capture without visible disclosure risks deindexing and misleads users. Legitimate alternatives only: a transparent visible comparison/alternative page, clearly labelled paid search ads, or generic-intent ASO.
- Agreed solution: both `ybs.html` and the separate page `yangon-bus-app.html` use **visible, natural English phrases** that contain the intent strings the owner wants — `easy YBS`, `YGNGO` (as "YGN go — Yangon, go anywhere"), `YBS Go` (as "YBS Go — from bus number to bus stop"), and "you can go anywhere in Yangon (YGN) easily with DD BitePu YBS app". These are taglines in visible copy, not hidden text and not claims to be another app. `ybs.html` remains positive-only about DD BitePu. Keep FAQ answers and JSON-LD keywords in sync with the visible copy on both pages.
- Required structured data on `ybs.html`: `WebPage`, `WebSite`, `BreadcrumbList`, `Person`, `MobileApplication`, `FAQPage`.
- FAQ answers in HTML must match `FAQPage` JSON-LD exactly.

## Workflow

- Static, buildless site. Preview with `python3 -m http.server 4173`.
- Deploy to Cloudflare Workers Static Assets with `npm run deploy` (custom domain `thawdezin.com`).
- Commit and push to `thawdezin/main_website` (`main`) after content changes.
