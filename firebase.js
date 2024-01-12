import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyDrDASy0HIohSFNFXbwKxhOaTYLigdOzTU",
    authDomain: "blogproject-55960.firebaseapp.com",
    projectId: "blogproject-55960",
    storageBucket: "blogproject-55960.appspot.com",
    messagingSenderId: "291748367088",
    appId: "1:291748367088:web:da5e401117705ae1d55035",
  };

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;