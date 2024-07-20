// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAkqDKfz-7r66aLwo9h4D4tCcoZn37oGbY",
  authDomain: "mern-book-inventory-da82d.firebaseapp.com",
  projectId: "mern-book-inventory-da82d",
  storageBucket: "mern-book-inventory-da82d.appspot.com",
  messagingSenderId: "457190944818",
  appId: "1:457190944818:web:7c0eb3f854a1d4c48d0c2b",
  measurementId: "G-TH0V0NLHZQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;