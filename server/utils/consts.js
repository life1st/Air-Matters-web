const path = require('path')
const OFFICIAL_APIKEY = 'a*b6T#w26cGpuByT@nFaQwq'
const OFFICIAL_API_HOST = 'https://api.air-matters.com'
const OFFICIAL_API_GET_PATHS = {
  STANDARD: '/standard',
  PLACES: '/places',
  PLACE_SEARCH: '/place_search',
}
const OFFICIAL_API_POST_PATHS = {
  DETAIL: '/detail',
  RANK: '/rank',
  NEARBY: '/nearby',
  WEATHER: '/weather'
}

const STATIC_FOLDER = path.resolve(__dirname, './../../client/dist')
const USER_STORE_PATH = path.resolve(__dirname, './../src/db/user.json')


module.exports = {
  OFFICIAL_API_HOST,
  OFFICIAL_API_GET_PATHS,
  OFFICIAL_API_POST_PATHS,
  OFFICIAL_APIKEY,
  STATIC_FOLDER,
  USER_STORE_PATH
}