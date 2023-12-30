<script setup>
import navbar_memberVue from "@/components/navbar_member.vue";
import { RouterLink } from 'vue-router'
import Table from '@/components/Table.vue'
import { useOwnerOrderStore } from '@/storage/owner/order'
import status from "@/ultils/constant"
import axios from 'axios'
import { ref, onMounted } from 'vue'

const OrderStore = useOwnerOrderStore()
const dataForGetOrder = ref()

const getOrderMember = async (orderData) => {
    await axios.post(`${import.meta.env.VITE_API}/getOrderMember`, orderData)
         .then((response) => {
          console.log(response.data)
      }).catch((err) => {
          alert("เกิดปัญหา กรุณากดสั่งใหม่อีกครั้ง")   
      })
}

onMounted( async() => {
    const data = {
        mem_id: parseInt(sessionStorage.getItem("mem_id")),
        status:  status.status.ordered
    }
    await getOrderMember(data)
    dataForGetOrder.value = await OrderStore.loadOrderFromDB(sessionStorage.getItem("mem_id"), status.status.ordered)
    console.log(dataForGetOrder.value)
})
</script>

<template>
    <navbar_memberVue>
        <div class="flex-1  pt-8 px-6 bg-base-100">
            <div class="flex items-center justify-between my-4">
                <div class="text-3xl font-bold">ออเดอร์ของคุณ</div>
            </div>
            <div class="divider"></div>
            <Table :headers="['เลขออเดอร์', 'สถานะ', 'เวลา ณ ที่สั่ง', '']">
                <tr v-for="order in OrderStore.list" :key="order.mem_order_id">
                    <td>{{ `PAJOY${order.mem_order_id}`}}</td>
                    <td>{{ status.statusWording[order.status - 1] }}</td>
                    <td>{{ order.created_at}}</td>
                    <td>
                        <RouterLink :to="{ name: 'detail_order_mem', params: { id: order.mem_order_id } }" class="btn btn-primary">รายละเอียด
                        </RouterLink>
                    </td>
                </tr>
            </Table>
        </div>
    </navbar_memberVue>
</template>


