import request from '@/utils/request'

export function getActiveCode(data) {
  return request({
    url: 'api/activeCode',
    method: 'post',
    data
  })
}

export function doAct(data) {
  return request({
    url: 'api/license/doAct',
    method: 'post',
    data
  })
}

export function getActiveCodeInfo() {
  return request({
    url: 'api/license/getActiveCodeInfo',
    method: 'get'
  })
}

export default { getActiveCode, doAct, getActiveCodeInfo }
