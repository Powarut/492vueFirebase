<template>
    <section class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 m-4">
        <div v-for="(product,index) in list" v-bind:key="index" class="card w-full bg-base-100 shadow-xl">
            <figure>
                <img :src="'http://localhost:3000/food_images/' + product.food_image" />
            </figure>
            <div class="card-body">
                <h2 class="card-title">{{ product.food_name }}</h2>
                <p>{{ product.food_price }} บาท</p>
                <div class="card-actions justify-end">
                    <button class="btn btn-primary" @click="addToCart()">สั่ง</button>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
import { onMounted,computed } from 'vue';
import { useProductStore } from '@/storage/member/product'

const productStore = useProductStore()
onMounted(() => productStore.getProduct())

const list = computed(() => productStore.listProduct)
</script>
