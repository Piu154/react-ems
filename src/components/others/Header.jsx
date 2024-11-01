import React from 'react'

const Header = ({data}) => {
  console.log("data--->",data);
  return (
    <div className=' py-1 '>
      <div className='flex items-center justify-between p-4 mb-4 '>
        <div>
        <h1 className='text-lg'>Hello</h1>
        <p className='text-lg font-medium'>{data?.name}🖐️</p>
        </div>
        <button className='bg-red-600 rounded text-white px-4 py-2 hover:bg-red-500'>Logout</button>
      </div>
      
    </div>
  )
}

export default Header
