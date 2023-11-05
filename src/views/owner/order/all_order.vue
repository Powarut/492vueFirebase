<script setup>
import { useOwnerOrderStore } from '@/storage/owner/order'
import { RouterLink } from 'vue-router'
import navbar_owner from '@/components/navbar_owner.vue'

import Table from '../../../components/Table'

const ownerOrderStore  = useOwnerOrderStore()
</script>

<template>
    <navbar_owner>
        <div class="flex items-center justify-between my-4">
            <div class="text-3xl font-bold">ออเดอร์</div>
        </div>
        <div class="divider"></div>
        <Table :headers="['customer Name', 'Price', 'status', 'updatedAt', '']">
            <tr v-for="(order, index) in ownerOrderStore.list">
                <td>{{ order.customerName }}</td>
                <td>{{ order.totalPrice }}</td>
                <td>{{ order.status }}</td>
                <td>{{ order.updatedAt }}</td>
                <td>
                    <RouterLink :to="{ name: 'detail_order', params: {id : index}}" class="btn btn-ghost">See detail</RouterLink>
                </td>
            </tr>
        </Table>
    </navbar_owner>
</template>



