import { defineStore } from 'pinia'

export const useOwnerRiderStore = defineStore('owner-rider',{
    state: () => ({
        list: [
            {
                fullname: 'นาย สมชาติ คำลือ',
                role: 'พนักงานส่ง',
                status: 'ออนไลน์',
                updatedAt:(new Date).toISOString()
            }
        ]
    }),
    actions:{
        getRider (index){
            return this.list[index]
        },
        updateRider (index, riderData) { 
            const fields = ['fullname','role','status','updatedAt']
            for (let field of fields){
                console.log(field)
                this.list[index][field] = riderData[field]
            }
            this.list[index].updatedAt = (new Date).toISOString()
        },
        removeRider (index){
            this.list.splice(index, 1)
        }
    }
}) 

export const useRidersStore = defineStore('riders', {
    state: () => ({ // กำหนดข้อมูล state ที่จะเก็บใน store นี้
      list: [],
      selectedRiders: {},
      statuses: ['ว่าง', 'กำลังส่งอาหาร', 'กำลังกลับ']
    }),
    actions: {
      async loadRiders () {
        try {
          const response = await axios.get(`${import.meta.env.VITE_API}/riders`)
          this.list = response.data
        } catch (error) {
          console.log('error', error)
        }
      },
      async loadRider (id) {
        try {
          const response = await axios.get(`${import.meta.env.VITE_API}/riders/${id}`)
          this.selectedRider = response.data
        } catch (error) {
          console.log('error', error)
        }
      },
      async addRider (RiderText) {
        const bodyData = {
          name: RiderText,
          status: 'ว่าง'
        }
        try {
          const response = await axios.post(`${import.meta.env.VITE_API}/riders`, bodyData)
          console.log(response.data)
          // this.list = response.data
        } catch (error) {
          console.log('error', error)
        }
      },
      async editRider (riderData, id) {
        try {
          const bodyData = {
            name: riderData.rider_name,
            status: riderData.rider_status
          }
          const response = await axios.put(`${import.meta.env.VITE_API}/todos/${id}`, bodyData)
          console.log(response.data)
        } catch (error) {
          console.log('error', error)
        }
      },
      async removeTodo (id) {
        try {
          const response = await axios.delete(`${import.meta.env.VITE_API}/todos/${id}`)
          console.log(response.data)
        } catch (error) {
          console.log('error', error)
        }
      }
    }
  })