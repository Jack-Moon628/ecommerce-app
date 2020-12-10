import firebase from 'firebase/app';

import 'firebase/firestore';

import 'firebase/auth';

const config = {
  apiKey: "AIzaSyB9bCRZ-I7KfhimMRQjRC5g3OIXphvN85o",
  authDomain: "crwn-db-7039c.firebaseapp.com",
  projectId: "crwn-db-7039c",
  storageBucket: "crwn-db-7039c.appspot.com",
  messagingSenderId: "432091753238",
  appId: "1:432091753238:web:bed41b78501aa669a37e37",
  measurementId: "G-VFRTP6Y18Y"
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if(!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      })
    } catch (error) {
      console.log('error creating user', error.message);
    }
  }

  return userRef;
}

firebase.initializeApp(config);

export const auth = firebase.auth();

export const firestore = firebase.firestore();


const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;