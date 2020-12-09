import firebase from 'firebase/app';

import 'firebase/firestore';

import 'firebase/auth';

const config = {
  apiKey: "AIzaSyCWwP7V-kwBMpMYcO5YM7FA9scXER8bDEM",
  authDomain: "crwn-db-b8e2e.firebaseapp.com",
  projectId: "crwn-db-b8e2e",
  storageBucket: "crwn-db-b8e2e.appspot.com",
  messagingSenderId: "789376179630",
  appId: "1:789376179630:web:a5df0c3a5d2b26642c7c3f",
  measurementId: "G-ERQ7Y7KK6X"
};

firebase.initializeApp(config);

export const auth = firebase.auth();

export const firestore = firebase.firestore();


const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;