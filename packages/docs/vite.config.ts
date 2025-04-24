import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  css: {
    preprocessorOptions: {
      // If you're using any CSS preprocessor like SCSS, configure it here
    },
  },
  build: {
    rollupOptions: {
      input: {
        main: './index.html', // Adjust if needed
      },
    },
  },
  // Ensure the CSS is available for Storybook
  resolve: {
    alias: {
      '@element-essentials/components': path.resolve(__dirname, '../packages/components/src'),
      '@element-essentials/tokens': path.resolve(__dirname, '../packages/tokens/dist/tokens'),
    },
  },
});
