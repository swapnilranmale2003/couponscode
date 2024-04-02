import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
const firebaseConfig = {
  apiKey: "AIzaSyD9C6kIN80pK7tIr0N4J9m3bshaWe06XIY",
  authDomain: "login-and-signup-auth-efa55.firebaseapp.com",
  projectId: "login-and-signup-auth-efa55",
  storageBucket: "login-and-signup-auth-efa55.appspot.com",
  messagingSenderId: "543769487138",
  appId: "1:543769487138:web:ed73ff09375d5e05afe77b",
  measurementId: "G-0Q3WS8LZ7K"
};


const app = initializeApp(firebaseConfig);
const auth = getAuth();
export {app, auth};