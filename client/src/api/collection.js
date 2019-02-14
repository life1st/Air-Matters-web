// TODO fake data
import country from './data/country'
import city from  './data/city'
// import locality from './data/locality'
export function _getCountryList() {
  return new Promise(resolve => resolve({
    // 模拟 axios 返回数据格式
    data: {
      ok: true,
      data: country
    }
  }))
}

// // todo fake data
// this is not common to use, change to getPlaceData
// export function getCityList() {
//   return new Promise(resolve => resolve({
//     data: {
//       ok: true,
//       data: city
//     }
//   }))
// }

export function getPlaceData(placeId) {
  const placeMap = {
    'ce4c01d6': city, // China
    // '4e4d63c9': locality // Shanghai
  }
  return new Promise(resolve => {
    if (placeMap[placeId]) {
      resolve({data: {ok: true, data: placeMap[placeId]}})
    } else {
      resolve({data: {ok: true, data: country}})
    }
  })
}