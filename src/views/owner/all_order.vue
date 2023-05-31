<template>
    <navbar_owner />
    <div class="flex w-full m-2">
        <h1 class="grid flex-grow card m-1 rounded-box place-items-center">ออเดอร์ทั้งหมด</h1>
    </div>
    <div class="overflow-x-auto">
        <table class="table table-compact w-full">
            <thead>
                <tr>
                    <th>รหัสลูกค้า</th>
                    <th>รหัสออเดอร์</th>
                    <th>ชื่อ-นามสกุล</th>
                    <th>เบอร์โทรศัพท์</th>
                    <th>จำนวน</th>
                    <th>สถานะ</th>
                    <th>ยอดเงิน</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <th>1</th>
                    <td>3</td>
                    <td>สมชาย คำลือ</td>
                    <td>0221231245</td>
                    <td>2</td>
                    <td>
                        <div class="badge badge-success gap-2">
                            รอรับ
                        </div>
                    </td>
                    <td>100</td>
                    <td>
                        <router-link to="/detail_order">
                            <button class="btn btn-success btn-sm mx-2">ดูรายละเอียด</button>
                        </router-link>
                    </td>
                </tr>
                <tr>
                    <th>3</th>
                    <td>9</td>
                    <td>สมหมาย คำชัย</td>
                    <td>0871236789</td>
                    <td>2</td>
                    <td>
                        <div class="badge badge-error gap-2">
                            ยกเลิก
                        </div>
                    </td>
                    <td>90</td>
                    <td>
                        <router-link to="/detail_order">
                            <button class="btn btn-success btn-sm mx-2">ดูรายละเอียด</button>
                        </router-link>
                    </td>
                </tr>
                <tr>
                    <th>4</th>
                    <td>7</td>
                    <td>ทรงพล คำเหล่า</td>
                    <td>0878756594</td>
                    <td>2</td>
                    <td>
                        <div class="badge badge-warning gap-2">
                            ปรุงอาหาร
                        </div>
                    </td>
                    <td>95</td>
                    <td>
                        <router-link to="/detail_order">
                            <button class="btn btn-success btn-sm mx-2">ดูรายละเอียด</button>
                        </router-link>
                    </td>
                </tr>
                <tr>
                    <th>5</th>
                    <td>5</td>
                    <td>ปรเมษฐ์ พฤกษชาติ</td>
                    <td>0821231235</td>
                    <td>1</td>
                    <td>
                        <div class="badge badge-info gap-2">
                            จัดส่ง
                        </div>
                    </td>
                    <td>45</td>
                    <td>
                        <router-link to="/detail_order">
                            <button class="btn btn-success btn-sm mx-2">ดูรายละเอียด</button>
                        </router-link>
                    </td>
                </tr>
                
            </tbody>
            <tfoot>
                <tr>
                    <th>รหัสลูกค้า</th>
                    <th>รหัสออเดอร์</th>
                    <th>ชื่อ-นามสกุล</th>
                    <th>เบอร์โทรศัพท์</th>
                    <th>จำนวน</th>
                    <th>สถานะ</th>
                    <th>ยอดเงิน</th>
                    <th></th>
                </tr>
            </tfoot>
        </table>
    </div>
</template>

<script setup>
    import navbar_owner from '../../components/navbar_owner.vue';
</script>

<style lang="scss" scoped>

</style>