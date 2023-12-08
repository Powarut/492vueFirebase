<script setup>
import { RouterView } from 'vue-router';
import { onMounted } from 'vue';
import { useCartStore } from './storage/cart';
import { useEventStore } from '@/storage/event'
const eventStore = useEventStore()


const cartStore = useCartStore()

onMounted(() =>{
  cartStore.loadCart()
})
</script>t

<template>
  <div>
    <Toast
      v-if="eventStore.alert"
      :status="eventStore.data.status"
      :message="eventStore.data.message"
    >
    </Toast>
    <RouterView />
  </div>
  
</template>
