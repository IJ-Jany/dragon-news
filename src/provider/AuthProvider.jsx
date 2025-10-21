import React, { useEffect, useState } from 'react';
import app from '../firebase/firebase.config';
import { createContext } from 'react';
import { getAuth, onAuthStateChanged,signInWithEmailAndPassword,signOut,updateProfile } from "firebase/auth";
export const AuthContext = createContext()
import { createUserWithEmailAndPassword } from 'firebase/auth';
const auth = getAuth(app);
const AuthProvider = ({children}) => {
    const[user,setUser ] = useState(null)
    const[loading,setloading ] = useState(true)
    const createUser = (email,password)=>{
        setloading(true)
        return createUserWithEmailAndPassword(auth,email,password)
    }
    const logOut =() =>{
        setloading(true)
        return signOut(auth)
    }
    const login=(email,password)=>{
        setloading(true)
        return signInWithEmailAndPassword(auth,email,password)
    }
    const updateUser =(updatedData)=>{
        return updateProfile(auth.currentUser,updatedData)
    }
    useEffect(()=>{
      const unsubscribe =  onAuthStateChanged(auth,(currentUser)=>{
            setUser(currentUser)
            setloading(false)
        })
        return()=>{
            unsubscribe()
        }
    },[])
    const authData = {
        user,setUser,createUser,logOut,login,loading,setloading,updateUser
    }
    return (
       <AuthContext.Provider value={authData}>
        {children}
       </AuthContext.Provider>
    );
};

export default AuthProvider;