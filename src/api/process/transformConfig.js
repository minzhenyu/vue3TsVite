import request from '@/utils/request'

export function getById(id) {
  return request({
    url: 'api/transformConfig/' + id,
    method: 'get'
  })
}

export function delById(id) {
  return request({
    url: 'api/transformConfig/' + id,
    method: 'delete'
  })
}

export function add(data) {
  return request({
    url: 'api/transformConfig',
    method: 'post',
    data
  })
}

export function del(ids) {
  return request({
    url: 'api/transformConfig',
    method: 'delete',
    data: ids
  })
}

export function edit(data) {
  return request({
    url: 'api/transformConfig',
    method: 'put',
    data
  })
}

export function getConfigs(transformName) {
  return request({
    url: 'api/transformConfig/configs/' + transformName,
    method: 'get'
  })
}

export function getAllConfigs() {
  return request({
    url: 'api/transformConfig/configs',
    method: 'get'
  })
}

export function getTree() {
  return request({
    url: 'api/transformConfig/tree',
    method: 'get'
  })
}

export function getTreeDetails(orderby) {
  return request({
    url: 'api/transformConfig/treeDetail/' + orderby,
    method: 'get'
  })
}

export function download(data) {
  return request({
    url: 'api/transformConfig/download',
    method: 'post',
    responseType: 'blob',
    data
  })
}

export default { add, edit, del, getById, getAllConfigs, getConfigs, getTree, getTreeDetails, download }
