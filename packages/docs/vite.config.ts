import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

// https://vite.dev/config/
export default defineConfig({
  server: {
    fs: {
      allow: [
        path.resolve(__dirname, '../packages/components'),
        path.resolve(__dirname, '../packages/tokens'),
      ],
    },
  },
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
      '@element-essentials-component-styles.css': path.resolve(
        __dirname,
        '../components/src/styles.css'
      ),
      '@element-essentials/components': path.resolve(
        __dirname,
        '../packages/components/src'
      ),
      '@element-essentials/tokens': path.resolve(
        __dirname,
        '../packages/tokens/dist/tokens'
      ),
    },
  },
});
