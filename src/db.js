import firebase from 'firebase/app'
import 'firebase/firestore'


// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDKtji_p3_xF6JbsPZzUlwbG-HZc9O_4Rw",
    authDomain: "notebook-29edc.firebaseapp.com",
    projectId: "notebook-29edc",
    storageBucket: "notebook-29edc.appspot.com",
    messagingSenderId: "219976738515",
    appId: "1:219976738515:web:029cb740443dc63bf29626"
  }
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  const db = firebase.firestore()

  export default db
  