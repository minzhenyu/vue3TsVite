import request from '@/utils/request'

export function getById(workspaceId) {
  return request({
    url: 'api/workspacesPipelineConfigs/' + workspaceId,
    method: 'get'
  })
}

export function edit(workspaceId, pipelineConfigIds) {
  return request({
    url: 'api/workspacesPipelineConfigs/' + workspaceId + '/' + pipelineConfigIds,
    method: 'put'
  })
}

export default { getById, edit }
