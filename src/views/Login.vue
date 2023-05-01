<template>
  <div>
    <h1 class="">
      เข้าสู่ระบบส่วนเจ้าของร้าน
    </h1>
    <div>
      <label for="email">อีเมล์</label>
    <input type="text" id="email" v-model="email" />
    </div>
    <div class="pwd">
      <label for="password">รหัสผ่าน</label>
      <input type="password" id="password" v-model="password">
    </div>
    <div>
      <button type="login" @click.prevent ="login" class="bg-success mb-2">เข้าสู่ระบบ</button>
    </div>
  </div>
  
</template>

<script>
export default {
  data(){
    return{
      email:"",
    password: "",
    };
  },
  methods: {
    login() {
      console.log(`Email: ${this.email} Password: ${this.password}`);
      let uri = "http://localhost:3000/login";
      this.axios.post(uri,{
        mem_email : this.email,
        mem_password : this.password
      })
      .then((response) => {
        console.log(response.data)
        if(response.data.status == 'success')
        this.$router.push("/all_rider");
      })
      // if(this.email === 'admin'&&this.password === '1234')this.$router.push("/");
    },
  },
};
</script>

<style>
h1 {
  text-align: center;
}
</style>