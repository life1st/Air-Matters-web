import axios from 'axios'

let BASE_HOST = process.env.VUE_APP_API_BASE

/**
 *
 * @param URL {string}
 * @param params {Object}
 * @returns {AxiosPromise}
 * @constructor
 */
export function POST(URL, params) {
  if (!URL.includes(BASE_HOST)) URL = BASE_HOST + URL
  return axios({
    method: 'post',
    url: URL,
    data: params,
    headers: {},
    timeout: TIME_OUT
  })
}

/**
 *
 * @param URL {string}
 * @param data {Object}
 * @returns {AxiosPromise<any>}
 * @constructor
 */
export function GET(URL, data) {
  if (!URL.includes(BASE_HOST)) URL = BASE_HOST + URL
  return axios.get(URL, {
    ...data
  })
}

/**
 *
 * @param URL {string}
 * @param token {string}
 * @param params {Object}
 * @returns {Promise}
 */
export function GET_WITH_TOKEN(URL, token, params) {
  if (!URL.includes(BASE_HOST)) URL = BASE_HOST + URL
  return GET(URL, {
    params,
    headers: {
      supertoken: token
    },
    timeout: TIME_OUT
  })
}

/**
 *
 * @param URL {string}
 * @param token {string}
 * @param params {Object}
 * @returns {AxiosPromise}
 * @constructor
 */
export function PUT_WITH_TOKEN(URL, token, params) {
  if (!URL.includes(BASE_HOST)) URL = BASE_HOST + URL
  return axios({
    method: 'put',
    url: URL,
    headers: {
      supertoken: token
    },
    data: params && params.data
  })
}

export function getAllCitys() {
  let url = `${BASE_HOST}/all`
  console.log(url)
  return axios.get(url).then(res => {
    console.log('res', res)
    return new Promise(resolve => resolve(res.data))
  })
}

/*
*  config: Object
*
* */
export function getCity(config) {
  let url = `${BASE_HOST}/city`
  let id = config.id
  let city = config.name
  let country = config.country
  let lang = 'zh_Hans'
  return axios.get(url, {
    params: {
      id, city, country, lang
    }
  }).then(res => {
    return new Promise(resolve => resolve(res.data))
  })
}

export function getRanking() {
  let url = `${BASE_HOST}/ranking`
  return axios.get(url)
}

export function getLocation() {
  // const BASE_HOST = 'http://ip-api.com/json'
  const BASE_HOST = 'http://apis.map.qq.com/ws/location/v1/ip'
  const API_KEY = 'CSIBZ-4LKWV-HNIPZ-UYVZG-BYG6O-PSBMP'
  let url = `${BASE_HOST}?key=${API_KEY}`
  return axios.get(url)
}

import mapData from './data/map'
export function getMapData() {
  return new Promise(resolve => resolve({
    data: mapData
  }))
}