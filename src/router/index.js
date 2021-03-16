import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/HomePage.vue'


const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/bag/:id',
    component: () => import('@/views/BagPage.vue')
  },
  {
    path: '/add',
    name: 'add',
    component: () => import('@/views/AddBagPage.vue')
  },
  {
    path: '/edit/:id',
    component: () => import('@/views/EditPage.vue')
  },
  {
    path: '/bags',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/BagsPage.vue')
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
