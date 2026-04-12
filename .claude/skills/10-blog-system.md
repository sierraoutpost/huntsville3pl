---
name: Blog System — The Blog Machine — Sams 3PL Solutions
description: The five-stage blog pipeline (Detect → Verify → Draft → Approve → Publish), author persona system, content strategy, MDX workflow, frontmatter schema, editorial standards, E-E-A-T signals, and per-city content differentiation. Load this skill whenever planning, writing, editing, or publishing blog content on any Sams 3PL site.
type: content
depends_on: 01-brand-system.md, 05-seo-aeo-geo-llmo.md, 07-astro-cloudflare-stack.md, 09-photography-and-imagery.md
version: 1.0
last_updated: 2026-04-11
---

# Blog System — The Blog Machine

The blog is non-negotiable #12 in the Master Manual: **"The blog is a content engine, not a checkbox."** It is not a dusty "News" section with one post from 2022. It is an active, city-specific, SEO-driving, E-E-A-T-building publishing operation that treats every post as a chance to earn trust, rank, and leads.

We call it the Blog Machine because that's what it is — a repeatable system with clear stages, consistent standards, and measurable output. It runs on Astro Content Collections with MDX, publishes to each city site independently, and feeds the SEO, AEO, GEO, and LLMO strategies defined in `05-seo-aeo-geo-llmo.md`.

---

## 1. The Five-Stage Pipeline

Every blog post moves through five stages. No post ships without clearing all five.

### Stage 1: Detect

Identify a topic worth writing about. Sources:

- **Prospect questions.** What are people asking on the Connect form, on the phone, or in sales conversations? Every question is a blog post. "What's the difference between cross-docking and transloading?" is a 1,500-word article waiting to happen.
- **Keyword research.** What are prospects searching for? Use Google Search Console (existing queries we rank for), Google autocomplete, "People Also Ask" boxes, and tools like Ahrefs, SEMrush, or Ubersuggest. Target keywords where we can realistically rank — typically long-tail, city-specific queries.
- **Industry developments.** New regulations, tariff changes, port disruptions, seasonal logistics patterns, technology shifts. These are time-sensitive and earn links when published quickly.
- **City-specific angles.** Local economic news, infrastructure changes, new trade routes, city logistics facts. These are the posts that differentiate one city site from another.
- **Competitor content gaps.** What are other 3PLs in each city writing about? What are they missing? The gap is our opportunity.

**Output:** A one-line topic statement and a target keyword.

### Stage 2: Verify

Before writing a single word, verify:

1. **Is this topic already covered on this city site?** If yes, update the existing post instead of creating a duplicate.
2. **Is the target keyword realistic?** Check search volume (even rough estimates) and competition. A keyword with zero search volume isn't worth a full article — it might be worth an FAQ answer on a service page instead.
3. **Do we have the expertise to write this well?** If the topic requires specialized knowledge (e.g., hazmat handling regulations), involve someone with first-hand experience or cite authoritative external sources. Don't fake expertise.
4. **Can we add a city-specific angle?** A generic "What Is Cross-Docking?" post has value, but "How Cross-Docking Works at Our Detroit Facility on the I-94 Corridor" has more value, ranks better locally, and builds E-E-A-T.
5. **Is there a real photo we can use?** Per `09-photography-and-imagery.md`, every post needs a hero image. If no relevant real photo exists and none can be sourced from approved stock, the topic waits until imagery is available.

**Output:** A green light to draft, or a redirect to a better topic.

### Stage 3: Draft

Write the post. Follow the editorial standards in §4 and the structural template in §5. Key requirements:

- The post is written by one of the permanent author personas (§3).
- The post targets one primary keyword and 2–3 secondary keywords naturally.
- The post answers a real question in the first 100 words (for featured snippet targeting per `05-seo-aeo-geo-llmo.md` §7.1).
- The post includes at least one "snippet-worthy passage" of 40–60 words.
- The post links to at least one service page and one other blog post (internal linking).
- The post includes a city-specific angle where applicable.
- The frontmatter is complete per the Zod schema (§6).

