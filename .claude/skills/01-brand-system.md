---
name: Sams 3PL Solutions — Brand System
description: Foundational identity guidelines covering the company name, logo, color palette, typography, voice, tone, and contact information shared across every site in the Sams 3PL Solutions network. Every other skills.md file references this one. Load this file first on any new build.
type: brand-system
applies_to: all Sams 3PL Solutions network websites
version: 1.0
last_updated: 2026-04-11
---

# Sams 3PL Solutions — Brand System

This is the foundational brand identity skill for the Sams 3PL Solutions network of city-specific logistics websites. Every site in the network inherits these rules. City-level character (see `12-city-character-injection.md`) builds on top of this foundation — it never replaces it.

> **Canonical rule:** When in doubt, consistency across the network wins. Uniqueness lives at the city layer, not the brand core.

---

## 1. Company Name — Written Form

**Canonical written form: `Sams 3PL Solutions`**

- **NO apostrophe** in "Sams." This is a hard rule, confirmed by Tyler on 2026-04-11.
- When referring to a specific network location, use the pattern: `[City] 3PL` (e.g., `Toledo 3PL`, `Huntsville 3PL`, `New York 3PL`). In formal contexts, expand to `[City] 3PL — A Sams 3PL Solutions Company`.
- Never write "Sam's 3PL" or "Sam's 3PL Solutions" in body copy, meta tags, schema markup, or legal pages.

**Examples:**

| ✅ Correct | ❌ Wrong |
|---|---|
| Sams 3PL Solutions | Sam's 3PL Solutions |
| A Sams 3PL Solutions Company | A Sam's 3PL Solutions Co. |
| Huntsville 3PL | Huntsville3PL (in body copy — OK as domain `huntsville3pl.com`) |
| Sams 3PL Solutions' Miami-Dade facility | Sam's 3PL's Miami facility |

The only acceptable possessive is to add an apostrophe-s *after* the full name: "Sams 3PL Solutions's warehouses" — though it's usually cleaner to rewrite ("warehouses operated by Sams 3PL Solutions").

---

## 2. Logo System

### 2.1 The primary mark

The Sams 3PL Solutions logomark is a **shield containing the hand-drawn wordmark "SAM'S" above a vanishing-point highway graphic**. The shield color is a deep brick red; the highway is dark teal/petrol blue and white; the wordmark is white; the shield is outlined in white.

**Important typographic distinction:** The logomark wordmark reads "SAM'S" **with an apostrophe**. The written brand name is "Sams" **without** an apostrophe. This is an intentional distinction between the stylized logo artifact and the typed brand name. **Do not "fix" either to match the other.** The logo is a drawn artifact — treat it like a signature. The name is typeset text — treat it like any other word.

### 2.2 Usage rules

