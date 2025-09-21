import { LeaveService } from "../Services/LeaveService";
import { Table, Container } from "react-bootstrap";

export const LeaveHistory = () => {
  // Get the current logged-in user from localStorage
  const user = JSON.parse(localStorage.getItem("currentUser") || "null");
  
  // we will get the user id from the local storage and get the leave-history of the employee
  const leaves = user ? LeaveService.getLeaveHistoryByUser(user.id) : [];

  return (
    <Container>
      <h3 className="my-3">My Leave History</h3>
      {leaves.length === 0 ? (
        <p>No leave history available.</p>
      ) : (
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>ID</th>
              <th>Type</th>
              <th>Start Date</th>
              <th>End Date</th>
              <th>Reason</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {leaves.map((leave) => (
              <tr key={leave.id}>
                <td>{leave.id}</td>
                <td>{leave.type}</td>
                <td>{leave.startDate}</td>
                <td>{leave.endDate}</td>
                <td>{leave.reason}</td>
                <td>{leave.status}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      )}
    </Container>
  );
};
