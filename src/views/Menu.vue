<script setup>
import navbar_memberVue from "../components/navbar_member.vue";
import { ref, onMounted, computed } from 'vue'
import axios from 'axios'
const menu = ref({})
const menuInCart = ref({})
const list_menu = computed(() => menu.value)
const load_menu = computed(() => menu.value.length > 0)
const list_menu_in_cart = computed(() => menuInCart.value)
const load_menu_in_cart = computed(() => menuInCart.value.length > 0)
const sessMem = sessionStorage.getItem("meme_id")
// user_cartstroage
// import { useCartstorage } from '../s("torage/cart';
// const cart_store = useCartstorage()


const addCart = async (menuData) =>{
    await axios.post(`${import.meta.env.VITE_API}/addMenutoCart`)
    let getData = {}
    .then((response) =>{
        getData = response.data.data
    }).catch((err) => {
            console.log(err)
    })
    await fetchMenuFromCart(getData.mem_id, 0)
}

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

const fetchMenuFromCart = async (mem_id, status) => {
    await axios.get(`${import.meta.env.VITE_API}/menuInCart`, {mem_id, status})
    .then((response) => {
        menuInCart.value = response.data.data
    }).catch((error) => {
        console.error(error)
    })

    return { list_menu_in_cart, load_menu_in_cart }
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
                        <button class="btn btn-primary"
                            @click="cart_store.add_cart({
                                mem_id: sessMem,
                                food_id: food.food_id,
                                quantity: 1
                            })">สั่ง</button>
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
                <tr v-for="cart in carts" :key="cart.id"> 
                    <th>
                        {{cart.food_name}}
                    </th>
                    <th>
                        <div class="join">
                            <button class="join-item btn" >-</button>
                            <button class="join-item btn btn-ghost">1</button>
                            <button class="join-item btn" >+</button>
                        </div>
                    </th>
                    <th>
                        {{cart.food_price}}
                    </th>
                    <th>
                        <button class="btn btn-error btn-sm">ลบ</button>
                    </th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <th>
                        <h1>ราคาทั้งหมด 50 บาท</h1>
                    </th>
                </tr>
            </tbody>
        </table>
        <div class="card-actions justify-center">
            <button class="btn btn-success">สั่งซื้อ</button>
        </div>
    </div>
</template>


<style scoped>
img {
    width: 250px;
    height: 200px;
    margin: 0 2.5rem;
}
th{
   text-align: center;
}
</style>