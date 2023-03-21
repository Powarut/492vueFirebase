<script setup>
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
  <div class="div1">
    <div class="div2">
      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/register">register</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </nav>
    </div>
    <div class="div3">
      <RouterView/>
    </div>
  </div>
</template>

<style scoped>
@media (max-width: 720px) {
  .div1 {
    width: 100%;
    height: 900px;
    padding: 0px;
    margin-top: 30px;
    border: 1px solid red;
  }

  .div2 {
    width: 100%;
    height: 40px;
    padding: 0px;
    border: 1px solid blue;
  }

  nav {
    width: 100%;
    font-size: 12px;
    text-align: center;
    margin-top: 10px;
  }

  nav a.router-link-exact-active {
    color: var(--color-text);
  }

  nav a.router-link-exact-active:hover {
    background-color: transparent;
  }

  nav a {
    display: inline-block;
    padding: 0 1rem;
    border-left: 1px solid var(--color-border);
  }

  nav a:first-of-type {
    border: 0;
  }


}

@media (min-width: 721px) {
  .div1 {
    width: 1205px;
    height: 900px;
    padding: 0px;
    border: 1px solid red;
    text-align: center;
  }

  .div2 {
    width: 100%;
    height: 40px;
    padding: 0px;
    border: 1px solid blue;
  }

  nav {
    width: 100%;
    font-size: 12px;
    text-align: center;
    margin-top: 10px;
  }

  nav a.router-link-exact-active {
    color: var(--color-text);
  }

  nav a.router-link-exact-active:hover {
    background-color: transparent;
  }

  nav a {
    display: inline-block;
    padding: 0 1rem;
    border-left: 1px solid var(--color-border);
  }

  nav a:first-of-type {
    border: 0;
  }
  .div3 {
    width: 100%;
    height: 100%;
    padding: 0px;
    border: 1px solid yellow;
  }


}
</style>
