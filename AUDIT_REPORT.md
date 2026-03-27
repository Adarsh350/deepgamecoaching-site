# DeepGameCoaching — UI/UX Audit Report
**File audited:** `deepgamecoaching/index.html` (1761 lines)
**Audit date:** 2026-03-27
**Auditor:** Senior UI/UX + Frontend review

---

## Executive Summary

- **Critical:** Zero pricing information — the section is named "Pricing" in both the nav and section label, but no rates are shown. This is the single biggest conversion killer on the page.
- **Critical:** No real testimonials or student results anywhere. The social proof bar lists coach credentials only. There is not one student quote, student name, or outcome stat (e.g. "rated X after 3 months of coaching"). For a coaching business, this is fatal.
- **High:** The `about-knight` visual placeholder is a logo displayed in a box instead of a coach photo. For a personal coaching brand, an anonymous logo where the coach's face should be destroys trust immediately.
- **High:** The mobile menu uses `display: none` → `display: flex` to toggle visibility, which breaks CSS transitions — the open/close animation defined via `transform` and `opacity` will not fire on open because the element is not in the render tree during the transition.
- **Medium:** The FAQ `faq-body` uses `max-height: 0` → `max-height: 400px` for accordion animation but `padding` is declared to transition separately yet the padding is on `faq-body-inner`, not `faq-body`, making the padding transition declaration on line 955 a no-op.

---

## CRITICAL Issues

---

### [PRICING] No Actual Pricing Shown
**Severity: Critical**

The nav link says "Pricing", the section label (line 1431) says "Offerings", and the section headline says "Flexible coaching, wherever you are" — but there is not a single AED/USD figure anywhere on the page. Both pricing cards (Online and In-Person) go straight from a description paragraph to a WhatsApp CTA with zero pricing information.

**Impact:** UAE parents and adult learners evaluating a coaching service will not initiate WhatsApp contact to discover price. Price is a qualifying filter. Hiding it increases friction, not intrigue. Competitors who show pricing will convert this traffic.

**Recommended fix:** Add at minimum a "Starting from AED X per session" line inside each `.pricing-card-body`. If exact pricing is intentionally withheld, replace the section label "Offerings" (which the nav calls "Pricing") everywhere so the expectation mismatch is eliminated. A "Contact for pricing" line with a CTA is acceptable but must be explicit.

---

### [SOCIAL PROOF] No Student Testimonials Anywhere
**Severity: Critical**

The entire page contains zero student quotes, zero student names, zero before/after outcomes ("went from 800 to 1400 in 4 months"), and zero parent testimonials. The `.proof-bar` section (lines 1250–1277) contains only coach credentials — things the coach has achieved, not evidence that the coaching works.

**Impact:** People buying coaching services are buying a transformation. Without third-party validation that the transformation happens, all the coach's credentials are just self-assertion. This is the most trust-critical gap on the page.

**Recommended fix:** Add a dedicated testimonials section between the "How It Works" and "Pricing" sections. Minimum 2–3 testimonials with: student first name, context (age / level when they started), specific outcome, and optionally a photo. Even a single strong quote would dramatically change conversion. Structure: `.testimonials-section` with `.testimonial-card` components containing a blockquote, attribution, and optional rating.

---

## HIGH Issues

---

### [ABOUT] Coach Photo Replaced by Logo Placeholder
**Severity: High**

Lines 1482–1490: The `.about-knight` div — which visually occupies the left column of the about section and is the natural location for a coach photo — contains only the site logo (`logo.svg`, 108×108px) centered in a green box. The comment on line 829 explicitly says `/* LOGO: replace with <img src="logo.png"> when ready */`, confirming this is a placeholder that was never resolved.

**Impact:** DeepGameCoaching is a personal coaching brand. The coach's identity (Adarsh) is the product. An anonymous logo where the face should be makes the brand feel unfinished and erodes trust in exactly the section designed to build it.

**Recommended fix:** Replace the `.about-knight` contents with `<img src="coach-photo.jpg" alt="Adarsh, chess coach" ...>` styled to `width: 100%; height: 100%; object-fit: cover; border-radius: var(--radius-2xl)`. If no photo is available yet, use a high-quality chess-themed illustration (not the wordmark logo).

