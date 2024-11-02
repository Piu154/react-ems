import { Modal } from 'antd'
import React from 'react'

const AcceptedTaskModal = ({isOpen,onClose, taskData}) => {
  return (
   <Modal
   title={<span style={{color:'black'}}>{taskData?.title}</span>}
   open={isOpen}
   onCancel={onClose}
   footer={null}
   maskClosable={true}
   >
  <p>{<span style={{color:'black'}}>Details for {taskData?.title}</span>}</p>
   </Modal>
  )
}

export default AcceptedTaskModal
