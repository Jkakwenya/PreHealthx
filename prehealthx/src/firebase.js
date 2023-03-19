/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore} from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCkniB6c6wcFyv6qcXwEzYsKN6EI9uecFM",
  authDomain: "pre-healthx.firebaseapp.com",
  projectId: "pre-healthx",
  storageBucket: "pre-healthx.appspot.com",
  messagingSenderId: "23878065893",
  appId: "1:23878065893:web:b523318abf8872f16abe0c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const auth = getAuth(app);



export { db, auth};