import firebase from "firebase";
import "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyC1Il56TieTxFgqC7x7ChLxBv9JBbeBiD0",
  authDomain: "facebook-clone-6da82.firebaseapp.com",
  projectId: "facebook-clone-6da82",
  storageBucket: "facebook-clone-6da82.appspot.com",
  messagingSenderId: "611475471936",
  appId: "1:611475471936:web:c33b736192a72226c2a9a5",
};

const app = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();

const db = app.firestore();

const storage = firebase.storage();

export { db, storage };
