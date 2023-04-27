<template>
      <div class="dev1">
        <h1>ลงทะเบียน</h1>
        <!-- <div class="row">
          <div class="col">
            <label for="username">Username:</label>
          </div>
          <div class="col">
          <input type="text" id="username" v-model="username" />
          </div>
        </div> -->
        <!-- <div class="row">
          <div class="col">
            <label for="username">Username:</label>
          </div>
          <div class="col">
          <input type="text" id="username" v-model="username" />
          </div>
        </div> -->
      </div>
  <div class="register">
    <div>
      <form>
        <div>
          <label for="username">อีเมล์:</label>
          <input type="text" id="username" v-model="username" />
        </div>
        <div>
          <label for="password">รหัสผ่าน:</label>
          <input type="password" id="password" v-model="password" />
        </div>
        <div>
          <label for="password">ชื่อ:</label>
          <input type="text" id="name" v-model="name" />
        </div>
        <div>
          <label for="password">นามสกุล:</label>
          <input type="text" id="surname" v-model="surname" />
        </div>
        <div>
          <label for="password">เบอร์โทร:</label>
          <input type="text" id="phone" v-model="phone" />
        </div>
        <div>
          <label for="password">ที่อยู่:</label>
          <input type="text" id="address" v-model="address" />
        </div>
        <button type="submit" @click.prevent="login">ยืนยัน</button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: "",
      password: "",
    };
  },
  methods: {
    login() {
      // perform login logic here
      console.log(`Username: ${this.username} Password: ${this.password}`);
      if (this.username === '1') this.$router.push("/");
      // ไป หา ยูสว่าตรงมั๊ยในถังถ้าไม่ตรงให้ save
    },
  },
};
</script>
<style>
  @media (max-width: 720px) {
  .div1 {
    width: 100%;
    height: 900px;
    padding: 0px;
    margin: auto;
    border: 1px solid yellow;
  }
  .div1 .row {
    border: 1px solid yellow;
  }

  .div1 .row .col {
    border: 1px solid orange;
  }
}
</style>
