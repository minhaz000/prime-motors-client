import React, { createContext, useEffect, useState } from 'react';
import axios from 'axios';
import app from '../firebase/firebase.config'
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut} from 'firebase/auth'
const RootContext = createContext()
function Context(props) {
  // sample HOST = 'http://localhost:5000'
  const HOST = 'http://localhost:5000'
  const [reload,SetReload]= useState(true)
  const [categories,SetCategories]= useState()
  const [user,setUser] = useState()
  const [userRole,setUserRole] = useState()
  const [loading,setLoading] = useState(true)
  const auth = getAuth(app) 
  const provider = new GoogleAuthProvider()
  const LogIn = (email,password)=>{
      setLoading(true) 
    return signInWithEmailAndPassword( auth ,email ,password )
  }
  const Register = (email,password)=>{
    setLoading(true) 
    return createUserWithEmailAndPassword(auth , email ,password)
  }
  const GoogleLogIN = ()=>{
      setLoading(true) 
      return signInWithPopup(auth,provider)
  }
  const LogOut = ()=>{
    return signOut(auth)
  }

useEffect(()=>{
const unSubscribe = ()=>{
  onAuthStateChanged(auth ,(currentUser)=>{
    setUser(currentUser) ; setLoading(false)
    axios.get(`${HOST}/get-user-role?email=${currentUser.email}`,{ headers : {"authorization":`Bearar ${localStorage.getItem('access-token')}` }} ).then( res=>{ setUserRole(res.data)})
  })
  axios.get(`${HOST}/categories`).then(res=>{
    SetCategories(res.data)
  })
 
}
return ()=> unSubscribe()
  
  },[])

  const  RootContextValue = {reload,SetReload,HOST,categories,user,loading,GoogleLogIN,LogIn,LogOut,Register,userRole}

  return (
  <RootContext.Provider value={RootContextValue}> 
    {props.children}
  </RootContext.Provider>
  );
}
export {RootContext} 
export default Context;