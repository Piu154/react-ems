import React, { useState } from 'react'
import AcceptedTaskModal from '../modals/AcceptedTaskModal';

const AcceptTask = ({data}) => {
  console.log("AcceptedTaskdata",data);
  const { taskSummary } = data || {};
  const[isModalOpen,setIsModalOpan]=useState(false);
  const handleModalOpen=()=>{
    setIsModalOpan((prev)=>!prev);
  }
  return (
   <>
   
      <div className='rounded-xl w-[45%] p-10 bg-blue-400 cursor-pointer'
      onClick={handleModalOpen}
      >
        <h2 className='text-3xl font-semibold'>{taskSummary?.
activeTasks
}</h2>
        <h3 className='text-xl font-medium'>In Progress</h3>
      </div>
      <AcceptedTaskModal 
      isOpen={isModalOpen}
      onClose={handleModalOpen}
      taskData={{title:'In Progress'}}
      />
   </>
  )
}

export default AcceptTask
