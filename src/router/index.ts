import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import HomePage from '../views/HomePage.vue'
import RoutesListPage from '../views/RoutesListPage.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    component: RoutesListPage,
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router

