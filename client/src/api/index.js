import axios from 'axios'

let BASE_URL = process.env.VUE_APP_API_BASE

export function getAllCitys() {
  let url = `${BASE_URL}/all`
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

export function getRanking() {
  let url = `${BASE_URL}/ranking`
  return axios.get(url).then(res => {
    console.log(res)
    return new Promise(resolve => resolve(res))
  })
}

export function getLocation() {
  // const BASE_URL = 'http://ip-api.com/json'
  const BASE_URL = 'http://apis.map.qq.com/ws/location/v1/ip'
  const API_KEY = 'CSIBZ-4LKWV-HNIPZ-UYVZG-BYG6O-PSBMP'
  let url = `${BASE_URL}?key=${API_KEY}`
  return axios.get(url).then(res => {
    return new Promise(resolve => resolve(res.data))
  })
}