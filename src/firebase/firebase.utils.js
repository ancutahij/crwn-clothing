import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyBcCyEDx0TijkjKorfxhUT_V0D_2ggFgc8",
  authDomain: "crwn-db-7106d.firebaseapp.com",
  projectId: "crwn-db-7106d",
  storageBucket: "crwn-db-7106d.appspot.com",
  messagingSenderId: "375890012816",
  appId: "1:375890012816:web:fe37341b6d744e17c08615",
  measurementId: "G-W6JPCB7CYD",
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  console.log(userAuth);
  //const userRef = firestore.doc(`users/${userAuth.GoogleAuthProvider}`);
  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShop = await userRef.get();

  if (!snapShop.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({ displayName, email, createdAt, ...additionalData });
    } catch (error) {
      console.log("error creating user", error.message);
    }
  }
  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);