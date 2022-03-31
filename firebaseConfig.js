// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore, collection } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyBPakv4BR2JmTERX-YobCjPCc8d9AndJy8',
  authDomain: 'elaros-db.firebaseapp.com',
  projectId: 'elaros-db',
  storageBucket: 'elaros-db.appspot.com',
  messagingSenderId: '303213904586',
  appId: '1:303213904586:web:e29202564fff44d4646a33',
};

// Initialize Firebase
initializeApp(firebaseConfig);

// Initialize Services
export const db = getFirestore();

export const auth = getAuth();

// Collections
export const colGoalsRef = collection(db, 'goals');
export const colQuestRef = collection(db, 'questionnaires');
export const colDiaryRef = collection(db, 'diary');
