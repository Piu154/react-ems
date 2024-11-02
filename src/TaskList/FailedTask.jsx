import React from 'react'
import FailedTaskModal from '../modals/FailedTaskModal'

const FailedTask = () => {
  const[isModalOpen,setIsModalOpen]=useState(false);
  const { taskSummary } = data || {};
  const handleModalOpen=()=>{
    setIsModalOpen((prev)=>!prev)
  }
  return (
   <>
   <div className='rounded-xl w-[45%] p-10 bg-green-400 cursor-pointer'onClick={handleModalOpen}>
    <h2 className='text-3xl font-semibold'>{taskSummary?.
failedTasks}</h2>
    <h3 className='text-xl font-medium'>Failed</h3>
    </div>
    <FailedTaskModal
      isOpen={isModalOpen}
      onClose={handleModalOpen}
      taskData={{title:'Completed'}}/>
      </>
  
  )
}

export default FailedTask
