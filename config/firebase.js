import { initializeApp } from "firebase/app"
import { getAnalytics } from "firebase/analytics"
import { getAuth } from "firebase/auth"
import {getFirestore} from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyDorEZITsbuFwO9VVG8hlfp9AhDzULLQ1A",
  authDomain: "creepydefinitions.firebaseapp.com",
  projectId: "creepydefinitions",
  storageBucket: "creepydefinitions.appspot.com",
  messagingSenderId: "506594026073",
  appId: "1:506594026073:web:0782091af70d0e566ac748",
  measurementId: "G-EKCSZP2ZTP"
};

// Initialize Firebase
//const analytics = getAnalytics(app);

export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const database = getFirestore(app);