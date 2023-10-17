<template>
  <NavbarMember>
    <div class="hero min-h-screen bg-base-200">
      <div class="hero-content text-center">
        <div class="max-w-md">
          <h1 class="text-5xl font-bold">ยินดีต้อนรับ!</h1>
          <p class="py-6">เข้าสู่โปรมแกรมช่วยบริหารการจัดส่งอาหารสำหรับร้านอาหาร
          </p>
        </div>
      </div>
    </div>
    <!-- ส่วนเมนูอาหาร-->
    <Product :products="productStore.list" :addToCart="addToCart"></Product>
  </NavbarMember>
</template>

<script setup>
import NavbarMember from "../../components/navbar_member.vue";
import Product from "/src/components/Product.vue"
import { useProductStore } from "../../storage/member/product";
import { useCartStore } from "../../storage/cart";

const productStore = useProductStore()
const cartStore = useCartStore()

const addToCart = (product) => {
  console.log("Add to cart")
  console.log(product)
  cartStore.addtoCart(product)
}
</script>

<style lang="scss" scoped></style>