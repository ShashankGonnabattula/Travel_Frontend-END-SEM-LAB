import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/Travel_Frontend-END-SEM-LAB/',   // <-- REQUIRED for GitHub Pages
  plugins: [react()],
})
