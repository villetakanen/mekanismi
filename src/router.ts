import { createRouter, createWebHistory } from 'vue-router'
import NotFoundView from './views/NotFoundView.vue'
import Home from './views/Home.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/:pathMatch(.*)', component: NotFoundView }]

export const router = createRouter({
  history: createWebHistory(),
  routes: routes
})
