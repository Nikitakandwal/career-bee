import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
 
const firebaseConfig = {
  apiKey: "your-api-key",
  authDomain: "authDomain",
  projectId: "projectId",
  storageBucket: "storageBucket",
  messagingSenderId: "messagesenderid",
  appId: "apiId"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
 

export { firebaseConfig, auth };  
