import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyBPctWOmjjVJOeoxn-Tzi88hhuSPoOqAoI',
  authDomain: 'aston-react-course.firebaseapp.com',
  projectId: 'aston-react-course',
  storageBucket: 'aston-react-course.appspot.com',
  messagingSenderId: '704006398722',
  appId: '1:704006398722:web:0192467e77cbbfcb94581b',
  measurementId: 'G-9TW9LHGRY7',
};

const firebase = initializeApp(firebaseConfig);

export const db = getFirestore(firebase);

export const auth = getAuth(firebase);
