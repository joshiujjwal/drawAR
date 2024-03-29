import { defineConfig } from 'vite'

export default defineConfig({
  server: {
    proxy: {
      '/api/uploadFile': {
        target: 'https://draw-ar-express.vercel.app',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, '/api/')

      },
      '/api/assets': {
        target: 'https://draw-ar-express.vercel.app',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, '/api/')

      },
      '/api/getFiles': {
        target: 'https://draw-ar-express.vercel.app',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, '/api/')

      },
    },
  },
});

