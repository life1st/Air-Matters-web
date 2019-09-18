const router = require('koa-router')()
const fs = require('fs')
const {USER_STORE_PATH} = require('../../utils/consts')

const readCollection = () => new Promise((resolve, reject) => {
  fs.readFile(USER_STORE_PATH, 'utf8',(err, data) => {
    if (err) {reject(err)}

    resolve(JSON.parse(data))
  })
})
const writeCollection = (data) => new Promise((resolve, reject) => {
  fs.writeFile(USER_STORE_PATH, JSON.stringify(data), {encoding: 'utf8'}, (err) => {
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
  .put('/collction', async (ctx) => {
    const {place_ids, password} = ctx.request.body

    const {places} = await readCollection()
    const data = place_ids.map(id => places.find(place => place.place_id === id))
    const res = await writeCollection({
      places: data
    })

    ctx.body = {ok: true, places: res.places}
  })
  .post('/collction/delete', async (ctx) => {

  })
  .post('/place', async (ctx) => {
    const {places} = ctx.request.body

    let storedPlaces = await readCollection()

    const res = await writeCollection({
      places: [
        ...storedPlaces.places,
        ...places
      ]
    })

    ctx.body = {ok: true, places: res.places}
  })
  .delete('/place/:place_id', async (ctx) => {
    
  })

  module.exports = routes