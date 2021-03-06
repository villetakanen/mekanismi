import { createRouter, createWebHistory } from 'vue-router'
import NotFoundView from './views/NotFoundView.vue'
// import Home from './views/Home.vue'
import About from './views/About.vue'
import Login from './views/Login.vue'
import Profile from './views/Profile.vue'
import PageView from '/@/views/site/PageView.vue'
import Post from '/@/views/stream/Post.vue'

const routes = [
  { path: '/', component: Post },
  { path: '/about', component: About },
  { path: '/login', component: Login },
  { path: '/profile', component: Profile },
  { path: '/site/:siteid', component: PageView, props: true },
  { path: '/stream/post', component: Post, props: false },
  { path: '/:pathMatch(.*)', component: NotFoundView }]

export const router = createRouter({
  history: createWebHistory(),
  routes: routes
})
