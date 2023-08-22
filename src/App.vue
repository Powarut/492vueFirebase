<script>

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
         <router-link to="/login"><button class="btn btn-info" >เข้าสู่ระบบ</button></router-link>
        </div>
      </div>
    </div>
  </div>
</template>



<style lang="scss" scoped></style>