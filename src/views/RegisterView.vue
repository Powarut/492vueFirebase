<template>
  <div class="about">
    <h1>REGISTER</h1>
    <div>
    <h1>Login Page</h1>
    <form>
      <div>
        <label for="username">Username:</label>
        <input type="text" id="username" v-model="username" />
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
      // ไป หา ยูสว่าตรงมั๊ยในถังถ้าไม่ตรงให้ save
    },
  },
};
</script>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
