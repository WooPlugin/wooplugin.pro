// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';
import vercel from '@astrojs/vercel';

// https://astro.build/config
export default defineConfig({
  site: 'https://wooplugin.pro',
  output: 'static',
  adapter: vercel(),

  vite: {
    plugins: [tailwindcss()],
    server: {
      host: true,
      allowedHosts: ['host.docker.internal']
    }
  },

  integrations: [react(), sitemap()]
});