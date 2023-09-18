// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCtK8d1MuyCu9_zb3t11J5Yr1kC6rGWylw",
  authDomain: "frames-bbc09.firebaseapp.com",
  projectId: "frames-bbc09",
  storageBucket: "frames-bbc09.appspot.com",
  messagingSenderId: "624513830936",
  appId: "1:624513830936:web:51654d6e551067f97cf36d",
  measurementId: "G-J2C55VKG77"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth =  getAuth();