<template>
    <navbar_owner />
    <div class="hero min-h-screen bg-base-200">
        <div class="hero-content flex-col lg:flex-row-reverse">
            <div class="text-center lg:text-left">
                <h1 class="text-5xl font-bold">เปลี่ยนสถานะออเดอร์ ที่ 5</h1>
            </div>
            <div class="card flex-shrink-0 w-full shadow-2xl bg-base-100">
                <div class="card-body">
                    <div class="form-control">
                        <label class="label">
                            <span class="label-text">ข้อมูลเพิ่มเติม</span>
                        </label>
                        <div class="flex items-center space-x-3">
                            <textarea class="textarea textarea-bordered" placeholder="เพิ่มเติม"></textarea>
                        </div>
                    </div>
                    <div class="form-control">
                        <select class="select select-accent w-full max-w-xs">
                            <option disabled selected>เลือกสถานะที่จะเปลี่ยน</option>
                            <option class="bg-warning text-base-100">ปรุงอาหาร</option>
                            <option class="bg-info text-base-100">จัดส่ง</option>
                            <option class="bg-error text-base-100">ยกเลิก</option>
                        </select>
                    </div>
                    <div class="text-center lg:text-leftx">
                        <!-- The button to open modal -->
                        <label for="my-modal-3" class="btn">เปลี่ยนสถานะ</label>

                        <!-- Put this part before </body> tag -->
                        <input type="checkbox" id="my-modal-3" class="modal-toggle" />
                        <div class="modal">
                            <div class="modal-box relative">
                                <h3 class="text-lg font-bold">ยืนยันการเปลี่ยนสถานะที่คุณเลือก!</h3>
                                <router-link to="/all_order">
                                    <button class="bg-success text-base-100 btn m-1">ยืนยัน</button>
                                </router-link>
                                <router-link to="/order_update">
                                    <button class="bg-error text-base-100 btn m-1">ยกเลิก</button>
                                </router-link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import navbar_owner from '../../components/navbar_owner.vue';
</script>

<style lang="scss" scoped></style>