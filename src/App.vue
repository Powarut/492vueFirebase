<script setup>
import { RouterLink } from 'vue-router';
</script>

<template>
    <div class="m-15">
    <router-view />
    <div class="hero min-h-screen bg-base-200">
      <div class="hero-content flex-col lg:flex-row-reverse">
        <div class="text-center lg:text-left">
          <h1 class="text-5xl font-bold">ยินดีต้อนรับ!</h1>
          <p class="py-6">เข้าสู่โปรมแกรมช่วยบริหารการจัดส่งอาหารสำหรับร้านอาหาร</p>
        </div>
        <div class="form-control mt-1">
         <button class="btn btn-info" >เข้าสู่ระบบ</button>
        </div>
      </div>
    </div>
  </div>
</template>
