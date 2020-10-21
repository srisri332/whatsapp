import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyA2UmN-wXWaUZQUKL6TUfcfiSMXedPCua4",
  authDomain: "whatsapp-clone-1de44.firebaseapp.com",
  databaseURL: "https://whatsapp-clone-1de44.firebaseio.com",
  projectId: "whatsapp-clone-1de44",
  storageBucket: "whatsapp-clone-1de44.appspot.com",
  messagingSenderId: "130932360076",
  appId: "1:130932360076:web:5d8aa435f02dbf13c9cca9",
  measurementId: "G-8DE2MJY2LK",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
