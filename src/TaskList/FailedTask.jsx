import React, { useState } from 'react'
import FailedTaskModal from '../modals/FailedTaskModal'

const FailedTask = ({data}) => {
  const[isModalOpen,setIsModalOpen]=useState(false);
  const { taskSummary } = data || {};
  const handleModalOpen=()=>{
    setIsModalOpen((prev)=>!prev)
  }
  return (
   <>
   <div className="rounded-xl w-[45%] py-6 px-9 bg-yellow-400 cursor-pointer"onClick={handleModalOpen}>
    <h2 className='text-3xl font-semibold'>{taskSummary?.
failedTasks}</h2>
    <h3 className='text-xl font-medium'>Failed</h3>
    </div>
    <FailedTaskModal
      isOpen={isModalOpen}
      onClose={handleModalOpen}
      taskData={{title:'Failed'}}/>
      </>
  
  )
}

export default FailedTask
