import axios from 'axios'

let BASE_URL = 'http://api.life1st.cn/air'

export function getAllCitys() {
  let url = `${BASE_URL}/all`
  return axios.get(url).then(res => {
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
  return axios.get(url, {
    params: {
      id, city, country
    }
  }).then(res => {
    return new Promise(resolve => resolve(res.data))
  })
}