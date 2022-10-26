import React, { createContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import app from "../Firebase/Firebase.config";

export const AuthContext = createContext();

const auth = getAuth(app);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // sign in by google
  const googleSignIn = (Provider) => {
    setLoading(true);
    return signInWithPopup(auth, Provider);
  };

  //   create email by email and password
  const createUserByEmailAndPassword = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  //   sign in with email and password
  const signInbyEmailAndPassword = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  // sign in by guthub function
  const signInbyGithub = (Provider) => {
    setLoading(true);
    return signInWithPopup(auth, Provider);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      console.log(currentUser);
      setUser(currentUser);
      setLoading(false);
    });

    return () => {
      unsubscribe();
    };
  }, []);

// set user name and photo  function , collecting from register page

const setNameAndPhot=(profile)=>{
  return updateProfile(auth.currentUser, profile)
}




  // logout handlar
  const logOut = () => {
    setLoading(true);
    return signOut(auth);
  };


  // set context value

  const authInfo = {
    user,
    loading,
    googleSignIn,
    createUserByEmailAndPassword,
    signInbyEmailAndPassword,
    signInbyGithub,
    setNameAndPhot,
    logOut,
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
