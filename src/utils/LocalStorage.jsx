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
    email: "john.doe@example.com",
    password: "Password1!", // Example of a secure password
    jobCardIds: [103], // Job cards assigned to this employee
    tasks: [
      {
        jobCardId: 103,
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        title: "Prepare monthly report",
        description: "Compile and summarize monthly sales data.",
        date: "2024-10-01",
        category: "Reporting",
      },
      {
        jobCardId: 103,
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        title: "Client follow-up",
        description: "Follow up with potential clients.",
        date: "2024-09-25",
        category: "Communication",
      },
      {
        jobCardId: 103,
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        title: "Inventory update",
        description: "Update stock levels in the system.",
        date: "2024-09-28",
        category: "Inventory",
      }
    ],
  },
  {
    id: 2,
    email: "jane.smith@example.com",
    password: "Password2!", // Example of a secure password
    jobCardIds: [101, 104], // Assigned to Marketing and Customer Service job cards
    tasks: [
      {
        jobCardId: 101,
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        title: "Website redesign",
        description: "Implement the new website design.",
        date: "2024-10-05",
        category: "Design",
      },
      {
        jobCardId: 101,
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        title: "Update social media",
        description: "Post scheduled content on social media platforms.",
        date: "2024-10-03",
        category: "Marketing",
      },
      {
        jobCardId: 104,
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        title: "Handle customer complaints",
        description: "Address customer issues reported via email.",
        date: "2024-10-10",
        category: "Customer Service",
      }
    ],
  },
  {
    id: 3,
    email: "michael.johnson@example.com",
    password: "Password3!", // Example of a secure password
    jobCardIds: [101], // Assigned to Marketing job card
    tasks: [
      {
        jobCardId: 101,
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        title: "Social media strategy",
        description: "Plan content strategy for social media.",
        date: "2024-10-07",
        category: "Marketing",
      },
      {
        jobCardId: 101,
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        title: "Campaign analysis",
        description: "Analyze recent campaign performance.",
        date: "2024-10-03",
        category: "Analytics",
      },
      {
        jobCardId: 101,
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        title: "Press release preparation",
        description: "Draft and distribute press releases.",
        date: "2024-09-29",
        category: "PR",
      }
    ],
  },
  {
    id: 4,
    email: "emily.davis@example.com",
    password: "Password4!", // Example of a secure password
    jobCardIds: [102], // Assigned to Product Development job card
    tasks: [
      {
        jobCardId: 102,
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        title: "Market research",
        description: "Analyze the latest market trends.",
        date: "2024-10-02",
        category: "Research",
      },
      {
        jobCardId: 102,
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        title: "Product testing",
        description: "Test the latest product version.",
        date: "2024-09-30",
        category: "Product Development",
      },
      {
        jobCardId: 102,
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        title: "Budget planning",
        description: "Create a budget for the upcoming quarter.",
        date: "2024-09-23",
        category: "Finance",
      }
    ],
  },
  {
    id: 5,
    email: "william.brown@example.com",
    password: "Password5!", // Example of a secure password
    jobCardIds: [102, 104], // Assigned to Product Development and Customer Service job cards
    tasks: [
      {
        jobCardId: 102,
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        title: "Content creation",
        description: "Write blog posts for the company website.",
        date: "2024-10-06",
        category: "Content",
      },
      {
        jobCardId: 102,
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        title: "Employee survey",
        description: "Analyze responses from the employee engagement survey.",
        date: "2024-09-24",
        category: "HR",
      },
      {
        jobCardId: 104,
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        title: "Customer support training",
        description: "Train team on customer support best practices.",
        date: "2024-10-01",
        category: "Training",
      }
    ],
  },
];

// Admin with rights to create and assign job cards
const admin = [
  {
    id: 1,
    email: "admin@example.com",
    password: "AdminPass1!", // Example of a secure password
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

  // console.log("Employees:", employeesData);
  // console.log("Job Cards:", jobCardsData);
  // console.log("Admin:", adminData);
  return {employeesData,jobCardsData,adminData}
};
