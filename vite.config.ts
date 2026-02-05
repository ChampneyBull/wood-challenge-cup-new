import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/wood-challenge-cup-new/',
  build: {
    outDir: 'docs',
  },
})
