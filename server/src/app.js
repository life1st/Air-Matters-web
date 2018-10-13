const koa = require('koa')
const app = new koa()
const cors = require('@koa/cors')
const router = require('./router')
// CORS
app.use(cors({
  'Access-Control-Allow-Origin': 'air.life1st.me'
}))
// router
app
  .use(router.routes())
  .listen(3000, () => {
    console.log('app listen: 3000')
  })
