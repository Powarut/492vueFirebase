<script setup>
import navbar_owner from '../../../components/navbar_owner.vue'
import Trash from '@/components/icons/trash.vue'
import Edit from '@/components/icons/edit.vue'

import { RouterLink } from 'vue-router'
import {  useMenuStore  } from '@/storage/owner/menu'

const ownerMenu = useMenuStore()
</script>

<template>
    <navbar_owner>
        <div class="flex-1  pt-8 px-6 bg-base-100">
            <div class="card w-full p-6 mt-2">
                <div class="text-xl font-semibold inline-block">
                    เมนูอาหาร
                    <div class="inline-block float-right">
                        <div class="inline-block float-right">
                            <RouterLink to="add_menu" class="btn px-6 btn-sm normal-case btn-primary">
                                เพิ่มเมนู
                            </RouterLink>
                        </div>
                    </div>
                </div>
                <div class="divider mt-2"></div>
                <div class="h-full w-full pb-6 bg-base-100">
                    <div class="overflow-x-auto w-full">
                        <table class="table w-full">
                            <thead>
                                <tr>
                                    <th>ชื่อ</th>
                                    <th>รูปภาพ</th>
                                    <th>ราคา</th>
                                    <th>สถานะ</th>
                                    <th>ปัจจุบัน</th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="food in ownerMenu.list">
                                    <td>
                                        <div class="font-bold">{{ food.name }}</div>
                                    </td>
                                    <td>
                                        <div class="mask mask-squircle w-12 h-12">
                                            <img :src="food.image" />
                                        </div>
                                    </td>
                                    <td>{{ food.price }}</td>
                                    <td>
                                        <div class="badge badge-success">{{ food.status }}</div>
                                    </td>
                                    <td>{{ food.updatesAt }}</td>
                                    <td>
                                        <RouterLink :to="{ name: 'edit_menu' }">
                                            <button class="btn btn-square btn-ghost">
                                                <Edit></Edit>
                                            </button>
                                        </RouterLink>
                                        <button class="btn btn-square btn-ghost">
                                            <Trash></Trash>
                                        </button>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    </navbar_owner>
</template>
