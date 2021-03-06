// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyC1g8lbFtTzua4_aAu3Jw95h4rUstL1DGE",
    authDomain: "drake-social-app.firebaseapp.com",
    projectId: "drake-social-app",
    storageBucket: "drake-social-app.appspot.com",
    messagingSenderId: "323874378086",
    appId: "1:323874378086:web:945e60d02546bd9c28f8a7",
    measurementId: "G-HH825G94EH"
};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

export const authentication = getAuth(app)