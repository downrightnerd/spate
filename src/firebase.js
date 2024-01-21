// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import {getFirestore} from 'firebase/firestore'
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAn4qCc5kVa3q2u7TlUrdMjLluknYAxSk4",
  authDomain: "skye-820fe.firebaseapp.com",
  projectId: "skye-820fe",
  storageBucket: "skye-820fe.appspot.com",
  messagingSenderId: "727275499249",
  appId: "1:727275499249:web:24a1efafe1a266010f4350"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export default db;