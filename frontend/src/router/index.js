
import { createRouter, createWebHistory } from 'vue-router'

import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/registro',
    name: 'registro',
    component: () => import('../views/RegisterView.vue')
  },
  {
    path: '/negocio/:id',
    name: 'negocio',
    component: () => import('../views/BusinessView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
