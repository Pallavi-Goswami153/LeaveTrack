import { NavLink } from "react-router-dom";
import { Navbar, Nav, Container, NavbarBrand } from "react-bootstrap";
import { Logout } from "./Logout";

export const AdminNavbar = () => {
//   const user = JSON.parse(localStorage.getItem("currentUser") || "null");

  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container fluid>
        <NavbarBrand>LeaveTrack</NavbarBrand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
                    <Nav.Link as={NavLink} to="/admin-dashboard">Admin Dashboard</Nav.Link>
                    {/* <Nav.Link as={NavLink} to="/leave-approvals">Leave Approvals</Nav.Link> */}
                <Nav.Link as={NavLink} to="/" onClick={Logout}>Logout</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
