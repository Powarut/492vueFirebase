<template>
    <div>
      <div class="navbar bg-green-500">
        <div class="navbar-start text-base-200">
        </div>
        <div class="navbar-center">
          <router-link to="/index">
            <a class="btn btn-ghost normal-case text-xl text-base-100">ร้านอาหารตามสั่งป้าจอย</a>
          </router-link>
        </div>
        <div class="navbar-end dropdown">
          <button tabindex="0" class="btn btn-ghost btn-circle text-base-100 ">
            <div class="indicator">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
              </svg>
              <span class="badge badge-xs badge-primary indicator-item">1</span>
              <div tabindex="0" class="menu dropdown-content card card-compact w-64 p-2 shadow bg-base-100 text-primary-content">
                <div class="card-body">
                  <router-link to="/delivery"><li><a>ออเดอร์ที่ 2 กำลังจัดส่ง</a></li></router-link>
                </div>
              </div>
            </div>
          </button>
        </div>
        <router-link to="/login">
          <button class="btn btn-outline">ลงชื่อออก</button>
        </router-link>
      </div>
    </div>
    <slot></slot>
  </template>
  
  <script setup>
  
  </script>
  
  <style lang="scss" scoped></style>