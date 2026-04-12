---
name: Visual Design System — Sams 3PL Solutions
description: Color theory, typography mechanics, layout grids, whitespace, and visual hierarchy rules that govern every page in the Sams 3PL Solutions network. Load this skill whenever designing layouts, composing pages, or evaluating whether a design meets the "award-worthy, never templated" quality bar.
type: design-system
depends_on: 01-brand-system.md
version: 1.0
last_updated: 2026-04-11
---

# Visual Design System

This skill expands `01-brand-system.md` from tokens into applied design. The brand system defines *what* the colors, type, and voice are. This file defines *how* to compose them into layouts that feel intentional, calm, and credible — never templated.

Before designing any page, re-read the quality bar from `MASTER-MANUAL.md`:

> Does this look like a template? (Immediate fail.)
> Would someone stop scrolling to look at this? (Pass.)
> Could this win an award? (Target.)

Every decision below serves that bar. If a rule and the quality bar conflict, the quality bar wins and the rule gets revised.

---

## 1. Design Principles (The Foundation)

These are the ten principles every page must honor. They come from the design literature Tyler uploaded (Norman, Krug, Tognazzini, Nielsen) compressed into actionable form.

1. **Immediate clarity.** Within three seconds, a visitor understands what we do, where we do it, and what to do next. No mystery-meat hero copy.
2. **Visual affordances and signifiers.** Buttons look clickable. Links look linkable. Inputs look fillable. We never rely on hover alone to signal interactivity.
3. **Feedback.** Every interaction produces a visible, immediate response — a hover state, a focus ring, a loading indicator, a success confirmation.
4. **Low cognitive load.** One primary action per view. One idea per section. Anything that isn't earning its place gets cut.
5. **Recognition over recall.** We never ask a visitor to remember something from a previous page. Everything they need is on the screen in front of them.
6. **Scannable layout.** People do not read websites top-to-bottom. They scan in F and Z patterns. Design for scanners first; reward readers second.
7. **Tested conventions over novelty.** Logo top-left, primary nav top, contact in header and footer, phone number clickable on mobile. Break convention only where we have a specific, justified reason — and only in places that reward exploration, not in utility paths.
8. **Error prevention, then recovery.** Forms prevent bad input before they validate it. Destructive actions require confirmation. Error messages tell the user exactly how to fix the problem.
9. **Aesthetic-usability effect.** Beautiful interfaces are perceived as more usable, so beauty is a functional requirement — not decoration. But beauty never comes at the cost of usability.
10. **Alignment and hierarchy are non-negotiable.** Every element on the page belongs to a grid, a rhythm, and a clearly ranked order. Nothing floats. Nothing competes.

---

## 2. Color Theory (Applied)

The brand palette is locked in `01-brand-system.md`. This section defines how to deploy it.

### 2.1 The 60-30-10 rule

Every page obeys a 60-30-10 color distribution:

- **60% dominant** — Sams Off-White (`#F7F4EF`) or Cream (`#FBF9F5`) as the background substrate. This is the canvas. It is calm, warm, and photographic. Pure white is forbidden — it reads as clinical, templated, and cold.
- **30% secondary** — Sams Petrol Blue (`#234B5E`) or Charcoal (`#1A1A1A`) for type, surfaces, footer, and secondary UI. This is the structural color.
- **10% accent** — Sams Brick Red (`#8B1F24`) for the single primary CTA, key emphasis, and selection states. Red is precious. If red appears more than once prominently on a view, the page is wrong.

The city accent color proposed in the brand system lives *inside* the 10% — never replacing red, never competing with it. Think of the city accent as a seasoning, not an ingredient.

### 2.2 Color relationships

Our palette is effectively a **split-complementary** scheme: brick red as the dominant warm, petrol blue as the cool complement, off-white and cream as neutrals that unify both. This is a classically stable, professional relationship that reads as grounded and confident — the opposite of the "trendy SaaS gradient" we are rejecting.

Never introduce a third saturated hue. If a section needs differentiation, use:
1. A lighter or darker shade of an existing palette color, or
2. A city accent (used sparingly, never as a full background), or
3. A photograph (which carries its own color story).

### 2.3 Contrast ratios

Every color combination on every site must pass WCAG 2.2 AA:
- **Normal text (under 18pt / 24px):** minimum 4.5:1
- **Large text (18pt+ / 24px+, or 14pt+ bold):** minimum 3:1
- **UI components and graphical objects:** minimum 3:1

