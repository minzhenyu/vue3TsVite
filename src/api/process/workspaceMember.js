import request from '@/utils/request'

export function add(data) {
  return request({
    url: 'api/workspaceMember',
    method: 'post',
    data
  })
}

export function del(data) {
  return request({
    url: 'api/workspaceMember',
    method: 'delete',
    data
  })
}

export default { add, del }
