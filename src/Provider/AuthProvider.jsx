import React, { createContext, useEffect, useState } from 'react'
import { signInWithPopup, GoogleAuthProvider,FacebookAuthProvider, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut } from "firebase/auth";
import auth from './../firebase/firebase.config';
export const AuthContext = createContext(null);
const provider = new GoogleAuthProvider();
const provider2 = new FacebookAuthProvider();
 
const AuthProvider = ({children}) => {
    
    const [user,setUser] = useState(null);
   
    const [loading,setLoading] = useState(true)
    
    // firebase register
    const createUser = (email,password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth,email,password)
    }
    // firebase login
    const loginUser = (email,password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth,email,password)
    }
    // firebase logOut
    const logOutUser = () => {
        setLoading(true)
        return signOut(auth)
    }
    // Login with google 
    const googleLogin = () => {
        setLoading(true)
        return signInWithPopup(auth,provider)
    }
    const facebookLogin = () => {
        setLoading(true)
        return signInWithPopup(auth,provider2)
    }
    // current user info
    useEffect(()=>{
        const unSubscribe = onAuthStateChanged(auth,(user)=>{
           
            setUser(user)
            setLoading(false)
        });
        return () =>{
            unSubscribe();
        }
    },[])
    const authInfo = {
        loading,
        createUser,
        loginUser,
        logOutUser,
        googleLogin,
        facebookLogin,
        user,
       
    }

  return (
    <AuthContext.Provider value={authInfo}>
        {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider
