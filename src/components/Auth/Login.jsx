import React, { useState } from 'react';
import { MdEmail } from "react-icons/md";
import { RiLockPasswordLine } from "react-icons/ri";
import { FaEye } from "react-icons/fa";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
  // console.log(handleLogin);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [hiddenPassword, setHiddenPassword] = useState(true);

  const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/;

  const showPassword = () => {
    setHiddenPassword(!hiddenPassword);
  };

  const submitHandler = (e) => {
    e.preventDefault();

   

    // console.log("email is -->", email);
    // console.log("password is --->", password);

    handleLogin(email,password);
    setEmail('');
    setPassword('');
  };
  const handleLogin = (email, password) => {
    // Fetch existing users from localStorage or an empty array if no data exists
    const existingUsers = JSON.parse(localStorage.getItem('Users')) || [];
  
    // Log the existing users data
    console.log('Existing Users:', existingUsers);
  
    // Check if there are no users in localStorage
    if (existingUsers.length === 0) {
      console.log('No users found in localStorage');
      toast.error('No user found. Please sign up first.', {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        theme: "colored"
      });
      return; // Stop further processing if no users are found
    }
  
    // Log the email and password inputs
    console.log('Email entered:', email);
    console.log('Password entered:', password);
  
    // Find a user that matches both email and password
    const user = existingUsers.find(user => {
      console.log('Comparing email:', user.email, email);
      console.log('Comparing password:', user.password, password);
      return user.email === email && user.password === password;
    });
  
    // Log the user found (or undefined if not found)
    console.log('User found:', user); 
  
    // If no matching user is found, show an error message
    if (!user) {
      console.log('No matching user found.');
      toast.error('Invalid Credentials or No user found. Please sign up first.', {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        theme: "colored"
      });
      return; // Stop further processing if no matching user
    }
  
    // If user is found, show a success message
    console.log('Login successful for user:', user);
    toast.success('Login successful!', {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      theme: "colored"
    });
  
    // Optionally, you can redirect the user to a different page after successful login
    // window.location.href = '/dashboard';
  };
  
  

  return (
    <div className="flex min-h-screen min-w-full items-center justify-center bg-black">
      <div className="border-2 border-red-600 p-6 rounded-lg bg-black">
        <h2 className="text-center mb-4 font-bold text-xl">Log in</h2>
        <form className="flex flex-col gap-3" onSubmit={submitHandler}>
          <div className="flex flex-col">
            <label htmlFor="email" className="mb-1">Email:</label>
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
              />
            </div>
          </div>

          <div className="flex flex-col">
            <label htmlFor="password" className="mb-1">Password:</label>
            <div className="relative">
              {/* <RiLockPasswordLine className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" /> */}
              <FaEye
                className="absolute right-5 top-1/2 transform -translate-y-1/2 text-gray-500 cursor-pointer"
                onClick={showPassword}
              />
              <input
                id="password"
                type={hiddenPassword ? 'password' : 'text'}
                placeholder="Enter your password"
                value={password}
                required
                className="border-2 border-red-700 rounded-full p-2 pl-10 w-80 cursor-pointer hover:border-red-500 focus:outline-none transition duration-300 placeholder:text-white bg-black"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </div>

          <button className="border-2 border-red-600 rounded-full p-2 mt-2 cursor-pointer hover:border-red-400 focus:outline-none transition duration-300 bg-red-600" >
            Log in
          </button>

          <div className='flex items-center justify-between gap-8 mt-2'>
          <div className="flex items-center gap-2">
  <input type="checkbox" id="remember" className="cursor-pointer m-0 p-0 align-middle" />
  <p className="text-sm m-0 p-0">Remember Me</p>
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
