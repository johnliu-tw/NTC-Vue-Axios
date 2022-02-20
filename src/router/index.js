import { createRouter, createWebHistory } from 'vue-router'
import UserView from '../views/UserView.vue'

const routes = [
  {
    path: '/users/:userId',
    name: 'user',
    component: UserView
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
