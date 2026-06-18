// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://alexbarrr.github.io',
  // PREVIEW_BASE=/ produces a portable static build servable from any root
  // (any static server / colleagues' machines). Prod GitHub Pages stays /russkiy-brand.
  base: process.env.PREVIEW_BASE ?? (process.env.NODE_ENV === 'production' ? '/russkiy-brand' : '/'),
  trailingSlash: 'ignore',
  vite: {
    plugins: [tailwindcss()],
  },
  integrations: [mdx(), sitemap()],
});
