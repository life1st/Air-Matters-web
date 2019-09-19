const {argv} = process
const ENV = {
  isDev: argv[2] === 'DEV'
}

module.exports = {
  ENV
}