import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          'vendor-framer': ['framer-motion'],
          'vendor-[#12967F]': ['lucide-react'],
          'vendor-d3': ['d3'],
        },
      },
    },
    chunkSizeWarningLimit: 1000,
  },
});