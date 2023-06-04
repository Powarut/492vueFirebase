<script setup>
import navbar_owner from '../../components/navbar_owner.vue'
import { ref } from 'vue'
import axios from 'axios'
import router from '../../router'

const add = ref({
    email: '',
    password: '',
    confirmPassword: '',
    name: '',
    surname: '',
    phone: ''
})

const insert_rider = async () => {
    await axios.post(`${import.meta.env.VITE_API}/riders`)
        .then((response) => {
            console.log(response)
        }).catch((error) => {
            console.log(error)
        })
}

const check = async () => {
    if (add.value.password == add.value.confirmPassword) {
        insert_rider()
        alert("เพิ่มข้อมูลผู้ใช้สำเร็จ")
    } else {
        alert("รหัสผ่านไม่ถูกต้อง")
        add.value = ''
    }
}
</script>

<template>
    <navbar_owner />
    <h1 class="text-xl font-bold m-2">เพิ่มข้อมูลพนักงานส่ง</h1>
    <div class="form-control m-2">
        <label class="input-group">
            <span>อีเมล์</span>
            <input type="email" placeholder="abc@gmail.com" class="input input-bordered" v-model="add.email" />
        </label>
    </div>
    <div class="form-control m-2">
        <label class="input-group">
            <span>รหัสผ่าน</span>
            <input type="password" class="input input-bordered" v-model="add.password" />
        </label>
    </div>
    <div class="form-control m-2">
        <label class="input-group">
            <span>ยืนยันรหัสผ่าน</span>
            <input type="password" class="input input-bordered" v-model="add.confirmPassword" />
        </label>
    </div>
    <div class="form-control m-2">
        <label class="input-group">
            <span>ชื่อ</span>
            <input type="text" class="input input-bordered" v-model="add.name" />
        </label>
    </div>
    <div class="form-control m-2">
        <label class="input-group">
            <span>นามสกุล</span>
            <input type="text" class="input input-bordered" v-model="add.surname" />
        </label>
    </div>
    <div class="form-control m-2">
        <label class="input-group">
            <span>เบอร์โทร</span>
            <input type="text" class="input input-bordered" v-model="add.phone" />
        </label>
    </div>
    <div class="form-control m-2">
        <div class="input-group">
            <input type="file" class="file-input w-full max-w-xs" />
        </div>
    </div>
    <button class="bg-sky-500 text-base-100 font-bold w-24 h-10 rounded-md hover:bg-sky-700">เพิ่ม</button>
</template>



<style lang="scss" scoped></style>