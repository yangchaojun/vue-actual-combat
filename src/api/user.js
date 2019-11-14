import axios from './index'

export const getUserInfo = (data) => {
  return axios.request({
    url: '/api/getUserInfo',
    method: 'POST',
    data
  })
}
