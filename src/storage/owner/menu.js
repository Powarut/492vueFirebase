import { defineStore } from 'pinia'
import axios from 'axios'
import Swal from 'sweetalert2';
import { ref, computed, } from 'vue'

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

  const addMenu = async (menuData) => {
    console.log(menuData.value.image)
    let form_data = new FormData()
    form_data.append('food_image', menuData.value.image)
    form_data.append('food_name', menuData.value.name)
    form_data.append('food_price', menuData.value.price)
    form_data.append('food_status', menuData.value.status)
    await axios
      .post(`${import.meta.env.VITE_API}/food`, form_data, {
        headers: { 'Content-Type': 'multipart/form-data' }
      })
      .then((response) => {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "เพิ่มเมนูอาหารสำเร็จ",
          showConfirmButton: false,
          timer: 1500
        });
        window.location.reload();
      })
      .catch((err) => {
        Swal.fire({
          position: "top-end",
          icon: "error",
          title: "เพิ่มเมนูอาหารไม่สำเร็จ",
          showConfirmButton: false,
          timer: 1500
        });
        menuData.value = ''
      })
  }

  const removeMenu = async (id) =>{
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
      const response = await axios.delete(`${import.meta.env.VITE_API}/food/${id}`)
      Swal.fire("Saved!", "", "success");
    } else {
      console.log('error',error)
    }
  }

  return { getMenu, listMenu, loadMenu, addMenu, removeMenu }
})