**Output:** A complete MDX file ready for review.

### Stage 4: Approve

Before publishing, the post must pass:

1. **Factual accuracy check.** Are all claims verifiable? Are statistics sourced? Are industry terms used correctly?
2. **Brand voice check.** Does it sound like Sams 3PL — approachable, knowledgeable, precise, with a sprinkle of street smarts? Or does it sound like ChatGPT wrote it? (See §4.3 for the voice filter.)
3. **SEO check.** Title tag under 60 chars? Meta description 120–155 chars? H1 contains primary keyword? Internal links present? FAQ section with schema?
4. **Image check.** Hero image is real, properly licensed, alt text is descriptive, file is named correctly?
5. **Accessibility check.** Heading hierarchy is correct? All images have alt text? Link text is descriptive?
6. **Technical check.** Frontmatter validates against the Zod schema? MDX renders without errors? Build succeeds?

**Output:** Approval to publish, or a return to Stage 3 with specific revision notes.

### Stage 5: Publish

Deploy the post:

1. Merge the MDX file to `main`.
2. Cloudflare Pages auto-deploys.
3. Verify the live post renders correctly.
4. Verify the Article schema is valid (Google Rich Results Test).
5. Update `llms.txt` if the post is a cornerstone piece.
6. Submit the URL to Google Search Console for indexing.
7. Share on social / Google Business Profile if applicable.
8. Update the blog index page if it uses manual curation.

**Output:** A live, indexed, schema-marked, properly attributed blog post.

---

## 2. Content Strategy

### 2.1 Content pillars

Every Sams 3PL blog organizes content around four pillars:

1. **Services deep-dives.** Detailed explanations of what we do: warehousing, fulfillment, cross-docking, transloading, transportation. Each service gets at least 2–3 cornerstone articles that serve as the definitive resource for prospects researching that service.

2. **Industry education.** Broader logistics topics that demonstrate expertise: supply chain management concepts, industry trends, regulatory updates, technology developments. These attract top-of-funnel traffic from people researching the industry.

3. **City logistics.** City-specific content that builds local authority: port data, interstate corridor analysis, local economic context, seasonal logistics patterns, case-study-style operational narratives. These are the posts that differentiate us from generic industry blogs.

4. **Company perspective.** Behind-the-scenes looks at how we operate: facility spotlights, team introductions, process improvements, community involvement. These build the "Experience" dimension of E-E-A-T.

### 2.2 Publishing cadence

Target: **2–4 posts per city per month.** Quality always wins over quantity — one excellent post beats four mediocre ones.

Minimum viable cadence: **1 post per city per month.** Below this, the blog looks abandoned.

### 2.3 Content differentiation across the network

The 12 city sites must NOT publish identical content. Per `05-seo-aeo-geo-llmo.md` §10.1, duplicate content across the network is a ranking risk.

**Allowed sharing strategies:**
- A topic can be covered on multiple city sites IF each version has a unique city angle, unique photography, and at least 60% unique body content. "How Cross-Docking Works" on detroit3pl.com and "How Cross-Docking Works" on houston3pl.com should be meaningfully different articles with different local context, different facility details, and different local logistics data.
- Evergreen explainers (e.g., "What Is a 3PL?") can use a shared outline but must be fully rewritten per city with local examples.

**Forbidden:**
- Copy-pasting the same article to multiple city blogs with only the city name swapped. This is the multi-location SEO equivalent of a template, and search engines penalize it.

---

## 3. Author Personas

### 3.1 Why personas

Blog posts need named authors for E-E-A-T. Google's quality raters evaluate whether content has a clear, identifiable author with relevant expertise. Anonymous corporate blog posts score poorly.

