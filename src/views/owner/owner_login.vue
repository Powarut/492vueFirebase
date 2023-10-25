<template>
    <div class="h-screen flex items-center">
        <div class="flex-1 max-w-2xl shadow-xl mx-auto p-8">
            <div class="flex flex-col items-center">
                <h1 class="test-3xl">เข้าสู่ระบบ</h1>
            </div>
            <div class="form-control w-full">
                <label class="label">
                    <span class="label-text">อีเมล์</span>
                </label>
                <input type="text" placeholder="ป้อนอีเมล์" class="input input-bordered w-full">
            </div>
            <div class="form-control w-full">
                <label class="label">
                    <span class="label-text">รหัสผ่าน</span>
                </label>
                <input type="password" placeholder="ป้อนรหัสผ่าน" class="input input-bordered w-full">
            </div>
            <RouterLink :to="{ name: 'dashbord'}" class="btn btn-natural w-full">ลงชื่อเข้าใช้</RouterLink>
        </div>
    </div>
</template>

<script setup>
import {RouterLink} from 'vue-router'
</script>
