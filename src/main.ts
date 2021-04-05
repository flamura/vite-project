import './assets/index.css'

import { createApp } from 'vue'
import { createHead } from '@vueuse/head'
import { createPinia } from 'pinia'

import App from './App.vue'
import { router } from './router'
// import { store } from './store'

const head = createHead()
createApp(App)
  // .use(store)
  .use(router)
  .use(createPinia())
  .use(head)
  .mount('#app')
