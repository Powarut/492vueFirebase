<script setup>
import NavbarMember from "@/components/navbar_member.vue"
import { onMounted,computed,ref } from 'vue';
import { useProductStore } from '@/storage/member/product'
import { useCartStore } from '@/storage/cart'

const productStore = useProductStore()
const cartStore = useCartStore()
const isLoggedIn = ref(false)

onMounted(() =>{
  isLoggedIn.value = localStorage.getItem('isLoggedIn')
})


const mem_id = sessionStorage.getItem("mem_id")
const list = computed(() => productStore.listProduct)

const addCart = async (
  mem_id, 
  food_id, 
  quantity, 
  food_name, 
  image, 
  price
  ) => {
  const productData = {
    mem_id: mem_id,
    food_id: food_id,
    quantity: quantity,
    food_name: food_name,
    food_image: image,
    food_price: price
  }
  cartStore.addtoCart(productData)
}
</script>

<template>
  <router-view/>
  <NavbarMember>
    <!-- <div class="hero min-h-screen bg-base-200">
      <div class="hero-content text-center">
        <div class="max-w-md">
          <h1 class="text-5xl font-bold">ยินดีต้อนรับ</h1>
          <p class="py-6">เข้าสู่โปรมแกรมช่วยบริหารการจัดส่งอาหารสำหรับร้านอาหาร
          </p>
        </div>
      </div>
    </div> -->
    <!-- ส่วนเมนูอาหาร-->
    <section class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 m-4">
      <div v-for="product in list" :key="product.food_id" class="card w-full bg-base-100 shadow-xl">
        <figure>
          <img :src="'http://localhost:3000/food_images/' + product.food_image" />
        </figure>
        <div class="card-body">
          <h2 class="card-title">{{ product.food_name }}</h2>
          <p>{{ product.food_price }} บาท</p>
          <div class="card-actions justify-end">
            <button class="btn btn-primary"
            v-show="isLoggedIn == 'true'"
              @click="addCart(parseInt(mem_id), product.food_id, 1, product.food_name, product.food_image, product.food_price)">สั่ง</button>
          </div>
        </div>
      </div>
    </section>
  </NavbarMember>
</template>
