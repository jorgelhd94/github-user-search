import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  site: "https://jorgelhd94.github.io",
  base: '/github-user-search',
  integrations: [tailwind(), mdx(), sitemap(), react()]
});