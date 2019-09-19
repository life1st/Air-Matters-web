import {GET_WITH_TOKEN} from './base'
import {
  STANDARD_URL,
  PLACES_URL,
  PLACE_SEARCH_URL
} from './consts'

const PATH_PREFIX = '/forward'

class API_BUILDER {
  constructor() {
  }

  standard(lang = 'cn') {
    return GET_WITH_TOKEN(PATH_PREFIX + STANDARD_URL, null, {lang})
  }

  places(place_id, lang = 'cn') {
    return GET_WITH_TOKEN(PATH_PREFIX + PLACES_URL, null, {place_id, lang})
  }

  search(content, lang = 'cn') {
    if (!content) {
      return Promise.reject({msg: 'miss content params.'})
    }
    return GET_WITH_TOKEN(PATH_PREFIX + PLACE_SEARCH_URL, null, {content, lang})
  }
}

export default new API_BUILDER()
