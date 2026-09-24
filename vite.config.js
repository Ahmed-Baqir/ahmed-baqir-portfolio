import { defineConfig } from 'vite';

export default defineConfig({
  // Relative paths so the build works on GitHub Pages under /<repo-name>/
  base: './',
  server: { port: 5173, open: true },
  preview: { port: 4173, open: true },
});
