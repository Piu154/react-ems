import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from './context/AuthContext';
import SignUp from './components/Auth/SignUp';
import Login from './components/Auth/Login';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

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
    <Router>
      <Routes>
        <Route 
          path="/" 
          element={user ? <Navigate to="/home" /> : <SignUp />} 
        />
        <Route 
          path="/login" 
          element={<Login />} 
        />
        <Route 
          path="/home" 
          element={user ? <div>Welcome, you're logged in!</div> : <Navigate to="/login" />} 
        />
      </Routes>
    </Router>
  );
};

export default App;
