import React from 'react';
import { Modal } from 'antd';

const TaskListModal = ({ isOpen, task, onClose }) => {
  return (
    <Modal
      title={task?.title || "Task Details"}
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
