function getAQI() {
  // let url = 'https://air-matters.com/js/data/map_en_aqi_us.js'
  let url = 'http://localhost:3000/'
  $.get(url).then(res => {
    console.log('getAQI:>>>', res)
  })
}

// let url = 'https://air-matters.com/js/data/map_en_aqi_us.js'
// let method = 'GET'
// let xhr = new XMLHttpRequest()
// xhr.open(method, url)
// xhr.send()
// xhr.onreadystatechange = function (response) {
//   console.log('xhr>>>', response)
// }

window.addEventListener('load', () => {
  getAQI()
})