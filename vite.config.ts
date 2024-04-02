import { defineConfig } from 'vite'
import basicSsl from '@vitejs/plugin-basic-ssl';

export default defineConfig({
  server: {
    https: true,
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
  plugins: [
      basicSsl(), 
  ],
});

