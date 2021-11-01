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
        ...additionalData,
      });
    } catch (error) {
      console.log("error creating user", error.message);
    }
  }

  return userRef;
};

export const addCollecitonAndDocuments = async (
  collectionKey,
  objectsToAdd
) => {
  const collectionRef = firestore.collection(collectionKey);

  const batch = firestore.batch();
  objectsToAdd.forEach((obj) => {
    const newDocRef = collectionRef.doc();
    batch.set(newDocRef, obj);
  });

  return await batch.commit();
};

export const convertCollectionsSnapshotToMap = (collections) => {
  const transformedCollection = collections.docs.map((doc) => {
    const { title, items } = doc.data();

    return {
      routeName: encodeURI(title.toLowerCase()),
      id: doc.id,
      title,
      items,
    };
  });

  return transformedCollection.reduce((accumulator, collection) => {
    accumulator[collection.title.toLowerCase()] = collection;
    return accumulator;
  }, {});
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

const providerFb = new firebase.auth.FacebookAuthProvider();
providerFb.setCustomParameters({ prompt: "select_account" });
export const singinWithFb = () => auth.signInWithPopup(providerFb);

const providerGH = new firebase.auth.GithubAuthProvider();
providerFb.setCustomParameters({ prompt: "select_account" });
export const singinWithGH = () => auth.signInWithPopup(providerGH);

const providerTwitter = new firebase.auth.TwitterAuthProvider();
providerFb.setCustomParameters({ prompt: "select_account" });
export const singinWithTwitter = () => auth.signInWithPopup(providerTwitter);

export default firebase;
