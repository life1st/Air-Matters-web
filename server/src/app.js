const {ENV} = require('../utils/config')
const koa = require('koa')
const app = new koa()
const static = require('koa-static')
const cors = require('@koa/cors')
const bodyParser = require('koa-bodyparser')
const router = require('./router')
// CORS

const {STATIC_FOLDER} = require('../utils/consts')

console.log(STATIC_FOLDER)

// router
app
  .use(cors({
    'Access-Control-Allow-Origin': ctx => {
      const allowedDomains = [
        'air.life1st.me'
      ]
      const host = ctx.req.headers.host
      if (allowedDomains.some(domain => host.include(domain))) {
        return host
      } else {
        return null
      }
    }
  }))
  .use(static(STATIC_FOLDER))
  .use(bodyParser())
  .use(router.routes())

ENV.isDev && app.listen(3000, () => {console.log('dev mode. listen @ http://localhost:3000')})

module.exports = app.callback()