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
</script>

<template>
  <div v-if="eventStore.alert" class="toast toast-end">
    <div class="alert" :class="`alert-${eventStore.data.status}`" >
      <span>{{ eventStore.data.message }}</span>
    </div>
  </div>
  <RouterView />
</template>
