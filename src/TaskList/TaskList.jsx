import { Button } from 'antd';
import React, { useEffect, useState } from 'react';
import TaskListModal from '../modals/TaskListModal';
import { getLocalStorage } from '../utils/LocalStorage';

const TaskList = ({ data }) => {
  const selectedEmployeeId = data.id;
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedTask, setSelectedTask] = useState({});
  const [filteredJobCards, setFilteredJobCards] = useState([]);

  const { employeesData, jobCardsData } = getLocalStorage();
  console.log("jobcardsdata", jobCardsData);
  console.log("employeesData", employeesData);

  const colorClasses = [
    'bg-red-400',
    'bg-blue-400',
    'bg-green-400',
    'bg-yellow-400',
    'bg-purple-400',
    'bg-pink-400',
    'bg-indigo-400',
    'bg-gray-400',
  ];

  const getRandomColor = () => {
    return colorClasses[Math.floor(Math.random() * colorClasses.length)];
  };

  useEffect(() => {
    let cardsToDisplay = jobCardsData;

    if (selectedEmployeeId) {
      cardsToDisplay = jobCardsData.filter(card =>
        card.assignedEmployeeIds.includes(selectedEmployeeId)
      );
    }


    const cardsWithColors = cardsToDisplay.map(card => ({
      ...card,
      backgroundColor: card.backgroundColor || getRandomColor(),
    }));

    setFilteredJobCards(cardsWithColors);
  }, [selectedEmployeeId]); 

  const handleModalOpen = (task = null) => {
    setIsModalOpen(prev => !prev);
    setSelectedTask(task);
  };

  return (
    <div
      id="tasklist"
      className="h-[58%] overflow-x-auto flex items-center justify-start gap-5 flex-nowrap py-5 w-full mt-10"
    >
      {filteredJobCards.length > 0 ? (
        filteredJobCards.map(card => (
          <div
            key={card.jobCardId}
            className={`flex-shrink-0 h-full w-[300px] p-5 rounded-xl ${card.backgroundColor}`}
          >
            <h2 className='text-2xl font-semibold'>{card.title}</h2>
            <p className='text-sm mt-2'>{card.description}</p>
            <p className='mt-2 text-sm'>
              Assigned: {card.assignedEmployeeIds.map(empId => {
                const employee = employeesData.find(emp => emp.id === empId);
                return employee ? employee.name.split(' ')[0] : 'Unknown';
              }).join(', ')}
            </p>
            <Button type="primary" className="mt-3" onClick={() => handleModalOpen(card)}>
              View Details
            </Button>
          </div>
        ))
      ) : (
        <p>No job cards found for the selected employee.</p>
      )}
      <TaskListModal
        isOpen={isModalOpen}
        task={selectedTask}
        onClose={() => handleModalOpen(null)}
      />
    </div>
  );
};

export default TaskList;
