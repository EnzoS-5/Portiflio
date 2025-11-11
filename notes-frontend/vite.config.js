import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // usar '/' em desenvolvimento e '/Portifolio/' em produção (para gh-pages)
  base: process.env.NODE_ENV === 'production' ? '/Portifolio/' : '/'
})
