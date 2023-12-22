<script setup>
import { useOwnerOrderStore } from '@/storage/owner/order'
import { RouterLink } from 'vue-router'
import navbar_owner from '@/components/navbar_owner.vue'
import Table from '@/components/Table.vue'

const ownerOrderStore = useOwnerOrderStore()
</script>

<template>
    <navbar_owner>
        <div class="flex-1 pt-8 px-6 bg-base-100">
            <div class="card w-full p-6 mt-2">
                <div class="flex items-center justify-between my-4">
                    <div class="text-3xl font-bold">ยอดขาย</div>
                </div>
                <div class="divider"></div>
                <Table :headers="['ชื่อลูกค้า', 'ราคา', 'สถานะ', 'เวลา ณ ที่สั่ง', '']">
                    <tr v-for="(order, index) in ownerOrderStore.list" :key="index">
                        <td>{{ order.customerName }}</td>
                        <td>{{ order.totalPrice }}</td>
                        <td>{{ order.status }}</td>
                        <td>{{ order.updatedAt }}</td>
                        <td>
                            <RouterLink :to="{ name: 'detail_order', params: { id: index } }" class="btn btn-primary">
                                รายละเอียด
                            </RouterLink>
                        </td>
                    </tr>
                </Table>
            </div>
        </div>
    </navbar_owner>
</template>

