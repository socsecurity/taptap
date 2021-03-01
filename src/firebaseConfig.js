import firebase from 'firebase'
var firebaseConfig = {
    apiKey: "AIzaSyA2hKYznp8dIcrtsvNdFKYAnpWjpjK9rpo",
    authDomain: "taptap-cfc28.firebaseapp.com",
    projectId: "taptap-cfc28",
    storageBucket: "taptap-cfc28.appspot.com",
    messagingSenderId: "930957923273",
    appId: "1:930957923273:web:0a8f4824ea552d8c850e18",
    measurementId: "G-HK1V2MCPVX"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  export const auth = firebase.auth
  export const db = firebase.database()
