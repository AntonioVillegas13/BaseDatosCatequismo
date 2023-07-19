// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import {initializeFirestore} from 'firebase/firestore';
import { getStorage } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries



import { doc, setDoc,addDoc,collection ,getDoc} from "firebase/firestore"; 
import { Alert } from "react-native";

const firebaseConfig = {
    apiKey: "AIzaSyD4XSWf3XsYVUuBT-BFAzZw4D8b_6_VW58",
    authDomain: "basesdedatos-8310c.firebaseapp.com",
    projectId: "basesdedatos-8310c",
    storageBucket: "basesdedatos-8310c.appspot.com",
    messagingSenderId: "231550390905",
    appId: "1:231550390905:web:2e0112e8f11b24e499baa8",
    measurementId: "G-Z1RDTHC55C"
  
};
export const loadConfiguration=()=>{
   // Alert.alert("carga la configuracio!!!");
    const app = initializeApp(firebaseConfig);
    const db =initializeFirestore(app,{
        experimentalForceLongPolling: true,
    });
    initializeApp(firebaseConfig);
    global.dbCon=db;
    global.storage = getStorage(app);

}
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

