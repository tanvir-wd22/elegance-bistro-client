import { useEffect, useState } from "react";
import {
  GoogleAuthProvider,
  signInWithPopup,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  updateProfile,
  createUserWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { auth } from "../firebase/config.js";
import AuthContext from "./AuthContext";

// 1. External configuration (Instantiated outside the component so it doesn't recreate on re-render)
const provider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
  // 2. State declarations (Always first)
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // 3. Regular functions & Auth actions (Grouped together)
  const googleUser = () => {
    setLoading(true);
    return signInWithPopup(auth, provider);
  };

  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const signInUser = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const updateUserProfile = (name, photo) => {
    setLoading(true);
    return updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: photo,
    });
  };

  const signOutUser = () => {
    setLoading(true);
    return signOut(auth);
  };

  // 4. Effects (Placed towards the bottom because they run AFTER rendering)
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
    return () => unsubscribe(); // Properly formatted cleanup function
  }, []);

  // 5. Context Value / Context Object
  const authInfo = {
    user,
    loading,
    googleUser,
    createUser,
    signInUser,
    updateUserProfile,
    signOutUser,
  };

  // 6. JSX Return (Always last)
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
