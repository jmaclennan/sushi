import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";

import image from "@astrojs/image";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind({
    config: {
      path: 'src/theme/tailwind.config.cjs'
    }
  }), image()]
});