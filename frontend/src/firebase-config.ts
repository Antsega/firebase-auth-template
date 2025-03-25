import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';
import { getAnalytics } from 'firebase/analytics';

const firebaseConfig = {
  apiKey: "AIzaSyD7UmijfL8HfT4o9RRl2005zzTdECINPx4",
  authDomain: "fir-auth-template-cf488.firebaseapp.com",
  projectId: "fir-auth-template-cf488",
  storageBucket: "fir-auth-template-cf488.firebasestorage.app",
  messagingSenderId: "81735040740",
  appId: "1:81735040740:web:bb27f32fe165554be136f1",
  measurementId: "G-22JW21748K"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const analytics = getAnalytics(app); 