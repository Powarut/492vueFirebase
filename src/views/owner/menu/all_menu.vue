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

const changeStatus = (index) =>{
    let selectedMenu = foodStore.list[index]
    selectedMenu.status = selectedMenu.status === 'มี'? 'หมด' : 'มี'
    foodStore.updatedMenu(selectedMenu) 
}


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
                <Table :headers="['ชื่อ', 'รูปภ่าพ', 'ราคา', 'สถานะ', 'ปรับปรุงล่าสุด', '']">
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
                            <div class="badge" :class="food.status === 'มี' ? 'หมด' : 'badge-error'">
                                {{ food.status }}</div>
                        </td>
                        <td>{{ food.updatedAt }}</td>
                        <td>
                            <button @click="changeStatus(index)" class="btn btn-ghost">
                            {{ food.status === 'มี' ? 'เปลี่ยน' : 'ยกเลิก'  }}
                            </button>
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

