<script setup>
import navbarmember from "@/components/navbar_member.vue";
import { reactive } from 'vue'
import { useCartStore } from '@/storage/cart'
import { RouterLink,useRouter } from 'vue-router'

const router = useRouter()
const cartStore = useCartStore()

const FormData = [
    {
        name: 'ชื่อ',
        field: 'name'
    },
    {
        name: 'เบอร์โทร',
        field: 'phone'
    },
    {
        name: 'ที่อยู่',
        field: 'address'
    },
    {
        name: 'ระบุเพิ่มเติม',
        field: 'note'
    },
]

const userFormData = reactive({
    name: '',
    phone: '',
    address: '',
    note: ''
})

const payment = () => {
    cartStore. placeOrder(userFormData)
    router.push({ name: 'check_out'})
}
</script>


<template>
    <navbarmember>
        <h1 class="text-3xl font-bold m-4">ชำระเงิน</h1>
        <div class="flex">
            <section class="flex-auto w-64 bg-base-200 p-8">
                <div v-for="form in FormData" class="form-control w-full">
                    <label class="label">
                        <span class="labeal-text">{{ form.name }}</span>
                    </label>
                    <input v-model="userFormData[form.field]" type="text" placeholder="กรอกข้อมูลในนี้">
                </div>
                <button @click="payment()" class="btn btn-neutral w-full mt-4">ยืนยัน</button>
            </section>
            <section class="flex-auto w-32 bg-slate-200 px-2">
                <div v-for="item in cartStore.items" :key="item" class="flex bg-white m-2 py-4">
                    <div class="flex-1">
                        <img class="w-full p-4" :src="item.food_image">
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

