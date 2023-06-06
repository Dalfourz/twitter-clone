// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD-3t2KFGuzY0IUUcP7gueNd5PccLtGlTc",
  authDomain: "twitter-clone-2b449.firebaseapp.com",
  projectId: "twitter-clone-2b449",
  storageBucket: "twitter-clone-2b449.appspot.com",
  messagingSenderId: "355139934392",
  appId: "1:355139934392:web:fcfa31c8959f0e36dbbc4d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app)