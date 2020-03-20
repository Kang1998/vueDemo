import request from './request'

export default function getMultiData() {
  return request({
    url: '/home/multidata'
  })
}