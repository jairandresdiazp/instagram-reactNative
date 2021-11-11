import firebase from 'firebase';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyCJFZSxx2wlW2hxsl70mpyo2DKIeTcKJwo',
  authDomain: 'instagram-reactnative-41e60.firebaseapp.com',
  projectId: 'instagram-reactnative-41e60',
  storageBucket: 'instagram-reactnative-41e60.appspot.com',
  messagingSenderId: '156324247191',
  appId: '1:156324247191:web:1dd2a9759824aae7191bd2',
  measurementId: 'G-E03P6NL2R8',
};

export const app = firebase.initializeApp(firebaseConfig);
export const db = app.firestore();
export const auth = firebase.auth();

export default {
  app,
  db,
  auth,
};
