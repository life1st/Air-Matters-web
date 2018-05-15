let citys = null
let city = null
let history = {}

const delay = 1000 * 60 * 60
setInterval(() => {
  citys = null
  city = null
  history = {}
}, delay)

module.exports = {
  city,
  citys,
  history
}