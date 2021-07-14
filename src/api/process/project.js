import request from '@/utils/request'

export function getById(id) {
  return request({
    url: 'api/project/' + id,
    method: 'get'
  })
}

export function delById(id) {
  return request({
    url: 'api/project/' + id,
    method: 'delete'
  })
}

export function add(data) {
  return request({
    url: 'api/project',
    method: 'post',
    data
  })
}

export function del(ids) {
  return request({
    url: 'api/project',
    method: 'delete',
    data: ids
  })
}

export function edit(data) {
  return request({
    url: 'api/project',
    method: 'put',
    data
  })
}

// 通过工作空间ID查询
export function getByWorkspaceId(workspaceId) {
  return request({
    url: 'api/project/select/' + workspaceId,
    method: 'get'
  })
}

export default { add, edit, del, getById, getByWorkspaceId }
