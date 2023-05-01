<template>
  <navbar_owner />
  <div class="m-15">
    <router-view />
  </div>
</template>

<script setup>
import navbar_owner from './components/navbar_owner.vue'
</script>

<style lang="scss" scoped></style>