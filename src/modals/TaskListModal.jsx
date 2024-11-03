import React from 'react';
import { Modal } from 'antd';

const TaskListModal = ({ isOpen, task = [], onClose }) => {
  return (
    <Modal title="Task Details" open={isOpen} onCancel={onClose} footer={null}>
      {task.length > 0 ? (
        task.map((taskItem, index) => (
          <div key={index} className="task-item" style={{ color: '#000' }}>
            <h3 style={{ fontWeight: 'bold', color: '#000' }}>{taskItem.title}</h3>
            <p style={{color:'black'}}>{taskItem.description}</p>
            <p style={{color:'black'}}>Priority: {taskItem.taskPriority}</p>
            <p style={{color:'black'}}>Due Date: {taskItem.date}</p>
          </div>
        ))
      ) : (
        <p style={{ color: '#000' }}>No tasks assigned for this job card.</p>
      )}
    </Modal>
  );
};

export default TaskListModal;
