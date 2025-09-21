import { LeaveService } from "../Services/LeaveService";
import { Table, Button, Container } from "react-bootstrap";

export const LeaveApprovals = () => {
  const leaves = LeaveService.getLeaveHistory(); // create a method to return leaveHistory

  const approve = (id) => {
    LeaveService.approveLeave(id);
    window.location.reload();
  };

  const reject = (id) => {
    LeaveService.rejectLeave(id);
    window.location.reload();
  };

  return (
    <Container>
      <h3 className="my-3">Leave Approvals</h3>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>ID</th>
            <th>Employee ID</th>
            <th>Type</th>
            <th>Start</th>
            <th>End</th>
            <th>Reason</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {leaves.map((leave) => (
            <tr key={leave.id}>
              <td>{leave.id}</td>
              <td>{leave.appliedBy}</td>
              <td>{leave.type}</td>
              <td>{leave.startDate}</td>
              <td>{leave.endDate}</td>
              <td>{leave.reason}</td>
              <td>{leave.status}</td>
              <td>
                {leave.status === "Pending" && (
                  <>
                    <Button onClick={() => approve(leave.id)} variant="success" size="sm">Approve</Button>{" "}
                    <Button onClick={() => reject(leave.id)} variant="danger" size="sm">Reject</Button>
                  </>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
};
