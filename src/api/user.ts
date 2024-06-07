import request from '@/api/request'

export const apiGetBooks = async () => {
  return request({
    url: '/books',
    method: 'get'
  })
}