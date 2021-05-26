import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyAOGDBga1zF3Aqyod2_jnKm3K1y8xjrPiA',
  authDomain: 'crwn-db-213b6.firebaseapp.com',
  projectId: 'crwn-db-213b6',
  storageBucket: 'crwn-db-213b6.appspot.com',
  messagingSenderId: '874668690376',
  appId: '1:874668690376:web:7183b6bdd599d3e1bf0efd',
  measurementId: 'G-BS2DZM2ZRM'
};

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

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
