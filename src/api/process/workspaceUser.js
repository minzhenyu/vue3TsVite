import request from '@/utils/request'

export function getWorkspaceUsers() {
  return request({
    url: 'api/roleUser/selectWorkspaceUsers',
    method: 'get'
  })
}

export function getWorkspaceUserResponses() {
  return request({
    url: 'api/roleUser/selectWorkspaceUserResponses',
    method: 'get'
  })
}

export function getManagerUsers() {
  return request({
    url: 'api/roleUser/selectManagerUsers',
    method: 'get'
  })
}

export function getOperatorUsers() {
  return request({
    url: 'api/roleUser/selectOperatorUsers',
    method: 'get'
  })
}

export function getDeveloperUsers() {
  return request({
    url: 'api/roleUser/selectDeveloperUsers',
    method: 'get'
  })
}

export function getOtherUsers() {
  return request({
    url: 'api/roleUser/selectOtherUsers',
    method: 'get'
  })
}

export default {
  getManagerUsers, getOperatorUsers, getDeveloperUsers, getOtherUsers,
  getWorkspaceUsers, getWorkspaceUserResponses
}
