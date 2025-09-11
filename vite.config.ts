import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
  build: {
    rollupOptions: {
      external: ['react-quill'],
    },
  },
  server: {
    host: true, // écoute sur toutes les IP
    port: 5173,
    // Désactive la vérification d'hôte pour ngrok
    strictPort: false,
    allowedHosts: [
      'a48ad0170c4f.ngrok.app', // remplace avec ton URL ngrok actuelle
    ],
    proxy: {
      '/api': {
        target: 'http://localhost:5000',
        changeOrigin: true,
      },
    },
  },
})
