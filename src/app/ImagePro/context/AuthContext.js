"use client";
import React, { createContext, useContext, useState, useEffect } from "react";
import { auth } from "../../Firebase/firebase";
import { onAuthStateChanged } from "firebase/auth";

// Create AuthContext
export const AuthContext = createContext();

// Create AuthProvider component
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
      setLoading(false); // Set loading to false once the user state is set
    });

    return () => unsubscribe();
  }, []);

  return (
    <AuthContext.Provider value={user}>
      {!loading && children}
    </AuthContext.Provider>
  );
};

// Custom hook to use the AuthContext
export const useAuth = () => {
  return useContext(AuthContext);
};
