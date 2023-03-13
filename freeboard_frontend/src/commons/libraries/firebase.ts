// ////////////////// 파이어베이스 ///////////////////////
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAmz3o6_299OxPVUdbSD1kVcvA6ZsCc2JM",
  authDomain: "codecamp-345.firebaseapp.com",
  projectId: "codecamp-345",
  storageBucket: "codecamp-345.appspot.com",
  messagingSenderId: "1060434720052",
  appId: "1:1060434720052:web:53b6fdc58880db81926161",
};

// Initialize Firebase
export const firebaseApp = initializeApp(firebaseConfig);
