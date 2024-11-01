import { Button } from 'antd';
import React, { useState } from 'react';
import TaskListModal from '../modals/TaskListModal';

const TaskList = ({ data }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedTask, setSelectedTask] = useState({});

  const handleModalOpen = (task = null) => {
    setIsModalOpen((prev) => !prev);
    setSelectedTask(task);
  };

  return (
    <div
      id="tasklist"
      className="h-[58%] overflow-x-auto flex items-center justify-start gap-5 flex-nowrap py-5 w-full mt-10"
    >
      {data.tasks && data.tasks.length > 0 ? (
        data.tasks.map((task) => (
          <div
            key={task.taskId}
            className={`flex-shrink-0 h-full w-[300px] p-5 ${task.taskColor} rounded-xl`}
          >
            <div className="flex justify-between items-center">
              <h3 className="bg-red-600 px-3 py-1 rounded text-sm">
                {task?.taskPriority}
              </h3>
              <h4 className="text-sm">{task?.date}</h4>
            </div>
            <h2 className="mt-5 text-2xl font-semibold">{task?.title}</h2>
            <p
              className="text-sm mt-2 truncate"
              style={{
                minWidth: '250px',       
                maxWidth: '250px',       
                overflow: 'hidden',      
                textOverflow: 'ellipsis' 
              }}
            >
              {task?.description}
            </p>
            <Button type="primary" className="mt-3" onClick={() => handleModalOpen(task)}>
              View Details
            </Button>
          </div>
        ))
      ) : null}
      <TaskListModal
        isOpen={isModalOpen}
        task={selectedTask}
        onClose={() => handleModalOpen(null)}
      />
    </div>
  );
};

export default TaskList;
