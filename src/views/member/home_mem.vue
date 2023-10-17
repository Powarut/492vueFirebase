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
    <section class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 m-4">
      <div v-for="item in [1,2,3,4,5,6,7]" class="card w-full bg-base-100 shadow-xl">
        <figure><img class="w-full" src="/src/assets/food1.jpg" /></figure>
        <div class="card-body">
          <h2 class="card-title">{{ item }}</h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>
          <div class="card-actions justify-end">
            <button class="btn btn-primary">สั่ง</button>
          </div>
        </div>
      </div>
    </section>
  </NavbarMember>
</template>

<script setup>
import NavbarMember from "../../components/navbar_member.vue";
</script>

<style lang="scss" scoped></style>