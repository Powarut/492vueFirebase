<script setup>
import navbar_owner from '@/components/navbar_owner.vue'
import { useFoodStore } from '@/storage/owner/menu'
import { reactive, ref } from 'vue'
import { useRouter } from 'vue-router'

const foodStore = useFoodStore()
const router = useRouter()

const menuData = reactive({
    name: '',
    price: '',
    image: null,
    status: 'มี'
})

const add_Menu = () => {
    const menu = ref({})
    menu.value = menuData
    if (foodStore.addMenu(menu)) {
        router.push({ name: 'all_menu' })
    }
    
}

const choose_image = async ($event) => {
    const imageFood = $event.target.files[0]
    menuData.image = imageFood
}
</script>

<template>
    <navbar_owner>
        <div class="shadow-xl p-8 mt-4">
            <div class="text-1xl font-bold">เพิ่มเมนูอาหาร</div>
            <div class="divider"></div>
            <div class="form-control w-full">
                <label class="label">
                    <span class="label-text">ชื่อเมนู</span>
                </label>
                <input type="text" class="input input-bordered" placeholder="ป้อนชื่อเมนูที่ต้องการสร้าง" v-model="menuData.name" />
            </div>
            <div class="form-control w-full">
                <label class="label">
                    <span class="label-text">ราคาเมนู</span>
                </label>
                <input type="number" class="input input-bordered" placeholder="ป้อนราคาเมนูที่ต้องการสร้าง" v-model="menuData.price" />
            </div>
            <label class="label">
                <span class="label-text">โปรดใส่รูปภาพอาหาร</span>
            </label>
            <input type="file" class="file-input file-input-bordered w-full max-w-xs" @change="choose_image($event)" accept="image/*" id="file" reactive="file" />
            <div class="divider"></div>
            <div class="flex mt-4 justify-end">
                <RouterLink :to="{ name: 'all_menu' }" class="btn btn-error ">ย้อนกลับ</RouterLink>
                <button class="btn btn-success ml-4" @click="add_Menu()">เพิ่ม</button>
            </div>
        </div>
    </navbar_owner>
</template>
