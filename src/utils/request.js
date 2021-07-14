import axios from 'axios'
import router from '@/router/routers'
import { Notification, MessageBox } from 'element-ui'
import store from '../store'
import { getToken, getRefreshToken, setToken, setRefreshToken } from '@/utils/auth'
import Config from '@/settings'
// 创建axios实例
const service = axios.create({
  baseURL: process.env.NODE_ENV === 'production' ? window.g.baseUrl : '/', // api 的 base_url
  timeout: Config.timeout // 请求超时时间
})
// 刷新token  post方法
// const refreshToken = async() => { await service.post('auth/refreshToken', { refreshToken: getRefreshToken() }, true) }
const refreshToken = async() => { return service.post('auth/refreshToken', { refreshToken: getRefreshToken() }, true) }

// request拦截器
service.interceptors.request.use(
  config => {
    if (getToken()) {
      config.headers['Authorization'] = getToken() // 让每个请求携带自定义token 请根据实际情况自行修改
    }
    config.headers['Content-Type'] = 'application/json'
    return config
  },
  error => {
    // Do something with request error
    console.log(error) // for debug
    Promise.reject(error)
  }
)
let isRefreshing = false // 刷新状态
let requests = []// 请求

// response 拦截器
service.interceptors.response.use(
  response => {
    const code = response.status
    if (code < 200 || code > 300) {
      Notification.error({
        title: response.message
      })
      return Promise.reject('error')
    } else {
      if (response.data.message === '登录状态过期') { // 登录状态过期 重新登录
        MessageBox.confirm(
          '登录状态已过期，您可以继续留在该页面，或者重新登录',
          '系统提示',
          {
            confirmButtonText: '重新登录',
            cancelButtonText: '取消',
            type: 'warning'
          }
        ).then(() => {
          store.dispatch('LogOut').then(() => {
            location.reload() // 为了重新实例化vue-router对象 避免bug
          })
        })
      }
      return response.data
    }
  },
  error => {
    let code = 0
    try {
      code = error.response.data.status
    } catch (e) {
      if (error.toString().indexOf('Error: timeout') !== -1) {
        Notification.error({
          title: '网络请求超时',
          duration: 5000
        })
        return Promise.reject(error)
      }
    }
    if (code) {
      if (code === 401 && !error.config.url.includes('auth/refresh')) {
        const { config } = error
        if (!isRefreshing) {
          isRefreshing = true
          // 刷新token值
          return refreshToken().then(res => {
            // 设置新token
            // const { token, refreshToken } = res
            setToken(res.token, false)
            setRefreshToken(res.refreshToken, false)
            // 重新请求
            config.headers['Authorization'] = res.token
            requests.forEach(cb => cb(res.token))
            requests = []
            return service(config)
          }).catch(() => {
            MessageBox.confirm(
              '登录状态已过期，您可以继续留在该页面，或者重新登录',
              '系统提示',
              {
                confirmButtonText: '重新登录',
                cancelButtonText: '取消',
                type: 'warning'
              }
            ).then(() => {
              store.dispatch('LogOut').then(() => {
                location.reload() // 为了重新实例化vue-router对象 避免bug
              })
            })
          }).finally(() => {
            isRefreshing = false
          })
        } else {
          return new Promise(resolve => {
            requests.push(token => {
              config.headers['Authorization'] = token
              resolve(service(config))
            })
          })
        }
      } else if (code === 403) {
        router.push({ path: '/401' })
      } else {
        const errorMsg = error.response.data.message
        if (errorMsg !== undefined && !error.config.url.includes('auth/refresh')) {
          Notification.error({
            title: errorMsg,
            duration: 5000
          })
        }
      }
    } else {
      Notification.error({
        title: '接口请求失败',
        duration: 5000
      })
    }
    return Promise.reject(error)
  }
)
const request = service
export default request
