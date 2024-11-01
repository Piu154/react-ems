import React, { useContext, useEffect } from "react"
import Login from './components/Auth/Login'
import EmployeeDashboard from "./components/Dashboard/EmployeeDashboard"
import AdminDashboard from "./components/Dashboard/AdminDashboard"
import { getLocalStorage, setLocalStorage } from "./utils/LocalStorage"
import { AuthContext } from "./context/AuthContext"
import { toast } from "react-toastify"


function App() {

  const{user,setUser,userData,setUserData,loggedInUserData,setLoggedInUserData}=useContext(AuthContext); //--->in user we get it's admin ot employee
//loggedInUserData--->we get the value of this user
  console.log("userdata",userData);
  console.log("user",user);
  useEffect(() => {
    const { employeesData, adminData, jobCardsData } = getLocalStorage();
    if (!employeesData?.length || !adminData?.length || !jobCardsData?.length) {
      setLocalStorage(); 
    }
   
    setUserData(getLocalStorage());
  }, []);


// useEffect(()=>{
//   if(userData){
//     const loggedInUser = localStorage.getItem('loggedInUser');
//     if(loggedInUser){
//       const user = JSON.parse(loggedInUser);  
//       setUser(user?.role); 
//      }
//   }
// },[userData]);
const handleLogin = (email, password) => {
  if (!userData) {
    console.log("userData is undefined. Check if data is loaded correctly.");
    return;
  }

  if (userData?.adminData) {
    const admin = userData.adminData.find((e) => email === e?.email && password === e?.password);
    if (admin) {
      setUser('admin');
      localStorage.setItem('loggedInUser', JSON.stringify({ role: 'admin' }));
      return;
    }
  }

  if (userData?.employeesData) {
    const employee = userData.employeesData.find((e) => email === e?.email && password === e?.password);
    console.log("employee",employee)
    if (employee) {
      setUser('employee');
      setLoggedInUserData(employee);
      // console.log("setLoggedInUserData",setLoggedInUserData);
      localStorage.setItem('loggedInUser', JSON.stringify({ role: 'employee' }));
      return;
    }
  }

  // If no matches found
  toast.error('Invalid Credentials', {
    position: "top-right",
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    theme: "colored"
  });
};

// handleLogin('emp@me.com',456);
  return (
    <>
    {
      !user ? (
        <Login handleLogin={handleLogin
        }/>) :(
          user === 'admin' ? <AdminDashboard/> : <EmployeeDashboard data={loggedInUserData}/>
        )
      
    }
    {/* <Login/> */}
    {/* <EmployeeDashboard/> */}
    {/* <AdminDashboard/> */}
    </>
  )
}

export default App
