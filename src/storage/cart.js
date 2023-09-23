import { ref }  from 'vue'

import Swal from 'sweetalert2/dist/sweetalert2.js'

import 'sweetalert2/src/sweetalert2.scss'

export const useCartstorage = ('useCartstorage',() => {
    const cart = ref([])

    const add_cart = (id, price, quantity = 1) =>{
        const data = {
            id,
            price,
            quantity
        }
        cart.value.push(data)
        console.log(cart.value)
    }
    const alert_addcart = () =>{
        Swal.fire({
            position: 'top-center',
            icon: 'success',
            title: 'เพิ่มเมนูลงในตะกร้าเรียบร้อยแล้ว',
            showConfirmButton: false,
            timer: 1500
          })
    }

    const alert_addcart_failed = () =>{
        Swal.fire({
            position: 'top-center',
            icon: 'error',
            title: 'เพิ่มเมนูลงในตะกร้าไม่สำเร็จ',
            showConfirmButton: false,
            timer: 1500
          })
    }
    return { add_cart }
})