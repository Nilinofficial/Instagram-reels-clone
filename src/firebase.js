
import firebase from 'firebase'


// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDmeEFiz7c-0HjADsy0aq0AayrlPp8h_OU",
    authDomain: "reels-clone-4821f.firebaseapp.com",
    projectId: "reels-clone-4821f",
    storageBucket: "reels-clone-4821f.appspot.com",
    messagingSenderId: "222875990385",
    appId: "1:222875990385:web:79f43375f5cc0a81369ed0",
    measurementId: "G-BD3YB302SE"
  };

  const firebaseApp = firebase.initializeApp
  (firebaseConfig);
  const db = firebaseApp.firestore();

  export default db;