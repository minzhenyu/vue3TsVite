import request from '@/utils/request'

export function getAll(id) {
  return request({
    url: 'api/workspace/all',
    method: 'get'
  })
}

export function getById(id) {
  return request({
    url: 'api/workspace/' + id,
    method: 'get'
  })
}

export function delById(id) {
  return request({
    url: 'api/workspace/' + id,
    method: 'delete'
  })
}

export function add(data) {
  return request({
    url: 'api/workspace',
    method: 'post',
    data
  })
}

export function del(ids) {
  return request({
    url: 'api/workspace',
    method: 'delete',
    data: ids
  })
}

export function edit(data) {
  return request({
    url: 'api/workspace',
    method: 'put',
    data
  })
}

// 当前用户工作空间列表
export function currentUserWorkspaces() {
  return request({
    url: 'api/workspace/currentUserWorkspaces',
    method: 'get'
  })
}
// 获取当前工作空间
export function currentWorkspace() {
  return request({
    url: 'api/workspace/currentWorkspace',
    method: 'get'
  })
}
// 切换用户工作空间
export function switchWorkspace(workspaceId) {
  return request({
    url: 'api/workspace/switchWorkspace/' + workspaceId,
    method: 'get'
  })
}

export default { add, edit, del, getById, getAll, currentUserWorkspaces, switchWorkspace, currentWorkspace }
