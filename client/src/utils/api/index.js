import {GET_WITH_TOKEN} from './base'
import {
  DEFAULT_TOKEN,
  STANDARD_URL,
  PLACES_URL,
  PLACE_SEARCH_URL
} from './consts'

class API_BUILDER {
  constructor() {

  }

  standard(lang = 'cn') {
    return GET_WITH_TOKEN(STANDARD_URL, DEFAULT_TOKEN, {lang})
  }

  places(place_id, lang = 'cn') {
    // if (!place_id) {
    //   return Promise.reject({msg: 'miss place'})
    // }
    return GET_WITH_TOKEN(PLACES_URL, DEFAULT_TOKEN, {place_id, lang})
  }

  search(content, lang = 'cn') {
    if (!content) {
      return Promise.reject({msg: 'miss content params.'})
    }
    return GET_WITH_TOKEN(PLACE_SEARCH_URL, DEFAULT_TOKEN, {content, lang})
  }
}

export default new API_BUILDER()