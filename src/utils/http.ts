import axios from "axios"
const defaultConfig = {
  timeout: 5000,
  baseUrl: ''
}
const axiosInstance = axios.create(defaultConfig);

// 请求拦截
axiosInstance.interceptors.request.use((config)=>{
  return config;
},(error)=>{
  return Promise.reject(error)
})

// 响应拦截
axiosInstance.interceptors.response.use((config)=>{
  return config;
},(error)=>{
  return Promise.reject(error)
})

// 封装请求
function httpRequestGet(url, params){
  return axiosInstance.get(url, params).then((res)=> res.data).catch()
}

// 封装响应
function httpRequestPost(url, params){
  return axiosInstance.post(url, params).then((res)=> res.data).catch()
}

export default {
  httpRequestGet,
  httpRequestPost,
}