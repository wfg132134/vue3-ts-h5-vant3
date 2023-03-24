import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { router } from './router'
import {createPinia} from 'pinia'

// 创建 Pinia 实例
const pinia = createPinia()

const app = createApp(App);
app.use(router)
app.use(pinia)
app.mount('#app')
