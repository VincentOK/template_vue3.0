import axios from 'axios'
import {getCookieName} from "@/plugins/auth.js"
import { Toast,Dialog } from 'vant';
const service = axios.create({
  // baseURL: process.env.VUE_APP_BASE_API, // url = base url + request url
  // withCredentials: true, // send cookies when cross-domain requests
  timeout: 10000
})

// request interceptor
service.interceptors.request.use(
  config => {
    console.log(getCookieName('token'));
    config.headers['Content-Type'] = 'application/x-www-form-urlencoded' // 设置请求头
    if (getCookieName('token')) {
      config.headers['Authorization'] ='Bearer '+getCookieName('token');
    }
    return config
  },
  error => {
    return Promise.reject(error)
  }
)

service.interceptors.response.use(
  response => {
    const res = response.data
    if ((res.code && res.code != '200') || (res.status && res.status != '200')) {

      if (res.code == '403' || res.code == '500') {
        // to re-login
        Dialog.confirm({
          title: '提示',
          message: 'token失效，是否重新登陆！',
        })
          .then(() => {
            // on confirm
            console.log("确认")
          })
          .catch(() => {
            // on cancel
            console.log("取消")
          });
      }else{
        Toast.fail('请求失败！');
      }
      return Promise.reject(new Error(res.message || 'Error'))
    }else {
      return res
    }
  },
  error => {// for debug
    Toast.fail('请求失败！');
    return Promise.reject(error)
  }
)

export default service
