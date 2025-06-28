import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import svgr from 'vite-plugin-svgr'
import path from "path" 

// https://vite.dev/config/
export default defineConfig({ 
  base:'/',
  plugins: [react(), tailwindcss(),svgr()] ,
  server: {
    port: 5173,
    host: true, 
  },
  resolve : {  
    alias : { 
    "@" : path.resolve(__dirname,"./src") , 
    }
  }
})
