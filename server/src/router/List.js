const router = require('koa-router')()
const {
  ListHandler
} = require('../routerHandler')

const routers = router
  .get('/', ctx => {
    ctx.body = `Lists`
  })
  .get('/country', ListHandler.getCountryList)
  .get('/city', ListHandler.getCityList)

module.exports = routers