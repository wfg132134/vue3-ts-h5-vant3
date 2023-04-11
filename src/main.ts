import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { router } from './router'
import {createPinia} from 'pinia'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import locale from 'element-plus/es/locale/lang/en'

// 创建 Pinia 实例
const pinia = createPinia()

const app = createApp(App);
app.use(router)
app.use(pinia)
app.use(ElementPlus, {
  locale: locale,
})
app.mount('#app')
