import React, { createContext } from "react";
import {
    createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import app from "../Firebase/Firebase.config";

export const AuthContext = createContext();

const auth = getAuth(app);

const AuthProvider = ({ children }) => {


// sign in by google
  const googleSignIn = (Provider) => {
    return signInWithPopup(auth, Provider);
  };



//   create email by email and password
  const createUserByEmailAndPassword = (email, password) => {
   
    return createUserWithEmailAndPassword(auth, email, password);
  };

//   sign in with email and password
const signInByEmailAndPassword=(email,password)=>{
    signInWithEmailAndPassword(auth, email, password)
}


// logout handlar
const logOut=()=>{
    return signOut(auth)
}




  const user = "batashali";
  const authInfo = { user, googleSignIn, createUserByEmailAndPassword, signInByEmailAndPassword};

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
