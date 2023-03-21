<template>
  REGISTER
      <div class="dev1">
        <div class="row">
          <div class="col">
            <label for="username">Username:</label>
          </div>
          <div class="col">
          <input type="text" id="username" v-model="username" />
          </div>
        </div>
        <div class="row">
          <div class="col">
            <label for="username">Username:</label>
          </div>
          <div class="col">
          <input type="text" id="username" v-model="username" />
          </div>
        </div>
        <div class="row">
          <div class="col">
            1 of 3
          </div>
          <div class="col">
            2 of 3
          </div>
          <div class="col">
            3 of 3
          </div>
        </div>
      </div>
  <div class="about">
    <div>
      <form>
        <div>
          <label for="username">Username:</label>
          <input type="text" id="username" v-model="username" />
        </div>
        <div>
          <label for="password">Password:</label>
          <input type="password" id="password" v-model="password" />
        </div>
        <div>
          <label for="password">Password:</label>
          <input type="password" id="password" v-model="password" />
        </div>
        <div>
          <label for="password">Password:</label>
          <input type="password" id="password" v-model="password" />
        </div>
        <div>
          <label for="password">Password:</label>
          <input type="password" id="password" v-model="password" />
        </div>
        <div>
          <label for="password">Password:</label>
          <input type="password" id="password" v-model="password" />
        </div>
        <button type="submit" @click.prevent="login">Login</button>
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
