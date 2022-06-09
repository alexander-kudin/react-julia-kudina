// Firebase Controlls
import { getApp, getApps, initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

// Firebase Secret Configuration
import { FIREBASE_API } from '../config';

// Initialize Firebase.
const firebaseApp = !getApps().length ? initializeApp(FIREBASE_API) : getApp();

// Get Firebase Auth service interface.
const AUTH = getAuth(firebaseApp);

// Get Cloud Firestore service interface.
const DB = getFirestore(firebaseApp);

// Get Firestore Storage service interface.
const STORAGE = getStorage(firebaseApp);

export { DB, AUTH, STORAGE };