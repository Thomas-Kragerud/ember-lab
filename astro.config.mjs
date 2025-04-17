// @ts-check
import { defineConfig } from 'astro/config';

import react from '@astrojs/react';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://ember-lab.eecs.berkeley.edu',
  base: "",
  trailingSlash: "never",
  output: "static",
  integrations: [react()],
  outDir: "./docs",

  vite: {
    plugins: [tailwindcss()],
  },
  build: {
    assets: 'astro',                 // This ensures asset names don't have underscores
    assetsPrefix: "./"
  }
});