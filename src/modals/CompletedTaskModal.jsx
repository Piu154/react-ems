import { Modal } from 'antd'
import React from 'react'

const CompletedTaskModal = ({isOpen,OnClose, taskData}) => {
  return (
    <Modal
   title={<span style={{color:'black'}}>{taskData?.title}</span>}
   open={isOpen}
   onCancel={OnClose}
   footer={null}
   maskClosable={true}
   >
  <p>Details for {<span style={{color:'black'}}>{taskData?.title}</span>}</p>
   </Modal>
  )
}

export default CompletedTaskModal
