<script setup>
import navbar_memberVue from "@/components/navbar_member.vue";
import { RouterLink } from 'vue-router'
import Table from '@/components/Table.vue'
import { useOwnerOrderStore } from '@/storage/owner/order'
const ownerOrderStore = useOwnerOrderStore()

</script>

<template>
    <navbar_memberVue>
        <div class="flex-1  pt-8 px-6 bg-base-100">
            <div class="flex items-center justify-between my-4">
                <div class="text-3xl font-bold">ออเดอร์ของคุณ</div>
            </div>
            <div class="divider"></div>
            <Table :headers="['เลขออเดอร์', 'ชื่อเมนู', 'สถานะ', 'เวลา ณ ที่สั่ง', '']">
                <tr v-for="(order, index) in ownerOrderStore.list" :key="index">
                    <td>{{ order.customerName }}</td>
                    <td>{{ order.totalPrice }}</td>
                    <td>{{ order.status }}</td>
                    <td>{{ order.updatedAt }}</td>
                    <td>
                        <RouterLink :to="{ name: 'detail_order_mem', params: { id: index } }" class="btn btn-primary">รายละเอียด
                        </RouterLink>
                    </td>
                </tr>
            </Table>
        </div>
    </navbar_memberVue>
</template>


