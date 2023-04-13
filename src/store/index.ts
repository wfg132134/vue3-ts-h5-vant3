// index.ts
/**
 *    1. 定义容器并导出
 *    2. 使用容器中的state
 *    3. 修改容器中的state
 *    4. 使用容器中的action
 */
import { defineStore } from "pinia";
import { saveLanguage, fetchLanguage } from "@/components/layout";
import i18n from '@/language/i18n'

/**
 * 1. 定义容器并导出
 * 参数一: 容器ID, 唯一, 将来 Pinia 会把所有的容器挂载到根容器
 * 参数二: 选项对象
 * 返回值: 函数, 调用的时候要空参调用, 返回容器实例
 */
export const mainStore = defineStore('main', {
    /**
     * 类似组件的 data, 用于存储全局的的状态
     * 注意:
     *    1.必须是函数, 为了在服务端渲染的时候避免交叉请求导致的数据交叉污染
     *    2.必须是箭头函数, 为了更好的 TS 类型推导
     */
    state: () => {
        return {
            token: 'about11',
            localeLanguage: 'zh',
        }
    },
    /**
     * 类似组件的 computed, 用来封装计算属性, 具有缓存特性
     */
    getters: {

    },
    /**
     * 类似组件的 methods, 封装业务逻辑, 修改state
     * 注意: 里面的函数不能定义成箭头函数(函数体中会用到this)
     */
    actions: {
        //语言切换
        SET_LOCALE(localeLanguage: any) {
            this.localeLanguage = localeLanguage
            i18n.global.locale.value = localeLanguage
            saveLanguage(localeLanguage)
        },
        // 获取初始语言
        GET_LOCALE() {
            fetchLanguage().then(res => {
                this.localeLanguage = res.result.name
                i18n.global.locale.value = res.result.name
            })
        }
    }
})