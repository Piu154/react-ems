import React from 'react'
import Header from './others/Header'
import { Outlet,useLocation  } from 'react-router-dom'

const Layout = () => {
  const location = useLocation();
  const hiddenRoutes=['/signup','/Login'];
  return (
    <>
    {
     !hiddenRoutes.includes(location.pathname) && <Header/> 
    }
      
      <Outlet/>
    </>
  )
}

export default Layout
