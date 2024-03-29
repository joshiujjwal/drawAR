import { defineConfig } from 'vite'

export default defineConfig({
  server: {
    proxy: {
      '/api/uploadFile': {
        target: 'http://localhost:3000',
        changeOrigin: true,
      },
      '/api/assets': {
        target: 'http://localhost:3000',
        changeOrigin: true,
      },
      '/api/getFiles': {
        target: 'http://localhost:3000',
        changeOrigin: true,

      },
    },
  },
});

