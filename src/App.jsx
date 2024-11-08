import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from './context/AuthContext';


const App = () => {
  const { user, setUser } = useContext(AuthContext);
  const[loading,setLoading]=useState(true);

  useEffect(() => {
    const existingUser = JSON.parse(localStorage.getItem('Users'));
    if (existingUser && existingUser.userId) {
      setUser(existingUser);
    }
    setLoading(false);
  }, [setUser]);
  if(loading) return <div>Loading...</div>
 
  return (
   <>
   </>
  );
};

export default App;