Sams 3PL uses a system of **permanent author personas** — named identities with consistent bios, expertise areas, and writing voices. These personas may map to real team members or may be editorial identities that represent the company's collective expertise.

### 3.2 The roster

The following 12 personas cover the content pillars and can be assigned across the network. Not every city uses every persona — assign based on the city's content needs.

| Persona | Expertise | Voice | Typical topics |
|---|---|---|---|
| **Marcus Cole** | Warehouse operations, facility management | Direct, practical, experienced | Service deep-dives, facility spotlights, process optimization |
| **Elena Vasquez** | Supply chain strategy, industry trends | Analytical, forward-thinking | Industry education, trend analysis, regulatory updates |
| **Devon Mitchell** | Transportation, freight, cross-docking | Energetic, detail-oriented | Transportation logistics, cross-dock operations, routing |
| **Sonia Park** | Fulfillment, e-commerce logistics | Precise, customer-focused | Fulfillment processes, e-commerce growth, order accuracy |
| **James Whitaker** | City logistics, economic development | Storytelling, local pride | City logistics content, corridor analysis, local economic context |
| **Aisha Rahman** | Technology, WMS, automation | Technical but accessible | Tech adoption, WMS features, data-driven logistics |
| **Carlos Mendez** | Safety, compliance, training | Calm, authoritative | OSHA compliance, safety culture, training processes |
| **Rachel Kim** | Client relationships, business development | Warm, consultative | Company perspective, client stories, relationship-building |
| **Terrence Brooks** | Loading dock operations, equipment | Hands-on, no-nonsense | Dock operations, equipment guides, seasonal logistics |
| **Natalie Frost** | Cold chain, specialty storage | Meticulous, science-minded | Temperature-controlled logistics, pharma, food & bev |
| **Omar Hassan** | International logistics, cross-border | Worldly, process-oriented | Cross-border freight, customs, international trade |
| **Diane Calloway** | Company leadership, vision | Executive, inspiring | Company direction, industry positioning, network growth |

### 3.3 Author bios

Each persona has a consistent bio used across all city sites where they appear:

```
Marcus Cole has spent 15 years on warehouse floors — from picking lines 
to facility management. At Sams 3PL Solutions, he focuses on operational 
efficiency that actually works in practice, not just on paper. When he's 
not optimizing dock schedules, he's probably arguing about forklift 
maintenance intervals.
```

Bios are 2–3 sentences, written in the brand voice, and include a humanizing personal detail. They are consistent everywhere that persona appears — same bio on detroit3pl.com and houston3pl.com.

### 3.4 Author pages

Each persona has an author archive page:
```
/blog/author/marcus-cole/
```

