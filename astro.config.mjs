import mdx from '@astrojs/mdx'
import sitemap from '@astrojs/sitemap'
import tailwind from '@astrojs/tailwind'
import paraglide from '@inlang/paraglide-astro'
import icon from 'astro-icon'
import { defineConfig } from 'astro/config'

import vercel from '@astrojs/vercel/serverless'

// https://astro.build/config
export default defineConfig({
  site: 'https://drewdomi.com',
  output: 'server',
  i18n: {
    locales: ['en', 'pt-br'],
    defaultLocale: 'en',
  },
  integrations: [
    paraglide({
      project: './project.inlang',
      outdir: './src/paraglide',
    }),
    icon(),
    tailwind(),
    mdx(),
    sitemap(),
  ],
  adapter: vercel(),
})
