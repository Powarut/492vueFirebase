import { defineStore } from "pinia";

export const useCartStore = defineStore('cart',{
    state: () => ({
        items : []
    }),
    getters: {
        summaryQuantity (state) {
            return state.items.reduce((acc,items) => acc + items.quantity,0)
        },
        summaryPrice (state){
            return state.items.reduce((sum ,item)=>{
                return sum + (item.food_price * item.quantity)
            }, 0)
        }
    },
    actions: {
        loadCart () {
            const proviousCart = localStorage.getItem('cart-data')
            if (proviousCart){
                this.items = JSON.parse(proviousCart)
            }
        },
        addtoCart (productData) {
            const findProductIndex = this.items.findIndex(item => {
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
        },
        updateQuantity (index,quantity) {
            this.items[index].quantity = quantity
            localStorage.setItem('cart-data', JSON.stringify(this.items))
        },
        removeItemInCart(index) {
            this.items.splice(index,1)
            localStorage.setItem('cart-data', JSON.stringify(this.items))
        }
    }
})