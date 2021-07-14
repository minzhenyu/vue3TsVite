import request from '@/utils/request'

export function getById(id) {
  return request({
    url: 'api/dataflow/' + id,
    method: 'get'
  })
}

export function delById(id) {
  return request({
    url: 'api/dataflow/' + id,
    method: 'delete'
  })
}

export function add(data) {
  return request({
    url: 'api/dataflow',
    method: 'post',
    data
  })
}

export function del(ids) {
  return request({
    url: 'api/dataflow',
    method: 'delete',
    data: ids
  })
}

export function edit(data) {
  return request({
    url: 'api/dataflow',
    method: 'put',
    data
  })
}

export function updateXmlAndRemarkAndRunnerType(data) {
  return request({
    url: 'api/dataflow/updateXmlAndRemarkAndRunnerType',
    method: 'put',
    data
  })
}

export function getAll() {
  return request({
    url: 'api/dataflow/all',
    method: 'get'
  })
}

export function getByDirectoryId(directoryId) {
  return request({
    url: 'api/dataflow/selectByDirectoryId/' + directoryId,
    method: 'get'
  })
}

export function updateStatus(id, status) {
  return request({
    url: 'api/dataflow/updateStatus/' + id + '/' + status,
    method: 'get'
  })
}

export function updateName(id, name) {
  return request({
    url: 'api/dataflow/updateName/' + id,
    method: 'post',
    data: name
  })
}

export function moveDir(id, directoryId) {
  return request({
    url: 'api/dataflow/moveDir/' + id + '/' + directoryId,
    method: 'get'
  })
}

export function lock(id) {
  return request({
    url: 'api/dataflow/lock/' + id,
    method: 'get'
  })
}

export function unlock(id) {
  return request({
    url: 'api/dataflow/unlock/' + id,
    method: 'get'
  })
}

export function isAllowEdit(id) {
  return request({
    url: 'api/dataflow/isAllowEdit/' + id,
    method: 'get'
  })
}

export function getTree(projectId) {
  return request({
    url: 'api/dataflow/tree/' + projectId,
    method: 'get'
  })
}

export function download(ids) {
  return request({
    url: 'api/dataflow/download',
    method: 'post',
    data: ids,
    responseType: 'blob'
  })
}

export function revert(logId) {
  return request({
    url: 'api/dataflow/revert/' + logId,
    method: 'get'
  })
}

export function copy(id) {
  return request({
    url: 'api/dataflow/copy/' + id,
    method: 'get'
  })
}

// 内容比对

export function getContrastContent(logId) {
  return request({
    url: 'api/dataflow/contrast/' + logId,
    method: 'get'
  })
}

export default {
  add, edit, del, getById, delById, getAll, lock, unlock, isAllowEdit,
  getByDirectoryId, updateStatus, updateName, moveDir, getTree, download, revert, copy,
  updateXmlAndRemarkAndRunnerType,
  getContrastContent
}
