import React, { useContext, useEffect } from "react"
import Login from './components/Auth/Login'
import EmployeeDashboard from "./components/Dashboard/EmployeeDashboard"
import AdminDashboard from "./components/Dashboard/AdminDashboard"
import { getLocalStorage, setLocalStorage } from "./utils/LocalStorage"
import { AuthContext } from "./context/AuthContext"
import { toast } from "react-toastify"


function App() {

  const{user,setUser,userData}=useContext(AuthContext);
  console.log("userdata",userData);
useEffect(()=>{
  const { employeesData, adminData, jobCardsData } = getLocalStorage();
  if (!employeesData || !adminData || !jobCardsData) {
    setLocalStorage();
  }
},[])
const handleLogin=(email,password)=>{
  if( email == 'admin@me.com' && password=='12345@Piu'){
    // console.log('this is admin');
    setUser('admin');
    // console.log(user)
  }else if(userData && userData?.employeesData){
    const employee = userData?.employeesData?.find((e)=>email== e?.email && password == e?.password)
    console.log("employee",employee);
    if(employee){
      setUser('employee');
    }
    // console.log('this is employee');
    
    // console.log(user)
  }else{
    toast.error('Invalid Credentials', {
      position: "top-right",  
      autoClose: 3000,        
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      theme: "colored"         
    });
  }
}

// handleLogin('emp@me.com',456);
  return (
    <>
    {
      !user ? (
        <Login handleLogin={handleLogin
        }/>) :(
          user === 'admin' ? <AdminDashboard/> : <EmployeeDashboard/>
        )
      
    }
    {/* <Login/> */}
    {/* <EmployeeDashboard/> */}
    {/* <AdminDashboard/> */}
    </>
  )
}

export default App
