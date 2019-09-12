const ENV_CURRENT = process.env.NODE_ENV
const ENV_DEV = 'development'
const ENV_PROD =  'production'
const ENV_TEST = 'test'

const ENV = {
  current: ENV_CURRENT,
  isDev: ENV_CURRENT === ENV_DEV,
  isProd: ENV_CURRENT === ENV_PROD,
  isTest: ENV_CURRENT === ENV_TEST
}

export default ENV
