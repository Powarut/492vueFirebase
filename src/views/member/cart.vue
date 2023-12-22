<script setup>
import navbar_member from "@/components/navbar_member.vue";
import { ref, computed } from 'vue'
import Close from '@/components/icons/close.vue'
import { useCartStore } from '@/storage/cart'
import {RouterLink} from 'vue-router'

const menu = ref({})
const cartStore = useCartStore()
const ChangeQuantity = (event, index) => {
    const newQuantity = parseInt(event.target.value)
    cartStore.updateQuantity(index, newQuantity)
}

const list_menu = computed(() => menu.value)
const load_menu = computed(() => menu.value.length > 0)

const sessMem = sessionStorage.getItem("meme_id")



</script>

<template>
    <navbar_member>
        <h1 class="text-3xl font-bold m-4">ตะกร้าสินค้า</h1>
        <div class="flex">
            <div class="flex-auto w-64 bg-base-200 p-4">
                <div v-if="cartStore.items.length === 0">ยังไม่มีสินค้าในตะกร้า</div>
                <div v-else v-for="(item, index) in cartStore.items" v-bind:key="index" class="flex">
                    <div class="flex-1">
                        <img class="w-full p-10" :src="'http://localhost:3000/food_images/' + item.food_image">
                    </div>
                    <div class="flex-1">
                        <div class="flex flex-col justify-between h-full">
                            <div class="relative grid grid-cols-2">
                                <div>
                                    <div><b>{{ item.food_name }}</b></div>
                                    <div>{{ item.food_price }} Bath</div>
                                </div>
                                <div>
                                    <select v-model="item.quantity" class="w-1/2 p-2"
                                        @change="ChangeQuantity($event, index)">
                                        <option v-for="quantity in [1, 2, 3, 4, 5]" v-bind:key="quantity">
                                            {{ quantity }}
                                        </option>
                                    </select>
                                </div>
                                <div @click="cartStore.removeItemInCart(index)" class="absolute top-0 right-0">
                                    <Close></Close>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="flex-auto w-32 bg-slate-200 p-4">
                <div class="text-xl font-bold">สรุปออเดอร์</div>
                <div class="my-4 divide-y divide-black">
                    <div class="flex justify-between py-2">
                        <div>ราคาสินค้าทั้งหมด</div>
                        <div>{{ cartStore.summaryPrice }}</div>
                    </div>
                    <div class="flex justify-between py-2">
                        <div>ค่าส่ง</div>
                        <div>0</div>
                    </div>
                    <div class="flex justify-between py-2">
                        <div>รวมทั้งหมด</div>
                        <div>{{ cartStore.summaryPrice }} บาท</div>
                    </div>
                    <RouterLink :to="{ name: 'pin_address'}" class="btn btn-neutral w-full  mt-4">ชำระเงิน</RouterLink>
                </div>
            </div>
        </div>
    </navbar_member>
</template>
