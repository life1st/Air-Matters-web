const router = require('koa-router')()
const fs = require('fs')
const path = require('path')

const filePath = path.join(path.resolve(), '/src/db/user.json')
const readCollection = () => new Promise((resolve, reject) => {
  fs.readFile(filePath, 'utf8',(err, data) => {
    if (err) {reject(err)}

    resolve(JSON.parse(data))
  })
})
const writeCollection = (data) => new Promise((resolve, reject) => {
  fs.writeFile(filePath, JSON.stringify(data), {encoding: 'utf8'}, (err) => {
    if (err) {reject(err)}

    resolve(data)
  })
})

const routes = router
  .get('/collction', async (ctx) => {
    
    let file
    try {
      file = await readCollection()
    } catch (e) {
      console.error(e)
    }
    
    ctx.body = file
  })
  .post('/add_place', async (ctx) => {
    const {request} = ctx
    const {body} = request
    const {places} = body
    let storedPlaces = await readCollection()

    const res = await writeCollection({
      places: [
        ...storedPlaces.places,
        ...places
      ]
    })

    ctx.body = {ok: true, places: res.places}
  })
  .put('/collction', async (ctx) => {
    const {request} = ctx
    const {body} = request
    const {place_ids, password} = body
    const {places} = await readCollection()
    const data = place_ids.map(id => places.find(place => place.place_id === id))
    const res = await writeCollection({
      places: data
    })

    ctx.body = {ok: true, places: res.places}
  })

  module.exports = routes