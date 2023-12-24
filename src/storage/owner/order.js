import { defineStore } from 'pinia'
import axios from 'axios'

export const useOwnerOrderStore = defineStore('owner-order', {
  state: () => ({
    list: [
      {
        no: '01',
        customerName: 'mark',
        totalPrice: '55',
        status: 'รอรับ',
        address: '39/3 เขตบางกะปิ แขวงหัวหมาก ซ.รามคำแหง30',
        paymentMethod: 'เก็บเงินปลายทาง',
        updatedAt: '11/7/2023, 4:30:37 PM',
        products: [
          {
            name: 'กระเพราะหมูกรอบ',
            description: 'ไม่ใส่พริก',
            imageUrl: '../../assets/food2.jpg',
            quantity: 1,
            price: '55'
          }
        ]
      }
    ]
  }),
  actions: {
    getOrder(index) {
      return this.list[index]
    },

    async loadOrderFromDB(mem_id, status) {
      let orderData = {}
      const data = {
        mem_id: parseInt(mem_id),
        status: status
      }
      try {
        orderData = await axios.post(`${import.meta.env.VITE_API}/getOrderMember`, data)
      } catch (error) {
        console.log(error)
      }
      return this.list = orderData.data.data
    },

    async LoadAllOrder() {
      try{
        const response = await axios.get(`${import.meta.env.VITE_API}/AllOrder`)
      } catch (error) {
        console.log('เกิดข้อผิดพลาดในการเรียกใช้ API',error)
      }
    } 
  }
})
