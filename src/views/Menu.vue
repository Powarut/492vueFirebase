<script setup>
import navbar_memberVue from "../components/navbar_member.vue";
import { ref, onMounted, computed } from 'vue'
import axios from 'axios'
const menu = ref({})

const list_menu = computed(() => menu.value)

const load_menu = computed(() => menu.value.length > 0)
// user_cartstroage
import { useCartstorage } from '../storage/cart';
const cart_store = useCartstorage()


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
    <div class="carousel rounded-box">
        <div class="hero-content lg:row-reverse">
            <div class="card w-80 h-100 bg-base-100 shadow-xl m-1" v-for="(food, index) in menu" v-bind:key="index"><img
                    :src="'http://localhost:3000/food_images/' + food.food_image">
                <figure class="m-2"></figure>
                <div class="card-body">
                    <h2 class="card-title">{{ food.food_name }}</h2>
                    <p>ราคา {{ food.food_price }} บาท</p>
                    <div class="card-actions justify-end">
                        <button class="btn btn-primary" @click="cart_store.add_cart(food.food_id,food.food_price)">สั่ง</button>
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
img{
    width: 250px;
    height: 200px;
    margin: 0 2.5rem;
}
</style>