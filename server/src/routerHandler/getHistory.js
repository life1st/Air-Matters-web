const axios = require('axios')

let { history } = require('../db/data')

async function getHistory(ctx) {
  let url = `https://air-quality.com/data/get_history_data`
  let parmas = ctx.query
  let obj = {
    place_id: parmas.place_id || '8733f5dd', // PKing
    kind: parmas.kind || 'aqi',
    standard: parmas.standard || 'aqi_us',
    interval: parmas.interval || 'hourly',
    lang: parmas.lang || 'zh-Hans'
  }

  let res = null
  if (history && history[obj.place_id]) {
    res = history[obj.place_id]
  } else {
    res = await axios.post(url, {
      ...obj
    }).then(res => {
      return res.data
    })
    history[obj.place_id] = res
  }
  ctx.status = 200
  ctx.body = res
}

module.exports = getHistory