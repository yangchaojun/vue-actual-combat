import axios from 'axios'
import { baseURL } from '@/config/index'
import { spawn } from 'child_process'

class HttpRequest {
  constructor(baseUrl = baseURL) {
    this.baseUrl = baseUrl
    this.queue = {}
  }

  interceptors(instance, url) {
    instance.interceptors.request.use(config => {
      // 可以添加全局Loading效果
      // iView组件中 Spin.show()
      if (!(this.queue.keys().length > 0)) { // 若果当前还有请求，不显示全局Loading
        // Span.show()
      }
      this.queue[url] = true;
    }, error => {
      return Promise.reject(error)
    })

    instance.interceptors.response.use(res => {
      delete this.queue[url]
      console.log(res);
      return res
    }, error => {
      delete this.queue[url]
      return Promise.reject(error)
    })
  }

  getInsideConfig() {
    const config = {
      baseUrl: this.baseUrl,
      headers: {
        //
      }
    }
    return config
  }
  request(options) {
    const instance = axios.create()
    options = Object.assign(this.getInsideConfig, options)
    this.interceptors(instance, options.url)
    return instance(options)
  }
}

export default HttpRequest
