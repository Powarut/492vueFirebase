<script setup>
import { ref, onMounted } from 'vue'
import { useRiderStore } from '@/storage/owner/rider.js'
import navbar_owner from '@/components/navbar_owner.vue'
import Trash from '@/components/icons/trash.vue'
import Table from '@/components/Table.vue'
import { useRouter } from 'vue-router'


const riderStore = useRiderStore()
const router = useRouter()
onMounted(()=>{
    riderStore.loadRiders()
})

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

const removeRider = async (id) => {
    try {
        await riderStore.removeRider(id)
    } catch (error) {
        console.log('error', error)
    }
    window.location.reload();
}
</script>

<template>
    <navbar_owner>
        <div class="flex-1  pt-8 px-6 bg-base-100">
            <div class="card w-full p-6 mt-2">
                <div class="text-xl font-semibold inline-block">
                    รายชื่อพนักงาน
                    <div class="inline-block float-right">
                        <div class="inline-block float-right">
                            <RouterLink :to="{ name: 'add_rider' }" class="btn px-6 btn-sm normal-case btn-primary">
                                เพิ่ม
                            </RouterLink>
                        </div>
                    </div>
                </div>
                <div class="divider mt-2"></div>
                <Table :headers="['รูปภาพ','อีเมล์','ชื่อ', 'นามสกุล', 'โทรศัพท์', '']">
                    <tr v-show="rider.role == 'rider'" v-for="rider in riderStore.list" :key="rider.rider_id">
                        <td>
                            <div class="mask mask-squircle w-12 h-12">
                                <img :src="'http://localhost:3000/rider_images/' + rider.rider_image" />
                            </div>
                        </td>
                        <td>{{ rider.rider_email }}</td>
                        <td>{{ rider.rider_name }}</td>
                        <td>{{ rider.rider_surname }}</td>
                        <td>{{ rider.rider_phone }}</td>
                        <td>
                            <div class="flex-1 gap-2">
                                <button @click="removeRider(rider.rider_id)" class="btn btn-ghost">
                                    <Trash></Trash>
                                </button>
                                <RouterLink :to="{ name: 'detail_rider', params: { id: rider.rider_id } }" class="btn btn-primary ">
                                    รายละเอียด</RouterLink>

                            </div>
                        </td>
                    </tr>
                </Table>
            </div>
        </div>
    </navbar_owner>
</template>

