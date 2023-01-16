import React from "react";
import {
  Card,
  Col,
  Container,
  Nav,
  Navbar,
  NavDropdown,
  Row,
} from "react-bootstrap";
import { useNavigation } from "react-router";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <div>
      <Navbar collapseOnSelect expand="lg" variant="dark" className="header">
        <Container>
          <Navbar.Brand href="#home">MD ANSAR</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/about">About Me</Nav.Link>
              <Nav.Link href="/skills">Skills</Nav.Link>
              <NavDropdown title="Project" id="collasible-nav-dropdown">
                <NavDropdown.Item href="/projects">Projects</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Contact</NavDropdown.Item>
                <NavDropdown.Item target="_blank" href="https://drive.google.com/file/d/1O9n0BYilRGP-eBzE1S-rTJ2hHY2UaSce/view?usp=sharing">Resume</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">Courses</NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Nav>
              <Nav.Link href="#deets">contact</Nav.Link>
              <Nav.Link eventKey={2} target="_blank" href="https://drive.google.com/file/d/1O9n0BYilRGP-eBzE1S-rTJ2hHY2UaSce/view?usp=sharing">
                Resume Download
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
