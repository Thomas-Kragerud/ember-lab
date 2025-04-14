// @ts-check
import { defineConfig } from 'astro/config';

import react from '@astrojs/react';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://Thomas-Kragerud.github.io', // Replace with your GitHub username
  base: '/ember-lab',                       // Replace with your repository name
  output: "static",
  integrations: [react()],
  outDir: "./docs",

  vite: {
    plugins: [tailwindcss()]
  },
  build: {
    assets: 'astro', // This ensures asset names don't have underscores
    assetsPrefix: "./"
  }
});