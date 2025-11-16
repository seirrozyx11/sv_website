import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    open: true
  },
  build: {
    outDir: 'dist',
    sourcemap: false, // Disable source maps in production to hide source code
    minify: 'terser', // Minify and obfuscate code
    terserOptions: {
      compress: {
        drop_console: true, // Remove console.log statements
        drop_debugger: true
      }
    }
  }
})
