import { createRouter, createWebHistory } from 'vue-router'
import Home from '~/pages/home.vue'
import About from '~/pages/about.vue'
import ToDoMVC from '~/pages/todomvc.vue'
// import About from '~/pages/about.vue'
// import Pixi from '~/pages/pixi-playground.vue'
const routes = [
  { path: '/', component: Home },
  { path: '/about', component: About },
  { path: '/todomvc', component: ToDoMVC },
  // { path: '/pixi', component: Pixi },
]
export const router = createRouter({
  // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
  history: createWebHistory(),
  routes, // short for `routes: routes`
})
