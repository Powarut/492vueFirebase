<template>
    <navbar_owner />
    <div class="flex w-full m-2">
        <h1 class="grid flex-grow card m-1 rounded-box place-items-center">ยอดขายทั้งหมด</h1>
    </div>
    <div class="overflow-x-auto">
        <table class="table table-compact w-full">
            <thead>
                <tr>
                    <th>รหัสลูกค้า</th>
                    <th>อีเมล์</th>
                    <th>ชื่อ-นามสกุล</th>
                    <th>เบอร์โทรศัพท์</th>
                    <th>รหัสออเดอร์</th>
                    <th>วันที่สั่ง</th>
                    <th>ยอดเงิน</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <th>1</th>
                    <td>powarut001@gmail.com</td>
                    <td>สมชาย คำลือ</td>
                    <td>0221231245</td>
                    <td>3</td>
                    <td>12/16/2023</td>
                    <td>100</td>
                </tr>
                <tr>
                    <th>3</th>
                    <td>powarut01@gmail.com</td>
                    <td>สมหมาย คำชัย</td>
                    <td>0871236789</td>
                    <td>9</td>
                    <td>12/5/2023</td>
                    <td>90</td>
                </tr>
                <tr>
                    <th>4</th>
                    <td>test01@gmail.com</td>
                    <td>ทรงพล คำเหล่า</td>
                    <td>0878756594</td>
                    <td>7</td>
                    <td>8/15/2023</td>
                    <td>95</td>
                </tr>
                <tr>
                    <th>5</th>
                    <td>test02@gmail.com</td>
                    <td>ปรเมษฐ์ พฤกษชาติ</td>
                    <td>0821231235</td>
                    <td>5</td>
                    <td>3/25/2023</td>
                    <td>45</td>
                </tr>
                <tr>
                    <th>6</th>
                    <td>powarut@gmail.com</td>
                    <td>ปรมาศ เปรยฟ้า</td>
                    <td>0843217645</td>
                    <td>8</td>
                    <td>5/22/2023</td>
                    <td>50</td>
                </tr>
            </tbody>
            <tfoot>
                <tr>
                    <th>รหัส</th>
                    <th>อีเมล์</th>
                    <th>ชื่อ-นามสกุล</th>
                    <th>เบอร์โทรศัพท์</th>
                    <th>จำนวน</th>
                    <th>วันที่สั่ง</th>
                    <th>ยอดเงิน</th>
                </tr>
            </tfoot>
        </table>
    </div>
</template>

<script setup>
import navbar_owner from '../components/navbar_owner.vue';
</script>

<style lang="scss" scoped></style>