<script setup>
import navbar_owner from '@/components/navbar_owner.vue'
import { useRouter } from 'vue-router';
import { onMounted, computed } from 'vue';
import Trash from '@/components/icons/trash.vue'
import Table from '@/components/Table.vue'
import { useFoodStore } from '@/storage/owner/menu'

const foodStore = useFoodStore()
const router = useRouter()

onMounted(() => foodStore.getMenu())
const list = computed(() => foodStore.listMenu)

// const changeStatus = (food_id) =>{
//     let selectedMenu = foodStore.list[food_id]
//     selectedMenu.status = selectedMenu.status === 'มี'? 'หมด' : 'มี'
//     foodStore.updatedMenu(selectedMenu) 
// }

// const changeStatus = async (food_id, food_status) => {
//     await axios.put(`${import.meta.env.VITE_API}/food/food_id/`, {
//         "food_id": food_id,
//         "status": food_status
//     })
//         .then((response) => {
//             foodStore.list()
//             console.log(response)
//         }).catch((err) => {
//             console.log(err)
//         })
// }

/* ลบเมนูแบบระบุ */
const removeMenu = async (id) => {
    try {
        await foodStore.removeMenu(id)
    } catch (error) {
        console.log('error', error)
    }
    window.location.reload();
}
</script>

<template>
    <navbar_owner>
        <div class="d-flex justify-center " v-if="!foodStore.loadMenu">
            <h1 class="text-center">กำลังโหลดเมนูอาหาร...</h1>
        </div>
        <div class="flex-1 pt-8 px-6 bg-base-100" v-else>
            <div class="card w-full p-6 mt-2">
                <div class="text-xl font-semibold inline-block">
                    เมนูอาหาร
                    <div class="inline-block float-right">
                        <div class="inline-block float-right">
                            <RouterLink :to="{ name: 'add_menu' }" class="btn px-6 btn-sm normal-case btn-primary">
                                เพิ่ม
                            </RouterLink>
                        </div>
                    </div>
                </div>
                <div class="divider mt-2"></div>
                <Table :headers="['ชื่อ', 'รูปภาพ', 'ราคา', 'สถานะ', '']">
                    <tr v-for="food in list" :key="food.food_id">
                        <td>
                            <div class="font-bold">{{ food.food_name }}</div>
                        </td>
                        <td>
                            <div class="mask mask-squircle w-12 h-12">
                                <img :src="'http://localhost:3000/food_images/' + food.food_image" />
                            </div>
                        </td>
                        <td>{{ food.food_price }}</td>
                        <td>
                            <div class="badge badge-success" :class="food.food_status === 'มี' ? 'หมด' : 'badge-error'">
                                {{ food.food_status }}</div>
                        </td>
                        <td></td>
                        <td>
                            <button @click="changeStatus(food.food_id)" class="btn btn-ghost m-1">
                                เปลี่ยนสถานะ
                            </button>
                            <button @click="removeMenu(food.food_id)" class="btn btn-ghost">
                                <Trash></Trash>
                            </button>
                        </td>
                    </tr>
                </Table>
            </div>
        </div>
    </navbar_owner>
</template>

