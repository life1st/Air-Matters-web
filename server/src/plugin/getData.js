const axios = require('axios')

async function getData(url, dataName, data) {
  let res = null
  if (data[dataName]) {
    console.log('cache data.')
    res = data[dataName]
  } else {
    console.log('new data.')
    res = await axios.get(url).then(res => {
      data[dataName] = res
      return new Promise(resolve => resolve(res))
    })
  }
  return res
}

module.exports = getData