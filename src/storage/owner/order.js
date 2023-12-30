import { defineStore } from 'pinia'
import axios from 'axios'

export const useOwnerOrderStore = defineStore('owner-order', {
  state: () => ({
    list: [],
    orders: [],
    selectOrder: ['cooking','deliverling','canceled']
  }),
  // getters:{
  //   summaryOrder(state){
  //     return state.items.reduce((acc, items)=>{
  //       acc + items.ordersWatting, 0)
  //     },
  //     summaryPrice(state){
  //       return state.items.reduce((sum, item) => {
  //         return sum + item.orders * item.ordersWatting
  //       }, 0)
  //     }
  //   },
  actions: {
    async loadOrderFromDB(mem_id, status) {
      let ordersData = {}
      const data = {
        mem_id: parseInt(mem_id),
        status: status
      }
      try {
        ordersData = await axios.post(`${import.meta.env.VITE_API}/getOrderMember`, data)
      } catch (error) {
        console.log(error)
      }
      return this.list = ordersData.data.data
      
    },

    async LoadAllOrder() {
      let result = {}
      try{
         result = await axios.get(`${import.meta.env.VITE_API}/getOrders`)
        console.log('load complete',result.data.data)
      } catch (error) {
        console.log('เกิดข้อผิดพลาดในการเรียกใช้ API',error)
      }
      return this.orders = result.data.data
    },
    
    async loadOrder (id) {
      try{
        const response = await axios.get(`${import.meta.env.VITE_API}/AllOrder/${id}`)
        this.selectOrder = response.data
      }catch (error) {
        console.log('เกิดข้อผิดพลาดในการเรียกใช้ API',error)
      }
    },

    async getOrderDatail(orderData,id){
      try{
        const response = await axios.get($`{import.meta.env.VITE_API}/detailOrder/mem_order_data`)
      }catch(error){
        console.log('เกิดข้อผิดพลาดในการเรียกใช้ API',error)
      }
    },

    async editStatus (orederData, id){
      try{
        const Data ={
          orders : orderData.mem_order_data,
          status : orderData.status
        }
        const response = await axios.put(`${import.meta.env.VITE_API}/orders/${id}`,Data)
        console.log('แก้ไขสำเร็จ',response.data.data)
      }catch(error){
        console.log('เกิดข้อผิดพลาดในการเรียกใช้ API',error)
      }
    }
  }
})
