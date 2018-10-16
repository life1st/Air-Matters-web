const fs = require('fs')
const http = require('https')

function saveFile(originPath, name) {
  return new Promise((resolve, reject) => {
    fs.readFile(originPath, (err, data) => {
      if (err) reject({err, on: 'readFile'})
      fs.writeFile(name, data, err => {
        if (err) reject({err, on: 'writeFile'})
        resolve()
      })
    })
  })
}

function saveFileFromInternet(path, name) {
  return new Promise((resolve, reject) => {
    http.get(path, res => {
      if (!res) reject({on: 'network'})

      let file = ''
      res.setEncoding('binary')
      res.on('data', data => {
        file += data
      }).on('end', () => {
        fs.writeFile(name, file, 'binary' , err => {
          if (err) reject({on: 'writeFile', err})
          resolve()
        })
      })
    })
  })
}

// saveFileFromInternet('https://air-quality.com/css/images/flags/country/china.png', 'china.png').then(() => {
//   console.log('success')
// }).catch(err => {
//   console.log(err)
// })
function sleep(time = 1000) {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve()
    }, time)
  })
}

// Object.keys(data).forEach(land => {
//   data[land].forEach(country => {
//     let path = country.bgImg
//     let fileName = path.slice(path.lastIndexOf('/') + 1)
//     saveFileFromInternet(path, fileName).then(() => {
//       console.log('success', fileName)
//     })
//     sleep()
//   })
// })

module.exports = {
  saveFileFromInternet
}