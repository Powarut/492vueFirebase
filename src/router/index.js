import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue'
import add_rider from '../views/owner/add_rider.vue'
import all_rider from '../views/owner/all_rider.vue'
import Login from '/src/views/Login.vue'
import dashbord from '../views/owner/dashbord.vue'
import all_menu from '../views/owner/all_menu.vue'
import add_menu from '../views/owner/add_menu.vue'
import Register from '../views/Register.vue'
import all_order from '../views/owner/all_order.vue'
import detail_order from '../views/owner/detail_order.vue'
import order_update from '../views/owner/order_update.vue'
import total_sales from '../views/owner/total_sales.vue'
import menu from '../views/Menu.vue'
import home_mem from '../views/member/home_mem.vue'
import pin_address from '../views/member/pin_address.vue'
import check_out from '../views/member/check_out.vue'
import your_order from '../views/member/your_order.vue'
import detail_order_mem from '../views/member/detail_order_mem.vue'
import order_delivery from '../views/rider/order_delivery.vue'
import index from '../views/rider/index.vue'
import gps from '../views/rider/gps.vue'
import delivery from '../views/rider/delivery.vue'
import camera from '../views/rider/camera.vue'


const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/add_rider',
      name: 'add_rider',
      component: add_rider
    },
    {
      path: '/all_rider',
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
