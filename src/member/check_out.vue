<template>
    <navbar_memberVue />
    <div class="hero min-h-screen bg-base-200">
        <div class="hero-content flex-col lg:flex-row-reverse">
            <div class="text-center lg:text-left">
                <h1 class="text-5xl font-bold">ยืนยันการสั่งอาหาร</h1>
            </div>
            <div class="card flex-shrink-0 w-full shadow-2xl bg-base-100">
                <div class="card-body">
                    <div class="form-control">
                        <label class="label">
                            <span class="label-text">ข้อมูลลูกค้า</span>
                        </label>
                        <div class="flex items-center space-x-3">
                            <div>
                                <div class="font-bold">ชื่อ: ปรเมษฐ์</div>
                            </div>
                            <div>
                                <div class="font-bold">นามสกุล: พฤกษชาติ</div>
                            </div>
                            <div>
                                <div class="font-bold">เบอร์โทรศัพท์: 0821231235</div>
                            </div>
                        </div>
                    </div>
                    <div class="form-control">
                        <label class="label">
                            <span class="label-text">รายการอาหาร</span>
                        </label>
                        <div class="flex items-center space-x-3">
                            <div class="avatar">
                                <div class="mask mask-squircle w-12 h-12">
                                    <img src="/src/assets/food1.jpg" alt="Avatar Tailwind CSS Component" />
                                </div>
                            </div>
                            <div>
                                <div class="font-bold">กะเพราหมูกรอบ</div>
                            </div>
                            <div>
                                <div class="font-bold">*1</div>
                            </div>
                            <div>
                                <div class="font-bold">50 บาท</div>
                            </div>
                        </div>
                    </div>
                    <div class="form-control">
                        <label class="label">
                            <span class="label-text">รวมค่าอาหารทั้งหมด</span>
                        </label>
                        <div class="flex items-center space-x-3">
                            <div>
                                <div class="font-bold">50 บาท</div>
                            </div>
                        </div>
                    </div>
                    <div class="form-control">
                        <div tabindex="0" class="collapse border border-base-300 bg-base-100 rounded-box">
                            <div class="collapse-title text-xl font-medium">
                                สถานที่จัดส่ง
                            </div>
                            <div class="collapse-content">
                                <p>ตะวันนาอพาร์ทเม้น ต.หลักหก เมืองเอก จ.ปทุมธานี 11201</p>
                            </div>
                        </div>
                    </div>
                    <div class="text-center lg:text-leftx">
                        <router-link to="">
                            <button class="btn btn-success btn-sm mx-2">ยืนยัน</button>
                        </router-link>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import navbar_memberVue from "../components/navbar_member.vue";
</script>

<style lang="scss" scoped>

</style>