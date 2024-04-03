import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBuGSDlsR-ylFONPFM3H_jcug2JWjqFjws",
  authDomain: "swapnil-5e27c.firebaseapp.com",
  databaseURL: "https://swapnil-5e27c-default-rtdb.firebaseio.com",
  projectId: "swapnil-5e27c",
  storageBucket: "swapnil-5e27c.appspot.com",
  messagingSenderId: "1069158203112",
  appId: "1:1069158203112:web:fb6f7679f210d7bdc3135d"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth();
export{app, auth}