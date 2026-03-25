// router/index.js
import { createRouter, createWebHistory } from 'vue-router'
import About from '../views/About.vue'
import Home from '../views/Home.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/about', component: About }
]

export const router = createRouter({
  history: createWebHistory(),
  routes
})