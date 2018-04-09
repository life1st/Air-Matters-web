const koa = require('koa')
const app = new koa()
const axios = require('axios')
const router = require('koa-router')()
const cors = require('@koa/cors')

// CORS
app.use(cors())
// router
router.get('/all', getCitys)
  .get('/city', getCity)

async function getCitys(ctx) {
  let url = 'https://air-matters.com/js/data/map_en_aqi_us.js'
  let res = await axios.get(url)
  ctx.status = 200
  ctx.body = res.data
}
async function getCity(ctx) {
  let parmas = ctx.query
  const BASE_URL = 'https://app.air-matters.com/place/'
  /* + `china/beijing/en/aqi_us/8733f5dd`*/
  /*   `${country}/${city}/${LANG}/${benchMark}/${link}*/
  let country = parmas.country
  let city = parmas.city
  let link = parmas.link
  let lang = parmas.lang || 'en'
  let benchMark = parmas.benchmark || 'aqi_us'
  let place_URL = (country, city, LANG, benchMark, link) => `${BASE_URL}${country}/${city}/${LANG}/${benchMark}/${link}`

  let res = await axios.get(place_URL(country, city, lang, benchMark, link))
    .then(res => {
      let data = res.data
      return data
    })
  ctx.status = 200
  ctx.body = res
}
app.use(router.routes())
console.log('app listen: 3000')
app.listen(3000)