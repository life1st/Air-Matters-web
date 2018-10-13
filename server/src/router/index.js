const router = require('koa-router')()

const ListRouter = require('./List')
const {
  getAll, getCity, getHistory
} = require('../routerHandler')

router.use('/list', ListRouter.routes())

module.exports = router