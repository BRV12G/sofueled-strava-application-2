import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup, User } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAG4q9k4vthoh6ab7WeP2bhbPprgRHgD6A",
  authDomain: "fitlife-b6824.firebaseapp.com",
  projectId: "fitlife-b6824",
  storageBucket: "fitlife-b6824.firebasestorage.app",
  messagingSenderId: "551140582610",
  appId: "1:551140582610:web:182664db8e68a7976b790b",
  measurementId: "G-BZL559LBT3"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

export const signInWithGoogle = async (): Promise<User> => {
  const result = await signInWithPopup(auth, googleProvider);
  return result.user;
};

export const signOut = async (): Promise<void> => {
  await auth.signOut();
};