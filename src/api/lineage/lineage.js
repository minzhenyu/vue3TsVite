import request from '@/utils/request'
import qs from 'qs'

export function queryType() {
  return request({
    url: 'api/lineage/queryType',
    method: 'get'
  })
}

export function searchDataSource(nodeType) {
  return request({
    url: 'api/lineage/searchDataSource' + '?' + 'nodeTypeName=' + nodeType,
    method: 'get'
  })
}

export function searchGraph(query) {
  return request({
    url: 'api/lineage/searchGraph' + '?' + qs.stringify(query, { indices: false }),
    method: 'get'
  })
}

export default { queryType, searchDataSource, searchGraph }
