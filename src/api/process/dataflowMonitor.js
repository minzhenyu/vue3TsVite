import request from '@/utils/request'

export function getById(id) {
  return request({
    url: 'api/dataflowMonitor/' + id,
    method: 'get'
  })
}

export function getStats() {
  return request({
    url: 'api/dataflowMonitor/stats',
    method: 'get'
  })
}

export default { getById, getStats }
