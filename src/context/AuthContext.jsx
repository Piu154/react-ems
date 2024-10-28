import React, { createContext, useState } from 'react'

export const AuthContext = createContext();

// const AuthContext = () => {
//   return (
//     <div>
      
//     </div>
//   )
// }

// export default AuthContext
export const AuthProvider =()=>{
  const[user,setUser]=useState(null);
  return(
    <AuthContext.Provider >

    </AuthContext.Provider>
  )
}