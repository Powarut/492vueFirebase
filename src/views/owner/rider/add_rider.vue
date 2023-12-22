<script setup>
import navbar_owner from '../../../components/navbar_owner.vue'
import { ref } from 'vue'
import axios from 'axios'
import router from '../../../router'

const add = ref({
    rider_email: '',
    rider_password: '',
    rider_name: '',
    rider_surname: '',
    rider_phone: '',
    rider_image: null
})

const insert_rider = async () => {
    let form_data = new FormData()
    form_data.append('rider_email', add.value.rider_email)
    form_data.append('rider_password', add.value.rider_password)
    form_data.append('rider_name', add.value.rider_name)
    form_data.append('rider_surname', add.value.rider_surname)
    form_data.append('rider_phone', add.value.rider_phone)
    form_data.append('rider_image', add.value.rider_image)
    console.log(add.value)
    await axios.post(`${import.meta.env.VITE_API}/riders`, form_data, { headers: { "Content-Type": "multipart/form-data" } },)
        .then((response) => {
            alert("เพิ่มข้อมูลพนักงานส่งเรียบร้อย")
            router.push('/all_rider')
        }).catch((err) => {
            alert("ใส่ข้อมูลไม่ครบ กรุณาป้อนข้อมูลให้ครบ")
            add.value = ''
        })
}

const choose_image = async (event) => {
    console.log(event.target.files[0])
    add.value.rider_image = event.target.files[0];
}
</script>

<template>
    <navbar_owner />
    <h1 class="text-xl font-bold m-2">เพิ่มข้อมูลพนักงานส่ง</h1>
    <div class="form-control m-2">
        <label class="input-group">
            <span>อีเมล์</span>
            <input type="email" placeholder="abc@gmail.com" class="input input-bordered" v-model="add.rider_email" />
        </label>
    </div>
    <div class="form-control m-2">
        <label class="input-group">
            <span>รหัสผ่าน</span>
            <input type="password" class="input input-bordered" v-model="add.rider_password" />
        </label>
    </div>
    <div class="form-control m-2">
        <label class="input-group">
            <span>ชื่อ</span>
            <input type="text" class="input input-bordered" v-model="add.rider_name" />
        </label>
    </div>
    <div class="form-control m-2">
        <label class="input-group">
            <span>นามสกุล</span>
            <input type="text" class="input input-bordered" v-model="add.rider_surname" />
        </label>
    </div>
    <div class="form-control m-2">
        <label class="input-group">
            <span>เบอร์โทร</span>
            <input type="text" class="input input-bordered" v-model="add.rider_phone" />
        </label>
    </div>
    <span class="label-text m-2">โปรดใส่รูปพนักงานส่ง</span>
    <div class="form-control m-2">
        <div class="input-group">
            <input type="file" class="file-input w-full max-w-xs" @change="choose_image" accept="image/*" id="file"
                ref="file" />
        </div>
    </div>
    <div class="form-control mt-2 ">
        <button class="btn btn-sucess" @click="insert_rider()">เพิ่ม</button>
    </div>
</template>



<style lang="scss" scoped></style>