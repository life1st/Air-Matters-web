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