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
        drop_debugger: true,
        pure_funcs: ['console.log', 'console.info', 'console.debug', 'console.warn']
      },
      mangle: {
        toplevel: true, // Obfuscate variable names
        safari10: true
      },
      format: {
        comments: false // Remove all comments
      }
    },
    rollupOptions: {
      output: {
        // Randomize file names for additional obscurity
        entryFileNames: 'assets/[name]-[hash].js',
        chunkFileNames: 'assets/[name]-[hash].js',
        assetFileNames: 'assets/[name]-[hash].[ext]',
        // Make code harder to read
        compact: true
      }
    }
  }
})
