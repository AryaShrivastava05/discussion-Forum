import firebase from "firebase";
const firebaseConfig = {
  apiKey: "AIzaSyC8L2vkvs5sUqht_rnDgYaJlfoda1Y6L6Y",
  authDomain: "forum-41667.firebaseapp.com",
  projectId: "forum-41667",
  storageBucket: "forum-41667.appspot.com",
  messagingSenderId: "991239159479",
  appId: "1:991239159479:web:3a94a9da4d50374fae5732",
  measurementId: "G-R2NT5CDP6Q"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const db = firebaseApp.firestore();

export { auth, provider };
export default db;
