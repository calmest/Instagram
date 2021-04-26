/* eslint-disable */
import Firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// here I want to import the seed file
// import { seedDatabase } from '../seed';

const config = {
    apiKey: "AIzaSyDkjleYY7J0sRt4xMUmcXxOWeKtQYUEIdo",
    authDomain: "instagram-clone-547af.firebaseapp.com",
    projectId: "instagram-clone-547af",
    storageBucket: "instagram-clone-547af.appspot.com",
    messagingSenderId: "743282320820",
    appId: "1:743282320820:web:d707a5db2fb893b00bbee1",
    measurementId: "G-6DZ6V7C6P2"
};

const firebase = Firebase.initializeApp(config);
const { FieldValue } = Firebase.firestore;

// here is where I want to call the seed file (only ONCE!)
// seedDatabase(firebase);

export { firebase, FieldValue };