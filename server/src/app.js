const koa = require('koa')
const app = new koa()
const cors = require('@koa/cors')
const bodyParser = require('koa-bodyparser')
const router = require('./router')
// CORS

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
  .use(bodyParser())
  .use(router.routes())
  .listen(3000, () => {
    console.log('app listen: 3000')
  })
