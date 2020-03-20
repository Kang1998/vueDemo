import axios from 'axios'

export default function request(config) {
  // 1.创建axios实例
  const instance = axios.create({
    baseURL: 'http://123.207.32.32:8000/api/wh',
    timeout: 5000
  })

  // 2 axios拦截器
  // 2.1，请求拦截的作用
  instance.interceptors.request.use(config => {
    return config
  },err => {
   console.log(err); 
  })

  // 2.2响应拦截
  instance.interceptors.response.use(res => {
    return res.data
  },err => {
      console.log(err);
    })

    return instance(config)
}