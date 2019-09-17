const router = require('koa-router')()

const ListRouter = require('./List')
const forwardRouter = require('./forward')
const { handleMapData} = require('../routerHandler/getMapData')
const {
  getAll, getCity, getHistory
} = require('../routerHandler')

router.use('/list', ListRouter.routes())
  .use('/forward', forwardRouter.routes())
  .get('/', ctx => {
    ctx.body = {ok: true, data: [{msg: 'welcome.'}]}
  })
  .get('/map', handleMapData)

module.exports = router