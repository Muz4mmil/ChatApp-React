import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyBI-NnnRJkUjdTu49OlEMPrKH5hU34UCFs",
  authDomain: "chatapp-react-4af17.firebaseapp.com",
  projectId: "chatapp-react-4af17",
  storageBucket: "chatapp-react-4af17.appspot.com",
  messagingSenderId: "712952182575",
  appId: "1:712952182575:web:4832f286b89d9159d713da"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);