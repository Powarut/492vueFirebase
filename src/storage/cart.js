import { defineStore } from 'pinia'
import Swal from 'sweetalert2'
export const useCartStore = defineStore('cart', {
  state: () => ({
    items: [],
    checkout: {}
  }),
  getters: {
    summaryQuantity(state) {
      return state.items.reduce((acc, items) => acc + items.quantity, 0)
    },
    summaryPrice(state) {
      return state.items.reduce((sum, item) => {
        return sum + item.food_price * item.quantity
      }, 0)
    }
  },
  actions: {
    async loadCart() {
      const proviousCart = localStorage.getItem('cart-data')
      if (proviousCart) {
        this.items = JSON.parse(proviousCart)
      }
    },
    async addtoCart(productData) {
        console.log(productData)
      const findProductIndex = this.items.findIndex((item) => {
        return item.food_name === productData.food_name
      })
      if (findProductIndex < 0) {
        productData.quantity = 1
        this.items.push(productData)
      } else {
        const currentItem = this.items[findProductIndex]
        this.updateQuantity(findProductIndex, currentItem.quantity + 1)
      }
      localStorage.setItem('cart-data', JSON.stringify(this.items))
      Swal.fire({
        title: 'เพิ่มอาหารลงในตะกร้าเรียบร้อย',
        html: '<FacebookIcon fontSize="large" />',
        icon: 'success',
        confirmButtonText: 'โอเค',
      })
      // alert("เพิ่มอาหารลงในตะกร้าเรียบร้อย")
    },
    async updateQuantity(index, quantity) {
      this.items[index].quantity = quantity
      localStorage.setItem('cart-data', JSON.stringify(this.items))
    },
    async removeItemInCart(index) {
      this.items.splice(index, 1)
      localStorage.setItem('cart-data', JSON.stringify(this.items))
    },
    async placeOrder(userData) {
      const orderData = {
        ...userData,
        totalPrice: this.summaryPrice,
        paymentMethod: 'เก็บเงินปลายทาง',
        createdAT: new Date().toLocaleString(),
        products: this.items
      }
      localStorage.setItem('order-data', JSON.stringify(orderData))
    },
    async loadCheckout() {
      const orderData = localStorage.getItem('order-data')
      if (orderData) {
        this.checkout = JSON.parse(orderData)
      }
    }
  }
})
