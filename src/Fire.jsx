// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAIBhttQPcTVvDs4C_vAPclermRcOTXbGo",
  authDomain: "my-profile-1102.firebaseapp.com",
  projectId: "my-profile-1102",
  storageBucket: "my-profile-1102.firebasestorage.app",
  messagingSenderId: "348270929197",
  appId: "1:348270929197:web:99ce18e3dc467356511fa4",
  measurementId: "G-B6R948CXLQ"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app); 