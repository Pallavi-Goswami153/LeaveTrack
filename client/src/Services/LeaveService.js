import { leaveBalance, leaveHistory, users } from "../../public/data";

// Service to handle leave operations
export const LeaveService = {

  // Check if the login credentials match any user
  login(email, password) {
    const user = users.find(u => u.email === email && u.password === password);
    return user || null;
  },

  // Get leave balances for all users
  getLeaveBalance() {
    return leaveBalance;
  },

  // Apply for leave (for employees)
  applyLeave(leave, userId) {
    const newLeave = {
      id: leaveHistory.length + 1,
      ...leave,
      status: "Pending",
      appliedBy: userId
    };
    leaveHistory.push(newLeave);
    return newLeave;
  },

  // Approve a pending leave (admin panel)
  approveLeave(id) {
    const leave = leaveHistory.find(l => l.id === id);
    if (leave) leave.status = "Approved";
    return leave;
  },

  // Reject a pending leave (admin panel)
  rejectLeave(id) {
    const leave = leaveHistory.find(l => l.id === id);
    if (leave) leave.status = "Rejected";
    return leave;
  },

  // Get all leave requests (admin panel)
  getLeaveHistory() {
    return leaveHistory;
  },

  // Get leave history for a specific employee
  getLeaveHistoryByUser(userId) {
    return leaveHistory.filter(l => l.appliedBy === userId);
  },

  // Get user details by ID
  getUserById(id) {
    return users.find(u => u.id === id);
  }
};
