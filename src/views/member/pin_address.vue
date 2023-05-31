<template>
    <navbar_memberVue />
    <div class="hero min-h-screen bg-base-200">
        <div class="hero-content flex-col lg:flex-row-reverse">
            <div class="text-center lg:text-left">
                <h1 class="text-5xl font-bold">ปักหมุด</h1>
            </div>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15487.462608528707!2d100.59139224305197!3d13.966601356626633!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30e281f3f3d9e601%3A0xdbdf0acb3d08f56a!2z4Lir4Lih4Li54LmI4Lia4LmJ4Liy4LiZ4LmA4Lih4Li34Lit4LiH4LmA4Lit4LiBIOC4leC4s-C4muC4pSDguKvguKXguLHguIHguKvguIEg4Lit4Liz4LmA4Lig4Lit4LmA4Lih4Li34Lit4LiH4Lib4LiX4Li44Lih4LiY4Liy4LiZ4Li1IOC4m-C4l-C4uOC4oeC4mOC4suC4meC4tSAxMjAwMA!5e0!3m2!1sth!2sth!4v1683064239218!5m2!1sth!2sth" width="800" height="600" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            <div class="text-center lg:text-leftx">
                        <router-link to="/check_out">
                            <button class="btn btn-success btn-sm mx-2">ยืนยันปักหมุด</button>
                        </router-link>
                    </div>
        </div>
    </div>
</template>

<script setup>
import navbar_memberVue from "../../components/navbar_member.vue";

</script>

<style lang="scss" scoped>

</style>