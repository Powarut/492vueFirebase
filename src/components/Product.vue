<template>
    <section class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 m-4">
        <div v-for="(product, index) in list" v-bind:key="index" class="card w-full bg-base-100 shadow-xl">
            <figure>
                <img :src="'http://localhost:3000/food_images/' + product.food_image" />
            </figure>
            <div class="card-body">
                <h2 class="card-title">{{ product.food_name }}</h2>
                <p>{{ product.food_price }} บาท</p>
                <div class="card-actions justify-end">
                    <button class="btn btn-primary" @click="addToCart(parseInt(mem_id), product.food_id, 1)">สั่ง</button>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
import { onMounted, computed } from 'vue';
import { useProductStore } from '@/storage/member/product'
import axios from 'axios'

const productStore = useProductStore()
onMounted(() => productStore.getProduct())
const mem_id = sessionStorage.getItem("mem_id") // memer id
const list = computed(() => productStore.listProduct)

const addToCart = async (mem_id, food_id, food_price) => {
    console.log({ mem_id, food_id, quantity: 1 })
    await axios.post(`${import.meta.env.VITE_API}/addMenutoCart`, { mem_id, food_id, quantity: 1 })
        .then((response) => {
            console.log(response)
            alert("เพิ่มอาหารลงในตะกร้าเรียบร้อย")
        }).catch((err) => {
            alert("เกิดปัญหา กรุณากดสั่งใหม่อีกครั้ง")
            
        })
}

</script>
