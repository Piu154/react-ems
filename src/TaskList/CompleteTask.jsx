import React, { useState } from 'react'
import CompletedTaskModal from '../modals/CompletedTaskModal'

const CompleteTask = ({data}) => {
  const[isModalOpen,setIsModalOpen]=useState(false);
  const { taskSummary } = data || {};
  const handleModalOpen=()=>{
    setIsModalOpen((prev)=>!prev)
  }
  return (
    <>
    <div className="rounded-xl w-[45%] py-6 px-9 bg-green-400 cursor-pointer" onClick={handleModalOpen}>
    <h2 className='text-3xl font-semibold'>{taskSummary?.
completedTasks}</h2>
    <h3 className='text-xl font-medium'>Completed</h3>
    </div>
    <CompletedTaskModal
      isOpen={isModalOpen}
      onClose={handleModalOpen}
      taskData={{title:'Completed'}}
    />
    </>
  )
}

export default CompleteTask
