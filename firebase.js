// firebase.js
// Forbinder appen til min Firebase Realtime Database.
// Det er her, vagterne ligger nu – ikke længere hårdkodet i appen.
// Fordi databasen ligger online, kan vagten, kollegaen og vagtlederen
// se de samme data, og ændringer vises med det samme hos alle.

import { initializeApp, getApps } from 'firebase/app';
import { getDatabase } from 'firebase/database';

// Indsæt dine egne værdier fra Firebase-konsollen:
// Project settings → General → Your apps → Web app → firebaseConfig
const firebaseConfig = {
  apiKey: "AIzaSyDu-D1XvoJsLINlto55wqBvX4lCtKuir30",
  authDomain: "vagtapp-bd8ad.firebaseapp.com",
  databaseURL: "https://vagtapp-bd8ad-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "vagtapp-bd8ad",
  storageBucket: "vagtapp-bd8ad.firebasestorage.app",
  messagingSenderId: "206789454316",
  appId: "1:206789454316:web:35d651d4c90a7b5d5238c9"
};

// getApps() tjekker, om Firebase allerede er startet.
// Uden tjekket giver Expo en fejl, når appen genindlæses under udvikling.
const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];

// db bruges i services/vagtService.js til at læse og skrive vagter
export const db = getDatabase(app);
