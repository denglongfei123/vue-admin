import axios from 'axios'
import Vue from 'vue'
import { Message } from 'element-ui'

let apiBaseUrl = '';
if (process.env.NODE_ENV === 'development') {
  apiBaseUrl = 'http://test-gamessystem.zxmn2018.com/api/'
} else if (process.env.NODE_ENV === 'production') {
  apiBaseUrl = 'https://gamessystem.zxmn2018.com/api/'
}

const ajax = axios.create({
  baseURL: apiBaseUrl,

  // `timeout` 指定请求超时的毫秒数(0 表示无超时时间)
  timeout: 30 * 1000,

  // `withCredentials` 表示跨域请求时是否需要使用凭证
  withCredentials: false, // 默认的
})

// 添加请求拦截器
ajax.interceptors.request.use(
  config => {
    // 在发送请求之前做些什么
    return config;
  },
  error => {
    // 对请求错误做些什么
    console.log(error);
    return Promise.reject(error);
  }
);

// 添加响应拦截器
ajax.interceptors.response.use(
  response => {
    // 对响应数据做点什么
    return response;
  },
  error => {
    // 对响应错误做点什么
    console.log(error)
    Message({
      message: error.message || 'Error',
      type: 'error',
      duration: 5 * 1000
    })
    return Promise.reject(error);
  }
);

export default {
  install(Vue) {
    Vue.prototype.$post = function (url, params, config) {
      return new Promise((resolve, reject) => {
        http({
          method: 'post',
          url: url,
          data: params,
          headers: {
            'Content-Type': 'application/json; charset=utf-8',

          },
          ...config
        })
          .then(
            (res) => {
              resolve(res);
            },
            (err) => {
              reject(err);
            }
          )
          .catch((error) => {
            reject(error);
          });
      });
    };

    Vue.prototype.$form = function (url, data) {
      return new Promise((resolve, reject) => {
        http({
          method: 'post',
          url: url,
          data: data,
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
          },
          transformRequest: [
            function (data) {
              let ret = "";
              for (let it in data) {
                ret +=
                  decodeURIComponent(it) +
                  "=" +
                  decodeURIComponent(data[it]) +
                  "&";
              }
              return ret;
            }
          ],
        })
          .then(
            res => {
              resolve(res);
            },
            err => {
              reject(err);
            }
          )
          .catch(error => {
            reject(error);
          });
      });
    };

    Vue.prototype.$get = function (url, data, config) {
      return new Promise((resolve, reject) => {
        http({
          method: 'get',
          url: url,
          params: {
            ...data
          },
          ...config

        })
          .then(
            res => {
              resolve(res);
            },
            err => {
              reject(err);
            }
          )
          .catch(error => {
            reject(error);
          });
      });
    };
  }
};