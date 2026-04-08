import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // El base debe ser exactamente el nombre de tu repositorio entre barras
  base: '/Agua-Vital/', 
})