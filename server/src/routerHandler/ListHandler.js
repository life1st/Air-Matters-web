const cheerio = require('cheerio')
const axios = require('axios')
const { saveFileFromInternet} = require('../../utils/saveFile2Local')
async function getCountryList(ctx) {
  const { lang: LANG = 'zh-Hans' } = ctx.query
  // const URL = `https://air-quality.com/places?lang=${LANG}`
  const URL = 'http://localhost:8000/country.html'

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

function getCityList(ctx) {
  ctx.body = `cityList`
}

module.exports = {
  getCountryList,
  getCityList
}