This page shows:
- The author's bio.
- A headshot (commissioned Tier 1 for real team members; for editorial personas, use a consistent illustrated avatar or initials — NEVER a stock headshot pretending to be a person who doesn't exist, per `09-photography-and-imagery.md` §6.5).
- All posts by that author on this city site.
- Article schema with the author's `Person` entity.

Author pages build E-E-A-T by giving search engines (and real readers) a clear identity to associate with the content.

### 3.5 Assigning authors to posts

Match the author's expertise to the post's topic:
- A warehousing deep-dive → Marcus Cole.
- An industry trend analysis → Elena Vasquez.
- A city logistics piece → James Whitaker.
- A fulfillment process post → Sonia Park.

An author should never write outside their established expertise area. If Marcus Cole suddenly publishes a post about cold chain pharmaceuticals, it undermines the expertise signal for both Marcus and the blog.

---

## 4. Editorial Standards

### 4.1 Length

- **Standard posts:** 1,000–2,000 words. Long enough to be thorough, short enough to be read.
- **Cornerstone posts:** 2,000–3,500 words. Comprehensive resources that target competitive keywords and serve as pillar content.
- **Quick takes / news responses:** 400–800 words. Time-sensitive, published fast, updated as information develops.

Never pad a post to hit a word count. If the topic is fully covered in 800 words, publish at 800 words. The extra 200 words of filler actively hurt readability and E-E-A-T.

### 4.2 Structure

Every post follows this structural template:

```
Title (H1) — contains primary keyword naturally
  ↳ Opening paragraph (100 words max) — answers the core question immediately
  ↳ "Snippet-worthy passage" — 40–60 word direct answer (for featured snippets)

Section 1 (H2) — first major topic
  ↳ Subsection (H3) if needed
  ↳ Subsection (H3) if needed

Section 2 (H2) — second major topic
  ↳ ...

[Optional: Data table, comparison chart, or stat block]

FAQ Section (H2: "Frequently Asked Questions")
  ↳ Question 1 (H3) — concise answer
  ↳ Question 2 (H3) — concise answer
  ↳ Question 3 (H3) — concise answer

Closing paragraph — summary + contextual CTA to /connect/
```

The FAQ section is not optional on cornerstone posts — it feeds FAQPage schema and "People Also Ask" per `05-seo-aeo-geo-llmo.md` §7.2.

### 4.3 Voice filter

Before publishing, run every post through this voice check. The post should read as:

**Approachable** — "Here's what we know, and here's how it helps you." Not: "Our comprehensive solution leverages industry-leading capabilities."

**Knowledgeable** — Uses correct industry terminology without over-explaining basics. Mentions specific details (dock count, WMS platform, facility layout) that only someone with real experience would know.

**Precise** — Makes specific, verifiable claims. "Our Detroit facility processes 2,400 pallets per day" — not "We handle a large volume of freight efficiently."

**Street-smart** — Has an opinion. Isn't afraid to say "Most 3PL sites are garbage" (Tyler's words) or "If your provider can't tell you their dock-to-stock cycle time, that's a red flag." The blog has a point of view.

**Banned phrases:**
- "In today's fast-paced logistics landscape…"
- "Leveraging our industry-leading capabilities…"
- "One-stop shop for all your logistics needs…"
- "Synergize," "utilize," "facilitate," "optimize" (when used vaguely).
- "As a leading provider of…"
- "We pride ourselves on…"
- "Don't hesitate to reach out…"
- Any sentence that could appear on any competitor's site unchanged.

**Loved phrases (from `01-brand-system.md`):**
- "We run a tight dock." / "Your freight doesn't sit."
- "Here's what that actually means." / "Let's cut through the noise."
- Direct city references: "Detroit runs on grit. Your supply chain should too."

### 4.4 Formatting within posts

- **Short paragraphs.** 2–4 sentences max. Long paragraphs are walls.
- **Subheadings every 200–300 words.** H2 and H3 break the content into scannable chunks.
- **Bold for emphasis** — used sparingly, for key terms or takeaways. Not for entire sentences.
- **Bulleted/numbered lists** where content is genuinely list-shaped (steps, requirements, options). Not as a substitute for prose.
- **Pull quotes or callout blocks** for key statistics or expert observations. Styled distinctly from body text.
- **Tables** for comparative data (service comparison, pricing tiers, feature lists). Use real `<table>` elements for SEO and accessibility, not images of tables.
- **Internal links** — at least one to a service page, at least one to another blog post. Anchor text is descriptive.

### 4.5 Originality

Every post is original. No content is scraped, spun, or bulk-generated by AI without substantial human editing and fact-checking. If AI tools assist in drafting, a human editor must:
- Verify every factual claim.
- Rewrite in the Sams 3PL voice (§4.3).
- Add city-specific context that an AI cannot fabricate.
- Ensure the post contains at least one insight or opinion that reflects real operational experience.

A post that reads like it was written by AI — vague, hedging, stuffed with filler transitions, lacking specifics — fails the voice filter and does not publish.

---

## 5. MDX Workflow

### 5.1 File location

Blog posts live in `src/content/blog/`:

