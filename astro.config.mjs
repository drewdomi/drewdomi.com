import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import vercel from "@astrojs/vercel";
import paraglide from "@inlang/paraglide-astro";
import tailwindcss from "@tailwindcss/vite";
import icon from "astro-icon";
import { defineConfig } from "astro/config";

export default defineConfig({
  site: "https://drewdomi.com",
  output: "server",
  server: {
    headers: {
      "Last-Modified": "Fri, 11 Oct 2024 18:08:35 GMT",
    },
  },
  i18n: {
    locales: ["en", "pt-br"],
    defaultLocale: "en",
    routing: {
      prefixDefaultLocale: true,
    },
  },

  integrations: [
    paraglide({
      project: "./project.inlang",
      outdir: "./src/paraglide",
    }),
    icon(),
    mdx(),
    sitemap(),
  ],

  adapter: vercel(),

  vite: {
    plugins: [tailwindcss()],
  },
});
