<script setup>
import { ref, onMounted } from 'vue'
import { useOwnerRiderStore } from '@/storage/owner/rider.js'
import axios from 'axios'

import navbar_owner from '@/components/navbar_owner.vue'
import Table from '@/components/Table.vue'
import { RouterLink } from 'vue-router'
import Trash from '@/components/icons/trash.vue'
import Edit from '@/components/icons/edit.vue'

const rider = ref({})
const OwnerRiderStore = useOwnerRiderStore()

const changeStatus = (index) =>{
    let selectedRider = OwnerRiderStore.list[index]
    selectedRider.status = selectedRider.status === 'active' ? 'inactive': 'active'
    OwnerRiderStore.updateRider(selectedRider)
}


// const fetch_rider = async () => {
//     await axios.get(`${import.meta.env.VITE_API}/riders`)
//         .then((response) => {
//             console.log(rider)
//             rider.value = response.data.data
//         }).catch((err) => {
//             console.log(err)
//         })
// }
// onMounted(() => fetch_rider())
// // รอทำหน้าข้อมูลรายละเอียดพนักงานส่ง
// const detail_rider = async (rider_id) => {
//     await axios.get(`${import.meta.env.VITE_API}/riders/`, {
//         "rider_id": rider_id
//     })
//         .then((response) => {
//             fetch_rider()
//             console.log(response)
//         }).catch((err) => {
//             console.log(err)
//         })
// }

// const delete_rider = async (rider_id) => {
//     await axios.delete(`${import.meta.env.VITE_API}/riders/${rider_id}`,)
//         .then((response) => {
//             fetch_rider()
//             console.log(response)
//             alert("ลบเมนูสำเร็จ")
//         }).catch((err) => {
//             console.log(err)
//         })
// }
</script>

<template>
    <navbar_owner>
        <div class="flex-1  pt-8 px-6 bg-base-100">
            <div class="card w-full p-6 mt-2">
                <div class="text-xl font-semibold inline-block">
                    รายชื่อพนักงาน
                    <div class="inline-block float-right">
                        <div class="inline-block float-right">
                            <RouterLink :to="{ name: 'add_menu' }" class="btn px-6 btn-sm normal-case btn-primary">
                                เพิ่ม
                            </RouterLink>
                        </div>
                    </div>
                </div>
                <div class="divider mt-2"></div>
                <Table :headers="['ชื่อ', 'Role', 'status', 'Updated At']">
                    <tr v-for="(rider, index) in OwnerRiderStore.list">
                        <td>{{ rider.fullname }}</td>
                        <td>{{ rider.role }}</td>
                        <td>{{ rider.status }}</td>
                        <td>{{ rider.updatedAt }}</td>
                        <td>
                            <div class="flex-1 gap-2">
                                <RouterLink :to="{ name: 'detail_rider', params: { id: index}}" class="btn ">Edit</RouterLink>
                                <button class="btn btn-ghost" @click="changeStatus(index)">{{ rider.status === 'active' ? 'Disable' : 'Enable' }} </button>
                            </div>
                        </td>
                    </tr>
                </Table>
            </div>
        </div>
    </navbar_owner>
</template>

