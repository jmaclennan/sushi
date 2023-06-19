import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import image from '@astrojs/image';
import sitemap from '@astrojs/sitemap';
import react from '@astrojs/react';

import mdx from '@astrojs/mdx';

// https://astro.build/config
export default defineConfig({
  site: 'http://localhost:3000',
  integrations: [tailwind({
    config: {
      path: 'src/theme/tailwind.config.cjs',
    },
  }), image(), sitemap(), react(), mdx()],
});
