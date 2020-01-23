import Rebase from 're-base' // mirror state to FB
import firebase from 'firebase'

const firebaseApp = firebase.initializeApp({
  apiKey: 'AIzaSyAQQ1itXUGohVsjQP8zr7dp1iFdI8r6n-I',
  authDomain: 'catch-of-the-day-vinson.firebaseapp.com',
  databaseURL: 'https://catch-of-the-day-vinson.firebaseio.com'
})

const base = Rebase.createClass(firebaseApp.database())

// named export
export { firebaseApp }

// defaut export
export default base
