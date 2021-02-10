import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyC6T7ShFsz7Egkm8uJln1zAi9Hf8cQn0U8',
  authDomain: 'watch-shop-79f54.firebaseapp.com',
  databaseURL: 'https://watch-shop-79f54.firebaseio.com',
  projectId: 'watch-shop-79f54',
  storageBucket: 'watch-shop-79f54.appspot.com',
  messagingSenderId: '308363030404',
  appId: '1:308363030404:web:4b7444a9360cddd0c837d1',
  measurementId: 'G-PCHMZJ3S0X',
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();
