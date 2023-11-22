import axios from 'axios'
import { defineStore } from 'pinia'

import { ref,computed } from 'vue'

 
export const useProductStore = defineStore('product',() => {
    const product = ref ({})

    const listProduct = computed(() => product.value)

    const getProduct = async ()=> {
        await axios .get(`${import.meta.env.VITE_API}/food`)
        .then ((response) => {
            product.value = response.data.data
        })
    }

    return {getProduct,listProduct}
})