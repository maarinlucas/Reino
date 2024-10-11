import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";
import { getAnalytics } from "firebase/analytics";


const firebaseConfig = {
    apiKey: "AIzaSyC3W4kqDE5suNobXOL-W_UBkvifV5nNAys",
    authDomain: "esddsa-9b73f.firebaseapp.com",
    projectId: "esddsa-9b73f",
    storageBucket: "esddsa-9b73f.appspot.com",
    messagingSenderId: "237418952379",
    appId: "1:237418952379:web:61d9b396fa5f106d659b9e",
    measurementId: "G-3NB7HTR775",
    databaseURL: "https://esddsa-9b73f-default-rtdb.firebaseio.com/",
  };


  
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getDatabase(app);
export const analytics = getAnalytics(app);