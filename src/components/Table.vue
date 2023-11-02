<template>
    <div class="overflow-x-auto just">
        <table class="table w-full">
            <thead>
                <tr>
                    <th v-for="header in headers">{{ header }}</th>
                </tr>
            </thead>
            <tbody>
                <slot></slot>
            </tbody>
        </table>
    </div>
</template>

<script setup>
import { defineProps } from 'vue';

defineProps({
    headers: Array
})
</script>