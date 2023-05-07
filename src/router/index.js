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
      component: all_rider
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/dashbord',
      name: 'dashbord',
      component: dashbord
    },
    {
      path: '/all_menu',
      name: 'all_menu',
      component: all_menu
    },
    {
      path: '/add_menu',
      name: 'add_menu',
      component: add_menu
    },
    {
      path: '/register',
      name: 'register',
      component: Register
    },
    {
      path: '/all_order',
      name: 'all_order',
      component: all_order
    },
    {
      path: '/detail_order',
      name: 'detail_order',
      component: detail_order
    },
    {
      path: '/order_update',
      name: 'order_update',
      component: order_update
    },
    {
      path: '/total_sales',
      name: 'total_sales',
      component: total_sales
    },
    {
      path: '/menu',
      name: 'menu',
      component: menu
    },
    {
      path: '/home_mem',
      name: 'home_mem',
      component: home_mem
    },
    {
      path: '/pin_address',
      name: 'pin_address',
      component: pin_address
    },
    {
      path: '/check_out',
      name: 'check_out',
      component: check_out
    },
    {
      path: '/your_order',
      name: 'your_order',
      component: your_order
    },
    {
      path: '/detail_order_mem',
      name: 'detail_order_mem',
      component: detail_order_mem
    },
    {
      path: '/camera',
      name: 'camera',
      component: camera
    },
    {
      path: '/delivery',
      name: 'delivery',
      component: delivery
    },
    {
      path: '/gps',
      name: 'gps',
      component: gps
    },
    {
      path: '/index',
      name: 'index',
      component: index
    },
    {
      path: '/order_delivery',
      name: 'order_delivery',
      component: order_delivery
    },
  ]
})

export default router
