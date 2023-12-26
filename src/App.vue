<script setup>
import { RouterView } from 'vue-router';
import { onMounted } from 'vue';
import { useCartStore } from '@/storage/cart'
import { useProductStore } from '@/storage/member/product'
import { useEventStore } from '@/storage/event'

const eventStore = useEventStore()
const cartStore = useCartStore()
const productStore = useProductStore()


onMounted(() =>{
  cartStore.loadCart()
  productStore.getProduct()
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
