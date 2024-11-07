import React, { createContext, useEffect, useState } from 'react'

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
 
 
  // setUserData(getLocalStorage()) ;
  // console.log("data---->",data);
  const value={user,setUser};
  return(
    <AuthContext.Provider value={value} >
          {children}
    </AuthContext.Provider>
  )
}