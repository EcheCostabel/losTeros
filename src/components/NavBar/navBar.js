import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "./navBar.css";
import React, { useState } from "react";
import logo from "./teroo.png";

function NavBar() {
  
  const [expanded, setExpanded] = useState(false);

  return (
    <Navbar className="fixed-top" bg="dark" expand="lg" expanded={expanded}>
      <Container>
        <a>
          <img src={logo} alt="Los Teros" height={80} width={120} />
        </a>

        <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={() => setExpanded(expanded ? false : "expanded")} />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#inicio" onClick={() => setExpanded(false)} className="navLinks js-scroll-trigger">
              Inicio
            </Nav.Link>
            <Nav.Link href="#principal" onClick={() => setExpanded(false)} className="navLinks js-scroll-trigger">
              Salon Principal
            </Nav.Link>
            <Nav.Link href="#hotel" onClick={() => setExpanded(false)} className="navLinks js-scroll-trigger">
              Hotel
            </Nav.Link>
            <Nav.Link href="#about" onClick={() => setExpanded(false)} className="navLinks js-scroll-trigger">
              Sobre Nosotros
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
