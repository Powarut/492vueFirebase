<script setup>
import navbar_memberVue from "../components/navbar_member.vue";
import { ref, onMounted, computed } from 'vue'
import axios from 'axios'
const menu = ref({})

const list_menu = computed(() => menu.value)

const load_menu = computed(() => menu.value.length > 0)
// usercartstrong
// import { useCartstorage } from '../storage/cart';
// const cartstore = useCartstorage
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
    return { list_menu, load_menu }
}
onMounted(() => fetch_menu())


</script>

<template>
    <navbar_memberVue />
    <div class="carousel rounded-box flex-col">
        <div class="hero-content flex-col lg:flex-row-reverse">
            <div class="card w-80 h-100 bg-base-100 shadow-xl m-1" v-for="(food, index) in menu" v-bind:key="index"><img
                    :src="'http://localhost:3000/food_images/' + food.food_image">
                <figure class="m-2"></figure>
                <div class="card-body">
                    <h2 class="card-title">{{ food.food_name }}</h2>
                    <p>ราคา {{ food.food_price }} บาท</p>
                    <div class="card-actions justify-end">
                        <button class="btn btn-primary">สั่ง</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="overflow-x-auto">
        <table class="table w-full">
            <!-- head -->
            <thead>
                <h2>ตะกร้าสินค้าของคุณ</h2>
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
        </table>
        <div class="card-actions justify-center">
            <button class="btn btn-success">สั่งซื้อ</button>
        </div>
    </div>
</template>


<style scoped>
</style>