<script setup>
import { ref, onMounted } from 'vue'
import { useRoute, RouterLink } from 'vue-router'

import { useOwnerOrderStore } from '@/storage/owner/order'
import navbar_owner from '@/components/navbar_owner.vue'

const route = useRoute()
const ownerOrderStore = useOwnerOrderStore()

const orderIndex = ref(-1)
const orderData = ref({
    products: []
})

onMounted(() => {
    if (route.params.id) {
        orderIndex.value = parseInt(route.params.id)
        const selectedOrder = ownerOrderStore.getOrder(orderIndex.value)
        orderData.value = selectedOrder
    }
})
</script>

<template>
    <navbar_owner>
        <div class="shadow-xl p-10 mt-4">
            <div class="text-3xl font-bold">รายละเอียดออเดอร์ที่: {{ orderIndex }}</div>
            <div class="divider"></div>
            <div class="grid grid-cols-2 gap-2">
                <div>
                    <div class="font-bold">Order date</div>
                    <div>{{ orderData.updatedAt }}</div>
                </div>
                <div>
                    <div class="font-bold">Order number</div>
                    <div>{{ orderData.no }}</div>
                </div>
                <div>
                    <div class="font-bold">Payment method</div>
                    <div>{{ orderData.paymentMethod }}</div>
                </div>
                <div>
                    <div class="font-bold">Address</div>
                    <div>{{ orderData.address }}</div>
                </div>
            </div>
            <div class="divider"></div>
            <div v-for="food in orderData.products" class="grid grid-cols-4">
                <div class="mx-auto">
                    <img class="p-2 w-40" :src="food.imageUrl">
                </div>
                <div>
                    <div class="font-bold">{{ food.name }}</div>
                    <div>{{ food.description }}</div>
                </div>
                <div>
                    จำนวน {{ food.quantity }} ชิ้น
                </div>
                <div>{{ food.price }} บาท</div>
            </div>
            <div class="divider"></div>
            <div class="flex justify-between">
                <div class="font-bold">ราคาสินค้าทั้งหมด</div>
                <div>{{ orderData.totalPrice }}</div>
            </div>
            <div class="flex justify-end mt-4">
                <RouterLink :to="{name :'all_order'}" class="btn btn-ghost">Back</RouterLink>
            </div>
        </div>
    </navbar_owner>
</template>



