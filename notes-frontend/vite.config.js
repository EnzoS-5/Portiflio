import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // usar '/' em desenvolvimento e '/Portiflio/' em produção (para gh-pages)
  base: import.meta.env.PROD ? '/Portiflio/' : '/'
})
