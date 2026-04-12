---
name: SEO / AEO / GEO / AIO / LLMO — Sams 3PL Solutions
description: Search engine optimization, answer engine optimization, generative engine optimization, AI overview optimization, and large language model optimization. Covers on-page SEO, technical SEO, structured data, local SEO, content strategy for AI discoverability, and the llms.txt standard. Load this skill whenever building pages, writing content, auditing search performance, or planning blog topics.
type: seo
depends_on: 01-brand-system.md, 04-accessibility-wcag22aa.md
version: 1.0
last_updated: 2026-04-11
---

# SEO / AEO / GEO / AIO / LLMO

Search is the primary acquisition channel for every Sams 3PL Solutions city site. Most prospects will find us through one of five discovery paths:

1. **Traditional search (SEO)** — Google, Bing organic results.
2. **Answer engines (AEO)** — Google's featured snippets, "People Also Ask," and knowledge panels.
3. **Generative engines (GEO)** — Google AI Overviews, Bing Copilot, Perplexity, and similar systems that synthesize multi-source answers.
4. **AI overview optimization (AIO)** — specifically targeting Google's AI Overview carousel at the top of search results.
5. **Large language model optimization (LLMO)** — ensuring Claude, ChatGPT, Gemini, and other LLMs can discover, read, and recommend our content.

These five are not separate strategies. They share a single foundation: **authoritative, well-structured, honest content wrapped in clean semantic HTML with strong technical fundamentals.** This file defines how to build that foundation for every page and every post.

---

## 1. The SEO Non-Negotiables

From the Master Manual, the search-related non-negotiables:

