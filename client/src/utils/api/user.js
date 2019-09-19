import {GET, POST, PUT} from './base'
import {
  PLACES_COLLECTION,
  ADD_PLACE
} from './consts'

class API_USER {
  constructor() {

  }

  collection() {
    return GET(PLACES_COLLECTION)
  }
  sort(place_ids, password) {
    return PUT(PLACES_COLLECTION, {
      place_ids,
      password
    })
  }
  add(places, password) {
    // password like token.
    return POST(PLACES_COLLECTION + '/add', {
      places,
      password
    })
  }
  delete(place_ids, password) {
    return POST(PLACES_COLLECTION + '/delete', {
      place_ids,
      password
    })
  }
}

export default new API_USER()