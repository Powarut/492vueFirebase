<script setup>
import navbar_owner from '../components/navbar_owner.vue'
import { ref, onMounted } from 'vue'
import axios from 'axios'
const menu = ref({})
const status_value = ref('')
const status_boolean = ref(false)

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

const delete_menu = async (food_id) => {
    await axios.delete(`${import.meta.env.VITE_API}/food/${food_id}`,)
        .then((response) => {
            fetch_menu()
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
        <h1 class="grid flex-grow card m-1 rounded-box place-items-center">รายชื่อเมนูอาหารทั้งหมด</h1>
    </div>
    <router-link to="/add_menu">
        <button class="bg-blue-600 text-base-100 font-bold w-24 h-10 mb-2 rounded-box hover:bg-blue-700">เพิ่มเมนู</button>
    </router-link>
    <div class="flex item-center justify-between">
        <table class="table w-full">
            <!-- head -->
            <thead>
                <tr>
                    <th>รหัส</th>
                    <th>ชื่อ</th>
                    <th>ราคา</th>
                    <th>สถานะ</th>
                    <th></th>
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
                        <button class="btn btn-success m-2" v-on:click="status_boolean = true"
                            v-if="status_boolean === false"><svg xmlns="http://www.w3.org/2000/svg" height="1em"
                                viewBox="0 0 512 512">
                                <path
                                    d="M32 96l320 0V32c0-12.9 7.8-24.6 19.8-29.6s25.7-2.2 34.9 6.9l96 96c6 6 9.4 14.1 9.4 22.6s-3.4 16.6-9.4 22.6l-96 96c-9.2 9.2-22.9 11.9-34.9 6.9s-19.8-16.6-19.8-29.6V160L32 160c-17.7 0-32-14.3-32-32s14.3-32 32-32zM480 352c17.7 0 32 14.3 32 32s-14.3 32-32 32H160v64c0 12.9-7.8 24.6-19.8 29.6s-25.7 2.2-34.9-6.9l-96-96c-6-6-9.4-14.1-9.4-22.6s3.4-16.6 9.4-22.6l96-96c9.2-9.2 22.9-11.9 34.9-6.9s19.8 16.6 19.8 29.6l0 64H480z" />
                            </svg></button>
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
                        <button class="btn btn-outline btn-success m-2" v-if="status_boolean === true"
                            v-on:click="update_status(food.food_id, status_value)"><svg xmlns="http://www.w3.org/2000/svg"
                                height="1em" viewBox="0 0 448 512">
                                <path
                                    d="M64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V173.3c0-17-6.7-33.3-18.7-45.3L352 50.7C340 38.7 323.7 32 306.7 32H64zm0 96c0-17.7 14.3-32 32-32H288c17.7 0 32 14.3 32 32v64c0 17.7-14.3 32-32 32H96c-17.7 0-32-14.3-32-32V128zM224 288a64 64 0 1 1 0 128 64 64 0 1 1 0-128z" />
                            </svg></button>
                        <button class="btn btn-error m-2" @click="delete_menu(food.food_id)"><svg
                                xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512">
                                <path
                                    d="M135.2 17.7C140.6 6.8 151.7 0 163.8 0H284.2c12.1 0 23.2 6.8 28.6 17.7L320 32h96c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 96 0 81.7 0 64S14.3 32 32 32h96l7.2-14.3zM32 128H416V448c0 35.3-28.7 64-64 64H96c-35.3 0-64-28.7-64-64V128zm96 64c-8.8 0-16 7.2-16 16V432c0 8.8 7.2 16 16 16s16-7.2 16-16V208c0-8.8-7.2-16-16-16zm96 0c-8.8 0-16 7.2-16 16V432c0 8.8 7.2 16 16 16s16-7.2 16-16V208c0-8.8-7.2-16-16-16zm96 0c-8.8 0-16 7.2-16 16V432c0 8.8 7.2 16 16 16s16-7.2 16-16V208c0-8.8-7.2-16-16-16z" />
                            </svg></button>
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
                <th></th>
            </tr>
        </tfoot>
    </table>
</div></template>



<style lang="scss" scoped></style>