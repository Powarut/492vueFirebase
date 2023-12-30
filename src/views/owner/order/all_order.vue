<script setup>
import { useOwnerOrderStore } from '@/storage/owner/order'
import { onMounted,ref } from 'vue'
import { RouterLink } from 'vue-router'
import navbar_owner from '@/components/navbar_owner.vue'
import Table from '@/components/Table.vue'
import Tabs from '@/components/tabs.vue'

const OrderStore = useOwnerOrderStore()
const variableName = JSON.stringify(OrderStore.orders.mem_order_data)

onMounted(async ()=>{
    await OrderStore.LoadAllOrder()
     
})
</script>

<template>
    <navbar_owner>
        <div class="flex-1  pt-2 px-4 bg-base-100">
            <div class="card w-full p-4 mt-2">
                <div class="flex items-center justify-between my-4">
                    <div class="text-3xl font-bold">จัดการออเดอร์</div>
                </div>
                <Tabs></Tabs>
                <div class="divider"></div>
                <Table :headers="['เลขออเดอร์','ชื่อลูกค้า', 'ราคา', 'สถานะ', 'เวลา ณ ที่สั่ง', '']">
                    <tr v-for="order in OrderStore.orders" :key="order.mem_order_id">
                        <td>{{ order.mem_order_id }}</td>
                        <td>{{ order.mem_name }}  {{ order.mem_surname }}</td>
                        <td>{{ variableName }}</td>
                        <td>{{ order.created_at }}</td>
                        <td>
                            <RouterLink :to="{ name: 'detail_order', params: { id: order.mem_order_id } }" class="btn btn-primary">
                                รายละเอียด
                            </RouterLink>
                        </td>
                    </tr>
                </Table>
            </div>
        </div>
    </navbar_owner>
</template>



