import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { router } from './router'
import {createPinia} from 'pinia'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import i18n from '@/language/i18n'

// 创建 Pinia 实例
const pinia = createPinia()

const app = createApp(App);
app.use(router)
app.use(pinia)
app.use(ElementPlus)
app.use(i18n)
app.mount('#app')
