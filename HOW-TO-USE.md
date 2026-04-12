# Blank Project Skeleton — Sams 3PL Solutions Network

## How to start a new city site

1. **Copy this entire folder** and rename the copy to your city domain:
   `blank-project-skeleton/` → `huntsville3pl.com/`

2. **Copy the city research brief template** from `_design-standards/city-research-brief-TEMPLATE.md` into the `city-research-brief/` folder inside your new project. Fill it out completely before writing any code.

3. **Copy the skill files** from `_design-standards/skills/` into `.claude/skills/` inside your new project. These are the instruction manuals Claude reads to understand how to build the site correctly.

4. **Start building.** When you open a conversation with Claude and select this project folder, Claude will read the skill files and know exactly where every file belongs:

   | File type | Goes in |
   |---|---|
   | brand.ts, city.ts, navigation.ts | `src/data/` |
   | Astro page components | `src/pages/` (and subfolders) |
   | Reusable UI components | `src/components/ui/` |
   | Page section components | `src/components/sections/` |
   | Interactive Preact islands | `src/components/islands/` |
   | Blog posts (MDX) | `src/content/blog/` |
   | Page layouts | `src/layouts/` |
   | Images (source, pre-optimization) | `src/assets/images/` |
   | Font files (WOFF2) | `src/assets/fonts/` (also copy to `public/fonts/`) |
   | Global CSS / custom properties | `src/styles/` |
   | Static assets (favicons, etc.) | `public/` |

5. **Search-and-replace "CHANGEME"** in these files with your city name/domain:
   - `astro.config.mjs` → update the `site` value
   - `package.json` → update the `name` value
   - `public/robots.txt` → update the Sitemap URL
   - `public/llms.txt` → replace all CHANGEME placeholders
   - `public/llms-full.txt` → replace all CHANGEME placeholders and expand sections

## Folder structure

```
[city]3pl.com/
├── .claude/
│   └── skills/            ← Copied from _design-standards/skills/
├── city-research-brief/   ← Filled-out template lives here
├── src/
│   ├── assets/
│   │   ├── images/        ← Source images (Astro optimizes at build)
│   │   ├── fonts/         ← WOFF2 font files
│   │   └── icons/         ← SVG icons
│   ├── components/
│   │   ├── ui/            ← Buttons, inputs, cards, badges
│   │   ├── sections/      ← Hero, CTA strip, footer, nav
│   │   └── islands/       ← Preact interactive components
│   ├── content/
│   │   └── blog/          ← MDX blog posts
│   ├── data/              ← brand.ts, city.ts, navigation.ts
│   ├── layouts/           ← BaseLayout, PageLayout, BlogLayout
│   ├── pages/
│   │   ├── services/      ← Individual service pages
│   │   ├── industries/    ← Industry vertical pages
│   │   ├── blog/          ← Blog index and dynamic routes
│   │   ├── about/         ← About page
│   │   ├── connect/       ← Connect form (main CTA)
│   │   └── call/          ← Hidden character contact page
│   ├── styles/            ← Global CSS, custom properties, reset
│   └── utils/             ← Helper functions, shared logic
├── public/
│   ├── fonts/             ← Font files (duplicated for direct serving)
│   ├── images/            ← Static images that skip optimization
│   ├── robots.txt         ← Search engine crawl rules (update domain)
│   ├── llms.txt           ← AI discovery summary (update city info)
│   └── llms-full.txt      ← AI discovery full details (update city info)
├── astro.config.mjs       ← Astro framework config (update site URL)
├── package.json           ← Dependencies and scripts (update name)
└── tsconfig.json          ← TypeScript config with path aliases
```

## Important

- Do NOT rename the internal folders — Claude and Astro expect this exact structure.
- Do NOT delete the `.gitkeep` files until real files replace them.
- Always fill out the city research brief BEFORE starting the build.
