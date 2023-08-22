<script setup>
import navbar_owner from '../../components/navbar_owner.vue';
import { ref, onMounted } from 'vue'
import axios from 'axios'
const rider = ref({})

const fetch_rider = async () => {
    await axios.get(`${import.meta.env.VITE_API}/riders`)
        .then((response) => {
            console.log(rider)
            rider.value = response.data.data
        }).catch((err) => {
            console.log(err)
        })
}
onMounted(() => fetch_rider())
// รอทำหน้าข้อมูลรายละเอียดพนักงานส่ง
const detail_rider = async (rider_id) => {
    await axios.get(`${import.meta.env.VITE_API}/riders/`, {
        "rider_id": rider_id
    })
        .then((response) => {
            fetch_rider()
            console.log(response)
        }).catch((err) => {
            console.log(err)
        })
}

const delete_rider = async (rider_id) => {
    await axios.delete(`${import.meta.env.VITE_API}/riders/${rider_id}`,)
        .then((response) => {
            fetch_rider()
            console.log(response)
            alert("ลบเมนูสำเร็จ")
        }).catch((err) => {
            console.log(err)
        })
}
</script>

<template>
    <navbar_owner />
    <div class="flex w-full m-2">
        <h1 class="grid flex-grow card m-1 rounded-box place-items-center">รายชื่อพนักงานส่งในระบบ</h1>
    </div>
    <router-link to="/add_rider">
        <button class="bg-blue-600 text-base-100 font-bold w-24 h-10 mb-2 rounded-box hover:bg-blue-700">เพิ่ม</button>
    </router-link>
    <div class="overflow-x-auto">
        <table class="table w-full">
            <!-- head -->
            <thead>
                <tr>
                    <th></th>
                    <th>ชื่อ</th>
                    <th>นามสกุล</th>
                    <th>อีเมล์</th>
                    <th>เบอร์โทรศัพท์</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                <!-- row 1 -->
                <tr v-for="(rider, index) in rider" v-bind:key="index">
                    <td>
                        <div class="flex items-center space-x-3">
                            <div class="avatar">
                                <div class="mask mask-squircle w-12 h-12">
                                    <img :src="'http://localhost:3000/rider_images/' + rider.rider_image"
                                        alt="Avatar Tailwind CSS Component" />
                                </div>
                            </div>
                        </div>
                    </td>
                    <td>{{ rider.rider_name }}</td>
                    <td>{{ rider.rider_surname }}</td>
                    <td>{{ rider.rider_email }}</td>
                    <td>{{ rider.rider_phone }}</td>
                    <td><button class="btn btn-success btn-sm mx-2" @click="detail_rider">ดูรายละเอียด</button>
                        <button class="btn btn-error btn-sm" @click="delete_rider(rider.rider_id)">ลบ</button>
                    </td>
                </tr>
            </tbody>
            <!-- foot -->
            <tfoot>
                <tr>
                    <th></th>
                    <th>ชื่อ</th>
                    <th>นามสกุล</th>
                    <th>อีเมล์</th>
                    <th>เบอร์โทรศัพท์</th>
                    <th></th>
                </tr>
            </tfoot>
        </table>
    </div>
</template>

<style lang="scss" scoped></style>