<script setup>
import navbar_owner from '@/components/navbar_owner.vue'
import { ref } from 'vue'
import axios from 'axios'
import router from '../../../router'

const add = ref({
    food_name: '',
    food_price: '',
    food_image: null,
    food_status: '1'
})

const insert_food = async () => {
    let form_data = new FormData()
    form_data.append('food_image', add.value.food_image)
    form_data.append('food_name', add.value.food_name)
    form_data.append('food_price', add.value.food_price)
    form_data.append('food_status', add.value.food_status)
    console.log(add.value)
    await axios.post(`${import.meta.env.VITE_API}/food`, form_data, { headers: { "Content-Type": "multipart/form-data" } },)
        .then((response) => {
            alert("เพิ่มเมนูอาหารเรียบร้อย")
            router.push('/all_menu')
        }).catch((err) => {
            alert("ใส่ข้อมูลไม่ครบ กรุณาป้อนข้อมูลให้ครบ")
            add.value = ''
        })

}
const choose_image = async (event) => {
    console.log(event.target.files[0])
    add.value.food_image = event.target.files[0];
}
</script>

<template>
    <navbar_owner>
        <div class="shadow-xl p-8">
            <div class="text-1xl font-bold">เพิ่มเมนูอาหาร</div>
            <div class="divider"></div>
            <div class="form-control w-full">
                <label class="label">
                    <span class="label-text">ชื่อ</span>
                </label>
                <input type="text" placeholder="ป้อนชื่อเมนู" class="input input-bordered" v-model="add.food_name" />
            </div>
            <div class="form-control w-full ">
                <label class="label">
                    <span class="label-text">ราคา</span>
                </label>
                <input type="text" placeholder="ตั้งราคา" class="input input-bordered" v-model="add.food_price" />
            </div>
            <div class="form-control w-full mt-4">
                <span class="label-text">โปรดใส่รูปภาพอาหาร</span>
                <div class="input-group">
                    <input type="file" class="file-input w-full max-w-xs" @change="choose_image" accept="image/*" id="file"
                        ref="file" />
                </div>
            </div>
            <div class="divider"></div>
            <div class="grid grid-cols-2 gap-2">
                <div class="form-control w-full"></div>
                <div class="form-control w-full">
                    <button class="btn btn-sucess" @click="insert_food()">บันทึก</button>
                </div>
            </div>
        </div>
    </navbar_owner>
</template>
