import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/database";
import "firebase/compat/database";
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDKAu-_avFeiMRXQIrFEqpa15ujLVeby0I",
  authDomain: "bingeit-a6cec.firebaseapp.com",
  projectId: "bingeit-a6cec",
  storageBucket: "bingeit-a6cec.appspot.com",
  messagingSenderId: "510923152328",
  appId: "1:510923152328:web:6d1e690ffff55363bf3efd",
  measurementId: "G-JZEJXMN40P",
};
console.log("Trying to Connect with Firebase ...");
const Firebase = firebase.initializeApp(firebaseConfig);
console.log("Successfully Established Connection with Firebase!!");

// console.log('Logging From firebaseInit => THIS IS THE DATA FIREBASE SENT:', firebase);

export default Firebase;
