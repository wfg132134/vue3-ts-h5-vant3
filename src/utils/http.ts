import axios, {AxiosRequestConfig} from "axios"
class Http {
  public static defaultConfig = {
    timeout: 5000,
    baseUrl: ''
  }
  constructor() {
    this.httpInterceptorsRequest();
    this.httpInterceptorsResponse();
  }

  private static axiosInstance = axios.create(Http.defaultConfig);

  private httpInterceptorsRequest() {
    // 请求拦截
    Http.axiosInstance.interceptors.request.use((config) => {
      return config;
    }, (error) => {
      return Promise.reject(error)
    })
  }

  private httpInterceptorsResponse() {
    // 响应拦截
    Http.axiosInstance.interceptors.response.use((config) => {
      return config;
    }, (error) => {
      return Promise.reject(error)
    })
  }

  public httpRequestGet(url: string, params:AxiosRequestConfig) {
    return Http.axiosInstance.get(url, params).then((res) => res.data).catch()
  }

  public httpRequestPost(url: string, params:AxiosRequestConfig) {
    return Http.axiosInstance.post(url, params).then((res) => res.data).catch()
  }
}

export const http = new Http();