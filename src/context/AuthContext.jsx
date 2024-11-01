import React, { createContext, useEffect, useState } from 'react'
import {getLocalStorage} from '../utils/LocalStorage'
export const AuthContext = createContext();

// const AuthContext = () => {
//   return (
//     <div>
      
//     </div>
//   )
// }

// export default AuthContext
export const AuthProvider =({children})=>{
  const[user,setUser]=useState(null);
  const[userData,setUserData]=useState(null);
  const[loggedInUserData,setLoggedInUserData]=useState(null);
  useEffect(()=>{
    const{employeesData,adminData,jobCardsData}=getLocalStorage();
    setUserData({employeesData,adminData,jobCardsData});
  },[])
  // setUserData(getLocalStorage()) ;
  // console.log("data---->",data);
  const value={user,setUser,userData,setUserData,loggedInUserData,setLoggedInUserData};
  return(
    <AuthContext.Provider value={value} >
          {children}
    </AuthContext.Provider>
  )
}