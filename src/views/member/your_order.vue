<template>
    <navbar_memberVue>
        <div class="flex w-full m-2">
        <h1 class="grid flex-grow card m-1 rounded-box place-items-center">ออเดอร์ของคุณทั้งหมด</h1>
    </div>
    <div class="overflow-x-auto">
        <table class="table table-compact w-full">
            <thead>
                <tr>
                    <th>รหัสออเดอร์</th>
                    <th>จำนวน</th>
                    <th>สถานะ</th>
                    <th>ยอดเงิน</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <th>1</th>
                    <td>2</td>
                    <td>
                        <div class="badge badge-success gap-2">
                            รอรับ
                        </div>
                    </td>
                    <td>100</td>
                    <td>
                        <router-link to="/detail_order_mem">
                            <button class="btn btn-success btn-sm mx-2">ดูรายละเอียด</button>
                        </router-link>
                    </td>
                </tr>
                <tr>
                    <th>3</th>
                    <td>2</td>
                    <td>
                        <div class="badge badge-error gap-2">
                            ยกเลิก
                        </div>
                    </td>
                    <td>90</td>
                    <td>
                        <router-link to="/detail_order_mem">
                            <button class="btn btn-success btn-sm mx-2">ดูรายละเอียด</button>
                        </router-link>
                    </td>
                </tr>
                <tr>
                    <th>4</th>
                    <td>2</td>
                    <td>
                        <div class="badge badge-warning gap-2">
                            ปรุงอาหาร
                        </div>
                    </td>
                    <td>95</td>
                    <td>
                        <router-link to="/detail_order_mem">
                            <button class="btn btn-success btn-sm mx-2">ดูรายละเอียด</button>
                        </router-link>
                    </td>
                </tr>
                <tr>
                    <th>5</th>
                    <td>1</td>
                    <td>
                        <div class="badge badge-info gap-2">
                            จัดส่ง
                        </div>
                    </td>
                    <td>45</td>
                    <td>
                        <router-link to="/detail_order_mem">
                            <button class="btn btn-success btn-sm mx-2">ดูรายละเอียด</button>
                        </router-link>
                    </td>
                </tr>
                
            </tbody>
        </table>
    </div>
    </navbar_memberVue>
</template>

<script setup>
import navbar_memberVue from "../../components/navbar_member.vue";
</script>

<style lang="scss" scoped>

</style>