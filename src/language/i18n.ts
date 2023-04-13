import { createI18n } from "vue-i18n";
import en from './en'
import zh from './zh-cn'


const getCurrentLanguage = () => {
  //设置
  const UAlang = navigator.language // zh-CN
  const langCode = UAlang.indexOf('zh') !== -1 ? 'zh' : 'en'
  return langCode
}

const i18n = createI18n({
  locale: getCurrentLanguage() || 'zh',
  legacy: false, // 如果要支持compositionAPI，此项必须设置为false;
  globalInjection: true, // 全局注册$t方法
  messages: {
    zh,
    en,
  }
})

export default i18n