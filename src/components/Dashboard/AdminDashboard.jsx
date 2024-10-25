import AllTask from '../others/AllTAsk'
import CreateTask from '../others/CreateTask'
import Header from '../others/Header'
import React from 'react'

const AdminDashboard = () => {
  return (
    <div className='h-screen w-full p-7'>
      <Header/>
      <CreateTask/>
      <AllTask/>
    </div>
  )
}

export default AdminDashboard
