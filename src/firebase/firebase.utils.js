import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyC3VrUXIAZEmguFUaasY0yEmJkvbJAtjLg",
  authDomain: "crwn-db-e0001.firebaseapp.com",
  databaseURL: "https://crwn-db-e0001.firebaseio.com",
  projectId: "crwn-db-e0001",
  storageBucket: "crwn-db-e0001.appspot.com",
  messagingSenderId: "896879785010",
  appId: "1:896879785010:web:041dcc846406a5bfd5382b",
  measurementId: "G-ZKK1KB9M6B"
};

firebase.initializeApp(config);

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      });
    } catch (error) {
      console.log('error creating user', error.message);
    }
  }

  return userRef;
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;