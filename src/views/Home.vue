<template>
  <header>
    <div class="container">
      <div class="header-info">
        <h3>
          ยินดีต้อนรับ<br>
          ร้านอาหารตามสั้งป้าจอย
        </h3>
        <p>
          คุณต้องการสั่งอาหารในเว็บนี้โปรดเข้าสู่ระบบเพื่อทำการสั่ง
        </p>
        <div class="header-btn">
          <input type="text" placeholder="Enter you email address">
          <button type="submit">สมัครสมาชิก</button>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
export default {

}
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.container {
  max-width: 1140;
  margin: 0 auto;
}

header {
  background: url(https://img.wongnai.com/p/1920x0/2021/01/16/9724d1b578fe4eea9753a44ca9757e65.jpg);
  height: 500px;
  background-size: cover;
  background-position: center;
  color: white;
}

.header-info {
  margin-top: 1rem;
  width: 500px;
}

.header-info h3 {
  font-size: 3rem;
  font-weight: lighter;
}

.header-btn input {
  padding: 0.5rem;
  width: 230px;
  border: none;
  border-radius: 5px;
}

.header-btn {
  margin-top: 1rem;
}

.header-btn button {
  padding: 0.5rem;
  width: 150px;
  background-color: #00b7ff;
  color: white;
  border: none;
  border-radius: 5px;
}</style>