```
src/content/blog/
├── cross-dock-vs-transloading.mdx
├── detroit-border-proximity-freight.mdx
├── what-is-dock-to-stock-cycle-time.mdx
└── seasonal-warehousing-demand-q4.mdx
```

Filenames are the URL slug — `cross-dock-vs-transloading.mdx` → `/blog/cross-dock-vs-transloading/`.

### 5.2 MDX capabilities

MDX extends Markdown with JSX components. This means blog posts can include:

```mdx
---
# frontmatter (see §6)
---

import { Image } from 'astro:assets';
import CalloutBox from '@components/blog/CalloutBox.astro';
import StatBlock from '@components/blog/StatBlock.astro';

# Cross-Dock vs. Transloading: Which Does Your Supply Chain Need?

Cross-docking and transloading are both strategies for moving freight 
through a facility quickly — but they solve different problems...

<CalloutBox type="insight">
  At our Detroit facility, cross-dock freight spends an average of 
  4.2 hours on the floor. Transloaded freight averages 18 hours 
  because it's being reconfigured for a different trailer type.
</CalloutBox>

<StatBlock
  stats={[
    { value: '4.2 hrs', label: 'Average cross-dock dwell time' },
    { value: '24', label: 'Loading docks' },
    { value: '2,400', label: 'Pallets processed daily' },
  ]}
/>
```

**Allowed MDX components:**
- `CalloutBox` — insight, warning, tip, or stat callout.
- `StatBlock` — numeric display for facility or performance stats.
- `ComparisonTable` — side-by-side feature comparison.
- `Image` (from `astro:assets`) — optimized, responsive images.
- `FAQ` — structured FAQ section with automatic FAQPage schema injection.

Don't over-use components. A post with more MDX components than prose paragraphs is a design demo, not an article.

### 5.3 Image handling in MDX

```mdx
import { Image } from 'astro:assets';
import dockPhoto from '../../assets/blog/detroit-cross-dock-operation.jpg';

<Image
  src={dockPhoto}
  alt="Freight being transferred between trailers at the Detroit cross-dock facility"
  widths={[400, 800, 1200]}
  formats={['avif', 'webp']}
/>
```

All blog images go through Astro's optimization pipeline. Never use raw `<img>` tags or reference images in `public/` from blog posts.

---

## 6. Frontmatter Schema

The Zod schema from `07-astro-cloudflare-stack.md` §5.1 defines what every blog post's frontmatter must contain:

```yaml
---
title: "Cross-Dock vs. Transloading: Which Does Your Supply Chain Need?"
description: "Understanding the difference between cross-docking and transloading, when each strategy makes sense, and how Detroit's logistics infrastructure supports both."
author: "Devon Mitchell"
pubDate: 2026-04-10
updatedDate: 2026-04-11       # optional — set when significantly revised
heroImage: "../../assets/blog/detroit-cross-dock-operation.jpg"
heroAlt: "Freight being transferred between trailers at the Detroit cross-dock facility"
category: "logistics"
tags: ["cross-docking", "transloading", "supply chain", "detroit"]
draft: false
readingTime: 7                 # optional — minutes, calculated or estimated
---
```

**Field rules:**
- `title`: Max 70 characters. Contains primary keyword naturally.
- `description`: Max 155 characters. Becomes the meta description. Includes city name and a differentiating detail.
- `author`: Must match one of the 12 persona names exactly.
- `pubDate`: ISO date. Set at first publish.
- `updatedDate`: Set only when the post is meaningfully revised (not typo fixes).
- `heroImage`: Relative path to a file in `src/assets/blog/`. Astro processes it.
- `heroAlt`: Descriptive alt text per `09-photography-and-imagery.md` §7.3.
- `category`: One of: `warehousing`, `fulfillment`, `logistics`, `industry`, `company`, `city`.
- `tags`: Array of lowercase strings. Include the city name as a tag for city-specific posts.
- `draft`: Set to `true` to exclude from production builds. Drafts never deploy.
- `readingTime`: Integer, minutes. Displayed in the post header.

