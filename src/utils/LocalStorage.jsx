// Job Cards define groups for task sharing among employees
const jobCards = [
  {
    jobCardId: 101,
    title: "Marketing",
    description: "Tasks related to marketing efforts",
    assignedEmployeeIds: [2, 3],
    taskIds: [4, 6], // Tasks associated with this job card
  },
  {
    jobCardId: 102,
    title: "Product Development",
    description: "Tasks related to product development",
    assignedEmployeeIds: [4, 5],
    taskIds: [7], // Tasks associated with this job card
  },
  {
    jobCardId: 103,
    title: "Reporting",
    description: "Tasks related to reporting and documentation",
    assignedEmployeeIds: [1],
    taskIds: [1, 2], // Tasks associated with this job card
  },
  {
    jobCardId: 104,
    title: "Customer Service",
    description: "Tasks related to customer service and support",
    assignedEmployeeIds: [2, 5],
    taskIds: [5, 8], // Tasks associated with this job card
  },
];

// Employees with individual tasks and associated job cards
const employees = [
  {
    id: 1,
    name: "John Doe",
    email: "john.doe@example.com",
    password: "Password1!",
    jobCardIds: [103],
    tasks: [
      {
        taskId: 1,
        jobCardId: 103,
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        title: "Prepare monthly report",
        description: "Compile and summarize monthly sales data.",
        date: "2024-10-01",
        category: "Reporting",
        taskColor: "bg-red-400",
        taskPriority: "high",
        assignedJobCardDetails: {
          jobCardId: 103,
          title: "Reporting",
          description: "Tasks related to reporting and documentation",
        },
      },
      {
        taskId: 2,
        jobCardId: 103,
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        title: "Client follow-up",
        description: "Follow up with potential clients.",
        date: "2024-09-25",
        category: "Communication",
        taskColor: "bg-green-400",
        taskPriority: "medium",
        assignedJobCardDetails: {
          jobCardId: 103,
          title: "Reporting",
          description: "Tasks related to reporting and documentation",
        },
      },
      {
        taskId: 3,
        jobCardId: 103,
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        title: "Analyze competitor performance",
        description: "Research and analyze competitor marketing strategies.",
        date: "2024-10-05",
        category: "Marketing",
        taskColor: "bg-yellow-400",
        taskPriority: "low",
        assignedJobCardDetails: {
          jobCardId: 103,
          title: "Reporting",
          description: "Tasks related to reporting and documentation",
        },
      },
    ],
    taskSummary: {
      totalTasks: 3,
      activeTasks: 2,
      newTasks: 2,
      completedTasks: 1,
      failedTasks: 0,
    },
  },
  {
    id: 2,
    name: "Jane Smith",
    email: "jane.smith@example.com",
    password: "Password2!",
    jobCardIds: [101, 104],
    tasks: [
      {
        taskId: 4,
        jobCardId: 101,
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        title: "Social media campaign",
        description: "Launch a new campaign across social media platforms.",
        date: "2024-10-10",
        category: "Marketing",
        taskColor: "bg-blue-400",
        taskPriority: "high",
        assignedJobCardDetails: {
          jobCardId: 101,
          title: "Marketing",
          description: "Tasks related to marketing efforts",
        },
      },
      {
        taskId: 5,
        jobCardId: 104,
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        title: "Customer feedback analysis",
        description: "Review and analyze customer feedback from surveys.",
        date: "2024-09-28",
        category: "Customer Service",
        taskColor: "bg-green-400",
        taskPriority: "medium",
        assignedJobCardDetails: {
          jobCardId: 104,
          title: "Customer Service",
          description: "Tasks related to customer service and support",
        },
      },
      {
        taskId: 6,
        jobCardId: 101,
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        title: "Marketing strategy review",
        description: "Review and update the current marketing strategy.",
        date: "2024-10-18",
        category: "Strategy",
        taskColor: "bg-purple-400",
        taskPriority: "high",
        assignedJobCardDetails: {
          jobCardId: 101,
          title: "Marketing",
          description: "Tasks related to marketing efforts",
        },
      },
      {
        taskId: 7,
        jobCardId: 104,
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        title: "Customer support training",
        description: "Conduct training for new customer support agents.",
        date: "2024-10-20",
        category: "Customer Service",
        taskColor: "bg-red-400",
        taskPriority: "medium",
        assignedJobCardDetails: {
          jobCardId: 104,
          title: "Customer Service",
          description: "Tasks related to customer service and support",
        },
      },
    ],
    taskSummary: {
      totalTasks: 4,
      activeTasks: 3,
      newTasks: 3,
      completedTasks: 1,
      failedTasks: 0,
    },
  },
  {
    id: 3,
    name: "Mike Johnson",
    email: "mike.johnson@example.com",
    password: "Password3!",
    jobCardIds: [101],
    tasks: [
      {
        taskId: 8,
        jobCardId: 101,
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        title: "Email marketing setup",
        description: "Set up email marketing tools for the campaign.",
        date: "2024-10-12",
        category: "Marketing",
        taskColor: "bg-purple-400",
        taskPriority: "high",
        assignedJobCardDetails: {
          jobCardId: 101,
          title: "Marketing",
          description: "Tasks related to marketing efforts",
        },
      },
    ],
    taskSummary: {
      totalTasks: 1,
      activeTasks: 1,
      newTasks: 1,
      completedTasks: 0,
      failedTasks: 0,
    },
  },
  {
    id: 4,
    name: "Emily Davis",
    email: "emily.davis@example.com",
    password: "Password4!",
    jobCardIds: [102],
    tasks: [
      {
        taskId: 9,
        jobCardId: 102,
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        title: "Develop new product prototype",
        description: "Create a prototype for the new product.",
        date: "2024-10-15",
        category: "Development",
        taskColor: "bg-red-400",
        taskPriority: "high",
        assignedJobCardDetails: {
          jobCardId: 102,
          title: "Product Development",
          description: "Tasks related to product development",
        },
      },
    ],
    taskSummary: {
      totalTasks: 1,
      activeTasks: 1,
      newTasks: 1,
      completedTasks: 0,
      failedTasks: 0,
    },
  },
  {
    id: 5,
    name: "David Lee",
    email: "david.lee@example.com",
    password: "Password5!",
    jobCardIds: [104],
    tasks: [
      {
        taskId: 10,
        jobCardId: 104,
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        title: "Handle customer inquiries",
        description: "Respond to customer inquiries and provide support.",
        date: "2024-10-17",
        category: "Customer Service",
        taskColor: "bg-blue-400",
        taskPriority: "medium",
        assignedJobCardDetails: {
          jobCardId: 104,
          title: "Customer Service",
          description: "Tasks related to customer service and support",
        },
      },
    ],
    taskSummary: {
      totalTasks: 1,
      activeTasks: 1,
      newTasks: 1,
      completedTasks: 0,
      failedTasks: 0,
    },
  },
];





// Admins with rights to create and assign job cards
const admin = [
  {
    id: 1,
    name: "Alice Green",
    email: "admin1@example.com",
    password: "AdminPass1!", // Example of a secure password
  },
  {
    id: 2,
    name: "Bob White",
    email: "admin2@example.com",
    password: "AdminPass2!", // Example of a secure password
  },
  {
    id: 3,
    name: "Carol Black",
    email: "admin3@example.com",
    password: "AdminPass3!", // Example of a secure password
  },
];

// Functions to set and get data in localStorage
export const setLocalStorage = () => {
  localStorage.setItem('employees', JSON.stringify(employees));
  localStorage.setItem('admin', JSON.stringify(admin));
  localStorage.setItem('jobCards', JSON.stringify(jobCards));
};

export const getLocalStorage = () => {
  const employeesData = JSON.parse(localStorage.getItem('employees'));
  const jobCardsData = JSON.parse(localStorage.getItem('jobCards'));
  const adminData = JSON.parse(localStorage.getItem('admin'));

  return { employeesData, jobCardsData, adminData };
};

