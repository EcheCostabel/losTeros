import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './navBar.css'


function navBar() {
  return (
    <Navbar bg="dark" expand="lg">
      <Container>
        <Navbar.Brand href="#home" className='navLinks'>Complejo Los Teros</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto" >
            <Nav.Link href="#home" className='navLinks'>Home</Nav.Link>
            <Nav.Link href="#gallery" className='navLinks'>Galeria</Nav.Link>
            <Nav.Link href="#contact" className='navLinks'>Contacto</Nav.Link>
            <Nav.Link href="#link3" className='navLinks'>Sobre Nosotros</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default navBar;