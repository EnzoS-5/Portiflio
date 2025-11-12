import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  return {
    plugins: [react()],
    // usar '/' em desenvolvimento e '/Portiflio/' em produção (para gh-pages)
    base: mode === 'production' ? '/Portiflio/' : '/'
  }
})
