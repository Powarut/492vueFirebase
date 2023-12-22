<template>
    <div class="navbar bg-success">
      <div class="navbar-start text-base-200">
        <div class="dropdown">
          <label tabindex="0" class="btn btn-ghost btn-circle">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h7" />
            </svg>
          </label>
          <ul tabindex="0" class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 text-primary-content ">
            <router-link to="/all_menu">
              <li><a>เมนู</a></li>
            </router-link>
            <router-link to="/all_rider">
              <li><a>พนักงานส่ง</a></li>
            </router-link>
            <router-link to="/all_order">
              <li><a>ออเดอร์</a></li>
            </router-link>
            <router-link to="/total_sales">
              <li><a>ยอดขาย</a></li>
            </router-link>
          </ul>
        </div>
        <router-link to="/dashbord">
          <a class="btn btn-ghost normal-case text-xl text-base-100">ร้านอาหารตามสั่งป้าจอย</a>
        </router-link>
      </div>
      <div class="navbar-end dropdown">
        <button tabindex="0" class="btn btn-accent btn-circle text-base-100 ">
          <div class="indicator">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
            </svg>
            <span class="badge badge-xs badge-ghost indicator-item">3</span>
            <div tabindex="0"
              class="menu dropdown-content card card-compact w-64 p-2 shadow bg-base-100 text-primary-content">
              <div class="card-body">
                <li><a>ออเดอร์ที่ 3 รอยืนยัน</a></li>
                <li><a>ออเดอร์ที่ 2 กำลังจัดส่ง</a></li>
                <li><a>ออเดอร์ที่ 1 จัดส่งสำเร็จ</a></li>
              </div>
            </div>
          </div>
        </button>
      </div>
      <router-link to="/login">
        <button class="btn btn-error">ลงชื่อออก</button>
      </router-link>
    </div>
    <slot></slot>
</template>

<script>

</script>
