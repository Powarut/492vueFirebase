import { defineStore } from "pinia";
import { ref } from 'vue'
import axios from 'axios'

import Swal from 'sweetalert2/dist/sweetalert2.js'
import 'sweetalert2/src/sweetalert2.scss'

export const useCartStore = defineStore('useCartStore',() =>{
    const cart =ref ([])

    const addCart = (mem_id, food_id,price, quantity=1)=> {
        const data = {
            mem_id,
            price,
            quantity
        }    
    }
    

    const alert_addCart = () => {
        Swal.fire({
            position: "top-center",
            icon: "success",
            title: "เพิ่มเมนูลงในตะกร้าเรียบร้อย !",
            showConfirmButton: false,
            timer: 1500
          });
    }
    const alert_addCart_failed = () => {
        Swal.fire({
            position: "top-center",
            icon: "error",
            title: "คุณเพิ่มเมนูนี้ ลงในตะกร้าไปแล้ว!",
            showConfirmButton: false,
            timer: 1500
          });
    }

    return {addCart}
})

// export const useCartStore = defineStore('cart',{
//     state: () => ({
//         items : [],
//         checkout: {}
//     }),
//     getters: {
//         summaryQuantity (state) {
//             return state.items.reduce((acc,items) => acc + items.quantity,0)
//         },
//         summaryPrice (state){
//             return state.items.reduce((sum ,item)=>{
//                 return sum + (item.food_price * item.quantity)
//             }, 0)
//         }
//     },
//     actions: {
//         async loadCart () {
//             const proviousCart = localStorage.getItem('cart-data')
//             if (proviousCart){
//                 this.items = JSON.parse(proviousCart)
//             }
//         },
//         async addtoCart (productData) {
//             const findProductIndex = this.items.findIndex(item => {
//                 return item.food_name === productData.food_name
//             })
//             if (findProductIndex < 0) {
//                 productData.quantity = 1
//                 this.items.push(productData)
//             } else {
//                 const currentItem = this.items[findProductIndex]
//                 this.updateQuantity(findProductIndex, currentItem.quantity + 1)
//             }
//             localStorage.setItem('cart-data', JSON.stringify(this.items))
//         },
//         async updateQuantity (index,quantity) {
//             this.items[index].quantity = quantity
//             localStorage.setItem('cart-data', JSON.stringify(this.items))
//         },
//         async removeItemInCart(index) {
//             this.items.splice(index,1)
//             localStorage.setItem('cart-data', JSON.stringify(this.items))
//         },
//         async placeOrder (userData){
//             const orderData = {
//                 ...userData,
//                 totalPrice: this.summaryPrice,
//                 paymentMethod: 'เก็บเงินปลายทาง',
//                 creatrdDate: (new Date()).toLocaleString(),
//                 products: this.items
//             }
//             localStorage.setItem('order-data',JSON.stringify(orderData))
//         },
//         async loadCheckout () {
//             const orderData = localStorage.getItem('order-data')
//             if (orderData) {
//                 this.checkout = JSON.parse(orderData)
//             }

//         }
//     }
// })