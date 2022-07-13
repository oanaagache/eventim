import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyAjuHeLggHgax-5n_V-CYX3eme17MH1wLo",
  authDomain: "eventim-40c6d.firebaseapp.com",
  projectId: "eventim-40c6d",
  storageBucket: "eventim-40c6d.appspot.com",
  messagingSenderId: "738812874401",
  appId: "1:738812874401:web:aa467c5ccfdb3f6d1f2ae0",
};

// if (getApps().length < 1) {
//   initializeApp(firebaseConfig);
//   // Initialize other firebase products here
// }

// Initialize database Firebase
const app = initializeApp(firebaseConfig);
//const db = getFirestore(app);
export default app;
