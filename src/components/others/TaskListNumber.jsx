import React from 'react';
import NewTask from '../../TaskList/NewTask';
import AcceptTask from '../../TaskList/AcceptTask';
import CompleteTask from '../../TaskList/CompleteTask';
import FailedTask from '../../TaskList/FailedTask';


const TaskListNumber = ({data}) => {
  console.log("taskilistNumberdata",data);
  return (
   <>
   <div className="flex flex-wrap justify-between gap-5 mt-10">
   <NewTask data={data}/>
   <AcceptTask data={data}/>
   <CompleteTask data={data}/>
   <FailedTask data={data}/>
   </div>
  
   </>

  );
};

export default TaskListNumber;
