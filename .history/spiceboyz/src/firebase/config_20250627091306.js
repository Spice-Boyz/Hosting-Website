//MAYOKUN IM SIMPLY MAKING A FIREBASE TO STORE EMAILS THIS IS THE CONFIG FOR IT!!! Donnt worry I will comment eveything 

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAs4FXY1a1n_fYmm91u0Bt9Mq_xn-K3Slk",
  authDomain: "spiceboyz-ux-data.firebaseapp.com",
  projectId: "spiceboyz-ux-data",
  storageBucket: "spiceboyz-ux-data.firebasestorage.app",
  messagingSenderId: "461876927112",
  appId: "1:461876927112:web:1c8dd5c45d034ac9985d3d",
  measurementId: "G-0DSRB52XEZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export {db}; 