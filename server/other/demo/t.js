const koa = require('koa')
const app = new koa()
const axios = require('axios')
const router = require('koa-router')()
const cors = require('@koa/cors')
const fs = require('fs')

// CORS
app.use(cors())
// router
router.get('/all', getCitys)
  .get('/city', getCity)

function getCitys(ctx) {
  console.log('get Citys', ctx.request)
  fs.readFile('../data/fakeCitysData.json', (err, res) => {
    console.log(res)
    ctx.status = 200
    ctx.body = res
  })
}

async function getCity() {
  let res = await fs.readFile('../data/fakeCityData_beijing.json')
  ctx.status = 200
  ctx.body = res
}

app.listen(3000)