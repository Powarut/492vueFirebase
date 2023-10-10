<template>
  <div class="navbar bg-base-100">
    <div class="flex-1"></div>
    <div class="flex-none">
      <ul class="menu menu-horizontal px-1">
        <router-link to="/home_mem">
        <li><a>หน้าแรก</a></li>
      </router-link>
      <router-link to="/menu">
        <li><a>เมนู</a></li>
      </router-link>
      <router-link to="/your_order">
        <li><a>ออเดอร์ของคุณ</a></li>
      </router-link>
    </ul>
      <router-link to="/login">
        <button class="btn btn-outline" @click="logOut()">ลงชื่อออก</button>
      </router-link>
    </div>
  </div>
</template>
  
<script >
export default {
  name: 'Logout',
  methods: {
    logOut() {
      sessionStorage.setItem("mem_id", null);
    }
  },
};

</script>
  
<style lang="scss" scoped></style>