import React, { useState } from "react";
import { Table, Button, Container } from "react-bootstrap";
import { LeaveService } from "../Services/LeaveService";

export const AdminDashboard = () => {
  const [leave, setleave] = useState(LeaveService.getLeaveHistory());

  //method to handle all the leaves that we want to approve
  const approveleave = (id) => {
    LeaveService.approveLeave(id);
    setleave([...LeaveService.getLeaveHistory()]);
  };

//   method to handle all the leaves that we want to reject
  const rejectleave = (id) => {
    LeaveService.rejectLeave(id);
    setleave([...LeaveService.getLeaveHistory()]);
  };

  return (
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
          {leave.map((leave) => (
            <tr key={leave.id}>
              <td>{leave.id}</td>
              <td>{leave.appliedBy}</td>
              <td>{leave.type}</td>
              <td>{leave.startDate}</td>
              <td>{leave.endDate}</td>
              <td>{leave.reason}</td>
              <td>{leave.status}</td>
              <td>
                {leave.status === "Pending" ? (
                  <>
                    <Button
                      variant="success"
                      size="sm"
                      onClick={() => approveleave(leave.id)}
                      className="me-2"
                    >
                      Approve
                    </Button>
                    <Button
                      variant="danger"
                      size="sm"
                      onClick={() => rejectleave(leave.id)}
                    >
                      Reject
                    </Button>
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
  );
};
