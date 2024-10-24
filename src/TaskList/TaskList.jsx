import { Button } from 'antd';
import React, { useState } from 'react';
import TaskListModal from '../modals/TaskListModal';

const TaskList = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedTask, setselectedTask] = useState({});

  const tasks = [
    {
      id: 1,
      title: 'Make a EMP task-list',
      description: 'Lorem ipsum dolor sit amet consectetur...',
      date: '20 Feb 2024',
      priority: 'High',
      color: 'bg-red-400',
      content: { line1: 'Content for task 1.', line2: 'Additional info 1.' }
    },
    {
      id: 2,
      title: 'Prepare a report',
      description: 'Vel sunt neque dolore blanditiis...',
      date: '21 Feb 2024',
      priority: 'Medium',
      color: 'bg-green-400',
      content: { line1: 'Content for task 2.', line2: 'Additional info 2.' }
    },
    {
      id: 3,
      title: 'Design a dashboard',
      description: 'Dolore repudiandae nesciunt.',
      date: '22 Feb 2024',
      priority: 'High',
      color: 'bg-blue-400',
      content: { line1: 'Content for task 3.', line2: 'Additional info 3.' }
    },
    {
      id: 4,
      title: 'Changes In Dashboard',
      description: 'Dynamically render value and only one modal for every card.',
      date: '22 Feb 2024',
      priority: 'High',
      color: 'bg-yellow-400',
      content: { line1: 'Content for task 4.', line2: 'Additional info 4.' }
    },
    {
      id: 5,
      title: 'Learn to pass data',
      description: 'Learn to pass data and how to use map and all.',
      date: '22 Feb 2024',
      priority: 'Low',
      color: 'bg-red-400',
      content: { line1: 'Content for task 5.', line2: 'Additional info 5.' }
    },
  ];
  
  const handleModalOpan=(task=null)=>{
    setIsModalOpen((prev)=>!prev);
    setselectedTask(task);
  }

  return (
    <div
      id="tasklist"
      className="h-[58%] overflow-x-auto flex items-center justify-start gap-5 flex-nowrap py-5 w-full mt-10"
    >
      {tasks.length > 0 ? (
        tasks.map((task) => {
          // console.log('Task:', task); 
          return (
            <div
              key={task.id}
              className={`flex-shrink-0 h-full w-[300px] p-5 ${task?.color} rounded-xl`}
            >
              <div className="flex justify-between items-center">
                <h3 className="bg-red-600 px-3 py-1 rounded text-sm">
                  {task.priority}
                </h3>
                <h4 className="text-sm">{task?.date}</h4>
              </div>
              <h2 className="mt-5 text-2xl font-semibold">{task?.title}</h2>
              <p className="text-sm mt-2">{task?.description}</p>
              <Button type='primary' className='mt-3' onClick={()=>handleModalOpan(task)}>View Details</Button>
            </div>
           
          );
        })
      ) : null}
      <TaskListModal
      isOpen={isModalOpen}
      task={selectedTask}
      onClose={()=>handleModalOpan(null)}
      />
    </div>
  );
};

export default TaskList;
