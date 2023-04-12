import DB from "@/utils/indexedDB";
import { ElLoading } from "element-plus";

const db = new DB("mytest");

interface IResultOr { // 定义接口返回结果的类型
  code: string,
  success: boolean,
  message: string,
  result: any
}

// 保存当前语言包
export async function saveLanguage(lang: string) {
  const loading = ElLoading.service({
    lock: true,
    text: 'Loading',
    background: 'rgba(0, 0, 0, 0.7)',
  })
  setTimeout(() => {
    loading.close()
  }, 1000)
  await db.openStore("language", "id", 2);
  const resultOr: IResultOr = await db.getItemOne("language", 1).then((res) => {
    return { code: '000000', message: '操作成功', result: res || null, success: true }
  })

  const { success } = resultOr
  let obj = {}
  if (success) {
    obj = { name: lang, id: 1 }
  } else {
    obj = { name: lang }
  }
  const result: IResultOr = await db.updateItem("language", obj).then((res) => {
    return { code: '000000', message: '操作成功', result: null, success: true }
  })

  return result
}

// 获取当前语言包
export async function fetchLanguage() {
  const loading = ElLoading.service({
    lock: true,
    text: 'Loading',
  })
  setTimeout(() => {
    loading.close()
  }, 1000)
  await db.openStore("language", "id", 2);
  const resultOr: IResultOr = await db.getItemOne("language", 1).then((res) => {
    return { code: '000000', message: '操作成功', result: res || null, success: true }
  })
  return resultOr
}