const cheerio = require('cheerio')
const axios = require('axios')

async function getCountryList(ctx) {
  const { lang: LANG = 'zh-Hans' } = ctx.query
  // const URL = `https://air-quality.com/places?lang=${LANG}`
  const URL = 'http://192.168.1.191:8000/country.html'

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
        let href = country.attr('href')
        let name = country.find('.country-name').text()
        console.log(land[landName])
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

function getCityList(ctx) {
  ctx.body = `cityList`
}

module.exports = {
  getCountryList,
  getCityList
}