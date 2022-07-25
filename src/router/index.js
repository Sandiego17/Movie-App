import { createRouter, createWebHistory } from 'vue-router'
import HomeComponent from './../views/Home-Component.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomeComponent
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
