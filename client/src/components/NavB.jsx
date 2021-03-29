import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
// Bootstrap
import {
    Nav,
    Navbar,
    Form,
    FormControl,
    Button,
    NavDropdown,
  } from "react-bootstrap";
  
const NavB = () => {

    const { isAuthenticated, user } = useAuth0();

    return(
        <>
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Brand href="#home">Pick A Sport</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="#features">Home</Nav.Link>
            <Nav.Link href="#pricing">Find Games</Nav.Link>
          </Nav>
          <Navbar>
            {/* sined in as */}
            <Navbar.Collapse className="justify-content-end">
              <Navbar.Text>
                Signed in as: <a href="#login">{user.name}</a>
              </Navbar.Text>
            </Navbar.Collapse>
          </Navbar>
        </Navbar.Collapse>
      </Navbar>
      </>
    );

};

export default NavB;