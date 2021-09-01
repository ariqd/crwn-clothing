import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyAIEaLOoK-yV4aHkZBNYcN7N4djz3KtQQA",
  authDomain: "crwn-db-fd7c6.firebaseapp.com",
  projectId: "crwn-db-fd7c6",
  storageBucket: "crwn-db-fd7c6.appspot.com",
  messagingSenderId: "123764343",
  appId: "1:123764343:web:287f72669caa6555145072",
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({
  prompt: "select_account",
});

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
