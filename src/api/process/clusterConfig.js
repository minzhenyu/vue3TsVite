import request from '@/utils/request'

export function getById(id) {
  return request({
    url: 'api/clusterConfig/' + id,
    method: 'get'
  })
}

export function delById(id) {
  return request({
    url: 'api/clusterConfig/' + id,
    method: 'delete'
  })
}

export function add(data) {
  return request({
    url: 'api/clusterConfig',
    method: 'post',
    data
  })
}

export function del(ids) {
  return request({
    url: 'api/clusterConfig',
    method: 'delete',
    data: ids
  })
}

export function edit(data) {
  return request({
    url: 'api/clusterConfig',
    method: 'put',
    data
  })
}

export function getConfigs() {
  return request({
    url: 'api/clusterConfig/configs',
    method: 'get'
  })
}

export function download(data) {
  return request({
    url: 'api/clusterConfig/download',
    method: 'post',
    responseType: 'blob',
    data
  })
}

export default { add, edit, del, getById, getConfigs, download }
