import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import "./assets/style.css"
import axios from 'axios'
import VueAxios from 'vue-axios'
import { createPinia } from 'pinia'
import Vue3Geolocation from 'vue3-geolocation'
import VueApexCharts from "vue3-apexcharts";




const app = createApp(App)
const pinia = createPinia()
app.use(VueAxios, axios)
app.use(router)
app.use(pinia)
app.use(Vue3Geolocation)
app.use(VueApexCharts);
app.mount('#app')