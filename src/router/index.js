import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import add_rider from '../views/add_rider.vue'
import Menu from '../views/Menu.vue'
import Test from '../views/Test.vue'
import testall_rider from '../views/testall_rider.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/home',
      name: 'home',
      component: Home
    },
    {
      path: '/add',
      name: 'add',
      component: add_rider
    },
    {
      path: '/all',
      name: 'all_rider',
      component: testall_rider
    }
  ]
})

export default router
