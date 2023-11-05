<template>
  <div class="hero min-h-screen bg-base-200">
    <div class="hero-content flex-col lg:flex-row-reverse">
      <div class="text-center lg:text-left">
        <h1 class="text-5xl font-bold">Login</h1>
        <p class="py-6">โปรดป้อนอีเมล์และรหัสผ่าน เพื่อเข้าสู่ระบบ</p>
      </div>
      <div class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
        <div class="card-body">
          <div class="form-control">
            <label class="label">
              <span class="label-text">อีเมล์</span>
            </label>
            <input type="email" placeholder="โปรดใส่อีเมล์" class="input input-bordered" v-model="email" />
          </div>
          <div class="form-control">
            <label class="label">
              <span class="label-text">รหัสผ่าน</span>
            </label>
            <input type="password" placeholder="โปรดใส่รหัสผ่าน" class="input input-bordered" v-model="password"/>
            <label class="label">
              <a href="/register" class="label-text-alt link link-hover">ยังไม่ได้ลงทะเบียน?</a>
            </label>
            <label class="label">
              <span class="label-text">email: test77@gmail.com  Pas: 1234</span>
            </label>
          </div>
          <div class="form-control mt-6">
            <button class="btn btn-success" @click="login()">เข้าสู่ระบบ</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Login',
  data(){
    return{
      email:"",
    password: "",
    mem_id: null
    };
  },
  methods: {
    login() {
      console.log(`Email: ${this.email} Password: ${this.password}`);
      let uri = `${import.meta.env.VITE_API}/login`;
      this.axios.post(uri,{
        mem_email : this.email,
        mem_password : this.password
      })
      .then((response) => {
        console.log(response.data)
        if(response.data.status == 'success') {
          this.mem_id = response.data.data[0].mem_id
          sessionStorage.setItem("mem_id", response.data.data[0].mem_id) 
        }
        this.$router.push("/home_mem");
      })
      if(this.email === 'admin'&&this.password === '1234')this.$router.push("/dashbord");
    },
  },
  mounted() {
    if (sessionStorage.getItem("mem_id")) {
      this.mem_id = JSON.parse(sessionStorage.getItem("mem_id"));
    }
  },
};
</script>

