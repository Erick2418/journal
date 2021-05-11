import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyActa-EqxWE1LUWf6zkN-7sLHwo_k57wug",
    authDomain: "react-apps-cc3bd.firebaseapp.com",
    projectId: "react-apps-cc3bd",
    storageBucket: "react-apps-cc3bd.appspot.com",
    messagingSenderId: "410770534168",
    appId: "1:410770534168:web:66fab78dce17916d31386d",
    measurementId: "G-8168NEYEG2"
};
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);
const db= firebase.firestore();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
export {
    db,
    googleAuthProvider,
    firebase
}
