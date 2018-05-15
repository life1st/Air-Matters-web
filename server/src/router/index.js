const router = require('koa-router')()

const getCity = require('../modules/getCity')
const getAll = require('../modules/getAll')
const getHistory = require('../modules/getHistory')

router.get('/all', getAll)
  .get('/city', getCity)
  .get('/history', getHistory)

module.exports = router