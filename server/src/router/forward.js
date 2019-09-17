const router = require('koa-router')()
const axios = require('axios')

const {
  OFFICIAL_APIKEY,
  OFFICIAL_API_HOST,
  OFFICIAL_API_GET_PATHS: GET_PATHS,
  OFFICIAL_API_POST_PATHS: POST_PATHS
} = require('../../utils/consts')

const apiBase = axios.create({
  baseURL: OFFICIAL_API_HOST,
  headers: {
    Authorization: OFFICIAL_APIKEY
  }
})

const get = function(url) {
  return apiBase.get(url).then(res => {
    const {status, data}= res
    if (status === 200) {
      return Promise.resolve(data)
    } else {
      throw {msg: 'network error.', code: status}
    }
  }).catch(e => {
    return Promise.reject(e)
  })
}

let memoryCache = {}

setInterval(() => {
  memoryCache = {}
}, 1000 * 60 * 30);

const routes = router
  .get('*', async (ctx) => {
    const {request} = ctx
    let {url} = request

    url = url.replace('/forward', '')
    
    if (Object.keys(GET_PATHS)
    .some(key => url.includes(GET_PATHS[key]))) {
      if (memoryCache[url]) {
        console.log('get cache', Object.keys(memoryCache), memoryCache[url])
        ctx.body = memoryCache[url]
      } else {
        console.log('fetch new')
        ctx.body = await get(url).then(data => {
          memoryCache[url] = data
          return data
        })
      }
    } else {
      ctx.status = 404
      ctx.body = {msg: 'error'}
    }
  })
  .post('*', async (ctx) => {
    // todo
    const {request} = ctx
    let {url, body} = request
    url = url.replace('/forward', '')

    if (Object.keys(POST_PATHS)
    .some(key => url.includes(POST_PATHS[key]))) {
      console.log(url, body)
      ctx.body = {msg: 'fetch success. data err.'}
    } else {
      ctx.status = 404
      ctx.body = {msg: 'error'}
    }
  })

module.exports = routes