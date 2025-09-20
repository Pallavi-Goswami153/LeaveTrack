import { NavLink } from "react-router-dom"
import {Navbar, NavbarBrand} from "react-bootstrap"
import { Logout } from "./Logout"
// import { users } from "../../public/data"
// import { useNavigate } from "react-router-dom"
export const NNavbar=()=>{
    const user=JSON.parse(localStorage.getItem("currentUser"));
    // const navigate=useNavigate();

    return(
        <>
        <Navbar>
        <NavbarBrand>LeaveTrack</NavbarBrand>
        <Navbar.Toggle aria-controls="basic-nav"/>
        <Navbar.Collapse id="basic-nav">
        <Nav className="me-auto">
        {user.role==="employee" && (
            <>
            <NavLink to="/dashBoard">Dashborad</NavLink>
            <NavLink to="/leaveform">Apply-Leave</NavLink>
            <NavLink to="/leavehistory">Leave-History</NavLink>
            </>
        )}
        {user.role==="admin" &&(
            <>
            <Nav.Link to="/admin-dashboard">Admin Dashboard</Nav.Link>
            <Nav.Link to="/leave-approvals">Leave Approvals</Nav.Link>
            </>
        )}
        <NavLink onClick={<Logout/>}>Logout</NavLink>
        </Nav>
        </Navbar.Collapse>
        </Navbar>
        </>
    )
}