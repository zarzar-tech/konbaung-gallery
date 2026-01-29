import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'

export default defineConfig({
  plugins: [
    react(),
VitePWA({
  registerType: 'autoUpdate',
  manifest: {
    name: 'Konbaung Gallery',
    short_name: 'Konbaung',
    description: 'Konbaung Dynasty Gallery PWA',
    theme_color: '#111827',
    background_color: '#ffffff',
    display: 'standalone',
    start_url: '/konbaung-gallery/', // match your GitHub Pages folder
    icons: [
      {
        src: '/pwa-192x192.png',   // ✅ starts with / for public/
        sizes: '192x192',
        type: 'image/png'
      },
      {
        src: '/pwa-512x512.png',   // ✅ starts with / for public/
        sizes: '512x512',
        type: 'image/png'
      }
    ]
  },
  workbox: {
    globPatterns: ['**/*']
  }
})
  ],
  base: process.env.NODE_ENV === 'production' ? '/konbaung-gallery/' : '/'
})
