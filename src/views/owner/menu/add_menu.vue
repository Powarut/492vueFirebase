<script setup>
import navbar_owner from '@/components/navbar_owner.vue'
import {  useMenuStore  } from '@/storage/owner/menu'
import { ref,reactive ,onMounted } from 'vue'
import { useRouter,useRoute } from 'vue-router'


const formData = [
    {
        name: "Name",
        field: 'name'
    },
    {
        name: "Price",
        field: 'price'
    },
    {
        name: "Image",
        field: 'image'
    },
    {
        name: "About",
        field: 'about'
    }
]

const ownerMenu = useMenuStore()
const router = useRouter()
const route = useRoute()

const menuIndex = ref(-1)
const mode = ref('เพิ่ม')

const menuData = reactive ({
    name: '',
    price: 0,
    image: '',
    about: '',
    status:''
})

const updateMenu = () =>{
    if (mode.value === 'แก้ไข'){
        ownerMenu.updateMenu(menuIndex.value, menuData)
    }else {
        ownerMenu.addMenu(menuData)
    }
    router.push({ name: 'all_menu'})
}

onMounted(() => {
    if (route.params.id){
        menuIndex.value = parseInt(route.params.id)
        mode.value = 'แก้ไข'

        const selectedMenus = ownerMenu.getMenu(menuIndex.value)

        menuData.name = selectedMenus.name
        menuData.image = selectedMenus.image
        menuData.price = selectedMenus.price
        menuData.about = selectedMenus.about
        menuData.status = selectedMenus.status
    }
})
</script>

<template>
    <navbar_owner>
        <div class="shadow-xl p-8 mt-4">
            <div class="text-1xl font-bold">{{ mode }}</div>
            <div class="divider"></div>
            <div v-for="form in formData" class="form-control w-full">
                <label class="label">
                    <span class="label-text">{{ form.name }}</span>
                </label>
                <input 
                type="text"  
                class="input input-bordered"
                v-model="menuData[form.field]"
                />
            </div>
            <div class="divider"></div>
            <div class="grid grid-cols-2 gap-2">
                <div class="from-control">
                    <label class="label">
                        <span class="label-text-1xl">สถานะ</span>
                    </label>
                    <select v-model="menuData.status" class="select select-bordered">
                        <option disabled selected>เลือกสถานะ</option>
                        <option value="มี">มี</option>
                        <option value="หมด">หมด</option>
                    </select>
                </div>
            </div>
            <div class="flex mt-4 justify-end">
                <RouterLink :to="{ name: 'all_menu'}" class="btn btn-error ">ย้อนกลับ</RouterLink>
                <button class="btn btn-success ml-4" @click="updateMenu()">{{ mode }}</button>
            </div>
        </div>
    </navbar_owner>
</template>
