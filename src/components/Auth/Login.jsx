import React, { useState } from 'react';
import { MdEmail } from "react-icons/md";
import { RiLockPasswordLine } from "react-icons/ri";
import { FaEye,FaEyeSlash } from "react-icons/fa";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  // console.log(handleLogin);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [hiddenPassword, setHiddenPassword] = useState(true);
  const navigate=useNavigate();
  const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/;

  const showPassword = () => {
    setHiddenPassword(!hiddenPassword);
  };

  const submitHandler = (e) => {
    e.preventDefault();


    handleLogin(email,password);
    setEmail('');
    setPassword('');
    setTimeout(()=>{
      navigate('/EmployeeDashboard');
    },2000);
   
  };
  const handleLogin = (email, password) => {
    
    const existingUsers = JSON.parse(localStorage.getItem('Users')) || [];
  

  
  
 
    const user = existingUsers.find(user => {
  
      return user.email === email && user.password === password;
    });
  

    if (!user) {
      console.log('No matching user found.');
      toast.error('Invalid Credentials or No user found. Please sign up first.', {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        
      });
      return; 
    }
  

   
    toast.success('Login successful!', {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      theme: "colored",
      style: { color: 'black', backgroundColor: 'white' }
      
    });
  
    
  };
  
  

  return (
    <div className="flex min-h-screen min-w-full items-center justify-center bg-black">
      <div className="border-2 border-red-600 p-6 rounded-lg bg-black">
        <h2 className="text-center mb-4 font-bold text-xl text-white">Log in</h2>
        <form className="flex flex-col gap-3" onSubmit={submitHandler}>
          <div className="flex flex-col">
            <label htmlFor="email" className="mb-1 text-white">Email:</label>
            <div className="relative">
              {/* <MdEmail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" /> */}
              <input
                id="email"
                type="email"
                placeholder="Enter your email"
                value={email}
                required
                className="border-2 border-red-700 rounded-full p-2 pl-10 w-80 cursor-pointer hover:border-red-500 focus:outline-none transition duration-300 placeholder:text-white bg-black text-white"
                onChange={(e) => setEmail(e.target.value)}
                autoComplete='off'
              />
            </div>
          </div>

          <div className="flex flex-col">
            <label htmlFor="password" className="mb-1 text-white">Password:</label>
            <div className="relative">
              {/* <RiLockPasswordLine className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" /> */
              }
              {
                hiddenPassword?(
                  <FaEye className="absolute right-5 top-1/2 transform -translate-y-1/2 text-gray-500 cursor-pointer" onClick={showPassword} />
                ):(
                  <FaEyeSlash className="absolute right-5 top-1/2 transform -translate-y-1/2 text-gray-500 cursor-pointer" onClick={showPassword} />
                )
              }

              <input
                id="password"
                type={hiddenPassword ? 'password' : 'text'}
                placeholder="Enter your password"
                value={password}
                required
                className="border-2 border-red-700 rounded-full p-2 pl-10 w-80 cursor-pointer hover:border-red-500 focus:outline-none transition duration-300 placeholder:text-white bg-black"
                onChange={(e) => setPassword(e.target.value)}
                autoCapitalize='off'
              />
            </div>
          </div>

          <button className="border-2 border-red-600 rounded-full p-2 mt-2 cursor-pointer hover:border-red-400 focus:outline-none transition duration-300 bg-red-600" >
            Log in
          </button>

          <div className='flex items-center justify-between gap-8 mt-2'>
          <div className="flex items-center gap-2">
  <input type="checkbox" id="remember" className="cursor-pointer m-0 p-0 align-middle" />
  <p className="text-sm m-0 p-0 text-white">Remember Me</p>
</div>

  <a href="#" className='text-blue-500 underline cursor-pointer text-sm'>
    Forgot Password?
  </a>
</div>

        </form>

        <ToastContainer />
      </div>
    </div>
  );
};

export default Login;
