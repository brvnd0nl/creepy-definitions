import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

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
const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);

export const auth = getAuth();