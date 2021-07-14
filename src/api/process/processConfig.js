import request from '@/utils/request'

export function getById(id) {
  return request({
    url: 'api/processConfig/' + id,
    method: 'get'
  })
}

export function delById(id) {
  return request({
    url: 'api/processConfig/' + id,
    method: 'delete'
  })
}

export function add(data) {
  return request({
    url: 'api/processConfig',
    method: 'post',
    data
  })
}

export function del(ids) {
  return request({
    url: 'api/processConfig',
    method: 'delete',
    data: ids
  })
}

export function edit(data) {
  return request({
    url: 'api/processConfig',
    method: 'put',
    data
  })
}

export default { add, edit, del, getById }
