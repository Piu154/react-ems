// Function to calculate task summary for each employee


// Job Cards define groups for task sharing among employees
const jobCards = [
  {
    jobCardId: 101,
    title: "Marketing",
    description: "Tasks related to marketing efforts",
    assignedEmployeeIds: [2, 3], // Employee IDs assigned to this job card
  },
  {
    jobCardId: 102,
    title: "Product Development",
    description: "Tasks related to product development",
    assignedEmployeeIds: [4, 5],
  },
  {
    jobCardId: 103,
    title: "Reporting",
    description: "Tasks related to reporting and documentation",
    assignedEmployeeIds: [1],
  },
  {
    jobCardId: 104,
    title: "Customer Service",
    description: "Tasks related to customer service and support",
    assignedEmployeeIds: [2, 5],
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
        taskPriority: "high"
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
        taskPriority: "medium"
      },
      {
        taskId: 3,
        jobCardId: 103,
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        title: "Inventory update",
        description: "Update stock levels in the system.",
        date: "2024-09-28",
        category: "Inventory",
        taskColor: "bg-yellow-400",
        taskPriority: "low"
      }
    ],
    taskSummary: {
      totalTasks: 3,
      activeTasks: 1,
      newTasks: 1,
      completedTasks: 1,
      failedTasks: 1
    }
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
        title: "Website redesign",
        description: "Implement the new website design.",
        date: "2024-10-05",
        category: "Design",
        taskColor: "bg-red-400",
        taskPriority: "high"
      },
      {
        taskId: 5,
        jobCardId: 101,
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        title: "Update social media",
        description: "Post scheduled content on social media platforms.",
        date: "2024-10-03",
        category: "Marketing",
        taskColor: "bg-blue-400",
        taskPriority: "medium"
      },
      {
        taskId: 6,
        jobCardId: 104,
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        title: "Handle customer complaints",
        description: "Address customer issues reported via email.",
        date: "2024-10-10",
        category: "Customer Service",
        taskColor: "bg-green-400",
        taskPriority: "low"
      },
      {
        taskId: 7,
        jobCardId: 104,
        active: false,
        newTask: true,
        completed: true,
        failed: false,
        title: "Handle customer Reviews",
        description: "Address customer Reviews reported via email.",
        date: "2024-10-10",
        category: "Customer Service",
        taskColor: "bg-yellow-400",
        taskPriority: "medium"
      }
      
    ],
    taskSummary: {
      totalTasks: 4,
      activeTasks: 2,
      newTasks: 2,
      completedTasks: 1,
      failedTasks: 0
    }
  },
  {
    id: 3,
    name: "Michael Johnson",
    email: "michael.johnson@example.com",
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
        title: "Social media strategy",
        description: "Plan content strategy for social media.",
        date: "2024-10-07",
        category: "Marketing",
        taskColor: "blue",
        taskPriority: "high"
      },
      {
        taskId: 9,
        jobCardId: 101,
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        title: "Campaign analysis",
        description: "Analyze recent campaign performance.",
        date: "2024-10-03",
        category: "Analytics",
        taskColor: "yellow",
        taskPriority: "medium"
      },
      {
        taskId: 10,
        jobCardId: 101,
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        title: "Press release preparation",
        description: "Draft and distribute press releases.",
        date: "2024-09-29",
        category: "PR",
        taskColor: "green",
        taskPriority: "low"
      }
    ],
    taskSummary: {
      totalTasks: 3,
      activeTasks: 2,
      newTasks: 1,
      completedTasks: 1,
      failedTasks: 0
    }
  },
  {
    id: 4,
    name: "Emily Davis",
    email: "emily.davis@example.com",
    password: "Password4!",
    jobCardIds: [102],
    tasks: [
      {
        taskId: 11,
        jobCardId: 102,
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        title: "Market research",
        description: "Analyze the latest market trends.",
        date: "2024-10-02",
        category: "Research",
        taskColor: "blue",
        taskPriority: "high"
      },
      {
        taskId: 12,
        jobCardId: 102,
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        title: "Product testing",
        description: "Test the latest product version.",
        date: "2024-09-30",
        category: "Product Development",
        taskColor: "purple",
        taskPriority: "medium"
      },
      {
        taskId: 13,
        jobCardId: 102,
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        title: "Budget planning",
        description: "Create a budget for the upcoming quarter.",
        date: "2024-09-23",
        category: "Finance",
        taskColor: "green",
        taskPriority: "low"
      }
    ],
    taskSummary: {
      totalTasks: 3,
      activeTasks: 2,
      newTasks: 1,
      completedTasks: 1,
      failedTasks: 0
    }
  },
  {
    id: 5,
    name: "William Brown",
    email: "william.brown@example.com",
    password: "Password5!",
    jobCardIds: [102, 104],
    tasks: [
      {
        taskId: 14,
        jobCardId: 102,
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        title: "Content creation",
        description: "Write blog posts for the company website.",
        date: "2024-10-06",
        category: "Content",
        taskColor: "blue",
        taskPriority: "high"
      },
      {
        taskId: 15,
        jobCardId: 102,
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        title: "Employee survey",
        description: "Analyze responses from the employee engagement survey.",
        date: "2024-09-27",
        category: "HR",
        taskColor: "red",
        taskPriority: "medium"
      },
      {
        taskId: 16,
        jobCardId: 104,
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        title: "Customer feedback analysis",
        description: "Review customer feedback for improvements.",
        date: "2024-10-01",
        category: "Customer Service",
        taskColor: "green",
        taskPriority: "low"
      }
    ],
    taskSummary: {
      totalTasks: 3,
      activeTasks: 1,
      newTasks: 1,
      completedTasks: 1,
      failedTasks: 1
    }
  }
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

// Initial setup to populate local storage (optional)
setLocalStorage();
