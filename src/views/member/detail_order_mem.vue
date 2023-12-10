<script setup>
import navbar_memberVue from "@/components/navbar_member.vue";

</script>

<template>
    <navbar_memberVue>
        <div class="shadow-xl p-10 mt-4">
            <div class="text-3xl font-bold">รายละเอียดออเดอร์ที่: 5</div>
            <div class="divider"></div>
            <div class="grid grid-cols-2 gap-2">
                <div>
                    <div class="font-bold">วันและเวลาที่สั่ง</div>
                    <div>10/12/2023 21:33</div>
                </div>
                <div>
                    <div class="font-bold">ประเภทการชำระเงิน</div>
                    <div>เก็บเงินปลายทาง</div>
                </div>
                <div>
                    <div class="font-bold">ที่อยู่</div>
                    <div>test </div>
                </div>
            </div>
            <div class="divider"></div>
            <div  class="grid grid-cols-4">
                <div class="mx-auto">
                    <!-- <img class="p-2 w-40" :src="'http://localhost:3000/food_images/' + food.imageUrl"> -->
                </div>
                <div>
                    <div class="font-bold">กะเพราหมูกรอบ</div>
                    <div>ไม่เผ็ด</div>
                </div>
                <div>
                    จำนวน 1 ชิ้น
                </div>
                <div>55 บาท</div>
            </div>
            <div class="divider"></div>
            <div class="flex justify-between">
                <div class="font-bold">ราคาสินค้าทั้งหมด</div>
                <div>55 บาท</div>
            </div>
            <div class="divider"></div>
            <div class="grid grid-cols-2 gap-2">
                <div>
                    <div class="font-bold">สถานะ</div>
                    <div>รอรับ</div>
                </div>
                <div class="form-control">
                    
                </div>
            </div>
            <div class="flex justify-end mt-4">
                <RouterLink :to="{ name: 'home_mem' }" class="btn btn-ghost">กลับ</RouterLink>
            </div>
        </div>
    </navbar_memberVue>
</template>



