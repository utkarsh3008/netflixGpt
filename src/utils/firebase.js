// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD2iChOm_4ZtDYEbSbRNvOALR5nFYx3WTU",
  authDomain: "netflixgpt-6e6c5.firebaseapp.com",
  projectId: "netflixgpt-6e6c5",
  storageBucket: "netflixgpt-6e6c5.firebasestorage.app",
  messagingSenderId: "1027016387993",
  appId: "1:1027016387993:web:b56efa44795bd49d2fb708",
  measurementId: "G-1T9SY6YQ1B"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics( app );
export const auth = getAuth();