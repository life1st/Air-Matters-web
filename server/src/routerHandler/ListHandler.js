const cheerio = require('cheerio')
const axios = require('axios')
const { saveFileFromInternet} = require('../../utils/saveFile2Local')
async function getCountryList(ctx) {
  const { lang: LANG = 'zh-Hans' } = ctx.query
  // const URL = `https://air-quality.com/places?lang=${LANG}`
  const URL = 'http://localhost:8000/land.html'

  let res = await axios.get(URL).then(({data}) => {
    if (!data ) return { ok: false}

    const $ = cheerio.load(data)
    let lands = {}
    $('.site-box').each(function() {
      const land = this
      let landName = $(land).find('.main-block-title').text()
      let countries = $(land).find('.main-block-content a')
      lands[landName] = []
      countries.each(function () {
        const country = $(this)
        let bgImg = country.css('background-image')
        bgImg = 'https://air-quality.com/' + bgImg.slice(4, bgImg.length - 1)

        let href = country.attr('href')
        let name = country.find('.country-name').text()
        lands[landName].push({
          bgImg, href, name
        })
      })
    })
    return { ok: true, lands}
  }).catch(err => {
    console.log(err, 'err')
    return err
    // ctx.body = JSON.stringify(err)
  })
  ctx.body = res
}

async function getCityList(ctx) {
  // const URL = 'https://air-quality.com/country/china/ce4c01d6?lang=zh-Hans&standard=aqi_us'
  const { countryId } = ctx.params
  const URL = 'http://localhost:8000/country.html'
  ctx.body = await axios.get(URL).then(({data}) => {
    if (!data) return {ok: false}

    let $ = cheerio.load(data)
    let cities = $('.main-block-content a')
    let country = []
    cities.each(function () {
      let city = $(this)
      let value = city.find('.value')
      country.push({
        api: value.text().replace(/[A-z]|\s/g, ''),
        color: value.css('background'),
        href: city.attr('href'),
        name: city.find('.title').text(),
      })
    })
    return {
      ok: true,
      data: country
    }
  })
}

async function getPlaceList(ctx) {
  const { placeId } = ctx.params
  const URL = ''

  ctx.body = await axios.get(URL).then(({data}) => {
    if (!data) return {ok: false}

    const $ = cheerio.load(data)

  })
}

module.exports = {
  getCountryList,
  getCityList
}