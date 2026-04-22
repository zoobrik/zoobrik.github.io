# Guru Game — Website

Premium gaming lounge website for two locations in Tbilisi, Georgia.

## Stack
- Vanilla HTML/CSS/JS (no frameworks, no build step)
- Fonts: Space Grotesk + JetBrains Mono (Google Fonts)
- Single-page layout: `index.html` + `styles.css` + `script.js`

## Site Structure
1. **Nav** — sticky, blur backdrop, language switcher (KA/EN/RU), "Reserve Now" CTA
2. **Hero** — logo image (`images/guru-game-logo.png`), two CTA buttons
3. **Locations** — two sections with station cards + game cover sliders
   - Vaja-Pshavela (Ave. 19): Open PS5, Small VIP, Standard VIP, Theater — hours 11:00–6:00
   - Didi Digomi (4 Petre Iberi St): Open PS5, Xbox+Wheel, VIP, Ultra VIP — hours 14:00–4:00
4. **Pricing** — side-by-side cards per location, all hourly in GEL (₾)
5. **Booking** — form with location → room number + time slot (dynamic dropdowns)
6. **Guru Card** — loyalty card section with registration form
7. **Footer** — phone, social links (Facebook, Instagram, TikTok)

## i18n
- Three languages: Georgian (ka, default), English (en), Russian (ru)
- All strings in `translations` object in `script.js`
- `data-i18n` attributes on HTML elements, applied via `applyTranslations()`
- Language persisted in `localStorage` key `nexus-lang`

## Booking Logic (`script.js`)
- Room numbers for Digomi: Open 1-3, VIP 1-4, Ultra VIP, Wheel 1-3
- Vaja room numbers: currently empty array (not yet filled in)
- Time slots: Vaja 12:00–04:00, Digomi 15:00–02:00, in 30-min increments

## Design Tokens (`styles.css`)
- Dark theme: `--bg: #060b14`, `--surface: #0d1628`
- Accent: `--blue: #1a6aff`, `--yellow: #f5c400`
- Border radius: 4px (default), 8px (lg)

## Known TODOs / In Progress
- Vaja-Pshavela room numbers not yet defined (empty array in `locationRoomNumbers`)
- Guru Card placeholder (`guru-card-placeholder`) — no actual card visual yet
- `points_info` text has placeholder `xx Lari` — real value not set
- Booking form submits locally only (no backend/API connected)
- Guru Card registration submits locally only (no backend/API connected)
