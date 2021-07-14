import request from '@/utils/request'

export function getById(workspaceId) {
  return request({
    url: 'api/workspacesTransformConfigs/' + workspaceId,
    method: 'get'
  })
}

export function edit(workspaceId, transformConfigIds) {
  return request({
    url: 'api/workspacesTransformConfigs/' + workspaceId + '/' + transformConfigIds,
    method: 'put'
  })
}

export default { getById, edit }
