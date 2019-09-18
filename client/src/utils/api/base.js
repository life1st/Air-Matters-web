// let BASE_HOST = process.env.VUE_APP_API_BASE
import axios from 'axios'
import {TIME_OUT, API_BASE, API_DEV_BASE} from './consts'
import ENV from '../env'

const BASE_HOST = ENV.isDev ? API_DEV_BASE : ''
// const BASE_HOST = ENV.isDev ? '' : API_BASE

/**
 * 
 * @param {*} URL 
 * @param {*} params 
 */
export function PUT(URL, params) {
  if (!URL.includes(BASE_HOST)) URL = BASE_HOST + URL
  return axios({
    method: 'put',
    url: URL,
    data: params,
    headers: {},
    timeout: TIME_OUT
  })  
}

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
export function GET(URL, data = {}) {
  if (!URL.includes(BASE_HOST)) URL = BASE_HOST + URL
  // warning !!!
  // return Promise.reject()
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
      Authorization: token
    },
    timeout: TIME_OUT
  })
}

/**
 *
 * @param URL {string}
 * @param token {string}
 * @param params {Object}
 * @returns {Promise}
 */
export function POST_WITH_TOKEN(URL, token, params) {
  if (!URL.includes(BASE_HOST)) URL = BASE_HOST + URL
  return GET(URL, {
    params,
    headers: {
      Authorization: token
    },
    timeout: TIME_OUT
  })
}
