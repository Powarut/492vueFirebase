<template>
    <navbar_owner />
    <div class="flex w-full m-2">
        <h1 class="grid flex-grow card m-1 rounded-box place-items-center">รายชื่อเมนูอาหารทั้งหมด</h1>
    </div>
    <router-link to="/add_menu">
        <button class="bg-blue-600 text-base-100 font-bold w-24 h-10 mb-2 rounded-box hover:bg-blue-700">เพิ่ม</button>
    </router-link>
    <div class="overflow-x-auto w-full">
        <table class="table w-full">
            <!-- head -->
            <thead>
                <tr>
                    <th>รหัส</th>
                    <th>ชื่อ</th>
                    <th>ราคา</th>
                    <th>สถานะ</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                <!-- row 1 -->
                <tr>
                    <th>1</th>
                    <td>
                        <div class="flex items-center space-x-3">
                            <div class="avatar">
                                <div class="mask mask-squircle w-12 h-12">
                                    <img src="/src/assets/food1.jpg" alt="Avatar Tailwind CSS Component" />
                                </div>
                            </div>
                            <div>
                                <div class="font-bold">กะเพราหมูกรอบ</div>
                            </div>
                        </div>
                    </td>
                    <td>
                        50
                    </td>
                    <td>
                        <div class="badge badge-success gap-2">
                            มี
                        </div>
                    </td>
                    <th>
                        <!-- The button to open modal -->
                        <label for="my-modal" class="btn btn-sucess bg-green-400 text-base-100">เปลี่ยนสถานะ</label>
                        <!-- Put this part before </body> tag -->
                        <input type="checkbox" id="my-modal" class="modal-toggle" />
                        <div class="modal">
                            <div class="modal-box">
                                <div class="form-control">
                                    <label class="label cursor-pointer">
                                        <span class="label-text">หมด</span>
                                        <input type="radio" name="radio-10" class="radio checked:bg-red-500" checked />
                                    </label>
                                </div>
                                <div class="form-control">
                                    <label class="label cursor-pointer">
                                        <span class="label-text">มี</span>
                                        <input type="radio" name="radio-10" class="radio checked:bg-blue-500" checked />
                                    </label>
                                </div>
                                <div class="modal-action">
                                    <label for="my-modal" class="btn">ยืนยัน</label>
                                </div>
                            </div>
                        </div>
                    </th>
                </tr>
                <!-- row 2 -->
                <tr>
                    <th>2</th>
                    <td>
                        <div class="flex items-center space-x-3">
                            <div class="avatar">
                                <div class="mask mask-squircle w-12 h-12">
                                    <img src="/src/assets/food2.jpg" alt="Avatar Tailwind CSS Component" />
                                </div>
                            </div>
                            <div>
                                <div class="font-bold">ราดหน้าหมู</div>
                            </div>
                        </div>
                    </td>
                    <td>
                        50
                    </td>
                    <td>
                        <div class="badge badge-error gap-2">
                            หมด
                        </div>
                    </td>
                    <th>
                        <!-- The button to open modal -->
                        <label for="my-modal" class="btn btn-sucess bg-green-400 text-base-100">เปลี่ยนสถานะ</label>
                        <!-- Put this part before </body> tag -->
                        <input type="checkbox" id="my-modal" class="modal-toggle" />
                        <div class="modal">
                            <div class="modal-box">
                                <div class="form-control">
                                    <label class="label cursor-pointer">
                                        <span class="label-text">หมด</span>
                                        <input type="radio" name="radio-10" class="radio checked:bg-red-500" checked />
                                    </label>
                                </div>
                                <div class="form-control">
                                    <label class="label cursor-pointer">
                                        <span class="label-text">มี</span>
                                        <input type="radio" name="radio-10" class="radio checked:bg-blue-500" checked />
                                    </label>
                                </div>
                                <div class="modal-action">
                                    <label for="my-modal" class="btn">ยืนยัน</label>
                                </div>
                            </div>
                        </div>
                    </th>
                </tr>
            </tbody>
            <!-- foot -->
            <tfoot>
                <tr>
                    <th>รหัส</th>
                    <th>ชื่อ</th>
                    <th>ราคา</th>
                    <th>สถานะ</th>
                    <th></th>
                </tr>
            </tfoot>

        </table>
    </div>
</template>

<script setup>
import navbar_owner from '../../components/navbar_owner.vue';
</script>

<style lang="scss" scoped></style>