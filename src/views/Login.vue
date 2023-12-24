<script>
export default {
  name: 'Login',
  data() {
    return {
      email: "",
      password: "",
      mem_id: null,
    };
  },
  methods: {
    login() {
      let uri = `${import.meta.env.VITE_API}/login`;
      this.axios.post(uri, {
        mem_email: this.email,
        mem_password: this.password
      })
        .then((response) => {
          if (response.data.status == 'success') {
            this.mem_id = response.data.data[0].mem_id
            sessionStorage.setItem("mem_id", response.data.data[0].mem_id)
            localStorage.setItem('isLoggedIn', true)
          }
          this.$router.push("/")
        }).catch(error => console.log('error', error))
    },
  },
  mounted() {
    if (sessionStorage.getItem("mem_id")) {
      this.mem_id = JSON.parse(sessionStorage.getItem("mem_id"));
    }
  },
};
</script>

<template>
  <div class="min-h-screen bg-base-200 flex items-center">
    <div class="card mx-auto w-full max-w-2xl shadow-xl">
      <div class="py-24 px-10">
        <h2 class="text-2xl font-semibold mb-2 text-center">เข้าสู่ระบบ</h2>
        <div class="mb-4">
          <div class="form-control w-full mt-4">
            <label class="label"><span class="label-text text-base-content undefined">อีเมล์</span></label><input
              type="email" placeholder="" class="input input-bordered w-full" v-model="email" maxlength="30" />
          </div>
          <div class="form-control w-full mt-4">
            <label class="label"><span class="label-text text-base-content undefined">รหัสผ่าน</span></label><input
              type="password" placeholder="" class="input input-bordered w-full" v-model="password" maxlength="10" />
          </div>
          <label class="label">
            <a href="/register" class="label-text-alt link link-hover">ยังไม่ได้ลงทะเบียน?</a>
          </label>
        </div>
        <p class="text-center text-error mt-8"></p>
        <button @click="login()" class="btn mt-2 w-full btn-primary">Login</button>
      </div>
    </div>
  </div>
</template>



