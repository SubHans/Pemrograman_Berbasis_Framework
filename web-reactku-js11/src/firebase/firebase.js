import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAfytPgnaFmFIWPIeq7b6cDEDWqlQKwcEQ",
  authDomain: "js10-80956.firebaseapp.com",
  projectId: "js10-80956",
  storageBucket: "js10-80956.appspot.com",
  messagingSenderId: "173052286272",
  appId: "1:173052286272:web:96ae8cf13c05e6a83116a5",
  measurementId: "G-736341WCKV"
  };

export const myFirebase = firebase.initializeApp(firebaseConfig);
const baseDb = myFirebase.firestore();
export const db = baseDb;