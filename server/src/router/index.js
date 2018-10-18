const router = require('koa-router')()

const ListRouter = require('./List')
const { handleMapData} = require('../routerHandler/getMapData')
const {
  getAll, getCity, getHistory
} = require('../routerHandler')

router.use('/list', ListRouter.routes())
  .get('/', ctx => {
    ctx.body = {ok: true, data: [{msg: 'welcome.'}]}
  })
  .get('/map', handleMapData)

module.exports = router