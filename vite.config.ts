import { defineConfig } from 'vite'

export default defineConfig({
  server: {
    proxy: {
      '/api/uploadFile': {
        target: 'https://draw-ar-express.vercel.app',
        changeOrigin: true,
      },
      '/api/assets': {
        target: 'https://draw-ar-express.vercel.app',
        changeOrigin: true,
      },
      '/api/getFiles': {
        target: 'http://draw-ar-express.vercel.app',
        changeOrigin: true,
      },
    },
  },
});

