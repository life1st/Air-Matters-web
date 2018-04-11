import axios from 'axios'

let BASE_URL = 'http://api.life1st.cn/air'

export function getAllCity() {
  let url = `${BASE_URL}/all`
  return axios.get(url).then(res => {
    return new Promise(resolve => resolve(res.data))
  })
}