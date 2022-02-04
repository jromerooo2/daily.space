import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import News from '../views/News.vue'
import App from '../App.vue'
import NotFound from '../views/NotFound.vue'

const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        name: 'Home',
        component: App
    },
    {
      path: '/news',
      name: 'news',
      component: News
    },
  {
    path: '/:catchAll(.*)',
    name: 'PageNotFound',
    component:NotFound
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router