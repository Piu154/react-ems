import React, { useState } from 'react';
// import { MdEmail } from "react-icons/md";
// import { RiLockPasswordLine } from "react-icons/ri";
import { FaEye, FaEyeSlash } from "react-icons/fa"; 
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';

const SignUp = ({ handleSignUp }) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [hiddenPassword, setHiddenPassword] = useState(true);

    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/;

    const showPassword = () => {
        setHiddenPassword(!hiddenPassword);
    };

    const submitHandler = (e) => {
        console.log("e---->",e);
;        e.preventDefault();

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

        const uniqueUserId = Date.now();
        const newUser = {
            id: uniqueUserId,
            name,
            email,
            password
        };
        const existingUsers = JSON.parse(localStorage.getItem('Users')) || [];
        existingUsers.push(newUser);
        localStorage.setItem('Users', JSON.stringify(existingUsers));

        handleSignUp(email, password,uniqueUserId);
        toast.success('User registered successfully!', {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            theme: "colored",
        });
        setName('');
        setEmail('');
        setPassword('');
    };

    return (
        <div className="flex min-h-screen min-w-full items-center justify-center bg-black">
            <div className="border-2 border-red-600 p-6 rounded-lg bg-black">
                <h2 className="text-center mb-4 font-bold text-xl text-white">Sign Up</h2>
                <form className="flex flex-col gap-3" onSubmit={submitHandler}>
                    <div className="flex flex-col">
                        <label htmlFor="name" className="mb-1 text-white">Name:</label>
                        <div className="relative">
                            <input
                                id="name"
                                type="text"
                                placeholder="Enter your name"
                                value={name}
                                required
                                className="border-2 border-red-700 rounded-full p-2 pl-10 w-full min-w-[250px] max-w-[400px] cursor-pointer hover:border-red-500 focus:outline-none transition duration-300 placeholder:text-white bg-black text-white"
                                onChange={(e) => setName(e.target.value)}
                            />
                        </div>
                    </div>

                    <div className="flex flex-col">
                        <label htmlFor="email" className="mb-1 text-white">Email:</label>
                        <div className="relative">
                            {/* <MdEmail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 mr-2" /> */}
                            <input
                                id="email"
                                type="email"
                                placeholder="Enter your email"
                                value={email}
                                required
                                className="border-2 border-red-700 rounded-full p-2 pl-10 w-full min-w-[250px] max-w-[400px] cursor-pointer hover:border-red-500 focus:outline-none transition duration-300 placeholder:text-white bg-black text-white"
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>
                    </div>

                    <div className="flex flex-col">
                        <label htmlFor="password" className="mb-1 text-white">Password:</label>
                        <div className="relative">
                            {/* <RiLockPasswordLine className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 mr-2" />  */}
                            {hiddenPassword ? (
                                <FaEye className="absolute right-5 top-1/2 transform -translate-y-1/2 text-gray-500 cursor-pointer" onClick={showPassword} />
                            ) : (
                                <FaEyeSlash className="absolute right-5 top-1/2 transform -translate-y-1/2 text-gray-500 cursor-pointer" onClick={showPassword} />
                            )}
                            <input
                                id="password"
                                type={hiddenPassword ? 'password' : 'text'}
                                placeholder="Enter your password"
                                value={password}
                                required
                                className="border-2 border-red-700 rounded-full p-2 pl-10 w-full min-w-[250px] max-w-[400px] cursor-pointer hover:border-red-500 focus:outline-none transition duration-300 placeholder:text-white bg-black"
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>
                    </div>

                    <button className="border-2 border-red-600 rounded-full p-2 mt-2 cursor-pointer hover:border-red-400 focus:outline-none transition duration-300 bg-red-600 text-white">
                        Sign Up
                    </button>
                    <p className='mt-4 text-center text-white'>
                        Already have an account?{" "}
                        <Link to="/Login" className='text-blue-500 cursor-pointer hover:underline'>
                            Logeed in 
                        </Link>
                    </p>
                </form>

                <ToastContainer />
            </div>
        </div>
    );
};

export default SignUp;