We exceed the minimum wherever possible. Target pairings and their ratios (using the tokens from `01-brand-system.md`):

| Foreground | Background | Ratio | Verdict |
|---|---|---|---|
| Charcoal `#1A1A1A` | Off-White `#F7F4EF` | ~15.3:1 | AAA — body copy default |
| Petrol Blue `#234B5E` | Off-White `#F7F4EF` | ~8.4:1 | AAA — headings, nav |
| Off-White `#F7F4EF` | Brick Red `#8B1F24` | ~9.3:1 | AAA — CTA button text on red fill |
| Off-White `#F7F4EF` | Charcoal `#1A1A1A` | ~15.3:1 | AAA — dark footer text |
| Graphite `#5A5A5A` | Off-White `#F7F4EF` | ~6.7:1 | AA+ — metadata, captions |
| Graphite `#5A5A5A` | Cream `#FBF9F5` | ~6.9:1 | AA+ — secondary text on cards |

**Hard rules:**
- Never place Brick Red text directly on Petrol Blue (fails contrast and reads muddy).
- Never place light-gray text on off-white (looks disabled).
- Never lower opacity below 0.85 on body text — use a lighter ink color instead.
- Selected/focused/hovered states must maintain at least 3:1 against adjacent content.

When in doubt, run the pairing through a contrast checker before shipping.

### 2.4 Semantic color

Beyond brand, each site defines four functional colors that apply consistently across forms, alerts, and feedback:

- **Success:** a muted forest green, never pure `#00FF00`. Target around `#2F6F3C`, AA against off-white.
- **Warning:** a burnt amber, never school-bus yellow. Target around `#B35A00`, AA against off-white.
- **Error:** a deeper, grayer red than brand red, so it cannot be confused with a CTA. Target around `#A11B1F`, AAA against off-white.
- **Info:** a dusted petrol, lighter than the brand petrol. Target around `#3E6C82`, AA against off-white.

These are set as CSS custom properties alongside the brand tokens. Use them only for their semantic purpose — never as decorative accents.

---

## 3. Typography (Applied)

The typeface roster is locked in `01-brand-system.md`: PP Neue Machina for display, PP Neue Montreal for body, Fraunces for editorial/long-form. Self-hosted, `font-display: swap`, preloaded on critical routes.

### 3.1 Modular scale

Every site uses a single modular scale based on the **major-third ratio (1.25)** anchored at a 16px body. This gives enough contrast to feel hierarchical without the "startup splash" feeling of a perfect-fourth or golden-ratio scale.

Canonical CSS custom properties (overridable per-site if needed, but the ratios should not change):

```css
:root {
  --fs-xs:   0.8125rem;   /* 13px — fine print, captions */
  --fs-sm:   0.9375rem;   /* 15px — metadata, small UI */
  --fs-base: 1rem;        /* 16px — body default */
  --fs-md:   1.125rem;    /* 18px — lead paragraphs */
  --fs-lg:   1.4rem;      /* ~22px — subheads */
  --fs-xl:   1.75rem;     /* 28px — H4 */
  --fs-2xl:  2.1875rem;   /* 35px — H3 */
  --fs-3xl:  2.75rem;     /* 44px — H2 */
  --fs-4xl:  3.5rem;      /* 56px — H1 (interior) */
  --fs-5xl:  6rem;        /* 96px — hero display */
}
```

Fluid typography uses `clamp()` between the mobile and desktop endpoints so scale feels continuous, not "breakpoint-snap":

```css
h1 { font-size: clamp(2.25rem, 1.5rem + 3.5vw, 6rem); }
h2 { font-size: clamp(1.75rem, 1.3rem + 2vw, 2.75rem); }
```

### 3.2 Pairing and assignment

- **Display (Neue Machina):** H1 only, occasional oversized stat callout, numeric displays. Tight tracking (`letter-spacing: -0.02em`). Never used for body paragraphs — it is a structural voice, not a reading voice.
- **Body (Neue Montreal):** H2–H6, all body paragraphs, nav, buttons, forms, UI. Default tracking (0). Weight range 400–700.
- **Editorial (Fraunces):** Blog post body on long-form articles, pull quotes, testimonials. Never in navigation or UI. Its serifs earn their place by signaling "this is something to read slowly," which is the opposite of what we want in utility paths.

