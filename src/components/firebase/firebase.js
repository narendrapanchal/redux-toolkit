// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBmvlbFy557ZybhZgKdQKwKNdAX19EVev4",
  authDomain: "building-custom-hooks.firebaseapp.com",
  databaseURL: "https://building-custom-hooks-default-rtdb.firebaseio.com",
  projectId: "building-custom-hooks",
  storageBucket: "building-custom-hooks.appspot.com",
  messagingSenderId: "914383731868",
  appId: "1:914383731868:web:7308e074dda8af44764159"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { app, auth};