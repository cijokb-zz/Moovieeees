import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';

const NavBar = ({ authenticated, logout }) => (
    <Navbar bg="dark" expand="lg" fixed="top" variant="dark">
        <Navbar.Brand href="#home">Movieeee</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
                <Nav.Link>About us</Nav.Link>
            </Nav>
            {authenticated ? <Nav.Link onClick={logout} style={{ color: "rgba(255,255,255,.5)" }}>Logout</Nav.Link> : null}
        </Navbar.Collapse>
    </Navbar>
);

export default NavBar;