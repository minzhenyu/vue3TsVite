import request from '@/utils/request'

export function getAllTransformInfos() {
  return request({
    url: 'api/pipeline/allTransformInfos',
    method: 'get'
  })
}

export function getTransformInfos() {
  return request({
    url: 'api/pipeline/transformInfos',
    method: 'get'
  })
}

export function getTransformConfigs() {
  return request({
    url: 'api/pipeline/transformConfigs',
    method: 'get'
  })
}

export function getPipelineConfigs() {
  return request({
    url: 'api/pipeline/pipelineConfigs',
    method: 'get'
  })
}

export function event(tagName, methodName, data) {
  return request({
    url: 'api/pipeline/' + tagName + '/' + methodName,
    method: 'post',
    data
  })
}

export function verify(data) {
  return request({
    url: 'api/pipeline/verify',
    method: 'post',
    data
  })
}

export function preview(data) {
  return request({
    url: 'api/pipeline/preview',
    method: 'post',
    data
  })
}

export function start(id) {
  return request({
    url: 'api/pipeline/start/' + id,
    method: 'get'
  })
}

export function starts(ids) {
  return request({
    url: 'api/pipeline/start',
    method: 'put',
    data: ids
  })
}

export function status(id) {
  return request({
    url: 'api/pipeline/status/' + id,
    method: 'get'
  })
}

export function log(id) {
  return request({
    url: 'api/pipeline/log/' + id,
    method: 'get'
  })
}

export function stop(id) {
  return request({
    url: 'api/pipeline/stop/' + id,
    method: 'get'
  })
}

export function stops(ids) {
  return request({
    url: 'api/pipeline/stop',
    method: 'put',
    data: ids
  })
}

export function pipelineCounters(id) {
  return request({
    url: 'api/pipeline/counters/' + id,
    method: 'get'
  })
}

export function pipelineErrorCounters(id) {
  return request({
    url: 'api/pipeline/errorCounters/' + id,
    method: 'get'
  })
}

export function transformCounters(id, transformId) {
  return request({
    url: 'api/pipeline/counters/' + id + '/' + transformId,
    method: 'get'
  })
}

export function transformInputCounters(id, transformId) {
  return request({
    url: 'api/pipeline/inputCounters/' + id + '/' + transformId,
    method: 'get'
  })
}

export function transformOutputCounters(id, transformId) {
  return request({
    url: 'api/pipeline/outputCounters/' + id + '/' + transformId,
    method: 'get'
  })
}

export function transformErrorCounters(id, transformId) {
  return request({
    url: 'api/pipeline/errorCounters/' + id + '/' + transformId,
    method: 'get'
  })
}

export function transformDurationDistributions(id, transformId) {
  return request({
    url: 'api/pipeline/durationDistributions/' + id + '/' + transformId,
    method: 'get'
  })
}

export function transformLatestDurationGauges(id, transformId) {
  return request({
    url: 'api/pipeline/latestDurationGauges/' + id + '/' + transformId,
    method: 'get'
  })
}

export function transformNumberDistributions(id, transformId) {
  return request({
    url: 'api/pipeline/numberDistributions/' + id + '/' + transformId,
    method: 'get'
  })
}

export function transformLatestNumberGauges(id, transformId) {
  return request({
    url: 'api/pipeline/latestNumberGauges/' + id + '/' + transformId,
    method: 'get'
  })
}

export function transformIncrementalCounters(id, transformId) {
  return request({
    url: 'api/pipeline/incrementalCounters/' + id + '/' + transformId,
    method: 'get'
  })
}

export function transformRuntimePreviewPairData(id, transformId) {
  return request({
    url: 'api/pipeline/runtimePreviewPairData/' + id + '/' + transformId,
    method: 'get'
  })
}

export default {
  getAllTransformInfos, getTransformInfos, getTransformConfigs, getPipelineConfigs,
  event, verify, preview, start, status, stop, starts, stops, log,
  pipelineCounters, pipelineErrorCounters, transformDurationDistributions, transformLatestDurationGauges,
  transformCounters, transformInputCounters, transformOutputCounters, transformErrorCounters,
  transformNumberDistributions, transformLatestNumberGauges, transformIncrementalCounters,
  transformRuntimePreviewPairData
}
