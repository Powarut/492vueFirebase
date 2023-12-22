import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue'
import Register from '../views/Register.vue'
import Login from '/src/views/Login.vue'
/*  เจ้าของร้าน   */
import ownerLogin from '../views/owner/owner_login.vue'
import dashbord from '../views/owner/dashbord.vue'
import add_rider from '../views/owner/rider/add_rider.vue'
import all_rider from '../views/owner/rider/all_rider.vue'
import detail_rider from '../views/owner/rider/detail_rider.vue'
import all_menu from '../views/owner/menu/all_menu.vue'
import add_menu from '../views/owner/menu/add_menu.vue'
import edit_menu from '../views/owner/menu/edit_menu.vue'
import all_order from '../views/owner/order/all_order.vue'
import detail_order from '../views/owner/order/detail_order.vue'
import total_sales from '../views/owner/total_sales.vue'
/*  ลูกค้า  */
import cart from '../views/member/cart.vue'
import pin_address from '../views/member/pin_address.vue'
import check_out from '../views/member/check_out.vue'
import your_order from '../views/member/your_order.vue'
import detail_order_mem from '../views/member/detail_order_mem.vue'

/*  พนักงานส่ง  */
import index from '../views/rider/index.vue'
import gps from '../views/rider/gps.vue'
import delivery from '../views/rider/delivery.vue'
import order_delivery from '../views/rider/order_delivery.vue'
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
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/register',
      name: 'register',
      component: Register
    },
    
    /* เจ้าของร้าน */
    {
      path: '/owner/login',
      name: 'owner-Login',
      component: ownerLogin
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
      path: '/eidt_menu/:id',
      name: 'edit_menu',
      component: edit_menu
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
      path: '/detail_rider/:id',
      name: 'detail_rider',
      component: detail_rider
    },
    {
      path: '/all_order',
      name: 'all_order',
      component: all_order
    },
    {
      path: '/detail_order/:id',
      name: 'detail_order',
      component: detail_order
    },
    {
      path: '/total_sales',
      name: 'total_sales',
      component: total_sales
    },
    /* ส่วนของลูกค้า  */
    {
      path: '/cart',
      name: 'cart',
      component: cart
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
      path: '/detail_order_mem/:id',
      name: 'detail_order_mem',
      component: detail_order_mem
    },
    /* ส่วนของพนักงานส่ง */
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
