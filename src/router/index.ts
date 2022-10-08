import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import HomePage from '../views/HomePage.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    component: HomePage,
  },
  {
    path: '/adventure',
    component: () => import('@/views/AdventurePage.vue')
  },
  {
    path: '/routes_list',
    component: () => import('@/views/RoutesListPage.vue')
  },
  {
    path: '/navigator',
    component: () => import('@/views/NavigatorHome.vue')
  },
  {
    path: '/route_recorder',
    component: () => import('@/views/RouteRecorderPage.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router