---

### [NAVIGATION / MOBILE MENU] CSS Transition Broken on Mobile Menu Open
**Severity: High**

Lines 404–428: The `.nav-mobile` element uses `display: none` as its default state and `display: flex` when `.open` is added. The element also has `transform: translateY(-8px)` and `opacity: 0` with a transition defined. However, CSS cannot transition `display` — when `.open` is added, the browser applies `display: flex` and the transition properties simultaneously, meaning the element appears instantly with no animation on open. Only the close direction (which doesn't toggle `display`) would animate if the implementation were changed.

**Recommended fix:** Remove `display: none` from `.nav-mobile`. Instead control visibility with `visibility: hidden; pointer-events: none; opacity: 0; transform: translateY(-8px)`. On `.nav-mobile.open`, set `visibility: visible; pointer-events: auto; opacity: 1; transform: translateY(0)`. This makes both open and close animate correctly. The JS `openMenu`/`closeMenu` functions (lines 1680–1693) require no changes.

---

### [HERO] Hero Headline Is Generic — No Differentiator
**Severity: High**

Line 1222: The H1 reads: *"Chess Coaching That's Built Around Your Game"*. This is the first thing every visitor reads. The sub-headline (line 1225–1227) provides the UAE context and credential, but the H1 itself could apply to any chess coach anywhere in the world.

**Impact:** In UAE's competitive education/coaching market, the headline needs to capture what is unique about DeepGameCoaching within 3 seconds: UAE-based, champion credentials, and the personalised approach. The current H1 does one of three.

**Recommended fix:** Rewrite H1 to front-load the differentiator. Example: *"UAE Chess Coaching from a Multi-Time Champion — Built Around Your Game"* or split the emphasis: *"Train with a UAE Champion. Play Like One."* The sub-headline can then elaborate on the personal approach. The `<em>` underline treatment on "Your" is visually strong — keep it on the most important word.

---

### [CONTENT / COPY] About Section Uses Third Person — Then Breaks It
**Severity: High**

Line 1495: The about paragraph starts with "Adarsh is a multi-time UAE..." (third person) but the coaching sections throughout the page use first-person plural ("we start from zero", "we build", "we analyse"). Pick one voice and maintain it. Third person in an About section is appropriate if the entire site is written from a brand perspective ("DeepGameCoaching does X"). First person ("I'm Adarsh") is more personal and converts better for solo coaching. The current mix reads like two different writers.

**Recommended fix:** Decide on voice. For a solo coaching brand, first person ("I'm Adarsh. I've competed at UAE championship level for 10+ years...") is more trustworthy. Update the about paragraph and any other mixed sections to match.

---

### [FAQ] `faq-body` Accordion Padding Transition Is a No-Op
**Severity: High**

Line 955: `.faq-body { transition: max-height 0.4s var(--ease-out), padding 0.3s ease; }` — padding transition is specified on `.faq-body`, but the actual padding (`padding-bottom: var(--space-5)`) lives on `.faq-body-inner` (line 961), not on `.faq-body`. The `max-height` animation works correctly. The padding transition does nothing because there is no padding to animate on the transitioning element. This produces a visible layout jump at the end of the close animation as content appears to snap.

**Recommended fix:** Either move `padding-bottom` from `.faq-body-inner` onto `.faq-body` itself and animate it (add `padding-bottom: 0` on the closed state), or remove the `padding` from the transition declaration on line 955 to clean up dead code.

---

### [STAT CARDS] Stat Card "Top 6%" vs "Top 11%" Inconsistency with Proof Bar
**Severity: High**

The `.proof-bar` at line 1263 states "Lichess Top 6% Globally" as a single credential. But in the stat cards (lines 1503–1522), this breaks down: Bullet = Top 11%, Blitz = Top 6%, Rapid = no percentile shown. The proof bar's claim of "Top 6% Globally" is correct only for Blitz — presenting it as a global overall claim is misleading. A prospective student who reads both sections will notice the inconsistency and question the accuracy of other credentials.

**Recommended fix:** Change the proof bar pill (line 1263) to "Lichess Blitz Top 6% Globally" to be specific, or add a parenthetical "(Blitz)". The stat card for Rapid (line 1521) has a `&nbsp;` in the sub-label — either add the percentile or remove the empty element to eliminate the dead whitespace.

---

## MEDIUM Issues

---

### [SECTION FLOW] "Who It's For" Appears Before "The DeepGame Difference" and "How It Works"
**Severity: Medium**

The current page order is: Hero → Proof Bar → Who It's For → DeepGame Difference → How It Works → Pricing → About → FAQ → Final CTA.

Standard coaching page flow should be: Hero → Proof Bar → About/Credibility → Who It's For → Method/How It Works → Results/Testimonials → Pricing → FAQ → CTA. Placing "Who It's For" before the visitor understands why this coach is credible forces the visitor to self-qualify before they've been sold on the product.

**Recommended fix:** Move the About section to position 3 (immediately after proof bar), before "Who It's For". This means credibility is established before the audience segmentation, which matches how humans make purchasing decisions.

---

### [VISUAL HIERARCHY] Section Headlines Lack Visual Contrast Differentiation
**Severity: Medium**

All section headlines use identical styling: `clamp(var(--text-2xl), 4vw, var(--text-4xl))`, weight 800, color `--color-text`. The only differentiation between sections is background color alternation (white/muted-green/muted-2). On sections with white backgrounds (Who It's For, How It Works, About), the headline carries no more visual weight than a card title in the same section. The hero H1 is appropriately larger (`clamp(2.25rem, 6vw, var(--text-5xl))`), but section H2s all feel equally weighted.

**Recommended fix:** Increase section headline prominence on light-background sections. Consider adding a subtle decorative element (the amber underline already used on hero em tags) to section headlines, or increasing the `clamp` max for H2 from `var(--text-4xl)` (48px) to `var(--text-5xl)` (60px) on desktop. Alternatively, add `color: var(--color-primary)` on section H2s to create contrast with card-level H3s.

---

### [MOBILE] Stat Row Collapses to 1 Column on Mobile — 3 Cards Stacked Is Too Tall
**Severity: Medium**

Line 1118: `@media (max-width: 768px) { .stat-row { grid-template-columns: 1fr; } }` — the three stat cards (Lichess Bullet, Blitz, Rapid) stack vertically into a single column on mobile. Each `.stat-card` has `padding: var(--space-5) var(--space-4)` which is 20px vertical. Three cards stacked takes up significant vertical real estate in the About section on mobile, and visually it doesn't communicate "stats" — it looks like a list.

**Recommended fix:** Change the mobile breakpoint rule to `grid-template-columns: repeat(3, 1fr)` and keep the 3-up layout at mobile, or set `grid-template-columns: 1fr 1fr` (2-up) with the third card spanning both columns. The stat values (2139, 2101, 2264) are short enough to fit in compact columns.

---

### [TYPOGRAPHY] Logo Tag Font Size Is 9px — Below Legible Threshold
**Severity: Medium**

Line 325–329: `.logo-tag { font-size: 9px; letter-spacing: 0.22em; }` — 9px text is below WCAG's practical readability floor. The word "COACHING" in the nav logo is essentially illegible at small sizes, especially on mobile where nav is already at 64px height. The letter-spacing of 0.22em partially mitigates this but does not solve the 9px baseline problem.

**Recommended fix:** Increase `.logo-tag` to minimum `11px`. The `.about-logo-display .logo-tag` is already set to `11px` on line 346 — apply the same to the nav logo. The `letter-spacing: 0.22em` can remain.

---

### [CTA] "Book a Free Intro Class" vs "Book a Free Intro" — Copy Inconsistency
**Severity: Medium**

Three instances of the primary CTA, three different copy variants:
- Nav CTA (line 1170): "Book a Free Intro"
- Hero primary CTA (line 1232): "Book a Free Intro Class"
- Final CTA section (line 1624): "Book on WhatsApp"
- Mobile menu (line 1189): "Book a Free Intro"

The final CTA "Book on WhatsApp" describes the mechanism, not the offer. A prospect arriving at the bottom of the page ready to convert should be reminded of the value ("free intro"), not the channel.

**Recommended fix:** Standardise to one CTA string across all instances. Recommended: "Book a Free Intro" (short, consistent). Change line 1624 from "Book on WhatsApp" to "Book a Free Intro on WhatsApp" or simply "Book a Free Intro".

---

### [ACCESSIBILITY] FAQ `faq-body` Missing `aria-labelledby` Association
**Severity: Medium**

Lines 1558, 1570, 1582, 1594, 1606: Each `.faq-body` has `role="region"` but no `aria-labelledby` attribute pointing to the corresponding `.faq-trigger` button. A `role="region"` without an accessible name produces an accessibility tree warning and the region will be announced without context to screen reader users.

**Recommended fix:** Add unique IDs to each `.faq-trigger` (e.g. `id="faq-q-1"`) and add `aria-labelledby="faq-q-1"` to the corresponding `.faq-body`. Alternatively, if the landmark region semantics are not needed, remove `role="region"` from `.faq-body` entirely — the accordion pattern works without it.

---

### [CONTENT] Pricing Section Mentions "Certified Fellow DeepGameCoaching Coach" for Home Visits
**Severity: Medium**

Line 1462: The in-person card copy says "For home visits, a certified fellow DeepGameCoaching coach is available at your location." This implies a coaching team or organisation, but the about section describes a solo coach (Adarsh). "Certified fellow DeepGameCoaching coach" is unexplained — who are these other coaches? What are their qualifications? This is either misleading or requires substantiation.

**Recommended fix:** If it's just Adarsh doing home visits, remove this sentence. If there genuinely is a team, name and credential them in the About section. As-is this copy undermines the credibility of the solo-coach personal brand.

---

### [SECTION FLOW] "How It Works" Step 1 Says "Book a Free Intro Call" But Uses a Different Frame
**Severity: Medium**

Lines 1393–1395: Step 1 of "How It Works" is "Book a free intro call — 20 minutes on WhatsApp or Zoom." But this section has an `id="how-it-works"` and the nav links to it. Visitors who click "How It Works" in the nav expect to learn about the coaching methodology, not be redirected to step 1 which is just the CTA again. The "How It Works" section currently answers "what is the onboarding process" — it doesn't answer "how does the coaching itself work."

**Recommended fix:** Rename the section to "Getting Started" or "The Process" (which is already the `section-label` on line 1383) and update the nav link from "How It Works" to "Get Started" or "The Process". Alternatively, add a separate section that explains the actual coaching methodology (session format, tools used, game review process).

---

### [COLOR] `.btn-secondary` Uses Amber on Dark Text — Needs Contrast Check
**Severity: Medium**

Lines 166–174: `.btn-secondary { background: var(--color-secondary); color: var(--color-text); }` — `--color-secondary` is `#F5A623` (amber) with `--color-text` at `#1A1A1A`. Contrast ratio for `#1A1A1A` on `#F5A623` is approximately 5.8:1, which passes WCAG AA for normal text (4.5:1 required) and large text (3:1). However on hover, background changes to `--color-secondary-dark` (`#E09310`), which drops to approximately 4.6:1 — barely passing. The "Book In-Person" button (line 1463) uses this style and is `.btn-secondary` without `.btn-lg`, meaning it renders at `font-size: var(--text-base)` (16px, not "large text"), which makes the 4.5:1 threshold apply on hover. This is borderline and should be tested with an actual contrast checker.

**Recommended fix:** Darken the hover state: change `--color-secondary-dark` from `#E09310` to `#C97F00` to ensure the contrast ratio stays comfortably above 4.5:1 on hover. Alternatively, increase the button font-weight to 700 on secondary (currently 600 via `.btn` base).

---

### [CSS] `.about-logo-display` Applied Twice — Class Collision
**Severity: Medium**

Line 1485: `<div class="logo-wordmark about-logo-display" style="padding:0;gap:4px;">` — the `about-logo-display` class defines `display: flex; flex-direction: column; align-items: center; gap: var(--space-5); padding: var(--space-8)` (lines 333–339). This element then uses inline style `padding:0;gap:4px` to override those values. The `about-logo-display` class was designed for the outer container (line 1483: `<div class="about-logo-display">`), not the inner wordmark. The wordmark div should use only `logo-wordmark` class. The current implementation applies `about-logo-display` to both the parent container and a child element, and the inline style override is a smell indicating an unresolved layout conflict.

**Recommended fix:** Remove `about-logo-display` from line 1485. The `<div class="logo-wordmark">` class alone is sufficient for the wordmark container. Delete the inline style as well.

---

## LOW Issues

---

### [ACCESSIBILITY] `logo.svg` Image Alt Text Is Empty String Throughout
**Severity: Low**

Lines 1155, 1484: `<img src="logo.svg" alt="" ...>` — the logo images in the nav and about section use `alt=""` (empty alt), which marks them as decorative. Since the logo mark accompanies the wordmark text "DeepGame / COACHING", empty alt is technically correct (the text label provides the accessible name). However, the `logo-white.svg` in the footer (line 1639) also uses `alt=""` alongside a wordmark — this is fine. No change required as a strict rule, but if the logo SVG is ever used standalone without adjacent text, alt must be updated. Flag for review when logo usage expands.

**Recommended fix:** Low risk as-is. Document this assumption in code comments so future developers don't strip the adjacent wordmark without updating the alt.

---

### [NAVIGATION] Nav Links Don't Indicate Active Section
**Severity: Low**

Lines 354–373: Nav links have hover states but no active/current state. As the user scrolls through sections, there is no visual indicator of which section they are in. This is a standard pattern for single-page sites using IntersectionObserver.

**Recommended fix:** Add an `active` class to the corresponding nav link when its section is in view, using the existing IntersectionObserver infrastructure (lines 1733–1748). Add `.nav-links a.active { color: var(--color-primary); font-weight: 600; }` to the CSS.

---

### [HERO] Scroll Hint Duplicates the "See How It Works" Ghost CTA
**Severity: Low**

Lines 1241–1244: The `.hero-scroll-hint` element (labelled "Scroll" with a down arrow) visually duplicates the purpose of the `.btn-ghost` "See How It Works" button directly above it. Two scroll prompts in the same viewport is visual noise.

**Recommended fix:** Remove the `.hero-scroll-hint` element or change its positioning so it only appears after the CTA row is fully out of view. The ghost CTA already serves the downward navigation purpose.

---

### [CSS] Unused `.section-muted-2` Class
**Severity: Low**

Line 215–217: `.section-muted-2 { background: var(--color-muted-bg-2); }` is defined and used once (pricing section, line 1428). Not a bug, but `--color-muted-bg-2` is `#F0F7F3` while `--color-muted-bg` is `#E8F5EE` — these are so close in value that the alternation between them is nearly imperceptible to most users. The visual rhythm benefit is minimal.

**Recommended fix:** Consider consolidating to a single muted background variable to simplify the design system. Not urgent.

---

### [JAVASCRIPT] Hero Load Animation Has Redundant Double-Trigger Logic
**Severity: Low**

Lines 1751–1757: The hero animation triggers on `window.addEventListener('load', ...)` and then immediately checks `document.readyState === 'complete'` as a fallback. The fallback fires synchronously when the script runs — but the script is at the bottom of `<body>`, so if `readyState` is already `complete` when the script parses, the `load` event listener on line 1751 will also fire (browsers fire `load` even for already-loaded documents in some contexts). This could result in `classList.add('loaded')` being called twice, which is harmless but redundant.

**Recommended fix:** Simplify to a single conditional: `if (document.readyState === 'complete') { ... } else { window.addEventListener('load', () => { ... }); }`.

---

### [MOBILE] No `aria-hidden="true"` on Hero SVG Pattern
**Severity: Low**

Line 1198–1213: The hero background SVG (`class="hero-pattern"`) has `pointer-events: none` in CSS but no `aria-hidden="true"` attribute in the HTML. Screen readers may attempt to traverse it. The `<defs>` section contains a `<pattern>` and `<radialGradient>` — these are purely decorative.

**Recommended fix:** Add `aria-hidden="true"` to the `.hero-pattern` SVG element (line 1198), the same as is already done for decorative inline SVG icons throughout the page.

---

### [CONTENT] FAQ Section Headline Is Weak
**Severity: Low**

Line 1546: The FAQ headline is "Questions answered" — this is placeholder-level copy. It conveys no value and misses an opportunity to address the anxiety behind the FAQ (e.g., "Everything you want to know before booking").

**Recommended fix:** Change to "Common Questions" or "Before You Book" or "Everything You Need to Know". Takes 10 seconds.

---

### [MISSING SECTION] No Contact Section / Contact Details
**Severity: Low**

The nav has a "Contact" link (line 1167) that anchors to `#contact` — which maps to the `.final-cta` section (line 1618). The "Contact" section is just the final CTA with a WhatsApp button. There is no email address, no phone number displayed as text, no contact form, and no business location. The WhatsApp number `971525203533` is embedded in button hrefs but never shown as readable text. International visitors may not have WhatsApp. Parents of child students often prefer email.

**Recommended fix:** Add at minimum a visible email address and the WhatsApp number as plain text in the final CTA or footer. Consider adding `tel:` link for the phone number. Current footer only shows a WhatsApp icon button without the number visible.

---

## Missing Sections / Elements

These are absent from the page and should be added for a complete coaching site:

1. **Student testimonials / results** — Detailed above. Critical gap.
2. **Coach photo** — Personal photo of Adarsh, not logo. High trust signal for coaching.
3. **Pricing / rates** — Even "starting from" figures are better than nothing.
4. **Session format detail** — How long are sessions? What tools/platforms? What happens in a typical session? Parents especially want this.
5. **Age range / who you coach** — The FAQ mentions "age 6 upward" but this is buried. Surface it in the Who It's For section.
6. **Email contact** — WhatsApp-only contact excludes corporate users and non-WhatsApp regions.
7. **Trial lesson / money-back guarantee** — Standard trust mechanism for coaching services. Even "no obligation free intro" is present but could be elevated as a visual guarantee badge.
8. **Instagram / social links** — Chess coaching is a visual, community-driven activity. An active Instagram showing games, positions, and student moments would be a high-ROI trust builder. Footer has no social links at all.
9. **Schema markup** — No JSON-LD structured data for LocalBusiness or EducationalOrganization. This hurts local SEO for UAE chess coaching searches.

---

## Quick Wins (Under 5 Minutes Each)

1. **Line 1546** — Change "Questions answered" to "Common Questions" or "Before You Book"
2. **Line 1232 / 1170 / 1624** — Standardise all CTA copy to "Book a Free Intro" — change "Book on WhatsApp" on line 1624
3. **Line 1198** — Add `aria-hidden="true"` to the hero pattern SVG
4. **Line 1263** — Change "Lichess Top 6% Globally" pill to "Lichess Blitz Top 6% Globally" for accuracy
5. **Line 1521** — Remove `&nbsp;` from the empty `.stat-card-sub` in the Rapid stat card; replace with the actual percentile or delete the element
6. **Line 1485** — Remove `about-logo-display` class from the inner wordmark div and delete the inline style override
7. **Line 955** — Remove `padding 0.3s ease` from `.faq-body` transition declaration (it's a no-op targeting the wrong element)
8. **Line 325** — Increase `.logo-tag` font-size from `9px` to `11px`
9. **Lines 1558–1610** — Add `id="faq-q-1"` through `id="faq-q-5"` to each `.faq-trigger` and corresponding `aria-labelledby` to each `.faq-body`
10. **Line 1462** — Remove or rewrite "certified fellow DeepGameCoaching coach" sentence if there is no actual coaching team to back this claim
11. **Lines 1751–1757** — Simplify the hero load animation double-trigger to a single conditional block
12. **Footer** — Add the WhatsApp number as visible text (`+971 52 520 3533`) alongside the icon link so users can see and copy it without clicking
