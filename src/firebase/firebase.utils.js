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

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
