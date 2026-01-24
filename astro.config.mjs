// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import preact from '@astrojs/preact';
import sitemap from '@astrojs/sitemap';
import vercel from '@astrojs/vercel';

// https://astro.build/config
export default defineConfig({
  site: 'https://wooplugin.pro',
  output: 'static',
  adapter: vercel(),
  build: {
    inlineStylesheets: 'always'
  },

  vite: {
    plugins: [tailwindcss()],
    server: {
      host: true,
      allowedHosts: ['host.docker.internal']
    }
  },

  integrations: [preact({ compat: true }), sitemap()]
});