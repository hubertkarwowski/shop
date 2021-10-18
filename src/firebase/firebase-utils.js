import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";

const config = {
  apiKey: "AIzaSyCpHIouq6hz0YSkjDjUMLYBt5hPED8D4Dg",
  authDomain: "crwn-db-af8b6.firebaseapp.com",
  projectId: "crwn-db-af8b6",
  storageBucket: "crwn-db-af8b6.appspot.com",
  messagingSenderId: "446889606511",
  appId: "1:446889606511:web:1f8197d830c46eece73c9a",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
