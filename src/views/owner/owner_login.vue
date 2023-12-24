<script>
export default {
    name: 'Login',
    data() {
        return {
            email: "",
            password: "",
            role: ""
        };
    },
    methods: {
        login() {
            let uri = `${import.meta.env.VITE_API}/login_rider`;
            this.axios.post(uri, {
                rider_email: this.email,
                rider_password: this.password
            })
                .then((response) => {
                    if (response.data.status == 'success') {
                        this.role = response.data.data[0].role
                        if (this.role === 'admin') {
                            this.$router.push("/dashbord")
                        } else {
                            this.$router.push("/index")
                        }
                    }
                }).catch(error => console.log('error', error))
        },
    },
};
</script>

<template>
    <div class="h-screen flex items-center">
        <div class="flex-1 max-w-2xl shadow-xl mx-auto p-8">
            <div class="flex flex-col items-center">
                <h1 class="test-3xl">หน้าเข้าสู่ระบบของฝั่งเจ้าของร้านและพนักงานส่ง</h1>
            </div>
            <div class="form-control w-full">
                <label class="label">
                    <span class="label-text">อีเมล์</span>
                </label>
                <input type="text" placeholder="ป้อนอีเมล์" class="input input-bordered w-full" v-model="email"
                    maxlength="50">
            </div>
            <div class="form-control w-full">
                <label class="label">
                    <span class="label-text">รหัสผ่าน</span>
                </label>
                <input type="password" placeholder="ป้อนรหัสผ่าน" class="input input-bordered w-full" v-model="password"
                    maxlength="30">
            </div>
            <div class="p-4">
                <button @click="login()" class="btn btn-natural w-full p-4">ลงชื่อเข้าใช้</button>
            </div>
        </div>
    </div>
</template>


