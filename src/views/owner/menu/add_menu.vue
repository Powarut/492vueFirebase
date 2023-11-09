<script setup>
import navbar_owner from '@/components/navbar_owner.vue'
import { useFoodStore } from '@/storage/owner/menu'
import { ref, reactive, onMounted } from 'vue'
import { useRouter, useRoute } from 'vue-router'


const formData = [
    {
        name: "ชื่อ",
        field: 'name'
    },
    {
        name: "ราคา",
        field: 'price'
    },

]

const foodStore = useFoodStore()
const router = useRouter()
const route = useRoute()

// const menuIndex = ref(-1)
// const mode = ref('เพิ่ม')

const menuData = reactive({
    name: '',
    price: 0,
    image: '',
    status: 'มี'
})

const add_Menu = () => {
    foodStore.addMenu(menuData)
    router.push({ name: 'all_menu' })
}
</script>

<template>
    <navbar_owner>
        <div class="shadow-xl p-8 mt-4">
            <div class="text-1xl font-bold">เพิ่มเมนูอาหาร</div>
            <div class="divider"></div>
            <div v-for="form in formData" class="form-control w-full">
                <label class="label">
                    <span class="label-text">{{ form.name }}</span>
                </label>
                <input type="text" class="input input-bordered" v-model="menuData[form.field]" />
            </div>
            <label class="label">
                <span class="label-text">เพิ่มไฟล์รูปภาพ</span>
            </label>
            <input type="file" class="file-input file-input-bordered w-full max-w-xs" />
            <div class="divider"></div>
            <div class="flex mt-4 justify-end">
                <RouterLink :to="{ name: 'all_menu' }" class="btn btn-error ">ย้อนกลับ</RouterLink>
                <button class="btn btn-success ml-4" @click="add_Menu()">เพิ่ม</button>
            </div>
        </div>
    </navbar_owner>
</template>
