<script setup>
import navbar_owner from '@/components/navbar_owner.vue'
import Trash from '@/components/icons/trash.vue'
import Edit from '@/components/icons/edit.vue'
import Table from '@/components/Table.vue'

import { RouterLink } from 'vue-router'
import { useFoodStore } from '@/storage/owner/menu'
import { onMounted } from 'vue'

const foodStore = useFoodStore()
onMounted(() => {
    foodStore.loadMenu()
})

const removeMenu = (index) => {
    foodStore.removeMenu(index)
    eventStore.popupMessage('success', 'ลบเมนูออกเรียบร้อยแล้ว!')
}

</script>

<template>
    <navbar_owner>
        <div class="flex-1 pt-8 px-6 bg-base-100">
            <div class="card w-full p-6 mt-2">
                <div class="text-xl font-semibold inline-block">
                    เมนูอาหาร
                    <div class="inline-block float-right">
                        <div class="inline-block float-right">
                            <RouterLink :to="{ name: 'add_menu'}" class="btn px-6 btn-sm normal-case btn-primary">
                                เพิ่ม
                            </RouterLink>
                        </div>
                    </div>
                </div>
                <div class="divider mt-2"></div>
                <Table :headers="['name', 'image', 'price', 'status', 'updatedAt', '']">
                    <tr v-for="(food, index) in foodStore.list">
                        <td>
                            <div class="font-bold">{{ food.name }}</div>
                        </td>
                        <td>
                            <div class="mask mask-squircle w-12 h-12">
                                <img :src="food.image" />
                            </div>
                        </td>
                        <td>{{ food.price }}</td>
                        <td>
                            <div class="badge" :class="food.status === 'มี' ? 'badge-success' : 'badge-error'">
                                {{ food.status }}</div>
                        </td>
                        <td>{{ food.updatedAt }}</td>
                        <td>
                            <RouterLink :to="{ name: 'add_menu', params: { id: index } }" class="btn btn-ghost">
                                <Edit></Edit>
                            </RouterLink>
                            <button @click="removeMenu(index)" class="btn btn-ghost">
                                <Trash></Trash>
                            </button>
                        </td>
                    </tr>
                </Table>
            </div>
        </div>
    </navbar_owner>
</template>

