<script>
import axios from 'axios'
import router from '../router'
import { GoogleMap, Marker } from "vue3-google-map";
import Swal from 'sweetalert2';

export default {
  components: { GoogleMap, Marker },
  setup() {
    let center = { lat: 13.7237248, lng: 99.9736399 };
    return { center };
  },
  data() {
    return {
      email: "",
      password: "",
      confirm_password: "",
      name: "",
      surname: "",
      phone: "",
      lat: null,
      lng: null,
      apiKey: import.meta.env.GOOGLE_MAP_API_KEY,
      address: "",
      inputMap: "",
    };
  },

  created() {
    this.$getLocation()
      .then((coordinates) => {
        this.center.lat = coordinates.lat
        this.center.lng = coordinates.lng
      }).catch((error) => {
        console.log(error)
      })
  },

  mounted() {
    this.$getLocation()
      .then((coordinates) => {
        console.log(coordinates)
        this.center.lat = coordinates.lat
        this.center.lng = coordinates.lng
      }).catch((error) => {
        console.log(error)
      })
  },

  methods: {
    async insert_member() {
      let uri = `${import.meta.env.VITE_API}/members`
      await axios.post(uri, {
        mem_email: this.email,
        mem_password: this.confirm_password,
        mem_name: this.name,
        mem_surname: this.surname,
        mem_phone: this.phone,
        mem_address: JSON.stringify({
          latitude: this.center.lat ?? "",
          longitude: this.center.lng ?? ""
        })
      })
        .then((response) => {
          if (response.data.statusCode == 200) {
            let timerInterval;
            Swal.fire({
              title: "ลงทะเบียนเรียบร้อยครับ",
              timer: 750,
              timerProgressBar: true,
              didOpen: () => {
                Swal.showLoading();
                const timer = Swal.getPopup().querySelector("b");
                timerInterval = setInterval(() => {
                  timer.textContent = `${Swal.getTimerLeft()}`;
                }, 100);
              },
              willClose: () => {
                clearInterval(timerInterval);
              }
            }).then((result) => {
              /* Read more about handling dismissals below */
              if (result.dismiss === Swal.DismissReason.timer) {
                console.log("I was closed by the timer");
              }
            });
          } else {
            alert("มีบางอย่างผิดพลาด")
            throw response.data
          }
        }).catch((err) => {
          console.log(err)
        })
    },

    async check() {
      if (this.password == this.confirm_password) {
        await this.insert_member()
        await router.push('/login')
      } else {
        alert("อีเมล์หรือรหัสผ่านไม่ถูกต้องครับ")
        this.email = ""
        this.password = ""
        this.confirm_password = ""
        this.name = ""
        this.surname = ""
        this.phone = ""
      }
    },

    showLocationOnTheMap(latitude, longitude) {
        // Show & center the Map based oon
        var map = new google.maps.Map(this.$refs["map"], {
          zoom: 15,
          center: new google.maps.LatLng(latitude, longitude),
          mapTypeId: google.maps.MapTypeId.ROADMAP,
        });
  
        new google.maps.Marker({
          position: new google.maps.LatLng(latitude, longitude),
          map: map,
        });
    },
  }
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
              <input type="text" class="input input-bordered" placeholder="ใส่ตัวเลข10 ตัว" maxlength="10" v-model="phone" />
            </label>
          </div>
          <div class="form-control m-2">
            
              <span>ค้นหาที่อยู่</span>
              <input ref="autocomplete" type="text" class="input input-bordered" placeholder="สยามพารากอน กรุงเทพมหานคร" v-model="address" />
          </div>
          <GoogleMap 
            api-key="AIzaSyBduTIBOwosF6Z6WPSHwmlJrLzIU4RlCBg" 
            style="width: 100%; 
            height: 300px" 
            :center="center" 
            :zoom="15"
            :libraries=[] >
            <Marker :options="{ position: { lat: center.lat, lng: center.lng } }" />
          </GoogleMap>
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