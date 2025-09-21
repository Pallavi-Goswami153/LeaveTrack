import { NavLink } from "react-router-dom";
import { Navbar, Nav, Container, NavbarBrand } from "react-bootstrap";
import { Logout } from "./Logout";

export const EmpNavbar = () => {
  // const user = JSON.parse(localStorage.getItem("currentUser") || "null");

  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container fluid>
        <NavbarBrand className="fs-2 fw-b">LeaveTrack</NavbarBrand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
           
                
                    <Nav.Link as={NavLink} to="/dashboard">Dashboard</Nav.Link>
                    <Nav.Link as={NavLink} to="/leaveform">Apply Leave</Nav.Link>
                    <Nav.Link as={NavLink} to="/leavehistory">Leave History</Nav.Link>
                 
               
                <Nav.Link as={NavLink} to="/" onClick={Logout}>Logout</Nav.Link>
            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
