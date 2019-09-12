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
export function GET(URL, data = {}) {
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
 * @returns {Promise}
 */
export function POST_WITH_TOKEN(URL, token, params) {
  if (!URL.includes(BASE_HOST)) URL = BASE_HOST + URL
  return GET(URL, {
    params,
    headers: {
      supertoken: token
    },
    timeout: TIME_OUT
  })
}


export function standard() {
  return require('./data/standard.json')
}

export function place() {
  return require('./data/place.json')
}

