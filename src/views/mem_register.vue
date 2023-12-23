<script setup>
import { useRouter } from 'vue-router'
import { reactive, ref } from 'vue'
import Swal from 'sweetalert2'

const router = useRouter()
const userData = reactive({
    email: '',
    password: '',
    confirm_password: '',
    name: '',
    surname: '',
    phone: ""
})

const summit = () => {
    const user = ref({})
    if (password == confirm_password) {
        user.value = userData
        router.push({ name: 'login' })
    }
}
</script>


<template>
    <div class="hero min-h-screen bg-base-200">
        <div class="hero-content flex-col lg:flex-row-reverse">
            <div class="text-center lg:text-left">
                <h1 class="text-5xl font-bold">ลงทะเบียนสำหรับลูกค้า</h1>
            </div>
            <div class="card flex-shrink-0 w-full max-w-m shadow-2xl bg-base-100">
                <div class="card-body">
                    <div class="form-control m-2">
                        <label class="input-group">
                            <span>อีเมล์</span>
                            <input type="email" placeholder="abc@gmail.com" class="input input-bordered" v-model="email" />
                        </label>
                    </div>
                    <div class="form-control m-2">
                        <label class="input-group">
                            <span>รหัสผ่าน</span>
                            <input type="password" placeholder="ตั้งรหัสผ่านอย่างน้อย 6ตัว" class="input input-bordered"
                                minlength="6" v-model="password" />
                        </label>
                    </div>
                    <div class="form-control m-2">
                        <label class="input-group">
                            <span>ยืนยันรหัสผ่าน</span>
                            <input type="password" class="input input-bordered" placeholder="ใส่รหัสผ่านให้ตรงกัน"
                                minlength="6" checked="password" v-model="confirm_password" />
                        </label>
                    </div>
                    <div class="form-control m-2">
                        <label class="input-group">
                            <span>ชื่อ</span>
                            <input type="text" class="input input-bordered" placeholder="สมชาย" v-model="name" />
                        </label>
                    </div>
                    <div class="form-control m-2">
                        <label class="input-group">
                            <span>นามสกุล</span>
                            <input type="text" class="input input-bordered" placeholder="ทรงพล" v-model="surname" />
                        </label>
                    </div>
                    <div class="form-control m-2">
                        <label class="input-group">
                            <span>เบอร์โทร</span>
                            <input type="text" class="input input-bordered" placeholder="ใส่ตัวเลข10 ตัว" maxlength="10"
                                v-model="phone" />
                        </label>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>