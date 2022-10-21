import request from '@/utils/request'

// 查询SwConfig列表
export function listSwConfig(query) {
  return request({
    url: '/api/v1/sw-config',
    method: 'get',
    params: query
  })
}

// 查询SwConfig详细
export function getSwConfig(id) {
  return request({
    url: '/api/v1/sw-config/' + id,
    method: 'get'
  })
}

// 新增SwConfig
export function addSwConfig(data) {
  return request({
    url: '/api/v1/sw-config',
    method: 'post',
    data: data
  })
}

// 修改SwConfig
export function updateSwConfig(data) {
  return request({
    url: '/api/v1/sw-config/' + data.id,
    method: 'put',
    data: data
  })
}

// 删除SwConfig
export function delSwConfig(data) {
  return request({
    url: '/api/v1/sw-config',
    method: 'delete',
    data: data
  })
}

