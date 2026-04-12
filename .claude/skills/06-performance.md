---
name: Performance & Core Web Vitals — Sams 3PL Solutions
description: Core Web Vitals targets, performance budgets, image optimization, font loading, CSS/JS discipline, caching strategy, Lighthouse scoring, and Cloudflare-specific delivery optimizations. Load this skill whenever building pages, optimizing assets, debugging slow loads, or preparing for a Lighthouse audit.
type: performance
depends_on: 02-visual-design.md, 05-seo-aeo-geo-llmo.md, 07-astro-cloudflare-stack.md
version: 1.0
last_updated: 2026-04-11
---

# Performance & Core Web Vitals

Speed is not a nice-to-have. It is a ranking factor (Google confirmed), a conversion factor (every 100ms of additional load time costs measurable conversions), and a trust signal (slow sites feel cheap — fast sites feel competent). For a logistics company whose brand promise is operational efficiency, a slow website is a contradiction.

Every Sams 3PL site must hit these targets in the field (real-user data from Chrome UX Report / Google Search Console), not just in lab conditions:

| Metric | Target | Red Line (never ship above) |
|---|---|---|
| **LCP** (Largest Contentful Paint) | < 2.5 s | 4.0 s |
| **INP** (Interaction to Next Paint) | < 200 ms | 500 ms |
| **CLS** (Cumulative Layout Shift) | < 0.1 | 0.25 |
| **FCP** (First Contentful Paint) | < 1.8 s | 3.0 s |
| **TTFB** (Time to First Byte) | < 800 ms | 1.8 s |

LCP, INP, and CLS are the three Core Web Vitals that directly affect Google rankings. FCP and TTFB are supporting metrics that diagnose problems when the big three slip.

---

## 1. Understanding the Metrics

### 1.1 LCP — Largest Contentful Paint

**What it measures:** How long it takes for the largest visible element in the viewport to render. On most Sams 3PL pages, the LCP element is the hero photograph.

**Why it matters:** LCP is the moment the page "feels loaded." Everything before that is a white screen or a skeleton. Users form their first impression in the LCP window.

