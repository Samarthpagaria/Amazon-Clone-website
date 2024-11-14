// firebase.js
import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCH6iM8j4Mq-WlDSmLVNzZTQdtpGce1KhU",
  authDomain: "react--clone-b6b67.firebaseapp.com",
  projectId: "react--clone-b6b67",
  storageBucket: "react--clone-b6b67.appspot.com",
  messagingSenderId: "90773731553",
  appId: "1:90773731553:web:7dbfd51ce699ecf9931fa0",
  measurementId: "G-25KSVSLWRN",
};

// Initialize Firebase app
const firebaseApp = initializeApp(firebaseConfig);

// Initialize Firebase Auth and Firestore
const auth = getAuth(firebaseApp);
const db = getFirestore(firebaseApp);

export { auth, db, createUserWithEmailAndPassword };
