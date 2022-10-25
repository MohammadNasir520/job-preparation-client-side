import React, { createContext, useEffect, useState } from "react";
import {
    createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import app from "../Firebase/Firebase.config";

export const AuthContext = createContext();

const auth = getAuth(app);




const AuthProvider = ({ children }) => {
const [user, setUser]=useState(null)

// sign in by google
  const googleSignIn = (Provider) => {
    return signInWithPopup(auth, Provider);
  };



//   create email by email and password
  const createUserByEmailAndPassword = (email, password) => {
   
    return createUserWithEmailAndPassword(auth, email, password);
  };

//   sign in with email and password
const   signInbyEmailAndPassword=(email,password)=>{
   return signInWithEmailAndPassword(auth, email, password)
}


useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      console.log(currentUser);
      setUser(currentUser);
      
    });

    return () => {
      unsubscribe();
    };
  }, []);



// logout handlar
const logOut=()=>{
    return signOut(auth)
}




  
  const authInfo = { user, googleSignIn, createUserByEmailAndPassword,  signInbyEmailAndPassword,logOut};

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
