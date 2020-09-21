import { createRouter, createWebHistory } from 'vue-router'
import NotFoundView from './views/NotFoundView.vue'
import Home from './views/Home.vue'
import About from './views/About.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/about', component: About },
  { path: '/:pathMatch(.*)', component: NotFoundView }]

export const router = createRouter({
  history: createWebHistory(),
  routes: routes
})