On any page: **use at most two of the three families.** A hero using Machina + Montreal is correct. A blog article using Montreal + Fraunces is correct. A page using all three is wrong — it flattens the hierarchy we just built.

### 3.3 Line length, line height, rhythm

- **Line length:** 50–75 characters per line for body copy (CSS `max-width: 65ch` is the standard target). Long lines exhaust the reader; short lines fracture the rhythm.
- **Line height:** 1.6 minimum for body (`line-height: 1.65` is our default), 1.15–1.25 for display, 1.4 for H2–H4.
- **Paragraph spacing:** 1em of space between paragraphs. Never indent first lines on web — that's a print convention that reads as dated online.
- **Vertical rhythm:** Space between sections is always a multiple of the 8px base unit (see §4). Text "baselines" sit on a loose 8px grid — strict baseline grids are a print ideal that fight fluid web type.

### 3.4 Microtypography

These are the details that separate "nicely designed" from "obviously crafted":

- **Smart quotes.** Always `"` and `"` and `'` — never straight quotes. Astro/MDX should be configured to auto-replace.
- **Em dashes, en dashes, hyphens** used correctly. Em dash for interruption (—), en dash for ranges (2020–2025), hyphen for compound words (full-service).
- **Non-breaking spaces** between numbers and units (`24/7`, `48 hours`, `419 745-9492`). Use `&nbsp;` or `\u00A0`.
- **Ligatures** enabled (`font-feature-settings: "liga", "kern"`).
- **Tabular numerals** on any stat block or table (`font-variant-numeric: tabular-nums`).
- **Hanging punctuation** on pull quotes where the typeface supports it.
- **No widows and orphans** on H1/H2. Use `text-wrap: balance` on headings (supported in all modern browsers per 2025).
- **Never use `text-transform: uppercase` without `letter-spacing: 0.04em` minimum.** Raw uppercase cramps every typeface.

### 3.5 Alignment

- Left-aligned for all body copy, headings, and UI labels. Left-alignment is the only alignment that respects a ragged-right edge's readability on screen.
- Justified text is forbidden on the web — it creates rivers and hurts scanability.
- Centered text is allowed only for: hero display headlines (when paired with a centered button and no more than two lines), short section introductions (≤2 lines), and full-bleed quote cards. Never for paragraphs longer than three lines.

---

## 4. Layout and Grid

### 4.1 The 8-point base

Every spacing, size, and offset on every site is a multiple of **8px** (with 4px permitted as a sub-step for tight UI like form internals). This is the "8-point grid system" used by every modern design system worth copying. It eliminates decision fatigue and makes consistency easy.

Spacing tokens:

```css
:root {
  --space-0:  0;
  --space-1: 0.25rem; /* 4px  — only for tight UI internals */
  --space-2: 0.5rem;  /* 8px  */
  --space-3: 0.75rem; /* 12px */
  --space-4: 1rem;    /* 16px */
  --space-5: 1.5rem;  /* 24px */
  --space-6: 2rem;    /* 32px */
  --space-7: 3rem;    /* 48px */
  --space-8: 4rem;    /* 64px */
  --space-9: 6rem;    /* 96px */
  --space-10: 8rem;   /* 128px — section separation on desktop */
  --space-11: 12rem;  /* 192px — hero breathing room */
}
```

### 4.2 The 12-column container

