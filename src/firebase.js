import firebase from 'firebase'


 // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  var firebaseConfig = {
    apiKey: "AIzaSyCj-3ZBxdVeT_slRXj_Ll0kRQui5HnmbSI",
    authDomain: "addachat-70e73.firebaseapp.com",
    projectId: "addachat-70e73",
    storageBucket: "addachat-70e73.appspot.com",
    messagingSenderId: "1027782086008",
    appId: "1:1027782086008:web:030ce73747e93cf8e00c8d",
    measurementId: "G-N2Q16VZGL8"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();
  const db = firebase.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();
  const storage = firebase.storage();

  export { auth, provider, storage };
  export default db;
