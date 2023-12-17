<script setup>
import { ref, onMounted } from 'vue'
import axios from 'axios'
import navbarmember from "@/components/navbar_member.vue";
import status from '@/ultils/constant';
import { useCartStore } from "@/storage/cart";

const cartStore = useCartStore()
const orderData = ref({})


const saveOrder = async (order) => {
    console.log(order)
    await axios.post(`${import.meta.env.VITE_API}/saveOrderMember`, order)
         .then((response) => {
          console.log(response)
          alert("เพิ่มออเดอร์เรียบร้อย")
          cartStore.removeItemInCart()
      }).catch((err) => {
          alert("เกิดปัญหา กรุณากดสั่งใหม่อีกครั้ง")   
      })
}
const successOrder = async () =>{
    if (cartStore.items.length > 0) {
        orderData.value.status = status.status.ordered
        console.log(orderData.value)
        if (await saveOrder(orderData.value)) {
            cartStore.removeItemInCart()
        }
    }
}

onMounted(() => {
    cartStore.loadCheckout()
    cartStore.loadCart()
    if (cartStore.checkout.products.length > 0) {
        orderData.value = cartStore.checkout
    }
})
</script>

<template>
    <navbarmember>
        <div class="max-w-2xl mx-auto border border-base-200 shadow-xl p-8">
            <div>
                <div class="test-2xl font-bold">สั่งอาหาร สำเร็จแล้ว!</div>
                <div>เตรียมรอรับสินค้าได้เลย</div>
            </div>
            <div class="divider"></div>
            <div class="grid grid-cols-4 gap-2">
                <div>
                    <div class="font-bold">วันเวลา ณ ที่สั่ง</div>
                    <div>{{ orderData.createdAT }}</div>
                </div>
                <div>
                    <div class="font-bold">ประเภทการชำระเงิน</div>
                    <div>{{ orderData.paymentMethod }}</div>
                </div>
                <div>
                    <div class="font-bold">ที่อยู่</div>
                    <div>{{ orderData.address }}</div>
                </div>
                <div>
                    <div class="font-bold">ระบุเพิ่มเติม</div>
                    <div>{{ orderData.note }}</div>
                </div>
            </div>
            <div class="divider"></div>
            <div v-for="product in orderData.products" :key="product" class="grid grid-cols-4 gap-2 mb-4 items-center">
                <div>
                    <img class="w-full" :src="'http://localhost:3000/food_images/'+ product.food_image">
                </div>
                <div>
                    <b>{{ product.food_name }}</b>
                </div>
                <div>
                    {{ product.quantity }}
                </div>
                <div>
                    {{ product.food_price * product.quantity }}
                </div>
            </div>
            <div class="divider"></div>
            <div class="flex justify-between">
                <div class="font-bold">ราคาอาหารทั้งหมด</div>
                <div>{{ cartStore.summaryPrice }}</div>
            </div>
            <div class="flex justify-between mt-4">
                <div class="font-bold">ค่าส่ง</div>
                <div>0</div>
            </div>
            <div class="divider"></div>
            <div class="flex justify-between p-2 mb-4">
                <div class="font-bold">ราคาทั้งหมด</div>
                <div>{{ cartStore.summaryPrice }}</div>
            </div>
            <div class="divider"></div>
            <div class="font-bold text-center"><button @click="successOrder()" class="btn btn-success">ยืนยัน</button></div>
        </div>
    </navbarmember>
</template>

