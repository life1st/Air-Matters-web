const cheerio = require('cheerio')
const axios = require('axios')

let { city } = require('../db/data')

async function getCity(ctx) {
  let parmas = ctx.query
  const BASE_URL = 'https://app.air-matters.com/place/'
  /*   `china/beijing/en/aqi_us/8733f5dd`*/
  /*   `${country}/${city}/${LANG}/${benchMark}/${link}*/
  let country = parmas.country
  let name = parmas.city
  let id = parmas.id
  let lang = parmas.lang || 'zh_Hans'
  let benchMark = parmas.benchmark || 'aqi_us'
  let place_URL =
    (country, city, LANG, benchMark, id) =>
      `${BASE_URL}${country}/${LANG}/${benchMark}/${id}`
  let getLevel = (color) => {
    switch (color) {
      case '#e02d1c':
        return 5
      case '#d9d726':
        return 4
      case '#31cd31':
        return 1
      default:
        return -1
    }
  }
  let url = place_URL(country, city, lang, benchMark, id)
  let res
  if (city && city[country]) {
    res = city[country]
  } else {
    res = await axios.get(url)
      .then(res => {
        let data = res.data
        const $ = cheerio.load(data)
        let result = {
          city: $('#nameBox').find('h2').text(),
          country: $('#nameBox').find('p').text(),
        }
        let chartBox = $('#chartBox')
        let aqi = {
          title: chartBox.find('.title').text(),
          value: chartBox.find('.indexValue').text(),
          min: chartBox.find('.minValue').text(),
          max: chartBox.find('.maxValue').text(),
          standards: chartBox.find('.level').text()
        }
        let pollutantBox = $('#pollutantBox')
        let pollutant = {
          title: pollutantBox.find('h3').text(),
        }
        pollutantBox.find('.pollutantItem').each((i, ele) => {
          let e = $(ele)
          let name = e.find('.name').text()
          pollutant[name] = {
            name,
            level: e.find('.level').text(),
            unit: e.find('.unit').text(),
            value: e.find('.value').text(),
          }
        })
        let healthAdviceBox = $('#healthAdviceBox')
        let healthAdvice = {
          title: healthAdviceBox.find('h3').text()
        }
        healthAdviceBox.find('.item').each((i, ele) => {
          let e = $(ele)
          let name = e.find('.title').text()
          healthAdvice[name] = {
            text: e.find('.content').text(),
            level: getLevel(e.find('.bg').css('background'))
          }
        })
        let weatherForecastBox = $('#weatherForecastBox')
        let weatherForecast = {
          title: weatherForecastBox.find('h3').text(),
          hourly: [],
          daily: []
        }
        let getWeatherIcon = (url) => {
          const BASE_URL = 'https://app.air-matters.com'
          let len = url.length
          let path = url.slice(4, len - 1)
          return `${BASE_URL}/${path}`
        }
        let getWeatherTemp = (str) => {
          let arr = str.split('℃')
          arr.pop()
          return arr
        }
        weatherForecastBox.find('.hourlyForecastItem').each((i, ele) => {
          let e = $(ele)
          weatherForecast.hourly.push({
            time: e.find('.time').text(),
            icon: getWeatherIcon(e.find('.icon').css('background-image')),
            temp: getWeatherTemp(e.find('.temp').text())
          })
        })
        weatherForecastBox.find('.dailyForecastItem').each((i, ele) => {
          let e = $(ele)
          weatherForecast.daily.push({
            data: [
              e.find('.local').text(),
              e.find('.raw').text()
            ],
            wind: e.find('.wind').text(),
            icon: getWeatherIcon(e.find('.icon').css('background-image')),
            temp: getWeatherTemp(e.find('.temp').text())
          })
        })
        return {
          ...result, aqi, pollutant, healthAdvice, weatherForecast
        }
      })
    city = {}
    city[name] = res
  }
  ctx.status = 200
  ctx.body = res
}

module.exports = getCity

async function getRanking(ctx) {
  let BASE_URL = 'https://air-quality.com/data/get_ranking'
  let parmas = ctx.query
  let standard = parmas.standards | 'aqi_us'
  let order = parmas.order | 'worst'
  let lang = parmas.lang | 'zh-Hans'
  let url = `${BASE_URL}?standard=${standard}&order=${order}&lang=${lang}`
  const dataKey = 'ranking'
  let res = await _.getData(url, dataKey, data)
  ctx.status = 200
  ctx.body = res.data
}