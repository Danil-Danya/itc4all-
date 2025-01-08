import { fileURLToPath, URL } from 'node:url'
import vitePluginRequire from "vite-plugin-require"

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'


export default defineConfig({
  plugins: [
    vue(),
    vitePluginRequire.default()
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
})
