import React, { createContext, useEffect, useState } from 'react';
import { getAuth, createUserWithEmailAndPassword, onAuthStateChanged, signInWithPopup, GoogleAuthProvider, signInWithEmailAndPassword, signOut } from 'firebase/auth';

import app from '../components/firebase/firebase.config'; // Replace with your actual Firebase configuration file
export const AuthContext = createContext();
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();



const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
  
    const createUser = (email, password) => {
      setLoading(true);
      return createUserWithEmailAndPassword(auth, email, password);
    }

    const loginwithGoogle = () =>{
        setLoading(true);
        return signInWithPopup(auth, googleProvider);
    }

     const login = (email, password) => {
        setLoading(true);
          return signInWithEmailAndPassword(auth, email, password)
     }
      
     const logout = () =>{
        return signOut(auth);
     }

    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, currentUser =>{
            //console.log(currentUser);
            setUser(currentUser);
            setLoading(false);
        });
        return () =>{
            return unsubscribe();

        }
    }, [])
        
    const authInfo = {
        user,
      createUser,
      loginwithGoogle,
      loading,
      login,
      logout
    };
  
    return (
      <AuthContext.Provider value={authInfo}>
        {children}
      </AuthContext.Provider>
    );
  };

export default AuthProvider;
