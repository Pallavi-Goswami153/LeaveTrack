import React from "react";
import { Card, Container } from "react-bootstrap";
import { LeaveService } from "../Services/LeaveService";

export const Dashboard=()=>{
  const currentUser=JSON.parse(localStorage.getItem("currentUser"));
  const user=LeaveService.getUserById(currentUser.id);

  return(
    <>
    <Container className="my-4 d-flex justify-content-center">
        <h3>Employee Dashboard</h3>
      <Card style={{width: "22rem"}} className="shadow">
        <Card.Body>
          <Card.Subtitle className="mb-3 text-muted">Employee Details</Card.Subtitle>
          <p><b>Name:</b>{user?.name}</p>
          <p><b>Email:</b>{user?.email}</p>
          <p><b>Role:</b>{user?.role}</p>
        </Card.Body>
      </Card>
    </Container>
     </>
  );
};
