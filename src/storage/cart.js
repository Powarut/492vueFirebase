import { defineStore } from "pinia";

export const useCartStore = defineStore('cart',{
    state: () => ({
        items : [{
            food_name: 'ราดหน้า',
            food_image: 'https://i.ytimg.com/vi/LGXXLOVx0vc/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLCYgQgS4QSdCrSNryX97ZBi0HkTGQ',
            quantity: '1',
            food_status: 'มี',
            food_price: '50'
        }]
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
        addtoCart (productData) {
            this.items.push(productData)
        },
        updateQuantity (index,quantity) {
            this.items[index].quantity = quantity
        },
        removeItemInCart(index) {
            this.items.splice(index,1)
        }
    }
})