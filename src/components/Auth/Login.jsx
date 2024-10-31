import React, { useState } from 'react';
import { MdEmail } from "react-icons/md";
import { RiLockPasswordLine } from "react-icons/ri";
import { FaEye } from "react-icons/fa";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = ({handleLogin}) => {
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

    if (!passwordRegex.test(password)) {
      toast.error('Password must be at least 8 characters long, contain one uppercase, one lowercase letter, one digit, and one special character.', {
        position: "top-right",  
        autoClose: 3000,        
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        theme: "colored"         
      });
      return;
    }

    // console.log("email is -->", email);
    // console.log("password is --->", password);

    handleLogin(email,password);
    setEmail('');
    setPassword('');
  };
  // const handleLogin=(e,p)=>{
  //   if( e == 'admin@me.com' && p=='123'){
  //     console.log('this is admin');
  //   }else if(e=='emp@me.com' && p == '456789@Piu'){
  //     console.log('this is employee');
  //   }else{
  //     toast.error('Invalid Credentials', {
  //       position: "top-right",  
  //       autoClose: 3000,        
  //       hideProgressBar: false,
  //       closeOnClick: true,
  //       pauseOnHover: true,
  //       draggable: true,
  //       theme: "colored"         
  //     });
  //   }
  // }

  return (
    <div className="flex min-h-screen min-w-full items-center justify-center">
      <div className="border-2 border-red-600 p-6 rounded-lg">
        <h2 className="text-center mb-4 font-bold text-xl">Log in</h2>
        <form className="flex flex-col gap-3" onSubmit={submitHandler}>
          <div className="flex flex-col">
            <label htmlFor="email" className="mb-1">Email:</label>
            <div className="relative">
              <MdEmail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
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
              <RiLockPasswordLine className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
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
            <div className='flex items-center gap-2'>
              <input type="checkbox" id='remember' className='cursor-pointer' />
              <p className='text-sm'>Remember Me</p>
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