The outer layout is a 12-column grid with **24px gutters** on desktop, **16px gutters** on mobile. Content max-width is **1280px** on desktop (never wider — longer lines hurt reading, and design ambition shouldn't require more canvas than a Bauhaus poster).

Common column spans:
- Full-bleed hero: 12 cols (+ negative margin to break the container on one or both sides for photographic impact).
- Two-column feature: 7 + 5 (asymmetric, more interesting than 6 + 6).
- Three-column card row: 4 + 4 + 4.
- Editorial article: 8-column column starting at column 3 (centered with breathing room).
- Sidebar layout: 8 + 4 (content + aside).

**Never use a perfectly symmetric 6 + 6 split for feature sections.** It reads as a template. Use 7 + 5 or 8 + 4 and let the asymmetry carry interest.

### 4.3 Breakpoints

```css
/* Mobile-first. Write base styles for 320px, then scale up. */
@media (min-width: 48em)  { /* 768px — tablet */ }
@media (min-width: 64em)  { /* 1024px — desktop */ }
@media (min-width: 80em)  { /* 1280px — large desktop */ }
@media (min-width: 96em)  { /* 1536px — ultrawide cap */ }
```

Design for 375px (typical iPhone), 768px, 1280px, and 1536px as the four primary canvases. Everything between should interpolate without breaking.

### 4.4 Section rhythm

Vertical space between top-level sections on a long page:
- Desktop: `--space-10` (128px) top and bottom padding per section.
- Tablet: `--space-9` (96px).
- Mobile: `--space-8` (64px).

Inside a section, between a heading and its first block: `--space-6` (32px). Between sub-blocks: `--space-5` (24px). This creates a clear breathing pattern: **big air between sections, measured air within**.

### 4.5 The rule of thirds and focal weight

For hero compositions and feature sections with photography, place the primary focal element at one of the four thirds-intersection points — not dead center. Dead-centered compositions read as stock-photo collage. Off-center compositions read as photography.

For type + image pairings, the headline's optical weight should balance the image's visual weight on the opposite third. Symmetry of weight, asymmetry of placement.

---

## 5. Whitespace (The Most Important Tool We Have)

Whitespace is not empty. It is the single most powerful signal of quality in the entire visual system — nothing else separates "cheap template" from "intentional design" more cleanly.

### 5.1 Macro whitespace

Between sections, above and below headings, around the hero, around CTAs. This is where the page breathes. Default to **more than feels necessary**, then pull back only if it creates a genuine pacing problem.

A reliable test: if the page feels "too spaced out" on first review, it's probably close to right. If it feels "dense and efficient," it's almost certainly wrong and reads as templated.

### 5.2 Micro whitespace

Between a label and its input. Between an icon and its text. Between list items. Between a number and its unit. This is where craft lives. Every micro-gap should be an 8-point value (4px only when truly necessary) and should feel consistent across the site.

### 5.3 Whitespace and cognitive load

Whitespace directly reduces cognitive load by:
1. Grouping related elements (proximity = relationship, per Gestalt).
2. Separating unrelated elements (so the eye doesn't have to filter them).
3. Guiding the eye along the intended reading path.
4. Giving the brain visible "rest points" so long content feels navigable.

**Don't fill whitespace because it "looks empty."** Empty is the point.

### 5.4 The "one idea per section" rule

Every section on a long page should communicate exactly one idea. If you cannot name the section's idea in five words or fewer, the section has too much in it — split it. Whitespace between well-separated single-idea sections is what creates that "elegant, confident" pacing that elite sites share.

---

## 6. Visual Hierarchy (The Eye Path)

Hierarchy is the discipline of making the eye move in the order you want, at the pace you want. We build it with six tools:

### 6.1 Size

Biggest element = first thing seen. The hero H1 is always the largest type on the page, by a clear margin (ratio of at least 2× over the next-largest text). No other text should ever compete with H1 for first-look priority.

### 6.2 Weight

Bold is a tool, not a default. Use weight to distinguish:
- H1/H2 headings (Machina 700 / Montreal 700)
- Button labels (Montreal 600)
- Data emphasis inside paragraphs (Montreal 600, used sparingly — no more than 2 emphases per paragraph)

Never set body copy to semibold as a "makes it pop" shortcut. It flattens hierarchy and makes real emphasis invisible.

### 6.3 Color

Within the palette, brick red is the highest-priority signal in the visual system. It must never be wasted. Reserve it for:
1. The single primary CTA on the page ("Connect," "Get a Quote," etc.)
2. One key emphasis word in the hero headline (optional — use ≤1 per page)
3. Selection and focus states in interactive UI

Petrol blue is the secondary signal — used for H1/H2 text, nav current-state, and section underlines. Charcoal is the neutral-but-present signal for body text. Graphite is the "supportive but not competing" signal for metadata.

### 6.4 Position

Top is higher-priority than bottom. Left is higher-priority than right (in left-to-right reading languages). The top-left third of the viewport is the most valuable real estate on the page — put the most important thing there.

The **F-pattern** describes how people scan text-heavy pages: two horizontal sweeps across the top, then a vertical sweep down the left edge. Design text-heavy content to reward this pattern: strong headline, strong subhead, bullets or short paragraphs with frontloaded keywords, a strong call to action near the top of the left rail.

The **Z-pattern** describes how people scan image-light or hero-style layouts: top-left → top-right → diagonal to bottom-left → bottom-right. Hero sections should place the logo top-left, nav/phone top-right, headline and CTA along the diagonal, and a secondary action or social proof at bottom-right.

Use the pattern that matches the content type. Don't force one onto the other.

### 6.5 Proximity

Elements that belong together sit close together. Elements that don't, don't. This is the single most violated rule on amateur sites — forms with labels floating far from inputs, captions drifting from images, buttons orphaned from the copy that introduces them. Fix proximity first; everything else improves automatically.

### 6.6 Alignment

Every element on the page aligns to something — the grid, another element's left edge, an optical midline. "Close enough" alignment is always wrong. If two elements are meant to share a left edge, they share the exact same left edge, pixel for pixel.

A useful test: draw imaginary vertical lines down the page from every left edge. Count the distinct lines. If there are more than four or five, the page has an alignment problem.

---

## 7. Components and Patterns (Visual Standards)

These are visual specifications. Interaction behaviors live in `03-ui-ux-principles.md`.

### 7.1 Buttons

- **Primary (brick red):** Filled `#8B1F24`, off-white text, 48px min height, 20px–28px horizontal padding, 2px border-radius (almost square — matches the industrial brand), 600 weight, 15–16px text. Used only for the single most important action on a view.
- **Secondary (petrol outline):** Transparent fill, 1.5px petrol blue border, petrol blue text, same dimensions as primary.
- **Tertiary (text link with arrow):** No border, no fill, petrol blue underlined text with a trailing `→` that shifts 4px right on hover.
- **Hover:** Primary darkens 10% and gains a subtle shadow. Secondary fills with petrol blue. Tertiary's arrow advances.
- **Focus:** All buttons show a 3px solid petrol blue focus ring with a 2px offset from the button edge — visible on both mouse and keyboard focus per WCAG 2.2 AA.
- **Disabled:** Filled graphite, 60% opacity on label — never used for primary CTAs (disable by removing the button or showing a help message instead).

### 7.2 Form inputs

- 48px minimum height (mobile touch target).
- Labels always visible above the field, never floating or placeholder-only.
- 1.5px petrol border, off-white fill, charcoal text, 16px text (prevents iOS auto-zoom).
- Focus: brick red 2px border + subtle petrol outer glow.
- Error: error red 2px border + inline message below the field in error red, prefixed with the field name so assistive tech makes sense of it.
- Required fields marked with a red asterisk AND an `aria-required="true"` — never by red label alone.

### 7.3 Cards

- Cream fill (`#FBF9F5`), 1px fog border, 4px radius, subtle shadow only on hover (`0 4px 16px rgba(26, 26, 26, 0.08)`).
- Internal padding: 32px desktop, 24px mobile.
- Content hierarchy: eyebrow metadata (graphite 13px) → headline (petrol 22–28px) → body (charcoal 16px) → action (tertiary link).

### 7.4 Navigation

- Desktop: logo left, primary nav center-right, phone number + Connect CTA far right. 80px tall header, sticky on scroll with a translucent off-white background (`backdrop-filter: blur(8px)`) and a 1px fog bottom border once scrolled.
- Mobile: logo left, hamburger right. Phone number always visible in a secondary utility strip above or below the main header — so the fastest path to conversion is one tap.
- Current page: petrol underline that animates on hover for other items.

### 7.5 Footer

- Charcoal background, off-white text.
- Full address + hours + phone + email, schema-marked up.
- Sitemap in columns.
- Legal (privacy, accessibility statement, terms) in a muted row at the bottom.
- "A Sams 3PL Solutions Company" lockup with the network wordmark.

---

## 8. Motion and Transitions

Motion must always serve meaning. Decorative motion is slop.

### 8.1 Principles

- **Purpose:** Every animation answers a question like "what just happened?", "where did that come from?", "where is this going?", or "is this element real?" If it answers none of those, delete it.
- **Speed:** 150–250ms for UI feedback (hovers, focus, small reveals). 300–500ms for content reveals. Never slower than 600ms — attention degrades.
- **Easing:** Use `cubic-bezier(0.2, 0.8, 0.2, 1)` (a gentle ease-out) for almost everything. Never use linear easing except for loading indicators.
- **Reduced motion:** Honor `prefers-reduced-motion: reduce` for every non-essential animation. Disable parallax, entrance animations, and auto-playing decorative motion. Keep only the essential feedback (focus rings, error shakes at minimal amplitude).

### 8.2 Allowed motion patterns

- Fade + rise (16px translate) on sections entering the viewport.
- Image parallax at ≤15% of scroll delta, disabled on reduced-motion.
- Hover lift on cards (2–4px translate-y, shadow softens in).
- Menu transitions (200ms fade + slide).
- Button press (95% scale for 80ms).

### 8.3 Forbidden motion patterns

- Autoplay carousels (per non-negotiable #17 — banned entirely).
- "Counter-up" animated numbers on load (feels gimmicky, hurts LCP).
- Particle backgrounds.
- Confetti.
- Any motion that cannot be paused by the user when it uses more than 5 seconds of attention.

---

## 9. Visual Language for Logistics (Subject-Matter Discipline)

Most logistics sites default to the same visual clichés: blue globes, truck silhouettes, shipping-container iconography over a gradient, the word "SOLUTIONS" in all caps. All of it reads as templated.

Our visual language instead draws from:

- **Real photography** of the actual facility, team, loading dock, yard, and city. Never stock trucks. Never stock "handshake over a warehouse." See `09-photography-and-imagery.md` for sourcing rules.
- **Typography-first compositions** where a bold display headline and a single photograph are the entire hero — no decorative ornaments, no background patterns, no "animated blob."
- **Data presented honestly.** If we have real numbers (square footage, dock count, SKUs managed), we show them in typographic displays with tabular figures. If we don't, we don't invent "100+ happy customers" filler stats.
- **Industrial materiality in color and texture.** Brick red and petrol blue reference painted steel and enameled signage — physical, durable things. Off-white and cream reference kraft paper and warehouse light. Lean into these associations rather than fighting them with "tech SaaS" gradients.

The "Detroit runs on grit. Your supply chain should too." hero (documented in `01-brand-system.md`) is the textbook execution. The visual system should always feel like a continuation of that sentence.

---

## 10. Self-Check Before Shipping Any Page

Before considering a design done, run this checklist. If any answer is "no" or "not sure," iterate.

1. Can a first-time visitor tell what this business does within three seconds of landing?
2. Is there exactly one primary CTA visible above the fold, in brick red, easily tappable?
3. Does every text pairing pass at least 4.5:1 contrast (3:1 for large text and UI)?
4. Is every spacing value a multiple of 8px (4px only for tight UI internals)?
5. Do body paragraphs sit at 50–75 characters per line?
6. Is there at least one real photograph in the hero, owned or properly licensed?
7. Are all text blocks left-aligned (with centered exceptions only where allowed)?
8. Is there measurably more whitespace than "feels efficient"?
9. Does a keyboard user see a visible focus ring on every interactive element?
10. Does the page read as a continuation of "A Sams 3PL Solutions Company" — not a standalone brand fighting the network?
11. Does the page avoid every visual cliché from §9 (globe, stock handshake, gradient blob, autoplay carousel)?
12. Does the page pass the three quality-bar questions at the top of this file?

A page that passes all twelve is shippable. A page that passes ten is not.

---

## 11. Sources

This skill distills the applied-design portions of:

- Don Norman, *The Design of Everyday Things* (affordances, signifiers, feedback, error prevention)
- Steve Krug, *Don't Make Me Think* (scannability, conventions, cognitive load)
- Bruce Tognazzini, *First Principles of Interaction Design* (visibility, forgiveness, consistency)
- Nielsen Norman Group articles on F-pattern, Z-pattern, visual hierarchy, and whitespace
- Material Design and Apple HIG spacing/touch-target standards
- WCAG 2.2 AA color contrast requirements
- Tyler's uploaded UI/UX articles covering 60-30-10 color, modular scales, golden ratio and its limits, and type pairing

Any rule above that appears to contradict a specific source is intentional — we have adapted general principles to Tyler's non-negotiables and the Sams 3PL Solutions brand. When in doubt, re-read `MASTER-MANUAL.md` and `01-brand-system.md` before `02-visual-design.md`.

---

**End of Visual Design System.** Next skill to load for any page build: `03-ui-ux-principles.md` (interaction, usability laws, and component behavior).
