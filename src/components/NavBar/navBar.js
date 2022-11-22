import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "./navBar.css";
import React, { useState } from 'react'
import logo from './fotloste.png'




function NavBar() {
//   const [ navBar1, setNavBar1 ] = useState(false)



// const changeNavBar = () => {
//   if(window.scrollY >= 50){
//     setNavBar1(true)
//   }else{
//     setNavBar1(false)
//   }\
// }

// window.addEventListener('scroll', changeNavBar)
  return (
    //  <Navbar className={navBar1 ? 'active-nav' : 'active-nav1'}>
    <Navbar className="fixed-top" bg="dark" expand="lg">
      <Container>
        
          <a>
            <img src={logo} alt='Los Teros' height={70} width={120}/>
             </ a>
        
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#inicio" className="navLinks">
              Inicio
            </Nav.Link>
            <Nav.Link href="#principal" className="navLinks">
              Salon Principal
            </Nav.Link>
            <Nav.Link href="#hotel" className="navLinks">
              Hotel
            </Nav.Link>
            <Nav.Link href="#about" className="navLinks">
              Sobre Nosotros
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
