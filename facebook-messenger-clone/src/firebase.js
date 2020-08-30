import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyB72ocNKG-1XQ4M0LxuMTl03M1udXXjXDg",
    authDomain: "facebook-messenger-clone-33581.firebaseapp.com",
    databaseURL: "https://facebook-messenger-clone-33581.firebaseio.com",
    projectId: "facebook-messenger-clone-33581",
    storageBucket: "facebook-messenger-clone-33581.appspot.com",
    messagingSenderId: "818044960453",
    appId: "1:818044960453:web:7f6b6a4a1a8548e7ac3aac"
  });
  const db = firebaseApp.firestore();
  export default db;