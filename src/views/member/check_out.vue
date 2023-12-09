<script setup>
import { ref, onMounted } from 'vue'
import navbarmember from "@/components/navbar_member.vue";

import { useCartStore } from "@/storage/cart";
const cartStore = useCartStore()
const orderData = ref({})

onMounted(() => {
    cartStore.loadCheckout()
    if (cartStore.checkout.products.length > 0) {
        orderData.value = cartStore.checkout
    }
})
</script>

<template>
    <navbarmember>
        <div class="max-w-2xl mx-auto border border-base-200 shadow-xl p-8">
            <div>
                <div class="test-2xl font-bold">คุณสั่งออเดอร์อาหาร สำเร็จแล้ว!</div>
                <div>สวัสดี </div>
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
            <div class="font-bold text-center">ขอบคุณที่สั่งอาหารจากร้านเรา</div>
            <RouterLink :to="{ name: 'your_order' }" class="btn btn-active btn-link">ไปหน้าออเดอร์ของคุณ</RouterLink>
        </div>
    </navbarmember>
</template>

