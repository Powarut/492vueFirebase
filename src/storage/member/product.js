import { ref, computed} from 'vue'
import { defineStore } from 'pinia'

export const useProductStore = defineStore('product',{
    state: () =>({
        list: [{
            food_name: 'ราดหน้า',
            food_image: 'https://i.ytimg.com/vi/LGXXLOVx0vc/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLCYgQgS4QSdCrSNryX97ZBi0HkTGQ',
            quantity: '1',
            food_status: 'มี',
            food_price: '45'
        },
        {
            food_name: 'กะเพราหมูกรอบ',
            food_image: 'https://www.calforlife.com/image/food/Holy-Basil-Crispy-Pork-Fried-Egg.jpg',
            quantity: '1',
            food_status: 'มี',
            food_price: '55'
        }]
    })
})