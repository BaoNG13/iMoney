// import { initializeApp } from "firebase/app";
// import { getAuth } from "firebase/auth";
// import { getFirestore } from "firebase/firestore";

// // TODO: Replace the following with your app's Firebase project configuration
// // See: https://support.google.com/firebase/answer/7015592
// const firebaseConfig = {
//     apiKey: "AIzaSyCQoL5mYXJ6RXxHij0X2v9_4bktvjIYtVI",
//     authDomain: "imoney-b9fed.firebaseapp.com",
//     projectId: "imoney-b9fed",
//     storageBucket: "imoney-b9fed.appspot.com",
//     messagingSenderId: "418448185987",
//     appId: "1:418448185987:web:8c34ffd466ed5db4cf19b6",
//     measurementId: "G-YTS6ZKY4JP"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);

// // Initialize Cloud Firestore and get a reference to the service
// const db = getFirestore(app);
// const auth = getAuth(app);

// // const timestamp = db.FieldValue();

// export { db, auth };

import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";


// TODO: Replace the following with your app's Firebase project configuration
// See: https://support.google.com/firebase/answer/7015592
const firebaseConfig = {
    apiKey: "AIzaSyCQoL5mYXJ6RXxHij0X2v9_4bktvjIYtVI",
    authDomain: "imoney-b9fed.firebaseapp.com",
    projectId: "imoney-b9fed",
    storageBucket: "imoney-b9fed.appspot.com",
    messagingSenderId: "418448185987",
    appId: "1:418448185987:web:8c34ffd466ed5db4cf19b6",
    measurementId: "G-YTS6ZKY4JP"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
const auth = firebase.auth();
const db = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;


export { db, auth, timestamp };