import { defineStore } from 'pinia'
import axios from 'axios'
import { ref, computed } from 'vue'
import { response } from 'express'

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
})


export const useFoodsStore = defineStore('foods',{
  state: () => ({
    list : [],
    selectedFood: {},
  }),
  actions: {
    async loadFoods (){
      try{
        const response = await axios.get(`${import.meta.env.VITE_API}/food`)
        this.list = response.data
      }catch (error){
        console.log('error',error)
      }
    },
    async loadFood(id){
      try{
        const response = await axios.get(`${import.meta.env.VITE_API}/food/${id}`)
        this.selectedFood = response.data
      }catch (error) {
        console.log('error',error)
      }
    },
    async addfood (menuData){
      const fromData = {
        food_image: menuData.value.image,
        food_name: menuData.value.name,
        food_price: menuData.value.price,
        food_status: '1'
      }
      try{
        const response = await axios.post(`${import.meta.env.VITE_API}/food`,fromData,{
          headers: { 'Content-Type': 'multipart/form-data' }
        })
        console.log(response.data)
        //this.list = response.data
      }catch (error) {
        console.log('error',error)
      }
    },
    async changeStatus(foodData, id){
      try{
        const status = {
          food_status: foodData.status
        }
        const response = await axios.put(`${import.meta.env.VITE_API}/food/${id}`, status)
        console.log(response.data)
      }catch (error) {
        console.log('error',error)
      }
    },
    async removeFood (id){
      try{
        const response = await axios.delete(`${import.meta.env.VITE_API}/food/${id}`)
        console.log(response.data)
      }catch (error){
        console.log('error',error)
      }
    }
  }
})