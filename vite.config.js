import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // GitHub Pages မှာတင်ရင် subfolder path သုံးပြီး localhost မှာဆိုရင် root path သုံးဖို့ဖြစ်ပါတယ်
  base: process.env.NODE_ENV === 'production' ? '/konbaung-gallery/' : '/',
})