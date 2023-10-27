import { defineConfig } from 'astro/config'
import mdx from '@astrojs/mdx'
import tailwind from '@astrojs/tailwind'
import compress from 'astro-compress'

// https://astro.build/config
export default defineConfig({
  compressHTML: true,
  site: 'https://IvanPotentor.github.io',
  base: '/astro-exampleeivan1',
  integrations: [mdx(), tailwind({
    applyBaseStyles: false,
  }), compress()]
})
