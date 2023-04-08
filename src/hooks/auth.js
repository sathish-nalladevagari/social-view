import { useTab, useToast } from "@chakra-ui/react";

import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { doc, getDoc, setDoc } from "firebase/firestore";
import { useEffect, useState } from "react";
import { useAuthState, useSignOut } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import { auth, db } from "../lib/firebase";
import { DASHBOARD, LOGIN } from "../lib/router";
import isUsernameExists from "../util/user-validate";

export function useAuth() {
    const [authUser, authLoading, error] = useAuthState(auth);
    const [isLoading, setLoading] = useState(true);
    const [user, setUser] = useState(null);
  
    useEffect(() => {
      async function fetchData() {
        setLoading(true);
        const ref = doc(db, "users", authUser.uid);
        
        const docSnap = await getDoc(ref);
        setUser(docSnap.data());
        console.log(user)
        setLoading(false);
      }
  
      if (!authLoading) {
        if (authUser) fetchData();
        else setLoading(false); // Not signed in
      }
    }, [authLoading]);
  
    return { user, isLoading, error };
  }

export function useLogin() {
  const [isLoading, setLoading] = useState(false);
  const toast = useToast();
  const navigate = useNavigate();

  async function login({ email, password, redirectTo = DASHBOARD }) {
    setLoading(true);
    try {
      await signInWithEmailAndPassword(auth, email, password);

      toast({
        title: "success login",
        status: "success",
        isClosable: true,
        position: "top",
        duration: 5000,
      });
      navigate(redirectTo);
    } catch (error) {
      toast({
        title: "Loggin fail",
        message: error.message,
        
        isClosable: true,
        position: "top",
        duration: 5000,
      });
      setLoading(false);
      return false;
    }
    setLoading(false);
    return true;
  }
  return { login, isLoading };
}

export  function useRegister() {
    const toast = useToast();
  const navigate = useNavigate()
  const [isLoading, setLoading] = useState(false);
  async function register({ username, email, password,redirectTo=DASHBOARD }) {
    setLoading(true);
    const userExits = await isUsernameExists(username);
    if (userExits) {
      toast({
        title: "User Exits",
        status: "Error",
        isClosable: true,
        position: "top",
        duration: 5000,
      });
    } else {
      try {
        
        const res = await createUserWithEmailAndPassword(auth, email, password);
       console.log(res)
        await setDoc(doc(db, "users", res.user.uid), {
          id: res.user.uid,
          username: username.toLowerCase(),
          avatar: "",
          date: Date.now(),
        });
        toast({
            title: "Successfully User Created",
            status: "success",
            isClosable: true,
            position: "top",
            duration: 5000,
        })
        navigate(redirectTo)
      } catch (error) {
        toast({
            title: "Error",
            status: "Error",
            isClosable: true,
            position: "top",
            duration: 5000,
        });
      }
      finally{
        setLoading(false);
      }
    }
  }
  return { register, isLoading };
}

export function useLogout() {
  const [signOut, isLoading, error] = useSignOut(auth);
  const toast = useToast();
  const navigate = useNavigate();

  async function logout() {
    if (await signOut()) {
      toast({
        title: "Successfully logged out",
        status: "success",
        isClosable: true,
        position: "top",
        duration: 5000,
      });
      navigate(LOGIN);
    } // else: show error [signOut() returns false if failed]
  }

  return { logout, isLoading };
}