- Every page is optimized for search, including AI discovery (non-negotiable #10).
- Schema.org markup on every page (non-negotiable #11).
- Blog is a content engine, not a checkbox (non-negotiable #12).
- Meta descriptions, titles, and OG tags on every page (non-negotiable #30).
- Sitemap.xml and robots.txt (non-negotiable #31).
- Every site publishes an llms.txt file (non-negotiable #32).

---

## 2. On-Page SEO — Every Page

### 2.1 Title tags

Every page has a unique, descriptive `<title>` following this pattern:

```
[Primary Keyword / Page Topic] — [City] 3PL | Sams 3PL Solutions
```

Examples:
```
Warehousing Services — Detroit 3PL | Sams 3PL Solutions
Cross-Dock & Transloading — Toledo 3PL | Sams 3PL Solutions
About Our Facility — Houston 3PL | Sams 3PL Solutions
Connect With Our Team — Columbus 3PL | Sams 3PL Solutions
```

Rules:
- **50–60 characters** (Google truncates around 60). The city name and brand are non-negotiable in every title, so the primary keyword portion must be tight.
- **Primary keyword first.** "Warehousing Services" before "Detroit 3PL."
- **No keyword stuffing.** One primary keyword per title. The title reads like a sentence fragment, not a list of terms.
- **Unique across the network.** No two pages on any Sams 3PL site share a title. No two sites in the network should share a title either.

### 2.2 Meta descriptions

Every page has a hand-written meta description:

```html
<meta name="description" content="Detroit's full-service warehousing with 200,000 sq ft, 24 docks, and 24/7 operations. Real facility, real team, real results. Connect with Sams 3PL Solutions.">
```

Rules:
- **120–155 characters.** Shorter than this wastes SERP real estate; longer gets truncated.
- **Include the city name and a differentiating fact.** Square footage, dock count, a specific service — something that proves we're real.
- **End with a call to action.** "Connect with Sams 3PL Solutions" or "Get a quote today."
- **No duplicates.** Every page, every site, unique description.
- **No empty descriptions.** An empty meta description lets Google generate one, and Google's auto-generated descriptions are usually worse than anything we'd write.

### 2.3 Heading structure

The heading hierarchy serves both accessibility (§04) and SEO:

- **One `<h1>` per page.** It contains the primary keyword naturally. "Warehousing Services in Detroit" — not "Detroit Warehousing 3PL Services Warehouse Storage."
- **H2s divide the page into major sections.** Each H2 targets a secondary keyword or a "People Also Ask" question.
- **H3s subdivide H2 sections.** These often map to specific long-tail queries.
- **Never skip heading levels** (h1 → h3 is wrong, always go h1 → h2 → h3).

### 2.4 URL structure

Clean, keyword-descriptive URLs:
```
https://detroit3pl.com/services/warehousing/
https://detroit3pl.com/blog/cross-dock-vs-transloading/
https://detroit3pl.com/about/
```

Rules:
- Lowercase, hyphen-separated.
- No trailing `.html`, no query strings in canonical URLs.
- No date in blog URLs — keeps evergreen content looking evergreen.
- Trailing slash, consistently. Redirect non-trailing-slash to trailing-slash.
- Canonical URL is always HTTPS.

### 2.5 Internal linking

Every page links to at least two other pages on the same site. Internal links:
- Use descriptive anchor text ("our warehousing services" — not "click here").
- Follow a hub-and-spoke model: the Services overview page is the hub, individual service pages are spokes, and they all cross-link.
- Blog posts link to relevant service pages. Service pages link to relevant blog posts. This creates topical clusters that search engines reward.

### 2.6 Image SEO

Every image on every page:
- Has descriptive, keyword-aware `alt` text (per `04-accessibility-wcag22aa.md` §3.1, but also an SEO signal).
- Uses a descriptive filename: `detroit-warehouse-loading-dock.webp` — not `IMG_4823.webp`.
- Is served in WebP or AVIF format at the exact rendered dimensions (no 4000px images displayed at 800px).
- Includes `width` and `height` attributes to prevent CLS (per `06-performance.md`).

---

## 3. Technical SEO — Site Infrastructure

### 3.1 Sitemap

Every site publishes a `sitemap.xml` at the root:

```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://detroit3pl.com/</loc>
    <lastmod>2026-04-10</lastmod>
    <changefreq>monthly</changefreq>
    <priority>1.0</priority>
  </url>
  <url>
    <loc>https://detroit3pl.com/services/</loc>
    <lastmod>2026-04-10</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
  <!-- all pages -->
</urlset>
```

Astro can auto-generate this. Verify it includes every public page and excludes drafts, 404, and admin routes. Submit the sitemap to Google Search Console and Bing Webmaster Tools.

### 3.2 Robots.txt

```
User-agent: *
Allow: /
Sitemap: https://detroit3pl.com/sitemap.xml

# Block admin/draft routes if they exist
Disallow: /admin/
Disallow: /drafts/
```

Keep it simple. Don't block CSS or JS files — search engines need to render the page to evaluate it.

### 3.3 Canonical URLs

Every page specifies its canonical URL:
```html
<link rel="canonical" href="https://detroit3pl.com/services/warehousing/">
```

This prevents duplicate content issues from trailing slashes, query parameters, or HTTP vs. HTTPS. The canonical is always the HTTPS, trailing-slash, www-free version.

### 3.4 Redirects

- HTTP → HTTPS: 301 redirect at the Cloudflare level.
- Non-trailing-slash → trailing-slash: 301 redirect.
- Old page URLs → new page URLs when restructuring: 301 redirect. Never let an old URL return a 404 if it ever had indexed content.
- Redirect chains (A → B → C) are bad. Every redirect should go directly to the final destination.

### 3.5 Page speed as an SEO signal

Core Web Vitals are a confirmed Google ranking factor. The performance targets in `06-performance.md` (LCP <2.5s, INP <200ms, CLS <0.1) serve SEO directly. Every millisecond of LCP improvement is a marginal ranking advantage.

### 3.6 Mobile-first indexing

Google indexes the mobile version of every page. This means:
- The mobile version must contain the same content as the desktop version. Don't hide content behind "show more" toggles that only appear on mobile.
- Structured data must be present in the mobile HTML, not just the desktop.
- Mobile usability must pass Google's Mobile-Friendly Test.

### 3.7 HTTPS

All Sams 3PL sites are served over HTTPS. Cloudflare Pages handles this automatically with free SSL. Verify that no mixed-content warnings exist (HTTP resources loaded on HTTPS pages).

---

## 4. Structured Data (Schema.org)

Schema.org markup is how we speak directly to search engines in their own language. It powers rich snippets, knowledge panels, and AI overview citations.

### 4.1 Required schema on every page

**Organization (on every page, in the `<head>` as JSON-LD):**
```json
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Sams 3PL Solutions",
  "url": "https://sams3plsolutions.com",
  "logo": "https://sams3plsolutions.com/logo.svg",
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+1-419-745-9492",
    "contactType": "customer service",
    "availableLanguage": "English",
    "hoursAvailable": "Mo-Su 00:00-23:59"
  },
  "sameAs": [
    "https://www.linkedin.com/company/sams-3pl-solutions"
  ]
}
```

**LocalBusiness (on every city site's home page and about page):**
```json
{
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Sams 3PL Solutions — Detroit",
  "image": "https://detroit3pl.com/facility-exterior.webp",
  "url": "https://detroit3pl.com",
  "telephone": "+1-419-745-9492",
  "email": "info@sams3plsolutions.com",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "[facility street address]",
    "addressLocality": "Detroit",
    "addressRegion": "MI",
    "postalCode": "[zip]",
    "addressCountry": "US"
  },
  "openingHours": "Mo-Su 00:00-23:59",
  "description": "Full-service 3PL warehousing, fulfillment, and distribution in Detroit, Michigan.",
  "areaServed": {
    "@type": "City",
    "name": "Detroit"
  },
  "parentOrganization": {
    "@type": "Organization",
    "name": "Sams 3PL Solutions",
    "url": "https://sams3plsolutions.com"
  }
}
```

**BreadcrumbList (on every page below home):**
```json
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Home",
      "item": "https://detroit3pl.com/"
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "Services",
      "item": "https://detroit3pl.com/services/"
    },
    {
      "@type": "ListItem",
      "position": 3,
      "name": "Warehousing",
      "item": "https://detroit3pl.com/services/warehousing/"
    }
  ]
}
```

### 4.2 Page-type-specific schema

**Service pages — Service schema:**
```json
{
  "@context": "https://schema.org",
  "@type": "Service",
  "serviceType": "Warehousing",
  "provider": {
    "@type": "LocalBusiness",
    "name": "Sams 3PL Solutions — Detroit"
  },
  "areaServed": {
    "@type": "City",
    "name": "Detroit"
  },
  "description": "200,000 sq ft climate-controlled warehousing with 24 docks, real-time WMS, and 24/7 operations support."
}
```

**FAQ sections — FAQPage schema:**
```json
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What is cross-docking?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Cross-docking is a logistics practice where inbound shipments are directly transferred to outbound vehicles with minimal storage time, reducing handling costs and delivery timelines."
      }
    }
  ]
}
```

FAQ schema directly feeds Google's "People Also Ask" and AI Overviews. Every service page should include an FAQ section with 3–5 real questions that prospects actually ask. Don't fabricate questions — ask Tyler and the operations team what prospects call about.

**Blog posts — Article schema:**
```json
{
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Cross-Dock vs. Transloading: Which Does Your Supply Chain Need?",
  "author": {
    "@type": "Person",
    "name": "Marcus Cole",
    "url": "https://detroit3pl.com/blog/author/marcus-cole/"
  },
  "datePublished": "2026-04-10",
  "dateModified": "2026-04-10",
  "image": "https://detroit3pl.com/blog/cross-dock-vs-transloading/hero.webp",
  "publisher": {
    "@type": "Organization",
    "name": "Sams 3PL Solutions",
    "logo": {
      "@type": "ImageObject",
      "url": "https://sams3plsolutions.com/logo.svg"
    }
  },
  "mainEntityOfPage": {
    "@type": "WebPage",
    "@id": "https://detroit3pl.com/blog/cross-dock-vs-transloading/"
  }
}
```

### 4.3 Schema validation

Before deploying any page with new schema:
1. Paste the JSON-LD into [Google's Rich Results Test](https://search.google.com/test/rich-results).
2. Fix every error and warning.
3. After deployment, monitor Google Search Console's Enhancements reports for structured data issues.

---

## 5. Local SEO — City-by-City

Every Sams 3PL site is inherently local. Local SEO is how we win the "3PL near me" and "[city] warehouse" queries.

### 5.1 Google Business Profile

Every city with a physical facility gets a verified Google Business Profile (GBP):
- Business name: "Sams 3PL Solutions — [City]"
- Category: "Third-Party Logistics Provider" (primary), "Warehouse" (secondary), "Freight Forwarding Service" (secondary where applicable)
- Description: matches the meta description of the city's home page.
- Photos: real facility photos (no stock), updated quarterly.
- Hours: "24/7 Operations Support" (matches site).
- Website: links to the city-specific domain (not the parent sams3plsolutions.com).
- Posts: share blog content to GBP monthly.
- Reviews: actively solicit reviews from satisfied clients. Respond to every review — positive or negative — within 48 hours.

### 5.2 NAP consistency

**NAP = Name, Address, Phone.** It must be identical across:
- The website (header, footer, about page, contact page).
- Google Business Profile.
- Bing Places for Business.
- Apple Business Connect.
- Every directory listing (Yelp, BBB, industry directories).
- Schema.org LocalBusiness markup.

Any inconsistency — a missing suite number, an abbreviated street name, a different phone format — weakens local SEO signals. Use the exact same string everywhere, character for character.

### 5.3 City-specific content

The city character injection described in `12-city-character-injection.md` is also an SEO strategy:
- Mentioning verified local details (port data, interstate logistics corridors, local economic context) creates content that's naturally unique to each city — the opposite of thin, duplicated content across a multi-location network.
- Each city's blog should cover local logistics topics ("How Detroit's Proximity to the Canadian Border Affects Cross-Border Freight") rather than generic industry content duplicated across all 12 sites.

### 5.4 Service-area pages vs. location pages

Each city domain IS the location page. Don't create separate "service area" subpages for nearby suburbs unless there's clear search demand. One strong city page outranks twenty thin suburb pages.

---

## 6. E-E-A-T — Experience, Expertise, Authoritativeness, Trustworthiness

E-E-A-T is Google's quality framework. It's not a direct ranking factor — it's the lens Google's quality raters use to evaluate content. Every signal below builds E-E-A-T.

### 6.1 Experience

Prove we have first-hand experience in logistics:
- Real facility photos, not stock.
- Specific details: dock count, square footage, WMS platform, certifications.
- Case-study-style content that describes real scenarios (anonymized if needed).
- The COPE-derived facility facts from `MASTER-MANUAL.md` — these are the kind of details only a real operator knows.

### 6.2 Expertise

Prove we know what we're talking about:
- Blog content written by named author personas with logistics expertise (see `10-blog-system.md`).
- Author bios that establish credentials.
- FAQ answers that are specific and detailed, not generic copy-paste.
- Content that uses correct industry terminology — "cross-docking," "transloading," "SKU velocity," "dock-to-stock cycle time" — without over-explaining to the point of condescension.

### 6.3 Authoritativeness

Prove others recognize our expertise:
- Client testimonials with attribution (name, company, role where permitted).
- Industry associations and certifications displayed on the about page.
- Backlinks from industry publications, local business directories, and chamber of commerce pages.
- Google Business Profile reviews.
- Social proof: named clients, volume handled, years of operation.

### 6.4 Trustworthiness

Prove we're honest and safe:
- HTTPS (always).
- Clear privacy policy at `/privacy/`.
- Visible contact information on every page.
- Accurate, verifiable claims — never "100+ happy customers" if we can't name them. Only real numbers.
- Accessibility statement at `/accessibility/`.
- No deceptive patterns: no fake urgency, no dark-pattern forms, no misleading CTAs.

---

## 7. Answer Engine Optimization (AEO)

AEO targets the zero-click results: featured snippets, "People Also Ask" boxes, knowledge panels, and voice-search answers.

### 7.1 Featured snippet targeting

Structure content to win featured snippets:

**Paragraph snippets (the most common):**
- Ask a question in an H2 or H3.
- Answer it in 40–60 words immediately below the heading.
- Follow with expanded detail.

Example:
```markdown
## What is cross-docking?

Cross-docking is a logistics practice where inbound freight is unloaded at a facility 
and directly loaded onto outbound vehicles with minimal or no storage time. It reduces 
warehousing costs, shortens delivery timelines, and works best for high-velocity, 
time-sensitive shipments.

### How cross-docking works at our Detroit facility
[expanded detail...]
```

**List snippets:**
- Use an H2 that implies a list ("Steps to…", "Types of…", "Benefits of…").
- Follow with a numbered or bulleted list of 5–8 items.
- Each item starts with a bolded keyword phrase.

**Table snippets:**
- Use real `<table>` elements for comparative data.
- Include a descriptive `<caption>` or preceding heading.

### 7.2 "People Also Ask" targeting

Every service page and long-form blog post includes an FAQ section with 3–5 questions that real prospects ask. These map to FAQPage schema (§4.2) and often surface in PAA boxes.

The questions must be:
- Phrased the way a real human would type them ("How much does 3PL cost?" not "3PL cost structure overview").
- Answered concisely in the first sentence, then expanded.
- Based on actual prospect questions (ask the ops team), keyword research, and Google's own PAA suggestions.

### 7.3 Voice search

Voice searches are conversational and question-based. Our FAQ sections naturally target these. Additional voice-search tactics:
- Include the city name in conversational answers ("Our Detroit warehouse handles cross-docking from 6 AM to midnight, seven days a week").
- Keep answers under 30 words for the initial response — voice assistants read the first sentence.

---

## 8. Generative Engine Optimization (GEO) and AI Overview Optimization (AIO)

GEO and AIO target the AI-synthesized answers that appear at the top of Google (AI Overviews), in Bing Copilot, in Perplexity, and in similar systems. These systems work differently from traditional search — they don't just rank pages, they synthesize content from multiple sources into a single answer and cite the sources that contributed.

### 8.1 How to get cited by AI Overviews

AI Overviews cite sources that are:

1. **Authoritative** — established sites with strong E-E-A-T signals.
2. **Directly relevant** — the page answers the exact question being synthesized.
3. **Clearly structured** — headings, lists, tables, and FAQ sections that are easy for AI to parse.
4. **Fact-dense** — specific numbers, named entities, and verifiable claims rather than vague marketing language.
5. **Unique** — content that adds perspective not found in the top 10 results.

Our strategy: every page should contain at least one passage that is **the single best 40–60 word answer** to a question a prospect would ask. This is the "snippet-worthy passage" — the content AI systems are most likely to cite.

### 8.2 Content structure for AI parsing

AI systems parse content best when it follows a predictable structure:

```
H2: [Question or topic]
  ↳ 1–2 sentence direct answer (the "snippet-worthy passage")
  ↳ Expanded explanation (2–3 paragraphs)
  ↳ Supporting data (table, list, or stat block)
  ↳ Source/attribution for claims
```

This is identical to good SEO structure — GEO doesn't require a different content format, just a more disciplined version of the same format.

### 8.3 Structured claims and citations

When making factual claims in content:
- **Cite the source.** "According to CBRE's 2025 Industrial Market Report, vacancy rates in Detroit's I-94 corridor…" Sources make content citable by AI systems.
- **Use specific numbers.** "200,000 square feet" is AI-parseable and citable; "large warehouse" is not.
- **Name entities.** "Detroit," "I-94 corridor," "Sams 3PL Solutions" — named entities help AI systems connect claims to knowledge graphs.

### 8.4 What NOT to do for GEO

- Don't stuff content with AI-bait phrases like "as an AI, I can tell you…" or "according to leading experts…" without naming them.
- Don't create thin, AI-generated content farms. AI systems are trained to detect and deprioritize this.
- Don't repeat the same answer across multiple pages in the network. Each city site's answer should be unique, reflecting that city's specific context.

---

## 9. Large Language Model Optimization (LLMO)

LLMO is about making our content discoverable by LLMs (Claude, ChatGPT, Gemini) that people use as research tools. When a procurement manager asks their AI assistant "What are the best 3PL providers in Detroit?", we want to appear in the answer.

### 9.1 The llms.txt file

Every Sams 3PL site publishes an `llms.txt` file at the root:

```
# Sams 3PL Solutions — Detroit

> Full-service third-party logistics provider in Detroit, Michigan. 
> Warehousing, fulfillment, cross-docking, and distribution services.
> A Sams 3PL Solutions Company.

## About

- [About Our Facility](https://detroit3pl.com/about/)
- [Our Services](https://detroit3pl.com/services/)

## Services

- [Warehousing](https://detroit3pl.com/services/warehousing/)
- [Fulfillment](https://detroit3pl.com/services/fulfillment/)
- [Cross-Docking](https://detroit3pl.com/services/cross-dock/)
- [Distribution](https://detroit3pl.com/services/distribution/)

## Contact

- Phone: +1 (419) 745-9492
- Email: info@sams3plsolutions.com
- Hours: 24/7 Operations Support
- [Connect Form](https://detroit3pl.com/connect/)

## Blog (Recent)

- [Cross-Dock vs. Transloading](https://detroit3pl.com/blog/cross-dock-vs-transloading/)
- [How Detroit's Border Proximity Benefits Your Supply Chain](https://detroit3pl.com/blog/detroit-border-proximity/)
```

The `llms.txt` format is a lightweight, markdown-like convention that helps LLM crawlers quickly understand a site's structure and content. Keep it updated when pages are added or removed.

### 9.2 A companion llms-full.txt file

For LLMs that want deeper context, publish `llms-full.txt` with extended descriptions of each service, facility facts, and key blog summaries. This is the "comprehensive briefing" version — think of it as the page you'd want an AI assistant to read before recommending your company.

### 9.3 Content that trains trust

LLMs build their understanding of a company from the content they can access. To build a positive, accurate representation:

- **Be specific and factual.** LLMs prefer verifiable claims over marketing superlatives. "200,000 sq ft warehouse with 24 loading docks" is better than "state-of-the-art facility."
- **Use consistent naming.** Always "Sams 3PL Solutions" (no apostrophe). Consistent naming helps LLMs correctly associate content with the entity.
- **Publish on authoritative external platforms.** Guest posts on industry publications, press releases on PR wires, directory listings with full profiles — these create training data across multiple sources.
- **Answer real questions.** FAQ content, blog posts that explain logistics concepts, "how it works" sections — this is the content LLMs cite when answering user questions.

### 9.4 AI-readable content principles

- **No content behind login walls, JavaScript rendering, or CAPTCHAs.** AI crawlers need to access the content as easily as search engines do. Astro's static HTML generation handles this beautifully.
- **Clean HTML without excessive nesting.** LLM crawlers parse HTML — cleaner markup means better understanding.
- **Descriptive headings.** An LLM reading our page should be able to construct a useful summary from the headings alone.
- **One topic per page.** Focused pages are more likely to be cited than unfocused pages that cover everything superficially.

---

## 10. Content Strategy for Multi-City SEO

### 10.1 The duplicate content problem

A network of 12 city sites describing the same services is a duplicate-content risk. Google penalizes thin, duplicated content across domains. Our defense:

1. **City-specific content on every page.** The warehousing page on detroit3pl.com and the warehousing page on houston3pl.com must be meaningfully different — different facility photos, different square footage, different dock counts, different local context ("Detroit's proximity to the Canadian border" vs. "Houston's connection to the Port of Houston").
2. **City research briefs** (see `city-research-brief-TEMPLATE.md`) ensure every city has unique, verified data to work with.
3. **Unique blog content per city.** Some blog topics can be shared across the network (with unique city angles), but the majority should be city-specific.
4. **No boilerplate blocks.** If a paragraph appears identically on two sites, rewrite one or both.

### 10.2 The parent-child relationship

`sams3plsolutions.com` is the parent brand site. The 12 city domains are children. The parent site:
- Establishes the Organization schema that child sites reference via `parentOrganization`.
- Provides the canonical brand description, leadership team, and company story.
- Links to all city sites (the network page).
- Does NOT duplicate the city-specific content — it links to it.

City sites:
- Reference the parent brand via the "A Sams 3PL Solutions Company" lockup and `parentOrganization` schema.
- Link to the parent site's about page for company-level information.
- Own all city-specific content, service descriptions, and blog posts.

### 10.3 Cross-linking within the network

City sites can link to each other where it's natural and useful:
- "Shipping from Detroit to Houston? We operate in both cities." with a link to houston3pl.com.
- Blog posts that reference logistics corridors spanning multiple Sams 3PL cities.

But cross-linking should be organic, not forced. A dozen "See our other locations" links on every page looks like a link farm.

---

## 11. Open Graph and Social Meta

Every page includes Open Graph and Twitter Card meta tags:

```html
<meta property="og:title" content="Warehousing Services — Detroit 3PL | Sams 3PL Solutions">
<meta property="og:description" content="200,000 sq ft, 24 docks, 24/7 operations. Real facility, real team.">
<meta property="og:image" content="https://detroit3pl.com/og/warehousing.jpg">
<meta property="og:url" content="https://detroit3pl.com/services/warehousing/">
<meta property="og:type" content="website">
<meta property="og:site_name" content="Sams 3PL Solutions — Detroit">

<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="Warehousing Services — Detroit 3PL | Sams 3PL Solutions">
<meta name="twitter:description" content="200,000 sq ft, 24 docks, 24/7 operations. Real facility, real team.">
<meta name="twitter:image" content="https://detroit3pl.com/og/warehousing.jpg">
```

**OG image rules:**
- Every page has a unique OG image — never the same image across multiple pages.
- OG images are 1200×630px, pre-generated, and hosted on the site (not generated by a third-party service that might go down).
- The image should be a real photograph or a branded graphic — never a blank placeholder.

---

## 12. Monitoring and Measurement

### 12.1 Required tools

- **Google Search Console:** Submit sitemap, monitor indexing, track search queries, identify crawl errors. Check weekly.
- **Bing Webmaster Tools:** Same as above for Bing.
- **Google Analytics 4:** Traffic, conversions, user behavior. See `11-analytics-and-consent.md`.
- **Google Business Profile Insights:** Local search impressions, direction requests, phone calls.

### 12.2 Key metrics to track

- **Organic search impressions and clicks** per page (Search Console).
- **Average position** for target keywords (Search Console).
- **Featured snippet appearances** (Search Console → "Search Appearance" filter).
- **Core Web Vitals field data** (Search Console → "Core Web Vitals" report).
- **Index coverage** — all pages indexed, no errors (Search Console).
- **Local pack appearances** (track manually or via a rank-tracking tool).
- **Referral traffic from AI platforms** (GA4 — filter for referrals from chat.openai.com, claude.ai, perplexity.ai, etc.).

### 12.3 Quarterly SEO audit

Every quarter, run:
1. Full-site crawl with Screaming Frog or Sitebulb. Fix broken links, missing titles, duplicate meta, orphan pages.
2. Schema validation on every page with structured data.
3. Core Web Vitals check via PageSpeed Insights on all key pages.
4. Keyword ranking review — are we moving up, holding, or slipping?
5. Competitive review — what are the other 3PL companies in each city doing that we're not?
6. Content freshness check — any blog posts older than 12 months that need updating?

---

## 13. Self-Check Before Shipping Any Page

1. Title tag is unique, 50–60 characters, primary keyword first, includes city name and brand.
2. Meta description is unique, 120–155 characters, includes a differentiating fact and a CTA.
3. One H1, proper heading hierarchy (no skips), keywords natural in headings.
4. URL is clean, lowercase, hyphenated, no query strings, trailing slash.
5. Canonical URL is set and correct.
6. At least two internal links to other pages on the same site.
7. All images have descriptive alt text and descriptive filenames.
8. Organization schema present in the head.
9. Page-type-specific schema present (LocalBusiness, Service, FAQPage, Article, BreadcrumbList).
10. OG and Twitter Card meta tags present with a unique OG image.
11. The page contains at least one "snippet-worthy passage" — a 40–60 word direct answer to a prospect's question.
12. FAQ section with 3–5 real questions and FAQPage schema (on service and blog pages).
13. No duplicate content shared with another city site in the network.
14. llms.txt is updated to include this page (if it's a major page).
15. Sitemap is updated to include this page.

---

## 14. Sources

- [Google Search Central documentation](https://developers.google.com/search/docs)
- [Google's Structured Data guidelines](https://developers.google.com/search/docs/appearance/structured-data)
- [Google Quality Rater Guidelines (E-E-A-T)](https://developers.google.com/search/docs/fundamentals/creating-helpful-content)
- [Schema.org specification](https://schema.org/)
- [llms.txt specification](https://llmstxt.org/)
- [Google AI Overviews documentation](https://blog.google/products/search/generative-ai-google-search-may-2024/)
- Tyler's non-negotiables #10, #11, #12, #30, #31, #32 from `MASTER-MANUAL.md`
- Tyler's SEO Workflow document (uploaded in session 1)

---

**End of SEO / AEO / GEO / AIO / LLMO.** Next skill to load: `06-performance.md` (Core Web Vitals, image optimization, font loading, and Lighthouse budgets).
