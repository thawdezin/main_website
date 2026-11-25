# Crypto wallet verification note

Internal record, 25 November 2026. This page is intentionally **not** linked from the public site. Keep it here so the tip-jar addresses and QR images can be re-checked without repeating the work.

## Where these appear now

As of 25 November 2026 the crypto UI moved off the homepage to `donate.html` (`/donate` style page). On that page TRON is the primary card and Solana, Cardano and XRP sit inside the "More networks" disclosure. Addresses are masked until the visitor presses Show or Copy. The homepage `#support` section only links to `donate.html`; it must not list addresses again.

## GitHub Sponsor buttons

Every repo in the account carries `.github/FUNDING.yml` with a single `custom:` entry pointing at `https://thawdezin.com/donate.html`, so GitHub renders a "Sponsor" button in the repo header. The file deliberately contains **no wallet address** — only the link to the one page that already holds them. Applied to: `main_website`, `thawdezin.github.io`, `atheist`, `CMP_KMP_RULE`, `ControlCentre`, `cbcm_official_app`.

## Still pending from the owner

- KBZ Pay, Wave Pay, AYA Pay, CB Pay and Citizens Pay transfer numbers (he confirmed he holds all five accounts).
- One AYAR QR image, which works for all five wallets — until it is supplied, `donate.html` shows a placeholder box.

## What was checked

The owner supplied five Trust Wallet receive screenshots in `raw data/` (gitignored) and four unique receiving addresses. The QR payload in every screenshot was decoded locally with macOS Vision and compared character-for-character with the supplied string. All five matched exactly.

| Network | Asset shown | Address | QR source screenshot | Decoded payload |
| --- | --- | --- | --- | --- |
| TRON (TRC-20) | TRX | `TNtNK7kpAGkjjxFyn35iAhv1ar1PS62WNq` | `photo_2026-11-25 19.55.43.jpeg` | exact match |
| TRON (TRC-20) | USDT | `TNtNK7kpAGkjjxFyn35iAhv1ar1PS62WNq` | `photo_2026-11-25 19.55.46.jpeg` | exact match |
| Solana | SOL | `BZ7RCGce8oSY54XvhRQmuqioASesZwKXSVPfDL5EXDhD` | `photo_2026-11-25 19.55.48.jpeg` | exact match |
| Cardano mainnet | ADA | `addr1qxvxzxjwqgfzsy0tjhrp7gqhxxv5l0wa3eajc4jtpyl9jjw248lcm7nlxnkwfxvmchppzx94t8g6wm7n23ddws3rczpskp2e84` | `photo_2026-11-25 19.55.50.jpeg` | exact match |
| XRP Ledger | XRP | `r3Ljp1EuZ7cgsjyhmfPgpUqTzve6mx28u3` | `photo_2026-11-25 19.55.51.jpeg` | exact match |

The two TRON screenshots showed the same address for TRX and USDT, so the site uses one QR image for both assets on that address. USDT must be sent on TRON (TRC-20) only; ERC-20, BEP-20 and Solana USDT will not arrive.

## Address-format checks (offline)

- **TRON:** Base58Check decoded to 25 bytes, mainnet prefix `0x41`, double-SHA-256 checksum valid.
- **Solana:** Base58 decoded to a 32-byte ed25519 public key.
- **Cardano:** bech32 HRP `addr`, checksum valid; 57-byte mainnet base address (key hash + key hash, network id 1).
- **XRP:** Ripple Base58Check decoded to 25 bytes, account prefix `0x00`, checksum valid.

## QR assets

Cropped from the QR region only (with quiet-zone padding) and saved as:

- `assets/wallet-qr/tron-qr.webp`
- `assets/wallet-qr/solana-qr.webp`
- `assets/wallet-qr/cardano-qr.webp`
- `assets/wallet-qr/xrp-qr.webp`

After WebP conversion, each final file was decoded again and still returned the exact address listed above.

No recovery phrase, private key, keystore or password was used, generated or stored here.
