import axios from 'axios'

let BASE_URL = 'http://api.life1st.cn/air'
// let BASE_URL = 'http://192.168.0.112:3000'
// let BASE_URL = 'http://localhost:3000'

export function getAllCitys() {
  let url = `${BASE_URL}/all`
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
  let url = `${BASE_URL}/city`
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

export function getLocation() {
  const BASE_URL = 'http://ip-api.com/json'
  let url = `${BASE_URL}?${API_KEY}`
  return axios.get(url).then(res => {
    return new Promise(resolve => resolve(res.data))
  })
}