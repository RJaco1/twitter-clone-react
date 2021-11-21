import React, { useState, useEffect } from "react";
import AuthContext from "./auth-context";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";
import { auth } from "../services/firebase";

const AuthProvided = (props) => {
  const [currentUser, setCurrenUser] = useState({});
  const [loadingUserInfo, setLoadingUserInfo] = useState(true);

  const register = async (email, password) => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
    } catch (error) {
      console.log(error)
    }
  };

  const login = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  const logout = () => {
    return signOut(auth);
  };

  useEffect(() => {
    let unsubscriber = onAuthStateChanged(auth, (user) => {
      setCurrenUser(user);
      setLoadingUserInfo(false);
    });
    return unsubscriber;
  }, []);

  const authContext = {
    currentUser,
    register,
    login,
    logout,
  };

  return (
    <AuthContext.Provider value={authContext}>
      {!loadingUserInfo && props.children}
    </AuthContext.Provider>
  );
};

export default AuthProvided;
