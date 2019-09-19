const admin = require('firebase-admin');
let serviceAccount = require('./air-matters-web-72372945655b.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

let db = admin.firestore();

module.exports = db