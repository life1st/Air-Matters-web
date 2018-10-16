const router = require('koa-router')()

const ListRouter = require('./List')
const {
  getAll, getCity, getHistory
} = require('../routerHandler')

router.use('/list', ListRouter.routes())
  .get('/', ctx => {
    ctx.body = {
      ok: true,
      data: [
        {
          msg: 'welcome.'
        }
      ]
    }
  })

module.exports = router