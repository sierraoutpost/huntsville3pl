---
name: Astro + Cloudflare Pages Stack — Sams 3PL Solutions
description: Framework architecture, project structure, component patterns, content collections, hydration strategy, deployment pipeline, Cloudflare Pages configuration, and developer workflow. Load this skill whenever scaffolding a new site, adding components, configuring builds, or troubleshooting the Astro/Cloudflare stack.
type: stack
depends_on: 01-brand-system.md, 06-performance.md
version: 1.0
last_updated: 2026-04-11
---

# Astro + Cloudflare Pages Stack

Every site in the Sams 3PL Solutions network runs on the same stack: **Astro** for the framework, **Cloudflare Pages** for hosting and CDN. This is a deliberate, locked decision — it is not up for debate on a per-site basis. Consistency across the network means shared knowledge, shared components, shared deployment patterns, and shared performance guarantees.

This file defines how to use the stack correctly.

---

## 1. Why This Stack

### 1.1 Astro

Astro is a static-site-first framework built for content-driven websites. Its three core features align directly with our requirements:

1. **Zero JavaScript by default.** Astro renders pages to static HTML at build time. No client-side framework ships unless we explicitly opt in. This is the foundation of our performance story (see `06-performance.md`).

2. **Islands Architecture.** When a component does need interactivity, Astro lets us hydrate just that component — a form validator, a mobile menu toggle, an accordion — while the rest of the page remains static HTML. Each interactive "island" loads its own JS independently, on its own schedule.

3. **Content Collections.** Astro's built-in content collection system with Zod schema validation is purpose-built for the MDX blog pipeline we need (see `10-blog-system.md`). It gives us type-safe frontmatter, automatic slug generation, and build-time validation that catches content errors before they ship.

