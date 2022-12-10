import { getApp, getApps, initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyDJcag43AFO8fVytmGXt2E7EC-0F0fDnaw",
  authDomain: "restaurantapp-e908b.firebaseapp.com",
  databaseURL: "https://restaurantapp-e908b-default-rtdb.firebaseio.com",
  projectId: "restaurantapp-e908b",
  storageBucket: "restaurantapp-e908b.appspot.com",
  messagingSenderId: "757271041618",
  appId: "1:757271041618:web:2be18e0918702725b2318b"
};

const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig);

const firestore = getFirestore(app);
const storage = getStorage(app);

export { app, firestore, storage };
