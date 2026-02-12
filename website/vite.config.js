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
      // 確保在瀏覽器環境中模擬 Node.js 全域變數
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
      // 如果還有 Buffer 報錯，通常也建議把這幾個加入
      '@orderly.network/core',
      '@orderly.network/component-id-auth',
    ],
  },
  // 針對某些加密套件可能需要的解析配置
  resolve: {
    alias: {
      // 確保指向正確的 buffer 實作
      buffer: 'buffer',
    },
  },
})