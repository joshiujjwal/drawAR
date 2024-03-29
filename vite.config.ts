import { defineConfig } from 'vite'

export default defineConfig({
  server: {
    proxy: {
      '/uploadFile': {
        target: 'http://localhost:3000',
        changeOrigin: true,
      },
      '/assets': {
        target: 'http://localhost:3000',
        changeOrigin: true,
      },
      '/getFiles': {
        target: 'http://localhost:3000',
        changeOrigin: true,
      },
    },
  },
});

