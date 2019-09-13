import store from 'store'

function set(key, val, config = {}) {
  const {force} = config 
  if (store.get(key) && !force) {
    console.error({err: 'still has data, if you really want, use set(key, val, {force: true}) to set. Another way, use merge(key, val) to merge two data'})
    return false
  } else {
    return store.set(key, val)
  }
}
function merge(key, val) {
  const stored = store.get(key)
  const valType = Object.prototype.toString.call(val)
  const storedType = Object.prototype.toString.call(stored)
  if (valType !== storedType) {
    console.error({msg: `stored data type is ${storedType}, but you provide ${valType}, FUCK YOU.`})
    return false
  }

  if (Array.isArray(stored)) {
    store.set(key, [...stored, ...val])
  } else if (stored instanceof Object) {
    store.set(key, {...stored, ...val})
  } else if (!stored) {
    store.set(key, val)
  }
}
function get(key) {
  return store.get(key)
}
function remove(key) {
  return store.remove(key)
}

const KEYS = {
  COLLECTION_PLACE_IDS: 'collection_place_ids',
  COLLECTION_PLACES: 'collectiono_places'
}
class CacheArray {
  
  constructor(key) {
    this.key = key
    if (!get(key)) {
      this.data = []
      set(key, this.data)
    } else {
      this.data = get(key)
    }
  }
  get() {
    return store.get(this.key)
  }
  push(val) {
    this.data.push(val)
    return store.set(this.key, this.data)
  }
  replace(val) {
    this.data = val
    return store.set(this.key, this.data)
  }
}



export default CacheArray
export {KEYS}