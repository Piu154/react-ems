import { Button } from 'antd';
import React, { useEffect, useState } from 'react';
import TaskListModal from '../modals/TaskListModal';
import { getLocalStorage } from '../utils/LocalStorage';

const TaskList = ({ data }) => {
  const selectedEmployeeId= data.id;
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedTask, setSelectedTask] = useState({});
  const[filteredJobCards,setFilteredJobCards]=useState([]);

  const { employeesData,  jobCardsData } = getLocalStorage();
  console.log("jobcardsdata",jobCardsData);
  console.log("employeesData",employeesData);

  useEffect(()=>{
    const filteredJobCards=()=>{
      let cardsToDisplay=jobCardsData;
      if(selectedEmployeeId){
        cardsToDisplay = jobCardsData.filter(card=>card.assignedEmployeeIds.includes(selectedEmployeeId));
        setFilteredJobCards(cardsToDisplay);
      }else{
        setFilteredJobCards(jobCardsData);
      }
    }
    filteredJobCards();
  },[selectedEmployeeId]);

  const handleModalOpen = (task = null) => {
    setIsModalOpen((prev) => !prev);
    setSelectedTask(task);
  };

  return (
    <div
      id="tasklist"
      className="h-[58%] overflow-x-auto flex items-center justify-start gap-5 flex-nowrap py-5 w-full mt-10"
    >
     {
      filteredJobCards.length>0?(
          filteredJobCards.map(card=>(
            <div key={card.jobCardId} className='flex-shrink-0 h-full w-[300px] p-5 bg-gray-200 rounded-xl'>
              <h2 className='text-2xl font=semibold'>{card.title}</h2>
              <p className='text-sm mt-2'>{card.description}</p>
              <p className='mt-2 text-sm'>
                Assigned Employees:{card.assignedEmployeeIds.map(empId=>{
                  const employee= employeesData.find(emp=>emp.id==empId);
                  return employee?employee.name:'Unknown';
                }).join(',')}
              </p>
              <Button type="primary" className="mt-3" onClick={() => handleModalOpen(card)}>
              View Details
            </Button>
            </div>
          ))
      ):(
        <p>No job cards found for the selected employee.</p>
      )
     }
      <TaskListModal
        isOpen={isModalOpen}
        task={selectedTask}
        onClose={() => handleModalOpen(null)}
      />
    </div>
  );
};

export default TaskList;
