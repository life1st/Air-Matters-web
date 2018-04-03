const koa = require('koa')
const app = new koa()
const axios = require('axios')
const router = require('koa-router')()
const cors = require('@koa/cors')

// CORS
app.use(cors())

// router
router.get('/', getCitys)
  .get('/city/:placeId', getCity)
async function getCitys(ctx) {
  let url = 'https://air-matters.com/js/data/map_en_aqi_us.js'
  let res = await axios.get(url)
  ctx.status = 200
  ctx.type = 'html'
  ctx.body = res.data
}
async function getCity(ctx) {
  let id = ctx.params.placeId

  let url = 'https://app.air-matters.com/place/china/beijing/zh_cn/aqi_us/8733f5dd'
  ctx.status = 200
  ctx.body = id
}
app.use(router.routes())
console.log('app listen: 3000')
app.listen(3000)