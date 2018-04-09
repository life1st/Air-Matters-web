function getAQIList() {
  // let url = 'https://air-matters.com/js/data/map_en_aqi_us.js'
  let url = 'http://localhost:3000/all'
  return axios.get(url).then(res => {
    console.log('getAQI:>>>', res)
    // return new Promise(resolve => resolve(res))
    return res.data
  })
}
function getCityData(config) {
  let url = `http://localhost:3000/city`
  // return axios.get()
}

function renderlist(cityList) {
  let itemTpl = (name, id, key) =>
    `<li data-key="${key}" data-id="${id}" data-name="${name}">
        城市：${name}
       </li>
      `

  let tpl = ''
  cityList.forEach(city => {
    tpl += itemTpl(city.name, city.place_id, city.url_key)
  })
  let cityWrap = document.querySelector('.city-display')
  cityWrap.innerHTML = tpl
  return new Promise(resolve => resolve(true))
}
function addEvent() {
  let list = document.querySelector('.city-display')
  list.addEventListener('click', (event) => {
    console.log(event)
    let target = event.target
    let key = target.dataset.key
    let id = target.dataset.id
    let name = target.dataset.name
    console.log(key, id, name)
    /*temp------*/
    let BASE_URL = 'https://app.air-matters.com/place'
    let LANG = 'en'
    let benchMark = 'aqi_us'
    let url = `${BASE_URL}/${key}/${LANG}/${benchMark}/${id}`
    window.open(url)
  })

  let input = document.querySelector('.city-input')
  input.addEventListener('keyup',(event) =>{
    let cityList = window.cityList
    let value = input.value
    let newList = []
    cityList.forEach(city => {
      if (city.name.toLowerCase().indexOf(value) !== -1) {
        newList.push(city)
      }
    })
    console.log('chufale ')
    if (value === '') {
      renderlist(cityList)
    } else {
      renderlist(newList)
    }
  })
}
/*
* https://app.air-matters.com/place/china/beijing/en/aqi_us/8733f5dd
* */
window.addEventListener('load', () => {
  window.cityList = []
  getAQIList().then((cityList) => {
    window.cityList = cityList
    return renderlist(cityList)
  }).then(() => {
    addEvent()
  })
})


// let url = 'https://air-matters.com/js/data/map_en_aqi_us.js'
// let method = 'GET'
// let xhr = new XMLHttpRequest()
// xhr.open(method, url)
// xhr.send()
// xhr.onreadystatechange = function (response) {
//   console.log('xhr>>>', response)
// }