import request from '@/utils/request'

export function getHello() {
  return request({
    url: '/hello',
    method: 'get'
  })
}
