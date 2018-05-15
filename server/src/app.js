const koa = require('koa')
const app = new koa()
const cors = require('@koa/cors')
const router = require('./router/index')
// CORS
app.use(cors())
// router
app.use(router.routes())
console.log('app listen: 3000')
app.listen(3000)