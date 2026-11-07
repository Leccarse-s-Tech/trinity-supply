import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
import fs from 'node:fs';
import path from 'node:path';

export default defineConfig(({ mode }) => ({
  base: mode === 'development' ? '/' : (process.env.BASE_PATH || '/trinity-supply/'),
  plugins: [
    react(),
    tailwindcss(),
    {
      name: 'copy-404-for-spa',
      closeBundle() {
        const distDir = path.resolve(__dirname, 'dist');
        const indexPath = path.join(distDir, 'index.html');
        const notFoundPath = path.join(distDir, '404.html');
        if (fs.existsSync(indexPath)) {
          fs.copyFileSync(indexPath, notFoundPath);
        }
      },
    },
  ],
  server: {
    port: 5173,
    host: true,
  },
}));
