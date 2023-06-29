import { createRouter, createWebHistory } from 'vue-router'
import Home from './../components/Home.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/login',
    name: 'login',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: function () {
      return import(/* webpackChunkName: "about" */ '../components/Login.vue')
    }
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
