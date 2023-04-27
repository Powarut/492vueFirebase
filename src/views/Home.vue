<script setup>

</script>

<template>
  <!-- start Grid -->
  <div class="grid">
    <header class="page-header content">
      <h3 style="color: red;">Header</h3>
    </header>
    <footer class="page-footer content">
      <h3>Footer</h3>
    </footer>
    <div class="page-lestbar content">
      <h3>leftbar</h3>
    </div>
    <div class="page-main content">
      <h3>Main</h3>
    </div>
  </div>
  <!-- End Grid -->
</template>

<style>
  .grid{
    display: grid;
    grid-template-columns: 1fr 3fr;
    grid-template-rows: 100px auto 200px;
    grid-template-areas: 
        'header header';
  }

 .content{
  background-color: gold;
  border: 2px solid black;
  box-sizing: border-box;
  padding: 10px;
 }
 ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
    overflow: hidden;
    background-color: #333;
  }

  li {
    float: left;
  }

  li a {
    display: block;
    color: white;
    text-align: center;
    padding: 14px 16px;
    text-decoration: none;
  }

  li a:hover:not(.active) {
    background-color: #111;
  }

  .active {
    background-color: #04AA6D;
  }
</style>