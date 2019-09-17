import API from '../utils/api'
const KEYS = {
  FETCH_PLACES: 'places/fetch_places'
}

const places = {
  state: {
    places: {}, // cache current user visited places list. key is place_id
    currentPlaces: [], // Page Add current level places list.
    collectionPlaces: [], // user collcetion places
  },
  mutations: {
    [KEYS.FETCH_PLACES](state, {places, place_id}) {
      state.currentPlaces = places
      state.places = {
        ...state.places,
        [place_id]: places
      }
    }
  },
  actions: {
    fetchPlaces({commit}, place_id) {

      API.fetchPlaces(place_id).then((res) => {
        const {status, data} = res
        if (status === 200) {
          commit(KEYS.FETCH_PLACES, {
            places: data.places,
            place_id
          })
        } 
      })
      
    }
  },
  getters: {

  }
}



export default places
export const PLACES_MUTATION_KEYS = KEYS