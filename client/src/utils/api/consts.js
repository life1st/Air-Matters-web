export const TIME_OUT = 10000
// export const DEFAULT_TOKEN = '@NAIYwc6xXaVQRET'
export const DEFAULT_TOKEN = 'a*b6T#w26cGpuByT@nFaQwq'
export const API_BASE = 'https://api.air-matters.com'

// get
export const STANDARD_URL = '/standard'
export const PLACES_URL = '/places'
export const PLACE_SEARCH_URL = '/place_search'
// post
export const DETAIL_URL = '/detail'
export const RANK = '/rank'
export const NEARBY = '/nearby'
export const WEATHER = '/weather'

// types

export const PLACE_TYPES = {
  //虚拟的根节点
  continent: 'continent', //洲
  country: 'country', //国家
  LEVEL: 'administrative_area_level_X', //省\大区 (X 可为 1~5，逻辑上没有任何区别)
  locality: 'locality', //城市
  station: 'station' //监测站
}

export const AQI_STANDARD = {
  CN: 'aqi_cn',
  US: 'aqi_us',
  UK: 'daqi_uk',
  IN: 'naqi_in',
  NL: 'aqi_nl',
  EU: 'caqi_eu'
}

export const LANG = {
  ZH_S: 'zh-Hans', //简体中文
  ZH_T: 'zh-Hant', //繁体中文
  EN: 'en', //英语
  DE: 'de', //德语
  ES: 'es', //西班牙语
  FR: 'fr', //法语
  IT: 'it', //意大利语
  JA: 'ja', //日语
  KO: 'ko', //朝鲜语
  NL: 'nl', //荷兰语 
  RO: 'ro', //罗马尼亚语
  RU: 'ru', //俄语
}