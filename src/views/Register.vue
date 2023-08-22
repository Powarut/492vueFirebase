<script>
import axios from 'axios'
import router from '../router'
export default {
  data() {
    return {
      email: "",
      password: "",
      confirm_password: "",
      name: "",
      surname: "",
      phone: "",
    };
  },
  methods: {
    async insert_member() {
      let uri = `${import.meta.env.VITE_API}/members`
      await axios.post(uri, {
        mem_email: this.email,
        mem_password: this.confirm_password,
        mem_name: this.name,
        mem_surname: this.surname,
        mem_phone: this.phone
      })
        .then(async (response) => {
          if (response.data.statusCode == 200) {
            await alert("ลงทะเบียนเรียบร้อยครับ")
          } else {
            alert("มีบางอย่างผิดพลาด")
            throw response.data
          }
        }).catch((err) => {
          console.log(err)
        })
    },

    async check() {
      console.log(87)
      if (this.password == this.confirm_password) {
        await this.insert_member()
        await router.push('/login')
      } else {
        console.log(93)
        alert("อีเมล์หรือรหัสผ่านไม่ถูกต้องครับ")
        this.email = ""
        this.password = ""
        this.confirm_password = ""
        this.name = ""
        this.surname = ""
        this.phone = ""
      }
    }
  },
}
</script>

<template>
  <div class="hero min-h-screen bg-base-200">
    <div class="hero-content flex-col lg:flex-row-reverse">
      <div class="text-center lg:text-left">
        <h1 class="text-5xl font-bold">ลงทะเบียนสำหรับลูกค้า</h1>
      </div>
      <div class="card flex-shrink-0 w-full max-w-m shadow-2xl bg-base-100">
        <div class="card-body">
          <div class="form-control m-2">
            <label class="input-group">
              <span>อีเมล์</span>
              <input type="email" placeholder="abc@gmail.com" class="input input-bordered" v-model="email" />
            </label>
          </div>
          <div class="form-control m-2">
            <label class="input-group">
              <span>รหัสผ่าน</span>
              <input type="password" placeholder="ตั้งรหัสผ่านอย่างน้อย 6ตัว" class="input input-bordered"
                v-model="password" />
            </label>
          </div>
          <div class="form-control m-2">
            <label class="input-group">
              <span>ยืนยันรหัสผ่าน</span>
              <input type="password" class="input input-bordered" placeholder="ใส่รหัสผ่านให้ตรงกัน"
                v-model="confirm_password" />
            </label>
          </div>
          <div class="form-control m-2">
            <label class="input-group">
              <span>ชื่อ</span>
              <input type="text" class="input input-bordered" placeholder="สมชาย" v-model="name" />
            </label>
          </div>
          <div class="form-control m-2">
            <label class="input-group">
              <span>นามสกุล</span>
              <input type="text" class="input input-bordered" placeholder="ทรงพล" v-model="surname" />
            </label>
          </div>
          <div class="form-control m-2">
            <label class="input-group">
              <span>เบอร์โทร</span>
              <input type="text" class="input input-bordered" placeholder="ใส่ตัวเลข10 ตัว" v-model="phone" />
            </label>
          </div>
          <router-link to="/login">
            <button class="bg-green-500 text-base-100 font-bold w-24 h-10 rounded-md hover:bg-sky-700"
              @click="check()">ลงทะเบียน</button>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>



<style lang="scss" scoped></style>