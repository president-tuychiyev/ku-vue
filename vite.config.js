import { defineConfig } from 'vite'
import { resolve, dirname } from 'node:path'
import vue from '@vitejs/plugin-vue'
import { fileURLToPath } from 'url'
import vueI18n from '@intlify/vite-plugin-vue-i18n'
// https://vitejs.dev/config/
export default defineConfig({
  server: {
    host: true,
    port: 8080
  },
  plugins: [
    vue(),
    vueI18n({
      include: resolve(dirname(fileURLToPath(import.meta.url)), './path/to/src/locales/**'),
    })
  ]
})
