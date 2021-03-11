import React, { useContext } from "react";
import { Navbar, Nav, Button, NavDropdown } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

import { GlobalContext } from "../context/GlobalState";
import { signInWithGoogle, signOut } from "../firebase";

export function NavBar() {
  const { user } = useContext(GlobalContext);
  return (
    <Navbar collapseOnSelect expand="md" bg="dark" variant="dark">
      <LinkContainer to="/">
        <Navbar.Brand href="#home">Kabisa coding assignment</Navbar.Brand>
      </LinkContainer>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
          <LinkContainer to="/slideshow">
            <Nav.Link>Slideshow</Nav.Link>
          </LinkContainer>

          <LinkContainer to="/likedquotes">
            <Nav.Link>Liked quotes</Nav.Link>
          </LinkContainer>
        </Nav>

        <Nav>
          {user ? (
            <NavDropdown
              title={`Hi ${user.displayName} `}
              id="basic-nav-dropdown"
            >
              <NavDropdown.Item onClick={signOut}>Signout</NavDropdown.Item>
            </NavDropdown>
          ) : (
            <Button onClick={signInWithGoogle}>Sign in with Google</Button>
          )}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
