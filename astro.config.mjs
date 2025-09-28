import mdx from '@astrojs/mdx';
import node from '@astrojs/node';
import sitemap from '@astrojs/sitemap';
import paraglide from '@inlang/paraglide-astro';
import tailwindcss from '@tailwindcss/vite';
import icon from 'astro-icon';
import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://drewdomi.com',
  output: 'server',
  server: {
    headers: {
      'Last-Modified': new Date().toUTCString(),
    },
  },

  i18n: {
    locales: ['en', 'pt-br'],
    defaultLocale: 'en',
    routing: {
      prefixDefaultLocale: true,
    },
  },

  integrations: [
    paraglide({
      project: './project.inlang',
      outdir: './src/paraglide',
    }),
    icon(),
    mdx(),
    sitemap(),
  ],

  adapter: node({
    mode: 'standalone',
  }),

  vite: {
    plugins: [tailwindcss()],
  },
})