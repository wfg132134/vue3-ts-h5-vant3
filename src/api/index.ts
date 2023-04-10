import { http } from "@/utils/http";

export function getMydata(){
  return http.httpRequestGet('https://getman.cn/mock/test1',{})
}