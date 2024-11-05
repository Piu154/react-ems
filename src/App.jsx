import React, { useState } from 'react'
import SignUp from './components/Auth/SignUp';

const App = () => {
  const[user,setUser]=useState(null);
  const handleSignUp=(email,password)=>{
    setUser({email});
  }
  return (
    <div>
      <SignUp handleSignUp={handleSignUp}/>

     
    </div>
  )
}

export default App
