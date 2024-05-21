
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyA_glD8xGWesm_YXUAy3T1mUp0HrydEXSo",
  authDomain: "gwam-cffce.firebaseapp.com",
  projectId: "gwam-cffce",
  storageBucket: "gwam-cffce.appspot.com",
  messagingSenderId: "16272926467",
  appId: "1:16272926467:web:cd6cfe71eff1f277196b36",
  measurementId: "G-4TR9GFNK85"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);