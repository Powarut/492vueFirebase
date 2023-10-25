<script setup>
import { onMounted } from 'vue';
import { RouterView } from 'vue-router';
import { useCartStore } from './storage/cart';


const cartStore = useCartStore()

onMounted(() =>{
  cartStore.loadCart()
})
</script>t

<template>
  <RouterView />
</template>
