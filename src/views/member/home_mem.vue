<script setup>
import NavbarMember from "@/components/navbar_member.vue"
import Product from "/src/components/Product.vue"
import { useProductStore } from '@/storage/member/product'

const productStore = useProductStore()


const addToCart = async (mem_id,food_id,food_price) => {
  await axios.post(`${import.meta.env.VITE_API}/addMenutoCart`, {mem_id, food_id, quantity: 1})
  .then((response) => {
    console.log(response)
  })
}
</script>

<template>
  <NavbarMember>
    <div class="hero min-h-screen bg-base-200">
      <div class="hero-content text-center">
        <div class="max-w-md">
          <h1 class="text-5xl font-bold">ยินดีต้อนรับ</h1>
          <p class="py-6">เข้าสู่โปรมแกรมช่วยบริหารการจัดส่งอาหารสำหรับร้านอาหาร
          </p>
        </div>
      </div>
    </div>
    <!-- ส่วนเมนูอาหาร-->
    <Product :products="productStore.list" :addToCart="addToCart"></Product>
  </NavbarMember>
</template>


