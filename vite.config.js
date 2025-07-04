import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/landing-page-creche/',
  plugins: [react()],
  server: {
    host: true,
    port: 5173
  }
})

