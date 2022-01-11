import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { createContext, useContext, useEffect, useState } from "react";
import { getAuth, onAuthStateChanged, signInAnonymously, signOut } from "firebase/auth";

const AuthContext = createContext();

const firebaseConfig = {
  apiKey: "info from firebase",
  authDomain: "info from firebase",
  projectId: "info from firebase",
  storageBucket: "info from firebase",
  messagingSenderId: "info from firebase",
  appId: "info from firebase",
  measurementId: "info from firebase",
};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore();
export const signIn = cb => signInAnonymously(getAuth()).then(() => cb());
export const signOutHandler = cb => signOut(getAuth()).then(() => cb());

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    onAuthStateChanged(getAuth(), user => {
      if (user) {
        setUser(user);
        setLoading(false);
      }
    });
  }, []);

  return <AuthContext.Provider value={{ user, loading }}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  return useContext(AuthContext);
}
