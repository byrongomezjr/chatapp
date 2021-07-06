import firebase from 'firebase/app';
require('firebase/auth');
import firestore from '@react-native-firebase/firestore';
require('firebase/firestore');
import '@react-native-firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyB92QIK0-6wMKEg2_xGpNjrwBl3Icz78cM',
  authDomain: 'signal-clone-encryptedapp.firebaseapp.com',
  projectId: 'signal-clone-encryptedapp',
  storageBucket: 'signal-clone-encryptedapp.appspot.com',
  messagingSenderId: '640433652540',
  appId: '1:640433652540:web:e9b0df092d8f7f33f5d439',
};

let app;

if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app();
}

const db = app.firestore();
const auth = firebase.auth();

export {db, auth};
