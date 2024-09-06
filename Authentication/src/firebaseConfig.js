import { initializeApp } from "firebase/app";
import { getAuth} from "firebase/auth"

const firebaseConfig = {
    apiKey: "AIzaSyCDRySx6cIlq3Q7K2Ld9joppeRStyBrBwE",
    authDomain: "react-firebase-2024-1a7bb.firebaseapp.com",
    projectId: "react-firebase-2024-1a7bb",
    storageBucket: "react-firebase-2024-1a7bb.appspot.com",
    messagingSenderId: "109279962446",
    appId: "1:109279962446:web:af771776dc487ff1c66a1f",
    measurementId: "G-QH4Q7CGWJ5"
  };

const app=initializeApp(firebaseConfig)
const auth=getAuth(app)

export default auth;