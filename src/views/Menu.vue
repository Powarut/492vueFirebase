<script setup>
import navbar_memberVue from "../components/navbar_member.vue";
import { ref, onMounted } from 'vue'
import axios from 'axios'
const menu = ref({})
// const status_value = ref('')
// const status_boolean = ref(false)

const fetch_menu = async () => {
    await axios.get(`${import.meta.env.VITE_API}/food`)
        .then((response) => {
            console.log(menu)
            menu.value = response.data.data
        }).catch((err) => {
            console.log(err)
        })
        // status_boolean.value = false
}
onMounted(() => fetch_menu())
 
// const select_menu = async (food_id) = >{}

</script>

<template>
    <navbar_memberVue />
    <div class="hero min-h-screen bg-base-200">
        <div class="hero-content flex-col lg:flex-row-reverse">
            <div class="card w-80 bg-base-100 shadow-xl m-1" v-for="(food, index) in menu" v-bind:key="index"><img :src="'http://localhost:3000/food_images/' + food.food_image">
                <figure class="m-2" ></figure>
                <div class="card-body">
                    <h2 class="card-title">{{ food.food_name }}</h2>
                    <p>ราคา {{ food.food_price }} บาท</p>
                    <div class="card-actions justify-end">
                        <button class="btn btn-primary">สั่ง</button>
                    </div>
                </div>
            </div>
            <div class="overflow-x-auto">
                <table class="table w-full">
                    <!-- head -->
                    <thead> <h2>รายการอาหารที่สั่ง</h2>
                        <tr>
                            <th>ชื่อ</th>
                            <th>จำนวน</th>
                            <th>ราคา</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        <!-- row 1 -->
                        <tr>
                            <td>กะเพราหมูกรอบ</td>
                            <td>1</td>
                            <td>50</td>
                            <td><button class="btn btn-error btn-sm">ลบ</button></td>
                        </tr>
                    </tbody>
                    <tbody>
                        <tr>
                            <td></td>
                            <td><button class="btn btn-success">ยืนยัน</button></td>
                            <td></td>
                            <td></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</template>


<style lang="scss" scoped></style>