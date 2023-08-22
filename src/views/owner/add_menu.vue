<script setup>
import navbar_owner from '../../components/navbar_owner.vue'
import { ref } from 'vue'
import axios from 'axios'
import router from '../../router'


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
    <navbar_owner />
    <div class="hero min-h-screen bg-base-200">
        <div class="hero-content flex-col lg:flex-row-reverse">
            <div class="text-center lg:text-left">
                <h1 class="text-5xl font-bold">เพิ่มอาหารลงในเมนู !</h1>
            </div>
            <div class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                <div class="card-body">
                    <div class="form-control">
                        <label class="label">
                            <span class="label-text">ชื่อ</span>
                        </label>
                        <input type="text" placeholder="ป้อนชื่อเมนู" class="input input-bordered"
                            v-model="add.food_name" />
                    </div>
                    <div class="form-control">
                        <label class="label">
                            <span class="label-text">ราคา</span>
                        </label>
                        <input type="text" placeholder="ตั้งราคา" class="input input-bordered" v-model="add.food_price" />
                    </div>
                    <span class="label-text m-2">โปรดใส่รูปภาพอาหาร</span>
                    <div class="form-control">
                        <div class="input-group">
                            <input type="file" class="file-input w-full max-w-xs" @change="choose_image" accept="image/*"
                                id="file" ref="file" />
                        </div>
                    </div>
                    <div class="form-control mt-2 ">
                        <button class="btn btn-sucess" @click="insert_food()">บันทึก</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>



<style lang="scss" scoped></style>