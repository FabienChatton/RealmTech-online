import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";

import vue from "@astrojs/vue";

// https://astro.build/config
export default defineConfig({
  site: "https://chattonf01.emf-informatique.ch",
  base: "RealmTech",
  integrations: [tailwind(), vue()]
});