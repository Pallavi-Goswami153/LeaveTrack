// data.js

// Users: employee and admin
export const users = [
  {
    id: 1,
    name: "Pallavi Goswami",
    email: "employee@example.com",
    password: "12345", // plain text for mock login
    role: "employee"
  },
  {
    id: 2,
    name: "Admin User",
    email: "admin@example.com",
    password: "admin123",
    role: "admin"
  }
];

// Leave Balance for employees
export const leaveBalance = {
  casual: 5,
  sick: 3,
  earned: 10
};

// Leave History (for employees)
export let leaveHistory = [
  {
    id: 1,
    type: "Sick Leave",
    startDate: "2025-09-25",
    endDate: "2025-09-27",
    reason: "Fever and rest",
    status: "Pending",
    appliedBy: 1 // user id
  },
  {
    id: 2,
    type: "Casual Leave",
    startDate: "2025-08-10",
    endDate: "2025-08-11",
    reason: "Family function",
    status: "Approved",
    appliedBy: 1
  },
  {
    id: 3,
    type: "Earned Leave",
    startDate: "2025-07-15",
    endDate: "2025-07-18",
    reason: "Vacation",
    status: "Rejected",
    appliedBy: 1
  }
];