- **Always present the logo on a background that preserves its contrast.** Preferred backgrounds: white, near-white cream, charcoal, near-black, or the brand's dark teal. Never place the shield on its own red — the shield will disappear.
- **Minimum clear space around the logo equals the height of the "S" in the wordmark.** Never crowd it with other elements.
- **Minimum rendered width: 48 px** on screen. Below that, the wordmark becomes illegible. For favicons and tiny placements, use a shield-only version (no wordmark).
- **Never rotate, shear, add drop shadows, recolor, outline, or apply filters.** The logo is fixed. If a new treatment is needed (e.g., a monochrome version for a single-color print), produce it as a separate approved asset — don't re-render on the fly.
- **Never place text directly over the shield.** If the logo needs to appear in a composition with text, leave the clear-space zone around it untouched.
- **On the site navigation bar:** the logo appears on the far left, with the phrase `A Sams 3PL Solutions Company` set in smaller type immediately beneath it. The pairing of the shield + this tagline is the standard network identification (Non-Negotiable #22).

### 2.3 Alt text standard

Every placement of the logo in HTML must include this alt text (or the city-specific variant):

```html
<img src="/brand/sams-3pl-shield.svg"
     alt="Sams 3PL Solutions logo — a red shield with a vanishing-point highway graphic"
     width="..." height="...">
```

For the city-branded lockup (shield + "A Sams 3PL Solutions Company"):

```html
<img src="/brand/huntsville-3pl-lockup.svg"
     alt="Huntsville 3PL, a Sams 3PL Solutions Company"
     width="..." height="...">
```

Alt text is for accessibility *and* for LLM crawlers that don't render images. Keep it factual and brand-true.

---

## 3. Color System

### 3.1 Network-wide core palette

These three colors are the Sams 3PL Solutions network anchor. Every city site in the network must use all three in a recognizable way so that the network reads as cohesive (Non-Negotiable #25: "always tie-back some set of colors so that each website, no matter the different location, has a distinct color swatch somewhere that distinguishes the Sams 3PL Solutions network"). City-specific accent colors layer on top but do not replace these three.

| Role | Name | Approximate Hex | Usage |
|---|---|---|---|
| Primary | Sams Brick Red | `#8B1F24` | Shield, primary CTA base color, accent emphasis, heading color for emphasis moments |
| Secondary | Sams Petrol Blue | `#234B5E` | Highway graphic color, body text on light backgrounds, secondary buttons, footer background |
| Neutral | Sams Off-White | `#F7F4EF` | Preferred page background (softer than pure white — feels less sterile, more editorial) |

**⚠️ Action item for Tyler:** These hex values are **approximate** — derived from visual inspection of the logo image, not pixel-sampled from the source file. Before you ship the first site, open the source logo in a color-picker tool (Figma, Pixelmator, or even macOS Digital Color Meter) and lock in the exact hex values. Then update this skill file with the measured values. The approximations above will get you 95% there, but the last 5% matters for brand precision.

### 3.2 Extended neutrals (derived)

These fill out the system for UI states, typography, and depth:

| Role | Name | Hex | Usage |
|---|---|---|---|
| Deep text | Charcoal | `#1A1A1A` | Body copy on light backgrounds, headings in default state |
| Muted text | Graphite | `#5A5A5A` | Secondary copy, captions, metadata |
| Border / rule | Fog | `#D8D4CD` | Dividers, borders on off-white backgrounds, input outlines |
| Surface / card | Cream | `#FBF9F5` | Card backgrounds on off-white pages (one tone lighter than the page background to create lift) |
| Inverse page | Midnight | `#0E1A22` | Dark-mode pages, footer, splash sections (a near-black tinted toward petrol blue for harmony) |

### 3.3 CTA contrast rules (Non-Negotiable #16)

The primary "Connect" CTA must be **ruthlessly higher-contrast than everything else on the page**. Use this pattern:

- **Button background:** Sams Brick Red (`#8B1F24`)
- **Button text:** Sams Off-White (`#F7F4EF`)
- **Button border/shadow:** optional 2px Charcoal (`#1A1A1A`) outer drop shadow for lift (not a glow — a hard shadow)
- **On hover:** brighten the red by 8–12% (e.g., `#A62A30`) and add a 2px upward translate. Never use a soft fade — use a crisp, instant shift.
- **On focus (keyboard):** add a 3px Sams Petrol Blue (`#234B5E`) focus ring offset 2px from the button. This is mandatory for WCAG 2.2 AA compliance (see `04-accessibility-wcag22aa.md`).

**Contrast ratio check:** Brick Red `#8B1F24` on Off-White `#F7F4EF` is approximately 9.3:1 — exceeds AA (4.5:1) and meets AAA (7:1). ✅

**Never dilute the primary CTA** with tinted backgrounds, gradient fills, glassmorphism, or low-opacity washes. The button is loud on purpose. It's the single most valuable pixel on the page.

### 3.4 City accent layer

Each city site gets **one accent color** drawn from the city's character — a harbor hue, a local landmark, a port sunset, a regional flag, etc. The accent color:

- Must pass WCAG 2.2 AA contrast checks when used for text (4.5:1 on off-white background).
- Must not compete with the primary brick red. If the accent is itself a red, shift it to a different hue (burgundy, copper, terracotta, brick-orange) to preserve the primary CTA's distinction.
- Appears in no more than 10% of the visual surface area. It's an accent, not a co-primary.
- Is documented in the city research brief (`city-research-brief-TEMPLATE.md`) with a rationale tying it to the city's identity (the port's flag, the local landmark, the sports team's historic jersey, etc.).

**Example city accents (to be confirmed per city):**

- Toledo, OH — Lake Erie steel blue (`#3E6B7A`)
- Huntsville, AL — Saturn rocket silver-graphite with cosmic navy accent (`#1C2541`)
- Miami-Dade, FL — Warm coral sunset (`#E8826B`)
- Houston, TX — NASA mission-control amber (`#D4923D`) — NOTE: the existing Houston site already uses electric cyan with a sci-fi theme; see the competitive self-audit in the Master Manual for the guardrail on gimmick-vs-craft.
- Seattle, WA — Puget Sound moss green (`#4C6E5D`)
- Boston, MA — Harbor brick (`#7A3E2C`) — careful not to compete with primary red; shift toward brown.
- New York, NY — Midtown graphite with copper statue accent (`#B27E4E`)
- Savannah, GA — Spanish moss olive (`#5E6E3E`)
- Charleston, SC — Rainbow Row pastel pink as a micro-accent only (`#D99CA0`)
- Detroit, MI — Automotive steel with red brick (`#6F4F3A`) — note Detroit already uses grit-forward voice; lean into industrial warmth
- Chattanooga, TN — Appalachian deep green (`#2F5233`)
- Baltimore, MD — Harbor teal (`#2F5C6E`)

These are **starting proposals** — each city's accent is finalized during the city research brief phase.

---

## 4. Typography System

### 4.1 Network-wide type stack

The Sams 3PL Solutions network uses a three-role typographic system sourced entirely from indie foundries with free commercial-use licensing (Non-Negotiable #26: "never use a font that I can source from any standard list"). No Google Fonts top-10. No system fonts. No Roboto, Open Sans, Lato, Montserrat.

| Role | Font | Foundry | License | Weights used |
|---|---|---|---|---|
| Display (big headlines) | **PP Neue Machina** | Pangram Pangram | Free (Pangram Pangram Fraktional free tier) | Regular, Ultrabold |
| Body (paragraphs, UI) | **PP Neue Montreal** | Pangram Pangram | Free | Regular, Medium |
| Editorial (long-form, blog) | **Fraunces** | Undercase Type | SIL Open Font License (free) | Regular, Semibold, Italic |

**Why this stack:**

- **PP Neue Machina** — a bold, geometric, almost-architectural display face. Its sharp terminals and industrial confidence match the logistics + shield-mark identity. Used for H1/H2 and any moment that needs weight and swagger.
- **PP Neue Montreal** — a clean modern workhorse sans with enough character to feel contemporary but enough neutrality to be readable at small sizes. Used for body copy, UI labels, buttons, nav.
- **Fraunces** — a variable serif from Undercase Type. Flexible (variable axes for weight, optical size, softness, and a "wonk" axis for quirky drop-caps). Used for blog post body, long-form explanatory sections, and editorial moments that need warmth.

**⚠️ Action item for Tyler:** Before shipping, download the three fonts from:

- Pangram Pangram: https://pangrampangram.com (check "Free Fonts" section — specifically the PP Neue Machina and PP Neue Montreal free weights; confirm license for commercial use at the time of download)
- Fraunces: https://fonts.google.com/specimen/Fraunces (it IS on Google Fonts, but it's an Undercase Type family not in the Roboto/Open Sans popularity tier — it reads as editorial, not generic)

Host the fonts locally from your Astro project (`/public/fonts/`) rather than linking to a CDN. This improves performance (see `06-performance.md`) and ensures long-term stability if a CDN changes or goes down.

### 4.2 Per-city display font swap

Each city site may swap **PP Neue Machina** for a different display face that reflects the city's character — as long as the body font (PP Neue Montreal) and editorial font (Fraunces) stay the same. This creates a **family-resemblance effect**: every site reads as part of the network, but the headline voice varies by city.

Examples of approved alternate display faces (all indie foundry, free):

- **Redaction** (Forest / Oh no Type Co.) — for cities that want a newsprint, editorial vibe (New York, Boston)
- **Cirka** (Pangram Pangram free weights) — a modern serif display for cities that want elegance (Charleston, Savannah)
- **Space Grotesk** (Florian Karsten, free, variable) — for tech-forward or aerospace cities (Huntsville, Seattle)
- **PP Mori** (Pangram Pangram) — for restrained, architectural cities (Chattanooga)
- **PP Editorial New** (Pangram Pangram free weights) — for premium editorial feel (New York, Miami)

Forbidden even as alternates: Montserrat, Open Sans, Lato, Roboto, Poppins, Inter, Nunito, Source Sans Pro, Raleway, Merriweather, Playfair Display, Oswald, PT Sans, or any font that appears on a "top 10 Google Fonts" list. If you see it on dozens of random SaaS landing pages, it's disqualified.

### 4.3 Type scale

Use a modular scale based on the major-third ratio (1.25) anchored at a 16px base. This creates harmonious size relationships across the whole site without guessing.

| Token | Size (px) | Size (rem) | Line height | Used for |
|---|---|---|---|---|
| `--fs-xs` | 13 | 0.8125 | 1.4 | Captions, metadata, form hints |
| `--fs-sm` | 14 | 0.875 | 1.45 | Small UI text, footer links |
| `--fs-base` | 16 | 1.0 | 1.6 | Body copy (default) |
| `--fs-md` | 18 | 1.125 | 1.55 | Lead paragraphs, large body |
| `--fs-lg` | 22 | 1.375 | 1.4 | Small headings, card titles |
| `--fs-xl` | 28 | 1.75 | 1.3 | H3 |
| `--fs-2xl` | 36 | 2.25 | 1.2 | H2 |
| `--fs-3xl` | 48 | 3.0 | 1.15 | H1 (interior pages) |
| `--fs-4xl` | 64 | 4.0 | 1.1 | Homepage hero H1 |
| `--fs-5xl` | 96 | 6.0 | 1.0 | Display moments (rare, for impact) |

On mobile, shrink the scale by one step for `--fs-3xl` and above (use `clamp()` in CSS for fluid sizing). See `02-visual-design.md` for the responsive rules.

### 4.4 Readability non-negotiables

- **Body line length: 50–75 characters per line** (≈ 580–680px container width for 16px body text on most fonts). Never let paragraphs stretch full-width on desktop.
- **Line height for body: 1.6** minimum. Don't compress.
- **Paragraph spacing: 1em** between paragraphs (blank line). Never 0.
- **Minimum body font size: 16px.** Never smaller for primary content. 14px is acceptable only for true captions and legal.
- **All caps sparingly.** Only for labels, micro-headings, and short nav items. Never for body copy or long headlines (kills readability). When you do use all caps, add 0.05em letter-spacing to compensate.
- **Italic for emphasis, not bold**, inside body copy. Bold is reserved for UI labels and occasional strong emphasis.

### 4.5 Font loading strategy

Performance-critical. See also `06-performance.md` and `07-astro-cloudflare-stack.md`.

- Self-host all three fonts under `/public/fonts/` as `.woff2` files.
- Use `font-display: swap` to prevent render-blocking.
- Preload only the 2–3 weights used above the fold (typically PP Neue Machina Ultrabold for H1, PP Neue Montreal Regular for body, and nothing else):

```html
<link rel="preload" href="/fonts/pp-neue-machina-ultrabold.woff2" as="font" type="font/woff2" crossorigin>
<link rel="preload" href="/fonts/pp-neue-montreal-regular.woff2" as="font" type="font/woff2" crossorigin>
```

- Define `@font-face` rules in a single CSS file and inline that file in the Astro `<head>` for faster first paint.
- **Never** load fonts from Google Fonts' CDN, Adobe Fonts, or any third-party CDN. Self-hosted only — this is both a performance rule (saves round-trips) and a privacy rule (no third-party font tracking that would require an extra line in the cookie banner).

---

## 5. Voice and Tone

### 5.1 The Sams 3PL voice

Tyler described the brand voice on 2026-04-11 as: *"approachable yet firmly knowledgeable and precise, with a sprinkle of street smarts. You can't live life without having some fun and crushing the game at the same time."*

Unpacked into working rules:

- **Approachable.** Plain-English sentences. Short words when possible. No MBA jargon. No "leverage synergies." No "best-in-class world-class solutions provider." The person reading is running a loading dock or a purchasing desk — talk to them like a competent peer, not like a press release.
- **Firmly knowledgeable.** We know our industry cold. We can name-drop the Port of Savannah's container throughput, the Detroit-Windsor tunnel toll structure, the FTZ #29 boundaries in Baton Rouge. When we cite numbers, they are real and verifiable. Vague hedges ("significant savings," "best-in-class uptime") are banned — specificity is trust.
- **Precise.** Dates, dollars, dimensions, deadlines. When we say "500K square feet," we mean 500,000. When we say "99.8% order accuracy," we can prove it. When we say "24/7 operations support," we mean a human answers the phone at 3 AM.
- **Sprinkle of street smarts.** Occasional wry observation, a dry joke, a turn of phrase that signals we've seen some stuff. Not jokes for jokes' sake — the street smarts show up when we cut through industry BS and name the thing everyone else is pretending not to see.
- **Fun + crushing it.** The brand is confident enough to crack a half-smile without losing authority. Think: an experienced operations director who's seen every supply chain failure mode and now runs their warehouse like a jazz ensemble. Competent and human.

**The Detroit tagline is the voice textbook example:**

> *Detroit runs on grit. Your supply chain should too.*

Short. Local. Declarative. Street-smart. Implies a standard without lecturing. Sets up the value prop by analogy. This is the bar.

### 5.2 Things we never say

- "Solutions provider" (self-referential, meaningless)
- "Best-in-class" unless backed by a specific, measured claim
- "World-class" without evidence
- "Synergy," "leverage" (as a verb), "ecosystem" (unless it's literally a port ecosystem)
- "We're passionate about logistics" — nobody believes this, show it instead
- "Revolutionary," "disruptive," "cutting-edge," "next-generation" — all weasel words
- "Partner" as a verb ("we partner with you")
- "Thought leader" — if you have to say it, you're not

### 5.3 Things we love saying

- Specific numbers: "500K sq ft under roof," "99.8% dock-to-stock in under 4 hours," "47 minutes to FTZ #82 from our Huntsville ramp"
- Local geography: "three miles from the Port of Savannah's Garden City Terminal," "a straight shot up I-81 to the Appalachian freight corridor"
- Verbs of action: "handle," "route," "stage," "ship," "clear," "cross-dock," "stretch-wrap," "break bulk"
- Direct statements of reliability: "No surprises. No finger-pointing. One phone number, one team, one answer."
- Soft humor that signals experience: "Your 4 PM emergency doesn't care what our Friday plans are."

### 5.4 Tone calibration by page type

| Page | Tone |
|---|---|
| Homepage | Declarative, confident, scannable. Biggest voice moment on the site. |
| Services | Precise and operational. Here is what we do, here are the numbers, here is the proof. |
| Industries | Empathetic and informed — "we know your world." Lean into industry-specific vocabulary. |
| Port of / City | Proud and knowledgeable — we are locals who know the place. Minimal pitch. |
| About | Human. Honest. The story of the company and the network. A little street smart. |
| Blog | Editorial. Sources cited. See `10-blog-system.md` for the full voice rules. |
| Contact / Connect | Warm, low-friction, reassuring. "Somebody will actually answer." |

---

## 6. Contact Information (Standardized Across All Sites)

These values are **constants** across every site in the network. They never change per city. They should be stored in a single `src/config/brand.ts` file in each Astro project and referenced everywhere — never hard-coded into individual pages.

```ts
// src/config/brand.ts
export const brand = {
  name: "Sams 3PL Solutions",
  tagline: "A Sams 3PL Solutions Company",
  phone: {
    display: "+1 (419) 745-9492",
    href: "tel:+14197459492",
  },
  email: {
    display: "info@sams3plsolutions.com",
    href: "mailto:info@sams3plsolutions.com",
  },
  hours: "24/7 Operations Support",
} as const;
```

### 6.1 Hard rules

- **Phone number:** `+1 (419) 745-9492` — displayed exactly in that format, with the `+1` country code and US phone formatting (Non-Negotiable #33). Always rendered as a clickable `tel:` link (Non-Negotiable #35).
- **Email:** `info@sams3plsolutions.com` — no apostrophe, no underscore, no dashes (Non-Negotiable #34). Always rendered as a clickable `mailto:` link. Note: Tyler's original non-negotiable list had a typo (`sams3plsolutions,com` with a comma) — the correct spelling is with a period.
- **Hours:** The exact string `24/7 Operations Support` on every site (Non-Negotiable #36). Not "24/7/365," not "Always open," not "Round the clock." The specific phrase.
- **The phone link takes the user to a dedicated Contact Page** (Non-Negotiable #35) — not a phone dialer directly on desktop. On mobile, the `tel:` link will trigger the dialer natively (that's expected). On desktop, the link should route to `/contact` where a human-centered page reassures the caller and shows the form. We implement this with a progressive-enhancement pattern: `<a href="tel:+14197459492" data-contact-link>...</a>` with a small JS click handler that, on desktop only, prevents default and routes to `/contact` instead. See `08-forms-and-connect-cta.md` for implementation details.

---

## 7. Network Cohesion Rules

These are the rules that make the 12 sites feel like one network while each still has its own character:

1. **Same shield logomark + same wordmark tagline** on every site ("A Sams 3PL Solutions Company")
2. **Same core color palette** (Brick Red, Petrol Blue, Off-White) as the anchor, with a single city accent on top
3. **Same body font + editorial font** (PP Neue Montreal + Fraunces) across all sites — only the display face may swap per city
4. **Same nav structure** (Industries, Services, Port/City, About, Blog, Connect — see Non-Negotiable #22)
5. **Same Connect CTA** pattern and color (brick red) everywhere
6. **Same footer blocks** listing other network locations (Non-Negotiable #24)
7. **Same type scale tokens** and spacing system across all sites
8. **Same voice rules** from section 5 above
9. **Same contact constants** (phone, email, hours)
10. **Same schema.org Organization and LocalBusiness structures** (see `05-seo-aeo-geo-llmo.md`)

If a new skill, component, or design decision is being made and it's not clear whether it belongs at the network level or the city level, default to the network level. Uniqueness is earned at the city layer, not assumed.

---

## 8. Open Items for Tyler to Confirm

These are action items flagged during the initial build — resolve them before shipping the first site built under this system.

1. **Lock exact hex values** for Brick Red, Petrol Blue, and Off-White by sampling the source logo file in a color-picker tool. Update Section 3.1 with the measured values.
2. **Confirm font licensing** by visiting Pangram Pangram's free fonts page and downloading the free tiers of PP Neue Machina and PP Neue Montreal. Verify commercial-use terms at time of download.
3. **Produce the SVG logo assets** (shield only, shield + wordmark, shield + "A Sams 3PL Solutions Company" lockup) in both full-color and single-color variants for use across the network.
4. **Decide the dedicated Contact Page behavior** (mentioned in Section 6.1) — do you want the desktop tel-link click handler, or should desktop also trigger a native dialer/modal? Default: route to `/contact` on desktop.
5. **Approve or adjust the city accent color proposals** in Section 3.4 as part of each city research brief.

---

## 9. Quick Reference

When starting a new site build, load this file AND `02-visual-design.md`, `04-accessibility-wcag22aa.md`, and `07-astro-cloudflare-stack.md`. Those four are the foundation. Add others as needed.

**Sources cited in this skill:**
- Tyler's 36 Non-Negotiables (2026-04-11), specifically #22, #25, #26, #33, #34, #35, #36
- Clarifying conversation with Tyler (2026-04-11) — voice description, apostrophe ruling
- Sams 3PL Solutions logomark (provided 2026-04-11)
- Competitive self-audit of detroit3pl.com and houston3pl.com (2026-04-11)
- `100 Things Every Designer Needs to Know About People` — Susan Weinschenk (typography readability, chromatic clashing)
- `Universal Principles of Design` — Lidwell/Holden/Butler (figure-ground contrast, aesthetic-usability effect)
