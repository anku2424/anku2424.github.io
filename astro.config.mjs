import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";

export default defineConfig({
  site: 'https://anku2424.github.io',
  base: '/portfolio-website',
  integrations: [
    tailwind({
      applyBaseStyles: false
    })
  ]
});

