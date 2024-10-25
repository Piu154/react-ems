import React from 'react';
import { Modal } from 'antd';

const TaskListModal = ({ isOpen, task, onClose }) => {
  console.log("task",task);
  return (
    <Modal
      title={task?.title} 
      open={isOpen}
      onCancel={onClose}
      footer={null} 
    >
 <p style={{ color: 'red' }}>1. {task?.content?.line1}</p>
          <p style={{ color: 'blue' }}>2. {task?.content?.line2}</p>
    </Modal>
  );
};

export default TaskListModal;
