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

    return {getProduct,listProduct}
})

export const useMenuStore = defineStore('Menu',{
  state: () => ({
    list : [],
    checkout : {}
  }),
  actions: {
    async loadProduct() {
      try{
        const response = await axios.get(`${import.meta.env.VITE_API}/food`)
        this.list = response.data.data
      } catch (error) {
        console.log('error',error)
      }
    },
  }
  
})
export const useMenu = defineStore('menu', {
    state: () => ({ // กำหนดข้อมูล state ที่จะเก็บใน store นี้
      list: [],
      selectedTodo: {},
      statuses: ['Pending', 'Doing', 'Done']
    }),
    actions: {
      async loadTodos () {
        try {
          const response = await axios.get(`${BASE_URL}/todos`)
          this.list = response.data
        } catch (error) {
          console.log('error', error)
        }
      },
      async loadTodo (id) {
        try {
          const response = await axios.get(`${BASE_URL}/todos/${id}`)
          this.selectedTodo = response.data
        } catch (error) {
          console.log('error', error)
        }
      },
      async addTodo (todoText) {
        const bodyData = {
          name: todoText,
          status: 'Pending'
        }
        try {
          const response = await axios.post(`${BASE_URL}/todos`, bodyData)
          console.log(response.data)
          this.list = response.data
        } catch (error) {
          console.log('error', error)
        }
      },
      async editTodo (todoData, id) {
        try {
          const bodyData = {
            name: todoData.name,
            status: todoData.status
          }
          const response = await axios.put(`${BASE_URL}/todos/${id}`, bodyData)
          console.log(response.data)
        } catch (error) {
          console.log('error', error)
        }
      },
      async removeTodo (id) {
        try {
          const response = await axios.delete(`${BASE_URL}/todos/${id}`)
          console.log(response.data)
        } catch (error) {
          console.log('error', error)
        }
      }
    }
  })