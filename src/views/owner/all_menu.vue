<script setup>
import navbar_owner from '../../components/navbar_owner.vue';
import { ref, onMounted } from 'vue'
import axios from 'axios'
const menu = ref({})
const status_value = ref('')
const status_boolean = ref(false)
console.log(status_boolean)

const fetch_menu = async () => {
    await axios.get(`${import.meta.env.VITE_API}/food`)
        .then((response) => {
            console.log(menu)
            menu.value = response.data.data
        }).catch((err) => {
            console.log(err)
        })
}
onMounted(() => fetch_menu())

const update_status = async (food_id, food_status) => {
    console.log(food_id)
    await axios.put(`${import.meta.env.VITE_API}/food/food_name/`, {
        "food_id": food_id,
        "status": food_status
    })
        .then((response) => {
            fetch_menu()
            console.log(response)
        }).catch((err) => {
            console.log(err)
        })
        status_boolean.value = false
}
</script>

<template>
    <navbar_owner />
    <div class="flex w-full m-2">
        <h1 class="grid flex-grow card m-1 rounded-box place-items-center">รายชื่อเมนูอาหารทั้งหมด</h1>
    </div>
    <router-link to="/add_menu">
        <button class="bg-blue-600 text-base-100 font-bold w-24 h-10 mb-2 rounded-box hover:bg-blue-700">เพิ่มเมนู</button>
    </router-link>
    <div class="overflow-x-auto w-full">
        <table class="table w-full">
            <!-- head -->
            <thead>
                <tr>
                    <th>รหัส</th>
                    <th>ชื่อ</th>
                    <th>ราคา</th>
                    <th>สถานะ</th>

                </tr>
            </thead>
            <tbody>
                <!-- row 1 -->
                <tr v-for="(food, index) in menu" v-bind:key="index">
                    <th>{{ food.food_id }}</th>
                    <td>
                        <div class="flex items-center space-x-3">
                            <div class="avatar">
                                <div class="mask mask-squircle w-12 h-12">
                                    <img :src="'http://localhost:3000/food_images/' + food.food_image"
                                        alt="Avatar Tailwind CSS Component" />
                                </div>
                            </div>
                            <div>
                                <div class="font-bold">{{ food.food_name }}</div>
                            </div>
                        </div>
                    </td>
                    <td>
                        {{ food.food_price }}
                    </td>
                    <td>
                        <div class="badge badge-success gap-2" v-if="food.food_status === '1'">
                            มี
                        </div>
                        <div class="badge badge-error gap-2" v-else>
                            หมด
                        </div>
                    </td>
                    <td>
                        <!-- ปัญหา:กดปุ่มเปลี่ยนเฉพาะอัน -->
                        <button class="btn btn-success m-2" v-on:click="status_boolean = true"
                            v-if="status_boolean === false">change status</button>
                        <div v-if="status_boolean === true">
                            <div class="form-control">
                                <label class="label cursor-pointer">
                                    <span class="label-text">มี</span>
                                    <input type="radio" name="radio-10" class="radio checked:bg-red-500" checked
                                        v-model="status_value" value="1" />
                                </label>
                            </div>
                            <div class="form-control">
                                <label class="label cursor-pointer">
                                    <span class="label-text">หมด</span>
                                    <input type="radio" name="radio-10" class="radio checked:bg-red-500" checked
                                        v-model="status_value" value="0" />
                                </label>
                            </div>
                        </div>
                        <button class="btn btn-base500 m-2" 
                            v-if="status_boolean === true" v-on:click="update_status(food.food_id, status_value)">บันทึก</button>
                        <button class="btn btn-error m-2">ลบ</button>
                    </td>
                </tr>
            </tbody>
            <!-- foot -->
            <tfoot>
                <tr>
                    <th>รหัส</th>
                    <th>ชื่อ</th>
                    <th>ราคา</th>
                    <th>สถานะ</th>
                </tr>
            </tfoot>
        </table>
    </div>
</template>



<style lang="scss" scoped></style>