<template>
 <nav>
    <div class="nav-container">
      <a href="index.html">
        <img src="https://realbearpro.com/img/logo-full.png" class="logonav">
      </a>

      <div class="nav-profile">
        <p class="nav-profile-name">Bearbug</p>
        <div class="nav-profile-cart">
          <i class="fas fa-cart-shopping"></i>
          <div class="cartcount">
            5
          </div>
        </div>
      </div>
    </div>
  </nav>

  <div class="container">
    <div class="sidebar">
      <input type="text" class="sidebar-search" placeholder="Search something...">

      <a href="#" class="sidebar-items">
        Menu 1
      </a>
      <a href="#" class="sidebar-items">
        Menu 2
      </a>
      <a href="#" class="sidebar-items">
        Menu 3
      </a>
      <a href="#" class="sidebar-items">
        Menu 4
      </a>
    </div>
    <div class="product">
      <div class="product-items">
        <img class="product-img" src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80" alt="">
        <p style="font-size: 1.2vw;">Product name</p>
        <p stlye="font-size: 1vw;">500 THB</p>
      </div>
      <div class="product-items">
        <img class="product-img" src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80" alt="">
        <p style="font-size: 1.2vw;">Product name</p>
        <p stlye="font-size: 1vw;">500 THB</p>
      </div>
      <div class="product-items">
        <img class="product-img" src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80" alt="">
        <p style="font-size: 1.2vw;">Product name</p>
        <p stlye="font-size: 1vw;">500 THB</p>
      </div>
      <div class="product-items">
        <img class="product-img" src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80" alt="">
        <p style="font-size: 1.2vw;">Product name</p>
        <p stlye="font-size: 1vw;">500 THB</p>
      </div>
      <div class="product-items">
        <img class="product-img" src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80" alt="">
        <p style="font-size: 1.2vw;">Product name</p>
        <p stlye="font-size: 1vw;">500 THB</p>
      </div>
    </div>
  </div>

  <div class="modal" style="display: none;">
    <div class="modal-bg"></div>
    <div class="modal-page">
      <h2>Detail</h2>
      <br>
      <div class="modaldesc-content">
        <img class="modaldesc-img" src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80" alt="">
        <div class="modaldesc-detail">
          <p style="font-size: 1.5vw;">Product name</p>
          <p style="font-size: 1.2vw;">500 THB</p>
          <br>
          <p style="color: #adadad;">Lorem iaudantium harum doloremque alias. Quae, vel ipsum quasi, voluptas, sit optio nemo magni numquam non dicta voluptates porro! Vero eveniet numquam sit aut vel eligendi officiis iste tenetur expedita. Delectus vero quibusdam adipisci in. Esse.</p>
          <br>
          <div class="btn-control">
            <button class="btn">
              Close
            </button>
            <button class="btn btn-buy">
              Add to cart
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="modal" style="display: none;">
    <div class="modal-bg"></div>
    <div class="modal-page">
      <h2>My cart</h2>
      <br>
      <div class="cartlist">
        <div class="cartlist-items">
          <div class="cartlist-left">
            <img src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80" alt="">
            <div class="cartlist-detail">
              <p style="font-size: 1.5vw;">Product name</p>
              <p style="font-size: 1.2vw;">500 THB</p>
            </div>
          </div>
          <div class="cartlist-right">
            <p class="btnc">-</p>
            <p style="margin: 0 20px;">1</p>
            <p class="btnc">+</p>
          </div>
        </div>
        <div class="cartlist-items">
          <div class="cartlist-left">
            <img src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80" alt="">
            <div class="cartlist-detail">
              <p style="font-size: 1.5vw;">Product name</p>
              <p style="font-size: 1.2vw;">500 THB</p>
            </div>
          </div>
          <div class="cartlist-right">
            <p class="btnc">-</p>
            <p style="margin: 0 20px;">1</p>
            <p class="btnc">+</p>
          </div>
        </div>
        <div class="cartlist-items">
          <div class="cartlist-left">
            <img src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80" alt="">
            <div class="cartlist-detail">
              <p style="font-size: 1.5vw;">Product name</p>
              <p style="font-size: 1.2vw;">500 THB</p>
            </div>
          </div>
          <div class="cartlist-right">
            <p class="btnc">-</p>
            <p style="margin: 0 20px;">1</p>
            <p class="btnc">+</p>
          </div>
        </div>
        <div class="cartlist-items">
          <div class="cartlist-left">
            <img src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80" alt="">
            <div class="cartlist-detail">
              <p style="font-size: 1.5vw;">Product name</p>
              <p style="font-size: 1.2vw;">500 THB</p>
            </div>
          </div>
          <div class="cartlist-right">
            <p class="btnc">-</p>
            <p style="margin: 0 20px;">1</p>
            <p class="btnc">+</p>
          </div>
        </div>
        <div class="cartlist-items">
          <div class="cartlist-left">
            <img src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80" alt="">
            <div class="cartlist-detail">
              <p style="font-size: 1.5vw;">Product name</p>
              <p style="font-size: 1.2vw;">500 THB</p>
            </div>
          </div>
          <div class="cartlist-right">
            <p class="btnc">-</p>
            <p style="margin: 0 20px;">1</p>
            <p class="btnc">+</p>
          </div>
        </div>
        <div class="cartlist-items">
          <div class="cartlist-left">
            <img src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80" alt="">
            <div class="cartlist-detail">
              <p style="font-size: 1.5vw;">Product name</p>
              <p style="font-size: 1.2vw;">500 THB</p>
            </div>
          </div>
          <div class="cartlist-right">
            <p class="btnc">-</p>
            <p style="margin: 0 20px;">1</p>
            <p class="btnc">+</p>
          </div>
        </div>

      </div>
      <div class="btn-control">
        <button class="btn">
          Cancel
        </button>
        <button class="btn btn-buy">
          Buy
        </button>
      </div>
    </div>
  </div>
