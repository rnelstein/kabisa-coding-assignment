import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_apiKey,
  authDomain: process.env.REACT_APP_authDomain,
  projectId: process.env.REACT_APP_projectId,
  storageBucket: process.env.REACT_APP_storageBucket,
  messagingSenderId: process.env.REACT_APP_messagingSenderId,
  appId: process.env.REACT_APP_appId,
};

firebase.initializeApp(firebaseConfig);

export const firestore = firebase.firestore();

export const fieldValue = firebase.firestore.FieldValue;

export const auth = firebase.auth();
export const provider = new firebase.auth.GoogleAuthProvider();
export const quotesRef = firestore.collection("quotes");

export const signInWithGoogle = () => auth.signInWithPopup(provider);
export const signOut = () => auth.signOut();

export const addQuote = (quote) => {
  quotesRef.doc(`${quote.id}`).set(quote, { merge: true });
};

export const addMultipleQuotes = (quotes) => {
  quotes.forEach((quote) => addQuote(quote));
};
export default firebase;
