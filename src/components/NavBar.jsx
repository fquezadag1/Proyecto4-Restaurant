import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';


export const NavBar = () => {
  return (
    <Navbar className="mb-5" bg="dark" data-bs-theme="dark">
      <Container>
        <Navbar.Brand as={Link} to="/">
          <img
            src="./src/images/logo.png"
            className="my-logo d-inline-block align-top"
          />
        </Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link as={Link} to="/about">Sobre Nosotros</Nav.Link>
          <Nav.Link as={Link} to="/contact">Contacto</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}
