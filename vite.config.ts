import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import legacy from '@vitejs/plugin-legacy'
import path from 'path'
// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      // to remove
      "vue": "vue/dist/vue.esm-bundler.js",
      '~/': `${path.resolve(__dirname, 'src')}/`,
    },
  },
  plugins: [
    vue(),
    // babel loose problem
    // legacy({
    //   // support proxy
    //   targets: ['chrome 49, firefox 18, safari 10, ios_saf 10']
    // })
  ],
  build: {
    sourcemap: true
  }
})