If any required field is missing or malformed, the Astro build fails with a clear error. This is intentional — it prevents half-finished or misconfigured posts from reaching production.

---

## 7. Blog Page Types

### 7.1 Blog index (`/blog/`)

- **Hero:** Short H1 ("Field notes from the [city] warehouse" or similar city-voiced headline).
- **Filter/sort:** By category, optionally by tag. Simple, not over-engineered.
- **Post cards:** Grid of 3 columns on desktop, 1 on mobile. Each card shows: hero image, category eyebrow, title, author name, date, 1-line excerpt.
- **Pagination:** 9 posts per page. "Load more" button or traditional pagination — not infinite scroll (infinite scroll hurts SEO because pages beyond the first are never crawled).
- **No sidebar.** The blog index is clean — just the posts.

### 7.2 Blog post (`/blog/[slug]/`)

Layout per `07-astro-cloudflare-stack.md` §6.3:
- **Editorial body** using Fraunces for the article text. Max-width 65ch for line length.
- **Byline block:** Author name (linked to author page), publication date, reading time, category tag.
- **Hero image:** Full-width above the body, with caption if relevant.
- **Body content:** MDX-rendered with components.
- **Author bio:** At the end of the article. Shows author name, short bio, and headshot/avatar.
- **Related posts:** 3 posts, selected by matching category and tags. Card format.
- **CTA:** Contextual Connect prompt: "Have a question we didn't answer? Connect with our team."

### 7.3 Author page (`/blog/author/[slug]/`)

- Author bio (full version), headshot/avatar.
- All posts by this author on this city site, reverse-chronological.
- Schema: `Person` entity linked to the site's `Organization`.

### 7.4 Category page (`/blog/category/[slug]/`)

- H1: "Posts about [Category]"
- Filtered post grid.
- Optional intro paragraph explaining the category.

---

## 8. SEO Integration

The blog is the primary content engine for SEO. Integration points with `05-seo-aeo-geo-llmo.md`:

### 8.1 Schema per post

Every published post gets `Article` schema (§4.2 of the SEO skill) with:
- `headline`, `author` (Person), `datePublished`, `dateModified`, `image`, `publisher` (Organization).
- Cornerstone posts with FAQ sections also get `FAQPage` schema.

### 8.2 Internal linking strategy

- Every post links to at least one service page (hub-and-spoke model).
- Every post links to at least one other blog post (cluster model).
- Service pages link back to relevant blog posts in a "Related Reading" section.
- This creates topical clusters that search engines reward with higher domain authority.

### 8.3 Content freshness

Posts older than 12 months should be reviewed:
- Is the information still accurate?
- Can it be updated with new data, new city context, or a new angle?
- If yes, update and set `updatedDate`. Google rewards freshened content.
- If the post is no longer relevant, consider consolidating it into a stronger article and 301-redirecting the old URL.

### 8.4 RSS feed

Every city blog publishes an RSS feed at `/blog/rss.xml`. Astro can generate this with the `@astrojs/rss` integration. The RSS feed:
- Includes the 20 most recent posts.
- Uses the full meta description as the item description.
- Links to the canonical URL of each post.

---

## 9. Measuring Blog Performance

### 9.1 Metrics that matter

| Metric | Where to find it | What it tells us |
|---|---|---|
| Organic search traffic to blog | GA4 + Search Console | Are posts ranking and driving visits? |
| Keyword positions for target terms | Search Console | Are we moving up for targeted queries? |
| Featured snippet appearances | Search Console (Search Appearance) | Are FAQ/snippet-worthy passages winning? |
| Time on page / scroll depth | GA4 | Are people actually reading? |
| Connect form submissions from blog | GA4 (referrer = /blog/) | Is the blog driving conversions? |
| Backlinks earned | Ahrefs / Search Console | Are posts earning external authority? |

