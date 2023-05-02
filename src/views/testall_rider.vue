<template>
    <router-link to="/add">
        <button class="bg-blue-600 text-base-100 font-bold w-24 h-10 mb-2 rounded-lg hover:bg-blue-700">เพิ่ม</button>
    </router-link>
    <div class="overflow-x-auto">
        <table class="table w-full">
            <!-- head -->
            <thead>
                <tr>
                    <th>ID</th>
                    <th>ชื่อ-นามสกุล</th>
                    <th>อีเมล์</th>
                    <th>รหัสผ่าน</th>
                    <th>เบอร์โทรศัพท์</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                <!-- row 1 -->
                <!-- <tr v-for="(items, index) in 10"> -->
                <tr>
                    <!-- <th>{{ index+1 }}</th> -->
                    <th>1</th>
                    <td>สมชาย คำลือ</td>
                    <td>powarut001@gmail.com</td>
                    <td>123456</td>
                    <td>0221231245</td>
                    <td><button class="btn btn-success btn-sm mx-2">ดูรายละเอียด</button>
                        <button class="btn btn-error btn-sm">ลบ</button>
                    </td>
                </tr>
            </tbody>
            <tbody>
                <tr>
                    <th>3</th>
                    <td>สมหมาย คำชัย</td>
                    <td>powarut01@gmail.com</td>
                    <td>1234</td>
                    <td>0871236789</td>
                    <td><button class="btn btn-success btn-sm mx-2">ดูรายละเอียด</button>
                        <button class="btn btn-error btn-sm">ลบ</button>
                    </td>
                </tr>
            </tbody>
            <tbody>
                <tr>
                    <th>4</th>
                    <td>ทรงพล คำเหล่า</td>
                    <td>test01@gmail.com</td>
                    <td>1234</td>
                    <td>0878756594</td>
                    <td><button class="btn btn-success btn-sm mx-2">ดูรายละเอียด</button>
                        <button class="btn btn-error btn-sm">ลบ</button>
                    </td>
                </tr>
            </tbody>
            <tbody>
                <tr>
                    <th>5</th>
                    <td>ปรเมษฐ์ พฤกษชาติ</td>
                    <td>test02@gmail.com</td>
                    <td>123456</td>
                    <td>0821231235</td>
                    <td><button class="btn btn-success btn-sm mx-2">ดูรายละเอียด</button>
                        <button class="btn btn-error btn-sm">ลบ</button>
                    </td>
                </tr>
            </tbody>
            <tbody>
                <tr>
                    <th>6</th>
                    <td>ปรมาศ เปรยฟ้า</td>
                    <td>powarut@gmail.com</td>
                    <td>123123</td>
                    <td>0843217645</td>
                    <td><button class="btn btn-success btn-sm mx-2">ดูรายละเอียด</button>
                        <button class="btn btn-error btn-sm">ลบ</button>
                    </td>
                </tr>
            </tbody>

        </table>
    </div>
</template>

<script setup>
// import {ref ,onMounted }from 'vue'
// import axios from 'axios'

// const members = ref({})

// const fetch_members = async() => {
//     await axios.get('${import.meta.env.VITE_API}/members')
//     .then((response) =>{
//         members.value = response.data.data
//         console.log(members.value)
//     }).catch((err) =>{
//         console.log(err)
//     })
// }
// onMounted(() => fetch_members())
</script>

<style lang="scss" scoped></style>