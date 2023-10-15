import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import "./assets/style.css"
import axios from 'axios'
import VueAxios from 'vue-axios'


const app = createApp(App).use(VueAxios, axios).use(router).mount('#app')
