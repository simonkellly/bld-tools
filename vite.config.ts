import { build, defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/bld-tools/",
  optimizeDeps: { 
    esbuildOptions: { 
      target: "es2020" 
    }
  },
  build: {
    target: "es2020"
  }
})
