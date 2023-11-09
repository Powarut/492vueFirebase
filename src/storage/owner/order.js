import { defineStore } from 'pinia'

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
            imageUrl:'../../assets/food2.jpg',
            quantity: 1,
            price: '55'
          }]
      }]
  }),
  actions: {
    getOrder (index) {
        return this.list[index]
    } 
  }
})
