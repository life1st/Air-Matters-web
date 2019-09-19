const db = require('./fireStore')

const userRef =  db.collection('user')
const userCollection = userRef.doc('collection')

userCollection.set({
  place_id: 'place'
})

module.exports = {
  userRef, userCollection
}
