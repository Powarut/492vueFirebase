<script setup>
import navbar_owner from '@/components/navbar_owner.vue'
import { reactive, ref } from 'vue'
import { useRouter } from 'vue-router'
import { useRiderStore } from '@/storage/owner/rider';

const router = useRouter()
const riderStore = useRiderStore()

const riderData = reactive({
    email: '',
    password: '',
    name: '',
    surname: '',
    phone: '',
    image: null,
    role: 'rider'
})

const insert_rider = () => {
    const rider = ref({})
    rider.value = riderData
    if (riderStore.addRider(rider)) {
        router.push({ name: 'all_rider' })
    }
}

const choose_image = async ($event) => {
    const imageRider = $event.target.files[0]
    riderData.image = imageRider
}
</script>

<template>
    <navbar_owner>
        <div class="shadow-xl p-8 mt-4">
            <div class="text-1xl font-bold">เพิ่มพนักงานส่ง</div>
            <div class="divider"></div>
            <div class="form-control w-full">
                <label class="label">
                    <span class="label-text">อีเมล์</span>
                </label>
                <input type="text" class="input input-bordered" v-model="riderData.email" />
            </div>
            <div class="form-control w-full">
                <label class="label">
                    <span class="label-text">รหัสผ่าน</span>
                </label>
                <input type="password" class="input input-bordered" v-model="riderData.password" />
            </div>
            <div class="form-control w-full">
                <label class="label">
                    <span class="label-text">ชื่อ</span>
                </label>
                <input type="text" class="input input-bordered" v-model="riderData.name" />
            </div>
            <div class="form-control w-full">
                <label class="label">
                    <span class="label-text">นามสกุล</span>
                </label>
                <input type="text" class="input input-bordered" v-model="riderData.surname" />
            </div>
            <div class="form-control w-full">
                <label class="label">
                    <span class="label-text">เบอร์โทรศัพท์</span>
                </label>
                <input type="number" class="input input-bordered" v-model="riderData.phone" />
            </div>
            <label class="label">
                <span class="label-text">โปรดใส่รูปภาพ</span>
            </label>
            <input type="file" class="file-input file-input-bordered w-full max-w-xs" @change="choose_image($event)"
                accept="image/*" id="file" reactive="file" />
            <div class="divider"></div>
            <div class="flex mt-4 justify-end">
                <RouterLink :to="{ name: 'all_rider' }" class="btn btn-error ">ย้อนกลับ</RouterLink>
                <button class="btn btn-success ml-4" @click="insert_rider()">เพิ่ม</button>
            </div>
        </div>
    </navbar_owner>
</template>