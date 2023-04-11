import { http } from "@/utils/http";
import DB from "@/utils/indexedDB";
const db = new DB("mytest");

//真实接口
export function getMydata(){
  return http.httpRequestGet('https://getman.cn/mock/test1',{})
}

// mock 接口
export async function fetchMydata(){
  await db.openStore("room", "id");
  const res = await db.getItemList("room");
  return {code: "000", res, success:true};
}