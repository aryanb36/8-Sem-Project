import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyC0lg3ri5mhBKBhJs0OBIkU7mJiqFCa924",
    authDomain: "messenger-webapp.firebaseapp.com",
    projectId: "messenger-webapp",
    storageBucket: "messenger-webapp.appspot.com",
    messagingSenderId: "180510637007",
    appId: "1:180510637007:web:db6a310b12faaadce630ba",
    measurementId: "G-5CV0Z5807N"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();
  
  export { auth, provider };
  export default db;