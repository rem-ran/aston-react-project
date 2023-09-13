// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyBPctWOmjjVJOeoxn-Tzi88hhuSPoOqAoI',
  authDomain: 'aston-react-course.firebaseapp.com',
  projectId: 'aston-react-course',
  storageBucket: 'aston-react-course.appspot.com',
  messagingSenderId: '704006398722',
  appId: '1:704006398722:web:0192467e77cbbfcb94581b',
  measurementId: 'G-9TW9LHGRY7',
};

// Initialize Firebase
const firebase = initializeApp(firebaseConfig);

export const auth = getAuth(firebase);
