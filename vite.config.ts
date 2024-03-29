import { defineConfig } from 'vite'

export default defineConfig({
  server: {
    proxy: {
      '/uploadFile': {
        target: 'https://draw-ar-express.vercel.app',
        changeOrigin: true,
      },
      '/assets': {
        target: 'https://draw-ar-express.vercel.app',
        changeOrigin: true,
      },
      '/getFiles': {
        target: 'https://draw-ar-express.vercel.app',
        changeOrigin: true,
      },
    },
  },
});