**What affects it:**
- Server response time (TTFB).
- Resource load time (how long the hero image takes to download).
- Render-blocking resources (CSS and JS that must be parsed before painting).
- Client-side rendering delays (JavaScript that builds the DOM before painting — Astro's static HTML avoids this by default).

### 1.2 INP — Interaction to Next Paint

**What it measures:** The delay between a user interaction (click, tap, keypress) and the next visual update. INP replaced FID (First Input Delay) in 2024 and is a harder bar to clear because it measures the *worst* interaction on the page, not just the first.

**Why it matters:** A page that takes 400ms to respond to a button click feels broken. A page that responds in under 100ms feels instant.

**What affects it:**
- Long JavaScript tasks on the main thread.
- Large DOM size (more nodes = more layout/paint work per interaction).
- Third-party scripts (analytics, chat widgets, tracking pixels).
- Event handler complexity.

### 1.3 CLS — Cumulative Layout Shift

**What it measures:** The sum of all unexpected layout shifts during the page's lifetime. A layout shift is when a visible element moves position without the user triggering it — an image loading without dimensions, a font swapping in at a different size, an ad injecting itself.

**Why it matters:** Layout shifts make users click the wrong thing, lose their place while reading, and feel disoriented. CLS is the "janky" metric.

**What affects it:**
- Images without explicit `width` and `height` attributes.
- Fonts that load late and cause text reflow (FOUT — Flash of Unstyled Text).
- Dynamically injected content above the fold (ads, banners, cookie consent bars that push content down).
- CSS that changes layout on load (animations that move elements into position from off-screen).

---

## 2. Performance Budgets

A performance budget is a hard cap on resource sizes. If a page exceeds its budget, something needs to be removed or optimized before shipping.

### 2.1 Page-level budgets

| Resource | Budget (compressed / transferred) |
|---|---|
| **Total page weight** | < 500 KB (first load, excluding images) |
| **HTML** | < 30 KB |
| **CSS (total)** | < 50 KB |
| **JavaScript (total)** | < 100 KB |
| **Fonts (total)** | < 120 KB (3 families × ~40 KB each, subset) |
| **Hero image** | < 150 KB (at rendered size, WebP/AVIF) |
| **Total images per page** | < 800 KB (all images, lazy-loaded below fold) |

### 2.2 Third-party budget

Third-party scripts (GA4, consent banner JS) get a separate budget:
- **Total third-party JS:** < 50 KB transferred.
- **Total third-party requests:** < 5 requests on page load.
- GA4 is deferred until consent (see `11-analytics-and-consent.md`), so it contributes zero to initial load.

### 2.3 Request count budget

| Type | Budget |
|---|---|
| **Total requests (first load)** | < 30 |
| **Critical-path requests** (before LCP) | < 10 |
| **Font requests** | ≤ 4 (2 weights of 2 families for most pages) |
| **Image requests above the fold** | ≤ 3 |

---

## 3. Image Optimization

Images are the heaviest assets on every page and the primary driver of LCP. Getting images right is the single highest-leverage performance optimization.

### 3.1 Format hierarchy

Use the most efficient format the browser supports:

1. **AVIF** — best compression, ~50% smaller than JPEG at equivalent quality. Supported in Chrome, Firefox, Safari 16+. Use as the primary source in `<picture>`.
2. **WebP** — strong compression, ~30% smaller than JPEG. Universal browser support. Use as the fallback source.
3. **JPEG** — last-resort fallback for ancient browsers. Optimize to quality 80.
4. **PNG** — only for images requiring transparency. Convert to WebP/AVIF where transparency is supported.

**Never ship unoptimized JPEG or PNG as the primary format.**

### 3.2 The `<picture>` element

Every major image uses the `<picture>` element for format negotiation and responsive sizing:

```html
<picture>
  <!-- AVIF at multiple widths -->
  <source
    type="image/avif"
    srcset="
      /img/hero-400.avif 400w,
      /img/hero-800.avif 800w,
      /img/hero-1200.avif 1200w,
      /img/hero-1600.avif 1600w
    "
    sizes="(max-width: 768px) 100vw, (max-width: 1280px) 80vw, 1280px"
  >
  <!-- WebP fallback -->
  <source
    type="image/webp"
    srcset="
      /img/hero-400.webp 400w,
      /img/hero-800.webp 800w,
      /img/hero-1200.webp 1200w,
      /img/hero-1600.webp 1600w
    "
    sizes="(max-width: 768px) 100vw, (max-width: 1280px) 80vw, 1280px"
  >
  <!-- JPEG ultimate fallback -->
  <img
    src="/img/hero-1200.jpg"
    alt="Loading dock at the Detroit facility with three trucks backed in at dawn"
    width="1600"
    height="900"
    loading="eager"
    decoding="async"
    fetchpriority="high"
  >
</picture>
```

### 3.3 Responsive breakpoints

Generate images at these widths to cover common device sizes without waste:
- **400px** — mobile portrait
- **800px** — mobile landscape / small tablet
- **1200px** — tablet / small desktop
- **1600px** — desktop (cap — no images wider than this)

For hero images that span the full viewport, the `sizes` attribute is critical — it tells the browser which image to download before CSS is parsed. Get it wrong and the browser downloads the 1600px image on a 375px phone.

### 3.4 Lazy loading

- **Above-the-fold images** (hero, logo): `loading="eager"` + `fetchpriority="high"`. These are the LCP candidates — never lazy-load them.
- **Below-the-fold images** (cards, gallery, blog thumbnails): `loading="lazy"`. The browser loads them only when they approach the viewport.
- **Decorative background images** loaded via CSS: use `content-visibility: auto` on the section to defer rendering of off-screen sections entirely.

### 3.5 Explicit dimensions

Every `<img>` element must have `width` and `height` attributes matching the image's intrinsic aspect ratio. This lets the browser reserve the correct space before the image loads, preventing CLS:

```html
<img src="dock.webp" alt="..." width="1200" height="675" loading="lazy">
```

The CSS can override the rendered size (`width: 100%; height: auto;`), but the HTML attributes establish the aspect ratio.

### 3.6 Image build pipeline

Astro's built-in `<Image>` component handles format conversion, responsive sizes, and dimension injection. Use it for all images in `.astro` and `.mdx` files:

```astro
---
import { Image } from 'astro:assets';
import heroImg from '../assets/detroit-dock.jpg';
---
<Image
  src={heroImg}
  alt="Loading dock at the Detroit facility"
  widths={[400, 800, 1200, 1600]}
  formats={['avif', 'webp']}
  loading="eager"
  fetchpriority="high"
/>
```

For blog posts in MDX, use the same component. Never use raw `<img>` tags with unoptimized source files.

---

## 4. Font Loading

Fonts are the second-largest performance concern after images. The three families (PP Neue Machina, PP Neue Montreal, Fraunces) total ~200 KB if unoptimized. Our target is under 120 KB.

### 4.1 Subsetting

Subset every font file to include only the characters we actually use:

- **Latin Extended** character set (covers English + accented characters for any city names or loanwords).
- Remove Cyrillic, Greek, Vietnamese, and other character sets we'll never use.
- Keep common ligatures and kerning tables.
- Use `pyftsubset` (from `fonttools`) or `glyphhanger` to generate subsets.

A properly subsetted WOFF2 file for a single weight is typically 15–25 KB. Two weights of two families = ~60–100 KB total. Add Fraunces for blog pages and we stay under 120 KB.

### 4.2 WOFF2 only

Serve fonts exclusively as WOFF2. It offers the best compression and is supported in every modern browser (back to 2015). Do not serve WOFF, TTF, or EOT — those are dead formats that add unnecessary weight.

### 4.3 font-display: swap

Every `@font-face` declaration must include `font-display: swap`:

```css
@font-face {
  font-family: 'PP Neue Montreal';
  src: url('/fonts/PPNeueMontreal-Regular.woff2') format('woff2');
  font-weight: 400;
  font-style: normal;
  font-display: swap;
}
```

`swap` tells the browser to render text immediately with a fallback system font, then swap in the custom font when it loads. This prevents FOIT (Flash of Invisible Text) — invisible text is worse than slightly mismatched text.

### 4.4 Fallback font matching

To minimize CLS from the font swap, define fallback font stacks that closely match the custom fonts' metrics:

```css
:root {
  --font-display: 'PP Neue Machina', 'Arial Black', 'Helvetica Neue', sans-serif;
  --font-body: 'PP Neue Montreal', 'Helvetica Neue', 'Arial', sans-serif;
  --font-editorial: 'Fraunces', 'Georgia', 'Times New Roman', serif;
}
```

For even tighter metric matching, use `@font-face` `size-adjust`, `ascent-override`, and `descent-override` to tune the fallback font's metrics to match the custom font's layout:

```css
@font-face {
  font-family: 'PP Neue Montreal Fallback';
  src: local('Helvetica Neue'), local('Arial');
  size-adjust: 102%;
  ascent-override: 95%;
  descent-override: 22%;
  line-gap-override: 0%;
}
```

This reduces the visible "jump" when the custom font swaps in, which directly reduces CLS.

### 4.5 Preloading critical fonts

Preload the fonts that appear above the fold (the body font's regular weight and the display font's bold weight):

```html
<link rel="preload" href="/fonts/PPNeueMontreal-Regular.woff2" as="font" type="font/woff2" crossorigin>
<link rel="preload" href="/fonts/PPNeueMachina-Bold.woff2" as="font" type="font/woff2" crossorigin>
```

Do NOT preload every weight and family — preloading too many fonts blocks the connection for more critical resources. Preload at most 2–3 files.

### 4.6 Per-page font loading

Not every page needs every font:
- **Most pages:** Neue Machina (display H1) + Neue Montreal (body, UI). Two families, 2–3 files.
- **Blog posts:** Neue Montreal (nav, UI) + Fraunces (article body). Two families, 2–3 files.
- **No page loads all three families.** Per `02-visual-design.md` §3.2: use at most two of the three families per page. The third is simply not loaded — zero bytes.

---

## 5. CSS Performance

### 5.1 Critical CSS inlining

Inline the CSS required to render the above-the-fold content directly in the `<head>`:

```html
<style>
  /* Critical CSS: header, hero, nav — enough to paint the first viewport */
  /* ~5–10 KB uncompressed */
</style>
<link rel="stylesheet" href="/styles/main.css" media="print" onload="this.media='all'">
```

The `media="print"` trick loads the full stylesheet asynchronously without blocking render. Astro can do this automatically with the right configuration.

### 5.2 No unused CSS

Every selector in the shipped CSS must match at least one element on at least one page. Dead CSS is free weight.

Tools:
- **PurgeCSS** or **Astro's built-in scoped styles** — Astro scopes component CSS by default, which naturally eliminates most dead CSS.
- If using a utility framework (Tailwind), ensure tree-shaking is configured.

### 5.3 CSS containment

Use `contain` and `content-visibility` to help the browser optimize layout and paint:

```css
/* Sections below the fold */
section.below-fold {
  content-visibility: auto;
  contain-intrinsic-size: auto 600px;
}
```

This tells the browser it can skip rendering off-screen sections entirely until the user scrolls near them. `contain-intrinsic-size` provides an estimated height so the scrollbar doesn't jump.

### 5.4 No CSS imports

Never use `@import` in CSS files — it creates a sequential request chain where each file must finish loading before the next is discovered. Use `<link>` tags in HTML or Astro's built-in bundling instead.

---

## 6. JavaScript Performance

### 6.1 The Astro advantage

Astro ships zero JavaScript by default. This is the single most important performance feature of our stack. A page with no client-side JS has:
- Zero INP risk from JavaScript.
- Zero render-blocking scripts.
- Zero main-thread contention.
- The fastest possible LCP.

**Never add JavaScript unless a specific interaction requires it.** Astro's Islands Architecture means interactive components ship JS only for themselves, only when needed. See `07-astro-cloudflare-stack.md` for hydration directives.

### 6.2 Hydration discipline

When a component genuinely needs interactivity:
- **`client:visible`** — for below-the-fold interactive components (accordions, form validation, image galleries). JS loads only when the component scrolls into view.
- **`client:idle`** — for components that need JS but aren't interaction-critical (analytics, non-critical UI enhancements). JS loads after the main thread is idle.
- **`client:load`** — for above-the-fold interactive components that need JS immediately (mobile menu toggle, header search). Use sparingly.
- **`client:media`** — for components that only need JS at certain viewport sizes (e.g., mobile-only hamburger menu). JS doesn't load on desktop at all.

The priority order is: no JS > `client:visible` > `client:idle` > `client:media` > `client:load`. Default to the laziest option that still works.

### 6.3 Third-party script management

Third-party scripts (GA4, consent manager) are the biggest JS performance threat because we don't control their size or behavior.

Rules:
- **GA4** is deferred until cookie consent (see `11-analytics-and-consent.md`). On pages where the user hasn't consented, GA4 contributes exactly 0 KB and 0 ms.
- **No chat widgets.** The phone number is the chat widget.
- **No social media embed scripts.** Link to social profiles; don't embed their SDKs.
- **No tag managers** (Google Tag Manager). GTM is an open door for marketing teams to inject unreviewed scripts. We manage tags directly.
- Every third-party script must be loaded with `async` or `defer`, and must be audited for size and main-thread impact before inclusion.

### 6.4 Long task prevention

A "long task" is any JavaScript execution that blocks the main thread for more than 50ms. Long tasks are the primary cause of poor INP.

Prevention:
- Break large tasks into smaller chunks using `requestIdleCallback` or `scheduler.yield()`.
- Move heavy computation to Web Workers.
- Avoid synchronous DOM reads followed by writes ("layout thrashing").
- Keep event handlers fast — under 10ms for the handler itself, with any heavy work deferred.

---

## 7. Server and Network Performance

### 7.1 Cloudflare Pages delivery

Astro builds to static HTML, which Cloudflare Pages serves from its edge network (~300 points of presence). This gives us:
- **TTFB under 100ms** for cached pages from the nearest edge node.
- **Global availability** without managing servers.
- **Automatic Brotli compression** on all text resources (HTML, CSS, JS, SVG).
- **HTTP/2 and HTTP/3** support for multiplexed connections.

### 7.2 Cache strategy

Cloudflare caches static assets aggressively by default. Configure caching headers for maximum benefit:

**HTML pages:**
```
Cache-Control: public, max-age=0, must-revalidate
```
HTML is always revalidated so content updates appear immediately. Cloudflare's edge cache handles this efficiently with ETags.

**Static assets (CSS, JS, fonts, images):**
```
Cache-Control: public, max-age=31536000, immutable
```
Static assets are hashed (e.g., `main.a1b2c3.css`) and cached for one year. When the asset changes, the hash changes, and the browser fetches the new version. `immutable` tells the browser not to even revalidate — the hash guarantees freshness.

### 7.3 Preconnect and DNS prefetch

For any third-party origin we load resources from, add preconnect hints:

```html
<!-- GA4 (loaded after consent, but preconnect is cheap) -->
<link rel="preconnect" href="https://www.googletagmanager.com" crossorigin>
<link rel="preconnect" href="https://www.google-analytics.com" crossorigin>

<!-- Font files if served from a CDN (we self-host, but just in case) -->
<link rel="dns-prefetch" href="https://fonts.example.com">
```

Preconnect saves 100–300ms per origin by completing the TCP+TLS handshake before the resource is requested.

### 7.4 Resource hints for navigation

Use `<link rel="prefetch">` on pages where we can predict the user's next navigation:
- On the home page, prefetch the Services overview page (most common next click).
- On a service detail page, prefetch the Connect page (the natural conversion step).
- On blog index, prefetch the first few blog post pages.

```html
<link rel="prefetch" href="/services/">
```

Don't over-prefetch — each prefetch consumes bandwidth. Limit to 1–2 high-confidence predictions per page.

---

## 8. Measuring Performance

### 8.1 Lab tools (development)

- **Lighthouse** (Chrome DevTools): Run on every page before deploying. Target scores:
  - Performance: 95+
  - Accessibility: 95+ (per `04-accessibility-wcag22aa.md`)
  - Best Practices: 95+
  - SEO: 95+
- **WebPageTest** (webpagetest.org): Detailed waterfall analysis. Test from multiple locations (US East, US West, Europe) to catch CDN issues.
- **Chrome DevTools Performance panel**: Flame chart analysis for INP debugging, long-task identification, layout-shift visualization.

### 8.2 Field tools (real users)

- **Google Search Console → Core Web Vitals report**: The definitive field-data source. This is what Google uses for ranking. Check weekly.
- **Chrome UX Report (CrUX)**: Monthly aggregated real-user data. Available via the CrUX API or BigQuery.
- **GA4 Web Vitals reporting**: If we configure GA4 to send CWV data as custom events (see `11-analytics-and-consent.md`), we get per-page field data.

### 8.3 CI integration

- Run Lighthouse CI on every deploy preview. Performance score below 90 fails the build.
- Track Lighthouse scores over time to catch regressions. A 5-point drop triggers investigation.
- Use `bundlesize` or similar to enforce the JS and CSS budgets from §2.

---

## 9. Performance Anti-Patterns (Never Do These)

1. **Never load a JavaScript framework for a static page.** Astro gives us static HTML. Don't add React, Vue, or Svelte unless a specific component needs client-side interactivity.
2. **Never use `@import` in CSS.** It serializes requests.
3. **Never inline base64 images in CSS or HTML.** They inflate the document size and prevent caching. Serve images as separate cacheable files.
4. **Never load all font weights upfront.** Load only the weights needed for the current page. Italic and light weights load on demand if ever needed.
5. **Never load Google Fonts via the Google Fonts CDN.** Self-host all fonts. The Google Fonts CSS file adds an extra blocking request and leaks user IP addresses to Google.
6. **Never use `document.write()`.** It blocks parsing entirely.
7. **Never load analytics before consent.** GA4 is deferred until the user accepts cookies.
8. **Never ship uncompressed images.** Every image goes through the AVIF/WebP pipeline.
9. **Never use CSS `@font-face` without `font-display: swap`.** Invisible text is unacceptable.
10. **Never add a third-party script without measuring its impact.** Load it in a test environment, measure the delta on LCP, INP, and CLS, and reject it if it pushes any metric beyond budget.

---

## 10. Performance Debugging Playbook

When a Core Web Vital misses the target, follow this diagnosis path:

### 10.1 LCP too slow

1. **Identify the LCP element.** Chrome DevTools → Performance panel → "Timings" section → "LCP" marker. Click it to see which element triggered it.
2. **If LCP is the hero image:** Is it in WebP/AVIF? Is it sized correctly for the viewport? Is it preloaded with `fetchpriority="high"`? Is it lazy-loaded by mistake? Is the `sizes` attribute correct?
3. **If LCP is text:** Is render-blocking CSS delaying paint? Is the font loading slowly? Is critical CSS inlined?
4. **If TTFB is slow:** Is the page cached at the edge? Is the HTML too large? Is there a redirect chain?

### 10.2 INP too slow

1. **Identify the slow interaction.** Chrome DevTools → Performance panel → record while interacting. Look for long tasks (red marks on the main thread).
2. **If it's our JS:** Break the handler into smaller chunks. Defer non-critical work with `requestIdleCallback`.
3. **If it's third-party JS:** Defer the script further (use `client:idle` instead of `client:load`). Consider removing it.
4. **If the DOM is too large:** Simplify the page structure. Target under 1,500 DOM nodes per page.

### 10.3 CLS too high

1. **Identify the shifting elements.** Chrome DevTools → Performance panel → "Layout Shifts" section. Click each shift to see which element moved.
2. **If images cause the shift:** Add `width` and `height` attributes. Use `aspect-ratio` in CSS.
3. **If fonts cause the shift:** Use `font-display: swap` with metric-matched fallbacks (§4.4).
4. **If injected content causes the shift:** Reserve space for dynamic content with `min-height`. Load cookie consent banners as overlays, not as content that pushes the page down.

---

## 11. Self-Check Before Shipping

1. Lighthouse Performance score is 95+ on mobile (throttled 4G).
2. LCP is under 2.5s on mobile.
3. INP is under 200ms.
4. CLS is under 0.1.
5. Total page weight (excluding lazy images) is under 500 KB transferred.
6. Total JavaScript is under 100 KB transferred.
7. Hero image is in AVIF/WebP, under 150 KB, and loaded with `fetchpriority="high"`.
8. All below-the-fold images are lazy-loaded.
9. All images have explicit `width` and `height` attributes.
10. Fonts are WOFF2, subsetted, with `font-display: swap` and metric-matched fallbacks.
11. No more than 2–3 font files preloaded.
12. Critical CSS is inlined; full CSS loads asynchronously.
13. No render-blocking JavaScript in the `<head>`.
14. GA4 and all third-party scripts are deferred until after consent / idle.
15. All static assets have `immutable` cache headers with content hashes.
16. No anti-patterns from §9 are present.

---

## 12. Sources

- [web.dev Core Web Vitals documentation](https://web.dev/vitals/)
- [Google Search Central — Page Experience](https://developers.google.com/search/docs/appearance/page-experience)
- [Chrome DevTools Performance documentation](https://developer.chrome.com/docs/devtools/performance/)
- [Astro Performance documentation](https://docs.astro.build/en/concepts/islands/)
- [Cloudflare Pages caching behavior](https://developers.cloudflare.com/pages/configuration/serving-pages/)
- [WebPageTest documentation](https://docs.webpagetest.org/)
- [Harry Roberts, CSS Wizardry — performance articles](https://csswizardry.com/archive/)
- Tyler's non-negotiables #9 (Core Web Vitals), #14 (self-hosted fonts), from `MASTER-MANUAL.md`

---

**End of Performance & Core Web Vitals.** Next skill to load: `07-astro-cloudflare-stack.md` (framework architecture, project structure, deployment pipeline, and Cloudflare-specific configuration).
