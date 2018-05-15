const axios = require('axios')

let { citys } = require('../db/data')

async function getAll(ctx) {
  let url = 'https://air-matters.com/js/data/map_en_aqi_us.js'
  let res
  if (citys) {
    console.log('cache data.')
    res = citys
  } else {
    console.log('new data.')
    res = await axios.get(url)
    citys = res
  }
  ctx.status = 200
  ctx.body = res.data
}

module.exports = getAll