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
const [user, setUser]=useState(null);
const [loading, setLoading] = useState(true);



// sign in by google
  const googleSignIn = (Provider) => {
    setLoading(true)
    return signInWithPopup(auth, Provider);
  };



//   create email by email and password
  const createUserByEmailAndPassword = (email, password) => {
   setLoading(true)
    return createUserWithEmailAndPassword(auth, email, password);
  };

//   sign in with email and password
const   signInbyEmailAndPassword=(email,password)=>{
  setLoading(true)
   return signInWithEmailAndPassword(auth, email, password)
}


useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      console.log(currentUser);
      setUser(currentUser);
      setLoading(false)
    });

    return () => {
      unsubscribe();
    };
  }, []);



// logout handlar
const logOut=()=>{
  setLoading(true)
    return signOut(auth)
}




  
  const authInfo = { user, loading, googleSignIn, createUserByEmailAndPassword,  signInbyEmailAndPassword,logOut};

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
