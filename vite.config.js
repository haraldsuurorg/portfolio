import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: './', // Ensure the base path is correctly set
  build: {
    outDir: 'dist',
  },
})
