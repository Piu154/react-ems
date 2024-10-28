import React, { createContext, useState } from 'react'

export const TaskContext = createContext();

// const AuthContext = () => {
//   return (
//     <div>
      
//     </div>
//   )
// }

// export default AuthContext
export const TaskProvider =()=>{
  
  return(
    <TaskContext.Provider >

    </TaskContext.Provider>
  )
}