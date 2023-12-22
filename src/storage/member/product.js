import axios from 'axios'
import { defineStore } from 'pinia'

import { ref,computed } from 'vue'

 
export const useProductStore = defineStore('product',() => {
    const product = ref ({})
    const listProduct = computed(() => product.value)
    const getProduct = async ()=> {
        try{
          const response = await axios.get(`${import.meta.env.VITE_API}/food`)
        product.value = response.data.data
        }catch (error){
          console.log('error',error)
        }
    }

    return { getProduct, listProduct }
})
