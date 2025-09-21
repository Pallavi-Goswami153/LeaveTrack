import { leaveBalance, leaveHistory, users } from "../../public/data"

// leacveservices object with all the required methods
export const LeaveService={

    //login function to check if the user is valid or not
    login:(email,password)=>{
        const user=users.find(p=>p.email===email&&p.password===password);
        return user||null;
    },
    
    //get leave balance method                    
    getLeaveBalance: ()=>{
        return leaveBalance;
    },

    //Apply for leave method     --employee panel
    applyLeave:(leave,userId)=>{
        const newLeave={
            id:leaveHistory.length+1,
            ...leave,
            status:"Pending",
            appliedBy:userId
        };
        leaveHistory.push(newLeave);
        return newLeave;
    },
    //if leaves are pending then approve leave   --admin panel
    approveLeave:(id)=>{
        const leave=leaveHistory.find(p=>p.id===id);
        if(leave)
        {
            leave.status="Approved";
        }
        return leave;
    },
    //works same as approve leaves but sets the status as rejected             --admin panel
    rejectLeave:(id)=>{
        const leave=leaveHistory.find(p=>p.id===id);
        if(leave)
        {
            leave.status="Rejected";
        }
        return leave;
    },

    // all the leaves stored here that are applied by the employees  -- admin panel
    getLeaveHistory: () => {
  return leaveHistory;
},

//leave history of a particular employee

getLeaveHistoryByUser: (userId) => {
    return leaveHistory.filter(leave => leave.appliedBy === userId);
}



};