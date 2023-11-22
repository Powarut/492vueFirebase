import { defineStore } from 'pinia'
import axios from 'axios'

import { ref, computed } from 'vue'

export const useFoodStore = defineStore('menu', () => {
  const menu = ref({})

  const listMenu = computed(() => menu.value)

  const loadMenu = computed(() => menu.value.length > 0)

  const getMenu = async () => {
    await axios
      .get(`${import.meta.env.VITE_API}/food`)
      .then((response) => {
        menu.value = response.data.data
      })
      
  }
  return { getMenu, listMenu,loadMenu } 


  //     
  //     async getMenu (index){
  //         if (!this.loaded){
  //             this.loadMenu()
  //         }
  //         return this.list[index]
  //     },
  //     async addMenu (menuData){
  //         menuData.updatedAt = (new Date()).toISOString()
  //         this.list.push(menuData)
  //         localStorage.setItem('food-data', JSON.stringify(this.list))
  //     },
  //     async updateMenu (index, menuData){
  //         this.list[index].name = menuData.name
  //         this.list[index].image = menuData.image
  //         this.list[index].price = menuData.price
  //         this.list[index].status = menuData.status
  //         this.list[index].updatedAt = (new Date()).toISOString()
  //         localStorage.setItem('food-data', JSON.stringify(this.list))
  //     },
  //     async removeMenu (index){
  //         this.list.splice(index, 1)
  //         localStorage.setItem('food-data', JSON.stringify(this.list))
  //     }

})
