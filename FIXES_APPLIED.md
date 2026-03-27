# DeepGameCoaching — Fixes Applied
**Date:** 2026-03-27
**Source:** AUDIT_REPORT.md
**File modified:** `deepgamecoaching/index.html`

---

## HIGH — Fixed

### Mobile menu animation (broken CSS transition)
- **Problem:** `.nav-mobile` used `display: none` / `display: flex` toggle, which blocked CSS transitions from firing on open.
- **Fix:** Replaced with `visibility: hidden; opacity: 0; pointer-events: none` (closed) → `visibility: visible; opacity: 1; pointer-events: auto` (open). Element stays in render tree at all times. Both open and close now animate correctly via `transform` + `opacity` transition.

### FAQ accordion padding transition (no-op)
- **Problem:** `transition: max-height 0.4s ..., padding 0.3s ease` on `.faq-body` — but padding lived on `.faq-body-inner`, so the padding transition did nothing.
- **Fix:** Removed `padding 0.3s ease` from `.faq-body` transition declaration. `max-height` animation intact.

---

## MEDIUM — Fixed

### Logo tag font-size (below legible threshold)
- **Problem:** `.logo-tag` was `font-size: 9px`, below WCAG practical readability floor.
- **Fix:** Increased to `11px`, matching the already-corrected `.about-logo-display .logo-tag`.

### Stat row mobile layout (3 cards stacking vertically)
- **Problem:** `@media (max-width: 768px) { .stat-row { grid-template-columns: 1fr; } }` caused 3 cards to stack, losing "stats" visual pattern.
- **Fix:** Changed to `grid-template-columns: repeat(3, 1fr)` — keeps 3-up compact layout on mobile.

### `.btn-secondary` hover contrast
- **Problem:** `--color-secondary-dark: #E09310` on amber background was borderline WCAG AA at ~4.6:1 for base font size.
- **Fix:** Darkened to `--color-secondary-dark: #C97F00` for comfortable contrast margin above 4.5:1.

### CTA copy inconsistency
- **Problem:** Three CTA variants: "Book a Free Intro" (nav), "Book a Free Intro Class" (hero), "Book on WhatsApp" (final CTA).
- **Fix:** Standardised all to "Book a Free Intro". Hero CTA and final CTA updated.

### Proof bar accuracy — Lichess rating claim
- **Problem:** Pill said "Lichess Top 6% Globally" — accurate only for Blitz, not overall.
- **Fix:** Changed to "Lichess Blitz Top 6% Globally".

### Rapid stat card empty sub-label
- **Problem:** `.stat-card-sub` contained `&nbsp;` with no real data, causing dead whitespace.
- **Fix:** Removed the element entirely. Fill in when actual percentile is known.

### FAQ accessibility — `aria-labelledby` missing on `role="region"`
- **Problem:** Each `.faq-body` had `role="region"` but no accessible name, producing accessibility tree warnings.
- **Fix:** Added `id="faq-q-1"` through `id="faq-q-5"` to each trigger button; added `aria-labelledby` and `aria-controls` to matching bodies.

### Misleading "certified fellow" copy in in-person pricing card
- **Problem:** "a certified fellow DeepGameCoaching coach" implied a team that doesn't exist / isn't substantiated.
- **Fix:** Replaced with "Home visits available on request." — neutral, accurate, non-misleading.

### CSS class collision on about section wordmark
- **Problem:** Inner `<div class="logo-wordmark about-logo-display">` applied `about-logo-display` to a child element it wasn't designed for, with inline styles to override the resulting layout conflicts.
- **Fix:** Removed `about-logo-display` class and inline `style` from the wordmark div. Uses `logo-wordmark` only, as intended.

---

## LOW — Fixed

### FAQ headline weak copy
- **Problem:** "Questions answered" — placeholder-level copy.
- **Fix:** Changed to "Common Questions".

### Hero scroll hint duplicates ghost CTA
- **Problem:** `.hero-scroll-hint` ("Scroll" + down arrow) visually duplicated the "See How It Works" ghost CTA directly above it.
- **Fix:** Removed `.hero-scroll-hint` element entirely.

### Hero SVG pattern not fully isolated from accessibility tree
- **Problem:** `.hero-pattern` SVG had `aria-hidden="true"` but not `focusable="false"` (required for IE/Edge SVG focus behaviour).
- **Fix:** Added `focusable="false"` attribute.

### Hero load animation double-trigger
- **Problem:** Both `window.addEventListener('load', ...)` and immediate `readyState === 'complete'` check could fire simultaneously, calling `classList.add('loaded')` twice.
- **Fix:** Simplified to single conditional: check `readyState` first, only attach `load` listener if not yet complete.

### Footer WhatsApp number not visible as text
- **Problem:** `+971525203533` was embedded in href only — not readable without clicking.
- **Fix:** Changed footer link text from "WhatsApp" to "+971 52 520 3533" and updated `aria-label` to include the number.

### Active nav link indicator missing
- **Problem:** No visual indicator of current section as user scrolls.
- **Fix:** Added `.nav-links a.active { color: var(--color-primary); font-weight: 600; }` CSS rule and an IntersectionObserver JS block that sets/removes the `active` class on nav links as their corresponding sections enter the viewport (threshold: 35%).

---

## ADDED

### JSON-LD LocalBusiness schema markup
- Added `<script type="application/ld+json">` in `<head>` with `LocalBusiness` schema.
- Fields: name, description, url, telephone, contactPoint, address (Abu Dhabi, AE), areaServed (Abu Dhabi + Dubai), serviceType, priceRange, founder.
- Improves local SEO for UAE chess coaching searches.

---

## SKIPPED (require user-supplied content)

- **Testimonials** — no real student quotes available
- **Pricing figures** — no AED/USD rates confirmed
- **Coach photo** — no image file provided
- **Rapid stat percentile** — real Lichess Rapid percentile unknown; element removed rather than invented
- **Hero H1 rewrite** — copy decision deferred to user (current H1 is functional, rewrite needs brand voice sign-off)
- **About section voice** — third-person vs. first-person decision deferred to user
- **Section reorder** — structural reorder (About before Who It's For) deferred; significant layout change requiring user approval
