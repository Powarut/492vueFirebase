<template>
    <navbar_riderVue />
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
                    <th>5</th>
                    <td>1</td>
                    <td>
                        <div class="badge badge-info gap-2">
                            จัดส่ง
                        </div>
                    </td>
                    <td>45</td>
                    <td>
                        <router-link to="/order_delivery">
                            <button class="btn btn-success btn-sm mx-2">ดูรายละเอียด</button>
                        </router-link>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>
    
<script setup>
        import navbar_riderVue from "../../components/navbar_rider.vue";
</script>
    
<style lang="scss" scoped>
    
</style>