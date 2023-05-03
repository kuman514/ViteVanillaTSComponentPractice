/// <reference types="vitest" />
/// <reference types="vite/client" />

import { defineConfig } from 'vite';
import * as path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [],
  server: {
    watch: {
      usePolling: true,
    },
  },
  resolve: {
    alias: {
      '^': path.resolve(__dirname, './src'),
    },
  },
  test: {
    globals: true,
    environment: 'jsdom',
  },
});
