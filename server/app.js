const koa = require('koa')
const app = new koa()
const axios = require('axios')
const router = require('koa-router')()
const cors = require('@koa/cors')
const cheerio = require('cheerio')
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
  /*   `china/beijing/en/aqi_us/8733f5dd`*/
  /*   `${country}/${city}/${LANG}/${benchMark}/${link}*/
  let country = parmas.country
  let city = parmas.city
  let id = parmas.id
  let lang = parmas.lang || 'en'
  let benchMark = parmas.benchmark || 'aqi_us'
  let place_URL = (country, city, LANG, benchMark, id) => `${BASE_URL}${country}/${city}/${LANG}/${benchMark}/${id}`
  let url = place_URL(country, city, lang, benchMark, id)
  let res = await axios.get(url)
    .then(res => {
      let data = res.data
      const $ = cheerio.load(data)
      let result = {
        city: $('#nameBox').find('h2').text(),
        country: $('#nameBox').find('p').text(),
      }
      let chartBox = $('#chartBox')
      let aqi = {
        title: chartBox.find('.title').text(),
        value: chartBox.find('.indexValue').text(),
        min: chartBox.find('.minValue').text(),
        max: chartBox.find('.maxValue').text(),
        standards: chartBox.find('.level').text()
      }
      let pollutantBox = $('#pollutantBox')
      let pollutant = {
        title: pollutantBox.find('h3').text(),
      }
      pollutantBox.find('.pollutantItem').each((i, ele) => {

      })
      return {
        ...result,aqi
      }
    })
  console.log(url, res)
  ctx.status = 200
  ctx.body = res
}
app.use(router.routes())
console.log('app listen: 3000')
app.listen(3000)