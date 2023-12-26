import { defineStore } from 'pinia'
import Swal from 'sweetalert2'
import axios from 'axios'

export const useRiderStore = defineStore('rider', {
  state: () => ({
    // กำหนดข้อมูล state ที่จะเก็บใน store นี้
    list: [],
    selectedRiders: {}
  }),
  actions: {
    async loadRiders() {
      try {
        const response = await axios.get(`${import.meta.env.VITE_API}/riders`)
        this.list = response.data.data
      } catch (error) {
        console.log('error', error)
      }
    },
    async loadRider(id) {
      try {
        const response = await axios.get(`${import.meta.env.VITE_API}/riders/${id}`)
        this.selectedRider = response.data
      } catch (error) {
        console.log('error', error)
      }
    },
    async addRider(riderData) {
      console.log(riderData.value.image)
      let form_data = new FormData()
      form_data.append('rider_image', riderData.value.image)
      form_data.append('rider_email', riderData.value.email)
      form_data.append('rider_password', riderData.value.password)
      form_data.append('rider_name', riderData.value.name)
      form_data.append('rider_surname', riderData.value.surname)
      form_data.append('rider_phone', riderData.value.phone)
      
      form_data.append('role', riderData.value.role)
      await axios
      .post(`${import.meta.env.VITE_API}/riders`, form_data, {
          headers: { 'Content-Type': 'multipart/form-data' }
        })
        .then((response) => {
          Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'เพิ่มเมนูอาหารสำเร็จ',
            showConfirmButton: false,
            timer: 1500
          })
          window.location.reload()
        })
        .catch((err) => {
          Swal.fire({
            position: "top-end",
            icon: "error",
            title: "เพิ่มเมนูอาหารไม่สำเร็จ",
            showConfirmButton: false,
            timer: 1500
          });
          riderData.value = ''
        })
    },
    async editRider(riderData, id) {
      try {
        const bodyData = {
          name: riderData.rider_name,
          phone: riderData.rider_phone
        }
        const response = await axios.put(`${import.meta.env.VITE_API}/riders/${id}`, bodyData)
        console.log(response.data)
      } catch (error) {
        console.log('error', error)
      }
    },
    async removeRider(id) {
      const result = await Swal.fire({
        title: 'คุณต้องการลบเมนูอาหารหรือไม่?',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'ลบ',
        confirmButtonColor: '#d33',
        cancelButtonColor: '#3085d6',
        cancelButtonText: 'ยกเลิก',
        reverseButtons: true,
      });
      if (result.isConfirmed){
        const response = await axios.delete(`${import.meta.env.VITE_API}/riders/${id}`)
        Swal.fire("Saved!", "", "success");
      }else {
        console.log('error',error)
      }
    }
  }
})
