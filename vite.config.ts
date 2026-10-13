import { defineConfig } from 'vite'
import { resolve } from 'node:path'
import tailwindcss from '@tailwindcss/vite'
import { PAGES } from './src/pages.ts'
import { generate } from './scripts/gen-pages.ts'

// Les fichiers HTML (un par route) sont générés à partir de src/pages.ts avant chaque build ou serveur de dev.
generate()

// GitHub Pages project site: https://ab-s0lution.github.io/La-Boucherie-de-la-Monnaie-rennes/
export default defineConfig({
  base: '/La-Boucherie-de-la-Monnaie-rennes/',
  plugins: [tailwindcss()],
  build: {
    rollupOptions: {
      input: Object.fromEntries(PAGES.map((p) => [p.path === '' ? 'index' : p.path.replace(/\/$/, '').replace(/\//g, '-'), resolve(import.meta.dirname, p.path, 'index.html')])),
    },
  },
})
