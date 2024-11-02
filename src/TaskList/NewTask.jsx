import React,{ useState } from 'react'
import NewTaskListNumberModal from '../modals/NewTaskListNumberModal';
const NewTask = ({data}) => {
  console.log("NewTasktasklistnuberdata", data);
  
 
  const { taskSummary } = data || {};
  const[isModalOpen,setIsModalOpan]=useState(false);
  const handleOpenModal=()=>{
    setIsModalOpan((prev)=>!prev);
  }
  return (
    <>
      <div className="rounded-xl w-[45%] p-10 bg-red-400 cursor-pointer" 
      onClick={handleOpenModal}
      >
        <h2 className="text-3xl font-semibold">{taskSummary?.newTasks}</h2>
        <h3 className="text-xl font-medium">New Task</h3>
      </div>
      
      <NewTaskListNumberModal
      isOpen={isModalOpen}
      onClose={handleOpenModal}
      taskData={{title:'New Task'}}
      />
    </>
  )
}

export default NewTask
