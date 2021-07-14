import request from '@/utils/request'

export function getById(id) {
  return request({
    url: 'api/pipelineConfig/' + id,
    method: 'get'
  })
}

export function delById(id) {
  return request({
    url: 'api/pipelineConfig/' + id,
    method: 'delete'
  })
}

export function add(data) {
  return request({
    url: 'api/pipelineConfig',
    method: 'post',
    data
  })
}

export function del(ids) {
  return request({
    url: 'api/pipelineConfig',
    method: 'delete',
    data: ids
  })
}

export function edit(data) {
  return request({
    url: 'api/pipelineConfig',
    method: 'put',
    data
  })
}

export function getConfigs() {
  return request({
    url: 'api/pipelineConfig/configs',
    method: 'get'
  })
}

export function getTree() {
  return request({
    url: 'api/pipelineConfig/tree',
    method: 'get'
  })
}

export function download(data) {
  return request({
    url: 'api/pipelineConfig/download',
    method: 'post',
    responseType: 'blob',
    data
  })
}

export default { add, edit, del, getById, getConfigs, getTree, download }
