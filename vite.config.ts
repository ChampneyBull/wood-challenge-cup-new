import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig(({ command }) => {
  const config = {
    plugins: [react()],
    base: '/',
    build: {
      outDir: 'dist',
    }
  }

  if (command !== 'serve') {
    config.base = '/wood-challenge-cup/'
  }

  return config
})
