import request from '@/utils/request'

export function getById(id) {
  return request({
    url: 'api/dataflowDirectory/' + id,
    method: 'get'
  })
}

export function delById(id) {
  return request({
    url: 'api/dataflowDirectory/' + id,
    method: 'delete'
  })
}

export function add(data) {
  return request({
    url: 'api/dataflowDirectory',
    method: 'post',
    data
  })
}

export function del(ids) {
  return request({
    url: 'api/dataflowDirectory',
    method: 'delete',
    data: ids
  })
}

export function edit(data) {
  return request({
    url: 'api/dataflowDirectory',
    method: 'put',
    data
  })
}

export function getAll() {
  return request({
    url: 'api/dataflowDirectory/all',
    method: 'get'
  })
}

export function getByProjectId(projectId) {
  return request({
    url: 'api/dataflowDirectory/selectByProjectId/' + projectId,
    method: 'get'
  })
}

export function updateName(id, name) {
  return request({
    url: 'api/dataflowDirectory/updateName/' + id,
    method: 'post',
    data: name
  })
}

export default { add, edit, del, getById, delById, getAll, getByProjectId, updateName }
