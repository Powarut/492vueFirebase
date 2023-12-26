<script setup>
import { reactive,onMounted,ref } from 'vue';
import { useRoute,useRouter } from 'vue-router';
import navbar_owner from '@/components/navbar_owner.vue'
import { useRiderStore } from '@/storage/owner/rider.js'

const formData = [
    {
        name: 'ชื่อ',
        field: 'fullname',
        type: 'text'
    },
    {
        name: 'ตำแหน่ง',
        field: 'role',
        type: 'select',
    },
    {
        name: 'สถานะ',
        field: 'status',
        type: 'select',
    },
]

const ownerRiderStore = useRiderStore()
const route = useRoute()
const router = useRouter()

const riderIndex = ref(-1)
const riderData = reactive({
    fullname: '',
    role: '',
    status: ''
})

onMounted(() => {
    if (route.params.id) {
        riderIndex.value = parseInt(route.params.id)
        const selectedRider = ownerRiderStore.getRider(riderIndex.value)
        riderData.fullname = selectedRider.fullname
        riderData.role = selectedRider.role
        riderData.status = selectedRider.status
    }
})

const updateRider = () => { 
    console
    ownerRiderStore.updateRider(riderIndex.value, riderData)
    router.push({ name: 'all_rider'})

}
</script>

<template>
    <navbar_owner>
        <div class="shadow-xl p-8 mt-4">
            <div class="test-1xl font-bold">แก้ไขข้อมูลพนักงาน</div>
            <div class="divider"></div>
            <div class="grid grid-cols-1 gap-2">
                <div v-for="form in formData " class="form-control w-full">
                    <label class="label">
                        <span class="label-text">{{ form.name }}</span>
                    </label>
                    <input v-if="form.type === 'text'"
                    v-model="riderData[form.field]"
                    type="text" 
                    class="input input-bordered w-full" 
                    />
                    <select v-if="form.type === 'select'" 
                    v-model="riderData[form.field]"
                    type="text" 
                    class="input input-bordered w-full">
                        <option v-for="item in form.dropdownList" :key="item">
                        {{ item }}</option>
                    </select>
                </div>
            </div>
            <div class="flex mt-4 justify-end">
                <RouterLink :to="{ name: 'all_rider' }" class="btn btn-error ">ย้อนกลับ</RouterLink>
                <button class="btn btn-neutral" @click="updateRider()">แก้ไข</button>
            </div>
        </div>
    </navbar_owner>
</template>

