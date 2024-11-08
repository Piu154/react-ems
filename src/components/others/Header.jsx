import React, { useContext } from 'react';
import { AuthContext } from '../../context/AuthContext';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const { setUser } = useContext(AuthContext);
  const navigate = useNavigate();
  

  const handleLogOut = () => {
    setUser(null);
    navigate('/Login');
  };

  return (
    <div className='py-1'>
      <div className='flex items-center justify-between p-4 mb-4'>
        <div>
          <h1 className='text-lg'>Hello</h1>
          <p className='text-lg font-medium'>🖐️</p>
        </div>
        <button className='bg-red-600 rounded text-white px-4 py-2 hover:bg-red-500' onClick={handleLogOut}>
          Logout
        </button>
      </div>
    </div>
  );
};

export default Header;
