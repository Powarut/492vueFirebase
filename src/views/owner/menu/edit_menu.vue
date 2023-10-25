<script setup>
import navbar_owner from '@/components/navbar_owner.vue'

</script>

<template>
    <navbar_owner>
        <div class="shadow-xl p-8">
            <div class="text-1xl font-bold">แก้ไขเมนูอาหาร</div>
            <div class="divider"></div>
            <div class="form-control w-full">
                <label class="label">
                    <span class="label-text-1xl">ชื่อ</span>
                </label>
                <input type="text" placeholder="ป้อนชื่อเมนู" class="input input-bordered"  />
            </div>
            <div class="form-control w-full ">
                <label class="label">
                    <span class="label-text-1xl">ราคา</span>
                </label>
                <input type="text" placeholder="ตั้งราคา" class="input input-bordered"  />
            </div>
            <div class="form-control w-full mt-4">
                <span class="label-text-1xl">โปรดใส่รูปภาพอาหาร</span>
                <input type="file" class="file-input file-input-bordered file-input-accent w-full max-w-xs" @change="choose_image" accept="image/*" id="file"
                ref="file" />
            </div>
            <div class="divider"></div>
            <div class="grid grid-cols-2 gap-2">
                <div class="from-control w-full">
                    <label class="label">
                        <span class="label-text-1xl">สถานะ</span>
                    </label>
                    <select class="select select-bordered" id="">
                        <option disabled selected>เลือกสถานะ</option>
                        <option>มี</option>
                        <option>หมด</option>
                    </select>
                </div>
                <div class="form-control w-full">
                    <button class="btn btn-success" @click="insert_food()">บันทึก</button>
                </div>
            </div>
        </div>
    </navbar_owner>
</template>