Astro also has first-class support for:
- Scoped CSS (component styles don't leak).
- Image optimization via `astro:assets`.
- Sitemap generation via `@astrojs/sitemap`.
- RSS feeds.
- Markdown and MDX rendering.
- View Transitions (native browser API, no framework required).

### 1.2 Cloudflare Pages

Cloudflare Pages is a static-site hosting platform with:
- **Global edge network (~300 PoPs).** Pages are served from the nearest edge node, giving us sub-100ms TTFB worldwide.
- **Free SSL.** Automatic HTTPS with no certificate management.
- **Automatic Brotli compression.** All text assets compressed at the edge.
- **HTTP/2 and HTTP/3.** Multiplexed connections by default.
- **Deploy previews.** Every branch and PR gets a unique preview URL for testing before production.
- **Instant rollbacks.** One-click rollback to any previous deployment.
- **No cold starts.** Static assets are always hot on the edge — no server spin-up time, no serverless cold-start latency.
- **Free for our scale.** Cloudflare Pages' free tier handles more traffic than any single Sams 3PL city site will see.

### 1.3 What this stack is NOT

This stack does not include:
- **A CMS.** Content is managed as MDX files in the repository. If a headless CMS is added in the future (Sanity, Contentful, etc.), it feeds into the same Astro build pipeline — it doesn't replace it.
- **Server-side rendering.** We use Astro in static (SSG) mode. Pages are pre-built at deploy time, not rendered per-request. If a future feature requires SSR (e.g., personalized content, authentication), Astro supports it via Cloudflare Workers, but default to static unless there's a compelling reason.
- **A database.** Form submissions are handled via Cloudflare Workers or Zapier webhooks (see `08-forms-and-connect-cta.md`), not a traditional database.
- **A monorepo.** Each city site is its own repository. Shared components live in a private npm package or a shared Git submodule.

---

## 2. Project Structure

Every Sams 3PL city site follows this directory structure:

```
[city]3pl.com/
├── public/
│   ├── fonts/              # Self-hosted WOFF2 font files
│   ├── img/                # Static images (OG images, favicons)
│   ├── favicon.svg
│   ├── robots.txt
│   ├── llms.txt
│   └── llms-full.txt
├── src/
│   ├── assets/             # Images processed by astro:assets
│   │   ├── hero/
│   │   ├── services/
│   │   ├── team/
│   │   └── blog/
│   ├── components/
│   │   ├── global/         # Header, Footer, SkipLink, CookieConsent
│   │   ├── ui/             # Button, Card, Input, Accordion, Toast
│   │   ├── sections/       # Hero, ServiceGrid, CTA, FAQ, TeamBlock
│   │   └── blog/           # PostCard, AuthorBio, RelatedPosts
│   ├── content/
│   │   ├── blog/           # MDX blog posts
│   │   │   └── [slug].mdx
│   │   └── config.ts       # Content collection schemas (Zod)
│   ├── data/
│   │   ├── brand.ts        # Brand constants (from 01-brand-system.md §6)
│   │   ├── services.ts     # Service definitions
│   │   ├── navigation.ts   # Nav items
│   │   └── city.ts         # City-specific data (facts, colors, tagline)
│   ├── layouts/
│   │   ├── BaseLayout.astro     # HTML shell, head tags, global styles
│   │   ├── PageLayout.astro     # Standard page with header/footer
│   │   └── BlogLayout.astro     # Blog post layout with Fraunces body
│   ├── pages/
│   │   ├── index.astro          # Home
│   │   ├── services/
│   │   │   ├── index.astro      # Services overview
│   │   │   └── [slug].astro     # Dynamic service detail pages
│   │   ├── about.astro
│   │   ├── connect.astro
│   │   ├── blog/
│   │   │   ├── index.astro      # Blog index
│   │   │   └── [...slug].astro  # Dynamic blog posts
│   │   ├── privacy.astro
│   │   ├── accessibility.astro
│   │   └── 404.astro
│   ├── styles/
│   │   ├── global.css           # CSS custom properties, reset, base
│   │   ├── fonts.css            # @font-face declarations
│   │   └── utilities.css        # Utility classes (if needed)
│   └── utils/
│       ├── seo.ts               # Meta tag / JSON-LD helpers
│       ├── schema.ts            # Schema.org builders
│       └── formatters.ts        # Phone, date, number formatters
├── astro.config.mjs
├── package.json
├── tsconfig.json
└── .gitignore
```

### 2.1 Key conventions

- **`public/`** is for files that must be served at exact paths (fonts, robots.txt, llms.txt, favicons). Everything here is copied as-is to the build output.
- **`src/assets/`** is for images that Astro should process (resize, convert to AVIF/WebP, generate responsive variants). Never put processable images in `public/`.
- **`src/content/`** is exclusively for Astro Content Collections (blog posts). It uses the collection config in `config.ts`.
- **`src/data/`** holds TypeScript data files — brand constants, service definitions, city data. These are imported at build time, not shipped to the browser.
- **`src/pages/`** defines the routing. One file per route. Astro uses file-based routing: `src/pages/services/index.astro` → `/services/`.

---

## 3. Astro Configuration

### 3.1 astro.config.mjs

```javascript
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import cloudflare from '@astrojs/cloudflare';

export default defineConfig({
  site: 'https://detroit3pl.com',  // city-specific
  output: 'static',                // SSG — pre-render everything
  
  integrations: [
    mdx(),
    sitemap({
      filter: (page) => !page.includes('/drafts/'),
    }),
  ],

  image: {
    domains: [],  // no external image domains
    service: {
      entrypoint: 'astro/assets/services/sharp',
    },
  },

  vite: {
    build: {
      cssMinify: 'lightningcss',
      rollupOptions: {
        output: {
          assetFileNames: 'assets/[name].[hash][extname]',
        },
      },
    },
  },

  // Cloudflare Pages adapter (only needed if using SSR features)
  // adapter: cloudflare(),
});
```

### 3.2 TypeScript configuration

```json
{
  "extends": "astro/tsconfigs/strict",
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "@components/*": ["src/components/*"],
      "@layouts/*": ["src/layouts/*"],
      "@data/*": ["src/data/*"],
      "@utils/*": ["src/utils/*"],
      "@assets/*": ["src/assets/*"]
    }
  }
}
```

Path aliases keep imports clean: `import Button from '@components/ui/Button.astro'` instead of `import Button from '../../../components/ui/Button.astro'`.

---

## 4. Component Architecture

### 4.1 The Astro component model

Astro components (`.astro` files) are server-rendered by default. They execute at build time, produce static HTML, and ship zero JavaScript to the browser. This is correct for 90%+ of our UI.

```astro
---
// This runs at BUILD TIME only — never in the browser
import { brand } from '@data/brand';
import Button from '@components/ui/Button.astro';

interface Props {
  title: string;
  subtitle?: string;
}

const { title, subtitle } = Astro.props;
---

<section class="hero">
  <h1>{title}</h1>
  {subtitle && <p class="hero-subtitle">{subtitle}</p>}
  <Button href="/connect/" variant="primary">Connect</Button>
  <a href={brand.phone.href} class="hero-phone">{brand.phone.display}</a>
</section>

<style>
  /* Scoped to this component only — won't leak */
  .hero {
    padding: var(--space-11) var(--space-6);
    text-align: left;
  }
  .hero h1 {
    font-family: var(--font-display);
    font-size: clamp(2.25rem, 1.5rem + 3.5vw, 6rem);
    font-weight: 700;
    letter-spacing: -0.02em;
    line-height: 1.15;
    color: var(--color-petrol);
  }
</style>
```

### 4.2 When to use framework components

Some interactions genuinely require client-side JavaScript. For these, use a framework component (Preact is recommended for its tiny size — 3 KB vs. React's 40 KB):

- **Mobile menu toggle** — open/close state, focus trapping, escape handling.
- **Form validation** — real-time inline validation on blur.
- **Accordion / disclosure widgets** — expand/collapse with `aria-expanded`.
- **Cookie consent banner** — show/hide based on consent state, fire GA4 on acceptance.
- **Toast notifications** — ephemeral success/error messages after form submission.

For everything else — headings, paragraphs, images, cards, grids, footers, navigation links — use Astro components. No JS needed.

### 4.3 Hydration directives

When using a framework component inside an Astro page, choose the laziest hydration directive that works:

```astro
---
import MobileMenu from '@components/global/MobileMenu.preact';
import ConnectForm from '@components/sections/ConnectForm.preact';
import CookieConsent from '@components/global/CookieConsent.preact';
import Accordion from '@components/ui/Accordion.preact';
---

<!-- Loads JS immediately — only for above-fold critical interactivity -->
<MobileMenu client:load />

<!-- Loads JS when browser is idle — not interaction-critical on load -->
<CookieConsent client:idle />

<!-- Loads JS when component scrolls into view — below-fold interactive -->
<ConnectForm client:visible />
<Accordion client:visible items={faqItems} />
```

**Directive priority (from `06-performance.md` §6.2):**
1. No directive (static Astro component) — default for everything
2. `client:visible` — below-fold interactivity
3. `client:idle` — non-critical above-fold
4. `client:media="(max-width: 768px)"` — mobile-only interactivity
5. `client:load` — critical above-fold (use sparingly)

### 4.4 Shared component library

Components shared across the 12-site network should live in a private npm package:

```
@sams3pl/ui/
├── Button.astro
├── Card.astro
├── Input.astro
├── Accordion.preact.tsx
├── MobileMenu.preact.tsx
├── CookieConsent.preact.tsx
├── Toast.preact.tsx
├── SkipLink.astro
├── SEOHead.astro
├── SchemaOrg.astro
└── Footer.astro
```

Each city site imports from `@sams3pl/ui` and overrides only what's city-specific (colors, tagline, photography, city data). The component API, structure, and behavior remain identical across the network.

If a private npm registry feels heavyweight for the team's workflow, Git submodules or a monorepo with Turborepo are acceptable alternatives — the goal is one source of truth for shared components.

---

## 5. Content Collections

### 5.1 Blog collection schema

The blog content collection is defined in `src/content/config.ts`:

```typescript
import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
  type: 'content',
  schema: ({ image }) => z.object({
    title: z.string().max(70),
    description: z.string().max(155),
    author: z.string(),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    heroImage: image(),
    heroAlt: z.string(),
    category: z.enum([
      'warehousing',
      'fulfillment',
      'logistics',
      'industry',
      'company',
      'city',
    ]),
    tags: z.array(z.string()).default([]),
    draft: z.boolean().default(false),
    readingTime: z.number().optional(),  // calculated at build
  }),
});

export const collections = { blog };
```

### 5.2 Blog post frontmatter

Every MDX blog post begins with validated frontmatter:

```mdx
---
title: "Cross-Dock vs. Transloading: Which Does Your Supply Chain Need?"
description: "Understanding the difference between cross-docking and transloading, when each strategy makes sense, and how Detroit's logistics infrastructure supports both."
author: "Marcus Cole"
pubDate: 2026-04-10
heroImage: "../../assets/blog/cross-dock-detroit.jpg"
heroAlt: "Freight being transferred between trailers at the Detroit cross-dock facility"
category: "logistics"
tags: ["cross-docking", "transloading", "supply chain"]
draft: false
---

{/* MDX content here — can use Astro components */}
```

If any frontmatter field is missing, malformed, or violates the Zod schema, the build fails with a clear error message. This catches content errors before they reach production.

### 5.3 Querying collections

```astro
---
import { getCollection } from 'astro:content';

// Get all published posts, sorted by date
const posts = (await getCollection('blog', ({ data }) => !data.draft))
  .sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf());
---
```

### 5.4 Future collections

Beyond blog, additional collections can be added as needed:

- **services** — service definitions with structured data, enabling dynamic `/services/[slug]` pages.
- **team** — team member profiles for the about page.
- **testimonials** — client quotes with attribution.

Each collection gets its own Zod schema, its own directory under `src/content/`, and its own query patterns.

---

## 6. Layouts

### 6.1 BaseLayout.astro

The outermost HTML shell. Every page uses this:

```astro
---
import '@styles/global.css';
import '@styles/fonts.css';
import SEOHead from '@components/global/SEOHead.astro';
import SkipLink from '@components/global/SkipLink.astro';
import SchemaOrg from '@components/global/SchemaOrg.astro';

interface Props {
  title: string;
  description: string;
  ogImage?: string;
  schema?: object;
  canonicalUrl?: string;
}

const { title, description, ogImage, schema, canonicalUrl } = Astro.props;
---

<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <SEOHead
      title={title}
      description={description}
      ogImage={ogImage}
      canonicalUrl={canonicalUrl || Astro.url.href}
    />
    <SchemaOrg data={schema} />

    <!-- Preload critical fonts -->
    <link rel="preload" href="/fonts/PPNeueMontreal-Regular.woff2"
          as="font" type="font/woff2" crossorigin>
    <link rel="preload" href="/fonts/PPNeueMachina-Bold.woff2"
          as="font" type="font/woff2" crossorigin>
  </head>
  <body>
    <SkipLink />
    <slot />
  </body>
</html>
```

### 6.2 PageLayout.astro

Wraps BaseLayout with the standard header and footer:

```astro
---
import BaseLayout from './BaseLayout.astro';
import Header from '@components/global/Header.astro';
import Footer from '@components/global/Footer.astro';

interface Props {
  title: string;
  description: string;
  ogImage?: string;
  schema?: object;
}

const props = Astro.props;
---

<BaseLayout {...props}>
  <Header />
  <main id="main-content">
    <slot />
  </main>
  <Footer />
</BaseLayout>
```

### 6.3 BlogLayout.astro

Extends PageLayout with blog-specific structure — editorial typography, author bio, related posts, article schema:

```astro
---
import PageLayout from './PageLayout.astro';
import AuthorBio from '@components/blog/AuthorBio.astro';
import RelatedPosts from '@components/blog/RelatedPosts.astro';
import type { CollectionEntry } from 'astro:content';

interface Props {
  post: CollectionEntry<'blog'>;
  relatedPosts: CollectionEntry<'blog'>[];
}

const { post, relatedPosts } = Astro.props;
---

<PageLayout
  title={`${post.data.title} — Blog | Sams 3PL Solutions`}
  description={post.data.description}
  ogImage={post.data.heroImage.src}
  schema={articleSchema}
>
  <article class="blog-post">
    <header class="post-header">
      <h1>{post.data.title}</h1>
      <div class="post-meta">
        <span>{post.data.author}</span>
        <time datetime={post.data.pubDate.toISOString()}>
          {post.data.pubDate.toLocaleDateString('en-US', {
            year: 'numeric', month: 'long', day: 'numeric'
          })}
        </time>
      </div>
    </header>

    <div class="post-body">
      <slot />
    </div>

    <AuthorBio author={post.data.author} />
  </article>

  <RelatedPosts posts={relatedPosts} />
</PageLayout>

<style>
  .post-body {
    font-family: var(--font-editorial);
    max-width: 65ch;
    margin: 0 auto;
    font-size: var(--fs-md);
    line-height: 1.7;
  }
</style>
```

---

## 7. Styling Strategy

### 7.1 CSS custom properties as the design system API

All design tokens from `01-brand-system.md` and `02-visual-design.md` live as CSS custom properties in `global.css`:

```css
:root {
  /* Colors */
  --color-brick-red: #8B1F24;
  --color-petrol: #234B5E;
  --color-off-white: #F7F4EF;
  --color-cream: #FBF9F5;
  --color-charcoal: #1A1A1A;
  --color-graphite: #5A5A5A;
  --color-fog: #D8D4CD;
  --color-midnight: #0E1A22;

  /* Semantic */
  --color-success: #2F6F3C;
  --color-warning: #B35A00;
  --color-error: #A11B1F;
  --color-info: #3E6C82;

  /* Typography */
  --font-display: 'PP Neue Machina', 'Arial Black', sans-serif;
  --font-body: 'PP Neue Montreal', 'Helvetica Neue', 'Arial', sans-serif;
  --font-editorial: 'Fraunces', 'Georgia', serif;

  /* Type scale */
  --fs-xs: 0.8125rem;
  --fs-sm: 0.9375rem;
  --fs-base: 1rem;
  --fs-md: 1.125rem;
  --fs-lg: 1.4rem;
  --fs-xl: 1.75rem;
  --fs-2xl: 2.1875rem;
  --fs-3xl: 2.75rem;
  --fs-4xl: 3.5rem;
  --fs-5xl: 6rem;

  /* Spacing (8-point grid) */
  --space-1: 0.25rem;
  --space-2: 0.5rem;
  --space-3: 0.75rem;
  --space-4: 1rem;
  --space-5: 1.5rem;
  --space-6: 2rem;
  --space-7: 3rem;
  --space-8: 4rem;
  --space-9: 6rem;
  --space-10: 8rem;
  --space-11: 12rem;

  /* Layout */
  --container-max: 80rem;  /* 1280px */
  --gutter: 1.5rem;        /* 24px desktop, overridden on mobile */
}

@media (max-width: 48em) {
  :root {
    --gutter: 1rem;  /* 16px on mobile */
  }
}
```

### 7.2 CSS reset

Use a minimal modern reset. Andy Bell's "A (more) Modern CSS Reset" or Josh Comeau's "Custom CSS Reset" are good starting points. The reset must:
- Remove default margins.
- Set `box-sizing: border-box` globally.
- Set `img { max-width: 100%; display: block; }`.
- Set `body { min-height: 100vh; line-height: 1.65; }`.
- Set `input, button, textarea, select { font: inherit; }`.
- Respect `prefers-reduced-motion`.

### 7.3 Scoped styles

Astro automatically scopes `<style>` blocks in `.astro` files to the component. Use this aggressively — component-scoped styles prevent style leaks and eliminate the need for BEM naming conventions.

```astro
<style>
  /* This only applies to THIS component's .card elements */
  .card {
    background: var(--color-cream);
    padding: var(--space-6);
    border: 1px solid var(--color-fog);
    border-radius: 4px;
  }
</style>
```

### 7.4 No utility framework by default

We do not use Tailwind CSS by default. The design system is expressed through CSS custom properties and scoped component styles. This keeps the CSS lean, semantic, and directly tied to the design tokens in the skill files.

If a future developer strongly prefers Tailwind, it can be added as long as:
- It's configured to use our custom property values (not Tailwind's defaults).
- PurgeCSS / tree-shaking is configured to eliminate unused classes.
- The shipped CSS stays under the 50 KB budget.

---

## 8. Data Layer

### 8.1 Brand constants

The brand data from `01-brand-system.md` lives in `src/data/brand.ts`:

```typescript
export const brand = {
  name: 'Sams 3PL Solutions',
  tagline: 'A Sams 3PL Solutions Company',
  phone: { display: '+1 (419) 745-9492', href: 'tel:+14197459492' },
  email: { display: 'info@sams3plsolutions.com', href: 'mailto:info@sams3plsolutions.com' },
  hours: '24/7 Operations Support',
} as const;
```

### 8.2 City-specific data

Each city site has a `src/data/city.ts` with localized overrides:

```typescript
export const city = {
  name: 'Detroit',
  domain: 'detroit3pl.com',
  tagline: 'Detroit runs on grit. Your supply chain should too.',
  state: 'MI',
  timezone: 'America/Detroit',
  accentColor: '#0057B8',  // city accent (per brand system proposals)
  facility: {
    sqft: '200,000',
    docks: 24,
    address: {
      street: '1234 Logistics Ave',
      city: 'Detroit',
      state: 'MI',
      zip: '48201',
    },
  },
  // Verified city research data (from city-research-brief)
  logistics: {
    keyFact: 'Only major U.S. metro with a land border crossing to Canada',
    corridor: 'I-94 / I-75 interchange',
    port: 'Port of Detroit — Great Lakes shipping hub',
  },
} as const;
```

Components reference `city.name`, `city.tagline`, `city.facility.sqft`, etc. The same component code across all 12 sites produces city-specific content by reading different data files.

### 8.3 Navigation data

```typescript
export const navigation = [
  { label: 'Services', href: '/services/' },
  { label: 'About', href: '/about/' },
  { label: 'Blog', href: '/blog/' },
  // Industries is optional per city
] as const;

export const ctaNav = {
  label: 'Connect',
  href: '/connect/',
} as const;
```

---

## 9. Build and Deployment

### 9.1 Build command

```bash
npm run build
# → Astro builds to dist/ with static HTML, optimized images, hashed assets
```

The build produces a `dist/` directory containing fully static files ready for Cloudflare Pages.

### 9.2 Cloudflare Pages configuration

In the Cloudflare Pages dashboard (or `wrangler.toml` for CLI deployment):

- **Build command:** `npm run build`
- **Build output directory:** `dist`
- **Node.js version:** 20 (or latest LTS)
- **Environment variables:** None required for static builds. If using Workers for form handling, add `FORM_ENDPOINT` and `HONEYPOT_FIELD_NAME`.

### 9.3 Deploy previews

Every branch push gets a unique preview URL:
```
https://[branch-name].detroit3pl.pages.dev
```

Use these for:
- Visual QA before merging to production.
- Lighthouse audits on the preview URL.
- Stakeholder review (send Tyler the preview link).

### 9.4 Production deployment

Production deploys on push to `main`:
```
main → Cloudflare Pages build → detroit3pl.com
```

Rollback: if a deploy breaks something, Cloudflare Pages supports instant rollback to any previous deployment from the dashboard.

### 9.5 Custom domains

Each city site maps its custom domain in Cloudflare Pages:
- `detroit3pl.com` → Cloudflare Pages project `detroit3pl`
- `houston3pl.com` → Cloudflare Pages project `houston3pl`
- etc.

DNS is managed in Cloudflare (CNAME or proxied A record). SSL is automatic.

---

## 10. Development Workflow

### 10.1 Local development

```bash
npm run dev
# → Astro dev server at http://localhost:4321
# Hot module reload, instant preview, error overlay
```

### 10.2 Branch strategy

```
main                  ← production (auto-deploys)
├── feature/[name]    ← new features / pages
├── content/[name]    ← new blog posts / content updates
├── fix/[name]        ← bug fixes
└── city/[name]       ← city-specific customizations
```

All branches get deploy previews. Merge to `main` via pull request with at least one review.

### 10.3 Pre-commit checks

Before every commit, run:
1. **`astro check`** — TypeScript and Astro template validation.
2. **`npm run build`** — full build to catch build errors.
3. **Lighthouse CI** — performance, accessibility, SEO scores.

Automate these with a pre-commit hook (Husky) or CI pipeline (GitHub Actions).

### 10.4 Recommended CI pipeline (GitHub Actions)

```yaml
name: Build & Audit
on: [push, pull_request]
jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with: { node-version: 20 }
      - run: npm ci
      - run: npm run build
      - run: npx astro check
      - name: Lighthouse CI
        uses: treosh/lighthouse-ci-action@v11
        with:
          urls: |
            http://localhost:4321/
            http://localhost:4321/services/
            http://localhost:4321/connect/
          budgetPath: ./lighthouse-budget.json
```

---

## 11. Environment-Specific Configuration

### 11.1 What changes per city

| Config | Where it lives | What changes |
|---|---|---|
| Site URL | `astro.config.mjs` → `site` | `https://[city]3pl.com` |
| City data | `src/data/city.ts` | Name, tagline, facility facts, accent color |
| Photography | `src/assets/` | All hero and facility photos |
| Blog content | `src/content/blog/` | City-specific posts |
| OG images | `public/img/` | City-branded share images |
| llms.txt | `public/llms.txt` | City-specific service list |
| Structured data | `src/data/city.ts` + schema builders | Address, geo, area served |

### 11.2 What NEVER changes per city

| Config | Where it lives | Stays the same |
|---|---|---|
| Component library | `@sams3pl/ui` or shared components | Identical across all sites |
| Brand constants | `src/data/brand.ts` | Phone, email, hours, company name |
| CSS custom properties | `src/styles/global.css` | All design tokens |
| Layout structure | `src/layouts/` | Same shell, header, footer |
| Font files | `public/fonts/` | Same typefaces |
| Build config | `astro.config.mjs` (except `site`) | Same plugins, same output |
| Accessibility patterns | All components | Same WCAG 2.2 AA compliance |
| Performance budgets | CI config | Same thresholds |

---

## 12. Adding a New City Site

Checklist for spinning up a new city (e.g., Nashville):

1. **Clone the template repo** (or the most recently completed city repo as a starting point).
2. **Update `astro.config.mjs`** — change `site` to `https://nashville3pl.com`.
3. **Update `src/data/city.ts`** — fill in Nashville's name, tagline, facility data, accent color, and verified logistics research.
4. **Replace all photography** in `src/assets/` with Nashville-specific images.
5. **Write Nashville-specific content** — hero copy, about page narrative, service descriptions with Nashville context.
6. **Update `public/llms.txt`** and `public/llms-full.txt` for Nashville.
7. **Update all OG images** in `public/img/`.
8. **Create a Cloudflare Pages project** — name it `nashville3pl`, connect the repo, configure the custom domain.
9. **Submit to Google Search Console and Bing Webmaster Tools.**
10. **Run the full pre-ship checklist** from `MASTER-MANUAL.md`.

Estimated time for an experienced developer with all content ready: **2–3 days** from clone to production.

---

## 13. Self-Check Before Shipping

1. `npm run build` completes with zero errors.
2. `astro check` reports no TypeScript or template issues.
3. All content collection entries pass Zod schema validation.
4. No raw `<img>` tags — all images use Astro's `<Image>` component or `<picture>`.
5. No framework components without a hydration directive (no orphaned `client:` omissions).
6. All hydration directives use the laziest option that works.
7. CSS custom properties are used for all colors, spacing, and typography — no magic numbers.
8. `robots.txt`, `sitemap.xml`, `llms.txt` are present and correct.
9. Deploy preview URL is live and visually correct.
10. Lighthouse CI passes all budget thresholds.
11. The shared component library version is up to date.
12. City data file is complete with verified facts (no placeholder text).

---

## 14. Sources

- [Astro documentation](https://docs.astro.build/)
- [Astro Content Collections](https://docs.astro.build/en/guides/content-collections/)
- [Astro Islands Architecture](https://docs.astro.build/en/concepts/islands/)
- [Cloudflare Pages documentation](https://developers.cloudflare.com/pages/)
- [Preact documentation](https://preactjs.com/) (recommended framework for interactive islands)
- Tyler's stack decisions from `MASTER-MANUAL.md` — Astro + Cloudflare Pages, MDX blog, no CMS initially

---

**End of Astro + Cloudflare Pages Stack.** Next skill to load: `08-forms-and-connect-cta.md` (the Connect form structure, field definitions, validation, submission handling, and honeypot anti-spam).
