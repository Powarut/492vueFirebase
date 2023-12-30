<script setup>
import navbarmember from "@/components/navbar_member.vue";
import { reactive,onMounted,ref } from 'vue'
import { useCartStore } from '@/storage/cart'
import { RouterLink, useRouter } from 'vue-router'
import { GoogleMap, Marker } from "vue3-google-map";

const router = useRouter()
const cartStore = useCartStore()
const Map = GoogleMap()
const marker = Marker()

const markers =ref([])
onMounted(()=>{})

const userFormData = reactive({
    address: JSON.stringify({
        latitude: this.center.lat ?? "",
        longitude: this.center.lng ?? ""
    }),
    note: ''
})

const payment = () => {
    cartStore.placeOrder(userFormData)
    router.push({ name: 'check_out' })
}
</script>


<template>
    <navbarmember>
        <h1 class="text-3xl font-bold m-4">ชำระเงิน</h1>
        <div class="flex">
            <section class="flex-auto w-64 bg-base-200 p-8">
                <div class="form-control w-full">
                    <label class="label">
                        <span class="labeal-text">ระบุเพิ่มเติม</span>
                    </label>
                    <input v-model="note" type="text" placeholder="กรอกข้อมูลในนี้">
                </div>
                <!-- <div class="form-control m-2">
                    <span>ค้นหาที่อยู่</span>
                    <input ref="autocomplete" type="text" class="input input-bordered"
                        placeholder="สยามพารากอน กรุงเทพมหานคร" v-model="address" />
                </div>
                <Map api-key="AIzaSyC_5dVGBmZlZZWlWTn5QTJUsDjNegAcOoA" style="width: 100%; 
            height: 300px" :center="center" :zoom="15" :libraries=[]>
                    <marker :options="{ position: { lat: center.lat, lng: center.lng } }" />
                </Map> -->
                <button @click="payment()" class="btn btn-neutral w-full mt-4">ยืนยัน</button>
            </section>
            <section class="flex-auto w-32 bg-slate-200 px-2">
                <div v-for="item in cartStore.items" :key="item" class="flex bg-white m-2 py-4">
                    <div class="flex-1">
                        <img class="w-full p-8" :src="'http://localhost:3000/food_images/' + item.food_image">
                    </div>
                    <div class="flex-1">
                        <div class="flex flex-col justify-between h-full">
                            <div>
                                <div>{{ item.food_name }}</div>
                                <div>จำนวน: {{ item.quantity }}</div>
                            </div>
                            <RouterLink :to="{ name: 'cart' }" class="btn btn-active btn-link">แก้ไข</RouterLink>
                        </div>
                    </div>
                </div>
                <div class="divider"></div>
                <div class="p-2">
                    <div><b>สรุปออเดอร์</b></div>
                    <div class="flex justify-between">
                        <div>ราคาอาหารทั้งหมด</div>
                        <div>{{ cartStore.summaryPrice }}</div>
                    </div>
                    <div class="flex justify-between">
                        <div>ค่าส่ง</div>
                        <div>0</div>
                    </div>
                </div>
                <div class="divider"></div>
                <div>
                    <div class="flex justify-between p-2 mb-4">
                        <div>ราคาทั้งหมด</div>
                        <div>{{ cartStore.summaryPrice }}</div>
                    </div>
                </div>
            </section>
        </div>
    </navbarmember>
</template>