### 9.2 What "success" looks like

A successful blog post:
- Ranks on page 1 for its target keyword within 3–6 months.
- Drives measurable organic traffic (even 50 visits/month is meaningful for B2B local SEO).
- Earns at least one internal conversion (Connect form view or phone call from a blog reader).
- Gets cited by an AI Overview, featured snippet, or PAA box (the AEO/GEO payoff).

A blog that publishes 2–4 quality posts per city per month for 6 months will have a measurable impact on organic traffic and lead generation. The compounding effect of content marketing takes time — the first 3 months are planting, the next 3 are growing, and month 6+ is harvest.

---

## 10. Open Questions for Tyler

These decisions need Tyler's input before the blog system is fully operational:

1. **Real team members as authors vs. editorial personas only?** If real team members want to be named, we can map them to personas or create new ones. If the team prefers anonymity, the 12 editorial personas carry the blog.
2. **Author headshot approach for personas?** Options: illustrated avatar (consistent style across all 12), initials-only badge, or omit headshot entirely. Never a stock photo.
3. **Content approval workflow?** Who reviews and approves posts before publish? Tyler? A designated editor? Self-publish with guidelines?
4. **Initial content sprint?** Do we seed each city blog with 3–5 posts at launch, or launch lean and build over time?
5. **AI drafting policy?** Is AI-assisted drafting acceptable with human fact-checking, voice editing, and city-specific context added? Or does Tyler prefer fully human-written content?
6. **Guest posts?** Will we accept guest contributions from clients, industry partners, or local business leaders? If so, under what editorial standards?
7. **Content repurposing?** Can blog content be repurposed for email newsletters, LinkedIn posts, or GBP updates? (Recommended: yes, with adaptation for each format.)

---

## 11. Self-Check Before Publishing Any Post

1. The post moves through all five pipeline stages (Detect → Verify → Draft → Approve → Publish).
2. Frontmatter validates against the Zod schema with zero errors.
3. Title is under 70 characters, contains primary keyword naturally, includes city name.
4. Meta description is 120–155 characters with a differentiating fact and CTA.
5. Author is one of the 12 permanent personas, matched to the topic's expertise area.
6. Heading hierarchy is correct (H1 → H2 → H3, no skips).
7. The first 100 words answer the core question directly.
8. At least one "snippet-worthy passage" of 40–60 words exists.
9. At least one internal link to a service page and one to another blog post.
10. Hero image is real, from an approved source, optimized via Astro `<Image>`, with descriptive alt text.
11. FAQ section with 3–5 questions exists on cornerstone posts, with FAQPage schema.
12. Article schema is valid (test with Google Rich Results Test).
13. The post passes the voice filter — no banned phrases, reads as Sams 3PL voice, not generic.
14. No content is duplicated from another city site in the network.
15. The post is not published with `draft: true` — verify `draft: false` in frontmatter.
16. Build succeeds with `npm run build` and the post renders correctly on the deploy preview.

---

## 12. Sources

- Tyler's non-negotiable #12 ("The blog is a content engine, not a checkbox") from `MASTER-MANUAL.md`
- `05-seo-aeo-geo-llmo.md` — SEO, featured snippets, FAQPage schema, content freshness, E-E-A-T
- `07-astro-cloudflare-stack.md` §5 — Content Collections, Zod schema, MDX workflow
- `09-photography-and-imagery.md` — hero image requirements, author headshot policy
- `01-brand-system.md` §5 — voice and tone, banned phrases, loved phrases
- Google Quality Rater Guidelines (E-E-A-T framework)
- Tyler's uploaded blog pipeline extraction from session 1

---

**End of Blog System.** Next skill to load: `11-analytics-and-consent.md` (GA4 configuration, cookie consent banner, Consent Mode v2, and event tracking).
