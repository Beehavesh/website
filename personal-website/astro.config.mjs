// @ts-check
import { defineConfig, fontProviders } from 'astro/config';
import { defineConfig, fontProviders } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: "https://beehavesh.github.io/website/",
  base: "/website",

  fonts: [
    { 
      provider: fontProviders.fontsource(),
      name: "VT323",
      cssVariable: "--font-pixels",
      fallbacks: ["monospace"],
      styles: ["normal", "italic"],
    },
    { 
      provider: fontProviders.fontsource(),
      name: "JetBrains Mono",
      cssVariable: "--font-mono",
      fallbacks: ["monospace"],
      weights: [400, 500, 600, 700, 800],
      styles: ["normal", "italic"],
    }
  ],

  vite: {
    plugins: [tailwindcss()]
  },
});