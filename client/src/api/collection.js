// TODO fake data
import country from './data/country'
export function getCountryList() {
  return new Promise(resolve => resolve({
    // 模拟 axios 返回数据格式
    data: {
      ok: true,
      data: country
    }
  }))
}

// todo fake data
import city from  './data/city'
export function getCityList() {
  return new Promise(resolve => resolve({
    data: {
      ok: true,
      data: city
    }
  }))
}