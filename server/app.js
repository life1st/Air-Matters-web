const koa = require('koa')
const app = new koa()
const axios = require('axios')
const router = require('koa-router')()
const cors = require('@koa/cors')

let _ = require('./utils/index.js')
let formatData = require('./utils/formatData.js')
// CORS
app.use(cors())
// router
router.get('/all', getCitys)
  .get('/city', getCity)
  .get('/ranking', getRanking)
let city = null
let data = {}

const delay = 1000 * 60 * 60
setInterval(() => {
  city = null
  data = {}
}, delay)
async function getCitys(ctx) {
  let url = 'https://air-matters.com/js/data/map_en_aqi_us.js'
  const dataKey = 'citys'
  let res = await _.getData(url, dataKey, data)
  ctx.status = 200
  ctx.body = res.data
}
async function getCity(ctx) {
  let parmas = ctx.query
  const BASE_URL = 'https://app.air-matters.com/place/'
  /*   `china/beijing/en/aqi_us/8733f5dd`*/
  /*   `${country}/${city}/${LANG}/${benchMark}/${link}*/
  let country = parmas.country
  let name = parmas.city
  let id = parmas.id
  let lang = parmas.lang || 'zh_Hans'
  let benchMark = parmas.benchmark || 'aqi_us'
  let place_URL =
    (country, city, LANG, benchMark, id) =>
      `${BASE_URL}${country}/${LANG}/${benchMark}/${id}`
  let url = place_URL(country, city, lang, benchMark, id)

  const dataKey = country
  let res = formatData.cityData((await _.getData(url, dataKey, data)).data)
  ctx.status = 200
  ctx.body = res
}
async function getRanking(ctx) {
  let BASE_URL = 'https://air-quality.com/data/get_ranking'
  let parmas = ctx.query
  let standard = parmas.standards | 'aqi_us'
  let order = parmas.order | 'worst'
  let lang = parmas.lang | 'zh-Hans'
  let url = `${BASE_URL}?standard=${standard}&order=${order}&lang=${lang}`
  const dataKey = 'ranking'
  let res = await _.getData(url, dataKey, data)
  ctx.status = 200
  ctx.body = res.data
}
app.use(router.routes())
console.log('app listen: 3000')
app.listen(3000)