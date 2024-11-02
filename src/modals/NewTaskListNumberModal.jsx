import { Modal } from 'antd'
import React from 'react'

const NewTaskListNumberModal = ({isOpen,OnClose, taskData}) => {
   
  return (
    <Modal 
    title={<span style={{color:'black'}}>{taskData?.title}</span>}
    open={isOpen}
    onCancel={OnClose}
    footer={null}
    maskClosable={true}
    >
    <p>{<span style={{color:'black'}}>{taskData?.title}</span>}</p>
    </Modal>
  )
}

export default NewTaskListNumberModal
