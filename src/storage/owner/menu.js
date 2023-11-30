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
      .catch((err) => {
        console.log(err)
      })
  }

  const addMenu = async () => {
    let form_data = new FormData()
    form_data.append('food_image', menuData.value.image)
    form_data.append('food_name', menuData.value.name)
    form_data.append('food_price', menuData.value.price)
    form_data.append('food_status', menuData.value.status)
    console.log(menuData.value)
    await axios
      .post(`${import.meta.env.VITE_API}/food`, form_data, {
        headers: { 'Content-Type': 'multipart/form-data' }
      })
      .then((response) => {
        alert('เพิ่มเมนูอาหารเรียบร้อย')
      })
      .catch((err) => {
        alert('ใส่ข้อมูลไม่ครบ กรุณาป้อนข้อมูลให้ครบ')
        menuData.value = ''
      })
      
  }
  return { getMenu, listMenu, loadMenu, addMenu }

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
