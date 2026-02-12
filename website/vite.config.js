import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { nodePolyfills } from 'vite-plugin-node-polyfills' // 1. 引入插件

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    nodePolyfills({
      globals: {
        Buffer: true, 
        global: true,
        process: true,
      },
    }),
  ],
  ssr: {
    noExternal: [
      '@orderly.network/hooks',
      '@orderly.network/ui',
      '@orderly.network/i18n',
      '@orderly.network/core',
      '@orderly.network/component-id-auth',
    ],
  },
  resolve: {
    alias: {
      buffer: 'buffer',
    },
  },
})