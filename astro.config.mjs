// Sams 3PL Solutions — Astro Configuration
// See skills/07-astro-cloudflare-stack.md §3.1 for full documentation.
//
// REQUIRED: Update the `site` value to this city's domain before building.

import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import cloudflare from '@astrojs/cloudflare';

export default defineConfig({
  site: 'https://huntsville3pl.com',  // ← Replace with city domain
  output: 'static',                 // SSG — pre-render everything

  integrations: [
    mdx(),
    sitemap(),
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
