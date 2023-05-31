<template>
    <navbar_memberVue />
    <div class="hero min-h-screen bg-base-200">
        <div class="hero-content flex-col lg:flex-row-reverse">
            <div class="overflow-x-auto">
                <table class="table w-full">
                    <!-- head -->
                    <thead>
                        <tr>
                            <th>ชื่อ</th>
                            <th>จำนวน</th>
                            <th>ราคา</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        <!-- row 1 -->
                        <tr>
                            <td>กะเพราหมูกรอบ</td>
                            <td>1</td>
                            <td>50</td>
                            <td><button class="btn btn-error btn-sm">ลบ</button></td>
                        </tr>
                        <!-- row 2 -->
                        <tr>

                            <td>ราดหน้าหมู</td>
                            <td>1</td>
                            <td>45</td>
                            <td><button class="btn btn-error btn-sm">ลบ</button></td>
                        </tr>
                        <!-- row 3 -->
                        <tr>
                            <td></td>
                            <td><router-link to="/pin_address"><button class="btn btn-info btn-sm">ยืนยันการสั่ง</button></router-link></td>
                            <td></td>
                            <td></td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div class="card w-80 bg-base-100 shadow-xl m-1">
                <figure class="m-2"><img src="/src/assets/food2.jpg" alt="Shoes" /></figure>
                <div class="card-body">
                    <h2 class="card-title">ราดหน้าหมู</h2>
                    <p>ราคา 45 บาท</p>
                    <div class="card-actions justify-end">
                        <button class="btn btn-primary">สั่ง</button>
                    </div>
                </div>
            </div>
            <div class="card w-80 bg-base-100 shadow-xl m-1">
                <figure class="m-2"><img src="/src/assets/food1.jpg" alt="Shoes" /></figure>
                <div class="card-body">
                    <h2 class="card-title">กะเพราหมูกรอบ</h2>
                    <p>ราคา 50 บาท</p>
                    <div class="card-actions justify-end">
                        <button class="btn btn-primary">สั่ง</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
    import navbar_memberVue from "../components/navbar_member.vue";
</script>

<style scoped></style>