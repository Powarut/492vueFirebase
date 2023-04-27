<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <div class="div2">
    <div class="div3">
      <ul>
        <li>
          <RouterLink to="/home">หน้าแรก</RouterLink>
        </li>
        <li>
          <RouterLink to="/menu">เมนู</RouterLink>
        </li>
        <li>
          <RouterLink to="/register">ลงทะเบียน</RouterLink>
        </li>
        <li>
          <RouterLink to="/login">เข้าสู่ระบบ</RouterLink>
        </li>
        <li>
          <RouterLink to="/test">หน้าแรกเจ้าของร้าน</RouterLink>
        </li>
      </ul>
    </div>
    <router-view>
    </router-view>
  </div>
</template>

<style scoped>
#div2{
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#div3 {
  padding: 30px;
  font-weight: bold;
    color: #2c3e50;
}
</style>
