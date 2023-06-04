<script setup>
import navbar_owner from '../../components/navbar_owner.vue'
</script>

<template>
<navbar_owner />
    <div class="hero min-h-screen bg-base-200">
        <div class="hero-content flex-col lg:flex-row-reverse">
            <div class="text-center lg:text-left">
                <h1 class="text-5xl font-bold">เพิ่มอาหารลงในเมนู !</h1>
            </div>
            <div class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                <div class="card-body">
                    <div class="form-control">
                        <label class="label">
                            <span class="label-text">ชื่อ</span>
                        </label>
                        <input type="text" placeholder="ป้อนชื่อเมนู" class="input input-bordered" />
                    </div>
                    <div class="form-control">
                        <label class="label">
                            <span class="label-text">ราคา</span>
                        </label>
                        <input type="text" placeholder="ตั้งราคา" class="input input-bordered" />
                    </div>
                    <span class="label-text m-2">โปรดใส่รูปภาพอาหาร</span>
                    <div class="form-control">
                        <div class="input-group">
                            <input type="file" class="file-input w-full max-w-xs" @change="insert_food"/>
                        </div>
                    </div>
                    <div class="form-control mt-2 ">
                        <router-link to="/all_menu"><button class="btn btn-sucess" @click="insert_food">บันทึก</button></router-link>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>

</style>