</template>

<script>
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Noto+Sans:wght@500&display=swap");
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Noto Sans", sans-serif;
  text-decoration: none;
  -ms-overflow-style: none;  /* IE and Edge */
  scrollbar-width: none;  /* Firefox */
}
*::-webkit-scrollbar {
  display: none;
}
nav {
  width: 100%;
  height: 7vw;
  background: linear-gradient(125deg, black,gray);
  display: flex;
  justify-content: space-between;
  padding: 1rem 0;
}
.nav-container {
  max-width: 90vw;
  height: 100%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.logonav {
  width: 7vw;
  object-fit: contain;
}
.nav-profile {
  display: flex;
  align-items: center;
}
.nav-profile-name {
  color: #fff;
  font-size: 1.2vw;
  margin-right: 10px;
}
.fa-cart-shopping {
  font-size: 2vw;
  color: #fff;
}
.nav-profile-cart {
  position: relative;
}
.cartcount {
  position: absolute;
  top: -15px;
  right: -15px;
  width: 25px;
  height: 25px;
  background: red;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
}
.container {
  width: 90vw;
  margin: 0 auto;
  display: flex;
}
.sidebar {
  width: 20%;
  padding: 10px;
  display: flex;
  flex-direction: column;
}
.product {
  width: 80%;
  padding: 10px;
  height: 100%;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 20px;
}
.sidebar-search {
  padding: 10px;
  border: 2px solid transparent;
  width: 100%;
  font-size: 1.2vw;
  outline: none;
  border-radius: 5px;
  background: #f2f2f2;
  transition: 0.3s;
  margin-bottom: 20px;
}
.sidebar-search:focus {
  border: 2px solid #e61b36;
}
.sidebar-items {
  background: #f2f2f2;
  margin-bottom: 10px;
  padding: 10px;
  border-radius: 5px;
  border: 1px solid #e5e5e5;
  color: #000;
  transition: 300ms;
  font-size: 1.2vw;
}
.sidebar-items:hover {
  background: #9c1032;
  color: #fff;
}
.product-items {
  cursor: pointer;
  transition: 0.3s;
}
.product-items:hover {
  transform: scale(1.03);
}
.product-img {
  width: 100%;
  height: 17vw;
  object-fit: cover;
  border-radius: 10px;
}
.modal {
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.7);
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
}
.modal-page {
  min-width: 30vw;
  max-width: 60vw;
  max-height: 30vw;
  overflow: scroll;
  background: #fff;
  border-radius: 15px;
  padding: 20px;
}
.modaldesc-content {
  width: 100%;
  display: flex;
}
.modaldesc-detail {
  margin-left: 20px;
}
.modaldesc-img {
  width: 20vw;
  height: 20vw;
  object-fit: cover;
  border-radius: 10px;
}
.btn-control {
  display: flex;
  justify-content: flex-end;
}
.btn {
  padding: 10px 20px;
  cursor: pointer;
  border: none;
  border-radius: 5px;
  font-size: 1.2vw;
  transition: 0.3s;
}
.btn-buy {
  background: linear-gradient(125deg, #e61b36, #9c1032);
  color: #fff;
  margin-left: 10px;
}
.cartlist {
}
.cartlist-items {
  width: 50vw;
  display: flex;
  margin-bottom: 20px;
  justify-content: space-between;
}
.cartlist-left {
  display: flex;
}
.cartlist-right {
  display: flex;
  align-items: center;
}
.cartlist-left img {
  width: 5vw;
  height: 5vw;
  object-fit: cover;
  border-radius: 5px;
  margin-right: 10px;
}
.btnc {
  width: 30px;
  height: 30px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid #000;
  cursor: pointer;
}

</style>