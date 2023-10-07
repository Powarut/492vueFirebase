import { ref, computed } from 'vue'

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
    const alert_add_cart = () =>{
        console.log(alert_add_cart())
        alert("เพิ่มเมนูสำเร็จ")
    }

    const alert_add_cart_failed = () =>{
        console.log(alert_add_cart_failed())
        alert("เมนูนี้คุณได้เพิ่มลงในตะกร้าแล้ว")
    }
    return { add_cart }
})