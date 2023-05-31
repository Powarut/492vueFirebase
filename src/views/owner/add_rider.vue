<template>
    <navbar_owner />
    <h1 class="text-xl font-bold m-2">เพิ่มข้อมูลพนักงานส่ง</h1>
    <div class="form-control m-2">
        <label class="input-group">
            <span>อีเมล์</span>
            <input type="email" placeholder="abc@gmail.com" class="input input-bordered" />
        </label>
    </div>
    <div class="form-control m-2">
        <label class="input-group">
            <span>รหัสผ่าน</span>
            <input type="password" class="input input-bordered" />
        </label>
    </div>
    <div class="form-control m-2">
        <label class="input-group">
            <span>ยืนยันรหัสผ่าน</span>
            <input type="password" class="input input-bordered" />
        </label>
    </div>
    <div class="form-control m-2">
        <label class="input-group">
            <span>ชื่อ</span>
            <input type="text" class="input input-bordered" />
        </label>
    </div>
    <div class="form-control m-2">
        <label class="input-group">
            <span>นามสกุล</span>
            <input type="text" class="input input-bordered" />
        </label>
    </div>
    <div class="form-control m-2">
        <label class="input-group">
            <span>เบอร์โทร</span>
            <input type="text" class="input input-bordered" />
        </label>
    </div>
    <div class="form-control m-2">
        <div class="input-group">
            <input type="file" class="file-input w-full max-w-xs" />
        </div>
    </div>
    <button class="bg-sky-500 text-base-100 font-bold w-24 h-10 rounded-md hover:bg-sky-700">เพิ่ม</button>
</template>

<script setup>
import navbar_owner from '../../components/navbar_owner.vue'
// export default {
//   data() {
//     return {
//       email: "",
//       password: "",
//       confirm_password: "",
//       name: "",
//       surname: "",
//       phone: "",
//     };
//   },
//   methods: {
//     async insert_member() {
//       console.log(72, `${import.meta.env.VITE_API}/members`)
//       // await axios.post(`${import.meta.env.VITE_API}/members`,{

//       // })
//       // .then((respose) => {
//       //   console.log(80, respose)
//       // })
//       let uri = `${import.meta.env.VITE_API}/members`
//       await axios.post(uri, {
//         mem_email: this.email,
//         mem_password: this.confirm_password,
//         mem_name: this.name,
//         mem_surname: this.surname,
//         mem_phone: this.phone
//       })
//         .then(async (response) => {
//           console.log(90, response.data)
//           if (response.data.statusCode == 200) {
//             await alert("ลงทะเบียนเรียบร้อยครับ")
//           }else{
//             alert("มีบางอย่างผิดพลาด")
//             throw response.data
//           }
//         }).catch((err) => {
//           console.log(83, err)
//         })
//     },

//     async check() {
//       console.log(87)
//       if (this.password == this.confirm_password) {
//         await this.insert_member()
//         await router.push('/login')
//       } else {
//         console.log(93)
//         alert("อีเมล์หรือรหัสผ่านไม่ถูกต้องครับ")
//         this.email = ""
//         this.password = ""
//         this.confirm_password = ""
//         this.name = ""
//         this.surname = ""
//         this.phone = ""
//       }
//     }
//   },
// }
</script>

<style lang="scss" scoped></style>