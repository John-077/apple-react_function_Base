import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "apple-react_function_base",
  server: {
   
    port: 3000,
  
  },

})
