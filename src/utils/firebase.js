// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBXvtsywxrbwsRk6A_rtg3Y1ni5Q4SqWro",
  authDomain: "netflixgpt-6a276.firebaseapp.com",
  projectId: "netflixgpt-6a276",
  storageBucket: "netflixgpt-6a276.appspot.com",
  messagingSenderId: "141896936870",
  appId: "1:141896936870:web:7e108528d242361fab3367",
  measurementId: "G-7X42N33XSY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();