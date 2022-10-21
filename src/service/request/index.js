import axios from 'axios'
import { TIMEOUT, BASE_URL } from './config'
class MoonRequest {
  constructor(baseURL, timeout) {
    this.instance = axios.create({
      baseURL,
      timeout,
    })
    this.instance.interceptors.response.use(
      res => {
        return res.data
      },
      err => {
        return err
      }
    )
    this.instance.interceptors.request.use(
      config => {
        return config
      },
      err => {
        return err
      }
    )
  }
  request(config) {
    return this.instance.request(config)
  }
  get(config) {
    return this.request({ ...config, method: 'get' })
  }
  post(config) {
    return this.request({ ...config, method: 'post' })
  }
  put(config) {
    return this.request({ ...config, method: 'put' })
  }
  delete(config) {
    return this.request({ ...config, method: 'delete' })
  }
}

export default new MoonRequest(BASE_URL, TIMEOUT)
