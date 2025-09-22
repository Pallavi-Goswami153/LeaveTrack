import { Table, Button, Container } from "react-bootstrap";
import { useLeave } from "./ContextLevve";

export const AdminDashboard=()=>{
  const {Leave=[],approveLeaves,rejectLeaves}=useLeave();

  const sortedLeaves=[...Leave].sort((a,b)=>{
  if(a.status==="Pending" && b.status!=="Pending")return -1;
  if(a.status!=="Pending" && b.status==="Pending")return 1;
  return 0;
});

  //now i am using usecontext instead of managiing multiple sates at multiple places


//   const [leave, setleave] = useState(LeaveService.getLeaveHistory());

//   //method to handle all the leaves that we want to approve
//   const approveleave = (id) => {
//     LeaveService.approveLeave(id);
//     setleave([...LeaveService.getLeaveHistory()]);
//   };

// //   method to handle all the leaves that we want to reject
//   const rejectleave = (id) => {
//     LeaveService.rejectLeave(id);
//     setleave([...LeaveService.getLeaveHistory()]);
//   };

  return(
      <>
    <Container className="my-4">
      <h3>Admin Dashboard</h3>
      <h5>Leave Approvals</h5>
      <Table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Employee ID</th>
            <th>Leave Type</th>
            <th>Start Date</th>
            <th>End Date</th>
            <th>Reason</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {sortedLeaves?.map((i)=>(
            <tr key={i.id}>
              <td>{i.id}</td>
              <td>{i.appliedBy}</td>
              <td>{i.type}</td>
              <td>{i.startDate}</td>
              <td>{i.endDate}</td>
              <td>{i.reason}</td>
              <td>{i.status}</td>
              <td>
                {i.status === "Pending" ? (
                                <>
                                  <Button variant="success" size="sm" onClick={()=>approveLeaves(i.id)} className="me-2">Approve</Button>
                                  <Button variant="danger" size="sm"  onClick={()=>rejectLeaves(i.id)}>Reject</Button>
                                </>
                            ) : (
                              <span>-</span>
                            )}
                          </td>
                        </tr>
                      ))}
        </tbody>
      </Table>
    </Container>
     </>
  );
};
