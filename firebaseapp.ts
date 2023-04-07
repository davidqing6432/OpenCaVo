import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAfSfLuLSStN8K92R5ckSa9GQtnckgUnio",
  authDomain: "avocavo.firebaseapp.com",
  projectId: "avocavo",
  storageBucket: "avocavo.appspot.com",
  messagingSenderId: "168012031000",
  appId: "1:168012031000:web:366bc5df163fae9ad6cf6d"
};

// Initialize Firebase
if (!firebase.apps.length) {
    const app = firebase.initializeApp(firebaseConfig);
}

export { firebase };